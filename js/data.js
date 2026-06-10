/* ========================================
   2026 World Cup Data
   Including historical performance & team strengths
   ======================================== */
window.__WC_DATA = {
  groups: {
    A: { name: 'A组', teams: ['Canada','Croatia','Tunisia','Qatar'] },
    B: { name: 'B组', teams: ['Mexico','Switzerland','Poland','UAE'] },
    C: { name: 'C组', teams: ['USA','Denmark','Algeria','Jamaica'] },
    D: { name: 'D组', teams: ['Argentina','Morocco','Nigeria','Panama'] },
    E: { name: 'E组', teams: ['France','Uruguay','Serbia','Honduras'] },
    F: { name: 'F组', teams: ['England','Colombia','Ecuador','NewZealand'] },
    G: { name: 'G组', teams: ['Spain','Japan','Egypt','China'] },
    H: { name: 'H组', teams: ['Brazil','Iran','CostaRica','Paraguay'] },
    I: { name: 'I组', teams: ['Belgium','Senegal','SaudiArabia','Venezuela'] },
    J: { name: 'J组', teams: ['Portugal','SouthKorea','Ukraine','Ghana'] },
    K: { name: 'K组', teams: ['Netherlands','Australia','Sweden','Iraq'] },
    L: { name: 'L组', teams: ['Germany','Italy','Chile','Cameroon'] }
  },
  matchResults: {},

  /* Team info: name_zh, flag, FIFA rank, color */
  teams: {
    Canada:       { name:'加拿大', flag:'🇨🇦', rank:49, color:'#E0115F' },
    Croatia:      { name:'克罗地亚', flag:'🇭🇷', rank:9,  color:'#C8102E' },
    Tunisia:      { name:'突尼斯', flag:'🇹🇳', rank:30, color:'#E70013' },
    Qatar:        { name:'卡塔尔', flag:'🇶🇦', rank:58, color:'#8D1B3D' },
    Mexico:       { name:'墨西哥', flag:'🇲🇽', rank:12, color:'#006847' },
    Switzerland:  { name:'瑞士', flag:'🇨🇭', rank:15, color:'#DA291C' },
    Poland:       { name:'波兰', flag:'🇵🇱', rank:28, color:'#DC143C' },
    UAE:          { name:'阿联酋', flag:'🇦🇪', rank:69, color:'#00732F' },
    USA:          { name:'美国', flag:'🇺🇸', rank:11, color:'#3C3B6E' },
    Denmark:      { name:'丹麦', flag:'🇩🇰', rank:21, color:'#C60C30' },
    Algeria:      { name:'阿尔及利亚', flag:'🇩🇿', rank:43, color:'#006633' },
    Jamaica:      { name:'牙买加', flag:'🇯🇲', rank:63, color:'#009B3A' },
    Argentina:    { name:'阿根廷', flag:'🇦🇷', rank:1,  color:'#75AADB' },
    Morocco:      { name:'摩洛哥', flag:'🇲🇦', rank:13, color:'#C1272D' },
    Nigeria:      { name:'尼日利亚', flag:'🇳🇬', rank:42, color:'#008751' },
    Panama:       { name:'巴拿马', flag:'🇵🇦', rank:55, color:'#00529F' },
    France:       { name:'法国', flag:'🇫🇷', rank:2,  color:'#002395' },
    Uruguay:      { name:'乌拉圭', flag:'🇺🇾', rank:14, color:'#0038A8' },
    Serbia:       { name:'塞尔维亚', flag:'🇷🇸', rank:32, color:'#C6363C' },
    Honduras:     { name:'洪都拉斯', flag:'🇭🇳', rank:82, color:'#0073CF' },
    England:      { name:'英格兰', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', rank:4,  color:'#CF081F' },
    Colombia:     { name:'哥伦比亚', flag:'🇨🇴', rank:17, color:'#FCD116' },
    Ecuador:      { name:'厄瓜多尔', flag:'🇪🇨', rank:36, color:'#FFE600' },
    NewZealand:   { name:'新西兰', flag:'🇳🇿', rank:94, color:'#000000' },
    Spain:        { name:'西班牙', flag:'🇪🇸', rank:8,  color:'#C60B1E' },
    Japan:        { name:'日本', flag:'🇯🇵', rank:18, color:'#BC002D' },
    Egypt:        { name:'埃及', flag:'🇪🇬', rank:34, color:'#C8102E' },
    China:        { name:'中国', flag:'🇨🇳', rank:88, color:'#DE2910' },
    Brazil:       { name:'巴西', flag:'🇧🇷', rank:5,  color:'#009739' },
    Iran:         { name:'伊朗', flag:'🇮🇷', rank:22, color:'#239F40' },
    CostaRica:    { name:'哥斯达黎加', flag:'🇨🇷', rank:53, color:'#002B7F' },
    Paraguay:     { name:'巴拉圭', flag:'🇵🇾', rank:51, color:'#0038A8' },
    Belgium:      { name:'比利时', flag:'🇧🇪', rank:6,  color:'#FFE62E' },
    Senegal:      { name:'塞内加尔', flag:'🇸🇳', rank:20, color:'#00853F' },
    SaudiArabia:  { name:'沙特阿拉伯', flag:'🇸🇦', rank:56, color:'#006C35' },
    Venezuela:    { name:'委内瑞拉', flag:'🇻🇪', rank:54, color:'#FCD116' },
    Portugal:     { name:'葡萄牙', flag:'🇵🇹', rank:7,  color:'#006600' },
    SouthKorea:   { name:'韩国', flag:'🇰🇷', rank:26, color:'#C60C30' },
    Ukraine:      { name:'乌克兰', flag:'🇺🇦', rank:24, color:'#005BBB' },
    Ghana:        { name:'加纳', flag:'🇬🇭', rank:60, color:'#006633' },
    Netherlands:  { name:'荷兰', flag:'🇳🇱', rank:3,  color:'#FF6600' },
    Australia:    { name:'澳大利亚', flag:'🇦🇺', rank:39, color:'#FFD700' },
    Sweden:       { name:'瑞典', flag:'🇸🇪', rank:27, color:'#FFB300' },
    Iraq:         { name:'伊拉克', flag:'🇮🇶', rank:67, color:'#007A3D' },
    Germany:      { name:'德国', flag:'🇩🇪', rank:10, color:'#000000' },
    Italy:        { name:'意大利', flag:'🇮🇹', rank:16, color:'#009246' },
    Chile:        { name:'智利', flag:'🇨🇱', rank:45, color:'#D52B1E' },
    Cameroon:     { name:'喀麦隆', flag:'🇨🇲', rank:44, color:'#007A5E' }
  },

  /* ===== HISTORICAL TEAM STRENGTHS =====
     Overall: 0-100 composite rating based on:
     - FIFA ranking (40%)
     - WC historical performance (40%)
     - Continental strength (20%)
     attack/defense: separate ratings for Poisson simulation */
  teamStrength: {
    Argentina:    { overall:94, attack:92, defense:88 },
    France:       { overall:93, attack:94, defense:85 },
    Brazil:       { overall:92, attack:93, defense:83 },
    England:      { overall:90, attack:88, defense:85 },
    Spain:        { overall:89, attack:87, defense:84 },
    Portugal:     { overall:88, attack:86, defense:83 },
    Netherlands:  { overall:87, attack:85, defense:84 },
    Germany:      { overall:87, attack:85, defense:86 },
    Belgium:      { overall:86, attack:84, defense:81 },
    Croatia:      { overall:83, attack:80, defense:82 },
    Italy:        { overall:82, attack:79, defense:84 },
    Uruguay:      { overall:81, attack:79, defense:80 },
    Colombia:     { overall:80, attack:78, defense:77 },
    Morocco:      { overall:80, attack:76, defense:82 },
    Japan:        { overall:78, attack:76, defense:77 },
    Switzerland:  { overall:78, attack:74, defense:80 },
    Denmark:      { overall:78, attack:76, defense:77 },
    Mexico:       { overall:77, attack:75, defense:76 },
    USA:          { overall:76, attack:75, defense:74 },
    Senegal:      { overall:76, attack:74, defense:75 },
    Iran:         { overall:74, attack:72, defense:75 },
    SouthKorea:   { overall:74, attack:73, defense:72 },
    Poland:       { overall:73, attack:72, defense:72 },
    Serbia:       { overall:73, attack:73, defense:70 },
    Nigeria:      { overall:72, attack:73, defense:69 },
    Sweden:       { overall:72, attack:70, defense:73 },
    Ukraine:      { overall:71, attack:70, defense:71 },
    Australia:    { overall:70, attack:68, defense:70 },
    Ecuador:      { overall:70, attack:70, defense:68 },
    Algeria:      { overall:69, attack:69, defense:67 },
    Tunisia:      { overall:68, attack:66, defense:70 },
    Egypt:        { overall:68, attack:68, defense:66 },
    Chile:        { overall:67, attack:68, defense:65 },
    CostaRica:    { overall:66, attack:63, defense:68 },
    Ghana:        { overall:65, attack:66, defense:62 },
    Cameroon:     { overall:65, attack:65, defense:63 },
    Paraguay:     { overall:64, attack:62, defense:66 },
    SaudiArabia:  { overall:63, attack:63, defense:62 },
    Canada:       { overall:62, attack:61, defense:62 },
    Jamaica:      { overall:59, attack:59, defense:58 },
    Qatar:        { overall:58, attack:57, defense:59 },
    Panama:       { overall:57, attack:56, defense:57 },
    Iraq:         { overall:56, attack:56, defense:55 },
    UAE:          { overall:55, attack:55, defense:54 },
    Venezuela:    { overall:55, attack:56, defense:53 },
    NewZealand:   { overall:54, attack:52, defense:56 },
    China:        { overall:53, attack:52, defense:54 },
    Honduras:     { overall:52, attack:51, defense:54 }
  },

  /* ===== WORLD CUP HISTORY PER TEAM ===== */
  wcHistory: {
    Argentina: { apps:18, best:'冠军', bestYear:2022, last3Wc:[2,16,1], sfCount:6, groupExit:0 },
    France:    { apps:16, best:'冠军', bestYear:2018, last3Wc:[1,8,1], sfCount:7, groupExit:0 },
    Brazil:    { apps:22, best:'冠军', bestYear:2002, last3Wc:[4,8,4], sfCount:11, groupExit:0 },
    England:   { apps:16, best:'冠军', bestYear:1966, last3Wc:[4,4,2], sfCount:4, groupExit:0 },
    Spain:     { apps:16, best:'冠军', bestYear:2010, last3Wc:[16,8,16], sfCount:3, groupExit:0 },
    Portugal:  { apps:8,  best:'季军', bestYear:1966, last3Wc:[16,4,8], sfCount:2, groupExit:1 },
    Netherlands:{ apps:11, best:'亚军', bestYear:2010, last3Wc:[3,8,null], sfCount:5, groupExit:0 },
    Germany:   { apps:20, best:'冠军', bestYear:2014, last3Wc:[1,16,8], sfCount:13, groupExit:0 },
    Belgium:   { apps:14, best:'季军', bestYear:2018, last3Wc:[3,8,16], sfCount:2, groupExit:1 },
    Croatia:   { apps:6,  best:'亚军', bestYear:2018, last3Wc:[2,3,16], sfCount:3, groupExit:1 },
    Italy:     { apps:18, best:'冠军', bestYear:2006, last3Wc:[1,16,null], sfCount:8, groupExit:0 },
    Uruguay:   { apps:14, best:'冠军', bestYear:1950, last3Wc:[4,8,16], sfCount:5, groupExit:2 },
    Colombia:  { apps:6,  best:'8强',  bestYear:2014, last3Wc:[8,16,null], sfCount:0, groupExit:2 },
    Morocco:   { apps:6,  best:'4强',  bestYear:2022, last3Wc:[16,16,4], sfCount:1, groupExit:3 },
    Japan:     { apps:7,  best:'16强', bestYear:2018, last3Wc:[16,16,8], sfCount:0, groupExit:1 },
    Switzerland:{ apps:12, best:'8强', bestYear:1954, last3Wc:[16,8,16], sfCount:0, groupExit:3 },
    Denmark:   { apps:6,  best:'8强', bestYear:1998, last3Wc:[16,8,16], sfCount:0, groupExit:2 },
    Mexico:    { apps:17, best:'8强', bestYear:1986, last3Wc:[16,16,8], sfCount:0, groupExit:3 },
    USA:       { apps:11, best:'8强', bestYear:2002, last3Wc:[16,16,8], sfCount:0, groupExit:3 },
    Senegal:   { apps:3,  best:'16强', bestYear:2022, last3Wc:[8,null,16], sfCount:0, groupExit:1 },
    Iran:      { apps:6,  best:'16强', bestYear:2022, last3Wc:[16,16,8], sfCount:0, groupExit:3 },
    SouthKorea:{ apps:11, best:'4强',  bestYear:2002, last3Wc:[8,16,16], sfCount:1, groupExit:3 },
    Poland:    { apps:9,  best:'季军', bestYear:1974, last3Wc:[16,8,16], sfCount:2, groupExit:3 },
    Serbia:    { apps:4,  best:'16强', bestYear:1998, last3Wc:[16,16,8], sfCount:0, groupExit:2 },
    Nigeria:   { apps:6,  best:'16强', bestYear:2014, last3Wc:[16,16,8], sfCount:0, groupExit:3 },
    Sweden:    { apps:12, best:'亚军', bestYear:1958, last3Wc:[8,8,null], sfCount:3, groupExit:1 },
    Ukraine:   { apps:1,  best:'8强',  bestYear:2006, last3Wc:[8,null,null], sfCount:0, groupExit:0 },
    Australia: { apps:6,  best:'16强', bestYear:2006, last3Wc:[16,16,8], sfCount:0, groupExit:3 },
    Ecuador:   { apps:4,  best:'16强', bestYear:2006, last3Wc:[16,8,null], sfCount:0, groupExit:1 },
    Algeria:   { apps:4,  best:'16强', bestYear:2014, last3Wc:[16,8,null], sfCount:0, groupExit:1 },
    Tunisia:   { apps:6,  best:'16强', bestYear:1978, last3Wc:[16,8,16], sfCount:0, groupExit:4 },
    Egypt:     { apps:3,  best:'16强', bestYear:2002, last3Wc:[8,null,16], sfCount:0, groupExit:1 },
    Chile:     { apps:9,  best:'季军', bestYear:1962, last3Wc:[16,8,null], sfCount:1, groupExit:2 },
    CostaRica: { apps:6,  best:'8强',  bestYear:2014, last3Wc:[8,16,16], sfCount:0, groupExit:2 },
    Ghana:     { apps:4,  best:'8强',  bestYear:2010, last3Wc:[8,16,16], sfCount:0, groupExit:0 },
    Cameroon:  { apps:8,  best:'8强',  bestYear:1990, last3Wc:[16,8,null], sfCount:0, groupExit:4 },
    Paraguay:  { apps:8,  best:'8强',  bestYear:2010, last3Wc:[8,null,null], sfCount:0, groupExit:2 },
    SaudiArabia:{ apps:6, best:'16强', bestYear:1994, last3Wc:[16,8,16], sfCount:0, groupExit:5 },
    Canada:    { apps:2,  best:'16强', bestYear:1986, last3Wc:[16,null,null], sfCount:0, groupExit:1 },
    Jamaica:   { apps:1,  best:'16强', bestYear:1998, last3Wc:[16,null,null], sfCount:0, groupExit:0 },
    Qatar:     { apps:1,  best:'16强', bestYear:2022, last3Wc:[16,null,null], sfCount:0, groupExit:0 },
    Panama:    { apps:1,  best:'16强', bestYear:2018, last3Wc:[16,null,null], sfCount:0, groupExit:0 },
    Iraq:      { apps:1,  best:'16强', bestYear:1986, last3Wc:[null,null,null], sfCount:0, groupExit:1 },
    UAE:       { apps:0,  best:'未晋级', bestYear:null, last3Wc:[null,null,null], sfCount:0, groupExit:0 },
    Venezuela: { apps:0,  best:'未晋级', bestYear:null, last3Wc:[null,null,null], sfCount:0, groupExit:0 },
    NewZealand:{ apps:2,  best:'16强', bestYear:2010, last3Wc:[16,null,null], sfCount:0, groupExit:0 },
    China:     { apps:1,  best:'16强', bestYear:2002, last3Wc:[16,null,null], sfCount:0, groupExit:0 },
    Honduras:  { apps:3,  best:'16强', bestYear:2014, last3Wc:[16,null,null], sfCount:0, groupExit:2 }
  },

  /* ===== HEAD-TO-HEAD WORLD CUP MATCHUPS =====
     Key historical head-to-head records among top teams */
  headToHead: {
    'Argentina-France':       { a:0, b:2, d:1, note:'法国胜2018 4-3, 阿根廷胜2022(点球)' },
    'Argentina-Germany':      { a:1, b:4, d:1, note:'德国胜2006点球, 2010, 2014; 阿根廷胜2022' },
    'Argentina-Netherlands':  { a:1, b:0, d:3, note:'阿根廷胜2022点球; 荷兰平1974, 1998, 2006' },
    'Argentina-England':      { a:2, b:1, d:1, note:'阿根廷胜1986, 1998; 英格兰胜1966; 平1986小组' },
    'Brazil-Germany':         { a:1, b:3, d:1, note:'德国胜2002, 2014(7-1); 巴西胜2014(三四名)' },
    'Brazil-France':          { a:1, b:1, d:2, note:'法国胜1998, 2006; 巴西胜1958' },
    'Brazil-Netherlands':     { a:1, b:1, d:1, note:'巴西胜1994; 荷兰胜2010; 平2014三四名' },
    'England-France':         { a:0, b:1, d:1, note:'法国胜1982; 平1966' },
    'England-Germany':        { a:1, b:1, d:2, note:'英格兰胜1966; 德国胜1990, 2010; 平1990, 2012' },
    'France-Portugal':        { a:1, b:1, d:1, note:'法国胜2006; 葡萄牙胜2016; 平2000' },
    'Spain-Italy':            { a:1, b:0, d:1, note:'西班牙胜2012; 平1934' },
    'Brazil-Argentina':       { a:1, b:1, d:2, note:'巴西胜2005联合会杯; 阿根廷胜2021美洲杯; 世界杯交手不多' }
  },

  /* ===== HISTORICAL WINNERS ===== */
  history: [
    { year:1930, host:'乌拉圭', winner:'乌拉圭', runnerUp:'阿根廷', score:'4-2' },
    { year:1934, host:'意大利', winner:'意大利', runnerUp:'捷克斯洛伐克', score:'2-1' },
    { year:1938, host:'法国', winner:'意大利', runnerUp:'匈牙利', score:'4-2' },
    { year:1950, host:'巴西', winner:'乌拉圭', runnerUp:'巴西', score:'2-1' },
    { year:1954, host:'瑞士', winner:'西德', runnerUp:'匈牙利', score:'3-2' },
    { year:1958, host:'瑞典', winner:'巴西', runnerUp:'瑞典', score:'5-2' },
    { year:1962, host:'智利', winner:'巴西', runnerUp:'捷克斯洛伐克', score:'3-1' },
    { year:1966, host:'英格兰', winner:'英格兰', runnerUp:'西德', score:'4-2' },
    { year:1970, host:'墨西哥', winner:'巴西', runnerUp:'意大利', score:'4-1' },
    { year:1974, host:'西德', winner:'西德', runnerUp:'荷兰', score:'2-1' },
    { year:1978, host:'阿根廷', winner:'阿根廷', runnerUp:'荷兰', score:'3-1' },
    { year:1982, host:'西班牙', winner:'意大利', runnerUp:'西德', score:'3-1' },
    { year:1986, host:'墨西哥', winner:'阿根廷', runnerUp:'西德', score:'3-2' },
    { year:1990, host:'意大利', winner:'西德', runnerUp:'阿根廷', score:'1-0' },
    { year:1994, host:'美国', winner:'巴西', runnerUp:'意大利', score:'0-0(3-2)' },
    { year:1998, host:'法国', winner:'法国', runnerUp:'巴西', score:'3-0' },
    { year:2002, host:'韩国/日本', winner:'巴西', runnerUp:'德国', score:'2-0' },
    { year:2006, host:'德国', winner:'意大利', runnerUp:'法国', score:'1-1(5-3)' },
    { year:2010, host:'南非', winner:'西班牙', runnerUp:'荷兰', score:'1-0' },
    { year:2014, host:'巴西', winner:'德国', runnerUp:'阿根廷', score:'1-0' },
    { year:2018, host:'俄罗斯', winner:'法国', runnerUp:'克罗地亚', score:'4-2' },
    { year:2022, host:'卡塔尔', winner:'阿根廷', runnerUp:'法国', score:'3-3(4-2)' }
  ],

  /* ===== PLAYER STATS (2022 reference) ===== */
  playerStats: {
    goals: [
      { name:'Kylian Mbappé', team:'France', value:8, flag:'🇫🇷' },
      { name:'Lionel Messi', team:'Argentina', value:7, flag:'🇦🇷' },
      { name:'Olivier Giroud', team:'France', value:4, flag:'🇫🇷' },
      { name:'Julián Álvarez', team:'Argentina', value:4, flag:'🇦🇷' },
      { name:'Marcus Rashford', team:'England', value:3, flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { name:'Richarlison', team:'Brazil', value:3, flag:'🇧🇷' },
      { name:'Bukayo Saka', team:'England', value:3, flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { name:'Enner Valencia', team:'Ecuador', value:3, flag:'🇪🇨' },
      { name:'Gonçalo Ramos', team:'Portugal', value:3, flag:'🇵🇹' },
      { name:'Cody Gakpo', team:'Netherlands', value:3, flag:'🇳🇱' }
    ],
    assists: [
      { name:'Lionel Messi', team:'Argentina', value:5, flag:'🇦🇷' },
      { name:'Antoine Griezmann', team:'France', value:4, flag:'🇫🇷' },
      { name:'Ivan Perišić', team:'Croatia', value:3, flag:'🇭🇷' },
      { name:'Harry Kane', team:'England', value:3, flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { name:'Kevin De Bruyne', team:'Belgium', value:3, flag:'🇧🇪' },
      { name:'Bruno Fernandes', team:'Portugal', value:3, flag:'🇵🇹' },
      { name:'Vinícius Jr', team:'Brazil', value:2, flag:'🇧🇷' },
      { name:'Jude Bellingham', team:'England', value:2, flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { name:'Kylian Mbappé', team:'France', value:2, flag:'🇫🇷' },
      { name:'Christian Eriksen', team:'Denmark', value:2, flag:'🇩🇰' }
    ],
    possession: [
      { name:'Spain', zh:'西班牙', flag:'🇪🇸', value:72.1 },
      { name:'Germany', zh:'德国', flag:'🇩🇪', value:68.5 },
      { name:'France', zh:'法国', flag:'🇫🇷', value:67.3 },
      { name:'Argentina', zh:'阿根廷', flag:'🇦🇷', value:66.8 },
      { name:'Brazil', zh:'巴西', flag:'🇧🇷', value:65.2 },
      { name:'England', zh:'英格兰', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', value:64.7 },
      { name:'Netherlands', zh:'荷兰', flag:'🇳🇱', value:63.9 },
      { name:'Portugal', zh:'葡萄牙', flag:'🇵🇹', value:62.4 },
      { name:'Belgium', zh:'比利时', flag:'🇧🇪', value:61.8 },
      { name:'Italy', zh:'意大利', flag:'🇮🇹', value:60.5 }
    ],
    teamGoals: [
      { name:'France', zh:'法国', flag:'🇫🇷', value:16 },
      { name:'Argentina', zh:'阿根廷', flag:'🇦🇷', value:15 },
      { name:'England', zh:'英格兰', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', value:13 },
      { name:'Brazil', zh:'巴西', flag:'🇧🇷', value:12 },
      { name:'Portugal', zh:'葡萄牙', flag:'🇵🇹', value:12 },
      { name:'Spain', zh:'西班牙', flag:'🇪🇸', value:11 },
      { name:'Netherlands', zh:'荷兰', flag:'🇳🇱', value:10 },
      { name:'Germany', zh:'德国', flag:'🇩🇪', value:9 },
      { name:'Croatia', zh:'克罗地亚', flag:'🇭🇷', value:8 },
      { name:'Belgium', zh:'比利时', flag:'🇧🇪', value:7 }
    ]
  }
};

/* ===== Initialize match results ===== */
function initMatchResults() {
  const r = {};
  for (const gid of Object.keys(__WC_DATA.groups)) {
    const t = __WC_DATA.groups[gid].teams;
    r[gid] = [];
    for (let i = 0; i < t.length; i++) {
      for (let j = i + 1; j < t.length; j++) {
        r[gid].push({ home: t[i], away: t[j], homeScore: 0, awayScore: 0, played: false });
      }
    }
  }
  __WC_DATA.matchResults = r;
}
initMatchResults();
