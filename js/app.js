/* ========================================
   2026 World Cup Analyzer - Vue 3 App
   Enhanced with Poisson simulation & historical analysis
   ======================================== */
const { createApp, ref, computed, watch, onMounted, nextTick } = Vue;

/* ---- Poisson Distribution Engine ---- */
function poissonRandom(lambda) {
  if (lambda <= 0) return 0;
  const L = Math.exp(-lambda);
  let k = 0, p = 1;
  do { k++; p *= Math.random(); } while (p > L);
  return k - 1;
}

function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }

function poissonProb(k, lambda) {
  if (lambda <= 0) return k === 0 ? 1 : 0;
  return Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
}

/* Expected goals for teamA (attack) vs teamB (defense) */
function expectedGoals(attackA, defenseB) {
  const avgAttack = 73, avgDefense = 73;
  const baseRate = 1.35; // avg goals per team per WC match
  return baseRate * (attackA / avgAttack) / (defenseB / avgDefense);
}

/* Simulate a single match using Poisson */
function simulateMatch(teamA, teamB, data) {
  const strA = data.teamStrength[teamA] || { attack: 65, defense: 65 };
  const strB = data.teamStrength[teamB] || { attack: 65, defense: 65 };
  const xgA = expectedGoals(strA.attack, strB.defense);
  const xgB = expectedGoals(strB.attack, strA.defense);
  return { homeScore: poissonRandom(xgA), awayScore: poissonRandom(xgB), xgA, xgB };
}

/* Calculate match outcome probabilities */
function matchProbabilities(teamA, teamB, data) {
  const strA = data.teamStrength[teamA] || { attack: 65, defense: 65 };
  const strB = data.teamStrength[teamB] || { attack: 65, defense: 65 };
  const xgA = expectedGoals(strA.attack, strB.defense);
  const xgB = expectedGoals(strB.attack, strA.defense);
  let pWin = 0, pDraw = 0, pLose = 0;
  for (let ga = 0; ga <= 8; ga++) {
    for (let gb = 0; gb <= 8; gb++) {
      const prob = poissonProb(ga, xgA) * poissonProb(gb, xgB);
      if (ga > gb) pWin += prob;
      else if (ga === gb) pDraw += prob;
      else pLose += prob;
    }
  }
  return { pWin, pDraw, pLose, xgA, xgB };
}

/* ---- Group Standings Computation ---- */
function computeGroupStandings(gid, data) {
  const group = data.groups[gid];
  const matches = data.matchResults[gid] || [];
  const standings = {};
  group.teams.forEach(tid => {
    standings[tid] = { team: tid, pts: 0, played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0 };
  });
  matches.forEach(m => {
    if (!m.played) return;
    const h = standings[m.home], a = standings[m.away];
    if (!h || !a) return;
    h.played++; a.played++;
    h.gf += m.homeScore; h.ga += m.awayScore;
    a.gf += m.awayScore; a.ga += m.homeScore;
    if (m.homeScore > m.awayScore) { h.wins++; h.pts += 3; a.losses++; }
    else if (m.homeScore < m.awayScore) { a.wins++; a.pts += 3; h.losses++; }
    else { h.draws++; h.pts += 1; a.draws++; a.pts += 1; }
  });
  const result = Object.values(standings).map(s => ({ ...s, gd: s.gf - s.ga, key: gid + '-' + s.team }));
  result.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
  const totalPlayed = matches.filter(m => m.played).length;
  const allPlayed = totalPlayed === matches.length;
  result.forEach((s, i) => {
    s.qualified = false; s.eliminated = false; s.inContention = false;
    if (i < 2 && allPlayed) s.qualified = true;
    else if (i >= 2 && allPlayed) s.eliminated = true;
    else {
      const maxPts = s.pts + (3 - s.played) * 3;
      const secondPts = result[1] ? result[1].pts : 0;
      if (i < 2) s.inContention = true;
      else if (maxPts >= secondPts) s.inContention = true;
      else if (s.played === 0) s.inContention = true;
      else s.eliminated = true;
    }
  });
  return result;
}

/* ---- Monte Carlo Simulation Engine ---- */
function runMonteCarlo(data, iterations = 2000) {
  const groupKeys = Object.keys(data.groups);
  // Initialize counters
  const counters = {};
  for (const gid of groupKeys) {
    for (const tid of data.groups[gid].teams) {
      counters[tid] = { first: 0, second: 0, advance: 0, totalPoints: 0 };
    }
  }

  for (let iter = 0; iter < iterations; iter++) {
    const simResults = {};
    // Simulate all groups
    for (const gid of groupKeys) {
      const grp = data.groups[gid];
      const standings = {};
      grp.teams.forEach(tid => { standings[tid] = { team: tid, pts: 0, gf: 0, ga: 0, gd: 0, played: 0 }; });
      // Each pair plays once
      for (let i = 0; i < grp.teams.length; i++) {
        for (let j = i + 1; j < grp.teams.length; j++) {
          const t1 = grp.teams[i], t2 = grp.teams[j];
          const res = simulateMatch(t1, t2, data);
          const h = standings[t1], a = standings[t2];
          h.played++; a.played++;
          h.gf += res.homeScore; h.ga += res.awayScore;
          a.gf += res.awayScore; a.ga += res.homeScore;
          if (res.homeScore > res.awayScore) { h.pts += 3; }
          else if (res.homeScore < res.awayScore) { a.pts += 3; }
          else { h.pts += 1; a.pts += 1; }
        }
      }
      const sorted = Object.values(standings).map(s => ({ ...s, gd: s.gf - s.ga }))
        .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
      simResults[gid] = sorted;
    }
    // Record results
    for (const gid of groupKeys) {
      const st = simResults[gid];
      if (st.length > 0) { counters[st[0].team].first++; counters[st[0].team].advance++; counters[st[0].team].totalPoints += st[0].pts; }
      if (st.length > 1) { counters[st[1].team].second++; counters[st[1].team].advance++; counters[st[1].team].totalPoints += st[1].pts; }
      // 3rd place: only the best 8 of 12 advance
      if (st.length > 2) counters[st[2].team].totalPoints += st[2].pts;
    }
  }

  // Build per-group results with probabilities
  const groupResults = {};
  for (const gid of groupKeys) {
    const grp = data.groups[gid];
    const items = grp.teams.map(tid => {
      const c = counters[tid];
      const str = data.teamStrength[tid] || { overall: 60 };
      const hist = data.wcHistory[tid] || { apps: 0, best: 'N/A' };
      return {
        team: tid, name: data.teams[tid]?.name || tid, flag: data.teams[tid]?.flag || '🏳️',
        strength: str.overall,
        firstPct: (c.first / iterations * 100).toFixed(1),
        secondPct: (c.second / iterations * 100).toFixed(1),
        advancePct: (c.advance / iterations * 100).toFixed(1),
        avgPts: (c.totalPoints / iterations).toFixed(1),
        apps: hist.apps, best: hist.best
      };
    });
    items.sort((a, b) => parseFloat(b.advancePct) - parseFloat(a.advancePct));
    groupResults[gid] = items;
  }

  // Overall advancement ranking
  const allTeams = [];
  for (const gid of groupKeys) {
    for (const t of groupResults[gid]) {
      allTeams.push({ ...t, group: gid });
    }
  }
  allTeams.sort((a, b) => parseFloat(b.advancePct) - parseFloat(a.advancePct));

  return { groupResults, allTeams, iterations };
}

/* ---- The App ---- */
const app = createApp({
  setup() {
    const activeTab = ref('groups');
    const editGroup = ref('A');
    const editMatchIdx = ref(null);
    const editHomeScore = ref(0);
    const editAwayScore = ref(0);
    const activeChart = ref('possession');
    const showAnalysis = ref(false);
    const mcResults = ref(null);
    const mcRunning = ref(false);
    const analysisView = ref('groupPreview'); // groupPreview | difficulty | predictions
    let chartInstance = null;

    const tabs = [
      { id:'groups', label:'小组赛', icon:'📊' },
      { id:'analysis', label:'数据分析', icon:'📋' },
      { id:'bracket', label:'淘汰赛', icon:'🏅' },
      { id:'stats', label:'统计', icon:'📈' },
      { id:'history', label:'历史冠军', icon:'🏆' },
      { id:'simulator', label:'模拟预测', icon:'🔮' }
    ];

    const chartTypes = [
      { key:'possession', label:'控球率 (%)' },
      { key:'teamGoals', label:'总进球数' },
      { key:'goals', label:'射手榜' },
      { key:'assists', label:'助攻榜' }
    ];

    function getTeam(id) { return __WC_DATA.teams[id] || { name:id, flag:'🏳️', rank:999, color:'#666' }; }
    function getGroupMatches(gid) { return __WC_DATA.matchResults[gid] || []; }
    function getStrength(id) { return __WC_DATA.teamStrength[id] || { overall:60, attack:60, defense:60 }; }
    function getHistory(id) { return __WC_DATA.wcHistory[id] || { apps:0, best:'N/A', last3Wc:[], sfCount:0 }; }

    /* Computed standings */
    const computedStandings = computed(() => {
      const result = {};
      for (const gid of Object.keys(__WC_DATA.groups)) {
        result[gid] = computeGroupStandings(gid, __WC_DATA);
      }
      return result;
    });

    /* ---- GROUP ANALYSIS ---- */
    const groupStrengthAnalysis = computed(() => {
      return Object.entries(__WC_DATA.groups).map(([gid, grp]) => {
        const teams = grp.teams.map(tid => ({
          id: tid,
          name: getTeam(tid).name,
          flag: getTeam(tid).flag,
          strength: getStrength(tid).overall,
          rank: getTeam(tid).rank,
          apps: getHistory(tid).apps,
          best: getHistory(tid).best
        }));
        teams.sort((a, b) => b.strength - a.strength);
        const avgStrength = (teams.reduce((s, t) => s + t.strength, 0) / teams.length).toFixed(1);
        const host = ['A','B','C'].includes(gid);
        return { gid, name: grp.name, teams, avgStrength, host };
      });
    });

    /* ---- MATCH PROBABILITIES ---- */
    const allMatchProbabilities = computed(() => {
      const result = {};
      for (const [gid, grp] of Object.entries(__WC_DATA.groups)) {
        const probs = [];
        for (let i = 0; i < grp.teams.length; i++) {
          for (let j = i + 1; j < grp.teams.length; j++) {
            const t1 = grp.teams[i], t2 = grp.teams[j];
            const p = matchProbabilities(t1, t2, __WC_DATA);
            const existing = (__WC_DATA.matchResults[gid] || []).find(
              m => (m.home === t1 && m.away === t2) || (m.home === t2 && m.away === t1)
            );
            probs.push({
              home: t1, away: t2,
              homeName: getTeam(t1).name, awayName: getTeam(t2).name,
              homeFlag: getTeam(t1).flag, awayFlag: getTeam(t2).flag,
              pWin: (p.pWin * 100).toFixed(1),
              pDraw: (p.pDraw * 100).toFixed(1),
              pLose: (p.pLose * 100).toFixed(1),
              xgHome: p.xgA.toFixed(2),
              xgAway: p.xgB.toFixed(2),
              played: existing ? existing.played : false
            });
          }
        }
        result[gid] = probs;
      }
      return result;
    });

    /* ---- BRACKET ---- */
    const bracketRounds = computed(() => {
      const standings = computedStandings.value;
      const winners = [], runners = [];
      for (const [gid, st] of Object.entries(standings)) {
        if (st.length > 0 && st[0].qualified) winners.push({ ...st[0], group: gid });
        if (st.length > 1 && st[1].qualified) runners.push({ ...st[1], group: gid });
      }
      const r1 = [];
      for (let i = 0; i < Math.min(winners.length, runners.length); i++) {
        const w = winners[i], r = runners[(i + 1) % runners.length];
        if (w && r && w.group !== r.group) {
          r1.push({ home: w.team, homeFlag: getTeam(w.team).flag, away: r.team, awayFlag: getTeam(r.team).flag, winner: null });
        }
      }
      const rounds = [];
      if (r1.length > 0) {
        rounds.push({ label:'🏆 1/16 决赛 · Round of 32', matches: r1.slice(0, 16) });
        rounds.push({ label:'🏆 1/8 决赛 · Round of 16', matches: r1.slice(0, 8) });
        const ph = (label, n) => {
          const m = [];
          for (let i = 0; i < n; i++) m.push({ home:'TBD', homeFlag:'❓', away:'TBD', awayFlag:'❓' });
          rounds.push({ label, matches: m });
        };
        ph('🏆 1/4 决赛 · 四分之一决赛', 4);
        ph('🏆 1/2 决赛 · 半决赛', 2);
        ph('🏆 决赛 · 冠军战', 1);
      } else {
        rounds.push({ label:'🏆 淘汰赛对阵', matches: [{ home:'等待晋级', homeFlag:'🏳️', away:'等待晋级', awayFlag:'🏳️' }] });
      }
      return rounds;
    });

    function getBracketMatchStyle(r, m) { return {}; }

    /* ---- MATCH EDITING ---- */
    const editGroupMatches = computed(() => getGroupMatches(editGroup.value));
    function confirmMatchResult() {
      const matches = getGroupMatches(editGroup.value);
      if (editMatchIdx.value === null || !matches[editMatchIdx.value]) return;
      const m = matches[editMatchIdx.value];
      m.homeScore = editHomeScore.value;
      m.awayScore = editAwayScore.value;
      m.played = true;
      __WC_DATA.matchResults[editGroup.value] = [...matches];
      editMatchIdx.value = null;
    }
    function resetMatchResult() {
      const matches = getGroupMatches(editGroup.value);
      if (editMatchIdx.value === null || !matches[editMatchIdx.value]) return;
      matches[editMatchIdx.value].homeScore = 0;
      matches[editMatchIdx.value].awayScore = 0;
      matches[editMatchIdx.value].played = false;
      __WC_DATA.matchResults[editGroup.value] = [...matches];
      editMatchIdx.value = null;
    }

    /* ---- SIMULATOR (Poisson-based) ---- */
    const hasResults = computed(() => {
      for (const gid of Object.keys(__WC_DATA.matchResults))
        if (__WC_DATA.matchResults[gid].some(m => m.played)) return true;
      return false;
    });

    function simulateGroupPoisson() {
      for (const gid of Object.keys(__WC_DATA.groups)) {
        const matches = getGroupMatches(gid);
        matches.forEach((m, idx) => {
          const res = simulateMatch(m.home, m.away, __WC_DATA);
          m.homeScore = res.homeScore;
          m.awayScore = res.awayScore;
          m.played = true;
          m._xgHome = res.xgA;
          m._xgAway = res.xgB;
        });
        __WC_DATA.matchResults[gid] = [...matches];
      }
    }

    function runPoissonSimulation() {
      simulateGroupPoisson();
    }

    function runMonteCarloSimulation() {
      if (mcRunning.value) return;
      mcRunning.value = true;
      // Run async to not block UI
      setTimeout(() => {
        mcResults.value = runMonteCarlo(__WC_DATA, 2000);
        mcRunning.value = false;
      }, 50);
    }

    function resetAllMatches() {
      for (const gid of Object.keys(__WC_DATA.groups)) {
        const matches = getGroupMatches(gid);
        matches.forEach(m => { m.homeScore = 0; m.awayScore = 0; m.played = false; });
        __WC_DATA.matchResults[gid] = [...matches];
      }
      editMatchIdx.value = null;
      mcResults.value = null;
    }

    /* ---- PREDICTION SUMMARY ---- */
    const predictionSummary = computed(() => {
      const qualified = [], eliminated = [], contention = [];
      for (const [gid, st] of Object.entries(computedStandings.value)) {
        st.forEach(s => {
          if (s.qualified) qualified.push({ ...s, group: gid });
          else if (s.eliminated) eliminated.push({ ...s, group: gid });
          else if (s.inContention) contention.push({ ...s, group: gid });
        });
      }
      return { qualified, contention, eliminated };
    });

    const predictedKnockout = computed(() => {
      const br = bracketRounds.value;
      if (br.length > 0 && br[0].matches.length > 0) return br[0].matches;
      return [{ home:'待定', homeFlag:'🏳️', away:'待定', awayFlag:'🏳️' }];
    });

    /* ---- HISTORY ---- */
    const championCount = computed(() => {
      const s = new Set();
      __WC_DATA.history.forEach(h => s.add(h.winner === '西德' ? '德国' : h.winner));
      return s.size;
    });
    const championRankings = computed(() => {
      const map = {};
      const flags = { '巴西':'🇧🇷','德国':'🇩🇪','意大利':'🇮🇹','阿根廷':'🇦🇷','法国':'🇫🇷','乌拉圭':'🇺🇾','英格兰':'🏴󠁧󠁢󠁥󠁮󠁧󠁿','西班牙':'🇪🇸' };
      __WC_DATA.history.forEach(h => { const n = h.winner === '西德' ? '德国' : h.winner; map[n] = (map[n]||0) + 1; });
      return Object.entries(map).map(([n, c]) => ({ n, c, f: flags[n]||'🏳️' })).sort((a, b) => b.c - a.c);
    });

    /* ---- CHARTS ---- */
    function switchChart(key) { activeChart.value = key; setTimeout(() => updateChart(), 100); }
    function updateChart() {
      const canvas = document.getElementById('statsChart');
      if (!canvas) return;
      if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
      let data;
      const items = __WC_DATA.playerStats;
      if (activeChart.value === 'possession') {
        data = { labels: items.possession.map(i => i.zh), datasets: [{ label:'控球率 (%)', data: items.possession.map(i => i.value), backgroundColor:'rgba(16,185,129,0.7)', borderColor:'#10b981', borderWidth:1 }] };
      } else if (activeChart.value === 'teamGoals') {
        data = { labels: items.teamGoals.map(i => i.zh), datasets: [{ label:'总进球', data: items.teamGoals.map(i => i.value), backgroundColor:'rgba(59,130,246,0.7)', borderColor:'#3b82f6', borderWidth:1 }] };
      } else if (activeChart.value === 'goals') {
        data = { labels: items.goals.map(i => i.name + ' (' + i.team + ')'), datasets: [{ label:'进球', data: items.goals.map(i => i.value), backgroundColor:'rgba(16,185,129,0.7)', borderColor:'#10b981', borderWidth:1 }] };
      } else if (activeChart.value === 'assists') {
        data = { labels: items.assists.map(i => i.name + ' (' + i.team + ')'), datasets: [{ label:'助攻', data: items.assists.map(i => i.value), backgroundColor:'rgba(99,102,241,0.7)', borderColor:'#6366f1', borderWidth:1 }] };
      }
      if (!data) return;
      chartInstance = new Chart(canvas, {
        type:'bar', data,
        options:{
          indexAxis:'y', responsive:true, maintainAspectRatio:false,
          plugins:{
            legend:{ display:false },
            tooltip:{ backgroundColor:'#1a2332', titleColor:'#e8edf5', bodyColor:'#8899b4', borderColor:'#1e3a5f', borderWidth:1, padding:10 }
          },
          scales:{
            x:{ grid:{ color:'rgba(30,58,95,0.3)' }, ticks:{ color:'#5a6f8a' } },
            y:{ grid:{ display:false }, ticks:{ color:'#8899b4', font:{ size:11 } } }
          }
        }
      });
    }

    watch(activeTab, (tab) => {
      if (tab === 'stats') setTimeout(() => updateChart(), 200);
    });
    onMounted(() => setTimeout(() => updateChart(), 500));

    return {
      activeTab, tabs, __WC_DATA,
      editGroup, editMatchIdx, editHomeScore, editAwayScore,
      activeChart, chartTypes, analysisView,
      mcResults, mcRunning, showAnalysis,
      getTeam, getGroupMatches, getStrength, getHistory,
      computedStandings,
      groupStrengthAnalysis, allMatchProbabilities,
      bracketRounds, getBracketMatchStyle,
      confirmMatchResult, resetMatchResult,
      editGroupMatches,
      runPoissonSimulation, runMonteCarloSimulation, resetAllMatches,
      hasResults, predictionSummary, predictedKnockout,
      championCount, championRankings,
      switchChart, updateChart
    };
  }
});

app.mount('#app');
