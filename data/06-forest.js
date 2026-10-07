/* =============================================================
   THE SPIRIT OF GIFU — The Forest
   15 pages. Each page is one GIFU.pages["key"] = {…}
   module; the order here is the order of the navigation
   (GIFU.NAV in assets/js/core.js).
   ============================================================= */

/* ---- ------------------------------------------- forests */
GIFU.pages["forests"] = { kicker:{ en:"The Forest · 01", ja:"森 · 01", zh:"森林 · 01" },
  title:{ en:"Gifu's Forests", ja:"岐阜の森林", zh:"岐阜的森林" },
  jp:"森林率八十一パーセント",
  lede:{
    en:"Gifu has about 862,000 hectares of forest — four-fifths of its land, the second-highest share of any prefecture in Japan. Less than half of it was planted; most of the rest is broadleaved woodland that has been cut and regrown for fuel and charcoal for centuries, and a smaller part is old natural forest high in the mountains. This page describes that forest as a whole: how much there is, what grows in it, who owns it, what the prefecture has decided it is for, and the arithmetic of growth and harvest that shapes everything else in this book.",
    ja:"岐阜にはおよそ八十六万二千ヘクタールの森林がある。県土の五分の四で、都道府県で二番目に高い割合である。植えられたものはその半分に満たない。残りの大半は、何世紀にもわたって燃料や炭のために伐られては再生してきた広葉樹の林であり、より小さな部分が山の高みの古い天然林である。この頁は森を全体として描く——どれだけあり、何が育ち、誰が持ち、県がそれを何のためと定め、そして本書のほかのすべてを形づくる生長と収穫の算術がどうなっているか。",
    zh:"岐阜擁有約 86.2 萬公頃森林——占全縣土地五分之四，比例居全日本第二。其中人工栽植的不到一半；其餘大多是數百年來為燃料與木炭反覆砍伐、再生的闊葉林，另有較小一部分是高山上的老齡天然林。本頁從整體描述這片森林：有多少、長些什麼、屬於誰、縣政府決定它作何用途，以及形塑本書其他一切內容的「生長與收穫」算術。" },
  body:[
    { t:"section",
      id:"numbers",
      title:{ en:"Four-fifths forest", ja:"五分の四が森", zh:"五分之四是森林" },
      jp:"森林資源の概要",
      body:[
        { t:"grid",
          cols:3,
          cells:[
            { k:{ en:"Forest area", ja:"森林面積", zh:"森林面積" },
              v:{ en:"862,000 ha", ja:"86.2万ha", zh:"86.2 萬公頃" },
              d:{ en:"Fifth largest in Japan.", ja:"全国五位。", zh:"全國第五。" } },
            { k:{ en:"Forest cover", ja:"森林率", zh:"森林覆蓋率" },
              v:{ en:"81%", ja:"81%", zh:"81%" },
              d:{
                en:"Second after Kōchi; national figure about 67%.",
                ja:"高知に次ぐ二位。全国はおよそ六十七パーセント。",
                zh:"僅次於高知；全國約 67%。" } },
            { k:{ en:"Planted forest", ja:"人工林", zh:"人工林" },
              v:{ en:"385,000 ha", ja:"38.5万ha", zh:"38.5 萬公頃" },
              d:{
                en:"About 45% of the forest; sixth largest planted area in Japan.",
                ja:"森林のおよそ四十五パーセント。人工林面積は全国六位。",
                zh:"約占森林 45%；人工林面積全國第六。" } },
            { k:{ en:"Private forest", ja:"民有林", zh:"私有林" },
              v:{ en:"684,000 ha", ja:"68.4万ha", zh:"68.4 萬公頃" },
              d:{
                en:"About four-fifths of all forest; fourth largest private forest in Japan.",
                ja:"全森林のおよそ五分の四。民有林面積は全国四位。",
                zh:"約占全部森林五分之四；私有林面積全國第四。" } },
            { k:{ en:"Planted growing stock", ja:"人工林蓄積", zh:"人工林蓄積量" },
              v:{ en:"≈ 100 million m³", ja:"約1億m³", zh:"約 1 億立方公尺" },
              d:{
                en:"FY2019: 100.57 million m³, of it hinoki 50.2 million, sugi 45.9 million.",
                ja:"令和元年度一億五十七万立方メートル。うちヒノキ五千二十三万、スギ四千五百九十二万。",
                zh:"2019 年度：1 億 57 萬立方公尺，其中扁柏 5,023 萬、柳杉 4,592 萬。" } },
            { k:{ en:"Annual growth", ja:"年間成長量", zh:"年生長量" },
              v:{ en:"1.48 million m³", ja:"148万m³", zh:"148 萬立方公尺" },
              d:{
                en:"FY2021, down from a peak of 2.04 million in FY2016 as the plantations age.",
                ja:"令和三年度。人工林の高齢化とともに、平成二十八年度の二百四万立方メートルから減った。",
                zh:"2021 年度；隨人工林老化，較 2016 年度高峰 204 萬立方公尺下降。" } }
          ] },
        { t:"p",
          text:{
            en:"The composition of the private forest is the key to understanding Gifu. By area, 26 per cent is planted hinoki and 16 per cent planted sugi — an unusual balance, since across Japan sugi plantations outnumber hinoki by a wide margin. About 43 per cent is broadleaved woodland, mostly deciduous, and the remainder is larch, pine, other conifers, bamboo and ground not currently stocked. The hinoki reflects both the soils and a long commercial preference: hinoki fetched roughly twice the price of sugi through most of the twentieth century, and the post-war planting drive leaned towards it wherever it would grow.",
            ja:"民有林の構成こそ、岐阜を理解する鍵である。面積で二十六パーセントがヒノキの人工林、十六パーセントがスギの人工林——全国ではスギの人工林がヒノキを大きく上回るから、珍しい均衡である。およそ四十三パーセントが広葉樹林で、多くは落葉樹。残りはカラマツ、マツ、そのほかの針葉樹、竹林、いまは立木のない土地である。ヒノキが多いのは土壌と、長い商業上の好みの両方を映している。二十世紀の大半を通じてヒノキはスギのおよそ倍の値で売れ、戦後の造林は育つところならヒノキへ傾いた。",
            zh:"私有林的組成，是理解岐阜的關鍵。以面積計，26% 是扁柏人工林、16% 是柳杉人工林——這是不尋常的比例，因為就全日本而言，柳杉人工林遠多於扁柏。約 43% 是闊葉林，多為落葉樹；其餘是落葉松、松、其他針葉樹、竹林，以及目前無立木的土地。扁柏之多，同時反映了土壤條件與長期的商業偏好：二十世紀大部分時間，扁柏售價約為柳杉的兩倍，戰後造林凡是扁柏能長的地方，都偏向種扁柏。" } },
        { t:"figure",
          caption:{
            en:"What grows in Gifu's private forest, by share of area. Planted hinoki outweighs planted sugi — the reverse of the national pattern. “Other” includes larch, pine, other conifers, bamboo and unstocked land. Source: Gifu Prefecture, status of forestry and the timber industry (figures for the early 2020s).",
            ja:"岐阜の民有林に何が育つか、面積の割合で。ヒノキ人工林がスギ人工林を上回る——全国の傾向の逆である。「その他」はカラマツ、マツ、ほかの針葉樹、竹林、未立木地を含む。出典：岐阜県「岐阜県の林業・木材産業の現状」（二〇二〇年代初めの数値）。",
            zh:"岐阜私有林中生長的樹種，依面積比例。扁柏人工林多於柳杉人工林——與全國趨勢相反。「其他」包括落葉松、松、其他針葉樹、竹林與無立木地。資料來源：岐阜縣〈岐阜縣林業與木材產業現況〉（2020 年代初數值）。" },
          svg:function(lang, L){
            var S = [
              { n:{en:"Broadleaf woodland",ja:"広葉樹林",zh:"闊葉林"}, v:43, f:"#E0E6DB" },
              { n:{en:"Planted hinoki",ja:"ヒノキ人工林",zh:"扁柏人工林"}, v:26, f:"#F0EDE4" },
              { n:{en:"Planted sugi",ja:"スギ人工林",zh:"柳杉人工林"}, v:16, f:"#EEE1DF" },
              { n:{en:"Other",ja:"その他",zh:"其他"}, v:15, f:"#E6E4E0" }
            ];
            var s = '<svg viewBox="0 0 760 200" role="img" aria-label="forest composition">';
            var x = 20, W = 720;
            for (var i=0;i<S.length;i++){
              var w = S[i].v/100*W;
              s += '<rect x="'+x+'" y="50" width="'+w+'" height="56" fill="'+S[i].f+'" stroke="#8B857C"/>';
              s += '<text x="'+(x+8)+'" y="84" font-family="Georgia,serif" font-size="20" fill="#201E1B">'+S[i].v+'%</text>';
              s += '<text x="'+(x+4)+'" y="128" font-family="system-ui,sans-serif" font-size="11" fill="#201E1B">'+L(S[i].n)+'</text>';
              x += w;
            }
            s += '<text x="20" y="34" font-family="Georgia,serif" font-size="13" letter-spacing="2" fill="#55504A">'+(lang==="en"?"PRIVATE FOREST BY AREA":(lang==="ja"?"民有林の面積構成":"私有林面積組成"))+'</text>';
            s += '<text x="20" y="170" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+(lang==="en"?"Nationally, sugi plantations are roughly 1.7 times the area of hinoki plantations.":(lang==="ja"?"全国では、スギ人工林の面積はヒノキ人工林のおよそ一・七倍。":"就全國而言，柳杉人工林面積約為扁柏人工林的 1.7 倍。"))+'</text>';
            s += '</svg>';
            return s;
          } }
      ] },
    { t:"section",
      id:"owners",
      title:{ en:"Who owns the forest", ja:"森は誰のものか", zh:"森林屬於誰" },
      jp:"所有構造",
      body:[
        { t:"p",
          text:{
            en:"About four-fifths of Gifu's forest is privately owned, and most of the rest belongs to the national government, managed by the Chūbu Regional Forest Office through three district offices in the prefecture — Hida (Takayama), Gifu (Gero) and Tōnō (Tsukechi). The national forests are concentrated in the high mountains and in Ura-Kiso — including the old imperial forests that supply the Ise timber. The private forest is divided among tens of thousands of owners, most of them holding a few hectares inherited from farming families who once used the woods for fuel, fodder and building timber and now live in cities. Many cannot say exactly where their boundaries run; some are no longer traceable at all.",
            ja:"岐阜の森林のおよそ五分の四は民有で、残りの大半は国有林であり、中部森林管理局が県内の三つの署——飛騨（高山）、岐阜（下呂）、東濃（付知）——を通じて管理する。国有林は高い山と裏木曽に集まる——伊勢の御用材を出す旧御料林もそこに含まれる。民有林は何万もの所有者に分かれ、その多くは、かつて森を燃料・飼料・建築材に使い、いまは都市に住む農家から相続した数ヘクタールをもつにすぎない。自分の境界がどこを通るのか正確に言えない所有者は多く、もはや辿れない所有者もいる。",
            zh:"岐阜約五分之四的森林為私人所有，其餘大多屬國家，由中部森林管理局透過縣內三個森林管理署——飛驒（高山）、岐阜（下呂）與東濃（付知）——管理。國有林集中在高山與裏木曾——包括供應伊勢御用材的舊御料林。私有林則分屬數以萬計的所有者，其中多數只持有數公頃，繼承自曾以森林取得燃料、飼料與建材、如今已移居城市的農家。許多人說不出自己山林的界線確切在哪；有些所有者已完全無從查找。" } },
        { t:"defs",
          items:[
            { term:{ en:"National forest", ja:"国有林", zh:"國有林" },
              jp:"国有林",
              def:{
                en:"Owned and managed directly by the Forestry Agency. In Gifu it includes most of the alpine and subalpine forest of the Hida mountains, Hakusan and Ontake, and the hinoki reserves of Ura-Kiso at Kashimo and Tsukechi. Harvesting is modest and much of the area is protected.",
                ja:"林野庁が直接所有し管理する森林。岐阜では飛騨山脈・白山・御嶽の高山帯と亜高山帯の森の大半と、加子母・付知の裏木曽の檜の備林を含む。伐採は控えめで、多くは保護されている。",
                zh:"由林野廳直接擁有與管理的森林。在岐阜，它涵蓋飛驒山脈、白山與御嶽大部分的高山與亞高山森林，以及加子母、付知一帶裏木曾的扁柏備林。伐採量不大，許多區域受到保護。" } },
            { term:{ en:"Private forest", ja:"民有林", zh:"私有林" },
              jp:"私有林・公有林",
              def:{
                en:"Everything not owned by the national government: forest owned by individuals, companies, shrines and temples, communal property associations, and — counted with them in the statistics — municipal and prefectural forest. Most planting, thinning and harvesting in Gifu happens here, usually carried out by a forest cooperative or a contractor on the owner's behalf.",
                ja:"国有でないすべての森林。個人・会社・社寺・財産区などの所有する森と、統計上それと一緒に数えられる市町村有林・県有林。岐阜の植林・間伐・伐採の大半はここで行われ、ふつうは森林組合や請負業者が所有者に代わって行う。",
                zh:"凡非國有者皆屬之：個人、公司、寺社、財產區所擁有的森林，以及在統計上一併計入的市町村有林與縣有林。岐阜大部分的造林、疏伐與伐採都在此進行，通常由森林組合或承包商代所有者執行。" } },
            { term:{ en:"Owners who cannot be found", ja:"所有者不明", zh:"所有者不明" },
              jp:"所有者不明森林",
              def:{
                en:"Where land has passed through several inheritances without the register being updated, the legal owners of a forest may number dozens and be impossible to trace. Nationally this is a large share of private forest. The Forest Management Act of 2019 lets municipalities take over the management of neglected forests, including where owners cannot be found, and pass it to capable operators. See <a href=\"policy.html\">Forest Law &amp; Policy</a>.",
                ja:"登記が更新されないまま何度も相続を経た土地では、森の法律上の所有者が何十人にもなり、辿れなくなる。全国では民有林の大きな割合がそうである。二〇一九年の森林経営管理法は、所有者がわからない場合を含め、放置された森の経営を市町村が引き受け、意欲ある事業者に委ねることを可能にした。<a href=\"policy.html\">森林の法と政策</a>を参照。",
                zh:"土地歷經數次繼承而登記未更新時，一片森林的法定所有者可能多達數十人，且無從追查。就全國而言，這占私有林相當大的比例。2019 年的《森林經營管理法》讓市町村可以接手被棄置森林的經營——包括所有者不明的情形——再交由有能力的業者執行。見<a href=\"policy.html\">森林法規與政策</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"zoning",
      title:{ en:"What the forest is for", ja:"森は何のためにあるか", zh:"森林為何而存在" },
      jp:"森林の区分",
      body:[
        { t:"p",
          text:{
            en:"Gifu's forest plan divides the private forest by purpose. The distinction matters because it decides where the prefecture will subsidise roads, machinery and clear-felling followed by replanting, and where it will instead pay for thinning towards mixed, long-lived forest. Only about a quarter of the private forest is designated for timber production; nearly two-thirds is assigned to environmental conservation — water, soil, slopes and biodiversity.",
            ja:"岐阜県の森林づくり基本計画は、民有林を目的別に区分する。この区分が重要なのは、県が林道や機械、皆伐と再造林に補助を出す場所と、そうではなく混交した長寿の森へ向けた間伐に費用を出す場所を、それが決めるからである。木材生産に指定されるのは民有林のおよそ四分の一にすぎず、三分の二近くは水・土・斜面・生物多様性のための環境保全に充てられる。",
            zh:"岐阜縣森林計畫依用途劃分私有林。這種劃分很重要，因為它決定縣政府在哪裡補助林道、機械以及「皆伐後補植」，又在哪裡改為出資疏伐、導向混生而長壽的森林。被指定為木材生產用途的私有林只占約四分之一；近三分之二則被劃為環境保全——守護水源、土壤、坡地與生物多樣性。" } },
        { t:"table",
          caption:{ en:"Zoning of Gifu's private forest (January 2022)", ja:"岐阜県民有林の区分（二〇二二年一月）", zh:"岐阜縣私有林劃分（2022 年 1 月）" },
          cols:[
            { en:"Zone", ja:"区分", zh:"區分" },
            { en:"Japanese", ja:"和名", zh:"日文" },
            { en:"Area (ha)", ja:"面積（ha）", zh:"面積（公頃）" },
            { en:"Management aim", ja:"経営の目標", zh:"經營目標" }
          ],
          jpCols:[1],
          numCols:[2],
          rows:[
            [
              { en:"Timber production", ja:"木材生産林", zh:"木材生產林" },
              "木材生産林",
              "205,242",
              {
                en:"Efficient harvesting on reachable, productive sites; clear-felling in patches followed by replanting; road and machinery investment.",
                ja:"到達しやすく生産力のある場所で効率よく伐る。小面積の皆伐と再造林。路網と機械への投資。",
                zh:"在可達且生產力高的林地高效伐採；小面積皆伐後補植；投資林道與機械。" }
            ],
            [
              { en:"Environmental conservation", ja:"環境保全林", zh:"環境保全林" },
              "環境保全林",
              "478,581",
              {
                en:"Thinning towards mixed conifer–broadleaf forest; protection of water, soil and slopes; minimal clear-felling.",
                ja:"針広混交林へ導く間伐。水・土・斜面の保全。皆伐は最小限。",
                zh:"疏伐導向針闊混交林；保護水源、土壤與坡地；盡量少皆伐。" }
            ],
            [
              { en:"Scenic and tourism", ja:"観光景観林", zh:"觀光景觀林" },
              "観光景観林",
              "53,010",
              {
                en:"Landscape along roads, rivers and tourist areas; flowering and autumn-colour species.",
                ja:"道路・川・観光地沿いの景観。花木や紅葉の樹種。",
                zh:"沿道路、河川與觀光區的景觀；開花與紅葉樹種。" }
            ],
            [
              { en:"Community protection", ja:"生活保全林", zh:"生活保全林" },
              "生活保全林",
              "20,906",
              {
                en:"Forest around settlements: hazard reduction, recreation, education.",
                ja:"集落周りの森。災害の軽減、憩い、学び。",
                zh:"聚落周邊森林：減災、休憩與教育。" }
            ]
          ] },
        { t:"note",
          label:{ en:"The hundred-year view", ja:"百年先の森", zh:"百年後的森林" },
          text:{
            en:"The prefecture describes its goal as a forest designed to be right a hundred years from now: production forests kept productive, and the rest steered, slowly, towards the mixed forests that would have grown there without planting. The present plan runs from fiscal 2022 to 2026 and targets about 9,600 hectares of thinning a year, log production of around 600,000 cubic metres, and a forestry workforce of 1,140.",
            ja:"県はその目標を、百年先に正しくあるよう設計された森と言い表す。生産林は生産力を保ち、それ以外は、植えなければそこに育っていたはずの混交林へ、ゆっくりと導く。現行の計画は二〇二二年度から二〇二六年度までで、年におよそ九千六百ヘクタールの間伐、約六十万立方メートルの素材生産、千百四十人の林業技術者を目標とする。",
            zh:"縣政府把目標描述為「為百年後而設計」的森林：生產林保持生產力，其餘則緩慢導向若未曾人工栽植便會自然長成的混交林。現行計畫期間為 2022 至 2026 年度，目標為每年疏伐約 9,600 公頃、原木產量約 60 萬立方公尺、林業從業者 1,140 人。" } }
      ] },
    { t:"section",
      id:"age",
      title:{ en:"A forest of one generation", ja:"一世代の森", zh:"同一世代的森林" },
      jp:"齢級構成",
      body:[
        { t:"p",
          text:{
            en:"Forestry statistics count the age of planted stands in five-year classes. In a forest managed for continuous harvest, the classes would be roughly even — as much young forest as old. Gifu's planted forest, like Japan's, is a single great wave: most of it was planted between the mid-1950s and the early 1970s, and in 2020 the largest class was 56–60 years old. Very little has been planted since, because very little has been felled. The practical consequences are that the forest is now, on paper, ready to harvest; that its growth rate is falling as the trees age; and that unless felling and replanting pick up, there will be almost no forest of harvestable age in forty years' time.",
            ja:"森林統計は人工林の林齢を五年刻みの齢級で数える。持続的に収穫する森なら齢級はおおむね均等になる——若い森と古い森が同じだけある。岐阜の人工林は、日本全体と同じく一つの大きな波である。大半は一九五〇年代半ばから一九七〇年代初めに植えられ、二〇二〇年に最も多い齢級は五十六〜六十年生だった。以後はほとんど植えられていない。ほとんど伐られていないからである。その帰結は、森がいま帳簿上は収穫の時期にあること、木の高齢化とともに生長の速さが落ちていること、そして伐採と再造林が増えなければ、四十年後には収穫できる齢の森がほとんどなくなることである。",
            zh:"林業統計以五年為一級計算人工林的林齡。一片以持續收穫為目標的森林，各齡級大致均勻——幼齡林與老齡林一樣多。岐阜的人工林與全日本一樣，是一道巨大的單一波峰：大多栽植於 1950 年代中期至 1970 年代初，2020 年最大的齡級是 56–60 年生。此後幾乎沒有新植，因為幾乎沒有伐採。其實際後果是：森林如今在帳面上已到收穫期；隨著樹木老化，生長速度正在下降；而若伐採與補植不增加，四十年後將幾乎沒有可收穫林齡的森林。" } },
        { t:"figure",
          caption:{
            en:"The shape of Gifu's planted forest by age class, schematically. A single wave planted in the post-war decades now stands at 50–65 years; the youngest classes are almost empty. A forest managed for steady harvest would look like the dashed line. Shape after the prefecture's 2020 age-class data; heights are qualitative.",
            ja:"岐阜の人工林の齢級構成の形（模式）。戦後の数十年に植えられた一つの波が、いま五十〜六十五年生にある。最も若い齢級はほとんど空である。持続的に収穫される森なら破線のようになる。形は県の二〇二〇年の齢級データによる。高さは定性的。",
            zh:"岐阜人工林齡級結構的示意。戰後數十年間栽植的單一波峰，如今處於 50–65 年生；最年輕的齡級幾乎是空的。以穩定收穫為目標的森林會像虛線那樣。形狀依縣 2020 年齡級資料；高度為定性。" },
          svg:function(lang, L){
            var h = [2,2,3,4,6,9,14,20,30,48,70,92,100,74,40,22,14,10,8];
            var s = '<svg viewBox="0 0 760 290" role="img" aria-label="age classes">';
            var x0=50, bw=34, y0=240;
            for (var i=0;i<h.length;i++){
              var bh = h[i]*1.8, x = x0 + i*bw;
              s += '<rect x="'+x+'" y="'+(y0-bh)+'" width="'+(bw-4)+'" height="'+bh+'" fill="'+(i>=10&&i<=13?"#EADCC1":"#F0EDE4")+'" stroke="#B4AC9C"/>';
              if (i%2===0) s += '<text x="'+(x+(bw-4)/2)+'" y="'+(y0+14)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#8B857C">'+(i*5+5)+'</text>';
            }
            s += '<line x1="'+x0+'" y1="'+(y0-40)+'" x2="'+(x0+bw*12)+'" y2="'+(y0-40)+'" stroke="#7C6B52" stroke-dasharray="5 4"/>';
            s += '<text x="'+(x0+4)+'" y="'+(y0-46)+'" font-family="system-ui,sans-serif" font-size="10" fill="#7C6B52">'+(lang==="en"?"even age structure (steady harvest)":(lang==="ja"?"均等な齢級（持続的な収穫）":"均勻齡級（穩定收穫）"))+'</text>';
            s += '<text x="'+(x0+bw*12)+'" y="42" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#201E1B">'+(lang==="en"?"56–60 years (2020)":(lang==="ja"?"五十六〜六十年生（二〇二〇年）":"56–60 年生（2020）"))+'</text>';
            s += '<text x="'+(x0+bw*9.5)+'" y="'+(y0+32)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+(lang==="en"?"stand age, years":(lang==="ja"?"林齢（年）":"林齡（年）"))+'</text>';
            s += '<text x="20" y="282" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?"Schematic; qualitative heights":(lang==="ja"?"模式図。高さは定性的":"示意圖；高度為定性"))+'</text>';
            s += '</svg>';
            return s;
          } }
      ] },
    { t:"section",
      id:"growth",
      title:{ en:"Growth and harvest", ja:"生長と収穫", zh:"生長與收穫" },
      jp:"成長量と素材生産量",
      body:[
        { t:"p",
          text:{
            en:"Each year Gifu's forests add more wood than is taken out of them. In fiscal 2021 the annual growth of the planted forest was about 1.48 million cubic metres, and log production from all forests about 576,000 — well under half. The harvest has risen steeply, by about 1.8 times in a decade, driven by subsidised thinning and by new demand for fuel chips from biomass power stations; about three-tenths of the logs now go to fuel. The growing stock is still rising, but more slowly, and the forest is ageing.",
            ja:"岐阜の森は毎年、取り出されるより多くの木を加えている。令和三年度、人工林の年間生長量はおよそ百四十八万立方メートル、全森林からの素材生産量はおよそ五十七万六千立方メートル——半分をかなり下回る。収穫は急増し、十年でおよそ一・八倍になった。補助による間伐と、木質バイオマス発電所の燃料チップという新しい需要がそれを押し上げ、いまや丸太のおよそ三割が燃料に向かう。蓄積はなお増えているが、その伸びは鈍り、森は老いつつある。",
            zh:"岐阜的森林每年新增的木材，多於被取走的量。2021 年度，人工林年生長量約 148 萬立方公尺，而所有森林的原木產量約 57.6 萬立方公尺——遠低於一半。收穫量急遽上升，十年間增加約 1.8 倍，推力來自補助疏伐，以及生質能發電廠對燃料木片的新需求；如今約三成的原木作為燃料。蓄積量仍在增加，但增速放緩，森林也在老化。" } },
        { t:"table",
          caption:{ en:"Log production in Gifu, recent years", ja:"岐阜県の素材生産量（近年）", zh:"岐阜縣原木產量（近年）" },
          cols:[
            { en:"Fiscal year", ja:"年度", zh:"年度" },
            { en:"Log production (thousand m³)", ja:"素材生産量（千m³）", zh:"原木產量（千立方公尺）" },
            { en:"Note", ja:"備考", zh:"備註" }
          ],
          numCols:[0, 1],
          rows:[
            ["2018", "569", { en:"including biomass fuel logs", ja:"バイオマス燃料用を含む", zh:"含生質燃料用材" }],
            ["2019", "573", ""],
            ["2020", "576", ""],
            [
              "2021",
              "576",
              {
                en:"about 1.8 × the level ten years earlier; ≈ 30% to fuel",
                ja:"十年前のおよそ一・八倍。約三割が燃料用",
                zh:"約為十年前的 1.8 倍；約三成作燃料" }
            ]
          ] },
        { t:"h3",
          text:{ en:"Why so much of the growth is left standing", ja:"なぜ生長の多くが立ったまま残されるのか", zh:"為何大部分生長量留在山上" } },
        { t:"p",
          text:{
            en:"The simple answer is money. The Forestry Agency's own model for a hectare of sugi puts the cost of establishing a plantation — site preparation, planting three thousand seedlings and five years of weeding — at about 1.84 million yen. Fifty years later the logs from that hectare sell for about 3.18 million yen, but after felling, extraction and haulage the owner receives, as the standing value of the timber, about 0.91 million. Replanting the hectare to begin again would cost twice that. Standing timber prices have fallen by about four-fifths since their peak in 1980: sugi from 22,707 yen per cubic metre to 4,127 in March 2024, hinoki from 42,947 to 8,940. Without subsidy, harvesting and replanting a small, steep private forest in Gifu does not pay, and most owners do nothing. The rest of this book returns to this problem often, because almost everything else — the state of the forests, the price of timber, the jobs in the mountains — follows from it.",
            ja:"単純な答えは金である。林野庁自身のスギ一ヘクタールのモデルは、造林——地拵え、三千本の苗の植栽、五年の下刈り——の費用をおよそ百八十四万円とする。五十年後、そのヘクタールの丸太はおよそ三百十八万円で売れるが、伐採・搬出・運搬ののちに所有者が立木の価値として受け取るのはおよそ九十一万円である。一からやり直すための再造林には、その倍がかかる。立木価格は一九八〇年の頂点からおよそ五分の四下がった——スギは一立方メートル二万二千七百七円から二〇二四年三月の四千百二十七円へ、ヒノキは四万二千九百四十七円から八千九百四十円へ。補助がなければ、岐阜の小さく急な民有林を伐って植え直すことは割に合わず、多くの所有者は何もしない。本書はこの問題にたびたび立ち返る。森の状態、材の値、山の仕事——ほかのほとんどすべてがここから出てくるからである。",
            zh:"簡單的答案是錢。林野廳自己的每公頃柳杉模型，把造林成本——整地、栽植三千株苗木、五年除草——估為約 184 萬日圓。五十年後，這一公頃的原木約可賣 318 萬日圓，但扣除伐採、集運與運輸後，所有者以立木價值取得的約只有 91 萬日圓；而要重新補植這一公頃，成本是它的兩倍。立木價格自 1980 年高峰以來下跌約五分之四：柳杉從每立方公尺 22,707 日圓跌到 2024 年 3 月的 4,127 日圓，扁柏從 42,947 日圓跌到 8,940 日圓。沒有補助，在岐阜伐採並補植一小片陡峭的私有林是划不來的，多數所有者因此什麼也不做。本書會一再回到這個問題，因為幾乎其他一切——森林的狀態、木材的價格、山區的工作——都由此而來。" } },
        { t:"figure",
          caption:{
            en:"A hectare of sugi over fifty years, in the Forestry Agency's model. Establishing the stand costs about 1.84 million yen; at harvest the logs fetch about 3.18 million, of which about 0.91 million reaches the owner after felling and transport. Replanting to start again costs twice what the owner receives. Source: Forestry Agency, Annual Report on Forest and Forestry, FY2020.",
            ja:"林野庁のモデルにみる五十年間のスギ一ヘクタール。造林におよそ百八十四万円。収穫時の丸太の売上はおよそ三百十八万円で、伐採と運搬ののち所有者に届くのはおよそ九十一万円。やり直すための再造林には、所有者の受け取りの倍がかかる。出典：林野庁『森林・林業白書』令和二年度。",
            zh:"依林野廳模型，一公頃柳杉的五十年。造林成本約 184 萬日圓；收穫時原木售得約 318 萬日圓，扣除伐採與運輸後，約 91 萬日圓到達所有者手中。重新補植的成本是所有者所得的兩倍。資料來源：林野廳《森林・林業白書》2020 年度。" },
          svg:function(lang, L){
            var B = [
              { n:{en:"Cost to establish",ja:"造林の費用",zh:"造林成本"}, v:184, f:"#EEE1DF" },
              { n:{en:"Log sales at 50 years",ja:"五十年後の丸太売上",zh:"50 年後原木銷售額"}, v:318, f:"#EDE5D2" },
              { n:{en:"Standing value to owner",ja:"所有者に届く立木価値",zh:"所有者所得立木價值"}, v:91, f:"#E0E6DB" }
            ];
            var s = '<svg viewBox="0 0 760 230" role="img" aria-label="hectare economics">';
            s += '<text x="20" y="26" font-family="Georgia,serif" font-size="13" letter-spacing="2" fill="#55504A">'+(lang==="en"?"ONE HECTARE OF SUGI · ten-thousand yen":(lang==="ja"?"スギ一ヘクタール　万円":"一公頃柳杉　萬日圓"))+'</text>';
            for (var i=0;i<B.length;i++){
              var y = 50 + i*52, w = B[i].v/340*520;
              s += '<text x="20" y="'+(y+22)+'" font-family="system-ui,sans-serif" font-size="11.5" fill="#201E1B">'+L(B[i].n)+'</text>';
              s += '<rect x="200" y="'+(y+4)+'" width="'+w+'" height="28" fill="'+B[i].f+'" stroke="#8B857C"/>';
              s += '<text x="'+(208+w)+'" y="'+(y+24)+'" font-family="Georgia,serif" font-size="15" fill="#201E1B">'+B[i].v+'</text>';
            }
            s += '<text x="20" y="214" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?"Felling, extraction and haulage absorb the difference between sales and standing value.":(lang==="ja"?"売上と立木価値の差は、伐採・搬出・運搬の費用に消える。":"銷售額與立木價值之間的差額，被伐採、集運與運輸成本吃掉。"))+'</text>';
            s += '</svg>';
            return s;
          } }
      ] },
    { t:"section",
      id:"regions",
      title:{ en:"The forests region by region", ja:"圏域ごとの森", zh:"各圈域的森林" },
      jp:"地域の特色",
      body:[
        { t:"table",
          caption:{ en:"Forest character by region", ja:"圏域ごとの森の性格", zh:"各圈域森林的特色" },
          cols:[
            { en:"Region", ja:"圏域", zh:"圈域" },
            { en:"Character", ja:"性格", zh:"特色" },
            { en:"What it supplies", ja:"供給するもの", zh:"供應什麼" }
          ],
          rows:[
            [
              { en:"Hida", ja:"飛騨", zh:"飛驒" },
              {
                en:"The largest and highest forests; natural broadleaf dominant (Hida city 68% broadleaf, Shirakawa village 88%); national forest on the high ranges.",
                ja:"最も広く高い森。天然広葉樹が優勢（飛騨市は広葉樹六十八パーセント、白川村は八十八パーセント）。高い山並みは国有林。",
                zh:"面積最大、海拔最高的森林；以天然闊葉林為主（飛驒市闊葉樹占 68%，白川村 88%）；高山山脈多為國有林。" },
              {
                en:"Furniture hardwoods, chips, some hinoki and larch; beech and oak for bentwood and joinery.",
                ja:"家具用の広葉樹材、チップ、いくらかのヒノキとカラマツ。曲木と指物のブナとナラ。",
                zh:"家具用闊葉材、木片，部分扁柏與落葉松；曲木與細木作用的山毛櫸與橡木。" }
            ],
            [
              { en:"Tōnō", ja:"東濃", zh:"東濃" },
              {
                en:"Hinoki country; Ura-Kiso national forest with old reserve stands; dense private plantations.",
                ja:"檜の国。旧備林を抱える裏木曽国有林。密な民有の人工林。",
                zh:"扁柏之鄉；擁有舊備林的裏木曾國有林；密集的私有人工林。" },
              {
                en:"Tōnō hinoki for building, shrines and baths; Ise timber.",
                ja:"建築・社寺・風呂の東濃ひのき。伊勢の御用材。",
                zh:"供建築、寺社與浴桶用的東濃檜木；伊勢御用材。" }
            ],
            [
              { en:"Chūnō", ja:"中濃", zh:"中濃" },
              {
                en:"Mixed sugi and hinoki plantations in the Nagara and Hida river basins; steep and wet.",
                ja:"長良川と飛騨川の流域に混じるスギとヒノキの人工林。急峻で雨が多い。",
                zh:"長良川與飛驒川流域中柳杉與扁柏混雜的人工林；陡峭多雨。" },
              { en:"Nagara sugi and hinoki for building; fuel chips.", ja:"建築用の長良杉とヒノキ。燃料チップ。", zh:"建築用長良杉與扁柏；燃料木片。" }
            ],
            [
              { en:"Gifu area", ja:"岐阜地域", zh:"岐阜地域" },
              {
                en:"Lower hills behind the plain; planted forest and secondary broadleaf.",
                ja:"平野の背後の低い山地。人工林と二次林の広葉樹。",
                zh:"平原背後的低丘；人工林與次生闊葉林。" },
              {
                en:"Building timber; biomass fuel for the Mizuho power station.",
                ja:"建築材。瑞穂の発電所向けのバイオマス燃料。",
                zh:"建築用材；供瑞穗發電廠的生質燃料。" }
            ],
            [
              { en:"Seinō", ja:"西濃", zh:"西濃" },
              {
                en:"The Ibi mountains: heavy rainfall, heavy snow, deep valleys, some of the prefecture's least accessible forest.",
                ja:"揖斐の山々。多雨・多雪・深い谷。県内で最も近づきがたい森の一部。",
                zh:"揖斐山地：多雨、多雪、谷深，是縣內最難進入的森林之一。" },
              { en:"Sugi and hinoki; broadleaf fuel.", ja:"スギとヒノキ。広葉樹の燃料材。", zh:"柳杉與扁柏；闊葉燃料材。" }
            ]
          ] }
      ] },
    { t:"related",
      items:[
        { href:"trees.html", why:{ en:"The species in the forest, one by one.", ja:"森の樹種を一つずつ。", zh:"森林中的樹種，逐一介紹。" } },
        { href:"silviculture.html",
          why:{ en:"How the planted forest is tended.", ja:"人工林はどう手入れされるか。", zh:"人工林如何撫育。" } },
        { href:"logging.html", why:{ en:"Turning growth into a harvest.", ja:"生長を収穫に変えること。", zh:"把生長轉化為收穫。" } },
        { href:"policy.html", why:{ en:"The laws and plans that govern it.", ja:"それを律する法と計画。", zh:"管理它的法規與計畫。" } }
      ] }
  ] };

/* ---- --------------------------------------------- trees */
GIFU.pages["trees"] = { kicker:{ en:"The Forest · 02", ja:"森 · 02", zh:"森林 · 02" },
  title:{ en:"The Trees", ja:"樹種", zh:"樹種" },
  jp:"針葉樹と広葉樹 · 四十種",
  lede:{
    en:"Gifu's altitude range gives it almost every tree species of central Japan, from evergreen oaks near the plain to dwarf pine above the tree line. Perhaps forty of them matter to the people who work wood. This page introduces them in two families — the conifers that build houses and shrines, and the broadleaves that make furniture, bowls and tools — with their Japanese and botanical names, where they grow in Gifu, how to recognise the wood, how heavy it is, and what it has traditionally been used for. The most important three, hinoki, sugi and the five protected trees of Kiso, have pages of their own.",
    ja:"岐阜は高低差のおかげで、平野近くの常緑のカシから森林限界の上のハイマツまで、中部日本のほとんどすべての樹種を抱える。木に携わる人にとって意味のあるものは四十種ほどだろう。この頁はそれを二つの系統で紹介する——家や社殿を建てる針葉樹と、家具・椀・道具をつくる広葉樹。和名と学名、岐阜のどこに育つか、材の見分け方、重さ、そして伝統的な用途を示す。最も重要な三つ、ヒノキ、スギ、そして木曽の五木には、それぞれ独立した頁がある。",
    zh:"岐阜的海拔跨度，讓它幾乎擁有日本中部所有樹種——從平原附近的常綠櫟類，到森林界線以上的偃松。對木作從業者有意義的大約有四十種。本頁以兩大類介紹它們——建造房屋與社殿的針葉樹，以及製作家具、碗與工具的闊葉樹——並列出日文名與學名、在岐阜的生長地、木材的辨識方式、重量，以及傳統用途。最重要的三者——扁柏、柳杉與木曾五木——另有專頁。" },
  body:[
    { t:"figure",
      caption:{
        en:"Air-dry density of twenty woods of Gifu, in grams per cubic centimetre — the single number that predicts most of a wood's behaviour: weight, hardness, strength, how it cuts and how it moves. Conifers in the upper group, broadleaves in the lower. Reference values from the Wood Industry Handbook, 4th edition (Forestry and Forest Products Research Institute).",
        ja:"岐阜の二十の木の気乾密度（グラム毎立方センチメートル）。重さ、硬さ、強さ、削れ方、狂い方——木の振る舞いの大半を予言する一つの数である。上が針葉樹、下が広葉樹。『木材工業ハンドブック 改訂4版』（森林総合研究所監修）の代表値。",
        zh:"岐阜二十種木材的氣乾密度（公克／立方公分）——這個數字能預測木材大部分的表現：重量、硬度、強度、切削手感與變形程度。上組為針葉樹，下組為闊葉樹。代表值取自《木材工業手冊》第 4 版（森林綜合研究所監修）。" },
      svg:function(lang, L){
        var C = [["sawara","サワラ","花柏",0.34],["nezuko","ネズコ","香柏",0.36],["sugi","スギ","柳杉",0.38],["kōyamaki","コウヤマキ","日本金松",0.42],["hinoki","ヒノキ","扁柏",0.44],["momi","モミ","日本冷杉",0.44],["asunaro","アスナロ","翌檜",0.45],["karamatsu","カラマツ","日本落葉松",0.50],["ichii","イチイ","紫杉",0.51],["akamatsu","アカマツ","赤松",0.52]];
        var B = [["kiri","キリ","泡桐",0.30],["hōnoki","ホオノキ","日本厚朴",0.49],["katsura","カツラ","連香樹",0.50],["tochi","トチノキ","七葉樹",0.52],["kuri","クリ","栗",0.60],["yamazakura","ヤマザクラ","山櫻",0.62],["buna","ブナ","山毛櫸",0.65],["itaya-kaede","イタヤカエデ","色木槭",0.65],["mizunara","ミズナラ","水楢",0.68],["keyaki","ケヤキ","櫸",0.69]];
        function nm(r){ return lang==="en"? r[0] : (lang==="ja"? r[1] : r[2]); }
        var s = '<svg viewBox="0 0 760 560" role="img" aria-label="densities">';
        var x0=150, sc=720;
        function grid(y1,y2){
          for (var g=0; g<=8; g++){ var gx=x0+g*0.1*sc*0.8; s += '<line x1="'+gx+'" y1="'+y1+'" x2="'+gx+'" y2="'+y2+'" stroke="#E1DCD2" stroke-width="'+(g%2?0.5:1)+'"/>'; if(g%2===0) s += '<text x="'+gx+'" y="'+(y2+14)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#8B857C">'+(g/10).toFixed(1)+'</text>'; }
        }
        function rows(arr,y0,fill){
          for (var i=0;i<arr.length;i++){
            var y = y0+i*23, w = arr[i][3]*sc*0.8;
            s += '<text x="'+(x0-8)+'" y="'+(y+13)+'" text-anchor="end" font-family="Georgia,serif" font-size="12" fill="#201E1B">'+nm(arr[i])+'</text>';
            s += '<rect x="'+x0+'" y="'+(y+2)+'" width="'+w+'" height="15" fill="'+fill+'" stroke="#B4AC9C"/>';
            s += '<text x="'+(x0+w+6)+'" y="'+(y+14)+'" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+arr[i][3].toFixed(2)+'</text>';
          }
        }
        s += '<text x="20" y="24" font-family="Georgia,serif" font-size="12.5" letter-spacing="2" fill="#55504A">'+(lang==="en"?"CONIFERS":(lang==="ja"?"針葉樹":"針葉樹"))+'</text>';
        grid(34,34+C.length*23); rows(C,34,"#E0E6DB");
        var y2 = 34+C.length*23+40;
        s += '<text x="20" y="'+(y2-10)+'" font-family="Georgia,serif" font-size="12.5" letter-spacing="2" fill="#55504A">'+(lang==="en"?"BROADLEAVES":(lang==="ja"?"広葉樹":"闊葉樹"))+'</text>';
        grid(y2,y2+B.length*23); rows(B,y2,"#EDE5D2");
        s += '</svg>';
        return s;
      } },
    { t:"section",
      id:"conifers",
      title:{ en:"Conifers", ja:"針葉樹", zh:"針葉樹" },
      jp:"建てる木",
      body:[
        { t:"p",
          text:{
            en:"Conifers make up nearly all of Japan's planted forest and almost all of its building timber. Their wood is simple in structure — more than nine-tenths of it long, hollow cells called tracheids — which makes it straight-grained, light, easy to split and plane, and predictable. The differences between them lie in density, in the colour and durability of the heartwood, and above all in scent.",
            ja:"針葉樹は日本の人工林のほとんどすべて、建築材のほとんどすべてを占める。その材は構造が単純で——九割以上が仮道管と呼ばれる長く中空の細胞——ゆえに木目がまっすぐで、軽く、割りやすく削りやすく、振る舞いが読める。樹種による違いは、密度、心材の色と耐久性、そしてなにより香りにある。",
            zh:"針葉樹幾乎構成了日本全部的人工林，也幾乎是全部的建築用材。其木材結構單純——九成以上是稱為「管胞」的細長中空細胞——因此紋理筆直、質輕、易劈易刨、表現可預測。樹種之間的差異，在於密度、心材的顏色與耐久性，以及最重要的：香氣。" } },
        { t:"table",
          caption:{ en:"The conifers of Gifu", ja:"岐阜の針葉樹", zh:"岐阜的針葉樹" },
          cols:[
            { en:"Tree", ja:"樹種", zh:"樹種" },
            { en:"Botanical name", ja:"学名", zh:"學名" },
            { en:"Where in Gifu", ja:"岐阜での分布", zh:"在岐阜的分布" },
            { en:"The wood and its uses", ja:"材と用途", zh:"木材與用途" }
          ],
          rows:[
            [
              { en:"Hinoki", ja:"ヒノキ", zh:"扁柏（檜木）" },
              "Chamaecyparis obtusa",
              {
                en:"Planted everywhere below ~1,200 m; natural stands in Ura-Kiso.",
                ja:"標高千二百メートルほどまでの各地に植栽。裏木曽に天然林。",
                zh:"海拔約 1,200 公尺以下各地栽植；裏木曾有天然林。" },
              {
                en:"Pale, fine, fragrant, durable; shrines, posts, baths, masu. See <a href=\"hinoki.html\">Hinoki</a>.",
                ja:"淡く緻密で香り高く耐久性がある。社殿・柱・風呂・枡。<a href=\"hinoki.html\">ヒノキ</a>を参照。",
                zh:"色淡、細緻、芳香、耐久；社殿、柱、浴桶、枡。見<a href=\"hinoki.html\">日本扁柏</a>。" }
            ],
            [
              { en:"Sugi", ja:"スギ", zh:"柳杉" },
              "Cryptomeria japonica",
              { en:"Planted in moist valleys; old giants at shrines.", ja:"湿った谷に植栽。社には巨木。", zh:"栽植於潮濕谷地；神社有古老巨木。" },
              {
                en:"Light, soft, red heart; ceilings, panelling, posts, barrels. See <a href=\"sugi.html\">Sugi</a>.",
                ja:"軽く柔らかく心が赤い。天井・羽目板・柱・樽。<a href=\"sugi.html\">スギ</a>を参照。",
                zh:"輕、軟、心材紅；天花板、壁板、柱、酒樽。見<a href=\"sugi.html\">日本柳杉</a>。" }
            ],
            [
              { en:"Sawara", ja:"サワラ", zh:"花柏" },
              "Chamaecyparis pisifera",
              { en:"Damp valley floors in Kiso and Hida.", ja:"木曽や飛騨の湿った谷底。", zh:"木曾與飛驒潮濕的谷底。" },
              {
                en:"Lighter and less scented than hinoki, water-resistant, splits cleanly; rice tubs, buckets, Shunkei trays.",
                ja:"ヒノキより軽く香りは弱く、水に強く、きれいに割れる。飯櫃・桶・春慶の盆。",
                zh:"比扁柏輕、香氣淡、耐水、易劈；飯桶、水桶、春慶托盤。" }
            ],
            [
              { en:"Asunaro (hiba)", ja:"アスナロ（ヒバ）", zh:"翌檜（羅漢柏）" },
              "Thujopsis dolabrata",
              { en:"Shady, snowy mountain slopes.", ja:"日陰の多雪の山腹。", zh:"背陰多雪的山坡。" },
              {
                en:"Rich in hinokitiol, rot- and insect-resistant; sills, baths, chopping boards.",
                ja:"ヒノキチオールに富み、腐朽や虫に強い。土台・風呂・まな板。",
                zh:"富含檜木醇，抗腐抗蟲；地檻、浴桶、砧板。" }
            ],
            [
              { en:"Nezuko (kurobe)", ja:"ネズコ（クロベ）", zh:"香柏（黑檜）" },
              "Thuja standishii",
              { en:"Rocky ridges and subalpine forest in Hida.", ja:"飛騨の岩尾根や亜高山の森。", zh:"飛驒的岩稜與亞高山森林。" },
              {
                en:"Light, dark-hearted, aromatic; ceilings, joinery, geta.",
                ja:"軽く、心が暗色で香る。天井・建具・下駄。",
                zh:"輕、心材色深、有香氣；天花板、門窗、木屐。" }
            ],
            [
              { en:"Kōyamaki", ja:"コウヤマキ", zh:"日本金松" },
              "Sciadopitys verticillata",
              { en:"Scattered on ridges; rare.", ja:"尾根に点在。まれ。", zh:"零星分布於山稜；稀少。" },
              {
                en:"Exceptionally water- and rot-resistant; bath tubs, ancient coffins.",
                ja:"水と腐朽にきわめて強い。浴槽、古代の棺。",
                zh:"極耐水、耐腐；浴桶、古代棺木。" }
            ],
            [
              { en:"Japanese yew", ja:"イチイ", zh:"紫杉（一位）" },
              "Taxus cuspidata",
              { en:"Subalpine and cool-temperate forest; Mount Kurai.", ja:"亜高山と冷温帯の森。位山。", zh:"亞高山與冷溫帶森林；位山。" },
              {
                en:"Dense, fine, red heart and cream sapwood; carving, court tablets. See <a href=\"ittobori.html\">Ichii Ittōbori</a>.",
                ja:"緻密で細かく、赤い心材と乳白の辺材。彫刻、笏。<a href=\"ittobori.html\">一位一刀彫</a>を参照。",
                zh:"緻密細膩，紅色心材與乳白邊材；雕刻、笏板。見<a href=\"ittobori.html\">一位一刀雕</a>。" }
            ],
            [
              { en:"Japanese larch", ja:"カラマツ", zh:"日本落葉松" },
              "Larix kaempferi",
              { en:"Planted on high, cold plateaus in Hida.", ja:"飛騨の高く寒い高原に植栽。", zh:"栽植於飛驒高寒的高原。" },
              {
                en:"Resinous, strong, prone to twist; now glulam and CLT; used by Hida Sangyō for a 1979 furniture line.",
                ja:"脂が多く強いがねじれやすい。いまは集成材やCLT。飛騨産業は一九七九年の家具シリーズに用いた。",
                zh:"多樹脂、強度高但易扭曲；如今用於集成材與 CLT；飛驒產業曾在 1979 年的家具系列中使用。" }
            ],
            [
              { en:"Japanese red pine", ja:"アカマツ", zh:"赤松" },
              "Pinus densiflora",
              { en:"Dry ridges and old coppice in Mino.", ja:"美濃の乾いた尾根や古い薪炭林。", zh:"美濃乾燥的山稜與舊薪炭林。" },
              {
                en:"Resinous and strong; beams, firewood for kilns and cormorant torches; badly hit by pine wilt.",
                ja:"脂が多く強い。梁、窯と鵜飼の篝火の薪。松枯れの被害が大きい。",
                zh:"多樹脂、強度高；樑、窯柴與鸕鶿捕魚的篝火；受松材線蟲萎凋病重創。" }
            ],
            [
              { en:"Momi fir and hemlocks", ja:"モミ・ツガ類", zh:"日本冷杉與鐵杉類" },
              "Abies firma, Tsuga spp.",
              {
                en:"Mid-slopes (momi, tsuga); subalpine (shirabiso, kometsuga).",
                ja:"中腹（モミ・ツガ）、亜高山（シラビソ・コメツガ）。",
                zh:"山腰（冷杉、鐵杉）；亞高山（白時冷杉、米鐵杉）。" },
              {
                en:"White, odourless, soft; boxes, coffins, formwork.",
                ja:"白く無臭で柔らかい。箱・棺・型枠。",
                zh:"色白、無味、質軟；箱、棺、模板。" }
            ],
            [
              { en:"Kaya", ja:"カヤ", zh:"日本榧" },
              "Torreya nucifera",
              { en:"Warm lower slopes in Mino.", ja:"美濃の暖かい低い斜面。", zh:"美濃溫暖的低坡。" },
              {
                en:"Fine, yellow, springy; the finest go and shōgi boards.",
                ja:"緻密で黄色く弾力がある。最上の碁盤・将棋盤。",
                zh:"細緻、色黃、有彈性；最上等的圍棋盤與將棋盤。" }
            ]
          ] }
      ] },
    { t:"section",
      id:"broadleaves",
      title:{ en:"Broadleaves", ja:"広葉樹", zh:"闊葉樹" },
      jp:"つくる木",
      body:[
        { t:"p",
          text:{
            en:"Broadleaved trees have a more complex wood, with pores (vessels) that carry water, fibres that give strength and wide rays that show as flecks on a quartered face. That complexity is why they are more varied — in colour, figure, hardness and the way they bend — and why the furniture and craft traditions of Hida are built on them. In Gifu the broadleaves are mostly natural or semi-natural forest: they are cut and allowed to regrow rather than planted.",
            ja:"広葉樹の材はより複雑で、水を運ぶ道管（孔）、強さを与える繊維、柾目面に斑として現れる幅の広い放射組織をもつ。その複雑さゆえに、色・杢・硬さ・曲がり方がより多様になり、飛騨の家具と工芸の伝統はその上に築かれた。岐阜の広葉樹はおおむね天然林か半天然林で、植えられるのではなく、伐られては萌芽して再生する。",
            zh:"闊葉樹的木材結構較複雜，有輸水的導管（孔）、提供強度的纖維，以及在徑切面上呈現斑點的寬木射線。這種複雜性使它們在顏色、花紋、硬度與可彎程度上更加多樣，飛驒的家具與工藝傳統也因此建立在它們之上。岐阜的闊葉樹大多是天然林或半天然林：它們不是被栽植的，而是被砍伐後任其萌芽再生。" } },
        { t:"table",
          caption:{ en:"The broadleaves of Gifu", ja:"岐阜の広葉樹", zh:"岐阜的闊葉樹" },
          cols:[
            { en:"Tree", ja:"樹種", zh:"樹種" },
            { en:"Botanical name", ja:"学名", zh:"學名" },
            { en:"Where in Gifu", ja:"岐阜での分布", zh:"在岐阜的分布" },
            { en:"The wood and its uses", ja:"材と用途", zh:"木材與用途" }
          ],
          rows:[
            [
              { en:"Beech", ja:"ブナ", zh:"山毛櫸" },
              "Fagus crenata",
              {
                en:"Snowy mountain slopes, 700–1,600 m; Hida, Hakusan.",
                ja:"多雪の山腹、七百〜千六百メートル。飛騨、白山。",
                zh:"多雪山坡，700–1,600 公尺；飛驒、白山。" },
              {
                en:"Even, pinkish, flecked with rays; bends superbly when steamed — the Hida bentwood chair.",
                ja:"均質で桃色がかり、放射組織の斑が出る。蒸せば見事に曲がる——飛騨の曲木椅子。",
                zh:"均勻、帶粉紅、有木射線斑點；蒸後可完美彎曲——飛驒曲木椅。" }
            ],
            [
              { en:"Mizunara oak", ja:"ミズナラ", zh:"水楢" },
              "Quercus crispula",
              { en:"Beech forest and above; Hida plateaus.", ja:"ブナ林とその上。飛騨の高原。", zh:"山毛櫸林帶及以上；飛驒高原。" },
              {
                en:"Ring-porous, strong, with silver-ray figure; furniture, flooring, whisky casks.",
                ja:"環孔材で強く、虎斑が出る。家具・床材・ウイスキー樽。",
                zh:"環孔材、強韌，有銀光木射線（虎斑）；家具、地板、威士忌桶。" }
            ],
            [
              { en:"Konara and kunugi oaks", ja:"コナラ・クヌギ", zh:"枹櫟與麻櫟" },
              "Quercus serrata, Q. acutissima",
              {
                en:"Lowland coppice in Mino — the classic satoyama trees.",
                ja:"美濃の低地の薪炭林——里山の代表の木。",
                zh:"美濃低地薪炭林——典型的里山樹種。" },
              {
                en:"Heavy and hard; charcoal, firewood, shiitake logs.",
                ja:"重く硬い。炭・薪・しいたけの原木。",
                zh:"重而硬；木炭、柴薪、香菇段木。" }
            ],
            [
              { en:"Keyaki", ja:"ケヤキ", zh:"櫸" },
              "Zelkova serrata",
              { en:"River terraces, shrine groves, village edges.", ja:"河岸段丘、社叢、集落の縁。", zh:"河階地、神社林、村落邊緣。" },
              {
                en:"Bold golden figure, tough; temple pillars, float frames and wheels, drums, tray tables.",
                ja:"大胆な金色の杢、粘り強い。寺の柱、屋台の骨組と車輪、太鼓、座卓。",
                zh:"金黃大膽的花紋、強韌；寺院柱、屋台骨架與車輪、太鼓、矮桌。" }
            ],
            [
              { en:"Horse chestnut (tochi)", ja:"トチノキ", zh:"七葉樹" },
              "Aesculus turbinata",
              {
                en:"Stream valleys in the mountains; giant old trees in Hida.",
                ja:"山の渓谷。飛騨には巨木がある。",
                zh:"山中溪谷；飛驒有古老巨木。" },
              {
                en:"Pale, silky, often rippled; turned bowls, Shunkei turnery, table slabs.",
                ja:"淡く絹のような艶、しばしば縮み杢。挽物の椀、春慶の挽物、天板。",
                zh:"色淡、絲質光澤、常有波紋；車製的碗、春慶車旋器、桌板。" }
            ],
            [
              { en:"Hōnoki", ja:"ホオノキ", zh:"日本厚朴" },
              "Magnolia obovata",
              { en:"Mixed broadleaf forest throughout.", ja:"各地の広葉樹混交林。", zh:"各地闊葉混交林。" },
              {
                en:"Soft, even, greenish; the classic wood for sword scabbards, geta and cutting boards; also carving blanks.",
                ja:"柔らかく均質で緑がかる。刀の鞘、下駄、まな板の定番。彫刻の素材にも。",
                zh:"質軟、均勻、帶綠；刀鞘、木屐、砧板的經典用材；也用於雕刻胚料。" }
            ],
            [
              { en:"Katsura", ja:"カツラ", zh:"連香樹" },
              "Cercidiphyllum japonicum",
              { en:"Damp valleys; huge multi-stemmed trees.", ja:"湿った谷。株立ちの巨木。", zh:"潮濕谷地；多幹叢生的巨木。" },
              {
                en:"Soft, fine, warm brown, easy to carve; Buddhist sculpture, carving, drawers.",
                ja:"柔らかく緻密で温かな茶色、彫りやすい。仏像、彫刻、引き出し。",
                zh:"質軟細緻、溫暖褐色、易雕；佛像、雕刻、抽屜。" }
            ],
            [
              { en:"Wild cherry", ja:"ヤマザクラ", zh:"山櫻" },
              "Prunus jamasakura",
              { en:"Hill forest throughout Mino.", ja:"美濃各地の丘陵の森。", zh:"美濃各地丘陵森林。" },
              {
                en:"Fine, reddens with age; furniture, woodblocks, bark for kabazaiku.",
                ja:"緻密で年とともに赤みを増す。家具、版木、樺細工の樹皮。",
                zh:"細緻、隨年歲轉紅；家具、木刻版、樺細工的樹皮。" }
            ],
            [
              { en:"Mizume (Japanese cherry birch)", ja:"ミズメ", zh:"水芽（日本梓樺）" },
              "Betula grossa",
              { en:"Mountain slopes in Hida.", ja:"飛騨の山腹。", zh:"飛驒山坡。" },
              {
                en:"Hard and fine; used with keyaki in the Takayama floats; sold as “cherry” in the trade.",
                ja:"硬く緻密。高山の屋台に欅とともに使われる。業界では「サクラ」として売られる。",
                zh:"硬而細緻；與櫸木一同用於高山屋台；業界常以「櫻木」名義出售。" }
            ],
            [
              { en:"Maples", ja:"カエデ類（イタヤカエデ）", zh:"槭類（色木槭）" },
              "Acer pictum and others",
              { en:"Mixed mountain forest.", ja:"山の混交林。", zh:"山地混交林。" },
              {
                en:"Hard, pale, sometimes figured; furniture, flooring, instrument backs and necks.",
                ja:"硬く淡色で、ときに杢が出る。家具・床材・楽器の裏板やネック。",
                zh:"硬、色淡、偶有花紋；家具、地板、樂器背板與琴頸。" }
            ],
            [
              { en:"Sen", ja:"セン（ハリギリ）", zh:"刺楸" },
              "Kalopanax septemlobus",
              { en:"Mixed forest; large trees.", ja:"混交林の大木。", zh:"混交林中的大樹。" },
              {
                en:"Ring-porous, ash-like grain; furniture, veneers, drawer fronts.",
                ja:"環孔材でタモに似た木目。家具・突板・引き出しの前板。",
                zh:"環孔材，紋理似白蠟木；家具、薄片、抽屜面板。" }
            ],
            [
              { en:"Walnut", ja:"オニグルミ", zh:"日本胡桃" },
              "Juglans mandshurica var. sachalinensis",
              { en:"Riversides.", ja:"河畔。", zh:"河岸。" },
              {
                en:"Medium-hard, warm brown; furniture, gunstocks, carving.",
                ja:"中程度の硬さで温かな茶色。家具・銃床・彫刻。",
                zh:"中等硬度、溫暖褐色；家具、槍托、雕刻。" }
            ],
            [
              { en:"Ash (tamo, shioji)", ja:"タモ・シオジ", zh:"水曲柳與白蠟" },
              "Fraxinus spp.",
              { en:"Wet valley floors.", ja:"湿った谷底。", zh:"潮濕谷底。" },
              {
                en:"Strong and elastic; bats, tool handles, furniture.",
                ja:"強く弾力がある。バット・道具の柄・家具。",
                zh:"強韌有彈性；球棒、工具柄、家具。" }
            ],
            [
              { en:"Chestnut", ja:"クリ", zh:"栗" },
              "Castanea crenata",
              { en:"Hill forest; old orchards.", ja:"丘陵の森、古い栗林。", zh:"丘陵森林；老栗園。" },
              {
                en:"Very rot-resistant heartwood; sills, railway sleepers, farmhouse posts.",
                ja:"心材がきわめて腐りにくい。土台・枕木・民家の柱。",
                zh:"心材極耐腐；地檻、鐵路枕木、農舍柱。" }
            ],
            [
              { en:"Paulownia", ja:"キリ", zh:"泡桐" },
              "Paulownia tomentosa",
              { en:"Planted near villages.", ja:"集落の近くに植えられる。", zh:"栽植於村落附近。" },
              {
                en:"The lightest Japanese timber; chests, boxes, geta, the koto.",
                ja:"日本の材で最も軽い。箪笥・箱・下駄・箏。",
                zh:"日本最輕的木材；衣櫃、木箱、木屐、箏。" }
            ]
          ] }
      ] },
    { t:"section",
      id:"others",
      title:{ en:"Other plants of the wooden crafts", ja:"木の工芸を支えるほかの植物", zh:"支撐木工藝的其他植物" },
      jp:"竹・楮・漆",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Madake bamboo", ja:"マダケ", zh:"桂竹" },
              jp:"真竹",
              romaji:"madake",
              def:{
                en:"The bamboo of lantern and umbrella ribs and barrel hoops: tall, thick-walled, straight, and splittable into strips a fraction of a millimetre thick. Cut in late autumn and winter, when its starch content is lowest, to reduce insect attack.",
                ja:"提灯と傘の骨、樽の箍の竹。背が高く肉厚でまっすぐ、コンマ数ミリの条に割れる。虫害を減らすため、デンプンが最も少ない晩秋から冬に伐る。",
                zh:"燈籠與傘骨、木桶箍所用的竹：高大、壁厚、筆直，可劈成不到一公釐厚的竹條。為減少蟲害，在澱粉含量最低的晚秋與冬季砍伐。" } },
            { term:{ en:"Kōzo (paper mulberry)", ja:"コウゾ", zh:"構樹" },
              jp:"楮",
              romaji:"kōzo",
              def:{
                en:"A shrub cut back every winter, whose inner bark provides the long, strong fibres of Mino washi. Hon-Minoshi must be made from Nasu kōzo alone. See <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>.",
                ja:"毎冬刈り込まれる低木で、その内皮が美濃和紙の長く強い繊維となる。本美濃紙は那須楮のみでつくらねばならない。<a href=\"paper.html\">和紙・提灯・和傘</a>を参照。",
                zh:"每年冬季修剪的灌木，其內皮提供美濃和紙細長而強韌的纖維。本美濃紙必須只用那須構樹製作。見<a href=\"paper.html\">和紙、燈籠與和傘</a>。" } },
            { term:{ en:"Urushi (lacquer tree)", ja:"ウルシ", zh:"漆樹" },
              jp:"漆",
              romaji:"urushi",
              def:{
                en:"<em>Toxicodendron vernicifluum</em>, whose sap, tapped from cuts in the bark in summer, hardens into lacquer. Nearly all urushi used in Japan today is imported from China; the small domestic harvest is prized for conservation work. Hida Shunkei depends on it.",
                ja:"<em>Toxicodendron vernicifluum</em>。夏に樹皮の傷から掻き取る樹液が固まって漆となる。いま日本で使われる漆のほとんどは中国からの輸入で、わずかな国産漆は文化財の修理に珍重される。飛騨春慶はこれに依る。",
                zh:"<em>Toxicodendron vernicifluum</em>，夏季從樹皮割痕採集的樹液會硬化成漆。如今日本所用的漆幾乎全部從中國進口；少量的國產漆在文物修復上格外珍貴。飛驒春慶有賴於它。" } },
            { term:{ en:"Egonoki and mansaku", ja:"エゴノキ・マンサク", zh:"野茉莉與金縷梅" },
              jp:"轆轤・ネソ",
              def:{
                en:"Two small trees with big jobs. The hub, <em>rokuro</em>, into which every rib of a Gifu umbrella is set is turned from egonoki. The pliable young stems of mansaku, twisted into <em>neso</em>, lash the roof timbers of the gasshō houses of Shirakawa-gō — 700 to 1,000 of them for each re-thatching.",
                ja:"大きな役を担う二つの小さな木。岐阜和傘のすべての骨がはまる轆轤はエゴノキから挽かれる。マンサクのしなやかな若枝をねじったネソは、白川郷の合掌造りの小屋組を縛る——葺き替え一回に七百から千本。",
                zh:"兩種擔任大任務的小樹。岐阜和傘所有傘骨嵌入的轆轤，是以野茉莉車製的。金縷梅柔韌的嫩枝扭成「ネソ」，綁紮白川鄉合掌造的屋架——每次重葺需 700 到 1,000 根。" } }
          ] },
        { t:"note",
          label:{ en:"Recognising wood", ja:"木を見分ける", zh:"辨識木材" },
          text:{
            en:"The quickest field test is the end grain under a hand lens. Conifers show rings and no pores. Ring-porous broadleaves — oak, chestnut, ash, sen, keyaki — show a ring of large pores at the start of each year. Diffuse-porous ones — beech, maple, cherry, katsura, tochi, hōnoki — show small pores spread evenly. Weight, smell and colour then narrow it down.",
            ja:"最も速い見分け方は、木口をルーペで見ることである。針葉樹は年輪があり孔がない。環孔材の広葉樹——ナラ・クリ・タモ・セン・ケヤキ——は年のはじめに大きな孔が輪をなす。散孔材——ブナ・カエデ・サクラ・カツラ・トチ・ホオノキ——は小さな孔が均一に散らばる。そのうえで重さ、匂い、色で絞り込む。",
            zh:"最快的現場辨識法，是用放大鏡看木材橫斷面。針葉樹可見年輪而無孔。環孔闊葉樹——橡木、栗、白蠟、刺楸、櫸——在每年生長初期有一圈大孔。散孔材——山毛櫸、楓、櫻、連香樹、七葉樹、厚朴——則是小孔均勻散布。接著再以重量、氣味與顏色縮小範圍。" } }
      ] },
    { t:"related",
      items:[
        { href:"hinoki.html",
          why:{ en:"The most important tree in Gifu, in depth.", ja:"岐阜で最も重要な木を詳しく。", zh:"深入了解岐阜最重要的樹。" } },
        { href:"broadleaf.html",
          why:{ en:"The broadleaf forests and their furniture woods.", ja:"広葉樹の森とその家具材。", zh:"闊葉林及其家具用材。" } },
        { href:"anatomy.html",
          why:{ en:"Why conifer and broadleaf wood differ inside.", ja:"針葉樹と広葉樹の材が内側で違う理由。", zh:"針葉樹與闊葉樹木材內部為何不同。" } },
        { href:"properties.html",
          why:{ en:"Density, strength and hardness in detail.", ja:"密度・強さ・硬さを詳しく。", zh:"詳談密度、強度與硬度。" } }
      ] }
  ] };

/* ---- -------------------------------------------- hinoki */
GIFU.pages["hinoki"] = { kicker:{ en:"The Forest · 03", ja:"森 · 03", zh:"森林 · 03" },
  title:{ en:"Hinoki", ja:"ヒノキ", zh:"日本扁柏" },
  jp:"檜 · Chamaecyparis obtusa",
  lede:{
    en:"Hinoki is the timber that Japan reserves for its most important buildings. The oldest wooden structures in the world, at Hōryūji, are hinoki; so is every building at Ise, rebuilt every twenty years; so are the stages of the great Noh theatres, which is why the Japanese idiom for “the big time” is a hinoki stage. Gifu grows more of it than almost anywhere, and the Ura-Kiso forests on its eastern edge hold some of the finest natural stands left. This page describes the tree, its wood, why it is valued as it is, and what distinguishes the hinoki of Tōnō.",
    ja:"ヒノキは、日本が最も大切な建物のためにとっておく材である。世界最古の木造建築である法隆寺はヒノキであり、二十年ごとに建て替えられる伊勢のすべての社殿もそうであり、大きな能楽堂の舞台もそうである——晴れ舞台を「檜舞台」と言うのはそのためである。岐阜はほとんどどこよりも多くのヒノキを育て、東の縁の裏木曽の森は、残された最良の天然林のいくつかを抱えている。この頁は、その木と材、それがなぜそのように尊ばれるのか、そして東濃のヒノキを際立たせるものを述べる。",
    zh:"扁柏是日本保留給最重要建築的木材。世界上最古老的木造建築法隆寺是扁柏；每二十年重建一次的伊勢神宮，每一座建築也是扁柏；大型能樂堂的舞台同樣是扁柏——所以日文把「大展身手的舞台」稱為「檜舞台」。岐阜的扁柏產量幾乎居各地之冠，東緣的裏木曾森林保有現存最好的幾片天然林。本頁介紹這種樹、它的木材、它為何如此受珍視，以及東濃扁柏的獨到之處。" },
  body:[
    { t:"section",
      id:"tree",
      title:{ en:"The tree", ja:"木", zh:"樹" },
      jp:"植物としてのヒノキ",
      body:[
        { t:"p",
          text:{
            en:"<em>Chamaecyparis obtusa</em> is a false cypress of the family Cupressaceae, native to the mountains of Honshū, Shikoku and Kyūshū, with a close variety in the mountains of Taiwan. It grows slowly into a tall, straight tree, commonly 20 to 30 metres and exceptionally more than 40, with reddish-brown bark that peels in long vertical strips and flat sprays of scale-like leaves. It prefers well-drained slopes and ridges and tolerates poorer, drier soils than sugi, which is one reason Gifu's hills suit it. Natural hinoki lives for many centuries; the oldest trees in the Kashimo reserve are around a thousand years old.",
            ja:"<em>Chamaecyparis obtusa</em>はヒノキ科ヒノキ属の木で、本州・四国・九州の山に自生し、台湾の山にも近い変種がある。ゆっくりと育って高くまっすぐな木になり、ふつう二十〜三十メートル、まれに四十メートルを超える。赤褐色の樹皮は縦に長く剥がれ、鱗のような葉が平たい枝葉をなす。水はけのよい斜面や尾根を好み、スギより痩せて乾いた土にも耐える——岐阜の山がそれに合う理由の一つである。天然のヒノキは何世紀も生き、加子母の備林で最も古い木はおよそ千年を数える。",
            zh:"<em>Chamaecyparis obtusa</em> 為柏科扁柏屬樹木，原生於本州、四國與九州山地，台灣山區另有近緣變種。它生長緩慢，長成高大筆直的樹，通常高 20 至 30 公尺，特例可逾 40 公尺；紅褐色樹皮呈縱向長條剝落，鱗片狀葉片排成扁平枝葉。它偏好排水良好的坡地與山稜，比柳杉更耐貧瘠乾燥的土壤——這正是岐阜山地適合它的原因之一。天然扁柏可活數百年；加子母備林中最老的樹約有一千歲。" } },
        { t:"figure",
          caption:{
            en:"Telling hinoki from sawara in the forest. Turn a spray of leaves over: hinoki shows white Y-shaped marks where the scale leaves meet (the stomatal bands); sawara, its close relative, shows a white X or butterfly shape, and its leaf tips are sharper. The woods are just as distinct once cut — sawara lighter, softer, with a fainter smell. Schematic.",
            ja:"森でヒノキとサワラを見分ける。枝葉を裏返すと、ヒノキは鱗片葉の合わせ目に白いY字の模様（気孔帯）を見せる。近縁のサワラはX字か蝶の形を見せ、葉先がより尖る。伐ってしまえば材もはっきり違う——サワラのほうが軽く柔らかく、香りは淡い。模式図。",
            zh:"在森林中分辨扁柏與花柏。把枝葉翻過來看：扁柏在鱗片葉交接處有白色 Y 字形紋（氣孔帶）；近親花柏則是白色 X 字或蝴蝶形，葉尖也更尖。一旦鋸開，兩者木材同樣截然不同——花柏較輕、較軟、香氣較淡。示意圖。" },
          svg:function(lang, L){
            var s = '<svg viewBox="0 0 760 260" role="img" aria-label="hinoki vs sawara">';
            function spray(cx, mark, label, sub){
              s += '<rect x="'+(cx-150)+'" y="20" width="300" height="210" fill="#F5F3ED" stroke="#E1DCD2"/>';
              s += '<text x="'+cx+'" y="46" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#201E1B">'+label+'</text>';
              s += '<text x="'+cx+'" y="64" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+sub+'</text>';
              for (var i=0;i<4;i++){
                var y = 90 + i*34;
                s += '<path d="M'+(cx-80)+' '+y+' L'+(cx+80)+' '+y+'" stroke="#A08F73" stroke-width="2"/>';
                for (var j=0;j<5;j++){
                  var x = cx-64 + j*32;
                  s += '<path d="M'+x+' '+y+' l14 -12 l14 12 l-14 12 z" fill="#E0E6DB" stroke="#8B857C" stroke-width="0.8"/>';
                  if (mark==="Y") s += '<path d="M'+(x+14)+' '+(y+7)+' L'+(x+14)+' '+(y+1)+' M'+(x+14)+' '+(y+1)+' L'+(x+9)+' '+(y-5)+' M'+(x+14)+' '+(y+1)+' L'+(x+19)+' '+(y-5)+'" stroke="#FBFAF7" stroke-width="2.2" fill="none"/>';
                  else s += '<path d="M'+(x+8)+' '+(y-6)+' L'+(x+20)+' '+(y+6)+' M'+(x+20)+' '+(y-6)+' L'+(x+8)+' '+(y+6)+'" stroke="#FBFAF7" stroke-width="2.2" fill="none"/>';
                }
              }
            }
            spray(200,"Y",(lang==="en"?"Hinoki":(lang==="ja"?"ヒノキ":"扁柏")),(lang==="en"?"white Y marks · blunt tips":(lang==="ja"?"白いY字・葉先は丸い":"白色 Y 紋・葉尖圓鈍")));
            spray(560,"X",(lang==="en"?"Sawara":(lang==="ja"?"サワラ":"花柏")),(lang==="en"?"white X marks · sharp tips":(lang==="ja"?"白いX字・葉先は尖る":"白色 X 紋・葉尖銳")));
            s += '<text x="20" y="252" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?"Underside of the leaf spray; schematic":(lang==="ja"?"枝葉の裏面。模式図":"枝葉背面；示意圖"))+'</text>';
            s += '</svg>';
            return s;
          } }
      ] },
    { t:"section",
      id:"wood",
      title:{ en:"The wood", ja:"材", zh:"木材" },
      jp:"材としてのヒノキ",
      body:[
        { t:"p",
          text:{
            en:"Hinoki is not the strongest, hardest or most rot-proof timber in Japan; kōyamaki is more water-resistant, keyaki harder, hiba richer in fungicides. What makes it exceptional is the combination. Its heartwood is a pale pinkish-yellow and its sapwood nearly white, so that the whole log can be used for work where colour matters; its grain is fine and straight; it planes to a silky, almost lustrous surface; it shrinks and moves less than most timbers of its density; its heartwood resists decay and termites well; it is light enough to handle in large sections; and it smells, when freshly cut or planed, of lemon and resin. Several of them, by long experience and one well-known study, hold up or even improve with age rather than decline.",
            ja:"ヒノキは日本で最も強くも硬くも、最も腐りにくくもない。コウヤマキはより水に強く、ケヤキはより硬く、ヒバは防菌成分により富む。ヒノキを格別にしているのは、その組み合わせである。心材は淡い桃色がかった黄色で辺材はほとんど白く、色が問われる仕事にも丸太全体が使える。木目は細かくまっすぐで、鉋をかければ絹のような、艶さえある面になる。同じ密度のたいていの材より縮みも狂いも少ない。心材は腐朽とシロアリによく耐える。大断面でも扱えるほど軽い。そして伐りたて、削りたてのときには、レモンと樹脂の香りがする。これらの性質のいくつかは、長い経験と一つの名高い研究によれば、年とともに衰えるどころか、保たれ、あるいはよくなっていく。",
            zh:"扁柏並非日本最強、最硬或最耐腐的木材；日本金松更耐水，櫸木更硬，羅漢柏含更多抗菌成分。讓扁柏出類拔萃的，是這些特質的組合。它的心材是淡淡的粉黃色，邊材幾乎是白色，因此整根原木都能用在講究顏色的工作上；紋理細而直；刨過後表面如絲般光滑，幾乎帶光澤；在同等密度的木材中，收縮與變形都較小；心材相當耐腐、抗白蟻；夠輕，大斷面也能搬運；而剛鋸開或剛刨好時，散發檸檬與樹脂的香氣。根據長年經驗與一項著名研究，其中幾項特質不會隨歲月衰退，甚至越來越好。" } },
        { t:"grid",
          cols:3,
          cells:[
            { k:{ en:"Air-dry density", ja:"気乾密度", zh:"氣乾密度" },
              v:{ en:"0.44", ja:"0.44", zh:"0.44" },
              d:{
                en:"g/cm³, reference value; about 15% heavier than sugi.",
                ja:"g/cm³、代表値。スギよりおよそ一割五分重い。",
                zh:"g/cm³，代表值；比柳杉重約 15%。" } },
            { k:{ en:"Ring width, Tōnō hinoki", ja:"東濃ひのきの年輪幅", zh:"東濃檜木年輪寬" },
              v:{ en:"2–3 mm", ja:"2〜3 mm", zh:"2–3 公釐" },
              d:{
                en:"Even and nearly circular; the defining trait of the brand.",
                ja:"そろって、ほぼ真円。銘柄を定める特徴。",
                zh:"均勻、近乎正圓；是這個品牌的決定性特徵。" } },
            { k:{ en:"Essential oil yield", ja:"精油の収率", zh:"精油得率" },
              v:{ en:"3–10%", ja:"3〜10%", zh:"3–10%" },
              d:{
                en:"By steam distillation of the wood; mostly pinene and cadinene-type terpenes.",
                ja:"材の水蒸気蒸留による。主にピネンとカジネン系のテルペン。",
                zh:"以木材水蒸氣蒸餾所得；主要為蒎烯與杜松烯類萜類。" } }
          ] },
        { t:"h3", text:{ en:"Stronger with age", ja:"年を経て強くなる", zh:"越老越強" } },
        { t:"p",
          text:{
            en:"A study that has become part of Japanese building lore, by the wood scientist Kohara Jirō, compared the strength of new hinoki with old timbers from temples of known age, including Hōryūji. It concluded that hinoki's bending strength and stiffness rise for roughly two centuries after felling — by something like a fifth to a third — and then decline very slowly, so that timber 1,300 years old is about as strong as timber newly cut. The research was published with the temple carpenter Nishioka Tsunekazu in 1978 and is widely quoted in the hinoki trade. It rests on a limited number of old samples, and wood scientists treat the curve as indicative rather than exact; the practical point — that well-kept hinoki does not wear out on the timescale of a building — is not in doubt.",
            ja:"木材学者小原二郎による研究は、日本の建築の言い伝えの一部となった。新しいヒノキと、法隆寺を含む年代のわかる寺院の古材の強さを比べ、ヒノキの曲げの強さと剛さは伐採後およそ二世紀のあいだ——五分の一から三分の一ほど——増し、その後きわめてゆっくり下がるので、千三百年を経た材は伐りたての材とほぼ同じ強さである、と結論した。研究は一九七八年に宮大工西岡常一とともに刊行され、ヒノキの業界で広く引かれる。限られた数の古材にもとづくもので、木材学者はこの曲線を正確なものではなく目安とみなす。実際上の要点——よく保たれたヒノキは建物の時間尺度では傷まない——は疑いない。",
            zh:"木材學者小原二郎的一項研究，已成為日本建築傳說的一部分。他比較新的扁柏與年代可考的寺院古材（包括法隆寺）的強度，結論是：扁柏的抗彎強度與剛度在伐採後約兩個世紀內會上升——約增加五分之一到三分之一——之後極緩慢地下降，因此一千三百年的木材強度與新伐木材相當。這項研究於 1978 年與宮大工西岡常一共同出版，在扁柏業界廣為引用。它所依據的古材樣本有限，木材學者視這條曲線為參考而非精確值；但其實務要點——保養得宜的扁柏在建築的時間尺度內不會衰敗——毋庸置疑。" } },
        { t:"figure",
          caption:{
            en:"Strength of hinoki after felling, as described by Kohara Jirō's studies of old temple timbers: a rise over roughly two hundred years, then a slow decline, so that 1,300-year-old timber is comparable to new. Qualitative — the curve is indicative, based on limited samples.",
            ja:"小原二郎の古材研究が示す、伐採後のヒノキの強さ。およそ二百年かけて上がり、その後ゆっくり下がり、千三百年の材が新材に匹敵する。定性図——限られた試料にもとづく目安の曲線である。",
            zh:"依小原二郎對寺院古材的研究所描述的扁柏伐後強度：約兩百年間上升，隨後緩慢下降，使一千三百年的木材與新材相當。定性圖——此曲線為依有限樣本所得之參考。" },
          svg:function(lang, L){
            var s = '<svg viewBox="0 0 760 260" role="img" aria-label="strength over time">';
            var x0=70, y0=210, W=640;
            s += '<line x1="'+x0+'" y1="'+y0+'" x2="'+(x0+W)+'" y2="'+y0+'" stroke="#8B857C"/>';
            s += '<line x1="'+x0+'" y1="30" x2="'+x0+'" y2="'+y0+'" stroke="#8B857C"/>';
            function X(t){ return x0 + t/1400*W; }
            var ybase = 150, ypk = 90;
            s += '<line x1="'+x0+'" y1="'+ybase+'" x2="'+(x0+W)+'" y2="'+ybase+'" stroke="#CDC6B9" stroke-dasharray="4 4"/>';
            s += '<path d="M'+X(0)+' '+ybase+' C '+X(80)+' '+(ypk+10)+', '+X(160)+' '+ypk+', '+X(220)+' '+ypk+' S '+X(900)+' '+(ybase-28)+', '+X(1300)+' '+(ybase-2)+'" fill="none" stroke="#7C6B52" stroke-width="2"/>';
            var ticks = [0,200,400,600,800,1000,1200,1400];
            for (var i=0;i<ticks.length;i++){ s += '<text x="'+X(ticks[i])+'" y="'+(y0+16)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+ticks[i]+'</text>'; }
            s += '<text x="'+(x0+W/2)+'" y="'+(y0+36)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+(lang==="en"?"years after felling":(lang==="ja"?"伐採後の年数":"伐採後年數"))+'</text>';
            s += '<text x="'+(x0+8)+'" y="'+(ybase-6)+'" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?"strength when new":(lang==="ja"?"新材の強さ":"新材強度"))+'</text>';
            s += '<text x="'+X(220)+'" y="'+(ypk-10)+'" text-anchor="middle" font-family="Georgia,serif" font-size="12.5" fill="#201E1B">'+(lang==="en"?"peak ≈ 200 years":(lang==="ja"?"頂点　約二百年":"高峰　約 200 年"))+'</text>';
            s += '<text x="'+X(1300)+'" y="'+(ybase-14)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#201E1B">'+(lang==="en"?"Hōryūji ≈ 1,300":(lang==="ja"?"法隆寺　約千三百年":"法隆寺　約 1,300 年"))+'</text>';
            s += '<text x="20" y="40" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?"strength":(lang==="ja"?"強さ":"強度"))+'</text>';
            s += '<text x="20" y="252" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?"Qualitative; after Kohara (1978)":(lang==="ja"?"定性図。小原（一九七八）による":"定性圖；依小原（1978）"))+'</text>';
            s += '</svg>';
            return s;
          } }
      ] },
    { t:"section",
      id:"uses",
      title:{ en:"What hinoki is used for", ja:"ヒノキの用途", zh:"扁柏的用途" },
      jp:"社寺から風呂まで",
      body:[
        { t:"table",
          caption:{ en:"Hinoki at work", ja:"働くヒノキ", zh:"扁柏的用途" },
          cols:[
            { en:"Use", ja:"用途", zh:"用途" },
            { en:"Japanese", ja:"和名", zh:"日文" },
            { en:"Why hinoki", ja:"ヒノキである理由", zh:"為何用扁柏" }
          ],
          jpCols:[1],
          rows:[
            [
              { en:"Shrines and temples", ja:"社寺", zh:"寺社" },
              "社寺建築",
              {
                en:"Durability, straightness, the ability to take fine joinery, and the purity of bare pale wood. Every building at Ise is hinoki; so are the oldest surviving halls at Hōryūji.",
                ja:"耐久性、通直さ、精緻な継手を刻める材質、素の淡い木の清浄さ。伊勢のすべての社殿がヒノキであり、法隆寺の現存最古の堂もそうである。",
                zh:"耐久、筆直、能承受精細榫接，以及淡色素木的潔淨感。伊勢每一座社殿都是扁柏，法隆寺現存最古老的殿堂亦然。" }
            ],
            [
              { en:"Posts and sills", ja:"柱・土台", zh:"柱與地檻" },
              "柱・土台",
              {
                en:"Heartwood resists rot and termites; knot-free faces look fine in a room with exposed structure.",
                ja:"心材が腐朽とシロアリに強い。節のない面は、構造を見せる部屋で美しい。",
                zh:"心材抗腐抗白蟻；無節面在構造外露的房間中顯得美觀。" }
            ],
            [
              { en:"Noh and kabuki stages", ja:"能舞台・歌舞伎の舞台", zh:"能劇與歌舞伎舞台" },
              "檜舞台",
              {
                en:"A floor that is resilient underfoot, resonant for the stamping of Noh, and planes to a surface that shines with wear.",
                ja:"足にしなやかで、能の足拍子によく響き、使うほどに光る面に削れる床。",
                zh:"腳下有彈性、能與能劇的踏步共鳴，刨出的表面越用越亮的地板。" }
            ],
            [
              { en:"Baths and tubs", ja:"風呂・桶", zh:"浴桶與木桶" },
              "檜風呂",
              {
                en:"Water-resistant heartwood, warm to the touch, and scent released by hot water.",
                ja:"水に強い心材、肌に温かく、湯で香りが立つ。",
                zh:"耐水的心材、觸感溫暖、熱水能釋放香氣。" }
            ],
            [
              { en:"Masu and ritual vessels", ja:"枡・神具", zh:"枡與神具" },
              "枡・三方",
              {
                en:"Clean, stable, odour that suits sake; the Ōgaki masu are almost all hinoki from Kiso and Tōnō.",
                ja:"清潔で狂いが少なく、香りが酒に合う。大垣の枡はほとんどが木曽と東濃のヒノキ。",
                zh:"潔淨、穩定、香氣與酒相合；大垣的枡幾乎全是木曾與東濃的扁柏。" }
            ],
            [
              { en:"Buddhist sculpture", ja:"仏像", zh:"佛像" },
              "寄木造",
              {
                en:"From the Heian period, hinoki became the standard wood for statues carved from joined blocks, replacing the kaya of earlier single-block sculpture.",
                ja:"平安時代以降、ヒノキは寄木造の仏像の標準の材となり、それ以前の一木造のカヤに取って代わった。",
                zh:"自平安時代起，扁柏成為寄木造（拼木雕造）佛像的標準用材，取代了早期一木造所用的日本榧。" }
            ],
            [
              { en:"Bark roofs", ja:"檜皮葺", zh:"檜皮葺屋頂" },
              "檜皮葺",
              {
                en:"Bark is stripped from living hinoki of about eighty years and more, without killing them, and laid in thin overlapping courses; a tree can be stripped again after eight to ten years. Many palace and shrine roofs are covered this way.",
                ja:"樹齢およそ八十年以上の生きたヒノキから、木を枯らさずに皮を剥ぎ、薄く重ねて葺く。一本の木は八〜十年後にふたたび剥ける。宮殿や社殿の多くの屋根がこうして葺かれる。",
                zh:"從約八十年以上的活扁柏上剝下樹皮而不傷其命，薄片層層交疊鋪成屋頂；同一棵樹八到十年後可再剝一次。許多宮殿與神社的屋頂以此法鋪設。" }
            ],
            [
              { en:"Kitchenware", ja:"台所道具", zh:"廚房器具" },
              "まな板・おひつ",
              {
                en:"Cutting boards, rice tubs and sushi tubs — though sawara is often preferred for tubs because it smells less.",
                ja:"まな板、おひつ、飯台。ただし桶には香りの少ないサワラが好まれることも多い。",
                zh:"砧板、飯桶與壽司桶——不過木桶常改用氣味較淡的花柏。" }
            ]
          ] }
      ] },
    { t:"section",
      id:"tono",
      title:{ en:"Tōnō hinoki", ja:"東濃ひのき", zh:"東濃檜木" },
      jp:"銘柄材",
      body:[
        { t:"p",
          text:{
            en:"“Tōnō hinoki” is the trade name of the hinoki grown in eastern Gifu, centred on the old Ura-Kiso villages of Tsukechi, Kawaue and Kashimo — now all part of Nakatsugawa — and extended by the brand's rules to neighbouring districts including Gero, Kamo, Seki and Gujō. The villages were the Gifu side of the Owari domain's Kiso forest, where cutting was forbidden or strictly controlled for two centuries; the forests they protected, and the planting that followed, gave the district its reputation. The brand is defined by four qualities: annual rings two to three millimetres wide, even and nearly circular; a pinkish, lustrous wood; small or no knots; and a strong scent. In 2007 eleven forest cooperatives formed a council to standardise the brand and coordinate its marketing.",
            ja:"「東濃ひのき」は岐阜東部に育つヒノキの商品名で、旧裏木曽の付知・川上・加子母——いずれもいまは中津川市——を中心とし、銘柄の決まりによって下呂・加茂・関・郡上などの近隣にも広がる。これらの村は尾張藩の木曽の森の岐阜側で、二世紀にわたって伐採が禁じられるか厳しく管理された。彼らが守った森と、その後の植林が、この地の名声を生んだ。銘柄は四つの性質で定義される——年輪幅二〜三ミリでそろい、ほぼ真円であること。桃色がかった艶のある材であること。節が小さいか、ないこと。香りが高いこと。二〇〇七年には十一の森林組合が協議会をつくり、銘柄の基準をそろえ、販売を調整するようになった。",
            zh:"「東濃檜木」是岐阜東部所產扁柏的商品名稱，以舊裏木曾的付知、川上與加子母——今皆屬中津川市——為中心，並依品牌規範擴及下呂、加茂、關、郡上等鄰近地區。這些村落是尾張藩木曾森林的岐阜一側，兩百年間禁伐或嚴格管制；它們守住的森林與其後的造林，造就了這一帶的名聲。品牌以四項特質定義：年輪寬二至三公釐、均勻且近乎正圓；木材帶粉紅色光澤；節小或無節；香氣濃郁。2007 年，十一個森林組合組成協議會，統一品牌標準並協調行銷。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Kiso hinoki", ja:"木曽ひのき", zh:"木曾檜木" },
              jp:"長野側",
              body:[
                { t:"ul",
                  plain:true,
                  items:[
                    { en:"From the Nagano side of the old Owari forests", ja:"旧尾張藩の森の長野側から", zh:"來自舊尾張藩森林的長野一側" },
                    {
                      en:"The name is associated with natural trees of 300 years and more from the national forest",
                      ja:"この名は国有林の樹齢三百年以上の天然木と結びつく",
                      zh:"此名多與國有林中三百年以上的天然木相連" },
                    { en:"Supplies the Misoma-hajime-sai at Agematsu", ja:"上松での御杣始祭に材を出す", zh:"供應上松的御杣始祭" }
                  ] }
              ] },
            { title:{ en:"Tōnō hinoki", ja:"東濃ひのき", zh:"東濃檜木" },
              jp:"岐阜側",
              body:[
                { t:"ul",
                  plain:true,
                  items:[
                    { en:"From Ura-Kiso and neighbouring eastern Gifu", ja:"裏木曽と東濃の近隣から", zh:"來自裏木曾與鄰近的岐阜東部" },
                    {
                      en:"Mostly carefully tended plantation, sold as a brand with defined traits",
                      ja:"多くは手入れの行き届いた人工林。性質を定めた銘柄として売られる",
                      zh:"多為精心撫育的人工林，以明定特質的品牌出售" },
                    {
                      en:"Ura-Kiso national forest supplies Ise; the old Denokōji reserve at Kashimo",
                      ja:"裏木曽国有林が伊勢に材を出す。加子母の旧出ノ小路備林",
                      zh:"裏木曾國有林供應伊勢；加子母的舊出之小路備林" }
                  ] }
              ] }
          ] },
        { t:"p",
          text:{
            en:"What gives Tōnō hinoki its narrow rings is partly the climate — cold winters and a short growing season at 500 to 1,000 metres — and partly the way it is grown: planted densely, thinned late and repeatedly, and pruned so that the lower trunk lays down clear wood. A hinoki post from these forests, twelve centimetres square and knot-free on four faces, is still the ideal of the Japanese carpenter. Its price, like that of all hinoki, is far below what it was in 1980, and the brand exists to hold as much of the premium as the market will bear.",
            ja:"東濃ひのきの年輪が狭いのは、ひとつには気候——標高五百〜千メートルの寒い冬と短い生育期——により、ひとつには育て方による。密に植え、遅く、繰り返し間伐し、幹の下部が無節の材をつくるよう枝打ちする。この森から出る、十二センチ角の四方無節の檜の柱は、いまも日本の大工の理想である。その値は、あらゆるヒノキと同じく一九八〇年に比べてはるかに低く、銘柄は市場が許すかぎりの上乗せを守るためにある。",
            zh:"東濃檜木年輪之所以窄，部分是氣候使然——海拔 500 至 1,000 公尺的寒冬與短暫的生長季——部分在於栽培方式：密植、晚疏且反覆疏伐、修枝使下段樹幹長出無節材。出自這片森林、十二公分見方、四面無節的扁柏柱，至今仍是日本木匠心中的理想。它的價格與所有扁柏一樣，遠低於 1980 年的水準；品牌的存在，就是為了在市場可接受的範圍內盡量保住溢價。" } }
      ] },
    { t:"section",
      id:"taiwanhinoki",
      title:{ en:"The Taiwanese cousins", ja:"台湾のいとこ", zh:"台灣的表親" },
      jp:"紅檜・台湾扁柏",
      body:[
        { t:"p",
          text:{
            en:"Two <em>Chamaecyparis</em> grow in the central mountains of Taiwan: the red cypress, <em>C. formosensis</em> (紅檜, benihi), which forms some of the largest and oldest trees in East Asia, and the Taiwan hinoki, <em>C. obtusa</em> var. <em>formosana</em> (扁柏). Under Japanese rule both were logged heavily, from Alishan above all, and some of the timber came to Japan for shrines and temples, including the great torii of the Meiji shrine in Tokyo. Taiwanese hinoki is denser and more fragrant than the Japanese tree, and it is where hinokitiol was first found. Taiwan ended the logging of its natural forests in the early 1990s. See <a href=\"taiwan.html\">Wood in Taiwan</a>.",
            ja:"台湾の中央山脈には二つのヒノキ属が育つ。東アジアでも屈指の大きく古い木をなすベニヒ（<em>C. formosensis</em>、紅檜）と、タイワンヒノキ（<em>C. obtusa</em> var. <em>formosana</em>、扁柏）である。日本統治下で両者は、なにより阿里山から大量に伐られ、材の一部は東京の明治神宮の大鳥居を含む社寺のために日本へ渡った。タイワンヒノキは日本のヒノキより密度が高く香りが強く、ヒノキチオールが初めて見つかった木でもある。台湾は一九九〇年代初めに天然林の伐採を終えた。<a href=\"taiwan.html\">台湾と木</a>を参照。",
            zh:"台灣中央山脈生長著兩種扁柏屬樹木：紅檜（<em>C. formosensis</em>），構成東亞數一數二巨大古老的樹木；以及台灣扁柏（<em>C. obtusa</em> var. <em>formosana</em>）。日治時期兩者皆遭大量伐採，尤以阿里山為甚，部分木材運往日本供寺社之用，包括東京明治神宮的大鳥居。台灣扁柏比日本扁柏更緻密、香氣更濃，檜木醇也是最早在它身上發現的。台灣於 1990 年代初停止天然林伐採。見<a href=\"taiwan.html\">台灣與木</a>。" } }
      ] },
    { t:"related",
      items:[
        { href:"fivetrees.html",
          why:{ en:"Hinoki's four protected relatives in Kiso.", ja:"木曽で守られたヒノキの四つの仲間。", zh:"扁柏在木曾受保護的四種近親。" } },
        { href:"gods.html", why:{ en:"Hinoki as the timber of the gods.", ja:"神の材としてのヒノキ。", zh:"作為神之木材的扁柏。" } },
        { href:"chemistry.html", why:{ en:"What the scent is made of.", ja:"香りは何でできているか。", zh:"香氣由什麼構成。" } },
        { href:"masu.html", why:{ en:"Hinoki made into the masu of Ōgaki.", ja:"大垣の枡になったヒノキ。", zh:"化身為大垣之枡的扁柏。" } }
      ] }
  ] };

/* ---- ---------------------------------------------- sugi */
GIFU.pages["sugi"] = { kicker:{ en:"The Forest · 04", ja:"森 · 04", zh:"森林 · 04" },
  title:{ en:"Sugi", ja:"スギ", zh:"日本柳杉" },
  jp:"杉 · Cryptomeria japonica",
  lede:{
    en:"Sugi is Japan's own tree — by most accounts found wild nowhere else — and its most planted: about four in every ten hectares of the country's plantations. It is soft, light, fast-growing, straight and fragrant; it built the country's houses, barrels and boats; and in the last half-century it has become the most resented tree in Japan, blamed for the spring pollen that afflicts a large part of the population. In Gifu it grows in the moist valleys of the Nagara and Hida rivers, and one of the oldest trees in Japan, the great cedar of Itoshiro, is a sugi. This page describes the tree, its wood, its many regional forms, and what is being done with it now.",
    ja:"スギは日本固有の木——多くの見方ではほかのどこにも自生しない——であり、最も多く植えられた木でもある。国の人工林のおよそ十ヘクタールに四ヘクタールを占める。柔らかく、軽く、成長が速く、まっすぐで、香りがよい。国の家を、樽を、舟をつくった。そしてこの半世紀、春の花粉で国民の大きな部分を悩ませる元凶として、日本で最も恨まれる木になった。岐阜では長良川や飛騨川の湿った谷に育ち、日本最古級の木の一つ、石徹白の大杉もスギである。この頁は、その木と材、多くの地域の型、そしていまそれに何がなされているかを述べる。",
    zh:"柳杉是日本特有的樹——一般認為除此之外沒有任何地方有野生族群——也是栽植最多的樹：全國人工林每十公頃約有四公頃是柳杉。它柔軟、輕、生長快、筆直、芳香；它建造了日本的房屋、酒樽與船隻；而在過去半世紀，它成了日本最遭怨恨的樹，被指為困擾大量國民的春季花粉元兇。在岐阜，它生長在長良川與飛驒川潮濕的谷地；日本最古老的樹木之一——石徹白大杉——也是柳杉。本頁介紹這種樹、它的木材、眾多地方型態，以及如今人們正拿它做什麼。" },
  body:[
    { t:"section",
      id:"tree",
      title:{ en:"The tree", ja:"木", zh:"樹" },
      jp:"日本固有種",
      body:[
        { t:"p",
          text:{
            en:"<em>Cryptomeria japonica</em> is the only species of its genus. It is endemic to Japan — the trees in China are thought to have been introduced long ago — and grows naturally from northern Honshū to Yakushima, where the famous Jōmon-sugi stands. It is the tallest tree in Japan, reaching 50 metres and, exceptionally, 60 or more, and among the longest-lived. It needs moisture: it grows best in deep, damp soils at the foot of slopes and in valley bottoms, while hinoki takes the drier ground above. Foresters' shorthand is “sugi at the bottom, hinoki in the middle, pine on the ridge”.",
            ja:"<em>Cryptomeria japonica</em>はスギ属の唯一の種である。日本固有で——中国のものは古くに持ち込まれたと考えられている——本州北部から、名高い縄文杉の立つ屋久島まで自生する。日本で最も背の高い木で、五十メートルに達し、まれに六十メートルを超えるものもあり、最も長寿の木の一つでもある。湿り気を必要とし、斜面の裾や谷底の深く湿った土でよく育つ。ヒノキはその上の乾いた土地をとる。林業家の略言は「尾根マツ、中ヒノキ、沢スギ」である。",
            zh:"<em>Cryptomeria japonica</em> 是柳杉屬唯一的物種。它是日本特有種——中國的族群被認為是很久以前引入的——自然分布從本州北部一直到屹立著著名繩文杉的屋久島。它是日本最高的樹，可達 50 公尺，少數甚至超過 60 公尺，也是最長壽的樹種之一。它需要濕氣：在坡腳與谷底深厚潮濕的土壤中長得最好，扁柏則占據其上較乾的地方。林業人員的口訣是「稜線松、山腰檜、溪邊杉」。" } },
        { t:"defs",
          items:[
            { term:{ en:"Omote-sugi and ura-sugi", ja:"表スギと裏スギ", zh:"表杉與裏杉" },
              jp:"太平洋側・日本海側",
              def:{
                en:"Two broad forms. Pacific-side sugi (<em>omote-sugi</em>) grows in regions of drier winters; Sea-of-Japan-side sugi (<em>ura-sugi</em>, including the variety called <em>ashiu-sugi</em>) is adapted to heavy snow, with flexible branches that shed it and the habit of rooting where lower branches touch the ground. Gifu straddles the divide and has both.",
                ja:"大きく二つの型がある。太平洋側の表スギは冬の乾いた地域に育つ。日本海側の裏スギ（芦生スギと呼ばれる変種を含む）は深い雪に適応し、しなやかな枝で雪を落とし、地面に触れた下枝から根を出す性質をもつ。岐阜は分水嶺をまたぎ、両方をもつ。",
                zh:"大致分為兩型。太平洋側的「表杉」生長於冬季較乾燥的地區；日本海側的「裏杉」（包括稱為蘆生杉的變種）適應深雪，枝條柔韌可抖落積雪，且下枝觸地處會生根。岐阜橫跨分水嶺，兩型皆有。" } },
            { term:{ en:"Cultivars and local brands", ja:"品種と産地銘柄", zh:"品種與產地品牌" },
              jp:"地スギ",
              def:{
                en:"Sugi has been propagated by cuttings for centuries, so most regions grow their own clones, each with its own growth and wood. The regional brands — Yoshino in Nara, Akita, Kitayama in Kyoto, Obi in Miyazaki, and in Gifu Nagara sugi — reflect those local strains as much as local silviculture.",
                ja:"スギは何世紀も挿し木で殖やされてきたため、たいていの地域が独自のクローンを育て、それぞれに成長と材の特色がある。産地の銘柄——奈良の吉野、秋田、京都の北山、宮崎の飫肥、そして岐阜の長良杉——は、その地の育林と同じほど、その地の系統を映している。",
                zh:"柳杉以扦插繁殖已有數百年，因此多數地區都栽培自己的無性系，各有其生長與材質特色。各地品牌——奈良的吉野、秋田、京都的北山、宮崎的飫肥，以及岐阜的長良杉——反映的既是地方栽培法，也是地方品系。" } },
            { term:{ en:"Low-pollen sugi", ja:"少花粉スギ", zh:"少花粉柳杉" },
              jp:"花粉症対策品種",
              def:{
                en:"Clones that produce much less pollen than ordinary sugi, and pollen-free ones, bred from selected trees. Under the government's 2023 pollen plan they are to make up more than nine-tenths of sugi seedlings within ten years.",
                ja:"選ばれた木から育成された、ふつうのスギよりはるかに花粉の少ないクローンと、花粉を出さないクローン。政府の二〇二三年の花粉症対策では、十年以内にスギ苗の九割以上をこれにする。",
                zh:"從選拔樹木育成、花粉量遠低於一般柳杉的無性系，以及無花粉品系。依政府 2023 年的花粉對策，十年內要讓它們占柳杉苗木九成以上。" } }
          ] },
        { t:"figure",
          caption:{
            en:"What Japan planted. Share of the national planted-forest area by species, in round figures: sugi about 44%, hinoki about 25%, larch about 10%, the rest pines, firs and others. Gifu's own private forest reverses the first two. Source: Forestry Agency, State of Forest Resources.",
            ja:"日本は何を植えたか。全国の人工林面積の樹種別の割合（概数）。スギ約四十四パーセント、ヒノキ約二十五パーセント、カラマツ約十パーセント、残りはマツ・モミ類など。岐阜の民有林は最初の二つが逆転する。出典：林野庁「森林資源の現況」。",
            zh:"日本種了什麼。全國人工林面積依樹種的比例（約數）：柳杉約 44%、扁柏約 25%、落葉松約 10%，其餘為松類、冷杉類等。岐阜的私有林前兩者則相反。資料來源：林野廳《森林資源現況》。" },
          svg:function(lang, L){
            var S = [
              { n:{en:"Sugi",ja:"スギ",zh:"柳杉"}, v:44, f:"#EEE1DF" },
              { n:{en:"Hinoki",ja:"ヒノキ",zh:"扁柏"}, v:25, f:"#F0EDE4" },
              { n:{en:"Larch",ja:"カラマツ",zh:"落葉松"}, v:10, f:"#E0E7E9" },
              { n:{en:"Other",ja:"その他",zh:"其他"}, v:21, f:"#E6E4E0" }
            ];
            var s = '<svg viewBox="0 0 760 170" role="img" aria-label="planted species">';
            s += '<text x="20" y="28" font-family="Georgia,serif" font-size="13" letter-spacing="2" fill="#55504A">'+(lang==="en"?"JAPAN'S PLANTED FOREST BY SPECIES":(lang==="ja"?"全国の人工林　樹種別面積":"全國人工林　依樹種面積"))+'</text>';
            var x=20, W=720;
            for (var i=0;i<S.length;i++){
              var w=S[i].v/100*W;
              s += '<rect x="'+x+'" y="44" width="'+w+'" height="54" fill="'+S[i].f+'" stroke="#8B857C"/>';
              s += '<text x="'+(x+8)+'" y="78" font-family="Georgia,serif" font-size="19" fill="#201E1B">≈'+S[i].v+'%</text>';
              s += '<text x="'+(x+4)+'" y="118" font-family="system-ui,sans-serif" font-size="11" fill="#201E1B">'+L(S[i].n)+'</text>';
              x+=w;
            }
            s += '<text x="20" y="156" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?"Round figures":(lang==="ja"?"概数":"約數"))+'</text>';
            s += '</svg>';
            return s;
          } }
      ] },
    { t:"section",
      id:"wood",
      title:{ en:"The wood", ja:"材", zh:"木材" },
      jp:"材としてのスギ",
      body:[
        { t:"p",
          text:{
            en:"Sugi is one of the lightest building timbers in Japan, at an air-dry density of about 0.38. It is soft enough to dent with a fingernail, splits straight, planes easily and smells sweeter and woodier than hinoki. The sapwood is white; the heartwood ranges from pale pink through red to a dark “black heart” (<em>kuroshin</em>), and the price of a board depends heavily on it. Its great practical problem is water: green sugi, and black-heart sugi in particular, can hold more than its own weight of water, and drying it without checking or collapse takes skill and time. Its virtues as a house timber are lightness, warmth, ease of working and a soft feel underfoot; its weaknesses are softness and low strength for its size, which is why sugi posts are larger than hinoki ones and sugi floors dent.",
            ja:"スギは日本の建築材のなかで最も軽いものの一つで、気乾密度はおよそ〇・三八である。爪でへこむほど柔らかく、まっすぐ割れ、鉋がかけやすく、ヒノキより甘く木質的な匂いがする。辺材は白く、心材は淡い桃色から赤、そして暗い「黒心」までさまざまで、板の値はそれに大きく左右される。大きな実際上の問題は水である。生のスギ、とくに黒心のスギは自重を超える水を含みうり、割れや落ち込みを出さずに乾かすには技と時間がいる。家の材としての長所は、軽さ、温かさ、加工のしやすさ、足ざわりの柔らかさ。短所は柔らかさと、寸法のわりの強さの低さで、スギの柱がヒノキより太く、スギの床がへこむのはそのためである。",
            zh:"柳杉是日本最輕的建築材之一，氣乾密度約 0.38。它軟到指甲就能壓出凹痕，劈裂筆直，容易刨削，氣味比扁柏更甜、更木質。邊材白色；心材從淡粉紅、紅色到深色的「黑心」皆有，木板價格很大程度取決於此。它最大的實際難題是水：生材柳杉，尤其是黑心柳杉，所含水分可能超過自身重量，要乾燥而不開裂、不塌陷，需要技術與時間。它作為建材的優點是輕、溫暖、易加工、腳感柔軟；缺點是軟，而且以尺寸計強度偏低——這就是柳杉柱比扁柏柱粗、柳杉地板容易凹陷的原因。" } },
        { t:"table",
          caption:{ en:"Sugi and hinoki compared", ja:"スギとヒノキの比較", zh:"柳杉與扁柏比較" },
          cols:["", { en:"Sugi", ja:"スギ", zh:"柳杉" }, { en:"Hinoki", ja:"ヒノキ", zh:"扁柏" }],
          rows:[
            [{ en:"Air-dry density", ja:"気乾密度", zh:"氣乾密度" }, "0.38", "0.44"],
            [
              { en:"Heartwood colour", ja:"心材の色", zh:"心材顏色" },
              { en:"pink to red to near-black", ja:"桃色〜赤〜黒に近い", zh:"粉紅至紅至近黑" },
              { en:"pale pinkish-yellow", ja:"淡い桃黄色", zh:"淡粉黃" }
            ],
            [
              { en:"Scent", ja:"香り", zh:"香氣" },
              { en:"sweet, woody", ja:"甘く木質的", zh:"甜、木質" },
              { en:"citrus, resinous", ja:"柑橘・樹脂", zh:"柑橘、樹脂" }
            ],
            [
              { en:"Where it grows best", ja:"よく育つ場所", zh:"最適生長地" },
              { en:"moist valley bottoms", ja:"湿った谷底", zh:"潮濕谷底" },
              { en:"well-drained mid-slopes", ja:"水はけのよい中腹", zh:"排水良好的山腰" }
            ],
            [
              { en:"Drying", ja:"乾燥", zh:"乾燥" },
              { en:"difficult; very wet green", ja:"難しい。生材は非常に湿る", zh:"困難；生材極濕" },
              { en:"easier", ja:"比較的容易", zh:"較容易" }
            ],
            [{ en:"Standing price, March 2024", ja:"立木価格（二〇二四年三月）", zh:"立木價格（2024 年 3 月）" }, "¥4,127/m³", "¥8,940/m³"],
            [
              { en:"Signature uses", ja:"代表的な用途", zh:"代表用途" },
              { en:"ceilings, panelling, barrels, boats, posts", ja:"天井・羽目板・樽・舟・柱", zh:"天花板、壁板、酒樽、船、柱" },
              { en:"shrines, sills, baths, masu, posts", ja:"社殿・土台・風呂・枡・柱", zh:"社殿、地檻、浴桶、枡、柱" }
            ]
          ] }
      ] },
    { t:"section",
      id:"gifu",
      title:{ en:"Sugi in Gifu", ja:"岐阜のスギ", zh:"岐阜的柳杉" },
      jp:"長良杉・石徹白",
      body:[
        { t:"p",
          text:{
            en:"Although Gifu is hinoki country, sugi dominates wherever the ground is wet enough: the deep valleys of the Nagara and its tributaries around Gujō, the Hida river gorges, the heavy-snow districts of the upper Ibi. The Nagara-basin sugi is marketed as <em>Nagara sugi</em>, prized for even grain with thick latewood, fine texture and a mix of red and white heart that the trade calls <em>genpei</em>; local mills dry it slowly to keep its colour. Much of Gifu's sugi, like Japan's, is now reaching sizes that its sawmills were not designed for — large logs from overmature plantations — which is one reason for the push towards glulam and CLT, which can use it in smaller pieces.",
            ja:"岐阜は檜の国だが、土地が十分に湿っているところではスギが優勢である——郡上周辺の長良川とその支流の深い谷、飛騨川の峡谷、揖斐川上流の豪雪地帯。長良川流域のスギは「長良杉」として売られ、晩材の厚いそろった木目、細かな肌理、業界が「源平」と呼ぶ赤白まじりの心材で好まれる。地元の製材所は色を保つためにゆっくり乾かす。岐阜のスギの多くは、日本のスギと同じく、製材所が想定していなかった大きさ——伐期を過ぎた人工林の大径材——に達しつつある。小さな部材で使える集成材やCLTへの傾きの理由の一つはそこにある。",
            zh:"雖然岐阜是扁柏之鄉，但凡地面夠濕之處，柳杉便居主導：郡上一帶長良川及其支流的深谷、飛驒川峽谷、揖斐川上游的豪雪地區。長良川流域的柳杉以「長良杉」之名行銷，以晚材厚而均勻的紋理、細緻的木肌，以及業界稱為「源平」的紅白相間心材受到青睞；當地製材所緩慢乾燥以保其色澤。岐阜的柳杉與全國一樣，許多正長到製材廠當初未設計處理的尺寸——過熟人工林的大徑材——這也是業界推動集成材與 CLT 的原因之一，因為它們能以較小的構件使用這些木材。" } },
        { t:"p",
          text:{
            en:"Gifu also has one of the oldest living sugi in Japan. The great cedar of Itoshiro in Gujō, on the old pilgrimage route to Hakusan, is estimated at more than 1,800 years old, 24 metres tall and 14 metres round; half of it is dead. It was declared a Special Natural Monument in 1957, a year before the district was transferred from Fukui to Gifu.",
            ja:"岐阜には日本最古級の生きたスギもある。白山への古い禅定道にある郡上の石徹白の大杉は、推定樹齢千八百年超、樹高二十四メートル、幹囲十四メートル。半分は枯れている。一九五七年に特別天然記念物に指定され、その翌年、この地域は福井から岐阜に移された。",
            zh:"岐阜也擁有日本最古老的活柳杉之一。位於郡上、通往白山古朝聖道上的石徹白大杉，估計樹齡逾 1,800 年，高 24 公尺、周長 14 公尺，半邊已枯死。它於 1957 年被指定為特別天然紀念物，隔年該地區從福井縣劃入岐阜縣。" } }
      ] },
    { t:"section",
      id:"pollen",
      title:{ en:"The pollen problem", ja:"花粉の問題", zh:"花粉問題" },
      jp:"スギ花粉症",
      body:[
        { t:"p",
          text:{
            en:"Sugi pollinates in late winter and early spring, and a mature plantation releases enormous quantities of pollen from its male cones. Allergy to it, first reported in the 1960s, has become one of Japan's commonest chronic conditions, and its prevalence has been rising by roughly ten percentage points a decade. The cause is not sugi as such but the age structure of the post-war plantations: millions of hectares of trees planted at the same time, all now at the age of maximum flowering, and too few being felled. In 2023 the government announced a thirty-year plan to halve pollen output.",
            ja:"スギは晩冬から早春に花粉を飛ばし、成熟した人工林は雄花から膨大な量の花粉を放つ。一九六〇年代に初めて報告されたスギ花粉症は、日本で最も多い慢性の病の一つとなり、有病率はおよそ十年ごとに十ポイントずつ上がってきた。原因はスギそのものではなく、戦後の人工林の齢級構成である——同じころに植えられた何百万ヘクタールの木が、いっせいに最も花を咲かせる齢にあり、伐られるものが少なすぎる。二〇二三年、政府は花粉の発生量を三十年で半減させる計画を示した。",
            zh:"柳杉在冬末春初授粉，一片成熟人工林的雄毬花會釋放出驚人數量的花粉。1960 年代首度報告的柳杉花粉症，已成為日本最常見的慢性疾病之一，盛行率大約每十年上升十個百分點。原因不在柳杉本身，而在戰後人工林的齡級結構：同時期栽植的數百萬公頃樹木，如今全都處於開花最旺盛的年齡，而被伐採的太少。2023 年，政府公布以三十年將花粉產量減半的計畫。" } },
        { t:"table",
          caption:{ en:"The 2023 pollen plan, in numbers", ja:"二〇二三年の花粉症対策を数字で", zh:"2023 年花粉對策的數字" },
          cols:[{ en:"Measure", ja:"施策", zh:"措施" }, { en:"Now", ja:"現状", zh:"現況" }, { en:"Target", ja:"目標", zh:"目標" }],
          rows:[
            [
              { en:"Pollen-source sugi plantations (20+ years)", ja:"花粉を出すスギ人工林（二十年生以上）", zh:"會產生花粉的柳杉人工林（20 年生以上）" },
              "4.31 million ha",
              { en:"about −20% in 10 years", ja:"十年でおよそ二割減", zh:"十年內約減兩成" }
            ],
            [{ en:"Sugi felling", ja:"スギの伐採", zh:"柳杉伐採" }, "≈ 50,000 ha/yr", "≈ 70,000 ha/yr"],
            [{ en:"Sugi timber demand", ja:"スギ材の需要", zh:"柳杉材需求" }, "12.4 million m³", "17.1 million m³"],
            [
              { en:"Low-pollen share of sugi seedlings", ja:"スギ苗に占める花粉の少ない苗", zh:"少花粉苗占柳杉苗比例" },
              "—",
              { en:"over 90% in 10 years", ja:"十年で九割以上", zh:"十年內逾九成" }
            ],
            [
              { en:"Pollen output", ja:"花粉の発生量", zh:"花粉產量" },
              "—",
              { en:"halved in 30 years", ja:"三十年で半減", zh:"三十年內減半" }
            ]
          ] },
        { t:"note",
          label:{ en:"The paradox", ja:"逆説", zh:"弔詭之處" },
          text:{
            en:"The cure for too much sugi pollen is more sugi wood: the plan works only if the timber from the felled plantations finds buyers, which is why it is tied to programmes promoting sugi in housing, public buildings and furniture.",
            ja:"スギ花粉の多すぎることへの処方は、より多くのスギ材である。計画は、伐られた人工林の材に買い手がつかなければ成り立たない。それが、住宅・公共建築・家具にスギを広める施策と結びつけられている理由である。",
            zh:"治療柳杉花粉過多的良方，是更多的柳杉木材：唯有伐下的人工林木材找得到買家，計畫才能成功——這正是它與推廣柳杉用於住宅、公共建築與家具的方案綁在一起的原因。" } }
      ] },
    { t:"section",
      id:"newuses",
      title:{ en:"New work for an old timber", ja:"古い材の新しい仕事", zh:"老木材的新工作" },
      jp:"圧縮スギ・CLT",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Compressed sugi", ja:"圧縮スギ", zh:"壓縮柳杉" },
              jp:"圧密加工",
              def:{
                en:"Sugi is too soft for chairs and floors. Hida Sangyō, drawing on the steam-softening knowledge of its bentwood tradition, developed a process in which dried sugi is steamed until pliable and pressed so that its hollow cells collapse, raising its density and hardness towards those of hardwoods; the pieces can be bent or moulded in the same press. The company formed a sugi research cooperative in 2004 and supplied compressed-sugi flooring to a school in Mie in 2010; it now makes whole furniture lines in compressed sugi. The cell walls of any wood have a density of about 1.5 g/cm³, so there is a lot of room to compress a timber of 0.38.",
                ja:"スギは椅子や床には柔らかすぎる。飛騨産業は曲木の伝統で培った蒸煮による軟化の知識をもとに、乾燥したスギを蒸してしなやかにし、圧してその中空の細胞をつぶし、密度と硬さを広葉樹に近づける方法を育てた。同じプレスで曲げたり成形したりもできる。同社は二〇〇四年にスギの研究組合をつくり、二〇一〇年には三重の学校に圧縮スギの床材を納めた。いまは圧縮スギで家具のシリーズ全体をつくる。どの木も細胞壁の密度はおよそ一・五グラム毎立方センチメートルだから、〇・三八の材には圧縮する余地が大きい。",
                zh:"柳杉太軟，不適合做椅子與地板。飛驒產業憑藉曲木傳統中的蒸煮軟化知識，發展出一套工法：將乾燥的柳杉蒸到柔軟，再加壓使其中空細胞塌陷，讓密度與硬度接近闊葉材；同一台壓機還能同時彎曲或成形。公司於 2004 年成立柳杉研究組合，2010 年為三重縣一所學校提供壓縮柳杉地板，如今已用壓縮柳杉製作整個家具系列。任何木材的細胞壁密度約為 1.5 g/cm³，因此密度 0.38 的木材有很大的壓縮空間。" } },
            { term:{ en:"CLT and glulam", ja:"CLT・集成材", zh:"CLT 與集成材" },
              jp:"直交集成板",
              def:{
                en:"Cross-laminated timber — boards glued in layers at right angles — turns sugi's lightness from a weakness into a virtue: panels are stiff, dimensionally stable and light enough to build multi-storey buildings quickly. Japan standardised CLT in 2013 and has promoted it heavily as an outlet for plantation sugi. See <a href=\"engineered.html\">Engineered Wood</a>.",
                ja:"直交集成板——板を層ごとに直角に貼り重ねたもの——は、スギの軽さを弱点から長所に変える。パネルは剛く、寸法が安定し、中層の建物を速く建てられるほど軽い。日本は二〇一三年にCLTを規格化し、人工林のスギの出口として強く推してきた。<a href=\"engineered.html\">エンジニアードウッド</a>を参照。",
                zh:"直交集成材（CLT）——把木板以直角逐層膠合——讓柳杉的「輕」從弱點變為優點：板材剛性高、尺寸穩定，且輕得足以快速蓋起多層建築。日本於 2013 年制定 CLT 標準，並大力推廣它作為人工林柳杉的出路。見<a href=\"engineered.html\">工程木材</a>。" } },
            { term:{ en:"Sake barrels and cedar balls", ja:"酒樽と杉玉", zh:"酒樽與杉玉" },
              jp:"樽材",
              def:{
                en:"Sugi has always been the wood of sake. Barrels were made from staves of sugi cut to include both red heart and white sapwood, which gives the characteristic resin and aroma of <em>taruzake</em>; and every brewery hangs a ball of sugi sprigs, the <em>sugidama</em>, to say that the new sake is ready. See <a href=\"vessels.html\">Buckets, Barrels &amp; Boxes</a>.",
                ja:"スギは昔から酒の木である。樽は赤身と白太の両方を含むよう挽いたスギの側板でつくられ、それが樽酒特有の木香をもたらす。そしてどの蔵も、新酒ができたことを告げる杉の葉の玉、杉玉を掲げる。<a href=\"vessels.html\">桶・樽・曲物</a>を参照。",
                zh:"柳杉向來是酒之木。酒樽以同時包含紅色心材與白色邊材的柳杉桶板製成，賦予樽酒獨特的木香；每家酒藏也都懸掛柳杉枝葉紮成的「杉玉」，告知新酒已成。見<a href=\"vessels.html\">桶、樽與曲物</a>。" } }
          ] }
      ] },
    { t:"related",
      items:[
        { href:"hinoki.html", why:{ en:"The other great building tree.", ja:"もう一つの偉大な建築の木。", zh:"另一種偉大的建築用樹。" } },
        { href:"moisture.html", why:{ en:"Why sugi holds so much water.", ja:"スギがなぜそれほど水を含むのか。", zh:"柳杉為何含水量如此之高。" } },
        { href:"drying.html", why:{ en:"How sugi is dried without cracking.", ja:"スギを割らずに乾かす方法。", zh:"如何乾燥柳杉而不開裂。" } },
        { href:"houses.html",
          why:{ en:"The furniture houses turning sugi into chairs.", ja:"スギを椅子に変える家具の作り手。", zh:"把柳杉變成椅子的家具製作者。" } }
      ] }
  ] };

/* ---- ----------------------------------------- fivetrees */
GIFU.pages["fivetrees"] = { kicker:{ en:"The Forest · 05", ja:"森 · 05", zh:"森林 · 05" },
  title:{ en:"The Five Trees of Kiso", ja:"木曽五木", zh:"木曾五木" },
  jp:"あさひねこ · 停止木 · 木一本首一つ",
  lede:{
    en:"In 1708 the Owari domain, which ruled the forests of the Kiso valley and the Ura-Kiso villages on what is now the Gifu side, forbade the cutting of four conifers — hinoki, sawara, asunaro and kōyamaki — anywhere in its mountains, on pain of death; a fifth, nezuko, was added some years later, and together they became the five trees of Kiso. The rule was summed up in a phrase still widely known in the region: <em>ki ippon, kubi hitotsu</em>, “one tree, one head”. It is often cited as one of the earliest large-scale forest conservation laws in the world, and the forests it protected are the source of the Ise shrine timber today. This page explains why the domain did it, how the system worked, what happened to it after 1868, and what the five trees are.",
    ja:"一七〇八年、木曽谷の森と、いまの岐阜側にあたる裏木曽の村々の森を治めていた尾張藩は、ヒノキ・サワラ・アスナロ・コウヤマキの四種の針葉樹を、藩の山のどこにおいても、死をもって伐ることを禁じた。数年のちにネズコが加えられ、この五種が木曽五木となった。この決まりは、地元でいまも広く知られる一句にまとめられた——「木一本、首一つ」。それは世界でも早い大規模な森林保護の法の一つとしてしばしば挙げられ、それが守った森は、いまも伊勢の神宮の御用材の源である。この頁は、藩がなぜそうしたのか、その仕組みがどう働いたのか、一八六八年以後どうなったのか、そして五木とは何かを説く。",
    zh:"1708 年，統治木曾谷森林、以及今日岐阜一側裏木曾各村森林的尾張藩，下令在其轄下所有山林中禁止砍伐四種針葉樹——扁柏、花柏、翌檜與日本金松——違者處死；數年後又加入香柏，五者合稱「木曾五木」。這條規定被濃縮成一句當地至今仍廣為人知的話：「木一本，首一顆」。它常被列為世界上最早的大規模森林保育法令之一，而它所保護的森林，至今仍是伊勢神宮御用材的來源。本頁說明藩為何這麼做、這套制度如何運作、1868 年後它的命運如何，以及這五種樹是什麼。" },
  body:[
    { t:"section",
      id:"five",
      title:{ en:"The five", ja:"五木", zh:"五木" },
      jp:"あすなろ・さわら・ひのき・ねずこ・こうやまき",
      body:[
        { t:"p",
          text:{
            en:"The trees are remembered by the mnemonic <em>asahi neko</em>, “morning-sun cat”, from the first syllables of asunaro, sawara, hinoki, nezuko and kōyamaki. All are conifers of the Cupressaceae or its close relatives, all grow in the Kiso forests, and all yield fine, straight, durable timber. The ban did not start with all five: hinoki was protected first, and the others were added partly to prevent “mistakes” — a woodcutter felling a protected hinoki and claiming it was a sawara.",
            ja:"五木は「あさひねこ」という覚え方で記憶される——アスナロ、サワラ、ヒノキ、ネズコ、コウヤマキの頭の音である。いずれもヒノキ科かその近縁の針葉樹で、みな木曽の森に育ち、細かくまっすぐで長持ちする材を出す。禁は五つ同時に始まったのではない。まずヒノキが守られ、ほかは、ひとつには「誤伐」——杣が守られたヒノキを伐ってサワラだと言い張ること——を防ぐために加えられた。",
            zh:"這五種樹以「あさひねこ」（朝陽之貓）的口訣記憶——取翌檜、花柏、扁柏、香柏與日本金松日文名的首音。它們都是柏科或其近緣的針葉樹，都生長在木曾森林，都能產出細緻、筆直、耐久的木材。禁令並非五種同時開始：最先受保護的是扁柏，其餘則部分是為了防止「誤伐」而追加——以免伐木人砍了受保護的扁柏，卻聲稱那是花柏。" } },
        { t:"table",
          caption:{ en:"The five trees of Kiso", ja:"木曽五木", zh:"木曾五木" },
          cols:[
            { en:"Tree", ja:"樹種", zh:"樹種" },
            { en:"Botanical name", ja:"学名", zh:"學名" },
            { en:"Density", ja:"気乾密度", zh:"氣乾密度" },
            { en:"Character and traditional use", ja:"性質と伝統的な用途", zh:"特性與傳統用途" }
          ],
          numCols:[2],
          rows:[
            [
              { en:"Hinoki", ja:"ヒノキ", zh:"扁柏" },
              "Chamaecyparis obtusa",
              "0.44",
              {
                en:"The first and most valuable: castles, shrines, temples; durable and fragrant.",
                ja:"最初の、最も価値ある木。城・社殿・寺院。耐久性があり香り高い。",
                zh:"最早也最珍貴：城、社殿、寺院；耐久而芳香。" }
            ],
            [
              { en:"Sawara", ja:"サワラ", zh:"花柏" },
              "Chamaecyparis pisifera",
              "0.34",
              {
                en:"Softer and less scented than hinoki, water-resistant; rice tubs, buckets, Shunkei ware.",
                ja:"ヒノキより柔らかく香りは淡く、水に強い。飯櫃・桶・春慶塗。",
                zh:"比扁柏軟、香淡、耐水；飯桶、水桶、春慶器。" }
            ],
            [
              { en:"Asunaro", ja:"アスナロ", zh:"翌檜" },
              "Thujopsis dolabrata",
              "0.45",
              {
                en:"“Tomorrow I will be hinoki”, by folk etymology; rich in hinokitiol, rot-resistant; sills and baths.",
                ja:"俗説に「明日はヒノキになろう」。ヒノキチオールに富み腐りにくい。土台・風呂。",
                zh:"民間語源說是「明天要成為扁柏」；富含檜木醇、耐腐；地檻與浴桶。" }
            ],
            [
              { en:"Nezuko (kurobe)", ja:"ネズコ（クロベ）", zh:"香柏（黑檜）" },
              "Thuja standishii",
              "0.36",
              {
                en:"Light, aromatic, dark heart; ceilings, joinery, geta; the bark was used for fire-cord.",
                ja:"軽く香り、心材は暗色。天井・建具・下駄。樹皮は火縄に使われた。",
                zh:"輕、有香氣、心材色深；天花板、門窗、木屐；樹皮曾用來製作火繩。" }
            ],
            [
              { en:"Kōyamaki", ja:"コウヤマキ", zh:"日本金松" },
              "Sciadopitys verticillata",
              "0.42",
              {
                en:"Exceptionally water- and rot-resistant; tubs, boat parts, and in ancient times coffins.",
                ja:"水と腐朽にきわめて強い。桶、舟の部材、古代には棺。",
                zh:"極耐水、耐腐；木桶、船隻構件，古代用作棺木。" }
            ]
          ] }
      ] },
    { t:"section",
      id:"why",
      title:{ en:"Why the domain protected them", ja:"藩はなぜ守ったのか", zh:"藩為何保護它們" },
      jp:"過伐から保護へ",
      body:[
        { t:"p",
          text:{
            en:"The seventeenth century was an age of building on a scale Japan had never seen. Hideyoshi's castles at Osaka and Fushimi, the Tokugawa castles at Edo, Nagoya and Sunpu, the temples, the cities rebuilt after fires — above all Edo after the great Meireki fire of 1657 — and the ships of the coastal trade all drew on the same few accessible forests of old conifers. Kiso was the richest of them, and in the first decades of Owari rule it was cut hard: the domain's own later surveys found much of the valley stripped of its best trees. From 1665 the domain reorganised forest management under a timber magistrate at Agematsu, closed the best remaining stands entirely, reserved hawk-nesting forests for the lord's falconry, and began to limit what could be cut elsewhere. The ban of 1708 extended the protection of the five trees to all the domain's forests.",
            ja:"十七世紀は、日本がかつて見たことのない規模で建てる時代だった。大坂と伏見の秀吉の城、江戸・名古屋・駿府の徳川の城、寺院、火事のあとに建て直された町——なかでも一六五七年の明暦の大火ののちの江戸——そして沿岸の廻船が、みな手の届く同じ少数の古い針葉樹林に頼った。木曽はその最も豊かな森であり、尾張藩の支配の初めの数十年、激しく伐られた。藩自身がのちに行った調べは、谷の多くが最良の木を失っていることを見いだした。一六六五年から藩は上松の材木奉行のもとに山の管理を組み直し、残された最良の林分を完全に閉ざし（留山）、藩主の鷹狩のための巣山を定め、ほかの場所で伐れるものを制限しはじめた。一七〇八年の禁は、五木の保護を藩のすべての山に広げた。",
            zh:"十七世紀是日本前所未見的大興土木時代。秀吉在大坂與伏見的城、德川在江戶、名古屋與駿府的城、寺院、火災後重建的城市——尤其是 1657 年明曆大火後的江戶——以及沿岸貿易的船隻，都取材於同樣少數可到達的老針葉林。木曾是其中最豐饒的，尾張藩統治初期的數十年被砍伐得很凶：藩自己後來的調查發現，谷中許多地方的良木已被伐盡。自 1665 年起，藩在上松設材木奉行重整山林管理，將剩下最好的林分完全封閉（留山），劃定供藩主鷹獵用的鷹巢保護林（巢山），並開始限制其他地方可砍伐的範圍。1708 年的禁令，把五木的保護擴及藩內所有山林。" } },
        { t:"figure",
          caption:{
            en:"Four centuries of forest regimes in Kiso and Ura-Kiso. Heavy cutting under the early Owari lords gave way to closures from 1665 and the tree ban of 1708 (the fifth tree was added later); the Meiji state took the forests in 1869 and the imperial household in 1889; they became national forest in 1947, and in 2014 a 16,579-hectare restoration area, the Kiso Yūkyū no Mori, was set aside across Nagano and Nakatsugawa.",
            ja:"木曽と裏木曽の四百年の山の体制。尾張藩初期の大伐採は、一六六五年からの留山と一七〇八年の停止木の禁（五木目はのちに加わる）に道をゆずった。明治国家は一八六九年に、皇室は一八八九年に森を取った。一九四七年に国有林となり、二〇一四年には長野と中津川にまたがる一万六千五百七十九ヘクタールの回復の区域「木曽悠久の森」が設けられた。",
            zh:"木曾與裏木曾四百年來的山林體制。尾張藩初期的大規模伐採，自 1665 年起讓位於封山，1708 年再有停止木禁令（第五種其後才加入）；明治國家於 1869 年、皇室於 1889 年接收森林；1947 年成為國有林；2014 年，橫跨長野與中津川、面積 16,579 公頃的復育區「木曾悠久之森」劃設完成。" },
          svg:function(lang, L){
            var P = [
              { a:1600, b:1665, n:{en:"heavy cutting",ja:"大伐採",zh:"大量伐採"}, f:"#EEE1DF" },
              { a:1665, b:1708, n:{en:"closures",ja:"留山・巣山",zh:"封山"}, f:"#EDE5D2" },
              { a:1708, b:1869, n:{en:"five-tree ban",ja:"五木の禁",zh:"五木禁令"}, f:"#E0E6DB" },
              { a:1869, b:1889, n:{en:"state",ja:"官林",zh:"官林"}, f:"#E0E7E9" },
              { a:1889, b:1947, n:{en:"imperial forest",ja:"御料林",zh:"御料林"}, f:"#E6E2EC" },
              { a:1947, b:2014, n:{en:"national forest",ja:"国有林",zh:"國有林"}, f:"#E9ECEE" },
              { a:2014, b:2030, n:{en:"restoration",ja:"悠久の森",zh:"悠久之森"}, f:"#E0E6DB" }
            ];
            var x0=20, x1=740, a0=1600, a1=2030, k=(x1-x0)/(a1-a0);
            function X(y){ return x0+(y-a0)*k; }
            var s = '<svg viewBox="0 0 760 200" role="img" aria-label="regimes">';
            for (var i=0;i<P.length;i++){
              var xa=X(P[i].a), xb=X(P[i].b);
              s += '<rect x="'+xa+'" y="50" width="'+(xb-xa)+'" height="54" fill="'+P[i].f+'" stroke="#B4AC9C"/>';
              var yy = (xb-xa)>70 ? 82 : (i%2? 40 : 124);
              var anc = (xb-xa)>70 ? "start" : "middle";
              var tx = (xb-xa)>70 ? xa+6 : (xa+xb)/2;
              s += '<text x="'+tx+'" y="'+yy+'" text-anchor="'+anc+'" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+L(P[i].n)+'</text>';
            }
            var T=[1600,1665,1708,1800,1869,1889,1947,2014];
            for (var t=0;t<T.length;t++){ s += '<text x="'+X(T[t])+'" y="'+(t%2?160:148)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+T[t]+'</text>'; s += '<line x1="'+X(T[t])+'" y1="104" x2="'+X(T[t])+'" y2="'+(t%2?150:138)+'" stroke="#CDC6B9"/>'; }
            s += '</svg>';
            return s;
          } }
      ] },
    { t:"section",
      id:"system",
      title:{ en:"How the system worked", ja:"仕組みはどう働いたか", zh:"制度如何運作" },
      jp:"留山・巣山・明山",
      body:[
        { t:"p",
          text:{
            en:"The popular image of the five-tree ban is of a forest locked shut. The reality was more nuanced, and more interesting. The domain divided its mountains into three kinds of land, and the rules differed between them.",
            ja:"五木の禁の一般的な印象は、鍵をかけて閉ざされた森である。実際はもっと入り組んでおり、もっと興味深い。藩は山を三種の土地に分け、決まりはそれぞれで異なった。",
            zh:"一般人對五木禁令的印象，是一座被鎖起來的森林。實際情況更細緻，也更有意思：藩把山林分為三類土地，各有不同的規則。" } },
        { t:"defs",
          items:[
            { term:{ en:"Tomeyama — closed forest", ja:"留山", zh:"留山（封閉林）" },
              jp:"とめやま",
              def:{
                en:"The best remaining stands, closed to everyone: no entry, no cutting of anything. These were the domain's timber reserve, and several became the imperial and then the shrine reserve forests of the modern period.",
                ja:"残された最良の林分で、誰にも閉ざされた。立ち入りも、何を伐ることも禁じられた。藩の用材の備えであり、いくつかは近代の御料林、ついで神宮備林となった。",
                zh:"剩下最好的林分，對所有人封閉：不得進入，任何樹都不得砍伐。這些是藩的木材儲備，其中數處後來成為近代的御料林與神宮備林。" } },
            { term:{ en:"Suyama — nesting forest", ja:"巣山", zh:"巢山（鷹巢林）" },
              jp:"すやま",
              def:{
                en:"Forests reserved to protect the nests of hawks taken for the lord's falconry. Falconry was a privilege of rank, and its birds were valuable enough to justify closing a forest around them.",
                ja:"藩主の鷹狩に用いる鷹の巣を守るために留め置かれた森。鷹狩は身分の特権で、その鳥は、まわりの森を閉ざすに値するほど貴重だった。",
                zh:"為保護供藩主鷹獵用之鷹巢而保留的森林。鷹獵是身分特權，其鷹隻珍貴到足以為之封閉周圍的森林。" } },
            { term:{ en:"Akeyama — open forest", ja:"明山", zh:"明山（開放林）" },
              jp:"あけやま",
              def:{
                en:"By far the largest category — by some estimates about nine-tenths of the Kiso forests. Here villagers could cut freely for fuel, charcoal, tools and their own building, and gather food, provided they did not cut the five protected conifers or keyaki. The domain also granted the valley an annual allowance of timber for its crafts — bentwood boxes, woven hinoki hats, lacquer bases — which were an important source of cash.",
                ja:"群を抜いて最大の区分で、一説には木曽の森のおよそ九割。ここでは村人は、守られた五種の針葉樹とケヤキを伐らないかぎり、燃料・炭・道具・自家の建築のために自由に伐り、食べ物を採ることができた。藩はまた谷に、曲物・檜笠・漆器の木地など工芸のための材を毎年与え、それは大事な現金の源であった。",
                zh:"範圍遠大於其他兩類——據部分估計約占木曾森林九成。在此，只要不砍五種受保護的針葉樹與櫸木，村民可以自由伐木作燃料、木炭、工具與自家建築，也可採集食物。藩還每年撥給谷中一定額度的木材供工藝之用——曲物、檜笠、漆器木胎——這是重要的現金來源。" } },
            { term:{ en:"The inspection posts", ja:"白木改番所", zh:"白木檢查所" },
              jp:"しらきあらためばんしょ",
              def:{
                en:"To stop protected timber leaving the valley disguised as permitted goods, the domain set up checkpoints on the roads. One of them stood from 1749 to 1869 at Magome pass — on the border of what is now Nakatsugawa in Gifu — where every load of worked wood (<em>shiraki</em>) coming out of Kiso was inspected.",
                ja:"守られた材が許された品に偽装されて谷の外へ出るのを止めるため、藩は街道に番所を設けた。その一つは一七四九年から一八六九年まで馬籠峠——いまの岐阜県中津川市の境——にあり、木曽から出る加工した木（白木）の荷はすべてそこで改められた。",
                zh:"為防止受保護木材偽裝成許可貨品運出谷外，藩在道路上設置關卡。其中一處自 1749 年至 1869 年設於馬籠峠——位於今日岐阜縣中津川市的邊界——所有從木曾運出的加工木品（白木）都要在此受檢。" } }
          ] },
        { t:"note",
          label:{ en:"“One tree, one head”", ja:"「木一本、首一つ」", zh:"「一木一首」" },
          text:{
            en:"The phrase states the maximum penalty, and executions for illegal felling are recorded. But the system was enforced mostly through inspection, confiscation, fines and the obligations of village headmen, and it worked because the open forest left villagers enough to live on. When the Meiji state took away the open forest too, conflict followed at once.",
            ja:"この句は最も重い罰を言い表しており、盗伐による処刑も記録にある。しかし仕組みはおもに、改め・没収・過料・庄屋の責任によって行われ、明山が村人に暮らせるだけのものを残していたから成り立った。明治国家が明山まで取り上げると、ただちに争いが起きた。",
            zh:"這句話說的是最重的刑罰，盜伐遭處決的案例也確有記載。但此制度主要靠檢查、沒收、罰金與村長的責任來執行；它之所以行得通，是因為開放林給村民留下了足以維生的資源。當明治國家連開放林也一併收走時，衝突隨即爆發。" } }
      ] },
    { t:"section",
      id:"after",
      title:{ en:"After 1868", ja:"一八六八年以後", zh:"1868 年之後" },
      jp:"官林から悠久の森へ",
      body:[
        { t:"timeline",
          items:[
            { year:"1869",
              era:{ en:"Meiji 2", ja:"明治二年", zh:"明治二年" },
              title:{ en:"The domain forests become state forests", ja:"藩有林が官林に", zh:"藩有林改為官林" },
              jp:"官林",
              text:{
                en:"With the return of the domains to the emperor, the Owari forests pass to the government. The open-forest rights of the villagers are not recognised.",
                ja:"版籍奉還とともに尾張藩の森は政府のものとなる。村人の明山での権利は認められない。",
                zh:"隨著版籍奉還，尾張藩的森林歸政府所有，村民在明山的權利未獲承認。" } },
            { year:"1889",
              era:{ en:"Meiji 22", ja:"明治二十二年", zh:"明治二十二年" },
              title:{ en:"Imperial forest", ja:"御料林に", zh:"改為御料林" },
              jp:"御料林",
              text:{
                en:"The Kiso forests are transferred to the imperial household as crown forest, and access is closed still further.",
                ja:"木曽の森は皇室の御料林に移され、立ち入りはさらに閉ざされる。",
                zh:"木曾森林移交皇室為御料林，進入限制更趨嚴格。" } },
            { year:"1905",
              era:{ en:"Meiji 38", ja:"明治三十八年", zh:"明治三十八年" },
              title:{ en:"A settlement", ja:"和解", zh:"和解" },
              jp:"御下賜金",
              text:{
                en:"After decades of petitions and disputes, the imperial household settles with the Kiso villages through an annual grant — by most accounts ten thousand yen a year, for some two decades.",
                ja:"数十年の請願と争いののち、皇室は木曽の村々への毎年の下賜金で決着をつける——多くの記述では年一万円、二十年あまりにわたるものだった。",
                zh:"歷經數十年的請願與爭執後，皇室以每年發放下賜金的方式與木曾各村達成和解——多數記載為每年一萬日圓，為期二十餘年。" } },
            { year:"1906–09",
              era:{ en:"Meiji 39–42", ja:"明治三十九〜四十二年", zh:"明治三十九至四十二年" },
              title:{ en:"Shrine reserve forests", ja:"神宮備林", zh:"神宮備林" },
              jp:"備林",
              text:{
                en:"Stands of large hinoki are designated as reserves for the Ise rebuilding; in Ura-Kiso, the Denokōji reserve at Kashimo (1909).",
                ja:"大径のヒノキの林分が伊勢の遷宮のための備林に指定される。裏木曽では加子母の出ノ小路備林（一九〇九年）。",
                zh:"大徑扁柏林分被指定為伊勢遷宮的備林；在裏木曾，即加子母的出之小路備林（1909）。" } },
            { year:"1947",
              era:{ en:"Shōwa 22", ja:"昭和二十二年", zh:"昭和二十二年" },
              title:{ en:"National forest", ja:"国有林に", zh:"改為國有林" },
              jp:"林政統一",
              text:{
                en:"Imperial and state forests are unified as national forest under the Forestry Agency; the reserve designation lapses, but the stands continue to be managed for Ise.",
                ja:"御料林と官有林が林野庁のもとで国有林に統一される。備林の指定は消えるが、林分は伊勢のために管理されつづける。",
                zh:"御料林與官有林統一為林野廳轄下的國有林；備林指定隨之失效，但這些林分仍繼續為伊勢而經營。" } },
            { year:"2014",
              era:{ en:"Heisei 26", ja:"平成二十六年", zh:"平成二十六年" },
              title:{ en:"Kiso Yūkyū no Mori", ja:"木曽悠久の森", zh:"木曾悠久之森" },
              jp:"生物多様性復元区域",
              text:{
                en:"A restoration area of 16,579 hectares across Agematsu, Ōtaki and Ōkuwa in Nagano and Nakatsugawa in Gifu, with core zones preserving the old natural hinoki and sawara forest and others to be returned from plantation to natural forest over the long term. <em>Yūkyū</em> means “everlasting”.",
                ja:"長野県の上松・王滝・大桑と岐阜県中津川にまたがる一万六千五百七十九ヘクタールの復元区域。古い天然のヒノキ・サワラ林を保存する核心の区域と、人工林を長い時間をかけて天然林へ戻す区域を含む。「悠久」は永遠を意味する。",
                zh:"橫跨長野縣上松、王瀧、大桑與岐阜縣中津川、面積 16,579 公頃的復育區；核心區保存古老的天然扁柏與花柏林，另有區域將長期由人工林回復為天然林。「悠久」意指永恆。" } }
          ] }
      ] },
    { t:"section",
      id:"identify",
      title:{ en:"Telling them apart", ja:"見分け方", zh:"如何分辨" },
      jp:"葉裏の気孔線",
      body:[
        { t:"p",
          text:{
            en:"The ban gave the people of Kiso a practical reason to know these trees by sight, and the old way of telling the four scale-leaved species apart still works: turn a spray over and look at the white bands of stomata on the underside. Hinoki shows a neat white Y at each joint; sawara, whose scale tips are sharply pointed, shows an X or butterfly; asunaro, with much larger, thicker leaves, shows broad white patches like painted bands; nezuko shows almost none. Kōyamaki is not a cypress at all but the only living member of its own family, found wild only in Japan, and its long, glossy, paired needles stand in whorls like the ribs of an umbrella.",
            ja:"禁令は木曽の人々に、これらの木を見て知る実際的な理由を与えた。鱗片葉をもつ四種を見分ける昔ながらの方法はいまも通じる。枝先を裏返し、裏側の気孔の白い帯を見るのである。ヒノキは節ごとにきれいな白いY字を、鱗片の先が鋭くとがるサワラはX字か蝶の形を、ずっと大きく厚い葉をもつアスナロは塗ったような幅広い白い帯を見せ、ネズコにはほとんどない。コウヤマキはヒノキの仲間ではなく、それだけで一つの科をなす唯一の現生種で、野生では日本にしかない。長くつやのある二本が合わさった葉が、傘の骨のように輪生する。",
            zh:"禁令讓木曾的人們有了憑肉眼認識這些樹的實際理由；分辨四種鱗葉樹種的老方法至今仍然管用：把枝葉翻過來，看背面氣孔形成的白色帶紋。扁柏在每個節上有工整的白色 Y 字；鱗葉尖端銳利的花柏呈 X 字或蝶形；葉片大而厚的翌檜則有如漆刷般的寬白帶；香柏幾乎沒有。日本金松根本不是柏科，而是其獨立科別中唯一現存的物種，野生只見於日本；其長而有光澤、由兩片合生的葉輪生排列，宛如傘骨。" } },
        { t:"figure",
          caption:{
            en:"How the five are told apart: the white stomatal marks on the underside of the scale leaves of the four cypresses, and the umbrella-like whorl of kōyamaki. Schematic, not to scale.",
            ja:"五木の見分け方。ヒノキ科の四種の鱗片葉の裏の白い気孔線と、コウヤマキの傘のような輪生。模式図で、縮尺は正確でない。",
            zh:"五木的分辨方式：四種柏科鱗葉背面的白色氣孔帶，以及日本金松傘骨般的輪生葉。示意圖，未按比例。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 290" role="img">';
            s += F.text(20, 28, lang==="en"?"LEAF UNDERSIDES":(lang==="ja"?"葉の裏":"葉背"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            var T = [
              { n:{ en:"Hinoki", ja:"ヒノキ", zh:"扁柏" }, k:"Y", d:{ en:"White Y; blunt scale tips", ja:"白いY字。先は鈍い", zh:"白色 Y 字；鱗葉尖端圓鈍" } },
              { n:{ en:"Sawara", ja:"サワラ", zh:"花柏" }, k:"X", d:{ en:"White X or butterfly; sharp tips", ja:"白いX字や蝶形。先は鋭い", zh:"白色 X 字或蝶形；尖銳" } },
              { n:{ en:"Asunaro", ja:"アスナロ", zh:"翌檜" }, k:"W", d:{ en:"Broad white bands; large thick leaves", ja:"幅広い白帯。大きく厚い葉", zh:"寬白帶；葉大而厚" } },
              { n:{ en:"Nezuko", ja:"ネズコ", zh:"香柏" }, k:"N", d:{ en:"Almost no white", ja:"白い部分はほとんどない", zh:"幾乎沒有白色" } },
              { n:{ en:"Kōyamaki", ja:"コウヤマキ", zh:"日本金松" }, k:"K", d:{ en:"Whorls of long glossy needles", ja:"長くつやのある葉の輪生", zh:"長而有光澤的針葉輪生" } }
            ];
            for (var i=0;i<T.length;i++){
              var cx = 20 + i*148 + 70, t = T[i];
              s += '<rect x="'+(cx-68)+'" y="44" width="136" height="236" fill="#F5F3ED" stroke="#E1DCD2"/>';
              s += F.text(cx, 64, L(t.n), { size:12, anchor:"middle", serif:true });
              if (t.k === "K"){
                for (var a=0;a<16;a++){ var ang = a*Math.PI/8, x2 = cx+Math.cos(ang)*50, y2 = 140+Math.sin(ang)*50;
                  s += '<line x1="'+cx+'" y1="140" x2="'+x2.toFixed(1)+'" y2="'+y2.toFixed(1)+'" stroke="#8B857C" stroke-width="5" stroke-linecap="butt"/>';
                  s += '<line x1="'+(cx+Math.cos(ang)*8).toFixed(1)+'" y1="'+(140+Math.sin(ang)*8).toFixed(1)+'" x2="'+(cx+Math.cos(ang)*48).toFixed(1)+'" y2="'+(140+Math.sin(ang)*48).toFixed(1)+'" stroke="#FBFAF7" stroke-width="1"/>'; }
                s += '<circle cx="'+cx+'" cy="140" r="6" fill="#7C6B52"/>';
              } else {
                var big = t.k === "W" ? 1.35 : 1;
                s += '<line x1="'+cx+'" y1="80" x2="'+cx+'" y2="205" stroke="#7C6B52" stroke-width="2"/>';
                for (var j=0;j<3;j++){
                  var y = 98 + j*40, w = 9*big, h = 17*big, lw = 16*big;
                  var tip = t.k === "X" ? 6 : 0;
                  s += '<polygon points="'+(cx-w)+','+y+' '+(cx-w-lw)+','+(y+h*0.6-tip)+' '+(cx-w-lw*0.7-tip)+','+(y+h*0.95)+' '+(cx-w*0.4)+','+(y+h)+'" fill="#ADA79E" stroke="#55504A" stroke-width="0.8"/>';
                  s += '<polygon points="'+(cx+w)+','+y+' '+(cx+w+lw)+','+(y+h*0.6-tip)+' '+(cx+w+lw*0.7+tip)+','+(y+h*0.95)+' '+(cx+w*0.4)+','+(y+h)+'" fill="#ADA79E" stroke="#55504A" stroke-width="0.8"/>';
                  s += '<polygon points="'+cx+','+(y-h*0.7-tip)+' '+(cx+w)+','+y+' '+cx+','+(y+h)+' '+(cx-w)+','+y+'" fill="#B4AC9C" stroke="#55504A" stroke-width="0.8"/>';
                  if (t.k === "Y"){ s += '<path d="M'+cx+' '+(y+h*0.8)+' L'+cx+' '+(y+h*0.25)+' M'+cx+' '+(y+h*0.25)+' L'+(cx-w-6)+' '+(y-2)+' M'+cx+' '+(y+h*0.25)+' L'+(cx+w+6)+' '+(y-2)+'" stroke="#FBFAF7" stroke-width="2.4" fill="none"/>'; }
                  if (t.k === "X"){ s += '<path d="M'+(cx-w-8)+' '+(y-3)+' L'+(cx+w+8)+' '+(y+h*0.9)+' M'+(cx+w+8)+' '+(y-3)+' L'+(cx-w-8)+' '+(y+h*0.9)+'" stroke="#FBFAF7" stroke-width="2.4" fill="none"/>'; }
                  if (t.k === "W"){ s += '<polygon points="'+(cx-w-3)+','+(y+3)+' '+(cx-w-lw+6)+','+(y+h*0.55)+' '+(cx-w*0.6)+','+(y+h*0.8)+'" fill="#FBFAF7"/>' + '<polygon points="'+(cx+w+3)+','+(y+3)+' '+(cx+w+lw-6)+','+(y+h*0.55)+' '+(cx+w*0.6)+','+(y+h*0.8)+'" fill="#FBFAF7"/>'; }
                }
              }
              s += F.text(cx, 236, L(t.d), { size:10.5, fill:"#55504A", anchor:"middle", max:(lang==="en"?22:24), lh:13 });
            }
            return s + '</svg>';
          } },
        { t:"table",
          caption:{ en:"The five in the field", ja:"山で見る五木", zh:"野外的五木" },
          cols:[
            { en:"Tree", ja:"樹種", zh:"樹種" },
            { en:"Bark and form", ja:"樹皮と樹形", zh:"樹皮與樹形" },
            { en:"Where it grows in Kiso and Ura-Kiso", ja:"木曽・裏木曽での生育地", zh:"在木曾與裏木曾的生長環境" }
          ],
          rows:[
            [
              { en:"Hinoki", ja:"ヒノキ", zh:"扁柏" },
              {
                en:"Reddish-brown bark peeling in long strips (stripped for roofing bark); straight trunk",
                ja:"赤褐色で長く縦に剥がれる樹皮（檜皮として剥ぐ）。幹はまっすぐ",
                zh:"紅褐色樹皮呈長條剝落（剝取作檜皮屋頂）；樹幹通直" },
              {
                en:"Ridges and well-drained slopes; dominant in the old stands",
                ja:"尾根や水はけのよい斜面。古い林分の主役",
                zh:"稜線與排水良好的坡地；老林分中的優勢樹種" }
            ],
            [
              { en:"Sawara", ja:"サワラ", zh:"花柏" },
              { en:"Similar bark, greyer; often with a broader crown", ja:"似た樹皮でやや灰色。樹冠はしばしば広い", zh:"樹皮相似而較灰；樹冠常較寬" },
              {
                en:"Valleys, hollows and damp ground, where it grows vigorously",
                ja:"谷や窪地、湿った土地。そこでよく育つ",
                zh:"山谷、窪地與潮濕地，在此生長旺盛" }
            ],
            [
              { en:"Asunaro", ja:"アスナロ", zh:"翌檜" },
              { en:"Thin, greyish-brown bark; tolerant of deep shade", ja:"薄い灰褐色の樹皮。深い陰に耐える", zh:"樹皮薄、灰褐色；極耐陰" },
              {
                en:"Under the canopy of the hinoki forest, on cool, moist slopes",
                ja:"ヒノキ林の林冠の下、涼しく湿った斜面",
                zh:"扁柏林冠層下方，涼爽潮濕的坡地" }
            ],
            [
              { en:"Nezuko", ja:"ネズコ", zh:"香柏" },
              {
                en:"Reddish-brown bark; dark, lustrous, fragrant heartwood",
                ja:"赤褐色の樹皮。心材は暗色で光沢があり香る",
                zh:"紅褐色樹皮；心材色深、有光澤且芳香" },
              { en:"Higher, cooler ground, often on rocky ridges", ja:"より高く涼しい土地、しばしば岩の多い尾根", zh:"海拔較高、較涼之處，常見於多岩稜線" }
            ],
            [
              { en:"Kōyamaki", ja:"コウヤマキ", zh:"日本金松" },
              {
                en:"Conical, dense crown of whorled needles; slow-growing",
                ja:"輪生する葉の密な円錐形の樹冠。成長は遅い",
                zh:"輪生針葉構成濃密的圓錐形樹冠；生長緩慢" },
              {
                en:"Scattered on rocky slopes; the rarest of the five",
                ja:"岩がちの斜面に点在。五木のなかで最もまれ",
                zh:"零星分布於多岩坡地；五木中最稀少" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Chūbu Regional Forest Office, “The five trees of Kiso” (Kiso forest stories); general botanical descriptions. In the Kiso Hinoki reserve at Kashimo, hinoki make up about 76 per cent of the trees and sawara about 23 per cent, so the other three are seldom seen there.",
            ja:"出典：林野庁中部森林管理局「木曽五木」（木曽森林ものがたり）、一般的な植物学の記載。加子母の木曽ヒノキ備林ではヒノキが約七十六パーセント、サワラが約二十三パーセントを占め、ほかの三種はそこではめったに見られない。",
            zh:"資料來源：林野廳中部森林管理局〈木曾五木〉（木曾森林物語）；一般植物學描述。在加子母的木曾扁柏備林中，扁柏約占 76%、花柏約占 23%，其餘三種在該處難得一見。" } }
      ] },
    { t:"section",
      id:"ban",
      title:{ en:"The ban, more exactly", ja:"禁令をもう少し正確に", zh:"更精確地說禁令" },
      jp:"停止木の年代",
      body:[
        { t:"p",
          text:{
            en:"The five did not become protected on a single day. Most accounts date the first closures to 1665, when the domain shut the Akasawa area of the Kiso valley, and the valley-wide ban on felling hinoki, sawara, asunaro and kōyamaki to 1708; nezuko was added later — in 1718 according to some summaries, while others give a later year. Keyaki was protected alongside them in the open forest. The famous penalty, “one tree, one head”, had a companion saying in the valley, “one branch, one arm”, and both survive as folk memory of a regime that was harsh on paper and enforced, in practice, mostly through inspection posts such as the one at Magome, confiscation and fines.",
            ja:"五木は一日で守られるようになったのではない。多くの記述は、最初の留山を、藩が木曽谷の赤沢一帯を閉ざした一六六五年とし、谷全体でのヒノキ・サワラ・アスナロ・コウヤマキの伐採禁止を一七〇八年とする。ネズコはそのあとで加えられた。一七一八年とする要約もあれば、もっと後の年を挙げるものもある。明山ではケヤキも五木とともに守られた。名高い刑罰「木一本、首一つ」には、谷で「枝一本、腕一本」という対の言い回しもあり、どちらも、紙の上では苛酷で、実際にはおもに馬籠のような番所での改め、没収、罰金によって守られた制度の記憶として残っている。",
            zh:"五木並非在同一天受到保護。多數記載把最初的封山定在 1665 年，藩封閉了木曾谷的赤澤一帶；全谷禁止砍伐扁柏、花柏、翌檜與日本金松則在 1708 年；香柏是後來才加入的——有些概述說是 1718 年，也有的給出更晚的年份。在明山中，櫸木也與五木一同受到保護。著名的刑罰「一木一首」在谷中還有一句對應的說法「一枝一臂」，兩者都作為民間記憶留存下來：一個紙面上嚴苛、實際上多半透過馬籠等檢查所的查驗、沒收與罰金來執行的制度。" } },
        { t:"p",
          text:{
            en:"The clearest evidence that the system worked stands in the forest. The Forestry Agency describes the natural hinoki of the Kiso valley as about 300 years old: trees that took root after the heavy cutting of the seventeenth century, on ground the domain then closed and guarded. The old-growth forest that visitors walk through at Akasawa and Kashimo is not primeval wilderness but the product of a deliberate policy of recovery — one of the oldest working examples of forest restoration in Japan.",
            ja:"仕組みが働いたことの最もはっきりした証拠は、森に立っている。林野庁は木曽谷の天然のヒノキを樹齢三百年ほどと記す。十七世紀の大伐採のあとに根づき、藩がその後閉ざして守った土地に育った木である。赤沢や加子母で訪れる人が歩く老齢の森は手つかずの原生林ではなく、意図された回復の政策の産物——日本で最も古い部類の、いまも生きている森林再生の例——である。",
            zh:"這套制度奏效的最明確證據，就矗立在森林裡。林野廳形容木曾谷的天然扁柏約有 300 年樹齡：它們是在十七世紀大量伐採之後扎根，生長在藩隨後封閉並看守的土地上。遊客在赤澤與加子母走過的老齡林並非原始荒野，而是一項刻意的復育政策的成果——日本至今仍在運作、最古老的森林復育實例之一。" } }
      ] },
    { t:"section",
      id:"urakiso",
      title:{ en:"Ura-Kiso today", ja:"いまの裏木曽", zh:"今日的裏木曾" },
      jp:"木曽ヒノキ備林",
      body:[
        { t:"p",
          text:{
            en:"On the Gifu side, the old Owari villages of Tsukechi, Kawaue and Kashimo — now all part of Nakatsugawa — make up Ura-Kiso, “the back of Kiso”. Its finest stand is the Kiso Hinoki reserve forest above Kashimo, placed under protection by Owari in 1729 and later the Denokōji shrine reserve. It covers about 730 hectares between 820 and 1,820 metres; its hinoki are 300 to 400 years old, 50 to 80 cm across and about 25 metres tall on average. The first great hinoki of the reserve, about 950 years old and 213 cm in diameter, fell in a typhoon in 1934; its successor, about a thousand years old and 154 cm across, was found in 1955 and still stands. It receives about 800 visitors a year.",
            ja:"岐阜の側では、尾張藩の旧村である付知・川上・加子母——いまはすべて中津川市——が、「木曽の裏」裏木曽をなす。最良の林分は加子母の奥の木曽ヒノキ備林で、一七二九年に尾張藩の保護下に置かれ、のちに出ノ小路の神宮備林となった。標高八百二十〜千八百二十メートルに約七百三十ヘクタールが広がり、ヒノキは樹齢三百〜四百年、径五十〜八十センチ、平均の高さ約二十五メートルである。備林の初代の大ヒノキは樹齢約九百五十年、径二百十三センチで、一九三四年の台風で倒れた。二代目は樹齢約千年、径百五十四センチで、一九五五年に見つかり、いまも立っている。訪れる人は年に約八百人である。",
            zh:"在岐阜一側，尾張藩的舊村落付知、川上與加子母——如今都屬中津川市——構成了「木曾的背面」裏木曾。其中最好的林分是加子母上方的木曾扁柏備林，1729 年由尾張藩納入保護，後來成為出之小路神宮備林。面積約 730 公頃，海拔 820 至 1,820 公尺；扁柏樹齡 300 至 400 年，胸徑 50 至 80 公分，平均樹高約 25 公尺。備林的第一代大扁柏樹齡約 950 年、胸徑 213 公分，1934 年毀於颱風；第二代約千年、胸徑 154 公分，1955 年被發現，至今仍屹立。每年約有 800 名訪客。" } },
        { t:"p",
          text:{
            en:"The old natural stands are now managed above all for conservation and for shrine and temple timber, and the little natural hinoki that still reaches the market is sold under its own name: in April 2019 the Forestry Agency's Chūbu office decided to call it <em>natural Kiso hinoki</em>, to separate it clearly from the plantation hinoki of the same national forests. Its highest use remains the one the domain foresaw. Ura-Kiso has sent timber to the Ise Shrine since the rebuilding of 1709, and on 5 June 2025 two of its hinoki were felled by axe at Kashimo for the 63rd rebuilding, due in 2033 (see <a href=\"gods.html\">Trees and the Gods</a>). At the entrance to the reserve, volunteers plant the hinoki that future rebuildings will need (see <a href=\"grading.html\">Grades &amp; Standards</a>).",
            ja:"古い天然の林分はいま、なによりも保全と社寺の用材のために管理されており、わずかに市場に出る天然のヒノキは独自の名で売られる。林野庁中部森林管理局は二〇一九年四月、同じ国有林の人工林のヒノキとはっきり区別するため、これを「天然木曽ヒノキ」と呼ぶことに決めた。最も高い用途は、藩が見こしたとおりのものである。裏木曽は一七〇九年の遷宮から伊勢神宮に材を送ってきており、二〇二五年六月五日には、二〇三三年に予定される第六十三回の遷宮のために、加子母で二本のヒノキが斧で伐られた（<a href=\"gods.html\">神と木</a>参照）。備林の入り口では、ボランティアが後の遷宮に要るヒノキを植えている（<a href=\"grading.html\">等級と規格</a>参照）。",
            zh:"古老的天然林分如今首重保育與供應寺社用材，仍少量流入市場的天然扁柏則以專有名稱販售：林野廳中部森林管理局於 2019 年 4 月決定稱之為「天然木曾扁柏」，以便與同一國有林中的人工林扁柏明確區分。它最崇高的用途，仍是當年藩所預見的那一個。裏木曾自 1709 年的遷宮起便為伊勢神宮供應木材；2025 年 6 月 5 日，為預定於 2033 年舉行的第 63 回遷宮，加子母有兩株扁柏以斧伐倒（見<a href=\"gods.html\">神與樹</a>）。在備林入口，志工們正栽植未來遷宮所需的扁柏（見<a href=\"grading.html\">等級與規格</a>）。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Chūbu Regional Forest Office (Kiso Hinoki reserve forest, technical report No. 181; branding notice for Tōnō district hinoki, 1 April 2019; “Passing Kiso hinoki forests to the future”, 2015); Nakatsugawa city bulletin (April 2025); Ise Jingū, schedule of the 63rd Sengū.",
            ja:"出典：林野庁中部森林管理局（木曽ヒノキ備林〈技術資料第一八一号〉、東濃森林管理署産ヒノキのブランド化について〈二〇一九年四月一日〉、「木曽ヒノキ林を未来に引き継ぐ取組」〈二〇一五年〉）、中津川市広報（二〇二五年四月）、神宮司庁 第六十三回式年遷宮の日程。",
            zh:"資料來源：林野廳中部森林管理局（木曾扁柏備林〈技術資料第 181 號〉；東濃森林管理署產扁柏品牌化通知〈2019 年 4 月 1 日〉；〈將木曾扁柏林傳承給未來〉〈2015 年〉）；中津川市公報（2025 年 4 月）；神宮司廳第 63 回式年遷宮日程。" } }
      ] },
    { t:"related",
      items:[
        { href:"hinoki.html", why:{ en:"The first and most important of the five.", ja:"五木の筆頭。", zh:"五木之首。" } },
        { href:"poetry.html",
          why:{ en:"The forest regime in Tōson's Before the Dawn.", ja:"藤村『夜明け前』のなかの山の制度。", zh:"藤村《黎明之前》中的山林制度。" } },
        { href:"timberrivers.html",
          why:{ en:"How the domain moved the timber it allowed to be cut.", ja:"藩は許した材をどう運んだか。", zh:"藩如何運送准許砍伐的木材。" } },
        { href:"gods.html",
          why:{ en:"The protected stands that now supply Ise.", ja:"いま伊勢に材を出す守られた林。", zh:"如今供應伊勢的受保護林分。" } }
      ] }
  ] };

/* ---- ----------------------------------------- broadleaf */
GIFU.pages["broadleaf"] = { kicker:{ en:"The Forest · 06", ja:"森 · 06", zh:"森林 · 06" },
  title:{ en:"The Broadleaf Forests", ja:"広葉樹の森", zh:"闊葉樹之森" },
  jp:"ブナ・ナラ・トチ · 飛騨の天然林",
  lede:{
    en:"More than half of Gifu's forest is not plantation but broadleaved woodland — beech and oak on the snowy mountains of Hida, horse chestnut and katsura in the valleys, coppiced oak and chestnut around the villages of Mino. These are the forests that gave Hida its furniture industry, and for most of the last half-century they were treated as almost worthless: cut for chips, left to grow over, or cleared for sugi. This page describes the broadleaf forests, the trees that matter in them, why so little of their wood reaches a workshop, and the recent effort in Hida to change that.",
    ja:"岐阜の森の半分以上は人工林ではなく広葉樹の林である——飛騨の雪深い山のブナとナラ、谷のトチとカツラ、美濃の村々をとりまく萌芽更新のナラやクリ。飛騨に家具産業を与えたのはこの森であり、そしてこの半世紀の大半、それはほとんど無価値のものとして扱われた——チップのために伐られ、放っておかれ、あるいはスギのために伐り払われた。この頁は、広葉樹の森と、そこで意味のある木々、その材がなぜごくわずかしか工房に届かないのか、そしてそれを変えようとする飛騨の近年の試みを述べる。",
    zh:"岐阜一半以上的森林不是人工林，而是闊葉林——飛驒雪山上的山毛櫸與橡木、谷地裡的七葉樹與連香樹、美濃村落周邊萌芽更新的橡木與栗木。正是這些森林給了飛驒家具產業；而在過去半世紀的大半時間裡，它們幾乎被當作毫無價值：砍來做木片、任其荒廢，或為種柳杉而砍除。本頁介紹闊葉林、其中重要的樹種、為何其木材只有極少數能進入工坊，以及飛驒近年試圖改變這一切的努力。" },
  body:[
    { t:"section",
      id:"forest",
      title:{ en:"What the broadleaf forest is", ja:"広葉樹の森とは", zh:"何謂闊葉林" },
      jp:"天然林と二次林",
      body:[
        { t:"p",
          text:{
            en:"Almost none of Gifu's broadleaf woodland is primeval. The high beech forests were logged for charcoal, fuel and railway sleepers in the nineteenth and twentieth centuries and have regrown; the lowland oak and chestnut woods are coppice, cut every fifteen to twenty-five years for firewood and charcoal and regrown from the stumps, for centuries on end. Forestry statistics call most of this “natural forest” because it was not planted, but ecologists call it secondary forest — shaped by people, then abandoned when oil and gas replaced charcoal in the 1950s and 1960s. In Hida the share is highest: about 68 per cent of Hida city's forest is natural broadleaf, and in Shirakawa village nearly 88 per cent.",
            ja:"岐阜の広葉樹林で原生のものはほとんどない。高地のブナ林は十九世紀と二十世紀に炭・燃料・枕木のために伐られ、再生した。低地のナラやクリの林は萌芽林で、何世紀にもわたり十五年から二十五年ごとに薪炭のために伐られ、切り株から再生してきた。林業統計は植えられていないという理由でその大半を「天然林」と呼ぶが、生態学者は二次林と呼ぶ——人に形づくられ、一九五〇年代と六〇年代に石油とガスが炭に取って代わると放置された森である。その割合は飛騨で最も高い。飛騨市の森のおよそ六十八パーセントが天然の広葉樹で、白川村では九割近い。",
            zh:"岐阜的闊葉林幾乎沒有原始林。高地的山毛櫸林在十九、二十世紀被伐作木炭、燃料與鐵道枕木，之後再生；低地的橡木與栗木林則是萌芽林，數百年來每十五到二十五年就被砍一次作柴炭，再從樹樁萌芽長回。林業統計因其非人工栽植而多稱之為「天然林」，生態學者則稱之為次生林——由人塑造，並在 1950、60 年代石油與天然氣取代木炭後遭到棄置。飛驒的比例最高：飛驒市約 68% 的森林是天然闊葉林，白川村更近九成。" } },
        { t:"grid",
          cols:3,
          cells:[
            { k:{ en:"Hida city forest cover", ja:"飛騨市の森林率", zh:"飛驒市森林覆蓋率" },
              v:{ en:"93.5%", ja:"93.5%", zh:"93.5%" },
              d:{ en:"Of 792.53 km² of land.", ja:"面積七百九十二・五三平方キロのうち。", zh:"792.53 平方公里土地中。" } },
            { k:{ en:"Broadleaf share", ja:"広葉樹の割合", zh:"闊葉樹比例" },
              v:{ en:"68%", ja:"68%", zh:"68%" },
              d:{
                en:"Of Hida city's forest; second in Gifu after Shirakawa village (87.9%).",
                ja:"飛騨市の森林のうち。県内では白川村（八十七・九パーセント）に次ぐ二位。",
                zh:"占飛驒市森林；縣內僅次於白川村（87.9%）。" } },
            { k:{ en:"Average diameter", ja:"平均直径", zh:"平均直徑" },
              v:{ en:"26 cm", ja:"26 cm", zh:"26 公分" },
              d:{
                en:"Of the broadleaves surveyed — too small for conventional furniture stock.",
                ja:"調べた広葉樹の平均。従来の家具材には細すぎる。",
                zh:"所調查闊葉樹的平均——對傳統家具用材來說太細。" } }
          ] }
      ] },
    { t:"section",
      id:"trees",
      title:{ en:"The trees that matter", ja:"意味のある木々", zh:"重要的樹種" },
      jp:"家具の木",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Beech", ja:"ブナ", zh:"山毛櫸" },
              jp:"橅 · Fagus crenata",
              def:{
                en:"The characteristic tree of the snowy Sea of Japan side of Honshū, dominant from about 700 to 1,600 metres in Hida. Its wood is hard, heavy, even and pale, with small dark flecks from its rays. It warps and rots readily if badly handled, which is why it was long thought of as firewood; but steamed, it bends further than almost any other timber without breaking — the basis of the Hida chair. The character 橅 — “tree” beside “nothing” — is popularly explained as “tree of no use”.",
                ja:"本州の日本海側の雪国を代表する木で、飛騨ではおよそ七百から千六百メートルで優占する。材は硬く重く、均質で淡色、放射組織の小さな濃い斑がある。扱いを誤れば狂いやすく腐りやすいため、長く薪と考えられてきた。しかし蒸せば、ほとんどどの材よりも深く折れずに曲がる——飛騨の椅子の基である。「橅」の字は木偏に「無」で、俗に「役に立たない木」の意と説明される。",
                zh:"本州日本海側雪國的代表樹種，在飛驒約 700 至 1,600 公尺處居優勢。其木材硬、重、均勻、色淡，有木射線形成的深色小斑點。處理不當便容易變形腐朽，因此長期被視為柴薪；但經過蒸煮，它能彎得比幾乎任何木材都深而不斷——這正是飛驒椅子的基礎。日文漢字「橅」由「木」與「無」組成，一般通俗解釋為「無用之木」。" } },
            { term:{ en:"Mizunara oak", ja:"ミズナラ", zh:"水楢" },
              jp:"水楢 · Quercus crispula",
              def:{
                en:"The oak of the cool mountains, strong and ring-porous, with broad rays that show as silver flakes on quartersawn boards — <em>toranfu</em>, “tiger stripes”. It became the premier Japanese furniture oak and, famously, a cask wood for whisky. Large mizunara are now scarce and expensive; oak wilt has killed many.",
                ja:"涼しい山の楢で、強い環孔材。幅広い放射組織が柾目の板に銀色の斑——虎斑——として現れる。日本の家具の楢の筆頭となり、ウイスキーの樽材としても名高い。大径のミズナラはいまや稀で高価であり、ナラ枯れで多くが枯れた。",
                zh:"冷涼山地的橡木，強韌的環孔材，寬大的木射線在徑切板上呈銀色鱗片——稱為「虎斑」。它成為日本首屈一指的家具橡木，也以威士忌桶材聞名。大徑水楢如今稀少昂貴，許多已死於橡樹萎凋病。" } },
            { term:{ en:"Horse chestnut", ja:"トチノキ", zh:"七葉樹" },
              jp:"栃 · Aesculus turbinata",
              def:{
                en:"A tree of the damp mountain valleys that can grow enormous; the nuts were a famine food in Hida, leached and made into <em>tochi-mochi</em>. The wood is pale, soft, silky and often rippled; it is the classic material for turned bowls and trays and for large table slabs.",
                ja:"湿った山の谷の木で、巨木になりうる。実は飛騨では救荒食で、あく抜きしてとち餅にした。材は淡色で柔らかく、絹のようで、しばしば縮み杢が出る。挽物の椀や盆、大きな天板の定番の材である。",
                zh:"生長於潮濕山谷、可長成巨木的樹；其果實在飛驒曾是救荒食物，去澀後做成「栃餅」。木材色淡、質軟、如絲般光滑，常有波狀花紋；是車製碗盤與大型桌板的經典材料。" } },
            { term:{ en:"Katsura", ja:"カツラ", zh:"連香樹" },
              jp:"桂 · Cercidiphyllum japonicum",
              def:{
                en:"A valley tree that grows as a ring of great trunks from one root; its fallen autumn leaves smell of caramel. The wood is soft, fine and warm brown, easy to carve and very stable — the traditional choice for carved panels, Buddhist images and the drawers of chests.",
                ja:"一つの根から大きな幹が輪をなして株立ちする谷の木で、秋の落ち葉はカラメルの匂いがする。材は柔らかく緻密で温かな茶色、彫りやすく狂いが少ない——彫刻の板、仏像、箪笥の引き出しの伝統的な選択である。",
                zh:"谷地樹種，一株根上長出一圈粗大樹幹；秋天落葉有焦糖香。木材軟、細緻、溫暖褐色，易雕且極穩定——傳統上用於雕刻板、佛像與櫃子抽屜。" } }
          ] }
      ] },
    { t:"section",
      id:"timbers",
      title:{ en:"A table of broadleaf timbers", ja:"広葉樹材の一覧", zh:"闊葉樹材一覽" },
      jp:"比重と用途",
      body:[
        { t:"p",
          text:{
            en:"The broadleaf woods of central Japan are far more varied than the conifers, and each has its traditional work. The table gives air-dry density — the weight of a cubic centimetre at about 15 per cent moisture — and the uses for which each was chosen. Densities are the standard handbook averages; any one board may differ by ten per cent or more.",
            ja:"中部日本の広葉樹材は針葉樹よりはるかに多様で、それぞれに伝統の仕事がある。表には気乾比重——含水率およそ十五パーセントでの一立方センチメートルの重さ——と、それぞれが選ばれてきた用途を示す。比重は標準的なハンドブックの平均値で、一枚の板は一割以上違うこともある。",
            zh:"日本中部的闊葉樹材遠比針葉樹多樣，各有其傳統用途。下表列出氣乾密度——含水率約 15% 時每立方公分的重量——以及各樹種傳統上被選用的用途。密度為標準手冊的平均值，單一木板可能相差一成以上。" } },
        { t:"table",
          caption:{ en:"Broadleaf timbers of Gifu's forests", ja:"岐阜の森の広葉樹材", zh:"岐阜森林的闊葉樹材" },
          cols:[
            { en:"Timber", ja:"樹種", zh:"樹種" },
            { en:"Japanese", ja:"和名", zh:"日文" },
            { en:"Density", ja:"気乾比重", zh:"氣乾密度" },
            { en:"Traditional uses", ja:"伝統的な用途", zh:"傳統用途" }
          ],
          numCols:[2],
          keyCol:0,
          rows:[
            [
              { en:"Beech", ja:"ブナ", zh:"山毛櫸" },
              "橅",
              "0.65",
              {
                en:"Bentwood chairs, turned legs, plywood, formerly charcoal and clogs",
                ja:"曲木の椅子、挽いた脚、合板、かつては炭と下駄",
                zh:"曲木椅、車製椅腳、合板，昔日作木炭與木屐" }
            ],
            [
              { en:"Mizunara oak", ja:"ミズナラ", zh:"水楢" },
              "水楢",
              "0.68",
              { en:"Furniture, flooring, casks, panelling", ja:"家具、床材、樽、羽目板", zh:"家具、地板、酒桶、壁板" }
            ],
            [
              { en:"Konara oak", ja:"コナラ", zh:"枹櫟" },
              "小楢",
              "0.79",
              { en:"Charcoal, firewood, shiitake logs", ja:"炭、薪、椎茸の原木", zh:"木炭、柴薪、香菇段木" }
            ],
            [
              { en:"Chestnut", ja:"クリ", zh:"栗木" },
              "栗",
              "0.60",
              { en:"Sills and foundations, railway sleepers, roof shingles", ja:"土台、枕木、屋根板", zh:"地檻與基礎、鐵道枕木、屋頂木瓦" }
            ],
            [
              { en:"Zelkova", ja:"ケヤキ", zh:"櫸木" },
              "欅",
              "0.69",
              {
                en:"Temple pillars, festival floats, chests, drums, trays",
                ja:"社寺の柱、祭屋台、箪笥、太鼓、盆",
                zh:"寺社柱子、祭典屋台、衣櫃、太鼓、托盤" }
            ],
            [
              { en:"Horse chestnut", ja:"トチノキ", zh:"七葉樹" },
              "栃",
              "0.52",
              { en:"Turned bowls, trays, table slabs", ja:"挽物の椀、盆、座卓の天板", zh:"車製碗、托盤、桌板" }
            ],
            [
              { en:"Katsura", ja:"カツラ", zh:"連香樹" },
              "桂",
              "0.50",
              { en:"Carving, drawer sides, go boards, patterns", ja:"彫刻、引き出しの側板、碁盤、木型", zh:"雕刻、抽屜側板、圍棋盤、鑄造木模" }
            ],
            [
              { en:"Wild cherry", ja:"ヤマザクラ", zh:"山櫻" },
              "山桜",
              "0.62",
              {
                en:"Printing blocks, furniture, turned work; bark for inlay",
                ja:"版木、家具、挽物。樹皮は樺細工に",
                zh:"雕版、家具、車製品；樹皮用於樺皮工藝" }
            ],
            [
              { en:"Japanese walnut", ja:"オニグルミ", zh:"鬼胡桃" },
              "鬼胡桃",
              "0.53",
              { en:"Gun stocks, furniture, carving", ja:"銃床、家具、彫刻", zh:"槍托、家具、雕刻" }
            ],
            [
              { en:"Castor aralia", ja:"セン（ハリギリ）", zh:"刺楸" },
              "栓",
              "0.52",
              { en:"Furniture and drawers, sometimes sold as “oak”", ja:"家具や引き出し。「タモ」代わりにも", zh:"家具與抽屜，有時被當作「梣木」販售" }
            ],
            [
              { en:"Painted maple", ja:"イタヤカエデ", zh:"色木槭" },
              "板屋楓",
              "0.65",
              {
                en:"Chair parts, flooring, bowling pins, instrument necks",
                ja:"椅子の部材、床材、ボウリングのピン、楽器のネック",
                zh:"椅子構件、地板、保齡球瓶、樂器琴頸" }
            ],
            [
              { en:"Magnolia", ja:"ホオノキ", zh:"日本厚朴" },
              "朴",
              "0.49",
              { en:"Sword scabbards, geta, drawing boards, woodblocks", ja:"刀の鞘、下駄、製図板、版木", zh:"刀鞘、木屐、製圖板、木刻版" }
            ],
            [
              { en:"Japanese ash", ja:"ヤチダモ", zh:"水曲柳" },
              "谷地梻",
              "0.55",
              { en:"Furniture, bats, tool handles", ja:"家具、バット、道具の柄", zh:"家具、球棒、工具柄" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Density: standard air-dry averages from the Japanese wood industry handbook. Uses are traditional, not exclusive.",
            ja:"比重：木材工業ハンドブックの標準的な気乾平均値。用途は伝統的なもので、これに限らない。",
            zh:"密度：日本《木材工業手冊》標準氣乾平均值。用途為傳統用法，並非僅限於此。" } }
      ] },
    { t:"section",
      id:"waste",
      title:{ en:"Why so little reaches a workshop", ja:"なぜ工房にほとんど届かないのか", zh:"為何極少進入工坊" },
      jp:"九割がチップ",
      body:[
        { t:"p",
          text:{
            en:"Japan's broadleaf harvest has a curious shape. By volume, the great majority — something like ninety-three per cent — goes to the chip mill, to become paper pulp or fuel. About six per cent becomes manufactured goods such as plywood and shiitake-growing logs; perhaps one per cent is sawn into lumber. Meanwhile, Japanese furniture makers, including many in Hida, have for decades built with imported hardwoods — oak, ash, walnut, cherry and maple from Russia, China, North America and Europe.",
            ja:"日本の広葉樹の伐採には奇妙な形がある。量でいえば大半——およそ九十三パーセント——がチップ工場に行き、紙のパルプか燃料になる。およそ六パーセントが合板や椎茸の原木などの製品となり、製材になるのはおそらく一パーセントほどにすぎない。その一方で、日本の家具メーカーは、飛騨の多くの会社も含め、何十年も輸入広葉樹——ロシア、中国、北米、欧州のナラ、タモ、ウォルナット、チェリー、メープル——でものをつくってきた。",
            zh:"日本闊葉樹的伐採量呈現一種奇特的結構：以材積計，絕大多數——約 93%——送進木片廠，成為紙漿或燃料；約 6% 成為合板、香菇段木等製品；鋸成板材的大概只有 1%。與此同時，日本的家具廠——包括許多飛驒廠商——數十年來一直使用進口闊葉材：來自俄羅斯、中國、北美與歐洲的橡木、梣木、胡桃木、櫻桃木與楓木。" } },
        { t:"figure",
          caption:{
            en:"Where Japan's broadleaf harvest goes, by volume. The lumber share is so small that it barely registers. Source: Forestry Agency material cited in Hida city's broadleaf-town reports (approximate shares).",
            ja:"日本の広葉樹の伐採はどこへ行くか、材積で。製材の割合は小さすぎて、ほとんど目に見えない。出典：飛騨市の広葉樹のまちづくり資料に引かれた林野庁資料（おおよその割合）。",
            zh:"日本闊葉樹伐採的去向，以材積計。板材比例小到幾乎看不見。資料來源：飛驒市「闊葉樹城鎮」資料所引林野廳資料（約略比例）。" },
          svg:function(lang, L){ return GIFU.fig.stack(lang, L, {
            title:{ en:"Broadleaf harvest by use", ja:"広葉樹の用途別割合", zh:"闊葉樹依用途比例" },
            items:[
              { n:{ en:"Chips — pulp and fuel", ja:"チップ——パルプと燃料", zh:"木片——紙漿與燃料" }, v:93, f:"#E6E4E0" },
              { n:{ en:"Manufactured goods", ja:"製品（合板・原木など）", zh:"製品（合板、段木等）" }, v:6, f:"#E0E6DB" },
              { n:{ en:"Lumber", ja:"製材", zh:"板材" }, v:1, f:"#EADCC1" }
            ],
            note:{ en:"Most Hida furniture has long been made from imported hardwoods, while local broadleaves went to the chipper.", ja:"飛騨の家具の多くは長く輸入広葉樹でつくられ、地元の広葉樹はチッパーに入った。", zh:"長期以來，飛驒家具多以進口闊葉材製作，而本地闊葉樹則被送進削片機。" } }); } },
        { t:"p",
          text:{
            en:"The reasons are practical rather than perverse. Secondary broadleaf forest grows as a crowd of different species, most of them crooked, forked and small — the average tree surveyed in Hida city was only 26 centimetres across. A log like that yields perhaps ten per cent of its volume as clear furniture stock once knots, splits, sapwood and crookedness are cut away. It must be felled selectively on steep ground, sorted by species and quality, sawn thin, and dried for a year or more before anyone can say what it is good for. Imported timber, by contrast, arrives graded, dried, consistent and in quantity, with a price on it. For a factory making a thousand chairs of one design, the choice was never close.",
            ja:"理由はひねくれたものではなく実際的である。広葉樹の二次林はさまざまな樹種の群れとして育ち、その多くは曲がり、二股に分かれ、細い——飛騨市で調べた木の平均は直径わずか二十六センチだった。そうした丸太から、節・割れ・辺材・曲がりを取り除いたあとに得られる無節の家具材は、材積のおよそ一割にすぎない。急な斜面で択伐し、樹種と品質で仕分け、薄く挽き、一年以上乾かしてはじめて、何に向くかがわかる。対して輸入材は、等級づけされ、乾き、そろい、量があり、値段がついて届く。一つの意匠の椅子を千脚つくる工場にとって、選択に迷う余地はなかった。",
            zh:"原因是現實的，而非荒謬。闊葉次生林由多種樹木混生而成，大多彎曲、分岔且細小——飛驒市調查的樹木平均直徑只有 26 公分。這樣的原木在去除節疤、裂紋、邊材與彎曲之後，能得到的無節家具材大概只有材積的一成。它必須在陡坡上擇伐、依樹種與品質分級、薄鋸，再乾燥一年以上，才能知道適合做什麼。相較之下，進口木材分好等級、乾燥完成、品質一致、數量充足，而且有明確價格。對於一款椅子要做一千張的工廠而言，這從來不是困難的選擇。" } }
      ] },
    { t:"section",
      id:"hida",
      title:{ en:"The broadleaf town", ja:"広葉樹のまち", zh:"闊葉樹之城" },
      jp:"飛騨市・ヒダクマ",
      body:[
        { t:"p",
          text:{
            en:"In fiscal 2015 Hida city — the northernmost city in Gifu, formed in 2004 from Furukawa, Kamioka and two villages — declared itself a “broadleaf town” and set out to turn its small, mixed, crooked trees from chip into material. The idea was not to compete with imported timber on its own terms but to find the makers, designers and uses for which small, varied, characterful wood is an asset: a stool that needs only short pieces, a table whose top shows the knot, a toy, an interior panel, a single log sold whole to one maker who wants its story.",
            ja:"二〇一五年度、飛騨市——二〇〇四年に古川・神岡と二つの村が合併してできた岐阜最北の市——は「広葉樹のまち」を掲げ、小さく、まじり合い、曲がった木を、チップから素材へ変えることに乗り出した。狙いは輸入材と同じ土俵で争うことではなく、小さく、多様で、個性のある木がかえって強みになるつくり手、デザイナー、用途を探すことにあった——短い部材で足りる腰掛け、節を見せる天板、玩具、内装の板、物語ごと一人のつくり手に売られる一本の丸太。",
            zh:"2015 財政年度，飛驒市——岐阜最北的城市，2004 年由古川、神岡與兩個村合併而成——宣告自己是「闊葉樹之城」，著手把小徑、混雜、彎曲的樹從木片變成材料。其用意不在於以進口材的遊戲規則與之競爭，而在於找到那些把「小、多樣、有個性的木材」視為優點的創作者、設計師與用途：只需短料的凳子、刻意露出節疤的桌面、玩具、室內壁板，或把一整根原木連同它的故事賣給一位創作者。" } },
        { t:"defs",
          items:[
            { term:{ en:"Hidakuma", ja:"ヒダクマ", zh:"Hidakuma" },
              jp:"飛騨の森でクマは踊る",
              def:{
                en:"The company at the centre of the effort, founded in 2015. Its full name — <em>Hida no Mori de Kuma wa Odoru</em>, “the bears dance in the forest of Hida” — was meant to announce that this was not a normal forestry company. It is jointly owned by Hida city, which held half the shares at founding and now holds 32.5 per cent, the Tokyo creative agency Loftwork and the forestry venture Tobimushi; the city also contributed a piece of municipal forest. It runs FabCafe Hida, a café, guesthouse and digital-fabrication workshop in a renovated old house in Furukawa, buys broadleaf logs from local forests, and matches them with designers, architects and companies.",
                ja:"この取り組みの中心となる会社で、二〇一五年設立。正式名称「飛騨の森でクマは踊る」は、ふつうの林業会社ではないと宣言するためのものだった。飛騨市、東京のクリエイティブ会社ロフトワーク、林業ベンチャーのトビムシが共同で出資する。飛騨市の持株比率は設立時の五割からいまは三十二・五パーセントとなり、市は市有林も現物で出資した。古川の古民家を改修したカフェ・宿・デジタルものづくり工房「FabCafe Hida」を営み、地元の森から広葉樹の丸太を買い、デザイナー、建築家、企業と結びつける。",
                zh:"這項行動的核心公司，2015 年成立。全名「飛驒の森でクマは踊る」（熊在飛驒森林裡跳舞），意在宣告這不是一家普通的林業公司。由飛驒市、東京創意公司 Loftwork 與林業新創 Tobimushi 共同持股；飛驒市的持股比例由創立時的一半降至目前的 32.5%，市府另以市有林作價出資。它經營 FabCafe Hida——位於古川一棟翻修老屋中的咖啡館、民宿兼數位製造工坊——向當地森林收購闊葉樹原木，並媒合設計師、建築師與企業。" } },
            { term:{ en:"Products from small trees", ja:"細い木からの製品", zh:"小徑木製品" },
              jp:"SLANT STOOL・NEKO",
              def:{
                en:"Hidakuma's own designs are built around the short, narrow pieces that small broadleaves give: a stool whose seat and legs come from offcut-sized parts, a cat tree made from branches and thin trunks, furniture and interiors for companies that want each piece traceable to a named forest.",
                ja:"ヒダクマ自身の製品は、細い広葉樹から取れる短く狭い部材を前提に組み立てられる。端材ほどの部品で座面と脚をつくる腰掛け、枝や細い幹でつくる猫のための家具、一つひとつの部材を名のある森までたどれることを望む企業のための家具や内装。",
                zh:"Hidakuma 自有的設計都以小徑闊葉樹能取得的短窄料為前提：以邊角料大小的構件做成座面與椅腳的凳子、以枝條與細幹製成的貓跳台，以及為希望每塊木料都能追溯到特定森林的企業所做的家具與室內裝修。" } },
            { term:{ en:"Faster drying", ja:"乾燥の短縮", zh:"縮短乾燥" },
              jp:"AI乾燥",
              def:{
                en:"Drying is the bottleneck for small broadleaf lots: a year of air-drying ties up money and space. Hidakuma has worked on a kiln controlled by machine learning, aiming to shorten a drying cycle of about twelve months to about three without causing checks and warping.",
                ja:"小ロットの広葉樹にとって、乾燥は隘路である。一年の天然乾燥はお金と場所を寝かせる。ヒダクマは機械学習で制御する乾燥機に取り組み、およそ十二か月の乾燥期間を、割れや狂いを出さずにおよそ三か月に縮めることをめざしてきた。",
                zh:"對小批量闊葉材而言，乾燥是瓶頸：一年的自然乾燥會壓住資金與空間。Hidakuma 投入以機器學習控制的乾燥窯，目標是在不產生開裂與翹曲的前提下，把約十二個月的乾燥週期縮短到約三個月。" } },
            { term:{ en:"Partners", ja:"連携", zh:"合作夥伴" },
              jp:"森林文化アカデミー",
              def:{
                en:"The city, the company, local sawmills and forest owners, and the prefecture's Forest Academy in Mino, which signed a cooperation agreement with Hida city in 2020, form a small network in which the forest survey, felling, sawing, drying and design are coordinated rather than left to a single log market.",
                ja:"市、会社、地元の製材所と森林所有者、そして二〇二〇年に飛騨市と連携協定を結んだ美濃の県立森林文化アカデミーが小さな網をつくり、森の調査・伐採・製材・乾燥・デザインを、ひとつの原木市場に任せきりにせず調整する。",
                zh:"市政府、公司、當地製材所與林主，以及 2020 年與飛驒市簽訂合作協定的美濃縣立森林文化學院，構成一張小網絡，協調森林調查、伐採、製材、乾燥與設計，而不是全交給單一原木市場。" } }
          ] },
        { t:"figure",
          caption:{
            en:"How a small broadleaf becomes furniture in the Hida model: the tree is followed individually rather than sorted into anonymous grades. A simplified scheme.",
            ja:"飛騨のやり方で細い広葉樹が家具になるまで。木は無名の等級に仕分けられるのではなく、一本ずつ追われる。簡略図。",
            zh:"在飛驒模式中，一株小徑闊葉樹如何變成家具：每棵樹都被個別追蹤，而非被分入匿名等級。簡化示意。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"From small tree to product", ja:"細い木から製品へ", zh:"從小徑木到產品" }, per:4,
            steps:[
              { t:{ en:"Survey", ja:"調査", zh:"調查" }, d:{ en:"Species, size and quality of standing trees are recorded before felling.", ja:"伐る前に立木の樹種・大きさ・質を記録する。", zh:"伐採前記錄立木的樹種、尺寸與品質。" } },
              { t:{ en:"Selective felling", ja:"択伐", zh:"擇伐" }, d:{ en:"Small lots, cut in winter, extracted with care.", ja:"冬に小口で伐り、丁寧に搬出する。", zh:"冬季小批量伐採，小心集運。" } },
              { t:{ en:"Log by log", ja:"一本ずつ", zh:"逐根處理" }, d:{ en:"Each log is photographed and kept with its origin.", ja:"丸太ごとに撮影し、産地の情報とともに保つ。", zh:"每根原木拍照並保留產地資訊。" } },
              { t:{ en:"Thin sawing", ja:"薄挽き", zh:"薄鋸" }, d:{ en:"Sawn for the pieces it can give, not for a standard size.", ja:"規格寸法ではなく、取れる部材に合わせて挽く。", zh:"依可取得的構件鋸切，而非依標準尺寸。" } },
              { t:{ en:"Drying", ja:"乾燥", zh:"乾燥" }, d:{ en:"Air-drying, then kiln; the slowest step.", ja:"天然乾燥ののち人工乾燥。最も遅い工程。", zh:"先自然乾燥再入窯，最慢的一步。" } },
              { t:{ en:"Matching", ja:"マッチング", zh:"媒合" }, d:{ en:"Designers, makers and companies choose by the board.", ja:"デザイナーやつくり手、企業が一枚ずつ選ぶ。", zh:"設計師、工匠與企業逐板挑選。" } },
              { t:{ en:"Making", ja:"製作", zh:"製作" }, d:{ en:"Local workshops and digital fabrication.", ja:"地元の工房とデジタル工作機械。", zh:"在地工坊與數位製造。" } },
              { t:{ en:"Story", ja:"物語", zh:"故事" }, d:{ en:"The product carries the name of its forest.", ja:"製品はその森の名を携える。", zh:"產品帶著其森林的名字。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"coppice",
      title:{ en:"Coppice and its abandonment", ja:"萌芽林とその放置", zh:"萌芽林及其荒廢" },
      jp:"薪炭林",
      body:[
        { t:"p",
          text:{
            en:"For most of Japanese history the broadleaf woods near villages were the country's energy system. Oak, chestnut and other species were cut to the ground every fifteen to twenty-five years; the stumps sprouted, and a new crop of poles grew on roots that were already centuries old. The poles became firewood and charcoal for cooking, heating, smithing and, in Gifu, for the forges of Seki and the kilns of Mino. National charcoal output ran to more than two million tonnes a year in the mid-1950s. Within twenty years, with kerosene and bottled gas in every kitchen, it had shrunk to a small fraction of that.",
            ja:"日本の歴史の大半を通じて、村の近くの広葉樹林はこの国のエネルギーの仕組みそのものだった。ナラ、クリなどの木は十五年から二十五年ごとに根元から伐られ、切り株が芽吹き、すでに何百年も生きている根の上に新しい立木が育った。その木は煮炊き、暖房、鍛冶のための薪と炭となり、岐阜では関の鍛冶場や美濃の窯を支えた。全国の木炭生産は一九五〇年代半ばに年二百万トンを超えていた。二十年のうちに、灯油とプロパンガスがどの台所にも入り、その量はわずかな割合にまで縮んだ。",
            zh:"在日本歷史的大部分時間裡，村落附近的闊葉林就是這個國家的能源體系。橡木、栗木等樹種每十五到二十五年便齊根砍伐一次；樹樁萌芽，在已有數百年樹齡的根上長出新一代的枝幹。這些木材成為炊煮、取暖、打鐵用的柴薪與木炭，在岐阜則供應關市的鍛冶場與美濃的窯。1950 年代中期，全國木炭產量每年超過兩百萬噸；二十年內，隨著煤油與桶裝瓦斯進入家家戶戶的廚房，產量萎縮到只剩一小部分。" } },
        { t:"p",
          text:{
            en:"The abandoned coppice did not revert to wild forest. The stumps kept growing into multi-stemmed trees now sixty or seventy years old — the age-class peak of Gifu's natural forest lies at 66–70 years — too big to be coppiced easily, too small and crooked for good timber, and dense enough to shade out the spring flowers, grasses and young trees that the old cycle kept alive. Large old oaks are also exactly what the oak-wilt beetle prefers.",
            ja:"放置された萌芽林は、野生の森に戻ったわけではない。切り株は育ちつづけ、いまや樹齢六十年、七十年の株立ちの木になった——岐阜の天然林の齢級の山は六十六〜七十年にある。萌芽更新させるには太すぎ、良い材にするには細く曲がりすぎ、昔の循環が生かしていた春の草花や草や若木を日陰で消してしまうほど密である。そして大きく年を経たナラこそ、ナラ枯れの甲虫が最も好むものである。",
            zh:"荒廢的萌芽林並沒有回歸野生森林。樹樁持續長成如今已六、七十歲的多幹樹木——岐阜天然林的齡級高峰落在 66–70 年——太粗而難以再行萌芽更新，又太細太彎而無法成為好木材；林冠之密，足以遮蔽舊循環所維繫的春季花草、禾草與幼樹。而高大的老橡木，正是橡樹萎凋病甲蟲最偏愛的對象。" } }
      ] },
    { t:"section",
      id:"oakwilt",
      title:{ en:"Oak wilt", ja:"ナラ枯れ", zh:"橡樹萎凋病" },
      jp:"カシノナガキクイムシ",
      body:[
        { t:"p",
          text:{
            en:"Since the late 1980s, whole hillsides of oak along the Sea of Japan side have turned red in midsummer. The cause is a tiny ambrosia beetle, <em>Platypus quercivorus</em>, which bores into large oaks in mass attacks and carries a fungus, <em>Raffaelea quercivora</em>, that blocks the tree's water-conducting vessels. Mizunara is the most vulnerable; konara and chestnut are also attacked. In Gifu the first damage was found in 1996 in the upper Ibi valley, in what was then Sakauchi village; the outbreak spread through the prefecture's oak forests, peaked in fiscal 2010, and has since declined.",
            ja:"一九八〇年代の終わりから、日本海側ではナラの山腹がまるごと真夏に赤く変わるようになった。原因は小さな養菌性の甲虫カシノナガキクイムシで、大きなナラに集中的に穿入し、樹の水の通り道を塞ぐ菌（ナラ菌）を運ぶ。最も弱いのはミズナラで、コナラやクリも襲われる。岐阜では一九九六年、揖斐川上流の当時の坂内村で最初の被害が見つかり、県内のナラ林に広がり、二〇一〇年度に頂点に達したのち減っている。",
            zh:"自 1980 年代末起，日本海側整片橡木山坡會在盛夏轉紅。元兇是一種微小的養菌小蠹蟲——櫟樹長小蠹（Platypus quercivorus），它們集體鑽入大型橡木，並攜帶一種會阻塞樹木導水導管的真菌（Raffaelea quercivora）。水楢最易受害，枹櫟與栗木也會遭到侵襲。在岐阜，首例災情於 1996 年在揖斐川上游、當時的坂內村發現，其後擴散至全縣橡木林，於 2010 財政年度達到高峰，此後逐漸減少。" } },
        { t:"steps",
          items:[
            { title:{ en:"Pioneers arrive", ja:"先駆けの飛来", zh:"先鋒蟲抵達" },
              text:{
                en:"In early summer a few male beetles bore into a large oak and release an aggregation pheromone.",
                ja:"初夏、少数の雄が大きなナラに穿入し、集合フェロモンを出す。",
                zh:"初夏，少數雄蟲鑽入一株大橡木並釋放聚集費洛蒙。" } },
            { title:{ en:"Mass attack", ja:"集中加害", zh:"集體攻擊" },
              text:{
                en:"Hundreds or thousands follow; the trunk is riddled and fine frass piles at the base.",
                ja:"数百から数千が続き、幹は穴だらけになり、根元に細かな木屑がたまる。",
                zh:"數百乃至數千隻隨之而來；樹幹布滿孔洞，樹基堆積細木屑。" } },
            { title:{ en:"The fungus spreads", ja:"菌の蔓延", zh:"真菌擴散" },
              text:{
                en:"The fungus the beetles farm in their galleries kills the sapwood cells; water stops moving.",
                ja:"甲虫が坑道で育てる菌が辺材の細胞を殺し、水が上がらなくなる。",
                zh:"甲蟲在坑道中培養的真菌殺死邊材細胞，水分無法輸送。" } },
            { title:{ en:"Red in August", ja:"八月の赤", zh:"八月轉紅" },
              text:{
                en:"The leaves wilt and turn brown-red within weeks, while they are still on the tree.",
                ja:"葉は数週間でしおれ、枝についたまま赤褐色になる。",
                zh:"數週內葉片萎凋，仍掛在枝上便轉為紅褐色。" } },
            { title:{ en:"Emergence", ja:"脱出", zh:"羽化脫出" },
              text:{
                en:"The next generation emerges the following summer to attack new trees nearby.",
                ja:"次の世代は翌夏に脱出し、近くの新しい木を襲う。",
                zh:"下一代於翌年夏天羽化，攻擊附近的新樹。" } }
          ] },
        { t:"note",
          label:{ en:"The response", ja:"対策", zh:"對策" },
          text:{
            en:"Control measures include wrapping valuable trunks in plastic sheet or sticky film, fumigating or chipping infested logs before the beetles emerge, and — the long-term remedy — renewing the forest by cutting old oak so that it regrows as young coppice, which the beetle ignores. The last, of course, requires someone to want the wood.",
            ja:"対策には、大事な幹をビニールや粘着シートで巻くこと、甲虫が脱出する前に被害木を燻蒸またはチップ化すること、そして長い目で見た処方として、古いナラを伐って若い萌芽林として再生させ、甲虫が見向きもしない森に更新することがある。最後のものには、もちろん、その材を欲しがる誰かが要る。",
            zh:"防治措施包括以塑膠布或黏膠膜包覆珍貴樹幹、在甲蟲羽化前將受害木燻蒸或削片，以及——長期之計——伐除老橡木讓其重新萌芽成幼齡林，因為甲蟲對幼樹不感興趣。當然，最後一項需要有人想要這些木材。" } }
      ] },
    { t:"related",
      items:[
        { href:"furniture.html",
          why:{ en:"How Hida's broadleaves became an industry.", ja:"飛騨の広葉樹はいかに産業になったか。", zh:"飛驒闊葉樹如何成為一門產業。" } },
        { href:"bentwood.html", why:{ en:"Why beech bends and how.", ja:"ブナはなぜ、どう曲がるのか。", zh:"山毛櫸為何能彎、又如何彎。" } },
        { href:"ecology.html",
          why:{ en:"The animals and diseases of these forests.", ja:"この森の動物と病。", zh:"這些森林中的動物與病害。" } },
        { href:"satoyama.html", why:{ en:"The coppice woods of the villages.", ja:"村の薪炭林。", zh:"村落的薪炭林。" } }
      ] }
  ] };

/* ---- -------------------------------------- silviculture */
GIFU.pages["silviculture"] = { kicker:{ en:"The Forest · 07", ja:"森 · 07", zh:"森林 · 07" },
  title:{ en:"Growing Trees", ja:"木を育てる", zh:"育林" },
  jp:"造林・保育・間伐 · 百年の仕事",
  lede:{
    en:"A plantation of hinoki is a project longer than a human working life. The person who plants it will not harvest it; the person who harvests it will usually be the grandchild, or a stranger. Between the two lie forty to a hundred years of work that is mostly invisible from the road: weeding in the heat of summer, cutting vines, pruning branches, and thinning the stand again and again so that the best trees have room. This page follows a Gifu plantation through its life, explains why Japanese foresters planted so densely, sets out the arithmetic that has made replanting so hard, and describes what is being tried instead.",
    ja:"ヒノキの人工林は、人の働く一生より長い仕事である。植えた人はそれを伐らない。伐る人はふつう孫か、見知らぬ誰かである。そのあいだに四十年から百年の、道からはほとんど見えない仕事がある——夏の暑さのなかの下刈り、つる切り、枝打ち、そして最良の木に場所を与えるため、何度もくり返す間伐。この頁は、岐阜の人工林の一生をたどり、日本の林業家がなぜあれほど密に植えたのかを説明し、再造林をこれほど難しくしてきた算術を示し、代わりに何が試みられているかを述べる。",
    zh:"一片扁柏人工林，是比一個人的職業生涯還長的工程。種下它的人不會收成它；收成它的人，通常是孫輩，或是陌生人。兩者之間是四十到一百年、從路邊幾乎看不見的工作：盛夏酷暑中的除草、割藤、修枝，以及一次又一次的疏伐，讓最好的樹有空間生長。本頁追蹤一片岐阜人工林的一生，說明日本林業者為何種得如此密，列出讓再造林變得如此困難的算術，並介紹目前正在嘗試的新做法。" },
  body:[
    { t:"section",
      id:"cycle",
      title:{ en:"The life of a plantation", ja:"人工林の一生", zh:"人工林的一生" },
      jp:"地拵えから主伐まで",
      body:[
        { t:"p",
          text:{
            en:"The sequence below is the standard regime for sugi and hinoki, as taught in Japanese forestry schools and followed with local variations across Gifu. Ages are approximate and vary with site, species and the owner's aims; a stand grown for knot-free hinoki is tended more intensively and cut later than one grown for construction timber.",
            ja:"以下の順序は、日本の林業学校で教えられ、岐阜の各地で地域ごとの違いをもって行われてきたスギとヒノキの標準的な施業である。林齢はおおよそのもので、土地、樹種、所有者の目的によって変わる。無節のヒノキを目的とする林は、建築材を目的とする林より手厚く手入れされ、遅く伐られる。",
            zh:"以下順序是柳杉與扁柏的標準作業體系，為日本林業學校所教授，岐阜各地依在地條件略有差異地施行。林齡為約略數字，隨立地、樹種與林主目標而異；以無節扁柏為目標的林分，撫育更為密集，伐期也比以建築用材為目標者更晚。" } },
        { t:"steps",
          items:[
            { title:{ en:"Site preparation", ja:"地拵え", zh:"整地" },
              jp:"じごしらえ",
              meta:{ en:"Year 0", ja:"〇年", zh:"第 0 年" },
              text:{
                en:"After the previous crop is cut, branches and tops are gathered into rows along the contour and the ground is cleared for planting. The rows hold soil on the slope and slowly rot back into it.",
                ja:"前の木が伐られたあと、枝や梢を等高線に沿って列に寄せ、植える場所を整える。この列は斜面の土を押さえ、ゆっくりと土に還る。",
                zh:"前一代林木伐除後，把枝條與樹梢沿等高線集成列，清出栽植空間。這些枝條列能固定坡面土壤，並慢慢腐化回歸土中。" } },
            { title:{ en:"Planting", ja:"植栽", zh:"栽植" },
              jp:"しょくさい",
              meta:{ en:"Year 0–1, spring or autumn", ja:"〇〜一年、春か秋", zh:"第 0–1 年，春或秋" },
              text:{
                en:"Two- or three-year-old seedlings are planted by hand with a heavy hoe, traditionally about 3,000 to the hectare — one every 1.8 metres — and in old intensive districts two or three times that many.",
                ja:"二年生か三年生の苗を重い鍬で一本ずつ手で植える。伝統的には一ヘクタールにおよそ三千本——一・八メートルおきに一本——で、古い集約的な産地ではその二倍、三倍も植えた。",
                zh:"以沉重的鋤頭逐株人工栽植二至三年生苗木，傳統上每公頃約 3,000 株——每 1.8 公尺一株——而在古老的集約林業產地，密度更達其兩、三倍。" } },
            { title:{ en:"Weeding", ja:"下刈り", zh:"除草（下刈）" },
              jp:"したがり",
              meta:{ en:"Years 1–6, every summer", ja:"一〜六年、毎夏", zh:"第 1–6 年，每年夏季" },
              text:{
                en:"Grasses, bamboo grass, brambles and pioneer shrubs grow faster than the seedlings and would smother them. Every July and August the whole planting is cut back with brush-cutters on slopes of thirty degrees and more — the hottest, hardest and least loved job in forestry, repeated until the young trees are taller than the competition, around two to two and a half metres.",
                ja:"草、ササ、キイチゴ、先駆の低木は苗より速く育ち、苗を覆ってしまう。毎年七月と八月、三十度を超える斜面で植栽地全体を刈払機で刈る——林業で最も暑く、最もきつく、最も嫌われる仕事で、若木が競争相手よりも高く、およそ二〜二・五メートルになるまで続ける。",
                zh:"禾草、細竹、懸鉤子與先驅灌木長得比苗木快，會把苗木悶死。每年七、八月，要在三十度以上的陡坡用割草機把整片造林地割過一遍——這是林業中最熱、最辛苦也最不受歡迎的工作，一直持續到幼樹高過競爭植物，約二到二點五公尺為止。" } },
            { title:{ en:"Vine cutting and cleaning", ja:"つる切り・除伐", zh:"割藤與除伐" },
              jp:"つるきり・じょばつ",
              meta:{ en:"Years 7–20", ja:"七〜二十年", zh:"第 7–20 年" },
              text:{
                en:"Wisteria and other climbers that twist round the young stems are cut, and self-sown broadleaves and badly formed crop trees are removed so that the stand closes evenly.",
                ja:"若い幹に巻きつくフジなどのつる植物を切り、自然に生えた広葉樹や形の悪い植栽木を除いて、林冠が均一に閉じるようにする。",
                zh:"切除纏繞幼樹主幹的紫藤等攀緣植物，並除去天然更新的闊葉樹與形質不良的植栽木，使林冠均勻閉合。" } },
            { title:{ en:"Pruning", ja:"枝打ち", zh:"修枝" },
              jp:"えだうち",
              meta:{ en:"Years 10–30", ja:"十〜三十年", zh:"第 10–30 年" },
              text:{
                en:"Lower branches are cut flush with the trunk in several lifts, so that new wood grows over the stubs and the outer part of the log becomes clear of knots.",
                ja:"下枝を数回に分けて幹ぎわで切り、新しい材がその切り口を包むようにして、丸太の外側を節のない材にする。",
                zh:"分數次將下枝齊幹剪除，讓新生木質包覆切口，使原木外層成為無節材。" } },
            { title:{ en:"Thinning", ja:"間伐", zh:"疏伐" },
              jp:"かんばつ",
              meta:{ en:"From about year 15, every 5–10 years", ja:"十五年ごろから、五〜十年ごと", zh:"約第 15 年起，每 5–10 年" },
              text:{
                en:"Part of the stand — a quarter to a third of the stems at each pass — is removed so that the remaining trees keep their crowns and grow in diameter. Early thinnings are often left on the ground; later ones produce saleable logs.",
                ja:"林の一部——一回ごとに本数の四分の一から三分の一——を除き、残る木が樹冠を保って太れるようにする。初期の間伐はしばしば伐り捨てられ、のちの間伐は売れる丸太を生む。",
                zh:"每次伐除林分中四分之一到三分之一的株數，讓留存木保持樹冠並增加直徑。早期疏伐常就地棄置，後期疏伐則能產出可販售的原木。" } },
            { title:{ en:"Final harvest", ja:"主伐", zh:"主伐" },
              jp:"しゅばつ",
              meta:{ en:"Year 45–100+", ja:"四十五〜百年以上", zh:"第 45–100 年以上" },
              text:{
                en:"The remaining trees are cut, and the cycle should begin again with site preparation and replanting. Whether it does is the central question of Japanese forestry today.",
                ja:"残った木を伐り、ふたたび地拵えと植栽から循環が始まる——はずである。それが実際に始まるかどうかが、いまの日本の林業の中心の問いである。",
                zh:"伐除剩餘林木，循環理應再從整地與重新栽植開始。它是否真的重新開始，正是當今日本林業的核心問題。" } }
          ] },
        { t:"figure",
          caption:{
            en:"How the number of trees on a hectare falls as a hinoki stand is thinned. A generalised regime drawn from standard density-control practice; actual figures depend on site and aims. Each drop is a thinning; the volume on the hectare nevertheless keeps rising.",
            ja:"ヒノキ林が間伐されるにつれて一ヘクタールの本数がどう減るか。標準的な密度管理から描いた一般化した例で、実際の数は立地と目的による。段差はそれぞれ一回の間伐である。それでも一ヘクタールの材積は増えつづける。",
            zh:"扁柏林分隨疏伐而每公頃株數如何遞減。依標準密度管理繪製的一般化示例，實際數字依立地與經營目標而異。每一段下降即一次疏伐；儘管如此，每公頃材積仍持續增加。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"Stems per hectare over a rotation", ja:"一伐期の本数の推移", zh:"一個輪伐期內每公頃株數" },
            unit:{ en:"trees / ha", ja:"本／ha", zh:"株／公頃" },
            x0:0, x1:80, y0:0, y1:3000, tick:500, xt:[0,10,20,30,40,50,60,70,80],
            series:[
              { n:{ en:"Stems per ha", ja:"本数／ha", zh:"每公頃株數" }, dots:false,
                pts:[[0,3000],[12,3000],[12,2600],[18,2600],[18,1900],[26,1900],[26,1400],[36,1400],[36,1050],[48,1050],[48,800],[62,800],[62,600],[80,600]] }
            ],
            marks:[ { x:12, t:{ en:"cleaning", ja:"除伐", zh:"除伐" } }, { x:18, t:{ en:"1st thinning", ja:"初回間伐", zh:"首次疏伐" } }, { x:48, t:{ en:"later thinnings sell", ja:"後期間伐は売れる", zh:"後期疏伐可販售" } } ],
            note:{ en:"Horizontal axis: stand age in years.", ja:"横軸：林齢（年）。", zh:"橫軸：林齡（年）。" } }); } }
      ] },
    { t:"section",
      id:"density",
      title:{ en:"Why plant so close?", ja:"なぜそれほど密に植えるのか", zh:"為何種得這麼密？" },
      jp:"密植と年輪",
      body:[
        { t:"p",
          text:{
            en:"European visitors to Japanese plantations are often struck by how crowded they are. The density is deliberate. Trees planted close together grow tall before they grow thick; they shed or are relieved of their lower branches early, so knots stay small and near the pith; and they lay down narrow, even annual rings, because each tree has only a little light to share. Narrow, even rings are exactly what the Japanese timber market paid for. The prestige of Tōnō hinoki rests on rings two or three millimetres wide and almost perfectly concentric; the famous Yoshino sugi of Nara was planted at eight thousand or more stems to the hectare and thinned a dozen times.",
            ja:"日本の人工林を訪れたヨーロッパの人は、その混みぐあいにしばしば驚く。その密度は意図されたものである。密に植えられた木は太る前に高く伸び、早くから下枝を落とすか落とされるので、節は小さく芯の近くにとどまる。そして、一本ごとに分けられる光が少ないから、狭くそろった年輪を刻む。狭くそろった年輪こそ、日本の木材市場が値をつけてきたものだった。東濃ひのきの誉れは、幅二、三ミリでほとんど完全な同心円の年輪にある。名高い奈良の吉野杉は一ヘクタールに八千本以上植えられ、十数回も間伐された。",
            zh:"來訪日本人工林的歐洲人，常對其密度感到驚訝。這種密度是刻意的。種得密的樹會先長高再長粗；下枝很早就自然脫落或被修除，因此節疤小且靠近髓心；而且因為每棵樹能分到的光不多，年輪窄而均勻。窄而均勻的年輪，正是日本木材市場願意出高價的特徵。東濃扁柏的聲望，就建立在寬僅兩三公釐、近乎完美同心圓的年輪上；著名的奈良吉野杉每公頃種八千株以上，並疏伐十餘次。" } },
        { t:"compare",
          items:[
            { title:{ en:"Dense planting", ja:"密植", zh:"密植" },
              jp:"みっしょく",
              body:[
                { t:"ul",
                  items:[
                    { en:"Tall, straight, slightly tapering stems", ja:"高く、まっすぐで、梢殺の少ない幹", zh:"高挑、通直、尖削度小的樹幹" },
                    { en:"Narrow, even rings; fine texture", ja:"狭くそろった年輪、細かな肌目", zh:"年輪窄而均勻，木理細緻" },
                    { en:"Small knots confined to the core", ja:"小さな節が芯のまわりにとどまる", zh:"小節疤侷限在髓心附近" },
                    { en:"More seedlings, more labour, many thinnings", ja:"苗も手間も多く、間伐の回数も多い", zh:"苗木多、人力多、疏伐次數多" },
                    { en:"Unstable if thinning is neglected", ja:"間伐を怠れば不安定になる", zh:"若疏於疏伐則林分不穩" }
                  ] }
              ] },
            { title:{ en:"Wide planting", ja:"疎植", zh:"疏植" },
              jp:"そしょく",
              body:[
                { t:"ul",
                  items:[
                    { en:"Thicker, more tapered stems sooner", ja:"早く太り、梢殺の大きい幹", zh:"較快長粗、尖削度較大" },
                    { en:"Wide rings; lower density near the pith", ja:"広い年輪、芯の近くは比重が低い", zh:"年輪寬，髓心附近密度較低" },
                    { en:"Larger knots unless pruned", ja:"枝打ちしなければ節が大きい", zh:"若不修枝則節疤較大" },
                    {
                      en:"Fewer seedlings, less weeding and thinning cost",
                      ja:"苗が少なく、下刈り・間伐の費用が小さい",
                      zh:"苗木少，除草與疏伐成本低" },
                    { en:"Good for structural timber, engineered wood", ja:"構造材やエンジニアードウッドには十分", zh:"適合結構材與工程木材" }
                  ] }
              ] }
          ] },
        { t:"p",
          text:{
            en:"The logic depended on labour being cheap and fine timber being dear. When both conditions reversed after the 1980s, the dense regime became a trap: stands planted at three thousand or more stems a hectare needed thinning that no one could afford, and unthinned stands of thin, tall, crowded trees became prone to snow break, wind throw and landslip, with dark, bare floors that let rain wash the soil away.",
            ja:"この論理は、人手が安く、良材が高いことに支えられていた。一九八〇年代以降にその二つの条件が逆転すると、密植の施業は罠になった。一ヘクタールに三千本以上植えた林は、誰も負担できない間伐を必要とし、間伐されない細く高く混み合った林は、雪折れ、風倒、崩壊を起こしやすくなり、暗く裸の林床は雨に土を流させた。",
            zh:"這套邏輯仰賴人工便宜而良材昂貴。1980 年代後兩個條件同時逆轉，密植體系反成陷阱：每公頃三千株以上的林分需要無人負擔得起的疏伐；未經疏伐、細高擁擠的林分容易雪折、風倒與崩塌，陰暗裸露的林床更讓雨水沖走表土。" } }
      ] },
    { t:"section",
      id:"pruning",
      title:{ en:"Pruning for clear wood", ja:"無節のための枝打ち", zh:"為無節材而修枝" },
      jp:"役物",
      body:[
        { t:"p",
          text:{
            en:"In a Japanese house built with exposed timber, the face of every post and the underside of every beam can be seen. The market therefore graded timber not only for strength but for appearance, and the top grades — <em>yakumono</em>, “feature pieces” — were knot-free on one, two, three or all four faces. A knot-free four-sided hinoki post could fetch many times the price of an ordinary one. To produce it, a forester had to prune: to climb each tree with a ladder or climbing frame and cut every branch cleanly close to the trunk, starting when the trunk was only a few centimetres thick, so that decades of clear wood would grow over the healed stubs.",
            ja:"木を見せてつくる日本の家では、柱の面も梁の下面も目に入る。だから市場は材を強さだけでなく見た目で格付けし、最上の等級——役物——は、一面・二面・三面・四面が無節のものだった。四方無節のヒノキの柱は、ふつうの柱の何倍もの値がつきえた。それをつくるには、林業家は枝を打たねばならない。梯子や木登り器で一本ずつ登り、幹がまだ数センチの太さのころから、枝を幹ぎわできれいに切る。そうすれば、癒えた切り口の上に何十年分もの無節の材が育つ。",
            zh:"在木構外露的日本住宅中，每根柱子的表面、每根樑的底面都看得見。因此市場不只依強度，也依外觀為木材分級；最高等級——「役物」——是一面、兩面、三面或四面無節的材料。四面無節的扁柏柱，價格可達普通柱的數倍。要生產這種材，林業者必須修枝：用梯子或攀樹器一株株爬上去，從樹幹僅數公分粗時開始，貼著樹幹乾淨地剪除每一根枝條，讓數十年的無節木質包覆已癒合的切口。" } },
        { t:"note",
          label:{ en:"A disappearing skill", ja:"消えゆく技", zh:"消失中的技藝" },
          text:{
            en:"As houses were built with plasterboard over hidden frames and knot-free timber lost its premium, pruning was the first operation owners stopped paying for. In Gifu, as elsewhere, few stands planted after the 1980s have been fully pruned, and the grade of timber the Tōnō region was famous for is becoming a product of older forests only.",
            ja:"家が石膏ボードで骨組みを隠してつくられるようになり、無節材がその割り増しを失うと、枝打ちは所有者が真っ先に払わなくなった作業だった。岐阜でもほかと同じく、一九八〇年代以降に植えられた林で十分に枝打ちされたものは少なく、東濃が名を馳せた等級の材は、古い森だけがもたらすものになりつつある。",
            zh:"當住宅改用石膏板包覆隱藏骨架、無節材失去溢價，修枝便成了林主最先停止付費的作業。岐阜與各地一樣，1980 年代以後種下的林分，完整修枝者寥寥無幾；東濃地區賴以成名的高級材，正逐漸成為只有老林才能提供的產品。" } }
      ] },
    { t:"section",
      id:"arithmetic",
      title:{ en:"The arithmetic of replanting", ja:"再造林の算術", zh:"再造林的算術" },
      jp:"育林経費と立木価格",
      body:[
        { t:"p",
          text:{
            en:"The government's own figures show why so many owners who fell a stand do not replant it. Establishing a hectare of sugi — site preparation, three thousand seedlings and five summers of weeding — cost about ¥1.84 million in the Forestry Agency's model calculation. When a fifty-year-old stand of sugi is cut, the logs sell for about ¥3.18 million a hectare; after felling, extraction and haulage, the owner is left with about ¥0.91 million. In other words, the entire proceeds of one rotation would pay for only half of the next one, before any thinning or pruning is counted.",
            ja:"伐った林の多くが植え直されない理由は、政府自身の数字が示している。スギを一ヘクタール植え育てること——地拵え、三千本の苗、五夏の下刈り——には、林野庁の試算でおよそ百八十四万円かかる。五十年生のスギ林を伐ると、丸太は一ヘクタールおよそ三百十八万円で売れるが、伐採・搬出・運搬ののち所有者に残るのはおよそ九十一万円である。つまり、一伐期の収入のすべてをもってしても、間伐や枝打ちを数える前に、次の伐期の半分しか賄えない。",
            zh:"政府自己的數字說明了為何許多林主伐木後不再重新造林。依林野廳的試算，造一公頃柳杉林——整地、三千株苗木、五個夏天的除草——約需 184 萬日圓。五十年生的柳杉林伐採後，原木每公頃約可售得 318 萬日圓；扣除伐採、集材與運輸後，林主手上只剩約 91 萬日圓。換言之，一整個輪伐期的收入，只夠支付下一期造林費用的一半，這還沒算入疏伐與修枝。" } },
        { t:"figure",
          caption:{
            en:"Model economics of one hectare of sugi, in millions of yen: what the logs of a fifty-year-old stand sell for, what reaches the forest owner, and what it costs to replant and weed. Source: Forestry Agency, Annual Report on Forest and Forestry in Japan (FY2020 special feature).",
            ja:"スギ一ヘクタールのモデル収支（百万円）。五十年生の林の丸太の売上、森林所有者に届く額、植え直して下刈りする費用。出典：林野庁『森林・林業白書』（令和二年度特集）。",
            zh:"一公頃柳杉的模型收支（百萬日圓）：五十年生林分原木的售價、林主實際到手金額，以及重新造林與除草的費用。資料來源：林野廳《森林・林業白皮書》（2020 年度專題）。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"One hectare of sugi, ¥ million", ja:"スギ一ヘクタール（百万円）", zh:"一公頃柳杉（百萬日圓）" }, labelW:260, dec:2,
            items:[
              { n:{ en:"Log sales at 50 years", ja:"五十年生の丸太の売上", zh:"50 年生原木售價" }, v:3.18, f:"#E0E6DB" },
              { n:{ en:"Left to the owner", ja:"所有者の手取り", zh:"林主實得" }, v:0.91, f:"#EADCC1" },
              { n:{ en:"Cost to replant and weed", ja:"植栽と下刈りの費用", zh:"再造林與除草成本" }, v:1.84, f:"#EEE1DF" }
            ],
            note:{ en:"The gap between the second and third bars is the reason most replanting in Japan depends on subsidy.", ja:"二本目と三本目の棒の差が、日本の再造林の大半が補助金に頼る理由である。", zh:"第二與第三根長條之間的落差，正是日本多數再造林仰賴補助金的原因。" } }); } },
        { t:"p",
          text:{
            en:"The collapse of standing-timber prices explains the gap. In 1980, at the peak, a cubic metre of standing sugi was worth about ¥22,700 to its owner and hinoki about ¥42,900; by March 2024 the figures were about ¥4,100 and ¥8,900 — a fall of more than four-fifths in nominal terms, and much more after inflation. Subsidies from national and prefectural governments typically cover most of the cost of planting and early tending, which is why the choice to replant is in practice a choice about whether to apply for them.",
            ja:"その差は、立木価格の崩落で説明できる。頂点の一九八〇年、スギの立木は一立方メートルで所有者におよそ二万二千七百円、ヒノキはおよそ四万二千九百円の値打ちがあった。二〇二四年三月にはそれぞれおよそ四千百円と八千九百円——名目で五分の四以上の下落で、物価を考えればそれよりはるかに大きい。国と県の補助はふつう植栽と初期の保育の費用の大半をまかなう。だから、植え直すかどうかの選択は、実際には補助を申請するかどうかの選択である。",
            zh:"落差源於立木價格的崩跌。在 1980 年的高峰，每立方公尺柳杉立木對林主約值 22,700 日圓，扁柏約 42,900 日圓；到 2024 年 3 月，分別只剩約 4,100 與 8,900 日圓——名目跌幅超過八成，考慮通膨則更大。國家與縣的補助通常涵蓋造林與初期撫育的大部分費用，因此是否重新造林，實際上是是否申請補助的決定。" } },
        { t:"figure",
          caption:{
            en:"Standing-timber prices — what the owner receives for a cubic metre of trees on the stump — at the 1980 peak and in March 2024, in yen. Source: Japan Real Estate Institute survey, as reported by the Forestry Agency.",
            ja:"立木価格——立っている木一立方メートルに所有者が受け取る額——の一九八〇年の頂点と二〇二四年三月の比較（円）。出典：日本不動産研究所の調査（林野庁資料による）。",
            zh:"立木價格——林主就一立方公尺未伐立木所能收取的金額——1980 年高峰與 2024 年 3 月比較（日圓）。資料來源：日本不動產研究所調查（依林野廳資料）。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Standing timber, ¥ per m³", ja:"山元立木価格（円／m³）", zh:"山元立木價格（日圓／m³）" }, labelW:220,
            items:[
              { n:{ en:"Hinoki, 1980", ja:"ヒノキ 一九八〇年", zh:"扁柏 1980" }, v:42947, f:"#EDE5D2" },
              { n:{ en:"Hinoki, 2024", ja:"ヒノキ 二〇二四年", zh:"扁柏 2024" }, v:8940, f:"#EDE5D2" },
              { n:{ en:"Sugi, 1980", ja:"スギ 一九八〇年", zh:"柳杉 1980" }, v:22707, f:"#E0E6DB" },
              { n:{ en:"Sugi, 2024", ja:"スギ 二〇二四年", zh:"柳杉 2024" }, v:4127, f:"#E0E6DB" },
              { n:{ en:"Pine, 1980", ja:"マツ 一九八〇年", zh:"松 1980" }, v:11162, f:"#E6E4E0" },
              { n:{ en:"Pine, 2024", ja:"マツ 二〇二四年", zh:"松 2024" }, v:2570, f:"#E6E4E0" }
            ] }); } }
      ] },
    { t:"section",
      id:"lowcost",
      title:{ en:"Cheaper ways to start a forest", ja:"森を始めるより安い方法", zh:"更便宜的造林方式" },
      jp:"低コスト造林",
      body:[
        { t:"p",
          text:{
            en:"Since the 2010s the Forestry Agency and prefectural research stations have concentrated on lowering the cost of the first ten years. None of the methods is dramatic on its own; together they aim to halve what the table above calls the cost of replanting.",
            ja:"二〇一〇年代から、林野庁と県の試験研究機関は、最初の十年の費用を下げることに力を注いできた。どの方法もひとつでは劇的ではないが、あわせて、上の表でいう再造林の費用を半分にすることをめざしている。",
            zh:"自 2010 年代起，林野廳與各縣試驗研究機構集中心力降低頭十年的成本。這些方法單獨看都不驚人，合在一起的目標是把上表所說的再造林成本減半。" } },
        { t:"defs",
          items:[
            { term:{ en:"Integrated harvest and planting", ja:"伐採と造林の一貫作業", zh:"伐採與造林一貫作業" },
              jp:"一貫作業システム",
              def:{
                en:"The machines and crew that fell the old stand prepare the site and carry seedlings up the slope immediately, instead of leaving the cleared land to a separate contractor months later, when weeds have already taken it.",
                ja:"古い林を伐った機械と作業班が、そのまま地拵えをし、苗を斜面に運び上げる。何か月もあとに、すでに雑草に覆われた土地を別の請負人に任せるのではない。",
                zh:"伐除舊林的機械與作業班，直接接著整地並把苗木運上坡，而不是等數月後雜草已占據伐跡地時，才交給另一家承包商。" } },
            { term:{ en:"Container seedlings", ja:"コンテナ苗", zh:"容器苗" },
              jp:"こんてななえ",
              def:{
                en:"Seedlings raised in cells with a plug of roots and soil can be planted in most seasons, survive better than bare-root stock and are quicker to plant with a narrow tool. The Gifu Prefectural Research Institute for Forests has worked out how to raise hinoki container seedlings, stressing a well-formed root plug over size, and has trialled planting in late autumn and through the year.",
                ja:"根鉢ごと育てた苗は、ほとんどの季節に植えられ、裸苗より活着がよく、細い道具で速く植えられる。岐阜県森林研究所は、大きさより根鉢の形成を重んじるヒノキのコンテナ苗の育て方をまとめ、晩秋植えや通年の植栽も試してきた。",
                zh:"連同根團與介質培育的苗木，大多數季節都能種植，存活率高於裸根苗，且可用細長工具快速栽植。岐阜縣森林研究所整理出扁柏容器苗的育苗方法，強調根團成形重於苗木大小，並試驗晚秋與全年栽植。" } },
            { term:{ en:"Slow-release fertiliser", ja:"超緩効性肥料", zh:"超緩效肥料" },
              jp:"ちょうかんこうせい",
              def:{
                en:"In Gifu trials, hinoki container seedlings raised with a fertiliser releasing over about 700 days had grown about a third more in height and root-collar diameter than bare-root seedlings by the end of their second year. Since weeding can stop once the young trees overtop the weeds — around two to two and a half metres, reached in three or four years — faster early growth means fewer summers of weeding; at one trial site the number fell from five to four.",
                ja:"岐阜の試験では、およそ七百日かけて効く肥料で育てたヒノキのコンテナ苗は、植栽二年目の終わりには、樹高と根元直径の成長が裸苗より三割以上大きかった。若木が雑草より高くなれば——三、四年で達するおよそ二〜二・五メートル——下刈りはやめられるから、初期の成長が速ければ下刈りの夏は少なくてすむ。ある試験地では五回が四回になった。",
                zh:"在岐阜的試驗中，以約 700 天緩釋肥料培育的扁柏容器苗，到種植第二年年底，樹高與根徑生長量比裸根苗多出三成以上。由於幼樹一旦高過雜草——約兩到兩公尺半，三、四年可達——即可停止除草，初期長得快就意味著除草的夏天較少；在某一試驗地，除草次數由五次減為四次。" } },
            { term:{ en:"Lower density", ja:"低密度植栽", zh:"低密度栽植" },
              jp:"ていみつどしょくさい",
              def:{
                en:"Planting 2,000–2,500 seedlings to the hectare instead of 3,000 or more cuts seedling and planting costs and postpones or removes the first thinning, at the price of wider rings and larger knots — acceptable for timber destined for glulam and CLT.",
                ja:"一ヘクタール三千本以上ではなく二千〜二千五百本を植えれば、苗と植栽の費用が下がり、初回の間伐を先送りするか不要にできる。そのかわり年輪は広く節は大きくなるが、集成材やCLTに向かう材なら受け入れられる。",
                zh:"每公頃改種 2,000–2,500 株而非 3,000 株以上，可降低苗木與栽植成本，並延後或省去首次疏伐；代價是年輪變寬、節疤變大——但對預定做集成材與 CLT 的木材而言可以接受。" } },
            { term:{ en:"Elite trees", ja:"エリートツリー", zh:"精英樹" },
              jp:"特定母樹",
              def:{
                en:"Second-generation selections from the best trees of national breeding programmes. Those certified as “specified mother trees” under the 2013 revision of the thinning law must grow roughly one and a half times as fast as ordinary stock, with straight stems, adequate wood strength and about half or less the usual pollen. Faster growth shortens weeding; lower pollen serves the national pollen plan.",
                ja:"国の育種事業の最良の木から選んだ第二世代の木。二〇一三年改正の間伐等特措法で「特定母樹」に指定されるには、成長がふつうの苗のおよそ一・五倍以上、幹がまっすぐで、材の強さが十分、花粉量がおおむね半分以下でなければならない。成長が速ければ下刈りが短くなり、花粉が少なければ国の花粉症対策にかなう。",
                zh:"從國家育種計畫最佳樹木中選出的第二代樹。依 2013 年修訂的間伐特別措施法，要被指定為「特定母樹」，生長速度須約為一般苗木的 1.5 倍以上，樹幹通直、材質強度足夠，花粉量約為一般的一半以下。長得快可縮短除草期，花粉少則符合國家花粉對策。" } },
            { term:{ en:"Protection from deer and serow", ja:"シカ・カモシカ対策", zh:"防鹿與長鬃山羊" },
              jp:"獣害防除",
              def:{
                en:"Sika deer and the protected Japanese serow browse young conifers; hares bite off the bark at the root collar. Replanted sites in Gifu are routinely fenced or fitted with individual tree shelters — in a 2019–2020 project at Yaotsu, 7.96 hectares of sugi were each given a tube of biodegradable plastic.",
                ja:"ニホンジカと保護されたニホンカモシカは若い針葉樹を食べ、ノウサギは根元の樹皮をかじる。岐阜の再造林地は柵で囲うか一本ずつツリーシェルターをつけるのが通例である——八百津町での二〇一九〜二〇二〇年の事業では、七・九六ヘクタールのスギの一本一本に生分解性プラスチックの筒がつけられた。",
                zh:"梅花鹿與受保護的日本長鬃山羊會啃食幼齡針葉樹，野兔則啃咬根頸部樹皮。岐阜的再造林地通常會設圍籬或逐株加裝護樹管——在八百津町 2019–2020 年的一項事業中，7.96 公頃的柳杉每株都套上了生物可分解塑膠管。" } }
          ] }
      ] },
    { t:"section",
      id:"zoning",
      title:{ en:"Deciding what each forest is for", ja:"森ごとの役割を決める", zh:"決定每片森林的用途" },
      jp:"ゾーニング",
      body:[
        { t:"p",
          text:{
            en:"Gifu's fourth Forest Plan, covering fiscal 2022 to 2026, starts from a map rather than a harvest target. In January 2022 the prefecture divided its private and public forests into four functional zones. Only about a quarter of the forest is to be managed primarily for timber — the accessible, productive plantations on gentle slopes near roads. The largest zone is for environmental protection: forests on steep ground, at the heads of catchments and on thin soils, where the aim is to let plantations turn gradually into mixed conifer–broadleaf forest that needs little tending and holds soil and water.",
            ja:"岐阜県の第四期森林づくり基本計画（二〇二二〜二〇二六年度）は、伐採の目標ではなく地図から始まる。二〇二二年一月、県は森を四つの機能の区域に分けた。主に木材のために管理されるのは森のおよそ四分の一——道に近いなだらかな斜面の、行きやすく生産力のある人工林——にすぎない。最大の区域は環境保全のためのもので、急斜面、流域の源頭、薄い土壌の森では、人工林を少しずつ手のかからない針広混交林へ移し、土と水を守らせることをめざす。",
            zh:"岐阜縣第四期森林建設基本計畫（2022–2026 財政年度）的起點是一張地圖，而非伐採目標。2022 年 1 月，縣將森林劃分為四種機能分區。以木材生產為主要目的經營的，只有約四分之一——靠近道路、坡度平緩、易於進入且生產力高的人工林。最大的分區是環境保全林：陡坡、集水區源頭與土層淺薄處的森林，目標是讓人工林逐步轉變為少需撫育、能保土涵水的針闊混交林。" } },
        { t:"figure",
          caption:{
            en:"Gifu's forests by functional zone, in hectares, as designated in January 2022 under the fourth Forest Plan. Source: Gifu Prefecture.",
            ja:"第四期計画にもとづき二〇二二年一月に指定された、機能区域別の岐阜の森（ヘクタール）。出典：岐阜県。",
            zh:"依第四期計畫於 2022 年 1 月劃定的岐阜森林機能分區（公頃）。資料來源：岐阜縣。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Forest zoning, 2022", ja:"森林のゾーニング 二〇二二年", zh:"森林分區 2022 年" }, labelW:250, unit:"ha",
            items:[
              { n:{ en:"Environmental protection forest", ja:"環境保全林", zh:"環境保全林" }, v:478581, f:"#E0E6DB" },
              { n:{ en:"Timber production forest", ja:"木材生産林", zh:"木材生產林" }, v:205242, f:"#EDE5D2" },
              { n:{ en:"Tourism and landscape forest", ja:"観光景観林", zh:"觀光景觀林" }, v:53010, f:"#E6E2EC" },
              { n:{ en:"Living-environment forest", ja:"生活保全林", zh:"生活保全林" }, v:20906, f:"#E0E7E9" }
            ] }); } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Thinning", ja:"間伐", zh:"疏伐" },
              v:{ en:"9,600 ha/yr", ja:"年九千六百ha", zh:"每年 9,600 公頃" },
              d:{ en:"Target under the fourth plan.", ja:"第四期計画の目標。", zh:"第四期計畫目標。" } },
            { k:{ en:"Log production", ja:"素材生産量", zh:"原木產量" },
              v:{ en:"≈ 600,000 m³", ja:"約六十万m³", zh:"約 60 萬 m³" },
              d:{
                en:"Target; 576,000 m³ were produced in FY2020.",
                ja:"目標。二〇二〇年度実績は五十七万六千m³。",
                zh:"目標；2020 年度實績 57.6 萬 m³。" } },
            { k:{ en:"Forest technicians", ja:"森林技術者", zh:"森林技術人員" },
              v:"1,140",
              d:{ en:"Target, from 939 in FY2020.", ja:"目標。二〇二〇年度は九百三十九人。", zh:"目標；2020 年度為 939 人。" } },
            { k:{ en:"New workers", ja:"新規就業者", zh:"新進人員" },
              v:{ en:"80 / yr", ja:"年八十人", zh:"每年 80 人" },
              d:{ en:"Recruitment target.", ja:"確保の目標。", zh:"招募目標。" } }
          ] },
        { t:"p",
          text:{
            en:"Some towns have gone further. In Yaotsu, on the Kiso River, a “hundred-year forest” project reportedly plants broadleaf seedlings into gaps opened in conifer plantations, so that the next forest will be mixed. The logic is patience: a mixed forest, once established, regenerates itself, whereas a plantation must be replanted by someone, at a cost that someone must pay.",
            ja:"さらに先へ進んだ町もある。木曽川沿いの八百津町では「百年の森づくり」として、針葉樹の人工林に開けた隙間に広葉樹の苗を植え、次の森が混交林になるようにしているという。その論理は忍耐である。混交林はいったんできれば自ら更新するが、人工林は誰かが、誰かの払う費用で植え直さなければならない。",
            zh:"有些町走得更遠。據報導，在木曾川畔的八百津町，「百年之森」計畫把闊葉樹苗種進針葉人工林中開出的林隙，讓下一代森林成為混交林。其邏輯是耐心：混交林一旦成形便能自我更新，而人工林則必須有人重新栽植，且費用總得有人負擔。" } }
      ] },
    { t:"section",
      id:"long",
      title:{ en:"Long rotations and layered forests", ja:"長伐期と複層林", zh:"長伐期與複層林" },
      jp:"長伐期施業",
      body:[
        { t:"p",
          text:{
            en:"The alternative to clear-felling at fifty years is simply to wait. Many Gifu owners, especially in the hinoki districts of Tōnō, now plan rotations of eighty to a hundred years or more, thinning periodically for income and letting the remaining trees grow into large-diameter logs of the kind needed for temple and shrine repair and for timber-framed public buildings. A variant is the multi-storeyed forest, in which a second generation is planted beneath the thinned canopy of the first, so that the ground is never bare.",
            ja:"五十年で皆伐する代わりの道は、ただ待つことである。岐阜の所有者の多く、とくに東濃のヒノキの産地では、いまや八十年から百年以上の伐期を計画し、収入のために折々に間伐し、残した木を社寺の修理や木造の公共建築に要る大径材に育てる。その変形が複層林で、間伐した第一世代の樹冠の下に第二世代を植え、地面が裸になることがないようにする。",
            zh:"取代五十年皆伐的另一條路，就是等待。許多岐阜林主，尤其是東濃的扁柏產區，如今規劃八十到一百年以上的伐期，定期疏伐以取得收入，讓留下的樹長成寺社修繕與木造公共建築所需的大徑材。其變體是複層林：在第一代疏伐後的林冠下栽植第二代，讓地面永不裸露。" } },
        { t:"compare",
          cols:3,
          items:[
            { title:{ en:"Short rotation", ja:"短伐期", zh:"短伐期" },
              jp:"四十〜五十年",
              text:{
                en:"Clear-fell and replant at 40–50 years. Uniform logs for sawmills and glulam; high replanting cost each cycle; bare slopes for several years.",
                ja:"四十〜五十年で皆伐して植え直す。製材や集成材向けのそろった丸太。そのたびに再造林の費用が高く、斜面は数年間裸になる。",
                zh:"40–50 年皆伐後重新栽植。產出適合製材與集成材的均一原木；每期再造林成本高，坡面裸露數年。" } },
            { title:{ en:"Long rotation", ja:"長伐期", zh:"長伐期" },
              jp:"八十〜百年以上",
              text:{
                en:"Repeated thinning, harvest at 80–100+ years. Large, valuable logs; fewer replanting cycles; income spread across thinnings; more risk from storms over the longer life.",
                ja:"間伐をくり返し、八十〜百年以上で伐る。大きく価値の高い丸太。再造林の回数が少なく、収入は間伐に分散する。長い一生のあいだの風雪の危険は増す。",
                zh:"反覆疏伐，80–100 年以上才主伐。產出大而高價的原木；再造林次數少；收入分散於各次疏伐；但較長的林齡意味著承受更多風雪風險。" } },
            { title:{ en:"Continuous cover", ja:"複層林・非皆伐", zh:"複層林／非皆伐" },
              jp:"ふくそうりん",
              text:{
                en:"Selective harvest and underplanting or natural regeneration; the forest is never cleared. Best for soil, water and landscape; demands skilled felling and a good road network.",
                ja:"択伐と樹下植栽、あるいは天然更新。森はけっして裸にならない。土・水・景観には最良だが、腕の良い伐採と良い路網が要る。",
                zh:"擇伐加上林下栽植或天然更新；森林從不皆伐。對土壤、水源與景觀最佳；但需要熟練的伐木技術與完善的林道網。" } }
          ] },
        { t:"quote",
          text:{
            en:"A tree that took a hundred years to grow should be made into something that will be used for a hundred years.",
            ja:"百年かかって育った木は、百年使えるものに。",
            zh:"花了一百年長成的樹，就該做成能用一百年的東西。" },
          cite:{
            en:"Motto of Oak Village, the woodworking community in Kiyomi, Takayama, founded 1974",
            ja:"一九七四年創立、高山市清見の木工集団オークヴィレッジの標語",
            zh:"1974 年創立於高山市清見的木工團體 Oak Village 的座右銘" } }
      ] },
    { t:"related",
      items:[
        { href:"forests.html",
          why:{ en:"The forests these plantations make up.", ja:"これらの人工林がつくる森。", zh:"這些人工林所構成的森林。" } },
        { href:"logging.html", why:{ en:"What happens at harvest.", ja:"伐採のときに何が起きるか。", zh:"伐採時發生了什麼。" } },
        { href:"workers.html", why:{ en:"The people who do this work.", ja:"この仕事をする人々。", zh:"從事這些工作的人。" } },
        { href:"policy.html", why:{ en:"The laws and subsidies behind it.", ja:"その背後の法と補助。", zh:"背後的法規與補助。" } }
      ] }
  ] };

/* ---- ------------------------------------------- ecology */
GIFU.pages["ecology"] = { kicker:{ en:"The Forest · 08", ja:"森 · 08", zh:"森林 · 08" },
  title:{ en:"Forest Ecology", ja:"森の生態", zh:"森林生態" },
  jp:"植生帯・獣・病・水",
  lede:{
    en:"Gifu spans more than three thousand metres of altitude, from rice paddies near sea level on the Nōbi plain to the summit of Okuhotaka in the Northern Alps. Along that climb the forest changes from evergreen laurel woods to deciduous beech, then to dark subalpine fir and finally to creeping pine among the rocks. This page describes those forest zones and the animals that live in them, the diseases and grazers that shape them now, and the link that gives Gifu its official slogan — the country of clear rivers — between the forests on the slopes and the water in the valleys.",
    ja:"岐阜は三千メートルを超える高度差をもつ。濃尾平野の海抜に近い水田から、北アルプスの奥穂高岳の頂まで。その登りに沿って森は、常緑の照葉樹林から落葉のブナ林へ、暗い亜高山の針葉樹林へ、そして最後は岩のあいだを這う松へと変わる。この頁は、それらの森の帯とそこに住む動物、いま森を形づくる病気と食害、そして岐阜の公式な呼び名——清流の国——の由来である、斜面の森と谷の水との結びつきを述べる。",
    zh:"岐阜的海拔落差超過三千公尺，從濃尾平原近海平面的稻田，一直到北阿爾卑斯的奧穗高岳山頂。沿著這段攀升，森林從常綠照葉林變為落葉山毛櫸林，再變為陰暗的亞高山冷杉林，最後成為岩石間匍匐的偃松。本頁介紹這些森林帶與棲息其中的動物、如今形塑森林的病害與獸害，以及岐阜官方稱號「清流之國」的由來——坡地上的森林與谷底之水的連結。" },
  body:[
    { t:"section",
      id:"zones",
      title:{ en:"Forest zones from plain to peak", ja:"平野から山頂までの森の帯", zh:"從平原到山巔的森林帶" },
      jp:"垂直分布",
      body:[
        { t:"p",
          text:{
            en:"Japanese ecologists divide the country's natural vegetation into belts that follow temperature — northwards with latitude and upwards with altitude. Gifu, which reaches from the warm Pacific-side lowlands into the heart of the Japanese Alps, contains all of them. The boundaries below are approximate: they are lower on north-facing slopes and in the snowy north of Hida, higher on sunny southern slopes, and everywhere blurred by centuries of cutting and planting.",
            ja:"日本の生態学者は、この国の自然植生を気温にしたがう帯に分ける——緯度とともに北へ、高度とともに上へ。暖かな太平洋側の低地から日本アルプスの中心にまで達する岐阜には、そのすべてがある。以下の境界はおおよそのもので、北向きの斜面や雪深い飛騨北部では低く、日当たりの良い南斜面では高く、そしてどこでも何百年にわたる伐採と植林によってぼやけている。",
            zh:"日本生態學者依溫度把全國自然植被分為數個帶——隨緯度往北、隨海拔往上遞變。岐阜從溫暖的太平洋側低地一路延伸到日本阿爾卑斯的核心，全部植被帶都具備。以下界線僅為約略：在北向坡與多雪的飛驒北部較低，在向陽的南坡較高，而且處處都因數百年的伐採與造林而模糊。" } },
        { t:"figure",
          caption:{
            en:"Vegetation belts on Gifu's altitude gradient, simplified. The lowlands are almost entirely farmland, towns and plantations; natural laurel forest survives mainly around shrines. Elevations are approximate and vary with aspect and snow.",
            ja:"岐阜の高度にそった植生帯（簡略図）。低地はほとんどが農地・町・人工林で、自然の照葉樹林はおもに社叢に残る。標高はおおよそのもので、斜面の向きと雪で変わる。",
            zh:"岐阜海拔梯度上的植被帶（簡化）。低地幾乎全是農田、市鎮與人工林；天然照葉林主要殘存於神社林。海拔為約略值，隨坡向與積雪而異。" },
          svg:function(lang, L){
            var F = GIFU.fig, T = function(o){ return L(o); };
            var s = '<svg viewBox="0 0 760 330" role="img">';
            s += F.text(20, 28, lang==="en"?"VEGETATION BELTS BY ALTITUDE":(lang==="ja"?"高度による植生帯":"依海拔的植被帶"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            function Y(m){ return 300 - m/3200*250; }
            var bands = [
              [0, 600, "#E0E6DB", { en:"Warm-temperate evergreen (laurel) forest — oaks, shii, camellia", ja:"暖温帯常緑広葉樹林（照葉樹林）——カシ、シイ、ツバキ", zh:"暖溫帶常綠闊葉林（照葉林）——青剛櫟、栲、山茶" }],
              [600, 1600, "#EDE5D2", { en:"Cool-temperate deciduous forest — beech, mizunara, tochi; plantations of sugi and hinoki", ja:"冷温帯落葉広葉樹林——ブナ、ミズナラ、トチ。スギ・ヒノキの人工林", zh:"冷溫帶落葉闊葉林——山毛櫸、水楢、七葉樹；柳杉與扁柏人工林" }],
              [1600, 2500, "#E0E7E9", { en:"Subalpine conifer forest — Maries fir, Veitch's fir, northern Japanese hemlock", ja:"亜高山帯針葉樹林——オオシラビソ、シラビソ、コメツガ", zh:"亞高山針葉林——大白葉冷杉、白葉冷杉、日本鐵杉" }],
              [2500, 3190, "#E6E4E0", { en:"Alpine zone — creeping pine, alpine meadows, rock", ja:"高山帯——ハイマツ、お花畑、岩", zh:"高山帶——偃松、高山草原、岩石" }]
            ];
            for (var i=0;i<bands.length;i++){
              var bd = bands[i];
              s += '<rect x="80" y="'+Y(bd[1]).toFixed(1)+'" width="660" height="'+(Y(bd[0])-Y(bd[1])).toFixed(1)+'" fill="'+bd[2]+'" stroke="#CDC6B9"/>';
              s += F.text(430, (Y(bd[1])+Y(bd[0]))/2 + (i===3?0:4), T(bd[3]), { size:10.5, max:52, lh:13 });
            }
            var ridge = "M80 300 L110 290 L135 270 L155 250 L170 210 L185 190 L190 150 L205 120 L220 110 L230 80 L240 50.8 L252 70 L268 100 L285 130 L305 150 L325 190 L345 230 L370 270 L410 300 Z";
            s += '<path d="'+ridge+'" fill="#FBFAF7" fill-opacity="0.35" stroke="#7C6B52" stroke-width="1.4"/>';
            var ticks=[0,1000,2000,3000];
            for (var k=0;k<ticks.length;k++){ s += '<line x1="74" y1="'+Y(ticks[k])+'" x2="80" y2="'+Y(ticks[k])+'" stroke="#8B857C"/>'+F.text(68, Y(ticks[k])+4, ticks[k]+" m", { size:10, fill:"#55504A", anchor:"end" }); }
            s += F.text(250, 46, lang==="en"?"Okuhotaka 3,190 m":(lang==="ja"?"奥穂高岳 3,190 m":"奧穗高岳 3,190 m"), { size:10, fill:"#201E1B" });
            s += F.text(90, 318, lang==="en"?"Nōbi plain, near sea level":(lang==="ja"?"濃尾平野（海抜ほぼ0 m）":"濃尾平原（近海平面）"), { size:10, fill:"#55504A" });
            return s + '</svg>';
          } },
        { t:"defs",
          items:[
            { term:{ en:"Laurel forest", ja:"照葉樹林", zh:"照葉林" },
              jp:"しょうようじゅりん",
              def:{
                en:"The natural forest of the warm lowlands is evergreen: evergreen oaks, <em>shii</em> (Castanopsis), camphor and camellia, with glossy leaves that give the forest its name. Almost all of it in the Nōbi plain and the Mino hills was cleared for farming or replaced by coppice and pine long ago; the best remnants are the sacred groves of shrines, which were never cut.",
                ja:"暖かな低地の自然の森は常緑である。カシ類、シイ、クスノキ、ツバキ——光沢のある葉がこの森の名の由来である。濃尾平野と美濃の丘陵では、そのほとんどがずっと昔に農地のために伐られるか、萌芽林や松林に置き換えられた。最良の名残は、けっして伐られなかった神社の社叢である。",
                zh:"溫暖低地的天然林是常綠的：青剛櫟類、栲（Castanopsis）、樟與山茶，葉面光亮，照葉林之名由此而來。濃尾平原與美濃丘陵的照葉林幾乎早已被開墾為農地，或被萌芽林與松林取代；最好的殘存林，是從未遭砍伐的神社林。" } },
            { term:{ en:"Beech forest", ja:"ブナ林", zh:"山毛櫸林" },
              jp:"ぶなりん",
              def:{
                en:"The climax forest of the snowy mountains of Hida and the Hakusan range. On the Sea of Japan side, beech carries a dense understorey of dwarf bamboo, whose stems bend under the snow instead of breaking. See <a href=\"broadleaf.html\">The Broadleaf Forests</a>.",
                ja:"飛騨と白山連峰の雪深い山の極相林。日本海側のブナ林には、雪の下で折れずにたわむササが密に茂る。<a href=\"broadleaf.html\">広葉樹の森</a>を参照。",
                zh:"飛驒與白山山脈多雪山地的極相林。日本海側的山毛櫸林下密生矮竹，竹稈在積雪下彎而不折。見<a href=\"broadleaf.html\">闊葉樹之森</a>。" } },
            { term:{ en:"Subalpine forest", ja:"亜高山帯林", zh:"亞高山林" },
              jp:"あこうざんたいりん",
              def:{
                en:"Above the beech, dark forests of fir and hemlock take over, with birch on disturbed ground. They are too remote and slow-growing to have been worked much, and much of their area in Gifu lies in the Chūbu-Sangaku and Hakusan national parks.",
                ja:"ブナの上では、モミ類やツガの暗い森に代わり、かく乱された場所にはカンバが生える。遠く成長も遅いのでほとんど手が入らず、岐阜でのその多くは中部山岳と白山の国立公園のなかにある。",
                zh:"山毛櫸帶之上，由冷杉與鐵杉組成的陰暗森林接手，干擾地則生長樺木。它們太偏遠、生長又慢，很少被經營；在岐阜，大部分位於中部山岳與白山國家公園內。" } },
            { term:{ en:"Alpine zone", ja:"高山帯", zh:"高山帶" },
              jp:"こうざんたい",
              def:{
                en:"Above the tree line, creeping pine (<em>haimatsu</em>) forms waist-high thickets, and snowbeds and screes hold alpine flowers. It is the home of the rock ptarmigan, <em>raichō</em>, Gifu's prefectural bird and a Special Natural Monument since 1955.",
                ja:"森林限界の上では、ハイマツが腰ほどの高さの藪をつくり、雪田や岩屑地に高山の花が咲く。岐阜の県鳥で一九五五年から特別天然記念物のライチョウのすみかである。",
                zh:"林線以上，偃松形成及腰的灌叢，雪田與碎石坡上開著高山花卉。這裡是雷鳥的家——岐阜縣縣鳥，自 1955 年起為特別天然紀念物。" } }
          ] }
      ] },
    { t:"section",
      id:"animals",
      title:{ en:"Animals of the forest", ja:"森の動物", zh:"森林中的動物" },
      jp:"クマ・カモシカ・シカ",
      body:[
        { t:"p",
          text:{
            en:"The larger animals of Gifu's forests are the same as those of central Honshū generally: the Asian black bear, the Japanese serow, the sika deer, the wild boar, the Japanese macaque, the raccoon dog, the fox, the marten and the Japanese giant flying squirrel. Their fortunes have diverged sharply. Serow, once hunted almost to extinction, recovered after it was protected; deer and boar have spread with warmer winters, abandoned farmland and a shrinking, ageing population of hunters; bears come down to villages in years when the beech and oak mast fails.",
            ja:"岐阜の森の大きな動物は、本州中部の一般と同じである。ツキノワグマ、ニホンカモシカ、ニホンジカ、イノシシ、ニホンザル、タヌキ、キツネ、テン、ムササビ。その運命は大きく分かれた。かつて絶滅寸前まで狩られたカモシカは、保護されて回復した。シカとイノシシは、暖かな冬、放棄された農地、減って年老いた狩猟者とともに広がった。クマはブナやナラの実が不作の年に村へ下りてくる。",
            zh:"岐阜森林中的大型動物與本州中部大致相同：亞洲黑熊、日本長鬃山羊、梅花鹿、野豬、日本獼猴、貉、狐、貂與日本大鼯鼠。牠們的命運大不相同。長鬃山羊曾被獵到幾近滅絕，受保護後恢復；鹿與野豬隨著暖冬、荒廢的農地，以及日漸減少且高齡化的獵人而擴張；熊則在山毛櫸與橡實歉收的年份下山進村。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Sika deer", ja:"ニホンジカ", zh:"梅花鹿" },
              v:"17,200",
              d:{
                en:"Taken in Gifu in FY2024 (7,991 male, 9,209 female) by hunting and culling.",
                ja:"二〇二四年度に岐阜で狩猟と捕獲により獲られた頭数（雄七千九百九十一、雌九千二百九）。",
                zh:"2024 年度岐阜經狩獵與捕獲取得的頭數（公 7,991、母 9,209）。" } },
            { k:{ en:"Wild boar", ja:"イノシシ", zh:"野豬" },
              v:"9,211",
              d:{ en:"Taken in FY2024.", ja:"二〇二四年度の捕獲数。", zh:"2024 年度捕獲數。" } },
            { k:{ en:"Macaque", ja:"ニホンザル", zh:"日本獼猴" },
              v:"1,221",
              d:{
                en:"Taken in FY2024, mostly to protect crops.",
                ja:"二〇二四年度の捕獲数。多くは農作物を守るため。",
                zh:"2024 年度捕獲數，多為保護作物。" } },
            { k:{ en:"Black bear", ja:"ツキノワグマ", zh:"亞洲黑熊" },
              v:"356",
              d:{
                en:"Taken in FY2024, mostly after entering villages or damaging property.",
                ja:"二〇二四年度の捕獲数。多くは人里への出没や被害のあとに。",
                zh:"2024 年度捕獲數，多因闖入村落或造成損害。" } }
          ] },
        { t:"defs",
          items:[
            { term:{ en:"Sika deer", ja:"ニホンジカ", zh:"梅花鹿" },
              jp:"鹿",
              def:{
                en:"Deer are now the greatest single threat to regenerating forest in much of Japan. They eat seedlings and the shoots of young trees, strip bark from hinoki and sugi in winter and — where numbers are high — graze the forest floor bare, so that nothing regenerates and the soil washes away. In Gifu they were historically scarce in the deep-snow districts of the north; they have spread there as winters have become milder.",
                ja:"シカはいま、日本の多くの地域で森の更新にとって最大の脅威である。苗や若木の芽を食べ、冬にはヒノキやスギの樹皮をはぎ、数が多いところでは林床を食べ尽くして、何も更新せず土が流れる。岐阜では、北部の豪雪地帯にはもともと少なかったが、冬が穏やかになるにつれてそこにも広がった。",
                zh:"在日本許多地區，鹿如今是森林更新的最大單一威脅。牠們啃食苗木與幼樹新芽，冬季剝食扁柏與柳杉樹皮；在數量高的地方，更會把林床啃得精光，使森林無法更新、表土流失。在岐阜，北部豪雪地帶原本鹿不多，但隨著冬季變暖，牠們也擴散到那裡。" } },
            { term:{ en:"Japanese serow", ja:"ニホンカモシカ", zh:"日本長鬃山羊" },
              jp:"羚羊",
              def:{
                en:"A goat-antelope found only in Japan, solitary and territorial, living in steep forest. Heavily hunted for its meat and hide until the 1950s, it was declared a Special Natural Monument in 1955. As its numbers recovered it began browsing young plantations, especially hinoki, and from the late 1970s Gifu and neighbouring Nagano obtained permission for limited culling in damaged areas — an unusual case of a nationally protected animal being controlled for forestry.",
                ja:"日本にだけすむウシ科の動物で、単独でなわばりをもち、急な森に暮らす。一九五〇年代まで肉と毛皮のために盛んに狩られ、一九五五年に特別天然記念物に指定された。数が回復すると若い人工林、とくにヒノキを食べるようになり、一九七〇年代後半から岐阜と隣の長野は被害地での限られた捕獲の許可を得た——国が保護する動物が林業のために管理されるまれな例である。",
                zh:"日本特有的牛科動物，獨居、有領域性，棲息於陡峭森林中。直到 1950 年代仍因其肉與毛皮而遭大量獵捕，1955 年被指定為特別天然紀念物。數量恢復後，牠開始啃食幼齡人工林，尤其是扁柏；從 1970 年代後期起，岐阜與鄰近的長野在受害地區獲准有限度捕獲——這是國家保護動物為林業而受控管的罕見案例。" } },
            { term:{ en:"Asian black bear", ja:"ツキノワグマ", zh:"亞洲黑熊" },
              jp:"月輪熊",
              def:{
                en:"The “moon-ring bear”, named for the pale crescent on its chest. It depends in autumn on beech nuts and acorns; in years of poor mast it ranges widely and enters villages and orchards. Bears also strip bark from conifers in early summer to feed on the sweet sapwood — a serious form of damage in some plantations, because it kills or devalues the best trees.",
                ja:"胸の白い三日月から名のついた熊。秋はブナやドングリに頼り、実りの悪い年には広く動き回って村や果樹園に入る。初夏には針葉樹の皮をはいで甘い辺材を食べる「クマはぎ」もする。最良の木を枯らすか価値を下げるので、人工林によっては深刻な被害となる。",
                zh:"因胸前淡色的月牙形斑紋而得名「月輪熊」。秋季仰賴山毛櫸堅果與橡實；在結實不良的年份，牠們會大範圍活動並進入村落與果園。熊在初夏也會剝下針葉樹的樹皮，舔食甘甜的邊材——在某些人工林中這是嚴重的危害，因為受害的往往是最好的樹。" } },
            { term:{ en:"Wild boar", ja:"イノシシ", zh:"野豬" },
              jp:"猪",
              def:{
                en:"Boar root up terraces and paddy banks and eat crops more than trees. Since 2018 their populations in Gifu have also been hit by classical swine fever, first found near Gifu city in September of that year — the first case in Japan for twenty-six years — which spread through wild boar across central Japan.",
                ja:"イノシシは木よりも棚田や畦を掘り返し、作物を食べる。二〇一八年からは岐阜の個体群が豚熱（CSF）にも襲われた。この年の九月に岐阜市近くで見つかり、日本では二十六年ぶりの発生で、野生のイノシシを通じて中部日本に広がった。",
                zh:"野豬會翻掘梯田與田埂，吃作物多於吃樹。自 2018 年起，岐阜的野豬族群也受到豬瘟（CSF）衝擊：該年 9 月在岐阜市附近首度發現，是日本睽違二十六年的案例，並經由野生野豬擴散至中部日本。" } }
          ] },
        { t:"note",
          label:{ en:"The missing hunters", ja:"いなくなる狩人", zh:"消失中的獵人" },
          text:{
            en:"Japan had more than half a million licensed hunters in the mid-1970s; today it has fewer than half that number, and most are over sixty. Prefectures now pay bounties for deer and boar, train new trappers and subsidise processing plants for game meat (<em>jibie</em>, from the French <em>gibier</em>), so that culled animals become food rather than waste.",
            ja:"日本には一九七〇年代半ばに五十万人を超える狩猟免許の保持者がいたが、いまはその半分に満たず、多くは六十歳を超える。県はシカやイノシシに報奨金を払い、新しいわな猟の担い手を育て、ジビエ（フランス語の gibier から）の処理施設に補助を出して、捕獲した動物が廃棄物ではなく食べ物になるようにしている。",
            zh:"1970 年代中期，日本持有狩獵執照者超過五十萬人；如今不到一半，且多數已逾六十歲。各縣現在對鹿與野豬發放獎勵金、培訓新的陷阱獵人，並補助野味（jibie，源自法文 gibier）處理設施，讓捕獲的動物成為食物而非廢棄物。" } }
      ] },
    { t:"section",
      id:"disease",
      title:{ en:"Pests and diseases", ja:"病虫害", zh:"病蟲害" },
      jp:"松枯れ・ナラ枯れ",
      body:[
        { t:"p",
          text:{
            en:"Two epidemics have reshaped Gifu's lowland and mid-mountain forests within living memory. Both are carried by beetles, both kill mature trees within a single season, and both hit trees that the old village economy used to cut young.",
            ja:"人々の記憶のうちに、二つの大流行が岐阜の低地と中山間の森を形を変えた。どちらも甲虫が運び、どちらも成木を一つの季節で枯らし、どちらも昔の村の暮らしなら若いうちに伐っていた木を襲った。",
            zh:"在人們記憶所及的時間內，兩場大流行重塑了岐阜低地與中山區的森林。兩者都由甲蟲傳播，都能在一季內殺死成熟樹木，而受害的都是舊時村落經濟原本會在年輕時就砍伐的樹。" } },
        { t:"timeline",
          items:[
            { year:"c.1975",
              title:{ en:"Pine wilt reaches Gifu", ja:"松枯れが岐阜に", zh:"松材線蟲病抵達岐阜" },
              jp:"マツ材線虫病",
              text:{
                en:"The pine wood nematode, an introduced North American parasite carried from tree to tree by the Japanese pine sawyer beetle, begins killing red and black pines in the prefecture.",
                ja:"北米から入った寄生虫マツノザイセンチュウが、マツノマダラカミキリに運ばれて木から木へ移り、県内のアカマツとクロマツを枯らしはじめる。",
                zh:"外來的北美寄生線蟲——松材線蟲——經由松斑天牛在樹與樹之間傳播，開始在縣內殺死赤松與黑松。" } },
            { year:"1978",
              title:{ en:"Rapid spread in the east", ja:"東部で急拡大", zh:"東部迅速擴散" },
              text:{
                en:"A hot, dry summer drives an explosive outbreak in the pine forests of eastern Gifu (Tōnō).",
                ja:"暑く乾いた夏が、東濃のマツ林で爆発的な発生を招く。",
                zh:"炎熱乾燥的夏季，在東濃的松林引發爆發性疫情。" } },
            { year:"FY1981",
              title:{ en:"Peak of pine wilt", ja:"松枯れの頂点", zh:"松材線蟲病高峰" },
              text:{
                en:"Damage peaks. The lowland red-pine woods that had grown on over-cut, impoverished hillsides — and that supplied matsutake mushrooms — are devastated.",
                ja:"被害が頂点に達する。伐りすぎてやせた丘陵に育ち、マツタケを恵んでいた低地のアカマツ林が壊滅する。",
                zh:"災情達到高峰。那些生長在過度砍伐、地力貧瘠丘陵上、並出產松茸的低地赤松林遭到重創。" } },
            { year:"1996",
              title:{ en:"Oak wilt appears", ja:"ナラ枯れの発生", zh:"橡樹萎凋病出現" },
              text:{
                en:"First found in the upper Ibi valley (then Sakauchi village). See <a href=\"broadleaf.html\">The Broadleaf Forests</a>.",
                ja:"揖斐川上流（当時の坂内村）で初めて見つかる。<a href=\"broadleaf.html\">広葉樹の森</a>を参照。",
                zh:"首度於揖斐川上游（當時的坂內村）發現。見<a href=\"broadleaf.html\">闊葉樹之森</a>。" } },
            { year:"2003–",
              title:{ en:"Pine wilt declines", ja:"松枯れの減少", zh:"松材線蟲病減少" },
              text:{
                en:"With most susceptible pine already dead, damage falls steadily.",
                ja:"感受性の高いマツの大半がすでに枯れ、被害は着実に減る。",
                zh:"由於大多數易感松樹已死，災情穩定下降。" } },
            { year:"FY2010",
              title:{ en:"Peak of oak wilt", ja:"ナラ枯れの頂点", zh:"橡樹萎凋病高峰" },
              text:{ en:"Oak-wilt damage peaks and then declines.", ja:"ナラ枯れの被害が頂点に達し、のち減少する。", zh:"橡樹萎凋病災情達到高峰，其後下降。" } }
          ] },
        { t:"p",
          text:{
            en:"Plantations have their own afflictions. Sugi and hinoki suffer from stem-boring moths and beetles that stain and weaken the wood, from snow damage — heavy wet snow breaking the tops of dense, thin stands — and from typhoon wind-throw. The typhoons of 2018 felled large areas of forest in western and central Japan; in plantations that were never thinned, trees fall together like dominoes because none has developed the root plate and taper to stand alone.",
            ja:"人工林には人工林の苦しみがある。スギとヒノキは、材を変色させ弱らせる穿孔性の蛾や甲虫に、雪害——重く湿った雪が密で細い林の梢を折る——に、そして台風の風倒に苦しむ。二〇一八年の台風は西日本と中部日本で広い面積の森を倒した。一度も間伐されなかった林では、どの木も一本で立つだけの根張りと梢殺をもたないので、ドミノのようにまとめて倒れる。",
            zh:"人工林也有自身的病痛。柳杉與扁柏受蛀幹蛾類與甲蟲之害，導致木材變色、強度下降；也受雪害——濕重的積雪壓斷密集細瘦林分的樹梢——與颱風風倒之苦。2018 年的颱風在西日本與中部日本吹倒大片森林；在從未疏伐的人工林中，樹木像骨牌般成片倒下，因為沒有一棵樹發展出足以獨立站穩的根盤與尖削度。" } }
      ] },
    { t:"section",
      id:"water",
      title:{ en:"Forests and clear rivers", ja:"森と清流", zh:"森林與清流" },
      jp:"清流の国ぎふ",
      body:[
        { t:"p",
          text:{
            en:"Gifu calls itself <em>Seiryū no Kuni</em>, “the land of clear rivers”, and the claim rests on its forests. The Nagara, which flows through Gujō, Mino, Seki and Gifu city, is counted among Japan's three great clear rivers and is one of the very few large rivers in the country with no dam across its main course above the estuary. Its fishery for <em>ayu</em>, the sweetfish, and the cormorant fishing at Gifu and Seki — practised for some 1,300 years — both depend on cold, clear, well-oxygenated water, which in turn depends on forested catchments that release rain slowly.",
            ja:"岐阜はみずからを「清流の国」と呼び、その名乗りは森に支えられている。郡上、美濃、関、岐阜市を流れる長良川は日本三大清流の一つに数えられ、河口より上の本流にダムのない、この国ではまれな大河の一つである。アユの漁と、岐阜と関の鵜飼——およそ千三百年続く——は、どちらも冷たく澄んだ酸素の多い水に頼り、その水は雨をゆっくり放す森の流域に頼る。",
            zh:"岐阜自稱「清流之國」，這個名號建立在它的森林之上。流經郡上、美濃、關市與岐阜市的長良川被列為日本三大清流之一，也是全國極少數在河口以上主流沒有水壩的大河。這裡的香魚漁業，以及岐阜與關市延續約一千三百年的鸕鶿捕魚，都仰賴冰涼、清澈、含氧豐富的河水——而這又仰賴能緩緩釋放雨水的森林集水區。" } },
        { t:"defs",
          items:[
            { term:{ en:"The “green dam”", ja:"緑のダム", zh:"綠色水壩" },
              jp:"水源涵養",
              def:{
                en:"A forest floor of litter, roots and porous soil absorbs heavy rain and releases it over days and weeks, evening out floods and droughts. The effect is real but limited: in the heaviest storms the soil saturates, and forests cannot replace flood defences. It is largest where the floor is covered — which is why dark, unthinned plantations with bare ground are a watershed problem.",
                ja:"落ち葉と根と多孔質の土からなる林床は、大雨を吸いこみ、何日も何週間もかけて放し、洪水と渇水をならす。その効果は本物だが限りがある。最大級の豪雨では土が飽和し、森は治水施設の代わりにはならない。効果は林床が覆われているところで最も大きい——だから、地面が裸の暗い未間伐の人工林は流域の問題になる。",
                zh:"由落葉、根系與多孔土壤構成的林床，能吸收豪雨並在數日至數週內慢慢釋出，緩和洪水與乾旱。這種效果真實但有限：在最強的暴雨中土壤會飽和，森林無法取代防洪設施。效果在林床有覆蓋時最大——這正是陰暗、林床裸露的未疏伐人工林成為集水區問題的原因。" } },
            { term:{ en:"Fish-breeding forest", ja:"魚付林", zh:"魚付林" },
              jp:"うおつきりん",
              def:{
                en:"An old Japanese category of protected forest along rivers and coasts, kept because fishermen knew that shade, insects, leaf litter and nutrients from the trees fed the fish. Streamside broadleaves in Gifu's plantation valleys are increasingly left or replanted for the same reason.",
                ja:"川や海岸沿いの保護された森を指す日本の古い区分で、木がつくる陰、虫、落ち葉、栄養が魚を養うことを漁師が知っていたから守られた。岐阜の人工林の谷でも、同じ理由で渓畔の広葉樹を残したり植え直したりすることが増えている。",
                zh:"日本沿河川與海岸的一種古老保護林類別；漁民深知樹木提供的遮蔭、昆蟲、落葉與養分能養活魚群，因而加以保護。基於同樣理由，岐阜人工林溪谷中的溪畔闊葉樹也愈來愈常被保留或重新栽植。" } },
            { term:{ en:"Forest environment taxes", ja:"森林環境税", zh:"森林環境稅" },
              jp:"清流の国ぎふ森林・環境税",
              def:{
                en:"Since April 2012 every Gifu resident has paid ¥1,000 a year, and companies ¥2,000–80,000, into a prefectural fund for water-source forests, satoyama, wildlife, river ecosystems and environmental education; since fiscal 2024 a national forest environment tax of another ¥1,000 has been added. See <a href=\"policy.html\">Forest Law &amp; Policy</a>.",
                ja:"二〇一二年四月から、岐阜の住民は一人年千円、法人は二千〜八万円を、水源林、里山、野生動物、川の生態系、環境教育のための県の基金に納めている。二〇二四年度からは国の森林環境税としてさらに千円が加わった。<a href=\"policy.html\">森林の法と政策</a>を参照。",
                zh:"自 2012 年 4 月起，岐阜每位居民每年繳 1,000 日圓、法人繳 2,000–80,000 日圓，投入縣基金，用於水源林、里山、野生動物、河川生態與環境教育；2024 年度起再加上國家森林環境稅 1,000 日圓。見<a href=\"policy.html\">森林法規與政策</a>。" } }
          ] },
        { t:"figure",
          caption:{
            en:"How forest condition affects the path of rain on a slope, schematically. Under a thinned or mixed forest most rain soaks in and emerges slowly as spring water; under a dark, unthinned plantation more runs off the bare surface, carrying soil.",
            ja:"森の状態が斜面の雨の行方をどう変えるか（模式図）。間伐された林や混交林では雨の多くがしみこみ、ゆっくりと湧き水として出てくる。暗い未間伐の人工林では、裸の地表を流れ去る雨が多く、土を運ぶ。",
            zh:"森林狀態如何影響坡面雨水的去向（示意）。在疏伐過或混交的森林中，大部分雨水滲入地下並慢慢以泉水湧出；在陰暗未疏伐的人工林中，更多雨水從裸露地表逕流而下，帶走土壤。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 260" role="img">';
            function panel(x, good){
              var r = '<rect x="'+x+'" y="40" width="340" height="190" fill="'+(good?"#E0E6DB":"#E6E4E0")+'" stroke="#8B857C"/>';
              r += '<path d="M'+x+' 200 L'+(x+340)+' 130 L'+(x+340)+' 230 L'+x+' 230 Z" fill="#EDE5D2" stroke="#8B857C"/>';
              for (var i=0;i<(good?6:9);i++){
                var tx = x+30+i*(good?52:34), ty = 200-(tx-x)*70/340;
                r += '<line x1="'+tx+'" y1="'+ty+'" x2="'+tx+'" y2="'+(ty-(good?70:80))+'" stroke="#7C6B52" stroke-width="'+(good?3:1.6)+'"/>';
                r += '<path d="M'+(tx-(good?18:7))+' '+(ty-(good?35:50))+' L'+tx+' '+(ty-(good?85:88))+' L'+(tx+(good?18:7))+' '+(ty-(good?35:50))+' Z" fill="'+(good?"#C9D3C2":"#B4AC9C")+'" stroke="#8B857C"/>';
              }
              for (var d=0; d<5; d++) r += '<line x1="'+(x+60+d*50)+'" y1="50" x2="'+(x+54+d*50)+'" y2="64" stroke="#8B857C"/>';
              if (good) {
                r += '<path d="M'+(x+120)+' 196 q10 16 30 20 q30 4 60 -8" fill="none" stroke="#55504A" stroke-dasharray="4 3"/>';
                r += F.text(x+10, 250, lang==="en"?"Covered floor: rain soaks in, springs flow for weeks":(lang==="ja"?"覆われた林床：雨はしみこみ、湧き水が何週間も続く":"林床有覆蓋：雨水滲入，泉水可流數週"), { size:10.5, fill:"#201E1B" });
              } else {
                r += '<path d="M'+(x+300)+' 146 L'+(x+60)+' 192" fill="none" stroke="#55504A" stroke-width="2"/><path d="M'+(x+71)+' 184 L'+(x+60)+' 192 L'+(x+73)+' 195" fill="none" stroke="#55504A" stroke-width="2"/>';
                r += F.text(x+10, 250, lang==="en"?"Bare floor: fast run-off carries soil":(lang==="ja"?"裸の林床：速い表面流が土を運ぶ":"裸露林床：快速逕流帶走土壤"), { size:10.5, fill:"#201E1B" });
              }
              r += F.text(x+10, 30, good ? (lang==="en"?"THINNED OR MIXED FOREST":(lang==="ja"?"間伐林・混交林":"疏伐林／混交林")) : (lang==="en"?"UNTHINNED PLANTATION":(lang==="ja"?"未間伐の人工林":"未疏伐人工林")), { serif:true, size:12, fill:"#55504A", ls:lang==="en"?1.5:0 });
              return r;
            }
            s += panel(20, true) + panel(400, false);
            return s + '</svg>';
          } }
      ] },
    { t:"section",
      id:"compare",
      title:{ en:"Plantation or forest?", ja:"人工林か、森か", zh:"人工林，還是森林？" },
      jp:"多面的機能",
      body:[
        { t:"p",
          text:{
            en:"Japanese forest law speaks of the “multiple functions” of forests: timber, but also water, soil conservation, landslide prevention, carbon, biodiversity, recreation and culture. Different kinds of forest perform these functions very differently, and the arguments about what Gifu's forests should become are largely arguments about how to weigh them. The comparison below is qualitative — a summary of what the ecological and forestry literature broadly agrees on, not a measurement.",
            ja:"日本の森林法は森の「多面的機能」を語る——木材だけでなく、水、土壌保全、山崩れの防止、炭素、生物多様性、保健休養、文化。森の種類によって、これらの機能の果たし方は大きく異なり、岐阜の森が何になるべきかをめぐる議論は、その多くがそれらをどう量るかをめぐる議論である。以下の比較は定性的なもので、生態学と林学の文献がおおむね一致するところをまとめたものであり、測定ではない。",
            zh:"日本森林法談到森林的「多元功能」：不只是木材，還有水源、土壤保育、防止山崩、碳、生物多樣性、休閒保健與文化。不同類型的森林發揮這些功能的方式大不相同，關於岐阜森林該變成什麼樣的爭論，大多就是關於如何權衡這些功能的爭論。以下比較為定性描述——歸納生態學與林學文獻大致的共識，並非測量結果。" } },
        { t:"figure",
          caption:{
            en:"A qualitative comparison of forest types by function (three dots = strongest). Well-thinned plantations recover much of the soil and biodiversity value that neglected ones lose. Compiled from general forestry and ecological literature.",
            ja:"機能から見た森の種類の定性的な比較（点三つが最も高い）。よく間伐された人工林は、放置された人工林が失う土壌と生物多様性の価値の多くを取り戻す。林学と生態学の一般的な文献からまとめた。",
            zh:"依功能對森林類型的定性比較（三點為最強）。疏伐良好的人工林，能恢復被棄置人工林所失去的大部分土壤與生物多樣性價值。整理自一般林學與生態學文獻。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"What each forest does well", ja:"それぞれの森が得意なこと", zh:"各類森林的強項" }, labelW:220,
            cols:[ { en:"Timber", ja:"木材", zh:"木材" }, { en:"Soil & water", ja:"土と水", zh:"土壤與水" }, { en:"Biodiversity", ja:"生物多様性", zh:"生物多樣性" }, { en:"Carbon uptake", ja:"炭素吸収", zh:"碳吸收" }, { en:"Low care cost", ja:"手間の少なさ", zh:"撫育成本低" } ],
            rows:[
              { n:{ en:"Neglected dense plantation", ja:"放置された過密人工林", zh:"棄置的過密人工林" }, v:[1,1,1,1,3] },
              { n:{ en:"Well-thinned plantation", ja:"よく間伐された人工林", zh:"疏伐良好的人工林" }, v:[3,2,2,3,1] },
              { n:{ en:"Mixed conifer–broadleaf", ja:"針広混交林", zh:"針闊混交林" }, v:[2,3,3,2,2] },
              { n:{ en:"Secondary broadleaf forest", ja:"広葉樹の二次林", zh:"闊葉次生林" }, v:[1,3,3,2,3] },
              { n:{ en:"Old natural forest", ja:"老齢の天然林", zh:"老齡天然林" }, v:[0,3,3,1,3] }
            ] }); } },
        { t:"p",
          text:{
            en:"Two points in the figure are often misunderstood. Young, vigorous plantations absorb carbon faster than old forests, which store more but add less each year; and a neglected plantation is not a “natural” forest, but the worst of both — too dark for an understorey, too crowded to grow valuable timber, and unstable in storms. The ecological case against Japan's post-war plantations is therefore mostly a case against leaving them untended.",
            ja:"図のうち二つの点はよく誤解される。若く勢いのある人工林は老齢の森より速く炭素を吸収する。老齢の森は多くを蓄えるが、年ごとに加える分は少ない。そして放置された人工林は「自然の」森ではなく、両方の悪いところを合わせたもの——下層植生には暗すぎ、価値のある材を育てるには混みすぎ、嵐には不安定——である。だから戦後の人工林に対する生態学からの批判は、その多くが手入れをせずに放っておくことへの批判である。",
            zh:"圖中有兩點常被誤解。年輕旺盛的人工林吸收碳的速度快於老齡林；老齡林儲存更多碳，但每年增加的較少。而棄置的人工林並不是「自然」森林，而是兩者缺點的集合——對林下植被而言太暗，要長出有價值的木材又太擠，遇上暴風更不穩定。因此，從生態學角度對戰後人工林的批評，大多其實是對任其荒廢的批評。" } }
      ] },
    { t:"section",
      id:"fungi",
      title:{ en:"Mushrooms and the forest", ja:"きのこと森", zh:"菇類與森林" },
      jp:"マツタケ・シイタケ",
      body:[
        { t:"p",
          text:{
            en:"Fungi are the hidden half of a forest: they decompose wood and litter, and many form partnerships with tree roots, trading minerals for sugar. Two mushrooms tie Gifu's forests to its kitchens. <em>Matsutake</em> grows only in partnership with living red pine on poor, well-drained soil — conditions that centuries of heavy cutting and litter-raking created on the hills of Mino and Tōnō. When villagers stopped raking and pine wilt killed the pines, matsutake harvests collapsed; Japanese matsutake is now a luxury, and most sold in Japan is imported.",
            ja:"菌類は森の見えない半分である。木や落ち葉を分解し、その多くは木の根と共生して、ミネラルを糖と交換する。二つのきのこが岐阜の森と台所を結ぶ。マツタケは、やせて水はけのよい土の生きたアカマツと共生してしか育たない——何百年もの激しい伐採と落ち葉かきが、美濃と東濃の丘につくり出した条件である。村人が落ち葉かきをやめ、松枯れがマツを枯らすと、マツタケの収穫は崩れた。国産マツタケはいまや贅沢品で、日本で売られるものの大半は輸入である。",
            zh:"真菌是森林隱藏的另一半：它們分解木材與落葉，許多還與樹根共生，以礦物質交換糖分。有兩種菇把岐阜的森林與廚房連在一起。松茸只與生長在貧瘠、排水良好土壤上的活赤松共生——而這正是數百年來大量伐木與耙取落葉，在美濃與東濃丘陵上造成的條件。當村民不再耙葉、松材線蟲病又殺死松樹，松茸收成隨之崩落；日本國產松茸如今是奢侈品，日本市場上販售的大多為進口。" } },
        { t:"p",
          text:{
            en:"<em>Shiitake</em>, by contrast, is a decomposer, and its traditional cultivation is a coppice product. Logs of konara oak or <em>kunugi</em>, about a metre long and cut in winter from twenty-year-old regrowth, are drilled and plugged with spawn, then stacked in the shade of the forest for a year or two while the fungus colonises the wood. Log-grown shiitake has largely given way to sawdust-block cultivation indoors, but it survives in the villages of Gifu and is one of the few remaining reasons to cut young oak.",
            ja:"対してシイタケは分解者で、その伝統的な栽培は萌芽林の産物である。二十年生ほどの萌芽から冬に伐ったコナラやクヌギの一メートルほどの原木に穴をあけて種駒を打ち、菌が木にまわるまで一、二年、森の日陰に組んでおく。原木栽培は屋内の菌床栽培に大きく取って代わられたが、岐阜の村々には残り、若いナラを伐る数少ない理由の一つとなっている。",
            zh:"相較之下，香菇是分解者，其傳統栽培本身就是萌芽林的產物。冬季從約二十年生的萌芽林伐下枹櫟或麻櫟，截成約一公尺的段木，鑽孔打入菌種，再堆放於林蔭下一至兩年，讓菌絲佈滿木材。段木香菇多已被室內太空包栽培取代，但仍在岐阜的村落延續，是少數仍有理由砍伐幼齡橡木的用途之一。" } },
        { t:"chips",
          items:[
            { text:{ en:"Matsutake — partner of red pine", ja:"マツタケ——アカマツと共生", zh:"松茸——與赤松共生" } },
            { text:{ en:"Shiitake — on konara and kunugi logs", ja:"シイタケ——コナラ・クヌギの原木に", zh:"香菇——長在枹櫟與麻櫟段木上" } },
            { text:{ en:"Nameko — on beech", ja:"ナメコ——ブナに", zh:"滑菇——長在山毛櫸上" } },
            { text:{ en:"Maitake — at the base of old oaks", ja:"マイタケ——老いたナラの根元に", zh:"舞茸——生於老橡木樹基" } },
            { text:{ en:"Honey fungus — a parasite and decomposer", ja:"ナラタケ——寄生者であり分解者", zh:"蜜環菌——兼具寄生與分解" } }
          ] }
      ] },
    { t:"section",
      id:"climate",
      title:{ en:"A changing climate", ja:"変わる気候", zh:"變遷中的氣候" },
      jp:"温暖化と森",
      body:[
        { t:"p",
          text:{
            en:"The forest belts on Gifu's mountains are defined by temperature, so warming moves them. Studies across Japan project that the climate suitable for beech will shrink substantially this century, especially on the Pacific side and at the lower edge of its range; subalpine fir and the alpine zone, with nowhere higher to go, are the most exposed. The changes are slow in trees, which live for centuries, but quick in the animals and diseases around them: deer have spread into formerly deep-snow districts, the oak-wilt beetle and pine sawyer breed faster in warm summers, and heavier downpours strike slopes that were never designed for them.",
            ja:"岐阜の山の森の帯は気温で決まるから、温暖化はそれを動かす。日本各地の研究は、今世紀のうちにブナに適した気候が大きく縮むと予測している。とくに太平洋側と分布の下限でそうである。亜高山のモミ類と高山帯は、それ以上高く逃げる場所がなく、最もさらされている。何百年も生きる木々の変化は遅いが、そのまわりの動物と病気の変化は速い。シカはかつての豪雪地帯に広がり、ナラ枯れの甲虫やマツノマダラカミキリは暑い夏に速く殖え、より激しい豪雨が、それを想定していなかった斜面を打つ。",
            zh:"岐阜山區的森林帶由溫度決定，暖化因此會使其移動。日本各地的研究預測，本世紀適合山毛櫸的氣候範圍將大幅縮小，尤其在太平洋側及其分布下緣；亞高山冷杉與高山帶無處可再往上退，受威脅最大。樹木壽命長達數百年，變化緩慢；但周遭動物與病害的變化卻很快：鹿擴散到昔日的豪雪地帶，橡樹萎凋病甲蟲與松斑天牛在炎夏繁殖更快，而更猛烈的豪雨則打在從未為此設計的坡地上。" } },
        { t:"note",
          label:{ en:"Rain on steep ground", ja:"急斜面の雨", zh:"陡坡上的雨" },
          text:{
            en:"Gifu's worst recent disasters have come from rain rather than wind: the July 2018 rains that flooded Seki and the Nagara valley, and the July 2020 rains that damaged houses, roads and the railway along the Hida River around Gero. Each was followed by debates about whether plantations on steep slopes had made landslides worse, and each strengthened the case for the mixed, continuously covered forests described on <a href=\"silviculture.html\">Planting &amp; Tending</a>.",
            ja:"岐阜の近年の最悪の災害は、風よりも雨がもたらした。関と長良川の谷を浸した二〇一八年七月の豪雨、下呂周辺の飛騨川沿いで家や道路や鉄道を傷つけた二〇二〇年七月の豪雨。そのたびに、急斜面の人工林が山崩れを悪化させたのではないかという議論が起こり、そのたびに<a href=\"silviculture.html\">植えて育てる</a>で述べた、混交し常に覆われた森への支持が強まった。",
            zh:"岐阜近年最嚴重的災害來自雨而非風：2018 年 7 月淹沒關市與長良川谷地的豪雨，以及 2020 年 7 月在下呂一帶沿飛驒川損毀房屋、道路與鐵道的豪雨。每次災後都會出現陡坡人工林是否加劇山崩的爭論，也都強化了<a href=\"silviculture.html\">造林與撫育</a>一頁所述、混交且持續覆蓋之森林的理由。" } }
      ] },
    { t:"related",
      items:[
        { href:"broadleaf.html",
          why:{ en:"Beech, oak and oak wilt in detail.", ja:"ブナ、ナラ、ナラ枯れを詳しく。", zh:"山毛櫸、橡木與橡樹萎凋病詳述。" } },
        { href:"satoyama.html",
          why:{ en:"The village woodlands and their decline.", ja:"村の林とその衰え。", zh:"村落林地及其衰退。" } },
        { href:"silviculture.html",
          why:{ en:"Protecting young trees from browsing.", ja:"若木を食害から守る。", zh:"保護幼樹免受啃食。" } },
        { href:"carbon.html", why:{ en:"Forests, climate and carbon.", ja:"森と気候と炭素。", zh:"森林、氣候與碳。" } }
      ] }
  ] };

/* ---- ------------------------------------------ satoyama */
GIFU.pages["satoyama"] = { kicker:{ en:"The Forest · 09", ja:"森 · 09", zh:"森林 · 09" },
  title:{ en:"Satoyama", ja:"里山", zh:"里山" },
  jp:"村の森 · 薪・炭・草・水",
  lede:{
    en:"Between the village and the deep mountain lay a belt of woodland that belonged to everyday life. It gave firewood and charcoal, leaves and grass to feed the paddies, thatch for roofs, poles, mushrooms, nuts and wild vegetables, and it was cut so often that it was never old. The Japanese call this landscape <em>satoyama</em>, “village mountains”. The word's earliest known use is in an eighteenth-century forestry text of the Owari domain, which ruled the Kiso forests; it was made famous two centuries later by the ecologist Shidei Tsunahide. This page describes how the satoyama worked, why it was abandoned, and what has been done since to revive it in Gifu.",
    ja:"村と奥山のあいだに、日々の暮らしに属する林の帯があった。薪と炭、田を養う落ち葉と草、屋根の茅、竿、きのこ、木の実、山菜をもたらし、あまりに頻繁に伐られたので老いることがなかった。日本人はこの景観を「里山」と呼ぶ。この言葉が確認できる最も古い用例は、木曽の森を治めた尾張藩の十八世紀の林政の文書にあり、二世紀のちに生態学者の四手井綱英によって広く知られた。この頁は、里山がどう働き、なぜ見捨てられ、そののち岐阜でそれをよみがえらせるために何がなされてきたかを述べる。",
    zh:"在村落與深山之間，有一條屬於日常生活的林帶。它提供柴薪與木炭、滋養稻田的落葉與草、屋頂的茅草、竿材、菇類、堅果與山菜；因為砍得太頻繁，這片林子從來不會變老。日本人把這種地景稱為「里山」，意為「村落之山」。這個詞已知最早的用例，見於統治木曾森林的尾張藩一份十八世紀林政文書；兩個世紀後，生態學者四手井綱英使它廣為人知。本頁介紹里山如何運作、為何被遺棄，以及此後岐阜為復興它做了哪些努力。" },
  body:[
    { t:"section",
      id:"landscape",
      title:{ en:"A working landscape", ja:"働く景観", zh:"勞動的地景" },
      jp:"村・田・林・奥山",
      body:[
        { t:"p",
          text:{
            en:"A traditional Mino or Hida village sat where a valley widened enough for paddies. Around it, from the valley floor upwards, came a sequence of land uses, each connected to the others. The paddies needed water from the forested catchment and fertility from the hills; the houses needed fuel and thatch; the forge, the kiln and the papermaker needed charcoal and wood. Only beyond the working belt, on the high ridges, lay the <em>okuyama</em> — the deep mountain, where people went seldom and the gods were thought to live.",
            ja:"伝統的な美濃や飛騨の村は、谷が田をつくれるほど広がったところにあった。そのまわりには、谷底から上へ向かって、互いにつながった土地の使い方が順に並んでいた。田は森の集水域から水を、丘から肥やしを必要とし、家は燃料と茅を、鍛冶場や窯や紙漉きは炭と木を必要とした。その働く帯の向こう、高い尾根にだけ奥山があった——人がめったに行かず、神々が住むと考えられた深い山である。",
            zh:"傳統的美濃或飛驒村落，坐落在谷地寬到足以開闢水田之處。村子周圍，從谷底往上，排列著一系列彼此相連的土地利用。水田需要森林集水區的水與丘陵的養分；房屋需要燃料與茅草；鍛冶場、窯場與造紙師傅需要木炭與木材。只有在這條勞動林帶之外、高聳的稜線上，才是「奧山」——人們鮮少前往、被認為是神明居所的深山。" } },
        { t:"figure",
          caption:{
            en:"A schematic cross-section of a satoyama landscape, from the river to the deep mountain. Every zone was used, and each supplied the others. After a common model in Japanese landscape ecology.",
            ja:"川から奥山までの里山の景観の模式断面図。どの帯も使われ、互いに何かを与えあっていた。日本の景観生態学でよく使われる模式にならう。",
            zh:"里山地景從河川到深山的示意剖面圖。每個帶都被利用，並彼此供給。依日本地景生態學常見模型繪製。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 370" role="img">';
            s += F.text(20, 28, lang==="en"?"THE SATOYAMA SEQUENCE":(lang==="ja"?"里山の並び":"里山的排列"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            s += '<path d="M20 230 L150 230 L180 225 L260 215 L330 190 L420 160 L520 120 L620 85 L740 60 L740 250 L20 250 Z" fill="#EDE5D2" stroke="#8B857C"/>';
            s += '<path d="M20 232 L110 232" stroke="#A9BCC4" stroke-width="5"/>';
            var Z = [
              [20, 110, "#E0E7E9", { en:"River", ja:"川", zh:"河川" }, { en:"water, fish, ayu", ja:"水・魚・アユ", zh:"水、魚、香魚" }],
              [110, 190, "#E0E6DB", { en:"Paddies", ja:"田", zh:"水田" }, { en:"rice; ponds", ja:"米・ため池", zh:"稻米、蓄水池" }],
              [190, 260, "#F0EDE4", { en:"Village", ja:"集落", zh:"村落" }, { en:"houses, gardens, bamboo", ja:"家・畑・竹林", zh:"房屋、菜園、竹林" }],
              [260, 340, "#EADCC1", { en:"Grass slopes", ja:"草地", zh:"草地" }, { en:"thatch, fodder, green manure", ja:"茅・飼料・刈敷", zh:"茅草、飼料、綠肥" }],
              [340, 500, "#E7DFD2", { en:"Coppice", ja:"薪炭林", zh:"薪炭林" }, { en:"oak, chestnut: fuel, charcoal, leaves, mushrooms", ja:"ナラ・クリ：薪・炭・落ち葉・きのこ", zh:"橡木、栗木：柴、炭、落葉、菇" }],
              [500, 620, "#E6E4E0", { en:"Plantation / pine", ja:"人工林・松林", zh:"人工林／松林" }, { en:"building timber, matsutake", ja:"建築材・マツタケ", zh:"建材、松茸" }],
              [620, 740, "#E6E2EC", { en:"Deep mountain", ja:"奥山", zh:"奧山" }, { en:"beech, gods, water source", ja:"ブナ・神・水源", zh:"山毛櫸、神、水源" }]
            ];
            for (var i=0;i<Z.length;i++){
              var z = Z[i];
              s += '<rect x="'+z[0]+'" y="262" width="'+(z[1]-z[0])+'" height="14" fill="'+z[2]+'" stroke="#8B857C"/>';
              s += F.text(z[0]+4, 294, L(z[3]), { size:11, fill:"#201E1B", max: Math.floor((z[1]-z[0]-6)/5.8) });
              s += F.text(z[0]+4, 310, L(z[4]), { size:9.5, fill:"#55504A", max: Math.floor((z[1]-z[0]-6)/5.2), lh:12 });
            }
            for (var t=0;t<7;t++){ var tx=360+t*20, ty=200-(tx-330)*0.33; s += '<circle cx="'+tx+'" cy="'+(ty-8)+'" r="9" fill="#D9D2BF" stroke="#8B857C"/>'; }
            for (var p=0;p<6;p++){ var px=515+p*18, py=150-(px-420)*0.37; s += '<path d="M'+(px-6)+' '+py+' L'+px+' '+(py-22)+' L'+(px+6)+' '+py+' Z" fill="#C9D3C2" stroke="#8B857C"/>'; }
            for (var q=0;q<5;q++){ var qx=640+q*20, qy=95-(qx-620)*0.21; s += '<circle cx="'+qx+'" cy="'+(qy-10)+'" r="10" fill="#DDE2E8" stroke="#8B857C"/>'; }
            s += '<rect x="205" y="200" width="16" height="14" fill="#FBFAF7" stroke="#7C6B52"/><path d="M201 202 L213 190 L225 202" fill="none" stroke="#7C6B52"/>';
            s += '<rect x="232" y="198" width="16" height="14" fill="#FBFAF7" stroke="#7C6B52"/><path d="M228 200 L240 188 L252 200" fill="none" stroke="#7C6B52"/>';
            s += F.text(20, 358, lang==="en"?"Arrows of use ran both ways: fuel, leaves and grass down to the village and paddies; people and labour up to the woods.":(lang==="ja"?"使う流れは両方向だった。燃料・落ち葉・草は村と田へ下り、人と労働は林へ上った。":"利用的流向是雙向的：燃料、落葉與草往下送到村落與稻田；人與勞力則往上走進林中。"), { size:10.5, fill:"#55504A" });
            return s + '</svg>';
          } }
      ] },
    { t:"section",
      id:"uses",
      title:{ en:"What the woods gave", ja:"林がもたらしたもの", zh:"林地的供給" },
      jp:"薪・炭・刈敷・茅",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Firewood and charcoal", ja:"薪と炭", zh:"柴與炭" },
              jp:"まき・すみ",
              def:{
                en:"The first product. A household burned several cubic metres of firewood a year for cooking and the bath; charcoal, lighter and smokeless, went to braziers, hearths in town houses, blacksmiths and the swordsmiths of Seki. Coppice oak regrows from the stump in fifteen to twenty-five years, and villages divided their woods into blocks cut in rotation so that some part was ready every winter.",
                ja:"第一の産物。一つの家は煮炊きと風呂のために年に何立方メートルもの薪を燃やした。軽く煙の出ない炭は、火鉢、町家の囲炉裏、鍛冶屋、そして関の刀鍛冶に向かった。萌芽のナラは十五年から二十五年で切り株から育ち、村は林を区画に分けて順に伐り、毎冬どこかが伐りごろになるようにした。",
                zh:"首要產物。一戶人家每年為炊煮與洗澡燒掉數立方公尺的柴；較輕且無煙的木炭，則供應火盆、城鎮町家的地爐、鐵匠與關市的刀匠。萌芽的橡木十五至二十五年可從樹樁再長成，村落把林地劃分成區塊輪流砍伐，確保每年冬天都有一塊可以收成。" } },
            { term:{ en:"Leaf litter and green manure", ja:"落ち葉と刈敷", zh:"落葉與綠肥" },
              jp:"くずはき・かりしき",
              def:{
                en:"Before chemical fertiliser, the fertility of paddies came from the hills. Fallen leaves were raked and composted; young green shoots and grass (<em>karishiki</em>) were cut in early summer and trampled into the flooded fields. The practice stripped the woodland floor year after year, which is why so many satoyama hills carried thin soils, sparse red pine and — on them — matsutake.",
                ja:"化学肥料以前、田の肥やしは丘から来た。落ち葉はかき集めて堆肥にし、若い青葉や草（刈敷）は初夏に刈って水を張った田に踏みこんだ。その営みは林床を年々はぎとったので、多くの里山の丘はやせた土とまばらなアカマツ——そしてその下のマツタケ——をもっていた。",
                zh:"化肥出現之前，稻田的地力來自山丘。落葉被耙集堆肥；初夏割下嫩枝與青草（刈敷），踩入灌水的田中。這種做法年復一年剝除林床，因此許多里山丘陵土層淺薄，稀疏生長著赤松——以及其下的松茸。" } },
            { term:{ en:"Thatch grass", ja:"茅", zh:"茅草" },
              jp:"かや",
              def:{
                en:"Grass slopes and hilltops were burned or cut each year to grow <em>kaya</em> — pampas grass and similar tall grasses — for roofs. The steep thatched houses of Shirakawa-gō need huge quantities, and a roof is rethatched roughly every thirty years with the whole village working together; the village still keeps grass fields (<em>kayaba</em>) for the purpose.",
                ja:"草の斜面や丘の頂は、屋根の茅——ススキなどの背の高い草——を育てるために毎年焼かれ、刈られた。白川郷の急な茅葺きの家は膨大な茅を要し、屋根はおよそ三十年ごとに村じゅうで力を合わせて葺き替えられる。村はいまもそのための茅場を守っている。",
                zh:"草坡與山頂每年焚燒或割除，以培育屋頂用的「茅」——芒草等高大禾草。白川鄉陡峭的茅草屋需要大量茅草，屋頂大約每三十年由全村合力重葺一次；村子至今仍為此保留茅場。" } },
            { term:{ en:"Bamboo", ja:"竹", zh:"竹" },
              jp:"たけ",
              def:{
                en:"Groves beside the houses gave poles, baskets, fences, the ribs of Gifu's umbrellas and lanterns, and spring shoots to eat. Unmanaged, the introduced <em>mōsōchiku</em> bamboo spreads into neighbouring woods by several metres a year and shades them out.",
                ja:"家のそばの竹林は、竿、籠、垣、岐阜の和傘と提灯の骨、そして春に食べる筍をもたらした。手入れされなければ、外来のモウソウチクは年に数メートルずつ隣の林に広がり、日陰にして枯らす。",
                zh:"屋旁的竹林提供竿材、籃子、籬笆、岐阜和傘與燈籠的骨架，以及春季可食的竹筍。若無人管理，引進的孟宗竹每年會向鄰近林地擴張數公尺，遮蔽並擠死原有林木。" } },
            { term:{ en:"Food from the woods", ja:"林の恵み", zh:"林中食物" },
              jp:"山の幸",
              def:{
                en:"Chestnuts, walnuts and horse-chestnut nuts, wild vegetables in spring (<em>sansai</em> such as bracken and butterbur), mushrooms in autumn, and the leaves used to wrap food — magnolia leaves in Hida, for grilling miso on the charcoal brazier (<em>hōba miso</em>).",
                ja:"クリ、クルミ、トチの実、春の山菜（ワラビやフキノトウなど）、秋のきのこ、そして食べ物を包む葉——飛騨では朴の葉で味噌を炭火で焼く（朴葉味噌）。",
                zh:"栗子、胡桃與七葉樹果實；春天的山菜（如蕨菜與款冬花苞）、秋天的菇類；以及包裹食物的葉子——在飛驒，用朴樹葉在炭火上烤味噌（朴葉味噌）。" } }
          ] },
        { t:"figure",
          caption:{
            en:"The nutrient and energy cycle of a satoyama village, simplified. Almost nothing left the system except rice, crafts and charcoal sold to towns; almost nothing entered it from outside.",
            ja:"里山の村の養分とエネルギーの循環（簡略）。町に売られる米・工芸品・炭のほかは、ほとんど何も外に出ず、外から入るものもほとんどなかった。",
            zh:"里山村落的養分與能量循環（簡化）。除了賣到城鎮的稻米、工藝品與木炭之外，幾乎沒有東西離開這個系統，也幾乎沒有東西從外部進入。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"A closed loop", ja:"閉じた循環", zh:"封閉的循環" }, per:3, bh:92,
            steps:[
              { t:{ en:"Cut the coppice", ja:"萌芽林を伐る", zh:"砍伐萌芽林" }, d:{ en:"Oak and chestnut every 15–25 years.", ja:"ナラ・クリを十五〜二十五年ごとに。", zh:"橡木與栗木每 15–25 年一次。" } },
              { t:{ en:"Fuel and charcoal", ja:"薪と炭", zh:"柴與炭" }, d:{ en:"Cooking, heat, forge, kiln.", ja:"煮炊き・暖房・鍛冶・窯。", zh:"炊煮、取暖、鍛冶、窯燒。" } },
              { t:{ en:"Ash to the fields", ja:"灰を畑へ", zh:"灰燼回田" }, d:{ en:"Potash for crops; lye for paper and dye.", ja:"作物のためのカリ。紙や染めの灰汁にも。", zh:"作物所需的鉀；也作造紙與染色的鹼水。" } },
              { t:{ en:"Rake the leaves", ja:"落ち葉をかく", zh:"耙集落葉" }, d:{ en:"Compost for vegetable fields.", ja:"畑の堆肥に。", zh:"作為菜園堆肥。" } },
              { t:{ en:"Cut the grass", ja:"草を刈る", zh:"割草" }, d:{ en:"Green manure, fodder, thatch.", ja:"刈敷・飼料・茅。", zh:"綠肥、飼料、茅草。" } },
              { t:{ en:"Stumps regrow", ja:"株が芽吹く", zh:"樹樁萌芽" }, d:{ en:"The wood renews itself; the cycle turns.", ja:"林は自らよみがえり、循環がめぐる。", zh:"林地自我更新，循環再轉一圈。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"commons",
      title:{ en:"Common land", ja:"入会", zh:"入會共有地" },
      jp:"いりあい",
      body:[
        { t:"p",
          text:{
            en:"Much satoyama was not private property in the modern sense but common land, <em>iriaichi</em>, used by the households of a village under rules they made and enforced themselves: which blocks could be cut this year, how many loads each house could take, when the grass could be cut, what the penalty was for cutting out of turn. Such rules, often written down in village agreements of the Edo period, are one of the best-documented examples anywhere of a commons managed sustainably for centuries.",
            ja:"里山の多くは、近代的な意味での私有地ではなく、入会地——村の家々が自分たちでつくり守らせた決まりのもとで使う共有の土地——だった。今年はどの区画を伐ってよいか、一軒が何荷まで取れるか、草はいつ刈ってよいか、順番を破って伐ったらどんな罰を受けるか。江戸時代の村の取り決めにしばしば書き残されたこうした決まりは、何世紀にもわたって持続的に管理された共有地の、世界でも最もよく記録された例の一つである。",
            zh:"許多里山並非現代意義上的私有地，而是「入會地」——由村中各戶依自訂並自行執行的規則共同使用的土地：今年可以砍哪些區塊、每戶可取幾擔、何時可以割草、違規越序砍伐要受何種處罰。這些規則常以江戶時代的村落協議形式書面留存，是全世界記錄最完整、數百年來持續永續經營之共有地的例子之一。" } },
        { t:"p",
          text:{
            en:"Modernisation treated common land as an anomaly. The Meiji land reforms required every plot to have a registered owner; many commons were absorbed into state or imperial forest — the cause of the long disputes in Kiso — or registered in the names of village representatives, and a 1966 law encouraged their division into individual holdings or forestry cooperatives. Some of the fragmented, untraceable ownership that complicates forest management in Gifu today goes back to this history.",
            ja:"近代化は共有地を例外として扱った。明治の地租改正はすべての土地に登記された所有者を求め、多くの入会地は国有林や御料林に組みこまれるか——木曽の長い争いの原因——、村の代表者の名で登記された。一九六六年の法律は、それを個人の持ち分や生産森林組合へ分けることを促した。今日の岐阜で森の管理を難しくしている、細分化し所有者のたどれない土地の一部は、この歴史にさかのぼる。",
            zh:"現代化把共有地視為異例。明治的地租改正要求每塊土地都有登記所有人；許多入會地被併入國有林或御料林——這正是木曾長期爭議的起因——或以村落代表的名義登記，而 1966 年的一項法律則鼓勵將其分割為個人持分或生產森林組合。今日岐阜森林經營中那些零碎、難以追查的土地所有權，有一部分可追溯到這段歷史。" } }
      ] },
    { t:"section",
      id:"abandon",
      title:{ en:"Abandonment", ja:"放置", zh:"荒廢" },
      jp:"燃料革命のあとで",
      body:[
        { t:"p",
          text:{
            en:"The satoyama system ended within about fifteen years. Between the mid-1950s and the early 1970s kerosene, propane and electricity replaced firewood and charcoal; chemical fertiliser replaced leaf litter and green manure; tin and tile replaced thatch; plastic replaced bamboo. At the same time the government encouraged owners to convert coppice and grassland into sugi and hinoki plantations, and the young left for the cities. The woods that were not planted were simply left.",
            ja:"里山の仕組みは十五年ほどのうちに終わった。一九五〇年代半ばから一九七〇年代初めにかけて、灯油、プロパン、電気が薪と炭に、化学肥料が落ち葉と刈敷に、トタンと瓦が茅に、プラスチックが竹に取って代わった。同じころ政府は所有者に、萌芽林や草地をスギ・ヒノキの人工林に変えるよう勧め、若者は都市へ出ていった。植えられなかった林は、ただ放っておかれた。",
            zh:"里山體系在大約十五年內走入歷史。從 1950 年代中期到 1970 年代初，煤油、丙烷與電力取代了柴薪與木炭；化肥取代了落葉與綠肥；鐵皮與瓦片取代了茅草；塑膠取代了竹子。同一時期，政府鼓勵林主把萌芽林與草地改造成柳杉與扁柏人工林，年輕人則紛紛前往都市。沒有被改種的林地，就這樣被放著不管。" } },
        { t:"ul",
          items:[
            {
              en:"Coppice grew into dense, ageing oak stands — the preferred target of oak wilt.",
              ja:"萌芽林は密で老いたナラ林に育った——ナラ枯れの格好の標的である。",
              zh:"萌芽林長成密集而老化的橡木林——正是橡樹萎凋病最愛的目標。" },
            {
              en:"Grasslands, once a large share of the landscape, grew over; the plants and butterflies that depended on them became rare.",
              ja:"かつて景観の大きな部分を占めた草地は林に覆われ、それに頼っていた草花や蝶はまれになった。",
              zh:"曾占地景相當比例的草地被樹林覆蓋；依賴草地的植物與蝴蝶變得稀少。" },
            {
              en:"Red-pine woods, no longer raked, filled with broadleaves and litter; then pine wilt killed the pines.",
              ja:"落ち葉かきされなくなったアカマツ林は広葉樹と落ち葉で埋まり、そして松枯れがマツを枯らした。",
              zh:"不再耙葉的赤松林被闊葉樹與落葉填滿，接著松材線蟲病殺死了松樹。" },
            {
              en:"Bamboo spread from house groves into fields and woods.",
              ja:"竹は家まわりの竹林から畑と林へ広がった。",
              zh:"竹子從屋旁竹林擴張到田地與樹林。" },
            {
              en:"Deer, boar, monkeys and bears, finding cover up to the edge of the houses, came into the fields.",
              ja:"シカ、イノシシ、サル、クマは、家の際まで身を隠せるようになり、畑に入ってきた。",
              zh:"鹿、野豬、獼猴與熊在緊鄰住家處都找得到掩蔽，便闖進田裡。" }
          ] }
      ] },
    { t:"section",
      id:"revival",
      title:{ en:"Revival", ja:"よみがえり", zh:"復興" },
      jp:"里山の再生",
      body:[
        { t:"p",
          text:{
            en:"Since the 1990s satoyama has become a rallying word for conservation in Japan and beyond. The 2010 Conference of the Parties to the Convention on Biological Diversity in Nagoya — next door to Gifu — launched the international Satoyama Initiative, promoting landscapes in which production and biodiversity support each other. In Gifu itself revival takes many small forms, most of them funded in part by the prefecture's forest and environment tax.",
            ja:"一九九〇年代から、里山は日本とその外で自然保護の合言葉となった。岐阜の隣の名古屋で二〇一〇年に開かれた生物多様性条約の締約国会議は、生産と生物多様性が支えあう景観を広める国際的な「SATOYAMAイニシアティブ」を立ち上げた。岐阜そのものでは、よみがえりは多くの小さなかたちをとり、その多くは県の森林・環境税から一部の資金を得ている。",
            zh:"自 1990 年代起，「里山」成為日本乃至國際自然保育的號召詞。2010 年在岐阜鄰近的名古屋舉行的《生物多樣性公約》締約方大會，發起國際性的「里山倡議」，推廣生產與生物多樣性相互扶持的地景。在岐阜本地，復興以許多小規模形式進行，其中多數部分經費來自縣的森林環境稅。" } },
        { t:"grid",
          cols:2,
          cells:[
            { h:{ en:"Volunteer woodland groups", ja:"里山の保全団体", zh:"志工林地團體" },
              jp:"里山保全",
              d:{
                en:"Citizens' groups thin, coppice and clear bamboo in woods near Gifu city, Kakamigahara, Tajimi and other towns, often under agreements with the owners and with prefectural support for tools and training.",
                ja:"市民団体が、岐阜市、各務原、多治見などの町の近くの林で、間伐や萌芽更新や竹の伐採を行う。多くは所有者と協定を結び、道具と研修に県の支援を受ける。",
                zh:"公民團體在岐阜市、各務原、多治見等城鎮附近的林地進行疏伐、萌芽更新與清除竹林，通常與林主簽訂協議，並獲縣府在工具與培訓上的支援。" } },
            { h:{ en:"Firewood again", ja:"ふたたび薪を", zh:"再度用柴" },
              jp:"薪ストーブ",
              d:{
                en:"Wood stoves have become popular with new residents and holiday homes, and small businesses sell split, seasoned firewood cut from local coppice — the first commercial reason in decades to cut young oak. See <a href=\"fuel.html\">Wood as Fuel</a>.",
                ja:"薪ストーブは移住者や別荘に人気となり、地元の萌芽林から伐った割って乾かした薪を売る小さな商いが生まれた——若いナラを伐る、何十年ぶりの商業的な理由である。<a href=\"fuel.html\">燃料としての木</a>を参照。",
                zh:"柴爐在新移居者與度假屋之間流行起來，小型業者販售取自在地萌芽林、劈好並乾燥的柴薪——這是數十年來第一個砍伐幼齡橡木的商業理由。見<a href=\"fuel.html\">作為燃料的木材</a>。" } },
            { h:{ en:"The Nagara ayu system", ja:"清流長良川の鮎", zh:"清流長良川的香魚" },
              jp:"世界農業遺産",
              d:{
                en:"In 2015 the Food and Agriculture Organization designated “the Ayu of the Nagara River System” a Globally Important Agricultural Heritage System, recognising the chain that links forested headwaters, villages, the river fishery, cormorant fishing and the people downstream — a satoyama in which the river is the thread.",
                ja:"二〇一五年、国連食糧農業機関は「清流長良川の鮎」を世界農業遺産に認定した。森の源流、村、川の漁、鵜飼、下流の人々を結ぶ連なりを認めたもので、川を糸とする里山といえる。",
                zh:"2015 年，聯合國糧農組織將「清流長良川的香魚」認定為全球重要農業文化遺產，肯定連結森林源頭、村落、河川漁業、鸕鶿捕魚與下游居民的整條鏈結——一種以河川為主線的里山。" } },
            { h:{ en:"Education and tourism", ja:"学びと観光", zh:"教育與觀光" },
              jp:"森林文化アカデミー",
              d:{
                en:"The Forest Academy in Mino teaches satoyama management alongside forestry; in Hida, guided cycling and walking tours through working villages and their woods have drawn many overseas visitors since the 2010s.",
                ja:"美濃の森林文化アカデミーは林業と並んで里山の管理を教える。飛騨では、暮らしの続く村とその林をめぐるガイド付きのサイクリングや散策が、二〇一〇年代から多くの海外の旅行者を集めている。",
                zh:"美濃的森林文化學院在林業之外也教授里山經營；在飛驒，穿越仍有人居住的村落及其林地的導覽單車與健行行程，自 2010 年代起吸引了許多海外旅客。" } }
          ] },
        { t:"note",
          label:{ en:"Not a museum", ja:"博物館ではない", zh:"不是博物館" },
          text:{
            en:"The difficulty with satoyama revival is that the old landscape was a by-product of necessity. No one raked leaves out of love for butterflies. Volunteers can keep a few hectares open, but a satoyama on the old scale needs uses for small wood, leaves and grass that people will pay for — which is why the most durable projects are those that sell something: firewood, charcoal, mushrooms, crafts, visits.",
            ja:"里山のよみがえりの難しさは、昔の景観が必要の副産物だったことにある。蝶を愛して落ち葉をかいた人はいない。ボランティアは数ヘクタールを開いたままにできるが、昔の規模の里山には、人がお金を払う細い木や落ち葉や草の使い道が要る。だから最も長続きする取り組みは、何かを売るもの——薪、炭、きのこ、工芸品、訪問——である。",
            zh:"里山復興的難處在於，舊地景是生活必需的副產品。沒有人是因為愛蝴蝶才去耙落葉的。志工可以維持幾公頃的開放林地，但要恢復昔日規模的里山，就需要有人願意付錢的小徑木、落葉與草的用途——因此最能持久的計畫，都是能賣些什麼的：柴、炭、菇類、工藝品、參訪行程。" } }
      ] },
    { t:"related",
      items:[
        { href:"broadleaf.html", why:{ en:"The coppice oaks and their diseases.", ja:"萌芽のナラとその病。", zh:"萌芽橡木及其病害。" } },
        { href:"fuel.html",
          why:{ en:"Firewood, charcoal and biomass today.", ja:"いまの薪・炭・バイオマス。", zh:"今日的柴薪、木炭與生質能源。" } },
        { href:"culture.html", why:{ en:"Thatched houses and village life.", ja:"茅葺きの家と村の暮らし。", zh:"茅草屋與村落生活。" } },
        { href:"paper.html",
          why:{ en:"Mino paper and the plants of the satoyama.", ja:"美濃和紙と里山の植物。", zh:"美濃和紙與里山植物。" } }
      ] }
  ] };

/* ---- ------------------------------------------- anatomy */
GIFU.pages["anatomy"] = { kicker:{ en:"The Forest · 10", ja:"森 · 10", zh:"森林 · 10" },
  title:{ en:"The Anatomy of Wood", ja:"木の構造", zh:"木材構造" },
  jp:"年輪・細胞・木目",
  lede:{
    en:"Every property a woodworker cares about — how a board splits, bends, smells, shrinks, takes a finish or rings when struck — begins in the structure of the tree. Wood is a mass of dead, hollow cells, most of them long and thin, laid down each year by a single living layer under the bark and arranged in ways that differ from species to species. This page explains that structure from the trunk down to the cell wall, the difference between conifer and broadleaf wood, and how the way a log is cut turns anatomy into the grain and figure that give Japanese woodwork its look.",
    ja:"木工家が気にかけるあらゆる性質——板がどう割れ、曲がり、匂い、縮み、塗料を受け、叩けばどう鳴るか——は、木の構造に始まる。木材は死んだ中空の細胞のかたまりで、その多くは細長く、樹皮の下のただ一層の生きた層によって毎年つくられ、樹種ごとに異なるしかたで並んでいる。この頁は、幹から細胞壁までのその構造、針葉樹と広葉樹の材の違い、そして丸太の挽き方が構造をどのように木目と杢に変え、日本の木工の姿を与えるのかを説明する。",
    zh:"木工師傅在意的每一種性質——木板如何開裂、彎曲、散發氣味、收縮、吃塗料，或被敲擊時如何發聲——都始於樹木的構造。木材是一團死去的中空細胞，多數細長，由樹皮下唯一一層活組織每年生成，並以因樹種而異的方式排列。本頁從樹幹一路講到細胞壁，說明針葉樹與闊葉樹木材的差異，以及原木的鋸切方式如何把構造轉化為紋理與花紋，形塑日本木工的樣貌。" },
  body:[
    { t:"section",
      id:"trunk",
      title:{ en:"The trunk in cross-section", ja:"幹の断面", zh:"樹幹橫切面" },
      jp:"木口",
      body:[
        { t:"p",
          text:{
            en:"Look at the end of a freshly cut hinoki log — the <em>koguchi</em>, or “mouth of the wood” — and the structure is visible to the naked eye. At the centre is the pith, the remnant of the first year's shoot. Around it lie the annual rings, one for each growing season. Towards the outside is a paler band, the sapwood, which in the living tree still carried water; inside it, often darker and more fragrant, is the heartwood, where the cells have died and been filled with extractives that resist decay. Outside everything lies the thin cambium and the bark.",
            ja:"伐ったばかりのヒノキの丸太の端——木口——を見れば、構造は肉眼で見える。中心は髄で、最初の年の芽の名残である。そのまわりに年輪があり、一つの成長期に一つずつ刻まれる。外側には淡い帯、辺材（白太）があり、生きている木ではまだ水を運んでいた。その内側、しばしば色が濃く香りの高いのが心材（赤身）で、細胞が死に、腐りに抗う抽出成分で満たされている。すべての外側に、薄い形成層と樹皮がある。",
            zh:"觀察一根剛鋸下的扁柏原木端面——日文稱「木口」——結構便肉眼可見。中心是髓心，是第一年嫩枝的遺跡。其周圍是年輪，每個生長季一圈。外側有一圈較淡的帶，即邊材（白太），在活樹中仍負責輸水；其內側、往往顏色較深且更芳香的是心材（赤身），細胞已經死去，並充滿能抵抗腐朽的抽出成分。最外面是薄薄的形成層與樹皮。" } },
        { t:"figure",
          caption:{
            en:"The parts of a trunk seen on the end grain. The proportion of sapwood varies with species and growth: hinoki and sugi have a narrow sapwood band; beech has no distinct heartwood at all.",
            ja:"木口に見える幹の各部。辺材の割合は樹種と成長によって変わる。ヒノキやスギの辺材は狭い帯で、ブナにははっきりした心材がない。",
            zh:"從端面看到的樹幹各部位。邊材比例隨樹種與生長而異：扁柏與柳杉的邊材帶較窄；山毛櫸則根本沒有明顯的心材。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 330" role="img">', cx = 190, cy = 170;
            s += F.text(20, 28, lang==="en"?"END GRAIN OF A CONIFER LOG":(lang==="ja"?"針葉樹の丸太の木口":"針葉樹原木端面"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="130" fill="#B4AC9C" stroke="#7C6B52"/>';
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="121" fill="#E4E0D6" stroke="#A08F73"/>';
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="118" fill="#F5F3ED" stroke="#CDC6B9"/>';
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="92" fill="#EADCC1" stroke="#CDC6B9"/>';
            for (var r=10; r<118; r+=7){ s += '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+(r<92?"#C9B893":"#DCD6C8")+'" stroke-width="'+(r%14===3?1.4:0.8)+'"/>'; }
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="3" fill="#7C6B52"/>';
            var labs = [
              [126, 40, { en:"Bark", ja:"樹皮", zh:"樹皮" }, { en:"inner bark carries sugar down", ja:"内樹皮は糖を下へ運ぶ", zh:"內樹皮向下輸送糖分" }],
              [119, 20, { en:"Cambium", ja:"形成層", zh:"形成層" }, { en:"the only living layer that makes wood", ja:"木をつくる唯一の生きた層", zh:"唯一會生成木材的活組織" }],
              [105, 0, { en:"Sapwood (shirata)", ja:"辺材（白太）", zh:"邊材（白太）" }, { en:"conducts water; pale, perishable", ja:"水を通す。淡色で腐りやすい", zh:"輸導水分；色淡、易腐" }],
              [50, -20, { en:"Heartwood (akami)", ja:"心材（赤身）", zh:"心材（赤身）" }, { en:"dead cells, extractives, colour, durability", ja:"死んだ細胞・抽出成分・色・耐久性", zh:"死細胞、抽出成分、顏色、耐久性" }],
              [3, -40, { en:"Pith", ja:"髄", zh:"髓心" }, { en:"first year's shoot", ja:"最初の年の芽", zh:"第一年嫩枝" }]
            ];
            for (var i=0;i<labs.length;i++){
              var ly = 70 + i*50, lb = labs[i], th = lb[1]*Math.PI/180, ax = cx + lb[0]*Math.cos(th), ay = cy - lb[0]*Math.sin(th);
              s += '<circle cx="'+ax.toFixed(1)+'" cy="'+ay.toFixed(1)+'" r="2" fill="#7C6B52"/>';
              s += '<path d="M'+ax.toFixed(1)+' '+ay.toFixed(1)+' L360 '+ly+' L380 '+ly+'" fill="none" stroke="#8B857C"/>';
              s += F.text(386, ly+4, L(lb[2]), { size:12, fill:"#201E1B" });
              s += F.text(386, ly+19, L(lb[3]), { size:10.5, fill:"#55504A" });
            }
            s += F.text(560, 318, lang==="en"?"Each ring = one growing season":(lang==="ja"?"年輪一本 = 一成長期":"一圈年輪 = 一個生長季"), { size:10.5, fill:"#55504A" });
            return s + '</svg>';
          } },
        { t:"p",
          text:{
            en:"Within each ring, the wood formed early in the season — earlywood — has large, thin-walled cells built for moving water fast in spring. The latewood of summer and autumn has small, thick-walled cells and is denser and darker. The contrast between them is what makes a ring visible. In sugi it is strong, giving the bold stripes of its grain; in hinoki it is gentle, which is why hinoki looks so even and planes to such a silky surface.",
            ja:"年輪の一本のなかで、季節の初めにできる材——早材（春材）——は、春に水を速く運ぶための大きく壁の薄い細胞でできている。夏から秋の晩材は小さく壁の厚い細胞で、密で色が濃い。その対比が年輪を見えるものにする。スギではそれが強く、木目の大胆な縞になる。ヒノキではやわらかく、だからヒノキはあれほど均質に見え、あれほど絹のような面に鉋がかかる。",
            zh:"在每一圈年輪中，季初形成的木材——早材（春材）——由大而壁薄的細胞構成，用於春季快速輸水；夏秋形成的晚材細胞小而壁厚，更緻密、顏色更深。兩者的反差讓年輪清晰可見。柳杉的反差強烈，形成大膽的條紋；扁柏的反差柔和，因此扁柏看起來格外均勻，也能刨出如絲般的表面。" } }
      ] },
    { t:"section",
      id:"softwood",
      title:{ en:"Conifer wood", ja:"針葉樹材", zh:"針葉樹材" },
      jp:"仮道管",
      body:[
        { t:"p",
          text:{
            en:"Conifer wood — the “softwood” of the timber trade, though larch and yew are harder than many broadleaves — is simple and ancient in design. Over nine-tenths of its volume is made of a single kind of cell, the tracheid: a closed tube a few millimetres long and a few hundredths of a millimetre wide, pointed at both ends, which both conducts water through small valved pits in its walls and holds the tree up. Running at right angles to them, from the pith outwards, are thin ribbons of living cells, the rays, which store food and move it sideways.",
            ja:"針葉樹材——木材業界の「ソフトウッド」だが、カラマツやイチイは多くの広葉樹より硬い——は、つくりが単純で古い。その体積の九割以上は、ただ一種類の細胞、仮道管でできている。長さ数ミリ、幅は百分の数ミリの両端のとがった閉じた管で、壁の小さな弁つきの壁孔を通して水を運び、同時に木を支える。それと直角に、髄から外へ向かって、生きた細胞の薄い帯である放射組織が走り、養分をたくわえて横へ運ぶ。",
            zh:"針葉樹材——木材業所稱的「軟木」，儘管落葉松與紅豆杉比許多闊葉樹還硬——在設計上簡單而古老。其九成以上的體積由單一種細胞構成：假導管——一種長數公釐、寬僅百分之幾公釐、兩端尖、封閉的管子，既透過管壁上帶閥的小紋孔輸水，又支撐整棵樹。與之垂直、從髓心向外延伸的，是由活細胞組成的薄帶——木射線，負責儲存養分並橫向輸送。" } },
        { t:"defs",
          items:[
            { term:{ en:"Tracheid", ja:"仮道管", zh:"假導管" },
              jp:"かどうかん",
              def:{
                en:"In sugi and hinoki typically 2–4 mm long. Their length and the angle of the cellulose fibrils in their walls govern stiffness and shrinkage; the tracheids near the pith of fast-grown trees are shorter, with steeper fibrils, which is why juvenile wood is weaker and moves more.",
                ja:"スギやヒノキではふつう長さ二〜四ミリ。その長さと壁のセルロース繊維の角度が、剛さと収縮を左右する。速く育った木の髄に近い仮道管は短く、繊維の角度が急である。未成熟材が弱く狂いやすいのはそのためである。",
                zh:"柳杉與扁柏的假導管通常長 2–4 公釐。其長度與壁中纖維素微纖絲的角度，決定了剛性與收縮；快速生長樹木靠近髓心的假導管較短、微纖絲角度較陡，這就是幼齡材較弱且容易變形的原因。" } },
            { term:{ en:"Resin canals", ja:"樹脂道", zh:"樹脂道" },
              jp:"じゅしどう",
              def:{
                en:"Pines, larch, spruce and Douglas fir have ducts lined with resin-secreting cells, visible as tiny dots on the end grain and as pitch streaks. Hinoki, sugi, sawara and yew have no normal resin canals — one reason they plane and finish so cleanly, and why their fragrance comes from oils held in the cells rather than from resin.",
                ja:"マツ、カラマツ、トウヒ、ダグラスファーには樹脂を分泌する細胞に囲まれた管があり、木口では小さな点として、板ではやに筋として見える。ヒノキ、スギ、サワラ、イチイには正常な樹脂道がない——鉋や仕上げがきれいに通る理由の一つであり、その香りが樹脂ではなく細胞にたくわえられた精油から来る理由でもある。",
                zh:"松、落葉松、雲杉與花旗松具有由分泌樹脂細胞包圍的管道，在端面呈細小斑點，在板面則為樹脂條紋。扁柏、柳杉、花柏與紅豆杉沒有正常樹脂道——這是它們刨削與塗裝都格外乾淨的原因之一，也說明其香氣來自細胞中的精油而非樹脂。" } },
            { term:{ en:"Rays", ja:"放射組織", zh:"木射線" },
              jp:"ほうしゃそしき",
              def:{
                en:"In conifers the rays are one cell wide and nearly invisible; they matter because wood shrinks less along them than around the rings, one of the causes of the difference between radial and tangential shrinkage.",
                ja:"針葉樹の放射組織は細胞一列の幅でほとんど見えない。だが材が年輪に沿うより放射組織に沿うほうが縮みにくいため、放射方向と接線方向の収縮の差の原因の一つとなる。",
                zh:"針葉樹的木射線僅一個細胞寬，幾乎看不見；但因為木材沿射線方向的收縮小於沿年輪方向，射線是徑向與弦向收縮差異的原因之一。" } }
          ] }
      ] },
    { t:"section",
      id:"hardwood",
      title:{ en:"Broadleaf wood", ja:"広葉樹材", zh:"闊葉樹材" },
      jp:"道管",
      body:[
        { t:"p",
          text:{
            en:"The flowering trees evolved a division of labour. Their water travels through vessels — stacks of wide cells whose end walls have dissolved, forming open pipes up to several metres long — while support comes from thick-walled fibres and storage from abundant living parenchyma. The size and arrangement of the vessels is the single most useful feature for identifying broadleaf timbers, and it explains much of their character.",
            ja:"花を咲かせる木々は分業を進化させた。水は道管——端の壁が溶けて開いた、長いものでは数メートルに及ぶ管をなす幅の広い細胞の連なり——を通り、支えは壁の厚い木繊維が、たくわえは豊富な生きた柔細胞が受けもつ。道管の大きさと並び方は、広葉樹材を見分けるのに最も役立つ特徴であり、その性格の多くを説明する。",
            zh:"開花樹木演化出分工：水分經由導管運輸——導管是端壁溶解、首尾相連的寬大細胞，形成長可達數公尺的開放管道——支撐由厚壁木纖維負責，儲存則由豐富的活薄壁細胞負責。導管的大小與排列方式，是辨識闊葉樹材最有用的特徵，也說明了它們大部分的性格。" } },
        { t:"table",
          caption:{ en:"Pore arrangements of broadleaf timbers", ja:"広葉樹材の道管の並び方", zh:"闊葉樹材的管孔排列" },
          cols:[
            { en:"Type", ja:"型", zh:"類型" },
            { en:"What you see on the end grain", ja:"木口に見えるもの", zh:"端面所見" },
            { en:"Examples in Gifu", ja:"岐阜の例", zh:"岐阜的例子" },
            { en:"Character", ja:"性格", zh:"性格" }
          ],
          rows:[
            [
              { en:"Ring-porous", ja:"環孔材", zh:"環孔材" },
              {
                en:"A ring of large earlywood pores, then small latewood pores",
                ja:"早材に大きな道管の輪、晩材に小さな道管",
                zh:"早材有一圈大管孔，晚材為小管孔" },
              { en:"Keyaki, mizunara, chestnut, ash, sen", ja:"ケヤキ、ミズナラ、クリ、タモ、セン", zh:"櫸木、水楢、栗木、梣木、刺楸" },
              {
                en:"Bold grain; open texture needs filling for a smooth finish; strong for its weight",
                ja:"大胆な木目。滑らかに仕上げるには目止めが要る。重さのわりに強い",
                zh:"紋理大膽；木理粗，需填孔才能平滑；以重量而言強度高" }
            ],
            [
              { en:"Diffuse-porous", ja:"散孔材", zh:"散孔材" },
              { en:"Small pores scattered evenly through the ring", ja:"小さな道管が年輪全体に均一に散る", zh:"小管孔均勻散布於整圈年輪" },
              {
                en:"Beech, katsura, horse chestnut, cherry, maple, magnolia",
                ja:"ブナ、カツラ、トチ、サクラ、カエデ、ホオ",
                zh:"山毛櫸、連香樹、七葉樹、櫻木、楓木、厚朴" },
              {
                en:"Even, fine texture; ideal for turning, carving and bending",
                ja:"均質で緻密。挽物・彫刻・曲木に理想的",
                zh:"均勻細緻；最適合車製、雕刻與彎曲" }
            ],
            [
              { en:"Semi-ring-porous", ja:"半環孔材", zh:"半環孔材" },
              { en:"Pores decreasing gradually across the ring", ja:"年輪を横切って道管がしだいに小さくなる", zh:"管孔橫跨年輪逐漸變小" },
              { en:"Japanese walnut", ja:"オニグルミ", zh:"鬼胡桃" },
              { en:"Intermediate", ja:"中間的", zh:"介於兩者之間" }
            ],
            [
              { en:"Radial-porous", ja:"放射孔材", zh:"放射孔材" },
              { en:"Pores in radial lines crossing the rings", ja:"道管が年輪を横切る放射状の列をなす", zh:"管孔排成橫跨年輪的放射狀線" },
              { en:"Evergreen oaks (kashi)", ja:"カシ類", zh:"常綠櫟類（橿）" },
              { en:"Very hard, heavy; tool handles, planes' bodies", ja:"非常に硬く重い。道具の柄、鉋台", zh:"極硬極重；工具柄、刨台" }
            ]
          ] },
        { t:"p",
          text:{
            en:"Broadleaf rays vary far more than conifer rays. In oaks some are huge — many cells wide and several centimetres tall — and when a log is quartersawn so that the face runs along them, they show as the lustrous flakes and bands that the Japanese call <em>toranfu</em>, tiger stripes, and English woodworkers call silver grain or ray fleck. Beech has medium rays that show as small brown dashes on every face; horse chestnut has rays so fine that they combine with ripples in the fibres to make its shimmering figure.",
            ja:"広葉樹の放射組織は、針葉樹よりもはるかに変化に富む。ナラ類には巨大なもの——細胞何列分もの幅で、高さ数センチ——があり、丸太をその面に沿うように柾目に挽くと、光沢のある斑や帯として現れる。日本ではこれを虎斑と呼び、英語ではシルバーグレインやレイフレックと呼ぶ。ブナの中くらいの放射組織は、どの面にも小さな茶色の線として見える。トチの放射組織はごく細く、繊維の波打ちと重なって、あのきらめく杢をつくる。",
            zh:"闊葉樹的木射線遠比針葉樹多變。橡木有些射線巨大——寬達許多細胞、高數公分——當原木以徑切使板面順著射線時，就呈現出日本人稱為「虎斑」、英語木工稱為銀紋或射線斑的光澤鱗片與帶紋。山毛櫸的中型射線在每個面上都呈細小的褐色短線；七葉樹的射線極細，與纖維的波狀起伏結合，形成閃爍的花紋。" } }
      ] },
    { t:"section",
      id:"wall",
      title:{ en:"The cell wall", ja:"細胞壁", zh:"細胞壁" },
      jp:"ミクロフィブリル",
      body:[
        { t:"p",
          text:{
            en:"At the smallest scale that matters to a woodworker, a wood cell wall is a composite material, like glass-fibre reinforced plastic. Long crystalline threads of cellulose — microfibrils — are bundled and wound helically around the cell; they are embedded in a matrix of hemicelluloses and lignin, which binds them together and makes the wall rigid and water-resistant. The wall is built in layers. The thickest, the middle layer of the secondary wall (S2), has its microfibrils wound at a shallow angle to the cell's axis, nearly parallel to it, and it dominates the properties of the whole piece of wood.",
            ja:"木工家にとって意味のある最小の尺度で見ると、木の細胞壁はガラス繊維強化プラスチックのような複合材料である。長い結晶性のセルロースの糸——ミクロフィブリル——が束ねられ、細胞のまわりにらせん状に巻かれている。それはヘミセルロースとリグニンの基質に埋めこまれ、基質がそれらを結びつけ、壁を剛く水に強くする。壁は層に分かれてつくられる。最も厚い二次壁中層（S2）では、ミクロフィブリルが細胞の軸に対して浅い角度で、ほとんど平行に巻かれ、この層が木材全体の性質を支配する。",
            zh:"就木工師傅在意的最小尺度而言，木材細胞壁是一種複合材料，就像玻璃纖維強化塑膠。長而結晶的纖維素絲——微纖絲——成束並呈螺旋狀纏繞細胞；它們埋在半纖維素與木質素構成的基質中，基質將其黏結，使細胞壁堅硬且抗水。細胞壁分層構成；其中最厚的次生壁中層（S2），微纖絲以與細胞軸夾角很小、近乎平行的角度纏繞，主導了整塊木材的性質。" } },
        { t:"figure",
          caption:{
            en:"The layered wall of a single wood cell, schematic. The angle of the microfibrils in the thick S2 layer largely determines how stiff the wood is along the grain and how much it shrinks lengthwise. Not to scale.",
            ja:"一つの木材細胞の層状の壁（模式図）。厚いS2層のミクロフィブリルの角度が、繊維方向の剛さと長さ方向の収縮の大きさを大きく決める。縮尺は正確でない。",
            zh:"單一木材細胞的分層細胞壁（示意）。厚 S2 層的微纖絲角度，大致決定了木材沿纖維方向的剛性與縱向收縮量。未按比例。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 290" role="img">';
            s += F.text(20, 28, lang==="en"?"CELL WALL LAYERS":(lang==="ja"?"細胞壁の層":"細胞壁的分層"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            var layers = [
              [60, 250, "#E6E2EC", "ML", { en:"Middle lamella — lignin-rich glue between cells", ja:"細胞間層——細胞どうしを貼るリグニンに富む層", zh:"胞間層——細胞之間富含木質素的膠結層" }, 0],
              [80, 230, "#E0E7E9", "P", { en:"Primary wall — thin, random fibrils", ja:"一次壁——薄く、繊維は不規則", zh:"初生壁——薄，微纖絲雜亂" }, 0],
              [96, 214, "#EDE5D2", "S1", { en:"S1 — fibrils at a wide angle, crossed", ja:"S1——大きな角度で交差する繊維", zh:"S1——大角度交錯的微纖絲" }, 70],
              [112, 198, "#E0E6DB", "S2", { en:"S2 — thickest; fibrils nearly parallel to the axis (≈10–30°)", ja:"S2——最も厚い。繊維は軸にほぼ平行（約十〜三十度）", zh:"S2——最厚；微纖絲近乎平行於軸（約 10–30°）" }, 20],
              [168, 142, "#EADCC1", "S3", { en:"S3 — thin, wide angle again", ja:"S3——薄く、ふたたび大きな角度", zh:"S3——薄，角度再度變大" }, 75],
              [176, 134, "#FBFAF7", "", { en:"Lumen — the hollow interior", ja:"内腔——中空の内部", zh:"細胞腔——中空內部" }, 0]
            ];
            for (var i=0;i<layers.length;i++){
              var ly = layers[i], x = ly[0], w = ly[1];
              s += '<rect x="'+x+'" y="'+(40+(x-60)*0.5)+'" width="'+w+'" height="'+(230-(x-60))+'" fill="'+ly[2]+'" stroke="#8B857C"/>';
              if (ly[5]) {
                var a = ly[5]*Math.PI/180, y0 = 40+(x-60)*0.5+8, h = 230-(x-60)-16;
                var bw = 13, dy = bw/Math.tan(a), n = Math.floor((h-dy)/9);
                for (var k=0;k<n;k++){ var yy = y0 + k*9; s += '<line x1="'+(x+2)+'" y1="'+yy.toFixed(1)+'" x2="'+(x+2+bw)+'" y2="'+(yy+dy).toFixed(1)+'" stroke="#7C6B52" stroke-width="0.8"/>'; }
              }
            }
            for (var j=0;j<layers.length;j++){
              var lj = layers[j], ty = 62 + j*34;
              s += '<rect x="330" y="'+(ty-11)+'" width="14" height="14" fill="'+lj[2]+'" stroke="#8B857C"/>';
              s += F.text(352, ty, L(lj[4]), { size:11, fill:"#201E1B", max:62 });
            }
            s += F.text(330, 272, lang==="en"?"Cellulose ≈ 40–50% · hemicelluloses ≈ 20–30% · lignin ≈ 20–35%":(lang==="ja"?"セルロース約40〜50％・ヘミセルロース約20〜30％・リグニン約20〜35％":"纖維素約 40–50%・半纖維素約 20–30%・木質素約 20–35%"), { size:10.5, fill:"#55504A" });
            return s + '</svg>';
          } },
        { t:"p",
          text:{
            en:"Water is held in the wall between the microfibrils, not along them. When wood dries below about thirty per cent moisture, the wall loses water and the microfibrils move closer together — so the wall shrinks in thickness but hardly at all in length. That single fact, multiplied through billions of cells, explains why a board shrinks across its width but not along it, why it shrinks more around the rings than across them, and why the Japanese carpenter's rule of thumb is to watch the end grain, not the face. See <a href=\"moisture.html\">Wood &amp; Water</a>.",
            ja:"水はミクロフィブリルに沿ってではなく、そのあいだの壁に保たれる。木が含水率およそ三十パーセントより下に乾くと、壁は水を失い、ミクロフィブリルどうしが近づく——だから壁は厚みでは縮むが、長さではほとんど縮まない。この一つの事実が何十億の細胞にわたって積み重なり、板が幅では縮んでも長さでは縮まない理由、年輪を横切る方向より年輪に沿う方向に多く縮む理由、そして日本の大工が板の面ではなく木口を見よという経験則の理由を説明する。<a href=\"moisture.html\">木と水分</a>を参照。",
            zh:"水分保存在微纖絲之間的壁中，而非沿著微纖絲。當木材乾燥到含水率約 30% 以下，細胞壁失水，微纖絲彼此靠近——因此細胞壁在厚度上收縮，長度卻幾乎不縮。這一個事實在數十億個細胞中疊加，解釋了為何木板橫向收縮而縱向不縮、為何沿年輪方向的收縮大於橫跨年輪方向，也解釋了日本木匠「要看端面、不看板面」的經驗法則。見<a href=\"moisture.html\">木與水分</a>。" } }
      ] },
    { t:"section",
      id:"grain",
      title:{ en:"Quartersawn and flatsawn", ja:"柾目と板目", zh:"徑切與弦切" },
      jp:"まさめ・いため",
      body:[
        { t:"p",
          text:{
            en:"How a board is cut from the log decides which face of the anatomy it shows. A board cut through the centre, so that the rings run across its thickness, is <em>masame</em> — quartersawn or edge grain — and shows straight parallel lines. A board cut tangent to the rings is <em>itame</em> — flatsawn or plain-sawn — and shows the arched “cathedral” pattern where the saw has sliced through successive rings. Japanese woodworking developed an unusually precise vocabulary for the two, because they differ not only in look but in behaviour.",
            ja:"丸太から板をどう挽くかが、構造のどの面を見せるかを決める。中心を通して挽き、年輪が板の厚みを横切るように走る板が柾目で、まっすぐな平行線を見せる。年輪に接するように挽いた板が板目で、鋸が次々に年輪を切り抜けたところにアーチ形の模様——竹の子杢とも呼ばれる——を見せる。日本の木工はこの二つについて、とりわけ精密な言葉を育てた。見た目だけでなく、ふるまいが違うからである。",
            zh:"木板如何從原木上鋸出，決定了它呈現構造的哪一面。穿過中心鋸切、使年輪橫貫板厚的木板稱為「柾目」——徑切或邊紋——呈現筆直平行的線條。與年輪相切鋸出的木板稱為「板目」——弦切或平切——在鋸子逐層切過年輪之處，呈現拱形的「山形紋」。日本木工為這兩者發展出格外精確的詞彙，因為它們不僅外觀不同，性能也不同。" } },
        { t:"figure",
          caption:{
            en:"Where masame and itame boards come from in a log, and how each moves as it dries: the flatsawn board cups away from the heart; the quartersawn board stays flat and shrinks about half as much in width.",
            ja:"柾目と板目の板が丸太のどこから取れるか、そして乾くにつれてそれぞれがどう動くか。板目の板は木表側に反り、柾目の板は平らなまま、幅の縮みはおよそ半分である。",
            zh:"柾目與板目木板取自原木的位置，以及各自乾燥時如何變形：弦切板會朝遠離髓心的一面翹曲成瓦狀；徑切板保持平整，寬度收縮約只有一半。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 300" role="img">', cx=170, cy=165;
            s += F.text(20, 28, lang==="en"?"TWO WAYS TO CUT A BOARD":(lang==="ja"?"板の二つの挽き方":"鋸板的兩種方式"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="118" fill="#EADCC1" stroke="#7C6B52"/>';
            for (var r=12;r<118;r+=11) s += '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="#C9B893" stroke-width="0.9"/>';
            s += '<rect x="'+(cx-12)+'" y="'+(cy-110)+'" width="24" height="100" fill="#E0E6DB" fill-opacity="0.75" stroke="#55504A"/>';
            s += '<rect x="'+(cx-60)+'" y="'+(cy+70)+'" width="120" height="22" fill="#E0E7E9" fill-opacity="0.75" stroke="#55504A"/>';
            s += F.text(cx+18, cy-80, lang==="en"?"masame (quartersawn)":(lang==="ja"?"柾目":"柾目（徑切）"), { size:11, fill:"#201E1B" });
            s += F.text(cx-58, cy+108, lang==="en"?"itame (flatsawn)":(lang==="ja"?"板目":"板目（弦切）"), { size:11, fill:"#201E1B" });
            // face patterns
            s += '<rect x="360" y="60" width="170" height="90" fill="#F0EDE4" stroke="#8B857C"/>';
            for (var k=0;k<9;k++) s += '<line x1="'+(368+k*19)+'" y1="62" x2="'+(368+k*19)+'" y2="148" stroke="#C9B893"/>';
            s += '<rect x="360" y="180" width="170" height="90" fill="#F0EDE4" stroke="#8B857C"/>';
            for (var a=0;a<5;a++) s += '<path d="M'+(380+a*8)+' 268 Q445 '+(190+a*14)+' '+(510-a*8)+' 268" fill="none" stroke="#C9B893"/>';
            s += F.text(360, 52, lang==="en"?"Face: straight parallel lines":(lang==="ja"?"面：まっすぐな平行線":"板面：筆直平行線"), { size:10.5, fill:"#55504A" });
            s += F.text(360, 175, lang==="en"?"Face: arches (cathedral figure)":(lang==="ja"?"面：山形の模様（竹の子杢）":"板面：拱形山紋"), { size:10.5, fill:"#55504A" });
            // movement
            s += '<rect x="570" y="95" width="160" height="20" fill="#E0E6DB" stroke="#8B857C"/>';
            s += F.text(570, 88, lang==="en"?"Dries flat; width −2–3%":(lang==="ja"?"平らに乾く。幅の縮み約2〜3％":"乾後平整；寬度縮約 2–3%"), { size:10.5, fill:"#201E1B" });
            s += '<path d="M570 215 Q650 195 730 215 L730 235 Q650 215 570 235 Z" fill="#E0E7E9" stroke="#8B857C"/>';
            s += F.text(570, 202 - 12, lang==="en"?"Cups; width −4–6%":(lang==="ja"?"反る。幅の縮み約4〜6％":"翹成瓦狀；寬度縮約 4–6%"), { size:10.5, fill:"#201E1B" });
            s += F.text(570, 258, lang==="en"?"(green to oven-dry, typical conifers)":(lang==="ja"?"（生材から全乾まで、針葉樹の目安）":"（生材至全乾，針葉樹一般值）"), { size:9.5, fill:"#55504A" });
            return s + '</svg>';
          } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Masame — quartersawn", ja:"柾目", zh:"柾目——徑切" },
              jp:"まさめ",
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"Straight, even lines; quiet, formal appearance",
                      ja:"まっすぐでそろった線。静かで格調ある見た目",
                      zh:"筆直均勻的線條；沉靜而端正的外觀" },
                    { en:"Shrinks about half as much in width; stays flat", ja:"幅の縮みがおよそ半分。平らに保つ", zh:"寬度收縮約一半；保持平整" },
                    { en:"Harder-wearing surface; rays shown in oak", ja:"面が減りにくい。ナラでは虎斑が出る", zh:"表面耐磨；橡木會現出射線紋" },
                    {
                      en:"Few boards per log, so costly; the choice for fine joinery, shoji, masu, bentwood boxes",
                      ja:"一本の丸太から取れる枚数が少なく高価。上等な建具、障子、枡、曲物に選ばれる",
                      zh:"每根原木可取的板少，因此昂貴；用於高級建具、障子、木枡、曲物" }
                  ] }
              ] },
            { title:{ en:"Itame — flatsawn", ja:"板目", zh:"板目——弦切" },
              jp:"いため",
              body:[
                { t:"ul",
                  items:[
                    { en:"Arched, lively figure", ja:"山形の生き生きとした模様", zh:"拱形、生動的紋理" },
                    { en:"Wider boards, more yield, cheaper", ja:"幅広の板が多く取れ、安い", zh:"可取較寬的板、出材率高、便宜" },
                    { en:"Cups towards the bark side as it dries", ja:"乾くにつれ木表側に反る", zh:"乾燥時朝樹皮側翹曲" },
                    {
                      en:"The carpenter's rule: know which is the bark side (<em>kiomote</em>) and which the heart side (<em>kiura</em>)",
                      ja:"大工の決まり：どちらが木表で、どちらが木裏かを知れ",
                      zh:"木匠的規矩：要分清哪面是木表（靠樹皮側）、哪面是木裏（靠髓心側）" }
                  ] }
              ] }
          ] },
        { t:"p",
          text:{
            en:"<em>Kiomote</em> and <em>kiura</em> — the bark side and the heart side of a board — are among the first words a Japanese apprentice learns. A flatsawn board cups with its bark side becoming concave; the heart side is more prone to lifting splinters; and traditional rules follow from this, such as setting the bark side of a threshold upwards, or facing the bark side of a shelf towards the room. The rules differ in detail between trades, but all begin from the anatomy.",
            ja:"木表と木裏——板の樹皮側と髄側——は、日本の見習いが最初に覚える言葉の一つである。板目の板は木表側がへこむように反り、木裏はささくれが起きやすい。そこから、敷居は木表を上に使う、棚板は木表を部屋側に向ける、といった伝統の決まりが生まれた。決まりの細部は職種によって違うが、どれも構造から始まる。",
            zh:"「木表」與「木裏」——木板靠樹皮的一面與靠髓心的一面——是日本學徒最早學會的詞之一。弦切板乾燥時木表一側會凹陷翹曲；木裏較容易起毛刺；傳統規則便由此而來，例如門檻要木表朝上、層板要木表朝向室內。各行業規則細節不同，但都從構造出發。" } }
      ] },
    { t:"section",
      id:"figure",
      title:{ en:"Figure — the patterns called moku", ja:"杢", zh:"花紋——「杢」" },
      jp:"もく",
      body:[
        { t:"p",
          text:{
            en:"Beyond ordinary grain, some trees produce figure — irregular, lustrous patterns caused by wavy fibres, clustered buds, burls or stress. Japanese has a single character for it, 杢 (<em>moku</em>, “tree” written over “earth”), and the trade names dozens of kinds. Figured boards of tochi, keyaki, maple and mizunara are the treasures of a timber merchant's store and command many times the price of plain wood.",
            ja:"ふつうの木目を超えて、ある木は杢を生む——波打つ繊維、群がる芽、こぶ、ストレスによる不規則で光沢のある模様である。日本語にはそのための一字「杢」（木の下に土）があり、業界は何十もの種類に名をつけている。トチ、ケヤキ、カエデ、ミズナラの杢の板は材木商の蔵の宝で、ふつうの材の何倍もの値がつく。",
            zh:"在一般紋理之外，有些樹會產生「杢」——由波狀纖維、叢生芽點、瘤或應力造成的不規則、帶光澤的花紋。日文有一個專字「杢」（木下加土），業界更為其命名數十種。七葉樹、櫸木、楓木與水楢的杢板，是木材商倉庫中的珍寶，價格可達普通木材的數倍。" } },
        { t:"defs",
          items:[
            { term:{ en:"Chijimi-moku — rippled figure", ja:"縮み杢", zh:"縮杢（波紋）" },
              jp:"ちぢみもく",
              def:{
                en:"Fine waves in the fibres at right angles to the grain, shimmering as the light moves; the fiddleback of violin maples. Common in tochi and maple.",
                ja:"繊維が木目と直角に細かく波打ち、光が動くときらめく。バイオリンのカエデのフィドルバック。トチやカエデに多い。",
                zh:"纖維垂直於紋理方向細密起伏，隨光線移動而閃爍；即小提琴楓木的「虎紋」。常見於七葉樹與楓木。" } },
            { term:{ en:"Tama-moku — ball figure", ja:"玉杢", zh:"玉杢" },
              jp:"たまもく",
              def:{
                en:"Circular swirls, like small eddies, around clusters of dormant buds; prized in keyaki and camphor.",
                ja:"休眠芽の群れのまわりにできる、小さな渦のような円い模様。ケヤキやクスノキで珍重される。",
                zh:"圍繞休眠芽叢形成、如小漩渦般的圓形紋；在櫸木與樟木中特別珍貴。" } },
            { term:{ en:"Chōgan-moku — bird's-eye", ja:"鳥眼杢", zh:"鳥眼杢" },
              jp:"ちょうがんもく",
              def:{
                en:"Small round eyes scattered over the face, best known in maple.",
                ja:"面に小さな丸い目が散る。カエデのものが名高い。",
                zh:"板面散布著小圓眼點，以楓木最為著名。" } },
            { term:{ en:"Toranfu — tiger flake", ja:"虎斑", zh:"虎斑" },
              jp:"とらふ",
              def:{
                en:"The ray figure of quartersawn oak — mizunara above all.",
                ja:"柾目のナラ——とりわけミズナラ——に出る放射組織の模様。",
                zh:"徑切橡木——尤其是水楢——所呈現的射線花紋。" } },
            { term:{ en:"Kobu-moku — burl", ja:"瘤杢", zh:"瘤杢" },
              jp:"こぶもく",
              def:{
                en:"Wild, dense figure from a burl, the rounded outgrowth on a trunk; sliced thin for veneer or turned into bowls.",
                ja:"幹のこぶから取れる、乱れた密な杢。薄く突いて突板にするか、椀に挽く。",
                zh:"取自樹幹上圓形贅生瘤、狂野而密集的花紋；可刨成薄片作貼皮，或車成碗。" } },
            { term:{ en:"Uzura-moku — quail figure", ja:"鶉杢", zh:"鶉杢" },
              jp:"うずらもく",
              def:{
                en:"A speckled figure seen on the end-grain-like faces of very old, slow-grown sugi from Yakushima and elsewhere, likened to a quail's feathers.",
                ja:"屋久杉などの非常に古くゆっくり育ったスギに見られる斑の杢で、鶉の羽にたとえられる。",
                zh:"在屋久杉等極老且生長緩慢的柳杉上可見的斑點花紋，被比作鵪鶉羽毛。" } }
          ] }
      ] },
    { t:"section",
      id:"defects",
      title:{ en:"Knots, reaction wood and other flaws", ja:"節、あて、その他の欠点", zh:"節疤、反應材與其他缺陷" },
      jp:"欠点",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Knots", ja:"節", zh:"節疤" },
              jp:"ふし",
              def:{
                en:"The base of a branch, embedded in the trunk. A live knot (<em>ikibushi</em>) was growing when the wood formed around it and is tight; a dead knot (<em>shinibushi</em>) belonged to a dead branch, is surrounded by bark and may fall out. Knots weaken timber mainly by deflecting the grain around them.",
                ja:"幹に埋まった枝の付け根。生き節は、そのまわりの材ができたとき枝が生きていたもので、しっかりしている。死に節は枯れ枝のもので、樹皮に囲まれ、抜け落ちることがある。節が材を弱めるのは、おもにまわりの木目を曲げるからである。",
                zh:"埋入樹幹中的枝條基部。活節（生き節）在周圍木材形成時枝條仍活著，因此緊密；死節（死に節）屬於枯枝，被樹皮包圍，可能脫落。節疤削弱木材，主要是因為它使周圍紋理偏轉。" } },
            { term:{ en:"Reaction wood", ja:"あて材", zh:"反應材" },
              jp:"あて",
              def:{
                en:"Trees on slopes or leaning in the wind form abnormal wood to right themselves: conifers grow dense, reddish compression wood (<em>ate</em>) on the underside, broadleaves grow tension wood on the upper side. Ate shrinks strongly along the grain, and a board containing it bows and twists unpredictably. Mountain carpenters in steep Hida knew it well; the word <em>ate</em> is also used, loosely, for any wood that behaves badly.",
                ja:"斜面の木や風で傾いた木は、自らを立て直すために異常な材をつくる。針葉樹は下側に密で赤みのある圧縮あて材を、広葉樹は上側に引張あて材を。あては繊維方向に強く縮み、それを含む板は予想できずに曲がりねじれる。急峻な飛騨の山の大工はよく知っていた。「あて」は、ふるまいの悪い木一般を指して使われることもある。",
                zh:"生長在坡地或被風吹斜的樹，會形成異常木材以自我扶正：針葉樹在下側形成緻密泛紅的壓縮反應材（日文稱「あて」），闊葉樹則在上側形成拉伸反應材。「あて」沿纖維方向收縮強烈，含有它的木板會難以預料地彎曲扭轉。陡峭飛驒山區的木匠對此十分熟悉；「あて」一詞也被泛用來指任何性質不良的木材。" } },
            { term:{ en:"Spiral grain", ja:"旋回木理", zh:"螺旋紋理" },
              jp:"ねじれ",
              def:{
                en:"Fibres wound helically around the trunk; posts made from such logs twist as they dry. Hinoki is generally straight-grained; some pines and larch spiral strongly.",
                ja:"繊維が幹のまわりにらせん状に巻いたもの。そうした丸太の柱は乾くにつれてねじれる。ヒノキはおおむね通直だが、マツやカラマツの一部は強くねじれる。",
                zh:"纖維繞樹幹呈螺旋狀排列；以此類原木製成的柱子在乾燥時會扭轉。扁柏大多紋理通直；部分松樹與落葉松則螺旋強烈。" } },
            { term:{ en:"Shakes and heart checks", ja:"目回り・心割れ", zh:"環裂與心裂" },
              jp:"めまわり",
              def:{
                en:"Separation along a ring (<em>memawari</em>) or radial cracks from the pith, caused by wind stress, frost or drying. Posts containing the pith (<em>shinmochi</em>) almost always check on drying, which is why Japanese carpenters cut a deliberate relief kerf, the <em>sewari</em>, into the back face of a post to control where the crack forms.",
                ja:"年輪に沿った剥離（目回り）や、髄から放射状に入る割れで、風のストレス、凍結、乾燥による。髄を含む心持ちの柱は乾くとほぼ必ず割れる。だから日本の大工は柱の見えない面にわざと背割りを入れ、割れの出る場所を決める。",
                zh:"沿年輪方向的分離（目回り）或自髓心放射的裂紋，由風力應力、凍結或乾燥造成。含髓心的「心持ち」柱乾燥時幾乎必定開裂，因此日本木匠會在柱子背面刻意鋸一道「背割」，控制裂紋出現的位置。" } }
          ] },
        { t:"note",
          label:{ en:"Using the tree as it grew", ja:"木の育ったままに使う", zh:"依樹的生長來使用" },
          text:{
            en:"The master temple carpenter Nishioka Tsunekazu (1908–1995) handed down a precept from his predecessors: build not with the dimensions of timbers but with the habits of trees — a tree that grew on a south slope should face south in the building, a tree that twists left should be paired with one that twists right. It is anatomy turned into a philosophy of construction.",
            ja:"宮大工の棟梁、西岡常一（一九〇八〜一九九五）は、先人からの口伝を伝えた。木の寸法ではなく木の癖で組め——南の斜面に育った木は建物でも南に向け、左にねじれる木は右にねじれる木と組み合わせよ、と。構造を建築の哲学に変えたものである。",
            zh:"宮大工棟樑西岡常一（1908–1995）傳承了前人的口訣：不以木材的尺寸，而以樹木的「癖性」來組構——長在南坡的樹，在建築中也要朝南；向左扭的樹，要與向右扭的樹配對。這是把構造轉化為建築哲學。" } }
      ] },
    { t:"related",
      items:[
        { href:"properties.html",
          why:{ en:"What the structure means in numbers.", ja:"構造が数字で意味するもの。", zh:"構造在數字上的意義。" } },
        { href:"moisture.html", why:{ en:"Shrinkage, movement and drying.", ja:"収縮・狂い・乾燥。", zh:"收縮、變形與乾燥。" } },
        { href:"chemistry.html",
          why:{ en:"Cellulose, lignin and the scent of hinoki.", ja:"セルロース・リグニン・ヒノキの香り。", zh:"纖維素、木質素與扁柏香氣。" } },
        { href:"tonewoods.html", why:{ en:"Why structure matters for sound.", ja:"構造が音に効く理由。", zh:"構造為何影響聲音。" } }
      ] }
  ] };

/* ---- ---------------------------------------- properties */
GIFU.pages["properties"] = { kicker:{ en:"The Forest · 11", ja:"森 · 11", zh:"森林 · 11" },
  title:{ en:"Properties of Wood", ja:"木の性質", zh:"木材性質" },
  jp:"比重・強さ・火・耐久",
  lede:{
    en:"Carpenters knew for centuries which timber to use where without a single number: hinoki for the pillar that must stand for a thousand years, keyaki for the beam that carries a temple roof, kiri for the chest that keeps kimono dry, beech for the chair leg that must bend. Engineering has since measured what they knew. This page sets out the properties that decide what a wood can do — density, stiffness and strength, hardness, behaviour in fire and resistance to decay — with typical values for the timbers of Gifu, and explains why a light, soft conifer can outperform steel and concrete for its weight.",
    ja:"大工は何世紀ものあいだ、数字ひとつなしに、どこにどの木を使うかを知っていた。千年立たねばならぬ柱にはヒノキ、寺の屋根を担う梁にはケヤキ、着物を乾いたまま守る箪笥にはキリ、曲がらねばならない椅子の脚にはブナ。工学はのちに、彼らが知っていたことを測った。この頁は、木に何ができるかを決める性質——比重、剛さと強さ、硬さ、火のなかのふるまい、腐りへの抵抗——を、岐阜の木の典型的な値とともに示し、軽くやわらかな針葉樹が、重さあたりでは鉄やコンクリートにまさりうる理由を説明する。",
    zh:"數百年來，木匠不靠任何數字就知道哪裡該用哪種木材：要屹立千年的柱子用扁柏，承載寺廟屋頂的樑用櫸木，保持和服乾燥的衣櫃用桐木，必須彎曲的椅腳用山毛櫸。工程學後來才把他們所知的量化。本頁列出決定木材能耐的性質——密度、剛性與強度、硬度、在火中的表現與耐腐性——附上岐阜木材的典型數值，並解釋為何輕而軟的針葉樹，以重量計竟能勝過鋼鐵與混凝土。" },
  body:[
    { t:"section",
      id:"density",
      title:{ en:"Density predicts almost everything", ja:"比重はほとんどすべてを予言する", zh:"密度幾乎預示一切" },
      jp:"気乾比重",
      body:[
        { t:"p",
          text:{
            en:"The cell-wall substance of every wood weighs about the same — roughly 1.5 grams per cubic centimetre. What differs between species is how much of the volume is wall and how much is empty space. Kiri (paulownia), at about 0.30, is mostly air; the evergreen oaks, near 0.85, are mostly wall. Because stiffness, strength, hardness, heat capacity and even the speed at which wood burns all depend on how much material there is, density is the single best predictor of a timber's mechanical behaviour. Within one species it varies too: fast-grown, wide-ringed sugi is lighter and weaker than slow-grown sugi from a cold mountain.",
            ja:"どの木も細胞壁そのものの重さはほぼ同じで、およそ一立方センチメートルあたり一・五グラムである。樹種によって違うのは、体積のうちどれだけが壁で、どれだけが空隙かである。比重およそ〇・三〇のキリはほとんどが空気で、〇・八五に近いカシ類はほとんどが壁である。剛さ、強さ、硬さ、熱容量、燃える速さまでもが材料の量にかかっているから、比重は材の力学的なふるまいを予言する最良の単一の指標である。同じ樹種のなかでも変わる。速く育った年輪の広いスギは、寒い山でゆっくり育ったスギより軽く弱い。",
            zh:"所有木材的細胞壁物質重量大致相同——約每立方公分 1.5 公克。不同樹種的差別，在於體積中有多少是細胞壁、多少是空隙。桐木密度約 0.30，大部分是空氣；常綠櫟類接近 0.85，大部分是細胞壁。由於剛性、強度、硬度、熱容量乃至燃燒速度都取決於材料的多寡，密度是預測木材力學行為最好的單一指標。同一樹種內也有差異：快速生長、年輪寬的柳杉，比在寒冷山區緩慢生長的柳杉更輕也更弱。" } },
        { t:"figure",
          caption:{
            en:"Air-dry density against bending strength for common Japanese timbers: heavier woods are stronger, almost in proportion. Typical handbook values for small clear specimens at about 15% moisture; structural-size timber with knots is weaker.",
            ja:"日本の主な木材の気乾比重と曲げ強さ。重い木ほど、ほぼ比例して強い。含水率およそ十五パーセントの無欠点小試験体についてのハンドブックの典型値で、節のある実大材はこれより弱い。",
            zh:"日本常見木材的氣乾密度與抗彎強度：越重的木材越強，幾乎成正比。數值為含水率約 15% 無缺點小試材的手冊典型值；帶節的結構尺寸材強度較低。" },
          svg:function(lang, L){ return GIFU.fig.scatter(lang, L, {
            title:{ en:"Density and strength", ja:"比重と強さ", zh:"密度與強度" },
            x0:0.25, x1:0.75, y0:20, y1:110, xs:0.1, ys:20,
            xl:{ en:"Air-dry density (g/cm³)", ja:"気乾比重（g/cm³）", zh:"氣乾密度（g/cm³）" },
            yl:{ en:"Bending strength (MPa)", ja:"曲げ強さ（MPa）", zh:"抗彎強度（MPa）" },
            pts:[
              { n:{ en:"kiri", ja:"キリ", zh:"桐木" }, x:0.30, y:34 },
              { n:{ en:"sugi", ja:"スギ", zh:"柳杉" }, x:0.38, y:64 },
              { n:{ en:"hinoki", ja:"ヒノキ", zh:"扁柏" }, x:0.44, y:74 },
              { n:{ en:"karamatsu", ja:"カラマツ", zh:"落葉松" }, x:0.50, y:78, ly:14 },
              { n:{ en:"akamatsu", ja:"アカマツ", zh:"赤松" }, x:0.52, y:88 },
              { n:{ en:"tochi", ja:"トチ", zh:"七葉樹" }, x:0.52, y:69, ly:14 },
              { n:{ en:"buna", ja:"ブナ", zh:"山毛櫸" }, x:0.65, y:98, lx:-8, anchor:"end" },
              { n:{ en:"mizunara", ja:"ミズナラ", zh:"水楢" }, x:0.68, y:98, ly:-8 },
              { n:{ en:"keyaki", ja:"ケヤキ", zh:"櫸木" }, x:0.69, y:98, ly:16 }
            ] }); } }
      ] },
    { t:"section",
      id:"strength",
      title:{ en:"Stiffness and strength", ja:"剛さと強さ", zh:"剛性與強度" },
      jp:"ヤング係数・曲げ強さ",
      body:[
        { t:"p",
          text:{
            en:"Two numbers matter most to a designer. The modulus of elasticity, or Young's modulus, measures stiffness — how little a beam bends under load. Bending strength, or modulus of rupture, measures the load at which it breaks. Wood is strongly anisotropic: along the grain it is ten to twenty times stiffer and far stronger than across it, which is why a carpenter orients every member so that loads run along the fibres, and why a chair maker chooses straight-grained stock for legs.",
            ja:"設計者にとって最も大事な数字は二つある。弾性係数、つまりヤング係数は剛さ——荷重を受けた梁がどれだけ曲がらないか——を測る。曲げ強さ、つまり曲げ破壊係数は、それが折れる荷重を測る。木は強い異方性をもつ。繊維方向には繊維と直角の方向より十倍から二十倍剛く、はるかに強い。だから大工はすべての部材を荷重が繊維に沿って流れるように向け、椅子職人は脚に通直な材を選ぶ。",
            zh:"對設計者而言最重要的數字有兩個。彈性模數（楊氏模數）衡量剛性——樑在荷載下彎得多少；抗彎強度（破壞模數）衡量它斷裂時的荷載。木材具有強烈的異向性：順紋方向比橫紋方向剛十到二十倍，強度也高得多。因此木匠會讓每根構件的受力沿著纖維方向傳遞，椅子師傅也會為椅腳挑選紋理通直的材料。" } },
        { t:"table",
          caption:{
            en:"Typical mechanical properties of Japanese timbers (small clear specimens, air-dry)",
            ja:"日本の木材の典型的な力学的性質（無欠点小試験体、気乾）",
            zh:"日本木材的典型力學性質（無缺點小試材，氣乾）" },
          cols:[
            { en:"Timber", ja:"樹種", zh:"樹種" },
            { en:"Density", ja:"比重", zh:"密度" },
            { en:"Stiffness E (GPa)", ja:"曲げヤング係数（GPa）", zh:"彈性模數 E（GPa）" },
            { en:"Bending strength (MPa)", ja:"曲げ強さ（MPa）", zh:"抗彎強度（MPa）" },
            { en:"Compression ∥ grain (MPa)", ja:"縦圧縮強さ（MPa）", zh:"順紋抗壓（MPa）" }
          ],
          numCols:[1, 2, 3, 4],
          rows:[
            [{ en:"Kiri (paulownia)", ja:"キリ", zh:"桐木" }, "0.30", "4.9", "34", "20"],
            [{ en:"Sugi", ja:"スギ", zh:"柳杉" }, "0.38", "7.4", "64", "34"],
            [{ en:"Hinoki", ja:"ヒノキ", zh:"扁柏" }, "0.44", "8.8", "74", "39"],
            [{ en:"Karamatsu (larch)", ja:"カラマツ", zh:"落葉松" }, "0.50", "9.8", "78", "44"],
            [{ en:"Akamatsu (red pine)", ja:"アカマツ", zh:"赤松" }, "0.52", "11.3", "88", "44"],
            [{ en:"Buna (beech)", ja:"ブナ", zh:"山毛櫸" }, "0.65", "11.8", "98", "44"],
            [{ en:"Mizunara", ja:"ミズナラ", zh:"水楢" }, "0.68", "9.8", "98", "44"],
            [{ en:"Keyaki (zelkova)", ja:"ケヤキ", zh:"櫸木" }, "0.69", "11.8", "98", "49"]
          ] },
        { t:"tiny",
          text:{
            en:"Values converted from the traditional kgf/cm² figures of the Japanese wood industry handbook and rounded. Design values for graded structural timber are much lower, to allow for knots, slope of grain and duration of load.",
            ja:"日本の木材工業ハンドブックの従来のkgf/cm²の値から換算し丸めた。等級区分された構造用材の設計値は、節・繊維傾斜・荷重継続時間を見込んで、これよりずっと低い。",
            zh:"數值由日本《木材工業手冊》傳統 kgf/cm² 數據換算並四捨五入。分級結構材的設計值會低得多，以考量節疤、紋理斜度與荷載持續時間。" } },
        { t:"p",
          text:{
            en:"The numbers explain old choices. Hinoki is not the strongest conifer — red pine and larch are stronger — but it combines good strength with straightness, dimensional stability, workability and extraordinary durability, which is why it was chosen for pillars that would stand for centuries. Keyaki's high stiffness and toughness made it the timber for great temple beams and for the frames of festival floats that are pulled through the streets of Takayama twice a year; beech's combination of strength and bendability made the Hida chair.",
            ja:"数字は昔の選択を説明する。ヒノキは最も強い針葉樹ではない——アカマツやカラマツのほうが強い——が、ほどよい強さに、通直さ、寸法の安定、加工のしやすさ、並外れた耐久性をあわせもつ。だから何世紀も立つべき柱に選ばれた。ケヤキの高い剛さと粘りは、大寺院の梁や、年に二度高山の町を曳かれる祭屋台の骨組みの材とした。ブナの強さと曲げやすさの組み合わせが、飛騨の椅子を生んだ。",
            zh:"這些數字解釋了昔日的選擇。扁柏並非最強的針葉樹——赤松與落葉松更強——但它兼具良好強度、通直、尺寸安定、易加工與非凡的耐久性，因此被選為要屹立數百年的柱子。櫸木的高剛性與韌性，使它成為大寺院的巨樑，以及每年兩度在高山街頭拖行的祭典屋台骨架的用材；山毛櫸兼具強度與可彎性，成就了飛驒的椅子。" } }
      ] },
    { t:"section",
      id:"materials",
      title:{ en:"Wood against steel and concrete", ja:"木と鉄とコンクリート", zh:"木材對鋼與混凝土" },
      jp:"比強度",
      body:[
        { t:"p",
          text:{
            en:"In absolute terms, steel is far stronger than any timber. But a building must also carry its own weight, and here wood's lightness changes the comparison. Divided by density, sugi's strength along the grain is higher than that of structural steel and many times higher than that of concrete. Japanese timber-promotion literature often puts it this way: weight for weight, sugi is about four times as strong as steel in tension and about twice as strong in compression. Lightness also reduces the seismic forces a building must resist, since those forces are proportional to its mass — an argument that matters in Japan.",
            ja:"絶対値では、鉄はどの木材よりもはるかに強い。だが建物は自分の重さも担わねばならず、そこでは木の軽さが比較を変える。比重で割れば、スギの繊維方向の強さは構造用の鋼より高く、コンクリートの何倍にもなる。日本の木材利用の資料はよくこう言う。同じ重さで比べれば、スギは引張で鉄のおよそ四倍、圧縮でおよそ二倍の強さをもつ、と。軽さはまた、建物が耐えねばならない地震の力を小さくする。その力は質量に比例するからで、日本では重い意味をもつ論点である。",
            zh:"就絕對值而言，鋼遠比任何木材強。但建築物還得承載自身重量，而木材的輕盈在此改變了比較結果。以密度相除後，柳杉的順紋強度高於結構用鋼，更是混凝土的數倍。日本推廣木材利用的資料常這樣說：同樣重量下，柳杉的抗拉強度約為鋼的四倍，抗壓強度約為兩倍。輕盈也能減少建築必須抵抗的地震力，因為地震力與質量成正比——這在日本是很有分量的論點。" } },
        { t:"figure",
          caption:{
            en:"Thermal conductivity of building materials, in watts per metre-kelvin (logarithmic in effect: note the break in scale). Wood insulates about ten times better than concrete and several hundred times better than steel — why a wooden handrail feels warm in winter. Typical textbook values.",
            ja:"建材の熱伝導率（W/m·K）。木はコンクリートのおよそ十倍、鉄の数百倍よく断熱する——冬に木の手すりが温かく感じる理由である。教科書的な典型値。",
            zh:"建材的熱傳導率（W/m·K）。木材的隔熱性約為混凝土的十倍、鋼的數百倍——這就是冬天木扶手摸起來溫暖的原因。教科書典型值。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Heat conduction", ja:"熱の伝わりやすさ", zh:"熱傳導" }, labelW:200, max:1.8, dec:2,
            items:[
              { n:{ en:"Sugi (across grain)", ja:"スギ（繊維直角）", zh:"柳杉（橫紋）" }, v:0.09, f:"#E0E6DB" },
              { n:{ en:"Hinoki", ja:"ヒノキ", zh:"扁柏" }, v:0.10, f:"#E0E6DB" },
              { n:{ en:"Oak", ja:"ナラ", zh:"橡木" }, v:0.16, f:"#E0E6DB" },
              { n:{ en:"Brick", ja:"れんが", zh:"磚" }, v:0.6, f:"#EEE1DF" },
              { n:{ en:"Glass", ja:"ガラス", zh:"玻璃" }, v:1.0, f:"#E0E7E9" },
              { n:{ en:"Concrete", ja:"コンクリート", zh:"混凝土" }, v:1.6, f:"#E6E4E0" },
              { n:{ en:"Steel", ja:"鋼", zh:"鋼" }, v:1.8, lab:{ en:"≈ 50 (off scale)", ja:"約50（目盛外）", zh:"約 50（超出刻度）" }, f:"#E6E2EC" }
            ] }); } }
      ] },
    { t:"section",
      id:"fire",
      title:{ en:"Wood in fire", ja:"火のなかの木", zh:"火中的木材" },
      jp:"燃えしろ設計",
      body:[
        { t:"p",
          text:{
            en:"Wood burns, and Japanese cities burned repeatedly — Takayama's merchant quarter was rebuilt after the fire of 1875, and Edo lost much of itself to fire every generation. That history made post-war Japanese building law deeply suspicious of timber. Yet a large timber section behaves in fire far more predictably than its reputation suggests. The surface ignites and chars; the char layer insulates the wood beneath, which stays cool and retains its strength; and the charring front advances at a steady rate of well under a millimetre a minute. Steel, by contrast, does not burn but loses about half its strength at around 550 °C and can collapse suddenly.",
            ja:"木は燃え、日本の町は何度も焼けた——高山の商家の町並みは一八七五年の大火のあとに建て直され、江戸は世代ごとに火事でその多くを失った。その歴史は、戦後の日本の建築法規を木材に深く疑い深くした。だが大きな断面の木材は、火のなかで評判よりはるかに予測しやすくふるまう。表面は着火して炭化し、その炭化層が下の木を断熱するので、内部は冷たいまま強さを保つ。炭化の前線は一分に一ミリ弱という一定の速さで進む。対して鉄は燃えないが、およそ五五〇度で強さの半分ほどを失い、突然崩れることがある。",
            zh:"木材會燃燒，日本城市也一再焚毀——高山的商家町在 1875 年大火後重建，江戶則每一代都有大片市街毀於祝融。這段歷史使戰後日本建築法規對木材深懷戒心。然而大斷面木材在火中的表現，遠比其名聲更可預測：表面著火碳化，碳化層隔絕熱量，使下方木材保持低溫並維持強度；碳化前緣以每分鐘不到一公釐的穩定速度推進。相較之下，鋼雖不燃燒，卻在約 550°C 時失去約一半強度，可能突然崩塌。" } },
        { t:"p",
          text:{
            en:"Japanese regulations turned this into a design method, <em>moeshiro sekkei</em> — “burning-margin design”. The engineer calculates the section needed to carry the loads, then adds a sacrificial layer on every exposed face thick enough to char away during the required fire period while leaving the structural core intact.",
            ja:"日本の法規はこれを設計法に変えた。燃えしろ設計である。技術者は荷重を担うのに必要な断面を計算し、露出するすべての面に、求められる時間のあいだに焼けて炭になっても構造の芯が残るだけの厚さの、犠牲となる層を加える。",
            zh:"日本法規把這種特性化為一種設計方法：「燃燒餘裕設計」（燃えしろ設計）。工程師先計算承載所需的斷面，再在每個外露面加上一層犧牲層，其厚度足以在規定的耐火時間內燒成炭，同時保住結構核心。" } },
        { t:"table",
          caption:{ en:"Burning margins in Japanese regulations", ja:"日本の規定の燃えしろ", zh:"日本規定的燃燒餘裕" },
          cols:[
            { en:"Fire period", ja:"時間", zh:"耐火時間" },
            { en:"Glulam, LVL", ja:"集成材・LVL", zh:"集成材、LVL" },
            { en:"Solid sawn timber", ja:"製材", zh:"製材" }
          ],
          numCols:[1, 2],
          rows:[
            [{ en:"30 minutes", ja:"三十分", zh:"30 分鐘" }, "25 mm", "30 mm"],
            [{ en:"45 minutes", ja:"四十五分", zh:"45 分鐘" }, "35 mm", "45 mm"],
            [{ en:"60 minutes", ja:"一時間", zh:"60 分鐘" }, "45 mm", "60 mm"]
          ] },
        { t:"note",
          label:{ en:"Fire-resistant timber", ja:"耐火木材", zh:"耐火木材" },
          text:{
            en:"For buildings that must not burn at all, Japanese manufacturers have developed timber members wrapped in gypsum board, or with a core of wood protected by a layer of mortar or a self-extinguishing “burn-stop” layer, certified for one to three hours. These products made possible the mid- and high-rise timber buildings that Japan has begun to build since the 2010s.",
            ja:"まったく燃え落ちてはならない建物のために、日本のメーカーは、石膏ボードで被覆した木材部材や、木の芯をモルタルや自ら火を止める「燃え止まり層」で守った部材を開発し、一〜三時間の耐火の認定を得てきた。これらの製品が、二〇一〇年代から日本が建てはじめた中高層の木造建築を可能にした。",
            zh:"針對絕不能燒毀的建築，日本廠商開發出以石膏板包覆的木構件，或以砂漿層、自熄性「燃止層」保護木芯的構件，取得一至三小時的耐火認證。這些產品使日本自 2010 年代起開始興建的中高層木造建築成為可能。" } }
      ] },
    { t:"section",
      id:"durability",
      title:{ en:"Decay and insects", ja:"腐朽と虫", zh:"腐朽與蟲害" },
      jp:"耐朽性",
      body:[
        { t:"p",
          text:{
            en:"Dry wood does not rot. Decay fungi need moisture content above about twenty to twenty-five per cent, oxygen and a moderate temperature; wood kept dry, or kept permanently waterlogged, can last indefinitely — the hinoki of Hōryūji has stood for some thirteen centuries, and oak piles have survived under water for longer. Where wood is wetted and dried repeatedly, as in sills, posts at ground level, exterior cladding and bridges, durability depends on the natural extractives in the heartwood. Sapwood of every species is perishable.",
            ja:"乾いた木は腐らない。腐朽菌には、含水率およそ二十〜二十五パーセント以上の水分、酸素、ほどよい温度が要る。乾いたまま、あるいはずっと水に浸かったままの木は、限りなく長もちする——法隆寺のヒノキはおよそ千三百年立ちつづけ、水中の楢の杭はさらに長く残っている。土台、地面ぎわの柱、外壁、橋のように濡れては乾くことをくり返す場所では、耐久性は心材の天然の抽出成分にかかっている。どの樹種でも辺材は腐りやすい。",
            zh:"乾燥的木材不會腐朽。腐朽菌需要約 20–25% 以上的含水率、氧氣與適中的溫度；保持乾燥或長期浸水的木材幾乎可以永久保存——法隆寺的扁柏已屹立約一千三百年，水下的橡木樁更存續得更久。在反覆乾濕的部位，如地檻、接地柱腳、外牆板與橋梁，耐久性取決於心材中的天然抽出成分。任何樹種的邊材都容易腐朽。" } },
        { t:"table",
          caption:{ en:"Natural durability of heartwood (general ratings)", ja:"心材の耐朽性（一般的な区分）", zh:"心材天然耐久性（一般分級）" },
          cols:[
            { en:"Class", ja:"区分", zh:"等級" },
            { en:"Timbers", ja:"樹種", zh:"樹種" },
            { en:"Traditional use where wet", ja:"濡れる場所での伝統的な用途", zh:"潮濕處的傳統用途" }
          ],
          rows:[
            [
              { en:"Very durable", ja:"極大", zh:"極耐久" },
              { en:"Hiba, kōyamaki, yew (ichii), chestnut heart", ja:"ヒバ、コウヤマキ、イチイ、クリの心材", zh:"羅漢柏、日本金松、紅豆杉、栗木心材" },
              { en:"Sills, bath tubs, water pipes, railway sleepers", ja:"土台、風呂桶、樋、枕木", zh:"地檻、浴桶、水管、枕木" }
            ],
            [
              { en:"Durable", ja:"大", zh:"耐久" },
              { en:"Hinoki, keyaki, larch heart", ja:"ヒノキ、ケヤキ、カラマツの心材", zh:"扁柏、櫸木、落葉松心材" },
              { en:"Posts, shrine buildings, bridges", ja:"柱、社殿、橋", zh:"柱、神社建築、橋" }
            ],
            [
              { en:"Moderate", ja:"中", zh:"中等" },
              { en:"Sugi, red pine, mizunara", ja:"スギ、アカマツ、ミズナラ", zh:"柳杉、赤松、水楢" },
              { en:"Framing kept dry, barrels, interiors", ja:"乾いた場所の軸組、樽、内装", zh:"乾燥處骨架、酒桶、室內" }
            ],
            [
              { en:"Low", ja:"小", zh:"低" },
              { en:"Beech, tochi, katsura, momi, all sapwood", ja:"ブナ、トチ、カツラ、モミ、すべての辺材", zh:"山毛櫸、七葉樹、連香樹、日本冷杉、所有邊材" },
              { en:"Indoors only", ja:"屋内のみ", zh:"僅限室內" }
            ]
          ] },
        { t:"defs",
          items:[
            { term:{ en:"Termites", ja:"シロアリ", zh:"白蟻" },
              jp:"ヤマトシロアリ・イエシロアリ",
              def:{
                en:"Japan has two important species: the Japanese subterranean termite, found throughout Honshū including Gifu, which attacks damp wood near the ground; and the more destructive Formosan termite of warmer coastal regions. Building rules require sills and the lowest metre of framing to be naturally durable heartwood or preservative-treated.",
                ja:"日本には重要な種が二つある。岐阜を含む本州全域にいて、地面近くの湿った木を襲うヤマトシロアリと、より暖かい沿岸地域の、より破壊的なイエシロアリである。建築の決まりは、土台と地面から一メートルまでの軸組を、耐久性の高い心材か防腐防蟻処理した材とするよう求める。",
                zh:"日本有兩種重要白蟻：分布於包括岐阜在內的整個本州、侵蝕近地面潮濕木材的大和白蟻；以及溫暖沿海地區更具破壞力的台灣家白蟻。建築規範要求地檻與離地一公尺以內的骨架，須使用天然耐久心材或經防腐防蟻處理的木材。" } },
            { term:{ en:"Powder-post beetles", ja:"ヒラタキクイムシ", zh:"粉蠹蟲" },
              jp:"ひらたきくいむし",
              def:{
                en:"Small beetles whose larvae tunnel through the starch-rich sapwood of broadleaves — oak, ash, lauan, bamboo — leaving fine flour-like dust. Furniture makers remove sapwood or kiln-dry thoroughly to kill eggs and larvae.",
                ja:"幼虫がナラ、タモ、ラワン、竹など広葉樹のデンプンに富む辺材を食い進み、小麦粉のような細かい粉を残す小さな甲虫。家具職人は辺材を除くか、十分に人工乾燥して卵と幼虫を殺す。",
                zh:"小型甲蟲，幼蟲會蛀食橡木、梣木、柳桉、竹子等闊葉材富含澱粉的邊材，留下如麵粉般的細粉。家具師傅會去除邊材，或徹底窯乾以殺死蟲卵與幼蟲。" } }
          ] }
      ] },
    { t:"section",
      id:"working",
      title:{ en:"Working qualities", ja:"加工性", zh:"加工性" },
      jp:"鉋・鑿・鋸",
      body:[
        { t:"p",
          text:{
            en:"Some properties never appear in engineering tables but decide a woodworker's choice: how cleanly a wood planes, whether it tears out, how it holds an edge in joinery, how it glues, bends, turns and takes lacquer. Japanese carpenters, who finish surfaces with the plane rather than with abrasive paper, were especially sensitive to them.",
            ja:"工学の表には決して出てこないが、木工家の選択を決める性質がある。どれほどきれいに鉋がかかるか、逆目が立つか、仕口の角がくずれないか、接着・曲げ・挽物・漆の乗りはどうか。面をサンドペーパーではなく鉋で仕上げる日本の大工は、とりわけそれに敏感だった。",
            zh:"有些性質從不出現在工程表格裡，卻決定了木工師傅的選擇：刨削是否乾淨、會不會逆紋撕裂、榫接處能否保持稜角、膠合、彎曲、車削與上漆的表現如何。以刨子而非砂紙完成表面的日本木匠，對這些格外敏感。" } },
        { t:"figure",
          caption:{
            en:"Working qualities of selected timbers, as generally described by Japanese woodworkers (three dots = excellent). A qualitative summary, not a test result.",
            ja:"主な木材の加工性。日本の木工家が一般に述べるところによる（点三つが優）。試験結果ではなく定性的なまとめ。",
            zh:"部分木材的加工性，依日本木工師傅一般描述（三點為優）。為定性彙整，非試驗結果。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"How woods behave under the tool", ja:"道具のもとでの木のふるまい", zh:"木材在工具下的表現" }, labelW:170,
            cols:[ { en:"Planing", ja:"鉋", zh:"刨削" }, { en:"Carving", ja:"彫刻", zh:"雕刻" }, { en:"Turning", ja:"挽物", zh:"車削" }, { en:"Steam-bending", ja:"曲木", zh:"蒸彎" }, { en:"Stability", ja:"寸法安定", zh:"尺寸穩定" }, { en:"Lacquer", ja:"漆", zh:"上漆" } ],
            rows:[
              { n:{ en:"Hinoki", ja:"ヒノキ", zh:"扁柏" }, v:[3,2,1,1,3,2] },
              { n:{ en:"Sugi", ja:"スギ", zh:"柳杉" }, v:[2,1,1,0,2,1] },
              { n:{ en:"Ichii (yew)", ja:"イチイ", zh:"紅豆杉" }, v:[3,3,2,1,3,1] },
              { n:{ en:"Keyaki", ja:"ケヤキ", zh:"櫸木" }, v:[2,2,3,2,1,3] },
              { n:{ en:"Beech", ja:"ブナ", zh:"山毛櫸" }, v:[2,2,3,3,1,2] },
              { n:{ en:"Mizunara", ja:"ミズナラ", zh:"水楢" }, v:[2,1,2,3,2,2] },
              { n:{ en:"Tochi", ja:"トチ", zh:"七葉樹" }, v:[2,2,3,1,1,3] },
              { n:{ en:"Katsura", ja:"カツラ", zh:"連香樹" }, v:[3,3,2,1,3,2] },
              { n:{ en:"Kiri", ja:"キリ", zh:"桐木" }, v:[2,1,2,0,3,1] }
            ] }); } },
        { t:"p",
          text:{
            en:"The best-loved woods in Gifu's crafts are each extreme in one quality. Ichii, the yew of Hida, is so fine and even that a carver can cut a crisp facet in any direction without tearing, which is why Ichii Ittōbori is carved with knives alone and left unfinished. Tochi turns and lacquers beautifully, making it the wood of turned Shunkei bowls and dishes. Beech bends. Hinoki planes to a surface so smooth that it needs no finish at all — the traditional surface of a shrine, a bath and a sushi counter.",
            ja:"岐阜の工芸で最も愛される木は、それぞれ一つの性質で極まっている。飛騨のイチイはきわめて緻密で均質なので、彫り手はどの方向にも裂けずにくっきりした面を刻める。一位一刀彫が刃物だけで彫られ、塗られずに残される理由である。トチはよく挽け、漆がよく乗り、春慶の挽物の椀や皿の木となる。ブナは曲がる。ヒノキは仕上げのいらないほど滑らかな面に鉋がかかる——社殿、風呂、寿司のつけ台の伝統の面である。",
            zh:"岐阜工藝中最受喜愛的木材，各在某一項特質上登峰造極。飛驒的一位（紅豆杉）極為細緻均勻，雕刻者從任何方向下刀都能切出俐落的面而不撕裂，因此一位一刀彫只用刀具雕刻，且不上任何塗料。七葉樹車削與上漆都極佳，成為春慶車製碗盤的用木。山毛櫸能彎。扁柏刨出的表面光滑到根本無需塗裝——那是神社、浴桶與壽司吧台的傳統表面。" } }
      ] },
    { t:"related",
      items:[
        { href:"anatomy.html", why:{ en:"The structure behind the numbers.", ja:"数字の背後の構造。", zh:"數字背後的構造。" } },
        { href:"moisture.html",
          why:{ en:"How moisture changes every property.", ja:"水分がすべての性質をどう変えるか。", zh:"水分如何改變每一種性質。" } },
        { href:"grading.html", why:{ en:"How structural timber is graded.", ja:"構造材はどう格付けされるか。", zh:"結構材如何分級。" } },
        { href:"building.html", why:{ en:"Wood in modern buildings.", ja:"現代の建築の木。", zh:"現代建築中的木材。" } }
      ] }
  ] };

/* ---- ----------------------------------------- chemistry */
GIFU.pages["chemistry"] = { kicker:{ en:"The Forest · 12", ja:"森 · 12", zh:"森林 · 12" },
  title:{ en:"The Chemistry of Wood", ja:"木の化学", zh:"木材化學" },
  jp:"セルロース・リグニン・香り",
  lede:{
    en:"Walk into a newly built hinoki bath or a Takayama woodworking shop and the first thing you notice is the smell. Behind it lies chemistry: three great polymers that make the wood, and a small, variable fraction of other compounds — oils, resins, tannins, pigments — that give each timber its scent, colour and resistance to decay. This page explains what wood is made of, where the fragrance of hinoki and sugi comes from, why wood changes colour with age, why oak turns black under an iron nail, and how wood is becoming a raw material for new chemicals.",
    ja:"新しくできたヒノキ風呂や高山の木工所に入ると、まず気づくのは匂いである。その背後には化学がある。木をつくる三つの大きな高分子と、それぞれの材に香り、色、腐りへの抵抗を与える、少量で変わりやすいほかの化合物——精油、樹脂、タンニン、色素——である。この頁は、木が何でできているか、ヒノキやスギの香りがどこから来るか、木がなぜ年とともに色を変えるか、ナラがなぜ鉄釘の下で黒くなるか、そして木がいかに新しい化学品の原料になりつつあるかを説明する。",
    zh:"走進一座新建的扁柏浴室或高山的木工坊，最先注意到的是氣味。其背後是化學：構成木材的三大高分子，以及少量且多變的其他化合物——精油、樹脂、單寧、色素——賦予每種木材獨特的香氣、顏色與耐腐性。本頁說明木材由什麼構成、扁柏與柳杉的香氣從何而來、木材為何隨歲月變色、橡木為何在鐵釘下變黑，以及木材如何成為新化學品的原料。" },
  body:[
    { t:"section",
      id:"polymers",
      title:{ en:"Three polymers and the rest", ja:"三つの高分子とそのほか", zh:"三種高分子與其他成分" },
      jp:"主成分",
      body:[
        { t:"p",
          text:{
            en:"About ninety-five per cent of dry wood is made of three substances. <em>Cellulose</em>, a long unbranched chain of glucose units, forms crystalline microfibrils that give the cell wall its tensile strength. <em>Hemicelluloses</em>, shorter branched chains of several sugars, coat and link the microfibrils and hold much of the wall's water. <em>Lignin</em>, a complex three-dimensional polymer built from phenolic units, fills the spaces between them, stiffens the wall, makes it resistant to water and to microbes, and glues neighbouring cells together. The remainder is extractives — compounds that can be dissolved out with water or solvents — and a little mineral ash.",
            ja:"乾いた木のおよそ九十五パーセントは三つの物質でできている。セルロースはブドウ糖の単位が枝分かれせずに長くつながった鎖で、結晶性のミクロフィブリルをつくり、細胞壁に引張の強さを与える。ヘミセルロースは数種類の糖が短く枝分かれした鎖で、ミクロフィブリルを覆ってつなぎ、壁の水の多くを抱える。リグニンはフェノール性の単位からなる複雑な三次元の高分子で、そのあいだを埋め、壁を剛くし、水や微生物に強くし、隣りあう細胞を接着する。残りは抽出成分——水や溶媒で溶かし出せる化合物——とわずかな無機の灰分である。",
            zh:"乾燥木材約 95% 由三種物質構成。纖維素是葡萄糖單元無分支的長鏈，形成結晶性微纖絲，賦予細胞壁抗拉強度。半纖維素是由數種糖構成的較短分支鏈，包覆並連結微纖絲，並容納細胞壁大部分水分。木質素是由酚類單元構成的複雜三維高分子，填充其間，使細胞壁變硬、抗水抗菌，並把相鄰細胞黏合在一起。其餘是抽出成分——可用水或溶劑溶出的化合物——以及少量礦物灰分。" } },
        { t:"table",
          caption:{
            en:"Typical chemical composition of wood, per cent of dry weight",
            ja:"木材の典型的な化学組成（乾重量％）",
            zh:"木材典型化學組成（乾重百分比）" },
          cols:[
            { en:"Component", ja:"成分", zh:"成分" },
            { en:"Conifers (sugi, hinoki)", ja:"針葉樹（スギ・ヒノキ）", zh:"針葉樹（柳杉、扁柏）" },
            { en:"Broadleaves (beech, oak)", ja:"広葉樹（ブナ・ナラ）", zh:"闊葉樹（山毛櫸、橡木）" },
            { en:"Role", ja:"役割", zh:"作用" }
          ],
          numCols:[1, 2],
          rows:[
            [
              { en:"Cellulose", ja:"セルロース", zh:"纖維素" },
              "40–50",
              "40–50",
              { en:"Tensile strength; fibres for paper", ja:"引張の強さ。紙の繊維", zh:"抗拉強度；造紙纖維" }
            ],
            [
              { en:"Hemicelluloses", ja:"ヘミセルロース", zh:"半纖維素" },
              "20–25",
              "25–35",
              { en:"Matrix; holds water; first to break down in heat", ja:"基質。水を抱える。熱で最初に分解する", zh:"基質；吸附水分；受熱最先分解" }
            ],
            [
              { en:"Lignin", ja:"リグニン", zh:"木質素" },
              "25–35",
              "18–25",
              { en:"Stiffness, water and decay resistance, bonding", ja:"剛さ、耐水・耐朽、接着", zh:"剛性、抗水與抗腐、黏合" }
            ],
            [
              { en:"Extractives", ja:"抽出成分", zh:"抽出成分" },
              "2–10",
              "2–10",
              { en:"Scent, colour, durability", ja:"香り、色、耐久性", zh:"香氣、顏色、耐久性" }
            ],
            [
              { en:"Ash", ja:"灰分", zh:"灰分" },
              "<1",
              "<1",
              { en:"Minerals: calcium, potassium, magnesium", ja:"ミネラル：カルシウム、カリウム、マグネシウム", zh:"礦物質：鈣、鉀、鎂" }
            ]
          ] },
        { t:"p",
          text:{
            en:"Conifer lignin is built almost entirely from one unit (guaiacyl); broadleaf lignin mixes it with a second (syringyl), which makes it easier to break down. This small difference has large consequences: it is one reason broadleaf woods are easier to pulp, why they respond differently to steam-bending, and why conifer wood is a little more resistant to decay.",
            ja:"針葉樹のリグニンはほぼ一種類の単位（グアイアシル）だけでできており、広葉樹のリグニンはそれに二つ目の単位（シリンギル）がまじるため、分解しやすい。この小さな違いは大きな結果をもつ。広葉樹材がパルプにしやすい理由の一つであり、曲木のための蒸煮への反応が違う理由であり、針葉樹材がやや腐りにくい理由でもある。",
            zh:"針葉樹木質素幾乎完全由一種單元（愈創木基）構成；闊葉樹木質素則混有第二種單元（紫丁香基），因而較易分解。這個小差異影響重大：它是闊葉材較易製漿的原因之一，也說明了兩者對蒸煮彎曲的反應不同，以及針葉材為何稍微更耐腐。" } }
      ] },
    { t:"section",
      id:"scent",
      title:{ en:"The scent of hinoki", ja:"ヒノキの香り", zh:"扁柏的香氣" },
      jp:"精油・テルペン",
      body:[
        { t:"p",
          text:{
            en:"The fragrance of Japanese conifers comes from essential oils stored in the heartwood and in special cells of the leaves and bark. They are mostly terpenes — hydrocarbons and alcohols built from five-carbon units — of two sizes: volatile monoterpenes such as α-pinene, which give the sharp, fresh top note of newly planed wood, and heavier sesquiterpenes such as cadinene and cadinol, which give the warm, lingering base note and much of the wood's resistance to fungi and insects. Distilled hinoki wood oil is used in soaps, bath products and incense; the offcuts of Gifu's sawmills supply a small industry.",
            ja:"日本の針葉樹の香りは、心材や葉・樹皮の特別な細胞にたくわえられた精油から来る。その多くはテルペン——五つの炭素の単位からなる炭化水素やアルコール——で、大きさの違う二種がある。α-ピネンのような揮発しやすいモノテルペンは、削りたての木の鋭くすがすがしい立ち香を、カジネンやカジノールのような重いセスキテルペンは、あたたかく尾を引く残り香と、菌や虫への抵抗力の多くを与える。蒸留したヒノキの材油は石けんや入浴剤や香に使われ、岐阜の製材所の端材が小さな産業を支えている。",
            zh:"日本針葉樹的香氣來自儲存在心材以及葉、樹皮特殊細胞中的精油。其成分多為萜類——由五碳單元構成的碳氫化合物與醇類——分為兩種大小：α-蒎烯等揮發性單萜，帶來新刨木材那股銳利清新的前調；杜松烯、杜松醇等較重的倍半萜，帶來溫暖綿長的基調，也提供木材大部分的抗菌抗蟲能力。蒸餾所得的扁柏木材精油用於肥皂、入浴劑與線香；岐阜製材所的邊角料支撐著一門小產業。" } },
        { t:"figure",
          caption:{
            en:"Main components of one analysed lot of steam-distilled hinoki wood oil, per cent. Composition varies with the part of the tree, its origin and the distillation. Source: analysis published by a Japanese hinoki-oil producer.",
            ja:"水蒸気蒸留したヒノキ材油のある分析ロットの主成分（％）。組成は木の部位、産地、蒸留によって変わる。出典：日本のヒノキ油製造者が公表した分析。",
            zh:"某批水蒸氣蒸餾扁柏木材精油的主要成分（%）。組成隨樹木部位、產地與蒸餾條件而異。資料來源：日本一家扁柏精油製造商公布的分析。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Hinoki wood oil", ja:"ヒノキ材油", zh:"扁柏木材精油" }, labelW:200, unit:"%",
            items:[
              { n:"α-pinene", v:25, f:"#E0E7E9" },
              { n:"δ-cadinene", v:14, f:"#EDE5D2" },
              { n:"α-cadinol", v:13, f:"#EADCC1" },
              { n:"T-muurolol", v:10, f:"#EADCC1" },
              { n:"γ-cadinene", v:8, f:"#EDE5D2" },
              { n:{ en:"Others", ja:"その他", zh:"其他" }, v:30, f:"#E6E4E0" }
            ],
            note:{ en:"Blue: monoterpene (volatile top note). Sand: sesquiterpene hydrocarbons. Ochre: sesquiterpene alcohols (base note, antifungal).", ja:"青：モノテルペン（揮発性の立ち香）。砂色：セスキテルペン炭化水素。黄土色：セスキテルペンアルコール（残り香、抗菌性）。", zh:"藍：單萜（揮發性前調）。沙色：倍半萜烴。赭色：倍半萜醇（基調，抗真菌）。" } }); } },
        { t:"defs",
          items:[
            { term:{ en:"Hinokitiol", ja:"ヒノキチオール", zh:"檜木醇" },
              jp:"β-ツヤプリシン",
              def:{
                en:"Despite its name, hinokitiol is found only in traces in Japanese hinoki. It was first isolated in 1936 by the chemist Nozoe Tetsuo at Taihoku (Taipei) Imperial University from Taiwan hinoki, and is abundant in hiba (asunaro) and western red cedar. Its unusual seven-membered ring made it one of the first non-benzenoid aromatic compounds to be recognised, a landmark in organic chemistry. It is strongly antibacterial and antifungal and is used in cosmetics and oral-care products.",
                ja:"その名にもかかわらず、ヒノキチオールは日本のヒノキにはごくわずかしか含まれない。一九三六年、台北帝国大学の化学者野副鉄男が台湾ヒノキから初めて単離した。ヒバ（アスナロ）やベイスギには豊富に含まれる。その珍しい七員環によって、最初期に認められた非ベンゼン系芳香族化合物の一つとなり、有機化学の画期となった。強い抗菌・抗真菌性をもち、化粧品や口腔ケア製品に使われる。",
                zh:"儘管名稱如此，檜木醇在日本扁柏中僅含微量。它於 1936 年由台北帝國大學化學家野副鐵男首次從台灣扁柏中分離出來，在羅漢柏（翌檜）與北美紅側柏中含量豐富。其罕見的七元環使它成為最早被確認的非苯系芳香化合物之一，是有機化學的里程碑。它具強烈抗菌與抗真菌作用，用於化妝品與口腔保健產品。" } },
            { term:{ en:"Sugi aroma", ja:"スギの香り", zh:"柳杉香氣" },
              jp:"樽香",
              def:{
                en:"Sugi heartwood is rich in sesquiterpenes, and its aroma, softer and sweeter than hinoki's, is the <em>kiga</em> or wood note of sake stored in sugi barrels. Brewers select barrel staves that include both red heartwood and white sapwood to balance aroma and leakage.",
                ja:"スギの心材はセスキテルペンに富み、ヒノキよりやわらかく甘いその香りは、杉樽に入れた酒の木香となる。酒屋は香りと漏れの釣りあいをとるため、赤身と白太の両方を含む側板を選ぶ。",
                zh:"柳杉心材富含倍半萜，其香氣比扁柏柔和而甘甜，是杉樽所貯日本酒的「木香」。釀酒師會挑選兼含紅心材與白邊材的桶板，以平衡香氣與滲漏。" } },
            { term:{ en:"Forest air", ja:"森の空気", zh:"森林空氣" },
              jp:"フィトンチッド",
              def:{
                en:"The volatile terpenes released by living forests are often marketed in Japan as “phytoncides”, a word coined by a Soviet biologist in the 1920s for plant substances that inhibit microbes. Research on their effects on people is discussed on <a href=\"health.html\">Wood and Health</a>.",
                ja:"生きた森が放つ揮発性のテルペンは、日本ではしばしば「フィトンチッド」の名で語られる。一九二〇年代にソ連の生物学者が、微生物を抑える植物の物質を指してつくった言葉である。人への効果の研究については<a href=\"health.html\">木と健康</a>で述べる。",
                zh:"活森林釋放的揮發性萜類，在日本常以「芬多精」之名行銷；這個詞是 1920 年代一位蘇聯生物學家所創，用以指稱能抑制微生物的植物物質。其對人體影響的研究，見<a href=\"health.html\">木材與健康</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"colour",
      title:{ en:"Colour and its changes", ja:"色とその変化", zh:"顏色及其變化" },
      jp:"飴色",
      body:[
        { t:"p",
          text:{
            en:"The colour of heartwood comes from extractives deposited as the cells die: the pink of Tōnō hinoki, the red-brown of sugi's <em>akami</em>, the gold of keyaki, the deep red of yew. Once cut, every wood changes. Light — ultraviolet above all — breaks down lignin at the surface; pale woods such as hinoki and sugi turn yellow and then a mellow honey colour that Japanese call <em>ame-iro</em>, “candy colour”; cherry and yew darken; some tropical woods fade. Outdoors, rain washes away the broken lignin and leaves grey, cellulose-rich fibres, the silver of old shingles and fences.",
            ja:"心材の色は、細胞が死ぬときに沈着する抽出成分から来る。東濃ひのきの桃色、スギの赤身の赤褐色、ケヤキの金色、イチイの深い赤。伐られると、どの木も変わる。光——なかでも紫外線——が表面のリグニンを壊し、ヒノキやスギのような淡い木は黄ばみ、やがて日本人が飴色と呼ぶまろやかな蜜の色になる。サクラやイチイは濃くなり、熱帯の木には褪せるものもある。屋外では、雨が壊れたリグニンを洗い流し、セルロースに富む灰色の繊維を残す——古い板葺きや塀の銀色である。",
            zh:"心材的顏色來自細胞死亡時沉積的抽出成分：東濃扁柏的粉紅、柳杉赤身的紅褐、櫸木的金黃、紅豆杉的深紅。一旦伐下，每種木材都會變色。光線——尤其是紫外線——會分解表面的木質素；扁柏、柳杉等淺色木材先變黃，再轉為日本人稱為「飴色」（糖色）的溫潤蜜色；櫻木與紅豆杉會變深；部分熱帶木材則會褪色。在戶外，雨水沖走分解的木質素，留下富含纖維素的灰色纖維——那就是老木瓦與木籬的銀灰色。" } },
        { t:"chips",
          items:[
            { text:{ en:"Hinoki: pale → honey (ame-iro)", ja:"ヒノキ：淡色 → 飴色", zh:"扁柏：淡色 → 飴色" } },
            { text:{ en:"Ichii: orange-red → deep brown-red", ja:"イチイ：橙赤 → 深い赤褐", zh:"紅豆杉：橙紅 → 深紅褐" } },
            { text:{ en:"Keyaki: gold → amber", ja:"ケヤキ：金色 → 琥珀色", zh:"櫸木：金黃 → 琥珀" } },
            { text:{ en:"Cherry: pinkish → red-brown", ja:"サクラ：淡紅 → 赤褐", zh:"櫻木：淡紅 → 紅褐" } },
            { text:{ en:"Outdoors, all woods: → silver-grey", ja:"屋外ではどの木も → 銀灰色", zh:"戶外所有木材 → 銀灰" } }
          ] },
        { t:"note",
          label:{ en:"Why Ittōbori is left bare", ja:"一刀彫が白木のままである理由", zh:"一刀彫為何不上塗" },
          text:{
            en:"The carvers of Hida Ichii Ittōbori apply no paint, stain or lacquer. The contrast between the red heartwood and white sapwood of the yew is part of the design, and the carver expects the piece to deepen in colour over decades of handling and light. A new piece and an old one of the same design look like different objects — which, to a collector, is the point.",
            ja:"飛騨一位一刀彫の彫り手は、塗料も着色も漆も使わない。イチイの赤い心材と白い辺材の対比は意匠の一部であり、彫り手は作品が何十年も手に触れ光にあたるうちに色を深めることを見込んでいる。同じ意匠でも新しいものと古いものは別の物のように見える——収集家にとって、それこそが肝心なのである。",
            zh:"飛驒一位一刀彫的雕刻師不上漆、不染色、不塗任何塗料。紅豆杉紅色心材與白色邊材的對比本身就是設計的一部分，雕刻師預期作品在數十年的把玩與光照下顏色會逐漸加深。同一款設計，新作與舊作看起來判若兩物——對收藏家而言，這正是重點所在。" } }
      ] },
    { t:"section",
      id:"tannin",
      title:{ en:"Tannin and iron", ja:"タンニンと鉄", zh:"單寧與鐵" },
      jp:"鉄汚染",
      body:[
        { t:"p",
          text:{
            en:"Oak, chestnut and some other broadleaves are rich in tannins — water-soluble polyphenols that make chestnut heartwood so durable and give oak casks their astringency. Tannins react with iron to form black iron–tannate compounds, the chemistry of iron-gall ink. On a damp oak or chestnut board a steel nail, a steel-wool pad or even the iron in water leaves blue-black stains; woodworkers therefore use brass or stainless fittings in oak, and wipe iron filings away before finishing. The same reaction is used deliberately: Japanese dyers and woodworkers darken wood with a solution of iron dissolved in vinegar (<em>tetsu-shō</em>), turning chestnut and oak a deep grey-black without paint.",
            ja:"ナラやクリなどの広葉樹はタンニン——水に溶けるポリフェノール——に富み、それがクリの心材をあれほど丈夫にし、ナラの樽に渋みを与える。タンニンは鉄と反応して黒いタンニン鉄をつくる。没食子インクの化学である。湿ったナラやクリの板の上では、鉄釘やスチールウール、水にまじる鉄分さえも青黒いしみを残す。だから木工家はナラには真鍮やステンレスの金物を使い、仕上げの前に鉄粉を拭い去る。同じ反応はわざと使われもする。日本の染め職人や木工家は、鉄を酢に溶かした鉄漿（鉄媒染液）で木を黒ませ、塗料なしでクリやナラを深い灰黒色にする。",
            zh:"橡木、栗木等部分闊葉樹富含單寧——水溶性多酚——使栗木心材格外耐久，也賦予橡木桶澀味。單寧與鐵反應會生成黑色的單寧酸鐵，這正是鐵膽墨水的化學原理。在潮濕的橡木或栗木板上，鐵釘、鋼絲絨甚至水中的鐵質都會留下藍黑色汙漬；因此木工師傅在橡木上使用黃銅或不鏽鋼五金，並在塗裝前擦去鐵屑。同樣的反應也會被刻意利用：日本染色師傅與木工師傅以鐵溶於醋製成的「鐵漿」（鐵媒染液）使木材變黑，不用塗料即可把栗木與橡木染成深灰黑色。" } }
      ] },
    { t:"section",
      id:"feedstock",
      title:{ en:"Wood as a chemical feedstock", ja:"化学原料としての木", zh:"作為化學原料的木材" },
      jp:"バイオリファイナリー",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Pulp and paper", ja:"パルプと紙", zh:"紙漿與紙" },
              jp:"クラフトパルプ",
              def:{
                en:"Chemical pulping dissolves the lignin and most hemicelluloses to free the cellulose fibres; the dissolved lignin is burned to power the mill. Much of the broadleaf chip described on <a href=\"broadleaf.html\">The Broadleaf Forests</a> goes this way. Hand-made Mino paper is different: it uses the long inner-bark fibres of the paper-mulberry shrub, not wood.",
                ja:"化学パルプ化はリグニンとヘミセルロースの多くを溶かしてセルロースの繊維を取り出す。溶けたリグニンは燃やされて工場の動力となる。<a href=\"broadleaf.html\">広葉樹の森</a>で述べた広葉樹チップの多くはこの道をたどる。手漉きの美濃和紙は違い、木ではなく楮という低木の内皮の長い繊維を使う。",
                zh:"化學製漿會溶解木質素與大部分半纖維素，以釋出纖維素纖維；溶出的木質素則燃燒以供工廠動力。<a href=\"broadleaf.html\">闊葉樹之森</a>所述的闊葉樹木片，許多就走上這條路。手漉美濃和紙則不同：它使用構樹這種灌木內皮的長纖維，而非木材。" } },
            { term:{ en:"Cellulose nanofibre", ja:"セルロースナノファイバー", zh:"纖維素奈米纖維" },
              jp:"CNF",
              def:{
                en:"Microfibrils separated down to a few nanometres wide form a material lighter than steel yet several times stronger, transparent in thin films and useful as a thickener and reinforcement. Japanese universities and companies have been among the leaders in its development since the 2000s.",
                ja:"ミクロフィブリルを幅数ナノメートルまでほぐしたもので、鉄より軽く数倍強く、薄い膜では透明で、増粘剤や補強材として役立つ。日本の大学や企業は二〇〇〇年代からその開発で先頭に立ってきた。",
                zh:"把微纖絲分離到數奈米寬所得的材料，比鋼輕卻強數倍，製成薄膜時透明，可作增稠劑與補強材。日本的大學與企業自 2000 年代起便是其開發的領先者之一。" } },
            { term:{ en:"Modified lignin", ja:"改質リグニン", zh:"改質木質素" },
              jp:"スギ由来",
              def:{
                en:"Because sugi lignin is unusually uniform in structure, Japan's national Forestry and Forest Products Research Institute developed a process to extract it in a modified form suitable for engineering plastics and composites — an attempt to give low-value plantation sugi a high-value chemical use.",
                ja:"スギのリグニンは構造がきわだって均一なので、国の森林総合研究所は、それをエンジニアリングプラスチックや複合材料に適したかたちに改質して取り出す方法を開発した。価値の低い人工林のスギに、価値の高い化学の用途を与える試みである。",
                zh:"由於柳杉木質素結構格外均一，日本國立研究開發法人森林研究・整備機構森林綜合研究所開發出一種製程，將其以改質形式提取，適用於工程塑膠與複合材料——試圖為低價值的人工林柳杉開創高價值的化學用途。" } },
            { term:{ en:"Charcoal and wood vinegar", ja:"炭と木酢液", zh:"木炭與木醋液" },
              jp:"熱分解",
              def:{
                en:"Heated without air, wood breaks down in stages: hemicelluloses first, around 200–300 °C, then cellulose, then lignin, leaving carbon-rich charcoal. The condensed smoke yields <em>mokusakueki</em>, wood vinegar, a brown acidic liquid used in agriculture and as a deodoriser. Charcoal buried in soil as biochar is now counted as a method of carbon removal. See <a href=\"fuel.html\">Wood as Fuel</a>.",
                ja:"空気を断って熱すると、木は段階を追って分解する。まず二〇〇〜三〇〇度ほどでヘミセルロース、ついでセルロース、そしてリグニンが分解し、炭素に富む炭が残る。煙を冷やして集めると木酢液という茶色い酸性の液が得られ、農業や消臭に使われる。土に埋めたバイオ炭は、いまでは炭素除去の方法の一つに数えられる。<a href=\"fuel.html\">燃料としての木</a>を参照。",
                zh:"在隔絕空氣下加熱，木材會分階段分解：先是約 200–300°C 時的半纖維素，接著是纖維素，最後是木質素，留下富含碳的木炭。冷凝煙氣可得「木醋液」，一種褐色酸性液體，用於農業與除臭。埋入土壤的生物炭如今被視為一種除碳方法。見<a href=\"fuel.html\">作為燃料的木材</a>。" } }
          ] }
      ] },
    { t:"related",
      items:[
        { href:"anatomy.html",
          why:{ en:"Where these compounds sit in the cell.", ja:"これらの化合物が細胞のどこにあるか。", zh:"這些化合物位於細胞何處。" } },
        { href:"health.html",
          why:{ en:"Scent, forest bathing and indoor air.", ja:"香り、森林浴、室内の空気。", zh:"香氣、森林浴與室內空氣。" } },
        { href:"finishes.html",
          why:{ en:"Lacquer, oil and the chemistry of finishes.", ja:"漆、油、仕上げの化学。", zh:"漆、油與塗裝化學。" } },
        { href:"hinoki.html", why:{ en:"The tree behind the scent.", ja:"香りの背後の木。", zh:"香氣背後的樹。" } }
      ] }
  ] };

/* ---- ------------------------------------------ moisture */
GIFU.pages["moisture"] = { kicker:{ en:"The Forest · 13", ja:"森 · 13", zh:"森林 · 13" },
  title:{ en:"Wood and Water", ja:"木と水", zh:"木與水" },
  jp:"含水率・収縮・狂い",
  lede:{
    en:"A freshly felled sugi log can contain more water than wood. Before it can become a post, a chair or a guitar, most of that water must go — and even then the wood never stops exchanging moisture with the air around it. Woodworkers say that wood is alive; what they mean, physically, is that it swells in the humid Gifu summer and shrinks in the dry, heated winter, and that everything from a sliding door to a guitar top must be designed around that movement. This page explains how water is held in wood, how much wood moves, and how Japanese makers learned to live with it.",
    ja:"伐ったばかりのスギの丸太は、木そのものより多くの水を含むことがある。それが柱や椅子やギターになるには、その水の大半が抜けねばならない——そしてそのあとも、木はまわりの空気と水分をやりとりすることをやめない。木工家は、木は生きていると言う。物理的にいえば、それは木が岐阜の湿った夏にふくらみ、暖房の効いた乾いた冬に縮むこと、そして引き戸からギターの表板まで、あらゆるものがその動きを前提に設計されねばならないことを意味する。この頁は、水が木のなかにどう保たれるか、木がどれほど動くか、そして日本のつくり手がそれとどう付きあうことを学んできたかを説明する。",
    zh:"一根剛伐下的柳杉原木，所含的水可能比木材本身還多。在它成為柱子、椅子或吉他之前，大部分水分必須去除——即使如此，木材也永遠不停地與周圍空氣交換水分。木工師傅說木頭是活的；就物理而言，意思是木材在岐阜潮濕的夏天膨脹，在乾燥有暖氣的冬天收縮，從拉門到吉他面板，一切都必須圍繞這種變形來設計。本頁說明水分如何存在於木材中、木材會變形多少，以及日本工匠如何學會與之共處。" },
  body:[
    { t:"section",
      id:"water",
      title:{ en:"Free water and bound water", ja:"自由水と結合水", zh:"自由水與結合水" },
      jp:"繊維飽和点",
      body:[
        { t:"p",
          text:{
            en:"Moisture content is expressed as the weight of water divided by the weight of the same wood when completely dry, so it can exceed 100 per cent. Green sugi heartwood commonly holds 50–150 per cent and some “black-heart” sugi far more; hinoki is drier. Water sits in two places. <em>Free water</em> fills the hollow cell cavities like water in a sponge; it leaves first, and its loss changes nothing but weight. <em>Bound water</em> is held within the cell walls, between the cellulose chains; it leaves only after all free water has gone, and its loss makes the walls shrink and stiffen. The point at which the cavities are empty but the walls still saturated — around 28–30 per cent moisture content for most species — is called the fibre saturation point.",
            ja:"含水率は、水の重さを、同じ木が完全に乾いたときの重さで割って表すので、百パーセントを超えうる。生のスギの心材はふつう五十〜百五十パーセントを含み、「黒心」のスギにはそれよりはるかに多いものもある。ヒノキはより乾いている。水は二つの場所にある。自由水は、スポンジの水のように中空の細胞の内腔を満たし、先に抜け、失われても重さのほかは何も変えない。結合水は細胞壁のなか、セルロースの鎖のあいだに保たれ、自由水がすべて抜けてから初めて出ていき、それが失われると壁が縮み、剛くなる。内腔は空だが壁はまだ飽和している点——多くの樹種で含水率およそ二十八〜三十パーセント——を繊維飽和点という。",
            zh:"含水率是以水的重量除以同一木材完全乾燥時的重量來表示，因此可能超過 100%。柳杉生材心材通常含水 50–150%，部分「黑心」柳杉更高得多；扁柏則較乾。水存在於兩處：「自由水」像海綿中的水一樣充滿中空的細胞腔，最先流失，流失時除了重量外什麼也不改變；「結合水」存在於細胞壁中、纖維素鏈之間，要等自由水全部流失後才會離開，而它的流失會讓細胞壁收縮並變硬。細胞腔已空、細胞壁仍飽和的那一點——多數樹種約為含水率 28–30%——稱為纖維飽和點。" } },
        { t:"steps",
          items:[
            { title:{ en:"Green", ja:"生材", zh:"生材" },
              meta:{ en:"50–150%+", ja:"五十〜百五十％以上", zh:"50–150% 以上" },
              text:{
                en:"Cavities full; heavy; the wood has its full green size.",
                ja:"内腔が満ちている。重く、生の寸法のまま。",
                zh:"細胞腔充滿水；沉重；仍為生材尺寸。" } },
            { title:{ en:"Fibre saturation point", ja:"繊維飽和点", zh:"纖維飽和點" },
              meta:{ en:"≈ 28–30%", ja:"約二十八〜三十％", zh:"約 28–30%" },
              text:{
                en:"Free water gone, walls still saturated. No shrinkage yet; strength unchanged.",
                ja:"自由水が抜け、壁はまだ飽和。まだ縮まず、強さも変わらない。",
                zh:"自由水已失，細胞壁仍飽和。尚未收縮；強度不變。" } },
            { title:{ en:"Air-dry", ja:"気乾", zh:"氣乾" },
              meta:{ en:"≈ 15% outdoors in Japan", ja:"日本の屋外で約十五％", zh:"日本戶外約 15%" },
              text:{
                en:"Bound water partly lost; the wood has shrunk and gained strength. The Japanese standard reference condition.",
                ja:"結合水の一部が抜け、木は縮んで強くなっている。日本の標準の基準状態。",
                zh:"失去部分結合水；木材已收縮並增強。日本標準參考狀態。" } },
            { title:{ en:"Indoor-dry", ja:"室内の乾燥", zh:"室內乾燥" },
              meta:{ en:"≈ 8–12%", ja:"約八〜十二％", zh:"約 8–12%" },
              text:{
                en:"What furniture, floors and instruments must be dried to before making, or they will shrink in use.",
                ja:"家具や床や楽器は、つくる前にここまで乾かさねばならない。さもないと使ううちに縮む。",
                zh:"家具、地板與樂器製作前必須乾燥至此，否則使用時會收縮。" } },
            { title:{ en:"Oven-dry", ja:"全乾", zh:"全乾" },
              meta:{ en:"0%", ja:"〇％", zh:"0%" },
              text:{
                en:"A laboratory state, reached at 103 °C; the reference for all calculations.",
                ja:"一〇三度で達する実験室の状態。すべての計算の基準。",
                zh:"在 103°C 下達成的實驗室狀態；所有計算的基準。" } }
          ] }
      ] },
    { t:"section",
      id:"emc",
      title:{ en:"Equilibrium with the air", ja:"空気とのつりあい", zh:"與空氣的平衡" },
      jp:"平衡含水率",
      body:[
        { t:"p",
          text:{
            en:"Below the fibre saturation point, wood takes up or gives off moisture until it reaches a balance with the surrounding air, the equilibrium moisture content. That balance depends mainly on relative humidity and only slightly on species. In Japan's humid climate, wood stored outdoors under cover settles at about 15 per cent, the figure used as the national reference for “air-dry” timber. Indoors it varies with the season: a Gifu house in August may hold air at 70–80 per cent relative humidity, bringing wood to 13–16 per cent; the same room with the heater running in January may fall to 30–40 per cent, taking the wood down to 7–8 per cent.",
            ja:"繊維飽和点より下では、木はまわりの空気とつりあうまで水分を吸ったり吐いたりする。これを平衡含水率という。つりあいはおもに相対湿度で決まり、樹種によってはわずかしか変わらない。日本の湿った気候では、屋根の下に置いた屋外の木はおよそ十五パーセントに落ち着き、この値が「気乾」材の国の基準に使われる。屋内では季節で変わる。八月の岐阜の家は相対湿度七十〜八十パーセントになり、木は十三〜十六パーセントになる。一月に暖房をつけた同じ部屋は三十〜四十パーセントまで下がり、木は七〜八パーセントまで乾く。",
            zh:"在纖維飽和點以下，木材會吸收或釋放水分，直到與周圍空氣達到平衡，稱為平衡含水率。這個平衡主要取決於相對濕度，受樹種影響很小。在日本潮濕的氣候下，置於戶外遮蔭處的木材約穩定在 15%，這個數值被用作全國「氣乾」木材的基準。室內則隨季節變化：岐阜住家八月空氣相對濕度可達 70–80%，使木材含水率達 13–16%；同一房間一月開暖氣時濕度可能降到 30–40%，木材隨之乾到 7–8%。" } },
        { t:"figure",
          caption:{
            en:"Equilibrium moisture content of wood at about 20 °C as the relative humidity of the air changes (the sorption curve; typical values for most species). The shaded seasons show the range a Gifu interior may pass through in a year.",
            ja:"およそ二十度で空気の相対湿度が変わるときの木の平衡含水率（吸着曲線。多くの樹種の典型値）。岐阜の室内が一年に通りうる範囲を季節で示した。",
            zh:"約 20°C 時，木材平衡含水率隨空氣相對濕度的變化（吸濕曲線；多數樹種的典型值）。標示季節顯示岐阜室內一年可能經歷的範圍。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"How wet wood becomes", ja:"木はどれだけ湿るか", zh:"木材會變多濕" },
            unit:{ en:"moisture content %", ja:"含水率 %", zh:"含水率 %" },
            x0:0, x1:100, y0:0, y1:30, tick:5, xt:[0,20,40,60,80,100], endLabels:false,
            series:[ { n:{ en:"EMC at 20 °C", ja:"二十度の平衡含水率", zh:"20°C 平衡含水率" }, dots:false,
              pts:[[0,0],[10,2.5],[20,4.5],[30,6],[40,7.5],[50,9],[60,11],[65,12],[70,13],[80,16],[90,20.5],[95,24],[99,28]] } ],
            marks:[ { x:35, t:{ en:"January, heated", ja:"一月・暖房", zh:"一月（暖氣）" } }, { x:65, t:{ en:"Japan outdoors ≈ 15%", ja:"日本の屋外 約15％", zh:"日本戶外約 15%" } }, { x:78, t:{ en:"August", ja:"八月", zh:"八月" } } ],
            note:{ en:"Horizontal axis: relative humidity of the air, %.", ja:"横軸：空気の相対湿度（％）。", zh:"橫軸：空氣相對濕度（%）。" } }); } },
        { t:"note",
          label:{ en:"Wood as a humidity buffer", ja:"湿度の緩衝材としての木", zh:"木材作為濕度緩衝" },
          text:{
            en:"Because it absorbs moisture when the air is humid and releases it when the air is dry, exposed wood evens out indoor humidity. A room lined with unfinished hinoki or sugi changes humidity more slowly than one lined with vinyl wallpaper — the physical basis of the traditional claim that Japanese timber rooms are comfortable in both summer and winter, and one reason unfinished interior timber is favoured in Gifu's new wooden schools.",
            ja:"木は空気が湿ると水分を吸い、乾くと吐くので、むき出しの木は室内の湿度をならす。白木のヒノキやスギを張った部屋は、ビニールクロスを張った部屋より湿度の変わり方がゆるやかである——日本の木の部屋が夏も冬も快適だという昔からの言い分の物理的な根拠であり、岐阜の新しい木造校舎で塗装しない内装材が好まれる理由の一つでもある。",
            zh:"因為木材在空氣潮濕時吸濕、乾燥時放濕，外露的木材能平衡室內濕度。以未塗裝扁柏或柳杉貼覆的房間，濕度變化比貼塑膠壁紙的房間更慢——這正是「日本木造房間冬夏皆宜」這個傳統說法的物理基礎，也是岐阜新建木造校舍偏好不塗裝室內木材的原因之一。" } }
      ] },
    { t:"section",
      id:"movement",
      title:{ en:"How much wood moves", ja:"木はどれだけ動くか", zh:"木材會變形多少" },
      jp:"収縮率",
      body:[
        { t:"p",
          text:{
            en:"Wood shrinks very differently in its three directions. Along the grain the change is negligible — a tenth of a per cent or two from green to dry. Across the grain it is large, and it is about twice as large tangentially, around the rings, as radially, across them. That two-to-one ratio causes most of the problems woodworkers face: flatsawn boards cup, square posts become diamond-shaped, round turnings become oval, and a log dried with its pith inside splits along a radius.",
            ja:"木は三つの方向でまったく違って縮む。繊維方向の変化は無視できるほどで、生から乾燥まで〇・一か〇・二パーセントである。繊維と直角の方向では大きく、年輪に沿う接線方向では年輪を横切る半径方向のおよそ二倍になる。この二対一の比が、木工家の向きあう問題の多くを生む。板目の板は反り、正方形の柱は菱形になり、丸い挽物は楕円になり、髄を含んだまま乾かした丸太は半径に沿って割れる。",
            zh:"木材在三個方向的收縮差異極大。順紋方向的變化可忽略不計——從生材到乾燥僅約 0.1–0.2%。橫紋方向則很大，而且沿年輪的弦向收縮約為橫跨年輪之徑向的兩倍。這個二比一的比例造成木工師傅面對的大部分問題：弦切板翹曲、方柱變成菱形、圓形車製品變成橢圓，而帶髓心乾燥的原木會沿半徑開裂。" } },
        { t:"figure",
          caption:{
            en:"Approximate total shrinkage from green to oven-dry, per cent, tangential and radial, for some Japanese timbers. Beech moves almost twice as much as hinoki — why beech furniture needs careful drying and design. Rounded typical values.",
            ja:"主な日本の木材の、生材から全乾までのおよその全収縮率（％、接線方向と半径方向）。ブナはヒノキのほぼ二倍動く——ブナの家具に慎重な乾燥と設計が要る理由である。丸めた典型値。",
            zh:"部分日本木材從生材到全乾的約略總收縮率（%，弦向與徑向）。山毛櫸的變形幾乎是扁柏的兩倍——這就是山毛櫸家具需要謹慎乾燥與設計的原因。四捨五入的典型值。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Shrinkage, green to oven-dry", ja:"生材から全乾までの収縮", zh:"生材至全乾的收縮" }, labelW:230, unit:"%", dec:1, rowH:26,
            items:[
              { n:{ en:"Kiri — tangential", ja:"キリ——接線", zh:"桐木——弦向" }, v:5.0, f:"#E0E6DB" },
              { n:{ en:"Sugi — tangential", ja:"スギ——接線", zh:"柳杉——弦向" }, v:6.5, f:"#E0E6DB" },
              { n:{ en:"Sugi — radial", ja:"スギ——半径", zh:"柳杉——徑向" }, v:2.5, f:"#E0E7E9" },
              { n:{ en:"Hinoki — tangential", ja:"ヒノキ——接線", zh:"扁柏——弦向" }, v:6.0, f:"#E0E6DB" },
              { n:{ en:"Hinoki — radial", ja:"ヒノキ——半径", zh:"扁柏——徑向" }, v:3.0, f:"#E0E7E9" },
              { n:{ en:"Mizunara — tangential", ja:"ミズナラ——接線", zh:"水楢——弦向" }, v:9.0, f:"#EDE5D2" },
              { n:{ en:"Mizunara — radial", ja:"ミズナラ——半径", zh:"水楢——徑向" }, v:4.5, f:"#E0E7E9" },
              { n:{ en:"Beech — tangential", ja:"ブナ——接線", zh:"山毛櫸——弦向" }, v:11.5, f:"#EEE1DF" },
              { n:{ en:"Beech — radial", ja:"ブナ——半径", zh:"山毛櫸——徑向" }, v:5.0, f:"#E0E7E9" }
            ] }); } },
        { t:"p",
          text:{
            en:"A useful rule of thumb follows. A flatsawn beech tabletop 60 centimetres wide changes its width by about 2.5 millimetres for every percentage point of moisture it gains or loses — close to a centimetre if a humid summer and a heated winter move it by four points; a quartersawn hinoki panel of the same width moves only about a quarter as much. The makers of Gifu's furniture, shoji and instruments design every joint with that difference in mind.",
            ja:"そこから役に立つ目安が出てくる。幅六十センチの板目のブナの天板は、含水率が一ポイント変わるごとに幅がおよそ二・五ミリ変わる。湿った夏と暖房の冬のあいだで四ポイント動けば、一センチ近くになる。同じ幅の柾目のヒノキの板なら、その四分の一ほどしか動かない。岐阜の家具、障子、楽器のつくり手は、その差を心に置いてすべての仕口を設計する。",
            zh:"由此可得一條實用的經驗法則：寬 60 公分的弦切山毛櫸桌面，含水率每變動 1 個百分點，寬度約變化 2.5 公釐；若潮濕夏季與暖氣冬季之間相差 4 個百分點，變化便接近 1 公分。同寬的徑切扁柏面板，變化只有約四分之一。岐阜的家具、障子與樂器工匠，設計每一個接合時都把這個差異放在心上。" } }
      ] },
    { t:"section",
      id:"design",
      title:{ en:"Designing for movement", ja:"動きを見込んだ設計", zh:"為變形而設計" },
      jp:"狂いへの備え",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Sliding-dovetail battens", ja:"蟻桟", zh:"燕尾滑槽橫檔" },
              jp:"ありざん",
              def:{
                en:"A wide tabletop or door is kept flat by battens let into tapered dovetail grooves on its underside. The battens hold the board against cupping but let it slide freely as it shrinks and swells. Glue is applied, if at all, only at the centre.",
                ja:"広い天板や扉は、裏側のテーパーのついた蟻溝に差しこんだ桟で平らに保たれる。桟は板の反りを押さえるが、縮み膨らむ板が自由に滑るのを妨げない。接着するとしても中央だけである。",
                zh:"寬桌面或門板背面開有漸縮的燕尾槽，嵌入橫檔以保持平整。橫檔能壓住木板防止翹曲，卻允許木板在收縮膨脹時自由滑動。若要上膠，也只在中央。" } },
            { term:{ en:"Breadboard ends", ja:"端嵌め", zh:"端嵌（封端）" },
              jp:"はしばめ",
              def:{
                en:"A strip set across the end grain of a panel with a long tongue, pegged through elongated holes, keeps the end flat and protects it without restraining movement.",
                ja:"板の木口に長い実（さね）で横木を嵌め、長穴を通した込み栓で留める。端を平らに保ち木口を守りながら、動きを拘束しない。",
                zh:"在木板端面以長榫舌嵌入一條橫木，並以穿過長孔的木栓固定，既保持端部平整、保護端面，又不限制變形。" } },
            { term:{ en:"Floating panels", ja:"羽目板・鏡板", zh:"浮動鑲板" },
              jp:"かがみいた",
              def:{
                en:"In doors, chests and cabinet sides, a thin panel sits loosely in grooves in a rigid frame, free to move. The frame, whose members run lengthwise, stays the same size all year.",
                ja:"扉や箪笥や棚の側板では、薄い板が剛い框の溝にゆるく嵌まり、自由に動ける。部材が長手に走る框は、一年じゅう同じ大きさを保つ。",
                zh:"在門、櫃子與櫥櫃側板中，薄鑲板鬆鬆地嵌在剛性框架的溝槽裡，可以自由移動。框架構件沿長向延伸，一年四季尺寸不變。" } },
            { term:{ en:"The backsplit", ja:"背割り", zh:"背割" },
              jp:"せわり",
              def:{
                en:"A saw kerf cut deliberately to the pith along the hidden face of a boxed-heart post. As the post dries the kerf opens, relieving the stresses that would otherwise crack the visible faces.",
                ja:"心持ちの柱の見えない面に、髄まで鋸目をわざと入れる。柱が乾くにつれ鋸目が開き、そうでなければ見える面を割ったはずの応力を逃がす。",
                zh:"在含髓心柱子的隱藏面刻意鋸出一道深及髓心的鋸縫。柱子乾燥時鋸縫張開，釋放原本會使可見面開裂的應力。" } },
            { term:{ en:"The kiri chest", ja:"桐箪笥", zh:"桐木衣櫃" },
              jp:"きりだんす",
              def:{
                en:"Paulownia shrinks little, takes up moisture slowly and is light and insulating. A well-made kiri chest has drawers fitted so closely that pushing one in makes the others slide out on the air cushion; in humid weather the wood swells slightly and seals the contents. The traditional wedding chest of central Japan.",
                ja:"キリは縮みが小さく、水分をゆっくり吸い、軽くて断熱性が高い。よくできた桐箪笥は、引き出しがきわめて密に合わされていて、一つを押しこむと空気に押されてほかが出てくる。湿った季節にはわずかにふくらんで中身を封じる。中部日本の伝統の嫁入り道具である。",
                zh:"桐木收縮小、吸濕慢，且質輕隔熱。做工精良的桐木衣櫃，抽屜配合極為緊密，推入一格時空氣壓力會讓其他抽屜滑出；潮濕季節木材微脹，把內容物密封起來。它是日本中部傳統的嫁妝衣櫃。" } }
          ] },
        { t:"p",
          text:{
            en:"Water also changes strength. Below the fibre saturation point, stiffness and strength rise as wood dries — by very roughly 2–6 per cent for each percentage point of moisture lost, depending on the property — least for stiffness, most for compressive strength. That is why Japanese building standards grade timber at a stated moisture content, and why dried timber (<em>kansōzai</em>) carries a premium over green: it is not only stable, it is stronger.",
            ja:"水は強さも変える。繊維飽和点より下では、木が乾くにつれて剛さと強さが上がる——性質によるが、含水率が一ポイント下がるごとにおおよそ二〜六パーセント（ヤング率で小さく、圧縮強さで大きい）。だから日本の建築の規格は材を決められた含水率で格付けし、乾燥材は生材より高い値がつく。安定しているだけでなく、強いのである。",
            zh:"水分也會改變強度。在纖維飽和點以下，木材越乾，剛性與強度越高——視性質而定，含水率每降一個百分點，大約提高 2–6%（剛性提高最少，抗壓強度最多）。這就是日本建築規範以特定含水率為木材分級的原因，也是乾燥材價格高於生材的原因：它不僅穩定，而且更強。" } }
      ] },
    { t:"section",
      id:"measuring",
      title:{ en:"Measuring moisture", ja:"含水率を測る", zh:"量測含水率" },
      jp:"全乾法・水分計",
      body:[
        { t:"p",
          text:{
            en:"There is only one exact way to know how much water a piece of wood holds, and it destroys the sample. In the oven-dry method, set out in the Japanese Industrial Standard for wood testing, a small block is weighed, dried at 103 ± 2 °C until its weight stops falling, and weighed again; the loss divided by the dry weight is the moisture content. Kiln operators use the same principle on sample boards that they weigh through a drying run. For everything else — checking a post on site, sorting boards at a mill, buying a slab at a market — the trade uses meters, which are quick but indirect: they measure an electrical property that changes with moisture, and must be told the species and temperature to give a sensible figure.",
            ja:"木がどれだけ水をもつかを正確に知る方法は一つしかなく、それは試料を壊す。日本産業規格の木材の試験方法に定められた全乾法では、小さな試験片の重さを量り、百三度±二度で重さが減らなくなるまで乾かし、また量る。減った重さを乾いた重さで割ったものが含水率である。乾燥機の運転者は、乾燥のあいだ重さを量りつづける試験材で同じ原理を使う。それ以外——現場で柱を確かめる、製材所で板を仕分ける、市場で一枚板を買う——では、業界は水分計を使う。速いが間接的である。水分によって変わる電気的な性質を測るので、樹種と温度を設定しなければまともな値にならない。",
            zh:"要精確知道一塊木材含有多少水，只有一種方法，而且會毀掉樣本。日本工業規格木材試驗方法所規定的「全乾法」，是先秤小試片的重量，在 103 ± 2°C 下乾燥至重量不再下降，再秤一次；失去的重量除以乾重即為含水率。乾燥窯操作員對整個乾燥過程中持續秤重的試驗材，運用的是同一原理。至於其他場合——在工地檢查柱子、在製材所分選板材、在市場購買一枚板——業界使用水分計，快速但間接：它量測隨水分變化的電學性質，必須設定樹種與溫度才能得到合理數值。" } },
        { t:"table",
          caption:{ en:"Ways of measuring moisture content", ja:"含水率の測り方", zh:"含水率的量測方式" },
          cols:[
            { en:"Method", ja:"方法", zh:"方法" },
            { en:"How it works", ja:"しくみ", zh:"原理" },
            { en:"Good for", ja:"向く用途", zh:"適用" },
            { en:"Limits", ja:"限界", zh:"限制" }
          ],
          rows:[
            [
              { en:"Oven-dry", ja:"全乾法", zh:"全乾法" },
              {
                en:"Weigh, dry at 103 °C to constant weight, weigh again",
                ja:"量り、百三度で恒量まで乾かし、また量る",
                zh:"秤重，以 103°C 乾燥至恆重後再秤" },
              { en:"Reference; research; checking meters", ja:"基準、研究、水分計の校正", zh:"基準、研究、校正水分計" },
              { en:"Destroys the sample; takes a day or more", ja:"試料を壊す。一日以上かかる", zh:"破壞樣本；需一天以上" }
            ],
            [
              { en:"Resistance (pin) meter", ja:"電気抵抗式", zh:"電阻式（插針）" },
              {
                en:"Two pins driven in; dry wood resists current far more than wet",
                ja:"二本の針を打ちこむ。乾いた木は湿った木よりはるかに電気を通しにくい",
                zh:"打入兩根針；乾木的電阻遠高於濕木" },
              {
                en:"About 7 to 30 per cent; spot checks at a chosen depth",
                ja:"およそ七〜三十％。選んだ深さでの点検",
                zh:"約 7%–30%；於選定深度抽查" },
              {
                en:"Leaves holes; needs species and temperature correction",
                ja:"穴が残る。樹種と温度の補正が要る",
                zh:"留下孔洞；需樹種與溫度修正" }
            ],
            [
              { en:"Capacitance (pinless) meter", ja:"高周波式（容量式）", zh:"高週波式（電容式）" },
              {
                en:"An electric field from a pad senses the wood's dielectric properties",
                ja:"当てた電極の電場が木の誘電的な性質を感じとる",
                zh:"以感應板發出的電場感測木材的介電性質" },
              {
                en:"Fast scanning of boards; in-line meters at mills",
                ja:"板のすばやい走査、製材ラインの連続計測",
                zh:"快速掃描板材；製材線上即時量測" },
              {
                en:"Depends on density; reads mostly the outer 2–3 cm",
                ja:"密度に左右され、ほぼ外側二〜三センチを読む",
                zh:"受密度影響；主要讀取外層 2–3 公分" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Japanese Industrial Standard JIS Z 2101 (methods of test for woods); meter ranges are typical of commercial instruments.",
            ja:"出典：日本産業規格 JIS Z 2101（木材の試験方法）。水分計の範囲は市販の計器の典型的な値。",
            zh:"資料來源：日本工業規格 JIS Z 2101（木材試驗方法）；水分計範圍為市售儀器的典型值。" } }
      ] },
    { t:"section",
      id:"seasons",
      title:{ en:"Gifu's winter, Taipei's summer", ja:"岐阜の冬、台北の夏", zh:"岐阜的冬天，台北的夏天" },
      jp:"季節と平衡含水率",
      body:[
        { t:"p",
          text:{
            en:"Read through the sorption curve above, the climates of Gifu and Taiwan set very different targets for wood. The outdoor humidity of both is moderate on average — Gifu city about 66 per cent over the year, Taipei about 75 per cent — but indoor air is what matters, and there the two diverge. In a Gifu or Takayama house in January, cold outdoor air warmed to room temperature can fall to 30 per cent relative humidity or lower, and wood follows it down to about 6 per cent. A Taipei flat without air-conditioning sits close to the outdoor figure all year, and wood there settles at about 14 per cent; the spring rains and the plum-rain season push it higher. The humidity figures for each month are compared on <a href=\"guitarcare.html\">Caring for a Guitar</a>.",
            ja:"上の吸湿の曲線にあてはめると、岐阜と台湾の気候は木にまったく違う目標を課す。屋外の湿度はどちらも平均すればほどほどで、岐阜市は年平均で約六十六パーセント、台北は約七十五パーセントだが、大事なのは室内の空気であり、そこで二つは分かれる。一月の岐阜や高山の家では、冷たい外気を室温まで温めると相対湿度は三十パーセントかそれ以下になり、木はそれを追って約六パーセントまで下がる。エアコンのない台北の部屋は一年じゅう屋外の値に近く、木は約十四パーセントに落ち着く。春雨や梅雨の季節にはさらに上がる。月ごとの湿度は<a href=\"guitarcare.html\">ギターの手入れ</a>でくらべている。",
            zh:"對照上面的吸濕曲線，岐阜與台灣的氣候為木材設下截然不同的目標。兩地戶外濕度平均都不算極端——岐阜市全年約 66%，台北約 75%——但真正重要的是室內空氣，兩地在此分道揚鑣。1 月在岐阜或高山的住家，寒冷的外氣加熱到室溫後，相對濕度可能降到 30% 甚至更低，木材隨之降到約 6%。台北沒有空調的公寓全年接近戶外數值，木材在那裡穩定在約 14%；春雨與梅雨季還會更高。各月濕度的比較見<a href=\"guitarcare.html\">吉他的保養</a>。" } },
        { t:"p",
          text:{
            en:"That gap of about eight percentage points is what a piece of Japanese woodwork must survive when it moves to Taiwan, or a Taiwanese piece when it moves to a Japanese winter. Using the shrinkage coefficients for hinoki — about 0.21–0.26 per cent per point of moisture tangentially and 0.10–0.13 radially — a flatsawn hinoki board 40 cm wide would change in width by roughly 7 mm across that range, and a quartersawn one by roughly 4 mm. The practical advice of makers on both sides is the same: let a new piece acclimatise for a few weeks before fitting doors or drawers, keep instruments and fine furniture in the middle of the range with a humidifier in a Japanese winter and a dehumidifier or air-conditioning in a Taiwanese summer, and avoid the extremes rather than chase a perfect number.",
            ja:"およそ八ポイントのこの差こそ、日本の木工品が台湾へ移るとき、あるいは台湾のものが日本の冬へ移るときに耐えねばならないものである。ヒノキの収縮率——含水率一ポイントあたり接線方向で約〇・二一〜〇・二六パーセント、半径方向で〇・一〇〜〇・一三パーセント——を使うと、幅四十センチの板目のヒノキ板はこの範囲で幅がおよそ七ミリ、柾目ならおよそ四ミリ変わる。両側のつくり手の実際的な助言は同じである。新しいものは扉や引き出しを合わせる前に数週間なじませる。楽器や上等の家具は、日本の冬には加湿器で、台湾の夏には除湿機やエアコンで範囲のまんなかに保つ。完璧な数字を追うより、極端を避けることである。",
            zh:"這約 8 個百分點的落差，正是日本木工品移到台灣、或台灣木工品移到日本冬季時必須承受的。以扁柏的收縮係數——每 1 個百分點含水率，弦向約 0.21–0.26%、徑向 0.10–0.13%——計算，寬 40 公分的弦切扁柏板在此範圍內寬度約變化 7 公釐，徑切板約 4 公釐。兩地業者的實用建議如出一轍：新作品在調整門或抽屜之前，先讓它適應幾週；樂器與高級家具在日本冬季用加濕器、在台灣夏季用除濕機或空調，保持在範圍中段；與其追求完美數字，不如避開極端。" } },
        { t:"tiny",
          text:{
            en:"Sources: Japan Meteorological Agency and Central Weather Administration climate normals 1991–2020 (as on the guitar-care page); shrinkage coefficients for hinoki from the Japan Wood Information Center species database (after the Forestry and Forest Products Research Institute). Movements calculated for this book.",
            ja:"出典：気象庁・中央気象署の平年値（一九九一〜二〇二〇年、ギターの手入れの頁と同じ）、ヒノキの収縮率は日本木材総合情報センターの樹種データベース（森林総合研究所による）。動きの量は本書で計算。",
            zh:"資料來源：日本氣象廳與中央氣象署 1991–2020 年氣候平年值（同吉他保養頁）；扁柏收縮係數取自日本木材綜合情報中心樹種資料庫（依森林綜合研究所資料）。變形量由本書計算。" } }
      ] },
    { t:"section",
      id:"stabilise",
      title:{ en:"Making wood hold still", ja:"木を動かなくする", zh:"讓木材不再變形" },
      jp:"寸法安定化",
      body:[
        { t:"p",
          text:{
            en:"Woodworkers have always managed movement by design; wood scientists try to reduce it at source. Every method attacks the same thing — the water-attracting hydroxyl groups in the cell wall — either by destroying some of them, by blocking them, or by changing the wall's structure.",
            ja:"木工家はいつも設計で動きに対処してきた。木材の研究者は、それを源で減らそうとする。どの方法も同じもの——細胞壁のなかの、水を引きよせる水酸基——をねらい、その一部をこわすか、ふさぐか、壁のつくりを変える。",
            zh:"木工師傅向來以設計應對變形；木材科學家則試圖從源頭減少變形。每種方法針對的都是同一件事——細胞壁中吸引水分的羥基——或破壞其中一部分、或將其封閉、或改變細胞壁的結構。" } },
        { t:"defs",
          items:[
            { term:{ en:"Heat treatment", ja:"熱処理", zh:"熱處理" },
              jp:"ねつしょり",
              def:{
                en:"Heating wood to about 180–230 °C in steam or without oxygen breaks down part of the hemicellulose, so the wood takes up less water, swells less and resists decay better, at the cost of some strength and a darker, brittler material. The Nagano Prefectural Forestry Research Center treated larch, red pine, sugi and hinoki at up to 220 °C in steam (2020): all four swelled less, and more uniformly, than conventionally dried wood after a day under water, and all turned dark brown. Such timber is used mainly for decks, cladding and outdoor furniture.",
                ja:"木を蒸気中や無酸素で約百八十〜二百三十度に熱すると、ヘミセルロースの一部が分解し、水を吸いにくく、ふくらみにくく、腐りにくくなる。代わりに強さがいくらか落ち、色は濃く、もろくなる。長野県林業総合センターはカラマツ、アカマツ、スギ、ヒノキを蒸気中で最高二百二十度で処理し（二〇二〇年）、四樹種とも一日水に浸けたあとのふくらみが中温乾燥材より小さく、ばらつきも少なく、どれも黒褐色になった。こうした材はおもにデッキ、外壁、屋外の家具に使われる。",
                zh:"在蒸汽中或無氧條件下把木材加熱到約 180–230°C，會分解部分半纖維素，使木材吸水較少、膨脹較小、更耐腐朽，代價是強度略降、顏色變深且較脆。長野縣林業總合中心（2020 年）以蒸汽將落葉松、赤松、柳杉與扁柏加熱至最高 220°C：四個樹種浸水一天後的膨脹都比中溫乾燥材小且更均勻，且全部變成深褐色。這類木材主要用於露台、外牆與戶外家具。" } },
            { term:{ en:"Acetylation", ja:"アセチル化", zh:"乙醯化" },
              jp:"アセチルか",
              def:{
                en:"Reacting wood with acetic anhydride replaces many hydroxyl groups with acetyl groups, the same chemistry as in aspirin. The wood keeps its strength, swells far less and becomes very resistant to decay; a commercial acetylated radiata pine made in the Netherlands is sold worldwide, including in Japan, for windows and exterior joinery. It is expensive, and the vinegar smell of fresh boards fades only slowly.",
                ja:"木を無水酢酸と反応させると、多くの水酸基がアセチル基に置きかわる。アスピリンと同じ化学である。木は強さを保ち、ふくらみがずっと小さく、腐りにくくなる。オランダでつくられる市販のアセチル化ラジアータパインは、日本を含む世界で窓や屋外の建具に売られている。高価で、新しい板の酢のにおいはゆっくりとしか消えない。",
                zh:"以乙酸酐與木材反應，可把許多羥基置換為乙醯基——與阿斯匹靈相同的化學。木材保有強度、膨脹大幅減少，並極耐腐朽；荷蘭生產的商用乙醯化輻射松行銷全球，包括日本，用於窗戶與戶外門窗木作。價格昂貴，新板的醋味也要很久才會消散。" } },
            { term:{ en:"Compression", ja:"圧密化", zh:"壓密化" },
              jp:"あつみつか",
              def:{
                en:"Soft sugi can be steamed and pressed to collapse its cells and raise its density, as Hida Sangyō does for furniture and flooring (see <a href=\"sugi.html\">Sugi</a>). Unless the shape is fixed by further heat and steam, compressed wood tends to spring back when it gets wet — the process is as much about fixing as about pressing.",
                ja:"柔らかいスギは、蒸して圧し、細胞をつぶして密度を上げることができる。飛騨産業が家具や床材で行っている（<a href=\"sugi.html\">スギ</a>参照）。さらに熱と蒸気で形を固定しないかぎり、圧密した木は濡れると元に戻ろうとする。この加工は圧すことと同じほど固定することでもある。",
                zh:"柔軟的柳杉可經蒸煮加壓，壓潰細胞以提高密度，飛驒產業便以此製作家具與地板（見<a href=\"sugi.html\">日本柳杉</a>）。除非再以熱與蒸汽將形狀固定，壓密木材遇水時往往會回彈——這項工藝的關鍵，固定與加壓同樣重要。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Nagano Prefectural Forestry Research Center, heat treatment of prefectural conifers (2020); general wood-modification literature for temperature ranges and acetylation chemistry.",
            ja:"出典：長野県林業総合センター「県産針葉樹の熱処理について」（二〇二〇年）。温度範囲とアセチル化の化学は木材改質の一般的な文献による。",
            zh:"資料來源：長野縣林業總合中心〈縣產針葉樹的熱處理〉（2020 年）；溫度範圍與乙醯化化學依木材改質一般文獻。" } }
      ] },
    { t:"section",
      id:"thresholds",
      title:{ en:"Thresholds to remember", ja:"覚えておく境目", zh:"需要記住的門檻" },
      jp:"含水率の目安",
      body:[
        { t:"table",
          caption:{
            en:"What happens at different moisture contents (typical values)",
            ja:"含水率ごとに何が起こるか（典型的な値）",
            zh:"不同含水率下會發生什麼（典型數值）" },
          cols:[
            { en:"Moisture content", ja:"含水率", zh:"含水率" },
            { en:"Air in balance", ja:"つりあう空気", zh:"平衡空氣濕度" },
            { en:"What to expect", ja:"起こること", zh:"可能情況" }
          ],
          rows:[
            [
              { en:"Below about 6%", ja:"約6％未満", zh:"約 6% 以下" },
              { en:"Under 30% RH", ja:"相対湿度30％未満", zh:"相對濕度 30% 以下" },
              {
                en:"Cracks in tops and panels, loose joints, gaps in flooring",
                ja:"天板や板の割れ、仕口のゆるみ、床のすき間",
                zh:"面板與鑲板開裂、接合鬆動、地板出現縫隙" }
            ],
            [
              { en:"About 8–12%", ja:"約8〜12％", zh:"約 8–12%" },
              { en:"40–65% RH", ja:"相対湿度40〜65％", zh:"相對濕度 40–65%" },
              {
                en:"The comfortable indoor range for furniture and instruments",
                ja:"家具や楽器にとって心地よい室内の範囲",
                zh:"家具與樂器適宜的室內範圍" }
            ],
            [
              { en:"About 15%", ja:"約15％", zh:"約 15%" },
              { en:"About 75% RH", ja:"相対湿度約75％", zh:"相對濕度約 75%" },
              {
                en:"Japan's “air-dry” reference; fine for posts outdoors under cover",
                ja:"日本の「気乾」の基準。覆いのある屋外の柱には十分",
                zh:"日本「氣乾」基準；有遮蔽的戶外柱材沒有問題" }
            ],
            [
              { en:"Around 18–20%", ja:"約18〜20％", zh:"約 18–20%" },
              { en:"Over about 85% RH for long periods", ja:"相対湿度約85％超が長く続く", zh:"長期相對濕度超過約 85%" },
              { en:"Mould on surfaces becomes likely", ja:"表面にかびが生えやすくなる", zh:"表面容易長黴" }
            ],
            [
              { en:"Above about 25%", ja:"約25％超", zh:"約 25% 以上" },
              { en:"Liquid water: leaks, condensation, ground contact", ja:"液体の水：雨漏り、結露、地面との接触", zh:"液態水：漏水、結露、接觸地面" },
              {
                en:"Decay fungi can grow; termites are drawn to damp wood",
                ja:"腐朽菌が育ちうる。シロアリは湿った木に引きよせられる",
                zh:"腐朽菌可能生長；白蟻受潮濕木材吸引" }
            ]
          ] },
        { t:"p",
          text:{
            en:"The last line is the one that ends buildings. Wood exposed only to air, however humid, rarely gets wet enough to rot; decay starts where liquid water arrives — a leaking roof, a blocked gutter, a sill in contact with damp ground, or condensation inside a wall where warm, moist indoor air meets a cold surface. The traditional Japanese house, raised on stones with open, ventilated walls, dealt with the risk by letting water escape; the modern insulated house must deal with it by keeping water out of the wall in the first place. Decay and termites themselves are described in <a href=\"properties.html\">Physical Properties</a>.",
            ja:"最後の行が、建物を終わらせる行である。どれほど湿っていても空気にさらされているだけの木が腐るほど濡れることはまれで、腐れは液体の水が来るところから始まる。雨漏り、詰まった樋、湿った地面にふれる土台、そして暖かく湿った室内の空気が冷たい面に出会う壁のなかの結露である。石の上に建ち、壁を開けて風を通した伝統的な日本の家は、水を逃がすことで危険に対処した。断熱されたいまの家は、そもそも壁に水を入れないことで対処しなければならない。腐れとシロアリそのものは<a href=\"properties.html\">物理的性質</a>で述べている。",
            zh:"最後一行，正是終結建築的那一行。只接觸空氣的木材，再潮濕也很少濕到會腐朽；腐朽始於液態水到達之處——漏水的屋頂、堵塞的雨水槽、接觸潮濕地面的地檻，或溫暖潮濕的室內空氣遇上冷表面而在牆內產生的結露。傳統日本住宅架在石塊上、牆體開敞通風，靠讓水分散逸來應對風險；現代隔熱住宅則必須一開始就不讓水進入牆內。腐朽與白蟻本身的說明見<a href=\"properties.html\">物理性質</a>。" } }
      ] },
    { t:"related",
      items:[
        { href:"drying.html", why:{ en:"How sawmills dry timber.", ja:"製材所は材をどう乾かすか。", zh:"製材所如何乾燥木材。" } },
        { href:"joinery.html", why:{ en:"Joints that allow for movement.", ja:"動きを許す仕口。", zh:"容許變形的接合。" } },
        { href:"guitarcare.html", why:{ en:"Humidity and the acoustic guitar.", ja:"湿度とアコースティックギター。", zh:"濕度與木吉他。" } },
        { href:"care.html", why:{ en:"Looking after wooden things at home.", ja:"家で木のものを手入れする。", zh:"在家照顧木製品。" } }
      ] }
  ] };

/* ---- -------------------------------------------- carbon */
GIFU.pages["carbon"] = { kicker:{ en:"The Forest · 14", ja:"森 · 14", zh:"森林 · 14" },
  title:{ en:"Forests and Carbon", ja:"森と炭素", zh:"森林與碳" },
  jp:"吸収・貯蔵・代替",
  lede:{
    en:"Half the dry weight of wood is carbon, drawn from the air as carbon dioxide and fixed by photosynthesis. A forest is therefore a store of carbon, a growing forest is a sink for it, and a wooden building is a store that has been moved to town. This page explains how much carbon a cubic metre of Gifu timber holds, why Japan's forests are absorbing less each year as the plantations age, how harvested wood is counted in the national climate accounts, and why using wood in place of steel and concrete can matter as much as growing it.",
    ja:"木の乾いた重さの半分は炭素で、光合成によって空気中の二酸化炭素から取りこまれ固定されたものである。だから森は炭素の貯蔵庫であり、育つ森は炭素の吸収源であり、木造の建物は町へ移された貯蔵庫である。この頁は、岐阜の木材一立方メートルがどれだけの炭素をたくわえるか、人工林の高齢化とともに日本の森がなぜ年々吸収を減らしているか、伐った木が国の気候の勘定でどう数えられるか、そして鉄やコンクリートの代わりに木を使うことが、木を育てることと同じほど大事でありうるのはなぜかを説明する。",
    zh:"木材乾重的一半是碳，是透過光合作用從空氣中的二氧化碳吸收並固定下來的。因此森林是碳的儲存庫，生長中的森林是碳匯，而木造建築則是被搬進城裡的儲存庫。本頁說明一立方公尺的岐阜木材含有多少碳、日本森林為何隨人工林老化而逐年吸收得更少、伐下的木材如何計入國家氣候帳目，以及為何以木材取代鋼與混凝土，可能與種樹同樣重要。" },
  body:[
    { t:"section",
      id:"cubic",
      title:{ en:"The carbon in a cubic metre", ja:"一立方メートルの炭素", zh:"一立方公尺中的碳" },
      jp:"炭素貯蔵量",
      body:[
        { t:"p",
          text:{
            en:"The arithmetic is simple. Oven-dry wood is about 50 per cent carbon by weight, and each tonne of carbon corresponds to 3.67 tonnes of carbon dioxide. A cubic metre of sugi, with a basic density of roughly 0.31 tonnes of dry wood per cubic metre, therefore holds about 0.16 tonnes of carbon — the product of removing some 0.57 tonnes of CO₂ from the atmosphere. Hinoki, denser, holds more; beech and oak more still.",
            ja:"計算は簡単である。全乾の木は重さのおよそ五十パーセントが炭素で、炭素一トンは二酸化炭素三・六七トンにあたる。容積密度がおよそ一立方メートルあたり〇・三一トンのスギ一立方メートルは、したがっておよそ〇・一六トンの炭素をたくわえる——大気から約〇・五七トンのCO₂を取り除いた結果である。より重いヒノキはもっと多く、ブナやナラはさらに多い。",
            zh:"算法很簡單。全乾木材約有 50% 重量是碳，而每噸碳相當於 3.67 噸二氧化碳。柳杉的基本密度約為每立方公尺 0.31 噸乾木，因此一立方公尺柳杉約含 0.16 噸碳——相當於從大氣中移除約 0.57 噸 CO₂。密度較高的扁柏含碳更多，山毛櫸與橡木又更多。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Sugi", ja:"スギ", zh:"柳杉" },
              v:{ en:"≈ 0.57 t CO₂", ja:"約0.57 t-CO₂", zh:"約 0.57 t CO₂" },
              d:{ en:"per m³ of wood", ja:"材積一m³あたり", zh:"每立方公尺木材" } },
            { k:{ en:"Hinoki", ja:"ヒノキ", zh:"扁柏" },
              v:{ en:"≈ 0.75 t CO₂", ja:"約0.75 t-CO₂", zh:"約 0.75 t CO₂" },
              d:{ en:"basic density ≈ 0.41", ja:"容積密度 約0.41", zh:"基本密度約 0.41" } },
            { k:{ en:"Beech", ja:"ブナ", zh:"山毛櫸" },
              v:{ en:"≈ 1.0 t CO₂", ja:"約1.0 t-CO₂", zh:"約 1.0 t CO₂" },
              d:{ en:"basic density ≈ 0.55", ja:"容積密度 約0.55", zh:"基本密度約 0.55" } },
            { k:{ en:"A wooden house", ja:"木造住宅一戸", zh:"一棟木造住宅" },
              v:{ en:"≈ 6 t C", ja:"約6 t-C", zh:"約 6 t 碳" },
              d:{ en:"≈ 22 t CO₂ stored in its frame and finishes", ja:"軸組と仕上げに約22 t-CO₂を貯蔵", zh:"骨架與裝修中儲存約 22 t CO₂" } }
          ] },
        { t:"tiny",
          text:{
            en:"Basic density = oven-dry weight ÷ green volume, lower than the air-dry densities quoted elsewhere in this book. Carbon fraction taken as 0.5.",
            ja:"容積密度＝全乾重量÷生材の体積で、本書のほかで引く気乾比重より小さい。炭素の割合は〇・五とした。",
            zh:"基本密度＝全乾重量÷生材體積，低於本書其他地方引用的氣乾密度。碳比例取 0.5。" } }
      ] },
    { t:"section",
      id:"sink",
      title:{ en:"An ageing sink", ja:"老いてゆく吸収源", zh:"老化中的碳匯" },
      jp:"森林吸収量",
      body:[
        { t:"p",
          text:{
            en:"A forest absorbs carbon only while it is adding wood. Young, vigorous stands add the most each year; as trees mature, growth slows, and in very old forests growth and decay roughly balance, so that the store is large but the net uptake small. Japan's post-war plantations were planted over two decades and are now mostly between fifty and seventy years old — past their fastest growth. Gifu's forests show it clearly: their annual increment fell from a peak of about 2.04 million cubic metres in fiscal 2016 to about 1.48 million in fiscal 2021. Nationally the forest sink has been shrinking for two decades, and the government counts on renewed harvesting and replanting to reverse the trend.",
            ja:"森が炭素を吸収するのは、木を増やしているあいだだけである。若く勢いのある林は年ごとに最も多くを加え、木が成熟するにつれて成長は鈍り、とても古い森では成長と腐朽がほぼつりあって、貯蔵は大きいが正味の吸収は小さい。日本の戦後の人工林は二十年ほどのあいだに植えられ、いまその多くは五十〜七十年生で、最も速く育つ時期を過ぎている。岐阜の森はそれをはっきり示す。その年間成長量は、二〇一六年度の頂点およそ二百四万立方メートルから、二〇二一年度にはおよそ百四十八万に落ちた。全国でも森の吸収量は二十年にわたって縮んでおり、政府はその流れを逆転させるため、伐採と再造林のやり直しに期待をかけている。",
            zh:"森林只在木材持續增加時才會吸收碳。年輕旺盛的林分每年增加最多；隨著樹木成熟，生長趨緩；在極老的森林中，生長與腐朽大致平衡，因此儲量雖大、淨吸收卻小。日本戰後人工林在約二十年間種下，如今多為五十到七十年生——已過了生長最快的時期。岐阜的森林清楚顯示這一點：其年生長量從 2016 年度高峰約 204 萬立方公尺，降到 2021 年度約 148 萬。全國森林碳匯也已縮減二十年，政府寄望於恢復伐採與重新造林來扭轉趨勢。" } },
        { t:"figure",
          caption:{
            en:"Annual carbon uptake of a sugi or hinoki plantation against its age, schematic. Uptake peaks in the second to fourth decade and declines thereafter, while the total stored keeps rising more slowly. The shaded band marks where most of Japan's plantations stand today.",
            ja:"スギ・ヒノキ人工林の年間炭素吸収量と林齢（模式図）。吸収は二十〜四十年代に頂点を迎え、その後は減るが、貯蔵の総量はゆるやかに増えつづける。印をつけたのが、いま日本の人工林の多くがいるところである。",
            zh:"柳杉或扁柏人工林的年碳吸收量與林齡關係（示意）。吸收量在第二至第四個十年達到高峰，此後下降，而總儲量仍緩慢增加。標記處為日本大多數人工林目前所在的位置。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"Uptake and storage with age", ja:"林齢と吸収・貯蔵", zh:"林齡與吸收、儲存" },
            unit:{ en:"relative scale", ja:"相対値", zh:"相對值" },
            x0:0, x1:100, y0:0, y1:100, tick:25, xt:[0,20,40,60,80,100],
            series:[
              { n:{ en:"Annual uptake", ja:"年間吸収量", zh:"年吸收量" }, dots:false, pts:[[0,2],[5,10],[10,35],[15,62],[20,82],[25,95],[30,100],[35,97],[40,90],[50,72],[60,56],[70,44],[80,36],[90,30],[100,26]] },
              { n:{ en:"Total stored", ja:"貯蔵の総量", zh:"總儲量" }, dash:"5 4", dots:false, pts:[[0,0],[10,4],[20,18],[30,36],[40,53],[50,66],[60,76],[70,84],[80,90],[90,95],[100,99]] }
            ],
            marks:[ { x:50, t:{ en:"most Japanese plantations: 50–70 yrs", ja:"日本の人工林の多く：五十〜七十年", zh:"日本多數人工林：50–70 年" } }, { x:70, t:{ en:"", ja:"", zh:"" } } ],
            note:{ en:"Horizontal axis: stand age in years.", ja:"横軸：林齢（年）。", zh:"橫軸：林齡（年）。" } }); } },
        { t:"p",
          text:{
            en:"In fiscal 2023 Japan's gross greenhouse-gas emissions were about 1.017 billion tonnes of CO₂ equivalent, and removals by forests and other land about 53.7 million tonnes — roughly five per cent. Forests are therefore an important but limited part of the national climate effort; they cannot offset emissions on anything like the present scale, and their contribution will fall further unless the age structure of the plantations is renewed.",
            ja:"二〇二三年度、日本の温室効果ガスの総排出量は二酸化炭素換算でおよそ十億一千七百万トン、森林などによる吸収量はおよそ五千三百七十万トン——およそ五パーセント——だった。だから森は国の気候対策の大事な、しかし限られた一部であり、いまの規模の排出をとても相殺できず、人工林の齢級構成が更新されなければ、その寄与はさらに落ちる。",
            zh:"2023 年度，日本溫室氣體總排放量約為 10.17 億噸 CO₂ 當量，森林等土地的吸收量約 5,370 萬噸——大約 5%。因此森林是國家氣候行動中重要但有限的一環；它無法抵銷目前規模的排放，而且若人工林的齡級結構不更新，其貢獻還會進一步下降。" } }
      ] },
    { t:"section",
      id:"hwp",
      title:{ en:"Carbon that leaves the forest", ja:"森を出ていく炭素", zh:"離開森林的碳" },
      jp:"伐採木材製品",
      body:[
        { t:"p",
          text:{
            en:"When a tree is cut, its carbon is not released at once. Branches and bark left on site decompose over years; chips burned for energy release their carbon immediately; but sawn timber in a house, furniture or a guitar keeps its carbon for as long as the object lasts — decades for a house, centuries for a temple. Since 2013, under international rules, Japan counts the carbon stored in harvested wood products from domestic forests in its climate inventory, so that timber used in long-lived products is no longer treated as though it were emitted on felling.",
            ja:"木が伐られても、その炭素がすぐに放たれるわけではない。現場に残された枝や樹皮は何年もかけて分解し、燃料として燃やされたチップはすぐに炭素を放つ。しかし家や家具やギターになった製材は、そのものがもつかぎり炭素を保つ——家なら何十年、寺なら何世紀。二〇一三年から国際的な規則のもとで、日本は国内の森から伐られた木材製品にたくわえられた炭素を温室効果ガスの目録に数えている。長く使われる製品になった木材は、もはや伐ったときに排出されたものとして扱われない。",
            zh:"樹木被伐時，其碳並不會立即釋放。留在林地的枝條與樹皮會在數年間分解；作為能源燒掉的木片會立刻釋放碳；但成為住宅、家具或吉他的製材，只要物件存在就一直保存著碳——住宅數十年，寺廟數百年。自 2013 年起，依國際規則，日本將取自國內森林之伐採木材製品所儲存的碳計入溫室氣體清冊，使用於長壽命產品的木材，不再被視為伐採時即已排放。" } },
        { t:"figure",
          caption:{
            en:"Carbon stored in, and emitted in making the materials of, a typical Japanese detached house, by construction type, in tonnes of carbon. From an often-cited Japanese study by Okazaki and Ōkuma (1990s); absolute values depend on house size and assumptions, but the contrast has been confirmed repeatedly.",
            ja:"構造別に見た典型的な日本の戸建て住宅の、材料にたくわえられた炭素と、材料の製造で放出された炭素（炭素トン）。よく引かれる岡崎・大熊の研究（一九九〇年代）による。絶対値は住宅の大きさと前提によるが、その対比はくり返し確かめられている。",
            zh:"依構造類型比較典型日本獨棟住宅：材料中儲存的碳，以及製造材料時排放的碳（噸碳）。引自常被引用的日本岡崎與大熊研究（1990 年代）；絕對值取決於住宅大小與假設，但其對比已多次獲得證實。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"One house, tonnes of carbon", ja:"住宅一戸（炭素トン）", zh:"一棟住宅（噸碳）" }, labelW:325, dec:1, rowH:28,
            items:[
              { n:{ en:"Timber frame — stored", ja:"木造——貯蔵", zh:"木造——儲存" }, v:6.0, f:"#E0E6DB" },
              { n:{ en:"Timber frame — emitted in manufacture", ja:"木造——製造時放出", zh:"木造——製造排放" }, v:5.1, f:"#EEE1DF" },
              { n:{ en:"Steel frame — stored", ja:"鉄骨プレハブ——貯蔵", zh:"鋼骨預鑄——儲存" }, v:1.5, f:"#E0E6DB" },
              { n:{ en:"Steel frame — emitted in manufacture", ja:"鉄骨プレハブ——製造時放出", zh:"鋼骨預鑄——製造排放" }, v:14.7, f:"#EEE1DF" },
              { n:{ en:"Reinforced concrete — stored", ja:"鉄筋コンクリート——貯蔵", zh:"鋼筋混凝土——儲存" }, v:1.6, f:"#E0E6DB" },
              { n:{ en:"Reinforced concrete — emitted in manufacture", ja:"鉄筋コンクリート——製造時放出", zh:"鋼筋混凝土——製造排放" }, v:21.8, f:"#EEE1DF" }
            ] }); } },
        { t:"p",
          text:{
            en:"The figure shows the second, and in the long run perhaps larger, climate benefit of wood: substitution. Producing steel, cement and aluminium requires great quantities of fossil energy, and cement releases CO₂ chemically as limestone is burned. A timber structure that replaces them avoids those emissions altogether. This is the logic behind Japan's 2010 law promoting wood in public buildings and its 2021 extension to all buildings, and behind Gifu's own wood-first policies. See <a href=\"woodfirst.html\">Putting Wood to Use</a>.",
            ja:"図は木の二つ目の、長い目で見ればより大きいかもしれない気候への効用を示す。代替である。鉄、セメント、アルミニウムの生産は大量の化石エネルギーを要し、セメントは石灰石を焼くときに化学的にCO₂を出す。それらに代わる木造の構造は、その排出をまるごと避ける。二〇一〇年の公共建築物に木材利用を促す日本の法律と、二〇二一年のすべての建築物へのその拡大、そして岐阜自身の木材優先の施策の背後にある論理である。<a href=\"woodfirst.html\">木づかい</a>を参照。",
            zh:"這張圖顯示木材第二項、長遠來看也許更大的氣候效益：替代。生產鋼、水泥與鋁需要大量化石能源，水泥在燒製石灰石時還會以化學方式釋放 CO₂。以木構造取代它們，便能完全避免這些排放。這正是日本 2010 年促進公共建築使用木材的法律、2021 年將其擴大至所有建築，以及岐阜自身木材優先政策背後的邏輯。見<a href=\"woodfirst.html\">用木之道</a>。" } }
      ] },
    { t:"section",
      id:"cautions",
      title:{ en:"Cautions", ja:"注意すべきこと", zh:"需要注意之處" },
      jp:"議論",
      body:[
        { t:"ul",
          items:[
            {
              en:"Carbon benefits depend on replanting. A forest cut and not regrown is a one-time release, not a cycle.",
              ja:"炭素の効用は再造林にかかっている。伐られて育て直されない森は、循環ではなく一度きりの放出である。",
              zh:"碳效益取決於重新造林。伐後不再生長的森林是一次性的釋放，而非循環。" },
            {
              en:"Long-lived products matter most. Timber that becomes a disposable pallet or is burned within a few years stores little.",
              ja:"大事なのは長もちする製品である。使い捨てのパレットになったり数年で燃やされたりする材は、ほとんど貯蔵しない。",
              zh:"長壽命產品最關鍵。成為拋棄式棧板或數年內就被燒掉的木材，幾乎儲存不了碳。" },
            {
              en:"Transport and drying have costs. Kiln-drying and long-distance haulage add emissions, which is one argument for local timber.",
              ja:"運搬と乾燥にも費用がある。人工乾燥と長距離の運搬は排出を増やす。地元の材を使う理由の一つである。",
              zh:"運輸與乾燥也有代價。窯乾與長途運輸會增加排放，這是使用在地木材的理由之一。" },
            {
              en:"Forests store carbon in soil too. Clear-felling steep slopes can release soil carbon and cause erosion; methods matter.",
              ja:"森は土にも炭素をたくわえる。急斜面の皆伐は土の炭素を放ち、侵食を招きうる。やり方が大事である。",
              zh:"森林也在土壤中儲存碳。陡坡皆伐可能釋放土壤碳並造成侵蝕；方法很重要。" },
            {
              en:"Old forests should stay old. Their stores are irreplaceable on any human timescale; the argument for harvesting applies to plantations.",
              ja:"古い森は古いままに。その貯蔵は人の時間では取り返しがつかない。伐採の論理があてはまるのは人工林である。",
              zh:"老齡林應維持原樣。它們的儲量在人類時間尺度上無可取代；伐採的論點適用於人工林。" }
          ] },
        { t:"quote",
          text:{ en:"Cut, use, plant, and tend.", ja:"伐って、使って、植えて、育てる。", zh:"伐採、利用、栽植、撫育。" },
          cite:{
            en:"The Forestry Agency's shorthand for the forest cycle it hopes to restore",
            ja:"林野庁が取り戻そうとする森の循環を表す標語",
            zh:"林野廳用以概括其希望恢復之森林循環的口號" } }
      ] },
    { t:"section",
      id:"accounting",
      title:{ en:"How a forest is counted", ja:"森はどう数えられるか", zh:"森林如何計入" },
      jp:"森林吸収量の算定",
      body:[
        { t:"p",
          text:{
            en:"Under the international climate rules a country cannot simply claim every tonne of carbon its trees absorb. Japan counts removals only from forests that are being looked after: planted forests that have received thinning, planting or other management since 1990, and natural forests protected by law, such as protection forests and parks. An unthinned plantation, however fast it grows, earns no credit in the national accounts. That rule is why Japan's climate policy pays for thinning, and why a neglected forest is a climate problem as well as a forestry one. The amounts are estimated each year from the national forest inventory and from satellite images, and the figures for earlier years are revised as the methods improve.",
            ja:"国際的な気候の取り決めのもとでは、国は木が吸った炭素をすべて自分のものとして数えられるわけではない。日本が吸収を数えるのは、手入れされている森だけである。一九九〇年以降に間伐や植栽などの施業を受けた人工林と、保安林や公園のように法で守られた天然林である。手入れされない人工林は、どれほど速く育っても国の勘定では吸収にならない。日本の気候政策が間伐に金を出すのはこの規則のためであり、放置された森が林業の問題であると同時に気候の問題でもあるのもそのためである。量は毎年、全国の森林資源の調査と衛星画像から推計され、手法の改良にあわせて過去の年の値も計算し直される。",
            zh:"依國際氣候規則，一個國家不能把樹木吸收的每一噸碳都算在自己名下。日本只計入有人照管的森林所產生的移除量：1990 年以來曾接受疏伐、栽植或其他經營作業的人工林，以及受法律保護的天然林，例如保安林與公園。未疏伐的人工林無論長得多快，在國家帳上都不算吸收。正是這條規則，使日本的氣候政策為疏伐出資；也因此，荒廢的森林既是林業問題，也是氣候問題。吸收量每年依全國森林資源調查與衛星影像推估，並隨方法改進回頭重算過去年度的數值。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Japan's forest sink, FY2023", ja:"日本の森林吸収量（二〇二三年度）", zh:"日本森林吸收量（2023 年度）" },
              v:{ en:"≈ 45.2 Mt CO₂", ja:"約4,517万t-CO₂", zh:"約 4,517 萬 t CO₂" },
              d:{ en:"About 3.2% of FY2013 emissions", ja:"二〇一三年度総排出量の約3.2％", zh:"約為 2013 年度總排放量的 3.2%" } },
            { k:{ en:"of which forests", ja:"うち森林", zh:"其中森林" },
              v:{ en:"≈ 41.9 Mt", ja:"約4,187万t", zh:"約 4,187 萬 t" },
              d:{ en:"Managed forests only", ja:"手入れされた森のみ", zh:"僅計受經營管理的森林" } },
            { k:{ en:"of which wood products", ja:"うち伐採木材製品", zh:"其中伐採木材製品" },
              v:{ en:"≈ 3.3 Mt", ja:"約330万t", zh:"約 330 萬 t" },
              d:{ en:"Net growth of the store in domestic timber", ja:"国産材の製品にたまる量の正味の増加", zh:"國產材製品中儲碳量的淨增加" } },
            { k:{ en:"Target for FY2030", ja:"二〇三〇年度の目標", zh:"2030 年度目標" },
              v:{ en:"≈ 38 Mt", ja:"約3,800万t", zh:"約 3,800 萬 t" },
              d:{ en:"2.7% of FY2013 emissions", ja:"二〇一三年度総排出量比2.7％", zh:"為 2013 年度總排放量的 2.7%" } }
          ] },
        { t:"p",
          text:{
            en:"The target is lower than today's figure, not higher. That is not modesty but arithmetic: the plantations are ageing and growing more slowly, so the government expects the sink to shrink before replanting can restore it. Gifu's own climate plan of March 2021 shows the same curve at prefectural scale. It estimated the uptake of the prefecture's forests at about 2.24 million tonnes of CO₂ in FY2014 and 1.92 million in FY2019, and projected about 1.38 million for FY2030 — a fall of nearly 40 per cent in sixteen years — while counting on that uptake towards its goal of cutting net emissions by 33 per cent from FY2013.",
            ja:"目標はいまの値より高いのではなく低い。控えめなのではなく算術である。人工林は老いて成長が遅くなっているので、政府は再造林が回復させる前に吸収源が縮むと見ている。岐阜県の二〇二一年三月の地球温暖化対策の計画は、県の規模で同じ曲線を示す。県の森林の吸収量を二〇一四年度に約二百二十四万トン、二〇一九年度に百九十二万トンと見積もり、二〇三〇年度には約百三十八万トン——十六年でほぼ四割減——と見込む一方、二〇一三年度から正味の排出を三十三パーセント減らすという目標に、その吸収を算入している。",
            zh:"目標值比現在低，而不是更高。這不是保守，而是算術：人工林逐漸老化、生長變慢，政府預期在重新造林恢復碳匯之前，碳匯會先縮小。岐阜縣 2021 年 3 月的氣候計畫，在縣的尺度上呈現同樣的曲線：估計縣內森林吸收量 2014 年度約 224 萬噸 CO₂、2019 年度 192 萬噸，並預估 2030 年度約 138 萬噸——十六年內減少近四成；同時把這部分吸收量計入其自 2013 年度起淨排放減少 33% 的目標。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, “Results of the FY2023 forest sink calculation (final)”; Gifu Prefecture, Climate Change and Global Warming Countermeasures Plan (March 2021).",
            ja:"出典：林野庁「二〇二三年度森林吸収量の算定結果について（確報値）」、岐阜県「岐阜県地球温暖化防止・気候変動適応計画」（二〇二一年三月）。",
            zh:"資料來源：林野廳〈2023 年度森林吸收量計算結果（確定值）〉；岐阜縣《岐阜縣地球暖化防止・氣候變遷調適計畫》（2021 年 3 月）。" } }
      ] },
    { t:"section",
      id:"stock",
      title:{ en:"How much carbon Gifu's plantations hold", ja:"岐阜の人工林の炭素", zh:"岐阜人工林的儲碳量" },
      jp:"炭素蓄積の概算",
      body:[
        { t:"p",
          text:{
            en:"The annual sink is a flow; the stock standing in the forest is far larger. The prefecture put the growing stock of its planted forests at about 100.6 million cubic metres of stemwood in FY2019, of which about 50.2 million was hinoki and 45.9 million sugi. A rough calculation with the conversion factors used in Japan's inventory — basic densities of about 0.41 for hinoki and 0.31 for sugi, half the dry weight as carbon — puts the carbon in those stems at about 17 million tonnes, equal to some 64 million tonnes of CO₂. Adding branches, foliage and roots, which the inventory counts with expansion factors, raises it to roughly 100 million tonnes of CO₂. The natural broadleaf forests, which cover more of the prefecture than the plantations, hold more on top. Set against an annual uptake of about 2 million tonnes, the stock is some fifty years' worth — which is why how and when it is harvested matters as much as how fast it grows.",
            ja:"毎年の吸収は流れであり、森に立つ蓄積ははるかに大きい。県は二〇一九年度の人工林の蓄積を幹の材積で約一億五十七万立方メートル、うちヒノキ約五千二十三万、スギ約四千五百九十二万としている。国の算定で使う換算係数——容積密度ヒノキ約〇・四一、スギ約〇・三一、乾いた重さの半分が炭素——でおおまかに計算すると、幹の炭素は約千七百万トン、CO₂にして約六千四百万トンになる。算定で拡大係数によって数える枝・葉・根を加えると、およそ一億トンのCO₂に達する。人工林より広く県をおおう天然の広葉樹林は、これに上乗せしてさらに炭素をたくわえる。年に約二百万トンの吸収とくらべれば、蓄積はおよそ五十年分にあたる。どれだけ速く育つかと同じくらい、いつどう伐るかが大事なのはそのためである。",
            zh:"每年的吸收量是流量，森林中的立木蓄積則大得多。縣府估計 2019 年度人工林蓄積約為樹幹材積 1 億 57 萬立方公尺，其中扁柏約 5,023 萬、柳杉約 4,592 萬。以日本溫室氣體清冊所用的換算係數——扁柏基本密度約 0.41、柳杉約 0.31，乾重的一半為碳——粗略計算，這些樹幹中的碳約 1,700 萬噸，相當於約 6,400 萬噸 CO₂。再加上清冊以擴展係數計入的枝、葉與根，約達 1 億噸 CO₂。面積比人工林更大的天然闊葉林，還另外儲存更多碳。與每年約 200 萬噸的吸收量相比，蓄積約相當於五十年的份量——這正是為何「何時、如何伐採」與「長得多快」同樣重要。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, guide to timber procurement for medium and large timber buildings (growing stock, FY2019). Carbon figures are this book's rough calculation; expansion to whole trees assumes typical inventory factors (about 1.2–1.3 for branches and 0.25 for roots) and is indicative only.",
            ja:"出典：岐阜県 中大規模木造建築ガイド「木材・木材調達」（蓄積、二〇一九年度）。炭素の値は本書によるおおまかな計算。木全体への拡大は算定で一般的な係数（枝葉に約一・二〜一・三、根に〇・二五）を仮定した目安である。",
            zh:"資料來源：岐阜縣中大規模木造建築指南〈木材・木材採購〉（蓄積，2019 年度）。碳量為本書粗略計算；擴展至全株時假設清冊常用係數（枝葉約 1.2–1.3、根 0.25），僅供參考。" } }
      ] },
    { t:"section",
      id:"credits",
      title:{ en:"Selling the sink: J-Credits", ja:"吸収を売る：J-クレジット", zh:"出售碳匯：J-信用額度" },
      jp:"J-クレジット",
      body:[
        { t:"p",
          text:{
            en:"Japan's government-run J-Credit scheme lets the owner of a well-managed forest sell part of its extra uptake as certified credits, which companies buy to offset emissions or for their climate reporting. A forest project has to follow an approved method — for forest management, for new planting, or for replanting after harvest — keep a plan, be monitored and verified, and may only claim removals over and above what would have happened without the project. The volumes are small and the paperwork heavy, so most projects are run by prefectures, municipalities, cooperatives and large owners.",
            ja:"国が運営するJ-クレジット制度は、よく手入れされた森の所有者が、その追加の吸収の一部を認証されたクレジットとして売ることを認める。企業はそれを排出の埋め合わせや気候の報告のために買う。森林のプロジェクトは承認された方法論——森林経営活動、新たな植林、伐採後の再造林——にしたがい、計画をもち、モニタリングと検証を受け、プロジェクトがなかった場合を上回る吸収だけを主張できる。量は小さく手続きは重いので、プロジェクトの多くは県、市町村、森林組合、大きな所有者が担う。",
            zh:"日本政府營運的 J-信用額度（J-Credit）制度，允許經營良好的森林所有者，把部分額外吸收量作為經認證的信用額度出售，企業購買以抵銷排放或用於氣候報告。森林專案必須依循核准的方法學——森林經營活動、新植林或伐後再造林——擬定計畫、接受監測與查證，且只能主張超出「無專案情境」的移除量。由於量小而手續繁重，多數專案由縣、市町村、森林組合與大林主執行。" } },
        { t:"p",
          text:{
            en:"Gifu Prefecture sells credits from its own prefectural forest at Kuguno in Takayama. The first tranche of 700 tonnes of CO₂ went on sale in July 2024 at ¥11,000 per tonne including tax, and a further 989 tonnes were offered from April 2025 to February 2026, with four local banks and credit unions acting as matchmakers with local companies and a wooden certificate for buyers of 100 tonnes or more. The proceeds go back into managing the prefectural forest. At that price, the 989 tonnes are worth about ¥10.9 million — modest beside the value of the timber, but a payment for the forest's work that the log market does not make.",
            ja:"岐阜県は、高山市久々野の県営林からのクレジットを売っている。第一弾の七百トンは二〇二四年七月に一トン一万一千円（税込）で売り出され、二〇二五年四月から二〇二六年二月にはさらに九百八十九トンが売られた。地元の銀行・信用金庫四つが地元企業との仲立ちをし、百トン以上を買った者には木製の認定証が贈られる。収益は県営林の整備に戻される。この値段で九百八十九トンは約千九十万円になる。材の値にくらべれば小さいが、丸太の市場が払わない森の働きへの支払いである。",
            zh:"岐阜縣出售其位於高山市久久野的縣營林所產生的信用額度。第一批 700 噸 CO₂ 於 2024 年 7 月開賣，每噸含稅 11,000 日圓；2025 年 4 月至 2026 年 2 月再推出 989 噸，由四家在地銀行與信用金庫居中媒合在地企業，累計購買 100 噸以上者可獲木製認證狀。收益回饋縣營林的經營管理。以此價格計，989 噸約值 1,090 萬日圓——與木材價值相比不大，卻是原木市場不會支付的、對森林功能的報酬。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, press releases on J-Credit sales from the prefectural forest (3 July 2024; 28 March 2025). Total value calculated for this book.",
            ja:"出典：岐阜県 県営林J-クレジット販売開始の発表（二〇二四年七月三日、二〇二五年三月二十八日）。総額は本書で計算。",
            zh:"資料來源：岐阜縣縣營林 J-信用額度開賣公告（2024 年 7 月 3 日；2025 年 3 月 28 日）。總額由本書計算。" } }
      ] },
    { t:"section",
      id:"hwpdepth",
      title:{ en:"How long wood products keep carbon", ja:"木材製品はどれだけ炭素を保つか", zh:"木材製品能保存碳多久" },
      jp:"半減期",
      body:[
        { t:"p",
          text:{
            en:"The wood-products line in the national accounts rests on a simple model. Each year's output of timber from domestic forests is added to a notional store, and a fixed share of the store is assumed to be retired each year, so that it decays like a radioactive isotope with a characteristic half-life. The international default half-lives are 35 years for sawn timber, 25 for wood panels such as plywood, and 2 for paper; Japan applies the method to timber from its own forests only, so imported wood counts in the exporting country's books. The store grows only while additions exceed retirements. That is why the 3.3 million tonnes for FY2023 depends on the harvest being turned into long-lived products: the same logs chipped for paper or burned for power add almost nothing.",
            ja:"国の勘定の木材製品の項目は、簡単な模型にもとづいている。国内の森から出た材の毎年の生産を仮想の貯蔵に加え、その一定の割合が毎年使い終えられると仮定する。すると貯蔵は放射性同位体のように、決まった半減期で減ってゆく。国際的な既定の半減期は、製材が三十五年、合板などの木質パネルが二十五年、紙が二年である。日本はこの方法を自国の森から出た材にだけ適用するので、輸入材は輸出国の帳簿に入る。貯蔵が増えるのは、加わる量が使い終えられる量を上回るあいだだけである。二〇二三年度の三百三十万トンが、伐った木を長もちする製品に変えることにかかっているのはそのためである。同じ丸太も、紙のためにチップにしたり発電で燃やしたりすれば、ほとんど何も加えない。",
            zh:"國家帳上「木材製品」一項，建立在一個簡單的模型上。每年由國內森林產出的木材，被加入一個概念上的儲存庫，並假設每年有固定比例被淘汰，使儲存量像放射性同位素一樣以特定半衰期衰減。國際預設半衰期為：製材 35 年、合板等木質板材 25 年、紙 2 年；日本只對來自本國森林的木材套用此法，因此進口木材計入出口國的帳上。只有在新增量大於淘汰量時，儲存才會增加。這就是 2023 年度的 330 萬噸取決於把伐下的木材做成長壽命產品的原因：同樣的原木若削片造紙或燒掉發電，幾乎什麼也加不進去。" } },
        { t:"table",
          caption:{
            en:"Default half-lives for harvested wood products (IPCC)",
            ja:"伐採木材製品の既定の半減期（IPCC）",
            zh:"伐採木材製品的預設半衰期（IPCC）" },
          cols:[
            { en:"Product", ja:"製品", zh:"產品" },
            { en:"Half-life", ja:"半減期", zh:"半衰期" },
            { en:"Carbon left after 50 years", ja:"五十年後に残る炭素", zh:"50 年後剩餘的碳" }
          ],
          numCols:[2],
          rows:[
            [{ en:"Sawn timber", ja:"製材", zh:"製材" }, { en:"35 years", ja:"三十五年", zh:"35 年" }, "≈ 37%"],
            [{ en:"Wood panels", ja:"木質パネル", zh:"木質板材" }, { en:"25 years", ja:"二十五年", zh:"25 年" }, "≈ 25%"],
            [{ en:"Paper", ja:"紙", zh:"紙" }, { en:"2 years", ja:"二年", zh:"2 年" }, "≈ 0%"]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: IPCC Guidelines for National Greenhouse Gas Inventories (harvested wood products, default half-lives); Forestry Agency, FY2023 forest sink results. Remaining fractions calculated for this book (0.5 to the power of 50 ÷ half-life).",
            ja:"出典：IPCC 国別温室効果ガスインベントリ・ガイドライン（伐採木材製品の既定の半減期）、林野庁 二〇二三年度森林吸収量の算定結果。残る割合は本書で計算（〇・五の「五十÷半減期」乗）。",
            zh:"資料來源：IPCC《國家溫室氣體清冊指南》（伐採木材製品預設半衰期）；林野廳 2023 年度森林吸收量計算結果。剩餘比例由本書計算（0.5 的「50÷半衰期」次方）。" } }
      ] },
    { t:"section",
      id:"substitution",
      title:{ en:"Substitution, measured", ja:"代替効果を測る", zh:"量化替代效果" },
      jp:"代替効果",
      body:[
        { t:"p",
          text:{
            en:"Substitution — the emissions avoided when wood replaces steel, concrete or plastics — is harder to count than storage, because it depends on what the wood replaced and how that material would have been made. Researchers express it as a displacement factor: tonnes of carbon emissions avoided per tonne of carbon in the wood product. A widely cited meta-analysis by Sathre and O'Connor (2010), covering 21 studies, found an average of about 2.1 for wood used in construction, with a very wide range; a later review for the European Forest Institute by Leskinen and colleagues (2018), drawing on 51 studies, found an average of about 1.2 across all kinds of products. Both put the effect in the same direction: a tonne of carbon in a timber frame usually avoids more than a tonne of fossil carbon elsewhere. The benefit is real but not automatic — it vanishes if the wood merely adds to construction rather than replacing something, and it shrinks as steel and cement are made with cleaner energy.",
            ja:"代替効果——木が鉄やコンクリートやプラスチックにかわるときに避けられる排出——は、貯蔵よりも数えにくい。木が何にかわったのか、その材料がどう作られたはずかによるからである。研究者はこれを代替係数で表す。木材製品のなかの炭素一トンあたり、避けられた炭素排出のトン数である。広く引かれるサスレとオコナーのメタ分析（二〇一〇年）は二十一の研究から、建築に使う木の平均をおよそ二・一とし、幅はきわめて広かった。のちにレスキネンらが欧州森林研究所のためにまとめた総説（二〇一八年）は五十一の研究から、あらゆる製品の平均をおよそ一・二とした。どちらも向きは同じである。木の軸組のなかの炭素一トンは、ふつう、ほかの場所で一トンを超える化石の炭素を避ける。効用は本物だが自動ではない。木が何かにかわるのではなく建設に上乗せされるだけなら消え、鉄やセメントがきれいなエネルギーで作られるようになるほど小さくなる。",
            zh:"替代效果——以木材取代鋼鐵、混凝土或塑膠時所避免的排放——比儲存更難計算，因為它取決於木材取代了什麼，以及那種材料原本會如何生產。研究者以「替代係數」表示：木材製品中每一噸碳所避免的碳排放噸數。Sathre 與 O'Connor（2010 年）一項廣受引用的統合分析涵蓋 21 項研究，得出建築用木材平均約 2.1，範圍極廣；Leskinen 等人（2018 年）為歐洲森林研究所所作的後續回顧，彙整 51 項研究，得出各類產品平均約 1.2。兩者方向一致：木構架中的一噸碳，通常能在別處避免超過一噸的化石碳。效益是真實的，但並非自動成立——若木材只是加在建設之上而沒有取代任何東西，效益便消失；隨著鋼鐵與水泥以更潔淨的能源生產，效益也會縮小。" } },
        { t:"tiny",
          text:{
            en:"Sources: Sathre R. and O'Connor J., “Meta-analysis of greenhouse gas displacement factors of wood product use”, Environmental Science & Policy 13 (2010); Leskinen P. et al., “Substitution effects of wood-based products in climate change mitigation”, European Forest Institute, From Science to Policy 7 (2018).",
            ja:"出典：Sathre, R. & O'Connor, J.「木材製品利用の温室効果ガス代替係数のメタ分析」Environmental Science & Policy 13（二〇一〇年）、Leskinen, P. ほか「気候変動緩和における木質製品の代替効果」欧州森林研究所 From Science to Policy 7（二〇一八年）。",
            zh:"資料來源：Sathre, R. 與 O'Connor, J.〈木材製品使用之溫室氣體替代係數統合分析〉，Environmental Science & Policy 13（2010 年）；Leskinen, P. 等〈木質產品在氣候變遷減緩中的替代效果〉，歐洲森林研究所 From Science to Policy 7（2018 年）。" } }
      ] },
    { t:"section",
      id:"household",
      title:{ en:"What a wooden house stores", ja:"木の家がたくわえるもの", zh:"一棟木屋儲存了什麼" },
      jp:"炭素貯蔵量の表示",
      body:[
        { t:"p",
          text:{
            en:"Since October 2021 the Forestry Agency has published a guideline that lets builders state how much carbon the wood in a building stores, so that a school, an office or a house can carry a figure that buyers and tenants can compare. The formula is the one on this page: volume of wood × density × carbon fraction (0.5 for sawn timber) × 44/12 to convert carbon to CO₂. The guideline uses oven-dry weight per air-dry volume, about 0.38 for sugi and 0.44 for hinoki, so a cubic metre of sugi lumber in a building is credited with about 0.70 tonnes of CO₂ and of hinoki about 0.81.",
            ja:"二〇二一年十月から林野庁は、建物の木がどれだけ炭素をたくわえるかを示すためのガイドラインを出しており、学校や事務所や家が、買い手や借り手がくらべられる数字をもてるようになった。式はこの頁のものと同じである。木の材積×密度×炭素の割合（製材は〇・五）×CO₂に換えるための四十四分の十二。ガイドラインは気乾の体積あたりの全乾の重さ、スギで約〇・三八、ヒノキで約〇・四四を使うので、建物のなかのスギ製材一立方メートルは約〇・七〇トン、ヒノキは約〇・八一トンのCO₂を貯蔵するとされる。",
            zh:"自 2021 年 10 月起，林野廳發布指引，讓營造者標示建築中木材儲存的碳量，使學校、辦公室或住宅都能附上買家與租戶可以比較的數字。公式與本頁相同：木材材積×密度×碳比例（製材為 0.5）×44/12（由碳換算為 CO₂）。指引採用每單位氣乾體積的全乾重量，柳杉約 0.38、扁柏約 0.44，因此建築中一立方公尺柳杉製材計為儲存約 0.70 噸 CO₂，扁柏約 0.81 噸。" } },
        { t:"p",
          text:{
            en:"For a whole house the result is a few tens of tonnes. A Japanese post-and-beam house is commonly said to use about 0.2 cubic metres of timber per square metre of floor, so a 120 m² house holds some 24 cubic metres of wood and, at the guideline's factors, roughly 17 to 20 tonnes of CO₂ — held out of the air for as long as the house stands. In Gifu, where many houses use hinoki for posts and sills and sugi for beams and boards, the figure sits at the upper end. A house that lasts sixty years instead of thirty doubles the time that carbon is kept out of the air; one that is dismantled and its timbers reused, as Gifu's old farmhouses so often were, keeps it longer still. See <a href=\"home.html\">Wood in the Home</a>.",
            ja:"家一軒では、結果は数十トンになる。日本の木造軸組の家は床面積一平方メートルあたり約〇・二立方メートルの木を使うとよくいわれるので、百二十平方メートルの家には約二十四立方メートルの木があり、ガイドラインの係数でおよそ十七〜二十トンのCO₂をたくわえる。それが、家が立っているかぎり大気の外に保たれる。柱や土台にヒノキ、梁や板にスギを使う家の多い岐阜では、値はその上のほうになる。三十年ではなく六十年もつ家は、炭素を大気から遠ざけておく時間を倍にし、岐阜の古い民家がしばしばそうされたように解体して材を再び使えば、さらに長く保つ。<a href=\"home.html\">住まいと木</a>を参照。",
            zh:"整棟房子的結果是數十噸。一般說法是日本軸組構法住宅每平方公尺樓地板約使用 0.2 立方公尺木材，因此 120 平方公尺的住宅約有 24 立方公尺木材，依指引係數約儲存 17 至 20 噸 CO₂——只要房子屹立，這些碳就一直留在大氣之外。在岐阜，許多住宅柱與地檻用扁柏、樑與板用柳杉，數值落在這個範圍的上端。能用六十年而非三十年的房子，讓碳遠離大氣的時間加倍；若像岐阜老農家常見的那樣拆解後再利用木料，還能保存得更久。見<a href=\"home.html\">居家與木</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, guideline on displaying the carbon stored in wood used in buildings (1 October 2021). Timber per floor area is a commonly cited approximation; house totals calculated for this book.",
            ja:"出典：林野庁「建築物に利用した木材に係る炭素貯蔵量の表示に関するガイドライン」（二〇二一年十月一日）。床面積あたりの木材量はよく引かれる概数。住宅の合計は本書で計算。",
            zh:"資料來源：林野廳〈建築物使用木材之碳儲存量標示指引〉（2021 年 10 月 1 日）。每單位樓地板面積木材量為常見概數；住宅總量由本書計算。" } }
      ] },
    { t:"related",
      items:[
        { href:"silviculture.html", why:{ en:"Replanting and why it is hard.", ja:"再造林とその難しさ。", zh:"再造林及其困難。" } },
        { href:"woodfirst.html",
          why:{ en:"Laws and policies that promote wooden buildings.", ja:"木造建築を促す法と施策。", zh:"推動木造建築的法規與政策。" } },
        { href:"engineered.html",
          why:{ en:"CLT, glulam and the timber high-rise.", ja:"CLT、集成材、木造の高層。", zh:"CLT、集成材與木造高樓。" } },
        { href:"fuel.html",
          why:{ en:"Burning wood: when it helps and when it does not.", ja:"木を燃やすこと：役立つときとそうでないとき。", zh:"燒木材：何時有益、何時無益。" } }
      ] }
  ] };

/* ---- ---------------------------------------- forestyear */
GIFU.pages["forestyear"] = { kicker:{ en:"The Forest · 15", ja:"森 · 15", zh:"森林 · 15" },
  title:{ en:"The Forest Year", ja:"森の一年", zh:"森林的一年" },
  jp:"伐る季節・植える季節・祭りの季節",
  lede:{
    en:"Forest work in Gifu follows the seasons as closely as rice farming does. Trees are felled when they are dormant and the sap is down; seedlings go in when the snow has melted and the soil is moist; the weeds are cut in the worst heat of summer; timber dries through the dry winter. The crafts and festivals of the prefecture keep the same calendar — paper is made in the cold, lanterns before the summer festival of the dead, and the great carved floats of Takayama come out in spring and autumn. This page walks through the year month by month.",
    ja:"岐阜の山仕事は、稲作と同じほど季節にしたがう。木は眠って樹液が下りているときに伐られ、苗は雪がとけて土が湿っているときに植えられ、草は夏のいちばんの暑さのなかで刈られ、材は乾いた冬を通して乾く。県の工芸と祭りも同じ暦を守る——紙は寒さのなかで漉かれ、提灯は盆の前につくられ、高山の彫刻の屋台は春と秋に曳き出される。この頁は一年を月ごとにたどる。",
    zh:"岐阜的林業工作與稻作一樣緊隨季節：樹木在休眠、樹液下降時伐採；苗木在融雪後土壤濕潤時栽植；雜草在盛夏最酷熱時割除；木材在乾燥的冬季中陰乾。縣內的工藝與祭典也遵循同一本曆法——和紙在嚴寒中抄製，燈籠在盂蘭盆節前趕製，高山雕刻精美的屋台則在春秋兩季出巡。本頁逐月走過這一年。" },
  body:[
    { t:"section",
      id:"calendar",
      title:{ en:"The calendar at a glance", ja:"暦をひと目で", zh:"一覽年曆" },
      jp:"年間の仕事",
      body:[
        { t:"figure",
          caption:{
            en:"The working year of Gifu's forests, crafts and festivals. Timings are typical and vary with altitude — work in the snowy north of Hida starts later in spring and stops earlier in autumn than in the Mino hills.",
            ja:"岐阜の森と工芸と祭りの一年。時期は典型的なもので高度によって変わる——雪深い飛騨北部の仕事は、美濃の丘陵より春は遅く始まり、秋は早く終わる。",
            zh:"岐阜森林、工藝與祭典的年度作業。時間為典型值，隨海拔而異——多雪的飛驒北部，春季開工比美濃丘陵晚，秋季收工也較早。" },
          svg:function(lang, L){ return GIFU.fig.year(lang, L, {
            title:{ en:"A year in the forest", ja:"森の一年", zh:"森林的一年" }, labelW:180,
            rows:[
              { en:"Felling", ja:"伐採", zh:"伐採" },
              { en:"Planting & weeding", ja:"植栽・下刈り", zh:"栽植與除草" },
              { en:"Thinning & pruning", ja:"間伐・枝打ち", zh:"疏伐與修枝" },
              { en:"Paper & lanterns", ja:"紙・提灯", zh:"和紙與燈籠" },
              { en:"Festivals", ja:"祭り", zh:"祭典" },
              { en:"Food of the woods", ja:"山の幸", zh:"山林食材" }
            ],
            items:[
              { row:0, m0:10, m1:2, n:{ en:"dormant season", ja:"休眠期", zh:"休眠期" }, f:"#EDE5D2" },
              { row:0, m0:8, m1:9, n:{ en:"leaf-seasoning", ja:"葉枯らし", zh:"葉枯乾燥" }, f:"#F0EDE4" },
              { row:1, m0:3, m1:5, n:{ en:"planting", ja:"植付け", zh:"栽植" }, f:"#E0E6DB" },
              { row:1, m0:6, m1:8, n:{ en:"weeding", ja:"下刈り", zh:"除草" }, f:"#E0E6DB" },
              { row:2, m0:11, m1:3, n:{ en:"thinning, pruning", ja:"間伐・枝打ち", zh:"疏伐、修枝" }, f:"#E7DFD2" },
              { row:3, m0:12, m1:2, n:{ en:"cold-water paper", ja:"寒漉き", zh:"寒抄" }, f:"#E9ECEE" },
              { row:3, m0:5, m1:8, n:{ en:"lanterns for Obon", ja:"盆提灯", zh:"盂蘭盆燈籠" }, f:"#EADCC1" },
              { row:4, m0:4, m1:4, n:{ en:"Takayama", ja:"高山", zh:"高山" }, f:"#E6E2EC" },
              { row:4, m0:7, m1:9, n:{ en:"Gujō Odori", ja:"郡上おどり", zh:"郡上舞" }, f:"#E6E2EC" },
              { row:4, m0:10, m1:10, n:{ en:"Takayama", ja:"高山", zh:"高山" }, f:"#E6E2EC" },
              { row:5, m0:4, m1:5, n:{ en:"sansai", ja:"山菜", zh:"山菜" }, f:"#E0E6DB" },
              { row:5, m0:9, m1:11, n:{ en:"chestnuts, mushrooms", ja:"栗・きのこ", zh:"栗、菇" }, f:"#EADCC1" }
            ] }); } },
        { t:"p",
          text:{
            en:"Two ideas run through the whole calendar. The first is that wood cut in the dormant season is better: it holds less sugar and starch, so it is less attractive to beetles and fungi, and it dries with fewer stains and cracks. The second is that the forest and the village share a single cycle of labour. In the old economy, a family that farmed rice from spring to autumn went to the mountain in winter to fell, split firewood, burn charcoal and haul logs over the snow — the season when the farm needed nothing.",
            ja:"二つの考えが暦全体を貫いている。一つは、休眠期に伐った木のほうが良いということ。糖やデンプンが少ないので甲虫や菌に好まれにくく、しみや割れも少なく乾く。もう一つは、森と村が一つの労働の循環を分けあっているということ。昔の暮らしでは、春から秋まで米をつくる家は冬に山へ入り、木を伐り、薪を割り、炭を焼き、雪の上を丸太を運んだ——田畑が何も求めない季節である。",
            zh:"兩個觀念貫穿整本年曆。其一，休眠期伐下的木材較好：所含糖分與澱粉較少，較不易招來甲蟲與真菌，乾燥時也較少變色開裂。其二，森林與村落共享同一個勞動循環。在舊時經濟中，春到秋種稻的人家，冬天便上山伐木、劈柴、燒炭，並在雪地上拖運原木——那正是農田無事可做的季節。" } }
      ] },
    { t:"section",
      id:"months",
      title:{ en:"Month by month", ja:"月ごとに", zh:"逐月" },
      jp:"十二か月",
      body:[
        { t:"timeline",
          items:[
            { year:{ en:"January", ja:"一月", zh:"一月" },
              era:{ en:"Deep winter", ja:"厳冬", zh:"嚴冬" },
              title:{ en:"Snow, felling and paper", ja:"雪と伐採と紙", zh:"雪、伐採與和紙" },
              text:{
                en:"In the Mino hills, felling and thinning continue on dry, frozen ground, which carries machines with less damage. In Hida, deep snow closes many forest roads. In Mino city the papermakers work in unheated rooms: cold water keeps the fibres firm and the mucilage from the <em>tororo-aoi</em> root viscous, and <em>kanzuki</em>, “cold-season paper”, is said to be the finest of the year. Many villages keep a mountain-god day in winter, when no one enters the forest.",
                ja:"美濃の丘陵では、乾いて凍った地面の上で伐採と間伐が続く。機械の傷みが少ない。飛騨では深い雪が多くの林道を閉ざす。美濃市では紙漉きが暖房のない部屋で働く。冷たい水は繊維を締め、トロロアオイの根からとるネリを粘らせ、「寒漉き」の紙は一年で最も良いといわれる。多くの村は冬に山の神の日を守り、その日は誰も山に入らない。",
                zh:"在美濃丘陵，伐採與疏伐在乾燥凍結的地面上持續進行，機械造成的損害較小。在飛驒，深雪封閉了許多林道。美濃市的抄紙師傅在沒有暖氣的房間工作：冷水使纖維緊實，也讓取自黃蜀葵根的黏液保持黏稠，據說「寒抄」的紙是一年中最好的。許多村落在冬季守著「山神之日」，當天無人入山。" } },
            { year:{ en:"February", ja:"二月", zh:"二月" },
              era:{ en:"Late winter", ja:"晩冬", zh:"冬末" },
              title:{ en:"Log markets and seed orchards", ja:"原木市と採種園", zh:"原木市場與採種園" },
              text:{
                en:"The winter harvest reaches the log markets of Gifu, Shirakawa and Gujō, where hinoki and sugi are auctioned lot by lot. Nurseries prepare container seedlings for spring. In the warm south, sugi begins to shed pollen, and the national pollen forecast opens for the year.",
                ja:"冬の伐採の材が岐阜、白川、郡上の原木市場に届き、ヒノキとスギが一椪ずつ競りにかけられる。苗畑は春に向けてコンテナ苗を整える。暖かい南部ではスギが花粉を飛ばしはじめ、全国の花粉情報がその年の予報を始める。",
                zh:"冬季伐採的木材運抵岐阜、白川與郡上的原木市場，扁柏與柳杉逐堆拍賣。苗圃為春季準備容器苗。在溫暖的南部，柳杉開始散播花粉，全國花粉預報也展開當年的播報。" } },
            { year:{ en:"March", ja:"三月", zh:"三月" },
              era:{ en:"Early spring", ja:"早春", zh:"早春" },
              title:{ en:"Planting begins", ja:"植付けの始まり", zh:"開始栽植" },
              text:{
                en:"As the ground thaws, planting starts in the lowlands and moves uphill with the season. It is also the end of the fiscal year, when subsidised forestry projects must be completed and inspected — a rush familiar to every forest cooperative.",
                ja:"地面がとけると、植付けが低地で始まり、季節とともに山へ上がっていく。年度末でもあり、補助事業を終えて検査を受けねばならない——どの森林組合にもおなじみの駆け込みである。",
                zh:"隨著地面解凍，栽植工作從低地開始，並隨季節往山上推進。這也是會計年度末，補助的林業事業必須完工並接受檢查——每個森林組合都熟悉的年底衝刺。" } },
            { year:{ en:"April", ja:"四月", zh:"四月" },
              era:{ en:"Spring", ja:"春", zh:"春" },
              title:{ en:"The spring festival of Takayama", ja:"春の高山祭", zh:"春季高山祭" },
              text:{
                en:"On 14–15 April the twelve floats of the Sannō Festival are drawn through old Takayama — towering carved and lacquered carts of keyaki and other woods, some with mechanical puppets, the finest expression of Hida carpentry and carving. New forest workers start their year; in the woods, the first wild vegetables appear.",
                ja:"四月十四〜十五日、山王祭の十二台の屋台が高山の古い町を曳かれる。ケヤキなどの木でできた、そびえる彫刻と漆の車で、からくり人形をもつものもあり、飛騨の大工と彫刻の技の最高の表現である。新しい林業の働き手が一年を始め、森には最初の山菜が顔を出す。",
                zh:"4 月 14–15 日，山王祭的十二座屋台在高山老城區出巡——這些以櫸木等木材打造、高聳且飾以雕刻與漆藝的祭車，有些還附機關人偶，是飛驒木工與雕刻技藝的極致展現。新進林業工作者展開新的一年；林中則冒出第一批山菜。" } },
            { year:{ en:"May", ja:"五月", zh:"五月" },
              era:{ en:"New leaves", ja:"新緑", zh:"新綠" },
              title:{ en:"Cormorants and new leaves", ja:"鵜飼と新緑", zh:"鸕鶿與新綠" },
              text:{
                en:"Cormorant fishing on the Nagara opens on 11 May and runs until mid-October, from wooden boats lit by fires in iron baskets. In the mountains the broadleaves come into leaf from the valleys upwards, and planting ends in the high country. Lantern makers in Gifu city are already busy for the summer.",
                ja:"長良川の鵜飼は五月十一日に開き、十月半ばまで、鉄の籠に燃える篝火に照らされた木の舟から行われる。山では広葉樹が谷から上へと芽吹き、高地では植付けが終わる。岐阜市の提灯づくりは、もう夏に向けて忙しい。",
                zh:"長良川的鸕鶿捕魚於 5 月 11 日開始，持續到 10 月中旬，漁夫在以鐵籠篝火照亮的木船上作業。山中的闊葉樹從谷地往上逐漸長出新葉，高地的栽植工作也告一段落。岐阜市的燈籠師傅已為夏季忙碌起來。" } },
            { year:{ en:"June", ja:"六月", zh:"六月" },
              era:{ en:"Rainy season", ja:"梅雨", zh:"梅雨" },
              title:{ en:"Rains and vines", ja:"雨とつる", zh:"雨與藤蔓" },
              text:{
                en:"The rainy season brings the year's fastest growth — for trees and weeds alike. Bears strip bark from conifers for the sweet sapwood; oak-wilt beetles begin their flights. Felling largely stops: wood cut now is full of sap and stains quickly.",
                ja:"梅雨は一年で最も速い成長をもたらす——木にも草にも。クマは甘い辺材を求めて針葉樹の皮をはぎ、ナラ枯れの甲虫が飛びはじめる。伐採はほぼ止まる。いま伐った木は樹液に満ち、すぐに変色する。",
                zh:"梅雨帶來一年中最快的生長——樹木與雜草皆然。熊剝下針葉樹樹皮舔食甘甜的邊材；橡樹萎凋病甲蟲開始飛行。伐採大致停止：此時伐下的木材充滿樹液，很快就會變色。" } },
            { year:{ en:"July", ja:"七月", zh:"七月" },
              era:{ en:"High summer", ja:"盛夏", zh:"盛夏" },
              title:{ en:"The weeding season", ja:"下刈りの季節", zh:"除草季節" },
              text:{
                en:"The hardest month in forestry: crews cut the weeds on young plantations with brush-cutters from dawn, stopping in the midday heat. In Gujō Hachiman the summer dance festival begins, continuing on some thirty nights until early September; its dancers wear wooden geta, and on the all-night dances of mid-August the clatter of thousands of clogs fills the streets.",
                ja:"林業で最もつらい月。作業班は夜明けから刈払機で若い人工林の草を刈り、真昼の暑さには手を止める。郡上八幡では夏の踊りが始まり、九月初めまでおよそ三十夜続く。踊り手は下駄をはき、八月半ばの徹夜おどりには何千もの下駄の音が町に満ちる。",
                zh:"林業最辛苦的月份：作業班從黎明起用割草機清除幼齡人工林的雜草，正午酷熱時才停工。郡上八幡的夏季舞蹈祭開跑，一直持續到九月初，共約三十個夜晚；舞者穿著木屐，八月中旬的徹夜舞會上，數千雙木屐的聲響響徹街道。" } },
            { year:{ en:"August", ja:"八月", zh:"八月" },
              era:{ en:"Obon", ja:"盆", zh:"盂蘭盆" },
              title:{ en:"Lanterns and leaf-seasoning", ja:"提灯と葉枯らし", zh:"燈籠與葉枯乾燥" },
              text:{
                en:"Gifu lanterns hang in homes to welcome the spirits of ancestors during Obon. On some estates, hinoki and sugi selected for high-value timber are felled in late summer and left lying on the slope with their crowns attached — <em>hagarashi</em>, leaf-seasoning — so that the leaves draw water out of the trunk for several weeks before the logs are cut to length.",
                ja:"盆には、祖先の霊を迎えるために家々に岐阜提灯が吊るされる。一部の山では、高級材にするヒノキやスギを晩夏に伐り、梢をつけたまま斜面に寝かせておく——葉枯らしである。葉が数週間かけて幹から水を吸い出したのち、丸太に玉切りされる。",
                zh:"盂蘭盆期間，家家戶戶懸掛岐阜燈籠迎接祖靈。在部分林地，選作高價木材的扁柏與柳杉會在夏末伐倒，連同樹冠一起留在坡地上——稱為「葉枯乾燥」——讓葉片在數週內把樹幹中的水分抽出，之後才截成原木。" } },
            { year:{ en:"September", ja:"九月", zh:"九月" },
              era:{ en:"Early autumn", ja:"初秋", zh:"初秋" },
              title:{ en:"Typhoons and chestnuts", ja:"台風と栗", zh:"颱風與栗子" },
              text:{
                en:"The typhoon season tests every unthinned plantation. In eastern Gifu the chestnut harvest begins: Nakatsugawa and Ena are famous for <em>kuri kinton</em>, a sweet of chestnut and sugar, made fresh each autumn. The kabuki playhouse at Kashimo, built of local timber in 1894, stages its annual performance.",
                ja:"台風の季節は、間伐されていない人工林を一つ残らず試す。東濃では栗の収穫が始まる。中津川と恵那は、栗と砂糖でつくる菓子、栗きんとんで名高く、毎秋できたてがつくられる。一八九四年に地元の木で建てられた加子母の芝居小屋では、毎年の公演が行われる。",
                zh:"颱風季考驗著每一片未疏伐的人工林。在岐阜東部，栗子開始收成：中津川與惠那以每年秋季現做、用栗子與糖製成的甜點「栗金團」聞名。1894 年以當地木材建成的加子母歌舞伎劇場，舉行一年一度的公演。" } },
            { year:{ en:"October", ja:"十月", zh:"十月" },
              era:{ en:"Autumn", ja:"秋", zh:"秋" },
              title:{ en:"The autumn festival and Wood Day", ja:"秋の高山祭と木の日", zh:"秋季高山祭與木之日" },
              text:{
                en:"On 9–10 October eleven floats of the Hachiman Festival are drawn through Takayama. 8 October is Wood Day (<em>Ki no Hi</em>) in Japan — the characters for ten and eight combine to make 木, “tree”. The felling season opens again as the sap falls, and forest cooperatives begin the winter's thinning.",
                ja:"十月九〜十日、八幡祭の十一台の屋台が高山を曳かれる。十月八日は日本の「木の日」である——十と八の字を組み合わせると「木」になる。樹液が下りると伐採の季節がふたたび始まり、森林組合は冬の間伐に取りかかる。",
                zh:"10 月 9–10 日，八幡祭的十一座屋台在高山出巡。10 月 8 日是日本的「木之日」——「十」與「八」兩字組合起來就是「木」。隨著樹液下降，伐採季再度開啟，森林組合開始冬季的疏伐。" } },
            { year:{ en:"November", ja:"十一月", zh:"十一月" },
              era:{ en:"Late autumn", ja:"晩秋", zh:"晚秋" },
              title:{ en:"Leaves, mushrooms and firewood", ja:"落ち葉ときのこと薪", zh:"落葉、菇與柴" },
              text:{
                en:"Magnolia leaves are gathered and dried for <em>hōba miso</em>; mushrooms end; firewood split in spring is stacked under the eaves for winter. Timber from autumn felling begins its long air-drying in sawmill yards, stickered in stacks so the wind can pass between the boards.",
                ja:"朴葉味噌のために朴の葉が集められ干される。きのこの季節が終わり、春に割った薪が冬に備えて軒下に積まれる。秋に伐った材は製材所の土場で長い天然乾燥を始め、板のあいだに風が通るよう桟を入れて積まれる。",
                zh:"人們採集並晾乾朴樹葉以製作朴葉味噌；菇季結束；春天劈好的柴堆放在屋簷下準備過冬。秋季伐下的木材開始在製材所堆場中漫長的自然乾燥，板材之間夾入墊條堆疊，讓風從板間穿過。" } },
            { year:{ en:"December", ja:"十二月", zh:"十二月" },
              era:{ en:"First snow", ja:"初雪", zh:"初雪" },
              title:{ en:"The quiet season in Hida", ja:"飛騨の静かな季節", zh:"飛驒的靜季" },
              text:{
                en:"Snow arrives in Hida, and the workshops of Takayama and Furukawa turn to their busiest indoor season: furniture for the new year's orders, carvings for the tourist spring, bentwood in steaming boxes. In the villages, charcoal kilns that survive are lit for the winter burn.",
                ja:"飛騨に雪が来ると、高山や古川の工房は屋内で最も忙しい季節に入る。新年の注文の家具、春の観光のための彫刻、蒸し箱の曲木。村々では、残っている炭窯に冬の火が入る。",
                zh:"雪降臨飛驒，高山與古川的工坊進入一年中最忙碌的室內季節：趕製新年訂單的家具、為春季觀光準備的雕刻、蒸箱裡的曲木。在村落裡，碩果僅存的炭窯點起冬季的窯火。" } }
          ] }
      ] },
    { t:"section",
      id:"lore",
      title:{ en:"Felling lore", ja:"伐採の言い伝え", zh:"伐木傳說" },
      jp:"新月伐採・鳥総立て",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Winter felling", ja:"冬伐り", zh:"冬伐" },
              jp:"ふゆぎり",
              def:{
                en:"The oldest and best-supported rule: wood felled in the dormant season, when starch reserves are low and sap is not moving, resists insects and fungi better and dries with less staining. Temple carpenters insisted on it.",
                ja:"最も古く、最も裏づけのある決まり。デンプンのたくわえが少なく樹液が動いていない休眠期に伐った木は、虫や菌に強く、しみも少なく乾く。宮大工はこれを譲らなかった。",
                zh:"最古老、也最有依據的規則：在澱粉儲量低、樹液不流動的休眠期伐下的木材，更能抵抗蟲菌，乾燥時也較少變色。宮大工堅持這一點。" } },
            { term:{ en:"New-moon felling", ja:"新月伐採", zh:"新月伐採" },
              jp:"しんげつばっさい",
              def:{
                en:"A belief found in Europe and taken up by some Japanese makers since the 2000s: trees cut in the waning moon of winter are more durable and less prone to insects. Scientific tests have given mixed results; its practitioners value it partly as a discipline of care.",
                ja:"ヨーロッパに見られ、二〇〇〇年代から日本の一部のつくり手が取り入れた考え。冬の下弦の月のころに伐った木は長もちし、虫がつきにくいという。科学的な試験の結果はまちまちで、実践する人々はそれを、手間を惜しまない規律として重んじてもいる。",
                zh:"源於歐洲、自 2000 年代起被部分日本工匠採納的信念：冬季下弦月時伐下的樹木更耐久、較不易生蟲。科學試驗結果不一；實踐者也部分將其視為一種謹慎用心的紀律。" } },
            { term:{ en:"Tobusa-date", ja:"鳥総立て", zh:"鳥總立" },
              jp:"とぶさだて",
              def:{
                en:"After felling a great tree, the crown or a leafy branch is set upright on the stump in thanks to the mountain god and as a prayer for the forest's renewal. The custom is still performed when trees are felled for the Ise Shrine in Kashimo.",
                ja:"大木を伐ったあと、梢や葉のついた枝を切り株に立て、山の神への感謝と森の再生への祈りとする。加子母で伊勢神宮のための木を伐るときにも、いまも行われる。",
                zh:"伐倒巨木後，將樹梢或帶葉枝條立在樹樁上，以感謝山神並祈求森林再生。在加子母為伊勢神宮伐木時，至今仍行此禮。" } },
            { term:{ en:"The mountain god's day", ja:"山の神の日", zh:"山神之日" },
              jp:"やまのかみのひ",
              def:{
                en:"A day in winter — the date varies from district to district — on which the mountain god is said to count the trees, and anyone in the forest might be counted among them. Forest workers stay at home, make offerings and eat together.",
                ja:"冬のある一日——日付は地域ごとに違う——で、山の神が木を数えるといわれ、森にいる者はその数に入れられてしまうという。山で働く人は家にとどまり、供え物をしてともに食事をする。",
                zh:"冬季的某一天——日期因地而異——據說山神會在這天清點樹木，此時身在林中的人也可能被算進去。林業工作者當天留在家中，供奉祭品並一同聚餐。" } }
          ] }
      ] },
    { t:"related",
      items:[
        { href:"silviculture.html", why:{ en:"The tending work in detail.", ja:"手入れの仕事を詳しく。", zh:"撫育工作詳述。" } },
        { href:"felling.html", why:{ en:"How trees are felled, then and now.", ja:"木はどう伐られるか、昔といま。", zh:"古今伐木方法。" } },
        { href:"culture.html", why:{ en:"Festivals, floats and playhouses.", ja:"祭り、屋台、芝居小屋。", zh:"祭典、屋台與劇場。" } },
        { href:"gods.html", why:{ en:"The mountain god and sacred trees.", ja:"山の神と神木。", zh:"山神與神木。" } }
      ] }
  ] };
