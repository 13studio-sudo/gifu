/* =============================================================
   THE SPIRIT OF GIFU — Living with Wood
   9 pages. Each page is one GIFU.pages["key"] = {…}
   module; the order here is the order of the navigation
   (GIFU.NAV in assets/js/core.js).
   ============================================================= */

/* ---- ---------------------------------------------- care */
GIFU.pages["care"] = { kicker:{ en:"Living with Wood · 01", ja:"木と暮らす · 01", zh:"與木共處 · 01" },
  title:{ en:"Caring for Wood", ja:"木の手入れ", zh:"木器保養" },
  jp:"手入れ",
  lede:{
    en:"A wooden table, a lacquered bowl or a hinoki cutting board asks for very little: keep it away from standing water, fierce heat and sudden changes of air, use it often, and have it mended when it breaks. Most of what goes wrong with wooden things in a Japanese or Taiwanese home comes from humidity — the long wet season, the dry heated winter, the air-conditioner blowing straight at a chair. This page gathers the practical advice of Gifu's furniture makers, lacquerers, masu makers and scientists: how to clean and oil, how to lift a dent, how to keep mould out of a bentwood lunch box, and where to send a piece for repair.",
    ja:"木の食卓、漆の椀、ヒノキのまな板が求めるものはごくわずかである。たまった水、強い熱、急な空気の変化から遠ざけ、しばしば使い、壊れたら直してもらうこと。日本や台湾の家で木のものに起きる不具合の多くは湿気から来る——長い雨の季節、暖房で乾いた冬、椅子にまっすぐ吹きつけるエアコン。この頁は、岐阜の家具メーカー、塗師、枡のつくり手、研究者の実際的な助言を集めたものである。拭き方と油の塗り方、へこみの戻し方、曲げわっぱの弁当箱にカビを生やさない方法、そして修理をどこに頼むか。",
    zh:"一張木桌、一只漆碗、一塊扁柏砧板，所求其實很少：遠離積水、高熱與空氣的驟變，經常使用，壞了就送修。日本或台灣家中木器出的問題，多半來自濕度——漫長的雨季、暖氣烘乾的冬天、直吹椅子的冷氣。本頁彙整岐阜家具廠、漆師、木枡工匠與研究者的實用建議：如何清潔與上油、如何讓凹痕回復、如何讓曲木便當盒不發霉，以及該把木器送到哪裡修理。" },
  body:[
    { t:"section",
      id:"humidity",
      title:{ en:"Living with humidity", ja:"湿度とつきあう", zh:"與濕度共處" },
      jp:"湿度",
      body:[
        { t:"p",
          text:{
            en:"Almost all everyday care of wood is the management of water and heat. Wood never stops exchanging moisture with the air around it — the physics is explained on <a href=\"moisture.html\">Wood &amp; Water</a> — and what matters to an owner is how wide and how fast the swings are. The United States Forest Products Laboratory's standard table gives the scale: at 21 °C, air at 40 per cent relative humidity brings wood to about 7.7 per cent moisture content, while air at 75 per cent brings it to about 14.4 per cent. Using the shrinkage figures for Japanese oak on that page, a change of seven points could alter the width of a flat-sawn board by up to about 2 per cent — well over a centimetre across a wide table top. Well-made furniture is designed to let that happen: tops are fixed with sliding buttons, panels float in grooves, and drawers are fitted with a season in mind. Care is mostly a matter of not forcing the movement to happen too quickly.",
            ja:"木の日々の手入れは、ほとんどが水と熱の管理である。木はまわりの空気と水分をやりとりすることをやめない——その物理は<a href=\"moisture.html\">木と水分</a>で説明した——持ち主にとって大事なのは、その振れ幅がどれほど大きく、どれほど速いかである。アメリカ林産物研究所の標準的な表が目安を示す。二十一度で相対湿度四十パーセントの空気は木を含水率約7.7パーセントにし、七十五パーセントの空気は約14.4パーセントにする。同じ頁のミズナラの収縮の値を使えば、七ポイントの変化は板目の板の幅を最大で約二パーセント変えうる——広い天板なら一センチを優に超える。よくできた家具は、それが起きるように設計されている。天板は滑る留め具で固定され、鏡板は溝のなかで浮き、引出しは季節を見越して合わせてある。手入れとは、おもにその動きを急がせすぎないことである。",
            zh:"木器的日常保養，幾乎都是在管理水與熱。木材永遠不停地與周圍空氣交換水分——其物理原理見<a href=\"moisture.html\">木與水分</a>——對使用者而言，重要的是變動的幅度有多大、速度有多快。美國林產品研究所的標準表格提供了尺度：在 21°C 下，相對濕度 40% 的空氣會使木材含水率趨近約 7.7%，而 75% 的空氣則使其趨近約 14.4%。以該頁水楢的收縮數據推算，七個百分點的變化，可使弦切板的寬度改變最多約 2%——在寬大的桌面上遠超過 1 公分。做工良好的家具本就設計成容許這種變化：桌面以可滑動的扣件固定，鑲板浮在溝槽中，抽屜也預先考量了季節。所謂保養，主要就是別讓這種變動發生得太快。" } },
        { t:"p",
          text:{
            en:"The climates that matter to readers of this book are quite different. Gifu city, on the Mino plain, has a mean relative humidity of 58 per cent in March rising to 73 per cent in July. Takayama, in the mountains of Hida, is damper on paper — 68 per cent in April and May, 84 per cent in December — but its winter figure is deceptive: air at −1 °C holds very little water, and once it is warmed to 20 °C inside a house its relative humidity falls steeply. The driest place a piece of Hida furniture will ever stand is therefore a heated room in a snowy winter, not a sunny terrace. Taipei, by contrast, stays between 70 and 78 per cent in every month of the year, so wood there settles at a higher and steadier moisture content than anywhere in Gifu, and the risks shift from cracking towards swelling and mould.",
            ja:"この本の読者にかかわる気候は、それぞれかなり違う。美濃平野の岐阜市の平均相対湿度は、三月の五十八パーセントから七月の七十三パーセントまで上がる。飛騨の山あいの高山は数字の上ではより湿っている——四月と五月に六十八パーセント、十二月に八十四パーセント——が、冬の数字は見かけにすぎない。零下一度の空気はごくわずかな水しか含まず、家のなかで二十度に暖められると相対湿度は急に下がる。だから飛騨の家具が置かれるいちばん乾いた場所は、日の当たる縁側ではなく、雪の冬に暖房した部屋である。台北は逆に、一年のどの月も七十〜七十八パーセントにとどまるので、木は岐阜のどこよりも高く安定した含水率に落ち着き、心配ごとは割れから、ふくらみとカビのほうへ移る。",
            zh:"與本書讀者相關的幾種氣候差異頗大。位於美濃平原的岐阜市，平均相對濕度從三月的 58% 升到七月的 73%。飛驒山間的高山，數字上更潮濕——四、五月為 68%，十二月為 84%——但冬季的數字會騙人：−1°C 的空氣所含水分極少，一旦在屋內被加熱到 20°C，相對濕度便急遽下降。因此，飛驒家具所處最乾燥的地方，不是陽光下的簷廊，而是雪季裡開著暖氣的房間。相反地，台北一年中每個月都維持在 70% 到 78% 之間，木材在這裡穩定在比岐阜任何地方都高的含水率，風險也從開裂轉向膨脹與發霉。" } },
        { t:"figure",
          caption:{
            en:"Mean monthly relative humidity, 1991–2020 normals, for Gifu city, Takayama and Taipei. Sources: Japan Meteorological Agency climate normals (Gifu, Takayama); Central Weather Bureau of Taiwan normals for Taipei as tabulated in the Wikipedia article “Climate of Taiwan”. Indoor humidity in a heated winter room is far lower than the outdoor figures shown.",
            ja:"岐阜市、高山、台北の月平均相対湿度（一九九一〜二〇二〇年の平年値）。出典：気象庁の平年値（岐阜、高山）、台湾中央気象局の台北の平年値（ウィキペディア英語版「Climate of Taiwan」の表による）。冬に暖房した部屋の湿度は、ここに示した屋外の値よりはるかに低い。",
            zh:"岐阜市、高山與台北的月平均相對濕度（1991–2020 年氣候平均值）。資料來源：日本氣象廳氣候平均值（岐阜、高山）；台灣中央氣象局台北平均值（據英文維基百科「Climate of Taiwan」條目所列表格）。冬季開暖氣的室內濕度遠低於圖中的戶外數值。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"Relative humidity through the year", ja:"一年の相対湿度", zh:"一年中的相對濕度" },
            unit:{ en:"mean relative humidity, %", ja:"平均相対湿度（％）", zh:"平均相對濕度（%）" },
            x0:1, x1:12, y0:50, y1:90, tick:10, xt:[1,2,3,4,5,6,7,8,9,10,11,12],
            series:[
              { n:{ en:"Taipei", ja:"台北", zh:"台北" }, pts:[[1,77.2],[2,77.8],[3,76.1],[4,74.9],[5,74.7],[6,75.3],[7,70.2],[8,72.1],[9,73.9],[10,74.4],[11,75.0],[12,75.9]] },
              { n:{ en:"Takayama", ja:"高山", zh:"高山" }, pts:[[1,82],[2,78],[3,73],[4,68],[5,68],[6,74],[7,78],[8,77],[9,79],[10,81],[11,82],[12,84]], dash:"5 4" },
              { n:{ en:"Gifu city", ja:"岐阜市", zh:"岐阜市" }, pts:[[1,66],[2,62],[3,58],[4,59],[5,63],[6,70],[7,73],[8,69],[9,70],[10,67],[11,67],[12,68]] }
            ],
            note:{ en:"Horizontal axis: month (1 = January).", ja:"横軸：月（1＝一月）。", zh:"橫軸：月份（1 = 一月）。" } }); } },
        { t:"tiny",
          text:{
            en:"Sources: Forest Products Laboratory, Wood Handbook (1999), table of equilibrium moisture content; Japan Meteorological Agency, climate normals 1991–2020; Central Weather Bureau (Taiwan) normals.",
            ja:"出典：アメリカ林産物研究所『Wood Handbook』（一九九九年）平衡含水率表、気象庁 平年値（一九九一〜二〇二〇年）、台湾中央気象局 平年値。",
            zh:"資料來源：美國林產品研究所《Wood Handbook》（1999 年）平衡含水率表；日本氣象廳 1991–2020 年氣候平均值；台灣中央氣象局氣候平均值。" } },
        { t:"p",
          text:{
            en:"Three rules follow. First, keep wood away from anything that changes its surroundings quickly: heater and air-conditioner outlets, direct afternoon sun, the top of a floor-heating panel. Second, let furniture move with the seasons rather than fight it: a drawer that sticks in the rainy season will usually run freely again in autumn, and planing it in June leaves a gap in January. Third, expect small noises and changes — Hida Sangyō's own customer advice notes that swollen drawers in humid weather and the occasional creak of a table are ordinary behaviour of solid wood, not defects.",
            ja:"ここから三つの決まりが出てくる。第一に、まわりを急に変えるものから木を遠ざけること。暖房やエアコンの吹き出し口、午後の直射日光、床暖房の真上である。第二に、季節の動きと争わず、家具を動くにまかせること。梅雨どきに固くなった引出しはたいてい秋にはまた滑らかに動き、六月に鉋で削れば一月にはすきまが空く。第三に、小さな音や変化は想定しておくこと。飛騨産業の利用者向けの案内も、湿った季節に引出しがふくらむことや、ときおり食卓がきしむことは無垢材のふつうのふるまいで、欠陥ではないとしている。",
            zh:"由此得出三條原則。第一，讓木器遠離會急速改變周遭環境的東西：暖氣與冷氣出風口、午後的直射陽光、地暖面板的正上方。第二，讓家具隨季節變動，而不是與之對抗：雨季卡住的抽屜，通常到了秋天又會順暢；若在六月把它刨薄，一月就會出現縫隙。第三，對細微的聲響與變化要有心理準備——飛驒產業給顧客的說明也指出，潮濕季節抽屜膨脹、餐桌偶爾發出嘎吱聲，都是實木的正常表現，並非瑕疵。" } }
      ] },
    { t:"section",
      id:"everyday",
      title:{ en:"Furniture day to day", ja:"家具の日々の手入れ", zh:"家具的日常保養" },
      jp:"日常",
      body:[
        { t:"p",
          text:{
            en:"The makers of Takayama give remarkably consistent advice. Hida Sangyō tells owners to dust with a soft dry cloth or, for dirt, a cloth soaked in water and wrung out hard; to avoid chemically treated dusting cloths and erasers, which can scratch or dull the finish; never to put a wet glass or a hot pan straight onto the wood, but to use coasters and trivets; to keep furniture out of direct sunlight and away from the draught of heaters and air-conditioners; and to check metal fittings for looseness from time to time. Since 2020 many households wipe everything with alcohol spray. The company advises against it on its furniture, because alcohol can soften or cloud some finishes — although a little alcohol on a cloth is the recommended way to remove the resin that sometimes beads out of pine or larch.",
            ja:"高山のメーカーの助言は、驚くほど一致している。飛騨産業は持ち主に次のように勧める。柔らかい乾いた布でほこりを払い、汚れには水にひたして固く絞った布を使うこと。化学ぞうきんや消しゴムは傷やくもりのもとになるので使わないこと。濡れたコップや熱い鍋を木にじかに置かず、コースターや鍋敷きを使うこと。家具を直射日光から離し、暖房やエアコンの風の当たらない所に置くこと。そしてときどき金具のゆるみを点検すること。二〇二〇年からは、多くの家庭が何でもアルコールのスプレーで拭くようになった。同社は家具にはそれを勧めない。アルコールは仕上げによっては塗膜を柔らかくしたり白く濁らせたりするからである。ただしマツやカラマツからときに浮き出るヤニは、布に少しアルコールを含ませて拭きとるのがよいとしている。",
            zh:"高山各家具廠的建議驚人地一致。飛驒產業告訴使用者：以柔軟的乾布撣去灰塵，有髒污時用浸水後用力擰乾的布擦拭；避免使用化學除塵布與橡皮擦，以免刮傷或使塗面失去光澤；不要把濕杯子或熱鍋直接放在木面上，應使用杯墊與隔熱墊；讓家具避開直射陽光，也別放在暖氣或冷氣直吹之處；並不時檢查五金是否鬆動。2020 年以來，許多家庭習慣用酒精噴霧擦拭一切。該公司不建議用於家具，因為酒精可能使部分塗裝軟化或發白——不過，松木或落葉松偶爾滲出的樹脂，建議用沾少許酒精的布輕輕擦除。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Oil-finished furniture", ja:"オイル仕上げの家具", zh:"油性塗裝家具" },
              jp:"オイル",
              text:{
                en:"A thin, penetrating finish that shows the wood's texture and can be renewed at home.",
                ja:"木の肌を見せ、家で塗り直せる、薄く浸みこむ仕上げ。",
                zh:"薄而滲入木材的塗裝，保留木材質感，可在家自行更新。" },
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"Rub in beeswax soon after purchase, then about twice a year — before the rainy season and before winter (Hida Sangyō's advice).",
                      ja:"買ってすぐに蜜蝋をすりこみ、その後は年に二回ほど、梅雨の前と冬の前に（飛騨産業の助言）。",
                      zh:"購入後盡早擦上蜂蠟，之後大約一年兩次——梅雨季前與冬季前（飛驒產業的建議）。" },
                    {
                      en:"When the surface looks dry: sand lightly along the grain with 240-grit paper, wipe off the dust, apply plant oil thinly, leave about 12 hours, then wax and buff.",
                      ja:"面が乾いて見えたら、二百四十番の紙やすりで木目にそって軽く研ぎ、粉を拭きとり、植物油を薄く塗って十二時間ほど置き、蝋を塗って磨く。",
                      zh:"表面看來乾澀時：以 240 號砂紙順紋輕磨，擦去粉塵，薄塗植物油，靜置約 12 小時，再上蠟拋光。" },
                    {
                      en:"Water left standing will mark it; wipe spills at once.",
                      ja:"水を置いたままにすると跡が残る。こぼしたらすぐ拭く。",
                      zh:"積水會留下痕跡；打翻時應立刻擦乾。" }
                  ] }
              ] },
            { title:{ en:"Polyurethane-finished furniture", ja:"ウレタン塗装の家具", zh:"聚氨酯塗裝家具" },
              jp:"ウレタン",
              text:{
                en:"A tough plastic film that shrugs off water and stains but is repaired in the factory, not at home.",
                ja:"水やしみに強い丈夫な樹脂の膜。直すのは家ではなく工場。",
                zh:"堅韌的樹脂塗膜，不怕水與污漬，但修復要回工廠，而非在家處理。" },
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"Wipe with a wrung-out cloth; a little mild detergent for grease, then wipe again with clean water.",
                      ja:"絞った布で拭く。油汚れには薄めた中性洗剤を少し使い、そのあと水拭きする。",
                      zh:"以擰乾的布擦拭；油污可用少量稀釋的中性清潔劑，再以清水擦淨。" },
                    {
                      en:"Do not sand or oil it: oil cannot penetrate the film and only leaves a sticky layer.",
                      ja:"研いだり油を塗ったりしない。油は膜に浸みこまず、べたつく層が残るだけである。",
                      zh:"切勿砂磨或上油：油無法滲入塗膜，只會留下黏膩的一層。" },
                    {
                      en:"Deep scratches and worn tops go back to the maker for refinishing.",
                      ja:"深い傷や擦り減った天板は、メーカーに戻して塗り直してもらう。",
                      zh:"深刮痕與磨損的桌面，應送回原廠重新塗裝。" }
                  ] }
              ] }
          ] },
        { t:"note",
          label:{ en:"Oily rags can catch fire", ja:"油の布は発火しうる", zh:"沾油抹布可能自燃" },
          text:{
            en:"Drying oils such as linseed and perilla harden by reacting with oxygen, and the reaction gives off heat. A crumpled rag soaked in oil can heat itself until it ignites. Hida Sangyō's maintenance instructions tell owners to put oil-soaked cloths in water before throwing them away, and to keep waxed cloths sealed.",
            ja:"アマニ油やエゴマ油のような乾性油は酸素と反応して固まり、その反応は熱を出す。油を含んで丸められた布は、自分で熱をためて発火することがある。飛騨産業の手入れの説明は、油を含んだ布は水に浸けてから捨て、蝋を含んだ布は密閉して保管するよう求めている。",
            zh:"亞麻仁油、荏油等乾性油是與氧反應而硬化，反應會放熱。浸油後揉成一團的抹布，可能自行蓄熱直到起火。飛驒產業的保養說明要求：沾油的布應先泡水再丟棄，沾蠟的布則應密封保存。" } },
        { t:"h3", text:{ en:"Chairs and bentwood", ja:"椅子と曲木", zh:"椅子與曲木" }, jp:"椅子" },
        { t:"p",
          text:{
            en:"A dining chair takes more punishment than any other piece of furniture: it is dragged, tipped back on two legs and sat on sideways, and every movement works its joints. Hida's chairs are made of beech, oak and other hardwoods bent with steam or carved from solid stock (see <a href=\"bentwood.html\">Bentwood</a> and <a href=\"chairs.html\">The Chair</a>), and they are designed for decades of this — but a joint that begins to click or wobble should be dealt with early, before the tenon wears its mortise oval. Resist the temptation to drive in screws or squeeze glue into the gap: the makers can knock the joint apart, clean it and reglue it properly, and Nissin Mokkō warns that previous amateur repairs may make a piece impossible to service. Felt pads under the legs protect both the floor and the chair.",
            ja:"食卓の椅子は、どの家具よりも酷使される。引きずられ、後ろ脚二本で傾けられ、横向きに座られ、そのたびに継手が動かされる。飛騨の椅子は、蒸気で曲げたり無垢材から削り出したりしたブナやナラなどの広葉樹でつくられ（<a href=\"bentwood.html\">曲木</a>と<a href=\"chairs.html\">椅子</a>を参照）、何十年もこれに耐えるよう設計されている。それでも継手が鳴ったりぐらついたりしはじめたら、ほぞがほぞ穴を楕円にすり減らす前に、早めに手を打つべきである。ねじを打ちこんだり、すきまに接着剤を押しこんだりしたくなるのはこらえたい。メーカーは継手をはずして掃除し、正しく接着しなおせる。日進木工は、素人の修理の跡があると修理を受けられない場合があると注意している。脚の下のフェルトは、床と椅子の両方を守る。",
            zh:"餐椅承受的折騰比任何家具都多：被拖行、被人以兩條後腿翹起、被側坐，每個動作都在搖動它的榫接處。飛驒的椅子以山毛櫸、橡木等闊葉材蒸汽彎曲或從實木削製而成（見<a href=\"bentwood.html\">曲木</a>與<a href=\"chairs.html\">椅子</a>），設計上足以承受數十年這樣的使用——但一旦榫接處開始喀喀作響或搖晃，就該及早處理，別等到榫頭把卯眼磨成橢圓。請忍住鎖螺絲或往縫裡擠膠的衝動：廠商能把榫接拆開、清理並正確重新膠合；日進木工也提醒，若有外行修理的痕跡，可能就無法再受理維修。椅腳下貼上毛氈墊，可同時保護地板與椅子。" } }
      ] },
    { t:"section",
      id:"floors",
      title:{ en:"Wooden floors", ja:"木の床", zh:"木地板" },
      jp:"床",
      body:[
        { t:"p",
          text:{
            en:"Floors are the largest wooden surface in most homes and the one most exposed to grit and water. The housing-finance advisory body Sumai-info recommends vacuuming or sweeping along the grain, wiping with a dry cloth or a cloth wrung out hard, dealing with spills at once, standing plant pots in saucers and laying mats in the kitchen and at the bathroom door. It warns against chemically impregnated floor cloths, which can react with the surface and leave white patches, and against wiping with a wet cloth too often, which encourages fine cracking. Waxed floors need a new coat about every three to six months, applied on a dry sunny day, and the old wax stripped every five years or so. In a heated winter, gaps of a millimetre or more may open between solid boards; they close again in the rainy season, and should not be filled.",
            ja:"床は多くの家で最も広い木の面であり、砂ぼこりと水にいちばんさらされる。住宅金融普及協会は、木目にそって掃除機やほうきをかけ、乾いた布か固く絞った布で拭くこと、こぼしたものはすぐ拭くこと、植木鉢には受け皿を敷き、台所や浴室の入口にはマットを置くことを勧めている。化学ぞうきんは表面と反応して白く変色させるおそれがあり、濡れ拭きをしすぎると細かな割れのもとになると注意する。ワックスをかけた床は三〜六か月に一度ほど、乾いた晴れた日に塗りなおし、五年に一度ほど古いワックスをはがす。暖房の冬には無垢の板のあいだに一ミリ以上のすきまが空くことがあるが、梅雨にはまた閉じるので、埋めてはならない。",
            zh:"地板是多數住家中面積最大的木質表面，也最常接觸砂塵與水。日本住宅金融普及協會建議：順著木紋吸塵或掃地，以乾布或用力擰乾的布擦拭，打翻液體立刻處理，盆栽下墊水盤，廚房與浴室門口鋪上地墊。它提醒不要使用含化學藥劑的除塵布，可能與表面反應而留下白斑；也別太常用濕布擦，容易造成細小裂紋。上蠟的地板約每三到六個月在乾燥晴天重新上蠟一次，大約每五年剝除舊蠟。在開暖氣的冬天，實木地板之間可能出現 1 公釐以上的縫隙；到了雨季又會閉合，不應將其填補。" } },
        { t:"defs",
          items:[
            { term:{ en:"Solid boards", ja:"無垢フローリング", zh:"實木地板" },
              jp:"むく",
              def:{
                en:"Each board is one piece of wood through its thickness. It can be sanded and refinished several times, moves most with the seasons, and in soft sugi or hinoki dents easily — which many owners accept as part of its character.",
                ja:"板の厚み全体が一枚の木。何度か研いで塗りなおせるが、季節による動きが最も大きく、柔らかいスギやヒノキはへこみやすい。それも味わいのうちと受け入れる持ち主は多い。",
                zh:"每片地板整個厚度都是同一塊木材。可多次砂磨翻新，隨季節的伸縮最大；柔軟的柳杉或扁柏容易壓出凹痕——許多屋主視之為其特色的一部分。" } },
            { term:{ en:"Composite flooring", ja:"複合フローリング", zh:"複合地板" },
              jp:"ふくごう",
              def:{
                en:"A plywood base faced with a thin sliced veneer, typically about 0.2 mm, or a sawn lamella of 2–3 mm. It is more stable than solid wood, but a veneered face cannot be sanded through, so deep damage means replacing boards.",
                ja:"合板の台板に、ふつう0.2ミリほどの薄い突板か、二〜三ミリの挽板を貼ったもの。無垢より安定するが、突板の面は研ぎ抜けないので、深い傷は板の張り替えになる。",
                zh:"以合板為底，表面貼上通常約 0.2 公釐的薄切木皮，或 2–3 公釐的鋸切木片。比實木穩定，但木皮表面無法砂磨穿透，深層損傷就得更換地板。" } },
            { term:{ en:"Oiled or waxed floor", ja:"オイル・ワックス仕上げの床", zh:"油或蠟處理的地板" },
              jp:"オイル",
              def:{
                en:"Pleasant underfoot and easy to patch locally; needs regular renewal and stains more readily.",
                ja:"足ざわりがよく、部分的に直しやすい。定期的な塗りなおしが要り、しみはつきやすい。",
                zh:"腳感舒適，易於局部修補；需定期更新，也較容易留下污漬。" } },
            { term:{ en:"Brushed-grain floor", ja:"浮造りの床", zh:"浮造地板" },
              jp:"うづくり",
              def:{
                en:"Sugi or pine brushed so the hard latewood stands proud of the soft earlywood. The ribbed surface is slip-resistant and hides small dents; see <a href=\"finishes.html\">Finishes</a>.",
                ja:"スギやマツをこすり、柔らかい早材より硬い晩材を浮き立たせたもの。凹凸のある面は滑りにくく、小さなへこみを目立たせない。<a href=\"finishes.html\">塗装と仕上げ</a>を参照。",
                zh:"將柳杉或松木表面刷磨，使堅硬的晚材凸出於柔軟的早材之上。凹凸的表面防滑，也能掩飾小凹痕；見<a href=\"finishes.html\">塗裝與收尾</a>。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Hida Sangyō, customer care pages and FAQ; Nissin Mokkō, repair procedure; Japan Housing Finance Advisory Association (Sumai-info), flooring care; Okajima Mokuzai, veneer thicknesses.",
            ja:"出典：飛騨産業 お手入れ・よくある質問、日進木工 修理の流れ、住宅金融普及協会 フローリングのお手入れ、恩加島木材工業 突板の厚み。",
            zh:"資料來源：飛驒產業保養說明與常見問題；日進木工維修流程；日本住宅金融普及協會地板保養說明；恩加島木材工業木皮厚度說明。" } }
      ] },
    { t:"section",
      id:"damage",
      title:{ en:"Rings, dents and fading", ja:"輪じみ・へこみ・日焼け", zh:"水痕、凹痕與褪色" },
      jp:"傷と跡",
      body:[
        { t:"p",
          text:{
            en:"Everyday damage to wood is of two kinds. Some is mechanical — dents, scratches, a chipped edge. Some is chemical or optical — a ring left by a wet glass, a pale mark from a hot pot, the shadow of a vase that stood too long in a sunny window. Whether an owner can put it right at home depends almost entirely on the finish. Oiled, waxed and unfinished wood can be worked on directly, because the surface is wood; a film finish such as polyurethane or lacquer puts a layer of plastic or resin between the damage and the wood, and repairing that layer is a job for a workshop.",
            ja:"木の日々の傷みには二種類ある。一つは機械的なもの——へこみ、ひっかき傷、欠けた角。もう一つは化学的、あるいは見た目のもの——濡れたコップの輪じみ、熱い鍋の白い跡、日の当たる窓辺に長く置いた花瓶の影。持ち主が家で直せるかどうかは、ほとんど仕上げで決まる。オイル、蝋、無塗装の木は、面が木そのものなので直接手を入れられる。ウレタンやラッカーのような塗膜の仕上げは、傷と木のあいだに樹脂の層をはさむので、その層を直すのは工房の仕事になる。",
            zh:"木器的日常損傷有兩類。一類是機械性的——凹痕、刮痕、崩角。另一類是化學性或視覺上的——濕杯子留下的水圈、熱鍋留下的白印、在陽光窗邊擺太久的花瓶所留下的影子。使用者能否在家自行修復，幾乎完全取決於塗裝。上油、上蠟或未塗裝的木材，表面就是木頭本身，可以直接處理；聚氨酯或噴漆等成膜塗裝，則在損傷與木材之間隔了一層樹脂，修復那一層是工坊的工作。" } },
        { t:"defs",
          items:[
            { term:{ en:"Dents", ja:"へこみ", zh:"凹痕" },
              jp:"へこみ",
              def:{
                en:"A dent crushes the wood fibres without cutting them, and water and heat can swell them back. Hida Sangyō's emergency method for oiled furniture: sand the spot lightly along the grain, lay a damp cloth over the dent and press a hot iron on it for a few seconds, so that steam drives into the crushed cells. Small dents rise almost level; large ones improve but do not disappear, and too much heat scorches the wood. The method does not work through a film finish, which keeps the water out and is itself damaged by the iron.",
                ja:"へこみは木の繊維をつぶすが、切ってはいないので、水と熱でふくらませて戻せる。飛騨産業がオイル仕上げの家具に勧める応急の方法は、その部分を木目にそって軽く研ぎ、濡れた布をへこみにのせて熱いアイロンを数秒あて、つぶれた細胞に蒸気を送りこむというもの。小さなへこみはほぼ平らに戻り、大きなものは良くなるが消えはしない。熱しすぎると焦げる。塗膜の仕上げには効かない。膜が水を通さず、膜そのものがアイロンで傷むからである。",
                zh:"凹痕是把木纖維壓扁而非切斷，因此可以用水與熱讓它們膨脹回復。飛驒產業針對油性塗裝家具的應急方法：順紋輕磨該處，在凹痕上覆一塊濕布，用熱熨斗壓幾秒鐘，讓蒸汽進入被壓扁的細胞。小凹痕幾乎能回平；大凹痕會改善但不會消失；加熱過度則會燒焦木材。這方法無法用於成膜塗裝，因為塗膜擋住了水，而且塗膜本身會被熨斗燙壞。" } },
            { term:{ en:"Scratches", ja:"ひっかき傷", zh:"刮痕" },
              jp:"すり傷",
              def:{
                en:"On oil, sand lightly along the grain, re-oil and wax; the repair blends in within weeks. On polyurethane, fine scuffs are best left alone — sanding cuts through the film — and deep scratches go back to the maker.",
                ja:"オイル仕上げなら、木目にそって軽く研ぎ、油と蝋を塗りなおせば、数週間でなじむ。ウレタンなら、細かなすり傷はそのままにしておくのがよい——研げば膜を破る——。深い傷はメーカーに戻す。",
                zh:"油性塗裝可順紋輕磨，再上油上蠟，幾週內修補處就會融為一體。聚氨酯塗裝的細微擦痕最好不要處理——砂磨會磨穿塗膜——深刮痕則送回原廠。" } },
            { term:{ en:"Water rings", ja:"水の輪じみ", zh:"水圈" },
              jp:"輪じみ",
              def:{
                en:"On oiled or waxed wood a ring is usually raised grain or a darkened patch where water soaked in; let it dry, sand lightly and re-oil. On a film finish a milky white ring is usually moisture trapped in the coating; it sometimes fades as it dries out, and otherwise needs professional attention. Coasters prevent both.",
                ja:"オイルや蝋の木では、輪じみはたいてい水が浸みて毛羽立ったり黒ずんだりしたもの。乾かして軽く研ぎ、油を塗りなおす。塗膜の仕上げの乳白色の輪は、たいてい膜のなかに閉じこめられた水分で、乾くと消えることもあるが、消えなければ専門家の手がいる。コースターがどちらも防ぐ。",
                zh:"上油或上蠟的木面，水圈通常是木紋被水浸濕而起毛或變深；待其乾燥後輕磨、重新上油即可。成膜塗裝上的乳白色水圈，多半是水氣困在塗膜中；乾燥後有時會消退，否則就需要專業處理。杯墊兩者皆可預防。" } },
            { term:{ en:"Heat marks", ja:"熱の跡", zh:"燙痕" },
              jp:"熱",
              def:{
                en:"A pan straight from the stove can blister or whiten a film finish and scorch oiled wood. There is no home remedy for a blistered film; use a trivet.",
                ja:"火からおろしたばかりの鍋は、塗膜をふくれさせたり白くしたりし、オイルの木を焦がす。ふくれた膜に家での直し方はない。鍋敷きを使うこと。",
                zh:"剛離火的鍋子可能使塗膜起泡或發白，也會燙焦上油的木面。起泡的塗膜無法在家修復；請使用隔熱墊。" } },
            { term:{ en:"Fading and darkening", ja:"日焼けと色の変化", zh:"褪色與變深" },
              jp:"日焼け",
              def:{
                en:"Light changes the colour of most woods: pale hinoki, sugi and oak turn honey-coloured, while dark walnut tends to lighten. Urushi, too, is weakened by ultraviolet light. Moving objects around now and then avoids sharp outlines, and a piece bought new will even out if left uncovered in ordinary room light.",
                ja:"光はたいていの木の色を変える。白いヒノキ、スギ、ナラは飴色になり、濃いウォールナットは明るくなる傾向がある。漆も紫外線で弱る。ときどき物の位置を変えれば、くっきりした跡は残らない。新しく買ったものは、ふつうの室内の光に覆わずに置けば色がそろってくる。",
                zh:"光線會改變多數木材的顏色：淺色的扁柏、柳杉與橡木會轉為蜂蜜色，深色的胡桃木則傾向變淺。漆也會因紫外線而劣化。不時挪動擺放的物品，就不會留下清晰的輪廓；新買的木器只要不加遮蓋、放在一般室內光線下，顏色便會逐漸均勻。" } }
          ] },
        { t:"p",
          text:{
            en:"A Japanese house makes the last point more pressing than one might expect. Traditional rooms face south under deep eaves, which keep out the high summer sun but admit the low winter sun far across the floor — exactly the season when heating also dries the air. A lacquered tray left on a sunny tatami in January is exposed to both at once.",
            ja:"日本の家では、この最後の点が思いのほか大事になる。伝統的な部屋は深い軒の下で南を向き、軒は夏の高い日ざしをさえぎるが、冬の低い日ざしは床の奥まで入れる——ちょうど暖房で空気も乾く季節である。一月に日の当たる畳に置いた漆の盆は、その両方に同時にさらされる。",
            zh:"在日本住宅裡，最後這一點比想像中更要緊。傳統房間在深簷下朝南，屋簷擋住夏季高角度的陽光，卻讓冬季低斜的陽光深深照進室內——恰好也是暖氣使空氣變乾的季節。一月放在向陽榻榻米上的漆盤，同時承受著這兩者。" } }
      ] },
    { t:"section",
      id:"tableware",
      title:{ en:"Bowls, chopsticks and boards", ja:"椀・箸・まな板", zh:"碗、筷與砧板" },
      jp:"食の道具",
      body:[
        { t:"h3", text:{ en:"Lacquerware", ja:"漆器", zh:"漆器" }, jp:"漆器" },
        { t:"p",
          text:{
            en:"Cured urushi is one of the most durable coatings known, resistant to water, alcohol and acids, but it has three weaknesses: ultraviolet light, sudden changes of temperature, and water that gets under a chip. The advice of Yamada Shunkei-ten, a Hida Shunkei maker in Takayama, is typical. Wash in lukewarm water; for grease use a little diluted mild detergent and a soft sponge; for dried-on food, fill the piece with hot water and leave it for about ten minutes rather than soaking it. Never boil it, scour it, or put it in a dishwasher, dish dryer or microwave. Wipe it with a soft cloth while it is still slightly damp, so that no water spots form, and keep it out of direct sun. Otherwise store it like any other dish — and use it often. Makers of urushi ware agree that daily washing and wiping slowly polish the surface to a soft gloss, while a piece kept in a box dries out.",
            ja:"固まった漆は最も丈夫な塗膜の一つで、水、アルコール、酸に強いが、三つの弱みがある。紫外線、急な温度の変化、欠けた所から入りこむ水である。高山の飛騨春慶の製造元、山田春慶店の助言は典型的である。ぬるま湯で洗い、油汚れには薄めた中性洗剤を少しと柔らかいスポンジを使う。こびりついた汚れには、浸けおくのではなく、器にお湯を張って十分ほど置く。煮沸、たわしでのこすり洗い、食洗機、食器乾燥機、電子レンジは使わない。水滴の跡が残らないよう、乾ききらないうちに柔らかい布で拭き、直射日光を避ける。あとはほかの器と同じようにしまえばよい——そして、しばしば使うこと。漆器のつくり手たちは、毎日の洗いと拭きがゆっくりと面を磨いてやわらかな艶を生み、箱にしまったままの器は乾いてしまうと口をそろえる。",
            zh:"硬化後的漆是已知最耐久的塗層之一，耐水、耐酒精、耐酸，但有三個弱點：紫外線、溫度驟變，以及從缺口滲入的水。高山的飛驒春慶製造商山田春慶店的建議頗具代表性：用溫水清洗；油污用少量稀釋的中性清潔劑與柔軟海綿；乾硬的食物殘渣，就在器中注入熱水放置約十分鐘，而不是整個浸泡。切勿煮沸、用菜瓜布刷洗，或放入洗碗機、烘碗機與微波爐。趁還微濕時用軟布擦乾，以免留下水漬，並避免陽光直射。除此之外，就像其他碗盤一樣收納即可——而且要常用。漆器工匠們一致認為，每天的清洗與擦拭會慢慢把表面磨出柔和的光澤，而一直收在盒子裡的漆器反而會乾澀。" } },
        { t:"p",
          text:{
            en:"Two further points. A new piece of Shunkei may bleed a little oil from its top coat, seen as a whitish film; the maker's advice is simply to wipe it off. And not everything that looks like lacquer is urushi: many bowls sold as lacquerware are urethane over wood or resin. Japanese law requires the label to state which — see <a href=\"buying.html\">Buying Wooden Things</a> — and urethane-coated ware generally tolerates a little more heat, though most makers still advise against dishwashers. Chopsticks follow the same rules as bowls; their tips wear first, and lacquered chopsticks can often be re-lacquered by the shop that sold them.",
            ja:"さらに二つ。新しい春慶は上塗りから少し油がにじみ、白っぽい膜に見えることがある。つくり手の助言は、ただ拭きとればよいというものである。また、漆に見えるものがすべて漆とは限らない。漆器として売られる椀の多くは、木や樹脂にウレタンを塗ったものである。日本の法律はそのどちらかを表示するよう求めており（<a href=\"buying.html\">木の物を選ぶ</a>を参照）、ウレタン塗装の器はふつう少し熱に強いが、それでも多くのつくり手は食洗機を勧めない。箸も椀と同じ決まりにしたがう。先端がまず擦り減り、漆の箸は買った店で塗りなおしてもらえることも多い。",
            zh:"還有兩點。新的春慶漆器，面漆可能滲出少許油分，看起來像一層白膜；工匠的建議只是把它擦掉即可。此外，看起來像漆的未必是真漆：許多當作漆器販售的碗，其實是在木胎或樹脂胎上塗聚氨酯。日本法律要求標示究竟是哪一種——見<a href=\"buying.html\">挑選木製品</a>——聚氨酯塗裝的器皿一般較耐熱，但多數製作者仍不建議放入洗碗機。筷子的保養原則與碗相同；筷尖最先磨損，漆筷往往可以送回原購買店家重新上漆。" } },
        { t:"h3", text:{ en:"Cutting boards", ja:"まな板", zh:"砧板" }, jp:"まな板" },
        { t:"p",
          text:{
            en:"Is wood hygienic in the kitchen? The best-known experiments were published in 1994 by Nese Ak, Dean Cliver and Charles Kaspar at the University of Wisconsin. Clean wooden blocks absorbed a bacterial inoculum within three to ten minutes, and at the contamination levels typical of raw meat the bacteria generally could not be recovered from the surface afterwards; even at high levels, recovery from wood was at least 98 per cent lower than from plastic, and often more than 99.9 per cent lower. On plastic the bacteria stayed recoverable for hours and multiplied overnight, and knife-scarred polyethylene boards proved hard to clean by hand. Bacteria that cannot be recovered are not necessarily dead, so wood is not self-sterilising — but a wooden board washed and dried properly is at least as hygienic as a plastic one.",
            ja:"木は台所で衛生的か。最もよく知られた実験は、一九九四年にウィスコンシン大学のネセ・アク、ディーン・クライバー、チャールズ・カスパーが発表した。清潔な木片は、細菌を含む液を三〜十分で吸いこみ、生肉にふつうある程度の汚染では、その後表面から細菌はほとんど回収できなかった。汚染が多い場合でも、木から回収された細菌はプラスチックより少なくとも九十八パーセント少なく、しばしば九十九・九パーセント以上少なかった。プラスチックの上では細菌は何時間も回収でき、一晩おくと増え、包丁傷の多いポリエチレンのまな板は手洗いではきれいにしにくかった。回収できない細菌が死んでいるとは限らないので、木が自分で殺菌するわけではない。それでも、きちんと洗って乾かした木のまな板は、少なくともプラスチックと同じくらい衛生的である。",
            zh:"木頭在廚房裡衛生嗎？最著名的實驗於 1994 年由美國威斯康辛大學的 Nese Ak、Dean Cliver 與 Charles Kaspar 發表。乾淨的木塊在三到十分鐘內便吸收了含菌液，在生肉常見的污染程度下，之後大多無法再從表面回收到細菌；即使污染程度高，從木材回收到的細菌也比塑膠少至少 98%，且往往少了 99.9% 以上。在塑膠上，細菌可在數小時內持續被回收，放置一夜還會增殖；刀痕累累的聚乙烯砧板更難以手洗乾淨。回收不到的細菌未必已死，所以木材並不會自行殺菌——但妥善清洗、晾乾的木砧板，衛生程度至少不亞於塑膠砧板。" } },
        { t:"p",
          text:{
            en:"Japanese cooks choose between two traditional woods. Hinoki is fragrant and light; its wood and leaf oils inhibit moulds and bacteria such as <em>Staphylococcus aureus</em> and <em>E. coli</em> at concentrations of 100–1,000 ppm, according to the Japan Wood Research and Information Centre, mainly through cadinols and phenolic compounds. (Hinokitiol, the famous antibacterial compound first isolated from Taiwan hinoki, occurs in Japanese hinoki only in traces.) <em>Ichō</em>, ginkgo, is the professional's favourite: slightly oily, so it sheds water and resists black spots and mould, and soft enough to be kind to a sharp edge. The care is the same for both. Wet the board before use, so that a film of water keeps juices and smells from soaking in. Rinse with cold water first — hot water sets proteins from fish and meat into the grain — then scrub along the grain. Stand it on end in an airy, shaded place to dry. Remove black spots with salt or a mild cleanser, never bleach, and when the surface is scarred, have it planed or sand it back to fresh wood.",
            ja:"日本の料理人は二つの伝統的な木から選ぶ。ヒノキは香りがよく軽い。日本木材総合情報センターによれば、その材や葉の精油は、百〜千ppmの濃度でカビや黄色ブドウ球菌、大腸菌などの細菌を抑え、そのはたらきはおもにカジノール類やフェノール類による。（台湾のヒノキから初めて取り出された名高い抗菌成分ヒノキチオールは、日本のヒノキにはわずかしか含まれない。）イチョウは料理人に最も好まれる。少し油分を含むので水をはじき、黒ずみやカビがつきにくく、鋭い刃にやさしい柔らかさがある。手入れはどちらも同じである。使う前に濡らし、水の膜で汁やにおいが浸みこむのを防ぐ。まず水で流す——お湯は魚や肉のたんぱく質を木目に固めてしまう——それから木目にそってこする。風通しのよい日陰に立てて乾かす。黒ずみは塩か穏やかなクレンザーで落とし、漂白剤は使わない。面が傷だらけになったら、削りなおしてもらうか、紙やすりで新しい木肌を出す。",
            zh:"日本廚師通常在兩種傳統木材之間選擇。扁柏氣味芳香、質輕；據日本木材綜合情報中心的說明，其木材與葉的精油在 100–1,000 ppm 濃度下即可抑制黴菌，以及金黃色葡萄球菌、大腸桿菌等細菌，主要作用來自杜松醇類與酚類化合物。（最早從台灣扁柏中分離出來的著名抗菌成分檜木醇，在日本扁柏中只有微量。）銀杏木則是職業廚師的最愛：略含油分，因此能排水、不易發黑長霉，又軟得足以善待鋒利的刀刃。兩者的保養方式相同。使用前先把砧板沾濕，讓一層水膜阻止汁液與氣味滲入。先用冷水沖洗——熱水會把魚肉中的蛋白質固定在木紋裡——再順著木紋刷洗。立起來放在通風的陰涼處晾乾。黑斑以鹽或溫和的去污粉去除，切勿使用漂白劑；表面刀痕累累時，可送去刨平，或自行以砂紙磨出新的木面。" } },
        { t:"h3", text:{ en:"Masu and bentwood boxes", ja:"枡と曲物", zh:"木枡與曲物" }, jp:"白木の器" },
        { t:"p",
          text:{
            en:"Unfinished hinoki and sugi — the pale <em>shiraki</em> of masu, rice tubs and <em>magemono</em> lunch boxes — is the most demanding wood in the kitchen, because it drinks water and feeds mould if it stays damp. Masuya, the Ōgaki workshop of the masu maker Ōhashi Ryōki, reduces the rules to three: do not soak it, dry it immediately after use, and store it somewhere dry and out of the sun. Urethane-coated masu can be washed by hand with soap, but not in a dishwasher, because temperatures above 60 °C break down the coating, and never in a microwave. For unfinished bentwood boxes, the Ōdate maker Kurikyū recommends softening food residue with water at 80–90 °C for five to ten minutes, scrubbing along the grain without detergent, and then — the key point — drying the box open and face up without delay. A lid closed over a damp box is how black mould starts. Kurikyū, like many makers of bentwood, repairs its own boxes free of charge apart from parts; the magemono of Hida Shunkei are described on <a href=\"shunkei.html\">Hida Shunkei</a> and those of Gifu's coopers on <a href=\"vessels.html\">Buckets, Barrels & Boxes</a>.",
            ja:"塗っていないヒノキやスギ——枡、おひつ、曲物の弁当箱の白木——は台所で最も手のかかる木である。水を吸い、湿ったままならカビを養うからである。枡のつくり手、大橋量器の大垣の店「枡工房ますや」は、決まりを三つにまとめる。水に浸けないこと、使ったらすぐ乾かすこと、湿気の少ない日の当たらない所にしまうこと。ウレタン塗装の枡は石けんで手洗いできるが、食洗機は使えない。六十度を超える温度で塗膜が傷むからである。電子レンジも使わない。白木の曲げわっぱについて、大館の栗久は、八十〜九十度のお湯で五〜十分こびりつきをふやかし、洗剤を使わず木目にそってこすり、そして——ここが要点——ふたをせず上向きにして、すぐに乾かすよう勧める。湿った箱にふたをすることが、黒カビの始まりである。栗久は多くの曲物のつくり手と同じく、部品代を除いて自社の品を無料で直している。飛騨春慶の曲物は<a href=\"shunkei.html\">飛騨春慶</a>で、岐阜の桶屋の仕事は<a href=\"vessels.html\">桶・樽・曲物</a>で紹介している。",
            zh:"未塗裝的扁柏與柳杉——木枡、飯桶與曲物便當盒所用的淺色「白木」——是廚房裡最費心照顧的木材，因為它會吸水，一旦長期潮濕便會滋生黴菌。木枡製造商大橋量器在大垣的店舖「枡工房 Masuya」把原則歸納為三條：不要泡水、用後立刻晾乾、收在乾燥且照不到陽光的地方。聚氨酯塗裝的木枡可用肥皂手洗，但不能進洗碗機，因為超過 60°C 會使塗層劣化，也絕不可放入微波爐。至於未塗裝的曲木盒，秋田大館的栗久建議：以 80–90°C 的熱水泡軟殘渣五到十分鐘，不用清潔劑、順紋刷洗，接著——這是關鍵——打開盒蓋、口朝上，立即晾乾。在潮濕的盒子上蓋上蓋子，正是黑黴的開端。栗久與許多曲物工匠一樣，除零件費外免費修理自家產品。飛驒春慶的曲物見<a href=\"shunkei.html\">飛驒春慶</a>，岐阜桶匠的作品見<a href=\"vessels.html\">桶、樽與曲物</a>。" } }
      ] },
    { t:"section",
      id:"calendar",
      title:{ en:"A year of care", ja:"手入れの一年", zh:"保養的一年" },
      jp:"季節",
      body:[
        { t:"p",
          text:{
            en:"Put together, the advice follows the seasons. In Gifu the two critical periods are the rainy season — on average from about 6 June to 19 July in the Tōkai region, though in 2025 it ran from about 17 May to 27 June — and the heated winter from December to February. Oiled furniture is best waxed just before each. Summer is the season of mould on unfinished tableware and of swelling drawers; winter is the season of cracks, gaps and brittle lacquer. In northern Taiwan the plum rains of May and June, the typhoons of summer and a damp winter keep humidity high all year, and the calendar shifts from humidifying to dehumidifying.",
            ja:"まとめると、助言は季節にしたがう。岐阜で大事な時期は二つ。梅雨——東海地方の平年ではおよそ六月六日から七月十九日まで、ただし二〇二五年はおよそ五月十七日から六月二十七日までだった——と、十二月から二月の暖房の冬である。オイル仕上げの家具は、それぞれの直前に蝋を塗るのがよい。夏は白木の器のカビと、ふくらむ引出しの季節であり、冬は割れ、すきま、もろくなった漆の季節である。台湾北部では、五月と六月の梅雨、夏の台風、湿った冬が一年じゅう湿度を高く保ち、暦の中心は加湿から除湿へ移る。",
            zh:"綜合起來，這些建議依循著季節。在岐阜，兩個關鍵時期分別是梅雨季——東海地方平年約從 6 月 6 日到 7 月 19 日，不過 2025 年約為 5 月 17 日至 6 月 27 日——以及十二月至二月開暖氣的冬天。油性塗裝家具最好在這兩個時期之前各上一次蠟。夏天是白木器皿發霉、抽屜膨脹的季節；冬天則是開裂、出現縫隙、漆面變脆的季節。在台灣北部，五、六月的梅雨、夏季的颱風與潮濕的冬天使濕度終年偏高，保養重心也從加濕轉為除濕。" } },
        { t:"figure",
          caption:{
            en:"A schematic care calendar for wooden things in Gifu, with a row for northern Taiwan. Timings are typical, not rules; they are compiled from makers' care advice (Hida Sangyō, Yamada Shunkei-ten, Masuya) and from the Japan Meteorological Agency's rainy-season normals for Tōkai.",
            ja:"岐阜の木の品の手入れの暦（模式図）。台湾北部の行を加えた。時期は典型的なもので決まりではない。つくり手の手入れの助言（飛騨産業、山田春慶店、枡工房ますや）と、気象庁の東海地方の梅雨の平年値からまとめた。",
            zh:"岐阜木器保養年曆（示意圖），另加一列台灣北部。時間為典型情況而非規定；依製作者的保養建議（飛驒產業、山田春慶店、枡工房 Masuya）與日本氣象廳東海地方梅雨平年值整理。" },
          svg:function(lang, L){ return GIFU.fig.year(lang, L, {
            title:{ en:"A year of care", ja:"手入れの一年", zh:"保養的一年" }, labelW:190,
            rows:[
              { en:"Gifu weather", ja:"岐阜の天候", zh:"岐阜的天候" },
              { en:"Oiled furniture", ja:"オイル仕上げの家具", zh:"油性塗裝家具" },
              { en:"Rooms & floors", ja:"部屋と床", zh:"房間與地板" },
              { en:"Tableware", ja:"食器", zh:"食器" },
              { en:"Northern Taiwan", ja:"台湾北部", zh:"台灣北部" }
            ],
            items:[
              { row:0, m0:6, m1:7, n:{ en:"rainy season", ja:"梅雨", zh:"梅雨" }, f:"#E0E7E9" },
              { row:0, m0:12, m1:12, n:"", f:"#EDE5D2" },
              { row:0, m0:1, m1:2, n:{ en:"heated, dry", ja:"暖房・乾燥", zh:"暖氣、乾燥" }, f:"#EDE5D2" },
              { row:1, m0:5, m1:5, n:{ en:"wax", ja:"蝋", zh:"上蠟" }, f:"#EADCC1" },
              { row:1, m0:11, m1:11, n:{ en:"wax", ja:"蝋", zh:"上蠟" }, f:"#EADCC1" },
              { row:2, m0:6, m1:9, n:{ en:"ventilate, dehumidify", ja:"換気・除湿", zh:"通風、除濕" }, f:"#E0E7E9" },
              { row:2, m0:12, m1:12, n:"", f:"#F0EDE4" },
              { row:2, m0:1, m1:2, n:{ en:"humidify", ja:"加湿", zh:"加濕" }, f:"#F0EDE4" },
              { row:3, m0:6, m1:9, n:{ en:"dry well: mould", ja:"よく乾かす", zh:"徹底晾乾" }, f:"#E0E6DB" },
              { row:3, m0:12, m1:12, n:"", f:"#EEE1DF" },
              { row:3, m0:1, m1:2, n:{ en:"no heaters", ja:"暖房を避ける", zh:"避開暖氣" }, f:"#EEE1DF" },
              { row:4, m0:5, m1:6, n:{ en:"plum rain", ja:"梅雨", zh:"梅雨" }, f:"#E0E7E9" },
              { row:4, m0:7, m1:9, n:{ en:"typhoons", ja:"台風", zh:"颱風" }, f:"#E6E2EC" },
              { row:4, m0:12, m1:12, n:"", f:"#E9ECEE" },
              { row:4, m0:1, m1:3, n:{ en:"damp winter", ja:"湿った冬", zh:"濕冷冬季" }, f:"#E9ECEE" }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: Japan Meteorological Agency, past rainy-season dates (Tōkai); Central Weather Administration (Taiwan) plum-rain outlook, 2025; Yamada Shunkei-ten, care of Hida Shunkei; Masuya (Ōhashi Ryōki), masu care; Kurikyū, magewappa care; Ak, Cliver and Kaspar, Journal of Food Protection 57 (1994); Japan Wood Research and Information Centre.",
            ja:"出典：気象庁 過去の梅雨入りと梅雨明け（東海）、台湾中央気象署 二〇二五年梅雨季見通し、山田春慶店 お手入れ、枡工房枡屋（大橋量器）、栗久 お手入れ方法、Ak・Cliver・Kaspar『Journal of Food Protection』57号（一九九四年）、日本木材総合情報センター。",
            zh:"資料來源：日本氣象廳歷年梅雨開始與結束日期（東海）；台灣中央氣象署 2025 年梅雨季展望；山田春慶店保養說明；枡工房 Masuya（大橋量器）；栗久保養方法；Ak、Cliver、Kaspar，《Journal of Food Protection》第 57 期（1994 年）；日本木材綜合情報中心。" } }
      ] },
    { t:"section",
      id:"taiwan",
      title:{ en:"Japanese wood in a Taiwanese home", ja:"台湾の家の日本の木", zh:"台灣家中的日本木器" },
      jp:"台湾",
      body:[
        { t:"p",
          text:{
            en:"Furniture made in Takayama is dried in the kiln to suit a Japanese interior, typically to around 8–12 per cent moisture content. Taipei's air averages about 75 per cent relative humidity through the year, which by the Forest Products Laboratory table corresponds to an equilibrium moisture content of about 14 per cent. A table or cabinet carried from Gifu to an un-air-conditioned flat in Taipei will therefore take on water over its first months and swell: drawers tighten, doors bind, and a top fixed too rigidly may bow. None of this means the piece is faulty. Give it several weeks to settle before judging the fit, keep it a hand's width away from outside walls, where the air is dampest and condensation can form, and do not stand it in the direct blast of a dehumidifier or air-conditioner, which dries one face faster than the other.",
            ja:"高山でつくられた家具は、日本の室内に合わせて窯で乾かされ、ふつう含水率八〜十二パーセントほどになっている。台北の空気は一年を通して平均約七十五パーセントの相対湿度で、林産物研究所の表では平衡含水率約十四パーセントにあたる。だから岐阜から台北の冷房のない部屋に運ばれた食卓や棚は、はじめの数か月で水分を吸ってふくらむ。引出しは固くなり、扉はつかえ、固く留めすぎた天板は反ることがある。どれも欠陥ではない。合い具合を判断するまえに数週間なじませ、空気が最も湿って結露しやすい外壁から手のひらひとつぶん離し、除湿機やエアコンの風がじかに当たる所には置かないこと。片面だけが先に乾くからである。",
            zh:"高山製作的家具，是依日本室內環境以乾燥窯乾燥的，含水率通常約在 8–12%。台北全年空氣平均相對濕度約 75%，依林產品研究所的表格，對應的平衡含水率約為 14%。因此，一張從岐阜運到台北、沒有冷氣的公寓裡的桌子或櫃子，在最初幾個月會吸收水分而膨脹：抽屜變緊、門片卡住，固定得過死的桌面還可能拱起。這些都不代表家具有瑕疵。在判斷是否合縫之前，先給它幾週時間適應；讓它與外牆保持約一個手掌寬的距離，因為那裡空氣最潮濕，也容易結露；也不要放在除濕機或冷氣直吹之處，否則一面會比另一面乾得更快。" } },
        { t:"p",
          text:{
            en:"Mould is the other Taiwanese hazard. Guidance from Taiwanese environmental-health agencies commonly recommends keeping indoor humidity between about 50 and 60 per cent, because mould grows readily above 60 per cent. For wood that means running a dehumidifier or air-conditioner through the plum-rain season and on the wettest days of summer, leaving cupboard doors ajar now and then, and never shutting unfinished tableware away while it is still damp. Mould on a film-finished surface can be wiped off with a well-wrung cloth and the piece dried in moving air; on unfinished wood it roots into the surface and is scrubbed out as described above for cutting boards. The one real risk of the humid climate for a Japanese owner is overcorrection: a room kept below about 40 per cent by a powerful dehumidifier is as hard on solid wood as a heated room in Hida.",
            ja:"カビは台湾のもう一つの心配ごとである。台湾の環境衛生の機関の指針は、カビが六十パーセントを超えると増えやすいことから、室内の湿度をおよそ五十〜六十パーセントに保つよう勧めることが多い。木にとってそれは、梅雨の時期と夏のいちばん湿った日に除湿機かエアコンを動かし、ときどき戸棚の扉を少し開け、白木の器を湿ったままけっしてしまいこまないことを意味する。塗膜の面のカビは固く絞った布で拭きとり、風の通る所で乾かせばよい。白木では表面に根を張るので、まな板について述べたようにこすり落とす。湿った気候で日本の持ち主が陥りやすい唯一の本当の危険は、やりすぎである。強力な除湿機で四十パーセントを下回るように保った部屋は、飛騨の暖房した部屋と同じくらい無垢材にはきびしい。",
            zh:"黴菌是台灣的另一項隱憂。台灣環境衛生機關的指引常建議將室內濕度維持在約 50% 到 60% 之間，因為超過 60% 黴菌便容易滋生。對木器而言，這意味著在梅雨季與夏季最潮濕的日子開除濕機或冷氣，不時把櫥櫃門打開一些，且絕不要把尚未乾透的白木器皿收起來。成膜塗裝表面的黴，可用擰乾的布擦除，再放在通風處晾乾；未塗裝的木面則會讓黴菌扎根表層，須依前述砧板的方法刷除。對習慣日本環境的使用者來說，潮濕氣候中唯一真正的風險是矯枉過正：用強力除濕機把房間壓到約 40% 以下，對實木的傷害不亞於飛驒開暖氣的房間。" } },
        { t:"note",
          label:{ en:"Repairs across the sea", ja:"海をこえた修理", zh:"跨海維修" },
          text:{
            en:"Makers' repair services are generally organised through their Japanese retailers. Nissin Mokkō, for example, states that its repair service is available only within Japan. A buyer in Taiwan should ask before purchase what the warranty means abroad, and expect that a major repair will involve either shipping the piece back or finding a local restorer.",
            ja:"メーカーの修理はふつう日本の販売店を通じて受けつけられる。たとえば日進木工は、修理は日本国内のみとしている。台湾で買う人は、保証が海外でどう扱われるかを購入前にたずね、大きな修理には品を送り返すか、地元の修復家を探すことになると考えておくべきである。",
            zh:"廠商的維修服務一般透過其日本經銷商受理。例如日進木工即說明其維修服務僅限日本國內。在台灣的買家應於購買前詢問保固在海外如何適用，並預期大型維修要不是把家具寄回日本，就得在當地另尋修復師。" } }
      ] },
    { t:"section",
      id:"repair",
      title:{ en:"Repair and restoration", ja:"修理と再生", zh:"修理與翻新" },
      jp:"修理",
      body:[
        { t:"p",
          text:{
            en:"A solid-wood chair can be taken apart, reglued, re-upholstered and refinished many times; that, more than anything, is what justifies its price. Repair is built into Hida's regional trademark: the design charter behind the “Hida furniture” mark requires certified makers to guarantee the wooden parts of their furniture for ten years (see <a href=\"furniture.html\">Hida Furniture</a>). Hida Sangyō's warranty covers manufacturing faults and damage arising from the nature of solid wood, such as warping and cracking, though not misuse. Its repair workshop, in part of the company's second factory, handles about 4,000 requests a year — refinishing, re-upholstery, the replacement of worn parts — including discontinued models and chairs that have served three generations of a family. Nissin Mokkō asks customers to send photographs through an online form, quotes a rough price, and collects the piece through a retailer for repair at the factory. Kashiwa publishes its own repair service and ten-year warranty. And Kitani, the Takayama firm that now holds the licence for Finn Juhl's No. 53 chair, built that relationship on repair: from about 1995 it spent some twenty years restoring and studying Juhl's furniture before it began to make it.",
            ja:"無垢材の椅子は、何度でも分解し、接着しなおし、張りかえ、塗りなおすことができる。何よりそれが、その値段の理由である。修理は飛騨の地域団体商標に組みこまれている。「飛騨の家具」のしるしの背後にあるデザイン憲章は、認定されたメーカーに家具の木の部分を十年保証するよう求めている（<a href=\"furniture.html\">飛騨の家具</a>を参照）。飛騨産業の保証は、製造上の不具合と、反りや割れのような無垢材の性質による破損を対象とし、誤った使い方は含まない。同社の第二工場の一角にある修理工房は、年に約四千件の依頼を受ける——塗りなおし、張りかえ、傷んだ部材の交換——廃番の製品や、親子三代にわたって使われた椅子も含まれる。日進木工は、ウェブのフォームで写真を送ってもらい、おおよその見積もりを出し、販売店を通じて品を預かって工場で直す。柏木工も修理の受付と十年保証を公表している。そして、いまフィン・ユールのNo.53チェアのライセンスをもつ高山のキタニは、その関係を修理の上に築いた。一九九五年ごろから二十年近くユールの家具を修復し研究してから、それをつくりはじめたのである。",
            zh:"一張實木椅可以一再拆解、重新膠合、換面料、重新塗裝；這一點比什麼都更能說明它的價格。修理已被納入飛驒的地域團體商標：「飛驒家具」標章背後的設計憲章，要求認證廠商為家具的木質部分提供十年保固（見<a href=\"furniture.html\">飛驒家具</a>）。飛驒產業的保固涵蓋製造瑕疵，以及翹曲、開裂等源於實木特性的損壞，但不包括不當使用。其修理工坊設在公司第二工廠的一角，每年受理約 4,000 件委託——重新塗裝、更換面料、替換磨損零件——包括已停產的型號，以及一家三代都坐過的椅子。日進木工請顧客透過網路表單傳送照片，先給出概略報價，再經由經銷商收件，送回工廠修理。柏木工也公開了自家的維修服務與十年保固。而如今持有 Finn Juhl No.53 椅授權的高山廠商 Kitani，正是以修理建立起這段關係：約從 1995 年起，它花了近二十年修復並研究 Juhl 的家具，之後才開始製作。" } },
        { t:"steps",
          items:[
            { title:{ en:"Find the maker", ja:"つくり手をさがす", zh:"找出製造商" },
              meta:{ en:"labels, marks", ja:"ラベル・しるし", zh:"標籤、標記" },
              text:{
                en:"Look under the seat, inside a drawer or on the back for a label or brand. Older Hida Sangyō pieces carry the woodpecker logo the company used until 2021.",
                ja:"座の裏、引出しの内側、背面にラベルや焼印をさがす。古い飛騨産業の品には、同社が二〇二一年まで使ったキツツキのロゴがある。",
                zh:"在座面下方、抽屜內側或背面尋找標籤或烙印。較舊的飛驒產業產品帶有該公司沿用到 2021 年的啄木鳥標誌。" } },
            { title:{ en:"Document the damage", ja:"傷みを記録する", zh:"記錄損壞" },
              meta:{ en:"photos, sizes", ja:"写真・寸法", zh:"照片、尺寸" },
              text:{
                en:"Photographs of the whole piece and the damage, with dimensions and, if known, the model name.",
                ja:"全体と傷んだ所の写真、寸法、わかればモデル名。",
                zh:"整件家具與損壞處的照片，附上尺寸，若知道也請附上型號。" } },
            { title:{ en:"Ask for an estimate", ja:"見積もりをとる", zh:"索取報價" },
              meta:{ en:"maker or shop", ja:"メーカーか店", zh:"廠商或店家" },
              text:{
                en:"Through the maker's form or the shop where it was bought; the final price is fixed only after inspection.",
                ja:"メーカーのフォームか、買った店を通じて。最終の金額は品を見てから決まる。",
                zh:"透過廠商表單或原購買店家；最終價格須待實物檢查後才確定。" } },
            { title:{ en:"Transport", ja:"運ぶ", zh:"運送" },
              meta:{ en:"usually extra", ja:"ふつう別料金", zh:"通常另計" },
              text:{
                en:"Packing and carriage are normally charged separately from the repair.",
                ja:"梱包と運送は、ふつう修理とは別に請求される。",
                zh:"包裝與運費通常與修理費分開計算。" } },
            { title:{ en:"Wait", ja:"待つ", zh:"等待" },
              meta:{ en:"weeks, not days", ja:"日ではなく週", zh:"以週計" },
              text:{
                en:"Glue must cure and finishes must harden; a good repair is not rushed.",
                ja:"接着剤は固まり、塗装は硬くならねばならない。よい修理は急がない。",
                zh:"膠需要固化，塗裝需要硬化；好的修理急不得。" } }
          ] },
        { t:"h3", text:{ en:"Re-lacquering", ja:"漆の塗りなおし", zh:"重新上漆" }, jp:"塗り直し" },
        { t:"p",
          text:{
            en:"Urushi can be repaired in ways most finishes cannot. A chip can be filled and relacquered (<em>urushi-tsukuroi</em>), a worn bowl can be stripped back to its undercoat and given new coats (<em>nurinaoshi</em>), and a broken piece can be rejoined with lacquer — the technique that, finished with gold, is known as <em>kintsugi</em>. Makers stress timing: a chip left unrepaired lets water and oil into the wood and speeds the damage. Policies differ. Some makers repair their own ware for decades; Yamada Shunkei-ten in Takayama reinforces minor cracks in pieces bought from the shop, but says it cannot repair severe splitting, missing pieces or major peeling. Wiped lacquer (<em>fuki-urushi</em>) on a table or counter can simply be renewed by rubbing in more raw lacquer; exposed to sunlight outdoors, it needs renewing every twenty-five to thirty years.",
            ja:"漆は、たいていの仕上げにはできないかたちで直すことができる。欠けは埋めて漆を塗りなおし（漆繕い）、擦り減った椀は下地まで戻して新しく塗り重ね（塗り直し）、割れたものは漆で継ぐことができる——金で仕上げたものが「金継ぎ」と呼ばれる技である。つくり手たちは時機を強調する。欠けを放っておくと水や油が木に入り、傷みを早めるからである。方針はさまざまである。何十年も自分の器を直しつづけるつくり手もいる。高山の山田春慶店は、店で買った品の小さな割れは補強するが、大きな割れ、欠損、大きな塗りのはがれは直せないとしている。食卓やカウンターの拭き漆は、生漆をすりこみなおすだけで新しくなる。屋外で日にさらされるなら、二十五〜三十年ごとに塗りなおしがいる。",
            zh:"漆能以多數塗裝做不到的方式修復。缺口可以填補後重新上漆（日文稱「漆繕い」），磨損的碗可以退回底漆層再重新塗覆（「塗り直し」），破損的器物還能用漆黏合——以金粉收尾時，便是所謂的「金繼」。工匠們強調時機：缺口若置之不理，水與油會滲入木胎，加速損壞。各家的做法不同。有些工匠數十年都持續修理自家作品；高山的山田春慶店會為在店內購買的器物補強細小裂痕，但表示無法修理嚴重開裂、缺損或大面積剝落。桌面或檯面上的擦漆，只要再擦入生漆就能更新；若在戶外受日曬，則每二十五到三十年需要重新塗擦。" } },
        { t:"h3", text:{ en:"Chests, boards and tubs", ja:"箪笥・まな板・桶", zh:"衣櫃、砧板與木桶" }, jp:"削り直し" },
        { t:"p",
          text:{
            en:"Other traditional objects have their own restorers. Paulownia chests (<em>kiri-dansu</em>) are restored by specialists who take them apart, wash and re-plane the soft pale wood and refinish it — a process known as <em>arai</em>, washing. A drawer that has begun to stick can often be eased at home with <em>ibota</em> wax, secreted by a scale insect on privet trees, rubbed in a zigzag along its sides and runners. Cutting boards can be re-planed by the shop that sold them, restoring a clean surface; and coopers who make hinoki tubs and sushi rice bowls commonly replace their hoops and reshape their staves. The principle is the same across all of them: wood that can be cut once can be cut again, and a thing made to be repaired is never quite worn out.",
            ja:"ほかの伝統的な品にも、それぞれの直し手がいる。桐箪笥は専門の職人が分解し、柔らかく白い木を洗って削りなおし、仕上げなおす——「洗い」と呼ばれる作業である。滑りの悪くなった引出しは、イボタノキにつくカイガラムシが分泌するイボタ蝋を、側面と滑り桟にジグザグにこすりつければ、家でも軽くなることが多い。まな板は買った店で削りなおしてもらえば、きれいな面に戻る。ヒノキの桶や寿司桶をつくる桶屋は、たがを替え、側板を整えなおすのが常である。どれにも通じる原則は同じである。一度削れる木は、もう一度削れる。直すようにつくられたものは、けっして使い切られることがない。",
            zh:"其他傳統器物也各有其修復師。桐木衣櫃（桐簞笥）由專門師傅拆開，清洗並重新刨削柔軟淺色的木材，再重新塗裝——這道工序稱為「洗」。開始卡住的抽屜，往往可以在家用蟲白蠟（日文稱「イボタ蠟」）改善：這是寄生於女貞屬樹木上的介殼蟲所分泌的蠟，以之字形擦在抽屜側面與滑軌上即可。砧板可送回原購買店重新刨平，恢復乾淨的表面；製作扁柏木桶與壽司飯桶的桶匠，也常為之更換箍圈、修整側板。所有這些背後的原則都一樣：能削一次的木頭，就能再削一次；為了修理而做的東西，永遠不會真正用壞。" } },
        { t:"tiny",
          text:{
            en:"Sources: Hida Sangyō, repair workshop and FAQ; Nissin Mokkō, repair procedure; Kashiwa Mokkō, repair and ten-year warranty pages; Kitani, Finn Juhl history; Yamada Shunkei-ten FAQ; Meguru lacquerware care; CLASS1 kenzai digest on fuki-urushi; Kiri-dansu Saisei Kōbō Ōishi on ibota wax; Forest Products Laboratory, Wood Handbook (1999).",
            ja:"出典：飛騨産業 修理工房・よくある質問、日進木工 修理の流れ、柏木工 修理・十年保証、キタニ フィン・ユールの歴史、山田春慶店 よくある質問、漆器「めぐる」お手入れ、建材ダイジェスト「拭き漆」、桐たんす再生工房おおいし「イボタ蝋」、アメリカ林産物研究所『Wood Handbook』（一九九九年）。",
            zh:"資料來源：飛驒產業修理工坊與常見問題；日進木工維修流程；柏木工維修與十年保固頁面；Kitani 的 Finn Juhl 歷史；山田春慶店常見問題；漆器品牌「めぐる」保養說明；建材文摘〈擦漆〉；桐簞笥再生工房大石〈蟲白蠟〉；美國林產品研究所《Wood Handbook》（1999 年）。" } }
      ] },
    { t:"related",
      items:[
        { href:"moisture.html", why:{ en:"Why wood swells and shrinks.", ja:"木がふくらみ縮むわけ。", zh:"木材為何脹縮。" } },
        { href:"finishes.html",
          why:{ en:"Urushi, oils, waxes and modern coatings.", ja:"漆、油、蝋、現代の塗料。", zh:"漆、油、蠟與現代塗料。" } },
        { href:"buying.html", why:{ en:"Choosing pieces that will last.", ja:"長くもつものを選ぶ。", zh:"挑選經久耐用的器物。" } },
        { href:"furniture.html", why:{ en:"The makers of Takayama.", ja:"高山のメーカー。", zh:"高山的家具廠。" } },
        { href:"guitarcare.html",
          why:{ en:"The same principles, for instruments.", ja:"同じ原則を楽器に。", zh:"同樣的原則，用在樂器上。" } }
      ] }
  ] };

/* ---- ------------------------------------------ finishes */
GIFU.pages["finishes"] = { kicker:{ en:"Living with Wood · 02", ja:"木と暮らす · 02", zh:"與木共處 · 02" },
  title:{ en:"Finishes", ja:"塗装と仕上げ", zh:"塗裝與收尾" },
  jp:"仕上げ",
  lede:{
    en:"What is put on the surface of wood decides how it looks, how it feels in the hand, how it resists water and heat, and — often forgotten — how it can be repaired. Japan has one of the world's great finishes in urushi, the sap of the lacquer tree, but also a quieter repertoire of perilla oil, persimmon tannin, insect wax, charred and brushed surfaces, and wood deliberately left bare. Modern furniture factories in Takayama add polyurethane, ultraviolet-cured and water-based coatings, all under strict rules on formaldehyde and food contact. This page explains what each finish is, what it does well and badly, and why so little of Japan's urushi is now Japanese.",
    ja:"木の表面に何を施すかで、その見え方、手ざわり、水や熱への強さ、そして——忘れられがちだが——どう直せるかが決まる。日本には漆という世界屈指の塗料があるが、ほかにも、エゴマの油、柿渋、虫の蝋、焼いた面やこすった面、あえて何も塗らない白木といった、より控えめな技の蓄えがある。高山の現代の家具工場は、そこにウレタン、紫外線硬化、水性の塗料を加え、そのすべてがホルムアルデヒドと食品に触れる物についての厳しい決まりのもとにある。この頁は、それぞれの仕上げが何であり、何が得意で何が不得手か、そしてなぜ日本の漆のうち日本産のものがいまこれほど少ないのかを説明する。",
    zh:"木材表面施以什麼，決定了它的外觀、手感、耐水耐熱的程度，以及——常被忽略的——日後如何修復。日本擁有世界頂尖的塗料之一：漆樹的樹液「漆」；此外也有一套較不張揚的技法：荏油（紫蘇籽油）、柿澀、蟲蠟、燒焦或刷紋的表面，以及刻意不加塗裝的白木。高山的現代家具廠又加入了聚氨酯、紫外線硬化與水性塗料，而這一切都受到甲醛與食品接觸方面的嚴格規範。本頁說明每種塗裝是什麼、長處與短處何在，以及為何如今日本所用的漆，產自日本的竟如此之少。" },
  body:[
    { t:"section",
      id:"principles",
      title:{ en:"What a finish does", ja:"仕上げのはたらき", zh:"塗裝的作用" },
      jp:"浸透と塗膜",
      body:[
        { t:"p",
          text:{
            en:"A finish does four jobs. It slows the exchange of moisture between wood and air — no finish stops it entirely, which is why a lacquered box still moves with the seasons. It protects against dirt, stains, heat and wear. It changes the look of the wood: its colour, its gloss, the depth at which the grain seems to lie. And it changes the feel, from the dry warmth of bare hinoki to the glassy smoothness of a hard coating. Every finish trades these against each other, and against a fifth quality that makers in Gifu care about a great deal: whether, when it is damaged, it can be put right.",
            ja:"仕上げには四つのはたらきがある。木と空気のあいだの水分のやりとりを遅くすること——完全に止める仕上げはなく、だから漆の箱も季節とともに動く。汚れ、しみ、熱、摩耗から守ること。木の見え方を変えること——色、艶、木目がどれほどの深さにあるように見えるか。そして手ざわりを変えること。白木のヒノキの乾いたぬくもりから、硬い塗膜のガラスのようななめらかさまで。どの仕上げもこれらを互いに引きかえにし、さらに岐阜のつくり手がとても大事にする五つ目の性質とも引きかえにする。傷んだとき、直せるかどうかである。",
            zh:"塗裝有四項功能。它減緩木材與空氣之間的水分交換——沒有任何塗裝能完全阻斷，所以漆盒依然會隨季節伸縮。它保護木材不受污垢、污漬、熱與磨損侵害。它改變木材的外觀：顏色、光澤，以及木紋看起來所處的深度。它也改變手感：從未塗裝扁柏乾爽的溫潤，到堅硬塗膜如玻璃般的光滑。每種塗裝都在這些性質之間取捨，還要加上岐阜工匠非常在意的第五項：一旦損傷，能不能修好。" } },
        { t:"p",
          text:{
            en:"Finishes fall into two families. <em>Penetrating</em> finishes — drying oils, waxes, wiped lacquer, persimmon tannin — soak into the surface cells and leave the wood's texture exposed. They protect modestly, feel like wood, and can be renewed at home by rubbing in more of the same. <em>Film</em> finishes — coated urushi, shellac, nitrocellulose lacquer, polyurethane, ultraviolet-cured resins — build a continuous layer on top. They protect far better against water and wear, but the hand touches the coating rather than the wood, and a damaged film generally has to be stripped and rebuilt in a workshop. Urushi is the great exception: a film finish that can be patched, rejoined and recoated almost indefinitely by a skilled lacquerer.",
            ja:"仕上げは二つの系統に分かれる。浸透する仕上げ——乾性油、蝋、拭き漆、柿渋——は表面の細胞に浸みこみ、木の肌をむき出しのまま残す。守りはほどほどで、手ざわりは木そのものであり、同じものをすりこめば家で新しくできる。塗膜の仕上げ——塗り重ねた漆、シェラック、ラッカー、ウレタン、紫外線硬化樹脂——は上に切れ目のない層をつくる。水や摩耗にはずっとよく耐えるが、手が触れるのは木ではなく膜であり、傷んだ膜はたいてい工房ではがしてつくりなおさねばならない。漆は大きな例外である。腕のよい塗師なら、ほとんど限りなく繕い、継ぎ、塗り重ねることのできる塗膜なのである。",
            zh:"塗裝可分為兩大類。「滲透型」塗裝——乾性油、蠟、擦漆、柿澀——滲入表層細胞，讓木材紋理保持外露。保護力中等，觸感就是木頭本身，只要再擦上同樣的材料就能在家更新。「成膜型」塗裝——層層塗覆的漆、蟲膠、硝基漆、聚氨酯、紫外線硬化樹脂——在表面形成連續的塗層。它們防水耐磨的能力好得多，但手摸到的是塗膜而非木材，塗膜一旦受損，通常得在工坊剝除重做。漆是最大的例外：它雖是成膜型塗裝，卻能由技藝純熟的漆師近乎無限次地修補、黏合與重塗。" } },
        { t:"figure",
          caption:{
            en:"How common finishes compare. This is a qualitative, editorial summary drawn from the descriptions of makers and finish suppliers (among them Hida Sangyō, Okajima Mokuzai and Yamakei Sangyō); real performance depends on the product, the number of coats and the care it receives. Three dots = strongest.",
            ja:"おもな仕上げの比較。つくり手と塗料業者の説明（飛騨産業、恩加島木材工業、山桂産業など）をもとに編集部がまとめた定性的な要約であり、実際の性能は製品、塗り回数、手入れによって変わる。点三つがいちばん強い。",
            zh:"常見塗裝的比較。本圖為編輯部依據製造商與塗料業者（包括飛驒產業、恩加島木材工業、山桂產業等）說明所整理的定性摘要；實際表現取決於產品、塗布次數與保養方式。三點為最強。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"Finishes compared", ja:"仕上げの比較", zh:"塗裝比較" }, labelW:210,
            cols:[ { en:"Water", ja:"耐水", zh:"耐水" }, { en:"Heat", ja:"耐熱", zh:"耐熱" }, { en:"Wear", ja:"耐摩耗", zh:"耐磨" }, { en:"Wood feel", ja:"木の手ざわり", zh:"木材觸感" }, { en:"Touch-up", ja:"家で補修", zh:"居家補修" }, { en:"Renewal", ja:"塗りなおし", zh:"重新塗裝" } ],
            rows:[
              { n:{ en:"Unfinished (shiraki)", ja:"白木（無塗装）", zh:"白木（未塗裝）" }, v:[0,2,1,3,3,3] },
              { n:{ en:"Drying oil", ja:"乾性油", zh:"乾性油" }, v:[1,1,1,3,3,3] },
              { n:{ en:"Wax", ja:"蝋", zh:"蠟" }, v:[1,0,1,3,3,3] },
              { n:{ en:"Persimmon tannin", ja:"柿渋", zh:"柿澀" }, v:[2,1,1,2,3,2] },
              { n:{ en:"Wiped urushi", ja:"拭き漆", zh:"擦漆" }, v:[2,2,2,2,2,3] },
              { n:{ en:"Coated urushi", ja:"塗り重ねた漆", zh:"層塗漆" }, v:[3,2,2,1,0,3] },
              { n:{ en:"Shellac", ja:"シェラック", zh:"蟲膠" }, v:[1,0,1,2,2,3] },
              { n:{ en:"Nitrocellulose lacquer", ja:"ラッカー", zh:"硝基漆" }, v:[1,1,1,2,1,2] },
              { n:{ en:"Polyurethane", ja:"ウレタン", zh:"聚氨酯" }, v:[3,2,3,1,0,1] },
              { n:{ en:"UV-cured coating", ja:"UV塗装", zh:"UV 塗裝" }, v:[3,3,3,1,0,0] }
            ] }); } },
        { t:"p",
          text:{
            en:"The first row of the figure deserves a word. Much of the finest woodwork in Gifu has no finish at all. Masu, shrine offering stands, hinoki bath tubs and the yew carvings of <a href=\"ittobori.html\">Ichii Ittōbori</a> are left as plain wood, <em>shiraki</em>, which in Japanese carries a sense of purity (see <a href=\"translation.html\">Words That Do Not Translate</a>). Bare wood marks easily and slowly turns from pale to honey or grey, but it is hygienic if it is washed and dried, it can be renewed indefinitely with a plane, and nothing stands between the hand and the material.",
            ja:"図のいちばん上の行には一言が要る。岐阜の最もすぐれた木工の多くには、まったく塗装がない。枡、神前の三方、ヒノキの浴槽、<a href=\"ittobori.html\">一位一刀彫</a>のイチイの彫刻は、白木のまま残される。白木という語は日本語で清らかさの感覚を帯びる（<a href=\"translation.html\">訳せない語</a>を参照）。素の木は跡がつきやすく、白からしだいに飴色や灰色に変わるが、洗って乾かせば衛生的であり、鉋でいくらでも新しくでき、手と素材のあいだに何もはさまない。",
            zh:"圖中第一列值得一提。岐阜許多最精緻的木作根本不加塗裝。木枡、神前供台、扁柏浴桶，以及<a href=\"ittobori.html\">一位一刀雕</a>的紅豆杉雕刻，都保持原木狀態，稱為「白木」，這個詞在日語中帶有潔淨的意味（見<a href=\"translation.html\">翻譯不過去的詞</a>）。原木容易留下痕跡，也會由淺色慢慢轉為蜂蜜色或灰色，但只要清洗晾乾就很衛生，能用刨刀無限次翻新，而且手與材料之間沒有任何阻隔。" } }
      ] },
    { t:"section",
      id:"urushi",
      title:{ en:"Urushi: the Japanese lacquer", ja:"漆", zh:"漆：日本的大漆" },
      jp:"国産漆",
      body:[
        { t:"p",
          text:{
            en:"How urushi cures, and why it is so resistant once cured, is explained on <a href=\"shunkei.html\">Hida Shunkei</a>. As a finish it appears in three broad forms. <em>Fuki-urushi</em>, wiped lacquer, is raw lacquer rubbed into the wood with a cloth and wiped off, usually three to five times; it darkens and deepens the grain of keyaki, tochi or sugi without hiding it, and is used on trays, tables and counters. Coated lacquer, <em>nurimono</em>, builds layers of ground, black or vermilion lacquer over a wooden core until the wood is hidden altogether. And transparent lacquer over stained wood — the Hida Shunkei technique — shows the grain through an amber film. The top-coat lacquer used for Shunkei is refined urushi blended with a drying oil, traditionally perilla, which links it to the oil finishes described below.",
            ja:"漆がどう固まり、固まるとなぜそれほど強いかは<a href=\"shunkei.html\">飛騨春慶</a>で説明した。仕上げとしての漆は、大きく三つのかたちをとる。拭き漆は、生漆を布で木にすりこんでは拭きとるもので、ふつう三〜五回くりかえす。ケヤキ、トチ、スギの木目を隠さずに濃く深くし、盆、座卓、カウンターに使われる。塗り重ねる漆、塗り物は、木の素地の上に下地、黒や朱の漆の層を重ね、木をすっかり隠す。そして着色した木の上に透明な漆をかける技法——飛騨春慶——は、琥珀色の膜ごしに木目を見せる。春慶の上塗りに使う漆は、精製した漆に乾性油、昔ならエゴマの油をまぜたもので、ここで次に述べる油の仕上げとつながる。",
            zh:"漆如何硬化、硬化後為何如此耐久，已在<a href=\"shunkei.html\">飛驒春慶</a>說明。作為塗裝，漆大致有三種形態。「擦漆」是用布把生漆擦入木材再拭去，通常反覆三到五次；它使櫸木、七葉樹或柳杉的木紋更深更濃卻不加遮掩，用於托盤、矮桌與檯面。「塗物」則是在木胎上層層塗上底漆、黑漆或朱漆，直到木材完全隱沒。第三種是在染色木材上塗透明漆——即飛驒春慶的技法——透過琥珀色的漆膜展現木紋。春慶面漆所用的漆，是精製漆調入乾性油，傳統上用荏油，這也把它與下文的油性塗裝連在一起。" } },
        { t:"p",
          text:{
            en:"Japan still uses a good deal of urushi, but very little of it is Japanese. In 2024 the country consumed about 31.2 tonnes — only 6.9 per cent of the volume of 1980 — and produced about 1.8 tonnes of its own, 5.7 per cent of consumption; most of the rest is imported from China. In the Meiji era Japan had produced several tens of tonnes a year (60,583 kg in 1883, according to a 2020 report of the Japan Special Forest Products Promotion Association), and after the war output fell steadily until it reached about 1 tonne a year in 2013–2014. Iwate prefecture, centred on Jōbōji in Ninohe city, supplied 1,421 kg of the 2024 total, 79.3 per cent; Ibaraki and Tochigi supplied most of the rest. Domestic lacquer is prized for a higher content of urushiol, the component that hardens.",
            ja:"日本はいまも相当な量の漆を使うが、そのうち日本産はごくわずかである。二〇二四年の国内消費量は約31.2トン——一九八〇年の6.9パーセントにすぎない——で、国内生産は約1.8トン、消費の5.7パーセントだった。残りの大部分は中国からの輸入である。明治期の日本は年に数十トンを生産していた（日本特用林産振興会の二〇二〇年の報告書によれば、一八八三年に60,583キロ）が、戦後の生産は減りつづけ、二〇一三〜二〇一四年には年に約一トンにまで落ちた。二〇二四年の生産のうち、二戸市の浄法寺を中心とする岩手県が1,421キロ、79.3パーセントを占め、残りの大半は茨城と栃木である。国産の漆は、固まる成分であるウルシオールの含有率が高いことで重んじられる。",
            zh:"日本至今仍使用相當數量的漆，但產自日本的極少。2024 年全國消費約 31.2 公噸——僅為 1980 年的 6.9%——國內產量約 1.8 公噸，占消費量 5.7%；其餘大部分自中國進口。明治時期日本每年產漆數十公噸（據日本特用林產振興會 2020 年報告，1883 年為 60,583 公斤），戰後產量持續下滑，到 2013–2014 年每年僅約 1 公噸。在 2024 年的產量中，以二戶市淨法寺為中心的岩手縣占 1,421 公斤，即 79.3%；其餘大多來自茨城與櫪木。國產漆因主要硬化成分漆酚含量較高而受到重視。" } },
        { t:"figure",
          caption:{
            en:"Domestic production of raw urushi in Japan, tonnes, 2009–2025. Values for 2020–2023 are rounded to 0.1 tonne in the source. Sources: Japan Special Forest Products Promotion Association, report on urushi (2020), for 2009–2018; Ministry of Agriculture, Forestry and Fisheries, Special Forest Products Production Statistics, for 2019 and 2025; Forestry Agency, Annual Report on Forest and Forestry in Japan, for 2020–2024.",
            ja:"日本の生漆の国内生産量（トン、二〇〇九〜二〇二五年）。二〇二〇〜二〇二三年の値は出典で〇・一トン単位に丸められている。出典：日本特用林産振興会 漆に関する報告書（二〇二〇年）＝二〇〇九〜二〇一八年、農林水産省 特用林産物生産統計調査＝二〇一九年・二〇二五年、林野庁 森林・林業白書＝二〇二〇〜二〇二四年。",
            zh:"日本生漆國內產量（公噸，2009–2025 年）。2020–2023 年數值在原始資料中已四捨五入至 0.1 公噸。資料來源：日本特用林產振興會漆相關報告（2020 年），2009–2018 年；日本農林水產省特用林產物生產統計調查，2019 年與 2025 年；林野廳《森林・林業白皮書》，2020–2024 年。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Japan's own urushi", ja:"国産の漆", zh:"日本國產漆" },
            unit:{ en:"tonnes of raw lacquer", ja:"生漆（トン）", zh:"生漆（公噸）" }, dec:1, tick:0.5, every:2, hl:["2014","2020","2025"],
            items:[ {x:"2009",v:1.94},{x:"2010",v:1.58},{x:"2011",v:1.34},{x:"2012",v:1.42},{x:"2013",v:1.04},{x:"2014",v:1.00},{x:"2015",v:1.18},{x:"2016",v:1.26},{x:"2017",v:1.42},{x:"2018",v:1.83},{x:"2019",v:2.00},{x:"2020",v:2.1},{x:"2021",v:2.0},{x:"2022",v:1.8},{x:"2023",v:1.7},{x:"2024",v:1.79},{x:"2025",v:1.89} ],
            note:{ en:"Highlighted: the low of 2014, the peak of 2020 and the latest year. The Agency for Cultural Affairs estimates that about 2.2 tonnes a year are needed for the repair of protected buildings alone.", ja:"強調した年：二〇一四年の底、二〇二〇年の山、最新の年。文化庁は、保護された建造物の修理だけで年に約二・二トンが要ると見積もっている。", zh:"標示年份：2014 年的低點、2020 年的高點與最新年份。文化廳估計，光是受保護建築的修繕每年就需要約 2.2 公噸。" } }); } },
        { t:"p",
          text:{
            en:"The turning point was a policy. On 24 February 2015 — still fiscal 2014 — the Agency for Cultural Affairs notified prefectural boards of education that the repair of National Treasure and Important Cultural Property buildings with state subsidy should in principle use domestic urushi: for the middle and top coats at once, and for the undercoats as well by fiscal 2018. The agency estimated the need at about 2.2 tonnes a year. Production began to rise in 2015, reached about 2 tonnes in 2019 and 2.1 tonnes in 2020, and has since stayed between about 1.7 and 2 tonnes, held back partly by weather: heavy rain cut the 2022 harvest by 13.2 per cent, and heat and rain cut 2023's by a further 6.5 per cent. Growing the supply is slow. A lacquer tree needs fifteen to twenty years to reach tapping size; tapping runs from mid-June to October, with the best sap in late July and August; and one tree yields only about 180–200 grams a season. Planting has accelerated — 34,000 lacquer-tree seedlings were planted in 2022, against 18,000 the year before — but the trees planted then will not be tapped before the late 2030s.",
            ja:"転機は一つの方針だった。二〇一五年二月二十四日——年度ではまだ二〇一四年度——、文化庁は都道府県の教育委員会に、国庫補助による国宝・重要文化財の建造物の修理には原則として国産漆を使うよう通知した。中塗りと上塗りはただちに、下地も二〇一八年度をめどに対象とするというものである。文化庁は必要な量を年に約二・二トンと見積もった。生産は二〇一五年から増えはじめ、二〇一九年に約二トン、二〇二〇年に二・一トンに達し、その後は約一・七〜二トンのあいだにとどまっている。天候にも左右され、大雨は二〇二二年の生産を13.2パーセント減らし、高温と雨は二〇二三年の生産をさらに6.5パーセント減らした。供給を増やすには時間がかかる。漆の木は掻ける太さになるまで十五〜二十年かかり、漆掻きは六月中旬から十月まで、最もよい漆がとれるのは七月下旬から八月であり、一本の木からひと夏にとれるのは約百八十〜二百グラムにすぎない。植栽は増えており——二〇二二年には前年の一万八千本に対し三万四千本の苗が植えられた——、それでもそのときの木が掻けるようになるのは二〇三〇年代の後半である。",
            zh:"轉捩點來自一項政策。2015 年 2 月 24 日——會計年度上仍屬 2014 年度——文化廳通知各都道府縣教育委員會：以國庫補助修繕國寶及重要文化財建築時，原則上應使用國產漆；中塗與上塗立即適用，底漆則以 2018 年度為目標納入。文化廳估計所需數量約為每年 2.2 公噸。產量自 2015 年開始回升，2019 年達約 2 公噸，2020 年達 2.1 公噸，此後維持在約 1.7 至 2 公噸之間，部分受天候所限：豪雨使 2022 年產量減少 13.2%，高溫與降雨又使 2023 年再減 6.5%。增加供應是緩慢的事。漆樹要長十五到二十年才達可割漆的粗細；割漆期從六月中旬到十月，最好的漆液出現在七月下旬至八月；而一棵樹一季只能產約 180–200 公克。種植已經加速——2022 年種下 34,000 株漆樹苗，前一年為 18,000 株——但當時種下的樹，要到 2030 年代後期才能割漆。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Annual Report on Forest and Forestry in Japan (FY2017–FY2025 editions); Ministry of Agriculture, Forestry and Fisheries, “The world of urushi” (2022) and Special Forest Products Production Statistics; Agency for Cultural Affairs notice 26-chōzai 510 (24 February 2015); Japan Special Forest Products Promotion Association (2020); Iwate prefecture; Ninohe city.",
            ja:"出典：林野庁 森林・林業白書（平成二十九年度〜令和七年度版、すなわち二〇一七〜二〇二五年度版）、農林水産省「漆」の世界（二〇二二年）・特用林産物生産統計調査、文化庁 二六庁財第五一〇号（二〇一五年二月二十四日）、日本特用林産振興会（二〇二〇年）、岩手県、二戸市。",
            zh:"資料來源：林野廳《森林・林業白皮書》（2017–2025 年度版）；日本農林水產省〈漆的世界〉（2022 年）與特用林產物生產統計調查；文化廳第 26 廳財 510 號通知（2015 年 2 月 24 日）；日本特用林產振興會（2020 年）；岩手縣；二戶市。" } }
      ] },
    { t:"section",
      id:"oils",
      title:{ en:"Oils and waxes", ja:"油と蝋", zh:"油與蠟" },
      jp:"乾性油",
      body:[
        { t:"p",
          text:{
            en:"An oil finish works by chemistry, not by evaporation. Certain plant oils are rich in unsaturated fatty acids whose double bonds react with oxygen from the air and link up into a soft, tough polymer inside the surface cells of the wood. The tendency to do this is measured by the iodine value: oils above about 130 are classed as drying oils, 100–130 as semi-drying, and below 100 as non-drying. The distinction matters in the kitchen as much as the workshop. Olive oil and most cooking oils never harden; rubbed into a board or a spoon they stay slightly sticky and can turn rancid, whereas a drying oil cures to a dry, water-resistant surface in a day or two.",
            ja:"油の仕上げは、蒸発ではなく化学ではたらく。ある種の植物油は不飽和脂肪酸に富み、その二重結合が空気中の酸素と反応して、木の表面の細胞のなかで柔らかく粘りのある高分子につながる。そのなりやすさはヨウ素価で測られる。およそ百三十以上は乾性油、百〜百三十は半乾性油、百未満は不乾性油に分けられる。この区別は工房と同じくらい台所でも大事である。オリーブ油やたいていの食用油はけっして固まらない。まな板やさじにすりこむと少しべたついたままで、酸敗することもある。これに対して乾性油は、一日か二日で乾いた、水に強い面に固まる。",
            zh:"油性塗裝靠的是化學反應，而不是蒸發。某些植物油富含不飽和脂肪酸，其雙鍵會與空氣中的氧反應，在木材表層細胞內連結成柔軟而強韌的高分子。這種傾向以碘價衡量：碘價約 130 以上屬乾性油，100 到 130 屬半乾性油，低於 100 則為不乾性油。這個區別在廚房和工坊一樣重要。橄欖油與多數食用油永遠不會硬化；擦在砧板或湯匙上會一直微黏，還可能酸敗；乾性油則會在一兩天內固化成乾爽、耐水的表面。" } },
        { t:"table",
          caption:{
            en:"Drying oils used on wood (iodine values from a Japanese supplier's technical notes)",
            ja:"木に使う乾性油（ヨウ素価は国内の油の業者の技術資料による）",
            zh:"用於木材的乾性油（碘價依日本油品業者技術資料）" },
          cols:[
            { en:"Oil", ja:"油", zh:"油" },
            { en:"Source", ja:"原料", zh:"原料" },
            { en:"Iodine value", ja:"ヨウ素価", zh:"碘價" },
            { en:"Character", ja:"特徴", zh:"特性" }
          ],
          numCols:[2],
          rows:[
            [
              { en:"Perilla (egoma)", ja:"荏油（エゴマ油）", zh:"荏油（紫蘇籽油）" },
              { en:"Seeds of Perilla frutescens", ja:"エゴマの種子", zh:"荏（白蘇）的種子" },
              "185–205",
              {
                en:"Fastest-drying of the common oils; the traditional Japanese wood and paper oil",
                ja:"よく使われる油のなかで最も早く乾く。日本の伝統的な木と紙の油",
                zh:"常見油品中乾得最快；日本傳統的木材與紙用油" }
            ],
            [
              { en:"Linseed", ja:"亜麻仁油", zh:"亞麻仁油" },
              { en:"Seeds of flax", ja:"亜麻の種子", zh:"亞麻的種子" },
              "170–195",
              {
                en:"The classic Western furniture oil; heat-treated grades dry faster",
                ja:"西洋の家具の定番の油。加熱処理したものは乾きが早い",
                zh:"西方家具的經典用油；經加熱處理者乾得較快" }
            ],
            [
              { en:"Tung", ja:"桐油", zh:"桐油" },
              { en:"Seeds of the tung tree", ja:"アブラギリ類の種子", zh:"油桐的種子" },
              "160–173",
              {
                en:"Forms a notably strong, water-resistant film; used outdoors",
                ja:"とくに強く水に強い膜をつくる。屋外に使われる",
                zh:"形成特別強韌、耐水的膜；用於戶外" }
            ],
            [
              { en:"Safflower", ja:"紅花油", zh:"紅花籽油" },
              { en:"Seeds of safflower", ja:"ベニバナの種子", zh:"紅花的種子" },
              "140–160",
              { en:"Pale; food-grade versions used on utensils", ja:"色が淡い。食品用のものが食器に使われる", zh:"色淡；食品級者用於餐具" }
            ],
            [
              { en:"Walnut", ja:"くるみ油", zh:"核桃油" },
              { en:"Walnut kernels", ja:"クルミの実", zh:"核桃仁" },
              "123–166",
              {
                en:"Slow and soft; food-grade, favoured for spoons and boards",
                ja:"乾きは遅く柔らかい。食品用で、さじやまな板に好まれる",
                zh:"乾得慢、質地軟；食品級，常用於湯匙與砧板" }
            ]
          ] },
        { t:"p",
          text:{
            en:"Perilla is Gifu's own oil. Known in Hida as <em>aburae</em>, “oil-e”, it is still grown there and ground into the sauce for <em>gohei-mochi</em>, the grilled rice cakes sold at roadside stops across the region. It was also, for centuries, a waterproofing oil. According to the Japan Oilseed Processors Association, the umbrella makers of Gifu used perilla, linseed and tung oils, warmed and stroked onto the paper canopies with a cloth — too much, and the folded umbrella stuck shut — and the industry could grow in Gifu partly because perilla had been cultivated in northern Hida since medieval times. By the 1920s demand had outrun local supply, and seed was brought in from Manchuria, Korea and Hokkaido. The umbrellas themselves are described on <a href=\"paper.html\">Paper, Lanterns & Umbrellas</a>. On furniture, perilla and linseed are the basis of most commercial “oil finishes”, which are usually blends with added driers or resins; Hida Sangyō, for example, offers its chairs and tables in either an oil finish or polyurethane.",
            ja:"エゴマは岐阜の油である。飛騨では「あぶらえ」と呼ばれ、いまも栽培され、各地の道の駅で売られる焼いた五平餅のたれにすりこまれる。それは何百年も、防水の油でもあった。日本植物油協会によれば、岐阜の傘屋はエゴマ油、アマニ油、桐油を使い、温めた油を布にふくませて紙の傘になでるように引いた——多すぎれば、たたんだ傘がくっついて開かなくなる——。そして岐阜で傘づくりが伸びえた理由の一つは、飛騨北部で中世からエゴマが栽培されていたことだった。一九二〇年代には需要が地元の供給を上まわり、種は満州、朝鮮、北海道から取り寄せられた。傘そのものは<a href=\"paper.html\">和紙・提灯・和傘</a>で紹介している。家具では、エゴマ油とアマニ油が市販の「オイル仕上げ」の多くの土台であり、それらはふつう乾燥剤や樹脂を加えた調合品である。たとえば飛騨産業は、椅子や食卓をオイル仕上げとウレタン塗装のどちらでも用意している。",
            zh:"荏是岐阜自己的油。飛驒稱之為「あぶらえ」（油荏），至今仍在當地栽種，並研磨成五平餅的醬料——這種烤米糕在當地許多公路休息站都買得到。數百年來它也是防水用油。據日本植物油協會的說明，岐阜的製傘匠人使用荏油、亞麻仁油與桐油，把加溫的油沾在布上，輕撫般地抹在紙傘面——抹得太多，收起的傘就會黏住打不開——而製傘業之所以能在岐阜興盛，原因之一是飛驒北部自中世紀起就栽種荏。到了 1920 年代，需求超過在地供應，種子改從滿洲、朝鮮與北海道輸入。和傘本身見<a href=\"paper.html\">和紙、燈籠與和傘</a>。在家具上，荏油與亞麻仁油是多數市售「油性塗裝」的基礎，通常會再調入催乾劑或樹脂；例如飛驒產業的椅子與餐桌，便提供油性塗裝與聚氨酯塗裝兩種選擇。" } },
        { t:"h3", text:{ en:"Waxes", ja:"蝋", zh:"蠟" }, jp:"蜜蝋・イボタ蝋・木蝋" },
        { t:"defs",
          items:[
            { term:{ en:"Beeswax", ja:"蜜蝋", zh:"蜂蠟" },
              jp:"みつろう",
              def:{
                en:"Soft and warm to the touch; rubbed over an oil finish to add a little water resistance and a soft sheen. It wears off and needs renewing, which is why makers suggest waxing before the rainy season and before winter.",
                ja:"柔らかく、さわると温かい。オイル仕上げの上にすりこみ、わずかな耐水性と柔らかな艶を加える。すり減って塗りなおしが要るので、つくり手は梅雨の前と冬の前に塗るよう勧める。",
                zh:"質軟、觸感溫潤；擦在油性塗裝上，可增加些許耐水性與柔和光澤。會逐漸磨耗而需更新，因此工匠建議在梅雨季前與冬季前上蠟。" } },
            { term:{ en:"Ibota wax", ja:"イボタ蝋", zh:"蟲白蠟" },
              jp:"いぼたろう",
              def:{
                en:"A hard white wax secreted by the scale insect <em>Ericerus pela</em> on privet, harvested in China and Japan. It has long been used to polish wood and to make drawers and sliding doors run smoothly.",
                ja:"カイガラムシの一種イボタロウムシがイボタノキに分泌する、硬く白い蝋。中国と日本でとられ、古くから木を磨き、引出しや引き戸の滑りをよくするのに使われてきた。",
                zh:"介殼蟲白蠟蚧（Ericerus pela）分泌在女貞屬樹木上的堅硬白蠟，產於中國與日本。長久以來用於打磨木材，並使抽屜與拉門滑順。" } },
            { term:{ en:"Vegetable wax", ja:"木蝋", zh:"木蠟" },
              jp:"もくろう",
              def:{
                en:"Pressed from the berries of the wax tree, <em>Toxicodendron succedaneum</em>, a relative of the lacquer tree; best known as the material of traditional Japanese candles, it is also used in some wood waxes.",
                ja:"漆の木の仲間であるハゼノキの実からしぼる蝋。和ろうそくの材料として最もよく知られ、一部の木工用ワックスにも使われる。",
                zh:"由與漆樹同屬的野漆（櫨樹，Toxicodendron succedaneum）果實壓榨而得；最為人知的用途是日本傳統蠟燭，也用於部分木器蠟。" } }
          ] }
      ] },
    { t:"section",
      id:"surfaces",
      title:{ en:"Tannin, fire and the brush", ja:"柿渋・火・浮造り", zh:"柿澀、火與刷紋" },
      jp:"伝統の表面",
      body:[
        { t:"p",
          text:{
            en:"Some of Japan's most characteristic wood surfaces are made without oil or lacquer at all. Three of them are especially suited to solid, unglued, locally grown sugi and hinoki.",
            ja:"日本の最も特徴的な木の表面のいくつかは、油も漆も使わずにつくられる。そのうち三つは、地元で育ったスギやヒノキを、接着せずに無垢のまま使うのにとりわけ向いている。",
            zh:"日本幾種最具特色的木材表面，完全不用油或漆。其中三種特別適合在地生長、不經膠合、直接以實木使用的柳杉與扁柏。" } },
        { t:"compare",
          cols:3,
          items:[
            { title:{ en:"Persimmon tannin", ja:"柿渋", zh:"柿澀" },
              jp:"かきしぶ",
              text:{
                en:"Juice of unripe astringent persimmons, crushed, fermented for about two days, pressed and then aged for years. Rich in persimmon tannin, it has been recorded since the tenth century and was brushed onto fans, umbrellas, paper garments, fishing nets and wood, and used to clear sake. On wood it gives a brown that deepens in light. The traditional product smells strongly of acetic and butyric acids; odourless versions were developed in the late twentieth century.",
                ja:"渋柿の未熟な実をつぶし、二日ほど発酵させてしぼり、何年も寝かせた液。柿タンニンに富み、十世紀から記録があり、うちわ、傘、紙衣、漁網、木に塗られ、酒の澄ましにも使われた。木に塗ると茶色になり、光で深まる。昔ながらの柿渋は酢酸や酪酸の強いにおいがあり、二十世紀後半に無臭のものが開発された。",
                zh:"將未熟的澀柿搗碎、發酵約兩天、壓榨後再陳放數年而成的汁液。富含柿單寧，十世紀起即有記載，被刷在團扇、紙傘、紙衣、漁網與木材上，也用於澄清清酒。塗在木材上呈褐色，照光後會加深。傳統柿澀帶有醋酸與丁酸的強烈氣味；二十世紀後期已開發出無臭產品。" } },
            { title:{ en:"Charred cedar", ja:"焼杉", zh:"燒杉" },
              jp:"やきすぎ",
              text:{
                en:"Sugi boards charred to a layer of carbon that resists rot, insects and weather. In the traditional method three boards are roped into a triangular flue and a fire is lit inside; hand-charred boards are said to last sixty to seventy years, while burner-charred boards, charred less deeply, shed their surface sooner. It is a tradition of western Japan — the Japanese encyclopedia notes it was used west of Shiga, for reasons that are unclear — and is now known abroad as <em>shou sugi ban</em>.",
                ja:"スギの板を焼いて炭の層をつくり、腐れ、虫、風雨に強くしたもの。伝統的な方法では、三枚の板を縄で三角の筒に組み、なかで火を焚く。手で焼いた板は六十〜七十年もつと言われ、バーナーで浅く焼いた板は表面が早くはがれる。西日本の伝統で——事典によれば滋賀より西で使われ、その理由ははっきりしない——、いまは海外でも「shou sugi ban」の名で知られる。",
                zh:"將柳杉板燒出一層碳化層，以抵抗腐朽、蟲害與風雨。傳統做法是把三塊板以繩綁成三角形煙道，在內部生火；據說手工燒製的板材可用六、七十年，而以噴槍燒得較淺的板材，表面較早剝落。這是西日本的傳統——日文百科指出其用於滋賀以西，原因不明——如今在海外以「shou sugi ban」之名廣為人知。" } },
            { title:{ en:"Brushed grain", ja:"浮造り", zh:"浮造" },
              jp:"うづくり",
              text:{
                en:"The surface of sugi or pine is rubbed with a stiff brush until the soft earlywood wears away and the hard latewood of each growth ring stands up in ridges. The result is slip-resistant, reflects less glare and feels pleasant underfoot, which makes it popular for floors; the soft wood still scratches. A related texture, <em>naguri</em>, is cut with an adze into shallow facets.",
                ja:"スギやマツの面を硬いブラシでこすり、柔らかい早材をすり減らして、年輪ごとの硬い晩材を畝のように浮き立たせる。滑りにくく、照り返しが少なく、足ざわりがよいので床に好まれるが、柔らかい木なので傷はつく。似た肌あいの名栗は、ちょうなで浅い面を刻んだものである。",
                zh:"以硬刷擦磨柳杉或松木表面，直到柔軟的早材被磨去，每道年輪中堅硬的晚材像田埂般凸起。成品防滑、反光少、腳感舒適，因此常用於地板；但木材仍軟，依然會刮傷。相近的質感「名栗」，則是以手斧削出淺淺的刻面。" } }
          ] },
        { t:"p",
          text:{
            en:"These surfaces share a logic. Each makes the wood more durable or more pleasant without sealing it in plastic, so that the timber still breathes, can be renewed by the same simple means, and can eventually be burned or composted. That logic appeals to builders who work with local timber and prefer to avoid chemical coatings; see <a href=\"home.html\">Wood in the Home</a>.",
            ja:"これらの表面には共通の筋道がある。どれも木を樹脂で封じこめずに、より丈夫に、あるいはより心地よくする。だから木はなお呼吸し、同じ簡単な方法で新しくでき、いずれは燃やしたり土に返したりできる。地元の木を使い、化学的な塗料を避けたい建て手がこの筋道に引かれるのはそのためである。<a href=\"home.html\">住まいと木</a>を参照。",
            zh:"這些表面有共同的邏輯：它們都讓木材更耐用或更宜人，卻不以樹脂把它封起來，因此木材仍能「呼吸」，能用同樣簡單的方法翻新，最終也能燃燒或回歸土壤。這樣的邏輯，正吸引著使用在地木材、希望避免化學塗料的建造者；見<a href=\"home.html\">居家與木</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Yamakei Sangyō, technical notes on drying oils; Japan Oilseed Processors Association, oils of the wagasa; Hida Egoma Honpo; Hida Sangyō, woods and finishes; Japanese Wikipedia, “Kakishibu”, “Yakisugi”, “Ibota wax”; WOODONE Magazine, uzukuri.",
            ja:"出典：山桂産業 乾性油の解説、日本植物油協会 和傘の植物油、飛騨えごま本舗、飛騨産業 材種・塗色、ウィキペディア日本語版「柿渋」「焼杉」「イボタ蝋」、WOODONEマガジン「浮造り」。",
            zh:"資料來源：山桂產業乾性油說明；日本植物油協會〈和傘的植物油〉；飛驒荏胡麻本舖；飛驒產業木種與塗色說明；日文維基百科「柿渋」「焼杉」「イボタ蝋」；WOODONE Magazine〈浮造〉。" } }
      ] },
    { t:"section",
      id:"modern",
      title:{ en:"Factory finishes", ja:"工場の塗装", zh:"工廠塗裝" },
      jp:"現代の塗料",
      body:[
        { t:"p",
          text:{
            en:"A word on names first. English uses “lacquer” for two quite different things: urushi, the tree sap, and the quick-drying nitrocellulose coatings sprayed on furniture and guitars. Japanese keeps them apart — <em>urushi</em> for the one, <em>rakkā</em> for the other — and furniture labels in Japan always say which. With that settled, five modern finishes account for nearly everything a buyer meets in a showroom.",
            ja:"まず名前について一言。英語は「lacquer」という語を、まったく違う二つのものに使う。木の樹液である漆と、家具やギターに吹きつける速乾のニトロセルロース塗料である。日本語はこれを分け、前者を漆、後者をラッカーと呼び、日本の家具の表示はつねにどちらかを明記する。そのうえで、ショールームで買い手が出会うもののほとんどは、五つの現代の仕上げで説明がつく。",
            zh:"先說名稱。英文以「lacquer」一詞指稱兩種截然不同的東西：樹液「漆」，以及噴塗在家具與吉他上的速乾硝基塗料。日文則把兩者分開——前者稱「漆」，後者稱「ラッカー」——日本的家具標示也一定會寫明是哪一種。釐清這點之後，買家在展示間遇到的塗裝，幾乎都可以歸入以下五種現代塗裝。" } },
        { t:"defs",
          items:[
            { term:{ en:"Shellac", ja:"シェラック", zh:"蟲膠" },
              jp:"セラック",
              def:{
                en:"A resin secreted by the lac insect, <em>Kerria lacca</em>, on trees in India and Thailand, dissolved in alcohol. Applied in many thin coats with a pad — the “French polish” of European cabinetmaking — it gives unmatched depth, but water, heat and alcohol mark it. It is used today mainly in restoration and on some instruments.",
                ja:"インドやタイの木にラックカイガラムシが分泌する樹脂を、アルコールに溶かしたもの。タンポで薄く何度も塗り重ねる——ヨーロッパの家具づくりの「フレンチポリッシュ」である——と比類のない深みが出るが、水、熱、アルコールで跡がつく。いまはおもに修復と一部の楽器に使われる。",
                zh:"紫膠蟲（Kerria lacca）在印度與泰國的樹上分泌的樹脂，溶於酒精而成。以布團薄塗多層——即歐洲細木工的「法式拋光」——可呈現無與倫比的深度，但會被水、熱與酒精留下痕跡。如今主要用於修復與部分樂器。" } },
            { term:{ en:"Nitrocellulose lacquer", ja:"ラッカー", zh:"硝基漆" },
              jp:"ラッカー",
              def:{
                en:"Cellulose nitrate dissolved in solvents, which dries by evaporation within minutes and can be sprayed in thin coats. For much of the twentieth century it was the standard factory finish for furniture and remains the classic finish for fine guitars (see <a href=\"making.html\">How a Guitar Is Made</a>). It is thin and keeps the wood's feel, but it is vulnerable to water and heat, gives off solvent vapour, and is now little used on furniture.",
                ja:"硝酸セルロースを溶剤に溶かしたもので、蒸発によって数分で乾き、薄く吹きつけられる。二十世紀の大半を通じて家具の標準的な工場塗装であり、いまも上質なギターの定番の塗装である（<a href=\"making.html\">ギターができるまで</a>を参照）。薄く木の感触を残すが、水と熱に弱く、溶剤の蒸気を出し、いまの家具にはあまり使われない。",
                zh:"將硝化纖維素溶於溶劑而成，靠蒸發在數分鐘內乾燥，可薄薄噴塗。在二十世紀大部分時間裡，它是家具的標準工廠塗裝，至今仍是高級吉他的經典塗裝（見<a href=\"making.html\">一把吉他的誕生</a>）。塗膜薄、保留木材手感，但怕水怕熱、會釋出溶劑蒸氣，如今已少用於家具。" } },
            { term:{ en:"Polyurethane", ja:"ウレタン塗装", zh:"聚氨酯塗裝" },
              jp:"ポリウレタン",
              def:{
                en:"A two-part resin that cures into a thick, well-bonded film resistant to wear, water and stains. It is the everyday finish of Japanese factory furniture, from glossy to near-matt; Hida Sangyō offers most of its range in either polyurethane or oil, and adds a non-slip coating to most chair seats. Its drawbacks are that it hides some of the wood's texture and must be repaired in a workshop.",
                ja:"二液を混ぜて硬化させる樹脂で、摩耗、水、しみに強い、よく密着した厚い膜になる。日本の工場製の家具のふだんの塗装で、艶ありから艶消しに近いものまである。飛騨産業は多くの製品をウレタンかオイルのどちらかで用意し、ほとんどの椅子の座面には滑りどめの塗装を加える。短所は、木の肌あいをいくらか隠すことと、直すには工房がいることである。",
                zh:"雙液型樹脂，硬化後形成厚實、附著良好的塗膜，耐磨、耐水、抗污。它是日本工廠家具的日常塗裝，從亮面到近乎霧面都有；飛驒產業多數產品可選聚氨酯或油性塗裝，並在大部分椅面加上防滑塗層。缺點是會遮掉部分木材質感，而且修復必須在工坊進行。" } },
            { term:{ en:"UV-cured coating", ja:"UV塗装", zh:"UV 塗裝" },
              jp:"紫外線硬化",
              def:{
                en:"Liquid resins containing a photoinitiator, which harden in moments when passed under ultraviolet lamps. Because they cure so fast they can be built up thick and very hard, with excellent resistance to water, stains and heat, and they release little or no solvent. They need an industrial line, suit flat parts such as flooring and table tops best, and are the hardest of all finishes to repair.",
                ja:"光開始剤を含む液状の樹脂で、紫外線ランプの下を通すと一瞬で硬化する。硬化がきわめて速いので厚く硬く塗り重ねられ、水、しみ、熱にとても強く、溶剤をほとんど、あるいはまったく出さない。工場の設備が必要で、床材や天板のような平らな部材に最も向き、あらゆる仕上げのなかで最も直しにくい。",
                zh:"含有光起始劑的液態樹脂，通過紫外線燈下便瞬間硬化。由於固化極快，可以塗得又厚又硬，耐水、抗污、耐熱俱佳，且幾乎不釋出溶劑。需要工業化生產線，最適合地板與桌面等平面部件，也是所有塗裝中最難修復的。" } },
            { term:{ en:"Water-based coatings", ja:"水性塗料", zh:"水性塗料" },
              jp:"水性",
              def:{
                en:"Acrylic or urethane resins dispersed in water rather than organic solvent, with far less odour and solvent vapour. The Japan Paint Manufacturers Association recommends them for interiors, but notes that water-based does not by itself mean free of formaldehyde; the emission class must still be checked.",
                ja:"アクリルやウレタンの樹脂を、有機溶剤ではなく水に分散させたもので、においや溶剤の蒸気がずっと少ない。日本塗料工業会は室内での使用を勧めているが、水性だからといってそれだけでホルムアルデヒドと無縁とは限らず、放散等級は確かめるべきだとしている。",
                zh:"將壓克力或聚氨酯樹脂分散於水而非有機溶劑中，氣味與溶劑蒸氣少得多。日本塗料工業會建議室內優先使用，但也指出「水性」本身不等於不含甲醛，仍須確認其甲醛逸散等級。" } }
          ] }
      ] },
    { t:"section",
      id:"safety",
      title:{ en:"Formaldehyde and food", ja:"ホルムアルデヒドと食品", zh:"甲醛與食品" },
      jp:"F☆☆☆☆・食品衛生法",
      body:[
        { t:"p",
          text:{
            en:"Two sets of rules govern what goes on wood in Japan. The first concerns indoor air. After a wave of “sick house” illness in the 1990s, a revision of the Building Standards Act that took effect on 1 July 2003 classified interior building materials — boards, adhesives and paints — by how much formaldehyde they give off. The top class, F☆☆☆☆, emits no more than 0.005 mg per square metre per hour and may be used without limit; F☆☆☆ (up to 0.02 mg) and F☆☆ (up to 0.12 mg) may be used only over restricted areas; unclassified materials may not be used for interior finishing at all. Boards are graded under JIS and JAS; paints either under JIS or under a self-registration scheme run by the Japan Paint Manufacturers Association since March 2003. The building law covers what is built in, not movable furniture, so for a table or chair the class is the maker's choice — a choice the Hida furniture trademark makes compulsory, and which Hida Sangyō applies to both its oil and its polyurethane finishes (see <a href=\"engineered.html\">Engineered Wood</a>).",
            ja:"日本で木に施されるものを律する決まりは二組ある。一つは室内の空気にかかわる。一九九〇年代の「シックハウス」の多発ののち、二〇〇三年七月一日に施行された建築基準法の改正は、内装の建材——ボード、接着剤、塗料——をホルムアルデヒドの放散量で区分した。最上位のF☆☆☆☆は放散速度が一平方メートル一時間あたり0.005ミリグラム以下で、使用面積に制限がない。F☆☆☆（0.02ミリグラムまで）とF☆☆（0.12ミリグラムまで）は面積が制限され、区分のない材料は内装の仕上げに使えない。ボードはJISとJASで、塗料はJISか、二〇〇三年三月から日本塗料工業会が運営する自主管理の登録で等級づけられる。建築の法律が対象とするのは建物に組みこまれるものであり、動かせる家具ではない。だから食卓や椅子の等級はメーカーの選択であり、飛騨の家具の商標はそれを義務にし、飛騨産業はオイル仕上げにもウレタン塗装にもそれを当てはめている（<a href=\"engineered.html\">エンジニアードウッド</a>を参照）。",
            zh:"在日本，規範木材表面處理的規則有兩套。第一套關乎室內空氣。1990 年代「病態住宅」問題頻傳之後，2003 年 7 月 1 日施行的《建築基準法》修正，依甲醛逸散量把室內建材——板材、膠合劑與塗料——分級。最高等級 F☆☆☆☆ 的逸散速率每平方公尺每小時不超過 0.005 毫克，使用面積不受限制；F☆☆☆（至 0.02 毫克）與 F☆☆（至 0.12 毫克）僅能在限定面積內使用；未分級的材料則完全不得用於室內裝修。板材依 JIS 與 JAS 分級；塗料則依 JIS，或依日本塗料工業會自 2003 年 3 月起辦理的自主登錄制度分級。建築法規管的是固定於建築物中的材料，而非可移動的家具，因此桌椅的等級屬於廠商自己的選擇——飛驒家具商標則把它訂為義務，飛驒產業的油性與聚氨酯塗裝也都適用此等級（見<a href=\"engineered.html\">工程木材</a>）。" } },
        { t:"p",
          text:{
            en:"The second concerns food. Since 1 June 2020 the Food Sanitation Act has applied a positive-list system to food-contact utensils and containers made of synthetic resins, coating resins included: only substances on the list may be used, and the transition period ended on 31 May 2025. Natural materials such as urushi, plant oils and waxes lie outside the list, though all tableware remains subject to the Act's general hygiene rules. For the shopper the more useful rule is the Household Goods Quality Labelling Act, which requires lacquered tableware to state its coating and its base. Under the Consumer Affairs Agency's standard, the product name <em>shikki</em>, “lacquerware”, is reserved for pieces finished with urushi; the coating must be named in fixed terms such as urushi coating, cashew coating (a substitute made from cashew-nut-shell oil) or urethane coating, with any different undercoat in brackets; and the base must be given as natural wood, with the species, or as a named synthetic resin, with the percentage of wood powder if it is a wood-and-resin composite.",
            ja:"もう一つは食品にかかわる。二〇二〇年六月一日から、食品衛生法は合成樹脂製の食品用の器具・容器包装にポジティブリスト制度を適用しており、塗膜の樹脂も含まれる。リストにある物質しか使えず、経過措置は二〇二五年五月三十一日に終わった。漆、植物油、蝋のような天然の材料はリストの外にあるが、すべての食器は同法の一般的な衛生の決まりにしたがう。買い手にとってより役立つのは家庭用品品質表示法で、漆を塗った食器にはその塗装と素地を表示するよう求めている。消費者庁の規程では、「漆器」という品名は漆で仕上げたものに限られる。塗装は漆塗装、カシュー塗装（カシューナッツの殻の油からつくる代用品）、ウレタン塗装のような決まった用語で示し、下地の塗装が違えば括弧で添える。素地は天然木なら樹種を、合成樹脂なら樹脂の名を示し、木粉と樹脂をまぜたものなら木粉の割合も書く。",
            zh:"第二套關乎食品。自 2020 年 6 月 1 日起，日本《食品衛生法》對合成樹脂製的食品用器具與容器包裝（含塗膜樹脂）實施正面表列制度：只有列入清單的物質才能使用，過渡期已於 2025 年 5 月 31 日結束。漆、植物油與蠟等天然材料不在清單範圍內，但所有餐具仍須遵守該法的一般衛生規範。對消費者更實用的是《家庭用品品質表示法》，它要求塗漆餐具標示塗裝與胎體。依消費者廳的規程，「漆器」這個品名僅限以漆完成的器物；塗裝須以固定用語標示，如漆塗裝、腰果塗裝（以腰果殼油製成的代用品）、聚氨酯塗裝等，底漆若不同則以括號附註；胎體若為天然木須寫明樹種，若為合成樹脂須寫明樹脂名稱，若是木粉與樹脂的複合材，還須標示木粉比例。" } },
        { t:"note",
          label:{ en:"Urushi and allergy", ja:"漆とかぶれ", zh:"漆與過敏" },
          text:{
            en:"Uncured urushi causes rashes in most people, which is why lacquerers work with gloves and why tapping is skilled work. Fully cured lacquer is inert enough to have been eaten from in Japan for well over a thousand years, but a few highly sensitive people report reactions to brand-new pieces; if in doubt, let a new bowl air for some weeks before use.",
            ja:"固まる前の漆はたいていの人をかぶれさせる。塗師が手袋をして仕事をし、漆掻きが熟練の仕事であるのはそのためである。完全に固まった漆は、日本で千年をはるかに超えて器に使われてきたほど安定しているが、ごく敏感な人には、できたばかりの品で反応が出たという例もある。心配なら、新しい椀は使う前に数週間、風にあてておくとよい。",
            zh:"未硬化的漆會讓大多數人起疹子，所以漆師戴手套作業，割漆也是需要熟練的工作。完全硬化的漆相當穩定，在日本用作食器已遠超過一千年；不過，少數極敏感的人曾反映接觸全新漆器時出現反應。若有疑慮，新碗可先放在通風處數週再使用。" } }
      ] },
    { t:"section",
      id:"choosing",
      title:{ en:"Choosing a finish", ja:"仕上げを選ぶ", zh:"選擇塗裝" },
      jp:"選び方",
      body:[
        { t:"p",
          text:{
            en:"There is no best finish, only a best finish for a particular use and a particular owner. A family with small children and a dining table used for homework will be happier with polyurethane than with oil; a single owner who likes to maintain things may prefer the feel of oil and the ease of repairing it. The table summarises the usual advice of Gifu's makers.",
            ja:"最良の仕上げというものはない。ある使い方とある持ち主にとっての最良の仕上げがあるだけである。小さな子どもがいて、食卓で宿題もする家族なら、オイルよりウレタンのほうが満足できるだろう。手入れを楽しむ一人暮らしの人なら、オイルの手ざわりと直しやすさを好むかもしれない。表は岐阜のつくり手のふつうの助言をまとめたものである。",
            zh:"沒有所謂最好的塗裝，只有對特定用途與特定使用者最合適的塗裝。家有幼兒、餐桌還兼寫功課的家庭，選聚氨酯會比油性更安心；喜歡動手保養的獨居者，或許更偏愛油性塗裝的觸感與易修復性。下表整理了岐阜工匠常見的建議。" } },
        { t:"table",
          caption:{ en:"Which finish for which use (general guidance)", ja:"用途ごとの仕上げ（一般的な目安）", zh:"不同用途的塗裝選擇（一般建議）" },
          cols:[
            { en:"Use", ja:"用途", zh:"用途" },
            { en:"Usual choice", ja:"ふつうの選択", zh:"常見選擇" },
            { en:"Why", ja:"理由", zh:"理由" }
          ],
          rows:[
            [
              { en:"Family dining table", ja:"家族の食卓", zh:"家庭餐桌" },
              { en:"Polyurethane; or fuki-urushi", ja:"ウレタン、または拭き漆", zh:"聚氨酯；或擦漆" },
              {
                en:"Resists spills, heat and wear; urushi can be renewed",
                ja:"こぼれ、熱、摩耗に強い。漆は塗りなおせる",
                zh:"耐潑灑、耐熱、耐磨；漆可重新塗擦" }
            ],
            [
              { en:"Chair or cabinet for a lifetime", ja:"一生ものの椅子や棚", zh:"要用一輩子的椅子或櫃子" },
              { en:"Oil and wax", ja:"オイルと蝋", zh:"油與蠟" },
              { en:"Ages well and can be touched up at home", ja:"よく年を重ね、家で補修できる", zh:"歷久彌新，可在家修補" }
            ],
            [
              { en:"Soup bowls, trays", ja:"汁椀、盆", zh:"湯碗、托盤" },
              { en:"Urushi", ja:"漆", zh:"漆" },
              {
                en:"Heat- and water-resistant, repairable, pleasant to hold",
                ja:"熱と水に強く、直せて、手に心地よい",
                zh:"耐熱耐水、可修復、握感舒適" }
            ],
            [
              { en:"Cutting board, rice tub, masu", ja:"まな板、おひつ、枡", zh:"砧板、飯桶、木枡" },
              { en:"No finish", ja:"白木", zh:"不塗裝" },
              {
                en:"Washed and dried, bare wood is hygienic and can be planed",
                ja:"洗って乾かせば衛生的で、削りなおせる",
                zh:"清洗晾乾即衛生，還能刨新" }
            ],
            [
              { en:"Spoons, salad bowls", ja:"さじ、サラダボウル", zh:"湯匙、沙拉碗" },
              { en:"Food-grade drying oil", ja:"食品用の乾性油", zh:"食品級乾性油" },
              { en:"Easy to renew; avoid non-drying cooking oils", ja:"塗りなおしが簡単。不乾性の食用油は避ける", zh:"易於更新；避免不乾性的食用油" }
            ],
            [
              { en:"Floors", ja:"床", zh:"地板" },
              {
                en:"UV or urethane; oil or brushed grain for soft woods",
                ja:"UVかウレタン。柔らかい木ならオイルや浮造り",
                zh:"UV 或聚氨酯；軟木可用油或浮造" },
              { en:"Hard wear versus warmth and slip resistance", ja:"摩耗への強さか、ぬくもりと滑りにくさか", zh:"在耐磨與溫潤防滑之間取捨" }
            ],
            [
              { en:"Exterior cladding", ja:"外壁", zh:"外牆" },
              { en:"Charred cedar, persimmon tannin, or bare", ja:"焼杉、柿渋、または素地", zh:"燒杉、柿澀或原木" },
              { en:"No film to peel; weathers evenly", ja:"はがれる膜がなく、むらなく風化する", zh:"沒有會剝落的塗膜；風化均勻" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Okajima Mokuzai, comparison of urethane, UV, lacquer and oil finishes; Hida Sangyō, woods and finishes; Japan Paint Manufacturers Association, formaldehyde self-management; Okajima Mokuzai, F-star classes; Tokyo Metropolitan Bureau of Public Health and Consumer Affairs Agency, positive-list system; Consumer Affairs Agency, quality labelling standard for lacquered tableware.",
            ja:"出典：恩加島木材工業 ウレタン・UV・ラッカー・オイル塗装の違い、飛騨産業 材種・塗色、日本塗料工業会 ホルムアルデヒド自主管理、恩加島木材工業 F☆☆☆☆の基準、東京都保健医療局・消費者庁 ポジティブリスト制度、消費者庁 雑貨工業品品質表示規程（漆器）。",
            zh:"資料來源：恩加島木材工業〈聚氨酯、UV、硝基與油性塗裝的差異〉；飛驒產業木種與塗色說明；日本塗料工業會甲醛自主管理；恩加島木材工業 F☆☆☆☆ 等級說明；東京都保健醫療局與消費者廳正面表列制度說明；消費者廳雜貨工業品品質標示規程（漆器）。" } }
      ] },
    { t:"related",
      items:[
        { href:"shunkei.html",
          why:{ en:"Transparent lacquer over coloured wood.", ja:"色づけした木に透き漆。", zh:"染色木胎上的透明漆。" } },
        { href:"care.html", why:{ en:"Looking after each finish.", ja:"仕上げごとの手入れ。", zh:"各種塗裝的保養。" } },
        { href:"chemistry.html", why:{ en:"Oils, resins and scent in wood.", ja:"木の油、樹脂、香り。", zh:"木材中的油脂、樹脂與香氣。" } },
        { href:"engineered.html",
          why:{ en:"Glues, boards and formaldehyde.", ja:"接着剤、ボード、ホルムアルデヒド。", zh:"膠合劑、板材與甲醛。" } },
        { href:"guitarcare.html", why:{ en:"Finishes on instruments.", ja:"楽器の塗装。", zh:"樂器的塗裝。" } }
      ] }
  ] };

/* ---- -------------------------------------------- buying */
GIFU.pages["buying"] = { kicker:{ en:"Living with Wood · 03", ja:"木と暮らす · 03", zh:"與木共處 · 03" },
  title:{ en:"Buying Wooden Things", ja:"木の物を選ぶ", zh:"挑選木製品" },
  jp:"選ぶ",
  lede:{
    en:"A chair from a Takayama showroom, a pair of hinoki masu from Ōgaki, an old chest from an antique dealer: each carries a price, a label and a story, and not all three always agree. This page is a buyer's guide to wood in Japan — how to tell solid wood from veneer and board, what the compulsory labels do and do not say, which species hide behind which trade names, what the legality and regional marks mean, why handmade pieces cost what they do, where to buy in Gifu, and what to know before carrying wood home to Taiwan or anywhere else.",
    ja:"高山のショールームの椅子、大垣のヒノキの枡が一組、骨董店の古い箪笥。どれにも値段と表示と物語があるが、三つがいつも一致するとはかぎらない。この頁は、日本で木の物を買う人のための手引きである。無垢と突板とボードの見分け方、義務づけられた表示が語ることと語らないこと、どの樹種がどの商品名の陰にあるか、合法性や地域のしるしが意味するもの、手仕事の品がなぜその値段になるのか、岐阜のどこで買えるか、そして台湾やほかの国へ木の物を持ち帰る前に知っておくべきことを扱う。",
    zh:"高山展示間的一張椅子、大垣的一對扁柏木枡、古董店裡的一只舊衣櫃：每一件都有價格、標示與故事，三者卻未必總是一致。本頁是在日本購買木製品的指南——如何分辨實木、木皮貼面與板材，法定標示說了什麼、沒說什麼，哪些樹種藏在哪些商品名稱背後，合法性與產地標章代表什麼，手工製品為何是這個價錢，在岐阜哪裡買，以及把木製品帶回台灣或其他國家之前該知道的事。" },
  body:[
    { t:"section",
      id:"materials",
      title:{ en:"Solid, veneer or board?", ja:"無垢か、突板か、ボードか", zh:"實木、木皮還是板材？" },
      jp:"無垢・突板",
      body:[
        { t:"p",
          text:{
            en:"Almost every wooden-looking object in a Japanese shop belongs to one of four families. Solid wood — <em>muku</em> — is wood right through, whether a single wide board or, far more often today, several narrower boards edge-glued into a panel (<em>hagi-ita</em>); finger-jointed laminated timber, <em>shūseizai</em>, is solid in this sense too, though its short repeated pieces give it a busier look. Veneered panels carry a slice of real wood on a core of plywood, MDF or particleboard: the standard sliced veneer, <em>tsukiita</em>, is about 0.2 mm thick, thick veneers run to 0.4–0.8 mm, and a sawn lamella, <em>hikiita</em>, is 2–3 mm. Wood-based boards — MDF and particleboard — are fibres or chips bonded with resin, usually covered with a printed paper or plastic film that imitates grain. The fourth family is not wood at all: resin sheets and mouldings printed to look like it. None of these is dishonest in itself. A well-made veneered cabinet can be more stable, lighter and far more economical of rare timber than a solid one. The trouble starts when one is sold as another, or priced as another.",
            ja:"日本の店で木に見えるもののほとんどは、四つの系統のどれかに属する。無垢材は芯まで木であり、一枚の幅広い板のこともあるが、今日ではずっと多くの場合、幅の狭い板を何枚も幅はぎしたはぎ板である。フィンガージョイントでつないだ集成材も、この意味では無垢の仲間だが、短い材がくりかえすため見た目はにぎやかになる。突板の化粧板は、合板、MDF、パーティクルボードの芯に本物の木の薄片を貼ったものである。標準的な突板の厚さは約0.2ミリ、厚突きは0.4〜0.8ミリ、鋸で挽いた挽板は2〜3ミリある。木質ボード——MDFとパーティクルボード——は繊維や小片を樹脂で固めたもので、ふつうは木目を印刷した紙や樹脂のフィルムで覆われる。四つめの系統は、そもそも木ではない。木に見えるよう印刷した樹脂のシートや成形品である。どれもそれ自体が不誠実なわけではない。よくできた突板の収納家具は、無垢のものより安定し、軽く、希少な木材をはるかに節約できる。問題は、あるものが別のものとして売られるとき、あるいは別のものの値段で売られるときに始まる。",
            zh:"日本商店裡看起來像木頭的東西，幾乎都屬於四大類之一。實木（日語稱「無垢」）從表面到內部都是木材，可能是一整片寬板，但如今更常見的是把數片窄板側面膠合成一塊「拼板」；以指接方式接長再膠合的集成材，在這個意義上也算實木，只是短料反覆出現，看起來較為花俏。木皮貼面板是在合板、中密度纖維板（MDF）或粒片板的芯材上貼一層真正的木片：日本標準的刨切木皮（「突板」）約厚 0.2 公釐，厚木皮為 0.4–0.8 公釐，而鋸切的木片（「挽板」）則有 2–3 公釐。木質板材——MDF 與粒片板——是用樹脂把纖維或碎片黏合而成，表面通常再覆上印有木紋的紙或塑膠膜。第四類根本不是木頭：印成木紋模樣的樹脂片材或成型品。這些本身都不算欺騙。做工良好的木皮貼面櫃子，可以比實木的更穩定、更輕，也更節省珍貴的木材。問題出在把甲當成乙來賣，或以乙的價格出售。" } },
        { t:"p",
          text:{
            en:"Four checks take a minute in any showroom. First, follow the grain over an edge: on solid wood the figure of the top continues down the edge and shows as end grain at the ends; on veneer the edge is a separate strip, or the pattern stops abruptly at the corner. Second, look for repetition: large veneered panels and printed films often repeat the same knot or flame at intervals, and seams run in straight lines where leaves of veneer meet. Third, look where the maker did not expect you to — under the top, inside drawers, at the back panel and in any hole cut for cables — where the core may show as layered plywood, uniform brown fibreboard or coarse chips. Fourth, lift and tap: particleboard is heavy and sounds dull, while solid sugi or hinoki is surprisingly light. A good seller will simply tell you which parts are solid and which are not. The answer is often mixed: a chair frame may be solid beech or oak while its seat is moulded plywood, and a table may have a solid top on a veneered base.",
            ja:"どのショールームでも、一分でできる確かめ方が四つある。一つめに、木目を角ごしにたどる。無垢なら天板の木目が側面へそのまま続き、端では木口が見える。突板なら縁は別の細い材であるか、模様が角でぷつりと途切れる。二つめに、くりかえしを探す。大きな突板の面や印刷のフィルムは、同じ節や杢が一定の間隔で現れることが多く、突板どうしの継ぎ目がまっすぐな線になる。三つめに、つくり手が見られると思っていないところを見る。天板の裏、引出しの中、背板、配線用にあけた穴などで、芯が層になった合板、均一な茶色の繊維板、粗い小片として見えることがある。四つめに、持ち上げて叩く。パーティクルボードは重く鈍い音がし、無垢のスギやヒノキは驚くほど軽い。よい売り手は、どこが無垢でどこがそうでないかを率直に教えてくれる。答えはしばしば混合である。椅子の骨組みは無垢のブナやナラで座面は成形合板、食卓は無垢の天板に突板の脚まわり、ということもある。",
            zh:"在任何展示間，都有四個一分鐘就能完成的檢查。第一，順著木紋越過邊緣：實木的桌面紋理會延續到側邊，兩端則露出木材橫切面；木皮貼面的邊緣則是另外貼上的窄條，或紋理在轉角處突然中斷。第二，找重複：大面積的木皮板與印刷膜常每隔一段距離就出現同一個節或同一道火焰紋，木皮片與片相接處會形成筆直的接縫。第三，看製造者以為你不會看的地方——桌面底下、抽屜內側、背板，以及為電線開的孔——那裡的芯材可能露出層層的合板、均勻的褐色纖維板或粗粒碎片。第四，抬一抬、敲一敲：粒片板沉重且聲音悶，實木柳杉或扁柏則輕得令人意外。好的賣家會直接告訴你哪些部分是實木、哪些不是。答案常常是混合的：椅子骨架可能是實木山毛櫸或橡木，座面卻是成型合板；餐桌可能是實木桌面配上木皮貼面的底座。" } },
        { t:"figure",
          caption:{
            en:"Wood materials in furniture compared. This is a qualitative, editorial summary drawn from the published descriptions of furniture and veneer makers; real performance depends on thickness, glue, finish and workmanship. Three dots = strongest; for cost, three dots = typically the most expensive.",
            ja:"家具の木質材料の比較。家具と突板のつくり手が公表している説明をもとに編集部がまとめた定性的な要約であり、実際の性能は厚み、接着剤、仕上げ、仕事の質によって変わる。点三つがいちばん強い。価格は点三つがふつう最も高い。",
            zh:"家具木質材料比較。本圖為編輯部依據家具與木皮製造商公開說明所整理的定性摘要；實際表現取決於厚度、膠合劑、塗裝與做工。三點為最強；價格欄三點表示通常最昂貴。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"Solid, veneer and board", ja:"無垢・突板・ボード", zh:"實木・木皮・板材" }, labelW:250,
            cols:[ { en:"Stability", ja:"安定性", zh:"穩定性" }, { en:"Refinish", ja:"再塗装", zh:"重新塗裝" }, { en:"Repair", ja:"補修", zh:"補修" }, { en:"Lifespan", ja:"寿命", zh:"壽命" }, { en:"Wood feel", ja:"木の質感", zh:"木質感" }, { en:"Cost", ja:"価格", zh:"價格" } ],
            rows:[
              { n:{ en:"Solid wide board", ja:"無垢の一枚板", zh:"實木整片寬板" }, v:[1,3,3,3,3,3] },
              { n:{ en:"Edge-glued or laminated solid", ja:"はぎ板・集成材", zh:"實木拼板・集成材" }, v:[2,3,3,3,3,2] },
              { n:{ en:"Sawn lamella on plywood", ja:"挽板（合板の上）", zh:"鋸切木片貼合板" }, v:[3,2,2,2,3,2] },
              { n:{ en:"Sliced veneer on plywood or MDF", ja:"突板（合板・MDFの上）", zh:"刨切木皮貼合板或 MDF" }, v:[3,1,1,2,2,1] },
              { n:{ en:"Printed paper or film on board", ja:"プリント紙・フィルム化粧のボード", zh:"印刷紙或膜貼面板材" }, v:[2,0,0,1,0,0] },
              { n:{ en:"Resin moulding printed as wood", ja:"木目を印刷した樹脂成形品", zh:"印木紋的樹脂成型品" }, v:[3,0,0,1,0,0] }
            ] }); } },
        { t:"p",
          text:{
            en:"The figure explains a paradox that puzzles many buyers: the most “natural” option, a single wide board, is the least stable. A board 80 cm wide can change its width by several millimetres between a humid Japanese summer and a heated winter (see <a href=\"moisture.html\">Wood &amp; Water</a>), which is why makers edge-glue tops from narrower boards with alternating growth rings, and why they fix them with fittings that let them move. What solid wood buys is a second and third life: it can be scraped, sanded, re-oiled and repaired again and again, while a veneer only 0.2 mm thick cannot be sanded through and a printed film cannot be mended at all. Solid wood is the choice for things you intend to keep for decades and have repaired; good veneer is a sensible choice for large, flat, stable carcasses; printed board is a short-lived product whatever its price.",
            ja:"図は、多くの買い手がとまどう逆説を説明する。いちばん「自然」な選択である一枚板が、いちばん安定しないのである。幅八十センチの板は、日本の湿った夏と暖房の冬のあいだに幅が数ミリ変わりうる（<a href=\"moisture.html\">木と水分</a>を参照）。だからつくり手は、年輪の向きを交互にした幅の狭い板をはいで天板をつくり、動きを許す金具で留める。無垢が買わせてくれるのは、二度めと三度めの命である。削り、研ぎ、油を塗りなおし、何度でも直せる。一方、厚さ0.2ミリの突板は研ぎ抜けてしまい、印刷のフィルムはまったく直せない。何十年も使い、直しながら持ち続けるつもりの物なら無垢、大きく平らで安定した箱物ならよい突板は賢い選択であり、プリント化粧のボードは値段にかかわらず短命な品である。",
            zh:"這張圖說明了一個讓許多買家困惑的矛盾：最「天然」的選擇——整片寬板——恰恰最不穩定。一片 80 公分寬的板子，在日本潮濕的夏天與開暖氣的冬天之間，寬度可能變化好幾公釐（見<a href=\"moisture.html\">木與水分</a>），所以製作者會用年輪方向交錯的窄板拼成桌面，再以容許伸縮的五金固定。實木換來的是第二、第三次生命：它可以刮、磨、重新上油、一再修理；而只有 0.2 公釐厚的木皮一磨就穿，印刷膜更是完全無法修補。打算用上數十年、壞了就修的東西，選實木；大面積、平整、要求穩定的櫃體，好的木皮貼面是明智之選；印刷貼面板材則不論價格，都是短命的產品。" } }
      ] },
    { t:"section",
      id:"labels",
      title:{ en:"Reading the label", ja:"品質表示を読む", zh:"讀懂品質標示" },
      jp:"家庭用品品質表示法",
      body:[
        { t:"p",
          text:{
            en:"Furniture sold in Japan carries a small printed label required by the Household Goods Quality Labelling Act, a law of 1962 administered today by the Consumer Affairs Agency. For desks and tables the label must give the outer dimensions, the material of the top surface, the surface finish, any handling precautions, and the name and contact details of the company responsible; chests and chairs have similar lists. The useful part is that the words are fixed. A maker cannot invent a flattering term for the surface; it must choose from the agency's list, and each term has a definition. The limitation is just as important: the label describes the <em>surface</em> of one part, usually the top, and does not have to name the species.",
            ja:"日本で売られる家具には、家庭用品品質表示法の求める小さな表示がついている。一九六二年の法律で、いまは消費者庁が所管する。机とテーブルでは、外形寸法、甲板の表面材、表面加工、取扱い上の注意、そして責任をもつ事業者の名と連絡先を示さねばならず、たんすや椅子にも似た項目がある。役に立つのは、用語が決まっていることである。つくり手は表面について聞こえのよい言葉を勝手につくれず、消費者庁の一覧から選ばねばならず、それぞれの用語には定義がある。限界も同じくらい大事である。表示が語るのはある部分、たいていは天板の「表面」であり、樹種の名を書く義務はない。",
            zh:"在日本販售的家具都附有一張小標示，是依據《家庭用品品質表示法》規定的。這部 1962 年的法律，如今由消費者廳主管。書桌與餐桌的標示必須寫明外形尺寸、桌面的表面材料、表面加工、使用注意事項，以及負責業者的名稱與聯絡方式；衣櫃與椅子也有類似的項目。實用之處在於用語是固定的：製造商不能自創好聽的說法來形容表面，必須從消費者廳的清單中選用，每個用語都有定義。同樣重要的是其限制：標示描述的只是某一部分——通常是桌面——的「表面」，而且不必寫出樹種。" } },
        { t:"table",
          caption:{ en:"Surface-material terms on Japanese furniture labels", ja:"家具の品質表示にみる表面材の用語", zh:"日本家具標示中的表面材料用語" },
          cols:[
            { en:"Term on the label", ja:"表示の用語", zh:"標示用語" },
            { en:"What it means", ja:"意味", zh:"意思" },
            { en:"Worth asking", ja:"たずねるとよいこと", zh:"值得追問" }
          ],
          rows:[
            [
              "天然木",
              {
                en:"Natural wood; includes boards of natural wood assembled mosaic-fashion",
                ja:"天然の木。天然木の板をモザイク状に組み合わせて貼った板を含む",
                zh:"天然木材；包括以天然木板拼成馬賽克狀貼合的板" },
              {
                en:"Is it solid through? Which species? Is the base solid too?",
                ja:"芯まで無垢か。樹種は何か。脚まわりも無垢か",
                zh:"是否整塊實木？什麼樹種？底座也是實木嗎？" }
            ],
            [
              "天然木単板",
              { en:"A thin slice of natural wood (veneer)", ja:"天然木を薄くそいだ板（突板）", zh:"把天然木材削成的薄片（木皮）" },
              { en:"What is it glued to, and how thick is it?", ja:"何に貼ってあるか。厚みはどれほどか", zh:"貼在什麼上？有多厚？" }
            ],
            [
              "天然木化粧合板",
              { en:"Plywood faced with natural-wood veneer", ja:"天然木の突板を貼った合板", zh:"貼天然木皮的合板" },
              { en:"Can it be refinished if damaged?", ja:"傷んだら塗りなおせるか", zh:"受損後能否重新塗裝？" }
            ],
            [
              "天然木化粧繊維板 / MDF",
              { en:"Fibreboard (MDF) faced with natural-wood veneer", ja:"天然木の突板を貼った繊維板（MDF）", zh:"貼天然木皮的纖維板（MDF）" },
              { en:"How are edges sealed against moisture?", ja:"縁は湿気に対してどう処理されているか", zh:"邊緣如何防潮？" }
            ],
            [
              "プリント紙化粧合板",
              { en:"Plywood covered with paper printed with a wood pattern", ja:"木目などを印刷した紙を貼った合板", zh:"貼上印刷木紋紙的合板" },
              { en:"Expect a limited life; no refinishing", ja:"寿命は限られ、塗りなおしはできない", zh:"壽命有限，無法重新塗裝" }
            ],
            [
              "合成樹脂化粧… (樹脂名)",
              {
                en:"Board covered with a plastic film or sheet; the resin is named in brackets",
                ja:"樹脂のフィルムやシートを貼ったボード。括弧で樹脂名を示す",
                zh:"貼塑膠膜或片材的板材；括號內註明樹脂種類" },
              {
                en:"Which board is underneath: plywood, MDF or particleboard?",
                ja:"下は合板か、MDFか、パーティクルボードか",
                zh:"底下是合板、MDF 還是粒片板？" }
            ]
          ] },
        { t:"p",
          text:{
            en:"The finish has its own fixed vocabulary: polyester coating, urethane-resin coating, amino-alkyd coating, lacquer coating (meaning nitrocellulose), <em>urushi</em> coating, oil finish and wax finish (see <a href=\"finishes.html\">Finishes</a>). One term deserves a warning. <em>Yusei gōsei urushi</em>, literally “oil-based synthetic lacquer”, is simply an oil-based paint; despite the word <em>urushi</em> it has nothing to do with the sap of the lacquer tree, which is labelled <em>urushi toso</em> alone. For lacquered tableware the rules are stricter still, reserving the product name <em>shikki</em> for pieces finished with real urushi and requiring the base to be stated, as explained on the Finishes page. Finally, remember what the label cannot tell you: a top may be labelled natural wood and still be a mosaic of short pieces, and a “walnut” table may have a walnut top on legs of stained rubberwood. The catalogue, the maker's website or the salesperson must fill those gaps.",
            ja:"仕上げにも決まった語彙がある。ポリエステル塗装、ウレタン樹脂塗装、アミノアルキド樹脂塗装、ラッカー塗装（ニトロセルロースラッカーのこと）、漆塗装、オイル仕上げ、ワックス仕上げである（<a href=\"finishes.html\">塗装と仕上げ</a>を参照）。一つは注意を要する。「油性合成漆塗装」は油性の塗料を塗ったものにすぎず、「漆」の字があっても漆の木の樹液とは関係がない。本物の漆は「漆塗装」とだけ表示される。漆を塗った食器の決まりはさらに厳しく、「漆器」という品名を本物の漆で仕上げた品に限り、素地の表示も求める。これは塗装と仕上げの頁で説明した。最後に、表示が語れないことを覚えておきたい。天然木と表示された天板が短い材のモザイクであることもあり、「ウォールナット」の食卓が、ウォールナットの天板に着色したラバーウッドの脚ということもある。その隙間は、カタログ、メーカーのサイト、売り手が埋めねばならない。",
            zh:"表面加工也有固定的用語：聚酯塗裝、聚氨酯樹脂塗裝、胺基醇酸樹脂塗裝、「ラッカー」塗裝（指硝基漆）、漆塗裝、油性處理與蠟處理（見<a href=\"finishes.html\">塗裝與收尾</a>）。其中一個用語值得提醒：「油性合成漆塗裝」其實只是油性塗料，雖然有個「漆」字，卻與漆樹的樹液毫無關係；真正的大漆只標示為「漆塗裝」。塗漆餐具的規定更嚴格，「漆器」這個品名僅限以真漆完成的器物，並須標示胎體，詳見〈塗裝與收尾〉一頁。最後，記住標示說不出的事：標為天然木的桌面，可能是短料拼成的馬賽克；一張「胡桃木」餐桌，可能是胡桃木桌面配上染色橡膠木的桌腳。這些空白，得靠型錄、製造商網站或店員來補。" } },
        { t:"tiny",
          text:{
            en:"Sources: Consumer Affairs Agency, labelling standards under the Household Goods Quality Labelling Act (desks and tables; chests); Okajima Mokuzai, veneer thicknesses and how to identify veneer.",
            ja:"出典：消費者庁 家庭用品品質表示法に基づく表示規程（机及びテーブル、たんす）、恩加島木材工業 突板の厚みと見分け方。",
            zh:"資料來源：日本消費者廳《家庭用品品質表示法》表示規程（書桌及餐桌、衣櫃）；恩加島木材工業關於木皮厚度與辨識方法的說明。" } }
      ] },
    { t:"section",
      id:"names",
      title:{ en:"Species and trade names", ja:"樹種名と商品名", zh:"樹種名與商品名" },
      jp:"樹種",
      body:[
        { t:"p",
          text:{
            en:"Japanese shops mix Japanese species names, English trade names and marketing words, and the same word can mean different woods in different places. Most of the confusions are harmless — the substitutes are often good woods in their own right — but they matter for price, for colour as the piece ages, and for anyone who wants to buy local timber. The densities below are air-dry values from the standard Japanese wood-industry handbook, the same figures used on <a href=\"properties.html\">Physical Properties</a>.",
            ja:"日本の店は、和名、英語の商品名、宣伝の言葉をまぜて使い、同じ言葉が場所によって違う木を指すことがある。取り違えの多くは害がない——代わりの木もそれ自体よい木であることが多い——が、値段、年を経たときの色の変わり方、そして地元の木を買いたい人にとっては意味がある。以下の比重は、日本の木材工業の標準的なハンドブックによる気乾比重で、<a href=\"properties.html\">物理的性質</a>と同じ値である。",
            zh:"日本的商店混用日文樹種名、英文商品名與行銷用語，同一個詞在不同地方可能指不同的木材。多數混淆無傷大雅——替代的木材本身往往也是好木料——但它們關係到價格、器物老化後的顏色變化，也關係到想買在地木材的人。以下密度為日本木材工業標準手冊所列的氣乾值，與<a href=\"properties.html\">物理性質</a>一頁所用數據相同。" } },
        { t:"defs",
          items:[
            { term:{ en:"Nara and “oak”", ja:"ナラとオーク", zh:"水楢與「橡木」" },
              jp:"ナラ",
              def:{
                en:"Mizunara (Quercus crispula, about 0.68 g/cm³) was the classic furniture oak of Hida and Hokkaidō. In today's catalogues “oak” more often means American white or red oak. White oak's pores are plugged, which suits tables and barrels; red oak's are open and it is usually cheaper. Ask which.",
                ja:"ミズナラ（気乾比重約0.68）は、飛騨や北海道の家具の代表的なナラだった。いまのカタログで「オーク」といえば、アメリカ産のホワイトオークやレッドオークを指すことが多い。ホワイトオークは道管がふさがっていて食卓や樽に向き、レッドオークは道管が開いていて、ふつう安い。どれかをたずねたい。",
                zh:"水楢（Quercus crispula，氣乾密度約 0.68）是飛驒與北海道家具的經典橡木。如今型錄上的「橡木」多半指美國白橡或紅橡。白橡的導管被填塞，適合做餐桌與酒桶；紅橡導管開放，通常較便宜。不妨問清楚是哪一種。" } },
            { term:{ en:"Tamo and ash", ja:"タモとアッシュ", zh:"水曲柳與白蠟木" },
              jp:"タモ",
              def:{
                en:"Tamo is Japanese ash (yachidamo, Fraxinus mandshurica, about 0.55); “ash” usually means North American white ash. The two look very alike: straight, strong, springy grain, much used for chairs.",
                ja:"タモはヤチダモ（気乾比重約0.55）、「アッシュ」はふつう北米のホワイトアッシュを指す。まっすぐで強く弾力のある木目の、よく似た木で、椅子によく使われる。",
                zh:"「タモ」指日本的水曲柳（Fraxinus mandshurica，約 0.55）；「アッシュ」通常指北美白蠟木。兩者外觀極為相似：紋理通直、強韌有彈性，常用於椅子。" } },
            { term:{ en:"“Cherry” that is birch", ja:"サクラと呼ばれるカバ", zh:"叫做「櫻木」的樺木" },
              jp:"カバザクラ",
              def:{
                en:"In the Japanese timber trade, makanba birch (Betula maximowicziana, about 0.67) has long been sold as <em>kaba-zakura</em> or simply “sakura”, cherry. True cherry is yamazakura (Prunus jamasakura, about 0.62) or imported American black cherry. Both are fine woods; they are not the same wood.",
                ja:"日本の木材業界では、マカンバ（気乾比重約0.67）が昔から「カバザクラ」、あるいは単に「サクラ」の名で売られてきた。本当の桜はヤマザクラ（約0.62）か、輸入のブラックチェリーである。どちらもよい木だが、同じ木ではない。",
                zh:"在日本木材業界，真樺（Betula maximowicziana，約 0.67）長久以來以「樺櫻」或乾脆以「櫻」之名販售。真正的櫻木是山櫻（Prunus jamasakura，約 0.62）或進口的美國黑櫻桃木。兩者都是好木，但不是同一種木。" } },
            { term:{ en:"Walnut and kurumi", ja:"ウォールナットとクルミ", zh:"胡桃木與日本胡桃" },
              jp:"オニグルミ",
              def:{
                en:"“Walnut” means American black walnut (about 0.63), dark and costly. Japanese walnut, onigurumi (Juglans mandshurica, about 0.53), is lighter in both colour and weight and is sold as <em>kurumi</em>.",
                ja:"「ウォールナット」はアメリカのブラックウォールナット（約0.63）で、色が濃く高価である。日本のオニグルミ（約0.53）は色も重さも軽く、「クルミ」として売られる。",
                zh:"「ウォールナット」指美國黑胡桃（約 0.63），色深而昂貴。日本的鬼胡桃（Juglans mandshurica，約 0.53）顏色與重量都較輕，以「クルミ」之名販售。" } },
            { term:{ en:"Rubberwood", ja:"ラバーウッド", zh:"橡膠木" },
              jp:"ゴムの木",
              def:{
                en:"Wood from latex plantations in South-East Asia, felled when the trees stop yielding. Stable, even and inexpensive, it is widely used in mass-market furniture, often stained to resemble oak or walnut.",
                ja:"東南アジアの天然ゴム農園で、樹液がとれなくなった木を伐ったもの。安定して均質で安く、量産家具に広く使われ、しばしばナラやウォールナットに似せて着色される。",
                zh:"來自東南亞天然橡膠園、停止產膠後砍伐的樹木。穩定、均質而價廉，廣泛用於量產家具，常被染色成橡木或胡桃木的模樣。" } },
            { term:{ en:"Made in Japan, or Japanese wood?", ja:"国産家具か、国産材か", zh:"日本製，還是日本木材？" },
              jp:"国産材",
              def:{
                en:"<em>Kokusan kagu</em>, “domestic furniture”, says where a piece was made; <em>kokusanzai</em>, “domestic timber”, says where the wood grew. Much fine Japanese furniture is made from imported oak and walnut. The Hida furniture trademark, for example, requires that all processing after primary sawing take place in Hida, not that the wood grow there (see <a href=\"furniture.html\">Hida Furniture</a>).",
                ja:"「国産家具」はどこでつくられたかを、「国産材」は木がどこで育ったかを言う。日本のすぐれた家具の多くは輸入のオークやウォールナットでつくられている。たとえば飛騨の家具の商標が求めるのは、製材後のすべての加工を飛騨で行うことであり、木が飛騨で育つことではない（<a href=\"furniture.html\">飛騨の家具</a>を参照）。",
                zh:"「國產家具」說的是在哪裡製造，「國產材」說的是木材在哪裡生長。許多精良的日本家具是用進口橡木與胡桃木做的。例如飛驒家具商標要求的，是原木製材之後的所有加工都在飛驒完成，而非木材產自飛驒（見<a href=\"furniture.html\">飛驒家具</a>）。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Densities: air-dry values from the Japanese wood-industry handbook (4th revised edition). Trade names: common usage in the Japanese timber and furniture trade; Hida furniture charter as published by Takayama city and member companies.",
            ja:"比重：木材工業ハンドブック（改訂四版）の気乾比重。商品名：日本の木材・家具業界の一般的な用法。飛騨の家具の憲章は高山市と加盟企業の公表による。",
            zh:"密度：日本《木材工業手冊》（改訂第 4 版）氣乾值。商品名：日本木材與家具業界的一般用法；飛驒家具憲章依高山市與會員企業公布內容。" } }
      ] },
    { t:"section",
      id:"legal",
      title:{ en:"Legal and certified wood", ja:"合法な木、認証された木", zh:"合法木材與認證木材" },
      jp:"クリーンウッド法・森林認証",
      body:[
        { t:"p",
          text:{
            en:"Whether the wood in a table was felled legally is not something a buyer can see, so Japan relies on paperwork further up the chain. The Clean Wood Act — formally the Act on the Promotion of Use and Distribution of Legally Harvested Wood and Wood Products — was enacted in May 2016 and took effect in May 2017. An amendment passed in May 2023 and in force from April 2025 made it much firmer for the businesses at the top of the chain: log markets and sawmills that receive timber straight from Japanese forests, and importers. These “type 1” businesses must now collect information on where the wood came from, confirm that it was legally harvested before passing it on, keep the records for five years and hand the information down the chain. The products covered include logs, sawn timber, plywood and flooring, pulp and paper, and furniture such as chairs, desks and shelves. Small retailers are not themselves obliged to check, but a shop that sells furniture made by a reputable maker should be able to say where the wood came from. Instruments and rosewood are a separate story, governed by the Washington Convention (see <a href=\"cites.html\">Rosewood &amp; the Law</a>).",
            ja:"食卓の木が合法に伐られたかどうかは買い手の目に見えない。そこで日本は、流通の上流での書類に頼る。クリーンウッド法——正式には「合法伐採木材等の流通及び利用の促進に関する法律」——は二〇一六年五月に成立し、二〇一七年五月に施行された。二〇二三年五月に成立し二〇二五年四月に施行された改正は、流通のいちばん上にいる事業者の義務をずっと強めた。国内の森林から木材を直接受け入れる原木市場や製材工場、そして輸入業者である。この「第一種」の事業者は、木材の由来の情報を集め、引き渡す前に合法に伐採されたことを確認し、記録を五年間保存し、情報を下流へ伝えねばならない。対象には丸太、製材、合板、フローリング、パルプ、紙、そして椅子、机、棚などの家具が含まれる。小さな小売店自身に確認の義務はないが、信頼できるメーカーの家具を売る店なら、木がどこから来たかを答えられるはずである。楽器とローズウッドは別の話で、ワシントン条約が律している（<a href=\"cites.html\">ローズウッドと条約</a>を参照）。",
            zh:"一張餐桌的木材是否合法砍伐，買家看不出來，因此日本依靠供應鏈上游的文件。《清潔木材法》——正式名稱為《促進合法採伐木材等流通與利用法》——於 2016 年 5 月制定，2017 年 5 月施行。2023 年 5 月通過、2025 年 4 月施行的修正，大幅強化了供應鏈最上游業者的義務：直接從日本國內森林收取木材的原木市場與製材廠，以及進口業者。這些「第一類」業者如今必須蒐集木材來源資訊，在轉交之前確認其為合法採伐，將紀錄保存五年，並把資訊傳遞給下游。適用產品包括原木、製材、合板與地板、紙漿與紙，以及椅子、書桌、層架等家具。小型零售店本身沒有查核義務，但販售可靠廠商家具的店家，應該說得出木材從哪裡來。樂器與玫瑰木則另當別論，受《華盛頓公約》規範（見<a href=\"cites.html\">玫瑰木與公約</a>）。" } },
        { t:"p",
          text:{
            en:"Forest certification goes a step further, vouching not only for legality but for how the forest is managed. Two systems dominate in Japan. The Forest Stewardship Council, founded in 1993, certified about 420,000 hectares of Japanese forest, with 2,234 chain-of-custody certificates, as of 1 December 2024. Japan's own Sustainable Green Ecosystem Council, SGEC, founded in 2003, covered about 2.2 million hectares with 472 chain-of-custody certificates as of January 2025, and has been mutually recognised with the international PEFC system since June 2016. A certified label on a finished product requires an unbroken chain of certified businesses from forest to shop, which is why it is common on paper, plywood and flooring and still rare on furniture and crafts. Its absence therefore proves nothing; its presence is a strong assurance.",
            ja:"森林認証はさらに一歩進み、合法性だけでなく森の管理のしかたまで保証する。日本では二つの制度が主である。一九九三年に設立された森林管理協議会（FSC）は、二〇二四年十二月一日の時点で日本の森林約四十二万ヘクタールを認証し、加工・流通過程（CoC）の認証は二二三四件あった。日本独自の「緑の循環」認証会議（SGEC）は二〇〇三年に設立され、二〇二五年一月の時点で約二百二十万ヘクタール、CoC認証四七二件を数え、二〇一六年六月から国際的なPEFCと相互承認されている。完成品に認証のラベルをつけるには、森から店まで認証を受けた事業者が途切れずにつながっていなければならない。そのため紙、合板、フローリングではふつうに見かけても、家具や工芸品ではまだまれである。ラベルがないことは何も証明しないが、あれば強い保証になる。",
            zh:"森林認證更進一步，不只擔保合法，也擔保森林的經營方式。日本以兩套制度為主。1993 年成立的森林管理委員會（FSC），截至 2024 年 12 月 1 日在日本認證了約 42 萬公頃森林，產銷監管鏈（CoC）證書 2,234 張。日本本土的「綠色循環」認證會議（SGEC）成立於 2003 年，截至 2025 年 1 月涵蓋約 220 萬公頃、CoC 證書 472 張，並自 2016 年 6 月起與國際的 PEFC 相互承認。成品要貼上認證標籤，從森林到商店的每一個業者都必須取得認證、環環相扣，所以這類標籤在紙、合板與地板上很常見，在家具與工藝品上仍屬少見。沒有標籤證明不了什麼；有標籤則是強有力的保證。" } },
        { t:"p",
          text:{
            en:"Gifu adds a prefectural layer. Under the Gifu certified-timber scheme, <em>Gifu shōmeizai</em>, run since January 2007, the prefecture and registered businesses document each step from a Gifu forest to the building site, so that a post or board can be shown both to have grown in the prefecture and to have been legally felled. On 9 June 2026, 688 businesses were registered, 494 of them in Gifu and 194 elsewhere. A companion scheme, <em>Gifu seinō hyōjizai</em>, adds measured moisture content and strength to certified structural timber, and since March 2016 has also covered interior boards of sugi and hinoki. The scheme is aimed at builders rather than shoppers — it is the key to the prefecture's subsidies for houses built of Gifu timber (see <a href=\"home.html\">Wood in the Home</a>) — but a local joiner or furniture maker who buys certified timber can show the paperwork.",
            ja:"岐阜は県の層を加えている。二〇〇七年一月から続く岐阜証明材推進制度（ぎふ証明材）では、県と登録された事業者が、岐阜の森から建築の現場までの各段階を記録し、柱や板が県内で育ち、合法に伐られたことを示せるようにしている。二〇二六年六月九日の時点で登録事業者は六八八、うち県内四九四、県外一九四である。姉妹制度のぎふ性能表示材推進制度は、証明材の構造材に含水率と強度の測定値を加え、二〇一六年三月からはスギとヒノキの内装材も対象にしている。この制度が向いているのは買い物客より建て主と工務店であり、岐阜の木で建てる家への県の補助の鍵になっている（<a href=\"home.html\">住まいと木</a>を参照）。それでも、証明材を仕入れる地元の建具屋や家具職人なら、その書類を見せることができる。",
            zh:"岐阜在此之上再加一層縣級制度。自 2007 年 1 月實施的「岐阜證明材推進制度」，由縣政府與登錄業者記錄從岐阜森林到建築工地的每一個環節，讓一根柱子或一片板材能證明既產自縣內、也是合法砍伐。截至 2026 年 6 月 9 日，登錄業者共 688 家，其中縣內 494 家、縣外 194 家。姊妹制度「岐阜性能標示材推進制度」則為證明材中的結構材加上實測的含水率與強度，並自 2016 年 3 月起納入柳杉與扁柏的室內裝修材。這些制度主要針對營造業者而非一般消費者——它們是縣政府補助以岐阜木材建屋的關鍵（見<a href=\"home.html\">居家與木</a>）——但採購證明材的在地木作師傅或家具職人，也能拿出這些文件。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Clean Wood Act", ja:"クリーンウッド法", zh:"清潔木材法" },
              v:"2017 / 2025",
              d:{
                en:"In force May 2017; amended version in force April 2025.",
                ja:"二〇一七年五月施行、改正法は二〇二五年四月施行。",
                zh:"2017 年 5 月施行；修正版 2025 年 4 月施行。" } },
            { k:{ en:"FSC in Japan", ja:"日本のFSC", zh:"日本的 FSC" },
              v:{ en:"≈ 420,000 ha", ja:"約42万ha", zh:"約 42 萬公頃" },
              d:{ en:"Certified forest, 1 December 2024.", ja:"認証森林、二〇二四年十二月一日。", zh:"認證森林，2024 年 12 月 1 日。" } },
            { k:{ en:"SGEC / PEFC", ja:"SGEC／PEFC", zh:"SGEC／PEFC" },
              v:{ en:"≈ 2.2 million ha", ja:"約220万ha", zh:"約 220 萬公頃" },
              d:{ en:"Certified forest, January 2025.", ja:"認証森林、二〇二五年一月。", zh:"認證森林，2025 年 1 月。" } },
            { k:{ en:"Gifu certified timber", ja:"ぎふ証明材", zh:"岐阜證明材" },
              v:"688",
              d:{ en:"Registered businesses, 9 June 2026.", ja:"登録事業者数、二〇二六年六月九日。", zh:"登錄業者數，2026 年 6 月 9 日。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Clean Wood Act summary and “Main forest certification systems”; Nice Corporation, briefing on the 2023 amendment; Gifu Prefecture, timber distribution division, Gifu certified-timber and performance-labelled timber schemes (implementation guidelines of January 2007; registration count of June 2026).",
            ja:"出典：林野庁 クリーンウッド法の概要・主な森林認証制度、ナイス株式会社 二〇二三年改正法の解説、岐阜県県産材流通課 岐阜証明材推進制度・ぎふ性能表示材推進制度（二〇〇七年一月の実施要領、二〇二六年六月の登録数）。",
            zh:"資料來源：林野廳《清潔木材法》概要與「主要森林認證制度」；Nice 股份有限公司對 2023 年修正的解說；岐阜縣縣產材流通課，岐阜證明材與性能標示材制度（2007 年 1 月實施要領；2026 年 6 月登錄數）。" } }
      ] },
    { t:"section",
      id:"marks",
      title:{ en:"Regional and craft marks", ja:"地域と伝統のしるし", zh:"產地與傳統工藝標章" },
      jp:"地域団体商標・伝統証紙",
      body:[
        { t:"p",
          text:{
            en:"Beyond legality, several marks tell a buyer where and how a piece was made. They are worth understanding precisely, because each certifies something narrower than a shopper might assume.",
            ja:"合法性のほかに、いくつかのしるしが、品物がどこでどのようにつくられたかを買い手に告げる。どれも買い物客が思うより狭いことを保証しているので、正確に理解しておく価値がある。",
            zh:"除了合法性，還有幾種標章告訴買家一件器物在哪裡、以什麼方式製作。值得仔細弄懂，因為每一種所保證的範圍，都比消費者以為的更窄。" } },
        { t:"defs",
          items:[
            { term:{ en:"Hida furniture", ja:"飛騨の家具", zh:"飛驒家具" },
              jp:"地域団体商標",
              def:{
                en:"Regional collective trademarks registered in January 2008, with a logo from 2009 and registrations in Taiwan (2009) and China (2010). Companies must be certified against six standards: among them formaldehyde class F☆☆☆☆, all processing after primary sawing done in Hida, a ten-year warranty on wooden parts and legally sourced wood. It certifies the maker and the place of manufacture, not the origin of the timber. Details on <a href=\"furniture.html\">Hida Furniture</a>.",
                ja:"二〇〇八年一月に登録された地域団体商標で、二〇〇九年からロゴがあり、台湾（二〇〇九年）と中国（二〇一〇年）でも登録された。会社は六つの基準で認定を受けねばならない。ホルムアルデヒドのF☆☆☆☆、製材後のすべての加工を飛騨で行うこと、木部の十年保証、合法な木材などである。保証しているのはつくり手と製造地であり、木材の産地ではない。詳しくは<a href=\"furniture.html\">飛騨の家具</a>。",
                zh:"2008 年 1 月註冊的地域團體商標，2009 年起使用標誌，並於台灣（2009）與中國（2010）註冊。企業必須依六項標準取得認證，其中包括甲醛等級 F☆☆☆☆、原木製材後的所有加工在飛驒完成、木質部分十年保固，以及使用合法木材。它保證的是製造者與製造地，而非木材產地。詳見<a href=\"furniture.html\">飛驒家具</a>。" } },
            { term:{ en:"Traditional craft mark and certificate sticker", ja:"伝統マークと伝統証紙", zh:"傳統工藝標誌與傳統證紙" },
              jp:"伝統的工芸品",
              def:{
                en:"Under the Act on the Promotion of Traditional Craft Industries of 1974, the national government has designated 243 crafts. The red “traditional mark” is the symbol of the scheme; the <em>dentō shōshi</em> is a sticker bearing it, affixed only to pieces that have passed an inspection by the producers' association of the designated area. Gifu's designated crafts include Hida Shunkei lacquerware and Ichii Ittōbori carving (both 1975), Mino ware (1978), Mino washi (1985), Gifu lanterns (1995) and Gifu umbrellas (2022). A piece without the sticker is not necessarily an imitation; one with it has been checked.",
                ja:"一九七四年の伝統的工芸品産業の振興に関する法律のもとで、国は二百四十三品目を指定している。赤い「伝統マーク」は制度のシンボルであり、伝統証紙はそのマークを刷った証紙で、指定産地の組合などの検査に合格した品だけに貼られる。岐阜の指定品には、飛騨春慶と一位一刀彫（ともに一九七五年）、美濃焼（一九七八年）、美濃和紙（一九八五年）、岐阜提灯（一九九五年）、岐阜和傘（二〇二二年）がある。証紙のない品がまがい物とはかぎらないが、証紙のある品は検査を経ている。",
                zh:"依據 1974 年的《傳統工藝品產業振興法》，日本政府已指定 243 項傳統工藝品。紅色的「傳統標誌」是這套制度的象徵；「傳統證紙」則是印有該標誌的貼紙，只貼在通過指定產地同業組合檢查的製品上。岐阜的指定工藝品包括飛驒春慶與一位一刀雕（皆為 1975 年）、美濃燒（1978 年）、美濃和紙（1985 年）、岐阜提燈（1995 年）與岐阜和傘（2022 年）。沒有證紙的器物未必是仿品，但有證紙的必定經過檢查。" } },
            { term:{ en:"Craft trademarks", ja:"工芸の地域団体商標", zh:"工藝的地域團體商標" },
              jp:"飛騨一位一刀彫・大垣の木枡",
              def:{
                en:"Regional collective trademarks also protect individual craft names, among them Hida Ichii Ittōbori (registered 2006) and Ōgaki masu. They guard a name against imitation from outside the area; they are not a quality grade.",
                ja:"地域団体商標は個々の工芸の名も守っている。飛騨一位一刀彫（二〇〇六年登録）や大垣の木枡などである。守るのは産地外からの模倣に対する名であり、品質の等級ではない。",
                zh:"地域團體商標也保護個別工藝的名稱，例如「飛驒一位一刀雕」（2006 年註冊）與「大垣木枡」。它保護的是名稱不被產地外仿冒，而非品質等級。" } },
            { term:{ en:"Tōnō hinoki", ja:"東濃ひのき", zh:"東濃扁柏" },
              jp:"産地銘柄",
              def:{
                en:"A timber brand for hinoki from eastern Mino, promoted since 13 November 2007 by a council of eleven forest cooperatives and sold through a distribution cooperative. It describes the origin of building timber and of hinoki goods such as bath stools, boards and masu (see <a href=\"hinoki.html\">Hinoki</a>).",
                ja:"東美濃のヒノキの銘柄で、二〇〇七年十一月十三日に十一の森林組合がつくった協議会が広め、流通の協同組合を通じて売られる。建築材と、風呂椅子、板、枡などのヒノキ製品の産地を示す（<a href=\"hinoki.html\">ヒノキ</a>を参照）。",
                zh:"東美濃扁柏的木材品牌，自 2007 年 11 月 13 日起由十一個森林組合組成的協議會推廣，經由流通合作社販售。它標示建築用材以及浴凳、砧板、木枡等扁柏製品的產地（見<a href=\"hinoki.html\">日本扁柏</a>）。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Takayama city and Nissin Mokkō on the Hida furniture trademarks; METI Chūbu Bureau of Economy, Trade and Industry, and the Association for the Promotion of Traditional Craft Industries (founded June 1975); Gifu Prefecture list of national traditional crafts; Tōnō hinoki branding council.",
            ja:"出典：高山市・日進木工（飛騨の家具の商標）、中部経済産業局・伝統的工芸品産業振興協会（一九七五年六月設立）、岐阜県 国指定伝統的工芸品一覧、東濃ひのきブランド化推進協議会。",
            zh:"資料來源：高山市與日進木工（飛驒家具商標）；經濟產業省中部經濟產業局與傳統工藝品產業振興協會（1975 年 6 月成立）；岐阜縣國家指定傳統工藝品一覽；東濃扁柏品牌推進協議會。" } }
      ] },
    { t:"section",
      id:"price",
      title:{ en:"What a handmade piece costs, and why", ja:"手仕事の値段とその理由", zh:"手工製品的價格及其理由" },
      jp:"値段",
      body:[
        { t:"p",
          text:{
            en:"A first visit to a Takayama showroom can be a shock. In 2026 the online shop of Kashiwa, one of the larger Hida makers, listed dining chairs from ¥55,000 for an oak Windsor side chair to ¥192,500 for an armchair in walnut — several times the price of a chair in a furniture chain. The difference is not only the name. Start with the timber: in fiscal 2024 even dried, sawn hinoki squares for building cost about ¥103,400 a cubic metre at wholesale, and furniture needs the best of the log — clear, straight-grained hardwood without knots or checks. From the small-diameter broadleaf trees that grow in Hida, only about a tenth of the volume becomes usable timber. Then the wood must be dried slowly to about 8–10 per cent moisture, which takes months in a kiln and years in the open air (see <a href=\"drying.html\">Drying</a>); the timber sits as capital all that time.",
            ja:"高山のショールームをはじめて訪ねると驚くかもしれない。二〇二六年、飛騨の大手のひとつ柏木工のオンラインストアでは、食卓の椅子が、ナラのウィンザーのサイドチェアの五万五千円から、ウォールナットのアームチェアの十九万二千五百円まで並んでいた。家具チェーンの椅子の何倍もの値段である。違いは名前だけではない。まず木材である。二〇二四年度、建築用の乾燥したヒノキの製材でさえ、卸値で一立方メートル約十万三千四百円した。家具には丸太のいちばんよいところ——節も割れもない、まっすぐな木目の広葉樹——が要る。飛騨に育つ小径の広葉樹からは、使える材になるのは体積の一割ほどにすぎない。そして木は含水率約8〜10パーセントまでゆっくり乾かさねばならず、乾燥機で数か月、天然乾燥なら数年かかる（<a href=\"drying.html\">乾燥</a>を参照）。そのあいだ木材は資本として眠っている。",
            zh:"第一次走進高山的展示間，可能會嚇一跳。2026 年，飛驒大型廠商之一柏木工的網路商店上，餐椅的價格從橡木溫莎側椅的 55,000 日圓，到胡桃木扶手椅的 192,500 日圓——是家具連鎖店椅子的好幾倍。差別不只在品牌。先看木材：2024 年度，就連建築用的乾燥扁柏角材，批發價也約每立方公尺 103,400 日圓；而家具需要原木中最好的部分——無節、無裂、紋理通直的闊葉樹材。飛驒生長的小徑闊葉樹，只有約一成的體積能成為可用的木料。接著木材必須慢慢乾燥到含水率約 8–10%，窯乾要數個月，天然風乾則要數年（見<a href=\"drying.html\">乾燥</a>）；這段期間，木材都是壓著的資金。" } },
        { t:"compare",
          cols:3,
          items:[
            { title:{ en:"Mass-produced", ja:"量産品", zh:"量產品" },
              jp:"量産",
              text:{
                en:"Rubberwood, pine or printed board, often made abroad in large runs; flat-pack or quickly assembled; finished with thick sprayed coatings. Cheap to buy, but rarely worth repairing, and the maker may not exist in ten years.",
                ja:"ラバーウッド、パイン、プリント化粧のボードで、多くは海外で大量につくられる。組立式か手早く組まれ、厚い吹付け塗装で仕上げる。買うのは安いが、直す価値のあることはまれで、十年後にメーカーが残っているとはかぎらない。",
                zh:"以橡膠木、松木或印刷貼面板製成，多在海外大批生產；組合式或快速組裝；表面噴上厚塗層。買時便宜，卻很少值得修理，十年後製造商也未必還在。" } },
            { title:{ en:"Factory-made in Hida", ja:"飛騨の工場製", zh:"飛驒工廠製" },
              jp:"工場",
              text:{
                en:"Selected solid hardwood, machine-cut but hand-fitted, sanded and finished; bentwood and joinery by skilled staff; ten-year warranties and in-house repair workshops. Hida Sangyō alone receives about 4,000 repair requests a year.",
                ja:"選んだ無垢の広葉樹を、機械で加工しつつ手で合わせ、研ぎ、仕上げる。曲木と組み手は熟練の職人の仕事で、十年保証と社内の修理工房がある。飛騨産業だけで、年に約四千件の修理依頼を受ける。",
                zh:"精選實木闊葉樹，機器加工但以人手組裝、打磨與塗裝；曲木與榫接由熟練工匠完成；提供十年保固並設有自家維修工坊。光是飛驒產業每年就接到約 4,000 件維修委託。" } },
            { title:{ en:"Studio maker", ja:"個人の工房", zh:"個人工坊" },
              jp:"工房",
              text:{
                en:"One or a few people, often using air-dried timber bought log by log; every piece fitted and finished by hand, sometimes to order. Prices reflect days of labour per piece, and the maker usually repairs what they made.",
                ja:"一人か数人で、丸太単位で買った天然乾燥材を使うことが多い。一つずつ手で合わせて仕上げ、注文に応じることもある。値段は一点あたり何日もの手間を反映し、つくり手はふつう自分のつくった物を直す。",
                zh:"一人或數人經營，常使用逐根買進、天然風乾的木料；每件都以手工組裝與完成，有時接受訂製。價格反映每件作品數日的工時，製作者通常也會修理自己做的東西。" } }
          ] },
        { t:"p",
          text:{
            en:"The fairest way to compare is cost per year of use. A chair that lasts fifty years with two refinishings and a re-glue costs less per year than three cheap chairs that each last a decade — and it can be passed on or sold. Buyers on a budget have honest options: smaller pieces from the same makers, simpler designs in domestic sugi or hinoki rather than imported walnut, discontinued or slightly marked stock (Hida Sangyō's Takayama showroom has an outlet building, first come first served), and good second-hand furniture, discussed below.",
            ja:"いちばん公平なくらべ方は、使う一年あたりの費用である。二度の塗りなおしと一度の組みなおしで五十年もつ椅子は、十年ずつしかもたない安い椅子三脚より一年あたり安く、人に譲ることも売ることもできる。予算の限られた買い手にも、まっとうな選択肢はある。同じメーカーの小さな品、輸入のウォールナットではなく国産のスギやヒノキを使った簡素なデザイン、廃番品や小さな傷のある在庫（飛騨産業の高山のショールームには先着順のアウトレット館がある）、そして後で述べるよい中古家具である。",
            zh:"最公平的比較方式，是每使用一年的成本。一張椅子重新塗裝兩次、重新上膠一次就能用五十年，每年的成本比三張各用十年的便宜椅子還低——而且還能傳給別人或轉賣。預算有限的買家也有正當的選擇：同一廠商的小件作品、改用國產柳杉或扁柏而非進口胡桃木的簡潔設計、停產品或有小瑕疵的庫存（飛驒產業高山展示間設有先到先得的暢貨館），以及下文談到的優質二手家具。" } },
        { t:"tiny",
          text:{
            en:"Sources: Kashiwa online store (2026 prices, including tax); Forestry Agency, wood price survey (FY2024); Hida city broadleaf policy report; Hida Sangyō, repair and showroom information.",
            ja:"出典：柏木工オンラインストア（二〇二六年の税込価格）、林野庁 木材価格統計（二〇二四年度）、飛騨市の広葉樹のまちづくりに関する報告、飛騨産業 修理・ショールーム案内。",
            zh:"資料來源：柏木工網路商店（2026 年含稅價格）；林野廳木材價格統計（2024 年度）；飛驒市闊葉樹城鎮營造報告；飛驒產業維修與展示間資訊。" } }
      ] },
    { t:"section",
      id:"where",
      title:{ en:"Where to buy in Gifu", ja:"岐阜で買う", zh:"在岐阜哪裡買" },
      jp:"ショールーム・催し",
      body:[
        { t:"p",
          text:{
            en:"Gifu is one of the few places in Japan where a buyer can go from forest to factory to shop within a day. The furniture makers cluster in Takayama; hinoki goods come from the Tōnō valleys; masu from Ōgaki; paper from Mino. Most of the places below welcome visitors without appointment, but factory tours and workshops must be booked, and opening days change with the season, so check before travelling (see <a href=\"visiting.html\">Visiting Gifu</a> for routes).",
            ja:"岐阜は、森から工場、そして店まで一日でたどれる、日本でも数少ない土地である。家具のつくり手は高山に集まり、ヒノキの品は東濃の谷から、枡は大垣から、紙は美濃から来る。以下の場所の多くは予約なしで訪ねられるが、工場見学や体験は予約が要り、営業日は季節で変わるので、出かける前に確かめたい（道順は<a href=\"visiting.html\">岐阜を訪ねる</a>を参照）。",
            zh:"岐阜是日本少數能在一天之內從森林走到工廠、再走到商店的地方。家具廠聚集在高山；扁柏製品來自東濃的山谷；木枡來自大垣；紙來自美濃。以下多數地點不需預約即可參觀，但工廠導覽與體驗活動須事先預約，營業日也隨季節變動，出發前請先確認（交通路線見<a href=\"visiting.html\">造訪岐阜</a>）。" } },
        { t:"defs",
          items:[
            { term:{ en:"Takayama showrooms", ja:"高山のショールーム", zh:"高山的展示間" },
              jp:"飛騨の家具館ほか",
              def:{
                en:"Hida Sangyō's Hida no Kagu-kan in Nada-machi, about 15 minutes' walk from JR Takayama station, has main, new and outlet buildings and a café. Kashiwa's Takayama showroom has a café and offers free factory tours by reservation; Nissin Mokkō's gallery runs a café, workshops and factory tours (about two hours, ¥2,200–5,500, on weekdays from August 2026 to March 2027); Shirakawa's café La Chaise stands near the old town.",
                ja:"飛騨産業の飛騨の家具館は名田町にあり、JR高山駅から歩いて約十五分、本館、新館、アウトレット館とカフェがある。柏木工の高山のショールームにはカフェがあり、予約すれば無料で工場を見学できる。日進木工のギャラリーはカフェを営み、体験と工場見学（約二時間、二千二百〜五千五百円、二〇二六年八月から二〇二七年三月の平日）を行う。シラカワのカフェ・ラ・シェーズは古い町並みの近くにある。",
                zh:"飛驒產業的「飛驒家具館」位於名田町，距 JR 高山站步行約 15 分鐘，設有本館、新館、暢貨館與咖啡館。柏木工的高山展示間附設咖啡館，預約可免費參觀工廠；日進木工的藝廊經營咖啡館，並舉辦體驗與工廠導覽（約兩小時，2,200–5,500 日圓，2026 年 8 月至 2027 年 3 月的平日）；シラカワ的 La Chaise 咖啡館則位於古街附近。" } },
            { term:{ en:"Hida furniture festival", ja:"飛騨の家具フェスティバル", zh:"飛驒家具節" },
              jp:"フェスティバル",
              def:{
                en:"The makers' federation and a festival committee open showrooms and a central exhibition at once. In 2025 it ran from 2 to 6 July at the Hida World Life Culture Center and makers' showrooms in Takayama and Hida city, with about 2,500 new pieces on show; in 2026 it ran from 17 to 21 June, with twelve makers including Kashiwa, Hida Sangyō and Oak Village, talks, workshops and a stamp rally. Between 2017 and 2024 it was held in autumn, between September and November.",
                ja:"木工連合会と実行委員会が、各社のショールームと中央の展示会を同時に開く。二〇二五年は七月二日から六日まで、飛騨・世界生活文化センターと高山市・飛騨市のショールームで開かれ、約二千五百点の新作が並んだ。二〇二六年は六月十七日から二十一日まで、柏木工、飛騨産業、オークヴィレッジなど十二社が参加し、講演、体験、スタンプラリーがあった。二〇一七〜二〇二四年は秋、九月から十一月に開かれていた。",
                zh:"由木工聯合會與執行委員會同時開放各廠展示間並舉辦主展。2025 年於 7 月 2 日至 6 日在飛驒世界生活文化中心及高山市、飛驒市各展示間舉行，展出約 2,500 件新作；2026 年於 6 月 17 日至 21 日舉行，柏木工、飛驒產業、Oak Village 等十二家廠商參加，並有講座、體驗活動與集章活動。2017–2024 年間則在秋季的 9 月至 11 月舉辦。" } },
            { term:{ en:"Craft fairs", ja:"クラフトフェア", zh:"手作市集" },
              jp:"GIFUクラフトフェア・付知",
              def:{
                en:"The GIFU Craft Fair, now past its twenty-third edition, fills the area around JR Gifu station (Active G, Gifu City Tower 43 and Asti Gifu) with makers in thirteen fields, woodwork among them. On the third weekend of October — 17 and 18 October in 2026 — the Tsukechi National Ladies' Craft Fair gathers women makers from across Japan at the Hanakaidō Tsukechi roadside station in Nakatsugawa, in the heart of hinoki country.",
                ja:"GIFUクラフトフェアは二十三回を超え、JR岐阜駅のまわり（アクティブG、岐阜シティ・タワー43、アスティ岐阜）を、木工を含む十三の分野のつくり手で埋める。十月の第三土・日曜日——二〇二六年は十月十七・十八日——には、つけち全国レディース・クラフトフェアーが、ヒノキの里の中心、中津川市の道の駅「花街道付知」に全国の女性作家を集める。",
                zh:"GIFU 手作市集已舉辦超過二十三屆，在 JR 岐阜站周邊（Active G、岐阜 City Tower 43、Asti 岐阜）聚集木工等十三個領域的創作者。每年 10 月第三個週末——2026 年為 10 月 17、18 日——「付知全國女性手作市集」則在扁柏之鄉的中心、中津川市的「花街道付知」休息站，匯集來自日本各地的女性創作者。" } },
            { term:{ en:"Hinoki country", ja:"ヒノキの里", zh:"扁柏之鄉" },
              jp:"加子母・付知",
              def:{
                en:"In Kashimo, Nakatsugawa, the forest cooperative's Mokumoku Center sells hinoki furniture, toys, school desks and essential oil made from local trees; nearby Tsukechi has its own woodworkers (see <a href=\"hinoki.html\">Hinoki</a>).",
                ja:"中津川市加子母では、森林組合のモクモクセンターが、地元の木でつくったヒノキの家具、おもちゃ、学校の机、精油を売っている。隣の付知にも木工の工房がある（<a href=\"hinoki.html\">ヒノキ</a>を参照）。",
                zh:"在中津川市加子母，森林組合經營的「モクモク中心」販售以在地樹木製作的扁柏家具、玩具、學校課桌與精油；鄰近的付知也有自己的木工坊（見<a href=\"hinoki.html\">日本扁柏</a>）。" } },
            { term:{ en:"Ōgaki masu", ja:"大垣の枡", zh:"大垣木枡" },
              jp:"枡工房ますや",
              def:{
                en:"Ōhashi Ryōki's Masu Kōbō Masuya, about 15 minutes' walk from JR Ōgaki station, sells masu and runs a 45-minute assembly workshop for two or more people, booked at least a week ahead and not held from November to January (see <a href=\"masu.html\">The Masu of Ōgaki</a>).",
                ja:"大橋量器の枡工房ますやは、JR大垣駅から歩いて約十五分で、枡を売り、二人以上で一週間前までに予約する四十五分の組み立て体験を行う（十一月〜一月は休み）。<a href=\"masu.html\">大垣の枡</a>を参照。",
                zh:"大橋量器的「枡工房ますや」距 JR 大垣站步行約 15 分鐘，販售木枡，並舉辦 45 分鐘的組裝體驗，須兩人以上、至少一週前預約，11 月至 1 月暫停（見<a href=\"masu.html\">大垣的枡</a>）。" } },
            { term:{ en:"Mino washi", ja:"美濃和紙", zh:"美濃和紙" },
              jp:"美濃和紙の里会館",
              def:{
                en:"The Mino Washi no Sato Kaikan (9:00–17:00, closed Tuesdays, adults ¥500) has a papermaking experience and a shop, which also sells online; paper shops line the old merchant streets of Mino (see <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>).",
                ja:"美濃和紙の里会館（九時〜十七時、火曜休館、大人五百円）には紙漉き体験と売店があり、ネットでも売っている。美濃の古い商家の町並みにも紙の店が並ぶ（<a href=\"paper.html\">和紙・提灯・和傘</a>を参照）。",
                zh:"美濃和紙之里會館（9:00–17:00，週二休館，成人 500 日圓）提供抄紙體驗與商店，也有網路販售；美濃的老商家街道上也林立著紙店（見<a href=\"paper.html\">和紙、燈籠與和傘</a>）。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Hida Takayama tourism association; Heyagoto (Hida Sangyō showroom); Visit Town Gifu (Nissin Mokkō tours); Hida furniture festival official site and PR Times release (2025); GIFU Craft Fair; Gifu Prefecture tourism guide (Tsukechi fair, Masuya); Mino city.",
            ja:"出典：飛騨高山観光コンベンション協会、HEYAGOTO（飛騨産業ショールーム）、ビジットタウン岐阜（日進木工の見学）、飛騨の家具フェスティバル公式サイト・PR TIMES（二〇二五年）、GIFUクラフトフェア、岐阜の旅ガイド（付知のフェア、ますや）、美濃市。",
            zh:"資料來源：飛驒高山觀光會議協會；HEYAGOTO（飛驒產業展示間）；Visit Town 岐阜（日進木工導覽）；飛驒家具節官方網站與 PR TIMES 新聞稿（2025 年）；GIFU 手作市集；岐阜縣觀光指南（付知市集、ますや）；美濃市。" } }
      ] },
    { t:"section",
      id:"vintage",
      title:{ en:"Second-hand and antique", ja:"中古と古家具", zh:"二手與古董家具" },
      jp:"時代箪笥",
      body:[
        { t:"p",
          text:{
            en:"Japan's houses have shed a great deal of furniture as families shrink and old homes are cleared, and good second-hand pieces are plentiful. Most antique chests, <em>jidai-dansu</em>, on the market date from the Meiji and Taishō periods, with some from the Edo period. Their carcasses are usually kiri (paulownia), sugi, hinoki or fir, with fronts of keyaki or chestnut; a front with swirling “jewel figure”, <em>tama-moku</em>, is the rarest and most prized. Chests from recognised regions — Sendai, Shōnai, Sado, Kyoto and Shiga among them — fetch premium prices, and their iron fittings, often worked with cranes, tortoises, pine and bamboo, are both ornament and reinforcement. Dealers stress that the quality of past repairs affects value as much as age: a chest honestly mended over generations is worth more than one hastily “restored”.",
            ja:"家族が小さくなり、古い家が片づけられるにつれて、日本の家々は多くの家具を手放してきた。よい中古品は豊富にある。市場に出る時代箪笥の多くは明治から大正のもので、江戸時代のものもある。胴はふつう桐、杉、檜、樅で、前板はケヤキや栗である。渦を巻く玉杢の前板は最もまれで、最も珍重される。仙台、庄内、佐渡、京都、滋賀など名のある産地の箪笥は高値がつき、鶴亀や松竹をかたどることの多い鉄の金具は、飾りであると同時に補強でもある。古物商は、年代と同じくらい過去の修理の質が値打ちを左右すると強調する。何代にもわたって誠実に直されてきた箪笥は、急いで「修復」されたものより値打ちがある。",
            zh:"隨著家庭規模縮小、老房子被清空，日本的住家釋出了大量家具，優質二手品相當多。市面上的古衣櫃（時代簞笥）多半是明治至大正時期的，也有部分出自江戶時代。櫃體通常是泡桐、柳杉、扁柏或冷杉，正面則用櫸木或栗木；正面帶有漩渦狀「玉杢」紋理的最為稀少，也最受珍視。仙台、庄內、佐渡、京都、滋賀等知名產地的衣櫃價格較高，而常以鶴、龜、松、竹為紋樣的鐵製金具，既是裝飾也是補強。古董商強調，過去修理的品質與年代同樣影響價值：歷經數代誠實修補的衣櫃，比匆忙「修復」的更有價值。" } },
        { t:"steps",
          items:[
            { title:{ en:"Open everything", ja:"すべて開ける", zh:"全部打開" },
              jp:"引出し",
              text:{
                en:"Pull every drawer and door. Stiffness in a humid shop may be normal; rattling, wide gaps and drawers that do not match their openings suggest replacement or shrinkage.",
                ja:"引出しと扉をすべて開ける。湿った店で固いのは普通のこともある。がたつき、大きなすきま、口に合わない引出しは、取り替えか痩せを疑わせる。",
                zh:"把每個抽屜與門都拉開。在潮濕的店裡發緊可能很正常；鬆動、縫隙過大、抽屜與開口不合，則暗示曾經更換或木材收縮。" } },
            { title:{ en:"Look behind and beneath", ja:"裏と下を見る", zh:"看背面與底部" },
              jp:"裏板",
              text:{
                en:"Back boards and bottoms show the true age and the tool marks; new plywood or fresh screws mark later work.",
                ja:"裏板と底板は本当の年代と刃物の跡を見せる。新しい合板や新しいねじは後の仕事のしるしである。",
                zh:"背板與底板顯示真正的年代與工具痕跡；新的合板或新螺絲就是後人加工的記號。" } },
            { title:{ en:"Check for insects", ja:"虫を確かめる", zh:"檢查蟲害" },
              jp:"ヒラタキクイムシ",
              text:{
                en:"Round holes of 1–2 mm with fine powder beneath are the sign of powderpost beetles, which attack starch-rich sapwood. Heat at 50 °C for 30 minutes kills eggs and larvae; old holes without powder are usually inactive.",
                ja:"直径一〜二ミリの丸い穴と、その下の細かな粉はヒラタキクイムシのしるしで、でんぷんの多い辺材を食う。五十度で三十分加熱すれば卵も幼虫も死ぬ。粉の出ていない古い穴は、たいてい活動していない。",
                zh:"直徑 1–2 公釐的圓孔、下方有細粉，就是粉蠹蟲的跡象，牠們專吃富含澱粉的邊材。以 50°C 加熱 30 分鐘可殺死蟲卵與幼蟲；沒有粉末的舊孔洞通常已不再活動。" } },
            { title:{ en:"Smell and feel", ja:"におい、手ざわり", zh:"聞一聞、摸一摸" },
              jp:"カビ",
              text:{
                en:"A musty smell or grey bloom inside means damp storage; it can be cleaned, but a piece bound for a humid home needs to be dry and sound first.",
                ja:"かび臭さや内側の灰色のかびは湿った保管のしるしである。掃除はできるが、湿った家へ行く品は、まず乾いて健全でなければならない。",
                zh:"霉味或內側灰白色的霉斑，表示曾存放在潮濕處；雖可清理，但要送往潮濕住家的器物，必須先乾燥、完好。" } },
            { title:{ en:"Ask about work done", ja:"手の入り方をたずねる", zh:"詢問修整內容" },
              jp:"修理",
              text:{
                en:"Ask what has been replaced — hardware, drawer bottoms, top — and how it was finished. Kiri chests can be professionally washed, re-planed and waxed; Hida Sangyō and Nissin Mokkō will quote for repairing discontinued models of their own.",
                ja:"何が取り替えられたか——金具、引出しの底、天板——と、どう仕上げたかをたずねる。桐箪笥は専門の工房で洗い、削りなおし、蝋を引いてもらえる。飛騨産業と日進木工は、自社の廃番品の修理も見積もる。",
                zh:"問清楚更換過什麼——金具、抽屜底、頂板——以及用什麼方式塗裝。泡桐衣櫃可交給專業工坊清洗、重新刨光與上蠟；飛驒產業與日進木工也會為自家已停產的款式估價修理。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Iwano Bijutsu, advice on choosing old furniture and antique chests; Japan Flooring Industry Association, powderpost beetles; Kirisaisei Ōishi (kiri chest restoration); Hida Sangyō and Nissin Mokkō, repair services.",
            ja:"出典：いわの美術 古家具・時代箪笥の選び方、日本フローリング工業会 ヒラタキクイムシ、桐たんす再生工房おおいし、飛騨産業・日進木工 修理案内。",
            zh:"資料來源：いわの美術「挑選古家具與時代簞笥」；日本地板工業會（粉蠹蟲）；桐簞笥再生工房おおいし；飛驒產業與日進木工維修服務。" } }
      ] },
    { t:"section",
      id:"carry",
      title:{ en:"Getting it home", ja:"持ち帰る", zh:"帶回家" },
      jp:"免税・検疫",
      body:[
        { t:"p",
          text:{
            en:"Visitors from abroad have long been able to buy goods in Japan free of consumption tax. From 1 November 2026 the system changes to a refund method: the visitor pays the tax at the till and is refunded after customs confirms, at departure, that the goods are leaving Japan with them. Keep purchases unopened and ready to show. A shop that ships a large piece abroad itself can usually treat it as an export; ask at the time of purchase. Furniture travels by sea in crates, and any wooden crate or pallet must meet the international standard for wood packaging — heat-treated or fumigated and stamped with the IPPC mark. Taiwan has applied such rules since 14 August 2008, most recently amended on 5 February 2025; plywood and other hot-pressed glued material, wood no more than 6 mm thick and painted or preserved wood are exempt.",
            ja:"海外からの旅行者は、日本で消費税を免除されて買い物ができた。二〇二六年十一月一日から、この制度はリファンド方式に変わる。旅行者は店頭で税を払い、出国のときに税関が品物を持ち出すことを確認したあとで返金を受ける。買った物は開けずに、見せられるようにしておく。大きな品を店が自ら海外へ送る場合は、ふつう輸出として扱える。買うときにたずねたい。家具は木箱に入って船で運ばれ、木箱やパレットは木材梱包材の国際基準——熱処理か燻蒸をしてIPPCのマークを押したもの——に合っていなければならない。台湾は二〇〇八年八月十四日からこうした規則を適用し、最近では二〇二五年二月五日に改正した。合板など熱圧接着したもの、厚さ六ミリ以下の木材、塗装や防腐処理をした木材は対象外である。",
            zh:"外國旅客在日本購物，向來可以免繳消費稅。自 2026 年 11 月 1 日起，制度改為退稅方式：旅客在結帳時先付稅，出境時由海關確認商品隨身帶出日本後再退還。購得的物品請保持未拆封，以便出示。若由店家自行把大件物品寄往海外，通常可以出口方式處理，購買時不妨詢問。家具以木箱海運，而所有木箱與棧板都必須符合木質包裝材的國際標準——經熱處理或燻蒸並蓋有 IPPC 標記。台灣自 2008 年 8 月 14 日起實施此類規定，最近一次修正為 2025 年 2 月 5 日；合板等熱壓膠合材料、厚度 6 公釐以下的木材，以及經塗漆或防腐處理的木材則不在此限。" } },
        { t:"p",
          text:{
            en:"Taiwan's own quarantine rules matter most for small things carried in luggage, because many of the loveliest Gifu souvenirs are bare wood. In the reference table for arriving travellers issued by the plant-quarantine authority (now the Animal and Plant Health Inspection Agency of the Ministry of Agriculture) on 27 July 2022, plant branches and wood with bark attached are prohibited; low-risk items such as incense powder, brooms and brushes made of plant material and products of compressed sawdust need no application; and <em>unlacquered wooden products</em> require a quarantine application accompanied by a phytosanitary certificate from the exporting country. The ministry's guidance of March 2023 adds that painted or preservative-treated articles are exempt, and warns that raw-wood items bought online — pet chews, aquarium driftwood, wood slices — must also be declared; between 2021 and 2023 customs recorded 418 such violations and NT$10.52 million in fines. In practice a lacquered bowl or a urethane-finished chair raises no question, while a bare hinoki masu, a cutting board or an unpainted Ichii carving may. Declare anything doubtful at the red channel, and check the agency's current rules before travelling.",
            ja:"台湾自身の検疫の規則がいちばんかかわるのは、荷物に入れて運ぶ小さな品である。岐阜のいちばん美しい土産の多くは素の木だからである。植物検疫の当局（いまの農業部動植物防疫検疫署）が二〇二二年七月二十七日に出した入国旅客向けの参考表では、樹皮のついた枝や木材は持ち込み禁止、沈香の粉、植物材料でつくったほうきやブラシ、おがくずを圧縮した製品などの低リスクの品は申請不要、そして「漆を塗っていない木製品」は輸出国の植物検疫証明書を添えた検疫の申請が必要とされる。農業部の二〇二三年三月の案内は、塗装や防腐処理をした品は対象外であると補い、ネットで買う生の木の品——ペットのかじり木、水槽の流木、木の輪切り——も申告が要ると警告している。二〇二一〜二〇二三年に税関はこうした違反を四百十八件記録し、罰金は計一千五十二万台湾ドルにのぼった。実際には、漆の椀やウレタン塗装の椅子は問題にならないが、素のヒノキの枡、まな板、塗っていない一位一刀彫は問題になりうる。疑わしいものは赤の通路で申告し、出かける前に当局の最新の規則を確かめたい。",
            zh:"台灣本身的檢疫規定，對隨身行李中的小物件影響最大，因為許多最美的岐阜紀念品都是原木。依植物檢疫主管機關（現為農業部動植物防疫檢疫署）2022 年 7 月 27 日發布的入境旅客參考表，附帶樹皮的植物枝條及木材禁止輸入；沉香粉、植物材料紮成的掃帚與刷子、木屑壓縮製品等低風險物品免申請檢疫；而「未上漆木製品」則須申請檢疫，並附輸出國植物檢疫證明書。農業部 2023 年 3 月的說明補充：經塗漆或防腐處理的製品免檢，並提醒網購的原木製品——寵物啃咬木、水族沉木、木頭切片——同樣必須申報；2021 至 2023 年間，海關查獲此類違規 418 件，罰鍰共計新台幣 1,052 萬元。實務上，漆碗或聚氨酯塗裝的椅子不成問題，但未塗裝的扁柏木枡、砧板或原木的一位一刀雕則可能需要處理。有疑慮的物品請走紅線申報，出發前也請查閱主管機關的最新規定。" } },
        { t:"p",
          text:{
            en:"The last step is the climate. Furniture made in Gifu is dried to about 8–10 per cent moisture, the level it reaches in a heated Japanese room; in Taipei, where monthly mean humidity stays between about 70 and 78 per cent all year, it will slowly take up water. Expect drawers and doors to stiffen in the first summer, unpack large pieces gradually rather than in front of an air-conditioner, and read <a href=\"care.html\">Caring for Wood</a> before the first rainy season.",
            ja:"最後の段階は気候である。岐阜でつくられた家具は、暖房の効いた日本の部屋で落ち着く含水率約8〜10パーセントに乾かされている。月平均の湿度が一年じゅう約七十〜七十八パーセントの台北では、ゆっくりと水を吸う。最初の夏には引出しや扉が固くなると思っておき、大きな品はエアコンの前で一気に開けず少しずつ荷解きし、最初の梅雨の前に<a href=\"care.html\">木の手入れ</a>を読んでおきたい。",
            zh:"最後一步是氣候。岐阜製作的家具乾燥到含水率約 8–10%，這是在開暖氣的日本房間裡會達到的水準；而台北的月平均濕度全年維持在約 70% 到 78% 之間，家具會慢慢吸收水分。第一個夏天抽屜與門可能變緊，大件家具應逐步拆封，不要在冷氣出風口前一次打開，並請在第一個梅雨季之前讀一讀<a href=\"care.html\">木器保養</a>。" } },
        { t:"figure",
          caption:{
            en:"A buyer's sequence for choosing a wooden piece, summarising this page. Schematic and editorial, not a formal standard.",
            ja:"木の品を選ぶ手順。この頁の要約であり、編集部による模式図で、公式の基準ではない。",
            zh:"挑選木製品的步驟，為本頁的摘要。此為編輯部整理的示意圖，並非正式標準。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"How to choose", ja:"選び方", zh:"如何挑選" }, per:4, bh:92,
            steps:[
              { t:{ en:"Use and lifespan", ja:"用途と寿命", zh:"用途與壽命" }, d:{ en:"Daily use or display? Kept for decades or a few years?", ja:"毎日使うか、飾るか。何十年か、数年か。", zh:"日常使用還是擺設？要用數十年還是幾年？" } },
              { t:{ en:"Material", ja:"材料", zh:"材料" }, d:{ en:"Solid, veneer or board: check edges, underside and drawers.", ja:"無垢か突板かボードか。縁、裏、引出しを見る。", zh:"實木、木皮或板材：看邊緣、底部與抽屜。" } },
              { t:{ en:"Species", ja:"樹種", zh:"樹種" }, d:{ en:"Ask the wood of top and frame; beware trade names.", ja:"天板と骨組みの木をたずね、商品名に注意。", zh:"問清桌面與骨架的木材，留意商品名。" } },
              { t:{ en:"Label", ja:"品質表示", zh:"品質標示" }, d:{ en:"Read the fixed terms for surface and finish.", ja:"表面材と表面加工の用語を読む。", zh:"讀懂表面材料與加工的固定用語。" } },
              { t:{ en:"Origin and marks", ja:"産地としるし", zh:"產地與標章" }, d:{ en:"Legality, certification, regional and craft marks.", ja:"合法性、認証、地域と伝統のしるし。", zh:"合法性、認證、產地與工藝標章。" } },
              { t:{ en:"Finish and care", ja:"仕上げと手入れ", zh:"塗裝與保養" }, d:{ en:"Oil, urethane or urushi: what upkeep will it need?", ja:"オイル、ウレタン、漆。どんな手入れが要るか。", zh:"油、聚氨酯或漆：需要怎樣的保養？" } },
              { t:{ en:"Repair and warranty", ja:"修理と保証", zh:"維修與保固" }, d:{ en:"Will the maker mend it, and for how long?", ja:"つくり手は直してくれるか。いつまでか。", zh:"製作者會修嗎？修到什麼時候？" } },
              { t:{ en:"Getting it home", ja:"持ち帰り", zh:"帶回家" }, d:{ en:"Tax refund, shipping, quarantine, climate.", ja:"免税、輸送、検疫、気候。", zh:"退稅、運送、檢疫、氣候。" } }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: National Tax Agency and Japan Tourism Agency, the refund method for tax-free sales (from 1 November 2026); Taiwan Ministry of Agriculture, regulations on quarantine of wood packaging (2008, amended 2025), reference table for travellers' plants and plant products (27 July 2022) and guidance on imported wooden products (March 2023); Customs Administration, Taipei Customs; Central Weather Administration normals for Taipei (1991–2020).",
            ja:"出典：国税庁・観光庁 免税販売制度のリファンド方式（二〇二六年十一月一日から）、台湾農業部 木質包装材の検疫規定（二〇〇八年、二〇二五年改正）・入国旅客携帯動植物の参考表（二〇二二年七月二十七日）・輸入木製品の注意事項（二〇二三年三月）、財政部関務署台北関、中央気象署 台北の平年値（一九九一〜二〇二〇年）。",
            zh:"資料來源：日本國稅廳與觀光廳，免稅銷售退稅方式（2026 年 11 月 1 日起）；農業部木質包裝材檢疫規定（2008 年，2025 年修正）、入境旅客攜帶動植物參考表（2022 年 7 月 27 日）與輸入木製品注意事項（2023 年 3 月）；財政部關務署臺北關；中央氣象署臺北平年值（1991–2020 年）。" } }
      ] },
    { t:"related",
      items:[
        { href:"furniture.html",
          why:{ en:"The Hida makers and their trademark charter.", ja:"飛騨のつくり手と商標の憲章。", zh:"飛驒的家具廠與商標憲章。" } },
        { href:"care.html", why:{ en:"Looking after what you have bought.", ja:"買った物の手入れ。", zh:"買回來之後如何保養。" } },
        { href:"finishes.html",
          why:{ en:"What the finish terms on a label mean.", ja:"表示にある仕上げの用語の意味。", zh:"標示上的塗裝用語是什麼意思。" } },
        { href:"visiting.html",
          why:{ en:"Planning a trip to Gifu's workshops.", ja:"岐阜の工房をめぐる旅の計画。", zh:"規劃岐阜工坊之旅。" } },
        { href:"taiwan.html", why:{ en:"Wood between Japan and Taiwan.", ja:"日本と台湾のあいだの木。", zh:"日本與台灣之間的木材。" } }
      ] }
  ] };

/* ---- ---------------------------------------------- home */
GIFU.pages["home"] = { kicker:{ en:"Living with Wood · 04", ja:"木と暮らす · 04", zh:"與木共處 · 04" },
  title:{ en:"Wood in the Home", ja:"住まいと木", zh:"居家與木" },
  jp:"住まい",
  lede:{
    en:"Most Japanese still live in wooden houses: more than half of all new dwellings, and more than nine in ten new detached houses, are framed in timber, and in Gifu the share is higher still. This page looks at the wooden house as it is lived in rather than as it is built — the frame that shows inside the rooms, tatami, sliding screens, the veranda and the alcove, floors and baths — at what research says about living among wooden surfaces, at the statistics and the rules that shape new houses, and at the old farmhouses and townhouses now waiting for new owners. It ends with the contrast that Taiwanese readers will feel at once: the concrete apartment in a humid city.",
    ja:"日本人の多くはいまも木の家に住んでいる。新しく建つ住宅の半分以上、新築の一戸建ての九割以上が木造であり、岐阜ではその割合がさらに高い。この頁は、木の家を建て方としてではなく住まいとして見る。部屋のなかに現れる骨組み、畳、建具、縁側と床の間、床と風呂。木の面にかこまれて暮らすことについて研究が語ること、新しい家を形づくる統計と決まり、そして新しい住み手を待つ古い民家と町家。最後に、台湾の読者ならすぐに感じる対比——湿った都市のコンクリートの集合住宅——にふれる。",
    zh:"多數日本人至今仍住在木造房屋裡：所有新建住宅的一半以上、新建獨棟住宅的九成以上都是木構造，而岐阜的比例更高。本頁不談房子怎麼蓋，而談木屋如何被居住——顯露在室內的骨架、榻榻米、拉門與紙門、緣側與床之間、地板與浴室——也談研究如何看待生活在木質表面之間，形塑新房屋的統計與法規，以及等待新主人的老民家與町家。最後談到台灣讀者一看就懂的對比：潮濕城市裡的鋼筋混凝土公寓。" },
  body:[
    { t:"section",
      id:"frame",
      title:{ en:"A frame you live inside", ja:"骨組みのなかで暮らす", zh:"住在骨架之中" },
      jp:"柱と梁",
      body:[
        { t:"p",
          text:{
            en:"In a traditional Japanese house the structure and the interior are the same thing. Posts stand exposed at the corners of rooms, beams cross overhead, and the lintels and sills of the sliding doors are part of the frame. The house is laid out on a grid, traditionally of about 910 mm (three <em>shaku</em>) or its double, the <em>ken</em> of about 1,820 mm, so that posts, doors, mats and ceiling boards all share one module and can be bought, replaced and moved between houses. In a farmhouse the thickest post, the <em>daikokubashira</em>, stands near the centre where the heaviest beams meet, and generations of hands have polished it dark. How such frames are cut and raised is told on <a href=\"joinery.html\">Joinery</a> and <a href=\"building.html\">Building in Wood</a>; here the point is that, in a Japanese house, you see and touch the timber that holds the roof up.",
            ja:"伝統的な日本の家では、構造と室内は同じものである。柱は部屋の隅にむきだしで立ち、梁は頭上を横切り、引き戸の鴨居と敷居も骨組みの一部である。家は格子にのっとって割り付けられ、伝統的には約九百十ミリ（三尺）か、その倍の約千八百二十ミリの一間を単位とする。だから柱、建具、畳、天井板が一つのモジュールを共有し、買い、取り替え、家から家へ移すことができる。農家では最も太い柱、大黒柱が、最も重い梁の集まる中央近くに立ち、何代もの手に磨かれて黒く光っている。こうした骨組みの刻みと建て方は<a href=\"joinery.html\">継手と仕口</a>と<a href=\"building.html\">木で建てる</a>で語った。ここで言いたいのは、日本の家では屋根を支える木を目で見て、手でふれるということである。",
            zh:"在傳統日本住宅裡，結構與室內是同一回事。柱子裸露在房間的轉角，樑從頭頂橫過，拉門的上檻與下檻也是骨架的一部分。房屋依格網配置，傳統上以約 910 公釐（三尺）或其兩倍、約 1,820 公釐的「一間」為單位，因此柱子、拉門、榻榻米與天花板都共用同一套模矩，可以購買、更換，甚至在房屋之間移用。農家最粗的柱子稱為「大黑柱」，立在最重的樑交會的中央附近，經過好幾代人的手摩挲而油亮發黑。這類骨架如何加工與豎立，見<a href=\"joinery.html\">榫接</a>與<a href=\"building.html\">以木建造</a>；這裡要說的是：在日本住宅中，撐起屋頂的木頭是看得見、摸得到的。" } },
        { t:"p",
          text:{
            en:"The modern house keeps the frame but usually hides it. Of the wooden dwellings started in Japan in 2024, 76.6 per cent used the post-and-beam method, <em>zairai kōhō</em>, 21.0 per cent North American two-by-four framing and 2.4 per cent factory-made wooden panels. Most post-and-beam houses now have walls lined with plasterboard on both sides of the posts, <em>ōkabe</em> construction, so that the timber disappears; the older <em>shinkabe</em> style, in which posts stand proud of clay or plaster walls, survives in Japanese-style rooms and in the work of builders who make a point of showing their wood. The Forestry Agency estimates that only about half of the timber in post-and-beam houses is domestic; posts and sills of hinoki and sugi are common, while beams are often imported Douglas fir or European glulam.",
            ja:"現代の家は骨組みを残しながら、ふつうはそれを隠す。二〇二四年に日本で着工された木造住宅のうち、76.6パーセントが在来工法（軸組工法）、21.0パーセントが北米の枠組壁工法（ツーバイフォー）、2.4パーセントが工場でつくる木質プレハブだった。在来工法の家の多くは、いまでは柱の両側を石膏ボードで覆う大壁づくりで、木は見えなくなる。柱が土壁や漆喰の壁から浮き出て見える古い真壁づくりは、和室や、木を見せることにこだわる工務店の仕事に残っている。林野庁の推計では、在来工法の住宅に使われる木材のうち国産材は半分ほどにとどまる。柱や土台にはヒノキやスギがよく使われるが、梁は輸入のベイマツやヨーロッパの集成材であることが多い。",
            zh:"現代住宅保留了骨架，卻多半把它藏起來。2024 年日本開工的木造住宅中，76.6% 採用傳統的軸組工法（在來工法），21.0% 採用北美的框組壁工法（2×4），2.4% 為工廠預製的木質組合屋。如今多數軸組工法住宅在柱子兩側都貼上石膏板，稱為「大壁」構造，木頭因此消失不見；柱子凸出於土牆或灰泥牆外的舊式「真壁」構造，則保留在和室，以及刻意展現木材的營造商作品中。林野廳估計，軸組工法住宅所用木材只有約一半是國產材；柱子與地檻常用扁柏與柳杉，樑則多為進口的花旗松或歐洲集成材。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Annual Report on Forest and Forestry in Japan (FY2024 edition), on construction methods of wooden dwellings started in 2024 and the domestic share of timber.",
            ja:"出典：林野庁 森林・林業白書（令和六年度版、すなわち二〇二四年度版）の二〇二四年着工の木造住宅の工法別割合と国産材の割合。",
            zh:"資料來源：林野廳《森林・林業白皮書》（2024 年度版），2024 年開工木造住宅的工法比例與國產材比例。" } }
      ] },
    { t:"section",
      id:"rooms",
      title:{ en:"Tatami, screens, veranda, alcove", ja:"畳、建具、縁側、床の間", zh:"榻榻米、拉門、緣側、床之間" },
      jp:"和室",
      body:[
        { t:"p",
          text:{
            en:"The Japanese-style room, <em>washitsu</em>, is where wood, grass and paper meet. Fewer new houses include one than a generation ago, but many families still want at least a single tatami room for guests, for a Buddhist altar or simply for lying on the floor, and the elements below are still made and replaced by local craftsmen in every Gifu town.",
            ja:"和室は、木と草と紙が出会う場所である。一世代前にくらべて和室のある新築は減ったが、客間として、仏壇のために、あるいはただ床に寝ころぶために、畳の部屋を少なくとも一つ望む家族はまだ多い。以下の要素は、いまも岐阜のどの町でも地元の職人がつくり、取り替えている。",
            zh:"和室是木、草與紙相會的地方。與上一代相比，設有和室的新屋變少了，但仍有許多家庭希望至少有一間榻榻米房——用來待客、安放佛壇，或只是躺在地上——以下這些構件，岐阜每個城鎮仍有在地工匠在製作與更換。" } },
        { t:"defs",
          items:[
            { term:{ en:"Tatami", ja:"畳", zh:"榻榻米" },
              jp:"畳表・畳床",
              def:{
                en:"A mat of three layers: a core, <em>tatamidoko</em>, traditionally of compressed rice straw and now often of insulation fibreboard or foam; a woven facing of soft rush, <em>igusa</em>; and cloth edging. Sizes vary by region: the Kyoto mat is about 955 × 1,910 mm, the Chūkyō mat of the Nagoya and Gifu area 910 × 1,820 mm, the Edo mat about 880 × 1,760 mm. The facing is renewed every few years by turning or replacing it.",
                ja:"三層からなる敷物である。芯の畳床は、伝統的には稲わらを締め固めたもので、いまはインシュレーションボードや発泡材も多い。その上にイグサを織った畳表、縁に畳縁をつける。大きさは地方で違い、京間は約九五五×一九一〇ミリ、名古屋・岐阜あたりの中京間は九一〇×一八二〇ミリ、江戸間は約八八〇×一七六〇ミリである。畳表は数年ごとに裏返しや表替えで新しくする。",
                zh:"由三層構成的地墊：芯材「疊床」傳統上以壓實的稻草製成，如今常改用軟質纖維板或發泡材；表面是燈心草（藺草）編織的「疊表」；邊緣則包上布條。尺寸因地區而異：京間約 955 × 1,910 公釐，名古屋與岐阜一帶的中京間為 910 × 1,820 公釐，江戶間約 880 × 1,760 公釐。疊表每隔幾年翻面或更換一次。" } },
            { term:{ en:"Shōji", ja:"障子", zh:"障子" },
              jp:"障子",
              def:{
                en:"A light sliding screen of thin wooden bars, usually sugi or hinoki, covered on one side with paper. It diffuses daylight, lets a room breathe and can be lifted out of its track. Mino, the washi town of Gifu, has long been known for shōji paper (see <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>).",
                ja:"スギやヒノキの細い桟を組み、片面に紙を貼った軽い引き戸である。日の光をやわらげ、部屋に息をさせ、溝から外すこともできる。岐阜の和紙の町、美濃は古くから障子紙で知られてきた（<a href=\"paper.html\">和紙・提灯・和傘</a>を参照）。",
                zh:"以柳杉或扁柏細木條組成格框、單面糊紙的輕巧拉門。它柔化日光、讓房間透氣，也可從軌道上卸下。岐阜的和紙之鄉美濃，自古以障子紙聞名（見<a href=\"paper.html\">和紙、燈籠與和傘</a>）。" } },
            { term:{ en:"Fusuma", ja:"襖", zh:"襖" },
              jp:"襖",
              def:{
                en:"An opaque sliding panel: a wooden lattice core covered with several layers of paper, finished with decorative paper or cloth and a lacquered or wooden frame. Removing the fusuma turns two or three rooms into one hall for a funeral or a festival.",
                ja:"不透明な引き戸で、木の格子の骨に紙を何層も貼り、上張りの紙や布と、漆塗りか木地の縁で仕上げる。襖を外せば、二間三間が葬式や祭りのための一つの広間になる。",
                zh:"不透光的拉門：以木格為骨，糊上多層紙，再貼上裝飾紙或布，配上漆框或原木框。把襖卸下，兩三個房間就連成一間大廳，可辦喪事或節慶。" } },
            { term:{ en:"Engawa", ja:"縁側", zh:"緣側" },
              jp:"縁側",
              def:{
                en:"A board-floored corridor or veranda between the rooms and the garden, under deep eaves: a place for sitting in the sun, drying persimmons and receiving neighbours without inviting them in. In snowy Hida it is often enclosed behind glass doors.",
                ja:"部屋と庭のあいだ、深い軒の下の板敷きの廊下や縁である。日なたで座り、柿を干し、近所の人を家に上げずに迎える場所である。雪の多い飛騨では、ガラス戸で囲われることが多い。",
                zh:"位於房間與庭院之間、深簷之下的木板走廊或簷廊：可以坐著曬太陽、晾柿子，或不必請鄰居進屋就能招呼他們。在多雪的飛驒，常以玻璃門圍起。" } },
            { term:{ en:"Tokonoma", ja:"床の間", zh:"床之間" },
              jp:"床柱",
              def:{
                en:"The alcove of the best room, where a scroll and flowers are displayed. Its post, the <em>tokobashira</em>, is chosen for character — a polished sugi log, a gnarled trunk, a rare species — and is often the single most expensive piece of timber in the house.",
                ja:"いちばんよい部屋のくぼみで、掛け軸と花を飾る。その柱、床柱は個性で選ばれる——磨いたスギの丸太、ねじれた幹、めずらしい樹種——家じゅうでいちばん高価な一本であることも多い。",
                zh:"最好的房間裡的壁龕，用來掛卷軸、插花。它的柱子「床柱」依個性挑選——磨光的柳杉圓木、盤曲的樹幹或罕見的樹種——往往是整棟房子裡最昂貴的一根木料。" } },
            { term:{ en:"Hinoki bath", ja:"檜風呂", zh:"扁柏浴桶" },
              jp:"檜風呂",
              def:{
                en:"A tub of hinoki boards, prized for its scent and warmth and for the wood's resistance to decay. It asks for daily care: rinse, ventilate and let it dry, and do not leave it empty in dry sun, or the boards shrink and open (see <a href=\"hinoki.html\">Hinoki</a>).",
                ja:"ヒノキの板でつくった浴槽で、香りとぬくもり、そして木の腐りにくさで好まれる。毎日の手入れが要る。流し、換気し、乾かす。ただし乾いた日なたに空のまま置くと板が縮んですきまが開く（<a href=\"hinoki.html\">ヒノキ</a>を参照）。",
                zh:"以扁柏板製成的浴桶，因香氣、溫潤與木材耐腐而受珍視。它需要每天照顧：沖洗、通風、晾乾，但別空著放在乾燥的陽光下，否則木板收縮會裂出縫隙（見<a href=\"hinoki.html\">日本扁柏</a>）。" } }
          ] },
        { t:"p",
          text:{
            en:"The decline of the tatami room can be read in the statistics of its rush. Japan produced 26.94 million tatami facings in 1996 and imported 11.37 million, so that 70 per cent of supply was domestic. In 2025 domestic production was 1.03 million, against imports of 4.58 million, and the domestic share had fallen to 18 per cent; total supply has been below ten million facings a year since 2021. Almost all domestic rush now comes from Kumamoto prefecture in Kyūshū, where the number of rush farmers halved from 605 in 2013 to 296 in 2023. Most of the imports come from China. A Gifu tatami maker who still sews mats by hand is therefore, very often, sewing Kumamoto or Chinese rush over a board core — but the room it makes is the same.",
            ja:"畳の部屋の衰えは、イグサの統計に読みとれる。日本は一九九六年に畳表を二六九四万枚生産し、一一三七万枚を輸入していた。供給の七割が国産だった。二〇二五年には国内生産は一〇三万枚、輸入は四五八万枚で、国産の割合は十八パーセントに落ちた。総供給は二〇二一年から年一千万枚を下回っている。国産のイグサはいまほとんどすべてが九州の熊本県産で、その生産農家は二〇一三年の六〇五戸から二〇二三年の二九六戸へと半減した。輸入の多くは中国からである。だから、いまも手で畳を縫う岐阜の畳屋も、多くの場合は熊本か中国のイグサをボードの芯に縫いつけている——それでも、できあがる部屋は同じである。",
            zh:"榻榻米房間的衰退，可從藺草的統計看出。1996 年日本生產疊表 2,694 萬張，進口 1,137 萬張，國產占供應的 70%。到了 2025 年，國內生產降為 103 萬張，進口 458 萬張，國產比例跌至 18%；總供應量自 2021 年起每年都低於 1,000 萬張。如今國產藺草幾乎全數來自九州的熊本縣，當地藺草農戶從 2013 年的 605 戶減半為 2023 年的 296 戶。進口多來自中國。因此，岐阜至今仍以手工縫製榻榻米的師傅，多半是把熊本或中國的藺草縫在板材芯上——但它構成的房間依然相同。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Agriculture, Forestry and Fisheries, “The situation of igusa (tatami facings)” (January 2026); regional tatami sizes as commonly defined by the tatami trade.",
            ja:"出典：農林水産省「いぐさ（畳表）をめぐる事情」（二〇二六年一月）。畳の地方ごとの寸法は畳業界の一般的な定義による。",
            zh:"資料來源：日本農林水產省〈藺草（疊表）相關情勢〉（2026 年 1 月）；各地榻榻米尺寸依業界一般定義。" } }
      ] },
    { t:"section",
      id:"floors",
      title:{ en:"Floors underfoot", ja:"足もとの床", zh:"腳下的地板" },
      jp:"フローリング",
      body:[
        { t:"p",
          text:{
            en:"Japanese take their shoes off at the door, and so the floor of a Japanese home is touched by bare feet and socks all day, and lain on, sat on and slept on. That makes the choice of floor more personal than in most countries. The practical differences between solid boards and composite flooring — a plywood base with a thin face of sliced veneer or a sawn lamella — are set out on <a href=\"care.html\">Caring for Wood</a>: solid boards can be sanded again and again and feel warmer, move more with the seasons and dent more easily if they are soft sugi or hinoki; composite boards are flatter and more stable, suit underfloor heating better and are the usual choice in new building, but deep damage means replacing boards. In apartment buildings the choice is further limited by the management rules, which commonly require flooring with a certified rating for impact sound, so that footsteps and dropped toys do not carry to the flat below.",
            ja:"日本人は玄関で靴を脱ぐ。だから日本の家の床は一日じゅう素足と靴下でふれられ、寝ころび、座り、眠る場所になる。そのため床選びは、たいていの国より個人的なものになる。無垢板と複合フローリング——合板の台板に薄い突板か挽板を貼ったもの——の実際の違いは<a href=\"care.html\">木の手入れ</a>で述べた。無垢板は何度でも研ぎなおせてあたたかく感じるが、季節による動きが大きく、柔らかいスギやヒノキならへこみやすい。複合フローリングは平らで安定し、床暖房に向き、新築の主流だが、深い傷は張り替えになる。集合住宅では、さらに管理規約が選択を狭める。規約はふつう、足音や落としたおもちゃの音が下の住戸へ伝わらないよう、床衝撃音の性能等級が認められたフローリングを求める。",
            zh:"日本人在玄關脫鞋，所以日本住家的地板整天被赤腳與襪子踩踏，也是躺、坐、睡的地方。這讓地板的選擇比多數國家更為私人。實木地板與複合地板——以合板為底、表面貼薄木皮或鋸切木片——的實際差異，已在<a href=\"care.html\">木器保養</a>中說明：實木地板可一再砂磨翻新、腳感較暖，但隨季節伸縮較大，若是柔軟的柳杉或扁柏也較易壓出凹痕；複合地板較平整穩定，較適合地板暖氣，是新建住宅的主流，但深層損傷就得更換地板。在集合住宅裡，管理規約還會進一步限制選擇：通常要求地板具備經認可的樓板衝擊音等級，免得腳步聲與掉落玩具的聲音傳到樓下。" } },
        { t:"p",
          text:{
            en:"The warmth of wood underfoot is not imagination. Sugi conducts heat at about 0.087 W/m·K, roughly one-twelfth the figure for concrete, so a bare foot on a sugi floor loses heat slowly and the surface does not feel cold. In a Japanese experiment published in 1967, Yamamoto and colleagues measured the skin temperature on the top of the foot while subjects stood on concrete, vinyl tile and wood: it fell fastest on concrete, then on vinyl tile, and most slowly on wood. At a room temperature of 22 °C the differences were small; at 18 °C they became pronounced — which is to say they matter most in exactly the unheated winter rooms of an old Gifu house. The lighter the wood, the warmer it feels: low-density sugi and hinoki are warmer to the touch than oak or maple of nearly twice the density, and softer, which is why they are favoured for bedrooms and children's rooms even though they dent.",
            ja:"木の床の足ざわりのあたたかさは気のせいではない。スギの熱伝導率は約0.087 W/m·Kで、コンクリートのおよそ十二分の一である。だからスギの床に素足で立っても熱はゆっくりとしか逃げず、表面は冷たく感じない。一九六七年に発表された日本の実験で、山本らは、被験者がコンクリート、ビニルタイル、木の上に立ったときの足の甲の皮膚温を測った。下がり方はコンクリートがいちばん速く、ついでビニルタイル、木がいちばん遅かった。室温二十二度では差は小さかったが、十八度では大きくなった。つまり差がいちばん効くのは、まさに岐阜の古い家の暖房のない冬の部屋である。木は軽いほどあたたかく感じる。比重の低いスギやヒノキは、その倍近い比重のナラやカエデよりふれてあたたかく、やわらかい。へこむのを承知で寝室や子ども部屋に好まれるのはそのためである。",
            zh:"木地板腳感溫暖，並不是錯覺。柳杉的熱傳導率約 0.087 W/m·K，大約只有混凝土的十二分之一，所以赤腳踩在柳杉地板上，熱量流失緩慢，表面也不覺得冰冷。在 1967 年發表的一項日本實驗中，山本等人測量受試者站在混凝土、塑膠地磚與木材上時腳背的皮膚溫度：混凝土上下降最快，塑膠地磚其次，木材最慢。室溫 22°C 時差異很小；到了 18°C 差異就變得明顯——也就是說，差別最要緊的，正是岐阜老房子裡沒有暖氣的冬季房間。木材越輕，摸起來越暖：低密度的柳杉與扁柏，比密度將近兩倍的橡木或楓木觸感更溫暖，也更柔軟，所以即使容易凹陷，仍常被用在臥室與兒童房。" } },
        { t:"tiny",
          text:{
            en:"Sources: Yamamoto et al. (1967), Mokuzai Kōgyō (Wood Industry) 22(1), as summarised by the timber merchant Maruhon; thermal conductivity of sugi as given in the same source.",
            ja:"出典：山本ほか（一九六七年）『木材工業』二十二巻一号（木材商マルホンによる紹介）、同じ出典によるスギの熱伝導率。",
            zh:"資料來源：山本等（1967 年），《木材工業》第 22 卷第 1 期（經木材商マルホン整理介紹）；柳杉熱傳導率出自同一資料。" } }
      ] },
    { t:"section",
      id:"surfaces",
      title:{ en:"Living among wooden surfaces", ja:"木の面にかこまれて暮らす", zh:"生活在木質表面之間" },
      jp:"調湿",
      body:[
        { t:"p",
          text:{
            en:"Japanese builders and timber merchants often say that a wooden room “breathes”, taking up moisture in the rainy season and giving it back in winter. The claim has a real basis. Wood exchanges water with the air until it reaches a moisture content set by the humidity (see <a href=\"moisture.html\">Wood &amp; Water</a>), and a large area of bare wood therefore acts as a slow sponge. In an experiment reported in 1977, researchers at Kyoto University's Wood Research Institute compared a room lined with plywood and one finished in vinyl: the wooden room held close to 50 per cent relative humidity while the humidity outside rose and fell, where the vinyl room followed the outside air. The effect is widely quoted in Japan, and it is physically sound. Its size, however, depends on how much bare wood the room contains, and it is easy to exaggerate.",
            ja:"日本の工務店や材木商は、木の部屋は「呼吸する」とよく言う。梅雨には湿気を吸い、冬にはそれを返すというのである。この言い分には本当の根拠がある。木は、湿度で決まる含水率に達するまで空気と水をやりとりする（<a href=\"moisture.html\">木と水分</a>を参照）。だから広い面積の素の木は、ゆっくりしたスポンジとしてはたらく。一九七七年に報告された実験で、京都大学木材研究所の研究者は、合板を張った部屋とビニルで仕上げた部屋をくらべた。外の湿度が上下しても木の部屋は相対湿度五十パーセント近くを保ち、ビニルの部屋は外気についていった。この効果は日本で広く引かれ、物理的にも正しい。ただし大きさは部屋にどれだけ素の木があるかによって決まり、誇張されやすい。",
            zh:"日本的營造商與木材商常說，木造房間會「呼吸」：梅雨季吸收濕氣，冬天再釋放出來。這說法有真實的根據。木材會與空氣交換水分，直到達到由濕度決定的含水率（見<a href=\"moisture.html\">木與水分</a>），因此大面積的裸木就像一塊緩慢的海綿。在 1977 年發表的一項實驗中，京都大學木材研究所的研究者比較了貼合板的房間與貼塑膠壁材的房間：室外濕度起伏時，木造房間的相對濕度維持在接近 50%，塑膠壁材的房間則跟著外氣變化。這個效果在日本廣被引用，物理上也站得住腳。不過其大小取決於房間裡有多少裸露的木材，也很容易被誇大。" } },
        { t:"p",
          text:{
            en:"A rough calculation shows the scale. An eight-mat room of the Chūkyō size has about 13 m² of floor and, with a ceiling at 2.4 m, about 32 m³ of air. At 25 °C, raising its humidity from 50 to 70 per cent adds roughly 150 grams of water vapour. Wood in equilibrium with those two humidities differs by about four points of moisture content — 9.2 against 13.1 per cent in the Forest Products Laboratory's standard table — so absorbing 150 grams means changing the moisture content of about 3.8 kilograms of wood. If only the outer millimetre of the surface responds within a day, that is the surface layer of about ten square metres of bare sugi: the ceiling of the room, or its floor. A room lined in bare or oiled wood can therefore smooth the daily swings of humidity noticeably; a room with one wooden table, or with wood sealed under thick urethane, which slows the exchange, cannot. Against the moisture released by cooking, bathing, drying laundry and breathing, and the drying power of an air-conditioner, wood is a buffer rather than a control.",
            ja:"大ざっぱな計算で規模がわかる。中京間の八畳間は床面積約十三平方メートル、天井高二・四メートルなら空気は約三十二立方メートルある。二十五度でその湿度を五十から七十パーセントに上げると、水蒸気がおよそ百五十グラム加わる。その二つの湿度で平衡した木の含水率の差は約四ポイント——アメリカ林産物研究所の標準的な表で9.2対13.1パーセント——だから百五十グラムを吸うには、約三・八キロの木の含水率が変わらねばならない。一日のうちに表面の一ミリだけが応じるとすれば、それは素のスギ約十平方メートルの表層、つまりその部屋の天井か床にあたる。素の木かオイル仕上げの木で内装した部屋は、一日の湿度の振れをはっきりやわらげられる。木の食卓が一つあるだけの部屋や、交換を遅くする厚いウレタンで木を封じた部屋では、そうはいかない。料理、入浴、洗濯物の室内干し、呼吸が出す水分や、エアコンの除湿の力にくらべれば、木は制御ではなく緩衝である。",
            zh:"粗略計算一下就知道規模。中京間尺寸的八疊房間，地板面積約 13 平方公尺，天花板高 2.4 公尺的話，空氣約有 32 立方公尺。在 25°C 下，把濕度從 50% 提高到 70%，大約會增加 150 公克水蒸氣。與這兩種濕度平衡的木材，含水率相差約四個百分點——美國林產品研究所標準表中為 9.2% 對 13.1%——所以要吸收 150 公克，得讓約 3.8 公斤木材的含水率改變。如果一天之內只有表面 1 公釐會反應，那就相當於約 10 平方公尺裸露柳杉的表層：也就是這個房間的天花板，或地板。以裸木或油性處理木材裝修的房間，確實能明顯緩和一天之中的濕度起伏；只有一張木桌的房間，或木材被厚厚的聚氨酯封住（會減慢水分交換）的房間，就做不到。與烹飪、洗澡、室內晾衣和呼吸釋出的水分，以及冷氣的除濕能力相比，木材是緩衝，而非調控。" } },
        { t:"p",
          text:{
            en:"Sound is the third quality people notice. A traditional room combines surfaces that behave very differently: tatami and fusuma absorb, paper shōji let sound through, and wooden boards and posts reflect and scatter it, so that a tatami room sounds quiet and close without being dead. The same lightness that makes a wooden house pleasant makes it poor at stopping noise: a timber floor transmits footsteps to the room below far more readily than a concrete slab, which is one of the main technical hurdles for wooden apartment buildings and the reason flat-dwellers are asked to use rated flooring. Claims that go further — that wood lowers stress, improves sleep or protects children from colds — belong to a different kind of evidence and are weighed on <a href=\"health.html\">Forests &amp; the Body</a>.",
            ja:"人が気づく三つめの性質は音である。伝統的な部屋は、ふるまいのまったく違う面を組み合わせる。畳と襖は音を吸い、紙の障子は音を通し、板と柱は音を反射して散らす。だから畳の部屋は、死んだ響きにならずに静かで親密に聞こえる。木の家を心地よくする同じ軽さが、音を止めるには弱い。木の床は、コンクリートのスラブよりはるかに足音を下の部屋へ伝えやすい。これは木造の集合住宅の大きな技術的な壁の一つであり、集合住宅の住人が等級のあるフローリングを求められる理由でもある。さらに踏みこんだ主張——木がストレスを下げる、眠りをよくする、子どもを風邪から守る——は別の種類の証拠に属し、<a href=\"health.html\">森と身体</a>で検討する。",
            zh:"人們注意到的第三種性質是聲音。傳統房間結合了性質迥異的表面：榻榻米與襖吸音，紙糊的障子讓聲音穿透，木板與柱子則反射並散射聲音，所以榻榻米房間聽起來安靜而親近，卻不會死沉。讓木屋舒適的那份輕盈，也讓它不善於阻隔噪音：木地板比混凝土樓板更容易把腳步聲傳到樓下，這是木造集合住宅主要的技術難題之一，也是公寓住戶被要求使用具等級地板的原因。更進一步的說法——木材能減壓、改善睡眠、保護孩子不感冒——屬於另一類證據，將在<a href=\"health.html\">森林與身體</a>中評估。" } },
        { t:"tiny",
          text:{
            en:"Sources: Kyoto University Wood Research Institute experiment (1977), as summarised by Shinrin-Ringyō Gakushūkan; equilibrium moisture contents from the US Forest Products Laboratory, Wood Handbook (1999), table 3-4; room calculation by the editors.",
            ja:"出典：京都大学木材研究所の実験（一九七七年、森林・林業学習館による紹介）、平衡含水率はアメリカ林産物研究所『ウッドハンドブック』（一九九九年）表3-4、部屋の計算は編集部による。",
            zh:"資料來源：京都大學木材研究所實驗（1977 年，經森林・林業學習館整理介紹）；平衡含水率引自美國林產品研究所《木材手冊》（1999 年）表 3-4；房間計算由編輯部進行。" } }
      ] },
    { t:"section",
      id:"numbers",
      title:{ en:"How many houses are wooden?", ja:"木造の家はどれほどあるか", zh:"木造住宅有多少？" },
      jp:"住宅着工統計",
      body:[
        { t:"p",
          text:{
            en:"Japan's Ministry of Land, Infrastructure, Transport and Tourism counts every new dwelling when construction starts, by structure and tenure. The long view is of a shrinking market in which wood holds its ground. New housing starts fell from about 1.29 million in fiscal 2006 to about 780,000 in fiscal 2009, after the global financial crisis, recovered to about 990,000 in fiscal 2013 before the consumption-tax rise of April 2014, and have since drifted down with the population to about 800,000–820,000. Wooden dwellings fell far less, from about 560,000 to about 470,000, so that the wooden share, which the ministry describes as flat since fiscal 2009, reached 57.3 per cent in fiscal 2024. In calendar 2024 the share was 57.1 per cent, and among detached houses it was 91.9 per cent: almost every Japanese family that builds its own house builds in wood. The stock tells an older story. In the 2023 Housing and Land Survey, 54.0 per cent of occupied dwellings were wooden, down from 68.1 per cent in 1993, as old wooden houses are demolished and concrete apartment blocks added.",
            ja:"国土交通省は、新しい住宅を着工の時点で構造別、利用関係別に数えている。長い目で見れば、縮む市場のなかで木造が持ちこたえている姿である。新設住宅着工戸数は二〇〇六年度の約百二十九万戸から、世界金融危機のあとの二〇〇九年度には約七十八万戸に落ち、二〇一四年四月の消費税引き上げを前にした二〇一三年度に約九十九万戸まで戻り、その後は人口とともに約八十万〜八十二万戸へと下がってきた。木造の減り方はずっと小さく、約五十六万戸から約四十七万戸へで、同省が二〇〇九年度以降横ばいとする木造率は、二〇二四年度に57.3パーセントとなった。暦年の二〇二四年では57.1パーセント、一戸建てに限れば91.9パーセントである。自分の家を建てる日本の家族は、ほとんどが木で建てる。住宅の総数は、もっと古い物語を語る。二〇二三年の住宅・土地統計調査では、居住世帯のある住宅の54.0パーセントが木造で、一九九三年の68.1パーセントから下がった。古い木造の家が取り壊され、鉄筋コンクリートの集合住宅が加わっていくからである。",
            zh:"日本國土交通省在每一戶新住宅開工時，按結構與用途加以統計。長期來看，這是一個逐漸萎縮、而木造守住陣地的市場。新建住宅開工戶數從 2006 年度的約 129 萬戶，在全球金融海嘯後降到 2009 年度的約 78 萬戶，2014 年 4 月消費稅調漲前的 2013 年度回升到約 99 萬戶，之後隨人口減少下滑到約 80 萬至 82 萬戶。木造住宅的減幅小得多，從約 56 萬戶降到約 47 萬戶，因此該省形容自 2009 年度起「持平」的木造率，在 2024 年度達到 57.3%。以曆年計，2024 年為 57.1%，而獨棟住宅則高達 91.9%：幾乎每個自己蓋房子的日本家庭都選擇木造。住宅存量則訴說更早的故事。在 2023 年住宅・土地統計調查中，有人居住的住宅有 54.0% 為木造，低於 1993 年的 68.1%，因為老木屋陸續拆除，鋼筋混凝土公寓不斷增加。" } },
        { t:"figure",
          caption:{
            en:"New housing starts in Japan by fiscal year (April–March), FY2005–FY2024, all dwellings and wooden dwellings, in thousands. Source: Ministry of Land, Infrastructure, Transport and Tourism, housing starts statistics, as charted in “Trends in new wooden housing starts” (values rounded in the source to the nearest 10,000).",
            ja:"日本の新設住宅着工戸数（年度、二〇〇五〜二〇二四年度）、総数と木造、千戸。出典：国土交通省 住宅着工統計（「木造住宅の新設着工戸数の推移」の図による。出典で一万戸単位に丸められている）。",
            zh:"日本新建住宅開工戶數（會計年度，4 月至翌年 3 月，2005–2024 年度），總數與木造，單位千戶。資料來源：國土交通省住宅開工統計，依〈木造住宅新建開工戶數推移〉圖表（原始資料已四捨五入至萬戶）。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"New dwellings and wooden dwellings", ja:"新設住宅と木造住宅", zh:"新建住宅與木造住宅" },
            unit:{ en:"thousand dwellings", ja:"千戸", zh:"千戶" }, x0:2005, x1:2024, y0:0, y1:1400, tick:200, endLabels:true,
            xt:[2005,2008,2011,2014,2017,2020,2024],
            marks:[ { x:2009, t:{ en:"Financial crisis", ja:"金融危機", zh:"金融海嘯" } }, { x:2014, t:{ en:"Tax rise", ja:"消費税増税", zh:"消費稅調漲" } } ],
            series:[
              { n:{ en:"All new dwellings", ja:"新設住宅（総数）", zh:"新建住宅（總數）" }, pts:[[2005,1250],[2006,1290],[2007,1040],[2008,1040],[2009,780],[2010,820],[2011,840],[2012,890],[2013,990],[2014,880],[2015,920],[2016,970],[2017,950],[2018,950],[2019,880],[2020,810],[2021,870],[2022,860],[2023,800],[2024,820]] },
              { n:{ en:"Wooden dwellings", ja:"うち木造", zh:"其中木造" }, pts:[[2005,550],[2006,560],[2007,510],[2008,490],[2009,440],[2010,460],[2011,470],[2012,490],[2013,550],[2014,490],[2015,510],[2016,550],[2017,540],[2018,540],[2019,510],[2020,470],[2021,500],[2022,470],[2023,450],[2024,470]], dash:"5 4" }
            ],
            note:{ en:"The wooden share was 57.3% in FY2024.", ja:"二〇二四年度の木造率は57.3パーセント。", zh:"2024 年度木造率為 57.3%。" } }); } },
        { t:"p",
          text:{
            en:"Gifu is a prefecture of owner-occupiers and detached houses, and wood dominates even more strongly. In calendar 2024, 8,887 new dwellings were started, 6.9 per cent fewer than the 9,550 of 2023: 4,727 for owner-occupation, 2,740 for rent and 1,376 for sale, of which only 105 were flats in condominium blocks. Of the total, 7,079 were wooden — 79.7 per cent, against about 74 per cent a year earlier. The jump does not mean that more wooden houses were built: wooden starts fell by 0.4 per cent, while non-wooden starts fell by 25.9 per cent as condominium building collapsed. It does show where the prefecture's building timber goes, and why Gifu's forest policy concentrates on the family house.",
            ja:"岐阜は持ち家と一戸建ての県であり、木造の優位はいっそう強い。暦年の二〇二四年に着工した新設住宅は八八八七戸で、二〇二三年の九五五〇戸より6.9パーセント少なかった。持家四七二七戸、貸家二七四〇戸、分譲住宅一三七六戸で、分譲のうちマンションはわずか一〇五戸だった。総数のうち七〇七九戸が木造で、79.7パーセントにあたる。前年は約七十四パーセントだった。この跳ね上がりは木造の家が増えたことを意味しない。木造の着工は0.4パーセント減り、マンション建設が落ちこんで非木造が25.9パーセント減ったのである。それでも、県の建築用材がどこへ行くか、そして岐阜の森林政策がなぜ家族の家に力を注ぐかを示している。",
            zh:"岐阜是一個以自有住宅與獨棟住宅為主的縣，木造的優勢更為明顯。2024 年（曆年）開工的新建住宅為 8,887 戶，比 2023 年的 9,550 戶少了 6.9%：自住 4,727 戶、出租 2,740 戶、出售 1,376 戶，其中集合住宅（公寓大樓）僅 105 戶。總數中有 7,079 戶為木造，占 79.7%，前一年約為 74%。這一跳升並不代表木屋蓋得更多：木造開工減少了 0.4%，非木造則因公寓大樓興建驟減而少了 25.9%。但它確實說明了縣內建築用材的去向，以及岐阜的森林政策為何聚焦於家庭住宅。" } },
        { t:"figure",
          caption:{
            en:"Wooden share of dwellings, per cent: new dwellings started in 2024 in Gifu and in Japan, new detached houses in Japan in 2024, and the occupied housing stock in 1993 and 2023. Sources: Gifu Prefecture, housing starts 2024 (share calculated by the editors from 7,079 wooden of 8,887); Forestry Agency, Annual Report on Forest and Forestry in Japan (FY2024 edition); Statistics Bureau of Japan, 2023 Housing and Land Survey.",
            ja:"住宅に占める木造の割合（パーセント）。二〇二四年に着工した岐阜県と全国の新設住宅、二〇二四年の全国の新築一戸建て、一九九三年と二〇二三年の居住世帯のある住宅。出典：岐阜県 二〇二四年の住宅着工状況（八八八七戸中七〇七九戸から編集部が算出）、林野庁 森林・林業白書（令和六年度版）、総務省統計局 二〇二三年住宅・土地統計調査。",
            zh:"住宅中木造所占比例（%）：2024 年岐阜縣與全日本開工的新建住宅、2024 年全日本新建獨棟住宅，以及 1993 年與 2023 年有人居住的住宅存量。資料來源：岐阜縣 2024 年住宅開工狀況（由編輯部依 8,887 戶中 7,079 戶計算）；林野廳《森林・林業白皮書》（2024 年度版）；總務省統計局 2023 年住宅・土地統計調查。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"How wooden is Japanese housing?", ja:"日本の住宅はどれほど木造か", zh:"日本住宅的木造比例" },
            unit:"%", dec:1, max:100, labelW:300,
            items:[
              { n:{ en:"Japan, new detached houses, 2024", ja:"全国 新築一戸建て（二〇二四年）", zh:"全日本 新建獨棟住宅（2024 年）" }, v:91.9, f:"#EADCC1" },
              { n:{ en:"Gifu, all new dwellings, 2024", ja:"岐阜県 新設住宅（二〇二四年）", zh:"岐阜縣 新建住宅（2024 年）" }, v:79.7, f:"#EADCC1" },
              { n:{ en:"Japan, all new dwellings, 2024", ja:"全国 新設住宅（二〇二四年）", zh:"全日本 新建住宅（2024 年）" }, v:57.1 },
              { n:{ en:"Japan, housing stock, 1993", ja:"全国 住宅ストック（一九九三年）", zh:"全日本 住宅存量（1993 年）" }, v:68.1, f:"#E0E6DB" },
              { n:{ en:"Japan, housing stock, 2023", ja:"全国 住宅ストック（二〇二三年）", zh:"全日本 住宅存量（2023 年）" }, v:54.0, f:"#E0E6DB" }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Land, Infrastructure, Transport and Tourism, housing starts statistics; Forestry Agency, Annual Report on Forest and Forestry in Japan (FY2024 edition); Gifu Prefecture, building guidance division, “Housing starts in Gifu, 2024”; Statistics Bureau of Japan, 2023 Housing and Land Survey, summary of results.",
            ja:"出典：国土交通省 住宅着工統計、林野庁 森林・林業白書（令和六年度版）、岐阜県建築指導課「岐阜県の住宅着工状況（令和六年、すなわち二〇二四年）」、総務省統計局 令和五年（二〇二三年）住宅・土地統計調査 結果の概要。",
            zh:"資料來源：國土交通省住宅開工統計；林野廳《森林・林業白皮書》（2024 年度版）；岐阜縣建築指導課〈岐阜縣住宅開工狀況（2024 年）〉；總務省統計局 2023 年住宅・土地統計調查結果概要。" } }
      ] },
    { t:"section",
      id:"rules",
      title:{ en:"New rules, local timber", ja:"新しい決まりと地元の木", zh:"新法規與在地木材" },
      jp:"四号特例・ぎふの木",
      body:[
        { t:"p",
          text:{
            en:"April 2025 brought the largest change in decades to the paperwork of building a wooden house. Until then, under the so-called “No. 4 exemption”, <em>yongō tokurei</em>, small wooden buildings — houses of up to two storeys and 500 m² — designed by a registered architect could pass building confirmation without the authorities reviewing their structural calculations. From 1 April 2025, together with the rule that every new building must meet the national energy-efficiency standard, the exemption was narrowed. Two-storey wooden houses, and single-storey ones of more than 200 m², now form a new category 2 and must submit structural and energy documents for review; only single-storey buildings of up to 200 m², the new category 3, keep the simplified procedure. At the same time the requirements for bracing walls and post sizes were revised to allow for modern houses made heavier by insulation, solar panels and better windows. The change also reaches old houses: a large-scale repair or remodelling of a two-storey wooden house, which could previously proceed without building confirmation, now needs it.",
            ja:"二〇二五年四月、木の家を建てる手続きに数十年来でいちばん大きな変化が来た。それまでは、いわゆる「四号特例」により、小規模な木造建築——二階建て以下、延べ面積五百平方メートル以下の住宅など——は、建築士が設計すれば、建築確認で構造の審査を省くことができた。二〇二五年四月一日から、すべての新築に国の省エネ基準への適合を義務づける決まりとあわせて、この特例は縮小された。木造二階建てと、延べ面積二百平方メートルを超える木造平屋は新たな「新二号建築物」となり、構造と省エネの図書を出して審査を受けねばならない。簡略な手続きが残るのは、延べ面積二百平方メートル以下の平屋、「新三号建築物」だけである。同時に、断熱材、太陽光パネル、性能のよい窓で重くなった現代の家に合わせて、壁量と柱の小径の基準も見直された。変化は古い家にも及ぶ。木造二階建ての家の大規模な修繕や模様替は、これまで建築確認なしで進められたが、いまは確認が要る。",
            zh:"2025 年 4 月，蓋木造房屋的行政程序迎來數十年來最大的變革。在此之前，依所謂的「四號特例」，小規模木造建築——兩層以下、總樓地板面積 500 平方公尺以下的住宅等——只要由建築師設計，建築確認時可免審查結構計算。自 2025 年 4 月 1 日起，配合所有新建建築都必須符合國家節能標準的規定，這項特例被縮小：木造兩層住宅，以及總樓地板面積超過 200 平方公尺的木造平房，列為新的「新二號建築物」，必須提交結構與節能圖說接受審查；只有 200 平方公尺以下的平房，即「新三號建築物」，保留簡化程序。同時，為了因應因隔熱材、太陽能板與高性能窗戶而變重的現代住宅，耐力壁數量與柱子最小斷面的標準也一併修訂。這項變革也波及老房子：木造兩層住宅的大規模修繕或改裝，過去不必申請建築確認，如今則必須申請。" } },
        { t:"p",
          text:{
            en:"Gifu, meanwhile, pays families to build with its own trees. Under the prefecture's “Building a home with Gifu wood” programme, a house that uses Gifu certified timber (see <a href=\"buying.html\">Buying Wooden Things</a>) and is built by one of the builders registered with the scheme can receive a grant. In fiscal 2026 new houses in the prefecture could receive from ¥150,000 up to ¥320,000; new houses elsewhere in Japan built with Gifu timber ¥150,000–200,000; and renovations and refurbishments in the prefecture, the renovation type introduced that year, ¥40,000 up to ¥160,000. Grants fall to 55 per cent of these amounts when combined with national subsidies. The quotas were 220 new houses in the prefecture plus 10 reserved for people moving to Gifu, 60 outside it, and 25 renovations plus 5 for newcomers, and registration for the year closed on 30 September 2026. Measured against the roughly 7,000 wooden houses started in Gifu each year, the scheme reaches only a few per cent of them; its larger role is to keep a chain of forest owners, sawmills, precut plants and local builders — among them firms like the Kashimo builder described on <a href=\"building.html\">Building in Wood</a> — trading in local timber.",
            ja:"一方、岐阜は自分の県の木で建てる家族にお金を出している。県の「ぎふの木で家づくり支援事業」では、ぎふ証明材（<a href=\"buying.html\">木の物を選ぶ</a>を参照）を使い、制度に登録した協力工務店が建てる家が補助を受けられる。二〇二六年度には、県内の新築が十五万円から最大三十二万円、県産材で建てる県外の新築が十五万〜二十万円、そしてこの年に新設された県内リノベーションタイプと県内改修タイプが四万円から最大十六万円だった。国の補助金とあわせて使う場合は、これらの額の五十五パーセントになる。枠は県内新築が二百二十棟と移住者向け十棟、県外が六十棟、リノベーションと改修が二十五棟と移住者向け五棟で、この年度の申請枠の登録は二〇二六年九月三十日に締め切られた。岐阜で毎年着工する約七千戸の木造住宅にくらべれば、制度が届くのはその数パーセントにすぎない。より大きな役割は、森林所有者、製材所、プレカット工場、地元の工務店——<a href=\"building.html\">木で建てる</a>で紹介した加子母の工務店のような会社——をつなぐ鎖に、地元の木を流しつづけることにある。",
            zh:"與此同時，岐阜縣出錢鼓勵家庭用本縣的樹木蓋房子。依縣府的「用岐阜木材蓋房子支援事業」，使用岐阜證明材（見<a href=\"buying.html\">挑選木製品</a>）、並由登錄於該制度的合作營造商興建的住宅，可以獲得補助。2026 年度，縣內新建住宅可獲 15 萬至最高 32 萬日圓；以岐阜木材在縣外興建的新屋 15 萬至 20 萬日圓；而縣內整修——當年新設的「翻新型」與「改修型」——為 4 萬至最高 16 萬日圓。若與國家補助併用，金額降為上述的 55%。名額為縣內新建 220 棟另加移居者專用 10 棟、縣外 60 棟、整修 25 棟另加移居者 5 棟，當年度的申請名額登錄已於 2026 年 9 月 30 日截止。與岐阜每年開工的約 7,000 戶木造住宅相比，這項制度只觸及其中的百分之幾；它更大的作用，在於讓森林所有者、製材廠、預切工廠與在地營造商——包括<a href=\"building.html\">以木建造</a>中介紹的加子母營造商這類公司——組成的鏈條，持續流通在地木材。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Land, Infrastructure, Transport and Tourism, leaflet on the review of the No. 4 exemption (effective April 2025); Gifu Prefecture, timber distribution division, “Building a home with Gifu wood” programme, FY2026.",
            ja:"出典：国土交通省「四号特例」見直しのリーフレット（二〇二五年四月施行）、岐阜県県産材流通課「ぎふの木で家づくり支援事業」（二〇二六年度）。",
            zh:"資料來源：國土交通省「四號特例」修訂說明摺頁（2025 年 4 月施行）；岐阜縣縣產材流通課「用岐阜木材蓋房子支援事業」（2026 年度）。" } }
      ] },
    { t:"section",
      id:"oldhouses",
      title:{ en:"Old houses, empty houses", ja:"古い家、空いた家", zh:"老房子與空屋" },
      jp:"古民家・空き家",
      body:[
        { t:"p",
          text:{
            en:"Japan builds new houses while old ones stand empty. The 2023 Housing and Land Survey counted about 65 million dwellings, of which 13.8 per cent — about nine million — were vacant, a record, up from 13.6 per cent in 2018. The most troubling category, homes neither for rent nor for sale nor used as second homes, numbered 3.86 million, or 5.9 per cent of all dwellings. Gifu is above the national average on both counts: 16.1 per cent of its dwellings were vacant, and 8.1 per cent were in that last category, many of them old wooden houses in mountain villages and in the centres of former market towns. Most municipalities run an <em>akiya</em> bank that lists such houses for sale or rent, often at very low prices, and the prefecture's home-building programme now sets aside part of its renovation quota for people moving to Gifu.",
            ja:"日本は、古い家が空いたまま新しい家を建てている。二〇二三年の住宅・土地統計調査は約六千五百万戸の住宅を数え、そのうち13.8パーセント、約九百万戸が空き家で、二〇一八年の13.6パーセントを上回って過去最高となった。いちばん気がかりな区分——賃貸用でも売却用でも別荘でもない空き家——は三百八十六万戸、全住宅の5.9パーセントだった。岐阜はどちらでも全国平均を上回る。住宅の16.1パーセントが空き家で、8.1パーセントがその最後の区分にあたり、その多くは山村や、かつての市場町の中心にある古い木造の家である。多くの市町村が空き家バンクを運営して、そうした家を、しばしばごく安い値で売りや貸しに出しており、県の家づくり支援もいまでは改修の枠の一部を岐阜への移住者に取っておいている。",
            zh:"日本一邊蓋新房子，一邊讓老房子空著。2023 年住宅・土地統計調查共計約 6,500 萬戶住宅，其中 13.8%——約 900 萬戶——為空屋，創下新高，高於 2018 年的 13.6%。最令人擔憂的一類——既不出租、也不出售、也不作為別墅使用的空屋——有 386 萬戶，占全部住宅的 5.9%。岐阜兩項都高於全國平均：16.1% 的住宅為空屋，8.1% 屬於最後這一類，其中許多是山村裡、或昔日市集城鎮中心的老木屋。多數市町村設有「空屋銀行」，以往往極低的價格刊登這些房屋的出售或出租資訊，縣府的建屋補助如今也在整修名額中保留一部分給移居岐阜的人。" } },
        { t:"p",
          text:{
            en:"Reviving an old wooden house is carpentry more than decoration. A <em>minka</em> farmhouse or a <em>machiya</em> townhouse built before the Second World War often stands on sills laid on stones rather than on a concrete foundation; its weak points are the sills and post feet, where damp and termites work, the roof, and the lack of bracing and insulation. Buildings designed before the seismic standard of June 1981 are generally treated as needing an earthquake assessment, which most municipalities subsidise. A good local builder will jack the frame, replace rotten sills and post feet with new timber jointed in (see <a href=\"joinery.html\">Joinery</a>), add bracing and insulation, and keep the original posts and beams — the part of the house that cannot be bought new. In the preservation districts of Takayama and other historic towns, the exterior is controlled and repairs are publicly supported (see <a href=\"architecture.html\">Temples, Townhouses &amp; Gasshō</a>). Since April 2025 a large-scale renovation of a two-storey wooden house needs building confirmation, which adds time and cost but also a check that the work is sound.",
            ja:"古い木の家を生き返らせるのは、飾りつけより大工仕事である。戦前に建った民家や町家は、コンクリートの基礎ではなく石の上に土台を据えていることが多い。弱いところは湿気とシロアリの入る土台と柱脚、屋根、そして筋かいと断熱の不足である。一九八一年六月の耐震基準より前に設計された建物は、ふつう耐震診断が要るものとして扱われ、多くの市町村がその費用を補助している。よい地元の工務店なら、骨組みを揚げ、腐った土台や柱脚を継いだ新しい木で取り替え（<a href=\"joinery.html\">継手と仕口</a>を参照）、筋かいと断熱を加え、もとの柱と梁——家のなかで新しく買えない部分——を残す。高山などの歴史的な町の保存地区では、外観が規制され、修理が公的に支援されている（<a href=\"architecture.html\">社寺・町家・合掌</a>を参照）。二〇二五年四月からは、木造二階建ての大規模な改修に建築確認が要る。時間と費用は増えるが、工事が健全かを確かめる機会にもなる。",
            zh:"讓老木屋重生，與其說是裝潢，不如說是木工活。二戰前興建的民家（農家）或町家（城鎮町屋），地檻常直接擱在石頭上，而非混凝土基礎；弱點在於濕氣與白蟻侵蝕的地檻與柱腳、屋頂，以及缺乏斜撐與隔熱。1981 年 6 月耐震標準之前設計的建築，一般被視為需要耐震診斷，多數市町村都補助診斷費用。好的在地營造商會把骨架頂起，以接榫的新木料更換腐朽的地檻與柱腳（見<a href=\"joinery.html\">榫接</a>），加上斜撐與隔熱，並保留原有的柱與樑——這是房子裡買不到新的部分。在高山等歷史城鎮的保存地區，外觀受到管制，修繕則有公費支援（見<a href=\"architecture.html\">寺社、町家與合掌</a>）。自 2025 年 4 月起，木造兩層住宅的大規模整修必須申請建築確認，雖增加了時間與成本，卻也多了一道確認工程是否穩當的關卡。" } },
        { t:"tiny",
          text:{
            en:"Sources: Statistics Bureau of Japan, 2023 Housing and Land Survey, summary of basic results on dwellings and households; Gifu Prefecture, “Building a home with Gifu wood” programme (migrant quotas).",
            ja:"出典：総務省統計局 令和五年（二〇二三年）住宅・土地統計調査 住宅及び世帯に関する基本集計の概要、岐阜県「ぎふの木で家づくり支援事業」（移住枠）。",
            zh:"資料來源：總務省統計局 2023 年住宅・土地統計調查〈住宅及家戶基本統計〉概要；岐阜縣「用岐阜木材蓋房子支援事業」（移居者名額）。" } }
      ] },
    { t:"section",
      id:"taiwan",
      title:{ en:"The view from Taiwan", ja:"台湾から見ると", zh:"從台灣看" },
      jp:"台湾",
      body:[
        { t:"p",
          text:{
            en:"For a reader in Taipei much of this page describes another world. Most Taiwanese city households live in reinforced-concrete apartment buildings, and wood enters the home as flooring, cabinets, ceilings and furniture rather than as structure. The country grows little of its own: Taiwan's self-sufficiency in timber was below 3 per cent at the end of 2025, and the government, which set out to raise it in 2017, aims for 5 per cent by 2028. Domestic timber is still roughly twice the price of imports, according to one producer, but it is finding its way indoors: between June and November 2025 nearly 8,000 sets of school desks and chairs made from Taiwanese wood were delivered to schools. The wooden houses Taiwanese do know are often older — Japanese-era dormitories and official residences built of Taiwan cypress and restored in recent decades as museums, bookshops and cafés — and they share with Gifu's machiya the same problems of termites, damp sills and deferred repairs.",
            ja:"台北の読者にとって、この頁の多くは別の世界の話である。台湾の都市の世帯の多くは鉄筋コンクリートの集合住宅に住み、木は構造ではなく、床材、収納、天井、家具として家に入る。台湾は自前の木をほとんど育てていない。木材の自給率は二〇二五年末で三パーセントに満たず、二〇一七年にその引き上げに乗りだした政府は、二〇二八年に五パーセントを目標にしている。ある生産者によれば国産材の値段はいまも輸入材のほぼ二倍だが、室内には入りはじめている。二〇二五年六月から十一月にかけて、台湾の木でつくった学校の机と椅子が八千組近く学校に届いた。台湾の人がよく知る木造の家は、たいてい古いものである。台湾ヒノキでつくられた日本統治時代の宿舎や官舎が、ここ数十年のあいだに修復されて博物館、書店、カフェになった。それらは、岐阜の町家と同じシロアリ、湿った土台、先延ばしにされた修理という問題を抱えている。",
            zh:"對台北的讀者而言，本頁許多內容描述的是另一個世界。台灣多數都市家庭住在鋼筋混凝土公寓裡，木材是以地板、櫥櫃、天花板與家具的形式進入家中，而非作為結構。台灣自產的木材很少：2025 年底木材自給率不到 3%，政府自 2017 年起著手提升，目標是在 2028 年達到 5%。據一位業者表示，國產材價格仍約為進口材的兩倍，但它正逐步走進室內：2025 年 6 月至 11 月間，近 8,000 套以台灣木材製作的課桌椅送進了校園。台灣人熟悉的木造房屋，多半是較老的建築——以台灣扁柏、紅檜建造的日治時期宿舍與官舍，近幾十年來修復成博物館、書店與咖啡館——它們與岐阜的町家面臨同樣的問題：白蟻、潮濕的地檻，以及一再拖延的修繕。" } },
        { t:"p",
          text:{
            en:"The climate is the other difference. Taipei's monthly mean relative humidity stays between about 70 and 78 per cent all year, higher and steadier than anywhere in Gifu, so the Japanese lessons that travel best are the ones about moisture: choose stable constructions — engineered flooring, frame-and-panel doors, edge-glued rather than single-board tops — for rooms that are air-conditioned in summer; leave bare or oiled wood where it can help to buffer the air; keep a gap at the edges of floors; and ventilate cupboards and the spaces behind furniture against mould. A single hinoki or sugi surface — a ceiling, a bath, a bench by the window — brings much of the feel of a Japanese room into a concrete flat without asking it to become a wooden house. Care in Taiwan's climate is covered on <a href=\"care.html\">Caring for Wood</a>, and the long history of wood between the two countries on <a href=\"taiwan.html\">Wood in Taiwan</a>.",
            ja:"もう一つの違いは気候である。台北の月平均の相対湿度は一年じゅう約七十〜七十八パーセントで、岐阜のどこよりも高く安定している。だから日本の教えのうちよく通用するのは湿気にかかわるものである。夏に冷房する部屋には安定したつくり——複合フローリング、框組の戸、一枚板ではなくはぎ板の天板——を選ぶ。空気の緩衝に役立つところには素の木やオイル仕上げの木を残す。床の端にはすきまをとる。押入れや家具の裏の空間は、かびを防ぐために風を通す。ヒノキやスギの面が一つ——天井、風呂、窓辺の腰掛け——あれば、コンクリートの住戸を木の家に変えずとも、日本の部屋の感じの多くを持ちこめる。台湾の気候での手入れは<a href=\"care.html\">木の手入れ</a>で、二つの国のあいだの木の長い歴史は<a href=\"taiwan.html\">台湾と木</a>で扱う。",
            zh:"另一個差異是氣候。台北的月平均相對濕度全年維持在約 70% 到 78%，比岐阜任何地方都更高、更穩定，所以最能移植的日本經驗，都與濕氣有關：夏天開冷氣的房間，選用穩定的構造——複合地板、框架鑲板門、拼板而非整片寬板的桌面；在能幫助緩衝空氣的地方保留裸木或油性處理的木材；地板邊緣預留伸縮縫；壁櫥與家具背後的空間要通風防霉。只要一面扁柏或柳杉——天花板、浴桶、窗邊的長凳——就能把日本房間的大半氛圍帶進混凝土公寓，而不必把它變成木屋。台灣氣候下的保養見<a href=\"care.html\">木器保養</a>，兩國之間木材的悠長歷史見<a href=\"taiwan.html\">台灣與木</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Central News Agency (Taiwan), report on domestic timber self-sufficiency, 11 December 2025; Central Weather Administration normals for Taipei (1991–2020).",
            ja:"出典：中央通訊社（台湾）国産材の自給率に関する報道（二〇二五年十二月十一日）、中央気象署 台北の平年値（一九九一〜二〇二〇年）。",
            zh:"資料來源：中央通訊社〈國產材自給率〉報導（2025 年 12 月 11 日）；中央氣象署臺北平年值（1991–2020 年）。" } }
      ] },
    { t:"related",
      items:[
        { href:"building.html", why:{ en:"How a Gifu house is built today.", ja:"いまの岐阜の家の建て方。", zh:"今日岐阜的房子怎麼蓋。" } },
        { href:"architecture.html",
          why:{ en:"Farmhouses, townhouses and temples of Gifu.", ja:"岐阜の民家、町家、寺社。", zh:"岐阜的民家、町家與寺社。" } },
        { href:"joinery.html",
          why:{ en:"The joints that hold the frame together.", ja:"骨組みをつなぐ継手と仕口。", zh:"把骨架接合起來的榫接。" } },
        { href:"care.html",
          why:{ en:"Looking after floors, baths and furniture.", ja:"床、風呂、家具の手入れ。", zh:"地板、浴桶與家具的保養。" } },
        { href:"health.html", why:{ en:"What wood does for body and mind.", ja:"木が体と心にもたらすもの。", zh:"木材對身心的影響。" } }
      ] }
  ] };

/* ---- -------------------------------------------- health */
GIFU.pages["health"] = { kicker:{ en:"Living with Wood · 05", ja:"木と暮らす · 05", zh:"與木共處 · 05" },
  title:{ en:"Forests & the Body", ja:"森と身体", zh:"森林與身體" },
  jp:"森林浴",
  lede:{
    en:"In 1982 Japan's Forestry Agency coined a word for something people had always done: <em>shinrin-yoku</em>, “forest bathing”, a walk among trees taken for its own sake. Two decades later Japanese physiologists began to measure what such a walk does to pulse, blood pressure, stress hormones and immune cells, and the word travelled round the world. This page sets out what that research has found and what it has not, what a forest-therapy programme in and around Gifu actually involves, what is known about the scent of hinoki and wooden rooms — and the two ways in which the same forests are hard on the body: sugi pollen and the danger of forestry work.",
    ja:"一九八二年、林野庁は、人がずっと昔からしてきたことに一つの名を与えた。「森林浴」——それ自体を目的として木々のあいだを歩くことである。二十年後、日本の生理学者たちは、そうした散歩が脈拍、血圧、ストレスホルモン、免疫細胞に何をもたらすかを測りはじめ、この言葉は世界をめぐった。この頁は、その研究が何を見いだし、何をまだ示していないか、岐阜とその周辺の森林セラピーのプログラムが実際に何をするのか、ヒノキの香りや木の部屋について何が分かっているかを述べる。そして同じ森が身体に厳しくあたる二つの面——スギ花粉と林業労働の危険——にも触れる。",
    zh:"1982 年，日本林野廳為人們自古就在做的一件事取了名字：「森林浴」——為了走而走、漫步於林木之間。二十年後，日本的生理學者開始測量這樣的散步對脈搏、血壓、壓力荷爾蒙與免疫細胞有何影響，這個詞也因此傳遍世界。本頁說明這些研究發現了什麼、尚未證明什麼，岐阜及其周邊的森林療法課程實際包含哪些內容，關於扁柏香氣與木造房間目前所知為何——以及同一片森林對身體嚴苛的兩個面向：柳杉花粉與林業勞動的危險。" },
  body:[
    { t:"section",
      id:"word",
      title:{ en:"A word from 1982", ja:"一九八二年の言葉", zh:"1982 年誕生的詞" },
      jp:"森林浴の誕生",
      body:[
        { t:"p",
          text:{
            en:"The term was invented, not inherited. According to the Forestry Agency, it proposed <em>shinrin-yoku</em> in 1982 as an easy way for people to get close to forests, on the model of <em>onsen-yoku</em> (hot-spring bathing), <em>kaisui-yoku</em> (sea bathing) and <em>nikkō-yoku</em> (sunbathing). The name is usually credited to Akiyama Tomohide, then Director-General of the agency, and the idea was launched in the <em>Asahi Shimbun</em> on 29 July 1982. Later that year the first national forest-bathing gathering was held in the Akasawa Natural Recreation Forest at Agematsu in the Kiso valley — an old stand of Kiso hinoki a short drive over the prefectural border from Nakatsugawa — which is why Akasawa still calls itself the birthplace of forest bathing.",
            ja:"この言葉は受け継がれたものではなく、つくられたものである。林野庁によれば、一九八二年、気軽に森に親しむ方法として、温泉浴や海水浴、日光浴になぞらえて「森林浴」を提唱した。名づけ親は当時の林野庁長官秋山智英とされることが多く、構想は一九八二年七月二十九日付の『朝日新聞』で打ち出された。同じ年のうちに、最初の全国大会が木曽谷の上松町にある赤沢自然休養林で開かれた。中津川から県境を越えてすぐの、木曽ヒノキの古い林である。赤沢がいまも森林浴発祥の地を名のるのはこのためである。",
            zh:"這個詞是創造出來的，而非傳承而來。根據林野廳的說法，它在 1982 年提出「森林浴」一詞，作為讓人輕鬆親近森林的方法，仿照的是「溫泉浴」、「海水浴」與「日光浴」。命名者通常歸於時任林野廳長官的秋山智英，這個構想於 1982 年 7 月 29 日的《朝日新聞》上發表。同年稍後，第一次全國森林浴大會在木曾谷上松町的赤澤自然休養林舉行——那是一片木曾扁柏老林，從中津川越過縣界不遠即達——因此赤澤至今仍自稱森林浴的發祥地。" } },
        { t:"p",
          text:{
            en:"For twenty years the word was a slogan for recreation rather than a claim about health. That changed in the early 2000s. The physiological anthropologist Miyazaki Yoshifumi, later of Chiba University's Center for Environment, Health and Field Sciences, began to speak of <em>shinrin serapī</em>, “forest therapy”, to mark the difference between a pleasant custom and an effect that could be measured, and from 2004 the Forestry Agency, universities, the Forestry and Forest Products Research Institute and companies ran a joint research programme on it. In 2006 a non-profit body, now the Forest Therapy Society, began to certify forests as Forest Therapy Bases and Therapy Roads; by April 2014 there were 57, and the society today speaks of more than sixty certified forests from Hokkaido to Okinawa.",
            ja:"二十年のあいだ、この言葉は健康についての主張というより、行楽の標語だった。それが変わったのは二〇〇〇年代の初めである。生理人類学者の宮崎良文（のちに千葉大学環境健康フィールド科学センター）は、心地よい習慣と測定できる効果とを区別するために「森林セラピー」という言葉を使いはじめ、二〇〇四年からは林野庁、大学、森林総合研究所、企業などによる共同研究が進められた。二〇〇六年には非営利法人（現在の森林セラピーソサエティ）が「森林セラピー基地」と「セラピーロード」の認定を始めた。二〇一四年四月時点で五十七か所を数え、同会はいま、北海道から沖縄まで六十か所を超える森が認定されているとしている。",
            zh:"二十年間，這個詞只是休閒的口號，而不是對健康的主張。轉變發生在 2000 年代初期。生理人類學者宮崎良文（後任職千葉大學環境健康田野科學中心）開始使用「森林療法」一詞，以區分愉快的習俗與可測量的效果；自 2004 年起，林野廳、大學、森林綜合研究所與企業共同推動相關研究。2006 年，一個非營利法人（今日的森林療法協會）開始認證「森林療法基地」與「療法步道」；到 2014 年 4 月已有 57 處，該會目前表示，從北海道到沖繩已有超過六十處森林獲得認證。" } },
        { t:"defs",
          items:[
            { term:{ en:"Shinrin-yoku", ja:"森林浴", zh:"森林浴" },
              jp:"しんりんよく",
              def:{
                en:"“Forest bathing”: spending unhurried time in a forest, taking it in through all the senses. A cultural practice and a word of 1982, not a treatment.",
                ja:"五感を通して森を受けとりながら、急がずに森で時を過ごすこと。一九八二年に生まれた言葉であり文化的な習慣で、治療ではない。",
                zh:"以所有感官感受森林、在林中從容度過時光。這是 1982 年誕生的詞與文化習慣，而非治療。" } },
            { term:{ en:"Forest therapy", ja:"森林セラピー", zh:"森林療法" },
              jp:"しんりんセラピー",
              def:{
                en:"Forest bathing backed by physiological and psychological measurement, used to promote health and prevent illness. The term came into use around 2003.",
                ja:"生理的・心理的な測定に裏づけられた森林浴で、健康の増進や病気の予防に役立てようとするもの。二〇〇三年ごろから使われるようになった。",
                zh:"以生理與心理測量為依據的森林浴，用於促進健康與預防疾病。此詞約自 2003 年起開始使用。" } },
            { term:{ en:"Phytoncide", ja:"フィトンチッド", zh:"芬多精" },
              jp:"植物由来の揮発成分",
              def:{
                en:"A word coined in 1928 by the Soviet biologist Boris Tokin for substances plants release that inhibit microbes. In Japanese usage it means, loosely, the volatile terpenes of forest air — α-pinene, β-pinene, limonene and others. See <a href=\"chemistry.html\">Chemistry &amp; Scent</a>.",
                ja:"一九二八年にソ連の生物学者ボリス・トーキンが、植物が放出して微生物を抑える物質を指してつくった言葉。日本では広く、森の空気に含まれる揮発性のテルペン——α-ピネン、β-ピネン、リモネンなど——を指す。<a href=\"chemistry.html\">化学と香り</a>を参照。",
                zh:"1928 年由蘇聯生物學家鮑里斯·托金創造的詞，指植物釋放、能抑制微生物的物質。在日本的用法中，泛指森林空氣中的揮發性萜類——α-蒎烯、β-蒎烯、檸檬烯等。見<a href=\"chemistry.html\">化學與香氣</a>。" } },
            { term:{ en:"Forest Therapy Base", ja:"森林セラピー基地", zh:"森林療法基地" },
              jp:"セラピーロード",
              def:{
                en:"A forest certified after physiological tests on visitors, with at least two gentle walking routes, lodgings, trained guides and a local organisation to receive visitors. A Therapy Road needs only one route.",
                ja:"訪れた人の生理的な試験を経て認定された森で、ゆるやかな歩道を二本以上もち、宿泊施設、訓練を受けたガイド、受け入れの地元組織がある。セラピーロードは歩道一本でよい。",
                zh:"經過對訪客的生理實驗後認證的森林，須有兩條以上平緩步道、住宿設施、受過訓練的嚮導以及接待訪客的在地組織。「療法步道」則只需一條路線。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, “Shinrin-yoku” page; Akasawa Natural Recreation Forest (Agematsu); Forest Therapy Society, certification page; Japanese Wikipedia, “Shinrin-yoku” and “Forest Therapy Base”.",
            ja:"出典：林野庁「森林浴」、赤沢自然休養林（上松町）、森林セラピーソサエティ「基地認定について」、ウィキペディア日本語版「森林浴」「森林セラピー基地」。",
            zh:"資料來源：林野廳〈森林浴〉頁面；赤澤自然休養林（上松町）；森林療法協會認證說明；日文維基百科〈森林浴〉〈森林療法基地〉。" } }
      ] },
    { t:"section",
      id:"measured",
      title:{ en:"What was measured", ja:"何が測られたか", zh:"測量了什麼" },
      jp:"生理指標",
      body:[
        { t:"p",
          text:{
            en:"The largest body of field data comes from Miyazaki's group. In a design repeated in 24 forests across Japan, twelve young men at each site spent one day in a forest and one day in a nearby city centre, half of them in each order. On each day they sat and looked at the view for about fifteen minutes and walked for about fifteen, while their salivary cortisol (a stress hormone), pulse, blood pressure and heart-rate variability were recorded. Pooled over 280 participants and published in 2010, the results were consistent: in the forest, cortisol was 13–16% lower, pulse 4–6% lower and blood pressure about 2% lower than in the city, while the high-frequency component of heart-rate variability, a marker of the “rest-and-digest” parasympathetic system, was 56% higher when sitting and about double when walking.",
            ja:"最も多くの野外データは宮崎のグループによる。全国二十四か所の森で同じ手順がくり返された。各地で若い男性十二人が、一日を森で、一日を近くの都市の中心部で過ごし、半数ずつ順番を入れ替えた。どちらの日も約十五分座って景色を眺め、約十五分歩き、そのあいだに唾液中コルチゾール（ストレスホルモン）、脈拍、血圧、心拍変動が記録された。二〇一〇年に二百八十人分をまとめて発表された結果は一貫していた。森では都市に比べ、コルチゾールが一三〜一六％、脈拍が四〜六％、血圧が約二％低く、「休息と消化」を担う副交感神経の指標である心拍変動の高周波成分は、座って眺めたとき五六％、歩いたときには約二倍高かった。",
            zh:"最大量的野外數據來自宮崎的研究團隊。同一套程序在日本各地 24 處森林重複進行：每處由 12 名年輕男性在森林度過一天、在附近的都市中心度過一天，半數人順序相反。每天他們先坐著眺望景色約 15 分鐘，再步行約 15 分鐘，期間記錄唾液皮質醇（一種壓力荷爾蒙）、脈搏、血壓與心率變異。2010 年發表的 280 人合併結果相當一致：與都市相比，在森林中皮質醇低 13–16%、脈搏低 4–6%、血壓低約 2%；而代表「休息與消化」副交感神經活動的心率變異高頻成分，坐著眺望時高 56%，步行時則約高出一倍。" } },
        { t:"figure",
          caption:{
            en:"Differences between forest and city settings in 24 field experiments (n = 280 male university students, mean age 21.7; about 15 minutes of viewing and 15 minutes of walking in each setting). Source: Park B.J., Tsunetsugu Y., Kasetani T., Kagawa T., Miyazaki Y., Environmental Health and Preventive Medicine 15 (2010).",
            ja:"二十四か所の野外実験における森と都市の差（男子大学生二百八十人、平均二一・七歳。各環境で約十五分の座観と約十五分の歩行）。出典：Park B.J.、恒次祐子、Kasetani T.、香川隆英、宮崎良文『Environmental Health and Preventive Medicine』第十五巻（二〇一〇年）。",
            zh:"24 處野外實驗中森林與都市環境的差異（n = 280 名男性大學生，平均 21.7 歲；每種環境各約 15 分鐘靜坐眺望與 15 分鐘步行）。資料來源：Park B.J.、恒次祐子、Kasetani T.、香川隆英、宮崎良文，《Environmental Health and Preventive Medicine》第 15 卷（2010 年）。" },
          svg:function(lang, L){
            var V = { en:"viewing", ja:"座観", zh:"靜坐眺望" }, Wk = { en:"walking", ja:"歩行", zh:"步行" };
            function n(a, b){ return { en:a.en+" · "+b.en, ja:a.ja+"・"+b.ja, zh:a.zh+"・"+b.zh }; }
            var C = { en:"Salivary cortisol", ja:"唾液中コルチゾール", zh:"唾液皮質醇" },
                P = { en:"Pulse rate", ja:"脈拍", zh:"脈搏" },
                S = { en:"Systolic pressure", ja:"収縮期血圧", zh:"收縮壓" },
                D = { en:"Diastolic pressure", ja:"拡張期血圧", zh:"舒張壓" },
                H = { en:"HF (parasympathetic)", ja:"HF（副交感神経）", zh:"HF（副交感神經）" },
                R = { en:"LF/HF (sympathetic)", ja:"LF/HF（交感神経）", zh:"LF/HF（交感神經）" };
            var a = "#E0E7E9", b = "#E0E6DB";
            return GIFU.fig.hbar(lang, L, {
            title:{ en:"Forest compared with city, % difference", ja:"森と都市の比較（差、％）", zh:"森林與都市比較（差異，%）" },
            labelW:250, rowH:26, max:110,
            items:[
              { n:n(C,V), v:13.4, lab:"−13.4%", f:a }, { n:n(C,Wk), v:15.8, lab:"−15.8%", f:b },
              { n:n(P,V), v:6.0, lab:"−6.0%", f:a },   { n:n(P,Wk), v:3.9, lab:"−3.9%", f:b },
              { n:n(S,V), v:1.7, lab:"−1.7%", f:a },   { n:n(S,Wk), v:1.9, lab:"−1.9%", f:b },
              { n:n(D,V), v:1.6, lab:"−1.6%", f:a },   { n:n(D,Wk), v:2.1, lab:"−2.1%", f:b },
              { n:n(H,V), v:56.1, lab:"+56.1%", f:a }, { n:n(H,Wk), v:102.0, lab:"+102.0%", f:b },
              { n:n(R,V), v:18.0, lab:"−18.0%", f:a }, { n:n(R,Wk), v:19.4, lab:"−19.4%", f:b }
            ],
            note:{ en:"Bar length shows the size of the difference; the label gives its direction (− lower in the forest, + higher). Pale blue: viewing; pale green: walking.", ja:"棒の長さは差の大きさ、数字の符号は向き（−は森で低い、＋は森で高い）を示す。淡い青：座観、淡い緑：歩行。", zh:"長條長度表示差異大小，標籤正負號表示方向（− 為森林中較低，+ 為較高）。淺藍：靜坐眺望；淺綠：步行。" } }); } },
        { t:"p",
          text:{
            en:"The immunological studies are associated above all with Li Qing, a physician at Nippon Medical School in Tokyo. In a study published in 2008, twelve healthy men aged 35 to 56 spent three days and two nights on a forest trip, with about two hours of walking on the first day and two hours each in the morning and afternoon of the second. Blood samples showed a significant rise in the activity and number of natural killer (NK) cells — the white blood cells that attack virus-infected and tumour cells — and in the intracellular proteins they use to kill, and the rise lasted more than seven days after the trip. A city trip with the same amount of walking produced no such change. The concentration of adrenaline in the men's urine fell in the forest, and α- and β-pinene were detected in the forest air but hardly at all in the city. A parallel study with women reported similar results.",
            ja:"免疫学の研究は、なによりも日本医科大学の医師李卿の名と結びついている。二〇〇八年に発表された研究では、三十五〜五十六歳の健康な男性十二人が二泊三日の森の旅に参加し、一日目に約二時間、二日目の午前と午後にそれぞれ約二時間歩いた。血液を調べると、ナチュラルキラー（NK）細胞——ウイルスに感染した細胞や腫瘍細胞を攻撃する白血球——の活性と数、そしてそれが相手を殺すのに使う細胞内のたんぱく質が有意に増え、その増加は旅の後七日以上続いた。同じだけ歩く都市への旅では、そのような変化はなかった。森では尿中のアドレナリン濃度が下がり、森の空気からはα-ピネンとβ-ピネンが検出されたが、都市ではほとんど検出されなかった。女性を対象とした並行研究も同様の結果を報告している。",
            zh:"免疫學研究首先與東京日本醫科大學的醫師李卿連在一起。在 2008 年發表的一項研究中，12 名 35 至 56 歲的健康男性參加了三天兩夜的森林之旅，第一天步行約兩小時，第二天上午與下午又各步行約兩小時。血液檢查顯示，自然殺手（NK）細胞——攻擊受病毒感染細胞與腫瘤細胞的白血球——的活性與數量，以及它們用來殺傷目標的細胞內蛋白質都顯著增加，且增加在旅行後持續七天以上。步行量相同的都市之旅則沒有這種變化。在森林中，受試者尿液中的腎上腺素濃度下降；森林空氣中測得 α-蒎烯與 β-蒎烯，都市中則幾乎測不到。另一項以女性為對象的平行研究也報告了類似結果。" } },
        { t:"p",
          text:{
            en:"Taken together, the early studies suggested a plausible chain: a quiet, green, fragrant setting lowers the body's stress response; lower stress hormones allow immune activity to recover; and the volatile compounds of the trees may contribute directly. It is an attractive story, and in Japan it quickly found its way into tourism brochures and corporate health programmes. The next section asks how much weight it can bear.",
            ja:"初期の研究を合わせると、ありうる一つの筋道が見えてくる。静かで緑があり香りのある環境が身体のストレス反応を下げ、ストレスホルモンが減ることで免疫の働きが回復し、木の揮発成分もそれに直接寄与しているかもしれない、というものである。魅力的な筋書きで、日本ではすぐに観光のパンフレットや企業の健康プログラムに取り入れられた。次の節では、それがどれほどの重みに耐えるかを考える。",
            zh:"綜合早期研究，可以看出一條看似合理的因果鏈：安靜、綠意盎然、有香氣的環境降低身體的壓力反應；壓力荷爾蒙下降讓免疫活動得以恢復；樹木的揮發性物質也可能直接發揮作用。這是個吸引人的故事，在日本很快就進入觀光手冊與企業健康計畫。下一節要問：它究竟能承受多少分量。" } },
        { t:"tiny",
          text:{
            en:"Sources: Park et al., “The physiological effects of Shinrin-yoku”, Environmental Health and Preventive Medicine 15 (2010) 18–26; Li Q. et al., “Visiting a forest, but not a city, increases human natural killer activity”, International Journal of Immunopathology and Pharmacology 21 (2008) 117–127.",
            ja:"出典：Park ほか「The physiological effects of Shinrin-yoku」『Environmental Health and Preventive Medicine』十五巻（二〇一〇年）一八〜二六頁、李卿ほか「Visiting a forest, but not a city, increases human natural killer activity」『International Journal of Immunopathology and Pharmacology』二十一巻（二〇〇八年）一一七〜一二七頁。",
            zh:"資料來源：Park 等，〈The physiological effects of Shinrin-yoku〉，《Environmental Health and Preventive Medicine》第 15 卷（2010 年）18–26 頁；李卿等，〈Visiting a forest, but not a city, increases human natural killer activity〉，《International Journal of Immunopathology and Pharmacology》第 21 卷（2008 年）117–127 頁。" } }
      ] },
    { t:"section",
      id:"limits",
      title:{ en:"What the studies cannot yet show", ja:"研究がまだ示せないこと", zh:"研究尚無法證明的事" },
      jp:"限界",
      body:[
        { t:"p",
          text:{
            en:"The forest-bathing literature is larger than most people realise, and weaker than its popular versions suggest. Its limits are not hidden; many of them are acknowledged by the researchers themselves. The groups are small — twelve people per site in the 24-forest series, twelve men in Li's first immune study — and mostly made up of healthy young men, often university students. Nobody can be blinded to whether they are in a forest or a car park, so expectation and enjoyment cannot be separated from any physiological effect of the trees. Most exposures last minutes or hours, and follow-up rarely lasts more than a week. A walk in a forest also bundles together many things at once — exercise, quiet, cooler and cleaner air, daylight, time away from work, pleasant company — and few designs can tell which of them matters.",
            ja:"森林浴の研究は、多くの人が思うより数が多く、一般向けの説明が示すより弱い。その限界は隠されておらず、多くは研究者自身が認めている。対象者の数は少ない——二十四か所の実験では各地十二人、李の最初の免疫研究では男性十二人——うえ、多くは健康な若い男性、しばしば大学生である。自分が森にいるのか駐車場にいるのかを被験者に隠すことはできないため、期待や楽しさを木の生理的な効果から切り離すことはできない。ほとんどの曝露は数分から数時間で、追跡も一週間を超えることはまれである。森の散歩には多くのものがいっしょに含まれている——運動、静けさ、涼しく澄んだ空気、日の光、仕事から離れる時間、心地よい仲間——が、そのどれが効いているのかを見分けられる設計はほとんどない。",
            zh:"森林浴的研究數量比多數人以為的多，但證據比通俗版本所說的弱。其局限並未被隱藏，許多是研究者本身也承認的。樣本很小——24 處森林系列中每處 12 人，李卿第一項免疫研究是 12 名男性——而且多半是健康的年輕男性，常是大學生。受試者不可能被「盲化」而不知道自己身在森林還是停車場，因此無法把期待與愉悅感從樹木的生理作用中分離出來。多數暴露僅持續數分鐘至數小時，追蹤也很少超過一週。林中漫步同時包含許多因素——運動、安靜、更涼爽潔淨的空氣、日光、遠離工作的時間、愉快的同伴——很少有研究設計能分辨究竟是哪一項在發揮作用。" } },
        { t:"p",
          text:{
            en:"Systematic reviews give a more sober picture. A meta-analysis published in 2017 by Ideno Y. and colleagues pooled 20 trials with 732 participants — 17 of the trials in Japan, two in Korea and one in China — and found that systolic blood pressure was on average 3.15 mmHg lower and diastolic pressure 1.75 mmHg lower in forest settings than in non-forest ones, with larger differences in people whose blood pressure was high to begin with. Those are real but modest numbers. The authors also noted that 16 of the 20 trials measured effects over two hours or less, that most used cross-over designs, that the results showed signs of publication bias, and that the use of blood-pressure medication was rarely taken into account. A 2017 review of the physiological effects of wood by Ikei Harumi, Song Chorong and Miyazaki reached a similar judgement about its own field: small numbers of participants, mostly in their twenties, and designs that test one stimulus at a time.",
            ja:"系統的レビューは、より冷静な像を示す。Ideno らが二〇一七年に発表したメタ分析は、二十の試験、七百三十二人のデータ——試験のうち十七が日本、二つが韓国、一つが中国——をまとめ、森林環境では非森林環境に比べ、収縮期血圧が平均三・一五mmHg、拡張期血圧が一・七五mmHg低いこと、もともと血圧の高い人ほど差が大きいことを見いだした。本物ではあるが控えめな数字である。著者らはまた、二十の試験のうち十六が二時間以内の効果しか測っていないこと、多くがクロスオーバー法であること、出版バイアスのきざしがあること、降圧薬の使用がほとんど考慮されていないことも指摘した。池井晴美、Song Chorong、宮崎による二〇一七年の木の生理的効果のレビューも、自らの分野について同じような判断を下している。被験者が少なく、多くは二十代で、一度に一つの刺激だけを試す設計だという。",
            zh:"系統性回顧呈現出較為冷靜的圖像。Ideno 等人於 2017 年發表的統合分析彙整了 20 項試驗、732 名受試者——其中 17 項在日本、2 項在韓國、1 項在中國——發現在森林環境中，收縮壓平均比非森林環境低 3.15 mmHg，舒張壓低 1.75 mmHg，原本血壓偏高者差異更大。這些數字真實但有限。作者也指出，20 項試驗中有 16 項只測量兩小時以內的效果，多數採交叉設計，結果有出版偏誤的跡象，而且很少考慮受試者是否服用降壓藥。池井晴美、Song Chorong 與宮崎於 2017 年發表的木材生理效果回顧，對其自身領域也作出類似判斷：受試者人數少、多為二十多歲，而且設計一次只測試一種刺激。" } },
        { t:"compare",
          cols:3,
          items:[
            { title:{ en:"Reasonably supported", ja:"ある程度裏づけあり", zh:"有一定支持" },
              jp:"短期の鎮静",
              text:{
                en:"In the short term, time in a forest is associated with lower pulse, slightly lower blood pressure, lower salivary cortisol and better self-reported mood than comparable time in a city. The effects are consistent across many sites, but small.",
                ja:"短期的には、森で過ごす時間は、同じ時間を都市で過ごすより脈拍が低く、血圧がわずかに低く、唾液中コルチゾールが低く、自己評価の気分がよいことと結びついている。効果は多くの場所で一貫しているが、小さい。",
                zh:"短期而言，在森林中度過的時間，與在都市度過同樣時間相比，伴隨較低的脈搏、略低的血壓、較低的唾液皮質醇，以及自評較佳的心情。這些效果在許多地點都一致，但幅度不大。" } },
            { title:{ en:"Plausible, not proven", ja:"ありうるが未証明", zh:"可能但未證實" },
              jp:"免疫・香り",
              text:{
                en:"That forest air or tree volatiles raise immune activity in a way that matters for health. NK-cell studies are few and small, mostly by one group, and a higher NK count in a blood test is not the same as fewer illnesses.",
                ja:"森の空気や木の揮発成分が、健康に意味のあるかたちで免疫の働きを高めるということ。NK細胞の研究は数が少なく小規模で、多くは一つのグループによるもの。血液検査でNK細胞が増えることは、病気が減ることと同じではない。",
                zh:"森林空氣或樹木揮發物能以對健康有意義的方式提升免疫活性。NK 細胞研究數量少、規模小，多出自同一團隊；血液檢查中 NK 細胞增加，並不等於生病減少。" } },
            { title:{ en:"Not supported", ja:"裏づけなし", zh:"缺乏支持" },
              jp:"治療効果",
              text:{
                en:"Claims that forest bathing prevents or treats cancer or any other disease. No clinical trial has shown this, and responsible programmes in Japan present forest therapy as relaxation and prevention, not as medicine.",
                ja:"森林浴ががんやその他の病気を予防し、あるいは治すという主張。これを示した臨床試験はなく、日本のまっとうなプログラムは、森林セラピーを医療ではなく休養と予防として示している。",
                zh:"聲稱森林浴能預防或治療癌症或其他疾病。沒有任何臨床試驗證明這一點；日本負責任的課程都把森林療法定位為放鬆與預防，而非醫療。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Ideno Y. et al., “Blood pressure-lowering effect of Shinrin-yoku (Forest bathing): a systematic review and meta-analysis”, BMC Complementary and Alternative Medicine 17 (2017) 409; Ikei H., Song C., Miyazaki Y., “Physiological effects of wood on humans: a review”, Journal of Wood Science 63 (2017).",
            ja:"出典：Ideno Y. ほか「Blood pressure-lowering effect of Shinrin-yoku (Forest bathing)」『BMC Complementary and Alternative Medicine』十七巻（二〇一七年）四〇九、池井晴美・Song Chorong・宮崎良文「Physiological effects of wood on humans: a review」『Journal of Wood Science』六十三巻（二〇一七年）。",
            zh:"資料來源：Ideno Y. 等，〈Blood pressure-lowering effect of Shinrin-yoku (Forest bathing)〉，《BMC Complementary and Alternative Medicine》第 17 卷（2017 年）409；池井晴美、Song Chorong、宮崎良文，〈Physiological effects of wood on humans: a review〉，《Journal of Wood Science》第 63 卷（2017 年）。" } }
      ] },
    { t:"section",
      id:"programmes",
      title:{ en:"Forest therapy in and around Gifu", ja:"岐阜とその周辺の森林セラピー", zh:"岐阜及其周邊的森林療法" },
      jp:"森林セラピー基地",
      body:[
        { t:"p",
          text:{
            en:"To be certified as a Forest Therapy Base, a forest must pass a physiological test in which volunteers' heart-rate variability, blood pressure and pulse are measured in the forest and in a city for comparison, together with questionnaires on mood and on how relaxed they feel. It must also meet conditions that have nothing to do with laboratories: wide, gently sloping paths, at least two routes and places to stay for a Base, trained guides, clear signs, toilets and rest areas, access for people with limited mobility, arrangements with a nearby hospital, and a local body — usually the municipality with tourism and forestry groups — that takes responsibility for running it.",
            ja:"森林セラピー基地として認定されるには、森で、また比較のために都市で、被験者の心拍変動、血圧、脈拍を測る生理実験と、気分やくつろぎの度合いをたずねる質問紙の調査を通らなければならない。さらに、実験室とは関係のない条件も満たす必要がある。幅が広くゆるやかな歩道、基地であれば二本以上の道と宿泊施設、訓練を受けたガイド、わかりやすい標識、トイレと休憩所、からだの不自由な人への配慮、近くの病院との連携、そして運営に責任をもつ地元の組織——たいていは市町村と観光・林業の団体——である。",
            zh:"要獲認證為森林療法基地，森林必須通過一項生理實驗：在森林中、並在都市中作為對照，測量志願者的心率變異、血壓與脈搏，同時以問卷評估其情緒與放鬆程度。它還必須符合與實驗室無關的條件：寬闊且坡度平緩的步道；若是基地，須有兩條以上路線及住宿設施；受過訓練的嚮導、清楚的標示、廁所與休憩處、行動不便者的無障礙設施、與附近醫院的合作安排，以及負責營運的在地組織——通常是市町村與觀光、林業團體。" } },
        { t:"p",
          text:{
            en:"Gifu has been slow to take up the label, despite being one of Japan's most forested prefectures. Motosu city, in the Neo valley north of Gifu city, states that it was certified in 2015 as the prefecture's first Forest Therapy Base, with three routes: a gentle one around the Neo Sakura Exchange Land, with hot springs and lodging nearby; the gentlest of all, the Usuzumi-zakura Romance Road near the famous old cherry tree of Neo, a natural monument since 1922; and a longer, steeper route through the Monju Forest, a prefectural recreation forest about 25 minutes by car from Gifu city with burial mounds, castle ruins and temples along the way. Programmes are run with local operators, including the Usuzumi Onsen hot-spring lodge. (The society's current online directory does not list a Gifu site, so visitors should check the status before planning a trip around it.)",
            ja:"岐阜は日本有数の森林県でありながら、この認定を受けるのは遅かった。岐阜市の北、根尾谷の本巣市は、二〇一五年に県内初の森林セラピー基地に認定されたとしている。道は三本ある。温泉と宿が近い「根尾さくら交流ランド」周辺のゆるやかな道、最も起伏の少ない、一九二二年から天然記念物である根尾の名高い老桜の近くの「淡墨桜ロマンロード」、そして岐阜市から車で約二十五分の県営の森で、古墳や城跡、寺が道沿いにある「文殊の森」を通る長く起伏の大きい道である。プログラムはうすずみ温泉の宿など地元の事業者とともに運営される。（同ソサエティの現在のオンライン一覧には岐阜の地名が見当たらないため、訪れる前に現状を確かめたほうがよい。）",
            zh:"岐阜雖是日本森林覆蓋率最高的縣之一，採用這項認證卻起步較晚。位於岐阜市北方根尾谷的本巢市表示，它在 2015 年獲認證為縣內第一個森林療法基地，共有三條路線：一條在溫泉與住宿附近的「根尾櫻花交流樂園」周邊，坡度平緩；最平緩的一條是「淡墨櫻浪漫之路」，靠近根尾那株著名的古櫻（1922 年起列為天然紀念物）；另一條較長且起伏較大，穿越「文殊之森」——距岐阜市車程約 25 分鐘的縣營森林，沿途有古墳、城跡與寺院。課程與在地業者合作舉辦，其中包括淡墨溫泉旅館。（該協會目前的線上名錄並未列出岐阜的地點，因此造訪前最好先確認現況。）" } },
        { t:"steps",
          items:[
            { title:{ en:"Meet the guide", ja:"ガイドと会う", zh:"與嚮導會合" },
              jp:"集合",
              meta:{ en:"about 15 min", ja:"約十五分", zh:"約 15 分鐘" },
              text:{
                en:"A certified forest therapy guide explains the route, checks footwear and weather, and asks about anyone's health limits.",
                ja:"認定を受けた森林セラピーガイドが道を説明し、靴や天気を確かめ、体調に制約のある人がいないかたずねる。",
                zh:"經認證的森林療法嚮導說明路線，確認鞋具與天候，並詢問是否有人有健康上的限制。" } },
            { title:{ en:"Slow walking", ja:"ゆっくり歩く", zh:"慢步行走" },
              jp:"五感で歩く",
              meta:{ en:"1–2 hours", ja:"一〜二時間", zh:"1–2 小時" },
              text:{
                en:"Far slower than hiking, with stops to listen, smell leaves or bark, touch moss or a trunk. Distance is not the point.",
                ja:"山歩きよりずっとゆっくり、立ち止まって音を聞き、葉や樹皮の匂いをかぎ、苔や幹にふれる。距離は目的ではない。",
                zh:"比登山慢得多，不時停下來聆聽、嗅聞葉片或樹皮、觸摸苔蘚或樹幹。重點不在距離。" } },
            { title:{ en:"Breathing and stretching", ja:"呼吸とストレッチ", zh:"呼吸與伸展" },
              jp:"呼吸法・ヨガ",
              meta:{ en:"20–30 min", ja:"二十〜三十分", zh:"20–30 分鐘" },
              text:{
                en:"Breathing exercises, gentle stretching or yoga in a clearing — the elements Motosu lists for its own programmes.",
                ja:"林間の広場で呼吸法、軽いストレッチやヨガ。本巣市が自らのプログラムとして挙げている要素である。",
                zh:"在林間空地做呼吸練習、輕度伸展或瑜伽——這正是本巢市為其課程列出的內容。" } },
            { title:{ en:"Sitting still", ja:"静かに座る", zh:"靜坐" },
              jp:"座観",
              meta:{ en:"10–20 min", ja:"十〜二十分", zh:"10–20 分鐘" },
              text:{
                en:"Sitting or lying alone and without a phone, simply looking — close to the “viewing” condition of the research.",
                ja:"電話を持たずに一人で座るか横になり、ただ眺める。研究でいう「座観」の条件に近い。",
                zh:"不帶手機，獨自坐著或躺著，單純地看——接近研究中的「靜坐眺望」條件。" } },
            { title:{ en:"Food and bath", ja:"食事と湯", zh:"餐食與泡湯" },
              jp:"地元の食・温泉",
              meta:{ en:"afternoon", ja:"午後", zh:"下午" },
              text:{
                en:"A lunch of local food and, where there is one, a hot spring. Many programmes end with a short talk on the forest and its management.",
                ja:"地元の食材の昼食と、あれば温泉。森とその手入れについての短い話で締めくくるプログラムも多い。",
                zh:"以在地食材的午餐作結，若附近有溫泉則去泡湯。許多課程最後會簡短介紹這片森林及其經營。" } }
          ] },
        { t:"tiny",
          text:{
            en:"The steps show a typical day as described by operators; timings are indicative and vary by site and season.",
            ja:"上の手順は事業者の説明にもとづく一般的な一日の例で、時間は目安であり、場所と季節によって異なる。",
            zh:"以上步驟為依業者說明整理的典型一日，時間僅供參考，依地點與季節而異。" } },
        { t:"p",
          text:{
            en:"Across the border in Nagano, which has more certified sites than any other prefecture — ten, according to the prefecture — Akasawa in the Kiso valley combines a therapy programme with one of the finest stands of old Kiso hinoki in Japan; the Kiso forests have supplied much of the timber for the periodic rebuilding of the Ise Shrine for about three centuries (see <a href=\"hinoki.html\">Hinoki</a>). For Taiwanese visitors none of this is entirely foreign: in Taiwan the volatile compounds of forest air are popularly called <em>fenduojing</em> (芬多精), a phonetic rendering of “phytoncide”, and the high hinoki forests of Alishan and Taipingshan — logged under Japanese rule and now national forest recreation areas — are visited for much the same reasons.",
            ja:"県境を越えた長野県は、県によれば十か所と、全国で最も多くの認定地をもつ。木曽谷の赤沢は、セラピーのプログラムと、日本でも屈指の木曽ヒノキの老齢林とを兼ねそなえる。木曽の森は約三百年にわたり、伊勢神宮の式年遷宮の用材の多くを出してきた（<a href=\"hinoki.html\">ヒノキ</a>を参照）。台湾から訪れる人には、これはまったく見知らぬものではない。台湾では森の空気の揮発成分は「フィトンチッド（phytoncide）」の音を写して一般に「芬多精」と呼ばれ、日本統治時代に伐採され、いまは国家森林遊楽区となっている阿里山や太平山の高地のヒノキ林を、人びとはほぼ同じ理由で訪れる。",
            zh:"越過縣界的長野縣，據該縣統計擁有全國最多的認證地點——共 10 處。木曾谷的赤澤結合了療法課程與日本數一數二的木曾扁柏老林；約三百年來，伊勢神宮式年遷宮所需的木材有很大一部分出自木曾的森林（見<a href=\"hinoki.html\">日本扁柏</a>）。對台灣訪客而言，這一切並不完全陌生：在台灣，森林空氣中的揮發性物質俗稱「芬多精」，即「phytoncide」的音譯；而阿里山與太平山的高山檜木林——在日治時期遭到伐採，如今是國家森林遊樂區——人們前往造訪的理由也大致相同。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forest Therapy Society, certification criteria; Motosu City, “Motosu forest therapy”; Gifu Prefecture, “Monju no Mori”; Nagano Prefecture, forest therapy page (updated 2026).",
            ja:"出典：森林セラピーソサエティ「基地認定について」、本巣市「本巣市森林セラピー」、岐阜県「文殊の森」、長野県「全国一の森林セラピー県ながの」（二〇二六年更新）。",
            zh:"資料來源：森林療法協會認證標準；本巢市〈本巢市森林療法〉；岐阜縣〈文殊之森〉；長野縣森林療法頁面（2026 年更新）。" } }
      ] },
    { t:"section",
      id:"indoors",
      title:{ en:"Wood indoors: scent, sight and touch", ja:"室内の木：香り・見た目・手ざわり", zh:"室內的木：香氣、視覺與觸感" },
      jp:"木の香り",
      body:[
        { t:"p",
          text:{
            en:"Most people meet the forest's chemistry not on a trail but at home: in a hinoki bath, a sugi ceiling, a cutting board or a new wooden floor. The scent of hinoki wood comes mainly from terpenes. In one analysis of steam-distilled hinoki wood oil, α-pinene made up about a quarter, followed by δ-cadinene, α-cadinol, T-muurolol and γ-cadinene — the first a light, resinous top note, the cadinols a heavier, lasting base with antifungal properties. The <a href=\"chemistry.html\">chemistry page</a> explains these compounds; the point here is what they do to the people who breathe them.",
            ja:"多くの人が森の化学に出会うのは、山道よりも家の中である。ヒノキの風呂、スギの天井、まな板、新しい木の床。ヒノキ材の香りは主にテルペンによる。水蒸気蒸留したヒノキ材油のある分析では、α-ピネンが約四分の一を占め、δ-カジネン、α-カジノール、T-ムウロロール、γ-カジネンがそれに続いた。前者は軽く樹脂的な立ち香、カジノール類は重く残る香りで、抗かび性をもつ。これらの化合物については<a href=\"chemistry.html\">化学と香り</a>の頁で説明した。ここで問うのは、それを吸いこむ人に何が起きるかである。",
            zh:"多數人接觸森林化學，不是在山徑上，而是在家裡：扁柏浴桶、柳杉天花板、砧板或新鋪的木地板。扁柏木材的香氣主要來自萜類。在一份蒸汽蒸餾扁柏木材精油的分析中，α-蒎烯約占四分之一，其次是 δ-杜松烯、α-杜松醇、T-依蘭油醇與 γ-杜松烯——前者是輕盈、帶樹脂感的前調，杜松醇類則是厚重而持久、具抗真菌性的基調。這些化合物在<a href=\"chemistry.html\">化學與香氣</a>頁已有說明；這裡要問的是，它們對吸入的人有何作用。" } },
        { t:"note",
          label:{ en:"A common mistake", ja:"よくある誤り", zh:"常見的誤解" },
          text:{
            en:"<em>Hinokitiol</em>, the antibacterial compound sold in soaps and toothpastes, is found only in traces in Japanese hinoki. The chemist Nozoe Tetsuo isolated it in 1936 at Taihoku Imperial University in Taipei from Taiwan hinoki, which gave it its name; commercial hinokitiol is extracted mainly from hiba (asunaro) and western red cedar. A product that smells of Japanese hinoki owes that smell to other compounds.",
            ja:"石けんや歯みがきに使われる抗菌成分「ヒノキチオール」は、日本のヒノキにはごくわずかしか含まれない。化学者野副鉄男が一九三六年に台北帝国大学で台湾ヒノキから単離したのでこの名がある。市販のヒノキチオールは主にヒバ（アスナロ）やベイスギから採られる。日本のヒノキの匂いのする製品は、その匂いをほかの化合物に負っている。",
            zh:"用於肥皂與牙膏的抗菌成分「檜木醇」，在日本扁柏中只含微量。化學家野副鐵男於 1936 年在台北帝國大學從台灣扁柏中分離出它，因而得名；市售檜木醇主要萃取自羅漢柏（翌檜）與北美紅側柏。帶有日本扁柏氣味的產品，其氣味其實來自其他化合物。" } },
        { t:"p",
          text:{
            en:"Li Qing's group tested the scent directly in a study published in 2009. Twelve healthy men aged 37 to 60 spent three nights in a city hotel while hinoki stem oil was vaporised in their rooms by a humidifier from evening to morning. Afterwards their NK-cell activity was higher and the adrenaline and noradrenaline in their urine lower than before — an indication, the authors wrote, that the scent and lower stress hormones may partly contribute to the immune changes seen in forests. The same caveats apply: twelve men, no placebo scent, a single group.",
            ja:"李卿のグループは、二〇〇九年に発表した研究で香りそのものを試した。三十七〜六十歳の健康な男性十二人が都市のホテルに三泊し、夜から朝まで部屋でヒノキの幹の精油を加湿器で気化させた。その後、NK細胞の活性は前より高く、尿中のアドレナリンとノルアドレナリンは低かった。著者らは、香りとストレスホルモンの低下が、森で見られる免疫の変化に一部寄与している可能性を示すと書いた。同じ留保があてはまる。男性十二人、偽の香りによる対照なし、単一のグループである。",
            zh:"李卿的團隊在 2009 年發表的研究中直接測試了香氣。12 名 37 至 60 歲的健康男性在都市中的一家飯店住了三晚，房內從傍晚到早晨以加濕器揮發扁柏樹幹精油。之後他們的 NK 細胞活性高於住宿前，尿中腎上腺素與正腎上腺素則較低——作者認為，這表示香氣與壓力荷爾蒙下降，可能部分促成了在森林中觀察到的免疫變化。同樣的保留仍然適用：12 名男性、沒有安慰劑香氣對照、單一研究團隊。" } },
        { t:"p",
          text:{
            en:"Other studies, reviewed by Ikei, Song and Miyazaki in 2017, looked at the senses one by one. Inhaling α-pinene raised a measure of parasympathetic activity by about 47% and lowered heart rate by about 3%; the scent of hinoki chips reduced blood flow in the prefrontal cortex, read as a sign of calm, in a group of 14 male students. In a visual study, 15 young men sat in real rooms with wood covering 30%, 45% or 90% of the surfaces: the 30% room lowered diastolic blood pressure and pulse, while the more heavily panelled rooms raised pulse slightly — more stimulating, not more soothing. Touching hinoki or sugi with the palm left blood pressure almost unchanged, while touching metals such as aluminium or steel raised it. None of this proves that a wooden house makes anyone healthier; it does suggest that people's liking for wood rooms has a physiological counterpart.",
            ja:"池井、宋、宮崎が二〇一七年にまとめたほかの研究は、感覚を一つずつ調べた。α-ピネンを吸うと副交感神経活動の指標が約四七％上がり、心拍数が約三％下がった。ヒノキのチップの香りは、男子学生十四人のグループで前頭前野の血流を減らし、これは鎮静のしるしと解釈された。視覚の研究では、若い男性十五人が、壁などの面の三〇％、四五％、九〇％を木が覆う実際の部屋に座った。三〇％の部屋では拡張期血圧と脈拍が下がり、木の多い部屋では脈拍がわずかに上がった——落ちつくのではなく、むしろ刺激的だったのである。ヒノキやスギに手のひらでふれても血圧はほとんど変わらなかったが、アルミニウムや鋼などの金属にふれると上がった。どれも、木の家が人を健康にすることを証明するものではない。ただ、人が木の部屋を好むことには、生理的な裏づけがあることをうかがわせる。",
            zh:"池井、宋與宮崎於 2017 年回顧的其他研究，則逐一檢驗各種感官。吸入 α-蒎烯使副交感神經活動指標上升約 47%，心率下降約 3%；在一組 14 名男學生中，扁柏木片的香氣降低了前額葉皮質的血流量，被解讀為平靜的跡象。在一項視覺研究中，15 名年輕男性坐在牆面等表面分別有 30%、45%、90% 覆以木材的真實房間裡：30% 的房間使舒張壓與脈搏下降，木材更多的房間則使脈搏略為上升——更具刺激性，而非更舒緩。以手掌觸摸扁柏或柳杉時，血壓幾乎沒有變化；觸摸鋁或鋼等金屬時，血壓則會上升。這些都不能證明木造房屋使人更健康；但確實顯示，人們喜歡木造房間，是有生理上的對應的。" } },
        { t:"tiny",
          text:{
            en:"Sources: Li Q. et al., “Effect of phytoncide from trees on human natural killer cell function”, International Journal of Immunopathology and Pharmacology 22 (2009); Ikei, Song and Miyazaki (2017), cited above; hinoki wood-oil analysis as on the Chemistry &amp; Scent page.",
            ja:"出典：李卿ほか「Effect of phytoncide from trees on human natural killer cell function」『International Journal of Immunopathology and Pharmacology』二十二巻（二〇〇九年）、池井・Song・宮崎（二〇一七年、前掲）、ヒノキ材油の分析は「化学と香り」の頁に同じ。",
            zh:"資料來源：李卿等，〈Effect of phytoncide from trees on human natural killer cell function〉，《International Journal of Immunopathology and Pharmacology》第 22 卷（2009 年）；池井、Song、宮崎（2017 年，見前）；扁柏木材精油分析同〈化學與香氣〉頁。" } }
      ] },
    { t:"section",
      id:"pollen",
      title:{ en:"The other side: pollen", ja:"もう一つの面：花粉", zh:"另一面：花粉" },
      jp:"スギ花粉症",
      body:[
        { t:"p",
          text:{
            en:"The forests that calm the body also make millions of people miserable every spring. Allergy to sugi pollen was first confirmed in 1964, in Nikkō in Tochigi prefecture. It has since become a national condition: in the nationwide surveys of otolaryngologists and their families, the share of people with sugi pollinosis rose from 16.2% in 1998 to 26.5% in 2008 and 38.8% in 2019 — roughly ten percentage points a decade. Hinoki pollen, which follows sugi in April, affects many of the same people. The cause is the age of the post-war plantations described on the <a href=\"sugi.html\">Sugi</a> page: sugi begins to flower heavily at about twenty years, and most of the trees planted in the 1950s and 1960s are now at full production.",
            ja:"身体を落ちつかせる森は、毎年春には何百万もの人を苦しめもする。スギ花粉症は一九六四年、栃木県の日光で初めて確認された。以来それは国民的な病となった。耳鼻咽喉科医とその家族を対象とする全国調査では、スギ花粉症の人の割合は一九九八年の一六・二％から二〇〇八年の二六・五％、二〇一九年の三八・八％へと増えた。十年でおよそ十ポイントである。四月にスギに続いて飛ぶヒノキの花粉も、同じ人の多くを悩ませる。原因は<a href=\"sugi.html\">スギ</a>の頁で述べた戦後の人工林の樹齢にある。スギは二十年ほどで盛んに花をつけはじめ、一九五〇年代から一九六〇年代に植えた木の多くが、いまや花粉を最も多く出す年齢にある。",
            zh:"讓身體平靜的森林，每年春天也讓數百萬人苦不堪言。柳杉花粉過敏於 1964 年在栃木縣日光首次確認，此後成為全國性的病症：在以耳鼻喉科醫師及其家屬為對象的全國調查中，柳杉花粉症患者的比例從 1998 年的 16.2%，增加到 2008 年的 26.5% 與 2019 年的 38.8%——大約每十年增加十個百分點。四月接在柳杉之後飛散的扁柏花粉，也困擾著許多同一批人。原因在於<a href=\"sugi.html\">日本柳杉</a>頁所述戰後人工林的樹齡：柳杉約二十年開始大量開花，而 1950 與 1960 年代種下的樹，如今多半正處於花粉產量最高的年齡。" } },
        { t:"figure",
          caption:{
            en:"Prevalence of allergic rhinitis and of sugi pollinosis in Japan in three nationwide surveys of otolaryngologists and their families, 1998, 2008 and 2019 (Baba et al.; Matsubara et al., 2020). The respondents are not a random sample of the population.",
            ja:"日本のアレルギー性鼻炎とスギ花粉症の有病率。耳鼻咽喉科医とその家族を対象とした一九九八年、二〇〇八年、二〇一九年の三回の全国調査による（馬場ほか、松原ほか 二〇二〇年）。回答者は人口の無作為抽出ではない。",
            zh:"日本過敏性鼻炎與柳杉花粉症的盛行率，依據 1998、2008、2019 年三次以耳鼻喉科醫師及其家屬為對象的全國調查（馬場等；松原等，2020 年）。受訪者並非人口的隨機樣本。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"Pollen allergy in Japan", ja:"日本の花粉症", zh:"日本的花粉症" },
            unit:{ en:"prevalence, %", ja:"有病率（％）", zh:"盛行率（%）" },
            x0:1996, x1:2021, y0:0, y1:60, tick:10, xt:[1998, 2008, 2019], endLabels:true, dec:1, legendW:170,
            series:[
              { n:{ en:"Allergic rhinitis (all)", ja:"鼻アレルギー全体", zh:"過敏性鼻炎（全部）" }, pts:[[1998,29.8],[2008,39.4],[2019,49.2]] },
              { n:{ en:"Sugi pollinosis", ja:"スギ花粉症", zh:"柳杉花粉症" }, pts:[[1998,16.2],[2008,26.5],[2019,38.8]], dash:"5 4" }
            ] }); } },
        { t:"p",
          text:{
            en:"In May 2023 the government's ministerial council on pollen allergy adopted a package aimed, in part, at the forests themselves. It counted about 4.31 million hectares of sugi plantations of pollen-producing age and set targets: to cut that area by about 20% within ten years, to halve pollen output within thirty, to raise the share of low-pollen and pollen-free stock among sugi seedlings to more than 90% within ten years, to increase sugi felling from about 50,000 to 70,000 hectares a year, and to lift demand for sugi timber from about 12.4 to 17.1 million cubic metres. It is, in effect, a forestry policy: more cutting, more building with sugi, and replanting with better trees. Whether that can be done without clear-felling steep slopes too quickly, and whether the market can absorb the extra timber, is discussed in <a href=\"debates.html\">Where People Disagree</a>.",
            ja:"二〇二三年五月、政府の花粉症に関する関係閣僚会議は、一部で森そのものを対象とする対策をまとめた。花粉を出す樹齢のスギ人工林を約四百三十一万haと数え、目標を掲げた。その面積を十年で約二割減らすこと、三十年で花粉の発生量を半分にすること、スギ苗のうち少花粉・無花粉の苗の割合を十年で九割以上にすること、スギの伐採を年約五万haから七万haに増やすこと、スギ材の需要を約千二百四十万m³から千七百十万m³に増やすことである。事実上これは林業政策である。より多く伐り、よりスギで建て、より良い木を植えなおす。急斜面を急いで皆伐することなくそれができるのか、市場が増えた材を吸収できるのかは、<a href=\"debates.html\">論の分かれるところ</a>で扱う。",
            zh:"2023 年 5 月，日本政府的花粉症相關閣僚會議通過一套對策，其中一部分直接針對森林本身。它統計出約 431 萬公頃已達產花粉樹齡的柳杉人工林，並訂定目標：十年內將此面積減少約兩成；三十年內使花粉產量減半；十年內使少花粉與無花粉苗木占柳杉苗木的比例超過九成；柳杉伐採面積從每年約 5 萬公頃增加到 7 萬公頃；柳杉木材需求從約 1,240 萬立方公尺提高到 1,710 萬立方公尺。這實際上是一項林業政策：多砍伐、多用柳杉蓋房子、以更好的樹種重新造林。這能否在不過快皆伐陡坡的情況下達成，市場能否吸收增加的木材，見<a href=\"debates.html\">意見分歧之處</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Annual Report on Forests and Forestry FY2023, special feature on pollen; Matsubara A. et al., nationwide epidemiological survey of allergic rhinitis 2019, Nippon Jibiinkoka Gakkai Kaiho 123 (2020); Cabinet Secretariat, “Overall picture of pollen allergy countermeasures” (30 May 2023).",
            ja:"出典：林野庁『令和五年度 森林及び林業の動向』特集「花粉と森林」（二〇二三年度）、松原篤ほか「鼻アレルギーの全国疫学調査2019」『日本耳鼻咽喉科学会会報』一二三巻（二〇二〇年）、内閣官房「花粉症対策の全体像」（二〇二三年五月三十日）。",
            zh:"資料來源：林野廳《令和 5 年度森林及林業動向》（2023 年度）花粉特輯；松原篤等，〈鼻過敏全國流行病學調查 2019〉，《日本耳鼻咽喉科學會會報》第 123 卷（2020 年）；內閣官房〈花粉症對策全貌〉（2023 年 5 月 30 日）。" } }
      ] },
    { t:"section",
      id:"safety",
      title:{ en:"Hard on the body: forest work", ja:"身体に厳しい仕事：林業", zh:"對身體嚴苛的工作：林業" },
      jp:"労働災害",
      body:[
        { t:"p",
          text:{
            en:"For the people who work in them, forests are not a place of rest. By accident rate forestry has long been Japan's most dangerous industry: the injury rate for accidents causing four or more days off work has ranged from about 21 to 33 per thousand workers a year since the 2000s, roughly ten times the average for all industries. Felling causes about six in ten fatal accidents; others come from falls on steep slopes, rolling logs, overturned machines and chainsaw cuts. Summer weeding among young plantations brings heatstroke and hornet stings, and in the 1960s, when chainsaws spread through the national forests, many operators developed vibration white finger, a circulatory disorder of the hands that became one of the defining occupational diseases of post-war Japan. <a href=\"workers.html\">The People of the Forest</a> describes how training, protective equipment and machinery are trying to change this.",
            ja:"そこで働く人にとって、森は休む場所ではない。災害の率でみると、林業は長く日本で最も危険な産業である。休業四日以上の災害の死傷年千人率は、二〇〇〇年代から働き手千人あたり年におよそ二十一〜三十三を行き来し、全産業の平均の約十倍である。死亡災害のおよそ六割は伐倒によるもので、ほかに急斜面での転落、転がる丸太、機械の転倒、チェーンソーの切創がある。夏の若い人工林での下刈りは熱中症とスズメバチの刺傷をもたらす。一九六〇年代、国有林にチェーンソーが広まると、多くの作業員が振動による手の血行障害「白ろう病」を患い、これは戦後日本を代表する職業病の一つとなった。<a href=\"workers.html\">山で働く人々</a>では、訓練、保護具、機械化がこれをどう変えようとしているかを述べる。",
            zh:"對在森林工作的人而言，森林並非休憩之地。以事故率而言，林業長期以來是日本最危險的產業：自 2000 年代以來，導致休業四天以上之事故的傷亡率，約為每年每千名工作者 21 至 33 人，大約是全產業平均的十倍。死亡事故約六成由伐倒造成，其他則來自陡坡跌落、滾落原木、機械翻覆與鏈鋸割傷。夏季在幼齡人工林除草，則帶來中暑與虎頭蜂螫傷。1960 年代，鏈鋸在國有林普及後，許多作業員罹患因振動造成的手部血液循環障礙「白蠟病」，成為戰後日本代表性的職業病之一。<a href=\"workers.html\">山林中的工作者</a>說明訓練、防護裝備與機械化如何試圖改變這一切。" } },
        { t:"p",
          text:{
            en:"The two halves of this page belong together. The health benefits of a walk in the woods, however modest, depend on forests that someone has planted, thinned and kept open — often at real risk to their own bodies. A visitor's fee at a therapy base, a purchase of local timber or a municipality's share of the national forest environment tax all help pay for that work.",
            ja:"この頁の二つの半分は、ひとつながりのものである。森を歩くことの健康への効用は、たとえ控えめなものであっても、誰かが植え、間伐し、手入れを続けてきた森にかかっている。しかもそれは、しばしばその人自身の身体を本当の危険にさらしてなされる。セラピー基地で払う料金、地元の木材を買うこと、市町村に配られる森林環境譲与税は、いずれもその仕事を支える助けになる。",
            zh:"本頁的兩半是一體的。林間漫步對健康的益處，即使有限，也有賴於有人種植、疏伐並持續照管的森林——而這些工作常讓他們自己的身體承受真實的風險。在療法基地支付的費用、購買在地木材，或市町村分配到的森林環境讓與稅，都有助於支撐這份工作。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Health, Labour and Welfare, industrial accident statistics; Forestry Agency, labour safety pages (see The People of the Forest).",
            ja:"出典：厚生労働省 労働災害統計、林野庁 林業労働安全のページ（「山で働く人々」を参照）。",
            zh:"資料來源：厚生勞動省勞動災害統計；林野廳林業勞動安全頁面（見〈山林中的工作者〉）。" } }
      ] },
    { t:"related",
      items:[
        { href:"chemistry.html",
          why:{ en:"The terpenes behind the scent of hinoki and sugi.", ja:"ヒノキとスギの香りのもとになるテルペン。", zh:"扁柏與柳杉香氣背後的萜類。" } },
        { href:"satoyama.html",
          why:{ en:"The village woods where people once spent their days.", ja:"かつて人が日々を過ごした村の林。", zh:"人們曾經日日往來的村落林地。" } },
        { href:"sugi.html",
          why:{ en:"The tree behind Japan's pollen season.", ja:"日本の花粉の季節の背後にある木。", zh:"日本花粉季背後的樹。" } },
        { href:"workers.html",
          why:{
            en:"The people who work in the forest, and the risks they take.",
            ja:"森で働く人びとと、その危険。",
            zh:"在森林工作的人及其所承擔的風險。" } },
        { href:"visiting.html",
          why:{ en:"Where to walk in the forests of Gifu.", ja:"岐阜の森のどこを歩くか。", zh:"在岐阜的森林何處漫步。" } }
      ] }
  ] };

/* ---- ------------------------------------------- mokuiku */
GIFU.pages["mokuiku"] = { kicker:{ en:"Living with Wood · 06", ja:"木と暮らす · 06", zh:"與木共處 · 06" },
  title:{ en:"Learning Through Wood", ja:"木育", zh:"木育" },
  jp:"木育",
  lede:{
    en:"Japan has a word, <em>mokuiku</em>, for bringing up children with wood: letting babies chew wooden rattles, toddlers climb wooden hills, schoolchildren saw and plane, and families walk in the forest where the wood comes from. The idea was born in Hokkaido in 2004 and became national policy two years later. Gifu, where eight-tenths of the land is forest, has made it one of its signatures, with a prefectural wood-play museum, more than a hundred wood-play corners in nurseries and libraries, a forest education centre, and woodworking workshops open to visitors. This page follows the idea from a baby's first toy to the workshops of Hida, and across the sea to Taiwan.",
    ja:"日本には、木とともに子どもを育てることを指す「木育」という言葉がある。赤ちゃんに木のがらがらをしゃぶらせ、幼児に木の小山を登らせ、小学生にのこぎりやかんなを使わせ、家族でその木の育った森を歩く。この考えは二〇〇四年に北海道で生まれ、二年後に国の政策となった。土地の八割が森である岐阜は、これを県の看板の一つにしてきた。県立の木育施設、保育園や図書館にある百を超える木育の遊び場、森林総合教育センター、訪れる人に開かれた木工の工房がある。この頁は、赤ちゃんの最初のおもちゃから飛騨の工房まで、そして海を越えて台湾まで、この考えをたどる。",
    zh:"日本有個詞叫「木育」，指的是以木材陪伴孩子成長：讓嬰兒啃咬木製搖鈴，讓幼兒攀爬木造小丘，讓小學生學習用鋸子與鉋刀，讓家人一同走進木材生長的森林。這個理念於 2004 年誕生於北海道，兩年後成為國家政策。土地有八成是森林的岐阜，把它當成縣的招牌之一：有縣立的木育設施、托育機構與圖書館裡一百多處木育遊戲角落、一座森林綜合教育中心，以及向遊客開放的木工工坊。本頁從嬰兒的第一件玩具一路追到飛驒的工坊，再越過海洋來到台灣。" },
  body:[
    { t:"section",
      id:"idea",
      title:{ en:"A word from Hokkaido", ja:"北海道で生まれた言葉", zh:"誕生於北海道的詞" },
      jp:"木育の誕生",
      body:[
        { t:"p",
          text:{
            en:"<em>Mokuiku</em> is built like the older Japanese words for the branches of upbringing — <em>chiiku</em> (intellectual education), <em>tokuiku</em> (moral education), <em>taiiku</em> (physical education) — and above all like <em>shokuiku</em>, “food education”, which was given its own basic law in 2005. The wood version came first from the north. In September 2004 the Hokkaido government launched a Mokuiku Project, chaired by the ecologist Tsujii Tatsuichi of the Hokkaido Environment Foundation, and its report of March 2005 defined the aim as helping people, from childhood, to grow a rich heart that thinks for itself about the relationship between people and forests, through the use of wood. In practice the Hokkaido definition was wider and simpler: activities in which everyone, children first, can meet wood, learn from wood and live with wood.",
            ja:"「木育」は、子育ての各分野を指す古い言葉——知育、徳育、体育——にならってつくられ、とりわけ二〇〇五年に基本法が定められた「食育」を手本にしている。木の版は北から生まれた。二〇〇四年九月、北海道は「木育推進プロジェクト」を立ちあげ、北海道環境財団の生態学者辻井達一が座長を務めた。二〇〇五年三月のその報告は、子どものころから木を使うことを通じて、人と森や木との関わりを主体的に考えられる豊かな心を育てることを目的に掲げた。実際には北海道の定義はもっと広く簡単で、子どもをはじめとするすべての人が、木とふれあい、木に学び、木と生きる取り組み、というものだった。",
            zh:"「木育」一詞的構造，仿照日本對教養各面向的舊有說法——知育、德育、體育——尤其是 2005 年已有專門基本法的「食育」。木的版本最早來自北方。2004 年 9 月，北海道政府啟動「木育推進計畫」，由北海道環境財團的生態學者辻井達一擔任召集人；其 2005 年 3 月的報告將目標定為：讓人從孩提時代起，透過使用木材，培養能主動思考人與森林、木材之關係的豐富心靈。實際上北海道的定義更寬也更簡單：讓所有人——首先是孩子——與木接觸、向木學習、與木共生的活動。" } },
        { t:"p",
          text:{
            en:"The word spread fast because it met a need. By the early 2000s Japan's post-war plantations were reaching maturity, domestic timber prices had collapsed, and the forestry industry worried that a generation raised among plastic, steel and printed laminate would never think of wood as something to choose. In September 2006 the national Basic Plan for Forests and Forestry named <em>mokuiku</em> as an educational activity to deepen understanding of wood culture and the benefits of using wood. The Forestry Agency set up a committee to develop the programme in 2007, training courses for wood-education instructors began in Tokyo and Osaka in 2010, and the same year's Act on the Promotion of Use of Wood in Public Buildings pushed municipalities to build nurseries and schools in timber — giving mokuiku rooms to happen in.",
            ja:"この言葉が急速に広まったのは、必要に応えたからである。二〇〇〇年代の初め、戦後の人工林は成熟に近づき、国産材の価格は崩れ、林業界は、プラスチックや鋼やプリント化粧板に囲まれて育った世代が木を選ぶものと考えなくなることを案じていた。二〇〇六年九月、国の森林・林業基本計画は、木の文化や木を使うことの意義への理解を深める教育活動として「木育」を位置づけた。林野庁は二〇〇七年に推進体制を整える委員会を設け、二〇一〇年には東京と大阪で木育の指導者の養成講座が始まった。同じ年の公共建築物等木材利用促進法は、市町村に保育所や学校を木で建てるよう促し、木育の場となる部屋を生んだ。",
            zh:"這個詞之所以迅速傳開，是因為它回應了一種需要。2000 年代初，日本戰後的人工林逐漸成熟，國產材價格崩跌，林業界擔心在塑膠、鋼鐵與印刷貼皮板材中長大的一代，永遠不會把木材當成值得選擇的東西。2006 年 9 月，國家的《森林・林業基本計畫》將「木育」定位為加深人們理解木文化與用木意義的教育活動。林野廳於 2007 年成立推動體制的委員會；2010 年，木育指導者培訓課程在東京與大阪開辦；同年的《公共建築物等木材利用促進法》推動市町村以木材興建托育機構與學校——讓木育有了發生的空間。" } },
        { t:"defs",
          items:[
            { term:{ en:"Mokuiku", ja:"木育", zh:"木育" },
              jp:"もくいく",
              def:{
                en:"“Wood education”: meeting wood, learning from it and living with it, from infancy onwards. Proposed in Hokkaido in 2004; national policy from 2006.",
                ja:"乳幼児のころから木とふれあい、木に学び、木と生きること。二〇〇四年に北海道で提唱され、二〇〇六年から国の政策となった。",
                zh:"「木材教育」：從嬰幼兒期起與木接觸、向木學習、與木共生。2004 年由北海道提出，2006 年起成為國家政策。" } },
            { term:{ en:"Shokuiku", ja:"食育", zh:"食育" },
              jp:"しょくいく",
              def:{
                en:"“Food education”, the model for the word, with its own basic law of 2005. Both aim to reconnect children with where everyday things come from.",
                ja:"この言葉の手本となった「食育」。二〇〇五年に基本法が定められた。どちらも、身近なものがどこから来るかに子どもを結びなおそうとする。",
                zh:"「食育」，是木育一詞的範本，2005 年訂有基本法。兩者都希望讓孩子重新認識日常事物從何而來。" } },
            { term:{ en:"Wood Start", ja:"ウッドスタート", zh:"Wood Start 木育起步" },
              jp:"誕生祝い品",
              def:{
                en:"A programme of the Tokyo Toy Museum in which a municipality pledges to give newborns a wooden toy of local timber and to bring wood into childcare. The name echoes Bookstart, the British scheme of giving books to babies.",
                ja:"東京おもちゃ美術館の取り組みで、市町村が生まれた子に地元の木のおもちゃを贈り、子育ての場に木を取り入れることを宣言する。名前は、赤ちゃんに絵本を贈るイギリスのブックスタートを思わせる。",
                zh:"東京玩具美術館推動的計畫：市町村宣誓以在地木材製作的玩具贈送新生兒，並把木材帶進育兒環境。名稱令人聯想到英國贈書給嬰兒的 Bookstart 計畫。" } },
            { term:{ en:"Wood-education instructor", ja:"木育インストラクター", zh:"木育指導員" },
              jp:"指導者養成",
              def:{
                en:"A short certified course, run since 2010, for people who want to lead wood play and workshops. Hokkaido trains its own “mokuiku meisters”.",
                ja:"二〇一〇年から開かれている短期の認定講座で、木の遊びやワークショップを導きたい人が受講する。北海道は独自に「木育マイスター」を育てている。",
                zh:"自 2010 年開辦的短期認證課程，對象是希望帶領木頭遊戲與工作坊的人。北海道另有自己培訓的「木育大師」。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Hokkaido Government, “What is mokuiku?”; Japanese Wikipedia, “Mokuiku”; Forestry Agency, collection of wood-education cases; Journal of Forest Economics review of mokuiku (J-STAGE).",
            ja:"出典：北海道「木育とは？」、ウィキペディア日本語版「木育」、林野庁「木育をはじめとする木材利用の普及啓発に関する事例集」、『林業経済研究』所収の木育に関する論文（J-STAGE）。",
            zh:"資料來源：北海道政府〈什麼是木育？〉；日文維基百科〈木育〉；林野廳〈木育等木材利用推廣事例集〉；《林業經濟研究》木育相關論文（J-STAGE）。" } }
      ] },
    { t:"section",
      id:"woodstart",
      title:{ en:"A wooden toy for every newborn", ja:"生まれた子に木のおもちゃを", zh:"給每個新生兒一件木玩具" },
      jp:"ウッドスタート",
      body:[
        { t:"p",
          text:{
            en:"The best-known national programme comes not from government but from a museum. The Tokyo Toy Museum, run by a non-profit and housed since 2008 in a former primary school in Yotsuya, Shinjuku, opened a “baby wood-education plaza” — a room of wooden floors, toys and play structures for children under two — in 2011, and turned the idea into a pledge that municipalities could sign. Shinjuku ward became the first to declare itself a Wood Start municipality, on 6 August 2012. According to the museum, sixty municipalities and four prefectures have since signed up.",
            ja:"最もよく知られた全国的な取り組みは、国ではなく美術館から生まれた。東京おもちゃ美術館は非営利法人が運営し、二〇〇八年から新宿区四谷の元小学校の校舎にある。二〇一一年、木の床とおもちゃと遊具で満たした二歳未満の子のための部屋「赤ちゃん木育ひろば」を開き、この考えを市町村が署名できる宣言のかたちにした。二〇一二年八月六日、新宿区が最初のウッドスタート宣言を行った。美術館によれば、その後六十の市区町村と四つの県が宣言している。",
            zh:"日本最著名的全國性木育計畫，並非來自政府，而是來自一座美術館。東京玩具美術館由非營利法人經營，自 2008 年起設於新宿區四谷一所舊小學的校舍內。2011 年，它開設了「嬰兒木育廣場」——一個以木地板、木玩具與木製遊具布置、專供兩歲以下幼兒使用的房間——並把這個理念轉化為市町村可以簽署的宣言。2012 年 8 月 6 日，新宿區成為第一個宣告加入 Wood Start 的自治體。據該館表示，此後已有 60 個市區町村與 4 個縣簽署。" } },
        { t:"p",
          text:{
            en:"A declaration typically commits a town to three things: a birth gift of a wooden toy made from local timber by local makers, wooden toys and furniture in the town's nurseries and health centres, and events at which parents and small children play with wood. The gift is the visible part, and towns compete to design something that says where the child was born. In Gifu, Ōno — a town on the plain west of Gifu city, known for its roses and persimmons — made its declaration on 15 March 2017, and gives its babies a small wooden train with round windows, the <em>Maru-mado Densha</em>.",
            ja:"宣言をした町は、ふつう三つのことを約束する。地元の木で地元の作り手がつくった木のおもちゃを誕生祝いに贈ること、町の保育所や保健センターに木のおもちゃや家具を置くこと、親と幼い子が木で遊ぶ催しを開くことである。贈り物は目に見える部分で、町は子どもの生まれた土地を語るものをつくろうと競いあう。岐阜県では、岐阜市の西の平野にあり、バラと柿で知られる大野町が二〇一七年三月十五日に宣言し、丸い窓のついた小さな木の電車「まるまど電車」を赤ちゃんに贈っている。",
            zh:"宣言通常讓一個市町承諾三件事：以在地木材、由在地工匠製作的木玩具作為新生兒賀禮；在該地的托育機構與保健中心放置木玩具與木家具；舉辦讓家長與幼兒一起玩木頭的活動。賀禮是看得見的部分，各地爭相設計能說明孩子出生地的作品。在岐阜縣，位於岐阜市西側平原、以玫瑰與柿子聞名的大野町，於 2017 年 3 月 15 日宣言加入，送給嬰兒一輛有圓窗的小木火車「圓窗電車」。" } },
        { t:"p",
          text:{
            en:"Small wooden things for children are nothing new in the region: the Ichii yew carvers of Takayama sell little animals of the zodiac, and several of the Takayama furniture houses make children's chairs and toys alongside their tables. What mokuiku adds is a reason for the public purse to pay for them, and a claim — sometimes more hopeful than proven — that children who handle real wood grow up to value forests. The immediate benefit is easier to demonstrate: every birth gift is an order for a local workshop, and every nursery furnished in hinoki is a small market for local sawmills.",
            ja:"子どものための小さな木の品は、この地方では目新しいものではない。高山の一位一刀彫の彫り師は小さな十二支の動物を売り、高山の家具メーカーのいくつかは、テーブルと並んで子ども椅子やおもちゃもつくっている。木育が加えたのは、それに公のお金を払う理由と、木に実際にふれた子どもは森を大切にする大人に育つという主張——ときに証明より期待に近い——である。すぐに示せる効用のほうはわかりやすい。誕生祝いの品の一つ一つが地元の工房への注文となり、ヒノキで整えた保育園の一つ一つが地元の製材所の小さな市場となる。",
            zh:"給孩子的小木器，在這個地區並不新鮮：高山的一位一刀雕師傅販售小巧的十二生肖動物，幾家高山家具廠除了桌子之外，也製作兒童椅與玩具。木育所增添的，是讓公家預算為這些東西付錢的理由，以及一種主張——有時與其說已獲證明，不如說是期望——即親手接觸真正木材的孩子，長大後會珍惜森林。立即的好處則容易說明：每一份新生兒賀禮都是給在地工坊的訂單，每一間以扁柏裝修的托育機構都是在地製材廠的小市場。" } },
        { t:"tiny",
          text:{
            en:"Sources: Tokyo Toy Museum, Mokuiku Lab, list of Wood Start municipalities; Japanese Wikipedia, “Mokuiku”.",
            ja:"出典：東京おもちゃ美術館「木育ラボ」ウッドスタート自治体一覧、ウィキペディア日本語版「木育」。",
            zh:"資料來源：東京玩具美術館「木育 Lab」Wood Start 自治體一覽；日文維基百科〈木育〉。" } }
      ] },
    { t:"section",
      id:"gifu",
      title:{ en:"Gifu's thirty-year plan", ja:"岐阜の三十年の構想", zh:"岐阜的三十年構想" },
      jp:"ぎふ木育",
      body:[
        { t:"p",
          text:{
            en:"Gifu came to the idea from its own direction. The prefecture dates its own work to a “Green Children's Conference” first held in 2003, and it adopted the word <em>mokuiku</em> as it spread from Hokkaido. It later drew up the <em>Gifu Mokuiku 30-Year Vision</em>, which gives the programme three organising ideas. The first is length: wood education should run for about thirty years, from birth until the child is raising the next generation. The second is connection: to local history, crafts and industry, to schools and neighbourhoods, and between generations. The third is progression: six stages, from a baby's first contact with wood to adults who manage forests and teach others, with the prefectural wood-play museum in Gifu city as the one place where all six can be experienced. The prefecture reports distributing the vision to every kindergarten, nursery and school in Gifu, together with a Gifu mokuiku curriculum and training for nursery staff and teachers.",
            ja:"岐阜は独自の方向からこの考えにたどりついた。県は自らの取り組みの始まりを二〇〇三年の「緑の子ども会議」に置き、北海道から広まった「木育」という言葉を取り入れた。のちに県は「ぎふ木育三十年ビジョン」をまとめ、三つの考えを柱とした。一つめは長さである。木育は生まれてから、その子が次の世代を育てるまでの約三十年にわたって続くべきだとする。二つめはつながりで、地域の歴史や工芸や産業、学校や地域、そして世代のあいだを結ぶ。三つめは段階で、赤ちゃんが初めて木にふれるところから、森を手入れし人に教える大人までを六つの段階に分け、岐阜市にある県の木育施設を、そのすべてを体験できるただ一つの場所とする。県によれば、ビジョンは県内のすべての幼稚園、保育所、学校に配られ、「ぎふ木育カリキュラム」と保育士や教員向けの研修がともに進められた。",
            zh:"岐阜是從自己的方向走向這個理念的。該縣把自身木育工作的起點定在 2003 年首次舉辦的「綠色兒童會議」，並採用了從北海道傳開的「木育」一詞。之後縣府制定《岐阜木育三十年願景》，以三個理念為架構。第一是長度：木育應延續約三十年，從出生一直到那個孩子養育下一代。第二是連結：與在地的歷史、工藝與產業連結，與學校和社區連結，也在世代之間連結。第三是階段：分為六個階段，從嬰兒第一次接觸木材，到管理森林、教導他人的成人；位於岐阜市的縣立木育設施，是唯一能體驗全部六個階段的地方。據縣府表示，這份願景已發送到縣內所有幼稚園、托育機構與學校，並搭配「岐阜木育課程」及保育員與教師研習。" } },
        { t:"p",
          text:{
            en:"The most widespread result is the <em>Gifu mokuiku hiroba</em>, a “wood-play corner” furnished with toys and furniture of Gifu timber in a nursery, kindergarten, children's centre or library. The prefecture pays half the cost of wooden toys and kits made from Gifu timber, up to ¥100,000 per facility, and more for facilities that run its wood-education classes; by January 2026 it counted 107 designated corners, and the fund for the 2026 fiscal year was fully subscribed by May. For groups that cannot buy, a lending scheme provides sets of Gifu-made wooden toys to kindergartens, nurseries, children's centres and parents' circles for up to four weeks, twice a year, collected from the prefectural office, the Academy in Mino, or the forestry offices in Ena and Hida.",
            ja:"最も広く根づいた成果は「ぎふ木育ひろば」である。保育所、幼稚園、児童館、図書館などに、岐阜の木のおもちゃや家具を置いた木の遊び場をつくるものだ。県は岐阜の木でつくった木のおもちゃやキットの費用の半分を、一施設十万円を上限に補助し、県の木育教室を行う施設にはさらに手厚くする。二〇二六年一月までに指定されたひろばは百七か所に達し、二〇二六年度の予算は五月には申し込みで埋まった。買う余裕のない団体のためには貸し出しの仕組みがあり、幼稚園、保育所、児童館、子育てサークルなどに、岐阜製の木のおもちゃのセットを最長四週間、年二回まで貸し出す。受け取りは県庁、美濃市の森林文化アカデミー、恵那と飛騨の農林事務所である。",
            zh:"最普及的成果是「岐阜木育廣場」：在托育機構、幼稚園、兒童館或圖書館裡，以岐阜木材製作的玩具與家具布置出一處木頭遊戲角落。縣府補助以岐阜木材製作之木玩具與材料組一半的費用，每處上限 10 萬日圓，舉辦縣府木育教室的設施可獲更多補助；到 2026 年 1 月，獲指定的廣場已達 107 處，2026 年度的預算在 5 月就已申請額滿。無力購買的團體可利用出借制度：幼稚園、托育機構、兒童館與育兒社團可借用成套的岐阜製木玩具，最長四週、每年最多兩次，可到縣廳、美濃市的森林文化學院，或惠那、飛驒的農林事務所領取。" } },
        { t:"note",
          label:{ en:"Does it work?", ja:"効果はあるのか", zh:"真的有效嗎？" },
          text:{
            en:"Honest answers are hard to come by. Mokuiku is promoted by forestry departments, and its success is usually counted in outputs — corners opened, toys bought, visitors received — rather than in what children later think or do. There is no long-term study showing that children raised with wooden toys become adults who buy domestic timber or care more for forests, and some educators point out that a wooden toy is still a manufactured product bought with public money. What can be said is that the programmes are popular with parents, that they put local wood and local makers in front of families who would otherwise never meet them, and that a thirty-year vision is at least long enough to find out.",
            ja:"正直な答えは得にくい。木育は林政の部局が推し進めるもので、その成果はふつう、子どもがのちに何を考え何をするかではなく、開いたひろばの数、買ったおもちゃの数、迎えた来館者の数といった出力で数えられる。木のおもちゃで育った子が国産材を買い、森を大切にする大人になることを示した長期の研究はなく、木のおもちゃも公費で買う工業製品にすぎないと指摘する教育関係者もいる。言えるのは、これらの取り組みが親たちに好評であること、ふだんなら出会うことのない家族の前に地元の木と作り手を差し出していること、そして三十年のビジョンは、少なくともその答えを確かめられるだけの長さがあるということである。",
            zh:"誠實的答案不易取得。木育由林業部門推動，其成果通常以產出計算——開設了多少廣場、購買了多少玩具、接待了多少訪客——而非孩子日後的想法或作為。目前沒有長期研究證明，玩木玩具長大的孩子，成年後會購買國產材或更加愛護森林；也有教育工作者指出，木玩具終究是以公帑購買的工業製品。可以肯定的是：這些計畫受到家長歡迎；它們讓原本不會接觸在地木材與工匠的家庭與之相遇；而三十年的願景，至少長到足以找出答案。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, “Gifu Mokuiku 30-Year Vision”; “Support for introducing Gifu wood-education materials” (updated 2026); “Lending of Gifu wooden toys” (updated April 2025); Gifu Mokuyūkan, “About Gifu mokuiku”.",
            ja:"出典：岐阜県「ぎふ木育三十年ビジョンの策定について」、「ぎふの木育教材導入支援事業」（二〇二六年更新）、「ぎふの木のおもちゃの貸出」（二〇二五年四月更新）、ぎふ木遊館「ぎふ木育について」。",
            zh:"資料來源：岐阜縣〈岐阜木育三十年願景〉；〈岐阜木育教材導入支援事業〉（2026 年更新）；〈岐阜木玩具出借〉（2025 年 4 月更新）；岐阜木遊館〈關於岐阜木育〉。" } }
      ] },
    { t:"section",
      id:"mokuyukan",
      title:{ en:"Gifu Mokuyūkan: a wooden field", ja:"ぎふ木遊館：木のはらっぱ", zh:"岐阜木遊館：木的原野" },
      jp:"ぎふ木遊館",
      body:[
        { t:"p",
          text:{
            en:"The centre of the system is Gifu Mokuyūkan, the prefectural wood-play museum in Gakuen-chō, Gifu city. It was due to open in April 2020 and, delayed by the pandemic, opened on 17 July 2020. The building is a single-storey timber structure of 836 square metres on a site of about 4,750 square metres, built of larch, hinoki, sugi, chestnut and oak, about 98% of the timber coming from Gifu's own forests. The concept is a <em>harappa</em>, an open field of the kind children used to play in, with no fixed purpose for each space: high places and low places, enclosed corners and open floor, so that children find their own ways to play. The actress Takeshita Keiko serves as honorary director.",
            ja:"この仕組みの中心は、岐阜市学園町にある県の木育施設「ぎふ木遊館」である。二〇二〇年四月に開館する予定だったが、感染症の流行で遅れ、二〇二〇年七月十七日に開館した。建物は延べ836m²の木造平屋で、敷地は約4,750m²。カラマツ、ヒノキ、スギ、クリ、ナラを使い、その約九八％を岐阜県産材が占める。考え方の中心は、それぞれの場所の使い道を決めない、昔の子どもが遊んだような「はらっぱ」である。高いところと低いところ、囲まれた隅と開けた床があり、子どもは自分で遊び方を見つける。俳優の竹下景子が名誉館長を務める。",
            zh:"這套體系的核心是位於岐阜市學園町的縣立木育設施「岐阜木遊館」。它原定於 2020 年 4 月開館，因疫情延後，於 2020 年 7 月 17 日開館。建築為樓地板面積 836 平方公尺的木造平房，基地約 4,750 平方公尺，使用落葉松、扁柏、柳杉、栗木與橡木，其中約 98% 為岐阜縣產材。其核心概念是一片「原野」——就像從前孩子們玩耍的那種空地——不為每個空間設定固定用途：有高處也有低處，有圍合的角落也有開闊的地板，讓孩子自己發現遊戲方式。演員竹下景子擔任名譽館長。" } },
        { t:"grid",
          cols:3,
          cells:[
            { k:{ en:"Opened", ja:"開館", zh:"開館" },
              v:{ en:"17 Jul 2020", ja:"二〇二〇年七月十七日", zh:"2020 年 7 月 17 日" },
              d:{ en:"Gakuen-chō, Gifu city", ja:"岐阜市学園町", zh:"岐阜市學園町" } },
            { k:{ en:"Floor area", ja:"延床面積", zh:"樓地板面積" },
              v:"836 m²",
              d:{ en:"single-storey timber", ja:"木造平屋", zh:"木造平房" } },
            { k:{ en:"Gifu timber", ja:"県産材の割合", zh:"縣產材比例" },
              v:"98%",
              d:{ en:"larch, hinoki, sugi, chestnut, oak", ja:"カラマツ・ヒノキ・スギ・クリ・ナラ", zh:"落葉松、扁柏、柳杉、栗木、橡木" } },
            { k:{ en:"Wooden toys", ja:"木のおもちゃ", zh:"木玩具" },
              v:"100+",
              d:{ en:"by makers in the prefecture", ja:"県内の作り手による", zh:"出自縣內製作者" } },
            { k:{ en:"Admission", ja:"入館料", zh:"門票" },
              v:"¥300",
              d:{ en:"adults; free to high-school age and under", ja:"大人。高校生以下は無料", zh:"成人；高中生以下免費" } },
            { k:{ en:"Satellites", ja:"サテライト", zh:"分館" },
              v:"2",
              d:{ en:"Nakatsugawa and Takayama, both 2024", ja:"中津川と高山、ともに二〇二四年", zh:"中津川與高山，皆為 2024 年" } }
          ] },
        { t:"p",
          text:{
            en:"Inside are a large wood-play plaza, a separate baby plaza, a woodworking room, a rest area and a shop. Play sessions in the main plaza are timed — 10:00 to 11:30, 13:00 to 14:30 and 15:00 to 16:30 — and the museum is closed on Wednesdays. More than a hundred wooden toys by makers in the prefecture fill the shelves; workshops include making wooden musical instruments, and there are forest outings led by “wood masters”. In 2024 the prefecture opened two satellites: one on 4 August at the Hana-kaidō Tsukechi roadside station in Nakatsugawa, free of charge, in the hinoki country of Ura-Kiso; and one named <em>Kizzu Terasu</em> in Takayama on 16 November, charging ¥300 from high-school age.",
            ja:"館内には大きな木育ひろば、別の赤ちゃんひろば、木工室、ひといき広場、ショップがある。木育ひろばは十時〜十一時半、十三時〜十四時半、十五時〜十六時半の入れ替え制で、水曜日は休館である。棚には県内の作り手による百点を超える木のおもちゃが並ぶ。ワークショップには木の楽器づくりなどがあり、「木の達人」と森を歩く体験もある。二〇二四年、県は二つのサテライトを開いた。一つは八月四日、裏木曽のヒノキの里、中津川市の道の駅「花街道付知」に開いた無料の施設、もう一つは十一月十六日に高山に開いた「木っずテラス」で、高校生以上は三百円である。",
            zh:"館內有大型木育廣場、獨立的嬰兒廣場、木工室、休憩區與商店。木育廣場採分場制——10:00 至 11:30、13:00 至 14:30、15:00 至 16:30——每週三休館。架上陳列一百多件縣內製作者的木玩具；工作坊包括製作木製樂器，也有由「木之達人」帶領的森林探訪。2024 年縣府開設兩處分館：一處於 8 月 4 日設在裏木曾扁柏之鄉、中津川市的道之驛「花街道付知」，免費入場；另一處是 11 月 16 日在高山開幕的「木っずテラス（Kizzu Terrace）」，高中生以上收費 300 日圓。" } },
        { t:"figure",
          caption:{
            en:"Where wood education reaches people in Gifu at each stage of life — a schematic drawn for this book from the prefecture's programmes and the facilities named on this page, not an official diagram of the six stages of the 30-Year Vision.",
            ja:"岐阜で木育が人生の各段階の人にどこで届くか。この本のために、県の事業とこの頁で挙げた施設をもとに描いた模式図で、三十年ビジョンの六段階の公式の図ではない。",
            zh:"岐阜的木育在人生各階段於何處觸及人們——本書依縣府計畫與本頁所提設施繪製的示意圖，並非三十年願景六個階段的官方圖示。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Thirty years with wood", ja:"木とともに三十年", zh:"與木同行三十年" }, per:3, bh:104,
            steps:[
              { t:{ en:"Birth", ja:"誕生", zh:"出生" }, d:{ en:"Wood Start gift in Ōno; baby plaza at Mokuyūkan.", ja:"大野町のウッドスタートの贈り物、木遊館の赤ちゃんひろば。", zh:"大野町的 Wood Start 賀禮；木遊館的嬰兒廣場。" } },
              { t:{ en:"Toddler", ja:"幼児", zh:"幼兒" }, d:{ en:"Wood-play corners in 107 nurseries, centres and libraries; toy lending.", ja:"保育所・児童館・図書館など百七か所の木育ひろば、おもちゃの貸し出し。", zh:"107 處托育機構、兒童館與圖書館的木育廣場；玩具出借。" } },
              { t:{ en:"Pre-school", ja:"就学前", zh:"學齡前" }, d:{ en:"Forest kindergartens and outdoor play groups.", ja:"森のようちえんと野外の遊びのグループ。", zh:"森林幼兒園與戶外遊戲團體。" } },
              { t:{ en:"School", ja:"小中学校", zh:"中小學" }, d:{ en:"Wood-education classes; Green Children's Conference since 2003.", ja:"木育教室、二〇〇三年からの緑の子ども会議。", zh:"木育教室；2003 年起的綠色兒童會議。" } },
              { t:{ en:"Teens and adults", ja:"十代と大人", zh:"青少年與成人" }, d:{ en:"morinos and the Forest Academy in Mino; workshops in Hida.", ja:"美濃のmorinosと森林文化アカデミー、飛騨の工房。", zh:"美濃的 morinos 與森林文化學院；飛驒的工坊。" } },
              { t:{ en:"Next generation", ja:"次の世代へ", zh:"傳給下一代" }, d:{ en:"Parents bring their own children back to wood.", ja:"親となって、自分の子を木のもとへ連れてくる。", zh:"成為父母後，再帶自己的孩子回到木的身邊。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"forest-school",
      title:{ en:"Into the forest itself", ja:"森そのものへ", zh:"走進森林本身" },
      jp:"森林総合教育",
      body:[
        { t:"p",
          text:{
            en:"Toys and play corners bring wood indoors; the next step is to take children to the trees. Gifu's main institution for this is the Gifu Academy of Forest Science and Culture in Mino, the prefectural college founded in 2001 to train foresters, woodworkers and timber architects. On its campus, in a forest used for teaching, the prefecture opened <em>morinos</em> in 2020 as a forest education centre — “an entrance to the forest”, in its own words, meant to connect everyone with forests and to pass on the pleasure of living with them. The small building, designed with a concept by the architect Kuma Kengo and built between April 2019 and March 2020, uses local timber throughout, including cross-laminated timber, long-span glulam beams and a plaster mixed with sugi bark, and has won several timber-design awards. Families come for free forest play, craft days and seasonal events; teachers and nursery staff come to learn how to lead children outdoors.",
            ja:"おもちゃや木育ひろばは木を室内に持ちこむ。次の一歩は、子どもを木のもとへ連れていくことである。岐阜でその中心となるのは、林業家、木工家、木造建築の技術者を育てるために二〇〇一年に美濃市に設けられた県立の学校、岐阜県立森林文化アカデミーである。演習に使う森のあるその構内に、県は二〇二〇年、森林総合教育センター「morinos」を開いた。自ら「森の入り口」と名のり、すべての人と森をつなぎ、森と暮らす楽しさを次の世代に伝えることを目ざす。建築家隈研吾のデザインコンセプトにもとづき、二〇一九年四月から二〇二〇年三月にかけて建てられた小さな建物は、CLT（直交集成板）、大スパンの集成材の梁、スギの樹皮を混ぜた左官壁など、地元の木をすみずみまで使い、いくつもの木造建築の賞を受けた。家族は森遊びや工作の日、季節の催しに訪れ、教員や保育士は子どもを外へ連れ出す方法を学びに来る。",
            zh:"玩具與木育廣場把木材帶進室內；下一步是帶孩子走到樹下。在岐阜，這方面的主要機構是位於美濃市、2001 年設立的縣立學校「岐阜縣立森林文化學院」，培育林業人才、木工師與木構建築人才。在校內一片用於教學的森林中，縣府於 2020 年開設森林綜合教育中心「morinos」——用它自己的話說，是「森林的入口」，旨在連結所有人與森林，並把與森林共生的樂趣傳給下一代。這棟小建築依建築師隈研吾的設計概念，於 2019 年 4 月至 2020 年 3 月間興建，通體使用在地木材，包括 CLT（直交集成板）、大跨距集成材梁，以及混入柳杉樹皮的灰泥牆，並獲得多項木構設計獎。家庭來這裡參加森林遊戲、手作日與季節活動；教師與保育員則來學習如何帶孩子到戶外。" } },
        { t:"p",
          text:{
            en:"The forest kindergarten, an idea from Denmark in the 1950s, has also taken root. In a <em>mori no yōchien</em> small children spend most of the day outdoors in all weathers, in woods, on riverbanks and in fields, with adults who guide rather than direct. In Japan most are small, parent-run groups or programmes attached to ordinary nurseries, and several prefectures now certify or subsidise nature-based childcare. Tellingly, Gifu's support comes through its forestry department, with an award for forest kindergartens and a prefecture-wide network of forest-play and childcare groups. For Gifu, with forest within a short walk of most villages and towns, the forest kindergarten is less an import than a return to the way children lived in the <a href=\"satoyama.html\">satoyama</a> a few generations ago.",
            ja:"一九五〇年代のデンマークに始まる森のようちえんも根づいてきた。森のようちえんでは、幼い子どもたちが天気にかかわらず一日の大半を森や川原や野原で過ごし、大人は指図するより見守る。日本では多くが親の運営する小さなグループか、ふつうの保育園に付いたプログラムで、自然保育を認証したり補助したりする県もいくつか現れた。岐阜ではこの動きを林政の部局が支えているのが印象的である。森のようちえんを表彰する賞を設け、県内の森遊びと子育てのグループのネットワークもある。たいていの町や村から歩いてすぐのところに森がある岐阜にとって、森のようちえんは輸入品というより、数世代前の子どもが<a href=\"satoyama.html\">里山と水</a>で過ごした暮らし方への回帰である。",
            zh:"源自 1950 年代丹麥的森林幼兒園理念，也在這裡生根。在「森林幼兒園」中，幼童無論晴雨都在樹林、河岸與原野度過一天中大部分時間，大人的角色是引導而非指揮。在日本，這類團體多半是家長經營的小型團體，或附屬於一般托育機構的課程；也有若干縣開始認證或補助自然保育。耐人尋味的是，岐阜是由林業部門來支持這項運動：設有表揚森林幼兒園的獎項，並有遍及全縣的森林遊戲與育兒團體網絡。在多數市鎮與村落步行即可到達森林的岐阜，森林幼兒園與其說是舶來品，不如說是回到幾代以前孩子們在<a href=\"satoyama.html\">里山與水</a>中生活的方式。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Academy of Forest Science and Culture, “morinos”; Gifu Prefecture, forest kindergarten award and Gifu forest-play network pages.",
            ja:"出典：岐阜県立森林文化アカデミー「morinos ～モリノス～」、岐阜県「ぎふ 森のようちえんアワード」、ぎふ森遊びと育ちネットワーク。",
            zh:"資料來源：岐阜縣立森林文化學院〈morinos〉；岐阜縣〈岐阜森林幼兒園獎〉及岐阜森林遊戲與育兒網絡頁面。" } }
      ] },
    { t:"section",
      id:"schools-hida",
      title:{ en:"Schools, libraries and the workshops of Hida", ja:"学校、図書館、飛騨の工房", zh:"學校、圖書館與飛驒的工坊" },
      jp:"木の学び舎",
      body:[
        { t:"p",
          text:{
            en:"For decades after the war Japan built its schools in reinforced concrete, partly out of fear of fire and partly because the forests had been overcut. The tide turned slowly: in 1985 the Ministry of Education issued a notice encouraging the use of wood in school facilities, and the 2010 Act on the Promotion of Use of Wood in Public Buildings made timber the default for low-rise public buildings where possible. Across Gifu, new nurseries, school halls and libraries now use local sugi and hinoki for structure, floors and furniture. The most visited example is not a school but the city library: at Gifu Media Cosmos, opened in 2015, children read and play beneath an undulating roof lattice of Tōnō hinoki designed by Itō Toyoo (see <a href=\"building.html\">Building in Wood</a>).",
            ja:"戦後の数十年、日本は火事への恐れと、森が伐りすぎられていたこととから、学校を鉄筋コンクリートで建てた。流れは少しずつ変わった。一九八五年、文部省は学校施設に木材を使うよう促す通知を出し、二〇一〇年の公共建築物等木材利用促進法は、低層の公共建築をできるかぎり木で建てることを原則とした。いま岐阜の各地では、新しい保育所や学校の体育館、図書館が、構造にも床にも家具にも地元のスギやヒノキを使う。最も多くの人が訪れる例は学校ではなく市の図書館である。二〇一五年に開いた「みんなの森 ぎふメディアコスモス」では、伊東豊雄が設計した東濃ヒノキの波打つ格子屋根の下で子どもたちが本を読み、遊ぶ（<a href=\"building.html\">木で建てる</a>を参照）。",
            zh:"戰後數十年間，日本出於對火災的恐懼，也因為森林遭過度砍伐，學校多以鋼筋混凝土興建。潮流是慢慢轉變的：1985 年，文部省發出通知，鼓勵在學校設施中使用木材；2010 年的《公共建築物等木材利用促進法》則使低層公共建築在可能情況下以木造為原則。如今在岐阜各地，新的托育機構、學校禮堂與圖書館，在結構、地板與家具上都使用在地的柳杉與扁柏。造訪人數最多的例子不是學校，而是市立圖書館：在 2015 年開館的「大家的森林 岐阜媒體宇宙」，孩子們在伊東豊雄設計、以東濃扁柏構成的波浪格子屋頂下閱讀與遊戲（見<a href=\"building.html\">以木建造</a>）。" } },
        { t:"p",
          text:{
            en:"For older children and adults the natural next step is to use tools. Takayama, which calls itself one of Japan's six great furniture-making districts, has the deepest resources. The Gifu Prefectural Woodcraft Arts School there runs an intensive one-year course taught by four full-time instructors from furniture making and traditional carpentry, with visiting teachers for Hida Shunkei lacquer and bentwood; its graduates go into local firms, open their own workshops or rent bench space in shared studios. Oak Village, west of the city, has long trained young woodworkers at its <em>Mori no Takumi Juku</em>. For visitors, several furniture houses open their doors: Nissin Mokkō, for example, offers a two-hour factory tour followed by a workshop in which participants make a wreath, a small doll, a shelf, a carp streamer or a pen holder, for ¥2,200 to ¥5,500, open to children of primary-school age and above with an adult. See <a href=\"learning.html\">How People Learn It</a> for the longer courses.",
            ja:"もう少し大きな子どもや大人にとって、次の一歩は道具を使うことである。自らを日本の六大家具産地の一つと称する高山は、その資源が最も厚い。岐阜県立木工芸術スクールは、家具づくりや伝統の大工仕事の経歴をもつ四人の専任講師が教える一年間の集中課程を設け、飛騨春慶や曲木の講師も招く。修了生は地元の会社に勤め、自分の工房を開き、あるいは共同工房の作業台を借りる。市の西にあるオークヴィレッジは、長く「森林たくみ塾」で若い木工家を育ててきた。旅行者に門を開く家具メーカーもいくつかある。たとえば日進木工は、約二時間の工場見学のあと、リース、小さな人形、棚、こいのぼり、ペン立てのどれかをつくるワークショップを二千二百〜五千五百円で行い、小学生以上なら大人の付き添いで参加できる。より長い課程については<a href=\"learning.html\">人はいかに学ぶか</a>を参照。",
            zh:"對年紀稍長的孩子與成人而言，自然的下一步就是動手使用工具。自稱日本六大家具產地之一的高山，這方面的資源最為深厚。當地的岐阜縣立木工藝術學校開設為期一年的密集課程，由四位出身家具製作與傳統木匠的專任講師授課，並邀請飛驒春慶漆與曲木的講師；結業生進入在地企業、自立工坊，或在共享工作室租用工作台。位於市區西側的 Oak Village，長期以其「森林匠塾」培育年輕木工。對遊客而言，有幾家家具廠開放參觀：例如日進木工提供約兩小時的工廠參觀，之後參加工作坊，可從花圈、小人偶、層架、鯉魚旗或筆筒中擇一製作，費用 2,200 至 5,500 日圓，小學生以上在大人陪同下即可參加。較長期的課程見<a href=\"learning.html\">人們如何學會它</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Takayama City, “Why learn woodworking in Hida Takayama” (2024); Nissin Mokkō factory tour listing, VISIT Gifu; Gifu Prefecture green-tourism site (Mori no Takumi Juku).",
            ja:"出典：高山市「飛騨高山で木工を学ぶ理由とは」（二〇二四年）、VISIT岐阜県 日進木工 工場見学と木工体験、岐阜県グリーン・ツーリズムサイト（森林たくみ塾）。",
            zh:"資料來源：高山市〈為何在飛驒高山學木工〉（2024 年）；VISIT 岐阜縣「日進木工工廠參觀與木工體驗」；岐阜縣綠色旅遊網站（森林匠塾）。" } }
      ] },
    { t:"section",
      id:"taiwan",
      title:{ en:"Wood education in Taiwan", ja:"台湾の木育", zh:"台灣的木育" },
      jp:"台湾・木育",
      body:[
        { t:"p",
          text:{
            en:"The Japanese word has crossed to Taiwan unchanged: <em>muyu</em> (木育) is now used there for the same mix of wooden toys, forest play and woodworking. The forestry authority — the Forestry Bureau, reorganised in 2023 as the Forestry and Nature Conservation Agency — lists wood-education courses among the environmental-education programmes of its forest recreation areas, alongside its campaign for domestic timber, launched in 2017 under the slogan “year one of domestic timber”. After decades in which Taiwan imported almost all its wood, the idea is the same as in Gifu: children who know what Taiwan's own sugi, hinoki and broadleaves feel like may one day ask for them.",
            ja:"この日本語はそのままのかたちで台湾に渡った。「木育」は台湾でも、木のおもちゃ、森遊び、木工を合わせた同じ取り組みを指す言葉として使われている。林業の当局——二〇二三年に林業及自然保育署へ改組された林務局——は、森林遊楽区の環境教育プログラムの一つとして木育の講座を掲げ、二〇一七年に「国産材元年」を掲げて始めた国産材の推進と並べて進めている。何十年も木材のほとんどを輸入してきた台湾でも、考え方は岐阜と同じである。台湾自身のスギやヒノキや広葉樹の手ざわりを知る子どもは、いつかそれを求めるようになるかもしれない。",
            zh:"這個日文詞原封不動地傳到了台灣：「木育」在台灣同樣指木玩具、森林遊戲與木工的組合。林業主管機關——2023 年改制為林業及自然保育署的林務局——把木育課程列入其森林遊樂區的環境教育方案，並與 2017 年以「國產材元年」為號召啟動的國產材推廣並行。在數十年來幾乎全仰賴進口木材的台灣，其理念與岐阜相同：認識台灣本土柳杉、扁柏與闊葉樹觸感的孩子，也許有一天會主動要求使用它們。" } },
        { t:"p",
          text:{
            en:"The work is carried out by a mix of public bodies, universities and small companies. In Chiayi — the old timber town at the foot of the Alishan railway — the Department of Wood Based Materials and Design at National Chiayi University has worked with an education group to run a wood-play space in the former forestry dormitory quarter. In December 2024, in Xincheng in Hualien, a cultural association working with a local primary school launched a set of wooden toys based on the stories of the Truku (Taroko) people, with the agency's support, for use in schools. Private makers such as the wooden-toy brand Wooderful Life run woodworking classes for parents and children. The scale is smaller than in Japan and there is no equivalent of the Wood Start pledge, but Taiwanese visitors to Gifu Mokuyūkan will find much that is familiar.",
            ja:"その担い手は、公的機関、大学、小さな会社の混ざりあいである。阿里山鉄道のふもとの古い木材の町、嘉義では、国立嘉義大学の木質材料・デザイン学科が教育団体と組み、かつての林業の宿舎街で木の遊び場を営んでいる。二〇二四年十二月、花蓮の新城では、ある文化団体が地元の小学校とともに、タロコ（トゥルク）族の物語をもとにした木のおもちゃのセットを、署の支援を受けて学校向けに発表した。木のおもちゃのブランド Wooderful Life のような民間の作り手は、親子の木工教室を開いている。規模は日本より小さく、ウッドスタートの宣言にあたるものもないが、ぎふ木遊館を訪れる台湾の人は、そこに見慣れたものを多く見いだすだろう。",
            zh:"推動者包括公部門、大學與小型企業。在阿里山鐵道山腳下的老木材城嘉義，國立嘉義大學木質材料與設計學系與一個教育團隊合作，在昔日的林業宿舍區經營一處木頭遊戲空間。2024 年 12 月，在花蓮新城，一個文化協會與當地國小合作，在林業及自然保育署支持下，推出以太魯閣族故事為題材的木育童玩，供校園推廣使用。木玩品牌 Wooderful Life 等民間業者則開設親子木工課程。規模比日本小，也沒有相當於 Wood Start 宣言的制度，但造訪岐阜木遊館的台灣人，會在那裡發現許多熟悉的東西。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry and Nature Conservation Agency (Taiwan), forest recreation site, wood-education course listing; Commercial Times (Taipei), 13 December 2024; Innovative Learning group, report on wood education in Taiwan (2025).",
            ja:"出典：林業及自然保育署（台湾）「台湾山林悠遊網」木育講座、『工商時報』二〇二四年十二月十三日、斯創教育工作群による台湾の木育の推進と展望に関する報告（二〇二五年）。",
            zh:"資料來源：林業及自然保育署「台灣山林悠遊網」木育課程；《工商時報》2024 年 12 月 13 日；斯創教育工作群〈從林開始－臺灣木育推動與展望〉（2025 年）。" } }
      ] },
    { t:"related",
      items:[
        { href:"building.html",
          why:{
            en:"Media Cosmos, morinos and other timber buildings for learning.",
            ja:"メディアコスモス、morinos など学びのための木の建物。",
            zh:"媒體宇宙、morinos 等學習用的木造建築。" } },
        { href:"learning.html",
          why:{ en:"Where adults train as woodworkers and foresters.", ja:"大人が木工や林業を学ぶところ。", zh:"成人學習木工與林業的地方。" } },
        { href:"houses.html",
          why:{
            en:"The Takayama furniture houses behind many toys and workshops.",
            ja:"多くのおもちゃや工房の背後にある高山の家具の作り手。",
            zh:"許多玩具與工坊背後的高山家具製作者。" } },
        { href:"satoyama.html",
          why:{
            en:"The village woods where children once played and worked.",
            ja:"かつて子どもが遊び、働いた村の林。",
            zh:"孩子們曾經遊戲與勞動的村落林地。" } },
        { href:"taiwan.html", why:{ en:"Wood, forests and craft in Taiwan.", ja:"台湾の木と森と工芸。", zh:"台灣的木材、森林與工藝。" } }
      ] }
  ] };

/* ---- -------------------------------------------- taiwan */
GIFU.pages["taiwan"] = { kicker:{ en:"Living with Wood · 07", ja:"木と暮らす · 07", zh:"與木共處 · 07" },
  title:{ en:"Wood in Taiwan", ja:"台湾と木", zh:"台灣與木" },
  jp:"台湾",
  lede:{
    en:"Taiwan and Gifu share a tree. The cypresses of Taiwan's central mountains are close cousins of the hinoki of Kiso and Tōnō, and for half a century they were cut, sawn and shipped under Japanese rule — some of them to become the torii and halls of Japan's most famous shrines. This page is written first for Taiwanese readers: it describes Taiwan's two great cypresses, the forest industry built at Alishan, Taipingshan and Baxianshan, the timber towns of Chiayi and Luodong, the end of natural-forest logging in 1991, the island's present struggle to grow and use its own wood, and the threads — a chemical, a trademark, a flight route — that still tie Taiwan to the forests and workshops of Gifu.",
    ja:"台湾と岐阜は一つの木を分けあっている。台湾の中央山脈の檜は木曽や東濃のヒノキの近い親類であり、半世紀のあいだ日本の統治のもとで伐られ、挽かれ、運び出された。その一部は日本でもっとも名高い神社の鳥居や社殿になった。この頁は、まず台湾の読者のために書く。台湾の二つの大きな檜、阿里山・太平山・八仙山に築かれた林業、嘉義と羅東の材木の町、一九九一年の天然林伐採の終わり、自分たちの木を育てて使おうとするいまの台湾の苦闘、そしていまも台湾を岐阜の森と工房に結ぶ糸——一つの化学物質、一つの商標、一本の空路——を描く。",
    zh:"台灣與岐阜共享同一種樹。台灣中央山脈的檜木，是木曾與東濃扁柏的近親；在日本統治下的半個世紀裡，它們被砍伐、製材、運往日本，其中一部分成了日本最著名神社的鳥居與殿舍。本頁首先為台灣讀者而寫：介紹台灣的兩種大檜木、在阿里山、太平山與八仙山建立的林業、嘉義與羅東這兩座木材城、1991 年天然林禁伐、台灣如今努力培育並使用自產木材的處境，以及至今仍把台灣與岐阜的森林和工坊連在一起的幾條線——一種化學物質、一枚商標、一條航線。" },
  body:[
    { t:"section",
      id:"cypresses",
      title:{ en:"Two cypresses", ja:"二つの檜", zh:"兩種檜木" },
      jp:"紅檜・台湾扁柏",
      body:[
        { t:"p",
          text:{
            en:"Taiwanese foresters speak simply of 檜木, “cypress wood”, but two species of <em>Chamaecyparis</em> grow in the cloud forests of the central range. The <strong>Taiwan red cypress</strong>, <em>Chamaecyparis formosensis</em> (紅檜, in Japanese <em>benihi</em>), is endemic to the island and forms some of the largest and oldest trees in East Asia; its wood is light, reddish and strongly scented. The <strong>Taiwan hinoki</strong> (台灣扁柏) is a variety of the Japanese tree itself, <em>C. obtusa</em> var. <em>formosana</em>; it grows a little higher on the mountains, often mixed with the red cypress, and its yellowish wood is denser and oilier. Both are relatives of the Kiso hinoki described on the <a href=\"hinoki.html\">hinoki</a> page, and a Japanese carpenter of the early twentieth century could use them in the same ways.",
            ja:"台湾の林業者はただ「檜木」と呼ぶが、中央山脈の霧の森には二種の<em>ヒノキ属</em>が育つ。<strong>ベニヒ</strong>（紅檜、<em>Chamaecyparis formosensis</em>）は台湾の固有種で、東アジアでも屈指の大きく古い木々をつくる。材は軽く、赤みを帯び、香りが強い。<strong>タイワンヒノキ</strong>（台湾扁柏）は日本のヒノキそのものの変種、<em>C. obtusa</em> var. <em>formosana</em> で、ベニヒより少し高いところに、しばしばベニヒと混じって育つ。黄みのある材はより重く、油気が多い。どちらも<a href=\"hinoki.html\">ヒノキ</a>の頁で述べる木曽のヒノキの親類で、二十世紀初めの日本の大工は同じように使うことができた。",
            zh:"台灣林業人通稱「檜木」，但中央山脈的霧林裡其實生長著兩種<em>扁柏屬</em>植物。<strong>紅檜</strong>（<em>Chamaecyparis formosensis</em>，日文稱 benihi）是台灣特有種，長成東亞數一數二巨大、古老的樹木；木材輕、帶紅色、香氣濃烈。<strong>台灣扁柏</strong>則是日本扁柏本身的一個變種，<em>C. obtusa</em> var. <em>formosana</em>；生長海拔略高於紅檜，常與紅檜混生，木材偏黃，較重也較油潤。兩者都是<a href=\"hinoki.html\">檜木</a>頁所介紹的木曾扁柏的親戚，二十世紀初的日本木匠可以用同樣的方式使用它們。" } },
        { t:"table",
          keyCol:true,
          numCols:[1],
          caption:{ en:"Taiwan's cypresses and Japanese hinoki compared", ja:"台湾の檜と日本のヒノキの比較", zh:"台灣檜木與日本扁柏比較" },
          cols:[
            { en:"Tree", ja:"樹種", zh:"樹種" },
            { en:"Air-dry density (g/cm³)", ja:"気乾密度（g/cm³）", zh:"氣乾密度（g/cm³）" },
            { en:"Character", ja:"性質", zh:"特性" }
          ],
          rows:[
            [
              { en:"Taiwan red cypress (<em>C. formosensis</em>)", ja:"ベニヒ（紅檜）", zh:"紅檜" },
              "0.38",
              {
                en:"Light, reddish, strongly scented; giant old trees",
                ja:"軽く赤みがあり香りが強い。巨大な老木",
                zh:"輕、帶紅色、香氣濃；多巨大老樹" }
            ],
            [
              { en:"Taiwan hinoki (<em>C. obtusa</em> var. <em>formosana</em>)", ja:"タイワンヒノキ（台湾扁柏）", zh:"台灣扁柏" },
              "0.48",
              { en:"Yellowish, oily, rich in hinokitiol", ja:"黄みがあり油気が多く、ヒノキチオールに富む", zh:"偏黃、油潤，富含檜木醇" }
            ],
            [
              { en:"Japanese hinoki (<em>C. obtusa</em>)", ja:"ヒノキ", zh:"日本扁柏" },
              "0.44",
              {
                en:"Pale pink, fine even rings; hinokitiol only in traces",
                ja:"淡い桃色で年輪が細かく揃う。ヒノキチオールはごく微量",
                zh:"淡粉紅、年輪細密均勻；檜木醇僅微量" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: densities from the Wood Industry Handbook (4th revised edition), as tabulated by Hokkaido Prefecture; hinokitiol content from the chemistry literature summarised on the <a href=\"chemistry.html\">chemistry</a> page.",
            ja:"出典：密度は『木材工業ハンドブック』改訂四版（北海道の集成表による）。ヒノキチオールの含有は<a href=\"chemistry.html\">化学</a>の頁にまとめた文献による。",
            zh:"資料來源：密度取自《木材工業手冊》改訂第四版（北海道整理之表）；檜木醇含量依<a href=\"chemistry.html\">化學</a>頁所整理的文獻。" } },
        { t:"h3", text:{ en:"Hinokitiol: a Taipei discovery", ja:"ヒノキチオール——台北での発見", zh:"檜木醇：誕生於台北的發現" }, jp:"野副鉄男" },
        { t:"p",
          text:{
            en:"The best-known chemical of the hinoki family was found in Taiwan. In 1936 the chemist Nozoe Tetsuo, working at Taihoku (Taipei) Imperial University, isolated a new compound from the oil of Taiwan hinoki and named it <em>hinokitiol</em>. It turned out to contain a seven-membered carbon ring that behaves as an aromatic compound — the first of the non-benzenoid aromatics, a new branch of organic chemistry for which Nozoe was later awarded Japan's Order of Culture. The irony is botanical: Japanese hinoki contains hinokitiol only in traces, and the substance is made commercially from hiba (asunaro) and western red cedar. The scent that Taiwanese visitors associate with a hinoki bath owes less to hinokitiol than to other terpenes. See <a href=\"chemistry.html\">chemistry</a> and <a href=\"woodpeople.html\">people</a>.",
            ja:"ヒノキの仲間でいちばん名の知られた化学物質は、台湾で見つかった。一九三六年、台北帝国大学の化学者野副鉄男は、タイワンヒノキの油から新しい化合物を取り出し、<em>ヒノキチオール</em>と名づけた。それは芳香族としてふるまう七員環をもつことがわかった。非ベンゼン系芳香族の最初のもので、有機化学の新しい分野となり、野副はのちに文化勲章を受けた。皮肉は植物の側にある。日本のヒノキにはヒノキチオールはごく微量しかなく、工業的にはヒバ（アスナロ）やベイスギからつくられる。台湾の旅人がヒノキ風呂から思い浮かべる香りは、ヒノキチオールよりもほかのテルペン類によるところが大きい。<a href=\"chemistry.html\">化学</a>と<a href=\"woodpeople.html\">人物</a>を参照。",
            zh:"檜木家族中最有名的化學物質，是在台灣發現的。1936 年，任職於台北帝國大學的化學家野副鐵男，從台灣扁柏的精油中分離出一種新化合物，命名為<em>檜木醇</em>（hinokitiol）。後來證實它含有一個表現出芳香性的七員碳環——這是第一個非苯系芳香族化合物，開啟了有機化學的新領域，野副也因此獲頒日本文化勳章。諷刺之處在於植物本身：日本扁柏只含微量檜木醇，商業上反而是從羅漢柏（翌檜）與北美紅側柏提煉。台灣旅客聯想到檜木浴池的香氣，與其說來自檜木醇，不如說更多來自其他萜類。見<a href=\"chemistry.html\">化學</a>與<a href=\"woodpeople.html\">人物</a>。" } }
      ] },
    { t:"section",
      id:"survey",
      title:{ en:"A colonial forest industry", ja:"植民地の林業", zh:"殖民時期的林業" },
      jp:"三大林場",
      body:[
        { t:"p",
          text:{
            en:"Japan took Taiwan in 1895, and the Government-General began surveying the island's forests the following year, 1896. What the surveyors found in the central mountains was a resource Japan itself no longer had: stands of giant cypress, many trees over a thousand years old, on slopes that had never been logged. The Kiso forests at home had been cut for castles and cities since the sixteenth century and were now closely guarded as imperial estate and shrine reserve (see <a href=\"fivetrees.html\">the five trees</a>). Taiwan offered big timber in quantity, and the state set out to take it with the most modern methods of the day — mountain railways, cableways, steam sawmills and log ponds.",
            ja:"日本は一八九五年に台湾を領有し、翌一八九六年に総督府は島の森林の調査を始めた。調査者が中央山脈で見たのは、日本自身がもはやもたない資源だった。樹齢千年を超える木を多く含む巨大な檜の林が、一度も伐られたことのない斜面に立っていたのである。国内の木曽の森は十六世紀から城と町のために伐られ、このころには御料林と神宮備林として厳しく守られていた（<a href=\"fivetrees.html\">木曽五木</a>を参照）。台湾は大径材を大量にもたらしうる地であり、国は当時もっとも新しい方法——山岳鉄道、索道、蒸気の製材所、貯木池——でそれを得ようとした。",
            zh:"日本於 1895 年取得台灣，總督府在翌年（1896 年）開始調查全島森林。調查人員在中央山脈看到的，是日本本土已經失去的資源：從未被砍伐的山坡上，矗立著大片巨大的檜木林，許多樹齡超過千年。日本國內的木曾森林自十六世紀起就為築城造鎮而砍伐，此時已被列為皇室御料林與神宮備林而嚴加保護（見<a href=\"fivetrees.html\">木曾五木</a>）。台灣能大量供應大徑木，國家於是以當時最先進的方法——高山鐵道、索道、蒸汽製材廠與貯木池——著手開發。" } },
        { t:"compare",
          cols:3,
          items:[
            { title:{ en:"Alishan", ja:"阿里山", zh:"阿里山" },
              jp:"嘉義",
              text:{
                en:"Chiayi county. Forest railway opened 1912; sawmill at Chiayi 1914; logging stopped 1963. The largest of the three.",
                ja:"嘉義。森林鉄道は一九一二年開通、嘉義の製材所は一九一四年、伐採は一九六三年に止まった。三つのうち最大。",
                zh:"嘉義。森林鐵路 1912 年通車，嘉義製材所 1914 年落成，1963 年停止伐木。三者中規模最大。" } },
            { title:{ en:"Taipingshan", ja:"太平山", zh:"太平山" },
              jp:"羅東",
              text:{
                en:"Yilan county. Surveyed 1914, logged from 1915 until 1982; logs came down by railway to the pond at Luodong.",
                ja:"宜蘭。一九一四年に調査、一九一五年から一九八二年まで伐採。丸太は鉄道で羅東の貯木池へ下った。",
                zh:"宜蘭。1914 年調查，1915 年起伐木至 1982 年；原木經鐵路運至羅東貯木池。" } },
            { title:{ en:"Baxianshan", ja:"八仙山", zh:"八仙山" },
              jp:"台中",
              text:{
                en:"Taichung, in the Dajia river valley. Logged for about half a century until the 1960s; its cypress was reputed finer than Alishan's.",
                ja:"台中、大甲渓の谷。一九六〇年代までおよそ半世紀伐採された。その檜は阿里山のものよりすぐれるといわれた。",
                zh:"台中，大甲溪河谷。伐木約半個世紀，至 1960 年代結束；其檜木品質據說勝過阿里山。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry and Nature Conservation Agency, Alishan Forest Railway and Cultural Heritage Office; Ministry of Agriculture (Taipingshan); United Daily News (Baxianshan, 2023).",
            ja:"出典：林業及自然保育署阿里山林業鉄路及文化資産管理処、農業部（太平山）、聯合報（八仙山、二〇二三年）。",
            zh:"資料來源：林業及自然保育署阿里山林業鐵路及文化資產管理處；農業部（太平山）；聯合報（八仙山，2023 年）。" } }
      ] },
    { t:"section",
      id:"alishan",
      title:{ en:"Alishan and Chiayi", ja:"阿里山と嘉義", zh:"阿里山與嘉義" },
      jp:"森林鉄道・製材所",
      body:[
        { t:"p",
          text:{
            en:"The Alishan enterprise was the showpiece. Construction of a narrow-gauge mountain railway began in July 1906 under the Fujita company; the first section, 66.6 kilometres from Chiayi on the plain to Erwanping in the mountains, opened in December 1912, and in 1914 the main line reached Chaoping at Alishan itself, climbing by spirals and switchbacks through tropical, temperate and cool forest. Passenger services began in 1920. At the bottom of the line, the Chiayi sawmill was completed in December 1914 with machinery from Europe and America and a largely automated process; it was called the finest in the East. Logs soaked in its ponds before sawing, as they did in the timber ponds of Nagoya and Kiso.",
            ja:"阿里山の事業は看板であった。狭軌の山岳鉄道の建設は一九〇六年七月に藤田組のもとで始まり、平野の嘉義から山中の二万平までの最初の66.6キロが一九一二年十二月に開通した。一九一四年には本線が阿里山の沼平に達し、ループやスイッチバックで熱帯・温帯・冷温帯の森をのぼった。旅客の運行は一九二〇年に始まる。線路のふもとでは、嘉義の製材所が一九一四年十二月に完成した。欧米の機械を入れ、工程の大半を機械化したもので、「東洋一」と呼ばれた。丸太は挽かれる前にその池に浸けられた。名古屋や木曽の貯木場と同じである。",
            zh:"阿里山事業是其中的招牌。窄軌高山鐵道於 1906 年 7 月由藤田組開始興建；第一段從平原上的嘉義到山中的二萬平，全長 66.6 公里，1912 年 12 月通車；1914 年主線延伸至阿里山的沼平站，以螺旋與之字形路線穿越熱帶、溫帶與寒溫帶森林。客運於 1920 年開辦。鐵路山腳下的嘉義製材所於 1914 年 12 月落成，引進歐美機械，製程幾近全自動，被譽為「東洋第一」。原木在製材前浸泡於貯木池中，一如名古屋與木曾的貯木場。" } },
        { t:"p",
          text:{
            en:"Logging at Alishan stopped in 1963, and the Chiayi sawmill closed the same year; the same year an express service began carrying tourists up the line, and by 1978 all the forestry branch lines had closed. The railway is now run for visitors by the Forestry and Nature Conservation Agency, and in July 2019 it became Taiwan's first nationally designated important cultural landscape. In Chiayi, the sawmill was designated a historic site in 2002 and opened to the public in July 2019, and the neighbouring forestry officials' quarters — thirty wooden houses and one concrete building on 3.4 hectares, the most complete group of Japanese-era official residences in Taiwan — were restored between 2009 and 2013 and reopened on 1 January 2014 as Hinoki Village.",
            ja:"阿里山の伐採は一九六三年に止まり、嘉義の製材所も同じ年に閉じた。同じ年に観光客を運ぶ急行が走りはじめ、一九七八年までに林場線はすべて廃止された。鉄道はいま林業及自然保育署が観光のために運行し、二〇一九年七月には台湾で初めての国の重要文化景観に指定された。嘉義の製材所は二〇〇二年に古跡に指定され、二〇一九年七月に公開された。隣の林業官吏の宿舎群——3.4ヘクタールに木造三十棟とコンクリート造一棟、台湾に残る日本統治時代の官舎群としてもっとも完全なもの——は二〇〇九〜二〇一三年に修復され、二〇一四年一月一日に「檜意森活村」として開かれた。",
            zh:"阿里山於 1963 年停止伐木，嘉義製材所同年關閉；也在同一年，載運觀光客上山的對號快車開始營運，到 1978 年所有林場線全面停駛。鐵路如今由林業及自然保育署為遊客營運，2019 年 7 月成為台灣第一處國家級重要文化景觀。嘉義製材所於 2002 年指定為古蹟，2019 年 7 月開放參觀；鄰近的林業官舍群——3.4 公頃內 30 棟木造與 1 棟混凝土建築，是台灣保存最完整、範圍最廣的日式官舍群——於 2009 至 2013 年修復，2014 年 1 月 1 日以「檜意森活村」重新開放。" } },
        { t:"h3", text:{ en:"Did the cypress all go to Japan?", ja:"檜はすべて日本へ渡ったのか", zh:"檜木都運去日本了嗎？" }, jp:"神社の檜" },
        { t:"p",
          text:{
            en:"A common belief in Taiwan is that the island's cypress was shipped wholesale to Japan to build shrines. The record is more mixed. According to a study of the Alishan sales, about four-fifths of Alishan timber was sold and used within Taiwan itself, and on average about 30 per cent went to Japan between 1916 and 1941, sold from 1914 through a timber sales association in Osaka. But some of what went became famous. The Meiji shrine in Tokyo, built between 1915 and 1920, used Alishan cypress, as did the Kashihara shrine in Nara and halls of Tōfuku-ji in Kyoto; navy yards, railways and shipbuilders took more.",
            ja:"台湾でよく言われるのは、島の檜はそっくり日本へ送られて神社になった、ということである。記録はもっと入り組んでいる。阿里山材の販売についての研究によれば、阿里山の材のおよそ五分の四は台湾の中で売られ、島で使われた。一九一六〜一九四一年に日本へ渡ったのは平均して約三割で、一九一四年から大阪の材木販売組合を通じて売られた。しかし渡ったものの一部は名高くなった。一九一五〜一九二〇年に造営された東京の明治神宮は阿里山の檜を使い、奈良の橿原神宮や京都の東福寺の堂宇も同じであった。海軍工廠、鉄道、造船もさらに多くを求めた。",
            zh:"台灣常見的說法是：島上的檜木被整批運往日本蓋神社。實際紀錄要複雜得多。根據一項關於阿里山木材銷售的研究，阿里山木材約五分之四在台灣島內銷售、使用；1916 至 1941 年間平均約三成運往日本，自 1914 年起經由大阪的木材販賣組合銷售。不過，運去的木材中確有一些成了名物。1915 至 1920 年興建的東京明治神宮使用了阿里山檜木，奈良的橿原神宮與京都東福寺的殿堂亦然；海軍工廠、鐵路與造船業則取用更多。" } },
        { t:"panel",
          title:{ en:"The great torii of the Meiji shrine", ja:"明治神宮の大鳥居", zh:"明治神宮大鳥居" },
          tint:"wood",
          body:[
            { t:"p",
              text:{
                en:"The second torii on the approach to the Meiji shrine is the largest wooden torii of the <em>myōjin</em> type in Japan: 12 metres high, 17.1 metres wide, on pillars 1.2 metres across. The first gate, of 1920, was made from a Taiwanese cypress about 1,200 years old from the Alishan range. It was struck by lightning in 1966. The present gate, completed on 23 December 1975, was made from a Taiwan hinoki about 1,500 years old found on Dandashan (丹大山) in Taiwan's central mountains by a Tokyo timber merchant, who is said to have visited the island many times to find a tree large enough.",
                ja:"明治神宮の参道の第二鳥居は、明神鳥居として日本最大の木造の鳥居である。高さ12メートル、幅17.1メートル、柱の直径1.2メートル。一九二〇年の最初の鳥居は、阿里山の山系の樹齢約千二百年の台湾の檜でつくられた。これは一九六六年に落雷を受けた。いまの鳥居は一九七五年十二月二十三日に完成し、台湾中央山脈の丹大山で東京の材木商が見つけた樹齢約千五百年のタイワンヒノキでつくられた。この材木商は、十分に大きな木を探して何度も台湾へ通ったという。",
                zh:"明治神宮參道上的第二鳥居，是日本最大的木造明神鳥居：高 12 公尺、寬 17.1 公尺，柱徑 1.2 公尺。1920 年的第一代鳥居，以阿里山山系一株樹齡約 1,200 年的台灣檜木製成，1966 年遭雷擊。現在的鳥居於 1975 年 12 月 23 日完工，用材是一位東京木材商在台灣中央山脈丹大山找到的樹齡約 1,500 年台灣扁柏；據說這位木材商為了找到夠大的樹，多次往返台灣。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Alishan Forest Railway and Cultural Heritage Office (railway history); Central News Agency (Chiayi sawmill, 2020); Forestry and Nature Conservation Agency (Hinoki Village); Story Studio (Alishan timber sales); Japan Tourism Agency multilingual commentary database (Meiji Jingū great torii).",
            ja:"出典：阿里山林業鉄路及文化資産管理処（鉄道の歴史）、中央通信社（嘉義製材所、二〇二〇年）、林業及自然保育署（檜意森活村）、故事StoryStudio（阿里山材の販売）、観光庁 地域観光資源の多言語解説文データベース（明治神宮大鳥居）。",
            zh:"資料來源：阿里山林業鐵路及文化資產管理處（鐵路歷史）；中央社（嘉義製材所，2020 年）；林業及自然保育署（檜意森活村）；故事 StoryStudio（阿里山木材銷售）；日本觀光廳多語解說資料庫（明治神宮大鳥居）。" } }
      ] },
    { t:"section",
      id:"luodong",
      title:{ en:"Taipingshan and Luodong", ja:"太平山と羅東", zh:"太平山與羅東" },
      jp:"貯木池の町",
      body:[
        { t:"p",
          text:{
            en:"In the north-east, the forests of Taipingshan in Yilan were surveyed in 1914 and logged from 1915. Logs came down the mountain by cableway and railway: the 19.36-kilometre line from Tuchang to Tiansongpi was finished in 1921 and extended in 1924, carrying timber to the town of Luodong on the Lanyang plain, where it was stored in a great log pond of about 30,000 <em>tsubo</em>, some ten hectares; high-grade cypress was kept under water to protect it from cracking and insects. Taipingshan production ended in 1982. In 2004 the old Luodong timber yard became the Luodong Forestry Culture Park, with the pond, the station, sheds and a stretch of forest railway, and the mountain is now a national forest recreation area.",
            ja:"北東では、宜蘭の太平山の森が一九一四年に調査され、一九一五年から伐られた。丸太は索道と鉄道で山を下った。土場から天送埤までの19.36キロの線路は一九二一年に完成し、一九二四年に延長されて、材木を蘭陽平野の町、羅東へ運んだ。そこで材は約三万坪、およそ十ヘクタールの大きな貯木池に蓄えられた。上等の檜は割れや虫を防ぐため水の中におかれた。太平山の生産は一九八二年に終わる。二〇〇四年、羅東の旧貯木場は、池、駅、倉庫、森林鉄道の一部を残す羅東林業文化園区となり、山は国家森林遊楽区となっている。",
            zh:"在東北部，宜蘭太平山的森林於 1914 年調查、1915 年開始伐木。原木經索道與鐵路下山：從土場到天送埤全長 19.36 公里的鐵道於 1921 年完工，1924 年再延伸，將木材運到蘭陽平原上的羅東鎮，存放在面積約 3 萬坪（約 10 公頃）的大型貯木池中；高級檜木浸於水下，以防龜裂與蟲害。太平山的木材生產於 1982 年結束。2004 年，羅東舊貯木場改為羅東林業文化園區，保留了貯木池、車站、倉庫與一段森林鐵道；山上則成為國家森林遊樂區。" } },
        { t:"p",
          text:{
            en:"The central forest, Baxianshan in the Dajia river valley above Taichung, was worked for about half a century and was said to yield cypress of even better quality than Alishan's, helped by easy transport down the river valley. Together the three became known as Taiwan's three great forests. The industry did not only take: planting began in 1913, and by one estimate Taiwan was meeting 72 per cent of its own timber needs by 1941, up from 32 per cent in 1928. The heaviest damage came in the war years, when broadleaf forests near the lowlands were cut for fuel and military use. The old sacred tree of Alishan, a red cypress said to be about 3,000 years old, survived all of it, only to collapse in heavy rain in 1997.",
            ja:"中部の森、台中の上、大甲渓の谷の八仙山はおよそ半世紀のあいだ伐られ、谷を下る運搬の便にも助けられて、阿里山よりもさらに質の高い檜を出したといわれる。三つはあわせて台湾の三大林場と呼ばれるようになった。林業は奪うばかりではなかった。植林は一九一三年に始まり、ある推計によれば、台湾は一九二八年に三二％だった木材の自給を一九四一年には七二％まで高めていた。いちばん大きな傷は戦争の年月にもたらされた。低地に近い広葉樹林が燃料と軍用のために伐られたのである。阿里山の旧神木、樹齢約三千年といわれたベニヒは、そのすべてを生き延びたが、一九九七年に大雨で倒れた。",
            zh:"位於中部、台中上游大甲溪河谷的八仙山，伐木約半個世紀，加上順河谷而下運輸便利，據說所出的檜木品質更勝阿里山。三者合稱「台灣三大林場」。林業並非只是掠奪：造林始於 1913 年，據一項估計，台灣的木材自給率從 1928 年的 32% 提高到 1941 年的 72%。最嚴重的破壞發生在戰爭年間，靠近平地的闊葉林被大量砍伐作為燃料與軍需。阿里山舊神木——一株據說樹齡約 3,000 年的紅檜——熬過了這一切，卻在 1997 年的豪雨中倒塌。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry and Nature Conservation Agency (Luodong Forestry Culture Park); Ministry of Agriculture (Taipingshan); Story Studio (self-sufficiency 1928 and 1941, planting from 1913).",
            ja:"出典：林業及自然保育署（羅東林業文化園区）、農業部（太平山）、故事StoryStudio（一九二八年と一九四一年の自給率、一九一三年からの植林）。",
            zh:"資料來源：林業及自然保育署（羅東林業文化園區）；農業部（太平山）；故事 StoryStudio（1928 年與 1941 年自給率、1913 年起造林）。" } }
      ] },
    { t:"section",
      id:"ban",
      title:{ en:"After the great logging", ja:"大伐採のあと", zh:"大伐木時代之後" },
      jp:"天然林禁伐",
      body:[
        { t:"p",
          text:{
            en:"Logging did not end with Japanese rule. After 1945 the Forestry Bureau of the new government took over the three forests and their railways and, in the decades of reconstruction and export-led growth, cut harder than before; at the peak, according to Taiwan's Environmental Information Center, about two million cubic metres of wood a year were felled. Old-growth cypress was replaced with plantations, and forest land was opened for roads, farms and dams. Public pressure grew through the 1980s, and in 1991 Taiwan banned the logging of its natural forests altogether. What remained of the cypress cloud forests — the giant trees of Cilan in Yilan and of Lalashan among them — is now protected, and the ban turned the forest service from a timber producer into a conservation agency.",
            ja:"伐採は日本の統治とともに終わったわけではない。一九四五年以後、新しい政府の林務局は三つの林場とその鉄道を引き継ぎ、復興と輸出主導の成長の数十年に、以前にもまして強く伐った。台湾の環境資訊中心によれば、最盛期には年におよそ二百万立方メートルの木が伐られた。老齢の檜林は人工林に置き換えられ、林地は道路、農地、ダムのために開かれた。一九八〇年代を通じて世論の圧力は強まり、一九九一年、台湾は天然林の伐採を全面的に禁じた。檜の霧の森の残り——宜蘭の棲蘭やラーラー山の巨木もその中にある——はいま守られており、禁伐によって林務の役所は、材木を産する機関から保全の機関へと変わった。",
            zh:"伐木並未隨日本統治結束而停止。1945 年後，新政府的林務局接收了三大林場與其鐵路，在戰後重建與出口導向成長的數十年間，砍伐得比以前更兇；據環境資訊中心報導，高峰期每年伐木量約達 200 萬立方公尺。原始檜木林被人工林取代，林地被開闢為道路、農地與水庫。1980 年代社會壓力日增，1991 年台灣全面禁伐天然林。殘存的檜木霧林——包括宜蘭棲蘭與拉拉山的巨木——如今受到保護，禁伐也讓林務機關從木材生產者轉型為保育機關。" } },
        { t:"p",
          text:{
            en:"The cost of that choice is that Taiwan, about three-fifths of which is forest, now imports almost all the wood it uses. In the early 2020s domestic production was only some 40,000 to 60,000 cubic metres a year against a demand of about 4.2 million — less than the log output of a single Japanese prefecture. Gifu alone produced about 576,000 cubic metres of logs in FY2021, roughly nine times Taiwan's national output in 2023. In Japan, too, self-sufficiency had fallen to 18.8 per cent in 2002 before planted forests matured and policy turned; it reached 42.5 per cent in 2024. Taiwan's planted forests are younger, steeper and more scattered, and the tradition of a working forest economy — sawmills, log markets, skilled crews — was broken for a generation.",
            ja:"その選択の代価として、国土のおよそ五分の三が森である台湾は、いま使う木のほとんどすべてを輸入している。二〇二〇年代の初め、国内の生産は年に四万〜六万立方メートルほどにすぎず、需要は約四百二十万立方メートルであった。日本の一つの県の丸太の生産にも及ばない。岐阜県だけで二〇二一年度に約五十七万六千立方メートルの丸太を生産しており、二〇二三年の台湾全体の生産のおよそ九倍である。日本でも自給率は二〇〇二年に一八・八％まで下がり、人工林が育って政策が転じたのち、二〇二四年には四二・五％に達した。台湾の人工林はより若く、より急な斜面に散らばっており、製材所、原木市場、熟練の作業班といった、働く森の経済の伝統は一世代のあいだ途切れていた。",
            zh:"這個選擇的代價是：森林覆蓋約五分之三的台灣，如今使用的木材幾乎全部仰賴進口。2020 年代初，國產材年產量僅約 4 萬至 6 萬立方公尺，需求量卻約 420 萬立方公尺——還不及日本單一縣的原木產量。光是岐阜縣，2021 年度的原木產量就約 57.6 萬立方公尺，約為台灣 2023 年全國產量的九倍。日本的木材自給率也曾在 2002 年跌到 18.8%，之後隨人工林成熟與政策轉向，2024 年回升到 42.5%。台灣的人工林較年輕、坡度更陡、分布更零散，而製材廠、原木市場、熟練作業班組成的林業經濟傳統，也中斷了一整個世代。" } }
      ] },
    { t:"section",
      id:"today",
      title:{ en:"Growing wood again", ja:"ふたたび木を育て、使う", zh:"重新培育與使用木材" },
      jp:"国産材",
      body:[
        { t:"p",
          text:{
            en:"Since 2017, which the Forestry Bureau called the \"first year of domestic timber\", Taiwan has tried to rebuild a timber economy from its plantations — Japanese cedar (sugi), Taiwania, China fir and broadleaves planted in the second half of the twentieth century. On 1 August 2023, when the Council of Agriculture became the Ministry of Agriculture, the Forestry Bureau was reorganised as the <strong>Forestry and Nature Conservation Agency</strong>. The measures are familiar to anyone who knows Japan's recent forest policy: FSC certification for state forests, subsidies for forest machinery and processing, training of forest workers, a QR-code tracing label that shows where a piece of domestic wood grew and how much carbon it stores, and public procurement. From June 2025 an incentive programme placed nearly 8,000 school desks and chairs of domestic timber in schools by November of that year.",
            ja:"林務局が「国産材元年」と呼んだ二〇一七年から、台湾は人工林——二十世紀後半に植えたスギ、タイワンスギ、コウヨウザン、広葉樹——から材木の経済を立て直そうとしている。二〇二三年八月一日、行政院農業委員会が農業部に改組されたとき、林務局は<strong>林業及自然保育署</strong>となった。その施策は、日本の近年の森林政策を知る人にはなじみ深い。国有林のFSC認証、林業機械と加工への補助、林業の働き手の育成、国産材がどこで育ちどれだけ炭素を蓄えているかを示すQRコードの追跡表示、そして公共調達である。二〇二五年六月に始まった奨励策により、同年十一月までに国産材の学校の机と椅子が八千組近く学校に入った。",
            zh:"自林務局所稱的「國產材元年」2017 年起，台灣試圖以人工林——二十世紀後半種植的柳杉、台灣杉、杉木與闊葉樹——重建木材經濟。2023 年 8 月 1 日，行政院農業委員會升格為農業部，林務局同時改制為<strong>林業及自然保育署</strong>。相關措施對熟悉日本近年森林政策的人並不陌生：國有林取得 FSC 驗證、林業機械與加工補助、林業人力培訓、以 QR code 標示國產材產地與儲碳量的產銷履歷標章，以及公共採購。2025 年 6 月啟動的獎勵方案，到同年 11 月已讓近 8,000 套國產材課桌椅進入校園。" } },
        { t:"figure",
          caption:{
            en:"Taiwan's domestic timber production, 2020–2023, in thousand cubic metres. Self-sufficiency rose from 1.04% (2020) to 1.11% (2021), 1.28% (2022) and 1.47% (2023), against a demand of about 4.2 million m³ a year. Source: Legislative Yuan Budget Center, evaluation of the Ministry of Agriculture budget (Table 3-4-3).",
            ja:"台湾の国産材生産量、二〇二〇〜二〇二三年（千立方メートル）。自給率は一・〇四％（二〇二〇年）から一・一一％（二〇二一年）、一・二八％（二〇二二年）、一・四七％（二〇二三年）へ上がった。需要は年に約四百二十万立方メートル。出典：立法院預算中心、農業部予算の評估報告（表3-4-3）。",
            zh:"台灣國產材產量，2020–2023 年（千立方公尺）。自給率由 1.04%（2020 年）升至 1.11%（2021 年）、1.28%（2022 年）與 1.47%（2023 年）；年需求量約 420 萬立方公尺。資料來源：立法院預算中心，農業部預算評估報告（表 3-4-3）。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Taiwan's own timber", ja:"台湾の国産材", zh:"台灣國產材" },
            unit:{ en:"thousand m³", ja:"千m³", zh:"千立方公尺" },
            items:[ { x:"2020", v:43.7 }, { x:"2021", v:46.6 }, { x:"2022", v:53.8 }, { x:"2023", v:61.6 } ],
            hl:["2023"], h:190 }); } },
        { t:"p",
          text:{
            en:"The targets are modest, and the numbers are moving. The Legislative Yuan's Budget Center put self-sufficiency at 1.47 per cent in 2023, after production grew by about 41 per cent in three years, and noted a goal of 5 per cent; in December 2025 the agency said the rate was still under 3 per cent and aimed to reach 5 per cent by 2028. Measures of this kind do not all count the same things, and the figures should be read as orders of magnitude. The direction, though, is the one Gifu took two decades earlier: use the plantations, add value close to the forest, and make wood visible in schools and public buildings (see <a href=\"woodfirst.html\">wood first</a> and <a href=\"policy.html\">policy</a>).",
            ja:"目標はつつましく、数字は動いている。立法院預算中心は、三年で生産が約四一％増えたのち二〇二三年の自給率を一・四七％とし、五％という目標に触れた。二〇二五年十二月、林業及自然保育署は、率はなお三％に満たないとし、二〇二八年までに五％に達することを目指すと述べた。こうした指標は必ずしも同じものを数えておらず、数字は桁の目安として読むべきである。しかし方向は、岐阜が二十年早くとったものと同じである。人工林を使い、森の近くで価値を加え、学校や公共の建物で木を目に見えるものにすること（<a href=\"woodfirst.html\">木づかい</a>と<a href=\"policy.html\">政策</a>を参照）。",
            zh:"目標並不高，但數字正在移動。立法院預算中心指出，產量在三年內成長約 41% 後，2023 年自給率為 1.47%，並提及 5% 的目標；2025 年 12 月，林保署表示自給率仍不到 3%，力拚 2028 年達到 5%。這類指標的計算範圍未必相同，數字宜視為數量級的參考。但方向正是岐阜早二十年走過的路：利用人工林、在森林附近加值，並讓木材在學校與公共建築中被看見（見<a href=\"woodfirst.html\">用木之道</a>與<a href=\"policy.html\">政策</a>）。" } },
        { t:"figure",
          caption:{
            en:"Timber self-sufficiency, per cent: Japan at its historic low (2002) and in 2024, and Taiwan in 2023. Sources: Forestry Agency of Japan, timber supply and demand tables; Legislative Yuan Budget Center (Taiwan).",
            ja:"木材自給率（％）：過去最低の日本（二〇〇二年）と二〇二四年の日本、二〇二三年の台湾。出典：林野庁「木材需給表」、立法院預算中心（台湾）。",
            zh:"木材自給率（%）：日本歷史低點（2002 年）與 2024 年，以及台灣 2023 年。資料來源：日本林野廳〈木材需給表〉；立法院預算中心（台灣）。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"How much of its own wood", ja:"自分の木をどれだけ使うか", zh:"自產木材用了多少" },
            unit:{ en:"%", ja:"％", zh:"%" }, max:50, dec:1, labelW:200,
            items:[
              { n:{ en:"Japan, 2024", ja:"日本、二〇二四年", zh:"日本，2024 年" }, v:42.5 },
              { n:{ en:"Japan, 2002 (low)", ja:"日本、二〇〇二年（最低）", zh:"日本，2002 年（最低）" }, v:18.8, f:"#E0E7E9" },
              { n:{ en:"Taiwan, 2023", ja:"台湾、二〇二三年", zh:"台灣，2023 年" }, v:1.47, lab:"1.47", f:"#EADCC1" }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: Legislative Yuan Budget Center; Central News Agency (December 2025); Environmental Information Center (peak felling, 1991 ban); Gifu Prefecture, state of forestry and wood industries (log production FY2021); Forestry Agency of Japan (self-sufficiency).",
            ja:"出典：立法院預算中心、中央通信社（二〇二五年十二月）、環境資訊中心（最盛期の伐採量、一九九一年の禁伐）、岐阜県「岐阜県の林業・木材産業の現状」（二〇二一年度の素材生産量）、林野庁（自給率）。",
            zh:"資料來源：立法院預算中心；中央社（2025 年 12 月）；環境資訊中心（高峰伐木量、1991 年禁伐）；岐阜縣〈岐阜縣林業與木材產業現況〉（2021 年度原木產量）；日本林野廳（自給率）。" } }
      ] },
    { t:"section",
      id:"ties",
      title:{ en:"Gifu and Taiwan today", ja:"いまの岐阜と台湾", zh:"今日的岐阜與台灣" },
      jp:"交流",
      body:[
        { t:"p",
          text:{
            en:"The ties between Gifu and Taiwan today run mostly through travellers and things. Taiwan has long been one of the largest sources of foreign visitors to Takayama and Gifu; a Japan–Taiwan marketing firm, citing the Japan Tourism Agency's accommodation survey, ranked Taiwan first among Gifu's foreign guests in 2023. The prefecture as a whole recorded a record 2,305,600 foreign guest-nights in 2024, against 1,660,330 in 2019, and Takayama counted 612,204 foreign overnight guests in 2019, before the pandemic cut that to 108,720 in 2020. Direct flights link Taoyuan with Centrair, Komatsu and — again from August 2026 — Toyama. For practical advice see <a href=\"visiting.html\">Visiting Gifu</a> and <a href=\"woodjourneys.html\">Five Journeys</a>.",
            ja:"いまの岐阜と台湾の結びつきは、おもに旅人と品物を通じている。台湾は長く、高山と岐阜を訪れる外国人のいちばん大きな送り出し元の一つであり、日台のマーケティング会社は観光庁の宿泊旅行統計を引いて、二〇二三年の岐阜県の外国人宿泊客で台湾を一位としている。県全体の外国人延べ宿泊者数は二〇二四年に過去最高の二百三十万五千六百人泊で、二〇一九年は百六十六万三百三十人泊だった。高山市は二〇一九年に六十一万二千二百四人の外国人宿泊客を数えたが、二〇二〇年には感染症のため十万八千七百二十人に落ちた。直行便は桃園とセントレア、小松、そして二〇二六年八月からふたたび富山を結ぶ。実際の助言は<a href=\"visiting.html\">岐阜を訪ねる</a>と<a href=\"woodjourneys.html\">五つの旅</a>にある。",
            zh:"今日岐阜與台灣的聯繫，主要透過旅人與物品。台灣長期是高山與岐阜最主要的外國旅客來源之一；一家日台行銷公司引用日本觀光廳住宿旅行統計，指出 2023 年岐阜縣外國住宿旅客以台灣居首。全縣外國人住宿人次於 2024 年創下 2,305,600 人次的新高，2019 年則為 1,660,330 人次；高山市 2019 年外國住宿旅客達 612,204 人，2020 年因疫情驟降至 108,720 人。直飛航班連結桃園與中部國際機場、小松，以及自 2026 年 8 月起再度復航的富山。實用資訊見<a href=\"visiting.html\">造訪岐阜</a>與<a href=\"woodjourneys.html\">五段旅程</a>。" } },
        { t:"defs",
          items:[
            { term:{ en:"Hida furniture in Taiwan", ja:"台湾の飛騨の家具", zh:"飛驒家具在台灣" },
              jp:"地域団体商標",
              def:{
                en:"The Hida furniture makers registered their regional collective trademark in Taiwan in May 2009, a year before China, to protect the name abroad. See <a href=\"furniture.html\">furniture</a>.",
                ja:"飛騨の家具の業界は、二〇〇九年五月に地域団体商標を台湾で登録した。中国より一年早く、海外で名前を守るためである。<a href=\"furniture.html\">家具</a>を参照。",
                zh:"飛驒家具業者於 2009 年 5 月在台灣註冊地域團體商標，比中國早一年，用以在海外保護品牌名稱。見<a href=\"furniture.html\">家具</a>。" } },
            { term:{ en:"Guitars", ja:"ギター", zh:"吉他" },
              jp:"楽器",
              def:{
                en:"Taiwan made guitars on a large scale from 1971 to 2007 at Yamaha's Kaohsiung factory, and some of its former workers now build by hand — a parallel to the Gifu workshops of Yairi and Takamine. See <a href=\"guitarindustry.html\">the guitar industry</a>.",
                ja:"台湾では一九七一年から二〇〇七年まで、ヤマハの高雄工場で大量のギターがつくられ、元従業員の一部はいま手工で楽器をつくっている。岐阜のヤイリやタカミネの工房と重なる話である。<a href=\"guitarindustry.html\">ギター産業</a>を参照。",
                zh:"1971 至 2007 年間，山葉（Yamaha）高雄廠在台灣大量生產吉他，部分前員工如今以手工製琴——與岐阜 Yairi、Takamine 工坊的故事相互呼應。見<a href=\"guitarindustry.html\">吉他產業</a>。" } },
            { term:{ en:"Carrying wood home", ja:"木を持ち帰る", zh:"把木器帶回台灣" },
              jp:"植物検疫",
              def:{
                en:"Taiwan's plant-quarantine rules ban bark and branches from passenger baggage and require a phytosanitary certificate for unpainted wooden articles; lacquered and painted pieces are not on that list. See <a href=\"buying.html\">buying</a>.",
                ja:"台湾の植物検疫の規則は、旅客の手荷物での樹皮や枝の持ち込みを禁じ、塗装していない木製品には輸出国の植物検疫証明書を求める。漆塗りや塗装した品はその対象に挙げられていない。<a href=\"buying.html\">買う</a>を参照。",
                zh:"依台灣植物檢疫規定，旅客行李禁止攜帶樹皮與枝條；未上漆的木製品須附輸出國植物檢疫證明書；上漆或已塗裝的器物則不在此列。見<a href=\"buying.html\">選購</a>。" } }
          ] },
        { t:"p",
          text:{
            en:"Seen from Taipei, Gifu is a mirror. It shows what a mountain country can do with planted forests once the old trees are protected: a prefecture four-fifths forested that still fells, saws and dries its own timber, builds libraries and schools of it, and keeps a thousand-year craft culture working. Seen from Gifu, Taiwan is a reminder of where some of Japan's most sacred wood came from, and of the price paid by the forests that supplied it.",
            ja:"台北から見れば、岐阜は鏡である。古い木々を守ったあと、山の国が人工林で何をなしうるかを映している。八割が森の県が、いまも自分の木を伐り、挽き、乾かし、図書館や学校を建て、千年の工芸の文化を働かせている。岐阜から見れば、台湾は、日本でもっとも神聖な木の一部がどこから来たか、そしてそれを出した森が払った代価を思い出させる。",
            zh:"從台北看，岐阜是一面鏡子：它映照出一個山國在保護老樹之後，能如何運用人工林——一個八成覆蓋森林的縣，至今仍砍伐、製材、乾燥自己的木材，用它蓋圖書館與學校，讓千年的工藝文化持續運轉。從岐阜看，台灣則提醒人們，日本一些最神聖的木材來自何方，以及供應它們的森林所付出的代價。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture press release (February 2025); Takayama city foreign-visitor statistics (2020 report); Geelee Media Group (Japan Tourism Agency data, 2023); Hida furniture trademark records; Bureau of Animal and Plant Health Inspection and Quarantine (passenger rules).",
            ja:"出典：岐阜県報道発表（二〇二五年二月）、高山市外国人観光客宿泊統計（二〇二〇年版）、ジーリーメディアグループ（観光庁資料、二〇二三年）、飛騨の家具の商標記録、動植物防疫検疫署（旅客の規則）。",
            zh:"資料來源：岐阜縣新聞稿（2025 年 2 月）；高山市外國觀光客住宿統計（2020 年報告）；Geelee Media Group（日本觀光廳資料，2023 年）；飛驒家具商標紀錄；動植物防疫檢疫署（旅客規定）。" } }
      ] },
    { t:"related",
      items:[
        { href:"hinoki.html",
          why:{ en:"Japanese hinoki, the Taiwanese trees' close relative.", ja:"台湾の檜の近い親類、日本のヒノキ。", zh:"台灣檜木的近親：日本扁柏。" } },
        { href:"trade.html",
          why:{ en:"Timber trade between Japan and its neighbours.", ja:"日本と近隣の木材貿易。", zh:"日本與鄰近地區的木材貿易。" } },
        { href:"guitarindustry.html",
          why:{ en:"Taiwan's chapter in the guitar industry.", ja:"ギター産業の台湾の章。", zh:"吉他產業中的台灣篇章。" } },
        { href:"visiting.html",
          why:{ en:"Flights from Taiwan and how to see Gifu's wood.", ja:"台湾からの空路と、岐阜の木の見方。", zh:"台灣出發的航班與岐阜木文化的看法。" } },
        { href:"woodjourneys.html",
          why:{ en:"Five itineraries for Taiwanese travellers.", ja:"台湾の旅人のための五つの旅程。", zh:"給台灣旅人的五條行程。" } }
      ] }
  ] };

/* ---- --------------------------------------------- world */
GIFU.pages["world"] = { kicker:{ en:"Living with Wood · 08", ja:"木と暮らす · 08", zh:"與木共處 · 08" },
  title:{ en:"Beyond Japan", ja:"日本の外へ", zh:"日本以外" },
  jp:"世界",
  lede:{
    en:"Gifu's wood has been travelling abroad for almost a century — first as bentwood chairs shipped to America, now as Danish-licensed furniture, guitars, craft objects and, from Japan's southern ports, shiploads of sugi logs. This page follows those journeys: the export decades of the Hida furniture makers, their return to the world through design fairs and licences, Japan's fast-growing wood exports and the government's plans for them, the joinery, tools and buildings that carried Japanese carpentry overseas, and how Gifu compares with the other great wood regions of the world.",
    ja:"岐阜の木は、ほぼ一世紀にわたって海を渡ってきた。はじめはアメリカへ送られた曲木の椅子として、いまはデンマークのライセンス家具、ギター、工芸品として、そして日本の南の港からは船いっぱいのスギの丸太として。この頁はその旅をたどる。飛騨の家具メーカーの輸出の時代、見本市とライセンスを通じた世界への復帰、急速に伸びる日本の木材輸出と国の計画、日本の大工の技を海外へ運んだ継手・仕口と道具と建物、そして岐阜が世界のほかの大きな木の産地とどう比べられるかである。",
    zh:"岐阜的木材走向海外已近一個世紀——最初是運往美國的曲木椅，如今則是丹麥授權家具、吉他、工藝品，以及從日本南部港口整船運出的柳杉原木。本頁追溯這些旅程：飛驒家具廠的出口年代、它們如何透過設計展與授權重返世界、日本快速成長的木材出口與政府的相關計畫、把日本木工技藝帶到海外的榫接、工具與建築，以及岐阜與世界其他重要木材產地的比較。" },
  body:[
    { t:"section",
      id:"chairs-for-america",
      title:{ en:"Chairs for America", ja:"アメリカへ渡った椅子", zh:"銷往美國的椅子" },
      jp:"輸出の時代",
      body:[
        { t:"p",
          text:{
            en:"For most of the twentieth century the best-known Gifu wood abroad was not a log but a chair. The bentwood chairs that Takayama began making in 1920 found an American buyer in 1935, when Stanley Slotkin visited the town and began ordering from the company that would become Hida Sangyō. The war cut the trade, but exports to the United States resumed in 1949, and in 1950 Slotkin took a majority stake in Hida Sangyō through a trading company. Kashiwa Mokkō, the second of the large Takayama makers, began exporting in 1958 and, in its peak years, sold more than 200,000 of a single model, the Mates chair, abroad. For two decades Hida beech sat at dining tables across the United States, mostly under American importers' names and without any mention of Takayama.",
            ja:"二十世紀の大半、海外で最もよく知られた岐阜の木は、丸太ではなく椅子であった。高山で一九二〇年に始まった曲木の椅子は、一九三五年にアメリカの買い手を得る。この年、スタンリー・スロットキンが高山を訪れ、のちの飛騨産業に注文を出しはじめた。戦争で取引は途絶えたが、アメリカへの輸出は一九四九年に再開し、一九五〇年にはスロットキンが商社を通じて飛騨産業の株式の過半を握った。高山のもう一つの大手である柏木工は一九五八年に輸出を始め、最盛期には「メイツ」という一つの型の椅子だけで二十万脚以上を海外へ送った。二十年ほどのあいだ、飛騨のブナはアメリカじゅうの食卓に並んだが、その多くはアメリカの輸入業者の名で売られ、高山の名が出ることはなかった。",
            zh:"二十世紀大半時間裡，岐阜木材在海外最為人知的形式不是原木，而是椅子。高山自 1920 年開始製作的曲木椅，在 1935 年找到了美國買主：這一年史丹利·斯洛特金（Stanley Slotkin）造訪高山，開始向後來的飛驒產業下單。戰爭中斷了貿易，但對美出口在 1949 年恢復，1950 年斯洛特金更透過貿易公司取得飛驒產業過半股份。高山另一家大廠柏木工自 1958 年開始出口，全盛時期光是「Mates」一款椅子就銷往海外 20 萬張以上。約二十年間，飛驒的山毛櫸出現在美國各地的餐桌旁，但多半掛著美國進口商的名號，並未提及高山。" } },
        { t:"p",
          text:{
            en:"The export era ended with the yen. Japan's exports had been built on a fixed rate of ¥360 to the dollar, set in 1949; after the dollar left gold in 1971 the yen was allowed to float in 1973, and after the Plaza Accord of 1985 it roughly doubled in value within a few years. The dates in Takayama follow the currency closely: Hida Sangyō's American exports ended in 1973, and Kashiwa stopped exporting altogether in 1986. By then the Japanese home had adopted the dining table and the sofa, and the makers turned to a domestic market that had grown large enough to keep them busy. The export decades left a lasting legacy — factories organised for long runs of Western-style chairs, a workforce skilled in steam-bending and in finishing to foreign standards, and the habit of looking outward for designs. The full company histories are on the <a href=\"furniture.html\">Hida furniture</a> page.",
            ja:"輸出の時代を終わらせたのは円である。日本の輸出は一九四九年に定められた一ドル三百六十円の固定相場の上に築かれていた。一九七一年にドルが金との交換を止めると、円は一九七三年に変動相場へ移り、一九八五年のプラザ合意のあとには数年でおよそ二倍に上がった。高山の年表はこの為替の動きにぴたりと重なる。飛騨産業のアメリカ輸出は一九七三年に終わり、柏木工は一九八六年に輸出そのものを止めた。そのころには日本の住まいも食卓とソファを受け入れており、メーカーは十分に大きくなった国内市場へ向かった。輸出の数十年が残したものは大きい。洋風の椅子を大量に作るための工場の組み立て、蒸気曲げと海外の基準に合わせた塗装に熟練した職人、そして外にデザインを求める習慣である。各社の歴史は<a href=\"furniture.html\">飛騨の家具</a>の頁にくわしい。",
            zh:"終結出口時代的是日圓。日本的出口建立在 1949 年訂定的 1 美元兌 360 日圓固定匯率之上；1971 年美元與黃金脫鉤後，日圓於 1973 年改採浮動匯率，1985 年廣場協議後更在數年內升值約一倍。高山的年表與匯率走勢緊密相合：飛驒產業的對美出口在 1973 年結束，柏木工則在 1986 年完全停止出口。此時日本家庭已普遍接受餐桌與沙發，廠商轉向已大到足以支撐產能的國內市場。出口數十年留下深遠影響——為大量生產西式椅子而組織的工廠、熟練蒸汽彎曲與符合海外標準塗裝的工匠，以及向外尋求設計的習慣。各公司的完整歷史請見<a href=\"furniture.html\">飛驒家具</a>頁。" } },
        { t:"timeline",
          items:[
            { year:"1935",
              title:{ en:"First American buyer", ja:"最初のアメリカの買い手", zh:"第一位美國買主" },
              text:{
                en:"Stanley Slotkin visits Takayama and begins ordering bentwood chairs.",
                ja:"スタンリー・スロットキンが高山を訪れ、曲木の椅子の注文を始める。",
                zh:"史丹利·斯洛特金造訪高山，開始訂購曲木椅。" } },
            { year:"1949",
              title:{ en:"Exports resume", ja:"輸出の再開", zh:"出口恢復" },
              text:{
                en:"After furniture for the Occupation forces, Hida Sangyō ships to the United States again; the yen is fixed at ¥360 to the dollar.",
                ja:"占領軍向けの家具のあと、飛騨産業はふたたびアメリカへ出荷する。円は一ドル三百六十円に固定される。",
                zh:"在為占領軍製作家具之後，飛驒產業再度出貨美國；日圓固定為 1 美元兌 360 日圓。" } },
            { year:"1958",
              title:{ en:"Kashiwa goes abroad", ja:"柏木工の輸出開始", zh:"柏木工開始出口" },
              text:{
                en:"Kashiwa Mokkō begins exporting; the Mates chair later sells over 200,000 abroad.",
                ja:"柏木工が輸出を始める。のちに「メイツ」は海外で二十万脚以上売れる。",
                zh:"柏木工開始出口；Mates 椅後來在海外售出逾 20 萬張。" } },
            { year:"1973",
              title:{ en:"The yen floats", ja:"変動相場制へ", zh:"日圓浮動" },
              text:{ en:"Hida Sangyō's American exports end.", ja:"飛騨産業のアメリカ輸出が終わる。", zh:"飛驒產業對美出口結束。" } },
            { year:"1986",
              title:{ en:"Last exports", ja:"輸出の終わり", zh:"最後的出口" },
              text:{
                en:"A year after the Plaza Accord, Kashiwa stops exporting.",
                ja:"プラザ合意の翌年、柏木工が輸出を止める。",
                zh:"廣場協議翌年，柏木工停止出口。" } }
          ] }
      ] },
    { t:"section",
      id:"design-route",
      title:{ en:"The return by way of design", ja:"デザインを通じた再出発", zh:"以設計重返世界" },
      jp:"見本市と商標",
      body:[
        { t:"p",
          text:{
            en:"When Hida's makers went back abroad, it was not with cheap chairs but with designers' names and the name of the place. In 2003 Hida Sangyō signed a contract with the Italian designer Enzo Mari, whose HIDA series was shown at the Milan Triennale in 2005; two years later the company received an award at the International Contemporary Furniture Fair in New York. From the early 2010s two Takayama companies, Hida Sangyō and Shirakawa, exhibited every April at the Salone del Mobile in Milan, the world's largest furniture fair. In 2016, their fourth year there, they were among only six Japanese firms in a fair of more than 2,400 exhibitors. That year Hida Sangyō showed <em>Gifoï</em>, a chair and table designed with the Swiss studio Atelier Oï in compressed sugi — soft plantation cedar hardened by a technique the company had been developing since the mid-2000s — and the Italian brand Danese took on its European distribution.",
            ja:"飛騨のメーカーがふたたび海外へ出たとき、携えていたのは安い椅子ではなく、デザイナーの名と土地の名であった。飛騨産業は二〇〇三年にイタリアのデザイナー、エンツォ・マーリと契約し、その「HIDA」シリーズは二〇〇五年にミラノ・トリエンナーレで展示された。二年後、同社はニューヨークの国際現代家具見本市（ICFF）で賞を受けた。二〇一〇年代の初めからは、高山の二社、飛騨産業とシラカワが、世界最大の家具見本市であるミラノサローネに毎年四月に出展した。四年目にあたる二〇一六年、二千四百を超える出展者のうち日本企業はわずか六社で、二社はその中にいた。この年、飛騨産業はスイスのアトリエ・オイと組んだ椅子とテーブル「ジフォイ（Gifoï）」を出した。材は圧縮スギ——柔らかい人工林のスギを、同社が二〇〇〇年代半ばから開発してきた技術で硬くしたもの——で、イタリアのブランド、ダネーゼが欧州での販売を引き受けた。",
            zh:"飛驒廠商再度走向海外時，帶的不是廉價椅子，而是設計師的名字與產地的名字。飛驒產業於 2003 年與義大利設計師恩佐·馬里（Enzo Mari）簽約，其「HIDA」系列於 2005 年在米蘭三年展展出；兩年後，該公司在紐約國際當代家具展（ICFF）獲獎。自 2010 年代初起，高山的飛驒產業與 Shirakawa 兩家公司每年四月參加全球最大家具展——米蘭家具展。2016 年是它們參展的第四年，在逾 2,400 家參展商中，日本企業僅 6 家，這兩家即在其中。這一年飛驒產業推出與瑞士工作室 Atelier Oï 合作的桌椅「Gifoï」，材料是壓縮柳杉——以該公司自 2000 年代中期起開發的技術，把質地柔軟的人工林柳杉壓密硬化——並由義大利品牌 Danese 負責歐洲銷售。" } },
        { t:"p",
          text:{
            en:"The makers also protected the name. After registering “Hida furniture” as a regional collective trademark in Japan in January 2008, the federation of Hida woodworking firms registered it in Taiwan in May 2009 and in China in February 2010, before counterfeit “Hida” furniture could establish itself in those markets. The trademark rules — including the requirement that everything after the first sawing be done in Hida — are described on the <a href=\"furniture.html\">furniture</a> page. For Taiwanese buyers the mark is the simplest way to tell a Takayama chair from a look-alike.",
            ja:"メーカーは名前も守った。「飛騨の家具」を二〇〇八年一月に国内で地域団体商標として登録したのち、飛騨木工連合会は二〇〇九年五月に台湾で、二〇一〇年二月に中国で登録した。これらの市場で「飛騨」を名のる模倣品が根を張る前のことである。一次製材のあとの加工をすべて飛騨で行うことを含む商標の規定は、<a href=\"furniture.html\">飛騨の家具</a>の頁にある。台湾の買い手にとって、このマークは高山の椅子と似た品を見分けるいちばん簡単な手がかりである。",
            zh:"廠商也保護了名號。「飛驒家具」於 2008 年 1 月在日本註冊為區域團體商標後，飛驒木工聯合會又於 2009 年 5 月在台灣、2010 年 2 月在中國註冊，搶在冒名「飛驒」的家具於當地站穩腳步之前。商標規範——包括初次製材之後的所有加工都必須在飛驒完成——詳見<a href=\"furniture.html\">飛驒家具</a>頁。對台灣買家而言，這個標章是分辨高山椅子與仿品最簡單的方法。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Enzo Mari's HIDA", ja:"マーリの「HIDA」", zh:"馬里的 HIDA" },
              v:"2005",
              d:{ en:"Shown at the Milan Triennale.", ja:"ミラノ・トリエンナーレで展示。", zh:"於米蘭三年展展出。" } },
            { k:{ en:"ICFF award", ja:"ICFFで受賞", zh:"ICFF 獲獎" },
              v:"2007",
              d:{ en:"Hida Sangyō, New York.", ja:"飛騨産業、ニューヨーク。", zh:"飛驒產業，紐約。" } },
            { k:{ en:"Trademark abroad", ja:"海外での商標", zh:"海外商標" },
              v:"2009 · 2010",
              d:{ en:"Taiwan, then China.", ja:"台湾、つづいて中国。", zh:"先台灣，後中國。" } },
            { k:{ en:"Japanese firms at Milan", ja:"ミラノの日本企業", zh:"米蘭的日本企業" },
              v:"6 / 2,400+",
              d:{ en:"Salone del Mobile, 2016.", ja:"ミラノサローネ、二〇一六年。", zh:"米蘭家具展，2016 年。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Hida Sangyō company history; Japan Design Net report on the 2016 Salone del Mobile; Takayama city and the Hida furniture federation on the regional trademark.",
            ja:"出典：飛騨産業 沿革、JDN「ミラノサローネ2016」レポート、高山市・飛騨木工連合会（地域団体商標）。",
            zh:"資料來源：飛驒產業公司沿革；JDN 2016 年米蘭家具展報導；高山市與飛驒木工聯合會（區域團體商標）。" } }
      ] },
    { t:"section",
      id:"denmark",
      title:{ en:"A Danish house in Takayama", ja:"高山のデンマークの家", zh:"高山的丹麥之家" },
      jp:"フィン・ユールとキタニ",
      body:[
        { t:"p",
          text:{
            en:"The most unusual thread between Hida and the wider world runs to Denmark. Kitani, a Takayama company, specialises in Scandinavian classics. From about 1995 it began repairing furniture by the Danish architect Finn Juhl (1912–1989), whose sculpted teak armchairs are among the most admired pieces of mid-century design, and over some twenty years of restoration its craftsmen worked out how the originals had been built — the joints, the shaping of arms by hand, the sequence of assembly. That knowledge led to a licence from Juhl's widow: Kitani's own site describes its production of Juhl's No. 53 chair as licensed manufacture. The company also makes licensed designs by other Danish designers, among them Ib Kofod-Larsen and Nanna Ditzel. Licensing arrangements for Juhl's work have changed over the years, and a 2024 visitor's report states that Kitani no longer makes his designs, so buyers should check the current range.",
            ja:"飛騨と世界を結ぶ糸のうち、いちばん意外なものはデンマークへ延びている。高山の会社キタニは北欧の名作家具を専門とする。一九九五年ごろから、同社はデンマークの建築家フィン・ユール（一九一二〜一九八九年）の家具の修理を始めた。彫刻のようなチークの肘掛け椅子で知られ、二十世紀半ばのデザインのなかでも最も称えられる作品の作者である。およそ二十年の修復を通じて、職人たちは原品がどう作られていたか——継手、手で削り出す肘、組み立ての順序——を解き明かしていった。その知識がユールの未亡人からのライセンスにつながった。キタニ自身のサイトは、ユールの「No.53」の椅子をライセンス生産として紹介している。同社はイブ・コフォード・ラーセン、ナナ・ディッツェルらほかのデンマークのデザイナーの作品もライセンスで作る。ただしユールの作品のライセンスの形は年とともに変わっており、二〇二四年の訪問記はキタニがもうユールの作品を作っていないと伝えている。買う前に現在の品ぞろえを確かめたい。",
            zh:"飛驒與世界之間最不尋常的一條線，延伸到丹麥。高山的 Kitani 公司專做北歐經典家具。約從 1995 年起，它開始修復丹麥建築師芬·尤爾（Finn Juhl，1912–1989）的家具；尤爾那些如雕塑般的柚木扶手椅，是二十世紀中葉最受推崇的設計之一。經過約二十年的修復，工匠們逐步弄清原件的做法——榫接、以手工削出的扶手、組裝的順序。這些知識換來了尤爾遺孀的授權：Kitani 官網將尤爾「No.53」椅子的生產介紹為授權製造。該公司也以授權生產其他丹麥設計師的作品，包括伊布·科福德-拉森（Ib Kofod-Larsen）與娜娜·迪澤爾（Nanna Ditzel）。不過尤爾作品的授權安排歷年有所變動，一篇 2024 年的參訪紀錄指出 Kitani 已不再生產其作品，購買前宜先確認現行品項。" } },
        { t:"p",
          text:{
            en:"Kitani's other homage is architectural. On the edge of Takayama stands a full-size reproduction of the house Juhl designed for himself in 1942 in Ordrup, north of Copenhagen. Planning began in 2006 and the building was completed in January 2012, furnished with Juhl's designs; it recreates the house as it was when first built rather than as it is today, with a floor area of about 172 square metres, and some thirty local firms took part in its construction. It is one of very few places outside Denmark where the Danish ideal of a whole house designed down to the chairs can be walked through — built by Hida carpenters in a town famous for its own houses.",
            ja:"キタニのもう一つのオマージュは建築である。高山の町はずれに、ユールが一九四二年にコペンハーゲン北郊のオードロップに自分のために建てた家の、実物大の再現が立つ。計画は二〇〇六年に始まり、建物は二〇一二年一月に完成し、ユールの家具がしつらえられた。現在の姿ではなく建てられた当時の姿を再現したもので、床面積は約百七十二平方メートル、地元の三十ほどの会社が建設に加わった。家全体を椅子一脚までデザインするというデンマークの理想を、実際に歩いて体験できるデンマーク国外でもまれな場所であり、それを自らの町家で知られる町の飛騨の大工が建てたのである。",
            zh:"Kitani 的另一項致敬是建築。高山市郊矗立著一棟等比例重現的住宅，原型是尤爾 1942 年在哥本哈根北郊奧德魯普（Ordrup）為自己設計的家。計畫始於 2006 年，建築於 2012 年 1 月完工，並以尤爾的家具布置；它重現的是房子初建時而非今日的模樣，樓地板面積約 172 平方公尺，約 30 家在地企業參與興建。這是丹麥以外少數能親身走進「從整棟房子到每張椅子皆經設計」之丹麥理想的地方——而建造它的，是以自家町屋聞名之城鎮裡的飛驒木匠。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Denmark", ja:"デンマーク", zh:"丹麥" },
              jp:"デンマーク",
              text:{
                en:"Forest covers only about 16% of the land (FAO, 2023). Danish modern furniture grew from cabinetmakers' workshops and their annual guild exhibitions in Copenhagen, working largely in imported teak and in oak and beech; its strength was design and joinery, not forest wealth.",
                ja:"森林は国土の約十六パーセントにすぎない（FAO、二〇二三年）。デンマーク・モダンの家具は家具職人の工房と、コペンハーゲンの組合が毎年開いた展覧会から育ち、多くは輸入のチークと、オークやブナを使った。強みは森の豊かさではなく、デザインと組み手にあった。",
                zh:"森林僅占國土約 16%（FAO，2023 年）。丹麥現代家具源自家具匠的工坊與哥本哈根公會每年舉辦的展覽，大量使用進口柚木及橡木、山毛櫸；其強項在設計與接合工藝，而非森林資源。" } },
            { title:{ en:"Hida", ja:"飛騨", zh:"飛驒" },
              jp:"飛騨",
              text:{
                en:"Gifu is about 81% forest, and Hida's industry began with its own beech. But what made it lasting was the same mix as in Denmark: clustered workshops, skilled hands, a willingness to learn from outside designers, and furniture built to be repaired rather than replaced.",
                ja:"岐阜は約八十一パーセントが森林で、飛騨の産業は地元のブナから始まった。しかしそれを長続きさせたのは、デンマークと同じ組み合わせであった。集まった工房、熟練の手、外のデザイナーから学ぶ柔らかさ、そして取り替えるのではなく直して使う家具づくりである。",
                zh:"岐阜約 81% 為森林，飛驒產業也始於在地的山毛櫸。但讓它長久延續的，是與丹麥相同的組合：群聚的工坊、熟練的手藝、願意向外部設計師學習，以及做來可修理而非汰換的家具。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Kitani, Finn Juhl page; visitor report on the Finn Juhl House Takayama (2024); FAO forest area data via the German Federal Statistical Office.",
            ja:"出典：キタニ「フィン・ユール」頁、フィン・ユール邸見学記（二〇二四年）、FAO森林面積統計（ドイツ連邦統計局の表による）。",
            zh:"資料來源：Kitani「Finn Juhl」頁面；高山芬·尤爾之家參訪紀錄（2024 年）；FAO 森林面積統計（據德國聯邦統計局表格）。" } }
      ] },
    { t:"section",
      id:"wood-exports",
      title:{ en:"Japan's wood exports", ja:"日本の木材輸出", zh:"日本的木材出口" },
      jp:"木材輸出",
      body:[
        { t:"p",
          text:{
            en:"For most of the post-war period Japan was one of the world's great importers of wood, and exports were a footnote. That has changed quickly. In 2013 Japan exported ¥12.3 billion of wood; in 2025 it exported ¥59.6 billion, the highest on record and almost five times the earlier figure. The growth has two sources. The post-war plantations have matured and produce more logs than Japanese mills will buy at a good price, and China's construction and packaging industries, having restricted logging in their own natural forests, buy softwood from wherever it is cheapest. Five destinations take more than nine-tenths of the trade: China alone took 53% by value in 2025, the Philippines 19%, the United States 12%, Korea 5% and Taiwan 4%.",
            ja:"戦後の大半、日本は世界有数の木材の輸入国であり、輸出はつけ足しにすぎなかった。それが急速に変わった。二〇一三年の日本の木材輸出は百二十三億円であったが、二〇二五年には五百九十六億円に達し、過去最高を記録した。以前のほぼ五倍である。伸びには二つの源がある。戦後の人工林が育ち、国内の工場がよい値で買う以上の丸太が出るようになったこと、そして自国の天然林の伐採を制限した中国の建設業と梱包業が、針葉樹材をいちばん安いところから買うことである。輸出先の上位五つで九割を超える。二〇二五年の金額の割合は、中国だけで五十三パーセント、フィリピン十九パーセント、アメリカ十二パーセント、韓国五パーセント、台湾四パーセントであった。",
            zh:"戰後大半時間，日本是全球主要的木材進口國之一，出口只是附註。這個局面變化得很快。2013 年日本木材出口額為 123 億日圓；2025 年達 596 億日圓，創下歷史新高，約為先前的五倍。成長來自兩方面：戰後人工林已經成熟，產出的原木多於國內工廠願以好價錢收購的量；而中國的營建與包裝業在限制本國天然林伐採後，向最便宜的地方採購針葉材。前五大出口地占九成以上：以金額計，2025 年中國一國就占 53%，菲律賓 19%，美國 12%，韓國 5%，台灣 4%。" } },
        { t:"figure",
          caption:{
            en:"Value of Japan's wood exports, total and to the three largest destinations, 2018–2025, ¥ billion (nominal). Source: Forestry Agency, wood export statistics compiled from the Ministry of Finance trade statistics.",
            ja:"日本の木材輸出額（合計と上位三か国・地域）、二〇一八〜二〇二五年、十億円（名目）。出典：林野庁「木材輸出額」（財務省貿易統計より作成）。",
            zh:"日本木材出口額（總額及前三大出口地），2018–2025 年，單位十億日圓（名目）。資料來源：林野廳木材出口統計（依財務省貿易統計整理）。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"Wood exports by destination", ja:"輸出先別の木材輸出額", zh:"各出口地木材出口額" },
            unit:{ en:"¥ bn", ja:"十億円", zh:"十億日圓" },
            x0:2018, x1:2025, y0:0, y1:60, tick:10, xt:[2018,2019,2020,2021,2022,2023,2024,2025], endLabels:true, dec:1,
            series:[
              { n:{ en:"Total", ja:"合計", zh:"總額" }, pts:[[2018,35.1],[2019,34.6],[2020,35.7],[2021,47.5],[2022,52.7],[2023,50.5],[2024,53.8],[2025,59.6]] },
              { n:{ en:"China", ja:"中国", zh:"中國" }, pts:[[2018,15.9],[2019,15.9],[2020,17.0],[2021,22.1],[2022,21.7],[2023,24.8],[2024,29.7],[2025,31.5]] },
              { n:{ en:"Philippines", ja:"フィリピン", zh:"菲律賓" }, dash:"5 4", pts:[[2018,7.9],[2019,7.4],[2020,6.5],[2021,10.3],[2022,14.5],[2023,11.2],[2024,8.9],[2025,11.4]] },
              { n:{ en:"USA", ja:"アメリカ", zh:"美國" }, dash:"2 3", pts:[[2018,2.5],[2019,2.7],[2020,3.8],[2021,5.2],[2022,6.2],[2023,5.3],[2024,5.6],[2025,6.9]] }
            ] }); } },
        { t:"table",
          caption:{ en:"Japan's wood exports by destination, ¥ billion", ja:"輸出先別の木材輸出額（十億円）", zh:"日本木材出口額（依出口地，十億日圓）" },
          cols:[{ en:"Destination", ja:"輸出先", zh:"出口地" }, "2018", "2020", "2022", "2024", "2025"],
          numCols:[1, 2, 3, 4, 5],
          keyCol:true,
          rows:[
            [{ en:"China", ja:"中国", zh:"中國" }, "15.9", "17.0", "21.7", "29.7", "31.5"],
            [{ en:"Philippines", ja:"フィリピン", zh:"菲律賓" }, "7.9", "6.5", "14.5", "8.9", "11.4"],
            [{ en:"United States", ja:"アメリカ", zh:"美國" }, "2.5", "3.8", "6.2", "5.6", "6.9"],
            [{ en:"Korea", ja:"韓国", zh:"韓國" }, "3.2", "3.0", "3.7", "3.2", "3.1"],
            [{ en:"Taiwan", ja:"台湾", zh:"台灣" }, "2.0", "2.0", "2.8", "2.6", "2.3"],
            [{ en:"All destinations", ja:"合計", zh:"總計" }, "35.1", "35.7", "52.7", "53.8", "59.6"]
          ] },
        { t:"p",
          text:{
            en:"What goes where differs sharply. Half of all exports by value are logs, and nine-tenths of the log trade goes to China: in 2025 Japan shipped a record 1.91 million cubic metres of logs, about 88% of them sugi and 11% hinoki. According to the Forestry Agency, small logs become civil-engineering materials in China, and medium and large ones are sawn into packaging, concrete formwork, pallets and coffin boards; some return to the world market as fence boards for America or interior panelling for Korea. The Philippines buys mainly softwood plywood and sugi lumber for building. The United States buys sawn sugi, above all for garden fences and decking, where its natural resistance to decay competes with western red cedar, together with small amounts of cross-laminated timber and glulam. Korea buys logs that are processed at home into interior materials, and Taiwan buys logs for formwork and packaging (¥0.94 billion in 2025) and sawn timber, mostly sugi (¥0.65 billion).",
            ja:"何がどこへ行くかは大きく異なる。輸出額の半分は丸太で、丸太の取引の九割は中国向けである。二〇二五年、日本は過去最高の百九十一万立方メートルの丸太を輸出し、その約八十八パーセントがスギ、十一パーセントがヒノキであった。林野庁によれば、中国では小径木は土木用の資材に、中径木・大径木は梱包材、コンクリートの型枠、パレット、棺の板に挽かれ、一部はアメリカ向けのフェンス材や韓国向けの内装材として世界市場へ戻っていく。フィリピンは主に針葉樹の合板と建築用のスギの製材を買う。アメリカはスギの製材を、とりわけ庭のフェンスやデッキ用に買う。腐りにくさでベイスギ（ウエスタンレッドシーダー）と競うのである。わずかながらCLT（直交集成板）や集成材も渡っている。韓国は丸太を買って国内で内装材に加工し、台湾は型枠や梱包用の丸太（二〇二五年に九億四千万円）と、主にスギの製材（六億五千万円）を買う。",
            zh:"各地買什麼差異很大。出口額有一半是原木，而原木貿易的九成銷往中國：2025 年日本出口原木創紀錄的 191 萬立方公尺，其中約 88% 是柳杉、11% 是扁柏。據林野廳說明，在中國，小徑木用於土木資材，中、大徑木則鋸成包裝材、混凝土模板、棧板與棺木板；部分又以美國的圍籬材或韓國的室內裝修材重返國際市場。菲律賓主要購買針葉樹合板與建築用柳杉製材。美國購買柳杉製材，尤其用於庭園圍籬與露台，以天然耐腐性與西部紅雪松競爭，另有少量 CLT（直交集成板）與集成材。韓國購買原木，在國內加工為室內裝修材；台灣則購買模板與包裝用原木（2025 年 9.4 億日圓）以及以柳杉為主的製材（6.5 億日圓）。" } },
        { t:"note",
          label:{ en:"Why Gifu hardly appears", ja:"岐阜がほとんど現れない理由", zh:"岐阜為何幾乎不在其中" },
          text:{
            en:"The log trade is a Kyushu business. The largest shipping points in 2025 were Shibushi in Kagoshima (451,000 m³), Yatsushiro in Kumamoto and Nobeoka in Miyazaki, close to the sugi plantations of southern Kyushu and to China. Gifu has no sea port, its hinoki fetches better prices at home than on the export market, and its mills are hungry for logs. Its wood leaves Japan mostly in finished form — as furniture, craft objects and guitars.",
            ja:"丸太の輸出は九州の商売である。二〇二五年の主な積出港は鹿児島の志布志（四十五万一千立方メートル）、熊本の八代、宮崎の延岡で、いずれも南九州のスギの人工林にも中国にも近い。岐阜には海の港がなく、そのヒノキは輸出市場より国内のほうが高く売れ、県内の製材所は丸太を求めている。岐阜の木が日本を出るのは、主に仕上がった姿——家具、工芸品、ギター——としてである。",
            zh:"原木出口是九州的生意。2025 年最大的出貨港是鹿兒島的志布志（45.1 萬立方公尺）、熊本的八代與宮崎的延岡，既鄰近南九州的柳杉人工林，也靠近中國。岐阜沒有海港，其扁柏在國內賣得比出口市場好，縣內製材所也渴求原木。岐阜的木材離開日本，多半是以成品之姿——家具、工藝品與吉他。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, wood export value by country and item, 2018–2026 (from Ministry of Finance trade statistics); Forestry Agency, “The situation of wood exports” (April 2026).",
            ja:"出典：林野庁「木材輸出額（二〇一八年〜二〇二六年）」（財務省貿易統計より）、林野庁「木材輸出をめぐる状況」（二〇二六年四月）。",
            zh:"資料來源：林野廳「木材出口額（2018–2026 年）」（依財務省貿易統計）；林野廳〈木材出口現況〉（2026 年 4 月）。" } }
      ] },
    { t:"section",
      id:"export-strategy",
      title:{ en:"Selling value, not volume", ja:"量ではなく価値を売る", zh:"賣價值而非數量" },
      jp:"輸出戦略",
      body:[
        { t:"p",
          text:{
            en:"Tokyo's worry is that Japan has become a supplier of cheap raw logs. Under the national strategy for farm, forestry and fishery exports, wood is one of the priority products, with a target of ¥166 billion of forest-product exports by 2030, and the Forestry Agency's stated aim is to move “from logs to high-value products” such as sawn timber and plywood. The targets are steep: sawn-timber exports of ¥7.4 billion in 2024 are to reach ¥85 billion by 2030, and plywood ¥11.5 billion from ¥7.4 billion. The agency's own diagnosis is candid — Japanese post-and-beam building and Japanese sawn products are little known in Asian markets, plywood made to Japanese standard sizes does not fit other countries' building systems, and the United States requires design values before sugi and hinoki can be used as structural two-by-four lumber. Its remedies are seminars for architects and builders in China, Korea and Taiwan, trade fairs, technical guides in English, and work to obtain American design-value approval.",
            ja:"国が懸念するのは、日本が安い原木の供給国になってしまったことである。農林水産物・食品の輸出拡大の国の戦略のなかで、木材は重点品目の一つとされ、林産物の輸出額を二〇三〇年までに千六百六十億円にする目標がある。林野庁が掲げるのは、丸太中心から製材や合板など付加価値の高い製品への転換である。目標は高い。二〇二四年に七十四億円だった製材の輸出を二〇三〇年に八百五十億円に、合板を七十四億円から百十五億円にするという。林野庁自身の診断は率直である。日本の木造軸組構法と日本の製材品はアジアの市場でまだ十分に知られていない。日本の標準寸法の合板は相手国の建築の規格に合わない。アメリカでは、スギやヒノキを構造用のツーバイフォー材として使うには設計強度の認可がいる。対策は、中国・韓国・台湾での建築士や工務店向けのセミナー、見本市への出展、英語の技術資料、そしてアメリカでの設計強度の認可の取得である。",
            zh:"日本政府擔心的是，日本已成為廉價原木的供應國。在農林水產品與食品出口擴大的國家戰略中，木材被列為重點品項之一，目標是 2030 年林產品出口額達 1,660 億日圓；林野廳揭示的方向是「從以原木為主，轉向製材、合板等高附加價值產品」。目標相當陡峭：2024 年 74 億日圓的製材出口，要在 2030 年達到 850 億日圓；合板則從 74 億日圓增至 115 億日圓。林野廳的自我診斷很坦白——日本的木造軸組工法與日本製材品在亞洲市場知名度不足；依日本標準尺寸生產的合板不合他國建築規格；在美國，柳杉與扁柏要作為結構用 2×4 材，須先取得設計強度認可。對策包括在中國、韓國與台灣為建築師與營造商舉辦講座、參加展覽、編製英文技術資料，以及爭取美國的設計強度認可。" } },
        { t:"p",
          text:{
            en:"Gifu fits the strategy's second half better than its first. Its exports are finished goods that carry the name of a place, and its firms have been quick to use the support on offer. In 2021, when the Japan External Trade Organization (JETRO) chose firms for TAKUMI NEXT, a programme helping craft companies sell abroad online, it selected 155 companies nationwide; 16 were from Gifu, more than from any other prefecture. Among them were Ōhashi Ryōki, the Ōgaki maker of hinoki <a href=\"masu.html\">masu</a>, and a maker of wooden cutting boards in Motosu. Hida furniture, Tōnō hinoki products, the prefecture's guitars and its paper and lanterns follow the same logic: a small volume of wood, a large amount of skill, and a story that buyers abroad are willing to pay for.",
            ja:"岐阜は、この戦略の前半より後半によく合う。岐阜の輸出は土地の名を帯びた完成品であり、県内の企業は用意された支援をすばやく使ってきた。二〇二一年、日本貿易振興機構（ジェトロ）が工芸の企業のオンラインでの海外販路開拓を支える「TAKUMI NEXT」の対象を選んだとき、全国で百五十五社が選ばれ、そのうち十六社が岐阜県の企業で、都道府県で最も多かった。大垣でヒノキの<a href=\"masu.html\">枡</a>を作る大橋量器や、本巣の木のまな板のメーカーもその中にある。飛騨の家具、東濃ひのきの製品、県のギター、和紙や提灯も同じ理屈に立つ。わずかな木に多くの技を注ぎ、海外の買い手が対価を払ってくれる物語を添えるのである。",
            zh:"岐阜更符合這項戰略的後半段而非前半段。它的出口是帶著地名的成品，縣內企業也很快善用各種支援。2021 年，日本貿易振興機構（JETRO）為協助工藝企業透過網路拓展海外市場的「TAKUMI NEXT」計畫遴選對象，全國共選出 155 家，其中 16 家來自岐阜，居各都道府縣之冠。名單中包括大垣製作扁柏<a href=\"masu.html\">木枡</a>的大橋量器，以及本巢的木砧板製造商。飛驒家具、東濃檜製品、縣內的吉他，以及和紙與燈籠，都依循同樣的邏輯：少量的木材、大量的技藝，再加上海外買家願意付費的故事。" } },
        { t:"defs",
          items:[
            { term:{ en:"Logs", ja:"丸太", zh:"原木" },
              jp:"丸太",
              def:{
                en:"Half of Japan's wood exports by value (¥29.8 billion in 2025), mostly sugi from Kyushu to China. Low value per cubic metre; Gifu plays almost no part.",
                ja:"日本の木材輸出額の半分（二〇二五年に二百九十八億円）。多くは九州のスギで、中国向け。立方メートル当たりの値は低く、岐阜はほとんど関わらない。",
                zh:"占日本木材出口額一半（2025 年 298 億日圓），多為九州柳杉銷往中國。每立方公尺價值低，岐阜幾乎未參與。" } },
            { term:{ en:"Sawn timber and plywood", ja:"製材と合板", zh:"製材與合板" },
              jp:"製材・合板",
              def:{
                en:"The products the government most wants to grow; the United States (fencing, two-by-four) and the Philippines (plywood) are the main markets.",
                ja:"国が最も伸ばしたい品目。主な市場はアメリカ（フェンス材、ツーバイフォー）とフィリピン（合板）。",
                zh:"政府最想擴大的品項；主要市場為美國（圍籬材、2×4 材）與菲律賓（合板）。" } },
            { term:{ en:"Finished goods", ja:"完成品", zh:"成品" },
              jp:"完成品",
              def:{
                en:"Furniture, craft objects and instruments — where Gifu is strong. Not counted in the wood export figures above, which cover logs and primary products.",
                ja:"家具、工芸品、楽器——岐阜が強い分野である。丸太と一次製品を対象とする上の木材輸出の数字には含まれない。",
                zh:"家具、工藝品與樂器——岐阜的強項。不列入上述以原木與初級產品為對象的木材出口數字。" } },
            { term:{ en:"Know-how and design", ja:"技と意匠", zh:"技術與設計" },
              jp:"技術",
              def:{
                en:"Joinery, tools, licensed manufacture and building methods: exports that leave no trace in trade statistics but spread the reputation of Japanese woodwork.",
                ja:"継手・仕口、道具、ライセンス生産、建て方。貿易統計に跡を残さないが、日本の木工の評判を広げる輸出である。",
                zh:"榫接、工具、授權生產與營建工法：在貿易統計中不留痕跡，卻傳播日本木工聲譽的「出口」。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, “The situation of wood exports” (April 2026); JETRO Gifu, TAKUMI NEXT 2021 selection.",
            ja:"出典：林野庁「木材輸出をめぐる状況」（二〇二六年四月）、ジェトロ岐阜「TAKUMI NEXT 2021」採択結果。",
            zh:"資料來源：林野廳〈木材出口現況〉（2026 年 4 月）；JETRO 岐阜「TAKUMI NEXT 2021」遴選結果。" } }
      ] },
    { t:"section",
      id:"carpentry-abroad",
      title:{ en:"Joinery, tools and buildings abroad", ja:"海外に渡った継手・道具・建物", zh:"走向海外的榫接、工具與建築" },
      jp:"大工の技",
      body:[
        { t:"p",
          text:{
            en:"Japan's most influential wood export may be one that never passed through customs: the way its carpenters work. Western woodworkers began to take a serious interest in Japanese tools and joinery in the 1970s and 1980s, helped by a handful of books in English — Seike Kiyosi's <em>The Art of Japanese Joinery</em> (1977) and Odate Toshio's <em>Japanese Woodworking Tools</em> (1984) are the best known. What caught their attention was the pull stroke. A saw that cuts on the pull can have a blade far thinner than a Western push saw, and it leaves a finer kerf; today pull saws made in Japan, or designed after Japanese models, hang in workshops across Europe and North America, alongside Japanese chisels and planes. The American furniture maker George Nakashima (1905–1990), who worked in Tokyo for the architect Antonin Raymond in the 1930s before founding his workshop in New Hope, Pennsylvania, brought something of the Japanese regard for a single board — its grain, its natural edge — into American studio furniture. The tools themselves, and the blade-making town of Seki in central Gifu, are described on the <a href=\"tools.html\">tools</a> page; the joints on the <a href=\"joinery.html\">joinery</a> page.",
            ja:"日本の木の輸出のなかで最も影響の大きかったものは、税関を通らなかったものかもしれない。大工の仕事の仕方である。欧米の木工家が日本の道具と継手・仕口に本気で関心を向けはじめたのは一九七〇年代から一九八〇年代にかけてで、そこには英語で書かれた何冊かの本の力があった。清家清の『The Art of Japanese Joinery』（一九七七年）とオダテ・トシオ（Toshio Odate）の『Japanese Woodworking Tools』（一九八四年）がよく知られる。彼らの目をとらえたのは引いて切る動作であった。引いて切る鋸は西洋の押す鋸よりはるかに薄い刃にでき、切り代も細い。いまでは日本製の、あるいは日本の鋸にならって作られた引き鋸が、日本の鑿や鉋とともに欧米じゅうの工房に掛かっている。アメリカの家具作家ジョージ・ナカシマ（一九〇五〜一九九〇年）は、一九三〇年代に東京で建築家アントニン・レーモンドのもとで働いたのち、ペンシルベニア州ニューホープに工房を開き、一枚の板——その木目、その自然の縁——を尊ぶ日本の感覚をアメリカのスタジオ家具にもちこんだ。道具そのものと、岐阜の中央にある刃物の町・関については<a href=\"tools.html\">大工道具</a>の頁に、継手については<a href=\"joinery.html\">継手・仕口</a>の頁にある。",
            zh:"日本最具影響力的木材「出口」，或許是從未通過海關的東西：它的木匠做事的方式。西方木工家自 1970 年代到 1980 年代開始認真關注日本的工具與榫接，幾本英文著作功不可沒——清家清的《The Art of Japanese Joinery》（1977 年）與Toshio Odate 的《Japanese Woodworking Tools》（1984 年）最為人知。吸引他們的是「拉切」的動作。拉切的鋸子鋸片可以比西式推鋸薄得多，鋸路也更細；如今日本製或仿日式設計的拉鋸，與日本的鑿子、刨刀一起，掛在歐美各地的工坊裡。美國家具作家喬治·中島（George Nakashima，1905–1990）在 1930 年代曾於東京為建築師安東尼·雷蒙（Antonin Raymond）工作，之後在賓州新希望鎮成立工坊，把日本人重視單片木板——其紋理與自然邊緣——的感性帶進美國工作室家具。工具本身以及岐阜中部的刀具之城關市，請見<a href=\"tools.html\">木匠的工具</a>頁；接合方式請見<a href=\"joinery.html\">榫接</a>頁。" } },
        { t:"h3", text:{ en:"Japanese wooden buildings abroad", ja:"海外の日本の木造建築", zh:"海外的日本木造建築" }, jp:"海外の木造" },
        { t:"timeline",
          items:[
            { year:"1893",
              title:{ en:"Hō-ō-den, Chicago", ja:"鳳凰殿（シカゴ）", zh:"鳳凰殿（芝加哥）" },
              text:{
                en:"Japan's pavilion at the World's Columbian Exposition, modelled on the Phoenix Hall of the Byōdō-in and built by Japanese carpenters. It is often said to have impressed the young Frank Lloyd Wright.",
                ja:"シカゴ万国博覧会の日本館。平等院鳳凰堂を手本に日本の大工が建てた。若きフランク・ロイド・ライトに強い印象を与えたとよく言われる。",
                zh:"芝加哥哥倫布紀念博覽會的日本館，以平等院鳳凰堂為範本，由日本木匠建造。常被認為曾令年輕的法蘭克·洛伊·萊特印象深刻。" } },
            { year:"1954",
              title:{ en:"Shōfusō, New York to Philadelphia", ja:"松風荘（ニューヨークからフィラデルフィアへ）", zh:"松風莊（從紐約到費城）" },
              text:{
                en:"A house in the manner of an early seventeenth-century shoin residence, designed by Yoshimura Junzō and built in Nagoya in 1953, shown in the garden of the Museum of Modern Art in 1954–1955 and re-erected in Philadelphia's Fairmount Park in 1958.",
                ja:"十七世紀初めの書院造にならった住宅で、吉村順三が設計し、一九五三年に名古屋で造られた。一九五四〜一九五五年にニューヨーク近代美術館の庭で展示され、一九五八年にフィラデルフィアのフェアマウント公園に移築された。",
                zh:"仿十七世紀初書院造的住宅，由吉村順三設計，1953 年在名古屋建造，1954–1955 年於紐約現代美術館庭園展出，1958 年移建至費城費爾蒙特公園。" } },
            { year:"2015",
              title:{ en:"Japan Pavilion, Expo Milano", ja:"ミラノ万博日本館", zh:"米蘭世博日本館" },
              text:{
                en:"Kitagawara Atsushi's pavilion wrapped in a three-dimensional wooden lattice drawing on interlocking joinery, open from 1 May to 31 October 2015.",
                ja:"北川原温の設計で、組み手の技にならった立体木格子で包まれた。二〇一五年五月一日から十月三十一日まで開かれた。",
                zh:"北川原溫設計，外覆以傳統交錯接合為靈感的立體木格柵，2015 年 5 月 1 日至 10 月 31 日開放。" } },
            { year:"2017",
              title:{ en:"Japan House São Paulo", ja:"ジャパン・ハウス サンパウロ", zh:"日本之家聖保羅" },
              text:{
                en:"A government cultural centre whose renovation, under Kuma Kengo's design supervision, uses hinoki and washi; opened on 6 May 2017.",
                ja:"隈研吾がデザインを監修した改修で、ヒノキと和紙を用いた政府の文化発信拠点。二〇一七年五月六日に開館。",
                zh:"由隈研吾監修設計改建、使用扁柏與和紙的日本政府文化據點，2017 年 5 月 6 日開館。" } }
          ] },
        { t:"p",
          text:{
            en:"Gifu's carpenters rarely appear in these stories by name, but their materials and methods do: the sacred hinoki of Ura-Kiso, the Hida tradition of building without nails, and the precut factories that now cut Japanese joinery by machine. The prefecture's most widely travelled wooden objects, however, are its guitars. Takamine of Nakatsugawa and Yairi of Kani sell many of their instruments abroad and count famous international players among their users; their stories are told on the <a href=\"takamine.html\">Takamine</a> and <a href=\"yairi.html\">Yairi</a> pages, and the industry's figures on the <a href=\"guitarindustry.html\">guitar industry</a> page.",
            ja:"岐阜の大工がこうした話に名前で出てくることはめったにないが、その材と技は出てくる。裏木曽の神聖なヒノキ、釘を使わずに組む飛騨の伝統、そしていまや日本の継手を機械で刻むプレカット工場である。とはいえ、県で最も遠くまで旅している木の品はギターである。中津川のタカミネと可児のヤイリは楽器の多くを海外に売り、名高い海外の奏者を使い手に数える。その話は<a href=\"takamine.html\">タカミネ</a>と<a href=\"yairi.html\">ヤイリ</a>の頁に、業界の数字は<a href=\"guitarindustry.html\">ギター産業</a>の頁にある。",
            zh:"岐阜的木匠很少以姓名出現在這些故事裡，但他們的材料與方法會：裏木曾的神聖扁柏、飛驒不用釘子的營造傳統，以及如今以機器切削日式榫接的預切工廠。不過，縣內走得最遠的木製品是吉他。中津川的 Takamine 與可兒的 Yairi 有許多樂器銷往海外，使用者包括不少國際知名樂手；它們的故事見 <a href=\"takamine.html\">Takamine</a> 與 <a href=\"yairi.html\">Yairi</a> 頁，產業數字見<a href=\"guitarindustry.html\">吉他產業</a>頁。" } },
        { t:"tiny",
          text:{
            en:"Sources: METI and the Government of Japan on the Japan Pavilion at Expo Milano 2015; Japan House and architecture press on Japan House São Paulo; standard histories for the Hō-ō-den, Shōfusō and George Nakashima.",
            ja:"出典：経済産業省・政府広報（ミラノ万博日本館）、ジャパン・ハウスおよび建築メディア（ジャパン・ハウス サンパウロ）、鳳凰殿・松風荘・ジョージ・ナカシマについては一般的な文献。",
            zh:"資料來源：經濟產業省與日本政府宣傳資料（米蘭世博日本館）；日本之家與建築媒體（日本之家聖保羅）；鳳凰殿、松風莊與喬治·中島則依一般文獻。" } }
      ] },
    { t:"section",
      id:"wood-regions",
      title:{ en:"Gifu among the world's wood regions", ja:"世界の木の産地のなかの岐阜", zh:"世界木材產地中的岐阜" },
      jp:"比較",
      body:[
        { t:"p",
          text:{
            en:"Gifu is one of the most thickly forested places in the developed world. About 81% of the prefecture is forest — more than Finland, the most forested country in Europe, and far more than Germany or Denmark, whose woodworking traditions are world-famous. Forest cover alone, however, says little about a wood culture. Denmark built a design industry on imported teak; Taiwan, three-fifths forest, now imports almost all the wood it uses. The comparison that matters is what each region has done with its trees.",
            ja:"岐阜は先進国のなかでも最も森の濃い土地の一つである。県の約八十一パーセントが森林で、ヨーロッパで最も森の多いフィンランドより多く、木工の伝統で世界に知られるドイツやデンマークよりはるかに多い。ただし森林の割合だけでは木の文化について多くを語れない。デンマークは輸入したチークでデザイン産業を築き、国土の五分の三が森である台湾は、いま使う木のほとんどを輸入している。比べるべきは、それぞれの土地が木で何をしてきたかである。",
            zh:"岐阜是已開發世界中森林最茂密的地區之一。全縣約 81% 為森林——高於歐洲森林覆蓋率最高的芬蘭，更遠高於木工傳統聞名世界的德國與丹麥。然而，光看森林覆蓋率很難說明一地的木文化。丹麥以進口柚木建立起設計產業；森林占五分之三的台灣，如今使用的木材幾乎全靠進口。真正值得比較的，是各地拿它們的樹做了什麼。" } },
        { t:"figure",
          caption:{
            en:"Forest as a share of land area, per cent. Countries: FAO data for 2023 as tabulated by the German Federal Statistical Office. Gifu: Gifu Prefecture (early 2020s). Taiwan: about three-fifths, from its national forest inventory. National definitions differ; Japan's own statistics give about 67%.",
            ja:"国土（県土）に占める森林の割合（％）。国はFAOの二〇二三年のデータ（ドイツ連邦統計局の表による）。岐阜は岐阜県（二〇二〇年代初め）。台湾は国家森林資源調査による約五分の三。定義は国ごとに異なり、日本の統計では約六十七パーセント。",
            zh:"森林占土地面積比例（%）。各國為 FAO 2023 年資料（依德國聯邦統計局表格）。岐阜依岐阜縣資料（2020 年代初）。台灣約五分之三，依其全國森林資源調查。各國定義不同；日本本國統計約為 67%。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Forest cover", ja:"森林率", zh:"森林覆蓋率" }, unit:"%", max:100, labelW:170, dec:1,
            items:[
              { n:{ en:"Gifu Prefecture", ja:"岐阜県", zh:"岐阜縣" }, v:81, lab:"81 %", f:"#E0E6DB" },
              { n:{ en:"Finland", ja:"フィンランド", zh:"芬蘭" }, v:73.7 },
              { n:{ en:"Sweden", ja:"スウェーデン", zh:"瑞典" }, v:68.7 },
              { n:{ en:"Japan", ja:"日本", zh:"日本" }, v:68.4, f:"#EDE5D2" },
              { n:{ en:"Korea", ja:"韓国", zh:"韓國" }, v:64.1 },
              { n:{ en:"Taiwan", ja:"台湾", zh:"台灣" }, v:60, lab:{ en:"≈ 60 %", ja:"約60 %", zh:"約 60 %" } },
              { n:{ en:"Canada", ja:"カナダ", zh:"加拿大" }, v:39.5 },
              { n:{ en:"United States", ja:"アメリカ", zh:"美國" }, v:33.9 },
              { n:{ en:"Germany", ja:"ドイツ", zh:"德國" }, v:32.7 },
              { n:{ en:"Denmark", ja:"デンマーク", zh:"丹麥" }, v:15.8 }
            ] }); } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Scandinavia", ja:"北欧", zh:"北歐" },
              jp:"北欧",
              text:{
                en:"Finland (73.7% forest) and Sweden (68.7%) turned vast spruce, pine and birch forests into pulp, paper and sawn-timber industries of world scale, with large mechanised mills and a strong culture of family forest ownership. Gifu shares the family ownership but not the scale: its owners are many and small, its slopes steep, and its costs of extraction far higher.",
                ja:"フィンランド（森林率七十三・七パーセント）とスウェーデン（六十八・七パーセント）は、広大なトウヒ・マツ・カバの森を、世界規模のパルプ・紙・製材の産業に変えた。大きな機械化された工場と、家族による森林所有の強い文化がある。岐阜は家族所有を共有するが、規模は共有しない。所有者は多く小さく、斜面は急で、搬出の費用ははるかに高い。",
                zh:"芬蘭（森林率 73.7%）與瑞典（68.7%）把廣大的雲杉、松與樺木森林，發展成世界級的紙漿、造紙與製材產業，擁有大型機械化工廠與深厚的家族林地所有傳統。岐阜同樣以家族持有為主，但規模迥異：林主多而分散，坡地陡峭，搬出成本高得多。" } },
            { title:{ en:"The Black Forest", ja:"シュヴァルツヴァルト", zh:"黑森林" },
              jp:"黒い森",
              text:{
                en:"A mountain range of spruce and silver fir in south-west Germany, famous for clock-making since the eighteenth century and for the great rafts of “Dutch timber” once floated down the Rhine to the shipyards of the Netherlands. The parallels with Gifu are close: mountain conifers, river rafting to a distant market, and a craft industry that grew out of the forest and long winters.",
                ja:"ドイツ南西部のトウヒとモミの山地で、十八世紀からの時計づくりと、かつてライン川を下ってオランダの造船所へ流された「オランダ材」の大いかだで知られる。岐阜との類似は近い。山の針葉樹、遠い市場への川の流送、そして森と長い冬から生まれた工芸の産業である。",
                zh:"德國西南部以雲杉與冷杉為主的山地，以十八世紀以來的製鐘業，以及昔日沿萊茵河漂流到荷蘭造船廠的「荷蘭材」大木筏聞名。與岐阜的相似處很多：山地針葉樹、以河運送往遠方市場的木筏，以及從森林與漫長冬季中誕生的工藝產業。" } },
            { title:{ en:"The Pacific Northwest", ja:"北米太平洋岸北西部", zh:"北美太平洋西北地區" },
              jp:"米材",
              text:{
                en:"Oregon, Washington and British Columbia grow Douglas fir, western hemlock and western red cedar of enormous size. For decades their logs and lumber — <em>beizai</em>, “American wood” — fed Japanese sawmills and undercut domestic sugi and hinoki. Around 1990 the protection of old-growth forest sharply reduced federal logging in the United States, much as Taiwan ended natural-forest logging in the same years.",
                ja:"オレゴン、ワシントン、ブリティッシュコロンビアには、巨大なベイマツ、ベイツガ、ベイスギが育つ。何十年ものあいだ、その丸太と製材——いわゆる「米材」——は日本の製材所を養い、国産のスギやヒノキを値で押さえた。一九九〇年ごろ、原生林の保護のためアメリカの国有林の伐採は大きく減った。台湾が同じころ天然林の伐採をやめたのと重なる。",
                zh:"奧勒岡、華盛頓與英屬哥倫比亞生長著巨大的花旗松、西部鐵杉與西部紅雪松。數十年間，這些原木與製材——日本所稱的「米材」——供應日本製材所，並以低價壓制國產柳杉與扁柏。1990 年前後，美國為保護原始林而大幅減少聯邦林地的伐採，恰與台灣同一時期停止天然林伐採相呼應。" } },
            { title:{ en:"Alishan and Taiwan", ja:"阿里山と台湾", zh:"阿里山與台灣" },
              jp:"阿里山",
              text:{
                en:"Taiwan's red cypress and Taiwan hinoki are close relatives of Kiso's trees, and Alishan's forest railway, opened in 1912, had its counterpart in the Kiso forest railways begun in 1916. Both regions logged their ancient cypress hard in the twentieth century; both now protect what remains. The story is told on the <a href=\"taiwan.html\">Taiwan</a> page.",
                ja:"台湾の紅檜（ベニヒ）とタイワンヒノキは木曽の木の近縁で、一九一二年に開通した阿里山の森林鉄道には、一九一六年に始まる木曽の森林鉄道という対があった。どちらも二十世紀に古い檜を激しく伐り、どちらもいま残ったものを守っている。その話は<a href=\"taiwan.html\">台湾</a>の頁にある。",
                zh:"台灣的紅檜與台灣扁柏是木曾樹種的近親，1912 年通車的阿里山森林鐵路，也與 1916 年起興建的木曾森林鐵路遙相對應。兩地都在二十世紀大量砍伐古老檜木，如今也都保護著僅存者。詳見<a href=\"taiwan.html\">台灣</a>頁。" } }
          ] },
        { t:"p",
          text:{
            en:"Set beside these regions, Gifu's distinctive features stand out. It grows a timber found nowhere else in quantity — Japanese hinoki, of which it holds about 50 million cubic metres in its plantations. Most of its private forest is owned in small parcels by a great many families, on slopes where cable logging is the norm. It has a sacred use for its best trees, supplying the rebuilding of Ise Jingū every twenty years, that has no equivalent in Europe or America. And it has kept a dense network of small mills and workshops — the largest number of sawmills of any prefecture in Japan — rather than consolidating into a few giant plants. That makes Gifu less efficient than Finland or Oregon at producing cheap wood, and better placed than either to sell what the world increasingly wants from wood: provenance, craft and a story.",
            ja:"これらの産地と並べると、岐阜の特色が浮かび上がる。まず、ほかでは大量に育たない材——日本のヒノキ——を育て、人工林に約五千万立方メートルを蓄えている。民有林の多くは数多くの家族が小さな区画で所有し、架線集材が当たり前の斜面にある。最良の木には、二十年ごとの伊勢神宮の造り替えに材を納めるという神聖な用途があり、欧米にはそれにあたるものがない。そして、少数の巨大工場に集約するのではなく、小さな製材所や工房の密な網を保ってきた。製材工場の数は全国の都道府県で最も多い。そのため岐阜は、安い木を作ることではフィンランドやオレゴンに劣るが、世界がますます木に求めるもの——産地、手仕事、物語——を売ることでは、そのどちらよりも有利な位置にある。",
            zh:"與這些產地並列，岐阜的特色便清楚浮現。它培育一種在別處無法大量取得的木材——日本扁柏，人工林中蓄積約 5,000 萬立方公尺。民有林多由眾多家庭分成小塊持有，位於以架線集材為常態的陡坡上。它的良木有神聖用途——每二十年供應伊勢神宮的重建——在歐美找不到對應。它也保留了由小型製材所與工坊構成的密集網絡，而非整併成少數大廠：製材所數量居日本各都道府縣之冠。這使岐阜在生產廉價木材上不如芬蘭或奧勒岡，卻比兩者更適合販賣世界日益向木材要求的東西：產地、手藝與故事。" } },
        { t:"tiny",
          text:{
            en:"Sources: FAO forest area data (2023) via the German Federal Statistical Office; Gifu Prefecture, state of forestry and the timber industry (forest share, hinoki growing stock FY2019, sawmill numbers FY2021).",
            ja:"出典：FAO森林面積統計（二〇二三年、ドイツ連邦統計局の表による）、岐阜県「岐阜県の林業・木材産業の現状」（森林率、二〇一九年度のヒノキ蓄積、二〇二一年度の製材工場数）。",
            zh:"資料來源：FAO 森林面積統計（2023 年，據德國聯邦統計局表格）；岐阜縣〈岐阜縣林業與木材產業現況〉（森林率、2019 年度扁柏蓄積量、2021 年度製材所數）。" } }
      ] },
    { t:"related",
      items:[
        { href:"furniture.html",
          why:{ en:"The Hida furniture makers and their history.", ja:"飛騨の家具メーカーとその歴史。", zh:"飛驒家具廠商及其歷史。" } },
        { href:"trade.html",
          why:{ en:"Imports, self-sufficiency and the wood shock.", ja:"輸入、自給率、ウッドショック。", zh:"進口、自給率與木材危機。" } },
        { href:"taiwan.html",
          why:{ en:"Alishan, Taiwan's cypress and its ties with Gifu.", ja:"阿里山、台湾の檜、岐阜とのつながり。", zh:"阿里山、台灣檜木及其與岐阜的連結。" } },
        { href:"guitarindustry.html", why:{ en:"Guitars made for the world.", ja:"世界へ向けたギター。", zh:"銷往世界的吉他。" } },
        { href:"industry.html", why:{ en:"Gifu's wood industries in numbers.", ja:"数字で見る岐阜の木材産業。", zh:"數字看岐阜木材產業。" } }
      ] }
  ] };

/* ---- ---------------------------------------------- fuel */
GIFU.pages["fuel"] = { kicker:{ en:"Living with Wood · 09", ja:"木と暮らす · 09", zh:"與木共處 · 09" },
  title:{ en:"Wood as Fire", ja:"火としての木", zh:"作為火的木" },
  jp:"燃料",
  lede:{
    en:"For most of history the greater part of all the wood cut in Gifu was burned. Firewood cooked every meal and heated every bath; charcoal warmed the braziers of town houses and fed the forges of Seki; pine fired the kilns of Mino and still lights the cormorant boats on the Nagara. Then, within about fifteen years after the mid-1950s, oil and gas took over, and Japan's charcoal output fell by more than nine-tenths. Since 2012 a feed-in tariff for renewable power has brought wood back into the fire on an industrial scale — in power stations such as the one at Mizuho — and with it new arguments about where the fuel should come from. This page traces the whole arc, from the charcoal kiln to the biomass boiler.",
    ja:"歴史の大部分をつうじて、岐阜で伐られる木の大半は燃やされていた。薪は毎日の煮炊きと風呂を支え、炭は町家の火鉢を温め、関の鍛冶場を養った。松は美濃の窯を焚き、いまも長良川の鵜舟を照らしている。ところが一九五〇年代半ばから約十五年のうちに石油とガスがとってかわり、日本の木炭の生産は九割以上減った。二〇一二年からは再生可能エネルギーの固定価格買取制度によって、木はふたたび工業的な規模で火に戻ってきた——瑞穂市の発電所のようなところで——そしてそれとともに、燃料をどこから得るべきかという新しい議論も生まれた。この頁は、炭窯からバイオマスボイラーまで、その弧の全体をたどる。",
    zh:"在歷史上大部分的時間裡，岐阜砍伐的木材大多被燒掉了。柴薪煮熟每一餐、燒熱每一池洗澡水；木炭溫暖町家的火缽，供應關市的鍛冶場；松木燒熱美濃的窯，至今仍照亮長良川上的鸕鶿船。然而自 1950 年代中期起約十五年間，石油與瓦斯取而代之，日本的木炭產量減少了九成以上。自 2012 年起，再生能源的固定價格收購制度讓木材以工業規模重回火中——例如瑞穗市的發電廠——隨之而來的，是關於燃料應從何處取得的新爭論。本頁從炭窯到生質鍋爐，追溯這段完整的軌跡。" },
  body:[
    { t:"section",
      id:"hearth",
      title:{ en:"The fire at the centre of the house", ja:"家の中心の火", zh:"家屋中心的火" },
      jp:"囲炉裏・火鉢・窯",
      body:[
        { t:"p",
          text:{
            en:"In the mountain houses of Hida the fire burned in an open hearth, the <em>irori</em>, sunk into the floor of the main room. It cooked, heated and lit the house, dried clothes and firewood on racks above, and its smoke, rising through the open rafters, dried and blackened the roof timbers and the thatch and kept insects away — one reason why the great gasshō farmhouses of Shirakawa-gō have survived for centuries. In the towns of the plain, where open fires were a danger in crowded streets, the fuel of choice was charcoal, burning almost without smoke in a ceramic or wooden brazier, the <em>hibachi</em>, or in a <em>kotatsu</em> under a quilted table. A household burned several cubic metres of firewood a year, and its charcoal came from the coppice woods of the <a href=\"satoyama.html\">satoyama</a>, cut in rotation every fifteen to twenty-five years.",
            ja:"飛騨の山の家では、火は主屋の床に切った囲炉裏で燃えていた。囲炉裏は煮炊きをし、家を暖め、照らし、上の棚で衣類や薪を乾かした。煙は吹き抜けの小屋組を昇って梁や茅を乾かし、黒く燻し、虫を遠ざけた。白川郷の大きな合掌造りの民家が何世紀も生き延びてきた理由の一つである。家の建てこむ平野の町では、裸火は危険だったので、選ばれた燃料は炭だった。陶器や木の火鉢で、あるいはふとんをかけた炬燵の中で、ほとんど煙を出さずに燃える。一軒の家は一年に数立方メートルの薪を燃やし、炭は十五〜二十五年ごとに順に伐られる<a href=\"satoyama.html\">里山と水</a>の薪炭林から来た。",
            zh:"在飛驒的山村民家中，火在主屋地板上挖出的「圍爐裏」（地爐）裡燃燒。它用來煮食、取暖、照明，並在上方的架子上烘乾衣物與柴薪；煙霧穿過挑空的屋架上升，烘乾並燻黑樑木與茅草，驅走蟲害——這正是白川鄉大型合掌造農家能保存數百年的原因之一。在房屋密集的平原城鎮，明火十分危險，人們選用的燃料是木炭：在陶製或木製的「火缽」裡，或在蓋著棉被的「被爐」下，幾乎無煙地燃燒。一戶人家一年要燒掉數立方公尺的柴薪，而木炭則來自<a href=\"satoyama.html\">里山與水</a>中每 15 至 25 年輪流砍伐的薪炭林。" } },
        { t:"p",
          text:{
            en:"Industry burned wood too. The swordsmiths and cutlers of Seki needed pine charcoal for their forges; the potters of the Tōnō district, where Mino ware flourished from the late sixteenth century, fired their kilns with split red pine, which burns long and hot; and on summer nights the cormorant fishermen of the Nagara still hang iron baskets of burning pine from the bows of their boats to draw the sweetfish towards the birds. In the Hida mountains, beech — later the raw material of Hida's bentwood chairs — was for centuries thought fit mainly for charcoal and clogs (see <a href=\"furniture.html\">Hida Furniture</a>). Each of these uses shaped the forests around it: pine thrived on the thin, raked soils of heavily used hills, and the coppice oaks of the charcoal woods were never allowed to grow old.",
            ja:"産業も木を燃やした。関の刀鍛冶や刃物師は鍛冶場に松炭を必要とし、十六世紀末から美濃焼が栄えた東濃の陶工たちは、長く高温で燃える割ったアカマツで窯を焚いた。夏の夜、長良川の鵜匠はいまも舟の舳先に松を燃やす鉄の篝をつるし、アユを鵜のほうへ寄せる。飛騨の山では、のちに飛騨の曲木椅子の材料となるブナが、何世紀ものあいだ主に炭や下駄にしか向かないと考えられていた（<a href=\"furniture.html\">飛騨の家具</a>を参照）。こうした使い方の一つ一つが、まわりの森をかたちづくった。落ち葉をかきとられたやせた土の山にはマツが茂り、炭焼きの林のコナラは老いることを許されなかった。",
            zh:"產業也燒木材。關市的刀匠與刃物師傅需要松炭供應鍛冶爐；自十六世紀末美濃燒興盛以來，東濃的陶工以劈開的赤松燒窯，因為赤松燃燒得久而熾熱；在夏夜的長良川上，鸕鶿漁師至今仍在船首懸掛燃燒松木的鐵籃，把香魚引向鸕鶿。在飛驒山區，山毛櫸——後來成為飛驒曲木椅的原料——數百年來被認為主要只適合燒炭與做木屐（見<a href=\"furniture.html\">飛驒家具</a>）。每一種用途都形塑了周遭的森林：赤松在落葉被耙光、土壤貧瘠的山坡上繁茂生長，而炭林中的枹櫟則從來不被允許長老。" } }
      ] },
    { t:"section",
      id:"charcoal",
      title:{ en:"White charcoal and black", ja:"白炭と黒炭", zh:"白炭與黑炭" },
      jp:"炭焼き",
      body:[
        { t:"p",
          text:{
            en:"Charcoal is what is left when wood is heated with too little air to burn: water and volatile compounds are driven off, and a light, porous skeleton of carbon remains that burns hot, clean and almost without flame. A Japanese charcoal kiln is a low dome of clay and stone, built into a slope, with a firebox at the front and a flue at the back. The kiln is packed with billets of oak, stood on end; a fire at the mouth heats the charge until it begins to carbonise on its own, and the maker then controls the process for days by narrowing the air inlet and watching the colour and smell of the smoke. What happens at the end divides Japanese charcoal into two kinds.",
            ja:"炭とは、木を燃えるには足りない空気のなかで熱したときに残るものである。水分と揮発成分が追い出され、軽く多孔質な炭素の骨組みが残り、それは高温で、清く、ほとんど炎を上げずに燃える。日本の炭窯は、斜面に築かれた粘土と石の低いドームで、前に焚き口、奥に煙道がある。窯にはナラの材を立てて詰め、口で焚いた火で中の材を熱し、やがてそれが自ら炭化しはじめる。炭焼きはそれから何日も、空気の入り口をしぼり、煙の色と匂いを見ながら進みぐあいを調える。最後に何をするかによって、日本の炭は二つに分かれる。",
            zh:"木炭是木材在空氣不足以燃燒的情況下受熱後留下的東西：水分與揮發性物質被驅出，剩下輕而多孔的碳骨架，燃燒時溫度高、潔淨、幾乎沒有火焰。日本的炭窯是一座以黏土與石塊築成、依坡而建的低矮圓頂，前方有燒口，後方有煙道。窯內直立塞滿橡木段材；在窯口生火加熱，直到窯內木材開始自行碳化，之後燒炭人花上數天時間，一邊縮小進氣口，一邊觀察煙的顏色與氣味來控制過程。最後一步怎麼做，把日本木炭分成兩種。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"White charcoal", ja:"白炭", zh:"白炭" },
              jp:"しろずみ",
              text:{
                en:"At the end of the burn the maker opens the kiln to let air in, raising the temperature to around 1,000 °C, then rakes the glowing charcoal out and smothers it with a damp mixture of sand, earth and ash. The ash-dusted surface gives the name. The result is very hard, rings like metal when struck, is slow to light and burns long and steadily. <em>Binchōtan</em>, made from ubame oak in Wakayama, is the best-known white charcoal.",
                ja:"焼きの終わりに窯を開けて空気を入れ、温度を千度前後まで上げてから、赤く燃える炭をかき出し、砂と土と灰を湿らせて混ぜた消し粉をかけて消す。灰をまぶした表面が名の由来である。できた炭はとても硬く、打つと金属のように鳴り、火がつきにくく、長く安定して燃える。和歌山のウバメガシでつくる備長炭が最もよく知られた白炭である。",
                zh:"燒製結束時，燒炭人打開窯讓空氣進入，把溫度提高到約 1,000 °C，再把通紅的木炭耙出，以沙、土與灰調成的濕粉覆蓋熄滅。表面沾滿灰白，因而得名。成品極硬，敲擊時發出金屬般的聲響，不易點燃，燃燒時間長而穩定。以和歌山的烏岡櫟燒成的「備長炭」是最著名的白炭。" } },
            { title:{ en:"Black charcoal", ja:"黒炭", zh:"黑炭" },
              jp:"くろずみ",
              text:{
                en:"At the end of the burn the maker seals every opening and lets the kiln cool for several days, so that carbonisation ends at a lower temperature, roughly 400–700 °C. The charcoal comes out black and glossy, softer and lighter, easy to light and quick to give heat — the ordinary charcoal of braziers, tea ceremonies and barbecues. It is made in every prefecture of Japan; Iwate is the largest producer.",
                ja:"焼きの終わりに窯の口をすべてふさぎ、数日かけて冷ますので、炭化はより低い温度、おおよそ四百〜七百度で終わる。出てくる炭は黒くつやがあり、白炭よりやわらかく軽く、火つきがよく、すぐに熱を出す。火鉢や茶の湯やバーベキューに使うふつうの炭である。全都道府県でつくられ、岩手が最大の産地である。",
                zh:"燒製結束時，燒炭人封住所有開口，讓窯冷卻數天，使碳化在較低溫度——約 400–700 °C——結束。出窯的木炭烏黑光亮，比白炭軟而輕，容易點燃，很快就能發熱——是火缽、茶道與烤肉用的一般木炭。日本每個都道府縣都有生產，岩手縣是最大產地。" } }
          ] },
        { t:"p",
          text:{
            en:"The collapse came fast. According to a study of national charcoal statistics by Ogawa Sanshiro and Kono Kanako of Yamagata University, Japan produced 1.50 million tonnes of charcoal in 1960, the first year of their series; a forest research institute in Hokkaido put output at around two million tonnes a year in the years just before. By 1965 production had fallen to 593,000 tonnes, by 1970 to 178,000, and by 1980 to 35,000 tonnes — about one-fortieth of the 1960 figure. Kerosene heaters, propane cookers, electric <em>kotatsu</em> and city gas replaced the brazier and the hearth within about fifteen years. A small revival in the 1990s owed something to new uses and something to a change in the statistics, which from 1991 counted powdered charcoal; since then the decline has continued, to 16,769 tonnes in 2016.",
            ja:"崩壊は速かった。山形大学の Ogawa Sanshiro と Kono Kanako による全国の木炭統計の研究によれば、日本はその系列の最初の年である一九六〇年に百五十万トンの木炭を生産していた。北海道の森林研究機関は、その直前の数年の生産を年に約二百万トンとしている。生産は一九六五年に五十九万三千トン、一九七〇年に十七万八千トン、一九八〇年には三万五千トンと、一九六〇年の約四十分の一にまで落ちた。石油ストーブ、プロパンガスのこんろ、電気炬燵、都市ガスが、約十五年のうちに火鉢と囲炉裏にとってかわった。一九九〇年代の小さな回復は、新しい用途と、一九九一年から粉炭を数えるようになった統計の変更の両方によるもので、その後も減少は続き、二〇一六年には一万六千七百六十九トンとなった。",
            zh:"崩落來得很快。根據山形大學 Ogawa Sanshiro 與 Kono Kanako 對全國木炭統計的研究，日本在 1960 年——他們資料序列的第一年——生產了 150 萬公噸木炭；北海道一所森林研究機構則指出，在那之前幾年的產量約為每年 200 萬公噸。到 1965 年，產量降至 59.3 萬公噸，1970 年降至 17.8 萬公噸，1980 年更只剩 3.5 萬公噸——約為 1960 年的四十分之一。煤油暖爐、桶裝瓦斯爐、電暖桌與都市瓦斯，在約十五年內取代了火缽與地爐。1990 年代的小幅回升，部分來自新用途，部分則因統計自 1991 年起納入粉炭；此後產量持續下滑，2016 年降至 16,769 公噸。" } },
        { t:"figure",
          caption:{
            en:"National charcoal production in Japan, 1960–2016, in thousand tonnes. From 1991 the figures include powdered charcoal; from 1997 they exclude bamboo charcoal. Source: Ogawa S. and Kono K., Bulletin of Yamagata University (Agricultural Science), 2019, table 3, compiled from the Forestry Agency's special forest products statistics.",
            ja:"日本の木炭生産量（一九六〇〜二〇一六年、千トン）。一九九一年から粉炭を含み、一九九七年から竹炭を除く。出典：Ogawa S.・Kono K.『山形大学紀要（農学）』（二〇一九年）表3（林野庁 特用林産物統計より作成）。",
            zh:"日本全國木炭產量，1960–2016 年，單位千公噸。1991 年起含粉炭，1997 年起不含竹炭。資料來源：Ogawa S.、Kono K.，《山形大學紀要（農學）》（2019 年）表 3，依林野廳特用林產物統計整理。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"The fall of charcoal", ja:"木炭の凋落", zh:"木炭的衰落" },
            unit:{ en:"thousand tonnes a year", ja:"千トン／年", zh:"千公噸／年" },
            x0:1960, x1:2016, y0:0, y1:1600, tick:400, xt:[1960, 1970, 1980, 1990, 2000, 2010, 2016], legendW:120,
            series:[
              { n:{ en:"Charcoal", ja:"木炭", zh:"木炭" }, pts:[[1960,1503.6],[1961,1264.3],[1962,1116.2],[1963,900.4],[1964,792.3],[1965,593.1],[1966,516.8],[1967,450.3],[1968,360.9],[1969,251.0],[1970,178.2],[1973,83.1],[1975,70.4],[1980,35.3],[1985,32.3],[1990,35.4],[1995,69.9],[2000,54.9],[2005,33.5],[2010,25.1],[2015,17.7],[2016,16.8]] }
            ],
            marks:[ { x:1991, t:{ en:"powdered charcoal counted from 1991", ja:"一九九一年から粉炭を含む", zh:"1991 年起計入粉炭" } } ],
            note:{ en:"1960: 1,503,592 t. 1970: 178,233 t. 1980: 35,298 t. 2016: 16,769 t.", ja:"一九六〇年 1,503,592t、一九七〇年 178,233t、一九八〇年 35,298t、二〇一六年 16,769t。", zh:"1960 年：1,503,592 公噸；1970 年：178,233 公噸；1980 年：35,298 公噸；2016 年：16,769 公噸。" } }); } },
        { t:"tiny",
          text:{
            en:"Sources: Ogawa Sanshiro and Kono Kanako, “Current status of charcoal producers and issues of forest resource management”, Bulletin of Yamagata University (Agricultural Science), 2019; Hokkaido Research Organization, forest products research institute, “Production and use of charcoal”.",
            ja:"出典：Ogawa Sanshiro・Kono Kanako「木炭生産者の現状と森林資源管理の課題」『山形大学紀要（農学）』（二〇一九年）、北海道立総合研究機構 林産試験場「木炭の生産と利用」。",
            zh:"資料來源：Ogawa Sanshiro、Kono Kanako〈木炭生產者的現況與森林資源管理課題〉，《山形大學紀要（農學）》（2019 年）；北海道立綜合研究機構林產試驗場〈木炭的生產與利用〉。" } }
      ] },
    { t:"section",
      id:"revolution",
      title:{ en:"After the fuel revolution", ja:"燃料革命のあと", zh:"燃料革命之後" },
      jp:"燃料革命",
      body:[
        { t:"p",
          text:{
            en:"Japanese historians call the change of the late 1950s and 1960s the <em>nenryō kakumei</em>, the fuel revolution. It was one of the fastest energy transitions anywhere: cheap imported oil, liquefied petroleum gas in cylinders that could be delivered to any village, and the spread of electricity to the remotest valleys made firewood and charcoal obsolete in a single generation. For households it meant freedom from the daily labour of splitting, carrying and tending fires, and from smoky kitchens. For the mountain villages of Hida and Mino it meant the loss of a cash income: charcoal had been the winter trade of farming families, carried down on backs and sledges and sold to the towns.",
            ja:"日本の歴史家は、一九五〇年代末から一九六〇年代にかけてのこの変化を「燃料革命」と呼ぶ。それは世界でも最も速いエネルギー転換の一つだった。安い輸入石油、どの村にも届けられるボンベ入りの液化石油ガス、そして最も奥の谷まで電気が届いたことで、薪と炭は一世代のうちに時代遅れになった。家々にとっては、毎日薪を割り、運び、火の番をする労働と、煙の立ちこめる台所からの解放を意味した。飛騨や美濃の山村にとっては、現金収入を失うことを意味した。炭は農家の冬の稼ぎであり、背負い、そりで下ろして町に売るものだったからである。",
            zh:"日本史學家把 1950 年代末至 1960 年代的這場變化稱為「燃料革命」。這是世界上最快速的能源轉型之一：廉價的進口石油、可送到任何村落的桶裝液化石油氣，以及電力延伸到最偏遠的山谷，讓柴薪與木炭在一個世代內就被淘汰。對家庭而言，這意味著從每天劈柴、搬運、照看爐火的勞動，以及煙霧瀰漫的廚房中解放出來。對飛驒與美濃的山村而言，這意味著失去現金收入：木炭原本是農家冬季的副業，靠人背、用雪橇拖下山，賣到城鎮。" } },
        { t:"p",
          text:{
            en:"The forests changed with the fuel. Coppice woods that had been cut every twenty years were left to grow; many were cleared and replanted with sugi and hinoki under the post-war expansion of plantations, and the rest became the dense, ageing oak and mixed broadleaf woods that now cover much of Gifu's lower hills. Large, old oaks are the favoured hosts of the ambrosia beetle that spreads Japanese oak wilt, first recorded in Gifu in 1996 in what is now Ibigawa; the spread of the disease is widely linked to the abandonment of the charcoal woods. The story is told from the forest's side on the <a href=\"satoyama.html\">Satoyama &amp; Water</a> page.",
            ja:"燃料とともに森も変わった。二十年ごとに伐られていた薪炭林は伸びるにまかされた。多くは戦後の拡大造林のもとで伐り払われてスギやヒノキに植え替えられ、残りは、いま岐阜の低い丘の多くを覆う、密で老いつつあるナラ類や広葉樹の林になった。大きく古いナラは、ナラ枯れを広げるカシノナガキクイムシが好む宿主である。ナラ枯れは岐阜では一九九六年、いまの揖斐川町で初めて記録され、その広がりは薪炭林の放置と広く結びつけて語られている。森の側から見たこの話は<a href=\"satoyama.html\">里山と水</a>の頁で述べる。",
            zh:"森林隨著燃料而改變。原本每二十年砍伐一次的薪炭林被放任生長；許多在戰後擴大造林政策下被砍除，改種柳杉與扁柏，其餘則成為如今覆蓋岐阜低丘陵大部分地區、茂密而逐漸老化的橡樹類與闊葉混生林。高大的老橡樹是傳播「橡樹枯萎病」的小蠹蟲偏好的寄主；這種病在岐阜最早於 1996 年在今日的揖斐川町記錄到，其擴散一般被認為與薪炭林遭棄置有關。從森林角度講述的這段故事，見<a href=\"satoyama.html\">里山與水</a>頁。" } },
        { t:"p",
          text:{
            en:"Charcoal making survives as a craft and a small business. The number of producers nationwide fell by about half in ten years, from 6,621 in 2006 to 3,430 in 2016. In 2016 white charcoal was made in 24 prefectures and totalled 3,126 tonnes; black charcoal was made in all 47 and totalled 7,248 tonnes. Most of the charcoal sold in Japan is now imported: in 2017 imports were about 125,000 tonnes, some 80% of them from China, Malaysia and Indonesia, against a domestic production that the Forestry Agency put at about 23,000 tonnes. Domestic charcoal competes on quality — for high-end grilling, the tea ceremony, and the long, even heat that <em>yakitori</em> and eel restaurants prize — and on new uses as a soil conditioner, a water-purification medium and a humidity regulator under house floors.",
            ja:"炭焼きは技として、また小さな生業として生き残っている。全国の生産者の数は十年でほぼ半分になり、二〇〇六年の六千六百二十一から二〇一六年には三千四百三十となった。二〇一六年、白炭は二十四の府県でつくられ計三千百二十六トン、黒炭は四十七都道府県すべてでつくられ計七千二百四十八トンだった。いま日本で売られる炭の大半は輸入品である。二〇一七年の輸入量は約十二万五千トンで、その約八割が中国、マレーシア、インドネシアからだった。一方、林野庁による国内生産は約二万三千トンである。国産の炭は品質で競う——高級な焼き物、茶の湯、焼き鳥屋や鰻屋が重んじる長く均一な火——とともに、土壌改良材、水の浄化材、床下の調湿材といった新しい用途でも競っている。",
            zh:"燒炭作為一門手藝與小本生意延續下來。全國生產者人數在十年間減少約一半，從 2006 年的 6,621 人降至 2016 年的 3,430 人。2016 年，白炭在 24 個府縣生產，共 3,126 公噸；黑炭在全部 47 個都道府縣生產，共 7,248 公噸。如今日本市面上的木炭大多是進口的：2017 年進口量約 12.5 萬公噸，其中約八成來自中國、馬來西亞與印尼；而林野廳統計的國內產量約為 2.3 萬公噸。國產木炭以品質競爭——高級燒烤、茶道，以及串燒店與鰻魚店看重的長時間均勻火力——也在新用途上競爭，例如土壤改良材、淨水材料與鋪在地板下的調濕材。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ogawa and Kono (2019), cited above; Forestry Agency, Annual Report on Forests and Forestry FY2018, special forest products; Gifu Prefecture, forest pest damage pages.",
            ja:"出典：Ogawa・Kono（二〇一九年、前掲）、林野庁『平成三十年度 森林及び林業の動向』特用林産物、岐阜県 森林病害虫のページ。",
            zh:"資料來源：Ogawa、Kono（2019 年，見前）；林野廳《平成 30 年度森林及林業動向》特用林產物；岐阜縣森林病蟲害頁面。" } }
      ] },
    { t:"section",
      id:"stoves",
      title:{ en:"Firewood, stoves and pellets today", ja:"いまの薪・ストーブ・ペレット", zh:"今日的柴薪、爐具與顆粒燃料" },
      jp:"薪ストーブ",
      body:[
        { t:"p",
          text:{
            en:"Firewood has become a lifestyle fuel. Wood-burning stoves have become popular in country houses and holiday homes, and wood-fired pizza and bread ovens have spread through the cities. National firewood production was about 52,000 cubic metres (in log equivalent) in 2017 and has hovered around 50,000 in recent years, after a sharp fall in 2012 caused largely by the effects of the Fukushima nuclear accident of 2011, which contaminated wood in parts of eastern Japan. The largest producers in 2017 were Nagano, Hokkaido and Kagoshima. Since 2013 the price recorded in the Forestry Agency's statistics has been ¥25,200 per stacked cubic metre — one reason why many stove owners cut and split their own, often from thinnings bought from forest owners or cooperatives.",
            ja:"薪は暮らしを楽しむための燃料になった。田舎の家や別荘では薪ストーブが好まれるようになり、都市では薪で焼くピザやパンの窯が広まった。全国の薪の生産量は二〇一七年に約五万二千立方メートル（丸太換算）で、ここ数年は五万前後で推移している。二〇一二年には、東日本の一部の木を汚染した二〇一一年の福島の原子力発電所事故の影響などで大きく落ちこんだ。二〇一七年の主な産地は長野、北海道、鹿児島だった。二〇一三年以降、林野庁の統計にある価格は層積一立方メートルあたり二万五千二百円で、薪ストーブの持ち主の多くが、山主や森林組合から買った間伐材などで自ら薪を割る理由の一つとなっている。",
            zh:"柴薪已成為一種生活風格的燃料。燒柴暖爐在鄉間住宅與度假屋中愈來愈受歡迎，燒柴的披薩窯與麵包窯也在城市中普及開來。全國柴薪產量在 2017 年約為 5.2 萬立方公尺（原木換算），近年維持在約 5 萬左右；2012 年曾大幅下降，主要是受 2011 年福島核電廠事故污染東日本部分地區木材的影響。2017 年的主要產地是長野、北海道與鹿兒島。自 2013 年起，林野廳統計中的價格為每層積立方公尺 25,200 日圓——這是許多暖爐主人自己劈柴的原因之一，他們常向山林所有人或森林組合購買疏伐材。" } },
        { t:"p",
          text:{
            en:"Wood pellets — sawdust and shavings dried, ground and pressed into small cylinders — are the tidier alternative: they flow like grain, feed automatically into a stove or boiler and burn with little smoke. Japan's pellet industry has grown mainly for heat in public buildings, hot-spring baths, greenhouses and swimming pools, where a boiler replaces kerosene. In 2023 the Forestry Agency counted 1,834 wood-fired boilers in use nationwide: 817 burning pellets, 759 burning wood waste such as offcuts and bark, and 154 burning firewood. In Takayama, Hida Takayama Green Heat has run a small 180 kW pellet-fuelled power plant since 2017. Domestic pellet production, however, remains small: of the 3.94 million tonnes of pellets used for energy in 2023, only about 120,000 tonnes were made in Japan.",
            ja:"木質ペレット——おが粉や削りくずを乾かし、砕き、小さな円柱に押し固めたもの——は、より扱いやすい選択肢である。穀物のように流れ、ストーブやボイラーに自動で送られ、煙も少ない。日本のペレット産業は、主に公共施設、温泉、ハウス栽培の温室、プールの熱源として、灯油にかわるボイラー用に育ってきた。二〇二三年、林野庁は全国で稼働する木質ボイラーを千八百三十四基と数えた。うちペレットを燃やすものが八百十七基、端材や樹皮などの木くずを燃やすものが七百五十九基、薪を燃やすものが百五十四基である。高山では飛騨高山グリーンヒートが二〇一七年から、ペレットを燃料とする出力百八十kWの小さな発電設備を運転している。しかし国内のペレット生産はまだ小さい。二〇二三年にエネルギーとして使われた三百九十四万トンのペレットのうち、国内でつくられたのは約十二万トンにすぎない。",
            zh:"木質顆粒——把鋸屑與刨花乾燥、粉碎後壓成的小圓柱——是較整潔的選擇：它像穀粒一樣流動，可自動送入暖爐或鍋爐，燃燒時煙很少。日本的顆粒燃料產業主要為公共建築、溫泉、溫室與游泳池的熱源而發展，以鍋爐取代煤油。2023 年，林野廳統計全國使用中的木質鍋爐共 1,834 座：燃燒顆粒者 817 座，燃燒邊材、樹皮等木屑者 759 座，燒柴者 154 座。在高山，「飛驒高山 Green Heat」自 2017 年起運轉一座以顆粒為燃料、180 kW 的小型發電設備。然而國內顆粒產量仍然很小：2023 年作為能源使用的 394 萬公噸顆粒中，僅約 12 萬公噸在日本生產。" } },
        { t:"defs",
          items:[
            { term:{ en:"Firewood", ja:"薪", zh:"柴薪" },
              jp:"まき",
              def:{
                en:"Split logs, best seasoned for a year or more to below about 20% moisture. Oak and other broadleaves burn long; sugi and pine light fast and burn hot but quickly.",
                ja:"割った丸太。一年以上乾かして含水率をおよそ二〇％以下にするのがよい。ナラなどの広葉樹は長く燃え、スギやマツは火つきが早く高温だが燃えつきるのも早い。",
                zh:"劈開的原木，最好風乾一年以上，使含水率降至約 20% 以下。橡木等闊葉樹燃燒持久；柳杉與松木容易點燃、火旺，但燒得也快。" } },
            { term:{ en:"Wood chips", ja:"木質チップ", zh:"木片" },
              jp:"チップ",
              def:{
                en:"Wood chipped by machine from thinnings, forest residues, sawmill offcuts or demolition timber. The main fuel of biomass power stations; wet chips need large boilers.",
                ja:"間伐材、林地残材、製材の端材、解体材などを機械で砕いたもの。バイオマス発電所の主な燃料で、湿ったチップには大きなボイラーが要る。",
                zh:"以機械將疏伐材、林地殘材、製材邊材或拆除木材切削而成。是生質發電廠的主要燃料；含水量高的木片需要大型鍋爐。" } },
            { term:{ en:"Pellets", ja:"ペレット", zh:"顆粒燃料" },
              jp:"木質ペレット",
              def:{
                en:"Dried, compressed sawdust. Uniform, dense and easy to store and transport — which also makes them easy to import in bulk.",
                ja:"乾かして圧縮したおが粉。均一で密度が高く、貯めやすく運びやすい——それは大量に輸入しやすいということでもある。",
                zh:"乾燥壓縮的鋸屑。均勻、密度高、易於儲存與運輸——這也意味著容易大量進口。" } },
            { term:{ en:"PKS", ja:"PKS（パーム椰子殻）", zh:"PKS（棕櫚仁殼）" },
              jp:"パームヤシ殻",
              def:{
                en:"Palm kernel shells, a by-product of palm-oil milling in Southeast Asia. Not wood, but burned alongside it in many Japanese biomass power stations.",
                ja:"東南アジアでパーム油を搾るときに出る殻。木ではないが、日本の多くのバイオマス発電所で木とともに燃やされている。",
                zh:"東南亞棕櫚油壓榨過程的副產品。雖然不是木材，但在日本許多生質發電廠中與木材一起燃燒。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Annual Report on Forests and Forestry FY2018 (firewood) and FY2024 (boilers, pellets); Japan Woody Bioenergy Association, presentation on woody biomass power in Gifu (2017).",
            ja:"出典：林野庁『平成三十年度 森林及び林業の動向』（薪）、『令和六年度 森林及び林業の動向』（ボイラー、ペレット）、日本木質バイオマスエネルギー協会「岐阜県における木質バイオマス発電所の稼働状況と燃料材の需給状況」（二〇一七年）。",
            zh:"資料來源：林野廳《平成 30 年度森林及林業動向》（柴薪）、《令和 6 年度森林及林業動向》（鍋爐、顆粒）；日本木質生質能源協會〈岐阜縣木質生質發電廠運轉狀況與燃料材供需〉（2017 年）。" } }
      ] },
    { t:"section",
      id:"power",
      title:{ en:"Wood-fired power: the feed-in tariff", ja:"木で電気をつくる：固定価格買取制度", zh:"以木發電：固定價格收購制度" },
      jp:"FIT",
      body:[
        { t:"p",
          text:{
            en:"The biggest change in the use of wood as fuel since the fuel revolution came from electricity policy. In July 2012, sixteen months after the Fukushima accident, Japan introduced a feed-in tariff (FIT) for renewable power: utilities had to buy electricity from approved plants at a fixed price for twenty years. For wood, the price depended on the fuel. Power from “unused” wood — thinnings and logging residues that would otherwise be left in the forest — was bought at ¥32 per kilowatt-hour, from “general” wood such as sawmill residues and imported fuels at ¥24, and from construction and demolition waste at ¥13; from the 2015 fiscal year small plants of under 2 MW burning unused wood received ¥40. The differentiated price was meant to pull wood out of Japan's neglected plantations. In 2022 a feed-in premium (FIP) system, under which generators sell on the market and receive a premium on top, was added for larger plants.",
            ja:"燃料革命以来、燃料としての木の使われ方を最も大きく変えたのは電力政策だった。福島の事故から十六か月後の二〇一二年七月、日本は再生可能エネルギーの固定価格買取制度（FIT）を導入した。電力会社は、認定を受けた発電所の電気を二十年間決まった価格で買い取らなければならない。木の場合、価格は燃料によって違った。森に残されるはずの間伐材や林地残材などの「未利用木材」による電気は一kWhあたり三十二円、製材端材や輸入燃料などの「一般木材」は二十四円、建設・解体廃材は十三円で買い取られ、二〇一五年度からは未利用木材を燃やす二千kW未満の小規模な発電所に四十円が適用された。価格に差をつけたのは、手入れの行き届かない日本の人工林から木を引き出すためだった。二〇二二年には、大きな発電所向けに、市場で電気を売ってそのうえにプレミアムを受けとるFIP制度も加わった。",
            zh:"自燃料革命以來，木材作為燃料的用途最大的轉變來自電力政策。2012 年 7 月，也就是福島事故十六個月後，日本實施再生能源固定價格收購制度（FIT）：電力公司必須以固定價格向獲認定的電廠收購電力，為期二十年。以木材而言，價格依燃料而異。以「未利用木材」——原本會被留在林地的疏伐材與伐採殘材——所發的電，每千瓦時收購價 32 日圓；以製材殘材、進口燃料等「一般木材」所發的電為 24 日圓；以營建與拆除廢材所發的電為 13 日圓；自 2015 年度起，燃燒未利用木材、未滿 2 MW 的小型電廠適用 40 日圓。差別定價的目的，是把木材從日本疏於管理的人工林中拉出來。2022 年又針對較大型電廠加入 FIP 制度：發電業者在市場上售電，另外領取溢價補貼。" } },
        { t:"p",
          text:{
            en:"The response was large. By September 2024 some 159 wood-fired plants held FIT or FIP approval — 57 of 2 MW or more and 102 smaller ones — with a combined capacity of 596,112 kW, enough by the Forestry Agency's estimate for about 1.31 million households. In 2023 Japan used 20.47 million cubic metres of wood as fuel, up 17.9% in a year: 11.32 million from domestic sources and 9.16 million imported. The figure below shows what the energy sector actually burned that year.",
            ja:"反応は大きかった。二〇二四年九月までに、FITまたはFIPの認定を受けた木質の発電所は約百五十九か所——二千kW以上が五十七、それ未満が百二——に達し、出力の合計は五十九万六千百十二kW、林野庁の試算では約百三十一万世帯分にあたる。二〇二三年に日本が燃料として使った木材は二千四十七万立方メートルで、一年で一七・九％増えた。うち千百三十二万が国内から、九百十六万が輸入である。下の図は、その年にエネルギー部門が実際に燃やしたものを示す。",
            zh:"反應相當熱烈。到 2024 年 9 月，取得 FIT 或 FIP 認定的木質發電廠約有 159 座——2 MW 以上者 57 座，較小者 102 座——總裝置容量 596,112 kW，依林野廳估算約可供 131 萬戶使用。2023 年，日本作為燃料使用的木材為 2,047 萬立方公尺，一年內增加 17.9%：其中 1,132 萬來自國內，916 萬為進口。下圖顯示該年能源部門實際燃燒的東西。" } },
        { t:"figure",
          caption:{
            en:"Woody biomass used for energy in Japan in 2023, by type, in thousand tonnes (chips in bone-dry tonnes). Palm kernel shells are not included. Source: Forestry Agency, Annual Report on Forests and Forestry FY2024, from the 2023 survey of woody biomass energy use.",
            ja:"二〇二三年に日本でエネルギーに使われた木質バイオマス（種類別、千トン。チップは絶乾トン）。パーム椰子殻は含まない。出典：林野庁『令和六年度 森林及び林業の動向』（二〇二三年 木質バイオマスエネルギー利用動向調査による）。",
            zh:"2023 年日本作為能源使用的木質生質燃料，依種類區分，單位千公噸（木片以絕乾公噸計）。不含棕櫚仁殼。資料來源：林野廳《令和 6 年度森林及林業動向》，依 2023 年木質生質能源利用動向調查。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"What was burned, 2023", ja:"何が燃やされたか（二〇二三年）", zh:"燒掉了什麼（2023 年）" }, labelW:300, rowH:28,
            unit:{ en:"thousand t", ja:"千トン", zh:"千公噸" },
            items:[
              { n:{ en:"Chips from thinnings and forest residues", ja:"チップ：間伐材・林地残材等", zh:"木片：疏伐材與林地殘材等" }, v:5010, lab:"5,010", f:"#E0E6DB" },
              { n:{ en:"Chips from construction and demolition wood", ja:"チップ：建設資材廃棄物", zh:"木片：營建與拆除廢材" }, v:3910, lab:"3,910", f:"#E6E4E0" },
              { n:{ en:"Imported pellets", ja:"輸入ペレット", zh:"進口顆粒" }, v:3820, lab:"3,820", f:"#EEE1DF" },
              { n:{ en:"Chips from sawmill residues", ja:"チップ：製材等残材", zh:"木片：製材殘材" }, v:1740, lab:"1,740", f:"#EDE5D2" },
              { n:{ en:"Imported chips", ja:"輸入チップ", zh:"進口木片" }, v:540, lab:"540", f:"#EEE1DF" },
              { n:{ en:"Wood flour and sawdust", ja:"木粉（おが粉）", zh:"木粉（鋸屑）" }, v:340, lab:"340", f:"#EDE5D2" },
              { n:{ en:"Domestic pellets", ja:"国産ペレット", zh:"國產顆粒" }, v:120, lab:"120", f:"#E0E6DB" },
              { n:{ en:"Firewood", ja:"薪", zh:"柴薪" }, v:40, lab:"40", f:"#E0E6DB" }
            ],
            note:{ en:"Green: from Japanese forests; sand: sawmill by-products; grey: waste wood; pink: imported.", ja:"緑：国内の森から、砂色：製材の副産物、灰色：廃材、桃色：輸入。", zh:"綠：來自日本森林；沙色：製材副產品；灰：廢材；粉紅：進口。" } }); } },
        { t:"p",
          text:{
            en:"Gifu's largest wood-fired power station is Gifu Biomass Power at Mizuho, on the plain west of Gifu city, a subsidiary of the textile-dyeing company Gisen. Its first unit, which began operating in December 2014, has a gross output of 6,250 kW (5,200 kW sent out), enough for about 11,000 households, and burns about 90,000 cubic metres of wood a year. It was designed around the prefecture's forest roads and cooperatives: a large part of its fuel comes from logs of low grade collected through Gifu's forestry network, and the share of “unused” wood in its fuel rose from about half to about two-thirds in its first years. A second unit, with a fluidised-bed boiler ordered from Takuma, was built alongside. Older and smaller plants burn other streams: Kawabe Biomass Power (4,300 kW, 2007) runs mainly on demolition wood, and a 600 kW plant opened in 2004 burns sawmill residues.",
            ja:"岐阜で最大の木質発電所は、岐阜市の西の平野にある瑞穂市の岐阜バイオマスパワーで、染色加工の会社岐センの子会社である。二〇一四年十二月に運転を始めた一号機は、発電端出力六千二百五十kW（送電端五千二百kW）で約一万一千世帯分にあたり、年に約九万立方メートルの木を燃やす。県の林道網と森林組合を前提に計画され、燃料の大きな部分は県の林業の流通網を通じて集められる低質の丸太で、燃料に占める「未利用木材」の割合は、最初の数年で約半分から約三分の二に上がった。タクマに流動層ボイラーを発注した二号機が隣に建てられた。より古く小さな発電所は別の流れを燃やしている。川辺バイオマス発電（四千三百kW、二〇〇七年）は主に解体材で、二〇〇四年に動きだした六百kWの発電所は製材の端材を燃やす。",
            zh:"岐阜最大的木質發電廠是位於岐阜市西側平原、瑞穗市的「岐阜 Biomass Power」，為染整公司岐セン的子公司。其一號機於 2014 年 12 月開始運轉，總輸出功率 6,250 kW（送電端 5,200 kW），約可供 11,000 戶使用，每年燃燒約 9 萬立方公尺木材。它以縣內的林道網與森林組合為前提規劃：燃料很大一部分是透過岐阜林業流通網收集的低品級原木，燃料中「未利用木材」的比例在最初幾年從約一半升至約三分之二。二號機採用向田熊（Takuma）訂購的流體化床鍋爐，建於一號機旁。較老、較小的電廠則燃燒其他來源：川邊 Biomass 發電（4,300 kW，2007 年）主要燒拆除廢材，2004 年啟用的一座 600 kW 電廠則燃燒製材殘材。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Annual Report on Forests and Forestry FY2024, woody biomass section; Japan Woody Bioenergy Association, “Operating status of woody biomass power plants in Gifu prefecture and supply and demand of fuel wood” (2017); New Energy News, on the second unit at Mizuho; Gisen, company information.",
            ja:"出典：林野庁『令和六年度 森林及び林業の動向』木質バイオマス、日本木質バイオマスエネルギー協会「岐阜県における木質バイオマス発電所の稼働状況と燃料材の需給状況」（二〇一七年）、新エネルギー新聞（瑞穂市の二号機）、岐セン 会社情報。",
            zh:"資料來源：林野廳《令和 6 年度森林及林業動向》木質生質能源；日本木質生質能源協會〈岐阜縣木質生質發電廠運轉狀況與燃料材供需〉（2017 年）；《新能源新聞》（瑞穗市二號機）；岐セン公司資訊。" } }
      ] },
    { t:"section",
      id:"arguments",
      title:{ en:"Arguments over the fire", ja:"火をめぐる議論", zh:"圍繞著火的爭論" },
      jp:"論点",
      body:[
        { t:"p",
          text:{
            en:"The tariff did what it was designed to do — create demand for low-grade wood — and in doing so raised questions that are still open. The first is imports. Because the “general wood” price applied to imported fuel, many of the large plants built along the coast after 2012 were designed from the start to burn imported pellets and palm kernel shells delivered by ship. According to the Biomass Industrial Society Network, Japan imported 5.81 million tonnes of wood pellets and 5.87 million tonnes of PKS in 2023, and 6.38 million and 6.00 million tonnes respectively in 2024; pellets from Indonesia rose from 38,000 tonnes in 2021 to 315,000 tonnes in 2024. Environmental groups argue that some of this fuel comes from the clearing of tropical forests, and that shipping it halfway round the world undermines its climate benefit. The government has responded by tightening the sustainability and life-cycle greenhouse-gas requirements for approved fuels.",
            ja:"この制度は、低質材の需要をつくるという目的を果たした。そしてそのことで、いまも答えの出ない問いを生んだ。一つめは輸入である。「一般木材」の価格は輸入燃料にも適用されたため、二〇一二年以降に沿岸に建てられた大きな発電所の多くは、はじめから船で運ばれる輸入ペレットやパーム椰子殻を燃やすように設計された。バイオマス産業社会ネットワークによれば、日本は二〇二三年に木質ペレットを五百八十一万トン、PKSを五百八十七万トン輸入し、二〇二四年にはそれぞれ六百三十八万トンと六百万トンを輸入した。インドネシアからのペレットは二〇二一年の三万八千トンから二〇二四年の三十一万五千トンに増えた。環境団体は、その一部が熱帯林の伐採から来ていること、地球を半周して運ぶことで気候への効用が損なわれることを指摘している。政府は認定燃料の持続可能性とライフサイクルの温室効果ガスの基準を厳しくすることで応えてきた。",
            zh:"這項制度達成了設計目的——為低品級木材創造需求——同時也帶出至今仍未解決的問題。第一是進口。由於「一般木材」價格也適用於進口燃料，2012 年以後沿海興建的許多大型電廠，從一開始就設計成燃燒以船運來的進口顆粒與棕櫚仁殼。根據生質產業社會網絡（NPO）的資料，日本在 2023 年進口木質顆粒 581 萬公噸、PKS 587 萬公噸，2024 年則分別為 638 萬與 600 萬公噸；來自印尼的顆粒從 2021 年的 3.8 萬公噸增至 2024 年的 31.5 萬公噸。環保團體指出，其中部分燃料來自熱帶森林的砍伐，而且繞行半個地球運送，削弱了其氣候效益。政府的回應是收緊認定燃料的永續性與生命週期溫室氣體要求。" } },
        { t:"p",
          text:{
            en:"The second question is what fuel demand does to domestic forestry. In Gifu about three-tenths of the logs produced in 2021 were low-grade material destined for fuel and chips. For forest owners and cooperatives the power stations provide a guaranteed outlet for crooked, rotten or small logs that once had no market, and they have helped pay for thinning. But the 2017 review of Gifu's plants warned that the prefecture's fuel-wood supply was already contested by plants in neighbouring prefectures, and that growth driven mainly by biomass demand could push timber prices down rather than up. Critics add that when clear-felling is paid for by the fuel price, good logs can end up in the chipper. Supporters reply that without the power stations much of the thinning would simply not be done.",
            ja:"二つめの問いは、燃料の需要が国内の林業に何をもたらすかである。岐阜では二〇二一年に生産された丸太の約三割が、燃料やチップに向かう低質材だった。山主や森林組合にとって発電所は、かつて売り先のなかった曲がった丸太、腐れのある丸太、細い丸太の確かな出口であり、間伐の費用を支える助けになってきた。しかし二〇一七年の岐阜の発電所についての報告は、県の燃料材がすでに隣県の発電所との取りあいになっていること、バイオマスの需要を中心とする増加はかえって木材価格を下げかねないことを警告した。批判する人はさらに、皆伐が燃料の価格でまかなわれると、良い丸太までチッパーに入ることがあると言う。支持する人は、発電所がなければ間伐の多くはそもそも行われないと応じる。",
            zh:"第二個問題是燃料需求對國內林業造成什麼影響。在岐阜，2021 年生產的原木約有三成是送往燃料與木片用途的低品級材。對山林所有人與森林組合而言，電廠為過去毫無市場的彎曲、腐朽或細小原木提供了穩定出路，也幫忙支付了疏伐成本。然而 2017 年一份關於岐阜電廠的報告警告：縣內的燃料材已遭鄰縣電廠爭奪，而主要由生質需求帶動的增長，反而可能壓低木材價格。批評者還指出，當皆伐的費用由燃料價格支撐時，好的原木也可能被送進削片機。支持者則回應：若沒有這些電廠，許多疏伐根本不會進行。" } },
        { t:"p",
          text:{
            en:"The third question is efficiency and carbon. A power-only plant turns only a modest fraction of the energy in its fuel into electricity; most of the rest leaves as low-grade heat, whereas a boiler heating a bath-house, a greenhouse or a sawmill kiln can use most of it. Many foresters therefore argue that Japan's wood fuel would do more good in small heat and combined heat-and-power plants close to the forest than in large power stations. And burning wood releases its carbon at once; it is balanced only as the forest regrows, over decades — the reasoning is set out on <a href=\"carbon.html\">Forests &amp; Carbon</a>. The fuller argument, with the other open questions of Gifu's forests, is gathered in <a href=\"debates.html\">Where People Disagree</a>.",
            ja:"三つめの問いは効率と炭素である。発電だけを行う発電所は、燃料のエネルギーのうち控えめな割合しか電気に変えられず、残りの大部分は低温の熱として逃げていく。一方、浴場や温室や製材所の乾燥機を温めるボイラーは、その大部分を使える。そのため多くの林業関係者は、日本の木質燃料は大きな発電所よりも、森の近くの小さな熱利用や熱電併給の設備で使うほうが役に立つと主張する。そして木を燃やせば、その炭素はすぐに放出される。それが釣りあうのは森が何十年もかけて育ちなおすときだけである。その理屈は<a href=\"carbon.html\">森と炭素</a>で述べた。岐阜の森のほかの未解決の問いとともに、議論の全体は<a href=\"debates.html\">論の分かれるところ</a>にまとめる。",
            zh:"第三個問題是效率與碳。僅發電的電廠只能把燃料能量中不大的一部分轉為電力，其餘大多以低溫熱能散失；相對地，為澡堂、溫室或製材廠乾燥窯供熱的鍋爐，能利用其中大部分。因此許多林業人士主張，日本的木質燃料用在森林附近的小型供熱與熱電聯產設施，會比用在大型電廠更有益。此外，燒木材會立即釋放其中的碳；只有在森林花數十年重新長成時才得以平衡——其道理見<a href=\"carbon.html\">森林與碳</a>。更完整的論證，連同岐阜森林的其他懸而未決的問題，彙整於<a href=\"debates.html\">意見分歧之處</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Biomass Industrial Society Network, Biomass White Paper 2025, “Problems of imported biomass”; Nikkei, August 2024, on PKS imports; Gifu Prefecture, state of forestry and the timber industry (log production by grade, 2021); Japan Woody Bioenergy Association (2017), cited above.",
            ja:"出典：バイオマス産業社会ネットワーク『バイオマス白書2025』トピックス「輸入バイオマスの問題」、日本経済新聞（二〇二四年八月）PKS輸入、岐阜県「岐阜県の林業・木材産業の現状」（二〇二一年の用途別素材生産）、日本木質バイオマスエネルギー協会（二〇一七年、前掲）。",
            zh:"資料來源：生質產業社會網絡《生質白皮書 2025》〈進口生質燃料的問題〉；《日本經濟新聞》（2024 年 8 月）PKS 進口報導；岐阜縣〈岐阜縣林業與木材產業現況〉（2021 年依用途之原木生產）；日本木質生質能源協會（2017 年，見前）。" } }
      ] },
    { t:"section",
      id:"residues",
      title:{ en:"Nothing wasted: residues and bark", ja:"むだにしない：端材と樹皮", zh:"物盡其用：殘材與樹皮" },
      jp:"カスケード利用",
      body:[
        { t:"p",
          text:{
            en:"Between the forest and the power station stands the sawmill, and much of the wood burned in Gifu has already been used once. Sawing a round log into square posts and boards leaves slabs, edgings, offcuts, sawdust and shavings; peeling and debarking leave bark. Gifu's 169 sawmills — the largest number of any prefecture — produce these by-products every working day. Sawdust and shavings go to livestock bedding, mushroom beds and pellet plants; offcuts and edgings are chipped for paper and board mills or burned in the mill's own boiler to heat its drying kilns; bark, long a disposal problem, now goes to biomass boilers, compost and garden mulch. The principle that foresters call <em>cascade use</em> — timber first, then boards and paper, and fire only at the end — is the ideal; the feed-in tariff sometimes reverses the order by paying more for fuel than a small mill can get for its offcuts elsewhere.",
            ja:"森と発電所のあいだには製材所があり、岐阜で燃やされる木の多くはすでに一度使われたものである。丸太を柱や板に挽くと、背板、耳、端材、おが粉、かんなくずが出る。皮をむけば樹皮が出る。全国で最も多い岐阜の百六十九の製材所は、稼働する日ごとにこうした副産物を生む。おが粉やかんなくずは家畜の敷料、きのこの培地、ペレット工場へ、端材や耳はチップにされて製紙やボードの工場へ行くか、製材所自身のボイラーで燃やされて乾燥機を温める。長く処分に困るものだった樹皮は、いまはバイオマスボイラー、堆肥、庭の敷き材になる。林業家が「カスケード利用」と呼ぶ原則——まず材として、次に板や紙として、火は最後に——が理想である。固定価格買取制度は、小さな製材所が端材をほかで売るより高い値を燃料に払うことで、ときにその順序を逆にしてしまう。",
            zh:"森林與電廠之間是製材廠，在岐阜燃燒的木材很多已經被用過一次。把圓木鋸成方柱與板材，會留下背板、邊條、端材、鋸屑與刨花；剝皮則產生樹皮。岐阜的 169 家製材廠——數量為全國各縣之冠——每個工作日都在產生這些副產品。鋸屑與刨花用於家畜墊料、菇類培養基與顆粒工廠；端材與邊條切成木片送往造紙與板材工廠，或在製材廠自己的鍋爐中燃燒，為乾燥窯供熱；長期以來難以處理的樹皮，如今進入生質鍋爐、堆肥與庭園覆蓋材。林業人士所說的「階梯式利用」原則——先作為木材，再作為板材與紙，最後才進火——才是理想；而固定價格收購制度有時反而顛倒這個順序，因為它為燃料支付的價格，高於小型製材廠把端材賣到其他地方所能得到的。" } },
        { t:"p",
          text:{
            en:"The fire, in other words, has come full circle. For a thousand years the forests of Gifu were cut mainly to be burned, and timber for building was the precious exception. For forty years after the fuel revolution almost nothing was burned, and the plantations grew thick with wood no one wanted. Now fuel is again one of the largest single uses of Gifu's harvest. Whether it becomes the servant of good forestry — the last use of wood that has done everything else it can — or its master is the question on which much of the prefecture's forest future depends. See <a href=\"sawmill.html\">Sawmilling</a> for the mill, and <a href=\"forests.html\">Gifu's Forests</a> for the harvest.",
            ja:"つまり、火はひとめぐりしたのである。千年のあいだ、岐阜の森は主に燃やすために伐られ、建築のための材は貴重な例外だった。燃料革命のあとの四十年、ほとんど何も燃やされず、人工林は誰も欲しがらない木で混みあった。いま燃料は、ふたたび岐阜の伐採の最も大きな使い道の一つになっている。それがよい林業の従者——ほかにできることをすべて終えた木の最後の使い道——となるのか、それとも主人となるのか。県の森の将来の多くは、その問いにかかっている。製材所については<a href=\"sawmill.html\">製材</a>、伐採については<a href=\"forests.html\">岐阜の森林</a>を参照。",
            zh:"換句話說，火已經繞了一整圈。一千年來，岐阜的森林主要是為了燃燒而砍伐，建築用材反而是珍貴的例外。燃料革命後的四十年間，幾乎什麼都不燒，人工林裡長滿了沒人要的木材。如今燃料再度成為岐阜伐採量最大的單一用途之一。它將成為良好林業的僕人——做完其他一切用途之後木材的最後歸宿——還是它的主人？這個問題在很大程度上決定了該縣森林的未來。製材廠見<a href=\"sawmill.html\">製材</a>，伐採見<a href=\"forests.html\">岐阜的森林</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, “State of forestry and the timber industry in Gifu” (sawmill numbers, 2021).",
            ja:"出典：岐阜県「岐阜県の林業・木材産業の現状」（製材工場数、二〇二一年）。",
            zh:"資料來源：岐阜縣〈岐阜縣林業與木材產業現況〉（製材廠數，2021 年）。" } }
      ] },
    { t:"related",
      items:[
        { href:"satoyama.html",
          why:{ en:"The coppice woods that supplied firewood and charcoal.", ja:"薪と炭を出した薪炭林。", zh:"供應柴薪與木炭的薪炭林。" } },
        { href:"debates.html",
          why:{
            en:"Biomass power, imports and the price of fuel wood.",
            ja:"バイオマス発電、輸入燃料、燃料材の価格。",
            zh:"生質發電、進口燃料與燃料材價格。" } },
        { href:"sawmill.html",
          why:{ en:"Where sawdust, offcuts and bark come from.", ja:"おが粉、端材、樹皮の出どころ。", zh:"鋸屑、邊材與樹皮從何而來。" } },
        { href:"carbon.html",
          why:{
            en:"Why burning wood is not automatically carbon-neutral.",
            ja:"木を燃やすことがなぜ自動的にカーボンニュートラルではないのか。",
            zh:"為何燒木材並非自動碳中和。" } },
        { href:"forests.html",
          why:{ en:"How much of Gifu's harvest goes to fuel.", ja:"岐阜の伐採のうちどれだけが燃料になるか。", zh:"岐阜的伐採量中有多少成為燃料。" } }
      ] }
  ] };
