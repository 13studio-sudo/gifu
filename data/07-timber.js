/* =============================================================
   THE SPIRIT OF GIFU — Timber
   15 pages. Each page is one GIFU.pages["key"] = {…}
   module; the order here is the order of the navigation
   (GIFU.NAV in assets/js/core.js).
   ============================================================= */

/* ---- ------------------------------------------- logging */
GIFU.pages["logging"] = { kicker:{ en:"Timber · 01", ja:"木材 · 01", zh:"木材 · 01" },
  title:{ en:"The Logging Business", ja:"素材生産", zh:"伐木產業" },
  jp:"伐って出す · 岐阜の素材生産",
  lede:{
    en:"In the Japanese timber trade, logging is called <em>sozai seisan</em>, “the production of raw material”: felling trees, cutting them into logs and bringing them out of the forest to a place where a truck can take them. In Gifu that means working on slopes of thirty and forty degrees, often in small, scattered private holdings, with machines designed for flatter countries. This page describes how much timber Gifu produces, who produces it, how it is extracted, and how the money from a log is divided between the forest owner, the logger and everyone else.",
    ja:"日本の木材業界では、伐採の仕事を「素材生産」と呼ぶ。木を伐り、丸太に玉切り、トラックが積める場所まで森から運び出すことである。岐阜では、それは三十度、四十度の斜面で、しばしば小さく散らばった私有林を相手に、平らな国のために設計された機械で働くことを意味する。この頁は、岐阜がどれだけの木材を生産しているか、誰がそれをつくっているか、どう運び出すか、そして丸太一本のお金が森林所有者、伐採業者、そのほかの人々のあいだでどう分けられるかを述べる。",
    zh:"在日本木材業界，伐木工作稱為「素材生產」——伐倒樹木、截成原木，並運出森林到卡車可以裝載的地點。在岐阜，這意味著要在三、四十度的陡坡上作業，面對的常是零散的小型私有林，使用的卻是為較平坦國家設計的機械。本頁介紹岐阜生產多少木材、由誰生產、如何集運出林，以及一根原木的收入如何在林主、伐木業者與其他人之間分配。" },
  body:[
    { t:"section",
      id:"numbers",
      title:{ en:"How much Gifu cuts", ja:"岐阜はどれだけ伐るか", zh:"岐阜伐多少" },
      jp:"素材生産量",
      body:[
        { t:"p",
          text:{
            en:"For most of the post-war period Gifu's plantations were too young to harvest, and logging was dominated by thinning. As the stands matured and subsidies shifted towards thinnings that produce saleable logs, output rose steeply. In fiscal 2021 the prefecture produced about 576,000 cubic metres of logs — roughly 1.8 times the level of ten years earlier — and it aims for about 600,000. The composition has changed too: around thirty per cent of the logs are now low-grade material for chips and fuel, a market that barely existed before biomass power stations opened in the 2010s.",
            ja:"戦後の大半の時期、岐阜の人工林は伐るには若すぎ、伐採の中心は間伐だった。林が育ち、補助が売れる丸太を生む間伐へと移ると、生産は急に伸びた。二〇二一年度、県はおよそ五十七万六千立方メートルの丸太を生産した——十年前のおよそ一・八倍——そして約六十万をめざしている。中身も変わった。いまでは丸太のおよそ三割が、チップや燃料向けの低質材である。二〇一〇年代にバイオマス発電所ができるまで、ほとんどなかった市場である。",
            zh:"戰後大部分時期，岐阜的人工林都還太年輕，無法收穫，伐木以疏伐為主。隨著林分成熟、補助轉向能產出可售原木的疏伐，產量急速攀升。2021 年度，全縣原木產量約 57.6 萬立方公尺——約為十年前的 1.8 倍——目標約 60 萬。組成也改變了：如今約三成原木是供木片與燃料用的低質材，這個市場在 2010 年代生質能發電廠開張前幾乎不存在。" } },
        { t:"figure",
          caption:{
            en:"Log production in Gifu, thousand cubic metres. The first bar is an approximation derived from the prefecture's statement that recent output is about 1.8 times that of ten years earlier. Source: Gifu Prefecture, status of forestry and the timber industry.",
            ja:"岐阜の素材生産量（千立方メートル）。最初の棒は、最近の生産が十年前のおよそ一・八倍という県の記述から導いた概算である。出典：岐阜県「岐阜県の林業・木材産業の現状」。",
            zh:"岐阜原木產量（千立方公尺）。第一根長條是依縣府「近年產量約為十年前的 1.8 倍」之說推算的概值。資料來源：岐阜縣〈岐阜縣林業與木材產業現況〉。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Log production", ja:"素材生産量", zh:"原木產量" }, unit:{ en:"thousand m³", ja:"千m³", zh:"千 m³" }, tick:100,
            items:[
              { x:{ en:"c.2011", ja:"約2011", zh:"約2011" }, v:320, f:"#E6E4E0", lab:{ en:"≈320", ja:"約320", zh:"約320" } },
              { x:"2018", v:569 }, { x:"2019", v:573 }, { x:"2020", v:576 }, { x:"2021", v:576 },
              { x:{ en:"target", ja:"目標", zh:"目標" }, v:600, f:"#EADCC1" }
            ] }); } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Logs produced", ja:"素材生産量", zh:"原木產量" },
              v:{ en:"576,000 m³", ja:"57.6万m³", zh:"57.6 萬 m³" },
              d:{ en:"FY2021", ja:"二〇二一年度", zh:"2021 年度" } },
            { k:{ en:"Low-grade share", ja:"低質材の割合", zh:"低質材比例" },
              v:"≈30%",
              d:{ en:"Chip and fuel logs (“D grade”).", ja:"チップ・燃料用（D材）。", zh:"木片與燃料用材（D 級）。" } },
            { k:{ en:"Forest workers", ja:"林業就業者", zh:"林業從業者" },
              v:"916",
              d:{
                en:"FY2021; about 60% employed 210+ days a year.",
                ja:"二〇二一年度。約六割が年二百十日以上就労。",
                zh:"2021 年度；約六成全年工作 210 天以上。" } },
            { k:{ en:"Machines, Japan", ja:"高性能林業機械（全国）", zh:"高性能林業機械（全國）" },
              v:"16,431",
              d:{
                en:"FY2024; 2.3 times the number ten years earlier.",
                ja:"二〇二四年度。十年前の約二・三倍。",
                zh:"2024 年度；為十年前的約 2.3 倍。" } }
          ] }
      ] },
    { t:"section",
      id:"systems",
      title:{ en:"Getting logs off a mountain", ja:"山から丸太を出す", zh:"把原木運下山" },
      jp:"作業システム",
      body:[
        { t:"p",
          text:{
            en:"Modern Japanese logging uses one of two families of systems. On moderate slopes, a network of narrow <em>strip roads</em> is bulldozed across the hillside, and machines drive into the stand: an excavator-based harvester fells and processes the trees, and a forwarder carries the logs out. On steeper ground, where roads would be too costly or would destabilise the slope, logs are lifted out by cable — a swing yarder (an excavator carrying a winch and a short tower) or a larger tower yarder pulls a carriage along a steel skyline stretched above the slope. Gifu, with its mix of Mino hills and Hida gorges, uses both.",
            ja:"現代の日本の伐採には、大きく二つの系統がある。中くらいの傾斜では、狭い森林作業道の網を斜面に切りひらき、機械が林に入る。油圧ショベルを台にしたハーベスタが木を伐って造材し、フォワーダが丸太を運び出す。道をつけるには費用がかかりすぎたり斜面を不安定にしたりする急な場所では、丸太は架線で吊り出される。スイングヤーダ（ウインチと短い柱を積んだショベル）や大型のタワーヤーダが、斜面の上に張った鋼のスカイラインに沿って搬器を引く。美濃の丘陵と飛騨の峡谷をあわせもつ岐阜は、その両方を使う。",
            zh:"現代日本伐木採用兩大類作業系統。在中等坡度，於山坡上以推土機開出狹窄的森林作業道網，讓機械進入林分：以挖土機為底盤的伐木聯合機（harvester）伐倒並造材，運材車（forwarder）再把原木運出。在更陡的地形，開路成本過高或會破壞坡體穩定，原木便以架線吊出——擺動式集材機（swing yarder，載有絞盤與短塔柱的挖土機）或大型塔式集材機，沿著架設在坡面上方的鋼索拖拉搬器。岐阜兼具美濃丘陵與飛驒峽谷，兩種方式都用。" } },
        { t:"figure",
          caption:{
            en:"The chain of operations in a vehicle-based thinning, from standing tree to truck. In cable systems, steps 2–4 are replaced by yarding along a skyline to a landing on the road.",
            ja:"車両系の間伐作業の流れ。立木からトラックまで。架線系では二〜四の工程が、スカイラインに沿って道端の土場まで集材する工程に置き換わる。",
            zh:"車輛系疏伐作業流程，從立木到卡車。在架線系統中，第 2–4 步改為沿鋼索集材至路旁的集材場。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"From tree to truck", ja:"立木からトラックへ", zh:"從立木到卡車" }, per:3, bh:96,
            steps:[
              { t:{ en:"Marking", ja:"選木", zh:"選木" }, d:{ en:"A forester chooses which trees go, usually a quarter to a third.", ja:"技術者が伐る木を選ぶ。ふつう四分の一から三分の一。", zh:"技術人員選定要伐的樹，通常四分之一到三分之一。" } },
              { t:{ en:"Felling", ja:"伐倒", zh:"伐倒" }, d:{ en:"By chainsaw or harvester head, directed into gaps.", ja:"チェーンソーかハーベスタのヘッドで、空いた方向へ倒す。", zh:"以鏈鋸或伐木頭，朝林隙方向伐倒。" } },
              { t:{ en:"Bunching", ja:"木寄せ", zh:"集材" }, d:{ en:"Whole trees are pulled to the strip road by winch or grapple.", ja:"ウインチやグラップルで全木を作業道へ寄せる。", zh:"以絞盤或抓木機將全株拖至作業道。" } },
              { t:{ en:"Processing", ja:"造材", zh:"造材" }, d:{ en:"Delimbing and bucking into 3, 4 or 6 m logs, sorted by grade.", ja:"枝を払い、三・四・六メートルの丸太に玉切り、等級で仕分ける。", zh:"去枝並截成 3、4 或 6 公尺原木，依等級分類。" } },
              { t:{ en:"Forwarding", ja:"運材", zh:"運材" }, d:{ en:"A forwarder carries the logs to a landing by the forest road.", ja:"フォワーダが林道わきの土場まで運ぶ。", zh:"運材車把原木運到林道旁的集材場。" } },
              { t:{ en:"Haulage", ja:"輸送", zh:"運輸" }, d:{ en:"Trucks take logs to a market, a mill or a biomass plant.", ja:"トラックで市場、製材所、バイオマス発電所へ。", zh:"卡車將原木運往市場、製材所或生質能電廠。" } }
            ] }); } },
        { t:"defs",
          items:[
            { term:{ en:"Forest roads", ja:"林道", zh:"林道" },
              jp:"りんどう",
              def:{
                en:"Permanent, public-standard roads that give general access to a forest area, built with national and prefectural funds.",
                ja:"森の区域への一般の出入りのための恒久的な公共基準の道で、国と県の資金でつくられる。",
                zh:"提供森林區域一般通行的永久性公共標準道路，由國家與縣經費興建。" } },
            { term:{ en:"Forestry-only roads", ja:"林業専用道", zh:"林業專用道" },
              jp:"りんぎょうせんようどう",
              def:{
                en:"Simpler roads for ten-tonne log trucks, built into the heart of a working forest; Gifu's cooperatives build many under contract.",
                ja:"十トンの丸太トラックのための、より簡素な道で、施業する森の奥まで入る。岐阜の森林組合が請け負って多くをつくる。",
                zh:"供十噸運材卡車使用的較簡易道路，深入經營林地核心；岐阜各森林組合承攬興建了許多。" } },
            { term:{ en:"Strip roads", ja:"森林作業道", zh:"森林作業道" },
              jp:"さぎょうどう",
              def:{
                en:"Narrow, unpaved tracks, about three metres wide, cut by excavator for forestry machines only. Built well — following contours, with short cut slopes and good drainage — they last for decades; built badly, they start landslides.",
                ja:"幅三メートルほどの狭い未舗装の道で、ショベルで切りひらく林業機械専用の道。等高線に沿い、切土を低く、水はけよくつくれば何十年ももつ。まずくつくれば山崩れを起こす。",
                zh:"寬約三公尺、未鋪面的狹窄便道，以挖土機開設，僅供林業機械使用。若沿等高線開設、切坡短且排水良好，可用數十年；開得不好則會引發崩塌。" } }
          ] }
      ] },
    { t:"section",
      id:"who",
      title:{ en:"Who does the work", ja:"誰が仕事をするか", zh:"由誰來做" },
      jp:"森林組合と事業体",
      body:[
        { t:"p",
          text:{
            en:"Most private forest owners in Gifu hold only a few hectares and have neither the equipment nor the knowledge to manage them. The work is therefore done by others. The largest players are the prefecture's forest owners' cooperatives — nineteen of them, each covering one or more municipalities, federated in the Gifu Prefectural Forest Owners' Cooperative Federation. Cooperatives consolidate neighbouring small holdings into management units, draw up plans, apply for subsidies on the owners' behalf, carry out the work with their own crews and sell the logs. Alongside them work private logging contractors, construction companies that have moved into forestry, and the crews of the national forest, which is managed by the Forestry Agency's Chūbu regional office.",
            ja:"岐阜の私有林の所有者の多くは数ヘクタールしかもたず、管理する道具も知識もない。だから仕事はほかの者が行う。最大の担い手は県の森林組合——十九あり、それぞれ一つ以上の市町村を受けもち、岐阜県森林組合連合会に連なる——である。森林組合は隣りあう小さな山をまとめて施業の単位とし、計画を立て、所有者に代わって補助を申請し、自前の作業班で仕事をし、丸太を売る。そのかたわらで、民間の素材生産業者、林業に進出した建設会社、そして林野庁中部森林管理局が管理する国有林の作業班が働く。",
            zh:"岐阜大多數私有林主只擁有幾公頃林地，既無設備也無經營知識，因此工作交由他人執行。最大的執行者是縣內的森林組合——共十九個，各自負責一個或多個市町村，並聯合組成岐阜縣森林組合聯合會。森林組合把相鄰的小片林地整合為經營單位、擬定計畫、代林主申請補助、以自有作業班施作，並販售原木。與之並行的還有民間伐木業者、轉入林業的營造公司，以及由林野廳中部森林管理局經營之國有林的作業班。" } },
        { t:"table",
          caption:{
            en:"Forest owners' cooperatives of Gifu Prefecture (as listed by the prefecture, 2026)",
            ja:"岐阜県の森林組合（県の一覧による、二〇二六年）",
            zh:"岐阜縣森林組合（依縣府名冊，2026 年）" },
          cols:[
            { en:"Cooperative", ja:"組合", zh:"組合" },
            { en:"Japanese", ja:"名称", zh:"日文名稱" },
            { en:"Base", ja:"所在地", zh:"所在地" },
            { en:"Region", ja:"圏域", zh:"區域" }
          ],
          jpCols:[1],
          rows:[
            [
              { en:"Gifu Chūō", ja:"岐阜中央", zh:"岐阜中央" },
              "岐阜中央森林組合",
              { en:"Yamagata", ja:"山県市", zh:"山縣市" },
              { en:"Gifu", ja:"岐阜", zh:"岐阜" }
            ],
            [
              { en:"Motosu City", ja:"本巣市", zh:"本巢市" },
              "本巣市森林組合",
              { en:"Motosu (Neo)", ja:"本巣市（根尾）", zh:"本巢市（根尾）" },
              { en:"Gifu", ja:"岐阜", zh:"岐阜" }
            ],
            [
              { en:"Seinan-nō", ja:"西南濃", zh:"西南濃" },
              "西南濃森林組合",
              { en:"Ōgaki (Kamiishizu)", ja:"大垣市上石津", zh:"大垣市上石津" },
              { en:"Seinō", ja:"西濃", zh:"西濃" }
            ],
            [
              { en:"Ibi District", ja:"揖斐郡", zh:"揖斐郡" },
              "揖斐郡森林組合",
              { en:"Ibigawa", ja:"揖斐川町", zh:"揖斐川町" },
              { en:"Seinō", ja:"西濃", zh:"西濃" }
            ],
            [
              { en:"Chūnō", ja:"中濃", zh:"中濃" },
              "中濃森林組合",
              { en:"Mino", ja:"美濃市", zh:"美濃市" },
              { en:"Chūnō", ja:"中濃", zh:"中濃" }
            ],
            [
              { en:"Gujō", ja:"郡上", zh:"郡上" },
              "郡上森林組合",
              { en:"Gujō (Hachiman)", ja:"郡上市八幡", zh:"郡上市八幡" },
              { en:"Chūnō", ja:"中濃", zh:"中濃" }
            ],
            [
              { en:"Kamo", ja:"可茂", zh:"可茂" },
              "可茂森林組合",
              { en:"Hichisō", ja:"七宗町", zh:"七宗町" },
              { en:"Chūnō", ja:"中濃", zh:"中濃" }
            ],
            [
              { en:"Yaotsu Town", ja:"八百津町", zh:"八百津町" },
              "八百津町森林組合",
              { en:"Yaotsu", ja:"八百津町", zh:"八百津町" },
              { en:"Chūnō", ja:"中濃", zh:"中濃" }
            ],
            [
              { en:"Shirakawa Town", ja:"白川町", zh:"白川町" },
              "白川町森林組合",
              { en:"Shirakawa (Kamo)", ja:"白川町", zh:"白川町" },
              { en:"Chūnō", ja:"中濃", zh:"中濃" }
            ],
            [
              { en:"Higashishirakawa Village", ja:"東白川村", zh:"東白川村" },
              "東白川村森林組合",
              { en:"Higashishirakawa", ja:"東白川村", zh:"東白川村" },
              { en:"Chūnō", ja:"中濃", zh:"中濃" }
            ],
            [
              { en:"Tōto", ja:"陶都", zh:"陶都" },
              "陶都森林組合",
              { en:"Mizunami", ja:"瑞浪市", zh:"瑞浪市" },
              { en:"Tōnō", ja:"東濃", zh:"東濃" }
            ],
            [
              { en:"Nakatsugawa City", ja:"中津川市", zh:"中津川市" },
              "中津川市森林組合",
              { en:"Nakatsugawa", ja:"中津川市", zh:"中津川市" },
              { en:"Tōnō", ja:"東濃", zh:"東濃" }
            ],
            [
              { en:"Kashimo", ja:"加子母", zh:"加子母" },
              "加子母森林組合",
              { en:"Nakatsugawa (Kashimo)", ja:"中津川市加子母", zh:"中津川市加子母" },
              { en:"Tōnō", ja:"東濃", zh:"東濃" }
            ],
            [
              { en:"Tsukechi Town", ja:"付知町", zh:"付知町" },
              "付知町森林組合",
              { en:"Nakatsugawa (Tsukechi)", ja:"中津川市付知", zh:"中津川市付知" },
              { en:"Tōnō", ja:"東濃", zh:"東濃" }
            ],
            [
              { en:"Ena City", ja:"恵那市", zh:"惠那市" },
              "恵那市森林組合",
              { en:"Ena", ja:"恵那市", zh:"惠那市" },
              { en:"Tōnō", ja:"東濃", zh:"東濃" }
            ],
            [
              { en:"Enan", ja:"恵南", zh:"惠南" },
              "恵南森林組合",
              { en:"Ena (Kamiyahagi)", ja:"恵那市上矢作", zh:"惠那市上矢作" },
              { en:"Tōnō", ja:"東濃", zh:"東濃" }
            ],
            [
              { en:"Hida Takayama", ja:"飛騨高山", zh:"飛驒高山" },
              "飛騨高山森林組合",
              { en:"Takayama", ja:"高山市", zh:"高山市" },
              { en:"Hida", ja:"飛騨", zh:"飛驒" }
            ],
            [
              { en:"Hida City", ja:"飛騨市", zh:"飛驒市" },
              "飛騨市森林組合",
              { en:"Hida (Furukawa)", ja:"飛騨市古川", zh:"飛驒市古川" },
              { en:"Hida", ja:"飛騨", zh:"飛驒" }
            ],
            [
              { en:"Minami Hida", ja:"南ひだ", zh:"南飛驒" },
              "南ひだ森林組合",
              { en:"Gero", ja:"下呂市", zh:"下呂市" },
              { en:"Hida", ja:"飛騨", zh:"飛驒" }
            ],
            [
              { en:"Prefectural federation", ja:"県森連", zh:"縣聯合會" },
              "岐阜県森林組合連合会",
              { en:"Gifu city", ja:"岐阜市", zh:"岐阜市" },
              { en:"—", ja:"—", zh:"—" }
            ]
          ] },
        { t:"note",
          label:{ en:"Kashimo: a village that kept its forest", ja:"加子母：森を守った村", zh:"加子母：守住森林的村落" },
          text:{
            en:"The Kashimo cooperative, in a former village now part of Nakatsugawa, has become a national example of a forest community that adds value locally. Besides logging, it runs a woodworking centre that makes hinoki furniture, toys and school desks and distils hinoki oil; neighbouring firms in the village build houses and shrines from local timber and, since the mid-2010s, a large plywood mill has operated in the valley. Kashimo also supplies the hinoki felled for the Ise Shrine rebuilding.",
            ja:"いまは中津川市の一部となった旧村の加子母森林組合は、地元で付加価値を生む森の共同体の全国的な手本となった。伐採のほかに木工センターを営み、ヒノキの家具、玩具、学校の机をつくり、ヒノキ油を蒸留する。村の会社は地元の木で家や社寺を建て、二〇一〇年代半ばからは谷に大きな合板工場が動いている。加子母はまた、伊勢神宮の遷宮のために伐られるヒノキを出す。",
            zh:"加子母森林組合位於如今已併入中津川市的舊村，成為在地創造附加價值之森林社區的全國典範。除了伐木，它還經營木工中心，製作扁柏家具、玩具與學校課桌椅，並蒸餾扁柏精油；村內的公司以在地木材興建住宅與寺社；自 2010 年代中期起，谷中還有一座大型合板廠運轉。加子母也供應伊勢神宮式年遷宮所伐的扁柏。" } }
      ] },
    { t:"section",
      id:"value",
      title:{ en:"Where the money goes", ja:"お金はどこへ行くか", zh:"錢流向何處" },
      jp:"山元立木価格と丸太価格",
      body:[
        { t:"p",
          text:{
            en:"A cubic metre of hinoki standing in the forest was worth about ¥8,900 to its owner in 2024. The same cubic metre, felled, cut into logs and delivered to a market, sold for about ¥22,300; sawn, kiln-dried and planed into posts, it sold for more than ¥100,000. The owner's share of the log price, once more than half, is now well under half, because the costs of felling, extraction and haulage — mostly labour and machines — have not fallen as prices have.",
            ja:"二〇二四年、森に立つヒノキ一立方メートルは所有者にとっておよそ八千九百円の値打ちだった。同じ一立方メートルを伐って丸太にして市場に届けると、およそ二万二千三百円で売れた。挽いて人工乾燥し、鉋をかけて柱にすると十万円を超えた。丸太の値段に占める所有者の取り分は、かつては半分を超えていたが、いまは半分をはるかに下回る。伐採・搬出・運搬の費用——おもに人と機械——が、値段ほどには下がっていないからである。",
            zh:"2024 年，一立方公尺的扁柏立木對林主而言約值 8,900 日圓。同樣一立方公尺，伐倒、截成原木並送到市場，售價約 22,300 日圓；鋸切、窯乾並刨成柱材後，售價超過 10 萬日圓。林主在原木價格中的份額，過去曾超過一半，如今已遠低於一半，因為伐採、集材與運輸的成本——主要是人力與機械——並未隨價格下降。" } },
        { t:"figure",
          caption:{
            en:"The value of one cubic metre at three stages, 2024, in yen: standing tree (what the owner receives), log at market, and kiln-dried sawn square. National averages. Sources: Forestry Agency; Japan Real Estate Institute.",
            ja:"一立方メートルの三段階の価値（二〇二四年、円）。立木（所有者の受け取り）、市場の丸太、人工乾燥した正角。全国平均。出典：林野庁、日本不動産研究所。",
            zh:"一立方公尺在三個階段的價值（2024 年，日圓）：立木（林主所得）、市場原木、窯乾正角材。全國平均。資料來源：林野廳；日本不動產研究所。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"From stump to post, ¥ per m³", ja:"切り株から柱まで（円／m³）", zh:"從樹樁到柱材（日圓／m³）" }, labelW:250, rowH:28,
            items:[
              { n:{ en:"Sugi — standing tree", ja:"スギ——立木", zh:"柳杉——立木" }, v:4127, f:"#E0E6DB" },
              { n:{ en:"Sugi — log at market", ja:"スギ——丸太", zh:"柳杉——原木" }, v:15900, f:"#E0E6DB" },
              { n:{ en:"Sugi — dried sawn square", ja:"スギ——乾燥正角", zh:"柳杉——乾燥正角材" }, v:84800, f:"#E0E6DB" },
              { n:{ en:"Hinoki — standing tree", ja:"ヒノキ——立木", zh:"扁柏——立木" }, v:8940, f:"#EDE5D2" },
              { n:{ en:"Hinoki — log at market", ja:"ヒノキ——丸太", zh:"扁柏——原木" }, v:22300, f:"#EDE5D2" },
              { n:{ en:"Hinoki — dried sawn square", ja:"ヒノキ——乾燥正角", zh:"扁柏——乾燥正角材" }, v:103400, f:"#EDE5D2" }
            ] }); } },
        { t:"p",
          text:{
            en:"The steep rise from log to finished timber is not mostly profit: sawing loses a third or more of the log as slabs, sawdust and chips; drying takes energy and time; grading, planing, storage and delivery all cost money. But it shows why Gifu has tried to keep more of the processing inside the prefecture — through its dense network of sawmills, the plywood mill at Kashimo, and furniture and building firms that buy local timber — rather than sending logs elsewhere.",
            ja:"丸太から製品への急な値上がりの大半は利益ではない。製材では丸太の三分の一以上が背板や鋸屑やチップとなって失われ、乾燥には熱と時間が要り、選別・鉋がけ・保管・配送にも費用がかかる。だがそれは、岐阜が丸太をよそへ送るのではなく、加工のより多くを県内にとどめようとしてきた理由を示している——密な製材所の網、加子母の合板工場、そして地元の木を買う家具や建築の会社を通じて。",
            zh:"從原木到成品的大幅增值，大部分並非利潤：製材時原木有三分之一以上成為邊皮、鋸屑與木片；乾燥耗費能源與時間；分級、刨光、倉儲與配送也都要花錢。但它說明了岐阜為何力求把更多加工留在縣內——透過綿密的製材所網絡、加子母的合板廠，以及採購在地木材的家具與建築公司——而不是把原木送往他處。" } }
      ] },
    { t:"section",
      id:"landing",
      title:{ en:"A day on a Tōnō landing", ja:"東濃の土場の一日", zh:"東濃集材場的一天" },
      jp:"現場",
      body:[
        { t:"p",
          text:{
            en:"A typical thinning crew in the hinoki country of eastern Gifu is four or five people with an excavator-based processor, a grapple loader, a forwarder and two or three chainsaws. The day starts before eight with a safety meeting at the landing — the flat area beside the forest road where logs are piled. Fellers work up the slope, directing each tree into a gap; the winch operator pulls whole trees down to the strip road; at the landing the processor strips the branches in a few seconds and measures and cuts the stem into lengths chosen to match the day's market prices, sorting logs into piles by length, diameter and quality. By mid-afternoon a ten-tonne truck arrives to take the day's best logs to the market; chip logs wait for a separate truck to the biomass plant.",
            ja:"岐阜東部のヒノキの産地の典型的な間伐の作業班は、四、五人で、ショベルを台にしたプロセッサ、グラップルローダ、フォワーダ、チェーンソー二、三台をもつ。一日は八時前、土場——丸太を積む林道わきの平らな場所——での安全の打ち合わせで始まる。伐倒手は斜面を上へと働き、一本ずつ空いたところへ倒す。ウインチの操作手は全木を作業道まで引き下ろす。土場ではプロセッサが数秒で枝を払い、その日の市場の値に合わせて選んだ長さに幹を測って切り、長さ・径・品質で山に仕分ける。午後の半ばには十トントラックが来て、その日の良い丸太を市場へ運ぶ。チップ用の丸太は、バイオマス発電所へ向かう別のトラックを待つ。",
            zh:"岐阜東部扁柏產區的典型疏伐作業班約四、五人，配備以挖土機為底盤的造材機、抓木裝載機、運材車與兩三把鏈鋸。一天從早上八點前在集材場——林道旁堆放原木的平地——召開安全會議開始。伐木手沿坡往上作業，把每棵樹伐倒在林隙中；絞盤操作手把全株拖下到作業道；在集材場，造材機幾秒內剝除枝條，並依當天市場價格選定長度量測截斷，再按長度、徑級與品質分堆。午後，一輛十噸卡車抵達，把當天的好原木運往市場；木片用材則等待另一輛開往生質能電廠的卡車。" } },
        { t:"chips",
          items:[
            { text:{ en:"A-grade: straight, sawlogs", ja:"A材：通直、製材用", zh:"A 材：通直，製材用" } },
            { text:{
                en:"B-grade: slightly bent, for plywood and laminated timber",
                ja:"B材：やや曲がり、合板・集成材用",
                zh:"B 材：略彎，合板與集成材用" } },
            { text:{ en:"C-grade: for chips and pulp", ja:"C材：チップ・パルプ用", zh:"C 材：木片與紙漿用" } },
            { text:{ en:"D-grade: tops and branches, for fuel", ja:"D材：梢端や枝条、燃料用", zh:"D 材：樹梢與枝條，燃料用" } }
          ] }
      ] },
    { t:"section",
      id:"productivity",
      title:{ en:"Cubic metres per person per day", ja:"一人一日あたりの立方メートル", zh:"每人每日立方公尺" },
      jp:"労働生産性",
      body:[
        { t:"p",
          text:{
            en:"The single number that best explains the economics of Japanese logging is productivity: how many cubic metres of logs one worker brings to the roadside in a day. The Forestry Agency's figures for 2018 were about 4 cubic metres in thinnings and about 7 in final harvests; the national plan aims for 8 and 11 by FY2030. In Austria, the country Japanese foresters most often study, vehicle-based systems reach 30 to 60 cubic metres and cable systems 7 to 43. The gap is not only one of machines. Steep slopes, sparse road networks, small scattered holdings and thinning — which handles many small trees for little volume — all hold Japanese figures down.",
            ja:"日本の素材生産の経済を最もよく説明する数は、生産性——一人の作業員が一日に道ばたまで出す丸太の立方メートル数——である。林野庁の二〇一八年の数字は、間伐でおよそ四立方メートル、主伐でおよそ七立方メートルだった。国の計画は二〇三〇年度までにそれぞれ八と十一をめざす。日本の林業家が最もよく学びに行くオーストリアでは、車両系の作業システムで三十〜六十立方メートル、架線系で七〜四十三立方メートルに達する。差は機械だけではない。急な斜面、まばらな路網、小さく散らばった所有、そして材積のわりに多くの細い木を扱う間伐が、日本の数字を押し下げている。",
            zh:"最能說明日本伐木經濟的單一數字是生產力：一名作業員一天能把多少立方公尺原木運到路邊。林野廳 2018 年的數據為疏伐約 4 立方公尺、主伐約 7 立方公尺；國家計畫目標是在 2030 年度前分別達到 8 與 11。日本林業人最常取經的奧地利，車輛系統可達 30 至 60 立方公尺，架空索道系統為 7 至 43。差距不只在機械：陡坡、稀疏的路網、零碎分散的林地，以及處理大量細木卻材積有限的疏伐，都壓低了日本的數字。" } },
        { t:"p",
          text:{
            en:"Trials show where the bottleneck lies. In a clear-felling study by the Nagano Prefectural Forestry Research Center (2021), felling ran at roughly 40 to 50 cubic metres per person-day when the average tree held 0.7 cubic metres, a processor exceeded 100 when the average log piece was over a cubic metre, and a forwarder moved 30 to 80 depending on distance — but pulling whole trees to the road with a grapple managed only 10 to 30, and only on slopes up to about 15 degrees. The slowest step sets the pace of the whole crew. Where companies have redesigned the chain around it, the gains are large: the Forestry Agency cites a firm in Iwate, Shibata Forestry, that raised output from 11–14 to 28–45 cubic metres per person-day and cut its costs from ¥3,400–4,200 to ¥2,800–3,800 per cubic metre.",
            ja:"どこが詰まるかは試験が示す。長野県林業総合センターの皆伐の研究（二〇二一年）では、平均の単木材積が〇・七立方メートルのとき伐倒は一人一日およそ四十〜五十立方メートル、プロセッサは平均造材材積が一立方メートルを超えると百を超え、フォワーダは距離によって三十〜八十を運んだ。ところがグラップルで全木を道まで寄せる工程は十〜三十にとどまり、しかも傾斜がおよそ十五度までの林地に限られた。いちばん遅い工程が班全体の速さを決める。そこを中心に工程を組み直した事業体では、効果は大きい。林野庁は岩手県の柴田産業の例を挙げている。一人一日の生産量を十一〜十四から二十八〜四十五立方メートルへ上げ、費用を一立方メートルあたり三千四百〜四千二百円から二千八百〜三千八百円に下げた。",
            zh:"試驗顯示瓶頸所在。長野縣林業總合中心的皆伐研究（2021 年）中，平均單株材積 0.7 立方公尺時，伐倒約每人每日 40 至 50 立方公尺；平均造材材積超過 1 立方公尺時，處理機可超過 100；運材車依距離可運 30 至 80——但以抓木機把全株拖到路邊的工序僅 10 至 30，且只限坡度約 15 度以下的林地。最慢的工序決定整組人的速度。圍繞瓶頸重新設計作業鏈的業者，成效相當可觀：林野廳舉岩手縣柴田產業為例，每人每日產量由 11–14 提高到 28–45 立方公尺，成本由每立方公尺 3,400–4,200 日圓降至 2,800–3,800 日圓。" } },
        { t:"table",
          caption:{ en:"Logging productivity, cubic metres per person-day", ja:"素材生産の労働生産性（m³／人日）", zh:"伐木勞動生產力（立方公尺／人日）" },
          cols:[
            { en:"Case", ja:"事例", zh:"案例" },
            { en:"Productivity", ja:"生産性", zh:"生產力" },
            { en:"Note", ja:"備考", zh:"備註" }
          ],
          rows:[
            [
              { en:"Japan, thinning (2018)", ja:"日本・間伐（二〇一八年）", zh:"日本・疏伐（2018 年）" },
              "≈ 4",
              { en:"National average", ja:"全国平均", zh:"全國平均" }
            ],
            [
              { en:"Japan, final harvest (2018)", ja:"日本・主伐（二〇一八年）", zh:"日本・主伐（2018 年）" },
              "≈ 7",
              { en:"National average", ja:"全国平均", zh:"全國平均" }
            ],
            [
              { en:"Japan, targets for FY2030", ja:"日本・二〇三〇年度目標", zh:"日本・2030 年度目標" },
              "8 / 11",
              { en:"Thinning / final harvest", ja:"間伐／主伐", zh:"疏伐／主伐" }
            ],
            [
              { en:"Shibata Forestry, Iwate", ja:"柴田産業（岩手県）", zh:"柴田產業（岩手縣）" },
              "28–45",
              {
                en:"Up from 11–14 after reorganising the work system",
                ja:"作業システムの見直しで十一〜十四から上昇",
                zh:"重整作業系統後由 11–14 提升" }
            ],
            [
              { en:"Austria, vehicle systems", ja:"オーストリア・車両系", zh:"奧地利・車輛系統" },
              "30–60",
              { en:"Gentle terrain, dense roads", ja:"緩い地形と密な路網", zh:"地形和緩、路網密集" }
            ],
            [
              { en:"Austria, cable systems", ja:"オーストリア・架線系", zh:"奧地利・架空索道系統" },
              "7–43",
              { en:"Steep terrain", ja:"急な地形", zh:"陡峭地形" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Annual Report on Forest and Forestry FY2020, special feature 1 (productivity, Austria, Shibata Forestry); FY2022 report, chapter 2 (FY2030 targets); Nagano Prefectural Forestry Research Center, “Building an efficient clear-felling work system” (2021).",
            ja:"出典：林野庁「令和二年度 森林・林業白書」特集一（生産性、オーストリア、柴田産業）、「令和四年度 森林・林業白書」第二章（二〇三〇年度目標）、長野県林業総合センター「効率的な皆伐作業システムの構築」（二〇二一年）。",
            zh:"資料來源：林野廳《2020 年度森林・林業白皮書》特輯一（生產力、奧地利、柴田產業）；《2022 年度白皮書》第二章（2030 年度目標）；長野縣林業總合中心〈建構高效率皆伐作業系統〉（2021 年）。" } }
      ] },
    { t:"section",
      id:"costgap",
      title:{ en:"The gap between stump and market", ja:"山元と市場のあいだ", zh:"山頭與市場之間的落差" },
      jp:"伐出・運搬の費用",
      body:[
        { t:"p",
          text:{
            en:"The standing-timber price an owner receives is, in effect, what is left of the log price after the costs of getting the log to market. In 2024 that gap was about ¥11,800 per cubic metre for sugi (a log price of ¥15,900 against a standing price of ¥4,127) and about ¥13,400 for hinoki (¥22,300 against ¥8,940). Productivity explains much of it. At Gifu's average daily wage for extraction workers in FY2025, ¥17,051, a crew producing 7 cubic metres per person-day spends about ¥2,400 per cubic metre on wages alone; at the 4 cubic metres typical of thinning, about ¥4,300. Machines and their fuel, strip roads, loading, trucking, market commission and overheads add the rest. Every extra cubic metre a crew handles in a day therefore goes almost directly into the owner's pocket — or makes possible a thinning that would otherwise not pay.",
            ja:"所有者が受け取る山元立木価格は、実質的には、丸太価格から丸太を市場に届けるまでの費用を引いた残りである。二〇二四年、その差はスギで一立方メートルあたり約一万一千八百円（丸太一万五千九百円に対し立木四千百二十七円）、ヒノキで約一万三千四百円（二万二千三百円に対し八千九百四十円）だった。その多くは生産性で説明できる。二〇二五年度の岐阜の伐出作業員の平均日給一万七千五十一円で計算すると、一人一日七立方メートルを出す班では、賃金だけで一立方メートルあたり約二千四百円、間伐でふつうの四立方メートルなら約四千三百円になる。機械と燃料、作業道、積み込み、トラック輸送、市場の手数料、間接費が残りを占める。だから班が一日に扱う立方メートルが一つふえるごとに、それはほぼそのまま所有者の手取りになり、あるいは採算の合わない間伐を可能にする。",
            zh:"林主拿到的立木價格，實質上就是原木價格扣除把原木送到市場的成本後所剩的部分。2024 年，柳杉的落差約每立方公尺 11,800 日圓（原木 15,900 日圓對立木 4,127 日圓），扁柏約 13,400 日圓（22,300 日圓對 8,940 日圓）。其中很大一部分可由生產力解釋。以岐阜 2025 年度伐出作業員平均日薪 17,051 日圓計算，每人每日產出 7 立方公尺的作業班，光是工資就約每立方公尺 2,400 日圓；若是疏伐常見的 4 立方公尺，則約 4,300 日圓。機械與燃料、作業道、裝車、卡車運輸、市場佣金與管理費用構成其餘部分。因此，作業班每天多處理一立方公尺，幾乎都會直接進到林主口袋——或讓原本不划算的疏伐得以進行。" } },
        { t:"table",
          caption:{
            en:"The owner's share of the log price, 1980 and 2024 (national averages, yen per m³)",
            ja:"丸太価格に占める所有者の取り分、一九八〇年と二〇二四年（全国平均、円／m³）",
            zh:"林主在原木價格中的分配比例，1980 年與 2024 年（全國平均，日圓／立方公尺）" },
          cols:[
            { en:"Species, year", ja:"樹種・年", zh:"樹種・年份" },
            { en:"Standing price", ja:"山元立木価格", zh:"立木價格" },
            { en:"Log price", ja:"丸太価格", zh:"原木價格" },
            { en:"Owner's share", ja:"所有者の取り分", zh:"林主比例" }
          ],
          numCols:[1, 2, 3],
          rows:[
            [{ en:"Sugi 1980", ja:"スギ 一九八〇年", zh:"柳杉 1980 年" }, "22,707", "39,600", "57%"],
            [{ en:"Sugi 2024", ja:"スギ 二〇二四年", zh:"柳杉 2024 年" }, "4,127", "15,900", "26%"],
            [{ en:"Hinoki 1980", ja:"ヒノキ 一九八〇年", zh:"扁柏 1980 年" }, "42,947", "76,400", "56%"],
            [{ en:"Hinoki 2024", ja:"ヒノキ 二〇二四年", zh:"扁柏 2024 年" }, "8,940", "22,300", "40%"]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Japan Real Estate Institute, standing timber prices (1980 peak; March 2024); Ministry of Agriculture, Forestry and Fisheries, timber price statistics (medium logs); Gifu Prefecture, forestry labour survey FY2025 (daily wage). Shares and per-m³ wage costs calculated for this book; the standing price and log price are separate national surveys, so the shares are indicative.",
            ja:"出典：日本不動産研究所「山林素地及び山元立木価格調」（一九八〇年の頂点、二〇二四年三月）、農林水産省「木材価格統計」（中丸太）、岐阜県「林業労働力調査」二〇二五年度（日給）。取り分と一立方メートルあたりの賃金は本書で計算。立木価格と丸太価格は別々の全国調査なので、割合は目安である。",
            zh:"資料來源：日本不動產研究所〈山林素地及山元立木價格調查〉（1980 年高峰；2024 年 3 月）；農林水產省〈木材價格統計〉（中徑原木）；岐阜縣〈林業勞動力調查〉2025 年度（日薪）。比例與每立方公尺工資成本由本書計算；立木價格與原木價格分屬不同的全國調查，比例僅供參考。" } }
      ] },
    { t:"section",
      id:"sales",
      title:{ en:"Ways to sell a forest", ja:"森の売り方", zh:"森林的販售方式" },
      jp:"立木販売・委託販売",
      body:[
        { t:"p",
          text:{
            en:"A Gifu owner who decides to harvest has several ways to turn trees into money, and they divide the risk differently between owner and cutter. Most small owners now work through their cooperative, which bundles their stand with the neighbours' under one management plan and one set of subsidies (see <a href=\"policy.html\">Forest Law &amp; Policy</a>).",
            ja:"伐ることを決めた岐阜の所有者には、木をお金に変えるいくつかの方法があり、それぞれ所有者と伐り手のあいだで危険の分け方が違う。小さな所有者の多くはいま組合を通じて動き、組合は隣の山とまとめて一つの経営計画と一組の補助のもとに置く（<a href=\"policy.html\">森林の法と政策</a>参照）。",
            zh:"決定伐採的岐阜林主有幾種把樹木變現的方式，各自在林主與伐木者之間分擔風險的方式不同。如今多數小林主透過所屬組合運作，組合會把其林分與鄰地合併在同一份經營計畫與同一組補助之下（見<a href=\"policy.html\">森林法規與政策</a>）。" } },
        { t:"defs",
          items:[
            { term:{ en:"Standing sale", ja:"立木販売", zh:"立木販售" },
              jp:"りゅうぼくはんばい",
              def:{
                en:"The owner sells the trees as they stand, for a lump sum or a price per cubic metre, and the buyer — a logging firm or sawmill — fells, extracts and sells them at its own risk. Simple and certain for the owner, but the buyer prices in every difficulty of the site.",
                ja:"所有者が木を立ったまま、一括または一立方メートルいくらで売り、買い手——素材生産業者や製材所——が自分の危険で伐り、出し、売る。所有者には簡単で確実だが、買い手は現場の難しさをすべて値に織りこむ。",
                zh:"林主把樹木以立木狀態出售，可一次總價或按每立方公尺計價，由買方——伐木業者或製材所——自負風險伐採、集運並銷售。對林主而言簡單確定，但買方會把現場的每項困難都計入價格。" } },
            { term:{ en:"Consignment", ja:"委託販売", zh:"委託販售" },
              jp:"いたくはんばい",
              def:{
                en:"A cooperative or contractor fells the trees and sells the logs at market on the owner's account, deducts its costs and commission, and pays the owner what remains. The owner gains if the market is good and bears the loss if it is not — after a poor thinning the statement can show almost nothing left.",
                ja:"組合や請負業者が木を伐り、所有者の勘定で丸太を市場で売り、費用と手数料を差し引いて残りを所有者に払う。市況がよければ所有者が得をし、悪ければ損をかぶる。条件の悪い間伐のあとでは、精算書にほとんど何も残らないこともある。",
                zh:"由組合或承包商伐採，以林主名義在市場出售原木，扣除成本與佣金後將餘額付給林主。行情好時林主獲利，行情差時由林主承擔損失——條件差的疏伐結算後，對帳單上可能幾乎所剩無幾。" } },
            { term:{ en:"Contract work", ja:"請負", zh:"承攬作業" },
              jp:"うけおい",
              def:{
                en:"The owner pays a contractor a fixed fee per hectare or per cubic metre for the work and sells the logs separately. Common for subsidised tending and for large owners, companies and public forests.",
                ja:"所有者が作業に対して一ヘクタールまたは一立方メートルいくらの決まった料金を請負業者に払い、丸太は別に売る。補助を受ける保育作業や、大きな所有者、企業、公有林でよく使われる。",
                zh:"林主按每公頃或每立方公尺支付固定費用給承包商，原木另行銷售。常見於受補助的撫育作業，以及大林主、企業與公有林。" } },
            { term:{ en:"Self-felling", ja:"自伐", zh:"自伐" },
              jp:"じばつ",
              def:{
                en:"The owner, or a small local group, does the work with a chainsaw, a small excavator and a light truck, cutting a little each year on narrow, carefully built tracks. Promoted since the 2010s by a national movement as a low-impact alternative to large contracted harvests, and suited to owners who live near their forests.",
                ja:"所有者や地域の小さな集まりが、チェーンソー、小型のショベル、軽トラックで、細く丁寧につくった道を使い、毎年少しずつ伐る。大規模な請負の伐採にかわる環境への負荷の小さいやり方として、二〇一〇年代から全国的な運動が広めており、森の近くに住む所有者に向く。",
                zh:"由林主或在地小團體以鏈鋸、小型挖土機與輕型卡車作業，沿著細心開設的窄便道每年少量伐採。自 2010 年代起由全國性運動推廣，作為大規模承攬伐採之外低衝擊的選擇，適合住在林地附近的林主。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sale types as commonly practised in Japanese private forestry; arrangements vary by cooperative and contract.",
            ja:"販売の形は日本の民有林で一般に行われているもの。組合や契約によって取り決めは異なる。",
            zh:"販售方式為日本私有林常見做法；具體安排依組合與契約而異。" } }
      ] },
    { t:"related",
      items:[
        { href:"felling.html", why:{ en:"The craft of bringing a tree down.", ja:"木を倒す技。", zh:"伐倒樹木的技藝。" } },
        { href:"markets.html", why:{ en:"Where the logs are sold.", ja:"丸太はどこで売られるか。", zh:"原木在哪裡販售。" } },
        { href:"workers.html", why:{ en:"The people and the dangers.", ja:"人と危険。", zh:"人與危險。" } },
        { href:"silviculture.html", why:{ en:"Thinning and replanting.", ja:"間伐と再造林。", zh:"疏伐與再造林。" } }
      ] }
  ] };

/* ---- ------------------------------------------- felling */
GIFU.pages["felling"] = { kicker:{ en:"Timber · 02", ja:"木材 · 02", zh:"木材 · 02" },
  title:{ en:"Felling", ja:"伐倒", zh:"伐倒" },
  jp:"受け口・追い口・つる · 三ツ緒伐り",
  lede:{
    en:"Felling a tree is the moment on which everything else in forestry depends, and the most dangerous task in one of Japan's most dangerous industries. A mature hinoki may weigh several tonnes and lean, twist, split or hang up in its neighbours in ways that are hard to predict. The technique that controls it — a notch, a back cut and a strip of wood left between them as a hinge — is simple to describe and takes years to master. This page explains the cut, traces felling from the axe to the harvester, and describes the ancient three-cord method still used to fell the sacred hinoki for the Ise Shrine in Gifu.",
    ja:"木を倒すことは、林業のほかのすべてが依って立つ瞬間であり、日本で最も危険な産業の一つの、最も危険な仕事である。成熟したヒノキは数トンの重さがあり、予測しにくいかたちで傾き、ねじれ、裂け、隣の木に掛かる。それを制する技——受け口と追い口、そしてそのあいだに蝶番として残す木の帯——は、説明するのはたやすく、身につけるには何年もかかる。この頁は、その切り方を説明し、斧からハーベスタまでの伐倒をたどり、岐阜でいまも伊勢神宮の御神木のヒノキを倒すのに使われる古い三ツ緒伐りを紹介する。",
    zh:"伐倒樹木是林業中其他一切所依賴的關鍵時刻，也是日本最危險產業之一中最危險的工作。一棵成熟的扁柏可能重達數噸，會以難以預料的方式傾斜、扭轉、劈裂或卡在鄰樹上。控制它的技術——一道缺口、一道追口，以及兩者之間留作鉸鏈的一條木材——說來簡單，卻要多年才能熟練。本頁說明這種切法，追溯從斧頭到伐木聯合機的伐倒演變，並介紹至今仍在岐阜用於伐倒伊勢神宮御神木扁柏的古老「三緒伐」。" },
  body:[
    { t:"section",
      id:"cut",
      title:{ en:"The directional cut", ja:"方向を決める切り方", zh:"定向伐倒切法" },
      jp:"受け口と追い口",
      body:[
        { t:"p",
          text:{
            en:"Every modern felling follows the same principle. On the side towards which the tree is to fall, the feller cuts a wedge-shaped notch, the <em>ukeguchi</em>, “receiving mouth”. On the opposite side, slightly higher than the base of the notch, comes the back cut, the <em>oiguchi</em>, “chasing mouth”. The back cut stops short of the notch, leaving a band of uncut fibres — the <em>tsuru</em>, literally “bowstring” — which acts as a hinge. As the tree begins to fall, the hinge bends and steers it along the line of the notch until the notch closes and the hinge breaks. Without it, the tree falls where its weight and the wind decide.",
            ja:"現代の伐倒はどれも同じ原理にしたがう。木を倒したい側に、伐倒者はくさび形の切り込み、受け口をつくる。反対側、受け口の底よりわずかに高いところに、追い口を入れる。追い口は受け口まで切り通さず、切り残した繊維の帯——「つる」——を残し、これが蝶番として働く。木が倒れはじめると、つるが曲がって木を受け口の向きに導き、受け口が閉じたところでつるが切れる。つるがなければ、木はその重さと風の決めるところへ倒れる。",
            zh:"所有現代伐倒都遵循同一原則。在預定倒向的一側，伐木者切出楔形缺口，稱為「受口」（接受之口）。在另一側、略高於缺口底部處，切入追口（追趕之口）。追口不與缺口切通，保留一條未切斷的纖維帶——日文稱「鶴」（弦），字面意為「弓弦」——作為鉸鏈。樹木開始傾倒時，鉸鏈彎曲，引導樹沿缺口方向倒下，直到缺口閉合、鉸鏈斷裂。沒有它，樹就會倒向其重量與風向所決定的方向。" } },
        { t:"figure",
          caption:{
            en:"The felling cut seen from the side. The notch depth is typically a quarter to a third of the diameter; the hinge is left about a tenth of the diameter thick; the back cut is made slightly above the floor of the notch so that the tree cannot slide back over the stump.",
            ja:"横から見た伐倒の切り方。受け口の深さはふつう直径の四分の一から三分の一、つるの厚さは直径のおよそ十分の一を残す。追い口は受け口の底よりわずかに高く入れ、木が切り株の上を後ろへ滑らないようにする。",
            zh:"從側面看伐倒切法。缺口深度通常為直徑的四分之一到三分之一；鉸鏈厚度約保留直徑的十分之一；追口略高於缺口底部，使樹木無法向後滑過樹樁。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 310" role="img">';
            s += F.text(20, 28, lang==="en"?"NOTCH, BACK CUT AND HINGE":(lang==="ja"?"受け口・追い口・つる":"缺口、追口與鉸鏈"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            // trunk: x 200..440 (diameter 240), ground y 280
            s += '<rect x="200" y="50" width="240" height="230" fill="#EDE5D2" stroke="#7C6B52"/>';
            s += '<line x1="120" y1="280" x2="560" y2="280" stroke="#8B857C"/>';
            // notch on left (fall to left): upper cut from (200,150) to (275,190), lower cut horizontal (200,190)-(275,190)
            s += '<path d="M200 150 L275 190 L200 190 Z" fill="#FBFAF7" stroke="#7C6B52"/>';
            // back cut from right (440,198) to (299,198)
            s += '<line x1="440" y1="198" x2="299" y2="198" stroke="#201E1B" stroke-width="2"/>';
            // hinge
            s += '<rect x="275" y="186" width="24" height="16" fill="#EADCC1" stroke="#A08F73"/>';
            // labels
            function lab(x1,y1,x2,y2,t,sub){ return '<path d="M'+x1+' '+y1+' L'+x2+' '+y2+'" stroke="#8B857C" fill="none"/>' + F.text(x2+(x2>x1?6:-6), y2+4, L(t), { size:11.5, fill:"#201E1B", anchor: x2>x1?null:"end" }) + (sub? F.text(x2+(x2>x1?6:-6), y2+19, L(sub), { size:10, fill:"#55504A", anchor: x2>x1?null:"end" }) : ""); }
            s += lab(225, 182, 150, 238,{ en:"Notch (ukeguchi)", ja:"受け口", zh:"缺口（受口）" }, { en:"¼–⅓ of diameter", ja:"直径の1/4〜1/3", zh:"直徑 1/4–1/3" });
            s += lab(287, 202, 300, 250, { en:"Hinge (tsuru)", ja:"つる", zh:"鉸鏈（鶴）" }, { en:"≈ 1/10 of diameter", ja:"直径の約1/10", zh:"約直徑 1/10" });
            s += lab(420, 198, 490, 150, { en:"Back cut (oiguchi)", ja:"追い口", zh:"追口" }, { en:"slightly above notch floor", ja:"受け口の底より少し上", zh:"略高於缺口底部" });
            // fall arrow
            s += '<path d="M190 70 Q110 90 90 170" fill="none" stroke="#7C6B52" stroke-width="1.6"/><path d="M84 160 L90 172 L98 162" fill="none" stroke="#7C6B52" stroke-width="1.6"/>';
            s += F.text(40, 64, lang==="en"?"direction of fall":(lang==="ja"?"倒す方向":"倒向"), { size:10.5, fill:"#55504A" });
            s += F.text(600, 90, lang==="en"?"Wedges driven into the":(lang==="ja"?"追い口に打つ楔が":"打入追口的楔子"), { size:10.5, fill:"#55504A" });
            s += F.text(600, 105, lang==="en"?"back cut lift and push":(lang==="ja"?"木を持ち上げて":"能抬起並推動"), { size:10.5, fill:"#55504A" });
            s += F.text(600, 120, lang==="en"?"the tree over.":(lang==="ja"?"押し倒す。":"樹木倒下。"), { size:10.5, fill:"#55504A" });
            s += '<path d="M445 194 L470 190 L470 206 L445 202 Z" fill="#E6E4E0" stroke="#7C6B52"/>';
            return s + '</svg>';
          } },
        { t:"steps",
          items:[
            { title:{ en:"Read the tree", ja:"木を読む", zh:"判讀樹木" },
              text:{
                en:"Lean, crown weight, rot, wind, neighbours and escape routes are assessed before a single cut. Two escape routes are chosen, at 45° behind the line of fall.",
                ja:"一太刀入れる前に、傾き、樹冠の重さ、腐れ、風、まわりの木、退避路を見る。倒す方向の後ろ斜め四十五度に二つの退避路を決める。",
                zh:"在下第一刀之前，先評估傾斜、樹冠重量、腐朽、風向、鄰樹與逃生路線；在倒向後方 45 度選定兩條逃生路線。" } },
            { title:{ en:"Cut the notch", ja:"受け口を切る", zh:"切出缺口" },
              text:{
                en:"The upper and lower cuts must meet exactly; their meeting line sets the hinge line and so the direction of fall.",
                ja:"上と下の切り込みはぴたりと合わねばならない。その合わさる線がつるの線となり、倒す方向を決める。",
                zh:"上下兩刀必須精準交會；交會線決定鉸鏈線，也就決定倒向。" } },
            { title:{ en:"Make the back cut", ja:"追い口を切る", zh:"切入追口" },
              text:{
                en:"Level and parallel to the hinge, leaving an even hinge; wedges go in as soon as there is room.",
                ja:"水平につると平行に切り、均一なつるを残す。隙間ができたらすぐに楔を入れる。",
                zh:"水平並與鉸鏈平行，留下厚度均勻的鉸鏈；一有空隙便立即打入楔子。" } },
            { title:{ en:"Call and retreat", ja:"合図と退避", zh:"呼喊並撤離" },
              text:{
                en:"A shout warns the crew; the feller steps back along the escape route and watches the crown, not the stump.",
                ja:"声をかけて作業班に知らせ、伐倒者は退避路を下がり、切り株ではなく梢を見る。",
                zh:"大聲示警作業班；伐木者沿逃生路線後退，注視樹冠而非樹樁。" } }
          ] }
      ] },
    { t:"section",
      id:"history",
      title:{ en:"From axe to harvester", ja:"斧からハーベスタへ", zh:"從斧頭到伐木聯合機" },
      jp:"伐倒の道具",
      body:[
        { t:"timeline",
          items:[
            { year:{ en:"Ancient–medieval", ja:"古代〜中世", zh:"古代至中世" },
              title:{ en:"The axe", ja:"斧", zh:"斧" },
              jp:"よき・まさかり",
              text:{
                en:"Trees are felled with axes, chopping from two or three sides. Timber for temples is split, not sawn, into beams and boards with wedges.",
                ja:"木は斧で、二方か三方から伐り倒される。寺の材は鋸で挽くのではなく、楔で割って梁や板にする。",
                zh:"以斧伐木，從兩到三面砍削。寺院用材以楔子劈開成樑與板，而非鋸切。" } },
            { year:{ en:"15th century", ja:"十五世紀", zh:"十五世紀" },
              title:{ en:"The frame saw", ja:"大鋸", zh:"大鋸" },
              jp:"おが",
              text:{
                en:"The two-man frame saw arrives from the continent, making it possible to rip logs into boards, and changes Japanese carpentry. Felling is still done largely with axes and later with crosscut saws.",
                ja:"大陸から二人挽きの枠鋸が伝わり、丸太を板に挽くことが可能になって、日本の大工仕事を変える。伐倒はなお大部分が斧で、のちには横挽き鋸で行われる。",
                zh:"雙人框鋸自大陸傳入，使原木可縱鋸成板，改變了日本木工。伐倒仍多以斧頭進行，後來才用橫切鋸。" } },
            { year:{ en:"Edo period", ja:"江戸時代", zh:"江戶時代" },
              title:{ en:"Kiso-style felling", ja:"木曽式伐木運材法", zh:"木曾式伐木運材法" },
              jp:"三ツ紐伐り",
              text:{
                en:"In the Owari domain's Kiso forests, great hinoki are felled by cutting in from three sides and leaving three cords of wood, which are severed last to control the fall — the method preserved today as <em>mitsuo-giri</em>.",
                ja:"尾張藩の木曽の森では、大きなヒノキを三方から切りこみ三本の木の緒を残し、最後にそれを断って倒れ方を制した——いまも三ツ緒伐りとして伝えられる方法である。",
                zh:"在尾張藩的木曾森林，巨大扁柏以三面切入、保留三條木緒，最後才切斷以控制倒向——此法至今以「三緒伐」之名傳承。" } },
            { year:"1950s",
              title:{ en:"The chainsaw", ja:"チェーンソー", zh:"鏈鋸" },
              jp:"動力鋸",
              text:{
                en:"Imported and then domestic chainsaws spread through the national forests and the post-war logging boom, multiplying output per worker.",
                ja:"輸入の、ついで国産のチェーンソーが国有林と戦後の伐採の好景気のなかに広まり、一人あたりの生産を何倍にもする。",
                zh:"進口及後來的國產鏈鋸普及於國有林與戰後伐木熱潮，使每位工人的產量倍增。" } },
            { year:"1960s–70s",
              title:{ en:"Vibration disease", ja:"振動障害", zh:"振動障礙" },
              jp:"白ろう病",
              text:{
                en:"Heavy early chainsaws cause “white finger” — damage to blood vessels and nerves in the hands — among thousands of forest workers. It becomes a major labour issue, leading to lighter anti-vibration saws and limits on daily operating time.",
                ja:"重い初期のチェーンソーが、何千もの林業労働者に「白ろう病」——手の血管と神経の障害——を引き起こす。大きな労働問題となり、軽い防振型の鋸と一日の操作時間の制限につながる。",
                zh:"早期笨重的鏈鋸在數千名林業工人中造成「白蠟病」——手部血管與神經損傷。這成為重大勞工議題，促成較輕的防振鏈鋸與每日操作時間限制。" } },
            { year:"1990s–",
              title:{ en:"High-performance machines", ja:"高性能林業機械", zh:"高性能林業機械" },
              jp:"ハーベスタ",
              text:{
                en:"Harvesters, processors and forwarders adapted from Nordic designs and mounted on Japanese excavators spread; by fiscal 2024 Japan has more than 16,000.",
                ja:"北欧の設計を日本のショベルに載せたハーベスタ、プロセッサ、フォワーダが広まり、二〇二四年度には日本に一万六千台を超える。",
                zh:"改良自北歐設計、裝在日本挖土機上的伐木聯合機、造材機與運材車逐漸普及；至 2024 年度，日本已超過 16,000 台。" } }
          ] }
      ] },
    { t:"section",
      id:"mitsuo",
      title:{ en:"Felling for Ise", ja:"伊勢のための伐採", zh:"為伊勢而伐" },
      jp:"裏木曽御用材伐採式",
      body:[
        { t:"p",
          text:{
            en:"Every twenty years the Ise Shrine is rebuilt on an adjacent site, and the ceremonies begin eight years before the transfer with the felling of the first sacred trees. For the 63rd rebuilding, whose transfer of the deity is set for October 2033, the timber ceremonies began in 2025. On 3 June a ceremony was held in the Kiso valley national forest at Agematsu in Nagano; on 5 June, two great hinoki were felled in the Ura-Kiso national forest at Kashimo in Nakatsugawa, Gifu — a source for Ise since the rebuilding of 1709.",
            ja:"伊勢神宮は二十年ごとに隣の敷地に建て替えられ、その祭りは遷御の八年前、最初の御神木を伐ることから始まる。遷御が二〇三三年十月に予定される第六十三回式年遷宮では、用材の祭りは二〇二五年に始まった。六月三日には長野県上松町の木曽谷国有林で祭りが行われ、六月五日には岐阜県中津川市加子母の裏木曽国有林で二本の大きなヒノキが伐られた——一七〇九年の遷宮から伊勢に材を出してきた山である。",
            zh:"伊勢神宮每二十年在相鄰基地重建一次，其儀式在遷御前八年、以伐採第一批御神木揭開序幕。第 63 次式年遷宮預定於 2033 年 10 月遷御，用材儀式於 2025 年展開：6 月 3 日在長野縣上松町木曾谷國有林舉行祭儀；6 月 5 日，在岐阜縣中津川市加子母的裏木曾國有林伐倒兩株巨大扁柏——自 1709 年的遷宮起，此山便為伊勢供材。" } },
        { t:"p",
          text:{
            en:"The trees are felled by <em>mitsuo-giri</em>, the three-cord method. Instead of a notch and back cut, the fellers cut into the trunk from three directions with axes, leaving three narrow columns of wood — the cords — standing between the cuts, so that the tree stays upright and balanced. The cords are then severed one by one, the last determining the moment and direction of the fall. Each tree takes about an hour. The tree is not allowed to crash down but is “laid to rest”, and the stump receives the crown branch in thanks to the mountain. The skill is kept by a local preservation society of Ura-Kiso woodsmen.",
            ja:"木は三ツ緒伐りで倒される。受け口と追い口のかわりに、伐り手は斧で三方から幹に切りこみ、切り込みのあいだに三本の細い木の柱——緒——を残して、木を立ったまま釣りあわせる。それから緒を一本ずつ断ち、最後の一本が倒れる時と方向を決める。一本におよそ一時間かかる。木は打ち倒されるのではなく「寝かされ」、切り株には山への感謝として梢の枝が立てられる。この技は、裏木曽の杣人たちの地元の保存会が守っている。",
            zh:"樹木以「三緒伐」法伐倒。不同於缺口與追口，伐木者以斧頭從三個方向切入樹幹，在切口之間留下三根細窄的木柱——即「緒」——讓樹木保持直立平衡。接著逐一切斷這三條緒，最後一條決定倒下的時刻與方向。每棵樹約需一小時。樹木不是被砸倒，而是被「安放躺下」，樹樁上則立起樹冠枝條以感謝山神。這項技藝由裏木曾杣人組成的在地保存會傳承。" } },
        { t:"table",
          caption:{
            en:"Timber ceremonies of the 63rd rebuilding of the Ise Shrine",
            ja:"第六十三回式年遷宮の用材の祭り",
            zh:"第 63 次伊勢神宮式年遷宮用材儀式" },
          cols:[{ en:"Date", ja:"日", zh:"日期" }, { en:"Ceremony", ja:"祭り", zh:"儀式" }, { en:"Place", ja:"場所", zh:"地點" }],
          rows:[
            [
              "2025-05-02",
              {
                en:"Yamaguchi-sai — prayer at the foot of the mountains before cutting",
                ja:"山口祭——伐採の前に山の口で祈る",
                zh:"山口祭——伐採前於山口祈禱" },
              { en:"Ise", ja:"伊勢", zh:"伊勢" }
            ],
            [
              "2025-06-03",
              { en:"Misomahajime-sai — first felling of the sacred timber", ja:"御杣始祭", zh:"御杣始祭——首次伐採御用材" },
              { en:"Kiso valley national forest, Agematsu, Nagano", ja:"長野県上松町 木曽谷国有林", zh:"長野縣上松町木曾谷國有林" }
            ],
            [
              "2025-06-05",
              { en:"Ura-Kiso sacred-timber felling ceremony", ja:"裏木曽御用材伐採式", zh:"裏木曾御用材伐採式" },
              {
                en:"Ura-Kiso national forest, Kashimo, Nakatsugawa, Gifu",
                ja:"岐阜県中津川市加子母 裏木曽国有林",
                zh:"岐阜縣中津川市加子母裏木曾國有林" }
            ],
            [
              "2025-06-05/07",
              {
                en:"Processions of the sacred timber through Tsukechi, Fukuoka, Naegi and Nakatsugawa",
                ja:"御神木祭（付知・福岡・苗木・中津川などを巡行）",
                zh:"御神木祭（巡行付知、福岡、苗木、中津川等地）" },
              { en:"Nakatsugawa", ja:"中津川市", zh:"中津川市" }
            ],
            [
              "2025-06-09/10",
              { en:"Mihishirogi-hōei-shiki — the logs arrive at Ise", ja:"御樋代木奉曳式", zh:"御樋代木奉曳式——原木抵達伊勢" },
              { en:"Ise", ja:"伊勢", zh:"伊勢" }
            ],
            [
              "2026–2027",
              { en:"Okihiki — citizens haul timber into the shrine", ja:"お木曳", zh:"御木曳——市民拖運木材入宮" },
              { en:"Ise", ja:"伊勢", zh:"伊勢" }
            ],
            [
              "2033-10",
              { en:"Sengyo — transfer of the deity to the new shrine", ja:"遷御", zh:"遷御——神體遷入新殿" },
              { en:"Ise", ja:"伊勢", zh:"伊勢" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Source: Jingū Shichō (Ise Shrine administration), schedule of the 63rd Shikinen Sengū; Nakatsugawa city.",
            ja:"出典：神宮司庁「第六十三回式年遷宮 日程」、中津川市。",
            zh:"資料來源：神宮司廳〈第 63 次式年遷宮日程〉；中津川市。" } }
      ] },
    { t:"section",
      id:"hazards",
      title:{ en:"Where it goes wrong", ja:"どこで事故は起きるか", zh:"意外發生在哪裡" },
      jp:"かかり木",
      body:[
        { t:"p",
          text:{
            en:"Felling accounts for the majority of fatal accidents in Japanese forestry. The dangers are well known: a tree that splits upwards as it falls (<em>barber chair</em>), a dead branch dropping from above, a stem that kicks back off the stump, a chainsaw that kicks back towards the operator, and above all the hung-up tree — <em>kakarigi</em> — which lodges in the crown of a neighbour instead of reaching the ground and may come down at any moment. The temptation to fell a second tree onto the first to knock it down has killed many workers.",
            ja:"伐倒は日本の林業の死亡災害の大半を占める。危険はよく知られている。倒れながら上へ裂ける木、上から落ちる枯れ枝、切り株から跳ね返る幹、操作者のほうへ跳ねるチェーンソー、そして何よりも、地面に届かずに隣の木の梢に引っかかり、いつ落ちてくるかわからない「かかり木」。それを倒すために別の木を浴びせ倒したくなる誘惑は、多くの働き手の命を奪ってきた。",
            zh:"伐倒占日本林業死亡事故的大多數。危險眾所皆知：倒下時向上劈裂的樹（俗稱「理髮椅」）、從上方掉落的枯枝、從樹樁反彈的樹幹、朝操作者回彈的鏈鋸，以及最危險的「掛樹」——卡在鄰樹樹冠而未落地、隨時可能墜下的樹。為了把它撞下而把另一棵樹砸上去的誘惑，已奪走許多工人的性命。" } },
        { t:"defs",
          items:[
            { term:{ en:"The 2019 safety rules", ja:"二〇一九年の安全規則", zh:"2019 年安全規則" },
              jp:"労働安全衛生規則改正",
              def:{
                en:"In 2019 Japan revised its occupational safety regulations for chainsaw felling. Among other things, a proper notch and back cut became mandatory for trees above a certain size; felling another tree onto a hung-up tree, and cutting the tree it rests on, were prohibited; others must keep a safe distance from the feller; and cut-resistant leg protection became compulsory for chainsaw work.",
                ja:"二〇一九年、日本はチェーンソーによる伐木の労働安全の規則を改めた。一定以上の太さの木には正しい受け口と追い口が義務となり、かかり木に別の木を浴びせ倒すことと、かかり木がもたれている木を伐ることが禁じられ、ほかの者は伐倒者から安全な距離をとらねばならず、チェーンソー作業には下肢の切創防護衣が義務となった。",
                zh:"2019 年日本修訂鏈鋸伐木的職業安全法規，重點包括：超過一定徑級的樹木必須正確切出缺口與追口；禁止把另一棵樹砸向掛樹，也禁止砍伐掛樹所倚靠的樹；其他人員須與伐木者保持安全距離；鏈鋸作業須穿著防切割腿部護具。" } },
            { term:{ en:"Dealing with a hung-up tree", ja:"かかり木の処理", zh:"處理掛樹" },
              jp:"かかり木処理",
              def:{
                en:"The approved methods pull the tree free from a safe distance: a hand winch or a machine winch with a rope, turning tools and levers to rotate the butt, or, where available, a grapple on an excavator.",
                ja:"認められた方法は、安全な距離から木を引き外すものである。手動ウインチや機械のウインチとロープ、元口を回すための木回しやてこ、使えるならショベルのグラップル。",
                zh:"經核可的方法是在安全距離外把樹拉開：使用手動或機械絞盤與繩索、轉動樹基的迴轉工具與槓桿，或在可行時使用挖土機的抓木器。" } },
            { term:{ en:"Special felling", ja:"特殊伐採", zh:"特殊伐採" },
              jp:"アーボリスト",
              def:{
                en:"Trees beside houses, shrines, roads and power lines cannot be felled whole. Specialist climbers — increasingly trained as arborists — climb the tree on ropes and take it down in sections, lowering each piece on a rope. Shrine groves and village trees in Gifu are often managed this way.",
                ja:"家や社寺や道路や電線のそばの木は、そのまま倒すことはできない。専門の登り手——ますますアーボリストとして訓練されるようになった——がロープで木に登り、一片ずつロープで下ろしながら、区切って伐り下ろす。岐阜の社叢や村の木はしばしばこうして手入れされる。",
                zh:"住家、寺社、道路與電線旁的樹無法整株伐倒。專業攀樹人員——愈來愈多受過樹藝師訓練——以繩索攀上樹，分段截下，並用繩索逐段吊放。岐阜的神社林與村落老樹常以此方式管理。" } }
          ] },
        { t:"note",
          label:{ en:"The felling saw of the carpenter", ja:"大工の伐り鋸", zh:"木匠的伐木鋸" },
          text:{
            en:"Before the chainsaw, Japanese woodsmen used heavy single-handed pull-saws with large, widely set teeth for felling and crosscutting, and broad axes for trimming. Like all Japanese saws they cut on the pull stroke, which lets the blade be thinner and the kerf narrower than a Western push saw. See <a href=\"tools.html\">The Carpenter's Tools</a>.",
            ja:"チェーンソー以前、日本の杣人は、目が大きくあさりの広い重い片手の引き鋸で伐倒と玉切りをし、幅広の斧で整えた。日本の鋸はみな引いて切るので、刃は西洋の押し鋸より薄く、挽き幅は狭くできる。<a href=\"tools.html\">大工道具</a>を参照。",
            zh:"在鏈鋸之前，日本杣人使用齒大、鋸路寬的沉重單手拉鋸來伐倒與截斷，並以寬斧修整。所有日本鋸都是拉切，因此鋸片可比西方推鋸更薄、鋸縫更窄。見<a href=\"tools.html\">木匠的工具</a>。" } }
      ] },
    { t:"section",
      id:"machines",
      title:{ en:"Harvesters, processors and forwarders", ja:"ハーベスタ・プロセッサ・フォワーダ", zh:"伐木歸堆機、造材機與集運機" },
      jp:"高性能林業機械",
      body:[
        { t:"p",
          text:{
            en:"A harvester does in under a minute what once took a crew an hour. Its head, carried on the boom of a tracked excavator, closes its knives around a standing stem, cuts it at the base with a hydraulic chainsaw bar and lays the tree down. Feed rollers then drive the stem through the head while curved knives strip the branches, a measuring wheel tracks the length and sensors read the diameter; at each chosen point the bar cuts again, and the stem leaves the head as a row of logs. The on-board computer can propose where to cut so that a stem yields the most valuable mix of 3-, 4- and 6-metre logs for that week's prices. A <em>processor</em> carries a similar head but stands at the roadside and works on whole trees already felled by chainsaw and winched down the slope — the common arrangement in Japan, where machines cannot reach every tree. A <em>forwarder</em> carries the cut logs on its own bed along the strip road, and a <em>feller buncher</em> fells and gathers trees without processing them.",
            ja:"ハーベスタは、かつて班が一時間かけた仕事を一分足らずでこなす。クローラ式の掘削機のアームの先についたヘッドが、立ち木の幹をナイフで抱え、根元を油圧のチェーンソーで切り、木を倒す。続いて送りローラーが幹をヘッドのなかへ送り、曲がったナイフが枝を払い、測長ローラーが長さを、センサーが径を読む。決めた位置でふたたびソーが切り、幹は丸太の列となってヘッドを出る。搭載のコンピューターは、その週の値段に合わせて三メートル・四メートル・六メートルの丸太をいちばん高く取れる切り方を示すこともできる。プロセッサは同じようなヘッドをもつが、道端に据わって、チェーンソーで伐られウインチで引き下ろされた全木を処理する。機械がすべての木に近づけない日本では、これがふつうの組み方である。フォワーダは切った丸太を自分の荷台に積んで作業道を運び、フェラーバンチャは木を伐って集めるが、造材はしない。",
            zh:"伐木歸堆機（harvester）不到一分鐘就能完成過去整個作業班一小時的工作。裝在履帶式挖土機手臂前端的機頭，以刀片夾住立木樹幹，用油壓鏈鋸在基部鋸斷，再把樹放倒。接著進料滾輪推送樹幹穿過機頭，彎刀削去枝條，測長輪記錄長度，感測器讀取直徑；到了選定位置鏈鋸再次切斷，樹幹便以一排原木的形式離開機頭。機上電腦還能依當週價格，建議如何下鋸，讓一根樹幹取得價值最高的 3 公尺、4 公尺與 6 公尺原木組合。造材機（processor）裝有類似機頭，但停在路旁，處理已由鏈鋸伐倒、以絞盤拖下坡的整株木——這在機器無法抵達每棵樹的日本是常見的組合。集運機（forwarder）把裁好的原木裝在自己的車斗上沿作業道運出，伐木歸堆機（feller buncher）則只伐倒並集中樹木，不做造材。" } },
        { t:"p",
          text:{
            en:"Almost all these machines in Japan are built on construction excavators rather than on the purpose-built wheeled carriers of Scandinavia: excavators are cheap, serviced in every town and stable on narrow, steep strip roads. Their numbers have grown fast. Japan had 16,431 high-performance forestry machines in FY2024, 2.3 times the 7,089 of FY2014. Forwarders are now the largest group, almost doubling from 2,650 in FY2018 to 5,186; tower yarders, the cable machines made for the steepest ground, have stayed at about 150 throughout — a sign that Japanese logging has expanded mainly where roads can go.",
            ja:"日本のこれらの機械のほとんどは、北欧の専用のホイール式車体ではなく、建設用の掘削機をベースにつくられている。掘削機は安く、どの町でも整備でき、狭く急な作業道でも安定するからである。その数は急にふえた。二〇二四年度、日本の高性能林業機械は一万六千四百三十一台で、二〇一四年度の七千八十九台の二・三倍である。いまいちばん多いのはフォワーダで、二〇一八年度の二千六百五十台から五千百八十六台へほぼ倍になった。いちばん急な土地のための架線系の機械であるタワーヤーダは、この間ずっと百五十台前後にとどまる。日本の伐出が、おもに道の入るところで広がってきたしるしである。",
            zh:"日本這些機械幾乎都以營建用挖土機為底盤，而非北歐那種專用輪式車體：挖土機便宜、每個城鎮都能維修，在狹窄陡峭的作業道上也穩定。其數量成長迅速。2024 年度日本共有 16,431 台高性能林業機械，是 2014 年度 7,089 台的 2.3 倍。集運機如今數量最多，由 2018 年度的 2,650 台增加到 5,186 台，幾乎翻倍；而專為最陡地形設計的架線系機械——塔式集材機（tower yarder），這段期間始終維持在 150 台左右——顯示日本伐木作業主要是在道路能抵達之處擴張。" } },
        { t:"figure",
          caption:{
            en:"High-performance forestry machines in use in Japan by type, FY2024 (total 16,431). Source: Forestry Agency, survey of high-performance forestry machines.",
            ja:"日本の高性能林業機械の機種別保有台数、二〇二四年度（計一万六千四百三十一台）。出典：林野庁「高性能林業機械の保有状況」。",
            zh:"日本高性能林業機械各機種保有台數，2024 年度（合計 16,431 台）。資料來源：林野廳「高性能林業機械保有狀況」。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Forestry machines, FY2024", ja:"高性能林業機械（二〇二四年度）", zh:"高性能林業機械（2024 年度）" },
            unit:{ en:"units", ja:"台", zh:"台" }, labelW:250,
            items:[
              { n:{ en:"Forwarder", ja:"フォワーダ", zh:"集運機" }, v:5186, f:"#E0E6DB" },
              { n:{ en:"Processor", ja:"プロセッサ", zh:"造材機" }, v:2348, f:"#EDE5D2" },
              { n:{ en:"Harvester", ja:"ハーベスタ", zh:"伐木造材機" }, v:2272, f:"#EDE5D2" },
              { n:{ en:"Swing yarder (cable)", ja:"スイングヤーダ（架線系）", zh:"旋臂式集材機（架線）" }, v:1151, f:"#E0E7E9" },
              { n:{ en:"Feller buncher", ja:"フェラーバンチャ", zh:"伐木歸堆機" }, v:672, f:"#E6E4E0" },
              { n:{ en:"Others", ja:"その他", zh:"其他" }, v:613, f:"#E6E4E0" },
              { n:{ en:"Tower yarder (cable)", ja:"タワーヤーダ（架線系）", zh:"塔式集材機（架線）" }, v:156, f:"#E0E7E9" },
              { n:{ en:"Skidder", ja:"スキッダ", zh:"集材牽引車" }, v:106, f:"#E6E4E0" }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, holdings of high-performance forestry machines (FY2014, FY2018, FY2023, FY2024).",
            ja:"出典：林野庁「高性能林業機械の保有状況」（二〇一四年度、二〇一八年度、二〇二三年度、二〇二四年度）。",
            zh:"資料來源：林野廳「高性能林業機械保有狀況」（2014、2018、2023、2024 年度）。" } }
      ] },
    { t:"section",
      id:"cable",
      title:{ en:"Logging by wire", ja:"架線で出す", zh:"以鋼索集材" },
      jp:"架線集材",
      body:[
        { t:"p",
          text:{
            en:"Where slopes are too steep for strip roads — in practice above about 35 degrees, which describes much of the Hida gorges and the upper valleys of the Ibi, Nagara and Kiso — logs travel through the air. A steel skyline is strung from a machine on the road to an anchor high on the slope or across the valley, and a carriage running along it lifts logs or whole trees clear of the ground and brings them down to the landing. Cable logging spares the soil and the remaining trees and needs few roads, but every line must be designed: its span, sag and load calculated, its anchors chosen, its rope ends spliced by hand.",
            ja:"作業道を入れるには急すぎる斜面——実際にはおよそ三十五度より急なところで、飛騨の峡谷や揖斐・長良・木曽の上流の多くがそうである——では、丸太は空を渡る。道の上の機械から、斜面の上や谷の向こうのアンカーへ鋼の主索を張り、それを走る搬器が丸太や全木を地面から吊り上げて土場まで運ぶ。架線集材は土壌と残す木を傷めず、道も少なくてすむが、どの線も設計しなければならない。スパン、たるみ、荷重を計算し、アンカーを選び、ワイヤーの端は手でさつま編みにする。",
            zh:"在坡度陡到無法開設作業道之處——實務上約超過 35 度，飛驒峽谷與揖斐川、長良川、木曾川上游多屬此類——原木便要「從空中走」。從路上的機械向坡頂或對岸的錨點張設一條鋼製主索，在索上行走的跑車把原木或整株木吊離地面，運到集材場。架線集材不傷土壤與保留木，也不需要太多道路，但每一條索道都必須設計：計算跨距、垂度與荷重，選定錨點，鋼索末端以人工編接。" } },
        { t:"defs",
          items:[
            { term:{ en:"Swing yarder", ja:"スイングヤーダ", zh:"旋臂式集材機" },
              jp:"すいんぐやーだ",
              def:{
                en:"An excavator fitted with a two-drum winch, using its own boom as a short spar. Simple to rig, for distances up to about 100 metres; with 1,151 units in FY2024 it is Japan's commonest cable machine.",
                ja:"二胴のウインチをつけた掘削機で、自分のアームを短い支柱として使う。張るのが簡単で、およそ百メートルまでの距離に向く。二〇二四年度に千百五十一台あり、日本でいちばん多い架線系の機械である。",
                zh:"加裝雙捲筒絞盤的挖土機，以自身手臂作為短支柱。架設簡單，適用約 100 公尺以內的距離；2024 年度共有 1,151 台，是日本最常見的架線系機械。" } },
            { term:{ en:"Tower yarder", ja:"タワーヤーダ", zh:"塔式集材機" },
              jp:"たわーやーだ",
              def:{
                en:"A self-contained machine with a folding steel tower and several winch drums, mostly of Austrian design, for spans of about 100 to 500 metres. Quicker to set up than the old systems but expensive; Japan had only 156 in FY2024.",
                ja:"折りたたみ式の鋼のタワーと複数のウインチの胴をもつ一体型の機械で、多くはオーストリア系の設計。スパンはおよそ百〜五百メートル。昔の方式より早く張れるが高価で、二〇二四年度の日本には百五十六台しかない。",
                zh:"配有可折疊鋼塔與多個絞盤捲筒的一體式機械，多為奧地利系設計，適用約 100 至 500 公尺的跨距。架設比舊式系統快，但價格昂貴；2024 年度日本僅有 156 台。" } },
            { term:{ en:"Self-propelled carriage", ja:"自走式搬器", zh:"自走式跑車" },
              jp:"じそうしきはんき",
              def:{
                en:"A carriage with its own engine and winch running on a fixed skyline, needing no haul-back line from a machine; the newest models can travel the line automatically.",
                ja:"エンジンとウインチを自分でもち、固定した主索の上を走る搬器で、機械からの引き戻し索がいらない。新しい型は線の上を自動で走れる。",
                zh:"自帶引擎與絞盤、在固定主索上行走的跑車，不需要機械拉回索；最新機型可沿索道自動行駛。" } },
            { term:{ en:"Yarding machine and long skyline", ja:"集材機と長距離架線", zh:"集材機與長距離索道" },
              jp:"しゅうざいき",
              def:{
                en:"The older Japanese system: a stationary multi-drum winch driving a skyline of 500 metres or more across a valley. It can reach the most remote stands but demands the highest skill of any cable work, and the people who can rig it are now few.",
                ja:"日本の古い方式で、据え置きの多胴のウインチが、谷を越える五百メートル以上の主索を動かす。いちばん奥の林分にも届くが、架線作業のなかでいちばん高い技能を求め、張れる人はいまや少ない。",
                zh:"日本較早的系統：固定式多捲筒絞盤驅動跨越山谷、長達 500 公尺以上的主索。能抵達最偏遠的林分，但所需技術在所有架線作業中最高，如今能架設的人已不多。" } }
          ] },
        { t:"p",
          text:{
            en:"Gifu takes cable work seriously because it has no choice. In 2025 the Forest Academy in Mino announced a curriculum for advanced cable-logging technicians, teaching all four systems in its training forest, from design and load calculation to splicing, and drawing on European techniques; its reasoning was that the prefecture's many steep slopes make cable extraction indispensable while the people able to do it are disappearing. Research supports the caution. In 2015 the Gifu Prefectural Research Institute for Forests measured the forces in tower-yarder lines at work: up to about 85 kN in the skyline of a Japanese tower yarder extracting sugi, and up to about 155 kN with a larger Austrian machine in a clear-cut — while a sugi or hinoki stump 60 cm across, the usual anchor, held only about 100 kN. Anchors, in other words, must be chosen and doubled with care, not assumed.",
            ja:"岐阜が架線作業を重んじるのは、ほかに道がないからである。二〇二五年、美濃の岐阜県立森林文化アカデミーは高度な架線技術者を育てるカリキュラムを発表し、設計や荷重計算からワイヤーの編み込みまで、四つの方式すべてを演習林で教え、ヨーロッパの技術も取り入れるとした。県内の多くの急斜面では架線集材が欠かせないのに、それができる人が減っている、というのがその理由である。研究もこの慎重さを支える。二〇一五年、岐阜県森林研究所は稼働中のタワーヤーダの索にかかる力を測った。スギを出す国産のタワーヤーダの主索で最大およそ85kN、皆伐で使ったより大きなオーストリア製の機械では最大およそ155kN。ところが、ふつうアンカーにする直径六十センチのスギやヒノキの根株は、およそ100kNにしか耐えなかった。アンカーは思い込みではなく、選び、重ねて取らねばならないのである。",
            zh:"岐阜重視架線作業，是因為別無選擇。2025 年，位於美濃的縣立森林文化學院宣布開設高階架線技術人員課程，在演習林中教授全部四種系統，從設計、荷重計算到鋼索編接，並引進歐洲技術；理由是縣內眾多陡坡少不了架線集材，能勝任的人卻愈來愈少。研究也支持這份謹慎。2015 年，岐阜縣森林研究所量測了作業中塔式集材機各索所受的力：國產塔式集材機運出柳杉時，主索最大約 85 kN；一台較大型的奧地利製機械在皆伐作業中最大約 155 kN——而通常作為錨點、直徑 60 公分的柳杉或扁柏根株，只承受得住約 100 kN。換言之，錨點必須審慎選擇並加以分擔，不能想當然耳。" } }
      ] },
    { t:"section",
      id:"roads",
      title:{ en:"Roads per hectare", ja:"路網密度", zh:"路網密度" },
      jp:"林道・林業専用道・森林作業道",
      body:[
        { t:"p",
          text:{
            en:"Every logging system, on the ground or by wire, begins at a road, and foresters measure access as metres of road per hectare of forest. The Forestry Agency's guidelines link the right density to slope and system: on gentle ground worked by vehicles, 100 to 250 metres per hectare of trunk and strip roads together; on the steepest slopes, worked only by cable, just 5 to 15 metres of trunk road. Japan as a whole had 436,000 kilometres of forest roads and strip roads at the end of FY2023, a density of 25.2 metres per hectare, up from 19.4 in FY2013 — but far below the roughly 89 metres per hectare that Austria, the model Japanese foresters cite most often, had reached by the mid-1990s. Gifu's public forest roads alone totalled about 4,500 kilometres in the mid-2010s, 14.5 metres per hectare, and the prefecture's long-term plan aims at about 8,300 kilometres and 20 metres; the strip roads that cooperatives cut for each operation come on top of these.",
            ja:"地上でも架線でも、どの伐出の方式も道から始まり、林業では森林一ヘクタールあたり何メートルの道があるかで、入りやすさを測る。林野庁の目安は、適切な密度を傾斜と方式に結びつける。車両で作業する緩い傾斜地では、基幹の道と作業道を合わせて一ヘクタールあたり百〜二百五十メートル。架線だけで作業するいちばん急な斜面では、基幹の道がわずか五〜十五メートルである。全国では二〇二三年度末に林道と森林作業道が四十三万六千キロあり、密度は一ヘクタールあたり二十五・二メートルで、二〇一三年度の十九・四メートルからふえた。それでも、日本の林業者がもっともよく手本に挙げるオーストリアが一九九〇年代半ばまでに達したおよそ八十九メートルには遠く及ばない。岐阜の林道だけでは二〇一〇年代半ばにおよそ四千五百キロ、一ヘクタールあたり十四・五メートルで、県の長期の計画はおよそ八千三百キロ、二十メートルをめざす。組合が作業ごとに開く森林作業道は、これに上乗せされる。",
            zh:"無論地面作業或架線作業，每一種集材系統都從道路開始；林業以每公頃森林有多少公尺道路來衡量可及性。林野廳的指引把適當密度與坡度及作業系統連結：以車輛作業的緩坡，幹線道路加作業道合計每公頃 100 至 250 公尺；只能以架線作業的最陡坡地，幹線道路僅需 5 至 15 公尺。日本全國在 2023 年度末共有林道與森林作業道 43.6 萬公里，密度每公頃 25.2 公尺，高於 2013 年度的 19.4 公尺——但遠低於日本林業人士最常引為典範的奧地利在 1990 年代中期已達到的約 89 公尺。岐阜光是林道，在 2010 年代中期約有 4,500 公里，每公頃 14.5 公尺；縣的長期計畫目標約 8,300 公里、20 公尺；森林組合為每次作業開設的作業道還要另外加上。" } },
        { t:"table",
          caption:{
            en:"Target road densities by slope and logging system (Forestry Agency guideline)",
            ja:"傾斜と作業システム別の路網密度の目安（林野庁）",
            zh:"依坡度與作業系統的路網密度目標（林野廳指引）" },
          cols:[
            { en:"Slope", ja:"傾斜", zh:"坡度" },
            { en:"System", ja:"作業システム", zh:"作業系統" },
            { en:"Trunk roads (m/ha)", ja:"基幹路網（m/ha）", zh:"幹線路網（m/ha）" },
            { en:"Strip roads (m/ha)", ja:"森林作業道（m/ha）", zh:"森林作業道（m/ha）" },
            { en:"Total (m/ha)", ja:"計（m/ha）", zh:"合計（m/ha）" }
          ],
          rows:[
            [
              { en:"Gentle, 0–15°", ja:"緩傾斜地 0〜15°", zh:"緩坡 0–15°" },
              { en:"Vehicle", ja:"車両系", zh:"車輛系" },
              "35–50",
              "65–200",
              "100–250"
            ],
            [
              { en:"Medium, 15–30°", ja:"中傾斜地 15〜30°", zh:"中坡 15–30°" },
              { en:"Vehicle", ja:"車両系", zh:"車輛系" },
              "25–40",
              "50–160",
              "75–200"
            ],
            [
              { en:"Steep, 30–35°", ja:"急傾斜地 30〜35°", zh:"陡坡 30–35°" },
              { en:"Vehicle", ja:"車両系", zh:"車輛系" },
              "15–25",
              "45–125",
              "60–150"
            ],
            [
              { en:"Very steep, 35° and over", ja:"急峻地 35°以上", zh:"極陡 35° 以上" },
              { en:"Cable", ja:"架線系", zh:"架線系" },
              "5–15",
              "—",
              "5–15"
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, forester training text “Road networks and operating systems” (guideline, Austria, FY2013); Annual Report on Forest and Forestry in Japan FY2024 (FY2023 network); Gifu Prefecture, outline of forest-road works (Gifu roads and plan); Gifu Forest Academy (2025); Gifu Prefectural Research Institute for Forests (2015).",
            ja:"出典：林野庁 フォレスター研修テキスト「路網と作業システム」（目安、オーストリア、二〇一三年度）、令和六年度森林・林業白書（二〇二三年度の路網）、岐阜県「林道事業の概要」（県の林道と計画）、岐阜県立森林文化アカデミー（二〇二五年）、岐阜県森林研究所（二〇一五年）。",
            zh:"資料來源：林野廳林務官研習教材〈路網與作業系統〉（指引、奧地利、2013 年度）；令和 6 年度《森林・林業白皮書》（2023 年度路網）；岐阜縣〈林道事業概要〉（縣內林道與計畫）；岐阜縣立森林文化學院（2025 年）；岐阜縣森林研究所（2015 年）。" } }
      ] },
    { t:"related",
      items:[
        { href:"logging.html", why:{ en:"The logging business as a whole.", ja:"素材生産の全体。", zh:"伐木產業全貌。" } },
        { href:"workers.html", why:{ en:"Accident rates and training.", ja:"災害の率と研修。", zh:"事故率與培訓。" } },
        { href:"gods.html", why:{ en:"Ise and the sacred hinoki.", ja:"伊勢と御神木のヒノキ。", zh:"伊勢與御神木扁柏。" } },
        { href:"timberrivers.html", why:{ en:"What happened to the logs next.", ja:"丸太がそのあとどうなったか。", zh:"原木後來的去向。" } }
      ] }
  ] };

/* ---- -------------------------------------- timberrivers */
GIFU.pages["timberrivers"] = { kicker:{ en:"Timber · 03", ja:"木材 · 03", zh:"木材 · 03" },
  title:{ en:"Timber and the Rivers", ja:"川と材木", zh:"河川與木材" },
  jp:"木曽式運材 · 錦織綱場 · 筏",
  lede:{
    en:"Before there were trucks and railways, the only way to move a great log out of Gifu's mountains was by water. For more than a thousand years the Kiso, Hida, Nagara and Ibi rivers carried timber down to the plain and the sea: first as single logs driven through gorges on the spring and autumn floods, then bound into rafts at the river ports and steered by professional raftsmen to Nagoya and Kuwana. This page follows that journey — from the log chutes of the Kiso valley to the great catching station at Nishikori in Yaotsu and the timber pond at Shirotori in Nagoya — and explains why it ended in the 1920s.",
    ja:"トラックや鉄道がなかったころ、岐阜の山から大きな丸太を運ぶ道は水しかなかった。千年以上のあいだ、木曽川、飛騨川、長良川、揖斐川は材木を平野と海へ運んだ。まずは一本ずつ、春と秋の出水に乗せて峡谷を流し、ついで川の湊で筏に組み、筏師が名古屋や桑名へと操った。この頁はその旅をたどる——木曽谷の修羅から、八百津の錦織の大きな綱場、名古屋の白鳥の貯木場まで——そして、それが一九二〇年代に終わった理由を説明する。",
    zh:"在卡車與鐵路出現之前，把巨木運出岐阜山區的唯一方法是靠水。一千多年來，木曾川、飛驒川、長良川與揖斐川把木材運往平原與大海：先是單根原木在春秋汛期被驅流穿越峽谷，再於河港紮成木筏，由專業筏夫操縱運往名古屋與桑名。本頁追溯這段旅程——從木曾谷的木滑道，到八百津錦織的大型攔木場，再到名古屋白鳥的貯木池——並說明它為何在 1920 年代走入歷史。" },
  body:[
    { t:"section",
      id:"route",
      title:{ en:"Three rivers to the sea", ja:"海へ向かう三つの川", zh:"三條奔向大海的河" },
      jp:"木曽三川",
      body:[
        { t:"p",
          text:{
            en:"Gifu's rivers drain south-west to Ise Bay, converging on the Nōbi plain as the Kiso Three Rivers — Kiso, Nagara and Ibi — that meet the sea near Kuwana. The Kiso and its great tributary the Hida carried the hinoki of the Kiso and Ura-Kiso forests and the timber of Hida; the Nagara carried sugi and charcoal from Gujō and Mino; the Ibi carried wood from the mountains on the Fukui border. At the lower end stood the timber towns — Kuwana at the mouth of the rivers, and the Owari domain's timber pond at Shirotori in Atsuta, Nagoya, through which timber passed to the domain's castle town and its shipyards.",
            ja:"岐阜の川は南西へ伊勢湾に注ぎ、濃尾平野で木曽三川——木曽川・長良川・揖斐川——となって桑名の近くで海に出る。木曽川とその大きな支流の飛騨川は、木曽と裏木曽の森のヒノキと飛騨の材を運んだ。長良川は郡上と美濃のスギと炭を、揖斐川は福井との境の山の木を運んだ。下流の端には材木の町があった。川の口の桑名と、名古屋熱田の白鳥にあった尾張藩の貯木場である。材木は白鳥を経て、藩の城下町と船蔵へ渡った。",
            zh:"岐阜的河川向西南注入伊勢灣，在濃尾平原匯成「木曾三川」——木曾川、長良川與揖斐川——於桑名附近入海。木曾川及其大支流飛驒川，運送木曾與裏木曾森林的扁柏以及飛驒的木材；長良川運送郡上與美濃的柳杉與木炭；揖斐川運送與福井交界山區的木材。下游端點是木材之城——位於河口的桑名，以及尾張藩設於名古屋熱田白鳥的貯木場；木材經由白鳥運往藩的城下町與船廠。" } },
        { t:"figure",
          caption:{
            en:"The timber routes of the Kiso Three Rivers, schematic (not to scale). Logs driven singly down the upper rivers were caught at Nishikori, bound into rafts and taken down to Inuyama and Enjōji, where larger rafts were made for the lower river, the sea passage and the canal to Shirotori.",
            ja:"木曽三川の材木の道（模式図、縮尺は正確でない）。上流を一本ずつ流された丸太は錦織で留められ、筏に組まれて犬山や円城寺へ下り、そこで下流・海・白鳥への運河のためにより大きな筏に組み直された。",
            zh:"木曾三川的木材運輸路線（示意，未按比例）。在上游單根驅流的原木於錦織攔截、紮成木筏運至犬山與圓城寺，再在那裡重組成更大的木筏，駛過下游、短暫出海並經運河抵達白鳥。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 380" role="img">';
            s += F.text(20, 28, lang==="en"?"RIVERS OF TIMBER":(lang==="ja"?"材木の川":"木材之河"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            s += '<path d="M20 330 L740 330 L740 370 L20 370 Z" fill="#E0E7E9" stroke="#CDC6B9"/>';
            s += F.text(560, 356, lang==="en"?"Ise Bay":(lang==="ja"?"伊勢湾":"伊勢灣"), { size:11, fill:"#55504A" });
            // rivers (paths)
            var R = [
              ["M700 50 C650 110 600 150 560 170 C520 190 470 190 430 200 C380 215 360 250 330 330", { en:"Kiso", ja:"木曽川", zh:"木曾川" }, 690, 46],
              ["M500 40 C505 90 490 140 470 190", { en:"Hida", ja:"飛騨川", zh:"飛驒川" }, 470, 38],
              ["M300 50 C300 110 290 170 280 230 C275 270 290 300 300 330", { en:"Nagara", ja:"長良川", zh:"長良川" }, 250, 46],
              ["M120 60 C150 130 190 200 230 260 C250 290 265 310 270 330", { en:"Ibi", ja:"揖斐川", zh:"揖斐川" }, 90, 56]
            ];
            for (var i=0;i<R.length;i++){ s += '<path d="'+R[i][0]+'" fill="none" stroke="#A9BCC4" stroke-width="'+(i===0?5:3.5)+'"/>'; s += F.text(R[i][2], R[i][3], L(R[i][1]), { size:11, fill:"#201E1B" }); }
            function pt(x,y,t,dx,dy,anc){ return '<circle cx="'+x+'" cy="'+y+'" r="4.5" fill="#EADCC1" stroke="#7C6B52"/>' + F.text(x+(dx||8), y+(dy||4), L(t), { size:10.5, fill:"#201E1B", anchor:anc }); }
            s += pt(640, 120, { en:"Kiso forests (Owari domain)", ja:"木曽の森（尾張藩）", zh:"木曾森林（尾張藩）" }, -10, -6, "end");
            s += pt(590, 175, { en:"Ura-Kiso: Tsukechi, Kashimo", ja:"裏木曽：付知・加子母", zh:"裏木曾：付知、加子母" }, 10, 16);
            s += pt(480, 188, { en:"Nishikori catching station (Yaotsu)", ja:"錦織綱場（八百津）", zh:"錦織攔木場（八百津）" }, 8, 24);
            s += pt(395, 225, { en:"Inuyama", ja:"犬山", zh:"犬山" }, 10, 4);
            s += pt(350, 268, { en:"Enjōji", ja:"円城寺", zh:"圓城寺" }, 10, 4);
            s += pt(292, 318, { en:"Kuwana", ja:"桑名", zh:"桑名" }, -8, -6, "end");
            s += pt(470, 318, { en:"Shirotori timber pond, Atsuta (Nagoya)", ja:"白鳥貯木場（名古屋・熱田）", zh:"白鳥貯木場（名古屋熱田）" }, 10, -6);
            s += '<path d="M340 330 C380 322 430 322 466 320" fill="none" stroke="#7C6B52" stroke-dasharray="4 3"/>';
            s += pt(290, 120, { en:"Gujō", ja:"郡上", zh:"郡上" }, 10, 4);
            s += pt(510, 90, { en:"Hida (Gero, Takayama beyond)", ja:"飛騨（下呂、その奥に高山）", zh:"飛驒（下呂，更深處為高山）" }, 10, 4);
            return s + '</svg>';
          } }
      ] },
    { t:"section",
      id:"kiso",
      title:{ en:"The Kiso method", ja:"木曽式運材法", zh:"木曾式運材法" },
      jp:"修羅・桟手・小谷狩・大川狩",
      body:[
        { t:"p",
          text:{
            en:"The Owari domain developed a complete system for moving timber out of the Kiso forests, recorded in detailed illustrated scrolls — one ten metres long and another thirteen — and used in its essentials from the late sixteenth century until the early twentieth. It had four stages, each suited to a different part of the watershed.",
            ja:"尾張藩は木曽の森から材木を運び出す完全な仕組みを育て、それは十メートルと十三メートルの詳しい絵巻に記録された。その骨組みは十六世紀末から二十世紀初めまで使われた。四つの段階があり、それぞれが流域の違う部分に合わせられていた。",
            zh:"尾張藩發展出一套把木材運出木曾森林的完整系統，記錄在長十公尺與十三公尺的精細繪卷中，其基本做法從十六世紀末沿用到二十世紀初。它分為四個階段，各自適用於流域的不同部分。" } },
        { t:"figure",
          caption:{
            en:"The four stages of the Kiso timber-transport method, after the Owari domain's illustrated scrolls.",
            ja:"尾張藩の絵巻にもとづく木曽式運材法の四段階。",
            zh:"依尾張藩繪卷整理的木曾式運材法四階段。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"From stump to raft", ja:"切り株から筏まで", zh:"從樹樁到木筏" }, per:4, bh:128,
            steps:[
              { t:{ en:"Shura and sande", ja:"修羅・桟手", zh:"修羅與棧手" }, d:{ en:"Logs slide down the mountainside in chutes built of logs (shura) or planks (sande).", ja:"丸太は、丸太を組んだ修羅や板を張った桟手で山腹を滑り降りる。", zh:"原木沿著以原木（修羅）或木板（棧手）搭成的滑道滑下山坡。" } },
              { t:{ en:"Kodani-gari", ja:"小谷狩", zh:"小谷狩" }, d:{ en:"In small valleys, temporary dams of logs and brush are built and then released, flushing the logs down in the surge.", ja:"小さな谷では、丸太や柴で一時の堰をつくって切り放ち、その水の勢いで丸太を押し流す。", zh:"在小溪谷築起以原木與枝葉構成的臨時水壩，再開閘放水，以水勢沖下原木。" } },
              { t:{ en:"Ōkawa-gari", ja:"大川狩", zh:"大川狩" }, d:{ en:"From about September, loose logs are driven down the main Kiso River by crews working along the banks.", ja:"九月ごろから、ばらの丸太が木曽川本流を、岸を行く作業衆によって流し下される。", zh:"約從九月起，散置的原木在木曾川主流由沿岸作業隊驅流而下。" } },
              { t:{ en:"Tsunaba", ja:"綱場", zh:"綱場（攔木場）" }, d:{ en:"At Nishikori a boom of ropes catches the logs, which are counted, checked for marks and bound into rafts.", ja:"錦織で綱を張って丸太を留め、数え、刻印を改め、筏に組む。", zh:"在錦織以繩索攔住原木，清點數量、查驗烙印，再紮成木筏。" } }
            ] }); } },
        { t:"p",
          text:{
            en:"Every log bore the mark of its owner cut into the end; the drives were timed to the water, since too little left logs stranded on the rocks and too much smashed them. Losses were inevitable, and the domain employed guards along the river and set rules for the recovery of stray logs. The men who worked the drives — <em>kawanami</em> — were a specialised profession, as were the raftsmen below them.",
            ja:"どの丸太にも、持ち主の刻印が木口に刻まれていた。流しは水に合わせて時を選んだ。少なすぎれば丸太が岩に取り残され、多すぎれば砕けた。失われるものは避けられず、藩は川沿いに番人をおき、流れ出た丸太の回収に決まりを設けた。流しを担った人々——川並——は専門の職で、その下流の筏師もそうだった。",
            zh:"每根原木的端面都刻有所有者的烙印；驅流時機要配合水量，水太少原木會擱淺在岩石上，太多則會把原木撞碎。損失在所難免，藩在河岸派駐看守，並訂立回收漂流原木的規則。從事驅流的人——稱為「川並」——是專門行業，下游的筏夫亦然。" } }
      ] },
    { t:"section",
      id:"nishikori",
      title:{ en:"Nishikori: the catching station", ja:"錦織綱場", zh:"錦織攔木場" },
      jp:"錦織川並材木奉行所",
      body:[
        { t:"p",
          text:{
            en:"Where the Kiso River leaves its gorges at Yaotsu, in what is now Gifu, the Owari domain maintained the most important point on the whole route: the <em>tsunaba</em>, or rope station, of Nishikori. A timber-handling post existed here in earlier centuries, but in 1665, as part of the domain's forest reforms, it came under direct control as the Nishikori Kawanami Timber Magistrate's Office. Ropes and booms were stretched across the river to stop the drifting logs “like a dam”; they were then counted, inspected for their owners' marks and bound into rafts for the first time.",
            ja:"木曽川が八百津で峡谷を出るところ、いまの岐阜県に、尾張藩は運材の道全体で最も大事な地点を置いていた。錦織の綱場である。それ以前の世紀からここには材木を扱う拠点があったが、一六六五年、藩の林政改革の一環として、錦織川並材木奉行所として藩の直轄となった。綱や留め木を川に張り渡して流れてくる丸太を「堰のように」止め、数を改め、持ち主の刻印を調べ、ここで初めて筏に組んだ。",
            zh:"木曾川在八百津流出峽谷之處——今屬岐阜縣——尾張藩設置了整條運材路線上最重要的據點：錦織「綱場」（繩索攔木場）。此地早在更早的世紀已有處理木材的據點，1665 年作為藩林政改革的一環，改由藩直轄，稱為錦織川並材木奉行所。人們在河面拉起繩索與攔木，把漂流而下的原木「像水壩一樣」攔住，再清點數量、查驗所有者烙印，並在此首度紮成木筏。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Under domain control", ja:"藩直轄", zh:"藩直轄" },
              v:"1665",
              d:{ en:"As the Nishikori Kawanami Timber Magistrate's Office.", ja:"錦織川並材木奉行所として。", zh:"成為錦織川並材木奉行所。" } },
            { k:{ en:"Staff", ja:"人員", zh:"人員" },
              v:{ en:"≈ 140", ja:"約百四十人", zh:"約 140 人" },
              d:{
                en:"Two magistrates, assistants, guards and about 120 labourers.",
                ja:"奉行二人、手代、足軽、人足およそ百二十人。",
                zh:"奉行兩名、助手、守衛與約 120 名工人。" } },
            { k:{ en:"Logs rafted a year", ja:"年に筏に組む丸太", zh:"每年紮筏原木" },
              v:{ en:"≈ 300,000", ja:"約三十万本", zh:"約 30 萬根" },
              d:{ en:"According to Yaotsu town.", ja:"八百津町による。", zh:"依八百津町資料。" } },
            { k:{ en:"Season", ja:"季節", zh:"季節" },
              v:{ en:"Autumn–spring", ja:"秋〜春", zh:"秋至春" },
              d:{
                en:"Rafting ran roughly from the autumn to the spring equinox, outside the flood and irrigation seasons.",
                ja:"筏流しはおおむね秋分から春分まで。出水と灌漑の季節を避けた。",
                zh:"放筏大致從秋分到春分，避開汛期與灌溉季。" } }
          ] },
        { t:"p",
          text:{
            en:"From Nishikori the rafts went down to Inuyama and Enjōji, where they were broken up and rebuilt into larger rafts for the broad lower river. At the mouth, the raftsmen took them briefly out into the sea and then up the Hori canal into the timber pond at Shirotori in Atsuta. Much of the old Shirotori site is today a Japanese garden; at Nishikori, a great <em>kuroganemochi</em> holly designated as a natural monument marks the place where the magistrate's office stood.",
            ja:"錦織から筏は犬山や円城寺へ下り、そこでばらされ、広い下流のためにより大きな筏に組み直された。河口では、筏師は筏をいったん海に出し、ついで堀川をさかのぼって熱田の白鳥の貯木場へ入れた。旧白鳥の跡地の多くは、いまは日本庭園となっている。錦織では、天然記念物に指定されたクロガネモチの大木が、奉行所のあった場所を示している。",
            zh:"木筏從錦織下行至犬山與圓城寺，在那裡拆散後重組為更大的木筏，以駛過寬闊的下游。到了河口，筏夫會把木筏短暫駛入海中，再沿堀川運河上溯，進入熱田白鳥的貯木池。舊白鳥貯木場的大部分舊址如今是一座日本庭園；在錦織，一株被指定為天然紀念物的鐵冬青巨木，標示著昔日奉行所的所在。" } }
      ] },
    { t:"section",
      id:"hida",
      title:{ en:"Hida timber on the rivers", ja:"川を下った飛騨の材", zh:"順流而下的飛驒木材" },
      jp:"元伐・榑木",
      body:[
        { t:"p",
          text:{
            en:"Floating timber from Hida is older than any domain. A poem in the eighth-century <em>Man'yōshū</em> speaks of the people of Hida floating logs of fine timber down the river, and Hida's carpenters and its wood were known in the capital long before the Kiso forests were organised. After the shogunate took Hida under direct rule in 1692, it exploited the province's forests for revenue. In the decade from 1697 to 1707, forty-eight villages of the Atano and Osaka districts were set to cutting six to seven hundred thousand <em>kureki</em> — split blanks for roof shingles and boards — which were floated down the Hida River towards Shirotori and Kuwana.",
            ja:"飛騨から材木を流すことは、どの藩よりも古い。八世紀の『万葉集』の一首は、飛騨の人が良い材木を川に流すことをうたい、飛騨の工とその木は、木曽の森が組織されるずっと前から都に知られていた。一六九二年に幕府が飛騨を直轄にすると、その森を収入のために用いた。一六九七年から一七〇七年までの十年に、阿多野郷と小坂郷の四十八か村が、六十万から七十万の榑木——屋根板や板にする割った材——の伐り出しを命じられ、それは飛騨川を白鳥と桑名へ向けて流された。",
            zh:"從飛驒放流木材的歷史比任何藩都悠久。八世紀《萬葉集》中有一首和歌，吟詠飛驒人把上好木材放流入河；飛驒的匠人與木材，早在木曾森林被組織化之前就已聞名京城。1692 年幕府將飛驒收為直轄領後，便利用其森林以增加收入。1697 至 1707 年的十年間，阿多野鄉與小坂鄉的四十八個村被命令伐出六十萬至七十萬根「榑木」——劈製成屋頂木瓦與板材的坯料——沿飛驒川放流，運往白鳥與桑名。" } },
        { t:"note",
          label:{ en:"When the wood stopped", ja:"材が止まったとき", zh:"木材停下之時" },
          text:{
            en:"Cutting timber for the shogunate (<em>motogiri</em>) remained a mainstay of Hida's mountain villages through much of the eighteenth century. When the intendant Ōhara Hikoshirō halted it in the early 1770s, the villages lost wages they had come to depend on — one of the grievances, with heavier rice levies, behind the long peasant uprisings of 1771–1788 known as the Ōhara disturbances. The forest economy and the livelihoods of mountain villages were already inseparable.",
            ja:"幕府の御用材の伐り出し（元伐）は、十八世紀の大半を通じて飛騨の山村の大きな稼ぎであった。一七七〇年代初めに代官大原彦四郎が元伐を中止すると、村々は頼りにしていた賃金を失った——年貢の増徴とともに、一七七一〜一七八八年の長い百姓一揆、大原騒動の背景にあった不満の一つである。森の経済と山村の暮らしは、すでに切り離せないものだった。",
            zh:"為幕府伐出御用材（元伐）在十八世紀大半時間裡都是飛驒山村的重要生計。1770 年代初，代官大原彥四郎停止元伐，各村失去了賴以維生的工資——這與加重的年貢一起，成為 1771–1788 年漫長的農民起義「大原騷動」背後的不滿之一。森林經濟與山村生計，早已密不可分。" } }
      ] },
    { t:"section",
      id:"end",
      title:{ en:"The end of river transport", ja:"川の運材の終わり", zh:"河運的終結" },
      jp:"大井ダム",
      body:[
        { t:"timeline",
          items:[
            { year:"1889",
              title:{ en:"Imperial forest", ja:"御料林に", zh:"改為御料林" },
              text:{
                en:"The Kiso forests become crown land; the imperial forest bureau continues the river drives.",
                ja:"木曽の森が御料林となる。御料局は川の流しを続ける。",
                zh:"木曾森林成為皇室御料林；御料局繼續河川驅流。" } },
            { year:"1910s",
              title:{ en:"Railways", ja:"鉄道", zh:"鐵路" },
              text:{
                en:"The Chūō main line through the Kiso valley opens in stages, completed in 1911; timber can now go by train to Nagoya.",
                ja:"木曽谷を通る中央本線が段階的に開通し、一九一一年に全通する。材木は汽車で名古屋へ運べるようになる。",
                zh:"穿越木曾谷的中央本線分段通車，於 1911 年全線開通；木材自此可經鐵路運往名古屋。" } },
            { year:"1916",
              title:{ en:"Forest railways", ja:"森林鉄道", zh:"森林鐵道" },
              text:{
                en:"The first forest railway in Kiso opens, beginning a network of logging lines that will carry timber out of the valleys for half a century.",
                ja:"木曽で最初の森林鉄道が開き、半世紀にわたって谷から材を運び出す林用軌道の網が始まる。",
                zh:"木曾第一條森林鐵道開通，開啟此後半世紀把木材運出山谷的林業軌道網。" } },
            { year:"1924",
              title:{ en:"The Ōi Dam", ja:"大井ダム", zh:"大井水壩" },
              text:{
                en:"The Ōi Dam across the Kiso River between Ena and Nakatsugawa — often described as Japan's first full-scale dam built for hydroelectric power — blocks the river. The great drives end; the sacred timber for Ise, which until then had gone down the Kiso River to Ise Bay, now travels overland.",
                ja:"恵那と中津川のあいだで木曽川をせき止める大井ダム——日本初の本格的な発電用ダムとされる——ができる。大きな川流しは終わり、それまで木曽川を下って伊勢湾へ運ばれていた伊勢の御用材も、陸を行くようになる。",
                zh:"橫跨惠那與中津川之間木曾川的大井水壩——常被稱為日本第一座正式的水力發電用水壩——截斷河道。大規模驅流就此結束；此前一直順木曾川而下運至伊勢灣的伊勢御用材，從此改走陸路。" } },
            { year:"1960s–70s",
              title:{ en:"Trucks", ja:"トラック", zh:"卡車" },
              text:{
                en:"Forest roads and trucks replace the forest railways; the last logging lines close.",
                ja:"林道とトラックが森林鉄道に取って代わり、最後の林用軌道が閉じる。",
                zh:"林道與卡車取代森林鐵道；最後的林業軌道停駛。" } }
          ] },
        { t:"p",
          text:{
            en:"The rivers still carry the memory. The festivals of the Kiso valley re-enact the hauling of timber; the town of Yaotsu keeps the Nishikori site and publishes its history; the log processions of the Ise rebuilding, drawn by citizens through Nakatsugawa, recall the centuries when every great hinoki began its journey on the water.",
            ja:"川はいまも記憶を運んでいる。木曽谷の祭りは材木を曳くさまを再現し、八百津町は錦織の跡を守りその歴史を刊行し、中津川を市民が曳く遷宮の御神木の行列は、すべての大きなヒノキが水の上で旅を始めた幾世紀を思い起こさせる。",
            zh:"河川至今仍承載著記憶。木曾谷的祭典重現拖運木材的情景；八百津町保存錦織遺址並出版其歷史；市民在中津川拖行的伊勢遷宮御神木遊行，讓人想起每一棵巨大扁柏都從水上啟程的那些世紀。" } }
      ] },
    { t:"section",
      id:"shimoaso",
      title:{ en:"Shimoasō: the Hida River station", ja:"下麻生綱場：飛騨川の綱場", zh:"下麻生：飛驒川的綱場" },
      jp:"下麻生綱場",
      body:[
        { t:"p",
          text:{
            en:"The Hida River had its own catching station, older on paper than Nishikori. At Shimoasō, in what is now Kawabe town, the river leaves the last of its gorges before joining the Kiso, and here logs that had been driven one by one out of the Hida mountains — down the side valleys and then the main river — were stopped, sorted and bound into rafts. The oldest record of the <em>tsunaba</em> dates from 1528, in the Kyōroku era, long before the Kanamori lords or the shogunate organised Hida's forests. At its height it handled, by local account, some 250,000 logs a year. Like the Kiso drives, it worked only from September to March, after the rainy season and typhoons had passed and before the spring floods: too little water stranded the logs, too much smashed them against the rocks.",
            ja:"飛騨川にも独自の綱場があり、記録のうえでは錦織より古い。いまの川辺町の下麻生は、飛騨川が木曽川に合流する前に最後の峡谷を抜ける場所で、飛騨の山から谷川、そして本流へと一本ずつ流されてきた木材が、ここで止められ、選り分けられ、筏に組まれた。この<em>綱場</em>の最も古い記録は享禄元年、一五二八年のもので、金森氏や幕府が飛騨の森を組織するよりはるかに前である。地元の説明によれば、最盛期には年に二十五万本ほどを扱った。木曽の川狩と同じく、稼働は九月から翌年三月までに限られた。梅雨と台風が過ぎたあと、春の増水の前である。水が少なければ木は岩に取り残され、多すぎれば岩に打ちつけられて砕けた。",
            zh:"飛驒川也有自己的綱場，在文獻上比錦織更早。在今日川邊町的下麻生，飛驒川穿出匯入木曾川前的最後一段峽谷；從飛驒山中一根根順著支谷、再沿主流漂下的木材，便在此被攔住、分揀並紮成木筏。這處<em>綱場</em>最早的紀錄是享祿元年，即 1528 年，遠早於金森氏或幕府組織飛驒森林之時。據當地說法，鼎盛時期每年處理約 25 萬根木材。與木曾的川狩一樣，它只在 9 月至翌年 3 月運作，即梅雨與颱風過後、春季漲水之前：水太少，木材擱淺在岩石上；水太多，木材撞上岩石而碎裂。" } },
        { t:"p",
          text:{
            en:"A river-office history of the area describes an ordinary raft as about fifty pieces of timber two <em>ken</em> (about 3.6 metres) long, lashed firmly together with wisteria vine; below the station, rafts were joined into longer trains for the broad lower river. Shimoasō grew into a riverside village of raftsmen, timber wholesalers and inns, living on the logs that passed through. Its decline began after the Meiji Restoration, as roads were improved and carters and, later, lorries took more of the trade; in the Shōwa period the opening of the Takayama railway line and the building of hydroelectric dams on the Hida River ended it. Today the site of the station lies below Tōmiyama, a wooded hill with the ruins of Shimoasō castle, and is marked as one of the sights of Kawabe town.",
            ja:"この地域の河川事務所による歴史の解説は、ふつうの筏を、長さ二間（約3.6メートル）の材およそ五十本を藤づるで固く組んだものと記す。綱場より下では、筏をつなげて広い下流のための長い筏に仕立てた。下麻生は、流れてくる木材で暮らす筏師、材木問屋、宿屋の集まる川沿いの村に育った。その衰えは明治維新のあとに始まり、道路が改修されて荷車や、のちにはトラックが荷を奪った。そして昭和に入り、高山線の開通と飛騨川の発電用ダムの建設が筏流しを終わらせた。いま綱場の跡は、下麻生城跡のある森の丘、遠見山（とおみやま）の下にあり、川辺町の名所の一つとして案内されている。",
            zh:"當地河川事務所的歷史解說指出，一般木筏約由五十根長二<em>間</em>（約 3.6 公尺）的木材組成，以紫藤藤蔓牢牢綁紮；綱場以下，木筏再連結成適合寬闊下游的長筏隊。下麻生因此發展成筏夫、木材批發商與旅店聚集的河岸村落，靠流經的木材維生。明治維新後，道路改善，貨車、後來的卡車搶走生意，綱場開始衰落；進入昭和時代，高山線通車與飛驒川上水力發電水壩的興建，終結了放筏。今日綱場遺址位於遠見山之下——一座保有下麻生城遺跡的森林山丘——是川邊町介紹的名勝之一。" } },
        { t:"table",
          caption:{ en:"Timber stations and river ports of the Gifu rivers", ja:"岐阜の川の綱場と川湊", zh:"岐阜各河川的綱場與河港" },
          cols:[
            { en:"Place", ja:"場所", zh:"地點" },
            { en:"River", ja:"川", zh:"河川" },
            { en:"Origin", ja:"起こり", zh:"起源" },
            { en:"Role and scale", ja:"役割と規模", zh:"功能與規模" }
          ],
          rows:[
            [
              { en:"Nishikori, Yaotsu", ja:"錦織（八百津町）", zh:"錦織（八百津町）" },
              { en:"Kiso", ja:"木曽川", zh:"木曾川" },
              { en:"Owari domain office from 1665", ja:"一六六五年から尾張藩の役所", zh:"1665 年起為尾張藩役所" },
              { en:"Catching station; about 300,000 logs a year", ja:"綱場。年に約三十万本", zh:"綱場；每年約 30 萬根" }
            ],
            [
              { en:"Shimoasō, Kawabe", ja:"下麻生（川辺町）", zh:"下麻生（川邊町）" },
              { en:"Hida", ja:"飛騨川", zh:"飛驒川" },
              { en:"Earliest record 1528", ja:"最古の記録は一五二八年", zh:"最早紀錄 1528 年" },
              { en:"Catching station; about 250,000 logs a year", ja:"綱場。年に約二十五万本", zh:"綱場；每年約 25 萬根" }
            ],
            [
              { en:"Kōzuchi port, Mino", ja:"上有知湊（美濃市）", zh:"上有知湊（美濃市）" },
              { en:"Nagara", ja:"長良川", zh:"長良川" },
              { en:"Built by Kanamori Nagachika, early 17th century", ja:"十七世紀初め、金森長近が築く", zh:"17 世紀初由金森長近所建" },
              {
                en:"Boat port for timber, paper and blades; about 40 boats",
                ja:"材木、紙、刃物の舟の湊。舟は約四十艘",
                zh:"木材、紙與刀具的船運港；船約 40 艘" }
            ],
            [
              { en:"Kawaramachi, Gifu", ja:"川原町（岐阜市）", zh:"川原町（岐阜市）" },
              { en:"Nagara", ja:"長良川", zh:"長良川" },
              { en:"River port of Saitō Dōsan, 16th century", ja:"十六世紀、斎藤道三が設けた川湊", zh:"16 世紀齋藤道三所設河港" },
              { en:"Timber and paper wholesalers", ja:"材木問屋と紙問屋", zh:"木材與紙批發商" }
            ]
          ] }
      ] },
    { t:"section",
      id:"nagara-ports",
      title:{ en:"River ports of the Nagara", ja:"長良川の川湊", zh:"長良川的河港" },
      jp:"上有知湊・川原町",
      body:[
        { t:"p",
          text:{
            en:"The Nagara carried less of the great timber trade than the Kiso, but more of everything else. At Kōzuchi, in today's Mino city, Kanamori Nagachika (1524–1608) — the same lord who conquered Hida — built a river port at the foot of the castle town he laid out in the early seventeenth century. Timber, the blades of Seki and the paper of Mino went down the river from here, and in the Edo period some forty river boats worked from the port. A wooden lighthouse about nine metres tall, built in the late Edo period, still stands on the old landing, with two large stone lanterns set up in the early nineteenth century. The port declined after 1911, when a railway opened between Mino and Gifu city.",
            ja:"長良川は、木曽川ほど大きな材木の流れを担わなかったが、それ以外のものを多く運んだ。いまの美濃市の上有知では、飛騨を攻め取ったその人である金森長近（一五二四〜一六〇八年）が、十七世紀初めに町割りした城下の足もとに川湊を築いた。材木、関の刃物、美濃の紙がここから川を下り、江戸時代には約四十艘の川舟がこの湊を拠点にした。江戸時代後期に建てられた高さ約九メートルの木造の灯台がいまも旧船着き場に立ち、十九世紀初めに据えられた二基の大きな石灯籠が並ぶ。一九一一年に美濃と岐阜市を結ぶ鉄道が開通すると、湊は衰えた。",
            zh:"長良川承載的大宗木材不如木曾川，其他貨物卻運得更多。在今日美濃市的上有知，正是征服飛驒的金森長近（1524–1608 年），於 17 世紀初在他規劃的城下町腳下建了河港。木材、關的刀具與美濃的紙從這裡順流而下；江戶時代約有 40 艘河船以此為據點。一座建於江戶後期、高約 9 公尺的木造燈塔至今仍立在舊碼頭，旁有兩座 19 世紀初設置的大石燈籠。1911 年連接美濃與岐阜市的鐵路通車後，河港隨之沒落。" } },
        { t:"p",
          text:{
            en:"Further down, at the foot of Mount Kinka, Saitō Dōsan had established a river port for his castle town in the sixteenth century. The district, today's Kawaramachi — the streets of Minato-machi, Tamai-machi and Motohama-machi — received timber and Mino paper brought down from the upper Nagara, and its streets filled with timber wholesalers and paper merchants. It survived both the Nōbi earthquake of 1891 and the wartime bombing, and its latticed merchant houses, beside the river where cormorant fishing boats still put out on summer nights, are the best-preserved reminder of the Nagara's working past (see <a href=\"woodjourneys.html\">Five Journeys</a>).",
            ja:"さらに下流、金華山のふもとでは、十六世紀に斎藤道三が城下のための川湊を設けていた。いまの川原町——湊町、玉井町、元浜町の通り——は、長良川上流から運ばれる材木と美濃紙を受け入れ、通りには材木問屋や紙問屋が軒を連ねた。一八九一年の濃尾地震と戦時中の空襲をともに免れ、夏の夜にいまも鵜飼の舟が出る川のそばに格子の町家が並ぶこの一帯は、長良川の働く過去を最もよく伝える場所である（<a href=\"woodjourneys.html\">五つの旅</a>を参照）。",
            zh:"再往下游，在金華山腳下，齋藤道三於 16 世紀為其城下町設了河港。這一帶即今日的川原町——湊町、玉井町、元濱町的街道——接收從長良川上游運來的木材與美濃紙，街上木材批發商與紙商櫛比鱗次。它躲過了 1891 年的濃尾地震與戰時空襲；格子窗町家沿河排列，夏夜裡鵜飼的船仍從此出航，是長良川昔日勞動身影保存最好的見證（見<a href=\"woodjourneys.html\">五段旅程</a>）。" } }
      ] },
    { t:"section",
      id:"memory",
      title:{ en:"Railways, dams and memory", ja:"鉄道、ダム、そして記憶", zh:"鐵路、水壩與記憶" },
      jp:"川の運材の終わり",
      body:[
        { t:"timeline",
          items:[
            { year:"1911",
              title:{ en:"Rails to Mino", ja:"美濃へ鉄道", zh:"鐵路通往美濃" },
              text:{
                en:"A railway links Mino and Gifu city; the boats of Kōzuchi port lose their trade.",
                ja:"美濃と岐阜市を結ぶ鉄道が開通し、上有知湊の舟は荷を失う。",
                zh:"連接美濃與岐阜市的鐵路通車；上有知湊的船隻失去生意。" } },
            { year:"1934",
              title:{ en:"The Takayama line", ja:"高山線", zh:"高山線" },
              text:{
                en:"The railway from Gifu through the Hida valley to Takayama and Toyama is completed; Hida timber can travel by train.",
                ja:"岐阜から飛騨の谷を通り高山、富山へ至る鉄道が全通し、飛騨の木材は汽車で運べるようになる。",
                zh:"從岐阜經飛驒溪谷通往高山、富山的鐵路全線通車；飛驒木材可改以火車運送。" } },
            { year:"1936",
              title:{ en:"The Kawabe Dam", ja:"川辺ダム", zh:"川邊水壩" },
              text:{
                en:"Construction begins on a hydroelectric dam on the Hida River at Kawabe, close to the Shimoasō station; with the railway, dams like it bring the drives on the river to an end.",
                ja:"下麻生の綱場に近い川辺で、飛騨川の発電用ダムの工事が始まる。鉄道とこうしたダムが、川の流送を終わらせる。",
                zh:"在鄰近下麻生綱場的川邊，飛驒川水力發電水壩動工；鐵路與這類水壩終結了河上的放流。" } }
          ] },
        { t:"p",
          text:{
            en:"The great timber of the Ura-Kiso forests still makes a ceremonial journey, though no longer by water. On 5 June 2025 two hinoki for the 63rd rebuilding of the Ise Shrines were felled in the national forest at Kashimo by the traditional three-point method, and on the following days they were drawn through Nakatsugawa in processions of residents before going on by road to Ise, where the timber-hauling festivals of 2026 and 2027 bring it into the shrine precincts. Before the Ōi Dam closed the Kiso River in 1924 the same logs would have gone down the river to Ise Bay. Along the rivers themselves, the memory is held by small places rather than monuments: the lighthouse at Kōzuchi, the latticed houses of Kawaramachi, the wooded hill above Shimoasō and the holly tree at Nishikori.",
            ja:"裏木曽の森の大木は、もはや水の上ではないが、いまも儀式の旅をする。二〇二五年六月五日、伊勢神宮の第六十三回式年遷宮のための二本のヒノキが加子母の国有林で伝統の三ツ緒伐りによって伐られ、続く数日、中津川の町を住民の行列に曳かれたのち、陸路で伊勢へ向かった。伊勢では二〇二六年と二〇二七年のお木曳行事が材を神域へ運び入れる。一九二四年に大井ダムが木曽川をせき止める前なら、同じ木は川を下って伊勢湾へ出ていたはずである。川沿いでは、記憶を守っているのは記念碑ではなく小さな場所である。上有知の灯台、川原町の格子の家並み、下麻生を見下ろす森の丘、そして錦織のクロガネモチ。",
            zh:"裏木曾森林的巨木至今仍有一段儀式性的旅程，只是不再走水路。2025 年 6 月 5 日，為伊勢神宮第 63 次式年遷宮所用的兩棵扁柏，在加子母的國有林以傳統的「三緒伐」砍下，隨後數日由居民列隊拖曳穿過中津川市區，再經陸路前往伊勢；在伊勢，2026 與 2027 年的「御木曳」祭典把木材送入神域。若在 1924 年大井水壩截斷木曾川之前，同樣的木材會順河而下直抵伊勢灣。沿著河川，記憶由小地方而非紀念碑守護：上有知的燈塔、川原町的格子町家、俯瞰下麻生的森林山丘，以及錦織的鐵冬青。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture tourism federation, Tōmiyama and the Shimoasō tsunaba (Kawabe town); MLIT Kiso River Lower Reaches Office, newsletter KISSO vol. 85; Japan Tourism Agency multilingual text database, Kōzuchi port lighthouse; tabi-mag, Kawaramachi (Gifu city); Ise Jingū, schedule of the 63rd Shikinen Sengū.",
            ja:"出典：岐阜県観光連盟「遠見山」（川辺町、下麻生綱場）、国土交通省木曽川下流河川事務所 広報誌『KISSO』第八十五号、観光庁 多言語解説文データベース「上有知湊の川湊灯台」、タビリス（tabi-mag）「川原町」（岐阜市）、伊勢神宮「第六十三回神宮式年遷宮 日程」。",
            zh:"資料來源：岐阜縣觀光聯盟〈遠見山〉（川邊町，下麻生綱場）、國土交通省木曾川下游河川事務所刊物《KISSO》第 85 期、觀光廳多語解說文資料庫〈上有知湊河港燈塔〉、tabi-mag〈川原町〉（岐阜市）、伊勢神宮〈第 63 次神宮式年遷宮日程〉。" } }
      ] },
    { t:"related",
      items:[
        { href:"fivetrees.html", why:{ en:"The Owari domain's forest law.", ja:"尾張藩の森の掟。", zh:"尾張藩的森林法。" } },
        { href:"felling.html",
          why:{ en:"How the logs were cut in the first place.", ja:"そもそも丸太はどう伐られたか。", zh:"原木最初如何伐倒。" } },
        { href:"markets.html", why:{ en:"Where timber is traded today.", ja:"いま材木はどこで取引されるか。", zh:"如今木材在哪裡交易。" } },
        { href:"woodhistory.html", why:{ en:"The wider history of Gifu.", ja:"岐阜のより広い歴史。", zh:"岐阜更廣的歷史。" } }
      ] }
  ] };

/* ---- ------------------------------------------- markets */
GIFU.pages["markets"] = { kicker:{ en:"Timber · 04", ja:"木材 · 04", zh:"木材 · 04" },
  title:{ en:"Log Markets", ja:"原木市場", zh:"原木市場" },
  jp:"共販所・銘木市 · 競りの朝",
  lede:{
    en:"Between the forest and the sawmill stands a Japanese institution with few equivalents abroad: the log market. On market days, logs from dozens of owners are laid out in lots on a great yard and sold by auction to sawmills, builders and craftsmen who come to inspect every one. Gifu has several: three run by the forest cooperatives' federation, others by individual cooperatives, and in Gifu city a market for fine broadleaf timber and figured wood that is described as the largest of its kind in Japan. This page explains how the markets work, what logs sell for, and why a single keyaki log can fetch more than a hectare of plantation.",
    ja:"森と製材所のあいだに、外国にはあまり例のない日本の制度がある。原木市場である。市の日には、何十人もの持ち主の丸太が広い土場に椪ごとに並べられ、一本一本を見に来る製材所、工務店、職人に競りで売られる。岐阜にはいくつもある。森林組合連合会が営む三つ、それぞれの組合が営むもの、そして岐阜市には、良質の広葉樹と杢のある銘木を扱い、この種のものでは日本最大とされる市場がある。この頁は、市場がどう働くか、丸太がいくらで売れるか、そしてケヤキの丸太一本が人工林一ヘクタールより高く売れることがあるのはなぜかを説明する。",
    zh:"在森林與製材所之間，有一種國外少見的日本制度：原木市場。在市集日，來自數十位林主的原木分堆排列在寬廣的堆場上，拍賣給前來逐根檢視的製材所、營造商與工匠。岐阜有好幾座：三座由森林組合聯合會經營，另有個別組合經營的市場，而岐阜市則有一座高級闊葉材與花紋銘木市場，據稱是日本同類市場中最大的。本頁說明市場如何運作、原木售價幾何，以及為何一根櫸木原木的價格可能超過一公頃人工林。" },
  body:[
    { t:"section",
      id:"markets",
      title:{ en:"Gifu's markets", ja:"岐阜の市場", zh:"岐阜的市場" },
      jp:"共販所",
      body:[
        { t:"p",
          text:{
            en:"The Gifu Prefectural Forest Owners' Cooperative Federation runs three regional log markets, known as <em>kyōhanjo</em>, “joint sales centres”, each selling the logs sent by the cooperatives of its region. Market days are held on fixed dates through the year, several times a month in the busy winter season. Individual cooperatives and private companies run further markets, among them the Tōnō hinoki market at Shirakawa and, by local accounts, a market of the Kashimo cooperative.",
            ja:"岐阜県森林組合連合会は三つの地域の原木市場——共販所——を営み、それぞれが地域の組合から出される丸太を売る。市の日は一年を通じて決まった日に開かれ、忙しい冬には月に何度もある。各組合や民間の会社もほかの市場を営み、そのなかには白川町の東濃ヒノキの市場があり、地元の紹介によれば加子母森林組合の市場もある。",
            zh:"岐阜縣森林組合聯合會經營三座區域原木市場，稱為「共販所」（共同販售所），各自販售該區組合送來的原木。市集日全年固定舉行，繁忙的冬季每月數次。個別組合與民間公司也經營其他市場，其中包括白川町的東濃扁柏市場，據當地介紹，加子母森林組合也有自己的市場。" } },
        { t:"table",
          caption:{ en:"Principal timber markets in Gifu", ja:"岐阜の主な木材市場", zh:"岐阜主要木材市場" },
          cols:[
            { en:"Market", ja:"市場", zh:"市場" },
            { en:"Region", ja:"地域", zh:"區域" },
            { en:"What it sells", ja:"扱うもの", zh:"販售內容" },
            { en:"Notable", ja:"特色", zh:"特色" }
          ],
          rows:[
            [
              { en:"Gifu forest-products market", ja:"岐阜林産物共販所", zh:"岐阜林產物共販所" },
              { en:"Gifu and Chūnō", ja:"岐阜・中濃", zh:"岐阜、中濃" },
              { en:"Sugi and hinoki from the cooperatives of the region", ja:"地域の組合のスギ・ヒノキ", zh:"區內各組合的柳杉與扁柏" },
              { en:"Federation market", ja:"県森連の市場", zh:"聯合會市場" }
            ],
            [
              { en:"Tōnō forest-products market", ja:"東濃林産物共販所", zh:"東濃林產物共販所" },
              { en:"Tōnō", ja:"東濃", zh:"東濃" },
              {
                en:"Tōnō hinoki above all, including large and pruned logs",
                ja:"何より東濃ひのき。大径材や枝打ち材も",
                zh:"以東濃扁柏為主，包括大徑材與修枝材" },
              {
                en:"Hosts the annual Gifu quality-timber exhibition, the federation's largest sale",
                ja:"年一回の岐阜県優良材展示会を開く。県森連で最大の市",
                zh:"舉辦年度岐阜縣優良材展示會，聯合會規模最大的拍賣" }
            ],
            [
              { en:"Hida forest-products market", ja:"飛騨林産物共販所", zh:"飛驒林產物共販所" },
              { en:"Hida", ja:"飛騨", zh:"飛驒" },
              { en:"Conifers and broadleaves from Hida", ja:"飛騨の針葉樹と広葉樹", zh:"飛驒的針葉樹與闊葉樹" },
              {
                en:"Holds a broadleaf festival sale of quality hardwoods",
                ja:"良質の広葉樹を集めた広葉樹まつりを開く",
                zh:"舉辦優質闊葉材的「闊葉樹祭」拍賣" }
            ],
            [
              { en:"Tōnō hinoki market, Shirakawa", ja:"東濃ヒノキ白川市場", zh:"東濃扁柏白川市場" },
              { en:"Chūnō (Shirakawa town)", ja:"中濃（白川町）", zh:"中濃（白川町）" },
              { en:"Hinoki logs", ja:"ヒノキの丸太", zh:"扁柏原木" },
              {
                en:"Cooperative market in the heart of the hinoki country",
                ja:"ヒノキの里の中心にある協同組合の市場",
                zh:"位於扁柏之鄉核心的協同組合市場" }
            ],
            [
              { en:"Kashimo cooperative market", ja:"加子母森林組合の木材市場", zh:"加子母森林組合木材市場" },
              { en:"Tōnō (Nakatsugawa)", ja:"東濃（中津川）", zh:"東濃（中津川）" },
              { en:"Ura-Kiso hinoki", ja:"裏木曽のヒノキ", zh:"裏木曾扁柏" },
              { en:"Run by a single cooperative", ja:"一つの組合が営む", zh:"由單一組合經營" }
            ],
            [
              { en:"Gifu Meiboku Cooperative", ja:"岐阜県銘木協同組合", zh:"岐阜縣銘木協同組合" },
              { en:"Gifu city", ja:"岐阜市", zh:"岐阜市" },
              {
                en:"Fine broadleaf timber and figured wood, domestic and imported, as logs and boards",
                ja:"国産・輸入の良質広葉樹と銘木。丸太と製品",
                zh:"國產與進口的高級闊葉材與銘木，原木與板材皆有" },
              {
                en:"Described as Japan's largest broadleaf and meiboku market",
                ja:"日本最大の広葉樹・銘木市場とされる",
                zh:"號稱日本最大的闊葉材與銘木市場" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefectural Forest Owners' Cooperative Federation; Gifu Meiboku Cooperative; Gifu prefectural timber portal.",
            ja:"出典：岐阜県森林組合連合会、岐阜県銘木協同組合、ぎふの木ネット。",
            zh:"資料來源：岐阜縣森林組合聯合會；岐阜縣銘木協同組合；岐阜縣木材入口網站。" } }
      ] },
    { t:"section",
      id:"auction",
      title:{ en:"How an auction works", ja:"競りの仕組み", zh:"拍賣如何進行" },
      jp:"椪・競り・入札",
      body:[
        { t:"steps",
          items:[
            { title:{ en:"Consignment", ja:"出荷", zh:"寄售" },
              jp:"しゅっか",
              text:{
                en:"Cooperatives and loggers deliver logs to the market yard in the days before a sale. The market sorts them by species, length, diameter and quality into lots called <em>hai</em>, each with a numbered tag giving its owner, volume and grade.",
                ja:"組合や素材生産業者が、市の前の数日に丸太を市場の土場に運ぶ。市場はそれを樹種・長さ・径・品質で仕分け、椪と呼ぶ山にし、それぞれに持ち主・材積・等級を記した番号札をつける。",
                zh:"組合與伐木業者在拍賣前幾天把原木送到市場堆場。市場依樹種、長度、徑級與品質分成稱為「椪」的批次，每批附有編號標籤，註明所有者、材積與等級。" } },
            { title:{ en:"Viewing", ja:"下見", zh:"預覽" },
              jp:"したみ",
              text:{
                en:"Buyers walk the yard early, examining the end grain for ring width, colour and rot, the surface for knots and bends, and making notes of the lots they want.",
                ja:"買い手は朝早く土場を歩き、木口で年輪の幅、色、腐れを、表面で節や曲がりを見て、ほしい椪を書き留める。",
                zh:"買家一早巡視堆場，從端面檢查年輪寬度、顏色與腐朽，從表面檢查節疤與彎曲，記下想要的批次。" } },
            { title:{ en:"The auction", ja:"競り", zh:"競標" },
              jp:"せり",
              text:{
                en:"The auctioneer and his clerks move from lot to lot; buyers call bids per cubic metre, and each lot goes to the highest in seconds. Very valuable logs are sold by sealed tender (<em>nyūsatsu</em>) instead, with bids written and opened together.",
                ja:"競り人と記録係が椪から椪へ移り、買い手は一立方メートルあたりの値を声で入れ、それぞれの椪は数秒で最高値の者に落ちる。非常に高い丸太は、かわりに入札——値を書いてまとめて開ける——で売られる。",
                zh:"拍賣官與記錄員逐批移動；買家以每立方公尺的單價喊價，每批數秒內即落入出價最高者手中。極高價的原木則改以密封投標（入札）方式出售，所有標單一起開封。" } },
            { title:{ en:"Settlement", ja:"精算", zh:"結算" },
              jp:"せいさん",
              text:{
                en:"The market collects payment from buyers, deducts its commission and pays the consignors — a guarantee that small sellers could never obtain alone.",
                ja:"市場が買い手から代金を集め、手数料を差し引いて出荷者に払う——小さな売り手が一人では決して得られない保証である。",
                zh:"市場向買家收款，扣除佣金後支付給寄售者——這是小賣家獨自永遠得不到的保障。" } }
          ] },
        { t:"p",
          text:{
            en:"A growing share of Gifu's logs now bypasses the auction altogether. Large sawmills, the Kashimo plywood mill and biomass power stations need steady volumes at predictable prices, and they sign supply agreements directly with cooperatives and logging companies. The markets remain essential for high-quality logs, whose value depends on individual inspection, and for the small owners and buyers who make up much of the prefecture's timber economy.",
            ja:"いまでは岐阜の丸太のうち、競りをまったく通らないものがふえている。大きな製材所、加子母の合板工場、バイオマス発電所は、決まった量を読める値で必要とし、組合や素材生産の会社と直接に供給の協定を結ぶ。市場は、一本ずつ見て価値が決まる良質の丸太と、県の木材経済の大きな部分を占める小さな持ち主や買い手にとって、なくてはならないものでありつづけている。",
            zh:"如今岐阜愈來愈多的原木完全不經拍賣。大型製材所、加子母合板廠與生質能電廠需要價格可預期的穩定供量，因而直接與森林組合及伐木公司簽訂供應協定。對於價值取決於逐根檢視的高品質原木，以及構成縣內木材經濟大部分的小林主與小買家而言，市場依然不可或缺。" } }
      ] },
    { t:"section",
      id:"prices",
      title:{ en:"What logs sell for", ja:"丸太の値段", zh:"原木售價" },
      jp:"中丸太価格",
      body:[
        { t:"p",
          text:{
            en:"Japanese log prices peaked in 1980, when a cubic metre of medium-sized hinoki logs averaged about ¥76,400 and sugi about ¥39,600. Over the following two decades, as imported timber, a strong yen and changes in house construction pushed demand away from domestic logs, prices fell by around two-thirds and have never recovered. In 2024 the national averages were about ¥22,300 for hinoki, ¥15,900 for sugi and ¥15,300 for larch.",
            ja:"日本の丸太の値段は一九八〇年に頂点を迎えた。ヒノキの中丸太は一立方メートル平均およそ七万六千四百円、スギはおよそ三万九千六百円だった。つづく二十年、輸入材、円高、住宅のつくり方の変化が国産の丸太から需要を遠ざけ、値段はおよそ三分の二下がり、その後二度と戻っていない。二〇二四年の全国平均は、ヒノキがおよそ二万二千三百円、スギが一万五千九百円、カラマツが一万五千三百円だった。",
            zh:"日本原木價格在 1980 年達到高峰，當時扁柏中徑原木每立方公尺平均約 76,400 日圓，柳杉約 39,600 日圓。此後二十年間，進口木材、日圓升值與住宅建造方式的改變，使需求遠離國產原木，價格下跌約三分之二，從此未再回升。2024 年全國平均價格為扁柏約 22,300 日圓、柳杉 15,900 日圓、落葉松 15,300 日圓。" } },
        { t:"figure",
          caption:{
            en:"Average price of medium-sized logs, yen per cubic metre, at the 1980 peak and in 2024 (nominal). Source: Forestry Agency timber price statistics.",
            ja:"中丸太の平均価格（円／立方メートル、名目）。一九八〇年の頂点と二〇二四年。出典：林野庁 木材価格統計。",
            zh:"中徑原木平均價格（日圓／立方公尺，名目），1980 年高峰與 2024 年比較。資料來源：林野廳木材價格統計。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Log prices then and now", ja:"丸太の値段の昔といま", zh:"原木價格今昔" }, labelW:200,
            items:[
              { n:{ en:"Hinoki 1980", ja:"ヒノキ 一九八〇年", zh:"扁柏 1980" }, v:76400, f:"#EDE5D2" },
              { n:{ en:"Hinoki 2024", ja:"ヒノキ 二〇二四年", zh:"扁柏 2024" }, v:22300, f:"#EDE5D2" },
              { n:{ en:"Sugi 1980", ja:"スギ 一九八〇年", zh:"柳杉 1980" }, v:39600, f:"#E0E6DB" },
              { n:{ en:"Sugi 2024", ja:"スギ 二〇二四年", zh:"柳杉 2024" }, v:15900, f:"#E0E6DB" },
              { n:{ en:"Larch 2024", ja:"カラマツ 二〇二四年", zh:"落葉松 2024" }, v:15300, f:"#E6E4E0" }
            ] }); } },
        { t:"p",
          text:{
            en:"Prices spike when imports falter. In 2021 the “wood shock” — a surge in American house-building combined with shipping disruption during the pandemic — cut imports of lumber and laminated beams to Japan, and domestic log prices rose sharply for the first time in decades. Gifu's sawmills worked at full capacity, and many builders discovered local timber. Prices eased again as imports recovered, but the episode revived arguments about Japan's dependence on foreign wood. See <a href=\"trade.html\">Trade &amp; Self-Sufficiency</a>.",
            ja:"輸入がつまずくと値段は跳ねる。二〇二一年の「ウッドショック」——アメリカの住宅建設の急増と、感染症の流行のなかの海運の混乱が重なった——は、日本への製材や集成材の梁の輸入を減らし、国産の丸太の値段は数十年ぶりに急に上がった。岐阜の製材所はフル稼働し、多くの工務店が地元の木に目を向けた。輸入が戻ると値段はまた落ち着いたが、この出来事は日本の外材への依存をめぐる議論をよみがえらせた。<a href=\"trade.html\">貿易と自給</a>を参照。",
            zh:"進口受阻時，價格便會飆升。2021 年的「木材危機」（Wood Shock）——美國住宅興建激增，加上疫情期間的海運混亂——使日本的製材與集成樑進口減少，國產原木價格數十年來首度急漲。岐阜各製材所滿載運轉，許多營造商因此發現了在地木材。隨著進口恢復，價格再度回落，但這段插曲重新引發了關於日本依賴外國木材的討論。見<a href=\"trade.html\">貿易與自給</a>。" } }
      ] },
    { t:"section",
      id:"meiboku",
      title:{ en:"Meiboku — named timber", ja:"銘木", zh:"銘木" },
      jp:"めいぼく",
      body:[
        { t:"p",
          text:{
            en:"At the other end of the trade from construction logs is <em>meiboku</em>, literally “named wood”: timber valued not by volume but as an individual object, for its size, age, colour, figure or rarity. A great keyaki with ball figure, a tochi slab two metres wide, a naturally polished sugi log for the post of a tokonoma alcove, a ceiling board of yakusugi, a burl of maple — each is sold on its own merits, and prices per cubic metre can be tens or hundreds of times those of ordinary logs.",
            ja:"建築用の丸太と取引の反対の端にあるのが銘木である。量ではなく一つの物として、その大きさ、年齢、色、杢、珍しさで価値を認められる材である。玉杢の大きなケヤキ、幅二メートルのトチの板、床の間の柱にする天然しぼりのスギの丸太、屋久杉の天井板、カエデのこぶ——どれもそれ自体の値打ちで売られ、一立方メートルあたりの値段はふつうの丸太の何十倍、何百倍にもなりうる。",
            zh:"與建築用原木位於交易另一端的是「銘木」，字面意思是「有名號的木材」：其價值不以材積計算，而是作為單一物件，依其大小、樹齡、色澤、花紋或稀有程度而定。一株帶玉杢的巨大櫸木、一塊寬兩公尺的七葉樹板、一根作為床之間壁龕柱的天然皺紋柳杉原木、一片屋久杉天花板、一塊楓木樹瘤——每一件都依自身價值出售，每立方公尺價格可達一般原木的數十乃至數百倍。" } },
        { t:"grid",
          cols:3,
          cells:[
            { k:{ en:"Market days", ja:"市の日", zh:"市集日" },
              v:{ en:"Monthly, 2 days", ja:"毎月、二日間", zh:"每月兩天" },
              d:{
                en:"One day for sawn products, one for logs, at the Gifu Meiboku Cooperative; figures in this row as described by the market.",
                ja:"岐阜県銘木協同組合では、一日は製品、一日は原木。この欄の数字は市場自身の紹介による。",
                zh:"岐阜縣銘木協同組合一天拍賣製品，一天拍賣原木；本欄數字依市場自身的介紹。" } },
            { k:{ en:"Lots each month", ja:"毎月の出品", zh:"每月出品" },
              v:{ en:"3,000–5,000 + 1,000–2,000", ja:"製品三千〜五千点＋原木千〜二千本", zh:"製品 3,000–5,000 件＋原木 1,000–2,000 根" },
              d:{ en:"Sawn items and logs respectively.", ja:"それぞれ製品と原木。", zh:"分別為製品與原木。" } },
            { k:{ en:"Buyers", ja:"買い手", zh:"買家" },
              v:{ en:"500–700 a month", ja:"月五百〜七百人", zh:"每月 500–700 人" },
              d:{
                en:"Furniture makers, craftsmen, temple and house builders from all over Japan.",
                ja:"全国から家具職人、工芸家、社寺や住宅の大工。",
                zh:"來自日本各地的家具師傅、工藝家、寺社與住宅木匠。" } }
          ] },
        { t:"defs",
          items:[
            { term:{ en:"Tokobashira", ja:"床柱", zh:"床柱" },
              jp:"とこばしら",
              def:{
                en:"The decorative post of the tokonoma alcove, the most carefully chosen piece of timber in a traditional Japanese house: a polished round log of sugi or hinoki, a rare species such as ebony or persimmon, or a trunk with its natural bumps and hollows.",
                ja:"床の間の飾りの柱で、伝統的な日本の家で最も念入りに選ばれる材。磨いたスギやヒノキの丸太、黒檀や柿のような珍しい木、あるいは天然のこぶやくぼみを残した幹。",
                zh:"床之間壁龕的裝飾柱，是傳統日本住宅中挑選最慎重的一根木材：磨光的柳杉或扁柏圓木、黑檀或柿木等珍稀樹種，或保留天然凹凸的樹幹。" } },
            { term:{ en:"Ichimai-ita", ja:"一枚板", zh:"一枚板" },
              jp:"いちまいいた",
              def:{
                en:"A tabletop cut as a single slab from a great log, with its natural edges. Tochi, keyaki, walnut, camphor and monkeypod are favourites; the fashion for slab tables since the 1990s has sent prices for large broadleaf logs soaring.",
                ja:"大木から一枚で挽いた、自然の耳を残した天板。トチ、ケヤキ、ウォルナット、クス、モンキーポッドが好まれる。一九九〇年代からの一枚板の座卓や机の流行は、大径の広葉樹の丸太の値を押し上げた。",
                zh:"從巨木上整片鋸下、保留天然邊緣的桌板。七葉樹、櫸木、胡桃木、樟木與雨豆樹最受歡迎；自 1990 年代以來的一枚板桌風潮，使大徑闊葉原木價格飆升。" } },
            { term:{ en:"Quality-timber exhibition", ja:"優良材展示会", zh:"優良材展示會" },
              jp:"ゆうりょうざい",
              def:{
                en:"Once a year the Tōnō market holds a special sale of the prefecture's finest conifer logs — old, large, pruned and knot-free hinoki — judged and awarded before auction. Winning logs can fetch several times the normal price and are sought for shrines, temples and the finest houses.",
                ja:"年に一度、東濃の市場は県で最も良い針葉樹の丸太——古く、大きく、枝打ちされた無節のヒノキ——を集めた特別の市を開き、競りの前に審査して賞を与える。入賞した丸太はふつうの何倍もの値がつき、社寺や最上の住宅のために求められる。",
                zh:"東濃市場每年舉辦一次特別拍賣，匯集全縣最好的針葉樹原木——樹齡高、徑級大、經修枝的無節扁柏——在競標前評審並頒獎。得獎原木可賣到平常數倍的價格，為寺社與頂級住宅所求。" } }
          ] },
        { t:"note",
          label:{ en:"Gifu as a crossroads", ja:"交わる場所としての岐阜", zh:"作為交匯點的岐阜" },
          text:{
            en:"The meiboku market explains itself by geography: Gifu lies midway between eastern and western Japan, on the main road and rail routes, and between the broadleaf forests of Hida and the furniture and craft workshops of the whole country. Imported walnut, maple and exotic hardwoods pass through the same auctions as Hida tochi and Mino keyaki.",
            ja:"銘木市場は地理がみずからを説明する。岐阜は東日本と西日本の中ほど、主な道路と鉄道の通り道にあり、飛騨の広葉樹の森と全国の家具・工芸の工房のあいだにある。輸入のウォルナット、メープル、珍しい広葉樹が、飛騨のトチや美濃のケヤキと同じ競りを通る。",
            zh:"銘木市場的存在由地理說明：岐阜位於東日本與西日本之間，在主要公路與鐵路幹線上，又介於飛驒闊葉林與全國家具、工藝工坊之間。進口胡桃木、楓木與珍稀闊葉材，與飛驒七葉樹、美濃櫸木在同一場拍賣中流通。" } }
      ] },
    { t:"section",
      id:"centres",
      title:{ en:"The federation's three yards", ja:"県森連の三つの土場", zh:"聯合會的三座堆場" },
      jp:"共販所の規模",
      body:[
        { t:"p",
          text:{
            en:"The three joint sales centres of the Gifu Prefectural Forest Owners' Cooperative Federation together handled almost 196,000 cubic metres of logs in FY2023, roughly a third of the prefecture's whole harvest. Each has its own character. The Hida centre in Takayama is the largest by volume and the only one with a real broadleaf trade, drawing on two intermediate yards in the mountains. The Gifu centre at Seki sells the sugi and hinoki of the Nagara basin, including branded Nagara sugi. The Tōnō centre at Ena, opened in July 1960, is the home of Tōnō hinoki; it installed a machine to sort logs by diameter and length in 2000 and a truck scale in 2021, holds markets about twice a month with typically 300 to 500 cubic metres on offer, and numbered its sale of 8 October 2026 the 1,847th.",
            ja:"岐阜県森林組合連合会の三つの共販所は、二〇二三年度にあわせて約十九万六千立方メートルの丸太を扱った。県の素材生産全体のおよそ三分の一である。それぞれに個性がある。高山の飛騨共販所は量が最も多く、本格的な広葉樹の取引があるのはここだけで、山あいの二つの中間土場から材を集める。関の岐阜共販所は長良川流域のスギとヒノキを、ブランドの長良杉も含めて売る。恵那の東濃共販所は一九六〇年七月に開かれた東濃ひのきの本拠で、二〇〇〇年に径と長さで丸太を仕分ける選木機を、二〇二一年にトラックスケールを入れた。市はおよそ月二回、ふつう三百〜五百立方メートルが並び、二〇二六年十月八日の市は第一八四七回を数える。",
            zh:"岐阜縣森林組合聯合會的三座共販所，2023 年度合計處理原木近 19.6 萬立方公尺，約占全縣原木產量的三分之一。三者各有特色。高山的飛驒共販所量最大，也是唯一有真正闊葉材交易的市場，材料來自山區兩處中繼堆場。關市的岐阜共販所銷售長良川流域的柳杉與扁柏，包括品牌材長良杉。惠那的東濃共販所於 1960 年 7 月開設，是東濃扁柏的大本營；2000 年引進依直徑與長度分選原木的選木機，2021 年增設地磅；約每月開市兩次，每次通常有 300 至 500 立方公尺上市，2026 年 10 月 8 日的拍賣為第 1,847 回。" } },
        { t:"table",
          caption:{
            en:"Joint sales centres of the Gifu federation, FY2023",
            ja:"岐阜県森林組合連合会の共販所（二〇二三年度）",
            zh:"岐阜縣森林組合聯合會共販所（2023 年度）" },
          cols:[
            { en:"Centre", ja:"共販所", zh:"共販所" },
            { en:"Location", ja:"所在地", zh:"所在地" },
            { en:"Volume handled (m³)", ja:"取扱量（m³）", zh:"處理量（立方公尺）" },
            { en:"Yard (m²)", ja:"土場（m²）", zh:"堆場（平方公尺）" },
            { en:"Speciality", ja:"特色", zh:"特色" }
          ],
          numCols:[2, 3],
          rows:[
            [
              { en:"Hida", ja:"飛騨", zh:"飛驒" },
              { en:"Takayama", ja:"高山市", zh:"高山市" },
              "81,077",
              "13,115",
              { en:"Conifers and broadleaves; two intermediate yards", ja:"針葉樹と広葉樹。中間土場二か所", zh:"針葉樹與闊葉樹；兩處中繼堆場" }
            ],
            [
              { en:"Gifu", ja:"岐阜", zh:"岐阜" },
              { en:"Seki", ja:"関市", zh:"關市" },
              "62,404",
              "16,358",
              { en:"Sugi and hinoki; Nagara sugi", ja:"スギ・ヒノキ。長良杉", zh:"柳杉與扁柏；長良杉" }
            ],
            [
              { en:"Tōnō", ja:"東濃", zh:"東濃" },
              { en:"Ena", ja:"恵那市", zh:"惠那市" },
              "52,326",
              "17,227",
              { en:"Tōnō hinoki; system sales to large mills", ja:"東濃ひのき。大型工場へのシステム販売", zh:"東濃扁柏；對大型工廠的系統販售" }
            ]
          ] },
        { t:"p",
          text:{
            en:"Not everything that passes through a centre is auctioned. Under so-called system sales the federation gathers logs of agreed specification from its member cooperatives and delivers them to large sawmills, plywood mills and power stations at prices fixed by contract for a period — the centre acting as a consolidating yard rather than a saleroom. Broadleaves are a small but distinctive line at Hida: about 4,800 cubic metres in FY2022, at an average of about ¥21,000 per cubic metre, close to the price of good hinoki.",
            ja:"共販所を通るものがすべて競りにかかるわけではない。いわゆるシステム販売では、県森連が会員の組合から決まった規格の丸太を集め、大型の製材工場や合板工場、発電所に、期間を決めた契約の値で届ける。共販所は売り場ではなく、まとめるための土場として働く。広葉樹は飛騨で小さいながら特色ある品目で、二〇二二年度は約四千八百立方メートル、平均で一立方メートルあたり約二万一千円と、良いヒノキに近い値であった。",
            zh:"經過共販所的原木並非全部拍賣。在所謂「系統販售」中，聯合會向會員組合集中約定規格的原木，以一段期間內契約固定的價格交給大型製材廠、合板廠與發電廠——此時共販所是集貨堆場，而非拍賣場。闊葉材在飛驒是量小但有特色的品項：2022 年度約 4,800 立方公尺，平均每立方公尺約 21,000 日圓，接近優質扁柏的價格。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefectural Forest Owners' Cooperative Federation, pages for the Gifu, Tōnō and Hida joint sales centres (accessed 2026); Gifu timber portal, visit report on the Tōnō centre (2019).",
            ja:"出典：岐阜県森林組合連合会 岐阜・東濃・飛騨各共販所の紹介頁（二〇二六年閲覧）、ぎふの木ネット 東濃共販所見学レポート（二〇一九年）。",
            zh:"資料來源：岐阜縣森林組合聯合會岐阜、東濃、飛驒各共販所介紹頁（2026 年查閱）；岐阜縣木材入口網站東濃共販所參訪報告（2019 年）。" } }
      ] },
    { t:"section",
      id:"longrun",
      title:{ en:"Sixty years of log prices", ja:"丸太価格の六十年", zh:"原木價格六十年" },
      jp:"価格の推移",
      body:[
        { t:"figure",
          caption:{
            en:"National average price of medium-sized logs at the log-market stage, thousand yen per cubic metre, nominal, 1960–2024 (larch from 1970). Source: Ministry of Agriculture, Forestry and Fisheries, timber price statistics.",
            ja:"中丸太の全国平均価格（原木市売の段階）、一立方メートルあたり千円、名目、一九六〇〜二〇二四年（カラマツは一九七〇年から）。出典：農林水産省「木材価格統計」。",
            zh:"中徑原木全國平均價格（原木市場階段），每立方公尺千日圓，名目值，1960–2024 年（落葉松自 1970 年起）。資料來源：農林水產省〈木材價格統計〉。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"Medium log prices, 1960–2024", ja:"中丸太価格 一九六〇〜二〇二四年", zh:"中徑原木價格 1960–2024 年" },
            unit:{ en:"thousand yen / m³", ja:"千円／m³", zh:"千日圓／立方公尺" }, x0:1960, x1:2024, y1:80, tick:20, xt:[1960, 1970, 1980, 1990, 2000, 2010, 2024],
            marks:[ { x:1980, t:{ en:"1980 peak", ja:"一九八〇年の頂点", zh:"1980 年高峰" } } ],
            series:[
              { n:{ en:"Hinoki", ja:"ヒノキ", zh:"扁柏" }, dots:false, pts:[[1960,12.0],[1965,18.0],[1970,37.6],[1975,66.2],[1980,76.4],[1985,54.0],[1990,67.8],[1995,53.5],[2000,40.3],[2005,25.5],[2010,21.6],[2015,17.6],[2019,18.1],[2020,17.2],[2021,25.9],[2022,25.1],[2023,22.0],[2024,22.3]] },
              { n:{ en:"Sugi", ja:"スギ", zh:"柳杉" }, dots:false, pts:[[1960,11.3],[1965,14.3],[1970,18.8],[1975,31.7],[1980,39.6],[1985,25.5],[1990,26.6],[1995,21.7],[2000,17.2],[2005,12.4],[2010,11.8],[2015,12.7],[2019,13.5],[2020,12.7],[2021,16.1],[2022,17.6],[2023,15.8],[2024,15.9]] },
              { n:{ en:"Larch", ja:"カラマツ", zh:"落葉松" }, dash:"5 4", dots:false, pts:[[1970,10.6],[1975,14.5],[1980,19.1],[1985,14.5],[1990,14.3],[1995,12.9],[2000,11.0],[2005,9.4],[2010,10.6],[2015,11.7],[2019,12.4],[2020,12.5],[2021,13.2],[2022,16.1],[2023,16.0],[2024,15.3]] }
            ] }); } },
        { t:"p",
          text:{
            en:"The long series tells two stories. The first is the collapse after 1980, which is steeper than it looks, because these are nominal prices: in money of constant value, a cubic metre of hinoki logs now buys a small fraction of what it did in the 1980s. The second is the vanishing hinoki premium. In 1975 a hinoki log fetched 2.1 times the price of a sugi log of the same size; in 1980, 1.9 times; since about 2015, only around 1.4 times. A reason often given in the trade is the change in houses: the exposed hinoki post of the tatami room, for which buyers paid for colour and clear faces, has given way to structural frames hidden in walls, pre-cut by machine, where sugi, larch or imported glulam do the same job. Larch, once the cheapest of the three, has run close to sugi since 2022 and even overtook it in 2023, helped, it is said, by demand from plywood mills.",
            ja:"この長い系列は二つのことを語る。一つは一九八〇年以降の崩落で、これは名目の値なので、見かけよりも急である。貨幣価値をそろえれば、ヒノキの丸太一立方メートルでいま買えるものは、一九八〇年代のごく一部にすぎない。もう一つは、ヒノキの割増が消えたことである。一九七五年にはヒノキの丸太は同じ大きさのスギの二・一倍、一九八〇年には一・九倍の値がついたが、二〇一五年ごろからは一・四倍ほどにとどまる。業界でよく挙げられる理由は家の変化である。買い手が色と無節の面に値を払った和室の化粧のヒノキ柱は、壁に隠れ、機械でプレカットされる構造の軸組にかわり、そこではスギやカラマツや輸入の集成材が同じ役を果たす。かつて三つのうち最も安かったカラマツは、二〇二二年からスギに迫り、二〇二三年には上回った。合板工場の需要に支えられたといわれる。",
            zh:"這條長期序列說了兩件事。其一是 1980 年後的崩跌，而且比表面看來更陡，因為這是名目價格：以固定幣值計算，一立方公尺扁柏原木如今能買到的東西，只有 1980 年代的一小部分。其二是扁柏溢價的消失。1975 年同尺寸的扁柏原木售價是柳杉的 2.1 倍，1980 年為 1.9 倍；約自 2015 年起只剩 1.4 倍左右。業界常提的原因是住宅的改變：買家曾為色澤與無節面付費的和室化妝扁柏柱，已被藏在牆內、以機器預切的結構骨架取代，在那裡柳杉、落葉松或進口集成材都能擔任同樣的角色。落葉松過去是三者中最便宜的，自 2022 年起逼近柳杉，2023 年更一度超越；據說是受到合板廠需求的支撐。" } }
      ] },
    { t:"section",
      id:"whogained",
      title:{ en:"Who gained from the wood shock", ja:"ウッドショックで誰が得たか", zh:"木材危機中誰獲益" },
      jp:"川上と川中",
      body:[
        { t:"p",
          text:{
            en:"The 2021 wood shock is usually told as a story about imports, and the import figures were dramatic: in December 2021 imported sawn timber cost ¥80,149 per cubic metre, 106 per cent more than a year before, imported glulam ¥107,247 (up 114 per cent) and plywood ¥77,556 (up 51 per cent). But the national price series also show how unevenly the windfall travelled up the domestic chain. Kiln-dried sugi squares — the sawmills' product — nearly doubled between 2020 and 2022; sugi logs — the forest owners' product — rose by less than 40 per cent. Mills, which could sell everything they cut, captured most of the gain; owners, paid for logs months after felling and through several intermediaries, saw much less of it, and by 2024 both had fallen back, though not to their pre-shock levels.",
            ja:"二〇二一年のウッドショックはふつう輸入の物語として語られ、輸入の数字は劇的だった。二〇二一年十二月、輸入製材は一立方メートル八万百四十九円と前年の二倍超（一〇六パーセント増）、輸入集成材は十万七千二百四十七円（一一四パーセント増）、合板は七万七千五百五十六円（五一パーセント増）であった。だが国の価格系列は、その思わぬ利益が国内の鎖をいかに不均等にさかのぼったかも示している。製材所の製品である乾燥したスギ正角は二〇二〇年から二〇二二年にかけてほぼ倍になったが、森の持ち主の製品であるスギ丸太の上昇は四十パーセントに届かなかった。挽いたものがすべて売れた製材所が利益の大半をとり、伐ってから何か月も後に、いくつもの仲介を経て丸太代を受け取る持ち主には、ずっと少なくしか届かなかった。二〇二四年には両方とも下がったが、ショック前の水準には戻っていない。",
            zh:"2021 年的木材危機通常被說成進口的故事，而進口數字確實驚人：2021 年 12 月，進口製材每立方公尺 80,149 日圓，比一年前上漲 106%；進口集成材 107,247 日圓（漲 114%）；合板 77,556 日圓（漲 51%）。但全國價格序列也顯示，這筆意外之財在國內產業鏈上的回溯分配極不平均。製材所的產品——人工乾燥柳杉正角材——在 2020 至 2022 年間幾乎翻倍；林主的產品——柳杉原木——漲幅卻不到 40%。產品鋸多少賣多少的製材所拿走了大部分利益；林主則要在伐採數月後、經過層層中間商才拿到原木款，分到的少得多。到 2024 年兩者都已回落，但未回到危機前的水準。" } },
        { t:"table",
          caption:{
            en:"Domestic prices before, during and after the wood shock (national averages, yen per m³)",
            ja:"ウッドショック前・中・後の国産材価格（全国平均、円／m³）",
            zh:"木材危機前、中、後的國產材價格（全國平均，日圓／立方公尺）" },
          cols:[
            { en:"Product", ja:"品目", zh:"品項" },
            "2020",
            "2021",
            "2022",
            "2024",
            { en:"2020→2022", ja:"二〇二〇→二〇二二年", zh:"2020→2022" }
          ],
          numCols:[1, 2, 3, 4, 5],
          rows:[
            [{ en:"Sugi logs (medium)", ja:"スギ中丸太", zh:"柳杉中徑原木" }, "12,700", "16,100", "17,600", "15,900", "+39%"],
            [{ en:"Hinoki logs (medium)", ja:"ヒノキ中丸太", zh:"扁柏中徑原木" }, "17,200", "25,900", "25,100", "22,300", "+46%"],
            [
              { en:"Sugi squares, kiln-dried", ja:"スギ正角（乾燥材）", zh:"柳杉正角材（乾燥）" },
              "66,700",
              "105,700",
              "124,800",
              "84,800",
              "+87%"
            ],
            [
              { en:"Hinoki squares, kiln-dried", ja:"ヒノキ正角（乾燥材）", zh:"扁柏正角材（乾燥）" },
              "85,500",
              "132,500",
              "149,900",
              "103,400",
              "+75%"
            ]
          ] },
        { t:"p",
          text:{
            en:"Markets have since turned quieter. At the Chūbu Regional Forest Office's supply-coordination committee in August 2026, members reported hinoki logs weak at under ¥20,000 per cubic metre, sugi edging up month by month since April, and larch relatively firm — a reminder that the hinoki country of Tōnō and Ura-Kiso is now the most exposed part of Gifu's timber economy to a soft market.",
            ja:"市況はその後落ち着いている。二〇二六年八月の中部森林管理局の国有林材供給調整検討委員会では、ヒノキの丸太は弱含みで一立方メートル二万円を切り、スギは四月から月ごとに少しずつ上がり、カラマツは比較的堅調だと報告された。東濃と裏木曽のヒノキの里が、いまや弱い市況に最もさらされる岐阜の木材経済の一角であることを思い出させる。",
            zh:"此後市況趨於平靜。在 2026 年 8 月林野廳中部森林管理局的國有林材供給調整檢討委員會上，委員報告扁柏原木走弱，每立方公尺跌破 20,000 日圓；柳杉自 4 月起逐月小漲；落葉松相對堅挺——這提醒我們，東濃與裏木曾的扁柏之鄉，如今是岐阜木材經濟中最容易受疲軟市況衝擊的一環。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Agriculture, Forestry and Fisheries, timber price statistics (via Shinrin Ringyō Gakushūkan compilation); Forestry Agency, Annual Report on Forest and Forestry FY2021, special feature (import prices); Chūbu Regional Forest Office, minutes of the supply-coordination committee, 31 August 2026. Percentages calculated for this book.",
            ja:"出典：農林水産省「木材価格統計」（森林・林業学習館の集計による）、林野庁「令和三年度 森林・林業白書」特集（輸入価格）、中部森林管理局 国有林材供給調整検討委員会（二〇二六年八月三十一日）。百分率は本書で計算。",
            zh:"資料來源：農林水產省〈木材價格統計〉（經森林・林業學習館彙整）；林野廳《2021 年度森林・林業白皮書》特輯（進口價格）；中部森林管理局國有林材供給調整檢討委員會（2026 年 8 月 31 日）。百分比由本書計算。" } }
      ] },
    { t:"related",
      items:[
        { href:"logging.html", why:{ en:"Where the logs come from.", ja:"丸太はどこから来るか。", zh:"原木從何而來。" } },
        { href:"sawmill.html", why:{ en:"Where they go next.", ja:"次にどこへ行くか。", zh:"接下來去向何處。" } },
        { href:"broadleaf.html",
          why:{ en:"The broadleaf trees behind the meiboku trade.", ja:"銘木の取引の背後にある広葉樹。", zh:"銘木交易背後的闊葉樹。" } },
        { href:"trade.html", why:{ en:"Imports, prices and the wood shock.", ja:"輸入、価格、ウッドショック。", zh:"進口、價格與木材危機。" } }
      ] }
  ] };

/* ---- ------------------------------------------- sawmill */
GIFU.pages["sawmill"] = { kicker:{ en:"Timber · 05", ja:"木材 · 05", zh:"木材 · 05" },
  title:{ en:"Sawmills", ja:"製材所", zh:"製材所" },
  jp:"木取り・帯鋸・プレカット",
  lede:{
    en:"Gifu has more sawmills than any other prefecture in Japan — 169 in fiscal 2021. Most are small family businesses, many in the hinoki valleys of Tōnō, sawing posts and beams for local builders, and their number is falling year by year. This page describes what happens to a log in a sawmill, how a sawyer decides how to cut it, why Japanese mills are organised as they are, and how the computer-controlled precut factory has transformed the relationship between the mill and the carpenter.",
    ja:"岐阜は日本のどの県よりも多くの製材所をもつ——二〇二一年度で百六十九。多くは小さな家業で、その多くは東濃のヒノキの谷にあり、地元の工務店のために柱や梁を挽いている。その数は年ごとに減っている。この頁は、製材所で丸太に何が起きるか、製材工がどう挽くかを決めるか、日本の製材所がなぜいまのように組み立てられているか、そしてコンピュータ制御のプレカット工場が、製材所と大工の関係をいかに変えたかを述べる。",
    zh:"岐阜的製材所數量居日本各縣之冠——2021 年度共 169 家。多數是小型家族企業，許多位於東濃的扁柏山谷，為在地營造商鋸製柱與樑，而且數量逐年減少。本頁說明原木在製材所經歷了什麼、鋸木師傅如何決定下鋸方式、日本製材所為何如此組織，以及電腦控制的預切工廠如何徹底改變製材所與木匠的關係。" },
  body:[
    { t:"section",
      id:"gifu",
      title:{ en:"The most sawmills in Japan", ja:"日本一多い製材所", zh:"日本最多的製材所" },
      jp:"製材工場数",
      body:[
        { t:"p",
          text:{
            en:"Japan once had tens of thousands of sawmills — one in almost every valley. Since the 1960s their number has fallen to around four thousand, while production has concentrated in a small number of very large mills that process hundreds of thousands of cubic metres a year, mostly of sugi. Gifu has followed a different path: it kept a dense network of small and medium mills, rooted in the hinoki trade and in the custom of builders ordering timber from a mill they know. It lost fifty mills between 2016 and 2021 but, with 169, still has the most of any prefecture. Their combined shipments are modest — about 148,000 cubic metres in fiscal 2021 — and about 55 per cent of it is kiln-dried.",
            ja:"日本にはかつて何万もの製材所があった——ほとんど谷ごとに一つ。一九六〇年代からその数はおよそ四千まで減り、生産は年に何十万立方メートル、多くはスギを挽く、ごく少数のとても大きな工場に集まった。岐阜は違う道をたどった。ヒノキの取引と、なじみの製材所に材を頼む工務店の習わしに根ざした、小さく中くらいの製材所の密な網を守ってきた。二〇一六年から二〇二一年のあいだに五十を失ったが、百六十九はなお全国の県で最も多い。出荷の合計は控えめで、二〇二一年度におよそ十四万八千立方メートル、そのおよそ五十五パーセントが人工乾燥材である。",
            zh:"日本曾有數以萬計的製材所——幾乎每個山谷都有一家。自 1960 年代起數量已降至約四千家，生產集中到少數每年處理數十萬立方公尺（多為柳杉）的超大型工廠。岐阜走了不同的路：它保留了一張由中小型製材所構成的綿密網絡，根植於扁柏交易，以及營造商向熟識製材所訂料的習慣。2016 至 2021 年間岐阜少了五十家製材所，但以 169 家仍居全國各縣之冠。其總出貨量不大——2021 年度約 14.8 萬立方公尺——其中約 55% 為窯乾材。" } },
        { t:"figure",
          caption:{
            en:"Sawmills in Gifu, fiscal 2016 and 2021 — still the highest number of any prefecture despite the decline. Source: Gifu Prefecture.",
            ja:"岐阜の製材工場数（二〇一六年度と二〇二一年度）。減ってもなお全国の県で最多。出典：岐阜県。",
            zh:"岐阜製材所數量（2016 與 2021 年度）——雖然減少，仍居全國各縣之冠。資料來源：岐阜縣。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Number of sawmills", ja:"製材工場の数", zh:"製材所數量" }, unit:{ en:"mills", ja:"工場", zh:"家" }, tick:50, h:160,
            items:[ { x:"FY2016", v:219, f:"#E6E4E0" }, { x:"FY2021", v:169, f:"#EDE5D2" } ] }); } }
      ] },
    { t:"section",
      id:"kidori",
      title:{ en:"Deciding how to cut", ja:"木取り", zh:"決定如何下鋸" },
      jp:"きどり",
      body:[
        { t:"p",
          text:{
            en:"The most important decision in a sawmill is made before the saw starts: <em>kidori</em>, the plan for cutting a log. The sawyer reads the end grain, the taper, the bends, the knots on the surface and the position of the pith, and decides which products the log can yield — a boxed-heart post, heart-free boards, a beam, flooring strips — and in what order to take them. A good sawyer can double the value of a log compared with a careless one, not by getting more volume but by putting the clear wood where it will be seen and the knots where they will be hidden.",
            ja:"製材所で最も大事な決断は、鋸が動く前になされる。木取り、丸太を挽く計画である。製材工は木口、梢殺、曲がり、表面の節、髄の位置を読み、その丸太からどんな製品——心持ちの柱、心去りの板、梁、床板——を、どの順で取るかを決める。腕の良い製材工は、いい加減な者にくらべて丸太の価値を倍にできる。量を多く取るからではなく、節のない材を見えるところへ、節を隠れるところへ回すからである。",
            zh:"製材所最重要的決定在鋸子啟動之前就已做出：「木取」，也就是原木的下鋸計畫。鋸木師傅判讀端面、尖削度、彎曲、表面節疤與髓心位置，決定這根原木能產出哪些產品——含髓心柱材、去髓心板材、樑、地板條——以及以什麼順序取材。好的鋸木師傅能讓原木價值比馬虎者高出一倍，不是因為取得更多材積，而是把無節木材放在看得見的地方，把節疤藏在看不見之處。" } },
        { t:"figure",
          caption:{
            en:"Two ways of cutting a hinoki log, schematic. Left: a small log yields one boxed-heart post (shinmochi) and side boards. Right: a large log yields heart-free posts and quartersawn boards, leaving the pith in a low-value centre piece.",
            ja:"ヒノキの丸太の二つの木取り（模式図）。左：小径の丸太から心持ちの柱一本と側板。右：大径の丸太から心去りの柱と柾目の板を取り、髄は価値の低い中心の材に残す。",
            zh:"扁柏原木的兩種下鋸方式（示意）。左：小徑原木取一根含髓心柱材（心持）與側板。右：大徑原木取去髓心柱材與徑切板，髓心留在低價值的中心料中。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 300" role="img">';
            s += F.text(20, 28, lang==="en"?"KIDORI — CUTTING PLANS":(lang==="ja"?"木取り":"木取——下鋸計畫"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            function log(cx, cy, r){ var t = '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#EADCC1" stroke="#7C6B52"/>'; for (var k=12;k<r;k+=12) t += '<circle cx="'+cx+'" cy="'+cy+'" r="'+k+'" fill="none" stroke="#D6C7A6" stroke-width="0.8"/>'; return t + '<circle cx="'+cx+'" cy="'+cy+'" r="2.5" fill="#7C6B52"/>'; }
            // left small log r=80 at (190,160)
            s += log(190, 160, 80);
            s += '<rect x="138" y="108" width="104" height="104" fill="#E0E6DB" fill-opacity="0.8" stroke="#201E1B"/>';
            s += '<rect x="138" y="88" width="104" height="16" fill="#E0E7E9" fill-opacity="0.85" stroke="#201E1B"/>';
            s += '<rect x="138" y="216" width="104" height="16" fill="#E0E7E9" fill-opacity="0.85" stroke="#201E1B"/>';
            s += F.text(190, 272, lang==="en"?"small log: one boxed-heart post":(lang==="ja"?"小径材：心持ちの柱一本":"小徑材：一根含髓心柱"), { size:10.5, fill:"#201E1B", anchor:"middle" });
            // right big log r=120 at (530,160)
            s += log(530, 160, 120);
            s += '<rect x="440" y="70" width="70" height="70" fill="#E0E6DB" fill-opacity="0.8" stroke="#201E1B"/>';
            s += '<rect x="550" y="70" width="70" height="70" fill="#E0E6DB" fill-opacity="0.8" stroke="#201E1B"/>';
            s += '<rect x="440" y="180" width="70" height="70" fill="#E0E6DB" fill-opacity="0.8" stroke="#201E1B"/>';
            s += '<rect x="550" y="180" width="70" height="70" fill="#E0E6DB" fill-opacity="0.8" stroke="#201E1B"/>';
            s += '<rect x="515" y="60" width="12" height="80" fill="#E0E7E9" fill-opacity="0.85" stroke="#201E1B"/>';
            s += '<rect x="533" y="180" width="12" height="80" fill="#E0E7E9" fill-opacity="0.85" stroke="#201E1B"/>';
            s += '<rect x="512" y="146" width="36" height="28" fill="#E6E4E0" fill-opacity="0.85" stroke="#201E1B"/>';
            s += F.text(530, 296, lang==="en"?"large log: four heart-free posts, quartersawn boards, pith piece":(lang==="ja"?"大径材：心去りの柱四本、柾目板、髄の材":"大徑材：四根去髓心柱、徑切板、髓心料"), { size:10.5, fill:"#201E1B", anchor:"middle" });
            s += '<rect x="640" y="40" width="12" height="12" fill="#E0E6DB" stroke="#201E1B"/>' + F.text(658, 50, lang==="en"?"posts":(lang==="ja"?"柱":"柱材"), { size:10, fill:"#55504A" });
            s += '<rect x="640" y="58" width="12" height="12" fill="#E0E7E9" stroke="#201E1B"/>' + F.text(658, 68, lang==="en"?"boards":(lang==="ja"?"板":"板材"), { size:10, fill:"#55504A" });
            return s + '</svg>';
          } },
        { t:"defs",
          items:[
            { term:{ en:"Shinmochi — boxed heart", ja:"心持ち材", zh:"心持材（含髓心）" },
              jp:"しんもち",
              def:{
                en:"A post with the pith at its centre, the standard product from small plantation logs. Strong but prone to checking, hence the backsplit.",
                ja:"中心に髄をもつ柱で、小径の人工林の丸太からの標準の製品。強いが割れやすく、そのため背割りを入れる。",
                zh:"髓心位於中央的柱材，是小徑人工林原木的標準產品。強度高但易開裂，因此需做背割。" } },
            { term:{ en:"Shinsari — heart-free", ja:"心去り材", zh:"心去材（去髓心）" },
              jp:"しんさり",
              def:{
                en:"Timber cut clear of the pith from large logs; more stable and less prone to checking, and the prestige choice for exposed posts in fine houses and temples.",
                ja:"大径の丸太から髄を避けて取った材。安定して割れにくく、上等な住宅や寺の見える柱として格の高い選択である。",
                zh:"從大徑原木避開髓心鋸取的木材；較穩定、不易開裂，是高級住宅與寺院外露柱材的尊榮之選。" } },
            { term:{ en:"Yield", ja:"歩留まり", zh:"出材率" },
              jp:"ぶどまり",
              def:{
                en:"Sawn products typically account for about half to two-thirds of the log volume; the rest becomes bark, slabs, chips and sawdust, which in a modern mill are all sold or burned for heat.",
                ja:"製品はふつう丸太の材積の半分から三分の二ほどで、残りは樹皮、背板、チップ、鋸屑になる。いまの工場では、それらはすべて売られるか熱源として燃やされる。",
                zh:"成品通常占原木材積的一半到三分之二；其餘成為樹皮、邊皮、木片與鋸屑，在現代製材所中全部出售或燃燒供熱。" } }
          ] }
      ] },
    { t:"section",
      id:"machines",
      title:{ en:"Saws and the saw doctor", ja:"鋸と目立て", zh:"鋸與銼鋸師" },
      jp:"帯鋸・送材車",
      body:[
        { t:"p",
          text:{
            en:"The heart of a traditional Japanese sawmill is a large band saw with a log carriage: the log is clamped on a carriage that runs on rails past a thin, continuous steel band running over two wheels a metre or more across. After each pass the sawyer sets the log over by the thickness of the next board and sends it back through, turning it as the cutting plan requires. It is a flexible machine that lets a skilled operator treat every log differently — ideal for the varied, high-value hinoki of Tōnō. Large modern mills instead feed small logs straight through chipper-canters and multiple saws that turn each log into squares and boards in one pass, with little human judgement and great speed.",
            ja:"伝統的な日本の製材所の心臓は、送材車つきの大きな帯鋸である。丸太は、レールの上を走る台車に留められ、直径一メートル以上の二つの車輪にかけて回る薄い鋼の帯の横を通る。一挽きごとに製材工は次の板の厚さだけ丸太を送り、木取りに応じて回しながら、ふたたび通す。腕の良い操作者が丸太ごとに違う扱いをできる柔軟な機械で、東濃のさまざまで価値の高いヒノキにうってつけである。いまの大きな工場は、かわりに小径の丸太をチッパーキャンターと何枚もの鋸にまっすぐ送りこみ、一度で正角と板にする。人の判断はほとんどなく、速さは大きい。",
            zh:"傳統日本製材所的核心是一台附送材車的大型帶鋸：原木固定在沿軌道行進的台車上，經過一條繞在兩個直徑一公尺以上輪子上運轉的薄鋼帶鋸。每鋸一刀，鋸木師傅便把原木橫移下一片板的厚度，再送回鋸切，並依下鋸計畫翻轉原木。這是一種靈活的機器，讓熟練的操作者能對每根原木區別處理——非常適合東濃多樣而高價的扁柏。大型現代工廠則讓小徑原木直接通過削片開方機與多片鋸，一次就把原木加工成正角材與板材，幾乎不需人為判斷，速度極快。" } },
        { t:"defs",
          items:[
            { term:{ en:"Saw doctor", ja:"目立て職人", zh:"銼鋸師" },
              jp:"めたて",
              def:{
                en:"Every mill depends on the person who sharpens, sets and tensions its saw blades. A band saw is ground several times a day; its teeth are swaged and shaped, and the band is hammered and rolled so that it runs taut and straight at speed. It is a craft learned over years, and one of the skills Japanese mills worry most about losing.",
                ja:"どの製材所も、鋸の刃を研ぎ、あさりを出し、張りを整える人に頼っている。帯鋸は一日に何度も研がれ、歯はアサリを出して形を整えられ、帯は高速でぴんと張ってまっすぐ走るよう、腰入れ（ハンマーやローラーで張りを入れる）される。何年もかけて身につける技で、日本の製材所が失うことを最も恐れる技の一つである。",
                zh:"每家製材所都仰賴負責研磨、整齒與調整鋸片張力的師傅。帶鋸每天要研磨數次；鋸齒需撥料整形，鋸帶還要經過敲打與滾壓施加張力，使其在高速下繃緊直行。這是需要多年養成的技藝，也是日本製材所最擔心失傳的技能之一。" } },
            { term:{ en:"Long-length sawing", ja:"長尺材", zh:"長尺材" },
              jp:"ちょうじゃく",
              def:{
                en:"Most Japanese sawmills handle logs of 3–4 metres, the module of the standard house. For large timber buildings and temples, a few Gifu mills can saw much longer pieces: the prefecture lists mills able to handle 7, 8, 12 and 13 metres, and a drying plant that can take 12-metre hinoki.",
                ja:"日本の製材所の多くは、標準の住宅の寸法である三〜四メートルの丸太を扱う。大きな木造建築や寺のために、岐阜のいくつかの製材所はずっと長い材を挽ける。県は七、八、十二、十三メートルを扱える工場と、十二メートルのヒノキを入れられる乾燥施設を挙げている。",
                zh:"日本多數製材所處理的是 3–4 公尺的原木，也就是標準住宅的模數。為了大型木造建築與寺院，岐阜有幾家製材所能鋸製長得多的材料：縣府列出可處理 7、8、12 與 13 公尺的工廠，以及可容納 12 公尺扁柏的乾燥設施。" } },
            { term:{ en:"Residues", ja:"端材と副産物", zh:"殘材與副產品" },
              jp:"おが粉・チップ",
              def:{
                en:"Bark, sawdust and offcuts once went to bath-house boilers and livestock bedding. Today they fuel mill kilns, are pressed into pellets, sold as chips to paper and board mills, or burned in the prefecture's biomass power stations.",
                ja:"樹皮、おが粉、端材は、かつては銭湯のボイラーや家畜の敷料になった。いまは製材所の乾燥機の燃料となり、ペレットに固められ、チップとして製紙やボードの工場に売られ、あるいは県のバイオマス発電所で燃やされる。",
                zh:"樹皮、鋸屑與邊角料過去供應澡堂鍋爐與牲畜墊料。如今則作為製材所乾燥窯的燃料、壓製成木質顆粒、以木片出售給造紙廠與板材廠，或在縣內生質能電廠燃燒。" } }
          ] }
      ] },
    { t:"section",
      id:"precut",
      title:{ en:"The precut revolution", ja:"プレカットの革命", zh:"預切革命" },
      jp:"プレカット",
      body:[
        { t:"p",
          text:{
            en:"Until the 1980s a Japanese carpenter bought sawn posts and beams from a local mill and cut every joint by hand in his own workshop, marking each piece with ink and a bamboo pen according to a plan drawn on a board. Then came <em>precut</em>: factories where computer-controlled machines cut the joinery of a whole house frame from a digital plan in a few hours. By the 2010s more than nine-tenths of Japan's timber-frame houses were built this way. Precut made houses cheaper and faster to build and required kiln-dried, dimensionally accurate timber, which favoured large mills and laminated beams over the small mill's green posts.",
            ja:"一九八〇年代まで、日本の大工は地元の製材所から挽いた柱や梁を買い、板に描いた図面（板図）にしたがって、墨壷と墨さしで一本ずつ印をつけ、自分の作業場ですべての仕口を手で刻んだ。そこへプレカットが来た。コンピュータ制御の機械が、デジタルの図面から家一軒分の軸組の仕口を数時間で刻む工場である。二〇一〇年代には、日本の木造軸組の住宅の九割以上がこうして建てられるようになった。プレカットは家を安く速く建てられるようにし、人工乾燥された寸法の正確な材を求めたので、小さな製材所の生材の柱より、大きな工場と集成材の梁に有利に働いた。",
            zh:"直到 1980 年代，日本木匠都是向在地製材所購買鋸好的柱樑，在自己的工作場依畫在木板上的圖（板圖），用墨斗與竹筆逐根劃線，再手工鑿出每個接合。接著「預切」出現了：在工廠中，電腦控制的機器依數位圖面，幾小時就能切好整棟房屋骨架的所有接合。到了 2010 年代，日本九成以上的木造軸組住宅都以此方式興建。預切使房屋更便宜、更快完工，且需要窯乾、尺寸精準的木材，因而有利於大型工廠與集成樑，而不利於小製材所的生材柱。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Hand-cut (tekizami)", ja:"手刻み", zh:"手刻" },
              jp:"てきざみ",
              body:[
                { t:"ul",
                  items:[
                    { en:"Each piece read and placed by the carpenter", ja:"大工が一本ずつ読んで配する", zh:"木匠逐根判讀並安排位置" },
                    { en:"Complex traditional joints possible", ja:"複雑な伝統の仕口ができる", zh:"可做複雜的傳統接合" },
                    { en:"Green or air-dried timber acceptable", ja:"生材や天然乾燥材でもよい", zh:"生材或自然乾燥材皆可" },
                    { en:"Weeks of workshop time", ja:"作業場で何週間もかかる", zh:"需在工作場耗時數週" }
                  ] }
              ] },
            { title:{ en:"Precut", ja:"プレカット", zh:"預切" },
              jp:"ぷれかっと",
              body:[
                { t:"ul",
                  items:[
                    { en:"Joints cut by CNC from a digital plan", ja:"デジタルの図面からNCで仕口を刻む", zh:"依數位圖面以數控機械切出接合" },
                    { en:"Standardised joints, metal connectors common", ja:"標準化された仕口。金物が多い", zh:"接合標準化，常用金屬連接件" },
                    { en:"Needs kiln-dried, accurate timber", ja:"人工乾燥の正確な材が要る", zh:"需要窯乾且尺寸精準的木材" },
                    { en:"A house frame in hours", ja:"家一軒の軸組が数時間で", zh:"數小時完成一棟房屋骨架" }
                  ] }
              ] }
          ] },
        { t:"p",
          text:{
            en:"Hand-cutting has not disappeared. Temple carpenters, builders of traditional houses and a growing number of young carpenters who want to master the craft still cut by hand, and Gifu's mills that supply them with long, heart-free, carefully dried hinoki occupy a niche the precut factories cannot fill. Several Gifu builders also combine the two, using precut for the hidden frame and hand-cut joinery for exposed members.",
            ja:"手刻みは消えていない。宮大工、伝統的な住宅の大工、そして技を身につけたいと願う若い大工がふえつつあり、彼らはいまも手で刻む。長く、心去りで、ていねいに乾かしたヒノキを彼らに届ける岐阜の製材所は、プレカット工場には埋められない隙間を占めている。岐阜の工務店のなかには両方を組み合わせ、隠れる軸組にはプレカットを、見える部材には手刻みの仕口を使うところもある。",
            zh:"手刻並未消失。宮大工、傳統住宅木匠，以及愈來愈多想精通這門技藝的年輕木匠，至今仍以手工鑿刻；為他們供應長尺、去髓心且細心乾燥之扁柏的岐阜製材所，占據了預切工廠無法填補的利基。岐阜也有幾家營造商兩者並用：隱藏的骨架用預切，外露構件則用手刻接合。" } }
      ] },
    { t:"section",
      id:"visit",
      title:{ en:"A morning in a Tōnō mill", ja:"東濃の製材所の朝", zh:"東濃製材所的早晨" },
      jp:"現場",
      body:[
        { t:"p",
          text:{
            en:"The mill stands beside a river, as mills always have, with log piles in the yard sorted by length and diameter and a shed of stickered boards drying in the air. Inside, the smell of fresh hinoki is almost overpowering. The owner — often the third or fourth generation — rolls a log onto the carriage, looks at both ends, turns it, looks again, and makes the first cut to open a face. From that face he reads the log's interior and adjusts his plan. Posts for a house frame come off first; then boards for interior walls, ceiling strips, and the small pieces that go to box makers and craftsmen. The sawdust goes to a local farmer; the offcuts to the kiln boiler. By noon the day's logs are gone, and the afternoon is spent planing, grading and loading orders.",
            ja:"製材所は、昔からそうであるように川のそばに立ち、土場には長さと径で仕分けた丸太の山、小屋には桟積みにして天然乾燥させている板がある。なかに入ると、新しいヒノキの匂いは圧倒されるほどである。主——しばしば三代目か四代目——は丸太を台車に転がし、両方の木口を見て、回し、また見て、最初の一挽きで面を開ける。その面から丸太の内側を読み、計画を直す。まず家の軸組の柱が挽かれ、ついで内壁の板、天井の竿縁、そして箱屋や職人に回る小さな材。おが粉は近くの農家へ、端材は乾燥機のボイラーへ。昼にはその日の丸太はなくなり、午後は鉋がけ、選別、注文品の積みこみに費やされる。",
            zh:"製材所一如既往地座落在河邊，堆場上的原木依長度與徑級分堆，棚子裡是夾著墊條自然乾燥的板材。走進屋內，新鮮扁柏的氣味幾乎令人招架不住。老闆——往往是第三或第四代——把原木滾上台車，看看兩端，翻轉，再看，第一刀先剖出一個面。他從這個面判讀原木內部，並調整計畫。先鋸出房屋骨架的柱材，接著是內牆板、天花板條，以及交給盒匠與工藝師的小料。鋸屑給附近的農家，邊角料送進乾燥窯鍋爐。中午前當天的原木便已鋸完，下午則用來刨光、分級與裝運訂單。" } }
      ] },
    { t:"section",
      id:"national",
      title:{ en:"A shrinking, concentrating industry", ja:"減りつつ集まる産業", zh:"萎縮且集中的產業" },
      jp:"製材工場の推移",
      body:[
        { t:"p",
          text:{
            en:"Nationally, the number of sawmills has fallen by almost two-thirds in two decades, from 9,420 in 2004 to 3,423 in 2025, losing well over a hundred in most years. Output has fallen much less, because the work has moved to large mills: in 2023 the mills with motors of 300 kW or more took 78.3 per cent of all logs sawn in Japan, and those of 1,000 kW or more 39.6 per cent. In 2025 Japan's mills consumed 14.4 million cubic metres of logs and shipped 7.75 million cubic metres of sawn timber, 52.2 per cent of it kiln-dried. Set against this, Gifu's pattern stands out. Its 169 mills of FY2021 shipped about 148,000 cubic metres between them, under 900 cubic metres each, while the national average in 2025 was about 2,300 cubic metres per mill — a sign of how many Gifu mills are small specialists working to order.",
            ja:"全国の製材工場の数は二十年でほぼ三分の二減り、二〇〇四年の九千四百二十から二〇二五年の三千四百二十三へ、たいていの年に百以上ずつ減ってきた。生産の減りはずっと小さい。仕事が大きな工場に移ったからである。二〇二三年には、出力三百キロワット以上の工場が日本で挽かれる丸太の七八・三パーセントを、千キロワット以上の工場が三九・六パーセントを消費した。二〇二五年、全国の製材工場は千四百四十万立方メートルの丸太を消費し、七百七十五万立方メートルの製材品を出荷し、その五二・二パーセントが人工乾燥材であった。これとくらべると岐阜の姿は際立つ。二〇二一年度の百六十九工場の出荷はあわせて約十四万八千立方メートル、一工場九百立方メートルに満たないが、二〇二五年の全国平均は一工場あたり約二千三百立方メートルである。注文に応じて挽く小さな専門の製材所が、岐阜にいかに多いかを示している。",
            zh:"全國製材所數量在二十年間減少近三分之二，從 2004 年的 9,420 家降到 2025 年的 3,423 家，多數年份每年減少上百家。產量的降幅則小得多，因為工作轉移到了大型工廠：2023 年，馬力 300 千瓦以上的工廠消耗了全日本製材用原木的 78.3%，1,000 千瓦以上者占 39.6%。2025 年全國製材所消耗原木 1,440 萬立方公尺，出貨製材品 775 萬立方公尺，其中 52.2% 為人工乾燥材。相形之下，岐阜的模式格外突出：2021 年度的 169 家製材所合計出貨約 14.8 萬立方公尺，每家不到 900 立方公尺；而 2025 年全國平均每家約 2,300 立方公尺——可見岐阜有多少接單鋸製的小型專業製材所。" } },
        { t:"table",
          caption:{ en:"Sawmills in Japan", ja:"日本の製材工場", zh:"日本的製材所" },
          cols:[{ en:"Year", ja:"年", zh:"年" }, { en:"Mills", ja:"工場数", zh:"工廠數" }, { en:"Note", ja:"備考", zh:"備註" }],
          numCols:[1],
          rows:[
            ["2004", "9,420", "—"],
            ["2016", "4,934", { en:"Gifu: 219 (FY2016)", ja:"岐阜：二一九（二〇一六年度）", zh:"岐阜：219（2016 年度）" }],
            [
              "2021",
              "3,948",
              {
                en:"Gifu: 169 (FY2021), the most of any prefecture",
                ja:"岐阜：一六九（二〇二一年度）、全国最多",
                zh:"岐阜：169（2021 年度），全國最多" }
            ],
            ["2024", "3,547", { en:"Sawn output 7.61 million m³", ja:"製材品出荷 七百六十一万m³", zh:"製材品出貨 761 萬立方公尺" }],
            [
              "2025",
              "3,423",
              {
                en:"Sawn output 7.75 million m³; 52.2% kiln-dried",
                ja:"製材品出荷 七百七十五万m³、人工乾燥五二・二％",
                zh:"製材品出貨 775 萬立方公尺；人工乾燥 52.2%" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Agriculture, Forestry and Fisheries, Timber Statistics (2024 and 2025 results) and statistical indicators; Forestry Agency, Annual Report on Forest and Forestry FY2024 (mill size classes, 2023); Gifu Prefecture, “State of forestry and the timber industry”. Per-mill averages calculated for this book.",
            ja:"出典：農林水産省「木材統計」（二〇二四年・二〇二五年）・統計指標、林野庁「令和六年度 森林・林業白書」（出力階層別、二〇二三年）、岐阜県「岐阜県の林業・木材産業の現状」。一工場あたりの平均は本書で計算。",
            zh:"資料來源：農林水產省〈木材統計〉（2024 與 2025 年結果）與統計指標；林野廳《2024 年度森林・林業白皮書》（依馬力分級，2023 年）；岐阜縣〈岐阜縣林業・木材產業現況〉。每廠平均由本書計算。" } }
      ] },
    { t:"section",
      id:"products",
      title:{ en:"What a Japanese mill cuts", ja:"製材所が挽くもの", zh:"日本製材所鋸製的產品" },
      jp:"正角・平角・間柱・垂木",
      body:[
        { t:"p",
          text:{
            en:"A Gifu mill working for house builders turns a log into a short list of standard products, each sized to the post-and-beam frame. How the log is opened depends on the product. For posts the sawyer saws <em>around</em> the log, taking slabs off four sides until a square cant remains, then cuts studs and boards from the slabs. For boards he saws <em>through and through</em>, parallel cuts across the whole log, which is fast and wastes little but yields mostly flat-sawn boards; quarter-sawn boards, which stay flatter (see <a href=\"anatomy.html\">Inside the Wood</a>), need the log turned between cuts and give a lower yield, so they cost more. For the great roof beams of farmhouses, mills still saw <em>taiko</em> timber: a log with only two opposite faces sawn flat, keeping its round sides like a drum, so that the beam keeps the full strength of the trunk.",
            ja:"工務店のために挽く岐阜の製材所は、丸太を、軸組に合わせた寸法の、少ない種類の標準の製品に変える。丸太の開き方は製品で決まる。柱を取るときは丸太のまわりを挽き、四方から背板を落として角の芯を残し、背板から間柱や板を取る。板を取るときは、丸太全体に平行に鋸を入れる「だら挽き」で、速く無駄も少ないが、ほとんどが板目の板になる。反りにくい柾目の板（<a href=\"anatomy.html\">木材の組織</a>参照）は、鋸を入れるたびに丸太を回さなければならず歩留まりも低いので、値が高い。農家の大きな小屋梁のためには、いまも太鼓材を挽く。向かい合う二面だけを平らに挽き、残りの二面は丸いまま太鼓のように残して、梁が幹の強さをそのまま保つようにする。",
            zh:"為營造商鋸材的岐阜製材所，會把原木變成少數幾種配合軸組構架尺寸的標準產品。原木怎麼開，取決於產品。取柱材時，鋸工「繞著」原木鋸，從四面去除邊皮直到剩下方形心材，再從邊皮取間柱與板材。取板材時則「通鋸」，對整根原木平行下鋸，速度快、浪費少，但多半得到弦切板；不易翹曲的徑切板（見<a href=\"anatomy.html\">木材的組織</a>）需要在每次下鋸之間翻轉原木，出材率也較低，因此價格較高。為了農家的大型屋架樑，製材所至今仍鋸製「太鼓材」：只把相對兩面鋸平，另兩面保留圓弧如鼓，使樑保有樹幹的全部強度。" } },
        { t:"table",
          caption:{
            en:"Standard sawn products for a timber-frame house (typical sizes)",
            ja:"木造軸組住宅の標準的な製材品（典型的な寸法）",
            zh:"木造軸組住宅的標準製材品（典型尺寸）" },
          cols:[
            { en:"Product", ja:"製品", zh:"產品" },
            { en:"Typical section", ja:"典型的な断面", zh:"典型斷面" },
            { en:"Use", ja:"用途", zh:"用途" }
          ],
          rows:[
            [
              { en:"Square post (shōkaku)", ja:"正角（柱・土台）", zh:"正角材（柱、地檻）" },
              "105 × 105, 120 × 120 mm",
              { en:"Posts and sills; 3 m and 4 m lengths", ja:"柱と土台。長さ三メートルと四メートル", zh:"柱與地檻；長 3 公尺與 4 公尺" }
            ],
            [
              { en:"Beam (hirakaku)", ja:"平角（梁・桁）", zh:"平角材（樑、桁）" },
              "105–120 × 150–360 mm",
              { en:"Floor and roof beams", ja:"床梁・小屋梁・桁", zh:"樓板樑、屋架樑與桁" }
            ],
            [
              { en:"Taiko beam", ja:"太鼓材", zh:"太鼓材" },
              { en:"Two faces sawn, two round", ja:"二面挽き、二面は丸み", zh:"兩面鋸平，兩面保留圓弧" },
              { en:"Exposed roof beams of traditional houses", ja:"伝統的な家の見せる小屋梁", zh:"傳統住宅外露的屋架樑" }
            ],
            [
              { en:"Stud (mabashira)", ja:"間柱", zh:"間柱" },
              "27–30 × 105 mm",
              { en:"Framing between posts", ja:"柱と柱のあいだの下地", zh:"柱與柱之間的骨架" }
            ],
            [{ en:"Rafter (taruki)", ja:"垂木", zh:"椽木" }, "45 × 60 mm", { en:"Roof framing", ja:"屋根の下地", zh:"屋頂骨架" }],
            [
              { en:"Nuki and furring (dōbuchi)", ja:"貫・胴縁", zh:"貫材與胴緣" },
              "15–18 × 45–105 mm",
              {
                en:"Through-ties in traditional walls; battens for wall boards",
                ja:"伝統的な壁を貫く材。壁板の下地",
                zh:"傳統牆體中的貫穿材；牆板的襯條" }
            ],
            [
              { en:"Roof boards (nojiita)", ja:"野地板", zh:"屋面板" },
              { en:"About 12 mm thick", ja:"厚さ約12mm", zh:"厚約 12 公釐" },
              { en:"Sheathing under the roof", ja:"屋根の下張り", zh:"屋頂下方的覆板" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sizes are common trade dimensions, not a standard; mills cut to order.",
            ja:"寸法は業界でよく使われるもので、規格ではない。製材所は注文に応じて挽く。",
            zh:"尺寸為業界常用規格，非正式標準；製材所依訂單鋸製。" } }
      ] },
    { t:"section",
      id:"residues",
      title:{ en:"Half a log", ja:"丸太の半分", zh:"半根原木" },
      jp:"歩留まりと残材",
      body:[
        { t:"p",
          text:{
            en:"Only about half of every log leaves a Japanese sawmill as sawn timber. In 2025 the nation's mills shipped 7.75 million cubic metres of products from 14.4 million cubic metres of logs, a ratio of about 54 per cent, and produced 1.9 million tonnes of residues — bark, slabs, edgings, offcuts, shavings and sawdust. The loss is built into the round log and the square product: a log's taper and outer slabs cannot become posts, and every cut turns a strip as wide as the saw's kerf into dust. That is one reason thin-kerf band saws dominate Japanese mills, and why a skilled sawyer with a high-value hinoki log will spend minutes deciding where the first cut goes.",
            ja:"日本の製材所を製材品として出ていくのは、丸太のおよそ半分にすぎない。二〇二五年、全国の工場は千四百四十万立方メートルの丸太から七百七十五万立方メートルの製品を出荷し、その比はおよそ五十四パーセント、そして百九十万トンの残材——樹皮、背板、耳、端材、かんな屑、おが粉——を出した。この損失は、丸い丸太と四角い製品にもともと組み込まれている。丸太の細りと外側の背板は柱にならず、鋸を入れるたびに挽き幅ぶんの帯が粉になる。日本の製材所で挽き幅の薄い帯鋸が主流である理由の一つであり、高価なヒノキの丸太を前にした腕のよい挽き手が、最初の鋸をどこに入れるか何分もかけて決める理由でもある。",
            zh:"一根原木只有約一半會以製材品的形式離開日本的製材所。2025 年全國工廠以 1,440 萬立方公尺原木出貨 775 萬立方公尺產品，比例約 54%，並產生 190 萬公噸殘材——樹皮、邊皮、邊條、邊角料、刨花與鋸屑。這種損耗源自圓形原木與方形產品之間的落差：原木的尖削度與外層邊皮成不了柱材，而每一道鋸路都會把與鋸路同寬的一條木材化為粉末。這是日本製材所以鋸路窄的帶鋸為主流的原因之一，也是技術純熟的鋸工面對高價扁柏原木時，會花上好幾分鐘決定第一刀落在哪裡的原因。" } },
        { t:"defs",
          items:[
            { term:{ en:"Chips", ja:"チップ", zh:"木片" },
              jp:"ちっぷ",
              def:{
                en:"Slabs and edgings are chipped for paper, particleboard and fuel. In 2018 chips made from mill residues amounted to about 2.1 million tonnes, some 37 per cent of Japan's wood-chip production.",
                ja:"背板や耳はチップにされ、紙、パーティクルボード、燃料になる。二〇一八年、工場残材からのチップは約二百十万トンで、日本の木材チップ生産の約三十七パーセントであった。",
                zh:"邊皮與邊條被削成木片，用於造紙、粒片板與燃料。2018 年由工廠殘材製成的木片約 210 萬公噸，約占日本木片產量的 37%。" } },
            { term:{ en:"Sawdust", ja:"おが粉", zh:"鋸屑" },
              jp:"おがこ",
              def:{
                en:"Sold as bedding for cattle and poultry and as the growing medium for cultivated mushrooms, a large market in rural Japan; fine hinoki sawdust is also distilled for its oil.",
                ja:"牛や鶏の敷料として、また栽培きのこの培地として売られる。後者は日本の農村で大きな市場である。細かいヒノキのおが粉は精油の蒸留にも使われる。",
                zh:"作為牛與家禽的墊料，以及栽培菇類的培養基出售，後者在日本鄉村是很大的市場；細緻的扁柏鋸屑也用來蒸餾精油。" } },
            { term:{ en:"Bark and offcuts", ja:"樹皮と端材", zh:"樹皮與邊角料" },
              jp:"バーク",
              def:{
                en:"Burned in the mill's own boiler to heat its kilns, sold to biomass power stations, composted, or — for hinoki offcuts — made into small crafts, bath goods and kindling.",
                ja:"自社のボイラーで燃やして乾燥機を温め、バイオマス発電所に売り、堆肥にし、あるいはヒノキの端材なら小さな工芸品や風呂用品、焚きつけになる。",
                zh:"在廠內鍋爐燃燒以供乾燥窯加熱、售予生質能電廠、製成堆肥，或——若是扁柏邊角料——做成小工藝品、沐浴用品與引火柴。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Agriculture, Forestry and Fisheries, Timber Statistics 2025; Forestry Agency, Annual Report on Forest and Forestry FY2019 (chip production, 2018). Yield ratio calculated for this book; residue uses from general practice.",
            ja:"出典：農林水産省「木材統計」（二〇二五年）、林野庁「令和元年度 森林・林業白書」（チップ生産、二〇一八年）。比率は本書で計算。残材の用途は一般的な慣行による。",
            zh:"資料來源：農林水產省〈木材統計〉（2025 年）；林野廳《2019 年度森林・林業白皮書》（木片生產，2018 年）。比率由本書計算；殘材用途依一般實務。" } }
      ] },
    { t:"related",
      items:[
        { href:"markets.html", why:{ en:"Where mills buy their logs.", ja:"製材所はどこで丸太を買うか。", zh:"製材所在哪裡採購原木。" } },
        { href:"drying.html", why:{ en:"What happens after sawing.", ja:"挽いたあとに何が起きるか。", zh:"鋸切後的下一步。" } },
        { href:"grading.html", why:{ en:"How sawn timber is graded.", ja:"製材はどう格付けされるか。", zh:"製材如何分級。" } },
        { href:"joinery.html",
          why:{ en:"The joints the precut machines now make.", ja:"いまプレカットの機械が刻む仕口。", zh:"如今由預切機械加工的接合。" } }
      ] }
  ] };

/* ---- -------------------------------------------- drying */
GIFU.pages["drying"] = { kicker:{ en:"Timber · 06", ja:"木材 · 06", zh:"木材 · 06" },
  title:{ en:"Drying Timber", ja:"木材の乾燥", zh:"木材乾燥" },
  jp:"天然乾燥・人工乾燥・高温セット",
  lede:{
    en:"A freshly sawn hinoki post is heavy with water, and if it is built into a house in that state it will shrink, twist, open cracks and loosen its joints as it dries in place. Drying — bringing timber down to the moisture content it will live at — is therefore one of the most important and least visible steps between forest and building. Gifu's mills use every method, from stacks of boards seasoning in the open air for a year or more to computer-controlled steam kilns. This page explains the methods, their trade-offs and the defects they are designed to avoid.",
    ja:"挽いたばかりのヒノキの柱は水で重く、そのまま家に組みこまれれば、その場で乾くにつれて縮み、ねじれ、割れを開き、仕口をゆるめる。だから乾燥——材が住むことになる含水率まで下げること——は、森と建物のあいだで最も大事で、最も目に見えない工程の一つである。岐阜の製材所は、屋外で一年以上寝かせる板の山から、コンピュータ制御の蒸気の乾燥機まで、あらゆる方法を使う。この頁は、その方法、得失、そして避けようとしている欠点を説明する。",
    zh:"一根剛鋸好的扁柏柱材飽含水分，若就這樣建進房子，它會在原地乾燥時收縮、扭轉、開裂並使接合鬆動。因此乾燥——把木材含水率降到它日後所處環境的水準——是森林與建築之間最重要、也最不為人見的步驟之一。岐阜的製材所各種方法都用，從在戶外堆放一年以上自然乾燥的板材堆，到電腦控制的蒸汽乾燥窯。本頁說明這些方法、各自的利弊，以及它們所要避免的缺陷。" },
  body:[
    { t:"section",
      id:"why",
      title:{ en:"Why dry, and to what", ja:"なぜ、どこまで乾かすか", zh:"為何乾燥、乾到多少" },
      jp:"仕上がり含水率",
      body:[
        { t:"p",
          text:{
            en:"Timber must be dried to roughly the moisture content it will reach in service, so that most of its shrinkage happens before it is fixed in place. For a structural post in a Japanese house that means about 15–20 per cent; for flooring, joinery and furniture used in heated rooms, 8–12 per cent; for a guitar top, lower still. Japan's agricultural standard (JAS) for sawn structural timber marks dried products with their maximum moisture content — SD15 or SD20 for planed (finished) timber, D15, D20 or D25 for unplaned timber — and green timber carries no moisture mark at all.",
            ja:"材は、使われる場所で行き着く含水率のあたりまで乾かさねばならない。そうすれば縮みの大半は、据えつけられる前にすませられる。日本の家の構造の柱ならおよそ十五〜二十パーセント、暖房のある部屋で使う床材、建具、家具なら八〜十二パーセント、ギターの表板ならさらに低い。日本農林規格（JAS）は、構造用製材の乾燥材にその最大の含水率を表示させる——仕上げ材ならSD15やSD20、未仕上げ材ならD15、D20、D25——そして生材には含水率の表示がない。",
            zh:"木材必須乾燥到大致相當於使用環境的含水率，讓大部分收縮在固定就位之前完成。對日本住宅的結構柱而言約為 15–20%；對用於有暖氣房間的地板、建具與家具而言為 8–12%；吉他面板則更低。日本農林規格（JAS）對結構用製材的乾燥材標示其最大含水率——已刨光的完成材標 SD15 或 SD20，未刨光材標 D15、D20 或 D25——生材則沒有含水率標示。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Structural posts", ja:"構造の柱", zh:"結構柱" },
              v:"15–20%",
              d:{ en:"JAS SD15 / SD20", ja:"JAS SD15・SD20", zh:"JAS SD15／SD20" } },
            { k:{ en:"Flooring, joinery", ja:"床材・建具", zh:"地板、建具" },
              v:"10–12%",
              d:{ en:"Heated interiors", ja:"暖房のある室内", zh:"有暖氣的室內" } },
            { k:{ en:"Furniture", ja:"家具", zh:"家具" },
              v:"8–10%",
              d:{ en:"Hida makers dry to about this level", ja:"飛騨のメーカーはこのあたりまで乾かす", zh:"飛驒廠商約乾燥至此" } },
            { k:{ en:"Instrument tops", ja:"楽器の表板", zh:"樂器面板" },
              v:"6–8%",
              d:{ en:"Built in controlled humidity", ja:"湿度を管理した部屋でつくる", zh:"在控濕環境中製作" } }
          ] }
      ] },
    { t:"section",
      id:"methods",
      title:{ en:"The methods", ja:"方法", zh:"方法" },
      jp:"乾燥法",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Leaf seasoning", ja:"葉枯らし", zh:"葉枯乾燥" },
              jp:"はがらし",
              def:{
                en:"Felled trees are left on the slope with their crowns for weeks or months; transpiration through the leaves draws water from the trunk. It lightens logs for extraction, improves heartwood colour and is favoured by builders of traditional houses.",
                ja:"伐った木を梢をつけたまま斜面に数週間から数か月置き、葉からの蒸散で幹の水を抜く。丸太を軽くして搬出を楽にし、心材の色を良くし、伝統的な家の大工に好まれる。",
                zh:"伐倒的樹連同樹冠在坡地放置數週至數月，藉葉片蒸散把樹幹水分抽出。可減輕原木重量以利集運、改善心材色澤，受到傳統住宅木匠青睞。" } },
            { term:{ en:"Air drying", ja:"天然乾燥", zh:"自然乾燥" },
              jp:"てんねんかんそう",
              def:{
                en:"Sawn timber is stacked in the open or under a roof with thin sticks (<em>sanzumi</em>) between the layers so that air circulates, and weighted to keep it flat. It is cheap and gentle but slow — months for a conifer post, a year or more per inch of thickness for broadleaf boards — and can only reach the moisture content of the outside air, about 15 per cent in Japan.",
                ja:"挽いた材を屋外や屋根の下に、層のあいだに細い桟を入れて（桟積み）空気が通るように積み、重しをのせて平らに保つ。安くおだやかだが遅い——針葉樹の柱で数か月、広葉樹の板は厚さ一寸につき一年以上——し、外気の含水率、日本ではおよそ十五パーセントまでしか下がらない。",
                zh:"將鋸好的木材堆放在戶外或屋簷下，層間夾入細木條（桟積）以利空氣流通，並加壓重物保持平整。成本低且溫和，但緩慢——針葉樹柱材需數月，闊葉樹板材每一寸厚度需一年以上——且只能降到外氣的平衡含水率，在日本約 15%。" } },
            { term:{ en:"Conventional kiln", ja:"中温乾燥", zh:"中溫乾燥" },
              jp:"ちゅうおん",
              def:{
                en:"A closed chamber in which fans drive heated, humidified air through the stacks, following a schedule that lowers humidity and raises temperature (typically 50–80 °C) step by step as the wood dries. Days to weeks.",
                ja:"閉じた室で、ファンが温めて湿らせた空気を材の山に通し、材が乾くにつれて湿度を下げ温度（ふつう五十〜八十度）を上げる手順にしたがう。数日から数週間。",
                zh:"封閉乾燥室中，風扇把加熱加濕的空氣吹過木材堆，並依排程隨木材乾燥逐步降低濕度、提高溫度（通常 50–80°C）。需數天到數週。" } },
            { term:{ en:"High-temperature set", ja:"高温セット法", zh:"高溫定型法" },
              jp:"こうおんセット",
              def:{
                en:"A Japanese method developed in the 2000s for sugi posts with the pith inside. A short treatment at about 120 °C in humid conditions dries and “sets” the outer shell in tension before the core shrinks, so that the surface does not crack; drying is then completed at lower temperature. It made crack-free boxed-heart sugi posts possible without a backsplit, at the cost of some internal checking and darker colour if overdone.",
                ja:"髄を含むスギの柱のために二〇〇〇年代に日本で開発された方法。湿った条件でおよそ百二十度の短い処理をすると、芯が縮む前に外殻が乾いて引張の状態で「固まり」、表面が割れない。そのあとは低い温度で乾燥を終える。背割りなしで割れのない心持ちのスギ柱を可能にしたが、やりすぎれば内部割れと色の濃さを招く。",
                zh:"2000 年代日本為含髓心柳杉柱材開發的方法。在高濕條件下以約 120°C 短時間處理，讓外殼在芯部收縮前先乾燥並在拉應力狀態下「定型」，使表面不開裂；之後再以較低溫度完成乾燥。它使不做背割的無裂紋含髓心柳杉柱成為可能，但若處理過度，會造成內部裂紋與顏色變深。" } },
            { term:{ en:"Other methods", ja:"そのほか", zh:"其他方法" },
              jp:"減圧・高周波・燻煙",
              def:{
                en:"Vacuum kilns dry at lower temperatures by lowering the boiling point; radio-frequency heating warms the core directly; smoke-drying, a Japanese craft method, heats timber in a smoky chamber fired with offcuts and is said to reduce cracking and insect attack; solar kilns are used by small makers.",
                ja:"減圧乾燥機は沸点を下げて低い温度で乾かし、高周波加熱は芯を直接温める。日本の工芸的な方法である燻煙乾燥は、端材を燃やした煙の室で材を熱し、割れや虫を減らすといわれる。小さなつくり手は太陽熱の乾燥室を使う。",
                zh:"真空乾燥窯藉降低沸點在較低溫度下乾燥；高週波加熱直接加熱芯部；燻煙乾燥是一種日本工藝式方法，在以邊角料燃燒的煙室中加熱木材，據說能減少開裂與蟲害；小型工匠則使用太陽能乾燥室。" } }
          ] },
        { t:"figure",
          caption:{
            en:"Typical drying times for a 105 mm square sugi post from green to about 20 per cent, by method. Orders of magnitude only: actual times depend on initial moisture, season and schedule.",
            ja:"一〇五ミリ角のスギ柱を生材からおよそ二十パーセントまで乾かす典型的な時間（方法別）。桁の目安にすぎず、実際は初期の含水率、季節、手順による。",
            zh:"105 公釐見方柳杉柱從生材乾燥至約 20% 的典型時間（依方法）。僅供數量級參考：實際時間取決於初始含水率、季節與排程。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"How long it takes", ja:"かかる時間", zh:"所需時間" }, labelW:230, max:360, unit:{ en:"days", ja:"日", zh:"天" },
            items:[
              { n:{ en:"Air drying", ja:"天然乾燥", zh:"自然乾燥" }, v:180, lab:{ en:"≈ 6 months or more", ja:"約六か月以上", zh:"約六個月以上" }, f:"#E0E6DB" },
              { n:{ en:"Conventional kiln", ja:"中温乾燥", zh:"中溫乾燥" }, v:21, lab:{ en:"≈ 2–4 weeks", ja:"約二〜四週間", zh:"約 2–4 週" }, f:"#EDE5D2" },
              { n:{ en:"High-temperature set + kiln", ja:"高温セット＋乾燥", zh:"高溫定型＋乾燥" }, v:8, lab:{ en:"≈ 1 week", ja:"約一週間", zh:"約一週" }, f:"#EEE1DF" },
              { n:{ en:"Leaf seasoning + air", ja:"葉枯らし＋天然", zh:"葉枯＋自然乾燥" }, v:240, lab:{ en:"≈ 8 months or more", ja:"約八か月以上", zh:"約八個月以上" }, f:"#E0E6DB" }
            ] }); } }
      ] },
    { t:"section",
      id:"stacking",
      title:{ en:"Stacking for the air", ja:"桟積み", zh:"桟積（疊材）" },
      jp:"さんづみ",
      body:[
        { t:"steps",
          items:[
            { title:{ en:"A level foundation", ja:"水平な台", zh:"水平基座" },
              text:{
                en:"Bearers are laid dead level, well above the ground, so that the bottom boards do not take on a bow or draw up moisture.",
                ja:"受け材を地面から十分に上げて水平に据え、下の板が曲がりや湿気を受けないようにする。",
                zh:"墊木離地架高並調到完全水平，避免底層木板彎曲或吸收地面濕氣。" } },
            { title:{ en:"Stickers in line", ja:"桟をそろえる", zh:"墊條對齊" },
              text:{
                en:"Thin dry sticks are placed across each layer at regular spacing, exactly above one another, so that the weight passes straight down.",
                ja:"乾いた細い桟を各層に一定の間隔で渡し、真上に重ねて、重さがまっすぐ下へ伝わるようにする。",
                zh:"每層以固定間距橫放乾燥細木條，並上下精確對齊，讓重量垂直向下傳遞。" } },
            { title:{ en:"Ends sealed", ja:"木口を塞ぐ", zh:"封住端面" },
              text:{
                en:"Water leaves the end grain ten times faster than the faces; wax or paint on the ends prevents end checks.",
                ja:"水は面の十倍の速さで木口から抜ける。木口に蝋や塗料を塗って木口割れを防ぐ。",
                zh:"水分從端面散失的速度是板面的十倍；在端面塗蠟或塗料可防止端裂。" } },
            { title:{ en:"Roof and weight", ja:"屋根と重し", zh:"屋頂與壓重" },
              text:{
                en:"A roof keeps off sun and rain; concrete blocks or weights on top keep the upper layers flat.",
                ja:"屋根で日と雨を防ぎ、上にコンクリートブロックなどの重しをのせて上の層を平らに保つ。",
                zh:"加頂棚遮陽擋雨；頂部放混凝土塊等重物，保持上層平整。" } },
            { title:{ en:"Patience", ja:"待つ", zh:"耐心" },
              text:{
                en:"Samples are weighed from time to time; the stack is ready when their weight stops falling.",
                ja:"ときどき試験片の重さを量る。重さが下がらなくなったら、その山はできあがりである。",
                zh:"不時秤量試片；當重量不再下降，這堆木材就乾好了。" } }
          ] }
      ] },
    { t:"section",
      id:"defects",
      title:{ en:"What can go wrong", ja:"何がまずくなるか", zh:"可能出現的缺陷" },
      jp:"乾燥の欠点",
      body:[
        { t:"table",
          caption:{ en:"Drying defects and their causes", ja:"乾燥による欠点とその原因", zh:"乾燥缺陷及其原因" },
          cols:[
            { en:"Defect", ja:"欠点", zh:"缺陷" },
            { en:"Japanese", ja:"和名", zh:"日文" },
            { en:"Cause", ja:"原因", zh:"原因" },
            { en:"Prevention", ja:"防ぎ方", zh:"預防" }
          ],
          jpCols:[1],
          rows:[
            [
              { en:"Surface checks", ja:"表面割れ", zh:"表面裂" },
              "表面割れ",
              { en:"Surface dries and shrinks while the core is still wet", ja:"芯が湿ったまま表面が乾いて縮む", zh:"芯部仍濕時表面先乾燥收縮" },
              {
                en:"Gentle early schedule; high-temperature set for boxed heart",
                ja:"初めの手順をおだやかに。心持ち材には高温セット",
                zh:"初期排程溫和；含髓心材用高溫定型" }
            ],
            [
              { en:"End checks", ja:"木口割れ", zh:"端裂" },
              "木口割れ",
              { en:"Rapid loss of water through the end grain", ja:"木口からの急な水の抜け", zh:"水分從端面快速散失" },
              { en:"Seal ends; shade", ja:"木口を塞ぎ、日を避ける", zh:"封端；遮蔭" }
            ],
            [
              { en:"Internal checks", ja:"内部割れ", zh:"內裂" },
              "内部割れ",
              {
                en:"Core shrinks against a set shell, often after too-hot drying",
                ja:"固まった外殻に対して芯が縮む。高温すぎる乾燥のあとに多い",
                zh:"芯部在已定型的外殼內收縮，多見於溫度過高的乾燥之後" },
              { en:"Limit temperature and time", ja:"温度と時間を抑える", zh:"限制溫度與時間" }
            ],
            [
              { en:"Warp: cup, bow, twist", ja:"狂い：反り・曲がり・ねじれ", zh:"翹曲：瓦變、弓彎、扭曲" },
              "反り・曲がり・ねじれ",
              { en:"Uneven shrinkage; spiral grain; reaction wood", ja:"不均一な収縮、旋回木理、あて", zh:"收縮不均、螺旋紋理、反應材" },
              { en:"Good stacking and weighting; quartersawing", ja:"良い桟積みと重し、柾目取り", zh:"妥善疊材與壓重；徑切" }
            ],
            [
              { en:"Collapse", ja:"落ち込み", zh:"潰陷" },
              "落ち込み",
              {
                en:"Cells crushed by capillary tension in very wet wood",
                ja:"非常に湿った材で、毛管の張力が細胞をつぶす",
                zh:"含水極高的木材中，毛細張力壓潰細胞" },
              { en:"Low temperature at first", ja:"初めは低い温度で", zh:"初期低溫" }
            ],
            [
              { en:"Stain", ja:"変色", zh:"變色" },
              "変色・青変",
              {
                en:"Fungi on slow-drying sapwood; iron; chemical reactions in heat",
                ja:"乾きの遅い辺材の菌、鉄、熱による化学反応",
                zh:"乾燥緩慢的邊材長菌、鐵汙、熱致化學反應" },
              { en:"Prompt stacking; clean stickers; moderate heat", ja:"すぐ桟積み、清潔な桟、ほどよい熱", zh:"及時疊材、乾淨墊條、適中溫度" }
            ]
          ] }
      ] },
    { t:"section",
      id:"gifu",
      title:{ en:"Drying in Gifu", ja:"岐阜の乾燥", zh:"岐阜的乾燥作業" },
      jp:"乾燥施設",
      body:[
        { t:"p",
          text:{
            en:"Only about 55 per cent of the sawn timber Gifu's mills shipped in fiscal 2021 was kiln-dried — a lower share than the national figure for large mills, reflecting the many small mills that sell green or air-dried posts to local builders. Investing in kilns has been a central aim of prefectural policy, since precut factories and large builders buy only dried timber. The distribution cooperative for Tōnō hinoki products operates high-temperature steam kilns long enough to take 12-metre pieces, and several cooperatives and larger mills have added kilns fired with their own bark and offcuts.",
            ja:"二〇二一年度に岐阜の製材所が出荷した製材のうち、人工乾燥材はおよそ五十五パーセントにすぎない。大きな工場の全国の割合より低いのは、生材や天然乾燥の柱を地元の工務店に売る小さな製材所が多いからである。プレカット工場や大きな住宅会社は乾燥材しか買わないので、乾燥機への投資は県の施策の中心的な狙いとなってきた。東濃ひのきの製品の流通協同組合は、十二メートルの材が入る高温の蒸気式乾燥機を動かし、いくつかの組合や大きめの製材所は、自前の樹皮や端材を燃やす乾燥機を加えている。",
            zh:"2021 年度岐阜製材所出貨的製材中，窯乾材僅約 55%——低於全國大型工廠的比例，反映出許多小製材所向在地營造商出售生材或自然乾燥柱材。由於預切工廠與大型建商只購買乾燥材，投資乾燥窯一直是縣府政策的核心目標。東濃扁柏製品流通協同組合運轉可容納 12 公尺材料的高溫蒸汽乾燥窯，數個組合與較大型製材所也增設了以自家樹皮與邊角料為燃料的乾燥窯。" } },
        { t:"defs",
          items:[
            { term:{ en:"Geothermal drying at Okuhida", ja:"奥飛騨の地熱乾燥", zh:"奧飛驒地熱乾燥" },
              jp:"栃尾工場",
              def:{
                en:"In 2023 Hida Sangyō opened a factory at Tochio in Okuhida, a hot-spring district of Takayama, that uses geothermal heat to dry wood — replacing fuel with the energy of the volcano.",
                ja:"二〇二三年、飛騨産業は高山市の温泉地、奥飛騨の栃尾に、地熱で木を乾かす工場を開いた。燃料のかわりに火山のエネルギーを使う。",
                zh:"2023 年，飛驒產業在高山市溫泉區奧飛驒的栃尾開設工廠，利用地熱乾燥木材——以火山的能量取代燃料。" } },
            { term:{ en:"Machine-learning kiln", ja:"AI乾燥機", zh:"AI 乾燥窯" },
              jp:"ヒダクマ",
              def:{
                en:"For small lots of mixed broadleaf timber, where a single schedule rarely suits every board, Hida city's broadleaf company has worked on a kiln controlled by machine learning, aiming to cut drying from about twelve months to about three. See <a href=\"broadleaf.html\">The Broadleaf Forests</a>.",
                ja:"一つの手順がどの板にも合うことのまれな、まじりあった広葉樹の小ロットのために、飛騨市の広葉樹の会社は機械学習で制御する乾燥機に取り組み、乾燥をおよそ十二か月からおよそ三か月に縮めることをめざしてきた。<a href=\"broadleaf.html\">広葉樹の森</a>を参照。",
                zh:"對於混雜的小批量闊葉材，單一排程很少能適合每一片板材，飛驒市的闊葉樹公司因此投入以機器學習控制的乾燥窯，目標是把乾燥時間從約十二個月縮短到約三個月。見<a href=\"broadleaf.html\">闊葉樹之森</a>。" } }
          ] },
        { t:"note",
          label:{ en:"The air-dried argument", ja:"天然乾燥をめぐる議論", zh:"關於自然乾燥的爭論" },
          text:{
            en:"Many traditional builders and furniture makers in Gifu insist on air-dried or leaf-seasoned timber, arguing that high-temperature kilns drive off aromatic oils, darken the wood, cause hidden internal checks and leave it “dead” to work. Kiln engineers answer that a well-managed low-temperature schedule preserves colour and scent while guaranteeing a moisture content that air drying cannot reach. Both are partly right: the difference depends less on method than on care, and many makers now combine the two, air-drying first and finishing in a gentle kiln.",
            ja:"岐阜の伝統的な大工や家具職人の多くは、天然乾燥や葉枯らしの材にこだわる。高温の乾燥機は香りの油を飛ばし、木を黒ずませ、見えない内部割れを起こし、加工するには「死んだ」木にしてしまうという。乾燥の技術者は、よく管理された低温の手順なら色と香りを保ちつつ、天然乾燥では届かない含水率を保証できると答える。どちらも一部は正しい。違いは方法よりも手のかけ方にかかっており、多くのつくり手はいま、まず天然で乾かし、おだやかな乾燥機で仕上げるという両方の組み合わせをとっている。",
            zh:"岐阜許多傳統木匠與家具師傅堅持使用自然乾燥或葉枯乾燥的木材，認為高溫乾燥窯會趕走芳香油脂、使木材變暗、造成看不見的內裂，讓木材加工起來像「死的」。乾燥工程師則回應：管理良好的低溫排程能保住顏色與香氣，同時保證自然乾燥達不到的含水率。雙方都有部分道理：差異不在方法，而在用心程度；如今許多工匠兩者並用，先自然乾燥，再以溫和的窯乾收尾。" } }
      ] },
    { t:"section",
      id:"schedule",
      title:{ en:"Inside a kiln schedule", ja:"乾燥スケジュールの中身", zh:"乾燥排程的內容" },
      jp:"乾球・湿球",
      body:[
        { t:"p",
          text:{
            en:"A kiln operator steers by two thermometers. The <em>dry-bulb</em> temperature is that of the air; the <em>wet-bulb</em> thermometer, wrapped in a wet wick, reads lower because evaporation cools it, and the gap between the two — the wet-bulb depression — measures how thirsty the air is. A small gap means humid air and slow, gentle drying; a large gap means fast drying and a risk of cracks. A schedule is simply a timetable of both temperatures: steam first to heat the wood through, then widen the gap step by step as the moisture falls, and finally narrow it again for a few hours to even out moisture and relieve stress in the surface.",
            ja:"乾燥機の運転者は二本の温度計で舵をとる。乾球温度は空気の温度であり、湿った布で包んだ湿球温度計は蒸発で冷やされるぶん低く示す。二つの差——乾湿球温度差——が、空気がどれほど水を欲しがっているかの尺度になる。差が小さければ空気は湿り、乾燥は遅くおだやかで、差が大きければ乾燥は速く、割れの危険がある。スケジュールとは、この二つの温度の時間割にほかならない。まず蒸気で材の芯まで温め、含水率が下がるにつれて差を段階的に広げ、最後に数時間差を縮めて含水率をならし、表面の応力をやわらげる。",
            zh:"乾燥窯操作員以兩支溫度計掌舵。「乾球」溫度是空氣的溫度；以濕紗布包覆的「濕球」溫度計因蒸發冷卻而讀數較低，兩者之差——乾濕球溫差——衡量空氣有多「渴」。溫差小代表空氣潮濕、乾燥緩慢溫和；溫差大則乾燥快速，並有開裂風險。所謂排程，不過是這兩個溫度的時間表：先以蒸汽把木材熱透，再隨含水率下降逐步拉大溫差，最後縮小溫差數小時，以均化含水率並釋放表層應力。" } },
        { t:"p",
          text:{
            en:"The Gifu Prefectural Research Institute for Forests published a typical high-temperature schedule for boxed-heart sugi posts in 2021: steaming at 98 °C for 8 hours; the “set” at 120 °C dry-bulb and 90 °C wet-bulb for 24 hours; then 120 hours at 90 °C and 60 °C — about 152 hours, or six and a half days, in all. Its trials, on posts of 118 and 132 mm, also showed why the log matters as much as the kiln: posts with less heartwood (a heartwood ratio below 0.785 in the study's measure) developed far more surface checking — 584 mm of cracks per metre against 84 mm — so sorting logs before drying saves as much trouble as tuning the kiln.",
            ja:"岐阜県森林研究所は二〇二一年、心持ちのスギ柱のための典型的な高温乾燥のスケジュールを報告している。九十八度で八時間の蒸煮、乾球百二十度・湿球九十度で二十四時間の高温セット、続いて乾球九十度・湿球六十度で百二十時間、あわせて約百五十二時間、六日半ほどである。一一八ミリと一三二ミリの柱による試験は、乾燥機と同じほど丸太が大事なことも示した。心材の少ない柱（この研究の指標で心材率〇・七八五未満）は表面割れがはるかに多く、一メートルあたり五百八十四ミリ対八十四ミリであった。乾燥の前に丸太を選り分けることは、乾燥機の調整と同じほど手間を省く。",
            zh:"岐阜縣森林研究所於 2021 年發表了一套含髓心柳杉柱材的典型高溫乾燥排程：98°C 蒸煮 8 小時；乾球 120°C、濕球 90°C 的「高溫定型」24 小時；接著乾球 90°C、濕球 60°C 處理 120 小時——合計約 152 小時，約六天半。該研究以 118 與 132 公釐的柱材試驗，也說明了原木與乾燥窯同樣重要：心材較少的柱材（依該研究指標，心材率低於 0.785），表面裂紋多得多——每公尺 584 公釐對 84 公釐——可見乾燥前先分選原木，與調整乾燥窯同樣能省去麻煩。" } },
        { t:"figure",
          caption:{
            en:"A high-temperature drying schedule for boxed-heart sugi posts, as tested by the Gifu Prefectural Research Institute for Forests (Dohi, 2021). Warm-up and cooling are omitted. Source: Bulletin of the Gifu Prefectural Research Institute for Forests, No. 50.",
            ja:"心持ちスギ柱の高温乾燥スケジュール。岐阜県森林研究所の試験による（土肥、二〇二一年）。昇温と冷却は省いた。出典：岐阜県森林研究所研究報告第五〇号。",
            zh:"含髓心柳杉柱材的高溫乾燥排程，依岐阜縣森林研究所試驗（土肥，2021 年）。省略升溫與冷卻階段。資料來源：《岐阜縣森林研究所研究報告》第 50 號。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"Two thermometers, 152 hours", ja:"二本の温度計、百五十二時間", zh:"兩支溫度計，152 小時" },
            unit:{ en:"°C", ja:"℃", zh:"°C" }, x0:0, x1:152, y0:40, y1:130, tick:20, xt:[0, 8, 32, 60, 90, 120, 152],
            marks:[ { x:8, t:{ en:"High-temperature set", ja:"高温セット", zh:"高溫定型" } }, { x:32, t:{ en:"Main drying", ja:"中温乾燥", zh:"中溫乾燥" } } ],
            series:[
              { n:{ en:"Dry-bulb", ja:"乾球温度", zh:"乾球溫度" }, pts:[[0,98],[8,98],[8,120],[32,120],[32,90],[152,90]], dots:false },
              { n:{ en:"Wet-bulb", ja:"湿球温度", zh:"濕球溫度" }, pts:[[0,98],[8,98],[8,90],[32,90],[32,60],[152,60]], dash:"5 4", dots:false }
            ],
            note:{ en:"Hours from the start of steaming. During steaming the two thermometers read the same: the air is saturated.", ja:"横軸は蒸煮開始からの時間。蒸煮中は二本の温度計が同じ値を示す。空気が飽和しているからである。", zh:"橫軸為自蒸煮開始的小時數。蒸煮期間兩支溫度計讀數相同：空氣已飽和。" } }); } }
      ] },
    { t:"section",
      id:"kilntypes",
      title:{ en:"Kilns compared", ja:"乾燥機のくらべ", zh:"乾燥設備比較" },
      jp:"乾燥機の種類",
      body:[
        { t:"p",
          text:{
            en:"A Gifu prefectural guide to building large public timber buildings (2012) lists the kilns in the prefecture able to dry long members, and the list shows the full range: low-pressure steam, high-temperature steam, medium-temperature steam, dehumidification and radio-frequency units. Each suits a different job, and a mill's choice says much about what it sells.",
            ja:"大規模な木造公共施設を建てるための岐阜県の手引き（二〇一二年）は、県内の長尺材を乾かせる乾燥機を挙げており、その一覧は全種類にわたる。減圧式蒸気、高温蒸気、中温蒸気、除湿、高周波である。それぞれ向く仕事が違い、製材所がどれを選ぶかは、その製材所が何を売るかを多く語る。",
            zh:"岐阜縣一份興建大型木造公共設施的指南（2012 年）列出縣內能乾燥長尺構件的乾燥設備，涵蓋所有類型：減壓式蒸汽、高溫蒸汽、中溫蒸汽、除濕及高週波。各自適合不同的工作，製材所選擇哪一種，很能說明它賣的是什麼。" } },
        { t:"table",
          caption:{ en:"Main kiln types (typical figures)", ja:"主な乾燥機（典型的な値）", zh:"主要乾燥設備類型（典型數值）" },
          cols:[
            { en:"Type", ja:"方式", zh:"類型" },
            { en:"Air temperature", ja:"温度", zh:"溫度" },
            { en:"Strengths", ja:"長所", zh:"優點" },
            { en:"Weaknesses", ja:"短所", zh:"缺點" }
          ],
          rows:[
            [
              { en:"Medium-temperature steam", ja:"中温蒸気式", zh:"中溫蒸汽式" },
              "50–90 °C",
              {
                en:"Gentle; keeps colour and scent; suits hinoki and boards",
                ja:"おだやかで色と香りを保つ。ヒノキや板に向く",
                zh:"溫和；保留色澤與香氣；適合扁柏與板材" },
              { en:"Slow for thick sugi posts", ja:"厚いスギ柱には遅い", zh:"對厚的柳杉柱材較慢" }
            ],
            [
              { en:"High-temperature steam", ja:"高温蒸気式", zh:"高溫蒸汽式" },
              "100–120 °C",
              { en:"Fast; crack-free boxed-heart posts", ja:"速く、割れのない心持ち柱", zh:"快速；含髓心柱材無表面裂" },
              {
                en:"Internal checks, darker colour, loss of scent if overdone",
                ja:"やりすぎると内部割れ、変色、香りの減少",
                zh:"過度時內裂、變色、香氣流失" }
            ],
            [
              { en:"Dehumidification", ja:"除湿式", zh:"除濕式" },
              "30–50 °C",
              {
                en:"Low temperature, simple, electrically driven; small makers",
                ja:"低温で簡便、電気で動く。小さなつくり手向き",
                zh:"低溫、簡便、電力驅動；適合小型業者" },
              { en:"Slow; cannot reach very low moisture quickly", ja:"遅く、低い含水率まで速くは下がらない", zh:"慢；難以快速降到極低含水率" }
            ],
            [
              { en:"Vacuum (low-pressure)", ja:"減圧式", zh:"減壓式" },
              { en:"Water boils at 40–60 °C", ja:"四十〜六十度で水が沸く", zh:"水在 40–60°C 沸騰" },
              {
                en:"Fast at low temperature; thick broadleaf and long members",
                ja:"低温で速い。厚い広葉樹や長尺材",
                zh:"低溫且快；適合厚闊葉材與長尺構件" },
              { en:"Costly equipment, small batches", ja:"設備が高く、一回の量が少ない", zh:"設備昂貴、每批量少" }
            ],
            [
              { en:"Radio-frequency (+ steam or vacuum)", ja:"高周波（蒸気・減圧と併用）", zh:"高週波（併用蒸汽或減壓）" },
              { en:"Heats the core directly", ja:"芯を直接温める", zh:"直接加熱芯部" },
              { en:"Dries large sections from inside out", ja:"大断面を内側から乾かす", zh:"由內而外乾燥大斷面" },
              { en:"High electricity use", ja:"電力を多く使う", zh:"耗電量大" }
            ],
            [
              { en:"Smoke (kunen)", ja:"燻煙", zh:"燻煙" },
              { en:"Smoke from burning offcuts", ja:"端材を燃やした煙", zh:"燃燒邊角料的煙" },
              { en:"Uses mill waste; said to deter insects", ja:"製材の端材を使う。虫を防ぐといわれる", zh:"利用廢材；據說可防蟲" },
              { en:"Hard to control; smoky colour and smell", ja:"制御が難しく、煙の色と匂いが残る", zh:"難以控制；留有煙色與煙味" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, low-cost manual and case studies for large timber public buildings (2012); Gifu Prefectural Research Institute for Forests, Bulletin No. 50 (2021). Temperatures are typical ranges from general drying practice.",
            ja:"出典：岐阜県「大規模木造公共施設の建築にかかる低コストマニュアル・事例集」（二〇一二年）、岐阜県森林研究所研究報告第五〇号（二〇二一年）。温度は一般的な乾燥の慣行による典型的な範囲。",
            zh:"資料來源：岐阜縣〈大規模木造公共設施建築低成本手冊與案例集〉（2012 年）；《岐阜縣森林研究所研究報告》第 50 號（2021 年）。溫度為一般乾燥實務的典型範圍。" } }
      ] },
    { t:"section",
      id:"energy",
      title:{ en:"The energy bill", ja:"エネルギーの勘定", zh:"能源帳單" },
      jp:"乾燥とエネルギー",
      body:[
        { t:"p",
          text:{
            en:"Drying is the most energy-hungry step between the forest and the building site. Evaporating water takes about 2.3 megajoules per kilogram, and a cubic metre of green sugi can hold several hundred kilograms of water to be removed. When the Hokkaidō Forest Products Research Institute calculated the carbon dioxide emitted in producing the timber for a group of wooden cattle barns (2009), drying was the largest single source, about 49 per cent of the total. That is why most kilns at Japanese sawmills burn bark, sawdust and offcuts: the carbon in mill residue is counted as part of the biological cycle rather than as fossil emissions, and the mill disposes of its waste at the same time. Air drying uses almost no energy at all, which is part of its appeal; kilns heated by the earth, like Hida Sangyō's at Okuhida, are a local answer to the same problem.",
            ja:"乾燥は、森から建築現場までのあいだで最もエネルギーを食う工程である。水を蒸発させるには一キログラムあたり約二・三メガジュールが要り、生材のスギ一立方メートルは、取り除くべき水を数百キログラムも含むことがある。北海道の林産試験場が木造の牛舎群の材をつくるときに出る二酸化炭素を計算したところ（二〇〇九年）、乾燥が最大の排出源で、全体の約四十九パーセントを占めた。日本の製材所の乾燥機の多くが樹皮やおが粉や端材を燃やすのはそのためである。製材の残材の炭素は化石の排出ではなく生物の循環の一部として数えられ、製材所は同時に廃棄物を片づけられる。天然乾燥はほとんどエネルギーを使わず、それが魅力の一つでもある。奥飛騨にある飛騨産業の工場のように大地の熱で温める乾燥は、同じ問題への土地ならではの答えである。",
            zh:"乾燥是從森林到工地之間最耗能的步驟。蒸發水分每公斤約需 2.3 百萬焦耳，而一立方公尺的柳杉生材可能含有數百公斤待去除的水。北海道林產試驗場計算一組木造牛舍所用木材在生產過程中的二氧化碳排放（2009 年），乾燥是最大的單一排放源，約占總量 49%。這正是日本製材所的乾燥窯多半燃燒樹皮、木屑與邊角料的原因：製材殘材中的碳被計為生物循環的一部分，而非化石排放，製材所也同時處理了廢料。自然乾燥幾乎不耗能，這也是其魅力之一；像飛驒產業在奧飛驒那樣以地熱加溫的乾燥，則是對同一問題的在地解答。" } },
        { t:"tiny",
          text:{
            en:"Sources: Hokkaidō Research Organization, Forest Products Research Institute, Komata Hirotaka, “Evaluating the environmental advantage of wooden cattle barns” (2009). Latent heat of water: standard physical value.",
            ja:"出典：北海道立総合研究機構林産試験場、古俣寛隆「木造牛舎の環境優位性を評価する」（二〇〇九年）。水の蒸発熱は物理の標準値。",
            zh:"資料來源：北海道立綜合研究機構林產試驗場，古俣寬隆〈評估木造牛舍的環境優勢〉（2009 年）。水的汽化熱為標準物理數值。" } }
      ] },
    { t:"section",
      id:"premium",
      title:{ en:"The air-dried premium", ja:"天然乾燥材という付加価値", zh:"自然乾燥材的溢價" },
      jp:"天然乾燥材",
      body:[
        { t:"p",
          text:{
            en:"Air-dried timber, <em>tennen kansō-zai</em>, is sold in Gifu as a speciality, usually through builders of traditional houses and by mills in the Tōnō hinoki and Nagara sugi districts that make a point of it. What the buyer pays extra for is partly the wood — fuller colour and scent, no hidden heat checks — and partly time. A mill that air-dries holds its stock for half a year or more: the logs are bought, sawn and paid for long before the timber is sold, the yard must be large and roofed, and every stack runs a risk of stain, insects or warping. Those costs, not any mystique, are what the higher price covers.",
            ja:"天然乾燥材は、岐阜では特別な品として、ふつうは伝統構法の家を建てる工務店や、それを売りにする東濃ひのき・長良杉の産地の製材所を通じて売られる。買い手が上乗せして払うのは、ひとつには木そのもの——濃い色と香り、熱による隠れた割れがないこと——であり、ひとつには時間である。天然乾燥をする製材所は在庫を半年以上抱える。丸太を買い、挽き、支払いを済ませてから材が売れるまで長くかかり、土場は広く屋根つきでなければならず、どの山も変色や虫や狂いの危険を負う。高い値が埋めているのは、神秘ではなくこうした費用である。",
            zh:"自然乾燥材（天然乾燥材）在岐阜被當作特色商品，多半經由傳統工法住宅的營造商，以及以此為號召的東濃扁柏、長良杉產地製材所銷售。買家多付的錢，一部分買的是木材本身——更飽滿的色澤與香氣、沒有隱藏的熱裂——一部分買的是時間。採自然乾燥的製材所要把庫存放上半年以上：原木早已買下、鋸好並付清，木材卻要很久以後才賣得出去；堆場必須寬大且有屋頂，每一堆木材都承擔變色、蟲害或變形的風險。高價所彌補的，是這些成本，而不是什麼神祕色彩。" } },
        { t:"p",
          text:{
            en:"The prefecture's own rules are neutral. Gifu performance-labelled timber certifies dried timber without distinguishing air drying from kiln drying, so long as the measured moisture content meets the mark; an air-dried post that is dry enough qualifies for the house-building subsidy just as a kilned one does (see <a href=\"grading.html\">Grades &amp; Standards</a>). The practical limit is climate: in Gifu's humid summers air drying stalls at around 15–20 per cent, which is fine for a post in a traditional house but too wet for flooring in a heated room — one reason many makers finish air-dried stock in a gentle kiln.",
            ja:"県自身の規則は中立である。ぎふ性能表示材は、測った含水率が表示を満たすかぎり、天然乾燥と人工乾燥を区別せずに乾燥材として認める。十分に乾いた天然乾燥の柱は、乾燥機にかけた柱と同じく家づくりの補助の対象になる（<a href=\"grading.html\">等級と規格</a>参照）。実際の限界は気候である。岐阜の湿った夏には天然乾燥は十五〜二十パーセントほどで止まり、伝統構法の家の柱にはそれでよいが、暖房する部屋の床材には湿りすぎる。多くのつくり手が天然乾燥の材をおだやかな乾燥機で仕上げる理由の一つである。",
            zh:"縣府本身的規定是中立的。岐阜性能標示材只要實測含水率符合標示，便不區分自然乾燥或人工乾燥，一律認定為乾燥材；夠乾的自然乾燥柱材，與經乾燥窯處理的柱材一樣可申請建屋補助（見<a href=\"grading.html\">等級與規格</a>）。實際的限制在於氣候：在岐阜潮濕的夏季，自然乾燥約停在 15–20%，對傳統工法住宅的柱子而言沒有問題，但用於有暖氣房間的地板則太濕——這也是許多業者先自然乾燥、再以溫和乾燥窯收尾的原因之一。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture (2012 manual: performance-labelled timber covers both air- and kiln-dried timber); drying limits from general practice.",
            ja:"出典：岐阜県（二〇一二年の手引き：ぎふ性能表示材は天然乾燥・人工乾燥の区別なし）。乾燥の限界は一般的な慣行による。",
            zh:"資料來源：岐阜縣（2012 年手冊：岐阜性能標示材不區分自然與人工乾燥）；乾燥極限依一般實務。" } }
      ] },
    { t:"related",
      items:[
        { href:"moisture.html", why:{ en:"The physics of water in wood.", ja:"木のなかの水の物理。", zh:"木材中水分的物理。" } },
        { href:"sawmill.html", why:{ en:"Where drying fits in the mill.", ja:"製材所のなかの乾燥。", zh:"乾燥在製材所中的位置。" } },
        { href:"grading.html", why:{ en:"How dried timber is certified.", ja:"乾燥材はどう認証されるか。", zh:"乾燥材如何認證。" } },
        { href:"furniture.html", why:{ en:"Drying broadleaves for furniture.", ja:"家具のための広葉樹の乾燥。", zh:"為家具乾燥闊葉材。" } }
      ] }
  ] };

/* ---- ------------------------------------------- grading */
GIFU.pages["grading"] = { kicker:{ en:"Timber · 07", ja:"木材 · 07", zh:"木材 · 07" },
  title:{ en:"Grading and Standards", ja:"等級と規格", zh:"分級與規格" },
  jp:"JAS・ヤング係数・役物",
  lede:{
    en:"Two posts of Gifu hinoki can look almost identical and yet differ twofold in stiffness, or be equally strong and differ tenfold in price because one shows a knot. Grading is how the timber trade makes those differences visible and trustworthy. Japan grades structural timber by strength and moisture under the Japanese Agricultural Standards, and grades finishing timber by appearance under a much older system of names that every carpenter knows. Gifu adds its own marks of origin and performance. This page explains all three.",
    ja:"岐阜のヒノキの柱二本は、ほとんど同じに見えても剛さが二倍違うことがあり、同じ強さでも一方に節が見えるだけで値段が十倍違うことがある。格付けは、木材の取引がその違いを目に見え、信頼できるものにするしくみである。日本は構造材を日本農林規格（JAS）のもとで強さと含水率によって格付けし、造作材を、どの大工も知る、はるかに古い名前の体系で見た目によって格付けする。岐阜はそこに独自の産地と性能のしるしを加える。この頁は三つすべてを説明する。",
    zh:"兩根岐阜扁柏柱看起來幾乎一模一樣，剛性卻可能相差一倍；或者強度相同，卻只因其中一根露出節疤而價差十倍。分級正是木材交易讓這些差異可見且可信的方式。日本依《日本農林規格》（JAS）以強度與含水率為結構材分級，另以每位木匠都熟知、歷史悠久得多的名稱體系，依外觀為裝修材分級。岐阜再加上自己的產地與性能標誌。本頁說明這三者。" },
  body:[
    { t:"section",
      id:"jas",
      title:{ en:"The Japanese Agricultural Standard", ja:"日本農林規格", zh:"日本農林規格" },
      jp:"製材のJAS",
      body:[
        { t:"p",
          text:{
            en:"The JAS for sawn timber, administered by the Ministry of Agriculture, Forestry and Fisheries, distinguishes timber for structure from timber for finish. Structural sawn timber can be graded in two ways. <em>Visual grading</em> examines knots, slope of grain, checks and wane and assigns a grade of 1 to 3 stars, separately for members that will be bent (beams, class A) and members that will be compressed (posts, class B). <em>Machine grading</em> measures stiffness directly and assigns an E-grade. Both also carry a mark for moisture content if the timber has been dried. Buildings designed by structural calculation — increasingly common for larger timber buildings — require graded timber.",
            ja:"農林水産省の定める製材のJASは、構造のための材と造作のための材を分ける。構造用製材は二つの方法で格付けできる。目視等級区分は、節、繊維の傾き、割れ、丸身を調べ、曲げを受ける部材（梁など、甲種）と圧縮を受ける部材（柱など、乙種）とに分けて一級から三級を与える。機械等級区分は剛さを直接測り、Eの等級を与える。どちらも、乾燥された材なら含水率の表示をもつ。構造計算で設計される建物——大きな木造建築ではますますふえている——には、格付けされた材が要る。",
            zh:"由農林水產省主管的製材 JAS，區分結構用材與裝修用材。結構用製材可用兩種方式分級。「目視分級」檢查節疤、纖維斜度、裂紋與缺角，並就受彎構件（樑等，甲種）與受壓構件（柱等，乙種）分別評定一至三級。「機械分級」直接量測剛性並給予 E 等級。若木材經乾燥，兩者皆另附含水率標示。以結構計算設計的建築——在較大型木造建築中愈來愈普遍——必須使用分級材。" } },
        { t:"table",
          caption:{ en:"Machine stress grades for structural sawn timber", ja:"構造用製材の機械等級区分", zh:"結構用製材機械分級" },
          cols:[
            { en:"Grade", ja:"等級", zh:"等級" },
            { en:"Modulus of elasticity (GPa)", ja:"曲げヤング係数（GPa）", zh:"彈性模數（GPa）" },
            { en:"Typical of", ja:"典型的な樹種", zh:"常見樹種" }
          ],
          numCols:[1],
          rows:[
            ["E50", "3.9–5.9", { en:"Fast-grown sugi", ja:"速く育ったスギ", zh:"快速生長的柳杉" }],
            ["E70", "5.9–7.8", { en:"Average sugi", ja:"平均的なスギ", zh:"一般柳杉" }],
            ["E90", "7.8–9.8", { en:"Good sugi; average hinoki", ja:"良いスギ、平均的なヒノキ", zh:"優質柳杉；一般扁柏" }],
            ["E110", "9.8–11.8", { en:"Good hinoki, larch, Douglas fir", ja:"良いヒノキ、カラマツ、ベイマツ", zh:"優質扁柏、落葉松、花旗松" }],
            ["E130", "11.8–13.7", { en:"Select larch and pine", ja:"選ばれたカラマツやマツ", zh:"精選落葉松與松" }],
            ["E150", "13.7–", { en:"Exceptional pieces", ja:"特別な材", zh:"特例材" }]
          ] },
        { t:"tiny",
          text:{
            en:"The E-number is the stiffness in the old unit of 10³ kgf/cm²; E70 means about 70 × 10³ kgf/cm², or 6.9 GPa. Ranges shown are the grade bands.",
            ja:"Eの数字は旧単位10³ kgf/cm²での剛さで、E70はおよそ70×10³ kgf/cm²、つまり6.9 GPaを意味する。示した範囲は等級の幅である。",
            zh:"E 數字是以舊單位 10³ kgf/cm² 表示的剛性；E70 約等於 70×10³ kgf/cm²，即 6.9 GPa。所列範圍為各等級區間。" } }
      ] },
    { t:"section",
      id:"tap",
      title:{ en:"Grading by sound", ja:"音で格付けする", zh:"以聲音分級" },
      jp:"打撃音法",
      body:[
        { t:"p",
          text:{
            en:"Many Japanese mills measure stiffness not by bending each piece but by listening to it. The timber is struck on its end with a small hammer; a microphone picks up the ring, and an analyser finds the frequency of the lengthwise vibration. Because the speed of sound in wood depends on its stiffness and density, the dynamic modulus of elasticity follows from a simple formula: E = 4 L² f² ρ, where L is the length, f the frequency and ρ the density (from the weight). The whole measurement takes seconds and correlates closely with bending tests. It is the same physics a luthier uses when tapping a guitar top — see <a href=\"tonewoods.html\">Tonewoods</a>.",
            ja:"日本の製材所の多くは、一本ずつ曲げるのではなく、聞くことで剛さを測る。材の木口を小さな槌で打ち、マイクが響きを拾い、分析器が長さ方向の振動の周波数を求める。木のなかの音の速さは剛さと密度で決まるので、動的ヤング係数は簡単な式 E＝4L²f²ρ（Lは長さ、fは周波数、ρは重さから求めた密度）から出る。測定は数秒で終わり、曲げ試験とよく一致する。ギター職人が表板を叩くのと同じ物理である——<a href=\"tonewoods.html\">音響材</a>を参照。",
            zh:"許多日本製材所量測剛性的方式，不是逐根彎曲，而是「聽」。以小槌敲擊木材端面，麥克風收音，分析儀求出縱向振動頻率。由於聲音在木材中的速度取決於剛性與密度，動態彈性模數可由簡單公式求得：E＝4L²f²ρ，其中 L 為長度、f 為頻率、ρ 為密度（由重量求得）。整個量測只需幾秒，且與抗彎試驗高度相關。這與吉他師傅敲擊面板所依據的物理相同——見<a href=\"tonewoods.html\">音木</a>。" } },
        { t:"figure",
          caption:{
            en:"Where the main Gifu timbers typically fall in the machine grades. Bars show the usual range; individual pieces vary widely, which is why each piece is measured. General trade experience, not a survey.",
            ja:"岐阜の主な木が機械等級でふつうどこに入るか。棒はふつうの範囲を示す。一本ごとの差は大きく、だから一本ずつ測る。業界の一般的な経験によるもので、調査ではない。",
            zh:"岐阜主要木材在機械分級中的一般位置。長條表示常見範圍；個別木材差異很大，因此需逐根量測。依業界一般經驗，非調查結果。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 230" role="img">';
            s += F.text(20, 28, lang==="en"?"TYPICAL STIFFNESS GRADES":(lang==="ja"?"典型的な剛さの等級":"典型剛性等級"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            var G = ["E50","E70","E90","E110","E130","E150"], x0 = 200, w = 90;
            for (var i=0;i<G.length;i++){ s += '<rect x="'+(x0+i*w)+'" y="46" width="'+w+'" height="160" fill="'+(i%2?"#F5F3ED":"#FBFAF7")+'" stroke="#E1DCD2"/>' + F.text(x0+i*w+w/2, 62, G[i], { size:10.5, fill:"#55504A", anchor:"middle" }); }
            var R = [ [{ en:"Sugi", ja:"スギ", zh:"柳杉" }, 0, 2.3, "#E0E6DB"], [{ en:"Hinoki", ja:"ヒノキ", zh:"扁柏" }, 1.5, 3.8, "#EDE5D2"], [{ en:"Larch", ja:"カラマツ", zh:"落葉松" }, 2, 4.6, "#E6E4E0"], [{ en:"Glulam lamina (selected)", ja:"集成材のラミナ（選別）", zh:"集成材層板（精選）" }, 1, 5.2, "#E0E7E9"] ];
            for (var j=0;j<R.length;j++){ var y = 80 + j*32; s += F.text(20, y+14, L(R[j][0]), { size:11.5 }); s += '<rect x="'+(x0+R[j][1]*w)+'" y="'+y+'" width="'+((R[j][2]-R[j][1])*w)+'" height="20" fill="'+R[j][3]+'" stroke="#8B857C"/>'; }
            return s + '</svg>';
          } }
      ] },
    { t:"section",
      id:"appearance",
      title:{ en:"Grading by appearance", ja:"見た目の格付け", zh:"依外觀分級" },
      jp:"無節・上小節・小節",
      body:[
        { t:"p",
          text:{
            en:"For timber that will be seen — exposed posts, ceilings, door frames, tokonoma, shoji — Japanese buyers have always paid first for looks, and the trade uses a set of names that predate any standard. The grade is defined mainly by knots: how many, how large, how tight, on how many faces. The JAS for finishing timber formalises the three familiar top grades; below them lies ordinary “first-grade” timber, which despite its name is the common grade with knots allowed.",
            ja:"見える材——化粧の柱、天井、枠、床の間、障子——について、日本の買い手はいつもまず見た目に値を払ってきた。業界は、どの規格よりも古い名の体系を使う。等級はおもに節で決まる。いくつ、どれほど大きく、どれほど締まり、いくつの面にあるか。造作用製材のJASは、なじみの上の三つの等級を定めている。その下にあるのがふつうの「一等」材で、名に反して、節を許すふつうの等級である。",
            zh:"對於外露的木材——化妝柱、天花板、門框、床之間、障子——日本買家向來首先為外觀付費，業界也沿用一套比任何標準都古老的名稱。等級主要由節疤決定：數量、大小、緊密程度，以及出現在幾個面上。裝修用製材的 JAS 將常見的前三個等級規格化；其下為一般的「一等」材，名稱雖如此，其實是允許節疤的普通等級。" } },
        { t:"table",
          caption:{ en:"Appearance grades of Japanese finishing timber", ja:"日本の造作材の見た目の等級", zh:"日本裝修材外觀等級" },
          cols:[
            { en:"Grade", ja:"等級", zh:"等級" },
            { en:"Reading", ja:"読み", zh:"讀音" },
            { en:"Meaning", ja:"意味", zh:"意義" },
            { en:"Relative price", ja:"相対的な値段", zh:"相對價格" }
          ],
          rows:[
            [
              { en:"Mubushi", ja:"無節", zh:"無節" },
              "むぶし",
              { en:"Clear: no knots on the graded faces", ja:"格付けする面に節がない", zh:"分級面上完全無節" },
              { en:"Highest; many times first grade", ja:"最高。一等の何倍も", zh:"最高；為一等材的數倍" }
            ],
            [
              { en:"Jōkobushi", ja:"上小節", zh:"上小節" },
              "じょうこぶし",
              {
                en:"Superior small knots: a few tight knots of about 10 mm or less",
                ja:"およそ十ミリ以下の締まった節がわずかにある",
                zh:"少量約 10 公釐以下的緊密小節" },
              { en:"High", ja:"高い", zh:"高" }
            ],
            [
              { en:"Kobushi", ja:"小節", zh:"小節" },
              "こぶし",
              { en:"Small knots: tight knots of about 20 mm or less", ja:"およそ二十ミリ以下の締まった節", zh:"約 20 公釐以下的緊密節" },
              { en:"Medium", ja:"中くらい", zh:"中" }
            ],
            [
              { en:"Ittō", ja:"一等", zh:"一等" },
              "いっとう",
              {
                en:"Common: knots, including loose ones, allowed within limits",
                ja:"ふつう。抜け節を含め、範囲内で節を許す",
                zh:"普通：在限度內允許節疤，包括鬆節" },
              { en:"Base", ja:"基準", zh:"基準" }
            ]
          ] },
        { t:"p",
          text:{
            en:"For posts the trade also counts faces. A <em>shihō mubushi</em> post, knot-free on all four faces, can only come from the outer, pruned wood of a large, carefully tended tree; <em>sanpō</em>, <em>nihō</em> and <em>ippō</em> posts are clear on three, two or one faces, and the carpenter turns the clear faces towards the room. The whole system is a measure of forestry as much as sawing: it rewards the owner who pruned forty years before.",
            ja:"柱については、業界は面の数も数える。四面とも節のない四方無節の柱は、大きく手入れの行き届いた木の、枝打ちされた外側の材からしか取れない。三方・二方・一方の柱は、三面・二面・一面が無節で、大工は無節の面を部屋のほうへ向ける。この仕組みは製材と同じほど林業の尺度でもあり、四十年前に枝を打った持ち主に報いる。",
            zh:"柱材方面，業界還會計算無節的面數。四面皆無節的「四方無節」柱，只能取自大徑且悉心撫育之樹木經修枝的外層木材；「三方」、「二方」、「一方」柱分別為三面、兩面、一面無節，木匠會把無節面朝向室內。整個體系與其說是衡量製材，不如說是衡量林業：它回報的是四十年前修枝的林主。" } }
      ] },
    { t:"section",
      id:"gifumarks",
      title:{ en:"Gifu's own marks", ja:"岐阜のしるし", zh:"岐阜的專屬標章" },
      jp:"ぎふ証明材・ぎふ性能表示材",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Gifu-certified timber", ja:"ぎふ証明材", zh:"岐阜證明材" },
              jp:"ぎふしょうめいざい",
              def:{
                en:"Timber whose Gifu origin and legal harvest are documented through a chain of certificates from the forest to the seller. It is the minimum requirement for most of the prefecture's subsidies for building with local wood.",
                ja:"岐阜産であることと合法に伐られたことが、森から売り手までの証明の連なりで裏づけられた材。県産材で建てるための県の補助の多くで、最低の条件となる。",
                zh:"從森林到賣方，以一連串證明文件記錄其岐阜產地與合法伐採的木材。它是縣府多數在地木材建築補助的最低要件。" } },
            { term:{ en:"Gifu performance-labelled timber", ja:"ぎふ性能表示材", zh:"岐阜性能標示材" },
              jp:"ぎふせいのうひょうじざい",
              def:{
                en:"A subset of certified timber sold by registered businesses with its quality and performance — such as moisture content and strength — assured and labelled. Houses built with a high share of it in their structure qualify for the prefecture's building subsidy.",
                ja:"証明材のうち、登録された事業者が品質と性能——含水率や強さなど——を保証し表示して売る材。構造に高い割合で使って建てた家は、県の家づくりの補助の対象になる。",
                zh:"證明材中的一部分，由登錄業者擔保並標示其品質與性能——如含水率與強度——後出售。結構中大量使用此類木材建造的住宅，可獲縣府建築補助。" } },
            { term:{ en:"The house-building subsidy", ja:"家づくり支援", zh:"建屋補助" },
              jp:"ぎふの木で家づくり支援事業",
              def:{
                en:"Under the prefecture's scheme for new houses, at least 80 per cent of the specified structural members must be performance-labelled timber (or certified timber with JAS grading), and the grant — in recent rounds about ¥150,000 to ¥320,000 per house — is calculated from the volume of structural timber and the area of Gifu wood used in interior finishes.",
                ja:"県の新築の制度では、指定された構造部材の八割以上がぎふ性能表示材（またはJASの格付けをもつ証明材）でなければならず、補助額——近年はおよそ一戸十五万〜三十二万円——は、構造材の材積と内装に使った岐阜の木の面積から算出される。",
                zh:"依縣府的新建住宅方案，指定結構構件至少八成須為岐阜性能標示材（或具 JAS 分級的證明材）；補助金額——近年約每戶 15 萬至 32 萬日圓——依結構材材積與室內裝修使用岐阜木材的面積計算。" } }
          ] },
        { t:"table",
          caption:{ en:"Gifu's brand timbers", ja:"岐阜のブランド材", zh:"岐阜品牌木材" },
          cols:[{ en:"Brand", ja:"銘柄", zh:"品牌" }, { en:"Origin", ja:"産地", zh:"產地" }, { en:"Character", ja:"特徴", zh:"特色" }],
          rows:[
            [
              { en:"Tōnō hinoki", ja:"東濃ひのき", zh:"東濃扁柏" },
              {
                en:"Eastern Tōnō (Ura-Kiso), now also Gero, Kamo, Seki, Gujō",
                ja:"東濃東部（裏木曽）。いまは下呂・加茂・関・郡上も",
                zh:"東濃東部（裏木曾），現也包括下呂、加茂、關、郡上" },
              {
                en:"Narrow, even rings of 2–3 mm; pale pink, lustrous and fragrant; few small knots. A long-established market name; a promotion council of eleven cooperatives was formed in 2007.",
                ja:"幅二〜三ミリの狭くそろった年輪。淡い桃色で光沢があり香り高く、節は小さく少ない。古くからの市場の銘柄名で、二〇〇七年に十一の組合で推進協議会ができた。",
                zh:"年輪窄而均勻，寬 2–3 公釐；淡粉紅、有光澤、香氣濃郁；節疤少而小。是由來已久的市場品牌名；2007 年由十一個組合成立推廣協議會。" }
            ],
            [
              { en:"Nagara sugi", ja:"長良杉", zh:"長良杉" },
              { en:"Nagara River basin: Gujō and Mino", ja:"長良川流域：郡上・美濃", zh:"長良川流域：郡上、美濃" },
              {
                en:"Even grain with thick latewood; red-and-white genpei heart; fine and soft to the touch.",
                ja:"晩材の厚いそろった木目。赤白の源平。細かくやわらかな手ざわり。",
                zh:"紋理均勻、晚材厚；紅白相間的「源平」心材；觸感細緻柔軟。" }
            ],
            [
              { en:"Kiso hinoki", ja:"木曽ヒノキ", zh:"木曾扁柏" },
              { en:"Kiso valley (Nagano) and the upper Kiso in Gifu", ja:"木曽谷（長野）と岐阜の木曽川上流", zh:"木曾谷（長野）與岐阜境內木曾川上游" },
              {
                en:"Natural hinoki, typically around 300 years old; minimal movement, exceptional durability; the timber of temples and shrines.",
                ja:"樹齢三百年前後が多い天然のヒノキ。狂いが少なく耐久性にすぐれ、社寺の材。",
                zh:"樹齡多在 300 年上下的天然扁柏；變形極小、耐久性卓越；寺社用材。" }
            ]
          ] }
      ] },
    { t:"section",
      id:"certification",
      title:{ en:"Legality and certification", ja:"合法性と認証", zh:"合法性與認證" },
      jp:"クリーンウッド法",
      body:[
        { t:"p",
          text:{
            en:"Beyond quality and origin, buyers increasingly ask whether timber was harvested legally and sustainably. Japan's Clean Wood Act of 2016 requires businesses handling timber to take steps to confirm its legality, and a 2023 amendment made such checks mandatory for the first businesses to take imported timber or domestic logs into the market. Forest certification schemes — the international FSC and PEFC, and Japan's own SGEC, which has been endorsed by PEFC since 2016 — certify forest management and the chain of custody to the final product; several Gifu forests, mills and furniture makers hold certificates, and public buildings and large companies increasingly require them.",
            ja:"品質と産地を超えて、買い手はますます、材が合法かつ持続可能に伐られたかを問う。日本の二〇一六年のクリーンウッド法は、木材を扱う事業者にその合法性を確かめる措置をとるよう求め、二〇二三年の改正は、輸入材や国産の丸太を最初に市場に受け入れる事業者に確認を義務づけた。森林認証——国際的なFSCとPEFC、そして二〇一六年からPEFCと相互承認している日本のSGEC——は森の管理と、最終製品までの加工・流通の管理を認証する。岐阜のいくつかの森、製材所、家具メーカーが認証をもち、公共建築や大企業はますますそれを求めている。",
            zh:"除了品質與產地，買家也愈來愈關心木材是否合法且永續地伐採。日本 2016 年的《清潔木材法》要求經手木材的業者採取措施確認其合法性；2023 年修法後，率先將進口木材或國產原木引入市場的業者，必須強制進行確認。森林認證制度——國際的 FSC 與 PEFC，以及自 2016 年起與 PEFC 相互承認的日本 SGEC——認證森林經營及直到最終產品的產銷監管鏈；岐阜有數片森林、製材所與家具廠持有認證，公共建築與大型企業也愈來愈要求使用認證材。" } }
      ] },
    { t:"section",
      id:"stamp",
      title:{ en:"Reading a JAS stamp", ja:"JASの刻印を読む", zh:"解讀 JAS 標章" },
      jp:"格付の表示",
      body:[
        { t:"p",
          text:{
            en:"A graded piece of structural timber carries a printed stamp, usually on one face or on a label stapled to the bundle. It names the standard (“structural sawn timber”), the grading method and grade (for example <em>E90</em>, or visual class A grade 2), the species, the moisture class, the dimensions, the certified factory and the body that certified it. A builder or inspector can read from it exactly what the engineer may assume: the stiffness band, the allowable defects and how dry the wood was when it left the mill. The moisture class matters as much as the strength grade, because timber that is still drying will shrink, twist and lose stiffness in place.",
            ja:"格付けされた構造材には、ふつう材面か、束に留めた札に、印字された表示がある。規格の名（「構造用製材」）、区分の方法と等級（たとえばE90、あるいは目視の甲種二級）、樹種、含水率の区分、寸法、認証を受けた工場、そして認証した機関が記される。施工者や検査員はそこから、設計者が前提にしてよいこと——剛さの幅、許される欠点、工場を出たときの乾き具合——を正確に読みとれる。含水率の区分は強さの等級と同じくらい大事である。乾ききっていない材は、建ってから縮み、ねじれ、剛さを失うからである。",
            zh:"經分級的結構材會帶有印刷標示，通常印在材面上，或印在釘於料捆上的標籤上。標示註明規格名稱（「結構用製材」）、分級方式與等級（例如 E90，或目視甲種二級）、樹種、含水率類別、尺寸、取得認證的工廠，以及認證機構。施工者或檢查員可由此準確讀出設計者可以假定的條件：剛性範圍、容許的缺點，以及木材出廠時的乾燥程度。含水率類別與強度等級同樣重要，因為尚未乾透的木材會在建成後收縮、扭曲並失去剛性。" } },
        { t:"table",
          caption:{ en:"Moisture classes for JAS structural sawn timber", ja:"構造用製材のJASの含水率区分", zh:"JAS 結構用製材的含水率類別" },
          cols:[
            { en:"Mark", ja:"表示", zh:"標示" },
            { en:"Applies to", ja:"対象", zh:"適用對象" },
            { en:"Moisture content", ja:"含水率", zh:"含水率" }
          ],
          rows:[
            [
              "SD15",
              { en:"Planed (finished) timber", ja:"仕上げ材（かんな掛け済み）", zh:"刨光的完成材" },
              { en:"15% or less", ja:"15％以下", zh:"15% 以下" }
            ],
            [
              "SD20",
              { en:"Planed (finished) timber", ja:"仕上げ材（かんな掛け済み）", zh:"刨光的完成材" },
              { en:"20% or less", ja:"20％以下", zh:"20% 以下" }
            ],
            ["D15", { en:"Unplaned timber", ja:"未仕上げ材", zh:"未刨光材" }, { en:"15% or less", ja:"15％以下", zh:"15% 以下" }],
            ["D20", { en:"Unplaned timber", ja:"未仕上げ材", zh:"未刨光材" }, { en:"20% or less", ja:"20％以下", zh:"20% 以下" }],
            ["D25", { en:"Unplaned timber", ja:"未仕上げ材", zh:"未刨光材" }, { en:"25% or less", ja:"25％以下", zh:"25% 以下" }]
          ] },
        { t:"p",
          text:{
            en:"In practice only a minority of Japanese timber carries a stamp. The Forestry Agency's white paper for FY2018 noted that only about one sawmill in ten held JAS certification, against more than seven in ten plywood mills, and that 41.5 per cent of all sawn timber, and 50.0 per cent of building timber, was kiln-dried in 2017. The reason is the market: most timber went into small houses that builders could design by prescriptive rules, without structural calculation, and for which ungraded but well-known local timber was enough. The rise of pre-cut factories, of non-residential timber buildings and of engineered design has pushed the share up, and the prefecture's own performance label (see above) is partly a bridge for mills too small to justify JAS certification.",
            ja:"実際には、表示をもつ日本の材は少数派である。林野庁の二〇一八年度の白書は、JASの認証をもつ製材工場はおよそ一割にすぎず、合板工場の七割超と対照的であること、そして二〇一七年には製材品全体の四一・五パーセント、建築用材の五〇・〇パーセントが人工乾燥材であったことを記している。理由は市場にある。材の大半は、構造計算なしに仕様の規定で設計できる小さな住宅に使われ、そこでは格付けのない、しかし素性の知れた地元の材で足りた。プレカット工場、非住宅の木造建築、工学的な設計の広がりがその割合を押し上げており、県独自の性能表示（前節参照）は、JASの認証を取るには小さすぎる製材所のための橋渡しという面もある。",
            zh:"實際上，帶有標示的日本木材只是少數。林野廳 2018 年度白皮書指出，取得 JAS 認證的製材廠僅約一成，而合板廠超過七成；2017 年全部製材品的 41.5%、建築用材的 50.0% 為人工乾燥材。原因在於市場：大部分木材用於小型住宅，這類住宅可依規範性條文設計、無須結構計算，未經分級但來歷清楚的在地木材便已足夠。預切工廠、非住宅木造建築與工程化設計的興起，推高了分級材的比例；而縣府自有的性能標示（見前節），在某種程度上也是為規模太小、不值得取得 JAS 認證的製材廠搭起的橋梁。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Agriculture, Forestry and Fisheries, JAS for sawn timber; Forestry Agency, Annual Report on Forest and Forestry in Japan FY2018, chapter IV.",
            ja:"出典：農林水産省「製材の日本農林規格」、林野庁「平成三十年度 森林・林業白書」第四章。",
            zh:"資料來源：農林水產省《製材日本農林規格》；林野廳《2018 年度森林・林業白皮書》第四章。" } }
      ] },
    { t:"section",
      id:"judginglogs",
      title:{ en:"Judging a log", ja:"丸太の目利き", zh:"原木的鑑別" },
      jp:"目利き",
      body:[
        { t:"p",
          text:{
            en:"Grading begins before the saw. In Gifu logs are first sorted into the four commercial grades by use — A for sawmills, B for plywood and laminated timber, C for chips, D for fuel; in FY2021 A-grade logs were 44 per cent of the prefecture's harvest and fuel wood about a third (see <a href=\"industry.html\">Wood in Numbers</a>). Within the A-grade logs that reach a market, buyers then judge each one by eye, because the log decides what the mill can cut from it. The table lists what an experienced buyer looks at; the measuring of volume is explained in <a href=\"tables.html\">Reference Tables</a>, and the auction itself in <a href=\"markets.html\">Log Markets &amp; Prices</a>.",
            ja:"格付けは鋸より前に始まる。岐阜では丸太はまず用途によって四つの商業上の区分に分けられる。製材用のA、合板・集成材用のB、チップ用のC、燃料用のDである。二〇二一年度、A材は県の素材生産の四十四パーセント、燃料用はおよそ三分の一だった（<a href=\"industry.html\">木の数字</a>参照）。市場に出るA材のなかで、買い手はさらに一本ずつ目で判断する。丸太が、製材所がそこから何を挽けるかを決めるからである。表は、目の利く買い手が見るところを挙げたものである。材積の測り方は<a href=\"tables.html\">早見表</a>に、競りそのものは<a href=\"markets.html\">原木市場と価格</a>に記した。",
            zh:"分級在鋸切之前就已開始。在岐阜，原木先依用途分為四個商業等級：製材用的 A、合板與集成材用的 B、木片用的 C、燃料用的 D；2021 年度 A 材占全縣原木產量的 44%，燃料材約占三分之一（見<a href=\"industry.html\">木材的數字</a>）。在進入市場的 A 材中，買家還會逐根目測判斷，因為原木決定了製材廠能從中鋸出什麼。下表列出經驗豐富的買家會看的地方；材積的計量方式見<a href=\"tables.html\">速查表</a>，拍賣本身見<a href=\"markets.html\">原木市場與價格</a>。" } },
        { t:"table",
          caption:{ en:"What a log buyer looks at", ja:"丸太の買い手が見るところ", zh:"原木買家觀察的重點" },
          cols:[
            { en:"Feature", ja:"見るところ", zh:"觀察重點" },
            { en:"What is wanted", ja:"望まれる状態", zh:"理想狀態" },
            { en:"Why it matters", ja:"理由", zh:"原因" }
          ],
          rows:[
            [
              { en:"Rings at the ends", ja:"木口の年輪", zh:"端面年輪" },
              { en:"Narrow, even, round, pith near the centre", ja:"狭く、そろい、丸く、髄が中心に近い", zh:"窄、均勻、圓，髓心近中央" },
              {
                en:"Predicts stiffness, stability and the look of the grain; an off-centre pith signals reaction wood",
                ja:"剛さ、狂いにくさ、木目の見え方を示す。髄の偏りはあて材のしるし",
                zh:"可預判剛性、穩定性與紋理外觀；髓心偏離表示有反應材" }
            ],
            [
              { en:"Straightness", ja:"曲がり", zh:"彎曲" },
              { en:"No sweep along the length", ja:"長さ方向の曲がりがない", zh:"全長無彎曲" },
              {
                en:"A bent log yields short or cross-grained pieces",
                ja:"曲がった丸太からは短い材か目切れの材しか取れない",
                zh:"彎曲原木只能鋸出短材或紋理斜交的材" }
            ],
            [
              { en:"Knots and branch scars", ja:"節と枝跡", zh:"節疤與枝痕" },
              { en:"Few, small, healed over by clear wood", ja:"少なく小さく、無節の材で巻き込まれている", zh:"少而小，已被無節木材包覆" },
              { en:"Decides the appearance grade of the boards and posts", ja:"板や柱の見た目の等級を決める", zh:"決定板材與柱材的外觀等級" }
            ],
            [
              { en:"Heart colour and soundness", ja:"心材の色と健全さ", zh:"心材顏色與健全度" },
              { en:"Even colour; no rot, shake or insect holes", ja:"色がそろい、腐れ・目回り・虫穴がない", zh:"顏色均勻；無腐朽、輪裂或蟲孔" },
              {
                en:"Hidden defects ruin a whole log of finishing timber",
                ja:"隠れた欠点は造作材の丸太一本をまるごと台無しにする",
                zh:"隱藏缺陷可毀掉整根裝修材原木" }
            ],
            [
              { en:"Top diameter and length", ja:"末口径と長さ", zh:"末口徑與長度" },
              { en:"Matched to the mill's products", ja:"製材所の製品に合う", zh:"符合製材廠的產品規格" },
              {
                en:"A 3 m log cut to 4 m posts is wasted; a 6 m log may fetch a premium for beams",
                ja:"三メートル材は四メートルの柱にならない。六メートル材は梁として割増がつくこともある",
                zh:"3 公尺原木無法做 4 公尺柱；6 公尺原木做樑材則可能有溢價" }
            ]
          ] }
      ] },
    { t:"section",
      id:"templetimber",
      title:{ en:"Timber for temples and shrines", ja:"社寺の材", zh:"寺社用材" },
      jp:"社寺用材",
      body:[
        { t:"p",
          text:{
            en:"Timber for temples and shrines is graded by rules that no standard writes down. The temple carpenter wants heartwood only, since sapwood decays; columns cut <em>shin-sari</em>, free of the pith, so that they do not split open as they dry; exterior boards quarter-sawn so that they stay flat in sun and rain; and narrow, even rings from slow, old trees. Above all he wants size: a column 50 or 60 cm across, cut free of the pith, needs a log close to a metre in diameter, and long beams need long clear trunks. A plantation hinoki of 60 years is excellent house timber but rarely meets these demands, which is why such timber comes from natural or very old forests, such as the Kiso and Ura-Kiso hinoki stands, and why it is priced by the piece rather than by the cubic metre.",
            ja:"社寺の材は、どの規格にも書かれていない決まりで格付けされる。宮大工は、辺材は腐るので赤身だけを求め、柱は乾くときに割れないよう髄を外した心去り材で、外まわりの板は日にも雨にも反らないよう柾目で、そして年をへてゆっくり育った木の、狭くそろった年輪を求める。なによりも大きさを求める。径五十〜六十センチの柱を心去りで取るには径一メートル近い丸太が要り、長い梁には長く節のない幹が要る。六十年生の人工林のヒノキは住宅にはすばらしい材だが、これらの要求を満たすことはまれである。だからこうした材は、木曽や裏木曽のヒノキ林のような天然林や、きわめて古い森から出る。そして立方メートルではなく、一本ごとに値がつく。",
            zh:"寺社用材依據一套任何規格都未寫明的規則分級。宮廷木匠（宮大工）只要心材，因為邊材會腐朽；柱子要「心去」，即避開髓心鋸取，以免乾燥時開裂；外部板材要徑切，才能在日曬雨淋下保持平整；還要老樹緩慢生長所形成的窄而均勻的年輪。最重要的是尺寸：一根直徑 50 至 60 公分、避開髓心的柱子，需要直徑近 1 公尺的原木；長樑則需要又長又無節的樹幹。60 年生的人工林扁柏是極佳的住宅用材，卻很少能滿足這些要求，因此這類木材來自天然林或極古老的森林，例如木曾與裏木曾的扁柏林，而且是逐根計價，而不是按立方公尺計價。" } },
        { t:"figure",
          caption:{
            en:"Boxed heart and pith-free. A house post usually contains the pith and is kerfed along one face so that drying splits open there rather than elsewhere; a temple column is cut beside the pith from a much larger log. Schematic, not to scale.",
            ja:"心持ちと心去り。住宅の柱はふつう髄を含み、一面に背割りを入れて、乾燥による割れをほかでなくそこに集める。社寺の柱は、はるかに大きな丸太から髄を外して取る。模式図で、縮尺は正確でない。",
            zh:"含髓心與避開髓心。住宅柱通常含有髓心，並在一面開背割鋸槽，讓乾燥裂紋集中於此而非他處；寺社柱則是從大得多的原木中避開髓心鋸取。示意圖，未按比例。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 340" role="img">';
            s += F.text(20, 28, lang==="en"?"WHERE THE PITH GOES":(lang==="ja"?"髄の位置":"髓心的位置"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            function rings(cx, cy, r){ var t = '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#EDE5D2" stroke="#8B857C"/>'; for (var k=r-12;k>6;k-=12){ t += '<circle cx="'+cx+'" cy="'+cy+'" r="'+k+'" fill="none" stroke="#CDC6B9" stroke-width="0.8"/>'; } return t + '<circle cx="'+cx+'" cy="'+cy+'" r="3.5" fill="#7C6B52"/>'; }
            s += rings(190, 160, 72);
            s += '<rect x="148" y="118" width="84" height="84" fill="#FBFAF7" fill-opacity="0.75" stroke="#201E1B" stroke-width="1.4"/>';
            s += '<circle cx="190" cy="160" r="3.5" fill="#7C6B52"/><line x1="190" y1="118" x2="190" y2="150" stroke="#201E1B" stroke-width="2"/>';
            s += rings(540, 160, 124);
            var q = [[-88,-88],[8,-88],[-88,8],[8,8]];
            for (var i=0;i<q.length;i++){ s += '<rect x="'+(540+q[i][0])+'" y="'+(160+q[i][1])+'" width="80" height="80" fill="#FBFAF7" fill-opacity="0.75" stroke="#201E1B" stroke-width="1.4"/>'; }
            s += '<circle cx="540" cy="160" r="3.5" fill="#7C6B52"/>';
            s += F.text(300, 150, L({ en:"pith", ja:"髄", zh:"髓心" }), { size:10.5, fill:"#55504A", anchor:"middle" });
            s += '<line x1="290" y1="146" x2="198" y2="158" stroke="#8B857C" stroke-width="0.8"/><line x1="310" y1="146" x2="532" y2="158" stroke="#8B857C" stroke-width="0.8"/>';
            s += F.text(190, 258, L({ en:"Boxed-heart post (shin-mochi)", ja:"心持ち材の柱", zh:"含髓心柱（心持）" }), { size:11.5, anchor:"middle", max:34 });
            s += F.text(190, 276, L({ en:"Log about 25–30 cm; pith inside; back kerf on one face", ja:"丸太径二十五〜三十センチほど。髄を含み、一面に背割り", zh:"原木徑約 25–30 公分；含髓心；一面開背割" }), { size:10.5, fill:"#55504A", anchor:"middle", max:40, lh:13 });
            s += F.text(540, 300, L({ en:"Pith-free columns (shin-sari)", ja:"心去り材の柱", zh:"心去柱（避開髓心）" }), { size:11.5, anchor:"middle", max:40 });
            s += F.text(540, 318, L({ en:"Log near a metre across; cut beside the pith", ja:"径一メートル近い丸太から、髄の脇で取る", zh:"原木徑近 1 公尺；於髓心旁鋸取" }), { size:10.5, fill:"#55504A", anchor:"middle", max:56 });
            return s + '</svg>';
          } },
        { t:"table",
          caption:{
            en:"House timber and temple timber compared (typical requirements)",
            ja:"住宅の材と社寺の材（典型的な要求）",
            zh:"住宅用材與寺社用材比較（典型要求）" },
          cols:[
            { en:"Requirement", ja:"項目", zh:"項目" },
            { en:"House post", ja:"住宅の柱", zh:"住宅柱" },
            { en:"Temple column", ja:"社寺の柱", zh:"寺社柱" }
          ],
          rows:[
            [
              { en:"Section", ja:"断面", zh:"斷面" },
              { en:"10.5 or 12 cm square", ja:"10.5cmか12cm角", zh:"10.5 或 12 公分見方" },
              { en:"Often 30–60 cm, round or square", ja:"しばしば30〜60cm、丸または角", zh:"常為 30–60 公分，圓或方" }
            ],
            [
              { en:"Pith", ja:"髄", zh:"髓心" },
              { en:"Boxed heart, kerfed on the back to control splitting", ja:"心持ち材。背割りで割れを制御", zh:"含髓心材，背面開鋸槽控制開裂" },
              { en:"Pith-free (shin-sari)", ja:"心去り材", zh:"心去材（避開髓心）" }
            ],
            [
              { en:"Sapwood", ja:"辺材", zh:"邊材" },
              { en:"Allowed", ja:"許される", zh:"容許" },
              { en:"Excluded (heartwood only)", ja:"除く（赤身のみ）", zh:"排除（僅用心材）" }
            ],
            [
              { en:"Source", ja:"出どころ", zh:"來源" },
              { en:"Plantation, 40–80 years", ja:"人工林、四十〜八十年生", zh:"人工林，40–80 年生" },
              { en:"Natural or very old trees, often 200+ years", ja:"天然林やきわめて古い木、しばしば二百年生以上", zh:"天然林或極老樹，常逾 200 年" }
            ],
            [
              { en:"Priced", ja:"値のつけ方", zh:"計價" },
              { en:"By the cubic metre or the piece", ja:"立方メートルか一本単位", zh:"按立方公尺或逐根" },
              { en:"By the individual log", ja:"丸太一本ごと", zh:"逐根原木議價" }
            ]
          ] },
        { t:"p",
          text:{
            en:"The shortage is old. When the temple carpenter Nishioka Tsunekazu rebuilt the Golden Hall (1976) and West Pagoda (1981) of Yakushi-ji in Nara, he turned to Taiwan for hinoki of the size he needed, as he recounts in his books; Taiwan ended natural-forest logging in the early 1990s, and that source is closed. In response the Forestry Agency began in 2002 to set aside national forests as <em>Koji no Mori</em>, “forests for ancient matters”, managed over centuries to grow large timber and bark for the repair of cultural properties — an idea proposed by the novelist Tatematsu Wahei. By March 2025 there were 22 such forests. Gifu's is the Ura-Kiso Koji no Mori in Nakatsugawa, established in 2004 at the entrance to the Kiso hinoki reserve forest in Kashimo, where volunteers plant and tend hinoki intended for World Heritage and Important Cultural Property buildings that will need them long after everyone now alive.",
            ja:"不足は昔からである。宮大工の西岡常一は、奈良の薬師寺の金堂（一九七六年）と西塔（一九八一年）を再建したとき、必要な大きさのヒノキを台湾に求めたと著書で語っている。台湾は一九九〇年代初めに天然林の伐採を終え、その道は閉ざされた。これに応えて林野庁は二〇〇二年度から、文化財の修理のための大径材や樹皮を数百年かけて育てる国有林を「古事の森」として設けはじめた。作家の立松和平が提唱した構想である。二〇二五年三月末には二十二か所を数える。岐阜のそれは中津川市の裏木曽古事の森で、二〇〇四年、加子母の木曽ヒノキ備林の入り口に設けられた。ボランティアが、いま生きている誰よりも後の世に世界遺産や重要文化財の建物が必要とするヒノキを植え、育てている。",
            zh:"短缺由來已久。宮大工西岡常一在重建奈良藥師寺金堂（1976 年）與西塔（1981 年）時，據其著作所述，曾前往台灣尋求所需尺寸的扁柏；台灣於 1990 年代初停止天然林伐採，這條來源從此斷絕。為此，林野廳自 2002 年度起，將部分國有林劃為「古事之森」，以數百年的時間培育修復文化財所需的大徑木與樹皮——這是作家立松和平提出的構想。至 2025 年 3 月底共有 22 處。岐阜的是中津川市的「裏木曾古事之森」，2004 年設於加子母木曾扁柏備林的入口，由志工栽植並撫育扁柏，供遠在今人身後的世界遺產與重要文化財建築使用。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, “Forests that support wood culture” (Koji no Mori list, as of 31 March 2025); Forestry Agency Chūbu Regional Forest Office newsletter (January 2012); Nishioka Tsunekazu's published memoirs. Requirements in the table are typical trade practice, not a standard.",
            ja:"出典：林野庁「木の文化を支える森」（古事の森一覧、二〇二五年三月三十一日現在）、林野庁中部森林管理局メールマガジン（二〇一二年一月）、西岡常一の著作。表の要求は業界の典型的な慣行で、規格ではない。",
            zh:"資料來源：林野廳「支撐木文化的森林」（古事之森一覽，2025 年 3 月 31 日現況）；林野廳中部森林管理局電子報（2012 年 1 月）；西岡常一著作。表中要求為業界典型做法，非正式規格。" } }
      ] },
    { t:"related",
      items:[
        { href:"properties.html", why:{ en:"Stiffness and strength explained.", ja:"剛さと強さの説明。", zh:"剛性與強度的說明。" } },
        { href:"engineered.html",
          why:{ en:"How grading makes glulam possible.", ja:"格付けが集成材を可能にする。", zh:"分級如何使集成材成為可能。" } },
        { href:"drying.html", why:{ en:"The moisture marks on dried timber.", ja:"乾燥材の含水率の表示。", zh:"乾燥材的含水率標示。" } },
        { href:"tonewoods.html",
          why:{ en:"The same physics in guitar making.", ja:"ギターづくりの同じ物理。", zh:"吉他製作中的相同物理。" } }
      ] }
  ] };

/* ---- ---------------------------------------- engineered */
GIFU.pages["engineered"] = { kicker:{ en:"Timber · 08", ja:"木材 · 08", zh:"木材 · 08" },
  title:{ en:"Engineered Wood", ja:"エンジニアードウッド", zh:"工程木材" },
  jp:"集成材・合板・LVL・CLT",
  lede:{
    en:"Sawn timber is limited by the tree: its size, its knots, its tendency to move. Engineered wood removes those limits by cutting logs into smaller pieces — boards, veneers, strands — and gluing them back together in controlled layers. The result is stronger and more predictable than solid wood, can be made in almost any size, and can use the small, knotty, fast-grown plantation logs that Japan now has in abundance. This page explains the main products, the plywood mill in the mountains of Kashimo, and how engineered wood is changing what can be built with Gifu's forests.",
    ja:"製材は木に縛られている。その大きさ、節、動こうとする性質に。エンジニアードウッドは、丸太を小さな部分——板、単板、ストランド——に分け、管理された層にして接着し直すことで、その縛りを外す。できるものは無垢材より強く予測しやすく、ほとんどどんな大きさにもでき、いま日本にあふれている小さく節の多い速く育った人工林の丸太を使える。この頁は、主な製品、加子母の山のなかの合板工場、そしてエンジニアードウッドが岐阜の森で建てられるものをどう変えつつあるかを説明する。",
    zh:"製材受限於樹木本身：尺寸、節疤、易變形的性質。工程木材則把原木切成較小單元——板材、單板、木片——再以受控的層次重新膠合，突破這些限制。成品比實木更強、更可預測，幾乎可做成任何尺寸，還能利用日本如今大量擁有的小徑、多節、快速生長的人工林原木。本頁介紹主要產品、位於加子母山中的合板廠，以及工程木材如何改變以岐阜森林所能建造的事物。" },
  body:[
    { t:"section",
      id:"products",
      title:{ en:"The main products", ja:"主な製品", zh:"主要產品" },
      jp:"積層の考え方",
      body:[
        { t:"figure",
          caption:{
            en:"How four engineered-wood products are built up, schematic. Lines show the grain direction in each layer: glulam and LVL keep the grain parallel for strength along a beam; plywood and CLT cross it for stability in two directions.",
            ja:"四つのエンジニアードウッドの積み重ね方（模式図）。線はそれぞれの層の繊維の向き。集成材とLVLは梁の方向の強さのために繊維をそろえ、合板とCLTは二方向の安定のために直交させる。",
            zh:"四種工程木材的組成方式（示意）。線條表示各層的纖維方向：集成材與 LVL 保持纖維平行，以取得沿樑方向的強度；合板與 CLT 則使纖維交錯，以取得雙向穩定。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 250" role="img">';
            s += F.text(20, 28, lang==="en"?"LAYERS AND GRAIN":(lang==="ja"?"層と繊維の向き":"層次與紋理方向"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            var P = [
              [{ en:"Glulam", ja:"集成材", zh:"集成材" }, { en:"thick boards, grain parallel", ja:"厚い板・繊維平行", zh:"厚板，紋理平行" }, 6, [0,0,0,0,0,0], "#EDE5D2"],
              [{ en:"LVL", ja:"LVL", zh:"LVL" }, { en:"thin veneers, grain parallel", ja:"薄い単板・繊維平行", zh:"薄單板，紋理平行" }, 12, [0,0,0,0,0,0,0,0,0,0,0,0], "#E0E6DB"],
              [{ en:"Plywood", ja:"合板", zh:"合板" }, { en:"veneers, alternate layers crossed", ja:"単板・一層ごとに直交", zh:"單板，逐層交錯" }, 7, [0,1,0,1,0,1,0], "#E0E7E9"],
              [{ en:"CLT", ja:"CLT", zh:"CLT" }, { en:"boards, layers crossed", ja:"板・層ごとに直交", zh:"板材，逐層交錯" }, 5, [0,1,0,1,0], "#E6E4E0"]
            ];
            for (var i=0;i<P.length;i++){
              var x = 20 + i*185, y = 60, H = 120, n = P[i][2], h = H/n;
              for (var k=0;k<n;k++){
                var yy = y + k*h;
                s += '<rect x="'+x+'" y="'+yy.toFixed(1)+'" width="160" height="'+h.toFixed(1)+'" fill="'+P[i][4]+'" stroke="#8B857C"/>';
                if (P[i][3][k]===0) { s += '<line x1="'+(x+8)+'" y1="'+(yy+h/2).toFixed(1)+'" x2="'+(x+152)+'" y2="'+(yy+h/2).toFixed(1)+'" stroke="#A08F73" stroke-width="0.9"/>'; }
                else { for (var d=0; d<9; d++) s += '<circle cx="'+(x+12+d*17)+'" cy="'+(yy+h/2).toFixed(1)+'" r="1.6" fill="#A08F73"/>'; }
              }
              s += F.text(x, y+H+22, L(P[i][0]), { size:12.5, serif:true, fill:"#201E1B" });
              s += F.text(x, y+H+38, L(P[i][1]), { size:10, fill:"#55504A", max:30 });
            }
            s += F.text(20, 244, lang==="en"?"— grain along the page      ··· grain into the page":(lang==="ja"?"― 繊維が横方向      ··· 繊維が奥行き方向":"― 紋理沿頁面橫向      ··· 紋理垂直頁面"), { size:10, fill:"#55504A" });
            return s + '</svg>';
          } },
        { t:"defs",
          items:[
            { term:{ en:"Glued laminated timber (glulam)", ja:"集成材", zh:"集成材" },
              jp:"しゅうせいざい",
              def:{
                en:"Boards (laminae) about 2–4 cm thick, dried, graded, finger-jointed end to end and glued face to face with the grain parallel. Stiffer laminae go at the top and bottom of a beam where stresses are highest. Glulam posts and beams became the mainstream material for precut houses in Japan from the 1990s; for decades most were made from imported European spruce laminae, but domestic sugi, hinoki and larch glulam has grown steadily. In Gifu, glulam is made by a hinoki-house cooperative in Tōnō and by a woodworking company in Hida, among others.",
                ja:"厚さ二〜四センチほどの板（ラミナ）を乾かし、格付けし、長さ方向にフィンガージョイントでつなぎ、繊維をそろえて面どうしを接着したもの。剛いラミナを、応力が最も大きい梁の上と下に置く。集成材の柱と梁は、一九九〇年代から日本のプレカット住宅の主流の材料となった。長年その多くはヨーロッパのトウヒのラミナを輸入してつくられたが、国産のスギ・ヒノキ・カラマツの集成材も着実にふえてきた。岐阜では、東濃のヒノキの家の協同組合や飛騨の木工会社などがつくる。",
                zh:"將厚約 2–4 公分的板材（層板）乾燥、分級，以指接縱向接長，再在纖維平行的情況下面對面膠合而成。剛性較高的層板配置在樑的上下緣——應力最大之處。自 1990 年代起，集成柱與集成樑成為日本預切住宅的主流材料；數十年來多以進口歐洲雲杉層板製造，但國產柳杉、扁柏與落葉松集成材已穩定成長。在岐阜，東濃扁柏住宅協同組合與飛驒一家木工公司等皆有生產。" } },
            { term:{ en:"Plywood", ja:"合板", zh:"合板" },
              jp:"ごうはん",
              def:{
                en:"Thin veneers peeled from a rotating log like paper from a roll, dried and glued with the grain of each layer at right angles to the next. Japanese plywood was once made almost entirely from tropical hardwood logs — lauan from Southeast Asia; since the 2000s the industry has switched to domestic conifers, and structural sugi, hinoki and larch plywood now sheathes the walls and floors of most new houses.",
                ja:"回る丸太からロールの紙のようにむいた薄い単板を乾かし、層ごとに繊維を直交させて接着したもの。日本の合板はかつてほとんどが熱帯の広葉樹——東南アジアのラワン——の丸太でつくられたが、二〇〇〇年代から国産の針葉樹に切り替わり、いまではスギ・ヒノキ・カラマツの構造用合板が、ほとんどの新しい家の壁や床を覆っている。",
                zh:"將旋轉的原木像捲筒紙般旋切成薄單板，乾燥後以各層纖維互相垂直的方式膠合。日本合板過去幾乎全以熱帶闊葉原木——東南亞柳桉——製造；自 2000 年代起，產業轉向國產針葉樹，如今柳杉、扁柏與落葉松結構用合板覆蓋著大多數新建住宅的牆與樓板。" } },
            { term:{ en:"LVL", ja:"LVL（単板積層材）", zh:"LVL（單板層積材）" },
              jp:"たんぱんせきそうざい",
              def:{
                en:"Laminated veneer lumber: veneers like those of plywood but all laid with the grain in the same direction, making long, uniform beams and studs with defects dispersed through many thin layers.",
                ja:"合板と同じような単板を、すべて繊維を同じ向きにして重ねたもの。欠点が多くの薄い層に分散し、長く均質な梁や間柱になる。",
                zh:"單板層積材：使用類似合板的單板，但全部以相同纖維方向疊合，製成長而均質的樑與間柱，缺陷分散在許多薄層中。" } },
            { term:{ en:"CLT", ja:"CLT（直交集成板）", zh:"CLT（直交集成板）" },
              jp:"ちょっこうしゅうせいばん",
              def:{
                en:"Cross-laminated timber: large panels of boards glued in three, five or seven layers at right angles, up to several metres wide and over ten long. A JAS was established in 2013 and building rules in 2016. CLT serves as walls and floors in mid-rise buildings and is valued in Japan as a way to use large volumes of sugi.",
                ja:"直交集成板：板を三・五・七層に直交させて接着した大きなパネルで、幅は数メートル、長さは十メートルを超える。二〇一三年にJASが、二〇一六年に建築の基準が整えられた。中層建築の壁や床に使われ、日本では大量のスギを使う道として重んじられる。",
                zh:"直交集成板：將板材以三、五或七層直角交錯膠合而成的大型面板，寬可達數公尺、長逾十公尺。2013 年制定 JAS，2016 年建立建築基準。CLT 作為中層建築的牆與樓板，在日本被視為大量使用柳杉的途徑。" } }
          ] }
      ] },
    { t:"section",
      id:"kashimo",
      title:{ en:"A plywood mill in the mountains", ja:"山のなかの合板工場", zh:"山中的合板廠" },
      jp:"森の合板協同組合",
      body:[
        { t:"p",
          text:{
            en:"Japan's plywood mills traditionally stood on the coast, where ships unloaded tropical logs. When the industry turned to domestic timber, the logic reversed: the raw material now lay in the mountains. In the mid-2010s a group of companies, including the plywood maker Seihoku, formed the Mori no Gōhan (“Forest Plywood”) Cooperative and built a mill in Kashimo, in the heart of the Ura-Kiso hinoki forests — described by the cooperative as the first plywood mill in Japan to be built in a mountain district. It was reported to be running at over ninety per cent of capacity within two months of starting. It makes structural softwood plywood and a line of hinoki plywood for interiors, furniture and flooring, and it has given the forests of Tōnō a steady outlet for the bent and knotty B-grade logs that sawmills cannot use.",
            ja:"日本の合板工場は、もともと熱帯の丸太を船が下ろす海辺に立っていた。業界が国産材に向かうと、その論理は逆になった。原料はいまや山にあった。二〇一〇年代半ば、合板メーカーのセイホクなどの会社が森の合板協同組合をつくり、裏木曽のヒノキの森の中心、加子母に工場を建てた——組合によれば、日本で初めて山間部に建てられた合板工場である。動きはじめて二か月で稼働率が九割を超えたと伝えられた。構造用の針葉樹合板と、内装・家具・床の下地のためのヒノキ合板の製品群をつくり、東濃の森に、製材所が使えない曲がりや節の多いB材の安定した出口を与えた。",
            zh:"日本的合板廠傳統上設在海邊，方便船隻卸下熱帶原木。當產業轉向國產木材，邏輯便反轉了：原料如今在山裡。2010 年代中期，包括合板製造商 Seihoku 在內的幾家公司組成「森之合板協同組合」，在裏木曾扁柏林核心的加子母建廠——據該組合表示，這是日本第一座建於山區的合板廠。據報導，開工兩個月內稼動率即超過九成。它生產結構用針葉樹合板，以及供室內裝修、家具與地板底材使用的扁柏合板系列，為東濃森林中製材所無法使用的彎曲多節 B 級原木提供了穩定出路。" } }
      ] },
    { t:"section",
      id:"panels",
      title:{ en:"Panels, glues and indoor air", ja:"ボード、接着剤、室内の空気", zh:"板材、膠合劑與室內空氣" },
      jp:"F☆☆☆☆",
      body:[
        { t:"table",
          caption:{ en:"Wood-based products in Japanese buildings", ja:"日本の建物の木質材料", zh:"日本建築中的木質材料" },
          cols:[
            { en:"Product", ja:"製品", zh:"產品" },
            { en:"Made from", ja:"原料", zh:"原料" },
            { en:"Typical use", ja:"典型的な用途", zh:"典型用途" }
          ],
          rows:[
            [
              { en:"Glulam", ja:"集成材", zh:"集成材" },
              { en:"Dried, graded boards", ja:"乾燥・格付けした板", zh:"乾燥分級板材" },
              { en:"Posts, beams, arches, long spans", ja:"柱、梁、アーチ、大スパン", zh:"柱、樑、拱、大跨距" }
            ],
            [
              { en:"Structural plywood", ja:"構造用合板", zh:"結構用合板" },
              { en:"Rotary-peeled veneers", ja:"ロータリー単板", zh:"旋切單板" },
              { en:"Shear walls, floor and roof decks", ja:"耐力壁、床・屋根の下地", zh:"剪力牆、樓板與屋面底板" }
            ],
            [
              { en:"LVL", ja:"LVL", zh:"LVL" },
              { en:"Parallel veneers", ja:"平行の単板", zh:"平行單板" },
              { en:"Beams, studs, door and window frames", ja:"梁、間柱、建具の枠", zh:"樑、間柱、門窗框" }
            ],
            [
              { en:"CLT", ja:"CLT", zh:"CLT" },
              { en:"Cross-laid boards", ja:"直交させた板", zh:"交錯排列的板材" },
              { en:"Walls and floors of mid-rise buildings", ja:"中層建築の壁と床", zh:"中層建築的牆與樓板" }
            ],
            [
              { en:"Particleboard", ja:"パーティクルボード", zh:"粒片板" },
              { en:"Chips from offcuts and demolition wood", ja:"端材や解体材のチップ", zh:"邊角料與拆除木材的碎片" },
              { en:"Floor underlay, kitchen and furniture carcasses", ja:"床の下地、台所や家具の箱", zh:"地板底材、廚具與家具箱體" }
            ],
            [
              { en:"MDF", ja:"MDF（中密度繊維板）", zh:"MDF（中密度纖維板）" },
              { en:"Refined wood fibres", ja:"ほぐした木の繊維", zh:"精製木纖維" },
              { en:"Furniture, doors, mouldings", ja:"家具、扉、廻り縁", zh:"家具、門片、線板" }
            ],
            [
              { en:"Compressed wood", ja:"圧密木材", zh:"壓密木材" },
              { en:"Softened and pressed sugi or hinoki", ja:"軟らかくして圧したスギやヒノキ", zh:"軟化後壓縮的柳杉或扁柏" },
              { en:"Hard flooring, chairs, tabletops", ja:"硬い床材、椅子、天板", zh:"硬質地板、椅子、桌面" }
            ]
          ] },
        { t:"p",
          text:{
            en:"The glues matter as much as the wood. Structural glulam and CLT use weatherproof phenolic or isocyanate adhesives; plywood and boards traditionally used urea- or phenol-formaldehyde resins, which can release formaldehyde into indoor air. After a wave of “sick house” complaints in the 1990s, Japan's building law was revised in 2003 to limit formaldehyde emissions from interior materials, with the lowest-emission class marked F☆☆☆☆ (“F four stars”). The trademark rules for Hida furniture require the same class for any board or glue used.",
            ja:"接着剤は木と同じほど大事である。構造用の集成材やCLTは耐候性のあるフェノール系やイソシアネート系の接着剤を使い、合板やボードは伝統的に、室内の空気にホルムアルデヒドを出しうる尿素系やフェノール系のホルムアルデヒド樹脂を使ってきた。一九九〇年代の「シックハウス」の訴えの波ののち、日本の建築基準法は二〇〇三年に改められ、内装材からのホルムアルデヒドの放散を制限した。最も放散の少ない区分がF☆☆☆☆（Fフォースター）である。飛騨の家具の商標の決まりは、使うボードや接着剤すべてに同じ区分を求める。",
            zh:"膠合劑與木材同樣重要。結構用集成材與 CLT 使用耐候的酚醛類或異氰酸酯類膠合劑；合板與板材傳統上使用脲醛或酚醛甲醛樹脂，可能向室內空氣釋放甲醛。1990 年代「病態住宅」投訴浪潮之後，日本於 2003 年修訂建築基準法，限制室內建材的甲醛逸散，最低逸散等級標示為 F☆☆☆☆（F 四星）。飛驒家具商標規則要求所用的任何板材與膠合劑都須達到同一等級。" } }
      ] },
    { t:"section",
      id:"tall",
      title:{ en:"Building higher in wood", ja:"木で高く建てる", zh:"以木材建得更高" },
      jp:"中高層木造",
      body:[
        { t:"p",
          text:{
            en:"Engineered wood, fire-resistant timber members and changes in the building law have made it possible to build in wood at scales not seen in Japan since the great temples. Timber office buildings, schools, libraries and apartment blocks of four to eleven storeys have appeared since the late 2010s; in 2022 a general contractor completed an eleven-storey, 44-metre research and training building in Yokohama built entirely of timber in its structure, then the tallest of its kind in Japan. In Gifu, the most celebrated engineered timber structure is not tall but wide: the undulating hinoki lattice roof of the Gifu Media Cosmos library, assembled on site from thin boards. See <a href=\"building.html\">Building in Wood</a>.",
            ja:"エンジニアードウッド、耐火の木材部材、建築基準法の改正によって、日本では大寺院以来見られなかった規模で木造が建てられるようになった。二〇一〇年代の終わりから、四階から十一階の木造の事務所、学校、図書館、集合住宅が現れた。二〇二二年には、ある総合建設会社が横浜に、構造をすべて木でつくった十一階建て、高さ四十四メートルの研修施設を完成させ、当時その種で日本一の高さとなった。岐阜で最も名高いエンジニアードウッドの構造は、高くではなく広い。薄い板を現場で組んだ、ぎふメディアコスモスの図書館のうねるヒノキの格子屋根である。<a href=\"building.html\">木で建てる</a>を参照。",
            zh:"工程木材、耐火木構件與建築法規的修訂，使日本得以建造大寺院時代以來未見規模的木造建築。自 2010 年代後期起，四至十一層的木造辦公樓、學校、圖書館與公寓相繼出現；2022 年，一家綜合營造商在橫濱完成一棟結構全為木造、十一層、高 44 公尺的研修大樓，當時為日本同類建築中最高者。在岐阜，最著名的工程木構造不是高，而是寬：岐阜媒體宇宙（Gifu Media Cosmos）圖書館以薄板在現場組成的起伏扁柏格子屋頂。見<a href=\"building.html\">以木建造</a>。" } },
        { t:"note",
          label:{ en:"What engineered wood means for Gifu", ja:"岐阜にとっての意味", zh:"對岐阜的意義" },
          text:{
            en:"Engineered wood rewards volume and consistency rather than individual beauty — the opposite of the traditional Tōnō hinoki trade. For Gifu it is both an opportunity and a threat: it opens large new markets for ordinary plantation logs, including the B-grade logs that once went to waste, but it favours large, automated mills over the small family sawmills that made the prefecture's reputation. Much of Gifu's recent policy is an attempt to have both: engineered products for volume, and a premium market for the finest solid timber.",
            ja:"エンジニアードウッドは、一本ずつの美しさではなく量とそろいに報いる——伝統的な東濃ひのきの取引とは逆である。岐阜にとってそれは好機でもあり脅威でもある。かつて捨てられていたB材を含むふつうの人工林の丸太に大きな新しい市場を開くが、県の名を高めた小さな家業の製材所より、大きく自動化された工場に有利に働く。岐阜の近年の施策の多くは、その両方を得ようとする試みである。量にはエンジニアードウッドを、最上の無垢材には高級な市場を。",
            zh:"工程木材獎勵的是數量與一致性，而非個別之美——與傳統東濃扁柏交易正好相反。對岐阜而言，它既是機會也是威脅：它為一般人工林原木——包括過去被浪費的 B 級原木——開啟了龐大的新市場，卻有利於大型自動化工廠，而不利於成就本縣聲譽的小型家族製材所。岐阜近年政策很大一部分，正是試圖兩者兼得：以工程木材追求量，以高級市場承接最上等的實木。" } }
      ] },
    { t:"section",
      id:"making-glulam",
      title:{ en:"How glulam is made", ja:"集成材のつくり方", zh:"集成材如何製造" },
      jp:"ラミナ・フィンガージョイント・積層接着",
      body:[
        { t:"p",
          text:{
            en:"A glulam beam begins as ordinary sawn boards, the <em>laminae</em>. They are kiln-dried to about 15% moisture content or less — glue will not hold on wet wood, and a beam that dries after gluing will crack — and then graded, increasingly by machine: each board passes through a tester that bends it slightly or taps it and measures its stiffness. Knots, splits and resin pockets that would weaken a lamina are cut out, and the clear pieces are joined end to end with <em>finger joints</em>, interlocking wedge-shaped fingers milled into both ends, glued and pressed so that the joint is almost as strong as the wood. The long laminae are planed, coated with adhesive, stacked and clamped in a press until the glue cures; the block is then planed to size, cut, drilled for connectors if it is going to a precut plant, and inspected.",
            ja:"集成材の梁は、ふつうの挽き板である<em>ラミナ</em>から始まる。ラミナは含水率およそ十五パーセント以下まで人工乾燥される。濡れた木では接着が効かず、接着後に乾く梁は割れるからである。次に等級が分けられ、近年はますます機械によって行われる。一枚ずつ試験機を通し、わずかに曲げるかたたいて、そのヤング係数を測る。ラミナを弱める節、割れ、やにつぼは切り取られ、きれいな部分は<em>フィンガージョイント</em>で縦につながれる。両端に削り出したくさび形の指を組み合わせ、接着して圧締し、継ぎ目を木そのものとほとんど変わらない強さにする。長くなったラミナはかんながけされ、接着剤を塗られ、積み重ねられて、接着剤が硬化するまでプレスで締めつけられる。できた材は寸法どおりに削られ、切断され、プレカット工場へ行くものは金物用の穴をあけられ、検査を受ける。",
            zh:"集成材樑的起點是一般的鋸材板，即<em>層板</em>（lamina）。層板先以人工乾燥到含水率約 15% 以下——濕木無法膠合，膠合後才乾的樑會開裂——接著分級，且越來越多以機器進行：每片板通過測試機，以輕微彎曲或敲擊測出其彈性模數。會削弱層板的節、裂與樹脂囊被切除，乾淨的部分以<em>指接</em>縱向接長：在兩端銑出互相咬合的楔形指榫，上膠加壓，使接頭強度幾乎與木材本身相當。接長後的層板經刨光、塗膠、疊層，在壓機中夾緊至膠固化；成材再刨到尺寸、裁切，送往預切工廠者還要鑽好金屬接頭孔，最後檢驗。" } },
        { t:"figure",
          caption:{
            en:"The main steps in making structural glulam, schematic. Moisture figures are typical targets; plants differ in equipment and order.",
            ja:"構造用集成材をつくる主な工程（模式図）。含水率は代表的な目標値で、工場によって設備や順序は異なる。",
            zh:"製造結構用集成材的主要步驟（示意圖）。含水率為典型目標值；各廠設備與順序不同。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"From board to beam", ja:"板から梁へ", zh:"從板材到樑" }, per:4, bh:112,
            steps:[
              { t:{ en:"Saw and dry", ja:"製材と乾燥", zh:"鋸製與乾燥" }, d:{ en:"Boards kiln-dried to about 15% moisture or less.", ja:"板を含水率約15%以下まで人工乾燥する。", zh:"板材人工乾燥至含水率約 15% 以下。" } },
              { t:{ en:"Grade", ja:"等級区分", zh:"分級" }, d:{ en:"Stiffness measured board by board, often by machine.", ja:"一枚ずつヤング係数を測る。機械によることが多い。", zh:"逐片測定彈性模數，多以機器進行。" } },
              { t:{ en:"Cut out defects", ja:"欠点の除去", zh:"去除缺陷" }, d:{ en:"Large knots, splits and resin pockets removed.", ja:"大きな節、割れ、やにつぼを切り取る。", zh:"切除大節、裂紋與樹脂囊。" } },
              { t:{ en:"Finger-joint", ja:"フィンガージョイント", zh:"指接" }, d:{ en:"Short pieces joined end to end into long laminae.", ja:"短い材を縦につないで長いラミナにする。", zh:"短料縱向接成長層板。" } },
              { t:{ en:"Plane and glue", ja:"かんながけと塗布", zh:"刨光與塗膠" }, d:{ en:"Faces planed flat; adhesive spread on each lamina.", ja:"面を平らに削り、ラミナに接着剤を塗る。", zh:"刨平各面，在每片層板上塗膠。" } },
              { t:{ en:"Lay up and press", ja:"積層と圧締", zh:"疊層與加壓" }, d:{ en:"Stiffest laminae outside in beams; clamped until cured.", ja:"梁では強いラミナを外側に置き、硬化まで締める。", zh:"樑的外層放最強層板；夾緊至膠固化。" } },
              { t:{ en:"Finish and machine", ja:"仕上げと加工", zh:"修整與加工" }, d:{ en:"Planed to size, cut, drilled for connectors.", ja:"寸法に削り、切断し、金物の穴をあける。", zh:"刨至尺寸、裁切、鑽接頭孔。" } },
              { t:{ en:"Test and stamp", ja:"試験と表示", zh:"試驗與標示" }, d:{ en:"Delamination and shear tests on samples; JAS mark.", ja:"試験片ではく離・せん断試験を行い、JASマークを付ける。", zh:"取樣進行剝離與剪力試驗，加蓋 JAS 標章。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"standards",
      title:{ en:"Standards and strength classes", ja:"規格と強度等級", zh:"標準與強度等級" },
      jp:"日本農林規格（JAS）",
      body:[
        { t:"p",
          text:{
            en:"Each engineered product has its own Japanese Agricultural Standard — for glulam, plywood, LVL, structural panels and, since 2013, CLT — and a building designer can rely on a JAS product's stated strength only because the standard prescribes how it is made and tested. Glulam strength classes are written in a compact code: E95-F315, for example, means a modulus of elasticity of 9.5 kilonewtons per square millimetre and a bending strength of 31.5 newtons per square millimetre. Posts are usually made of laminae of a single grade throughout; beams use a mixed composition, with the stiffest laminae at the top and bottom faces where bending stresses are highest. Because glue lines are the weak point, factories regularly cut samples from production and soak them in water, or boil them and dry them again, then measure how far the glue lines have opened; other samples are sheared apart block by block to check that the wood fails before the glue does. The standard also classifies glulam by the environment it will serve in, from members exposed to weather or required to keep their strength in a fire down to dry interiors, and only the most durable adhesive types — resorcinol-based resins above all — are allowed for the most demanding uses.",
            ja:"エンジニアードウッドにはそれぞれの日本農林規格（JAS）がある。集成材、合板、LVL、構造用パネル、そして二〇一三年からはCLTである。設計者がJAS製品の表示する強度に頼れるのは、規格がつくり方と試験の仕方を定めているからにほかならない。集成材の強度等級は短い記号で書かれる。たとえばE95-F315は、ヤング係数が1平方ミリメートルあたり9.5キロニュートン、曲げ強さが1平方ミリメートルあたり31.5ニュートンであることを意味する。柱はふつう全層を同じ等級のラミナでつくる同一等級構成、梁は曲げの応力が最も大きい上下の面に最も強いラミナを置く異等級構成とする。接着層が弱点となるため、工場は生産品から試験片を定期的に切り出し、水に浸したり、煮沸して乾かし直したりして、接着層がどれだけ開いたかを測る。ほかの試験片はブロックごとにせん断して、接着剤より先に木が壊れることを確かめる。規格はまた、集成材を使う環境で区分する。風雨にさらされる部材や火災時にも強度を保たねばならない部材から、乾いた屋内まであり、最も厳しい用途にはレゾルシノール系樹脂を中心とする最も耐久性の高い接着剤だけが認められる。",
            zh:"每種工程木材都有自己的日本農林規格（JAS）——集成材、合板、LVL、結構用板材，以及自 2013 年起的 CLT——設計者之所以能信賴 JAS 產品標示的強度，正是因為規格規定了製造與試驗方法。集成材強度等級以簡短代碼表示：例如 E95-F315，表示彈性模數每平方公釐 9.5 千牛頓、抗彎強度每平方公釐 31.5 牛頓。柱通常全部以同一等級層板構成；樑則採異等級構成，把最強的層板放在彎曲應力最大的上下表面。由於膠層是弱點，工廠定期從產品切取試片，浸水或煮沸後再乾燥，測量膠層張開的程度；另有試片逐塊剪斷，確認木材先於膠層破壞。規格也依使用環境為集成材分類，從暴露於風雨或火災時仍須維持強度的構件，到乾燥室內不等；最嚴苛的用途只准使用耐久性最高的膠合劑，主要是間苯二酚系樹脂。" } }
      ] },
    { t:"section",
      id:"output",
      title:{ en:"How much Japan makes", ja:"日本の生産量", zh:"日本的產量" },
      jp:"令和六年木材統計",
      body:[
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Glulam", ja:"集成材", zh:"集成材" },
              v:{ en:"1.75 million m³", ja:"175万m³", zh:"175 萬 m³" },
              d:{
                en:"2024; 1.67 million m³ structural; 135 plants",
                ja:"二〇二四年、うち構造用167万m³、135工場",
                zh:"2024 年；其中結構用 167 萬 m³；135 廠" } },
            { k:{ en:"Plywood", ja:"合板", zh:"合板" },
              v:{ en:"2.51 million m³", ja:"251万m³", zh:"251 萬 m³" },
              d:{
                en:"2024, ordinary plywood; plus 0.49 million m³ special plywood; 154 plywood and veneer plants",
                ja:"二〇二四年の普通合板。ほかに特殊合板49万m³、合単板工場154",
                zh:"2024 年普通合板；另有特殊合板 49 萬 m³；合單板廠 154 家" } },
            { k:{ en:"LVL", ja:"LVL", zh:"LVL" },
              v:{ en:"208,000 m³", ja:"20.8万m³", zh:"20.8 萬 m³" },
              d:{ en:"2024, down 8.8% on 2023", ja:"二〇二四年、二〇二三年比8.8%減", zh:"2024 年，較 2023 年減 8.8%" } },
            { k:{ en:"CLT", ja:"CLT", zh:"CLT" },
              v:{ en:"21,000 m³", ja:"2.1万m³", zh:"2.1 萬 m³" },
              d:{ en:"2024, up 16.7% on 2023", ja:"二〇二四年、二〇二三年比16.7%増", zh:"2024 年，較 2023 年增 16.7%" } }
          ] },
        { t:"p",
          text:{
            en:"Set against each other, the numbers show where engineered wood really stands. Glulam and plywood are mature industries producing millions of cubic metres a year, and they now run largely on Japanese logs: in 2024, 88.1% of all logs supplied to Japanese mills of every kind were domestic. CLT, for all the attention it receives, is still a niche — about one-eightieth of glulam output — because each building needs design work, fire engineering and approvals that ordinary posts and beams do not. Oriented strand board, made from flakes of small logs pressed with the strands aligned in layers, is used in Japanese houses as roof and wall sheathing, but almost all of it is imported from North America and Europe; Japan's own panel industry chose structural plywood instead.",
            ja:"数字を並べると、エンジニアードウッドの実際の位置が見えてくる。集成材と合板は年に数百万立方メートルをつくる成熟した産業であり、いまや大部分を国産の丸太でまかなう。二〇二四年、あらゆる種類の国内の工場に供給された丸太の88.1パーセントが国産材だった。CLTは注目を集めながらも、なおすき間の製品で、生産量は集成材の約八十分の一にとどまる。ふつうの柱や梁と違い、建物ごとに設計、防耐火の検討、認定が必要だからである。小径木の薄片を層ごとに方向をそろえて圧締するOSBは、日本の住宅でも屋根や壁の下地に使われるが、そのほとんどは北米やヨーロッパからの輸入品である。日本の面材産業は構造用合板の道を選んだ。",
            zh:"把數字放在一起，就看得出工程木材的實際位置。集成材與合板是年產數百萬立方公尺的成熟產業，如今大多以日本原木為原料：2024 年，供應日本各類工廠的原木有 88.1% 為國產材。CLT 雖然備受矚目，仍屬利基產品——產量約為集成材的八十分之一——因為與一般柱樑不同，每棟建築都需要設計、防火檢討與認定。以小徑木薄片分層定向壓製的 OSB（定向纖維板）在日本住宅中也用於屋頂與牆面襯板，但幾乎全部從北美與歐洲進口；日本自己的板材產業選擇了結構用合板。" } }
      ] },
    { t:"section",
      id:"clt-gifu",
      title:{ en:"CLT in Gifu", ja:"岐阜のCLT", zh:"岐阜的 CLT" },
      jp:"森林技術・支援センター",
      body:[
        { t:"p",
          text:{
            en:"The clearest example of CLT in the prefecture is a working building rather than a showcase. In August 2022 the Forestry Agency's Chūbu regional forest office completed a new home for its Forest Technology and Support Centre in Gero, the unit that develops and tests methods for the national forests of central Japan. It is a single-storey office with a garage, 320.85 square metres in all, whose walls and ceilings are structural panels of domestic sugi CLT left exposed inside; it is heated by a boiler burning wood pellets. The building used 60.7 cubic metres of CLT and 52.5 cubic metres of other timber. With the Forestry Agency's method for stating the carbon stored in buildings — volume × basic density × carbon fraction × 44/12 — and the standard basic density for sugi of 0.314 tonnes per cubic metre, that is roughly 65 tonnes of CO₂, if all of the wood is sugi. The other prominent CLT structure in Gifu, <em>morinos</em> at the Forest Academy in Mino, is described on <a href=\"building.html\">Building in Wood</a>; for what such numbers do and do not mean, see <a href=\"carbon.html\">Forests &amp; Carbon</a>.",
            ja:"県内でCLTが最もはっきり見える例は、見せるための建物ではなく、実際に働く建物である。二〇二二年八月、林野庁中部森林管理局は、中部の国有林のための技術を開発し試す森林技術・支援センターの新しい庁舎を下呂市に完成させた。事務所と車庫からなる平屋で延べ320.85平方メートル、壁と天井は国産のスギCLTの構造パネルを室内に現しとし、暖房には木質ペレットのボイラーを使う。使われた木材はCLTが60.7立方メートル、ほかの木材が52.5立方メートルである。林野庁が示す建物の炭素貯蔵量の算定方法——材積×容積密度×炭素含有率×44/12——と、スギの標準的な容積密度1立方メートルあたり0.314トンを使うと、すべてスギとしておよそ65トンのCO₂になる。県内のもう一つの代表的なCLT建築である美濃の森林文化アカデミーの「morinos」については<a href=\"building.html\">木で建てる</a>で述べた。こうした数字が何を意味し何を意味しないかは<a href=\"carbon.html\">森と炭素</a>を参照。",
            zh:"縣內最清楚的 CLT 實例，是一棟實際使用的建築，而非展示品。2022 年 8 月，林野廳中部森林管理局在下呂市完成其「森林技術・支援中心」的新廳舍——該單位負責為中部國有林開發與測試作業技術。這是一棟含車庫的單層辦公建築，總樓地板面積 320.85 平方公尺，牆與天花板為國產柳杉 CLT 結構板，室內外露；暖氣使用木質顆粒燃料鍋爐。建築使用 CLT 60.7 立方公尺、其他木材 52.5 立方公尺。依林野廳的建築儲碳計算法——材積 × 基本密度 × 含碳率 × 44/12——並採柳杉標準基本密度每立方公尺 0.314 公噸，若全為柳杉，約合 65 公噸 CO₂。岐阜另一處代表性 CLT 建築，即美濃森林文化學院的「morinos」，見<a href=\"building.html\">以木建造</a>；這類數字的意義與限制，見<a href=\"carbon.html\">森林與碳</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Agriculture, Forestry and Fisheries, Timber Statistics 2024; Cabinet Secretariat CLT window, “Buildings using CLT (public buildings)”; Chūbu Regional Development Bureau (MLIT), project sheet for the Forest Technology and Support Centre (2022). Carbon estimate: this book's calculation.",
            ja:"出典：農林水産省「令和六年（二〇二四年）木材統計」、内閣官房CLT活用促進窓口「CLTを使用した建築物（公共建築物編）」、国土交通省中部地方整備局 森林技術・支援センター事業概要（二〇二二年）。炭素量は本書による試算。",
            zh:"資料來源：農林水產省 2024 年木材統計、內閣官房 CLT 窗口〈使用 CLT 的建築（公共建築篇）〉、國土交通省中部地方整備局 森林技術・支援中心工程概要（2022 年）。碳量為本書試算。" } }
      ] },
    { t:"related",
      items:[
        { href:"sugi.html",
          why:{ en:"Why engineered wood matters for sugi.", ja:"スギにとってエンジニアードウッドが大事な理由。", zh:"工程木材為何對柳杉重要。" } },
        { href:"building.html", why:{ en:"What is being built with it.", ja:"それで何が建てられているか。", zh:"用它建造了什麼。" } },
        { href:"grading.html",
          why:{ en:"The grading that makes it reliable.", ja:"それを信頼できるものにする格付け。", zh:"使其可靠的分級制度。" } },
        { href:"properties.html",
          why:{ en:"Wood in fire and the burning margin.", ja:"火のなかの木と燃えしろ。", zh:"火中的木材與燃燒餘裕。" } }
      ] }
  ] };

/* ---- ------------------------------------------ building */
GIFU.pages["building"] = { kicker:{ en:"Timber · 09", ja:"木材 · 09", zh:"木材 · 09" },
  title:{ en:"Building with Wood", ja:"木で建てる", zh:"以木建造" },
  jp:"民家・町家・社寺・現代建築",
  lede:{
    en:"Gifu's history can be read in its wooden buildings: a sutra hall of 1408 with the oldest revolving bookcase in Japan, the steep thatched farmhouses of Shirakawa-gō, the merchant houses of Takayama rebuilt after the fire of 1875, village kabuki theatres built by the farmers who acted in them, and, since 2015, a library roofed with a rolling lattice of Tōnō hinoki. This page surveys the prefecture's timber architecture from the medieval to the present, and explains how houses are built in Gifu today.",
    ja:"岐阜の歴史は、その木の建物に読みとれる。日本最古の回転する経蔵をもつ一四〇八年の経蔵、白川郷の急な茅葺きの農家、一八七五年の大火のあとに建て直された高山の商家、演じる農民自身が建てた村の芝居小屋、そして二〇一五年からは、東濃ひのきのうねる格子で屋根をかけた図書館。この頁は、中世から現代までの県の木の建築を見わたし、いま岐阜で家がどう建てられているかを説明する。",
    zh:"岐阜的歷史可以從它的木造建築中讀出：一座建於 1408 年、擁有日本最古老旋轉經架的經藏；白川鄉陡峭的茅草農舍；1875 年大火後重建的高山商家；由親自登台演出的農民所建的村落歌舞伎劇場；以及自 2015 年起，以東濃扁柏起伏格子為屋頂的圖書館。本頁綜覽本縣從中世到當代的木構建築，並說明如今岐阜如何建造住宅。" },
  body:[
    { t:"section",
      id:"heritage",
      title:{ en:"A heritage in timber", ja:"木の遺産", zh:"木造遺產" },
      jp:"国宝・重要文化財",
      body:[
        { t:"table",
          caption:{ en:"Selected historic timber buildings in Gifu", ja:"岐阜の主な歴史的木造建築", zh:"岐阜代表性歷史木造建築" },
          cols:[
            { en:"Building", ja:"建物", zh:"建築" },
            { en:"Place", ja:"場所", zh:"地點" },
            { en:"Date", ja:"年代", zh:"年代" },
            { en:"Status and note", ja:"指定と特色", zh:"指定與特色" }
          ],
          rows:[
            [
              { en:"Ankokuji sutra hall", ja:"安国寺経蔵", zh:"安國寺經藏" },
              { en:"Takayama", ja:"高山市", zh:"高山市" },
              "1408",
              {
                en:"National Treasure (1958); houses Japan's oldest octagonal revolving sutra case; bark-shingle roof",
                ja:"国宝（一九五八年）。日本最古の八角の輪蔵を納める。柿葺き",
                zh:"國寶（1958）；收藏日本最古老的八角形旋轉經架；木瓦屋頂" }
            ],
            [
              { en:"Eihōji founder's hall and Kannon hall", ja:"永保寺 開山堂・観音堂", zh:"永保寺開山堂與觀音堂" },
              { en:"Tajimi", ja:"多治見市", zh:"多治見市" },
              { en:"14th century", ja:"十四世紀", zh:"十四世紀" },
              {
                en:"National Treasures; Zen temple buildings beside the Toki River",
                ja:"国宝。土岐川のほとりの禅宗寺院の建物",
                zh:"國寶；土岐川畔的禪宗寺院建築" }
            ],
            [
              { en:"Wada house", ja:"和田家住宅", zh:"和田家住宅" },
              { en:"Shirakawa-gō", ja:"白川村", zh:"白川村" },
              { en:"Late Edo", ja:"江戸後期", zh:"江戶後期" },
              {
                en:"Important Cultural Property; largest gasshō house of Ogimachi, 22.3 × 12.8 m",
                ja:"重要文化財。荻町最大の合掌造り、二二・三×一二・八メートル",
                zh:"重要文化財；荻町最大的合掌造，22.3 × 12.8 公尺" }
            ],
            [
              { en:"Kusakabe house", ja:"日下部家住宅", zh:"日下部家住宅" },
              { en:"Takayama", ja:"高山市", zh:"高山市" },
              "1879",
              {
                en:"Important Cultural Property; merchant house by master carpenter Kawajiri Jisuke",
                ja:"重要文化財。棟梁川尻治助による商家",
                zh:"重要文化財；棟樑川尻治助所建商家" }
            ],
            [
              { en:"Yoshijima house", ja:"吉島家住宅", zh:"吉島家住宅" },
              { en:"Takayama", ja:"高山市", zh:"高山市" },
              "1907–08",
              {
                en:"Important Cultural Property; sake brewer's house famous for its lattice of beams under a high atrium",
                ja:"重要文化財。高い吹き抜けに組まれた梁の格子で名高い酒造家の家",
                zh:"重要文化財；以挑高空間中交錯樑架聞名的釀酒世家住宅" }
            ],
            [
              { en:"Murakuni-za", ja:"村国座", zh:"村國座" },
              { en:"Kakamigahara", ja:"各務原市", zh:"各務原市" },
              "1877",
              {
                en:"Important Tangible Folk Cultural Property; village kabuki stage",
                ja:"重要有形民俗文化財。村の歌舞伎舞台",
                zh:"重要有形民俗文化財；村落歌舞伎舞台" }
            ],
            [
              { en:"Kashimo Meiji-za", ja:"かしも明治座", zh:"加子母明治座" },
              { en:"Nakatsugawa (Kashimo)", ja:"中津川市加子母", zh:"中津川市加子母" },
              "1894",
              {
                en:"Prefectural folk property; revolving stage; roof restored to bark shingles in 2015",
                ja:"県指定民俗文化財。回り舞台。二〇一五年に屋根を板葺きに戻した",
                zh:"縣指定民俗文化財；旋轉舞台；2015 年屋頂恢復為木瓦" }
            ]
          ] },
        { t:"p",
          text:{
            en:"What unites these buildings is a post-and-beam frame of solid timber held together by joinery, with walls that carry little or no load. Their form varies with climate and purpose: the steep thatched roofs of Shirakawa shed two metres of snow and house silkworms in their attics; the Takayama townhouses present a dark, latticed street front and open inwards to light-filled rooms and gardens; the kabuki theatres span a wide auditorium with timbers that the villagers themselves cut and hauled.",
            ja:"これらの建物をつなぐのは、仕口で組まれた無垢材の柱と梁の軸組と、ほとんど、あるいはまったく荷重を担わない壁である。その形は気候と用途で変わる。白川の急な茅葺きの屋根は二メートルの雪を落とし、屋根裏に蚕を飼う。高山の町家は、暗い格子の表を通りに向け、内側では光に満ちた部屋と庭に開く。芝居小屋は、村人自身が伐って運んだ材で広い客席をまたぐ。",
            zh:"這些建築的共通點，是以接合技術組成的實木柱樑骨架，以及幾乎或完全不承重的牆。其形式隨氣候與用途而異：白川陡峭的茅草屋頂能卸下兩公尺的積雪，閣樓裡養著蠶；高山町家臨街一面是深色格柵，向內則開向充滿光線的房間與庭院；歌舞伎劇場以村民親手伐採、搬運的木材跨越寬廣的觀眾席。" } }
      ] },
    { t:"section",
      id:"cosmos",
      title:{ en:"A roof of hinoki: Gifu Media Cosmos", ja:"ヒノキの屋根：ぎふメディアコスモス", zh:"扁柏屋頂：岐阜媒體宇宙" },
      jp:"みんなの森",
      body:[
        { t:"p",
          text:{
            en:"In July 2015 Gifu city opened “Minna no Mori” Gifu Media Cosmos, a library and civic centre designed by Toyo Ito, who had received the Pritzker Architecture Prize in 2013. Its most remarkable element is the roof: an 80-by-90-metre undulating timber lattice that rises and dips in gentle domes, built entirely of Tōnō hinoki. Rather than bending large laminated members in a factory, the builders laid thin, narrow hinoki boards in layers on site, crossing them in three directions to form a triangulated grid and gluing and fixing them together so that the lattice itself became a curved structural shell. Beneath the roof hang eleven large translucent fabric “globes” that draw light down and air up.",
            ja:"二〇一五年七月、岐阜市は「みんなの森 ぎふメディアコスモス」を開いた。二〇一三年にプリツカー賞を受けた伊東豊雄が設計した図書館と市民の施設である。最も目を引くのは屋根である。八十×九十メートルのうねる木の格子で、ゆるやかな丸屋根をつくりながら起伏し、すべて東濃ひのきでつくられている。工場で大きな集成材を曲げるのではなく、施工者は薄く細いヒノキの板を現場で層に重ね、三方向に交差させて三角形の格子とし、接着し留めて、格子そのものを曲面の構造の殻とした。屋根の下には、光を下ろし空気を上げる大きな半透明の布の「グローブ」が十一吊られている。",
            zh:"2015 年 7 月，岐阜市啟用由 2013 年普立茲克建築獎得主伊東豊雄設計的圖書館兼市民中心——「大家的森林」岐阜媒體宇宙（Gifu Media Cosmos）。其最引人注目的是屋頂：一片 80 × 90 公尺的起伏木格子，起伏成一座座平緩的圓頂，全以東濃扁柏建成。施工者並非在工廠彎曲大型集成材，而是在現場把薄而窄的扁柏板分層鋪設，沿三個方向交錯形成三角形網格，並加以膠合與固定，使格子本身成為曲面結構殼。屋頂下方懸掛著十一個大型半透明布製「球罩」，把光引下、把空氣導上。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Roof", ja:"屋根", zh:"屋頂" },
              v:"80 × 90 m",
              d:{ en:"Undulating; 11 fabric globes hang beneath", ja:"起伏する屋根。下に布のグローブが十一", zh:"起伏的屋頂，下懸十一個布製球罩" } },
            { k:{ en:"Boards", ja:"板", zh:"板材" },
              v:{ en:"12 cm × 2 cm × 12 m", ja:"幅12cm・厚2cm・長12m", zh:"12 公分 × 2 公分 × 12 公尺" },
              d:{ en:"Tōnō hinoki, layered in three directions", ja:"東濃ひのきを三方向に重ねる", zh:"東濃扁柏，沿三方向疊層" } },
            { k:{ en:"Builders", ja:"大工", zh:"工匠" },
              v:"160",
              d:{
                en:"Carpenters, by published accounts; about 23,000 computed coordinates set out the curves",
                ja:"大工（公表された記述による）。約二万三千の計算された座標で曲面を割りつけた",
                zh:"名木匠（據公開資料）；約兩萬三千個計算座標定出曲面" } },
            { k:{ en:"First year", ja:"最初の一年", zh:"第一年" },
              v:{ en:"1.2 million", ja:"百二十万人", zh:"120 萬人次" },
              d:{ en:"Visitors to the building, about", ja:"施設の来館者（約）", zh:"館舍參觀人次（約）" } }
          ] },
        { t:"tiny",
          text:{
            en:"Opened 18 July 2015; total floor area 15,295 m². Source: Gifu city and published descriptions of the building.",
            ja:"二〇一五年七月十八日開館。延床面積一万五千二百九十五平方メートル。出典：岐阜市、建物について公表された資料。",
            zh:"2015 年 7 月 18 日開館；總樓地板面積 15,295 平方公尺。資料來源：岐阜市及已公開的建築介紹。" } }
      ] },
    { t:"section",
      id:"house",
      title:{ en:"How a Gifu house is built today", ja:"いまの岐阜の家の建て方", zh:"今日岐阜住宅如何興建" },
      jp:"在来軸組工法",
      body:[
        { t:"p",
          text:{
            en:"More than half of Japan's new homes, and the great majority of its detached houses, are built of wood. Most use the traditional post-and-beam frame, <em>zairai jikugumi</em>, updated with precut joints, metal connectors and plywood-sheathed shear walls to meet earthquake standards; a smaller share uses North American two-by-four framing or factory-built panels. In Gifu, many local builders still specify Tōnō hinoki for the sill and posts, where durability and appearance matter most, and sugi, larch or glulam for beams and floors. The prefecture's subsidy for new houses built with certified Gifu timber supports a few hundred such houses a year.",
            ja:"日本の新しい住宅の半分以上、そして一戸建ての大多数は木で建てられる。多くは伝統の軸組、在来軸組工法で、プレカットの仕口、金物、合板を張った耐力壁で地震の基準を満たすよう改められている。より少ない割合は北米の枠組壁工法（ツーバイフォー）や工場でつくるパネルを使う。岐阜では、多くの地元の工務店が、耐久性と見た目が最も大事な土台と柱にいまも東濃ひのきを指定し、梁や床にはスギ、カラマツ、集成材を使う。岐阜の証明材で建てる新築への県の補助は、年に数百戸のそうした家を支えている。",
            zh:"日本過半數的新建住宅、以及絕大多數獨棟住宅都是木造。多數採用傳統柱樑骨架「在來軸組工法」，並以預切接合、金屬連接件與合板覆面剪力牆加以更新，以符合耐震標準；較少部分採用北美 2×4 框組壁工法或工廠預製板。在岐阜，許多在地營造商仍指定以東濃扁柏作為最重視耐久與外觀的地檻與柱，樑與樓板則用柳杉、落葉松或集成材。縣府對使用岐阜證明材之新建住宅的補助，每年支持數百戶這樣的住宅。" } },
        { t:"figure",
          caption:{
            en:"The sequence of building a timber-frame house in Japan. The frame itself is raised in a single day, after which a small ceremony traditionally marks the placing of the ridge beam.",
            ja:"日本の木造軸組の家を建てる手順。軸組そのものは一日で組み上がり、そのあと棟木を上げたことを祝う小さな儀式が伝統的に行われる。",
            zh:"日本木造軸組住宅的興建順序。骨架本身一天內就能立起，之後傳統上會舉行小型儀式，紀念上樑。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Raising a house", ja:"家を建てる", zh:"建起一棟房子" }, per:4, bh:112,
            steps:[
              { t:{ en:"Foundation", ja:"基礎", zh:"基礎" }, d:{ en:"Reinforced-concrete strip or raft foundation.", ja:"鉄筋コンクリートの布基礎やべた基礎。", zh:"鋼筋混凝土條形或筏式基礎。" } },
              { t:{ en:"Sill", ja:"土台", zh:"地檻" }, d:{ en:"Hinoki or treated timber bolted to the foundation.", ja:"ヒノキや防腐処理材を基礎にボルトで留める。", zh:"以扁柏或防腐處理材用螺栓固定在基礎上。" } },
              { t:{ en:"Frame raising", ja:"建て方", zh:"立架" }, d:{ en:"Posts, beams and rafters erected by crane and crew in a day.", ja:"柱・梁・垂木をクレーンと職人で一日で組む。", zh:"柱、樑與椽由吊車與工班在一天內立起。" } },
              { t:{ en:"Ridge ceremony", ja:"上棟式", zh:"上樑式" }, d:{ en:"Thanks to the gods and to the carpenters.", ja:"神々と大工への感謝。", zh:"感謝神明與木匠。" } },
              { t:{ en:"Roof and sheathing", ja:"屋根と面材", zh:"屋頂與覆面" }, d:{ en:"Roof finished first to keep the frame dry; plywood shear walls.", ja:"まず屋根を仕上げて軸組を濡らさない。合板の耐力壁。", zh:"先完成屋頂以保持骨架乾燥；設置合板剪力牆。" } },
              { t:{ en:"Insulation and windows", ja:"断熱と窓", zh:"隔熱與窗" }, d:{ en:"Modern standards demand far more than old houses had.", ja:"いまの基準は昔の家よりはるかに多くを求める。", zh:"現代標準的要求遠高於舊式住宅。" } },
              { t:{ en:"Interior", ja:"内装", zh:"室內裝修" }, d:{ en:"Floors, walls and ceilings — often in exposed Gifu sugi or hinoki.", ja:"床・壁・天井——しばしば岐阜のスギやヒノキを見せて。", zh:"地板、牆與天花板——常以外露的岐阜柳杉或扁柏。" } },
              { t:{ en:"Joinery and fittings", ja:"建具", zh:"建具" }, d:{ en:"Doors, shoji and built-in furniture by specialist makers.", ja:"扉、障子、造りつけの家具を専門の職人が。", zh:"門、障子與固定家具由專業工匠製作。" } }
            ] }); } },
        { t:"defs",
          items:[
            { term:{ en:"The village builder", ja:"村の工務店", zh:"村落營造商" },
              jp:"中島工務店",
              def:{
                en:"In Kashimo, a construction company founded in 1956 builds houses, public buildings, shrines and temples from local Tōnō hinoki, and has deliberately diversified — into precut, farming and other businesses — to keep work and young people in a depopulating mountain village. It is one of several Gifu builders that link the forest, the sawmill and the carpenter within a single community.",
                ja:"加子母では、一九五六年に創業した建設会社が、地元の東濃ひのきで住宅、公共建築、社寺を建て、人の減る山村に仕事と若い人をとどめるため、プレカットや農業などへあえて事業を広げてきた。森と製材所と大工を一つの共同体のなかでつなぐ、岐阜のいくつかの工務店の一つである。",
                zh:"在加子母，一家創立於 1956 年的營造公司以在地東濃扁柏興建住宅、公共建築與寺社，並刻意多角化——跨入預切、農業等事業——以便在人口減少的山村留住工作與年輕人。它是岐阜數家把森林、製材所與木匠串連在同一社區中的營造商之一。" } },
            { term:{ en:"Wood-using facilities", ja:"ぎふの木づかい施設", zh:"岐阜木材利用設施" },
              jp:"認定制度",
              def:{
                en:"The prefecture recognises shops, offices, clinics and other buildings that use Gifu timber visibly; more than a hundred have been recognised. See <a href=\"woodfirst.html\">Putting Wood to Use</a>.",
                ja:"県は、岐阜の木を目に見えるかたちで使う店、事務所、診療所などを認定している。認定は百を超える。<a href=\"woodfirst.html\">木づかい</a>を参照。",
                zh:"縣府認定以可見方式使用岐阜木材的店舖、辦公室、診所等建築；已有超過一百處獲得認定。見<a href=\"woodfirst.html\">用木之道</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"campus",
      title:{ en:"Buildings that teach", ja:"教える建物", zh:"會教學的建築" },
      jp:"森林文化アカデミー・木遊館",
      body:[
        { t:"p",
          text:{
            en:"Some of Gifu's most interesting recent timber buildings are educational. The Gifu Academy of Forest Science and Culture in Mino, opened in 2001, was built largely of local timber as a demonstration of what could be done with it, and its students have designed and built further buildings on the campus as part of their training. In 2020 the prefecture opened <em>morinos</em>, a forest education centre on the same campus, and it also runs a wooden play facility for children in Gifu city — both part of its programme of <em>mokuiku</em> — “wood education”. The idea is that people who have grown up touching, smelling and building with wood will want to live and work with it.",
            ja:"岐阜の近年の木造建築で最も興味深いものの一部は、学びのための建物である。二〇〇一年に開校した美濃の岐阜県立森林文化アカデミーは、地元の木で何ができるかを示すため、その多くを地元の材で建てられ、学生は研修の一部としてキャンパスにさらに建物を設計し建ててきた。二〇二〇年、県は同じキャンパスに森林総合教育センター「morinos」を開き、岐阜市では子どもが木で遊ぶ施設も営む。いずれも木育——木の教育——の取り組みの一部である。木に触れ、匂いをかぎ、木で何かをつくって育った人は、木とともに暮らし働きたいと思うだろう、という考えである。",
            zh:"岐阜近年最有意思的木造建築中，有一部分是教育設施。2001 年在美濃開校的岐阜縣立森林文化學院，大量以在地木材建造，以示範木材的可能性；學生們也在培訓中於校園內設計並建造更多建築。2020 年，縣府在同一校園啟用森林綜合教育中心「morinos」，並在岐阜市經營兒童木製遊戲設施，兩者都屬於「木育」——木材教育——計畫的一部分。其理念是：從小觸摸、嗅聞並以木材動手創作長大的人，將會想與木材一起生活和工作。" } },
        { t:"note",
          label:{ en:"Earthquakes and wood", ja:"地震と木", zh:"地震與木材" },
          text:{
            en:"The Nōbi earthquake of 1891, centred in Gifu and the largest inland earthquake in Japan's recorded history, destroyed tens of thousands of houses and prompted the first modern Japanese research on earthquake-resistant construction. Timber frames have been strengthened repeatedly since, especially after the Kobe earthquake of 1995; a well-designed modern timber house is among the safest buildings in an earthquake, because it is light and its many joints dissipate energy.",
            ja:"一八九一年の濃尾地震は岐阜を震央とし、日本の記録のうえで最大の内陸の地震で、何万もの家を壊し、日本で初めての近代的な耐震構造の研究を促した。木造の軸組はそれ以来、とくに一九九五年の阪神・淡路大震災のあとにくり返し強くされてきた。よく設計された現代の木造住宅は、地震のなかで最も安全な建物の一つである。軽く、多くの仕口がエネルギーを散らすからである。",
            zh:"1891 年的濃尾地震震央在岐阜，是日本有紀錄以來最大的內陸地震，摧毀數萬棟房屋，並促成日本首批現代耐震構造研究。此後木構骨架一再強化，尤其在 1995 年阪神大地震之後；設計良好的現代木造住宅是地震中最安全的建築之一，因為它輕，而且眾多接合能消散能量。" } }
      ] },
    { t:"section",
      id:"systems",
      title:{ en:"Three ways to frame a building", ja:"三つの構法", zh:"三種結構工法" },
      jp:"軸組・枠組壁・CLT",
      body:[
        { t:"p",
          text:{
            en:"Japan builds more of its homes in wood than most industrial countries. In FY2021, 59 per cent of all new dwellings started in Japan, and 91 per cent of new detached houses, were timber-framed. Of those timber dwellings, 79 per cent used the post-and-beam frame, 19 per cent the North American platform frame known in Japan as “two-by-four”, and 2 per cent factory-made timber panels. A third structural system, cross-laminated timber (CLT), hardly appears in houses but is changing what can be built above them. About 80 per cent of all buildings of one to three storeys are built in wood; above that the share falls sharply.",
            ja:"日本は、多くの工業国より多くの住宅を木で建てる。二〇二一年度、日本で着工した新設住宅の五九％、新設の一戸建ての九一％が木造だった。木造住宅のうち七九％が軸組構法、一九％が北米の枠組壁工法（ツーバイフォー）、二％が工場でつくる木質パネルのプレハブである。第三の構造であるCLT（直交集成板）は住宅にはほとんど現れないが、その上の規模で建てられるものを変えつつある。一〜三階建ての建築物ではおよそ八割が木造だが、それより高くなると割合は急に下がる。",
            zh:"日本以木材興建住宅的比例高於多數工業國家。2021 年度，日本新開工住宅的 59%、新建獨棟住宅的 91% 為木造。木造住宅中，79% 採用軸組工法，19% 採用日本稱為「2×4」的北美框組壁工法，2% 為工廠製造的木質板材預鑄住宅。第三種結構系統 CLT（直交集成板）在住宅中幾乎看不到，卻正在改變更大規模建築的可能性。一至三層的建築約有八成為木造，再往上比例便急遽下降。" } },
        { t:"compare",
          cols:3,
          items:[
            { title:{ en:"Post-and-beam", ja:"軸組構法", zh:"軸組工法" },
              jp:"在来軸組",
              text:{
                en:"Posts, usually 105 or 120 mm square, stand on a sill on a grid derived from the old 910 mm module; beams span between them. Earthquake and wind resistance come from braced or plywood-sheathed walls. Plans are flexible and easy to alter, and the frame can be left exposed — which is why Gifu builders specify Tōnō hinoki where it shows.",
                ja:"多くは一〇五ミリか一二〇ミリ角の柱を、昔の九一〇ミリのモジュールに由来する格子の上で土台に立て、そのあいだに梁を架ける。地震と風への強さは、筋かいや合板を張った壁が担う。間取りの自由がきき、改修もしやすく、軸組を見せることもできる。岐阜の工務店が見える所に東濃ひのきを指定するのはそのためである。",
                zh:"柱通常為 105 或 120 公釐見方，立於地檻上，柱網源自舊有的 910 公釐模數，樑架於柱間。抗震與抗風依靠斜撐牆或合板覆面牆。平面靈活、易於改修，骨架也可外露——這正是岐阜營造商在看得見之處指定東濃扁柏的原因。" } },
            { title:{ en:"Two-by-four", ja:"枠組壁工法", zh:"框組壁工法" },
              jp:"ツーバイフォー",
              text:{
                en:"Opened to general use in Japan in 1974. Studs of standard dimension lumber, 38 × 89 mm in section, are nailed to plywood or OSB sheathing to make walls and floors that act as stiff boxes. It needs less carpentry skill, but walls are harder to move later. The lumber has mostly been imported spruce-pine-fir; Japanese sugi and larch studs are now also made.",
                ja:"日本では一九七四年に一般に開かれた工法である。断面三八×八九ミリの規格材のたて枠を合板やOSBの面材に釘で打ちつけ、壁と床を硬い箱として働かせる。大工の熟練をあまり要しないが、あとで壁を動かしにくい。材は主に輸入のSPFだったが、国産のスギやカラマツの規格材もつくられるようになった。",
                zh:"日本於 1974 年開放一般使用。以斷面 38 × 89 公釐的規格材立柱，用釘固定在合板或 OSB 覆面板上，使牆與樓板成為剛性箱體。所需木工技術較少，但日後難以移動牆體。用材多為進口 SPF，如今也生產日本柳杉與落葉松的規格材。" } },
            { title:{ en:"CLT", ja:"CLT", zh:"CLT" },
              jp:"直交集成板",
              text:{
                en:"Layers of boards glued crosswise into thick solid panels that serve as walls, floors and roofs, with openings cut by machine before delivery. A Japanese Agricultural Standard for CLT followed in 2013 and general design rules in 2016. In Gifu, the Forest Academy's education centre <em>morinos</em> (2020) combines CLT with long-span glulam. See <a href=\"engineered.html\">Engineered wood</a>.",
                ja:"板を直交させて層に接着した厚い無垢のパネルで、壁・床・屋根に使い、開口は出荷前に機械で切る。二〇一三年にCLTの日本農林規格ができ、二〇一六年に一般的な設計法が告示された。岐阜では森林文化アカデミーの森林総合教育センター「morinos」（二〇二〇年）がCLTと長スパンの集成材を組み合わせている。<a href=\"engineered.html\">エンジニアードウッド</a>を参照。",
                zh:"把板材直交分層膠合成厚實的實心板，作為牆、樓板與屋頂，開口在出廠前以機器切好。日本於 2013 年制定 CLT 的日本農林規格，2016 年公告一般設計法。在岐阜，森林文化學院的森林綜合教育中心「morinos」（2020 年）結合了 CLT 與長跨距集成材。見<a href=\"engineered.html\">工程木材</a>。" } }
          ] },
        { t:"p",
          text:{
            en:"Behind the first two systems stand the precut factories, where the frame drawn on a computer drives machines that cut every member and joint. By FY2020 about 93 per cent of post-and-beam houses were framed with precut timber. The carpenter's work on site has shifted from cutting to assembling, fitting and finishing; how the mills adapted is told on the <a href=\"sawmill.html\">sawmill</a> page and the joints themselves on <a href=\"joinery.html\">joinery</a>.",
            ja:"はじめの二つの構法の後ろには、プレカット工場がある。コンピューターで描いた軸組のデータが機械を動かし、部材と仕口をすべて刻む。二〇二〇年度には、軸組構法の住宅の約九三％がプレカット材で組まれた。現場の大工の仕事は、刻みから、組み立て・納め・仕上げへと移った。製材所がどう応じたかは<a href=\"sawmill.html\">製材</a>の頁に、仕口そのものは<a href=\"joinery.html\">継手と仕口</a>の頁にある。",
            zh:"前兩種工法的背後是預切工廠：電腦繪製的骨架資料驅動機器，切出每一根構件與每一處接頭。到 2020 年度，約 93% 的軸組工法住宅以預切材組立。木匠在工地的工作已從加工轉為組裝、調整與收尾；製材廠如何因應，見<a href=\"sawmill.html\">製材</a>頁，接頭本身見<a href=\"joinery.html\">榫接</a>頁。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Annual Report on Forest and Forestry in Japan FY2021 (special feature 2), housing-start statistics of the Ministry of Land, Infrastructure, Transport and Tourism.",
            ja:"出典：林野庁『令和三年度 森林・林業白書』特集二、国土交通省 建築着工統計。",
            zh:"資料來源：林野庁《令和 3 年度森林・林業白書》特輯二；國土交通省建築開工統計。" } }
      ] },
    { t:"section",
      id:"seismic",
      title:{ en:"Designing for earthquakes: the 2000 standard", ja:"地震に備える：二〇〇〇年基準", zh:"為地震而設計：2000 年基準" },
      jp:"耐震基準",
      body:[
        { t:"p",
          text:{
            en:"Japan's Building Standard Law of 1950 set minimum lengths of bracing wall for timber houses, and the requirement was raised in 1981, after the Miyagi earthquake of 1978, in what became known as the “new seismic standard”. The Kobe earthquake of 1995 showed that wall length alone was not enough. Many houses failed because posts were torn out of their joints, which were often only nailed, or because the walls were concentrated on one side while the street front was left open for a shop or garage. The revision that took effect in June 2000 — the so-called <em>2000 standard</em> — added three rules: foundations chosen according to the bearing capacity of the soil; specified metal connectors at the ends of posts and braces, sized to the forces they carry; and a check that bracing walls are balanced across the plan, the “quarter rule”.",
            ja:"一九五〇年の建築基準法は木造住宅に必要な耐力壁の最低の量を定め、一九七八年の宮城県沖地震を受けて一九八一年に引き上げられた。いわゆる「新耐震基準」である。一九九五年の阪神・淡路大震災は、壁の量だけでは足りないことを示した。多くの家は、釘打ちだけのことが多かった仕口から柱が引き抜かれて、あるいは店や車庫のために通り側を開け、壁が片側に寄っていたために壊れた。二〇〇〇年六月に施行された改正、いわゆる「二〇〇〇年基準」は三つの規定を加えた。地盤の地耐力に応じた基礎、柱と筋かいの端部に負担する力に応じて定めた接合金物、そして耐力壁が平面のなかでつり合って配置されているかの確認（四分割法）である。",
            zh:"日本 1950 年的《建築基準法》規定木造住宅剪力牆的最低長度，並在 1978 年宮城縣沖地震後，於 1981 年提高要求，即所謂「新耐震基準」。1995 年阪神大地震顯示，只靠牆量並不足夠。許多房屋損毀，是因為柱子從往往只用釘子固定的接頭被拔出，或因臨街面為了店舖或車庫而開敞，牆體集中於一側。2000 年 6 月施行的修法——即所謂「2000 年基準」——增加三項規定：依地盤承載力選擇基礎；在柱與斜撐端部依其承受之力設置指定的金屬接合件；以及檢查剪力牆在平面上是否配置均衡（「四分割法」）。" } },
        { t:"figure",
          caption:{
            en:"Timber houses that collapsed in the centre of Mashiki, Kumamoto, in the earthquakes of April 2016, by the building standard in force when they were built (per cent of houses surveyed: 759 before June 1981, 877 from June 1981 to May 2000, 319 from June 2000). Source: Building Research Institute, damage survey of the 2016 Kumamoto earthquakes.",
            ja:"二〇一六年四月の熊本地震で、益城町中心部で倒壊・崩壊した木造住宅の割合を、建築時の基準別に示す（調査棟数：一九八一年五月以前七五九、一九八一年六月〜二〇〇〇年五月八七七、二〇〇〇年六月以降三一九）。出典：建築研究所、二〇一六年熊本地震の建築物被害調査。",
            zh:"2016 年 4 月熊本地震中，益城町中心區倒塌的木造住宅比例，依興建時適用的基準分類（調查棟數：1981 年 5 月以前 759 棟、1981 年 6 月至 2000 年 5 月 877 棟、2000 年 6 月以後 319 棟）。資料來源：日本建築研究所，2016 年熊本地震建築物受災調查。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Collapsed timber houses, Mashiki 2016", ja:"益城町で倒壊した木造住宅（二〇一六年）", zh:"益城町倒塌木造住宅（2016 年）" },
            unit:{ en:"% of houses surveyed", ja:"調査棟数に対する％", zh:"占調查棟數 %" }, max:44, dec:1, labelW:300, rowH:34,
            items:[
              { n:{ en:"Built before June 1981", ja:"一九八一年五月以前の建築", zh:"1981 年 5 月以前興建" }, v:28.2, f:"#EEE1DF" },
              { n:{ en:"Built June 1981 – May 2000", ja:"一九八一年六月〜二〇〇〇年五月の建築", zh:"1981 年 6 月至 2000 年 5 月興建" }, v:8.7, f:"#EDE5D2" },
              { n:{ en:"Built from June 2000", ja:"二〇〇〇年六月以降の建築", zh:"2000 年 6 月以後興建" }, v:2.2, f:"#E0E6DB" }
            ] }); } },
        { t:"p",
          text:{
            en:"The same survey found that 61 per cent of the post-2000 houses had no damage at all, against only about 5 per cent of those built before 1981. Seven post-2000 houses still collapsed, a reminder that the law sets a minimum. Many builders now design to grade 3 of the seismic scale introduced by the Housing Quality Assurance Act of 2000, which requires 1.5 times the legal minimum strength. From April 2025 the rules were tightened again: wall requirements now allow for the heavier roofs, insulation and solar panels of modern houses, and most new two-storey timber houses lost an exemption that had let them skip structural review. Like other prefectures, Gifu and its municipalities subsidise seismic surveys and strengthening of timber houses built before 1981.",
            ja:"同じ調査では、二〇〇〇年以降の住宅の六一％が無被害だったのに対し、一九八一年以前の住宅ではわずか約五％だった。それでも二〇〇〇年以降の住宅七棟が倒壊しており、法は最低限を定めるにすぎないことを思い出させる。いま多くの工務店は、二〇〇〇年の住宅品質確保促進法で導入された耐震等級の三、すなわち法の最低の一・五倍の強さを目標に設計する。二〇二五年四月からは規定がさらに強められた。壁の量は現代の住宅の重い屋根、断熱材、太陽光パネルを見込むようになり、新築の木造二階建ての多くは構造の審査を省ける特例を失った。他の県と同じく、岐阜県と市町村は一九八一年以前の木造住宅の耐震診断と補強に補助をしている。",
            zh:"同一調查發現，2000 年以後的住宅有 61% 完全無損，1981 年以前的住宅則只有約 5%。仍有七棟 2000 年以後的住宅倒塌，提醒人們法規只是最低標準。如今許多營造商以 2000 年《住宅品質確保促進法》所引入的耐震等級 3 為目標，亦即法定最低強度的 1.5 倍。自 2025 年 4 月起規定再度加嚴：牆量要求開始考量現代住宅較重的屋頂、隔熱材與太陽能板，多數新建兩層木造住宅也失去了可省略結構審查的特例。與其他縣一樣，岐阜縣及其市町村補助 1981 年以前木造住宅的耐震診斷與補強。" } },
        { t:"tiny",
          text:{
            en:"Sources: Building Research Institute (2016); Building Standard Law and its revisions (Ministry of Land, Infrastructure, Transport and Tourism).",
            ja:"出典：建築研究所（二〇一六年）、建築基準法とその改正（国土交通省）。",
            zh:"資料來源：日本建築研究所（2016 年）；《建築基準法》及其修正（國土交通省）。" } }
      ] },
    { t:"section",
      id:"fire",
      title:{ en:"Fire and the law", ja:"火と法", zh:"火災與法規" },
      jp:"防火規制",
      body:[
        { t:"p",
          text:{
            en:"For centuries fire, not earthquakes, was the great destroyer of Japanese towns, and the post-war Building Standard Law treated timber with suspicion: wooden buildings were limited to 13 metres in height and 9 metres at the eaves, and larger floor areas had to be divided by firewalls. In 1959, after the Ise Bay Typhoon, the Architectural Institute of Japan went further and resolved that wooden construction should be avoided for the sake of fire and storm safety. For three decades schools, town halls and apartment blocks were built in concrete, and Japan's plantations grew without a market for large timber. The rules have since been loosened step by step, as research showed that large timber chars at a predictable rate and keeps its strength inside (see <a href=\"properties.html\">properties</a>):",
            ja:"何百年ものあいだ、日本の町を最も多く壊したのは地震ではなく火だった。戦後の建築基準法は木を警戒し、木造の建物は高さ十三メートル・軒高九メートルまでに限られ、広い床面積は防火壁で区切らねばならなかった。一九五九年、伊勢湾台風のあと、日本建築学会はさらに踏み込み、防火と耐風水害のために木造を避けるべきだと決議した。三十年のあいだ、学校、役場、集合住宅はコンクリートで建てられ、日本の人工林は大きな材の売り先のないまま育った。その後、太い木材は予測できる速さで炭化し、内側では強さを保つことが研究で示されるにつれ、規制は一歩ずつ緩められてきた（<a href=\"properties.html\">物理的性質</a>を参照）。",
            zh:"數百年來，摧毀日本城鎮最多的不是地震而是火災，戰後的《建築基準法》也對木材心存戒慎：木造建築高度限 13 公尺、簷高限 9 公尺，較大的樓地板面積必須以防火牆分隔。1959 年伊勢灣颱風之後，日本建築學會更進一步，決議為了防火與防風水災應避免木造。此後三十年間，學校、鄉鎮公所與集合住宅都以混凝土興建，日本的人工林也在大型木材缺乏市場的情況下成長。後來研究顯示，大斷面木材以可預測的速率碳化，內部仍保有強度，法規才逐步放寬（見<a href=\"properties.html\">物理性質</a>）：" } },
        { t:"timeline",
          items:[
            { year:"1987",
              title:{ en:"Charring margin", ja:"燃えしろ設計", zh:"燃燒餘裕設計" },
              text:{
                en:"Large-section timber allowed beyond the old height limits if members are sized with a sacrificial outer layer; three-storey timber houses permitted in quasi-fire zones.",
                ja:"焼けてもよい外側の厚みを見込んで断面を決めれば、太い木材で従来の高さの制限を超えられるようになる。準防火地域で木造三階建ての住宅が認められる。",
                zh:"若構件斷面預留可燒損的外層，大斷面木材可超過舊有高度限制；準防火地區允許三層木造住宅。" } },
            { year:"1992",
              title:{ en:"Quasi-fire-resistant", ja:"準耐火構造", zh:"準耐火構造" },
              text:{
                en:"A new class of construction that resists fire for a set time, opening the way to three-storey timber flats.",
                ja:"一定の時間火に耐える新しい構造の区分ができ、木造三階建ての共同住宅への道が開く。",
                zh:"新設可在一定時間內耐火的構造類別，為三層木造集合住宅開路。" } },
            { year:"1998",
              title:{ en:"Performance rules", ja:"性能規定化", zh:"性能化規定" },
              text:{
                en:"The law is revised (in force 2000) to judge fire safety by performance, making fully fire-resistant timber construction possible.",
                ja:"防火を性能で判断するよう法が改正され（二〇〇〇年施行）、木造で耐火構造をつくることが可能になる。",
                zh:"修法改以性能判斷防火安全（2000 年施行），使木造耐火構造成為可能。" } },
            { year:"2014",
              title:{ en:"Timber schools", ja:"木造の学校", zh:"木造學校" },
              text:{
                en:"A revision (in force 2015) lets three-storey schools be built in quasi-fire-resistant timber.",
                ja:"改正（二〇一五年施行）により、三階建ての学校を準耐火の木造で建てられるようになる。",
                zh:"修法（2015 年施行）允許三層學校以準耐火木構造興建。" } },
            { year:"2019",
              title:{ en:"16 metres", ja:"十六メートル", zh:"16 公尺" },
              text:{
                en:"Timber buildings of up to three storeys and 16 m no longer need fully fire-resistant construction (previously 13 m).",
                ja:"三階建て以下・高さ十六メートル以下の木造は、耐火構造でなくてよくなる（それまでは十三メートル）。",
                zh:"三層以下、高 16 公尺以下的木造建築不再須採完整耐火構造（此前為 13 公尺）。" } },
            { year:"2024",
              title:{ en:"Exposed timber at scale", ja:"大規模で木を見せる", zh:"大規模外露木材" },
              text:{
                en:"Buildings over 3,000 m² may show their timber structure when divided by high-performance fire separations.",
                ja:"三千平方メートルを超える建物も、高い性能の防火の区画で分ければ木の構造を見せられるようになる。",
                zh:"超過 3,000 平方公尺的建築，若以高性能防火區劃分隔，也可外露木構造。" } }
          ] },
        { t:"p",
          text:{
            en:"Gifu's municipalities have used the new freedom mostly for schools. In Nakatsugawa, the new Fukuoka Elementary School, built for a school formed by merger in April 2023 and occupied after that summer's holidays, has a timber classroom block built from the surrounding forests; it received the Minister of Education's prize in the national competition for buildings that make good use of wood. Such projects depend on the municipality buying and drying the timber before the building contract is let, as described on <a href=\"woodfirst.html\">Putting Wood to Use</a>.",
            ja:"岐阜の市町村は、新しく得た自由を主に学校に使ってきた。中津川市では、二〇二三年四月に統合して生まれた小学校のために建てられ、その年の夏休み明けから使われている福岡小学校が、周りの森の木で建てた木造の校舎棟をもつ。木材利用優良施設のコンクールで文部科学大臣賞を受けた。こうした事業は、市町村が建築の契約の前に材を買って乾かしておくことにかかっている。<a href=\"woodfirst.html\">木づかい</a>を参照。",
            zh:"岐阜的市町村多把這份新的自由用在學校上。在中津川市，為 2023 年 4 月合併而成的學校所興建、並於當年暑假後啟用的福岡小學，擁有以周邊森林木材建造的木造教室棟，並在全國木材利用優良設施競賽中獲文部科學大臣獎。這類計畫有賴市町村在發包建築合約之前先購入並乾燥木材，見<a href=\"woodfirst.html\">用木之道</a>。" } }
      ] },
    { t:"section",
      id:"carpenters",
      title:{ en:"Fewer carpenters", ja:"減る大工", zh:"木匠日減" },
      jp:"大工の減少",
      body:[
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Carpenters, 1980", ja:"大工（一九八〇年）", zh:"木匠（1980 年）" },
              v:{ en:"937,000", ja:"93.7万人", zh:"93.7 萬人" },
              d:{ en:"The post-war peak", ja:"戦後の最多", zh:"戰後最高峰" } },
            { k:{ en:"Carpenters, 2010", ja:"大工（二〇一〇年）", zh:"木匠（2010 年）" },
              v:{ en:"402,000", ja:"40.2万人", zh:"40.2 萬人" },
              d:{ en:"Census", ja:"国勢調査", zh:"國勢調查" } },
            { k:{ en:"Carpenters, 2020", ja:"大工（二〇二〇年）", zh:"木匠（2020 年）" },
              v:{ en:"298,000", ja:"29.8万人", zh:"29.8 萬人" },
              d:{ en:"A quarter fewer than in 2010", ja:"二〇一〇年より約四分の一減", zh:"比 2010 年少約四分之一" } },
            { k:{ en:"Aged 60 or over, 2020", ja:"六十歳以上（二〇二〇年）", zh:"60 歲以上（2020 年）" },
              v:"43%",
              d:{ en:"About 21,000 were under 30", ja:"三十歳未満は約二万一千人", zh:"未滿 30 歲者約 2.1 萬人" } }
          ] },
        { t:"p",
          text:{
            en:"Japan's census counted 937,000 carpenters in 1980 and 298,000 in 2020, less than a third as many, while the number of houses built each year roughly halved. Precut factories explain part of the fall: a frame that once took a master and his apprentices weeks to cut now arrives on a lorry ready to raise. But the trade has also aged and fragmented. Many carpenters are self-employed masters working alone for a builder, paid by the job, with no one to train; in 2020, 43 per cent were 60 or older. House-builders now worry less about the price of timber than about who will raise and finish the frame, and the knowledge needed to repair older buildings — hand-cut joints, earthen walls, the reading of old timber — is held by fewer people each year.",
            ja:"国勢調査によれば、大工は一九八〇年の九三・七万人から二〇二〇年には二九・八万人と、三分の一に満たなくなった。毎年建つ住宅の数はおよそ半分になったにすぎない。減少の一部はプレカット工場で説明できる。かつて棟梁と弟子たちが何週間もかけて刻んだ軸組が、いまはすぐ組める状態でトラックで届く。しかし職そのものも高齢化し、ばらばらになった。多くの大工は工務店のもとでひとりで働く一人親方で、仕事ごとに払われ、育てる弟子をもたない。二〇二〇年には四三％が六十歳以上だった。住宅をつくる側がいま心配するのは、材の値段よりも、だれが軸組を建て、仕上げるのかである。手で刻む仕口、土壁、古材を読む目といった、古い建物を直すための知識をもつ人は、年ごとに減っている。",
            zh:"根據國勢調查，日本的木匠從 1980 年的 93.7 萬人減至 2020 年的 29.8 萬人，不到三分之一；同期每年興建的住宅數大約只減半。減少的部分原因是預切工廠：過去需要棟樑師傅與學徒花數週加工的骨架，如今裝在卡車上運到，隨即可以立架。但這一行本身也老化、零散化了。許多木匠是為營造商獨自工作的「一人老闆」，按件計酬，沒有可帶的徒弟；2020 年有 43% 年滿 60 歲。如今住宅業者擔心的與其說是木材價格，不如說是誰來立架與收尾；而修繕老建築所需的知識——手工榫接、土牆、判讀舊材的眼力——掌握者一年比一年少。" } },
        { t:"p",
          text:{
            en:"Gifu's answer has been to keep the whole chain close together. The Forest Academy in Mino teaches building alongside forestry; village builders such as the one in Kashimo train their own carpenters on houses and shrine work; and national skills tests in carpentry, at three grades, give young carpenters a recognised ladder. For the craft lineage behind them, see <a href=\"takumi.html\">Hida no takumi</a>.",
            ja:"岐阜の答えは、森から建物までの鎖をまとめて近くに保つことである。美濃の森林文化アカデミーは林業とともに建築を教え、加子母の工務店のような村の工務店は住宅や社寺の仕事で自前の大工を育て、三つの等級がある国の建築大工の技能検定は、若い大工に認められた階段を与える。その背後にある職人の系譜は<a href=\"takumi.html\">飛騨の匠</a>を参照。",
            zh:"岐阜的對策是讓整條產業鏈彼此貼近。美濃的森林文化學院在林業之外也教授建築；像加子母那樣的村落營造商，在住宅與寺社工程中培養自家的木匠；國家的建築木工技能檢定分三個等級，為年輕木匠提供受認可的晉升階梯。其背後的工匠傳承，見<a href=\"takumi.html\">飛驒匠人</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Internal Affairs and Communications, Population Census (1980, 2010, 2015, 2020), as compiled in housing-industry reports.",
            ja:"出典：総務省「国勢調査」（一九八〇年、二〇一〇年、二〇一五年、二〇二〇年）、住宅業界の報告による集計。",
            zh:"資料來源：總務省「國勢調查」（1980、2010、2015、2020 年），經住宅業界報告整理。" } }
      ] },
    { t:"related",
      items:[
        { href:"architecture.html",
          why:{ en:"Temples, floats and carpentry in detail.", ja:"社寺、屋台、大工仕事を詳しく。", zh:"寺社、屋台與木作詳述。" } },
        { href:"joinery.html", why:{ en:"How the frames are held together.", ja:"軸組はどうつながれるか。", zh:"骨架如何接合。" } },
        { href:"engineered.html",
          why:{ en:"The materials of modern timber building.", ja:"現代の木造の材料。", zh:"現代木造建築的材料。" } },
        { href:"woodfirst.html",
          why:{ en:"Policies that promote wooden buildings.", ja:"木造を促す施策。", zh:"推動木造建築的政策。" } }
      ] }
  ] };

/* ---- ------------------------------------------- joinery */
GIFU.pages["joinery"] = { kicker:{ en:"Timber · 10", ja:"木材 · 10", zh:"木材 · 10" },
  title:{ en:"Joinery", ja:"継手と仕口", zh:"接合技術" },
  jp:"継手・仕口・込み栓",
  lede:{
    en:"Japanese carpentry is famous for building without nails. The claim is not quite true — traditional buildings used iron nails and clamps where they were convenient — but it points to something real: the frame of a Japanese building is held together mainly by the shape of the wood itself, cut into interlocking joints and locked with wooden pins and wedges. This page explains the two families of joints, the most important of them, how carpenters lay them out, and why the Hida carpenters' reputation for joinery has lasted thirteen centuries.",
    ja:"日本の大工仕事は、釘を使わずに建てることで名高い。その言い分は正確ではない——伝統の建物も、便利なところでは鉄の釘や鎹を使った——が、本当のことを指している。日本の建物の軸組は、おもに木そのものの形、すなわち互いに噛みあう継手と仕口に刻まれ、木の栓や楔で締められた形によってまとまっている。この頁は、二つの系統の接合、そのうち最も大事なもの、大工がそれをどう墨付けするか、そして飛騨の匠の仕口の評判がなぜ千三百年続いてきたのかを説明する。",
    zh:"日本木作以「不用釘子建造」聞名。這種說法並不完全正確——傳統建築在方便之處也會使用鐵釘與鐵鋦——但它指出了一個事實：日本建築的骨架主要靠木材本身的形狀結合在一起，也就是切削成彼此咬合的接合，並以木栓與木楔鎖緊。本頁說明兩大類接合、其中最重要的幾種、木匠如何劃線，以及飛驒匠人的接合技藝為何能享譽一千三百年。" },
  body:[
    { t:"section",
      id:"families",
      title:{ en:"Tsugite and shiguchi", ja:"継手と仕口", zh:"繼手與仕口" },
      jp:"二つの系統",
      body:[
        { t:"p",
          text:{
            en:"Japanese carpenters divide joints into two kinds. A <em>tsugite</em> joins two pieces end to end to make a longer member — a sill, a beam or a purlin longer than any available log. A <em>shiguchi</em> joins pieces at an angle — a post to a sill, a beam to a post, a floor joist to a beam. The best joints do three things at once: they transmit load through large bearing surfaces of wood on wood, they resist being pulled apart without relying on glue, and they can be assembled in a sequence that the building's frame allows.",
            ja:"日本の大工は接合を二つに分ける。継手は二つの材を端と端でつなぎ、より長い部材——手に入るどの丸太よりも長い土台、梁、母屋——をつくる。仕口は材を角度をつけてつなぐ——柱と土台、梁と柱、根太と梁。最良の接合は三つのことを同時にする。木と木の大きな受け面を通して荷重を伝え、接着剤に頼らずに引き抜かれまいとし、そして軸組が許す順序で組み立てられる。",
            zh:"日本木匠把接合分為兩類。「繼手」把兩根材料端對端接起，形成更長的構件——比任何可取得原木都長的地檻、樑或桁條。「仕口」則以角度連接構件——柱與地檻、樑與柱、擱柵與樑。最好的接合同時做到三件事：透過木對木的大承壓面傳遞荷載；不靠膠合即可抵抗拉脫；並且能依骨架允許的順序組裝。" } },
        { t:"figure",
          caption:{
            en:"A through mortise-and-tenon joint locked with a drawpin (komisen), schematic. The pin hole in the tenon is bored a millimetre or two closer to the shoulder than the holes in the post, so that driving the pin pulls the joint tight — the principle that lets a Japanese frame stay rigid without glue.",
            ja:"込み栓で締めた長ほぞ差し（模式図）。ほぞの栓穴は柱の穴より一、二ミリ胴付き寄りにあけ、栓を打つと仕口が引き締まる——接着剤なしで日本の軸組を剛く保つ原理である。",
            zh:"以木栓（込栓）鎖緊的貫通榫卯（示意）。榫頭上的栓孔比柱上的孔稍微靠近榫肩一兩公釐，打入木栓時便會把接合拉緊——這正是日本骨架不靠膠合仍能保持剛性的原理。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 290" role="img">';
            s += F.text(20, 28, lang==="en"?"MORTISE, TENON AND DRAWPIN":(lang==="ja"?"ほぞ・ほぞ穴・込み栓":"榫卯與木栓"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            // post (vertical) x 300..380
            s += '<rect x="300" y="50" width="80" height="220" fill="#EDE5D2" stroke="#7C6B52"/>';
            // mortise in post (dashed)
            s += '<rect x="300" y="130" width="80" height="60" fill="none" stroke="#7C6B52" stroke-dasharray="4 3"/>';
            // beam (horizontal) coming from left x 80..300, tenon extends into post to 380
            s += '<rect x="80" y="110" width="220" height="100" fill="#E0E6DB" stroke="#7C6B52"/>';
            s += '<rect x="300" y="130" width="80" height="60" fill="#E0E6DB" fill-opacity="0.7" stroke="#201E1B"/>';
            // drawpin (circle) through post and tenon
            s += '<circle cx="340" cy="160" r="9" fill="#EADCC1" stroke="#201E1B"/>';
            s += '<line x1="340" y1="151" x2="340" y2="169" stroke="#7C6B52"/>';
            function lab(x1,y1,x2,y2,t){ return '<path d="M'+x1+' '+y1+' L'+x2+' '+y2+'" stroke="#8B857C" fill="none"/>' + F.text(x2+(x2>x1?6:-6), y2+4, L(t), { size:11.5, fill:"#201E1B", anchor: x2>x1?null:"end" }); }
            s += lab(340, 70, 470, 70, { en:"Post (hashira)", ja:"柱", zh:"柱" });
            s += lab(150, 190, 200, 250, { en:"Beam (hari)", ja:"梁", zh:"樑" });
            s += lab(365, 140, 470, 120, { en:"Long tenon (naga-hozo)", ja:"長ほぞ", zh:"長榫" });
            s += lab(348, 162, 470, 175, { en:"Drawpin (komisen), offset 1–2 mm", ja:"込み栓（一〜二ミリずらす）", zh:"木栓（偏移 1–2 公釐）" });
            s += lab(300, 205, 470, 230, { en:"Shoulder (dozuki) bears the load", ja:"胴付きが荷重を受ける", zh:"榫肩承受荷載" });
            return s + '</svg>';
          } },
        { t:"table",
          caption:{ en:"Some classic joints of Japanese carpentry", ja:"日本の大工の代表的な接合", zh:"日本木作代表性接合" },
          cols:[
            { en:"Joint", ja:"名称", zh:"名稱" },
            { en:"Reading", ja:"読み", zh:"讀音" },
            { en:"Type", ja:"種類", zh:"類型" },
            { en:"Used for", ja:"使う場所", zh:"用途" }
          ],
          rows:[
            [
              { en:"Seated dovetail splice", ja:"腰掛け蟻継ぎ", zh:"腰掛燕尾繼" },
              "こしかけありつぎ",
              { en:"Tsugite", ja:"継手", zh:"繼手" },
              { en:"Sills and purlins; simple and quick", ja:"土台や母屋。簡単で速い", zh:"地檻與桁條；簡單快速" }
            ],
            [
              { en:"Seated gooseneck splice", ja:"腰掛け鎌継ぎ", zh:"腰掛鎌繼" },
              "こしかけかまつぎ",
              { en:"Tsugite", ja:"継手", zh:"繼手" },
              { en:"Sills and beams; resists pulling apart", ja:"土台や梁。引き抜きに強い", zh:"地檻與樑；抗拉脫" }
            ],
            [
              { en:"Stepped splice with keys", ja:"追掛け大栓継ぎ", zh:"追掛大栓繼" },
              "おっかけだいせんつぎ",
              { en:"Tsugite", ja:"継手", zh:"繼手" },
              { en:"Beams under bending; one of the strongest splices", ja:"曲げを受ける梁。最も強い継手の一つ", zh:"受彎樑；最強的繼手之一" }
            ],
            [
              { en:"Metal-ring splice", ja:"金輪継ぎ", zh:"金輪繼" },
              "かなわつぎ",
              { en:"Tsugite", ja:"継手", zh:"繼手" },
              {
                en:"Repairing the rotted foot of a post or joining long members; locked with a central key",
                ja:"柱の腐った根元の根継ぎや長い部材。中央の栓で締める",
                zh:"修補柱腳腐朽段（根繼）或接長構件；以中央木栓鎖緊" }
            ],
            [
              { en:"Through tenon with drawpin", ja:"長ほぞ差し込み栓打ち", zh:"長榫込栓" },
              "ながほぞさしこみせんうち",
              { en:"Shiguchi", ja:"仕口", zh:"仕口" },
              { en:"Post to sill or beam", ja:"柱と土台・梁", zh:"柱與地檻、樑" }
            ],
            [
              { en:"Wedged through tenon", ja:"雇いほぞ・楔締め", zh:"楔緊貫通榫" },
              "くさびじめ",
              { en:"Shiguchi", ja:"仕口", zh:"仕口" },
              { en:"Tie beams through posts (nuki)", ja:"柱を貫く貫", zh:"穿過柱子的貫" }
            ],
            [
              { en:"Cogged lap", ja:"渡りあご", zh:"渡顎" },
              "わたりあご",
              { en:"Shiguchi", ja:"仕口", zh:"仕口" },
              { en:"Crossing beams at different levels", ja:"高さの違う梁の交差", zh:"不同高度的樑交叉" }
            ],
            [
              { en:"Housed joint", ja:"大入れ", zh:"大入" },
              "おおいれ",
              { en:"Shiguchi", ja:"仕口", zh:"仕口" },
              { en:"Joists into beams; the whole end sits in a housing", ja:"根太と梁。端全体を彫りこみに納める", zh:"擱柵入樑；整個端部嵌入槽中" }
            ]
          ] }
      ] },
    { t:"section",
      id:"layout",
      title:{ en:"Laying out the frame", ja:"墨付け", zh:"劃線" },
      jp:"墨壺・差金・板図",
      body:[
        { t:"p",
          text:{
            en:"Before any joint is cut, the master carpenter draws the whole frame on a single board, the <em>itazu</em>: a plan at small scale showing every post, beam and joint, with a grid of reference lines named in one direction by the syllables of the <em>iroha</em> poem and in the other by numbers. Each timber is then marked with its grid address — “i-three”, “ro-five” — so that on the day of raising, hundreds of pieces go to their places without confusion. The joints themselves are laid out with an ink line snapped from a <em>sumitsubo</em>, an ink pot with a reel of silk line, and a bamboo pen, and dimensioned with the <em>sashigane</em>, a steel square whose back is graduated in units multiplied by √2 and by 1/π so that a carpenter can read the size of the largest square beam a log will yield, or its circumference, directly.",
            ja:"どの仕口を刻むより前に、棟梁は軸組の全体を一枚の板、板図に描く。すべての柱、梁、仕口を示す小さな縮尺の図で、一方の向きの通り芯には「いろは」の仮名、もう一方には数字で名がつく。それぞれの材には、その番付——「い三」「ろ五」——が記され、建て方の日には何百もの材が迷わずその場所に納まる。仕口そのものは、絹の糸を巻いた墨壺からはじく墨の線と竹の墨さしで墨付けされ、差金で寸法をとる。差金の裏には√2倍や1/π倍した目盛があり、大工は丸太から取れる最大の角材の大きさや、その円周をじかに読める。",
            zh:"在鑿任何接合之前，棟樑會把整個骨架畫在一塊木板上，稱為「板圖」：以小比例標示每根柱、每根樑與每個接合，並設有參考格線，一個方向以《伊呂波歌》的假名命名，另一個方向以數字命名。每根木料都標上它的格位編號——「い三」、「ろ五」——在立架當天，數百根構件便能各就其位而不混淆。接合本身以墨斗（捲著絲線的墨壺）彈出的墨線與竹製墨筆劃線，並以曲尺量尺寸；曲尺背面刻有乘以 √2 與 1/π 的刻度，木匠可直接讀出一根原木能取得的最大方材尺寸，或其圓周。" } },
        { t:"chips",
          items:[
            { text:{ en:"Sumitsubo — ink pot and line", ja:"墨壺——墨と糸", zh:"墨斗——墨壺與墨線" } },
            { text:{ en:"Sumisashi — bamboo pen", ja:"墨さし——竹のペン", zh:"墨筆——竹筆" } },
            { text:{ en:"Sashigane — carpenter's square", ja:"差金——曲尺", zh:"曲尺——木匠角尺" } },
            { text:{ en:"Itazu — plan on a board", ja:"板図——板に描いた図", zh:"板圖——畫在木板上的圖" } },
            { text:{ en:"Banzuke — grid addresses", ja:"番付——通りの番号", zh:"番付——格位編號" } }
          ] }
      ] },
    { t:"section",
      id:"hida",
      title:{ en:"Joinery in Hida", ja:"飛騨の仕口", zh:"飛驒的接合技藝" },
      jp:"飛騨の匠文化館・雲",
      body:[
        { t:"p",
          text:{
            en:"In Furukawa, the old town of Hida city, the Hida no Takumi Bunkakan — a museum of the Hida carpenters — was itself built without a single nail, its frame assembled entirely with joinery by local carpenters. Inside, visitors can take apart and reassemble full-size examples of the classic joints, and discover that some of them can only be put together in one sequence and from one direction, like a puzzle. Outside, along the streets of Furukawa, the ends of the brackets under the eaves of many houses are carved with a white-painted scroll called <em>kumo</em>, “cloud”. Each carpenter or workshop had its own design, some 170 have been recorded, and the clouds serve as signatures: a way for a builder to be known by his work.",
            ja:"飛騨市の古い町、古川にある飛騨の匠文化館——飛騨の大工の資料館——は、それ自体が釘を一本も使わず、地元の大工の仕口だけで軸組を組んで建てられた。なかでは、訪れる人が代表的な継手や仕口の実物大の見本を外したり組み直したりでき、そのうちいくつかは、パズルのように一つの順序と一つの向きからしか組めないことを知る。外に出れば、古川の通りに並ぶ多くの家の軒下の腕木の先に、白く塗った渦巻き、「雲」が刻まれている。大工や工房ごとに独自の意匠があり、およそ百七十が記録されている。雲は署名の役を果たす。仕事によって建て手が知られる、そのしるしである。",
            zh:"在飛驒市的古老城區古川，飛驒匠文化館——一座介紹飛驒木匠的資料館——本身就是由在地木匠完全以接合技術組成骨架、一根釘子也沒用的建築。館內，參觀者可以拆解並重新組裝各種經典接合的原尺寸樣本，並發現其中有些接合就像拼圖一樣，只能以一種順序、從一個方向組合。走到館外，古川街道兩旁許多房屋屋簷下的挑木末端，雕刻著塗白的渦卷紋，稱為「雲」。每位木匠或每個工坊都有自己的圖樣，已記錄的約有 170 種；「雲」就是簽名：讓建造者以作品為人所知的方式。" } },
        { t:"defs",
          items:[
            { term:{ en:"Chidori — a Hida toy", ja:"千鳥——飛騨のおもちゃ", zh:"千鳥——飛驒玩具" },
              jp:"ちどり",
              def:{
                en:"A traditional toy from Hida Takayama made of short wooden sticks, notched so that three can be locked together at right angles by twisting, without glue or nails, to build up a three-dimensional grid. The architect Kengo Kuma took it as the model for a series of timber lattice structures from 2007, including a museum and research centre whose whole structure is a scaled-up chidori grid.",
                ja:"飛騨高山に伝わるおもちゃで、刻みを入れた短い木の棒を、接着剤も釘も使わず、ひねって三本を直角に噛みあわせ、立体の格子を組み上げる。建築家の隈研吾は二〇〇七年から、これを手本に一連の木の格子の構造をつくり、構造全体が拡大した千鳥の格子である博物館と研究所もそこに含まれる。",
                zh:"飛驒高山的傳統玩具，由刻有缺口的短木棒組成；不用膠也不用釘，扭轉即可讓三根木棒以直角互鎖，堆疊出立體格子。建築師隈研吾自 2007 年起以它為原型，設計了一系列木格構造，其中包括一座整體結構就是放大版千鳥格子的博物館兼研究中心。" } },
            { term:{ en:"Sashimono — furniture joinery", ja:"指物", zh:"指物——家具接合" },
              jp:"さしもの",
              def:{
                en:"The joinery of cabinets, chests, boxes and tables, made to far finer tolerances than building joinery and often completely hidden: mitred corners with concealed dovetails (<em>tomegata kakushi arigumi</em>), three-way mitres at the corners of frames, sliding dovetail battens. Hida's furniture makers and the makers of Gifu's kiri chests and hinoki boxes work in this tradition.",
                ja:"棚、箪笥、箱、机の接合で、建物の仕口よりはるかに細かい精度でつくられ、しばしばまったく見えない。留形隠し蟻組、框の角の三方留め、蟻桟。飛騨の家具職人や、岐阜の桐箪笥やヒノキの箱の職人は、この伝統のなかで働く。",
                zh:"櫥櫃、衣櫃、盒子與桌子的接合，精度遠高於建築接合，而且常完全隱藏：暗燕尾斜角接（留形隱蟻組）、框角的三方斜接、燕尾滑槽橫檔。飛驒家具師傅以及岐阜桐木衣櫃與扁柏盒的工匠，都在這個傳統中工作。" } },
            { term:{ en:"Kumiko — lattice", ja:"組子", zh:"組子——格柵" },
              jp:"くみこ",
              def:{
                en:"Screens and shoji assembled from hundreds of thin strips of hinoki or sugi, notched to interlock in geometric patterns — hemp leaf, star, bellflower — without glue. The finest work is judged by whether light passes evenly through every cell.",
                ja:"何百もの細いヒノキやスギの桟に切り込みを入れ、接着剤なしで幾何学の文様——麻の葉、星、桔梗——に組んだ衝立や障子。最上の仕事は、光がどの升目にも均等に通るかで判じられる。",
                zh:"以數百根細扁柏或柳杉木條刻出缺口，不用膠而互相咬合成幾何圖案——麻葉、星形、桔梗——的屏風與障子。最上乘的作品，以光線是否均勻穿過每一格來評判。" } }
          ] }
      ] },
    { t:"section",
      id:"metal",
      title:{ en:"Wood, iron and the modern code", ja:"木と鉄と現代の基準", zh:"木、鐵與現代規範" },
      jp:"金物",
      body:[
        { t:"p",
          text:{
            en:"Traditional joints are superb in compression and good in bending, but a pure timber joint can be pulled apart by the sudden uplift that an earthquake or typhoon imposes on a light frame. Historic builders used iron where it mattered — hand-forged nails (<em>wakugi</em>), clamps (<em>kasugai</em>) and straps — and heavy tile roofs held frames down by sheer weight. Modern Japanese building standards, strengthened after the Kobe earthquake of 1995 and again in 2000, require engineered steel connectors at the foot and head of posts, calculated for each position. Carpenters who build in the traditional way now combine the old joints with discreet metal, or use design methods for traditional frames that rely on the energy-absorbing deformation of joints rather than on stiffness.",
            ja:"伝統の仕口は圧縮にすばらしく強く、曲げにも良いが、純粋に木だけの仕口は、地震や台風が軽い軸組に課す急な引き抜きで外れうる。昔の建て手は、要るところには鉄を使った——手打ちの和釘、鎹、帯金——し、重い瓦屋根はその重さで軸組を押さえた。一九九五年の阪神・淡路大震災のあと、そして二〇〇〇年にふたたび強化された日本の建築の基準は、柱の足元と頭に、位置ごとに計算された鋼の接合金物を求める。伝統的なやり方で建てる大工はいま、古い仕口に目立たない金物を組み合わせるか、剛さではなく仕口のめり込みがエネルギーを吸う変形に頼る、伝統構法のための設計法を使う。",
            zh:"傳統接合在受壓時極佳、受彎時也不錯，但純木接合可能在地震或颱風對輕骨架施加的突然上拔力下被拉開。歷史上的建造者會在關鍵處使用鐵件——手工鍛造的和釘、鐵鋦與鐵箍——而沉重的瓦屋頂則以自重壓住骨架。日本現代建築標準在 1995 年阪神大地震後、2000 年再度強化，要求在柱腳與柱頭設置依位置計算的鋼製接合五金。以傳統方式建造的木匠，如今或把古老接合與不顯眼的金屬件結合，或採用傳統構法的設計方法，依靠接合處的擠壓變形吸收能量，而非依靠剛性。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Rigid frame with connectors", ja:"金物で固める軸組", zh:"以五金固定的剛性骨架" },
              text:{
                en:"Standard modern house: precut joints, hold-down bolts, plywood shear walls. Designed to resist deformation; predictable, calculable, economical.",
                ja:"標準的な現代の家。プレカットの仕口、ホールダウン金物、合板の耐力壁。変形に抗うよう設計され、予測でき、計算でき、経済的。",
                zh:"標準現代住宅：預切接合、抗拉拔螺栓、合板剪力牆。設計目標是抵抗變形；可預測、可計算、經濟。" } },
            { title:{ en:"Traditional flexible frame", ja:"伝統構法のしなやかな軸組", zh:"傳統柔性骨架" },
              text:{
                en:"Deep joints, through-ties (nuki) and wedges; the frame sways and the joints crush slightly, absorbing energy. More timber and labour; harder to calculate; beautiful and repairable.",
                ja:"深い仕口、貫、楔。軸組は揺れ、仕口がわずかにめり込んでエネルギーを吸う。材も手間も多く、計算は難しいが、美しく、直せる。",
                zh:"深接合、貫穿式橫材（貫）與木楔；骨架搖擺，接合處輕微擠壓，吸收能量。用料與人工較多、較難計算；但美觀且可修復。" } }
          ] }
      ] },
    { t:"section",
      id:"how-joints-work",
      title:{ en:"How the classic joints work", ja:"代表的な継手・仕口の働き", zh:"經典接頭如何運作" },
      jp:"蟻・鎌・追掛大栓・金輪",
      body:[
        { t:"p",
          text:{
            en:"The two most common splices in a Japanese house frame look alike from above and behave differently. In the <em>koshikake ari-tsugi</em>, the seated dovetail splice, the end of one sill or beam is cut into a dovetail that drops from above into a matching socket in the other; the socket piece also has a ledge, the “seat”, on which the other piece rests, so that vertical load passes through wood on wood. In the <em>koshikake kama-tsugi</em>, the seated gooseneck splice, a narrow neck ends in a head that flares like a snake's: the longer neck gives more wood behind the head to resist pulling, which is why it is preferred where a sill or beam may be pulled apart. Both are cut so that the joint sits just beyond a support, where bending is small, and both are now cut by machine in almost every new house.",
            ja:"日本の住宅の軸組で最もよく使われる二つの継手は、上から見ると似ているが、働きが違う。<em>腰掛蟻継ぎ</em>では、一方の土台や梁の端を蟻形に刻み、もう一方の同じ形の穴に上から落とし込む。穴のある材には「腰掛け」と呼ぶ段もあり、もう一方の材がそこに載ることで、上からの荷重が木と木を通じて伝わる。<em>腰掛鎌継ぎ</em>では、細い首の先に蛇の頭のように広がる頭が付く。首が長いぶん頭の後ろに引張りに抗する木が多く残るので、土台や梁が引き離されるおそれのあるところで好まれる。どちらも、曲げの小さい支点のすぐ先に継手が来るように刻まれ、いまではほとんどすべての新築住宅で機械によって加工される。",
            zh:"日本住宅骨架中最常見的兩種繼手，從上方看相似，作用卻不同。<em>腰掛蟻繼</em>（seated dovetail splice）是把一根地檻或樑的端部切成燕尾形，從上方落入另一根同形的榫孔；有榫孔的構件另有一道稱為「腰掛」的承台，讓另一根構件擱在其上，使垂直荷重以木傳木。<em>腰掛鎌繼</em>（seated gooseneck splice）則是在細頸末端接一個像蛇頭般外擴的頭部：頸部較長，頭部後方保留更多木材以抵抗拉力，因此在地檻或樑可能被拉開之處較受青睞。兩者都刻在支點稍外側、彎矩較小的位置，如今幾乎所有新建住宅都以機器加工。" } },
        { t:"figure",
          caption:{
            en:"The male and female halves of two seated splices, seen from above and pulled apart, schematic and simplified. In both, the male end drops into the female socket from above and rests on a ledge (the seat) not shown in plan; the gooseneck's neck puts more wood behind the head to resist tension.",
            ja:"二つの腰掛け系の継手の男木と女木を上から見て引き離した図（模式図、簡略化）。どちらも男木の端を女木の穴に上から落とし込み、平面図には現れない段（腰掛け）に載せる。鎌継ぎの首は、頭の後ろに引張りに抗する木を多く残す。",
            zh:"兩種腰掛式繼手的公榫與母榫，由上方俯視並拉開（示意圖，已簡化）。兩者都是把公榫端部從上方落入母榫的榫孔，並擱在平面圖上看不到的承台（腰掛）上；鎌繼的頸部在頭部後方保留更多木材以抵抗拉力。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 330" role="img">';
            s += F.text(20, 28, lang==="en" ? "TWO SPLICES FROM ABOVE" : (lang==="ja" ? "上から見た二つの継手" : "俯視兩種繼手"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            function row(y, female, male, name, desc){
              var r = '<path d="' + female + '" fill="#E7DFD2" stroke="#7C6B52"/>' + '<path d="' + male + '" fill="#EADCC1" stroke="#7C6B52"/>';
              r += F.text(40, y - 10, L(name), { size:12, fill:"#201E1B", serif:true });
              r += F.text(40, y + 82, L(desc), { size:10.5, fill:"#55504A", max:118, lh:13 });
              return r;
            }
            var y1 = 72, y2 = 205;
            s += row(y1,
              "M40 " + y1 + " H300 V" + (y1+18) + " L260 " + (y1+10) + " V" + (y1+50) + " L300 " + (y1+42) + " V" + (y1+60) + " H40 Z",
              "M720 " + y1 + " H470 V" + (y1+18) + " L430 " + (y1+10) + " V" + (y1+50) + " L470 " + (y1+42) + " V" + (y1+60) + " H720 Z",
              { en:"Seated dovetail splice (koshikake ari-tsugi)", ja:"腰掛蟻継ぎ", zh:"腰掛蟻繼" },
              { en:"The dovetail widens towards its tip, so it locks against pulling; short and quick to cut, used for sills and purlins.", ja:"蟻は先に向かって広がるので、引き抜きに対して掛かる。短く刻みやすく、土台や母屋に使う。", zh:"燕尾向末端擴大，因此能抵抗拉拔；短而易加工，用於地檻與桁條。" });
            s += row(y2,
              "M40 " + y2 + " H300 V" + (y2+24) + " H276 V" + (y2+18) + " L236 " + (y2+8) + " V" + (y2+52) + " L276 " + (y2+42) + " V" + (y2+36) + " H300 V" + (y2+60) + " H40 Z",
              "M720 " + y2 + " H470 V" + (y2+24) + " H446 V" + (y2+18) + " L406 " + (y2+8) + " V" + (y2+52) + " L446 " + (y2+42) + " V" + (y2+36) + " H470 V" + (y2+60) + " H720 Z",
              { en:"Seated gooseneck splice (koshikake kama-tsugi)", ja:"腰掛鎌継ぎ", zh:"腰掛鎌繼" },
              { en:"A narrow neck and a flared head; the longer joint resists tension better, used for sills and beams that may be pulled apart.", ja:"細い首と広がる頭。継手が長いぶん引張りに強く、引き離されるおそれのある土台や梁に使う。", zh:"細頸與外擴的頭部；接頭較長、抗拉較佳，用於可能被拉開的地檻與樑。" });
            s += F.text(170, y1 + 36, L({ en:"female (mesu)", ja:"女木（めす）", zh:"母榫（女木）" }), { size:10.5, fill:"#55504A", anchor:"middle" });
            s += F.text(600, y1 + 36, L({ en:"male (osu)", ja:"男木（おす）", zh:"公榫（男木）" }), { size:10.5, fill:"#55504A", anchor:"middle" });
            s += F.text(170, y2 + 36, L({ en:"female (mesu)", ja:"女木（めす）", zh:"母榫（女木）" }), { size:10.5, fill:"#55504A", anchor:"middle" });
            s += F.text(600, y2 + 36, L({ en:"male (osu)", ja:"男木（おす）", zh:"公榫（男木）" }), { size:10.5, fill:"#55504A", anchor:"middle" });
            s += '<path d="M330 ' + (y1+30) + ' h70 m-6 -4 l6 4 l-6 4" fill="none" stroke="#8B857C"/>';
            s += '<path d="M330 ' + (y2+30) + ' h50 m-6 -4 l6 4 l-6 4" fill="none" stroke="#8B857C"/>';
            return s + '</svg>'; } },
        { t:"defs",
          items:[
            { term:{ en:"Stepped splice with pins", ja:"追掛大栓継ぎ", zh:"追掛大栓繼" },
              jp:"おっかけだいせんつぎ",
              def:{
                en:"Two long, sloping scarf faces with small steps lock the pieces together lengthwise; two large hardwood pins driven through from the side draw them tight. Long and laborious, it is used for beams and plates carrying bending, and is among the strongest splices.",
                ja:"段の付いた長い斜めの接触面で二つの材を長さ方向に噛み合わせ、側面から打ち込む二本の堅木の大栓で締め付ける。長く手間がかかるが、曲げを受ける梁や桁に使われ、最も強い継手の一つである。",
                zh:"以兩道帶小階的長斜接面讓兩根構件縱向互鎖，再從側面打入兩根硬木大栓將其拉緊。加工長而費工，用於承受彎曲的樑與桁，是最強的繼手之一。" } },
            { term:{ en:"Ring splice", ja:"金輪継ぎ", zh:"金輪繼" },
              jp:"かなわつぎ",
              def:{
                en:"A similar locked scarf that can be slid together sideways and is closed by a central key. Because it needs no lifting into place, it is the classic way to cut out the rotted foot of a standing post and splice in new wood.",
                ja:"同じように噛み合う斜めの継手だが、横から滑り込ませて組み、中央の栓で締める。持ち上げて落とし込む必要がないので、立っている柱の腐った足元を切り取り、新しい材を継ぐ根継ぎの定番である。",
                zh:"同樣互鎖的斜接繼手，但可從側面滑入組合，再以中央的栓鎖緊。因為不需抬起落入，它是切除立柱腐朽根部、接上新料（根繼）的經典做法。" } },
            { term:{ en:"Housed dovetail", ja:"大入れ蟻掛け", zh:"大入蟻掛" },
              jp:"おおいれありかけ",
              def:{
                en:"A shiguchi in which the whole end of a joist or small beam sits in a shallow housing in the main beam, with a dovetail below to stop it pulling out; the housing carries the load, the dovetail holds the position.",
                ja:"根太や小梁の端全体を大梁の浅い彫り込みに納め、その下の蟻で抜けを止める仕口。荷重は彫り込みが受け、蟻が位置を保つ。",
                zh:"把擱柵或小樑的整個端部嵌入主樑的淺槽，下方再以燕尾防止拔出的仕口；荷重由嵌槽承受，燕尾負責定位。" } }
          ] }
      ] },
    { t:"section",
      id:"precut",
      title:{ en:"Joints by machine", ja:"機械が刻む継手", zh:"機器加工的接頭" },
      jp:"プレカット",
      body:[
        { t:"p",
          text:{
            en:"Until the 1990s most Japanese house frames were still marked out on an <em>itazu</em> and cut by hand in the carpenter's own shed, a job of weeks before the raising day. Precut plants changed that. The designer's plan is entered into a dedicated CAD system, which works out every post and beam with its joints and grid address; the data drive a line of machines in which milling heads cut dovetails, goosenecks, housings and tenons in standard proportions, saws trim the lengths and printers mark each piece. A frame for an ordinary house can be cut in hours and delivered as a numbered bundle. The share of post-and-beam houses framed with precut timber rose from 32% in 1995 to 79% in 2005, 93% in 2020 and 94% in 2024. The machines reproduce the shapes of the old joints, but in a narrow repertoire and usually combined with metal hardware; complex joints such as the stepped splice with pins, and the reading of each log's bend and grain that guided the hand-cut frame, remain the work of carpenters who still cut by hand.",
            ja:"一九九〇年代まで、日本の住宅の軸組の多くは、まだ<em>板図</em>に墨付けされ、大工の作業場で手で刻まれていた。建前の日までに何週間もかかる仕事だった。プレカット工場がそれを変えた。設計者の図面を専用のCADに入力すると、すべての柱と梁について継手・仕口と番付が割り出される。そのデータで機械の列が動き、カッターが蟻や鎌、大入れ、ほぞを標準の寸法で刻み、のこぎりが長さを切りそろえ、印字機が部材ごとに記号を付ける。ふつうの住宅一棟の軸組は数時間で加工され、番付された束として届けられる。在来の軸組構法の住宅のうちプレカット材を使う割合は、一九九五年の32パーセントから、二〇〇五年に79パーセント、二〇二〇年に93パーセント、二〇二四年に94パーセントへと上がった。機械は昔の継手の形を再現するが、その種類は限られ、ふつうは金物と組み合わされる。追掛大栓継ぎのような複雑な継手や、丸太の曲がりや木目を読んで刻む手刻みの軸組は、いまも手で刻む大工の仕事である。",
            zh:"直到 1990 年代，日本住宅骨架大多仍在<em>板圖</em>上劃線，在木匠自己的工棚裡以手工刻製，上樑日前要花上數週。預切工廠改變了這一切。設計者的圖面輸入專用 CAD 系統，自動算出每根柱與樑的繼手、仕口與番付；這些資料驅動一整條機器生產線：銑刀以標準比例切出燕尾、鎌頭、嵌槽與榫頭，鋸子裁定長度，印字機為每根構件標記。一般住宅的骨架數小時即可加工完成，以編號成捆的方式送達。採用預切材的軸組工法住宅比例，從 1995 年的 32%，升至 2005 年的 79%、2020 年的 93% 與 2024 年的 94%。機器重現了舊接頭的形狀，但種類有限，且通常搭配金屬五金；追掛大栓繼等複雜接頭，以及依每根原木的彎曲與紋理來刻製的手刻骨架，仍是堅持手工的木匠的工作。" } },
        { t:"figure",
          caption:{
            en:"Share of timber post-and-beam houses in Japan framed with precut timber, selected years. Source: Forestry Agency, “Current state and issues: 4. Wood industry” (edition with data to 2024).",
            ja:"日本の木造軸組構法の住宅のうちプレカット材を使う割合（抜粋年）。出典：林野庁「現状と課題 4 木材産業」（二〇二四年までのデータを含む版）。",
            zh:"日本木造軸組工法住宅中採用預切材的比例（選定年份）。資料來源：林野廳〈現狀與課題 4 木材產業〉（含至 2024 年資料之版本）。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Precut share of house frames", ja:"軸組のプレカット率", zh:"骨架預切率" }, unit:"%", tick:20, h:170, max:100,
            hl:["2024"],
            items:[ { x:"1995", v:32 }, { x:"2000", v:52 }, { x:"2005", v:79 }, { x:"2010", v:87 }, { x:"2015", v:91 }, { x:"2020", v:93 }, { x:"2024", v:94 } ] }); } }
      ] },
    { t:"section",
      id:"two-trades",
      title:{ en:"Two trades of joinery", ja:"二つの組み手の仕事", zh:"兩種接合工藝" },
      jp:"大工と指物師",
      body:[
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Carpenter (daiku)", ja:"大工", zh:"木匠（大工）" },
              jp:"建築の継手・仕口",
              text:{
                en:"Joins posts and beams of 10 to 30 centimetres section, often of sugi and hinoki not fully dry. Joints must carry loads, tolerate shrinkage and settlement, and go together on the raising day with mallets and pins; a millimetre or so is acceptable, and a frame is meant to be taken apart and repaired over centuries.",
                ja:"十〜三十センチメートル角の柱や梁を、しばしば乾ききらないスギやヒノキで組む。継手は荷重を受け、収縮や沈みに耐え、建前の日に掛矢と栓で組み上がらねばならない。一ミリほどの誤差は許され、軸組は何世紀にもわたって解体し修理されることを前提とする。",
                zh:"以斷面 10 至 30 公分、常是尚未完全乾燥的柳杉與扁柏組合柱與樑。接頭必須承重、容許收縮與沉陷，並在上樑日以大木槌與木栓組裝完成；約一公釐的誤差可以接受，骨架本就預期在數百年間拆解修繕。" } },
            { title:{ en:"Cabinetmaker (sashimono-shi)", ja:"指物師", zh:"指物師（細木作）" },
              jp:"指物の組手",
              text:{
                en:"Joins thin, thoroughly seasoned boards of kiri, keyaki, mulberry or hinoki into chests, boxes and tables. Joints are hidden, cut to a fraction of a millimetre, and judged by how a drawer slides and a lid seats; they bear little load but must not open as the wood moves with the seasons.",
                ja:"よく乾かしたキリ、ケヤキ、クワ、ヒノキの薄い板を、たんすや箱や机に組む。組手は隠され、一ミリの何分の一かの精度で刻まれ、引き出しの滑りや蓋の納まりで評価される。荷重はほとんど受けないが、季節ごとの木の動きで開いてはならない。",
                zh:"以充分乾燥的泡桐、櫸木、桑木或扁柏薄板，組成衣櫃、箱子與桌子。接頭隱藏不露，精度達零點幾公釐，以抽屜滑動與蓋子密合的程度評判；幾乎不承重，但不得隨季節的木材伸縮而開裂。" } }
          ] },
        { t:"p",
          text:{
            en:"The two trades meet in Hida. Its furniture factories use machine-cut mortise-and-tenon and dowel joints, glued and tested to industrial standards, while the carpenters of Takayama and Furukawa kept the large-section joinery of houses, storehouses and festival floats (see <a href=\"furniture.html\">Hida Furniture</a> and <a href=\"learning.html\">How People Learn It</a>).",
            ja:"二つの仕事は飛騨で出会う。家具工場は機械で刻んだほぞやダボの接合を接着し、工業規格で試験する。一方、高山や古川の大工は、町家や土蔵や祭り屋台の太い材の組み手を守ってきた（<a href=\"furniture.html\">飛騨の家具</a>と<a href=\"learning.html\">人はいかに学ぶか</a>を参照）。",
            zh:"兩種工藝在飛驒交會。當地家具工廠採用機器加工的榫接與木釘接合，上膠並依工業標準測試；高山與古川的木匠則守住町家、土藏與祭典屋台的大斷面接合（見<a href=\"furniture.html\">飛驒家具</a>與<a href=\"learning.html\">人們如何學會它</a>）。" } }
      ] },
    { t:"section",
      id:"testing",
      title:{ en:"Testing the old joints", ja:"昔の継手を試す", zh:"測試傳統接頭" },
      jp:"接合部の性能評価",
      body:[
        { t:"p",
          text:{
            en:"Because the building code is written in numbers, traditional joints have had to be measured. A national research project on design methods for traditional timber construction, begun in fiscal 2010, sorted Japan's many named joints into basic types — <em>tsugite</em>, <em>shiguchi</em> and <em>hagi</em>, the edge joints that join boards side by side — and chose 22 basic joints for a database and for element tests. Later work has filled in the numbers. In a study begun in fiscal 2018 with the Japan Housing and Wood Technology Center, the Hokkaido Forest Products Research Institute pulled apart hand-cut seated gooseneck splices, ring splices and stepped splices with pins in sugi of strength class E70, in members 120 millimetres wide and up to 300 deep, under repeated loading. The maximum load rose with the depth of the member and the length of the joint, but less than the added shear area would suggest; the failure shifted from wood shearing off behind the head to local crushing of the gooseneck's “jaw”; and joints locked with pins gave the most stable, consistently high performance. Results like these let engineers calculate a hand-cut frame instead of replacing its joints with steel.",
            ja:"建築の基準は数字で書かれているので、伝統の継手も測られねばならなかった。二〇一〇年度に始まった伝統的構法の設計法をつくる国の研究事業は、名のある数多くの接合を、<em>継手</em>、<em>仕口</em>、そして板を横に並べてつなぐ<em>矧ぎ</em>という基本の型に整理し、データベースと要素実験のために22の基本的な接合を選んだ。その後の研究が数字を埋めてきた。二〇一八年度に日本住宅・木材技術センターと始めた研究で、北海道立総合研究機構林産試験場は、強度等級E70のスギで幅120ミリメートル、せい最大300ミリメートルの部材に刻んだ手刻みの腰掛鎌継ぎ、金輪継ぎ、追掛大栓継ぎを、繰り返し荷重をかけて引っ張った。最大荷重は材のせいと継手の長さとともに増えたが、増えたせん断面積ほどには上がらなかった。壊れ方は、頭の後ろの木がせん断で抜ける形から、鎌の「あご」が部分的にめり込む形へ移った。そして栓で締めた継手が、ばらつきが小さく安定して高い性能を示した。こうした結果があってはじめて、技術者は継手を鋼に替えずに手刻みの軸組を計算できる。",
            zh:"由於建築法規是以數字寫成，傳統接頭也必須被量測。2010 年度啟動的傳統工法設計法國家研究計畫，把日本眾多有名稱的接合整理為基本類型——<em>繼手</em>、<em>仕口</em>，以及將木板側向並接的<em>矧</em>——並選出 22 種基本接合建立資料庫、進行要素試驗。後續研究補上了數據。在 2018 年度與日本住宅・木材技術中心合作展開的研究中，北海道立綜合研究機構林產試驗場以強度等級 E70 的柳杉、寬 120 公釐、梁深最高 300 公釐的構件，對手刻的腰掛鎌繼、金輪繼與追掛大栓繼施加反覆拉力。最大荷重隨構件深度與接頭長度增加，但增幅不如剪力面積的增加；破壞模式從頭部後方木材剪斷，轉為鎌頭「顎部」局部壓陷；以木栓鎖緊的接頭表現最穩定、一致且高。有了這類結果，工程師才能計算手刻骨架，而不必把接頭換成鋼件。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, “Current state and issues: 4. Wood industry” (precut rates); Hokkaido Research Organization, Forest Products Research Institute, “Performance evaluation of joints in traditional timber houses” (FY2018 report); report of the project on design methods for traditional timber construction, section 5.3 (FY2010).",
            ja:"出典：林野庁「現状と課題 4 木材産業」（プレカット率）、北海道立総合研究機構林産試験場「伝統的木造住宅等の接合部性能評価」（二〇一八年度報告）、伝統的構法の設計法作成及び性能検証実験 報告書 第5.3節（二〇一〇年度）。",
            zh:"資料來源：林野廳〈現狀與課題 4 木材產業〉（預切率）、北海道立綜合研究機構林產試驗場〈傳統木造住宅等接合部性能評估〉（2018 年度報告）、傳統工法設計法製作及性能驗證實驗報告書第 5.3 節（2010 年度）。" } }
      ] },
    { t:"related",
      items:[
        { href:"takumi.html", why:{ en:"The carpenters of Hida.", ja:"飛騨の匠。", zh:"飛驒的匠人。" } },
        { href:"tools.html", why:{ en:"The saws, chisels and planes.", ja:"鋸、鑿、鉋。", zh:"鋸、鑿與刨。" } },
        { href:"sawmill.html", why:{ en:"Precut: joints cut by machine.", ja:"プレカット：機械で刻む仕口。", zh:"預切：機器加工接合。" } },
        { href:"architecture.html",
          why:{ en:"Joinery in temples and festival floats.", ja:"社寺と祭屋台の仕口。", zh:"寺社與祭典屋台中的接合。" } }
      ] }
  ] };

/* ---- --------------------------------------------- tools */
GIFU.pages["tools"] = { kicker:{ en:"Timber · 11", ja:"木材 · 11", zh:"木材 · 11" },
  title:{ en:"Tools", ja:"道具", zh:"工具" },
  jp:"鋸・鉋・鑿 · 関の刃物",
  lede:{
    en:"Japanese woodworking tools are recognisable at a glance: saws that cut on the pull stroke with blades thin enough to flex, planes that are simply a block of oak with a wedged blade, chisels with laminated steel edges hard enough to hold a mirror polish. They evolved together with the timbers they were made to work — soft, straight-grained conifers above all — and with a culture that finishes wood with an edge rather than an abrasive. Gifu has its own place in this story: the city of Seki has made blades for some eight hundred years. This page explains the main tools, how they are made and why they work as they do.",
    ja:"日本の木工の道具はひと目でわかる。しなるほど薄い刃で、引いて切る鋸。樫の台に楔で刃を留めただけの鉋。鏡のように研ぎあげても刃こぼれしないほど硬い鋼を合わせた鑿。それらは、それが加工するために生まれた木——何よりやわらかく通直な針葉樹——と、研磨材ではなく刃物で木を仕上げる文化とともに育った。岐阜にはこの物語のなかで自らの場所がある。関の町はおよそ八百年、刃物をつくってきた。この頁は主な道具、そのつくり方、そしてそれがなぜそのように働くのかを説明する。",
    zh:"日本木工工具一眼即可辨認：拉切的鋸子，鋸片薄到可以彎曲；刨子不過是一塊橡木台座，以楔子固定刀片；鑿子的鋼刃經複合鍛造，硬到能研磨出鏡面而不崩刃。它們與所要加工的木材——尤其是柔軟、紋理通直的針葉樹——以及以刀刃而非研磨材完成木材表面的文化共同演化。岐阜在這段故事中有自己的位置：關市製作刀刃已約八百年。本頁介紹主要工具、其製作方式，以及它們為何如此運作。" },
  body:[
    { t:"section",
      id:"pull",
      title:{ en:"Cutting on the pull", ja:"引いて切る", zh:"拉切" },
      jp:"引き使い",
      body:[
        { t:"p",
          text:{
            en:"The most fundamental difference between Japanese and Western hand tools is direction. A Western saw or plane cuts when pushed; a Japanese one cuts when pulled towards the worker. A blade in tension cannot buckle, so a Japanese saw can be much thinner than a Western one: it removes less wood, needs less effort and leaves a finer cut. Planes are pulled too, the worker walking backwards along a board or drawing the plane towards the body in long, even strokes. The pull stroke suits a worker sitting or kneeling on the floor, as Japanese carpenters traditionally did, and it demands a very sharp edge, because there is less force behind it.",
            ja:"日本と西洋の手道具のいちばん根本の違いは向きである。西洋の鋸や鉋は押すと切れ、日本のものは手前に引くと切れる。引張を受ける刃は座屈しないので、日本の鋸は西洋のものよりずっと薄くできる。削る木が少なく、力が少なくてすみ、挽き口が細かい。鉋も引く。職人は板に沿って後ずさりし、あるいは体のほうへ長くそろった動きで引き寄せる。引く使い方は、日本の大工が伝統的にそうしたように床に座ったりひざをついたりして働く者に合い、後ろにかかる力が小さいぶん、とても鋭い刃を求める。",
            zh:"日本與西方手工具最根本的差異在於方向。西方的鋸與刨是推切，日本的則是朝自己拉切。受拉的刀片不會挫屈，因此日本鋸片能比西方鋸薄得多：切除的木材較少、較省力、鋸口也更細。刨子同樣是拉的，工匠沿著木板倒退行走，或以長而均勻的動作把刨子拉向身體。拉切適合如傳統日本木匠般坐或跪在地上工作的人，而且由於施力較小，需要極為鋒利的刃口。" } },
        { t:"table",
          caption:{ en:"Principal Japanese saws", ja:"日本の主な鋸", zh:"日本主要鋸具" },
          cols:[
            { en:"Saw", ja:"鋸", zh:"鋸" },
            { en:"Reading", ja:"読み", zh:"讀音" },
            { en:"Form", ja:"形", zh:"形制" },
            { en:"Use", ja:"用途", zh:"用途" }
          ],
          rows:[
            [
              { en:"Double-edged saw", ja:"両刃鋸", zh:"雙刃鋸" },
              "りょうば",
              { en:"Rip teeth on one edge, crosscut teeth on the other", ja:"片側に縦挽き、もう片側に横挽きの歯", zh:"一側縱切齒，另一側橫切齒" },
              { en:"The carpenter's all-purpose saw", ja:"大工の万能の鋸", zh:"木匠的萬用鋸" }
            ],
            [
              { en:"Backed saw", ja:"胴付鋸", zh:"胴付鋸" },
              "どうづき",
              { en:"Very thin blade stiffened by a metal spine", ja:"金属の背で補強したごく薄い刃", zh:"以金屬背脊加強的極薄鋸片" },
              { en:"Precise joinery: shoulders of tenons, dovetails", ja:"精密な仕口：ほぞの胴付き、蟻", zh:"精密接合：榫肩、燕尾" }
            ],
            [
              { en:"Single-edged saw", ja:"片刃鋸", zh:"單刃鋸" },
              "かたば",
              { en:"Teeth on one edge, no spine", ja:"片側だけの歯、背なし", zh:"單側有齒，無背脊" },
              { en:"Deep cuts, general work", ja:"深い挽き、一般の仕事", zh:"深切、一般作業" }
            ],
            [
              { en:"Groove saw", ja:"畔挽鋸", zh:"畔挽鋸" },
              "あぜびき",
              { en:"Short curved blade", ja:"短く反った刃", zh:"短而弧形的鋸片" },
              { en:"Starting cuts in the middle of a board, grooves", ja:"板の途中からの挽き始め、溝", zh:"在板中間起鋸、開槽" }
            ],
            [
              { en:"Keyhole saw", ja:"廻し挽き鋸", zh:"迴轉鋸" },
              "まわしびき",
              { en:"Narrow tapering blade", ja:"細く先の細まる刃", zh:"窄而漸縮的鋸片" },
              { en:"Curves and openings", ja:"曲線や穴", zh:"曲線與開孔" }
            ],
            [
              { en:"Great rip saw", ja:"前挽大鋸", zh:"前挽大鋸" },
              "まえびきおが",
              { en:"Huge broad blade worked by one sawyer", ja:"一人で挽く幅広の大きな刃", zh:"由一名鋸工操作的巨大寬鋸" },
              {
                en:"Ripping logs into beams and boards before sawmills",
                ja:"製材所以前に丸太を梁や板に挽き割る",
                zh:"製材所出現前把原木縱鋸成樑與板" }
            ]
          ] },
        { t:"figure",
          caption:{
            en:"Typical blade thickness of hand saws for fine joinery, in millimetres: a Japanese backed saw against a Western backsaw of similar purpose. The thinner blade removes less wood and needs less force. Approximate values; individual saws vary.",
            ja:"細かな仕口のための手鋸の典型的な刃の厚さ（ミリ）。日本の胴付鋸と、同じような目的の西洋の背付き鋸。薄い刃は削る木が少なく、力も少なくてすむ。おおよその値で、鋸ごとに違う。",
            zh:"精細接合用手鋸的典型鋸片厚度（公釐）：日本胴付鋸與用途相近的西式背鋸比較。較薄的鋸片切除木材較少、也較省力。數值為約略值，個別鋸具不同。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Blade thickness", ja:"刃の厚さ", zh:"鋸片厚度" }, labelW:260, unit:"mm", dec:1, max:0.9,
            items:[
              { n:{ en:"Japanese dozuki (pull)", ja:"日本の胴付鋸（引き）", zh:"日本胴付鋸（拉切）" }, v:0.3, f:"#E0E6DB" },
              { n:{ en:"Japanese ryōba (pull)", ja:"日本の両刃鋸（引き）", zh:"日本雙刃鋸（拉切）" }, v:0.5, f:"#E0E6DB" },
              { n:{ en:"Western backsaw (push)", ja:"西洋の背付き鋸（押し）", zh:"西式背鋸（推切）" }, v:0.8, f:"#E6E4E0" }
            ] }); } }
      ] },
    { t:"section",
      id:"planes",
      title:{ en:"The plane", ja:"鉋", zh:"刨" },
      jp:"かんな",
      body:[
        { t:"p",
          text:{
            en:"A Japanese plane, <em>kanna</em>, is a rectangular block of dense evergreen oak with a slot into which a thick, tapered blade is driven and held by friction alone; since the Meiji period most also have a second iron, the chipbreaker, to reduce tear-out. The carpenter tunes the sole of the block with a scraper to hollow it very slightly, and adjusts the blade by tapping it with a hammer. A skilled carpenter can take continuous shavings from a hinoki board thinner than a sheet of paper — a few thousandths of a millimetre at the extreme — and planing competitions in Japan are judged by holding the shaving up to the light. A surface finished this way cuts the fibres cleanly instead of tearing them, looks luminous, and stays clean longer than a sanded one.",
            ja:"日本の鉋は、目の詰んだカシの四角い台に溝を掘り、厚くテーパーのついた刃を打ちこんで、摩擦だけで留めたものである。明治からは多くが二枚目の刃、裏金をもち、逆目を抑える。大工は台の下端を台直し鉋でごくわずかにくぼませて調え、刃は槌で叩いて出し入れする。腕の良い大工は、ヒノキの板から紙より薄い——極端には千分の数ミリの——削り屑を途切れなく引くことができ、日本の削りの競技会は削り屑を光にかざして判じられる。こうして仕上げた面は、繊維をむしらずにきれいに断ち、光を帯びて見え、サンドペーパーで仕上げた面より長くきれいに保たれる。",
            zh:"日本刨「鉋」是一塊緻密常綠櫟木的長方形台座，開有槽口，將一片厚而漸縮的刀片打入其中，全靠摩擦力固定；自明治時代起，多數還附有第二片刃——壓鐵（裏金）——以減少逆紋撕裂。木匠會用刮刀把台座底面修成極微凹，並以錘子敲擊刀片調整出刃。熟練的木匠能從扁柏板上刨出比紙還薄、連續不斷的刨花——極致者僅千分之幾公釐——日本的刨削比賽便是把刨花舉向光線來評判。以此方式完成的表面，纖維被乾淨地切斷而非撕裂，看起來透亮，而且比砂磨的表面更能長久保持潔淨。" } }
      ] },
    { t:"section",
      id:"steel",
      title:{ en:"Laminated steel", ja:"鋼と地金", zh:"複合鋼" },
      jp:"鍛接",
      body:[
        { t:"p",
          text:{
            en:"The edge of a Japanese chisel or plane blade is a thin layer of very hard, high-carbon steel (<em>hagane</em>) forge-welded to a thicker body of soft iron or mild steel (<em>jigane</em>). The hard steel holds a keen edge; the soft backing absorbs shock, makes the tool easier to sharpen and stops it from shattering. The back of the blade is hollowed so that only a narrow rim needs to be polished flat. Sharpening on a progression of water stones, from coarse to very fine, is a daily ritual, and a Japanese carpenter traditionally judged an apprentice first by the state of his tools.",
            ja:"日本の鑿や鉋の刃先は、とても硬い高炭素の鋼（はがね）の薄い層を、それより厚いやわらかな鉄や軟鋼（地金）に鍛接したものである。硬い鋼は鋭い刃を保ち、やわらかな裏打ちは衝撃を吸い、研ぎを楽にし、刃物が砕けるのを防ぐ。刃の裏はくぼませてあり（裏すき）、細い縁だけを平らに研げばよい。粗いものからとても細かいものへと水砥石を替えて研ぐのは毎日の儀式で、日本の大工は昔、見習いをまずその道具の状態で判じた。",
            zh:"日本鑿子或刨刀的刃口，是一層極硬的高碳鋼（鋼，hagane）鍛接在較厚的軟鐵或低碳鋼（地金，jigane）本體上。硬鋼保持鋒利刃口；軟質背材吸收衝擊、讓工具更易研磨，並防止碎裂。刀片背面挖成凹面（裏透），只需把窄窄的邊緣磨平即可。由粗到極細依序使用水磨石研磨是每日的儀式；傳統上，日本木匠首先以學徒工具的狀態來評判他。" } },
        { t:"defs",
          items:[
            { term:{ en:"Chisels", ja:"鑿", zh:"鑿" },
              jp:"のみ",
              def:{
                en:"A carpenter's set runs from 3 mm to over 40 mm. Striking chisels (<em>tataki-nomi</em>) with steel hoops on their handles are driven with a heavy hammer to cut mortises; paring chisels (<em>tsuki-nomi</em>), with long handles and no hoop, are pushed by hand to finish surfaces.",
                ja:"大工の一揃いは三ミリから四十ミリ超まで。柄に鉄の桂をはめた叩き鑿は重い玄能で打ってほぞ穴を掘り、桂のない長い柄の突き鑿は手で押して面を仕上げる。",
                zh:"木匠一套鑿子從 3 公釐到超過 40 公釐。柄上套有鋼箍的敲鑿（叩き鑿）用重錘敲打以鑿卯眼；柄長、無鋼箍的推鑿（突き鑿）以手推動來修整表面。" } },
            { term:{ en:"Axes and adzes", ja:"斧と釿", zh:"斧與錛" },
              jp:"よき・ちょうな",
              def:{
                en:"Before saws and planes could do the work, beams were hewn with broad axes and surfaced with the <em>chōna</em>, an adze swung between the feet, which leaves a rippled, scalloped surface. The chōna finish is now valued for its own sake, on exposed beams and floors in traditional houses.",
                ja:"鋸や鉋がその仕事をできるようになる前、梁は幅広の斧で削られ、足のあいだで振る手斧（ちょうな）で面を整えられた。釿は波打つ貝殻のような面を残す。釿の仕上げはいまや、それ自体の美しさのため、伝統的な家の見える梁や床に好まれる。",
                zh:"在鋸與刨能勝任之前，樑是以寬斧劈削，再以「手斧」（在雙腳之間揮動的錛）修整表面，留下波浪般的貝殼狀紋理。如今錛削表面因其本身之美而受青睞，用於傳統住宅的外露樑與地板。" } },
            { term:{ en:"The spear plane", ja:"槍鉋", zh:"槍刨" },
              jp:"やりがんな",
              def:{
                en:"A leaf-shaped blade on a long shaft, drawn along the timber like a scraper; the plane of the ancient temples, replaced by the block plane from the fifteenth century and revived in the twentieth by temple carpenters restoring buildings to their original surfaces.",
                ja:"長い柄の先の葉の形の刃で、削り器のように材の上を引く。古代の寺の鉋で、十五世紀から台鉋に取って代わられたが、二十世紀に建物をもとの面に戻す宮大工によってよみがえった。",
                zh:"長柄前端裝著葉形刃，像刮刀般沿木材拉動；是古代寺院所用的刨，自十五世紀起被台刨取代，二十世紀再由修復建築原始表面的宮大工復興。" } }
          ] }
      ] },
    { t:"section",
      id:"seki",
      title:{ en:"Seki: eight hundred years of blades", ja:"関：刃物の八百年", zh:"關市：八百年的刀刃" },
      jp:"関鍛冶",
      body:[
        { t:"p",
          text:{
            en:"Seki, on the Nagara River in central Gifu, became a centre of swordsmiths between the Kamakura and early Muromachi periods, when smiths including Motoshige and Kanemoto settled there. The place had what swordsmiths needed: good clay and water for quenching, pine charcoal from the surrounding hills, and a position on the roads of central Japan. By the Muromachi period Seki blades were famous for their sharpness, and the second-generation Kanemoto — “Seki no Magoroku” — became one of the best-known names in Japanese sword history. When the demand for swords collapsed, the smiths turned to knives, razors, scissors and tools; today Seki makes kitchen knives, scissors, razors, medical and industrial blades, and calls itself one of the world's three great blade cities, with Solingen and Sheffield.",
            ja:"岐阜の中ほど、長良川に臨む関は、鎌倉から室町の初めにかけて、元重や兼元をはじめとする刀工が住みついて刀鍛冶の中心となった。そこには刀工に要るものがあった。焼き入れのための良い土と水、まわりの丘の松の炭、そして中部日本の街道のうえの位置である。室町時代には関の刀は切れ味で名高く、二代兼元——「関の孫六」——は日本の刀の歴史で最もよく知られた名の一つとなった。刀の需要が崩れると、刀工は包丁、剃刀、鋏、道具に向かった。いま関は包丁、鋏、剃刀、医療用や工業用の刃物をつくり、ゾーリンゲン、シェフィールドとならぶ世界三大刃物産地を名乗る。",
            zh:"位於岐阜中部長良川畔的關市，在鎌倉至室町初期，因元重、兼元等刀匠定居而成為刀劍鍛造中心。此地具備刀匠所需的一切：淬火用的好土與好水、周圍山丘的松炭，以及位於日本中部交通要道上的地利。到了室町時代，關刀以鋒利聞名，第二代兼元——「關之孫六」——成為日本刀劍史上最著名的名字之一。當刀劍需求崩落，刀匠們轉而製作菜刀、剃刀、剪刀與工具；如今關市生產廚刀、剪刀、剃刀，以及醫療與工業用刀刃，並自稱與索林根、雪菲爾並列世界三大刀刃產地。" } },
        { t:"note",
          label:{ en:"Blades for woodworkers", ja:"木工のための刃物", zh:"木工用刀刃" },
          text:{
            en:"The great centres of Japanese carpentry tools are elsewhere — Miki in Hyōgo, Sanjō and Yoita in Niigata, Tosa in Kōchi — but Gifu's craftsmen have always depended on specialised edges: the knives of the Ittōbori carvers, of which a carver may own dozens; the thin spatulas and brushes of the lacquerer; the drawknives of the bentwood makers. Many are made or modified by the craftsmen themselves.",
            ja:"日本の大工道具の大きな産地はよそにある——兵庫の三木、新潟の三条と与板、高知の土佐——が、岐阜の職人はいつも特別な刃に頼ってきた。一刀彫の彫り手の小刀は、一人が何十本ももつことがある。塗師の薄い箆や刷毛、曲木職人の銑。その多くは職人自身がつくるか手を加える。",
            zh:"日本木工工具的主要產地在別處——兵庫的三木、新潟的三條與與板、高知的土佐——但岐阜的工匠一直仰賴特殊的刃具：一刀彫雕刻師的刀，一位雕刻師可能擁有數十把；漆師的薄刮刀與刷子；曲木師傅的刮刀（銑）。其中許多由工匠親自製作或改造。" } }
      ] },
    { t:"section",
      id:"marking",
      title:{ en:"Ink line and square", ja:"墨壺と曲尺", zh:"墨斗與曲尺" },
      jp:"墨壺・墨さし・曲尺",
      body:[
        { t:"p",
          text:{
            en:"Every cut begins as a line. The <em>sumitsubo</em> is an ink pot carved, traditionally, from a block of zelkova: at the front a hollow, the “pond”, packed with cotton soaked in sumi ink; at the back a reel wound with silk or cotton line; at the free end of the line a small pin, the <em>karuko</em>, which is pressed into the timber. The carpenter draws the line out through the inked cotton, pulls it taut along the timber, lifts it a little in the middle and lets go, and the line snaps a perfectly straight mark many metres long. The <em>sumisashi</em>, a pen whittled from split bamboo, is the line's partner: one end is a thin, chisel-like blade with many fine slits that holds ink for ruling short lines and squaring across, the other is pointed for writing the symbols and grid addresses that tell everyone where each piece goes. Decorated sumitsubo, carved with cranes, tortoises or the character for “longevity”, were gifts and heirlooms, and the ink line has stood for a straight and honest course since the Man'yōshū compared a lover's single-mindedness to the line snapped by a Hida carpenter (see <a href=\"poetry.html\">Wood in Letters</a>).",
            ja:"どの切断も一本の線から始まる。<em>墨壺</em>は、伝統的にはケヤキの塊を彫ってつくる墨の壺である。前には墨汁を含ませた綿を詰めた「池」と呼ぶくぼみ、後ろには絹や木綿の糸を巻いた車、糸の先には材に刺す小さな針の<em>軽子（かるこ）</em>が付く。大工は糸を墨の綿に通して引き出し、材に沿って張り、中ほどを少し持ち上げて放す。糸ははじかれて、何メートルもの完全にまっすぐな線を残す。割った竹を削ってつくる<em>墨さし</em>はその相棒である。一方の端は細い切れ目を多く入れた薄いへら状で、墨を含んで短い線や直角の線を引き、もう一方はとがらせて、各部材の行き先を示す記号や番付を書く。鶴や亀や「寿」の字を彫った飾りの墨壺は贈り物となり家宝となった。墨の線はまっすぐで偽りのない道の象徴でもあり、すでに万葉集が、恋のひたむきさを飛騨の匠の打つ墨縄にたとえている（<a href=\"poetry.html\">詩歌と文学のなかの木</a>を参照）。",
            zh:"每一刀都從一條線開始。<em>墨斗</em>（墨壺）傳統上以櫸木塊雕成：前端有個稱為「池」的凹槽，塞滿浸了墨汁的棉花；後端是纏著絲線或棉線的線輪；線的末端有一根小針，稱為<em>輕子</em>（karuko），插入木料固定。木匠把線從沾墨的棉花中拉出，沿木料拉緊，在中段略微提起再放開，墨線便彈出一條長達數公尺、絕對筆直的線。以劈開的竹子削成的<em>墨刺</em>（sumisashi）是它的搭檔：一端是刻有許多細縫、像薄鑿般的筆尖，可含墨畫短線與直角線；另一端削尖，用來書寫標示每根構件位置的記號與番付。刻有鶴、龜或「壽」字的裝飾墨斗常作為贈禮與傳家之寶；墨線也一向象徵筆直誠實的道路——早在《萬葉集》中，就以飛驒工匠彈出的墨繩比喻戀人的專一（見<a href=\"poetry.html\">詩文中的木</a>）。" } },
        { t:"p",
          text:{
            en:"The <em>sashigane</em>, or <em>kanejaku</em>, is a thin L-shaped square of steel or stainless steel. The long arm is about one and a half <em>shaku</em> — around 45 to 50 centimetres — and the short arm about half that; it is thin enough to flex around a curved log. Besides marking right angles and measuring, it calculates: the back carries two extra scales that let a carpenter read off, without arithmetic, the largest square beam a log will give and the log's circumference. The old unit survives in it: one shaku is defined as 10/33 of a metre, about 30.3 centimetres, and many carpenters still think in shaku and <em>sun</em> (a tenth of a shaku) even when the drawings are in millimetres. The <em>kebiki</em>, a marking gauge with a small blade set in a sliding fence, scores lines parallel to an edge for tenons and rebates.",
            ja:"<em>曲尺（さしがね、かねじゃく）</em>は鋼やステンレスの薄いL字形の物差しである。長手はおよそ一尺五寸——約45〜50センチメートル——、妻手はその半分ほどで、丸太の曲面に沿ってしなるほど薄い。直角を出し寸法を測るだけでなく、計算もする。裏には二つの特別な目盛りがあり、丸太から取れる最大の角材と丸太の周の長さを、計算せずに読み取れる。古い単位もここに生きている。一尺はメートルの三十三分の十、約30.3センチメートルと定められ、図面がミリメートルで描かれていても、多くの大工はいまも尺と寸（尺の十分の一）で考える。<em>罫引（けびき）</em>は、滑るあて木に小さな刃を付けた道具で、ほぞや相欠きのために縁と平行な線を刻む。",
            zh:"<em>曲尺</em>（sashigane，又稱 kanejaku）是以鋼或不鏽鋼製成的薄 L 形角尺。長邊約 1.5 <em>尺</em>——約 45 至 50 公分——短邊約為其一半；薄到可以順著原木曲面彎曲。它除了畫直角與量尺寸，還能計算：背面有兩種特殊刻度，讓木匠不必算術就能讀出原木可取得的最大方材，以及原木的周長。舊單位也保存在其中：1 尺定義為 10/33 公尺，約 30.3 公分；即使圖面以公釐繪製，許多木匠仍以尺與<em>寸</em>（十分之一尺）思考。<em>劃線規</em>（kebiki）是在滑動靠板上裝小刀片的工具，用來為榫頭與企口刻出與邊緣平行的線。" } },
        { t:"figure",
          caption:{
            en:"How the back scales of the sashigane work, schematic. The kaku-me graduations are √2 times the ordinary unit, so a diameter measured with them gives the side of the largest square beam; the maru-me graduations are 1/π of the unit, so the same diameter reads as the circumference. Not to scale.",
            ja:"曲尺の裏目の働き（模式図）。角目の目盛りはふつうの単位の√2倍なので、これで直径を測ると最大の角材の一辺が得られる。丸目の目盛りは単位の1/πなので、同じ直径が周の長さとして読める。縮尺は正確ではない。",
            zh:"曲尺背面刻度的原理（示意圖）。角目刻度是一般單位的 √2 倍，以它量直徑即得最大方材的邊長；丸目刻度是單位的 1/π，同一直徑讀出來就是周長。未按比例。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 340" role="img">', i;
            s += F.text(20, 28, lang==="en" ? "THE CARPENTER'S SQUARE" : (lang==="ja" ? "曲尺（さしがね）" : "曲尺（さしがね）"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            s += '<rect x="40" y="262" width="420" height="16" fill="#E7DFD2" stroke="#8B857C"/>';
            s += '<rect x="40" y="70" width="16" height="208" fill="#E7DFD2" stroke="#8B857C"/>';
            for (i = 0; i <= 40; i++) { var x = 56 + i * 10; s += '<line x1="' + x + '" y1="262" x2="' + x + '" y2="' + (262 + (i % 5 === 0 ? 8 : 4)) + '" stroke="#55504A"/>'; }
            for (i = 0; i <= 19; i++) { var y = 262 - i * 10; s += '<line x1="56" y1="' + y + '" x2="' + (56 - (i % 5 === 0 ? 8 : 4)) + '" y2="' + y + '" stroke="#55504A"/>'; }
            s += F.text(250, 300, L({ en:"Long arm (nagate): about 1.5 shaku, 45–50 cm", ja:"長手：約一尺五寸（45〜50cm）", zh:"長邊（長手）：約 1.5 尺，45–50 公分" }), { size:11, fill:"#201E1B", anchor:"middle" });
            s += F.text(66, 84, L({ en:"Short arm (tsumade): about half", ja:"妻手：長手の約半分", zh:"短邊（妻手）：約為一半" }), { size:11, fill:"#201E1B" });
            s += '<circle cx="270" cy="168" r="66" fill="#F0EDE4" stroke="#8B857C"/>';
            s += '<rect x="223.3" y="121.3" width="93.4" height="93.4" fill="#E0E6DB" stroke="#7C6B52"/>';
            s += '<line x1="204" y1="168" x2="336" y2="168" stroke="#7C6B52" stroke-dasharray="4 3"/>';
            s += F.text(270, 161, L({ en:"diameter d", ja:"直径 d", zh:"直徑 d" }), { size:10.5, fill:"#55504A", anchor:"middle" });
            s += F.text(270, 188, L({ en:"side = d ÷ √2", ja:"一辺 = d ÷ √2", zh:"邊長 = d ÷ √2" }), { size:10.5, fill:"#201E1B", anchor:"middle" });
            s += F.text(270, 250, L({ en:"end of a log", ja:"丸太の木口", zh:"原木端面" }), { size:10.5, fill:"#55504A", anchor:"middle" });
            var boxes = [
              { y:60, h:74, t:{ en:"Front: ordinary scale", ja:"表目：ふつうの目盛り", zh:"正面：一般刻度" }, d:{ en:"Centimetres, or shaku and sun (1 shaku = 10/33 m ≈ 30.3 cm).", ja:"センチメートル、または尺と寸の目盛り。一尺は約30.3cm（10/33m）。", zh:"公分，或尺與寸。1 尺約 30.3 公分（10/33 公尺）。" } },
              { y:144, h:88, t:{ en:"Back, kaku-me: unit × √2", ja:"裏目・角目：単位×√2", zh:"背面角目：單位 × √2" }, d:{ en:"Laid across a log end, it reads the side of the largest square beam: a 21 cm log gives about 14.8.", ja:"木口の直径に当てると、取れる最大の角材の一辺が読める。直径21cmなら約14.8。", zh:"橫放在原木端面，讀數即最大方材的邊長：直徑 21 公分約得 14.8。" } },
              { y:242, h:80, t:{ en:"Back, maru-me: unit × 1/π", ja:"裏目・丸目：単位×1/π", zh:"背面丸目：單位 × 1/π" }, d:{ en:"The same diameter reads as the circumference: 21 cm gives about 66.", ja:"同じ直径が周の長さとして読める。21cmなら約66。", zh:"同一直徑讀出即為周長：21 公分約得 66。" } }
            ];
            for (i = 0; i < boxes.length; i++) {
              var bx = boxes[i];
              s += '<rect x="490" y="' + bx.y + '" width="250" height="' + bx.h + '" fill="' + (i === 0 ? "#F0EDE4" : "#E0E6DB") + '" stroke="#8B857C"/>';
              s += F.text(500, bx.y + 18, L(bx.t), { size:12, fill:"#201E1B", serif:true, max:36 });
              s += F.text(500, bx.y + 37, L(bx.d), { size:10.5, fill:"#55504A", max:40, lh:13 });
            }
            return s + '</svg>'; } }
      ] },
    { t:"section",
      id:"setting",
      title:{ en:"Setting up a plane", ja:"鉋の仕込み", zh:"刨子的調整" },
      jp:"荒仕工・中仕工・上仕工",
      body:[
        { t:"p",
          text:{
            en:"A carpenter owns not one plane but a family of them. Surfaces are taken down in stages with a rough plane (<em>arashiko</em>), a medium plane (<em>nakashiko</em>) and a finishing plane (<em>jōshiko</em>), each with a finer mouth and a more carefully tuned sole; beside them hang rebate planes, chamfer planes, planes with curved soles for concave work, and a plane with an upright blade used only to true the soles of the others. The blade is bedded in the block at a slope the trade describes in its own terms — typically <em>hachibu kōbai</em>, a rise of eight in ten, about 38 degrees, for softwoods such as hinoki and sugi, steeper for hard or interlocked broadleaves, which would otherwise tear. To set the cut the carpenter taps the head of the blade with a small hammer to advance it, and taps the back of the block to withdraw it, sighting along the sole until only a hair of edge shows.",
            ja:"大工がもつ鉋は一台ではなく一族である。面は、荒仕工、中仕工、上仕工と段階を踏んで削られ、あとのものほど口が狭く、台の下端が念入りに調整されている。そのそばには、際鉋、面取り鉋、凹面を削る反り台、そしてほかの鉋の下端を直すためだけに使う刃を立てた台直し鉋が並ぶ。刃は、業界の言葉で表す勾配で台に仕込まれる。ヒノキやスギのような針葉樹にはふつう<em>八分勾配</em>——十に対して八の立ち上がり、約三十八度——を用い、硬い広葉樹や木目の交錯した材には、逆目で荒れないようより立った勾配を用いる。削りを調整するには、刃の頭を小さな玄能でたたいて出し、台尻をたたいて引っ込め、下端を見通して刃がわずかに髪一筋のぞくところに合わせる。",
            zh:"木匠擁有的不是一把刨子，而是一整族。木面依序以粗刨（<em>荒仕工</em>）、中刨（<em>中仕工</em>）與精刨（<em>上仕工</em>）削整，越後者刨口越窄、刨底越精細調整；旁邊還掛著企口刨、倒角刨、削凹面的弧底刨，以及一把刀片直立、專門用來修整其他刨子底面的修底刨。刀片以業界特有的「勾配」嵌入刨台——柳杉、扁柏等針葉樹通常用<em>八分勾配</em>，即十比八的斜率，約 38 度；硬質或紋理交錯的闊葉樹則用更陡的角度，否則會逆紋撕裂。調整切削量時，木匠以小錘敲刀片頭部使其伸出，敲刨台尾端使其縮回，沿刨底瞄看，直到刃口只露出一根頭髮般的寬度。" } }
      ] },
    { t:"section",
      id:"sharpening",
      title:{ en:"Stones and sharpening", ja:"砥石と研ぎ", zh:"磨刀石與研磨" },
      jp:"荒砥・中砥・仕上砥",
      body:[
        { t:"p",
          text:{
            en:"Japanese sharpening uses water stones in three broad grades: coarse stones (<em>arato</em>) for repairing chips or reshaping a bevel, medium stones (<em>nakato</em>, around #1000 in synthetic grits) for everyday sharpening, and finishing stones (<em>shiageto</em>, #4000 and finer) that leave a mirror. The most prized natural finishing stones were quarried in the hills north-west of Kyoto, and fine natural stones now fetch collectors' prices; most working carpenters use synthetic stones, keeping a natural stone for the final polish. A stone wears hollow with use and must be flattened often, or it will round the edge it is meant to sharpen. Saws were once sharpened by specialist saw-doctors, <em>metate-shi</em>, who filed and set each tooth; since the late twentieth century most carpenters have used saws with replaceable blades whose induction-hardened teeth cannot be filed, and the saw-doctor's trade has become rare. Between uses, blades are wiped and given a thin film of camellia oil against rust.",
            ja:"日本の研ぎは、おおまかに三段階の水砥石を使う。刃こぼれを直したり刃先の角度を作り直したりする<em>荒砥</em>、日々の研ぎに使う<em>中砥</em>（人造砥石の粒度でおよそ1000番）、そして鏡のような面を残す<em>仕上砥</em>（4000番以上）である。最も珍重された天然の仕上砥は京都の北西の山で採られ、良い天然砥石はいまや収集家の値がつく。多くの現役の大工は人造砥石を使い、最後の仕上げにだけ天然砥石を使う。砥石は使ううちに中がくぼむので、こまめに平らに直さないと、研ぐはずの刃先を丸めてしまう。鋸はかつて、一枚ずつ歯をやすりで研ぎ、あさりを整える専門の目立て師が研いだ。二十世紀の終わりごろからは、多くの大工が、やすりのかからない焼き入れした歯をもつ替刃式の鋸を使うようになり、目立て師の仕事はまれになった。使わないあいだ、刃は拭いて椿油を薄く引き、さびを防ぐ。",
            zh:"日本的研磨使用三大等級的水磨石：修補崩刃或重塑刃角的<em>粗砥</em>、日常研磨的<em>中砥</em>（人造磨石約 #1000）、以及磨出鏡面的<em>精砥</em>（#4000 以上）。最珍貴的天然精砥採自京都西北方的山區，上等天然磨石如今已是收藏級價格；多數執業木匠使用人造磨石，只在最後拋光時用天然石。磨石越用中間越凹，必須經常整平，否則會把要磨利的刃口磨圓。鋸子過去由專門的「目立師」研磨，逐齒銼利並調整鋸路；自二十世紀末起，多數木匠改用可更換鋸片的鋸子，其鋸齒經高頻淬火、無法再銼，目立師這一行也變得罕見。工具不用時，刀刃擦淨後塗上一層薄薄的山茶油防鏽。" } },
        { t:"figure",
          caption:{
            en:"The usual sequence for sharpening a plane blade or chisel, schematic. Grit numbers are typical of synthetic water stones and vary between makers.",
            ja:"鉋の刃や鑿を研ぐふつうの手順（模式図）。番手は人造の水砥石の代表的な値で、メーカーによって異なる。",
            zh:"研磨刨刀或鑿子的一般步驟（示意圖）。粒度為人造水磨石的典型值，各廠牌不同。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Sharpening a blade", ja:"刃を研ぐ", zh:"研磨刀刃" }, per:3, bh:112,
            steps:[
              { t:{ en:"Flatten the stones", ja:"砥石を平らにする", zh:"整平磨石" }, d:{ en:"Rub them flat on a plate or against each other; a hollow stone rounds the edge.", ja:"面直し用の板や砥石どうしで平らにする。くぼんだ砥石は刃先を丸める。", zh:"在整平板上或兩石互磨；凹陷的磨石會把刃口磨圓。" } },
              { t:{ en:"Flatten the back", ja:"裏を押す", zh:"整平刀背" }, d:{ en:"Polish the narrow rim around the hollow back dead flat on a steel plate with abrasive.", ja:"金盤と研磨材で、くぼんだ裏のまわりの細い縁を真っ平らに磨く。", zh:"以鋼板加研磨粉，將凹背周圍的窄邊磨到完全平整。" } },
              { t:{ en:"Coarse stone", ja:"荒砥", zh:"粗砥" }, d:{ en:"Only for chips or a new bevel; often skipped.", ja:"刃こぼれや刃角の作り直しのときだけ。省くことも多い。", zh:"只在崩刃或重塑刃角時使用；常可省略。" } },
              { t:{ en:"Medium stone, about #1000", ja:"中砥（約1000番）", zh:"中砥（約 #1000）" }, d:{ en:"Hone the bevel, about 25–30°, until a fine burr forms along the edge.", ja:"約二十五〜三十度の刃先を、縁に細かい返りが出るまで研ぐ。", zh:"研磨約 25–30° 的刃面，直到刃口出現細微毛邊。" } },
              { t:{ en:"Finishing stone, #4000+", ja:"仕上砥（4000番以上）", zh:"精砥（#4000 以上）" }, d:{ en:"Polish bevel and back in turn until the burr falls away and the edge shines.", ja:"返りが取れて刃先が光るまで、刃裏と刃表を交互に磨く。", zh:"交替研磨刃面與刀背，直到毛邊脫落、刃口發亮。" } },
              { t:{ en:"Test and oil", ja:"試し削りと油", zh:"試削與上油" }, d:{ en:"Take a trial shaving; wipe the blade and give it a film of camellia oil.", ja:"試し削りをし、刃を拭いて椿油を薄く引く。", zh:"試刨一片；擦淨刀刃並塗上薄薄一層山茶油。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"seki-today",
      title:{ en:"Seki today", ja:"いまの関", zh:"今日的關市" },
      jp:"刃物のまち",
      body:[
        { t:"p", text:{ en:"Seki, the town of blades, makes few carpenters' tools: its woodworkers' blades are mostly specialised knives, but the forging is the swordsmiths' and can be watched at the Seki Swordsmith Museum on the first Sunday of most months and at the New Year's first forging. The town's seven centuries of blades are told on <a href=\"seki.html\">Seki, Town of Blades</a> and <a href=\"cutlery.html\">The Cutlery Industry</a>.", ja:"刃物のまち関は、大工道具をあまりつくらない。木工用の刃物はおもに特殊な刃物類だが、鍛えは刀匠のものであり、関鍛冶伝承館で毎月第一日曜日（多くの月）と正月の打ち初めに見ることができる。七百年の刃物の歴史は<a href=\"seki.html\">刃物のまち・関</a>と<a href=\"cutlery.html\">刃物産業</a>で述べる。", zh:"刀刃之城關市很少生產木匠工具：它的木工刃具多是特殊刀具，但鍛造之法與刀匠相同，大多數月份的第一個星期日及新年的開鍛儀式，都可在關鍛冶傳承館觀看。關市七百年的刀刃史，見<a href=\"seki.html\">刀刃之城・關</a>與<a href=\"cutlery.html\">刀具產業</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Kotobank (Nihon Daihyakka Zensho and others), “kanejaku”; nippon.com guide to Seki cutlery; Ministry of Foreign Affairs regional page on Seki; Seki city tourism pages on the Seki Kaji Denshōkan.",
            ja:"出典：コトバンク「曲尺」（日本大百科全書ほか）、nippon.com「関の刃物」、外務省 地域の魅力発信ページ（関市）、関市観光ページ（関鍛冶伝承館）。",
            zh:"資料來源：Kotobank〈曲尺〉（日本大百科全書等）、nippon.com〈關的刀具〉、外務省地方介紹頁（關市）、關市觀光網頁（關鍛冶傳承館）。" } }
      ] },
    { t:"related",
      items:[
        { href:"joinery.html", why:{ en:"What the tools are used to make.", ja:"道具でつくるもの。", zh:"工具用來做什麼。" } },
        { href:"ittobori.html", why:{ en:"Carving with knives alone.", ja:"刃物だけで彫る。", zh:"只以刀具雕刻。" } },
        { href:"properties.html",
          why:{ en:"Why some woods plane better than others.", ja:"なぜある木はほかより鉋がよくかかるか。", zh:"為何有些木材更好刨。" } },
        { href:"takumi.html", why:{ en:"The carpenters who used them.", ja:"それを使った大工。", zh:"使用它們的木匠。" } }
      ] }
  ] };

/* ---- ------------------------------------------- workers */
GIFU.pages["workers"] = { kicker:{ en:"Timber · 12", ja:"木材 · 12", zh:"木材 · 12" },
  title:{ en:"Forest Workers", ja:"山で働く人", zh:"林業工作者" },
  jp:"担い手・安全・育成",
  lede:{
    en:"Every tree planted, weeded, thinned and felled in Gifu's forests passes through the hands of a small number of people. In fiscal 2021 the prefecture counted 916 forestry workers — for some 860,000 hectares of forest. Nationally, the forestry workforce shrank for decades, aged faster than almost any other, and suffered accident rates ten times the average for all industries. This page describes who works in Gifu's forests today, the dangers of the work, and the schools and schemes that are trying to bring young people into the mountains.",
    ja:"岐阜の森で植えられ、下刈りされ、間伐され、伐られるすべての木は、ごく少数の人の手を通る。二〇二一年度、県はおよそ八十六万ヘクタールの森に対して、九百十六人の林業就業者を数えた。全国でも、林業の働き手は何十年も減りつづけ、ほかのほとんどどの産業より速く年老い、全産業の平均の十倍の災害の率に苦しんできた。この頁は、いま岐阜の森で誰が働いているか、仕事の危険、そして若い人を山へ呼びこもうとする学校と制度を述べる。",
    zh:"岐阜森林中每一棵被栽植、除草、疏伐與伐倒的樹，都經過極少數人的雙手。2021 年度，全縣約 86 萬公頃森林，只有 916 名林業從業者。在全國，林業勞動力數十年來持續萎縮，老化速度幾乎快過任何產業，事故率更是全產業平均的十倍。本頁介紹今日在岐阜森林中工作的人、這份工作的危險，以及試圖把年輕人帶進山林的學校與制度。" },
  body:[
    { t:"section",
      id:"who",
      title:{ en:"A shrinking, ageing workforce", ja:"減り、年老いる担い手", zh:"萎縮且老化的勞動力" },
      jp:"林業就業者",
      body:[
        { t:"p",
          text:{
            en:"Japan had several hundred thousand forestry workers in the 1950s and 1960s, when the post-war planting drive was at its height. By the 2020 census there were about 44,000. A quarter were 65 or older, compared with about fifteen per cent across all industries. Since the early 2000s, however, the trend has shifted: the share of workers under 35 has risen to around seventeen per cent, and more than three thousand new people have entered forestry each year — many of them from cities, some of them women, and a growing number with university degrees.",
            ja:"戦後の造林がさかんだった一九五〇年代と六〇年代、日本には何十万人もの林業の働き手がいた。二〇二〇年の国勢調査ではおよそ四万四千人。四分の一が六十五歳以上で、全産業ではおよそ十五パーセントだった。しかし二〇〇〇年代の初めから流れは変わった。三十五歳未満の割合はおよそ十七パーセントまで上がり、毎年三千人を超える人が新しく林業に入っている——その多くは都市から来た人で、女性もおり、大学を出た人もふえている。",
            zh:"1950、60 年代戰後造林最盛時，日本有數十萬名林業工作者。到了 2020 年人口普查，只剩約 44,000 人，其中四分之一為 65 歲以上，而全產業平均約為 15%。不過自 2000 年代初起趨勢已經轉變：35 歲以下者比例上升到約 17%，每年有三千多名新人投入林業——其中許多來自都市，也有女性，擁有大學學歷者亦日益增加。" } },
        { t:"figure",
          caption:{
            en:"New entrants to forestry in Japan each year, approximately, before and after the Green Employment programme began in 2003, and in fiscal 2024. Source: Forestry Agency.",
            ja:"日本で毎年新しく林業に就く人（おおよそ）。二〇〇三年に緑の雇用が始まる前とあと、そして二〇二四年度。出典：林野庁。",
            zh:"日本每年林業新進人員（約數）：2003 年「綠色僱用」計畫開始前後，以及 2024 年度。資料來源：林野廳。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"New forestry workers a year", ja:"年間の新規就業者", zh:"每年林業新進人員" }, unit:{ en:"people", ja:"人", zh:"人" }, tick:1000, h:170,
            items:[
              { x:{ en:"before 2003", ja:"二〇〇三年以前", zh:"2003 年前" }, v:2000, lab:{ en:"≈ 2,000", ja:"約2,000", zh:"約 2,000" }, f:"#E6E4E0" },
              { x:{ en:"after 2003", ja:"二〇〇三年以後", zh:"2003 年後" }, v:3200, lab:{ en:"≈ 3,200", ja:"約3,200", zh:"約 3,200" }, f:"#E0E6DB" },
              { x:"FY2024", v:3039, f:"#EDE5D2" }
            ] }); } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Gifu forestry workers", ja:"岐阜の林業就業者", zh:"岐阜林業從業者" },
              v:"916",
              d:{ en:"FY2021", ja:"二〇二一年度", zh:"2021 年度" } },
            { k:{ en:"Working 210+ days", ja:"年二百十日以上", zh:"全年工作 210 天以上" },
              v:"≈ 60%",
              d:{ en:"A sign of year-round, salaried employment", ja:"通年で雇われている目安", zh:"全年受僱的指標" } },
            { k:{ en:"Target technicians", ja:"技術者の目標", zh:"技術人員目標" },
              v:"1,140",
              d:{ en:"By FY2026, from 939 in FY2020", ja:"二〇二六年度まで。二〇二〇年度は九百三十九人", zh:"至 2026 年度；2020 年度為 939 人" } },
            { k:{ en:"New workers a year", ja:"年間の新規就業", zh:"每年新進" },
              v:"80",
              d:{ en:"Gifu's recruitment target", ja:"岐阜の確保の目標", zh:"岐阜招募目標" } }
          ] }
      ] },
    { t:"section",
      id:"danger",
      title:{ en:"The most dangerous job", ja:"最も危険な仕事", zh:"最危險的工作" },
      jp:"労働災害",
      body:[
        { t:"p",
          text:{
            en:"Forestry has for decades been Japan's most dangerous industry by accident rate. The standard measure — injuries causing four or more days' absence per thousand workers per year — has ranged from about 21 to 33 in forestry since the 2000s, roughly ten times the all-industry figure of about 2.2–2.3, and more than four times that of construction. Felling accounts for around sixty per cent of fatal accidents; others involve falling on steep ground, being struck by rolling logs, machines overturning on strip roads, and chainsaw cuts. Bee stings and heatstroke during summer weeding add to the toll.",
            ja:"林業は何十年も、災害の率で日本で最も危険な産業である。標準の尺度——休業四日以上の死傷者を働き手千人・一年あたりで数えたもの——は、二〇〇〇年代から林業でおよそ二十一〜三十三を行き来し、全産業のおよそ二・二〜二・三の十倍ほど、建設業の四倍を超える。死亡災害のおよそ六割は伐倒によるもので、ほかに急斜面での転落、転がる丸太に当たること、作業道での機械の転倒、チェーンソーの切創がある。夏の下刈りでの蜂刺されや熱中症も加わる。",
            zh:"數十年來，以事故率而言，林業一直是日本最危險的產業。標準指標——每千名工作者每年因傷休業四天以上的人數——自 2000 年代起在林業中約為 21 至 33，約為全產業（約 2.2–2.3）的十倍，也是營造業的四倍以上。死亡事故約六成與伐倒有關；其他包括在陡坡跌落、被滾落原木擊中、機械在作業道上翻覆，以及鏈鋸割傷。夏季除草時的蜂螫與中暑也增加了傷亡。" } },
        { t:"figure",
          caption:{
            en:"Injury rate by industry: injuries with four or more days' absence per 1,000 workers per year, representative recent values (forestry has ranged from about 21 to 33 since the 2000s). Sources: Ministry of Health, Labour and Welfare; Forestry Agency.",
            ja:"産業別の死傷年千人率（休業四日以上）、近年の代表的な値（林業は二〇〇〇年代からおよそ二十一〜三十三）。出典：厚生労働省、林野庁。",
            zh:"各產業每千人年傷亡率（休業四天以上），近年代表值（林業自 2000 年代以來約 21–33）。資料來源：厚生勞動省；林野廳。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"How dangerous is the work?", ja:"仕事はどれほど危険か", zh:"工作有多危險？" }, labelW:240,
            items:[
              { n:{ en:"Forestry", ja:"林業", zh:"林業" }, v:24, lab:{ en:"≈ 21–33", ja:"約21〜33", zh:"約 21–33" }, f:"#EEE1DF" },
              { n:{ en:"Wood products manufacturing", ja:"木材・木製品製造業", zh:"木材與木製品製造業" }, v:10, lab:{ en:"≈ 10", ja:"約10", zh:"約 10" }, f:"#EDE5D2" },
              { n:{ en:"Construction", ja:"建設業", zh:"營造業" }, v:4.5, lab:{ en:"≈ 4.5", ja:"約4.5", zh:"約 4.5" }, f:"#E6E4E0" },
              { n:{ en:"All industries", ja:"全産業", zh:"全產業" }, v:2.3, lab:{ en:"≈ 2.2–2.3", ja:"約2.2〜2.3", zh:"約 2.2–2.3" }, f:"#E0E6DB" }
            ] }); } }
      ] },
    { t:"section",
      id:"training",
      title:{ en:"Training the next generation", ja:"次の世代を育てる", zh:"培育下一代" },
      jp:"緑の雇用・アカデミー",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Green Employment", ja:"緑の雇用", zh:"綠色僱用" },
              jp:"みどりのこよう",
              def:{
                en:"A national programme begun in 2003 that subsidises forestry businesses to hire and train newcomers over their first three years, with a career ladder from Forest Worker to Forest Leader and Forest Manager. It roughly raised the number of new entrants from about 2,000 a year to over 3,000, and changed the profile of forestry recruits: younger, more often from cities, more often salaried rather than paid by the day.",
                ja:"二〇〇三年に始まった国の制度で、林業の事業体が新人を雇い最初の三年間に育てることを補助し、フォレストワーカーからフォレストリーダー、フォレストマネージャーへの道筋を示す。新規就業者を年およそ二千人から三千人超へ押し上げ、林業に入る人の姿を変えた。より若く、都市から来ることが多く、日給ではなく月給で雇われることが多くなった。",
                zh:"2003 年啟動的國家計畫，補助林業事業體僱用並在頭三年培訓新人，並建立從「森林工作者」到「森林領導者」再到「森林經理人」的職涯階梯。它使新進人數從每年約 2,000 人提升到 3,000 人以上，也改變了林業新血的樣貌：更年輕、更常來自都市，也更常領月薪而非日薪。" } },
            { term:{ en:"Gifu Academy of Forest Science and Culture", ja:"岐阜県立森林文化アカデミー", zh:"岐阜縣立森林文化學院" },
              jp:"美濃市",
              def:{
                en:"Opened in Mino in 2001, reorganised from the prefectural forestry college. Two-year courses train “forest and wood engineers” (for school-leavers) and “forest and wood creators” (for adults), in forestry, wood architecture, woodworking and environmental education, with a 33-hectare teaching forest and a partnership with Rottenburg University of Forestry in Germany. Since 2020 the campus has also hosted <em>morinos</em>, a centre for forest education open to the public.",
                ja:"二〇〇一年に県立林業短期大学校を改組して美濃市に開校。二年の課程で、高校を出た人のための「森と木のエンジニア科」と、社会人のための「森と木のクリエーター科」が、林業、木造建築、木工、環境教育を学ぶ。三十三ヘクタールの演習林をもち、ドイツのロッテンブルク林業大学と連携する。二〇二〇年からは、一般に開かれた森林教育の拠点「morinos」もキャンパスにある。",
                zh:"2001 年由縣立林業短期大學改制，於美濃市開校。兩年制課程分為培養「森林與木材工程師」（高中畢業生）與「森林與木材創作者」（社會人士），學習林業、木構建築、木工與環境教育；擁有 33 公頃的實習林，並與德國羅騰堡林業大學合作。自 2020 年起，校園內也設有對公眾開放的森林教育中心「morinos」。" } },
            { term:{ en:"Gifu Wood Craft Art School", ja:"岐阜県立木工芸術スクール", zh:"岐阜縣立木工藝術學校" },
              jp:"高山市",
              def:{
                en:"In Takayama, with roots in a joinery training centre founded in 1946. It offers a one-year woodworking course that includes bentwood and supplies many of the craftsmen of Hida's furniture industry.",
                ja:"高山市にあり、一九四六年にできた建具の補導所に源をもつ。曲木を含む一年の木工科をもち、飛騨の家具産業の職人を多く送り出している。",
                zh:"位於高山市，源自 1946 年成立的建具訓練所。開設包含曲木在內的一年制木工科，為飛驒家具產業輸送了許多工匠。" } },
            { term:{ en:"Foreign workers", ja:"外国人の働き手", zh:"外籍工作者" },
              jp:"特定技能",
              def:{
                en:"In 2024 Japan added forestry and the wood industry to the fields open to foreign workers under its Specified Skilled Worker visa, in recognition that domestic recruitment alone may not fill the gap.",
                ja:"二〇二四年、日本は特定技能の在留資格の分野に林業と木材産業を加えた。国内の担い手だけでは穴を埋めきれないかもしれないことを認めたものである。",
                zh:"2024 年，日本將林業與木材產業納入「特定技能」簽證開放外籍工作者的領域，承認僅靠國內招募可能無法填補缺口。" } }
          ] }
      ] },
    { t:"section",
      id:"day",
      title:{ en:"A year in a young forester's life", ja:"若い林業者の一年", zh:"年輕林業人的一年" },
      jp:"現場の一年",
      body:[
        { t:"p",
          text:{
            en:"A recruit who joins a Gifu forest cooperative typically spends the first year learning chainsaw handling, safe felling, first aid and the operation of small machines, working alongside experienced crew members. Summer is spent weeding young plantations, autumn and winter thinning and felling, spring planting. After three years many are operating processors and forwarders, laying out strip roads or surveying stands for management plans with drones and GPS. The work is physically hard and mostly outdoors in every weather; what keeps people, by their own account, is the forest itself, the visible result of the work over years, and the sense of doing something that matters for the long term.",
            ja:"岐阜の森林組合に入った新人は、ふつう最初の一年を、チェーンソーの扱い、安全な伐倒、応急手当、小さな機械の操作を、経験のある班員とともに働きながら学んで過ごす。夏は若い人工林の下刈り、秋と冬は間伐と伐採、春は植付け。三年たつと、多くはプロセッサやフォワーダを操り、作業道を計画し、ドローンやGPSで施業計画のための林の調査をしている。仕事は体にきつく、ほとんどがどんな天気でも屋外である。本人たちの言葉によれば、人を引きとめるのは森そのもの、何年もかけて目に見えてくる仕事の結果、そして長い先のために大事なことをしているという実感である。",
            zh:"加入岐阜森林組合的新人，第一年通常與資深班員並肩工作，學習鏈鋸操作、安全伐倒、急救與小型機械操作。夏天為幼齡人工林除草，秋冬疏伐與伐木，春天造林。三年後，許多人已能操作造材機與運材車、規劃作業道，或以無人機與 GPS 調查林分以擬定經營計畫。這份工作體力負擔沉重，而且大多在各種天候下於戶外進行；依他們自己的說法，留住人的是森林本身、多年後看得見的工作成果，以及為長遠未來做有意義之事的感受。" } },
        { t:"chips",
          items:[
            { text:{ en:"Helmet with visor and ear defenders", ja:"フェイスガードとイヤーマフつきヘルメット", zh:"附面罩與耳罩的安全帽" } },
            { text:{ en:"Cut-resistant chaps (mandatory since 2019)", ja:"防護ズボン（二〇一九年から義務）", zh:"防切割護腿（2019 年起強制）" } },
            { text:{ en:"Chainsaw boots", ja:"チェーンソー用安全靴", zh:"鏈鋸安全靴" } },
            { text:{ en:"Radio and GPS", ja:"無線とGPS", zh:"無線電與 GPS" } },
            { text:{ en:"Wedges and felling lever", ja:"楔と木回し", zh:"楔子與伐木槓桿" } },
            { text:{ en:"First-aid kit, bee-sting kit", ja:"救急セット、蜂刺され用具", zh:"急救包、蜂螫處理包" } }
          ] }
      ] },
    { t:"section",
      id:"gifu-crews",
      title:{ en:"Gifu's crews in numbers", ja:"数で見る岐阜の現場", zh:"數字中的岐阜林業班" },
      jp:"林業労働力調査",
      body:[
        { t:"p",
          text:{
            en:"Every year Gifu prefecture surveys the businesses that employ forest technicians — people who worked at least thirty days in the year planting, weeding, thinning, felling or extracting timber. The fiscal 2025 survey counted 903 of them, five more than the year before. That is roughly a third of the number in 1989, when there were 2,524, but the long fall has levelled off at around nine hundred since the mid-2010s. The workforce has also become younger: the average age was 47.2, and more than a quarter of the technicians were under forty, and the over-sixties were fewer than one in five. Only 51 worked for individual proprietors; 476 were employed by companies, 312 by forest owners' cooperatives and 64 by other bodies.",
            ja:"岐阜県は毎年、森林技術者——一年に三十日以上、植付け、下刈り、間伐、伐採、搬出に従事した人——を雇う事業体を調べている。二〇二五年度の調査では九百三人で、前の年より五人多かった。二千五百二十四人がいた一九八九年のおよそ三分の一だが、長い減少は二〇一〇年代半ばから九百人前後で止まっている。働き手は若くもなった。平均年齢は四十七・二歳、四十歳未満が四分の一を超え、六十歳以上は五人に一人を下回る。個人の事業主に雇われる人は五十一人だけで、四百七十六人が会社、三百十二人が森林組合、六十四人がその他の団体で働いていた。",
            zh:"岐阜縣每年調查僱用「森林技術人員」——一年中從事造林、除草、疏伐、伐木或集運材達三十天以上者——的事業體。2025 年度的調查共計 903 人，比前一年多 5 人。這約為 1989 年（2,524 人）的三分之一，但長期下滑自 2010 年代中期起已穩定在 900 人上下。勞動力也變得年輕：平均年齡 47.2 歲，未滿四十歲者超過四分之一，六十歲以上者則不到五分之一。受僱於個人業主者僅 51 人；476 人受僱於公司，312 人受僱於森林組合，64 人受僱於其他團體。" } },
        { t:"figure",
          caption:{
            en:"Forest technicians employed by forestry businesses in Gifu, by age, fiscal 2025 (total 903, average age 47.2). Source: Gifu prefecture, Forestry Labour Survey, FY2025.",
            ja:"岐阜県の林業事業体に雇われる森林技術者の年齢別の人数、二〇二五年度（計九百三人、平均四十七・二歳）。出典：岐阜県「林業労働力調査」二〇二五年度。",
            zh:"岐阜縣林業事業體所僱森林技術人員的年齡分布，2025 年度（共 903 人，平均 47.2 歲）。資料來源：岐阜縣〈林業勞動力調查〉2025 年度。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Gifu forest technicians by age", ja:"岐阜の森林技術者の年齢", zh:"岐阜森林技術人員年齡" }, unit:{ en:"people", ja:"人", zh:"人" }, tick:100, h:170,
            items:[
              { x:{ en:"under 20", ja:"二十歳未満", zh:"未滿 20" }, v:4, f:"#E0E6DB" },
              { x:{ en:"20s", ja:"二十代", zh:"20 多歲" }, v:123, f:"#E0E6DB" },
              { x:{ en:"30s", ja:"三十代", zh:"30 多歲" }, v:127, f:"#E0E6DB" },
              { x:{ en:"40s", ja:"四十代", zh:"40 多歲" }, v:261, f:"#EDE5D2" },
              { x:{ en:"50s", ja:"五十代", zh:"50 多歲" }, v:225, f:"#EDE5D2" },
              { x:{ en:"60s", ja:"六十代", zh:"60 多歲" }, v:94, f:"#E6E4E0" },
              { x:{ en:"70 and over", ja:"七十歳以上", zh:"70 歲以上" }, v:69, f:"#E6E4E0" }
            ] }); } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Daily wage, felling", ja:"伐採・搬出の日額", zh:"伐木作業日薪" },
              v:{ en:"¥17,051", ja:"一万七千五十一円", zh:"17,051 日圓" },
              d:{
                en:"Average paid in Gifu, FY2025; planting ¥16,584",
                ja:"岐阜の平均、二〇二五年度。植付けは一万六千五百八十四円",
                zh:"岐阜平均，2025 年度；造林為 16,584 日圓" } },
            { k:{ en:"Worked 210+ days", ja:"二百十日以上", zh:"工作 210 天以上" },
              v:"50%",
              d:{
                en:"62% worked at least 180 days; snow halts work in winter",
                ja:"百八十日以上は六二％。冬は雪で仕事が止まる",
                zh:"至少 180 天者 62%；冬季因雪停工" } },
            { k:{ en:"Women", ja:"女性", zh:"女性" },
              v:"11",
              d:{ en:"Of 903 technicians, average age 40.6", ja:"九百三人のうち。平均四十・六歳", zh:"903 人中，平均 40.6 歲" } },
            { k:{ en:"Retirement scheme", ja:"退職金共済", zh:"退休金互助" },
              v:"≈ 69%",
              d:{ en:"Share of technicians enrolled, FY2025", ja:"加入する技術者の割合、二〇二五年度", zh:"2025 年度加入者比例" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Gifu prefecture, Forestry Labour Survey FY2025 (summary and age tables); Ministry of Finance Tōkai Bureau, Gifu office, report on Gifu's forests (June 2025).",
            ja:"出典：岐阜県「林業労働力調査」二〇二五年度（概要、年齢別表）、東海財務局岐阜財務事務所「岐阜県の森林を守るための取組」（二〇二五年六月）。",
            zh:"資料來源：岐阜縣〈林業勞動力調查〉2025 年度（概要與年齡別表）；財務省東海財務局岐阜財務事務所〈守護岐阜縣森林的措施〉（2025 年 6 月）。" } }
      ] },
    { t:"section",
      id:"employers",
      title:{ en:"Cooperatives, companies and pay", ja:"組合、会社、賃金", zh:"組合、公司與薪資" },
      jp:"森林組合・認定事業体",
      body:[
        { t:"p",
          text:{
            en:"For most of the post-war period the typical employer of forest workers was the forest owners' cooperative, <em>shinrin kumiai</em>. Cooperatives first appeared under a revision of the Forest Act in 1907, took their present form under the Forest Act of 1951 and were given their own law in 1978. Their members are the forest owners of a district, and their main work is done on the members' behalf: drawing up management plans, applying for subsidies, planting, thinning, building strip roads, and running log markets. Because most Japanese owners hold only a few hectares and many no longer live near their forests, a cooperative is often the only body that can group small holdings into a block large enough to work with machines.",
            ja:"戦後の長いあいだ、林業の働き手の典型的な雇い主は森林組合だった。組合は一九〇七年の森林法の改正で初めて現れ、一九五一年の森林法でいまの形となり、一九七八年には独自の法律を与えられた。組合員は地域の森林所有者で、主な仕事は組合員に代わって行う。経営計画を立て、補助を申請し、植え、間伐し、作業道をつくり、原木市場を営む。日本の所有者の多くは数ヘクタールしかもたず、その多くはもう森の近くに住んでいないので、小さな持ち山をまとめて機械で働ける大きさの団地にできるのは、しばしば組合だけである。",
            zh:"戰後大部分時期，林業工作者的典型僱主是森林組合。森林組合最早出現於 1907 年《森林法》修正，依 1951 年《森林法》確立現今形態，1978 年另有專法規範。其成員是地區內的林主，主要工作皆代成員執行：擬定經營計畫、申請補助、造林、疏伐、開設作業道，以及經營原木市場。由於日本多數林主只擁有數公頃，且許多人已不住在森林附近，組合往往是唯一能把零碎林地整合成足以用機械作業之區塊的單位。" } },
        { t:"p",
          text:{
            en:"That has changed. Nationally, private companies — logging contractors, sawmill groups, construction firms with forestry divisions — hired about two-thirds of new forestry entrants by the mid-2010s, and in Gifu they now employ more technicians than the cooperatives do. Under a 1996 law on securing forestry labour, employers that draw up a plan to improve employment conditions can be recognised by the governor, which makes them eligible for support in hiring and training; Gifu publishes a yearly list of these recognised businesses for job-seekers. Pay has improved but still lags: in 2022 the Forestry Agency put forestry workers' average annual pay at ¥3.61 million against ¥4.58 million for all industries. The share of workers on a monthly salary rather than a daily wage, once a small minority, had reached about a third by 2023.",
            ja:"それは変わった。全国では、二〇一〇年代半ばまでに、民間の会社——素材生産の請負業者、製材のグループ、林業部門をもつ建設会社——が林業の新規就業者のおよそ三分の二を雇うようになり、岐阜ではいま、会社に雇われる技術者のほうが組合より多い。一九九六年の林業労働力の確保に関する法律のもとで、雇用の条件を改める計画を立てた事業主は知事の認定を受けられ、雇い入れや研修の支援の対象となる。岐阜は職を探す人のため、認定を受けた事業体の一覧を毎年公表している。賃金は上がったがまだ追いついていない。二〇二二年、林野庁は林業従事者の年間平均給与を三百六十一万円、全産業を四百五十八万円とした。日給ではなく月給で雇われる人の割合は、かつてごく少数だったが、二〇二三年にはおよそ三分の一に達した。",
            zh:"情況已經改變。在全國，到 2010 年代中期，民間公司——伐木承包商、製材集團、設有林業部門的營造公司——已僱用約三分之二的林業新進人員；在岐阜，如今受僱於公司的技術人員已多於森林組合。依 1996 年關於確保林業勞動力的法律，擬定改善僱用條件計畫的僱主可獲知事認定，得以申請招募與培訓支援；岐阜每年公布這些認定事業體的名單，供求職者參考。薪資雖有改善，仍然落後：林野廳指出，2022 年林業工作者的年平均薪資為 361 萬日圓，全產業為 458 萬日圓。領月薪而非日薪者的比例，過去只是極少數，到 2023 年已達約三分之一。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, trends in forestry labour (wages FY2022, monthly-salary share 2023) and reference material on working conditions in forestry and the wood industry; Gifu prefecture, list of recognised forestry businesses.",
            ja:"出典：林野庁「林業労働力の動向」（賃金二〇二二年、月給制の割合二〇二三年）、「林業・木材産業の働き方をめぐる現状の整理」参考資料、岐阜県の認定事業体一覧。",
            zh:"資料來源：林野廳〈林業勞動力動向〉（2022 年薪資、2023 年月薪比例）及〈林業與木材產業工作方式現況整理〉參考資料；岐阜縣認定林業事業體名單。" } }
      ] },
    { t:"section",
      id:"women",
      title:{ en:"Women in the forest", ja:"森で働く女性", zh:"森林中的女性" },
      jp:"林業女子",
      body:[
        { t:"p",
          text:{
            en:"Women have always worked in Japanese forests — in the planting and weeding gangs of the post-war afforestation drive they were often the majority. As planting ended and the remaining work became mechanised felling and extraction, their share fell: from about 15 per cent of forestry workers in 1985 to 6 per cent, or 2,750 people, in the 2015 census. In Gifu's 2025 survey only 11 of the 903 technicians employed by forestry businesses were women, though they were on average more than six years younger than the men. Many more women work in forestry in other roles: as foresters in prefectural and municipal offices, as planners and surveyors in the cooperatives, in nurseries, sawmills and research institutes, and as students at the forestry colleges.",
            ja:"女性はいつも日本の森で働いてきた。戦後の造林の時代の植付けや下刈りの組では、女性が多数を占めることも多かった。植付けが終わり、残る仕事が機械による伐採と搬出になると、その割合は下がった。一九八五年に林業従事者のおよそ一五パーセントだったものが、二〇一五年の国勢調査では六パーセント、二千七百五十人である。岐阜の二〇二五年度の調査では、林業事業体に雇われる九百三人の技術者のうち、女性は十一人だけだったが、平均すると男性より六歳以上若い。ほかの役割で林業に関わる女性はずっと多い。県や市町村の林務の職員、組合の計画や測量の担当、苗畑、製材所、研究機関、そして林業大学校の学生として。",
            zh:"女性一直在日本森林中工作——在戰後造林運動的植栽與除草班中，女性往往佔多數。隨著造林結束、剩下的工作變成機械化的伐木與集運材，女性比例隨之下降：從 1985 年約佔林業工作者的 15%，降到 2015 年人口普查的 6%，即 2,750 人。在岐阜 2025 年度的調查中，林業事業體所僱 903 名技術人員裡只有 11 名女性，不過她們平均比男性年輕六歲以上。還有更多女性以其他角色投入林業：擔任縣與市町村的林務人員、組合中的規劃與測量人員，在苗圃、製材所與研究機構工作，以及就讀林業大學校。" } },
        { t:"p",
          text:{
            en:"In 2010 a group of women in Kyoto formed the first <em>Ringyō Joshi-kai</em>, “forestry women's association”, to share information and make the industry visible to other women; similar groups have since appeared across Japan. Their work has drawn attention to practical obstacles that also affect men: protective clothing and chainsaws designed for larger bodies, the lack of toilets and changing space at remote sites, and working hours that make childcare difficult. Lighter equipment, remote-controlled machines and mechanised planting are slowly reducing the importance of sheer strength.",
            ja:"二〇一〇年、京都の女性たちが最初の「林業女子会」をつくり、情報を分かちあい、ほかの女性に業界を見えるものにしようとした。同じような会はその後、日本各地に生まれている。その活動は、男性にも関わる実際の障害に光を当てた。大きな体に合わせてつくられた防護服やチェーンソー、遠い現場にトイレや着替えの場所がないこと、子育てを難しくする働く時間である。より軽い道具、遠隔操作の機械、機械化された植付けが、力の強さだけがものをいう場面を少しずつ減らしている。",
            zh:"2010 年，京都一群女性成立了第一個「林業女子會」，分享資訊，並讓其他女性看見這個產業；此後日本各地陸續出現類似團體。她們的活動凸顯了一些也影響男性的實際障礙：依較大體型設計的防護衣與鏈鋸、偏遠作業地缺乏廁所與更衣空間，以及讓育兒變得困難的工時。較輕的裝備、遙控機械與機械化造林，正逐漸降低單純體力的重要性。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, reference material on working conditions in forestry (census 1985 and 2015); Gifu prefecture, Forestry Labour Survey FY2025; Ringyō Joshi (Japanese Wikipedia).",
            ja:"出典：林野庁「林業・木材産業の働き方をめぐる現状の整理」参考資料（一九八五年と二〇一五年の国勢調査）、岐阜県「林業労働力調査」二〇二五年度、「林業女子」（日本語版ウィキペディア）。",
            zh:"資料來源：林野廳〈林業與木材產業工作方式現況整理〉參考資料（1985 年與 2015 年人口普查）；岐阜縣〈林業勞動力調查〉2025 年度；「林業女子」（日文維基百科）。" } }
      ] },
    { t:"section",
      id:"crew-day",
      title:{ en:"A working day", ja:"現場の一日", zh:"現場的一天" },
      jp:"朝礼から片づけまで",
      body:[
        { t:"steps",
          items:[
            { title:{ en:"Morning meeting", ja:"朝礼", zh:"晨會" },
              meta:{ en:"early morning", ja:"朝", zh:"清晨" },
              text:{
                en:"The crew — usually a handful of people — meets at the office or depot. The leader goes through the day's work and the hazards of the site in a short <em>kiken yochi</em> (hazard-prediction) session, a routine in Japanese workplaces; radios, saws and first-aid kits are checked.",
                ja:"班——ふつうは数人——が事務所や土場に集まる。班長がその日の仕事と現場の危険を、日本の職場でおなじみの短い危険予知（KY）活動で確かめ、無線、鋸、救急用具を点検する。",
                zh:"林業班——通常只有幾個人——在辦公室或集材場集合。班長以日本職場常見的簡短「危險預知」（KY）活動，說明當天工作與作業地的危險；並檢查無線電、鏈鋸與急救用品。" } },
            { title:{ en:"To the site", ja:"現場へ", zh:"前往作業地" },
              meta:{ en:"by light truck", ja:"軽トラックで", zh:"搭小貨車" },
              text:{
                en:"The drive up forest roads and strip roads can take an hour. The last stretch is often on foot, carrying saws, fuel and tools up a slope of thirty degrees or more.",
                ja:"林道と作業道を上る道のりは一時間かかることもある。最後はしばしば徒歩で、鋸と燃料と道具を担いで三十度を超える斜面を登る。",
                zh:"沿林道與作業道上山的車程可能長達一小時。最後一段往往要步行，扛著鏈鋸、燃料與工具爬上三十度以上的坡。" } },
            { title:{ en:"Work in pairs", ja:"二人一組", zh:"兩人一組" },
              meta:{ en:"morning and afternoon", ja:"午前と午後", zh:"上午與下午" },
              text:{
                en:"Fellers keep within sight and earshot of each other but well outside each other's felling zone; machine operators bunch and process the logs below. Breaks are taken together, lunch on the slope.",
                ja:"伐倒する人どうしは互いが見え声が届く距離を保ちつつ、相手の伐倒の範囲からは十分に離れる。機械のオペレーターは下で丸太を集め、造材する。休みは皆でとり、昼食は斜面でとる。",
                zh:"伐木者彼此保持看得見、聽得到的距離，但遠離對方的伐倒範圍；機械操作員在下方集材並造材。休息時一起休息，午餐就在坡上吃。" } },
            { title:{ en:"Off the mountain", ja:"下山", zh:"下山" },
              meta:{ en:"before dark", ja:"暗くなる前に", zh:"天黑之前" },
              text:{
                en:"Work stops in time to be off the slope before dusk — mid-afternoon in winter. Heavy rain, strong wind and lightning stop felling altogether.",
                ja:"夕暮れの前に斜面を下りられるよう仕事を切り上げる——冬は午後の半ばである。大雨、強風、雷のときは伐倒をすっかりやめる。",
                zh:"工作會及早收工，以便在黃昏前離開山坡——冬季約在午後中段。大雨、強風與雷電時則完全停止伐木。" } },
            { title:{ en:"Saws and records", ja:"目立てと記録", zh:"保養與紀錄" },
              meta:{ en:"end of day", ja:"一日の終わり", zh:"一天結束" },
              text:{
                en:"Chains are sharpened, machines greased, and the day's output and any near-misses — <em>hiyari-hatto</em>, “moments of fright” — recorded, so that the next morning's meeting can learn from them.",
                ja:"チェーンを目立てし、機械に油をさし、その日の出来高と、ヒヤリ・ハットを記録して、翌朝の朝礼で生かす。",
                zh:"磨利鏈條、為機械上油，並記錄當天產量與任何「驚險時刻」（ヒヤリ・ハット，未遂事故），供隔天晨會引以為鑑。" } }
          ] },
        { t:"p",
          text:{
            en:"The routines exist because the risks are real. Forestry's injury rate — 22.8 injuries causing four or more days' absence per thousand workers in 2023, against 2.4 for all industries — is the reason for the morning meeting, the pairs, the radios and the chaps; the hazards themselves are described under <a href=\"felling.html\">Felling &amp; Extraction</a> and <a href=\"health.html\">Wood and Health</a>, and the training that new recruits receive under <a href=\"learning.html\">Learning</a>.",
            ja:"こうした手順があるのは、危険が現実だからである。林業の死傷年千人率——休業四日以上の死傷者を働き手千人あたりで数えたもの——は二〇二三年に二十二・八で、全産業は二・四だった。それが朝礼、二人一組、無線、防護ズボンの理由である。危険そのものは<a href=\"felling.html\">伐倒と搬出</a>と<a href=\"health.html\">木と健康</a>で、新人が受ける研修は<a href=\"learning.html\">学ぶ</a>で述べる。",
            zh:"這些例行程序之所以存在，是因為風險真實存在。林業的千人年傷亡率——每千名工作者中因傷休業四天以上的人數——在 2023 年為 22.8，全產業則為 2.4；這就是晨會、兩人一組、無線電與防切割護腿的理由。危險本身見<a href=\"felling.html\">伐倒與集運</a>與<a href=\"health.html\">木材與健康</a>，新人所受的訓練見<a href=\"learning.html\">學習</a>。" } }
      ] },
    { t:"related",
      items:[
        { href:"felling.html", why:{ en:"The safety rules for felling.", ja:"伐倒の安全の決まり。", zh:"伐倒安全規則。" } },
        { href:"learning.html",
          why:{ en:"Where to study forestry and woodworking.", ja:"林業と木工を学ぶところ。", zh:"學習林業與木工的地方。" } },
        { href:"logging.html", why:{ en:"The business they work in.", ja:"彼らが働く産業。", zh:"他們所在的產業。" } },
        { href:"policy.html",
          why:{ en:"The public programmes behind recruitment.", ja:"担い手確保の背後の公的な施策。", zh:"招募背後的公共計畫。" } }
      ] }
  ] };

/* ---- -------------------------------------------- policy */
GIFU.pages["policy"] = { kicker:{ en:"Timber · 13", ja:"木材 · 13", zh:"木材 · 13" },
  title:{ en:"Forest Policy", ja:"森林政策", zh:"森林政策" },
  jp:"森林法・森林計画・森林環境税",
  lede:{
    en:"Few Japanese forests are managed by the market alone. Planting, thinning, road-building and even the choice of what each forest is for are shaped by national laws, prefectural plans and subsidies that cover most of the cost of silviculture. Since 2019 the policy has had a new instrument — a national tax paid by every resident and spent on forests — and a new principle: that municipalities should take over the management of forests their owners cannot manage. This page traces the history of Japanese forest policy, explains the planning system, and describes how Gifu has built its own policies on top of it.",
    ja:"市場だけで管理されている日本の森はほとんどない。植栽、間伐、道づくり、そして一つひとつの森が何のためにあるのかの選択までもが、国の法律、県の計画、造林の費用の大半をまかなう補助によって形づくられている。二〇一九年から、政策には新しい道具——すべての住民が払い森に使われる国の税——と、新しい原則——所有者が管理できない森は市町村が管理を引き受けるべきだ——が加わった。この頁は、日本の森林政策の歴史をたどり、計画の仕組みを説明し、岐阜がその上に独自の施策をどう築いてきたかを述べる。",
    zh:"日本森林鮮少只靠市場經營。造林、疏伐、開路，乃至每片森林的用途選擇，都受到國家法律、縣級計畫，以及涵蓋大部分育林成本之補助的形塑。自 2019 年起，政策多了一項新工具——每位居民繳納並用於森林的國稅——以及一項新原則：林主無力經營的森林，應由市町村接手管理。本頁追溯日本森林政策的歷史、說明計畫體系，並介紹岐阜如何在其上建立自己的政策。" },
  body:[
    { t:"section",
      id:"history",
      title:{ en:"A century and a half of forest law", ja:"森の法の百五十年", zh:"一個半世紀的森林法" },
      jp:"森林政策の歩み",
      body:[
        { t:"timeline",
          items:[
            { year:"1897",
              title:{ en:"The first Forest Act", ja:"最初の森林法", zh:"第一部森林法" },
              text:{
                en:"Enacted after decades of over-cutting and floods in early Meiji, it creates protection forests to guard watersheds and slopes.",
                ja:"明治初めの何十年もの伐りすぎと洪水のあとに定められ、水源と斜面を守る保安林をつくる。",
                zh:"在明治初期數十年過度砍伐與水患之後制定，設立保護水源與坡地的保安林。" } },
            { year:"1951",
              title:{ en:"The new Forest Act", ja:"新しい森林法", zh:"新森林法" },
              text:{
                en:"Establishes the forest planning system that still governs Japanese forestry, and the forest owners' cooperatives.",
                ja:"いまも日本の林業を律する森林計画制度と、森林組合を定める。",
                zh:"建立至今仍規範日本林業的森林計畫制度，以及森林組合。" } },
            { year:"1950s–70s",
              title:{ en:"Expansion afforestation", ja:"拡大造林", zh:"擴大造林" },
              text:{
                en:"State subsidies and loans encourage owners to replace broadleaf coppice and grassland with sugi and hinoki plantations — the origin of today's plantation estate.",
                ja:"国の補助と融資が、広葉樹の萌芽林や草地をスギ・ヒノキの人工林に替えるよう所有者を促す——いまの人工林の源である。",
                zh:"國家補助與貸款鼓勵林主以柳杉與扁柏人工林取代闊葉萌芽林與草地——這就是今日人工林的起源。" } },
            { year:{ en:"1960s", ja:"一九六〇年代", zh:"1960 年代" },
              title:{ en:"Import liberalisation", ja:"輸入の自由化", zh:"進口自由化" },
              text:{
                en:"As Japan's economy grows and housing demand soars, imports of logs and timber are liberalised; cheaper foreign wood begins to displace domestic timber.",
                ja:"日本の経済が伸び住宅の需要が急増するなか、丸太と木材の輸入が自由化され、安い外材が国産材を押しのけはじめる。",
                zh:"隨著日本經濟成長、住宅需求激增，原木與木材進口自由化；較便宜的外國木材開始取代國產材。" } },
            { year:"2001",
              title:{ en:"Forest and Forestry Basic Act", ja:"森林・林業基本法", zh:"森林與林業基本法" },
              text:{
                en:"Replaces the 1964 Forestry Basic Act and shifts the goal from timber production to the “multiple functions” of forests.",
                ja:"一九六四年の林業基本法に代わり、目的を木材生産から森の「多面的機能」へ移す。",
                zh:"取代 1964 年的林業基本法，將目標從木材生產轉向森林的「多元功能」。" } },
            { year:"2010",
              title:{ en:"Wood in public buildings", ja:"公共建築物の木材利用", zh:"公共建築使用木材" },
              text:{
                en:"A law obliges the state to use wood in low-rise public buildings and encourages local governments to do the same; extended in 2021 to all buildings.",
                ja:"国が低層の公共建築物に木材を使うことを義務づけ、自治体にも促す法律。二〇二一年にすべての建築物へ広げられる。",
                zh:"法律要求國家在低層公共建築中使用木材，並鼓勵地方政府跟進；2021 年擴及所有建築。" } },
            { year:"2018–19",
              title:{ en:"Forest Management Act", ja:"森林経営管理法", zh:"森林經營管理法" },
              text:{
                en:"Passed in May 2018 and in force from April 2019, it lets municipalities take over the management of neglected private forests.",
                ja:"二〇一八年五月に成立し二〇一九年四月に施行。放置された私有林の管理を市町村が引き受けられるようにする。",
                zh:"2018 年 5 月通過、2019 年 4 月施行，允許市町村接手管理遭棄置的私有林。" } },
            { year:"2019 / 2024",
              title:{ en:"Forest environment tax", ja:"森林環境税", zh:"森林環境稅" },
              text:{
                en:"A transfer to local governments begins in FY2019; from FY2024 every resident pays ¥1,000 a year to fund it.",
                ja:"二〇一九年度に自治体への譲与が始まり、二〇二四年度からはすべての住民が年千円を払ってそれをまかなう。",
                zh:"2019 年度開始撥付地方政府；自 2024 年度起，每位居民每年繳納 1,000 日圓作為財源。" } }
          ] }
      ] },
    { t:"section",
      id:"planning",
      title:{ en:"The planning system", ja:"森林計画制度", zh:"森林計畫制度" },
      jp:"国・県・市町村・所有者",
      body:[
        { t:"p",
          text:{
            en:"Japanese forestry is planned in a cascade. The national government sets a basic plan for forests and forestry every five years and a national forest plan for fifteen years ahead. Each prefecture draws up regional forest plans for its river-basin districts, setting targets for felling, planting and road-building. Each municipality then prepares a forest development plan designating which forests are for timber, which for water and soil, which for recreation. Finally, owners — or the cooperatives acting for them — prepare forest management plans for their holdings, and approved plans qualify for subsidies and tax relief.",
            ja:"日本の林業は滝のように連なって計画される。国は五年ごとに森林・林業基本計画を、十五年先を見通して全国森林計画を定める。県はそれぞれの流域の区ごとに地域森林計画をつくり、伐採、植栽、道づくりの目標を定める。市町村は市町村森林整備計画を用意し、どの森が木材のため、どの森が水と土のため、どの森が保健休養のためかを定める。最後に所有者——あるいはそれに代わる組合——が持ち山の森林経営計画を立て、認められた計画は補助と税の軽減を受けられる。",
            zh:"日本林業採層層遞進的計畫體系。中央政府每五年訂定森林與林業基本計畫，並訂定展望十五年的全國森林計畫。各縣依流域劃分區域訂定地域森林計畫，設定伐採、造林與開路目標。各市町村再擬定森林整備計畫，劃定哪些森林為木材生產、哪些為水土保持、哪些為休閒保健。最後，林主——或代其行事的組合——為所屬林地擬定森林經營計畫，經核准的計畫可獲得補助與稅賦減免。" } },
        { t:"figure",
          caption:{
            en:"The cascade of forest plans in Japan, from national policy to the individual holding.",
            ja:"国の政策から一つひとつの持ち山までの、日本の森林計画の連なり。",
            zh:"日本森林計畫的層級，從國家政策到個別林地。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Who plans what", ja:"誰が何を計画するか", zh:"誰規劃什麼" }, per:5, bh:118,
            steps:[
              { t:{ en:"Basic plan", ja:"基本計画", zh:"基本計畫" }, d:{ en:"National goals, every 5 years", ja:"国の目標、五年ごと", zh:"國家目標，每五年" } },
              { t:{ en:"National forest plan", ja:"全国森林計画", zh:"全國森林計畫" }, d:{ en:"15-year outlook", ja:"十五年の見通し", zh:"十五年展望" } },
              { t:{ en:"Regional plans", ja:"地域森林計画", zh:"地域森林計畫" }, d:{ en:"Prefecture, by river basin", ja:"県が流域ごとに", zh:"縣依流域訂定" } },
              { t:{ en:"Municipal plans", ja:"市町村計画", zh:"市町村計畫" }, d:{ en:"Zoning of each forest", ja:"森ごとの区分", zh:"各森林的分區" } },
              { t:{ en:"Management plans", ja:"森林経営計画", zh:"森林經營計畫" }, d:{ en:"Owners or cooperatives", ja:"所有者や組合", zh:"林主或組合" } }
            ] }); } }
      ] },
    { t:"section",
      id:"management",
      title:{ en:"When owners cannot manage", ja:"所有者が管理できないとき", zh:"當林主無力經營" },
      jp:"森林経営管理制度",
      body:[
        { t:"p",
          text:{
            en:"The Forest Management Act of 2018 was a response to a problem that had grown for decades: private forests whose owners had died, moved away or lost interest, often with titles never updated through several inheritances. Such forests could not be thinned or harvested because no one could give consent. Under the new system each municipality surveys the owners of its forests and asks what they intend to do. Where an owner cannot manage a forest, the municipality can take over the management rights; forests that can be run profitably are then entrusted to capable forestry businesses, and those that cannot are managed by the municipality itself, paid for from the forest environment transfer tax. Special procedures allow action where owners cannot be found.",
            ja:"二〇一八年の森林経営管理法は、何十年もかけて大きくなった問題への答えだった。所有者が亡くなったり、離れたり、関心をなくしたりした私有林で、しばしば何代もの相続のあいだ登記が改められていない。だれも同意できないので、こうした森は間伐も伐採もできなかった。新しい仕組みのもとで、市町村は森の所有者を調べ、どうするつもりかを尋ねる。所有者が森を管理できない場合、市町村は経営管理の権利を引き受けられる。採算のとれる森は意欲と能力のある林業の事業者に任され、とれない森は市町村自身が、森林環境譲与税を財源に管理する。所有者が見つからない場合にも手を打てるよう、特別の手続きがある。",
            zh:"2018 年的《森林經營管理法》回應了一個累積數十年的問題：林主已過世、遷離或失去興趣的私有林，往往歷經數代繼承卻從未更新登記。由於無人能給予同意，這些森林既無法疏伐也無法伐採。依新制度，各市町村調查轄內林主並詢問其意向。若林主無力經營，市町村可接手經營管理權；能獲利經營的森林交由有意願與能力的林業事業體，無法獲利者則由市町村自行以森林環境讓與稅為財源管理。另有特別程序，可在找不到林主時採取行動。" } },
        { t:"steps",
          items:[
            { title:{ en:"Survey of intentions", ja:"意向調査", zh:"意向調查" },
              text:{
                en:"The municipality asks each owner whether they will manage the forest themselves.",
                ja:"市町村がそれぞれの所有者に、自分で森を管理するかを尋ねる。",
                zh:"市町村詢問每位林主是否自行經營森林。" } },
            { title:{ en:"Management rights", ja:"経営管理権", zh:"經營管理權" },
              text:{
                en:"Owners who cannot may entrust the rights to the municipality under a management plan.",
                ja:"できない所有者は、計画のもとで権利を市町村に委ねられる。",
                zh:"無力經營的林主可依管理計畫將權利委託給市町村。" } },
            { title:{ en:"Re-entrustment", ja:"再委託", zh:"再委託" },
              text:{
                en:"Forests suitable for commercial forestry are passed to capable businesses — often the local cooperative.",
                ja:"林業に向く森は、能力のある事業者——しばしば地元の組合——に渡される。",
                zh:"適合商業經營的森林移交給有能力的事業體——通常是在地組合。" } },
            { title:{ en:"Municipal management", ja:"市町村による管理", zh:"市町村自行管理" },
              text:{
                en:"The rest are thinned and gradually converted towards mixed forest, paid for by the transfer tax.",
                ja:"残りは譲与税を財源に間伐され、しだいに混交林へ導かれる。",
                zh:"其餘森林以讓與稅為財源進行疏伐，並逐步導向混交林。" } }
          ] }
      ] },
    { t:"section",
      id:"taxes",
      title:{ en:"Paying for forests", ja:"森のためにお金を払う", zh:"為森林付費" },
      jp:"森林環境税・県の税",
      body:[
        { t:"grid",
          cols:3,
          cells:[
            { k:{ en:"National forest environment tax", ja:"国の森林環境税", zh:"國家森林環境稅" },
              v:{ en:"¥1,000 / person / year", ja:"一人年千円", zh:"每人每年 1,000 日圓" },
              d:{
                en:"Collected with municipal resident tax from FY2024.",
                ja:"二〇二四年度から市町村の住民税とあわせて徴収。",
                zh:"自 2024 年度起隨市町村住民稅徵收。" } },
            { k:{ en:"Transfer to local government", ja:"森林環境譲与税", zh:"森林環境讓與稅" },
              v:{ en:"¥62.9 billion", ja:"六百二十九億円", zh:"629 億日圓" },
              d:{
                en:"FY2024 total; distributed since FY2019 by private plantation area, forestry employment and population.",
                ja:"二〇二四年度の総額。二〇一九年度から私有林人工林の面積、林業就業者数、人口で配分。",
                zh:"2024 年度總額；自 2019 年度起依私有人工林面積、林業就業人數與人口分配。" } },
            { k:{ en:"Gifu's own tax", ja:"岐阜県の税", zh:"岐阜縣自有稅" },
              v:{ en:"¥1,000 / person / year", ja:"一人年千円", zh:"每人每年 1,000 日圓" },
              d:{
                en:"Since April 2012; companies pay ¥2,000–80,000. Renewed in five-year terms, currently to March 2027.",
                ja:"二〇一二年四月から。法人は二千〜八万円。五年ごとに延長され、いまは二〇二七年三月まで。",
                zh:"自 2012 年 4 月起；法人繳 2,000–80,000 日圓。每五年延長一次，目前至 2027 年 3 月。" } }
          ] },
        { t:"p",
          text:{
            en:"The national tax has been criticised because its distribution formula gives large sums to populous cities with few forests, some of which have struggled to spend them; urban municipalities often use the money to buy wooden furniture for schools or to build with timber from partner forest towns. Gifu's own tax, older than the national one, is spent on water-source forests, satoyama, wildlife management, river ecosystems, wooden fittings for schools and environmental education.",
            ja:"国の税は、配分の式が、森の少ない人口の多い都市に大きな額を与え、その一部が使い道に苦労していることで批判されてきた。都市の自治体は、そのお金で学校の木の家具を買ったり、連携する森の町の木で建てたりすることが多い。国の税より古い岐阜自身の税は、水源林、里山、野生動物の管理、川の生態系、学校の木の設備、環境教育に使われる。",
            zh:"國家森林環境稅受到批評，因為其分配公式讓森林稀少的人口密集都市獲得大筆款項，其中有些都市難以花用；都市自治體常以這筆錢為學校添購木製家具，或以合作林業城鎮的木材興建建築。岐阜自有的稅比國稅更早開徵，用於水源林、里山、野生動物管理、河川生態、學校木製設備與環境教育。" } }
      ] },
    { t:"section",
      id:"gifu",
      title:{ en:"Gifu's framework", ja:"岐阜の枠組み", zh:"岐阜的政策架構" },
      jp:"森林づくり基本条例",
      body:[
        { t:"p",
          text:{
            en:"Gifu writes its forest policy into prefectural law. The Gifu Prefecture Forest-Making Basic Ordinance of May 2006 commits the prefecture to five-year basic plans for its forests; the first ran from fiscal 2007 to 2011 and the fourth covers 2022 to 2026. The first plan launched four flagship projects — model forests for healthy stand management, reform of timber distribution through new production and processing facilities, house-building with certified Gifu timber, and community forest management through municipal committees and corporate partnerships — which set the pattern for the policies described throughout this book. Plans are debated in the Gifu “Land of Trees, Land of Mountains” Prefectural Council, whose name is said to echo a line of the prefectural song.",
            ja:"岐阜は森林政策を県の条例に書きこむ。二〇〇六年五月の岐阜県森林づくり基本条例は、県に五年ごとの森林づくり基本計画を課す。第一期は二〇〇七年度から二〇一一年度、第四期は二〇二二年度から二〇二六年度である。第一期は四つの柱の事業——健全な森づくりのモデル林、新しい生産と加工の施設による木材の流通の改革、証明された岐阜の木での家づくり、市町村の委員会と企業との連携による地域の森づくり——を立ち上げ、それがこの本を通じて述べる施策の型をつくった。計画は「岐阜県木の国・山の国県民会議」で議論され、その名は県民の歌の一節に由来するといわれる。",
            zh:"岐阜把森林政策寫入縣條例。2006 年 5 月的《岐阜縣森林建設基本條例》要求縣府每五年訂定森林建設基本計畫；第一期為 2007 至 2011 年度，第四期涵蓋 2022 至 2026 年度。第一期推出四大旗艦事業——健全林分經營的示範林、以新生產與加工設施改革木材流通、以認證岐阜木材建造住宅，以及透過市町村委員會與企業合作的地域森林建設——奠定了本書各處所述政策的模式。計畫在「岐阜縣木之國・山之國縣民會議」中討論，其名稱據說源自縣民之歌中的一句。" } }
      ] },
    { t:"section",
      id:"forest-act",
      title:{ en:"Inside the Forest Act", ja:"森林法のなか", zh:"《森林法》的內容" },
      jp:"伐採届・林地開発許可・林地台帳",
      body:[
        { t:"p",
          text:{
            en:"The 1897 Act was revised in 1907, when it recognised forest owners' associations — the ancestors of today's cooperatives — and again in 1939, but the law in force today is the Forest Act of 1951, amended many times since. It leaves ownership private but attaches duties to it. Most of them work through the municipal forest development plan: what an owner may do with a forest depends on how the municipality has zoned it.",
            ja:"一八九七年の法律は一九〇七年に改正されて森林所有者の組合——今日の森林組合の祖——を認め、一九三九年にも改められたが、いま効力をもつのは一九五一年の森林法であり、その後何度も改正されてきた。所有は私的なままにしつつ、それに義務を結びつける。その多くは市町村森林整備計画を通じて働く。所有者が森でできることは、市町村がその森をどう区分したかによって決まる。",
            zh:"1897 年的法律於 1907 年修訂，承認森林所有者的組合——今日森林組合的前身——1939 年再度修訂；但現行法律是 1951 年的《森林法》，其後經多次修正。它讓所有權維持私有，卻附加義務。這些義務大多透過市町村森林整備計畫運作：所有者能對森林做什麼，取決於市町村如何為它分區。" } },
        { t:"defs",
          items:[
            { term:{ en:"Felling notification", ja:"伐採届", zh:"伐採申報" },
              jp:"伐採及び伐採後の造林の届出",
              def:{
                en:"Before felling in a private forest outside the protection forests, the owner or logger must notify the municipality 90 to 30 days in advance, stating how the site will be regenerated. Since a revision passed in 2016 and in force from April 2017, they must also report afterwards on whether replanting or natural regeneration actually took place.",
                ja:"保安林以外の民有林で伐採するとき、所有者や伐採者は九十日前から三十日前までに市町村に届け出て、伐採後にどう更新するかを示さねばならない。二〇一六年に成立し二〇一七年四月に施行された改正からは、伐ったあと実際に植栽や天然更新が行われたかを報告することも求められる。",
                zh:"在保安林以外的民有林伐木前，所有者或伐木業者須於 90 至 30 天前向市町村申報，並說明伐後如何更新。自 2016 年通過、2017 年 4 月施行的修法起，伐木後還須報告是否確實進行了造林或天然更新。" } },
            { term:{ en:"Development permission", ja:"林地開発許可", zh:"林地開發許可" },
              jp:"一九七四年〜",
              def:{
                en:"Since 1974, converting more than one hectare of private forest to another use — a golf course, a quarry, a housing estate or, more recently, a solar farm — needs the prefectural governor's permission, which can be refused where the work threatens floods, landslides, water supply or the environment.",
                ja:"一九七四年から、一ヘクタールを超える民有林をほかの用途——ゴルフ場、採石場、宅地、近年では太陽光発電所——に転じるには知事の許可が要る。洪水や土砂崩れ、水の確保、環境を損なうおそれがあれば許可されない。",
                zh:"自 1974 年起，將超過 1 公頃的民有林轉作他用——高爾夫球場、採石場、住宅區，近年則是太陽能電廠——須取得縣知事許可；若工程恐引發洪水、土石崩塌、危及水源或環境，即可不予許可。" } },
            { term:{ en:"New-owner notification", ja:"森林の土地の所有者届出", zh:"新所有者申報" },
              jp:"二〇一二年〜",
              def:{
                en:"From April 2012 anyone who acquires forest land by purchase or inheritance must tell the municipality within 90 days — a response both to unknown owners and to worries about foreign purchases of watershed forest.",
                ja:"二〇一二年四月から、売買や相続で森林の土地を取得した人は、九十日以内に市町村に届け出なければならない。所有者不明への対策であり、水源の森が外国資本に買われることへの懸念に応えるものでもあった。",
                zh:"自 2012 年 4 月起，凡因買賣或繼承取得林地者，須於 90 天內向市町村申報——既是對所有者不明問題的回應，也回應了外資收購水源林的疑慮。" } },
            { term:{ en:"Forest-land register", ja:"林地台帳", zh:"林地台帳" },
              jp:"二〇一六年改正",
              def:{
                en:"The 2016 revision also required municipalities to keep a register of forest land with owners, boundaries and plans — the groundwork for the 2019 management system described on <a href=\"woodfuture.html\">The Next Twenty Years</a>.",
                ja:"二〇一六年の改正は、市町村に所有者、境界、計画を記した林地台帳を整えることも求めた。<a href=\"woodfuture.html\">これからの二十年</a>で述べる二〇一九年の経営管理制度の下地である。",
                zh:"2016 年修法也要求市町村建立記載所有者、界址與計畫的林地台帳——這是<a href=\"woodfuture.html\">未來二十年</a>所述 2019 年經營管理制度的基礎。" } }
          ] }
      ] },
    { t:"section",
      id:"protection",
      title:{ en:"Protection forests", ja:"保安林", zh:"保安林" },
      jp:"十七種類の保安林",
      body:[
        { t:"p",
          text:{
            en:"The oldest tool of the Forest Act is still among the strongest. Protection forests are designated for one of seventeen purposes — watershed conservation, prevention of soil runoff, prevention of landslides, protection against wind, snow, avalanches and falling rocks, fish-breeding, scenic beauty, public health and others — and today they cover about half of Japan's forest area, the great majority for watershed conservation. In a protection forest the owner needs permission to fell, clear-felling is limited in area or forbidden, replanting is compulsory, and the land may not be developed. In return the owner pays no property tax on it and may claim compensation for losses where felling is banned outright, and the state and prefectures carry out <em>chisan</em> — erosion-control works such as check dams and slope protection — within them.",
            ja:"森林法のもっとも古い道具は、いまも最も強いものの一つである。保安林は十七の目的——水源のかん養、土砂の流出の防備、土砂の崩壊の防備、防風、防雪、なだれや落石の防止、魚つき、風致、保健など——のいずれかのために指定され、いまでは日本の森林面積のおよそ半分を占め、その大部分が水源かん養保安林である。保安林では伐採に許可が要り、皆伐は面積を限られるか禁じられ、植栽は義務となり、開発はできない。その代わり所有者は固定資産税を免除され、伐採が全面的に禁じられる場合は損失の補償を求めることができ、国と県は保安林のなかで治山——えん堤や斜面の保護などの土砂を抑える工事——を行う。",
            zh:"《森林法》最古老的工具，至今仍是最有力的工具之一。保安林依十七種目的之一指定——水源涵養、防止土砂流失、防止土砂崩塌、防風、防雪、防止雪崩與落石、魚類棲息（魚付林）、風景、保健等——如今約占日本森林面積的一半，其中絕大多數為水源涵養保安林。在保安林中，伐木須經許可，皆伐受面積限制或被禁止，造林為義務，且不得開發。作為回報，所有者免繳固定資產稅，伐木全面禁止時可申請損失補償，國家與縣則在保安林內施作<em>治山</em>工程——攔砂壩、邊坡保護等抑制土砂的工程。" } },
        { t:"p",
          text:{
            en:"In Gifu about 250,000 hectares of private forest — some 36% of it — are protection forests, and about 99% of that area falls under the national government's authority, with the prefecture carrying out the surveys, designations and compensation assessments on the state's behalf. With its steep slopes, heavy rain and the headwaters of the Kiso, Nagara, Ibi, Hida and Jinzū river systems, the prefecture is in effect a water-tower for the Nōbi plain and for Toyama, and much of its forest policy is flood policy.",
            ja:"岐阜では民有林の約三十六パーセントにあたる約二十五万ヘクタールが保安林であり、その約九十九パーセントは国の権限に係るもので、県は国に代わって調査、指定、損失補償の算定を行う。急な斜面と多い雨、そして木曽川、長良川、揖斐川、飛騨川、神通川の水系の源流を抱える県は、事実上、濃尾平野と富山の水がめであり、その森林政策の多くは治水の政策でもある。",
            zh:"岐阜約有 25 萬公頃民有林——約占 36%——為保安林，其中約 99% 屬國家權限，由縣府代國家辦理調查、指定與損失補償評估。岐阜坡陡雨多，又是木曾川、長良川、揖斐川、飛驒川與神通川各水系的源頭，實際上是濃尾平原與富山的水塔，其森林政策有很大一部分就是治水政策。" } }
      ] },
    { t:"section",
      id:"basic-act",
      title:{ en:"From timber to functions", ja:"木材生産から多面的機能へ", zh:"從木材生產到多元功能" },
      jp:"森林・林業基本法と基本計画",
      body:[
        { t:"p",
          text:{
            en:"The Forestry Basic Act of 1964 belonged to the high-growth years: its aims were to raise forestry's productivity and to bring the incomes of forestry households closer to those of other industries. By the 1990s, with domestic timber priced out by imports and plantations going untended, that framing no longer fitted. The Forest and Forestry Basic Act of 2001 put the <em>multiple functions</em> of forests first — conserving land and water, sheltering wildlife, absorbing carbon, offering recreation and culture, and producing wood — and the healthy development of forestry second, as the means of keeping those functions. It requires a Basic Plan for Forests and Forestry, revised about every five years: in 2001, 2006, 2011, 2016, 2021 and, most recently, by cabinet decision on 5 June 2026, under the slogan “towards a land of forests and towns of wood that last a hundred years”. Draft targets reported in the trade press for that plan aimed at domestic wood use of about 42 million cubic metres in 2035 and a self-sufficiency rate near 49%.",
            ja:"一九六四年の林業基本法は高度成長の時代のものだった。林業の生産性を高め、林業を営む世帯の所得をほかの産業に近づけることが目的だった。一九九〇年代になると、国産材は輸入材に価格で負け、人工林は手入れされなくなり、その枠組みは合わなくなった。二〇〇一年の森林・林業基本法は、森林の<em>多面的機能</em>——国土と水の保全、生きものの生息、炭素の吸収、保健・文化、木材の生産——の持続的な発揮を第一に置き、林業の健全な発展をそれを支える手段として第二に置いた。この法は森林・林業基本計画を求め、計画はおよそ五年ごとに改められる。二〇〇一年、二〇〇六年、二〇一一年、二〇一六年、二〇二一年、そして直近では二〇二六年六月五日に「百年つづく『森の国・木の街』へ」を掲げて閣議決定された。業界紙が伝えたこの計画の案の目標は、二〇三五年の国産材の利用量を約4,200万立方メートル、自給率を約49パーセントとするものだった。",
            zh:"1964 年的《林業基本法》屬於高度成長年代：目標是提高林業生產力，並讓林業家戶的所得接近其他產業。到了 1990 年代，國產材在價格上敗給進口材，人工林乏人照料，這套框架已不再適用。2001 年的《森林・林業基本法》把森林的<em>多元功能</em>——國土與水的保全、野生動物棲地、碳吸收、休閒與文化、木材生產——放在第一位，林業的健全發展則居次，作為維持這些功能的手段。該法要求訂定《森林・林業基本計畫》，約每五年修訂一次：2001、2006、2011、2016、2021 年，最近一次於 2026 年 6 月 5 日經內閣決議，標語是「邁向延續百年的『森之國・木之街』」。業界媒體報導的計畫草案目標，是 2035 年國產材利用量約 4,200 萬立方公尺、自給率約 49%。" } },
        { t:"p",
          text:{
            en:"Under these national plans Gifu draws up regional forest plans for five river-basin planning districts — Miya-Shō, Hida, Nagara, Ibi and Kiso — and its own five-year forest plans under the 2006 ordinance, which zone the private forest by purpose (see <a href=\"forests.html\">Gifu's Forests</a>).",
            ja:"こうした国の計画のもとで、岐阜は五つの流域の森林計画区——宮・庄川、飛騨川、長良川、揖斐川、木曽川——ごとに地域森林計画を立て、二〇〇六年の条例にもとづく五年ごとの独自の森林づくり計画で民有林を目的別に区分している（<a href=\"forests.html\">岐阜の森林</a>を参照）。",
            zh:"在這些國家計畫之下，岐阜為五個流域森林計畫區——宮・庄川、飛驒川、長良川、揖斐川、木曾川——各自訂定地域森林計畫，並依 2006 年條例訂定每五年一期的自有森林計畫，按目的為民有林分區（見<a href=\"forests.html\">岐阜的森林</a>）。" } }
      ] },
    { t:"section",
      id:"subsidies",
      title:{ en:"How subsidies shape the forest", ja:"補助が森をかたちづくる", zh:"補助如何形塑森林" },
      jp:"森林整備事業の補助率",
      body:[
        { t:"p",
          text:{
            en:"Because a planted forest rarely pays for its own tending, subsidy rules decide much of what actually happens on the ground. Gifu pays for planting, weeding, thinning, regeneration felling, work roads and the extraction of thinned logs at a percentage of a “standard cost” fixed for each operation. The rates reward planning and consolidation: under the national public-works programme a forest covered by a certified forest management plan receives 68% of the standard cost, one without such a plan only 36%. That gap is why owners hand their forests to cooperatives that can bundle neighbouring holdings into a plan, and why work is done in blocks of several hectares rather than tree by tree. Prefectural programmes funded by Gifu's forest environment tax pay up to 100% in environment-conservation forests, where the aim is to thin plantations towards mixed forest. Subsidies come with strings: if a subsidised forest is converted or clear-felled within five to ten years, the money must be repaid.",
            ja:"人工林が手入れの費用をみずからまかなうことはまれなので、現場で実際に何が行われるかの多くは補助の決まりで決まる。岐阜は、植栽、下刈り、間伐、更新伐、作業道、間伐材の搬出に、作業ごとに定めた「標準経費」の一定の割合を補助する。補助率は計画と集約を報いる。国の公共事業では、認定された森林経営計画の対象となる森は標準経費の68パーセント、計画のない森は36パーセントしか受けられない。この差のために、所有者は隣り合う山をまとめて計画を立てられる森林組合に森を任せ、作業は一本ずつではなく数ヘクタールの単位で行われる。岐阜の森林環境税を財源とする県の事業は、人工林を間伐して混交林へ導く環境保全林で最大100パーセントを補助する。補助には条件もある。補助を受けた森を五年から十年以内に転用したり皆伐したりすれば、補助金を返さねばならない。",
            zh:"由於人工林很少能自行負擔撫育成本，現場實際做什麼，很大程度由補助規則決定。岐阜對造林、除草、疏伐、更新伐、作業道與疏伐材搬出，依各作業所定「標準經費」的一定比例補助。補助率獎勵計畫與集約：在國家公共事業中，納入經認定之森林經營計畫的森林可獲標準經費 68% 的補助，沒有計畫者僅 36%。正因這個差距，所有者把森林交給能將相鄰林地整合成計畫的森林組合，作業也以數公頃為單位，而非一棵一棵進行。以岐阜森林環境稅支應的縣級計畫，在以疏伐引導人工林走向混交林的環境保全林中，補助最高達 100%。補助也附帶條件：受補助的森林若在五至十年內轉用或皆伐，須退還補助款。" } },
        { t:"figure",
          caption:{
            en:"Subsidy rates for forest work in Gifu by programme, as a share of the standard cost of each operation. Source: Gifu Prefecture, outline of forest development programmes (accessed 2026).",
            ja:"岐阜の森林整備の補助率（事業別、各作業の標準経費に対する割合）。出典：岐阜県「森林整備事業の概要」（二〇二六年閲覧）。",
            zh:"岐阜森林作業補助率（依計畫別，占各作業標準經費之比例）。資料來源：岐阜縣〈森林整備事業概要〉（2026 年查閱）。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Share of the standard cost paid", ja:"標準経費に対する補助率", zh:"占標準經費之補助比例" }, max:100, labelW:330, rowH:34,
            items:[
              { n:{ en:"Prefectural: environment-conservation forest", ja:"県単独：環境保全林", zh:"縣級：環境保全林" }, v:100, lab:"100%", f:"#E0E6DB" },
              { n:{ en:"Prefectural: decarbonisation forest", ja:"県単独：脱炭素の森", zh:"縣級：去碳森林" }, v:95, lab:"95%", f:"#E0E6DB" },
              { n:{ en:"National: special function recovery", ja:"国：特定の機能回復", zh:"國家：特定機能恢復" }, v:72, lab:"72%", f:"#EDE5D2" },
              { n:{ en:"National: with a forest management plan", ja:"国：森林経営計画あり", zh:"國家：有森林經營計畫" }, v:68, lab:"68%", f:"#EADCC1" },
              { n:{ en:"National: without a plan", ja:"国：計画なし", zh:"國家：無計畫" }, v:36, lab:"36%", f:"#EEE1DF" }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, outline of forest development programmes and FY2026 budget material on erosion-control (protection forests); Forestry Policy Council material on the 2016 Forest Act revision; Forestry Agency press release on the Basic Plan for Forests and Forestry (5 June 2026); Rinsei News on the draft plan targets.",
            ja:"出典：岐阜県「森林整備事業の概要」、同 二〇二六年度当初予算資料（治山費・保安林）、林政審議会資料（二〇一六年の森林法等改正）、林野庁 報道発表「森林・林業基本計画の閣議決定」（二〇二六年六月五日）、林政ニュース（計画案の目標）。",
            zh:"資料來源：岐阜縣〈森林整備事業概要〉與 2026 年度預算資料（治山費、保安林）、林政審議會資料（2016 年《森林法》等修正）、林野廳新聞稿〈森林・林業基本計畫內閣決議〉（2026 年 6 月 5 日）、《林政新聞》（計畫草案目標）。" } }
      ] },
    { t:"related",
      items:[
        { href:"woodfirst.html", why:{ en:"Policies for using the wood.", ja:"木を使うための施策。", zh:"推動木材利用的政策。" } },
        { href:"forests.html", why:{ en:"Ownership and the forests themselves.", ja:"所有と森そのもの。", zh:"所有權與森林本身。" } },
        { href:"silviculture.html",
          why:{ en:"Zoning and replanting in practice.", ja:"ゾーニングと再造林の実際。", zh:"分區與再造林的實務。" } },
        { href:"debates.html",
          why:{ en:"Arguments about what forests are for.", ja:"森は何のためにあるかをめぐる議論。", zh:"關於森林用途的爭論。" } }
      ] }
  ] };

/* ---- ----------------------------------------- woodfirst */
GIFU.pages["woodfirst"] = { kicker:{ en:"Timber · 14", ja:"木材 · 14", zh:"木材 · 14" },
  title:{ en:"Wood First", ja:"ウッドファースト", zh:"木材優先" },
  jp:"木材利用促進法 · 県産材利用促進条例",
  lede:{
    en:"For half a century Japanese public buildings were built of concrete and steel, partly from the memory of urban fires and partly because timber construction had been restricted after the war. Since 2010 the policy has turned around: national law now asks that public buildings be built of wood wherever possible, a 2021 revision extends the aim to every kind of building, and Gifu has passed its own ordinance obliging the prefecture to build in wood and to count the carbon stored in what it builds. This page explains those laws and what they have changed on the ground.",
    ja:"半世紀のあいだ、日本の公共建築はコンクリートと鉄で建てられた。都市の大火の記憶もあり、戦後に木造が制限されたこともある。二〇一〇年から政策は向きを変えた。いまでは国の法律が、公共建築はできるかぎり木で建てることを求め、二〇二一年の改正はその狙いをあらゆる建物に広げ、岐阜は、県が木で建て、建てたものにたくわえられた炭素を数えることを義務づける独自の条例を定めた。この頁は、それらの法と、それが現場で何を変えたかを説明する。",
    zh:"半個世紀以來，日本公共建築都以混凝土與鋼材建造，一方面源於都市大火的記憶，一方面也因戰後木造建築受到限制。自 2010 年起政策轉向：如今國家法律要求公共建築盡可能以木材建造，2021 年修法將此目標擴及各類建築，岐阜更制定了自己的條例，要求縣府以木材建造，並計算所建之物中儲存的碳。本頁說明這些法規，以及它們在實務上帶來了什麼改變。" },
  body:[
    { t:"section",
      id:"national",
      title:{ en:"The national laws", ja:"国の法律", zh:"國家法規" },
      jp:"公共建築物等木材利用促進法",
      body:[
        { t:"p",
          text:{
            en:"The 2010 Act on the Promotion of Wood Use in Public Buildings made the national government responsible for using wood in the low-rise public buildings it builds and encouraged prefectures and municipalities to adopt their own policies. Its results were real but modest: the share of low-rise public buildings built in timber rose, but most large public buildings remained concrete. In 2021 the law was renamed and broadened into an Act on the Promotion of Wood Use in Buildings to Contribute to a Decarbonised Society. It covers private buildings as well, introduces agreements between the government and businesses that commit to using wood, and designates 8 October as Wood Use Promotion Day and October as Wood Use Promotion Month.",
            ja:"二〇一〇年の公共建築物等における木材の利用の促進に関する法律は、国に、みずから建てる低層の公共建築物に木材を使う責任を負わせ、県や市町村にも独自の方針をもつよう促した。その成果は本物だったが控えめだった。低層の公共建築物のうち木造の割合は上がったが、大きな公共建築の多くはコンクリートのままだった。二〇二一年、法律は名を改めて広げられ、脱炭素社会の実現に資する等のための建築物等における木材の利用の促進に関する法律となった。民間の建物も対象とし、木材の利用を約束する事業者と国などとの協定を設け、十月八日を木材利用促進の日、十月を木材利用促進月間と定めた。",
            zh:"2010 年的《公共建築物等木材利用促進法》要求中央政府在其興建的低層公共建築中使用木材，並鼓勵縣與市町村制定各自的方針。其成效真實但有限：低層公共建築的木造比例上升，但多數大型公共建築仍是混凝土。2021 年該法更名並擴大為《為實現去碳社會等之建築物等木材利用促進法》，範圍涵蓋民間建築，引入政府與承諾使用木材之企業間的協定，並訂定 10 月 8 日為「木材利用促進日」、十月為「木材利用促進月」。" } },
        { t:"note",
          label:{ en:"Why 8 October", ja:"なぜ十月八日か", zh:"為何是 10 月 8 日" },
          text:{
            en:"The date was already Wood Day in Japan: the characters for ten (十) and eight (八), written one above the other, make the character for tree, 木.",
            ja:"この日はすでに日本の「木の日」だった。十と八の字を上下に重ねると、木の字になる。",
            zh:"這一天原本就是日本的「木之日」：把「十」與「八」上下疊寫，就成了「木」字。" } }
      ] },
    { t:"section",
      id:"ordinance",
      title:{ en:"Gifu's ordinance", ja:"岐阜の条例", zh:"岐阜的條例" },
      jp:"岐阜県木の国・山の国県産材利用促進条例",
      body:[
        { t:"p",
          text:{
            en:"In December 2022 the Gifu prefectural assembly passed the Gifu “Land of Trees, Land of Mountains” Ordinance for the Promotion of Prefectural Timber, in force from April 2023. Its twenty-four articles aim to advance decarbonisation and a circular economy through the use of local timber. It requires a prefectural plan for timber use; makes timber construction the rule for the prefecture's own public buildings; creates agreements between the prefecture and businesses to promote Gifu timber; introduces recognition of the carbon stored in buildings according to the volume of Gifu timber used; and sets up awards for outstanding projects. By the count of the forestry trade press Gifu was the twenty-sixth prefecture to adopt such an ordinance, though a local-government research institute's narrower list places it twenty-third; Tokushima's, enacted at the end of 2012 and in force from 2013, was the first.",
            ja:"二〇二二年十二月、岐阜県議会は岐阜県木の国・山の国県産材利用促進条例を可決し、二〇二三年四月に施行された。二十四の条からなり、地元の木を使うことで脱炭素と循環型の経済を進めることを目的とする。県に県産材の利用の計画を求め、県自身の公共建築物は木造を原則とし、県と事業者のあいだで岐阜の木を広めるための協定を設け、使った岐阜の木の量に応じて建物に貯蔵された炭素を認める制度を導入し、すぐれた取り組みを表彰する。林業の業界紙の数え方では、こうした条例を定めた県は岐阜で二十六番目である（地方自治の研究機関のより狭い一覧では二十三番目）。最初は二〇一二年末に制定され二〇一三年に施行された徳島の条例だった。",
            zh:"2022 年 12 月，岐阜縣議會通過《岐阜縣木之國・山之國縣產材利用促進條例》，自 2023 年 4 月施行。全文二十四條，旨在透過使用在地木材推動去碳與循環經濟。條例要求縣府訂定縣產材利用計畫；以木造作為縣府自有公共建築的原則；建立縣府與企業之間推廣岐阜木材的協定；引入依使用岐阜木材之量認定建築儲碳的制度；並設立優良案例表揚。依林業產業媒體的算法，岐阜是第 26 個制定此類條例的縣（某地方自治研究機構較窄的名單則列為第 23 個）；第一個是德島，於 2012 年底制定、2013 年施行。" } },
        { t:"figure",
          caption:{
            en:"Prefectures with ordinances promoting the use of local timber. Source: forestry trade press reporting Gifu's ordinance (December 2022); other tallies, using narrower definitions, give lower counts.",
            ja:"地元の木材の利用を促す条例をもつ県の数。出典：岐阜の条例を報じた林業の業界紙（二〇二二年十二月）。定義を狭くとるほかの集計では数はより少ない。",
            zh:"制定在地木材利用促進條例的縣數。資料來源：報導岐阜條例的林業產業媒體（2022 年 12 月）；採較窄定義的其他統計數字較少。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Wood-use ordinances", ja:"県産材利用の条例", zh:"縣產材利用條例" }, unit:{ en:"prefectures", ja:"県", zh:"縣" }, tick:5, h:160,
            items:[
              { x:"2013", v:1, lab:{ en:"1 (Tokushima)", ja:"1（徳島）", zh:"1（德島）" }, f:"#E6E4E0" },
              { x:{ en:"Apr 2022", ja:"2022年4月", zh:"2022年4月" }, v:25, f:"#E0E6DB" },
              { x:{ en:"Dec 2022", ja:"2022年12月", zh:"2022年12月" }, v:26, lab:{ en:"26 (Gifu)", ja:"26（岐阜）", zh:"26（岐阜）" }, f:"#EADCC1" }
            ] }); } }
      ] },
    { t:"section",
      id:"measures",
      title:{ en:"What the policies do", ja:"施策が行うこと", zh:"政策的具體作為" },
      jp:"県産材の利用促進",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Recognised wood-using facilities", ja:"ぎふの木づかい施設", zh:"岐阜木材利用設施認定" },
              jp:"認定",
              def:{
                en:"Shops, offices, clinics, hotels and other private buildings that use Gifu timber visibly can be recognised by the prefecture and listed on its timber portal; more than a hundred have been recognised.",
                ja:"岐阜の木を目に見えるかたちで使う店、事務所、診療所、宿などの民間の建物は、県に認定され、県の木材のポータルに載る。認定は百を超える。",
                zh:"以可見方式使用岐阜木材的店舖、辦公室、診所、旅館等民間建築，可獲縣府認定並刊登於縣府木材入口網站；已有超過一百處獲得認定。" } },
            { term:{ en:"House-building support", ja:"家づくりの支援", zh:"建屋補助" },
              jp:"ぎふの木で家づくり支援事業",
              def:{
                en:"Grants for new houses, renovations and — to widen the market — houses built with Gifu timber outside the prefecture, together with promotion in the Tokyo region.",
                ja:"新築、リノベーション、そして市場を広げるための県外での岐阜の木の家に対する補助と、首都圏でのPR。",
                zh:"補助新建住宅、翻修，以及——為擴大市場——在縣外以岐阜木材建造的住宅，並在首都圈進行推廣。" } },
            { term:{ en:"Timber building portal", ja:"ぎふ木造建築ポータル", zh:"岐阜木造建築入口網站" },
              jp:"情報",
              def:{
                en:"A prefectural website that gathers design guides for medium and large timber buildings, lists of mills able to supply long and large sections, grading and drying facilities, and case studies.",
                ja:"中大規模の木造建築の設計の手引き、長尺材や大断面材を出せる製材所の一覧、格付けと乾燥の施設、事例を集めた県のウェブサイト。",
                zh:"縣府網站，匯集中大型木造建築設計指南、可供應長尺與大斷面材之製材所名單、分級與乾燥設施，以及案例研究。" } },
            { term:{ en:"Separate timber procurement", ja:"木材の分離発注", zh:"木材分離採購" },
              jp:"先行調達",
              def:{
                en:"For a public building to use local timber, the logs often have to be felled, sawn and dried a year or more before construction begins — longer than a normal building contract allows. Many Gifu municipalities therefore buy the timber themselves in advance and supply it to the builder.",
                ja:"公共建築が地元の木を使うには、丸太を着工の一年以上前に伐り、挽き、乾かさねばならないことが多い——ふつうの建築の契約が許すより長い。だから岐阜の多くの市町村は、材を自分で前もって買い、施工者に渡す。",
                zh:"公共建築若要使用在地木材，往往必須在開工前一年以上就伐木、製材並乾燥——這比一般建築合約允許的時間更長。因此岐阜許多市町村會事先自行採購木材，再提供給施工者。" } }
          ] }
      ] },
    { t:"section",
      id:"barriers",
      title:{ en:"What stands in the way", ja:"何が妨げているか", zh:"阻礙何在" },
      jp:"課題",
      body:[
        { t:"figure",
          caption:{
            en:"Common barriers to building in wood in Japan and how strongly each applies to different building types (three dots = strong barrier). A qualitative summary of issues raised in Japanese policy documents.",
            ja:"日本で木で建てるうえでのよくある障害と、建物の種類ごとにどれほど強くあてはまるか（点三つが強い障害）。日本の政策の資料に挙がる課題の定性的なまとめ。",
            zh:"日本以木材建造時常見的障礙，以及其對不同建築類型的影響程度（三點為強烈障礙）。依日本政策文件所提問題所做的定性彙整。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"Barriers by building type", ja:"建物の種類ごとの障害", zh:"依建築類型的障礙" }, labelW:230,
            cols:[ { en:"Detached house", ja:"戸建て住宅", zh:"獨棟住宅" }, { en:"School, low-rise public", ja:"学校・低層公共", zh:"學校、低層公共" }, { en:"Mid-rise office", ja:"中層事務所", zh:"中層辦公" }, { en:"High-rise", ja:"高層", zh:"高層" } ],
            rows:[
              { n:{ en:"Fire regulations", ja:"防耐火の規制", zh:"防火法規" }, v:[0,1,2,3] },
              { n:{ en:"Construction cost", ja:"建設費", zh:"建造成本" }, v:[0,1,2,3] },
              { n:{ en:"Designers' experience", ja:"設計者の経験", zh:"設計者經驗" }, v:[0,1,2,3] },
              { n:{ en:"Supply of dried, graded timber", ja:"乾燥・格付け材の供給", zh:"乾燥分級材供應" }, v:[1,2,3,3] },
              { n:{ en:"Durability and maintenance worries", ja:"耐久性と維持管理の不安", zh:"耐久與維護疑慮" }, v:[1,2,2,2] },
              { n:{ en:"Acoustic and vibration performance", ja:"遮音と振動", zh:"隔音與振動性能" }, v:[0,1,2,2] }
            ] }); } },
        { t:"p",
          text:{
            en:"The phrase “wood first” itself comes from British Columbia, whose 2009 Wood First Act required wood to be considered first for provincially funded buildings. Japan's version is less a single rule than an accumulation of laws, subsidies, design guides, demonstration projects and training. Its success in Gifu is measured less by landmark buildings than by ordinary ones: the village school rebuilt in local hinoki, the clinic with a sugi ceiling, the town hall whose timber was felled from the town's own forest.",
            ja:"「ウッドファースト」という言葉そのものはカナダのブリティッシュコロンビア州から来た。二〇〇九年の同州のウッドファースト法は、州の資金で建てる建物にまず木を検討するよう求めた。日本のそれは一つの決まりというより、法律、補助、設計の手引き、モデルとなる事業、研修の積み重ねである。岐阜でのその成果は、目立つ建物よりふつうの建物で測られる。地元のヒノキで建て直された村の学校、スギの天井の診療所、町自身の森から伐った材でできた役場。",
            zh:"「木材優先」一詞本身源自加拿大卑詩省，其 2009 年的《木材優先法》要求省府出資的建築必須優先考慮木材。日本的版本與其說是一條規則，不如說是法律、補助、設計指南、示範計畫與培訓的累積。它在岐阜的成效，與其以地標建築衡量，不如以平凡建築衡量：以在地扁柏重建的村落學校、有柳杉天花板的診所、以本町森林伐下之木材建成的町公所。" } }
      ] },
    { t:"section",
      id:"mechanics",
      title:{ en:"How the laws work", ja:"法の仕組み", zh:"法規如何運作" },
      jp:"基本方針と建築物木材利用促進協定",
      body:[
        { t:"p",
          text:{
            en:"The 2010 Act came into force on 1 October 2010. Its idea of a “public building” is wide: besides the offices of the state and of local governments it takes in schools, hospitals, nursing homes, railway stations and similar buildings used by the public, whoever builds them. Under the basic policy issued by the ministers of agriculture and of land, infrastructure and transport, the state undertook to build <em>in principle</em> every low-rise public building it commissions in timber, unless fire regulations or the building's purpose ruled it out, and to line the interior with wood where the structure itself could not be wooden. Prefectures and municipalities were asked to draw up policies of their own, and the great majority did — which is how a national law reached the village school and the community hall.",
            ja:"二〇一〇年の法律は、同年十月一日に施行された。そこでいう「公共建築物」の範囲は広い。国と地方公共団体の庁舎に加え、学校、病院、老人ホーム、鉄道の駅など、だれが建てるかを問わず人々が利用する建物を含む。農林水産大臣と国土交通大臣が定めた基本方針のもとで、国は、みずから整備する低層の公共建築物を、防耐火の規制や用途のうえで難しい場合を除き、<em>原則として</em>すべて木造とし、構造を木にできない場合は内装を木質化することとした。県と市町村にもそれぞれの方針を定めるよう求め、その大半が実際に定めた。こうして国の法律は村の学校や公民館にまで届いた。",
            zh:"2010 年的法律於同年 10 月 1 日施行。其所謂「公共建築物」範圍很廣：除國家與地方政府的廳舍外，還包括學校、醫院、老人安養機構、鐵路車站等供民眾使用的建築，不論由誰興建。依農林水產大臣與國土交通大臣訂定的基本方針，國家承諾其發包的低層公共建築<em>原則上</em>一律採木造，除非防火法規或建築用途不允許；結構無法用木材時，則以木材做室內裝修。縣與市町村也被要求訂定各自的方針，而絕大多數確實訂定了——國家法律就這樣延伸到村落學校與社區會館。" } },
        { t:"p",
          text:{
            en:"The 2021 revision, passed in June and in force from 1 October 2021, removed the word “public” from the law's reach and gave it the popular name “Act for Building Towns in Wood”. It set up a Wood Use Promotion Headquarters, chaired by the agriculture minister, to coordinate the ministries concerned. Its main new instrument is the <em>building wood-use agreement</em>: a company or trade body signs with the state or with a prefecture or municipality, stating how much timber it means to use and in which buildings, and the government side promises technical advice, information and publicity in return. By the end of December 2024 the state had signed 25 such agreements and local governments 146, and the buildings built or fitted out in wood under them during 2024 used about 124,852 cubic metres of timber.",
            ja:"二〇二一年の改正は同年六月に成立し、十月一日に施行された。法の対象から「公共」の語を外し、「都市（まち）の木造化推進法」という通称を得た。農林水産大臣を本部長とする木材利用促進本部を置き、関係する省庁の取り組みをまとめる。新しい柱は<em>建築物木材利用促進協定</em>である。企業や業界団体が国または県・市町村と協定を結び、どの建物にどれだけの木材を使うかを示し、行政の側は技術的な助言や情報の提供、広報で応える。二〇二四年十二月末までに、国が結んだ協定は25件、地方公共団体が結んだ協定は146件にのぼり、協定にもとづいて二〇二四年に木造化・木質化された建物は約124,852立方メートルの木材を使った。",
            zh:"2021 年的修法於同年 6 月通過、10 月 1 日施行，把「公共」二字從適用範圍中拿掉，並得到「都市（まち）木造化推進法」的通稱。修法設立由農林水產大臣擔任本部長的木材利用促進本部，統籌相關部會。其主要新工具是<em>建築物木材利用促進協定</em>：企業或業界團體與國家或縣、市町村簽約，載明將在哪些建築使用多少木材，行政方則以技術諮詢、資訊提供與宣傳作為回報。至 2024 年 12 月底，國家已簽訂 25 件、地方政府已簽訂 146 件此類協定；依協定於 2024 年木造化或以木材裝修的建築，共使用約 124,852 立方公尺木材。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Public buildings in wood", ja:"公共建築物の木造率", zh:"公共建築木造率" },
              v:"15.9%",
              d:{ en:"floor area started, FY2024", ja:"着工床面積、二〇二四年度", zh:"開工樓地板面積，2024 年度" } },
            { k:{ en:"Low-rise public buildings", ja:"低層の公共建築物", zh:"低層公共建築" },
              v:"33.4%",
              d:{ en:"three storeys or fewer, FY2024", ja:"三階建て以下、二〇二四年度", zh:"三層以下，2024 年度" } },
            { k:{ en:"All buildings started", ja:"着工建築物全体", zh:"全部開工建築" },
              v:"47.2%",
              d:{ en:"wooden share by floor area, 2024", ja:"床面積ベースの木造率、二〇二四年", zh:"以樓地板面積計之木造率，2024 年" } },
            { k:{ en:"Wood-use agreements", ja:"建築物木材利用促進協定", zh:"建築木材利用促進協定" },
              v:"171",
              d:{
                en:"25 with the state, 146 with local governments, end of 2024",
                ja:"国25件、地方公共団体146件、二〇二四年末",
                zh:"國家 25 件、地方政府 146 件，2024 年底" } }
          ] }
      ] },
    { t:"section",
      id:"campaigns",
      title:{ en:"National campaigns", ja:"国の運動", zh:"全國性推廣運動" },
      jp:"木づかい運動",
      body:[
        { t:"p",
          text:{
            en:"Law has been backed by persuasion. In 2005, the year the Kyoto Protocol came into force, the Forestry Agency launched the <em>Kizukai</em> (“using wood”) movement, which argues that buying domestic timber pays for thinning and so keeps planted forests healthy and absorbing carbon. Firms can put its logo on products made of Japanese wood, and October has been its campaign month, with exhibitions, awards and events; since 2021 that month has had legal standing as Wood Use Promotion Month, with 8 October as Wood Use Promotion Day. A newer slogan, “Wood Change”, invites people to swap one familiar thing — a desk, a shop counter, a wall — for one made of wood.",
            ja:"法律は説得によって支えられてきた。京都議定書が発効した二〇〇五年、林野庁は「木づかい運動」を始めた。国産材を買うことが間伐の費用をまかない、人工林を健全にし、炭素を吸収させつづける、と訴える運動である。企業は国産材でつくった製品にロゴマークを付けることができ、十月は運動の推進月間として展示や表彰、催しが行われてきた。二〇二一年からはこの月が法に定める木材利用促進月間となり、十月八日が木材利用促進の日となった。より新しい合言葉の「ウッド・チェンジ」は、身近な机や店のカウンター、壁を、一つでも木のものに替えることを呼びかける。",
            zh:"法律之外，還有說服。2005 年《京都議定書》生效那年，林野廳發起「木づかい運動」（用木運動），主張購買國產材能支付疏伐費用，讓人工林保持健康並持續吸收碳。企業可在以日本木材製成的產品上標示運動標誌；十月一向是運動的推廣月，舉辦展覽、表揚與活動。自 2021 年起，這個月份取得法定地位，成為「木材利用促進月」，10 月 8 日為「木材利用促進日」。較新的口號「Wood Change」則邀請民眾把身邊一樣熟悉的東西——一張書桌、一座店舖櫃檯、一面牆——換成木製的。" } },
        { t:"p",
          text:{
            en:"The most visible showcase was the Tokyo 2020 Olympic and Paralympic Games. The Village Plaza at the athletes' village was built from timber lent by some sixty local governments across Japan, each piece stamped with its origin; after the Games the building was taken apart and the timber sent home to be reused. Shirakawa town in Gifu's Kamo district — not to be confused with the gasshō village of Shirakawa — supplied hinoki together with the prefecture and five other Gifu municipalities. Its returned timber became six benches at the town's stations and bus stops, finished in October 2022, and benches and wall bookshelves for its new town office, due for completion at the end of January 2026.",
            ja:"もっとも目に見えるかたちの舞台は、二〇二〇年の東京オリンピック・パラリンピックだった。選手村のビレッジプラザは、全国のおよそ六十の自治体が貸し出した木材で建てられ、材には産地が記された。大会後に建物は解体され、木材はそれぞれの産地に戻されて再利用された。岐阜県加茂郡の白川町——合掌造りの白川村とは別である——は、県や県内の五市町村とともにヒノキを提供した。戻ってきた材は町内の駅やバス停の六基のベンチとなって二〇二二年十月に完成し、新しい町役場のベンチと壁面書架にも使われ、二〇二六年一月末に完成する予定とされた。",
            zh:"最醒目的展示舞台是 2020 年東京奧運與帕運。選手村的「Village Plaza」以全國約六十個地方政府出借的木材建成，每根木材都標明產地；賽後建築拆解，木材送回原產地再利用。岐阜縣加茂郡的白川町——不要與合掌造聚落的白川村混淆——與縣府及縣內另外五個市町村一同提供扁柏。送回的木材做成町內車站與公車站的 6 張長椅，於 2022 年 10 月完成；另用於新町公所的長椅與壁面書架，預定 2026 年 1 月底完工。" } }
      ] },
    { t:"section",
      id:"gifu-practice",
      title:{ en:"Gifu in practice", ja:"岐阜での実践", zh:"岐阜的實踐" },
      jp:"岐阜県木の国・山の国県産材利用推進計画",
      body:[
        { t:"p",
          text:{
            en:"The ordinance required a plan, and the draft presented in March 2023 set cumulative targets: 60 prefectural buildings built in timber or given wooden interiors, 9,050 houses built with Gifu timber, and 90 private buildings other than houses — shops, offices, clinics — built or fitted out in wood. Among the prefecture's own projects were 17 police boxes and residential police posts to be built in timber between FY2023 and FY2026: small buildings, but ones that stand in almost every town and are seen by everyone.",
            ja:"条例は計画を求めており、二〇二三年三月に示された素案は累計の目標を掲げた。木造化または内装を木質化した県の建築物60施設、県産材を使った住宅9,050戸、そして店舗や事務所、診療所など住宅以外の民間建築物で木造化・木質化したもの90施設である。県みずからの事業には、二〇二三〜二〇二六年度に木造で建てる17の交番・駐在所が含まれた。小さな建物だが、ほとんどの町にあり、だれもが目にする。",
            zh:"條例要求訂定計畫，2023 年 3 月提出的草案設定了累計目標：以木造或木質內裝完成的縣有建築 60 處、使用岐阜木材的住宅 9,050 戶，以及店舖、辦公室、診所等住宅以外的民間建築木造化或木質化 90 處。縣府自身的計畫中，包括在 2023 至 2026 年度以木造興建的 17 處派出所與駐在所：建築雖小，卻幾乎每個市鎮都有，人人看得到。" } },
        { t:"p",
          text:{
            en:"The new Gifu Prefectural Office, which opened on 4 January 2023, shows the other track of the policy — interior wood use where the structure cannot be timber. The 21-storey administration tower, about 90 metres tall, and its 6-storey assembly building are not wooden structures, but their public spaces are lined with Gifu wood: pillars clad in hinoki boards laid in overlapping <em>yamato-bari</em>, hinoki louvres along the walls, and sugi and hinoki furniture in the Seiryū (“clear stream”) Lobby on the 20th floor. Hon-Minoshi paper hangs in the lift lobby of the ground floor and unglazed Mino-ware tiles cover floors and façades, so that the building doubles as a catalogue of the prefecture's materials.",
            ja:"二〇二三年一月四日に開庁した岐阜県の新庁舎は、政策のもう一つの柱——構造を木にできない建物での内装の木質化——を示す。高さ約90メートル、地上二十一階の行政棟と六階建ての議会棟は木造ではないが、人が集まる空間は岐阜の木で仕上げられている。ヒノキの板を交互に重ねた<em>大和張り</em>の柱、壁に並ぶヒノキのルーバー、二十階の「清流ロビー」に置かれたスギとヒノキの家具である。一階のエレベーターホールには本美濃紙が飾られ、床や外装には素焼きの美濃焼のタイルが使われていて、建物そのものが県の素材の見本帳になっている。",
            zh:"2023 年 1 月 4 日啟用的岐阜縣新廳舍，展現了政策的另一條路線——結構無法用木材時，以木材做室內裝修。地上 21 層、高約 90 公尺的行政棟與 6 層樓的議會棟並非木構造，但公共空間以岐阜木材裝修：以扁柏板交錯疊合的<em>大和張</em>包覆柱子、牆面排列扁柏百葉，20 樓「清流大廳」擺放柳杉與扁柏家具。一樓電梯廳展示本美濃紙，地板與外牆使用素燒美濃燒磁磚，整棟建築本身就成了縣內材料的型錄。" } },
        { t:"ul",
          items:[
            {
              en:"<a href=\"building.html\">Gifu Media Cosmos</a> (2015), the city library whose undulating roof is a lattice of Tōnō hinoki.",
              ja:"<a href=\"building.html\">みんなの森 ぎふメディアコスモス</a>（二〇一五年）。うねる屋根が東濃ヒノキの格子でできた市立図書館。",
              zh:"<a href=\"building.html\">岐阜媒體宇宙</a>（2015 年），起伏屋頂以東濃扁柏格柵構成的市立圖書館。" },
            {
              en:"<a href=\"building.html\">morinos</a> (2020), the forest-education centre of the Gifu Academy of Forest Science and Culture, combining CLT with long-span glulam.",
              ja:"<a href=\"building.html\">morinos</a>（二〇二〇年）。CLTと長スパンの集成材を組み合わせた、岐阜県立森林文化アカデミーの森林総合教育センター。",
              zh:"<a href=\"building.html\">morinos</a>（2020 年），岐阜縣立森林文化學院的森林教育中心，結合 CLT 與長跨距集成材。" },
            {
              en:"<a href=\"mokuiku.html\">Gifu Mokuyūkan</a> (2020), the prefecture's single-storey timber wood-play museum in Gifu city.",
              ja:"<a href=\"mokuiku.html\">ぎふ木遊館</a>（二〇二〇年）。岐阜市にある県の平屋の木造の木育施設。",
              zh:"<a href=\"mokuiku.html\">岐阜木遊館</a>（2020 年），位於岐阜市、縣府經營的單層木造木育遊戲館。" }
          ] }
      ] },
    { t:"section",
      id:"results",
      title:{ en:"What has changed", ja:"何が変わったか", zh:"改變了什麼" },
      jp:"公共建築物の木造率",
      body:[
        { t:"figure",
          caption:{
            en:"Wooden share of public buildings started in Japan, by floor area, FY2010–FY2024. Source: Forestry Agency estimates from the building-starts statistics, as compiled in a Ministry of Agriculture, Forestry and Fisheries budget review (2026) and the Forest and Forestry White Paper (FY2024).",
            ja:"日本で着工された公共建築物の木造率（床面積ベース）、二〇一〇〜二〇二四年度。出典：建築着工統計にもとづく林野庁の試算（農林水産省の予算レビュー資料〈二〇二六年〉および二〇二四年度の森林・林業白書による）。",
            zh:"日本開工公共建築的木造率（以樓地板面積計），2010–2024 年度。資料來源：林野廳依建築開工統計所做的估算（據農林水產省預算檢討資料〈2026 年〉與 2024 年度《森林・林業白書》）。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Public buildings built in wood", ja:"公共建築物の木造率", zh:"公共建築木造率" }, unit:{ en:"% of floor area started", ja:"着工床面積に占める％", zh:"占開工樓地板面積 %" }, tick:5, h:180, dec:1,
            hl:["2010","2021","2024"],
            items:[
              { x:"2010", v:8.3 }, { x:"2011", v:8.4 }, { x:"2012", v:9.0 }, { x:"2013", v:8.9 }, { x:"2014", v:10.4 },
              { x:"2015", v:11.7 }, { x:"2016", v:11.7 }, { x:"2017", v:13.4 }, { x:"2018", v:13.1 }, { x:"2019", v:13.8 },
              { x:"2020", v:13.9 }, { x:"2021", v:13.2 }, { x:"2022", v:13.5 }, { x:"2023", v:14.8 }, { x:"2024", v:15.9 }
            ],
            note:{ en:"Fiscal years (April–March). Highlighted: the first year of the 2010 Act, the year of the 2021 revision, and the latest year.", ja:"年度（四月〜三月）。色付きは、二〇一〇年の法律の初年度、二〇二一年の改正の年、最新の年。", zh:"年度（4 月至翌年 3 月）。著色者為 2010 年法律施行首年、2021 年修法當年與最新年度。" } }); } },
        { t:"p",
          text:{
            en:"In fourteen years the wooden share of public floor area started each year almost doubled, from 8.3% in FY2010 to 15.9% in FY2024, but it is still less than one-sixth. The gains are concentrated where the 2010 law aimed: among low-rise public buildings the share rose from 17.9% in FY2010 to 30.6% in FY2023 and 33.4% in FY2024, while large public buildings remain overwhelmingly concrete and steel. Across all buildings started in 2024 the wooden share was 47.2%, but that average hides a split: low-rise houses are more than 80% timber, mid- and high-rise buildings less than 1%. The next gains therefore depend on medium-sized offices, schools and flats — the territory of <a href=\"engineered.html\">engineered wood</a> and of the fire-resistant timber described in <a href=\"building.html\">Building in Wood</a>.",
            ja:"十四年のあいだに、毎年着工される公共建築物の床面積に占める木造の割合は、二〇一〇年度の8.3パーセントから二〇二四年度の15.9パーセントへとほぼ倍になったが、なお六分の一に満たない。伸びは二〇一〇年の法律が狙ったところに集中している。低層の公共建築物では、二〇一〇年度の17.9パーセントから二〇二三年度に30.6パーセント、二〇二四年度に33.4パーセントへ上がった一方、大きな公共建築物は圧倒的にコンクリートと鉄のままである。二〇二四年に着工された建築物全体の木造率は47.2パーセントだったが、この平均は二つに割れている。低層の住宅は八割を超えて木造、中高層の建築物は一パーセントに満たない。だから次の伸びは、中規模の事務所、学校、集合住宅にかかっている。<a href=\"engineered.html\">エンジニアードウッド</a>と、<a href=\"building.html\">木で建てる</a>で述べた耐火の木造の領分である。",
            zh:"十四年間，每年開工公共建築樓地板面積中的木造比例，從 2010 年度的 8.3% 增至 2024 年度的 15.9%，幾乎翻倍，但仍不到六分之一。成長集中在 2010 年法律瞄準之處：低層公共建築的比例從 2010 年度的 17.9%，升至 2023 年度的 30.6% 與 2024 年度的 33.4%；大型公共建築則絕大多數仍是混凝土與鋼材。2024 年開工的全部建築木造率為 47.2%，但這個平均值掩蓋了分歧：低層住宅八成以上是木造，中高層建築則不到 1%。因此下一波成長取決於中型辦公室、學校與集合住宅——那是<a href=\"engineered.html\">工程木材</a>以及<a href=\"building.html\">以木建造</a>中所述耐火木構造的領域。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Forest and Forestry White Paper FY2024 (chapter 3, wood use) and “Wooden share of public buildings” (FY2023–FY2024); Ministry of Agriculture, Forestry and Fisheries, administrative project review sheet (2026); Gifu Prefecture, outline of the draft prefectural timber-use plan (20 March 2023); Gifu Prefecture tourism federation, new prefectural office (2023); Forestry Agency, Tokyo 2020 timber legacy sheet for Shirakawa town.",
            ja:"出典：林野庁『森林及び林業の動向』二〇二四年度版（第三章 木材利用）、林野庁「公共建築物の木造率について」（二〇二三〜二〇二四年度）、農林水産省 行政事業レビューシート（二〇二六年）、岐阜県「岐阜県木の国・山の国県産材利用推進計画（素案）の概要」（二〇二三年三月二十日）、岐阜県観光連盟 県庁新庁舎の紹介（二〇二三年）、林野庁 東京二〇二〇大会 木材レガシー（白川町）。",
            zh:"資料來源：林野廳《2024 年度森林及林業動向》（第三章 木材利用）、林野廳〈公共建築物之木造率〉（2023–2024 年度）、農林水產省行政事業檢討表（2026 年）、岐阜縣〈岐阜縣木之國・山之國縣產材利用推進計畫（草案）概要〉（2023 年 3 月 20 日）、岐阜縣觀光聯盟 縣廳新廳舍介紹（2023 年）、林野廳 東京 2020 大會木材傳承資料（白川町）。" } }
      ] },
    { t:"related",
      items:[
        { href:"policy.html", why:{ en:"The wider policy framework.", ja:"より広い政策の枠組み。", zh:"更廣的政策架構。" } },
        { href:"building.html", why:{ en:"What is being built.", ja:"何が建てられているか。", zh:"建造了什麼。" } },
        { href:"carbon.html",
          why:{ en:"Why wood in buildings stores carbon.", ja:"建物の木が炭素をたくわえる理由。", zh:"為何建築中的木材能儲碳。" } },
        { href:"mokuiku.html", why:{ en:"Wood education for children.", ja:"子どものための木育。", zh:"兒童木育。" } }
      ] }
  ] };

/* ---- --------------------------------------------- trade */
GIFU.pages["trade"] = { kicker:{ en:"Timber · 15", ja:"木材 · 15", zh:"木材 · 15" },
  title:{ en:"Trade and Imports", ja:"貿易と輸入", zh:"貿易與進口" },
  jp:"木材自給率 · 外材 · ウッドショック",
  lede:{
    en:"Japan is one of the most forested countries in the developed world, and for most of the past sixty years it has also been one of the world's largest importers of wood. Its self-sufficiency in timber fell from nearly nine-tenths in 1960 to under a fifth in 2002, before recovering to over forty per cent today. This page explains how that happened, where Japan's imported wood comes from, why the trend has reversed, and what the ups and downs of world timber markets mean for Gifu's forests and mills.",
    ja:"日本は先進国のなかで最も森の多い国の一つであり、過去六十年の大半、世界最大級の木材の輸入国でもあった。木材の自給率は一九六〇年の九割近くから、二〇〇二年には五分の一を下回るまで落ち、いまは四割を超えるまで戻っている。この頁は、それがどうして起きたのか、日本の輸入材がどこから来るのか、流れがなぜ逆転したのか、そして世界の木材市場の浮き沈みが岐阜の森と製材所にとって何を意味するのかを説明する。",
    zh:"日本是已開發國家中森林最茂密的國家之一，而在過去六十年的大部分時間裡，它也是全球最大的木材進口國之一。其木材自給率從 1960 年的近九成，跌到 2002 年不足兩成，如今才回升到四成以上。本頁說明這是如何發生的、日本進口木材來自何處、趨勢為何反轉，以及國際木材市場的起伏對岐阜的森林與製材所意味著什麼。" },
  body:[
    { t:"section",
      id:"selfsufficiency",
      title:{ en:"The rise and fall and rise of domestic timber", ja:"国産材の落ちこみと回復", zh:"國產材的衰落與回升" },
      jp:"木材自給率",
      body:[
        { t:"p",
          text:{
            en:"In the early 1960s Japan supplied most of its own wood, but its forests could not meet the demand of the high-growth economy: the post-war plantations were still young, and the natural forests had been heavily cut in wartime. Imports were liberalised, and cheap logs from Southeast Asia, North America and the Soviet Union poured in, followed by sawn timber, plywood and laminated beams. Domestic producers could not compete on price or consistency, and self-sufficiency fell almost every year until 2002, when it reached a low of 18.8 per cent. Since then it has more than doubled, as the plantations matured, the plywood industry switched to domestic logs, biomass power created new demand, and policy promoted domestic wood.",
            ja:"一九六〇年代の初め、日本は木材の多くを自らまかなっていたが、その森は高度成長の経済の需要に応えられなかった。戦後の人工林はまだ若く、天然林は戦時に激しく伐られていた。輸入が自由化され、東南アジア、北米、ソ連から安い丸太が流れこみ、製材、合板、集成材の梁が続いた。国内の生産者は値段でもそろいでも太刀打ちできず、自給率はほぼ毎年下がり、二〇〇二年に最低の十八・八パーセントに達した。それ以来、人工林が育ち、合板の業界が国産の丸太に切り替え、バイオマス発電が新しい需要を生み、政策が国産材を後押しするにつれて、自給率は二倍を超えた。",
            zh:"1960 年代初，日本大部分木材仍能自給，但其森林無法滿足高度成長經濟的需求：戰後人工林還年輕，天然林又在戰時遭大量砍伐。進口自由化後，來自東南亞、北美與蘇聯的廉價原木大量湧入，隨後是製材、合板與集成樑。國內生產者在價格與品質一致性上都無法競爭，自給率幾乎年年下滑，到 2002 年跌至最低的 18.8%。此後隨著人工林成熟、合板業改用國產原木、生質能發電創造新需求，加上政策推動國產材，自給率已回升一倍以上。" } },
        { t:"figure",
          caption:{
            en:"Japan's timber self-sufficiency rate, per cent, selected years (approximate values from the Forestry Agency's timber supply and demand tables). The low point came in 2002.",
            ja:"日本の木材自給率（％、主な年、林野庁の木材需給表によるおおよその値）。最低は二〇〇二年。",
            zh:"日本木材自給率（%，選定年份；依林野廳木材供需表之約略值）。最低點出現在 2002 年。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"Timber self-sufficiency", ja:"木材自給率", zh:"木材自給率" }, unit:"%",
            x0:1960, x1:2025, y0:0, y1:100, tick:20, xt:[1960,1970,1980,1990,2000,2010,2020], endLabels:true, dec:1,
            series:[ { n:{ en:"Self-sufficiency", ja:"自給率", zh:"自給率" },
              pts:[[1960,86.7],[1970,45],[1980,32.9],[1990,26.4],[2000,18.9],[2002,18.8],[2010,26],[2015,33.3],[2020,41.8],[2024,42.5]] } ],
            marks:[ { x:2002, t:{ en:"low: 18.8%", ja:"最低18.8％", zh:"最低 18.8%" } } ] }); } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Total demand, 2024", ja:"総需要 二〇二四年", zh:"總需求 2024" },
              v:{ en:"81.9 million m³", ja:"8,187万m³", zh:"8,187 萬 m³" },
              d:{ en:"Roundwood equivalent, all uses including fuel.", ja:"丸太換算。燃料を含むすべての用途。", zh:"原木當量，含燃料在內所有用途。" } },
            { k:{ en:"Domestic supply", ja:"国内生産", zh:"國內供給" },
              v:{ en:"34.8 million m³", ja:"3,481万m³", zh:"3,481 萬 m³" },
              d:{ en:"2024", ja:"二〇二四年", zh:"2024 年" } },
            { k:{ en:"Imports", ja:"輸入", zh:"進口" },
              v:{ en:"47.1 million m³", ja:"4,707万m³", zh:"4,707 萬 m³" },
              d:{ en:"2024", ja:"二〇二四年", zh:"2024 年" } },
            { k:{ en:"Building timber", ja:"建築用材", zh:"建築用材" },
              v:"52.9%",
              d:{ en:"Self-sufficiency for construction timber, 2024.", ja:"建築用材の自給率、二〇二四年。", zh:"2024 年建築用材自給率。" } }
          ] }
      ] },
    { t:"section",
      id:"sources",
      title:{ en:"Where imports come from", ja:"輸入材はどこから来るか", zh:"進口木材來自何處" },
      jp:"外材",
      body:[
        { t:"table",
          caption:{ en:"Main categories of wood imported into Japan", ja:"日本に輸入される主な木材", zh:"日本進口木材主要類別" },
          cols:[
            { en:"Product", ja:"製品", zh:"產品" },
            { en:"Main sources", ja:"主な産地", zh:"主要來源" },
            { en:"Competes with", ja:"競合する国産材", zh:"與之競爭的國產材" }
          ],
          rows:[
            [
              { en:"Logs (Douglas fir, hemlock)", ja:"丸太（ベイマツ・ベイツガ）", zh:"原木（花旗松、鐵杉）" },
              { en:"North America", ja:"北米", zh:"北美" },
              { en:"Beams and posts sawn in Japan", ja:"国内で挽く梁や柱", zh:"日本國內鋸製的樑與柱" }
            ],
            [
              { en:"Sawn timber", ja:"製材", zh:"製材" },
              {
                en:"Canada, Europe (Finland, Sweden, Austria)",
                ja:"カナダ、欧州（フィンランド・スウェーデン・オーストリア）",
                zh:"加拿大、歐洲（芬蘭、瑞典、奧地利）" },
              { en:"Sugi and hinoki framing", ja:"スギ・ヒノキの軸組材", zh:"柳杉與扁柏骨架材" }
            ],
            [
              { en:"Glulam and laminae", ja:"集成材とラミナ", zh:"集成材與層板" },
              { en:"Europe (spruce, pine)", ja:"欧州（トウヒ・マツ）", zh:"歐洲（雲杉、松）" },
              { en:"Domestic glulam posts and beams", ja:"国産の集成材の柱と梁", zh:"國產集成柱與集成樑" }
            ],
            [
              { en:"Plywood", ja:"合板", zh:"合板" },
              { en:"Malaysia, Indonesia", ja:"マレーシア、インドネシア", zh:"馬來西亞、印尼" },
              { en:"Domestic softwood plywood", ja:"国産の針葉樹合板", zh:"國產針葉樹合板" }
            ],
            [
              { en:"Chips for paper", ja:"製紙用チップ", zh:"造紙木片" },
              { en:"Australia, Vietnam, South America", ja:"オーストラリア、ベトナム、南米", zh:"澳洲、越南、南美" },
              { en:"Domestic broadleaf chips", ja:"国産の広葉樹チップ", zh:"國產闊葉木片" }
            ],
            [
              { en:"Pellets and chips for power", ja:"発電用のペレット・チップ", zh:"發電用木質顆粒與木片" },
              { en:"Vietnam, Canada", ja:"ベトナム、カナダ", zh:"越南、加拿大" },
              { en:"Domestic fuel logs", ja:"国産の燃料用材", zh:"國產燃料用材" }
            ],
            [
              { en:"Furniture hardwoods", ja:"家具用の広葉樹材", zh:"家具用闊葉材" },
              { en:"North America, Europe, China", ja:"北米、欧州、中国", zh:"北美、歐洲、中國" },
              { en:"Hida broadleaves", ja:"飛騨の広葉樹", zh:"飛驒闊葉樹" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources shown are the principal ones in recent years and change with markets and sanctions; since 2022 Japan has restricted imports of Russian wood.",
            ja:"示した産地は近年の主なもので、市場や制裁によって変わる。二〇二二年から日本はロシア産の木材の輸入を制限している。",
            zh:"所列來源為近年主要者，會隨市場與制裁而變動；自 2022 年起日本限制俄羅斯木材進口。" } }
      ] },
    { t:"section",
      id:"shocks",
      title:{ en:"Shocks from abroad", ja:"外から来る衝撃", zh:"來自海外的衝擊" },
      jp:"為替・規制・ウッドショック",
      body:[
        { t:"timeline",
          items:[
            { year:"1985",
              title:{ en:"The strong yen", ja:"円高", zh:"日圓升值" },
              text:{
                en:"After the Plaza Accord the yen roughly doubles in value against the dollar within a few years, making imported timber dramatically cheaper and accelerating the decline of domestic log prices.",
                ja:"プラザ合意のあと、円は数年でドルに対しておよそ二倍になり、輸入材を劇的に安くし、国産の丸太の値の下落を早める。",
                zh:"廣場協議後數年內，日圓兌美元約升值一倍，使進口木材大幅變便宜，加速國產原木價格下跌。" } },
            { year:"1990s",
              title:{ en:"Tropical log restrictions", ja:"熱帯の丸太の輸出規制", zh:"熱帶原木出口限制" },
              text:{
                en:"Producing countries in Southeast Asia restrict log exports to build their own industries; Japanese plywood mills lose their traditional raw material and begin, slowly, to turn to domestic conifers.",
                ja:"東南アジアの産出国が自国の産業を育てるため丸太の輸出を制限し、日本の合板工場はそれまでの原料を失い、ゆっくりと国産の針葉樹に向かいはじめる。",
                zh:"東南亞產地國為發展本國產業而限制原木出口；日本合板廠失去傳統原料，開始逐步轉向國產針葉樹。" } },
            { year:"2007",
              title:{ en:"Russian export duties", ja:"ロシアの輸出関税", zh:"俄羅斯出口關稅" },
              text:{
                en:"Russia raises duties on log exports, cutting supplies of larch and pine logs to Japan's western mills; domestic larch gains ground in plywood.",
                ja:"ロシアが丸太の輸出関税を上げ、日本の西の工場へのカラマツやマツの丸太の供給を減らす。国産のカラマツが合板で地歩を得る。",
                zh:"俄羅斯調高原木出口關稅，減少對日本西部工廠的落葉松與松原木供應；國產落葉松在合板領域取得進展。" } },
            { year:"2021",
              title:{ en:"The wood shock", ja:"ウッドショック", zh:"木材危機" },
              text:{
                en:"A boom in American house-building and pandemic shipping disruption sharply cut imports of lumber and glulam to Japan. Prices of imported and domestic timber rose steeply; builders waited months for materials, and many turned to local mills.",
                ja:"アメリカの住宅建設の好況と感染症の流行による海運の混乱が、日本への製材や集成材の輸入を急に減らした。輸入材も国産材も値が急騰し、工務店は材料を何か月も待ち、多くが地元の製材所に目を向けた。",
                zh:"美國住宅興建熱潮與疫情造成的海運混亂，使日本的製材與集成材進口銳減。進口材與國產材價格雙雙飆升；營造商等待材料數月，許多轉向在地製材所。" } },
            { year:"2022",
              title:{ en:"Sanctions and a weak yen", ja:"制裁と円安", zh:"制裁與日圓貶值" },
              text:{
                en:"Japan restricts imports of Russian wood after the invasion of Ukraine, and a sharply weaker yen raises the cost of all imports.",
                ja:"ウクライナ侵攻のあと日本はロシア産の木材の輸入を制限し、急な円安がすべての輸入の費用を押し上げる。",
                zh:"俄羅斯入侵烏克蘭後，日本限制俄羅斯木材進口，而日圓大幅貶值推高所有進口成本。" } }
          ] },
        { t:"note",
          label:{ en:"The lesson Gifu drew", ja:"岐阜が得た教訓", zh:"岐阜學到的教訓" },
          text:{
            en:"The wood shock showed how exposed Japanese builders had become to distant markets, and how quickly domestic supply could not respond: logs must be felled, sawn and dried months ahead. It strengthened the case for the policies Gifu had been pursuing — local sawmills, drying capacity, domestic glulam and plywood, and builders committed to Gifu timber — and for keeping a reserve of dried stock through the business cycle.",
            ja:"ウッドショックは、日本の工務店がいかに遠い市場にさらされるようになっていたか、そして国内の供給がいかにすばやく応えられないか——丸太は何か月も前に伐り、挽き、乾かさねばならない——を示した。それは、岐阜が進めてきた施策——地元の製材所、乾燥の能力、国産の集成材と合板、岐阜の木にこだわる工務店——と、景気の波を通して乾燥材のたくわえを保つことへの支持を強めた。",
            zh:"木材危機顯示日本營造商對遙遠市場的依賴有多深，以及國內供給多麼難以迅速反應：原木必須提前數月伐採、製材與乾燥。它強化了岐阜一直推動之政策的正當性——在地製材所、乾燥產能、國產集成材與合板、堅持使用岐阜木材的營造商——也強化了在景氣循環中保有乾燥材庫存的理由。" } }
      ] },
    { t:"section",
      id:"exports",
      title:{ en:"Wood going out", ja:"出ていく木", zh:"出口的木材" },
      jp:"輸出",
      body:[
        { t:"p",
          text:{
            en:"The flow is no longer only inward. Since the 2010s Japan has exported growing volumes of logs — mostly sugi to China — as well as sawn timber, and a small but prized trade in finished products. From Gifu, Hida furniture makers registered their regional trademark in Taiwan in 2009 and in China in 2010 to protect the name in their export markets; the prefecture's guitar makers ship a large share of their instruments abroad — Takamine above all; and craft products from Mino paper to Ichii carvings sell to collectors worldwide. The prefecture's strategy is to export value rather than volume: finished goods that carry a story of place, rather than logs that compete on price.",
            ja:"流れはもう内向きだけではない。二〇一〇年代から、日本は丸太——多くはスギで中国向け——と製材の輸出をふやし、仕上がった製品の小さいが珍重される取引もある。岐阜からは、飛騨の家具メーカーが輸出先で名を守るため、地域団体商標を二〇〇九年に台湾で、二〇一〇年に中国で登録した。県のギターメーカーは、なかでも高峰楽器を筆頭に、楽器のかなりの部分を海外に送り、美濃和紙から一位一刀彫までの工芸品は世界の収集家に売れる。県の戦略は、量ではなく価値を輸出することである。値段で競う丸太ではなく、土地の物語を運ぶ仕上がった品を。",
            zh:"流向已不再只是單向輸入。自 2010 年代起，日本出口的原木——多為銷往中國的柳杉——與製材量持續增加，另有規模雖小卻備受珍視的成品貿易。在岐阜，飛驒家具廠商於 2009 年在台灣、2010 年在中國註冊區域團體商標，以在出口市場保護其名號；縣內吉他廠——尤其是高峰樂器——有相當比例的樂器銷往海外；從美濃和紙到一位一刀彫的工藝品則售予世界各地的收藏家。縣府的策略是出口價值而非數量：輸出承載地方故事的成品，而非以價格競爭的原木。" } },
        { t:"chips",
          items:[
            { text:{
                en:"Hida furniture — trademark in Taiwan (2009) and China (2010)",
                ja:"飛騨の家具——台湾（二〇〇九年）と中国（二〇一〇年）で商標",
                zh:"飛驒家具——台灣（2009）與中國（2010）商標" } },
            { text:{ en:"Acoustic guitars — Nakatsugawa and Kani", ja:"アコースティックギター——中津川と可児", zh:"木吉他——中津川與可兒" } },
            { text:{ en:"Mino paper and Gifu lanterns", ja:"美濃和紙と岐阜提灯", zh:"美濃和紙與岐阜燈籠" } },
            { text:{ en:"Ichii Ittōbori and Shunkei ware", ja:"一位一刀彫と春慶塗", zh:"一位一刀彫與春慶塗" } },
            { text:{ en:"Masu from Ōgaki", ja:"大垣の枡", zh:"大垣木枡" } }
          ] }
      ] },
    { t:"section",
      id:"by-use",
      title:{ en:"What Japan imports, and for what", ja:"何を何のために輸入しているか", zh:"日本進口什麼、用於何處" },
      jp:"用途別の木材自給率",
      body:[
        { t:"p",
          text:{
            en:"The national self-sufficiency rate of 42.5% in 2024 is an average of very different markets. For timber sawn into building lumber, domestic logs supplied 53.6% of the 22.3 million cubic metres consumed; for plywood, 51.0% of 7.7 million. Fuel wood — chips, pellets and palm-kernel shells burned in biomass power stations — is now almost as large a market as sawn timber, at 22.6 million cubic metres, and domestic wood supplies 54.4% of it. The weak point is paper. Of 26.9 million cubic metres of wood used for pulp and chips, only 16.0% was domestic: Japan's paper mills run largely on imported eucalyptus and acacia chips from plantations in the southern hemisphere and Southeast Asia.",
            ja:"二〇二四年の全国の自給率42.5パーセントは、性格のまったく違う市場の平均である。建築用の製材になる木材では、消費された2,232万立方メートルのうち国産材が53.6パーセントを占め、合板用では773万立方メートルのうち51.0パーセントだった。燃料材——バイオマス発電所で燃やすチップ、ペレット、パーム椰子殻——はいまや製材用とほぼ同じ規模の2,259万立方メートルの市場となり、その54.4パーセントを国産材がまかなう。弱いのは紙である。パルプ・チップ用の2,685万立方メートルのうち国産材は16.0パーセントにすぎない。日本の製紙工場は、南半球や東南アジアの植林地から来るユーカリやアカシアの輸入チップに大きく頼っている。",
            zh:"2024 年全國 42.5% 的自給率，是性質迥異之市場的平均值。製成建築用製材的木材，在消費的 2,232 萬立方公尺中，國產材占 53.6%；合板用材 773 萬立方公尺中占 51.0%。燃料材——生質能發電廠燃燒的木片、顆粒燃料與棕櫚仁殼——如今已是與製材用材幾乎同等規模的市場，達 2,259 萬立方公尺，其中國產材供應 54.4%。弱點在紙。2,685 萬立方公尺的紙漿與木片用材中，國產材僅占 16.0%：日本的造紙廠大量仰賴來自南半球與東南亞人工林的進口桉樹與相思樹木片。" } },
        { t:"figure",
          caption:{
            en:"Japan's timber self-sufficiency by end use, 2024 (domestic supply as a share of demand, roundwood equivalent). Source: Forestry Agency, timber supply and demand table for 2024 (published November 2025).",
            ja:"日本の用途別の木材自給率、二〇二四年（需要に占める国内生産の割合、丸太換算）。出典：林野庁「令和六年（二〇二四年）木材需給表」（二〇二五年十一月公表）。",
            zh:"日本依用途區分的木材自給率，2024 年（國內供給占需求之比例，原木換算）。資料來源：林野廳 2024 年木材供需表（2025 年 11 月公布）。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Self-sufficiency by use", ja:"用途別の自給率", zh:"各用途自給率" }, max:100, labelW:250,
            items:[
              { n:{ en:"Sawn timber (22.3 million m³)", ja:"製材用材（2,232万m³）", zh:"製材用材（2,232 萬 m³）" }, v:53.6, lab:"53.6%", f:"#E0E6DB" },
              { n:{ en:"Plywood (7.7 million m³)", ja:"合板用材（773万m³）", zh:"合板用材（773 萬 m³）" }, v:51.0, lab:"51.0%", f:"#E0E6DB" },
              { n:{ en:"Pulp and chips (26.9 million m³)", ja:"パルプ・チップ用材（2,685万m³）", zh:"紙漿與木片用材（2,685 萬 m³）" }, v:16.0, lab:"16.0%", f:"#EEE1DF" },
              { n:{ en:"Fuel (22.6 million m³)", ja:"燃料材（2,259万m³）", zh:"燃料材（2,259 萬 m³）" }, v:54.4, lab:"54.4%", f:"#EDE5D2" },
              { n:{ en:"Other uses (2.2 million m³)", ja:"その他用材（223万m³）", zh:"其他用材（223 萬 m³）" }, v:97.9, lab:"97.9%", f:"#E6E4E0" },
              { n:{ en:"All wood (81.9 million m³)", ja:"総数（8,187万m³）", zh:"合計（8,187 萬 m³）" }, v:42.5, lab:"42.5%", f:"#EADCC1" }
            ] }); } },
        { t:"p",
          text:{
            en:"The make-up of the 47.1 million cubic metres imported in 2024 tells the same story. Unprocessed logs — the backbone of the trade in the 1960s and 1970s — were only 2.5 million cubic metres, about one-twentieth. Sawn timber, glulam and other processed products made up 8.1 million, plywood and similar panels 3.5 million and wood pulp 3.8 million. The largest single item was chips, 18.8 million, followed by fuel — pellets and palm-kernel shells — at 10.3 million. In other words Japan now imports mainly fibre and fuel, and finished building products, rather than logs to be sawn at home.",
            ja:"二〇二四年に輸入された4,707万立方メートルの内訳も同じことを語る。一九六〇〜一九七〇年代の貿易の柱だった丸太は252万立方メートル、約二十分の一にすぎない。製材品や集成材などの加工品が809万、合板などが355万、木材パルプが381万だった。最大の品目はチップの1,876万で、ペレットとパーム椰子殻などの燃料材の1,031万が続く。つまり日本がいま輸入しているのは、国内で挽く丸太ではなく、おもに繊維と燃料、そして完成した建築資材である。",
            zh:"2024 年進口的 4,707 萬立方公尺，其組成也說明了同樣的事。1960 至 1970 年代貿易主幹的原木僅 252 萬立方公尺，約二十分之一。製材品、集成材等加工品 809 萬，合板等 355 萬，木漿 381 萬。最大單項是木片，1,876 萬，其次是顆粒燃料與棕櫚仁殼等燃料材，1,031 萬。換言之，日本如今進口的主要是纖維與燃料，以及成品建材，而非運回國內鋸製的原木。" } }
      ] },
    { t:"section",
      id:"opening",
      title:{ en:"Opening the doors", ja:"門戸を開く", zh:"打開大門" },
      jp:"輸入自由化と関税",
      body:[
        { t:"p",
          text:{
            en:"In 1961, with timber prices climbing fast in the high-growth economy, the government adopted emergency measures to stabilise them: more felling in the national forests, and more imports. Restrictions on timber imports were removed in stages and were essentially gone by 1964. Three streams of foreign wood then shaped the industry for a generation. <em>Bei-zai</em>, North American logs of Douglas fir and hemlock, arrived at ports on the Pacific coast, Nagoya among them, and were sawn into beams and posts. <em>Nan'yō-zai</em>, tropical logs from the Philippines, Borneo and Indonesia, fed the plywood mills. <em>Hokuyō-zai</em>, larch and pine from the Soviet Far East, went to mills on the Sea of Japan coast. Mills grew up beside the docks, far from Japan's own forests.",
            ja:"一九六一年、高度成長のなかで木材価格が急に上がると、政府は価格を安定させるための緊急の対策をとった。国有林の伐採を増やし、輸入を増やすことである。木材の輸入の制限は段階的に外され、一九六四年にはほぼなくなった。それから一世代のあいだ、三つの外材の流れが産業のかたちを決めた。北米のベイマツやベイツガの丸太、すなわち<em>米材</em>は、名古屋をはじめ太平洋側の港に着き、梁や柱に挽かれた。フィリピン、ボルネオ、インドネシアの熱帯の丸太である<em>南洋材</em>は合板工場を支えた。ソ連極東のカラマツやマツの<em>北洋材</em>は日本海側の工場へ向かった。製材所は国内の森から遠い港のそばに育った。",
            zh:"1961 年，高度成長期木材價格急漲，政府採取穩定價格的緊急對策：增加國有林伐採，並擴大進口。木材進口限制分階段解除，到 1964 年已大致取消。此後一個世代，三股外材洪流形塑了整個產業。<em>米材</em>，即北美的花旗松與鐵杉原木，運抵名古屋等太平洋沿岸港口，鋸成樑與柱；<em>南洋材</em>，即來自菲律賓、婆羅洲與印尼的熱帶原木，供應合板廠；<em>北洋材</em>，即蘇聯遠東的落葉松與松木，運往日本海沿岸的工廠。製材廠就這樣在遠離國內森林的碼頭旁成長。" } },
        { t:"p",
          text:{
            en:"Logs have long entered Japan duty-free, which is one reason the trade ran on logs for so long. Processed products carry modest tariffs: in the mid-2010s, plywood paid 6 to 10% (8.5% for fourteen tropical species) and sawn spruce-pine-fir lumber 4.8%. When the Trans-Pacific Partnership was negotiated, Japan secured the longest phase-outs for these sensitive items — sixteen years, with safeguards, for plywood from Malaysia, Vietnam, Canada, New Zealand and Chile and for spruce-pine-fir lumber from Canada, and eleven years for other partners — while New Zealand obtained immediate removal of the lumber tariff. The government judged the effect would be limited, since the tariffs were already low; in 2013 about 41% of Japan's 4.3 million cubic metres of plywood imports and 32% of its 6.0 million cubic metres of sawn imports came from partner countries.",
            ja:"丸太は長く無税で日本に入ってきた。貿易が長いあいだ丸太中心だった理由の一つである。加工品には控えめな関税がかかる。二〇一〇年代半ばで、合板は6〜10パーセント（熱帯材十四種は8.5パーセント）、SPF（スプルース・パイン・ファー）の製材は4.8パーセントだった。環太平洋パートナーシップ（TPP）の交渉で日本は、こうした重要品目について最も長い撤廃期間を確保した。マレーシア、ベトナム、カナダ、ニュージーランド、チリからの合板と、カナダからのSPF製材は、セーフガード付きで十六年、ほかの相手国は十一年である。一方ニュージーランドは製材の関税の即時撤廃を得た。関税がもともと低いため、政府は影響を限定的と見込んだ。二〇一三年、日本の合板の輸入431万立方メートルの約41パーセント、製材の輸入596万立方メートルの約32パーセントが参加国からだった。",
            zh:"原木長期以來免關稅進入日本，這也是貿易長期以原木為主的原因之一。加工品的關稅不高：2010 年代中期，合板為 6% 至 10%（14 種熱帶樹種為 8.5%），雲杉、松、冷杉（SPF）製材為 4.8%。在跨太平洋夥伴協定（TPP）談判中，日本為這些敏感品項爭取到最長的撤除期：來自馬來西亞、越南、加拿大、紐西蘭與智利的合板，以及來自加拿大的 SPF 製材，為附防衛措施的 16 年，其他夥伴國 11 年；紐西蘭則取得製材關稅立即撤除。政府判斷由於關稅原本就低，影響有限；2013 年，日本 431 萬立方公尺的合板進口約 41%、596 萬立方公尺的製材進口約 32% 來自參與國。" } }
      ] },
    { t:"section",
      id:"shock-prices",
      title:{ en:"The wood shock in numbers", ja:"数字で見るウッドショック", zh:"數字中的木材危機" },
      jp:"価格の推移",
      body:[
        { t:"p",
          text:{
            en:"The wood shock of 2021 can be read in the price statistics. By December 2021 imported sawn timber cost ¥80,149 per cubic metre, 106% more than a year earlier; imported glulam ¥107,247, up 114%; imported plywood ¥77,556, up 51%. Builders turned to domestic wood and domestic prices followed. The average price of a kiln-dried sugi square post rose from ¥66,700 per cubic metre in 2020 to ¥124,800 in 2022, and hinoki from ¥85,500 to ¥149,900. Log prices rose far less: sugi from ¥12,700 to ¥17,600, hinoki from ¥17,200 to ¥25,900 at the peak in 2021. Most of the windfall went to sawmills and merchants with dried stock to sell, not to the forest owners, and by 2025 sawn prices had fallen back towards — though not to — their earlier level.",
            ja:"二〇二一年のウッドショックは価格の統計に読み取れる。二〇二一年十二月には、輸入製材が1立方メートルあたり80,149円で前年より106パーセント高く、輸入集成材は107,247円で114パーセント高、輸入合板は77,556円で51パーセント高だった。工務店は国産材に向かい、国産材の価格もあとを追った。乾燥したスギ正角の平均価格は、二〇二〇年の1立方メートルあたり66,700円から二〇二二年には124,800円に、ヒノキは85,500円から149,900円に上がった。丸太の値上がりははるかに小さく、スギは12,700円から17,600円、ヒノキは17,200円から二〇二一年のピークの25,900円だった。利益の大半は、乾燥材の在庫をもつ製材所や流通業者に渡り、森林の所有者には届かなかった。二〇二五年までに製材の価格は以前の水準に向かって下がったが、そこまでは戻っていない。",
            zh:"2021 年的木材危機可以從價格統計中讀出。到 2021 年 12 月，進口製材每立方公尺 80,149 日圓，比一年前高 106%；進口集成材 107,247 日圓，漲 114%；進口合板 77,556 日圓，漲 51%。建商轉向國產材，國產材價格隨之上揚。乾燥柳杉正角材的平均價格，從 2020 年每立方公尺 66,700 日圓升到 2022 年的 124,800 日圓，扁柏從 85,500 日圓升到 149,900 日圓。原木漲幅小得多：柳杉從 12,700 日圓升到 17,600 日圓，扁柏從 17,200 日圓升到 2021 年高峰的 25,900 日圓。大部分利益落入握有乾燥材庫存的製材廠與流通業者手中，而非森林所有者；到 2025 年，製材價格已朝先前水準回落，但尚未回到原點。" } },
        { t:"figure",
          caption:{
            en:"Average national prices of kiln-dried square posts and of logs, sugi and hinoki, 2020–2025, thousand yen per cubic metre. Sources: Ministry of Agriculture, Forestry and Fisheries timber price statistics (via Shinrin-ringyō Gakushūkan) and the Forest and Forestry White Paper (FY2025).",
            ja:"乾燥正角と丸太の全国平均価格、スギとヒノキ、二〇二〇〜二〇二五年、1立方メートルあたり千円。出典：農林水産省「木材価格統計」（森林・林業学習館による）、二〇二五年度の森林・林業白書。",
            zh:"乾燥正角材與原木之全國平均價格，柳杉與扁柏，2020–2025 年，每立方公尺千日圓。資料來源：農林水產省木材價格統計（據森林・林業學習館）與 2025 年度《森林・林業白書》。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"Prices through the wood shock", ja:"ウッドショック前後の価格", zh:"木材危機前後的價格" }, unit:{ en:"¥1,000 per m³", ja:"千円／m³", zh:"千日圓／m³" },
            x0:2020, x1:2025.7, y0:0, y1:160, tick:40, xt:[2020,2021,2022,2023,2024,2025], endLabels:true, dec:1, legendW:170,
            series:[
              { n:{ en:"Hinoki squares, dried", ja:"ヒノキ正角（乾燥）", zh:"扁柏正角（乾燥）" }, pts:[[2020,85.5],[2021,132.5],[2022,149.9],[2023,110.7],[2024,103.4],[2025,95.5]] },
              { n:{ en:"Sugi squares, dried", ja:"スギ正角（乾燥）", zh:"柳杉正角（乾燥）" }, pts:[[2020,66.7],[2021,105.7],[2022,124.8],[2023,94.6],[2024,84.8],[2025,75.9]] },
              { n:{ en:"Hinoki logs", ja:"ヒノキ丸太", zh:"扁柏原木" }, pts:[[2020,17.2],[2021,25.9],[2022,25.1],[2023,22.0],[2024,22.3],[2025,25.3]], dash:"5 4" },
              { n:{ en:"Sugi logs", ja:"スギ丸太", zh:"柳杉原木" }, pts:[[2020,12.7],[2021,16.1],[2022,17.6],[2023,15.8],[2024,15.9],[2025,15.4]], dash:"5 4" }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, timber supply and demand table 2024 (November 2025); Forestry Agency, Forestry Policy Council material on the TPP (December 2015); Forest and Forestry White Papers FY2021 (special feature on the wood shock) and FY2025 (prices); Ministry of Agriculture, Forestry and Fisheries timber price statistics.",
            ja:"出典：林野庁「令和六年（二〇二四年）木材需給表」（二〇二五年十一月）、林政審議会資料「TPPについて」（二〇一五年十二月）、森林・林業白書 二〇二一年度（特集 ウッドショック）・二〇二五年度（価格）、農林水産省「木材価格統計」。",
            zh:"資料來源：林野廳 2024 年木材供需表（2025 年 11 月）、林政審議會 TPP 相關資料（2015 年 12 月）、《森林・林業白書》2021 年度（木材危機特輯）與 2025 年度（價格）、農林水產省木材價格統計。" } }
      ] },
    { t:"section",
      id:"gifu-trade",
      title:{ en:"Gifu's place in the trade", ja:"貿易のなかの岐阜", zh:"岐阜在貿易中的位置" },
      jp:"県内の製材と外材",
      body:[
        { t:"p",
          text:{
            en:"Gifu has no port, and its sawmills grew up on its own logs rather than on the docks of Ise Bay. But its builders bought from the same national market as everyone else, and the gap showed in the strongest members of a house. A prefectural paper of February 2012 counted 326 sawmills in Gifu — 8 large, 62 medium and 256 small — and noted that while about 80% of the sawn domestic timber went into building, more than 90% of the horizontal members of house frames, the beams and girders that need the greatest strength and length, were imported wood such as Douglas fir. Much of the prefecture's policy since then has aimed at that gap: long-length sawmills able to cut 12- and 13-metre pieces, high-temperature kilns, machine-graded structural timber and glulam beams of Tōnō hinoki (see <a href=\"sawmill.html\">Sawmilling</a> and <a href=\"engineered.html\">Engineered Wood</a>).",
            ja:"岐阜には港がなく、県内の製材所は伊勢湾の岸壁ではなく、地元の丸太の上に育った。だが県内の工務店も全国と同じ市場から材を買い、その差は家のいちばん強い部材にあらわれた。二〇一二年二月の県の資料は、県内の製材工場を326（大規模8、中規模62、小規模256）と数え、挽かれた県内の国産材の約八割が建築に使われる一方で、住宅の骨組みの横架材、すなわち最も強さと長さを求められる梁や桁の九割以上が、ベイマツなどの外材であると指摘した。その後の県の施策の多くは、この隙間を狙ってきた。12メートルや13メートルの材を挽ける長尺材の製材所、高温の乾燥機、機械等級区分の構造材、東濃ヒノキの集成材の梁である（<a href=\"sawmill.html\">製材</a>と<a href=\"engineered.html\">エンジニアードウッド</a>を参照）。",
            zh:"岐阜沒有港口，縣內製材廠是靠本地原木、而非伊勢灣碼頭成長起來的。但縣內建商與全國一樣從同一個市場採購，差距就顯現在住宅最需要強度的構件上。2012 年 2 月的一份縣府資料統計，岐阜有 326 家製材廠（大型 8、中型 62、小型 256），並指出縣內鋸製的國產材約八成用於建築，但住宅骨架的橫架材——最需要強度與長度的樑與桁——九成以上是花旗松等外材。此後縣府的許多政策都瞄準這個缺口：能鋸 12 與 13 公尺長材的長尺材製材廠、高溫乾燥設備、機械分級結構材，以及東濃扁柏集成材樑（見<a href=\"sawmill.html\">製材</a>與<a href=\"engineered.html\">工程木材</a>）。" } },
        { t:"p",
          text:{
            en:"The trade also explains a Taiwanese parallel. Taiwan, which banned logging of its natural forests in 1991, supplies only a few per cent of its own wood and has set itself the goal of reaching 5% by 2028 — a level Japan passed long ago even at its 2002 low. For both, the question is the same: whether planted forests at home can compete with a world market that will always offer cheaper wood somewhere (see <a href=\"taiwan.html\">Wood in Taiwan</a>).",
            ja:"貿易は台湾との共通点も説明する。一九九一年に天然林の伐採を禁じた台湾は、自国の木材のごく数パーセントしかまかなえず、二〇二八年までに5パーセントに達するという目標を掲げている。日本は二〇〇二年の底でさえ、その水準をはるかに上回っていた。両者に共通する問いは、国内の人工林が、どこかで必ずより安い木を差し出す世界市場と競えるかどうかである（<a href=\"taiwan.html\">台湾と木</a>を参照）。",
            zh:"貿易也解釋了台灣的類似處境。台灣於 1991 年禁伐天然林，木材自給僅數個百分點，並訂下 2028 年達到 5% 的目標——即使在日本 2002 年的谷底，自給率也遠高於此。兩地面對的問題相同：國內人工林能否與永遠會在某處提供更便宜木材的世界市場競爭（見<a href=\"taiwan.html\">台灣與木</a>）。" } }
      ] },
    { t:"related",
      items:[
        { href:"markets.html", why:{ en:"Log prices at home.", ja:"国内の丸太の値段。", zh:"國內原木價格。" } },
        { href:"policy.html", why:{ en:"Laws on legality and wood use.", ja:"合法性と木材利用の法律。", zh:"合法性與木材利用法規。" } },
        { href:"taiwan.html", why:{ en:"Taiwan's timber and Japan.", ja:"台湾の木材と日本。", zh:"台灣木材與日本。" } },
        { href:"industry.html", why:{ en:"Gifu's wood industries in numbers.", ja:"数字で見る岐阜の木材産業。", zh:"數字看岐阜木材產業。" } }
      ] }
  ] };
