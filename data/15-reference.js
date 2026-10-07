/* =============================================================
   THE SPIRIT OF GIFU — Reference
   12 pages. Each page is one GIFU.pages["key"] = {…}
   module; the order here is the order of the navigation
   (GIFU.NAV in assets/js/core.js).
   ============================================================= */

/* Glossary categories. The first group is the wood vocabulary of Land of
   Wood; the second is the rest of the book. Entries name one by key. */
GIFU.GC = { forest:{ en:"Forest", ja:"森林", zh:"森林" },
  species:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
  science:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
  timber:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
  building:{ en:"Building", ja:"建築", zh:"建築" },
  joinery:{ en:"Joinery & tools", ja:"継手と道具", zh:"榫接與工具" },
  furniture:{ en:"Furniture", ja:"家具", zh:"家具" },
  craft:{ en:"Crafts", ja:"工芸", zh:"工藝" },
  finish:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
  sound:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
  policy:{ en:"Policy & trade", ja:"制度と取引", zh:"制度與交易" },
  culture:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
  measure:{ en:"Measures", ja:"単位", zh:"單位" },
  land:{ en:"Land & water", ja:"風土", zh:"風土" },
  history:{ en:"History", ja:"歴史", zh:"歷史" },
  gculture:{ en:"Culture", ja:"文化", zh:"文化" },
  metal:{ en:"Metal & blades", ja:"金と刃", zh:"金屬與刀刃" },
  papercraft:{ en:"Paper, clay & cloth", ja:"紙・土・布", zh:"紙・土・布" },
  sake:{ en:"Sake", ja:"酒", zh:"酒" } };

/* ---- ------------------------------------------- economy */
GIFU.pages["economy"] = {
  kicker: { en:"Reference · 01", ja:"資料 · 01", zh:"資料 · 01" },
  title:  { en: "Industry & Economy", ja: "産業と経済", zh: "產業與經濟" },
  jp: "ものづくりの県",
  lede: {
    en: "Gifu earns its living by making things. It lies inside the industrial belt around Nagoya, and its largest employers make machinery, parts and aircraft; but it is also the country's leading maker of a surprising list of smaller things — plates and cups, kitchen knives, wooden measures, thin agar, food replicas — each tied to one town and to a resource or a skill that town has had for centuries. This page gathers the numbers that the rest of the book quotes, with their years and sources.",
    ja: "岐阜はものをつくって暮らしを立てる県である。名古屋をとりまく工業地帯のなかにあり、大きな雇い手は機械や部品や航空機をつくる。だが同時に、意外な品々——皿や碗、包丁、木の枡、細寒天、食品サンプル——で全国一の作り手でもあり、そのそれぞれが一つの町と、その町が何百年も持ってきた資源や技に結びついている。この頁には、本書のほかの頁が引く数字を、年と出典とともに集めた。",
    zh: "岐阜靠製造東西維生。它位於環繞名古屋的工業帶之中，最大的雇主製造機械、零件與飛機；但它同時也是一長串出人意料的小東西的全國第一產地——盤子與杯子、菜刀、木製量器、細寒天、食物模型——每一樣都與某個城鎮、以及那個城鎮擁有了數百年的資源或技藝相連。本頁彙整本書其他各頁所引用的數字，並附年份與出處。"
  },
  body: [
    { t:"grid", cols:3, cells:[
      { k:{en:"Western-style ceramic tableware",ja:"洋飲食器",zh:"西式陶瓷餐具"}, v:"71.1 %",
        d:{en:"Gifu's share of Japan's shipments; 44.8% for Japanese-style tableware. First among the prefectures in both (Gifu Prefecture, 2025).",ja:"全国出荷に占める岐阜県の割合。和飲食器は44.8%。いずれも全国一（岐阜県、2025年）。",zh:"岐阜縣在全國出貨量中的占比；和式餐具為 44.8%。兩者皆居全國之首（岐阜縣，2025 年）。"} },
      { k:{en:"Household knives",ja:"家庭用刃物",zh:"家用刀具"}, v:"55 %",
        d:{en:"Seki's share of Japan's household knife shipments by value; the city shipped ¥45.6 billion of cutlery in 2020, more than any other municipality.",ja:"出荷額で見た家庭用刃物に占める関市の割合。2020年の刃物出荷額456億円は全国の市町村で首位。",zh:"以出貨額計，關市在日本家用刀具中的占比；2020 年該市刀具出貨額 456 億日圓，居全國市町村之首。"} },
      { k:{en:"Masu",ja:"枡",zh:"枡"}, v:"≈ 80 %",
        d:{en:"Ōgaki's share of Japan's wooden masu, some two million a year, all of Japanese hinoki.",ja:"日本の木枡に占める大垣の割合。年に約二百万個、すべて国産の檜。",zh:"大垣在日本木枡中的占比；每年約兩百萬個，全部以日本檜木製成。"} },
      { k:{en:"Thin agar",ja:"細寒天",zh:"細寒天"}, v:"≈ 80 %",
        d:{en:"Yamaoka in Ena, where the strands are frozen at night and dried by day in winter fields.",ja:"恵那市山岡町。冬の田で夜に凍らせ昼に乾かしてつくる。",zh:"惠那市山岡町：冬季田野中，夜間冷凍、白天曬乾。"} },
      { k:{en:"Food replicas",ja:"食品サンプル",zh:"食物模型"}, v:"≈ 60 %",
        d:{en:"The share of Japan's plastic food replicas said to come from makers in Gujō, where the trade was pioneered in the 1930s.",ja:"日本の食品サンプルのうち郡上の作り手がつくるとされる割合。郡上は1930年代にこの商売を開いた地である。",zh:"據稱日本塑膠食物模型出自郡上製造者的比例；此行業於 1930 年代在郡上開創。"} },
      { k:{en:"Hydroelectric potential",ja:"包蔵水力",zh:"可開發水力"}, v:"13,861 GWh",
        d:{en:"A year of exploitable hydroelectric energy, the largest of any prefecture (Agency for Natural Resources and Energy).",ja:"開発可能な水力エネルギー量（年間）で、都道府県で最大（資源エネルギー庁）。",zh:"每年可開發的水力發電量，居各都道府縣之首（資源能源廳）。"} }
    ] },

    { t:"section", id:"making",
      title:{ en:"A prefecture of makers", ja:"ものづくりの県", zh:"製造之縣" }, jp:"製造業",
      body:[
        { t:"p", text:{
          en:"Southern Gifu belongs to the manufacturing region that has Nagoya at its centre, and much of its employment is in machinery, metal and plastic parts for the car and aircraft industries; many people in the southern cities also commute to work in Aichi. Beside this modern industry stand the older ones this book describes, each grown from a local advantage: clay and firewood made Tōnō the potters' country; charcoal, water and a sword guild made Seki; beech and carpenters made Takayama's furniture; hinoki made Ōgaki's masu; mulberry and clear water made Mino's paper. In the twentieth century several of these became industries in their own right, and in the twenty-first they are being remade again, towards smaller volumes, higher prices and exports.",
          ja:"岐阜の南部は名古屋を中心とする製造業の地域に属し、雇用の多くは自動車や航空機のための機械、金属・樹脂の部品にある。南部の市からは愛知へ通勤する人も多い。この近代の工業のかたわらに、本書が述べる古い産業が立っている。どれも土地の利から育った——土と薪が東濃を焼き物の国にし、炭と水と刀鍛冶の座が関をつくり、ブナと大工が高山の家具を、檜が大垣の枡を、楮と清らかな水が美濃の紙をつくった。二十世紀にそのいくつかは一つの産業となり、二十一世紀にはふたたびつくり直されつつある——少量に、高い値に、輸出へと。",
          zh:"岐阜南部屬於以名古屋為中心的製造業地帶，就業多集中在汽車與飛機產業所需的機械、金屬與塑膠零件；南部各市也有許多人通勤到愛知工作。在這些現代工業旁邊，矗立著本書所述的古老產業，每一項都源自在地的優勢：黏土與薪柴使東濃成為陶瓷之鄉；木炭、水與刀匠行會造就了關；山毛櫸與木匠造就了高山的家具；檜木造就了大垣的枡；楮與清水造就了美濃的紙。二十世紀時，其中數項各自發展成產業；到了二十一世紀，它們又再次被重塑——走向小量、高價與出口。" } },
        { t:"table",
          caption:{en:"The craft industries of this book, with the figures the other pages quote. The years are those of the source.",ja:"本書の工芸産業と、ほかの頁が引く数字。年は出典のもの。",zh:"本書所述的工藝產業，以及其他頁面引用的數字。年份為出處所載。"},
          cols:[{en:"Industry",ja:"産業",zh:"產業"},{en:"Centre",ja:"中心地",zh:"中心地"},{en:"Figure",ja:"数字",zh:"數字"},{en:"Page",ja:"頁",zh:"頁面"}],
          rows:[
            [{en:"Ceramic tableware",ja:"陶磁器の食器",zh:"陶瓷餐具"},{en:"Tajimi, Toki, Mizunami",ja:"多治見・土岐・瑞浪",zh:"多治見、土岐、瑞浪"},{en:"71.1% / 44.8% of national shipments (2025)",ja:"全国出荷の71.1%・44.8%（2025年）",zh:"全國出貨的 71.1% / 44.8%（2025 年）"},{en:"<a href=\"minoyaki.html\">Mino Ware</a>",ja:"<a href=\"minoyaki.html\">美濃焼</a>",zh:"<a href=\"minoyaki.html\">美濃燒</a>"}],
            [{en:"Cutlery",ja:"刃物",zh:"刀具"},{en:"Seki",ja:"関",zh:"關"},{en:"¥45.6 bn shipped; 55% of household knives (2020)",ja:"出荷額456億円、家庭用刃物の55%（2020年）",zh:"出貨 456 億日圓；家用刀具的 55%（2020 年）"},{en:"<a href=\"cutlery.html\">The Cutlery Industry</a>",ja:"<a href=\"cutlery.html\">刃物産業</a>",zh:"<a href=\"cutlery.html\">刀具產業</a>"}],
            [{en:"Furniture",ja:"家具",zh:"家具"},{en:"Takayama",ja:"高山",zh:"高山"},{en:"Regional collective trademarks since 2008",ja:"2008年から地域団体商標",zh:"2008 年起取得地域團體商標"},{en:"<a href=\"furniture.html\">Hida Furniture</a>",ja:"<a href=\"furniture.html\">飛騨の家具</a>",zh:"<a href=\"furniture.html\">飛驒家具</a>"}],
            [{en:"Masu",ja:"枡",zh:"枡"},{en:"Ōgaki",ja:"大垣",zh:"大垣"},{en:"≈ 80% of national supply",ja:"全国の約8割",zh:"全國約八成"},{en:"<a href=\"masu.html\">The Masu of Ōgaki</a>",ja:"<a href=\"masu.html\">大垣の枡</a>",zh:"<a href=\"masu.html\">大垣的枡</a>"}],
            [{en:"Washi",ja:"和紙",zh:"和紙"},{en:"Mino",ja:"美濃",zh:"美濃"},{en:"Traditional craft since 1985; UNESCO 2014",ja:"1985年伝統的工芸品、2014年ユネスコ",zh:"1985 年傳統工藝品；2014 年聯合國教科文組織"},{en:"<a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>",ja:"<a href=\"paper.html\">和紙・提灯・和傘</a>",zh:"<a href=\"paper.html\">和紙、燈籠與和傘</a>"}],
            [{en:"Lanterns and umbrellas",ja:"提灯・和傘",zh:"燈籠與和傘"},{en:"Gifu city",ja:"岐阜市",zh:"岐阜市"},{en:"The largest national producer of Japanese umbrellas",ja:"和傘の全国最大の産地",zh:"日本最大的和傘產地"},{en:"<a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>",ja:"<a href=\"paper.html\">和紙・提灯・和傘</a>",zh:"<a href=\"paper.html\">和紙、燈籠與和傘</a>"}],
            [{en:"Apparel and wool",ja:"アパレル・毛織物",zh:"成衣與毛織"},{en:"Gifu city, Hashima",ja:"岐阜市・羽島",zh:"岐阜市、羽島"},{en:"Post-war wholesale district; Bishū wool",ja:"戦後の問屋街、尾州の毛織物",zh:"戰後批發街；尾州毛織"},{en:"<a href=\"textiles.html\">Dye &amp; Cloth</a>",ja:"<a href=\"textiles.html\">染めと織り</a>",zh:"<a href=\"textiles.html\">染與織</a>"}],
            [{en:"Guitars",ja:"ギター",zh:"吉他"},{en:"Kani, Sakashita",ja:"可児・坂下",zh:"可兒、坂下"},{en:"Two makers of world reputation",ja:"世界に名の通った二社",zh:"兩家享譽國際的製造商"},{en:"<a href=\"sound.html\">Wood &amp; Sound</a>",ja:"<a href=\"sound.html\">木と音</a>",zh:"<a href=\"sound.html\">木與聲音</a>"}]
          ] }
      ]
    },

    { t:"section", id:"land",
      title:{ en:"Farm, forest and river", ja:"田と森と川", zh:"田、林與河" }, jp:"一次産業",
      body:[
        { t:"p", text:{
          en:"About 81 per cent of the prefecture is forest, and its planted forests held about 100 million m³ of timber in 2019, growing every year; the difficulty is not the resource but the labour and the price. On the plain, the Fuyū persimmon of Mizuho and the dried Dōjō Hachiya persimmon of Minokamo, a registered geographical indication, are the best-known fruit; in the mountains, Hida beef, which must be raised in the prefecture for at least fourteen months. The ayu of the Nagara, with the river and the people who fish it, were recognised in 2015 as a Globally Important Agricultural Heritage System. See <a href=\"logging.html\">The Logging Business</a> and <a href=\"food.html\">Food of Mino &amp; Hida</a>.",
          ja:"県土の約81%は森林で、人工林には2019年に約一億立方メートルの木が蓄えられ、毎年増えている。難しいのは資源ではなく、担い手と値段である。平野では瑞穂の富有柿と、地理的表示に登録された美濃加茂の干し柿「堂上蜂屋柿」がよく知られ、山では県内で十四か月以上育てることが条件の飛騨牛がある。長良川の鮎は、川とそこで漁をする人々とともに、2015年に世界農業遺産に認定された。<a href=\"logging.html\">素材生産という仕事</a>と<a href=\"food.html\">美濃と飛騨の食</a>を参照。",
          zh:"全縣約 81% 是森林，人工林在 2019 年蓄積約一億立方公尺的木材，且逐年增加；難處不在資源，而在人力與價格。平原上，瑞穗的富有柿與美濃加茂已登錄地理標示的「堂上蜂屋柿」柿餅最為知名；山區則有飛驒牛——必須在縣內飼養十四個月以上。長良川的香魚，連同這條河以及在河上捕魚的人們，於 2015 年獲認定為世界農業遺產。見<a href=\"logging.html\">伐木這門生意</a>與<a href=\"food.html\">美濃與飛驒的飲食</a>。" } }
      ]
    },

    { t:"section", id:"visitors",
      title:{ en:"Visitors", ja:"観光", zh:"觀光" }, jp:"観光",
      body:[
        { t:"p", text:{
          en:"Tourism is concentrated in a few places — Takayama, Shirakawa-gō, Gero, Gujō Hachiman, the cormorant fishing at Gifu and the Nakasendō at Magome — and in a few seasons. The completion of the Tōkai-Hokuriku Expressway in 2008 and the growth of travel from abroad have brought far more day visitors to the Hida mountains, and Shirakawa-gō in particular now manages traffic and crowding as carefully as it manages fire. The rest of the prefecture is quiet, which for a visitor is its advantage. See <a href=\"journeys.html\">Five Journeys</a>.",
          ja:"観光はいくつかの場所——高山、白川郷、下呂、郡上八幡、岐阜の鵜飼、馬籠の中山道——と、いくつかの季節に集中している。2008年の東海北陸自動車道の全通と海外からの旅行の伸びは、飛騨の山にはるかに多くの日帰り客をもたらし、とりわけ白川郷はいま、火と同じほど念入りに車と混雑を管理している。県のほかの土地は静かであり、それは訪れる者にとっての利点である。<a href=\"journeys.html\">五つの旅</a>を参照。",
          zh:"觀光集中在少數地點——高山、白川鄉、下呂、郡上八幡、岐阜的鵜飼、馬籠的中山道——以及少數季節。東海北陸自動車道於 2008 年全線通車，加上海外旅客增加，為飛驒山區帶來遠多於以往的一日遊客；尤其白川鄉，如今管理車流與人潮之謹慎，不亞於防火。全縣其他地方則很安靜——對旅人而言，這正是它的好處。見<a href=\"journeys.html\">五段旅程</a>。" } }
      ]
    },

    { t:"section", id:"people",
      title:{ en:"People and work", ja:"人と仕事", zh:"人與工作" }, jp:"人口",
      body:[
        { t:"p", text:{
          en:"Gifu's population peaked at about 2.11 million at the census of 2000 and was about 1.95 million in 2025, with more than nine in ten living in Mino. Every craft industry in this book reports the same pattern — an ageing workforce, small firms without successors and fewer apprentices — and every one is answering it in part by selling to visitors and abroad what it once sold to the home market. See <a href=\"modern.html\">Meiji to Now</a> and <a href=\"future.html\">The Next Twenty Years</a>.",
          ja:"岐阜の人口は2000年の国勢調査で約211万人の頂点に達し、2025年には約195万人で、その九割以上が美濃に住む。本書のどの工芸産業も同じ型を報告している——働き手の高齢化、後継ぎのない小さな会社、少ない弟子。そしてどれもが、かつて国内に売っていたものを訪れる人と海外に売ることで、その一部に応えようとしている。<a href=\"modern.html\">近代から現代へ</a>と<a href=\"future.html\">これからの二十年</a>を参照。",
          zh:"岐阜人口在 2000 年國勢調查時達到約 211 萬的高峰，2025 年約為 195 萬，九成以上住在美濃。本書所述的每一項工藝產業都呈現同樣的模式——從業者高齡化、小企業後繼無人、學徒減少——而每一項也都部分以此回應：把過去賣給國內市場的東西，轉而賣給旅人與海外。見<a href=\"modern.html\">從明治到現在</a>與<a href=\"future.html\">未來二十年</a>。" } },
        { t:"note", label:{ en:"About the numbers", ja:"数字について", zh:"關於數字" }, text:{
          en:"The shares and values on this page come from the sources named with them — Gifu Prefecture's statistics office, Seki city's industrial statistics, the Agency for Natural Resources and Energy and the Forestry Agency — and are for the years stated. Shares for small industries such as masu, agar and food replicas are the industries' own estimates.",
          ja:"この頁の割合と金額は、それぞれに記した出典——岐阜県統計課、関市の工業統計、資源エネルギー庁、林野庁——により、記した年のものである。枡、寒天、食品サンプルのような小さな産業の割合は、業界自身の推計である。",
          zh:"本頁的占比與金額取自各自註明的出處——岐阜縣統計課、關市工業統計、資源能源廳與林野廳——並以所記年份為準。枡、寒天、食物模型等小型產業的占比，為業界自身的估計。" } }
      ]
    },

    { t:"related", items:[
      { href:"makers.html", why:{ en:"The companies behind the figures.", ja:"数字の背後の会社。", zh:"數字背後的公司。" } },
      { href:"future.html", why:{ en:"Where the industries are going.", ja:"産業のゆくえ。", zh:"產業的走向。" } },
      { href:"tables.html", why:{ en:"The prefecture in numbers.", ja:"数字で見る県。", zh:"數字中的岐阜。" } },
      { href:"register.html", why:{ en:"The designated crafts.", ja:"指定工芸品。", zh:"指定工藝品。" } }
    ] }
  ]
};

/* ---- ------------------------------------------ industry */
GIFU.pages["industry"] = { kicker:{ en:"Reference · 02", ja:"資料 · 02", zh:"資料 · 02" },
  title:{ en:"Wood in Numbers", ja:"木の数字", zh:"木材的數字" },
  jp:"数字",
  lede:{
    en:"This is the numbers page of the book: Gifu's forests, harvest, workers, mills, furniture and crafts measured in hectares, cubic metres, people and yen, with the year of every figure and the survey it comes from. The picture is of a prefecture that is among the richest in Japan in forest, middling in forestry output, and unusually strong in what it makes from wood.",
    ja:"この頁は本書の数字の頁である。岐阜の森、伐採、働く人、製材所、家具、工芸を、ヘクタール、立方メートル、人、円で示し、どの数字にもその年と出どころの調査を添えた。浮かび上がるのは、森の豊かさでは全国でも上位にありながら、林業の産出では中ほどにとどまり、木から作るものでは際立って強い県の姿である。",
    zh:"這是本書的數字頁：以公頃、立方公尺、人數與日圓，呈現岐阜的森林、伐採、從業者、製材所、家具與工藝，並為每個數字註明年份與出處調查。浮現出的是這樣一個縣：森林資源名列日本前茅，林業產出居中，而以木材製作的產品卻格外強勢。" },
  body:[
    { t:"section",
      id:"at-a-glance",
      title:{ en:"Gifu at a glance", ja:"ひと目で見る岐阜", zh:"岐阜一覽" },
      jp:"主要指標",
      body:[
        { t:"p",
          text:{
            en:"Gifu is Japan's seventh-largest prefecture by area, and four-fifths of it is forest. Measured by forest area it ranks fifth among the forty-seven prefectures; by the share of its land under forest, second only to Kōchi. Its planted forests are dominated by hinoki to a degree found almost nowhere else: the prefecture has the second-largest area of planted hinoki in Japan but only the fourteenth-largest of sugi. The harvest from these forests has nearly doubled since the late 2000s, and the prefecture keeps more sawmills than any other. Downstream, Gifu is the sixth-largest furniture-producing prefecture by value and second in wooden chairs, tables and desks.",
            ja:"岐阜は面積で全国七番目の県で、その五分の四が森である。森林面積は四十七都道府県のなかで五位、県土に占める森林の割合は高知に次いで二位である。人工林は、ほかにほとんど例がないほどヒノキが多い。ヒノキの人工林の面積は全国二位だが、スギは十四位にとどまる。これらの森からの伐採は二〇〇〇年代の終わりからほぼ倍になり、製材工場の数はどの県よりも多い。川下では、家具の出荷額で全国六位、木製の椅子・机・テーブルでは二位である。",
            zh:"岐阜面積居日本第七，五分之四是森林。以森林面積計，在 47 個都道府縣中排名第五；以森林占土地比例計，僅次於高知排名第二。其人工林以扁柏為主的程度幾乎無出其右：扁柏人工林面積居全國第二，柳杉卻只排第十四。自 2000 年代末以來，這些森林的伐採量幾乎翻倍，而製材所數量則為各縣之冠。在下游，岐阜的家具出貨額居全國第六，木製椅、桌與書桌更居第二。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Forest area", ja:"森林面積", zh:"森林面積" },
              v:{ en:"862,000 ha", ja:"86.2万ha", zh:"86.2 萬公頃" },
              d:{ en:"FY2020; 5th in Japan.", ja:"二〇二〇年度。全国五位。", zh:"2020 年度；全國第五。" } },
            { k:{ en:"Forest share", ja:"森林率", zh:"森林率" },
              v:"81%",
              d:{ en:"2nd after Kōchi; Japan ≈ 67%.", ja:"高知に次ぎ二位。全国は約六十七％。", zh:"僅次於高知；全國約 67%。" } },
            { k:{ en:"Planted forest", ja:"人工林", zh:"人工林" },
              v:{ en:"385,000 ha", ja:"38.5万ha", zh:"38.5 萬公頃" },
              d:{ en:"About 45% of the forest; 6th.", ja:"森林の約四十五％。全国六位。", zh:"約占森林 45%；全國第六。" } },
            { k:{ en:"Planted hinoki", ja:"ヒノキ人工林", zh:"扁柏人工林" },
              v:{ en:"209,000 ha", ja:"20.9万ha", zh:"20.9 萬公頃" },
              d:{ en:"Private forest, FY2020; 2nd in Japan.", ja:"民有林、二〇二〇年度。全国二位。", zh:"民有林，2020 年度；全國第二。" } },
            { k:{ en:"Growing stock", ja:"森林蓄積", zh:"森林蓄積量" },
              v:{ en:"179 million m³", ja:"1.79億m³", zh:"1.79 億 m³" },
              d:{ en:"All forests, FY2020; 8th.", ja:"全森林、二〇二〇年度。全国八位。", zh:"全部森林，2020 年度；全國第八。" } },
            { k:{ en:"Log production", ja:"素材生産量", zh:"原木產量" },
              v:{ en:"576,000 m³", ja:"57.6万m³", zh:"57.6 萬 m³" },
              d:{ en:"FY2021; 1.8 × FY2009.", ja:"二〇二一年度。二〇〇九年度の一・八倍。", zh:"2021 年度；為 2009 年度的 1.8 倍。" } },
            { k:{ en:"Sawmills", ja:"製材工場", zh:"製材所" },
              v:"169",
              d:{ en:"FY2021; the most of any prefecture.", ja:"二〇二一年度。全国一位。", zh:"2021 年度；全國最多。" } },
            { k:{ en:"Furniture shipments", ja:"家具の出荷額", zh:"家具出貨額" },
              v:{ en:"¥99.9 bn", ja:"998.8億円", zh:"998.8 億日圓" },
              d:{ en:"2024; 6th in Japan, 4.9%.", ja:"二〇二四年。全国六位、四・九％。", zh:"2024 年；全國第六，占 4.9%。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, forest and forestry plan background data (FY2020) and “State of forestry and the timber industry” (FY2021); Gifu Industrial Economy Promotion Center, local industry survey on woodworking (2024 Economic Structure Survey data).",
            ja:"出典：岐阜県 森林・林業基本計画の資料（二〇二〇年度）、「岐阜県の林業・木材産業の現状」（二〇二一年度）、岐阜県産業経済振興センター 地場産業調査「木工」（二〇二四年経済構造実態調査）。",
            zh:"資料來源：岐阜縣森林林業基本計畫資料（2020 年度）、〈岐阜縣林業與木材產業現況〉（2021 年度）；岐阜縣產業經濟振興中心地場產業調查「木工」（2024 年經濟構造實態調查）。" } }
      ] },
    { t:"section",
      id:"reading-numbers",
      title:{ en:"Where the numbers come from", ja:"数字の出どころ", zh:"數字從何而來" },
      jp:"統計の読み方",
      body:[
        { t:"p",
          text:{
            en:"Forestry statistics in Japan come from several surveys that measure different things, and the same quantity can appear with different values depending on the source. Most prefectural figures run by fiscal year, from April to March; most national industrial statistics by calendar year. Log production is the clearest example: the prefecture counts all logs cut in Gifu, including those sold as fuel, while the national timber survey counts logs arriving at sawmills, plywood mills and chip mills, so the two need not agree. Where this page gives a figure, it names the year and the survey; figures on other pages of this book use the same sources and years.",
            ja:"日本の林業の統計はいくつもの調査から成り、それぞれが測るものは違う。同じ量でも出どころによって値が変わることがある。県の数字の多くは四月から三月までの年度で、国の工業の統計の多くは暦年である。素材生産量がいちばんよい例である。県は燃料として売られるものも含めて岐阜で伐られた丸太すべてを数えるが、国の木材統計は製材・合板・チップの工場に入った丸太を数えるため、両者は一致するとは限らない。この頁では数字ごとに年と調査を示した。本書のほかの頁の数字も同じ出典と年を用いている。",
            zh:"日本的林業統計來自多項調查，各自測量的對象不同，同一數量可能因出處而數值不一。縣的數字多以 4 月至翌年 3 月的年度計，國家的工業統計則多以曆年計。原木產量是最明顯的例子：縣統計計入在岐阜伐採的所有原木，包括當作燃料出售者；國家的木材統計則計算進入製材廠、合板廠與木片廠的原木，因此兩者未必一致。本頁每個數字都註明年份與調查；本書其他頁面的數字也採用相同出處與年份。" } },
        { t:"defs",
          items:[
            { term:{ en:"Gifu forest and forestry statistics", ja:"岐阜県森林・林業統計書", zh:"岐阜縣森林林業統計書" },
              jp:"県統計",
              def:{
                en:"The prefecture's annual compilation: forest area and stock, planting, thinning, log production, workers, prices. The basis of most Gifu figures in this book, usually by fiscal year.",
                ja:"県が毎年まとめる統計。森林面積と蓄積、植林、間伐、素材生産量、就業者、価格。本書の岐阜の数字の多くはこれにより、ふつう年度で示される。",
                zh:"縣每年彙編的統計：森林面積與蓄積量、造林、疏伐、原木產量、從業者、價格。本書多數岐阜數字依此，通常以年度計。" } },
            { term:{ en:"Census of Agriculture and Forestry", ja:"農林業センサス", zh:"農林業普查" },
              jp:"林業センサス",
              def:{
                en:"A national census every five years (2020, 2025) of forestry businesses and forest owners — how many, how large, what they do.",
                ja:"五年ごと（二〇二〇年、二〇二五年）の国の全数調査で、林業経営体と森林所有者の数、規模、活動を調べる。",
                zh:"國家每五年一次（2020 年、2025 年）的普查，調查林業經營體與林主的數量、規模與活動。" } },
            { term:{ en:"Timber supply and demand report", ja:"木材需給報告書", zh:"木材供需報告書" },
              jp:"木材統計",
              def:{
                en:"The Ministry of Agriculture, Forestry and Fisheries' annual survey of sawmills, plywood and chip mills: logs received by species and origin, products made.",
                ja:"農林水産省が毎年行う、製材・合板・チップ工場の調査。樹種別・産地別の入荷丸太と、作られた製品。",
                zh:"農林水產省每年對製材、合板與木片工廠的調查：依樹種與產地的原木進貨量及產品。" } },
            { term:{ en:"Economic Structure Survey", ja:"経済構造実態調査", zh:"經濟構造實態調查" },
              jp:"工業統計",
              def:{
                en:"Since 2022 the successor, for manufacturing, to the Census of Manufactures (to 2020) and the Economic Census for Business Activity (2021): shipments by industry and product.",
                ja:"製造業については、工業統計調査（二〇二〇年まで）と経済センサス‐活動調査（二〇二一年）を二〇二二年から引き継いだ調査。業種別・品目別の出荷額。",
                zh:"就製造業而言，自 2022 年起接替工業統計調查（至 2020 年）與經濟普查活動調查（2021 年）的調查：依產業與品項的出貨額。" } },
            { term:{ en:"Forestry output", ja:"林業産出額", zh:"林業產出額" },
              jp:"林業産出額",
              def:{
                en:"The ministry's estimate of the value of timber, cultivated mushrooms, charcoal and firewood and other forest products produced in each prefecture in a calendar year.",
                ja:"農林水産省が推計する、各都道府県で一年間に生産された木材、栽培きのこ類、薪炭、林野副産物の額。",
                zh:"農林水產省推估各都道府縣一年內生產之木材、栽培菇類、薪炭及其他林產物的產值。" } }
          ] }
      ] },
    { t:"section",
      id:"land-and-forest",
      title:{ en:"Land and forest", ja:"土地と森", zh:"土地與森林" },
      jp:"森林資源",
      body:[
        { t:"p",
          text:{
            en:"Of Gifu's 1,062,000 hectares, about 862,000 are forest. Roughly a fifth of that, about 177,000 hectares, is national forest, managed by the Forestry Agency, much of it on the high ranges of Hida and the Ura-Kiso hinoki country of Nakatsugawa. The remaining 684,000 or so hectares — the fourth-largest area of non-national forest in Japan — belong to the prefecture, municipalities, communities, companies and, above all, private families. By type, about 385,000 hectares are planted forest and about 428,000 natural forest, the rest being bamboo and unstocked land. In the private forest the planted hinoki alone covers some 209,000 hectares, the second-largest such area in Japan, against 122,000 hectares of planted sugi; natural broadleaved forest covers 291,000 hectares, most of it in Hida.",
            ja:"岐阜の県土百六万二千ヘクタールのうち、約八十六万二千ヘクタールが森林である。その約五分の一、約十七万七千ヘクタールは国有林で、林野庁が管理し、その多くは飛騨の高い山々と中津川の裏木曽のヒノキの地にある。残る六十八万四千ヘクタールは全国四位の民有林で、県、市町村、集落、会社、そして何より個人の家が持つ。種類別に見ると、約三十八万五千ヘクタールが人工林、約四十二万八千ヘクタールが天然林で、残りは竹林や無立木地である。民有林ではヒノキの人工林だけで約二十万九千ヘクタールあり、全国二位の広さである。スギの人工林は十二万二千ヘクタール、広葉樹の天然林は二十九万一千ヘクタールで、その多くが飛騨にある。",
            zh:"岐阜 106.2 萬公頃的土地中，約 86.2 萬公頃是森林。其中約五分之一、約 17.7 萬公頃為國有林，由林野廳管理，多位於飛驒的高山與中津川裏木曾的扁柏產地。其餘 68.4 萬公頃為民有林（全國第四），屬於縣、市町村、聚落、公司，以及最主要的私人家庭。依類型分，約 38.5 萬公頃是人工林，約 42.8 萬公頃是天然林，其餘為竹林與無立木地。民有林中，光是扁柏人工林就約 20.9 萬公頃，面積居全國第二；柳杉人工林為 12.2 萬公頃；闊葉樹天然林為 29.1 萬公頃，大多位於飛驒。" } },
        { t:"table",
          caption:{ en:"Gifu's forest resources and their national rank", ja:"岐阜の森林資源と全国順位", zh:"岐阜森林資源及全國排名" },
          cols:[
            { en:"Indicator", ja:"指標", zh:"指標" },
            { en:"Gifu", ja:"岐阜", zh:"岐阜" },
            { en:"Rank", ja:"順位", zh:"排名" },
            { en:"Year", ja:"年", zh:"年份" }
          ],
          numCols:[2],
          keyCol:true,
          rows:[
            [
              { en:"Land area", ja:"県土面積", zh:"土地面積" },
              { en:"1,062,000 ha", ja:"106.2万ha", zh:"106.2 萬公頃" },
              "7",
              { en:"early 2020s", ja:"二〇二〇年代初め", zh:"2020 年代初" }
            ],
            [
              { en:"Forest area", ja:"森林面積", zh:"森林面積" },
              { en:"862,000 ha", ja:"86.2万ha", zh:"86.2 萬公頃" },
              "5",
              "FY2020"
            ],
            [{ en:"Forest share of land", ja:"森林率", zh:"森林率" }, "81%", "2", "FY2020"],
            [
              { en:"Non-national (private and public) forest", ja:"民有林", zh:"民有林" },
              { en:"684,000 ha", ja:"68.4万ha", zh:"68.4 萬公頃" },
              "4",
              "FY2020"
            ],
            [
              { en:"Planted forest", ja:"人工林", zh:"人工林" },
              { en:"385,000 ha", ja:"38.5万ha", zh:"38.5 萬公頃" },
              "6",
              "FY2020"
            ],
            [
              { en:"Natural forest", ja:"天然林", zh:"天然林" },
              { en:"428,000 ha", ja:"42.8万ha", zh:"42.8 萬公頃" },
              "7",
              { en:"early 2020s", ja:"二〇二〇年代初め", zh:"2020 年代初" }
            ],
            [
              { en:"Planted hinoki (private forest)", ja:"ヒノキ人工林（民有林）", zh:"扁柏人工林（民有林）" },
              { en:"209,000 ha", ja:"20.9万ha", zh:"20.9 萬公頃" },
              "2",
              "FY2020"
            ],
            [
              { en:"Planted sugi (private forest)", ja:"スギ人工林（民有林）", zh:"柳杉人工林（民有林）" },
              { en:"122,000 ha", ja:"12.2万ha", zh:"12.2 萬公頃" },
              "14",
              "FY2020"
            ],
            [
              { en:"Growing stock, all forests", ja:"森林蓄積（全森林）", zh:"森林蓄積量（全部）" },
              { en:"179 million m³", ja:"1.79億m³", zh:"1.79 億 m³" },
              "8",
              "FY2020"
            ]
          ] },
        { t:"p",
          text:{
            en:"The stock of wood keeps growing. In the private forest it stood at about 156 million cubic metres in FY2020 — about 102 million in the plantations and 54 million in natural forest — and the planted stock had risen by about a quarter since FY2007. The annual increment has begun to fall as the plantations age, from a peak of 2.04 million cubic metres in FY2016 to 1.48 million in FY2021, but it still far exceeds the harvest. The forest itself is described on the <a href=\"forests.html\">forests</a> page; the age structure of the plantations on the <a href=\"silviculture.html\">silviculture</a> page.",
            ja:"木の蓄えは増えつづけている。民有林の蓄積は二〇二〇年度に約一億五千六百万立方メートル——人工林約一億二百万、天然林約五千四百万——で、人工林の蓄積は二〇〇七年度から約四分の一増えた。人工林が高齢になるにつれて年間の成長量は減りはじめ、二〇一六年度の最高二百四万立方メートルから二〇二一年度には百四十八万立方メートルとなったが、なお伐採量をはるかに上回る。森そのものは<a href=\"forests.html\">森</a>の頁に、人工林の齢級の形は<a href=\"silviculture.html\">育林</a>の頁にある。",
            zh:"木材蓄積仍持續增加。民有林蓄積量在 2020 年度約為 1.56 億立方公尺——人工林約 1.02 億、天然林約 5,400 萬——人工林蓄積自 2007 年度以來增加約四分之一。隨著人工林老化，年生長量開始下降，從 2016 年度高峰的 204 萬立方公尺降到 2021 年度的 148 萬立方公尺，但仍遠高於伐採量。森林本身詳見<a href=\"forests.html\">岐阜的森林</a>頁，人工林齡級結構見<a href=\"silviculture.html\">造林與撫育</a>頁。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, background data for the forest and forestry basic plan (FY2020); Tōkai Local Finance Bureau, Gifu office, report on Gifu's forests (June 2025); Gifu Prefecture, “State of forestry and the timber industry”. National forest area derived as total minus non-national forest.",
            ja:"出典：岐阜県 森林・林業基本計画の資料（二〇二〇年度）、東海財務局岐阜財務事務所「岐阜県の森林を守るための取組」（二〇二五年六月）、岐阜県「岐阜県の林業・木材産業の現状」。国有林の面積は総面積から民有林を差し引いた値。",
            zh:"資料來源：岐阜縣森林林業基本計畫資料（2020 年度）；東海財務局岐阜財務事務所〈守護岐阜縣森林的措施〉（2025 年 6 月）；岐阜縣〈岐阜縣林業與木材產業現況〉。國有林面積為總面積減去民有林所得。" } }
      ] },
    { t:"section",
      id:"harvest",
      title:{ en:"The harvest", ja:"伐られる木", zh:"伐採量" },
      jp:"素材生産量",
      body:[
        { t:"p",
          text:{
            en:"Log production — <em>sozai seisanryō</em>, the volume of logs cut and brought out of the forest — is the single most important number in forestry. In Gifu it rose from 313,000 cubic metres in FY2009 to 576,000 in FY2021, an increase of about 84 per cent in twelve years. The growth came in two steps. From FY2009 to FY2014 it was gradual, as thinning subsidies began to require that thinned logs be extracted and sold rather than left on the slope. Between FY2014 and FY2018 it jumped by nearly half, when new outlets opened: a biomass power station in Mizuho that burns about 90,000 cubic metres of wood a year, mostly unused forest wood, from 2014, and plywood and laminated-timber mills that buy the bent and small logs sawmills do not want. Since FY2018 the harvest has levelled off at 569,000–576,000 cubic metres. The prefecture's plan for FY2022–FY2026 aims for about 600,000.",
            ja:"素材生産量——森で伐られ、運び出された丸太の量——は林業で最も大切な数字である。岐阜では二〇〇九年度の三十一万三千立方メートルから二〇二一年度の五十七万六千立方メートルへと、十二年で約八十四パーセント増えた。伸びは二段階で訪れた。二〇〇九年度から二〇一四年度までは、間伐の補助が、伐った木を斜面に残さず搬出して売ることを求めはじめたため、ゆるやかに増えた。二〇一四年度から二〇一八年度にかけては、新しい出口が開いたことでほぼ五割増えた。二〇一四年から年に約九万立方メートルの木（多くは未利用材）を燃やす瑞穂市のバイオマス発電所と、製材所が欲しがらない曲がった木や細い木を買う合板・集成材の工場である。二〇一八年度からは五十六万九千〜五十七万六千立方メートルで横ばいが続く。県の二〇二二〜二〇二六年度の計画は約六十万立方メートルを目指す。",
            zh:"原木產量——在森林中伐採並運出的原木量——是林業最重要的單一數字。岐阜的原木產量從 2009 年度的 31.3 萬立方公尺，增加到 2021 年度的 57.6 萬立方公尺，十二年間成長約 84%。成長分兩階段到來。2009 至 2014 年度增加較緩，因為疏伐補助開始要求把疏伐木運出販售，而不是留在坡地上。2014 至 2018 年度則在新出路出現後增加近五成：瑞穗市一座自 2014 年起每年燃燒約 9 萬立方公尺木材（多為未利用材）的生質能發電廠，以及收購製材所不要之彎曲材與小徑木的合板與集成材工廠。2018 年度起，產量持平在 56.9 萬至 57.6 萬立方公尺。縣的 2022–2026 年度計畫目標約為 60 萬立方公尺。" } },
        { t:"figure",
          caption:{
            en:"Log production in Gifu Prefecture, thousand cubic metres, FY2009–FY2021, all logs including fuel wood. Source: Gifu Prefecture, “State of forestry and the timber industry”.",
            ja:"岐阜県の素材生産量（千立方メートル、二〇〇九〜二〇二一年度、燃料用を含むすべての丸太）。出典：岐阜県「岐阜県の林業・木材産業の現状」。",
            zh:"岐阜縣原木產量（千立方公尺，2009–2021 年度，含燃料用材在內之全部原木）。資料來源：岐阜縣〈岐阜縣林業與木材產業現況〉。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Log production, FY2009–FY2021", ja:"素材生産量（二〇〇九〜二〇二一年度）", zh:"原木產量（2009–2021 年度）" },
            unit:{ en:"thousand m³", ja:"千m³", zh:"千 m³" }, tick:100, h:190, hl:["2021"],
            items:[ { x:"2009", v:313 }, { x:"2010", v:325 }, { x:"2011", v:334 }, { x:"2012", v:363 }, { x:"2013", v:368 }, { x:"2014", v:381 }, { x:"2015", v:438 },
                    { x:"2016", v:510 }, { x:"2017", v:535 }, { x:"2018", v:569 }, { x:"2019", v:573 }, { x:"2020", v:576 }, { x:"2021", v:576 } ] }); } },
        { t:"p",
          text:{
            en:"Not all logs are equal. Foresters in Gifu sort them into four grades by the use they can serve. A-grade logs are straight and sound enough for sawmills; B-grade logs, bent or small, go to plywood and laminated-timber mills; C-grade go to chip mills for paper and board; and D-grade — tops, branches and defective pieces — are sold as fuel. In FY2021 A-grade logs made up 256,000 cubic metres, or 44 per cent of the harvest, and fuel wood 191,000 cubic metres, or a third. The fuel share is the price of the harvest's growth: it created a market for wood that used to rot in the forest, but it earns the owner little.",
            ja:"丸太はどれも同じではない。岐阜では使い道によって四つに分ける。A材はまっすぐで健全で製材所に向く丸太、B材は曲がりや細いもので合板・集成材の工場へ、C材はチップ工場へ行って紙やボードになり、D材——梢や枝、欠点のある部分——は燃料として売られる。二〇二一年度、A材は二十五万六千立方メートルで伐採量の四十四パーセント、燃料用は十九万一千立方メートルで三分の一を占めた。燃料の割合の大きさは伐採の伸びの代価である。かつて森で朽ちていた木に市場を生んだが、森林所有者の手取りはわずかである。",
            zh:"原木並非都一樣。岐阜的林業者依用途將原木分為四級。A 材筆直健全，適合製材所；B 材彎曲或較細，送往合板與集成材工廠；C 材送往木片廠，製成紙與板材；D 材——樹梢、枝條與有缺陷的部分——則當作燃料出售。2021 年度 A 材為 25.6 萬立方公尺，占伐採量 44%；燃料材為 19.1 萬立方公尺，占三分之一。燃料比例高是伐採量成長的代價：它為過去在林中腐爛的木材創造了市場，但林主所得微薄。" } },
        { t:"figure",
          caption:{
            en:"Gifu's log production in FY2021 (576,000 m³) by grade and use, per cent of volume: A 256,000 m³, B 80,000, C 49,000, D 191,000. Source: Gifu Prefecture, “State of forestry and the timber industry”.",
            ja:"岐阜県の二〇二一年度の素材生産量（五十七万六千立方メートル）の用途別内訳（量の割合、％）。A材二十五万六千、B材八万、C材四万九千、D材十九万一千立方メートル。出典：岐阜県「岐阜県の林業・木材産業の現状」。",
            zh:"岐阜縣 2021 年度原木產量（57.6 萬立方公尺）依等級與用途之組成（材積百分比）：A 材 25.6 萬、B 材 8 萬、C 材 4.9 萬、D 材 19.1 萬立方公尺。資料來源：岐阜縣〈岐阜縣林業與木材產業現況〉。" },
          svg:function(lang, L){ return GIFU.fig.stack(lang, L, {
            title:{ en:"Where the logs go, FY2021 (% of volume)", ja:"丸太の行き先（二〇二一年度、量の％）", zh:"原木去向（2021 年度，材積 %）" },
            items:[
              { n:{ en:"A: sawlogs", ja:"A材 製材", zh:"A 材 製材" }, v:44 },
              { n:{ en:"B: plywood", ja:"B材 合板等", zh:"B 材 合板等" }, v:14 },
              { n:{ en:"C: chips", ja:"C材 チップ", zh:"C 材 木片" }, v:9 },
              { n:{ en:"D: fuel", ja:"D材 燃料", zh:"D 材 燃料" }, v:33 }
            ] }); } },
        { t:"p",
          text:{
            en:"Most of Gifu's logs are used in Gifu. Of the 576,000 cubic metres cut in FY2020, about 425,000 were processed within the prefecture and 151,000 were shipped to mills and power stations in other prefectures. That is the reverse of the pattern in southern Kyushu, where a large share of the harvest goes abroad as logs (see <a href=\"world.html\">Beyond Japan</a>). The prefecture's policy is to keep as much of the value as possible at home: its target is for demand for Gifu-grown timber to reach 606,000 cubic metres by FY2026.",
            ja:"岐阜の丸太の多くは岐阜で使われる。二〇二〇年度に伐られた五十七万六千立方メートルのうち、約四十二万五千立方メートルは県内で加工され、十五万一千立方メートルが県外の工場や発電所へ出荷された。南九州では伐採量の大きな部分が丸太のまま海外へ出るが、岐阜はその逆である（<a href=\"world.html\">日本の外へ</a>を参照）。県の方針は価値をできるだけ地元に残すことで、県産材の需要を二〇二六年度までに六十万六千立方メートルにする目標を掲げる。",
            zh:"岐阜的原木大多在岐阜使用。2020 年度伐採的 57.6 萬立方公尺中，約 42.5 萬在縣內加工，15.1 萬運往縣外的工廠與發電廠。這與南九州相反——那裡有相當比例的伐採量以原木形式出口（見<a href=\"world.html\">日本以外</a>）。縣的方針是盡可能把價值留在本地：目標是在 2026 年度前讓縣產材需求達到 60.6 萬立方公尺。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, “State of forestry and the timber industry” (log production FY2009–FY2021, grades FY2021); background data for the forest and forestry basic plan (flows FY2020); Japan Woody Bioenergy Association (Gifu Biomass Power).",
            ja:"出典：岐阜県「岐阜県の林業・木材産業の現状」（二〇〇九〜二〇二一年度の素材生産量、二〇二一年度の用途別内訳）、森林・林業基本計画の資料（二〇二〇年度の県内外の流れ）、日本木質バイオマスエネルギー協会（岐阜バイオマスパワー）。",
            zh:"資料來源：岐阜縣〈岐阜縣林業與木材產業現況〉（2009–2021 年度原木產量、2021 年度用途組成）；森林林業基本計畫資料（2020 年度縣內外流向）；日本木質生質能源協會（岐阜生質能發電）。" } }
      ] },
    { t:"section",
      id:"people-and-output",
      title:{ en:"People and output", ja:"働く人と産出額", zh:"從業者與產出額" },
      jp:"林業就業者・林業産出額",
      body:[
        { t:"p",
          text:{
            en:"The harvest has nearly doubled while the workforce has shrunk. Gifu counted 2,524 forest technicians in 1989; by FY2016 there were 930 and by FY2021 916, before a slight recovery to 940 in 2023. Fewer people cut more wood because of machines — harvesters, processors and forwarders, of which Japan had 16,431 in FY2024, 2.3 times the number ten years earlier — and because the work has become year-round employment: about 60 per cent of Gifu's forest workers are employed for 210 days or more a year. The prefecture's target is 1,140 technicians by FY2026, which would require recruiting about 80 newcomers a year. Their training and working conditions are described on the <a href=\"workers.html\">forest workers</a> page.",
            ja:"伐採量がほぼ倍になるあいだに、働く人は減った。岐阜の林業技術者は一九八九年に二千五百二十四人いたが、二〇一六年度には九百三十人、二〇二一年度には九百十六人となり、二〇二三年には九百四十人とわずかに持ち直した。少ない人でより多くの木を伐れるのは機械のおかげである。ハーベスタ、プロセッサ、フォワーダなどの高性能林業機械は二〇二四年度に全国で一万六千四百三十一台あり、十年前の二・三倍である。また仕事が通年の雇用になったためでもある。岐阜の林業就業者の約六割は年二百十日以上働く。県は二〇二六年度までに技術者を千百四十人にする目標を掲げ、そのためには年に約八十人の新規就業者がいる。養成と労働の条件は<a href=\"workers.html\">森で働く人</a>の頁にある。",
            zh:"伐採量幾乎翻倍的同時，從業者卻減少了。岐阜在 1989 年有 2,524 名林業技術人員；2016 年度降至 930 人，2021 年度為 916 人，2023 年略回升至 940 人。人少卻伐得更多，靠的是機械——收穫機、造材機與集材車等高性能林業機械，日本在 2024 年度共有 16,431 台，為十年前的 2.3 倍——也因為工作已成為全年僱用：岐阜約六成林業從業者全年工作 210 天以上。縣的目標是在 2026 年度前讓技術人員達到 1,140 人，這需要每年招募約 80 名新人。其培訓與勞動條件詳見<a href=\"workers.html\">林業從業者</a>頁。" } },
        { t:"table",
          caption:{ en:"Forest technicians in Gifu", ja:"岐阜の林業技術者", zh:"岐阜林業技術人員" },
          cols:[{ en:"Year", ja:"年", zh:"年份" }, { en:"People", ja:"人数", zh:"人數" }, { en:"Note", ja:"備考", zh:"備註" }],
          numCols:[1],
          keyCol:true,
          rows:[
            ["1989", "2,524", { en:"Earliest year in the series cited", ja:"引用した系列の最初の年", zh:"所引數列的最早年份" }],
            ["FY2016", "930", { en:"—", ja:"—", zh:"—" }],
            ["FY2020", "939", { en:"Base year of the prefectural plan", ja:"県の計画の基準年", zh:"縣計畫的基準年" }],
            ["FY2021", "916", { en:"About 60% work 210+ days a year", ja:"約六割が年二百十日以上", zh:"約六成全年工作 210 天以上" }],
            ["2023", "940", { en:"—", ja:"—", zh:"—" }],
            [
              { en:"FY2026 target", ja:"二〇二六年度目標", zh:"2026 年度目標" },
              "1,140",
              { en:"About 80 new workers a year", ja:"年に約八十人の新規就業", zh:"每年約 80 名新人" }
            ]
          ] },
        { t:"p",
          text:{
            en:"In money, forestry is a small industry. Japan's forestry output — the value of timber, cultivated mushrooms, charcoal and other forest products — was about ¥475 billion in 2023. Gifu's share was ¥8.76 billion, 20th among the prefectures. The ranking says less about forests than about mushrooms: the leaders, Nagano (¥60.9 billion) and Niigata (¥47.2 billion), owe their positions largely to factory-grown mushrooms, while Hokkaido (¥43.4 billion) and Miyazaki (¥29.5 billion) are the great producers of timber. Gifu's forest wealth is realised further downstream, in sawn timber, furniture, crafts and instruments whose value appears in the manufacturing statistics rather than in forestry output.",
            ja:"金額で見れば、林業は小さな産業である。木材、栽培きのこ、木炭などの林産物を合わせた日本の林業産出額は、二〇二三年に約四千七百五十一億円であった。岐阜は八十七億六千万円で、都道府県のなかで二十位である。この順位は森よりもきのこを物語る。首位の長野（六百九億円）と二位の新潟（四百七十二億円）はその地位の多くを工場で育てるきのこに負い、北海道（四百三十四億円）と宮崎（二百九十五億円）は木材の大産地である。岐阜の森の豊かさが形になるのはもっと川下、製材、家具、工芸品、楽器においてであり、その価値は林業産出額ではなく製造業の統計に現れる。",
            zh:"以金額看，林業是個小產業。日本的林業產出額——木材、栽培菇類、木炭及其他林產物的總值——2023 年約為 4,751 億日圓。岐阜為 87.6 億日圓，在各都道府縣中排名第 20。這個排名反映的與其說是森林，不如說是菇類：居首的長野（609 億日圓）與第二的新潟（472 億日圓）主要靠工廠栽培的菇類，北海道（434 億日圓）與宮崎（295 億日圓）則是木材大產地。岐阜的森林資源在更下游才化為價值——製材、家具、工藝品與樂器——其產值出現在製造業統計而非林業產出額中。" } },
        { t:"tiny",
          text:{
            en:"Sources: Tōkai Local Finance Bureau, Gifu office (technicians 1989, 2023); Gifu Prefecture (FY2016–FY2021, plan targets); Forestry Agency (machines, FY2024); Ministry of Agriculture, Forestry and Fisheries, forestry output by prefecture, 2023, as tabulated by a statistics service.",
            ja:"出典：東海財務局岐阜財務事務所（一九八九年と二〇二三年の技術者数）、岐阜県（二〇一六〜二〇二一年度、計画目標）、林野庁（二〇二四年度の高性能林業機械）、農林水産省「林業産出額」都道府県別（二〇二三年、統計サイトの集計による）。",
            zh:"資料來源：東海財務局岐阜財務事務所（1989 年與 2023 年技術人員數）；岐阜縣（2016–2021 年度、計畫目標）；林野廳（2024 年度高性能林業機械）；農林水產省各都道府縣林業產出額（2023 年，依統計網站整理）。" } }
      ] },
    { t:"section",
      id:"mills-and-markets",
      title:{ en:"Mills and markets", ja:"製材所と市場", zh:"製材所與市場" },
      jp:"木材産業",
      body:[
        { t:"p",
          text:{
            en:"Between the forest and the builder stand the log markets and sawmills. Gifu had 169 sawmills in FY2021, more than any other prefecture, although 50 had closed since FY2016. Most are small, family-run mills that saw local hinoki and sugi into posts, beams and boards for houses, temples and joinery; a few can handle logs of 7 to 13 metres for large timber buildings. Together they shipped 148,000 cubic metres of sawn products in 2021, 14,000 more than the year before, of which 121,000 cubic metres — more than four-fifths — were building timber. Some 55 per cent of the output was kiln-dried, the property that builders now demand and that distinguishes a modern mill from an old one. Logs reach the mills through sixteen log-market companies, such as the hinoki market in Shirakawa, or directly from forest cooperatives and logging firms. The mills themselves are described on the <a href=\"sawmill.html\">sawmill</a> page, and the markets on the <a href=\"markets.html\">log markets</a> page.",
            ja:"森と工務店のあいだには、原木市場と製材所がある。岐阜の製材工場は二〇二一年度に百六十九あり、どの県よりも多いが、二〇一六年度から五十が閉じた。多くは家族で営む小さな工場で、地元のヒノキやスギを柱、梁、板に挽き、住宅や社寺、建具に送る。七〜十三メートルの長い丸太を挽ける工場もいくつかあり、大きな木造建築に応える。これらの工場の製材品の出荷量は二〇二一年に十四万八千立方メートルで、前年より一万四千立方メートル多く、そのうち十二万一千立方メートル——八割強——が建築用材であった。約五十五パーセントが人工乾燥材で、いま工務店が求め、新しい工場と古い工場を分ける性質である。丸太は、白川のヒノキの市場のような十六の原木市場の会社を通じて、あるいは森林組合や素材生産業者から直接、工場に届く。製材所については<a href=\"sawmill.html\">製材</a>の頁に、市場については<a href=\"markets.html\">原木市場と価格</a>の頁にある。",
            zh:"在森林與營造商之間，是原木市場與製材所。岐阜在 2021 年度有 169 家製材所，居全國之冠，但自 2016 年度以來已有 50 家歇業。多數是家族經營的小型製材所，把在地的扁柏與柳杉鋸成柱、樑與板，供應住宅、寺社與門窗木作；少數能處理 7 至 13 公尺的長原木，承接大型木造建築。2021 年這些製材所共出貨製材品 14.8 萬立方公尺，比前一年多 1.4 萬，其中 12.1 萬立方公尺——八成以上——為建築用材。約 55% 為人工乾燥材，這是如今營造商要求的特性，也是新舊製材所的分野。原木透過 16 家原木市場公司（例如白川的扁柏市場），或直接由森林組合與伐採業者送到製材所。製材所詳見<a href=\"sawmill.html\">製材</a>頁，市場詳見<a href=\"markets.html\">原木市場與價格</a>頁。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Sawmills", ja:"製材工場", zh:"製材所" },
              v:"169",
              d:{ en:"FY2021; 219 in FY2016.", ja:"二〇二一年度。二〇一六年度は二百十九。", zh:"2021 年度；2016 年度為 219 家。" } },
            { k:{ en:"Sawn products", ja:"製材品出荷量", zh:"製材品出貨量" },
              v:{ en:"148,000 m³", ja:"14.8万m³", zh:"14.8 萬 m³" },
              d:{ en:"2021; 121,000 m³ building timber.", ja:"二〇二一年。建築用材は十二万一千立方メートル。", zh:"2021 年；建築用材 12.1 萬 m³。" } },
            { k:{ en:"Kiln-dried share", ja:"人工乾燥材の割合", zh:"人工乾燥材比例" },
              v:"55%",
              d:{ en:"2021", ja:"二〇二一年", zh:"2021 年" } },
            { k:{ en:"Log markets", ja:"原木市場", zh:"原木市場" },
              v:"16",
              d:{ en:"Companies, around FY2020.", ja:"会社数、二〇二〇年度ごろ。", zh:"公司數，約 2020 年度。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, “State of forestry and the timber industry” (sawmills, shipments, drying); background data for the forest and forestry basic plan (log markets); Gifu Prefecture, guide to medium and large timber buildings (long-length mills).",
            ja:"出典：岐阜県「岐阜県の林業・木材産業の現状」（製材工場、出荷量、乾燥）、森林・林業基本計画の資料（原木市場）、岐阜県 中大規模木造建築ガイド（長尺材の製材所）。",
            zh:"資料來源：岐阜縣〈岐阜縣林業與木材產業現況〉（製材所、出貨量、乾燥）；森林林業基本計畫資料（原木市場）；岐阜縣中大規模木造建築指南（長材製材所）。" } }
      ] },
    { t:"section",
      id:"furniture-numbers",
      title:{ en:"Furniture and wood products", ja:"家具と木製品", zh:"家具與木製品" },
      jp:"製造品出荷額",
      body:[
        { t:"p",
          text:{
            en:"In manufacturing statistics wood appears under two headings. “Wood and wood products” covers sawmills, precut factories, plywood and laminated timber, wooden containers and other primary products; “furniture and fixtures” covers furniture, shop and kitchen fittings and similar goods, whatever their material. In the 2024 Economic Structure Survey, Gifu's furniture industry shipped ¥99.9 billion of goods — 4.9 per cent of the national total and the sixth-largest of any prefecture — and its wood-products industry ¥84.6 billion, 2.5 per cent of the national total and fourteenth. Together they made up ¥184.4 billion, only 2.7 per cent of the prefecture's manufacturing, in a prefecture dominated by machinery, cars and ceramics. But in Hida they are among the main industries, and Hida-Takayama is often counted among Japan's five great furniture-making regions.",
            ja:"製造業の統計で、木は二つの項目に現れる。「木材・木製品」は製材、プレカット、合板や集成材、木製容器などの一次製品を、「家具・装備品」は家具、店舗や台所の造作などを、材を問わず含む。二〇二四年の経済構造実態調査で、岐阜の家具・装備品の出荷額は九百九十八億八千万円で、全国の四・九パーセント、都道府県で六位であった。木材・木製品は八百四十五億六千万円で、全国の二・五パーセント、十四位である。あわせて千八百四十四億円で、機械、自動車、窯業の大きい県の製造業のなかでは二・七パーセントにすぎない。しかし飛騨では主要な産業の一つであり、飛騨・高山はしばしば日本の五大家具産地の一つに数えられる。",
            zh:"在製造業統計中，木材出現在兩個類別。「木材與木製品」涵蓋製材、預切、合板與集成材、木製容器等初級產品；「家具與裝備品」則涵蓋家具、店鋪與廚房的固定裝修等，不論材質。在 2024 年經濟構造實態調查中，岐阜家具業出貨額為 998.8 億日圓，占全國 4.9%，居各都道府縣第六；木材與木製品業為 845.6 億日圓，占全國 2.5%，排名第十四。兩者合計 1,844 億日圓，在以機械、汽車與窯業為主的岐阜製造業中僅占 2.7%。但在飛驒，它們是主要產業之一，飛驒高山也常被列為日本五大家具產地之一。" } },
        { t:"table",
          caption:{
            en:"Gifu's wood and furniture manufacturing, 2024: shipments, national share and rank",
            ja:"岐阜の木材・家具の製造業（二〇二四年）：出荷額、全国シェア、順位",
            zh:"岐阜木材與家具製造業（2024 年）：出貨額、全國占比與排名" },
          cols:[
            { en:"Industry or product", ja:"業種・品目", zh:"產業或品項" },
            { en:"Shipments", ja:"出荷額", zh:"出貨額" },
            { en:"Share of Japan", ja:"全国シェア", zh:"全國占比" },
            { en:"Rank", ja:"順位", zh:"排名" }
          ],
          numCols:[1, 2, 3],
          keyCol:true,
          rows:[
            [
              { en:"Furniture and fixtures", ja:"家具・装備品", zh:"家具與裝備品" },
              { en:"¥99.9 bn", ja:"998.8億円", zh:"998.8 億日圓" },
              "4.9%",
              "6"
            ],
            [
              { en:"Wood and wood products", ja:"木材・木製品", zh:"木材與木製品" },
              { en:"¥84.6 bn", ja:"845.6億円", zh:"845.6 億日圓" },
              "2.5%",
              "14"
            ],
            [
              { en:"Wooden desks, tables and chairs", ja:"木製の机・テーブル・椅子", zh:"木製書桌、桌與椅" },
              { en:"¥19.2 bn", ja:"191.6億円", zh:"191.6 億日圓" },
              "12.0%",
              "2"
            ],
            [
              { en:"Wooden shelves and cabinets", ja:"木製の棚・戸棚", zh:"木製層架與櫥櫃" },
              { en:"≈ ¥13.8 bn", ja:"約138億円", zh:"約 138 億日圓" },
              "10.0%",
              "2"
            ],
            [
              { en:"Kitchen fixtures", ja:"台所用の造作", zh:"廚房固定裝置" },
              { en:"≈ ¥9.5 bn", ja:"約95億円", zh:"約 95 億日圓" },
              "4.7%",
              "8"
            ],
            [
              { en:"Wooden beds", ja:"木製のベッド", zh:"木製床架" },
              { en:"≈ ¥0.86 bn", ja:"約8.6億円", zh:"約 8.6 億日圓" },
              "5.4%",
              "8"
            ]
          ] },
        { t:"p",
          text:{
            en:"The product figures show where Gifu's strength lies. In wooden chairs, tables and desks — the products on which the Hida makers built their name — the prefecture supplies 12 per cent of Japan's output by value and ranks second; in wooden shelves and cabinets it ranks second again with a tenth of the national total. These are the goods of the Takayama factories described on the <a href=\"furniture.html\">furniture</a> and <a href=\"chairs.html\">chairs</a> pages, and of the smaller workshops listed on the <a href=\"houses.html\">makers</a> page. The Hida furniture federation, which administers the regional trademark, has about two dozen member companies.",
            ja:"品目別の数字を見ると、岐阜の強みがどこにあるかがわかる。飛騨のメーカーが名を築いた木製の椅子・机・テーブルでは、県は全国の出荷額の十二パーセントを占めて二位、木製の棚・戸棚でも全国の一割で二位である。これらは<a href=\"furniture.html\">飛騨の家具</a>や<a href=\"chairs.html\">椅子</a>の頁で紹介した高山の工場の品であり、<a href=\"houses.html\">作り手</a>の頁に挙げた小さな工房の品である。地域団体商標を管理する飛騨木工連合会には二十数社が加わる。",
            zh:"從品項數字可以看出岐阜的強項所在。在飛驒廠商賴以成名的木製椅、桌與書桌方面，岐阜占全國出貨額 12%，排名第二；木製層架與櫥櫃也以全國一成的占比位居第二。這些是<a href=\"furniture.html\">飛驒家具</a>與<a href=\"chairs.html\">椅子</a>頁介紹的高山工廠產品，也包括<a href=\"houses.html\">木作職人</a>頁所列小型工坊的作品。管理區域團體商標的飛驒木工聯合會約有二十多家會員企業。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Industrial Economy Promotion Center, local industry survey “Woodworking” (FY2025), using METI's 2024 Economic Structure Survey (values in millions of yen, rounded here); Hida furniture federation member list.",
            ja:"出典：岐阜県産業経済振興センター 地場産業調査「木工」（二〇二五年度）、経済産業省「二〇二四年経済構造実態調査」による（百万円単位の値を丸めた）、飛騨木工連合会の会員名簿。",
            zh:"資料來源：岐阜縣產業經濟振興中心地場產業調查「木工」（2025 年度），依經濟產業省 2024 年經濟構造實態調查（原以百萬日圓計，此處四捨五入）；飛驒木工聯合會會員名單。" } }
      ] },
    { t:"section",
      id:"crafts-and-guitars",
      title:{ en:"Crafts and guitars", ja:"工芸とギター", zh:"工藝與吉他" },
      jp:"伝統的工芸品・ギター",
      body:[
        { t:"p",
          text:{
            en:"Six of Japan's officially designated traditional crafts — products recognised by the Minister of Economy, Trade and Industry under the 1974 law for the promotion of traditional craft industries — come from Gifu. Two are made of wood, both in Takayama: Hida Shunkei lacquerware and Ichii Ittōbori yew carving, designated within months of each other in 1975. The others depend on the forest in less obvious ways: Mino washi on the bark of the paper mulberry, Gifu lanterns and Gifu umbrellas on bamboo, paper and, for the umbrella's hub, the wood of the <em>egonoki</em>; and Mino ware on the wood fuel that fired its kilns for centuries.",
            ja:"一九七四年の伝統的工芸品産業の振興に関する法律にもとづいて経済産業大臣が指定する伝統的工芸品のうち、六品目が岐阜のものである。木の工芸はそのうち二つで、どちらも高山の飛騨春慶と一位一刀彫であり、一九七五年に数か月違いで指定された。ほかの品目は、目立たない形で森に支えられている。美濃和紙はコウゾの樹皮に、岐阜提灯と岐阜和傘は竹と紙、そして傘の轆轤にはエゴノキの材に拠り、美濃焼は何百年も窯を焚いてきた薪に拠ってきた。",
            zh:"依 1974 年《傳統工藝品產業振興法》由經濟產業大臣指定的日本傳統工藝品中，有六項來自岐阜。其中兩項是木製品，都在高山：飛驒春慶漆器與一位一刀彫紅豆杉雕刻，於 1975 年相隔數月獲指定。其他品項則以較不明顯的方式仰賴森林：美濃和紙仰賴構樹樹皮；岐阜燈籠與岐阜和傘仰賴竹與紙，傘的「轆轤」（傘骨軸心）則用野茉莉（エゴノキ）木；美濃燒則數百年來仰賴燒窯的薪柴。" } },
        { t:"table",
          caption:{ en:"Gifu's nationally designated traditional crafts", ja:"岐阜の国指定伝統的工芸品", zh:"岐阜的國家指定傳統工藝品" },
          cols:[
            { en:"Craft", ja:"品目", zh:"品項" },
            { en:"Main places", ja:"主な産地", zh:"主要產地" },
            { en:"Designated", ja:"指定", zh:"指定" },
            { en:"Materials", ja:"主な材料", zh:"主要材料" }
          ],
          numCols:[2],
          keyCol:true,
          rows:[
            [
              { en:"Hida Shunkei", ja:"飛騨春慶", zh:"飛驒春慶" },
              { en:"Takayama, Hida", ja:"高山市、飛騨市", zh:"高山市、飛驒市" },
              "1975",
              { en:"Sawara, hinoki, tochi; clear urushi", ja:"サワラ、ヒノキ、トチ。透き漆", zh:"花柏、扁柏、七葉樹；透明漆" }
            ],
            [
              { en:"Ichii Ittōbori", ja:"一位一刀彫", zh:"一位一刀彫" },
              { en:"Takayama, Hida, Gero", ja:"高山市、飛騨市、下呂市", zh:"高山市、飛驒市、下呂市" },
              "1975",
              { en:"Japanese yew (ichii)", ja:"イチイ", zh:"日本紅豆杉（一位）" }
            ],
            [
              { en:"Mino ware", ja:"美濃焼", zh:"美濃燒" },
              { en:"Tajimi, Toki, Mizunami", ja:"多治見市、土岐市、瑞浪市", zh:"多治見市、土岐市、瑞浪市" },
              "1978",
              { en:"Clay; historically wood-fired", ja:"陶土。かつては薪で焼成", zh:"陶土；昔日以薪柴燒製" }
            ],
            [
              { en:"Mino washi", ja:"美濃和紙", zh:"美濃和紙" },
              { en:"Mino", ja:"美濃市", zh:"美濃市" },
              "1985",
              { en:"Paper-mulberry bark", ja:"コウゾ", zh:"構樹樹皮" }
            ],
            [
              { en:"Gifu lanterns", ja:"岐阜提灯", zh:"岐阜燈籠" },
              { en:"Gifu and neighbours", ja:"岐阜市ほか", zh:"岐阜市等" },
              "1995",
              { en:"Bamboo, washi", ja:"竹、和紙", zh:"竹、和紙" }
            ],
            [
              { en:"Gifu umbrellas", ja:"岐阜和傘", zh:"岐阜和傘" },
              { en:"Gifu, Mizuho, Kitagata, Ginan", ja:"岐阜市、瑞穂市、北方町、岐南町", zh:"岐阜市、瑞穗市、北方町、岐南町" },
              "2022",
              { en:"Bamboo, washi, egonoki hub", ja:"竹、和紙、エゴノキの轆轤", zh:"竹、和紙、野茉莉木軸心" }
            ]
          ] },
        { t:"p",
          text:{
            en:"Two other wood industries give Gifu a national weight out of proportion to their size. Ōgaki makes about 80 per cent of Japan's <a href=\"masu.html\">masu</a>, the square hinoki measuring boxes now used mostly for sake and as gifts, although the number of makers has fallen from a peak of nine to three or four. And Gifu is one of Japan's leading guitar-making prefectures by value. In the Census of Manufactures it ranked second in 2016 (¥1.19 billion, 17,962 guitars) and 2019 (¥1.24 billion, 16,744 guitars), and fourth in 2021 (¥1.23 billion, 16,552 guitars). At about ¥74,000 per instrument in 2021, a Gifu guitar was worth nearly twice the average guitar shipped from Nagano (about ¥41,000) — the mark of acoustic instruments made largely by hand, above all by <a href=\"takamine.html\">Takamine</a> and <a href=\"yairi.html\">Yairi</a>. The full figures are on the <a href=\"guitarindustry.html\">guitar industry</a> page.",
            ja:"ほかに二つの木の産業が、規模に比べて大きな全国的な重みを岐阜に与えている。大垣は、いまは主に酒や贈り物に使われるヒノキの四角い計量の器、<a href=\"masu.html\">枡</a>の全国の約八割を作る。ただし作り手は最盛期の九社から三、四社に減った。そして岐阜は、金額で見て日本有数のギターの産地である。工業統計で、二〇一六年（十一億九千万円、一万七千九百六十二本）と二〇一九年（十二億四千万円、一万六千七百四十四本）には全国二位、二〇二一年（十二億三千万円、一万六千五百五十二本）には四位であった。二〇二一年の一本あたり約七万四千円は、長野から出荷されるギターの平均（約四万一千円）のほぼ二倍で、主に<a href=\"takamine.html\">タカミネ</a>と<a href=\"yairi.html\">ヤイリ</a>が手仕事を多く残して作るアコースティックギターのしるしである。くわしい数字は<a href=\"guitarindustry.html\">ギター産業</a>の頁にある。",
            zh:"另有兩項木材產業，讓岐阜在全國的份量遠超其規模。大垣生產日本約 80% 的<a href=\"masu.html\">木枡</a>——這種方形扁柏量器如今多用於飲酒與送禮——不過製造商已從最多時的 9 家減為 3、4 家。此外，以產值計，岐阜是日本主要的吉他產地之一。在工業統計中，它在 2016 年（11.9 億日圓，17,962 把）與 2019 年（12.4 億日圓，16,744 把）排名第二，2021 年（12.3 億日圓，16,552 把）排名第四。2021 年岐阜吉他每把約 7.4 萬日圓，幾乎是長野出貨吉他平均值（約 4.1 萬日圓）的兩倍——這是大量手工製作之木吉他的標誌，主要出自 <a href=\"takamine.html\">Takamine</a> 與 <a href=\"yairi.html\">Yairi</a>。完整數字見<a href=\"guitarindustry.html\">吉他產業</a>頁。" } },
        { t:"note",
          label:{ en:"The shape of Gifu's wood economy", ja:"岐阜の木の経済のかたち", zh:"岐阜木材經濟的樣貌" },
          text:{
            en:"Put together, the numbers describe a pyramid standing on its point. At the base is one of the largest and most hinoki-rich forests in Japan, growing faster than it is cut. In the middle, the harvest and the workforce are modest, held back by steep slopes, small ownerships and low log prices. At the top, where skill is added, Gifu is among the leaders: first in sawmills, second in wooden chairs and tables, sixth in furniture, one of the leading guitar-making prefectures by value, and home to two wooden traditional crafts.",
            ja:"数字を合わせると、頂点で立つピラミッドの姿が描かれる。底には、伐られるよりも速く育つ、日本でも最大級でヒノキの豊かな森がある。中ほどの伐採と働き手は、急な斜面、小さな所有、安い丸太の値に抑えられて控えめである。技が加わる頂では、岐阜は先頭の一群にいる。製材工場の数で一位、木製の椅子・テーブルで二位、家具で六位、金額で日本有数のギター産地、そして二つの木の伝統的工芸品の地である。",
            zh:"把數字放在一起，呈現的是一座以尖端站立的金字塔。底部是日本最大、扁柏最豐富的森林之一，生長速度快於伐採。中段的伐採量與人力並不突出，受制於陡坡、零碎的林地持有與低廉的原木價格。在加入技藝的頂端，岐阜名列前茅：製材所數量第一、木製椅桌第二、家具第六、以產值計為日本主要吉他產地之一，並擁有兩項木製傳統工藝品。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, list of traditional crafts designated by METI; METI Census of Manufactures (2016, 2019) and Economic Census for Business Activity (2021), guitars by prefecture; Ōgaki masu makers' published accounts.",
            ja:"出典：岐阜県「経済産業大臣指定伝統的工芸品」一覧、経済産業省 工業統計調査（二〇一六年、二〇一九年）と経済センサス‐活動調査（二〇二一年）の都道府県別ギター出荷、大垣の枡メーカーの公表資料。",
            zh:"資料來源：岐阜縣「經濟產業大臣指定傳統工藝品」一覽；經濟產業省工業統計調查（2016、2019 年）與經濟普查活動調查（2021 年）之各縣吉他出貨；大垣木枡業者公開資料。" } }
      ] },
    { t:"section",
      id:"gifu-and-japan",
      title:{ en:"Gifu within Japan", ja:"全国のなかの岐阜", zh:"全國之中的岐阜" },
      jp:"全国比較",
      body:[
        { t:"p",
          text:{
            en:"The national background explains many of Gifu's numbers. Japan's forest area has stayed at about 25 million hectares — two-thirds of the land — for sixty years, while the growing stock has nearly tripled, from about 1.89 billion cubic metres in 1966 to about 5.56 billion in 2022, as the post-war plantations, now some 10 million hectares, have grown. Demand for wood in 2024 was 81.9 million cubic metres (roundwood equivalent), of which domestic supply met 42.5 per cent, up from a low of 18.8 per cent in 2002. Log prices, however, remain far below their 1980 peak: in 2024 a cubic metre of medium sugi logs averaged about ¥15,900 and hinoki about ¥22,300. Gifu shares all these trends, with two differences of degree — more hinoki, which sells for more, and more small mills and workshops to turn it into finished goods.",
            ja:"全国の背景が、岐阜の数字の多くを説明する。日本の森林面積は六十年にわたって約二千五百万ヘクタール——国土の三分の二——で変わらないが、蓄積は戦後の人工林（いまは約一千万ヘクタール）が育つにつれて、一九六六年の約十八億九千万立方メートルから二〇二二年の約五十五億六千万立方メートルへと、ほぼ三倍になった。二〇二四年の木材の需要は丸太換算で八千百八十七万立方メートルで、国内の供給はその四十二・五パーセントをまかない、二〇〇二年の最低十八・八パーセントから回復した。しかし丸太の値は一九八〇年の最高値をはるかに下回る。二〇二四年、中丸太一立方メートルの平均はスギ約一万五千九百円、ヒノキ約二万二千三百円であった。岐阜はこうした流れをすべて共有するが、程度に二つの違いがある。より高く売れるヒノキが多いこと、そしてそれを完成品に変える小さな製材所と工房が多いことである。",
            zh:"全國背景可以解釋岐阜的許多數字。日本森林面積六十年來維持約 2,500 萬公頃——國土的三分之二——而隨著如今約 1,000 萬公頃的戰後人工林成長，蓄積量從 1966 年約 18.9 億立方公尺增加到 2022 年約 55.6 億立方公尺，幾乎成長三倍。2024 年木材需求為 8,187 萬立方公尺（原木當量），國內供給占 42.5%，較 2002 年最低的 18.8% 回升。然而原木價格仍遠低於 1980 年的高峰：2024 年中徑柳杉原木每立方公尺平均約 15,900 日圓，扁柏約 22,300 日圓。岐阜共享這些趨勢，只在程度上有兩點不同——扁柏較多，而扁柏賣得較好；以及把它製成成品的小型製材所與工坊較多。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Japan", ja:"全国", zh:"全國" },
              jp:"全国",
              text:{
                en:"Forest ≈ 67% of land; planted forest ≈ 41% of forest; sugi plantations far larger than hinoki; timber self-sufficiency 42.5% (2024).",
                ja:"森林率は約六十七％、人工林は森林の約四十一％。スギの人工林がヒノキよりはるかに広い。木材自給率は四十二・五％（二〇二四年）。",
                zh:"森林約占國土 67%；人工林約占森林 41%；柳杉人工林遠多於扁柏；木材自給率 42.5%（2024 年）。" } },
            { title:{ en:"Gifu", ja:"岐阜", zh:"岐阜" },
              jp:"岐阜",
              text:{
                en:"Forest 81% of land; planted forest ≈ 45%; planted hinoki (209,000 ha) well ahead of sugi (122,000 ha) in the private forest; most logs processed within the prefecture.",
                ja:"森林率は八十一％、人工林は約四十五％。民有林ではヒノキの人工林（二十万九千ヘクタール）がスギ（十二万二千ヘクタール）を大きく上回る。丸太の多くは県内で加工される。",
                zh:"森林占 81%；人工林約 45%；民有林中扁柏人工林（20.9 萬公頃）遠多於柳杉（12.2 萬公頃）；多數原木在縣內加工。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, state of forest resources (via a forestry education site) and timber supply and demand table 2024; Forestry Agency timber price statistics (2024); Gifu Prefecture (FY2020).",
            ja:"出典：林野庁「森林資源の現況」（森林・林業学習館による）、林野庁「令和6年（二〇二四年）木材需給表」、林野庁 木材価格統計（二〇二四年）、岐阜県（二〇二〇年度）。",
            zh:"資料來源：林野廳〈森林資源現況〉（據森林林業學習館）與 2024 年木材供需表；林野廳木材價格統計（2024 年）；岐阜縣（2020 年度）。" } }
      ] },
    { t:"related",
      items:[
        { href:"forests.html", why:{ en:"The forest behind the figures.", ja:"数字の背後にある森。", zh:"數字背後的森林。" } },
        { href:"logging.html", why:{ en:"How the harvest is cut and hauled.", ja:"伐採と搬出の実際。", zh:"伐採與搬運的實務。" } },
        { href:"sawmill.html", why:{ en:"Gifu's many small sawmills.", ja:"岐阜の数多い小さな製材所。", zh:"岐阜眾多的小型製材所。" } },
        { href:"furniture.html", why:{ en:"The Hida furniture makers.", ja:"飛騨の家具メーカー。", zh:"飛驒家具廠商。" } },
        { href:"world.html", why:{ en:"Wood exports and Gifu abroad.", ja:"木材輸出と海外の岐阜。", zh:"木材出口與海外的岐阜。" } }
      ] }
  ] };

/* ---- -------------------------------------------- future */
GIFU.pages["future"] = {
  kicker: { en:"Reference · 03", ja:"資料 · 03", zh:"資料 · 03" },
  title:  { en: "The Next Twenty Years", ja: "これからの二十年", zh: "未來二十年" },
  jp: "森 · 人 · 技 · 道",
  lede: {
    en: "What the rest of this book describes is changing, and some of it quickly. The population is falling, the planted forests have reached the age of harvest with too few people to harvest them, the crafts are losing their masters faster than they gain apprentices, and a maglev railway, new detectors under the mountains and hotter summers are all on the way. This page sets out the pressures and the answers already visible. It is not a forecast, and where it looks ahead it says so.",
    ja: "本書のほかの頁が描くものは変わりつつあり、その一部は速い。人口は減り、人工林は伐りどきを迎えたのに伐る人が足りず、工芸は弟子を得るより速く親方を失い、リニアの鉄道、山の下の新しい検出器、より暑い夏が近づいている。この頁は、その圧力と、すでに見えている応答とを並べる。予測ではなく、先を見るところではそうと断る。",
    zh: "本書其他各頁所描述的事物正在改變，其中一些變得很快。人口在減少；人工林已到了採伐的年齡，卻沒有足夠的人手去伐；工藝失去師傅的速度快過收到學徒的速度；而一條磁浮鐵路、山底下新的偵測器，以及更熱的夏天，都已在路上。本頁列出這些壓力，以及已經看得見的回應。這不是預測；凡是展望未來之處，都會明言。"
  },
  body: [
    { t:"section", id:"people",
      title:{ en:"Fewer people", ja:"減る人", zh:"人口減少" }, jp:"人口",
      body:[
        { t:"p", text:{
          en:"Gifu's population peaked at about 2.11 million in 2000 and has fallen at every census since, to about 1.95 million in 2025. The loss is uneven: the cities of the southern plain, within commuting distance of Nagoya, hold up best, while the mountain villages of Hida and the upper valleys of Mino lose people fastest and grow oldest. The prefecture expects the decline to continue for decades. For the subjects of this book that means fewer apprentices, fewer customers at home, fewer hands to keep up a thatched roof or a village playhouse — and, in the most remote places, the question of whether a festival or a craft can go on at all.",
          ja:"岐阜の人口は2000年に約211万人の頂点に達し、以後は国勢調査のたびに減って、2025年には約195万人となった。減り方は一様ではない。名古屋へ通える南の平野の市は持ちこたえ、飛騨の山村や美濃の奥の谷は最も速く人を失い、最も速く老いる。県は減少が何十年も続くと見込んでいる。本書の主題にとってそれは、弟子が減り、国内の客が減り、茅葺きの屋根や村の芝居小屋を守る手が減ることを意味する。最も奥まった土地では、祭りや工芸がそもそも続けられるのかという問いにもなる。",
          zh:"岐阜人口在 2000 年達到約 211 萬的高峰，此後每次國勢調查都在減少，2025 年約為 195 萬。減少並不平均：南部平原上、可通勤到名古屋的城市撐得最好；飛驒的山村與美濃深處的河谷則人口流失最快、老化也最快。縣府預期減少將持續數十年。對本書的主題而言，這意味著學徒更少、國內顧客更少、維護茅草屋頂或村落戲棚的人手更少——在最偏遠的地方，甚至會出現祭典或工藝是否還能延續的問題。" } }
      ]
    },

    { t:"section", id:"forest",
      title:{ en:"A forest ready to cut", ja:"伐りどきの森", zh:"到了採伐期的森林" }, jp:"森林",
      body:[
        { t:"p", text:{
          en:"The hinoki and sugi planted after the Second World War are now mostly more than fifty years old: a large, growing resource with too few people and too little profit to harvest and replant it. The answers are already in place. Since 2012 residents have paid the prefecture's forest and environment tax, and since 2024 a national one as well; a law of 2010, widened in 2021, pushes timber into public and then all buildings; laminated and cross-laminated timber let domestic wood compete for large buildings; and Japan's timber self-sufficiency, below a fifth around 2000, recovered to about two-fifths by the early 2020s. The Gifu Academy of Forest Science and Culture at Mino, opened in 2001, trains foresters, builders and woodworkers. Whether the forests are thinned, harvested and replanted in the next twenty years, or simply left to grow, is the largest open question in this book.",
          ja:"戦後に植えられた檜と杉は、いまその多くが五十年を超えた。大きく育ちつづける資源であるのに、伐って植え直すための人も利益も足りない。応答はすでに用意されている。2012年から県民は県の森林・環境税を、2024年からは国の森林環境税も納めている。2010年の法律は公共建築に、2021年からはあらゆる建築に木を使うよう促し、集成材やCLTは大きな建物で国産材が競えるようにした。2000年前後に二割を割った日本の木材自給率は、2020年代の初めにはおよそ四割まで戻った。2001年に美濃市に開かれた岐阜県立森林文化アカデミーは、林業家、建築家、木工家を育てている。これからの二十年で森が間伐され、伐られ、植え直されるのか、それともただ育つにまかされるのか——それが本書で最も大きな、答えの出ていない問いである。",
          zh:"戰後種下的檜木與杉木，如今大多已超過五十年：這是一份龐大且仍在增長的資源，卻沒有足夠的人手與利潤去採伐和重新造林。對策已經就位。自 2012 年起，縣民繳納縣的森林與環境稅，自 2024 年起再加上國家的森林環境稅；2010 年的一項法律推動公共建築使用木材，2021 年擴及所有建築；集成材與直交集成板（CLT）讓國產木材得以在大型建築上競爭；日本的木材自給率在 2000 年前後跌破兩成，到 2020 年代初回升到約四成。2001 年在美濃市開校的岐阜縣立森林文化學院，培育林業人、建築人與木工。未來二十年，這些森林會被疏伐、採伐、重新造林，還是任其生長——這是本書中最大、仍懸而未決的問題。" } },
        { t:"p", text:{ en:"The forest's next twenty years — the age of the plantations, the people and machines that work them, the rules and the money, the risks of rain, pests and deer — are set out at length in <a href=\"woodfuture.html\">The Next Twenty Years for Wood</a>.", ja:"森のこれからの二十年——人工林の齢、そこで働く人と機械、制度とお金、雨・病虫害・シカの危険——は<a href=\"woodfuture.html\">木のこれからの二十年</a>で詳しく述べる。", zh:"森林的未來二十年——人工林的林齡、在其中工作的人與機械、制度與資金，以及豪雨、病蟲害與鹿的風險——詳見<a href=\"woodfuture.html\">木材的未來二十年</a>。" } }
      ]
    },

    { t:"section", id:"crafts",
      title:{ en:"Crafts that must find new buyers", ja:"新しい買い手を探す技", zh:"必須尋找新買家的工藝" }, jp:"工芸",
      body:[
        { t:"p", text:{
          en:"The pattern is the same in every craft of this book: masters ageing, small workshops without successors, a home market that buys less. The answers are also shared. Seki has moved up-market into premium kitchen knives for export, where “made in Seki” carries weight. Mino paper has found a world market in the conservation of books and paintings. The Hida furniture makers sell to hotels, offices and buyers abroad, and train newcomers in schools and workshops in Takayama. Mino ware, whose everyday plates face cheaper imports, sells design and craft instead. And almost every craft now sells itself as an experience — a forging demonstration, a sheet of paper made by hand, a masu branded with a name.",
          ja:"本書のどの工芸でも型は同じである。親方は老い、小さな工房には後継ぎがなく、国内の市場は買う量を減らしている。応答もまた共通している。関は高級な包丁へ移り、「関製」の名が効く輸出に向かった。美濃の紙は、書物や絵画の修復という世界の市場を見つけた。飛騨の家具はホテルや事務所や海外の買い手に売り、高山の学校や工房で新しい担い手を育てている。日常の器が安い輸入品と競う美濃焼は、かわりにデザインと手仕事を売る。そしてほとんどの工芸が、いまや体験としても自らを売っている——鍛錬の公開、手で漉く一枚の紙、名入れの焼印を押した枡。",
          zh:"本書每一項工藝的模式都相同：師傅老去、小工坊後繼無人、國內市場買得越來越少。對策也相通。關轉向高級菜刀並走向出口市場，在那裡「關製」這塊招牌有份量。美濃紙在書籍與繪畫修復領域找到了世界市場。飛驒家具賣給飯店、辦公室與海外買家，並在高山的學校與工坊培育新人。日常餐具面臨廉價進口品競爭的美濃燒，則改賣設計與手工。而幾乎每一項工藝，如今也把自己當成體驗來賣——一場公開鍛刀、一張親手抄的紙、一個烙上名字的枡。" } }
      ]
    },

    { t:"section", id:"sake",
      title:{ en:"Sake", ja:"酒", zh:"酒" }, jp:"酒",
      body:[
        { t:"p", text:{
          en:"There are fewer breweries than there were, and fewer every decade, as Japan drinks less sake. But the houses that remain have changed more since the 1990s than in the century before: toward junmai and ginjō, local rice such as Hida Homare and Ibi-no-homare, traditional starters, small batches and, in some houses, brewing all year round. In December 2024 UNESCO inscribed the traditional knowledge and skills of sake-making with kōji mould in Japan as intangible cultural heritage, which may help the small houses abroad. See <a href=\"sake.html\">The Sake of Gifu</a>.",
          ja:"日本人が日本酒を飲まなくなるにつれ、酒蔵は減り、十年ごとにさらに減っている。だが残った蔵は、1990年代以降、それまでの一世紀よりも大きく変わった——純米や吟醸へ、ひだほまれや揖斐の誉のような地元の米へ、伝統の酒母へ、小さな仕込みへ、そしていくつかの蔵では四季醸造へ。2024年12月、ユネスコは「日本の伝統的酒造り」を無形文化遺産に記載した。これは小さな蔵が海外に出る助けになるかもしれない。<a href=\"sake.html\">岐阜の酒</a>を参照。",
          zh:"隨著日本人喝的清酒越來越少，酒藏也比過去更少，而且每十年都在減少。但留下來的酒藏，自 1990 年代以來的改變比之前一個世紀還大：轉向純米與吟釀，使用飛驒譽、揖斐之譽等在地米，採用傳統酒母、小批量釀造，部分酒藏更全年釀造。2024 年 12 月，聯合國教科文組織將「日本傳統麴菌釀酒的知識與技藝」列入非物質文化遺產，這或許能幫助小酒藏走向海外。見<a href=\"sake.html\">岐阜的酒</a>。" } }
      ]
    },

    { t:"section", id:"ways",
      title:{ en:"Roads, rails and science", ja:"道と鉄道と科学", zh:"道路、鐵路與科學" }, jp:"交通 · 研究",
      body:[
        { t:"p", text:{
          en:"A station of the Chūō Shinkansen maglev line between Tokyo and Nagoya is under construction near Nakatsugawa, a few kilometres from the Nakasendō; the opening date is not yet fixed, and the 2030s are the earliest now spoken of. When it opens, eastern Mino will be about an hour from Tokyo. Under the mountains of Kamioka, where Kamiokande and Super-Kamiokande made Nobel-winning discoveries, the far larger Hyper-Kamiokande is being built. And tourism, which has grown fastest in the Hida mountains since the expressway arrived in 2008, is now managed as well as encouraged, most visibly at Shirakawa-gō.",
          ja:"東京と名古屋を結ぶ中央新幹線（リニア）の駅が、中山道から数キロの中津川の近くに建設されている。開業の年はまだ定まらず、いま語られる最も早い時期は2030年代である。開業すれば、東美濃は東京から一時間ほどになる。カミオカンデとスーパーカミオカンデがノーベル賞に結びつく発見をした神岡の山の下では、はるかに大きなハイパーカミオカンデの建設が進む。そして2008年に高速道路が通じてから飛騨の山で最も速く伸びた観光は、いまや促すと同時に管理するものとなった。それが最もよく見えるのが白川郷である。",
          zh:"連接東京與名古屋的中央新幹線（磁浮）車站，正在距中山道數公里的中津川附近興建；開業日期尚未確定，目前所說最早的時間是 2030 年代。一旦開通，東美濃到東京將只需約一小時。在神岡的山底下——神岡探測器與超級神岡探測器曾在此做出獲得諾貝爾獎的發現——規模大得多的頂級神岡探測器正在建造。而自 2008 年高速公路通達以來在飛驒山區成長最快的觀光，如今在鼓勵之外也需要管理，白川鄉就是最明顯的例子。" } }
      ]
    },

    { t:"section", id:"climate",
      title:{ en:"Heat, snow and water", ja:"暑さと雪と水", zh:"酷暑、大雪與水" }, jp:"気候",
      body:[
        { t:"p", text:{
          en:"The basins of southern Mino already hold national heat records — Tajimi in 2007, Kanayama in Gero in 2018 — and the summers are getting hotter; the snow of Hida, on which the gasshō roofs, the ski slopes and the water of the rivers all depend, is becoming less reliable from year to year. The three rivers, tamed over three centuries of levees and works, remain the prefecture's oldest risk, and the flood of 1976 is within living memory. None of this is new to a prefecture whose landscape has always been made by water; the question for the next twenty years is how quickly it changes. See <a href=\"climate.html\">Heat &amp; Snow</a> and <a href=\"chisui.html\">Taming the Three Rivers</a>.",
          ja:"美濃の南の盆地はすでに国内の最高気温の記録を持ち——2007年の多治見、2018年の下呂市金山——夏はさらに暑くなっている。合掌の屋根も、スキー場も、川の水もそれに頼る飛騨の雪は、年ごとに当てにしにくくなっている。三百年の堤と工事で馴らされた三つの川は、いまも県の最も古い危険であり、1976年の水害はまだ人々の記憶のうちにある。水によって形づくられてきた県にとって、どれも新しいことではない。これからの二十年の問いは、それがどれほど速く変わるかである。<a href=\"climate.html\">暑さと雪</a>と<a href=\"chisui.html\">木曽三川の治水</a>を参照。",
          zh:"美濃南部的盆地已保有日本的高溫紀錄——2007 年的多治見、2018 年下呂市的金山——而夏天正變得更熱；飛驒的雪——合掌屋頂、滑雪場與河川之水都仰賴它——一年比一年難以預期。歷經三百年堤防與工程馴服的三條河，至今仍是全縣最古老的風險，1976 年的水災仍在人們的記憶之中。對一個地景一向由水塑造的縣來說，這些都不新鮮；未來二十年的問題，是變化來得有多快。見<a href=\"climate.html\">酷暑與大雪</a>與<a href=\"chisui.html\">木曾三川的治水</a>。" } }
      ]
    },

    { t:"note", label:{ en:"On looking ahead", ja:"先を見ることについて", zh:"關於展望" }, text:{
      en:"Everything on this page that is in the past or present tense is documented on the pages it links to. Everything about the future is an expectation, and a book written in 2026 will be wrong about some of it.",
      ja:"この頁のうち、過去や現在の形で書いたことは、リンク先の頁に記録がある。未来についてのことはすべて見込みであり、2026年に書かれた本はそのいくつかについて誤るだろう。",
      zh:"本頁以過去式或現在式陳述的一切，皆記載於所連結的頁面。凡關於未來者皆屬預期，而一本寫於 2026 年的書，必定會在其中某些地方出錯。" } },

    { t:"related", items:[
      { href:"economy.html", why:{ en:"The industries as they are now.", ja:"いまの産業。", zh:"產業的現況。" } },
      { href:"logging.html", why:{ en:"The forest question in detail.", ja:"森の問いを詳しく。", zh:"詳述森林的問題。" } },
      { href:"modern.html", why:{ en:"How the present came about.", ja:"現在に至る道。", zh:"現在是如何形成的。" } },
      { href:"chronology.html", why:{ en:"Everything in order.", ja:"すべてを順に。", zh:"依序排列的一切。" } }
    ] }
  ]
};

/* ---- ---------------------------------------- woodfuture */
GIFU.pages["woodfuture"] = { kicker:{ en:"Reference · 04", ja:"資料 · 04", zh:"資料 · 04" },
  title:{ en:"The Next Twenty Years for Wood", ja:"木のこれからの二十年", zh:"木材的未來二十年" },
  jp:"これから",
  lede:{
    en:"Gifu's forests, sawmills and workshops are entering a period of change that has been visible for a long time and can no longer be postponed. The plantations of the 1950s–70s are reaching an age at which they must be either harvested and replanted or deliberately left to grow old; the villages that tend them are losing half their people; machines and data are taking over work that was done by hand; and a new generation of laws and taxes, passed between 2018 and 2024, is beginning to shape who manages the forests and who pays. This page gathers these threads, sets out what the official projections say, and sketches three ways the next twenty years could go.",
    ja:"岐阜の森、製材所、工房は、ずっと前から見えていて、もう先送りできない変化の時期に入りつつある。一九五〇〜七〇年代に植えた人工林は、伐って植え直すか、意図して老いるまで育てるかを決めねばならない齢に達し、その森を手入れしてきた集落は人口の半分を失いつつあり、手でしてきた仕事を機械とデータが引き受けはじめ、二〇一八年から二〇二四年にかけてできた新しい法律と税が、誰が森を管理し誰が費用を払うのかを形づくりはじめている。この頁は、これらの糸を束ね、公式の推計が何を示しているかを述べ、これからの二十年がたどりうる三つの筋書きを描く。",
    zh:"岐阜的森林、製材廠與工房，正進入一段早已可見、如今再也無法拖延的變動期。1950–70 年代種下的人工林，已到了必須決定是伐採後重新造林、還是刻意讓它長成老林的樹齡；照料這些森林的村落正失去一半人口；機械與數據開始接手過去靠雙手完成的工作；而 2018 年至 2024 年間通過的一批新法律與新稅，正開始決定由誰來經營森林、由誰來付錢。本頁把這些線索整理在一起，說明官方推估的內容，並勾勒未來二十年可能的三種走向。" },
  body:[
    { t:"section",
      id:"forests",
      title:{ en:"Forests come of age", ja:"人工林の成熟", zh:"人工林步入成熟" },
      jp:"齢級構成",
      body:[
        { t:"p",
          text:{
            en:"Japan has about 25 million hectares of forest, an area that has barely changed in sixty years. What has changed is what stands on it. About ten million hectares — some two-fifths of the total — are plantations, most of them planted with sugi and hinoki in the two decades of “expansion afforestation” after the war. Because so much was planted in so short a time, the plantations have aged together, like a population born in a baby boom. According to the Forestry Agency, about six-tenths of Japan's planted forest is now more than fifty years old, the age at which a sugi stand was traditionally clear-felled. The volume of wood standing in Japanese forests rose from about 1.89 billion cubic metres in 1966 to about 5.56 billion in 2022, almost three times as much. Japan has never had more timber than it has today, and has rarely used so little of it.",
            ja:"日本には約二千五百万ヘクタールの森があり、その面積は六十年間ほとんど変わっていない。変わったのは、その上に立っているものである。約一千万ヘクタール、全体のおよそ五分の二が人工林で、その大半は戦後の「拡大造林」の二十年間にスギとヒノキが植えられたものだ。短いあいだに大量に植えたため、人工林はベビーブームに生まれた世代のように、そろって年をとってきた。林野庁によれば、日本の人工林のおよそ六割はすでに五十年生を超えている。五十年は、かつてスギの林を皆伐する目安とされた齢である。日本の森に立つ木の体積は、一九六六年の約十八億九千万立方メートルから二〇二二年には約五十五億六千万立方メートルへと、ほぼ三倍に増えた。日本がいまほど多くの木材をもったことはなく、それをこれほど使わずにいたことも少ない。",
            zh:"日本約有 2,500 萬公頃森林，這個面積六十年來幾乎沒有改變；改變的是林地上站著的東西。其中約 1,000 萬公頃、約占五分之二為人工林，大多是戰後「擴大造林」的二十年間種下的柳杉與扁柏。由於在短時間內大量種植，這些人工林就像嬰兒潮世代一樣一起變老。根據林野廳，日本人工林約六成已超過 50 年生——過去柳杉林通常在這個樹齡皆伐。日本森林的立木蓄積量，從 1966 年約 18.9 億立方公尺增加到 2022 年約 55.6 億立方公尺，將近三倍。日本從未擁有像今天這麼多的木材，也很少像今天這樣用得這麼少。" } },
        { t:"p",
          text:{
            en:"Gifu shows the same shape in sharper form. The prefecture has about 385,000 hectares of planted forest, the sixth largest area in Japan. In its fourth forest plan the prefecture reported that the largest age class of its plantations in fiscal 2020 was 56–60 years; left alone, that peak will be 76–80 years old in 2040. The trees are slowing down as they age: the prefecture's estimate of the annual growth of its forests fell from about 2.04 million cubic metres in FY2016 to about 1.48 million in FY2021. Older forests hold more timber and are often more beautiful, but they add carbon more slowly, so the forest “sink” that Japan counts towards its climate targets is shrinking (see <a href=\"carbon.html\">Forests &amp; Carbon</a>). Sooner or later every owner of a mature stand faces the same choice: harvest and replant, which costs money that the timber price may not repay, or keep growing large trees for a market that may or may not want them (see <a href=\"silviculture.html\">Planting &amp; Tending</a>).",
            ja:"岐阜では同じ形がさらにくっきりと現れる。県の人工林はおよそ三十八万五千ヘクタールで、全国六位の広さである。県は第四期の森林づくり基本計画で、二〇二〇年度の人工林の齢級の山は五十六〜六十年生にあると報告した。このままなら、その山は二〇四〇年には七十六〜八十年生になる。木は年をとるにつれて成長が遅くなる。県の推計による森の年間成長量は、二〇一六年度の約二百四万立方メートルから二〇二一年度には約百四十八万立方メートルに下がった。年をとった森はより多くの木材を蓄え、しばしばより美しいが、炭素を加える速さは落ちる。そのため、日本が気候の目標に数える森の「吸収源」は小さくなりつつある（<a href=\"carbon.html\">森と炭素</a>を参照）。成熟した林の所有者は、遅かれ早かれ同じ選択に直面する。伐って植え直すか——木材価格では回収できないかもしれない費用がかかる——、あるいは大きな木を求めるかどうかわからない市場に向けて、太い木を育てつづけるか（<a href=\"silviculture.html\">植えて育てる</a>を参照）。",
            zh:"岐阜呈現同樣的形狀，而且更加鮮明。全縣人工林約 38.5 萬公頃，面積居全國第六。縣在第四期森林營造基本計畫中指出，2020 年度人工林齡級的高峰落在 56–60 年生；若不處理，到 2040 年這個高峰就會是 76–80 年生。樹木隨年齡增長而放慢：縣估計的森林年生長量，從 2016 年度約 204 萬立方公尺降到 2021 年度約 148 萬立方公尺。老林蓄積更多木材，往往也更美，但增加碳的速度變慢，因此日本計入氣候目標的森林「碳匯」正在縮小（見<a href=\"carbon.html\">森林與碳</a>）。成熟林的林主遲早都要面對同一個選擇：伐採後重新造林——所需費用未必能靠木材價格回收；或是繼續培育大徑木，賣給一個不知是否需要它們的市場（見<a href=\"silviculture.html\">造林與撫育</a>）。" } },
        { t:"p",
          text:{
            en:"The national government's answer is to use more. The Forest and Forestry Basic Plan adopted in June 2021 set a target of supplying 42 million cubic metres of domestic wood a year by 2030. In 2024 Japan used about 34.8 million cubic metres of domestic wood, and its wood self-sufficiency rate was 42.5 per cent — more than double the low of 18.8 per cent in 2002, but still short of the goal. A successor plan prepared for adoption in 2026 keeps the 42-million figure but moves the target year to 2035, and lowers the expected total demand from 87 to 85 million cubic metres, in recognition of a shrinking population and fewer new houses; it would raise self-sufficiency to about 49 per cent. The arithmetic is simple: to use its forests without exhausting them, Japan would have to harvest more than it does now and replant what it harvests. Whether there will be buyers for the wood, and people to cut and plant it, is the subject of the rest of this page.",
            ja:"国の答えは、もっと使うことである。二〇二一年六月に閣議決定された森林・林業基本計画は、二〇三〇年までに国産材の供給を年四千二百万立方メートルにする目標を掲げた。二〇二四年、日本の国産材の利用量は約三千四百八十万立方メートルで、木材自給率は四二・五パーセントだった。二〇〇二年の最低の一八・八パーセントの二倍を超えるが、目標にはまだ届かない。二〇二六年の決定に向けて準備された次の計画は、四千二百万という数字を残しつつ目標年を二〇三五年に移し、人口の減少と新設住宅の減少を踏まえて、総需要の見通しを八千七百万から八千五百万立方メートルに下げた。自給率はおよそ四九パーセントに上がる見込みである。計算は単純だ。森を使い尽くさずに使うには、いまより多く伐り、伐った分を植え直さねばならない。その木材に買い手がいるか、それを伐り植える人がいるか——それがこの頁の残りの主題である。",
            zh:"中央政府的答案是：多用一點。2021 年 6 月通過的《森林・林業基本計畫》，設定到 2030 年國產材年供給量 4,200 萬立方公尺的目標。2024 年，日本使用的國產材約 3,480 萬立方公尺，木材自給率為 42.5%——是 2002 年最低點 18.8% 的兩倍多，但仍未達標。為 2026 年通過而準備的下一期計畫保留了 4,200 萬這個數字，但把目標年延到 2035 年，並因應人口減少與新建住宅減少，將預估總需求由 8,700 萬下修為 8,500 萬立方公尺；自給率預計可提高到約 49%。算術很簡單：要使用森林而不耗盡它，日本必須比現在伐得更多，並把伐掉的補種回去。至於這些木材有沒有買家、有沒有人去伐、去種，就是本頁其餘部分的主題。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Planted forest over 50 years", ja:"五十年生を超える人工林", zh:"超過 50 年生的人工林" },
              v:{ en:"≈ 60%", ja:"約6割", zh:"約 60%" },
              d:{ en:"Japan, Forestry Agency", ja:"全国、林野庁", zh:"全國，林野廳" } },
            { k:{ en:"Growing stock", ja:"森林蓄積", zh:"立木蓄積" },
              v:{ en:"5.56 bn m³", ja:"55.6億m³", zh:"55.6 億 m³" },
              d:{ en:"Japan, 2022 (1.89 bn in 1966)", ja:"全国、二〇二二年（一九六六年は18.9億）", zh:"全國，2022 年（1966 年為 18.9 億）" } },
            { k:{ en:"Gifu's plantation peak", ja:"岐阜の人工林の山", zh:"岐阜人工林高峰" },
              v:{ en:"56–60 yrs", ja:"56〜60年生", zh:"56–60 年生" },
              d:{ en:"Largest age class, FY2020", ja:"最大の齢級、二〇二〇年度", zh:"最大齡級，2020 年度" } },
            { k:{ en:"Domestic wood target", ja:"国産材の目標", zh:"國產材目標" },
              v:{ en:"42 m m³", ja:"4,200万m³", zh:"4,200 萬 m³" },
              d:{ en:"By 2030 (2021 plan), then 2035", ja:"二〇三〇年（二〇二一年の計画）、次いで二〇三五年", zh:"2030 年（2021 年計畫），後延至 2035 年" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, State of Forest Resources (2022) and Forest and Forestry Basic Plan (2021); Forestry Agency, wood supply and demand 2024; Gifu Prefecture, Fourth Basic Plan for Forest Development and “The state of forestry and the wood industry in Gifu”; Rinsei News on the draft 2026 basic plan.",
            ja:"出典：林野庁「森林資源の現況」（二〇二二年）、「森林・林業基本計画」（二〇二一年）、二〇二四年木材需給表。岐阜県「第四期岐阜県森林づくり基本計画」「岐阜県の林業・木材産業の現状」。林政ニュース（二〇二六年の新計画案について）。",
            zh:"資料來源：林野廳《森林資源現況》（2022 年）、《森林・林業基本計畫》（2021 年）、2024 年木材供需表；岐阜縣《第四期岐阜縣森林營造基本計畫》《岐阜縣林業與木材產業現況》；《林政新聞》關於 2026 年新計畫草案的報導。" } }
      ] },
    { t:"section",
      id:"people",
      title:{ en:"Fewer hands", ja:"減っていく人の手", zh:"越來越少的人手" },
      jp:"人口減少と担い手",
      body:[
        { t:"p",
          text:{
            en:"The forests will change more slowly than the people who live among them. In 2023 the National Institute of Population and Social Security Research (IPSS) published projections for every municipality in Japan to 2050. They assume no dramatic change in birth rates or migration, and they are not destiny — but they are the numbers on which every local government plans. For Gifu they project a fall from about 1.98 million people in 2020 to about 1.47 million in 2050, a quarter fewer. The forest districts fare far worse. Hida city and Gero are projected to lose half their people; Takayama, the largest city in the Hida region, over a third. The small forestry towns and villages of the Kamo and Tōnō uplands fall furthest: Shirakawa town, home of a timber market for Tōnō hinoki, from 7,417 to about 3,100; Higashishirakawa village, set among hinoki plantations, from 2,017 to about 900. By 2050 more than half the people of Hida city and Gero, and nearly two-thirds of those in Shirakawa town, are projected to be 65 or older.",
            ja:"森は、その中で暮らす人々よりもゆっくりと変わる。二〇二三年、国立社会保障・人口問題研究所（社人研）は、日本のすべての市区町村について二〇五〇年までの将来推計人口を公表した。出生率や人の移動に劇的な変化がないことを前提にしたもので、決まった運命ではない。しかし、どの自治体もこの数字をもとに計画を立てる。岐阜県については、二〇二〇年の約百九十八万人から二〇五〇年には約百四十七万人へ、四分の一減ると推計する。森の地域はずっと厳しい。飛騨市と下呂市は人口の半分を失い、飛騨地域最大の都市である高山市も三分の一以上を失うと見込まれる。最も大きく減るのは、加茂や東濃の山あいの小さな林業の町村である。東濃ヒノキの原木市場がある白川町は七千四百十七人から約三千百人へ、ヒノキの人工林に囲まれた東白川村は二千十七人から約九百人へ。二〇五〇年には、飛騨市と下呂市では住民の半分以上が、白川町では三分の二近くが六十五歳以上になると推計されている。",
            zh:"森林的變化，會比住在其中的人慢得多。2023 年，國立社會保障・人口問題研究所（社人研）公布了日本每個市町村到 2050 年的將來推估人口。它假設出生率與人口遷移不會劇烈變化，並非注定的命運——但每個地方政府都依這些數字做規劃。對岐阜縣，推估人口將從 2020 年約 198 萬人降到 2050 年約 147 萬人，少了四分之一。森林地區的情況嚴重得多：飛驒市與下呂市預計失去一半人口；飛驒地區最大城市高山市也將減少三分之一以上。減幅最大的是加茂與東濃山區的小型林業町村：擁有東濃扁柏原木市場的白川町，將從 7,417 人減至約 3,100 人；被扁柏人工林環繞的東白川村，從 2,017 人減至約 900 人。推估到 2050 年，飛驒市與下呂市一半以上的居民、白川町近三分之二的居民將是 65 歲以上。" } },
        { t:"figure",
          caption:{
            en:"Projected change in population between 2020 (census) and 2050, selected forest municipalities of Gifu and the prefecture as a whole. Source: National Institute of Population and Social Security Research, Regional Population Projections for Japan (2023).",
            ja:"二〇二〇年（国勢調査）から二〇五〇年までの人口の増減の推計。岐阜県の主な森の市町村と県全体。出典：国立社会保障・人口問題研究所「日本の地域別将来推計人口（令和五（二〇二三）年推計）」。",
            zh:"2020 年（人口普查）至 2050 年的人口增減推估：岐阜縣主要森林市町村與全縣。資料來源：國立社會保障・人口問題研究所《日本地域別將來推估人口（2023 年推估）》。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Population lost by 2050", ja:"二〇五〇年までに減る人口", zh:"至 2050 年減少的人口" }, labelW:250, rowH:28, max:65,
            items:[
              { n:{ en:"Shirakawa town (Kamo)", ja:"白川町（加茂郡）", zh:"白川町（加茂郡）" }, v:58.2, lab:"−58%", f:"#EEE1DF" },
              { n:{ en:"Higashishirakawa village", ja:"東白川村", zh:"東白川村" }, v:54.8, lab:"−55%", f:"#EEE1DF" },
              { n:{ en:"Gero", ja:"下呂市", zh:"下呂市" }, v:50.2, lab:"−50%", f:"#EDE5D2" },
              { n:{ en:"Hida city", ja:"飛騨市", zh:"飛驒市" }, v:50.0, lab:"−50%", f:"#EDE5D2" },
              { n:{ en:"Gujō", ja:"郡上市", zh:"郡上市" }, v:44.2, lab:"−44%", f:"#EDE5D2" },
              { n:{ en:"Shirakawa village (Ōno)", ja:"白川村（大野郡）", zh:"白川村（大野郡）" }, v:43.0, lab:"−43%", f:"#EDE5D2" },
              { n:{ en:"Ena", ja:"恵那市", zh:"惠那市" }, v:40.2, lab:"−40%", f:"#E6E4E0" },
              { n:{ en:"Takayama", ja:"高山市", zh:"高山市" }, v:36.2, lab:"−36%", f:"#E6E4E0" },
              { n:{ en:"Nakatsugawa", ja:"中津川市", zh:"中津川市" }, v:28.1, lab:"−28%", f:"#E6E4E0" },
              { n:{ en:"Gifu Prefecture", ja:"岐阜県全体", zh:"岐阜縣全體" }, v:25.8, lab:"−26%", f:"#E0E6DB" }
            ] }); } },
        { t:"p",
          text:{
            en:"The forestry workforce has already been through a contraction of this scale. Japan's census counted 146,321 forestry workers in 1980 and 43,710 in 2020, a fall of seventy per cent; the share aged 65 and over rose from 8 to 25 per cent. The decline has slowed since the national Green Employment programme began in 2003 — it lifted new entrants from about 2,200 a year to about 3,300, and the share of workers under 35 has risen — but it has not stopped. In Gifu the number of forest technicians fell from 2,524 in 1989 to about 940 in 2023, against a prefectural target of 1,140 by FY2026 and 80 new recruits a year. In 2024 forestry and the wood industry were added to the fields open to foreign workers under the Specified Skilled Worker visa. How newcomers are trained is described on <a href=\"learning.html\">How People Learn It</a>; the daily work, and its dangers, on <a href=\"workers.html\">The People of the Forest</a>.",
            ja:"林業の働き手は、すでにこの規模の縮小をくぐってきた。国勢調査は一九八〇年に十四万六千三百二十一人の林業就業者を数え、二〇二〇年には四万三千七百十人だった。七割の減少である。六十五歳以上の割合は八パーセントから二十五パーセントに上がった。二〇〇三年に国の「緑の雇用」事業が始まってから減り方は緩やかになった——新規就業者は年約二千二百人から約三千三百人に増え、三十五歳未満の割合も上がった——が、止まってはいない。岐阜県の林業技術者は一九八九年の二千五百二十四人から二〇二三年には約九百四十人に減った。県の目標は二〇二六年度までに千百四十人、毎年八十人の新規確保である。二〇二四年には、林業と木材産業が特定技能の在留資格で外国人が働ける分野に加えられた。新しく入る人がどう育てられるかは<a href=\"learning.html\">人はいかに学ぶか</a>に、日々の仕事とその危険は<a href=\"workers.html\">山で働く人々</a>に述べる。",
            zh:"林業勞動力早已經歷過這種規模的萎縮。日本人口普查在 1980 年統計到 146,321 名林業從業者，2020 年只剩 43,710 人，減少七成；65 歲以上的比例由 8% 升到 25%。自 2003 年國家「綠色僱用」計畫開始後，減少速度放緩——每年新進人數由約 2,200 人增至約 3,300 人，35 歲以下的比例也上升——但並未止住。岐阜縣的林業技術人員由 1989 年的 2,524 人降到 2023 年約 940 人，而縣的目標是 2026 年度前達到 1,140 人、每年招募 80 名新人。2024 年，林業與木材產業被納入「特定技能」簽證開放外國勞工的領域。新人如何養成，見<a href=\"learning.html\">人們如何學會它</a>；日常工作及其危險，見<a href=\"workers.html\">山林中的工作者</a>。" } },
        { t:"figure",
          caption:{
            en:"Forestry workers in Japan at each census, 1980–2020, in thousands. The share aged 65 or over was 8% in 1980, 30% in 2000 and 25% in 2020. Source: Statistics Bureau, Population Census, as compiled by the Forestry Agency.",
            ja:"国勢調査ごとの日本の林業就業者数（一九八〇〜二〇二〇年、千人）。六十五歳以上の割合は一九八〇年に8％、二〇〇〇年に30％、二〇二〇年に25％。出典：総務省「国勢調査」（林野庁の集計による）。",
            zh:"日本歷次人口普查的林業從業者人數（1980–2020 年，千人）。65 歲以上比例：1980 年 8%、2000 年 30%、2020 年 25%。資料來源：總務省《人口普查》，林野廳彙整。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Forestry workers at each census", ja:"国勢調査の林業就業者", zh:"歷次普查的林業從業者" }, unit:{ en:"thousand people", ja:"千人", zh:"千人" }, tick:40, max:160, h:170, hl:["2020"],
            items:[
              { x:"1980", v:146.3 }, { x:"1985", v:126.3 }, { x:"1990", v:100.5 }, { x:"1995", v:81.6 },
              { x:"2000", v:67.6 }, { x:"2005", v:52.2 }, { x:"2010", v:51.2 }, { x:"2015", v:45.4 }, { x:"2020", v:43.7 }
            ] }); } },
        { t:"p",
          text:{
            en:"The owners are ageing too. Most private forest in Japan belongs to families holding a few hectares each, and many of those families now live in cities, a generation or two removed from the land. Boundaries are forgotten, heirs are hard to trace, and some plots have never been re-registered since the owner's death. Two national changes are meant to help. Since April 2023 an heir who does not want inherited land can, under conditions, hand it to the state; since April 2024 registering an inheritance of land has been compulsory. When the Tōkai Local Finance Bureau surveyed Gifu's municipalities in 2025 about their forests, the problems they named most often were a shortage of forestry workers, ageing owners and inheritance, and damage by wild animals — in that order.",
            ja:"所有者も年をとっている。日本の私有林の多くは、数ヘクタールずつをもつ家のもので、その家族の多くはいまや都市に住み、土地から一代、二代離れている。境界は忘れられ、相続人はたどりにくく、所有者の死後に登記が変えられないままの土地もある。二つの国の制度改正がこれを助けるはずである。二〇二三年四月からは、相続した土地を望まない相続人が、条件つきで国に引き渡せるようになり、二〇二四年四月からは土地の相続登記が義務になった。二〇二五年に東海財務局が岐阜県の市町村に森について尋ねたところ、最も多く挙げられた課題は、林業の担い手不足、所有者の高齢化と相続、野生動物の被害の順だった。",
            zh:"林主也在老化。日本的私有林多半屬於每戶擁有數公頃的家庭，而這些家庭如今很多住在都市，離土地已隔了一兩代。林界被遺忘，繼承人難以追查，有些土地在所有人過世後從未辦理過戶登記。兩項國家制度的改變希望能有所幫助：自 2023 年 4 月起，不想要所繼承土地的繼承人可在一定條件下將其交給國家；自 2024 年 4 月起，土地的繼承登記成為義務。2025 年東海財務局向岐阜縣各市町村調查森林問題，最常被提到的依序是：林業人手不足、林主高齡化與繼承，以及野生動物造成的損害。" } },
        { t:"tiny",
          text:{
            en:"Sources: IPSS, Regional Population Projections for Japan (2023); Forestry Agency, labour statistics and Green Employment data; Tōkai Local Finance Bureau, Gifu office, report on forest conservation in Gifu (June 2025); Gifu Prefecture, Fourth Basic Plan for Forest Development.",
            ja:"出典：国立社会保障・人口問題研究所「日本の地域別将来推計人口（令和五（二〇二三）年推計）」。林野庁 林業労働力の動向、「緑の雇用」資料。東海財務局岐阜財務事務所「岐阜県の森林を守るための取組」（二〇二五年六月）。岐阜県「第四期岐阜県森林づくり基本計画」。",
            zh:"資料來源：國立社會保障・人口問題研究所《日本地域別將來推估人口（2023 年推估）》；林野廳林業勞動力動向與「綠色僱用」資料；東海財務局岐阜財務事務所〈守護岐阜縣森林的措施〉（2025 年 6 月）；岐阜縣《第四期岐阜縣森林營造基本計畫》。" } }
      ] },
    { t:"section",
      id:"machines",
      title:{ en:"Machines and data", ja:"機械とデータ", zh:"機械與數據" },
      jp:"スマート林業",
      body:[
        { t:"p",
          text:{
            en:"If there will be fewer people, each will have to do more, and much of the Forestry Agency's hope rests on what it calls <em>smart forestry</em>. The first step is simply knowing what is there. Traditional forest registers were compiled from aerial photographs and ground plots and were often decades out of date; many owners could not say where their boundaries ran. Airborne laser scanning — lidar — changes this: a laser fired from an aircraft passes through gaps in the canopy and returns both the height of the trees and the shape of the ground beneath. From one survey a forester can count stems, estimate volume stand by stand, map slopes and streams, and plan strip roads on a screen. Drones do the same at smaller scale, and satellite positioning lets a crew find a boundary peg in a forest where no one has walked for thirty years. Prefectures and municipalities have been assembling this information into shared digital forest registers, which the Forest Management System of 2019 (see below) badly needs.",
            ja:"人が減るなら、一人ひとりがより多くをこなさねばならない。林野庁の期待の多くは、いわゆる<em>スマート林業</em>にかかっている。最初の一歩は、そこに何があるかを知ることだ。従来の森林簿は航空写真と地上の調査区からつくられ、しばしば何十年も古くなっていた。境界がどこを通っているか言えない所有者も多かった。航空レーザ計測——ライダー——がこれを変える。航空機から打ったレーザーが樹冠の隙間を抜け、木の高さと、その下の地面の形の両方を返してくる。一度の計測から、林業技術者は本数を数え、林分ごとの材積を見積もり、傾斜や沢を地図にし、画面の上で作業道を計画できる。ドローンは同じことをより小さな規模で行い、衛星測位は、三十年だれも歩いていない森で境界杭を見つけることを可能にする。県と市町村はこうした情報を共有のデジタル森林簿にまとめてきた。二〇一九年の森林経営管理制度（後述）は、これを強く必要としている。",
            zh:"人少了，每個人就得做更多，而林野廳的期望很大一部分寄託在所謂的<em>智慧林業</em>上。第一步只是弄清楚林地上有什麼。傳統的森林簿是根據航空照片與地面樣區編製的，往往過時數十年；許多林主說不出自己的林界在哪裡。空載雷射掃描——LiDAR——改變了這一切：從飛機發射的雷射穿過樹冠的縫隙，同時傳回樹高與林下地形。一次測量，林業技術人員就能計算株數、逐一林分估算材積、繪出坡度與溪流，並在螢幕上規劃作業道。無人機在較小尺度上做同樣的事；衛星定位則讓作業班能在三十年無人走過的森林裡找到界樁。縣與市町村一直在把這些資訊整合成共用的數位森林簿，而 2019 年的森林經營管理制度（見下文）正迫切需要它。" } },
        { t:"p",
          text:{
            en:"The second step is mechanisation. Since the 1990s Japanese forestry has adopted the high-performance machines of Scandinavia and central Europe — harvesters that fell, delimb and cut a tree to length in one pass, processors, forwarders and tower yarders for cable logging on steep ground — adapted to small excavator bases that can work from narrow strip roads. The next step is taking the operator out of the cab. A March 2024 report from the Forestry Agency's Forestry Innovation Hub listed machines at various stages of development: a remote-controlled machine that fells and extracts trees, then undergoing field demonstration; a remote-controlled cable yarding system on sale since FY2021; a forwarder using 3D lidar to sense its surroundings, being developed towards autonomous driving; a remote-controlled thinning machine planned for release in FY2025; and an AI system that decides where seedlings should be planted. The appeal is as much safety as productivity: felling is the cause of most fatal accidents in Japanese forestry, and a machine operated from a safe distance removes the person from the falling tree.",
            ja:"二つめの段階は機械化である。一九九〇年代から、日本の林業は北欧や中欧の高性能林業機械——一度で伐倒、枝払い、玉切りまでするハーベスタ、プロセッサ、フォワーダ、急斜面の架線集材のためのタワーヤーダ——を、狭い作業道から作業できる小型のショベル系の車体に合わせて取り入れてきた。次の段階は、運転席から人を降ろすことである。林野庁の林業イノベーションハブセンター（森ハブ）が二〇二四年三月にまとめた資料は、さまざまな開発段階の機械を挙げている。伐倒から搬出までを行う遠隔操作の機械（現地での実証中）、二〇二一年度から販売されている遠隔操作の架線集材システム、三次元ライダーで周りを感知し自動走行をめざすフォワーダ、二〇二五年度の発売を予定する遠隔操作の間伐機械、そして苗木をどこに植えるかを決めるAIのシステムである。魅力は生産性と同じくらい安全にある。日本の林業の死亡災害の大半は伐倒によるもので、離れた安全な場所から操る機械は、倒れる木のそばから人を遠ざける。",
            zh:"第二步是機械化。自 1990 年代起，日本林業引進北歐與中歐的高性能林業機械——一次完成伐倒、打枝與造材的伐木歸堆機（harvester）、造材機、集材車，以及在陡坡進行架空索道集材的塔式集材機——並改裝在能從狹窄作業道上作業的小型挖土機底盤上。下一步是讓操作員離開駕駛座。林野廳「林業創新樞紐中心」2024 年 3 月的報告，列出處於不同開發階段的機械：一台能從伐倒做到搬出的遙控機械（正在現地實證）；自 2021 年度起販售的遙控架空索道集材系統；以 3D LiDAR 感測周遭、朝自動駕駛發展的集材車；預定 2025 年度上市的遙控疏伐機；以及決定苗木該種在哪裡的 AI 系統。它們的吸引力不只在生產力，也在安全：日本林業的死亡事故大多源於伐倒，而從安全距離外操作的機械，能讓人遠離倒下的樹。" } },
        { t:"p",
          text:{
            en:"Machines have limits. They need roads, and Gifu's steepest slopes will always be worked by cable or by hand. They are expensive, and a small cooperative with a handful of crews must keep them busy to pay for them. They demand new skills — reading data, maintaining hydraulics, planning roads that will not wash out in the next storm — which is why forestry schools now teach drone surveying and machine operation alongside chainsaw work. Further down the chain, sawmills and furniture factories are going the same way: most Japanese house frames are now cut in computer-controlled precut plants, and in Hida city the broadleaf company Hidakuma has worked with an AI-controlled kiln to shorten the drying of small-diameter hardwoods from about twelve months to about three. In 2023 Hida Sangyō opened a factory in Okuhida's Tochio hot-spring district that dries timber with geothermal heat.",
            ja:"機械には限界がある。道が要り、岐阜の最も急な斜面は、これからも架線か人の手で扱われるだろう。高価で、数班しかない小さな森林組合は、元をとるために機械を働かせつづけねばならない。新しい技能——データを読むこと、油圧を整備すること、次の豪雨で崩れない道を計画すること——も求める。だからいまの林業の学校は、チェーンソーの作業と並べてドローンの測量と機械の操作を教える。流れの下手でも、製材所と家具工場が同じ道をたどっている。日本の住宅の骨組みの大半はいまではコンピュータ制御のプレカット工場で刻まれ、飛騨市では広葉樹の会社ヒダクマが、AIで制御する乾燥機を使って、小径の広葉樹の乾燥をおよそ十二か月から三か月ほどに縮める取り組みをしてきた。二〇二三年には飛騨産業が、奥飛騨の栃尾温泉の地に、地熱で木材を乾かす工場を開いた。",
            zh:"機械有其極限。它們需要道路，而岐阜最陡的坡地將永遠只能靠索道或人力作業。機械昂貴，只有幾個作業班的小型森林組合必須讓它們持續運轉才付得起。機械也要求新的技能——判讀數據、保養油壓系統、規劃下次豪雨不會沖垮的道路——因此今天的林業學校在教鏈鋸作業的同時，也教無人機測量與機械操作。產業鏈下游的製材廠與家具工廠也走在同一條路上：日本大多數住宅的骨架如今都在電腦控制的預切工廠裡加工；在飛驒市，闊葉樹公司 Hidakuma 與 AI 控制的乾燥窯合作，把小徑闊葉材的乾燥時間從約十二個月縮短到約三個月。2023 年，飛驒產業在奧飛驒栃尾溫泉一帶開設了以地熱乾燥木材的工廠。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Forestry Innovation Hub Centre, “Towards automation and remote operation of forestry machines” (15 March 2024); Ministry of the Environment, report on Hidakuma; Hida Sangyō company history.",
            ja:"出典：林野庁 林業イノベーションハブセンター「林業機械の自動化・遠隔操作化に向けて」（二〇二四年三月十五日）。環境省（ヒダクマに関する報告）。飛騨産業 沿革。",
            zh:"資料來源：林野廳林業創新樞紐中心〈邁向林業機械的自動化與遙控化〉（2024 年 3 月 15 日）；環境省關於 Hidakuma 的報告；飛驒產業公司沿革。" } }
      ] },
    { t:"section",
      id:"rules",
      title:{ en:"New rules, new money", ja:"新しい制度と財源", zh:"新制度與新財源" },
      jp:"法と税",
      body:[
        { t:"p",
          text:{
            en:"Between 2018 and 2024 Japan put in place more new forest policy than in the previous half-century. Most of it will only show its effects in the coming twenty years, and several parts of it come up for review in Gifu around 2026–2027. The main pieces are summarised here; the details are on <a href=\"policy.html\">Forest Law &amp; Policy</a> and <a href=\"woodfirst.html\">Putting Wood to Use</a>.",
            ja:"二〇一八年から二〇二四年にかけて、日本はそれまでの半世紀より多くの新しい森林政策を整えた。その大半は、これからの二十年でようやく効果を見せる。いくつかは、岐阜では二〇二六〜二〇二七年ごろに見直しの時期を迎える。主なものをここにまとめる。詳しくは<a href=\"policy.html\">森林の法と政策</a>と<a href=\"woodfirst.html\">木づかい</a>を参照。",
            zh:"2018 年至 2024 年間，日本建立的森林新政策比過去半個世紀還多。其中大部分要到未來二十年才會顯現效果，有幾項在岐阜也將在 2026–2027 年前後面臨檢討。以下摘要主要項目；細節見<a href=\"policy.html\">森林法規與政策</a>與<a href=\"woodfirst.html\">用木之道</a>。" } },
        { t:"defs",
          items:[
            { term:{ en:"Forest Management System (2019)", ja:"森林経営管理制度（二〇一九年）", zh:"森林經營管理制度（2019 年）" },
              jp:"森林経営管理法",
              def:{
                en:"In force from April 2019. Municipalities ask owners of unmanaged private forests what they intend; where owners cannot manage, the municipality can take over the management rights and pass forests fit for timber production to capable forestry businesses, managing the rest itself. Its success depends on accurate registers and on municipal staff, which small towns lack.",
                ja:"二〇一九年四月施行。市町村が、手入れされていない私有林の所有者に意向を尋ね、所有者が管理できない場合は経営管理権を引き受け、木材生産に向く森は意欲と能力のある林業経営者に再委託し、残りは自ら管理する。成否は正確な台帳と市町村の職員にかかっており、小さな町村にはそれが足りない。",
                zh:"2019 年 4 月施行。市町村向未經營的私有林林主詢問意向；林主無力經營時，市町村可接手經營管理權，把適合木材生產的森林再委託給有能力的林業經營者，其餘由市町村自行管理。成敗取決於準確的林籍資料與市町村人力，而小町村正缺這些。" } },
            { term:{
                en:"Forest environment taxes (FY2019 / FY2024)",
                ja:"森林環境税・譲与税（二〇一九年度／二〇二四年度）",
                zh:"森林環境稅與讓與稅（2019 年度／2024 年度）" },
              jp:"森林環境税",
              def:{
                en:"A transfer to municipalities and prefectures began in FY2019; since FY2024 every resident has paid ¥1,000 a year to fund it. Critics pointed out that much of the early money sat unspent and that the allocation, partly by population, favoured cities; the formula was shifted towards forest area from FY2024. Gifu also levies its own forest and environment tax of ¥1,000 per resident, introduced in 2012 and extended to March 2027.",
                ja:"市町村と都道府県への譲与は二〇一九年度に始まり、二〇二四年度からはすべての住民が年千円を払ってその財源とする。初期の資金の多くが使われずに積み立てられたこと、配分の一部が人口によるため都市に有利なことが批判され、二〇二四年度から配分は森林の面積に重きを移した。岐阜県は、これとは別に、二〇一二年に導入し二〇二七年三月まで延長した独自の森林・環境税（住民一人年千円）を課している。",
                zh:"對市町村與都道府縣的讓與自 2019 年度開始；自 2024 年度起，每位居民每年繳納 1,000 日圓作為財源。批評者指出，初期許多經費被存起來未使用，而部分按人口分配的方式有利於都市；自 2024 年度起，分配公式轉而偏重森林面積。岐阜縣另課徵自己的森林・環境稅（每位居民每年 1,000 日圓），2012 年開徵，已延長至 2027 年 3 月。" } },
            { term:{ en:"Wood use in all buildings (2021)", ja:"すべての建築物での木材利用（二〇二一年）", zh:"所有建築使用木材（2021 年）" },
              jp:"都市の木造化推進法",
              def:{
                en:"The 2010 law promoting wood in public buildings was revised and renamed in 2021 as a law for the use of wood in buildings to help achieve a decarbonised society. In force from 1 October 2021, it covers private buildings as well, and lets companies sign wood-use agreements with the state or local governments; October became wood-use month.",
                ja:"二〇一〇年の公共建築物の木材利用を促す法律は、二〇二一年に改正され、脱炭素社会の実現に資する建築物等における木材の利用を促す法律と改められた。二〇二一年十月一日に施行され、民間の建築物も対象とし、企業が国や自治体と建築物木材利用促進協定を結べるようにした。十月は木材利用促進月間になった。",
                zh:"2010 年促進公共建築使用木材的法律，於 2021 年修正並更名為「促進建築物使用木材以實現脫碳社會」的法律。2021 年 10 月 1 日施行，擴及民間建築，並讓企業可與國家或地方政府簽訂建築物木材利用促進協定；10 月成為木材利用促進月。" } },
            { term:{ en:"CLT and tall timber", ja:"CLTと中高層木造", zh:"CLT 與中高層木構造" },
              jp:"直交集成板",
              def:{
                en:"A Japanese Agricultural Standard for cross-laminated timber was set in 2013 and general design rules followed in 2016. Offices, schools and flats of four to eleven storeys have since been built in timber; an eleven-storey building completed in Yokohama in 2022 was then the tallest wholly timber-framed building in Japan. See <a href=\"engineered.html\">Engineered Wood</a>.",
                ja:"直交集成板（CLT）の日本農林規格は二〇一三年に定められ、一般的な設計法は二〇一六年に整った。以来、四〜十一階建ての事務所、学校、集合住宅が木で建てられ、二〇二二年に横浜で完成した十一階建ては、当時日本で最も高い純木造の建物だった。<a href=\"engineered.html\">エンジニアードウッド</a>を参照。",
                zh:"直交集成材（CLT）的日本農林規格於 2013 年制定，一般設計方法於 2016 年建立。此後，四至十一層的辦公室、學校與集合住宅陸續以木材興建；2022 年於橫濱完工的十一層建築，是當時日本最高的純木構造建築。見<a href=\"engineered.html\">工程木材</a>。" } },
            { term:{ en:"Sugi pollen measures (2023)", ja:"スギ花粉症対策（二〇二三年）", zh:"柳杉花粉對策（2023 年）" },
              jp:"花粉発生源対策",
              def:{
                en:"Adopted in May 2023: cut the 4.31 million hectares of pollen-producing sugi plantations by about a fifth in ten years, halve pollen output in thirty years, raise sugi felling from about 50,000 to 70,000 hectares a year, make low-pollen varieties over nine-tenths of sugi seedlings, and raise sugi demand from 12.4 to 17.1 million cubic metres. See <a href=\"sugi.html\">Sugi</a>.",
                ja:"二〇二三年五月に決定。花粉を出すスギ人工林四百三十一万ヘクタールを十年で約二割減らし、三十年で花粉の量を半分にし、スギの伐採を年約五万ヘクタールから七万ヘクタールに増やし、スギ苗木の九割以上を花粉の少ない品種にし、スギの需要を千二百四十万から千七百十万立方メートルに増やす。<a href=\"sugi.html\">スギ</a>を参照。",
                zh:"2023 年 5 月決定：十年內將會產生花粉的柳杉人工林 431 萬公頃削減約五分之一，三十年內使花粉量減半；柳杉年伐採面積由約 5 萬公頃增至 7 萬公頃；少花粉品種占柳杉苗木九成以上；柳杉需求由 1,240 萬增至 1,710 萬立方公尺。見<a href=\"sugi.html\">日本柳杉</a>。" } },
            { term:{
                en:"Gifu's fourth forest plan (FY2022–FY2026)",
                ja:"第四期岐阜県森林づくり基本計画（二〇二二〜二〇二六年度）",
                zh:"岐阜縣第四期森林營造基本計畫（2022–2026 年度）" },
              jp:"岐阜県森林づくり基本計画",
              def:{
                en:"Divides the prefecture's forests into timber-production forest (about 205,000 ha), environmental-conservation forest (about 479,000 ha), tourism and landscape forest and forest protecting daily life. Targets for FY2026 include log production of about 600,000 cubic metres, thinning of 9,600 hectares a year and 1,140 forest technicians. The plan ends in FY2026, so its successor is due from FY2027.",
                ja:"県の森林を、木材生産林（約二十万五千ヘクタール）、環境保全林（約四十七万九千ヘクタール）、観光景観林、生活保全林に分ける。二〇二六年度の目標には、素材生産量約六十万立方メートル、間伐年九千六百ヘクタール、林業技術者千百四十人がある。計画は二〇二六年度で終わるため、二〇二七年度から次の計画が始まる予定である。",
                zh:"將全縣森林劃分為木材生產林（約 20.5 萬公頃）、環境保全林（約 47.9 萬公頃）、觀光景觀林與生活保全林。2026 年度目標包括原木產量約 60 萬立方公尺、每年疏伐 9,600 公頃、林業技術人員 1,140 人。計畫於 2026 年度結束，後續計畫預定自 2027 年度開始。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, pages on the Forest Management System and the forest environment taxes; Cabinet Secretariat, sugi pollen measures (30 May 2023); Gifu Prefecture, Fourth Basic Plan for Forest Development; Seki city public relations bulletin on the Gifu forest and environment tax.",
            ja:"出典：林野庁 森林経営管理制度・森林環境税に関する頁。内閣官房「花粉症対策の全体像」（二〇二三年五月三十日）。岐阜県「第四期岐阜県森林づくり基本計画」。関市広報（清流の国ぎふ森林・環境税）。",
            zh:"資料來源：林野廳森林經營管理制度與森林環境稅相關網頁；內閣官房花粉症對策（2023 年 5 月 30 日）；岐阜縣《第四期岐阜縣森林營造基本計畫》；關市公報（岐阜縣森林・環境稅）。" } }
      ] },
    { t:"section",
      id:"risks",
      title:{ en:"Rain, pests and animals", ja:"雨と病虫害と獣", zh:"豪雨、病蟲害與野生動物" },
      jp:"気候と獣害",
      body:[
        { t:"p",
          text:{
            en:"The forests of the next twenty years will grow in a different climate. The Japan Meteorological Agency reports that downpours of 50 millimetres or more in an hour have become roughly half again as frequent since the late 1970s, and Gifu's worst recent disasters — the rains of July 2018 around Seki and the Nagara valley and of July 2020 along the Hida River near Gero — came from exactly such storms (see <a href=\"ecology.html\">Forest Ecology</a>). Steep plantations are most vulnerable in the years after clear-felling, when the roots of the old stumps have rotted and those of the new trees have not yet grown; this is one of the strongest arguments for smaller coupes and continuous cover (see <a href=\"debates.html\">Where People Disagree</a>). Warmer winters also help pests: pine wilt has been in Gifu since about 1975 and oak wilt since 1996, and while both have declined from their peaks, both can return where the climate suits the beetles that carry them.",
            ja:"これからの二十年の森は、違う気候の中で育つ。気象庁によれば、一時間に五十ミリ以上の強い雨の回数は一九七〇年代の終わりからおよそ一・五倍に増えた。岐阜の近年の最悪の災害——二〇一八年七月の関市と長良川流域の豪雨、二〇二〇年七月の下呂市付近の飛騨川沿いの豪雨——は、まさにそうした雨によるものだった（<a href=\"ecology.html\">森の生態</a>を参照）。急斜面の人工林が最も弱いのは皆伐のあとの数年で、古い切り株の根が腐り、新しい木の根がまだ育っていない時期である。これは小面積の伐採や連続被覆の林業を支持する最も強い論拠の一つである（<a href=\"debates.html\">論の分かれるところ</a>を参照）。暖かい冬は病虫害も助ける。松くい虫の被害は一九七五年ごろから、ナラ枯れは一九九六年から岐阜にあり、どちらもピークからは減ったが、媒介する甲虫に合う気候のところでは、どちらもまた戻りうる。",
            zh:"未來二十年的森林，將在不同的氣候中生長。日本氣象廳指出，一小時 50 公釐以上的強降雨次數，自 1970 年代末以來增加了約五成；而岐阜近年最嚴重的災害——2018 年 7 月關市與長良川流域的豪雨、2020 年 7 月下呂市附近飛驒川沿岸的豪雨——正是這類降雨造成的（見<a href=\"ecology.html\">森林生態</a>）。陡坡人工林在皆伐後的幾年最脆弱：舊伐根的根系已腐朽，新樹的根系尚未長成；這是支持小面積伐採與連續覆蓋林業最有力的論點之一（見<a href=\"debates.html\">意見分歧之處</a>）。較暖的冬天也有利於病蟲害：松材線蟲病約自 1975 年、橡樹枯萎病自 1996 年起出現在岐阜，兩者雖已從高峰回落，但在適合傳播媒介甲蟲的氣候下都可能捲土重來。" } },
        { t:"p",
          text:{
            en:"The animals have changed faster than the climate. Sika deer, once rare in the deep-snow districts of Hida, have spread with milder winters and fewer hunters; they eat seedlings and strip bark, so that a newly planted hectare often needs a deer fence that costs as much as the planting. In FY2024 hunters and culling teams in Gifu took 17,249 sika deer, 9,211 wild boar and 356 black bears. Bears are the most alarming change. Across Japan, 238 people were injured or killed by bears in FY2025, 13 of them fatally, the worst year on record, and sightings passed 50,000; bears live in almost every part of Gifu, and forest workers, mushroom pickers and hikers are the people most exposed. Wildlife management — how many animals to cull, who will do it as hunters age, and how to keep bears out of villages — is now as much a part of forestry's future as timber prices.",
            ja:"動物は気候より速く変わった。かつて飛騨の豪雪地帯ではまれだったニホンジカは、穏やかな冬と狩猟者の減少とともに広がった。苗木を食べ樹皮をはぐため、新しく植えた一ヘクタールには、植栽と同じほどの費用がかかる防鹿柵がしばしば必要になる。二〇二四年度、岐阜県ではニホンジカ一万七千二百四十九頭、イノシシ九千二百十一頭、ツキノワグマ三百五十六頭が捕獲された。最も気がかりな変化はクマである。全国で二〇二五年度にクマによる人身被害を受けた人は二百三十八人、うち十三人が亡くなり、記録上最悪の年となり、出没件数は五万件を超えた。クマは岐阜のほぼ全域にすみ、林業の働き手、きのこ採り、登山者が最もさらされる。野生動物の管理——何頭を捕獲するか、狩猟者が年老いるなか誰がそれをするか、クマを集落からどう遠ざけるか——は、いまや木材価格と同じくらい林業の未来の一部である。",
            zh:"動物的變化比氣候更快。梅花鹿過去在飛驒的深雪地帶很少見，隨著暖冬與獵人減少而擴散；牠們啃食苗木、剝食樹皮，使得新造林的每一公頃常常需要一道與造林費用相當的防鹿圍籬。2024 年度，岐阜縣共捕獲梅花鹿 17,249 頭、野豬 9,211 頭、亞洲黑熊 356 頭。最令人憂心的變化是熊。2025 年度全日本有 238 人遭熊攻擊受傷或死亡，其中 13 人喪命，是有紀錄以來最糟的一年，目擊件數也突破 5 萬件；岐阜幾乎全境都有熊棲息，林業工作者、採菇人與登山客是最暴露於風險的人。野生動物管理——要捕獲多少、在獵人老化之下由誰來做、如何讓熊遠離村落——如今和木材價格一樣，是林業未來的一部分。" } },
        { t:"tiny",
          text:{
            en:"Sources: Japan Meteorological Agency, climate change monitoring; Gifu Prefecture, forest damage and wildlife capture statistics (FY2024); Ministry of the Environment, bear damage statistics, as reported by Nikkei and Kyodo (April 2026).",
            ja:"出典：気象庁 気候変動監視。岐阜県 森林病害虫被害、野生鳥獣の捕獲頭数（二〇二四年度）。環境省 クマ類による人身被害（日本経済新聞・共同通信の報道、二〇二六年四月）。",
            zh:"資料來源：日本氣象廳氣候變遷監測；岐阜縣森林病蟲害與野生動物捕獲統計（2024 年度）；環境省熊類人身傷害統計（日本經濟新聞、共同社報導，2026 年 4 月）。" } }
      ] },
    { t:"section",
      id:"crafts",
      title:{ en:"Crafts and markets", ja:"工芸と市場", zh:"工藝與市場" },
      jp:"継承と需要",
      body:[
        { t:"p",
          text:{
            en:"The crafts face the same demography as the forests, compressed into fewer people. Across Japan, the output of the officially designated traditional crafts fell below ¥100 billion in FY2016 and stood at about ¥87 billion in FY2020, made by about 54,000 people; the number of certified traditional craftsmen, <em>dentō kōgeishi</em>, is falling as they age. Certification requires at least twelve years of practice in the craft's home district, so every master who retires takes more than a decade of training with them. Gifu's two wood crafts on the national list, <a href=\"shunkei.html\">Hida Shunkei</a> lacquerware and <a href=\"ittobori.html\">Ichii Ittōbori</a> carving, both designated in 1975, are carried on by a small number of workshops in Takayama, most of them family businesses. Their future depends on three things: young people willing to spend years learning (the prefecture's Wood Craft Art School now includes Shunkei lacquering in its one-year course), buyers who pay for handwork rather than souvenirs, and new uses — as when an Italian luthier finished a string quartet in Shunkei lacquer in 2013.",
            ja:"工芸は森と同じ人口の構図を、より少ない人数に押しこめた形で抱えている。全国で、国の指定する伝統的工芸品の生産額は二〇一六年度に千億円を下回り、二〇二〇年度には約八百七十億円、従事者は約五万四千人だった。伝統工芸士の数も、高齢化とともに減りつつある。認定には産地で十二年以上の実務経験が要るため、引退する名人は一人ひとり十年を超える修業を持ち去ることになる。国の指定を受けた岐阜の二つの木の工芸、<a href=\"shunkei.html\">飛騨春慶</a>と<a href=\"ittobori.html\">一位一刀彫</a>は、ともに一九七五年に指定され、高山の少数の工房——その多くは家業——が担っている。その将来は三つのことにかかっている。何年もかけて学ぶ気のある若い人（県の木工芸術スクールは一年の課程に春慶塗を取り入れている）、土産物ではなく手仕事に代価を払う買い手、そして新しい用途——二〇一三年にイタリアの弦楽器製作者が弦楽四重奏の楽器を春慶塗で仕上げたように。",
            zh:"工藝面對的是與森林相同的人口結構，只是壓縮在更少的人身上。在全日本，國家指定的傳統工藝品產值於 2016 年度跌破 1,000 億日圓，2020 年度約為 870 億日圓，從業者約 5.4 萬人；認定的「傳統工藝士」也隨高齡化而減少。認定需要在產地累積十二年以上的實務經驗，因此每一位退休的名匠，都帶走了十年以上的修業。岐阜列入國家名錄的兩項木工藝——<a href=\"shunkei.html\">飛驒春慶</a>漆器與<a href=\"ittobori.html\">一位一刀雕</a>雕刻，皆於 1975 年指定——由高山少數幾家工房傳承，其中多數是家族事業。它們的未來取決於三件事：願意花多年學習的年輕人（縣立木工藝術學校的一年課程已納入春慶塗）；願意為手工而非紀念品付費的買家；以及新的用途——例如 2013 年一位義大利製琴師以春慶漆完成了一組弦樂四重奏樂器。" } },
        { t:"p",
          text:{
            en:"Hida's furniture makers went through their great change fifty years ago, when exports to the United States ended in 1973 and the industry turned to the Japanese market. That market is now shrinking in its turn: new housing starts in Japan fell from about 1.29 million in 2006 to about 0.82 million in 2024, and much of the furniture Japanese households buy is imported. The Takayama makers' response has been to sell quality and origin. Since 2008 the regional collective trademark “Hida furniture” has been granted only to firms that meet a charter of standards, including that all processing after primary sawing is done in Hida and that wooden parts are guaranteed for ten years; the mark was also registered in Taiwan in 2009 and in China in 2010. The other shift is in the wood. Hida's chairs were built on beech and oak, and for decades mostly on imported hardwoods; Hida city, where about two-thirds of the forest is broadleaf, has since FY2015 promoted the use of its own small-diameter hardwoods, and furniture from local sugi and broadleaves is a growing, if still small, part of the trade (see <a href=\"furniture.html\">Hida Furniture</a> and <a href=\"broadleaf.html\">The Broadleaf Forests</a>).",
            ja:"飛騨の家具づくりは、五十年前に大きな変化を経験した。一九七三年にアメリカへの輸出が終わり、産業は国内市場へ向きを変えた。その市場がいまは縮みつつある。日本の新設住宅着工戸数は、二〇〇六年の約百二十九万戸から二〇二四年には約八十二万戸に減り、日本の家庭が買う家具の多くは輸入品である。高山のつくり手たちの答えは、品質と産地を売ることだった。二〇〇八年から、地域団体商標「飛騨の家具」は、一次製材より後の加工をすべて飛騨で行うこと、木部を十年保証することなどを含む憲章の基準を満たす企業にだけ認められている。この商標は二〇〇九年に台湾で、二〇一〇年に中国でも登録された。もう一つの変化は木にある。飛騨の椅子はブナやナラでつくられ、何十年ものあいだ、その材の多くは輸入の広葉樹だった。森のおよそ三分の二が広葉樹である飛騨市は、二〇一五年度から地元の小径広葉樹の利用を進めており、地元のスギや広葉樹の家具は、まだ小さいながら伸びている（<a href=\"furniture.html\">飛騨の家具</a>、<a href=\"broadleaf.html\">広葉樹の森</a>を参照）。",
            zh:"飛驒的家具業在五十年前經歷過一次巨變：1973 年對美出口結束，產業轉向日本國內市場。如今這個市場也在萎縮：日本新建住宅開工戶數由 2006 年約 129 萬戶降到 2024 年約 82 萬戶，日本家庭購買的家具有很大部分是進口品。高山業者的回應是販賣品質與產地。自 2008 年起，地域團體商標「飛驒家具」只授予符合一套憲章標準的企業，包括初次製材之後的所有加工都在飛驒完成、木製部分保固十年等；這個商標也於 2009 年在台灣、2010 年在中國註冊。另一項轉變在於木材。飛驒的椅子以山毛櫸與橡木製作，數十年來多半使用進口闊葉材；森林約三分之二為闊葉樹的飛驒市，自 2015 年度起推動利用當地的小徑闊葉材，以本地柳杉與闊葉樹製作的家具雖仍占少數，卻在成長（見<a href=\"furniture.html\">飛驒家具</a>與<a href=\"broadleaf.html\">闊葉樹之森</a>）。" } },
        { t:"p",
          text:{
            en:"The guitar makers of Kani and Nakatsugawa face a different future. Demand is healthy: the value of guitars shipped by Japanese factories rose for six years in a row to about ¥8.7 billion in 2023, the highest since 2007, and Gifu accounted for ¥1.23 billion, or 12.6 per cent of national shipments, in 2021. Their risks are on the supply side. The classic guitar woods — rosewood, mahogany, ebony, spruce — come from abroad and are increasingly regulated (see <a href=\"cites.html\">Rosewood &amp; the Law</a>), and the skills of hand-building, like those of Shunkei, live in a few ageing people. One answer that suits Gifu is to look closer to home: makers have experimented with Japanese woods for backs, sides and necks (see <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>).",
            ja:"可児と中津川のギターのつくり手は、また別の未来を前にしている。需要は堅調である。日本の工場が出荷したギターの金額は六年続けて増え、二〇二三年には約八十七億円と二〇〇七年以来の高さになった。二〇二一年、岐阜はそのうち十二億三千万円、全国の出荷額の十二・六パーセントを占めた。リスクは供給の側にある。ギターの定番の木——ローズウッド、マホガニー、エボニー、スプルース——は海外から来て、規制がますます厳しくなっている（<a href=\"cites.html\">ローズウッドと条約</a>を参照）。そして手工の技は、春慶と同じく、年をとりつつある少数の人の中に生きている。岐阜に合う一つの答えは、身近な木に目を向けることで、つくり手たちは裏板、側板、ネックに日本の木を使う試みを重ねてきた（<a href=\"japanesewoods.html\">和の木と和の楽器</a>を参照）。",
            zh:"可兒與中津川的吉他製造者面對的是另一種未來。需求相當健康：日本工廠出貨的吉他金額連續六年成長，2023 年約 87 億日圓，為 2007 年以來最高；2021 年岐阜占其中 12.3 億日圓，即全國出貨額的 12.6%。風險在供給端。經典吉他木材——玫瑰木、桃花心木、黑檀、雲杉——都來自國外，且管制日益嚴格（見<a href=\"cites.html\">玫瑰木與公約</a>）；而手工製琴的技藝，和春慶一樣，只存在於少數日漸年長的人身上。一個適合岐阜的答案是把目光轉向身邊：製琴者一直在嘗試用日本木材製作背板、側板與琴頸（見<a href=\"japanesewoods.html\">日本之木與日本樂器</a>）。" } },
        { t:"note",
          label:{ en:"A view from Taiwan", ja:"台湾から見ると", zh:"從台灣看" },
          text:{
            en:"Taiwan faces the opposite problem. Having ended the logging of its natural forests in 1991, it produces only a few tens of thousands of cubic metres of wood a year against a demand of about 4.2 million; its self-sufficiency rose from 1.04 per cent in 2020 to 1.47 per cent in 2023. Japan has timber and too few people to harvest it; Taiwan has the people and the industry, and imports almost all its wood. See <a href=\"taiwan.html\">Wood in Taiwan</a>.",
            ja:"台湾は逆の問題を抱えている。一九九一年に天然林の伐採をやめて以来、年約四百二十万立方メートルの需要に対して生産は年数万立方メートルにすぎず、自給率は二〇二〇年の一・〇四パーセントから二〇二三年の一・四七パーセントに上がったところである。日本には木があり、それを伐る人が足りない。台湾には人と産業があり、木材のほとんどを輸入している。<a href=\"taiwan.html\">台湾と木</a>を参照。",
            zh:"台灣面對的是相反的問題。自 1991 年停止天然林伐採後，每年木材需求約 420 萬立方公尺，國內產量只有數萬立方公尺；自給率由 2020 年的 1.04% 升至 2023 年的 1.47%。日本有木材，卻缺少伐木的人；台灣有人才與產業，木材卻幾乎全靠進口。見<a href=\"taiwan.html\">台灣與木</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Economy, Trade and Industry, traditional craft industry briefing (July 2022); Association for the Promotion of Traditional Craft Industries; Takayama city and Hida furniture cooperative (trademark); Ministry of Economy, Trade and Industry, production statistics and Economic Census (guitars); Legislative Yuan Budget Center (Taiwan).",
            ja:"出典：経済産業省 伝統的工芸品産業室 説明資料（二〇二二年七月）。伝統的工芸品産業振興協会。高山市、協同組合飛騨木工連合会（商標）。経済産業省 生産動態統計、経済センサス（ギター）。台湾 立法院予算センター。",
            zh:"資料來源：經濟產業省傳統工藝品產業室說明資料（2022 年 7 月）；傳統工藝品產業振興協會；高山市與協同組合飛驒木工聯合會（商標）；經濟產業省生產動態統計、經濟普查（吉他）；立法院預算中心（台灣）。" } }
      ] },
    { t:"section",
      id:"scenarios",
      title:{ en:"Three possible futures", ja:"三つの筋書き", zh:"三種可能的未來" },
      jp:"シナリオ",
      body:[
        { t:"p",
          text:{
            en:"No one can say which way Gifu's forests will go, and the official plans describe only the future their authors intend. The three sketches below are not forecasts. They take the projections on this page — fewer people, older trees, more machines, new money — and ask what the region would look like if different choices were made with them. Real outcomes will mix all three, and differ from valley to valley.",
            ja:"岐阜の森がどちらへ向かうか、だれにも言えない。公式の計画が描くのは、つくり手が意図する未来だけである。以下の三つの素描は予測ではない。この頁の推計——人が減り、木が年をとり、機械が増え、新しい財源ができる——を前提に、それらをもとに違う選択をしたら地域がどう見えるかを問うものである。現実の結果は三つが混じり合い、谷ごとに違うだろう。",
            zh:"沒有人能說岐阜的森林會走向何方，而官方計畫描繪的，只是撰寫者所期望的未來。以下三種描述並不是預測。它們以本頁的推估——人變少、樹變老、機械變多、有了新財源——為前提，問的是：如果據此做出不同的選擇，這個地區會是什麼樣子。真實的結果會是三者的混合，而且每條山谷都不一樣。" } },
        { t:"compare",
          cols:3,
          items:[
            { title:{ en:"Managed contraction", ja:"縮小を管理する", zh:"有管理的收縮" },
              jp:"選択と集中",
              text:{
                en:"Harvesting concentrates on the timber-production forests near good roads, which are cut, replanted with improved seedlings and fenced against deer. Steep and remote plantations are allowed to grow old or turn slowly to mixed broadleaf forest, managed lightly by municipalities with the forest environment tax. Log output stays near today's level with fewer, better-equipped crews. The crafts survive as a handful of premium workshops.",
                ja:"伐採は、よい道に近い木材生産林に集中し、そこでは伐って改良した苗木を植え直し、防鹿柵で囲う。急で遠い人工林は老いるまで育てるか、ゆっくりと広葉樹の混じる森に移し、市町村が森林環境税で軽く管理する。素材生産量は、数は少なくても装備の整った作業班によって、いまの水準近くを保つ。工芸は、ひと握りの上質な工房として生き残る。",
                zh:"伐採集中在道路良好的木材生產林：伐採後以改良苗木重新造林，並以圍籬防鹿。陡峭偏遠的人工林則任其長成老林，或慢慢轉為混生闊葉林，由市町村以森林環境稅輕度管理。原木產量維持在接近今日的水準，但由人數較少、裝備較好的作業班完成。工藝以少數高品質工房的形式存續。" },
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"Watch: share of the forest environment tax spent on work in the forest rather than surveys",
                      ja:"見るべき指標：森林環境税のうち、調査ではなく森の作業に使われる割合",
                      zh:"觀察指標：森林環境稅用在森林作業而非調查的比例" },
                    { en:"Watch: replanting rate after final harvest", ja:"見るべき指標：主伐後の再造林率", zh:"觀察指標：主伐後的再造林率" }
                  ] }
              ] },
            { title:{ en:"Wood-led renewal", ja:"木による再生", zh:"以木材帶動的再生" },
              jp:"需要主導",
              text:{
                en:"Mid-rise timber buildings, wood-use agreements and pollen-driven sugi felling create strong demand; log prices recover; lidar, remote-controlled machines and trained recruits, some from abroad, raise output well above 600,000 cubic metres. Gifu's mills consolidate into fewer, larger plants. The risks are clear-felling on steep ground, landslides after storms, and the loss of the small mills and specialist timber that made Tōnō hinoki famous.",
                ja:"中層の木造建築、木材利用の協定、花粉対策によるスギの伐採が強い需要を生み、丸太の価格は持ち直す。ライダー、遠隔操作の機械、そして一部は海外から来る訓練された新人が、素材生産量を六十万立方メートルを大きく超えるまで押し上げる。岐阜の製材所は、より少なく大きな工場に集約される。リスクは、急斜面での皆伐、豪雨のあとの山崩れ、そして東濃ひのきを名高くした小さな製材所と特別な材の喪失である。",
                zh:"中層木構造建築、木材利用協定與花粉對策帶動的柳杉伐採，創造出強勁需求；原木價格回升；LiDAR、遙控機械與受過訓練的新人（部分來自海外）使原木產量遠超過 60 萬立方公尺。岐阜的製材廠整併為數量較少、規模較大的工廠。風險在於陡坡皆伐、豪雨後的山崩，以及讓東濃扁柏成名的小型製材廠與特殊木材的消失。" },
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"Watch: floor area of new non-residential timber buildings",
                      ja:"見るべき指標：非住宅の木造建築の新築床面積",
                      zh:"觀察指標：新建非住宅木構造建築的樓地板面積" },
                    {
                      en:"Watch: size of clear-felled coupes on steep slopes",
                      ja:"見るべき指標：急斜面での皆伐面積の大きさ",
                      zh:"觀察指標：陡坡皆伐區的面積大小" }
                  ] }
              ] },
            { title:{ en:"Drift", ja:"漂流", zh:"放任漂流" },
              jp:"放置",
              text:{
                en:"No clear choice is made. Plantations are neither harvested nor thinned; stands grow dense and dark, with bare ground beneath that erodes in heavy rain. Deer and bears move into abandoned farmland; owners cannot be traced, and municipalities lack staff to use the new powers. Imports fill demand, the last masters of some crafts retire without successors, and the timber that the post-war generation planted is left standing — a store of carbon for a while, a hazard later.",
                ja:"はっきりした選択がなされない。人工林は伐られも間伐されもせず、林は混み暗くなり、下の地面はむき出しになって豪雨で削られる。シカとクマは放棄された農地へ入りこみ、所有者はたどれず、市町村には新しい権限を使う職員がいない。需要は輸入が埋め、いくつかの工芸の最後の名人は後継ぎなしに引退し、戦後の世代が植えた木は立ったまま残される——しばらくは炭素の蓄えとして、やがては危険として。",
                zh:"沒有做出明確選擇。人工林既不伐採也不疏伐；林分變得密而幽暗，林下地表裸露，在豪雨中被沖刷。鹿與熊進入廢耕地；林主無從追查，市町村缺乏人力行使新權限。需求由進口填補，某些工藝的最後名匠退休而無人接班，戰後世代種下的樹就這樣站著——一時是碳的儲存，日後成了隱患。" },
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"Watch: area of forest whose owners cannot be identified",
                      ja:"見るべき指標：所有者のわからない森の面積",
                      zh:"觀察指標：林主不明的森林面積" },
                    {
                      en:"Watch: number of craft workshops with a named successor",
                      ja:"見るべき指標：後継者が決まっている工房の数",
                      zh:"觀察指標：已確定接班人的工房數" }
                  ] }
              ] }
          ] },
        { t:"h3", text:{ en:"What would have to go right", ja:"うまくいくために必要なこと", zh:"要走對路需要什麼" }, jp:"道筋" },
        { t:"steps",
          items:[
            { title:{ en:"Know the forest", ja:"森を知る", zh:"了解森林" },
              jp:"計測",
              meta:{ en:"Now–2030", ja:"いま〜二〇三〇年", zh:"現在–2030 年" },
              text:{
                en:"Complete lidar-based forest registers and settle boundaries while the people who remember them are still alive.",
                ja:"ライダーにもとづく森林簿を仕上げ、境界を覚えている人が健在なうちに境界を確定する。",
                zh:"完成以 LiDAR 為基礎的森林簿，並趁記得林界的人還在世時確定林界。" } },
            { title:{ en:"Settle who manages it", ja:"だれが管理するかを決める", zh:"確定由誰經營" },
              jp:"経営管理",
              meta:{ en:"Now–2030", ja:"いま〜二〇三〇年", zh:"現在–2030 年" },
              text:{
                en:"Use the Forest Management System and compulsory inheritance registration to bring unmanaged forest under someone's care.",
                ja:"森林経営管理制度と相続登記の義務化を使い、手入れされていない森をだれかの管理のもとに置く。",
                zh:"運用森林經營管理制度與強制繼承登記，讓未經營的森林有人照管。" } },
            { title:{ en:"Decide what each forest is for", ja:"森ごとの役割を決める", zh:"決定每片森林的用途" },
              jp:"ゾーニング",
              meta:{ en:"From FY2027", ja:"二〇二七年度から", zh:"2027 年度起" },
              text:{
                en:"In the next prefectural plan, match zoning to what can realistically be managed with the people available.",
                ja:"次の県の計画で、いる人数で現実に管理できることにゾーニングを合わせる。",
                zh:"在下一期縣計畫中，讓分區與現有人力實際能經營的範圍相符。" } },
            { title:{ en:"Harvest and replant with care", ja:"丁寧に伐り、植え直す", zh:"審慎伐採與更新" },
              jp:"更新",
              meta:{ en:"Continuous", ja:"継続", zh:"持續" },
              text:{
                en:"Smaller coupes on steep ground, low-pollen and fast-growing seedlings, deer fences, and broadleaves where plantations failed.",
                ja:"急斜面では小さな伐区、花粉の少ない成長の速い苗木、防鹿柵、そして人工林がうまくいかなかった場所には広葉樹を。",
                zh:"陡坡採小面積伐區，使用少花粉、生長快的苗木，設置防鹿圍籬，人工林失敗之處改植闊葉樹。" } },
            { title:{ en:"Build, furnish and play in wood", ja:"木で建て、しつらえ、奏でる", zh:"以木建造、陳設與演奏" },
              jp:"需要",
              meta:{ en:"Continuous", ja:"継続", zh:"持續" },
              text:{
                en:"Turn the logs into buildings, furniture and instruments that pay enough to fund the next rotation, and burn only what nothing else can use, for heat.",
                ja:"丸太を、次の世代の森の費用をまかなえるだけの値のつく建物、家具、楽器に変え、ほかに使い道のないものだけを熱として燃やす。",
                zh:"把原木變成價值足以支付下一輪造林的建築、家具與樂器，只把其他用途都用不上的部分拿來燒成熱能。" } },
            { title:{ en:"Train and keep people", ja:"人を育て、とどめる", zh:"培養並留住人才" },
              jp:"担い手",
              meta:{ en:"Continuous", ja:"継続", zh:"持續" },
              text:{
                en:"Schools, Green Employment, decent pay, safer machines, and a place in the villages for the families of those who come.",
                ja:"学校、緑の雇用、まっとうな賃金、より安全な機械、そして来た人の家族が暮らせる集落の居場所。",
                zh:"學校、綠色僱用、合理的薪資、更安全的機械，以及讓前來者的家人能在村落安身的地方。" } }
          ] }
      ] },
    { t:"related",
      items:[
        { href:"silviculture.html",
          why:{ en:"How a plantation is grown, thinned and renewed.", ja:"人工林の育て方、間伐、更新。", zh:"人工林如何培育、疏伐與更新。" } },
        { href:"policy.html",
          why:{ en:"The laws and taxes behind the forest plans.", ja:"森林計画の背後にある法律と税。", zh:"森林計畫背後的法律與稅制。" } },
        { href:"workers.html", why:{ en:"The people who do the work today.", ja:"いまその仕事をしている人々。", zh:"今天從事這份工作的人。" } },
        { href:"debates.html",
          why:{ en:"The arguments behind the choices ahead.", ja:"これからの選択の背後にある論争。", zh:"未來抉擇背後的爭論。" } },
        { href:"learning.html", why:{ en:"Where the next generation is trained.", ja:"次の世代が育つところ。", zh:"培育下一代的地方。" } }
      ] }
  ] };

/* ---- ------------------------------------------- debates */
GIFU.pages["debates"] = { kicker:{ en:"Reference · 05", ja:"資料 · 05", zh:"資料 · 05" },
  title:{ en:"Where People Disagree", ja:"論の分かれるところ", zh:"意見分歧之處" },
  jp:"論争",
  lede:{
    en:"Almost everything on the other pages of this book is settled fact: the density of hinoki, the date of a law, the number of sawmills in Gifu. This page collects the questions that are not settled — where foresters, scientists, officials, craftspeople and residents look at the same forests and the same numbers and reach different conclusions. For each debate it sets out the strongest case on each side, names the sources, and asks what kind of evidence would settle it, if any could. It takes no side; where the evidence clearly leans one way, it says so.",
    ja:"この本のほかの頁に書かれていることは、ほとんどが定まった事実である。ヒノキの密度、法律の年、岐阜の製材所の数。この頁は、定まっていない問いを集める。林業家、研究者、行政、職人、住民が同じ森と同じ数字を見て、違う結論にたどりつくところである。それぞれの論争について、両方の側の最も強い主張を示し、出典を挙げ、決着がつくとすればどんな証拠によってかを問う。どちらの側にも立たないが、証拠がはっきり一方に傾いているところでは、そう書く。",
    zh:"本書其他頁面寫的幾乎都是已確定的事實：扁柏的密度、某部法律的年份、岐阜製材廠的數目。本頁收集尚無定論的問題——林業者、科學家、官員、工匠與居民看著同樣的森林、同樣的數字，卻得出不同結論的地方。對每一項爭論，本頁列出雙方最有力的論點、註明出處，並追問：如果有可能解決，需要什麼樣的證據。本頁不選邊；但在證據明顯偏向一方之處，會如實說明。" },
  body:[
    { t:"section",
      id:"how",
      title:{ en:"How to read this page", ja:"この頁の読み方", zh:"如何閱讀本頁" },
      jp:"論点と証拠",
      body:[
        { t:"p",
          text:{
            en:"Disagreements about wood are rarely about one thing. Most mix questions of fact (does this forest store more carbon if it is left alone?), questions of time (over ten years or a hundred?), questions of money (who pays, and who gains?) and questions of value (what is a landscape, a shrine or a craft worth?). Evidence can settle the first kind, and sometimes the second; the third is often a matter of prices that change; the fourth is not a scientific question at all. Much of the heat in these debates comes from treating a question of value as if it were a question of fact, or the other way round. Each section below therefore ends with a short note on what would move the argument forward.",
            ja:"木をめぐる意見の違いが、一つのことだけにかかわることはまれである。多くは、事実の問い（この森は放っておいたほうが多くの炭素を蓄えるのか）、時間の問い（十年でか、百年でか）、お金の問い（だれが払い、だれが得るのか）、価値の問い（景観や神社や工芸にどれだけの値打ちがあるのか）が混じり合っている。一つめは証拠が決着をつけられ、二つめもときにはそうである。三つめはしばしば変わる価格の問題で、四つめはそもそも科学の問いではない。こうした論争の熱の多くは、価値の問いを事実の問いのように扱うこと、あるいはその逆から生まれる。そこで以下の各節は、議論を前に進めるには何が要るかを短く記して終わる。",
            zh:"關於木材的分歧，很少只關乎一件事。多數混合了事實問題（這片森林放著不動，會儲存更多碳嗎？）、時間問題（以十年還是一百年計？）、金錢問題（誰付錢、誰得利？）與價值問題（一片景觀、一座神社或一門工藝值多少？）。第一類可以由證據解決，第二類有時也可以；第三類往往取決於會變動的價格；第四類根本不是科學問題。這些爭論的火氣，很多來自把價值問題當成事實問題，或反之。因此以下各節都以一段短評作結，說明什麼能讓討論往前推進。" } },
        { t:"figure",
          caption:{
            en:"The debates on this page and the kinds of evidence that bear on them. Qualitative: dots show the author's judgement of how much each kind of evidence can contribute (three dots = central), not measured data.",
            ja:"この頁の論争と、それにかかわる証拠の種類。定性的な図で、点は各種の証拠がどれだけ寄与しうるかについての筆者の判断を示す（三点＝中心的）。測定データではない。",
            zh:"本頁各項爭論及與之相關的證據類型。此為定性圖：圓點表示作者判斷各類證據能提供多少幫助（三點＝核心），並非量測數據。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"Which evidence could settle it?", ja:"どの証拠が決め手になりうるか", zh:"哪種證據能解決爭論？" }, labelW:230,
            cols:[ { en:"Field trials", ja:"野外試験", zh:"野外試驗" }, { en:"Long records", ja:"長期の記録", zh:"長期紀錄" }, { en:"Life-cycle", ja:"LCA", zh:"生命週期" },
                   { en:"Costs, prices", ja:"費用・価格", zh:"成本價格" }, { en:"Blind tests", ja:"盲検", zh:"盲測" }, { en:"Values", ja:"価値観", zh:"價值觀" } ],
            rows:[
              { n:{ en:"Clear-fell or continuous cover", ja:"皆伐か連続被覆か", zh:"皆伐或連續覆蓋" }, v:[3,3,1,2,0,1] },
              { n:{ en:"Plantation or broadleaf", ja:"人工林か広葉樹か", zh:"人工林或闊葉林" }, v:[3,2,1,2,0,2] },
              { n:{ en:"Wood-fired power", ja:"木質バイオマス発電", zh:"木質生質發電" }, v:[1,1,3,3,0,1] },
              { n:{ en:"Is wood carbon-neutral?", ja:"木はカーボンニュートラルか", zh:"木材是碳中和嗎" }, v:[2,3,3,0,0,1] },
              { n:{ en:"Tall timber and CLT", ja:"中高層木造とCLT", zh:"中高層木構與 CLT" }, v:[3,1,3,3,0,1] },
              { n:{ en:"Felling sugi for pollen", ja:"花粉対策のスギ伐採", zh:"為花粉伐柳杉" }, v:[1,3,1,2,0,1] },
              { n:{ en:"Culling deer and bears", ja:"シカとクマの捕獲", zh:"捕獲鹿與熊" }, v:[3,3,0,1,0,3] },
              { n:{ en:"Do tonewoods matter?", ja:"トーンウッドは効くか", zh:"音木重要嗎" }, v:[1,0,0,1,3,1] },
              { n:{ en:"Tourism in the villages", ja:"集落の観光", zh:"村落觀光" }, v:[1,2,0,3,0,3] },
              { n:{ en:"Handmade or machine-made", ja:"手仕事か機械か", zh:"手工或機器製" }, v:[0,2,1,3,2,3] },
              { n:{ en:"Rebuilding Ise every 20 years", ja:"伊勢の二十年ごとの造替", zh:"伊勢每二十年重建" }, v:[0,2,1,1,0,3] }
            ] }); } }
      ] },
    { t:"section",
      id:"clearfell",
      title:{ en:"Clear-felling or continuous cover?", ja:"皆伐か、連続被覆か", zh:"皆伐，還是連續覆蓋？" },
      jp:"皆伐と択伐",
      body:[
        { t:"p",
          text:{
            en:"Japan's post-war plantations were designed for clear-felling: plant about 3,000 seedlings a hectare, weed and thin for decades, cut everything at forty to sixty years, and start again. The model is cheap to harvest with modern machines, but it front-loads its costs. The Forestry Agency's 2020 white paper put the cost of establishing a hectare of sugi — planting and five years of weeding — at about ¥1.84 million, while an owner might receive only about ¥0.91 million from selling the standing timber at fifty years. Many owners therefore clear-fell and do not replant. The alternative is continuous-cover forestry, in which trees are removed singly or in small groups and the ground is never bare: long rotations with repeated thinning, multi-storey forests with a young generation planted beneath the old, or true selection forests. Gifu has one of Japan's best-known historical examples, the Imasu selection forests of Sekigahara, where sugi and hinoki of all ages have been harvested tree by tree since at least the Edo period.",
            ja:"戦後の人工林は皆伐を前提に設計された。一ヘクタールに約三千本の苗を植え、何十年も下刈りと間伐をし、四十〜六十年ですべてを伐り、また始める。この方式は現代の機械で伐るには安上がりだが、費用が最初に偏る。林野庁の二〇二〇年の白書は、スギ一ヘクタールの植栽と五年間の下刈りにかかる費用を約百八十四万円とし、所有者が五十年後に立木を売って受け取るのは約九十一万円にすぎないとした。そのため、多くの所有者は皆伐しても植え直さない。もう一つの道は連続被覆の林業で、木を一本ずつ、あるいは小さなまとまりで伐り、地面を決してむき出しにしない。間伐を重ねる長伐期、古い木の下に若い世代を植える複層林、そして本来の択伐林である。岐阜には日本で最もよく知られた歴史的な例の一つ、関ケ原町の今須の択伐林がある。そこでは少なくとも江戸時代から、あらゆる齢のスギとヒノキが一本ずつ伐られてきた。",
            zh:"日本戰後的人工林是以皆伐為前提設計的：每公頃種約 3,000 株苗木，數十年間除草與疏伐，四十到六十年時全部伐光，再重新開始。這種模式用現代機械收穫很便宜，但成本集中在前期。林野廳 2020 年白皮書估計，營造一公頃柳杉林——栽植加上五年除草——約需 184 萬日圓，而林主在五十年後出售立木，可能只拿到約 91 萬日圓。因此許多林主皆伐後並不重新造林。另一種選擇是連續覆蓋林業：林木單株或小群伐採，林地從不裸露——例如反覆疏伐的長伐期、在老林下栽植年輕一代的複層林，或真正的擇伐林。岐阜就有日本最知名的歷史案例之一：關原町的今須擇伐林，至少自江戶時代起，各種樹齡的柳杉與扁柏便一株一株地伐採。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"The case for clear-felling", ja:"皆伐を支持する論拠", zh:"支持皆伐的論點" },
              jp:"効率",
              text:{
                en:"It is the cheapest way to harvest per cubic metre, suits the machines and road networks now being built, and lets owners replant with improved or low-pollen stock. Sugi and hinoki grow best in full light. A felled and replanted stand also takes up carbon fastest in its young decades, and clear-felling concentrates the dangerous work in time and place.",
                ja:"一立方メートルあたりで最も安く伐れる方法で、いま整備されつつある機械と路網に合い、所有者が改良品種や花粉の少ない品種で植え直すことができる。スギとヒノキは十分な光の下で最もよく育つ。伐って植え直した林は、若い数十年に最も速く炭素を吸収する。皆伐は、危険な作業を時と場所の上で一か所にまとめもする。",
                zh:"這是每立方公尺成本最低的收穫方式，符合目前正在建設的機械與路網，也讓林主能以改良品種或少花粉品種重新造林。柳杉與扁柏在全光下生長最好。伐後重新造林的林分，在年輕的數十年間吸碳最快；皆伐也把危險作業集中在同一時間與地點。" } },
            { title:{ en:"The case for continuous cover", ja:"連続被覆を支持する論拠", zh:"支持連續覆蓋的論點" },
              jp:"保全",
              text:{
                en:"The soil is never exposed, so steep slopes are less prone to erosion and landslides in the years when old roots have rotted and new ones have not grown. The landscape stays wooded, owners earn a steadier income, and large high-value logs are produced for shrines, temples and fine joinery. Against it: it needs skilled fellers, dense roads and careful work to avoid damaging the remaining trees, and costs more per cubic metre.",
                ja:"地面が決してむき出しにならないため、古い根が腐り新しい根が育っていない数年間も、急斜面は侵食と山崩れを起こしにくい。景観は森のままで、所有者の収入は安定し、社寺や上質な建具・造作に向く大きく値の高い丸太が生まれる。反対の論拠としては、熟練した伐採者、密な路網、残す木を傷つけない丁寧な作業が要り、一立方メートルあたりの費用が高い。",
                zh:"林地從不裸露，因此在舊根腐朽、新根未長成的那幾年，陡坡較不易沖蝕與崩塌。景觀保持為森林，林主收入較穩定，也能生產供神社、寺院與高級木作使用的大徑高價原木。反方論點：它需要熟練的伐木者、密集的路網與小心作業以免傷及保留木，每立方公尺成本也較高。" } }
          ] },
        { t:"p",
          text:{
            en:"<strong>What would settle it.</strong> Side-by-side, long-term records from comparable Japanese slopes — costs, growth, timber value, soil loss and slope failures after heavy rain — over at least one full rotation. Such data exist for European forests but are scarce for Japanese plantations; the Imasu forests and experimental plots at forestry research institutes are among the few long records.",
            ja:"<strong>決め手になるもの。</strong>条件の似た日本の斜面で、少なくとも一伐期にわたり、費用、成長、木材の価値、土壌の流出、豪雨のあとの斜面崩壊を並べて記録した長期のデータ。ヨーロッパの森にはそうしたデータがあるが、日本の人工林にはとぼしい。今須の森と、林業の研究機関の試験地は、数少ない長い記録である。",
            zh:"<strong>什麼能解決爭論。</strong>在條件相近的日本坡地上，至少涵蓋一個完整輪伐期、並列比較的長期紀錄——成本、生長、木材價值、土壤流失，以及豪雨後的坡地崩壞。歐洲森林有這類資料，日本人工林卻很缺乏；今須的森林與林業研究機構的試驗地，是少數的長期紀錄。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Annual Report on Forest and Forestry in Japan FY2020 (feature on forestry economics); Gifu Prefecture, Fourth Basic Plan for Forest Development. See also <a href=\"silviculture.html\">Planting &amp; Tending</a>.",
            ja:"出典：林野庁「令和二（二〇二〇）年度 森林・林業白書」（特集 林業の収支）。岐阜県「第四期岐阜県森林づくり基本計画」。<a href=\"silviculture.html\">植えて育てる</a>も参照。",
            zh:"資料來源：林野廳《2020 年度森林・林業白皮書》（林業收支專題）；岐阜縣《第四期岐阜縣森林營造基本計畫》。另見<a href=\"silviculture.html\">造林與撫育</a>。" } }
      ] },
    { t:"section",
      id:"broadleaf",
      title:{ en:"Plantations or broadleaf forest?", ja:"人工林か、広葉樹の森か", zh:"人工林，還是闊葉林？" },
      jp:"針広混交林化",
      body:[
        { t:"p",
          text:{
            en:"About two-fifths of Gifu's forest is planted sugi and hinoki; much of the rest is mixed broadleaf forest, which covers 43 per cent of the prefecture's private forest by area. The fourth prefectural forest plan assigns only about 205,000 hectares to timber production and about 479,000 hectares to environmental conservation, and a growing body of opinion — among ecologists, some foresters and many residents — holds that plantations on poor, steep or remote sites should be allowed or helped to return to mixed forest of conifers and broadleaves. Others argue that the plantations are an inheritance that took two generations to build and should be kept productive.",
            ja:"岐阜の森のおよそ五分の二は植えたスギとヒノキで、残りの多くは広葉樹の混じる天然林である。広葉樹は県の私有林の面積の四三パーセントを占める。県の第四期の森林づくり基本計画は、木材生産に約二十万五千ヘクタール、環境保全に約四十七万九千ヘクタールを割り当てている。生態学者、一部の林業家、そして多くの住民のあいだには、条件の悪い、急な、あるいは遠い場所の人工林は、針葉樹と広葉樹の混じる森に戻るのを許すか助けるべきだという意見が広がっている。一方、人工林は二世代かけて築いた遺産であり、生産の森として保つべきだと主張する人もいる。",
            zh:"岐阜森林約五分之二是栽植的柳杉與扁柏，其餘多為闊葉混生的天然林；闊葉樹占全縣私有林面積的 43%。縣的第四期森林營造基本計畫只把約 20.5 萬公頃劃為木材生產，約 47.9 萬公頃劃為環境保全。在生態學者、部分林業者與許多居民之間，越來越多人主張：立地差、坡度陡或偏遠的人工林，應任其或協助其回復為針闊混交林。也有人主張，人工林是兩代人才建立起來的遺產，應維持其生產力。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Keep the plantations", ja:"人工林を保つ", zh:"維持人工林" },
              jp:"生産林",
              text:{
                en:"The planted forests hold most of Gifu's saleable timber — about 96 million cubic metres of sugi and hinoki in 2019 — and the jobs of every sawmill and builder. They were planted at public and private expense for exactly this moment of maturity. Conversion is slow and uncertain: where deer are numerous, broadleaf seedlings are eaten before they can establish, and a thinned plantation may become neither a good plantation nor a good broadleaf forest.",
                ja:"人工林は岐阜の売れる木材の大半——二〇一九年にスギとヒノキで約九千六百万立方メートル——と、あらゆる製材所と工務店の仕事を抱えている。まさにこの成熟の時のために、公私の費用で植えられた。転換は遅く不確かである。シカの多いところでは、広葉樹の芽生えは根づく前に食べられ、間伐した人工林が、よい人工林にもよい広葉樹の森にもならないことがある。",
                zh:"人工林擁有岐阜大部分可販售的木材——2019 年柳杉與扁柏約 9,600 萬立方公尺——也維繫著每家製材廠與營造商的生計。它們正是為了這個成熟時刻，以公私經費種下的。轉換既緩慢又不確定：鹿多的地方，闊葉樹苗在紮根前就被吃掉；疏伐後的人工林，可能既不是好的人工林，也不是好的闊葉林。" } },
            { title:{ en:"Let broadleaves return", ja:"広葉樹を戻す", zh:"讓闊葉樹回來" },
              jp:"混交林",
              text:{
                en:"Mixed forests support far more species, are thought to resist storms and pests better, produce no sugi pollen, and cost little to maintain once established. Many plantations on poor sites will never repay their costs. And broadleaves are not only for conservation: Hida city's “broadleaf town” policy since FY2015 has shown that small, varied hardwoods can supply furniture, interiors and design goods with more value than chips.",
                ja:"混交林ははるかに多くの種を支え、嵐や病虫害に強いと考えられ、スギ花粉を出さず、いったん成立すれば維持の費用も少ない。条件の悪い場所の人工林の多くは、決して費用を回収できない。そして広葉樹は保全のためだけのものではない。飛騨市が二〇一五年度から進める「広葉樹のまちづくり」は、小さく多様な広葉樹が、チップよりも値打ちのある家具、内装、デザイン雑貨を生みうることを示してきた。",
                zh:"混交林能支持多得多的物種，一般認為較能抵抗風暴與病蟲害，不產生柳杉花粉，一旦成林維護成本也低。許多立地不良的人工林永遠無法回收成本。而且闊葉樹不只用於保育：飛驒市自 2015 年度推動的「闊葉樹城鎮」政策證明，小而多樣的闊葉材能製成比木片更有價值的家具、室內裝修與設計商品。" } }
          ] },
        { t:"p",
          text:{
            en:"<strong>What would settle it.</strong> Mostly field evidence: follow-up surveys of thinned plantations to see what actually regenerates beneath them, with and without deer fences, and how conversion affects slope stability and water. The choice of which forests to keep productive is in the end an economic and political one, made in the prefectural and municipal plans.",
            ja:"<strong>決め手になるもの。</strong>主に野外の証拠である。間伐した人工林を追跡調査し、防鹿柵のあるなしで、その下で実際に何が更新するか、転換が斜面の安定や水にどう影響するかを見ること。どの森を生産の森として保つかは、最後は経済と政治の選択で、県と市町村の計画の中で決められる。",
            zh:"<strong>什麼能解決爭論。</strong>主要是野外證據：追蹤調查疏伐後的人工林，比較有無防鹿圍籬時林下實際更新了什麼，以及轉換對坡地穩定與水文的影響。至於哪些森林要維持生產，最終是經濟與政治的選擇，在縣與市町村的計畫中決定。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, Fourth Basic Plan for Forest Development; Gifu Prefecture, timber procurement guide for mid- and large-scale timber buildings (growing stock, 2019); Forestry Agency Kinki-Chūgoku office, report on Hida city's broadleaf policy. See also <a href=\"broadleaf.html\">The Broadleaf Forests</a>.",
            ja:"出典：岐阜県「第四期岐阜県森林づくり基本計画」。岐阜県 中大規模木造建築ガイド「木材・木材調達」（二〇一九年の蓄積）。林野庁近畿中国森林管理局（飛騨市の広葉樹のまちづくりについての報告）。<a href=\"broadleaf.html\">広葉樹の森</a>も参照。",
            zh:"資料來源：岐阜縣《第四期岐阜縣森林營造基本計畫》；岐阜縣中大規模木構造建築指南〈木材與木材採購〉（2019 年蓄積量）；林野廳近畿中國森林管理局關於飛驒市闊葉樹政策的報告。另見<a href=\"broadleaf.html\">闊葉樹之森</a>。" } }
      ] },
    { t:"section",
      id:"biomass",
      title:{ en:"Wood-fired power and carbon", ja:"木質バイオマス発電と炭素", zh:"木質生質發電與碳" },
      jp:"燃やすか、残すか",
      body:[
        { t:"p",
          text:{
            en:"Japan's feed-in tariff for renewable electricity, introduced in 2012, created a market for wood as fuel. In Gifu the largest plant, Gifu Biomass Power in Mizuho, has burned about 90,000 cubic metres of wood a year since 2014, some two-thirds of it unused forest wood; nationally, many large coastal plants were built to burn imported fuel, and Japan imported 6.38 million tonnes of wood pellets and 6.00 million tonnes of palm kernel shells in 2024. Two arguments are tangled together here. One is about economics and sourcing: is burning wood for electricity a good use of Gifu's low-grade logs, and of fuel shipped from Canada, Vietnam or Indonesia? The other is about accounting: when wood is burned, is the carbon it releases really “neutral”? The history of the tariff is on <a href=\"fuel.html\">Wood as Fire</a>.",
            ja:"二〇一二年に始まった再生可能エネルギーの固定価格買取制度は、燃料としての木の市場を生んだ。岐阜で最大の瑞穂市の岐阜バイオマスパワーは、二〇一四年から年約九万立方メートルの木——その三分の二ほどは未利用の山の木——を燃やしてきた。全国では、海沿いの大きな発電所の多くが輸入燃料を燃やすために建てられ、二〇二四年に日本は木質ペレット六百三十八万トン、パーム椰子殻六百万トンを輸入した。ここでは二つの論が絡み合っている。一つは経済と調達で、岐阜の低質の丸太を、そしてカナダやベトナムやインドネシアから船で運ぶ燃料を、電気のために燃やすのはよい使い方なのか。もう一つは勘定で、木を燃やしたとき、出てくる炭素は本当に「ニュートラル」なのか。買取制度のいきさつは<a href=\"fuel.html\">火としての木</a>にある。",
            zh:"2012 年開始的再生能源躉購制度，創造了以木材為燃料的市場。岐阜最大的電廠——瑞穗市的岐阜生質能發電——自 2014 年起每年燃燒約 9 萬立方公尺木材，其中約三分之二為林地未利用木材；在全國，許多沿海大型電廠從一開始就是為燃燒進口燃料而建，2024 年日本進口木質顆粒 638 萬公噸、棕櫚仁殼 600 萬公噸。這裡糾纏著兩項爭論。其一關於經濟與料源：把岐阜的低品質原木、以及從加拿大、越南或印尼船運而來的燃料拿來發電，是好的用法嗎？其二關於帳目：木材燃燒時釋放的碳，真的是「中和」的嗎？躉購制度的來龍去脈見<a href=\"fuel.html\">作為火的木</a>。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"For wood-fired power", ja:"発電を支持する論拠", zh:"支持木質發電的論點" },
              jp:"出口",
              text:{
                en:"Power stations give a guaranteed outlet for crooked, rotten and small logs and for thinnings that once had no market — about three-tenths of Gifu's log production in 2021 was low-grade material for fuel and chips. That income pays for thinning and brings jobs to mountain towns, and the electricity is renewable and available day and night, unlike sun and wind.",
                ja:"発電所は、曲がった、腐った、小さな丸太や、かつて売り先のなかった間伐材に、確かな出口を与える。二〇二一年、岐阜の素材生産量のおよそ三割は燃料やチップ向けの低質材だった。その収入が間伐の費用をまかない、山の町に仕事をもたらす。電気は再生可能で、太陽や風と違って昼も夜も得られる。",
                zh:"發電廠為彎曲、腐朽、細小的原木與過去沒有銷路的疏伐材提供了穩定出路——2021 年岐阜原木產量約三成是供燃料與木片用的低品質材。這筆收入支付疏伐費用，為山區城鎮帶來工作；而且電力是可再生的，不像太陽能與風力，日夜都可取得。" } },
            { title:{ en:"Against", ja:"反対の論拠", zh:"反對的論點" },
              jp:"効率と輸入",
              text:{
                en:"A power-only plant converts only a modest fraction of the fuel's energy into electricity, whereas a boiler for heat can use most of it. Imported pellets and shells carry the emissions of shipping and, critics say, sometimes of forest clearance abroad. At home, fuel demand competes with pulp and board mills for the same wood, and a fuel price can make it worthwhile to chip logs that should have been sawn.",
                ja:"発電だけの発電所は燃料のエネルギーのごく一部しか電気に変えられないが、熱のためのボイラーはその大半を使える。輸入のペレットや殻には輸送の排出がともない、批判する人によれば、ときに海外での森林伐開の排出もともなう。国内では燃料の需要が、製紙やボードの工場と同じ木を奪い合い、燃料の価格が、製材すべき丸太をチップにすることを割に合わせてしまうことがある。",
                zh:"純發電廠只能把燃料能量的一小部分轉為電力，而供熱鍋爐能利用其中大部分。進口顆粒與果殼背負著海運排放，批評者還說，有時也背負著海外森林砍伐的排放。在國內，燃料需求與製漿廠、板材廠爭奪同一批木材，燃料價格甚至可能讓本該製材的原木被打成木片變得划算。" } }
          ] },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"“Wood is carbon-neutral”", ja:"「木はカーボンニュートラル」", zh:"「木材是碳中和的」" },
              jp:"循環",
              text:{
                en:"The carbon in wood was taken from the air by the tree and returns to it when the wood burns or decays; if the forest regrows, it takes the same carbon back. International accounting rules record the release where the tree is cut, in the land sector, so counting it again at the chimney would count it twice. Wood used in buildings stores carbon for decades and replaces steel and concrete made with fossil fuels.",
                ja:"木の中の炭素は木が大気から取りこんだもので、木が燃えたり朽ちたりすると大気に戻る。森が再び育てば、同じ炭素をまた取りこむ。国際的な算定の規則は、その放出を木が伐られた場所、つまり土地利用の部門で計上するので、煙突で再び数えれば二重計上になる。建物に使われた木は何十年も炭素を蓄え、化石燃料でつくられる鉄やコンクリートの代わりになる。",
                zh:"木材中的碳是樹木從空氣中吸收而來，木材燃燒或腐朽時又回到空氣中；只要森林重新長回來，就會把同樣的碳再吸收回去。國際計算規則把釋放記在伐木之處、也就是土地利用部門，因此若在煙囪再算一次，就重複計算了。用於建築的木材可儲碳數十年，並取代以化石燃料製成的鋼鐵與混凝土。" } },
            { title:{ en:"“Not so fast”", ja:"「そう単純ではない」", zh:"「沒那麼簡單」" },
              jp:"炭素負債",
              text:{
                en:"Burning releases the carbon at once, while regrowth takes decades — a “carbon debt” that matters for climate targets due in 2030 and 2050. The balance holds only if the forest is actually replanted and regrows, which, in Japan's plantations, is far from certain. And a forest left standing may keep adding carbon for longer than models assume, so harvesting can reduce the store in the forest more than the wood products gain.",
                ja:"燃やせば炭素は一度に出るが、再生には何十年もかかる。この「炭素負債」は、二〇三〇年と二〇五〇年を期限とする気候の目標にとって重要である。釣り合いが成り立つのは、森が実際に植え直され育ち直す場合だけで、日本の人工林ではそれは決して確かではない。また、残された森は、モデルが想定するより長く炭素を加えつづけるかもしれず、伐採で森の蓄えが減る分が、木材製品で増える分を上回ることもありうる。",
                zh:"燃燒一次就釋放全部的碳，重新生長卻要數十年——這筆「碳債」對以 2030 年與 2050 年為期限的氣候目標至關重要。只有森林真的重新造林並長回來，收支才會平衡，而在日本的人工林，這一點遠非確定。此外，留著不伐的森林增加碳的時間可能比模型假設的更長，因此伐採使森林儲碳減少的量，可能多於木製品所增加的量。" } }
          ] },
        { t:"p",
          text:{
            en:"<strong>What would settle it.</strong> For the fuel question, honest life-cycle assessments that include shipping, the origin of each fuel and the use of the waste heat, together with local price data showing whether fuel demand pulls sawlogs into the chipper. For the carbon question, the answer depends on the time horizon and on whether the forest is replanted — so the most useful evidence is Japanese data on what happens to stands after harvest. The detailed arithmetic is on <a href=\"carbon.html\">Forests &amp; Carbon</a>.",
            ja:"<strong>決め手になるもの。</strong>燃料の問いについては、輸送、各燃料の出どころ、廃熱の利用までを含めた正直なライフサイクル評価と、燃料の需要が製材用の丸太をチップへ引き寄せているかどうかを示す地域の価格のデータ。炭素の問いについては、答えは時間の尺度と森が植え直されるかどうかによる。だから最も役立つ証拠は、伐採後の林分に何が起きるかについての日本のデータである。くわしい計算は<a href=\"carbon.html\">森と炭素</a>にある。",
            zh:"<strong>什麼能解決爭論。</strong>燃料問題需要誠實的生命週期評估，涵蓋運輸、每種燃料的來源與廢熱利用，再加上顯示燃料需求是否把製材原木拉進碎木機的在地價格資料。碳的問題則取決於時間尺度與森林是否重新造林——因此最有用的證據，是伐採後林分發生了什麼的日本本土資料。詳細計算見<a href=\"carbon.html\">森林與碳</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Japan Woody Bioenergy Association, report on Gifu biomass plants (2017); Biomass Industrial Society Network, import statistics (2023–2024); Gifu Prefecture, “The state of forestry and the wood industry in Gifu”; IPCC guidelines for national greenhouse gas inventories.",
            ja:"出典：日本木質バイオマスエネルギー協会（岐阜県の発電所に関する報告、二〇一七年）。バイオマス産業社会ネットワーク 輸入統計（二〇二三〜二〇二四年）。岐阜県「岐阜県の林業・木材産業の現状」。IPCC 国別温室効果ガスインベントリ・ガイドライン。",
            zh:"資料來源：日本木質生質能源協會（岐阜電廠報告，2017 年）；生質產業社會網路進口統計（2023–2024 年）；岐阜縣《岐阜縣林業與木材產業現況》；IPCC 國家溫室氣體清冊指南。" } }
      ] },
    { t:"section",
      id:"tall",
      title:{ en:"How tall, and whose wood?", ja:"どこまで高く、だれの木で", zh:"要蓋多高，用誰的木材？" },
      jp:"CLTと国産材",
      body:[
        { t:"p",
          text:{
            en:"Engineered wood has made it possible to build offices and flats of ten storeys or more in timber, and since 2021 Japanese law has encouraged wood in every kind of building. Supporters see a way to use the mature plantations and lock up carbon in cities. Sceptics ask whether tall timber is a sound use of money and wood, and a second argument runs alongside: whether wood-first policies should insist on domestic timber when imported European spruce glulam and North American lumber are often cheaper, drier and more uniform. The Wood Shock of 2021, when a surge in American house-building and shipping disruptions cut imports and sent prices soaring, gave the domestic side a strong argument about reliability.",
            ja:"エンジニアードウッドは、十階建て以上の事務所や集合住宅を木で建てることを可能にし、二〇二一年から日本の法律はあらゆる種類の建物で木を使うことを促している。支持する人は、成熟した人工林を使い、都市に炭素を閉じこめる道を見る。懐疑的な人は、高層の木造はお金と木のまっとうな使い方なのかを問う。これと並んで二つめの論がある。輸入のヨーロッパのスプルースの集成材や北米の製材が、しばしばより安く、よく乾き、そろっているとき、木材利用の政策は国産材にこだわるべきか、である。アメリカの住宅建設の急増と輸送の混乱で輸入が細り、価格が跳ね上がった二〇二一年のウッドショックは、国産材の側に供給の安定という強い論拠を与えた。",
            zh:"工程木材讓十層以上的辦公室與公寓得以用木材興建；自 2021 年起，日本法律鼓勵各類建築使用木材。支持者視之為利用成熟人工林、在城市中鎖住碳的途徑。懷疑者則問：高層木構造是否是對金錢與木材的合理使用？與此並行的第二項爭論是：當進口的歐洲雲杉集成材與北美製材往往更便宜、更乾燥、更均一時，木材優先政策是否應堅持使用國產材？2021 年的「木材危機」（Wood Shock）——美國住宅興建激增加上海運混亂，使進口銳減、價格飆漲——為國產材一方提供了供應穩定的有力論據。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Build tall in domestic wood", ja:"国産材で高く建てる", zh:"用國產材蓋高樓" },
              jp:"推進",
              text:{
                en:"Timber is light, so foundations are smaller; prefabricated panels go up quickly with less noise and waste; and the carbon stored in a large building is substantial. CLT can use lower-grade sugi laminae, giving plantations a market for ordinary logs. Domestic supply avoids currency and shipping shocks and keeps the money in the mountain regions.",
                ja:"木は軽いので基礎が小さくて済み、工場でつくったパネルは速く、騒音も廃棄物も少なく組み上がる。大きな建物に蓄えられる炭素は相当な量になる。CLTは等級の低いスギのラミナを使えるので、人工林の並の丸太に市場を与える。国産の供給は為替や輸送の衝撃を避け、お金を山の地域にとどめる。",
                zh:"木材輕，基礎可以做得較小；工廠預製的板材組裝快、噪音與廢棄物少；大型建築所儲存的碳相當可觀。CLT 可使用等級較低的柳杉層板，為人工林的一般原木創造市場。國內供應可避開匯率與海運衝擊，讓資金留在山區。" } },
            { title:{ en:"Build sensibly, in whatever works", ja:"合うものでまっとうに建てる", zh:"務實地用合適的材料蓋" },
              jp:"慎重",
              text:{
                en:"Tall timber still costs more than steel or concrete in most Japanese projects, and fire rules often require the wood to be encased, hiding it and adding cost. Moisture, sound insulation and long-term durability need care. A building's carbon benefit depends on whether the forest is replanted, and much “wood” in tall buildings is in fact imported lamina. Subsidising height may matter less than getting ordinary low-rise buildings built in wood.",
                ja:"日本の多くの計画では、高層の木造はいまも鉄骨や鉄筋コンクリートより高くつき、防火の規則はしばしば木を覆うことを求めて、木を隠し費用を増やす。湿気、遮音、長期の耐久には注意が要る。建物の炭素の利点は森が植え直されるかどうかにより、高い建物の「木」の多くは実は輸入のラミナである。高さに補助を出すより、ふつうの低層の建物を木で建てることのほうが大事かもしれない。",
                zh:"在多數日本案例中，高層木構造的造價仍高於鋼構或鋼筋混凝土，防火法規常要求以包覆材覆蓋木材，既遮住木頭又增加成本。濕氣、隔音與長期耐久都需要留意。建築的碳效益取決於森林是否重新造林，而高樓中的許多「木材」其實是進口層板。補助建得高，也許不如讓一般低層建築改用木材來得重要。" } }
          ] },
        { t:"p",
          text:{
            en:"<strong>What would settle it.</strong> Much of this can be measured: full-scale fire tests (already the basis of Japan's rules), whole-life carbon assessments of completed buildings that state where the wood came from and whether the forest was replanted, construction-cost data from real projects, and inspections of the first timber mid-rise buildings after twenty or thirty years. The domestic-versus-imported question is partly about price and partly a political choice about rural economies.",
            ja:"<strong>決め手になるもの。</strong>多くは測ることができる。実大の火災試験（すでに日本の規則の基礎になっている）、木の出どころと森が植え直されたかを明らかにした完成建物の全生涯の炭素の評価、実際の計画の建設費のデータ、そして最初の中層木造建築を二十年、三十年後に点検すること。国産か輸入かの問いは、一部は価格の問題で、一部は農山村の経済についての政治の選択である。",
            zh:"<strong>什麼能解決爭論。</strong>其中很多可以量測：足尺防火試驗（已是日本法規的基礎）、註明木材來源及森林是否重新造林的已完工建築全生命週期碳評估、真實案例的營建成本資料，以及在二、三十年後檢查第一批中層木構造建築。國產或進口的問題，一部分是價格，一部分則是關於山村經濟的政治選擇。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, wood supply and demand statistics and reports on the 2021 Wood Shock; Act on the Promotion of the Use of Wood in Buildings (2021). See <a href=\"engineered.html\">Engineered Wood</a>, <a href=\"woodfirst.html\">Putting Wood to Use</a> and <a href=\"trade.html\">Trade &amp; Self-Sufficiency</a>.",
            ja:"出典：林野庁 木材需給表、二〇二一年のウッドショックに関する資料。建築物木材利用促進法（二〇二一年）。<a href=\"engineered.html\">エンジニアードウッド</a>、<a href=\"woodfirst.html\">木づかい</a>、<a href=\"trade.html\">貿易と自給</a>を参照。",
            zh:"資料來源：林野廳木材供需表與 2021 年木材危機相關報告；《建築物木材利用促進法》（2021 年）。見<a href=\"engineered.html\">工程木材</a>、<a href=\"woodfirst.html\">用木之道</a>與<a href=\"trade.html\">貿易與自給</a>。" } }
      ] },
    { t:"section",
      id:"pollen",
      title:{ en:"Felling sugi for the sake of noses", ja:"花粉のためにスギを伐る", zh:"為了鼻子砍柳杉" },
      jp:"花粉症対策",
      body:[
        { t:"p",
          text:{
            en:"Sugi pollen allergy is often called a national affliction: a 2019 nationwide survey by ear, nose and throat specialists put its prevalence at nearly four in ten people. In May 2023 the government adopted a plan to attack it at the source — to reduce the 4.31 million hectares of pollen-producing sugi plantations by about a fifth in ten years, halve pollen output within thirty years, raise sugi felling from about 50,000 to 70,000 hectares a year, and replant with low-pollen varieties. The plan was welcomed by the timber industry, which saw more logs and more demand, and questioned by others who doubted that it would reduce symptoms soon, or at all.",
            ja:"スギ花粉症はしばしば国民病と呼ばれる。耳鼻咽喉科の専門医による二〇一九年の全国調査は、その有病率をほぼ十人に四人とした。二〇二三年五月、政府はこれを発生源から断つ計画を決めた。花粉を出すスギ人工林四百三十一万ヘクタールを十年で約二割減らし、三十年以内に花粉の量を半分にし、スギの伐採を年約五万ヘクタールから七万ヘクタールに増やし、花粉の少ない品種で植え直すというものである。計画は、より多くの丸太と需要を見こんだ木材業界に歓迎され、症状がすぐに、あるいはそもそも軽くなるのかを疑う人々からは問われた。",
            zh:"柳杉花粉症常被稱為「國民病」：耳鼻喉科專科醫師 2019 年的全國調查顯示，盛行率將近每十人就有四人。2023 年 5 月，政府通過從源頭處理的計畫——十年內將會產生花粉的柳杉人工林 431 萬公頃削減約五分之一，三十年內使花粉量減半，柳杉年伐採面積由約 5 萬公頃增至 7 萬公頃，並以少花粉品種重新造林。這項計畫受到預期原木與需求都會增加的木材業界歡迎，卻也遭到另一些人質疑：症狀是否能很快減輕，甚至是否真能減輕。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Cut and replant", ja:"伐って植え替える", zh:"伐採並改植" },
              jp:"発生源対策",
              text:{
                en:"The plantations are mature and due for harvest anyway; the policy aligns public health with forestry, brings forward demand for sugi in housing and CLT, and replaces the trees with low-pollen or pollen-free sugi, of which Japan's breeders have developed many varieties. Over thirty years, a younger forest also takes up carbon faster.",
                ja:"人工林は成熟していて、いずれにせよ伐期にある。この政策は公衆衛生と林業の向きをそろえ、住宅やCLTでのスギの需要を前倒しにし、木を花粉の少ない、あるいは花粉を出さないスギ——日本の育種家が多くの品種をつくってきた——に替える。三十年のあいだに、若い森はより速く炭素を吸収もする。",
                zh:"這些人工林已經成熟，本來就到了伐期；此政策讓公共衛生與林業方向一致，提前帶動住宅與 CLT 對柳杉的需求，並改種少花粉或無花粉柳杉——日本的育種者已培育出許多品種。在三十年間，較年輕的森林也吸碳更快。" } },
            { title:{ en:"Doubts", ja:"疑問", zh:"疑慮" },
              jp:"効果と副作用",
              text:{
                en:"Pollen travels far, and removing a fifth of the source area may reduce exposure much less than a fifth for decades. Large-scale felling brings the slope and replanting risks described above. Hinoki, which dominates Gifu's plantations, also causes allergy and is not covered by the targets. Medical treatments, including sublingual immunotherapy, may relieve sufferers far sooner.",
                ja:"花粉は遠くまで飛び、発生源の五分の一を取り除いても、何十年ものあいだ、さらされる量は五分の一よりずっと少なくしか減らないかもしれない。大規模な伐採は、先に述べた斜面と再造林のリスクをともなう。岐阜の人工林で多いヒノキも花粉症を起こすが、目標の対象になっていない。舌下免疫療法を含む医療のほうが、患者をはるかに早く楽にするかもしれない。",
                zh:"花粉可飄得很遠，移除五分之一的源頭面積，在數十年內使暴露量減少的幅度可能遠小於五分之一。大規模伐採帶來前述的坡地與再造林風險。在岐阜人工林中占多數的扁柏也會引起過敏，卻不在目標之內。包括舌下免疫療法在內的醫療手段，或許能更早緩解患者的痛苦。" } }
          ] },
        { t:"p",
          text:{
            en:"<strong>What would settle it.</strong> Long pollen-count records set against the area actually felled and replanted, region by region, and health data on symptoms and medicine use over the same years. The plan itself sets measurable targets, so it can be judged against them in 2033 and 2053.",
            ja:"<strong>決め手になるもの。</strong>地域ごとに、実際に伐られ植え替えられた面積と長年の花粉の観測記録を突き合わせ、同じ年月の症状と薬の使用についての健康データを見ること。計画そのものが測れる目標を定めているので、二〇三三年と二〇五三年にそれに照らして評価できる。",
            zh:"<strong>什麼能解決爭論。</strong>逐一地區比對長期花粉觀測紀錄與實際伐採、改植的面積，並對照同期的症狀與用藥健康資料。計畫本身設有可量測的目標，因此可在 2033 年與 2053 年據以檢驗。" } },
        { t:"tiny",
          text:{
            en:"Sources: Cabinet Secretariat, overall sugi pollen measures (30 May 2023); nationwide epidemiological survey of nasal allergy (2019). See <a href=\"sugi.html\">Sugi</a> and <a href=\"health.html\">Wood and Health</a>.",
            ja:"出典：内閣官房「花粉症対策の全体像」（二〇二三年五月三十日）。鼻アレルギーの全国疫学調査（二〇一九年）。<a href=\"sugi.html\">スギ</a>、<a href=\"health.html\">木と健康</a>を参照。",
            zh:"資料來源：內閣官房花粉症對策整體方案（2023 年 5 月 30 日）；鼻過敏全國流行病學調查（2019 年）。見<a href=\"sugi.html\">日本柳杉</a>與<a href=\"health.html\">木與健康</a>。" } }
      ] },
    { t:"section",
      id:"wildlife",
      title:{ en:"Deer, bears and the gun", ja:"シカとクマと銃", zh:"鹿、熊與獵槍" },
      jp:"獣害と管理",
      body:[
        { t:"p",
          text:{
            en:"Few questions divide rural and urban Japan as sharply as the management of large animals. In the mountains, sika deer destroy seedlings and crops and wild boar root up paddy banks; in FY2024 Gifu's hunters and culling teams took 17,249 deer and 9,211 boar. Since 2013 national policy has aimed to halve deer and boar numbers, a target that was not met on time and has been extended. Bears are harder. In FY2025, 238 people across Japan were injured or killed by bears — 13 of them fatally, the worst year on record — and in 2025 the law was changed so that municipalities can order the emergency shooting of bears in towns under set conditions. Many residents want more culling; conservationists, and many people far from the mountains, worry about the bears' future and about killing animals whose problem is largely one of human making.",
            ja:"大きな動物の管理ほど、日本の農山村と都市をはっきり分ける問いは少ない。山では、ニホンジカが苗木と作物を荒らし、イノシシが田の畦を掘り返す。二〇二四年度、岐阜の狩猟者と捕獲隊はシカ一万七千二百四十九頭、イノシシ九千二百十一頭を捕獲した。二〇一三年から国の政策はシカとイノシシの数を半分にすることをめざしてきたが、その目標は期限までに達成されず、延長された。クマはさらに難しい。二〇二五年度、全国で二百三十八人がクマによる人身被害を受け、うち十三人が亡くなり、記録上最悪の年となった。同じ二〇二五年、定められた条件のもとで市町村が市街地のクマの緊急銃猟を命じられるよう法律が改められた。多くの住民はもっと捕獲することを望み、保護にかかわる人々や山から遠く離れて暮らす多くの人は、クマの将来と、問題の多くが人間のつくったものである動物を殺すことを案じる。",
            zh:"很少有問題像大型動物管理這樣，把日本的山村與都市分得這麼清楚。在山區，梅花鹿破壞苗木與作物，野豬翻掘田埂；2024 年度岐阜的獵人與捕獲隊捕獲了 17,249 頭鹿與 9,211 頭野豬。自 2013 年起，國家政策以將鹿與野豬數量減半為目標，但未能如期達成，已予延長。熊的問題更難。2025 年度全日本有 238 人遭熊攻擊受傷或死亡——其中 13 人喪命，是有紀錄以來最糟的一年；同在 2025 年，法律修正讓市町村能在一定條件下，下令對出現在市區的熊進行緊急射殺。許多居民希望加強捕獲；保育人士以及許多遠離山區的人，則擔憂熊的未來，也不忍撲殺那些問題多半是人類造成的動物。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Cull harder", ja:"捕獲を強める", zh:"加強捕獲" },
              jp:"個体数管理",
              text:{
                en:"Without fewer deer, neither replanting nor broadleaf restoration can succeed, and fences on every new plantation are unaffordable. Human safety must come first, especially for forest workers, farmers and children in villages; bears that have learned to enter towns will return. Hunters are ageing and few, so municipalities and professional culling teams need the powers and funding to act.",
                ja:"シカを減らさなければ、再造林も広葉樹の回復もうまくいかず、新しい人工林すべてに柵を張る費用はまかなえない。人の安全、とくに林業の働き手、農家、集落の子どもの安全が第一でなければならない。町に入ることを覚えたクマは戻ってくる。狩猟者は年老い数も少ないので、市町村と専門の捕獲隊には、動くための権限と資金が要る。",
                zh:"鹿不減少，無論重新造林或恢復闊葉林都不會成功，而每片新造林都架圍籬又負擔不起。人身安全必須優先，尤其是林業工作者、農民與村裡的孩子；學會進入城鎮的熊還會再來。獵人既老又少，因此市町村與專業捕獲隊需要行動的權限與經費。" } },
            { title:{ en:"Address the causes", ja:"原因に向き合う", zh:"處理根本原因" },
              jp:"すみ分け",
              text:{
                en:"Bears come out when beech and oak nuts fail, and are drawn by unharvested persimmons, chestnuts and rubbish in depopulated villages; overgrown fields and abandoned satoyama have removed the old buffer between forest and home. Culling does not change these, and some bear populations are small and isolated. Better zoning, electric fences, clearing attractants and forecasting bad nut years may prevent more attacks than shooting.",
                ja:"クマはブナやナラの実が不作の年に出てきて、人の減った集落の取り残されたカキやクリやごみに引き寄せられる。荒れた畑と放棄された里山が、森と家のあいだの昔の緩衝地帯を消してしまった。捕獲はこれらを変えず、クマの地域個体群には小さく孤立したものもある。よりよいすみ分け、電気柵、誘引物の除去、堅果の不作年の予測のほうが、銃よりも多くの事故を防ぐかもしれない。",
                zh:"山毛櫸與橡實歉收時熊就會出沒，並被人口外流村落裡沒人採收的柿子、栗子與垃圾吸引；荒廢的田地與里山，抹去了森林與住家之間原有的緩衝帶。捕獲改變不了這些，而且有些熊的族群既小又孤立。更好的分區、電圍籬、清除誘引物，以及預測堅果歉收年，也許比射殺更能防止傷人事件。" } }
          ] },
        { t:"p",
          text:{
            en:"<strong>What would settle it.</strong> Better population estimates with honest margins of error; before-and-after studies of where culling, fencing or clearing attractants actually reduced damage; and the nut-crop forecasts that Gifu Prefecture already publishes each autumn, tested against the number of bear sightings. How much risk a village should accept, and how many animals to kill, remains a question of values.",
            ja:"<strong>決め手になるもの。</strong>正直な誤差の幅を添えた、よりよい個体数の推定。捕獲、柵、誘引物の除去が実際に被害を減らしたのはどこかを確かめる前後の比較研究。そして岐阜県が毎年秋に公表している堅果類の豊凶の予測を、クマの出没件数と照らし合わせること。集落がどれだけのリスクを受け入れるべきか、何頭を殺すかは、価値の問いとして残る。",
            zh:"<strong>什麼能解決爭論。</strong>附上坦白誤差範圍的更佳族群估計；比較捕獲、圍籬或清除誘引物在哪些地方真正減少了損害的前後對照研究；以及把岐阜縣每年秋天公布的堅果豐歉預測，與熊的目擊件數相互驗證。村落應接受多少風險、要撲殺多少動物，仍是價值問題。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture, wildlife capture statistics (FY2024) and nut-crop forecasts; Ministry of the Environment, bear damage statistics (as reported by Nikkei and Kyodo, April 2026); Ministry of the Environment and Ministry of Agriculture, Forestry and Fisheries, measures to strengthen wildlife capture (2013). See <a href=\"ecology.html\">Forest Ecology</a>.",
            ja:"出典：岐阜県 野生鳥獣の捕獲頭数（二〇二四年度）、堅果類の豊凶予測。環境省 クマ類による人身被害（日本経済新聞・共同通信の報道、二〇二六年四月）。環境省・農林水産省「抜本的な鳥獣捕獲強化対策」（二〇一三年）。<a href=\"ecology.html\">森の生態</a>を参照。",
            zh:"資料來源：岐阜縣野生動物捕獲統計（2024 年度）與堅果豐歉預測；環境省熊類人身傷害統計（日本經濟新聞、共同社報導，2026 年 4 月）；環境省與農林水產省〈鳥獸捕獲強化對策〉（2013 年）。見<a href=\"ecology.html\">森林生態</a>。" } }
      ] },
    { t:"related",
      items:[
        { href:"woodfuture.html", why:{ en:"The choices these debates bear on.", ja:"これらの論争がかかわる選択。", zh:"這些爭論所牽涉的抉擇。" } },
        { href:"silviculture.html",
          why:{ en:"How plantations are grown and harvested.", ja:"人工林の育て方と伐り方。", zh:"人工林如何培育與收穫。" } },
        { href:"carbon.html", why:{ en:"The carbon arithmetic in detail.", ja:"炭素の計算をくわしく。", zh:"碳的計算細節。" } },
        { href:"listening.html",
          why:{ en:"The blind tests behind the tonewood debate.", ja:"トーンウッドの論争の背後にある盲検。", zh:"音木爭論背後的盲測。" } },
        { href:"fuel.html",
          why:{ en:"Wood as fuel, from hearth to power station.", ja:"囲炉裏から発電所まで、燃料としての木。", zh:"從地爐到發電廠，作為燃料的木材。" } }
      ] }
  ] };

/* ---- ------------------------------------------ learning */
GIFU.pages["learning"] = { kicker:{ en:"Reference · 06", ja:"資料 · 06", zh:"資料 · 06" },
  title:{ en:"How People Learn It", ja:"人はいかに学ぶか", zh:"人們如何學會它" },
  jp:"修学",
  lede:{
    en:"Every board in this book passed through hands that had to learn their work somewhere: in a forest crew, a sawmill, a furniture factory, a lacquer shop or a guitar workshop. For centuries that learning happened in only one way — years at the side of a master. Today Gifu offers more routes into wood than almost any other prefecture: a forest academy in Mino, a woodcraft school in Takayama, private schools run by workshops, a national programme that pays firms to train new forest workers, and certificates that mark each stage. This page describes where people learn, how long it takes, and what it leads to.",
    ja:"この本に出てくる板はすべて、どこかで仕事を覚えた手を通ってきた。山の作業班、製材所、家具工場、漆の工房、ギターの工房である。何百年ものあいだ、その学び方はひとつしかなかった。親方のそばで何年も過ごすことである。いまの岐阜には、木の世界へ入る道がほかのどの県にも劣らず多い。美濃の森林文化アカデミー、高山の木工芸術スクール、工房が営む私塾、林業の新人を育てる事業体に国が費用を出す制度、そして段階ごとの資格である。この頁は、人がどこで学び、どれだけの年月がかかり、それがどこへつながるのかを述べる。",
    zh:"本書裡的每一塊木板，都經過一雙在某處學會手藝的手：林業作業班、製材廠、家具工廠、漆器工坊或吉他工房。幾百年來，學習只有一種方式——在師傅身旁待上多年。今天的岐阜，通往木材世界的道路之多，幾乎不輸任何一個縣：美濃的森林文化學院、高山的木工藝術學校、由工坊經營的私塾、由國家出資讓林業事業體培訓新人的制度，以及標記每個階段的證照。本頁說明人們在哪裡學習、要花多少年，以及學成之後通往何處。" },
  body:[
    { t:"section",
      id:"routes",
      title:{ en:"Three ways in", ja:"三つの入口", zh:"三種入門之路" },
      jp:"徒弟・学校・現場",
      body:[
        { t:"p",
          text:{
            en:"The oldest route is apprenticeship. A carpenter's or joiner's apprentice, <em>deshi</em>, traditionally lived in the master's household, swept the shop, sharpened tools and watched for years before being trusted with a visible joint; the Hida carpenters who were sent to the capital under the eighth-century tax code (see <a href=\"takumi.html\">The Hida Takumi</a>) were, in effect, a state-organised version of the same system. The second route is the school: public vocational schools grew out of the training centres set up after the Second World War, and since 2001 Gifu has had a prefectural academy that teaches forestry, timber building and furniture making under one roof. The third, and today the largest, is learning on the job with public support: a forestry firm hires a newcomer and the state pays part of the cost of training them over three years.",
            ja:"もっとも古い道は徒弟制である。大工や建具職の弟子は、親方の家に住みこみ、仕事場を掃き、道具を研ぎ、何年も見て覚えてから、ようやく人目につく継手を任された。八世紀の税制のもとで都へ送られた飛騨の工（<a href=\"takumi.html\">飛騨の匠</a>を参照）は、同じしくみを国が組織したものだったともいえる。第二の道は学校である。公立の職業訓練校は第二次世界大戦後につくられた補導所から育ち、岐阜には二〇〇一年から、林業と木造建築と家具づくりをひとつの屋根の下で教える県立のアカデミーがある。第三の道、そしていま最も大きな道は、公的な支えを受けて現場で学ぶことである。林業の事業体が新人を雇い、三年間の研修の費用の一部を国が出す。",
            zh:"最古老的路是學徒制。木匠或建具師傅的弟子（<em>deshi</em>）傳統上住在師傅家，掃工坊、磨工具，看上好幾年，才被允許做一個會被人看見的榫接。依八世紀稅制被派往京城的飛驒工匠（見<a href=\"takumi.html\">飛驒之匠</a>），某種意義上就是由國家組織的同一套制度。第二條路是學校：公立職業訓練學校由第二次世界大戰後設立的訓練所發展而來，而自 2001 年起，岐阜有一所縣立學院，把林業、木構建築與家具製作放在同一個屋簷下教授。第三條路、也是今天規模最大的一條，是在公共支持下於現場學習：林業事業體僱用新人，國家負擔三年培訓費用的一部分。" } },
        { t:"p",
          text:{
            en:"The routes now overlap. Most furniture makers in Takayama went to a school and then spent years in a factory or a master's workshop before working alone; most young forest workers took a one- or two-year college course and then entered the national training programme as employees. What has changed most is who comes. Until the 1990s forestry and woodwork recruited mainly from farming families in the mountains; today a large share of the students in Mino and Takayama come from cities, many after a first career, and the schools have adapted by admitting adults, offering grants and teaching business skills alongside tools.",
            ja:"いまでは道どうしが重なっている。高山の家具職人の多くは、学校を出たあと工場や親方の工房で何年か過ごしてから独り立ちした。若い林業の働き手の多くは、一年か二年の林業大学校の課程を終えてから、雇われて国の研修事業に入った。いちばん変わったのは、誰が来るかである。一九九〇年代までは、林業も木工も主に山の農家の子を受け入れていたが、いまの美濃や高山の学生の多くは都市から来ており、別の仕事をしてから来る人も少なくない。学校の側も、社会人を受け入れ、給付金を用意し、道具とともに経営の知識も教えるようになった。",
            zh:"如今這幾條路彼此交疊。高山的家具工匠多半先讀學校，再到工廠或師傅工坊待上數年才獨立；年輕的林業工作者多半先修完一到兩年的林業大學校課程，再以員工身分進入國家培訓計畫。改變最大的是「誰來」。直到 1990 年代，林業與木工主要從山區農家招人；今天美濃與高山的學生有很大比例來自都市，不少人是轉換跑道而來。學校也隨之調整：招收社會人士、提供給付金，並在工具之外教授經營知識。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Forestry colleges", ja:"林業大学校など", zh:"林業大學校等" },
              v:"28",
              d:{
                en:"In Japan, April 2025 (24 in April 2022)",
                ja:"全国、二〇二五年四月（二〇二二年四月は二十四校）",
                zh:"全日本，2025 年 4 月（2022 年 4 月為 24 所）" } },
            { k:{ en:"New forest workers", ja:"林業の新規就業者", zh:"林業新進人員" },
              v:"3,039",
              d:{ en:"Japan, FY2024", ja:"全国、二〇二四年度", zh:"全日本，2024 年度" } },
            { k:{ en:"Forest Academy places", ja:"アカデミーの定員", zh:"森林文化學院名額" },
              v:"40",
              d:{ en:"A year: 20 engineers, 20 creators", ja:"毎年。エンジニア科二十、クリエーター科二十", zh:"每年：工程師科 20、創作者科 20" } },
            { k:{ en:"Years to a craft title", ja:"伝統工芸士まで", zh:"成為傳統工藝士" },
              v:"12+",
              d:{ en:"Practice required for a certified traditional craftsman", ja:"認定に必要な実務経験", zh:"認定所需的實務年資" } }
          ] },
        { t:"h3", text:{ en:"A typical path into forestry", ja:"林業へ入る典型的な道", zh:"進入林業的典型路徑" }, jp:"就業までの流れ" },
        { t:"steps",
          items:[
            { title:{ en:"Try it", ja:"体験する", zh:"先體驗" },
              jp:"体験・相談",
              meta:{ en:"days", ja:"数日", zh:"數天" },
              text:{
                en:"Forestry job fairs, open days at the colleges and short taster courses let newcomers see the work — steep slopes, chainsaws, weather — before they commit.",
                ja:"林業の就業相談会、学校の見学会、短い体験講座で、斜面、チェーンソー、天候といった仕事の実際を、決める前に見ることができる。",
                zh:"林業就業說明會、學校開放日與短期體驗課程，讓新人在下決定前先看見工作的實況——陡坡、鏈鋸與天候。" } },
            { title:{ en:"College", ja:"学校", zh:"學校" },
              jp:"林業大学校",
              meta:{ en:"1–2 years", ja:"一〜二年", zh:"1–2 年" },
              text:{
                en:"A forestry college teaches silviculture, surveying, machine operation and safety, and the legally required special training for chainsaw felling; students under 45 may receive a national grant of up to about ¥1.5 million a year.",
                ja:"林業大学校では、育林、測量、機械の操作と安全、法で義務づけられたチェーンソー伐木の特別教育を学ぶ。四十五歳未満の学生は、年間最大およそ百五十万円の国の給付金を受けられる場合がある。",
                zh:"林業大學校教授育林、測量、機械操作與安全，以及法定必修的鏈鋸伐木特別教育；未滿 45 歲的學生可能獲得每年最高約 150 萬日圓的國家給付金。" } },
            { title:{ en:"Trainee", ja:"研修生", zh:"研修生" },
              jp:"フォレストワーカー",
              meta:{ en:"years 1–3", ja:"一〜三年目", zh:"第 1–3 年" },
              text:{
                en:"Hired by a forest owners' cooperative or a private firm, the newcomer works in a crew and attends Green Employment training as a Forest Worker, gaining licences for machines, cable logging and first aid.",
                ja:"森林組合や民間の事業体に雇われ、班の一員として働きながら、「緑の雇用」のフォレストワーカー研修を受け、機械や架線集材、救急の資格をとる。",
                zh:"受僱於森林組合或民間事業體，在作業班中工作，同時以「森林工作者」身分參加「綠色僱用」研修，取得機械、架線集材與急救等資格。" } },
            { title:{ en:"Leader", ja:"班長", zh:"領班" },
              jp:"フォレストリーダー",
              meta:{ en:"after about 5 years", ja:"およそ五年後", zh:"約 5 年後" },
              text:{
                en:"Experienced workers train as Forest Leaders, responsible for a crew's planning, safety and teaching the next newcomers.",
                ja:"経験を積んだ働き手はフォレストリーダーの研修を受け、班の段取り、安全、次の新人の指導を担う。",
                zh:"有經驗的工作者接受「森林領導者」研修，負責作業班的規劃、安全，並指導下一批新人。" } },
            { title:{ en:"Manager", ja:"統括", zh:"經理" },
              jp:"フォレストマネージャー",
              meta:{ en:"after about 10 years", ja:"およそ十年後", zh:"約 10 年後" },
              text:{
                en:"Forest Managers run several sites, plan harvests with owners and negotiate with mills — the rung at which forestry becomes a career rather than a job.",
                ja:"フォレストマネージャーは複数の現場を統括し、所有者と伐採の計画を立て、製材所と交渉する。林業が「仕事」から「職業人生」になる段である。",
                zh:"「森林經理人」統籌多個作業現場，與林主規劃伐採、與製材廠協商——在這一階，林業從「一份工作」變成「一個職涯」。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, list of forestry colleges (April 2025) and labour statistics; Japanese Forest Society, schools for forestry; Gifu Academy of Forest Science and Culture, course information; Association for the Promotion of Traditional Craft Industries, certification rules. Leader and Manager timings are typical, not fixed.",
            ja:"出典：林野庁「林業大学校等一覧」（二〇二五年四月）および林業労働力の資料。日本森林学会「森林・林業について学べる学校」。岐阜県立森林文化アカデミー 学科案内。伝統的工芸品産業振興協会 伝統工芸士の認定。リーダー、マネージャーまでの年数は目安であり、決まりではない。",
            zh:"資料來源：林野廳〈林業大學校等一覽〉（2025 年 4 月）與林業勞動力資料；日本森林學會〈可學習森林與林業的學校〉；岐阜縣立森林文化學院課程介紹；傳統工藝品產業振興協會傳統工藝士認定規則。領導者與經理人所需年數為一般情況，並非固定規定。" } }
      ] },
    { t:"section",
      id:"academy",
      title:{ en:"The Forest Academy in Mino", ja:"美濃の森林文化アカデミー", zh:"美濃的森林文化學院" },
      jp:"森林文化アカデミー",
      body:[
        { t:"p",
          text:{
            en:"The Gifu Academy of Forest Science and Culture, on the hills of Sogo at the edge of Mino, is the prefecture's main school for wood. It began in 1971 as the Gifu Prefectural Forestry Junior College, a two-year course for forest technicians that produced more than six hundred graduates in thirty years, most of whom went to work for the prefecture, the forest owners' cooperatives and the timber trade in Gifu. In 2001 the prefecture rebuilt it with a wider brief. The new academy was to teach not only how to grow and harvest trees but how to build with them, make things from them, teach about them and run a business in the mountains — a programme it now sums up as “forest-based solutions”, by analogy with nature-based solutions.",
            ja:"美濃市の外れ、曽代の丘にある岐阜県立森林文化アカデミーは、県の木の学校の中心である。始まりは一九七一年の岐阜県林業短期大学校で、林業技術者を育てる二年の課程から、三十年のあいだに六百人を超える卒業生が出た。その多くは県、森林組合、県内の木材業に就いた。二〇〇一年、県はこれを広い目的をもつ学校につくりかえた。新しいアカデミーは、木の育て方と伐り方だけでなく、木で建て、木でものをつくり、木について教え、山で事業を営むことまで教える。学校はいま、この考え方を自然に根ざした解決策になぞらえて「森林に根ざした解決策（FbS）」と呼んでいる。",
            zh:"岐阜縣立森林文化學院位於美濃市郊外曾代的山丘上，是縣內學習木材的主要學校。它的前身是 1971 年設立的岐阜縣林業短期大學校，以兩年課程培育林業技術人員，三十年間畢業生超過 600 人，多數進入縣政府、森林組合與縣內木材業工作。2001 年，縣政府以更寬廣的目標將它改制重建：新學院不只教人如何育林與伐木，也教人用木材建造、製作器物、從事森林教育，以及在山村經營事業——學院如今仿照「以自然為本的解決方案」，稱之為「以森林為本的解決方案」（FbS）。" } },
        { t:"p",
          text:{
            en:"There are two two-year courses, each with twenty places a year. The Forest and Wood Engineers course takes school-leavers and, in its second year, divides into a forestry track and a forest-industry track; its graduates become forest workers, technicians for cooperatives and the prefecture, and staff of sawmills and timber yards. The Forest and Wood Creators course is for people aged 22 or over or with work experience, and teaches forestry, environmental education, timber architecture and woodworking. With about eighty students and eighteen full-time teaching staff, the academy is small enough that students know every teacher and large enough to keep a 33-hectare teaching forest, workshops, sawing and drying equipment and a carpentry yard. The campus buildings themselves, built largely of Gifu timber, serve as specimens: students measure how they weather and have designed and built further small buildings as coursework (see <a href=\"building.html\">Building in Wood</a>).",
            ja:"課程は二年制が二つで、定員はそれぞれ毎年二十人である。「森と木のエンジニア科」は高校を出た人を受け入れ、二年目に林業と森林・木材産業の二つの専攻に分かれる。卒業生は林業の現場の働き手、森林組合や県の技術者、製材所や木材市場の職員になる。「森と木のクリエーター科」は二十二歳以上か社会人経験のある人のための課程で、林業、環境教育、木造建築、木工を学ぶ。学生はおよそ八十人、専任の教員は十八人。学生がすべての教員の顔を知るほど小さく、それでいて三十三ヘクタールの演習林、木工房、製材と乾燥の設備、大工の作業場をもつほどには大きい。県産材を多く使った校舎そのものも教材で、学生は建物の風化を測り、授業として小さな建物を設計し、建ててきた（<a href=\"building.html\">木で建てる</a>を参照）。",
            zh:"學院設有兩個兩年制科系，每年各招 20 人。「森林與木材工程師科」招收高中畢業生，第二年分為林業與森林・木材產業兩個方向；畢業生成為林業現場工作者、森林組合與縣政府的技術人員，以及製材廠與木材市場的職員。「森林與木材創作者科」招收 22 歲以上或有工作經驗者，學習林業、環境教育、木構建築與木工。學院約有 80 名學生、18 名專任教員：小到學生認得每一位老師，又大到足以維持 33 公頃的實習林、木工房、製材與乾燥設備，以及木工作業場。大量使用岐阜縣產材建成的校舍本身就是教材：學生量測建築的風化，也在課程中設計並建造了更多小型建築（見<a href=\"building.html\">以木建造</a>）。" } },
        { t:"p",
          text:{
            en:"The academy also faces outwards. It has a partnership with Rottenburg University of Applied Forest Sciences in Germany, and teachers and students travel between the two. Since 2020 its campus has housed <em>morinos</em>, the prefecture's forest education centre, where children and adults learn in the teaching forest (see <a href=\"mokuiku.html\">Growing Up with Wood</a>). Short courses for working foresters, builders and teachers run through the year, and its graduates have formed networks of their own — among them WOOD AC, a non-profit group of architecture graduates in Mino with a furniture workshop. Students heading for forestry can apply for the Green Youth Employment grant, which in Gifu pays up to ¥1.15 million a year for up to two years to students who intend to work in forestry, with repayment if they do not.",
            ja:"アカデミーは外にも開かれている。ドイツのロッテンブルク林業大学と連携し、教員と学生が行き来している。二〇二〇年からは、県の森林総合教育センター「morinos」がキャンパスにあり、子どもや大人が演習林で学ぶ（<a href=\"mokuiku.html\">木育</a>を参照）。林業の現場の人、建築の人、教員のための短い講座が一年を通して開かれ、卒業生は自分たちの網の目もつくってきた。美濃の建築系の卒業生が集まり家具の工房をもつNPO法人「WOOD AC」はその一例である。林業に就くつもりの学生は「緑の青年就業準備給付金」に応募でき、岐阜県では年間最大百十五万円を最長二年間受け取れる。林業に就かなければ返還を求められることがある。",
            zh:"學院也向外開放。它與德國羅騰堡林業應用科技大學合作，師生互相往來。自 2020 年起，縣的森林綜合教育中心「morinos」設在校園內，兒童與成人在實習林中學習（見<a href=\"mokuiku.html\">木育</a>）。學院全年為林業從業者、建築業者與教師開設短期課程；畢業生也建立了自己的網絡，例如由美濃的建築科畢業生組成、擁有家具工房的 NPO「WOOD AC」。有意投入林業的學生可申請「綠色青年就業準備給付金」，在岐阜縣每年最高 115 萬日圓、最長兩年；若未從事林業，可能須返還。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Academy of Forest Science and Culture, history and philosophy, course pages, and Gifu Green Youth Employment grant page; Gifu Prefecture.",
            ja:"出典：岐阜県立森林文化アカデミー「沿革と理念」、学科案内、「岐阜県緑の青年就業準備給付金」。岐阜県。",
            zh:"資料來源：岐阜縣立森林文化學院〈沿革與理念〉、科系介紹與〈岐阜縣綠色青年就業準備給付金〉；岐阜縣。" } }
      ] },
    { t:"section",
      id:"forestry",
      title:{ en:"Training forest workers nationally", ja:"全国の林業の担い手育成", zh:"全國的林業人才培育" },
      jp:"緑の雇用と林業大学校",
      body:[
        { t:"p",
          text:{
            en:"Japan's national scheme for new forest workers is <em>Midori no Koyō</em>, Green Employment, run by the Forestry Agency since fiscal 2003. It does not train people itself; it pays forestry businesses that hire newcomers for part of the cost of training them. A trainee spends three years as a Forest Worker, combining work in a crew with blocks of instruction in felling, machines, cable logging, first aid and safety; experienced workers can go on to Forest Leader and Forest Manager courses. According to the Forestry Agency, new entrants to forestry averaged about 2,000 a year before the scheme and about 3,200 a year after it; by 2015 about 9,000 people had become forest workers through it, and in FY2024 3,039 people entered forestry. How the work itself is done, and why it is dangerous, is described on <a href=\"workers.html\">The People of the Forest</a>.",
            ja:"日本の林業の新人育成の柱は、林野庁が二〇〇三年度から進める「緑の雇用」である。国がみずから人を教えるのではなく、新人を雇った林業の事業体に、研修の費用の一部を支払う。研修生は三年間フォレストワーカーとして、班の仕事と、伐木、機械、架線集材、救急、安全の集中講習を組み合わせて学び、経験を積めばフォレストリーダー、フォレストマネージャーの研修へ進める。林野庁によれば、林業の新規就業者は事業の前は年平均およそ二千人、事業の後はおよそ三千二百人である。二〇一五年までにおよそ九千人がこの事業を通じて林業の担い手となり、二〇二四年度には三千三十九人が新しく林業に就いた。仕事そのものと、その危険は<a href=\"workers.html\">山で働く人々</a>に述べる。",
            zh:"日本培育林業新人的主要制度是林野廳自 2003 年度起推動的「綠色僱用」（<em>Midori no Koyō</em>）。國家並不親自教人，而是向僱用新人的林業事業體支付部分培訓費用。研修生以「森林工作者」身分學習三年，結合作業班的實務與伐木、機械、架線集材、急救和安全等集中課程；累積經驗後可再參加「森林領導者」與「森林經理人」研修。根據林野廳，計畫實施前每年林業新進人數平均約 2,000 人，實施後約 3,200 人；到 2015 年約有 9,000 人透過此計畫成為林業工作者，2024 年度有 3,039 人新進入林業。工作本身與其危險，見<a href=\"workers.html\">山林中的工作者</a>。" } },
        { t:"p",
          text:{
            en:"The second national change was the spread of forestry colleges. For decades only a handful of prefectures had one — Gifu's junior college of 1971 was one of them — but from 2012 prefectures began opening new ones, often in partnership with their forest owners' cooperatives. The Japanese Forest Society counted 24 in April 2022; the Forestry Agency listed 28 in April 2025, from Hokkaidō to Kagoshima, about half with one-year courses and half with two. Their students can apply for the Green Youth Employment grant, set at up to ¥1.5 million a year and raised to ¥1.55 million from FY2020 for colleges whose syllabus has been reviewed by outside experts; prefectures set their own rates within that limit, which is why Gifu's figure is lower. For the four-year academic route, the Japanese Forest Society counts 33 universities with forestry departments, among them Gifu University.",
            ja:"もうひとつの全国的な変化は、林業大学校の広がりである。長いあいだ林業の学校をもつ県はわずかで、一九七一年の岐阜の林業短期大学校はそのひとつだった。二〇一二年からは各県が新しい学校を次々に開き、森林組合と組むことも多い。日本森林学会は二〇二二年四月に二十四校を数え、林野庁の一覧には二〇二五年四月時点で北海道から鹿児島まで二十八校が並ぶ。課程はおよそ半数が一年、半数が二年である。学生は「緑の青年就業準備給付金」に応募でき、上限は年間百五十万円で、二〇二〇年度からは外部の有識者の評価を受けたシラバスをもつ学校なら百五十五万円に引き上げられた。県はこの範囲で額を決めるため、岐阜の額はこれより低い。四年制の学問の道としては、日本森林学会によれば林学系の学科をもつ大学が三十三あり、岐阜大学もそのひとつである。",
            zh:"第二項全國性的變化是林業大學校的普及。數十年間只有少數幾個縣設有林業學校——1971 年的岐阜林業短期大學校即為其一——但自 2012 年起各縣陸續開設新校，且常與森林組合合作。日本森林學會在 2022 年 4 月統計為 24 所；林野廳的名單在 2025 年 4 月列出從北海道到鹿兒島共 28 所，約一半為一年制、一半為兩年制。學生可申請「綠色青年就業準備給付金」，上限為每年 150 萬日圓；自 2020 年度起，課程大綱經外部專家評鑑的學校可提高至 155 萬日圓。各縣在此範圍內自訂金額，因此岐阜的金額較低。至於四年制的學術路線，日本森林學會統計有 33 所大學設有林學相關科系，岐阜大學即為其一。" } },
        { t:"p",
          text:{
            en:"Many people meet forestry earlier, at school. In 2014 the Forestry Agency counted 72 high schools in Japan with forestry courses, five of them in Gifu: Gifu Nōrin in Kitagata, Gujō in Hachiman and Kamo Nōrin in Minokamo, each with a forest science department, and Ena Nōgyō and Hida Takayama with environmental science departments. Their pupils learn to plant, prune and survey in school forests, sit the chainsaw and brushcutter courses, and some go straight into cooperatives at eighteen. Others continue to the Forest Academy or a university — or come back to forestry ten years later from an office job, which is now one of the commonest stories in the profession.",
            ja:"林業にもっと早く、学校で出会う人も多い。林野庁は二〇一四年に、林業の課程をもつ高校を全国で七十二校数えた。そのうち岐阜は五校で、北方町の岐阜農林、八幡の郡上、美濃加茂の加茂農林が森林科学科を、恵那農業と飛騨高山が環境科学科をもっていた。生徒は学校林で植え、枝を打ち、測量を学び、チェーンソーや刈払機の講習を受け、十八歳でそのまま森林組合へ就く人もいる。森林文化アカデミーや大学へ進む人もいれば、十年後に事務の仕事から林業へ戻ってくる人もいる。いまでは、この最後の話がこの職業で最もよく聞く経歴のひとつになっている。",
            zh:"許多人更早就在學校接觸林業。林野廳在 2014 年統計，全日本設有林業課程的高中共 72 所，其中岐阜 5 所：北方町的岐阜農林、八幡的郡上與美濃加茂的加茂農林設有森林科學科，惠那農業與飛驒高山則設有環境科學科。學生在學校林裡學習種植、修枝與測量，參加鏈鋸與割草機講習，有些人 18 歲就直接進入森林組合；另一些人則升學到森林文化學院或大學——或者十年後從辦公室工作轉回林業，這如今已是這一行最常見的經歷之一。" } },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency, Green Employment and labour statistics, list of forestry colleges (April 2025), list of high schools with forestry courses (April 2014); Green Employment website (ringyou.net), statistics; Japanese Forest Society, schools for forestry; J-FIC, report on the grant increase (May 2020).",
            ja:"出典：林野庁「緑の雇用」と林業労働力の資料、「林業大学校等一覧」（二〇二五年四月）、「森林・林業に関する科目・コース設置校一覧表（高等学校）」（二〇一四年四月）。「緑の雇用」ウェブサイト（RINGYOU.NET）統計。日本森林学会「森林・林業について学べる学校」。日本林業調査会（J-FIC）給付金引き上げの記事（二〇二〇年五月）。",
            zh:"資料來源：林野廳「綠色僱用」與林業勞動力資料、〈林業大學校等一覽〉（2025 年 4 月）、〈設有森林・林業科目與課程的高中一覽〉（2014 年 4 月）；「綠色僱用」網站（RINGYOU.NET）統計；日本森林學會〈可學習森林與林業的學校〉；日本林業調查會（J-FIC）給付金調升報導（2020 年 5 月）。" } }
      ] },
    { t:"section",
      id:"takayama",
      title:{ en:"Learning to make furniture in Takayama", ja:"高山で家具づくりを学ぶ", zh:"在高山學做家具" },
      jp:"木工の学校と塾",
      body:[
        { t:"p",
          text:{
            en:"Takayama's furniture industry has always trained its own. In 1946, the year the town's factories began making furniture for the Occupation forces, the prefecture opened a training centre for joiners, <em>tategu</em>, in Takayama. Through several changes of name it became the Takayama technical school, moved in 1986 to its present campus at Takumigaoka — “the hill of the takumi” — became a branch of the prefecture's International Takumi Academy in 2003, and since 2018 has carried its own name, the Gifu Wood Craft Art School. Its one-year woodworking course starts with hand tools — sharpening, planing, marking and cutting joints — and moves on to woodworking machines, CAD drawing and programming numerically controlled routers, with the region's own techniques along the way: Shunkei lacquering, steam-bending and turning. Students sit the national skill test in furniture making at grade 2 and qualify as supervisors of woodworking machines.",
            ja:"高山の家具産業は、昔から自分で職人を育ててきた。町の工場が占領軍の家具をつくりはじめた一九四六年、県は高山に建具の補導所を開いた。何度か名を変えて高山高等技術専門校となり、一九八六年に「匠ケ丘」の現在の校地へ移り、二〇〇三年に県立国際たくみアカデミーの分校となり、二〇一八年からは岐阜県立木工芸術スクールという独自の名をもつ。一年の木工科は、刃物を研ぎ、鉋をかけ、墨を付け、継手を刻む手道具の仕事から始まり、木工機械、CADによる製図、NCルーターのプログラムへと進み、そのあいだに飛騨春慶の塗り、曲木、挽物というこの土地の技も学ぶ。学生は国の技能検定の家具製作二級を受け、木材加工用機械作業主任者の資格もとる。",
            zh:"高山的家具產業一向自己培養工匠。1946 年，也就是鎮上工廠開始為占領軍製作家具的那一年，縣政府在高山設立了建具（<em>tategu</em>，門窗隔扇）訓練所。歷經幾次改名，它成為高山高等技術專門校，1986 年遷到現址「匠丘」，2003 年成為縣立國際匠學院的分校，自 2018 年起則以「岐阜縣立木工藝術學校」之名獨立。一年制的木工科從手工具開始——磨刃、刨削、劃線與鑿刻榫接——再進到木工機械、CAD 製圖與數控雕刻機的程式設計，其間也學習本地的技藝：飛驒春慶塗、蒸汽曲木與車旋。學生參加國家技能檢定的家具製作二級，並取得木材加工機械作業主任者資格。" } },
        { t:"p",
          text:{
            en:"The school is cheap by any standard — for the 2026 intake an entry fee of ¥5,650 and tuition of ¥59,400 for the year, with tools, textbooks, work clothes and insurance adding about ¥153,000, of which the student's own set of chisels, planes and saws is ¥89,870 — and many of its students are adults changing careers. Its graduates go into Hida's factories, small workshops and joinery firms; others work for a few years and then set up alone in the villages around Takayama. Several furniture companies have also built schools of their own. Hida Sangyō opened the Hida Shokunin Gakusha in 2014: its students live together for two years, spending the first learning hand tools and the second making furniture with machines, and then join the company. Oak Village, the workshop that settled in Kiyomi in 1974, has run the Shinrin Takumi Juku, “forest craftsmen's school”, since 1991; by its own count 271 people have completed its two-year course, more than eighty per cent of whom work in woodworking, forestry or environmental education, and over a hundred have opened their own workshops.",
            ja:"学費はどの基準で見ても安い。二〇二六年度の入学生では入校料が五千六百五十円、授業料が一年で五万九千四百円で、道具、教科書、作業服、保険に約十五万三千円がかかる。そのうち自分のノミ、鉋、鋸の一式が八万九千八百七十円である。学生には、仕事を変えるために来た社会人も多い。卒業生は飛騨の工場、小さな工房、建具店に就き、何年か働いてから高山周辺の村で独立する人もいる。家具会社のなかには、自前の学校をつくったところもある。飛騨産業は二〇一四年に「飛騨職人学舎」を開いた。学生は二年間ともに暮らし、一年目は手道具、二年目は機械による家具づくりを学び、その後に会社へ入る。一九七四年に清見に根をおろした工房オークヴィレッジは、一九九一年から「森林たくみ塾」を営む。塾によれば、二年の課程を終えた人は二百七十一人、その八割を超える二百十五人が木工、林業、環境教育の仕事に就き、百人以上が自分の工房を開いた。",
            zh:"學費以任何標準來看都很便宜：2026 年度入學者的入學費為 5,650 日圓，一年學費 59,400 日圓，另需工具、教科書、工作服與保險約 153,000 日圓，其中個人的鑿、刨、鋸一套為 89,870 日圓。學生中有不少是轉換跑道的社會人士。畢業生進入飛驒的工廠、小型工坊與建具店；也有人工作幾年後，在高山周邊的村落獨立開業。有些家具公司也自己辦學。飛驒產業於 2014 年開辦「飛驒職人學舍」：學生共同生活兩年，第一年學手工具，第二年學以機械製作家具，之後進入公司。1974 年落腳清見的工房 Oak Village，自 1991 年起經營「森林匠塾」；據該塾統計，修完兩年課程者共 271 人，其中八成以上（215 人）從事木工、林業或環境教育，超過 100 人開設了自己的工坊。" } },
        { t:"p",
          text:{
            en:"Inside the factories, training continues through the national skill tests. Hida Sangyō reports that on 1 October 2024 it had 105 certified technicians holding 169 grade-1 and grade-2 certificates between them, in furniture hand-work, furniture machine-work, wood finishing, upholstery, machine woodworking and the maintenance of woodworking machines — a measure of how far a modern furniture factory still depends on individual skill. Young employees are entered for the national Skills Competition, <em>Ginō Gorin</em>, which is open to workers under 23, and the company reports a gold medal in furniture making in 2020. The makers who emerged from all these routes, and where to find them, are described on <a href=\"houses.html\">Hida's Makers</a>.",
            ja:"工場のなかでは、国の技能検定を通じて学びが続く。飛騨産業によれば、二〇二四年十月一日時点で、家具手加工、家具機械加工、木工塗装、いす張り、機械木工、木工機械整備の各職種で、百五人の技能士が一級と二級の資格を合わせて百六十九もっていた。近代的な家具工場がいまなお一人ひとりの技にどれほど頼っているかを示す数字である。若い社員は二十三歳以下の働き手が競う技能五輪全国大会にも出場し、同社は二〇二〇年に家具職種で金賞を得たとしている。こうした道から生まれたつくり手と、その居場所は<a href=\"houses.html\">飛騨のつくり手</a>に述べる。",
            zh:"在工廠內部，學習透過國家技能檢定持續進行。飛驒產業表示，截至 2024 年 10 月 1 日，公司有 105 名技能士，合計持有 169 張一級與二級證照，涵蓋家具手工加工、家具機械加工、木工塗裝、椅子包覆、機械木工與木工機械保養——這個數字說明現代家具工廠仍多麼依賴個人技藝。年輕員工也參加限 23 歲以下工作者參賽的全國技能競賽「技能五輪」，該公司表示曾於 2020 年獲得家具職種金牌。從這些路徑走出來的工匠與他們的所在，見<a href=\"houses.html\">飛驒的工匠</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Wood Craft Art School, course and fee information (FY2026); Gifu Prefectural International Takumi Academy, history; Hida Sangyō, Hida Shokunin Gakusha and technician system pages (October 2024); Shinrin Takumi Juku, school history.",
            ja:"出典：岐阜県立木工芸術スクール 木工科の案内と費用（二〇二六年度）。岐阜県立国際たくみアカデミーの沿革。飛騨産業「飛騨職人学舎」「技能士の育成」（二〇二四年十月）。森林たくみ塾の沿革。",
            zh:"資料來源：岐阜縣立木工藝術學校木工科介紹與費用（2026 年度）；岐阜縣立國際匠學院沿革；飛驒產業〈飛驒職人學舍〉與〈技能士培育〉頁面（2024 年 10 月）；森林匠塾沿革。" } }
      ] },
    { t:"section",
      id:"institutions",
      title:{ en:"Where to learn: a table", ja:"学ぶ場所の一覧", zh:"學習場所一覽" },
      jp:"学校一覧",
      body:[
        { t:"p",
          text:{
            en:"The table lists the main places in and near Gifu where people learn to grow, cut, build with and make things from wood, with the year each began (in brackets, the year of its predecessor) and what it teaches. Courses and fees change; check with the institution before applying.",
            ja:"表は、岐阜とその周辺で木を育て、伐り、木で建て、木でものをつくることを学べる主な場所を、始まった年（括弧内は前身の年）と教える内容とともに挙げたものである。課程や費用は変わるので、出願の前に各校に確かめてほしい。",
            zh:"下表列出岐阜及其周邊學習育林、伐木、木構建築與木材製作的主要場所，並註明創立年份（括號內為前身的年份）與教學內容。課程與費用會變動，報名前請向各機構確認。" } },
        { t:"table",
          caption:{ en:"Places to learn wood in Gifu", ja:"岐阜で木を学ぶところ", zh:"在岐阜學習木材的場所" },
          keyCol:true,
          cols:[
            { en:"Institution", ja:"名称", zh:"名稱" },
            { en:"Town", ja:"所在地", zh:"所在地" },
            { en:"Began", ja:"開始", zh:"創立" },
            { en:"What you learn", ja:"学ぶこと", zh:"學習內容" }
          ],
          rows:[
            [
              { en:"Gifu Academy of Forest Science and Culture", ja:"岐阜県立森林文化アカデミー", zh:"岐阜縣立森林文化學院" },
              { en:"Mino", ja:"美濃市", zh:"美濃市" },
              "2001 (1971)",
              {
                en:"Forestry, timber architecture, woodworking, environmental education; two years",
                ja:"林業、木造建築、木工、環境教育。二年",
                zh:"林業、木構建築、木工、環境教育；兩年" }
            ],
            [
              { en:"Gifu Wood Craft Art School", ja:"岐阜県立木工芸術スクール", zh:"岐阜縣立木工藝術學校" },
              { en:"Takayama", ja:"高山市", zh:"高山市" },
              "2018 (1946)",
              {
                en:"Furniture making by hand and machine, Shunkei, bentwood, turning, CAD; one year",
                ja:"手と機械による家具製作、春慶、曲木、挽物、CAD。一年",
                zh:"手工與機械家具製作、春慶塗、曲木、車旋、CAD；一年" }
            ],
            [
              { en:"Gifu International Takumi Academy", ja:"岐阜県立国際たくみアカデミー", zh:"岐阜縣立國際匠學院" },
              { en:"Minokamo", ja:"美濃加茂市", zh:"美濃加茂市" },
              "2003 (1947)",
              {
                en:"Architecture and production technology (two years); one-year house-building courses",
                ja:"建築と生産技術（二年）。住宅建築などの一年課程",
                zh:"建築與生產技術（兩年）；一年制住宅建築等課程" }
            ],
            [
              { en:"Hida Shokunin Gakusha (Hida Sangyō)", ja:"飛騨職人学舎（飛騨産業）", zh:"飛驒職人學舍（飛驒產業）" },
              { en:"Takayama", ja:"高山市", zh:"高山市" },
              "2014",
              {
                en:"Hand tools, then machine furniture making; two years, living in",
                ja:"手道具、次に機械による家具づくり。二年、共同生活",
                zh:"先學手工具，再學機械家具製作；兩年，共同生活" }
            ],
            [
              { en:"Shinrin Takumi Juku (Oak Village)", ja:"森林たくみ塾（オークヴィレッジ）", zh:"森林匠塾（Oak Village）" },
              { en:"Takayama (Kiyomi)", ja:"高山市清見町", zh:"高山市清見町" },
              "1991",
              {
                en:"Woodworking together with knowledge of the forest; two years",
                ja:"森の知識とともに学ぶ木工。二年",
                zh:"結合森林知識的木工；兩年" }
            ],
            [
              { en:"Kashimo Mokushōjuku", ja:"加子母木匠塾", zh:"加子母木匠塾" },
              { en:"Nakatsugawa (Kashimo)", ja:"中津川市加子母", zh:"中津川市加子母" },
              "1995",
              {
                en:"University architecture students design and build in local hinoki each summer",
                ja:"建築を学ぶ大学生が毎夏、地元のヒノキで設計し建てる",
                zh:"建築系大學生每年夏天以當地扁柏設計並建造" }
            ],
            [
              {
                en:"Forestry high schools (Kamo Nōrin, Gujō, Gifu Nōrin)",
                ja:"農林系高校（加茂農林、郡上、岐阜農林）",
                zh:"農林高中（加茂農林、郡上、岐阜農林）" },
              { en:"Minokamo, Gujō, Kitagata", ja:"美濃加茂市、郡上市、北方町", zh:"美濃加茂市、郡上市、北方町" },
              "—",
              {
                en:"Forest science, school forests, chainsaw and machine courses; three years",
                ja:"森林科学、学校林、チェーンソーや機械の講習。三年",
                zh:"森林科學、學校林、鏈鋸與機械講習；三年" }
            ],
            [
              { en:"Gifu University", ja:"岐阜大学", zh:"岐阜大學" },
              { en:"Gifu; forest at Gero", ja:"岐阜市。演習林は下呂市", zh:"岐阜市；實習林在下呂市" },
              "1949",
              {
                en:"Forest ecology and environmental science, with the 553-hectare Kuraiyama forest; four years",
                ja:"森林生態と環境科学。五百五十三ヘクタールの位山演習林。四年",
                zh:"森林生態與環境科學，擁有 553 公頃的位山實習林；四年" }
            ],
            [
              { en:"Co-Innovation University", ja:"CoIU（構想時の名は飛騨高山大学）", zh:"CoIU（規劃時名為飛驒高山大學）" },
              { en:"Hida (Furukawa)", ja:"飛騨市古川町", zh:"飛驒市古川町" },
              "2026",
              {
                en:"A single faculty of “co-creation”, with satellite bases; four years",
                ja:"「共創学部」のみ。各地にサテライト拠点。四年",
                zh:"僅設「共創」學部，各地設衛星據點；四年" }
            ],
            [
              { en:"ESP Guitar Craft Academy", ja:"ESPギタークラフト・アカデミー", zh:"ESP 吉他工藝學院" },
              { en:"Tokyo, Osaka", ja:"東京、大阪", zh:"東京、大阪" },
              "1983",
              {
                en:"Guitar design, building, finishing and repair; two years",
                ja:"ギターの設計、製作、塗装、修理。二年",
                zh:"吉他設計、製作、塗裝與修理；兩年" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: websites and published histories of each institution; Forestry Agency, list of high schools with forestry courses (2014); Gifu University, Kuraiyama Experimental Forest; for the guitar school see the book's luthiers page.",
            ja:"出典：各機関のウェブサイトと沿革。林野庁「森林・林業に関する科目・コース設置校一覧表（高等学校）」（二〇一四年）。岐阜大学 位山演習林。ギターの学校は本書の「ギター職人」の頁による。",
            zh:"資料來源：各機構網站與沿革；林野廳〈設有森林・林業科目與課程的高中一覽〉（2014 年）；岐阜大學位山實習林；吉他學校見本書製琴師頁。" } }
      ] },
    { t:"section",
      id:"carpenters",
      title:{ en:"How carpenters learn", ja:"大工はどう学ぶか", zh:"木匠如何養成" },
      jp:"大工の修業",
      body:[
        { t:"p",
          text:{
            en:"Carpentry kept the master-and-apprentice system longer than any other wood trade. A young <em>daiku</em> traditionally served about five years of apprenticeship and a further year of “thanks service” to the master before becoming a journeyman, and the habit of learning by watching — <em>minarai</em> — remains strong even in firms that now send their recruits to school. Today most carpenters combine both: a one- or two-year course at a public vocational school such as the International Takumi Academy in Minokamo, then years with a builder, marked by the national skill test for carpenters. Its grade 3 requires about six months of practice, grade 2 two years and grade 1 seven years, shortened for those who have completed vocational training. Hand skills that machines have replaced in ordinary houses — laying out timber with ink line and square, cutting joints by hand, hewing with the adze — survive in temple and shrine work and in the restoration of old buildings (see <a href=\"joinery.html\">Joinery</a> and <a href=\"tools.html\">The Carpenter's Tools</a>).",
            ja:"大工は、ほかのどの木の仕事よりも長く親方と弟子のしくみを保ってきた。若い大工は、昔はおよそ五年の年季奉公のあと、一年のお礼奉公をつとめてから一人前となった。見て覚える「見習い」の習いは、新人を学校へ送るようになった工務店でもいまだに強い。いまの大工の多くは両方を組みあわせる。美濃加茂の国際たくみアカデミーのような公共の職業訓練校で一年か二年学び、そのあと工務店で何年も働き、その節目を国の建築大工技能検定が示す。三級は約六か月、二級は二年、一級は七年の実務経験が受検の条件で、職業訓練を終えた人はこれが短くなる。普通の家では機械に取って代わられた手の技——墨壺と差金による墨付け、手で刻む継手、手斧によるはつり——は、社寺の仕事や古い建物の修理のなかに生き残っている（<a href=\"joinery.html\">継手と仕口</a>、<a href=\"tools.html\">大工道具</a>を参照）。",
            zh:"在所有木作行業中，木匠保留師徒制最久。傳統上，年輕的大工（<em>daiku</em>）要當約五年學徒，再為師傅做一年「謝師奉公」，才能出師。即使在如今會送新人去上學的營造公司裡，「看著學」（<em>minarai</em>）的習慣依然根深柢固。今天多數木匠兩者兼具：先在美濃加茂的國際匠學院等公立職業訓練學校學習一到兩年，再跟著營造商工作多年，並以國家的建築木匠技能檢定標記各個階段。三級須約六個月實務經驗，二級須兩年，一級須七年；修畢職業訓練者可縮短。在一般住宅中已被機械取代的手工技藝——以墨斗與曲尺放樣、手工鑿刻榫接、以手斧削木——仍存活在寺社工程與古建築修復之中（見<a href=\"joinery.html\">榫接</a>與<a href=\"tools.html\">木匠的工具</a>）。" } },
        { t:"p",
          text:{
            en:"Those skills received international recognition on 17 December 2020, when UNESCO inscribed “Traditional skills, techniques and knowledge for the conservation and transmission of wooden architecture in Japan” on its list of the Intangible Cultural Heritage of Humanity. The inscription covers seventeen techniques — among them building carpentry, roofing in cypress bark and shingles, lacquering and the production of the materials themselves — held by fourteen preservation bodies that run training programmes for their successors. Japan had protected such techniques since 1975 as “selected conservation techniques” under its cultural properties law, precisely because restoring a temple requires people who can split cypress bark from a living tree or cut a joint the way it was cut four centuries ago.",
            ja:"こうした技は、二〇二〇年十二月十七日、ユネスコが「伝統建築工匠の技：木造建造物を受け継ぐための伝統技術」を人類の無形文化遺産に記載したことで、国際的にも認められた。記載の対象は十七の技術で、建造物の木工、檜皮葺やこけら葺、漆塗、さらに材料そのものをつくる技などを含み、後継者の研修を行う十四の保存団体がそれを担う。日本は一九七五年から、文化財保護法の「選定保存技術」としてこうした技を守ってきた。寺を修理するには、生きた木から檜皮を剥ぎ、四百年前と同じやり方で継手を刻める人が欠かせないからである。",
            zh:"這些技藝在 2020 年 12 月 17 日獲得國際肯定：聯合國教科文組織將「傳統建築工匠技術：傳承木造建築的傳統技術」列入人類非物質文化遺產名錄。登錄內容涵蓋 17 項技術——包括建築木作、檜皮葺與木瓦葺屋頂、漆塗，以及材料本身的生產技術——由 14 個保存團體傳承，並為接班人辦理培訓。日本自 1975 年起即依《文化財保護法》將這類技術列為「選定保存技術」加以保護，因為修復一座寺院，需要能從活樹上剝取檜皮、能以四百年前同樣方式鑿刻榫接的人。" } },
        { t:"p",
          text:{
            en:"Gifu has its own school for this kind of learning, though it is not called one. Since 1995 the Kashimo Mokushōjuku, “Kashimo carpenters' school”, has brought university architecture students to the hinoki village of Kashimo, now part of Nakatsugawa, every summer to design and build real structures from local timber, working alongside the people of the village. Between 100 and 300 students take part each year, and more than 5,000 have done so in total; a book about its first thirty years was published in March 2026. For students who otherwise learn architecture on paper and screens, it is a rare chance to follow timber from the standing tree to a finished structure, and to fit a joint they have drawn themselves (see <a href=\"hinoki.html\">Hinoki</a>).",
            ja:"岐阜には、学校とは呼ばれないが、この種の学びの場がある。一九九五年から、「加子母木匠塾」が毎夏、建築を学ぶ大学生をヒノキの村、加子母（いまは中津川市）に集め、地元の材で本物の建物を設計し、村の人々とともに建ててきた。参加者は毎年百人から三百人、累計で五千人を超え、二〇二六年三月にはその三十年をまとめた本が出版された。ふだん紙と画面の上で建築を学ぶ学生にとって、立ち木から完成した建物までを材とともにたどり、自分で描いた継手を自分で組む、またとない機会である（<a href=\"hinoki.html\">ヒノキ</a>を参照）。",
            zh:"岐阜有一處雖不叫學校、卻正是這種學習的場所。自 1995 年起，「加子母木匠塾」每年夏天把建築系大學生帶到扁柏之村加子母（今屬中津川市），用當地木材設計並與村民一同建造真正的構造物。每年參加者 100 至 300 人，累計超過 5,000 人；2026 年 3 月出版了一本記錄其三十年歷程的書。對平常在紙上與螢幕上學建築的學生而言，這是難得的機會：從立木一路跟著木材走到完成的建築，並親手組合自己畫的榫接（見<a href=\"hinoki.html\">扁柏</a>）。" } },
        { t:"tiny",
          text:{
            en:"Sources: Agency for Cultural Affairs, press release on the UNESCO inscription (December 2020); Japan Vocational Ability Development Association and prefectural associations, skill test rules for carpentry; Kashimo Mokushōjuku book announcement (PR Times, 2026).",
            ja:"出典：文化庁 ユネスコ無形文化遺産記載の報道発表（二〇二〇年十二月）。中央職業能力開発協会・都道府県職業能力開発協会 建築大工技能検定の受検資格。『加子母木匠塾』刊行のお知らせ（PR TIMES、二〇二六年）。",
            zh:"資料來源：文化廳聯合國教科文組織非物質文化遺產登錄新聞稿（2020 年 12 月）；中央職業能力開發協會與各都道府縣協會建築木匠技能檢定應考資格；《加子母木匠塾》出版公告（PR TIMES，2026 年）。" } }
      ] },
    { t:"section",
      id:"titles",
      title:{ en:"Tests, titles and honours", ja:"検定、称号、褒章", zh:"檢定、稱號與褒獎" },
      jp:"技能の証し",
      body:[
        { t:"p",
          text:{
            en:"Japan marks skill in wood at three levels. The first is the national skill test, <em>ginō kentei</em>, introduced in 1959 and now covering well over a hundred trades, among them carpentry, joinery, furniture making, wood finishing and woodworking machines. Grades 3, 2 and 1 (and for some trades a special grade) each combine a written examination with a practical test in which candidates make a set piece to drawings within a time limit; those who pass may call themselves <em>ginōshi</em>, certified skilled workers. In the Hida factories the grade-1 certificate is the expected mark of a mature craftsman, and furniture firms advertise how many of their staff hold one.",
            ja:"日本は木の技を三つの段で認める。第一は一九五九年に始まった国の技能検定で、いまでは百を優に超える職種があり、そのなかに建築大工、建具製作、家具製作、木工塗装、機械木工などが含まれる。三級、二級、一級（職種によっては特級）のいずれも学科試験と実技試験を組みあわせ、実技では図面に従って決められた課題を時間内につくる。合格した人は「技能士」を名のることができる。飛騨の工場では一級技能士が一人前の職人の目安とされ、家具会社は社員のうち何人が一級をもつかを掲げている。",
            zh:"日本從三個層次認定木作技藝。第一是 1959 年開始的國家技能檢定，如今涵蓋遠超過一百個職種，其中包括建築木匠、建具製作、家具製作、木工塗裝與機械木工等。三級、二級、一級（部分職種另有特級）都結合學科與術科考試；術科要在時限內依圖面完成指定作品。合格者可稱為「技能士」。在飛驒的工廠，一級技能士被視為成熟工匠的標誌，家具公司也會標榜旗下有多少員工持有一級證照。" } },
        { t:"p",
          text:{
            en:"The second level is the title of certified traditional craftsman, <em>dentō kōgeishi</em>, awarded since 1975 for the crafts designated under the national law on traditional craft industries. A candidate must have practised the craft for at least twelve years in its home district and pass a practical test, a knowledge test and an interview; the title is reviewed every five years. About 3,200 people hold it across Japan, roughly one in ten of those working in designated crafts. In Gifu it applies to wood in <a href=\"shunkei.html\">Hida Shunkei</a> lacquerware and <a href=\"ittobori.html\">Ichii Ittōbori</a> carving, both designated in 1975, so that every certified master in those crafts represents more than a decade of daily work in Takayama.",
            ja:"第二の段は、伝統的工芸品産業の振興に関する法律で指定された工芸品について、一九七五年から認定されている「伝統工芸士」である。候補者はその産地で十二年以上その仕事に従事し、実技試験、知識試験、面接に合格しなければならず、称号は五年ごとに見直される。全国で約三千二百人がこの称号をもち、指定された工芸品の仕事に携わる人のおよそ十人に一人にあたる。岐阜の木の工芸では、ともに一九七五年に指定された<a href=\"shunkei.html\">飛騨春慶</a>と<a href=\"ittobori.html\">一位一刀彫</a>がこれにあたり、その伝統工芸士は一人ひとりが高山での十年を超える日々の仕事を背負っている。",
            zh:"第二個層次是「傳統工藝士」稱號，自 1975 年起頒給依國家傳統工藝品產業振興法所指定的工藝。候選人必須在該工藝的產地從事該工作至少 12 年，並通過術科、學科與面試；稱號每五年重新審查一次。全日本約有 3,200 人持有此稱號，約為指定工藝從業者的十分之一。在岐阜的木工藝中，適用於同在 1975 年獲指定的<a href=\"shunkei.html\">飛驒春慶</a>漆器與<a href=\"ittobori.html\">一位一刀雕</a>，因此這些工藝的每一位傳統工藝士，都代表著在高山超過十年的日日工作。" } },
        { t:"p",
          text:{
            en:"The third level is national recognition. Since 1967 the Minister of Health, Labour and Welfare has named about 150 “outstanding skilled workers” a year — popularly the Contemporary Master Craftsmen, <em>gendai no meikō</em> — chosen from all trades for skill that is among the best in the country and for passing it on; more than 5,500 had been named by fiscal 2013. Many go on to receive the Medal with Yellow Ribbon, given to those who have excelled in their work. Gifu's best-known example in this book is the guitar maker Yairi Kazuo of Kani, named a Master Craftsman in 2005 and awarded the medal in 2006 (see <a href=\"yairi.html\">Yairi</a>).",
            ja:"第三の段は国による顕彰である。一九六七年から、厚生労働大臣は毎年およそ百五十人を「卓越した技能者」、通称「現代の名工」として表彰してきた。すべての職種から、国内最高水準の技をもち、それを後に伝えている人が選ばれ、二〇一三年度までに五千五百人を超えた。その多くはのちに、仕事に精励した人に贈られる黄綬褒章も受ける。この本で最もよく知られた岐阜の例は、可児のギター製作者、矢入一男である。二〇〇五年に現代の名工に選ばれ、二〇〇六年に黄綬褒章を受けた（<a href=\"yairi.html\">ヤイリ</a>を参照）。",
            zh:"第三個層次是國家表彰。自 1967 年起，厚生勞動大臣每年表彰約 150 名「卓越技能者」，俗稱「現代名工」，從所有職種中選出技藝居全國頂尖、並致力傳承的人；至 2013 年度已超過 5,500 人。其中許多人之後也獲頒授予敬業有成者的黃綬褒章。本書中最為人知的岐阜例子，是可兒的吉他製作家矢入一男：2005 年獲選為現代名工，2006 年獲頒黃綬褒章（見<a href=\"yairi.html\">Yairi</a>）。" } },
        { t:"figure",
          caption:{
            en:"Length of each route into wood work, in years: course lengths of schools and programmes, and the minimum practical experience required for the grade-1 carpentry skill test and for certified traditional craftsmen (less with prior training for the skill test). Sources: the institutions' course information; Forestry Agency; Japan Vocational Ability Development Association; Association for the Promotion of Traditional Craft Industries.",
            ja:"木の仕事へ入る道ごとの年数。学校と制度は課程の長さ、建築大工一級の技能検定と伝統工芸士は必要な実務経験の最短年数（技能検定は訓練歴により短縮あり）。出典：各機関の課程案内、林野庁、中央職業能力開発協会、伝統的工芸品産業振興協会。",
            zh:"進入木作工作各條路徑所需年數：學校與計畫為課程長度；建築木匠一級技能檢定與傳統工藝士為所需實務經驗的最短年數（技能檢定可因訓練經歷縮短）。資料來源：各機構課程介紹；林野廳；中央職業能力開發協會；傳統工藝品產業振興協會。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"How long it takes", ja:"どれだけかかるか", zh:"需要多久" }, unit:{ en:"years", ja:"年", zh:"年" }, labelW:270, rowH:28, max:12,
            items:[
              { n:{ en:"Wood Craft Art School, Takayama", ja:"木工芸術スクール（高山）", zh:"木工藝術學校（高山）" }, v:1, lab:{ en:"1 year", ja:"1 年", zh:"1 年" }, f:"#E0E6DB" },
              { n:{ en:"One-year forestry college", ja:"一年制の林業大学校", zh:"一年制林業大學校" }, v:1, lab:{ en:"1 year", ja:"1 年", zh:"1 年" }, f:"#E0E6DB" },
              { n:{ en:"Forest Academy, Mino", ja:"森林文化アカデミー（美濃）", zh:"森林文化學院（美濃）" }, v:2, f:"#E0E6DB" },
              { n:{ en:"Shinrin Takumi Juku", ja:"森林たくみ塾", zh:"森林匠塾" }, v:2, f:"#E0E6DB" },
              { n:{ en:"Hida Shokunin Gakusha", ja:"飛騨職人学舎", zh:"飛驒職人學舍" }, v:2, f:"#E0E6DB" },
              { n:{ en:"Guitar-craft school (ESP)", ja:"ギター製作の学校（ESP）", zh:"吉他製作學校（ESP）" }, v:2, f:"#E0E6DB" },
              { n:{ en:"Green Employment trainee", ja:"緑の雇用の研修生", zh:"綠色僱用研修生" }, v:3, f:"#EDE5D2" },
              { n:{ en:"University degree", ja:"大学の学位", zh:"大學學位" }, v:4, f:"#E9ECEE" },
              { n:{ en:"Grade-1 carpentry skill test", ja:"建築大工一級の技能検定", zh:"建築木匠一級技能檢定" }, v:7, f:"#EEE1DF" },
              { n:{ en:"Certified traditional craftsman", ja:"伝統工芸士", zh:"傳統工藝士" }, v:12, f:"#EEE1DF" }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Health, Labour and Welfare, outstanding skilled workers programme; Association for the Promotion of Traditional Craft Industries, certified traditional craftsmen; Ministry of Economy, Trade and Industry, traditional craft statistics (2022); Japan Vocational Ability Development Association, skill tests.",
            ja:"出典：厚生労働省「卓越した技能者（現代の名工）」の表彰。伝統的工芸品産業振興協会「伝統工芸士」。経済産業省 伝統的工芸品の資料（二〇二二年）。中央職業能力開発協会「技能検定」。",
            zh:"資料來源：厚生勞動省「卓越技能者（現代名工）」表彰制度；傳統工藝品產業振興協會「傳統工藝士」；經濟產業省傳統工藝品資料（2022 年）；中央職業能力開發協會「技能檢定」。" } }
      ] },
    { t:"section",
      id:"guitars",
      title:{ en:"Learning to build guitars", ja:"ギターづくりを学ぶ", zh:"學習製作吉他" },
      jp:"楽器の修業",
      body:[
        { t:"p",
          text:{
            en:"Guitar making has no licence and no national test of its own, and its training follows the factory more than the school. Gifu's two guitar companies grew in towns full of trained woodworkers: Takamine was founded in 1959 in Sakashita, a village of sawmills and joiners whose skills passed easily into instrument making, and Yairi in Kani built its reputation on a staff of about thirty who make guitars largely by hand. In both, newcomers learn one stage of the work — bending sides, carving braces, fitting necks, finishing, setting up — before moving to the next, and the senior builders who check every instrument are the real teachers. Yairi Kazuo himself joined his father's workshop in 1951 and went to the United States in 1962 to study how guitars were built there.",
            ja:"ギターづくりには免許も独自の国家試験もなく、その修業は学校よりも工場の流れに沿っている。岐阜の二つのギター会社は、腕のいい木工職人の多い町で育った。高峰は一九五九年、製材所と建具屋が並び、その技がそのまま楽器づくりに移った坂下の村で生まれた。可児のヤイリは、ほとんどを手でつくる約三十人の職人によって名を築いた。どちらでも新人は、側板の曲げ、力木の削り、ネックの仕込み、塗装、調整といった工程を一つずつ覚えてから次へ進む。一本ずつ確かめる熟練の職人こそが本当の先生である。矢入一男自身は一九五一年に父の工房に入り、一九六二年にはアメリカへ渡って、そこでのギターのつくり方を学んだ。",
            zh:"吉他製作沒有執照，也沒有專屬的國家考試，其養成依循工廠多於學校。岐阜的兩家吉他公司都在木工好手雲集的鎮上成長：高峰於 1959 年創立於坂下——一個滿是製材廠與建具師傅、其技藝能順利轉向樂器製作的村落；可兒的 Yairi 則靠約 30 名以手工為主製琴的職人建立名聲。兩家公司的新人都先學會一道工序——彎側板、削力木、裝琴頸、塗裝、調整——再進到下一道，而逐把檢查的資深師傅才是真正的老師。矢入一男本人於 1951 年進入父親的工房，1962 年赴美國學習當地的吉他製作方式。" } },
        { t:"p",
          text:{
            en:"Outside the factories, the main route is a specialist school such as the ESP Guitar Craft Academy in Tokyo and Osaka, founded in 1983, whose two-year course has students build ten or more instruments, followed by years at a repair bench; classical-guitar making is still learned mostly by apprenticeship to a master. Some graduates of the woodworking schools in Takayama and Mino have also turned to instruments, bringing a furniture maker's knowledge of Japanese woods. The routes, and the independent makers they produce, are described on <a href=\"luthiers.html\">Luthiers</a> and <a href=\"making.html\">How a Guitar Is Made</a>.",
            ja:"工場の外では、一九八三年に創立した東京と大阪のESPギタークラフト・アカデミーのような専門学校が主な道で、二年の課程で生徒は十本以上の楽器をつくり、そのあと何年も修理の台に向かう。クラシックギターづくりは、いまも多くが親方への弟子入りで学ばれる。高山や美濃の木工の学校を出て楽器に向かった人もおり、家具職人としての日本の木の知識をもちこんでいる。その道と、そこから生まれる個人の製作家は<a href=\"luthiers.html\">ギター職人</a>と<a href=\"making.html\">ギターのつくり方</a>に述べる。",
            zh:"在工廠之外，主要途徑是專門學校，例如 1983 年創立、設於東京與大阪的 ESP 吉他工藝學院：兩年課程中學生要做十把以上的琴，之後再在修理台前磨練多年；古典吉他的製作則至今多半透過拜師學藝。高山與美濃木工學校的畢業生中也有人轉向樂器，帶進家具工匠對日本木材的認識。這些路徑及其培育出的獨立製琴師，見<a href=\"luthiers.html\">製琴師</a>與<a href=\"making.html\">吉他如何製作</a>。" } }
      ] },
    { t:"section",
      id:"research",
      title:{ en:"Research and new institutions", ja:"研究機関と新しい学び舎", zh:"研究機構與新學府" },
      jp:"研究と大学",
      body:[
        { t:"p",
          text:{
            en:"Behind the schools stand the research institutes that produce what they teach. Gifu University, founded in 1949, teaches forest ecology in its Faculty of Applied Biological Sciences and keeps the Kuraiyama Experimental Forest in Gero: 553 hectares of mixed forest between 825 and 1,451 metres, used since 1937, first by the Gifu Higher School of Agriculture, with lodging for fifty students on field courses. The prefecture runs two institutes of its own, both with roots in 1936: the Research Institute for Forests in Mino, which became the forest experiment station in 1954 and took its present name in 2006, and works on seedlings, pests and forest management; and the Research Institute for Human Life Technology in Takayama, renamed in 1998, which tests furniture for strength and ergonomics and develops processing methods with Hida's makers. Nationally, the Forestry and Forest Products Research Institute traces its history to a forestry test station opened at Meguro, Tokyo, in 1905; it moved to Tsukuba in 1978 and took its present name in 1988, and its handbooks supply many of the figures on this book's <a href=\"properties.html\">Physical Properties</a> page.",
            ja:"学校の背後には、教える中身を生みだす研究機関がある。一九四九年に創立した岐阜大学は応用生物科学部で森林の生態を教え、下呂市に位山演習林をもつ。標高八二五〜一四五一mにひろがる五百五十三ヘクタールの混交林で、一九三七年に岐阜高等農林学校が使いはじめ、実習の学生五十人が泊まれる宿舎がある。県は自前の研究所を二つもち、どちらも一九三六年に源をもつ。美濃市の森林研究所は一九五四年に林業試験場となり、二〇〇六年に現在の名となって、苗木、病虫害、森林の管理を研究する。高山市の生活技術研究所は一九九八年に現在の名となり、家具の強さや使いやすさを試験し、飛騨のつくり手とともに加工の方法を開発する。全国では、森林総合研究所が一九〇五年に東京・目黒に開かれた林業試験所にさかのぼり、一九七八年に筑波へ移り、一九八八年に現在の名となった。その便覧は、この本の<a href=\"properties.html\">物理的性質</a>の頁の多くの数値のもとになっている。",
            zh:"學校背後是產出教學內容的研究機構。1949 年創立的岐阜大學在應用生物科學部教授森林生態，並在下呂市擁有位山實習林：553 公頃、海拔 825 至 1,451 公尺的混交林，自 1937 年起由岐阜高等農林學校開始使用，設有可供 50 名實習學生住宿的設施。縣政府自設兩所研究所，皆源於 1936 年：美濃市的森林研究所於 1954 年成為林業試驗場、2006 年改用現名，研究苗木、病蟲害與森林經營；高山市的生活技術研究所於 1998 年改用現名，為家具做強度與人體工學測試，並與飛驒的製作者共同開發加工方法。全國層級則有森林綜合研究所，其歷史可追溯至 1905 年在東京目黑設立的林業試驗所；1978 年遷至筑波，1988 年改用現名，其手冊是本書<a href=\"properties.html\">木材的性質</a>一頁許多數據的來源。" } },
        { t:"p",
          text:{
            en:"The newest institution is a university in Hida itself. In April 2026 the Co-Innovation University, planned under the name Hida Takayama University, opened in Furukawa in Hida city — the first private four-year university in the region — with a single faculty of “co-creation” and satellite bases elsewhere in Japan. It is not a forestry school, but it brings young people to live in a district whose forests, sawmills and workshops are short of exactly that. Taiwanese readers will recognise the older model of a university forest: the National Taiwan University Experimental Forest at Xitou in Nantou was founded around 1902 as the Taiwan Experimental Forest of Tokyo Imperial University and passed to NTU in 1949, and it still serves teaching, research and public education (see <a href=\"taiwan.html\">Taiwan</a>).",
            ja:"もっとも新しいのは、飛騨そのものにできた大学である。二〇二六年四月、「飛騨高山大学」の名で構想されたCo-Innovation University（CoIU）が飛騨市古川町に開学した。この地域で初めての私立の四年制大学で、学部は「共創学部」の一つだけで、国内各地にサテライト拠点をもつ。林業の学校ではないが、森も製材所も工房もまさに若い人を欠いている土地へ、若い人を住まわせる。台湾の読者は、より古い型の大学の森を知っているだろう。南投の渓頭にある国立台湾大学実験林は、一九〇二年ごろ東京帝国大学の台湾演習林として設けられ、一九四九年に台湾大学へ移り、いまも教育、研究、一般の人への環境教育に使われている（<a href=\"taiwan.html\">台湾</a>を参照）。",
            zh:"最新的機構是設在飛驒本地的大學。2026 年 4 月，以「飛驒高山大學」之名規劃的 Co-Innovation University（CoIU）在飛驒市古川町開學——這是該地區第一所私立四年制大學，只設一個「共創」學部，並在日本各地設有衛星據點。它不是林業學校，但它讓年輕人住進一個森林、製材廠與工房都正缺年輕人的地方。台灣讀者應該熟悉更早的大學森林模式：位於南投溪頭的國立臺灣大學實驗林，約於 1902 年以東京帝國大學臺灣演習林之名設立，1949 年移交臺大，至今仍用於教學、研究與大眾自然教育（見<a href=\"taiwan.html\">台灣</a>）。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu University, Kuraiyama Experimental Forest; Gifu Prefectural Research Institute for Forests and Research Institute for Human Life Technology, histories; Forestry and Forest Products Research Institute, history; Co-Innovation University, announcements (2025); National Taiwan University Experimental Forest, history.",
            ja:"出典：岐阜大学 位山演習林。岐阜県森林研究所、岐阜県生活技術研究所の沿革。森林研究・整備機構 森林総合研究所の沿革。Co-Innovation University のお知らせ（二〇二五年）。国立台湾大学実験林管理処の沿革。",
            zh:"資料來源：岐阜大學位山實習林；岐阜縣森林研究所、岐阜縣生活技術研究所沿革；森林研究・整備機構森林綜合研究所沿革；Co-Innovation University 公告（2025 年）；國立臺灣大學實驗林管理處沿革。" } }
      ] },
    { t:"related",
      items:[
        { href:"workers.html",
          why:{ en:"What forest workers do every day, and the risks.", ja:"林業の働き手の毎日の仕事と危険。", zh:"林業工作者的日常與風險。" } },
        { href:"houses.html",
          why:{ en:"The furniture makers the schools feed.", ja:"学校が送り出す家具のつくり手。", zh:"學校所培育的家具工匠。" } },
        { href:"luthiers.html",
          why:{ en:"How guitar makers learn their trade.", ja:"ギターのつくり手の学び方。", zh:"吉他製琴師如何學藝。" } },
        { href:"takumi.html",
          why:{ en:"The oldest training system: the Hida carpenters.", ja:"最も古い育成のしくみ、飛騨の工。", zh:"最古老的培育制度：飛驒工匠。" } },
        { href:"woodfuture.html",
          why:{ en:"Why the next generation matters so much.", ja:"次の世代がなぜそれほど大事か。", zh:"為何下一代如此重要。" } }
      ] }
  ] };

/* ---- ---------------------------------------- chronology */
GIFU.pages["chronology"] = {
  kicker: { en:"Reference · 07", ja:"資料 · 07", zh:"資料 · 07" },
  title:  { en: "The Whole Chronology", ja: "総年表", zh: "總年表" },
  jp: "二十億年から2033年まで",
  lede: {
    en: "Every date in this book in one sequence, from the oldest stone in Japan to the next rebuilding of the Ise shrines. Each entry says in a sentence what happened and links to the page that tells it properly. Where the date is a tradition rather than a document, or where sources disagree, the linked page says so.",
    ja: "本書のすべての年を一つの流れに並べた。日本最古の石から、次の伊勢の神宮の遷宮まで。各項目は何が起きたかを一文で述べ、それをきちんと語る頁へつなぐ。年が文書ではなく伝えによるもの、資料のあいだで食い違うものについては、リンク先の頁でそう断っている。",
    zh: "把本書中所有的年代排成一條序列，從日本最古老的石頭，到下一次伊勢神宮的重建。每個條目以一句話說明發生了什麼，並連到完整講述的頁面。凡年代出自傳說而非文獻、或各資料說法不一之處，所連頁面皆有說明。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Entries in this chronology by period, counted from the timelines below (the last bar is the parallel Taiwan line). The unevenness is itself informative: the record thickens wherever the state, the shrines or the market kept documents, and the eight decades since 1945 hold more entries than the centuries before 1868.",
        ja:"本年表の項目数を時代別に数えたもの。下の年表から数えた（最後の棒は並行する台湾の年表）。偏りそのものが示唆的である。国家、神社、市場が文書を残した時期ほど記録は厚くなり、一九四五年以後の八十年の項目は一八六八年以前の諸世紀を合わせたより多い。",
        zh:"本年表各時期的條目數，依下方年表計算（最後一欄為並列的台灣年表）。分布不均本身就有意義：凡是國家、神社或市場留下文書的時期，紀錄就變得濃密；1945 年以來八十年的條目，比 1868 年以前各世紀加起來還多。" },
      svg:function(lang, L){
        var b = GIFU.pages["chronology"].body, per = {}, i, j;
        for (i = 0; i < b.length; i++) {
          if (b[i].t !== "section") continue;
          var n = 0;
          for (j = 0; j < b[i].body.length; j++) if (b[i].body[j].t === "timeline") n += b[i].body[j].items.length;
          per[b[i].id] = n;
        }
        var P = [
          ["deep",      { en:"deep time", ja:"太古",      zh:"遠古" }],
          ["ancient",   { en:"to 1150",   ja:"〜1150",    zh:"至 1150" }],
          ["medieval",  { en:"1150–1600", ja:"1150–1600", zh:"1150–1600" }],
          ["edo",       { en:"1601–1867", ja:"1601–1867", zh:"1601–1867" }],
          ["meiji",     { en:"1868–1945", ja:"1868–1945", zh:"1868–1945" }],
          ["postwar",   { en:"1946–2000", ja:"1946–2000", zh:"1946–2000" }],
          ["now",       { en:"2001–",     ja:"2001–",     zh:"2001–" }],
          ["taiwan-line", { en:"Taiwan",  ja:"台湾",      zh:"台灣" }]
        ], items = [];
        for (i = 0; i < P.length; i++) if (per[P[i][0]]) items.push({ x:P[i][1], v:per[P[i][0]], f: P[i][0] === "taiwan-line" ? "#E0E7E9" : (P[i][0] === "now" ? "#EADCC1" : "#E0E6DB") });
        return GIFU.fig.cols(lang, L, {
          title:{ en:"Entries per period", ja:"時代別の項目数", zh:"各時期條目數" },
          unit:{ en:"entries", ja:"項目", zh:"條" },
          items: items, h: 180
        });
      } },
    { t:"section",
      id:"reading",
      title:{ en:"How to read this chronology", ja:"この年表の読み方", zh:"如何閱讀本年表" },
      jp:"凡例",
      body:[
        { t:"p",
          text:{
            en:"The chronology gathers, in order, the dated events scattered through the rest of the book, and adds a few that give them context. It runs from the oldest rock in the prefecture to the next rebuilding of the Ise shrines, in seven periods; within each period the entries run by year, and the history of wood — the carpenters, the closed forests, the timber rivers, the furniture and the guitars — is interleaved with the rest. A last line follows Taiwan, whose forests were logged under Japanese rule and whose timber still stands in Japanese shrines.",
            ja:"この年表は、本書の各頁に散らばる年代のある出来事を順に集め、文脈を与えるいくつかの項目を加えたものである。県内最古の岩から次の伊勢の遷宮までを七つの時代に分け、各時代のなかでは年の順に並べた。木の歴史——匠、留山、木材を運んだ川、家具、ギター——はほかの出来事と織り交ぜてある。最後の一列は台湾を追う。その森は日本の統治下で伐り出され、その材はいまも日本の社殿に立っている。",
            zh:"本年表依時間順序匯集散見於本書各頁、有年代可考的事件，並補上幾條提供脈絡的項目。從縣內最古老的岩石到下一次伊勢神宮式年遷宮，分為七個時期；每個時期內依年份排列，木的歷史——匠人、禁伐林、運木之河、家具與吉他——與其他事件交織並列。最後一列追蹤台灣：它的森林曾在日本統治下被伐採，它的木材至今仍立在日本的神社之中。" } },
        { t:"defs",
          items:[
            { term:{ en:"Years before 1873", ja:"一八七三年以前の年", zh:"1873 年以前的年份" },
              jp:"旧暦",
              def:{
                en:"Japan used a lunisolar calendar until the end of 1872. Years are given in the conventional Western equivalents; a Japanese era year that began late in one Western year and ended early in the next is shown under the year in which most of it fell, as the standard reference works do.",
                ja:"日本は一八七二年末まで太陰太陽暦を用いていた。年は慣用の西暦換算で示す。西暦の年末に始まり翌年に終わる和暦の年は、標準的な参考書にならい、その大半が属する西暦年に置いた。",
                zh:"日本在 1872 年底以前使用陰陽曆。年份採慣用的西曆換算；某個和曆年若始於西曆年末、終於次年年初，則比照標準參考書，歸入其大半所在的西曆年。" } },
            { term:{ en:"Fiscal years", ja:"年度", zh:"會計年度" },
              jp:"年度",
              def:{
                en:"Japanese statistics and budgets run from April to March. “FY2024” means April 2024 to March 2025; taxes, forest plans and production figures are almost always reported this way.",
                ja:"日本の統計と予算は四月から翌年三月までを一年とする。「二〇二四年度」は二〇二四年四月から二〇二五年三月まで。税、森林計画、生産量はほぼすべてこの形で示される。",
                zh:"日本的統計與預算以 4 月至翌年 3 月為一年。「2024 年度」指 2024 年 4 月至 2025 年 3 月；稅制、森林計畫與產量幾乎都以此方式呈報。" } },
            { term:{ en:"Traditions and records", ja:"伝承と記録", zh:"傳說與紀錄" },
              jp:"伝承",
              def:{
                en:"Some dates — the first Hida Shunkei tray, the first yew presented from Kuraiyama — rest on local tradition rather than contemporary documents. They are marked “by tradition”. Dates from company histories are those the companies publish.",
                ja:"いくつかの年——最初の飛騨春慶の盆、位山のイチイの最初の献上——は同時代の文書ではなく地元の伝承による。これらには「伝承では」と記した。企業史の年は各社の公表による。",
                zh:"部分年份——第一件飛驒春慶托盤、位山紫杉的首次獻上——依據的是地方傳說而非同時代文書，均註明「據傳」。企業歷史的年份以各公司公布者為準。" } }
          ] },
        { t:"note",
          label:{ en:"Two shorter timelines", ja:"二つの短い年表", zh:"兩份較短的年表" },
          text:{
            en:"The <a href=\"woodhistory.html\">A History of Wood</a> page tells the same story in essays with a shorter timeline, and <a href=\"woodpeople.html\">People</a> draws the lifetimes of the main figures to scale. This page is the complete list.",
            ja:"<a href=\"woodhistory.html\">木の歴史</a>の頁は同じ物語を短い年表とともに文章で語り、<a href=\"woodpeople.html\">人物</a>の頁は主な人々の生涯を縮尺どおりに描く。この頁はその完全な一覧である。",
            zh:"<a href=\"woodhistory.html\">木的歷史</a>一頁以文章搭配較短的年表講述同一段故事，<a href=\"woodpeople.html\">人物</a>一頁則依比例描繪主要人物的生平。本頁是完整的清單。" } }
      ] },
    { t:"section", id:"deep",
      title:{ en:"Deep time", ja:"地質の時間", zh:"地質時間" }, jp:"地質",
      body:[
        { t:"timeline", items:[
          { year:{en:"≈ 2 bn years ago",ja:"約20億年前",zh:"約 20 億年前"}, title:{en:"The oldest stone",ja:"最古の石",zh:"最古老的石頭"},
            text:{en:"Gneiss forms that will end up as pebbles in the Kamiaso conglomerate at Hichisō, found in 1970 to be the oldest rock then known in Japan. See <a href=\"landform.html\">Mountains, Plains &amp; Rock</a>.",ja:"のちに七宗の上麻生礫岩の礫となる片麻岩ができる。1970年に、当時知られていた日本最古の岩石とわかった。<a href=\"landform.html\">山と平野と岩</a>を参照。",zh:"日後成為七宗上麻生礫岩中礫石的片麻岩形成；1970 年被確認為當時已知日本最古老的岩石。見<a href=\"landform.html\">山、平原與岩石</a>。"} },
          { year:{en:"274–252 m years ago",ja:"2億7400万〜2億5200万年前",zh:"2.74 億至 2.52 億年前"}, title:{en:"A reef near the equator",ja:"赤道近くの礁",zh:"赤道附近的礁"},
            text:{en:"The Akasaka limestone of Kinshōzan grows as a reef in the open ocean, to be carried to Japan on the sea floor.",ja:"金生山の赤坂石灰岩が外洋の礁として育ち、のちに海底に乗って日本へ運ばれる。",zh:"金生山的赤坂石灰岩在遠洋中以礁體形式生長，之後隨海底被帶到日本。"} },
          { year:{en:"85–68 m years ago",ja:"8500万〜6800万年前",zh:"8500 萬至 6800 萬年前"}, title:{en:"The Nōhi rhyolite",ja:"濃飛流紋岩",zh:"濃飛流紋岩"},
            text:{en:"Enormous eruptions lay pyroclastic flows hundreds of metres thick across central Gifu.",ja:"巨大な噴火が、厚さ数百メートルの火砕流を岐阜の中央部に積もらせる。",zh:"巨大的火山噴發在岐阜中部堆積出厚達數百公尺的火山碎屑流。"} }
        ] }
      ]
    },
    { t:"section", id:"ancient",
      title:{ en:"Ancient Mino and Hida", ja:"古代", zh:"古代" }, jp:"古墳から平安",
      body:[
        { t:"timeline", items:[
          { year:{en:"late 4th c.",ja:"4世紀末",zh:"4 世紀末"}, title:{en:"Hirui Ōtsuka tumulus",ja:"昼飯大塚古墳",zh:"晝飯大塚古墳"},
            text:{en:"The largest keyhole tomb in Gifu, 150 m long, is built at Ōgaki. See <a href=\"ancient.html\">Ancient Mino &amp; Hida</a>.",ja:"岐阜県最大の前方後円墳（長さ150m）が大垣に築かれる。<a href=\"ancient.html\">古代の美濃と飛騨</a>を参照。",zh:"岐阜最大的前方後圓墳（長 150 公尺）在大垣築成。見<a href=\"ancient.html\">古代的美濃與飛驒</a>。"} },
          { year:"594",
              title:{ en:"A felling date for Hōryū-ji", ja:"法隆寺心柱の伐採年", zh:"法隆寺心柱的伐採年" },
              jp:"年輪年代法",
              text:{
                en:"Tree-ring dating by the Nara National Research Institute for Cultural Properties, published in 2001, placed the felling of the hinoki heart pillar of the Hōryū-ji pagoda in 594 — decades before the temple as it now stands was built. Whether the log was stored for a century or reused from an earlier building is still debated.",
                ja:"奈良文化財研究所の年輪年代測定（二〇〇一年発表）は、法隆寺五重塔の心柱となったヒノキの伐採を五九四年とした。いまの伽藍が建つ数十年も前である。丸太が百年近く貯えられたのか、先行する建物から転用されたのか、議論は続いている。",
                zh:"奈良文化財研究所以年輪定年法測定（2001 年發表），將法隆寺五重塔扁柏心柱的伐採年定為 594 年——比現存伽藍的建造早了數十年。這根原木是被儲存了近百年，還是自更早的建築轉用，至今仍有爭論。" } },
          { year:"670–711",
              title:{ en:"Hōryū-ji rebuilt", ja:"法隆寺の再建", zh:"法隆寺重建" },
              jp:"金堂・五重塔",
              text:{
                en:"After a fire recorded in 670, the temple founded by Prince Shōtoku was rebuilt; its main hall and five-storey pagoda were complete by about 711. Built of hinoki, they are the oldest surviving wooden buildings in the world, and their twentieth-century repairs taught Japan how hinoki ages (see <a href=\"hinoki.html\">Hinoki</a>).",
                ja:"六七〇年の火災の記録ののち、聖徳太子の創建した寺は再建され、金堂と五重塔は七一一年頃までに整った。ヒノキで建てられた、現存する世界最古の木造建築である。二十世紀の修理は、ヒノキがどう年をとるかを日本に教えた（<a href=\"hinoki.html\">ヒノキ</a>参照）。",
                zh:"670 年有火災紀錄之後，聖德太子創建的寺院重建，金堂與五重塔約於 711 年前完成。它們以扁柏建造，是世界現存最古老的木造建築；二十世紀的修繕讓日本了解扁柏如何隨歲月變化（見<a href=\"hinoki.html\">日本扁柏</a>）。" } },
          { year:"672", title:{en:"The Jinshin War",ja:"壬申の乱",zh:"壬申之亂"},
            text:{en:"Prince Ōama raises Mino and seizes the Fuwa pass on his way to the throne as Emperor Tenmu.",ja:"大海人皇子が美濃の兵を起こし、不破の道を押さえて天武天皇として即位への道を開く。",zh:"大海人皇子在美濃起兵、扼守不破隘口，由此登上天武天皇之位。"} },
          { year:"690",
              title:{ en:"The first rebuilding at Ise", ja:"最初の式年遷宮", zh:"伊勢首次式年遷宮" },
              jp:"式年遷宮",
              text:{
                en:"The Ise shrines date to 690 the first of their rebuildings on a twenty-year cycle, in which every building is renewed in hinoki on an adjoining plot. The timber came at first from the shrine's own hills; from the eighteenth century it would come from Kiso and Ura-Kiso (see <a href=\"gods.html\">Trees and the Gods</a>).",
                ja:"伊勢神宮は、二十年ごとに隣の敷地へすべての社殿をヒノキで建て替える式年遷宮の初回を六九〇年とする。用材ははじめ神宮背後の山から伐られたが、十八世紀からは木曽と裏木曽が担うことになる（<a href=\"gods.html\">神と木</a>参照）。",
                zh:"伊勢神宮將二十年一度、在相鄰基地以扁柏全面重建社殿的式年遷宮之首次，定於 690 年。木材起初取自神宮背後的山林；自十八世紀起，改由木曾與裏木曾供應（見<a href=\"gods.html\">神與樹</a>）。" } },
          { year:"701",
              era:{ en:"Taihō 1", ja:"大宝元年", zh:"大寶元年" },
              title:{ en:"The Taihō code", ja:"大宝律令", zh:"大寶律令" },
              jp:"律令",
              text:{
                en:"Japan's first complete law code is promulgated. Its text is lost, but historians believe it already contained the special article for Hida that survives in the later Yōrō code — an arrangement that may go back to the late seventh century.",
                ja:"日本最初の体系的な律令が施行される。本文は失われたが、のちの養老令に残る飛騨の特別規定はすでにここにあったと考えられている。その仕組みは七世紀後半にさかのぼる可能性もある。",
                zh:"日本第一部完整的律令頒行。原文已佚，但史家認為後來養老令中留存的飛驒特別條款，當時已經存在——這項安排甚至可能上溯至七世紀後半。" } },
          { year:"702",
              era:{ en:"Taihō 2", ja:"大宝二年", zh:"大寶二年" },
              title:{ en:"Mino paper in the Shōsōin", ja:"正倉院の美濃国戸籍", zh:"正倉院的美濃國戶籍" },
              jp:"美濃紙",
              text:{
                en:"Household registers of Mino province, written on paper made there, are preserved in the imperial repository at Nara: the oldest surviving paper in Japan. Mino washi's reputation begins here (see <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>).",
                ja:"美濃でつくられた紙に書かれた美濃国の戸籍が、奈良の正倉院に伝わる。日本に現存する最古の紙である。美濃和紙の名声はここに始まる（<a href=\"paper.html\">和紙・提灯・和傘</a>参照）。",
                zh:"以美濃當地所造之紙書寫的美濃國戶籍，保存在奈良的正倉院，是日本現存最古老的紙。美濃和紙的聲名由此開始（見<a href=\"paper.html\">和紙、燈籠與和傘</a>）。" } },
          { year:"710",
              era:{ en:"Wadō 3", ja:"和銅三年", zh:"和銅三年" },
              title:{ en:"The capital at Nara", ja:"平城京遷都", zh:"遷都平城京" },
              jp:"平城京",
              text:{
                en:"The court moves to Heijō-kyō, the new capital at Nara. The building of its palace, offices and temples over the following decades created the demand for skilled carpenters that the Hida article was designed to meet.",
                ja:"朝廷は奈良の新しい都、平城京へ移る。その後数十年にわたる宮殿、官衙、寺院の造営が、飛騨の規定が満たそうとした熟練大工への需要を生んだ。",
                zh:"朝廷遷往奈良的新都平城京。此後數十年間宮殿、官署與寺院的營建，形成了對熟練木匠的需求，而飛驒條款正是為此而設。" } },
          { year:"717", title:{en:"The Yōrō era",ja:"養老改元",zh:"改元養老"},
            text:{en:"Empress Genshō visits the spring at Tagi and names a new era “nurturing the aged”. See <a href=\"sake.html\">The Sake of Gifu</a>.",ja:"元正天皇が多度山の泉を訪れ、年号を「養老」と改める。<a href=\"sake.html\">岐阜の酒</a>を参照。",zh:"元正天皇造訪多度山之泉，將年號改為「養老」。見<a href=\"sake.html\">岐阜的酒</a>。"} },
          { year:"718",
              era:{ en:"Yōrō 2", ja:"養老二年", zh:"養老二年" },
              title:{ en:"The Hida article", ja:"斐陀国条", zh:"斐陀國條" },
              jp:"賦役令",
              text:{
                en:"The Yōrō code is compiled. Its section on taxes and labour exempts Hida from the yō and chō levies and requires ten craftsmen from each village unit, with one attendant for every four — about a hundred men a year, serving for a year at a time. No other province had such a rule (see <a href=\"takumi.html\">The Hida Takumi</a>).",
                ja:"養老律令が編まれる。賦役令は飛騨の庸と調を免じ、里ごとに匠丁十人を出させ、四人に一人の廝丁を添えさせた。年におよそ百人、一年交代の勤めである。このような規定をもつ国はほかにない（<a href=\"takumi.html\">飛騨の匠</a>参照）。",
                zh:"養老律令編成。其賦役令免除飛驒的庸與調，改為每「里」出匠丁十人，每四人另配雜役一人——每年約百人，一年一輪替。沒有其他國有這樣的規定（見<a href=\"takumi.html\">飛驒的匠人</a>）。" } },
          { year:"741", title:{en:"Provincial temples",ja:"国分寺",zh:"國分寺"},
            text:{en:"Emperor Shōmu orders a temple in every province; Mino's stands in what is now Ōgaki, Hida's in Takayama.",ja:"聖武天皇が国ごとの寺の建立を命じる。美濃の国分寺はいまの大垣に、飛騨の国分寺は高山に建つ。",zh:"聖武天皇詔令各國建寺；美濃國分寺位於今大垣，飛驒國分寺位於高山。"} },
          { year:"741",
              era:{ en:"Tenpyō 13", ja:"天平十三年", zh:"天平十三年" },
              title:{ en:"Provincial temples", ja:"国分寺建立の詔", zh:"國分寺建立詔" },
              jp:"飛騨国分寺",
              text:{
                en:"Emperor Shōmu orders a monastery and a nunnery to be built in every province. Hida's provincial temple rose in what is now Takayama; its present main hall is of the Muromachi period, and it is part of the Hida carpenters' Japan Heritage story (see <a href=\"architecture.html\">Temples, Townhouses &amp; Gasshō</a>).",
                ja:"聖武天皇が国ごとに僧寺と尼寺を建てるよう命じる。飛騨の国分寺はいまの高山に建てられた。現在の本堂は室町時代のもので、飛騨匠の日本遺産を構成する一つである（<a href=\"architecture.html\">社寺・町家・合掌</a>参照）。",
                zh:"聖武天皇下詔各國興建僧寺與尼寺。飛驒國分寺建於今日的高山；現存本堂為室町時代所建，並列為飛驒匠人日本遺產的構成之一（見<a href=\"architecture.html\">寺社、町家與合掌</a>）。" } },
          { year:"743–752",
              title:{ en:"The Great Buddha of Tōdai-ji", ja:"東大寺大仏", zh:"東大寺大佛" },
              jp:"大仏殿",
              text:{
                en:"The edict of 743 launches the colossal bronze Buddha and the hall to house it, then the largest wooden building in Japan; the eye-opening is held in 752. The project drew labour and timber from across the country. Hida carpenters were serving in the capital's building offices in exactly these years, though their part in this hall is not documented.",
                ja:"七四三年の詔により巨大な銅造の大仏と、それを納める当時日本最大の木造建築、大仏殿の造営が始まり、七五二年に開眼供養が行われる。事業は全国から労働力と木材を集めた。飛騨の匠はまさにこの時期に都の造営官司で働いていたが、この殿舎への関与は記録に残らない。",
                zh:"743 年的詔令啟動了巨大銅造大佛及安置它的大佛殿——當時日本最大的木造建築——的營建，752 年舉行開眼供養。工程徵集了全國的人力與木材。飛驒匠人正是在這些年間服役於都城的營造官署，但他們是否參與此殿，並無紀錄。" } },
          { year:"757",
              era:{ en:"Tenpyō-hōji 1", ja:"天平宝字元年", zh:"天平寶字元年" },
              title:{ en:"The Yōrō code in force", ja:"養老律令の施行", zh:"養老律令施行" },
              jp:"施行",
              text:{
                en:"Nearly forty years after its compilation, the Yōrō code is put into force. Its Hida article is the text by which the system is known; records of the early ninth century describe the men working 330 to 350 days of their year.",
                ja:"編纂から四十年近くを経て養老律令が施行される。この制度はその斐陀国条によって知られる。九世紀初めの記録は、匠丁が一年のうち三百三十日から三百五十日働いたと伝える。",
                zh:"編成後近四十年，養老律令正式施行。這項制度正是藉其斐陀國條為人所知；九世紀初的紀錄記載，匠丁一年要工作 330 至 350 天。" } },
          { year:"759",
              title:{ en:"The Man'yōshū and the inked line", ja:"万葉集と飛騨人の墨縄", zh:"萬葉集與飛驒人的墨線" },
              jp:"万葉集",
              text:{
                en:"The latest dated poem in the Man'yōshū is from 759. The anthology already uses the Hida carpenter's snapped ink line as an image of single-minded love — “like the ink line the Hida men strike, one straight way” — and mentions Hida men floating timber down a river (see <a href=\"poetry.html\">Wood in Letters</a>).",
                ja:"万葉集に収められた年代の明らかな歌の最後は七五九年のものである。この歌集はすでに、飛騨人が打つ墨縄を一途な恋の比喩として詠み（「飛騨人の打つ墨縄のただ一道に」）、また飛騨人が川に材木を流すさまにも触れている（<a href=\"poetry.html\">詩歌と文学のなかの木</a>参照）。",
                zh:"《萬葉集》中有明確年代的最後一首歌作於 759 年。這部歌集已將飛驒人彈出的墨線比作一心一意的戀情——「如飛驒人所彈墨線，只此一道」——也提到飛驒人在河上放流木材（見<a href=\"poetry.html\">詩文中的木</a>）。" } },
          { year:"762",
              era:{ en:"Tenpyō-hōji 6", ja:"天平宝字六年", zh:"天平寶字六年" },
              title:{ en:"Carpenters at Ishiyama-dera", ja:"石山寺の造営", zh:"石山寺營建" },
              jp:"造石山寺所",
              text:{
                en:"The accounts of the office rebuilding the Ishiyama temple near Lake Biwa record Hida craftsmen among its workforce — one of the few places where named Hida men can be followed at work, alongside later palace halls and temple works in Nara and Kyoto.",
                ja:"琵琶湖のほとり、石山寺を造営した役所の帳簿に、働き手として飛騨の工が記される。奈良と京都ののちの宮殿や寺院の工事と並んで、名のある飛騨の人々の仕事を追える数少ない場所の一つである。",
                zh:"營建琵琶湖畔石山寺之官署的帳簿中，記有飛驒工匠名列工人之間——與日後奈良、京都的宮殿與寺院工程並列，是少數能追蹤具名飛驒匠人工作的地方之一。" } },
          { year:"789", title:{en:"The barriers abolished",ja:"三関の廃止",zh:"廢除三關"},
            text:{en:"The Fuwa barrier and the other two great barriers are formally abolished.",ja:"不破関をはじめとする三関が正式に廃される。",zh:"不破關與另外兩座大關正式廢止。"} },
          { year:"794",
              era:{ en:"Enryaku 13", ja:"延暦十三年", zh:"延曆十三年" },
              title:{ en:"Heian-kyō", ja:"平安京", zh:"平安京" },
              jp:"平安遷都",
              text:{
                en:"The capital moves to Heian-kyō, today's Kyoto. Hida carpenters are recorded at work on the palace halls of the new city in the 790s and remain attached to the government's building offices there.",
                ja:"都が平安京、いまの京都へ移る。七九〇年代、飛騨の匠は新しい都の宮殿の工事に記録され、その後もそこで官の造営機関に属した。",
                zh:"都城遷至平安京，即今日的京都。790 年代的紀錄可見飛驒匠人參與新都宮殿工程，此後仍隸屬於當地的官方營造機構。" } },
          { year:"796–834",
              title:{ en:"Runaways", ja:"逃亡する匠丁", zh:"逃亡的匠丁" },
              jp:"逃亡",
              text:{
                en:"Orders of 796, 811 and 814 deal with Hida men who flee their service. A notice of 834 warns that they can be recognised by their speech and appearance whatever names they take — an early record of a regional identity, kept because it was useful to the police.",
                ja:"七九六年、八一一年、八一四年の命令が勤めから逃げる飛騨の者を扱う。八三四年の通達は、名を変えても言葉と姿で見分けられると警告する。地域的な特徴の早い記録であり、取締りに役立つから残されたのである。",
                zh:"796、811 與 814 年的命令處理逃離徭役的飛驒人。834 年的通告警示：不論改用什麼名字，都能從口音與相貌認出他們——這是地域特徵的早期紀錄，因為對緝捕有用而被保存下來。" } },
          { year:"819",
              era:{ en:"Kōnin 10", ja:"弘仁十年", zh:"弘仁十年" },
              title:{ en:"A shorter working year", ja:"勤務日数の短縮", zh:"縮短勞役日數" },
              jp:"匠丁",
              text:{
                en:"Because so many of the Hida men fall ill, their working year is cut from 330–350 days to 250–300. Some who stayed rose high: ninth-century annals record carpenters with Hida names promoted to the fifth rank, among the aristocracy.",
                ja:"病に倒れる者が多いため、飛騨の匠丁の勤務日数が三百三十〜三百五十日から二百五十〜三百日に減らされる。とどまった者のなかには出世した者もいた。九世紀の史書には、飛騨の名をもつ大工が五位、すなわち貴族の位に叙された例が見える。",
                zh:"由於太多飛驒匠丁病倒，其年度勞役自 330–350 天減為 250–300 天。留下的人之中也有飛黃騰達者：九世紀史書記載，有飛驒姓名的木匠獲授五位，躋身貴族之列。" } },
          { year:"927",
              era:{ en:"Enchō 5", ja:"延長五年", zh:"延長五年" },
              title:{ en:"The Engishiki", ja:"延喜式", zh:"延喜式" },
              jp:"木工寮・修理職",
              text:{
                en:"The great book of procedures assigns thirty-seven Hida men to the Bureau of Carpentry and sixty-three to the Office of Repairs — one hundred in all. Other records give a reduced standing quota of about sixty as the system weakened.",
                ja:"延喜式は飛騨の匠丁のうち三十七人を木工寮に、六十三人を修理職に配し、合わせて百人とする。制度が弱まるにつれ、常時の定員はおよそ六十人に減らされたとする記録もある。",
                zh:"《延喜式》將飛驒匠丁 37 人配屬木工寮、63 人配屬修理職，合計 100 人。另有紀錄顯示，隨著制度式微，常設名額減至約 60 人。" } },
          { year:"c. 1120",
              title:{ en:"The Hida carpenter in legend", ja:"説話のなかの飛騨の工", zh:"傳說中的飛驒工匠" },
              jp:"今昔物語集",
              text:{
                en:"The Konjaku monogatari collection tells of a contest between a Hida carpenter and the painter Kudara no Kawanari: a hall whose doors slam shut whichever one a visitor tries, answered by a painted corpse on a sliding door. The carpenter has become a figure of legend.",
                ja:"今昔物語集は、飛騨の工と絵師百済川成の腕比べを語る。どの戸から入ろうとしても戸が閉まる四面の堂に、川成は襖に描いた死体で応じる。飛騨の工は伝説の人物になっていた。",
                zh:"《今昔物語集》講述飛驒工匠與畫師百濟川成的較量：一座不論從哪扇門進去、門都會自動關上的四面堂，川成則以畫在紙門上的屍體回敬。飛驒工匠已成為傳說人物。" } }
        ] },
        { t:"tiny",
          text:{
            en:"Sources: Yōrō code and Engishiki as summarised by the Hida World Life and Culture Centre and Kotobank; Nara National Research Institute for Cultural Properties (dendrochronology of Hōryū-ji); Ise Jingū; Shōsōin.",
            ja:"出典：飛騨・世界生活文化センターおよびコトバンクによる養老令・延喜式の解説、奈良文化財研究所（法隆寺の年輪年代）、伊勢神宮、正倉院。",
            zh:"資料來源：飛驒・世界生活文化中心與 Kotobank 對養老令、延喜式的解說；奈良文化財研究所（法隆寺年輪定年）；伊勢神宮；正倉院。" } }
      ]
    },
    { t:"section", id:"medieval",
      title:{ en:"The medieval centuries", ja:"中世", zh:"中世" }, jp:"鎌倉から戦国",
      body:[
        { t:"timeline", items:[
          { year:"1159",
              era:{ en:"Heiji 1", ja:"平治元年", zh:"平治元年" },
              title:{ en:"Yew for the court", ja:"位山の笏木", zh:"位山笏木" },
              jp:"一位",
              text:{
                en:"By local tradition, yew from Kuraiyama near Hida Ichinomiya is first presented for the shaku, the flat batons held at court, and the tree is granted the rank ichii, “first rank”, which becomes its name. The presentation is still made for Ise rebuildings and enthronements (see <a href=\"ittobori.html\">Ichii Ittōbori</a>).",
                ja:"地元の伝承では、飛騨一宮に近い位山のイチイがこの年初めて笏の材として献上され、木は「一位」の位を授かり、それが名となった。献上はいまも遷宮と即位の際に行われる（<a href=\"ittobori.html\">一位一刀彫</a>参照）。",
                zh:"據地方傳說，飛驒一宮附近位山的紫杉於這一年首次獻上作為朝笏之材，樹因而獲授「一位」之位，並以此為名。每逢伊勢遷宮與天皇即位，至今仍有獻上（見<a href=\"ittobori.html\">一位一刀雕</a>）。" } },
          { year:"1185–1333",
              title:{ en:"The draft fades", ja:"匠丁制の衰退", zh:"徵調制度消逝" },
              jp:"鎌倉時代",
              text:{
                en:"By the Kamakura period the Hida draft no longer functions. By one estimate from Takayama, some 40,000 to 50,000 men served over the life of the system. Hida carpenters continue to work far from home as free craftsmen, and the name “Hida no takumi” becomes a byword for skill.",
                ja:"鎌倉時代には飛騨の匠丁の制度はもはや機能していない。高山の推計によれば、制度が続いた間に四万から五万人が勤めた。飛騨の大工はその後も自由な職人として遠く働き、「飛騨の匠」の名は腕の代名詞となる。",
                zh:"到了鎌倉時代，飛驒匠丁制度已不再運作。據高山方面的估計，制度存續期間約有 4 萬至 5 萬人服役。此後飛驒木匠仍以自由工匠之身遠赴他鄉工作，「飛驒之匠」成為手藝精湛的代名詞。" } },
          { year:"1311",
              title:{ en:"A Hida carpenter at Nagataki", ja:"長滝寺大講堂", zh:"長瀧寺大講堂" },
              jp:"藤原宗安",
              text:{
                en:"The great lecture hall of Chōryū-ji, the Hakusan temple at Nagataki in today's Gujō, is built by Fujiwara no Muneyasu, recorded as a Hida carpenter — evidence of Hida men working in Mino long after the draft had ended.",
                ja:"いまの郡上市長滝にある白山長滝寺の大講堂が、飛騨の工と記される藤原宗安によって建てられる。徴発が終わってからも、飛騨の者が美濃で働いていた証しである。",
                zh:"位於今郡上市長瀧的白山長瀧寺大講堂，由記載為飛驒工匠的藤原宗安建造——證明徵調制度結束許久之後，飛驒人仍在美濃工作。" } },
          { year:"1313",
              title:{ en:"Eihōji at Tajimi", ja:"永保寺", zh:"永保寺" },
              jp:"開山堂・観音堂",
              text:{
                en:"The Zen temple of Eihōji is founded beside the Toki River, traditionally in 1313. Its Kannon hall and founder's hall, of the fourteenth century, are National Treasures and among the finest Zen-style buildings in Japan, with steep curved roofs and slender members.",
                ja:"土岐川のほとりに禅宗の永保寺が開かれる。伝えでは一三一三年である。十四世紀の観音堂と開山堂は国宝で、反りの強い屋根と細い部材をもつ禅宗様建築の傑作に数えられる。",
                zh:"禪寺永保寺在土岐川畔開創，傳統上定為 1313 年。其十四世紀的觀音堂與開山堂為國寶，屋頂弧度陡峭、構材纖細，被列為日本禪宗樣建築的佳作。" } },
          { year:"1336–1573",
              title:{ en:"Tōnō hinoki enters the record", ja:"東濃ひのきの始まり", zh:"東濃扁柏登上紀錄" },
              jp:"室町時代",
              text:{
                en:"From the Muromachi period the hinoki of eastern Mino — the forests of Tsukechi, Kawaue and Kashimo that would later be called Ura-Kiso — are cut and sent down the rivers as building timber, the beginning of the brand now sold as Tōnō hinoki (see <a href=\"hinoki.html\">Hinoki</a>).",
                ja:"室町時代から、東美濃のヒノキ——のちに裏木曽と呼ばれる付知、川上、加子母の山——が伐られ、建築材として川を下った。いま「東濃ひのき」として売られる銘柄の始まりである（<a href=\"hinoki.html\">ヒノキ</a>参照）。",
                zh:"自室町時代起，東美濃的扁柏——即日後稱為裏木曾的付知、川上與加子母山林——被砍伐並沿河運下作為建材，這是今日「東濃扁柏」品牌的起點（見<a href=\"hinoki.html\">日本扁柏</a>）。" } },
          { year:{en:"14th c.",ja:"14世紀",zh:"14 世紀"}, title:{en:"Smiths at Seki",ja:"関の刀鍛冶",zh:"關的刀匠"},
            text:{en:"Swordsmiths are recorded at Seki, the beginning of the Mino tradition. See <a href=\"sword.html\">The Mino Sword</a>.",ja:"関に刀鍛冶の記録があらわれ、美濃伝が始まる。<a href=\"sword.html\">美濃伝の刀</a>を参照。",zh:"關開始出現刀匠的紀錄，美濃傳由此發端。見<a href=\"sword.html\">美濃傳之刀</a>。"} },
          { year:"1408",
              era:{ en:"Ōei 15", ja:"応永十五年", zh:"應永十五年" },
              title:{ en:"Ankokuji sutra repository", ja:"安国寺経蔵", zh:"安國寺經藏" },
              jp:"国宝",
              text:{
                en:"A small hall in Takayama, one bay square but made to look like a two-storey building three bays wide by its pent roof, is built to house an octagonal revolving sutra case — the oldest in Japan. It became a National Treasure in 1958.",
                ja:"高山に、一間四方ながら裳階によって三間二階建てに見える小堂が建てられ、八角の輪蔵を納める。日本最古の輪蔵である。一九五八年に国宝となった。",
                zh:"高山建起一座小堂，面寬僅一間，卻因裳階而看似三間兩層，用以安置八角形的轉輪經藏——日本最古老者。1958 年列為國寶。" } },
          { year:"1467–1573",
              title:{ en:"Castles and carpenters", ja:"戦国の城と大工", zh:"戰國的城與木匠" },
              jp:"戦国時代",
              text:{
                en:"A century of civil war turns building towards fortification. Local lords in Hida and Mino build hill castles of timber and earth, and the demand for timber for castles and warships drives the heavy cutting that the next rulers of Kiso and Hida would inherit.",
                ja:"百年に及ぶ内乱で、建築は城郭へ向かう。飛騨と美濃の国衆は木と土の山城を築き、城と軍船のための木材需要は大伐採を生み、次の木曽と飛騨の支配者がそれを引き継ぐことになる。",
                zh:"長達百年的內戰使營建轉向防禦工事。飛驒與美濃的地方領主以木與土築起山城，築城與戰船所需的木材引發大規模砍伐，並由下一代木曾與飛驒的統治者承接。" } },
          { year:"1468", title:{en:"Zuiryū-ji",ja:"瑞龍寺",zh:"瑞龍寺"},
            text:{en:"Saitō Myōchin, who ran Mino for the Toki, founds a temple for his lord in Gifu.",ja:"土岐氏のために美濃を切り回した斎藤妙椿が、主君のための寺を岐阜に開く。",zh:"為土岐氏掌理美濃的齋藤妙椿，在岐阜為其主君創建寺院。"} },
          { year:{en:"late 15th c.",ja:"15世紀後半",zh:"15 世紀後半"}, title:{en:"“Gifu” in monks' writing",ja:"禅僧の詩文の「岐阜」",zh:"禪僧筆下的「岐阜」"},
            text:{en:"Zen monks use Giyō and Gifu as literary names for the place. See <a href=\"names.html\">The Name “Gifu”</a>.",ja:"禅僧が「岐陽」「岐阜」をこの地の雅称として用いる。<a href=\"names.html\">「岐阜」という名</a>を参照。",zh:"禪僧以「岐陽」、「岐阜」作為此地的雅稱。見<a href=\"names.html\">「岐阜」之名</a>。"} },
          { year:"1556", title:{en:"The Battle of the Nagara River",ja:"長良川の戦い",zh:"長良川之戰"},
            text:{en:"Saitō Dōsan is killed by his son Yoshitatsu.",ja:"斎藤道三が子の義龍に討たれる。",zh:"齋藤道三遭其子義龍所殺。"} },
          { year:"1567", title:{en:"Nobunaga takes Inabayama",ja:"信長、稲葉山を落とす",zh:"信長攻下稻葉山"},
            text:{en:"Oda Nobunaga takes the castle, calls the town Gifu and frees the market of Kanō from its guilds. See <a href=\"nobunaga.html\">Nobunaga's Gifu</a>.",ja:"織田信長が城を落とし、町を岐阜と名づけ、加納の市を楽市とする。<a href=\"nobunaga.html\">信長の岐阜</a>を参照。",zh:"織田信長攻下城池，將城下命名為岐阜，並令加納市場成為樂市。見<a href=\"nobunaga.html\">信長的岐阜</a>。"} },
          { year:"1569", title:{en:"Fróis at Gifu",ja:"フロイスの岐阜訪問",zh:"佛洛伊斯造訪岐阜"},
            text:{en:"The Jesuit Luís Fróis is shown Nobunaga's palace and describes its four storeys.",ja:"イエズス会のルイス・フロイスが信長の居館に案内され、その四層を書き留める。",zh:"耶穌會士路易斯·佛洛伊斯受邀參觀信長居館，記下其四層樓閣。"} },
          { year:"1583–1598",
              title:{ en:"Kiso timber for Hideyoshi", ja:"秀吉と木曽の材", zh:"秀吉與木曾之材" },
              jp:"大坂城・伏見城",
              text:{
                en:"Toyotomi Hideyoshi draws on the Kiso forests for Osaka castle, begun in 1583, and later for Fushimi castle — the first of the great state fellings of the valley's hinoki that would continue under the Tokugawa (see <a href=\"fivetrees.html\">The Five Trees of Kiso</a>).",
                ja:"豊臣秀吉は一五八三年に着工した大坂城、のちの伏見城のために木曽の森の材を用いる。徳川の世に続く、谷のヒノキの国家的大伐採の始まりである（<a href=\"fivetrees.html\">木曽五木</a>参照）。",
                zh:"豐臣秀吉為 1583 年動工的大坂城、其後又為伏見城，取用木曾森林的木材——這是延續至德川時代、對該谷扁柏進行國家級大砍伐的開端（見<a href=\"fivetrees.html\">木曾五木</a>）。" } },
          { year:"1585–1586",
              era:{ en:"Tenshō 13–14", ja:"天正十三〜十四年", zh:"天正十三至十四年" },
              title:{ en:"The Kanamori in Hida", ja:"金森氏の飛騨入国", zh:"金森氏入主飛驒" },
              jp:"金森長近",
              text:{
                en:"On Hideyoshi's orders Kanamori Nagachika invades Hida in 1585 and is granted the province the next year, 1586. Six generations of his family rule it for 107 years.",
                ja:"秀吉の命を受けた金森長近は一五八五年に飛騨へ攻め入り、翌一五八六年に国を与えられる。金森氏は六代百七年にわたって飛騨を治めた。",
                zh:"金森長近奉秀吉之命於 1585 年攻入飛驒，翌年 1586 年受封該國。金森家六代統治飛驒達 107 年。" } },
          { year:"1586", title:{en:"The Tenshō earthquake",ja:"天正地震",zh:"天正地震"},
            text:{en:"A landslide buries the Uchigashima and their castle at Kaerikumo in Shirakawa. See <a href=\"landform.html\">Mountains, Plains &amp; Rock</a>.",ja:"山崩れが白川の帰雲城を内ヶ島氏もろとも埋める。<a href=\"landform.html\">山と平野と岩</a>を参照。",zh:"山崩將白川的歸雲城連同內島氏一起掩埋。見<a href=\"landform.html\">山、平原與岩石</a>。"} },
          { year:"1588–1603",
              title:{ en:"Takayama castle and town", ja:"高山城と城下町", zh:"高山城與城下町" },
              jp:"城下町",
              text:{
                en:"The Kanamori build a castle on the hill above the Miyagawa and lay out the town below it. Its merchant quarter, rebuilt after many fires, is the old town of Takayama that visitors walk today (see <a href=\"architecture.html\">Temples, Townhouses &amp; Gasshō</a>).",
                ja:"金森氏は宮川を見下ろす山に城を築き、その下に町を割った。たびたびの火事のあと建て直された町人地が、いま訪れる人が歩く高山の古い町並みである（<a href=\"architecture.html\">社寺・町家・合掌</a>参照）。",
                zh:"金森氏在俯瞰宮川的山上築城，並在山下規劃城下町。其町人區歷經多次火災重建，就是今日遊客漫步的高山古街（見<a href=\"architecture.html\">寺社、町家與合掌</a>）。" } },
          { year:"1600", title:{en:"Sekigahara",ja:"関ヶ原の戦い",zh:"關原之戰"},
            text:{en:"Gifu Castle falls to the eastern army; on 15 September the decisive battle is fought at Sekigahara. See <a href=\"sekigahara.html\">Sekigahara</a>.",ja:"岐阜城が東軍に落ち、九月十五日、関ヶ原で天下分け目の戦いが行われる。<a href=\"sekigahara.html\">関ヶ原</a>を参照。",zh:"岐阜城落入東軍之手；九月十五日，決定天下的一戰在關原展開。見<a href=\"sekigahara.html\">關原</a>。"} }
        ] },
        { t:"tiny",
          text:{
            en:"Sources: Kotobank (Hida no takumi; Konjaku monogatari); Hida World Life and Culture Centre estimate of the number of men sent; Takayama City; Gujō City; Tajimi City; Agency for Cultural Affairs database of cultural properties.",
            ja:"出典：コトバンク（飛騨工、今昔物語集）、飛騨・世界生活文化センターによる送り出し人数の推計、高山市、郡上市、多治見市、文化庁の文化財データベース。",
            zh:"資料來源：Kotobank（飛驒工、今昔物語集）；飛驒・世界生活文化中心對徵調人數的估計；高山市；郡上市；多治見市；文化廳文化財資料庫。" } }
      ]
    },
    { t:"section", id:"edo",
      title:{ en:"The Edo period", ja:"江戸時代", zh:"江戶時代" }, jp:"近世",
      body:[
        { t:"timeline", items:[
          { year:"1601", title:{en:"Gifu Castle abandoned",ja:"岐阜城の廃城",zh:"岐阜城廢城"},
            text:{en:"The castle on Kinkazan is given up; a new one is built at Kanō.",ja:"金華山の城は廃され、加納に新しい城が築かれる。",zh:"金華山上的城被廢棄，另於加納築新城。"} },
          { year:"1606",
              era:{ en:"Keichō 11", ja:"慶長十一年", zh:"慶長十一年" },
              title:{ en:"The first Shunkei tray", ja:"春慶塗の始まり", zh:"春慶塗的起源" },
              jp:"飛騨春慶",
              text:{
                en:"By tradition, the carpenter Takahashi Kizaemon splits a log of sawara, admires its grain and makes a tray; the lacquerer Narita San'emon finishes it in transparent urushi, and it is presented to Kanamori Shigechika, the lord's son. Hida Shunkei begins (see <a href=\"shunkei.html\">Hida Shunkei</a>).",
                ja:"伝承では、大工の高橋喜左衛門がサワラを割って木目の美しさに打たれ、盆をつくった。塗師の成田三右衛門が透漆で仕上げ、藩主の子、金森重近に献じた。飛騨春慶の始まりである（<a href=\"shunkei.html\">飛騨春慶</a>参照）。",
                zh:"據傳，木匠高橋喜左衛門劈開一段花柏，驚艷於其木紋而製成托盤；漆匠成田三右衛門以透明生漆完成，獻給藩主之子金森重近。飛驒春慶由此開始（見<a href=\"shunkei.html\">飛驒春慶</a>）。" } },
          { year:"1615",
              title:{ en:"Kiso goes to Owari", ja:"木曽、尾張藩領に", zh:"木曾歸尾張藩" },
              jp:"尾張藩",
              text:{
                en:"The Tokugawa give the Kiso valley and its forests to the Owari domain in Nagoya. Owari will run them, including the Ura-Kiso forests on the Gifu side, until 1869, and the early decades bring heavy cutting for castles, temples and ships.",
                ja:"徳川は木曽谷とその森を名古屋の尾張藩に与える。尾張藩は岐阜側の裏木曽を含めて一八六九年までこれを治め、初めの数十年には城、寺社、船のための大伐採が続いた。",
                zh:"德川家將木曾谷及其森林賜予名古屋的尾張藩。尾張藩管理這片山林——包括岐阜一側的裏木曾——直到 1869 年；最初數十年間，為築城、寺社與造船而大量砍伐。" } },
          { year:"1635", title:{en:"The Toda at Ōgaki",ja:"戸田氏の大垣入封",zh:"戶田氏入主大垣"},
            text:{en:"The Toda family takes Ōgaki, at 100,000 koku the largest domain in Mino. See <a href=\"edo.html\">The Edo Patchwork</a>.",ja:"戸田氏が大垣に入る。十万石で美濃最大の藩である。<a href=\"edo.html\">江戸時代の美濃・飛騨</a>を参照。",zh:"戶田氏入主大垣，十萬石，為美濃最大的藩。見<a href=\"edo.html\">江戶時代的美濃與飛驒</a>。"} },
          { year:"1639",
              era:{ en:"Kan'ei 16", ja:"寛永十六年", zh:"寬永十六年" },
              title:{ en:"Umbrella makers come to Kanō", ja:"加納に傘職人", zh:"傘匠來到加納" },
              jp:"岐阜和傘",
              text:{
                en:"Matsudaira Mitsushige, moved to the Kanō domain from Akashi, brings umbrella craftsmen with him — the start of the Gifu wagasa trade of bamboo, Mino paper and a hub turned from egonoki.",
                ja:"明石から加納藩へ移った松平光重が傘職人を連れてくる。竹と美濃紙、エゴノキを削ったロクロでつくる岐阜和傘の始まりである。",
                zh:"松平光重自明石轉封加納藩，並帶來傘匠——以竹、美濃紙與野茉莉木旋製傘轂的岐阜和傘由此開始。" } },
          { year:"1665",
              era:{ en:"Kanbun 5", ja:"寛文五年", zh:"寬文五年" },
              title:{ en:"Owari closes its forests", ja:"留山と錦織綱場", zh:"封山與錦織綱場" },
              jp:"留山・巣山",
              text:{
                en:"After decades of over-cutting the domain begins to designate closed forests (tomeyama) and hawk-nesting reserves (suyama), and takes the timber post at Nishikori in today's Yaotsu under direct control, where logs from the Kiso were caught and made into rafts (see <a href=\"timberrivers.html\">The Timber Rivers</a>).",
                ja:"数十年の過伐ののち、藩は留山と巣山の指定を始め、いまの八百津町にあった錦織の材木の集積地を直轄とする。木曽から流した材はここで留められ、筏に組まれた（<a href=\"timberrivers.html\">木を運んだ川</a>参照）。",
                zh:"經過數十年的過度砍伐，尾張藩開始劃定禁伐的「留山」與鷹巢保護區「巢山」，並將位於今八百津町的錦織木材集散地收歸直轄；自木曾放流的原木在此攔截並編成木筏（見<a href=\"timberrivers.html\">運木之河</a>）。" } },
          { year:"1689",
              era:{ en:"Genroku 2", ja:"元禄二年", zh:"元祿二年" },
              title:{ en:"Bashō ends his journey at Ōgaki", ja:"芭蕉、大垣で旅を結ぶ", zh:"芭蕉於大垣結束旅程" },
              jp:"奥の細道",
              text:{
                en:"Matsuo Bashō ends The Narrow Road to the Deep North at Ōgaki and leaves by boat down the river “to worship at the rebuilding of the shrines” — the Ise Sengū of that year (see <a href=\"poetry.html\">Wood in Letters</a>).",
                ja:"松尾芭蕉は『おくのほそ道』の旅を大垣で結び、「伊勢の遷宮をおがまん」と舟で川を下る。この年の式年遷宮である（<a href=\"poetry.html\">詩歌と文学のなかの木</a>参照）。",
                zh:"松尾芭蕉在大垣結束《奧之細道》之旅，乘舟順流而下，「前往參拜伊勢遷宮」——即該年的式年遷宮（見<a href=\"poetry.html\">詩文中的木</a>）。" } },
          { year:"1692",
              era:{ en:"Genroku 5", ja:"元禄五年", zh:"元祿五年" },
              title:{ en:"Hida under direct shogunal rule", ja:"飛騨、幕府直轄領に", zh:"飛驒改為幕府直轄" },
              jp:"高山陣屋",
              text:{
                en:"The Kanamori are moved to another domain and Hida becomes shogunal land, governed from the Takayama Jinya until 1868; the forests are said to have been the reason. The jinya is the only intendant's office of the period whose main buildings survive.",
                ja:"金森氏は転封され、飛騨は幕府の直轄領となり、一八六八年まで高山陣屋から治められる。森林資源がその理由といわれる。高山陣屋は、この時代の郡代・代官所で主要な建物が残る唯一のものである。",
                zh:"金森氏被移封，飛驒成為幕府直轄領，直到 1868 年都由高山陣屋治理；據說原因正是森林資源。高山陣屋是該時代唯一主要建築尚存的郡代、代官役所。" } },
          { year:"1695",
              era:{ en:"Genroku 8", ja:"元禄八年", zh:"元祿八年" },
              title:{ en:"A castle falls, a carver dies", ja:"高山城の破却と円空の入定", zh:"高山城拆除與圓空圓寂" },
              jp:"円空",
              text:{
                en:"Takayama castle is demolished. In the same year the itinerant monk Enkū, born in Mino in 1632, dies by the Nagara River near Seki, having carved thousands of Buddhist images with a hatchet and chisel, some of the finest in Hida (see <a href=\"ittobori.html\">Ichii Ittōbori</a>).",
                ja:"高山城が取り壊される。同じ年、一六三二年に美濃で生まれた遊行僧円空が、関に近い長良川のほとりで没する。鉈と鑿で数千の仏像を彫り、その優品のいくつかは飛騨にある（<a href=\"ittobori.html\">一位一刀彫</a>参照）。",
                zh:"高山城被拆除。同年，1632 年生於美濃的遊方僧圓空在關市附近的長良川畔圓寂；他以柴刀與鑿子雕出數千尊佛像，其中幾件傑作就在飛驒（見<a href=\"ittobori.html\">一位一刀雕</a>）。" } },
          { year:"1697–1707",
              title:{ en:"Cutting shingle blanks", ja:"元伐", zh:"「元伐」" },
              jp:"榑木",
              text:{
                en:"Forty-eight villages of the Atano and Osaka districts of Hida are set to cutting 600,000 to 700,000 kureki — split blanks for shingles and boards — for wages, floated down the Hida River towards Nagoya and Kuwana. The end of the work in 1707 left the villages without the income they had come to rely on.",
                ja:"飛騨の阿多野郷と小坂郷の四十八か村が、賃銭を受けて榑木（屋根板や板の割材）六十万〜七十万本を伐り出し、飛騨川を名古屋・桑名方面へ流す。一七〇七年に仕事が止むと、村々は頼りにしていた収入を失った。",
                zh:"飛驒阿多野鄉與小坂鄉的 48 個村受僱砍伐 60 萬至 70 萬根「榑木」（屋頂板與木板用的劈裂材），沿飛驒川放流往名古屋與桑名。1707 年工作停止後，各村失去了賴以為生的收入。" } },
          { year:"1708",
              era:{ en:"Hōei 5", ja:"宝永五年", zh:"寶永五年" },
              title:{ en:"The five trees of Kiso", ja:"停止木", zh:"停止木" },
              jp:"木曽五木",
              text:{
                en:"Owari forbids the cutting of hinoki, sawara, asunaro, nezuko and kōyamaki anywhere in its Kiso forests — “a tree for a head”. The five, remembered by the mnemonic asahineko, are still called the five trees of Kiso.",
                ja:"尾張藩は木曽の山でヒノキ、サワラ、アスナロ、ネズコ、コウヤマキの伐採を禁じる。「木一本、首一つ」。「あさひねこ」と覚えられるこの五種は、いまも木曽五木と呼ばれる。",
                zh:"尾張藩禁止在木曾山林砍伐扁柏、花柏、羅漢柏、香柏（黑檜）與日本金松——「一木一首」。以口訣「あさひねこ」記憶的這五種樹，至今仍稱為木曾五木。" } },
          { year:"1709",
              era:{ en:"Hōei 6", ja:"宝永六年", zh:"寶永六年" },
              title:{ en:"Ura-Kiso timber for Ise", ja:"裏木曽の御用材", zh:"裏木曾御用材" },
              jp:"第四十七回遷宮",
              text:{
                en:"For the 47th rebuilding of the Ise shrines, timber comes from Ura-Kiso, on the Gifu side of the watershed — the beginning of a supply that has lasted more than three centuries.",
                ja:"第四十七回式年遷宮の御用材が、分水嶺の岐阜側にある裏木曽から出る。三百年を超えて続く供給の始まりである。",
                zh:"第 47 回式年遷宮的御用材取自分水嶺岐阜一側的裏木曾——這項供給自此延續三百餘年。" } },
          { year:"1729",
              era:{ en:"Kyōhō 14", ja:"享保十四年", zh:"享保十四年" },
              title:{ en:"The Denokōji stand protected", ja:"出ノ小路の保護", zh:"出之小路林保護" },
              jp:"加子母",
              text:{
                en:"Owari places the hinoki stand at Denokōji in Kashimo under protection. Today about 730 hectares at 820 to 1,820 metres, with hinoki of 300 to 400 years, it became a shrine reserve forest in 1909 and is now the Kiso Hinoki reserve that supplies Ise.",
                ja:"尾張藩は加子母の出ノ小路のヒノキ林を保護下におく。いまは標高820〜1,820mにひろがる約730haで、樹齢三百〜四百年のヒノキが立つ。一九〇九年に神宮備林となり、現在は伊勢の用材を育てる木曽ヒノキ備林である。",
                zh:"尾張藩將加子母出之小路的扁柏林納入保護。這片林地今日約 730 公頃，海拔 820 至 1,820 公尺，扁柏樹齡 300 至 400 年；1909 年成為神宮備林，現為供應伊勢的木曾扁柏備林。" } },
          { year:"1751–1764",
              title:{ en:"The Hōreki years: floats and lanterns", ja:"宝暦の屋台と提灯", zh:"寶曆年間：屋台與燈籠" },
              jp:"宝暦",
              text:{
                en:"The oldest of Takayama's festival floats date from these years, and by their end Gifu lanterns have taken their familiar form of thin Mino paper over fine bamboo ribs (see <a href=\"floats.html\">Festival Floats</a>).",
                ja:"高山祭の屋台で最も古いものはこの時代にさかのぼる。この時代の終わりまでに、岐阜提灯も薄い美濃紙を細い竹ひごに張るおなじみの形を整えた（<a href=\"floats.html\">祭屋台</a>参照）。",
                zh:"高山祭最古老的屋台可追溯至這個年代；到了寶曆末年，岐阜燈籠也已成為以薄美濃紙糊在細竹骨上的熟悉樣貌（見<a href=\"floats.html\">祭典屋台</a>）。" } },
          { year:"1754–55", title:{en:"The Hōreki river works",ja:"宝暦治水",zh:"寶曆治水"},
            text:{en:"Satsuma men under Hirata Yukie build levees and cut-offs on the lower rivers at ruinous cost. See <a href=\"chisui.html\">Taming the Three Rivers</a>.",ja:"平田靱負ひきいる薩摩の人々が、莫大な費用をかけて下流に堤と締切を築く。<a href=\"chisui.html\">木曽三川の治水</a>を参照。",zh:"平田靱負率領的薩摩人，以驚人的代價在下游修築堤防與截流工程。見<a href=\"chisui.html\">木曾三川的治水</a>。"} },
          { year:"1754–58", title:{en:"The Gujō uprising",ja:"郡上一揆",zh:"郡上一揆"},
            text:{en:"Peasants' protests end with the lord's domain confiscated and senior shogunal officials dismissed.",ja:"百姓の訴えは、藩主の改易と幕府の重臣の罷免に終わる。",zh:"農民的抗爭以藩主遭沒收領地、幕府高官被罷免告終。"} },
          { year:"1771–89", title:{en:"The Ōhara disturbances",ja:"大原騒動",zh:"大原騷動"},
            text:{en:"Three waves of uprisings in Hida against the intendant Ōhara and his son.",ja:"郡代の大原父子に対し、飛騨で三度にわたり一揆が起こる。",zh:"飛驒針對代官大原父子先後爆發三波起義。"} },
          { year:"1771–1789",
              title:{ en:"The Ōhara disturbances", ja:"大原騒動", zh:"大原騷動" },
              jp:"大原騒動",
              text:{
                en:"Eighteen years of peasant unrest in Hida over land surveys, rice levies for Edo and the loss of timber-cutting work. The first rising is put down in 1773 with troops from neighbouring domains; the affair ends in 1789 with the exile of the intendant.",
                ja:"検地、江戸への御用米、伐木の仕事の喪失をめぐって、十八年にわたる農民の騒動が飛騨で続く。最初の一揆は一七七三年に近隣諸藩の兵で鎮められ、一七八九年の郡代の遠島で幕を閉じる。",
                zh:"飛驒農民因檢地、上繳江戶的御用米與伐木工作的喪失，騷動長達十八年。首次起事於 1773 年遭鄰近諸藩兵力鎮壓，事件在 1789 年以郡代遭流放告終。" } },
          { year:"1797",
              era:{ en:"Kansei 9", ja:"寛政九年", zh:"寬政九年" },
              title:{ en:"A gasshō house", ja:"旧若山家住宅", zh:"舊若山家住宅" },
              jp:"合掌造",
              text:{
                en:"The Wakayama family's house, a four-storey gasshō farmhouse of timber, rope and thatch, is built in the Shō River valley. It now stands among some thirty relocated buildings at the Hida Folk Village in Takayama.",
                ja:"木と縄と茅でつくる四層の合掌造、若山家の住宅が庄川の谷に建てられる。いまは高山の飛騨民俗村に移築された約三十棟のなかに立つ。",
                zh:"若山家住宅——一座以木、繩與茅草構成的四層合掌造農舍——建於庄川河谷。今日它與約三十棟遷建的建築一同立於高山的飛驒民俗村。" } },
          { year:"1800–1871",
              title:{ en:"Matsuda Sukenaga and Ittōbori", ja:"松田亮長と一刀彫", zh:"松田亮長與一刀彫" },
              jp:"一位一刀彫",
              text:{
                en:"The Takayama netsuke carver Matsuda Sukenaga, held to be the founder of Ichii Ittōbori, develops the style of carving yew with bold, unpainted cuts that leave the red heartwood and pale sapwood to speak for themselves.",
                ja:"高山の根付師、松田亮長は一位一刀彫の祖とされる。彩色せず、大胆な刃跡で赤太と白太の色をそのまま生かすイチイの彫りを確立した。",
                zh:"高山的根付雕刻師松田亮長被視為一位一刀彫的創始者，他確立了不上色、以大膽刀痕讓紅色心材與白色邊材自然呈現的紫杉雕刻風格。" } },
          { year:"1808",
              era:{ en:"Bunka 5", ja:"文化五年", zh:"文化五年" },
              title:{ en:"The Hida takumi as wizards", ja:"飛騨匠物語", zh:"《飛驒匠物語》" },
              jp:"石川雅望・葛飾北斎",
              text:{
                en:"Ishikawa Masamochi's illustrated novel Hida no takumi monogatari, with pictures by Katsushika Hokusai, turns a Hida master and his apprentice into wizards who learn from immortals and build flying machines.",
                ja:"石川雅望の読本『飛騨匠物語』が葛飾北斎の挿絵で刊行される。飛騨の棟梁と弟子は仙人に学び、空飛ぶからくりをつくる術者として描かれる。",
                zh:"石川雅望的讀本小說《飛驒匠物語》出版，由葛飾北齋繪製插圖；書中的飛驒棟樑與徒弟向仙人學藝，打造會飛的機關。" } },
          { year:"1822–1864",
              title:{ en:"Taniguchi Yoroku", ja:"谷口与鹿", zh:"谷口與鹿" },
              jp:"屋台彫刻",
              text:{
                en:"The second son of a Takayama family of master carpenters carves for several festival floats, most famously the Kirin-tai, whose panel of Chinese children at play is cut from a single block. He dies in 1864 far from home, in Itami.",
                ja:"高山の棟梁の家の次男に生まれ、いくつもの屋台に彫刻を残す。最も名高いのは麒麟台で、唐子群遊の彫刻は一木から彫り出されている。一八六四年、故郷を遠く離れた伊丹で没した。",
                zh:"生於高山棟樑世家的次子，為多座屋台留下雕刻，最著名的是麒麟台——其「唐子群遊」浮雕以整塊木料雕成。1864 年客死他鄉伊丹。" } },
          { year:{en:"early 19th c.",ja:"19世紀初め",zh:"19 世紀初"}, title:{en:"Ichii ittōbori",ja:"一位一刀彫",zh:"一位一刀雕"},
            text:{en:"Matsuda Sukenaga of Takayama establishes the unpainted carving of yew. See <a href=\"shunkei.html\">Hida Shunkei</a>.",ja:"高山の松田亮長が、彩色しないイチイの彫刻を確立する。<a href=\"shunkei.html\">飛騨春慶</a>を参照。",zh:"高山的松田亮長確立了不上彩的紫杉雕刻。見<a href=\"shunkei.html\">飛驒春慶</a>。"} },
          { year:"1831",
              era:{ en:"Tenpō 2", ja:"天保二年", zh:"天保二年" },
              title:{ en:"The drums of Furukawa", ja:"古川の起し太鼓", zh:"古川的起太鼓" },
              jp:"古川祭",
              text:{
                en:"The first documentary record of Furukawa's night-time drum rite, in which a great drum carried on a wooden tower by hundreds of men is jostled by rival groups with smaller drums on poles. The festival joined UNESCO's list with Takayama's in 2016.",
                ja:"古川の起し太鼓の、文書による最初の記録。木の櫓に据えた大太鼓を数百人が担ぎ、対抗する組が竿につけた小太鼓で迫る夜の行事である。祭は二〇一六年に高山祭とともにユネスコの一覧に加わった。",
                zh:"古川「起太鼓」最早的文獻紀錄：數百人扛著架在木造高台上的大鼓，敵對隊伍則以綁在竿上的小鼓相互推擠的夜間儀式。此祭典於 2016 年與高山祭一同列入聯合國教科文組織名錄。" } },
          { year:"1832", title:{en:"The Gifu Great Buddha",ja:"岐阜大仏",zh:"岐阜大佛"},
            text:{en:"After thirty-eight years the dry-lacquer Buddha of Shōhō-ji is completed. See <a href=\"faith.html\">Shrines &amp; Temples</a>.",ja:"三十八年をかけて正法寺の乾漆の大仏が完成する。<a href=\"faith.html\">社寺と信仰</a>を参照。",zh:"歷時三十八年，正法寺的乾漆大佛完成。見<a href=\"faith.html\">神社、寺院與信仰</a>。"} }
        ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency Chūbu Regional Forest Office (Kiso forest history, Kiso Hinoki reserve); Takayama City history; Nakatsugawa City; Gifu Prefecture; Japanese Wikipedia (Hida Shunkei, Gifu wagasa, Takayama festival).",
            ja:"出典：林野庁中部森林管理局（木曽の森の歴史、木曽ヒノキ備林）、高山市史、中津川市、岐阜県、日本語版ウィキペディア（飛騨春慶、岐阜和傘、高山祭）。",
            zh:"資料來源：林野廳中部森林管理局（木曾森林史、木曾扁柏備林）；高山市史；中津川市；岐阜縣；日文維基百科（飛驒春慶、岐阜和傘、高山祭）。" } }
      ]
    },
    { t:"section", id:"meiji",
      title:{ en:"Meiji to 1945", ja:"明治から1945年まで", zh:"從明治到 1945 年" }, jp:"近代",
      body:[
        { t:"timeline", items:[
          { year:"1868",
              title:{ en:"The end of the jinya", ja:"陣屋支配の終わり", zh:"陣屋統治告終" },
              jp:"明治維新",
              text:{
                en:"With the fall of the shogunate, 176 years of rule from the Takayama Jinya end. The building passes to the new government's local offices and continues in official use for another century before becoming a museum.",
                ja:"幕府の崩壊とともに、百七十六年に及んだ高山陣屋の支配が終わる。建物は新政府の地方官庁に引き継がれ、さらに百年近く官庁として使われたのち史跡として公開された。",
                zh:"隨著幕府垮台，高山陣屋長達 176 年的統治結束。建築由新政府的地方機關接收，又作為官署使用近百年，之後才作為史蹟對外開放。" } },
          { year:"1869",
              era:{ en:"Meiji 2", ja:"明治二年", zh:"明治二年" },
              title:{ en:"Domain forests become state forests", ja:"尾張藩の山、官林に", zh:"藩林收歸官有" },
              jp:"官林",
              text:{
                en:"With the return of the domains to the emperor, the Owari forests of Kiso and Ura-Kiso pass to the government. The villagers' customary rights to use the forest are not recognised, beginning decades of petitions.",
                ja:"版籍奉還により、木曽と裏木曽の尾張藩の山は政府のものとなる。村人の慣行的な山の利用権は認められず、数十年に及ぶ請願が始まる。",
                zh:"隨著版籍奉還，尾張藩在木曾與裏木曾的山林移交政府。村民利用山林的慣行權利未獲承認，由此展開長達數十年的請願。" } },
          { year:"1871", title:{en:"Gifu Prefecture formed",ja:"岐阜県の成立",zh:"岐阜縣成立"},
            text:{en:"The domains of Mino are merged into one prefecture. See <a href=\"names.html\">The Name “Gifu”</a>.",ja:"美濃の諸藩が一つの県にまとめられる。<a href=\"names.html\">「岐阜」という名</a>を参照。",zh:"美濃各藩合併為一縣。見<a href=\"names.html\">「岐阜」之名</a>。"} },
          { year:"1871–1876",
              title:{ en:"Hida becomes part of Gifu", ja:"飛騨、岐阜県へ", zh:"飛驒併入岐阜縣" },
              jp:"筑摩県",
              text:{
                en:"Takayama prefecture is abolished in 1871 and Hida joins Chikuma prefecture, centred in Matsumoto; in 1876 Hida's three districts are transferred to Gifu, joining the mountains of the north to the plains of Mino in the prefecture of today (see <a href=\"provinces.html\">Mino and Hida</a>).",
                ja:"一八七一年に高山県が廃され、飛騨は松本を中心とする筑摩県に入る。一八七六年、飛騨三郡は岐阜県に移され、北の山国と美濃の平野が今日の県として結ばれる（<a href=\"provinces.html\">美濃と飛騨</a>参照）。",
                zh:"1871 年高山縣廢除，飛驒併入以松本為中心的筑摩縣；1876 年飛驒三郡移轄岐阜縣，北方山國與美濃平原自此結合為今日的岐阜縣（見<a href=\"provinces.html\">美濃與飛驒</a>）。" } },
          { year:"1874", title:{en:"The first fossil paper",ja:"最初の化石の論文",zh:"第一篇化石論文"},
            text:{en:"Gümbel describes fusulinids from Kinshōzan, the first scientific paper on a Japanese fossil.",ja:"ギュンベルが金生山のフズリナを記載する。日本の化石についての最初の学術論文である。",zh:"居姆貝爾記載金生山的紡錘蟲，這是關於日本化石的第一篇學術論文。"} },
          { year:"1875–1879",
              title:{ en:"Fire and the Kusakabe house", ja:"大火と日下部家", zh:"大火與日下部家" },
              jp:"日下部家住宅",
              text:{
                en:"A great fire of 1875 destroys much of Takayama. The merchant house of the Kusakabe family is rebuilt in 1879 by the master carpenter Kawajiri Jisuke, its frame of massive posts and beams open to a high ceiling; it became an Important Cultural Property in 1966.",
                ja:"一八七五年の大火が高山の大半を焼く。日下部家の町家は一八七九年、棟梁川尻治助によって再建され、太い柱と梁の架構が高い吹抜けに現れる。一九六六年に重要文化財となった。",
                zh:"1875 年一場大火燒毀高山大半。日下部家商家於 1879 年由棟樑川尻治助重建，巨大的柱樑架構直抵高挑的挑空；1966 年列為重要文化財。" } },
          { year:"1876", title:{en:"Hida joins; swords banned",ja:"飛騨の編入、廃刀令",zh:"飛驒併入、廢刀令"},
            text:{en:"Hida becomes part of Gifu, and the ban on wearing swords turns the Seki smiths to knives, razors and scissors.",ja:"飛騨が岐阜県に加わる。廃刀令により関の鍛冶は包丁や剃刀や鋏へ向かう。",zh:"飛驒併入岐阜縣；廢刀令使關的刀匠轉而製作菜刀、剃刀與剪刀。"} },
          { year:"1878",
              era:{ en:"Meiji 11", ja:"明治十一年", zh:"明治十一年" },
              title:{ en:"An emperor sees Gifu lanterns", ja:"明治天皇の巡幸と岐阜提灯", zh:"明治天皇巡幸與岐阜燈籠" },
              jp:"岐阜提灯",
              text:{
                en:"The Meiji emperor's tour of the Tōkai and Hokuriku regions makes Gifu lanterns famous across the country. Gifu remains Japan's leading producer of paper lanterns.",
                ja:"明治天皇の東海・北陸巡幸によって、岐阜提灯の名が全国に広まる。岐阜はいまも提灯の最大の産地である。",
                zh:"明治天皇巡幸東海與北陸，使岐阜燈籠聲名遠播全國。岐阜至今仍是日本最大的燈籠產地。" } },
          { year:"1879", title:{en:"The Kusakabe house",ja:"日下部家住宅",zh:"日下部家住宅"},
            text:{en:"The Takayama merchant house is rebuilt after a fire by Kawajiri Jisuke. See <a href=\"takumi.html\">The Hida Takumi</a>.",ja:"高山の商家が大火のあと川尻治助の手で建て直される。<a href=\"takumi.html\">飛騨の匠</a>を参照。",zh:"高山的商家在火災後由川尻治助重建。見<a href=\"takumi.html\">飛驒的匠人</a>。"} },
          { year:"1883", title:{en:"The Gifu butterfly",ja:"ギフチョウ",zh:"岐阜蝶"},
            text:{en:"Nawa Yasushi collects the swallowtail he names the Gifu butterfly. See <a href=\"wildlife.html\">Living Things</a>.",ja:"名和靖がのちにギフチョウと名づけるアゲハを採集する。<a href=\"wildlife.html\">生きもの</a>を参照。",zh:"名和靖採集到他命名為岐阜蝶的鳳蝶。見<a href=\"wildlife.html\">生物</a>。"} },
          { year:"1887–1912", title:{en:"The three rivers separated",ja:"木曽三川分流工事",zh:"木曾三川分流工程"},
            text:{en:"Under the Dutch engineer Johannis de Rijke the Kiso, Nagara and Ibi are given separate beds.",ja:"オランダ人技師デ・レイケのもとで、木曽川・長良川・揖斐川がそれぞれの川筋に分けられる。",zh:"在荷蘭工程師德・雷克指導下，木曾川、長良川與揖斐川被分入各自的河道。"} },
          { year:"1889", title:{en:"Gifu becomes a city",ja:"岐阜市の誕生",zh:"岐阜市誕生"},
            text:{en:"The town under Kinkazan becomes one of Japan's first cities.",ja:"金華山のふもとの町が、日本で最初の市の一つとなる。",zh:"金華山下的城鎮成為日本最早的市之一。"} },
          { year:"1889",
              era:{ en:"Meiji 22", ja:"明治二十二年", zh:"明治二十二年" },
              title:{ en:"Imperial forests", ja:"御料林", zh:"御料林" },
              jp:"御料林",
              text:{
                en:"The former Owari forests become imperial estate forests, and access for the villages is closed still further. The imperial forest bureau continues the log drives on the Kiso River.",
                ja:"旧尾張藩の山は御料林となり、村々の立ち入りはさらに狭められる。帝室林野の役所は木曽川の川狩りを続けた。",
                zh:"舊尾張藩山林改為皇室御料林，村民的出入更受限制。皇室林野機構持續在木曾川進行放流。" } },
          { year:"1890", title:{en:"Masu in Ōgaki",ja:"大垣の枡",zh:"大垣之枡"},
            text:{en:"A craftsman trained with a Nagoya cooper begins making masu in Ōgaki. See <a href=\"masu.html\">The Masu of Ōgaki</a>.",ja:"名古屋の桶屋で修業した職人が大垣で枡をつくり始める。<a href=\"masu.html\">大垣の枡</a>を参照。",zh:"一位在名古屋桶店學藝的職人，開始在大垣製作枡。見<a href=\"masu.html\">大垣的枡</a>。"} },
          { year:"1890",
              title:{ en:"Masu in Ōgaki", ja:"大垣の枡づくり", zh:"大垣的木枡" },
              jp:"大垣の枡",
              text:{
                en:"By the usual account, a carpenter returning from Nagoya brings masu making to Ōgaki. Using hinoki from Kiso and Tōnō, the town grows to make about four-fifths of Japan's wooden measuring boxes (see <a href=\"masu.html\">The Masu of Ōgaki</a>).",
                ja:"通説では、名古屋から戻った大工が大垣に枡づくりをもたらす。木曽や東濃のヒノキを使い、大垣はやがて日本の木枡の約八割をつくるまでになる（<a href=\"masu.html\">大垣の枡</a>参照）。",
                zh:"一般說法是，一位從名古屋返鄉的木匠將木枡製作帶到大垣。大垣使用木曾與東濃的扁柏，日後發展到生產全日本約八成的木枡（見<a href=\"masu.html\">大垣的枡</a>）。" } },
          { year:"1891", title:{en:"The Nōbi earthquake",ja:"濃尾地震",zh:"濃尾地震"},
            text:{en:"The largest inland earthquake in Japan's recorded history raises the Neodani fault scarp.",ja:"記録に残る日本最大の内陸地震が、根尾谷断層の崖をつくる。",zh:"日本有紀錄以來最大的內陸地震，造就了根尾谷斷層崖。"} },
          { year:"1891",
              era:{ en:"Meiji 24", ja:"明治二十四年", zh:"明治二十四年" },
              title:{ en:"The Nōbi earthquake", ja:"濃尾地震", zh:"濃尾地震" },
              jp:"濃尾地震",
              text:{
                en:"The largest inland earthquake in Japan's recorded history, centred in Gifu, destroys tens of thousands of houses and prompts the first modern Japanese research on earthquake-resistant construction. In the same year the lantern maker Ozeki is founded in Gifu.",
                ja:"岐阜を震源とする、記録に残る日本最大の内陸地震が数万戸を倒し、耐震構造をめぐる日本最初の近代的研究を促す。同じ年、岐阜で提灯の老舗オゼキが創業する。",
                zh:"以岐阜為震央、日本有紀錄以來最大的內陸地震，震毀數萬戶房屋，並促成日本首批關於耐震構造的近代研究。同年，燈籠老鋪 Ozeki 在岐阜創立。" } },
          { year:"1894",
              era:{ en:"Meiji 27", ja:"明治二十七年", zh:"明治二十七年" },
              title:{ en:"Kashimo Meijiza", ja:"かしも明治座", zh:"加子母明治座" },
              jp:"地歌舞伎",
              text:{
                en:"On 10 December the villagers of Kashimo open a kabuki playhouse built of their own hinoki, with a revolving stage and a hanamichi. Local amateur kabuki is still performed there each September (see <a href=\"culture.html\">Wood in Ritual &amp; Daily Life</a>).",
                ja:"十二月十日、加子母の村人が自分たちのヒノキで建てた芝居小屋を開く。廻り舞台と花道をそなえ、いまも毎年九月に地歌舞伎が上演される（<a href=\"culture.html\">儀礼と暮らしの木</a>参照）。",
                zh:"12 月 10 日，加子母村民以自家山林的扁柏建成的歌舞伎劇場開幕，設有旋轉舞台與花道。至今每年 9 月仍有地方業餘歌舞伎在此演出（見<a href=\"culture.html\">儀禮與日常中的木</a>）。" } },
          { year:"1897",
              era:{ en:"Meiji 30", ja:"明治三十年", zh:"明治三十年" },
              title:{ en:"The first Forest Act", ja:"最初の森林法", zh:"第一部森林法" },
              jp:"森林法",
              text:{
                en:"Enacted after decades of over-cutting and floods in early Meiji, the law creates protection forests to guard watersheds and slopes — the foundation of Japanese forest regulation (see <a href=\"policy.html\">Forest Law &amp; Policy</a>).",
                ja:"明治初期の数十年にわたる過伐と水害を受けて制定され、水源と斜面を守る保安林を設ける。日本の森林規制の土台である（<a href=\"policy.html\">森林の法と政策</a>参照）。",
                zh:"在明治初期數十年的過度砍伐與水患之後制定，設立保護水源與坡地的保安林——日本森林法規的基礎（見<a href=\"policy.html\">森林法規與政策</a>）。" } },
          { year:"1905",
              era:{ en:"Meiji 38", ja:"明治三十八年", zh:"明治三十八年" },
              title:{ en:"A settlement with Kiso", ja:"木曽山林の下賜金", zh:"與木曾的和解" },
              jp:"下賜金",
              text:{
                en:"After decades of petitions and disputes over the forests, the imperial household settles with the Kiso villages — by one account by paying ten thousand yen a year for twenty-four years.",
                ja:"山林をめぐる数十年の請願と争いののち、皇室は木曽の村々と決着をつける。一説には、年一万円を二十四年間支払うものだったという。",
                zh:"經過數十年圍繞山林的請願與爭議，皇室與木曾各村達成和解——據一說，是以每年支付一萬日圓、為期 24 年的方式。" } },
          { year:"1906–1909",
              title:{ en:"Shrine reserve forests", ja:"神宮備林", zh:"神宮備林" },
              jp:"神宮備林",
              text:{
                en:"Stands of large hinoki are set aside as reserves for the Ise rebuildings; in Ura-Kiso, the Denokōji reserve at Kashimo is designated in 1909. Some 18,000 large trees are marked, 2,690 of them around Akasawa on the Nagano side.",
                ja:"伊勢の遷宮のため、大きなヒノキの林が備林として取り置かれる。裏木曽では一九〇九年に加子母の出ノ小路備林が指定された。大木およそ一万八千本が選ばれ、そのうち二千六百九十本は長野側の赤沢周辺にあった。",
                zh:"為伊勢遷宮劃定大徑扁柏林作為備林；裏木曾的加子母出之小路備林於 1909 年指定。共選定約 1 萬 8 千株大樹，其中 2,690 株位於長野一側的赤澤一帶。" } },
          { year:"1907–1908",
              title:{ en:"The Yoshijima house", ja:"吉島家住宅", zh:"吉島家住宅" },
              jp:"西田伊三郎",
              text:{
                en:"The sake-brewing Yoshijima family rebuild their Takayama house, designed by the carpenter Nishida Isaburō, heir to a line of Hida carvers; its lattice of beams under a high atrium is one of the great interiors of Japanese timber building.",
                ja:"造り酒屋の吉島家が高山の住まいを建て直す。手がけたのは飛騨の彫工の系譜を継ぐ大工、西田伊三郎。高い吹抜けに組まれた梁の格子は、日本の木造建築を代表する内部空間の一つである。",
                zh:"釀酒世家吉島家重建其高山宅邸，由承襲飛驒雕工系譜的木匠西田伊三郎設計；高挑挑空下縱橫交錯的樑架，是日本木造建築最出色的室內空間之一。" } },
          { year:"1908", title:{en:"Kai",ja:"貝印",zh:"貝印"},
            text:{en:"A pocket-knife maker is founded at Seki that will grow into one of Japan's largest blade companies.",ja:"関でポケットナイフの製造所が生まれ、のちに日本最大級の刃物の会社となる。",zh:"關誕生了一家摺疊小刀製造商，日後成長為日本最大的刀具公司之一。"} },
          { year:"1910",
              era:{ en:"Meiji 43", ja:"明治四十三年", zh:"明治四十三年" },
              title:{ en:"Bentwood reaches Japan", ja:"日本の曲木工場", zh:"曲木傳入日本" },
              jp:"秋田木工",
              text:{
                en:"One of the first Japanese bentwood factories opens in Akita, applying the Viennese method of steaming and bending solid beech that Michael Thonet had perfected in the nineteenth century (see <a href=\"bentwood.html\">Bentwood</a>).",
                ja:"秋田に日本で最初期の曲木工場が開かれる。十九世紀にミヒャエル・トーネットが完成させた、ブナの無垢材を蒸して曲げるウィーンの技法を用いた（<a href=\"bentwood.html\">曲木</a>参照）。",
                zh:"日本最早的曲木工廠之一在秋田開業，採用十九世紀由米夏埃爾・索涅特完善、將山毛櫸實木蒸煮後彎曲的維也納工法（見<a href=\"bentwood.html\">曲木</a>）。" } },
          { year:"1911",
              era:{ en:"Meiji 44", ja:"明治四十四年", zh:"明治四十四年" },
              title:{ en:"Rails through Kiso", ja:"中央本線の全通", zh:"中央本線全線通車" },
              jp:"中央本線",
              text:{
                en:"The Chūō main line through the Kiso valley is completed; timber can now go to Nagoya by train instead of down the river (see <a href=\"timberrivers.html\">The Timber Rivers</a>).",
                ja:"木曽谷を通る中央本線が全通し、材木は川ではなく汽車で名古屋へ運べるようになる（<a href=\"timberrivers.html\">木を運んだ川</a>参照）。",
                zh:"穿越木曾谷的中央本線全線通車，木材從此可以改搭火車、而非順流運往名古屋（見<a href=\"timberrivers.html\">運木之河</a>）。" } },
          { year:"1914",
              era:{ en:"Taishō 3", ja:"大正三年", zh:"大正三年" },
              title:{ en:"Guitars in Nagoya", ja:"名古屋のギター", zh:"名古屋的吉他" },
              jp:"鈴木バイオリン",
              text:{
                en:"Suzuki Masakichi's violin factory in Nagoya, which had added mandolins in 1906, adds guitars to its catalogue — the beginning of the instrument trade from which the Gifu guitar makers would descend (see <a href=\"guitarindustry.html\">Japan's Guitar Industry</a>).",
                ja:"一九〇六年にマンドリンを加えていた名古屋の鈴木政吉のバイオリン工場が、ギターを製品に加える。岐阜のギター製作はこの楽器産業から枝分かれしていく（<a href=\"guitarindustry.html\">日本のギター産業</a>参照）。",
                zh:"名古屋鈴木政吉的小提琴工廠在 1906 年加入曼陀林之後，又將吉他列入產品目錄——岐阜的吉他製作日後正是從這個樂器產業分枝而出（見<a href=\"guitarindustry.html\">日本的吉他產業</a>）。" } },
          { year:"1916",
              era:{ en:"Taishō 5", ja:"大正五年", zh:"大正五年" },
              title:{ en:"Forest railways", ja:"森林鉄道", zh:"森林鐵道" },
              jp:"小川線",
              text:{
                en:"The first forest railway in Kiso opens, the start of a network of logging lines that will carry timber out of the valleys for half a century, until trucks and forest roads replace them in the 1960s and 1970s.",
                ja:"木曽で最初の森林鉄道が開通する。以後半世紀にわたり谷から材を運び出す運材網の始まりで、一九六〇年代から一九七〇年代にトラックと林道に置き換えられるまで続いた。",
                zh:"木曾第一條森林鐵道開通，此後半世紀間運材鐵路網把木材運出山谷，直到 1960 至 1970 年代才被卡車與林道取代。" } },
          { year:"1917", title:{en:"An airfield at Kakamigahara",ja:"各務原の飛行場",zh:"各務原機場"},
            text:{en:"The army opens an airfield on the plain; aircraft manufacturing follows.",ja:"陸軍が原野に飛行場を開き、航空機の製造が続く。",zh:"陸軍在原野上開設機場，隨後發展出飛機製造業。"} },
          { year:"1919", title:{en:"Nawa Insect Museum",ja:"名和昆虫博物館",zh:"名和昆蟲博物館"},
            text:{en:"Japan's oldest insect museum opens in Gifu Park.",ja:"日本最古の昆虫博物館が岐阜公園に開く。",zh:"日本最古老的昆蟲博物館在岐阜公園開館。"} },
          { year:"1920",
              era:{ en:"Taishō 9", ja:"大正九年", zh:"大正九年" },
              title:{ en:"Chūō Mokkō", ja:"中央木工の創業", zh:"中央木工創立" },
              jp:"飛騨産業",
              text:{
                en:"A company is founded in Takayama with capital of ¥30,000, twenty-four shareholders and six employees to make bentwood furniture from Hida beech, until then used mostly for charcoal and clogs. It will become Hida Sangyō (see <a href=\"furniture.html\">Hida Furniture</a>).",
                ja:"資本金三万円、株主二十四人、従業員六人で、飛騨のブナで曲木家具をつくる会社が高山に生まれる。ブナはそれまで主に炭や下駄にしか使われなかった。のちの飛騨産業である（<a href=\"furniture.html\">飛騨の家具</a>参照）。",
                zh:"一家資本額 3 萬日圓、股東 24 人、員工 6 人的公司在高山成立，以飛驒山毛櫸製作曲木家具——在此之前，山毛櫸多半只用來燒炭與做木屐。它日後成為飛驒產業（見<a href=\"furniture.html\">飛驒家具</a>）。" } },
          { year:"1920–1921",
              title:{ en:"Two years of failure", ja:"二年間の失敗", zh:"兩年的失敗" },
              jp:"曲木",
              text:{
                en:"The first bentwood chairs wrinkle on the inside of the bends and their lacquer peels. The makers learn by trial how to select, steam and dry the beech; by the next year they have sold some 2,636 pieces, most of them chairs.",
                ja:"最初の曲木椅子は曲げの内側にしわが寄り、塗装がはげた。つくり手は試行錯誤でブナの選び方、蒸し方、乾かし方を学び、翌年までに二千六百三十六点、その大半は椅子を売った。",
                zh:"最初的曲木椅在彎曲內側起皺、塗裝剝落。製作者從反覆試驗中學會如何挑選、蒸煮與乾燥山毛櫸；到了翌年已售出約 2,636 件產品，大多是椅子。" } },
          { year:"1922",
              era:{ en:"Taishō 11", ja:"大正十一年", zh:"大正十一年" },
              title:{ en:"A cherry protected", ja:"根尾谷淡墨桜", zh:"根尾谷淡墨櫻" },
              jp:"天然記念物",
              text:{
                en:"The Usuzumi cherry of the Neo valley in Motosu, reckoned about 1,500 years old, is designated a Natural Monument — one of the first great trees of Gifu to be protected by the state (see <a href=\"trees.html\">The Trees</a>).",
                ja:"本巣市根尾谷の淡墨桜、樹齢およそ千五百年とされる桜が天然記念物に指定される。国の保護を受けた岐阜の巨樹の最初期の一本である（<a href=\"trees.html\">樹種</a>参照）。",
                zh:"本巢市根尾谷的淡墨櫻，樹齡估計約 1,500 年，被指定為天然紀念物——岐阜最早受國家保護的巨木之一（見<a href=\"trees.html\">樹種</a>）。" } },
          { year:"1923",
              era:{ en:"Taishō 12", ja:"大正十二年", zh:"大正十二年" },
              title:{ en:"Hida Mokkō", ja:"飛騨木工株式会社", zh:"飛驒木工株式會社" },
              jp:"社名変更",
              text:{
                en:"The Takayama bentwood company is renamed Hida Mokkō and its capital raised to ¥100,000. Medals at national exhibitions follow in the mid-1920s.",
                ja:"高山の曲木会社は飛騨木工株式会社と改称し、資本金を十万円に増やす。一九二〇年代半ばには全国規模の博覧会で受賞が続く。",
                zh:"高山的曲木公司更名為飛驒木工株式會社，資本額增至 10 萬日圓。1920 年代中期接連在全國性博覽會獲獎。" } },
          { year:"1924",
              era:{ en:"Taishō 13", ja:"大正十三年", zh:"大正十三年" },
              title:{ en:"The Ōi Dam", ja:"大井ダム", zh:"大井水壩" },
              jp:"川狩りの終わり",
              text:{
                en:"Japan's first large dam built for hydroelectric power blocks the Kiso River between Ena and Nakatsugawa, ending the centuries-old log drives; the sacred timber for Ise, which had gone down the river to Ise Bay, now travels by land. The great cedar of Itoshiro is made a Natural Monument the same year.",
                ja:"水力発電のための日本最初の大ダムが恵那と中津川のあいだで木曽川をせき止め、数百年続いた川狩りが終わる。伊勢湾まで川を下っていた御神木は、以後陸路で運ばれる。同じ年、石徹白の大杉が天然記念物に指定された。",
                zh:"日本第一座大型水力發電水壩在惠那與中津川之間攔斷木曾川，延續數百年的放流就此終結；原本順流而下至伊勢灣的御神木，此後改走陸路。同年，石徹白大杉被指定為天然紀念物。" } },
          { year:"1929",
              era:{ en:"Shōwa 4", ja:"昭和四年", zh:"昭和四年" },
              title:{ en:"Segovia in Japan", ja:"セゴビア来日", zh:"塞哥維亞訪日" },
              jp:"クラシックギター",
              text:{
                en:"Andrés Segovia's first Japanese tour gives makers a Spanish concert guitar to hear, study and copy, and turns the classical guitar into a serious instrument in Japan (see <a href=\"luthiers.html\">The Luthiers</a>).",
                ja:"アンドレス・セゴビアの最初の来日公演は、日本の製作者にスペインの演奏会用ギターを聴き、調べ、写す機会を与え、クラシックギターを日本で本格的な楽器にした（<a href=\"luthiers.html\">個人製作家</a>参照）。",
                zh:"安德烈斯・塞哥維亞首次訪日巡演，讓日本製作者得以聆聽、研究並仿製西班牙音樂會吉他，也使古典吉他在日本成為正式的樂器（見<a href=\"luthiers.html\">獨立製琴師</a>）。" } },
          { year:"1930", title:{en:"The Shino shard",ja:"志野の陶片",zh:"志野陶片"},
            text:{en:"Arakawa Toyozō finds a Shino shard at Mutabora in Kani, proving that Shino was made in Mino. See <a href=\"minoyaki.html\">Mino Ware</a>.",ja:"荒川豊蔵が可児の牟田洞で志野の陶片を見つけ、志野が美濃で焼かれたことを証す。<a href=\"minoyaki.html\">美濃焼</a>を参照。",zh:"荒川豐藏在可兒的牟田洞發現志野陶片，證明志野是在美濃燒製的。見<a href=\"minoyaki.html\">美濃燒</a>。"} },
          { year:"1931",
              era:{ en:"Shōwa 6", ja:"昭和六年", zh:"昭和六年" },
              title:{ en:"The triangle chair", ja:"三角椅子", zh:"三角椅" },
              jp:"意匠登録",
              text:{
                en:"Hida Mokkō registers the design of a bentwood chair with a triangular seat, one of its early successes.",
                ja:"飛騨木工が三角形の座をもつ曲木椅子の意匠を登録する。初期の成功作の一つである。",
                zh:"飛驒木工為一款三角形座面的曲木椅登記設計，這是其早期的成功作品之一。" } },
          { year:"1933", title:{en:"A wooden keep at Gujō",ja:"郡上八幡城の木造再建",zh:"郡上八幡城木造重建"},
            text:{en:"The oldest wooden reconstruction of a castle keep in Japan is built at Gujō Hachiman.",ja:"郡上八幡に、日本最古の木造再建天守が建つ。",zh:"郡上八幡建起日本最古老的木造重建天守。"} },
          { year:"1934", title:{en:"The Takayama Line",ja:"高山本線の全通",zh:"高山本線全線通車"},
            text:{en:"The railway through the Hida gorges is completed. See <a href=\"roads.html\">The Nakasendō &amp; Old Roads</a>.",ja:"飛騨の峡谷を抜ける鉄道が全通する。<a href=\"roads.html\">中山道と街道</a>を参照。",zh:"穿越飛驒峽谷的鐵路全線通車。見<a href=\"roads.html\">中山道與古道</a>。"} },
          { year:"1934",
              era:{ en:"Shōwa 9", ja:"昭和九年", zh:"昭和九年" },
              title:{ en:"A giant hinoki falls", ja:"初代大ヒノキの倒伏", zh:"初代大扁柏倒下" },
              jp:"出ノ小路",
              text:{
                en:"A typhoon brings down the first great hinoki of the Denokōji reserve, about 950 years old, 213 centimetres in diameter at breast height and 36 metres tall. A successor about a thousand years old was found in 1955.",
                ja:"台風が出ノ小路備林の初代大ヒノキを倒す。樹齢約九百五十年、胸高直径213cm、高さ36mであった。約千年の二代目は一九五五年に見つかった。",
                zh:"颱風吹倒了出之小路備林的初代大扁柏：樹齡約 950 年，胸高直徑 213 公分，樹高 36 公尺。樹齡約千年的第二代大扁柏於 1955 年被發現。" } },
          { year:"1935",
              era:{ en:"Shōwa 10", ja:"昭和十年", zh:"昭和十年" },
              title:{ en:"An American buyer, a Nagoya workshop", ja:"米国の買い手と矢入楽器", zh:"美國買家與矢入樂器" },
              jp:"矢入楽器製作所",
              text:{
                en:"The American buyer Stanley Slotkin visits Takayama and exports of Hida chairs to the United States begin. In Nagoya, Yairi Giichi, who had worked at the Suzuki Violin company, founds his own instrument workshop (see <a href=\"yairi.html\">Yairi</a>).",
                ja:"米国の買い付け人スタンレー・スロトキンが高山を訪れ、飛騨の椅子の対米輸出が始まる。名古屋では、鈴木バイオリンで働いていた矢入儀市が自分の楽器工房を開く（<a href=\"yairi.html\">ヤイリ</a>参照）。",
                zh:"美國買家史丹利・史洛特金造訪高山，飛驒椅子開始外銷美國。名古屋方面，曾任職鈴木小提琴的矢入儀市創立了自己的樂器工坊（見<a href=\"yairi.html\">Yairi</a>）。" } },
          { year:"1936",
              era:{ en:"Shōwa 11", ja:"昭和十一年", zh:"昭和十一年" },
              title:{ en:"Suzuki to Ena; hinokitiol", ja:"鈴木の恵那移転とヒノキチオール", zh:"鈴木遷往惠那；檜木醇" },
              jp:"ヒノキチオール",
              text:{
                en:"Suzuki Violin moves its head office to Ena in Gifu, returning to Nagoya after the war. In Taipei, the chemist Nozoe Tetsuo isolates hinokitiol from the oil of Taiwan hinoki (see <a href=\"chemistry.html\">Chemistry &amp; Scent</a>).",
                ja:"鈴木バイオリンが本社を岐阜の恵那へ移す（戦後に名古屋へ戻る）。台北では化学者野副鉄男が台湾ヒノキの油からヒノキチオールを単離する（<a href=\"chemistry.html\">化学と香り</a>参照）。",
                zh:"鈴木小提琴將總公司遷至岐阜的惠那，戰後再遷回名古屋。台北方面，化學家野副鐵男從台灣扁柏油中分離出檜木醇（見<a href=\"chemistry.html\">化學與香氣</a>）。" } },
          { year:"1943–1945",
              title:{ en:"Chairs to aircraft", ja:"椅子から航空機へ", zh:"從椅子到飛機" },
              jp:"戦時",
              text:{
                en:"Furniture gives way to wooden aircraft parts; Hida Mokkō is merged into an aircraft company and re-emerges in 1945 as Hida Sangyō. The predecessor of Kashiwa Mokkō is founded in Takayama in 1943, the beginning of a cluster.",
                ja:"家具は木製の航空機部品に取って代わられ、飛騨木工は航空機会社に統合され、一九四五年に飛騨産業として再出発する。一九四三年には柏木工の前身が高山に生まれ、産地の集積が始まる。",
                zh:"家具生產讓位給木製飛機零件；飛驒木工被併入飛機公司，1945 年以飛驒產業之名重新出發。柏木工的前身於 1943 年在高山成立，產業聚落由此開始。" } },
          { year:"1945", title:{en:"Air raids",ja:"空襲",zh:"空襲"},
            text:{en:"Gifu city is burned on the night of 9 July; Ōgaki and the Kakamigahara aircraft works are also bombed. See <a href=\"modern.html\">Meiji to Now</a>.",ja:"七月九日の夜、岐阜市が焼かれる。大垣と各務原の航空機工場も爆撃を受ける。<a href=\"modern.html\">近代から現代へ</a>を参照。",zh:"七月九日夜，岐阜市遭焚毀；大垣與各務原的飛機工廠也遭轟炸。見<a href=\"modern.html\">從明治到現在</a>。"} },
          { year:"1945",
              era:{ en:"Shōwa 20", ja:"昭和二十年", zh:"昭和二十年" },
              title:{ en:"Yairi moves to Kani", ja:"矢入、可児へ", zh:"矢入遷往可兒" },
              jp:"疎開",
              text:{
                en:"To escape the bombing of Nagoya, the Yairi workshop moves to Imawatari, now part of Kani, and stays; through the war and post-war years it survives by making other wooden goods.",
                ja:"名古屋の空襲を逃れ、矢入の工房は今渡（いまの可児市）に移り、そのまま根を下ろす。戦中戦後は楽器以外の木製品をつくってしのいだ。",
                zh:"為躲避名古屋的空襲，矢入工坊遷往今渡（今屬可兒市）並就此落地生根；戰時與戰後以製作其他木製品維生。" } }
        ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency Chūbu office; Hida Sangyō and the Hida furniture federation (company histories); Suzuki Violin and Yairi Guitar histories; Masuza (Ōgaki masu); Ozeki; Gifu Prefecture; Takayama City.",
            ja:"出典：林野庁中部森林管理局、飛騨産業と飛騨木工連合会（沿革）、鈴木バイオリンとヤイリギターの沿革、枡座（大垣の枡）、オゼキ、岐阜県、高山市。",
            zh:"資料來源：林野廳中部森林管理局；飛驒產業與飛驒木工聯合會（沿革）；鈴木小提琴與 Yairi Guitar 沿革；枡座（大垣木枡）；Ozeki；岐阜縣；高山市。" } }
      ]
    },
    { t:"section", id:"postwar",
      title:{ en:"After the war", ja:"戦後", zh:"戰後" }, jp:"1945–2000",
      body:[
        { t:"timeline", items:[
          { year:"1946–1947",
              title:{ en:"New firms, new schools", ja:"新しい会社と学校", zh:"新公司與新學校" },
              jp:"日進木工",
              text:{
                en:"Nissin Mokkō is founded in Takayama in 1946, and so is a joinery training centre that is the root of today's Gifu Wood Craft Art School. Hida Sangyō makes furniture for the Occupation forces in 1946–1947, learning Western standards of size and finish.",
                ja:"一九四六年、高山に日進木工が生まれ、同じ年に今日の岐阜県立木工芸術スクールの源となる建具の補導所が開かれる。飛騨産業は一九四六〜一九四七年に進駐軍向けの家具をつくり、西洋の寸法と仕上げの基準を学んだ。",
                zh:"1946 年，日進木工在高山創立，同年也成立了今日岐阜縣立木工藝術學校前身的門窗技藝訓練所。飛驒產業在 1946–1947 年為佔領軍製作家具，學到了西方的尺寸與塗裝標準。" } },
          { year:"1947",
              era:{ en:"Shōwa 22", ja:"昭和二十二年", zh:"昭和二十二年" },
              title:{ en:"National forests unified", ja:"林政統一", zh:"國有林統一" },
              jp:"国有林",
              text:{
                en:"Imperial and state forests are merged into a single national forest under the Forestry Agency. The shrine reserve designation lapses, but the Ura-Kiso stands continue to be managed for Ise (see <a href=\"fivetrees.html\">The Five Trees of Kiso</a>).",
                ja:"御料林と国有林が林野庁のもとで一つの国有林に統合される。神宮備林の指定は消えたが、裏木曽の林はその後も伊勢のために守られた（<a href=\"fivetrees.html\">木曽五木</a>参照）。",
                zh:"皇室御料林與國有林在林野廳之下合併為統一的國有林。神宮備林的指定隨之失效，但裏木曾林分仍持續為伊勢而經營（見<a href=\"fivetrees.html\">木曾五木</a>）。" } },
          { year:"1949–1950",
              title:{ en:"Chairs for America", ja:"アメリカへの椅子", zh:"銷往美國的椅子" },
              jp:"輸出",
              text:{
                en:"Hida Sangyō's exports to the United States resume in 1949, and in 1950 Stanley Slotkin takes a majority holding through a trading company. For the next two decades a large part of the Takayama output crosses the Pacific.",
                ja:"一九四九年に飛騨産業の対米輸出が再開し、一九五〇年にはスタンレー・スロトキンが商社を通じて過半数の株を握る。以後二十年あまり、高山の生産の大きな部分が太平洋を渡った。",
                zh:"飛驒產業對美出口於 1949 年恢復，1950 年史丹利・史洛特金透過貿易公司取得多數股權。此後二十餘年，高山產量的一大部分都橫渡太平洋。" } },
          { year:"1950",
              era:{ en:"Shōwa 25", ja:"昭和二十五年", zh:"昭和二十五年" },
              title:{ en:"A masu maker and a makers' association", ja:"大橋量器と高山木工協会", zh:"大橋量器與高山木工協會" },
              jp:"大橋量器",
              text:{
                en:"In Ōgaki, Ōhashi Mune founds the masu maker Ōhashi Ryōki, a rare woman founder in a craft industry; it is now the largest of the town's makers. In Takayama the furniture firms form an association, forerunner of the Hida woodworking federation.",
                ja:"大垣では大橋ムネが枡の製造元、大橋量器を創業する。工芸の世界では珍しい女性の創業者で、いまは大垣最大の枡屋である。高山では家具会社が協会をつくり、これがのちの飛騨木工連合会の前身となる。",
                zh:"大垣的大橋ムネ創立木枡製造商大橋量器，是工藝產業中少見的女性創業者；該公司如今是大垣規模最大的木枡業者。高山的家具公司則組成協會，成為日後飛驒木工聯合會的前身。" } },
          { year:"1950s–1970s",
              title:{ en:"The great planting", ja:"拡大造林", zh:"擴大造林" },
              jp:"拡大造林",
              text:{
                en:"State subsidies and loans encourage owners to replace broadleaf coppice and grassland with sugi and hinoki. Most of Gifu's planted forest dates from the mid-1950s to the early 1970s; in 2020 its largest age class was 56 to 60 years (see <a href=\"forests.html\">Gifu's Forests</a>).",
                ja:"国の補助と融資に後押しされ、所有者は広葉樹の薪炭林や草地をスギ・ヒノキに植え替えた。岐阜の人工林の大半は一九五〇年代半ばから一九七〇年代初めに植えられ、二〇二〇年には五十六〜六十年生が最も多かった（<a href=\"forests.html\">岐阜の森林</a>参照）。",
                zh:"在國家補助與貸款鼓勵下，林主把闊葉樹薪炭林與草地改植柳杉與扁柏。岐阜的人工林大多種於 1950 年代中期至 1970 年代初期；2020 年時，面積最大的齡級為 56 至 60 年生（見<a href=\"forests.html\">岐阜的森林</a>）。" } },
          { year:"1951",
              era:{ en:"Shōwa 26", ja:"昭和二十六年", zh:"昭和二十六年" },
              title:{ en:"A new Forest Act, and AKARI", ja:"新しい森林法とAKARI", zh:"新森林法與 AKARI" },
              jp:"森林計画制度",
              text:{
                en:"The new Forest Act establishes the forest planning system and the forest owners' cooperatives that still govern Japanese forestry. Isamu Noguchi visits Gifu in the cormorant-fishing season and begins the AKARI lamps with the lantern maker Ozeki. Yairi Kazuo joins his father's firm, and the Kiso branch of Suzuki is reorganised as a company; both would later turn to guitars.",
                ja:"新しい森林法が、いまも日本の林業を方向づける森林計画制度と森林組合を定める。鵜飼の季節に岐阜を訪れたイサム・ノグチは、提灯のオゼキとともにAKARIをつくり始める。この年、矢入一男が父の会社に入り、鈴木の木曽の流れは会社に改組される。どちらものちにギターへ向かう。",
                zh:"新《森林法》確立了至今仍主導日本林業的森林計畫制度與森林組合。野口勇在鵜飼季節造訪岐阜，並與燈籠商 Ozeki 開始製作 AKARI 燈具。同年矢入一男加入父親的公司，鈴木的木曾一支也改組為公司；兩者日後都轉向吉他。" } },
          { year:"1955", title:{en:"Living National Treasure",ja:"人間国宝",zh:"人間國寶"},
            text:{en:"Arakawa Toyozō is among the first potters to be named, for Shino and Seto-guro.",ja:"荒川豊蔵が志野と瀬戸黒で、最初の人間国宝の陶芸家の一人となる。",zh:"荒川豐藏以志野與瀨戶黑，成為首批人間國寶陶藝家之一。"} },
          { year:"1955",
              era:{ en:"Shōwa 30", ja:"昭和三十年", zh:"昭和三十年" },
              title:{ en:"A thousand-year hinoki", ja:"二代目大ヒノキ", zh:"千年大扁柏" },
              jp:"加子母",
              text:{
                en:"The second great hinoki of Kashimo — about a thousand years old, 154 centimetres across and 26 metres tall — is found in the reserve. The same year Yairi makes xylophones for schools, and Hida Sangyō's chairs appear in the household magazine Kurashi no Techō.",
                ja:"加子母の備林で、二代目の大ヒノキ——樹齢約千年、直径154cm、高さ26m——が見つかる。同じ年、矢入は学校用の木琴をつくり、飛騨産業の椅子は雑誌『暮しの手帖』に取り上げられる。",
                zh:"加子母備林中發現第二代大扁柏——樹齡約千年、直徑 154 公分、高 26 公尺。同年，矢入為學校製作木琴，飛驒產業的椅子則登上生活雜誌《生活手帖》。" } },
          { year:"1956", title:{en:"Gifu Castle rebuilt",ja:"岐阜城の再建",zh:"岐阜城重建"},
            text:{en:"A reconstruction of the keep is built on Kinkazan.",ja:"金華山に天守が再建される。",zh:"金華山上重建天守。"} },
          { year:"1956",
              era:{ en:"Shōwa 31", ja:"昭和三十一年", zh:"昭和三十一年" },
              title:{ en:"A builder in Kashimo", ja:"加子母の工務店", zh:"加子母的營造商" },
              jp:"中島工務店",
              text:{
                en:"A construction company is founded in Kashimo that will build houses, public buildings, shrines and temples from local Tōnō hinoki, later diversifying into precut and farming to keep jobs in the depopulating village (see <a href=\"building.html\">Building in Wood</a>).",
                ja:"加子母に工務店が生まれる。地元の東濃ひのきで住宅、公共建築、社寺を建て、のちには過疎の進む村で仕事を守るためにプレカットや農業にも手を広げた（<a href=\"building.html\">木で建てる</a>参照）。",
                zh:"一家營造公司在加子母成立，以當地東濃扁柏興建住宅、公共建築與寺社，後來為了在人口外流的村子裡保住工作機會，又拓展到預切加工與農業（見<a href=\"building.html\">以木建造</a>）。" } },
          { year:"1957–1958",
              title:{ en:"A cedar and a sutra hall", ja:"石徹白の大杉と安国寺経蔵", zh:"石徹白大杉與安國寺經藏" },
              jp:"特別天然記念物・国宝",
              text:{
                en:"The great cedar of Itoshiro, over 1,800 years old by estimate, becomes a Special Natural Monument in 1957, a year before its district moves from Fukui to Gifu; the Ankokuji sutra repository in Takayama becomes a National Treasure in 1958.",
                ja:"推定樹齢千八百年を超える石徹白の大杉が一九五七年に特別天然記念物となり、翌一九五八年に石徹白は福井県から岐阜県へ移る。同じ一九五八年、高山の安国寺経蔵が国宝に指定される。",
                zh:"樹齡估計超過 1,800 年的石徹白大杉於 1957 年列為特別天然紀念物，翌年 1958 年該地區由福井縣改隸岐阜縣；同年，高山安國寺經藏被指定為國寶。" } },
          { year:"1959",
              era:{ en:"Shōwa 34", ja:"昭和三十四年", zh:"昭和三十四年" },
              title:{ en:"A typhoon and a guitar maker", ja:"伊勢湾台風とタカミネ", zh:"伊勢灣颱風與 Takamine" },
              jp:"大曽根楽器製作所",
              text:{
                en:"In September the Ise Bay Typhoon devastates the Nagoya area. An instrument maker displaced by it moves to his wife's home town of Sakashita, now part of Nakatsugawa, where woodworkers are easy to find, and in December founds the workshop that becomes Takamine (see <a href=\"takamine.html\">Takamine</a>).",
                ja:"九月、伊勢湾台風が名古屋一帯を襲う。被災した楽器職人が、木工職人を集めやすい妻の郷里、坂下（いまの中津川市）へ移り、十二月にのちのタカミネとなる工房を創業する（<a href=\"takamine.html\">タカミネ</a>参照）。",
                zh:"9 月，伊勢灣颱風重創名古屋一帶。一位因災離家的樂器職人遷往妻子的故鄉坂下（今屬中津川市）——當地木工好找——並於 12 月創立了日後成為 Takamine 的工坊（見<a href=\"takamine.html\">Takamine</a>）。" } },
          { year:"1960", title:{en:"The Shōkawa cherries",ja:"荘川桜",zh:"莊川櫻"},
            text:{en:"Two great cherry trees are lifted above the rising waters of the Miboro Dam. See <a href=\"rivers.html\">Rivers &amp; Water</a>.",ja:"御母衣ダムの湛水を前に、二本の大桜が水面の上へ移される。<a href=\"rivers.html\">川と水</a>を参照。",zh:"兩棵大櫻樹在御母衣水壩蓄水前被移到水位之上。見<a href=\"rivers.html\">河川與水</a>。"} },
          { year:"1960",
              era:{ en:"Shōwa 35", ja:"昭和三十五年", zh:"昭和三十五年" },
              title:{ en:"Takayama's floats protected", ja:"高山祭屋台の指定", zh:"高山祭屋台獲指定" },
              jp:"重要有形民俗文化財",
              text:{
                en:"On 9 June the twenty-three floats of the Takayama festivals are designated an Important Tangible Folk Cultural Property — the carpentry, carving, lacquer and metalwork of two centuries recognised as a single inheritance (see <a href=\"floats.html\">Festival Floats</a>).",
                ja:"六月九日、高山祭の屋台二十三台が重要有形民俗文化財に指定される。二百年にわたる大工、彫刻、漆、金工の仕事が一つの遺産として認められた（<a href=\"floats.html\">祭屋台</a>参照）。",
                zh:"6 月 9 日，高山祭的 23 座屋台被指定為重要有形民俗文化財——兩百年來的木作、雕刻、漆藝與金工被視為一項整體遺產（見<a href=\"floats.html\">祭典屋台</a>）。" } },
          { year:"1960s",
              title:{ en:"Imports liberalised", ja:"木材輸入の自由化", zh:"木材進口自由化" },
              jp:"輸入自由化",
              text:{
                en:"As the economy grows and housing demand soars, imports of logs and sawn timber are liberalised in stages. Cheaper and more uniform foreign wood begins to displace domestic timber, and by the end of the 1960s imports supply more than half of Japan's demand (see <a href=\"trade.html\">Trade &amp; Self-Sufficiency</a>).",
                ja:"経済成長と住宅需要の急増のなか、丸太と製材の輸入が段階的に自由化される。安く均質な外材が国産材を押しのけはじめ、一九六〇年代の終わりには需要の半分以上を輸入材がまかなうようになった（<a href=\"trade.html\">貿易と自給</a>参照）。",
                zh:"在經濟成長與住宅需求暴增之中，原木與製材的進口逐步自由化。更便宜、品質更均一的外國木材開始取代國產材，到了 1960 年代末，進口材已供應日本一半以上的需求（見<a href=\"trade.html\">貿易與自給</a>）。" } },
          { year:"1962",
              era:{ en:"Shōwa 37", ja:"昭和三十七年", zh:"昭和三十七年" },
              title:{ en:"Takamine; Yairi in America", ja:"高峰楽器と矢入の渡米", zh:"高峰樂器與矢入赴美" },
              jp:"高峰山",
              text:{
                en:"In May the Sakashita workshop is renamed after Mount Takamine, the peak behind the town. Yairi Kazuo travels to the United States to study how steel-string guitars are built there.",
                ja:"五月、坂下の工房は町の背後にそびえる高峰山にちなんで高峰楽器製作所と改称する。矢入一男は、アメリカでスチール弦ギターのつくり方を学ぶために渡米する。",
                zh:"5 月，坂下的工坊以小鎮背後的高峰山為名，更名為高峰樂器製作所。矢入一男赴美學習當地如何製作鋼弦吉他。" } },
          { year:"1964", title:{en:"Shinkansen and expressway",ja:"新幹線と名神高速",zh:"新幹線與名神高速"},
            text:{en:"The Tōkaidō Shinkansen and the Meishin Expressway cross the plain at Sekigahara.",ja:"東海道新幹線と名神高速道路が関ケ原で平野を横切る。",zh:"東海道新幹線與名神高速公路在關原穿越平原。"} },
          { year:"1964",
              era:{ en:"Shōwa 39", ja:"昭和三十九年", zh:"昭和三十九年" },
              title:{ en:"The Forestry Basic Act", ja:"林業基本法", zh:"林業基本法" },
              jp:"林業基本法",
              text:{
                en:"A basic law sets out to raise the productivity of forestry and the incomes of those who work in it. It will be replaced in 2001 by a law that puts the many functions of the forest before timber production (see <a href=\"policy.html\">Forest Law &amp; Policy</a>).",
                ja:"林業の生産性と林業に従事する人の所得を高めることをめざす基本法が定められる。二〇〇一年には、木材生産よりも森林の多面的機能を前に置く法律に置き換えられる（<a href=\"policy.html\">森林の法と政策</a>参照）。",
                zh:"一部基本法以提高林業生產力與林業從業者所得為目標。它將在 2001 年被一部把森林多元功能置於木材生產之前的法律取代（見<a href=\"policy.html\">森林法規與政策</a>）。" } },
          { year:"1965",
              era:{ en:"Shōwa 40", ja:"昭和四十年", zh:"昭和四十年" },
              title:{ en:"Two companies incorporate", ja:"二つの会社の法人化", zh:"兩家公司改組" },
              jp:"ヤイリギター",
              text:{
                en:"The Yairi workshop is reorganised as Yairi Guitar, and in September the Takamine workshop becomes a joint-stock company.",
                ja:"矢入の工房は株式会社ヤイリギターに改組され、九月にはタカミネの工房も株式会社となる。",
                zh:"矢入工坊改組為株式會社 Yairi Guitar，9 月 Takamine 工坊也改制為股份有限公司。" } },
          { year:"1966",
              era:{ en:"Shōwa 41", ja:"昭和四十一年", zh:"昭和四十一年" },
              title:{ en:"Houses and chairs recognised", ja:"町家と椅子の評価", zh:"町家與椅子獲肯定" },
              jp:"重要文化財",
              text:{
                en:"On 5 December the Kusakabe and Yoshijima houses in Takayama are designated Important Cultural Properties. Hida Sangyō's Montblanc chair (No. 725) and Eiger (No. 713) win design awards, the second a Good Design award.",
                ja:"十二月五日、高山の日下部家住宅と吉島家住宅が重要文化財に指定される。飛騨産業のモンブラン（No.725）とアイガー（No.713）がデザイン賞を受け、後者はグッドデザイン賞である。",
                zh:"12 月 5 日，高山的日下部家住宅與吉島家住宅被指定為重要文化財。飛驒產業的「白朗峰」椅（No.725）與「艾格峰」椅（No.713）獲得設計獎，後者為優良設計獎。" } },
          { year:"1968",
              era:{ en:"Shōwa 43", ja:"昭和四十三年", zh:"昭和四十三年" },
              title:{ en:"Takamine looks to America", ja:"タカミネの対米展開", zh:"Takamine 進軍美國" },
              jp:"平出益郎",
              text:{
                en:"Takamine, with about sixty employees making classical guitars and mandolins, begins, by some accounts in this year and by others in the early 1970s, a partnership with an American distributor that lasted until 2015; Mass Hirade joins and later leads the company. In Takayama a fire destroys some 800 tsubo of Hida Sangyō's factory.",
                ja:"クラシックギターとマンドリンをつくり従業員約六十人のタカミネが、米国の販売会社との提携を始める（この年とする資料と、一九七〇年代初めとする資料がある）。この提携は二〇一五年まで続いた。平出益郎が入社し、のちに会社を率いる。高山では飛騨産業の工場約八百坪が火災で失われる。",
                zh:"員工約 60 人、生產古典吉他與曼陀林的 Takamine 開始與美國經銷商合作（有資料記為該年，也有記為 1970 年代初），這段合作一直延續到 2015 年；平出益郎（Mass Hirade）加入並在日後領導公司。高山方面，一場大火燒毀飛驒產業工廠約 800 坪。" } },
          { year:"1969",
              era:{ en:"Shōwa 44", ja:"昭和四十四年", zh:"昭和四十四年" },
              title:{ en:"Paper, a workshop, a forest", ja:"本美濃紙、杣工房、赤沢", zh:"本美濃紙、杣工房、赤澤" },
              jp:"重要無形文化財",
              text:{
                en:"On 15 April Hon-Minoshi, the purest Mino paper, is designated an Important Intangible Cultural Property. Hayakawa Kennosuke founds his workshop, Sōma Kōbō, in Tsukechi. Across the border, the old hinoki forest of Akasawa becomes Japan's first natural recreation forest.",
                ja:"四月十五日、最も純粋な美濃紙である本美濃紙が重要無形文化財に指定される。早川謙之輔が付知に杣工房を開く。県境の向こうでは、赤沢のヒノキの天然林が日本初の自然休養林となる。",
                zh:"4 月 15 日，最純正的美濃紙「本美濃紙」被指定為重要無形文化財。早川謙之輔在付知創立杣工房。縣界另一側，赤澤的扁柏天然林成為日本第一座自然休養林。" } },
          { year:"1970",
              era:{ en:"Shōwa 45", ja:"昭和四十五年", zh:"昭和四十五年" },
              title:{ en:"Alvarez Yairi", ja:"アルバレス・ヤイリ", zh:"Alvarez Yairi" },
              jp:"矢入一男",
              text:{
                en:"Yairi Kazuo becomes president; an agreement with an American distributor sells Yairi guitars in the United States as Alvarez Yairi, and the company moves to its present site in Kani (see <a href=\"yairi.html\">Yairi</a>).",
                ja:"矢入一男が社長となる。米国の販売会社との契約でヤイリのギターは「アルバレス・ヤイリ」として米国で売られ、会社は可児の現在地へ移る（<a href=\"yairi.html\">ヤイリ</a>参照）。",
                zh:"矢入一男出任社長；透過與美國經銷商的合約，Yairi 吉他以「Alvarez Yairi」之名在美國銷售，公司也遷至可兒的現址（見<a href=\"yairi.html\">Yairi</a>）。" } },
          { year:"1971", title:{en:"Sister prefectures",ja:"姉妹県",zh:"姐妹縣"},
            text:{en:"Gifu and Kagoshima become sister prefectures in memory of the Hōreki works.",ja:"宝暦治水の縁で、岐阜県と鹿児島県が姉妹県となる。",zh:"因寶曆治水之緣，岐阜縣與鹿兒島縣結為姐妹縣。"} },
          { year:"1971",
              era:{ en:"Shōwa 46", ja:"昭和四十六年", zh:"昭和四十六年" },
              title:{ en:"The Hida Folk Village", ja:"飛騨の里", zh:"飛驒之里" },
              jp:"飛騨民俗村",
              text:{
                en:"An open-air museum of relocated farmhouses opens above Takayama, building on a folk museum of 1959. Its thirty or so buildings, among them gasshō houses, are a textbook of Hida carpentry (see <a href=\"visiting.html\">Visiting Gifu</a>).",
                ja:"一九五九年の飛騨民俗館を土台に、移築した民家の野外博物館が高山の丘に開かれる。合掌造を含む約三十棟の建物は、飛騨の大工仕事の教科書である（<a href=\"visiting.html\">岐阜を訪ねる</a>参照）。",
                zh:"以 1959 年的飛驒民俗館為基礎，一座由遷建民家構成的露天博物館在高山的山丘上開幕。包括合掌造在內的約三十棟建築，堪稱飛驒木作的教科書（見<a href=\"visiting.html\">造訪岐阜</a>）。" } },
          { year:"1972",
              era:{ en:"Shōwa 47", ja:"昭和四十七年", zh:"昭和四十七年" },
              title:{ en:"A lifetime guarantee", ja:"生涯保証", zh:"終身保固" },
              jp:"ヤイリ",
              text:{
                en:"Yairi begins guaranteeing its guitars for as long as the instrument exists, for the original owner. The Kashimo Meijiza is designated a prefectural Important Tangible Folk Cultural Property.",
                ja:"ヤイリは、最初の持ち主に対し、ギターが存在するかぎり保証する制度を始める。かしも明治座が県の重要有形民俗文化財に指定される。",
                zh:"Yairi 開始為原始購買者提供「只要吉他還在就保固」的終身保證。加子母明治座被指定為縣級重要有形民俗文化財。" } },
          { year:"1974", title:{en:"Oak Village",ja:"オークヴィレッジ",zh:"Oak Village"},
            text:{en:"Five young people from Tokyo found a woodworking community in Takayama.",ja:"東京の若者五人が高山に木工の共同体を興す。",zh:"五名來自東京的年輕人在高山創立木工社群。"} },
          { year:"1974",
              era:{ en:"Shōwa 49", ja:"昭和四十九年", zh:"昭和四十九年" },
              title:{ en:"Oak Village", ja:"オークヴィレッジ", zh:"Oak Village" },
              jp:"清見",
              text:{
                en:"A group of young people from a Tokyo university circle settles at Kiyomi near Takayama to make everything “from bowls to furniture to buildings” and to plant trees: “wood that took a hundred years to grow should become things used for a hundred years” (see <a href=\"houses.html\">Makers and Studios</a>).",
                ja:"東京の大学のサークル出身の若者たちが高山近郊の清見に住みつき、「お椀から家具、建物まで」をつくり、木を植える。「百年かかって育った木は、百年使えるものに」（<a href=\"houses.html\">つくり手と工房</a>参照）。",
                zh:"一群出身東京某大學社團的年輕人落腳高山近郊的清見，製作「從木碗到家具到建築」的一切，並且植樹：「花了一百年長成的木頭，就該做成能用一百年的東西」（見<a href=\"houses.html\">工匠與工坊</a>）。" } },
          { year:"1975",
              era:{ en:"Shōwa 50", ja:"昭和五十年", zh:"昭和五十年" },
              title:{ en:"Two crafts designated", ja:"春慶と一刀彫の指定", zh:"春慶與一刀彫獲指定" },
              jp:"伝統的工芸品",
              text:{
                en:"Hida Shunkei (17 February) and Ichii Ittōbori (10 May) are designated national traditional crafts under the 1974 law on traditional craft industries — the first two of Gifu's six (see <a href=\"tables.html\">Reference Tables</a>).",
                ja:"一九七四年の伝統的工芸品産業振興法のもとで、飛騨春慶（二月十七日）と一位一刀彫（五月十日）が伝統的工芸品に指定される。岐阜の六品目の最初の二つである（<a href=\"tables.html\">早見表</a>参照）。",
                zh:"依據 1974 年的傳統工藝品產業振興法，飛驒春慶（2 月 17 日）與一位一刀彫（5 月 10 日）被指定為國家傳統工藝品——岐阜六項中的前兩項（見<a href=\"tables.html\">速查表</a>）。" } },
          { year:"1976", title:{en:"Flood and preservation",ja:"水害と保存",zh:"水災與保存"},
            text:{en:"On 12 September the Nagara breaks its levee at Anpachi; the same year Ogimachi at Shirakawa-gō becomes one of Japan's first preservation districts.",ja:"九月十二日、長良川が安八で堤を切る。同じ年、白川郷の荻町は日本で最初の伝統的建造物群保存地区の一つとなる。",zh:"九月十二日，長良川在安八潰堤；同年，白川鄉荻町成為日本首批傳統建造物群保存地區之一。"} },
          { year:"1976",
              era:{ en:"Shōwa 51", ja:"昭和五十一年", zh:"昭和五十一年" },
              title:{ en:"Ogimachi preserved", ja:"荻町の保存地区", zh:"荻町保存地區" },
              jp:"伝建地区",
              text:{
                en:"The village of Ogimachi in Shirakawa-gō, with more than a hundred gasshō buildings, is designated a preservation district for groups of traditional buildings — the first step towards World Heritage (see <a href=\"architecture.html\">Temples, Townhouses &amp; Gasshō</a>).",
                ja:"百棟を超える合掌造が残る白川郷の荻町が、重要伝統的建造物群保存地区に選定される。世界遺産への第一歩である（<a href=\"architecture.html\">社寺・町家・合掌</a>参照）。",
                zh:"保有一百多棟合掌造的白川鄉荻町，被選定為傳統建造物群保存地區——邁向世界遺產的第一步（見<a href=\"architecture.html\">寺社、町家與合掌</a>）。" } },
          { year:"1977",
              era:{ en:"Shōwa 52", ja:"昭和五十二年", zh:"昭和五十二年" },
              title:{ en:"The Kiso Hinoki reserve", ja:"木曽ヒノキ備林", zh:"木曾扁柏備林" },
              jp:"備林",
              text:{
                en:"The Denokōji stand in Kashimo is renamed the Kiso Hinoki reserve, the name it carries today. In Takayama, Hida Sangyō takes a design licence from Pierre Cardin.",
                ja:"加子母の出ノ小路の林が木曽ヒノキ備林と改められ、いまもその名で呼ばれる。高山では飛騨産業がピエール・カルダンとデザインのライセンス契約を結ぶ。",
                zh:"加子母的出之小路林分更名為木曾扁柏備林，沿用至今。高山方面，飛驒產業取得皮爾・卡登的設計授權。" } },
          { year:"1978", title:{en:"Mino ware designated",ja:"美濃焼の指定",zh:"美濃燒獲指定"},
            text:{en:"Mino ware becomes a national traditional craft; Mino washi follows in 1985.",ja:"美濃焼が国の伝統的工芸品となり、美濃和紙が1985年に続く。",zh:"美濃燒成為國家傳統工藝品；美濃和紙於 1985 年跟進。"} },
          { year:"1978",
              era:{ en:"Shōwa 53", ja:"昭和五十三年", zh:"昭和五十三年" },
              title:{ en:"The Palathetic pickup", ja:"パラセティック・ピックアップ", zh:"Palathetic 拾音器" },
              jp:"エレアコ",
              text:{
                en:"In April Takamine introduces an under-saddle pickup with six individual piezo elements, one for each string — an early and influential design for amplifying acoustic guitars. The same year Mino ware becomes one of Gifu's traditional crafts.",
                ja:"四月、タカミネは弦ごとに一つ、計六個の圧電素子をもつアンダーサドル・ピックアップを発表する。アコースティックギター増幅の初期の、影響力の大きい設計である。同じ年、美濃焼が岐阜の伝統的工芸品に加わる。",
                zh:"4 月，Takamine 推出琴橋下拾音器，每條弦各配一個、共六個壓電元件——這是原聲吉他擴音早期且深具影響力的設計。同年，美濃燒也成為岐阜的傳統工藝品。" } },
          { year:"1979",
              era:{ en:"Shōwa 54", ja:"昭和五十四年", zh:"昭和五十四年" },
              title:{ en:"Festivals and a larch series", ja:"屋台行事とフロンティア", zh:"祭典與落葉松系列" },
              jp:"重要無形民俗文化財",
              text:{
                en:"On 3 February the float events of the Takayama festivals are designated an Important Intangible Folk Cultural Property. Takamine sells its first acoustic-electric model, and Hida Sangyō launches the Frontier series in larch, an unfashionable plantation wood.",
                ja:"二月三日、高山祭の屋台行事が重要無形民俗文化財に指定される。タカミネは最初のエレクトリック・アコースティックを発売し、飛騨産業は、あまり顧みられなかった人工林材カラマツでフロンティア・シリーズを出す。",
                zh:"2 月 3 日，高山祭的屋台行事被指定為重要無形民俗文化財。Takamine 推出首款電木吉他，飛驒產業則以當時不受青睞的人工林木材落葉松推出 Frontier 系列。" } },
          { year:"1980",
              era:{ en:"Shōwa 55", ja:"昭和五十五年", zh:"昭和五十五年" },
              title:{ en:"The price peak", ja:"木材価格の頂点", zh:"木材價格高峰" },
              jp:"山元立木価格",
              text:{
                en:"Timber prices reach their all-time high: a cubic metre of standing hinoki is worth ¥42,947 to its owner and sugi ¥22,707, and medium hinoki logs average about ¥76,400. On 4 November the CITES convention enters into force for Japan (see <a href=\"markets.html\">Log Markets &amp; Prices</a>).",
                ja:"木材価格が史上最高に達する。山元立木価格は1m³あたりヒノキ42,947円、スギ22,707円、ヒノキ中丸太の価格は平均約76,400円。十一月四日、ワシントン条約が日本について発効する（<a href=\"markets.html\">原木市場と価格</a>参照）。",
                zh:"木材價格攀上歷史高點：每立方公尺立木價格，扁柏為 42,947 日圓、柳杉為 22,707 日圓，扁柏中徑原木平均約 76,400 日圓。11 月 4 日，《華盛頓公約》（CITES）對日本生效（見<a href=\"markets.html\">原木市場與價格</a>）。" } },
          { year:"1981",
              era:{ en:"Shōwa 56", ja:"昭和五十六年", zh:"昭和五十六年" },
              title:{ en:"Pine wilt at its peak; a ceiling", ja:"松枯れの頂点と天井", zh:"松材線蟲病高峰；一座天花板" },
              jp:"松くい虫",
              text:{
                en:"Pine wilt, spreading in Gifu since about 1975, reaches its peak in FY1981. Hayakawa Kennosuke completes the wooden ceiling of the Serizawa Keisuke Art Museum in Shizuoka for the architect Shirai Seiichi.",
                ja:"一九七五年頃から岐阜で広がった松枯れが一九八一年度に頂点に達する。早川謙之輔は建築家白井晟一のために静岡の芹沢銈介美術館の木の天井を仕上げる。",
                zh:"約自 1975 年起在岐阜蔓延的松材線蟲病，於 1981 年度達到高峰。早川謙之輔為建築師白井晟一完成靜岡芹澤銈介美術館的木造天花板。" } },
          { year:"1982",
              era:{ en:"Shōwa 57", ja:"昭和五十七年", zh:"昭和五十七年" },
              title:{ en:"Forest bathing; a federation", ja:"森林浴と木工連合会", zh:"森林浴與木工聯合會" },
              jp:"森林浴",
              text:{
                en:"The first national forest-bathing gathering is held in the hinoki forest of Akasawa in the Kiso valley. In Takayama the furniture makers' federation becomes a cooperative, which will later hold the Hida furniture trademark.",
                ja:"木曽谷の赤沢のヒノキ林で、全国で初めての森林浴の集いが開かれる。高山では家具の連合会が協同組合となり、のちに「飛騨の家具」の商標をもつ主体となる。",
                zh:"首屆全國森林浴活動在木曾谷赤澤的扁柏林舉行。高山的家具業聯合會改組為協同組合，日後成為「飛驒家具」商標的持有者。" } },
          { year:"1983", title:{en:"Kamiokande",ja:"カミオカンデ",zh:"神岡探測器"},
            text:{en:"A detector is built in the Kamioka mine; in February 1987 it catches neutrinos from a supernova. See <a href=\"metal.html\">Metal in Gifu</a>.",ja:"神岡鉱山に検出器が建設され、1987年2月、超新星からのニュートリノをとらえる。<a href=\"metal.html\">岐阜の金属</a>を参照。",zh:"神岡礦山內建成偵測器；1987 年 2 月捕捉到來自超新星的微中子。見<a href=\"metal.html\">岐阜的金屬</a>。"} },
          { year:"1983",
              era:{ en:"Shōwa 58", ja:"昭和五十八年", zh:"昭和五十八年" },
              title:{ en:"A flood on the Kiso", ja:"木曽川の洪水", zh:"木曾川洪水" },
              jp:"ミュージックガーデン",
              text:{
                en:"A flood of the Kiso River destroys Yairi's Music Garden, the riverside hall the company had opened in 1980 — a reminder that Kani's guitar factory sits on the same river that once carried the Owari timber.",
                ja:"木曽川の洪水が、ヤイリが一九八〇年に開いた川辺のミュージックガーデンを押し流す。可児のギター工場が、かつて尾張の材木を運んだのと同じ川のほとりにあることを思い出させる出来事だった。",
                zh:"木曾川洪水沖毀了 Yairi 於 1980 年開設的河畔音樂花園——提醒人們，可兒的吉他工廠就位在當年運送尾張木材的同一條河旁。" } },
          { year:"1985",
              era:{ en:"Shōwa 60", ja:"昭和六十年", zh:"昭和六十年" },
              title:{ en:"The strong yen", ja:"円高", zh:"日圓升值" },
              jp:"プラザ合意",
              text:{
                en:"After the Plaza Accord the yen roughly doubles against the dollar within a few years, making imported timber dramatically cheaper. Mino washi becomes a national traditional craft on 22 May, and the education ministry encourages wood in school buildings.",
                ja:"プラザ合意ののち、数年で円はドルに対しておよそ二倍になり、輸入材は劇的に安くなる。五月二十二日に美濃和紙が伝統的工芸品に指定され、文部省は学校施設への木材利用を促す通知を出す。",
                zh:"廣場協議後數年間，日圓對美元升值約一倍，進口木材大幅變便宜。5 月 22 日，美濃和紙被指定為傳統工藝品；文部省也發出通知，鼓勵學校設施使用木材。" } },
          { year:"1986",
              era:{ en:"Shōwa 61", ja:"昭和六十一年", zh:"昭和六十一年" },
              title:{ en:"A campus for woodworkers", ja:"匠ヶ丘の校舎", zh:"匠丘校區" },
              jp:"木工芸術スクール",
              text:{
                en:"The Takayama woodworking school moves to its present campus in Takumigaoka — “the hill of craftsmen” — where it now runs a one-year course, including bentwood, for Hida's factories and workshops (see <a href=\"workers.html\">The People of the Forest</a>).",
                ja:"高山の木工の学校が、いまの匠ヶ丘の校舎に移る。曲木を含む一年課程で、飛騨の工場と工房へ人を送り出している（<a href=\"workers.html\">山で働く人々</a>参照）。",
                zh:"高山的木工學校遷至現址匠丘（「匠人之丘」），如今開設包含曲木在內的一年制課程，為飛驒的工廠與工坊培育人才（見<a href=\"workers.html\">山林中的工作者</a>）。" } },
          { year:"1987–1988",
              title:{ en:"Limited editions and modular preamps", ja:"限定モデルとモジュール式プリアンプ", zh:"限量款與模組化前級" },
              jp:"タカミネ",
              text:{
                en:"Takamine begins an annual limited-edition series in 1987 and in 1988 introduces a modular, replaceable preamp — by the company's account an industry first.",
                ja:"タカミネは一九八七年に毎年の限定シリーズを始め、一九八八年には交換できるモジュール式プリアンプを発表する。同社によれば業界初であった。",
                zh:"Takamine 於 1987 年開始每年推出限量系列，1988 年推出可更換的模組化前級放大器——據該公司表示為業界首創。" } },
          { year:"1992",
              era:{ en:"Heisei 4", ja:"平成四年", zh:"平成四年" },
              title:{ en:"Brazilian rosewood protected", ja:"ハカランダの附属書I掲載", zh:"巴西玫瑰木列入附錄一" },
              jp:"ワシントン条約",
              text:{
                en:"At the CITES conference held in Kyoto, Brazilian rosewood is listed in Appendix I, effective 11 June; every guitar made of it has needed papers to cross a border ever since. Gifu wagasa umbrellas become a prefectural traditional craft (see <a href=\"cites.html\">Rosewood & the Law</a>).",
                ja:"京都で開かれたワシントン条約の締約国会議で、ブラジリアン・ローズウッドが附属書Iに掲載され、六月十一日に発効する。以来、この材を使ったギターは国境を越えるたびに書類を必要とする。岐阜和傘が県の郷土工芸品に指定される（<a href=\"cites.html\">ローズウッドと条約</a>参照）。",
                zh:"在京都召開的 CITES 締約方大會上，巴西玫瑰木被列入附錄一，6 月 11 日生效；此後凡以此材製作的吉他，跨越國境都需要文件。岐阜和傘被指定為縣級鄉土工藝品（見<a href=\"cites.html\">玫瑰木與公約</a>）。" } },
          { year:"1993",
              era:{ en:"Heisei 5", ja:"平成五年", zh:"平成五年" },
              title:{ en:"Lasers at Sakashita; a new head at Ōgaki", ja:"レーザー加工と枡屋の三代目", zh:"雷射加工與木枡第三代" },
              jp:"自動化",
              text:{
                en:"Takamine introduces laser processing and numerically controlled robots. In Ōgaki, Ōhashi Hiroyuki joins the family masu firm as sales fall towards half their earlier level; his coloured, printed and novel masu later turn it round (see <a href=\"masu.html\">The Masu of Ōgaki</a>).",
                ja:"タカミネがレーザー加工とNCロボットを導入する。大垣では大橋博行が家業の枡屋に入る。売上が先代のころの半分近くまで落ちるなか、色枡、印刷枡、新しい形の枡がのちに会社を立て直した（<a href=\"masu.html\">大垣の枡</a>参照）。",
                zh:"Takamine 導入雷射加工與數控機器人。大垣方面，大橋博行在營收跌至先前約一半之際進入家族的木枡公司；他日後推出的彩色木枡、印刷木枡與各種新造型，讓公司重新站穩（見<a href=\"masu.html\">大垣的枡</a>）。" } },
          { year:"1995",
              era:{ en:"Heisei 7", ja:"平成七年", zh:"平成七年" },
              title:{ en:"An earthquake, a craft, a World Heritage Site", ja:"震災、提灯、世界遺産", zh:"地震、燈籠與世界遺產" },
              jp:"白川郷",
              text:{
                en:"The Kobe earthquake in January leads to repeated strengthening of timber-frame rules. Gifu lanterns become a national traditional craft on 5 April, and in December the historic villages of Shirakawa-gō and Gokayama are inscribed on the World Heritage list (see <a href=\"architecture.html\">Temples, Townhouses &amp; Gasshō</a>).",
                ja:"一月の阪神・淡路大震災をきっかけに、木造軸組の基準は繰り返し強化されていく。四月五日に岐阜提灯が伝統的工芸品に指定され、十二月には白川郷・五箇山の合掌造り集落が世界遺産に登録される（<a href=\"architecture.html\">社寺・町家・合掌</a>参照）。",
                zh:"1 月的阪神大地震促使木造軸組的規範一再強化。4 月 5 日，岐阜燈籠被指定為傳統工藝品；12 月，白川鄉與五箇山的合掌造聚落登錄為世界遺產（見<a href=\"architecture.html\">寺社、町家與合掌</a>）。" } },
          { year:"1996", title:{en:"Super-Kamiokande",ja:"スーパーカミオカンデ",zh:"超級神岡探測器"},
            text:{en:"The larger detector begins; in 1998 it shows that neutrinos have mass.",ja:"より大きな検出器が動き出し、1998年にニュートリノに質量があることを示す。",zh:"更大的偵測器啟用；1998 年證明微中子具有質量。"} },
          { year:"1996",
              era:{ en:"Heisei 8", ja:"平成八年", zh:"平成八年" },
              title:{ en:"Oak wilt arrives", ja:"ナラ枯れの初確認", zh:"首次確認櫟樹枯萎病" },
              jp:"ナラ枯れ",
              text:{
                en:"Oak wilt, spread by an ambrosia beetle, is first confirmed in Gifu in the former village of Sakauchi, now part of Ibigawa. Damage peaks in FY2010 and then declines (see <a href=\"ecology.html\">Forest Ecology</a>).",
                ja:"養菌性のキクイムシが媒介するナラ枯れが、岐阜ではいまの揖斐川町、旧坂内村で初めて確認される。被害は二〇一〇年度に頂点に達し、その後は減っている（<a href=\"ecology.html\">森の生態</a>参照）。",
                zh:"由養菌小蠹蟲媒介的櫟樹枯萎病，首次在岐阜的舊坂內村（今揖斐川町）確認。災情在 2010 年度達到高峰，其後逐漸減少（見<a href=\"ecology.html\">森林生態</a>）。" } },
          { year:"1999",
              era:{ en:"Heisei 11", ja:"平成十一年", zh:"平成十一年" },
              title:{ en:"A round-the-clock neck line", ja:"二十四時間のネック加工", zh:"全天候琴頸產線" },
              jp:"タカミネ",
              text:{
                en:"Takamine installs an automated neck-making line that runs twenty-four hours a day, while bracing, fitting and finishing remain in the hands of its craftspeople at Sakashita.",
                ja:"タカミネは二十四時間稼働する自動ネック加工ラインを設ける。一方で力木、組立、仕上げは坂下の職人の手に残る。",
                zh:"Takamine 設置 24 小時運轉的自動琴頸生產線；至於音梁、組裝與塗裝收尾，仍由坂下的職人親手完成。" } },
          { year:"2000", title:{en:"Population peaks",ja:"人口の頂点",zh:"人口高峰"},
            text:{en:"The census counts about 2.11 million people in Gifu, the most it has ever had.",ja:"国勢調査が岐阜の人口を約211万人と数える。これまでで最も多い。",zh:"國勢調查統計岐阜人口約 211 萬，為歷來最多。"} }
        ] },
        { t:"tiny",
          text:{
            en:"Sources: company histories of Hida Sangyō, Takamine and Yairi Guitar; Takayama City; Agency for Cultural Affairs; Forestry Agency Chūbu office; Gifu Prefecture.",
            ja:"出典：飛騨産業、タカミネ、ヤイリギターの社史、高山市、文化庁、林野庁中部森林管理局、岐阜県。",
            zh:"資料來源：飛驒產業、Takamine 與 Yairi Guitar 公司沿革；高山市；文化廳；林野廳中部森林管理局；岐阜縣。" } }
      ]
    },
    { t:"section", id:"now",
      title:{ en:"The twenty-first century", ja:"二十一世紀", zh:"二十一世紀" }, jp:"2001–",
      body:[
        { t:"timeline", items:[
          { year:"2001",
              era:{ en:"Heisei 13", ja:"平成十三年", zh:"平成十三年" },
              title:{ en:"A new basic law; an academy", ja:"森林・林業基本法と森林文化アカデミー", zh:"新基本法與森林文化學院" },
              jp:"多面的機能",
              text:{
                en:"The Forest and Forestry Basic Act replaces the law of 1964 and puts the multiple functions of forests first. In Mino the prefecture opens the Gifu Academy of Forest Science and Culture, built largely of local timber, to train foresters, woodworkers and timber architects.",
                ja:"森林・林業基本法が一九六四年の法律に代わり、森林の多面的機能を第一に置く。美濃市には県が岐阜県立森林文化アカデミーを開く。校舎の多くは県産材で建てられ、林業者、木工家、木造建築の設計者を育てる。",
                zh:"《森林與林業基本法》取代 1964 年的法律，將森林的多元功能置於首位。岐阜縣在美濃市開設以縣產木材為主建造的岐阜縣立森林文化學院，培育林業人員、木工與木構建築設計者。" } },
          { year:"2002",
              era:{ en:"Heisei 14", ja:"平成十四年", zh:"平成十四年" },
              title:{ en:"The low point", ja:"自給率の底", zh:"自給率谷底" },
              jp:"18.8%",
              text:{
                en:"Japan's wood self-sufficiency falls to 18.8%, its lowest recorded level. From here, as planted forests mature and plywood mills turn to domestic logs, it begins to rise (see <a href=\"trade.html\">Trade &amp; Self-Sufficiency</a>).",
                ja:"日本の木材自給率が記録上最低の18.8%に落ちる。ここから、人工林の成熟と合板工場の国産材への転換につれて上昇に転じる（<a href=\"trade.html\">貿易と自給</a>参照）。",
                zh:"日本木材自給率跌至有紀錄以來最低的 18.8%。此後隨著人工林成熟、合板廠轉用國產原木，自給率開始回升（見<a href=\"trade.html\">貿易與自給</a>）。" } },
          { year:"2003",
              era:{ en:"Heisei 15", ja:"平成十五年", zh:"平成十五年" },
              title:{ en:"Green employment; an Italian designer", ja:"緑の雇用とエンツォ・マーリ", zh:"綠色僱用與恩佐・馬利" },
              jp:"緑の雇用",
              text:{
                en:"A national programme to train new forestry workers begins, lifting new entrants from about 2,000 to about 3,200 a year. Hida Sangyō signs a contract with the Italian designer Enzo Mari, and Gifu holds its first Green Children's Conference, the start of its wood-education work.",
                ja:"林業の新規就業者を育てる国の事業「緑の雇用」が始まり、新規参入は年約二千人から約三千二百人に増える。飛騨産業はイタリアのデザイナー、エンツォ・マーリと契約し、岐阜県は初めての「みどりの子ども会議」を開いて木育の取組みを始める。",
                zh:"培訓林業新進人員的國家計畫「綠色僱用」啟動，使每年新進人數由約 2,000 人增至約 3,200 人。飛驒產業與義大利設計師恩佐・馬利簽約，岐阜縣則舉辦首屆「綠色兒童會議」，展開木育工作。" } },
          { year:"2004–2005",
              title:{ en:"Sugi research and a master craftsman", ja:"スギ研究と現代の名工", zh:"柳杉研究與當代名匠" },
              jp:"現代の名工",
              text:{
                en:"Hida Sangyō forms a research cooperative on sugi in 2004, the year Hokkaidō coins the word mokuiku. In 2005 Yairi Kazuo is named a Contemporary Master Craftsman, Mari's HIDA series is shown at the Milan Triennale, and Takamine opens a new head office and factory at Sakashita.",
                ja:"飛騨産業は二〇〇四年にスギの研究組合をつくる。北海道が「木育」という語を生んだ年である。二〇〇五年、矢入一男が現代の名工に選ばれ、マーリの「HIDA」シリーズがミラノ・トリエンナーレで展示され、タカミネは坂下に新しい本社工場を建てる。",
                zh:"飛驒產業於 2004 年成立柳杉研究組合，這一年北海道創造了「木育」一詞。2005 年，矢入一男獲選為當代名匠，馬利的 HIDA 系列在米蘭三年展展出，Takamine 則在坂下啟用新總部與工廠。" } },
          { year:"2005", title:{en:"Magome joins Gifu",ja:"馬籠、岐阜県へ",zh:"馬籠併入岐阜縣"},
            text:{en:"Yamaguchi village crosses the prefectural border to join Nakatsugawa.",ja:"山口村が県境を越えて中津川市と合併する。",zh:"山口村越過縣界併入中津川市。"} },
          { year:"2006",
              era:{ en:"Heisei 18", ja:"平成十八年", zh:"平成十八年" },
              title:{ en:"An ordinance and a trademark", ja:"森林づくり条例と地域団体商標", zh:"森林營造條例與地區團體商標" },
              jp:"森林づくり基本条例",
              text:{
                en:"In May the Gifu Prefecture Forest-Making Basic Ordinance commits the prefecture to five-year forest plans. Hida Ichii Ittōbori is registered as a regional collective trademark, mokuiku enters the national forest plan in September, and Yairi Kazuo receives the Medal with Yellow Ribbon.",
                ja:"五月、岐阜県森林づくり基本条例が県に五か年の森林づくり計画を義務づける。「飛騨一位一刀彫」が地域団体商標に登録され、九月には木育が国の森林・林業基本計画に記され、矢入一男が黄綬褒章を受ける。",
                zh:"5 月，《岐阜縣森林營造基本條例》規定縣須制定五年期森林計畫。「飛驒一位一刀彫」註冊為地區團體商標；9 月木育被寫入國家森林與林業基本計畫；矢入一男獲頒黃綬褒章。" } },
          { year:"2007", title:{en:"40.9 °C",ja:"40.9℃",zh:"40.9 °C"},
            text:{en:"Tajimi takes the national temperature record. See <a href=\"climate.html\">Heat &amp; Snow</a>.",ja:"多治見が国内の最高気温の記録を得る。<a href=\"climate.html\">暑さと雪</a>を参照。",zh:"多治見創下日本最高氣溫紀錄。見<a href=\"climate.html\">酷暑與大雪</a>。"} },
          { year:"2007",
              era:{ en:"Heisei 19", ja:"平成十九年", zh:"平成十九年" },
              title:{ en:"A brand for Tōnō hinoki", ja:"東濃ひのきの銘柄化", zh:"東濃扁柏品牌化" },
              jp:"東濃ひのき",
              text:{
                en:"On 13 November eleven forest cooperatives form a council to standardise and market Tōnō hinoki. The prefecture's first five-year forest plan runs from FY2007 to FY2011 (see <a href=\"hinoki.html\">Hinoki</a>).",
                ja:"十一月十三日、十一の森林組合が東濃ひのきの規格をそろえ売り込む協議会をつくる。県の最初の五か年森林づくり計画は二〇〇七年度から二〇一一年度までである（<a href=\"hinoki.html\">ヒノキ</a>参照）。",
                zh:"11 月 13 日，11 個森林組合組成協議會，統一東濃扁柏的規格並共同行銷。岐阜縣第一期五年森林計畫涵蓋 2007 至 2011 年度（見<a href=\"hinoki.html\">日本扁柏</a>）。" } },
          { year:"2008", title:{en:"Through the mountains",ja:"山を抜ける道",zh:"穿越山嶺"},
            text:{en:"The Tōkai-Hokuriku Expressway is completed and the Tokuyama Dam, Japan's largest reservoir, is finished; Hida furniture gains its regional trademarks.",ja:"東海北陸自動車道が全通し、日本最大の貯水池・徳山ダムが完成する。飛騨の家具が地域団体商標を得る。",zh:"東海北陸自動車道全線通車，日本最大的水庫德山水壩完工；飛驒家具取得地域團體商標。"} },
          { year:"2008–2010",
              title:{ en:"Hida furniture as a trademark", ja:"「飛騨の家具」の商標", zh:"「飛驒家具」商標" },
              jp:"飛騨デザイン憲章",
              text:{
                en:"The names “Hida furniture” and “Hida-Takayama furniture” are registered as regional collective trademarks in January 2008, with six standards for certified firms, from origin to a ten-year warranty on wooden parts. The makers register the mark in Taiwan in May 2009 and in China in February 2010.",
                ja:"「飛騨の家具」「飛騨・高山の家具」が二〇〇八年一月に地域団体商標に登録される。認定企業には、産地から木部の十年保証まで六つの基準が課される。二〇〇九年五月には台湾で、二〇一〇年二月には中国で商標を登録した。",
                zh:"「飛驒家具」與「飛驒・高山家具」於 2008 年 1 月註冊為地區團體商標，認證企業須符合從產地到木質部件十年保固等六項標準。業者並於 2009 年 5 月在台灣、2010 年 2 月在中國註冊該商標。" } },
          { year:"2010",
              era:{ en:"Heisei 22", ja:"平成二十二年", zh:"平成二十二年" },
              title:{ en:"Wood in public buildings", ja:"公共建築物等木材利用促進法", zh:"公共建築木材利用促進法" },
              jp:"木材利用促進法",
              text:{
                en:"A law makes the national government responsible for using wood in the low-rise public buildings it builds and encourages prefectures and municipalities to follow. Hida Sangyō supplies compressed-sugi flooring to a school in Mie (see <a href=\"woodfirst.html\">Putting Wood to Use</a>).",
                ja:"国が建てる低層の公共建築物に木材を使う責務を国に課し、都道府県と市町村にも同様の取組みを促す法律が制定される。飛騨産業は三重県の学校に圧縮スギの床材を納める（<a href=\"woodfirst.html\">木づかい</a>参照）。",
                zh:"一部法律規定中央政府須在其興建的低層公共建築中使用木材，並鼓勵各縣市跟進。飛驒產業為三重縣一所學校供應壓縮柳杉地板（見<a href=\"woodfirst.html\">用木之道</a>）。" } },
          { year:"2011", title:{en:"Gifu Castle site",ja:"岐阜城跡",zh:"岐阜城跡"},
            text:{en:"About 209 ha of Kinkazan is designated a National Historic Site.",ja:"金華山の約209ヘクタールが国の史跡に指定される。",zh:"金華山約 209 公頃獲指定為國家史跡。"} },
          { year:"2012",
              era:{ en:"Heisei 24", ja:"平成二十四年", zh:"平成二十四年" },
              title:{ en:"Gifu's own forest tax", ja:"清流の国ぎふ森林・環境税", zh:"岐阜森林環境稅" },
              jp:"森林・環境税",
              text:{
                en:"From April every resident of Gifu pays ¥1,000 a year, and companies ¥2,000 to ¥80,000 according to capital, to fund thinning, satoyama care, wildlife measures and wooden school buildings. Hida Sangyō buys a sawmill in Kamitakara, and Takamine marks fifty years of its name.",
                ja:"四月から岐阜県民は年1,000円、法人は資本金に応じて2,000〜80,000円を納め、間伐、里山の手入れ、鳥獣対策、学校の木造化にあてる。飛騨産業は上宝の製材所を取得し、タカミネはその名の五十周年を迎える。",
                zh:"自 4 月起，岐阜縣民每人每年繳納 1,000 日圓、法人依資本額繳納 2,000 至 80,000 日圓，用於疏伐、里山維護、野生動物對策與學校木造化。飛驒產業收購上寶的製材所，Takamine 迎來品牌名稱五十週年。" } },
          { year:"2013",
              era:{ en:"Heisei 25", ja:"平成二十五年", zh:"平成二十五年" },
              title:{ en:"CLT and a clear coat", ja:"CLTと春慶の弦楽器", zh:"CLT 與春慶弦樂器" },
              jp:"直交集成板",
              text:{
                en:"A Japanese Agricultural Standard for cross-laminated timber is established. An Italian luthier applies a Hida Shunkei finish to a string quartet's instruments, and Japan begins counting carbon stored in wood products from domestic forests in its climate inventory (see <a href=\"engineered.html\">Engineered Wood</a>).",
                ja:"直交集成板（CLT）の日本農林規格が制定される。イタリアの弦楽器製作者が弦楽四重奏の楽器に飛騨春慶の塗りをほどこし、日本は国産材の木材製品に蓄えられた炭素を温室効果ガスの目録に計上し始める（<a href=\"engineered.html\">エンジニアードウッド</a>参照）。",
                zh:"直交集成板（CLT）的日本農林規格制定。一位義大利製琴師為弦樂四重奏的樂器施以飛驒春慶塗裝；日本也開始把國產材木製品所儲存的碳計入溫室氣體清冊（見<a href=\"engineered.html\">工程木材</a>）。" } },
          { year:"2014", title:{en:"Ontake; washi",ja:"御嶽山、和紙",zh:"御嶽山；和紙"},
            text:{en:"Mount Ontake erupts without warning on 27 September; UNESCO inscribes washi, Honminoshi among it. See <a href=\"mountains.html\">Sacred Peaks</a>.",ja:"九月二十七日、御嶽山が前ぶれなく噴火する。ユネスコが本美濃紙を含む和紙を記載する。<a href=\"mountains.html\">霊峰と山岳信仰</a>を参照。",zh:"九月二十七日，御嶽山毫無預警地噴發；聯合國教科文組織將包括本美濃紙在內的和紙列入名錄。見<a href=\"mountains.html\">靈峰與山岳信仰</a>。"} },
          { year:"2014",
              era:{ en:"Heisei 26", ja:"平成二十六年", zh:"平成二十六年" },
              title:{ en:"Washi, a restored forest, a death", ja:"和紙の無形文化遺産と木曽悠久の森", zh:"和紙、復原之森與一位名匠辭世" },
              jp:"ユネスコ",
              text:{
                en:"UNESCO inscribes “Washi”, including Hon-Minoshi, as Intangible Cultural Heritage. The Kiso Yūkyū no Mori restoration area of 16,579 hectares is set up across the Kiso forests, a biomass power station opens at Mizuho, and Yairi Kazuo dies on 5 March.",
                ja:"ユネスコが本美濃紙を含む「和紙」を無形文化遺産に登録する。木曽の森にまたがる16,579haの復元区域「木曽悠久の森」が設けられ、瑞穂市にバイオマス発電所が稼働し、三月五日に矢入一男が世を去る。",
                zh:"聯合國教科文組織將包含本美濃紙在內的「和紙」登錄為無形文化遺產。橫跨木曾森林、面積 16,579 公頃的「木曾悠久之森」復原區域設立；瑞穗市的生質能發電廠啟用；矢入一男於 3 月 5 日辭世。" } },
          { year:"2015", title:{en:"Ayu, a roof of hinoki and a Nobel",ja:"鮎、檜の屋根、ノーベル賞",zh:"香魚、檜木屋頂與諾貝爾獎"},
            text:{en:"The Nagara's ayu become a Globally Important Agricultural Heritage System; Gifu Media Cosmos opens under its hinoki roof; Kajita Takaaki shares the Nobel Prize for the Super-Kamiokande result.",ja:"長良川の鮎が世界農業遺産となる。ぎふメディアコスモスが檜の屋根の下に開く。梶田隆章がスーパーカミオカンデの成果でノーベル賞を分かち合う。",zh:"長良川香魚獲認定為世界農業遺產；岐阜媒體宇宙在檜木屋頂下開館；梶田隆章以超級神岡探測器的成果共同獲得諾貝爾獎。"} },
          { year:"2015",
              era:{ en:"Heisei 27", ja:"平成二十七年", zh:"平成二十七年" },
              title:{ en:"A library under a hinoki roof", ja:"みんなの森 ぎふメディアコスモス", zh:"扁柏屋頂下的圖書館" },
              jp:"メディアコスモス",
              text:{
                en:"On 18 July Gifu city opens Minna no Mori Gifu Media Cosmos, Itō Toyoo's library under an undulating lattice roof of Tōnō hinoki. The Hidakuma company is founded to use Hida's small broadleaves, Hida city declares itself a broadleaf town, and the Kashimo playhouse gets back its bark-shingle roof (see <a href=\"building.html\">Building in Wood</a>).",
                ja:"七月十八日、岐阜市が伊東豊雄設計の「みんなの森 ぎふメディアコスモス」を開く。東濃ひのきを編んだ波打つ屋根の下の図書館である。飛騨の小径広葉樹を生かす会社「飛騨の森でクマは踊る」が生まれ、飛騨市は広葉樹のまちづくりを掲げ、かしも明治座の屋根は榑葺きに戻された（<a href=\"building.html\">木で建てる</a>参照）。",
                zh:"7 月 18 日，岐阜市啟用伊東豐雄設計的「大家的森林 岐阜媒體宇宙」——一座覆蓋在東濃扁柏編成的波浪狀格柵屋頂下的圖書館。以飛驒小徑闊葉樹為材料的公司「飛驒森林裡熊在跳舞」成立，飛驒市宣示打造闊葉樹之城，加子母明治座的屋頂也恢復為木片葺（見<a href=\"building.html\">以木建造</a>）。" } },
          { year:"2016",
              era:{ en:"Heisei 28", ja:"平成二十八年", zh:"平成二十八年" },
              title:{ en:"Clean wood, rosewood, floats and takumi", ja:"クリーンウッド法、ローズウッド、屋台、匠", zh:"合法木材法、玫瑰木、屋台與匠人" },
              jp:"日本遺産",
              text:{
                en:"Japan's Clean Wood Act is passed in May. The CITES conference in Johannesburg lists all rosewoods. Takayama's story of the Hida takumi is named Japan Heritage, and on 1 December UNESCO inscribes thirty-three float festivals, including those of Takayama, Furukawa and Ōgaki.",
                ja:"五月、クリーンウッド法が成立する。ヨハネスブルクのワシントン条約締約国会議がすべてのローズウッドを附属書に掲載する。高山の飛騨匠の物語が日本遺産に認定され、十二月一日にはユネスコが高山、古川、大垣を含む三十三の山・鉾・屋台行事を無形文化遺産に登録する。",
                zh:"5 月，日本《合法木材法》（Clean Wood Act）通過。約翰尼斯堡的 CITES 大會將所有玫瑰木列入附錄。高山的飛驒匠人故事獲認定為日本遺產；12 月 1 日，聯合國教科文組織將包括高山、古川與大垣在內的 33 項山・鉾・屋台祭典登錄為無形文化遺產。" } },
          { year:"2017",
              era:{ en:"Heisei 29", ja:"平成二十九年", zh:"平成二十九年" },
              title:{ en:"Every rosewood listed", ja:"全ダルベルギア属の規制", zh:"全面管制黃檀屬" },
              jp:"附属書II",
              text:{
                en:"From 2 January every Dalbergia species is in Appendix II, including finished guitars, and makers scramble for permits or substitutes. The Clean Wood Act takes effect in May, and the town of Ōno in Gifu declares itself a Wood Start town on 15 March.",
                ja:"一月二日からダルベルギア属のすべての種が附属書IIとなり、完成したギターも対象となる。メーカーは許可の取得か代替材探しに追われた。クリーンウッド法は五月に施行され、岐阜県大野町は三月十五日にウッドスタート宣言をする。",
                zh:"自 1 月 2 日起，所有黃檀屬物種都列入附錄二，連成品吉他也在管制之列，製造商忙於申請許可或尋找替代木材。《合法木材法》於 5 月施行；岐阜縣大野町則於 3 月 15 日發表「木育起步」（Wood Start）宣言。" } },
          { year:"2018", title:{en:"41.0 °C",ja:"41.0℃",zh:"41.0 °C"},
            text:{en:"Kanayama in Gero reaches 41.0 °C; a Mizunami brewery moves to year-round brewing.",ja:"下呂市金山が41.0℃に達する。瑞浪の酒蔵が四季醸造に移る。",zh:"下呂市金山氣溫達 41.0 °C；瑞浪的一家酒藏改為四季釀造。"} },
          { year:"2018–2019",
              title:{ en:"Forest management and a forest tax", ja:"森林経営管理法と森林環境税", zh:"森林經營管理法與森林環境稅" },
              jp:"森林経営管理制度",
              text:{
                en:"The Forest Management Act, passed in May 2018 and in force from April 2019, lets municipalities take over neglected private forests. The forest environment tax law of March 2019 starts a transfer to local governments from FY2019, and on 26 November 2019 finished instruments are exempted from the rosewood rules.",
                ja:"二〇一八年五月に成立し二〇一九年四月に施行された森林経営管理法は、手入れされない私有林の管理を市町村が引き受けることを可能にする。二〇一九年三月の森林環境税法により、二〇一九年度から地方への譲与が始まり、二〇一九年十一月二十六日には完成した楽器がローズウッド規制から除外される。",
                zh:"2018 年 5 月通過、2019 年 4 月施行的《森林經營管理法》，讓市町村得以接管疏於管理的私有林。2019 年 3 月的森林環境稅法使中央自 2019 年度起向地方撥付財源；2019 年 11 月 26 日，成品樂器獲排除於玫瑰木管制之外。" } },
          { year:"2020", title:{en:"A museum at Sekigahara",ja:"関ケ原の記念館",zh:"關原紀念館"},
            text:{en:"The Gifu Sekigahara Battlefield Memorial Museum opens.",ja:"岐阜関ケ原古戦場記念館が開館する。",zh:"岐阜關原古戰場紀念館開館。"} },
          { year:"2020",
              era:{ en:"Reiwa 2", ja:"令和二年", zh:"令和二年" },
              title:{ en:"A centenary and two wooden buildings", ja:"百周年と二つの木の施設", zh:"百週年與兩座木造設施" },
              jp:"morinos・ぎふ木遊館",
              text:{
                en:"Hida Sangyō marks its centenary on 10 August. The prefecture opens morinos, a forest education centre on the academy campus, and on 17 July, after a pandemic delay, a wooden play hall for children in Gifu city. Spanish cedar joins CITES Appendix II on 28 August (see <a href=\"mokuiku.html\">Learning Through Wood</a>).",
                ja:"八月十日、飛騨産業が創業百年を迎える。県はアカデミーの構内に森林総合教育センターmorinosを開き、七月十七日には感染症で延期されていた子どものための木の遊び場を岐阜市に開く。八月二十八日、スパニッシュシダーが附属書IIに加わる（<a href=\"mokuiku.html\">木育</a>参照）。",
                zh:"8 月 10 日，飛驒產業創業屆滿百年。岐阜縣在學院校區內開設森林綜合教育中心 morinos，並於 7 月 17 日在岐阜市開設因疫情延後的兒童木造遊戲館。8 月 28 日，西班牙雪松列入 CITES 附錄二（見<a href=\"mokuiku.html\">木育</a>）。" } },
          { year:"2021",
              era:{ en:"Reiwa 3", ja:"令和三年", zh:"令和三年" },
              title:{ en:"The wood shock", ja:"ウッドショック", zh:"木材危機" },
              jp:"都市の木造化推進法",
              text:{
                en:"American house-building and pandemic shipping disruption cut imports and send timber prices soaring. On 1 October the 2010 law is renamed and extended to all buildings, with 8 October as a wood-use day and October as a wood-use month; Hida Sangyō changes its woodpecker logo to “HIDA”.",
                ja:"アメリカの住宅建設ブームと感染症下の海運の混乱が輸入を減らし、木材価格が高騰する。十月一日、二〇一〇年の法律が改められてすべての建築物に広がり、十月八日が木材利用促進の日、十月が木材利用促進月間となる。飛騨産業はキツツキのロゴを「HIDA」に改める。",
                zh:"美國住宅建設熱潮與疫情下的海運混亂使進口減少，木材價格飆漲。10 月 1 日，2010 年的法律修正更名並擴及所有建築，並訂 10 月 8 日為木材利用促進日、10 月為木材利用促進月；飛驒產業將啄木鳥標誌改為「HIDA」。" } },
          { year:"2022",
              era:{ en:"Reiwa 4", ja:"令和四年", zh:"令和四年" },
              title:{ en:"Umbrellas, zones and an ordinance", ja:"和傘、ゾーニング、県産材条例", zh:"和傘、分區與縣產材條例" },
              jp:"ぎふ木の国・山の国県産材利用促進条例",
              text:{
                en:"Gifu wagasa becomes a national traditional craft on 18 March. The prefecture zones its forests in January and begins its fourth forest plan for FY2022 to FY2026; Japan restricts Russian wood imports; and in December the prefectural assembly passes an ordinance to promote Gifu timber (see <a href=\"woodfirst.html\">Putting Wood to Use</a>).",
                ja:"三月十八日、岐阜和傘が伝統的工芸品に指定される。県は一月に森林をゾーニングし、二〇二二年度から二〇二六年度までの第四期森林づくり計画を始める。日本はロシア産木材の輸入を制限し、十二月には県議会が県産材の利用を促す条例を可決する（<a href=\"woodfirst.html\">木づかい</a>参照）。",
                zh:"3 月 18 日，岐阜和傘被指定為傳統工藝品。岐阜縣於 1 月完成森林分區，並啟動 2022 至 2026 年度的第四期森林計畫；日本限制俄羅斯木材進口；12 月縣議會通過促進縣產木材利用的條例（見<a href=\"woodfirst.html\">用木之道</a>）。" } },
          { year:"2023",
              era:{ en:"Reiwa 5", ja:"令和五年", zh:"令和五年" },
              title:{ en:"Pollen, clean wood and a geothermal kiln", ja:"花粉対策、クリーンウッド法改正、地熱乾燥", zh:"花粉對策、合法木材法修正、地熱乾燥" },
              jp:"花粉症対策",
              text:{
                en:"The Gifu timber ordinance takes effect in April. The government announces a thirty-year plan to halve sugi pollen by cutting and replanting; the Clean Wood Act is amended in May; and Hida Sangyō opens a factory at Tochio in Okuhida that dries wood with geothermal heat.",
                ja:"四月、岐阜県の県産材条例が施行される。政府は伐って植え替えることでスギ花粉を三十年で半減させる計画を打ち出し、五月にクリーンウッド法が改正され、飛騨産業は奥飛騨の栃尾に地熱で木材を乾かす工場を開く。",
                zh:"4 月，岐阜縣的縣產材條例施行。政府宣布以砍伐與改植在三十年內讓柳杉花粉減半的計畫；5 月《合法木材法》修正；飛驒產業在奧飛驒的栃尾開設以地熱乾燥木材的工廠。" } },
          { year:"2024", title:{en:"Sake on UNESCO's list",ja:"酒造りのユネスコ記載",zh:"釀酒列入名錄"},
            text:{en:"UNESCO inscribes the traditional knowledge and skills of sake-making with kōji mould in Japan; the national forest environment tax begins.",ja:"ユネスコが日本の伝統的酒造りを記載する。国の森林環境税が始まる。",zh:"聯合國教科文組織將日本傳統麴菌釀酒技藝列入名錄；國家森林環境稅開始徵收。"} },
          { year:"2024",
              era:{ en:"Reiwa 6", ja:"令和六年", zh:"令和六年" },
              title:{ en:"A national forest tax", ja:"森林環境税の課税開始", zh:"國家森林環境稅開徵" },
              jp:"森林環境税",
              text:{
                en:"From FY2024 every resident of Japan pays a forest environment tax of ¥1,000 a year. Wood self-sufficiency reaches 42.5%; forestry is opened to foreign workers under the Specified Skilled Worker visa; and the prefecture opens satellite wood-play rooms in Nakatsugawa and Takayama (see <a href=\"policy.html\">Forest Law &amp; Policy</a>).",
                ja:"二〇二四年度から、日本のすべての住民が年1,000円の森林環境税を納める。木材自給率は42.5%に達し、林業が在留資格「特定技能」の対象に加えられ、県は中津川と高山に木育の拠点を開く（<a href=\"policy.html\">森林の法と政策</a>参照）。",
                zh:"自 2024 年度起，日本全體住民每年繳納 1,000 日圓的森林環境稅。木材自給率達 42.5%；林業被納入「特定技能」在留資格的適用範圍；岐阜縣在中津川與高山開設木育據點（見<a href=\"policy.html\">森林法規與政策</a>）。" } },
          { year:"2025",
              era:{ en:"Reiwa 7", ja:"令和七年", zh:"令和七年" },
              title:{ en:"Sacred timber felled in Kashimo", ja:"裏木曽御用材伐採式", zh:"加子母伐採御用材" },
              jp:"第六十三回式年遷宮",
              text:{
                en:"The amended Clean Wood Act applies from 1 April. For the 63rd Ise rebuilding, first felling is held at Agematsu on 3 June, and on 5 June two hinoki are felled by axe in the Ura-Kiso national forest at Kashimo, reaching Ise on 9 and 10 June. CITES meets at Samarkand from 24 November to 5 December (see <a href=\"felling.html\">Felling &amp; Extraction</a>).",
                ja:"四月一日、改正クリーンウッド法が施行される。第六十三回式年遷宮のため、六月三日に上松で御杣始祭が、六月五日には加子母の裏木曽国有林で二本のヒノキが斧で伐られ、九日と十日に伊勢へ着く。ワシントン条約の締約国会議が十一月二十四日から十二月五日までサマルカンドで開かれる（<a href=\"felling.html\">伐倒と搬出</a>参照）。",
                zh:"4 月 1 日，修正後的《合法木材法》施行。為第 63 回伊勢式年遷宮，6 月 3 日於上松舉行首伐祭典，6 月 5 日在加子母的裏木曾國有林以斧頭伐倒兩株扁柏，並於 6 月 9 日與 10 日運抵伊勢。CITES 締約方大會 11 月 24 日至 12 月 5 日在撒馬爾罕召開（見<a href=\"felling.html\">伐倒與集運</a>）。" } },
          { year:"2026",
              era:{ en:"Reiwa 8", ja:"令和八年", zh:"令和八年" },
              title:{ en:"Pulling the timber, closing a plan", ja:"お木曳と計画の締めくくり", zh:"御木曳與計畫收尾" },
              jp:"お木曳",
              text:{
                en:"New CITES rules for pernambuco bows apply from March. Takayama's furniture makers show new work on 17–21 June; the people of Ise pull the new shrine timber into the precincts in the summer, to be repeated in 2027 before the transfer of the deity in 2033; flights from Taoyuan to Toyama resume on 20 August; and FY2026 closes Gifu's fourth forest plan, with the EU deforestation rules due to apply from 30 December.",
                ja:"三月からペルナンブコの弓に関するワシントン条約の新しい規則が適用される。高山の家具メーカーは六月十七〜二十一日に新作を披露し、夏には伊勢の人々が新しい御用材を神域へ曳き入れる（二〇二七年にも行われ、二〇三三年の遷御へ続く）。八月二十日に桃園〜富山便が再開し、二〇二六年度で岐阜県の第四期森林づくり計画が締めくくられる。EUの森林破壊防止規則は十二月三十日から適用される予定である。",
                zh:"自 3 月起，有關巴西蘇木（pernambuco）琴弓的 CITES 新規定生效。高山家具業者於 6 月 17 至 21 日發表新作；夏季，伊勢居民將新的御用材拖入神域（2027 年將再舉行一次，並迎向 2033 年的遷御）；8 月 20 日桃園—富山航線復航；2026 年度為岐阜縣第四期森林計畫畫下句點，而歐盟《零毀林法規》預定自 12 月 30 日起適用。" } },
          { year:"2033", title:{en:"The next rebuilding",ja:"次の遷宮",zh:"下一次遷宮"},
            text:{en:"The sixty-third rebuilding of the Ise shrines is due, in part with Gifu hinoki.",ja:"伊勢の神宮の第六十三回の遷宮が予定され、その木の一部は岐阜の檜である。",zh:"伊勢神宮第六十三次遷宮預定舉行，所用木材有一部分是岐阜的檜木。"} }
        ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry Agency (Annual Report on Forest and Forestry; forest environment tax; wood-use law); Gifu Prefecture; CITES Secretariat; Ise Jingū (63rd Sengū schedule); Takayama City; company histories.",
            ja:"出典：林野庁（森林・林業白書、森林環境税、木材利用促進法）、岐阜県、ワシントン条約事務局、伊勢神宮（第六十三回式年遷宮の日程）、高山市、各社の沿革。",
            zh:"資料來源：林野廳（森林・林業白皮書、森林環境稅、木材利用促進法）；岐阜縣；CITES 秘書處；伊勢神宮（第 63 回式年遷宮日程）；高山市；各公司沿革。" } }
      ]
    },
    { t:"section",
      id:"taiwan-line",
      title:{ en:"Taiwan alongside (1895–2026)", ja:"台湾の年表（一八九五〜二〇二六年）", zh:"並列的台灣（1895–2026 年）" },
      jp:"台湾",
      body:[
        { t:"p",
          text:{
            en:"The hinoki of Alishan and Taipingshan belongs in a chronology of Gifu wood: it was logged by the same administration that ran the imperial forests of Kiso, it stands in the great gate of the Meiji shrine, and the questions Taiwan now faces — how to rebuild a timber economy from plantations — are the questions Gifu has been answering for thirty years (see <a href=\"taiwan.html\">Wood in Taiwan</a>).",
            ja:"阿里山と太平山のヒノキは岐阜の木の年表にふさわしい。木曽の御料林を治めたのと同じ行政がそれを伐り、明治神宮の大鳥居にいまも立ち、台湾がいま直面する問い——人工林から木材の経済をどう立て直すか——は、岐阜が三十年かけて答えてきた問いでもあるからである（<a href=\"taiwan.html\">台湾と木</a>参照）。",
            zh:"阿里山與太平山的檜木理應寫進岐阜的木之年表：採伐它們的，是與管理木曾御料林同一套行政體系；它們至今仍立在明治神宮的大鳥居上；而台灣如今面對的問題——如何從人工林重建木材經濟——正是岐阜三十年來一直在回答的問題（見<a href=\"taiwan.html\">台灣與木</a>）。" } },
        { t:"timeline",
          items:[
            { year:"1895–1896",
              title:{ en:"Surveys begin", ja:"森林調査の開始", zh:"森林調查展開" },
              jp:"台湾総督府",
              text:{
                en:"Japan takes Taiwan in 1895, and the Government-General begins surveying the island's forests the following year, 1896.",
                ja:"日本は一八九五年に台湾を領有し、総督府は翌一八九六年に島の森林調査を始める。",
                zh:"日本於 1895 年取得台灣，總督府於翌年 1896 年開始調查全島森林。" } },
            { year:"1906–1914",
              title:{ en:"The Alishan railway", ja:"阿里山森林鉄道", zh:"阿里山森林鐵路" },
              jp:"阿里山",
              text:{
                en:"Construction begins in July 1906; the first 66.6 kilometres from Chiayi to Erwanping open in December 1912, and in 1914 the line reaches Alishan itself, climbing by spirals and switchbacks. The Chiayi sawmill, with European and American machinery, is completed in December 1914.",
                ja:"一九〇六年七月に着工し、嘉義から二万坪までの66.6kmが一九一二年十二月に開通、一九一四年にはループと折り返しで登って阿里山に達する。欧米の機械を備えた嘉義製材所は一九一四年十二月に完成した。",
                zh:"1906 年 7 月動工；嘉義至二萬坪的首段 66.6 公里於 1912 年 12 月通車，1914 年以螺旋與之字形折返路線登上阿里山。配備歐美機械的嘉義製材所於 1914 年 12 月落成。" } },
            { year:"1913",
              title:{ en:"Planting begins", ja:"造林の開始", zh:"開始造林" },
              jp:"造林",
              text:{
                en:"Reforestation begins alongside the logging; by one estimate Taiwan meets 32 per cent of its own timber needs in 1928 and 72 per cent by 1941.",
                ja:"伐採と並行して造林が始まる。ある推計では、台湾の木材自給率は一九二八年に32%、一九四一年には72%に達した。",
                zh:"造林與採伐同步展開；據一項估計，台灣的木材自給率在 1928 年為 32%，到 1941 年達 72%。" } },
            { year:"1914–1941",
              title:{ en:"Cypress for Japan", ja:"日本へ渡った檜", zh:"輸往日本的檜木" },
              jp:"阿里山材",
              text:{
                en:"Alishan timber is sold to Japan from 1914. About four-fifths is used within Taiwan, but on average about 30 per cent goes to Japan between 1916 and 1941, for shrines, temples, navy yards and railways.",
                ja:"阿里山材は一九一四年から日本へ売られる。約五分の四は台湾内で使われたが、一九一六〜一九四一年には平均約30%が日本へ渡り、神社、寺院、海軍工廠、鉄道に用いられた。",
                zh:"阿里山木材自 1914 年起銷往日本。約五分之四在台灣島內使用，但 1916 至 1941 年間平均約 30% 運往日本，用於神社、寺院、海軍工廠與鐵路。" } },
            { year:"1915–1920",
              title:{ en:"The Meiji shrine", ja:"明治神宮", zh:"明治神宮" },
              jp:"大鳥居",
              text:{
                en:"The Meiji shrine in Tokyo is built with Alishan cypress, and its great gate of 1920 is made from a Taiwanese cypress about 1,200 years old. In the north-east, the Taipingshan forests of Yilan are logged from 1915.",
                ja:"東京の明治神宮が阿里山の檜で建てられ、一九二〇年の大鳥居は樹齢約千二百年の台湾の檜でつくられる。北東部では一九一五年から宜蘭の太平山の森が伐られる。",
                zh:"東京明治神宮以阿里山檜木興建，1920 年的大鳥居用的是一株樹齡約 1,200 年的台灣檜木。東北部宜蘭的太平山森林則自 1915 年開始採伐。" } },
            { year:"1921–1924",
              title:{ en:"Taipingshan's railway", ja:"太平山の運材線", zh:"太平山運材鐵路" },
              jp:"羅東",
              text:{
                en:"A 19.36-kilometre forest line from Tuchang to Tiansongpi is finished in 1921 and extended in 1924, carrying timber down to Luodong on the Lanyang plain.",
                ja:"土場から天送埤までの19.36kmの森林鉄道が一九二一年に完成し、一九二四年に延長されて、材を蘭陽平野の羅東へ運ぶ。",
                zh:"土場至天送埤、全長 19.36 公里的森林鐵路於 1921 年完工，1924 年延伸，將木材運下山至蘭陽平原的羅東。" } },
            { year:"1936",
              title:{ en:"Hinokitiol", ja:"ヒノキチオール", zh:"檜木醇" },
              jp:"野副鉄男",
              text:{
                en:"At Taihoku Imperial University in Taipei, Nozoe Tetsuo isolates hinokitiol from the oil of Taiwan hinoki — a compound present only in traces in Japanese hinoki.",
                ja:"台北帝国大学の野副鉄男が台湾ヒノキの油からヒノキチオールを単離する。日本のヒノキにはごく微量しか含まれない化合物である。",
                zh:"台北帝國大學的野副鐵男從台灣扁柏油中分離出檜木醇——這種化合物在日本扁柏中僅有微量。" } },
            { year:"1945–1963",
              title:{ en:"Harder cutting, then an end at Alishan", ja:"伐採の加速と阿里山の終わり", zh:"加速採伐與阿里山的終結" },
              jp:"林務局",
              text:{
                en:"After 1945 the new government's Forestry Bureau takes over the three great forests and their railways and, through the decades of reconstruction, cuts harder than before. Logging at Alishan stops in 1963, and the Chiayi sawmill closes the same year.",
                ja:"一九四五年以後、新しい政府の林務局が三大林場と鉄道を引き継ぎ、復興の数十年に以前にも増して伐った。阿里山の伐採は一九六三年に止み、同じ年に嘉義製材所も閉じた。",
                zh:"1945 年後，新政府的林務局接收三大林場及其鐵路，在戰後重建的數十年間砍伐得比以往更兇。阿里山的伐木於 1963 年停止，嘉義製材所也在同年關閉。" } },
            { year:"1966–1975",
              title:{ en:"A new gate for Tokyo", ja:"大鳥居の再建", zh:"東京的新鳥居" },
              jp:"丹大山",
              text:{
                en:"The Meiji shrine's gate is struck by lightning in 1966. Its replacement, completed on 23 December 1975, is cut from a Taiwan hinoki about 1,500 years old found on Dandashan in the central mountains.",
                ja:"明治神宮の大鳥居は一九六六年に落雷を受ける。一九七五年十二月二十三日に完成した新しい鳥居は、中央山脈の丹大山で見つかった樹齢約千五百年の台湾ヒノキからつくられた。",
                zh:"明治神宮大鳥居於 1966 年遭雷擊。1975 年 12 月 23 日完成的新鳥居，取材自中央山脈丹大山一株樹齡約 1,500 年的台灣扁柏。" } },
            { year:"1971–2007",
              title:{ en:"Guitars in Kaohsiung", ja:"高雄のギター工場", zh:"高雄的吉他工廠" },
              jp:"ヤマハ",
              text:{
                en:"Yamaha makes guitars on a large scale at its Kaohsiung factory from 1971 to 2007; some of its former workers now build by hand — a parallel to the workshops of Kani and Sakashita (see <a href=\"guitarindustry.html\">Japan's Guitar Industry</a>).",
                ja:"ヤマハは一九七一年から二〇〇七年まで高雄の工場でギターを大量に生産した。元従業員のなかには、いま手工で製作する人もいる。可児と坂下の工房と重なる歩みである（<a href=\"guitarindustry.html\">日本のギター産業</a>参照）。",
                zh:"山葉（Yamaha）自 1971 年至 2007 年在高雄工廠大量生產吉他；部分前員工如今以手工製琴——與可兒、坂下的工坊遙相呼應（見<a href=\"guitarindustry.html\">日本的吉他產業</a>）。" } },
            { year:"1978–1982",
              title:{ en:"The lines close", ja:"運材線の廃止", zh:"運材線停駛" },
              jp:"太平山",
              text:{
                en:"By 1978 all the Alishan forestry branch lines have closed, and in 1982 production ends at Taipingshan. The mountain railways are turned over to passengers and visitors.",
                ja:"一九七八年までに阿里山の林業支線はすべて廃止され、一九八二年には太平山の生産が終わる。山の鉄道は旅客と観光の用に移った。",
                zh:"至 1978 年，阿里山的林業支線全數停駛；1982 年太平山停止生產。山區鐵路轉為載運旅客與遊客。" } },
            { year:"1991",
              title:{ en:"Natural forests closed", ja:"天然林伐採の禁止", zh:"禁伐天然林" },
              jp:"天然林",
              text:{
                en:"After a decade of public pressure, Taiwan bans the logging of its natural forests altogether. The old sacred tree of Alishan, a red cypress said to be about 3,000 years old, collapses in heavy rain in 1997.",
                ja:"十年に及ぶ世論の高まりを受け、台湾は天然林の伐採を全面的に禁じる。樹齢約三千年といわれた阿里山の紅檜の神木は、一九九七年に豪雨で倒れた。",
                zh:"經過十年的民意壓力，台灣全面禁伐天然林。據稱樹齡約 3,000 年的阿里山紅檜神木，於 1997 年在豪雨中倒下。" } },
            { year:"2002–2004",
              title:{ en:"Sawmills become heritage", ja:"製材所から文化財へ", zh:"製材所成為文化資產" },
              jp:"羅東林業文化園区",
              text:{
                en:"The Chiayi sawmill is designated a historic site in 2002, and in 2004 the old Luodong timber yard reopens as the Luodong Forestry Culture Park, with its log pond, station and a stretch of forest railway.",
                ja:"嘉義製材所は二〇〇二年に古跡に指定され、二〇〇四年には羅東の旧貯木場が、貯木池、駅、森林鉄道の一部を残す羅東林業文化園区として生まれ変わる。",
                zh:"嘉義製材所於 2002 年被指定為古蹟；2004 年，羅東舊貯木場以保留貯木池、車站與一段森林鐵路的羅東林業文化園區重新開放。" } },
            { year:"2009",
              title:{ en:"Hida furniture in Taiwan", ja:"台湾での商標登録", zh:"飛驒家具在台灣註冊商標" },
              jp:"飛騨の家具",
              text:{
                en:"In May the Hida furniture makers register their collective trademark in Taiwan, a year before China, to protect the name in an export market.",
                ja:"五月、飛騨の家具メーカーは中国より一年早く台湾で団体商標を登録し、輸出市場でその名を守った。",
                zh:"5 月，飛驒家具業者比中國早一年在台灣註冊團體商標，以在外銷市場保護品牌名稱。" } },
            { year:"2017",
              title:{ en:"The first year of domestic timber", ja:"国産材元年", zh:"國產材元年" },
              jp:"国産材",
              text:{
                en:"Taiwan's Forestry Bureau calls 2017 the “first year of domestic timber” and sets out to rebuild a timber economy from its plantations of sugi, Taiwania, China fir and broadleaves.",
                ja:"台湾の林務局は二〇一七年を「国産材元年」と呼び、スギ、タイワンスギ、コウヨウザン、広葉樹の人工林から木材の経済を立て直そうとする。",
                zh:"台灣林務局將 2017 年定為「國產材元年」，著手以柳杉、台灣杉、杉木與闊葉樹人工林重建木材經濟。" } },
            { year:"2019",
              title:{ en:"A railway as landscape", ja:"文化的景観となった鉄道", zh:"鐵路成為文化景觀" },
              jp:"重要文化景観",
              text:{
                en:"In July the Alishan Forest Railway becomes Taiwan's first nationally designated important cultural landscape, and the Chiayi sawmill opens to the public.",
                ja:"七月、阿里山森林鉄道が台湾で最初の国指定の重要文化景観となり、嘉義製材所が一般に公開される。",
                zh:"7 月，阿里山林業鐵路成為台灣第一處國定重要文化景觀，嘉義製材所也對外開放。" } },
            { year:"2023",
              title:{ en:"A new agency; 1.47 per cent", ja:"林業及自然保育署と自給率1.47%", zh:"林業及自然保育署；1.47%" },
              jp:"自給率",
              text:{
                en:"On 1 August the Forestry Bureau is reorganised as the Forestry and Nature Conservation Agency. Taiwan's timber self-sufficiency is put at 1.47 per cent, against 42.5 per cent for Japan the following year, and Taiwan is the largest source of Gifu's foreign guests.",
                ja:"八月一日、林務局は林業及自然保育署に改組される。台湾の木材自給率は1.47%とされ、翌年の日本の42.5%と対照をなす。台湾は岐阜を訪れる外国人客の最大の送り出し元である。",
                zh:"8 月 1 日，林務局改制為林業及自然保育署。台灣木材自給率估計為 1.47%，與日本翌年的 42.5% 形成對比；台灣則是岐阜外國旅客的最大來源。" } },
            { year:"2025–2026",
              title:{ en:"Desks of domestic wood", ja:"国産材の机と椅子", zh:"國產材課桌椅" },
              jp:"国産材",
              text:{
                en:"From June 2025 nearly 8,000 school desks and chairs of domestic timber are placed in schools by November; in December 2025 the agency says self-sufficiency is still under 3 per cent and aims for 5 per cent by 2028. From August 2026 China Airlines flies Taoyuan–Toyama again, the shortest way to Hida.",
                ja:"二〇二五年六月からの奨励策で、十一月までに国産材の学校用机・椅子約八千組が教室に入る。二〇二五年十二月、同署は自給率がなお3%未満だとし、二〇二八年までに5%をめざす。二〇二六年八月からは中華航空の桃園〜富山便が再開し、飛騨への最短路となる。",
                zh:"自 2025 年 6 月起的獎勵方案，到 11 月已將近 8,000 套國產材課桌椅送進學校；2025 年 12 月，林保署表示自給率仍低於 3%，目標在 2028 年達到 5%。2026 年 8 月起，中華航空桃園—富山航線復航，成為前往飛驒的最短路徑。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Forestry and Nature Conservation Agency (Taiwan); Legislative Yuan Budget Center; Central News Agency; Story Studio (Alishan timber sales); Meiji Jingū; Toyama Airport.",
            ja:"出典：台湾・林業及自然保育署、立法院予算中心、中央通訊社、故事StoryStudio（阿里山材の販売）、明治神宮、富山空港。",
            zh:"資料來源：林業及自然保育署；立法院預算中心；中央通訊社；故事 StoryStudio（阿里山木材銷售）；明治神宮；富山機場。" } }
      ] },
    { t:"related", items:[
      { href:"history.html", why:{ en:"The same story told as prose.", ja:"同じ物語を文章で。", zh:"以文字講述同一段歷史。" } },
      { href:"people.html", why:{ en:"The people behind the dates.", ja:"年の背後の人々。", zh:"年代背後的人物。" } },
      { href:"figures.html", why:{ en:"Every diagram in the book.", ja:"本書のすべての図版。", zh:"本書所有圖表。" } },
      { href:"sources.html", why:{ en:"Where the dates come from.", ja:"年の出どころ。", zh:"年代的出處。" } }
    ] }
  ]
};

/* ---- -------------------------------------------- tables */
GIFU.pages["tables"] = {
  kicker: { en:"Reference · 08", ja:"資料 · 08", zh:"資料 · 08" },
  title:  { en: "Reference Tables", ja: "早見表", zh: "速查表" },
  jp: "数字と一覧",
  lede: {
    en: "The numbers and lists of this book in one place: the prefecture at a glance, its rivers and peaks, its heritage listings and designated crafts, its preserved townscapes, its festival year and the old measures that still name a serving of sake. Every figure carries its year and source here as on the page it comes from, and each table links back to that page.",
    ja: "本書の数字と一覧を一か所に集めた。県の概要、川と山、遺産の登録と指定工芸品、保存された町並み、祭りの一年、そしていまも酒の一杯を名づける古い量の単位。どの数字も、出どころの頁と同じく年と出典を添え、各表はその頁へつないである。",
    zh: "把本書的數字與清單集中在一處：全縣概況、河川與山峰、遺產登錄與指定工藝品、保存的町並、祭典的一年，以及至今仍用來稱呼一杯酒的古老量制。每個數字都與其出處頁面一樣附上年份與來源，每張表也都連回該頁。"
  },
  body: [
    { t:"section", id:"glance",
      title:{ en:"The prefecture at a glance", ja:"県の概要", zh:"全縣概況" }, jp:"概要",
      body:[
        { t:"table",
          cols:[{en:"Measure",ja:"項目",zh:"項目"},{en:"Value",ja:"値",zh:"數值"},{en:"Year and source",ja:"年・出典",zh:"年份與來源"}],
          rows:[
            [{en:"Area",ja:"面積",zh:"面積"},{en:"10,621 km² (7th of 47)",ja:"10,621 km²（全国7位）",zh:"10,621 km²（全國第 7）"},{en:"Gifu Prefecture, 2025",ja:"岐阜県、2025年",zh:"岐阜縣，2025 年"}],
            [{en:"Population",ja:"人口",zh:"人口"},{en:"≈ 1.95 million; 184 per km²",ja:"約195万人、1 km²あたり184人",zh:"約 195 萬人；每 km² 184 人"},{en:"Gifu Prefecture, 2025",ja:"岐阜県、2025年",zh:"岐阜縣，2025 年"}],
            [{en:"Population peak",ja:"人口の頂点",zh:"人口高峰"},{en:"≈ 2.11 million",ja:"約211万人",zh:"約 211 萬人"},{en:"Census, 2000",ja:"国勢調査、2000年",zh:"國勢調查，2000 年"}],
            [{en:"Forest",ja:"森林",zh:"森林"},{en:"861,169 ha; 81% of the land (2nd after Kōchi)",ja:"861,169 ha、県土の81%（高知県に次ぐ2位）",zh:"861,169 ha；占土地 81%（僅次於高知）"},{en:"Forestry Agency, 31 March 2022",ja:"林野庁、2022年3月31日",zh:"林野廳，2022 年 3 月 31 日"}],
            [{en:"Highest point",ja:"最高地点",zh:"最高點"},{en:"Oku-Hotakadake, 3,190 m",ja:"奥穂高岳 3,190 m",zh:"奧穗高岳 3,190 m"},{en:"—",ja:"—",zh:"—"}],
            [{en:"Lowest land",ja:"最低地",zh:"最低地"},{en:"Below sea level, Kaizu",ja:"海面下（海津市）",zh:"海平面以下（海津市）"},{en:"—",ja:"—",zh:"—"}],
            [{en:"Municipalities",ja:"市町村",zh:"市町村"},{en:"42: 21 cities, 19 towns, 2 villages",ja:"42：21市・19町・2村",zh:"42：21 市、19 町、2 村"},{en:"Gifu Prefecture",ja:"岐阜県",zh:"岐阜縣"}],
            [{en:"Largest municipality",ja:"最大の市町村",zh:"最大的市町村"},{en:"Takayama, 2,178 km², the largest in Japan",ja:"高山市 2,178 km²（全国最大）",zh:"高山市 2,178 km²（全國最大）"},{en:"Takayama City",ja:"高山市",zh:"高山市"}],
            [{en:"Hydroelectric potential",ja:"包蔵水力",zh:"可開發水力"},{en:"13,861 GWh a year (1st)",ja:"年13,861 GWh（全国1位）",zh:"每年 13,861 GWh（全國第 1）"},{en:"Agency for Natural Resources and Energy",ja:"資源エネルギー庁",zh:"資源能源廳"}]
          ] },
        { t:"tiny", text:{
          en:"See <a href=\"index.html\">Overview</a>, <a href=\"forests.html\">Gifu's Forests</a> and <a href=\"landform.html\">Mountains, Plains &amp; Rock</a>.",
          ja:"<a href=\"index.html\">概観</a>、<a href=\"forests.html\">岐阜の森林</a>、<a href=\"landform.html\">山と平野と岩</a>を参照。",
          zh:"見<a href=\"index.html\">總覽</a>、<a href=\"forests.html\">岐阜的森林</a>與<a href=\"landform.html\">山、平原與岩石</a>。" } }
      ]
    },
    { t:"section", id:"rivers",
      title:{ en:"The three rivers", ja:"木曽三川", zh:"木曾三川" }, jp:"河川",
      body:[
        { t:"table",
          caption:{en:"Length and basin area of the three rivers (Ministry of Land, Infrastructure, Transport and Tourism). See <a href=\"rivers.html\">Rivers &amp; Water</a>.",ja:"三川の長さと流域面積（国土交通省）。<a href=\"rivers.html\">川と水</a>を参照。",zh:"三條河川的長度與流域面積（國土交通省）。見<a href=\"rivers.html\">河川與水</a>。"},
          cols:[{en:"River",ja:"川",zh:"河川"},{en:"Length",ja:"延長",zh:"長度"},{en:"Basin",ja:"流域面積",zh:"流域面積"},{en:"Source",ja:"源流",zh:"源頭"}],
          numCols:[1,2],
          rows:[
            [{en:"Kiso",ja:"木曽川",zh:"木曾川"},"229 km","5,275 km²",{en:"Mount Hachimori, Nagano",ja:"鉢盛山（長野県）",zh:"鉢盛山（長野縣）"}],
            [{en:"Nagara",ja:"長良川",zh:"長良川"},"166 km","1,985 km²",{en:"Dainichigatake, Gujō",ja:"大日ヶ岳（郡上市）",zh:"大日岳（郡上市）"}],
            [{en:"Ibi",ja:"揖斐川",zh:"揖斐川"},"121 km","1,840 km²",{en:"Kanmuriyama, Ibigawa",ja:"冠山（揖斐川町）",zh:"冠山（揖斐川町）"}]
          ] }
      ]
    },
    { t:"section", id:"peaks",
      title:{ en:"High peaks", ja:"高い山", zh:"高峰" }, jp:"山岳",
      body:[
        { t:"table",
          caption:{en:"Some of the high peaks on or near Gifu's borders. See <a href=\"mountains.html\">Sacred Peaks</a>.",ja:"岐阜の県境やその近くの高峰の一部。<a href=\"mountains.html\">霊峰と山岳信仰</a>を参照。",zh:"岐阜縣界上或附近的部分高峰。見<a href=\"mountains.html\">靈峰與山岳信仰</a>。"},
          cols:[{en:"Peak",ja:"山",zh:"山峰"},{en:"Height",ja:"標高",zh:"海拔"},{en:"Note",ja:"備考",zh:"備註"}],
          numCols:[1],
          rows:[
            [{en:"Oku-Hotakadake",ja:"奥穂高岳",zh:"奧穗高岳"},"3,190 m",{en:"Highest point in Gifu; third-highest in Japan",ja:"県内最高地点、日本第三位",zh:"岐阜最高點；日本第三高峰"}],
            [{en:"Ontake",ja:"御嶽山",zh:"御嶽山"},"3,067 m",{en:"Nagano border above Gero; erupted 2014",ja:"下呂の上の長野県境、2014年噴火",zh:"下呂上方的長野縣界；2014 年噴發"}],
            [{en:"Norikura (Kengamine)",ja:"乗鞍岳（剣ヶ峰）",zh:"乘鞍岳（劍峰）"},"3,026 m",{en:"A road reaches 2,702 m at Tatamidaira",ja:"畳平（2,702 m）まで道路が通じる",zh:"道路可達疊平（2,702 m）"}],
            [{en:"Kasagatake",ja:"笠ヶ岳",zh:"笠岳"},"2,898 m",{en:"Above Oku-Hida",ja:"奥飛騨の上",zh:"奧飛驒上方"}],
            [{en:"Hakusan",ja:"白山",zh:"白山"},"2,702 m",{en:"Ishikawa border; one of the three sacred mountains of Japan",ja:"石川県境、日本三霊山の一つ",zh:"石川縣界；日本三靈山之一"}]
          ] }
      ]
    },
    { t:"section", id:"heritage",
      title:{ en:"Heritage listings", ja:"遺産の登録", zh:"遺產登錄" }, jp:"世界遺産 · 無形文化遺産 · 農業遺産",
      body:[
        { t:"table",
          caption:{en:"International and national recognitions discussed in this book. See <a href=\"register.html\">Crafts at a Glance</a>.",ja:"本書で扱う国際的・全国的な登録と認定。<a href=\"register.html\">工芸一覧</a>を参照。",zh:"本書所論及的國際與全國性登錄與認定。見<a href=\"register.html\">工藝一覽</a>。"},
          cols:[{en:"What",ja:"対象",zh:"對象"},{en:"Listing",ja:"登録・認定",zh:"登錄或認定"},{en:"Year",ja:"年",zh:"年份"}],
          numCols:[2],
          rows:[
            [{en:"Shirakawa-gō (with Gokayama)",ja:"白川郷（五箇山とともに）",zh:"白川鄉（與五箇山一同）"},{en:"UNESCO World Heritage",ja:"ユネスコ世界遺産",zh:"聯合國教科文組織世界遺產"},"1995"],
            [{en:"Honminoshi paper",ja:"本美濃紙",zh:"本美濃紙"},{en:"Important Intangible Cultural Property; UNESCO (Washi)",ja:"重要無形文化財、ユネスコ（和紙）",zh:"重要無形文化財；聯合國教科文組織（和紙）"},"1969 · 2014"],
            [{en:"Ayu of the Nagara",ja:"清流長良川の鮎",zh:"清流長良川的香魚"},{en:"Globally Important Agricultural Heritage System",ja:"世界農業遺産",zh:"世界農業遺產"},"2015"],
            [{en:"Takayama, Furukawa and Ōgaki float festivals",ja:"高山・古川・大垣の祭り",zh:"高山、古川與大垣的祭典"},{en:"UNESCO (Yama, Hoko, Yatai)",ja:"ユネスコ（山・鉾・屋台行事）",zh:"聯合國教科文組織（山、鉾、屋台行事）"},"2016"],
            [{en:"The Hida takumi",ja:"飛騨の匠",zh:"飛驒工匠"},{en:"Japan Heritage story",ja:"日本遺産",zh:"日本遺產"},"2016"],
            [{en:"Gujō Odori; Kanzu no Kake-odori",ja:"郡上踊・寒水の掛踊",zh:"郡上舞；寒水掛舞"},{en:"UNESCO (Furyū-odori)",ja:"ユネスコ（風流踊）",zh:"聯合國教科文組織（風流舞）"},"2022"],
            [{en:"Sake-making with kōji mould",ja:"日本の伝統的酒造り",zh:"日本傳統麴菌釀酒"},{en:"UNESCO intangible heritage (national)",ja:"ユネスコ無形文化遺産（全国）",zh:"聯合國教科文組織非物質文化遺產（全國）"},"2024"]
          ] }
      ]
    },
    { t:"section", id:"crafts",
      title:{ en:"National traditional crafts", ja:"国の伝統的工芸品", zh:"國家傳統工藝品" }, jp:"伝統的工芸品",
      body:[
        { t:"table",
          caption:{en:"Gifu's six crafts designated under the national Traditional Craft Industries Act. See <a href=\"register.html\">Crafts at a Glance</a>.",ja:"国の伝統的工芸品産業振興法による岐阜の六品目。<a href=\"register.html\">工芸一覧</a>を参照。",zh:"依國家《傳統工藝品產業振興法》指定的岐阜六項工藝。見<a href=\"register.html\">工藝一覽</a>。"},
          cols:[{en:"Craft",ja:"品目",zh:"品項"},{en:"Where",ja:"産地",zh:"產地"},{en:"Designated",ja:"指定",zh:"指定"}],
          numCols:[2],
          rows:[
            [{en:"Hida Shunkei lacquerware",ja:"飛騨春慶",zh:"飛驒春慶"},{en:"Takayama, Hida",ja:"高山市・飛騨市",zh:"高山市、飛驒市"},"1975"],
            [{en:"Ichii ittōbori carving",ja:"一位一刀彫",zh:"一位一刀雕"},{en:"Takayama, Hida, Gero",ja:"高山市・飛騨市・下呂市",zh:"高山市、飛驒市、下呂市"},"1975"],
            [{en:"Mino ware",ja:"美濃焼",zh:"美濃燒"},{en:"Tajimi, Toki, Mizunami, Kani",ja:"多治見市・土岐市・瑞浪市・可児市",zh:"多治見市、土岐市、瑞浪市、可兒市"},"1978"],
            [{en:"Mino washi",ja:"美濃和紙",zh:"美濃和紙"},{en:"Mino",ja:"美濃市",zh:"美濃市"},"1985"],
            [{en:"Gifu lanterns",ja:"岐阜提灯",zh:"岐阜提燈"},{en:"Gifu city and around",ja:"岐阜市ほか",zh:"岐阜市及周邊"},"1995"],
            [{en:"Gifu wagasa umbrellas",ja:"岐阜和傘",zh:"岐阜和傘"},{en:"Gifu city (Kanō)",ja:"岐阜市（加納）",zh:"岐阜市（加納）"},{en:"most recent",ja:"最新",zh:"最新"}]
          ] }
      ]
    },
    { t:"section", id:"towns",
      title:{ en:"Preserved townscapes", ja:"重要伝統的建造物群保存地区", zh:"重要傳統建造物群保存地區" }, jp:"町並み",
      body:[
        { t:"table",
          caption:{en:"Gifu's national Important Preservation Districts for Groups of Traditional Buildings, in order of selection. See <a href=\"towns.html\">Old Towns</a>.",ja:"岐阜県の重要伝統的建造物群保存地区（選定順）。<a href=\"towns.html\">町並み</a>を参照。",zh:"岐阜縣的國家重要傳統建造物群保存地區（依選定順序）。見<a href=\"towns.html\">老街町並</a>。"},
          cols:[{en:"District",ja:"地区",zh:"地區"},{en:"Type",ja:"種別",zh:"類型"},{en:"Selected",ja:"選定",zh:"選定"}],
          numCols:[2],
          rows:[
            [{en:"Ogimachi, Shirakawa village",ja:"白川村荻町",zh:"白川村荻町"},{en:"Mountain village",ja:"山村集落",zh:"山村聚落"},"1976"],
            [{en:"Sanmachi, Takayama",ja:"高山市三町",zh:"高山市三町"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"1979"],
            [{en:"Honmachi, Iwamura (Ena)",ja:"恵那市岩村町本通り",zh:"惠那市岩村町本通"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"1998"],
            [{en:"Mino-machi, Mino",ja:"美濃市美濃町",zh:"美濃市美濃町"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"1999"],
            [{en:"Shimo-ninomachi & Ōshinmachi, Takayama",ja:"高山市下二之町大新町",zh:"高山市下二之町大新町"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"2004"],
            [{en:"Kitamachi, Gujō-Hachiman",ja:"郡上市郡上八幡北町",zh:"郡上市郡上八幡北町"},{en:"Castle town",ja:"城下町",zh:"城下町"},"2012"]
          ] }
      ]
    },
    { t:"section", id:"calendar",
      title:{ en:"The festival year", ja:"祭りの一年", zh:"祭典的一年" }, jp:"年中行事",
      body:[
        { t:"table",
          caption:{en:"Principal festivals and seasons. Dates are those usually observed; check each year. See <a href=\"festivals.html\">Festivals &amp; Floats</a>.",ja:"主な祭りと季節。日付は通例のもので、年ごとに確かめてほしい。<a href=\"festivals.html\">祭りと屋台</a>を参照。",zh:"主要祭典與季節。日期為慣例，請每年確認。見<a href=\"festivals.html\">祭典與屋台</a>。"},
          cols:[{en:"When",ja:"時期",zh:"時間"},{en:"What",ja:"行事",zh:"活動"},{en:"Where",ja:"場所",zh:"地點"}],
          rows:[
            [{en:"6 January",ja:"1月6日",zh:"1 月 6 日"},{en:"Nagataki Ennen",ja:"長滝の延年",zh:"長瀧延年"},{en:"Nagataki Hakusan Jinja, Gujō",ja:"郡上市・長滝白山神社",zh:"郡上市長瀧白山神社"}],
            [{en:"14–15 April",ja:"4月14〜15日",zh:"4 月 14–15 日"},{en:"Takayama festival (spring)",ja:"高山祭（春）",zh:"高山祭（春）"},{en:"Takayama",ja:"高山",zh:"高山"}],
            [{en:"19–20 April",ja:"4月19〜20日",zh:"4 月 19–20 日"},{en:"Furukawa festival",ja:"古川祭",zh:"古川祭"},{en:"Hida-Furukawa",ja:"飛騨古川",zh:"飛驒古川"}],
            [{en:"Weekend nearest 15 May",ja:"5月15日に近い土日",zh:"最接近 5 月 15 日的週末"},{en:"Ōgaki festival",ja:"大垣祭",zh:"大垣祭"},{en:"Ōgaki",ja:"大垣",zh:"大垣"}],
            [{en:"11 May – 15 October",ja:"5月11日〜10月15日",zh:"5 月 11 日至 10 月 15 日"},{en:"Cormorant fishing",ja:"鵜飼",zh:"鵜飼"},{en:"Gifu city; Oze, Seki",ja:"岐阜市・関市小瀬",zh:"岐阜市；關市小瀨"}],
            [{en:"Mid-July – early September",ja:"7月中旬〜9月上旬",zh:"7 月中旬至 9 月上旬"},{en:"Gujō Odori",ja:"郡上おどり",zh:"郡上舞"},{en:"Gujō-Hachiman",ja:"郡上八幡",zh:"郡上八幡"}],
            [{en:"9–10 October",ja:"10月9〜10日",zh:"10 月 9–10 日"},{en:"Takayama festival (autumn)",ja:"高山祭（秋）",zh:"高山祭（秋）"},{en:"Takayama",ja:"高山",zh:"高山"}],
            [{en:"October",ja:"10月",zh:"10 月"},{en:"Seki cutlery festival; Mino washi Akari Art Exhibition; doburoku festivals",ja:"関刃物まつり、美濃和紙あかりアート展、どぶろく祭",zh:"關刀具祭、美濃和紙燈光藝術展、濁酒祭"},{en:"Seki; Mino; Shirakawa-gō",ja:"関・美濃・白川郷",zh:"關、美濃、白川鄉"}]
          ] }
      ]
    },
    { t:"section", id:"sake-measures",
      title:{ en:"Measures of sake and rice", ja:"酒と米の単位", zh:"酒與米的單位" }, jp:"尺貫法",
      body:[
        { t:"table",
          caption:{en:"The volume measures of the masu, still used for sake and rice. Metric values are approximate. See <a href=\"masu.html\">The Masu of Ōgaki</a>.",ja:"枡の容量の単位。いまも酒と米に使われる。メートル法の値はおおよそ。<a href=\"masu.html\">大垣の枡</a>を参照。",zh:"枡的容量單位，至今仍用於酒與米。公制數值為概略值。見<a href=\"masu.html\">大垣的枡</a>。"},
          cols:[{en:"Unit",ja:"単位",zh:"單位"},{en:"Equals",ja:"換算",zh:"換算"},{en:"About",ja:"約",zh:"約"},{en:"Today",ja:"いま",zh:"今日"}],
          numCols:[2],
          rows:[
            [{en:"gō",ja:"合",zh:"合"},{en:"—",ja:"—",zh:"—"},"180 ml",{en:"One serving of sake; a small tokkuri",ja:"酒一杯、小さな徳利",zh:"一份酒；小德利"}],
            [{en:"shō",ja:"升",zh:"升"},{en:"10 gō",ja:"10合",zh:"10 合"},"1.8 L",{en:"The large sake bottle, isshōbin",ja:"一升瓶",zh:"一升瓶"}],
            [{en:"to",ja:"斗",zh:"斗"},{en:"10 shō",ja:"10升",zh:"10 升"},"18 L",{en:"A celebration cask of sake often holds four to",ja:"鏡開きの酒樽は四斗樽が多い",zh:"鏡開用的酒樽多為四斗樽"}],
            [{en:"koku",ja:"石",zh:"石"},{en:"10 to = 100 shō",ja:"10斗＝100升",zh:"10 斗＝100 升"},"180 L",{en:"The old unit of a domain's wealth in rice",ja:"藩の石高の単位",zh:"藩國以米計算財富的單位"}]
          ] }
      ]
    },
    { t:"section",
      id:"timber-measures",
      title:{ en:"Measures in the timber trade", ja:"木材の単位", zh:"木材交易的單位" },
      jp:"尺・寸・間・坪・石・才",
      body:[
        { t:"p",
          text:{
            en:"The shaku was fixed at exactly 10/33 of a metre in 1891, and its use in trade was phased out between 1959 and 1966. In the timber world it never quite went away: houses are still planned on a grid of ken and shaku, posts are ordered as “three-sun-five” or “four-sun”, and older dealers still think in koku and sai. The metric values below are calculated from the legal definition and rounded (see <a href=\"words.html\">The Words of Wood</a>).",
            ja:"尺は一八九一年に正確に三十三分の十メートルと定められ、取引での使用は一九五九年から一九六六年にかけて廃された。だが材木の世界からは消えきらなかった。家はいまも間と尺の格子で計画され、柱は「三寸五分」「四寸」で注文され、年配の業者は石や才で考える。下のメートル値は法定の定義から計算して丸めたものである（<a href=\"words.html\">木をめぐる言葉</a>参照）。",
            zh:"「尺」於 1891 年被精確定為 10/33 公尺，並於 1959 至 1966 年間退出交易使用。但在木材界它從未真正消失：房屋仍以「間」與「尺」的格網規劃，柱子仍以「三寸五分」、「四寸」下訂，老一輩的業者依然用「石」與「才」思考。下表公制數值依法定定義計算並四捨五入（見<a href=\"words.html\">圍繞著木的語言</a>）。" } },
        { t:"table",
          caption:{ en:"Length, area and volume in the traditional system", ja:"尺貫法の長さ・面積・体積", zh:"尺貫法的長度、面積與體積" },
          cols:[
            { en:"Unit", ja:"単位", zh:"單位" },
            { en:"Kanji", ja:"漢字", zh:"漢字" },
            { en:"Definition", ja:"定義", zh:"定義" },
            { en:"Metric", ja:"メートル法", zh:"公制" },
            { en:"Where it is used", ja:"使われる場面", zh:"使用場合" }
          ],
          keyCol:true,
          rows:[
            [
              "Bu",
              "分",
              { en:"1/10 sun", ja:"1/10寸", zh:"1/10 寸" },
              "3.03 mm",
              { en:"Board thickness; joinery tolerances", ja:"板厚、継手の逃げ", zh:"板厚、接合的公差" }
            ],
            [
              "Sun",
              "寸",
              { en:"1/10 shaku", ja:"1/10尺", zh:"1/10 尺" },
              "3.03 cm",
              { en:"Sections of posts and beams", ja:"柱や梁の断面", zh:"柱與樑的斷面" }
            ],
            [
              "Shaku",
              "尺",
              { en:"10/33 m", ja:"10/33 m", zh:"10/33 公尺" },
              "30.30 cm",
              { en:"Basic length; log and board lengths", ja:"基本の長さ、丸太や板の長さ", zh:"基本長度；原木與木板長度" }
            ],
            [
              "Jō",
              "丈",
              { en:"10 shaku", ja:"10尺", zh:"10 尺" },
              "3.03 m",
              { en:"Long timbers; heights of trees and buildings", ja:"長材、木や建物の高さ", zh:"長材；樹木與建築的高度" }
            ],
            [
              "Ken",
              "間",
              { en:"6 shaku", ja:"6尺", zh:"6 尺" },
              "1.818 m",
              { en:"Column spacing and room modules", ja:"柱間、部屋の単位", zh:"柱距與房間模組" }
            ],
            [
              "Tsubo",
              "坪",
              { en:"1 ken × 1 ken", ja:"1間×1間", zh:"1 間 × 1 間" },
              "3.306 m²",
              { en:"Floor area of houses; land", ja:"住宅の床面積、土地", zh:"住宅樓地板面積；土地" }
            ],
            [
              "Jō (tatami)",
              "畳",
              { en:"One mat; about half a tsubo", ja:"畳一枚、約半坪", zh:"一張榻榻米，約半坪" },
              "≈ 1.62 m²",
              { en:"Room sizes (“a six-mat room”)", ja:"部屋の広さ（「六畳間」）", zh:"房間大小（「六疊間」）" }
            ],
            [
              "Se",
              "畝",
              { en:"30 tsubo", ja:"30坪", zh:"30 坪" },
              "99.17 m²",
              { en:"Fields and small plots", ja:"田畑、小さな区画", zh:"田地與小塊土地" }
            ],
            [
              "Tan",
              "反",
              { en:"300 tsubo", ja:"300坪", zh:"300 坪" },
              "991.7 m²",
              { en:"Fields; forest in old records", ja:"田畑、古い記録の山林", zh:"田地；舊紀錄中的山林" }
            ],
            [
              "Chō",
              "町",
              { en:"3,000 tsubo", ja:"3,000坪", zh:"3,000 坪" },
              "0.992 ha",
              { en:"Forest areas in older statistics (≈ 1 ha)", ja:"古い統計の森林面積（約1ha）", zh:"舊統計中的森林面積（約 1 公頃）" }
            ],
            [
              "Sai",
              "才",
              { en:"1 sun × 1 sun × 12 shaku", ja:"1寸×1寸×12尺", zh:"1 寸 × 1 寸 × 12 尺" },
              "0.00334 m³",
              { en:"Sawn timber and boards", ja:"製材品、板", zh:"製材與木板" }
            ],
            [
              "Koku",
              "石",
              { en:"10 cubic shaku", ja:"10立方尺", zh:"10 立方尺" },
              "≈ 0.278 m³",
              {
                en:"Logs and sawn timber in older trade (≈ 83.3 sai)",
                ja:"古い取引の丸太・製材（約83.3才）",
                zh:"舊時交易的原木與製材（約 83.3 才）" }
            ],
            [
              "Shakujime",
              "尺〆",
              { en:"1 × 1 × 12 shaku = 12 cubic shaku", ja:"1尺×1尺×12尺＝12立方尺", zh:"1 × 1 × 12 尺 = 12 立方尺" },
              "≈ 0.334 m³",
              { en:"Log volume in older markets (= 100 sai)", ja:"古い市場の丸太材積（＝100才）", zh:"舊市場的原木材積（= 100 才）" }
            ],
            [
              "Rippō, rūbe",
              "立米",
              { en:"1 cubic metre", ja:"1立方メートル", zh:"1 立方公尺" },
              "1 m³",
              {
                en:"All modern statistics; ≈ 3.59 koku ≈ 299 sai",
                ja:"現代の統計すべて。約3.59石、約299才",
                zh:"所有現代統計；約 3.59 石、約 299 才" }
            ]
          ] },
        { t:"table",
          caption:{ en:"Tatami sizes by region (approximate)", ja:"地域による畳の大きさ（概数）", zh:"各地榻榻米尺寸（約略）" },
          cols:[
            { en:"Name", ja:"名称", zh:"名稱" },
            { en:"Size", ja:"寸法", zh:"尺寸" },
            { en:"Area", ja:"面積", zh:"面積" },
            { en:"Where", ja:"主な地域", zh:"主要地區" }
          ],
          keyCol:true,
          numCols:[2],
          rows:[
            [
              { en:"Kyōma", ja:"京間", zh:"京間" },
              "191 × 95.5 cm",
              "1.82 m²",
              { en:"Kansai, western Japan", ja:"関西、西日本", zh:"關西、西日本" }
            ],
            [
              { en:"Chūkyōma", ja:"中京間", zh:"中京間" },
              "182 × 91 cm",
              "1.66 m²",
              { en:"Nagoya, Gifu and the Tōkai region", ja:"名古屋、岐阜など東海地方", zh:"名古屋、岐阜等東海地區" }
            ],
            [
              { en:"Edoma", ja:"江戸間", zh:"江戶間" },
              "176 × 88 cm",
              "1.55 m²",
              { en:"Tokyo, eastern Japan", ja:"東京、東日本", zh:"東京、東日本" }
            ],
            [
              { en:"Danchima", ja:"団地間", zh:"團地間" },
              "170 × 85 cm",
              "1.45 m²",
              { en:"Post-war apartment blocks", ja:"戦後の集合住宅", zh:"戰後集合住宅" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Weights and Measures Act (1891) and Measurement Act (1951) as summarised in standard references; the book's Words of Wood page; Japan Tatami Association and estate-agents' display rules (1.62 m² per mat) for approximate tatami sizes.",
            ja:"出典：度量衡法（一八九一年）と計量法（一九五一年）に関する標準的な解説、本書「木をめぐる言葉」の頁、畳の業界団体と不動産の表示規約（畳一枚1.62m²）による畳の概寸。",
            zh:"資料來源：度量衡法（1891 年）與計量法（1951 年）的標準解說；本書〈圍繞著木的語言〉一頁；榻榻米業界團體與不動產廣告規約（每疊 1.62 平方公尺）所載的概略尺寸。" } }
      ] },
    { t:"section",
      id:"conversions",
      title:{ en:"Sun and shaku in today's timber", ja:"いまの材木のなかの寸と尺", zh:"今日木材中的寸與尺" },
      jp:"寸法の換算",
      body:[
        { t:"p",
          text:{
            en:"Modern Japanese timber is sold in millimetres, but the millimetres are rounded sun and shaku. A post of 3.5 sun (10.6 cm) became 105 mm; a length of 10 shaku (3.03 m) became 3 m. The 910 mm grid of the ordinary wooden house is three shaku, and the standard 910 × 1,820 mm sheet of plywood — “three-six” — is three shaku by six. This table translates the sizes you will hear into the sizes you will be invoiced for.",
            ja:"いまの日本の材木はミリで売られるが、そのミリは寸と尺を丸めたものである。三寸五分（10.6cm）の柱は105mmとなり、十尺（3.03m）の長さは3mとなった。ふつうの木造住宅の910mmグリッドは三尺であり、910×1,820mmの標準的な合板「サブロク」は三尺×六尺である。この表は、耳にする寸法を請求書の寸法に置きかえる。",
            zh:"日本現代木材以公釐販售，但這些公釐其實是四捨五入後的寸與尺。三寸五分（10.6 公分）的柱子成了 105 公釐，十尺（3.03 公尺）的長度成了 3 公尺。一般木造住宅的 910 公釐格網就是三尺，而 910 × 1,820 公釐的標準合板「三六板」正是三尺乘六尺。這張表把你聽到的尺寸，換成帳單上的尺寸。" } },
        { t:"table",
          caption:{ en:"Spoken sizes and their metric trade equivalents", ja:"口頭の寸法と取引上のメートル寸法", zh:"口語尺寸與交易用公制尺寸" },
          cols:[
            { en:"Spoken size", ja:"呼び", zh:"口語稱呼" },
            { en:"Exact metric", ja:"正確な換算", zh:"精確換算" },
            { en:"Trade size", ja:"取引寸法", zh:"交易尺寸" },
            { en:"Where you meet it", ja:"使われる部材", zh:"常見用途" }
          ],
          keyCol:true,
          rows:[
            [
              { en:"1 sun", ja:"一寸", zh:"一寸" },
              "30.3 mm",
              "30 mm",
              { en:"Studs (30 × 105 mm)", ja:"間柱（30×105mm）", zh:"間柱（30 × 105 公釐）" }
            ],
            [
              { en:"1 sun 5 bu", ja:"一寸五分", zh:"一寸五分" },
              "45.5 mm",
              "45 mm",
              { en:"Rafters, braces, joists", ja:"垂木、筋かい、根太", zh:"椽條、斜撐、擱柵" }
            ],
            [
              { en:"3 sun", ja:"三寸", zh:"三寸" },
              "90.9 mm",
              "90 mm",
              { en:"Floor sleepers, small posts", ja:"大引、小径の柱", zh:"地檻（大引）、小柱" }
            ],
            [
              { en:"3 sun 5 bu", ja:"三寸五分", zh:"三寸五分" },
              "106.1 mm",
              "105 mm",
              { en:"The standard house post", ja:"標準的な住宅の柱", zh:"標準住宅柱" }
            ],
            [
              { en:"4 sun", ja:"四寸", zh:"四寸" },
              "121.2 mm",
              "120 mm",
              { en:"Better posts and sills; many hinoki posts", ja:"上等な柱と土台、ヒノキ柱の多く", zh:"較高級的柱與土台；多數扁柏柱" }
            ],
            [
              { en:"5 sun", ja:"五寸", zh:"五寸" },
              "151.5 mm",
              "150 mm",
              { en:"Large posts; shallow beams", ja:"太い柱、せいの低い梁", zh:"粗柱；較淺的樑" }
            ],
            [
              { en:"3 shaku", ja:"三尺", zh:"三尺" },
              "909 mm",
              "910 mm",
              { en:"The house grid; the width of a sliding door", ja:"住宅のグリッド、引戸の幅", zh:"住宅格網；拉門寬度" }
            ],
            [
              { en:"6 shaku", ja:"六尺", zh:"六尺" },
              "1,818 mm",
              "1,820 mm",
              { en:"Plywood sheets; the length of a Tōkai tatami", ja:"合板、東海地方の畳の長さ", zh:"合板；東海地區榻榻米長度" }
            ],
            [
              { en:"10 shaku", ja:"十尺", zh:"十尺" },
              "3.03 m",
              "3 m",
              { en:"Posts; the commonest log length", ja:"柱、最も多い丸太の長さ", zh:"柱；最常見的原木長度" }
            ],
            [
              { en:"12 shaku", ja:"十二尺", zh:"十二尺" },
              "3.64 m",
              "3.65 m",
              {
                en:"Boards and some posts; the length in the definition of the sai",
                ja:"板や一部の柱。才の定義の長さ",
                zh:"木板與部分柱材；「才」定義中的長度" }
            ],
            [
              { en:"13 shaku", ja:"十三尺", zh:"十三尺" },
              "3.94 m",
              "4 m",
              {
                en:"Sills, beams, rafters; the second common log length",
                ja:"土台、梁、垂木。二番目に多い丸太の長さ",
                zh:"土台、樑、椽條；第二常見的原木長度" }
            ],
            [
              { en:"20 shaku", ja:"二十尺", zh:"二十尺" },
              "6.06 m",
              "6 m",
              { en:"Long beams and through posts", ja:"長い梁、通し柱", zh:"長樑與通柱" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Calculated from 1 shaku = 10/33 m; trade sizes as commonly listed by Japanese timber merchants and builders.",
            ja:"一尺＝三十三分の十メートルから計算。取引寸法は日本の材木店と工務店が一般に示すもの。",
            zh:"依 1 尺 = 10/33 公尺計算；交易尺寸為日本木材行與營造商常見的標示。" } }
      ] },
    { t:"section",
      id:"sawn-sizes",
      title:{ en:"Standard sawn-timber sizes", ja:"製材の標準寸法", zh:"製材的標準尺寸" },
      jp:"定尺・断面",
      body:[
        { t:"p",
          text:{
            en:"A post-and-beam house in Gifu is still built from a short list of standard pieces. The sections below are the ones builders' specifications and timber merchants' price lists repeat; beams are sized by span and load, usually in 30 mm steps. In Gifu the posts are mostly sugi and hinoki, the sills hinoki for its resistance to decay and termites, and the long beams increasingly glulam (see <a href=\"building.html\">Building in Wood</a> and <a href=\"sawmill.html\">Sawmilling</a>).",
            ja:"岐阜の在来軸組の家は、いまも少数の定型部材からできている。下の断面は、工務店の仕様書と材木店の価格表が繰り返し示すものである。梁は張間と荷重によって決まり、ふつう30mm刻みで選ぶ。岐阜では柱の多くがスギとヒノキ、土台は腐朽とシロアリに強いヒノキで、長い梁には集成材が増えている（<a href=\"building.html\">木で建てる</a>、<a href=\"sawmill.html\">製材</a>参照）。",
            zh:"岐阜的軸組工法住宅，至今仍由一小串標準構件組成。下表的斷面，是營造商施工規範與木材行價目表反覆出現的尺寸；樑依跨距與荷重決定，通常以 30 公釐為級距。在岐阜，柱多為柳杉與扁柏，土台則用耐腐朽、抗白蟻的扁柏，長樑則越來越多採用集成材（見<a href=\"building.html\">以木建造</a>與<a href=\"sawmill.html\">製材</a>）。" } },
        { t:"table",
          caption:{ en:"Typical members of a Japanese timber-frame house", ja:"在来軸組住宅の代表的な部材", zh:"日本軸組工法住宅的典型構件" },
          cols:[
            { en:"Member", ja:"部材", zh:"構件" },
            { en:"Japanese", ja:"読み", zh:"日文" },
            { en:"Typical section (mm)", ja:"代表的な断面（mm）", zh:"典型斷面（公釐）" },
            { en:"Typical length", ja:"代表的な長さ", zh:"典型長度" },
            { en:"Usual woods in Gifu", ja:"岐阜でよく使う樹種", zh:"岐阜常用樹種" }
          ],
          keyCol:true,
          rows:[
            [
              { en:"Post", ja:"柱", zh:"柱" },
              "柱 はしら",
              "105 × 105, 120 × 120",
              "3 m",
              { en:"Sugi, hinoki", ja:"スギ、ヒノキ", zh:"柳杉、扁柏" }
            ],
            [
              { en:"Through post (two storeys)", ja:"通し柱", zh:"通柱（貫通兩層）" },
              "通し柱 とおしばしら",
              "120 × 120",
              "6 m",
              { en:"Hinoki, sugi", ja:"ヒノキ、スギ", zh:"扁柏、柳杉" }
            ],
            [
              { en:"Sill", ja:"土台", zh:"土台" },
              "土台 どだい",
              "105 × 105, 120 × 120",
              "4 m",
              { en:"Hinoki; treated timber", ja:"ヒノキ、防腐処理材", zh:"扁柏；防腐處理材" }
            ],
            [
              { en:"Beam, girder", ja:"梁・桁", zh:"樑、桁" },
              "梁 はり・桁 けた",
              { en:"105 or 120 wide × 150–360 deep", ja:"幅105・120×せい150〜360", zh:"寬 105 或 120 × 深 150–360" },
              "3–6 m",
              { en:"Sugi, larch or Douglas-fir glulam", ja:"スギ、カラマツ・ベイマツ集成材", zh:"柳杉；落葉松或花旗松集成材" }
            ],
            [{ en:"Stud", ja:"間柱", zh:"間柱" }, "間柱 まばしら", "30 × 105, 27 × 105", "3 m", { en:"Sugi", ja:"スギ", zh:"柳杉" }],
            [
              { en:"Brace", ja:"筋かい", zh:"斜撐" },
              "筋かい すじかい",
              "45 × 90, 30 × 90",
              "3–4 m",
              { en:"Sugi, pine", ja:"スギ、マツ", zh:"柳杉、松" }
            ],
            [
              { en:"Floor sleeper", ja:"大引", zh:"地檻（大引）" },
              "大引 おおびき",
              "90 × 90, 105 × 105",
              "3–4 m",
              { en:"Hinoki, sugi", ja:"ヒノキ、スギ", zh:"扁柏、柳杉" }
            ],
            [
              { en:"Joist", ja:"根太", zh:"擱柵" },
              "根太 ねだ",
              "45 × 45, 45 × 60",
              "4 m",
              {
                en:"Sugi (often replaced by 24–28 mm floor plywood)",
                ja:"スギ（24〜28mmの床合板で省くことも多い）",
                zh:"柳杉（常以 24–28 公釐樓板合板取代）" }
            ],
            [
              { en:"Purlin", ja:"母屋", zh:"桁條（母屋）" },
              "母屋 もや",
              "90 × 90, 105 × 105",
              "4 m",
              { en:"Sugi, pine", ja:"スギ、マツ", zh:"柳杉、松" }
            ],
            [{ en:"Rafter", ja:"垂木", zh:"椽條" }, "垂木 たるき", "45 × 45, 45 × 60", "4 m", { en:"Sugi", ja:"スギ", zh:"柳杉" }],
            [
              { en:"Furring strip", ja:"胴縁", zh:"橫條（胴緣）" },
              "胴縁 どうぶち",
              "15 × 45, 18 × 45",
              "4 m",
              { en:"Sugi", ja:"スギ", zh:"柳杉" }
            ],
            [
              { en:"Structural plywood", ja:"構造用合板", zh:"結構用合板" },
              "構造用合板",
              {
                en:"9–12 thick (walls), 24–28 (floors); 910 × 1,820 or 910 × 3,030",
                ja:"厚9〜12（壁）、24〜28（床）。910×1,820または910×3,030",
                zh:"厚 9–12（牆）、24–28（樓板）；910 × 1,820 或 910 × 3,030" },
              "—",
              { en:"Sugi, hinoki, larch", ja:"スギ、ヒノキ、カラマツ", zh:"柳杉、扁柏、落葉松" }
            ]
          ] },
        { t:"note",
          label:{ en:"Long timbers", ja:"長尺材", zh:"長尺材" },
          text:{
            en:"Most Japanese sawmills handle logs of 3–4 metres. For temples and large timber buildings a few Gifu mills can saw 7, 8, 12 and 13 metres, and one drying plant takes 12-metre hinoki.",
            ja:"日本の製材所の多くは3〜4mの丸太を扱う。寺社や大規模木造のために、岐阜には7m、8m、12m、13mを挽ける製材所があり、12mのヒノキを乾燥できる施設もある。",
            zh:"日本多數製材所處理 3 至 4 公尺的原木。為了寺社與大型木造建築，岐阜有幾家製材所能鋸 7、8、12 與 13 公尺的長材，還有一處乾燥設施可處理 12 公尺的扁柏。" } },
        { t:"tiny",
          text:{
            en:"Sources: Japan Housing Finance Agency, specifications for wooden houses (typical member sizes); Gifu Prefecture, guide to timber procurement for medium and large wooden buildings (long-length mills). Sizes are typical, not prescribed; designers vary them.",
            ja:"出典：住宅金融支援機構の木造住宅工事仕様書（代表的な部材寸法）、岐阜県「中大規模木造建築の木材調達」（長尺材の製材所）。寸法は代表例であって規定ではなく、設計者により異なる。",
            zh:"資料來源：日本住宅金融支援機構木造住宅施工規範（典型構件尺寸）；岐阜縣〈中大規模木造建築木材調度指南〉（長尺材製材所）。所列尺寸為典型值而非規定，因設計者而異。" } }
      ] },
    { t:"section",
      id:"logs",
      title:{ en:"How logs are measured", ja:"丸太の測り方", zh:"原木如何計量" },
      jp:"素材の日本農林規格",
      body:[
        { t:"p",
          text:{
            en:"A log is measured at its top end, the smaller one, and under bark, because that diameter limits the largest square or board that can be taken along the whole length. The Japanese Agricultural Standard for logs, revised in 2022, sets the size classes, the units and the formula for volume — the “top-end squared” method, which ignores taper for logs under 6 metres and adds an allowance for it above. Every tag in a Gifu log market carries numbers calculated this way (see <a href=\"markets.html\">Log Markets &amp; Prices</a>).",
            ja:"丸太は末口、つまり細いほうの端で、樹皮を除いて測る。その径が、全長にわたって取れる最大の角材や板を決めるからである。二〇二二年に改正された素材の日本農林規格が、径級の区分、単位、材積の式を定める。いわゆる末口二乗法で、6m未満の丸太では細りを無視し、それ以上では細りの分を加える。岐阜の原木市場の検知票の数字は、すべてこうして計算されている（<a href=\"markets.html\">原木市場と価格</a>参照）。",
            zh:"原木在末口——也就是較細的一端——去皮後測量，因為這個直徑決定了全長能取出的最大角材或板材。2022 年修訂的「原木日本農林規格」規定了徑級分類、單位與材積公式——即所謂的「末口平方法」：6 公尺以下的原木忽略尖削度，更長者則加計其修正值。岐阜原木市場每張檢尺標籤上的數字，都是這樣算出來的（見<a href=\"markets.html\">原木市場與價格</a>）。" } },
        { t:"table",
          caption:{ en:"Size classes and units (JAS for logs)", ja:"径級の区分と単位（素材のJAS）", zh:"徑級分類與單位（原木 JAS）" },
          cols:[{ en:"Item", ja:"項目", zh:"項目" }, { en:"Rule", ja:"規定", zh:"規定" }],
          keyCol:true,
          rows:[
            [
              { en:"Small logs", ja:"小の素材", zh:"小徑原木" },
              { en:"Diameter under 14 cm; measured in 1 cm units", ja:"径14cm未満。1cm単位", zh:"直徑未滿 14 公分；以 1 公分為單位" }
            ],
            [
              { en:"Medium logs", ja:"中の素材", zh:"中徑原木" },
              { en:"14 cm to under 30 cm; 2 cm units", ja:"14cm以上30cm未満。2cm単位", zh:"14 公分以上未滿 30 公分；以 2 公分為單位" }
            ],
            [
              { en:"Large logs", ja:"大の素材", zh:"大徑原木" },
              { en:"30 cm and over; 2 cm units", ja:"30cm以上。2cm単位", zh:"30 公分以上；以 2 公分為單位" }
            ],
            [
              { en:"Diameter", ja:"径", zh:"直徑" },
              {
                en:"Minimum diameter at the top end, excluding bark; fractions below the unit dropped",
                ja:"末口の最小径、樹皮を除く。単位未満は切り捨て",
                zh:"末口最小直徑，不含樹皮；未滿單位者捨去" }
            ],
            [
              { en:"Length", ja:"長さ", zh:"長度" },
              {
                en:"In 20 cm (0.2 m) units, fractions dropped; common lengths 3 m, 3.65 m, 4 m and 6 m",
                ja:"20cm（0.2m）単位、端数切り捨て。よくある長さは3m、3.65m、4m、6m",
                zh:"以 20 公分（0.2 公尺）為單位，餘數捨去；常見長度為 3、3.65、4 與 6 公尺" }
            ],
            [
              { en:"Volume, under 6 m", ja:"材積（6m未満）", zh:"材積（未滿 6 公尺）" },
              {
                en:"V = D² × L ÷ 10,000 (V in m³, D in cm, L in m)",
                ja:"V＝D²×L÷10,000（Vはm³、Dはcm、Lはm）",
                zh:"V = D² × L ÷ 10,000（V 為立方公尺，D 為公分，L 為公尺）" }
            ],
            [
              { en:"Volume, 6 m and over", ja:"材積（6m以上）", zh:"材積（6 公尺以上）" },
              {
                en:"V = (D + (L′ − 4) ÷ 2)² × L ÷ 10,000, where L′ is the length in whole metres",
                ja:"V＝(D＋(L′−4)÷2)²×L÷10,000。L′は長さのm未満を切り捨てた値",
                zh:"V = (D + (L′ − 4) ÷ 2)² × L ÷ 10,000，L′ 為去除小數後的公尺數" }
            ]
          ] },
        { t:"table",
          caption:{ en:"Worked examples of log volume", ja:"丸太材積の計算例", zh:"原木材積計算範例" },
          cols:[
            { en:"Log", ja:"丸太", zh:"原木" },
            { en:"Top diameter", ja:"末口径", zh:"末口徑" },
            { en:"Length", ja:"長さ", zh:"長度" },
            { en:"Calculation", ja:"計算", zh:"計算" },
            { en:"Volume", ja:"材積", zh:"材積" }
          ],
          keyCol:true,
          numCols:[4],
          rows:[
            [{ en:"Thinning sugi", ja:"間伐のスギ", zh:"疏伐柳杉" }, "16 cm", "3 m", "16² × 3 ÷ 10,000", "0.077 m³"],
            [{ en:"Hinoki post log", ja:"ヒノキの柱材", zh:"扁柏柱材原木" }, "24 cm", "4 m", "24² × 4 ÷ 10,000", "0.230 m³"],
            [{ en:"Large sugi", ja:"スギの大径材", zh:"柳杉大徑木" }, "30 cm", "4 m", "30² × 4 ÷ 10,000", "0.360 m³"],
            [{ en:"Long hinoki", ja:"ヒノキの長材", zh:"扁柏長材" }, "30 cm", "6 m", "(30 + 1)² × 6 ÷ 10,000", "0.577 m³"],
            [{ en:"Beam log", ja:"梁材の丸太", zh:"樑材原木" }, "40 cm", "8 m", "(40 + 2)² × 8 ÷ 10,000", "1.411 m³"]
          ] },
        { t:"table",
          caption:{ en:"Log grades in the market", ja:"市場での丸太の等級", zh:"市場上的原木等級" },
          cols:[
            { en:"Grade", ja:"等級", zh:"等級" },
            { en:"Description", ja:"内容", zh:"說明" },
            { en:"Main use", ja:"主な用途", zh:"主要用途" }
          ],
          keyCol:true,
          rows:[
            ["A", { en:"Straight, sound logs", ja:"通直で健全な丸太", zh:"通直健全的原木" }, { en:"Sawn timber", ja:"製材", zh:"製材" }],
            [
              "B",
              { en:"Slightly bent or with minor defects", ja:"やや曲がり、軽い欠点がある", zh:"略彎或有輕微缺點" },
              { en:"Plywood, laminated timber", ja:"合板、集成材", zh:"合板、集成材" }
            ],
            [
              "C",
              { en:"Crooked, short or defective", ja:"曲がり、短尺、欠点が多い", zh:"彎曲、短材或缺點多" },
              { en:"Chips, pulp", ja:"チップ、パルプ", zh:"木片、紙漿" }
            ],
            [
              "D",
              { en:"Tops, branches, offcuts", ja:"梢端、枝条、端材", zh:"樹梢、枝條、邊角料" },
              {
                en:"Fuel for biomass power (about 30% of Gifu's log output in FY2021)",
                ja:"バイオマス発電の燃料（二〇二一年度の岐阜の素材生産の約30%）",
                zh:"生質能發電燃料（2021 年度約占岐阜原木產量 30%）" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Agriculture, Forestry and Fisheries, Japanese Agricultural Standard for logs (2007, revised 2022); Gifu Prefecture, status of forestry and the timber industry (FY2021). Examples calculated for this book.",
            ja:"出典：農林水産省「素材の日本農林規格」（二〇〇七年制定、二〇二二年改正）、岐阜県「岐阜県の林業・木材産業の現状」（二〇二一年度）。計算例は本書による。",
            zh:"資料來源：日本農林水產省〈原木日本農林規格〉（2007 年制定，2022 年修訂）；岐阜縣〈岐阜縣林業與木材產業現況〉（2021 年度）。範例由本書計算。" } }
      ] },
    { t:"section",
      id:"jas",
      title:{ en:"JAS grades and other marks", ja:"JAS等級とそのほかの表示", zh:"JAS 等級與其他標示" },
      jp:"製材の日本農林規格",
      body:[
        { t:"p",
          text:{
            en:"The Japanese Agricultural Standard for sawn timber separates wood for structure from wood for show and grades each differently. A stamped piece can tell you what the timber is for, how it was graded, how strong or clear it is and how dry. Gifu adds its own labels on top, and forest certification schemes add a third layer about where and how the tree was grown. The <a href=\"grading.html\">Grades &amp; Standards</a> page explains the reasoning behind each.",
            ja:"製材の日本農林規格は、構造に使う材と見せる材を分け、それぞれ違う方法で格付けする。刻印のある材からは、用途、格付けの方法、強さや節の少なさ、乾燥の程度がわかる。岐阜はその上に独自の表示を重ね、森林認証は木がどこでどう育ったかという第三の層を加える。それぞれの考え方は<a href=\"grading.html\">等級と規格</a>の頁で説明している。",
            zh:"製材的日本農林規格（JAS）將結構用材與外觀用材分開，並以不同方式分級。一塊蓋有章戳的木材能告訴你：它的用途、分級方式、強度或無節程度，以及乾燥程度。岐阜在此之上加了自己的標示，森林認證則再加上第三層——樹木在何處、以何種方式生長。各項背後的原理，請見<a href=\"grading.html\">等級與規格</a>一頁。" } },
        { t:"table",
          caption:{ en:"What a JAS stamp on sawn timber can say", ja:"製材のJAS表示が示すもの", zh:"製材 JAS 章戳所代表的意義" },
          cols:[
            { en:"Category", ja:"区分", zh:"類別" },
            { en:"Japanese", ja:"名称", zh:"日文" },
            { en:"What is graded", ja:"格付けの対象", zh:"分級對象" },
            { en:"Grades and marks", ja:"等級と表示", zh:"等級與標示" }
          ],
          keyCol:true,
          rows:[
            [
              { en:"Finishing timber", ja:"造作用製材", zh:"裝修用製材" },
              "造作用製材",
              { en:"Visible faces: knots and defects", ja:"見える面の節や欠点", zh:"可見面的節與缺點" },
              {
                en:"Mubushi (clear), jōkobushi (small tight knots), kobushi (small knots)",
                ja:"無節、上小節、小節",
                zh:"無節、上小節、小節" }
            ],
            [
              { en:"Structural, visual grading", ja:"構造用製材（目視等級区分）", zh:"結構用製材（目測分級）" },
              "目視等級区分",
              {
                en:"Knots, slope of grain, checks, wane; class A for bending members (beams), class B for compression members (posts)",
                ja:"節、繊維走向の傾斜、割れ、丸身。甲種は曲げ材（梁）、乙種は圧縮材（柱）",
                zh:"節、纖維傾斜、裂紋、缺邊；甲種用於受彎構件（樑），乙種用於受壓構件（柱）" },
              { en:"1 to 3 stars", ja:"1級〜3級（★の数）", zh:"1 至 3 級（以星號表示）" }
            ],
            [
              { en:"Structural, machine grading", ja:"構造用製材（機械等級区分）", zh:"結構用製材（機械分級）" },
              "機械等級区分",
              { en:"Stiffness measured piece by piece", ja:"一本ずつ測ったヤング係数", zh:"逐根量測的彈性模數" },
              "E50 – E150"
            ],
            [
              { en:"Moisture", ja:"含水率", zh:"含水率" },
              "乾燥材",
              { en:"Maximum moisture content", ja:"含水率の上限", zh:"含水率上限" },
              {
                en:"SD15, SD20 (visually graded structural); D15, D20 (other); no mark if green",
                ja:"SD15・SD20（目視等級の構造用）、D15・D20（その他）、未乾燥材は表示なし",
                zh:"SD15、SD20（目測分級結構材）；D15、D20（其他）；未乾燥材不標示" }
            ],
            [
              { en:"Preservative treatment", ja:"保存処理", zh:"防腐處理" },
              "保存処理材",
              { en:"Depth and amount of preservative, by exposure", ja:"使用環境に応じた薬剤の浸潤度と吸収量", zh:"依使用環境規定藥劑滲透深度與吸收量" },
              {
                en:"Performance classes K1–K5 (K3 is typical for house sills)",
                ja:"性能区分K1〜K5（住宅の土台はK3が一般的）",
                zh:"性能等級 K1–K5（住宅土台一般為 K3）" }
            ]
          ] },
        { t:"table",
          caption:{ en:"Machine stress grades and where Gifu timbers fall", ja:"機械等級と岐阜の材の位置", zh:"機械應力等級與岐阜木材的分布" },
          cols:[
            { en:"Grade", ja:"等級", zh:"等級" },
            { en:"Stiffness band (GPa)", ja:"ヤング係数の範囲（GPa）", zh:"彈性模數範圍（GPa）" },
            { en:"Typical of", ja:"代表的な材", zh:"典型木材" }
          ],
          keyCol:true,
          rows:[
            ["E50", "3.9 – 5.9", { en:"Fast-grown sugi", ja:"成長の速いスギ", zh:"快速生長的柳杉" }],
            ["E70", "5.9 – 7.8", { en:"Average sugi", ja:"平均的なスギ", zh:"一般柳杉" }],
            ["E90", "7.8 – 9.8", { en:"Good sugi; average hinoki", ja:"良質なスギ、平均的なヒノキ", zh:"優質柳杉；一般扁柏" }],
            ["E110", "9.8 – 11.8", { en:"Good hinoki, larch, Douglas fir", ja:"良質なヒノキ、カラマツ、ベイマツ", zh:"優質扁柏、落葉松、花旗松" }],
            ["E130", "11.8 – 13.7", { en:"Select larch and pine", ja:"選別したカラマツとマツ", zh:"精選落葉松與松木" }],
            ["E150", "13.7 –", { en:"Exceptional pieces", ja:"特に優れた材", zh:"特優材" }]
          ] },
        { t:"table",
          caption:{ en:"Other marks on Gifu timber", ja:"岐阜の材につくそのほかの表示", zh:"岐阜木材的其他標示" },
          cols:[
            { en:"Mark", ja:"表示", zh:"標示" },
            { en:"Issued by", ja:"発行者", zh:"發行單位" },
            { en:"What it assures", ja:"保証する内容", zh:"保證內容" }
          ],
          keyCol:true,
          rows:[
            [
              { en:"Gifu-certified timber", ja:"ぎふ証明材", zh:"岐阜證明材" },
              { en:"Registered businesses under a prefectural scheme", ja:"県の制度に登録した事業者", zh:"縣制度下的登錄業者" },
              {
                en:"Gifu origin and legal harvest, documented from forest to seller",
                ja:"岐阜県産であることと合法な伐採を、山から販売者まで書類で証明",
                zh:"以文件證明從森林到賣方皆為岐阜產且合法採伐" }
            ],
            [
              { en:"Gifu performance-labelled timber", ja:"ぎふ性能表示材", zh:"岐阜性能標示材" },
              { en:"Registered businesses", ja:"登録事業者", zh:"登錄業者" },
              {
                en:"Moisture content and strength measured and labelled; needed for the house-building subsidy",
                ja:"含水率と強度を測って表示。住宅助成の要件",
                zh:"含水率與強度經量測並標示；申請住宅補助所需" }
            ],
            [
              { en:"FSC, PEFC", ja:"FSC、PEFC", zh:"FSC、PEFC" },
              { en:"International certification bodies", ja:"国際的な認証機関", zh:"國際認證機構" },
              { en:"Forest management and chain of custody", ja:"森林管理と加工・流通の管理", zh:"森林經營與產銷監管鏈" }
            ],
            [
              { en:"SGEC", ja:"SGEC", zh:"SGEC" },
              {
                en:"Japanese scheme, endorsed by PEFC since 2016",
                ja:"日本の制度。二〇一六年からPEFCと相互承認",
                zh:"日本的制度，自 2016 年起獲 PEFC 認可" },
              { en:"As above, for Japanese forests", ja:"同上（日本の森林）", zh:"同上（針對日本森林）" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Ministry of Agriculture, Forestry and Fisheries, JAS for sawn timber; Gifu Prefecture (certified and performance-labelled timber); SGEC/PEFC Japan. See Grading and Standards for detail.",
            ja:"出典：農林水産省「製材の日本農林規格」、岐阜県（ぎふ証明材・ぎふ性能表示材）、SGEC/PEFCジャパン。詳しくは「等級と規格」を参照。",
            zh:"資料來源：日本農林水產省〈製材日本農林規格〉；岐阜縣（岐阜證明材、岐阜性能標示材）；SGEC/PEFC Japan。詳見〈分級與規格〉。" } }
      ] },
    { t:"section",
      id:"moisture-shrinkage",
      title:{ en:"Moisture and shrinkage", ja:"含水率と収縮", zh:"含水率與收縮" },
      jp:"含水率",
      body:[
        { t:"p",
          text:{
            en:"Moisture content is the weight of water in wood as a percentage of the weight of the dry wood, so it can exceed 100 per cent. Nothing happens to the size of a board until the water in its cell walls begins to leave, at about 28–30 per cent; below that, it shrinks — about twice as much around the rings as across them, and hardly at all along the grain. Wood then follows the humidity of the air around it (see <a href=\"moisture.html\">Wood &amp; Water</a>).",
            ja:"含水率は、木の中の水の重さを乾いた木の重さに対する百分率で表したもので、100%を超えることもある。細胞壁の水が抜けはじめる約28〜30%までは、板の寸法は変わらない。それより下で木は縮む。年輪に沿う方向には年輪を横切る方向のおよそ二倍縮み、繊維方向にはほとんど縮まない。その後、木はまわりの空気の湿度に従って動く（<a href=\"moisture.html\">木と水分</a>参照）。",
            zh:"含水率是木材中水分重量占乾燥木材重量的百分比，因此可以超過 100%。在細胞壁中的水開始散失之前——約 28 至 30%——木板尺寸不會改變；低於此值就會收縮：沿年輪方向（弦向）約為橫越年輪方向（徑向）的兩倍，順紋方向則幾乎不縮。之後，木材會隨周圍空氣的濕度而變化（見<a href=\"moisture.html\">木與水分</a>）。" } },
        { t:"table",
          caption:{ en:"Moisture states of wood", ja:"木材の含水状態", zh:"木材的含水狀態" },
          cols:[
            { en:"State", ja:"状態", zh:"狀態" },
            { en:"Moisture content", ja:"含水率", zh:"含水率" },
            { en:"What it means", ja:"意味", zh:"意義" }
          ],
          keyCol:true,
          numCols:[1],
          rows:[
            [
              { en:"Green (freshly felled)", ja:"生材（伐採直後）", zh:"生材（剛伐下）" },
              "50 – 150%+",
              {
                en:"Free water in the cell cavities; sugi heartwood is often very wet",
                ja:"細胞内腔に自由水がある。スギの心材は非常に湿っていることが多い",
                zh:"細胞腔內含自由水；柳杉心材常極為潮濕" }
            ],
            [
              { en:"Fibre saturation point", ja:"繊維飽和点", zh:"纖維飽和點" },
              "≈ 28 – 30%",
              {
                en:"Cell walls still saturated; shrinkage starts below this",
                ja:"細胞壁はまだ飽和。これより下で収縮が始まる",
                zh:"細胞壁仍飽和；低於此值開始收縮" }
            ],
            [
              { en:"JAS dried structural timber", ja:"JASの乾燥構造材", zh:"JAS 乾燥結構材" },
              "≤ 20% / ≤ 15%",
              { en:"Marked SD20/D20 or SD15/D15", ja:"SD20・D20またはSD15・D15と表示", zh:"標示 SD20／D20 或 SD15／D15" }
            ],
            [
              { en:"Air-dry outdoors in Japan", ja:"日本の屋外の気乾状態", zh:"日本戶外氣乾狀態" },
              "≈ 15%",
              { en:"Where timber stacked under a roof settles", ja:"屋根の下に積んだ材が落ち着く値", zh:"屋簷下堆放木材最終穩定的數值" }
            ],
            [
              { en:"Indoors, heated or air-conditioned", ja:"冷暖房された室内", zh:"有冷暖氣的室內" },
              "≈ 8 – 12%",
              {
                en:"What furniture, floors and instruments must be made at",
                ja:"家具、床、楽器はこの値で製作する必要がある",
                zh:"家具、地板與樂器必須在此含水率下製作" }
            ],
            [{ en:"Oven-dry", ja:"全乾", zh:"全乾" }, "0%", { en:"Laboratory reference only", ja:"実験室の基準", zh:"僅為實驗室基準" }]
          ] },
        { t:"table",
          caption:{ en:"Equilibrium moisture content at about 20 °C", ja:"約20°Cにおける平衡含水率", zh:"約 20 °C 時的平衡含水率" },
          cols:[
            { en:"Relative humidity", ja:"相対湿度", zh:"相對濕度" },
            { en:"Wood settles at about", ja:"木が落ち着く含水率", zh:"木材穩定含水率約" },
            { en:"Typical situation", ja:"典型的な場面", zh:"典型情境" }
          ],
          numCols:[1],
          rows:[
            ["20%", "4 – 5%", { en:"A heated room in a Japanese winter", ja:"日本の冬の暖房した部屋", zh:"日本冬季開暖氣的房間" }],
            ["30%", "≈ 6%", { en:"Dry winter indoors", ja:"乾いた冬の室内", zh:"乾燥的冬季室內" }],
            ["50%", "≈ 9%", { en:"Guitar makers' target (45–55%)", ja:"ギター工房の目標（45〜55%）", zh:"吉他工坊的目標（45–55%）" }],
            ["65%", "≈ 12%", { en:"Mild spring and autumn days", ja:"穏やかな春と秋", zh:"溫和的春秋日" }],
            [
              "80%",
              "≈ 16%",
              { en:"Japan's rainy season; much of Taiwan's year", ja:"日本の梅雨、台湾の一年の大半", zh:"日本梅雨季；台灣一年中大部分時間" }
            ],
            ["90%", "≈ 20%", { en:"Saturated summer air; typhoon days", ja:"飽和に近い夏の空気、台風の日", zh:"近飽和的夏季空氣；颱風天" }]
          ] },
        { t:"table",
          caption:{ en:"Shrinkage of Gifu timbers", ja:"岐阜の木の収縮率", zh:"岐阜木材的收縮率" },
          cols:[
            { en:"Wood", ja:"樹種", zh:"樹種" },
            { en:"Green to oven-dry, tangential", ja:"全収縮率・接線方向", zh:"全收縮率・弦向" },
            { en:"Green to oven-dry, radial", ja:"全収縮率・半径方向", zh:"全收縮率・徑向" },
            { en:"Per 1% change in moisture", ja:"含水率1%あたり", zh:"每 1% 含水率變化" }
          ],
          keyCol:true,
          numCols:[1, 2],
          rows:[
            [{ en:"Kiri (paulownia)", ja:"キリ", zh:"泡桐" }, "5.0%", "—", "—"],
            [{ en:"Sugi", ja:"スギ", zh:"柳杉" }, "6.5%", "2.5%", "—"],
            [
              { en:"Hinoki", ja:"ヒノキ", zh:"扁柏" },
              "6.0%",
              "3.0%",
              {
                en:"tangential 0.21–0.26%, radial 0.10–0.13%",
                ja:"接線0.21〜0.26%、半径0.10〜0.13%",
                zh:"弦向 0.21–0.26%，徑向 0.10–0.13%" }
            ],
            [{ en:"Mizunara (oak)", ja:"ミズナラ", zh:"水楢" }, "9.0%", "4.5%", "—"],
            [
              { en:"Keyaki (zelkova)", ja:"ケヤキ", zh:"欅木" },
              "—",
              "—",
              {
                en:"tangential 0.27–0.32%, radial 0.14–0.17%",
                ja:"接線0.27〜0.32%、半径0.14〜0.17%",
                zh:"弦向 0.27–0.32%，徑向 0.14–0.17%" }
            ],
            [{ en:"Buna (beech)", ja:"ブナ", zh:"山毛櫸" }, "11.5%", "5.0%", "—"]
          ] },
        { t:"note",
          label:{ en:"A worked example", ja:"計算例", zh:"計算範例" },
          text:{
            en:"A flatsawn hinoki board 300 mm wide, made at 12% moisture and taken into a heated room where it falls to 8%, shrinks by roughly 300 × 0.0023 × 4 ≈ 2.8 mm across its width. Quartersawn, it would shrink about half as much. This is why panels float in their frames and tabletops are held by sliding battens.",
            ja:"含水率12%でつくった幅300mmの板目のヒノキ板が暖房の部屋で8%まで乾くと、幅はおよそ300×0.0023×4≈2.8mm縮む。柾目なら約半分である。鏡板を枠の中で遊ばせ、天板を蟻桟で押さえる理由がここにある。",
            zh:"一塊寬 300 公釐、在含水率 12% 下製作的弦切扁柏板，搬進暖氣房後降至 8%，寬度約收縮 300 × 0.0023 × 4 ≈ 2.8 公釐；若是徑切板，約只有一半。這正是鑲板要在框內留出活動空間、桌面要以滑動燕尾橫檔固定的原因。" } },
        { t:"tiny",
          text:{
            en:"Sources: total shrinkage — rounded typical values as on the book's Wood and Water page; shrinkage per 1% — Japan Wood Information Center species database (after FFPRI, Useful Woods of the World); equilibrium moisture — USDA Forest Products Laboratory, Wood Handbook (approximate).",
            ja:"出典：全収縮率は本書「木と水」の頁と同じ丸めた代表値、含水率1%あたりの収縮率は日本木材総合情報センターの樹種データベース（森林総合研究所『世界の有用木材』による）、平衡含水率は米国農務省林産研究所『Wood Handbook』（概数）。",
            zh:"資料來源：全收縮率——與本書〈木與水〉一頁相同的四捨五入典型值；每 1% 收縮率——日本木材總合情報中心樹種資料庫（依森林總合研究所《世界有用木材》）；平衡含水率——美國農業部林產品研究所《Wood Handbook》（約略值）。" } }
      ] },
    { t:"section",
      id:"woods",
      title:{ en:"The main Gifu woods in numbers", ja:"数字で見る岐阜の主な木", zh:"以數字看岐阜主要木材" },
      jp:"比重・強度・硬さ",
      body:[
        { t:"p",
          text:{
            en:"Density is the single best predictor of how a wood behaves: stiffer, stronger, harder and heavier go together. The first table gives handbook values for small clear specimens at about 15 per cent moisture — much higher than the design values for graded structural timber, which allow for knots and long-term loading. The second places some twenty Gifu woods on one scale of air-dry density, with a relative hardness that follows it (see <a href=\"properties.html\">Physical Properties</a>).",
            ja:"密度は木のふるまいを最もよく予測する指標である。硬さ、強さ、重さは連れだって増える。最初の表は、含水率約15%の無欠点小試験体についての便覧の値で、節や長期荷重を見込む構造用製材の設計値よりずっと高い。二つ目の表は岐阜の約二十種を気乾密度の一つの尺度に並べ、それに従う相対的な硬さを添えた（<a href=\"properties.html\">物理的性質</a>参照）。",
            zh:"密度是預測木材性能的最佳單一指標：越硬、越強、越重往往相伴而來。第一張表列出含水率約 15% 的無瑕小試片之手冊數值——遠高於考量木節與長期荷重的分級結構材設計值。第二張表把約二十種岐阜木材排在同一氣乾密度尺度上，並附上與之相應的相對硬度（見<a href=\"properties.html\">物理性質</a>）。" } },
        { t:"table",
          caption:{
            en:"Mechanical properties of eight timbers (small clear specimens, air-dry)",
            ja:"八樹種の力学的性質（無欠点小試験体、気乾）",
            zh:"八種木材的力學性質（無瑕小試片，氣乾）" },
          cols:[
            { en:"Timber", ja:"樹種", zh:"樹種" },
            { en:"Density (g/cm³)", ja:"密度（g/cm³）", zh:"密度（g/cm³）" },
            { en:"Stiffness E (GPa)", ja:"ヤング係数（GPa）", zh:"彈性模數（GPa）" },
            { en:"Bending strength (MPa)", ja:"曲げ強さ（MPa）", zh:"抗彎強度（MPa）" },
            { en:"Compression ∥ grain (MPa)", ja:"縦圧縮強さ（MPa）", zh:"順紋抗壓（MPa）" }
          ],
          keyCol:true,
          numCols:[1, 2, 3, 4],
          rows:[
            [{ en:"Kiri (paulownia)", ja:"キリ", zh:"泡桐" }, "0.30", "4.9", "34", "20"],
            [{ en:"Sugi", ja:"スギ", zh:"柳杉" }, "0.38", "7.4", "64", "34"],
            [{ en:"Hinoki", ja:"ヒノキ", zh:"扁柏" }, "0.44", "8.8", "74", "39"],
            [{ en:"Karamatsu (larch)", ja:"カラマツ", zh:"落葉松" }, "0.50", "9.8", "78", "44"],
            [{ en:"Akamatsu (red pine)", ja:"アカマツ", zh:"赤松" }, "0.52", "11.3", "88", "44"],
            [{ en:"Buna (beech)", ja:"ブナ", zh:"山毛櫸" }, "0.65", "11.8", "98", "44"],
            [{ en:"Mizunara (oak)", ja:"ミズナラ", zh:"水楢" }, "0.68", "9.8", "98", "44"],
            [{ en:"Keyaki (zelkova)", ja:"ケヤキ", zh:"欅木" }, "0.69", "11.8", "98", "49"]
          ] },
        { t:"table",
          caption:{ en:"Air-dry density and relative hardness of Gifu woods", ja:"岐阜の木の気乾密度と相対的な硬さ", zh:"岐阜木材的氣乾密度與相對硬度" },
          cols:[
            { en:"Wood", ja:"樹種", zh:"樹種" },
            { en:"Japanese", ja:"和名", zh:"日文" },
            { en:"Density (g/cm³)", ja:"密度（g/cm³）", zh:"密度（g/cm³）" },
            { en:"Relative hardness", ja:"相対的な硬さ", zh:"相對硬度" },
            { en:"Typical use in Gifu", ja:"岐阜での主な用途", zh:"岐阜的典型用途" }
          ],
          keyCol:true,
          numCols:[2],
          rows:[
            [
              { en:"Kiri (paulownia)", ja:"キリ", zh:"泡桐" },
              "桐",
              "0.30",
              { en:"Very soft", ja:"非常に軟らかい", zh:"極軟" },
              { en:"Chests, boxes", ja:"箪笥、箱", zh:"衣櫃、木箱" }
            ],
            [
              { en:"Sawara", ja:"サワラ", zh:"花柏" },
              "椹",
              "0.34",
              { en:"Very soft", ja:"非常に軟らかい", zh:"極軟" },
              { en:"Shunkei trays, tubs, bentwood boxes", ja:"春慶の盆、桶、曲物", zh:"春慶托盤、木桶、曲物" }
            ],
            [
              { en:"Nezuko", ja:"ネズコ", zh:"香柏（黑檜）" },
              "鼠子",
              "0.36",
              { en:"Very soft", ja:"非常に軟らかい", zh:"極軟" },
              { en:"Ceilings, joinery", ja:"天井板、建具", zh:"天花板、門窗" }
            ],
            [
              { en:"Sugi", ja:"スギ", zh:"柳杉" },
              "杉",
              "0.38",
              { en:"Soft", ja:"軟らかい", zh:"軟" },
              { en:"Posts, boards, barrels", ja:"柱、板、樽", zh:"柱、木板、酒樽" }
            ],
            [
              { en:"Kōyamaki", ja:"コウヤマキ", zh:"日本金松" },
              "高野槙",
              "0.42",
              { en:"Soft", ja:"軟らかい", zh:"軟" },
              { en:"Bath tubs, water pipes", ja:"風呂桶、水樋", zh:"浴桶、水管" }
            ],
            [
              { en:"Hinoki", ja:"ヒノキ", zh:"扁柏" },
              "檜",
              "0.44",
              { en:"Soft", ja:"軟らかい", zh:"軟" },
              { en:"Shrines, posts, masu", ja:"社寺、柱、枡", zh:"寺社、柱、木枡" }
            ],
            [
              { en:"Asunaro", ja:"アスナロ", zh:"羅漢柏" },
              "翌檜",
              "0.45",
              { en:"Soft to medium", ja:"軟〜中", zh:"軟至中" },
              { en:"Sills, building timber", ja:"土台、建築材", zh:"土台、建材" }
            ],
            [
              { en:"Hōnoki (magnolia)", ja:"ホオノキ", zh:"日本厚朴" },
              "朴",
              "0.49",
              { en:"Medium", ja:"中", zh:"中" },
              { en:"Carving, guitar necks, drawing boards", ja:"彫刻、ギターのネック、製図板", zh:"雕刻、吉他琴頸、製圖板" }
            ],
            [
              { en:"Karamatsu (larch)", ja:"カラマツ", zh:"落葉松" },
              "唐松",
              "0.50",
              { en:"Medium", ja:"中", zh:"中" },
              { en:"Glulam, plywood, furniture", ja:"集成材、合板、家具", zh:"集成材、合板、家具" }
            ],
            [
              { en:"Katsura", ja:"カツラ", zh:"連香樹" },
              "桂",
              "0.50",
              { en:"Medium", ja:"中", zh:"中" },
              { en:"Carving, trays, guitar necks", ja:"彫刻、盆、ギターのネック", zh:"雕刻、托盤、吉他琴頸" }
            ],
            [
              { en:"Ichii (yew)", ja:"イチイ", zh:"紫杉" },
              "一位",
              "0.51",
              { en:"Medium", ja:"中", zh:"中" },
              { en:"Ittōbori carving", ja:"一刀彫", zh:"一刀彫" }
            ],
            [
              { en:"Tochi (horse chestnut)", ja:"トチノキ", zh:"七葉樹" },
              "栃",
              "0.52",
              { en:"Medium", ja:"中", zh:"中" },
              { en:"Turned and lacquered ware, figured boards", ja:"挽物、漆器、杢板", zh:"旋木、漆器、紋理板" }
            ],
            [
              { en:"Akamatsu (red pine)", ja:"アカマツ", zh:"赤松" },
              "赤松",
              "0.52",
              { en:"Medium", ja:"中", zh:"中" },
              { en:"Beams, floors", ja:"梁、床", zh:"樑、地板" }
            ],
            [
              { en:"Kuri (chestnut)", ja:"クリ", zh:"栗木" },
              "栗",
              "0.60",
              { en:"Hard", ja:"硬い", zh:"硬" },
              { en:"Sills, sleepers, floors", ja:"土台、枕木、床", zh:"土台、枕木、地板" }
            ],
            [
              { en:"Yamazakura (cherry)", ja:"ヤマザクラ", zh:"山櫻" },
              "山桜",
              "0.62",
              { en:"Hard", ja:"硬い", zh:"硬" },
              { en:"Furniture, guitar backs", ja:"家具、ギターの裏板", zh:"家具、吉他背板" }
            ],
            [
              { en:"Buna (beech)", ja:"ブナ", zh:"山毛櫸" },
              "橅",
              "0.65",
              { en:"Hard", ja:"硬い", zh:"硬" },
              { en:"Bentwood chairs", ja:"曲木椅子", zh:"曲木椅" }
            ],
            [
              { en:"Itaya-kaede (maple)", ja:"イタヤカエデ", zh:"色木槭" },
              "板屋楓",
              "0.65",
              { en:"Hard", ja:"硬い", zh:"硬" },
              { en:"Furniture, instrument backs", ja:"家具、楽器の裏板", zh:"家具、樂器背板" }
            ],
            [
              { en:"Mizunara (oak)", ja:"ミズナラ", zh:"水楢" },
              "水楢",
              "0.68",
              { en:"Hard", ja:"硬い", zh:"硬" },
              { en:"Hida furniture, whisky casks", ja:"飛騨の家具、ウイスキー樽", zh:"飛驒家具、威士忌桶" }
            ],
            [
              { en:"Keyaki (zelkova)", ja:"ケヤキ", zh:"欅木" },
              "欅",
              "0.69",
              { en:"Hard", ja:"硬い", zh:"硬" },
              { en:"Temple timbers, festival floats, trays", ja:"社寺の材、屋台、盆", zh:"寺社木材、祭典屋台、托盤" }
            ],
            [
              { en:"Mizume (cherry birch)", ja:"ミズメ", zh:"日本櫻樺" },
              "水目",
              "0.72",
              { en:"Very hard", ja:"非常に硬い", zh:"極硬" },
              { en:"Festival floats, guitar backs and sides", ja:"屋台、ギターの裏板と側板", zh:"祭典屋台、吉他背側板" }
            ]
          ] },
        { t:"figure",
          caption:{
            en:"Air-dry density of twelve Gifu woods, g/cm³ (Wood Industry Handbook, 4th edition, via Hokkaidō Prefecture; mizume from the Japan Wood Information Center). Water is 1.0: every one of them floats.",
            ja:"岐阜の木十二種の気乾密度（g/cm³、木材工業ハンドブック改訂四版、北海道の資料による。ミズメは日本木材総合情報センター）。水は1.0なので、どれも水に浮く。",
            zh:"十二種岐阜木材的氣乾密度（g/cm³；《木材工業手冊》第四版，引自北海道資料；日本櫻樺取自日本木材總合情報中心）。水為 1.0——它們全都會浮起來。" },
          svg:function(lang, L){
            var S = [
              [{en:"Kiri (paulownia)",ja:"キリ",zh:"泡桐"},0.30],[{en:"Sawara",ja:"サワラ",zh:"花柏"},0.34],[{en:"Sugi",ja:"スギ",zh:"柳杉"},0.38],
              [{en:"Hinoki",ja:"ヒノキ",zh:"扁柏"},0.44],[{en:"Hōnoki (magnolia)",ja:"ホオノキ",zh:"日本厚朴"},0.49],[{en:"Karamatsu (larch)",ja:"カラマツ",zh:"落葉松"},0.50],
              [{en:"Ichii (yew)",ja:"イチイ",zh:"紫杉"},0.51],[{en:"Tochi (horse chestnut)",ja:"トチノキ",zh:"七葉樹"},0.52],[{en:"Kuri (chestnut)",ja:"クリ",zh:"栗木"},0.60],
              [{en:"Buna (beech)",ja:"ブナ",zh:"山毛櫸"},0.65],[{en:"Mizunara (oak)",ja:"ミズナラ",zh:"水楢"},0.68],[{en:"Keyaki (zelkova)",ja:"ケヤキ",zh:"欅木"},0.69]
            ], items = [], i;
            for (i = 0; i < S.length; i++) items.push({ n:S[i][0], v:S[i][1], f: S[i][1] < 0.45 ? "#E0E6DB" : (S[i][1] < 0.6 ? "#EDE5D2" : "#EADCC1") });
            return GIFU.fig.hbar(lang, L, { title:{ en:"Air-dry density", ja:"気乾密度", zh:"氣乾密度" }, items: items, unit:"g/cm³", dec:2, max:0.8, labelW:210, rowH:26,
              note:{ en:"Pale green: conifers and light woods; buff: medium; tan: the hard broadleaves of Hida furniture.", ja:"淡緑は針葉樹と軽い材、淡黄は中程度、茶は飛騨の家具に使う硬い広葉樹。", zh:"淡綠：針葉樹與輕材；淡黃：中等；棕褐：飛驒家具所用的硬質闊葉樹。" } });
          } },
        { t:"tiny",
          text:{
            en:"Sources: Wood Industry Handbook, 4th edition (Forestry and Forest Products Research Institute), via Hokkaidō Prefecture and the book's Properties of Wood page; Japan Wood Information Center. Relative hardness is a qualitative class derived from density, not a measured value.",
            ja:"出典：森林総合研究所監修『木材工業ハンドブック改訂四版』（北海道の資料と本書「木の性質」の頁による）、日本木材総合情報センター。相対的な硬さは密度から導いた定性的な区分で、測定値ではない。",
            zh:"資料來源：森林總合研究所監修《木材工業手冊》第四版（經北海道資料與本書〈木材性質〉一頁）；日本木材總合情報中心。相對硬度係依密度推得的定性分級，並非實測值。" } }
      ] },
    { t:"section",
      id:"cites-woods",
      title:{ en:"Guitar woods and CITES", ja:"ギター材とワシントン条約", zh:"吉他用材與 CITES" },
      jp:"附属書",
      body:[
        { t:"p",
          text:{
            en:"The Convention on International Trade in Endangered Species governs which woods may cross borders and on what papers. For a guitar owner the question is simple: does the finished instrument need a permit? Since November 2019 the answer is no for every rosewood except Brazilian; for mahogany and the other timbers listed only as logs and sawn wood it has always been no. The position in 2026 is summarised below (see <a href=\"cites.html\">Rosewood & the Law</a>).",
            ja:"絶滅のおそれのある野生動植物の種の国際取引に関する条約（ワシントン条約）は、どの木がどんな書類で国境を越えられるかを定める。ギターの持ち主にとって問いは単純で、完成した楽器に許可が要るかどうかである。二〇一九年十一月以降、ブラジリアン以外のローズウッドはすべて不要となり、丸太と製材だけが規制されるマホガニーなどは初めから不要である。二〇二六年時点の状況を下にまとめた（<a href=\"cites.html\">ローズウッドと条約</a>参照）。",
            zh:"《瀕臨絕種野生動植物國際貿易公約》（CITES）規範哪些木材可以跨越國境、需要什麼文件。對吉他擁有者而言，問題很簡單：成品樂器需不需要許可？自 2019 年 11 月起，除巴西玫瑰木外，所有玫瑰木都不需要；桃花心木等僅管制原木與製材的木材則向來不需要。以下整理 2026 年的狀況（見<a href=\"cites.html\">玫瑰木與公約</a>）。" } },
        { t:"table",
          caption:{
            en:"Common guitar woods and CITES (position in 2026)",
            ja:"主なギター材とワシントン条約（二〇二六年時点）",
            zh:"常見吉他用材與 CITES（2026 年狀況）" },
          cols:[
            { en:"Wood", ja:"材", zh:"木材" },
            { en:"Botanical name", ja:"学名", zh:"學名" },
            { en:"Listing (in force)", ja:"掲載（発効）", zh:"列名（生效）" },
            { en:"Finished guitar crossing a border", ja:"完成したギターの越境", zh:"成品吉他跨境" }
          ],
          keyCol:true,
          rows:[
            [
              { en:"Brazilian rosewood", ja:"ブラジリアン・ローズウッド（ハカランダ）", zh:"巴西玫瑰木" },
              "Dalbergia nigra",
              { en:"Appendix I (11 June 1992)", ja:"附属書I（一九九二年六月十一日）", zh:"附錄一（1992 年 6 月 11 日）" },
              { en:"Permits or certificates always needed", ja:"常に許可書か証明書が必要", zh:"一律需要許可或證明" }
            ],
            [
              { en:"Indian rosewood", ja:"インディアン・ローズウッド", zh:"印度玫瑰木" },
              "Dalbergia latifolia",
              { en:"Appendix II (2 January 2017)", ja:"附属書II（二〇一七年一月二日）", zh:"附錄二（2017 年 1 月 2 日）" },
              { en:"Exempt since 26 November 2019", ja:"二〇一九年十一月二十六日から適用除外", zh:"自 2019 年 11 月 26 日起豁免" }
            ],
            [
              { en:"Cocobolo; Honduras rosewood", ja:"ココボロ、ホンジュラス・ローズウッド", zh:"可可波羅；宏都拉斯玫瑰木" },
              "D. retusa; D. stevensonii",
              {
                en:"Appendix II (2013; all products 2017)",
                ja:"附属書II（二〇一三年、全製品は二〇一七年）",
                zh:"附錄二（2013 年；全部產品 2017 年）" },
              { en:"Exempt since November 2019", ja:"二〇一九年十一月から適用除外", zh:"自 2019 年 11 月起豁免" }
            ],
            [
              { en:"Madagascar rosewood", ja:"マダガスカル・ローズウッド", zh:"馬達加斯加玫瑰木" },
              "Dalbergia spp.",
              { en:"Appendix II (2013); trade suspended", ja:"附属書II（二〇一三年）、取引停止", zh:"附錄二（2013 年）；暫停貿易" },
              {
                en:"Exempt as an instrument; new wood not legally available",
                ja:"楽器としては除外。新しい材は合法に入手できない",
                zh:"成品樂器豁免；新木料無法合法取得" }
            ],
            [
              { en:"Bubinga", ja:"ブビンガ", zh:"巴花（布賓加）" },
              { en:"Guibourtia (3 species)", ja:"Guibourtia属（3種）", zh:"Guibourtia 屬（3 種）" },
              { en:"Appendix II (2 January 2017)", ja:"附属書II（二〇一七年一月二日）", zh:"附錄二（2017 年 1 月 2 日）" },
              { en:"Exempt since November 2019", ja:"二〇一九年十一月から適用除外", zh:"自 2019 年 11 月起豁免" }
            ],
            [
              { en:"Big-leaf mahogany", ja:"ホンジュラス・マホガニー", zh:"大葉桃花心木" },
              "Swietenia macrophylla",
              {
                en:"Appendix II (15 November 2003), timber only",
                ja:"附属書II（二〇〇三年十一月十五日）、木材のみ",
                zh:"附錄二（2003 年 11 月 15 日），僅限木材" },
              { en:"No permit", ja:"許可不要", zh:"不需許可" }
            ],
            [
              { en:"African mahogany", ja:"アフリカン・マホガニー", zh:"非洲桃花心木" },
              "Khaya spp.",
              {
                en:"Appendix II (23 February 2023), timber only",
                ja:"附属書II（二〇二三年二月二十三日）、木材のみ",
                zh:"附錄二（2023 年 2 月 23 日），僅限木材" },
              { en:"No permit", ja:"許可不要", zh:"不需許可" }
            ],
            [
              { en:"Spanish cedar", ja:"スパニッシュ・シダー", zh:"西班牙雪松" },
              "Cedrela spp.",
              {
                en:"Appendix II (28 August 2020), timber only",
                ja:"附属書II（二〇二〇年八月二十八日）、木材のみ",
                zh:"附錄二（2020 年 8 月 28 日），僅限木材" },
              { en:"No permit", ja:"許可不要", zh:"不需許可" }
            ],
            [
              { en:"Madagascar ebony", ja:"マダガスカル・エボニー", zh:"馬達加斯加烏木" },
              "Diospyros spp.",
              { en:"Appendix II (2013), timber only", ja:"附属書II（二〇一三年）、木材のみ", zh:"附錄二（2013 年），僅限木材" },
              { en:"No permit", ja:"許可不要", zh:"不需許可" }
            ],
            [
              { en:"West African ebony", ja:"西アフリカ産エボニー", zh:"西非烏木" },
              "Diospyros crassiflora",
              { en:"Not listed", ja:"掲載なし", zh:"未列名" },
              {
                en:"No CITES permit; legality laws still apply",
                ja:"条約の許可は不要。合法性の法律は適用される",
                zh:"不需 CITES 許可；仍適用合法性法規" }
            ],
            [
              { en:"Spruce, maple, walnut, koa, sapele", ja:"スプルース、メイプル、ウォルナット、コア、サペリ", zh:"雲杉、楓木、胡桃木、相思木（koa）、沙比利" },
              "—",
              { en:"Not listed", ja:"掲載なし", zh:"未列名" },
              { en:"No CITES permit", ja:"条約の許可は不要", zh:"不需 CITES 許可" }
            ],
            [
              { en:"Japanese woods (hinoki, sugi, sakura, kaede)", ja:"日本の木（ヒノキ、スギ、サクラ、カエデ）", zh:"日本木材（扁柏、柳杉、櫻木、楓木）" },
              "—",
              { en:"Not listed", ja:"掲載なし", zh:"未列名" },
              { en:"No CITES permit", ja:"条約の許可は不要", zh:"不需 CITES 許可" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: CITES Secretariat notifications and decisions of CoP8, CoP12 and CoP16–CoP20; Ministry of Economy, Trade and Industry (CITES procedures). As on the book's Rosewood & the Law page; rules change, so check before travelling.",
            ja:"出典：ワシントン条約事務局の通告と第八回、第十二回、第十六〜二十回締約国会議の決定、経済産業省（条約の手続き）。本書「ローズウッドと条約」の頁と同じ。規則は変わるので、旅の前に確認すること。",
            zh:"資料來源：CITES 秘書處通告及第 8、12、16 至 20 屆締約方大會決議；日本經濟產業省（公約相關程序）。與本書〈玫瑰木與公約〉一頁一致；規定會變動，出行前請再次確認。" } }
      ] },
    { t:"related", items:[
      { href:"chronology.html", why:{ en:"The dates in order.", ja:"年を順に。", zh:"依序排列的年代。" } },
      { href:"economy.html", why:{ en:"The industries' numbers.", ja:"産業の数字。", zh:"產業的數字。" } },
      { href:"glossary.html", why:{ en:"The words.", ja:"言葉。", zh:"詞彙。" } },
      { href:"sources.html", why:{ en:"Where the numbers come from.", ja:"数字の出どころ。", zh:"數字的出處。" } }
    ] }
  ]
};

/* ---- ----------------------------------------------- faq */
GIFU.pages["faq"] = {
  kicker: { en:"Reference · 09", ja:"資料 · 09", zh:"資料 · 09" },
  title:  { en: "Questions & Answers", ja: "よくある問い", zh: "常見問答" },
  jp: "率直な答え",
  lede: {
    en: "Short, direct answers to the questions a reader or a visitor is most likely to ask, each with a pointer to the page that treats it properly. Where the honest answer is that the sources disagree, this page says so.",
    ja: "読者や旅人が最も尋ねそうな問いへの、短く率直な答え。それぞれに、きちんと扱う頁への案内を添えた。正直な答えが「資料が食い違う」であるところでは、そう述べる。",
    zh: "針對讀者或旅人最可能提出的問題，給出簡短直接的答覆，並各自附上深入處理該主題的頁面。凡誠實的答案是「各資料說法不一」之處，本頁便如此直說。"
  },
  body: [
    { t:"section", id:"place",
      title:{ en:"The place", ja:"土地", zh:"土地" }, jp:"基本",
      body:[
        { t:"defs", items:[
          { term:{en:"How do you say “Gifu”, and what does it mean?",ja:"「岐阜」はどう読み、何を意味するのか。",zh:"「岐阜」怎麼唸？是什麼意思？"},
            def:{en:"Two short syllables, <em>Gi-fu</em>, evenly stressed. 岐 is the first character of Qishan, the mountain from which the Zhou dynasty rose, and 阜, “hill”, is the second of Qufu, the birthplace of Confucius. Tradition says Oda Nobunaga gave the town the name in 1567, but Zen monks had used it as a literary name decades before. See <a href=\"names.html\">The Name “Gifu”</a>.",ja:"「ぎふ」の短い二音で、強弱はない。「岐」は周の興った岐山の、「阜」（丘）は孔子の生地・曲阜の字である。伝えでは1567年に織田信長が町に名づけたとされるが、禅僧は何十年も前から雅称として用いていた。<a href=\"names.html\">「岐阜」という名</a>を参照。",zh:"兩個短音節「Gi-fu」，輕重平均。「岐」取自周朝興起的岐山，「阜」（山丘）取自孔子出生地曲阜。傳說 1567 年由織田信長為城鎮命名，但禪僧早在數十年前便已把它當作雅稱使用。見<a href=\"names.html\">「岐阜」之名</a>。"} },
          { term:{en:"Are Mino and Hida different places?",ja:"美濃と飛騨は別の土地なのか。",zh:"美濃與飛驒是不同的地方嗎？"},
            def:{en:"They were two provinces for twelve centuries and have been one prefecture only since 1876. Mino, in the south, is plain and river country, warm and populous; Hida, in the north, is mountains, snow and forest, with about two-fifths of the land and 7 per cent of the people. They still differ in dialect, food and outlook. See <a href=\"provinces.html\">Mino and Hida</a>.",ja:"十二世紀にわたって別々の国であり、一つの県になったのは1876年である。南の美濃は平野と川の土地で、暖かく人が多い。北の飛騨は山と雪と森の土地で、県土の約五分の二と人口の7%を占める。いまも言葉と食と気風が違う。<a href=\"provinces.html\">美濃と飛騨</a>を参照。",zh:"它們作為兩個國存在了十二個世紀，直到 1876 年才合為一縣。南邊的美濃是平原與河川之地，溫暖而人口稠密；北邊的飛驒是山、雪與森林之地，約占全縣五分之二的土地與 7% 的人口。兩地至今在方言、飲食與氣質上仍有差異。見<a href=\"provinces.html\">美濃與飛驒</a>。"} },
          { term:{en:"Is Seki the same place as Sekigahara?",ja:"関と関ケ原は同じ場所か。",zh:"關與關原是同一個地方嗎？"},
            def:{en:"No. Seki is the blade town in the middle of the prefecture; Sekigahara, “the plain of the barrier”, is the battlefield at the western edge, named after the Fuwa barrier of the ancient highway. Seki's own name is also said to come from a barrier, though the details are not documented. See <a href=\"seki.html\">Seki, Town of Blades</a> and <a href=\"sekigahara.html\">Sekigahara</a>.",ja:"違う。関は県の中央の刃物の町で、関ケ原（「関の原」）は西端の古戦場であり、古代の街道の不破関にちなむ。関の名もまた関所に由来するといわれるが、詳しいことは文書に残っていない。<a href=\"seki.html\">刃物のまち・関</a>と<a href=\"sekigahara.html\">関ヶ原</a>を参照。",zh:"不是。關是位於縣中部的刀刃之城；關原（「關之原」）是西端的古戰場，名稱來自古代大道上的不破關。關的地名據說也源自一座關卡，但詳情並無文獻記載。見<a href=\"seki.html\">刀刃之城・關</a>與<a href=\"sekigahara.html\">關原</a>。"} },
          { term:{en:"Why “the land of clear streams”?",ja:"なぜ「清流の国」なのか。",zh:"為何稱為「清流之國」？"},
            def:{en:"Because of the Nagara, routinely listed with the Shimanto and the Kakita as one of Japan's three great clear streams, and the many clear rivers that join the Kiso and the Ibi. The prefecture has taken the phrase as its own name in recent years. See <a href=\"rivers.html\">Rivers &amp; Water</a>.",ja:"四万十川・柿田川とともに日本三大清流の一つに数えられる長良川と、木曽川や揖斐川に注ぐ多くの清らかな川のゆえである。県は近年この言葉を自らの呼び名としている。<a href=\"rivers.html\">川と水</a>を参照。",zh:"因為長良川——它常與四萬十川、柿田川並列為日本三大清流——以及許多匯入木曾川與揖斐川的清澈河流。縣府近年以此作為自稱。見<a href=\"rivers.html\">河川與水</a>。"} },
          { term:{en:"How hot, and how snowy?",ja:"どれほど暑く、どれほど雪が降るのか。",zh:"有多熱？雪有多大？"},
            def:{en:"Both extremes. Tajimi reached 40.9 °C in 2007 and Kanayama in Gero 41.0 °C in 2018; Shirakawa in the north is a special heavy-snowfall area, where two to three metres on the ground is not unusual. See <a href=\"climate.html\">Heat &amp; Snow</a>.",ja:"両極端である。多治見は2007年に40.9℃、下呂市金山は2018年に41.0℃を記録した。北の白川は特別豪雪地帯で、積雪二、三メートルは珍しくない。<a href=\"climate.html\">暑さと雪</a>を参照。",zh:"兩個極端都有。多治見在 2007 年達 40.9 °C，下呂市金山在 2018 年達 41.0 °C；北部的白川屬特別豪雪地帶，積雪兩三公尺並不稀奇。見<a href=\"climate.html\">酷暑與大雪</a>。"} }
        ] }
      ]
    },
    { t:"section", id:"history",
      title:{ en:"History", ja:"歴史", zh:"歷史" }, jp:"歴史",
      body:[
        { t:"defs", items:[
          { term:{en:"Why does Gifu matter in Japanese history?",ja:"なぜ岐阜は日本史で重要なのか。",zh:"岐阜在日本史上為何重要？"},
            def:{en:"Because the routes between east and west Japan pass through it. The gap at Sekigahara decided the war of 672 and the battle of 1600, and from Gifu Castle, taken in 1567, Nobunaga began the unification of the country. See <a href=\"history.html\">History at a Glance</a>.",ja:"東西の日本を結ぶ道がここを通るからである。関ケ原の狭間は672年の乱と1600年の戦いを決し、1567年に落とした岐阜城から信長は天下統一を始めた。<a href=\"history.html\">歴史の概観</a>を参照。",zh:"因為連接東西日本的道路都經過這裡。關原的隘口決定了 672 年的戰亂與 1600 年的戰役；信長則從 1567 年攻下的岐阜城開始統一天下。見<a href=\"history.html\">歷史概觀</a>。"} },
          { term:{en:"How big was the battle of Sekigahara?",ja:"関ヶ原の戦いの規模はどれほどか。",zh:"關原之戰的規模有多大？"},
            def:{en:"The figures usually quoted — about 80,000 on each side and six hours of fighting — come from accounts written after the event and are weak evidence. What is certain is that the eastern army won on 15 September 1600 and that Tokugawa Ieyasu ruled Japan afterwards. See <a href=\"sekigahara.html\">Sekigahara</a>.",ja:"よく引かれる数字——両軍それぞれ約八万、戦いは六時間——は後に書かれた記録によるもので、証拠としては弱い。確かなのは、1600年9月15日に東軍が勝ち、以後徳川家康が天下を治めたことである。<a href=\"sekigahara.html\">関ヶ原</a>を参照。",zh:"常被引用的數字——雙方各約八萬人、戰鬥六小時——出自事後寫成的記載，證據力薄弱。可以確定的是，東軍於 1600 年 9 月 15 日獲勝，此後由德川家康統治日本。見<a href=\"sekigahara.html\">關原</a>。"} },
          { term:{en:"Why are Gifu and Kagoshima sister prefectures?",ja:"なぜ岐阜県と鹿児島県は姉妹県なのか。",zh:"岐阜縣與鹿兒島縣為何是姐妹縣？"},
            def:{en:"Because in 1754–55 the shogunate made the Satsuma domain, far to the south, build levees and cut-offs on the lower rivers at its own ruinous cost; dozens of its men died, and their leader Hirata Yukie died when the work was done. The two prefectures have been sister prefectures since 1971. See <a href=\"chisui.html\">Taming the Three Rivers</a>.",ja:"1754年から55年にかけ、幕府は遠い南の薩摩藩に、自らの莫大な費用で下流の堤と締切を築かせた。数十人が亡くなり、総奉行の平田靱負も工事の完了後に没した。両県は1971年から姉妹県である。<a href=\"chisui.html\">木曽三川の治水</a>を参照。",zh:"因為 1754 至 55 年間，幕府令遠在南方的薩摩藩自費在下游修築堤防與截流工程，代價慘重；數十人喪生，總奉行平田靱負也在工程完成後身亡。兩縣自 1971 年起結為姐妹縣。見<a href=\"chisui.html\">木曾三川的治水</a>。"} }
        ] }
      ]
    },
    { t:"section",
      id:"forest",
      title:{ en:"The forest", ja:"森", zh:"森林" },
      jp:"森林",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"How much of Gifu is forest?", ja:"岐阜はどれくらいが森なのか", zh:"岐阜有多少是森林？" },
              jp:"森林率",
              def:{
                en:"About 862,000 hectares, or four-fifths of the prefecture. Only Kōchi has a higher share of its land under forest, and Gifu ranks fifth among the 47 prefectures by forest area. See <a href=\"forests.html\">Gifu's Forests</a>.",
                ja:"約八十六万二千ヘクタール、県土の五分の四である。森林の割合が岐阜より高いのは高知だけで、森林の面積では四十七都道府県のうち五位である。<a href=\"forests.html\">岐阜の森林</a>を参照。",
                zh:"約 86.2 萬公頃，占全縣面積的五分之四。森林覆蓋比例比岐阜高的只有高知；以森林面積計，岐阜在 47 個都道府縣中排名第五。見<a href=\"forests.html\">岐阜的森林</a>。" } },
            { term:{ en:"Was it all planted?", ja:"すべて植えた森なのか", zh:"全都是人工林嗎？" },
              jp:"人工林と天然林",
              def:{
                en:"No — less than half. In Gifu's private forests about 26 per cent of the area is planted hinoki and 16 per cent planted sugi, an unusual balance in a country where sugi usually dominates; about 43 per cent is broadleaved woodland, most of it cut and regrown for fuel over centuries. See <a href=\"broadleaf.html\">The Broadleaf Forests</a>.",
                ja:"いいえ、半分に満たない。岐阜の民有林では、面積の約二十六パーセントが植えたヒノキ、十六パーセントが植えたスギで、ふつうはスギが多い日本では珍しい割合である。約四十三パーセントは広葉樹の森で、その多くは何百年も薪のために伐られては再び育ってきた。<a href=\"broadleaf.html\">広葉樹の森</a>を参照。",
                zh:"不是，不到一半。在岐阜的私有林中，約 26% 的面積是人工種植的扁柏、16% 是人工柳杉；在一般以柳杉為主的日本，這個比例相當少見。約 43% 是闊葉林，大多數數百年來為了薪柴反覆砍伐又再生。見<a href=\"broadleaf.html\">闊葉樹之森</a>。" } },
            { term:{ en:"What is the difference between hinoki and sugi?", ja:"ヒノキとスギはどう違うのか", zh:"扁柏與柳杉有什麼不同？" },
              jp:"檜と杉",
              def:{
                en:"Both are native conifers of the cypress family, but hinoki is denser (air-dry density about 0.44 against 0.38), paler, finer-grained and more resistant to rot, and is the timber of shrines, temples and Noh stages. Sugi grows faster, is lighter and softer, and fills about four in every ten hectares of Japan's plantations. See <a href=\"hinoki.html\">Hinoki</a> and <a href=\"sugi.html\">Sugi</a>.",
                ja:"どちらもヒノキ科の在来の針葉樹だが、ヒノキのほうが重く（気乾密度約0.44に対してスギは0.38）、色が淡く、木目が細かく、腐りにくい。社寺や能舞台の材である。スギは成長が速く、軽くて柔らかく、日本の人工林の面積のおよそ十分の四を占める。<a href=\"hinoki.html\">ヒノキ</a>と<a href=\"sugi.html\">スギ</a>を参照。",
                zh:"兩者都是柏科的日本原生針葉樹，但扁柏較重（氣乾密度約 0.44，柳杉約 0.38）、顏色較淺、紋理較細，也更耐腐，是神社、寺院與能舞台的用材。柳杉長得較快，較輕較軟，占日本人工林面積約十分之四。見<a href=\"hinoki.html\">日本扁柏</a>與<a href=\"sugi.html\">日本柳杉</a>。" } },
            { term:{ en:"Why do plantations have to be thinned?", ja:"人工林はなぜ間伐しなければならないのか", zh:"人工林為何必須疏伐？" },
              jp:"間伐",
              def:{
                en:"Because they were planted densely on purpose — traditionally about 3,000 seedlings a hectare — so that trees grow tall, straight and with narrow rings. Without repeated thinning such stands become dark, thin-stemmed and prone to snow break, wind throw and landslips. See <a href=\"silviculture.html\">Planting &amp; Tending</a>.",
                ja:"もともと、わざと密に植えたからである。昔は一ヘクタールに約三千本を植え、木を高く、まっすぐ、年輪を細かく育てた。間伐を重ねないと、そうした林は暗く、幹は細くなり、雪折れ、風倒、山崩れを起こしやすくなる。<a href=\"silviculture.html\">植えて育てる</a>を参照。",
                zh:"因為它們本來就刻意種得很密——傳統上每公頃約 3,000 株——好讓樹木長得高、直、年輪細密。若不反覆疏伐，這樣的林分會變得陰暗、樹幹細弱，容易雪折、風倒與崩塌。見<a href=\"silviculture.html\">造林與撫育</a>。" } },
            { term:{ en:"Why do some owners not replant after felling?", ja:"伐ったあとに植えない所有者がいるのはなぜか", zh:"為何有些林主伐木後不再造林？" },
              jp:"再造林",
              def:{
                en:"Money. The Forestry Agency's model puts the cost of establishing a hectare of sugi — planting and five years of weeding — at about ¥1.84 million, while the owner of a fifty-year-old stand receives only about ¥0.91 million for the standing timber. Subsidies cover much of the gap, but not all. See <a href=\"debates.html\">Where People Disagree</a>.",
                ja:"お金である。林野庁の試算では、一ヘクタールのスギ林をつくる費用（植栽と五年間の下刈り）は約百八十四万円だが、五十年生の林の所有者が立木代として受け取るのは約九十一万円にすぎない。補助金がその差の多くを埋めるが、すべてではない。<a href=\"debates.html\">論の分かれるところ</a>を参照。",
                zh:"錢。根據林野廳的試算，造一公頃柳杉林（種植加五年除草）約需 184 萬日圓，而 50 年生林分的林主出售立木只能拿到約 91 萬日圓。補助金填補了大部分差距，但不是全部。見<a href=\"debates.html\">意見分歧之處</a>。" } },
            { term:{ en:"Is cutting trees bad for the climate?", ja:"木を伐ることは気候に悪いのか", zh:"伐木對氣候有害嗎？" },
              jp:"炭素",
              def:{
                en:"Not necessarily. Dry wood is about half carbon: a cubic metre of sugi holds about 0.16 tonnes, taken from some 0.57 tonnes of CO₂. A forest that is harvested and replanted, with the wood kept in long-lived buildings, can store more over time than one left to age, though how much is debated. See <a href=\"carbon.html\">Forests &amp; Carbon</a>.",
                ja:"かならずしもそうではない。乾いた木の約半分は炭素で、スギ一立方メートルは約0.16トンの炭素をもち、それは約0.57トンのCO₂から取りこまれたものである。伐って植え直し、木を長もちする建物に使う森は、老いるにまかせた森より長い目で見て多くを蓄えうる。ただしその量には議論がある。<a href=\"carbon.html\">森と炭素</a>を参照。",
                zh:"不一定。乾燥木材約一半是碳：一立方公尺柳杉約含 0.16 公噸碳，來自約 0.57 公噸的二氧化碳。經伐採再造林、且木材用於長壽建築的森林，長期而言可能比任其老化的森林儲存更多碳，不過數量多少仍有爭議。見<a href=\"carbon.html\">森林與碳</a>。" } },
            { term:{ en:"What are the “five trees of Kiso”?", ja:"「木曽五木」とは何か", zh:"什麼是「木曾五木」？" },
              jp:"木曽五木",
              def:{
                en:"Hinoki, sawara, asunaro, nezuko and kōyamaki — five conifers that the Owari domain forbade anyone to cut in its Kiso forests from 1708, including the Ura-Kiso villages now in Gifu. The rule was remembered as “one tree, one head”. See <a href=\"fivetrees.html\">The Five Trees of Kiso</a>.",
                ja:"ヒノキ、サワラ、アスナロ、ネズコ、コウヤマキの五つの針葉樹で、尾張藩は一七〇八年から、いまは岐阜県にある裏木曽の村々を含む木曽の山で、これらを伐ることを禁じた。その掟は「木一本、首一つ」として語り継がれている。<a href=\"fivetrees.html\">木曽五木</a>を参照。",
                zh:"扁柏、花柏、羅漢柏、香柏與日本金松五種針葉樹。尾張藩自 1708 年起禁止任何人在其木曾山林中砍伐它們，包括今屬岐阜的裏木曾村落。這條禁令以「一木一首」流傳後世。見<a href=\"fivetrees.html\">木曾五木</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"timber",
      title:{ en:"Timber", ja:"木材", zh:"木材" },
      jp:"木材",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"How does a tree become a board?", ja:"木はどうやって板になるのか", zh:"一棵樹如何變成一塊木板？" },
              jp:"流れ",
              def:{
                en:"It is felled and cut into logs on the slope, extracted to a forest road (<em>sozai seisan</em>, “raw-material production”), sold — often at a log market — to a sawmill, sawn, dried to the moisture it will live at, graded and, for house frames, cut to shape in a precut factory. See <a href=\"logging.html\">The Logging Business</a> and <a href=\"sawmill.html\">Sawmilling</a>.",
                ja:"斜面で伐り倒されて丸太に切られ、林道まで運び出され（素材生産）、多くは原木市場を経て製材所へ売られ、挽かれ、使われる場所の含水率まで乾かされ、等級をつけられ、家の骨組みならプレカット工場で形に刻まれる。<a href=\"logging.html\">素材生産という仕事</a>と<a href=\"sawmill.html\">製材</a>を参照。",
                zh:"在坡地上伐倒並截成原木，搬出到林道（稱為「素材生產」），常經由原木市場賣給製材廠，鋸開、乾燥到使用環境的含水率、分級；若是房屋骨架，還會在預切工廠加工成形。見<a href=\"logging.html\">伐木這門生意</a>與<a href=\"sawmill.html\">製材</a>。" } },
            { term:{ en:"What is a log market?", ja:"原木市場とは何か", zh:"什麼是原木市場？" },
              jp:"原木市場",
              def:{
                en:"A yard where logs from many owners are laid out in lots on fixed market days and auctioned to sawmills, builders and craftsmen, who inspect each one. Gifu's forest cooperatives' federation runs three regional markets, and Gifu city has a market for fine broadleaf and figured logs that is described as the largest of its kind in Japan. See <a href=\"markets.html\">Log Markets &amp; Prices</a>.",
                ja:"決まった市日に、多くの所有者の丸太を椪（はい）ごとに並べ、製材所、工務店、職人が一本ずつ見て競り落とす土場である。岐阜県森林組合連合会は三つの地域の共販所を営み、岐阜市には日本最大とされる広葉樹銘木の市場がある。<a href=\"markets.html\">原木市場と価格</a>を参照。",
                zh:"在固定的市日，把許多林主的原木分批排列在場上，由製材廠、營造商與工匠逐根檢視後競標的場所。岐阜縣森林組合聯合會經營三個地區市場，岐阜市則有一座號稱日本最大的闊葉樹銘木市場。見<a href=\"markets.html\">原木市場與價格</a>。" } },
            { term:{ en:"Why must timber be dried?", ja:"木材はなぜ乾かさなければならないのか", zh:"木材為何一定要乾燥？" },
              jp:"乾燥",
              def:{
                en:"Because wood shrinks as it loses water and keeps moving with the humidity. Drying brings it close to the moisture it will reach in use — about 15–20 per cent for a structural post, 8–12 per cent for furniture and flooring in heated rooms — so that most shrinkage happens before it is fixed in place. See <a href=\"drying.html\">Drying</a> and <a href=\"moisture.html\">Wood &amp; Water</a>.",
                ja:"木は水を失うと縮み、湿度に応じて動きつづけるからである。乾燥によって、使われる場所でなる含水率——構造用の柱ならおよそ15〜20％、暖房のある部屋の家具や床なら8〜12％——に近づけておけば、縮みの大半は固定される前にすむ。<a href=\"drying.html\">乾燥</a>と<a href=\"moisture.html\">木と水分</a>を参照。",
                zh:"因為木材失水會收縮，並且會隨濕度持續變動。乾燥是讓木材接近使用時的含水率——結構用柱約 15–20%，暖氣房內的家具與地板約 8–12%——使大部分收縮在固定之前就完成。見<a href=\"drying.html\">乾燥</a>與<a href=\"moisture.html\">木與水分</a>。" } },
            { term:{ en:"Why is a knot-free hinoki post so expensive?", ja:"節のないヒノキの柱はなぜ高いのか", zh:"無節的扁柏柱為何那麼貴？" },
              jp:"無節",
              def:{
                en:"Because it can only come from the outer, pruned wood of a large tree that someone tended for decades. The trade grades visible timber by knots: a <em>shihō mubushi</em> post is clear on all four faces, and posts clear on three, two or one face are cheaper in turn. See <a href=\"grading.html\">Grades &amp; Standards</a>.",
                ja:"何十年も手入れされた大きな木の、枝打ちされた外側の材からしかとれないからである。見える材は節で格付けされ、四面に節のない「四方無節」が最上で、三方、二方、一方と順に安くなる。<a href=\"grading.html\">等級と規格</a>を参照。",
                zh:"因為它只能取自經過數十年照料、修枝過的大樹外層木材。外露用材依節來分級：四面無節的「四方無節」為最高，三面、兩面、一面無節的柱子依序較便宜。見<a href=\"grading.html\">等級與規格</a>。" } },
            { term:{ en:"Does Japan have to import its wood?", ja:"日本は木を輸入しなければならないのか", zh:"日本必須進口木材嗎？" },
              jp:"自給率",
              def:{
                en:"Less than it used to. Japan's wood self-sufficiency fell from nearly nine-tenths in 1960 to under a fifth in 2002 and has recovered to over forty per cent, while the timber standing in its forests has almost tripled since 1966. The limit is the cost of harvesting, not the supply of trees. See <a href=\"trade.html\">Trade &amp; Self-Sufficiency</a>.",
                ja:"以前ほどではない。日本の木材自給率は一九六〇年の九割近くから二〇〇二年には二割を切るまで下がり、いまは四割を超えるまで戻った。一方、森に立つ木の量は一九六六年からほぼ三倍になった。限界は木の量ではなく、伐り出す費用である。<a href=\"trade.html\">貿易と自給</a>を参照。",
                zh:"比過去少。日本的木材自給率從 1960 年的近九成降到 2002 年的不到兩成，如今已回升到四成以上；同時森林的立木蓄積量自 1966 年以來增加了將近三倍。限制在於伐採成本，而不是樹木的數量。見<a href=\"trade.html\">貿易與自給</a>。" } },
            { term:{ en:"What is CLT?", ja:"CLTとは何か", zh:"什麼是 CLT？" },
              jp:"直交集成板",
              def:{
                en:"Cross-laminated timber: large panels of boards glued in three, five or seven layers at right angles, used as walls and floors in mid-rise buildings. Japan set a JAS for it in 2013 and building rules in 2016, and values it as a way to use large volumes of sugi. See <a href=\"engineered.html\">Engineered Wood</a>.",
                ja:"直交集成板。板を三層、五層、七層と直角に重ねて接着した大きなパネルで、中層の建物の壁や床になる。日本は二〇一三年にJASを、二〇一六年に建築の基準を定め、スギを大量に使う方法として期待している。<a href=\"engineered.html\">エンジニアードウッド</a>を参照。",
                zh:"直交集成板：將板材以直角交錯膠合成三、五或七層的大型板材，用作中層建築的牆與樓板。日本於 2013 年訂定其 JAS 規格、2016 年訂定建築規範，視之為大量使用柳杉的方法。見<a href=\"engineered.html\">工程木材</a>。" } },
            { term:{ en:"Is it true that Japanese buildings use no nails?", ja:"日本の建物は釘を使わないというのは本当か", zh:"日本建築真的不用釘子嗎？" },
              jp:"継手",
              def:{
                en:"Not quite. Traditional buildings used iron nails and clamps where they were convenient, but the frame is held together mainly by interlocking joints locked with wooden pins and wedges. See <a href=\"joinery.html\">Joinery</a> and <a href=\"myths.html\">What People Get Wrong</a>.",
                ja:"正確ではない。伝統的な建物も、便利なところでは鉄の釘やかすがいを使った。ただし骨組みは、主に組みあう継手と仕口を木の込栓や楔で締めることで保たれている。<a href=\"joinery.html\">継手と仕口</a>と<a href=\"myths.html\">よく誤解されること</a>を参照。",
                zh:"不完全正確。傳統建築在方便之處也使用鐵釘與鐵鋦，但骨架主要是靠互相咬合的榫接，再以木栓與楔子鎖緊來維持。見<a href=\"joinery.html\">榫接</a>與<a href=\"myths.html\">常見的誤解</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"furniture",
      title:{ en:"Hida furniture", ja:"飛騨の家具", zh:"飛驒家具" },
      jp:"飛騨家具",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Why is Takayama a furniture town?", ja:"高山はなぜ家具の町なのか", zh:"高山為何是家具之城？" },
              jp:"起こり",
              def:{
                en:"Because of beech and steam. In 1920 local investors founded Chūō Mokkō to make bentwood chairs in the Viennese Thonet manner from Hida beech, then thought fit only for charcoal and clogs. Within fifteen years Hida chairs were sold in the United States, and the town's carpenters and carvers supplied the skills. See <a href=\"furniture.html\">Hida Furniture</a>.",
                ja:"ブナと蒸気のおかげである。一九二〇年、地元の出資者が中央木工を興し、当時は炭や下駄にしか向かないとされた飛騨のブナで、ウィーンのトーネット風の曲木椅子をつくりはじめた。十五年のうちに飛騨の椅子はアメリカで売られるようになり、町の大工や彫刻師がその技を支えた。<a href=\"furniture.html\">飛騨の家具</a>を参照。",
                zh:"因為山毛櫸與蒸汽。1920 年，當地出資者創立中央木工，以當時被認為只適合燒炭與做木屐的飛驒山毛櫸，仿維也納 Thonet 的方式製作曲木椅。不到十五年，飛驒的椅子就在美國販售，而鎮上的木匠與雕刻師提供了技藝。見<a href=\"furniture.html\">飛驒家具</a>。" } },
            { term:{ en:"Is Hida furniture made from Hida trees?", ja:"飛騨の家具は飛騨の木でできているのか", zh:"飛驒家具是用飛驒的樹做的嗎？" },
              jp:"材の産地",
              def:{
                en:"Often not. Much fine Japanese furniture is made from imported oak and walnut, and the Hida furniture trademark certifies where a piece was made, not where its wood grew. Some makers now work deliberately with Japanese sugi and local broadleaves. See <a href=\"buying.html\">Buying Wooden Things</a> and <a href=\"myths.html\">What People Get Wrong</a>.",
                ja:"そうでないことが多い。日本の上質な家具の多くは輸入のナラやウォールナットでつくられ、飛騨の家具の商標が保証するのはつくられた場所であって、木の育った場所ではない。いまは国産のスギや地元の広葉樹をあえて使うつくり手もいる。<a href=\"buying.html\">木の物を選ぶ</a>と<a href=\"myths.html\">よく誤解されること</a>を参照。",
                zh:"往往不是。許多日本高級家具使用進口橡木與胡桃木，而飛驒家具商標保證的是製作地點，而非木材生長之地。如今也有工匠刻意使用日本柳杉與在地闊葉樹。見<a href=\"buying.html\">挑選木製品</a>與<a href=\"myths.html\">常見的誤解</a>。" } },
            { term:{ en:"What does the Hida furniture mark guarantee?", ja:"飛騨の家具のマークは何を保証するのか", zh:"飛驒家具標章保證什麼？" },
              jp:"地域団体商標",
              def:{
                en:"“Hida no kagu” and “Hida-Takayama no kagu” were registered as regional collective trademarks in January 2008, with a logo in 2009 and registrations in Taiwan (2009) and China (2010). A maker must meet six standards, among them formaldehyde class F☆☆☆☆, all processing after primary sawing done in Hida, a ten-year warranty on wooden parts and legally sourced wood. See <a href=\"furniture.html\">Hida Furniture</a>.",
                ja:"「飛騨の家具」と「飛騨・高山の家具」は二〇〇八年一月に地域団体商標として登録され、二〇〇九年にロゴ、さらに台湾（二〇〇九年）と中国（二〇一〇年）でも登録された。つくり手は六つの基準を満たさねばならず、そのなかにはホルムアルデヒドF☆☆☆☆、一次製材後のすべての加工を飛騨で行うこと、木部の十年保証、合法な木材の使用が含まれる。<a href=\"furniture.html\">飛騨の家具</a>を参照。",
                zh:"「飛驒家具」與「飛驒・高山家具」於 2008 年 1 月註冊為地域團體商標，2009 年增設標誌，並於台灣（2009 年）與中國（2010 年）註冊。製造商須符合六項標準，包括甲醛等級 F☆☆☆☆、一次製材後的所有加工都在飛驒完成、木製部分保固十年，以及使用合法木材。見<a href=\"furniture.html\">飛驒家具</a>。" } },
            { term:{ en:"How many furniture makers are there?", ja:"家具のつくり手はどれくらいいるのか", zh:"有多少家具製造商？" },
              jp:"飛騨木工連合会",
              def:{
                en:"About two dozen companies, most in Takayama and a few in Hida city, belong to the Hida Mokkō Rengōkai, the makers' federation — from factories making hundreds of chairs a day to small workshops. Around them work many independent makers, turners and lacquerers. See <a href=\"houses.html\">Makers and Studios</a> and <a href=\"makers.html\">A Directory of Makers</a>.",
                ja:"およそ二十数社が飛騨木工連合会に加わっており、多くは高山、いくつかは飛騨市にある。一日に何百脚もの椅子をつくる工場から小さな工房までさまざまである。そのまわりで、多くの独立した家具職人、挽物師、塗師が働いている。<a href=\"houses.html\">つくり手と工房</a>と<a href=\"makers.html\">作り手名鑑</a>を参照。",
                zh:"約二十多家公司加入製造商聯合會「飛驒木工聯合會」，大多在高山，少數在飛驒市——從每天生產數百張椅子的工廠到小型工坊都有。其周圍還有許多獨立家具工匠、車旋師與漆師。見<a href=\"houses.html\">工匠與工坊</a>與<a href=\"makers.html\">製作者名鑑</a>。" } },
            { term:{ en:"Why are Hida chairs bent rather than carved?", ja:"飛騨の椅子はなぜ削るのでなく曲げるのか", zh:"飛驒的椅子為何用彎曲而非削切？" },
              jp:"曲木",
              def:{
                en:"Because a steamed blank bent around a form keeps the grain running along the curve, so a thin leg or back can be strong where a sawn curve would cut across the fibres and snap. The method came from Michael Thonet's Vienna and is still worked by hand teams in Hida's factories. See <a href=\"bentwood.html\">Bentwood</a> and <a href=\"chairs.html\">The Chair</a>.",
                ja:"蒸した材を型に沿って曲げると、木目が曲線に沿って通るため、細い脚や背でも強くできるからである。鋸で曲線を切り出すと繊維を断ち切り、折れやすくなる。この方法はミヒャエル・トーネットのウィーンから伝わり、飛騨の工場ではいまも人の手で曲げている。<a href=\"bentwood.html\">曲木</a>と<a href=\"chairs.html\">椅子</a>を参照。",
                zh:"因為蒸過的木料沿模具彎曲後，木紋會順著曲線走，即使椅腳或椅背很細也能很強韌；若用鋸子切出曲線，則會切斷纖維而容易折斷。這種方法源自 Michael Thonet 的維也納，飛驒的工廠至今仍由人手團隊彎製。見<a href=\"bentwood.html\">曲木</a>與<a href=\"chairs.html\">椅子</a>。" } },
            { term:{ en:"Can I visit a furniture factory?", ja:"家具工場を見学できるか", zh:"可以參觀家具工廠嗎？" },
              jp:"見学",
              def:{
                en:"Yes, by booking ahead. Several Takayama makers open their showrooms, and some run tours: Nissin Mokkō, for example, offers a two-hour factory tour followed by a workshop in which visitors make a small object, from ¥2,200 to ¥5,500 depending on the piece. Hida Sangyō's showroom is about fifteen minutes' walk from Takayama station. See <a href=\"woodjourneys.html\">Five Journeys</a>.",
                ja:"予約すればできる。高山のいくつかの家具会社はショールームを開いており、見学を受け入れるところもある。たとえば日進木工は、二時間の工場見学のあとに小さな品をつくる体験を、つくる品により二千二百円から五千五百円で行っている。飛騨産業のショールームは高山駅から歩いて約十五分である。<a href=\"woodjourneys.html\">五つの旅</a>を参照。",
                zh:"可以，但需事先預約。高山有幾家家具公司開放展示間，有些也接受參觀：例如日進木工提供兩小時的工廠參觀，接著讓訪客動手做一件小物，費用依作品為 2,200 至 5,500 日圓。飛驒產業的展示間距高山車站步行約十五分鐘。見<a href=\"woodjourneys.html\">五段旅程</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"wood-crafts",
      title:{ en:"Wood crafts", ja:"木の工芸", zh:"木作工藝" },
      jp:"工芸",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Who were the Hida takumi?", ja:"飛騨の匠とは誰だったのか", zh:"飛驒之匠是什麼人？" },
              jp:"飛騨工",
              def:{
                en:"Carpenters sent from Hida to the capital in place of taxes. Under the eighth-century legal codes the mountain province was excused the ordinary levies and instead supplied about a hundred craftsmen a year, who built palaces and temples for terms of a year; the system lasted some four hundred years. The name has been Hida's badge of skill ever since. See <a href=\"takumi.html\">The Hida Takumi</a>.",
                ja:"税の代わりに飛騨から都へ送られた工である。八世紀の律令のもとで、山国の飛騨は通常の税を免じられ、代わりに毎年百人ほどの工を出し、彼らは一年交代で宮殿や寺を建てた。このしくみは約四百年つづいた。以来その名は、飛騨の技の看板となっている。<a href=\"takumi.html\">飛騨の匠</a>を参照。",
                zh:"以工匠代替稅賦、從飛驒派往京城的木匠。依八世紀的律令，這個山國免繳一般賦稅，改為每年派出約一百名工匠，以一年為期興建宮殿與寺院；這套制度延續約四百年。此後這個名號一直是飛驒技藝的招牌。見<a href=\"takumi.html\">飛驒的匠人</a>。" } },
            { term:{ en:"What is Hida Shunkei?", ja:"飛騨春慶とは何か", zh:"什麼是飛驒春慶？" },
              jp:"春慶塗",
              def:{
                en:"Lacquerware in which a transparent amber lacquer is laid over wood stained yellow or red, so that the grain of hinoki, sawara or horse chestnut shows through. By tradition it began in Takayama in about 1606 with a carpenter's tray of split sawara; it was designated a national traditional craft on 17 February 1975. See <a href=\"shunkei.html\">Hida Shunkei</a>.",
                ja:"黄や赤に染めた木地に透明な琥珀色の漆を重ね、ヒノキ、サワラ、トチの木目を透かして見せる漆器である。伝えでは一六〇六年ごろ、高山で大工が割ったサワラでつくった盆に始まる。一九七五年二月十七日に国の伝統的工芸品に指定された。<a href=\"shunkei.html\">飛騨春慶</a>を参照。",
                zh:"在染成黃色或紅色的木胎上塗透明琥珀色漆，讓扁柏、花柏或七葉樹的木紋透出的漆器。相傳約於 1606 年始於高山一位木匠以劈開的花柏做成的托盤；1975 年 2 月 17 日獲指定為國家傳統工藝品。見<a href=\"shunkei.html\">飛驒春慶</a>。" } },
            { term:{ en:"What is Ichii Ittōbori?", ja:"一位一刀彫とは何か", zh:"什麼是一位一刀彫？" },
              jp:"一刀彫",
              def:{
                en:"Carving in Japanese yew, <em>ichii</em>, with knives and chisels alone, left without paint or lacquer so that every cut shows, using the contrast of red heartwood and cream sapwood. It was founded in Takayama in the early nineteenth century by a netsuke carver and designated a national traditional craft in 1975. See <a href=\"ittobori.html\">Ichii Ittōbori</a>.",
                ja:"イチイを小刀と鑿だけで彫り、彩色も漆もせずに刃跡をすべて見せる彫刻で、赤い心材と白い辺材の対比を生かす。十九世紀の初めに高山の根付師が始め、一九七五年に国の伝統的工芸品に指定された。<a href=\"ittobori.html\">一位一刀彫</a>を参照。",
                zh:"只用刀與鑿雕刻日本紅豆杉（<em>ichii</em>，一位），不上色也不塗漆，讓每一刀都看得見，並運用紅色心材與乳白邊材的對比。十九世紀初由高山一位根付雕刻師創始，1975 年獲指定為國家傳統工藝品。見<a href=\"ittobori.html\">一位一刀雕</a>。" } },
            { term:{ en:"Why are most masu made in Ōgaki?", ja:"枡はなぜ大垣でつくられるのか", zh:"為何大部分的枡產自大垣？" },
              jp:"大垣の枡",
              def:{
                en:"About eighty per cent of Japan's masu come from Ōgaki. Masu making took root there in the Meiji period, reputedly around 1890, helped by the city's closeness to Nagoya, the market for Kiso hinoki; its abundant spring water; and its canals and roads to the markets of central Japan. See <a href=\"masu.html\">The Masu of Ōgaki</a>.",
                ja:"日本の枡の約八割は大垣でつくられる。枡づくりは明治期、一八九〇年ごろに根づいたといわれ、木曽ヒノキの集まる名古屋に近いこと、豊かな湧き水、中部の市場へ通じる水路と道がそれを助けた。<a href=\"masu.html\">大垣の枡</a>を参照。",
                zh:"日本約八成的枡產自大垣。製枡業約於明治時期、據說是 1890 年前後在此紮根，得力於鄰近木曾扁柏的集散地名古屋、豐沛的湧泉，以及通往中部各市場的水道與道路。見<a href=\"masu.html\">大垣的枡</a>。" } },
            { term:{ en:"Is Mino paper a wood product?", ja:"美濃和紙は木の製品なのか", zh:"美濃和紙算是木製品嗎？" },
              jp:"美濃和紙",
              def:{
                en:"In a sense: it is made from the inner bark of the paper-mulberry shrub, <em>kōzo</em>, not from wood pulp. Mino washi was designated a national traditional craft on 22 May 1985; its strictest form, Hon-Minoshi, became an Important Intangible Cultural Property in 1969 and was inscribed by UNESCO in 2014. See <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>.",
                ja:"ある意味ではそうである。木材パルプではなく、楮という低木の内皮からつくる。美濃和紙は一九八五年五月二十二日に国の伝統的工芸品に指定され、最も厳格な本美濃紙は一九六九年に重要無形文化財となり、二〇一四年にユネスコの無形文化遺産に記載された。<a href=\"paper.html\">和紙・提灯・和傘</a>を参照。",
                zh:"某種意義上是：它以構樹（<em>kōzo</em>）的內樹皮製成，而不是木漿。美濃和紙於 1985 年 5 月 22 日獲指定為國家傳統工藝品；最嚴格的本美濃紙在 1969 年成為重要無形文化財，2014 年列入聯合國教科文組織名錄。見<a href=\"paper.html\">和紙、燈籠與和傘</a>。" } },
            { term:{ en:"What are the festival floats?", ja:"祭屋台とは何か", zh:"什麼是祭典屋台？" },
              jp:"屋台",
              def:{
                en:"Towering wooden carts, carved, lacquered, gilded and hung with brocade, drawn through Takayama, Furukawa and Ōgaki at their festivals — mobile buildings made by carpenters, carvers, lacquerers and metalworkers. Takayama's twenty-three floats were designated Important Tangible Folk Cultural Properties in 1960, and all three festivals were inscribed by UNESCO on 1 December 2016. See <a href=\"floats.html\">Festival Floats</a>.",
                ja:"彫刻をほどこし、漆を塗り、金箔を置き、錦を掛けた木の山車で、高山、古川、大垣の祭で曳かれる。大工、彫師、塗師、金工がつくる動く建物である。高山の二十三台の屋台は一九六〇年に重要有形民俗文化財に指定され、三つの祭はそろって二〇一六年十二月一日にユネスコの無形文化遺産に記載された。<a href=\"floats.html\">祭屋台</a>を参照。",
                zh:"經過雕刻、上漆、貼金並懸掛錦緞的高大木造花車，在高山、古川與大垣的祭典中拖行——由木匠、雕刻師、漆師與金工共同打造的移動建築。高山的 23 台屋台於 1960 年被指定為重要有形民俗文化財，三地祭典並於 2016 年 12 月 1 日一同列入聯合國教科文組織名錄。見<a href=\"floats.html\">祭典屋台</a>。" } },
            { term:{ en:"What exactly is urushi?", ja:"漆とは何か", zh:"漆究竟是什麼？" },
              jp:"漆",
              def:{
                en:"The sap of the lacquer tree, which hardens not by drying but by a chemical reaction that needs warmth and humidity. Once cured it is one of the most durable coatings known, resistant to water, alcohol and acids, though sensitive to ultraviolet light and sudden temperature changes. It can be wiped thinly into the grain or built up in coats. See <a href=\"finishes.html\">Finishes</a>.",
                ja:"ウルシの木の樹液で、乾くのではなく、温かさと湿り気を要する化学反応によって固まる。いったん硬化すると、水、アルコール、酸に強い、知られるかぎり最も丈夫な塗膜のひとつとなるが、紫外線と急な温度の変化には弱い。木目に薄く摺りこむこともでき、何層も塗り重ねることもできる。<a href=\"finishes.html\">塗装と仕上げ</a>を参照。",
                zh:"漆樹的樹液，它不是靠乾燥，而是靠需要溫度與濕度的化學反應而硬化。一旦硬化，便是已知最耐久的塗層之一，耐水、耐酒精、耐酸，但怕紫外線與溫度劇變。它可以薄薄擦入木紋，也可以一層層塗厚。見<a href=\"finishes.html\">塗裝與收尾</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"guitars",
      title:{ en:"Guitars", ja:"ギター", zh:"吉他" },
      jp:"ギター",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Which guitar makers are in Gifu?", ja:"岐阜にはどんなギターのつくり手がいるのか", zh:"岐阜有哪些吉他製造商？" },
              jp:"ヤイリとタカミネ",
              def:{
                en:"Two well-known companies and a scattering of individual makers. K. Yairi in Kani traces its origins to a Nagoya workshop of 1935 that moved to Kani in 1945; about thirty craftspeople build its guitars largely by hand. Takamine was founded in Sakashita, now part of Nakatsugawa, in 1959. See <a href=\"yairi.html\">Yairi</a>, <a href=\"takamine.html\">Takamine</a> and <a href=\"luthiers.html\">The Luthiers</a>.",
                ja:"よく知られた二社と、点在する個人の製作家である。可児のK.ヤイリは一九三五年の名古屋の工房に始まり、一九四五年に可児へ移った。約三十人の職人がほとんど手でギターをつくる。タカミネは一九五九年、いまは中津川市の一部である坂下で創業した。<a href=\"yairi.html\">ヤイリ</a>、<a href=\"takamine.html\">タカミネ</a>、<a href=\"luthiers.html\">個人製作家</a>を参照。",
                zh:"兩家知名公司，以及散布各地的個人製琴師。可兒的 K.Yairi 源於 1935 年名古屋的一間工房，1945 年遷至可兒；約 30 名職人以手工為主製作吉他。Takamine 於 1959 年在今屬中津川市的坂下創立。見<a href=\"yairi.html\">Yairi</a>、<a href=\"takamine.html\">Takamine</a>與<a href=\"luthiers.html\">獨立製琴師</a>。" } },
            { term:{ en:"Are Gifu guitars made of Gifu wood?", ja:"岐阜のギターは岐阜の木でできているのか", zh:"岐阜的吉他是用岐阜的木材做的嗎？" },
              jp:"材",
              def:{
                en:"Mostly not. The classic tonewoods — spruce and cedar for tops, rosewood and mahogany for backs and sides, ebony for fingerboards — come from North America, Europe, India and Africa. Japanese woods have so far appeared mainly in limited editions, such as K. Yairi's 2021 model with a top of old Yakushima sugi. See <a href=\"tonewoods.html\">Tonewoods</a> and <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>.",
                ja:"ほとんどはそうではない。定番のトーンウッド——表板のスプルースやシダー、裏板と側板のローズウッドやマホガニー、指板のエボニー——は北米、ヨーロッパ、インド、アフリカから来る。日本の木はこれまで主に限定品に使われてきた。たとえばK.ヤイリが二〇二一年に出した、古い屋久杉を表板にしたモデルである。<a href=\"tonewoods.html\">音響材</a>と<a href=\"japanesewoods.html\">和の木と和の楽器</a>を参照。",
                zh:"大多不是。經典音木——面板用的雲杉與雪松、背側板用的玫瑰木與桃花心木、指板用的烏木——來自北美、歐洲、印度與非洲。日本木材至今主要用於限量款，例如 K.Yairi 於 2021 年推出、以古老屋久杉為面板的型號。見<a href=\"tonewoods.html\">音木</a>與<a href=\"japanesewoods.html\">日本之木與日本樂器</a>。" } },
            { term:{ en:"Does the wood change the sound?", ja:"材で音は変わるのか", zh:"木材會改變聲音嗎？" },
              jp:"音と材",
              def:{
                en:"The top matters a great deal; the back and sides much less than prices suggest. In a study published in December 2018, six guitars identical except for their back and sides were rated very similarly by 52 guitarists who could not see them, and 31 guitarists could not easily tell pairs apart. See <a href=\"listening.html\">Can You Hear the Wood?</a>",
                ja:"表板の影響は大きいが、裏板と側板の影響は値段が示すよりずっと小さい。二〇一八年十二月に発表された研究では、裏板と側板以外は同じ六本のギターを、見えない状態で五十二人のギタリストが評価したところ、評価はほとんど同じで、三十一人のギタリストも二本ずつの違いを容易には聞き分けられなかった。<a href=\"listening.html\">木は聴こえるか</a>を参照。",
                zh:"面板影響很大；背側板的影響則遠小於價格所暗示的。2018 年 12 月發表的一項研究中，六把除背側板外完全相同的吉他，由 52 位看不見琴的吉他手評分，結果幾乎一樣；31 位吉他手也難以分辨兩兩之間的差異。見<a href=\"listening.html\">聽得見木頭嗎</a>。" } },
            { term:{ en:"Why is rosewood regulated?", ja:"ローズウッドはなぜ規制されているのか", zh:"玫瑰木為何受到管制？" },
              jp:"ワシントン条約",
              def:{
                en:"Because of the CITES convention. Brazilian rosewood was listed in its strictest appendix in 1992, and the whole rosewood genus <em>Dalbergia</em> in 2017; from 26 November 2019 finished musical instruments, parts and accessories were exempted again, except those containing Brazilian rosewood, which still need documents to cross borders. See <a href=\"cites.html\">Rosewood & the Law</a>.",
                ja:"ワシントン条約（CITES）のためである。ハカランダ（ブラジリアンローズウッド）は一九九二年に最も厳しい附属書に掲げられ、二〇一七年にはツルサイカチ属（ダルベルギア）全体が掲げられた。二〇一九年十一月二十六日からは、完成した楽器とその部品、付属品が再び除外されたが、ハカランダを含むものは今も国境を越えるのに書類が要る。<a href=\"cites.html\">ローズウッドと条約</a>を参照。",
                zh:"因為《瀕臨絕種野生動植物國際貿易公約》（CITES）。巴西玫瑰木於 1992 年列入最嚴格的附錄，2017 年整個黃檀屬（<em>Dalbergia</em>）都被列入；自 2019 年 11 月 26 日起，成品樂器及其零件、配件再度獲得豁免，但含巴西玫瑰木者跨境時仍須文件。見<a href=\"cites.html\">玫瑰木與公約</a>。" } },
            { term:{ en:"What humidity does a guitar need?", ja:"ギターにはどのくらいの湿度がよいのか", zh:"吉他需要多少濕度？" },
              jp:"湿度",
              def:{
                en:"Guitar makers agree on about 45–55 per cent relative humidity at ordinary room temperature, without rapid swings. In a heated Japanese winter room the air is far drier than that, and in a Taipei summer far wetter, so a hygrometer, a case and a humidifier or dehumidifier matter more than any polish. See <a href=\"guitarcare.html\">Caring for a Guitar</a>.",
                ja:"ギターメーカーの勧めはほぼ一致していて、ふつうの室温で相対湿度約45〜55％、急な変化を避けることである。日本の冬の暖房した部屋の空気はそれよりずっと乾き、台北の夏はずっと湿っているので、どんな艶出しよりも、湿度計とケース、加湿器や除湿機のほうが大事である。<a href=\"guitarcare.html\">ギターの手入れ</a>を参照。",
                zh:"吉他製造商的建議相當一致：在一般室溫下保持相對濕度約 45–55%，並避免劇烈變化。日本冬天開暖氣的房間遠比這乾燥，台北的夏天則遠比這潮濕，因此濕度計、琴盒與加濕器或除濕機，比任何亮光劑都重要。見<a href=\"guitarcare.html\">吉他的保養</a>。" } },
            { term:{ en:"How long does it take to make a guitar?", ja:"ギター一本をつくるのにどれくらいかかるのか", zh:"做一把吉他要多久？" },
              jp:"製作時間",
              def:{
                en:"For a single luthier, somewhere between one and two hundred hours of work spread over weeks, so that glue and finish can cure. In a factory dozens of specialists divide the same steps and many guitars move through the workshop at once. See <a href=\"making.html\">How a Guitar Is Made</a>.",
                ja:"一人の製作家なら、百時間から二百時間ほどの作業を、接着剤や塗装が硬化するのを待ちながら何週間かに分けて行う。工場では何十人もの専門の職人が同じ工程を分けもち、多くのギターが同時に工房を流れる。<a href=\"making.html\">ギターができるまで</a>を参照。",
                zh:"若由一位製琴師獨力製作，約需一百到兩百小時的工時，分散在數週內進行，好讓膠與塗料固化。在工廠裡，數十位專職工匠分擔相同的工序，許多把吉他同時在工房中流動。見<a href=\"making.html\">一把吉他的誕生</a>。" } },
            { term:{ en:"How big is Gifu's guitar industry?", ja:"岐阜のギター産業はどれくらいの規模なのか", zh:"岐阜的吉他產業有多大？" },
              jp:"出荷額",
              def:{
                en:"Small in number, significant in value. In 2021 Gifu shipped 16,552 guitars worth ¥1.23 billion — about ¥74,000 each, far above the national average. Nationally, METI's survey recorded shipments of 191,000 guitars worth ¥8,705 million in 2023, the highest value since 2007. See <a href=\"guitarindustry.html\">Japan's Guitar Industry</a>.",
                ja:"本数は少ないが、金額では大きい。二〇二一年、岐阜は一万六千五百五十二本、十二億三千万円のギターを出荷した。一本あたり約七万四千円で、全国平均をはるかに上回る。全国では、経済産業省の統計で二〇二三年の出荷が十九万一千本、八十七億五百万円で、二〇〇七年以来の高い金額だった。<a href=\"guitarindustry.html\">日本のギター産業</a>を参照。",
                zh:"數量不多，價值卻可觀。2021 年岐阜出貨 16,552 把吉他，價值 12.3 億日圓——每把約 74,000 日圓，遠高於全國平均。全國方面，經濟產業省統計 2023 年出貨 19.1 萬把、價值 87.05 億日圓，為 2007 年以來最高。見<a href=\"guitarindustry.html\">日本的吉他產業</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"buying",
      title:{ en:"Buying and care", ja:"買う、手入れする", zh:"選購與保養" },
      jp:"選び方・手入れ",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"How can I tell solid wood from veneer?", ja:"無垢材と突板はどう見分けるのか", zh:"如何分辨實木與貼皮？" },
              jp:"無垢と突板",
              def:{
                en:"Follow the grain over an edge: on solid wood (<em>muku</em>) the figure of the top runs down the edge and shows as end grain at the ends, while on veneer the edge is a separate strip or the pattern stops at the corner. Look also for the same knot or flame repeating across a large panel, which betrays veneer or printed film. See <a href=\"buying.html\">Buying Wooden Things</a>.",
                ja:"木目を縁まで追うとよい。無垢材なら天板の木目が縁へと続き、端には木口が見える。突板なら縁は別の細い材で、木目が角でぷつりと途切れる。大きな板面に同じ節や杢がくり返し現れていれば、突板か木目を印刷したシートである。<a href=\"buying.html\">木の物を選ぶ</a>を参照。",
                zh:"沿著木紋看到邊緣：實木（<em>muku</em>）的桌面紋理會延續到側邊，兩端可見木材端面；貼皮的邊緣則是另外貼上的窄條，或紋理在轉角處突然中斷。也可留意大片板面上是否反覆出現相同的節或火焰紋，那代表是貼皮或印刷膜。見<a href=\"buying.html\">挑選木製品</a>。" } },
            { term:{
                en:"What do “domestic furniture” and “domestic timber” mean?",
                ja:"「国産家具」と「国産材」はどう違うのか",
                zh:"「國產家具」與「國產材」有何不同？" },
              jp:"表示",
              def:{
                en:"Different things. <em>Kokusan kagu</em> says where the piece was made; <em>kokusanzai</em> says where the wood grew. A table can honestly be Japanese-made furniture of North American oak. See <a href=\"buying.html\">Buying Wooden Things</a>.",
                ja:"別のことを言っている。「国産家具」はつくられた場所を、「国産材」は木の育った場所を示す。北米のナラでつくった日本製の家具というテーブルは、偽りなく存在しうる。<a href=\"buying.html\">木の物を選ぶ</a>を参照。",
                zh:"兩者意義不同。「國產家具」說的是製作地點；「國產材」說的是木材生長之地。一張用北美橡木在日本製作的桌子，可以名正言順地稱為日本製家具。見<a href=\"buying.html\">挑選木製品</a>。" } },
            { term:{ en:"How do I know the wood was felled legally?", ja:"木が合法に伐られたかどうかはどうわかるのか", zh:"如何知道木材是合法採伐的？" },
              jp:"合法木材",
              def:{
                en:"Mostly through paperwork further up the chain. Japan's Clean Wood Act took effect in May 2017, and an amendment in force from April 2025 obliges log markets and sawmills that buy timber directly to check its legality. Forest certification by FSC or Japan's SGEC goes further, and Gifu's own certified-timber scheme, run since January 2007, traces wood from a Gifu forest to the building site. See <a href=\"buying.html\">Buying Wooden Things</a> and <a href=\"policy.html\">Forest Law &amp; Policy</a>.",
                ja:"主に、流通の上流での書類による。日本のクリーンウッド法は二〇一七年五月に施行され、二〇二五年四月に施行された改正で、木材を直接買い入れる原木市場や製材所に合法性の確認が義務づけられた。FSCや日本のSGECによる森林認証はさらに踏みこみ、岐阜県が二〇〇七年一月から運用する「ぎふ証明材」は、岐阜の森から建築現場までの木の道筋をたどる。<a href=\"buying.html\">木の物を選ぶ</a>と<a href=\"policy.html\">森林の法と政策</a>を参照。",
                zh:"主要靠供應鏈上游的文件。日本的《合法伐採木材流通利用促進法》（Clean Wood Act）於 2017 年 5 月施行，2025 年 4 月施行的修正案要求直接收購木材的原木市場與製材廠確認其合法性。FSC 或日本 SGEC 的森林認證更進一步；岐阜縣自 2007 年 1 月起實施的「岐阜證明材」制度，則追蹤木材從岐阜森林到建築工地的過程。見<a href=\"buying.html\">挑選木製品</a>與<a href=\"policy.html\">森林法規與政策</a>。" } },
            { term:{ en:"Is a wooden cutting board hygienic?", ja:"木のまな板は衛生的なのか", zh:"木砧板衛生嗎？" },
              jp:"まな板",
              def:{
                en:"Yes, if it is cleaned and dried. In experiments published in 1994 at the University of Wisconsin, bacteria applied to clean wooden boards were absorbed within minutes and could generally not be recovered from the surface, at least 98 per cent less than from plastic. Japanese cooks prefer hinoki, which is fragrant and light, or ginkgo. See <a href=\"care.html\">Caring for Wood</a>.",
                ja:"洗ってよく乾かせば衛生的である。一九九四年にウィスコンシン大学で発表された実験では、清潔な木の板に付けた細菌は数分で吸いこまれ、表面からはふつう回収できず、回収量はプラスチックより少なくとも九十八パーセント少なかった。日本の料理人は、香りがよく軽いヒノキか、イチョウを好む。<a href=\"care.html\">木の手入れ</a>を参照。",
                zh:"只要清洗並晾乾，就很衛生。1994 年威斯康辛大學發表的實驗中，塗在乾淨木板上的細菌在幾分鐘內被吸收，通常無法從表面再取回，取回量比塑膠至少少 98%。日本廚師偏好香氣宜人而輕巧的扁柏，或銀杏。見<a href=\"care.html\">木器保養</a>。" } },
            { term:{ en:"How should I look after a wooden table?", ja:"木のテーブルはどう手入れすればよいのか", zh:"木桌該如何保養？" },
              jp:"日々の手入れ",
              def:{
                en:"As Takayama's makers advise: dust with a soft dry cloth, or one soaked in water and wrung out hard; never put a wet glass or hot pan straight on the wood; keep it out of direct sun and the blast of an air-conditioner. When an oil finish looks dry, sand lightly with 240-grit paper, wipe on plant oil thinly, leave about twelve hours, then wax and buff. See <a href=\"care.html\">Caring for Wood</a>.",
                ja:"高山の家具会社の勧めのとおりにする。柔らかい乾いた布で、汚れには固く絞った濡れ布巾でほこりを拭く。濡れたグラスや熱い鍋を直接置かない。直射日光とエアコンの風を避ける。オイル仕上げの表面が乾いて見えたら、二四〇番の紙やすりで木目に沿って軽く研ぎ、植物油を薄く塗り、約十二時間おいてから蝋を塗って磨く。<a href=\"care.html\">木の手入れ</a>を参照。",
                zh:"照高山家具商的建議：用柔軟的乾布撣塵，髒污時用沾水後擰得很乾的布擦拭；不要把濕杯子或熱鍋直接放在木面上；避免陽光直射與冷氣直吹。油性塗裝表面看起來乾澀時，用 240 號砂紙順紋輕磨，薄塗植物油，靜置約十二小時，再上蠟拋光。見<a href=\"care.html\">木器保養</a>。" } },
            { term:{ en:"How do I keep a lacquer bowl?", ja:"漆の椀はどう扱えばよいのか", zh:"漆碗該怎麼保養？" },
              jp:"漆器",
              def:{
                en:"Wash it in lukewarm water, with a little diluted mild detergent and a soft sponge for grease, dry it and put it away. Avoid long soaking, the dishwasher, the microwave, strong sunlight and sudden heat; a chip that lets water under the lacquer should be repaired by a lacquerer. See <a href=\"care.html\">Caring for Wood</a> and <a href=\"shunkei.html\">Hida Shunkei</a>.",
                ja:"ぬるま湯で洗い、油汚れには薄めた中性洗剤と柔らかいスポンジを使い、拭いてからしまう。長いつけ置き、食器洗い機、電子レンジ、強い日差し、急な熱は避ける。漆の下に水が入りこむような欠けは、塗師に直してもらうのがよい。<a href=\"care.html\">木の手入れ</a>と<a href=\"shunkei.html\">飛騨春慶</a>を参照。",
                zh:"用溫水清洗，遇油污時用少量稀釋的中性清潔劑與軟海綿，擦乾後收好。避免長時間浸泡、洗碗機、微波爐、強烈日照與驟熱；若有缺口讓水滲到漆層下，應請漆師修補。見<a href=\"care.html\">木器保養</a>與<a href=\"shunkei.html\">飛驒春慶</a>。" } },
            { term:{
                en:"There are tiny holes and fine powder under my furniture. What is it?",
                ja:"家具の下に小さな穴と細かい粉がある。何なのか",
                zh:"家具下方出現小孔與細粉，那是什麼？" },
              jp:"虫害",
              def:{
                en:"Round holes of 1–2 mm with fine powder beneath are the sign of powderpost beetles, which attack the starch-rich sapwood. Heating the piece to 50 °C for 30 minutes kills eggs and larvae; old holes without fresh powder are usually inactive. See <a href=\"buying.html\">Buying Wooden Things</a>.",
                ja:"直径一〜二ミリの丸い穴の下に細かい粉があれば、デンプンの多い辺材を食べるヒラタキクイムシの仕業である。五十度で三十分加熱すれば卵も幼虫も死ぬ。新しい粉の出ていない古い穴は、たいてい活動していない。<a href=\"buying.html\">木の物を選ぶ</a>を参照。",
                zh:"直徑 1–2 公釐的圓孔下有細粉，是粉蠹蟲的跡象，牠們專吃富含澱粉的邊材。將家具加熱到 50 °C 持續 30 分鐘即可殺死卵與幼蟲；沒有新鮮粉末的舊孔通常已不活躍。見<a href=\"buying.html\">挑選木製品</a>。" } }
          ] }
      ] },
    { t:"section", id:"crafts",
      title:{ en:"Blades, paper and clay", ja:"刃・紙・土", zh:"刀刃、紙與土" }, jp:"工芸",
      body:[
        { t:"defs", items:[
          { term:{en:"Are Seki kitchen knives made like swords?",ja:"関の包丁は刀のようにつくられるのか。",zh:"關的菜刀是像刀劍那樣做的嗎？"},
            def:{en:"The idea is the swordsmith's — a hard edge in a softer body — but most Seki knives are made from laminated stainless steel supplied by specialist mills, cut, hardened in controlled furnaces, then ground and sharpened, with hand work at the grinding and edging. Swords themselves are still forged from traditional steel by a few licensed smiths. See <a href=\"knives.html\">The Kitchen Knife</a> and <a href=\"forging.html\">Making a Sword</a>.",ja:"考え方は刀鍛冶のもの——柔らかな地に硬い刃——だが、関の包丁の多くは専門の製鋼所がつくる積層ステンレス鋼から切り出し、管理された炉で焼き入れし、研いで刃を付ける。研ぎと刃付けには手仕事が残る。刀そのものは、いまも少数の認可を受けた刀匠が伝統の鋼から鍛える。<a href=\"knives.html\">包丁</a>と<a href=\"forging.html\">作刀</a>を参照。",zh:"其構想來自刀匠——較軟的刀身夾著堅硬的刃——但多數關的菜刀是以專業鋼廠供應的複合不鏽鋼切割成形，在控溫爐中淬火，再研磨開刃，手工仍保留在研磨與開刃的工序。刀劍本身則仍由少數持證刀匠以傳統鋼材鍛造。見<a href=\"knives.html\">廚刀</a>與<a href=\"forging.html\">鍛刀</a>。"} },
          { term:{en:"Can I watch a sword being forged?",ja:"作刀を見られるか。",zh:"可以觀看鍛刀嗎？"},
            def:{en:"Yes, at the Seki Traditional Swordsmith Museum on its demonstration days, which include the first forging of the year in January and the October cutlery festival. Check the dates before going. See <a href=\"museums.html\">Museums &amp; Workshops</a>.",ja:"できる。関鍛冶伝承館の公開日——正月の打ち初めや十月の刃物まつりを含む——に見られる。出かける前に日取りを確かめてほしい。<a href=\"museums.html\">博物館と工房</a>を参照。",zh:"可以。在關鍛冶傳承館的公開日——包括一月的開年鍛刀與十月的刀具祭——即可觀看。出發前請確認日期。見<a href=\"museums.html\">博物館與工坊</a>。"} },
          { term:{en:"What makes Mino paper special?",ja:"美濃和紙は何が特別なのか。",zh:"美濃和紙有何特別？"},
            def:{en:"It is thin, even and strong, and has been made in the valley for at least thirteen centuries — the registers of 702 in the Shōsōin are written on it. Its strictest form, Honminoshi, uses only Japanese kōzo and traditional methods and was inscribed by UNESCO in 2014. See <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>.",ja:"薄く、むらがなく、強い。少なくとも十三世紀にわたりこの谷で漉かれ、正倉院の702年の戸籍もこの紙に書かれている。最も厳格な本美濃紙は国産の楮と伝統の製法だけを用い、2014年にユネスコの無形文化遺産に記載された。<a href=\"paper.html\">和紙・提灯・和傘</a>を参照。",zh:"它輕薄、均勻而強韌，在這條河谷中至少已抄製了十三個世紀——正倉院 702 年的戶籍就寫在這種紙上。其最嚴格的形式「本美濃紙」只使用日本產楮與傳統製法，2014 年列入聯合國教科文組織非物質文化遺產。見<a href=\"paper.html\">和紙、燈籠與和傘</a>。"} },
          { term:{en:"Is Mino ware one style?",ja:"美濃焼は一つの様式なのか。",zh:"美濃燒是單一風格嗎？"},
            def:{en:"No. The name covers the Momoyama tea wares — Shino, Oribe, Ki-Seto, Seto-guro — and also most of the plain everyday plates and cups made in Japan: Gifu's share of the country's shipments is 71.1 per cent for Western-style tableware (2025). See <a href=\"minoyaki.html\">Mino Ware</a>.",ja:"違う。この名は桃山の茶陶——志野、織部、黄瀬戸、瀬戸黒——を指すとともに、日本でつくられる日常の皿や碗の大半をも含む。洋飲食器の全国出荷に占める岐阜の割合は71.1%（2025年）である。<a href=\"minoyaki.html\">美濃焼</a>を参照。",zh:"不是。這個名稱既包括桃山時代的茶陶——志野、織部、黃瀨戶、瀨戶黑——也涵蓋日本所產大部分的日常素面盤杯：岐阜在全國西式餐具出貨中占 71.1%（2025 年）。見<a href=\"minoyaki.html\">美濃燒</a>。"} }
        ] }
      ]
    },
    { t:"section", id:"sake",
      title:{ en:"Sake", ja:"酒", zh:"酒" }, jp:"酒",
      body:[
        { t:"defs", items:[
          { term:{en:"What does Gifu sake taste like?",ja:"岐阜の酒はどんな味か。",zh:"岐阜的酒是什麼味道？"},
            def:{en:"There is no single style. The Hida houses tend to a clean, firm sake for rich mountain food; the Mino houses range from full and slightly sweet to the famously dry sake of Tajimi. See <a href=\"sake.html\">The Sake of Gifu</a> and <a href=\"directory.html\">A Directory of Gifu Sake</a>.",ja:"一つの型はない。飛騨の蔵は山の濃い料理に合う、きれいで締まった酒に傾き、美濃の蔵は、ふくよかでやや甘い酒から、多治見の名高い辛口まで幅がある。<a href=\"sake.html\">岐阜の酒</a>と<a href=\"directory.html\">岐阜酒名鑑</a>を参照。",zh:"沒有單一風格。飛驒的酒藏傾向潔淨緊實、搭配濃郁山區料理的酒；美濃的酒藏則從飽滿微甜，到多治見那著名的辛口都有。見<a href=\"sake.html\">岐阜的酒</a>與<a href=\"directory.html\">岐阜酒名鑑</a>。"} },
          { term:{en:"Can I drink doburoku?",ja:"どぶろくは飲めるのか。",zh:"喝得到濁酒嗎？"},
            def:{en:"Yes, at the Shirakawa-gō doburoku festivals in autumn, where the shrines brew it under a licence for ritual use and give it to everyone present, and from farm inns in the special zones that have allowed small-scale doburoku since 2003. Most of the cloudy sake in shops is nigori, which is strained and legally sake. See <a href=\"doburoku.html\">Doburoku, Masu &amp; Cups</a>.",ja:"飲める。秋の白川郷のどぶろく祭では、神社が神事の免許で醸し、居合わせた人すべてにふるまう。2003年から小規模などぶろくを認める特区の農家民宿でも飲める。店に並ぶ白く濁った酒の多くはにごり酒で、こしてあるので法律上は清酒である。<a href=\"doburoku.html\">どぶろく・枡・酒器</a>を参照。",zh:"喝得到。秋季白川鄉的濁酒祭，神社依祭儀許可釀造，並分送給在場的每一個人；自 2003 年起允許小規模釀造濁酒的特區裡，農家民宿也有供應。店裡多數的白濁酒其實是經過過濾、法律上屬於清酒的白濁清酒（にごり酒）。見<a href=\"doburoku.html\">濁酒、枡與酒器</a>。"} },
          { term:{en:"Why drink from a wooden box?",ja:"なぜ木の箱で飲むのか。",zh:"為何用木盒喝酒？"},
            def:{en:"The masu was Japan's measure of rice and sake before it was a cup; it survives as the vessel of celebration, and its name sounds like the word for “increase”. Ōgaki makes about eight in ten. See <a href=\"masu.html\">The Masu of Ōgaki</a>.",ja:"枡は杯である前に米と酒の量りであった。いまは祝いの器として残り、その名は「増す」に通じる。大垣が約八割をつくる。<a href=\"masu.html\">大垣の枡</a>を参照。",zh:"枡在成為酒器之前，是日本量米與量酒的量器；如今作為喜慶之器留存下來，其名與「增加」同音。大垣生產約八成。見<a href=\"masu.html\">大垣的枡</a>。"} }
        ] }
      ]
    },
    { t:"section", id:"visiting",
      title:{ en:"Visiting", ja:"訪ねる", zh:"造訪" }, jp:"旅",
      body:[
        { t:"defs", items:[
          { term:{en:"When is the best time to go?",ja:"いつ行くのがよいか。",zh:"什麼時候去最好？"},
            def:{en:"April for the spring festivals of Takayama and Furukawa; May to October for the cormorant fishing; July to September for the Gujō dances; October for the autumn festival, the cutlery festival and the doburoku festivals; winter for snow on the gasshō roofs. See <a href=\"tables.html#calendar\">Reference Tables</a>.",ja:"四月は高山と古川の春祭り、五月から十月は鵜飼、七月から九月は郡上おどり、十月は秋の祭りと刃物まつりとどぶろく祭、冬は合掌の屋根の雪。<a href=\"tables.html#calendar\">早見表</a>を参照。",zh:"四月看高山與古川的春季祭典；五月到十月看鵜飼；七月到九月看郡上舞；十月有秋季祭典、刀具祭與濁酒祭；冬天看合掌屋頂上的雪。見<a href=\"tables.html#calendar\">速查表</a>。"} },
          { term:{en:"Can I stay in a gasshō house?",ja:"合掌造りに泊まれるか。",zh:"可以住在合掌造裡嗎？"},
            def:{en:"Yes: several farmhouses in Ogimachi are inns. A night there lets you see the village after the day visitors have gone. See <a href=\"shirakawago.html\">Shirakawa-gō</a>.",ja:"泊まれる。荻町のいくつかの農家が民宿を営んでいる。一泊すれば、日帰りの人が去ったあとの村を見られる。<a href=\"shirakawago.html\">白川郷</a>を参照。",zh:"可以：荻町有好幾戶農家經營民宿。住上一晚，就能看到當日遊客離去後的村莊。見<a href=\"shirakawago.html\">白川鄉</a>。"} },
          { term:{en:"How do I get around without a car?",ja:"車なしでどう回るか。",zh:"沒有車要怎麼移動？"},
            def:{en:"By the JR lines from Nagoya and Gifu, the local railways — Nagaragawa, Akechi, Yōrō and Tarumi — and buses. The forest villages are the hard part; their buses may run only a few times a day. See <a href=\"journeys.html\">Five Journeys</a>.",ja:"名古屋と岐阜から出るJR線、長良川鉄道・明知鉄道・養老鉄道・樽見鉄道などの地方鉄道、そしてバスで回れる。難しいのは森の村で、バスは一日に数本ということもある。<a href=\"journeys.html\">五つの旅</a>を参照。",zh:"可利用從名古屋與岐阜出發的 JR 路線、長良川鐵道、明知鐵道、養老鐵道與樽見鐵道等地方鐵路，以及巴士。比較困難的是山林村落，巴士一天可能只有幾班。見<a href=\"journeys.html\">五段旅程</a>。"} },
          { term:{en:"Is this book complete?",ja:"本書は網羅的か。",zh:"本書是完整的嗎？"},
            def:{en:"No. Its directories are selections, its figures carry the years they describe, and several subjects deserve books of their own. The <a href=\"sources.html\">Sources</a> page lists where to check and read further.",ja:"網羅的ではない。名鑑は抜粋であり、数字はそれが示す年のものであり、いくつかの主題はそれぞれ一冊の本に値する。確かめ、さらに読むための先は<a href=\"sources.html\">出典</a>に挙げた。",zh:"不是。它的名鑑是選錄，數字對應其所描述的年份，而好幾個主題都值得各自寫成一本書。<a href=\"sources.html\">資料來源</a>頁列出可供查證與延伸閱讀之處。"} }
        ] }
      ]
    },
    { t:"related", items:[
      { href:"start.html", why:{ en:"Where to start reading.", ja:"どこから読み始めるか。", zh:"從哪裡開始讀。" } },
      { href:"glossary.html", why:{ en:"The words in the answers.", ja:"答えに出てくる言葉。", zh:"答案中出現的詞彙。" } },
      { href:"journeys.html", why:{ en:"Routes for a visit.", ja:"訪ねるための道筋。", zh:"造訪的路線。" } },
      { href:"sources.html", why:{ en:"Where to check.", ja:"確かめる先。", zh:"查證之處。" } }
    ] }
  ]
};

/* ---- ------------------------------------------ glossary */
GIFU.pages["glossary"] = {
  kicker: { en:"Reference · 10", ja:"資料 · 10", zh:"資料 · 10" },
  title:  { en: "Glossary", ja: "用語集", zh: "詞彙表" },
  jp: "本書の言葉",
  lede: {
    en: "The Japanese words this book uses, with a short definition of each and the category it belongs to. Type in the box to filter by the word in roman letters, in Japanese, or by anything in its definition. Each word is explained more fully on the page where it appears; the search box at the top of every page finds it there.",
    ja: "本書が用いる日本語の言葉に、短い定義と分類を添えた。枠に打ち込めば、ローマ字でも日本語でも、定義のなかの語でも絞り込める。どの言葉も、それが出てくる頁でより詳しく説明しており、各頁の上の検索窓から探せる。",
    zh: "本書使用的日語詞彙，各附簡短定義與分類。在方框中輸入文字，即可依羅馬字、日文或定義中的任何字詞篩選。每個詞在其出現的頁面上都有更完整的說明，可從每頁上方的搜尋框找到。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Terms in this glossary by category, counted from the list below.",
        ja:"この用語集の語を分類ごとに数えたもの。下の一覧から数えた。",
        zh:"本詞彙表各分類的詞條數，依下方列表計算。" },
      svg:function(lang, L){
        var g = null, b = GIFU.pages["glossary"].body, i, n = {}, items = [];
        for (i = 0; i < b.length; i++) if (b[i].t === "glossary") g = b[i];
        var list = g ? g.items : [];
        for (i = 0; i < list.length; i++) { var c = list[i].cat; var k = c ? c.en : "?"; n[k] = n[k] || { c: c, v: 0 }; n[k].v++; }
        for (var key in GIFU.GC) { var cc = GIFU.GC[key]; if (n[cc.en]) items.push({ n: cc, v: n[cc.en].v }); }
        items.sort(function(a, b2){ return b2.v - a.v; });
        return GIFU.fig.hbar(lang, L, {
          title:{ en:"Terms by category", ja:"分類ごとの語数", zh:"各分類詞條數" },
          items: items, labelW: 200, rowH: 26,
          unit:{ en:"terms", ja:"語", zh:"條" } });
      } },
    { t:"glossary",
      placeholder: { en: "Filter — try “hinoki”, “刃”, “festival”…", ja: "絞り込み——「檜」「刃」「祭り」など", zh: "篩選——試試「檜」、「刃」、「祭」…" },
      items: [
        { r:"action",
          jp:"弦高",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The height of the strings above the frets, measured at the twelfth fret: on a steel-string acoustic about 2–3 mm on the bass side. It is set by the saddle, the nut and the neck's relief, and it rises when a guitar takes on humidity.",
            ja:"フレットの頂から弦までの高さ。十二フレットで測り、スチール弦のアコースティックギターでは低音側でおよそ2〜3mm。サドル、ナット、ネックの反りで決まり、ギターが湿気を吸うと高くなる。",
            zh:"弦距：琴弦到琴格頂端的高度，在第 12 格測量，鋼弦木吉他低音側約 2–3 公釐。由下弦枕、上弦枕與琴頸弧度決定，吉他吸濕時會升高。" } },
        { r:"akamatsu",
          jp:"赤松・アカマツ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Pinus densiflora, Japanese red pine, of the dry ridges and old coppice of Mino, and the host of the matsutake mushroom. Resinous and strong, it gave beams, fuel for pottery kilns and torches for cormorant fishing, and has been badly hit by pine wilt.",
            ja:"Pinus densiflora。美濃の乾いた尾根や古い雑木林に育ち、マツタケを生やす木でもある。脂が多く強く、梁や、窯と鵜飼の篝火の薪となった。松枯れで大きな被害を受けている。",
            zh:"赤松（Pinus densiflora）：生於美濃乾燥山稜與舊雜木林，也是松茸的共生樹。富含樹脂、強度高，用作樑木、窯爐燃料與鵜飼篝火，受松材線蟲病危害嚴重。" } },
        { r:"akami",
          jp:"赤身・心材",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Heartwood: the inner, older wood of the trunk, no longer living, darkened by extractives that make it more durable than the sapwood. In sugi it ranges from pink through red to nearly black, and the colour largely sets the price of a board.",
            ja:"心材。幹の内側の古い部分で、細胞はもう生きておらず、抽出成分で色が濃くなり辺材より腐りにくい。スギでは桃色から赤、黒に近い色までさまざまで、板の値段はほとんど色で決まる。",
            zh:"心材（赤身）：樹幹內側較老、已不具生命的木質部，因抽出成分而顏色較深，比邊材耐久。柳杉心材從粉紅、紅色到近乎黑色不等，板材價格大多取決於顏色。" } },
        { r:"Akari",
          jp:"あかり",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Lamps of Mino paper and bamboo designed by the sculptor Isamu Noguchi from 1951, after he saw Gifu lanterns during the cormorant-fishing season, and made by hand by the Gifu lantern maker Ozeki (founded 1891). He designed well over a hundred models.",
            ja:"彫刻家イサム・ノグチが一九五一年から美濃紙と竹でデザインした照明。鵜飼の季節に岐阜提灯を見たのがきっかけで、一八九一年創業の岐阜の提灯屋オゼキが手でつくる。ノグチは百を優に超える形をデザインした。",
            zh:"雕塑家野口勇自 1951 年起以美濃紙與竹設計的燈具；他在鵜飼季節看見岐阜提燈後得到靈感，由創立於 1891 年的岐阜提燈商 Ozeki 手工製作。他設計的款式遠超過一百種。" } },
        { r:"akeyama",
          jp:"明山",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Open forest: about nine-tenths of the Kiso forests under Owari rule, where villagers could cut for fuel, charcoal, tools and their own houses and gather food, provided they spared the five protected conifers and keyaki.",
            ja:"尾張藩時代の木曽の山の約九割を占め、村人が薪や炭、道具、自分の家のために木を伐り、食べものを採ることができた山。ただし五木と欅は伐れなかった。",
            zh:"明山：尾張藩統治下約占木曾山林九成的開放林，村民可伐取柴薪、燒炭、製作工具與自家建屋用材並採集食物，但不得砍伐受保護的五種針葉樹與櫸木。" } },
        { r:"akōzantai",
          jp:"亜高山帯",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"The subalpine zone above the beech: dark forests of shirabiso fir and kometsuga hemlock, with dakekanba birch on disturbed ground. Remote and slow-growing, it was seldom logged and is mostly national forest, much of it protected.",
            ja:"ブナ帯の上の帯。シラビソやコメツガの暗い針葉樹林に、攪乱を受けた場所ではダケカンバがまじる。遠く成長も遅いためほとんど伐られず、大半は国有林で、その多くが保護されている。",
            zh:"亞高山帶：山毛櫸林之上的地帶，由白時冷杉與米鐵杉構成幽暗的針葉林，受擾動處則混生岳樺。因偏遠且生長緩慢而少有伐採，大部分屬國有林，其中許多受到保護。" } },
        { r:"ame-iro",
          jp:"飴色",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"“Candy colour”: the warm honey-amber that pale woods such as hinoki take on with light and years, as lignin near the surface breaks down and extractives oxidise. In Japan it is regarded as a quality gained, not a fault.",
            ja:"ヒノキなどの淡い材が、光と歳月によって帯びる温かな琥珀色。表面近くのリグニンが分解し、抽出成分が酸化して生じる。日本では欠点ではなく、身につけた品格とみなされる。",
            zh:"飴色：扁柏等淺色木材經光照與歲月後呈現的溫暖琥珀蜜色，源於表層木質素分解與抽出成分氧化。在日本被視為歲月增添的韻味，而非缺陷。" } },
        { r:"arai",
          jp:"洗い",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"“Washing”: the traditional renewal of a kiri chest by specialist restorers, who take it apart, wash and re-plane the soft pale wood, repair damage and refinish it, so that an old chest comes back looking almost new.",
            ja:"桐箪笥の伝統的な再生。専門の職人が箪笥を分解し、柔らかく白い桐を洗って削り直し、傷みを直して仕上げ直す。古い箪笥がほとんど新品のようによみがえる。",
            zh:"「洗」：由專門修復師為桐木衣櫃進行的傳統翻新——拆開櫃體，清洗並重新刨削柔軟淺色的桐木，修補損傷後重新塗裝，讓老衣櫃幾乎恢復如新。" } },
        { r:"archtop",
          jp:"アーチトップ",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A guitar whose top and back are carved into an arch from thick solid wood, like a violin, with f-holes and a floating bridge — the jazz guitar of the 1930s to 1950s. One of Gifu's small workshops builds archtops by the river in Gujō Hachiman.",
            ja:"バイオリンのように厚い無垢材から表板と裏板をアーチ状に削り出し、f字孔と置くだけのブリッジをもつギター。一九三〇〜一九五〇年代のジャズのギターである。岐阜では郡上八幡の川のほとりに、アーチトップをつくる小さな工房がある。",
            zh:"拱面吉他：像小提琴一樣以厚實木雕出拱形面板與背板，開有 f 孔並使用浮動琴橋，是 1930 至 1950 年代的爵士吉他。岐阜郡上八幡的河畔有一家專做拱面吉他的小工坊。" } },
        { r:"ashimono",
          jp:"脚物",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"“Leg things”: the furniture trade's word for chairs, stools, tables and other pieces that stand on legs, as opposed to hakomono. Hida's industry has always been above all an ashimono industry, built on the chair.",
            ja:"椅子、スツール、テーブルなど、脚で立つ家具を指す業界のことば。箱物と対になる。飛騨の家具産業は椅子を軸に育った、何よりも脚物の産業である。",
            zh:"「有腳的東西」：家具業界對椅子、凳子、桌子等以腳站立之家具的稱呼，與「箱物」相對。飛驒家具產業以椅子為核心，向來首先是腳物的產業。" } },
        { r:"asshuku sugi",
          jp:"圧縮スギ",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"Compressed sugi: soft plantation cedar pressed under heat and steam until it is dense and hard enough for furniture — a process Hida Sangyō developed from the bentwood knowledge of softening wood with heat and moisture. It turns Japan's most abundant timber into chair and table stock.",
            ja:"圧縮スギ。柔らかい人工林のスギを熱と蒸気のもとで圧縮し、家具に使えるほど硬く密にしたもの。飛騨産業が曲木の知恵——熱と水分で木を柔らかくすること——から育てた方法で、日本でいちばん多い木を椅子やテーブルの材に変える。",
            zh:"壓縮柳杉：將柔軟的人工林柳杉以熱與蒸氣壓縮，使其緻密堅硬到足以製作家具。這是飛驒產業從曲木「以熱與水分軟化木材」的經驗發展出的方法，把日本蓄積最多的木材變成椅子與桌子的用材。" } },
        { r:"asunaro",
          jp:"翌檜・アスナロ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Thujopsis dolabrata, one of the Kiso five trees, of shady, snowy slopes; the name is popularly read as “tomorrow I will be hinoki”. Rich in hinokitiol and resistant to rot and insects, it is used for sills, baths and chopping boards.",
            ja:"Thujopsis dolabrata。木曽五木の一つで、日陰の多雪の斜面に育つ。名は俗に「明日はヒノキになろう」と解される。ヒノキチオールに富み腐朽や虫に強く、土台や風呂、まな板に使われる。",
            zh:"翌檜（羅漢柏，Thujopsis dolabrata）：木曾五木之一，生於背陰多雪的坡地，日文名俗解為「明天要成為扁柏」。富含檜木醇，耐腐防蟲，用於地檻、浴桶與砧板。" } },
        { r:"ate",
          jp:"あて",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Reaction wood: the dense, reddish compression wood a conifer grows on the underside of a leaning trunk (broadleaves grow tension wood on the upper side). It shrinks along the grain and warps badly; common on the steep slopes of Hida, it is avoided by carpenters.",
            ja:"傾いた幹を立て直すため、針葉樹が下側につくる密で赤みを帯びた圧縮あて材（広葉樹は上側に引張あて材をつくる）。繊維方向にも縮んで大きく狂うため大工は避ける。急斜面の多い飛騨ではよく見られる。",
            zh:"應力木（あて）：針葉樹為扶正傾斜樹幹，在下側形成的緻密、帶紅色的壓縮木（闊葉樹則在上側形成拉力木）。會沿纖維方向收縮並嚴重變形，木匠避而不用；在陡坡眾多的飛驒十分常見。" } },
        { r:"ayasugi",
          jp:"綾杉",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The herringbone pattern carved on the inside walls of a better shamisen body. Said to scatter or enrich the sound, its acoustic effect is disputed even among makers — a craft detail asserted more often than it is measured.",
            ja:"上等の三味線の胴の内側に彫る杉綾の模様。音を散らす、あるいは豊かにするといわれるが、その効果はつくり手のあいだでも意見が分かれる。測られるより語られることの多い細工である。",
            zh:"綾杉：刻在較好三味線琴身內壁上的人字形紋路。有人說能擴散或豐富聲音，但其聲學效果連製作者之間都有爭議——是一種常被宣稱、卻很少被量測的工藝細節。" } },
        { r:"ayu", jp:"鮎", cat:GIFU.GC.land,
  d:{en:"The sweetfish, which lives one year; the fish of the Nagara, of the cormorant fishermen and of the agricultural heritage listing of 2015.",ja:"一年で一生を終える魚。長良川の魚であり、鵜飼の魚であり、2015年の世界農業遺産の魚である。",zh:"一年即走完一生的香魚；長良川之魚、鵜飼之魚，也是 2015 年世界農業遺產之魚。"} },
        { r:"A-zai / B-zai / C-zai / D-zai",
          jp:"A材・B材・C材・D材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The trade's shorthand for log quality: A for straight sawlogs, B for slightly bent logs for plywood and laminated timber, C for chips and pulp, D for tops and branches burned as fuel. About thirty per cent of Gifu's logs are now C and D material.",
            ja:"丸太の品質を示す業界の略称。A材は通直な製材用、B材はやや曲がった合板・集成材用、C材はチップ・パルプ用、D材は燃料にする梢や枝。いまや岐阜県の丸太の約三割がC材・D材である。",
            zh:"A 材至 D 材：業界對原木品質的簡稱。A 材為通直的製材用材，B 材為略彎、供合板與集成材用，C 材供削片與紙漿，D 材為作燃料的樹梢與枝條。如今岐阜縣約三成原木屬 C、D 材。" } },
        { r:"bachi",
          jp:"桴・撥",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Drumsticks for taiko, sold in kashi (very hard), hō (soft) and beech (in between); the choice changes the sound and how long a stick survives the rim. For shamisen and biwa, bachi means the plectrum, written with a different character.",
            ja:"太鼓を打つ桴。とても硬い樫、柔らかいホオ、その中間のブナなどがあり、選び方で音も、縁を打ったときの桴のもちも変わる。三味線や琵琶では「撥」と書き、弦をはじく道具をいう。",
            zh:"鼓棒（日文「桴」）：打太鼓用的棒子，有極硬的橿木、較軟的厚朴與居中的山毛櫸等，選材會影響聲音與敲到鼓緣時的耐用度。在三味線與琵琶中則寫作「撥」，指撥子。" } },
        { r:"back and sides",
          jp:"裏板・側板",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The back plate and the bent side walls that, with the top, form the guitar's resonating box. Usually a denser hardwood — rosewood, mahogany, maple — the back reflects and colours the sound; the sides are bent to shape on a hot iron or in a heated mould.",
            ja:"表板とともにギターの共鳴箱をつくる裏板と、曲げた側面の板。ローズウッド、マホガニー、メイプルなど重めの広葉樹が多い。裏板は音を反射して色づけし、側板は熱したアイロンや加熱した型で曲げる。",
            zh:"背板與側板：與面板共同構成吉他共鳴箱的後板與彎曲側壁，多用玫瑰木、桃花心木、楓木等較重的闊葉樹。背板反射並渲染聲音；側板則以加熱的彎板鐵或加熱模具彎曲成形。" } },
        { r:"bangasa",
          jp:"番傘",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A plain, sturdy everyday umbrella of thick oiled paper on stout ribs. Shops and inns kept stocks to lend to customers, painted with the house name or a number — one explanation of the name, ban meaning number.",
            ja:"太い骨に厚い油紙を張った、飾りのない丈夫な日常の傘。店や宿は客に貸すために屋号や番号を書いたものを備えた。「番」の字の由来の一説である。",
            zh:"番傘：以粗竹骨撐起厚油紙、樸素耐用的日常用傘。商店與旅館備有寫上店號或編號的番傘借給客人——「番」即編號之意，是名稱由來的說法之一。" } },
        { r:"beimatsu",
          jp:"米松・米栂・米杉",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The trade's names for North American softwoods, each with the prefix bei- (America): beimatsu, Douglas fir, strong and long, a standard for beams; beitsuga, western hemlock, for posts and sills; beisugi, western red cedar, light, aromatic and rich in extractives.",
            ja:"北米産の針葉樹の業界名で、「米」を頭につける。米松はダグラスファーで強く長材が取れ、梁の定番。米栂はウエスタンヘムロックで柱や土台に、米杉はウエスタンレッドシーダーで軽く香りがあり抽出成分に富む。",
            zh:"米松、米栂、米杉：業界對北美針葉樹的稱呼，皆冠以「米」（美國）字。米松即花旗松，強度高、可取長材，是樑材的標準；米栂即西部鐵杉，用於柱與地檻；米杉即北美紅側柏，質輕芳香、抽出成分豐富。" } },
        { r:"benihi",
          jp:"紅檜・ベニヒ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Chamaecyparis formosensis, Taiwan red cypress, which forms some of the largest and oldest trees in East Asia in Taiwan's central mountains. Heavily logged under Japanese rule, from Alishan above all, and partly shipped to Japan for shrines and temples.",
            ja:"Chamaecyparis formosensis。台湾の中央山脈に東アジアでも屈指の大きく古い木々をつくるヒノキ属の木。日本統治時代に阿里山を中心に大量に伐られ、一部は社寺のために日本へ運ばれた。",
            zh:"紅檜（Chamaecyparis formosensis）：在臺灣中央山脈長成東亞數一數二巨大、古老的樹木。日治時期以阿里山為中心大量伐採，部分運往日本供神社與寺院使用。" } },
        { r:"binding",
          jp:"バインディング",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Strips of wood or plastic glued around the edges of the top and back, sealing the end grain and protecting the corners from knocks, often with thin decorative lines (purfling) beside them.",
            ja:"表板と裏板の縁に回して接着する木や樹脂の細い帯。木口をふさぎ、角をぶつけから守る。脇に飾りの細い線（パーフリング）を添えることが多い。",
            zh:"滾邊：沿面板與背板邊緣黏貼一圈的木質或塑膠細條，封住端面並保護邊角免受碰撞，旁邊常鑲有裝飾細線（purfling）。" } },
        { r:"Bishū", jp:"尾州", cat:GIFU.GC.papercraft,
  d:{en:"The wool-weaving district around Ichinomiya in Aichi and Hashima in Gifu, long Japan's largest.",ja:"愛知の一宮と岐阜の羽島を中心とする毛織物の産地。長く日本最大であった。",zh:"以愛知一宮與岐阜羽島為中心的毛織品產地，長期為日本最大。"} },
        { r:"biwa",
          jp:"琵琶",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The pear-shaped lute of blind reciters and samurai ballads. The Chikuzen biwa has a mulberry body with a kiri belly — dense back, light front, as on a guitar; the Satsuma school prizes an all-mulberry instrument (sōkuwa). Plectrums are ideally of boxwood.",
            ja:"盲僧の語りや武士の歌に使われた洋梨形の弦楽器。筑前琵琶は桑の胴に桐の腹板で、重い裏と軽い表というギターと同じ分担をもつ。薩摩琵琶ではすべて桑の「総桑」が最良とされる。撥はツゲが理想である。",
            zh:"琵琶：盲僧說唱與武士歌謠所用的梨形撥弦樂器。筑前琵琶以桑木為身、桐木為面，重背輕面，與吉他的分工相同；薩摩琵琶則以全桑木的「總桑」為上。撥子以黃楊木為佳。" } },
        { r:"bōshitsuko",
          jp:"防湿庫",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"An electronic dry cabinet, sold in Taiwan for cameras and also made in guitar sizes. One Taiwanese maker recommends 50–55 per cent relative humidity for guitars; set too low, a cabinet dries an instrument out.",
            ja:"電子防湿庫。台湾ではカメラ用に売られ、ギターの大きさのものもある。台湾のあるメーカーはギターには相対湿度50〜55％をすすめる。設定が低すぎると楽器を乾かしすぎる。",
            zh:"電子防潮箱：在台灣原為相機而售，也有吉他尺寸的款式。一家台灣廠商建議吉他設定在相對濕度 50–55%；設得太低反而會讓樂器過乾。" } },
        { r:"bridge",
          jp:"ブリッジ",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The wooden block, usually ebony or rosewood, glued to the top behind the soundhole, which anchors the strings and holds the saddle. String tension tries to rotate it forward; with heat, dryness or ageing glue it lifts at the back edge and must be re-glued.",
            ja:"表板のサウンドホールの後ろに接着する木の台で、弦をとめ、サドルを支える。エボニーやローズウッドが多い。弦の張力はこれを前へ回そうとし、熱や乾燥、接着剤の劣化で後ろの縁が浮くと、はがして貼り直す。",
            zh:"琴橋：黏在面板音孔後方、固定琴弦並承載下弦枕的木座，多為黑檀或玫瑰木。弦的張力不斷把它往前扭；遇熱、乾燥或膠老化時後緣會翹起，須拆下重新黏合。" } },
        { r:"budomari",
          jp:"歩留まり",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Yield: the share of a log's volume that ends up as sawn product, typically a half to two-thirds. The rest — bark, slabs, chips and sawdust — fuels the mill's kilns, becomes pellets or goes to paper mills and biomass power stations.",
            ja:"丸太の材積のうち製品になる割合で、ふつう二分の一から三分の二。残りの樹皮、背板、チップ、おが粉は製材所の乾燥機の燃料になり、ペレットにされ、あるいは製紙工場やバイオマス発電所へ送られる。",
            zh:"出材率（步留）：原木材積中最終成為製材品的比例，通常為一半至三分之二。其餘的樹皮、邊皮板、削片與鋸屑則作為廠內乾燥窯燃料、製成顆粒燃料，或送往造紙廠與生質能發電廠。" } },
        { r:"buna",
          jp:"橅・ブナ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Fagus crenata, the beech of the snowy Sea of Japan side, dominant from about 700 to 1,600 metres in Hida. Hard, heavy, even and pale, flecked with its rays, it warps badly as it dries but bends superbly when steamed — the wood of the Hida bentwood chair.",
            ja:"Fagus crenata。日本海側の多雪地のブナで、飛騨ではおよそ七百〜千六百メートルで優占する。硬く重く均質で淡い色、放射組織の小さな斑が散る。乾くと大きく狂うが、蒸すとよく曲がり、飛騨の曲木椅子の材となった。",
            zh:"山毛櫸（Fagus crenata）：日本海側多雪地帶的代表樹種，在飛驒約海拔 700 至 1,600 公尺處佔優勢。材質硬重均勻、色淡，帶有木射線斑點；乾燥時易變形，但蒸煮後彎曲性極佳，是飛驒曲木椅的用材。" } },
        { r:"bunarin",
          jp:"ブナ林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Beech forest, the climax forest of the snowy mountains of Hida and Hakusan, roughly 700 to 1,600 metres up. On the Sea of Japan side it carries a dense understorey of dwarf bamboo whose stems bend flat under the snow.",
            ja:"飛騨や白山の多雪の山地、標高およそ七百〜千六百メートルに成立する極相林。日本海側では、雪の下でしなって寝るササが林床に密生する。",
            zh:"山毛櫸林：飛驒與白山多雪山地、海拔約 700 至 1,600 公尺的極相林。日本海側林床密生矮竹，竹稈在積雪下彎伏。" } },
        { r:"chabudai",
          jp:"卓袱台",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"A low round or square dining table with folding legs, around which a family sat on the floor from the Meiji era until tables and chairs spread with post-war housing. Folded away, it let the same room become a bedroom at night.",
            ja:"脚を折りたためる低い丸や四角の食卓。明治から、戦後の住宅とともに食卓と椅子が広まるまで、家族は床に座ってこれを囲んだ。たためば、夜には同じ部屋が寝室になった。",
            zh:"可摺疊桌腳的低矮圓形或方形餐桌。從明治時代起，直到戰後住宅普及餐桌椅為止，一家人都席地圍坐；收起來後，同一個房間夜裡便成為臥室。" } },
        { r:"chēnsō",
          jp:"チェーンソー",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The chainsaw spread through Japan's national forests in the post-war logging boom and multiplied each worker's output. Heavy early saws caused vibration white finger (hakurōbyō) in thousands of forest workers, leading to anti-vibration saws and daily limits on use.",
            ja:"チェーンソーは戦後の伐採ブームに国有林から広まり、一人あたりの生産量を大きく引き上げた。初期の重い機種は何千人もの林業労働者に振動障害の白ろう病を起こし、防振型の機種と一日の使用時間の制限が生まれた。",
            zh:"鏈鋸：戰後伐木熱潮中自國有林普及全日本，大幅提高每位工人的產量。早期笨重的鏈鋸導致數千名林業工人罹患振動性白指症（白ろう病），因而催生防振機型與每日使用時間限制。" } },
        { r:"chijimi-moku",
          jp:"縮み杢",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Ripple figure: fine waves in the fibres at right angles to the grain that shimmer as the light moves — the fiddleback of violin maples. Common in tochi and maple, it is prized for trays, table slabs and the backs of guitars.",
            ja:"繊維が木目と直角方向に細かく波打ち、光の角度で揺らめいて見える杢。バイオリンのカエデの縞と同じもので、トチやカエデによく出る。盆、座卓の天板、ギターの裏板に珍重される。",
            zh:"縮杢（波紋）：纖維沿垂直於紋理方向細密波動，隨光線角度閃爍，即小提琴楓木的虎紋。常見於七葉樹與槭木，用於托盤、桌板與吉他背板時備受珍視。" } },
        { r:"chikaragi",
          jp:"力木",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The Japanese word for a brace: the thin strips of spruce glued inside a top or back to stiffen it against string tension and shape the way it vibrates. Their pattern — X, fan, ladder, lattice — is one of the main choices a maker makes.",
            ja:"表板や裏板の内側に貼り、弦の張力に抗して板を補強し、振動のしかたを形づくるスプルースの細い材。X、扇、はしご、格子などの配置は、つくり手の大きな選択の一つである。",
            zh:"力木：日文對音梁的稱呼，指黏在面板或背板內側的細雲杉條，用來抵抗弦張力並塑造板的振動方式。X 型、扇形、梯形、格狀等配置，是製琴師最重要的抉擇之一。" } },
        { r:"chikuseki",
          jp:"蓄積",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Growing stock: the volume of the standing trees. Gifu's planted forest held about 100 million cubic metres in FY2019 — hinoki about 50 million, sugi about 46 million. Annual growth peaked around FY2016 and is falling as the stands age.",
            ja:"立木の材積。岐阜県の人工林の蓄積は二〇一九年度に約一億立方メートルで、うちヒノキ約五千万、スギ約四千六百万立方メートル。年間の成長量は二〇一六年度ごろを頂点に、林齢が進むとともに減っている。",
            zh:"蓄積量：立木的材積。岐阜縣人工林的蓄積量在 2019 年度約 1 億立方公尺，其中扁柏約 5,000 萬、柳杉約 4,600 萬立方公尺。年生長量約在 2016 年度達到高峰，隨林齡增長而下降。" } },
        { r:"Chladni pattern",
          jp:"クラドニ図形",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The pattern formed when a plate sprinkled with fine powder or tea leaves is made to vibrate at one of its natural frequencies: the grains gather along the nodal lines that do not move. Luthiers use it to see and tune the modes of a top.",
            ja:"細かい粉や茶葉をまいた板を固有振動数で振動させると、動かない節の線に粒が集まってできる模様。弦楽器のつくり手はこれで表板の振動のモードを目で見て調整する。",
            zh:"克拉德尼圖形：在撒有細粉或茶葉的板上以其固有頻率振動時，顆粒聚集在不動的節線上所形成的圖案。製琴師藉此看見並調整面板的振動模態。" } },
        { r:"chōbakki sekō",
          jp:"長伐期施業",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Long-rotation management: thinning periodically for income and harvesting at 80 to 100 years or more instead of 40–50, to produce the large logs needed for temple repair and timber public buildings. Many hinoki owners in Tōnō now plan this way.",
            ja:"四十〜五十年ではなく八十〜百年以上で主伐し、そのあいだは間伐で収入を得る施業。社寺の修理や木造の公共建築に必要な大径材を生む。東濃のヒノキ林の所有者の多くがこの方針をとる。",
            zh:"長伐期經營：輪伐期由 40 至 50 年延長為 80 至 100 年以上，其間以疏伐取得收入，產出社寺修繕與木造公共建築所需的大徑材。東濃許多扁柏林主採此方針。" } },
        { r:"chobokujo",
          jp:"貯木場",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Timber pond or log yard. The Owari domain's pond at Shirotori in Atsuta, Nagoya, received the rafts from the Kiso rivers through the Hori canal and supplied the castle town and its shipyards; much of the site is now a Japanese garden.",
            ja:"材木を水に浮かべたり積んだりして蓄えておく場所。名古屋・熱田の白鳥にあった尾張藩の貯木場は、木曽の川からの筏を堀川を通して受け入れ、城下町と造船所に材を送った。跡地の多くはいま日本庭園になっている。",
            zh:"貯木場：將木材浮於水中或堆放儲存的場所。尾張藩位於名古屋熱田白鳥的貯木場，經堀川運河接收來自木曾諸河的木筏，供應城下町與造船所；舊址大部分如今已是日本庭園。" } },
        { r:"chū-maruta",
          jp:"中丸太",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Medium logs, the benchmark of Japanese log prices: sugi or hinoki of 14–22 cm top-end diameter and 3.65–4 m length. At the 1980 peak hinoki averaged about ¥76,400 a cubic metre; in 2024 it was about ¥22,300, sugi ¥15,900.",
            ja:"末口径十四〜二十二センチ、長さ三・六五〜四メートルのスギ・ヒノキの丸太で、日本の丸太価格の基準となる。頂点の一九八〇年にはヒノキが一立方メートル平均約七万六千四百円、二〇二四年には約二万二千三百円、スギは約一万五千九百円であった。",
            zh:"中丸太：末口直徑 14 至 22 公分、長 3.65 至 4 公尺的柳杉或扁柏原木，是日本原木價格的基準。1980 年高峰時扁柏每立方公尺平均約 76,400 日圓，2024 年約 22,300 日圓，柳杉約 15,900 日圓。" } },
        { r:"chūmon kagu",
          jp:"注文家具",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"Furniture made to order by a studio maker: size, height and use are agreed first, then come drawings or a mock-up, then months of making. Most Gifu workshops also repair and refinish their own pieces for decades.",
            ja:"工房のつくり手に注文してつくる家具。まず大きさ、高さ、使い方を相談し、図面や試作を経て、数か月をかけてつくる。岐阜の工房の多くは、自分がつくった家具の修理や塗り直しを何十年も引き受ける。",
            zh:"委託工房製作者訂製的家具：先商定尺寸、高度與用途，再看圖面或樣品，接著花數個月製作。岐阜多數工坊也會在數十年間為自己做的家具修理與重新塗裝。" } },
        { r:"classical guitar",
          jp:"クラシックギター",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The nylon-strung guitar descended from the Spanish instruments of Antonio de Torres: fan-braced, lightly built, with a wide, flat fingerboard. It spread in Japan in the 1930s, helped by Andrés Segovia's first tour.",
            ja:"アントニオ・デ・トーレスのスペインの楽器を祖とするナイロン弦のギター。扇状の力木をもち、軽くつくられ、指板は幅広く平らである。日本ではアンドレス・セゴビアの初来日などに後押しされ、一九三〇年代に広まった。",
            zh:"古典吉他：源自 Antonio de Torres 西班牙樂器的尼龍弦吉他，採扇形音梁、構造輕巧，指板寬而平。在日本，受 Andrés Segovia 首次訪日等推動，於 1930 年代普及。" } },
        { r:"CLT",
          jp:"直交集成板",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Cross-laminated timber: large panels of boards glued in three, five or seven layers at right angles, several metres wide and over ten long. Japan set a JAS for it in 2013 and building rules in 2016; it is valued as a way to use large volumes of sugi in mid-rise walls and floors.",
            ja:"ひき板を三層、五層、七層と直交させて接着した大判のパネルで、幅数メートル、長さ十メートルを超える。日本では二〇一三年にJASが、二〇一六年に建築の基準が整えられた。中層建築の壁や床に大量のスギを使える方法として期待される。",
            zh:"直交集成板（CLT）：將板材以三、五或七層互相垂直膠合而成的大型面板，寬達數公尺、長逾 10 公尺。日本於 2013 年制定 JAS、2016 年訂定建築規範，被視為在中層建築牆體與樓板中大量使用柳杉的途徑。" } },
        { r:"CNF",
          jp:"セルロースナノファイバー",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Cellulose nanofibre: microfibrils separated down to a few nanometres wide, lighter than steel yet several times stronger by weight, transparent in thin films and useful as a thickener or reinforcement. Japan has invested heavily in making it from domestic wood pulp.",
            ja:"ミクロフィブリルを幅数ナノメートルまでほぐした素材。鋼より軽く、重さあたりでは何倍も強く、薄い膜にすると透明で、増粘剤や補強材として使える。日本は国産の木材パルプからの製造に力を入れている。",
            zh:"纖維素奈米纖維（CNF）：將微纖維分離至數奈米寬的材料，比鋼輕，以重量計強度卻高出數倍，製成薄膜時透明，可作增稠劑或補強材。日本投入大量資源以國產木漿製造。" } },
        { r:"copy model",
          jp:"コピーモデル",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A guitar closely copying the shape, headstock and details of a famous American model — the mainstay of many Japanese factories in the 1970s. After Gibson's parent company sued Ibanez's US distributor over a headstock design in 1977, Japanese makers moved to their own designs.",
            ja:"有名なアメリカのモデルの形、ヘッド、細部を忠実に写したギター。一九七〇年代、多くの日本の工場の主力であった。一九七七年にギブソンの親会社がアイバニーズの米国の販売元をヘッドの形で訴えると、日本のメーカーは独自の設計へ移っていった。",
            zh:"仿製款：忠實仿照美國名琴外形、琴頭與細節的吉他，是 1970 年代許多日本工廠的主力。1977 年 Gibson 的母公司就琴頭設計控告 Ibanez 的美國代理商後，日本廠商轉向自有設計。" } },
        { r:"cutaway",
          jp:"カッタウェイ",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A scoop cut from the treble side of the body's upper shoulder so that the player can reach the highest frets. Common on electro-acoustics built for the stage, including many Takamine models.",
            ja:"高音側の胴の肩をえぐり、ハイポジションに手が届くようにした形。ステージ向けのエレアコに多く、タカミネの多くのモデルにも見られる。",
            zh:"缺角（cutaway）：將琴身高音側上肩挖去一塊，讓手指能按到最高把位。常見於舞台用電木吉他，包括許多 Takamine 型號。" } },
        { r:"dagekionhō",
          jp:"打撃音法",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Grading by sound: a piece is struck on its end, a microphone picks up the ring, and its dynamic modulus of elasticity follows from E = 4L²f²ρ, from length, frequency and density. It takes seconds, correlates closely with bending tests, and is the same physics a luthier uses on a guitar top.",
            ja:"材の木口をたたき、響きをマイクで拾って振動数を求め、長さ・振動数・密度からE＝4L²f²ρで動的ヤング係数を出す方法。数秒ですみ、曲げ試験とよく一致する。ギターの表板をたたく製作家と同じ物理である。",
            zh:"打擊音法：敲擊木材端面，以麥克風收錄共振聲並求出頻率，再由長度、頻率與密度依 E＝4L²f²ρ 算出動態彈性模數。數秒即可完成，與彎曲試驗高度相關，和製琴師敲擊吉他面板所依據的物理原理相同。" } },
        { r:"daikan · gundai", jp:"代官・郡代", cat:GIFU.GC.history,
  d:{en:"The shogun's intendant and the higher-ranking district intendant; Hida's was raised from the first to the second in 1777.",ja:"幕府の代官と、より格の高い郡代。飛騨のそれは1777年に代官から郡代に格上げされた。",zh:"幕府的代官與位階較高的郡代；飛驒的長官於 1777 年由代官升格為郡代。"} },
        { r:"daikokubashira",
          jp:"大黒柱",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"The thickest post of a traditional house, standing near its centre where the main beams meet — usually keyaki, hinoki or sugi. The word also means the breadwinner of a family, the person who holds everything up.",
            ja:"伝統的な家の中ほど、大きな梁が集まるところに立ついちばん太い柱。ケヤキ、ヒノキ、スギが多い。転じて、一家を支える人をもいう。",
            zh:"大黑柱：傳統住宅中央、主樑交會處最粗的一根柱子，多用櫸木、扁柏或柳杉。引申指支撐一家生計的頂梁柱。" } },
        { r:"dentō kōgeihin",
          jp:"伝統的工芸品",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A craft designated by the national government under the Act of 1974 on traditional craft industries: made mainly by hand for daily use, with techniques and materials in use for a century or more, in an established production area. Gifu's include Hida Shunkei, Ittōbori, Mino washi, lanterns and umbrellas.",
            ja:"一九七四年の伝統的工芸品産業の振興に関する法律にもとづき、国が指定する工芸品。日常に使うものを主に手でつくり、百年以上続く技と原料を用い、産地を形づくっていることが条件となる。岐阜県では飛騨春慶、一位一刀彫、美濃和紙、岐阜提灯、岐阜和傘などがある。",
            zh:"傳統工藝品：依 1974 年《傳統工藝品產業振興法》由國家指定的工藝品，須為以手工為主的日用品，使用延續百年以上的技法與原料，並形成產地。岐阜縣有飛驒春慶、一位一刀雕、美濃和紙、岐阜提燈與岐阜和傘等。" } },
        { r:"dentō shōshi",
          jp:"伝統証紙",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"The certificate sticker printed with the national traditional-craft mark, issued by a production area's association and attached to pieces that have passed its inspection — the buyer's assurance of a genuine designated craft from that area.",
            ja:"伝統マークを刷った証紙。産地の組合が検査に合格した品に貼り、その産地の本物の伝統的工芸品であることを買い手に示す。",
            zh:"傳統證紙：印有國家傳統工藝標誌的證紙，由產地組合發給通過檢查的產品貼附，向買家保證這是該產地真正的指定傳統工藝品。" } },
        { r:"doburoku", jp:"どぶろく", cat:GIFU.GC.sake,
  d:{en:"Unstrained rice wine, legally not sake; brewed by the shrines of Shirakawa-gō for their autumn festivals.",ja:"こさない米の酒で、法律上は清酒ではない。白川郷の神社が秋の祭りのために醸す。",zh:"未經過濾的米酒，法律上不屬清酒；白川鄉的神社為秋季祭典釀造。"} },
        { r:"dōkan",
          jp:"道管",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Vessel: the open, pipe-like cells of broadleaf wood, visible as pores on the end grain. In oak heartwood they are blocked by growths called tyloses, which makes mizunara watertight enough for casks.",
            ja:"広葉樹材にある管状の開いた細胞で、木口では孔として見える。ナラ類の心材ではチロースという充填物でふさがれ、そのためミズナラは樽にできるほど水を通さない。",
            zh:"導管：闊葉樹材中開放的管狀細胞，在橫切面上呈現為管孔。櫟類心材的導管被稱為填充體（tylose）的構造堵塞，因此水楢能做成不滲漏的木桶。" } },
        { r:"dovetail neck joint",
          jp:"ダブテイル",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The classic way of fixing a guitar neck: a tapered dovetail cut in the heel is glued into a matching socket in the neck block. Many modern guitars use a bolted mortise-and-tenon instead, which makes a later neck reset much simpler.",
            ja:"ギターのネックを取りつける古典的な方法。ヒールに刻んだ蟻形の枘を、ネックブロックの同じ形の穴に接着する。現代の多くのギターは代わりにボルトで留める枘組みを使い、のちのネックリセットがずっと容易になる。",
            zh:"鳩尾接合：固定吉他琴頸的經典方式，把琴跟上的錐形鳩尾榫膠入琴頸塊的對應榫槽。許多現代吉他改用螺栓固定的榫接，日後重設琴頸就簡單得多。" } },
        { r:"dreadnought",
          jp:"ドレッドノート",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The large, square-shouldered steel-string body introduced by Martin and named after a class of battleship; the most common acoustic shape, with strong bass and volume. Other sizes run from the small parlour to the jumbo.",
            ja:"マーティンが広めた、肩の張った大きなスチール弦ギターの胴で、戦艦の型の名にちなむ。低音と音量が豊かで、もっとも一般的なアコースティックの形である。ほかに小さなパーラーから大きなジャンボまである。",
            zh:"Dreadnought（大琴身）：由 Martin 推出、以戰艦類型命名的大型方肩鋼弦琴身，低音飽滿、音量大，是最常見的木吉他外形。其他尺寸從小巧的 parlour 到大型 jumbo 都有。" } },
        { r:"edauchi",
          jp:"枝打ち",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Pruning: cutting the lower branches flush with the trunk in several lifts between about ten and thirty years, so that clear wood grows over the stubs. It produces the knot-free faces of the finest posts, and it is the first operation owners stop paying for.",
            ja:"およそ十〜三十年生のあいだに数回に分けて、下枝を幹ぎわで切り落とす作業。切り口の上を節のない材が巻いて育ち、最上の柱の無節の面が生まれる。いまは所有者が真っ先にやめてしまう作業でもある。",
            zh:"修枝（枝打）：約在 10 至 30 年生之間分數次將下層枝條貼著樹幹切除，讓無節材包覆枝痕生長，才能產出上等柱材的無節面。如今卻是林主最先放棄出資的作業。" } },
        { r:"egoma",
          jp:"荏胡麻",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Perilla, whose seed oil is a true drying oil that hardens in the wood. Known in Hida as aburae, it is still grown there and ground into the sauce for gohei-mochi; Gifu's umbrella makers once stroked it onto their paper canopies.",
            ja:"エゴマ。種の油は木の中で固まる乾性油である。飛騨では「あぶらえ」と呼ばれ、いまも栽培されて五平餅のたれにすりこまれる。岐阜の傘職人はかつてこの油を紙の傘にひいた。",
            zh:"荏胡麻：其籽油是會在木材中硬化的乾性油。在飛驒稱為「あぶらえ」，至今仍有栽培，並磨入五平餅的醬汁；岐阜的製傘匠人過去把它塗在紙傘面上。" } },
        { r:"egonoki",
          jp:"エゴノキ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Styrax japonica, a small tree of the hill forest with hard, tough, even wood. In Gifu it has a very particular job: the rokuro, the hub into which every rib of a Gifu umbrella is set, is turned from it.",
            ja:"Styrax japonica。丘陵の森の小高木で、材は硬く粘り強く均質である。岐阜ではとりわけ大切な役目があり、和傘の骨をすべて差しこむ「ろくろ」はこの木から挽かれる。",
            zh:"野茉莉（Styrax japonica）：丘陵森林中的小喬木，木材堅硬、強韌而均勻。在岐阜有特別的用途：岐阜和傘所有傘骨插入的轆轤（傘轂）即以此木車製。" } },
        { r:"engawa",
          jp:"縁側",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A board-floored corridor or veranda between the rooms and the garden, under deep eaves — a place for sitting in the sun, drying persimmons and receiving neighbours without bringing them into the house.",
            ja:"部屋と庭のあいだの、深い軒の下の板張りの縁。日なたぼっこをし、柿を干し、近所の人を家に上げずにもてなす場所である。",
            zh:"緣側：房間與庭院之間、深簷下鋪木板的廊道或平台——曬太陽、晾柿子，以及不必請鄰居進屋也能招呼他們的地方。" } },
        { r:"Enkū-butsu",
          jp:"円空仏",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"The Buddhist images of the itinerant monk Enkū (1632–1695), born in Mino. He split a log with wedges and carved the figure from the split face with hatchet and chisel in a few hours, leaving the cuts visible; many survive in Gifu villages and temples.",
            ja:"美濃に生まれた遊行僧円空（一六三二〜一六九五年）の仏像。楔で丸太を割り、割れた面から鉈と鑿で数時間のうちに像を彫り出し、刃の跡をそのまま残した。岐阜の村や寺に多く残る。",
            zh:"圓空佛：出生於美濃的遊方僧圓空（1632–1695 年）所刻的佛像。他以楔子劈開圓木，用柴刀與鑿子在數小時內從劈面刻出佛像，保留刀痕；許多作品留存在岐阜的村落與寺院。" } },
        { r:"ereako",
          jp:"エレアコ",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"An electro-acoustic guitar: an acoustic with a built-in pickup, usually a piezo strip under the saddle, and a preamp in the side, so it can be plugged into a stage amplifier. Takamine of Nakatsugawa made the type its signature from the late 1970s.",
            ja:"エレクトリック・アコースティックギターの略。多くはサドルの下のピエゾと側板のプリアンプを内蔵し、ステージのアンプにつなげる。中津川のタカミネは一九七〇年代末からこの型を看板とした。",
            zh:"電木吉他：內建拾音器（多為下弦枕下方的壓電條）並在側板裝有前級的木吉他，可接上舞台音箱。中津川的 Takamine 自 1970 年代末起以此為招牌。" } },
        { r:"ereki",
          jp:"エレキ",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The Japanese word for the electric guitar, and for the boom of the mid-1960s, when tours by American instrumental bands such as The Ventures set off a craze and dozens of Japanese factories sprang up to meet it.",
            ja:"エレキギターの日本での呼び名で、一九六〇年代半ばのブームも指す。ベンチャーズなどアメリカのインストゥルメンタル・バンドの来日が火をつけ、それに応えて何十もの工場が国内に生まれた。",
            zh:"日文對電吉他的稱呼，也指 1960 年代中期的熱潮：The Ventures 等美國器樂樂團來日巡演點燃風潮，數十家日本工廠應運而生。" } },
        { r:"fan bracing",
          jp:"扇状力木",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Several thin braces radiating below the soundhole, developed in Spain in the mid-nineteenth century and associated with Antonio de Torres, whose designs defined the modern classical guitar. Suited to the lower tension of nylon strings.",
            ja:"サウンドホールの下から扇のように広がる数本の細い力木。十九世紀半ばのスペインで生まれ、現代のクラシックギターの形を決めたアントニオ・デ・トーレスに結びつけられる。ナイロン弦の低い張力に向く。",
            zh:"扇形音梁：從音孔下方呈扇形散開的數根細音梁，19 世紀中葉發展於西班牙，與奠定現代古典吉他形制的 Antonio de Torres 相連，適合尼龍弦較低的張力。" } },
        { r:"F-four-star",
          jp:"F☆☆☆☆",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"The top formaldehyde class for interior boards, adhesives and paints under the Building Standards Act from 1 July 2003: no more than 0.005 mg per square metre per hour, usable without limit. The lower classes F☆☆☆ and F☆☆ are restricted in area.",
            ja:"二〇〇三年七月一日施行の建築基準法の改正で定められた、内装用の板、接着剤、塗料のホルムアルデヒド放散の最上位の等級。1平方メートル・1時間あたり0.005mg以下で、使う面積に制限がない。下位のF☆☆☆とF☆☆は面積が制限される。",
            zh:"依 2003 年 7 月 1 日施行的日本《建築基準法》修正，室內用板材、接著劑與塗料甲醛逸散的最高等級：每平方公尺每小時不超過 0.005 毫克，可無限制使用；較低的 F☆☆☆ 與 F☆☆ 則限制使用面積。" } },
        { r:"fingerboard",
          jp:"指板",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The strip of hard, dense wood glued to the face of the neck, into which the frets are set: traditionally ebony or rosewood, and since the CITES listings of rosewood also roasted maple, pau ferro and composites.",
            ja:"ネックの表に貼る硬く密な木の板で、フレットを打ちこむ。伝統的にはエボニーやローズウッドで、ローズウッドがワシントン条約に掲載されてからは、熱処理したメイプル、パーフェロー、複合材も使われる。",
            zh:"指板：黏在琴頸正面、嵌入琴格的堅硬緻密木條，傳統上用黑檀或玫瑰木；自玫瑰木被列入華盛頓公約後，也使用烘烤楓木、pau ferro 與複合材料。" } },
        { r:"fitontchiddo",
          jp:"フィトンチッド",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Phytoncide: a word coined in 1928 by the Soviet biologist Boris Tokin for substances plants release that inhibit microbes. In Japan it loosely means the scent of the forest; in Taiwan the same idea is popularly called fenduojing.",
            ja:"一九二八年にソ連の生物学者ボリス・トーキンが、植物が出して微生物を抑える物質を指してつくったことば。日本ではおおまかに森の香りの意味で使われる。台湾では同じものが「芬多精」の名で親しまれている。",
            zh:"芬多精（日文「フィトンチッド」）：1928 年由蘇聯生物學家 Boris Tokin 所創，指植物釋放、能抑制微生物的物質；在日本泛指森林的香氣，在台灣則通稱「芬多精」。" } },
        { r:"folk boom",
          jp:"フォークブーム",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The wave of Japanese folk and singer-songwriter music from the late 1960s into the 1970s that made the steel-string acoustic the instrument of a generation. Demand ran far ahead of supply; Yairi and Takamine grew rapidly on it and began to export.",
            ja:"一九六〇年代末から一九七〇年代にかけての、日本のフォークとシンガーソングライターの波。スチール弦のアコースティックギターを一世代の楽器にし、需要は供給をはるかに上回った。ヤイリとタカミネはこの波に乗って大きく育ち、輸出を始めた。",
            zh:"民謠熱潮：1960 年代末至 1970 年代日本民謠與創作歌手的浪潮，讓鋼弦木吉他成為一個世代的樂器，需求遠超供給。矢入與 Takamine 乘勢迅速成長並開始外銷。" } },
        { r:"Forest Therapy Base",
          jp:"森林セラピー基地",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"A forest certified after physiological tests on volunteers, with at least two gentle routes, lodgings, trained guides and a local managing body. Motosu city states that it became Gifu's first, in 2015, with routes around Neo.",
            ja:"ボランティアの生理的な計測を経て認定された森で、ゆるやかな道を二本以上もち、宿泊施設、案内人、地元の運営主体をそなえる。本巣市は、根尾の道によって二〇一五年に岐阜県初の基地に認定されたとしている。",
            zh:"森林療法基地：經志願者生理測試後認證的森林，須有至少兩條平緩路線、住宿設施、受訓嚮導與在地營運組織。本巢市表示，其根尾一帶的路線於 2015 年成為岐阜縣第一個基地。" } },
        { r:"fowādā",
          jp:"フォワーダ",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Forwarder: a tracked carrier with a loading crane that picks up cut logs along the strip road and carries them clear of the ground to the landing. It needs a road network, so it is the machine of the gentler Mino hills more than of the Hida gorges.",
            ja:"クレーン付きの装軌式の運搬車で、作業道に沿って玉切りした丸太を積み、地面から浮かせて土場まで運ぶ。路網が前提なので、飛騨の峡谷より美濃の緩やかな丘陵で活躍する。",
            zh:"運材車（forwarder）：附有裝載吊臂的履帶式搬運車，沿作業道拾起已截段的原木，懸空載運至集材場。由於需要路網，較常用於坡度和緩的美濃丘陵，而非飛驒的峽谷。" } },
        { r:"fret",
          jp:"フレット",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A metal wire of nickel silver or stainless steel set across the fingerboard at positions given by the twelfth root of two, so that each fret raises the pitch by a semitone. Steel strings wear grooves in it; levelling or refretting restores it.",
            ja:"指板に打ちこむ洋白やステンレスの金属線。2の12乗根にもとづく位置に打たれ、一つ進むごとに半音高くなる。スチール弦で溝がすり減ると、すり合わせやリフレットで直す。",
            zh:"琴格：以鎳銀或不鏽鋼製成、嵌在指板上的金屬條，位置依 2 的 12 次方根計算，每前進一格音高升高半音。鋼弦會把它磨出凹槽，可藉由整平或重新換格修復。" } },
        { r:"fuki-urushi",
          jp:"拭き漆",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Wiped lacquer: raw urushi rubbed into bare wood with a cloth and wiped off, usually three to five times, each coat cured before the next. It darkens and deepens the grain of keyaki, tochi or sugi without hiding it, and is used on trays, tables and counters.",
            ja:"拭き漆。生漆を布で木地にすりこんでは拭き取り、硬化させることをふつう三〜五回くり返す。ケヤキ、トチ、スギの木目を隠さずに濃く深く見せ、盆、テーブル、カウンターに使う。",
            zh:"擦漆：用布把生漆擦入素木再拭去，每層硬化後再上下一層，通常反覆三到五次。能加深櫸木、七葉樹或柳杉的木紋而不遮蓋，用於托盤、桌子與櫃台。" } },
        { r:"fukumame",
          jp:"福豆",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Roasted soybeans thrown from a masu on Setsubun, the eve of the start of spring in early February, to drive out demons and invite good fortune — one of the masu's most familiar uses in homes and temples.",
            ja:"二月初めの立春の前夜、節分に、枡から撒いて鬼を追い払い福を招く炒り豆。家庭や寺で枡がもっともなじみ深く使われる場面の一つである。",
            zh:"福豆：2 月初立春前夕的節分，從枡中撒出、用來驅鬼招福的炒黃豆，是枡在家庭與寺院中最為人熟悉的用途之一。" } },
        { r:"fukusōrin",
          jp:"複層林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Multi-storeyed forest: a second generation planted or allowed to grow beneath the thinned canopy of the first, so that the ground is never bare. It protects soil and landscape but demands careful felling and extraction to spare the young trees below.",
            ja:"間伐した上層木の下に次の世代を植えるか育て、地面が裸にならないようにした森。土壌と景観を守るが、下の若木を傷めない慎重な伐倒と搬出が要る。",
            zh:"複層林：在疏伐後的上層林冠下栽植或培育下一代，使地面從不裸露。有利於保護土壤與景觀，但需小心伐木與集材，以免傷及下層幼樹。" } },
        { r:"fushi",
          jp:"節（生き節・死に節）",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Knot: the base of a branch embedded in the trunk. A live knot (ikibushi) grew together with the surrounding wood and is tight; a dead knot (shinibushi) is the stub of a dead branch, often loose and dark. Visible timber is graded mainly by its knots.",
            ja:"幹に埋もれた枝の付け根。生き節は周りの材と一緒に育って固くしまり、死に節は枯れた枝の跡で、しばしば黒く抜けやすい。見える材の等級は主に節で決まる。",
            zh:"節：埋入樹幹中的枝條基部。活節與周圍木材一同生長而緊密；死節則是枯枝殘樁，常呈黑色且易脫落。外露木材的等級主要依節來判定。" } },
        { r:"fusuma",
          jp:"襖",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"An opaque sliding panel: a wooden lattice core covered with several layers of paper, finished with decorative paper or cloth and a lacquered or wooden frame. Removing the fusuma turns several rooms into one hall.",
            ja:"不透明な引き戸。木の格子の骨に紙を何層も張り、上に飾りの紙や布を張り、漆塗りや木の縁をつける。襖をはずせば、いくつもの部屋が一つの広間になる。",
            zh:"襖：不透光的拉門，以木格為骨，糊上多層紙後再覆以裝飾紙或布，並裝上漆框或木框。拆下襖，數個房間便可連成一個大廳。" } },
        { r:"Fuwa no seki", jp:"不破関", cat:GIFU.GC.history,
  d:{en:"One of the three great barriers guarding the approaches to the ancient capital, at Sekigahara; abolished in 789.",ja:"古代の都への道を守った三関の一つ。関ケ原にあり、789年に廃された。",zh:"守衛古都通道的三大關之一，位於關原；789 年廢止。"} },
        { r:"fuyugiri",
          jp:"冬伐り",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Winter felling, the oldest and best-supported rule of the trade: wood cut in the dormant season, when starch reserves are low and sap is still, resists insects and fungi better and dries with less staining and checking.",
            ja:"冬に伐ること。最も古く、根拠もしっかりした言い伝えである。デンプンが少なく樹液が動かない休眠期に伐った木は、虫や菌に強く、乾燥でしみや割れが出にくい。",
            zh:"冬伐：業界最古老、也最有根據的法則。在澱粉儲量低、樹液停滯的休眠期伐下的木材，較能抵抗蟲害與菌害，乾燥時也較少變色與開裂。" } },
        { r:"gaizai",
          jp:"外材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Imported timber. Since the liberalisation of the 1960s, logs, lumber, plywood and glulam from North America, Europe, Southeast Asia and Russia have supplied most of Japan's wood; domestic self-sufficiency fell to 18.8 per cent in 2002 before recovering.",
            ja:"輸入材。一九六〇年代の自由化以来、北米、ヨーロッパ、東南アジア、ロシアからの丸太、製材、合板、集成材が日本の木材の大半をまかなってきた。国産材の自給率は二〇〇二年に十八・八パーセントまで下がり、その後回復した。",
            zh:"外材（進口材）：自 1960 年代貿易自由化以來，來自北美、歐洲、東南亞與俄羅斯的原木、製材、合板與集成材供應了日本大部分木材；國產材自給率於 2002 年跌至 18.8%，之後才回升。" } },
        { r:"gansuiritsu",
          jp:"含水率",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Moisture content: the weight of water divided by the weight of the same wood oven-dry, so it can exceed 100 per cent. Green sugi heartwood commonly holds 50–150 per cent; a structural post should be dried to 15–20, furniture to 8–12.",
            ja:"水の重さを、同じ木を全乾したときの重さで割った値なので、百パーセントを超えることもある。生のスギ心材はふつう五〇〜一五〇パーセント。構造用の柱は十五〜二十、家具は八〜十二パーセントまで乾かす。",
            zh:"含水率：水的重量除以同一木材全乾重量所得的比值，因此可超過 100%。生材柳杉心材通常含水 50% 至 150%；結構柱材應乾燥至 15% 至 20%，家具用材則為 8% 至 12%。" } },
        { r:"gasshō-zukuri",
          jp:"合掌造り",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"The steep-roofed farmhouses of Shirakawa-gō, named for roof frames that resemble hands joined in prayer. The rafters are lashed with rope and witch-hazel withies without nails; the thatch, up to a metre thick, is renewed about every thirty years. World Heritage since 1995.",
            ja:"白川郷の急勾配の屋根の民家。屋根の骨組みが合わせた手のように見えることからの名。部材は釘を使わずに縄とネソで結び、厚さ一メートルにもなる茅はおよそ三十年ごとに葺き替える。一九九五年に世界遺産となった。",
            zh:"合掌造：白川鄉陡峭屋頂的民家，因屋架形似合十的雙手而得名。椽木不用釘子，以繩索與金縷梅枝條綑綁；厚達 1 公尺的茅草屋頂約每三十年重葺一次。1995 年列入世界遺產。" } },
        { r:"genpei",
          jp:"源平",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"A board, typically sugi, showing both red heartwood and white sapwood — named after the red and white banners of the Taira (Heike) and Minamoto (Genji) clans. Valued in Nagara sugi and in the staves of sake barrels.",
            ja:"赤い心材と白い辺材が一枚に両方現れた板で、ふつうはスギ。平家の赤旗と源氏の白旗にちなむ名である。長良杉の持ち味とされ、酒樽の側板にも好まれる。",
            zh:"源平：同一片板上同時呈現紅色心材與白色邊材的板材，多為柳杉，名稱源自平氏（平家）紅旗與源氏白旗。是長良杉的特色，也受酒桶側板青睞。" } },
        { r:"geta",
          jp:"下駄",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Wooden clogs: a flat sole of kiri or another light wood on two teeth, held by a cloth thong. During the Gujō Odori, danced on some thirty nights in July and August, the dancers' geta clattering on the paving are part of the music.",
            ja:"桐などの軽い木の台に二枚の歯をつけ、鼻緒をすげた履物。七月から八月の三十夜ほど踊られる郡上おどりでは、石畳に響く下駄の音が音楽の一部となる。",
            zh:"木屐：以桐木等輕木製成鞋台，下有兩齒，繫上布製鞋帶。在 7、8 月約三十個夜晚舉行的郡上舞中，舞者木屐踏在石板路上的聲響也成了音樂的一部分。" } },
        { r:"Gifu-chō", jp:"ギフチョウ", cat:GIFU.GC.land,
  d:{en:"The Gifu butterfly, a black-and-yellow swallowtail of early spring named by Nawa Yasushi in 1883.",ja:"早春の黒と黄のアゲハ。1883年に名和靖が名づけた。",zh:"早春的黑黃相間鳳蝶，1883 年由名和靖命名。"} },
        { r:"Gifu chōchin",
          jp:"岐阜提灯",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Gifu lanterns: very thin Mino paper stretched over a single spiral of fine bamboo, with turned and lacquered wooden rings at top and bottom, painted with flowers and landscapes. Hung at Obon to welcome the spirits; a national traditional craft since 1995.",
            ja:"岐阜提灯。細い竹ひごを一本のらせんに巻いた骨にごく薄い美濃紙を張り、上下に漆を塗った挽物の輪をつけ、草花や風景を描く。盆に先祖の霊を迎えるために吊るす。一九九五年から国の伝統的工芸品。",
            zh:"岐阜提燈：以單一螺旋的細竹條為骨，糊上極薄的美濃紙，上下裝有車製上漆的木環，繪有花草與風景。盂蘭盆節時懸掛以迎接祖靈；1995 年起為國家傳統工藝品。" } },
        { r:"Gifu Mokuyūkan",
          jp:"ぎふ木遊館",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Gifu prefecture's wood-play museum in Gakuen-chō, Gifu city, opened on 17 July 2020: a single-storey building of 836 m² in larch, hinoki, sugi, chestnut and oak, about 98 per cent from Gifu's own forests, conceived as an open field (harappa) for play.",
            ja:"岐阜市学園町にある県の木育の拠点で、二〇二〇年七月十七日に開館した。カラマツ、ヒノキ、スギ、クリ、ナラでつくった836平方メートルの平屋で、材の約98％は県内の森から出た。遊び場としての「原っぱ」を目指す。",
            zh:"岐阜木遊館：位於岐阜市學園町的縣立木育設施，2020 年 7 月 17 日開館。以落葉松、扁柏、柳杉、栗木與橡木建成、面積 836 平方公尺的平房，木材約 98% 來自岐阜本地森林，以供孩子遊戲的「原野」為概念。" } },
        { r:"Gifu seinō hyōjizai",
          jp:"ぎふ性能表示材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Gifu performance-labelled timber: certified timber sold by registered businesses with its moisture content and strength assured and labelled. New houses whose specified structural members are at least 80 per cent this timber qualify for the prefecture's house-building subsidy.",
            ja:"登録事業者が、含水率や強度などの品質・性能を保証して表示した証明材。指定の構造材の八割以上にこれを使った新築住宅が、県の家づくり支援の対象となる。",
            zh:"岐阜性能標示材：由登錄業者保證並標示含水率與強度等品質性能的證明材。指定結構材有八成以上使用此材的新建住宅，可申請縣的住宅興建補助。" } },
        { r:"Gifu shōmeizai",
          jp:"ぎふ証明材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Gifu-certified timber: timber whose Gifu origin and legal harvest are documented by a chain of certificates from the forest to the seller. It is the minimum requirement for most of the prefecture's subsidies for building with local wood.",
            ja:"岐阜県産であることと合法に伐られたことが、森から販売者までの証明書の連鎖で裏づけられた材。県の県産材利用の補助の多くで、最低限の条件となっている。",
            zh:"岐阜證明材：從森林到銷售者以一連串證明文件確認其產地為岐阜且合法伐採的木材，是縣內多數地方材建築補助的基本條件。" } },
        { r:"Gifu wagasa",
          jp:"岐阜和傘",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Umbrellas of bamboo ribs, turned wooden hubs and oiled Mino paper. Craftsmen came to Gifu in 1639 with the lord Matsudaira Mitsushige; at the peak, around 1950, the city made well over ten million a year. A national traditional craft since 2022.",
            ja:"竹の骨、挽物のろくろ、油をひいた美濃紙でつくる傘。一六三九年に藩主松平光重とともに職人が岐阜へ来た。最盛期の一九五〇年ごろには、岐阜市は年に一千万本を優に超えてつくった。二〇二二年から国の伝統的工芸品。",
            zh:"以竹骨、車製木輪軸與上油美濃紙製成的傘。1639 年工匠隨藩主松平光重來到岐阜；在約 1950 年的鼎盛期，岐阜市年產遠超過一千萬把。2022 年起為國家傳統工藝品。" } },
        { r:"gōhan",
          jp:"合板",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Plywood: veneers peeled from a rotating log, dried and glued with the grain of each layer at right angles to the next. Once made almost entirely from tropical lauan, Japanese plywood switched to domestic conifers from the 2000s; structural plywood now sheathes the walls and floors of most new houses.",
            ja:"回転する丸太からむいた単板を乾かし、一層ごとに繊維方向を直交させて接着した板。かつてはほとんどが熱帯のラワンでつくられたが、二〇〇〇年代から国産の針葉樹に切り替わり、いまは新築住宅の多くの壁や床を構造用合板が覆う。",
            zh:"合板：將旋切自轉動原木的單板乾燥後，逐層以纖維方向互相垂直膠合而成。過去幾乎全以熱帶柳安製造，2000 年代起改用國產針葉樹；如今多數新建住宅的牆面與樓板都以結構用合板覆蓋。" } },
        { r:"goryōrin",
          jp:"御料林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Imperial forest: crown forest owned by the imperial household. The Kiso forests were transferred to it in 1889 and managed by the imperial forest bureau until 1947, when state and imperial forests were unified as national forest.",
            ja:"皇室が所有した森林。木曽の山は一八八九年に御料林に移され、一九四七年に国有林と統一されるまで帝室林野局が管理した。",
            zh:"御料林：皇室所有的森林。木曾山林於 1889 年移轉為御料林，由帝室林野局管理，直到 1947 年國有林與御料林統一為國有林為止。" } },
        { r:"Gujō Odori", jp:"郡上おどり", cat:GIFU.GC.gculture,
  d:{en:"The summer dance of Gujō Hachiman, danced by everyone in the street on some thirty nights, all night in mid-August.",ja:"郡上八幡の夏の踊り。三十夜あまり誰もが通りで踊り、八月半ばは夜通し踊る。",zh:"郡上八幡的夏季舞蹈，三十多個夜晚人人在街頭共舞，八月中旬更通宵達旦。"} },
        { r:"gyūtō · santoku · deba · yanagiba", jp:"牛刀・三徳・出刃・柳刃", cat:GIFU.GC.metal,
  d:{en:"The chef's knife, the all-purpose knife, the heavy fish-cleaving knife and the long slicing knife for raw fish.",ja:"牛刀、万能の三徳、魚をおろす厚い出刃、刺身を引く長い柳刃。",zh:"主廚刀、萬用的三德刀、剖魚用的厚重出刃刀，以及切生魚片用的細長柳刃刀。"} },
        { r:"hābesuta",
          jp:"ハーベスタ・プロセッサ",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Harvester: a machine whose head grips a standing tree, fells it, strips the branches and cuts the stem into measured logs. A processor has the same head but works on trees already felled, usually at the landing — the commoner machine on Japan's steep slopes.",
            ja:"ハーベスタは、ヘッドで立木をつかんで伐倒し、枝を払い、測りながら玉切りまでする機械。プロセッサは同じようなヘッドで、伐倒済みの木を主に土場で処理する。急斜面の多い日本ではプロセッサのほうが普及している。",
            zh:"伐木歸堆機與造材機：harvester 以機頭夾住立木，完成伐倒、去枝並量測截段；processor 機頭相似，但處理已伐倒的樹木，通常在集材場作業——在日本陡坡地更為普及。" } },
        { r:"hagarashi",
          jp:"葉枯らし",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Leaf seasoning: felled trees are left on the slope with their crowns on for weeks or months, so that the leaves draw water out of the trunk. It lightens logs for extraction, improves the colour of the heartwood and is favoured by builders of traditional houses.",
            ja:"伐った木を枝葉をつけたまま数週間から数か月斜面に置き、葉の蒸散で幹の水分を抜く方法。搬出する丸太が軽くなり、心材の色もよくなるとされ、伝統的な家をつくる工務店に好まれる。",
            zh:"葉枯乾燥：將伐倒木連同樹冠留在坡上數週至數月，藉葉片蒸散將樹幹水分抽出。可減輕搬出時的原木重量、改善心材色澤，深受傳統木屋營造者青睞。" } },
        { r:"hagi-ita",
          jp:"接ぎ板",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"An edge-glued panel: a wide board made by gluing narrower solid boards side by side, as in most table tops. Unlike laminated timber it shows continuous solid wood on both faces, and it still moves with the humidity.",
            ja:"幅の狭い無垢板を横に並べて接着し、幅広の板にしたもの。多くのテーブルの天板はこれである。集成材とちがい両面とも無垢の木が見え、湿度による伸び縮みも残る。",
            zh:"拼板：將數片窄實木板並排膠合成的寬板，多數桌面即是如此。與集成材不同，兩面都是連續的實木，仍會隨濕度伸縮。" } },
        { r:"hai",
          jp:"椪",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"A lot of logs at market, sorted by species, length, diameter and quality and piled together under a numbered tag giving the consignor, volume and grade. Each lot is bid for and sold as a single unit.",
            ja:"市場で樹種、長さ、径、品質ごとに仕分けて積んだ丸太の一山。出荷者、材積、等級を記した番号札がつく。椪ごとにひとまとめで値がつけられ、売られる。",
            zh:"椪：原木市場中依樹種、長度、徑級與品質分類堆放的一堆原木，附有標示出貨者、材積與等級的編號標籤。每堆作為一個單位競價出售。" } },
        { r:"haimatsu",
          jp:"這松・ハイマツ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Pinus pumila, the creeping pine of the alpine zone, whose stems lie along the ground under the winter snow and form waist-high thickets above the tree line on the peaks of the Hida mountains and Hakusan.",
            ja:"Pinus pumila。高山帯のマツで、幹は冬の雪の下で地をはい、飛騨山脈や白山の森林限界より上に腰の高さの茂みをつくる。",
            zh:"偃松（Pinus pumila）：高山帶的松樹，莖幹在冬季積雪下貼地匍匐，於飛驒山脈與白山森林界線以上形成及腰高的灌叢。" } },
        { r:"hakaranda",
          jp:"ハカランダ",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The Japanese guitar trade's name for Brazilian rosewood (Dalbergia nigra), from the Portuguese jacarandá; the word alone signals a top-of-the-range instrument. Listed in CITES Appendix I at the Kyoto conference of 1992, it can be traded across borders only with pre-Convention papers.",
            ja:"ブラジリアン・ローズウッド（Dalbergia nigra）の日本での呼び名で、ポルトガル語のjacarandáから。この語だけで最上級の楽器を意味する。一九九二年の京都会議でワシントン条約の附属書Iに掲載され、国境を越える取引には条約適用前の書類が要る。",
            zh:"日本吉他業界對巴西玫瑰木（Dalbergia nigra）的稱呼，源自葡萄牙語 jacarandá，光這個詞就代表頂級樂器。1992 年京都會議將其列入華盛頓公約附錄一，跨國交易須有公約適用前的文件。" } },
        { r:"hakomono",
          jp:"箱物",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"“Box things”: cabinets, chests of drawers, sideboards, bookcases and other carcase furniture — traditionally the work of the cabinetmaker (sashimono-shi). Several Hida factories that began with chairs, Kashiwa Mokkō among them, added hakomono later.",
            ja:"「箱のもの」。キャビネット、整理箪笥、サイドボード、本棚などの箱組みの家具で、伝統的には指物師の仕事。柏木工をはじめ、椅子から始まった飛騨の工場のいくつかは、のちに箱物を加えた。",
            zh:"「箱狀的東西」：櫥櫃、抽屜櫃、餐邊櫃、書櫃等箱體家具，傳統上是指物師的工作。柏木工等幾家以椅子起家的飛驒工廠，後來才加入箱物。" } },
        { r:"hamon", jp:"刃文", cat:GIFU.GC.metal,
  d:{en:"The pale hardened zone along the edge, formed by clay coating before quenching; its outline marks the school and maker.",ja:"焼き入れの前に土を置くことでできる、刃に沿った白い焼きの部分。その形が流派と作者を示す。",zh:"刃口沿線淬硬的淡色帶，由淬火前塗覆黏土而成；其輪廓標示流派與作者。"} },
        { r:"hanamichi",
          jp:"花道",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"The raised walkway that runs from the stage through the audience to the back of a kabuki theatre, used for dramatic entrances and exits. The Kashimo Meiji-za has one, like the city theatres its builders took as a model.",
            ja:"歌舞伎の劇場で、舞台から客席の中を通って後方へのびる一段高い通路。見せ場の出入りに使う。加子母の明治座にも、手本とした都会の劇場と同じく花道がある。",
            zh:"花道：歌舞伎劇場中從舞台穿過觀眾席延伸到後方的高起通道，用於戲劇性的登場與退場。加子母明治座也和它仿效的城市劇場一樣設有花道。" } },
        { r:"harigiri",
          jp:"針桐・ハリギリ（セン）",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Kalopanax septemlobus, sold as sen: a large tree of mixed forest with a thorny trunk. Its ring-porous, ash-like grain makes it a common furniture, veneer and drawer-front timber, sometimes passed off as a cheaper stand-in for tamo or oak.",
            ja:"Kalopanax septemlobus。材はセンの名で流通する。とげのある幹をもつ混交林の大木で、タモに似た環孔材の木目から家具、突板、引き出しの前板によく使われ、タモやナラの代用とされることもある。",
            zh:"刺楸（Kalopanax septemlobus），木材以「セン」之名流通：混交林中樹幹帶刺的大樹。環孔材紋理近似梣木，常用於家具、薄片與抽屜面板，有時也作為梣木或櫟木的替代品。" } },
        { r:"headstock",
          jp:"ヘッド",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The head of the neck, carrying the tuning machines. Its outline is a maker's signature: in the early 1970s several Japanese makers, Takamine among them, copied American headstocks before adopting distinctive shapes of their own.",
            ja:"ネックの先端で、糸巻きをつける部分。その輪郭はつくり手の署名のようなもので、一九七〇年代初め、タカミネを含む日本のいくつかのメーカーはアメリカのヘッドを写したのち、独自の形に移った。",
            zh:"琴頭：琴頸末端、裝設弦鈕的部分。其輪廓如同製造者的簽名；1970 年代初，包括 Takamine 在內的幾家日本廠商先仿照美國琴頭，之後才改採獨特的自有外形。" } },
        { r:"heikō gansuiritsu",
          jp:"平衡含水率",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Equilibrium moisture content: the level at which wood neither gains nor loses water in given air. Outdoors in Japan it averages about 15 per cent, which is as far as air drying can go; in heated rooms in winter it falls well below ten.",
            ja:"ある空気の中で、木が水を吸いも吐きもしなくなる含水率。日本の屋外では平均約十五パーセントで、天然乾燥で到達できるのはここまでである。冬の暖房した部屋では十パーセントを大きく下回る。",
            zh:"平衡含水率：木材在特定空氣條件下既不吸濕也不放濕時的含水率。日本戶外平均約 15%，這也是自然乾燥所能達到的極限；冬季暖氣房內則會降到 10% 以下甚多。" } },
        { r:"hiba",
          jp:"檜葉・ヒバ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"The trade name for asunaro and especially its northern variety, Thujopsis dolabrata var. hondae, which forms large forests in Aomori and on the Noto peninsula, where it is called ate. Its wood is among the most rot-resistant in Japan.",
            ja:"アスナロ、とくにその北方の変種ヒノキアスナロ（Thujopsis dolabrata var. hondae）の通称。青森や能登半島に大きな森をつくり、能登では「あて」と呼ばれる。材は日本で最も腐りにくいものの一つである。",
            zh:"羅漢柏的商用名，特指其北方變種 Thujopsis dolabrata var. hondae，在青森與能登半島形成大片森林，能登稱之為「あて」。其木材是日本最耐腐的木材之一。" } },
        { r:"hibachi",
          jp:"火鉢",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A charcoal brazier: a bowl of ceramic or metal, or of wood lined with metal, filled with ash, in which charcoal burned to warm hands and a kettle. Wooden hibachi of keyaki or kiri were fine furniture in their own right.",
            ja:"炭火を入れて手や鉄瓶を温める道具。陶器や金属、あるいは内側に金属を張った木でつくり、灰を満たして炭を置く。ケヤキや桐の木の火鉢は、それ自体が上等な家具であった。",
            zh:"火缽：以陶、金屬或內襯金屬的木材製成、盛滿灰後放炭的火盆，用來暖手與溫鐵壺。櫸木或桐木製的木火缽本身就是上等家具。" } },
        { r:"Hida", jp:"飛騨", cat:GIFU.GC.history,
  d:{en:"The northern of the two old provinces: mountains, snow and forest, joined to Gifu in 1876.",ja:"二つの旧国の北のほう。山と雪と森で、1876年に岐阜県に加わった。",zh:"兩個舊國中北邊的一個：山、雪與森林，於 1876 年併入岐阜縣。"} },
        { r:"Hida Homare", jp:"ひだほまれ", cat:GIFU.GC.sake,
  d:{en:"Gifu's own brewing rice, bred for the short, cool summers of the Hida highlands.",ja:"飛騨の高地の短く涼しい夏に合わせて育成された、岐阜独自の酒米。",zh:"岐阜自有的酒米，為適應飛驒高地短暫涼爽的夏季而育成。"} },
        { r:"Hida Mokkō Rengōkai",
          jp:"飛騨木工連合会",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"The federation of Hida's furniture makers: about two dozen companies, most in Takayama and a few in Hida city, from large chair factories to small workshops and a maker of woodworking machinery. It holds the Hida furniture trademark and runs the Hida Furniture Festival.",
            ja:"飛騨の家具メーカーの連合会。約二十数社からなり、多くは高山市、いくつかは飛騨市にある。大きな椅子工場から小さな工房、木工機械のメーカーまでを含む。「飛騨の家具」の商標を管理し、飛騨の家具フェスティバルを開く。",
            zh:"飛驒家具業者的聯合會，約有二十多家公司，多數在高山市、少數在飛驒市，從大型椅子工廠到小工坊，甚至包括一家木工機械廠。它持有「飛驒的家具」商標，並主辦飛驒家具節。" } },
        { r:"Hida no kagu",
          jp:"飛騨の家具",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"“Hida furniture”: a regional collective trademark registered in 2008 by the Hida Mokkō Rengōkai for furniture made in Takayama and Hida city. To use it a maker must be certified against the six standards of the Hida design charter; the name was also registered in Taiwan (2009) and China (2010).",
            ja:"「飛騨の家具」。高山市と飛騨市でつくられる家具のために、飛騨木工連合会が二〇〇八年に登録した地域団体商標。使うには、飛騨の家具の憲章が定める六つの基準にもとづく認定を受けなければならない。名称は台湾（二〇〇九年）と中国（二〇一〇年）でも登録された。",
            zh:"「飛驒的家具」。飛驒木工聯合會於 2008 年為高山市與飛驒市製造的家具登錄的地域團體商標。使用者須依飛驒家具憲章的六項標準取得認證；此名稱也在台灣（2009 年）與中國（2010 年）註冊。" } },
        { r:"Hida no kagu fesutibaru",
          jp:"飛騨の家具フェスティバル",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"The Hida Furniture Festival: once a year the Hida makers open their showrooms at the same time and stage a central exhibition in Takayama; in 2025 it ran from 2 to 6 July. The easiest way to see the region's whole range, from classics to prototypes.",
            ja:"年に一度、飛騨の家具メーカーが一斉にショールームを開き、高山で中心となる展示を行う催し。二〇二五年は七月二日から六日に開かれた。定番から試作まで、産地の家具をひととおり見るのにいちばんよい機会である。",
            zh:"飛驒家具節：每年一次，飛驒各家具廠同時開放展示間，並在高山舉辦主展覽；2025 年於 7 月 2 日至 6 日舉行。這是一次看遍產地家具——從經典款到試作品——最方便的機會。" } },
        { r:"Hida no takumi",
          jp:"飛騨の匠",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"“The master craftsmen of Hida”: under the ritsuryō codes Hida paid its taxes in carpenters, sending about a hundred a year to build the capital's palaces and temples for some four centuries. The name has never stopped being used and is the backbone of Hida's woodworking identity.",
            ja:"飛騨の匠。律令のもとで飛騨は税を大工で納め、約四百年にわたり毎年百人ほどを都へ送って宮殿や寺を建てさせた。その名はいまも使われ続け、飛騨の木工の誇りの背骨となっている。",
            zh:"飛驒之匠：律令制下，飛驒以木匠代替租稅，約四百年間每年派約一百人到京城營造宮殿與寺院。這個名號沿用至今，是飛驒木工認同的支柱。" } },
        { r:"Hida Shunkei",
          jp:"飛騨春慶",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Takayama lacquerware in which transparent amber lacquer is laid over wood stained yellow or red, so the grain of hinoki, sawara or tochi glows through. Traced to a sawara tray of about 1606; a national traditional craft since 1975. It grows clearer with use.",
            ja:"黄や赤に染めた木に透明な琥珀色の漆を塗り、ヒノキ、サワラ、トチの木目を透かして見せる高山の漆器。一六〇六年ごろのサワラの盆に始まるとされ、一九七五年に国の伝統的工芸品に指定された。使うほど透明になる。",
            zh:"高山的漆器：在染成黃色或紅色的木材上塗透明琥珀色的漆，讓扁柏、花柏或七葉樹的木紋透出。相傳源於約 1606 年的一只花柏托盤；1975 年指定為國家傳統工藝品。越用越透明。" } },
        { r:"hikikomi",
          jp:"弾き込み",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Playing in: the belief that an instrument opens up with years of playing. Studies suggest that ageing slowly changes the wood's hemicelluloses and that vibration may relax internal stresses, but blind tests find the effect small or hard to hear.",
            ja:"弾き込み。楽器は長年弾くほど鳴るようになるという考え。研究は、年月とともに木のヘミセルロースがゆっくり変わること、振動が内部の応力をゆるめうることを示すが、目隠しの試験では効果は小さいか、聴き分けにくい。",
            zh:"彈開（日文「弾き込み」）：樂器越彈越響的說法。研究顯示木材的半纖維素會隨歲月緩慢變化，振動也可能釋放內部應力，但盲測發現其效果很小，或難以聽出。" } },
        { r:"hikimono",
          jp:"挽物",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Turned ware: bowls, dishes, trays and boxes shaped on a lathe, usually from broadleaves such as tochi or keyaki. One of the three base techniques of Hida Shunkei, with joined boards (itamono) and bent boards (magemono).",
            ja:"轆轤で挽いてつくる椀、皿、盆、合子などの器。トチやケヤキなどの広葉樹が多い。板物、曲物と並ぶ、飛騨春慶の三つの素地の技の一つ。",
            zh:"挽物：以轆轤車製的碗、盤、托盤與盒子，多用七葉樹、櫸木等闊葉樹。與板物、曲物並列為飛驒春慶的三種木胎技法。" } },
        { r:"himorogi",
          jp:"神籬",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Originally an enclosure of evergreens marking a sacred space; today the temporary altar of a sakaki branch set up for a ground-breaking or a felling ceremony. The Ise felling rites in the Kashimo forest begin at such an altar at the foot of the chosen trees.",
            ja:"もとは常緑樹で囲んだ聖域。いまは地鎮祭や伐採の祭のために立てる、榊の枝の仮の祭壇をいう。加子母の森での伊勢の伐採の祭も、選ばれた木の根もとのこうした祭壇から始まる。",
            zh:"神籬：原指以常綠樹圍出的聖域；如今指為地鎮祭或伐木祭設置的臨時榊枝祭壇。在加子母森林為伊勢神宮伐木的儀式，也從選定樹木根部的這種祭壇開始。" } },
        { r:"hinoki",
          jp:"檜・ヒノキ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Chamaecyparis obtusa, Japanese cypress. Pale, fine-grained, fragrant and durable, it is the most valued Japanese conifer: the timber of the Ise Shrine, of temples, baths and masu. Planted across Gifu below about 1,200 metres and natural in Ura-Kiso.",
            ja:"Chamaecyparis obtusa。淡い色で肌目が細かく、香り高く耐久性にすぐれた、日本で最も尊ばれる針葉樹。伊勢神宮、社寺、風呂、枡の材である。岐阜県では標高千二百メートルほどまでの各地に植えられ、裏木曽には天然林がある。",
            zh:"扁柏（Chamaecyparis obtusa），木材稱檜木。色淡、紋理細緻、芳香而耐久，是日本最受珍視的針葉樹，用於伊勢神宮、寺社、浴桶與枡。岐阜縣海拔約 1,200 公尺以下各地皆有栽植，裏木曾有天然林。" } },
        { r:"hinoki-buro",
          jp:"檜風呂",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A bath tub of hinoki boards, prized for its scent, its warmth to the touch and its resistance to rot. It asks for daily care — rinse, ventilate and let it dry — and is a familiar product of the Tōnō and Ura-Kiso workshops.",
            ja:"ヒノキの板でつくった風呂桶。香り、肌ざわりのぬくもり、腐りにくさで好まれる。毎日すすぎ、換気して乾かす手入れが要る。東濃や裏木曽の工房のなじみの製品である。",
            zh:"以扁柏板製作的浴桶，香氣、溫潤的觸感與耐腐性備受珍視。需要每日照顧——沖洗、通風並晾乾——是東濃與裏木曾工坊常見的產品。" } },
        { r:"hinokichiōru",
          jp:"ヒノキチオール",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Hinokitiol, a strongly antibacterial and antifungal compound first isolated in 1936 by Nozoe Tetsuo at Taihoku (Taipei) Imperial University from Taiwan hinoki. Despite the name it is found only in traces in Japanese hinoki; hiba and western red cedar are rich in it.",
            ja:"強い抗菌・抗カビ作用をもつ化合物で、一九三六年に台北帝国大学の野副鉄男が台湾ヒノキから初めて取り出した。名前に反して日本のヒノキにはごく微量しかなく、ヒバやウエスタンレッドシーダーに多い。",
            zh:"檜木醇：具強烈抗菌、抗黴作用的化合物，1936 年由臺北帝國大學的野副鐵男首次從臺灣扁柏中分離出來。雖名為檜木醇，日本扁柏中僅含微量，羅漢柏與北美紅側柏則含量豐富。" } },
        { r:"hiratakikuimushi",
          jp:"ヒラタキクイムシ",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Powder-post beetles, whose larvae tunnel through the starch-rich sapwood of broadleaves — oak, ash, lauan, bamboo — leaving flour-like dust and tiny exit holes in new furniture and flooring. Makers remove sapwood or kiln-dry at temperatures that kill them.",
            ja:"幼虫がナラ、タモ、ラワン、竹など広葉樹のデンプンの多い辺材を食べ進み、新しい家具や床に小麦粉のような粉と小さな穴を残す甲虫。家具職人は辺材を除くか、虫が死ぬ温度で人工乾燥する。",
            zh:"粉蠹蟲（ヒラタキクイムシ）：幼蟲蛀食櫟木、梣木、柳安、竹子等闊葉材富含澱粉的邊材，在新家具與地板上留下麵粉般的細粉與小孔。業者會去除邊材，或以足以殺蟲的溫度進行人工乾燥。" } },
        { r:"Hisan nōsui", jp:"飛山濃水", cat:GIFU.GC.land,
  d:{en:"“The mountains of Hida, the waters of Mino”: the four-character phrase for the prefecture's two halves.",ja:"「飛騨の山、美濃の水」。県の二つの半分をいう四字の言葉。",zh:"「飛驒之山，美濃之水」：形容全縣南北兩半的四字語。"} },
        { r:"hiwada-buki",
          jp:"檜皮葺",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"Roofing of hinoki bark, stripped from living trees without felling them and laid in thin overlapping layers fixed with bamboo nails. Used on shrines, temples and palaces; the bark regrows, so the same trees can be harvested again after about ten years.",
            ja:"ヒノキの皮で葺く屋根。木を伐らずに立ち木から皮をはぎ、薄く重ねて竹釘で留める。神社、寺、御所に使われる。皮は再生するので、同じ木から十年ほどでまたはぐことができる。",
            zh:"檜皮葺：以扁柏樹皮鋪成的屋頂。不伐樹，而從立木上剝下樹皮，薄薄層疊並以竹釘固定，用於神社、寺院與宮殿。樹皮會再生，約十年後同一棵樹可再次採剝。" } },
        { r:"hiyaoroshi", jp:"ひやおろし", cat:GIFU.GC.sake,
  d:{en:"Sake stored over the summer and released in autumn without a second pasteurisation.",ja:"夏を越して秋に二度目の火入れをせずに出す酒。",zh:"經過一個夏天儲存、秋天不經第二次加熱殺菌即上市的酒。"} },
        { r:"hōba miso", jp:"朴葉味噌", cat:GIFU.GC.gculture,
  d:{en:"Miso with leeks and mushrooms grilled on a dried magnolia leaf over a charcoal brazier.",ja:"ねぎや茸を合わせた味噌を、乾いた朴の葉にのせて炭火で焼く。",zh:"拌入蔥與菇類的味噌，放在乾朴葉上以炭火烤製。"} },
        { r:"hōchō", jp:"包丁", cat:GIFU.GC.metal,
  d:{en:"A kitchen knife; Seki shipped 55 per cent of Japan's household knives by value in 2020.",ja:"台所の刃物。2020年、関は家庭用刃物の出荷額の55%を占めた。",zh:"廚房用刀；2020 年關在日本家用刀具出貨額中占 55%。"} },
        { r:"Hon-Minoshi",
          jp:"本美濃紙",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"The strictest form of Mino paper: only Nasu kōzo, bleached in water and sun, beaten by hand and formed by nagashizuki. An Important Intangible Cultural Property since 1969, and inscribed by UNESCO in 2014 with Sekishū-banshi and Hosokawa-shi as “Washi”.",
            ja:"美濃紙のもっとも厳しい形。那須楮だけを使い、水と日光でさらし、手で打ち、流し漉きでつくる。一九六九年に重要無形文化財となり、二〇一四年に石州半紙、細川紙とともに「和紙」としてユネスコに登録された。",
            zh:"美濃紙中最嚴格的一種：只用那須楮，以水與陽光漂白，手工捶打，以流漉法抄成。1969 年指定為重要無形文化財，2014 年與石州半紙、細川紙一同以「和紙」列入聯合國教科文組織名錄。" } },
        { r:"hōnoki",
          jp:"朴・ホオノキ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Magnolia obovata, of mixed broadleaf forest throughout Gifu. The wood is soft, even and greenish — the classic choice for sword scabbards, geta, cutting boards and woodblocks — and the huge leaves carry Hida's hōba miso, grilled on the hearth.",
            ja:"Magnolia obovata。岐阜の各地の広葉樹林に育つ。材は柔らかく均質で緑がかり、刀の鞘、下駄、まな板、版木の定番である。大きな葉は、囲炉裏で焼く飛騨の朴葉味噌に使われる。",
            zh:"日本厚朴（Magnolia obovata）：遍布岐阜各地闊葉混交林。木材柔軟均勻、帶綠色調，是刀鞘、木屐、砧板與木刻版的經典用材；巨大的葉片用來盛裝飛驒在地爐上燒烤的朴葉味噌。" } },
        { r:"Hōreki chisui", jp:"宝暦治水", cat:GIFU.GC.history,
  d:{en:"The river works of 1754–55 on the lower Kiso, Nagara and Ibi, imposed on the Satsuma domain at ruinous cost.",ja:"1754–55年の木曽・長良・揖斐川下流の治水工事。薩摩藩に莫大な負担を強いた。",zh:"1754–55 年在木曾、長良、揖斐三川下游進行的治水工程，令薩摩藩付出慘重代價。"} },
        { r:"Hōryū-ji daiku no kuden",
          jp:"法隆寺大工の口伝",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Oral maxims of the Hōryū-ji temple carpenters, made widely known by the books of Nishioka Tsunekazu: join the timbers by their temperaments as you join the carpenters' hearts; buy not the timber but the mountain. Both are routinely quoted in Hida.",
            ja:"西岡常一の本で広く知られるようになった法隆寺の宮大工の口伝。「堂塔の木組は木の癖組、木の癖組は工人たちの心組」、「木を買わず山を買え」などで、飛騨でもよく引かれる。",
            zh:"法隆寺木匠口傳：因西岡常一的著作而廣為人知的法隆寺宮大工口訣，如「堂塔的木組在於組合木的癖性，組合木的癖性在於組合工匠的心」「不買木材，要買山」，在飛驒也常被引用。" } },
        { r:"hōsha soshiki",
          jp:"放射組織",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Rays: ribbons of cells running from the pith towards the bark. One cell wide and nearly invisible in conifers, they are broad in oak and beech, showing as silver flakes or small flecks, and they help make radial shrinkage smaller than tangential.",
            ja:"髄から樹皮へ向かって走る細胞の帯。針葉樹では幅一細胞でほとんど見えないが、ナラやブナでは太く、銀色の斑や小さな斑点として現れる。半径方向の収縮が接線方向より小さい理由の一つである。",
            zh:"木射線：由髓心向樹皮輻射延伸的細胞帶。針葉樹的木射線僅一個細胞寬、幾乎看不見；櫟木與山毛櫸則寬大，呈現銀色斑紋或小斑點。它也是徑向收縮小於弦向的原因之一。" } },
        { r:"hyōshigi",
          jp:"拍子木",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A pair of square sticks of hard, dense wood — shitan, ebony, karin or kashi — tied with a cord and struck together for a sharp crack that carries down a street: the night fire-watch, the sumo caller and, as ki, the kabuki stage.",
            ja:"紫檀、黒檀、花梨、樫などの硬く密な木の角棒二本を紐でつなぎ、打ち合わせて通りの先まで届く鋭い音を出す道具。夜回りの火の用心、相撲の呼出し、そして歌舞伎の舞台の「柝」に使う。",
            zh:"拍子木：以紫檀、黑檀、花梨或橿木等堅硬緻密木材製成的兩根方棒，以繩相連，互擊發出傳遍街道的清脆聲響，用於夜間巡守防火、相撲的呼出，以及歌舞伎舞台上的「柝」。" } },
        { r:"Ibi-no-homare", jp:"揖斐の誉", cat:GIFU.GC.sake,
  d:{en:"A rice developed with farmers of the Ibi valley and grown nowhere else, brewed by one Ōno house.",ja:"揖斐の谷の農家とともに育て、よそでは作られない米。大野の一軒の蔵が醸す。",zh:"與揖斐河谷農家共同育成、他處不種的米，由大野的一家酒藏釀造。"} },
        { r:"ibota-rō",
          jp:"イボタ蝋",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"A hard white wax secreted by the scale insect Ericerus pela on privet, harvested in China and Japan. Rubbed along the sides and runners of a sticking drawer or sliding door, it makes it run smoothly; it has long been used to polish wood.",
            ja:"イボタノキにつくカイガラムシ（Ericerus pela）が分泌する硬く白い蝋で、中国と日本で採られる。引っかかる引出しや引き戸の側面や敷居にすりこむと滑りがよくなる。古くから木を磨くのにも使われてきた。",
            zh:"蟲白蠟：寄生在女貞類植物上的介殼蟲（Ericerus pela）分泌的堅硬白蠟，產於中國與日本。擦在卡住的抽屜或拉門側面與滑軌上，可使其順滑；自古也用於打磨木材。" } },
        { r:"Ibuki-oroshi", jp:"伊吹おろし", cat:GIFU.GC.land,
  d:{en:"The cold, dry winter wind that pours through the gap at Sekigahara onto the plain, bringing snow that slows the Shinkansen.",ja:"関ケ原の狭間から平野へ吹き下ろす、冬の冷たく乾いた風。新幹線を遅らせる雪を運ぶ。",zh:"冬季經關原隘口灌入平原的乾冷之風，帶來讓新幹線減速的大雪。"} },
        { r:"ichiban-tama",
          jp:"一番玉",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The butt log, first cut above the stump: the thickest, most valuable log of a tree, and in a pruned stand the one with the most clear wood. The second and third logs up the stem (niban-tama, sanban-tama) are progressively smaller and knottier.",
            ja:"根元から最初に取る丸太で、一本の木で最も太く価値が高い。枝打ちした林では無節の部分が最も多い。その上の二番玉、三番玉と、しだいに細く節が多くなる。",
            zh:"一番玉：伐根以上的第一段原木，是一棵樹中最粗、最有價值的部分，在修枝林中也是無節材最多的一段。其上的二番玉、三番玉逐段變細、節也愈多。" } },
        { r:"ichigo ichie",
          jp:"一五一会",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A small four-string instrument developed by Yairi in 2002 with the Okinawan band BEGIN, designed so that anyone can play a chord with a single finger. The name plays on ichigo ichie, “one meeting, one chance”, written with the numerals one-five-one.",
            ja:"ヤイリが二〇〇二年に沖縄のバンドBEGINとともに開発した小さな四弦の楽器。指一本で和音が弾けるように設計されている。名は「一期一会」にかけ、一・五・一の数字で書く。",
            zh:"一五一會：矢入於 2002 年與沖繩樂團 BEGIN 共同開發的小型四弦樂器，設計成任何人只用一根手指就能彈出和弦。名稱取自「一期一會」，以一、五、一的數字書寫。" } },
        { r:"ichii",
          jp:"一位・イチイ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Taxus cuspidata, Japanese yew, of the subalpine and cool forests around Mount Kurai. Dense and fine, with a red heart and cream sapwood that mellow to amber, it is the wood of Takayama's Ittōbori carving and, by tradition, of the court tablets (shaku) sent from Kuraiyama.",
            ja:"Taxus cuspidata。位山のまわりの亜高山や冷温帯の森に育つ。緻密で細かく、赤い心材と乳白色の辺材は年とともに飴色に深まる。高山の一刀彫の材であり、伝えによれば位山から朝廷に献じられた笏の材でもある。",
            zh:"紫杉（一位，Taxus cuspidata）：生於位山周邊的亞高山與冷溫帶森林。材質緻密細膩，紅色心材與乳白邊材會隨時間轉為琥珀色。是高山一刀雕的用材，相傳也是自位山獻給朝廷之笏的材料。" } },
        { r:"Ichii Ittōbori",
          jp:"一位一刀彫",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Carving in Japanese yew with knives and chisels alone, each facet left as the blade made it and no paint or lacquer added; the red heartwood and white sapwood serve as colours. Founded in Takayama by the netsuke carver Matsuda Sukenaga; a national traditional craft since 1975.",
            ja:"イチイを小刀と鑿だけで彫り、刃の跡をそのまま残し、彩色も漆も施さない彫刻。赤い心材と白い辺材を色として使う。根付師の松田亮長が高山で始めたとされ、一九七五年に国の伝統的工芸品に指定された。",
            zh:"只用小刀與鑿子雕刻日本紫杉（一位），保留每一刀的刀面，不上色也不上漆，以紅色心材與白色邊材作為色彩。相傳由根付雕刻師松田亮長在高山創始，1975 年指定為國家傳統工藝品。" } },
        { r:"ichimai-ita",
          jp:"一枚板",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"A tabletop or counter cut as a single slab from a great log, often with its natural edges. Tochi, keyaki, walnut, camphor and monkeypod are favourites; the fashion for slab tables since the 1990s has sent prices for large broadleaf logs soaring.",
            ja:"大木から一枚で取った天板やカウンターで、耳を残すことも多い。トチ、ケヤキ、クルミ、クスノキ、モンキーポッドが好まれる。一九九〇年代からの一枚板のテーブルの流行で、広葉樹の大径木の値は大きく上がった。",
            zh:"一枚板：從巨木整片鋸出的桌板或檯面，常保留天然邊緣。七葉樹、櫸木、胡桃、樟樹與雨豆樹最受歡迎；1990 年代以來的整板桌風潮使大徑闊葉原木價格飆漲。" } },
        { r:"ikada", jp:"筏", cat:GIFU.GC.timber,
  d:{en:"A raft of logs, steered down the lower rivers to the timber yards of the coast.",ja:"木を組んだ筏。下流を海辺の木場まで操って下った。",zh:"以原木編成的木筏，沿下游河段撐往海岸的木材場。"} },
        { r:"ikkan sagyō shisutemu",
          jp:"一貫作業システム",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Integrated harvesting and planting: the crew and machines that fell a stand prepare the site and carry seedlings up the slope straight away, instead of leaving the cleared land to a separate contractor months later, when weeds have already taken it.",
            ja:"主伐を行った班と機械が、そのまま地拵えをし、苗木を斜面に運び上げる作業のしくみ。雑草がはびこった数か月後に別の業者が入るやり方より、手間も費用も少ない。",
            zh:"一貫作業系統：負責伐採的班組與機械隨即整地、並把苗木運上坡地，而不是等數月後雜草叢生時再交由另一業者造林，藉此節省人力與成本。" } },
        { r:"ikki", jp:"一揆", cat:GIFU.GC.history,
  d:{en:"An uprising or league of protest; Gujō (1754–58) and Hida's Ōhara disturbances (1771–89) are the famous ones.",ja:"一揆。郡上（1754–58年）と飛騨の大原騒動（1771–89年）が名高い。",zh:"民眾的起義或抗爭同盟；郡上（1754–58）與飛驒的大原騷動（1771–89）最為知名。"} },
        { r:"intonation",
          jp:"オクターブ調整",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The accuracy of pitch up the neck, checked by comparing the twelfth-fret note with the harmonic above the open string. On an acoustic it is set by the slant and profile of the saddle, which lengthens each string slightly to make up for the stretch when it is fretted.",
            ja:"ネックの高い位置での音程の正確さで、十二フレットの実音と開放弦のハーモニクスを比べて確かめる。アコースティックでは、押さえたときの弦の伸びを補うため、サドルの傾きや頂の形で弦をわずかに長くして合わせる。",
            zh:"音準（八度調整）：琴頸高把位的音高準確度，以第 12 格按音與空弦泛音比對檢查。木吉他靠下弦枕的斜度與頂部形狀微調，使每條弦略為加長，以補償按弦時的拉伸。" } },
        { r:"iriai",
          jp:"入会・入会地",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"The customary right of a village to take fuel, fodder, thatch and small timber from forest or grassland held in common (iriaichi). Many such commons were claimed by the Meiji state after 1868; some survive as the property of local associations.",
            ja:"村が共同で利用する山林や草地（入会地）から、薪・秣・茅・小径木をとる慣習上の権利。一八六八年以降、その多くは明治国家に取りあげられたが、一部はいまも地域の団体の財産として残る。",
            zh:"入會權：村落從共有的山林或草地（入會地）採取柴薪、飼草、茅草與小徑木的習慣權利。1868 年後許多入會地被明治政府收歸官有，部分至今仍以地方團體財產的形式存續。" } },
        { r:"irori",
          jp:"囲炉裏",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A square sunken hearth in the floor of a farmhouse, where the family cooked, warmed itself and gathered. Its smoke rose through the roof space, darkening beams and preserving the timber and rope of gasshō houses against insects.",
            ja:"農家の床を四角く切った炉で、家族が煮炊きし、暖まり、集まった。煙は屋根裏へ上がり、梁を黒くし、合掌造りの木材や縄を虫から守った。",
            zh:"地爐：農家地板上切出的方形火塘，一家人在此煮食、取暖與團聚。煙往上穿過屋頂空間，燻黑樑木，也保護合掌造的木材與繩索免受蟲害。" } },
        { r:"itame",
          jp:"板目",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Flatsawn or plain-sawn: a face cut tangent to the rings, showing nested arches or flames. It is the lively face of tabletops and sugi ceilings, but it moves more than masame and cups away from the heart as it dries.",
            ja:"年輪に接するように挽いた面で、山形や炎のような木目が入れ子に重なる。座卓の天板やスギの天井の表情豊かな面だが、柾目より動きが大きく、乾くと心と反対側へ反る。",
            zh:"板目（弦切紋）：與年輪相切鋸出的面，呈現層層套疊的拱形或火焰狀紋理。是桌板與柳杉天花板生動的表面，但變形大於柾目，乾燥時會朝遠離髓心的方向翹曲。" } },
        { r:"itamono",
          jp:"板物",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Joined-board ware: trays, tiered boxes and other square pieces assembled from thin boards — in Hida Shunkei usually hinoki or sawara split rather than sawn, so that the faces follow the natural lines of the grain.",
            ja:"薄い板を組み合わせてつくる盆や重箱などの角物。飛騨春慶ではヒノキやサワラの板を鋸で挽かずに割ってつくり、面が木目の自然な線に沿うようにする。",
            zh:"板物：以薄板組合而成的托盤、多層食盒等方形器物；飛驒春慶多用扁柏或花柏，以劈開而非鋸開的方式取板，使板面順著木紋的自然線條。" } },
        { r:"itaya-kaede",
          jp:"板屋楓・イタヤカエデ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Acer pictum, the painted maple, the most useful of Japan's many maples. Hard and pale (about 0.65), sometimes rippled or bird's-eyed, it goes into chair parts, flooring, bowling pins and the necks and backs of instruments.",
            ja:"Acer pictum。日本に多いカエデの中で最も用途が広い。硬く淡色（比重約0.65）で、ときに縮み杢や鳥眼杢が出る。椅子の部材、床材、ボウリングのピン、楽器のネックや裏板になる。",
            zh:"色木槭（Acer pictum）：日本眾多槭樹中用途最廣者。材質硬、色淡（密度約 0.65），偶有波紋或鳥眼紋，用於椅子構件、地板、保齡球瓶以及樂器的琴頸與背板。" } },
        { r:"ittō",
          jp:"一等",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"“First grade”: despite the name, the common grade of Japanese sawn timber, with knots, including loose ones, allowed within limits. It is what goes into hidden frames; the price gap to mubushi of the same section can be an order of magnitude.",
            ja:"名前に反して、日本の製材の普通の等級で、抜け節を含む節も一定の範囲で認められる。隠れる骨組みに使われる。同じ断面の無節との値段の差は十倍にもなりうる。",
            zh:"一等：名稱雖如此，實為日本製材的普通等級，允許一定範圍內的節（包括鬆節）。多用於隱藏的構架；同斷面與無節材的價差可達十倍。" } },
        { r:"janome-gasa",
          jp:"蛇の目傘",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A slimmer, more elegant paper umbrella whose canopy shows a ring like a snake's eye (janome) when opened. Finer ribs and decorated paper made it the umbrella for townswomen and for dance.",
            ja:"開くと傘の面に蛇の目のような輪が現れる、細身で優美な紙の傘。細い骨と飾った紙を使い、町の女性の傘、踊りの傘となった。",
            zh:"蛇目傘：撐開後傘面呈現如蛇眼般圓環的紙傘，形態纖細優雅。骨架較細、傘紙有裝飾，是城市婦女與舞蹈用的傘。" } },
        { r:"Japan vintage",
          jp:"ジャパン・ヴィンテージ",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Japanese-made guitars of the 1970s and 1980s — the careful copies of the lawsuit era and the first original designs — now collected in their own right abroad. Many players regard the late 1970s and early 1980s as the high point of Japanese factory quality.",
            ja:"一九七〇年代と一九八〇年代の日本製ギター。訴訟の時代の精巧なコピーや最初の独自設計をいい、いまでは海外でそれ自体が収集の対象となる。一九七〇年代末から一九八〇年代初めを日本の工場の品質の頂点とみる奏者も多い。",
            zh:"日本老琴（Japan vintage）：1970 與 1980 年代的日本製吉他——訴訟時代的精緻仿製琴與最早的原創設計——如今在海外自成收藏門類。許多樂手認為 1970 年代末至 1980 年代初是日本工廠品質的巔峰。" } },
        { r:"JAS",
          jp:"日本農林規格",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Japanese Agricultural Standard, administered by the Ministry of Agriculture, Forestry and Fisheries, which covers sawn timber, glulam, plywood, LVL and CLT. For sawn timber it separates structural from finishing grades and marks dried products with their moisture content, such as SD15 or SD20.",
            ja:"農林水産省が所管する日本農林規格で、製材、集成材、合板、LVL、CLTなどを対象とする。製材では構造用と造作用を分け、乾燥材にはSD15やSD20のように含水率の表示をつける。",
            zh:"JAS（日本農林規格）：由農林水產省主管，涵蓋製材、集成材、合板、LVL 與 CLT 等。製材部分區分結構用與裝修用等級，乾燥材並標示含水率，如 SD15 或 SD20。" } },
        { r:"jichinsai",
          jp:"地鎮祭",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The ground-breaking rite: a priest purifies the site and asks the local deity's permission to build at a temporary altar of sakaki and bamboo, and the owner and carpenter make the first symbolic cuts into a mound of sand with a wooden spade and hoe.",
            ja:"地鎮祭。神職が土地を清め、榊と竹の仮の祭壇でその土地の神に建てる許しを願う。施主と大工は、木の鋤と鍬で盛り砂に最初のしるしの鍬を入れる。",
            zh:"地鎮祭：動土儀式。神職人員淨化基地，在以榊與竹搭設的臨時祭壇前向土地神祈求建屋許可；屋主與木匠以木鍬與木鋤在沙堆上象徵性地挖下第一下。" } },
        { r:"jidai-dansu",
          jp:"時代箪笥",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"An antique tansu, typically of the Edo, Meiji or Taishō periods, sold by specialist dealers. Buyers are advised to open every drawer, look behind and beneath for replaced boards, and check for the holes of powder-post beetles and for mould.",
            ja:"骨董の箪笥。多くは江戸、明治、大正のもので、専門の業者が扱う。買うときは引出しをすべて開け、背板や底板が取り替えられていないかを見て、ヒラタキクイムシの穴やカビがないかを確かめるとよい。",
            zh:"古董簞笥，多為江戶、明治或大正時代之物，由專門業者經手。購買時宜拉開每個抽屜，檢查背板與底板是否換過，並留意粉蠹蟲的蛀孔與黴斑。" } },
        { r:"jigoshirae",
          jp:"地拵え",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Site preparation: after the previous crop is felled, branches and tops are gathered into rows along the contour and the ground is cleared for planting. The rows hold soil on the slope and slowly rot back into it.",
            ja:"前の世代を伐ったあと、枝や梢を等高線に沿って列に積み、植え付けのために地面を片づける作業。この列が斜面の土を押さえ、やがて朽ちて土に還る。",
            zh:"整地：前一代林木伐除後，將枝條與樹梢沿等高線堆成列，清理地面以便栽植。這些枝條列能固定坡面土壤，並逐漸腐爛回歸土中。" } },
        { r:"ji-kabuki",
          jp:"地歌舞伎",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Kabuki performed by villagers rather than professionals. Gifu has more than thirty preservation groups and nine surviving old playhouses; the Kashimo society, founded in 1974, performs every September in the Meiji-za its village built of its own hinoki.",
            ja:"専門の役者でなく村人が演じる歌舞伎。岐阜県には三十を超える保存会と九棟の古い芝居小屋が残る。一九七四年にできた加子母の保存会は、村人が自分たちのヒノキで建てた明治座で毎年九月に上演する。",
            zh:"地歌舞伎：由村民而非職業演員演出的歌舞伎。岐阜縣有三十多個保存會與九座現存老劇場；成立於 1974 年的加子母保存會，每年 9 月在村民以自家扁柏建成的明治座演出。" } },
        { r:"jingū birin",
          jp:"神宮備林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Ise Shrine reserve forest: stands of large hinoki set aside from 1906 to supply the periodic rebuilding of the Ise Shrine, among them the Denokōji reserve at Kashimo (1909). The designation lapsed in 1947, but the stands are still managed for Ise.",
            ja:"伊勢神宮の式年遷宮の用材を確保するため、一九〇六年から指定された大径ヒノキの森。加子母の出ノ小路備林（一九〇九年）もその一つ。指定は一九四七年になくなったが、いまも神宮用材のために管理されている。",
            zh:"神宮備林：為供應伊勢神宮式年遷宮用材，自 1906 年起劃定的大徑扁柏林，加子母的出之小路備林（1909 年）亦屬之。此指定雖於 1947 年廢止，林分至今仍為神宮用材而經營。" } },
        { r:"jinkō kansō",
          jp:"人工乾燥",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Kiln drying: fans drive heated, humidified air through the stacks on a schedule that lowers humidity and raises temperature, typically 50–80 °C, over days or weeks. Precut factories and large builders buy only kiln-dried (KD) timber with a guaranteed moisture content.",
            ja:"乾燥室の中で、加熱し湿度を調えた空気を送風機で材のあいだに通し、湿度を下げ温度を上げていくスケジュールで数日から数週間かけて乾かす方法。温度はふつう五〇〜八〇度。プレカット工場や大手の住宅会社は含水率を保証した人工乾燥材（KD材）しか買わない。",
            zh:"人工乾燥（窯乾）：在乾燥室中以風扇將加熱加濕的空氣吹過材堆，按排程逐步降低濕度、提高溫度（通常 50 至 80 °C），歷時數日至數週。預切工廠與大型建商只採購含水率有保證的人工乾燥材（KD 材）。" } },
        { r:"jinkōrin",
          jp:"人工林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Planted forest. Gifu has about 385,000 hectares of it, mostly sugi and hinoki planted between the 1950s and the 1970s, so that much of it falls in the same few age classes and has needed thinning, and now harvesting, all at once.",
            ja:"人の手で植えて育てた森。岐阜県には約三十八万五千ヘクタールあり、その多くは一九五〇年代から一九七〇年代に植えられたスギとヒノキである。同じ齢級に集中しているため、間伐も主伐も一斉にやってくる。",
            zh:"人工栽植、撫育的森林。岐阜縣約有 38.5 萬公頃，多為 1950 至 1970 年代種下的柳杉與扁柏；由於林齡集中在少數幾個齡級，疏伐與主伐的需求都同時湧現。" } },
        { r:"jinya",
          jp:"陣屋",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"The office and residence of a local administrator in the Edo period. Takayama Jinya, from which the shogunate governed Hida and its forests after taking the province under direct rule in 1692, is described as the only surviving government office of a shogunal intendant.",
            ja:"江戸時代の地方役所と役人の住まい。幕府は一六九二年に飛騨を直轄地とし、高山陣屋から国と森林を治めた。高山陣屋は、現存する唯一の郡代・代官の役所とされる。",
            zh:"陣屋：江戶時代地方官署兼官員居所。幕府於 1692 年將飛驒收為直轄領後，自高山陣屋治理該地與其森林；高山陣屋被視為唯一現存的幕府郡代官署。" } },
        { r:"johatsu",
          jp:"除伐",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Cleaning: cutting self-sown broadleaves and badly formed crop trees in a young plantation, roughly between the ages of ten and twenty, so that the stand closes evenly. Unlike thinning it yields nothing saleable.",
            ja:"おおむね十〜二十年生の若い人工林で、自然に生えた広葉樹や形の悪い植栽木を伐り、林冠がそろって閉じるようにする作業。間伐と違い、売れる材は出ない。",
            zh:"除伐：在約 10 至 20 年生的幼齡人工林中，砍除自然萌生的闊葉樹與形質不良的栽植木，使林冠均勻鬱閉。與疏伐不同，除伐不產出可販售的木材。" } },
        { r:"jōkobushi / kobushi",
          jp:"上小節・小節",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The appearance grades below mubushi. Jōkobushi, “superior small knots”, allows a few tight knots of about 10 mm or less; kobushi, “small knots”, tight knots of about 20 mm or less. Limits vary by mill and region; the terms describe looks, not strength.",
            ja:"無節に次ぐ見た目の等級。上小節は径十ミリほど以下の生き節が少しあるもの、小節は二十ミリほど以下の生き節があるもの。基準は製材所や地域で違い、強さではなく見た目を表す。",
            zh:"上小節與小節：次於無節的外觀等級。上小節允許少數直徑約 10 公釐以下的緊實活節；小節允許約 20 公釐以下的緊實活節。標準因廠商與地區而異，描述的是外觀而非強度。" } },
        { r:"jorin-moku",
          jp:"如鱗杢",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Scale figure: overlapping marks like the scales on a fish's side, found in keyaki from old trees. It is the figure of temple doors and fine tray tables, and one of the most expensive in the meiboku trade.",
            ja:"魚の脇腹のうろこのように重なる模様の杢で、ケヤキの老木に出る。寺の扉や上等の座卓に使われ、銘木の取引でも最も高価な杢の一つである。",
            zh:"如鱗杢：如魚身側鱗片般層疊的紋理，出現於櫸木老樹，用於寺院門扉與高級矮桌，是銘木交易中最昂貴的紋理之一。" } },
        { r:"jōtōshiki",
          jp:"上棟式",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The ridge-raising ceremony, held on the frame when the posts and beams are joined and the ridge pole set. The carpenters give thanks for safe work so far, and in many districts the owner then throws rice cakes and coins from the ridge.",
            ja:"上棟式。柱と梁が組まれ棟木が上がったとき、骨組みの上で行う儀式。大工がそれまでの無事に感謝し、多くの地域では施主が棟から餅や銭をまく。",
            zh:"上樑式：柱樑組好、架上棟木時在骨架上舉行的儀式。木匠感謝至此平安完工，許多地區屋主接著會從屋脊撒下年糕與錢幣。" } },
        { r:"jūbako",
          jp:"重箱",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Stacking lacquered food boxes with a lid, filled with the dishes of the New Year feast or a picnic. In Hida Shunkei they are made of joined hinoki boards, the grain glowing through the amber lacquer.",
            ja:"蓋つきで積み重ねる漆塗りの食べ物の箱。正月料理や行楽の料理を詰める。飛騨春慶ではヒノキの板を組んでつくり、琥珀色の漆を通して木目が輝く。",
            zh:"重箱：附蓋、可層層疊放的漆器食盒，用來裝年菜或郊遊料理。飛驒春慶的重箱以扁柏板組成，木紋透過琥珀色的漆閃耀。" } },
        { r:"jūgai",
          jp:"獣害",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Damage by wildlife. Sika deer eat seedlings and strip bark in winter, the protected serow browses young conifers, bears peel sapwood in early summer and hares bite through stems at the base; replanted sites in Gifu are routinely fenced or fitted with tree shelters.",
            ja:"野生動物による被害。ニホンジカは苗木を食べ冬に樹皮をはぎ、保護獣のカモシカは若い針葉樹を食べ、クマは初夏に樹皮をはいで辺材をかじり、ノウサギは根元で幹をかみ切る。岐阜県の再造林地では防護柵や単木の保護チューブを設けるのが普通になった。",
            zh:"獸害：梅花鹿啃食苗木並在冬季剝食樹皮，受保護的日本鬣羚吃幼齡針葉樹，黑熊在初夏剝皮啃食邊材，野兔則在基部咬斷樹幹。岐阜縣的再造林地通常都架設防護柵或為每株加裝保護管。" } },
        { r:"junmai · ginjō · daiginjō", jp:"純米・吟醸・大吟醸", cat:GIFU.GC.sake,
  d:{en:"Legal grades: junmai has no added alcohol; ginjō and daiginjō are milled to 60 and 50 per cent or less.",ja:"法律上の区分。純米は醸造アルコールを加えず、吟醸と大吟醸はそれぞれ精米歩合60%以下・50%以下。",zh:"法定分級：純米不添加釀造酒精；吟釀與大吟釀的精米步合分別在 60% 與 50% 以下。"} },
        { r:"jushidō",
          jp:"樹脂道",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Resin canals: ducts lined with resin-secreting cells in pines, larch, spruce and Douglas fir, seen as tiny dots on the end grain and as pitch streaks. Hinoki, sugi, sawara and yew have none, one reason their surfaces stay clean.",
            ja:"マツ、カラマツ、トウヒ、ベイマツなどにある、樹脂を分泌する細胞に囲まれた管。木口では小さな点、板面では脂筋として見える。ヒノキ、スギ、サワラ、イチイにはなく、その面がきれいに保たれる理由の一つである。",
            zh:"樹脂道：松木、落葉松、雲杉與花旗松中由分泌樹脂細胞包圍的管道，在橫切面上呈細小斑點，在板面上形成油脂條紋。扁柏、柳杉、花柏與紫杉則沒有，這也是其表面潔淨的原因之一。" } },
        { r:"kadōkan",
          jp:"仮道管",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Tracheid: the long, closed cell that makes up nine-tenths or more of conifer wood, both conducting water and giving strength. In sugi and hinoki they are typically 2–4 mm long; their length and wall structure govern stiffness and shrinkage.",
            ja:"針葉樹材の九割以上を占める細長い閉じた細胞で、水を通すと同時に強さを担う。スギやヒノキではふつう長さ二〜四ミリで、その長さと壁の構造が剛性と収縮を左右する。",
            zh:"假導管：構成針葉樹材九成以上的細長封閉細胞，兼具輸水與支撐的功能。柳杉與扁柏的假導管長約 2 至 4 公釐，其長度與細胞壁構造決定木材的剛性與收縮。" } },
        { r:"kagami-biraki", jp:"鏡開き", cat:GIFU.GC.sake,
  d:{en:"Breaking open the lid of a sake cask with wooden mallets at a celebration.",ja:"祝いの席で酒樽の蓋を木槌で割り開くこと。",zh:"在慶典上以木槌敲開酒樽蓋子的儀式。"} },
        { r:"kagami-ita",
          jp:"鏡板",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The back wall of a Noh stage, painted with a single great pine as the permanent scenery of every play. The stage itself, about 5.4 m square and built entirely of hinoki, often has earthenware jars beneath so that the floor answers the actors' stamping.",
            ja:"能舞台の後ろの壁で、大きな松が一本描かれ、どの演目でも変わらぬ背景となる。舞台は約5.4m四方をすべてヒノキでつくり、しばしば床下に甕を置いて、役者の足拍子に床が応えるようにする。",
            zh:"鏡板：能舞台的後牆，繪有一棵巨大的松樹，是所有劇目共用的固定布景。舞台本身約 5.4 公尺見方、全以扁柏打造，下方常埋設陶甕，讓地板回應演員的踏步。" } },
        { r:"kaibatsu",
          jp:"皆伐",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Clear-felling: cutting all the trees on an area at once, the usual form of final harvest in Japanese plantations. Gifu's forest plan confines it to patches in the timber-production zone; the bare slopes it leaves are exposed to erosion until the next crop closes.",
            ja:"ある区域の木をすべて一度に伐ること。日本の人工林の主伐の普通のかたちである。岐阜県の森林計画では木材生産林での小面積に限っている。残された裸地は次の世代の林冠が閉じるまで土壌の流出にさらされる。",
            zh:"皆伐：一次伐盡某一區域的全部林木，是日本人工林主伐的常見方式。岐阜縣的森林計畫將其限於木材生產林中的小面積區塊；留下的裸露坡地在下一代林冠鬱閉前容易遭受沖蝕。" } },
        { r:"kaidan-dansu",
          jp:"階段箪笥",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"A stepped chest that serves as the staircase to an upper floor or loft, with drawers and cupboards built into the risers. Common in townhouses where space was tight, and a favourite of antique collectors in Japan and abroad.",
            ja:"二階や屋根裏へ上がる階段を兼ねた箪笥で、段の下に引出しや戸棚が組みこまれる。場所の限られた町家に多く、国の内外の骨董好きに好まれる。",
            zh:"兼作通往二樓或閣樓樓梯的階梯狀簞笥，階級下方設有抽屜與櫥櫃。常見於空間狹窄的町家，深受日本國內外古董收藏者喜愛。" } },
        { r:"kakarigi",
          jp:"かかり木",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"A hung-up tree, lodged in the crown of a neighbour instead of reaching the ground, which may come down at any moment. Since the 2019 safety rules, felling another tree onto it or cutting the tree it rests on is prohibited; it must be pulled free with a winch from a safe distance.",
            ja:"倒れる途中で隣の木の樹冠に引っかかり、いつ落ちてくるかわからない木。二〇一九年の安全規則の改正で、別の木を浴びせ倒すことや、寄りかかっている木を伐ることは禁じられ、安全な距離からウインチなどで引き外さなければならない。",
            zh:"掛倒木：倒下途中卡在鄰樹樹冠、隨時可能墜落的樹。依 2019 年修訂的安全規則，禁止以另一棵樹砸倒或砍斷其依靠的樹，必須從安全距離以絞盤等拉脫。" } },
        { r:"kakishibu",
          jp:"柿渋",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Persimmon tannin: the juice of unripe astringent persimmons, crushed, fermented, pressed and aged for years. Recorded since the tenth century, it was brushed on paper, umbrellas, fishing nets and wood; on wood it gives a brown that deepens in the light.",
            ja:"柿渋。渋柿の青い実をつぶして発酵させ、しぼって何年も寝かせた液。十世紀から記録があり、紙、傘、漁網、木に塗られた。木に塗ると茶色になり、光にあたって深まる。",
            zh:"柿澀：將未熟澀柿壓碎發酵、榨汁後陳放多年的液體。自 10 世紀即有記載，用於紙、傘、漁網與木材；塗在木上呈褐色，照光後越來越深。" } },
        { r:"kamoshika",
          jp:"カモシカ・羚羊",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Japanese serow, a solitary goat-antelope found only in Japan. Hunted heavily until the 1950s, it was declared a Special Natural Monument in 1955; as it recovered it browsed young hinoki, and from the late 1970s Gifu and Nagano were allowed limited culls in damaged areas.",
            ja:"ニホンカモシカ。日本だけにすむ単独性のウシ科の動物。一九五〇年代まで盛んに狩られ、一九五五年に特別天然記念物となった。数が回復すると若いヒノキを食害し、一九七〇年代後半から岐阜と長野では被害地で限られた捕獲が認められた。",
            zh:"日本鬣羚：日本特有、獨居的羊亞科動物。直到 1950 年代遭大量獵捕，1955 年被指定為特別天然紀念物；族群恢復後開始啃食幼齡扁柏，自 1970 年代後期起岐阜與長野獲准在受害地區進行有限度的捕獲。" } },
        { r:"kan", jp:"燗", cat:GIFU.GC.sake,
  d:{en:"Warmed sake, from hinata-kan at about 30 °C to tobikiri-kan at 55 °C and above.",ja:"温めた酒。約30℃の日向燗から55℃以上の飛び切り燗まで。",zh:"溫過的酒，從約 30 °C 的日向燗到 55 °C 以上的飛切燗。"} },
        { r:"kanbatsu",
          jp:"間伐",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Thinning: removing a quarter to a third of the stems every five to ten years from about age fifteen, so that the remaining trees keep their crowns and grow in diameter. Neglected, a stand becomes dark and crowded, prone to snow break, wind throw and erosion.",
            ja:"十五年生前後から五〜十年ごとに立木の四分の一から三分の一を伐り、残る木の樹冠を保って太らせる作業。怠ると林は暗く混みあい、冠雪害や風倒、土壌の流出を招く。",
            zh:"疏伐（間伐）：約自 15 年生起每隔 5 至 10 年砍除四分之一至三分之一的林木，讓留存木保有樹冠並增粗。若疏於疏伐，林分陰暗擁擠，易遭雪壓、風倒與表土流失。" } },
        { r:"Kanemoto · Kanesada", jp:"兼元・兼定", cat:GIFU.GC.metal,
  d:{en:"The two great Seki lines of the sixteenth century; the second Kanemoto was “Magoroku”, the second Kanesada “No-Sada”.",ja:"十六世紀の関の二つの名門。二代兼元は「孫六」、二代兼定は「之定」。",zh:"十六世紀關的兩大名門；第二代兼元即「孫六」，第二代兼定即「之定」。"} },
        { r:"kankōzai",
          jp:"環孔材",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Ring-porous wood, in which large vessels form a distinct ring in the early wood of each year: mizunara, konara, chestnut, keyaki, tamo and sen. The result is bold, coarse grain and, in oak and ash, great toughness.",
            ja:"年輪ごとの早材に大きな道管が輪のように並ぶ材。ミズナラ、コナラ、クリ、ケヤキ、タモ、センなど。木目がはっきりして粗く、ナラやタモでは粘り強さにもつながる。",
            zh:"環孔材：每一年輪的早材中有大型導管排列成明顯環狀的木材，如水楢、枹櫟、栗木、櫸木、梣木與刺楸。紋理鮮明粗獷，櫟木與梣木更因此十分強韌。" } },
        { r:"kansei-yu",
          jp:"乾性油",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"A drying oil, whose unsaturated fatty acids react with oxygen and link into a soft, tough polymer: iodine value above about 130, like linseed, perilla and tung. Olive oil and most cooking oils are non-drying and stay sticky on wood.",
            ja:"不飽和脂肪酸が空気中の酸素と反応してつながり、柔らかく丈夫な膜になる油。ヨウ素価がおよそ130を超え、アマニ油、エゴマ油、桐油がこれにあたる。オリーブ油など多くの食用油は不乾性で、木の上でべたついたままである。",
            zh:"乾性油：不飽和脂肪酸與空氣中的氧反應聚合，形成柔韌膜層的油，碘價約在 130 以上，如亞麻仁油、荏油與桐油。橄欖油與多數食用油屬不乾性油，塗在木上會一直黏膩。" } },
        { r:"karakuri",
          jp:"からくり",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Mechanical puppets on festival floats, worked by teams hidden inside pulling many strings to make the figures walk, somersault or transform. The mechanisms are of wood, whalebone and cord; all thirteen of Ōgaki's floats carry them, as do several in Takayama and Furukawa.",
            ja:"屋台の上で演じるからくり人形。屋台の中に隠れた人々が多くの糸を操り、人形を歩かせ、宙返りさせ、変身させる。仕掛けは木、鯨のひげ、糸でできている。大垣の十三両の軕のすべてと、高山や古川のいくつかの屋台にある。",
            zh:"祭典山車上的機關人偶，由藏在車內的人拉動許多絲線，使人偶行走、翻筋斗或變身。機關以木、鯨鬚與繩線製成；大垣的 13 台山車全數設有，高山與古川也有數台。" } },
        { r:"karamatsu",
          jp:"唐松・カラマツ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Larix kaempferi, Japanese larch, Japan's only native deciduous conifer, planted on the high, cold plateaus of Hida. Resinous and strong but prone to twist as it dries, it now goes mostly into glulam, CLT and plywood.",
            ja:"Larix kaempferi。日本に自生する唯一の落葉針葉樹で、飛騨の高く寒い高原に植えられた。脂が多く強いが、乾くとねじれやすい。いまは主に集成材やCLT、合板になる。",
            zh:"日本落葉松（Larix kaempferi）：日本唯一的原生落葉針葉樹，栽植於飛驒高寒的高原。富含樹脂、強度高，但乾燥時易扭曲，如今多用於集成材、CLT 與合板。" } },
        { r:"karashi",
          jp:"枯らし",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Seasoning: storing tonewood for years so that it dries slowly and settles before it is used. K. Yairi in Kani buys its wood in advance and air-seasons it in its own stores — the basis of its reputation for stable, resonant guitars.",
            ja:"枯らし。トーンウッドを何年も寝かせ、ゆっくり乾かして落ち着かせてから使うこと。可児のK.ヤイリは材を先に買い、自社の倉で天然乾燥させる。安定してよく鳴るギターという評判の土台である。",
            zh:"枯乾（日文「枯らし」）：將音材存放多年，讓它緩慢乾燥、穩定後才使用。可兒的 K. Yairi 預先購入木材，在自家倉庫自然乾燥——這是其吉他穩定而響亮之口碑的基礎。" } },
        { r:"karishiki",
          jp:"刈敷",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Green manure: young shoots, leaves and grass cut on the hills in early summer and trodden into the paddies before planting. Before chemical fertiliser it was one of the main reasons villages kept their slopes as open, cut-over woodland.",
            ja:"初夏に山で刈った若枝や葉、草を、田植え前の田に踏みこむ緑肥。化学肥料が普及する前、村々が斜面を明るく刈りこんだ林として保った大きな理由の一つであった。",
            zh:"刈敷（綠肥）：初夏從山上割取嫩枝、樹葉與青草，於插秧前踩入水田。化學肥料普及之前，這是村落將山坡維持為明亮疏林的主要原因之一。" } },
        { r:"kasen shūzai",
          jp:"架線集材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Cable logging: extracting logs along wire ropes strung above the slope. Long-span skylines were once the standard way to clear whole valleys; mobile tower and swing yarders now do shorter spans, avoiding road building on unstable ground.",
            ja:"斜面の上に張ったワイヤロープに沿って丸太を運び出す方法。かつては長い架線で谷全体の木を出すのが普通だったが、いまは移動式のタワーヤーダやスイングヤーダが短い距離を受けもち、崩れやすい斜面に道をつけずにすむ。",
            zh:"架線集材：沿著架設於坡面上方的鋼索運出原木。過去常以長跨距索道清運整個山谷的木材；如今由機動式塔式與迴轉式集材機負責較短距離，免於在不穩定坡地上開路。" } },
        { r:"kashi",
          jp:"樫・カシ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"The evergreen oaks — shirakashi (Quercus myrsinifolia), akagashi (Q. acuta), arakashi (Q. glauca) — of the warm laurel forest. Among the hardest Japanese woods (about 0.85), they make plane blocks, tool handles, mallets and oars.",
            ja:"照葉樹林の常緑のナラ類。シラカシ（Quercus myrsinifolia）、アカガシ（Q. acuta）、アラカシ（Q. glauca）など。日本の材で最も硬いものの一つ（比重約0.85）で、鉋の台、道具の柄、木槌、櫂になる。",
            zh:"常綠櫟類（カシ）：照葉樹林中的白背櫟（シラカシ，Quercus myrsinifolia）、赤皮櫟（アカガシ，Q. acuta）、青剛櫟（アラカシ，Q. glauca）等。是日本最堅硬的木材之一（密度約 0.85），用於鉋台、工具柄、木槌與船槳。" } },
        { r:"katsura",
          jp:"桂・カツラ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Cercidiphyllum japonicum, a valley tree that grows as a ring of great trunks from one root; its fallen leaves smell of caramel. The soft, fine, warm-brown wood is easy to carve and very stable: Buddhist images, carved panels, drawers and go boards.",
            ja:"Cercidiphyllum japonicum。谷に育ち、一つの根から何本もの太い幹が株立ちする。落ち葉はカラメルのように香る。柔らかく緻密で温かな茶色の材は彫りやすく狂いが少なく、仏像、彫刻、引き出し、碁盤に使われる。",
            zh:"連香樹（Cercidiphyllum japonicum）：生於溪谷，一株根部叢生多根粗大主幹；落葉帶有焦糖香氣。木材柔軟細緻、呈溫暖褐色，易於雕刻且非常穩定，用於佛像、雕刻板、抽屜與圍棋盤。" } },
        { r:"kawagane · shingane", jp:"皮鉄・心鉄", cat:GIFU.GC.metal,
  d:{en:"The hard outer steel and the softer core steel combined in a sword.",ja:"刀で組み合わせる、硬い外側の皮鉄と、柔らかな内側の心鉄。",zh:"刀劍中結合的堅硬外層「皮鐵」與較軟的內芯「心鐵」。"} },
        { r:"kawanami",
          jp:"川並",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The specialist log drivers of the Kiso and Hida rivers, who guided timber down the drives, freed jams and recovered strays; the raftsmen below them were a separate trade. Nishikori's magistrate's office took its name from them.",
            ja:"木曽川や飛騨川で材木の川流しを担った専門の人びと。流れを導き、詰まりを外し、流れ散った木を回収した。その下流の筏師は別の職であった。錦織の奉行所の名もこれにちなむ。",
            zh:"川並：在木曾川與飛驒川負責放流木材的專業工人，引導木材順流、排除堵塞並回收漂散的原木；下游的筏工則是另一行業。錦織的奉行所也以此命名。" } },
        { r:"kaya",
          jp:"榧・カヤ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Torreya nucifera, an evergreen conifer of the warm lower slopes of Mino. Fine, yellow and springy, with a faint scent, it makes the finest go and shōgi boards; its nuts were eaten and pressed for oil.",
            ja:"Torreya nucifera。美濃の暖かい低い斜面に育つ常緑の針葉樹。緻密で黄色く弾力があり、ほのかに香る。最上の碁盤や将棋盤となり、実は食べられ、油もとられた。",
            zh:"日本榧（Torreya nucifera）：生於美濃溫暖低坡的常綠針葉樹。材質細緻、色黃、有彈性並帶淡香，是最上等的圍棋盤與將棋盤用材；種子可食，也可榨油。" } },
        { r:"kayaba",
          jp:"茅場",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"A grass slope kept open by yearly cutting or burning to grow kaya — pampas grass and similar tall grasses — for thatch. The steep gasshō roofs of Shirakawa-gō need huge quantities, and a few kayaba are still maintained to supply them.",
            ja:"屋根を葺く茅（ススキなど丈の高い草）を育てるため、毎年刈るか火を入れて草地のまま保つ斜面。白川郷の急勾配の合掌屋根には大量の茅が要り、それをまかなう茅場がいまもいくつか維持されている。",
            zh:"茅場：為了種植葺屋頂用的茅草（芒草等高大禾草），每年割草或燒墾以維持草地狀態的坡地。白川鄉陡峭的合掌屋頂需要大量茅草，至今仍有少數茅場持續維護以供應所需。" } },
        { r:"kenchi",
          jp:"検知・検尺",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Log scaling: recording each log's species, length and top-end diameter at the landing or market and computing its volume, traditionally with a scale stick and tally book and now often from photographs. The figures on the tag decide what the owner is paid.",
            ja:"土場や市場で丸太一本ずつの樹種、長さ、末口径を記録し、材積を出すこと。以前は検知尺と野帳で行い、いまは写真から読み取ることも多い。札に書かれたその数字が所有者の受け取る代金を決める。",
            zh:"檢尺（檢知）：在集材場或市場逐根記錄原木的樹種、長度與末口直徑並計算材積，過去用檢尺棒與記錄簿，現在常以照片判讀。標籤上的數字決定林主能拿到多少貨款。" } },
        { r:"keyaki",
          jp:"欅・ケヤキ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Zelkova serrata, of river terraces, shrine groves and village edges. Tough, with bold golden figure, it is the prestige broadleaf of Japanese building: temple pillars, the frames and wheels of Takayama's festival floats, drums and tray tables.",
            ja:"Zelkova serrata。河岸段丘や社叢、集落の縁に育つ。粘り強く、大胆な金色の杢が出る、日本の建築で最も格の高い広葉樹である。寺の柱、高山祭の屋台の骨組や車輪、太鼓、座卓に使われる。",
            zh:"櫸木（Zelkova serrata）：生於河階地、神社林與村落邊緣。材質強韌、帶有醒目的金色紋理，是日本建築中地位最高的闊葉樹，用於寺院柱子、高山祭屋台的骨架與車輪、太鼓與矮桌。" } },
        { r:"kidori",
          jp:"木取り",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The cutting plan: reading a log's end grain, taper, bends, knots and pith, and deciding which products it can yield and in what order. A good sawyer can double a log's value, not by getting more volume but by putting clear wood where it will be seen.",
            ja:"丸太の木口、曲がり、節、髄の位置を読み、どんな製品をどの順で取るかを決めること。腕のよい挽き手は丸太の価値を倍にできる。量を多く取るのではなく、無節の材を人目にふれる所へ回すことによってである。",
            zh:"木取（下料規劃）：判讀原木的木口、尖削度、彎曲、節與髓心位置，決定可取出哪些產品及其順序。好的鋸工能讓一根原木的價值翻倍——不是靠多取材積，而是把無節材放在會被看見的地方。" } },
        { r:"kiji",
          jp:"木地",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"The wooden body of an object before it is finished — the turned bowl before lacquer, the tray before Shunkei. By extension, the wood's own ground showing through a finish. There is no exact English trade word; “blank” and “substrate” are too cold.",
            ja:"塗る前の器の木の素地。漆を塗る前の挽物の椀、春慶を施す前の盆。転じて、塗装を通して見える木そのものの地をいう。英語の職人ことばにはぴったりの語がない。",
            zh:"木地：器物塗裝前的木胎——上漆前車好的碗、塗春慶前的托盤。引申指透過塗層看到的木材本身的底色。英語工匠用語中沒有完全對應的詞。" } },
        { r:"kijiro-nuri",
          jp:"木地呂塗",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"A finish in which the wood is filled, coated with refined transparent lacquer (kijiro-urushi), then rubbed down and polished, so the grain shows beneath a deep gloss. Close in spirit to Shunkei, but usually unstained and brought to a higher polish.",
            ja:"木地呂塗。木地の目止めをし、精製した透明な漆（木地呂漆）を塗り重ねて研ぎ、磨き上げて、深い艶の下に木目を見せる技法。春慶に近い考え方だが、ふつう着色せず、より高い艶に仕上げる。",
            zh:"木地呂塗：素木填眼後塗上精製的透明漆（木地呂漆），再研磨拋光，使木紋在深沉的光澤下顯現。理念近似春慶，但通常不著色，且拋光得更亮。" } },
        { r:"kijishi",
          jp:"木地師",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"The woodworker who makes the unfinished base for lacquerware — turned, bent or joined. Every piece of Hida Shunkei passes through two trades, the kijishi and the lacquerer; historically kijishi were itinerant turners who moved through the mountains in search of timber.",
            ja:"漆器の素地を、挽き、曲げ、組んでつくる職人。飛騨春慶の品はどれも木地師と塗師の二つの職を経る。歴史的には、材を求めて山から山へ移り住んだ轆轤の職人を木地師と呼んだ。",
            zh:"製作漆器木胎（車製、彎製或組合）的木工匠。飛驒春慶的每件作品都經過木地師與塗師兩種匠人之手；歷史上，木地師是為尋找木料而在山間遷徙的轆轤工匠。" } },
        { r:"kikai tōkyū kubun",
          jp:"機械等級区分",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Machine grading: each piece's stiffness is measured and it is assigned an E-grade from E50 to E150 in steps of twenty, the number being the modulus of elasticity in hundreds of kgf/cm² (roughly GPa × 10). Fast-grown sugi falls around E50–70; good hinoki E90–110.",
            ja:"機械で一本ずつ曲げ剛性を測り、E50からE150まで二十きざみの等級をつける方法。数字はヤング係数（百kgf/cm²単位、おおよそGPaの十倍）を表す。成長の速いスギはE50〜70あたり、よいヒノキはE90〜110あたりに入る。",
            zh:"機械等級區分：以機械逐支測定剛性，賦予 E50 至 E150、每級相差 20 的 E 等級，數字代表以百 kgf/cm² 為單位的彈性模數（約為 GPa 的 10 倍）。速生柳杉約落在 E50 至 70，品質良好的扁柏約為 E90 至 110。" } },
        { r:"kikan hijū",
          jp:"気乾比重",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Air-dry density, measured at about 15 per cent moisture, the single best predictor of a timber's strength and hardness: kiri about 0.30, sugi 0.38, hinoki 0.44, beech 0.65, keyaki 0.69, konara 0.79, the evergreen oaks near 0.85.",
            ja:"含水率約十五パーセントのときの比重で、材の強さや硬さを最もよく予測する値。キリ約0.30、スギ0.38、ヒノキ0.44、ブナ0.65、ケヤキ0.69、コナラ0.79、カシ類は0.85前後である。",
            zh:"氣乾密度：含水率約 15% 時測得的密度，是預測木材強度與硬度的最佳單一指標。泡桐約 0.30、柳杉 0.38、扁柏 0.44、山毛櫸 0.65、櫸木 0.69、枹櫟 0.79，常綠櫟類約 0.85。" } },
        { r:"kimoto · yamahai", jp:"生酛・山廃", cat:GIFU.GC.sake,
  d:{en:"Traditional starters in which lactic acid is grown rather than added, taking about twice as long.",ja:"乳酸を加えるのではなく育てる伝統の酒母。倍ほどの時日がかかる。",zh:"不添加而是培養乳酸的傳統酒母，約需兩倍時間。"} },
        { r:"kintsugi",
          jp:"金継ぎ",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Repair of broken ceramics or lacquerware with urushi as adhesive and filler, the mended line dusted with gold powder so that the break becomes part of the object's history. True kintsugi uses real lacquer; kits with synthetic resin only imitate the look.",
            ja:"割れた陶磁器や漆器を、漆を接着剤と充填材にして継ぎ、継ぎ目に金粉を蒔いて、割れを器の来歴の一部にする修理。本来の金継ぎは本漆を使い、合成樹脂のキットは見た目をまねたものにすぎない。",
            zh:"金繼：以漆作為接著與填補材料修復破損的陶瓷或漆器，再在接縫撒上金粉，讓裂痕成為器物歷史的一部分。正統金繼使用真漆；合成樹脂套組只是模仿外觀。" } },
        { r:"kiomote / kiura",
          jp:"木表・木裏",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"The two faces of a flatsawn board: kiomote, the side that faced the bark, and kiura, the side towards the pith. As the board dries the kiomote becomes slightly concave, so carpenters decide which face goes to the room and which way grooves and shelves are cut.",
            ja:"板目板の二つの面で、樹皮側を木表、髄側を木裏という。乾くと木表側がわずかに凹むので、大工はどちらの面を室内に見せるか、溝や棚をどちら向きに取るかを木表・木裏で決める。",
            zh:"木表與木裏：弦切板的兩面，朝樹皮一側為木表，朝髓心一側為木裏。板材乾燥時木表會略微內凹，因此木匠依此決定哪一面朝向室內、溝槽與層板應朝哪個方向加工。" } },
        { r:"kiri",
          jp:"桐・キリ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Paulownia tomentosa, planted near villages. The lightest Japanese timber (air-dry density about 0.30), it shrinks little, takes up moisture slowly and insulates well — the wood of chests, boxes, geta and the koto.",
            ja:"Paulownia tomentosa。集落の近くに植えられる。日本の材で最も軽く（気乾比重約0.30）、収縮が少なく、湿気をゆっくり吸い、断熱性が高い。箪笥、箱、下駄、箏の材である。",
            zh:"泡桐（Paulownia tomentosa）：栽植於村落附近。是日本最輕的木材（氣乾密度約 0.30），收縮小、吸濕緩慢、隔熱性佳，用於衣櫃、木箱、木屐與箏。" } },
        { r:"kiri-dansu",
          jp:"桐箪笥",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"A chest of paulownia, the lightest native timber: slow to let damp through, resistant to insects and said to protect its contents in a fire. Once the centre of a bride's trousseau; families planted a paulownia when a daughter was born so that it would make her chest.",
            ja:"日本でいちばん軽い木、桐でつくる箪笥。湿気を通しにくく、虫に強く、火事でも中身を守るといわれる。かつては嫁入り道具の中心で、娘が生まれると桐を植え、嫁ぐときの箪笥にしたという。",
            zh:"以日本最輕的木材桐木製作的衣櫃，不易透濕、耐蟲，據說火災時也能保護內容物。過去是嫁妝的核心；家中生女兒時便種下一棵桐樹，待她出嫁時做成衣櫃。" } },
        { r:"kirisute kanbatsu",
          jp:"切り捨て間伐",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Thinning in which the felled trees are left lying because extracting them would cost more than they are worth. It was common in early thinnings and in the subsidised thinning of the 1990s and 2000s; policy has since shifted to thinnings that bring the logs out.",
            ja:"伐った木を搬出せず林内に置いたままにする間伐。運び出す費用が木の値段を上回るためである。初期の間伐や、一九九〇年代と二〇〇〇年代の補助による間伐に多かったが、その後の政策は材を搬出する利用間伐へ移った。",
            zh:"切捨疏伐：伐倒後因搬出成本高於木材價值，而直接留置林內的疏伐。多見於初期疏伐以及 1990 與 2000 年代靠補助推動的疏伐；此後政策轉向搬出木材的「利用疏伐」。" } },
        { r:"Kiso gomoku",
          jp:"木曽五木",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"The five trees of Kiso — hinoki, sawara, asunaro, nezuko and kōyamaki — whose felling the Owari domain banned in all its forests from 1708, under the threat “one tree, one head”. They are remembered by the mnemonic asahi neko, “morning-sun cat”.",
            ja:"ヒノキ、サワラ、アスナロ、ネズコ、コウヤマキの五種。尾張藩は一七〇八年から領内すべての山でこれらの伐採を禁じた（「木一本、首一つ」）。頭の音をとって「あさひねこ」と覚える。",
            zh:"木曾五木：扁柏、花柏、翌檜、香柏（黑檜）與日本金松五種。尾張藩自 1708 年起禁止在領內所有山林砍伐（「一木一首」）。取日文字首記作「あさひねこ」（朝日貓）。" } },
        { r:"Kiso hinoki",
          jp:"木曽ひのき",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Natural hinoki of the Kiso valley in Nagano and the upper Kiso in Gifu, often more than 150 years old, prized for minimal movement and exceptional durability — the timber of temples, shrines and the Ise rebuildings.",
            ja:"長野県の木曽谷と岐阜県の木曽川上流に育つ天然のヒノキ。樹齢百五十年を超えるものが多く、狂いが少なく耐久性にきわめてすぐれ、社寺や伊勢神宮の遷宮の用材となる。",
            zh:"木曾扁柏：生於長野縣木曾谷與岐阜縣木曾川上游的天然扁柏，樹齡多逾 150 年，以變形極小、耐久性卓越而珍貴，是寺社與伊勢神宮遷宮的用材。" } },
        { r:"Kiso sansen", jp:"木曽三川", cat:GIFU.GC.land,
  d:{en:"The three rivers of the Nōbi Plain: the Kiso, the Nagara and the Ibi, separated into their present beds between 1887 and 1912.",ja:"濃尾平野の三つの川、木曽川・長良川・揖斐川。1887年から1912年にかけて現在の川筋に分けられた。",zh:"濃尾平原的三條河：木曾川、長良川與揖斐川，於 1887 至 1912 年間被分入今日的河道。"} },
        { r:"Kiso Yūkyū no Mori",
          jp:"木曽悠久の森",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"“The everlasting forest of Kiso”: a biodiversity restoration area of 16,579 hectares set aside in 2014 across Agematsu, Ōtaki and Ōkuwa in Nagano and Nakatsugawa in Gifu, protecting old natural hinoki and sawara and slowly returning plantations to natural forest.",
            ja:"二〇一四年、長野県の上松町・王滝村・大桑村と岐阜県中津川市にまたがって設けられた一万六千五百七十九ヘクタールの生物多様性復元区域。天然のヒノキ・サワラの老齢林を守り、人工林を時間をかけて天然林へ戻していく。",
            zh:"木曾悠久之森：2014 年設立、橫跨長野縣上松町、王瀧村、大桑村與岐阜縣中津川市、面積 16,579 公頃的生物多樣性復原區，保護天然扁柏與花柏老齡林，並讓人工林逐步回復為天然林。" } },
        { r:"kitsutsuki",
          jp:"キツツキ",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"The woodpecker that for decades was the mark of Hida Sangyō's chairs — a bird that lives by working wood. In 2021, after the company's centenary, it was replaced by a new logo reading simply “HIDA”.",
            ja:"長く飛騨産業の椅子のしるしであった鳥。木を削って生きる鳥である。創業百年を過ぎた二〇二一年、会社は「HIDA」とだけ記す新しいロゴに替えた。",
            zh:"啄木鳥：數十年來飛驒產業椅子的標誌，一種靠鑿木維生的鳥。公司創立百年之後的 2021 年，改用只寫「HIDA」的新標誌。" } },
        { r:"ki-urushi",
          jp:"生漆",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Raw lacquer: sap that has only been filtered, not stirred and heated to drive off water. Brownish and quick to cure, it is used for undercoats, for wiped lacquer (fuki-urushi) and as an adhesive — including in kintsugi.",
            ja:"生漆。採った樹液をこしただけで、かき混ぜたり加熱したりして水分を飛ばしていない漆。茶色がかって硬化が早く、下地、拭き漆、接着——金継ぎも含む——に使う。",
            zh:"生漆：只經過濾、未經攪拌加熱去除水分的漆液。呈褐色、硬化快，用於底漆、擦漆，以及作為接著劑——包括金繼。" } },
        { r:"kiyari",
          jp:"木遣り",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Work songs for hauling timber, literally “sending the wood”: a leader sings a line, the crew answers and heaves. From the mountains they passed to carpenters and firemen in the cities and became ceremonial, sung at ridge-raisings, festivals and the Ise okihiki.",
            ja:"木遣り。材木を運ぶための労働歌で、音頭取りが一節を歌い、皆が応えて力を合わせる。山から町の大工や火消しに伝わって儀礼の歌となり、上棟式や祭、伊勢の御木曳で歌われる。",
            zh:"木遣：搬運木材的勞動歌，字面意為「送木」——領唱者唱一句，眾人應和並一齊使力。從山林傳到城市的木匠與消防員，成為儀式歌曲，在上樑、祭典與伊勢御木曳中傳唱。" } },
        { r:"kodama",
          jp:"木霊",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The spirit of a tree — and also the ordinary word for an echo, once understood as the tree answering. The double meaning is a small key to the whole subject: sound returning from a forest was heard as the forest speaking.",
            ja:"木に宿る霊。そしてふつうのことばでは山びこのことで、かつては木が答えていると考えられた。この二重の意味は主題全体への小さな鍵である。森から返る音は、森が語る声として聞かれた。",
            zh:"木靈：樹木的精靈，同時也是日語中「回聲」的日常說法，過去人們認為那是樹在回應。這個雙重意義是理解整個主題的小鑰匙：從森林返回的聲音，被聽成森林在說話。" } },
        { r:"kodanigari / ōkawagari",
          jp:"小谷狩・大川狩",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The two river stages of the Kiso method. In kodanigari, temporary dams of logs and brush in small valleys were released to flush timber down on the surge; in ōkawagari, from about September, loose logs were driven down the main Kiso River by crews on the banks.",
            ja:"木曽式運材の川の二段階。小谷狩では小さな谷に丸太や柴で仮の堰をつくり、それを切って流れの勢いで材木を押し流した。大川狩では九月ごろから、ばらばらの丸太を川岸の人びとが木曽川本流に流し下した。",
            zh:"小谷狩與大川狩：木曾式運材法中的兩個河運階段。小谷狩是在小山谷中以原木與柴枝築臨時水壩，放水時藉水勢沖下木材；大川狩則自 9 月左右起，由沿岸工人將散放的原木沿木曾川主流驅趕而下。" } },
        { r:"koguchi",
          jp:"木口",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"End grain: the cross-section of a log or board, where buyers read ring width, colour, heart and rot. Water leaves through it about ten times faster than through the faces, so log and board ends are sealed with wax or paint to stop end checks.",
            ja:"丸太や板の横断面。買い手は木口で年輪の幅、色、心材、腐れを読む。水は側面の約十倍の速さで木口から抜けるため、木口割れを防ぐのに蝋や塗料でふさぐ。",
            zh:"木口（橫切面）：原木或板材的橫斷面，買家從中判讀年輪寬度、顏色、心材與腐朽。水分從木口散失的速度約為側面的十倍，因此原木與板材端面會塗蠟或漆封住，以防端裂。" } },
        { r:"kōji", jp:"麹", cat:GIFU.GC.sake,
  d:{en:"Steamed rice grown with a mould that turns its starch into sugar.",ja:"麹菌を育てた蒸し米。でんぷんを糖に変える。",zh:"培養了麴菌的蒸米，能把澱粉轉化為糖。"} },
        { r:"kokera-buki",
          jp:"杮葺",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"Roofing of very thin wooden shingles, a few millimetres thick, split from sawara, sugi or other straight-grained wood and laid in many overlapping courses. Found on temples, shrines and theatres; the word kokera-otoshi, a theatre's opening, comes from sweeping away the last shavings.",
            ja:"サワラやスギなど目の通った木を数ミリの薄さに割った板を、何枚も重ねて葺く屋根。寺社や劇場に見られる。劇場の「こけら落とし」は、最後の木くずを払い落とすことに由来する。",
            zh:"杮葺：將花柏、柳杉等紋理通直的木材劈成數公釐厚的薄木片，層層疊鋪而成的屋頂，見於寺社與劇場。日語稱劇場落成首演為「杮落」，即源自掃除最後的木屑。" } },
        { r:"kōki",
          jp:"紅木",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Red sanders (Pterocarpus santalinus), a heavy, dark red wood endemic to southern India and the classic material of top-grade shamisen necks. It is listed in CITES Appendix II, so new stock is scarce and old stock prized.",
            ja:"インド南部に固有の重く暗赤色の木（Pterocarpus santalinus）で、最上の三味線の棹の定番の材。ワシントン条約の附属書IIに掲載され、新しい材は乏しく、古い材が珍重される。",
            zh:"紅木（日文用法，即紅檀）：印度南部特有、沉重的深紅色木材（Pterocarpus santalinus），是頂級三味線琴桿的經典材料。已列入華盛頓公約附錄二，新料稀少，舊料珍貴。" } },
        { r:"koku", jp:"石", cat:GIFU.GC.history,
  d:{en:"A measure of rice, about 180 litres, in which a domain's revenue and rank were counted.",ja:"米の量の単位で約180リットル。藩の収入と格はこれで数えた。",zh:"米的量制單位，約 180 公升；藩的收入與地位以此計算。"} },
        { r:"kokusan kagu",
          jp:"国産家具",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"“Domestic furniture” says where a piece was made, not where its wood grew: a chair assembled in Japan from American oak is kokusan kagu. For Japanese timber, look for kokusanzai (domestic wood) or a regional mark such as Gifu-certified timber.",
            ja:"「国産家具」は家具がどこでつくられたかを示すだけで、木がどこで育ったかは示さない。アメリカ産のオークを日本で組み立てた椅子も国産家具である。日本の木を求めるなら「国産材」や、ぎふ証明材のような産地の表示を見る。",
            zh:"「國產家具」只說明家具在哪裡製造，不代表木材長在哪裡：以美國橡木在日本組裝的椅子也算國產家具。若要日本木材，應看「國產材」或岐阜證明材之類的產地標示。" } },
        { r:"kokusan urushi",
          jp:"国産漆",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Japanese-grown lacquer, most of it from Jōbōji in Iwate. In 2024 Japan used about 31.2 tonnes of urushi and produced about 1.8; since 2015 domestic urushi has in principle been required for subsidised repairs of National Treasure and Important Cultural Property buildings.",
            ja:"国内で採れた漆で、多くは岩手県の浄法寺産。二〇二四年、日本は約31.2トンの漆を使い、国産は約1.8トンであった。二〇一五年からは、国宝や重要文化財の建造物を補助金で修理するとき、原則として国産漆を使うことになった。",
            zh:"國產漆：日本國內生產的漆，多數產自岩手縣淨法寺。2024 年日本用漆約 31.2 公噸，國產約 1.8 公噸；2015 年起，以國家補助修理國寶與重要文化財建築時，原則上須使用國產漆。" } },
        { r:"kominka",
          jp:"古民家",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"An old traditional house, usually built before the Second World War with hand-hewn timbers and traditional joinery. Many in Gifu stand empty; some are dismantled and their beams reused, others restored as homes, inns and cafés.",
            ja:"古い伝統的な家。多くは第二次世界大戦前に、手斧ではつった材と伝統の継手で建てられた。岐阜では空き家になったものも多く、解体されて梁が再利用されるものもあれば、住まいや宿、カフェとして再生されるものもある。",
            zh:"古民家：多建於二戰前、以手工削製木材與傳統榫接建成的老房子。岐阜有許多已成空屋，有的被拆解後樑木再利用，也有的整修為住家、民宿或咖啡館。" } },
        { r:"konara",
          jp:"小楢・コナラ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Quercus serrata, the commonest oak of the lowland coppice of Mino and the classic satoyama tree. Heavy and hard (air-dry density about 0.79), it was cut for charcoal and firewood and is still the standard log for growing shiitake.",
            ja:"Quercus serrata。美濃の低地の雑木林で最も多いナラで、里山を代表する木。重く硬く（気乾比重約0.79）、炭や薪のために伐られ、いまもシイタケの原木の定番である。",
            zh:"枹櫟（Quercus serrata）：美濃低地雜木林最常見的櫟樹，是典型的里山樹種。材重而硬（氣乾密度約 0.79），昔日伐作木炭與柴薪，至今仍是栽培香菇的標準段木。" } },
        { r:"kontena-nae",
          jp:"コンテナ苗",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Container seedling: a seedling raised in a cell so that it comes with a plug of roots and soil. It can be planted in most seasons, survives better than bare-root stock and is quicker to plant; Gifu's forest research institute has worked out methods for raising hinoki this way.",
            ja:"育苗容器の穴で育て、根と土が一体になった根鉢ごと植える苗。ほぼ一年中植えられ、裸苗より活着がよく、植えるのも速い。岐阜県森林研究所はヒノキのコンテナ苗の育て方を確立してきた。",
            zh:"容器苗：在育苗穴盤中培育、根系與土壤結成根團的苗木。幾乎全年皆可栽植，成活率高於裸根苗，種植也較快；岐阜縣森林研究所已發展出扁柏容器苗的培育方法。" } },
        { r:"kōon setto",
          jp:"高温セット乾燥",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"High-temperature set: a Japanese method of the 2000s for boxed-heart sugi posts. A short treatment at about 120 °C in humid conditions dries and sets the outer shell before the core shrinks, preventing surface checks without a backsplit, at the risk of internal checks and darker colour if overdone.",
            ja:"二〇〇〇年代に日本で開発された、心持ちのスギ柱のための乾燥法。湿った状態で約百二十度の短時間処理をすると、芯が縮む前に外側が乾いて固定され、背割りなしで表面割れを防げる。やりすぎると内部割れや変色を招く。",
            zh:"高溫定型乾燥：2000 年代日本為心持柳杉柱開發的乾燥法。在高濕條件下以約 120 °C 短時間處理，使外層在芯部收縮前先乾燥定型，不需背割即可防止表面開裂；但處理過度會造成內裂與顏色變深。" } },
        { r:"koppabutsu",
          jp:"木っ端仏",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"“Chip Buddhas”: the tiny figures Enkū carved from offcuts and splinters left over from larger work, sometimes only a few centimetres high and made with a handful of cuts. They were given to villagers as charms and are among his most moving works.",
            ja:"円空が大きな像を彫ったあとの端材や木くずから彫った小さな像。数センチしかないものもあり、わずかな刃で形にした。村人にお守りとして与えられ、円空のもっとも心を打つ作品に数えられる。",
            zh:"「木屑佛」：圓空用雕刻大像後剩下的邊材與碎木刻成的小佛像，有的只有數公分高，寥寥幾刀即成。它們被贈予村民作為護身符，是圓空最動人的作品之一。" } },
        { r:"kōseinō ringyō kikai",
          jp:"高性能林業機械",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"“High-performance forestry machines”: harvesters, processors, forwarders, swing yarders and tower yarders, most of them Nordic heads and cranes mounted on Japanese excavator bases. Japan's fleet in FY2024 was about 2.3 times its size ten years earlier.",
            ja:"ハーベスタ、プロセッサ、フォワーダ、スイングヤーダ、タワーヤーダなど。多くは北欧製のヘッドやクレーンを日本の油圧ショベルに載せたものである。二〇二四年度の全国の保有台数は十年前の約二・三倍になった。",
            zh:"高性能林業機械：伐木歸堆機（harvester）、造材機（processor）、運材車（forwarder）、迴轉式集材機與塔式集材機等，多半是將北歐製機頭與吊臂裝在日本挖土機底盤上。2024 年度日本的保有數量約為十年前的 2.3 倍。" } },
        { r:"kōshi",
          jp:"格子",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A lattice of fine vertical bars across the street front of a townhouse, letting those inside see out while passers-by cannot see in. The rhythm of kōshi along Takayama's old streets is one of the town's defining sights.",
            ja:"町家の表に細い縦の桟を並べた格子。内からは外が見え、通りからは内が見えない。高山の古い町並みに連なる格子のリズムは、町を代表する眺めの一つである。",
            zh:"格子：町家臨街立面上排列細直木條的格柵，屋內看得見外面，路人卻看不見屋內。高山老街上格子連綿的節奏，是這座城鎮最具代表性的景致之一。" } },
        { r:"koshirae", jp:"拵", cat:GIFU.GC.metal,
  d:{en:"The mounting of a sword: hilt, guard, scabbard and fittings.",ja:"刀の外装。柄、鍔、鞘、金具。",zh:"刀的外裝：刀柄、護手、刀鞘與各式配件。"} },
        { r:"koshu", jp:"古酒", cat:GIFU.GC.sake,
  d:{en:"Long-aged sake, amber to brown; prized in the Edo period and revived by a few houses, one in Gifu city.",ja:"長く熟成させた琥珀色から褐色の酒。江戸時代に珍重され、岐阜市の一軒を含むいくつかの蔵が甦らせた。",zh:"長期熟成、呈琥珀至褐色的酒；江戶時代備受珍視，由包括岐阜市一家在內的少數酒藏復興。"} },
        { r:"kotatsu",
          jp:"炬燵",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"A low table with a heat source beneath and a quilt over the frame, around which the family sits with their legs under the cover. Once warmed by charcoal in a sunken pit, now almost always by an electric heater; still a winter fixture in Gifu homes.",
            ja:"低い机の下に熱源を置き、枠に布団をかけて脚を入れて暖まる暖房具。かつては掘りこんだ炉の炭火で暖めたが、いまはほとんど電気のヒーターである。岐阜の家でもいまなお冬の定番である。",
            zh:"在矮桌下放置熱源、桌框蓋上棉被，全家把腿伸進被裡取暖的家具。過去以下挖爐坑中的炭火加熱，如今幾乎都用電熱器；至今仍是岐阜家庭冬天的必備品。" } },
        { r:"koto",
          jp:"箏",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The thirteen-string zither, about 1.8 m long, whose body is essentially one piece of kiri hollowed from a half-log and closed with a pierced kiri board. Kiri's lightness gives a high radiation ratio. Most koto are now made in Fukuyama, Hiroshima.",
            ja:"十三本の弦をもつ長さ約1.8mの楽器。胴は半割りの丸太からくりぬいた一枚の桐を、穴をあけた桐の裏板でふさいだものである。桐の軽さが高い放射比を生む。いまは多くが広島県福山市でつくられる。",
            zh:"箏：十三弦、長約 1.8 公尺的弦樂器，琴身基本上是由半剖圓木挖空的一整塊桐木，再以開孔的桐木底板封合。桐木輕盈，帶來高聲輻射比。如今多產於廣島縣福山市。" } },
        { r:"kōyamaki",
          jp:"高野槙・コウヤマキ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Sciadopitys verticillata, the umbrella pine, sole member of its own family and found only in Japan; one of the Kiso five trees, scattered on ridges. Exceptionally resistant to water and rot, it made bath tubs, boat parts and, in ancient times, coffins.",
            ja:"Sciadopitys verticillata。一科一属一種の日本固有の針葉樹で、木曽五木の一つ。尾根に点在する。水と腐朽にきわめて強く、浴槽や舟の部材、古代には棺に使われた。",
            zh:"日本金松（Sciadopitys verticillata）：自成一科、僅產於日本的針葉樹，木曾五木之一，零星分布於山稜。極耐水、耐腐，用於浴桶、船隻構件，古代用作棺木。" } },
        { r:"kōzantai",
          jp:"高山帯",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"The alpine zone above the tree line in the Hida mountains and on Hakusan and Ontake, where creeping pine (haimatsu) forms waist-high thickets and snowbeds hold alpine flowers. It is the home of the rock ptarmigan, raichō, Gifu's prefectural bird.",
            ja:"飛騨山脈や白山、御嶽の森林限界より上の帯。ハイマツが腰の高さの茂みをつくり、雪田には高山植物が咲く。岐阜県の県鳥ライチョウのすみかである。",
            zh:"高山帶：飛驒山脈、白山與御嶽森林界線以上的地帶，偃松形成及腰高的灌叢，雪田中開滿高山植物，是岐阜縣縣鳥雷鳥（岩雷鳥）的棲地。" } },
        { r:"kōzo",
          jp:"楮",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Paper mulberry, a shrub whose long, strong inner-bark fibres are the main material of Japanese paper. The stems are cut in winter, steamed and stripped; the white inner bark is cooked, cleaned by hand and beaten before the paper is formed.",
            ja:"楮。内皮の長く丈夫な繊維が和紙の主な原料となる低木。冬に枝を刈って蒸し、皮をはぎ、白い内皮を煮て、手でちりを取り、打ってから紙をすく。",
            zh:"楮：內皮纖維長而強韌、為和紙主要原料的灌木。冬季割下枝條，蒸後剝皮，將白色內皮煮過、以手工挑除雜質並捶打後再抄紙。" } },
        { r:"kuda-nagashi", jp:"管流し", cat:GIFU.GC.timber,
  d:{en:"Floating logs singly down a mountain river, before they were caught and made up into rafts.",ja:"山の川に木を一本ずつ流すこと。のちに受け止めて筏に組んだ。",zh:"將原木一根根放入山區河流漂送，之後再攔下編成木筏。"} },
        { r:"kumiko",
          jp:"組子",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"Lattice work of thin wooden strips, notched and fitted together without glue or nails into geometric patterns, used in shōji, transoms and screens. A joiner's showpiece: some patterns need hundreds of tiny parts, each cut to a tight fit.",
            ja:"細い木の桟に切りこみを入れ、接着剤も釘も使わずに組み合わせて幾何学の文様をつくる細工。障子、欄間、衝立に使われる。建具職の腕の見せどころで、文様によっては数百の小さな部材をすきまなく刻む。",
            zh:"組子：在細木條上刻出缺口，不用膠也不用釘地組合成幾何圖案的細工，用於障子、欄間與屏風。這是建具匠展現功力之處，有些圖案需要數百個精密切削的小部件。" } },
        { r:"kumo",
          jp:"雲",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"The white-painted cloud scrolls carved on the ends of the eave brackets of houses in Hida-Furukawa. Each carpenter or workshop had its own design — some 170 have been recorded — so the clouds serve as builders' signatures.",
            ja:"飛騨古川の家々の軒の腕木の先に彫られ、白く塗られた雲の文様。大工や工房ごとに意匠があり、約百七十種が記録されている。雲は棟梁の署名の役を果たす。",
            zh:"雲：飛驒古川民宅簷下挑木末端雕刻並塗白的雲紋。每位木匠或工坊各有自己的圖樣，已記錄約 170 種，雲紋因而成為工匠的簽名。" } },
        { r:"kunen kansō",
          jp:"燻煙乾燥",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Smoke drying, a Japanese craft method: timber is heated for days in a smoky chamber fired with bark and offcuts. Its users say it reduces cracking and insect attack; like vacuum, radio-frequency and solar kilns, it is used mainly by small mills and makers.",
            ja:"樹皮や端材を燃やした煙の充満する室で、何日もかけて材を温める日本の職人的な乾燥法。割れや虫害が減るとされる。減圧、高周波、太陽熱の乾燥機と同じく、主に小さな製材所や作り手が使う。",
            zh:"燻煙乾燥：日本的傳統工藝乾燥法，將木材置於以樹皮與邊料燃燒產生煙霧的室內加熱數日。使用者表示可減少開裂與蟲害；與真空、高週波及太陽能乾燥一樣，主要由小型製材廠與工匠採用。" } },
        { r:"kunugi",
          jp:"櫟・クヌギ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Quercus acutissima, a chestnut-leaved oak planted and coppiced around villages for fuel. Its dense wood made some of the best charcoal and its logs are prized for shiitake; the old coppice stools host stag beetles and many other insects.",
            ja:"Quercus acutissima。燃料のため集落のまわりに植えられ、萌芽で繰り返し伐られてきたナラ類。緻密な材は上等の炭となり、シイタケの原木としても好まれる。古い株にはクワガタなど多くの虫がすむ。",
            zh:"麻櫟（Quercus acutissima）：葉似栗葉的櫟樹，為取燃料而栽植於村落周圍並反覆萌芽更新。緻密的木材可燒成上等木炭，也是備受青睞的香菇段木；老樹樁是鍬形蟲等許多昆蟲的棲所。" } },
        { r:"Kuraiyama",
          jp:"位山",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The “mountain of rank” behind the Minashi shrine, first shrine of Hida province, source by tradition of the yew for court tablets. Shaku of Kuraiyama yew are still presented on great occasions, among them imperial enthronements and the Ise rebuilding.",
            ja:"飛騨一宮水無神社の背後の山で、伝えでは笏にするイチイを出した「位の山」。いまも天皇の即位や伊勢の遷宮など大きな節目に、位山のイチイの笏が献上される。",
            zh:"位山：飛驒一宮水無神社後方的「位階之山」，相傳是製笏紫杉的產地。至今在天皇即位與伊勢遷宮等重大場合，仍會獻上位山紫杉製的笏。" } },
        { r:"kuramoto · tōji", jp:"蔵元・杜氏", cat:GIFU.GC.sake,
  d:{en:"The owner of a brewery and the master brewer; in many small houses today they are the same person.",ja:"蔵の持ち主と酒造りの長。いまは多くの小さな蔵で同じ人である。",zh:"酒藏的主人與釀酒師傅；如今許多小酒藏裡兩者是同一人。"} },
        { r:"kureki",
          jp:"榑木",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Split blanks for roof shingles and boards, a standard product of the Edo-period forests. Between 1697 and 1707 the shogunate had forty-eight villages of Hida cut six to seven hundred thousand of them, floated down the Hida River towards Shirotori and Kuwana.",
            ja:"屋根板や板の素材として割り出した木で、江戸時代の山の標準的な産物。一六九七年から一七〇七年に、幕府は飛騨の四十八か村に六十万〜七十万本の榑木を伐らせ、飛騨川から白鳥や桑名へ流した。",
            zh:"榑木：劈製而成、供作屋頂木瓦與板材的木料，是江戶時代山林的標準產品。1697 至 1707 年間，幕府令飛驒 48 個村伐製 60 萬至 70 萬根榑木，經飛驒川漂往白鳥與桑名。" } },
        { r:"kuri",
          jp:"栗・クリ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Castanea crenata, Japanese chestnut, of hill forest and old orchards. Its heartwood is among the most rot-resistant in Japan — sills, farmhouse posts, railway sleepers and roof shingles — and the nuts make Nakatsugawa's autumn sweet, kuri kinton.",
            ja:"Castanea crenata。丘陵の森や古い栗林に育つ。心材は日本で最も腐りにくいものの一つで、土台、民家の柱、枕木、屋根板に使われる。実は中津川の秋の菓子、栗きんとんになる。",
            zh:"栗木（Castanea crenata）：生於丘陵森林與老栗園。心材是日本最耐腐的木材之一，用於地檻、農舍柱子、鐵路枕木與屋頂木瓦；栗子則做成中津川秋季的和菓子「栗金飩」。" } },
        { r:"kuroshin",
          jp:"黒心",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Black heart: the dark heartwood found in some sugi, higher in moisture and minerals than red heart. Green black-heart sugi can hold more than its own weight of water, is slow and difficult to dry, and traditionally sells for less.",
            ja:"一部のスギに見られる黒っぽい心材で、赤身より水分や無機成分が多い。生材では自重以上の水を含むこともあり、乾燥に時間がかかって難しく、昔から赤身より安く取引される。",
            zh:"黑心：部分柳杉出現的深色心材，含水量與礦物質高於紅心材。黑心柳杉生材的含水量可超過自身乾重，乾燥緩慢而困難，傳統上價格也低於紅心材。" } },
        { r:"kurozumi",
          jp:"黒炭",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Black charcoal: fired at a lower temperature and left to cool in the sealed kiln. Softer and quicker to light than white charcoal, it was the everyday fuel of hearths, braziers and kotatsu across central Japan.",
            ja:"黒炭。比較的低い温度で焼き、窯を密閉したまま冷ます。白炭より柔らかく火がつきやすく、中部日本の囲炉裏、火鉢、炬燵の日々の燃料であった。",
            zh:"黑炭：以較低溫度燒製，封窯讓它在窯內冷卻。比白炭軟、容易點燃，是日本中部地爐、火缽與暖桌的日常燃料。" } },
        { r:"kurui",
          jp:"狂い",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Distortion: any change of shape as wood dries or takes up moisture — sori (bow and cup), nejire (twist), magari (crook) and ware (checks). Carpenters read a log's likely kurui before cutting and set opposing tendencies against each other in a frame.",
            ja:"木が乾いたり湿気を吸ったりして形が変わること。反り、ねじれ、曲がり、割れなど。大工は刻む前に木の狂いの癖を読み、架構の中で反対の癖を組み合わせて打ち消させる。",
            zh:"狂（變形）：木材乾燥或吸濕時的各種形變，包括反翹（弓彎與瓦狀）、扭曲、側彎與開裂。木匠在加工前會先判讀原木可能的變形習性，並在構架中讓相反的傾向彼此抵消。" } },
        { r:"kusunoki",
          jp:"楠・クスノキ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Cinnamomum camphora, camphor tree, the evergreen giant of shrine groves in the warm lowlands. Its aromatic, often figured wood was used for Buddhist sculpture, chests and slab tables, and distilled for camphor.",
            ja:"Cinnamomum camphora。暖かい低地の社叢にそびえる常緑の巨木。香りが強くしばしば杢の出る材は、仏像や箪笥、一枚板の卓に使われ、樟脳もとられた。",
            zh:"樟樹（Cinnamomum camphora）：溫暖低地神社林中的常綠巨木。木材芳香且常帶美麗紋理，用於佛像雕刻、衣箱與整塊板桌，也用來蒸餾樟腦。" } },
        { r:"kyōhanjo",
          jp:"共販所",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"“Joint sales centre”: a log market run by forest owners' cooperatives. The Gifu federation runs three, for the Gifu–Chūnō, Tōnō and Hida regions, with market days on fixed dates, several times a month in the busy winter season.",
            ja:"森林組合が運営する丸太の市場。岐阜県森林組合連合会は岐阜・中濃、東濃、飛騨の三つの共販所をもち、決まった日に市を開く。冬の繁忙期には月に何度も開かれる。",
            zh:"共販所：由森林組合經營的原木市場。岐阜縣森林組合聯合會設有岐阜・中濃、東濃與飛驒三處，於固定日期開市，冬季旺季每月開市多次。" } },
        { r:"ladder bracing",
          jp:"ラダーブレーシング",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Straight braces across the top like the rungs of a ladder: simple and strong, with a bright, dry, focused sound. Used on early and inexpensive guitars, and revived by some makers for blues and old-time styles.",
            ja:"はしごの横木のように表板を横切るまっすぐな力木。簡単で丈夫、明るく乾いた、まとまった音になる。初期の安価なギターに使われ、ブルースや古い様式のために復活させるつくり手もいる。",
            zh:"梯形音梁：像梯子橫檔般橫越面板的直音梁，結構簡單堅固，聲音明亮、乾脆、集中。用於早期與廉價吉他，也有製琴師為藍調與老式曲風而重新採用。" } },
        { r:"lattice bracing",
          jp:"ラティスブレーシング",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A grid of thin braces, often reinforced with carbon fibre, that lets the top be made very thin and light. With double tops, it is one of the experiments of makers since the 1980s, mostly on classical guitars.",
            ja:"薄い力木を格子状に組み、しばしばカーボンファイバーで補強して、表板をきわめて薄く軽くできるようにした構造。ダブルトップとともに、一九八〇年代以降のつくり手の試みの一つで、多くはクラシックギターに使われる。",
            zh:"格狀音梁：以細音梁排成格子，常以碳纖維補強，使面板能做得極薄極輕；與雙層面板同為 1980 年代以來製琴師的實驗之一，多用於古典吉他。" } },
        { r:"loss tangent",
          jp:"損失正接",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"tan δ, a measure of internal damping: the share of vibrational energy a material turns into heat in each cycle. Good tonewoods have a low tan δ along the grain, so the top rings on; heavy, gummy woods soak up the sound.",
            ja:"内部の減衰を表す損失正接tan δで、一回の振動ごとに材料が熱に変えるエネルギーの割合。よいトーンウッドは繊維方向のtan δが小さく、表板はよく響き続ける。重く粘りのある木は音を吸ってしまう。",
            zh:"損耗角正切（tan δ）：內部阻尼的指標，即材料在每個振動週期中轉為熱的能量比例。好的音材順紋方向 tan δ 低，面板餘響綿長；沉重而黏韌的木材則會吸收聲音。" } },
        { r:"LVL",
          jp:"単板積層材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Laminated veneer lumber: veneers like those of plywood but all laid with the grain in the same direction, making long, uniform beams, studs and door and window frames, with any defects dispersed through many thin layers.",
            ja:"合板と同じような単板を、すべて繊維方向をそろえて積層接着した材。欠点が多くの薄い層に分散するため均質で、長い梁や柱、建具の枠などになる。",
            zh:"單板層積材（LVL）：與合板類似的單板，但全部順紋同向疊層膠合，缺陷分散於許多薄層之中，性質均勻，用於長樑、立柱與門窗框料。" } },
        { r:"machiya",
          jp:"町家",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A townhouse built on a narrow, deep plot, with a shop or workroom on the street and living rooms, courtyard and storehouse behind. Takayama's merchant machiya, such as the Kusakabe and Yoshijima houses, show the carpentry of the Hida builders at its most refined.",
            ja:"間口が狭く奥行きの深い敷地に建つ町の家。通りに面して店や仕事場を置き、奥に住まい、中庭、蔵が続く。高山の日下部家や吉島家のような商家は、飛騨の大工の技をもっとも洗練された形で見せる。",
            zh:"町家：建在窄而深之基地上的城鎮住宅，臨街為店面或工作間，後方依序是起居空間、中庭與倉庫。高山的日下部家、吉島家等商家町家，展現了飛驒工匠最精緻的木作。" } },
        { r:"madake",
          jp:"真竹・マダケ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Phyllostachys bambusoides, the bamboo of lantern and umbrella ribs and barrel hoops: tall, thick-walled, straight, and splittable into strips a fraction of a millimetre thick. It is cut in late autumn and winter, when its starch is low.",
            ja:"Phyllostachys bambusoides。提灯や和傘の骨、樽の箍に使われる竹。背が高く、肉厚でまっすぐ、一ミリに満たない薄さまで割ることができる。デンプンの少ない晩秋から冬に伐る。",
            zh:"真竹（Phyllostachys bambusoides）：製作燈籠與和傘骨架、木桶箍的竹子。竹稈高大、壁厚而筆直，可劈成不到 1 公釐厚的竹篾。於澱粉含量低的晚秋至冬季砍伐。" } },
        { r:"magegi",
          jp:"曲木",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"Bentwood: solid wood, usually beech, softened with steam and bent around a form, with a steel strap on the outer face so that the whole section is compressed rather than stretched. Brought to Takayama in 1920, it founded the Hida furniture industry.",
            ja:"曲木。ふつうはブナの無垢材を蒸気で柔らかくし、型に沿って曲げる。外側の面に鋼の帯金を当てるので、断面全体が引き伸ばされずに圧縮される。一九二〇年に高山へ伝わり、飛騨の家具産業の始まりとなった。",
            zh:"曲木：通常以山毛櫸實木蒸軟後沿模具彎曲，並在外側貼上鋼製帶條，使整個斷面受壓縮而非被拉伸。1920 年傳入高山，成為飛驒家具產業的起點。" } },
        { r:"magemono",
          jp:"曲物",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Round or oval boxes made from a single thin board of hinoki or sugi, softened in hot water, bent into a ring and stitched with cherry bark, with a bottom fitted in. Light and breathable: lunch boxes, sieves, rice containers and ritual vessels.",
            ja:"ヒノキやスギの薄板一枚を湯で柔らかくして輪に曲げ、桜の皮で綴じて底をはめた丸や楕円の器。軽く、よく呼吸し、弁当箱、ふるい、飯びつ、神事の器などに使われる。",
            zh:"以一片扁柏或柳杉薄板用熱水泡軟、彎成環形，再以櫻樹皮縫合並嵌入底板而成的圓形或橢圓形木器。輕巧透氣，用於便當盒、篩子、飯桶與祭器。" } },
        { r:"mage tsuyosa",
          jp:"曲げ強さ",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Bending strength or modulus of rupture: the stress at which a beam breaks. Small clear sugi reaches about 64 MPa, hinoki 74, beech, mizunara and keyaki about 98; knots and sloping grain make real structural pieces much weaker.",
            ja:"梁が折れるときの応力。無欠点の小試験体でスギ約64MPa、ヒノキ74MPa、ブナ・ミズナラ・ケヤキは約98MPaに達する。実際の構造材は節や目切れがあるため、これよりずっと弱い。",
            zh:"抗彎強度（破壞模數）：樑斷裂時的應力。無缺點小試材中，柳杉約 64 MPa、扁柏 74 MPa，山毛櫸、水楢與櫸木約 98 MPa；實際結構材因有節與斜紋，強度低得多。" } },
        { r:"mame-isu",
          jp:"豆椅子",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"A “bean chair”: a small, low, sturdy chair for young children, made in solid wood as a first piece of real furniture. Several Gifu workshops make them; one in Kasagi, Ena, is known for its mame-isu as well as its full-size furniture.",
            ja:"幼い子どものための、小さく低く丈夫な椅子。無垢の木でつくる、はじめての本物の家具である。岐阜のいくつかの工房がつくり、恵那市笠置町の工房は、ふつうの家具とともに豆椅子で知られる。",
            zh:"「豆椅」：給幼兒用的小巧、低矮又堅固的椅子，以實木製作，是孩子的第一件真正家具。岐阜有幾家工坊製作，其中惠那市笠置的一家工坊，除一般家具外也以豆椅聞名。" } },
        { r:"manaita",
          jp:"まな板",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A cutting board. Professional cooks prize ginkgo — soft enough to spare knife edges, resilient enough for shallow cuts to close, with an oily, water-resistant texture; hinoki and hō are also used. Boards can be re-planed by the shop that sold them.",
            ja:"まな板。料理人はイチョウを好む。刃を傷めない柔らかさと、浅い傷がふさがる弾力があり、油分を含んで水をはじく。ヒノキやホオも使われる。買った店で削り直してもらえる。",
            zh:"砧板。專業廚師偏愛銀杏木：軟到不傷刀刃，又有彈性讓淺刀痕自行閉合，且帶油性、能防水；扁柏與日本厚朴也常用。可請原購買店家重新刨平。" } },
        { r:"mansaku",
          jp:"満作・マンサク",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Hamamelis japonica, Japanese witch hazel, whose yellow flowers are the first of the mountain spring. Its pliable young stems, twisted into neso, lash the roof timbers of the gasshō houses of Shirakawa-gō.",
            ja:"Hamamelis japonica。山の春にまっ先に黄色い花を咲かせる。しなやかな若い枝をねじって「ネソ」にし、白川郷の合掌造りの屋根の材を結ぶ。",
            zh:"日本金縷梅（Hamamelis japonica）：黃花在山中春天最早綻放。柔韌的嫩枝經扭絞製成「ネソ」，用來綑綁白川鄉合掌造屋頂的木料。" } },
        { r:"masame",
          jp:"柾目",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Quartersawn or edge grain: a face cut along a radius of the log, showing straight parallel lines. It shrinks about half as much in width as flatsawn wood, stays flat, wears well and shows the rays — the face of shrine timber, masu and instrument tops.",
            ja:"丸太の半径に沿って挽いた面で、まっすぐ平行な木目が出る。幅方向の収縮は板目の約半分で、反らず、すり減りにくく、放射組織が見える。社殿の材、枡、楽器の表板の面である。",
            zh:"柾目（徑切紋）：沿原木半徑鋸出的面，呈現筆直平行的紋理。寬度方向的收縮約為弦切板的一半，不易翹曲、耐磨，並顯露木射線，是神社用材、枡與樂器面板所用的面。" } },
        { r:"masu",
          jp:"枡",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A square box of unfinished hinoki with interlocking finger-jointed corners, once Japan's standard measure for rice and sake and now a cup for celebratory sake and a box for Setsubun beans. About 80 per cent of Japan's masu are made in Ōgaki.",
            ja:"塗装しないヒノキの板の四隅を、指を組んだような継ぎ目で組んだ四角い器。かつては米や酒をはかる標準の器で、いまは祝いの酒や節分の豆に使われる。全国の枡の約八割は大垣でつくられる。",
            zh:"以未上漆的扁柏板、四角用指狀接榫組成的方形木器。過去是日本量米與酒的標準量器，如今用於喜慶飲酒與節分撒豆。日本約八成的枡產自大垣。" } },
        { r:"masu-masu hanjō",
          jp:"益々繁盛",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"“Ever greater prosperity”: a pun on masu, which sounds like the verb masu, “to increase”. The pun is why masu are given at shop openings, weddings and anniversaries, often printed or laser-engraved with a name.",
            ja:"益々繁盛。「ます」は「増す」に通じる。この語呂合わせのため、枡は開店、結婚、記念日の贈り物とされ、名を刷ったりレーザーで彫ったりすることが多い。",
            zh:"益益繁盛：「枡（masu）」與日語「增加（masu）」同音。正因這個諧音，枡常被當作開店、婚禮與紀念日的禮物，並常印上或以雷射刻上名字。" } },
        { r:"masu-zake",
          jp:"枡酒",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Sake served in a masu, sometimes with a glass standing inside the box and filled until it overflows — a gesture of generosity at celebrations. The hinoki adds its own aroma; some drinkers sip from a corner, with a pinch of salt on the rim.",
            ja:"枡に注いだ酒。祝いの席では枡の中にグラスを立て、あふれるまで注ぐこともあり、気前のよさのしるしとなる。ヒノキの香りが移る。角から飲んだり、縁に塩をひとつまみ置いたりする人もいる。",
            zh:"盛在枡中的酒。喜宴上有時在枡內立一個玻璃杯，倒到滿溢流進枡裡，以示慷慨。扁柏的香氣會融入酒中；有人從角落啜飲，並在邊緣放一小撮鹽。" } },
        { r:"matsugare",
          jp:"松枯れ・マツ材線虫病",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Pine wilt: the death of red and black pines caused by the pinewood nematode, a North American parasite carried from tree to tree by a longhorn beetle. It spread across Japan during the twentieth century and has killed much of the red pine of the Mino hills.",
            ja:"北米から入ったマツノザイセンチュウが、マツノマダラカミキリに運ばれてアカマツやクロマツを枯らす病気。二十世紀のうちに全国に広がり、美濃の丘陵のアカマツも多くが枯れた。",
            zh:"松材線蟲萎凋病：由北美傳入的松材線蟲經松斑天牛在樹間傳播，造成赤松與黑松枯死。20 世紀間擴散至日本全國，美濃丘陵的赤松也大量枯死。" } },
        { r:"matsuwarigi",
          jp:"松割木",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Split red pine, chosen for its resin, which burns bright and long: the fuel of the cormorant fishermen's bow fires on the Nagara, and for centuries of the climbing kilns of Mino ware.",
            ja:"割ったアカマツ。脂が多く、明るく長く燃えるので選ばれる。長良川の鵜飼の篝火の燃料であり、何百年ものあいだ美濃焼の登り窯の燃料でもあった。",
            zh:"松割木：劈開的赤松，因富含松脂、燃燒明亮持久而被選用，是長良川鵜飼船首篝火的燃料，數百年來也是美濃燒登窯的柴薪。" } },
        { r:"mawari-butai",
          jp:"回り舞台",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A revolving stage: a circular section of the stage floor turned by hand from the pit below to change scenes in view of the audience. Gifu's village playhouses were fitted with the full machinery of an urban theatre, including this.",
            ja:"舞台の床を円く切り、下の奈落から人力で回して、客の前で場面を転換する仕掛け。岐阜の村の芝居小屋は、これを含む都会の劇場と同じ仕掛けをそなえていた。",
            zh:"旋轉舞台：將舞台地板切成圓形，由下方舞台地下室以人力轉動，在觀眾面前換場的機關。岐阜的鄉村劇場配備了包括它在內、與城市劇場相同的全套機關。" } },
        { r:"mei", jp:"銘", cat:GIFU.GC.metal,
  d:{en:"The smith's signature, cut into the tang hidden in the hilt.",ja:"刀匠の銘。柄に隠れる茎に切る。",zh:"刀匠的落款，刻在藏於刀柄內的刀莖上。"} },
        { r:"meiboku",
          jp:"銘木",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"“Named wood”: timber valued as an individual object for its size, age, colour, figure or rarity, not by volume — a figured keyaki, a wide tochi slab, a polished sugi post for an alcove. Gifu's meiboku cooperative describes its market as Japan's largest for broadleaves and meiboku.",
            ja:"量ではなく、大きさ、樹齢、色、杢、希少さによって一本ずつ評価される木。杢のあるケヤキ、幅広のトチの板、床柱にする磨き丸太など。岐阜銘木協同組合は、自らの市場を日本最大の広葉樹・銘木の市場としている。",
            zh:"銘木：不以材積、而以尺寸、樹齡、色澤、紋理或稀有度逐件估價的木材，如帶杢的櫸木、寬幅七葉樹板、作床柱用的磨光圓木。岐阜銘木協同組合自稱其市場為日本最大的闊葉樹與銘木市場。" } },
        { r:"memawari",
          jp:"目回り",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Ring shake: a separation along an annual ring inside a log, caused by wind stress, frost or felling shock, often hidden until the log is sawn. With radial heart checks it is one of the defects buyers look for on the end grain at auction.",
            ja:"丸太の内部で年輪に沿って材がはがれる欠点で、風による応力、凍裂、伐倒の衝撃などで起こり、挽くまでわからないことも多い。放射状の心割れとともに、市の下見で木口を見て確かめる欠点の一つである。",
            zh:"輪裂（目回）：原木內部沿年輪分離的缺陷，由風的應力、凍裂或伐倒衝擊所致，常在鋸開前難以察覺。與放射狀心裂同為拍賣看貨時買家從木口檢查的缺陷之一。" } },
        { r:"metate",
          jp:"目立て",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Saw doctoring: sharpening, setting and tensioning saw blades. A mill's band saws are ground several times a day, their teeth swaged and shaped, and the bands hammered and rolled to run taut and straight — a craft of years that mills fear losing.",
            ja:"鋸の刃を研ぎ、あさりを出し、腰を入れる仕事。製材所の帯鋸は一日に何度も研がれ、歯先を広げて整え、ハンマーやロールで張りを与えてまっすぐに走るようにする。何年もかかって身につく技で、製材所はその担い手を失うことを恐れている。",
            zh:"目立（鋸條整修）：研磨鋸齒、調整齒距並為鋸條施加張力的工作。製材廠的帶鋸每天要研磨數次，鋸齒須壓寬整形，鋸條則以錘擊與滾壓使其運轉時緊繃筆直——這是需要多年才能養成的技藝，也是製材廠最擔心失傳的技能。" } },
        { r:"mihishirogi",
          jp:"御樋代木",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The finest hinoki of all, from which is made the mihishiro, the vessel that holds the sacred mirror. Once felled, the logs are carried in procession to Ise; in June 2025 those from Kashimo passed through Tsukechi, Fukuoka and Naegi on the way.",
            ja:"御神体の鏡を納める御樋代をつくる、もっとも尊いヒノキ。伐られた木は行列を組んで伊勢へ運ばれ、二〇二五年六月には加子母の木が付知、福岡、苗木を通っていった。",
            zh:"御樋代木：製作收納神鏡之「御樋代」的最上等扁柏。伐倒後以隊伍護送至伊勢；2025 年 6 月，加子母的木材沿途經過付知、福岡與苗木。" } },
        { r:"mikurofiburiru",
          jp:"ミクロフィブリル傾角",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Microfibril angle: the angle at which cellulose microfibrils wind around the cell in the thick S2 layer of the wall. A shallow angle means stiff wood; the steep angles of the juvenile wood near the pith make it flexible and prone to shrink lengthwise.",
            ja:"細胞壁の厚いS2層で、セルロースのミクロフィブリルが細胞の軸に対して巻く角度。角度が小さいほど材は硬く、髄に近い未成熟材では角度が大きいため、しなやかで長さ方向にも縮みやすい。",
            zh:"微纖維傾角：細胞壁厚實的 S2 層中，纖維素微纖維繞細胞軸纏繞的角度。角度越小木材越剛硬；髓心附近幼齡材的傾角大，因此較柔軟且縱向收縮較明顯。" } },
        { r:"Mino", jp:"美濃", cat:GIFU.GC.history,
  d:{en:"The southern of the two old provinces: the plain, the rivers and the hills of the south, about three-fifths of the prefecture.",ja:"二つの旧国の南のほう。南の平野と川と丘で、県の約五分の三。",zh:"兩個舊國中南邊的一個：南部的平原、河川與丘陵，約占全縣五分之三。"} },
        { r:"Mino-bori", jp:"美濃彫", cat:GIFU.GC.metal,
  d:{en:"The Mino school of sword fittings, known for autumn grasses and insects carved in high relief in soft metals and gold.",ja:"美濃の刀装具の流派。柔らかな金属に金を差し、秋草や虫を高く彫り出すことで知られる。",zh:"美濃的刀裝具流派，以軟金屬與金飾高浮雕刻出秋草與昆蟲聞名。"} },
        { r:"Mino-den", jp:"美濃伝", cat:GIFU.GC.metal,
  d:{en:"The Mino tradition of swordmaking, centred on Seki, one of the five classical traditions.",ja:"関を中心とする美濃の作刀の伝統。五箇伝の一つ。",zh:"以關為中心的美濃鍛刀傳統，古典五大傳統之一。"} },
        { r:"Mino sanninshū", jp:"美濃三人衆", cat:GIFU.GC.history,
  d:{en:"The Mino Triumvirate: three leading retainers of the Saitō whose support Nobunaga won before he took Inabayama in 1567.",ja:"斎藤氏の有力な家臣三人。信長は1567年に稲葉山を落とす前に彼らを味方につけた。",zh:"美濃三人眾：齋藤氏的三名重要家臣；信長在 1567 年攻下稻葉山之前，先爭取到了他們的支持。"} },
        { r:"Mino washi",
          jp:"美濃和紙",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Paper made from paper-mulberry bark along the Nagara and its tributary the Itadori, around Mino city, for some thirteen centuries; household registers of Mino dated 702, kept in the Shōsōin, are the oldest surviving paper in Japan. A national traditional craft.",
            ja:"美濃市のあたり、長良川とその支流板取川のほとりで、楮の皮から千三百年ほどすかれてきた紙。正倉院に残る七〇二年の美濃国の戸籍は、日本に現存する最古の紙である。国の伝統的工芸品。",
            zh:"在美濃市一帶的長良川及其支流板取川沿岸，以楮樹皮抄製了約一千三百年的紙；收藏於正倉院、年代為 702 年的美濃國戶籍，是日本現存最古老的紙。國家傳統工藝品。" } },
        { r:"Minoyaki", jp:"美濃焼", cat:GIFU.GC.papercraft,
  d:{en:"The ceramics of Tōnō, from Momoyama tea wares to most of Japan's everyday tableware.",ja:"東濃の焼き物。桃山の茶陶から、日本の日常の器の大半まで。",zh:"東濃的陶瓷，從桃山茶陶到日本大部分的日常餐具。"} },
        { r:"Misoma-hajime-sai",
          jp:"御杣始祭",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The ceremony of first felling for the Sengū, held at Agematsu in the Kiso valley on 3 June 2025; two days later the Ura-Kiso trees were felled in the national forest at Kashimo, Nakatsugawa. Both use the axe and the three-cut method, felling toward Ise.",
            ja:"遷宮の用材を初めて伐る祭。二〇二五年六月三日に木曽谷の上松で行われ、二日後には中津川市加子母の国有林で裏木曽の木が伐られた。どちらも斧による三ツ緒伐りで、伊勢の方角へ倒す。",
            zh:"御杣始祭：為遷宮首次伐木的祭典，2025 年 6 月 3 日在木曾谷的上松舉行；兩天後，裏木曾的樹木在中津川市加子母的國有林中伐倒。兩者都以斧頭行三緒伐，使樹朝伊勢方向倒下。" } },
        { r:"misomayama",
          jp:"御杣山",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The forest designated to supply timber for the Ise rebuilding — literally “the honoured soma”. Since the middle of the Edo period it has been the Kiso forests; Ura-Kiso, now Kashimo and Tsukechi in Nakatsugawa, first supplied timber for the rebuilding of 1709.",
            ja:"伊勢の遷宮の用材を出すよう定められた山。「杣」に敬称をつけた語である。江戸時代中期から木曽の山がこれにあたり、いまの中津川市加子母・付知にあたる裏木曽は、一七〇九年の遷宮で初めて用材を出した。",
            zh:"御杣山：被指定為伊勢遷宮提供木材的森林，字面意為「尊貴的杣」。自江戶中期起由木曾山林擔任；今屬中津川市加子母、付知的裏木曾，則於 1709 年的遷宮首次供材。" } },
        { r:"misshoku",
          jp:"密植",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Dense planting — from 3,000 to as many as 10,000 stems a hectare — so that trees grow tall before they grow thick, with small knots near the pith and narrow, even rings. It made Tōnō hinoki and Yoshino sugi famous, but it depends on cheap labour for the many thinnings.",
            ja:"ヘクタールあたり三千本から一万本近くも植え、太るより先に高く伸ばすこと。節は髄の近くに小さくとどまり、年輪は細かくそろう。東濃ひのきや吉野杉の名声を支えたが、何度もの間伐を担う安い労働力を前提とする。",
            zh:"密植：每公頃栽植 3,000 株至多達 10,000 株，使林木先長高再長粗，節小且集中於髓心附近，年輪細密均勻。東濃扁柏與吉野柳杉因此聞名，但前提是有廉價勞力進行多次疏伐。" } },
        { r:"mitsuo-giri",
          jp:"三ツ緒伐り",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The Kiso three-cord felling method: axemen cut into the trunk from three sides, leaving three narrow columns of wood that keep the tree upright, then sever them one by one, the last deciding the moment and direction of fall. It is used for the sacred Ise timber at Kashimo.",
            ja:"木曽に伝わる伐倒法。斧で三方から幹に切りこみ、木を立たせておく三本の細い柱（緒）を残し、それを一本ずつ断ち切って、最後の一本で倒れる時と方向を決める。加子母での伊勢神宮の御用材の伐採にいまも使われる。",
            zh:"三緒伐：木曾傳承的伐木法。以斧從三個方向砍入樹幹，留下三根支撐樹木直立的細木柱（緒），再逐一砍斷，最後一根決定倒下的時機與方向。加子母為伊勢神宮伐採御用材時至今仍採用此法。" } },
        { r:"mitsurō",
          jp:"蜜蝋",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Beeswax: soft and warm to the touch, rubbed over an oil finish to add a little water resistance and a soft sheen. It wears off and needs renewing, which is why makers suggest waxing before the rainy season and before winter.",
            ja:"みつろう。柔らかく、手ざわりが温かい。オイル仕上げの上にすりこむと、わずかな撥水性とやわらかな艶が加わる。すり減るので塗り直しが要り、つくり手は梅雨の前と冬の前に塗ることをすすめる。",
            zh:"蜂蠟：質地柔軟、觸感溫暖，擦在油性塗裝上可增添些許防水性與柔和光澤。會逐漸磨耗，需要補塗，因此製作者建議在梅雨季前與入冬前上蠟。" } },
        { r:"mizume",
          jp:"水目・ミズメ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Betula grossa, Japanese cherry birch, of the mountain slopes of Hida. Hard and fine, it is used with keyaki in Takayama's festival floats and is often sold in the trade simply as “cherry” (sakura).",
            ja:"Betula grossa。飛騨の山腹に育つカバノキ類。硬く緻密で、高山の祭屋台に欅とともに使われる。業界ではしばしば単に「サクラ」として売られる。",
            zh:"水芽（日本梓樺，Betula grossa）：生於飛驒山坡的樺木類。材質硬而細緻，與櫸木一同用於高山祭屋台，在業界常被直接當作「櫻木」販售。" } },
        { r:"mizunara",
          jp:"水楢・ミズナラ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Quercus crispula, the oak of the cool mountains: strong and ring-porous, with broad rays that show as silver flakes (toranfu) on quartersawn boards. The premier Japanese furniture oak and a famous whisky-cask wood; large trees are now scarce, and oak wilt has killed many.",
            ja:"Quercus crispula。冷涼な山のナラで、強く環孔材。太い放射組織が柾目面に銀色の斑（虎斑）として現れる。日本を代表する家具用のナラで、ウイスキー樽の材としても名高い。大木はいまや少なく、ナラ枯れで多くが枯れた。",
            zh:"水楢（Quercus crispula）：冷涼山地的櫟樹，強韌的環孔材，寬大的木射線在徑切面上呈現銀色斑紋（虎斑）。是日本首屈一指的家具用櫟木，也是著名的威士忌桶材；如今大樹稀少，許多已死於櫟樹枯萎病。" } },
        { r:"mizuya", jp:"水屋", cat:GIFU.GC.land,
  d:{en:"A storehouse raised on a high stone base inside a ring-levee village, where a family kept food and took refuge in a flood.",ja:"輪中の村で、高い石垣の上に建てた蔵。食べ物を蓄え、洪水のときには避難した。",zh:"輪中村落裡建在高石基上的倉屋，平時儲存糧食，洪水時供一家避難。"} },
        { r:"mizuya-dansu",
          jp:"水屋箪笥",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"A kitchen cupboard for tableware and food, with sliding doors above and drawers below, often in two stacking sections. Once found in every farmhouse kitchen, it is now among the most sought-after antique tansu and a form that modern makers reinterpret.",
            ja:"食器や食べ物をしまう台所の戸棚。上に引き戸、下に引出しがあり、上下二段に分かれるものが多い。かつてはどの農家の台所にもあり、いまは人気の高い時代箪笥の一つで、現代のつくり手も新しい形に生かしている。",
            zh:"存放食器與食物的廚房櫥櫃，上有拉門、下有抽屜，常分成上下兩段疊放。過去每戶農家廚房都有，如今是最搶手的古董簞笥之一，現代製作者也常加以重新詮釋。" } },
        { r:"mochi-maki",
          jp:"餅まき",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Throwing rice cakes and coins from the ridge of a newly framed house to the neighbours gathered below, to share the good fortune and repay the community's help. Still common at house-raisings in rural Gifu.",
            ja:"新しく組み上がった家の棟から、集まった近所の人々に餅や銭をまくこと。福を分け合い、地域の助けに報いる。岐阜の田舎の上棟式ではいまもよく見られる。",
            zh:"撒餅：從剛架好骨架的新屋屋脊向聚集的鄰居撒下年糕與錢幣，分享福氣並回報鄰里的幫忙。在岐阜鄉間的上樑儀式中至今仍很常見。" } },
        { r:"moeshiro sekkei",
          jp:"燃えしろ設計",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"“Burning-margin design”: a large timber section is sized for its loads, then given a sacrificial layer that will char away in a fire while the core keeps its strength — for glulam 25 mm for thirty minutes and 45 mm for an hour under Japanese rules.",
            ja:"必要な断面を荷重から決めたうえで、火災時に炭化して失われてもよい層をその外側に加え、芯の強さを保つ設計法。日本の規定では、集成材で三十分なら二十五ミリ、一時間なら四十五ミリである。",
            zh:"燃燒餘裕設計：先依載重決定所需斷面，再於外側加上火災中可被碳化犧牲的厚度，以保全核心強度。依日本規定，集成材 30 分鐘需 25 公釐、1 小時需 45 公釐。" } },
        { r:"mokkiri", jp:"もっきり", cat:GIFU.GC.sake,
  d:{en:"A glass stood in a masu or saucer and filled until it overflows, as a show of generosity.",ja:"枡や受け皿にグラスを立て、あふれるまで注ぐこと。気前のよさを示す。",zh:"把玻璃杯立在枡或小碟中，斟到滿溢，以示大方。"} },
        { r:"mokoshi",
          jp:"裳階",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A pent roof built around the lower walls of a hall, making a one-storey building look like two. The sutra hall of Ankokuji in Takayama (1408), one bay square, appears three bays wide and two storeys high because of its mokoshi.",
            ja:"堂の下層の壁のまわりにつけたひさし状の屋根で、一重の建物を二重に見せる。高山の安国寺経蔵（一四〇八年）は一間四方だが、裳階のために三間の二重の建物に見える。",
            zh:"裳階：在殿堂下層牆外加設的一圈披簷，使單層建築看似雙層。高山安國寺經藏（1408 年）雖只有一間見方，卻因裳階而看起來寬三間、高兩層。" } },
        { r:"moku",
          jp:"杢",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Figure: patterned grain produced by burls, wavy growth, compression or interlocked fibres, valued far above plain grain (mokume). The character 杢, “wood” over “earth”, is a Japanese coinage; a figured log is sold piece by piece as meiboku.",
            ja:"こぶや波打つ成長、圧縮、交錯する繊維などから生まれる模様のある木目で、ふつうの木目（木目）よりはるかに珍重される。「木」と「土」を重ねた杢の字は日本でつくられた国字である。杢の出る丸太は銘木として一本ずつ売られる。",
            zh:"杢（紋理花紋）：由樹瘤、波狀生長、壓縮或交錯纖維形成的花紋，價值遠高於一般木紋。「杢」字以「木」疊於「土」上，是日本自創的和製漢字；帶杢的原木會作為銘木逐根販售。" } },
        { r:"mokugyo",
          jp:"木魚",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The round, slit wooden drum carved with a fish or dragon and beaten during sutra chanting. It is hollowed from camphor, which grows large and resists cracking; the block rests and dries for years before the final carving and tuning.",
            ja:"魚や竜を彫った丸い木の鳴り物で、読経のときに打つ。大きく育ち割れにくいクスノキからくりぬき、仕上げの彫りと音の調整の前に何年も寝かせて乾かす。",
            zh:"木魚：刻有魚或龍、開有縫口的圓形木鳴器，誦經時敲擊。以樹形高大、不易開裂的樟木挖空製成，在最後雕刻與調音前要靜置乾燥多年。" } },
        { r:"mokuiku",
          jp:"木育",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"“Wood education”: meeting wood, learning from it and living with it, from infancy on. Proposed in Hokkaido in 2004 and national policy from 2006; Gifu has a thirty-year vision for it, from a baby's first wooden toy to adults who manage forests.",
            ja:"木育。幼いころから木にふれ、木に学び、木とともに暮らすこと。二〇〇四年に北海道で提案され、二〇〇六年に国の政策となった。岐阜県は、赤ちゃんの最初の木のおもちゃから森を守る大人までを見通す三十年の構想をもつ。",
            zh:"木育：從幼兒期起接觸木材、向木學習、與木共生的教育。2004 年由北海道提出，2006 年成為國家政策；岐阜縣訂有三十年構想，從嬰兒的第一件木玩具一路延伸到管理森林的成人。" } },
        { r:"mokuiku instructor",
          jp:"木育インストラクター",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"A short certified course, run since 2010, for people who want to lead wood play and woodworking workshops for children and families. Hokkaido trains its own mokuiku meisters.",
            ja:"子どもや家族のための木のあそびや木工の催しを導く人のための、短期の認定講座。二〇一〇年から開かれている。北海道は独自に「木育マイスター」を育てる。",
            zh:"木育指導員：為想帶領兒童與家庭進行木頭遊戲與木工活動者開設的短期認證課程，自 2010 年開辦；北海道則自行培育「木育大師」。" } },
        { r:"mokurō",
          jp:"木蝋",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Japan wax, pressed from the berries of the wax tree, Toxicodendron succedaneum, a relative of the lacquer tree. Best known as the material of traditional Japanese candles, it is also blended into some wood waxes.",
            ja:"ハゼノキ（Toxicodendron succedaneum）の実から搾る蝋。ハゼノキはウルシの仲間である。和ろうそくの材料としてよく知られ、木の手入れ用の蝋に配合されることもある。",
            zh:"木蠟：由漆樹的近親野漆樹（Toxicodendron succedaneum）果實壓榨而成的蠟，以做為日本傳統蠟燭的原料最為人知，也會調入部分木器蠟中。" } },
        { r:"Mokuryō",
          jp:"木工寮",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The Bureau of Carpentry, the government office in Nara and Heian-kyō that built and maintained palaces and official buildings. The Engishiki of 927 assigns thirty-seven Hida carpenters to it and sixty-three to the Office of Repairs (Shurishiki).",
            ja:"奈良と平安京で宮殿や官舎の造営と修理を担った役所。九二七年の延喜式は、飛騨の匠のうち三十七人を木工寮に、六十三人を修理職に配している。",
            zh:"木工寮：奈良與平安京負責營造與維修宮殿、官署的政府機關。927 年完成的《延喜式》將 37 名飛驒工匠分配至木工寮，63 名分配至修理職。" } },
        { r:"mokusakueki",
          jp:"木酢液",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Wood vinegar: the liquid condensed from the smoke of a charcoal kiln, mainly water, acetic acid and hundreds of organic compounds. Charcoal makers in Gifu sell it for gardening, bathing and deodorising.",
            ja:"炭焼き窯の煙を冷やして集めた液で、主に水と酢酸、それに何百もの有機化合物からなる。岐阜の炭焼きもこれを園芸用、入浴用、消臭用として売っている。",
            zh:"木醋液：從炭窯煙氣冷凝收集的液體，主要成分為水與醋酸，另含數百種有機化合物。岐阜的燒炭業者也將其作為園藝、入浴與除臭用品販售。" } },
        { r:"mokushi tōkyū kubun",
          jp:"目視等級区分",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Visual grading under the JAS: knots, slope of grain, checks and wane are examined and a grade of one to three stars assigned, separately for members that will be bent, such as beams (kōshu), and members that will be compressed, such as posts (otsushu).",
            ja:"JASの目視による等級区分。節、繊維の傾斜、割れ、丸身を見て一〜三級（星の数）を与える。梁など曲げを受ける甲種と、柱など圧縮を受ける乙種で別々に格付けする。",
            zh:"目視等級區分：依 JAS 以肉眼檢視節、斜紋、裂縫與缺邊，評定一至三級（以星號表示），並分別針對樑等受彎構件（甲種）與柱等受壓構件（乙種）分級。" } },
        { r:"mokushitsu baiomasu",
          jp:"木質バイオマス",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Woody biomass: chips, bark, sawdust, pellets and low-grade logs burned for heat and power. Biomass power stations that opened in Gifu in the 2010s created a market for the tops, branches and crooked logs once left in the forest.",
            ja:"熱や電気のために燃やすチップ、樹皮、おが粉、ペレット、低質の丸太。二〇一〇年代に岐阜県で稼働したバイオマス発電所は、かつて山に捨てられた梢や枝、曲がった丸太に市場を生んだ。",
            zh:"木質生質能：為產熱發電而燃燒的木片、樹皮、鋸屑、顆粒燃料與低質原木。2010 年代岐阜縣啟用的生質能發電廠，為過去棄置山中的樹梢、枝條與彎曲原木創造了市場。" } },
        { r:"momi",
          jp:"樅・モミ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Abies firma, the momi fir of warm mid-slopes and shrine groves. Its wood is white, soft and odourless, so it was the choice for boxes, coffins and food containers, and today for concrete formwork.",
            ja:"Abies firma。暖かい山腹や社叢に育つ。材は白く柔らかく、においがないため、箱や棺、食品の容器に選ばれ、いまはコンクリートの型枠にも使われる。",
            zh:"日本冷杉（Abies firma）：生於溫暖山腰與神社林。木材白、軟而無氣味，因此自古用於木箱、棺木與食品容器，今日也用作混凝土模板。" } },
        { r:"morinos",
          jp:"森林総合教育センター morinos",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Gifu's forest education centre, opened in 2020 on the campus of the Gifu Academy of Forest Science and Culture in Mino — “an entrance to the forest”, built of local timber to a concept by the architect Kuma Kengo, with programmes in the teaching forest around it.",
            ja:"美濃市の岐阜県立森林文化アカデミーの構内に二〇二〇年に開かれた森林総合教育センター。「森の入り口」を掲げ、建築家隈研吾のコンセプトにより地元の木で建てられ、まわりの演習林でさまざまな活動を行う。",
            zh:"morinos：2020 年在美濃市岐阜縣立森林文化學院校園內開設的森林綜合教育中心，自稱「森林的入口」，依建築師隈研吾的概念以在地木材建造，並在周圍的演習林舉辦各種活動。" } },
        { r:"mori no yōchien",
          jp:"森のようちえん",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"A forest kindergarten, an idea from Denmark in the 1950s: small children spend most of the day outdoors in all weathers, with adults who guide rather than direct. In Gifu the prefecture's forestry department gives an award to forest kindergartens.",
            ja:"森のようちえん。一九五〇年代のデンマークに始まる考えで、小さな子どもが天候にかかわらず一日の大半を野外で過ごし、大人は指図するより見守る。岐阜県では林政の部局が森のようちえんの表彰を行う。",
            zh:"森林幼兒園：源自 1950 年代丹麥的理念，幼兒不論天候，一天大部分時間都在戶外度過，大人引導而不指揮。在岐阜，由縣府林政部門頒獎表揚森林幼兒園。" } },
        { r:"moromi", jp:"醪", cat:GIFU.GC.sake,
  d:{en:"The main fermenting mash, built up in three additions over four days.",ja:"発酵中の主な醪。四日かけて三段で仕込む。",zh:"發酵中的主醪，分三次、歷時四天投料建立。"} },
        { r:"mōsōchiku",
          jp:"孟宗竹・モウソウチク",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Phyllostachys edulis, the largest Japanese bamboo, generally said to have been introduced from China in the eighteenth century, and grown for its spring shoots. Unmanaged, its groves spread by rhizome into neighbouring forest and fields, one of the most visible signs of satoyama abandonment.",
            ja:"Phyllostachys edulis。日本最大の竹で、十八世紀に中国から入ったとされ、春のタケノコのために植えられた。手入れがなくなると地下茎で周りの林や畑に広がり、里山の放置を最も目に見える形で示すものの一つになった。",
            zh:"孟宗竹（Phyllostachys edulis）：日本最大的竹種，一般認為於 18 世紀自中國引進，為採春筍而栽植。無人管理時會以地下莖蔓延到周邊森林與田地，成為里山荒廢最顯眼的徵兆之一。" } },
        { r:"motokuchi / suekuchi",
          jp:"元口・末口",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The butt end and the top end of a log. Logs are measured and priced by their top-end diameter under bark, the largest square the whole length can yield; in a traditional building a post is set butt end down, as the tree stood.",
            ja:"丸太の根元側の端と梢側の端。丸太は、全長から取れる最大の角を決める末口の皮なしの径で測られ値がつく。伝統的な建物では、柱は木が立っていたとおり元口を下にして立てる。",
            zh:"元口與末口：原木靠根部的一端與靠樹梢的一端。原木以末口去皮直徑計量與定價，因為它決定整根長度可取得的最大方材；傳統建築中，柱子依樹木原本站立的方向，元口朝下豎立。" } },
        { r:"mubushi",
          jp:"無節",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Knot-free: the top appearance grade for visible timber, with no knots on the graded faces. It can cost many times as much as ordinary first-grade timber, and only comes from the outer wood of large, carefully pruned trees.",
            ja:"見える材の最上の見た目の等級で、格付けする面に節が一つもないもの。ふつうの一等材の何倍もの値がつき、丹念に枝打ちされた大径木の外側からしか取れない。",
            zh:"無節：外露木材的最高外觀等級，受評面上完全無節。價格可達一般一等材的數倍，只能從經細心修枝的大徑木外圍取得。" } },
        { r:"muku",
          jp:"無垢",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"Solid wood: every part is one piece of timber through its thickness, as opposed to veneer on a core. It can be sanded and refinished many times and moves most with the seasons; Japanese labels say muku or mukuzai.",
            ja:"無垢材。部材がその厚み全体で一枚の木であること。芯材に突板を張ったものとは区別される。何度でも削り直して塗り直せるが、季節による伸び縮みはいちばん大きい。表示では「無垢」「無垢材」と書かれる。",
            zh:"實木：每個部件在整個厚度上都是一整塊木材，有別於芯材表面貼薄木片者。可多次砂磨重塗，但隨季節伸縮最大；日本的標示寫作「無垢」或「無垢材」。" } },
        { r:"munafuda",
          jp:"棟札",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"A plank inscribed with the date, the owner and the master carpenter, fixed high in the roof when a building is raised or repaired. Munafuda are one of the main sources for dating old buildings, and how many Hida carpenters' names have come down to us.",
            ja:"建物を建てたり直したりしたとき、年月日、施主、棟梁の名を記して屋根裏の高いところに打ちつける板。古い建物の年代を知る主な手がかりで、飛騨の大工の名の多くもこれによって伝わる。",
            zh:"棟札：建造或修繕建築時，寫上日期、屋主與棟梁（大木匠）姓名，釘在屋頂高處的木板。它是判定古建築年代的主要依據之一，許多飛驒木匠的名字也因此流傳下來。" } },
        { r:"muro",
          jp:"室",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"The damp cupboard or small room in which lacquerers cure their work, kept at about 20–30 °C and 70–85 per cent humidity. Lacquer needs moisture to harden; in a dry room it stays tacky for days.",
            ja:"塗師が漆を硬化させる湿った戸棚や小部屋。約20〜30℃、湿度70〜85％に保つ。漆は湿気がなければ固まらず、乾いた部屋では何日もべたついたままである。",
            zh:"室：漆匠讓作品硬化的潮濕櫃子或小房間，保持約 20–30 °C、濕度 70–85%。漆需要濕氣才能硬化，在乾燥的房間裡會黏手好幾天。" } },
        { r:"musical instrument certificate",
          jp:"楽器証明書",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A CITES document created by the Parties in 2013 (Resolution 16.8) and valid for three years, which lets a musician cross borders repeatedly with a personal instrument containing listed wood, such as Brazilian rosewood, for non-commercial purposes.",
            ja:"ワシントン条約の締約国が二〇一三年につくった証明書（決議16.8）で、三年間有効。ブラジリアン・ローズウッドなど掲載種の木を含む自分の楽器を、商業目的でなく持って何度も国境を越えるためのもの。",
            zh:"樂器證明書：華盛頓公約締約方於 2013 年設立的文件（第 16.8 號決議），效期三年，讓音樂家能攜帶含有巴西玫瑰木等列名木材的個人樂器，以非商業目的多次跨越國境。" } },
        { r:"nagadō-daiko",
          jp:"長胴太鼓",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The classic Japanese drum, its long body hollowed from a single section of log and headed with cowhide tacked over each end. Keyaki is the prized wood: its heavy, stiff shell reflects the energy of the heads back into them for a long, deep note.",
            ja:"日本の代表的な太鼓。丸太を一本くりぬいた長い胴の両側に牛皮を鋲で張る。ケヤキがもっとも尊ばれ、重く硬い胴が皮の振動を跳ね返して、長く深い音を生む。",
            zh:"長胴太鼓：日本代表性的大鼓，鼓身由一段圓木整塊挖空，兩端以鉚釘蒙上牛皮。以櫸木最為珍貴，其沉重剛硬的鼓身把鼓皮的能量反射回去，發出悠長深沉的聲音。" } },
        { r:"Nagara sugi",
          jp:"長良杉",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"The brand sugi of the Nagara River basin in Gujō and Mino: even grain with thick latewood, a mixed red-and-white heart (genpei) and a fine, soft feel. Local mills favour slow natural drying to keep its colour.",
            ja:"郡上や美濃など長良川流域の銘柄スギ。木目がそろって晩材が厚く、赤と白の入りまじった源平の心材をもち、肌ざわりが細かく柔らかい。地元の製材所は色を保つため、ゆっくりとした天然乾燥を好む。",
            zh:"長良杉：郡上、美濃等長良川流域的品牌柳杉。紋理均勻、晚材厚實，心材紅白相間（源平），觸感細膩柔軟。當地製材所偏好緩慢的自然乾燥以保留色澤。" } },
        { r:"nagashizuki",
          jp:"流し漉き",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Japan's characteristic papermaking method: the maker scoops fibre suspension onto a flexible bamboo screen and rocks it again and again, so that the long fibres interlock before the excess is thrown off. Mino makers rock in both directions, for an even sheet.",
            ja:"日本独特の紙すきの方法。紙料液を竹の簀ですくい、何度も揺すって長い繊維を絡ませてから余りを捨てる。美濃の職人は縦にも横にも揺すり、むらのない紙をつくる。",
            zh:"流漉：日本特有的抄紙法。以富彈性的竹簾舀起紙料液，反覆搖動使長纖維交織，再把多餘的紙料倒掉。美濃匠人前後左右兩向搖動，抄出均勻的紙。" } },
        { r:"naguri",
          jp:"名栗",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"A surface of shallow, overlapping facets cut with a chōna adze — once simply a way of dressing beams, now a decorative finish for floors, handrails and doors. The facets give grip underfoot and catch the light.",
            ja:"手斧（ちょうな）ではつった浅い削り跡を重ねた面。もとは梁などを整える方法にすぎなかったが、いまは床、手すり、扉の意匠として使われる。凹凸が足もとの滑り止めとなり、光をとらえる。",
            zh:"名栗：以手斧削出層層淺凹面的表面。原本只是修整樑木的方法，如今用作地板、扶手與門的裝飾；凹凸面踩起來止滑，也會捕捉光線。" } },
        { r:"Nakasendō", jp:"中山道", cat:GIFU.GC.history,
  d:{en:"The inland highway between Edo and Kyoto, which crossed Mino through sixteen post towns.",ja:"江戸と京を結ぶ内陸の街道で、美濃を十六の宿場で横切った。",zh:"連接江戶與京都的內陸大道，以十六個宿場穿越美濃。"} },
        { r:"nan'yōzai",
          jp:"南洋材・ラワン",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"“South Seas timber”: tropical hardwood logs from Southeast Asia, lauan above all, the raw material of Japanese plywood for decades. When producing countries restricted log exports, Japanese mills turned slowly to domestic conifers.",
            ja:"東南アジアの熱帯広葉樹、とりわけラワンの丸太で、何十年も日本の合板の原料であった。生産国が丸太の輸出を規制すると、日本の合板工場はゆっくりと国産の針葉樹へ転換した。",
            zh:"南洋材：來自東南亞的熱帶闊葉原木，尤以柳安為主，數十年來是日本合板的原料。產地國限制原木出口後，日本合板廠才逐步轉向國產針葉樹。" } },
        { r:"naragare",
          jp:"ナラ枯れ",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Oak wilt: the death of large oaks, mizunara above all, from a fungus (Raffaelea quercivora) carried by the ambrosia beetle kashinonaga-kikuimushi. In Gifu it was first found in 1996 in the upper Ibi valley, peaked in fiscal 2010 and has since declined.",
            ja:"カシノナガキクイムシが運ぶナラ菌（Raffaelea quercivora）によって、ミズナラをはじめとする大きなナラ類が枯れる病気。岐阜県では一九九六年に揖斐川上流で初めて確認され、二〇一〇年度を頂点にその後は減っている。",
            zh:"櫟樹枯萎病（ナラ枯れ）：由長小蠹（カシノナガキクイムシ）攜帶的真菌 Raffaelea quercivora 造成大型櫟樹枯死，其中以水楢最為嚴重。岐阜縣於 1996 年首次在揖斐川上游發現，2010 年度達到高峰，之後逐漸減少。" } },
        { r:"narai senban",
          jp:"倣い旋盤",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"A copying lathe, whose cutter follows a template to turn identical chair legs and spindles one after another. With CNC routers it does the shaping in Hida's chair factories, while fitting, assembly and finishing remain largely hand work.",
            ja:"倣い旋盤。型をなぞって刃物が動き、同じ形の椅子の脚や背棒を次々に削り出す機械。飛騨の椅子工場ではNCルーターとともに成形を受け持ち、組み立てや仕上げの多くはいまも手仕事である。",
            zh:"仿形車床：刀具沿樣板移動，連續車出相同椅腳與背棒的機器。在飛驒的椅子工廠中，它與 CNC 雕刻機負責成形，而組裝與塗裝多半仍靠手工。" } },
        { r:"neck",
          jp:"ネック",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The long wooden arm that carries the fingerboard and resists the pull of the strings, usually of mahogany or maple and sometimes laminated for stability. It is glued or bolted to the body at the heel and contains the truss rod.",
            ja:"指板をのせ、弦の張力に耐える長い木の部分。マホガニーやメイプルが多く、安定のために数枚を貼り合わせることもある。ヒールでボディに接着またはボルトで留められ、中にトラスロッドが通る。",
            zh:"琴頸：承載指板並抵抗琴弦拉力的長條木件，多用桃花心木或楓木，有時以多片膠合增加穩定。於琴跟處與琴身膠合或以螺栓固定，內藏調整桿。" } },
        { r:"neck reset",
          jp:"ネックリセット",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The repair that restores the neck angle when, after decades of string tension, the top has bulged and the action can no longer be lowered at the saddle: the neck is steamed or unbolted off, the heel re-cut, and the neck refitted and set up.",
            ja:"何十年も弦の張力を受けて表板がふくらみ、サドルを下げても弦高が下がらなくなったとき、ネックの仕込み角を戻す修理。蒸気でネックを外すかボルトを抜き、ヒールを削り直して付け直し、調整する。",
            zh:"琴頸重設：經數十年弦張力後面板鼓起、降低下弦枕也無法壓低弦距時，恢復琴頸角度的修理。以蒸氣拆下或卸下螺栓取下琴頸，重削琴跟後裝回並重新調整。" } },
        { r:"nenrin",
          jp:"年輪",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Annual rings: each a pale band of early wood grown in spring and a darker band of late wood grown in summer. Narrow, even rings — two to three millimetres in Tōnō hinoki — mean slow growth and were what the Japanese market paid for.",
            ja:"年輪。春に育つ淡い早材と、夏に育つ濃い晩材の帯が一組になる。東濃ひのきの二〜三ミリのような細かくそろった年輪はゆっくり育った証しで、日本の市場はまさにそれに値をつけてきた。",
            zh:"年輪：由春季形成的淡色早材與夏季形成的深色晚材組成。細密均勻的年輪（如東濃扁柏的 2 至 3 公釐）代表生長緩慢，正是日本市場願意高價收購的特質。" } },
        { r:"nenryō kakumei",
          jp:"燃料革命",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The fuel revolution of the 1950s and 1960s, when oil, gas and electricity replaced firewood and charcoal in Japanese homes. It ended the charcoal economy of the mountain villages and left coppice woods and satoyama unmanaged.",
            ja:"一九五〇〜一九六〇年代に、石油、ガス、電気が家庭の薪や炭にとって代わった燃料革命。山村の炭の経済を終わらせ、薪炭林や里山を手入れされないままにした。",
            zh:"燃料革命：1950 至 1960 年代，石油、瓦斯與電力取代日本家庭的柴薪與木炭。它終結了山村的木炭經濟，也讓薪炭林與里山無人照管。" } },
        { r:"Neodani dansō", jp:"根尾谷断層", cat:GIFU.GC.land,
  d:{en:"The fault that moved in the Nōbi earthquake of 1891, leaving a scarp at Midori in Motosu.",ja:"1891年の濃尾地震で動いた断層。本巣市水鳥に断層崖を残した。",zh:"1891 年濃尾地震時錯動的斷層，在本巢市水鳥留下斷層崖。"} },
        { r:"neri", jp:"ねり", cat:GIFU.GC.papercraft,
  d:{en:"The mucilage from the root of tororo-aoi that keeps the fibres suspended in the vat.",ja:"トロロアオイの根からとる粘り。漉き舟のなかで繊維を浮かせておく。",zh:"取自黃蜀葵根部的黏液，讓纖維懸浮在紙槽中。"} },
        { r:"neso",
          jp:"ネソ",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"Pliable young stems of mansaku (witch hazel), twisted and used as ties to lash the roof timbers of gasshō houses — seven hundred to a thousand for a single house. They tighten as they dry.",
            ja:"マンサクの若い枝をねじって柔らかくし、合掌造りの屋根材を結ぶのに使うもの。一棟に七百から千本も使う。乾くと締まる。",
            zh:"「ネソ」：將金縷梅柔韌的嫩枝扭軟，用來綑綁合掌造屋頂構材，一棟房屋要用七百到一千根。枝條乾燥後會收緊。" } },
        { r:"netsuke",
          jp:"根付",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A small carved toggle that secured a pouch or case to the sash of a kimono. Matsuda Sukenaga (1800–1871), founder of Ittōbori, was a netsuke carver; when Western dress made netsuke obsolete, his style passed to figurines and souvenirs.",
            ja:"印籠や煙草入れを着物の帯に留めるための小さな彫刻の留め具。一刀彫の祖とされる松田亮長（一八〇〇〜一八七一年）は根付師であった。洋服が広まって根付がすたれると、その作風は置物や土産物へ移った。",
            zh:"把藥盒或菸袋繫在和服腰帶上的小型雕刻扣件。一刀雕的創始者松田亮長（1800–1871 年）即是根付雕刻師；西服普及使根付式微後，他的風格轉向擺飾與紀念品。" } },
        { r:"nezuko",
          jp:"鼠子・ネズコ（クロベ）",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Thuja standishii, also called kurobe, one of the Kiso five trees, of rocky ridges and subalpine forest in Hida. Light, aromatic and dark-hearted, it was used for ceilings, joinery and geta, and its bark for fire-cord.",
            ja:"Thuja standishii。クロベとも呼ぶ木曽五木の一つで、飛騨の岩尾根や亜高山の森に育つ。軽く香り、心材は暗色。天井や建具、下駄に使われ、樹皮は火縄にされた。",
            zh:"香柏（黑檜，Thuja standishii）：又稱クロベ，木曾五木之一，生於飛驒的岩稜與亞高山森林。材輕、有香氣、心材色深，用於天花板、門窗與木屐，樹皮曾製成火繩。" } },
        { r:"nigori", jp:"にごり酒", cat:GIFU.GC.sake,
  d:{en:"Cloudy sake, strained through a coarse mesh so that some lees remain; legally sake.",ja:"目の粗い布でこし、粕の一部を残した白い酒。法律上は清酒。",zh:"以粗網過濾、保留部分酒粕的白濁清酒；法律上屬於清酒。"} },
        { r:"nijirin",
          jp:"二次林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Secondary forest: woodland that has grown back after cutting, fire or the abandonment of farmland. The oak and chestnut coppice of the Mino hills, cut every fifteen to twenty-five years for fuel until the 1960s, is the typical example.",
            ja:"伐採や火災、耕作放棄のあとに再生した森。一九六〇年代まで燃料用に十五〜二十五年ごとに伐られていた美濃の丘陵のコナラやクリの林が典型である。",
            zh:"次生林：在砍伐、火災或農地廢耕後重新長回的森林。美濃丘陵的枹櫟與栗樹林直到 1960 年代仍每隔 15 至 25 年砍伐作燃料，是典型的例子。" } },
        { r:"nikawa",
          jp:"膠",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Hide glue, made from animal skins and bones and applied hot. It sets hard and glassy, transmits vibration well and can be released with heat and moisture for repair, which is why many luthiers prefer it to modern aliphatic-resin glues.",
            ja:"動物の皮や骨からつくり、温めて使う接着剤。固まると硬くガラスのようになり、振動をよく伝え、熱と水分で外せるので修理しやすい。多くの弦楽器のつくり手が現代の木工用接着剤よりこれを好む理由である。",
            zh:"膠（動物膠）：以動物皮骨製成、加熱使用的接著劑。凝固後堅硬如玻璃，傳導振動良好，又能以熱與水分拆開以便修理，因此許多製琴師比起現代的脂肪族樹脂膠更偏愛它。" } },
        { r:"ningen kokuhō", jp:"人間国宝", cat:GIFU.GC.papercraft,
  d:{en:"“Living National Treasure”: the popular name for a holder of an Important Intangible Cultural Property.",ja:"重要無形文化財の保持者の通称。",zh:"「人間國寶」：重要無形文化財保持者的通稱。"} },
        { r:"noborigama", jp:"登窯", cat:GIFU.GC.papercraft,
  d:{en:"The multi-chamber climbing kiln, which reached Mino from Karatsu around 1600.",ja:"連房式の登窯。1600年ごろ唐津から美濃へ伝わった。",zh:"多室相連的登窯，約 1600 年由唐津傳入美濃。"} },
        { r:"Nōhi ryūmongan", jp:"濃飛流紋岩", cat:GIFU.GC.land,
  d:{en:"The rhyolite laid down by enormous eruptions at the end of the Cretaceous across central Gifu.",ja:"白亜紀の終わりに巨大な噴火が岐阜の中央部に積もらせた流紋岩。",zh:"白堊紀末期巨大火山噴發堆積在岐阜中部的流紋岩。"} },
        { r:"nurimono",
          jp:"塗物",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Coated lacquerware: layers of ground, black or vermilion lacquer built up over a wooden core until the wood disappears altogether — the opposite approach to Shunkei and fuki-urushi, which let the grain show.",
            ja:"塗物。木の素地の上に下地、黒漆、朱漆を塗り重ね、木がまったく見えなくなるまで仕上げた漆器。木目を見せる春慶や拭き漆とは逆の考え方である。",
            zh:"塗物：在木胎上層層塗覆底漆、黑漆或朱漆，直到完全看不見木頭的漆器——與透出木紋的春慶和擦漆恰好相反。" } },
        { r:"nurinaoshi",
          jp:"塗り直し",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Relacquering: a worn lacquer bowl or tray goes back to the lacquerer, who removes damaged coats, repairs the ground and applies new lacquer. Good urushi ware can be renewed like this several times in a lifetime.",
            ja:"塗り直し。すり減った漆の椀や盆を塗師に戻すと、傷んだ層を落とし、下地を直して新しく漆を塗ってくれる。よい漆器は一生のうちに何度もこうしてよみがえる。",
            zh:"重新上漆：把磨損的漆碗或托盤送回漆匠處，去除受損漆層、修補底層後重新塗漆。好的漆器一生可如此翻新好幾次。" } },
        { r:"nushi",
          jp:"塗師",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"The lacquerer, who prepares, colours and lacquers the wooden base made by the kijishi. In Hida Shunkei the nushi stains the wood yellow or red, seals it and builds up transparent Shunkei lacquer in stages, curing each coat in a humid room.",
            ja:"塗師。木地師がつくった素地を整え、色をつけ、漆を塗る職人。飛騨春慶では木を黄や赤に染め、目を止め、透明な春慶漆を段階を追って塗り重ね、そのたびに湿った室で硬化させる。",
            zh:"塗師：將木地師製作的木胎整理、著色並上漆的漆匠。在飛驒春慶中，塗師將木材染成黃色或紅色，封底後分階段塗上透明的春慶漆，每一層都在潮濕的室中硬化。" } },
        { r:"nut",
          jp:"ナット",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The small slotted piece at the head end of the fingerboard that sets the spacing and height of the strings — traditionally bone, now also plastics and synthetics. Slots cut too deep cause buzzing; too shallow, a stiff action at the first frets.",
            ja:"指板のヘッド側の端にある溝のついた小さな部品で、弦の間隔と高さを決める。伝統的には骨、いまは樹脂や合成材も使う。溝が深すぎればビビり、浅すぎればローポジションの弦高が高くなる。",
            zh:"上弦枕：位於指板琴頭端、刻有弦槽的小零件，決定琴弦間距與高度，傳統用骨材，如今也用塑膠與合成材料。弦槽太深會打弦，太淺則低把位弦距過高。" } },
        { r:"obigane",
          jp:"帯金",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"The thin steel strap clamped with end-stops along the outer face of a steamed blank as it is bent. Because the outer fibres cannot stretch, the neutral axis moves outward and the wood compresses — Thonet's key to bending solid beech without splitting it.",
            ja:"蒸した材を曲げるとき、外側の面に沿って当てる薄い鋼の帯。両端に止めがあり、外側の繊維が伸びられないので中立軸が外へ移り、材は圧縮される。トーネットがブナの無垢材を割らずに曲げた要の工夫である。",
            zh:"彎曲蒸過的木料時，沿外側面夾上的薄鋼帶，兩端設有擋塊。外側纖維無法伸長，中立軸因而外移，木材整體受壓——這是 Thonet 能讓山毛櫸實木彎曲而不裂的關鍵。" } },
        { r:"obinoko",
          jp:"帯鋸・送材車",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Band saw: a thin continuous steel band running over two wheels a metre or more across. In the classic Japanese mill the log is clamped on a carriage (sōzaisha) that runs on rails past the blade, and the sawyer sets it over for each board — a flexible machine for varied, high-value logs.",
            ja:"直径一メートル以上の二つの車輪に掛けた、薄い無端の鋼の帯の鋸。日本の典型的な製材所では、丸太をレールの上を走る送材車に固定して刃の前を往復させ、一枚ごとに送りを決める。一本ずつ違う高価な丸太に向いた柔軟な機械である。",
            zh:"帶鋸：套在兩個直徑 1 公尺以上輪子上的薄型環狀鋼帶鋸。典型的日本製材廠將原木固定在沿軌道行進的送材車上來回通過鋸條，每鋸一片都由鋸工調整進給，是適合處理各具特色、高價原木的靈活機械。" } },
        { r:"OEM",
          jp:"OEM",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Manufacture for another company's brand. Much of Japan's guitar output has always been made this way — for American department stores in the 1960s and Japanese distributors in the 1970s — so a factory's own name rarely appears on its guitars.",
            ja:"相手先ブランドによる製造。日本のギターの多くは昔からこの形でつくられてきた——一九六〇年代にはアメリカの百貨店のため、一九七〇年代には国内の問屋のために。そのため工場の名がギターに出ることはまれである。",
            zh:"代工（OEM）：以他公司品牌生產。日本吉他向來多以此方式製造——1960 年代為美國百貨公司、1970 年代為日本經銷商——因此工廠本身的名稱很少出現在吉他上。" } },
        { r:"ohineri", jp:"おひねり", cat:GIFU.GC.gculture,
  d:{en:"Coins twisted in paper and thrown onto the stage by the audience at a village kabuki performance.",ja:"紙にひねって包んだ小銭。地歌舞伎の客が舞台へ投げる。",zh:"以紙扭包的零錢，地歌舞伎的觀眾會把它拋上舞台。"} },
        { r:"ohitsu",
          jp:"お櫃",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A lidded wooden tub for cooked rice, ideally of sawara, whose neutral smell does not pass into the rice. The wood draws off excess steam while the rice is hot and gives a little back as it cools, keeping the texture.",
            ja:"炊いた飯を移しておく蓋つきの木の器。匂いが移りにくいサワラが最良とされる。熱いうちは余分な湯気を吸い、冷めるにつれて少し返すので、飯の食感が保たれる。",
            zh:"盛放煮好米飯的有蓋木桶，以氣味中性、不會染到米飯的花柏為佳。米飯熱時木材吸走多餘蒸氣，冷卻時再釋回少許，保持口感。" } },
        { r:"oiguchi",
          jp:"追い口",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"“Chasing mouth”: the back cut made on the opposite side, level and slightly above the floor of the notch, stopping short of it to leave the hinge. Wedges go in as soon as there is room, and the feller retreats along a planned escape route.",
            ja:"受け口の反対側から水平に、受け口の底よりやや高く入れる切りこみ。受け口の手前で止めて「つる」を残す。すき間ができしだいくさびを打ちこみ、伐倒者はあらかじめ決めた退避路を下がる。",
            zh:"追口（背切口）：在受口的另一側水平鋸入，位置略高於受口底部，並在抵達受口前停止，以保留鉸鏈。一有空隙便打入楔子，伐木者隨即沿預先規劃的退避路線撤離。" } },
        { r:"oiru shiage",
          jp:"オイル仕上げ",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"An oil finish: drying oil rubbed in, left to soak and wiped off, often topped with wax. It keeps the feel of the wood and can be patched at home, but stains more readily than a film; makers suggest renewing it regularly, and waxing before the rainy season and winter.",
            ja:"オイル仕上げ。乾性油をすりこみ、しみこませて拭き取り、しばしば蝋を重ねる。木の手ざわりを残し、家で部分的に直せるが、塗膜より汚れがしみやすい。つくり手は定期的に塗り直し、梅雨と冬の前に蝋を引くことをすすめる。",
            zh:"油性塗裝：擦入乾性油，待其滲透後拭去，常再上一層蠟。保留木材觸感，在家即可局部修補，但比塗膜更容易染污；製作者建議定期補油，並在梅雨季與冬季前上蠟。" } },
        { r:"oke",
          jp:"桶",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"An open tub or bucket of tapered staves drawn tight by bamboo or copper hoops, with a fixed bottom; wetted in use, the wood swells and seals. Made of sawara, sugi or hinoki for washing rice, bathing, sushi rice and brewing.",
            ja:"テーパーをつけた側板を竹や銅のたがで締め、底を固定した口の開いた器。使うときに濡れると木がふくらみ、水が漏れなくなる。サワラ、スギ、ヒノキでつくり、米とぎ、風呂、寿司飯、醸造に使う。",
            zh:"由錐形側板以竹箍或銅箍束緊、底部固定的開口木桶；使用時沾濕，木材膨脹即可密封。以花柏、柳杉或扁柏製作，用於洗米、沐浴、壽司飯與釀造。" } },
        { r:"okedō-daiko",
          jp:"桶胴太鼓",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A drum built like a bucket, with a body of quartersawn staves of sugi, hinoki or sawara glued edge to edge and heads laced or rope-tensioned. Lighter and cheaper than a carved drum, it can be made in any size and slung from the shoulder.",
            ja:"桶のようにつくる太鼓。スギ、ヒノキ、サワラの柾目の側板を接ぎ合わせて胴とし、皮を紐や縄で締める。くりぬきの太鼓より軽く安く、どんな大きさにもでき、肩から下げて打つこともできる。",
            zh:"桶胴太鼓：像木桶一樣製作的鼓，以柳杉、扁柏或花柏的徑切側板拼成鼓身，鼓皮以繩索拉緊。比挖空鼓身者輕而便宜，可做成任何尺寸，也能掛在肩上邊走邊打。" } },
        { r:"okihiki",
          jp:"御木曳",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The pulling of the Sengū timber into the shrine precincts by the people of Ise — on wagons over land and on sledges through the Isuzu River, to kiyari songs — scheduled for the summers of 2026 and 2027. Towns on the supply route, Nakatsugawa among them, hold their own processions.",
            ja:"遷宮の用材を伊勢の人々が神域へ曳き入れる行事。陸では車で、五十鈴川では橇で、木遣りを歌いながら曳く。二〇二六年と二〇二七年の夏に予定され、中津川など用材の道筋の町もそれぞれの行列を行う。",
            zh:"御木曳：伊勢居民將遷宮用材拖入神域的行事——陸上用木車，在五十鈴川中用木橇，一路唱著木遣歌——預定於 2026 年與 2027 年夏季舉行。中津川等供材沿線城鎮也會舉辦各自的遊行。" } },
        { r:"okoshi-daiko",
          jp:"起し太鼓",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The night-time opening of the Furukawa Festival on 19 April: a great drum on a wooden frame is carried through the streets by hundreds of men while groups with smaller drums on poles try to push in behind it. Recorded since 1831.",
            ja:"四月十九日の夜に古川祭の幕を開ける行事。木の櫓にのせた大太鼓を何百人もの男たちが担いで町を練り、竿につけた小さな付け太鼓の組が、その後ろにつこうと激しく競り合う。一八三一年から記録がある。",
            zh:"起太鼓：4 月 19 日夜間揭開古川祭序幕的活動。數百名男子扛著架在木櫓上的大鼓遊街，扛著綁在竿上小鼓的各組人馬則爭相擠到它後方。自 1831 年起即有紀錄。" } },
        { r:"okuyama",
          jp:"奥山",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"The deep mountains beyond the satoyama: remote forest entered for timber, hunting and mountain worship rather than for daily needs. In Gifu, the upper valleys of Hida and Ura-Kiso and the Hakusan massif.",
            ja:"里山の奥にある深い山。日々の暮らしではなく、用材、狩猟、山岳信仰のために入る遠い森である。岐阜では飛騨や裏木曽の奥地、白山の山塊がこれにあたる。",
            zh:"里山之外的深山：人們並非為日常所需、而是為取木材、狩獵與山岳信仰才進入的偏遠森林。在岐阜，指飛驒與裏木曾的深處以及白山山塊。" } },
        { r:"omote-sugi / ura-sugi",
          jp:"表杉・裏杉",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"The two broad forms of sugi. Omote-sugi grows on the Pacific side with its drier winters; ura-sugi, including ashiu-sugi, is adapted to the heavy snow of the Sea of Japan side, with flexible branches and the habit of rooting where low branches touch the ground. Gifu has both.",
            ja:"スギの二つの大きな型。表杉は冬の乾いた太平洋側に育ち、芦生杉を含む裏杉は日本海側の豪雪に適応して枝がしなやかで、地面にふれた下枝から根を出す。岐阜県には両方がある。",
            zh:"表杉與裏杉：柳杉的兩大類型。表杉生長於冬季乾燥的太平洋側；裏杉（包括芦生杉）則適應日本海側的豪雪，枝條柔韌，下枝觸地處會生根。岐阜兩者皆有。" } },
        { r:"ondo-tori",
          jp:"音頭取り",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The lead singer of kiyari, who calls the line and times the pull. In a haul the ondo-tori's skill decides whether a log moves smoothly or jerks and stops; the word now means anyone who leads a group effort.",
            ja:"木遣りの先導役で、節を歌い出し、曳く拍子をとる。音頭取りの腕しだいで、丸太がなめらかに動くか、つかえて止まるかが決まる。いまは人々の先に立って事をまとめる人をもいう。",
            zh:"音頭取：木遣的領唱者，起唱並掌握拉拽的節奏。搬運時，原木能否順利前進，取決於音頭取的功力；如今也泛指帶頭號召眾人行事的人。" } },
        { r:"onigurumi",
          jp:"鬼胡桃・オニグルミ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Juglans mandshurica var. sachalinensis, Japanese walnut of the riversides. Medium-hard and warm brown, lighter than American black walnut, it is used for furniture, carving and gunstocks; its hard-shelled nuts are eaten in the mountain villages.",
            ja:"Juglans mandshurica var. sachalinensis。川辺に育つ日本のクルミ。中くらいの硬さで温かな茶色、アメリカのブラックウォールナットより軽い。家具、彫刻、銃床に使われ、殻の硬い実は山村で食べられる。",
            zh:"日本胡桃（鬼胡桃，Juglans mandshurica var. sachalinensis）：生於河岸。中等硬度、溫暖褐色，比美國黑胡桃輕，用於家具、雕刻與槍托；殼硬的核果在山村中作為食物。" } },
        { r:"ōsanshōuo", jp:"オオサンショウウオ", cat:GIFU.GC.land,
  d:{en:"The Japanese giant salamander of the upper rivers, a special natural monument.",ja:"川の上流にすむオオサンショウウオ。特別天然記念物。",zh:"棲息於河川上游的日本大鯢，為特別天然紀念物。"} },
        { r:"Palathetic",
          jp:"パラセティック",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Takamine's under-saddle pickup of 1978: a piezo strip split into six elements, one under each string, paired with a preamplifier built into the side of the guitar. An early and influential design that made the Sakashita firm a stage favourite.",
            ja:"タカミネが一九七八年に出したアンダーサドル・ピックアップ。ピエゾを弦ごとに六つの素子に分け、側板に組みこんだプリアンプと組み合わせた。早くて影響の大きい設計で、坂下の会社をステージの定番にした。",
            zh:"Takamine 於 1978 年推出的下弦枕拾音器：壓電條分成六個元件，每條弦各對應一個，並搭配內建於側板的前級。這是早期且影響深遠的設計，使這家坂下的公司成為舞台上的常客。" } },
        { r:"piezo pickup",
          jp:"ピエゾピックアップ",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A pickup that turns pressure into voltage: a thin strip of piezoelectric material under the saddle senses the strings' vibration directly, resists feedback and keeps the acoustic character better than a magnetic pickup in the soundhole.",
            ja:"圧力を電圧に変えるピックアップ。サドルの下の薄い圧電素子が弦の振動を直接とらえ、ハウリングに強く、サウンドホールにつける磁気ピックアップより生音の性格をよく保つ。",
            zh:"壓電拾音器：把壓力轉為電壓的拾音器。下弦枕下方的薄壓電條直接感測琴弦振動，不易產生回授嘯叫，也比裝在音孔的磁性拾音器更能保留原聲特色。" } },
        { r:"pre-Convention",
          jp:"プレ・コンベンション",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Describes a specimen acquired before its species was listed under CITES. It can be traded with a pre-Convention certificate, which is why the date a guitar or a stock of wood was acquired, and the paperwork that proves it, matter so much.",
            ja:"ワシントン条約で種が掲載される前に取得された標本をいう。条約適用前証明書があれば取引できる。ギターや木材をいつ手に入れたか、それを示す書類が重要になるのはこのためである。",
            zh:"公約前（pre-Convention）：指在物種被列入華盛頓公約之前取得的標本。持有公約前證明書即可交易，因此吉他或木料的取得日期與證明文件至關重要。" } },
        { r:"purekatto",
          jp:"プレカット",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Precut: factory cutting of a whole house frame's joints by computer-controlled machines from a digital plan, in hours instead of weeks. It spread from the 1980s, and by the 2010s more than nine-tenths of Japan's timber-frame houses were built this way; it needs dry, accurate timber.",
            ja:"工場で、コンピュータ制御の機械がデジタルの図面から家一軒分の継手・仕口を数時間で加工すること。一九八〇年代から広まり、二〇一〇年代には日本の木造軸組住宅の九割以上がプレカットでつくられるようになった。乾燥した寸法精度の高い材を必要とする。",
            zh:"預切（プレカット）：在工廠以電腦數控機械依數位圖面加工整棟房屋構架的榫接，只需數小時而非數週。自 1980 年代起普及，到 2010 年代日本九成以上的木造軸組住宅採用此法；前提是乾燥且尺寸精確的木材。" } },
        { r:"radiation ratio",
          jp:"放射比",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"How efficiently a vibrating plate turns its motion into sound: the speed of sound along the grain divided by density, which equals √(E/ρ³). Light, stiff woods such as spruce and kiri score highest, which is why they make soundboards.",
            ja:"振動する板がどれだけ効率よく音を放つかの目安で、繊維方向の音速を密度で割った値、すなわち√(E/ρ³)。スプルースや桐のように軽く剛い木ほど高く、それが響板に選ばれる理由である。",
            zh:"聲輻射比：衡量振動板將運動轉為聲音之效率的指標，即順紋聲速除以密度，等於 √(E/ρ³)。雲杉與桐木等輕而剛的木材數值最高，因此被選作響板。" } },
        { r:"raichō", jp:"雷鳥", cat:GIFU.GC.land,
  d:{en:"The rock ptarmigan of the high peaks, the prefectural bird and a special natural monument.",ja:"高山のライチョウ。県の鳥で、特別天然記念物。",zh:"高山上的岩雷鳥，為縣鳥，也是特別天然紀念物。"} },
        { r:"rakkā",
          jp:"ラッカー",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Nitrocellulose lacquer: cellulose nitrate in solvents, drying by evaporation within minutes, sprayed in thin coats. Once the standard factory furniture finish and still the classic finish for fine guitars; Japanese labels keep it strictly apart from urushi.",
            ja:"ラッカー。硝化綿を溶剤に溶かしたもので、溶剤の蒸発により数分で乾き、薄く吹きつけて塗る。かつては工場家具の標準の塗装で、いまも上等なギターの代表的な塗装である。日本の表示では漆とははっきり区別される。",
            zh:"硝基漆（日文「ラッカー」）：將硝化纖維溶於溶劑，靠揮發在數分鐘內乾燥，以噴塗方式薄塗。曾是工廠家具的標準塗裝，至今仍是高級吉他的經典塗裝；日本標示中與「漆」嚴格區分。" } },
        { r:"rakuichi rakuza", jp:"楽市楽座", cat:GIFU.GC.history,
  d:{en:"Free markets and free trade, released from guild monopolies; Nobunaga's decree of 1567 for the market at Kanō is a famous example.",ja:"座の独占から解き放たれた自由な市と商い。1567年の加納の市への信長の制札は名高い例である。",zh:"擺脫行會壟斷的自由市集與自由交易；信長 1567 年頒給加納市場的制札是著名的例子。"} },
        { r:"ramina",
          jp:"ラミナ・フィンガージョイント",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Lamina: one of the dried, graded boards from which glulam and CLT are built. Short laminae are joined end to end by finger joints — interlocking glued tapers — so that knots and defects can be cut out and strong members made from small logs.",
            ja:"集成材やCLTを構成する、乾燥・選別したひき板。短いラミナは、指を組み合わせたような接着継ぎ（フィンガージョイント）で縦につなぐ。節や欠点を切り除き、小径木から強い部材をつくることができる。",
            zh:"層板（ラミナ）：構成集成材與 CLT、經乾燥與分級的板材。短層板以指接（交錯楔形的膠合接頭）縱向接長，可切除節與缺陷，用小徑木製成強度高的構件。" } },
        { r:"reikyū",
          jp:"齢級",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Age class: planted stands counted in five-year steps, class I being years one to five. Gifu's planted forest is a single wave planted from the mid-1950s to the early 1970s; in 2020 its largest class was 56–60 years old and the youngest classes were almost empty.",
            ja:"人工林の林齢を五年きざみで数えた区分で、一齢級は一〜五年生。岐阜県の人工林は一九五〇年代半ばから一九七〇年代初めに植えられた一つの大きな波で、二〇二〇年には五十六〜六十年生の齢級が最大、若い齢級はほとんど空である。",
            zh:"齡級：人工林以每 5 年為一級計算林齡，第 I 齡級為 1 至 5 年生。岐阜的人工林是 1950 年代中期至 1970 年代初期種下的單一波峰；2020 年最大的齡級為 56 至 60 年生，年輕齡級幾乎空白。" } },
        { r:"relief",
          jp:"順反り",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A slight forward bow in the neck, typically a few tenths of a millimetre at mid-neck, that lets the strings vibrate without buzzing. Too much raises the action; a backward bow (gyakuzori) causes buzzing at the low frets.",
            ja:"ネックのわずかな前への反り。ふつうネックの中ほどで〇・数ミリで、弦がビビらずに振動できるようにする。多すぎると弦高が上がり、逆に後ろへ反る「逆反り」では、ローポジションでビビりが出る。",
            zh:"琴頸弧度（日文「順反り」）：琴頸略向前彎，通常在琴頸中段約零點幾公釐，讓琴弦振動時不打弦。弧度太大會使弦距升高；反向後彎（「逆反り」）則會在低把位打弦。" } },
        { r:"retsujō kanbatsu",
          jp:"列状間伐",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Line thinning: removing whole rows of trees — for example one row in three — instead of choosing individual stems. It is quick and lets machines extract along the cleared lines, at the cost of taking good trees with poor ones.",
            ja:"一本ずつ選ぶのではなく、たとえば三列に一列というように列ごと伐る間伐。作業が速く、伐った列に沿って機械で搬出しやすいが、よい木も悪い木も一緒に伐ることになる。",
            zh:"列狀疏伐：不逐株選木，而是整列伐除（例如每 3 列伐 1 列）。作業快速，也便於沿伐開的行列以機械集材，代價是好樹壞樹一併伐去。" } },
        { r:"rigunin",
          jp:"リグニン",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Lignin, the complex phenolic polymer that fills the cell wall, stiffens it, resists water and microbes and glues cells together: about 25–35 per cent of conifer wood and 18–25 per cent of broadleaf. Its breakdown in light turns hinoki to honey.",
            ja:"細胞壁のすき間を埋めて壁を硬くし、水や微生物に抵抗し、細胞どうしを接着する複雑なフェノール性の高分子。針葉樹材の約二五〜三五パーセント、広葉樹材の一八〜二五パーセントを占める。光による分解がヒノキを飴色に変える。",
            zh:"木質素：填充於細胞壁中的複雜酚類高分子，使細胞壁堅硬、抵抗水分與微生物，並黏合相鄰細胞。約占針葉樹材的 25% 至 35%、闊葉樹材的 18% 至 25%。它受光分解正是扁柏轉為琥珀色的原因。" } },
        { r:"rindō",
          jp:"林道",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Forest road: a permanent road built to public standards with national and prefectural funds, giving general access to a forest area. Below it come forestry-only roads (ringyō sen'yōdō) for ten-tonne log trucks and the narrow strip roads of the machines.",
            ja:"国や県の資金で公道に準じた規格でつくる恒久的な道で、森林地域への基幹の通路となる。その下に、十トンの丸太トラックが通る林業専用道と、林業機械のための細い森林作業道がある。",
            zh:"林道：以國家與縣的經費、依公路標準修築的永久道路，是進入森林地區的主幹通道。其下還有供 10 噸運材卡車行駛的林業專用道，以及林業機械用的狹窄作業道。" } },
        { r:"rinzō",
          jp:"輪蔵",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A revolving sutra case: an octagonal wooden bookcase on a central pivot, holding the whole Buddhist canon, which the faithful turn to gain the merit of reading it. The one in the Ankokuji sutra hall, Takayama, is Japan's oldest surviving example.",
            ja:"中心の軸で回る八角形の木の書架に一切経を納めたもの。信者はこれを回して、経をすべて読んだのと同じ功徳を得る。高山の安国寺経蔵のものは、現存する日本最古の例である。",
            zh:"輪藏：以中心軸旋轉、收藏全部佛經的八角形木製經架，信眾轉動它即可得到讀遍經典的功德。高山安國寺經藏內的輪藏是日本現存最古老的一座。" } },
        { r:"rokuro",
          jp:"轆轤",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A lathe for turning wood. In Gifu the word also names the pair of small turned hubs, one fixed and one sliding, at the heart of a paper umbrella; they are turned from egonoki (Japanese snowbell), which holds dozens of slots without splitting.",
            ja:"木を挽くための轆轤。岐阜ではまた、和傘の中心にある一対の小さな挽物の部品——固定したものと滑るもの——も「ろくろ」と呼ぶ。何十もの溝を刻んでも割れないエゴノキで挽く。",
            zh:"轆轤：車木用的旋盤。在岐阜，這個詞也指和傘中心那對車製的小輪軸（一個固定、一個滑動），以能刻出數十道溝槽而不裂的野茉莉（日文エゴノキ）車成。" } },
        { r:"Ryōmen Sukuna", jp:"両面宿儺", cat:GIFU.GC.gculture,
  d:{en:"A two-faced figure of Hida legend, a monster in the court chronicle and a hero in the local temples.",ja:"飛騨の伝説の二つの顔を持つ存在。朝廷の史書では怪物、土地の寺では英雄。",zh:"飛驒傳說中雙面的人物，在朝廷史書中是怪物，在當地寺院裡卻是英雄。"} },
        { r:"saddle",
          jp:"サドル",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The strip of bone or synthetic material set in a slot in the bridge, over which the strings pass their energy to the top. Its height sets the action and its slanted position compensates the intonation; under it sits the piezo pickup of an electro-acoustic.",
            ja:"ブリッジの溝に立てる骨や合成材の細い板で、弦はこれを越えて表板に力を伝える。高さで弦高が決まり、斜めの位置でオクターブを補正する。エレアコでは、この下にピエゾピックアップが入る。",
            zh:"下弦枕：插在琴橋槽內的骨材或合成材料細條，琴弦經由它把能量傳到面板。其高度決定弦距，斜置的位置用來補正音準；電木吉他的壓電拾音器就裝在它下方。" } },
        { r:"sagyōdō",
          jp:"森林作業道",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Strip road: an unpaved track about three metres wide cut by excavator for forestry machines only. Built well — following the contours, with low cut slopes and good drainage — it lasts for decades; built badly, it starts landslides.",
            ja:"林業機械だけが通る、幅三メートルほどの未舗装の道で、バックホウで開設する。等高線に沿い、切土を低くし、排水をきちんとすれば何十年ももつが、つくり方を誤れば崩壊を招く。",
            zh:"森林作業道：以挖土機開設、寬約 3 公尺、僅供林業機械通行的未鋪面道路。順著等高線、邊坡低、排水良好者可使用數十年；施作不當則會引發崩塌。" } },
        { r:"saizōrin",
          jp:"再造林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Replanting after final harvest. In the Forestry Agency's model, establishing and weeding a hectare of sugi costs about ¥1.84 million, roughly twice what the owner nets from selling a fifty-year-old stand, so without subsidy many cut-over sites would never be replanted.",
            ja:"主伐のあとに再び植えること。林野庁の試算では、スギ一ヘクタールの植栽と下刈りに約百八十四万円かかり、五十年生の林を売って所有者の手に残る額のおよそ二倍にあたる。補助がなければ多くの伐採跡地は植えられないままになる。",
            zh:"再造林：主伐後重新栽植。依林野廳的試算，1 公頃柳杉的栽植與除草費用約 184 萬日圓，約為林主出售 50 年生林分後實得收入的兩倍；若無補助，許多伐採跡地將無人重新造林。" } },
        { r:"sakagura · kura", jp:"酒蔵・蔵", cat:GIFU.GC.sake,
  d:{en:"A sake brewery; Gifu has about fifty.",ja:"酒をつくる蔵。岐阜にはおよそ五十ある。",zh:"釀酒的酒藏；岐阜約有五十家。"} },
        { r:"sakaki",
          jp:"榊",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Cleyera japonica, an evergreen shrub whose glossy branches are offered at every Shintō shrine and household altar and set up as the temporary altar (himorogi) of ground-breaking and felling rites. The character, “tree” beside “god”, is a Japanese coinage.",
            ja:"常緑の低木で、つやのある枝をあらゆる神社や神棚に供え、地鎮祭や伐採の祭では仮の祭壇（神籬）とする。「木」に「神」を添えた字は国字である。",
            zh:"榊（紅淡比）：常綠灌木，其光亮的枝條供奉於每座神社與家中神龕，在地鎮祭與伐木祭中也用作臨時祭壇（神籬）。「木」旁加「神」的字形是日本自造的漢字。" } },
        { r:"sanbon-sugi", jp:"三本杉", cat:GIFU.GC.metal,
  d:{en:"“Three cedars”: the repeating hamon of pointed peaks in groups of three, the mark of the Kanemoto line.",ja:"「三本の杉」。尖った山が三つずつ繰り返す刃文で、兼元の系統のしるし。",zh:"「三本杉」：以三個尖峰為一組反覆出現的刃文，是兼元一系的標誌。"} },
        { r:"sankōzai",
          jp:"散孔材",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Diffuse-porous wood, whose small vessels are spread evenly through each ring: beech, maple, katsura, tochi, hōnoki and cherry. Fine and even in texture, these woods turn and carve cleanly and take a smooth finish.",
            ja:"小さな道管が年輪の中に一様に散らばる材。ブナ、カエデ、カツラ、トチ、ホオノキ、サクラなど。肌目が細かく均質で、挽物や彫刻にきれいに刃が通り、なめらかに仕上がる。",
            zh:"散孔材：細小導管均勻分布於整個年輪的木材，如山毛櫸、槭木、連香樹、七葉樹、日本厚朴與櫻木。紋理細緻均勻，車削與雕刻時刀口俐落，表面易於修飾平滑。" } },
        { r:"sanzumi",
          jp:"桟積み",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Stickering: stacking sawn timber on level bearers with thin dry sticks across each layer, exactly above one another, so that air circulates and weight passes straight down. The ends are sealed, the stack roofed and weighted, and samples weighed until they stop getting lighter.",
            ja:"水平な台木の上に製材品を積み、各段のあいだに薄い乾いた桟を上下そろえて渡し、風を通して重さをまっすぐ下へ伝える積み方。木口を塗ってふさぎ、屋根と重しをのせ、試験材の重さが減らなくなるまで量りつづける。",
            zh:"桟積（隔條堆疊）：將製材品堆在水平的墊木上，每層之間放置上下對齊的乾燥細木條，使空氣流通、重量垂直傳遞。端面封塗，堆頂加蓋並壓重，定期秤量試材直到重量不再下降。" } },
        { r:"sarubobo", jp:"さるぼぼ", cat:GIFU.GC.gculture,
  d:{en:"“Monkey baby”: a faceless cloth doll of Hida, a charm for children and safe childbirth.",ja:"「猿の赤ん坊」。顔のない飛騨の布人形で、子どもと安産のお守り。",zh:"「猴寶寶」：飛驒沒有五官的布娃娃，是保佑孩子與順產的護身符。"} },
        { r:"sashaku",
          jp:"差尺",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"The difference between the height of a table top and the height of a chair seat. Japanese makers aim for about a third of the sitter's seated height — roughly 27–30 cm — so a table 70 cm high wants a seat of about 40–43 cm.",
            ja:"テーブルの天板の高さと椅子の座面の高さの差。日本のつくり手は座高のおよそ三分の一、約27〜30cmを目安にする。高さ70cmのテーブルなら、座面は約40〜43cmとなる。",
            zh:"桌面高度與椅面高度之差。日本製作者以坐高的約三分之一為準，大約 27–30 公分；桌高 70 公分時，椅面約需 40–43 公分。" } },
        { r:"sashigane", jp:"差金", cat:GIFU.GC.joinery,
  d:{en:"The carpenter's steel square, with a second scale longer by the square root of two for sizing beams from logs.",ja:"大工の曲尺。裏に√2倍の目盛りがあり、丸太から取れる角材の寸法がわかる。",zh:"木匠的曲尺，背面有長度為根號二倍的刻度，可從原木直徑讀出可取方材的尺寸。"} },
        { r:"sashimono",
          jp:"指物",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"Cabinetmaking with cut joints: boxes, chests, stands and small furniture assembled from boards with tenons, dovetails and mitres, traditionally without nails or visible metal. The maker is the sashimono-shi; in Gifu, kiri chests and hinoki boxes are typical work.",
            ja:"板を枘、蟻、留めなどで組み、釘や見える金物を使わずに箱、箪笥、台、小さな家具をつくる技。つくり手は指物師。岐阜では桐箪笥やヒノキの箱が代表的な仕事である。",
            zh:"以榫接組合板材的細木工：以榫頭、鳩尾榫、斜接等接合，傳統上不用釘子或外露金屬，製作盒子、衣櫃、台架與小家具。匠人稱「指物師」；在岐阜，桐木衣櫃與扁柏木盒是代表作。" } },
        { r:"sasu",
          jp:"叉首",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"The great paired rafters of a gasshō roof. Their sharpened lower ends sit in sockets on the beams of the house below rather than being fixed, so the whole roof can shift slightly under snow and wind without breaking the frame.",
            ja:"合掌の屋根をつくる一対の大きな斜材。とがらせた下端を下の家の梁の受けにのせるだけで固定しないので、屋根全体が雪や風の力でわずかに動いても骨組みが壊れない。",
            zh:"叉首：合掌屋頂成對的巨大斜椽。削尖的下端只是擱在下方房屋樑上的承口中而不固定，讓整個屋頂在積雪與強風下可輕微移動，而屋架不致損壞。" } },
        { r:"satoyama",
          jp:"里山",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"The managed woodland, grassland and water around a village: coppice for fuel, litter raked for compost, grass cut for thatch, all in a mosaic with paddies and ponds. Neither wilderness nor plantation, its biodiversity depends on regular human disturbance.",
            ja:"集落のまわりで手入れされてきた林・草地・水辺。燃料をとる雑木林、堆肥にする落ち葉かき、屋根を葺く茅刈りが、田やため池とモザイク状に組み合わさる。原生林でも人工林でもなく、その生物多様性は定期的な人の手入れに支えられてきた。",
            zh:"村落周圍經人長期經營的林地、草地與水域：供燃料的雜木林、耙取落葉作堆肥、割草葺屋頂，與水田、池塘交織成鑲嵌景觀。它既非原始林也非人工林，其生物多樣性仰賴定期的人為干擾。" } },
        { r:"sawara",
          jp:"椹・サワラ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Chamaecyparis pisifera, one of the Kiso five trees, of damp valley floors. Lighter, softer and less scented than hinoki, water-resistant and cleanly splitting, it is the wood of rice tubs, buckets and the bases of Hida Shunkei lacquerware.",
            ja:"Chamaecyparis pisifera。木曽五木の一つで、湿った谷底に生える。ヒノキより軽く柔らかく香りは弱いが、水に強くきれいに割れる。飯櫃や桶、飛騨春慶の木地に使われる。",
            zh:"花柏（Chamaecyparis pisifera）：木曾五木之一，生於潮濕谷底。比扁柏輕軟、香氣淡，但耐水且易於順紋劈開，用於飯桶、水桶與飛驒春慶漆器的木胎。" } },
        { r:"scale length",
          jp:"スケール",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The vibrating length of the open string, from nut to saddle: about 630–650 mm on most steel-string acoustics and 650 mm on a classical guitar. All the fret positions are calculated from it.",
            ja:"ナットからサドルまでの、開放弦の振動する長さ。多くのスチール弦アコースティックで約630〜650mm、クラシックギターで650mm。フレットの位置はすべてこれから計算する。",
            zh:"弦長：從上弦枕到下弦枕的空弦振動長度，多數鋼弦木吉他約 630–650 公釐，古典吉他為 650 公釐。所有琴格位置都依此計算。" } },
        { r:"scalloped bracing",
          jp:"スキャロップド・ブレーシング",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Braces thinned between their ends, scooped into a curve, so that the top can move more freely while staying strong at the glue points — a hallmark of pre-war Martin guitars and of many modern high-end dreadnoughts.",
            ja:"両端のあいだを弓なりに薄く削った力木。接着部の強さを保ちながら表板がよく動くようにする。戦前のマーティンのギターや、現代の多くの高級ドレッドノートの特徴である。",
            zh:"削薄音梁（scalloped）：將音梁兩端之間削成弧形變薄，既保留黏合處強度，又讓面板振動更自由；是戰前 Martin 吉他與許多現代高級 dreadnought 的特徵。" } },
        { r:"seimai buai", jp:"精米歩合", cat:GIFU.GC.sake,
  d:{en:"The polishing ratio: the percentage of each grain left after milling.",ja:"磨いたあとに残る米粒の割合。",zh:"精米步合：磨米後每粒米所剩的百分比。"} },
        { r:"seizai",
          jp:"製材・製材工場",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Sawmilling, and the sawmill. Gifu kept a dense network of small and medium mills rooted in the hinoki trade: it had 169 in FY2021, fifty fewer than in 2016 but still the most of any prefecture, shipping about 148,000 cubic metres, some 55 per cent of it kiln-dried.",
            ja:"丸太を挽いて製品にすること、またその工場。岐阜県はヒノキの取引に根ざした中小の製材所の密な網を保ってきた。二〇二一年度は百六十九工場で、二〇一六年より五十減ったがなお全国最多。出荷量は約十四万八千立方メートルで、その約五十五パーセントが人工乾燥材である。",
            zh:"製材與製材廠：岐阜縣保有植根於扁柏交易、綿密的中小型製材廠網絡。2021 年度共 169 家，比 2016 年減少 50 家，但仍居全國之冠；出貨量約 14.8 萬立方公尺，其中約 55% 為人工乾燥材。" } },
        { r:"Seki Magoroku", jp:"関孫六", cat:GIFU.GC.metal,
  d:{en:"The name of the sixteenth-century smith, now a kitchen-knife brand made in Seki.",ja:"十六世紀の刀匠の名で、いまは関でつくられる包丁の銘柄。",zh:"十六世紀刀匠之名，如今是關出品的菜刀品牌。"} },
        { r:"sen'i hōwaten",
          jp:"繊維飽和点",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Fibre saturation point, around 28–30 per cent moisture content: the cell cavities are empty of free water but the walls are still saturated. Above it, drying changes only weight; below it the walls lose bound water and the wood shrinks and grows stronger.",
            ja:"含水率二十八〜三十パーセントほどで、細胞の内腔の自由水はなくなったが、壁はまだ水で飽和している状態。これより上では乾いても重さが変わるだけだが、下では壁の結合水が抜け、木は縮み、強くなる。",
            zh:"纖維飽和點：含水率約 28% 至 30%，此時細胞腔內的自由水已排出，但細胞壁仍飽含水分。高於此點，乾燥只改變重量；低於此點，細胞壁失去結合水，木材開始收縮並變得更強。" } },
        { r:"senkai mokuri",
          jp:"旋回木理・ねじれ",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Spiral grain: fibres wound helically around the trunk, so that posts sawn from the log twist as they dry. Hinoki is generally straight-grained; larch and some pines spiral strongly, which long kept larch out of house frames.",
            ja:"繊維が幹のまわりにらせん状に巻いている状態で、その丸太から挽いた柱は乾くとねじれる。ヒノキはおおむね通直だが、カラマツや一部のマツは強くねじれ、カラマツが長く軸組に使われなかった理由となった。",
            zh:"旋轉紋理：纖維呈螺旋狀纏繞樹幹，由此鋸出的柱材乾燥時會扭曲。扁柏大多紋理通直；落葉松與部分松樹則扭轉明顯，這也是落葉松長期未被用於住宅構架的原因。" } },
        { r:"serakku",
          jp:"セラック",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Shellac: a resin secreted by the lac insect, Kerria lacca, on trees in India and Thailand, dissolved in alcohol and applied in many thin coats with a pad — the French polish of European cabinetmaking. Deep and beautiful but marked by water, heat and alcohol; used today on some instruments and in restoration.",
            ja:"セラック。インドやタイの木につくラックカイガラムシ（Kerria lacca）が分泌する樹脂をアルコールに溶かし、タンポで薄く何度も塗る。ヨーロッパの家具のフレンチポリッシュである。深く美しいが、水、熱、アルコールで跡がつく。いまは一部の楽器や修復に使われる。",
            zh:"蟲膠（日文「セラック」）：印度與泰國樹上的紫膠蟲（Kerria lacca）分泌的樹脂，溶於酒精後以棉球薄塗多層，即歐洲細木工的「法式拋光」。深邃美麗，但怕水、熱與酒精；如今用於部分樂器與修復。" } },
        { r:"seri",
          jp:"競り・入札",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The log auction: the auctioneer moves from lot to lot, buyers call bids per cubic metre and each lot goes in seconds. Very valuable logs are sold instead by sealed tender (nyūsatsu), with written bids opened together.",
            ja:"丸太のせり。せり人が椪から椪へ移り、買い手が一立方メートルあたりの値を声で競い、数秒で落札される。とくに高価な丸太は、書いた札を一斉に開く入札で売られる。",
            zh:"競標（せり）與投標：拍賣員逐堆移動，買家以每立方公尺單價喊價，每堆數秒即成交。特別高價的原木則採密封投標（入札），書面出價一起開標。" } },
        { r:"serurōsu",
          jp:"セルロース・ヘミセルロース",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Cellulose, the long glucose chains that form crystalline microfibrils and give wood its tensile strength — 40–50 per cent of dry wood — and the hemicelluloses, shorter branched sugars that bind them, hold water and break down first in heat.",
            ja:"セルロースはブドウ糖の長い鎖で、結晶性のミクロフィブリルをつくって引張りの強さを担い、乾いた木の四〇〜五〇パーセントを占める。ヘミセルロースはそれをつなぐ短く枝分かれした糖の鎖で、水を多く抱え、熱では最初に分解する。",
            zh:"纖維素與半纖維素：纖維素是葡萄糖組成的長鏈，形成結晶性微纖維，賦予木材抗拉強度，占乾木的 40% 至 50%；半纖維素是較短、帶分支的糖鏈，將微纖維黏結在一起，含水量高，受熱時最先分解。" } },
        { r:"setup",
          jp:"セットアップ",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"A repairer's basic service: adjusting the truss rod, raising or lowering the saddle, cutting the nut slots and checking intonation, so the guitar plays in tune with a comfortable action. In a climate like Gifu's it is often advised at the change of seasons.",
            ja:"リペアの基本の調整。トラスロッドを回し、サドルを上げ下げし、ナットの溝を切り、オクターブを確かめて、弾きやすい弦高で正しい音程が出るようにする。岐阜のような気候では、季節の変わり目に見てもらうようすすめられることが多い。",
            zh:"調整（setup）：修琴師的基本服務——調整調整桿、升降下弦枕、修整上弦枕弦槽並檢查音準，讓吉他在舒適的弦距下發出正確音高。在岐阜這樣的氣候中，常建議每逢換季檢查一次。" } },
        { r:"sewari",
          jp:"背割り",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The backsplit: a saw kerf cut to the pith along the hidden face of a boxed-heart post and kept open with wedges. As the post dries the kerf opens, relieving the stresses that would otherwise crack the visible faces.",
            ja:"心持ちの柱の見えなくなる面に、髄まで入れる鋸目。くさびで開いておく。柱が乾くにつれてこの切れ目が開き、見える面を割ろうとする応力を逃がす。",
            zh:"背割：在心持柱隱藏面上鋸至髓心的鋸縫，以楔子撐開。柱子乾燥時鋸縫隨之張開，釋放原本會使外露面開裂的應力。" } },
        { r:"shaku",
          jp:"笏",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The flat tablet held by court officials in attendance on the emperor. By Hida tradition, yew from Kuraiyama was presented to the court for shaku from 1159, and the tree was given the first court rank, ichii — hence its common name.",
            ja:"朝廷で天皇の前に出る官人が手に持つ平たい板。飛騨の伝えでは、一一五九年から位山のイチイが笏の材として朝廷に献上され、木は一位の位を授けられた。それが「イチイ」の名の由来という。",
            zh:"笏：朝廷官員覲見天皇時手持的平板。依飛驒傳說，自 1159 年起位山的紫杉被獻給朝廷做笏，此樹因而獲封最高位階「一位」——這就是其名稱的由來。" } },
        { r:"shamisen",
          jp:"三味線",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The three-string lute that reached Japan from the Ryūkyū islands in the sixteenth century. Its long neck decides the price: kōki (red sanders) is the classic top grade, with shitan, karin, kashi and mulberry below; the square body is covered with skin.",
            ja:"十六世紀に琉球から伝わった三弦の楽器。値段を決めるのは長い棹で、紅木が最上とされ、紫檀、花梨、樫、桑がこれに続く。四角い胴には皮を張る。",
            zh:"三味線：16 世紀自琉球傳入日本的三弦樂器。價格取決於長長的琴桿：紅木（紅檀）是經典的最高等級，其次為紫檀、花梨、橿木與桑木；方形琴身蒙上獸皮。" } },
        { r:"shibai-goya",
          jp:"芝居小屋",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A village playhouse for ji-kabuki, built by villagers of their own timber, with a revolving stage, a hanamichi, trap lifts and a cellar. Nine old playhouses survive in Gifu, a prefecture known nationally for its village kabuki, among them the Kashimo Meiji-za of 1894.",
            ja:"村人が自分たちの木で建てた地歌舞伎の芝居小屋。回り舞台、花道、せり、奈落をもつ。地歌舞伎の盛んな土地として全国に知られる岐阜には、古い芝居小屋が九棟残る。一八九四年の加子母の明治座もその一つである。",
            zh:"芝居小屋：村民以自家木材搭建、上演地歌舞伎的鄉村劇場，設有旋轉舞台、花道、升降台與舞台地下室。以地歌舞伎興盛聞名全國的岐阜現存九座老劇場，1894 年落成的加子母明治座即是其一。" } },
        { r:"shihō mubushi",
          jp:"四方無節",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"A post clear of knots on all four faces, the summit of the grading system, which can only come from the pruned outer wood of a large, long-tended tree. Sanpō, nihō and ippō posts are clear on three, two or one faces, and the carpenter turns the clear faces to the room.",
            ja:"四面すべてに節のない柱で、等級の頂点。長年手入れされた大径木の、枝打ち後に育った外側からしか取れない。三方・二方・一方無節はそれぞれ三面・二面・一面が無節で、大工は無節の面を部屋側に向ける。",
            zh:"四方無節：四面皆無節的柱材，是分級體系的頂點，只能從長年撫育、經修枝的大徑木外圍取得。三方、二方、一方無節則分別有三、二、一面無節，木匠會將無節面朝向室內。" } },
        { r:"shika",
          jp:"ニホンジカ・鹿",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Sika deer, now the greatest single threat to regenerating forest in much of Japan: they eat seedlings and young shoots, strip bark from hinoki and sugi in winter and clear the forest floor of the plants that hold the soil. Culled deer are increasingly sold as game (jibie).",
            ja:"ニホンジカ。いまや日本の多くの地域で森の更新を妨げる最大の要因である。苗木や若芽を食べ、冬にはヒノキやスギの樹皮をはぎ、土を押さえる林床の植物を食べ尽くす。捕獲したシカはジビエとして売られることが増えた。",
            zh:"梅花鹿（日本鹿）：如今是日本許多地區阻礙森林更新的最大單一因素——啃食苗木與嫩芽、冬季剝食扁柏與柳杉樹皮，並吃光固土的林床植物。捕獲的鹿也愈來愈常作為野味（jibie）販售。" } },
        { r:"Shikinen Sengū",
          jp:"式年遷宮",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The rebuilding of the Ise shrines every twenty years on adjoining plots, identical in form and entirely new, with the deity moved to the new house; the shrine dates it to 690. The 62nd took place in 2013 and the 63rd is due in 2033, much of its hinoki from Kiso and Ura-Kiso.",
            ja:"伊勢神宮の社殿を二十年ごとに隣の敷地へ同じ形でまったく新しく建て替え、神を新しい社殿へ移す祭。神宮は始まりを六九〇年とする。第六十二回は二〇一三年に行われ、第六十三回は二〇三三年の予定で、ヒノキの多くは木曽と裏木曽から出る。",
            zh:"式年遷宮：伊勢神宮每二十年在相鄰基地以相同形制全新重建社殿，並將神明遷入新殿，神宮將其起始定於 690 年。第 62 回於 2013 年舉行，第 63 回預定於 2033 年，所用扁柏多來自木曾與裏木曾。" } },
        { r:"shikomi-oke",
          jp:"仕込み桶",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A great fermenting vat of sugi staves, some over two metres tall and holding thousands of litres, once used by every sake, soy-sauce and miso maker. Replaced by enamel and steel from the 1960s; revived since the 2010s by a few soy-sauce makers and brewers.",
            ja:"スギの側板でつくる大きな仕込み用の桶。高さ二メートルを超え数千リットル入るものもあり、かつては酒、醤油、味噌の蔵のどこにもあった。一九六〇年代からほうろうやステンレスのタンクに替わったが、二〇一〇年代から醤油の蔵元や酒蔵による小さな復活が進んでいる。",
            zh:"以柳杉側板製成的大型發酵桶，有的高逾 2 公尺、容量數千公升，過去每家酒廠、醬油廠與味噌廠都有。1960 年代起被琺瑯與不鏽鋼槽取代；2010 年代以來，少數醬油廠與酒廠推動了小規模的復興。" } },
        { r:"shimenawa",
          jp:"注連縄",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"A rope of twisted rice straw, hung with zigzag paper streamers, that marks a sacred place or object — a shrine gate, a great rock, a sacred tree. A shimenawa round a trunk is the sign that the tree must not be cut.",
            ja:"稲わらをなった縄に紙垂を下げたもので、鳥居、大岩、神木など聖なる場所やものを示す。幹に注連縄が巻かれていれば、その木は伐ってはならないしるしである。",
            zh:"注連繩：以稻草搓成、掛有鋸齒狀紙垂的繩索，標示鳥居、巨岩、神木等神聖的場所或物體。樹幹上繞著注連繩，就表示這棵樹不可砍伐。" } },
        { r:"shin",
          jp:"心・髄",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Pith: the soft core at the centre of the trunk. Timber containing it (shinmochi) checks as it dries because wood shrinks twice as much around the rings as across them; the juvenile wood near it is also weaker and less stable.",
            ja:"髄。幹の中心の柔らかい芯。これを含む材（心持ち材）は、年輪に沿った方向の収縮が半径方向の二倍あるため乾くと割れる。髄の近くの未成熟材も弱く、狂いやすい。",
            zh:"髓心：樹幹中心柔軟的芯。含髓心的木材（心持材）因弦向收縮為徑向的兩倍，乾燥時會開裂；髓心附近的幼齡材強度也較低、較不穩定。" } },
        { r:"shinboku",
          jp:"神木",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"A sacred tree, usually within or beside a shrine and marked with a straw rope (shimenawa); most are cedars, camphors, zelkovas or ginkgoes of great age. In Gifu the honorific goshinboku is also used for the trees chosen for the Ise shrines.",
            ja:"神木。多くは神社の境内やそばに立ち、注連縄を張られる。杉、楠、欅、銀杏の老木が多い。岐阜では、伊勢神宮のために選ばれた木も敬って御神木と呼ぶ。",
            zh:"神木：多位於神社境內或旁邊、繫有注連繩的神聖樹木，大多是古老的柳杉、樟樹、櫸木或銀杏。在岐阜，為伊勢神宮選定的樹木也尊稱為「御神木」。" } },
        { r:"shingetsu bassai",
          jp:"新月伐採",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"New-moon felling: a European belief, taken up by some Japanese makers since the 2000s, that trees cut in the waning moon of winter are more durable and less prone to insects. Scientific tests have found little or no effect beyond that of winter felling itself.",
            ja:"冬の下弦から新月のころに伐った木は長もちし虫がつきにくいという、ヨーロッパの言い伝えで、二〇〇〇年代から日本でも取り入れる作り手がいる。科学的な試験では、冬に伐ること自体の効果以上の差はほとんど見つかっていない。",
            zh:"新月伐採：源自歐洲的說法，認為在冬季月虧時伐下的樹木更耐久、較不招蟲，2000 年代起部分日本業者跟進採用。科學試驗顯示，除了冬伐本身的效果之外，幾乎沒有額外差異。" } },
        { r:"shinkabe",
          jp:"真壁",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A wall built between the posts, so that the posts and beams remain visible in the room, as in traditional Japanese interiors. Its opposite, ōkabe, covers the frame completely, as in most modern houses.",
            ja:"柱と柱のあいだに壁を納め、柱や梁が部屋に見える壁。伝統的な和室のつくりである。対する大壁は、多くの現代の住宅のように骨組みをすっかり覆う。",
            zh:"真壁：牆體砌在柱與柱之間，使柱樑外露於室內，是日本傳統和室的做法。相對的「大壁」則如多數現代住宅般將骨架完全包覆。" } },
        { r:"shinmochi-zai",
          jp:"心持ち材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Boxed-heart timber: a post with the pith at its centre, the standard product of small plantation logs. It is strong but checks as it dries, hence the backsplit (sewari) or the high-temperature set.",
            ja:"断面の中心に髄を含む柱材で、小径の人工林材から取る標準的な製品。強いが乾くと割れるため、背割りを入れるか高温セット乾燥を行う。",
            zh:"心持材：斷面中心含有髓心的柱材，是小徑人工林原木的標準產品。強度高，但乾燥時會開裂，因此須開背割或採高溫定型乾燥。" } },
        { r:"Shino · Oribe · Ki-Seto · Seto-guro", jp:"志野・織部・黄瀬戸・瀬戸黒", cat:GIFU.GC.papercraft,
  d:{en:"The four Momoyama styles of Mino: thick white feldspar glaze, bold copper green, soft yellow, and black pulled hot from the kiln.",ja:"美濃の桃山の四つの様式。厚い白の長石釉、大胆な銅の緑、柔らかな黄、窯から熱いまま引き出す黒。",zh:"美濃的四種桃山樣式：厚白長石釉、大膽的銅綠、柔和的黃，以及趁熱從窯中取出的黑。"} },
        { r:"shinrin serapī",
          jp:"森林セラピー",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Forest therapy: forest bathing backed by physiological and psychological measurement, used to promote health and prevent illness. The term came into use in the early 2000s, and a joint research programme on it began in 2004.",
            ja:"森林セラピー。生理と心理の計測に裏づけられた森林浴で、健康の増進や病気の予防に使われる。二〇〇〇年代初めに使われはじめ、二〇〇四年からは共同研究が進められた。",
            zh:"森林療法：以生理與心理量測為依據的森林浴，用於增進健康與預防疾病。此詞於 2000 年代初開始使用，2004 年起展開相關的聯合研究計畫。" } },
        { r:"shinrin tetsudō",
          jp:"森林鉄道",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Forest railway. The first in Kiso opened in 1916, and a network of narrow-gauge logging lines carried timber out of the valleys for half a century; the Ōi Dam of 1924 ended the river drives, and trucks and forest roads replaced the railways in turn.",
            ja:"木曽で最初の森林鉄道は一九一六年に開通し、狭軌の運材線の網が半世紀にわたって谷から材を運び出した。一九二四年の大井ダムで川流しが終わり、やがて森林鉄道もトラックと林道に取って代わられた。",
            zh:"森林鐵道：木曾第一條森林鐵道於 1916 年通車，此後窄軌運材線路網在半個世紀間將木材運出山谷。1924 年的大井水壩終結了河運，森林鐵道後來也被卡車與林道取代。" } },
        { r:"shinrin-yoku",
          jp:"森林浴",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"“Forest bathing”: unhurried time in a forest, taken in through all the senses. The word was proposed by Japan's Forestry Agency in 1982 on the model of sea bathing and sunbathing — a cultural practice, not a treatment.",
            ja:"森林浴。森の中でゆっくり過ごし、五感で森を受けとめること。林野庁が一九八二年に、海水浴や日光浴にならって提唱したことば。文化としての習慣であり、治療ではない。",
            zh:"森林浴：在森林中從容度過時光，以五感感受森林。此詞由日本林野廳於 1982 年仿照海水浴、日光浴提出——是一種文化習慣，而非治療。" } },
        { r:"shinsari-zai",
          jp:"心去り材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Heart-free timber, cut clear of the pith from large logs. More stable and far less prone to checking, it is the prestige choice for exposed posts in fine houses, temples and shrines — and needs a log several times the size of the post.",
            ja:"大径の丸太から髄を外して取った材。狂いが少なく割れにくく、上等の住宅や社寺の見せる柱に選ばれる格の高い材だが、柱の何倍もの太さの丸太を要する。",
            zh:"心去材：從大徑原木中避開髓心鋸出的木材。較穩定、極少開裂，是高級住宅與寺社外露柱材的首選，但需要比柱子粗上數倍的原木。" } },
        { r:"shintanrin",
          jp:"薪炭林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Fuel forest: broadleaf woodland cut on a short rotation for firewood and charcoal and left to regrow from the stumps. After the fuel revolution of the 1960s most was abandoned or converted to conifer plantation, and its now overgrown oaks are the ones most at risk from oak wilt.",
            ja:"薪や炭をとるために短い周期で伐り、切り株からの萌芽で更新させる広葉樹林。一九六〇年代の燃料革命のあと多くは放置されるか針葉樹の人工林に変わり、大きく育ちすぎたナラ類はいまナラ枯れに最もかかりやすい。",
            zh:"薪炭林：為取柴薪與木炭而以短週期砍伐、靠樹樁萌芽更新的闊葉樹林。1960 年代燃料革命後，多數遭棄置或改植為針葉樹人工林；如今長得過大的櫟樹最容易罹患櫟樹枯萎病。" } },
        { r:"shirabiso",
          jp:"白檜曽・シラビソ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Abies veitchii, the fir of the subalpine forests of the Hida mountains and Ontake, growing with ōshirabiso and kometsuga above the beech zone. Too remote to be much logged, its dark stands are mostly protected national forest.",
            ja:"Abies veitchii。飛騨山脈や御嶽の亜高山の森に、オオシラビソやコメツガとともにブナ帯の上に育つモミ属の木。遠すぎてあまり伐られず、その暗い林の多くは保護された国有林である。",
            zh:"白時冷杉（Abies veitchii）：飛驒山脈與御嶽亞高山森林的冷杉，與大白時冷杉、米鐵杉一同生長在山毛櫸帶之上。因位置偏遠少遭伐採，幽暗的林分多屬受保護的國有林。" } },
        { r:"shiraki",
          jp:"白木",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Plain wood left without oil, lacquer or paint: masu, hinoki bath tubs, shrine offering stands, Ittōbori carvings. In Japanese it carries a sense of purity; it marks easily and greys or darkens, but it can be renewed indefinitely with a plane.",
            ja:"油も漆も塗料も施さない素のままの木。枡、檜風呂、三方、一刀彫などがそうである。日本語では清らかさの感覚を帯びる。傷がつきやすく、色も変わるが、鉋をかければいつまでも新しくできる。",
            zh:"白木：不上油、漆或塗料的素木，如枡、扁柏浴桶、神社供物台與一刀雕。在日文中帶有純淨之意；容易留下痕跡，也會變灰或變深，但只要再刨一次便能無限翻新。" } },
        { r:"shirata",
          jp:"白太・辺材",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Sapwood: the pale outer band of the trunk, which still conducts water and stores starch. It is perishable in every species and attracts powder-post beetles, so furniture makers cut it away; in sugi and hinoki it is cream-white.",
            ja:"辺材。幹の外側の淡い帯で、まだ水を通しデンプンを蓄えている。どの樹種でも腐りやすくヒラタキクイムシがつくため、家具職人は取り除く。スギやヒノキでは乳白色である。",
            zh:"邊材（白太）：樹幹外圍淡色的部分，仍負責輸水並儲存澱粉。任何樹種的邊材都易腐朽且招粉蠹蟲，因此家具師傅會將其去除；柳杉與扁柏的邊材呈乳白色。" } },
        { r:"shiroari",
          jp:"シロアリ",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Termites. The Japanese subterranean termite (yamato-shiroari) lives throughout Honshū, Gifu included, and attacks damp wood near the ground; the Formosan termite (ie-shiroari) of warmer coasts is far more destructive. Sills of hinoki, hiba or chestnut heart resist them.",
            ja:"岐阜を含む本州全域にヤマトシロアリがすみ、地面に近い湿った木を食べる。暖かい沿岸部のイエシロアリはさらに被害が大きい。ヒノキ、ヒバ、クリの心材の土台はシロアリに強い。",
            zh:"白蟻：大和白蟻（ヤマトシロアリ）分布於包括岐阜在內的整個本州，蛀食靠近地面的潮濕木材；溫暖沿海地區的家白蟻（イエシロアリ）破壞力更大。以扁柏、羅漢柏或栗木心材製作的地檻較能抵抗白蟻。" } },
        { r:"shirozumi",
          jp:"白炭",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"White charcoal: fired at a high temperature and pulled glowing from the kiln to be smothered in a mix of earth and ash, which leaves a pale coating. Hard, metallic-sounding and long-burning; binchōtan, of ubame oak, is the best known.",
            ja:"白炭。高温で焼き、赤く燃えるうちに窯から出して、土と灰をまぜた消し粉をかけて火を消す。表面が白っぽくなる。硬く、たたくと金属のような音がし、火もちがよい。ウバメガシの備長炭がもっともよく知られる。",
            zh:"白炭：高溫燒製後趁紅熱從窯中取出，覆上土與灰混合的「消粉」使其熄滅，表面因而呈灰白色。質地堅硬、敲擊有金屬聲、耐燒；以烏岡櫟製成的備長炭最為著名。" } },
        { r:"shitagari",
          jp:"下刈り",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Weeding: cutting back the grasses, bamboo grass and brambles that would smother young trees, every July and August for the first five or six years, with brush-cutters on steep slopes — the hottest and least loved job in forestry. It stops once the trees reach about two to two and a half metres.",
            ja:"植えた木を覆う草、ササ、キイチゴ類を、植栽後五、六年のあいだ毎年七月と八月に刈り払い機で刈る作業。急斜面での真夏の仕事で、林業で最もきつく嫌われる。木が二〜二・五メートルほどに育てば終わる。",
            zh:"下刈（除草）：植栽後的前 5、6 年，每年 7、8 月以割草機割除會壓倒幼樹的雜草、矮竹與懸鉤子，在陡坡上於盛夏作業，是林業中最辛苦也最不受歡迎的工作。幼樹長到約 2 至 2.5 公尺即可停止。" } },
        { r:"shitami",
          jp:"下見",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Viewing before a log auction: buyers walk the yard early, examining end grain for ring width, colour and rot and the surface for knots and bends, and noting the lots they want. At a good market, the whole value of a log is judged here by eye.",
            ja:"丸太の市の前に行う品定め。買い手は早朝から土場を歩き、木口で年輪の幅や色、腐れを、表面で節や曲がりを確かめ、狙う椪を書きとめる。よい市では、丸太の値打ちはすべてここで目によって決まる。",
            zh:"下見（看貨）：原木拍賣前的驗貨。買家一早便在貨場巡看，從木口檢查年輪寬度、顏色與腐朽，從表面檢查節與彎曲，並記下想買的貨堆。在好的市場，一根原木的價值全在此憑眼力判定。" } },
        { r:"shōji",
          jp:"障子",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A light sliding screen of thin wooden bars, usually sugi or hinoki, covered on one side with paper. It diffuses daylight, lets a room breathe and can be lifted out; the paper is renewed every year or two, traditionally at the end of the year.",
            ja:"スギやヒノキの細い桟に片面から紙を張った、軽い引き戸。日の光をやわらげ、部屋に呼吸させ、はずすこともできる。紙は一、二年ごとに、昔は年末に張り替えた。",
            zh:"障子：以柳杉或扁柏細木條為框、單面糊紙的輕巧拉門，能柔化日光、讓房間透氣，也可整片卸下。紙每一兩年更換一次，傳統上在年底進行。" } },
        { r:"shōkafun sugi",
          jp:"少花粉スギ",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Low-pollen sugi: clones selected to shed far less pollen than ordinary trees, alongside pollen-free varieties. Under the government's 2023 pollen plan they are to make up more than nine-tenths of sugi seedlings, in answer to Japan's widespread cedar-pollen allergy.",
            ja:"花粉が通常よりはるかに少ないよう選抜されたスギのクローンで、無花粉の品種もある。二〇二三年の政府の花粉症対策で、スギ苗木の九割以上をこうした品種にする目標が掲げられた。",
            zh:"少花粉柳杉：經選育、花粉量遠少於一般植株的無性系，另有無花粉品種。依日本政府 2023 年的花粉症對策，柳杉苗木中要有九成以上改用這類品種，以因應國內普遍的柳杉花粉症。" } },
        { r:"shōkaku / hirakaku",
          jp:"正角・平角",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Sawn squares and beams. Shōkaku are square posts, typically 105 mm (three and a half sun) or 120 mm (four sun) for houses; hirakaku are rectangular beams, deeper than wide, sized to the span. Boards (ita) and small battens (taruki, mabashira) come from the rest of the log.",
            ja:"正角は正方形断面の柱材で、住宅ではふつう一〇五ミリ（三寸五分）か一二〇ミリ（四寸）。平角は幅より高さの大きい長方形断面の梁材で、スパンに応じて寸法を決める。丸太の残りからは板や垂木、間柱などの小割材が取られる。",
            zh:"正角與平角：正角為正方形斷面柱材，住宅常用 105 公釐（3.5 寸）或 120 公釐（4 寸）；平角為高大於寬的矩形斷面樑材，尺寸依跨距決定。原木其餘部分則取出板材與椽條、間柱等小角材。" } },
        { r:"shokusai",
          jp:"植栽",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Planting of two- or three-year-old seedlings, in spring or autumn, with a heavy hoe — traditionally about 3,000 to the hectare, one every 1.8 metres, and in the old intensive districts two or three times as many.",
            ja:"二〜三年生の苗を、春か秋に重い唐鍬で植えること。伝統的にはヘクタールあたり約三千本（一・八メートル間隔）、古くからの集約的な産地ではその二、三倍を植えた。",
            zh:"栽植：於春季或秋季以厚重的鋤頭種下 2 至 3 年生苗木，傳統上每公頃約 3,000 株（間距 1.8 公尺），在老牌集約林業地區甚至達其 2 至 3 倍。" } },
        { r:"shōtei",
          jp:"匠丁",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"A drafted artisan from Hida — in practice a carpenter — serving a year in the capital: ten from each village unit, with one attendant (shitei) for every four. Records of the early ninth century describe working years of 330 to 350 days.",
            ja:"都で一年働いた飛騨の匠丁。実際には大工で、里ごとに十人を出し、四人に一人の仕丁がついた。九世紀初めの記録は、一年の労働日を三百三十〜三百五十日と記す。",
            zh:"匠丁：被徵調到京城服役一年的飛驒工匠（實際上是木匠），每里派出十人，每四人配一名雜役「仕丁」。9 世紀初的紀錄顯示，一年工作日達 330 至 350 天。" } },
        { r:"shōyōjurin",
          jp:"照葉樹林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Laurel forest: the evergreen broadleaf forest of the warm lowlands — evergreen oaks, shii, camphor and camellia, with glossy leaves. In Gifu nearly all of it has been cleared; fragments survive mainly in shrine groves on the Nōbi plain and in southern Mino.",
            ja:"暖かい低地の常緑広葉樹林。カシ類、シイ、クスノキ、ツバキなど、葉に光沢のある木々からなる。岐阜ではほとんどが失われ、濃尾平野や美濃南部の社叢に断片が残るにすぎない。",
            zh:"照葉樹林：溫暖低地的常綠闊葉林，由常綠櫟類、栲樹、樟樹、山茶等葉面光亮的樹種構成。在岐阜幾乎已被砍除殆盡，僅在濃尾平原與美濃南部的神社林中殘存片段。" } },
        { r:"shubatsu",
          jp:"主伐",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Final harvest: felling the crop at the end of its rotation, at 45 to 100 years or more, after which the site should be replanted. Whether it is replanted is the central question of Japanese forestry today.",
            ja:"伐期（四十五〜百年以上）を迎えた林を伐ること。そのあと再び植えるのが本来の姿だが、再造林されるかどうかが、いまの日本林業の中心的な問題である。",
            zh:"主伐：在輪伐期（45 至 100 年以上）結束時伐採林木，之後理應重新造林——是否真的重新造林，正是當今日本林業的核心問題。" } },
        { r:"shubo · moto", jp:"酒母・酛", cat:GIFU.GC.sake,
  d:{en:"The yeast starter from which the main mash is built.",ja:"醪をつくる元になる酵母の培養。",zh:"用來建立主醪的酵母酒母。"} },
        { r:"shugo", jp:"守護", cat:GIFU.GC.history,
  d:{en:"A provincial military governor of the medieval shogunate; the Toki held the office in Mino for two centuries.",ja:"中世の幕府の国ごとの軍事の長。美濃では土岐氏が二世紀にわたって務めた。",zh:"中世幕府派駐各國的軍事長官；土岐氏在美濃擔任此職達兩個世紀。"} },
        { r:"shukuba", jp:"宿場", cat:GIFU.GC.history,
  d:{en:"A post town on a highway, with inns and a relay station for official horses and porters.",ja:"街道の宿場町。宿屋と、公用の人馬を継ぎ立てる問屋場があった。",zh:"大道上的驛站城鎮，設有旅店與替換公用人馬的問屋場。"} },
        { r:"shunkei-nuri",
          jp:"春慶塗",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"The general name for lacquerware in which clear lacquer shows the grain of stained wood, made in Takayama and a few other places. In Takayama the name is traced to Hishunkei, a celebrated tea caddy whose colour the first tray resembled.",
            ja:"着色した木に透明な漆を塗って木目を見せる漆器の総称で、高山のほか数か所でつくられる。高山では、最初の盆の色が名高い茶入「飛春慶」に似ていたことが名の由来とされる。",
            zh:"春慶塗：以透明漆顯出染色木材木紋之漆器的總稱，產於高山及其他少數地方。在高山，名稱據說源自第一只托盤的顏色酷似名茶入「飛春慶」。" } },
        { r:"shura",
          jp:"修羅",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"A log chute built of logs laid side by side down a mountainside, down which timber slid to the stream below — the first stage of the Owari domain's Kiso timber-transport method. Chutes of planks on trestles were called sande.",
            ja:"丸太を並べて山腹につくった滑り道で、材木はこれを滑って谷川まで下った。尾張藩の木曽式運材の最初の段階である。板で組んだ架台の上の滑り道は桟手と呼ばれた。",
            zh:"修羅：以原木並排鋪於山坡上構成的滑道，木材沿此滑至山下溪流，是尾張藩木曾式運材法的第一階段。以木板架在支架上的滑道則稱為「棧手」。" } },
        { r:"shūseizai",
          jp:"集成材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Glued laminated timber (glulam): boards 2–4 cm thick, dried, graded, finger-jointed end to end and glued face to face with the grain parallel, stiffer laminae outside. Mainstream for precut houses since the 1990s, long made from European spruce, now increasingly from sugi, hinoki and larch.",
            ja:"厚さ二〜四センチのひき板（ラミナ）を乾燥・選別し、フィンガージョイントで縦につなぎ、繊維方向をそろえて積層接着したもの。硬いラミナを外側に置く。一九九〇年代からプレカット住宅の主流となり、長くヨーロッパのトウヒ材でつくられてきたが、スギ、ヒノキ、カラマツ製が増えている。",
            zh:"集成材：將 2 至 4 公分厚的板材（層板）乾燥、分級後，以指接縱向接長，再順紋平行疊層膠合，剛性較高的層板置於外側。自 1990 年代成為預切住宅的主流，長期以歐洲雲杉製造，如今柳杉、扁柏與落葉松製品日增。" } },
        { r:"shūshukuritsu",
          jp:"収縮率",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Shrinkage from green to dry. Along the grain it is negligible, a tenth of a per cent or two; around the rings (tangential) it is about twice as large as across them (radial). That two-to-one ratio is why flatsawn boards cup and square posts turn diamond-shaped.",
            ja:"生材から乾燥までの縮み。繊維方向はごくわずか（〇・一〜〇・二パーセント）だが、年輪に沿う接線方向は半径方向のおよそ二倍縮む。この二対一の比が、板目板の反りや角材の菱形の変形を生む。",
            zh:"收縮率：從生材到乾燥的收縮。順紋方向微乎其微（0.1% 至 0.2%）；沿年輪的弦向收縮約為橫跨年輪的徑向收縮兩倍。正是這二比一的比例，使弦切板翹曲、方柱變成菱形。" } },
        { r:"shūzai",
          jp:"集材・土場",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Yarding: moving felled trees or logs from the stump to the landing (dobai), the flat area beside a road where logs are processed, sorted by length, diameter and grade, and piled for trucks. By winch, forwarder or cable, it is the costliest stage of logging on steep ground.",
            ja:"伐った木や丸太を、伐根から道ばたの平らな土場まで寄せること。土場で造材し、長さ・径・等級ごとに仕分けてトラックを待つ。ウインチ、フォワーダ、架線で行い、急傾斜地では最も費用のかかる工程である。",
            zh:"集材：將伐倒木或原木從伐根處移至集材場（土場）——路旁的平地，在此造材、依長度、徑級與等級分類堆放，等待卡車運出。可用絞盤、運材車或架線，是陡坡伐木中成本最高的環節。" } },
        { r:"sokuryō",
          jp:"測量・境界明確化",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Surveying the forest, and above all fixing the boundaries of small private holdings whose owners no longer know where they run. Aerial laser scanning and drones now map terrain and count trees from the air, but boundaries still need owners on the ground to agree.",
            ja:"森林の測量、とりわけ所有者自身も境をわからなくなった小さな私有林の境界を確定すること。いまは航空レーザ計測やドローンで地形を測り木を数えられるが、境界は現地で所有者どうしが合意しなければ決まらない。",
            zh:"測量與地界確定：森林測量，尤其是確定連林主自己都已不清楚界線的小面積私有林地界。如今空載雷射掃描與無人機可從空中測繪地形、清點林木，但地界仍須所有人在現場協議才能確定。" } },
        { r:"soma",
          jp:"杣",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"A double word: the forest from which timber is taken, and the person who takes it (somabito). The character, “tree” beside “mountain”, is a Japanese coinage; the somabito were the fellers and hewers of the old timber forests of Kiso and Hida.",
            ja:"杣。木材を伐り出す山と、それを伐る人（杣人）の両方を指すことば。「木」と「山」を並べた字は国字である。杣人は、木曽や飛騨の昔の用材林で木を伐り、はつった人々であった。",
            zh:"杣：兼指出產木材的山林與伐木的人（杣人）的詞。「木」旁加「山」的字形是日本自造的漢字；杣人即木曾與飛驒古時用材林中伐木、削木的工人。" } },
        { r:"sōmoku jōbutsu",
          jp:"草木成仏",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"“Plants and trees attain Buddhahood”: a doctrine developed in Japanese Tendai Buddhism holding that even non-sentient nature takes part in enlightenment. It sits behind the memorial services still held in some woodworking and forestry communities for the trees they have used.",
            ja:"草木成仏。心をもたない自然も悟りにあずかるとする、日本の天台宗で育った教え。木を使ってきた木工や林業の地域で、いまも使った木のための供養が行われる背景にある。",
            zh:"草木成佛：日本天台宗發展出的教義，認為連無情的自然也能參與成佛。部分木工與林業社群至今仍為所用的樹木舉行供養法會，其背後便是這種思想。" } },
        { r:"soundhole",
          jp:"サウンドホール",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The round opening in the top of an acoustic guitar, which with the air inside the body forms a resonator reinforcing the low notes. It is usually ringed by a decorative inlay, the rosette, which also stiffens the edge of the hole.",
            ja:"アコースティックギターの表板の丸い穴。胴の中の空気とともに共鳴器となり、低音を強める。まわりにはふつうロゼッタと呼ぶ飾りの象嵌があり、穴の縁を補強する役も果たす。",
            zh:"音孔：木吉他面板上的圓孔，與琴身內的空氣形成共鳴器，強化低音。周圍通常鑲有稱為「音孔花」的裝飾嵌條，同時也補強孔緣。" } },
        { r:"sozai",
          jp:"素材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"In Japanese forestry statistics, logs: roundwood as it leaves the forest, before sawing. Gifu's log production (sozai seisanryō) was about 576,000 cubic metres in FY2021, roughly 1.8 times the level of ten years earlier.",
            ja:"林業統計で、森から出されたままの製材前の丸太のこと。岐阜県の素材生産量は二〇二一年度に約五十七万六千立方メートルで、十年前のおよそ一・八倍である。",
            zh:"素材：日本林業統計中指剛離開森林、尚未製材的原木。岐阜縣 2021 年度的素材生產量約 57.6 萬立方公尺，約為十年前的 1.8 倍。" } },
        { r:"sōzai / banzai",
          jp:"早材・晩材",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Early wood and late wood. Spring growth has large, thin-walled cells; summer growth has small, thick-walled ones and is several times denser. In sugi the contrast is strong, which is why a planed sugi face shows vivid stripes and wears unevenly.",
            ja:"春に育つ早材は大きく壁の薄い細胞、夏に育つ晩材は小さく壁の厚い細胞からなり、晩材は早材の何倍も密度が高い。スギはこの差が大きく、鉋をかけた面にくっきりした縞が出て、すり減り方もむらになる。",
            zh:"早材與晚材：春季生長的早材細胞大而壁薄，夏季的晚材細胞小而壁厚，密度高出數倍。柳杉兩者差異明顯，因此刨光面呈現鮮明條紋，磨損也不均勻。" } },
        { r:"sugi",
          jp:"杉・スギ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Cryptomeria japonica, called Japanese cedar though it is no true cedar but a conifer of the cypress family found only in Japan. Light, soft and straight, with a heart from pink to nearly black, it is Japan's most planted tree and the wood of ceilings, panelling, posts and sake barrels.",
            ja:"Cryptomeria japonica。日本固有のヒノキ科の針葉樹で、英語ではJapanese cedarと呼ばれるが本当のcedarではない。軽く柔らかく通直で、心材は桃色から黒に近い色まである。日本で最も多く植えられた木で、天井、羽目板、柱、酒樽の材となる。",
            zh:"柳杉（Cryptomeria japonica）：日本特有的柏科針葉樹，英文稱 Japanese cedar，但並非真正的雪松類。材質輕軟通直，心材由粉紅到近乎黑色不等。是日本栽植最多的樹種，用於天花板、壁板、柱子與酒桶。" } },
        { r:"sugidama",
          jp:"杉玉",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"A ball of sugi sprigs hung under the eaves of a sake brewery. It goes up green when the new season's sake is pressed and slowly turns brown as the sake matures — a clock made of leaves. The custom is traced to Ōmiwa shrine in Nara.",
            ja:"酒蔵の軒下に吊るすスギの葉の玉。新酒がしぼられると青いまま掲げられ、酒が熟すにつれてゆっくり茶色になる。葉でできた時計である。奈良の大神神社に由来するとされる。",
            zh:"杉玉：懸掛在酒藏簷下、以柳杉枝葉紮成的球。新酒榨出時以青綠之姿掛上，隨著酒熟成慢慢轉為褐色，宛如以葉做成的時鐘。此習俗據說源自奈良的大神神社。" } },
        { r:"suigen kan'yō",
          jp:"水源涵養",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Water conservation, the “green dam”: a forest floor of litter, roots and porous soil absorbs heavy rain and releases it over days and weeks. The effect is real but limited in a great storm, and it depends on thinning keeping the floor covered with plants.",
            ja:"落ち葉、根、すき間の多い土からなる林床が大雨を吸いこみ、数日から数週間かけて流す「緑のダム」のはたらき。効果は確かだが大豪雨では限られ、間伐によって林床が植物に覆われていることが前提となる。",
            zh:"水源涵養，即所謂「綠色水壩」：由落葉、根系與多孔土壤構成的林床吸收大雨，再於數日至數週間緩緩釋出。效果確實存在，但在大暴雨時有限，且前提是疏伐讓林床保有植被覆蓋。" } },
        { r:"suki-urushi",
          jp:"透き漆",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Transparent lacquer: urushi stirred and gently heated (kurome) to drive off water and refine it, so that it cures a clear amber rather than dark. Laid over stained wood it lets the grain show through, as in Hida Shunkei.",
            ja:"透き漆。漆をかき混ぜながら穏やかに加熱し（くろめ）、水分を飛ばして精製したもので、黒ずまずに透明な琥珀色に固まる。染めた木の上に塗ると木目が透けて見え、飛騨春慶はその例である。",
            zh:"透漆：將漆一邊攪拌一邊溫和加熱（日文稱「くろめ」），去除水分精製而成，硬化後呈透明琥珀色而不發黑。塗在染色的木材上可透出木紋，飛驒春慶即是一例。" } },
        { r:"sumitsubo", jp:"墨壺", cat:GIFU.GC.joinery,
  d:{en:"The carpenter's ink pot and line, used to snap straight lines on timber.",ja:"大工の墨壺。材にまっすぐな線を打つ。",zh:"木匠的墨斗，用來在木料上彈出直線。"} },
        { r:"sumiyaki",
          jp:"炭焼き",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Charcoal making: wood is heated in a kiln with little air so that it carbonises rather than burns. Until the fuel revolution of the 1950s–1960s it was the main winter work of many mountain villages, including in Hida, where beech was cut for charcoal before it made chairs.",
            ja:"炭焼き。窯の中で空気を絞って木を加熱し、燃やさずに炭にする仕事。一九五〇〜一九六〇年代の燃料革命まで、多くの山村の冬の主な仕事であった。飛騨でも、ブナは椅子になる前は炭のために伐られていた。",
            zh:"燒炭：在窯中以少量空氣加熱木材，使其碳化而非燃燒。直到 1950–1960 年代的燃料革命前，這是許多山村冬季的主要工作；在飛驒，山毛櫸在成為椅子之前也是為燒炭而伐。" } },
        { r:"suriawase",
          jp:"すり合わせ",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Fret levelling: filing all the frets to one plane, then recrowning and polishing them to remove the grooves worn by steel strings. When the frets are too low to level again they are pulled and replaced — a refret.",
            ja:"フレットのすり合わせ。すべてのフレットを一つの平面にそろえて削り、頂を丸め直して磨き、スチール弦で掘れた溝を消す。低くなりすぎてもう削れなければ、抜いて打ち替える（リフレット）。",
            zh:"整平琴格（日文「すり合わせ」）：把所有琴格銼到同一平面，再修圓頂部並拋光，消除鋼弦磨出的凹槽。琴格低到無法再整平時，就拔除換新——即重新換格。" } },
        { r:"susudake",
          jp:"煤竹",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Bamboo blackened by decades of hearth smoke in the roof space of a thatched farmhouse, like those of Shirakawa-gō. The traditional material of the shō, the mouth organ of court music; now so scarce that many new instruments use plain bamboo.",
            ja:"茅葺きの民家の屋根裏で、何十年も囲炉裏の煙にいぶされて黒くなった竹。白川郷のような家から出る。雅楽の笙の伝統的な材料だが、いまはとても乏しく、新しい笙の多くはふつうの竹を使う。",
            zh:"煤竹：在茅草屋頂民家（如白川鄉的房子）閣樓中，經數十年地爐煙燻而變黑的竹子。是雅樂之笙的傳統材料，如今極為稀少，許多新製的笙改用一般竹子。" } },
        { r:"suyama",
          jp:"巣山",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Nesting forest: forests closed by the Owari domain to protect the nests of hawks taken for the lord's falconry — a privilege of rank valuable enough to justify shutting a mountain.",
            ja:"藩主の鷹狩に使う鷹の巣を守るため、尾張藩が閉ざした山。鷹狩は身分の特権であり、そのために山を閉ざすだけの価値があった。",
            zh:"巢山：尾張藩為保護藩主鷹獵所用之鷹的巢穴而封閉的山林。鷹獵是身分的特權，其價值足以讓整座山因此封山。" } },
        { r:"taika mokuzai",
          jp:"耐火木材・耐火集成材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Fire-resistant timber members: glulam columns and beams wrapped in gypsum board, or with a load-bearing wood core protected by a mortar or self-extinguishing “burn-stop” layer, certified for one to three hours. They made Japan's mid- and high-rise timber buildings possible.",
            ja:"石膏ボードで被覆した集成材の柱や梁、あるいはモルタル層や燃え止まり層で荷重を支える木の芯を守った部材で、一時間から三時間の耐火の認定を受けたもの。日本の中高層木造建築を可能にした。",
            zh:"耐火木構件：以石膏板包覆的集成材柱樑，或以砂漿層、自熄性「燃燒停止層」保護承重木芯的構件，取得 1 至 3 小時的耐火認證，使日本的中高層木造建築得以實現。" } },
        { r:"taikyūsei",
          jp:"耐朽性",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Resistance to decay. Fungi need moisture content above about 20–25 per cent, oxygen and warmth, so dry wood does not rot. Among heartwoods, hiba, kōyamaki, yew and chestnut are very durable; hinoki, keyaki and larch durable; beech, tochi and all sapwood perishable.",
            ja:"腐りにくさ。腐朽菌には含水率二十〜二十五パーセント以上、酸素、適度な温度が要るので、乾いた木は腐らない。心材ではヒバ、コウヤマキ、イチイ、クリがきわめて強く、ヒノキ、ケヤキ、カラマツが強く、ブナ、トチ、そしてすべての辺材は弱い。",
            zh:"耐腐性：腐朽菌需要含水率約 20% 至 25% 以上、氧氣與適溫，因此乾燥的木材不會腐爛。心材中，羅漢柏、日本金松、紫杉與栗木極耐久；扁柏、櫸木與落葉松耐久；山毛櫸、七葉樹以及所有邊材則不耐腐。" } },
        { r:"Taiwan hinoki",
          jp:"台湾檜・タイワンヒノキ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Chamaecyparis obtusa var. formosana, the Taiwanese form of hinoki, from the same central mountains as benihi. Denser and more fragrant than Japanese hinoki, it was logged for Japan under colonial rule and is the tree in which hinokitiol was first found.",
            ja:"Chamaecyparis obtusa var. formosana。紅檜と同じ台湾の中央山脈に育つヒノキの変種。日本のヒノキより重く香りが強い。植民地時代に日本向けに伐られ、ヒノキチオールが初めて見つかった木でもある。",
            zh:"臺灣扁柏（Chamaecyparis obtusa var. formosana）：與紅檜同生於臺灣中央山脈的扁柏變種。比日本扁柏密度高、香氣更濃，日治時期為供應日本而伐採，檜木醇也最早是在此樹中發現。" } },
        { r:"takubatsu",
          jp:"択伐",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Selective felling: taking single mature trees or small groups while the forest stays standing. It is how great hinoki are taken from the old stands of Ura-Kiso for shrines and temples, and the basis of continuous-cover forestry; it needs skilled fellers and good roads.",
            ja:"森を残したまま、成熟した木を一本ずつ、あるいは小さな群ごとに選んで伐ること。裏木曽の古い森から社寺用の大ヒノキを出すのはこの方法で、複層林施業の基本でもあるが、熟練した伐倒とよい路網を要する。",
            zh:"擇伐：保留森林整體，只選擇性伐採成熟的單株或小群林木。從裏木曾老林中取出社寺用的大扁柏即採此法，也是複層林經營的基礎，但需要熟練的伐木技術與完善的林道網。" } },
        { r:"tamagiri",
          jp:"玉切り・造材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Bucking: cutting a felled, delimbed stem into logs of standard length — usually 3, 4 or 6 metres — chosen to fit the day's market prices and each log's quality. On a modern landing a processor does it in seconds, measuring as it goes.",
            ja:"伐倒して枝を払った幹を、三・四・六メートルなど決まった長さの丸太に切り分けること。その日の市場価格と各部の品質に合わせて長さを選ぶ。いまの土場ではプロセッサが測りながら数秒でこなす。",
            zh:"玉切（造材）：將伐倒、去枝後的樹幹鋸成 3、4 或 6 公尺等標準長度的原木，長度依當日市價與各段品質而定。在現代集材場，造材機可一邊量測一邊在數秒內完成。" } },
        { r:"tamahagane", jp:"玉鋼", cat:GIFU.GC.metal,
  d:{en:"The best steel from the tatara, used by licensed swordsmiths today.",ja:"たたらから得られる最良の鋼。いまも認可を受けた刀匠が用いる。",zh:"從たたら得到的最上等鋼材，至今仍為持證刀匠所用。"} },
        { r:"tama-moku",
          jp:"玉杢",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Ball figure: small circular swirls and eyes in clusters, formed around dormant buds or in burls. Prized in keyaki, camphor and tochi, it is sliced thin for veneer or used whole for small boxes and trays.",
            ja:"休眠芽のまわりやこぶにできる、群れた小さな渦や目のような杢。ケヤキ、クスノキ、トチのものが珍重され、薄く突いて突板にしたり、小箱や盆にしたりする。",
            zh:"玉杢（瘤紋）：在休眠芽周圍或樹瘤中形成、成簇的小渦旋與眼狀紋。以櫸木、樟樹與七葉樹者最為珍貴，可刨成薄片作貼皮，或直接製成小盒與托盤。" } },
        { r:"tamenteki kinō",
          jp:"多面的機能",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"The multiple functions of forests beyond timber — water, soil and slope protection, climate, biodiversity, recreation and culture. Since the Forest and Forestry Basic Act of 2001 they have been the stated aim of Japanese forest policy.",
            ja:"木材生産のほかに森林が果たすはたらき——水、土砂災害の防止、気候、生物多様性、保健休養、文化など。二〇〇一年の森林・林業基本法以来、日本の森林政策が掲げる目標である。",
            zh:"多元功能：森林在木材之外的作用——水源、國土保安、氣候、生物多樣性、休閒遊憩與文化等。自 2001 年《森林・林業基本法》起，這成為日本森林政策明定的目標。" } },
        { r:"tamo",
          jp:"タモ（ヤチダモ・シオジ）",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"The trade name for the Japanese ashes, yachidamo (Fraxinus mandshurica) and shioji (F. platypoda), trees of wet valley floors. Strong, elastic and ring-porous, they make baseball bats, tool handles and much Japanese furniture.",
            ja:"湿った谷底に育つヤチダモ（Fraxinus mandshurica）とシオジ（F. platypoda）の材の通称。強く弾力のある環孔材で、野球のバット、道具の柄、多くの家具になる。",
            zh:"梣木（タモ）：生於潮濕谷底的水曲柳（ヤチダモ，Fraxinus mandshurica）與シオジ（F. platypoda）木材的商用名。強韌有彈性的環孔材，用於棒球棒、工具柄與許多日本家具。" } },
        { r:"tanban",
          jp:"単板",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"In guitar catalogues, a top, back or sides made from a single solid layer of wood, as opposed to plywood (gōhan). An all-solid guitar is lighter and more responsive and changes with age and playing, but it is also more sensitive to humidity.",
            ja:"ギターのカタログで、表板、裏板、側板が一枚の無垢の板でできていること。合板と対になる語。オール単板のギターは軽く反応がよく、年月と演奏で変わっていくが、湿度にも敏感である。",
            zh:"單板：吉他型錄中指面板、背板或側板由單層實木製成，與合板相對。全單板吉他較輕、反應較靈敏，會隨歲月與演奏而變化，但對濕度也更敏感。" } },
        { r:"tansu",
          jp:"箪笥",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"A chest of drawers or storage cabinet, the main piece of furniture in a traditional Japanese house, often with iron fittings; many had handles so that they could be carried out in a fire. Types include clothing chests, kitchen cupboards (mizuya-dansu) and staircase chests (kaidan-dansu).",
            ja:"引出しや戸のついた収納家具で、伝統的な日本の家の主な家具。鉄の金具をつけたものが多く、火事のときに担ぎ出せるよう取っ手をつけたものもあった。衣装箪笥、台所の水屋箪笥、階段箪笥などの種類がある。",
            zh:"簞笥：附抽屜或門片的收納家具，是日本傳統住宅中的主要家具，常裝有鐵製五金，有些附提把，火災時可以扛出。種類包括衣物簞笥、廚房的水屋簞笥與階梯簞笥等。" } },
        { r:"tap tuning",
          jp:"タップチューニング",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The traditional alternative to measurement: the maker holds a top at a node, taps it with a knuckle, listens to its ring and thins the plate or braces until it sounds right. Chladni patterns and modal analysis now describe what the ear was hearing.",
            ja:"計測に代わる伝統的な方法。表板の節を持って指の関節でたたき、響きを聴き、よい音になるまで板や力木を削る。いまではクラドニ図形やモード解析が、耳が聴いていたものを説明する。",
            zh:"敲擊調音：傳統上取代量測的方法——製琴師握住面板的節點，以指節輕敲、聆聽餘響，削薄板或音梁直到聲音合適。如今克拉德尼圖形與模態分析，說明了耳朵當年聽到的是什麼。" } },
        { r:"taru",
          jp:"樽",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"A closed barrel of staves and hoops with a fixed lid, made for carrying and storing liquids — sake, soy sauce, vinegar, pickles. Sake barrels are traditionally of sugi, whose aroma passes into the drink; those broken open at celebrations are straw-wrapped komodaru.",
            ja:"側板とたがでつくり、蓋を固定した樽。酒、醤油、酢、漬物などを運び、蓄えるための器である。酒樽は伝統的にスギでつくり、その香りが酒に移る。祝いの席で鏡開きをするのは、菰を巻いた菰樽である。",
            zh:"以側板與箍製成、蓋子固定的封閉木樽，用於運送與儲存酒、醬油、醋與醃菜。酒樽傳統上用柳杉，香氣會融入酒中；喜慶時敲開的是外包草蓆的「菰樽」。" } },
        { r:"tatami",
          jp:"畳",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A floor mat of three layers: a core (tatamidoko) once of compressed rice straw and now often of insulation board or foam; a facing of woven soft rush (igusa); and cloth edging. Rooms are measured in mats, and the mat's size once set the module of the house.",
            ja:"三層からなる床の敷物。芯の畳床はかつて稲わらを圧縮したもので、いまは断熱ボードや発泡材が多い。表はイグサを織った畳表、縁は布である。部屋は畳の数で広さを表し、畳の寸法はかつて家の寸法の基準であった。",
            zh:"榻榻米：三層構成的地墊——芯層「疊床」過去以壓實稻草製成，如今多用隔熱板或發泡材；表面是燈心草編成的「疊表」，邊緣包布。房間以疊數計算大小，疊的尺寸過去也是住宅的模數。" } },
        { r:"tatara", jp:"たたら", cat:GIFU.GC.metal,
  d:{en:"The clay furnace in which iron sand and charcoal are smelted for three days and nights to make sword steel.",ja:"砂鉄と木炭を三日三晩かけて製錬し、刀の鋼をつくる土の炉。",zh:"以砂鐵與木炭連續冶煉三天三夜、製造刀劍用鋼的黏土爐。"} },
        { r:"tategu",
          jp:"建具",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"The fittings that open and close a Japanese house — sliding doors, shōji, fusuma, lattice doors and transoms — and the joiner's trade that makes them. Takayama's woodcraft school began in 1946 as a training centre for tategu makers.",
            ja:"戸、障子、襖、格子戸、欄間など家を開け閉めする建具と、それをつくる建具職の仕事。高山の木工芸の学校は、一九四六年に建具の訓練所として始まった。",
            zh:"建具：日本住宅中可開關的構件——拉門、障子、襖、格子門與欄間——以及製作它們的建具匠行業。高山的木工藝學校於 1946 年以建具訓練所起家。" } },
        { r:"tawā yādā",
          jp:"タワーヤーダ・スイングヤーダ",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Cable yarders for slopes too steep for roads. A tower yarder carries a mast from which a steel skyline is stretched up the hillside; a swing yarder is an excavator with a winch and short boom. A carriage runs along the line and lifts logs out to the road.",
            ja:"道を入れられない急斜面のための架線系の集材機。タワーヤーダは車両に積んだタワーから斜面の上へ鋼索（スカイライン）を張り、スイングヤーダは油圧ショベルにウインチと短いブームを付けたもの。索に沿って走る搬器が丸太を道まで吊り出す。",
            zh:"塔式與迴轉式集材機：用於坡度過陡、無法開路之處的架線集材機。塔式集材機以車載鐵塔向坡上架設鋼索；迴轉式集材機則是在挖土機上裝設絞盤與短吊臂。沿鋼索行走的跑車將原木吊運至道路。" } },
        { r:"teimitsudo shokusai",
          jp:"低密度植栽",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Low-density planting: 2,000–2,500 seedlings a hectare instead of 3,000 or more. It cuts the cost of seedlings, planting and the first thinning, at the price of wider rings and larger knots — acceptable for timber destined for glulam and CLT.",
            ja:"ヘクタールあたり三千本以上ではなく二千〜二千五百本を植えること。苗木代、植栽費、初回の間伐の費用が減るかわりに年輪は広く節は大きくなるが、集成材やCLTに向ける材なら許容できる。",
            zh:"低密度栽植：每公頃種植 2,000 至 2,500 株，而非 3,000 株以上。可節省苗木、栽植與首次疏伐的成本，代價是年輪較寬、節較大——若木材用於集成材與 CLT 則可以接受。" } },
        { r:"tekizami",
          jp:"手刻み",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Hand-cutting: the carpenter marks and cuts every joint in his own workshop, reading and placing each piece. Slower, but it allows complex traditional joints and green or air-dried timber, and it survives among temple builders, traditional housebuilders and young carpenters learning the craft.",
            ja:"大工が自分の作業場で、一本ずつ木を読み、配置を決め、墨を付けて継手・仕口を刻むこと。時間はかかるが、複雑な伝統的継手や未乾燥・天然乾燥の材を扱える。社寺の大工、伝統構法の工務店、技を学ぶ若い大工のあいだに生きている。",
            zh:"手刻：木匠在自家工坊逐根判讀木料、安排位置、畫線並手工鑿製每一處榫接。速度較慢，但能製作複雜的傳統榫接，也能使用未乾燥或自然乾燥材；此技藝仍存續於寺社木匠、傳統工法營造者與學藝中的年輕木匠之間。" } },
        { r:"tenka fubu", jp:"天下布武", cat:GIFU.GC.history,
  d:{en:"The motto on the seal Nobunaga used from 1567, after taking Gifu: “to spread military order across the realm”.",ja:"信長が岐阜を得た1567年から用いた印の文句。「天下に武を布く」。",zh:"信長自 1567 年取得岐阜後所用印章上的文字：「以武布於天下」。"} },
        { r:"tennen kansō",
          jp:"天然乾燥",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Air drying in stickered stacks outdoors or under a roof: cheap and gentle, and preferred by many traditional builders for colour and scent, but slow — months for a conifer post, a year or more per inch for broadleaf boards — and limited to about 15 per cent moisture.",
            ja:"桟積みして屋外や屋根の下で乾かす方法。安くて穏やかで、色や香りを重んじる伝統的な作り手に好まれるが、時間がかかる——針葉樹の柱で数か月、広葉樹の板は一寸あたり一年以上——うえ、含水率は約十五パーセントまでしか下がらない。",
            zh:"自然乾燥：將木材隔條堆疊於戶外或棚下風乾。成本低、過程溫和，許多重視色澤與香氣的傳統匠人偏好此法，但耗時——針葉樹柱材需數月，闊葉樹板材每英寸厚需一年以上——且含水率只能降到約 15%。" } },
        { r:"tennen kōshin",
          jp:"天然更新",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Natural regeneration: letting a forest renew itself from seed or from stump sprouts instead of planting. It works well for coppice broadleaves and in the gaps of mixed forest, far less reliably on large clear-felled conifer sites taken over by bamboo grass and deer.",
            ja:"植えるのではなく、種子や切り株からの萌芽で森を更新させること。薪炭林の広葉樹や混交林のすき間ではうまくいくが、ササやシカに占められた針葉樹の大面積皆伐地では当てにしにくい。",
            zh:"天然更新：不經栽植，而靠種子或樹樁萌芽讓森林自行更新。對薪炭林的闊葉樹與混交林林隙效果良好，但在被矮竹與鹿群佔據的大面積針葉樹皆伐地則難以期待。" } },
        { r:"tennenrin",
          jp:"天然林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Forest that has regenerated naturally rather than been planted. In Gifu most of it is broadleaf secondary forest; old natural forest survives mainly in the national forests — beech on Hakusan, hinoki and sawara in Ura-Kiso, subalpine conifers in the Hida mountains.",
            ja:"植栽ではなく自然に更新した森。岐阜県ではその大半が広葉樹の二次林で、古い天然林は主に国有林に残る——白山のブナ、裏木曽のヒノキとサワラ、飛騨山脈の亜高山針葉樹である。",
            zh:"非人工栽植、而是自然更新形成的森林。岐阜的天然林多為闊葉樹次生林；古老的天然林主要殘存於國有林——白山的山毛櫸、裏木曾的扁柏與花柏、飛驒山脈的亞高山針葉樹。" } },
        { r:"tenryō", jp:"天領", cat:GIFU.GC.history,
  d:{en:"Land held directly by the shogunate; Hida was such land from 1692.",ja:"幕府が直接治めた土地。飛騨は1692年からそうであった。",zh:"由幕府直接統治的領地；飛驒自 1692 年起即是如此。"} },
        { r:"tetsu-oshoku",
          jp:"鉄汚染",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Iron stain: blue-black marks where tannin-rich woods — oak, chestnut, keyaki — touch iron and moisture, from nails, tools, steel wool or even iron dust. The same reaction, applied deliberately with an iron-vinegar solution, is an old way of darkening wood.",
            ja:"ナラ、クリ、ケヤキなどタンニンの多い材が、水気のあるところで鉄にふれてできる青黒いしみ。釘、道具、スチールウール、鉄粉でも起こる。同じ反応を鉄と酢の液で意図的に起こすのは、木を黒くする古い方法である。",
            zh:"鐵污染：單寧含量高的木材（櫟木、栗木、櫸木）在潮濕時接觸鐵件、工具、鋼絲絨甚至鐵粉所形成的藍黑色斑痕。刻意以鐵與醋調成的溶液引發同樣反應，則是讓木材變深的傳統方法。" } },
        { r:"tezure",
          jp:"手擦れ",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"The polish and hollowing left by generations of hands and feet: worn thresholds, glossy handrails, lacquer gone transparent. In Japan such wear is valued as the best evidence that an object has been used and cared for over a long time.",
            ja:"何代もの手や足が残した艶やくぼみ。すり減った敷居、光る手すり、透けてきた漆。日本では、ものが長く使われ大事にされてきたなによりの証しとして尊ばれる。",
            zh:"手擦痕：一代代的手與腳留下的光澤與凹陷——磨低的門檻、發亮的扶手、變透明的漆。在日本，這樣的磨耗被珍視為器物長年受到使用與愛護的最好證明。" } },
        { r:"Thonet No. 14",
          jp:"トーネット No.14",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"The bentwood café chair of 1859 by Michael Thonet's Vienna firm: six pieces of bent beech, ten screws and two nuts, shipped flat and produced in the tens of millions. Viennese chairs of this kind were the model for the first bentwood chairs made in Takayama.",
            ja:"ウィーンのミヒャエル・トーネットの会社が一八五九年に出した曲木のカフェチェア。曲げたブナ六部材、ねじ十本、ナット二つからなり、平たく梱包して送られ、数千万脚がつくられた。高山で最初につくられた曲木椅子は、この種のウィーンの椅子を手本とした。",
            zh:"維也納 Thonet 公司於 1859 年推出的曲木咖啡椅，由六根彎曲山毛櫸、十根螺絲與兩個螺帽組成，可拆平運送，產量達數千萬張。高山最早製作的曲木椅，便以這類維也納椅子為範本。" } },
        { r:"tobusa-date",
          jp:"鳥総立て",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Setting the top of a felled tree, or a leafy branch from it, upright in the stump — a return to the mountain god and, some say, a way of passing the tree's life to a new shoot. The custom already appears in the Man'yōshū.",
            ja:"伐った木の梢や葉のついた枝を切り株に立てること。山の神へのお返しであり、木の命を新しい芽へ渡すためともいう。すでに万葉集に詠まれている。",
            zh:"鳥總立：把伐倒之樹的樹梢或帶葉枝條插立在樹樁上，作為對山神的回禮，也有人說是讓樹的生命傳給新芽。此習俗早已見於《萬葉集》。" } },
        { r:"tochinoki",
          jp:"栃・トチノキ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Aesculus turbinata, Japanese horse chestnut, a tree of damp mountain valleys that can grow enormous. Its pale, soft, silky and often rippled wood is the classic material for turned bowls, trays and wide table slabs; the nuts, leached, were a famine food in Hida (tochi-mochi).",
            ja:"Aesculus turbinata。山の湿った谷に育ち、巨木になる。淡く柔らかく絹のような艶があり、しばしば縮み杢の出る材は、挽物の椀や盆、幅広の座卓の天板の定番である。実はあく抜きして飛騨の救荒食（栃餅）になった。",
            zh:"七葉樹（Aesculus turbinata）：生於潮濕山谷、可長成巨木。木材淡色、柔軟、具絲綢光澤，常帶波狀紋理，是車製木碗、托盤與寬幅桌板的經典材料；種子去澀後曾是飛驒的救荒食物（栃餅）。" } },
        { r:"tokkuri · guinomi · kiki-choko", jp:"徳利・ぐい呑み・利き猪口", cat:GIFU.GC.sake,
  d:{en:"The flask, the larger cup and the white tasting cup with its blue rings.",ja:"注ぐ徳利、大ぶりのぐい呑み、青い蛇の目の白い利き猪口。",zh:"酒壺、較大的ぐい呑杯，以及帶藍色蛇目圈的白色品酒杯。"} },
        { r:"tokonoma",
          jp:"床の間",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"The alcove of the best room, where a scroll and flowers are displayed. Its post, the tokobashira, is chosen for character — a polished sugi log, a gnarled trunk, a rare wood — and is often the most carefully selected timber in the house.",
            ja:"座敷の奥の、掛け軸や花を飾る一段の空間。その柱の床柱には、磨き丸太、節や曲がりのある幹、珍しい木など、趣のある材を選ぶ。家の中でもっとも吟味された木であることが多い。",
            zh:"床之間：主要客室中陳設掛軸與花的凹室。其柱「床柱」講究個性——拋光柳杉圓木、扭曲的樹幹或稀有木材——常是整棟房子中挑選得最用心的木材。" } },
        { r:"tokutei boju",
          jp:"特定母樹",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Specified mother trees: elite second-generation selections certified under a 2013 revision of the law on thinning. They must grow about one and a half times as fast as ordinary stock, with straight stems, adequate strength and roughly half or less the usual pollen.",
            ja:"国の育種事業の精英樹から選んだ第二世代で、二〇一三年の間伐等特措法の改正にもとづいて指定される。成長が通常の約一・五倍で、幹がまっすぐ、材の強さが十分で、花粉量がおおむね半分以下であることが条件である。",
            zh:"特定母樹：從國家育種計畫精英樹中選出的第二代，依 2013 年修訂的疏伐相關特別措施法認定。條件是生長速度約為一般苗木的 1.5 倍、樹幹通直、材質強度足夠，且花粉量約為一般的一半以下。" } },
        { r:"tomeyama",
          jp:"留山",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Closed forest: from 1665 under the Owari domain, the best remaining stands of Kiso, where entry and all cutting were forbidden. Several later became imperial forest and then reserve forests for the Ise Shrine.",
            ja:"一六六五年以降、尾張藩が木曽の最良の森を立ち入りも伐採もいっさい禁じた山。そのいくつかはのちに御料林、さらに神宮備林となった。",
            zh:"留山：尾張藩自 1665 年起，將木曾最好的殘存林分全面封閉，禁止進入與任何砍伐。其中數處後來成為皇室御料林，再成為伊勢神宮的備林。" } },
        { r:"tonewood",
          jp:"トーンウッド",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Wood chosen for its acoustic behaviour: light, stiff, low-damping softwoods such as spruce and cedar for tops; denser hardwoods such as rosewood, mahogany and maple for backs, sides and necks. Grades weigh straightness of grain, ring spacing, colour and figure.",
            ja:"音響的な性質で選ばれる木。表板には軽く剛く減衰の小さいスプルースやシダーなどの針葉樹、裏板・側板・ネックにはローズウッド、マホガニー、メイプルなど重めの広葉樹を使う。等級は木目のまっすぐさ、年輪の間隔、色、杢で決まる。",
            zh:"音材：依聲學特性挑選的木材。面板用輕、剛、阻尼低的雲杉或雪松等針葉樹；背板、側板與琴頸則用玫瑰木、桃花心木、楓木等較重的闊葉樹。分級依據木紋是否通直、年輪間距、顏色與紋理。" } },
        { r:"Tōnō hinoki",
          jp:"東濃ひのき",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"The brand hinoki of eastern Mino, centred on Ura-Kiso and now also Gero, Kamo, Seki and Gujō: narrow, even rings of 2–3 mm, pale pink, lustrous and fragrant, with few small knots. A promotion council of eleven forest cooperatives was formed in 2007.",
            ja:"東濃地方の銘柄材のヒノキ。裏木曽を中心に、いまは下呂、加茂、関、郡上にも及ぶ。年輪幅二〜三ミリで細かくそろい、淡い桃色で艶と香りがあり、節は小さく少ない。二〇〇七年に十一の森林組合がブランド化推進協議会をつくった。",
            zh:"東濃扁柏：以裏木曾為中心、如今也涵蓋下呂、加茂、關、郡上的東美濃品牌扁柏。年輪寬 2 至 3 公釐、細密均勻，呈淡粉色、有光澤與香氣，節少且小。2007 年由 11 個森林組合成立品牌推廣協議會。" } },
        { r:"top",
          jp:"表板",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"The soundboard: the thin front plate, about 2.5–3 mm thick on a steel-string guitar, that turns the vibration of the strings into sound in the air. Usually quartersawn spruce or cedar, book-matched from two halves of one billet and braced inside.",
            ja:"表板。弦の振動を空気の音に変える薄い前面の板で、スチール弦ギターでは厚さ約2.5〜3mm。ふつうスプルースかシダーの柾目板で、一つの材を二つに割って左右対称に接ぎ（ブックマッチ）、内側に力木を貼る。",
            zh:"面板：把琴弦振動轉換成空氣中聲音的薄前板，鋼弦吉他厚約 2.5–3 公釐。通常是雲杉或雪松的徑切板，由同一塊木料剖成兩半、左右對稱拼合，內側貼有音梁。" } },
        { r:"toranfu",
          jp:"虎斑",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"“Tiger flake”: the silvery ray figure that appears when oak is quartersawn, mizunara above all. The broad rays cut lengthwise show as irregular flakes across the straight grain, the signature of Japanese oak furniture.",
            ja:"ナラ、とくにミズナラを柾目に挽いたときに現れる銀色の放射組織の杢。太い放射組織が縦に切られ、まっすぐな木目の上に不規則な斑として浮かぶ。日本のナラ家具を象徴する表情である。",
            zh:"虎斑：櫟木（尤其是水楢）徑切時出現的銀色木射線紋。寬大的木射線被縱向剖開，在筆直紋理上呈現不規則的斑片，是日本櫟木家具的標誌。" } },
        { r:"tororo-aoi",
          jp:"トロロアオイ",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"Sunset hibiscus, whose crushed roots yield the mucilage (neri) added to the vat in nagashizuki. It keeps the fibres dispersed and slows the drainage so the papermaker can rock the screen; it works best in cold water, one reason paper was made in winter.",
            ja:"根をつぶして取る粘液（ネリ）を、流し漉きの漉き舟に加える植物。繊維を散らし、水の抜けを遅くして簀を揺すれるようにする。冷たい水でよく効くことが、紙すきが冬の仕事とされた理由の一つである。",
            zh:"黃蜀葵：根部搗碎後得到的黏液（日文稱「ネリ」）加入流漉的紙槽中，使纖維分散並減緩排水，讓匠人得以搖動竹簾。它在冷水中效果最好，這也是抄紙多在冬季的原因之一。" } },
        { r:"torrefaction",
          jp:"熱処理",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Heating tonewood in a low-oxygen kiln or in steam to imitate the colour and stability of aged wood. Yamaha's A.R.E. process has been used on its acoustic guitars since 2008, and suppliers now sell “torrefied” spruce tops as a matter of course.",
            ja:"酸素の少ない窯や蒸気の中でトーンウッドを加熱し、古い木の色と安定をまねる処理。ヤマハのA.R.E.は二〇〇八年からアコースティックギターに使われ、材の業者はいまや熱処理したスプルースの表板をふつうに売る。",
            zh:"熱處理（烘烤）：在低氧窯或蒸氣中加熱音材，以模仿老木的色澤與穩定性。Yamaha 的 A.R.E. 製程自 2008 年起用於其木吉他；木料商如今也常態販售烘烤雲杉面板。" } },
        { r:"tōyu",
          jp:"桐油",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Tung oil, pressed from the seeds of the tung tree (aburagiri): a fast-drying oil that gives a water-resistant finish. With perilla and linseed oils it was used to waterproof Gifu's paper umbrellas.",
            ja:"桐油。アブラギリの種から搾る、乾きの速い油で、水に強い仕上げになる。エゴマ油やアマニ油とともに、岐阜の和傘の防水に使われた。",
            zh:"桐油：由油桐（日文アブラギリ）種子榨取、乾燥快速的油，能形成耐水塗層。與荏油、亞麻仁油一同用於岐阜紙傘的防水。" } },
        { r:"truss rod",
          jp:"トラスロッド",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"An adjustable steel rod inside the neck that counters the pull of the strings and lets the relief be set as the seasons change. It is turned in small steps, about a quarter turn at a time; a rod that will not turn is a job for a repairer.",
            ja:"ネックの中に通した調整式の鋼の棒。弦の張力に抗し、季節に応じて順反りの量を調整できる。一度に四分の一回転ほどずつ、少しずつ回す。回らないロッドはリペアマンに任せる。",
            zh:"調整桿：裝在琴頸內的可調式鋼桿，抵抗琴弦拉力，並可隨季節調整琴頸弧度。每次只轉約四分之一圈、循序漸進；轉不動時就該交給修琴師。" } },
        { r:"tsuga",
          jp:"栂・ツガ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Tsuga sieboldii, the southern Japanese hemlock of rocky mid-slopes, with its subalpine relative kometsuga (T. diversifolia) higher up. Hard and fine for a conifer, with straight grain, it is prized for sills, lintels and interior joinery.",
            ja:"Tsuga sieboldii。岩の多い山腹に育ち、さらに高い亜高山には近縁のコメツガ（T. diversifolia）がある。針葉樹としては硬く緻密で木目が通り、敷居や鴨居、造作材として好まれる。",
            zh:"日本鐵杉（Tsuga sieboldii）：生於多岩的山腰，更高的亞高山帶則有近緣的米鐵杉（T. diversifolia）。以針葉樹而言質地堅硬細緻、紋理通直，常用於門檻、門楣與室內裝修材。" } },
        { r:"tsugite · shiguchi", jp:"継手・仕口", cat:GIFU.GC.joinery,
  d:{en:"Joints that lengthen a timber and joints that meet timbers at an angle, cut without nails.",ja:"材を継ぎ足す継手と、材を角度をつけて組む仕口。釘を使わずに刻む。",zh:"接長木料的「繼手」，與以角度相接木料的「仕口」，皆不用釘子。"} },
        { r:"tsukiita",
          jp:"突板",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"Sliced veneer: a sheet of fine wood a fraction of a millimetre thick — about 0.2 mm is common on flooring — glued onto plywood or board. It makes scarce or figured woods go further, but a veneered face can be sanded only lightly, if at all.",
            ja:"突板。0.2mm前後の薄さにそいだ化粧用の木の薄板で、合板やボードに張る。希少な木や杢のある木を広く使えるが、張った面は軽く研ぐ程度しか削り直せない。",
            zh:"突板：以刨切方式製成、厚度僅零點幾公釐（地板常見約 0.2 公釐）的薄木片，貼在合板或板材上。能讓稀有或具紋理的木材用得更廣，但貼面最多只能輕度砂磨。" } },
        { r:"tsunaba",
          jp:"綱場",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Rope station: a place where ropes and booms stretched across a river caught drifting logs. The most important, at Nishikori in present-day Yaotsu, came under the Owari domain's direct control in 1665; logs were counted there, checked for marks and first bound into rafts.",
            ja:"川に張った綱や留め木で流れてくる材木を受けとめる場所。最も重要だったのは現在の八百津町の錦織綱場で、一六六五年に尾張藩の直轄となった。ここで材木を数え、刻印を改め、初めて筏に組んだ。",
            zh:"綱場：在河上拉設繩索與攔木以攔截漂流木材的地點。最重要的是今八百津町的錦織綱場，1665 年起由尾張藩直轄；木材在此清點、核對刻印，並首次編成木筏。" } },
        { r:"tsuru",
          jp:"つる",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"The hinge — literally “bowstring”: the band of uncut fibres left between notch and back cut, about a tenth of the diameter thick. As the tree falls it bends and steers the trunk along the line of the notch; without it the tree goes where weight and wind decide.",
            ja:"受け口と追い口のあいだに切り残す繊維の帯で、厚さは直径の十分の一ほど。木が倒れはじめると「つる」が曲がって幹を受け口の方向へ導く。これがなければ、木は重さと風の決める方へ倒れる。",
            zh:"鉸鏈（つる，原意為弓弦）：受口與追口之間保留、厚約直徑十分之一的未鋸纖維帶。樹木開始倒下時，鉸鏈彎曲並引導樹幹沿受口方向倒下；少了它，樹就會順著重心與風向倒。" } },
        { r:"tsurukiri",
          jp:"つる切り",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Vine cutting: removing wisteria, akebia and other climbers that twist round young stems and deform or strangle them, usually from around the seventh year and often together with cleaning (johatsu).",
            ja:"若い幹に巻きついて曲げたり締めつけたりするフジやアケビなどのつる植物を切る作業。おおむね七年目ごろから、除伐とあわせて行うことが多い。",
            zh:"除蔓：砍除纏繞幼樹主幹、使其彎曲甚至勒死的紫藤、木通等藤本植物，通常自第 7 年左右開始，常與除伐一併進行。" } },
        { r:"ubune",
          jp:"鵜舟",
          cat:{ en:"Crafts", ja:"工芸", zh:"工藝" },
          d:{
            en:"The long wooden boat of the Nagara cormorant fishing, about thirteen metres long and crewed by three, with an iron basket of burning split pine at the bow. The sightseeing boats that follow the fishing are also wooden, built and maintained by local boatwrights.",
            ja:"長良川の鵜飼の細長い木の舟。長さ約十三メートルで三人が乗り、舳先には割った松を燃やす鉄のかごを吊るす。鵜飼を見物する観覧船も木造で、地元の舟大工がつくり、手入れする。",
            zh:"鵜舟：長良川鵜飼使用的細長木船，長約 13 公尺，由三人操作，船首掛著燃燒劈開松木的鐵籠。跟隨觀賞鵜飼的遊覽船也是木造，由當地船匠建造與維護。" } },
        { r:"udatsu",
          jp:"卯建",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A raised fire wall at the end of a roof between neighbouring townhouses, capped with its own small roof. Costly to build, it became a sign of wealth — hence the phrase udatsu ga agaranai, “never raising an udatsu”. Mino's paper merchants built many.",
            ja:"隣り合う町家の境で、屋根の端を一段高くして設けた防火の壁で、小さな屋根をのせる。建てるのに費用がかかったので富のしるしとなり、「うだつが上がらない」という言い回しを生んだ。美濃の紙問屋が多く建てた。",
            zh:"卯建：鄰接町家之間在屋頂端部升起並加蓋小屋頂的防火牆。造價高昂而成為財富象徵，日語「卯建升不起來」即指出不了頭。美濃的紙商建造了許多。" } },
        { r:"ukai",
          jp:"鵜飼",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Cormorant fishing: on the Nagara at Gifu city, from 11 May to 15 October, fishermen work from long wooden boats lit by fires of split pine, handling trained cormorants on leashes. The six Gifu masters hold the title of cormorant master of the Imperial Household Agency.",
            ja:"鵜飼。岐阜市の長良川で五月十一日から十月十五日まで、鵜匠が割った松の篝火をともした細長い木の舟から、縄をつけた鵜を操って漁をする。岐阜の六人の鵜匠は宮内庁式部職鵜匠の称号をもつ。",
            zh:"鵜飼：每年 5 月 11 日至 10 月 15 日，在岐阜市長良川上，鵜匠從點著劈松篝火的細長木船上，操控繫繩的鸕鶿捕魚。岐阜的六位鵜匠擁有「宮內廳式部職鵜匠」的稱號。" } },
        { r:"ukeguchi",
          jp:"受け口",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"“Receiving mouth”: the wedge-shaped notch cut on the side towards which a tree is to fall, usually a quarter to a third of the diameter deep. Its upper and lower cuts must meet exactly, because their meeting line sets the hinge and so the direction of fall.",
            ja:"木を倒したい側に入れるくさび形の切りこみで、深さはふつう直径の四分の一から三分の一。上下の切りこみがぴたりと合わなければならない。その合わせ目が「つる」の線となり、倒れる方向を決めるからである。",
            zh:"受口（倒向切口）：在樹木預定倒下的一側鋸出的楔形缺口，深度通常為直徑的四分之一至三分之一。上下兩道鋸口必須準確交會，因為交會線決定鉸鏈（つる）的位置，也就決定倒向。" } },
        { r:"uotsukirin",
          jp:"魚付林",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"Fish-breeding forest: an old Japanese category of protected forest along rivers and coasts, kept because the shade, insects, leaf litter and nutrients that fall from the trees feed the fish. It survives as one of the classes of protection forest under the Forest Act.",
            ja:"魚つき林。川や海岸沿いの森が落とす陰、虫、落ち葉、養分が魚を養うとして守られてきた古い森の区分で、いまも森林法の保安林の一種として残る。",
            zh:"魚付林：日本古老的護林類別，沿河川與海岸保留森林，因為樹木投下的陰影以及落下的昆蟲、落葉與養分能滋養魚類。至今仍是《森林法》保安林的類別之一。" } },
        { r:"Ura-Kiso",
          jp:"裏木曽",
          cat:{ en:"Forest", ja:"森林", zh:"森林" },
          d:{
            en:"“Behind Kiso”: the Gifu side of the Kiso forests — Kashimo, Tsukechi and Kawaue, now part of Nakatsugawa — where the Owari domain also protected hinoki. Its national forest has supplied timber for the Ise Shrine since the rebuilding of 1709.",
            ja:"木曽の森の岐阜県側で、いまは中津川市に属する加子母・付知・川上の地域。ここでも尾張藩がヒノキを保護した。その国有林は一七〇九年の遷宮以来、伊勢神宮の用材を送り出している。",
            zh:"裏木曾：木曾森林位於岐阜縣的一側，即今屬中津川市的加子母、付知與川上一帶，尾張藩同樣在此保護扁柏。當地國有林自 1709 年的遷宮起便供應伊勢神宮用材。" } },
        { r:"uretan tosō",
          jp:"ウレタン塗装",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Polyurethane finish: a two-part resin that cures into a thick, well-bonded film resistant to wear, water and stains — the everyday finish of Japanese factory furniture, from gloss to near-matt. It hides some of the wood's texture and must be repaired in a workshop.",
            ja:"ウレタン塗装。二液の樹脂が硬化して厚く密着した膜になり、摩耗、水、汚れに強い。光沢からほぼつや消しまで、日本の工場家具のふつうの塗装である。木の質感をいくらか隠し、補修は工房で行う。",
            zh:"聚氨酯塗裝：雙液型樹脂硬化成厚實、附著力強的膜層，耐磨、耐水、耐污，是日本工廠家具最常見的塗裝，從亮面到近乎霧面皆有。它會掩蓋部分木材質感，損傷須送回工坊修理。" } },
        { r:"urushi",
          jp:"漆",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Japanese lacquer: the sap of the lacquer tree, Toxicodendron vernicifluum, tapped from cuts in the bark in summer. It cures not by drying but by an enzyme, laccase, that links its urushiol in warm, humid air into a film highly resistant to water, acids and alcohol.",
            ja:"ウルシの木（Toxicodendron vernicifluum）の樹液で、夏に幹の浅い傷から採る。乾いて固まるのではなく、酵素ラッカーゼが温かく湿った空気の中でウルシオールをつなげて硬化させ、水、酸、アルコールに非常に強い膜になる。",
            zh:"漆：漆樹（Toxicodendron vernicifluum）的樹液，於夏季從樹皮上的淺切口採集。它不是靠乾燥，而是由漆酶在溫暖潮濕的空氣中使漆酚聚合而硬化，形成極耐水、耐酸與耐酒精的漆膜。" } },
        { r:"urushi-kabure",
          jp:"漆かぶれ",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"The rash caused by uncured lacquer. Its main component, urushiol, is the same compound that makes poison ivy irritating, so lacquerers wear gloves; fully cured lacquer is inert, and Japan has eaten from it for well over a thousand years.",
            ja:"硬化していない漆による皮膚のかぶれ。主成分のウルシオールは、ツタウルシでかぶれるのと同じ物質で、塗師は手袋をして作業する。硬化しきった漆は安定し、日本では千年以上も食器に使われてきた。",
            zh:"漆過敏：未硬化的漆引起的皮膚炎。其主成分漆酚與使毒葛致癢的物質相同，因此漆匠戴手套工作；完全硬化的漆性質穩定，日本用它盛裝食物已逾千年。" } },
        { r:"urushi-kaki",
          jp:"漆掻き",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Lacquer tapping: from June to October the tapper cuts a new horizontal groove in the trunk every few days and scrapes up the sap that beads out. A tree of ten years or more yields only about 200 g in a season, and is then usually felled.",
            ja:"漆掻き。六月から十月にかけ、数日おきに幹へ新しい横の傷を刻み、にじみ出る樹液をへらで集める。十年以上育った木一本から一夏にとれるのは約200gで、そのあと木はたいてい伐られる。",
            zh:"採漆：6 月至 10 月間，每隔數日在樹幹上刻一道新的橫向切口，刮取滲出的樹液。一棵樹齡十年以上的漆樹一季只能採約 200 公克，之後通常便伐倒。" } },
        { r:"ushō", jp:"鵜匠", cat:GIFU.GC.gculture,
  d:{en:"A cormorant master; those of the Nagara hold posts in the Imperial Household Agency.",ja:"鵜を使う漁師。長良川の鵜匠は宮内庁の職を持つ。",zh:"鸕鶿漁師；長良川的鵜匠在宮內廳任職。"} },
        { r:"UV tosō",
          jp:"UV塗装",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"UV-cured coating: liquid resins with a photoinitiator that harden in moments under ultraviolet lamps. They build thick, very hard films with little solvent, suit flat parts such as flooring and table tops, and are the hardest of all finishes to repair.",
            ja:"UV塗装。光開始剤を含む液状の樹脂が、紫外線ランプの下で一瞬で硬化する。溶剤が少なく、厚く非常に硬い膜になり、床材や天板など平らな部材に向くが、補修はあらゆる塗装のうちでもっとも難しい。",
            zh:"UV 塗裝：含光起始劑的液態樹脂，在紫外線燈下瞬間硬化。溶劑少，可形成厚而極硬的膜層，適合地板與桌面等平面部件，卻是所有塗裝中最難修補的一種。" } },
        { r:"uzukuri",
          jp:"浮造り",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"A surface of sugi or pine rubbed with a stiff brush until the soft earlywood wears away and the hard latewood of each ring stands up in ridges. Slip-resistant, low in glare and pleasant underfoot, it is popular for floors, though the soft wood still dents.",
            ja:"スギや松の表面を硬いブラシでこすり、柔らかい早材を削って、年輪ごとの硬い晩材を畝のように浮き出させた面。すべりにくく、まぶしくなく、足ざわりがよいので床に好まれるが、柔らかい木なので傷はつく。",
            zh:"浮造：以硬刷反覆刷磨柳杉或松木表面，磨去柔軟的早材，使每道年輪堅硬的晚材如畦般浮起。止滑、不反光、踩起來舒適，常用於地板，但軟木仍會留下凹痕。" } },
        { r:"uzura-moku",
          jp:"鶉杢",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Quail figure: a dense, speckled pattern on the faces of very old, slow-grown sugi, from Yakushima and elsewhere, likened to a quail's feathers. It is sought for ceiling boards and small crafts.",
            ja:"屋久杉などきわめて古くゆっくり育ったスギの板面に出る、ウズラの羽にたとえられる細かな斑の杢。天井板や小さな工芸品に求められる。",
            zh:"鶉杢：出現在屋久杉等極老、生長緩慢的柳杉板面上的細密斑點紋理，形似鵪鶉羽毛，常用於天花板與小型工藝品。" } },
        { r:"wagasa", jp:"和傘", cat:GIFU.GC.papercraft,
  d:{en:"The oiled-paper umbrella; Gifu makes more than anywhere else in Japan.",ja:"油を引いた紙の傘。岐阜が日本で最も多くつくる。",zh:"塗油的紙傘；岐阜的產量居日本之冠。"} },
        { r:"wajū", jp:"輪中", cat:GIFU.GC.land,
  d:{en:"A village or group of villages enclosed by a ring levee on the low delta of the three rivers.",ja:"三川の低い三角州で、輪のような堤に囲まれた村や村々。",zh:"三條河川低窪三角洲上，被環形堤防圍住的村落或村落群。"} },
        { r:"washi", jp:"和紙", cat:GIFU.GC.papercraft,
  d:{en:"Japanese hand-made paper, in Mino made chiefly from kōzo.",ja:"日本の手漉きの紙。美濃では主に楮でつくる。",zh:"日本手工紙，美濃主要以楮製作。"} },
        { r:"Windsor chair",
          jp:"ウィンザーチェア",
          cat:{ en:"Furniture", ja:"家具", zh:"家具" },
          d:{
            en:"An English country chair with a solid wooden seat into which the legs, spindles and back are socketed. Kashiwa Mokkō in Takayama began making Windsors in 1952, and the type became a staple of Hida production, adapted to Japanese proportions.",
            ja:"厚い木の座板に脚と背の棒を差しこんでつくる、イギリスの田舎の椅子。高山の柏木工が一九五二年につくり始め、日本人の体格に合わせて飛騨の定番となった。",
            zh:"溫莎椅：源自英國鄉間的椅子，在實木座板上插入椅腳、背棒與椅背。高山的柏木工於 1952 年開始製作，依日本人的體型調整後，成為飛驒的招牌品類。" } },
        { r:"Wood Start",
          jp:"ウッドスタート",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"A programme of the Tokyo Toy Museum in which a municipality pledges to give newborns a wooden toy of local timber and to bring wood into childcare; the name echoes Britain's Bookstart. Shinjuku was the first to sign, on 6 August 2012.",
            ja:"東京おもちゃ美術館の取り組みで、自治体が地元の木でつくったおもちゃを新生児に贈り、子育てに木を取り入れることを宣言する。名はイギリスのブックスタートにならう。二〇一二年八月六日、新宿区が最初に宣言した。",
            zh:"Wood Start（木育起步）：東京玩具美術館推動的計畫，自治體宣示致贈新生兒以在地木材製作的玩具，並把木材帶進育兒環境；名稱仿自英國的 Bookstart。新宿區於 2012 年 8 月 6 日率先加入。" } },
        { r:"X-bracing",
          jp:"Xブレーシング",
          cat:{ en:"Sound & instruments", ja:"音と楽器", zh:"聲音與樂器" },
          d:{
            en:"Two long braces crossing just below the soundhole, with smaller tone bars below, glued inside the top. Associated with the Martin company in the nineteenth century, it became the standard for steel-string guitars because it holds the greater string tension.",
            ja:"サウンドホールのすぐ下で交差する二本の長い力木と、その下の小さなトーンバーからなる表板の内側の補強。十九世紀のマーティン社に結びつけられ、強い弦の張力に耐えるので、スチール弦ギターの標準となった。",
            zh:"X 型音梁：在音孔下方交叉的兩根長音梁，加上其下的小型音調梁，黏在面板內側。與 19 世紀的 Martin 公司密切相關，因能承受較大的弦張力，成為鋼弦吉他的標準。" } },
        { r:"yakisugi",
          jp:"焼杉",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"Sugi boards charred to a layer of carbon that resists rot, insects and weather. Traditionally three boards are roped into a triangular flue and a fire lit inside; hand-charred boards are said to last sixty to seventy years. Known abroad as shou sugi ban.",
            ja:"表面を炭化させて、腐れ、虫、風雨に強くしたスギ板。伝統的には三枚の板を縄で三角の筒に組み、中で火を焚く。手で焼いた板は六十〜七十年もつといわれる。海外では「shou sugi ban」の名で知られる。",
            zh:"燒杉：將柳杉板表面燒成碳層，使其耐腐、防蟲、耐候。傳統做法是把三片板子用繩綁成三角煙囪，在內部生火；據說手工燒製的板材可用六、七十年。在海外以「shou sugi ban」之名聞名。" } },
        { r:"yakumono",
          jp:"役物",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"“Feature pieces”: timber of the knot-free and near-knot-free grades, sold for its looks for exposed posts, ceilings, frames and alcoves. As houses hid their frames behind plasterboard, the premium for yakumono shrank, and with it the incentive to prune.",
            ja:"無節や上小節など見た目の等級の高い材で、見せる柱、天井、枠、床の間のために見た目で売られる。家の骨組みが石膏ボードの裏に隠れるようになると役物の割増は縮み、枝打ちする動機も失われた。",
            zh:"役物：無節、上小節等外觀等級高的木材，因美觀而用於外露柱、天花板、框料與床之間。當住宅構架被石膏板遮蔽後，役物的溢價縮水，修枝的誘因也隨之消失。" } },
        { r:"yakusugi",
          jp:"屋久杉",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Sugi from Yakushima, south of Kyūshū, strictly trees over about a thousand years old. Slow-grown and resin-rich, with dense quail figure. Living trees are no longer felled; old logs and stumps recovered from the forest floor (domaiboku) have sold as meiboku ceiling boards and crafts, a supply now close to exhausted.",
            ja:"九州南方の屋久島のスギで、厳密には樹齢およそ千年を超えるもの。ゆっくり育ち脂に富み、細かな鶉杢が出る。生きた木はもう伐られず、林床から出された古い倒木や切り株（土埋木）が銘木の天井板や工芸品として売られてきたが、その供給も尽きかけている。",
            zh:"屋久杉：九州南方屋久島的柳杉，嚴格而言指樹齡約千年以上者。生長緩慢、富含樹脂，帶有細密的鶉紋。活樹已不再砍伐；從林床取出的古倒木與樹樁（土埋木）一直作為銘木天花板與工藝品販售，但其來源也已近枯竭。" } },
        { r:"Yama, Hoko, Yatai",
          jp:"山・鉾・屋台行事",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"“Yama, Hoko, Yatai, float festivals in Japan”, inscribed by UNESCO on 1 December 2016: thirty-three festivals in eighteen prefectures. Gifu's three are Takayama, Furukawa and Ōgaki — carpentry, carving, lacquer and metalwork on wheels.",
            ja:"二〇一六年十二月一日にユネスコ無形文化遺産に登録された「山・鉾・屋台行事」。十八府県の三十三の祭からなり、岐阜県からは高山、古川、大垣の三つが入る。車にのせた大工、彫刻、漆、金工の技である。",
            zh:"山、鉾、屋台行事：2016 年 12 月 1 日列入聯合國教科文組織非物質文化遺產，包括 18 個府縣的 33 項祭典。岐阜縣有高山、古川與大垣三項——裝在車輪上的木作、雕刻、漆藝與金工。" } },
        { r:"yamamoto tachiki kakaku",
          jp:"山元立木価格",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Stumpage price: what the owner receives for a cubic metre of standing trees, after the costs of felling, extraction and haulage. For hinoki it fell from about ¥42,900 in 1980 to about ¥8,900 in March 2024, and for sugi from ¥22,700 to ¥4,100.",
            ja:"伐採、搬出、運搬の費用を差し引いて、立木一立方メートルに対し所有者が受け取る価格。ヒノキは一九八〇年の約四万二千九百円から二〇二四年三月には約八千九百円に、スギは二万二千七百円から四千百円に下がった。",
            zh:"山元立木價格：扣除伐採、集材與運輸成本後，林主每立方公尺立木實際可得的價格。扁柏從 1980 年約 42,900 日圓跌至 2024 年 3 月約 8,900 日圓，柳杉則從 22,700 日圓跌至 4,100 日圓。" } },
        { r:"yama no kami",
          jp:"山の神",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The mountain god who owns the forest and allows trees to be taken but must be asked and thanked; usually imagined as female and jealous. Many forestry districts keep one day a month on which nobody enters the forest, and mark New Year and the felling season with offerings.",
            ja:"森を領し、木を伐ることを許すが、願い、感謝しなければならない山の神。ふつう女神で、嫉妬深いと考えられる。多くの林業地では月に一日、誰も山に入らない日を守り、正月や伐採の始まりに供え物をする。",
            zh:"山之神：擁有森林、允許人伐木，但必須事先祈求並事後感謝的山神，通常被想像為善妒的女神。許多林業地區每月有一天無人入山，並在新年與伐木季開始時獻上供品。" } },
        { r:"yamazakura",
          jp:"山桜・ヤマザクラ",
          cat:{ en:"Trees & species", ja:"樹種", zh:"樹種" },
          d:{
            en:"Prunus jamasakura, the wild mountain cherry of the Mino hills. Fine-textured, it reddens with age and was the wood of printing blocks and fine furniture; its bark is used for the inlay craft kabazaiku.",
            ja:"Prunus jamasakura。美濃の丘陵に育つ野生のサクラ。肌目が細かく年とともに赤みを増し、版木や上等の家具の材となった。樹皮は樺細工に使われる。",
            zh:"山櫻（Prunus jamasakura）：生於美濃丘陵的野生櫻樹。紋理細緻，隨年歲轉紅，是雕版與高級家具的用材；樹皮用於樺皮工藝（樺細工）。" } },
        { r:"yangu keisū",
          jp:"ヤング係数",
          cat:{ en:"Wood science", ja:"木材の科学", zh:"木材科學" },
          d:{
            en:"Modulus of elasticity, the measure of stiffness: how little a beam bends under load. Small clear specimens give about 7.4 GPa for sugi and 8.8 for hinoki; for structural timber Japan grades it by machine into classes from E50 to E150.",
            ja:"剛性、つまり荷重を受けた梁がどれだけたわみにくいかを示す値。無欠点の小試験体でスギ約7.4GPa、ヒノキ約8.8GPa。構造用製材ではE50からE150までの等級に機械で区分する。",
            zh:"楊氏係數（彈性模數）：衡量剛性，即樑在載重下彎曲的程度。無缺點小試材的數值約為柳杉 7.4 GPa、扁柏 8.8 GPa；日本的結構用製材以機械分級，分為 E50 至 E150 等級。" } },
        { r:"yatai",
          jp:"屋台",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"A festival float: in Takayama a two- or three-tiered structure on four large wheels, framed in keyaki and other hardwoods, rising to around eight metres, covered with carving, lacquer, gilded metal and brocade. Twenty-three yatai take part in Takayama's two festivals.",
            ja:"祭の屋台。高山では四つの大きな車輪にのる二層または三層の構築物で、ケヤキなどの堅木で骨組みをつくり、高さ八メートルほどに達し、彫刻、漆、金具、錦で飾られる。高山の春と秋の祭には二十三台の屋台が出る。",
            zh:"屋台：祭典山車。在高山是裝在四個大車輪上的兩層或三層結構，以櫸木等硬木構成骨架，高可達約 8 公尺，覆滿雕刻、漆、鍍金金具與織錦。高山春秋兩季祭典共有 23 台屋台。" } },
        { r:"yatai-gumi",
          jp:"屋台組",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"The neighbourhood association that owns a Takayama festival float, keeps it in its storehouse and pays for its upkeep and restoration. Its members are the households of the district, and the associations keep the records of each float's repairs.",
            ja:"高山の祭屋台を所有し、屋台蔵に納め、維持と修理の費用をまかなう町内の組。組は町内の家々からなり、屋台ごとの修理の記録を保つ。",
            zh:"屋台組：擁有高山祭屋台、將其存放在屋台藏並負擔維護與修復費用的街區組織，由該街區各戶組成，並保存每台屋台的修繕紀錄。" } },
        { r:"yatai-gura",
          jp:"屋台蔵",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"The tall, narrow, white-walled storehouse in which a neighbourhood keeps its festival float, with doors high enough to roll the float out. Takayama's yatai-gura punctuate the old streets; a float's demountable upper stage lets it fit.",
            ja:"町内が祭の屋台をしまう、背が高く細長い白壁の蔵。屋台を引き出せるほど高い扉をもつ。高山の古い町並みのところどころに建ち、屋台の上段を下げられる仕組みがあるので中に収まる。",
            zh:"屋台藏：街區存放祭典山車的高窄白牆倉庫，門高足以將山車推出。高山老街上處處可見；山車上段可降下的設計，讓它收得進去。" } },
        { r:"Yoake mae",
          jp:"夜明け前",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Before the Dawn, Shimazaki Tōson's novel serialised from 1929 to 1935 and set in Magome, now part of Nakatsugawa. One of its central conflicts is over wood: the Meiji state takes the Kiso forests and shuts the villagers out of their customary rights.",
            ja:"島崎藤村が一九二九年から一九三五年にかけて連載した小説で、いまは中津川市に属する馬籠が舞台。中心の対立の一つは木をめぐるもので、明治の国家が木曽の森を取り上げ、村人を昔からの入会の権利から締め出す。",
            zh:"《黎明之前》：島崎藤村於 1929 至 1935 年連載的小說，舞台是今屬中津川市的馬籠。其核心衝突之一與木材有關——明治政府收歸木曾森林，將村民排除於原有的入山權利之外。" } },
        { r:"yō and chō",
          jp:"庸・調",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"Two of the three main taxes of the ritsuryō state: chō, paid in local products such as silk, cloth, iron or salt, and yō, a commutation of labour service. Hida was excused both and sent carpenters instead, under a rule preserved in the Yōrō code of 718.",
            ja:"律令国家の三つの主な税のうちの二つ。調は絹、布、鉄、塩などの特産物で納め、庸は労役の代わりに納めた。七一八年の養老令に残る規定により、飛騨はこの二つを免じられ、代わりに大工を出した。",
            zh:"庸與調：律令國家三大租稅中的兩種——調以絹、布、鐵、鹽等地方產物繳納，庸則為勞役的折納。依 718 年《養老令》中留存的規定，飛驒免繳這兩種稅，改派木匠。" } },
        { r:"yorishiro",
          jp:"依代",
          cat:{ en:"Culture & belief", ja:"文化と信仰", zh:"文化與信仰" },
          d:{
            en:"In Shintō, an object to which a god descends and which it inhabits for a time: a tall straight tree, a rock, a peak. The oldest shrines had no buildings, only an enclosure around such a tree or stone; the sakaki branches offered today are small portable yorishiro.",
            ja:"神道で、神が降りてしばらく宿るもの。高くまっすぐな木、岩、山の頂など。最古の神社には建物がなく、そうした木や石を囲む聖域だけがあった。いま供える榊の枝は、持ち運べる小さな依代である。",
            zh:"依代：神道中神明降臨並暫時寄宿之物，如高聳挺直的樹、巨岩或山峰。最古老的神社沒有建築，只有圍繞此類樹石的聖域；如今供奉的榊枝，就是可攜帶的小型依代。" } },
        { r:"yui",
          jp:"結",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"Mutual labour between households: each sends people to help rethatch a neighbour's roof and receives the same help in turn. In Shirakawa-gō it still organises the renewal of gasshō roofs, a whole side of which can be done in a day or two.",
            ja:"家どうしの助け合いの労働。屋根の葺き替えに各戸が人を出し、自分の番には同じ助けを受ける。白川郷ではいまも合掌造りの屋根の葺き替えを支え、屋根の片面を一、二日で葺き替えることもある。",
            zh:"結：村中各戶互助的勞動方式，每戶派人協助鄰居重葺屋頂，輪到自家時再得到同樣的幫忙。在白川鄉，它至今仍支撐合掌屋頂的更新，一面屋頂有時一兩天即可完成。" } },
        { r:"yūryōzai",
          jp:"優良材",
          cat:{ en:"Logging & timber", ja:"素材と木材", zh:"伐木與木材" },
          d:{
            en:"Quality timber — old, large, pruned, knot-free logs. Once a year the Tōnō market holds the prefecture's quality-timber exhibition, where the best hinoki are judged and awarded before sale and can fetch several times the normal price.",
            ja:"樹齢が高く太く、枝打ちされて節のない丸太。東濃の市場では年に一度、県の優良材展示会が開かれ、最上のヒノキが審査・表彰されてからせりにかけられ、通常の何倍もの値がつくことがある。",
            zh:"優良材：樹齡高、徑級大、經修枝而無節的原木。東濃市場每年舉辦一次縣優良材展示會，最好的扁柏先經評審表揚再行拍賣，價格可達一般的數倍。" } },
        { r:"yusei gōsei urushi",
          jp:"油性合成漆",
          cat:{ en:"Lacquer & finishes", ja:"漆と塗装", zh:"漆與塗裝" },
          d:{
            en:"“Oil-based synthetic lacquer” on a Japanese label means simply an oil-based paint: despite the word urushi it has nothing to do with lacquer-tree sap, which is labelled urushi. Cashew-nut-shell coatings are another common stand-in for urushi.",
            ja:"表示の「油性合成漆塗装」は油性の塗料を塗ったものにすぎず、「漆」の字があってもウルシの樹液とは関係がない。本物は「漆塗装」と表示される。カシューナッツの殻からつくるカシュー塗料も、漆の代わりによく使われる。",
            zh:"日本標示中的「油性合成漆」其實只是油性塗料，雖有「漆」字卻與漆樹樹液無關；真正的漆標示為「漆」。以腰果殼製成的腰果漆也是常見的漆代用品。" } },
        { r:"zairai kōhō",
          jp:"在来工法",
          cat:{ en:"Building", ja:"建築", zh:"建築" },
          d:{
            en:"The conventional Japanese way of building a wooden house: a frame of posts and beams, now usually pre-cut by machine and stiffened with braces or structural panels. Most of Gifu's new wooden houses are still built this way, often by local carpenters.",
            ja:"日本の木造住宅の在来の建て方。柱と梁で骨組みをつくり、いまはたいてい機械でプレカットし、筋かいや構造用の面材で固める。岐阜の新しい木造住宅の多くもこの方法で、地元の大工が建てることが多い。",
            zh:"在來工法：日本木造住宅的傳統工法，以柱與樑構成骨架，如今多半由機器預切，並以斜撐或結構面板補強。岐阜新建的木造住宅多數仍採此法，且常由當地木匠興建。" } },
        { r:"zero-mētoru chitai", jp:"ゼロメートル地帯", cat:GIFU.GC.land,
  d:{en:"Land below mean sea level; the lowest part of the Nōbi Plain is the largest such zone in Japan.",ja:"平均海面より低い土地。濃尾平野の最も低い部分は、日本最大のそれである。",zh:"低於平均海平面的土地；濃尾平原最低處是日本最大的這類地帶。"} }
      ] },
    { t:"related", items:[
        { href:"words.html", why:{ en:"The words of wood, told as stories.", ja:"木のことばを、物語として。", zh:"以故事講述木的語言。" } },
        { href:"translation.html", why:{ en:"Words that do not translate.", ja:"訳せない語。", zh:"翻譯不過去的詞。" } },
        { href:"faq.html", why:{ en:"The words in use.", ja:"使われる言葉。", zh:"實際使用中的詞彙。" } },
        { href:"tables.html", why:{ en:"The numbers and the measures.", ja:"数字と単位。", zh:"數字與單位。" } },
        { href:"chronology.html", why:{ en:"The dates.", ja:"年。", zh:"年代。" } }
      ] }
  ]
};

/* ---- ------------------------------------------- figures */
GIFU.pages["figures"] = {
  kicker: { en:"Reference · 11", ja:"資料 · 11", zh:"資料 · 11" },
  title:  { en: "Every Diagram", ja: "図版一覧", zh: "圖表總覽" },
  jp: "図版一覧",
  lede: {
    en: "The book's diagrams gathered in one list, page by page, each with the opening words of its caption and a link to where it sits. None is a photograph: every one was drawn for this book from the facts and figures in the text beside it, and the schematic ones — maps that keep places in order but not to scale, processes drawn as rows of boxes — say so on their face. For readers who take things in by eye, it is a quick way round the whole book.",
    ja: "本書の図を頁ごとに一覧にし、キャプションの書き出しと、その図の載る場所へのリンクを添えた。写真は一枚もない。どの図も、かたわらの本文の事実と数字からこの本のために描いたもので、模式図——場所の並びは保つが縮尺は保たない地図や、箱の列で表した工程——はそのことを図のなかに明記している。目でものをつかむ読者には、本書全体をすばやく見渡す道になる。",
    zh: "把本書的圖表依頁面彙整成一份清單，附上每張圖說的開頭，以及連到圖表所在之處的連結。這裡沒有照片：每一張都是根據旁邊文字中的事實與數字，專為本書繪製；示意圖——保留地點順序但不按比例的地圖、以一排方框表示的工序——都在圖上標明。對習慣用眼睛吸收資訊的讀者，這是快速瀏覽全書的一條路。"
  },
  body: [
    { t:"figindex" },

    { t:"note", label:{ en:"How they are made", ja:"どうつくられているか", zh:"它們是怎麼做出來的" }, text:{
      en:"Behind each diagram is a short function that draws it as SVG in whichever language the reader has chosen, so the Japanese and Chinese versions are drawn in those languages rather than being an English picture with a translated caption. Being text, the diagrams can be searched, read aloud by assistive software, enlarged and printed without losing sharpness, and there are no image files in the book. The approach is the one used in <em>The Book of Sake</em> by 13STUDIO, whose design this book follows.",
      ja:"どの図も、読者の選んだ言語でSVGとして描く短い関数から生まれる。日本語版や中国語版は、英語の絵に訳したキャプションを付けたものではなく、その言語で描かれている。図が文字でできているので、検索でき、読み上げソフトで読め、拡大しても印刷しても鮮明さを失わない。本書に画像ファイルはない。この方法は、本書がそのデザインを受け継いだ13STUDIOの『The Book of Sake』のものである。",
      zh:"每張圖表背後都是一段簡短的函式，依讀者所選的語言把它繪成 SVG；因此日文版與中文版是以該語言繪製，而不是在英文圖片上加翻譯圖說。由於圖表由文字構成，可以搜尋、可由輔助軟體朗讀，放大與列印都不失清晰；本書沒有任何圖片檔。這個做法來自本書沿用其設計的 13STUDIO《The Book of Sake》。" } },

    { t:"related", items:[
      { href:"index.html", why:{ en:"Start from the overview instead.", ja:"概観から始める。", zh:"改從總覽開始。" } },
      { href:"tables.html", why:{ en:"The numbers, gathered the same way.", ja:"数字を同じように集めたもの。", zh:"以同樣方式彙整的數字。" } },
      { href:"glossary.html", why:{ en:"The words, gathered the same way.", ja:"言葉を同じように集めたもの。", zh:"以同樣方式彙整的詞彙。" } },
      { href:"sources.html", why:{ en:"The sources behind the diagrams.", ja:"図の背後の資料。", zh:"圖表背後的資料來源。" } }
    ] }
  ]
};

/* ---- ------------------------------------------- sources */
(function () {
function A(url, title) {
  return '<a href="' + url + '" target="_blank" rel="noopener">' + title + "</a>";
}
function list(items) {
  return '<span class="src-list">' + items.map(function (x) { return A(x[0], x[1]); }).join(" · ") + "</span>";
}
function entry(term, jp, desc, links) {
  var l = list(links);
  return { term: term, jp: jp, def: { en: desc.en + " " + l, ja: desc.ja + " " + l, zh: desc.zh + " " + l } };
}

GIFU.pages["sources"] = {
  kicker: { en:"Reference · 12", ja:"資料 · 12", zh:"資料 · 12" },
  title:  { en: "Sources", ja: "出典", zh: "資料來源" },
  jp: "出典と読書案内",
  lede: {
    en: "This book is compiled from public documents: the statistics and reports of Gifu Prefecture and its municipalities, the national ministries and agencies, universities and research institutes, museums, and the makers themselves. The official and primary sources come first so that any figure can be checked where it was published. Statistics move, so where a number matters the year is given with it. The links below were consulted in September 2026 and open in a new tab.",
    ja: "本書は公開資料から編んだ。岐阜県と市町村の統計や報告、国の省庁、大学と研究機関、博物館、そして作り手自身の資料である。どの数字も発表されたところで確かめられるよう、公的な一次資料を先に挙げる。統計は動くので、数字が意味を持つところでは年を添えた。以下のリンクは2026年9月に参照したもので、新しいタブで開く。",
    zh: "本書依據公開資料編纂：岐阜縣及其市町村的統計與報告、國家各省廳、大學與研究機構、博物館，以及製作者本身的資料。官方與一手資料列於最前，以便每個數字都能在其發布之處查證。統計會變動，因此凡數字重要之處，皆附上年份。以下連結於 2026 年 9 月查閱，會在新分頁開啟。"
  },
  body: [
    { t:"section", id:"prefecture",
      title:{ en:"Gifu Prefecture", ja:"岐阜県", zh:"岐阜縣" }, jp:"pref.gifu.lg.jp",
      body:[
        { t:"defs", items:[
          entry({en:"Statistics and administration",ja:"統計と行政",zh:"統計與行政"}, "統計課・市町村課",
            {en:"Area, population, municipalities and the prefecture's rankings, including the tableware and cutlery shares quoted throughout.",ja:"面積、人口、市町村、県の全国順位。本書で引く食器や刃物の割合を含む。",zh:"面積、人口、市町村與全縣的全國排名，包括本書各處引用的餐具與刀具占比。"},
            [["https://www.pref.gifu.lg.jp/uploaded/attachment/467282.pdf","統計からみた岐阜県の現状（2025年10月）"],
             ["https://www.pref.gifu.lg.jp/uploaded/attachment/467447.pdf","統計からみた岐阜県の特徴やじまん（2025年）"],
             ["https://www.pref.gifu.lg.jp/page/6058.html","岐阜県の市町村一覧"],
             ["https://www.pref.gifu.lg.jp/page/5129.html","岐阜県内の合併状況"],
             ["https://www.pref.gifu.lg.jp/page/10117.html","人口・世帯数"],
             ["https://www.pref.gifu.lg.jp/page/365413.html","岐阜県統計書"],
             ["https://www.pref.gifu.lg.jp/page/324278.html","飛騨地域の概要"],
             ["https://www.pref.gifu.lg.jp/page/111.html","岐阜県のシンボル"]]),
          entry({en:"Forests",ja:"森林",zh:"森林"}, "林政部",
            {en:"The forest resource, its age and ownership, the timber industry and the forest and environment tax.",ja:"森林資源、その齢級と所有、木材産業、森林・環境税。",zh:"森林資源及其林齡與所有權、木材產業，以及森林與環境稅。"},
            [["https://www.pref.gifu.lg.jp/uploaded/attachment/329260.pdf","岐阜県の林業・木材産業の現状"],
             ["https://www.pref.gifu.lg.jp/uploaded/attachment/290443.pdf","岐阜県の森林・林業の現状"],
             ["https://www.pref.gifu.lg.jp/uploaded/attachment/303417.pdf","岐阜県の森林・木材"],
             ["https://www.forest.rd.pref.gifu.lg.jp/pdf/bull0601.pdf","岐阜県におけるヒノキ天然生林の分布と地域特性（森林研究所）"],
             ["https://www.forest.ac.jp/about/philosophy/","岐阜県立森林文化アカデミー 沿革"],
             ["https://www.city.seki.lg.jp/cmsfiles/contents/0000000/446/02.pdf","清流の国ぎふ森林・環境税（広報せき 2012年）"],
             ["https://www.city.kaizu.lg.jp/kurashi/0000003060.html","森林環境税の課税開始について（海津市）"]]),
          entry({en:"Cultural properties and heritage",ja:"文化財と遺産",zh:"文化財與遺產"}, "文化伝承課ほか",
            {en:"Designated sites and properties, the preservation districts, the traditional crafts and the ayu of the Nagara.",ja:"指定の史跡や文化財、伝統的建造物群保存地区、伝統的工芸品、長良川の鮎。",zh:"指定史跡與文化財、傳統建造物群保存地區、傳統工藝品，以及長良川香魚。"},
            [["https://www.pref.gifu.lg.jp/page/304232.html","岐阜県の伝統的工芸品について"],
             ["https://www.pref.gifu.lg.jp/page/12418.html","重要伝統的建造物群保存地区"],
             ["https://www.pref.gifu.lg.jp/page/56640.html","世界農業遺産「清流長良川の鮎」"],
             ["https://www.pref.gifu.lg.jp/page/365968.html","昼飯大塚古墳"],
             ["https://www.pref.gifu.lg.jp/page/366357.html","美濃国府跡"],
             ["https://www.pref.gifu.lg.jp/page/355032.html","楽市楽座制札"],
             ["https://www.pref.gifu.lg.jp/page/365132.html","門和佐の舞台"],
             ["https://www.pref.gifu.lg.jp/page/5915.html","日本最古の石にふれるみち"],
             ["https://www.pref.gifu.lg.jp/page/3155.html","名水百選 宗祇水"],
             ["https://jishibai.pref.gifu.lg.jp/?lang=english","Gifu, “Land of Ji-Shibai” Web Museum"],
             ["https://sekigahara.pref.gifu.lg.jp/","岐阜関ケ原古戦場記念館"]]),
          entry({en:"Disasters, rivers and the rest",ja:"災害・川・その他",zh:"災害、河川及其他"}, "防災課・歴史資料館ほか",
            {en:"The 1976 flood, the Meiji river works, the ptarmigan survey, the Fuyū persimmon, Hida beef's founding bull and the maglev.",ja:"1976年の水害、明治の河川改修、ライチョウの調査、富有柿、飛騨牛の種雄牛、リニア。",zh:"1976 年水災、明治時期河川整治、岩雷鳥調查、富有柿、飛驒牛的種公牛，以及磁浮鐵路。"},
            [["https://www.pref.gifu.lg.jp/page/6965.html","9月12日豪雨災害（昭和51年）"],
             ["https://www.pref.gifu.lg.jp/page/2598.html","木曽長良揖斐三川改修計画書"],
             ["https://www.pref.gifu.lg.jp/page/17142.html","御嶽山ライチョウ生息状況調査"],
             ["https://www.pref.gifu.lg.jp/uploaded/attachment/5934.pdf","富有柿の由来"],
             ["https://www.livestock.rd.pref.gifu.lg.jp/SIR/SIRinfo/Yasufuku.html","「安福」の経歴（畜産研究所）"],
             ["https://www.pref.gifu.lg.jp/page/16609.html","リニア中央新幹線工事情報"]])
        ] }
      ]
    },
    { t:"section", id:"national",
      title:{ en:"National ministries and agencies", ja:"国の省庁と機関", zh:"國家各省廳與機關" }, jp:"go.jp",
      body:[
        { t:"defs", items:[
          entry({en:"Ministry of Land, Infrastructure, Transport and Tourism",ja:"国土交通省",zh:"國土交通省"}, "mlit.go.jp",
            {en:"The three rivers, their works and dams, and the old roads.",ja:"三川とその工事とダム、古い道。",zh:"三條河川及其工程與水壩，以及古道。"},
            [["https://www.cbr.mlit.go.jp/kisojyo/outline/pdf/r07_gaiyo.pdf","木曽三川の概要（木曽川上流河川事務所）"],
             ["https://www.mlit.go.jp/river/toukei_chousa/kasen/jiten/nihon_kawa/0509_kiso/0509_kiso_01.html","日本の川 木曽川・長良川・揖斐川"],
             ["https://www.cbr.mlit.go.jp/kisokaryu/gakusyu/ijin/15.html","ヨハニス・デ・レイケ"],
             ["https://www.cbr.mlit.go.jp/kisokaryu/sisetu/takasu.html","高須輪中排水機場"],
             ["https://www.mlit.go.jp/river/damc/action/dam121.html","徳山ダム"],
             ["https://www.cbr.mlit.go.jp/road/chubu-fukei/route/09.html","古道ロマン「東山道」"],
             ["https://www.cbr.mlit.go.jp/kikaku/mirai/05/02.htm","うだつの上がる町並みを生かしたまちづくり"]]),
          entry({en:"Forestry Agency",ja:"林野庁",zh:"林野廳"}, "rinya.maff.go.jp",
            {en:"Forest cover by prefecture, the Kiso hinoki forests and the Kiso Five, and forestry labour.",ja:"都道府県別の森林率、木曽ヒノキ林と木曽五木、林業の担い手。",zh:"各都道府縣森林率、木曾檜木林與木曾五木，以及林業人力。"},
            [["https://www.rinya.maff.go.jp/j/keikaku/genkyou/r4/1.html","都道府県別森林率・人工林率（令和4年3月31日現在）"],
             ["https://www.rinya.maff.go.jp/chubu/koho/kisohinoki/kisohinokirin.html","木曽ヒノキ林"],
             ["https://www.rinya.maff.go.jp/chubu/kiso/morigatari/kisogoboku.html","木曽五木"],
             ["https://www.rinya.maff.go.jp/chubu/tounou/attach/pdf/index-2.pdf","岐阜東濃の国有林"],
             ["https://www.rinya.maff.go.jp/j/routai/doukou/index.html","林業労働力の動向"],
             ["https://www.rinya.maff.go.jp/j/kikaku/toukei/youran_mokuzi2025.html","森林・林業統計要覧2025"]]),
          entry({en:"Ministry of Agriculture, Forestry and Fisheries",ja:"農林水産省",zh:"農林水產省"}, "maff.go.jp",
            {en:"The agricultural heritage listing, local dishes and the geographical indication of the Hachiya persimmon.",ja:"世界農業遺産、郷土料理、堂上蜂屋柿の地理的表示。",zh:"世界農業遺產、鄉土料理，以及堂上蜂屋柿的地理標示。"},
            [["https://www.maff.go.jp/j/pr/aff/2306/heritage01.html","旅する農業遺産「清流長良川の鮎」"],
             ["https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/38_10_gifu.html","うちの郷土料理 朴葉味噌"],
             ["https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/38_18_gifu.html","うちの郷土料理 水まんじゅう"],
             ["https://gi-act.maff.go.jp/register/entry/50.html","地理的表示 堂上蜂屋柿"]]),
          entry({en:"Agency for Cultural Affairs",ja:"文化庁",zh:"文化廳"}, "bunka.go.jp",
            {en:"Designated properties, World Heritage, the preservation districts and the Japan Heritage stories.",ja:"指定文化財、世界遺産、伝統的建造物群保存地区、日本遺産。",zh:"指定文化財、世界遺產、傳統建造物群保存地區與日本遺產。"},
            [["https://online.bunka.go.jp/special_content/hlink4","白川郷・五箇山の合掌造り集落"],
             ["https://online.bunka.go.jp/special_content/intangible/210010","高山祭の屋台行事"],
             ["https://online.bunka.go.jp/heritages/detail/170028","岐阜城跡"],
             ["https://online.bunka.go.jp/heritages/detail/138374","根尾谷断層"],
             ["https://online.bunka.go.jp/heritages/detail/205403","オオサンショウウオ生息地"],
             ["https://www.bunka.go.jp/seisaku/bunkazai/shokai/hozonchiku/","伝統的建造物群保存地区"],
             ["https://japan-heritage.bunka.go.jp/ja/stories/story006/","日本遺産「信長公のおもてなし」"],
             ["https://japan-heritage.bunka.go.jp/ja/stories/story029/","日本遺産「飛騨匠の技・こころ」"],
             ["https://bunka.nii.ac.jp/db/heritages/detail/201183","御野国加毛郡半布里大宝二年戸籍断簡"],
             ["https://bunka.nii.ac.jp/heritages/detail/208134","美濃の地歌舞伎衣裳"]]),
          entry({en:"Other national bodies",ja:"その他の国の機関",zh:"其他國家機關"}, "go.jp",
            {en:"Weather records, disaster reports, tax history, springs and great trees, hydro potential, dams, archives and trade.",ja:"気象の記録、災害の報告、税の歴史、名水と巨樹、包蔵水力、ダム、公文書、貿易。",zh:"氣象紀錄、災害報告、稅制史、名水與巨樹、水力蘊藏量、水壩、公文書與貿易。"},
            [["https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=52&block_no=47617&year=&month=&day=&view=","気象庁 高山の平年値"],
             ["https://www.bousai.go.jp/kyoiku/kyokun/kyoukunnokeishou/rep/1891_noubi_jishin/index.html","内閣府 1891 濃尾地震 報告書"],
             ["https://www.nta.go.jp/about/organization/ntc/sozei/quiz/1008/index.htm","国税庁 律令国家の免税（斐陀国）"],
             ["https://water-pub.env.go.jp/water-pub/mizu-site/meisui/data/index.asp?info=45","環境省 名水百選 宗祇水"],
             ["https://kyoju.biodic.go.jp/?_action=gtcontents&_command=column053","環境省 位山のイチイ"],
             ["https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/hydroelectric/database/energy_japan004/","資源エネルギー庁 日本の水力エネルギー量"],
             ["https://www.water.go.jp/chubu/tokuyama/gaiyo/index.html","水資源機構 徳山ダム"],
             ["https://www.stat.go.jp/info/guide/pdf/gifu.pdf","総務省統計局 岐阜県 日本の真ん中"],
             ["https://www.soumu.go.jp/main_sosiki/daijinkanbou/sensai/situation/state/tokai_01.html","総務省 岐阜市における戦災の状況"],
             ["https://crd.ndl.go.jp/reference/entry/index.php?page=ref_view&id=1000066031","国立国会図書館 レファレンス協同データベース 金華山"],
             ["https://www.jetro.go.jp/jetro/japan/gifu/company/takamine_gakki.html","ジェトロ岐阜 高峰楽器製作所"]])
        ] }
      ]
    },
    { t:"section", id:"municipal",
      title:{ en:"Cities, towns and villages", ja:"市町村", zh:"市町村" }, jp:"lg.jp",
      body:[
        { t:"defs", items:[
          entry({en:"Gifu, Ōgaki and the plain",ja:"岐阜・大垣と平野",zh:"岐阜、大垣與平原"}, "岐阜市・大垣市ほか",
            {en:"Cormorant fishing, Nobunaga's palace, the castle, the Media Cosmos, fossils, springs and the Yōrō legend.",ja:"鵜飼、信長の居館、城、メディアコスモス、化石、湧き水、養老の伝説。",zh:"鵜飼、信長居館、城、媒體宇宙、化石、湧泉與養老傳說。"},
            [["https://www.city.gifu.lg.jp/kankoubunka/kankou/1005099/1005111.html","ぎふ長良川の鵜飼 よくあるご質問"],
             ["https://www.city.gifu.lg.jp/kankoubunka/bunkazai/1005557/1005566.html","信長居館発掘調査案内所"],
             ["https://www.city.gifu.lg.jp/kankoubunka/kankou/1013051/1005097/1005098.html","岐阜城天守閣"],
             ["https://www.city.gifu.lg.jp/kankoubunka/kankou/1005049/1029653.html","みんなの森 ぎふメディアコスモス"],
             ["https://www.ukai-gifucity.jp/history.html","ぎふ長良川の鵜飼 1300年の歴史"],
             ["https://www.city.ogaki.lg.jp/0000000664.html","金生山化石館"],
             ["https://www.town.yoro.gifu.jp/tourism/culture/1002223/1002226.html","「養老」の由来"],
             ["https://www.city.mizuho.lg.jp/fuyuu/","富有柿発祥の地"],
             ["https://www.city.kakamigahara.lg.jp/kankobunka/1010039/murakuniza/1004876.html","村国座とは"],
             ["https://www.city.kaizu.lg.jp/shisei/cmsfiles/contents/0000001/1294/hariyohozonkanrikeikaku_an.pdf","津屋川水系清水池ハリヨ生息地 保存管理計画（海津市）"]]),
          entry({en:"Seki, Mino and the middle valleys",ja:"関・美濃と中ほどの谷",zh:"關、美濃與中部河谷"}, "関市・美濃市ほか",
            {en:"Cutlery statistics, the population centre, place names, paper, river ports, timber rafting and Sugihara Chiune.",ja:"刃物の統計、人口重心、地名、紙、川湊、筏流し、杉原千畝。",zh:"刀具統計、人口重心、地名、紙、河港、木筏漂流與杉原千畝。"},
            [["https://www.city.seki.lg.jp/cmsfiles/contents/0000004/4761/kogyo_R2.pdf","関市の工業（令和2年度）"],
             ["https://www.city.seki.lg.jp/0000003447.html","国勢調査からみた岐阜県関市"],
             ["https://www.city.seki.lg.jp/0000001408.html","各市町村の名称由来"],
             ["https://www.city.mino.gifu.jp/docs/1193.html","上有知湊"],
             ["https://www.town.yaotsu.lg.jp/1524.htm","錦織綱場"],
             ["https://www.town.yaotsu.lg.jp/sugihara-museum/","杉原千畝記念館"],
             ["https://www.city.minokamo.lg.jp/soshiki/12/1590.html","堂上蜂屋柿について"],
             ["https://www.city.motosu.lg.jp/0000001086.html","能郷の能・狂言"]]),
          entry({en:"Tōnō",ja:"東濃",zh:"東濃"}, "中津川市・多治見市・瑞浪市ほか",
            {en:"The Kiso Five, the Ise timber, the playhouses and costumes, Magome's move to Gifu and Eihō-ji.",ja:"木曽五木、伊勢の御用材、芝居小屋と衣裳、馬籠の越県、永保寺。",zh:"木曾五木、伊勢御用材、戲棚與戲服、馬籠越縣，以及永保寺。"},
            [["https://www.city.nakatsugawa.lg.jp/museum/n/topics/23420.html","木曽五木あれこれ"],
             ["https://www.city.nakatsugawa.lg.jp/kanko/oshirase/33666.html","第63回 伊勢神宮 式年遷宮"],
             ["https://www.city.nakatsugawa.lg.jp/soshikikarasagasu/kankoka/5/2/750.html","かしも明治座"],
             ["https://www.city.nakatsugawa.lg.jp/soshikikarasagasu/kankoka/bunka/6936.html","中津川の地歌舞伎"],
             ["https://www.city.nakatsugawa.lg.jp/soshikikarasagasu/yamaguchi/local/1152.html","山口地域の由来・歴史"],
             ["https://www.city.mizunami.lg.jp/kankou_bunka/bunkazai/1001295/1007624.html","美濃の地歌舞伎衣裳"],
             ["http://www.city.tajimi.lg.jp/bunkazai/bunkazai/eihoji/eihhoji.htm","永保寺の文化財"]]),
          entry({en:"Hida",ja:"飛騨",zh:"飛驒"}, "高山市・飛騨市・下呂市・白川村",
            {en:"Takayama's area and crafts, Gero's springs and playhouses, and Shirakawa-gō's heritage area, snow and fire drill.",ja:"高山の面積と工芸、下呂の温泉と芝居小屋、白川郷の世界遺産の区域と雪と放水訓練。",zh:"高山的面積與工藝、下呂的溫泉與戲棚，以及白川鄉的世界遺產區域、雪與放水演習。"},
            [["https://www.city.takayama.lg.jp/faq/1000073/1000158/1003220.html","高山市の面積"],
             ["https://www.city.takayama.lg.jp/shisei/1000067/1002790/1002815/1002816/1002819.html","一位一刀彫"],
             ["https://www.city.takayama.lg.jp/shisei/1000067/1002790/1002815/1002816/1002818.html","飛騨春慶"],
             ["https://www.city.gero.lg.jp/site/kanko/1258.html","下呂温泉の紹介"],
             ["https://www.city.gero.lg.jp/site/kanko/1384.html","芝居小屋（地歌舞伎）"],
             ["https://www.vill.shirakawa.lg.jp/1960.htm","世界遺産エリア"],
             ["https://www.vill.shirakawa.lg.jp/1195.htm","歳時記 冬"],
             ["https://www.vill.shirakawa.lg.jp/hidanichi/isseihousui/index.html","秋の一斉放水訓練"]])
        ] }
      ]
    },
    { t:"section", id:"research",
      title:{ en:"Universities, research and museums", ja:"大学・研究機関・博物館", zh:"大學、研究機構與博物館" }, jp:"ac.jp ほか",
      body:[
        { t:"defs", items:[
          entry({en:"Earth and sky",ja:"大地と空",zh:"大地與天空"}, "岐阜大学・東京大学ほか",
            {en:"The rocks of Gifu, the 2014 eruption of Ontake, the Norikura road and the heat record of 2007.",ja:"岐阜の岩石、2014年の御嶽山の噴火、乗鞍の道路、2007年の最高気温。",zh:"岐阜的岩石、2014 年御嶽山噴發、乘鞍道路，以及 2007 年的高溫紀錄。"},
            [["https://chigaku.ed.gifu-u.ac.jp/chigakuhp/html/kyo/chisitsu/gifunochigaku/rocks_and_minerals/oldest_rocks/index.html","岐阜の地学 日本最古の岩石（岐阜大学）"],
             ["https://chigaku.ed.gifu-u.ac.jp/chigakuhp/html/kyo/chisitsu/gifunochigaku/rocks_and_minerals/nobi_rhyolite/index.html","岐阜の地学 濃飛流紋岩"],
             ["https://www.eri.u-tokyo.ac.jp/eq/1893/","2014年9月27日御嶽山の噴火（東京大学地震研究所）"],
             ["https://www.icrr.u-tokyo.ac.jp/norikura/users_mycarkisei.html","乗鞍岳マイカー規制（東京大学宇宙線研究所）"],
             ["https://www.crl.nitech.ac.jp/?p=441","多治見で史上最高気温40.9℃（名古屋工業大学）"],
             ["https://committees.jsce.or.jp/heritage/node/1258","大井ダムならびに大井発電所（土木学会選奨土木遺産）"]]),
          entry({en:"History and society",ja:"歴史と社会",zh:"歷史與社會"}, "鹿児島大学・大阪経済大学ほか",
            {en:"The Hōreki works, the Gifu apparel district, the Gujō uprising, the village playhouses and Shirakawa-gō.",ja:"宝暦治水、岐阜のアパレル産地、郡上一揆、村の芝居小屋、白川郷。",zh:"寶曆治水、岐阜成衣產地、郡上一揆、村落戲棚與白川鄉。"},
            [["https://www.sci.kagoshima-u.ac.jp/oyo/advanced/engineering/horeki.html","宝暦治水（鹿児島大学）"],
             ["https://www.osaka-ue.ac.jp/file/general/19075","岐阜アパレル産地（大阪経済大学）"],
             ["https://www.jstage.jst.go.jp/article/jsds/2013/33/2013_17/_pdf/-char/ja","岐阜繊維問屋街の発展要因（J-STAGE）"],
             ["https://gakuen.gifu-net.ed.jp/~contents/syou_shyakai/h15/ikki/content/index.html","宝暦郡上一揆年表"],
             ["https://gijodai.jp/chibunken/chishibai/2015/08/post-10.html","地芝居（岐阜女子大学 地域文化研究所）"],
             ["http://dac.gijodai.ac.jp/db/sozai/03_sirakawagou/hp/housui/album03.html","白川郷 一斉放水（岐阜女子大学デジタルアーカイブ）"]]),
          entry({en:"Museums, shrines and associations",ja:"博物館・社寺・団体",zh:"博物館、寺社與團體"}, "",
            {en:"The Ise forests, the Shōkawa cherries, the Nomugi Pass, hot springs and mountain faith.",ja:"伊勢の森、荘川桜、野麦峠、温泉、山岳信仰。",zh:"伊勢之森、莊川櫻、野麥峠、溫泉與山岳信仰。"},
            [["https://www.isejingu.or.jp/sengu/forest.html","永遠の森（伊勢神宮）"],
             ["https://sake-museum.jp/sakura/780/","笹部さんの生涯 荘川桜と頌桜の碑（白鹿記念酒造博物館）"],
             ["https://museum.furusatonagawa.com/about.html","野麦峠ミュージアム 背景と歴史"],
             ["https://www.spa.or.jp/kokumin/1011/","奥飛騨温泉郷（日本温泉協会）"],
             ["https://www.hirayuonsen.or.jp/hot_springs4.php","平湯の伝説（平湯温泉観光協会）"],
             ["https://www.ontakekyo.or.jp/about/","御嶽山について（御嶽教）"]])
        ] }
      ]
    },
    { t:"section", id:"makers",
      title:{ en:"The makers", ja:"作り手", zh:"製作者" }, jp:"企業・工房",
      body:[
        { t:"defs", items:[
          entry({en:"Company histories",ja:"会社の沿革",zh:"公司沿革"}, "",
            {en:"Founding dates and histories are the makers' own, from their published histories.",ja:"創業年と沿革は、作り手みずからが公表しているものによる。",zh:"創業年份與沿革皆依製作者自行公布者。"},
            [["https://www.yairi.co.jp/about/outline.html","ヤイリギター 会社概要"],
             ["https://www.takamineguitars.co.jp/aboutus/ayumi.html","タカミネの歩み"],
             ["https://www.oakv.co.jp/company/history.html","オークヴィレッジ 会社沿革"],
             ["https://hidasangyo.com/company/history/","飛騨産業 沿革"],
             ["https://www.hidanokagu.jp/guide/outline.html","協同組合 飛騨木工連合会 概要"],
             ["https://www.masuza.co.jp/article/2273/","大垣の枡の歴史と大橋量器のお話"],
             ["https://www.jetro.go.jp/jetro/japan/gifu/company/nissin_furniture_crafters.html","日進木工（ジェトロ岐阜）"]]),
          { term:{en:"The Book of Sake",ja:"The Book of Sake",zh:"The Book of Sake"}, jp:"13STUDIO",
            def:{en:"The product lists for Tenryō, Kozaemon, Ibi, Takesuzume and Michisakari are taken from the directory of <em>The Book of Sake</em> by 13STUDIO, which compiled them from the breweries' own publications. It is this book's sister volume from the same studio, and shares its design system and runtime. " + A("https://github.com/13studio-sudo/sake","github.com/13studio-sudo/sake"),
              ja:"天領、小左衛門、射美、竹雀、三千盛の定番の酒の一覧は、各蔵の公表資料から編まれた13STUDIOの『The Book of Sake』の名鑑による。同じスタジオによる本書の姉妹編で、デザインの体系と実行の仕組みを共有している。 " + A("https://github.com/13studio-sudo/sake","github.com/13studio-sudo/sake"),
              zh:"天領、小左衛門、射美、竹雀與三千盛的常態酒款清單，取自 13STUDIO《The Book of Sake》依各酒藏公開資料編成的名鑑；該書為同一工作室的姊妹作，本書與之共用設計系統與執行架構。 " + A("https://github.com/13studio-sudo/sake","github.com/13studio-sudo/sake")} }
        ] }
      ]
    },
    { t:"section", id:"documents",
      title:{ en:"Historical documents", ja:"史料", zh:"史料" }, jp:"史料",
      body:[
        { t:"table",
          cols:[{en:"Document",ja:"文献",zh:"文獻"},{en:"Date",ja:"年代",zh:"年代"},{en:"What it gives this book",ja:"本書に与えるもの",zh:"本書由此所得"}],
          numCols:[1],
          rows:[
            [{en:"Mino household registers (Shōsōin)",ja:"御野国戸籍（正倉院）",zh:"御野國戶籍（正倉院）"},"702",{en:"Mino paper at the start of the eighth century, and early mentions of cormorant fishers",ja:"八世紀初めの美濃紙と、鵜飼の人々についての早い言及",zh:"八世紀初的美濃紙，以及關於鵜飼漁人的早期記載"}],
            [{en:"Nihon Shoki",ja:"日本書紀",zh:"日本書紀"},"720",{en:"The Jinshin War in Mino; Ryōmen Sukuna",ja:"美濃の壬申の乱、両面宿儺",zh:"美濃的壬申之亂；兩面宿儺"}],
            [{en:"Man'yōshū",ja:"万葉集",zh:"萬葉集"},{en:"c. 759",ja:"759年ごろ",zh:"約 759 年"},{en:"The poem whose pillow word names the Shiramayumi brewery",ja:"白真弓の銘のもととなった枕詞の歌",zh:"讓「白真弓」酒藏得名的枕詞和歌"}],
            [{en:"Engishiki",ja:"延喜式",zh:"延喜式"},"927",{en:"The ranks and districts of Mino and Hida",ja:"美濃と飛騨の国の等級と郡",zh:"美濃與飛驒的國等與郡"}],
            [{en:"Konjaku Monogatari",ja:"今昔物語集",zh:"今昔物語集"},{en:"12th c.",ja:"12世紀",zh:"12 世紀"},{en:"The tale of the Hida carpenter's contest with the painter Kudara no Kawanari",ja:"飛騨の工と絵師・百済川成の腕比べの話",zh:"飛驒工匠與畫師百濟川成比試技藝的故事"}],
            [{en:"Letter of Rokkaku Jōtei",ja:"六角承禎書写",zh:"六角承禎書信"},"1560",{en:"The two-generation account of the rise of Saitō Dōsan",ja:"斎藤道三の国盗りを父子二代とする記述",zh:"齋藤道三崛起為父子兩代之事的記述"}],
            [{en:"Luís Fróis, letters and <em>Historia</em>",ja:"ルイス・フロイスの書簡と『日本史』",zh:"路易斯·佛洛伊斯的書信與《日本史》"},"1569",{en:"The description of Nobunaga's palace at Gifu",ja:"岐阜の信長の居館の描写",zh:"對信長岐阜居館的描述"}],
            [{en:"Hayashi Razan",ja:"林羅山",zh:"林羅山"},{en:"17th c.",ja:"17世紀",zh:"17 世紀"},{en:"Gero named among the three famous springs",ja:"下呂を三名泉の一つに挙げた言葉",zh:"將下呂列為三大名泉之一的記述"}],
            [{en:"Bashō, <em>Oku no Hosomichi</em>",ja:"芭蕉『おくのほそ道』",zh:"芭蕉《奧之細道》"},"1689",{en:"The journey that ends at Ōgaki",ja:"大垣で結ぶ旅",zh:"在大垣結束的旅程"}],
            [{en:"Yamamoto Shigemi, <em>Ā Nomugi Tōge</em>",ja:"山本茂実『あゝ野麦峠』",zh:"山本茂實《啊，野麥峠》"},"1968",{en:"The Hida girls who crossed to the silk mills of Suwa",ja:"諏訪の製糸工場へ峠を越えた飛騨の娘たち",zh:"翻越山口前往諏訪製絲廠的飛驒少女"}]
          ] }
      ]
    },
    { t:"section",
      id:"official",
      title:{ en:"Wood: Government and public statistics", ja:"木：官公庁の資料と公的統計", zh:"木：政府資料與公共統計" },
      jp:"公的資料",
      body:[
        { t:"p",
          text:{
            en:"These are the sources to trust first. Each entry gives the body, the Japanese or Chinese name under which its documents can be found, what was taken from it and the pages where it is used. Two habits of Japanese statistics matter throughout: most prefectural forestry figures run by fiscal year, from April to March, while most national industrial statistics run by calendar year; and the same quantity — log production is the usual example — can carry different values in different surveys. <a href=\"industry.html\">Wood in Numbers</a> explains why.",
            ja:"まず信頼すべきはこれらの資料である。各項には、機関名と、その文書を探すときの日本語または中国語の名称、そこから何を引いたか、どの頁で使ったかを記した。日本の統計を読むうえで二つの癖が全体にかかわる。県の林業の数字の多くは四月から翌年三月までの年度で集計され、国の工業統計の多くは暦年で集計されること。そして同じ量——素材生産量がよい例である——が、調査によって異なる値をとりうることである。理由は<a href=\"industry.html\">木の数字</a>で説明した。",
            zh:"這些是應當優先信任的資料。每一項列出機構名稱、查找其文件時所用的日文或中文名稱、從中取用了什麼，以及使用於哪些頁面。閱讀日本統計時，有兩個習慣貫穿全書：縣的林業數字多以 4 月至翌年 3 月的年度統計，而國家的工業統計多以曆年統計；同一個量——原木生產量就是典型的例子——在不同調查中可能有不同的數值。原因見<a href=\"industry.html\">木材的數字</a>。" } },
        { t:"h3", text:{ en:"Japan: ministries and agencies", ja:"国の省庁", zh:"日本中央省廳" }, jp:"国" },
        { t:"defs",
          items:[
            { term:{ en:"Forestry Agency — the annual report", ja:"林野庁——白書", zh:"林野廳——白皮書" },
              jp:"林野庁 · 森林・林業白書 · rinya.maff.go.jp",
              def:{
                en:"The book's largest single publisher: some twenty-six of the documents recorded in the research logs are the agency's. Its <em>Annual Report on Forest and Forestry in Japan</em>, read in the editions for FY2017 to FY2025, supplied the series of domestic urushi production on <a href=\"finishes.html\">Finishes</a>; the model economics of a hectare of sugi (special feature, FY2020) on <a href=\"silviculture.html\">Planting &amp; Tending</a> and <a href=\"forests.html\">Gifu's Forests</a>; the special feature on sugi pollen (FY2023) on <a href=\"health.html\">Forests &amp; the Body</a>; construction methods of the wooden houses started in 2024 on <a href=\"home.html\">Wood in the Home</a>; and firewood, boilers, pellets and woody biomass on <a href=\"fuel.html\">Wood as Fire</a>.",
                ja:"本書で最も多く引いた発行者であり、調査記録に挙がる文書のうちおよそ二十六点が林野庁のものである。『森林・林業白書』は平成二十九年度版から令和七年度版まで（二〇一七〜二〇二五年度）を読み、国産漆の生産量の系列を<a href=\"finishes.html\">塗装と仕上げ</a>に、スギ一ヘクタールの収支モデル（令和二年度〈二〇二〇年度〉の特集）を<a href=\"silviculture.html\">植えて育てる</a>と<a href=\"forests.html\">岐阜の森林</a>に、スギ花粉の特集（二〇二三年度）を<a href=\"health.html\">森と身体</a>に、二〇二四年に着工された木造住宅の工法を<a href=\"home.html\">住まいと木</a>に、薪・ボイラー・ペレット・木質バイオマスを<a href=\"fuel.html\">火としての木</a>に用いた。",
                zh:"本書引用最多的單一發行者：研究紀錄中約有二十六份文件出自林野廳。其《森林・林業白皮書》參閱了 2017～2025 年度各版：國產生漆產量的序列用於<a href=\"finishes.html\">塗裝與收尾</a>；一公頃柳杉的收支模型（2020 年度專題）用於<a href=\"silviculture.html\">造林與撫育</a>與<a href=\"forests.html\">岐阜的森林</a>；柳杉花粉專題（2023 年度）用於<a href=\"health.html\">森林與身體</a>；2024 年開工木造住宅的工法用於<a href=\"home.html\">居家與木</a>；柴薪、鍋爐、木質顆粒與木質生質能用於<a href=\"fuel.html\">作為火的木</a>。" } },
            { term:{ en:"Forestry Agency — statistics", ja:"林野庁——統計", zh:"林野廳——統計" },
              jp:"木材需給表 · 木材価格 · 特用林産物 · 木材輸出 · 森林資源の現況",
              def:{
                en:"The timber supply and demand table for 2024 gives the national self-sufficiency rate of 42.5% quoted on <a href=\"trade.html\">Trade &amp; Self-Sufficiency</a>, <a href=\"industry.html\">Wood in Numbers</a> and <a href=\"taiwan.html\">Wood in Taiwan</a>. The timber price survey (FY2024), with standing-timber prices from the Japan Real Estate Institute, gives the yen per cubic metre on <a href=\"markets.html\">Log Markets &amp; Prices</a> and <a href=\"logging.html\">The Logging Business</a>. The special forest products statistics give urushi for 2025; the wood export tables by country (2018–2026, compiled from Ministry of Finance trade statistics) and the briefing <em>The situation of wood exports</em> (April 2026) underlie <a href=\"world.html\">Beyond Japan</a>; the <em>State of Forest Resources</em> (2022) gives forest area and growing stock on <a href=\"myths.html\">What People Get Wrong</a> and <a href=\"sugi.html\">Sugi</a>.",
                ja:"二〇二四年の木材需給表は、<a href=\"trade.html\">貿易と自給</a>、<a href=\"industry.html\">木の数字</a>、<a href=\"taiwan.html\">台湾と木</a>で引く全国の自給率42.5%の出所である。木材価格統計（二〇二四年度）は、日本不動産研究所の山元立木価格とあわせ、<a href=\"markets.html\">原木市場と価格</a>と<a href=\"logging.html\">素材生産という仕事</a>の一立方メートルあたりの円の数字を与えた。特用林産物の統計からは二〇二五年の漆を、国別の木材輸出額（二〇一八〜二〇二六年、財務省貿易統計による）と「木材輸出をめぐる状況」（二〇二六年四月）からは<a href=\"world.html\">日本の外へ</a>の数字を、「森林資源の現況」（二〇二二年）からは<a href=\"myths.html\">よく誤解されること</a>と<a href=\"sugi.html\">スギ</a>の森林面積と蓄積を引いた。",
                zh:"2024 年的木材供需表，是<a href=\"trade.html\">貿易與自給</a>、<a href=\"industry.html\">木材的數字</a>與<a href=\"taiwan.html\">台灣與木</a>所引全國自給率 42.5% 的出處。木材價格統計（2024 年度）連同日本不動產研究所的立木價格，提供<a href=\"markets.html\">原木市場與價格</a>與<a href=\"logging.html\">伐木這門生意</a>中每立方公尺的日圓數字。特用林產物統計提供 2025 年的生漆數據；依國別的木材出口額（2018～2026 年，據財務省貿易統計）與〈木材出口現況〉（2026 年 4 月）支撐<a href=\"world.html\">日本以外</a>；〈森林資源現況〉（2022 年）提供<a href=\"myths.html\">常見的誤解</a>與<a href=\"sugi.html\">日本柳杉</a>中的森林面積與蓄積量。" } },
            { term:{ en:"Forestry Agency — law and programmes", ja:"林野庁——法と施策", zh:"林野廳——法規與施策" },
              jp:"クリーンウッド法 · 森林環境税 · 緑の雇用",
              def:{
                en:"Summaries and brochures of the Clean Wood Act (2016, amended 2023, in force April 2025) and the page on the main forest certification systems (<a href=\"buying.html\">Buying Wooden Things</a>, <a href=\"cites.html\">Rosewood &amp; the Law</a>); the forest environment taxes and the Forest Management Act (<a href=\"policy.html\">Forest Law &amp; Policy</a>, <a href=\"woodfuture.html\">The Next Twenty Years</a>); labour statistics, the Green Employment programme and the list of forestry colleges as of April 2025 (<a href=\"workers.html\">The People of the Forest</a>, <a href=\"learning.html\">How People Learn It</a>); the guideline of 1 October 2021 for displaying the carbon stored in timber buildings (<a href=\"carbon.html\">Forests &amp; Carbon</a>); the Forestry Innovation Hub report on remote-controlled machines (15 March 2024); and the agency's own account of how the word <em>shinrin-yoku</em> was coined in 1982.",
                ja:"クリーンウッド法（二〇一六年制定、二〇二三年改正、二〇二五年四月施行）の概要とパンフレット、主な森林認証制度の頁（<a href=\"buying.html\">木の物を選ぶ</a>、<a href=\"cites.html\">ローズウッドと条約</a>）。森林環境税と森林経営管理法（<a href=\"policy.html\">森林の法と政策</a>、<a href=\"woodfuture.html\">これからの二十年</a>）。林業労働力の統計、緑の雇用、二〇二五年四月時点の林業大学校の一覧（<a href=\"workers.html\">山で働く人々</a>、<a href=\"learning.html\">人はいかに学ぶか</a>）。二〇二一年十月一日の、建築物に利用した木材の炭素貯蔵量の表示ガイドライン（<a href=\"carbon.html\">森と炭素</a>）。遠隔操作の林業機械についての「森ハブ」の報告（二〇二四年三月十五日）。そして一九八二年に「森林浴」という語が生まれた経緯についての林野庁自身の説明である。",
                zh:"《潔淨木材法》（2016 年制定，2023 年修正，2025 年 4 月施行）的概要與手冊，以及主要森林認證制度的頁面（<a href=\"buying.html\">挑選木製品</a>、<a href=\"cites.html\">玫瑰木與公約</a>）；森林環境稅與《森林經營管理法》（<a href=\"policy.html\">森林法規與政策</a>、<a href=\"woodfuture.html\">未來二十年</a>）；林業勞動力統計、「綠色僱用」計畫與 2025 年 4 月時的林業大學校名單（<a href=\"workers.html\">山林中的工作者</a>、<a href=\"learning.html\">人們如何學會它</a>）；2021 年 10 月 1 日關於標示木造建築碳儲存量的指引（<a href=\"carbon.html\">森林與碳</a>）；林業創新中心關於遙控林業機械的報告（2024 年 3 月 15 日）；以及林野廳自己對「森林浴」一詞如何在 1982 年誕生的說明。" } },
            { term:{ en:"Forestry Agency regional forest offices", ja:"林野庁の森林管理局", zh:"林野廳各森林管理局" },
              jp:"中部森林管理局 · 近畿中国森林管理局",
              def:{
                en:"The Chūbu Regional Forest Office publishes the history of the Kiso forests — the Owari domain's closed forests, the Kiso method of moving timber, the reserve forests for the Ise Shrine — and the description of the Kiso Hinoki reserve at Kashimo, used on <a href=\"fivetrees.html\">The Five Trees of Kiso</a>, <a href=\"timberrivers.html\">The Timber Rivers</a>, <a href=\"woodjourneys.html\">Five Journeys</a> and <a href=\"chronology.html\">The Whole Chronology</a>. A report on Hida city's broadleaf policy (2021), published by the Kinki-Chūgoku office, supplied the broadleaf shares and the national split of broadleaf use on <a href=\"broadleaf.html\">The Broadleaf Forests</a>, <a href=\"furniture.html\">Hida Furniture</a> and <a href=\"debates.html\">Where People Disagree</a>.",
                ja:"中部森林管理局は木曽の森の歴史——尾張藩の留山、木曽式運材法、伊勢神宮の備林——と、加子母の木曽ヒノキ備林の解説を公開しており、<a href=\"fivetrees.html\">木曽五木</a>、<a href=\"timberrivers.html\">木を運んだ川</a>、<a href=\"woodjourneys.html\">五つの旅</a>、<a href=\"chronology.html\">総年表</a>で用いた。近畿中国森林管理局が公開した飛騨市の広葉樹のまちづくりについての報告（二〇二一年）からは、広葉樹の割合と、全国の広葉樹の用途の内訳を<a href=\"broadleaf.html\">広葉樹の森</a>、<a href=\"furniture.html\">飛騨の家具</a>、<a href=\"debates.html\">論の分かれるところ</a>に引いた。",
                zh:"中部森林管理局公開木曾森林的歷史——尾張藩的封山、木曾式運材法、伊勢神宮的備林——以及加子母木曾扁柏備林的介紹，用於<a href=\"fivetrees.html\">木曾五木</a>、<a href=\"timberrivers.html\">運木之河</a>、<a href=\"woodjourneys.html\">五段旅程</a>與<a href=\"chronology.html\">總年表</a>。近畿中國森林管理局所公開、關於飛驒市闊葉樹城鎮政策的報告（2021 年），提供<a href=\"broadleaf.html\">闊葉樹之森</a>、<a href=\"furniture.html\">飛驒家具</a>與<a href=\"debates.html\">意見分歧之處</a>中的闊葉樹比例，以及全國闊葉樹用途的分配。" } },
            { term:{ en:"Ministry of Agriculture, Forestry and Fisheries", ja:"農林水産省", zh:"農林水產省" },
              jp:"農林水産省 · maff.go.jp",
              def:{
                en:"The Japanese Agricultural Standards for logs (JAS 1052, 2007, revised 2022) and for sawn timber, used for the diameter classes, volume formulas and grades on <a href=\"tables.html\">Reference Tables</a> and <a href=\"grading.html\">Grades &amp; Standards</a>; the feature “The world of urushi” (November 2022) on <a href=\"finishes.html\">Finishes</a>; the January 2026 briefing on igusa and tatami facings on <a href=\"home.html\">Wood in the Home</a>; and forestry output by prefecture for 2023, read through a statistics website (see the secondary sources below).",
                ja:"素材（丸太）の日本農林規格（JAS 1052、二〇〇七年制定、二〇二二年改正）と製材の規格は、<a href=\"tables.html\">早見表</a>と<a href=\"grading.html\">等級と規格</a>の径級・材積式・等級に用いた。特集「『漆』の世界」（二〇二二年十一月）は<a href=\"finishes.html\">塗装と仕上げ</a>に、二〇二六年一月の「いぐさ（畳表）をめぐる事情」は<a href=\"home.html\">住まいと木</a>に用いた。二〇二三年の都道府県別林業産出額は統計サイトを通して読んだ（後述の二次資料を参照）。",
                zh:"原木的日本農林規格（JAS 1052，2007 年制定，2022 年修訂）與製材規格，用於<a href=\"tables.html\">速查表</a>與<a href=\"grading.html\">等級與規格</a>中的徑級、材積公式與等級；專題〈「漆」的世界〉（2022 年 11 月）用於<a href=\"finishes.html\">塗裝與收尾</a>；2026 年 1 月關於藺草與疊表的說明資料用於<a href=\"home.html\">居家與木</a>；2023 年各都道府縣林業產出額則經由統計網站讀取（見下文二手資料）。" } },
            { term:{ en:"Ministry of Economy, Trade and Industry", ja:"経済産業省", zh:"經濟產業省" },
              jp:"経済産業省 · 生産動態統計 · 工業統計 · 経済センサス · 経済構造実態調査 · 伝統的工芸品",
              def:{
                en:"Three statistical series carry the guitar figures on <a href=\"guitarindustry.html\">Japan's Guitar Industry</a> and <a href=\"luthiers.html\">The Luthiers</a>: the Current Production Survey (national guitar production and shipments, 2023 and October 2025); the Census of Manufactures (2014, 2016, 2019), succeeded by the Economic Census for Business Activity (2021) and the Economic Structure Survey (2024), which give shipments by prefecture; the 2024 survey also gives Gifu's furniture and wood-products output on <a href=\"industry.html\">Wood in Numbers</a>. METI also designates the national traditional crafts — Hida Shunkei and Ichii Ittōbori in 1975, Gifu umbrellas in 2022 — and its briefings of July 2022 and March 2026 give the industry's decline on <a href=\"shunkei.html\">Hida Shunkei</a>, <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a> and <a href=\"woodfuture.html\">The Next Twenty Years</a>. Its CITES procedures and guidance for travelling performers are used on <a href=\"cites.html\">Rosewood &amp; the Law</a>.",
                ja:"<a href=\"guitarindustry.html\">日本のギター産業</a>と<a href=\"luthiers.html\">個人製作家</a>のギターの数字は三つの統計による。生産動態統計（全国のギターの生産と出荷、二〇二三年と二〇二五年十月）。都道府県別の出荷額を示す工業統計（二〇一四年、二〇一六年、二〇一九年）と、それを継いだ経済センサス‐活動調査（二〇二一年）および経済構造実態調査（二〇二四年）。二〇二四年の調査は<a href=\"industry.html\">木の数字</a>の岐阜の家具・木製品の出荷額にも用いた。経済産業省は国の伝統的工芸品を指定する——飛騨春慶と一位一刀彫は一九七五年、岐阜和傘は二〇二二年——。二〇二二年七月と二〇二六年三月の資料は、<a href=\"shunkei.html\">飛騨春慶</a>、<a href=\"paper.html\">和紙・提灯・和傘</a>、<a href=\"woodfuture.html\">これからの二十年</a>で産業の縮小を示すのに用いた。ワシントン条約の輸出入手続きと、楽器を携えて旅する演奏家への案内は<a href=\"cites.html\">ローズウッドと条約</a>で用いた。",
                zh:"<a href=\"guitarindustry.html\">日本的吉他產業</a>與<a href=\"luthiers.html\">獨立製琴師</a>中的吉他數字來自三個統計系列：生產動態統計（全國吉他的生產與出貨，2023 年與 2025 年 10 月）；提供各縣出貨額的工業統計（2014、2016、2019 年），以及接續它的經濟普查活動調查（2021 年）與經濟構造實態調查（2024 年）。2024 年的調查也用於<a href=\"industry.html\">木材的數字</a>中岐阜家具與木製品的出貨額。經濟產業省也指定國家傳統工藝品——飛驒春慶與一位一刀雕於 1975 年，岐阜和傘於 2022 年——其 2022 年 7 月與 2026 年 3 月的說明資料，用於<a href=\"shunkei.html\">飛驒春慶</a>、<a href=\"paper.html\">和紙、燈籠與和傘</a>與<a href=\"woodfuture.html\">未來二十年</a>中產業萎縮的數字。其華盛頓公約進出口手續與對攜帶樂器旅行之演奏者的說明，用於<a href=\"cites.html\">玫瑰木與公約</a>。" } },
            { term:{ en:"Ministry of Land, Infrastructure, Transport and Tourism", ja:"国土交通省", zh:"國土交通省" },
              jp:"国土交通省 · 住宅着工統計 · 観光庁",
              def:{
                en:"Housing starts, including the chart of new wooden housing starts for FY2005–FY2024 and the wooden share of 57.3% in FY2024, on <a href=\"home.html\">Wood in the Home</a> and <a href=\"woodfuture.html\">The Next Twenty Years</a>; the leaflet on the review of the “No. 4 exemption” for small wooden houses, in force from April 2025. Its Japan Tourism Agency, with the National Tax Agency, is the source for the change in tax-free shopping from 1 November 2026 on <a href=\"buying.html\">Buying Wooden Things</a>.",
                ja:"住宅着工統計は、二〇〇五〜二〇二四年度の木造住宅の新設着工戸数の推移と、二〇二四年度の木造率57.3%を含め、<a href=\"home.html\">住まいと木</a>と<a href=\"woodfuture.html\">これからの二十年</a>で用いた。小規模な木造住宅についての「四号特例」の見直し（二〇二五年四月施行）のリーフレットも用いた。観光庁は国税庁とともに、二〇二六年十一月一日からの免税販売の変更について<a href=\"buying.html\">木の物を選ぶ</a>の出典である。",
                zh:"住宅開工統計，包括 2005～2024 年度新建木造住宅開工戶數的推移，以及 2024 年度 57.3% 的木造比例，用於<a href=\"home.html\">居家與木</a>與<a href=\"woodfuture.html\">未來二十年</a>；另有關於小型木造住宅「四號特例」修訂（2025 年 4 月施行）的說明單張。其所屬的觀光廳與國稅廳，是<a href=\"buying.html\">挑選木製品</a>中 2026 年 11 月 1 日起免稅購物改制的出處。" } },
            { term:{ en:"Statistics Bureau and Ministry of Finance", ja:"総務省統計局・財務省", zh:"總務省統計局・財務省" },
              jp:"住宅・土地統計調査 · 国勢調査 · 貿易統計 · 東海財務局",
              def:{
                en:"The Statistics Bureau's 2023 Housing and Land Survey gives the vacancy rate and the wooden share of the housing stock on <a href=\"home.html\">Wood in the Home</a>; its Population Census, as compiled by the Forestry Agency, gives the number of forestry workers from 1980 to 2020 on <a href=\"woodfuture.html\">The Next Twenty Years</a>. The Ministry of Finance's trade statistics stand behind the export tables (<a href=\"world.html\">Beyond Japan</a>) and the furniture imports (<a href=\"furniture.html\">Hida Furniture</a>), both read through compilations by other bodies. The Tōkai Local Finance Bureau's Gifu office published a report on Gifu's forests (12 June 2025) that gives the fall in forest technicians from 2,524 in 1989 to about 940 in 2023 (<a href=\"industry.html\">Wood in Numbers</a>).",
                ja:"総務省統計局の二〇二三年住宅・土地統計調査は、<a href=\"home.html\">住まいと木</a>の空き家率と住宅ストックの木造率の出所であり、国勢調査（林野庁の集計による）は<a href=\"woodfuture.html\">これからの二十年</a>の一九八〇〜二〇二〇年の林業従事者数の出所である。財務省の貿易統計は、輸出の表（<a href=\"world.html\">日本の外へ</a>）と家具の輸入（<a href=\"furniture.html\">飛騨の家具</a>）の背後にあり、どちらもほかの機関の集計を通して読んだ。東海財務局岐阜財務事務所の報告「岐阜県の森林を守るための取組」（二〇二五年六月十二日）は、林業技術者が一九八九年の2,524人から二〇二三年の約940人に減ったことを示す（<a href=\"industry.html\">木の数字</a>）。",
                zh:"總務省統計局 2023 年住宅與土地統計調查，提供<a href=\"home.html\">居家與木</a>中的空屋率與住宅存量的木造比例；其國勢調查（經林野廳整理）提供<a href=\"woodfuture.html\">未來二十年</a>中 1980～2020 年的林業從業人數。財務省的貿易統計是出口表（<a href=\"world.html\">日本以外</a>）與家具進口（<a href=\"furniture.html\">飛驒家具</a>）的根據，兩者皆經由其他機構的整理讀取。東海財務局岐阜財務事務所的報告（2025 年 6 月 12 日）顯示，林業技術人員由 1989 年的 2,524 人減至 2023 年的約 940 人（<a href=\"industry.html\">木材的數字</a>）。" } },
            { term:{ en:"Japan Meteorological Agency and IPSS", ja:"気象庁・国立社会保障・人口問題研究所", zh:"氣象廳・國立社會保障・人口問題研究所" },
              jp:"気象庁 平年値 · 日本の地域別将来推計人口",
              def:{
                en:"The JMA climate normals for 1991–2020 at Gifu and Takayama — monthly humidity and temperature — and the normal dates of the Tōkai rainy season underlie the humidity advice on <a href=\"care.html\">Caring for Wood</a> and <a href=\"guitarcare.html\">Caring for a Guitar</a>. The National Institute of Population and Social Security Research's <em>Regional Population Projections for Japan</em> (2023) gives the change in population from 2020 to 2050 for Takayama, Hida, Gero, Nakatsugawa, Shirakawa and the other forest municipalities on <a href=\"woodfuture.html\">The Next Twenty Years</a>, read through a site that tabulates them by municipality.",
                ja:"気象庁の岐阜と高山の平年値（一九九一〜二〇二〇年）——月ごとの湿度と気温——と、東海地方の梅雨入り・梅雨明けの平年日は、<a href=\"care.html\">木の手入れ</a>と<a href=\"guitarcare.html\">ギターの手入れ</a>の湿度の助言の土台である。国立社会保障・人口問題研究所の「日本の地域別将来推計人口」（二〇二三年推計）は、高山、飛騨、下呂、中津川、白川ほか森林の市町村の二〇二〇年から二〇五〇年への人口の変化を<a href=\"woodfuture.html\">これからの二十年</a>に与えた。市町村別に整理したサイトを通して読んだ。",
                zh:"日本氣象廳岐阜與高山的氣候平年值（1991～2020 年）——逐月的濕度與氣溫——以及東海地方梅雨季開始與結束的平年日期，是<a href=\"care.html\">木器保養</a>與<a href=\"guitarcare.html\">吉他的保養</a>中濕度建議的基礎。國立社會保障・人口問題研究所的《日本各地區未來推估人口》（2023 年推估），提供<a href=\"woodfuture.html\">未來二十年</a>中高山、飛驒、下呂、中津川、白川等森林市町村自 2020 年至 2050 年的人口變化，經由一個依市町村整理的網站讀取。" } },
            { term:{ en:"Other national bodies", ja:"そのほかの国の機関", zh:"其他中央機關" },
              jp:"内閣官房 · 環境省 · 文化庁 · 厚生労働省 · 消費者庁 · 特許庁 · JETRO",
              def:{
                en:"The Cabinet Secretariat's sugi pollen package of 30 May 2023 (<a href=\"debates.html\">Where People Disagree</a>, <a href=\"health.html\">Forests &amp; the Body</a>). The Ministry of the Environment's bear statistics, as reported in April 2026, and its report on Hidakuma (<a href=\"woodfuture.html\">The Next Twenty Years</a>). The Agency for Cultural Affairs: its notice of 24 February 2015 on domestic urushi for repairs of national treasures (<a href=\"finishes.html\">Finishes</a>), the UNESCO inscription of traditional building skills in December 2020 (<a href=\"learning.html\">How People Learn It</a>) and the Japan Heritage story of the Hida takumi (<a href=\"takumi.html\">The Hida Takumi</a>). The Ministry of Health, Labour and Welfare's accident statistics and its awards to outstanding skilled workers (<a href=\"workers.html\">The People of the Forest</a>, <a href=\"learning.html\">How People Learn It</a>). The Consumer Affairs Agency's labelling standards for tables, chests and lacquered tableware (<a href=\"buying.html\">Buying Wooden Things</a>). The Japan Patent Office's register of regional collective trademarks (<a href=\"shunkei.html\">Hida Shunkei</a>). JETRO's company profiles and its TAKUMI NEXT 2021 selection (<a href=\"world.html\">Beyond Japan</a>).",
                ja:"内閣官房の花粉症対策の全体像（二〇二三年五月三十日。<a href=\"debates.html\">論の分かれるところ</a>、<a href=\"health.html\">森と身体</a>）。環境省のクマの被害統計（二〇二六年四月の報道による）と、飛騨の森でクマは踊るについての報告（<a href=\"woodfuture.html\">これからの二十年</a>）。文化庁——国宝等の修理に国産漆を用いる二〇一五年二月二十四日の通知（<a href=\"finishes.html\">塗装と仕上げ</a>）、二〇二〇年十二月の「伝統建築工匠の技」のユネスコ登録（<a href=\"learning.html\">人はいかに学ぶか</a>）、飛騨匠の日本遺産のストーリー（<a href=\"takumi.html\">飛騨の匠</a>）。厚生労働省の労働災害統計と「卓越した技能者（現代の名工）」の表彰（<a href=\"workers.html\">山で働く人々</a>、<a href=\"learning.html\">人はいかに学ぶか</a>）。消費者庁の机・テーブル、たんす、漆器の品質表示基準（<a href=\"buying.html\">木の物を選ぶ</a>）。特許庁の地域団体商標の一覧（<a href=\"shunkei.html\">飛騨春慶</a>）。JETROの企業紹介と「TAKUMI NEXT 2021」の採択（<a href=\"world.html\">日本の外へ</a>）。",
                zh:"內閣官房 2023 年 5 月 30 日的花粉症對策全貌（<a href=\"debates.html\">意見分歧之處</a>、<a href=\"health.html\">森林與身體</a>）。環境省的熊害統計（據 2026 年 4 月的報導）與關於 Hidakuma 的報告（<a href=\"woodfuture.html\">未來二十年</a>）。文化廳：2015 年 2 月 24 日要求國寶等修繕使用國產生漆的通知（<a href=\"finishes.html\">塗裝與收尾</a>）、2020 年 12 月「傳統建築工匠技術」列入 UNESCO 名錄（<a href=\"learning.html\">人們如何學會它</a>），以及飛驒匠人的日本遺產故事（<a href=\"takumi.html\">飛驒的匠人</a>）。厚生勞動省的職業災害統計與「卓越技能者（現代名工）」表揚（<a href=\"workers.html\">山林中的工作者</a>、<a href=\"learning.html\">人們如何學會它</a>）。消費者廳對桌子、衣櫃與漆器的品質標示基準（<a href=\"buying.html\">挑選木製品</a>）。特許廳的地域團體商標名錄（<a href=\"shunkei.html\">飛驒春慶</a>）。JETRO 的企業介紹與「TAKUMI NEXT 2021」入選名單（<a href=\"world.html\">日本以外</a>）。" } }
          ] },
        { t:"h3", text:{ en:"Gifu and other local governments", ja:"岐阜県と地方自治体", zh:"岐阜縣與地方政府" }, jp:"県と市町村" },
        { t:"defs",
          items:[
            { term:{ en:"Gifu Prefecture — forestry and timber", ja:"岐阜県——林業と木材", zh:"岐阜縣——林業與木材" },
              jp:"岐阜県 · pref.gifu.lg.jp",
              def:{
                en:"The book's second publisher after the Forestry Agency, with about twenty-one documents. The most used is a briefing for a prefectural citizens' conference, <em>The state of forestry and the wood industry in Gifu</em> (岐阜県の林業・木材産業の現状), with log production for FY2009–FY2021 and its grades, sawmill numbers, kiln-dried shares and forest workers; it appears on <a href=\"industry.html\">Wood in Numbers</a>, <a href=\"logging.html\">The Logging Business</a>, <a href=\"sawmill.html\">Sawmilling</a>, <a href=\"forests.html\">Gifu's Forests</a>, <a href=\"fuel.html\">Wood as Fire</a>, <a href=\"world.html\">Beyond Japan</a> and <a href=\"tables.html\">Reference Tables</a>. Beside it: the background data to the forest and forestry basic plan (FY2020); the Fourth Forest Plan for FY2022–FY2026 with its zoning of January 2022 (<a href=\"silviculture.html\">Planting &amp; Tending</a>); the guide to timber procurement for medium and large timber buildings (growing stock, long-length sawmills); and the Gifu timber ordinance passed in December 2022, which the book knows from the forestry trade press (<a href=\"woodfirst.html\">Putting Wood to Use</a>).",
                ja:"林野庁に次いで多く引いた発行者で、文書はおよそ二十一点。最もよく使ったのは、県民会議の資料「岐阜県の林業・木材産業の現状」である。二〇〇九〜二〇二一年度の素材生産量とその等級別の内訳、製材工場数、人工乾燥材の割合、林業技術者数を含み、<a href=\"industry.html\">木の数字</a>、<a href=\"logging.html\">素材生産という仕事</a>、<a href=\"sawmill.html\">製材</a>、<a href=\"forests.html\">岐阜の森林</a>、<a href=\"fuel.html\">火としての木</a>、<a href=\"world.html\">日本の外へ</a>、<a href=\"tables.html\">早見表</a>に現れる。そのほか、森林・林業基本計画の現状資料（二〇二〇年度）、二〇二二年一月のゾーニングを含む第四次の森林づくり基本計画（二〇二二〜二〇二六年度。<a href=\"silviculture.html\">植えて育てる</a>）、中大規模木造建築のための木材調達の手引き（蓄積量、長尺材の製材工場）、そして二〇二二年十二月に可決された県産材の条例——本書は林業の業界紙の報道で知った——（<a href=\"woodfirst.html\">木づかい</a>）を用いた。",
                zh:"僅次於林野廳的第二大發行者，約有二十一份文件。最常用的是縣民會議的資料〈岐阜縣林業與木材產業現況〉，內含 2009～2021 年度的原木生產量及其等級構成、製材廠數、人工乾燥材比例與林業技術人員數，見於<a href=\"industry.html\">木材的數字</a>、<a href=\"logging.html\">伐木這門生意</a>、<a href=\"sawmill.html\">製材</a>、<a href=\"forests.html\">岐阜的森林</a>、<a href=\"fuel.html\">作為火的木</a>、<a href=\"world.html\">日本以外</a>與<a href=\"tables.html\">速查表</a>。此外還有：森林・林業基本計畫的現況資料（2020 年度）；含 2022 年 1 月分區的第四次森林計畫（2022～2026 年度，<a href=\"silviculture.html\">造林與撫育</a>）；中大型木造建築的木材調度指南（蓄積量、長尺材製材廠）；以及 2022 年 12 月通過的縣產材條例——本書是從林業業界報刊的報導得知（<a href=\"woodfirst.html\">用木之道</a>）。" } },
            { term:{ en:"Gifu Prefecture — people, homes and schools", ja:"岐阜県——暮らし・住まい・学び", zh:"岐阜縣——生活、住宅與學習" },
              jp:"ぎふ証明材 · 住宅着工 · ぎふ木育 · 鳥獣捕獲",
              def:{
                en:"The Gifu certified-timber scheme (implementation guidelines of January 2007; 688 registered businesses in June 2026) on <a href=\"buying.html\">Buying Wooden Things</a>; housing starts in Gifu in 2024 and the FY2026 subsidy for building with Gifu wood on <a href=\"home.html\">Wood in the Home</a>; the Gifu mokuiku thirty-year vision, the toy-lending and wood-education subsidies and the Gifu Mokuyūkan on <a href=\"mokuiku.html\">Learning Through Wood</a>; the forest environment tax since April 2012 on <a href=\"ecology.html\">Forest Ecology</a> and <a href=\"policy.html\">Forest Law &amp; Policy</a>; wildlife captures in FY2024 on <a href=\"debates.html\">Where People Disagree</a>; the history of oak and pine wilt on <a href=\"fuel.html\">Wood as Fire</a>; the list of national traditional crafts in the prefecture; and the list of forest owners' cooperatives as of 1 April 2026.",
                ja:"ぎふ証明材の制度（実施要領は二〇〇七年一月、登録事業者は二〇二六年六月に688）を<a href=\"buying.html\">木の物を選ぶ</a>に、二〇二四年の県内の新設住宅着工と、二〇二六年度のぎふの木で家づくり支援事業を<a href=\"home.html\">住まいと木</a>に、ぎふ木育30年ビジョン、木のおもちゃの貸出しと木育教材導入の支援、ぎふ木遊館を<a href=\"mokuiku.html\">木育</a>に、二〇一二年四月からの県の森林・環境税を<a href=\"ecology.html\">森の生態</a>と<a href=\"policy.html\">森林の法と政策</a>に、二〇二四年度の鳥獣の捕獲数を<a href=\"debates.html\">論の分かれるところ</a>に、ナラ枯れと松くい虫の経過を<a href=\"fuel.html\">火としての木</a>に用いた。県内の国指定伝統的工芸品の一覧と、二〇二六年四月一日現在の森林組合の一覧も用いた。",
                zh:"岐阜證明材制度（實施要領為 2007 年 1 月，2026 年 6 月登錄業者 688 家）用於<a href=\"buying.html\">挑選木製品</a>；2024 年縣內住宅開工數與 2026 年度「用岐阜之木建屋」補助用於<a href=\"home.html\">居家與木</a>；岐阜木育三十年願景、木玩具出借與木育教材補助，以及岐阜木遊館用於<a href=\"mokuiku.html\">木育</a>；2012 年 4 月起的森林環境稅用於<a href=\"ecology.html\">森林生態</a>與<a href=\"policy.html\">森林法規與政策</a>；2024 年度野生動物捕獲數用於<a href=\"debates.html\">意見分歧之處</a>；橡樹枯萎病與松材線蟲病的經過用於<a href=\"fuel.html\">作為火的木</a>。另用了縣內國家指定傳統工藝品名單，以及 2026 年 4 月 1 日時的森林組合名單。" } },
            { term:{ en:"Municipalities", ja:"市町村", zh:"市町村" },
              jp:"高山市 · 中津川市 · 飛騨市 · 美濃市 · 関市 · 本巣市 · 八百津町 · 白川村",
              def:{
                en:"Takayama city — the history of Hida under the Kanamori and the shogunate, the Hida furniture trademarks, Shunkei, Ittōbori, its woodworking school and its foreign-visitor statistics (<a href=\"woodhistory.html\">A History of Wood</a>, <a href=\"furniture.html\">Hida Furniture</a>, <a href=\"shunkei.html\">Hida Shunkei</a>, <a href=\"ittobori.html\">Ichii Ittōbori</a>, <a href=\"taiwan.html\">Wood in Taiwan</a>). Nakatsugawa — its bulletin on the Sengū felling of June 2025 and its history of Sakashita (<a href=\"felling.html\">Felling &amp; Extraction</a>, <a href=\"takamine.html\">Takamine</a>). Mino — Hon-Minoshi and the Washi no Sato Kaikan (<a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>). Yaotsu — the Nishikori timber station (<a href=\"woodjourneys.html\">Five Journeys</a>). Shirakawa village — visitor numbers from 1995 to 2024 and the 2026 light-up (<a href=\"debates.html\">Where People Disagree</a>, <a href=\"visiting.html\">Visiting Gifu</a>). Seki and Motosu — the 2012 bulletin on the forest tax, forging demonstrations and forest therapy (<a href=\"health.html\">Forests &amp; the Body</a>).",
                ja:"高山市——金森氏と幕府領の時代の飛騨の歴史、飛騨の家具の商標、春慶、一位一刀彫、木工の学校、外国人観光客の統計（<a href=\"woodhistory.html\">木の歴史</a>、<a href=\"furniture.html\">飛騨の家具</a>、<a href=\"shunkei.html\">飛騨春慶</a>、<a href=\"ittobori.html\">一位一刀彫</a>、<a href=\"taiwan.html\">台湾と木</a>）。中津川市——二〇二五年六月の遷宮の御用材伐採を伝える広報と、坂下の歴史（<a href=\"felling.html\">伐倒と搬出</a>、<a href=\"takamine.html\">タカミネ</a>）。美濃市——本美濃紙と美濃和紙の里会館（<a href=\"paper.html\">和紙・提灯・和傘</a>）。八百津町——錦織綱場（<a href=\"woodjourneys.html\">五つの旅</a>）。白川村——一九九五年から二〇二四年の観光客数と二〇二六年のライトアップ（<a href=\"debates.html\">論の分かれるところ</a>、<a href=\"visiting.html\">岐阜を訪ねる</a>）。関市と本巣市——森林・環境税を伝える二〇一二年の広報、鍛錬の実演、森林セラピー（<a href=\"health.html\">森と身体</a>）。",
                zh:"高山市——金森氏與幕府直轄時期的飛驒歷史、飛驒家具商標、春慶、一位一刀雕、木工學校，以及外國遊客統計（<a href=\"woodhistory.html\">木的歷史</a>、<a href=\"furniture.html\">飛驒家具</a>、<a href=\"shunkei.html\">飛驒春慶</a>、<a href=\"ittobori.html\">一位一刀雕</a>、<a href=\"taiwan.html\">台灣與木</a>）。中津川市——報導 2025 年 6 月式年遷宮御用材伐採的市報，以及坂下的歷史（<a href=\"felling.html\">伐倒與集運</a>、<a href=\"takamine.html\">Takamine</a>）。美濃市——本美濃紙與美濃和紙之里會館（<a href=\"paper.html\">和紙、燈籠與和傘</a>）。八百津町——錦織綱場（<a href=\"woodjourneys.html\">五段旅程</a>）。白川村——1995 年至 2024 年的遊客數與 2026 年的點燈活動（<a href=\"debates.html\">意見分歧之處</a>、<a href=\"visiting.html\">造訪岐阜</a>）。關市與本巢市——報導森林環境稅的 2012 年市報、鍛刀示範與森林療法（<a href=\"health.html\">森林與身體</a>）。" } },
            { term:{ en:"Other prefectures and cities", ja:"ほかの都道府県と市", zh:"其他都道府縣與城市" },
              jp:"北海道 · 長野県 · 岩手県 · 二戸市 · 広島県 · 福山市 · 茨城県 · 東京都",
              def:{
                en:"Hokkaidō publishes the table of air-dry densities from the <em>Wood Industry Handbook</em> used on <a href=\"properties.html\">Physical Properties</a>, <a href=\"tables.html\">Reference Tables</a> and <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>, and the history of mokuiku, which began there in 2004. Nagano gives its forest-therapy sites and, in a prefectural blog, its first place in guitar shipments. Iwate and Ninohe give the urushi figures; Hiroshima and Fukuyama the Fukuyama koto; the Ibaraki board of education Awano Shunkei; and the Tokyo Metropolitan Government the Tokyo shamisen and the positive list for food-contact materials.",
                ja:"北海道は、<a href=\"properties.html\">物理的性質</a>、<a href=\"tables.html\">早見表</a>、<a href=\"japanesewoods.html\">和の木と和の楽器</a>で用いた『木材工業ハンドブック』の気乾密度の表と、二〇〇四年に北海道で始まった木育の経緯を公開している。長野県は森林セラピーの基地と、県のブログでギター出荷額の全国一位を伝える。岩手県と二戸市は漆の数字を、広島県と福山市は福山琴を、茨城県教育委員会は粟野春慶を、東京都は東京三味線と食品用器具のポジティブリストを伝える。",
                zh:"北海道公開了《木材工業手冊》的氣乾密度表（用於<a href=\"properties.html\">物理性質</a>、<a href=\"tables.html\">速查表</a>與<a href=\"japanesewoods.html\">日本之木與日本樂器</a>），以及 2004 年從北海道開始的木育經過。長野縣提供森林療法基地，並在縣府部落格中說明其吉他出貨額全國第一。岩手縣與二戶市提供生漆數字；廣島縣與福山市提供福山琴；茨城縣教育委員會提供粟野春慶；東京都提供東京三味線與食品接觸器具的正面表列制度。" } }
          ] },
        { t:"h3", text:{ en:"Taiwan and international bodies", ja:"台湾と国際機関", zh:"台灣與國際機構" }, jp:"台湾と海外" },
        { t:"defs",
          items:[
            { term:{ en:"Forestry and Nature Conservation Agency (Taiwan)", ja:"林業及自然保育署（台湾）", zh:"農業部林業及自然保育署" },
              jp:"林業及自然保育署 · 阿里山林業鉄路及文化資産管理処",
              def:{
                en:"Taiwan's forest authority, reorganised from the Forestry Bureau on 1 August 2023. Its pages on Hinoki Village in Chiayi and the Luodong Forestry Culture Park, the history published by its Alishan Forest Railway and Cultural Heritage Office, and its wood-education course listing are used on <a href=\"taiwan.html\">Wood in Taiwan</a> and <a href=\"mokuiku.html\">Learning Through Wood</a>.",
                ja:"台湾の森林行政の機関で、二〇二三年八月一日に林務局から改組された。嘉義の檜意森活村と羅東林業文化園区の頁、その阿里山林業鉄路及文化資産管理処が公開する歴史、木育の講座の案内を、<a href=\"taiwan.html\">台湾と木</a>と<a href=\"mokuiku.html\">木育</a>で用いた。",
                zh:"台灣的森林主管機關，於 2023 年 8 月 1 日由林務局改制而成。其嘉義檜意森活村與羅東林業文化園區的頁面、所屬阿里山林業鐵路及文化資產管理處公開的歷史，以及木育課程資訊，用於<a href=\"taiwan.html\">台灣與木</a>與<a href=\"mokuiku.html\">木育</a>。" } },
            { term:{ en:"Legislative Yuan Budget Center", ja:"立法院予算中心", zh:"立法院預算中心" },
              jp:"立法院預算中心",
              def:{
                en:"Its evaluation of the Ministry of Agriculture's budget contains the table of Taiwan's domestic timber production for 2020–2023 and the self-sufficiency rates of 1.04% to 1.47% shown in the figure on <a href=\"taiwan.html\">Wood in Taiwan</a> and quoted on <a href=\"woodfuture.html\">The Next Twenty Years</a> and <a href=\"chronology.html\">The Whole Chronology</a>. It is the closest thing in this book to an official Taiwanese timber statistic.",
                ja:"農業部の予算についての評価報告に、二〇二〇〜二〇二三年の台湾の国産材生産量の表と、1.04%から1.47%までの自給率が載る。<a href=\"taiwan.html\">台湾と木</a>の図に示し、<a href=\"woodfuture.html\">これからの二十年</a>と<a href=\"chronology.html\">総年表</a>で引いた。本書における台湾の木材の公的統計に最も近いものである。",
                zh:"其對農業部預算的評估報告中，載有 2020～2023 年台灣國產材生產量的表格，以及 1.04% 至 1.47% 的自給率；這些數字見於<a href=\"taiwan.html\">台灣與木</a>的圖表，並引用於<a href=\"woodfuture.html\">未來二十年</a>與<a href=\"chronology.html\">總年表</a>。這是本書中最接近台灣官方木材統計的資料。" } },
            { term:{
                en:"Ministry of Agriculture, Customs and the Central Weather Administration",
                ja:"農業部・関務署・中央気象署",
                zh:"農業部・關務署・中央氣象署" },
              jp:"動植物防疫検疫署 · 財政部関務署 · 中央気象署",
              def:{
                en:"The Bureau of Animal and Plant Health Inspection and Quarantine's table for travellers (27 July 2022), the rules on wood packaging (2008, amended 2025) and the guidance on imported wooden goods (March 2023), with Taipei Customs' limits for travellers, are the basis of the advice on bringing wood home on <a href=\"buying.html\">Buying Wooden Things</a>. The Central Weather Administration (formerly the Central Weather Bureau) supplies the 1991–2020 normals for Taipei used on <a href=\"care.html\">Caring for Wood</a> and <a href=\"guitarcare.html\">Caring for a Guitar</a> — read, candidly, from the tables reproduced in English Wikipedia.",
                ja:"動植物防疫検疫署の旅客向けの表（二〇二二年七月二十七日）、木製こん包材の規則（二〇〇八年制定、二〇二五年改正）、輸入木製品についての注意（二〇二三年三月）と、台北関の旅客の持込み限度は、<a href=\"buying.html\">木の物を選ぶ</a>で木の物を持ち帰るときの助言の土台である。中央気象署（旧中央気象局）は<a href=\"care.html\">木の手入れ</a>と<a href=\"guitarcare.html\">ギターの手入れ</a>で用いた台北の一九九一〜二〇二〇年の平年値の出所である。ただし正直に言えば、英語版ウィキペディアに転載された表から読んだ。",
                zh:"動植物防疫檢疫署的旅客攜帶表（2022 年 7 月 27 日）、木質包裝材料規則（2008 年制定，2025 年修正）與境外木製品輸入注意事項（2023 年 3 月），以及臺北關對旅客的限量規定，是<a href=\"buying.html\">挑選木製品</a>中攜帶木製品回台建議的依據。中央氣象署（前身為中央氣象局）是<a href=\"care.html\">木器保養</a>與<a href=\"guitarcare.html\">吉他的保養</a>所用台北 1991～2020 年平年值的出處——坦白說，是從英文維基百科轉載的表格讀取的。" } },
            { term:{ en:"CITES and foreign governments", ja:"ワシントン条約事務局と外国政府", zh:"華盛頓公約秘書處與外國政府" },
              jp:"CITES · US FWS · US DOJ · European Commission · FAO",
              def:{
                en:"The CITES Secretariat — the text of the convention, the list of Parties, the decisions of CoP8 (Kyoto, 1992), CoP12 and CoP16 to CoP20 and its notifications — is the basis of <a href=\"cites.html\">Rosewood &amp; the Law</a> and the CITES table on <a href=\"tables.html\">Reference Tables</a>. The US Fish and Wildlife Service's letter to importers on the CoP19 timber listings, the US Department of Justice's announcement of the Gibson agreement (6 August 2012), and the European Commission's texts on the EU Timber Regulation and the Deforestation Regulation fill in the law outside Japan. FAO forest-area data for 2023, read through the German Federal Statistical Office, give the international comparison on <a href=\"world.html\">Beyond Japan</a>.",
                ja:"ワシントン条約（CITES）事務局——条約の本文、締約国の一覧、第八回（京都、一九九二年）、第十二回、第十六回から第二十回の締約国会議の決定、通告——は、<a href=\"cites.html\">ローズウッドと条約</a>と<a href=\"tables.html\">早見表</a>の条約の表の土台である。第十九回会議の木材の掲載についての米国魚類野生生物局の輸入者向け書簡、ギブソンとの合意を伝える米国司法省の発表（二〇一二年八月六日）、EU木材規則と森林破壊防止規則についての欧州委員会の文書が、日本の外の法を補う。FAOの二〇二三年の森林面積は、ドイツ連邦統計局を通して読み、<a href=\"world.html\">日本の外へ</a>の国際比較に用いた。",
                zh:"華盛頓公約（CITES）秘書處——公約本文、締約方名單、第 8 屆（京都，1992 年）、第 12 屆與第 16 至第 20 屆締約方大會的決議及其通知——是<a href=\"cites.html\">玫瑰木與公約</a>以及<a href=\"tables.html\">速查表</a>中公約表格的基礎。美國魚類及野生動物管理局就第 19 屆大會木材列名致進口商的信函、美國司法部公布的 Gibson 和解協議（2012 年 8 月 6 日），以及歐盟執委會關於歐盟木材規章與零毀林規章的文件，補足了日本以外的法規。FAO 2023 年的森林面積資料經由德國聯邦統計局讀取，用於<a href=\"world.html\">日本以外</a>的國際比較。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Counts of documents per publisher are the editors' tally of the research logs, explained in the last section of this page.",
            ja:"発行者ごとの文書数は、編者が調査記録を数えたもので、その方法はこの頁の最後の節で説明する。",
            zh:"各發行者的文件數，為編者清點研究紀錄所得，方法見本頁最後一節。" } }
      ] },
    { t:"section",
      id:"wood-research",
      title:{ en:"Wood: Research and scholarship", ja:"木：研究機関と学術文献", zh:"木：研究機構與學術文獻" },
      jp:"研究",
      body:[
        { t:"p",
          text:{
            en:"Research papers were used where a page makes a claim that goes beyond statistics — that forest walks lower stress hormones, that listeners cannot hear the back wood of a guitar, that old hinoki is as stiff as new. Each is cited by authors, year and journal so that it can be found in any library catalogue or on J-STAGE. Where a page relied on a summary of a paper rather than the paper itself, the entry says so.",
            ja:"研究論文は、頁の主張が統計をこえるところで用いた——森を歩くとストレスホルモンが下がる、ギターの裏板の材は聴き分けられない、古いヒノキは新しい材と同じほど硬い、といったところである。どの論文も著者、年、誌名で挙げ、図書館の目録やJ-STAGEで探せるようにした。論文そのものではなく、その要約に拠った頁については、各項にそう記した。",
            zh:"凡頁面的主張超出統計範圍之處——例如森林散步能降低壓力荷爾蒙、聽者聽不出吉他背板的木材、老扁柏與新材一樣堅挺——皆使用研究論文。每篇論文皆列出作者、年份與期刊，以便在任何圖書館目錄或 J-STAGE 上查到。若某頁依據的是論文的摘要而非論文本身，該項會註明。" } },
        { t:"h3", text:{ en:"Institutions", ja:"研究・教育機関", zh:"研究與教育機構" }, jp:"機関" },
        { t:"defs",
          items:[
            { term:{ en:"Forestry and Forest Products Research Institute (FFPRI)", ja:"森林総合研究所", zh:"森林綜合研究所" },
              jp:"森林総合研究所 · ffpri.affrc.go.jp",
              def:{
                en:"Japan's national forest research institute, founded at Meguro in 1905 and at Tsukuba since 1978; its history is told on <a href=\"learning.html\">How People Learn It</a>. It is behind two of the book's most-used tables: the air-dry densities of the <em>Wood Industry Handbook</em> (4th revised edition), read through a table published by Hokkaidō Prefecture and used on <a href=\"properties.html\">Physical Properties</a>, <a href=\"trees.html\">The Trees</a>, <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a> and <a href=\"taiwan.html\">Wood in Taiwan</a>; and the shrinkage of each species per 1% of moisture, from its 1975 book <em>300 Useful Woods of the World</em> as reproduced in the Japan Wood Research and Information Centre's species database (<a href=\"tables.html\">Reference Tables</a>).",
                ja:"国の森林研究機関で、一九〇五年に目黒で創設され、一九七八年からつくばにある。その歴史は<a href=\"learning.html\">人はいかに学ぶか</a>で述べた。本書で最もよく使った表の二つの背後にこの研究所がある。『木材工業ハンドブック』（改訂4版）の気乾密度——北海道が公開する表を通して読み、<a href=\"properties.html\">物理的性質</a>、<a href=\"trees.html\">樹種</a>、<a href=\"japanesewoods.html\">和の木と和の楽器</a>、<a href=\"taiwan.html\">台湾と木</a>で用いた——と、含水率1%あたりの樹種ごとの収縮率である。後者は一九七五年の『世界の有用木材300種』に拠るもので、日本木材総合情報センターの樹種データベースに転載されたものを<a href=\"tables.html\">早見表</a>で用いた。",
                zh:"日本國家級森林研究機構，1905 年創立於目黑，1978 年起設於筑波；其沿革見<a href=\"learning.html\">人們如何學會它</a>。本書最常用的兩張表都出自它：《木材工業手冊》（修訂第 4 版）的氣乾密度——經由北海道公開的表格讀取，用於<a href=\"properties.html\">物理性質</a>、<a href=\"trees.html\">樹種</a>、<a href=\"japanesewoods.html\">日本之木與日本樂器</a>與<a href=\"taiwan.html\">台灣與木</a>；以及各樹種每 1% 含水率的收縮率，出自其 1975 年的《世界有用木材 300 種》，經日本木材綜合資訊中心的樹種資料庫轉載，用於<a href=\"tables.html\">速查表</a>。" } },
            { term:{ en:"Gifu's research and teaching bodies", ja:"岐阜の研究・教育機関", zh:"岐阜的研究與教育機構" },
              jp:"岐阜県森林研究所 · 生活技術研究所 · 森林文化アカデミー · 岐阜大学",
              def:{
                en:"The Gifu Prefectural Research Institute for Forests (Mino) and the Research Institute for Human Life Technology (Takayama), both with roots in 1936; the Gifu Academy of Forest Science and Culture, whose history, courses, morinos building, grant page and a 2025 woodwork case study involving Takamine are used on <a href=\"learning.html\">How People Learn It</a>, <a href=\"mokuiku.html\">Learning Through Wood</a> and <a href=\"takamine.html\">Takamine</a>; and Gifu University, for its Kuraiyama Experimental Forest and for the acoustical papers of Ono Teruaki of its Faculty of Engineering, listed below.",
                ja:"岐阜県森林研究所（美濃市）と生活技術研究所（高山市）——ともに一九三六年に源をもつ。岐阜県立森林文化アカデミー——その沿革、学科、morinos、給付金の頁、タカミネがかかわる二〇二五年の木工の事例を<a href=\"learning.html\">人はいかに学ぶか</a>、<a href=\"mokuiku.html\">木育</a>、<a href=\"takamine.html\">タカミネ</a>で用いた。そして岐阜大学——位山演習林と、工学部の小野晃明による音響の論文（後述）である。",
                zh:"岐阜縣森林研究所（美濃市）與生活技術研究所（高山市），兩者皆源於 1936 年；岐阜縣立森林文化學院，其沿革、科系、morinos 建築、補助金頁面，以及一項與 Takamine 有關的 2025 年木工案例，用於<a href=\"learning.html\">人們如何學會它</a>、<a href=\"mokuiku.html\">木育</a>與<a href=\"takamine.html\">Takamine</a>；以及岐阜大學——其位山演習林，與工學部小野晃明的聲學論文（列於下文）。" } },
            { term:{
                en:"University of Tsukuba, Obataya laboratory",
                ja:"筑波大学 木質材料工学研究室（小幡谷研究室）",
                zh:"筑波大學木質材料工學研究室（小幡谷研究室）" },
              jp:"筑波大学 · u.tsukuba.ac.jp",
              def:{
                en:"The laboratory's pages on soundboard and bar woods — the stiffness and damping a top needs, the absence of objective evidence for “playing in”, the effect of humidity history and heat treatment — and a 2019 University of Tsukuba feature on its work are the backbone of <a href=\"listening.html\">Can You Hear the Wood?</a> and are also used on <a href=\"guitarcare.html\">Caring for a Guitar</a> and <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>.",
                ja:"研究室の響板材・音板材の頁——表板に必要な剛性と損失、「弾き込み」に客観的な証拠がないこと、吸湿履歴と熱処理の効果——と、その研究を紹介した二〇一九年の筑波大学の記事は、<a href=\"listening.html\">木は聴こえるか</a>の骨組みであり、<a href=\"guitarcare.html\">ギターの手入れ</a>と<a href=\"japanesewoods.html\">和の木と和の楽器</a>でも用いた。",
                zh:"該研究室關於響板材與音板材的頁面——面板所需的剛性與阻尼、「彈開」缺乏客觀證據、吸濕履歷與熱處理的效應——以及 2019 年筑波大學介紹其研究的專文，是<a href=\"listening.html\">聽得見木頭嗎</a>的骨幹，也用於<a href=\"guitarcare.html\">吉他的保養</a>與<a href=\"japanesewoods.html\">日本之木與日本樂器</a>。" } },
            { term:{ en:"Other research bodies", ja:"そのほかの研究機関", zh:"其他研究機構" },
              jp:"京都大学木材研究所 · 山形大学 · 道総研 · 大分県産業科学技術センター · 奈良文化財研究所 · 米国林産物研究所",
              def:{
                en:"Kyoto University's Wood Research Institute, for its humidity experiment of 1977, known to the book only through a forestry education site's summary (<a href=\"home.html\">Wood in the Home</a>); Yamagata University, for Ogawa and Kono's 2019 study of charcoal producers, and the Hokkaido Research Organization's forest products research institute, on charcoal (<a href=\"fuel.html\">Wood as Fire</a>); the Ōita Industrial Research Institute, on bending local conifers (<a href=\"bentwood.html\">Bentwood</a>); the Nara National Research Institute for Cultural Properties, for the tree-ring date of 594 for the heart pillar of the Hōryū-ji pagoda, published in 2001 (<a href=\"chronology.html\">The Whole Chronology</a>); the USDA Forest Products Laboratory, whose <em>Wood Handbook</em> (1999), table 3-4, gives the equilibrium moisture contents on <a href=\"care.html\">Caring for Wood</a>, <a href=\"home.html\">Wood in the Home</a> and <a href=\"tables.html\">Reference Tables</a>; and the National Taiwan University Experimental Forest at Xitou, for its history (<a href=\"learning.html\">How People Learn It</a>).",
                ja:"京都大学木材研究所——一九七七年の調湿の実験。本書は森林・林業の学習サイトの要約を通してのみ知る（<a href=\"home.html\">住まいと木</a>）。山形大学——Ogawa・Konoによる二〇一九年の製炭者の研究。北海道立総合研究機構の林産試験場——木炭について（<a href=\"fuel.html\">火としての木</a>）。大分県産業科学技術センター——県産針葉樹の曲げ木（<a href=\"bentwood.html\">曲木</a>）。奈良文化財研究所——法隆寺五重塔の心柱の年輪年代五九四年、二〇〇一年の発表（<a href=\"chronology.html\">総年表</a>）。米国農務省林産物研究所——その『Wood Handbook』（一九九九年）の表3-4は、<a href=\"care.html\">木の手入れ</a>、<a href=\"home.html\">住まいと木</a>、<a href=\"tables.html\">早見表</a>の平衡含水率の出所である。そして国立台湾大学実験林（渓頭）——その沿革（<a href=\"learning.html\">人はいかに学ぶか</a>）。",
                zh:"京都大學木材研究所——1977 年的調濕實驗，本書僅經由一個森林林業學習網站的摘要得知（<a href=\"home.html\">居家與木</a>）；山形大學——Ogawa 與 Kono 2019 年對製炭者的研究，以及北海道立綜合研究機構林產試驗場關於木炭的資料（<a href=\"fuel.html\">作為火的木</a>）；大分縣產業科學技術中心——縣產針葉樹的曲木加工（<a href=\"bentwood.html\">曲木</a>）；奈良文化財研究所——法隆寺五重塔心柱的年輪年代 594 年，於 2001 年發表（<a href=\"chronology.html\">總年表</a>）；美國農業部林產品研究所——其《Wood Handbook》（1999 年）表 3-4，是<a href=\"care.html\">木器保養</a>、<a href=\"home.html\">居家與木</a>與<a href=\"tables.html\">速查表</a>中平衡含水率的出處；以及國立臺灣大學實驗林（溪頭）——其沿革（<a href=\"learning.html\">人們如何學會它</a>）。" } }
          ] },
        { t:"h3", text:{ en:"Papers", ja:"論文", zh:"論文" }, jp:"論文" },
        { t:"defs",
          items:[
            { term:{ en:"Forests, wood and health", ja:"森・木と健康", zh:"森林、木材與健康" },
              jp:"森林浴 · 森林医学",
              def:{
                en:"Park B.J., Tsunetsugu Y., Kasetani T., Kagawa T. and Miyazaki Y. (2010), <em>Environmental Health and Preventive Medicine</em> 15: 18–26 — 24 field experiments, 280 young men, cortisol, pulse and blood pressure in forest and city. Li Q. et al. (2008), <em>International Journal of Immunopathology and Pharmacology</em> 21: 117–127, and Li Q. et al. (2009), same journal, 22 — natural killer cells after forest stays and after hinoki oil vaporised in a hotel room. Ideno Y. et al. (2017), <em>BMC Complementary and Alternative Medicine</em> 17: 409 — a meta-analysis of 20 trials. Ikei H., Song C. and Miyazaki Y. (2017), <em>Journal of Wood Science</em> 63 — a review of the physiological effects of wood. Matsubara A. et al. (2020), <em>Nippon Jibiinkoka Gakkai Kaiho</em> 123(6): 485 — the 2019 national survey of nasal allergy. All on <a href=\"health.html\">Forests &amp; the Body</a>.",
                ja:"Park B.J.、恒次祐子、Kasetani T.、香川隆英、宮崎良文（二〇一〇年）『Environmental Health and Preventive Medicine』15: 18–26——二十四か所の野外実験、若い男性280人、森と都市でのコルチゾール・脈拍・血圧。Li Q.ほか（二〇〇八年）『International Journal of Immunopathology and Pharmacology』21: 117–127と、Li Q.ほか（二〇〇九年）同誌22——森での滞在のあと、またホテルの部屋でヒノキ油を気化させたあとのNK細胞。Ideno Y.ほか（二〇一七年）『BMC Complementary and Alternative Medicine』17: 409——二十件の試験のメタ分析。池井晴美、Song Chorong、宮崎良文（二〇一七年）『Journal of Wood Science』63——木材が人に及ぼす生理的効果の総説。松原篤ほか（二〇二〇年）『日本耳鼻咽喉科学会会報』123(6): 485——二〇一九年の鼻アレルギーの全国疫学調査。いずれも<a href=\"health.html\">森と身体</a>で用いた。",
                zh:"Park B.J.、恒次祐子、笠谷敏行、香川隆英、宮崎良文（2010）《Environmental Health and Preventive Medicine》15: 18–26——24 處野外實驗、280 名年輕男性，比較森林與城市中的皮質醇、脈搏與血壓。Li Q. 等（2008）《International Journal of Immunopathology and Pharmacology》21: 117–127，與 Li Q. 等（2009）同刊 22——森林停留後，以及在旅館房間中揮發扁柏油後的自然殺手細胞。Ideno Y. 等（2017）《BMC Complementary and Alternative Medicine》17: 409——20 項試驗的統合分析。池井晴美、Song Chorong、宮崎良文（2017）《Journal of Wood Science》63——木材對人體生理效應的綜述。松原篤等（2020）《日本耳鼻咽喉科學會會報》123(6): 485——2019 年鼻過敏全國流行病學調查。皆用於<a href=\"health.html\">森林與身體</a>。" } },
            { term:{ en:"Listening tests", ja:"聴き比べの実験", zh:"聆聽實驗" },
              jp:"盲検 · 二重盲検",
              def:{
                en:"Fritz C., Curtin J., Poitevineau J., Morrel-Samuels P. and Tao F.-C. (2012), <em>PNAS</em> 109: 760 — players choosing between old Italian and new violins; with the two later studies by Fritz et al. in <em>PNAS</em>, of soloists (2014) and of listeners in concert halls (2017). Carcagno S., Bucknall R., Woodhouse J., Fritz C. and Plack C.J. (2018), <em>Journal of the Acoustical Society of America</em> 144(6): 3533 — six guitars identical but for their back wood. Merchel S., Altinsoy M.E. and Olson D. (2019), same journal, 146(4): 2608–2618 — tops and braces chosen by measured density and stiffness. Pauget Ballesteros, Lalitte, Lostanlen and Fritz (2026), <em>Acta Acustica</em> — a violin played daily for six months. Piacsek A. and Lowery S. (2023), Acoustical Society of America — mechanical “playing in”. All on <a href=\"listening.html\">Can You Hear the Wood?</a>; Carcagno et al. also on <a href=\"debates.html\">Where People Disagree</a>.",
                ja:"Fritz C.、Curtin J.、Poitevineau J.、Morrel-Samuels P.、Tao F.-C.（二〇一二年）『PNAS』109: 760——古いイタリアのヴァイオリンと新作のどちらを奏者が選ぶか。同誌のFritzほかによる続く二つの研究、独奏者の評価（二〇一四年）と演奏会場の聴き手の評価（二〇一七年）。Carcagno S.、Bucknall R.、Woodhouse J.、Fritz C.、Plack C.J.（二〇一八年）『Journal of the Acoustical Society of America』144(6): 3533——裏板の材だけが異なる六本のギター。Merchel S.、Altinsoy M.E.、Olson D.（二〇一九年）同誌146(4): 2608–2618——密度と剛性を測って選んだ表板と力木。Pauget Ballesteros、Lalitte、Lostanlen、Fritz（二〇二六年）『Acta Acustica』——半年間毎日弾かれたヴァイオリン。Piacsek A.、Lowery S.（二〇二三年）米国音響学会——機械による「弾き込み」。いずれも<a href=\"listening.html\">木は聴こえるか</a>で用い、Carcagnoらは<a href=\"debates.html\">論の分かれるところ</a>でも用いた。",
                zh:"Fritz C.、Curtin J.、Poitevineau J.、Morrel-Samuels P.、Tao F.-C.（2012）《PNAS》109: 760——演奏者在義大利古琴與新琴之間的選擇；以及 Fritz 等人其後在同刊發表的兩項研究：獨奏家的評價（2014）與音樂廳聽眾的評價（2017）。Carcagno S.、Bucknall R.、Woodhouse J.、Fritz C.、Plack C.J.（2018）《Journal of the Acoustical Society of America》144(6): 3533——只有背板木材不同的六把吉他。Merchel S.、Altinsoy M.E.、Olson D.（2019）同刊 146(4): 2608–2618——依實測密度與剛性挑選的面板與音梁。Pauget Ballesteros、Lalitte、Lostanlen、Fritz（2026）《Acta Acustica》——每天被演奏、持續半年的小提琴。Piacsek A.、Lowery S.（2023）美國聲學學會——機械式「彈開」。皆用於<a href=\"listening.html\">聽得見木頭嗎</a>；Carcagno 等人的研究也用於<a href=\"debates.html\">意見分歧之處</a>。" } },
            { term:{ en:"Wood acoustics, ageing and treatment", ja:"木材の音響・経年・処理", zh:"木材的聲學、老化與處理" },
              jp:"木材学会誌 · 材料 · 日本音響学会誌",
              def:{
                en:"Yokoyama M. et al. (2009), <em>Comptes Rendus Physique</em> 10(7): 601–611 — hinoki from historical buildings up to about 1,500 years old, no loss of stiffness. Zenigaya N., Obataya E. and Matsuo M. (2016), <em>Mokuzai Gakkaishi</em> 62(6): 250–258 — a review of old and heat-treated wood. Yano H., Mukunashiro J. and Onishi K. (1990), <em>Zairyō</em> 39(444): 1207 — spruce and cedar tops. Sobue N. and Okayasu S. (1992), <em>Zairyō</em> 41(461): 164–169 — damping under continuous vibration. Ono T. (1996), <em>Journal of the Acoustical Society of Japan (E)</em> 17(4): 183–193, and Ono, Miyakoshi and Watanabe (2002), <em>Acoustical Science and Technology</em> 23(3): 135 — wood and carbon-fibre soundboards. Mania P. and Skrodzka E. (2020), <em>Journal of King Saud University – Science</em> 32(1): 1152–1156, and Krüger, Zauer and Wagenführ (2018), <em>European Journal of Wood and Wood Products</em> 76(6): 1663–1668 — thermally treated tonewoods. On <a href=\"listening.html\">Can You Hear the Wood?</a> and <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>.",
                ja:"Yokoyama M.ほか（二〇〇九年）『Comptes Rendus Physique』10(7): 601–611——およそ千五百年までの歴史的建造物のヒノキ、剛性の低下なし。銭谷・小幡谷・松尾（二〇一六年）『木材学会誌』62(6): 250–258——古材と熱処理材の総説。矢野・椋代・大西（一九九〇年）『材料』39(444): 1207——スプルースとシダーの表板。祖父江・岡安（一九九二年）『材料』41(461): 164–169——連続振動のもとでの損失。小野晃明（一九九六年）『Journal of the Acoustical Society of Japan (E)』17(4): 183–193と、小野・宮越・渡辺（二〇〇二年）『Acoustical Science and Technology』23(3): 135——木と炭素繊維の響板。Mania P.、Skrodzka E.（二〇二〇年）『Journal of King Saud University – Science』32(1): 1152–1156と、Krüger、Zauer、Wagenführ（二〇一八年）『European Journal of Wood and Wood Products』76(6): 1663–1668——熱処理した音響材。<a href=\"listening.html\">木は聴こえるか</a>と<a href=\"japanesewoods.html\">和の木と和の楽器</a>で用いた。",
                zh:"Yokoyama M. 等（2009）《Comptes Rendus Physique》10(7): 601–611——取自屋齡最高約 1,500 年之歷史建築的扁柏，剛性未見下降。錢谷、小幡谷、松尾（2016）《木材學會誌》62(6): 250–258——古材與熱處理材的綜述。矢野、椋代、大西（1990）《材料》39(444): 1207——雲杉與雪松面板。祖父江、岡安（1992）《材料》41(461): 164–169——持續振動下的阻尼。小野晃明（1996）《Journal of the Acoustical Society of Japan (E)》17(4): 183–193，以及小野、宮越、渡邊（2002）《Acoustical Science and Technology》23(3): 135——木材與碳纖維響板。Mania P.、Skrodzka E.（2020）《Journal of King Saud University – Science》32(1): 1152–1156，以及 Krüger、Zauer、Wagenführ（2018）《European Journal of Wood and Wood Products》76(6): 1663–1668——熱處理音木。用於<a href=\"listening.html\">聽得見木頭嗎</a>與<a href=\"japanesewoods.html\">日本之木與日本樂器</a>。" } },
            { term:{ en:"Wood in the house and kitchen", ja:"住まいと台所の木", zh:"住宅與廚房中的木" },
              jp:"木材工業 · Journal of Food Protection · 林業経済研究",
              def:{
                en:"Yamamoto et al. (1967), <em>Mokuzai Kōgyō</em> (Wood Industry) 22(1): 24 — how fast bare feet cool on concrete, vinyl and wood, known through a timber merchant's summary (<a href=\"home.html\">Wood in the Home</a>). Ak N.O., Cliver D.O. and Kaspar C.W. (1994), <em>Journal of Food Protection</em> 57(1): 16–22 — bacteria on wooden and plastic cutting boards (<a href=\"care.html\">Caring for Wood</a>). A review of mokuiku in the <em>Journal of Forest Economics</em> (Ringyō Keizai Kenkyū), read on J-STAGE (<a href=\"mokuiku.html\">Learning Through Wood</a>). Two older studies are cited as the pages describe them, without the original in hand: Kohara Jirō's comparison of old and new hinoki (<a href=\"hinoki.html\">Hinoki</a>) and Okazaki and Ōkuma's carbon accounts of a house (<a href=\"carbon.html\">Forests &amp; Carbon</a>).",
                ja:"山本ほか（一九六七年）『木材工業』22(1): 24——はだしの足がコンクリート、ビニル床、木の上でどれほど速く冷えるか。材木商の要約を通して知った（<a href=\"home.html\">住まいと木</a>）。Ak N.O.、Cliver D.O.、Kaspar C.W.（一九九四年）『Journal of Food Protection』57(1): 16–22——木とプラスチックのまな板の細菌（<a href=\"care.html\">木の手入れ</a>）。『林業経済研究』の木育についての論文をJ-STAGEで読んだ（<a href=\"mokuiku.html\">木育</a>）。二つの古い研究は、原典を手にせず、頁が記す形で引いている。小原二郎による新旧のヒノキの比較（<a href=\"hinoki.html\">ヒノキ</a>）と、岡崎・大熊による住宅の炭素の収支（<a href=\"carbon.html\">森と炭素</a>）である。",
                zh:"山本等（1967）《木材工業》22(1): 24——赤腳在混凝土、塑膠地板與木地板上冷卻的速度，經由一家木材商的摘要得知（<a href=\"home.html\">居家與木</a>）。Ak N.O.、Cliver D.O.、Kaspar C.W.（1994）《Journal of Food Protection》57(1): 16–22——木製與塑膠砧板上的細菌（<a href=\"care.html\">木器保養</a>）。《林業經濟研究》中關於木育的論文，於 J-STAGE 閱讀（<a href=\"mokuiku.html\">木育</a>）。兩項較早的研究則依頁面的描述引用，未取得原文：小原二郎對新舊扁柏的比較（<a href=\"hinoki.html\">日本扁柏</a>），以及岡崎與大熊對一棟住宅的碳收支計算（<a href=\"carbon.html\">森林與碳</a>）。" } }
          ] }
      ] },
    { t:"section",
      id:"industry",
      title:{ en:"Wood: Companies, cooperatives and associations", ja:"木：企業・組合・団体", zh:"木：企業、合作社與團體" },
      jp:"業界",
      body:[
        { t:"p",
          text:{
            en:"Much of what this book says about Hida furniture, guitars and crafts comes from the makers themselves: company histories, product pages, care guides and published profiles. These are the best sources for dates of founding, models and methods, and the weakest for anything a company might wish to present favourably — market share, firsts, quality. The table lists the principal ones and what they were used for.",
            ja:"本書が飛騨の家具、ギター、工芸について述べることの多くは、作り手自身から来ている。社史、製品の頁、手入れの案内、公開された会社概要である。創業の年、型番、製法については最良の資料であり、会社が好ましく見せたいと思いうること——シェア、「初」、品質——については最も弱い資料である。主なものと、何に用いたかを表に挙げる。",
            zh:"本書關於飛驒家具、吉他與工藝的許多內容，來自製作者本身：公司沿革、產品頁面、保養指南與公開的公司概要。它們是創立年份、型號與工法的最佳資料，但對於公司可能想美化的事——市占率、「首創」、品質——則是最薄弱的資料。下表列出主要的幾項及其用途。" } },
        { t:"table",
          caption:{ en:"Principal company and organisational sources", ja:"主な企業・団体の資料", zh:"主要企業與團體資料" },
          cols:[
            { en:"Source", ja:"資料", zh:"資料" },
            { en:"What it is", ja:"種別", zh:"類別" },
            { en:"Used for", ja:"用いた箇所", zh:"用途" }
          ],
          keyCol:true,
          rows:[
            [
              { en:"Hida Sangyō", ja:"飛騨産業", zh:"飛驒產業" },
              { en:"Furniture maker, Takayama, 1920", ja:"家具メーカー、高山、一九二〇年", zh:"家具製造商，高山，1920 年" },
              {
                en:"Company history and outline (January 2026), woods and finishes, care and repair, its live-in school and technician system: <a href=\"furniture.html\">Hida Furniture</a>, <a href=\"bentwood.html\">Bentwood</a>, <a href=\"finishes.html\">Finishes</a>, <a href=\"learning.html\">How People Learn It</a>",
                ja:"社史と会社概要（二〇二六年一月）、樹種と塗装、手入れと修理、飛騨職人学舎と技能士の制度：<a href=\"furniture.html\">飛騨の家具</a>、<a href=\"bentwood.html\">曲木</a>、<a href=\"finishes.html\">塗装と仕上げ</a>、<a href=\"learning.html\">人はいかに学ぶか</a>",
                zh:"公司沿革與概要（2026 年 1 月）、樹種與塗裝、保養與修理、住宿制學校與技能士制度：<a href=\"furniture.html\">飛驒家具</a>、<a href=\"bentwood.html\">曲木</a>、<a href=\"finishes.html\">塗裝與收尾</a>、<a href=\"learning.html\">人們如何學會它</a>" }
            ],
            [
              { en:"Kashiwa Mokkō", ja:"柏木工", zh:"柏木工" },
              { en:"Furniture maker, Takayama, 1943", ja:"家具メーカー、高山、一九四三年", zh:"家具製造商，高山，1943 年" },
              {
                en:"History, timber, outline (January 2024), 2026 prices: <a href=\"furniture.html\">Hida Furniture</a>, <a href=\"buying.html\">Buying Wooden Things</a>",
                ja:"沿革、用材、会社概要（二〇二四年一月）、二〇二六年の価格：<a href=\"furniture.html\">飛騨の家具</a>、<a href=\"buying.html\">木の物を選ぶ</a>",
                zh:"沿革、用材、公司概要（2024 年 1 月）、2026 年價格：<a href=\"furniture.html\">飛驒家具</a>、<a href=\"buying.html\">挑選木製品</a>" }
            ],
            [
              { en:"Nissin Mokkō", ja:"日進木工", zh:"日進木工" },
              { en:"Furniture maker, Takayama, 1946", ja:"家具メーカー、高山、一九四六年", zh:"家具製造商，高山，1946 年" },
              {
                en:"History, outline (April 2026), repair procedure, trademark certificate: <a href=\"furniture.html\">Hida Furniture</a>, <a href=\"care.html\">Caring for Wood</a>",
                ja:"沿革、会社概要（二〇二六年四月）、修理の手順、商標の認定：<a href=\"furniture.html\">飛騨の家具</a>、<a href=\"care.html\">木の手入れ</a>",
                zh:"沿革、公司概要（2026 年 4 月）、修理流程、商標認證：<a href=\"furniture.html\">飛驒家具</a>、<a href=\"care.html\">木器保養</a>" }
            ],
            [
              { en:"Shirakawa; Kitani", ja:"シラカワ、キタニ", zh:"Shirakawa、Kitani" },
              {
                en:"Furniture makers, Takayama, 1960 and 1967",
                ja:"家具メーカー、高山、一九六〇年と一九六七年",
                zh:"家具製造商，高山，1960 年與 1967 年" },
              {
                en:"Shirakawa's profile via JETRO; Kitani's history and Danish licences: <a href=\"furniture.html\">Hida Furniture</a>, <a href=\"world.html\">Beyond Japan</a>",
                ja:"JETROによるシラカワの紹介、キタニの沿革とデンマークの家具のライセンス：<a href=\"furniture.html\">飛騨の家具</a>、<a href=\"world.html\">日本の外へ</a>",
                zh:"經 JETRO 的 Shirakawa 介紹；Kitani 的沿革與丹麥家具授權：<a href=\"furniture.html\">飛驒家具</a>、<a href=\"world.html\">日本以外</a>" }
            ],
            [
              { en:"Oak Village; Hidakuma", ja:"オークヴィレッジ、飛騨の森でクマは踊る", zh:"Oak Village、Hidakuma" },
              {
                en:"Woodworking company, 1974, and its school; Hida city company, 2015",
                ja:"木工の会社（一九七四年）とその学校、飛騨市の会社（二〇一五年）",
                zh:"木工公司（1974 年）及其學校；飛驒市的公司（2015 年）" },
              {
                en:"Founding story, Shinrin Takumi Juku; broadleaf use and bentwood fixtures: <a href=\"houses.html\">The Furniture Houses</a>, <a href=\"broadleaf.html\">The Broadleaf Forests</a>, <a href=\"bentwood.html\">Bentwood</a>",
                ja:"創業の経緯と森林たくみ塾、広葉樹の活用と曲木の什器：<a href=\"houses.html\">家具の作り手</a>、<a href=\"broadleaf.html\">広葉樹の森</a>、<a href=\"bentwood.html\">曲木</a>",
                zh:"創立經過與森林匠塾；闊葉樹利用與曲木陳設：<a href=\"houses.html\">家具的製作者</a>、<a href=\"broadleaf.html\">闊葉樹之森</a>、<a href=\"bentwood.html\">曲木</a>" }
            ],
            [
              { en:"Takamine Gakki", ja:"高峰楽器製作所", zh:"高峰樂器製作所" },
              { en:"Guitar maker, Nakatsugawa, 1959", ja:"ギターメーカー、中津川、一九五九年", zh:"吉他製造商，中津川，1959 年" },
              {
                en:"History, how a guitar is made, maintenance guide; the US distributor's FAQ: <a href=\"takamine.html\">Takamine</a>, <a href=\"guitarcare.html\">Caring for a Guitar</a>",
                ja:"沿革、製造工程、手入れの案内、米国の販売元のFAQ：<a href=\"takamine.html\">タカミネ</a>、<a href=\"guitarcare.html\">ギターの手入れ</a>",
                zh:"沿革、製造流程、保養指南，以及美國經銷商的常見問答：<a href=\"takamine.html\">Takamine</a>、<a href=\"guitarcare.html\">吉他的保養</a>" }
            ],
            [
              { en:"K. Yairi (Yairi Guitar)", ja:"ヤイリギター", zh:"Yairi 吉他" },
              {
                en:"Guitar maker, Kani; founded in Nagoya, 1935",
                ja:"ギターメーカー、可児。一九三五年に名古屋で創業",
                zh:"吉他製造商，可兒；1935 年創立於名古屋" },
              {
                en:"Catalogue (scale lengths), FAQ, repairs, how a guitar is made: <a href=\"yairi.html\">Yairi</a>, <a href=\"guitar.html\">Anatomy of a Guitar</a>, <a href=\"tables.html\">Reference Tables</a>",
                ja:"カタログ（弦長）、FAQ、修理、製造工程：<a href=\"yairi.html\">ヤイリ</a>、<a href=\"guitar.html\">ギターの構造</a>、<a href=\"tables.html\">早見表</a>",
                zh:"型錄（弦長）、常見問答、修理、製造流程：<a href=\"yairi.html\">Yairi</a>、<a href=\"guitar.html\">吉他的構造</a>、<a href=\"tables.html\">速查表</a>" }
            ],
            [
              {
                en:"Suzuki Violin, Yamaha, Fujigen, Morris",
                ja:"鈴木バイオリン製造、ヤマハ、フジゲン、モーリス",
                zh:"鈴木小提琴製造、山葉、Fujigen、Morris" },
              { en:"Instrument makers", ja:"楽器メーカー", zh:"樂器製造商" },
              {
                en:"Histories of the industry; Yamaha's A.R.E. treatment, care guide and akaezomatsu project: <a href=\"guitarindustry.html\">Japan's Guitar Industry</a>, <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>",
                ja:"産業の歴史、ヤマハのA.R.E.処理、手入れの案内、アカエゾマツの取り組み：<a href=\"guitarindustry.html\">日本のギター産業</a>、<a href=\"japanesewoods.html\">和の木と和の楽器</a>",
                zh:"產業歷史；山葉的 A.R.E. 處理、保養指南與紅蝦夷松計畫：<a href=\"guitarindustry.html\">日本的吉他產業</a>、<a href=\"japanesewoods.html\">日本之木與日本樂器</a>" }
            ],
            [
              {
                en:"Taylor, Gibson Japan, D'Addario, SATV",
                ja:"テイラー、ギブソン・ジャパン、ダダリオ、防潮家",
                zh:"Taylor、Gibson 日本、D'Addario、防潮家" },
              { en:"Makers and suppliers in the US, Japan and Taiwan", ja:"米国・日本・台湾のメーカーと供給元", zh:"美國、日本與台灣的製造商與供應商" },
              {
                en:"Humidity, travel and storage advice; Taylor's ebony project: <a href=\"guitarcare.html\">Caring for a Guitar</a>, <a href=\"cites.html\">Rosewood &amp; the Law</a>",
                ja:"湿度、旅、保管の助言、テイラーの黒檀の取り組み：<a href=\"guitarcare.html\">ギターの手入れ</a>、<a href=\"cites.html\">ローズウッドと条約</a>",
                zh:"濕度、旅行與存放建議；Taylor 的烏木計畫：<a href=\"guitarcare.html\">吉他的保養</a>、<a href=\"cites.html\">玫瑰木與公約</a>" }
            ],
            [
              { en:"Ōhashi Ryōki (Masuya); Ozeki", ja:"大橋量器（枡工房枡屋）、オゼキ", zh:"大橋量器（枡工房枡屋）、Ozeki" },
              {
                en:"Masu maker, Ōgaki, 1950; lantern maker, Gifu, 1891",
                ja:"枡の製造、大垣、一九五〇年；提灯の製造、岐阜、一八九一年",
                zh:"枡製造，大垣，1950 年；燈籠製造，岐阜，1891 年" },
              {
                en:"History and care of masu; Noguchi's AKARI lamps: <a href=\"masu.html\">The Masu of Ōgaki</a>, <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>",
                ja:"枡の歴史と手入れ、ノグチのAKARI：<a href=\"masu.html\">大垣の枡</a>、<a href=\"paper.html\">和紙・提灯・和傘</a>",
                zh:"枡的歷史與保養；野口勇的 AKARI 燈：<a href=\"masu.html\">大垣的枡</a>、<a href=\"paper.html\">和紙、燈籠與和傘</a>" }
            ],
            [
              { en:"Shunkei and instrument workshops", ja:"春慶と和楽器の工房", zh:"春慶與日本樂器工坊" },
              {
                en:"Yamada Shunkei-ten, Nakayama Shikki, Fukuju Shikkiten; Ichikawa Mokugyo, Asano Taiko, Fukuei Gakki",
                ja:"山田春慶店、中山漆器、福壽漆器店；市川木魚製造所、浅野太鼓、福栄楽器",
                zh:"山田春慶店、中山漆器、福壽漆器店；市川木魚製造所、淺野太鼓、福榮樂器" },
              {
                en:"Lacquer process and care; mokugyo and taiko making: <a href=\"shunkei.html\">Hida Shunkei</a>, <a href=\"care.html\">Caring for Wood</a>, <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>",
                ja:"漆の工程と手入れ、木魚と太鼓の製作：<a href=\"shunkei.html\">飛騨春慶</a>、<a href=\"care.html\">木の手入れ</a>、<a href=\"japanesewoods.html\">和の木と和の楽器</a>",
                zh:"漆的工序與保養；木魚與太鼓的製作：<a href=\"shunkei.html\">飛驒春慶</a>、<a href=\"care.html\">木器保養</a>、<a href=\"japanesewoods.html\">日本之木與日本樂器</a>" }
            ],
            [
              { en:"Okajima Mokuzai, Maruhon, Nice", ja:"恩加島木材、マルホン、ナイス", zh:"恩加島木材、Maruhon、Nice" },
              { en:"Timber merchants and distributors", ja:"材木商・建材流通", zh:"木材商與建材流通業者" },
              {
                en:"Finishes, veneers and formaldehyde classes; the warmth of wooden floors; the 2023 Clean Wood amendment: <a href=\"finishes.html\">Finishes</a>, <a href=\"home.html\">Wood in the Home</a>, <a href=\"buying.html\">Buying Wooden Things</a>",
                ja:"塗装、突板、ホルムアルデヒドの区分、木の床の温かさ、二〇二三年のクリーンウッド法改正：<a href=\"finishes.html\">塗装と仕上げ</a>、<a href=\"home.html\">住まいと木</a>、<a href=\"buying.html\">木の物を選ぶ</a>",
                zh:"塗裝、薄片與甲醛等級；木地板的溫暖；2023 年潔淨木材法修正：<a href=\"finishes.html\">塗裝與收尾</a>、<a href=\"home.html\">居家與木</a>、<a href=\"buying.html\">挑選木製品</a>" }
            ],
            [
              { en:"Hida Woodworking Cooperative Federation", ja:"協同組合飛騨木工連合会", zh:"協同組合飛驒木工聯合會" },
              { en:"Cooperative of Hida furniture makers, 1982", ja:"飛騨の家具メーカーの協同組合、一九八二年", zh:"飛驒家具製造商的合作社，1982 年" },
              {
                en:"History of Hida furniture in its Hida no Takumi Gakkai archive, the furniture festival, the trademark: <a href=\"furniture.html\">Hida Furniture</a>, <a href=\"bentwood.html\">Bentwood</a>, <a href=\"ittobori.html\">Ichii Ittōbori</a>",
                ja:"飛騨の匠学会のアーカイブにある飛騨の家具の歴史、家具の祭り、商標：<a href=\"furniture.html\">飛騨の家具</a>、<a href=\"bentwood.html\">曲木</a>、<a href=\"ittobori.html\">一位一刀彫</a>",
                zh:"其「飛驒匠學會」檔案中的飛驒家具史、家具節、商標：<a href=\"furniture.html\">飛驒家具</a>、<a href=\"bentwood.html\">曲木</a>、<a href=\"ittobori.html\">一位一刀雕</a>" }
            ],
            [
              { en:"Forest owners' cooperatives and log markets", ja:"森林組合と原木市場", zh:"森林組合與原木市場" },
              {
                en:"Gifu Prefectural Forest Owners' Cooperative Federation; Kashimo cooperative; Gifu Meiboku Cooperative; Tōnō hinoki market",
                ja:"岐阜県森林組合連合会、加子母森林組合、岐阜県銘木協同組合、東濃ヒノキの市場",
                zh:"岐阜縣森林組合聯合會、加子母森林組合、岐阜縣銘木協同組合、東濃扁柏市場" },
              {
                en:"Joint sales centres, market days, named timber, certified-timber centre: <a href=\"markets.html\">Log Markets &amp; Prices</a>, <a href=\"buying.html\">Buying Wooden Things</a>, <a href=\"visiting.html\">Visiting Gifu</a>",
                ja:"共販所、市日、銘木、証明材の認証センター：<a href=\"markets.html\">原木市場と価格</a>、<a href=\"buying.html\">木の物を選ぶ</a>、<a href=\"visiting.html\">岐阜を訪ねる</a>",
                zh:"共販所、市日、銘木、證明材認證中心：<a href=\"markets.html\">原木市場與價格</a>、<a href=\"buying.html\">挑選木製品</a>、<a href=\"visiting.html\">造訪岐阜</a>" }
            ],
            [
              { en:"Craft cooperatives and promotion bodies", ja:"工芸の組合と振興団体", zh:"工藝合作社與振興團體" },
              {
                en:"Hida Shunkei and Ittōbori cooperatives; Mino washi and Gifu lantern cooperatives; Association for the Promotion of Traditional Craft Industries (1975)",
                ja:"飛騨春慶と一位一刀彫の組合、美濃和紙と岐阜提灯の組合、伝統的工芸品産業振興協会（一九七五年）",
                zh:"飛驒春慶與一位一刀雕的合作社、美濃和紙與岐阜燈籠的合作社、傳統工藝品產業振興協會（1975 年）" },
              {
                en:"Trademarks, histories, certified craftsmen and the industry's decline: <a href=\"shunkei.html\">Hida Shunkei</a>, <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>, <a href=\"learning.html\">How People Learn It</a>",
                ja:"商標、沿革、伝統工芸士、産業の縮小：<a href=\"shunkei.html\">飛騨春慶</a>、<a href=\"paper.html\">和紙・提灯・和傘</a>、<a href=\"learning.html\">人はいかに学ぶか</a>",
                zh:"商標、沿革、傳統工藝士與產業萎縮：<a href=\"shunkei.html\">飛驒春慶</a>、<a href=\"paper.html\">和紙、燈籠與和傘</a>、<a href=\"learning.html\">人們如何學會它</a>" }
            ],
            [
              { en:"Trade and technical associations", ja:"業界・技術団体", zh:"產業與技術團體" },
              {
                en:"Japan Wood Research and Information Centre; Japan Special Forest Products Promotion Association; Japan Woody Bioenergy Association; Biomass Industrial Society Network; Japan Paint Manufacturers Association; Forest Therapy Society",
                ja:"日本木材総合情報センター、日本特用林産振興会、日本木質バイオマスエネルギー協会、バイオマス産業社会ネットワーク、日本塗料工業会、森林セラピーソサエティ",
                zh:"日本木材綜合資訊中心、日本特用林產振興會、日本木質生質能協會、生質能產業社會網絡、日本塗料工業會、森林療法協會" },
              {
                en:"Species data, urushi to 2018, Gifu's biomass plants and imports, formaldehyde rules, forest-therapy certification: <a href=\"tables.html\">Reference Tables</a>, <a href=\"finishes.html\">Finishes</a>, <a href=\"fuel.html\">Wood as Fire</a>, <a href=\"health.html\">Forests &amp; the Body</a>",
                ja:"樹種のデータ、二〇一八年までの漆、岐阜のバイオマス発電所と輸入燃料、ホルムアルデヒドの規則、森林セラピーの認定：<a href=\"tables.html\">早見表</a>、<a href=\"finishes.html\">塗装と仕上げ</a>、<a href=\"fuel.html\">火としての木</a>、<a href=\"health.html\">森と身体</a>",
                zh:"樹種資料、至 2018 年的生漆數據、岐阜的生質能電廠與進口燃料、甲醛規範、森林療法認證：<a href=\"tables.html\">速查表</a>、<a href=\"finishes.html\">塗裝與收尾</a>、<a href=\"fuel.html\">作為火的木</a>、<a href=\"health.html\">森林與身體</a>" }
            ],
            [
              { en:"Gifu Industrial Economy Promotion Center", ja:"岐阜県産業経済振興センター", zh:"岐阜縣產業經濟振興中心" },
              { en:"Prefectural foundation", ja:"県の財団", zh:"縣屬財團" },
              {
                en:"Local industry survey “Woodworking” (FY2022 and FY2025 editions): <a href=\"industry.html\">Wood in Numbers</a>, <a href=\"furniture.html\">Hida Furniture</a>",
                ja:"地場産業調査「木工」（二〇二二年度版と二〇二五年度版）：<a href=\"industry.html\">木の数字</a>、<a href=\"furniture.html\">飛騨の家具</a>",
                zh:"地方產業調查〈木工〉（2022 年度版與 2025 年度版）：<a href=\"industry.html\">木材的數字</a>、<a href=\"furniture.html\">飛驒家具</a>" }
            ],
            [
              { en:"Ise Jingū", ja:"神宮（伊勢）", zh:"伊勢神宮" },
              { en:"Shrine administration", ja:"神宮司庁", zh:"神宮司廳" },
              {
                en:"Schedule of the 63rd Shikinen Sengū, 2025–2033: <a href=\"felling.html\">Felling &amp; Extraction</a>, <a href=\"chronology.html\">The Whole Chronology</a>",
                ja:"第六十三回式年遷宮の日程（二〇二五〜二〇三三年）：<a href=\"felling.html\">伐倒と搬出</a>、<a href=\"chronology.html\">総年表</a>",
                zh:"第 63 回式年遷宮日程（2025～2033 年）：<a href=\"felling.html\">伐倒與集運</a>、<a href=\"chronology.html\">總年表</a>" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Founding years as given by the companies and cooperatives themselves. Where a company's account conflicts with another source, the pages say so; see the caveats below.",
            ja:"創業・設立の年は各社・各組合自身の記載による。会社の記述がほかの資料と食い違う場合は各頁でそう記した。後述の注意点も参照。",
            zh:"創立年份依各公司與合作社自身的記載。若公司說法與其他資料相牴觸，各頁皆已註明；另見下文的注意事項。" } }
      ] },
    { t:"section",
      id:"historical",
      title:{ en:"Wood: Historical documents and classic works", ja:"木：史料と古典", zh:"木：史料與古典" },
      jp:"史料",
      body:[
        { t:"p",
          text:{
            en:"The old texts named in this book are few, and none was read in manuscript. They are cited as the pages cite them, through modern editions, municipal histories, museum summaries and reference works; the right-hand column says where each appears.",
            ja:"本書が名を挙げる古い文献は多くなく、どれも写本で読んだものではない。現代の刊本、市町村史、博物館の解説、参考書を通して、各頁が引く形で引いている。右の欄にそれぞれが現れる頁を記した。",
            zh:"本書提及的古代文獻不多，且沒有一份是讀自抄本。它們皆經由現代刊本、市町村史、博物館說明與參考書，依各頁引用的方式引用；右欄註明各文獻出現的頁面。" } },
        { t:"table",
          caption:{ en:"Historical documents named in the book", ja:"本書が名を挙げる史料", zh:"本書提及的史料" },
          cols:[
            { en:"Document", ja:"史料", zh:"史料" },
            { en:"Date", ja:"年代", zh:"年代" },
            { en:"What it establishes, and where", ja:"何を伝え、どこで引くか", zh:"說明了什麼、見於何處" }
          ],
          keyCol:true,
          rows:[
            [
              {
                en:"Taihō and Yōrō codes; article on Hida in the Yōrō code's corvée chapter",
                ja:"大宝令・養老令（賦役令 斐陀国条）",
                zh:"大寶令、養老令（賦役令 斐陀國條）" },
              "701 · 718 / 757",
              {
                en:"Hida exempted from produce taxes and made to send ten craftsmen from each village unit: <a href=\"takumi.html\">The Hida Takumi</a>, <a href=\"woodhistory.html\">A History of Wood</a>",
                ja:"飛騨は庸と調を免じられ、里ごとに匠丁十人を出す：<a href=\"takumi.html\">飛騨の匠</a>、<a href=\"woodhistory.html\">木の歴史</a>",
                zh:"飛驒免繳庸與調，改為每里派出匠丁十人：<a href=\"takumi.html\">飛驒的匠人</a>、<a href=\"woodhistory.html\">木的歷史</a>" }
            ],
            [
              { en:"Mino household registers, Shōsōin", ja:"美濃国の戸籍（正倉院）", zh:"美濃國戶籍（正倉院）" },
              "702",
              {
                en:"The oldest surviving paper in Japan is Mino paper: <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>",
                ja:"日本に残る最古の紙は美濃の紙である：<a href=\"paper.html\">和紙・提灯・和傘</a>",
                zh:"日本現存最古老的紙是美濃紙：<a href=\"paper.html\">和紙、燈籠與和傘</a>" }
            ],
            [
              { en:"Man'yōshū", ja:"万葉集", zh:"萬葉集" },
              "c. 759",
              {
                en:"The Hida carpenter's inked line; Hida men floating timber; the <em>tobusa</em> rite: <a href=\"poetry.html\">Wood in Letters</a>, <a href=\"gods.html\">Trees and the Gods</a>",
                ja:"飛騨人の打つ墨縄、木を流す飛騨人、鳥総立て：<a href=\"poetry.html\">詩歌と文学のなかの木</a>、<a href=\"gods.html\">神と木</a>",
                zh:"飛驒人彈的墨線、放運木材的飛驒人、鳥總立之禮：<a href=\"poetry.html\">詩文中的木</a>、<a href=\"gods.html\">神與樹</a>" }
            ],
            [
              { en:"Court orders on runaway Hida craftsmen", ja:"逃亡した飛騨工についての命令", zh:"關於逃亡飛驒工匠的朝廷命令" },
              "796 · 811 · 814 · 834",
              {
                en:"The notice of 834 that Hida men could be known by speech and looks: <a href=\"takumi.html\">The Hida Takumi</a>, <a href=\"chronology.html\">The Whole Chronology</a>",
                ja:"名を変えても言葉と姿で見分けられるとする八三四年の通達：<a href=\"takumi.html\">飛騨の匠</a>、<a href=\"chronology.html\">総年表</a>",
                zh:"834 年指出飛驒人可憑口音與外貌辨認的通告：<a href=\"takumi.html\">飛驒的匠人</a>、<a href=\"chronology.html\">總年表</a>" }
            ],
            [
              { en:"Engishiki", ja:"延喜式", zh:"延喜式" },
              "927",
              {
                en:"Thirty-seven Hida men in the Bureau of Carpentry and sixty-three in the Office of Repairs: <a href=\"takumi.html\">The Hida Takumi</a>",
                ja:"木工寮に三十七人、修理職に六十三人の飛騨工：<a href=\"takumi.html\">飛騨の匠</a>",
                zh:"木工寮三十七人、修理職六十三人的飛驒工：<a href=\"takumi.html\">飛驒的匠人</a>" }
            ],
            [
              { en:"Konjaku monogatari", ja:"今昔物語集", zh:"今昔物語集" },
              "c. 1120",
              {
                en:"The Hida carpenter's trick hall and the painter Kudara no Kawanari: <a href=\"takumi.html\">The Hida Takumi</a>, <a href=\"poetry.html\">Wood in Letters</a>",
                ja:"飛騨の工のからくりの堂と絵師百済川成：<a href=\"takumi.html\">飛騨の匠</a>、<a href=\"poetry.html\">詩歌と文学のなかの木</a>",
                zh:"飛驒木匠的機關堂與畫師百濟川成：<a href=\"takumi.html\">飛驒的匠人</a>、<a href=\"poetry.html\">詩文中的木</a>" }
            ],
            [
              { en:"Owari domain forest rules and transport scrolls", ja:"尾張藩の山の掟と運材の絵巻", zh:"尾張藩的山林規定與運材繪卷" },
              "1665 · 1708",
              {
                en:"Closed forests from 1665, the five protected trees from 1708, and illustrated scrolls of ten and thirteen metres showing the Kiso transport method: <a href=\"fivetrees.html\">The Five Trees of Kiso</a>, <a href=\"timberrivers.html\">The Timber Rivers</a>",
                ja:"一六六五年からの留山、一七〇八年からの五木の禁、十メートルと十三メートルの絵巻に描かれた木曽式運材法：<a href=\"fivetrees.html\">木曽五木</a>、<a href=\"timberrivers.html\">木を運んだ川</a>",
                zh:"1665 年起的封山、1708 年起的五木禁伐，以及長十公尺與十三公尺、描繪木曾式運材法的繪卷：<a href=\"fivetrees.html\">木曾五木</a>、<a href=\"timberrivers.html\">運木之河</a>" }
            ],
            [
              {
                en:"Matsuo Bashō: the cormorant-boat verse; Oku no hosomichi",
                ja:"松尾芭蕉「鵜舟」の句、『おくのほそ道』",
                zh:"松尾芭蕉〈鸕鶿舟〉之句、《奧之細道》" },
              "1688 · 1689 / 1702",
              {
                en:"The Nagara fishing boats; the journey's end at Ōgaki in 1689, published in 1702: <a href=\"poetry.html\">Wood in Letters</a>, <a href=\"woodjourneys.html\">Five Journeys</a>",
                ja:"長良川の鵜舟、一六八九年に大垣で終わる旅（刊行は一七〇二年）：<a href=\"poetry.html\">詩歌と文学のなかの木</a>、<a href=\"woodjourneys.html\">五つの旅</a>",
                zh:"長良川的鸕鶿舟；1689 年於大垣結束的旅程（1702 年刊行）：<a href=\"poetry.html\">詩文中的木</a>、<a href=\"woodjourneys.html\">五段旅程</a>" }
            ],
            [
              {
                en:"Ishikawa Masamochi, Hida no takumi monogatari, ill. Hokusai",
                ja:"石川雅望『飛騨匠物語』（葛飾北斎画）",
                zh:"石川雅望《飛驒匠物語》（葛飾北齋繪）" },
              "1808",
              {
                en:"The Hida master and apprentice who learn from immortals: <a href=\"takumi.html\">The Hida Takumi</a>, <a href=\"poetry.html\">Wood in Letters</a>",
                ja:"仙人に学ぶ飛騨の名工と弟子：<a href=\"takumi.html\">飛騨の匠</a>、<a href=\"poetry.html\">詩歌と文学のなかの木</a>",
                zh:"向仙人學藝的飛驒名匠與弟子：<a href=\"takumi.html\">飛驒的匠人</a>、<a href=\"poetry.html\">詩文中的木</a>" }
            ],
            [
              { en:"Munafuda (ridge tags)", ja:"棟札", zh:"棟札" },
              { en:"various", ja:"各時代", zh:"各時代" },
              {
                en:"Planks naming date, owner and master carpenter — the main way old buildings are dated and Hida carpenters' names survive: <a href=\"culture.html\">Wood in Ritual &amp; Daily Life</a>",
                ja:"年、施主、棟梁を記した板。古い建物の年代を知り、飛騨の大工の名を今に伝える主な手がかり：<a href=\"culture.html\">儀礼と暮らしの木</a>",
                zh:"記載年份、屋主與棟樑的木板——判定古建築年代、保存飛驒木匠姓名的主要依據：<a href=\"culture.html\">儀禮與日常中的木</a>" }
            ],
            [
              { en:"Shimazaki Tōson, Before the Dawn (Yoake mae)", ja:"島崎藤村『夜明け前』", zh:"島崎藤村《黎明之前》" },
              "1929–1935",
              {
                en:"A Kiso headman's fight over forest rights after the Meiji state took the Kiso forests: <a href=\"poetry.html\">Wood in Letters</a>, <a href=\"woodpeople.html\">People</a>, <a href=\"fivetrees.html\">The Five Trees of Kiso</a>",
                ja:"明治国家が木曽の山を取り上げたあとの、山林の権利をめぐる木曽の庄屋の闘い：<a href=\"poetry.html\">詩歌と文学のなかの木</a>、<a href=\"woodpeople.html\">人物</a>、<a href=\"fivetrees.html\">木曽五木</a>",
                zh:"明治政府收走木曾山林之後，木曾村長為山林權利的抗爭：<a href=\"poetry.html\">詩文中的木</a>、<a href=\"woodpeople.html\">人物</a>、<a href=\"fivetrees.html\">木曾五木</a>" }
            ]
          ] },
        { t:"note",
          label:{ en:"On dates", ja:"年代について", zh:"關於年代" },
          text:{
            en:"The dates of the codes and of the Hida levy come from secondary accounts: the Hida World Life and Culture Centre's history of the Hida takumi, Kotobank and Takayama city. Some details — when the quota fell from a hundred men to sixty, how many were sent in all — differ between them, and the pages give a range or name the source rather than choose.",
            ja:"律令と飛騨の匠の制度の年代は、二次的な記述——飛騨・世界生活文化センターによる飛騨匠の歴史、コトバンク、高山市——に拠る。いくつかの点——定員が百人から六十人に減った時期、送られた人の総数——は資料によって異なり、各頁はどれかを選ぶのでなく、幅を示すか出典を名指している。",
            zh:"律令與飛驒匠人制度的年代，依據二手記述：飛驒世界生活文化中心的飛驒匠人史、Kotobank 與高山市。有些細節——名額何時由一百人減為六十人、總共派出多少人——各資料說法不一，各頁並不擇一，而是給出範圍或註明出處。" } }
      ] },
    { t:"section",
      id:"secondary",
      title:{ en:"Wood: Reference works, media and secondary compilations", ja:"木：参考書・報道・二次的な集計", zh:"木：參考書、媒體與二手彙整" },
      jp:"二次資料",
      body:[
        { t:"p",
          text:{
            en:"Not every number could be read at its source. Some official series are published only as large spreadsheets or are easier to find in a website's tabulation than on the ministry's own pages, and some facts — a festival's date, a company's founding year — are most conveniently stated in an encyclopaedia. These sources were used, and the pages say so in their “Sources” lines. The list below is candid about which figures came second-hand.",
            ja:"すべての数字を出所そのもので読めたわけではない。公的な系列のなかには大きな表計算の形でしか公開されないもの、省庁の頁よりもウェブサイトの集計のほうが見つけやすいものがあり、祭りの日付や会社の創業年のような事柄は百科事典に最も手軽に書かれている。こうした資料も用い、各頁の「出典」の行にそう記した。以下では、どの数字が孫引きであるかを隠さずに挙げる。",
            zh:"並非每個數字都能在原始出處讀到。有些官方序列只以龐大的試算表公開，或在網站的整理中比在部會自己的頁面上更容易找到；而有些事實——祭典的日期、公司的創立年份——在百科全書中寫得最為方便。本書使用了這些資料，各頁的「資料來源」行中皆已註明。以下坦白列出哪些數字屬於轉引。" } },
        { t:"defs",
          items:[
            { term:{ en:"Compilations of official statistics", ja:"公的統計の二次的な集計", zh:"官方統計的二手彙整" },
              jp:"地域の入れ物 · GD Freak · 森林・林業学習館 · GTAIC",
              def:{
                en:"The guitar shipments by prefecture for 2014, 2016, 2019 and 2021, lantern shipments for 2017, urushi by prefecture for 2019 and forestry output by prefecture for 2023 were read from the statistics site <em>Chiiki no Iremono</em> (region-case.com), which tabulates the Census of Manufactures, the Economic Census and the Ministry of Agriculture's surveys (<a href=\"guitarindustry.html\">Japan's Guitar Industry</a>, <a href=\"luthiers.html\">The Luthiers</a>, <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>, <a href=\"industry.html\">Wood in Numbers</a>). The national guitar series from METI's Current Production Survey came through GD Freak; the IPSS projections by municipality through a population site; Japan's guitar imports through GTAIC market reports built on UN Comtrade; and the census series of forestry workers, the age of the planted forest and the 1977 humidity experiment through the forestry education site Shinrin-Ringyō Gakushūkan. Where that site and the Forestry Agency differed — sawn-timber exports in 2025, ¥10.9 billion against ¥10.2 billion — the agency's figure was used.",
                ja:"二〇一四年、二〇一六年、二〇一九年、二〇二一年の都道府県別のギター出荷額、二〇一七年の提灯の出荷額、二〇一九年の都道府県別の漆、二〇二三年の都道府県別林業産出額は、工業統計・経済センサス・農林水産省の調査を整理した統計サイト「地域の入れ物」（region-case.com）から読んだ（<a href=\"guitarindustry.html\">日本のギター産業</a>、<a href=\"luthiers.html\">個人製作家</a>、<a href=\"paper.html\">和紙・提灯・和傘</a>、<a href=\"industry.html\">木の数字</a>）。経済産業省の生産動態統計による全国のギターの系列はGD Freakを、社人研の市町村別の推計は人口のサイトを、日本のギター輸入はUN ComtradeにもとづくGTAICの市場報告を通して読み、国勢調査による林業従事者の系列、人工林の齢級、一九七七年の調湿の実験は、森林・林業の学習サイト「森林・林業学習館」を通して読んだ。このサイトと林野庁の数字が食い違ったとき——二〇二五年の製材の輸出額、109億円と102億円——は林野庁の数字を採った。",
                zh:"2014、2016、2019 與 2021 年各縣的吉他出貨額、2017 年的燈籠出貨額、2019 年各縣的生漆產量，以及 2023 年各縣的林業產出額，皆讀自統計網站「地域の入れ物」（region-case.com），該站整理工業統計、經濟普查與農林水產省的調查（<a href=\"guitarindustry.html\">日本的吉他產業</a>、<a href=\"luthiers.html\">獨立製琴師</a>、<a href=\"paper.html\">和紙、燈籠與和傘</a>、<a href=\"industry.html\">木材的數字</a>）。經濟產業省生產動態統計的全國吉他序列經由 GD Freak 讀取；社人研的市町村別推估經由一個人口網站；日本的吉他進口經由以 UN Comtrade 為基礎的 GTAIC 市場報告；國勢調查的林業從業人數序列、人工林的林齡與 1977 年的調濕實驗，則經由森林林業學習網站「森林・林業學習館」。該站與林野廳的數字不一致時——2025 年製材出口額，109 億日圓對 102 億日圓——採用林野廳的數字。" } },
            { term:{ en:"Encyclopaedias and reference databases", ja:"百科事典とレファレンス", zh:"百科全書與參考資料庫" },
              jp:"ウィキペディア · コトバンク · レファレンス協同データベース",
              def:{
                en:"About fifty encyclopaedia entries appear in the research logs, some forty-one of them from Japanese Wikipedia: crafts and festivals (Hida Shunkei, Ichii Ittōbori, Gifu umbrellas and lanterns, the Takayama and Furukawa festivals), institutions (the Forest Academy, the Wood Craft Art School), companies (Yairi Guitar, Suzuki Violin, Fujigen, Morris, Nissin Mokkō) and terms (<em>kakishibu</em>, <em>yakisugi</em>, mokuiku, shinrin-yoku). English Wikipedia supplied a handful, including the Taipei climate tables and the account of the first Fritz violin study. Kotobank's entry on the Hida takumi and the National Diet Library's reference database, for the customs codes of guitars, complete the group. Encyclopaedia entries were used for dates and descriptions, not for statistics where an official figure existed, and every page that relies on one names it.",
                ja:"調査記録には約五十の百科事典の項目が現れ、そのうちおよそ四十一が日本語版ウィキペディアである。工芸と祭り（飛騨春慶、一位一刀彫、岐阜和傘と岐阜提灯、高山祭と古川祭）、機関（森林文化アカデミー、木工芸術スクール）、会社（ヤイリギター、鈴木バイオリン製造、フジゲン、モーリス楽器製造、日進木工）、用語（柿渋、焼杉、木育、森林浴）などである。英語版ウィキペディアからは、台北の気候の表や、Fritzらの最初のヴァイオリンの研究の説明など数項目を引いた。飛騨工についてのコトバンクの項目と、ギターの関税分類についての国立国会図書館のレファレンス協同データベースがこれに加わる。百科事典は年代と記述のために用い、公的な数字があるところで統計の出所にはしなかった。百科事典に拠った頁は、すべてその名を挙げている。",
                zh:"研究紀錄中約有五十個百科條目，其中約四十一個來自日文維基百科：工藝與祭典（飛驒春慶、一位一刀雕、岐阜和傘與岐阜燈籠、高山祭與古川祭）、機構（森林文化學院、木工藝術學校）、公司（Yairi 吉他、鈴木小提琴製造、Fujigen、Morris、日進木工）與用語（柿澀、燒杉、木育、森林浴）。英文維基百科提供了少數幾項，包括台北的氣候表，以及 Fritz 等人第一項小提琴研究的說明。Kotobank 關於飛驒工的條目，以及日本國立國會圖書館關於吉他關稅分類的參考協作資料庫，也屬此類。百科條目用於年代與描述；凡有官方數字之處，不以其作為統計出處。凡依據百科條目的頁面，皆已註明。" } },
            { term:{ en:"News media and press releases", ja:"報道とプレスリリース", zh:"新聞媒體與新聞稿" },
              jp:"日本経済新聞 · 共同通信 · 中央社 · 工商時報 · PR TIMES · 林政ニュース",
              def:{
                en:"Nikkei and Kyodo for the bear statistics of April 2026 and the Shirakawa-gō parking charge; the forestry trade paper Rinsei News for the draft basic plan of 2026; Taiwan's Central News Agency for domestic timber self-sufficiency (December 2025) and the plum rains, the Commercial Times for a wood-education event in Hualien (December 2024) and Story Studio for the sale of Alishan timber to Japan; PR Times releases for the 2025 Hida furniture festival and the 2026 book on the Kashimo Mokushōjuku; Japan Design Net and colocal for Hida furniture abroad and compressed sugi; MusicRadar and Mongabay for Fender's rosewood change and the Madagascar embargo. A Chūnichi Shimbun article on Takamine's showroom is cited by its headline only.",
                ja:"日本経済新聞と共同通信——二〇二六年四月のクマの統計と白川郷の駐車料金。林業の業界紙「林政ニュース」——二〇二六年の基本計画の案。台湾の中央通信社——国産材の自給率（二〇二五年十二月）と梅雨。工商時報——花蓮での木育の催し（二〇二四年十二月）。故事 StoryStudio——阿里山の木材の日本への販売。PR TIMESのリリース——二〇二五年の飛騨の家具フェスティバルと、二〇二六年の加子母木匠塾の本。ジャパンデザインネットとcolocal——海外の飛騨の家具と圧縮スギ。MusicRadarとMongabay——フェンダーのローズウッドの変更とマダガスカルの禁輸。タカミネのショールームについての中日新聞の記事は、見出しだけを引いた。",
                zh:"日本經濟新聞與共同社——2026 年 4 月的熊害統計與白川鄉停車費；林業業界報「林政ニュース」——2026 年基本計畫草案；台灣中央社——國產材自給率（2025 年 12 月）與梅雨；工商時報——花蓮的木育活動（2024 年 12 月）；故事 StoryStudio——阿里山木材銷往日本；PR TIMES 新聞稿——2025 年飛驒家具節，以及 2026 年關於加子母木匠塾的書；Japan Design Net 與 colocal——海外的飛驒家具與壓縮柳杉；MusicRadar 與 Mongabay——Fender 的玫瑰木變更與馬達加斯加禁運。中日新聞關於 Takamine 展示間的報導，僅引用其標題。" } },
            { term:{ en:"Tourism, museums and specialist websites", ja:"観光・博物館・専門サイト", zh:"觀光、博物館與專業網站" },
              jp:"岐阜の旅ガイド · 飛騨・世界生活文化センター · the-noh.com · The Wood Database",
              def:{
                en:"The Gifu prefectural tourism guide, the Hida Takayama and Hida city tourism offices, the Gujō Hachiman Tourism Association, the Shirakawa-gō world-heritage site and Gero Gasshō-mura give the hours, fees and festival dates on <a href=\"visiting.html\">Visiting Gifu</a> and <a href=\"woodjourneys.html\">Five Journeys</a>, as published in 2026. The Hida World Life and Culture Centre's history of the Hida takumi gives the estimate of how many men were sent. A small number of specialist websites and blogs were used where nothing better was found, and are named where used: an article on early Japanese guitar makers (<a href=\"luthiers.html\">The Luthiers</a>), a guitar-brand database for Kiso Suzuki, the Wood Database's explanation of the 2016 CITES listings, a visitor's report from the Finn Juhl House in Takayama (2024), the-noh.com on the Noh stage, and a train-guide site for the limited express Hida.",
                ja:"岐阜県の観光サイト「岐阜の旅ガイド」、飛騨高山と飛騨市の観光協会、郡上八幡観光協会、白川郷の世界遺産のサイト、下呂温泉合掌村は、<a href=\"visiting.html\">岐阜を訪ねる</a>と<a href=\"woodjourneys.html\">五つの旅</a>の開館時間、料金、祭りの日を、二〇二六年に公開された形で与える。飛騨・世界生活文化センターの飛騨匠の歴史は、送られた人数の推計を与える。ほかによい資料が見つからなかったところでは、少数の専門サイトとブログを使い、使った箇所でその名を挙げた。初期の日本のギター製作家についての記事（<a href=\"luthiers.html\">個人製作家</a>）、木曽鈴木についてのギターのブランドのデータベース、二〇一六年のワシントン条約の掲載についてのThe Wood Databaseの解説、高山のフィン・ユールの家の訪問記（二〇二四年）、能舞台についてのthe-noh.com、特急ひだについての列車案内のサイトである。",
                zh:"岐阜縣觀光網站「岐阜の旅ガイド」、飛驒高山與飛驒市的觀光協會、郡上八幡觀光協會、白川鄉世界遺產網站與下呂溫泉合掌村，提供<a href=\"visiting.html\">造訪岐阜</a>與<a href=\"woodjourneys.html\">五段旅程</a>中依 2026 年公布的開放時間、票價與祭典日期。飛驒世界生活文化中心的飛驒匠人史提供了派出人數的推估。在找不到更好資料之處，使用了少數專業網站與部落格，並在使用處註明：一篇關於早期日本吉他製作者的文章（<a href=\"luthiers.html\">獨立製琴師</a>）、一個關於木曾鈴木的吉他品牌資料庫、The Wood Database 對 2016 年華盛頓公約列名的說明、一篇高山芬尤爾之家的參訪記（2024 年）、關於能舞台的 the-noh.com，以及一個介紹特急飛驒號的列車資訊網站。" } }
          ] }
      ] },
    { t:"section",
      id:"caveats",
      title:{ en:"Limitations and disagreements", ja:"資料の限界と食い違い", zh:"資料的局限與分歧" },
      jp:"注意",
      body:[
        { t:"ul",
          items:[
            {
              en:"<strong>Statistical definitions change.</strong> The Census of Manufactures, on which the prefectural guitar figures rest, counted establishments with four or more employees; it was replaced by the Economic Census for Business Activity in 2021 and then by the Economic Structure Survey, so the series of 2014–2024 joins three surveys. Prefectural values are withheld where too few firms report — Gifu's guitar figure for 2014 was not disclosed. The value per guitar on <a href=\"luthiers.html\">The Luthiers</a> is our own division of value by units.",
              ja:"<strong>統計の定義は変わる。</strong>県別のギターの数字の土台である工業統計は、従業者四人以上の事業所を対象としていた。それは二〇二一年に経済センサス‐活動調査に、さらに経済構造実態調査に引き継がれたので、二〇一四〜二〇二四年の系列は三つの調査をつないでいる。報告する事業所が少なすぎる県の値は秘匿される——二〇一四年の岐阜のギターの数字は公表されなかった。<a href=\"luthiers.html\">個人製作家</a>のギター一本あたりの金額は、出荷額を本数で割った本書の計算である。",
              zh:"<strong>統計定義會變動。</strong>各縣吉他數字所依據的工業統計，調查對象是員工四人以上的事業所；它在 2021 年由經濟普查活動調查取代，其後又由經濟構造實態調查接續，因此 2014～2024 年的序列串接了三種調查。申報事業所過少的縣，其數值會被保密——岐阜 2014 年的吉他數字即未公開。<a href=\"luthiers.html\">獨立製琴師</a>中每把吉他的金額，是本書以出貨額除以數量所得。" },
            {
              en:"<strong>Years differ between pages.</strong> Each page uses the latest figure it could verify, so the same quantity can appear for different years: Gifu's forest technicians are 916 in FY2021 on one page and about 940 in 2023 on another; the forest area is 862,000 ha in the FY2020 plan data and 861,000 ha in a 2025 report. Fiscal and calendar years are mixed in the sources and labelled as such where it matters.",
              ja:"<strong>頁によって年が異なる。</strong>各頁は確かめえた最新の数字を用いたので、同じ量が異なる年で現れることがある。岐阜の林業技術者は、ある頁では二〇二一年度の916人、別の頁では二〇二三年の約940人である。森林面積は二〇二〇年度の計画資料で86.2万ha、二〇二五年の報告で86.1万haである。資料には年度と暦年が混じっており、それが効くところではどちらかを明記した。",
              zh:"<strong>各頁的年份不同。</strong>每頁採用其所能查證的最新數字，因此同一個量可能以不同年份出現：岐阜的林業技術人員在某頁是 2021 年度的 916 人，在另一頁是 2023 年的約 940 人；森林面積在 2020 年度的計畫資料中為 86.2 萬公頃，在 2025 年的報告中為 86.1 萬公頃。資料中年度與曆年混用，凡有影響之處皆已標明。" },
            {
              en:"<strong>Company claims are company claims.</strong> A maker's “first”, “largest” or “world's only” — an industry-first modular preamp, the first Japanese electric guitar, Japan's first folk guitar — is reported as the company's statement, not as established fact. Founding dates and model histories from company pages are generally reliable; market shares and superlatives are not checked unless a second source exists.",
              ja:"<strong>会社の主張は会社の主張である。</strong>作り手のいう「初」「最大」「世界で唯一」——業界初のモジュール式プリアンプ、日本初のエレキギター、日本初のフォークギター——は、確立した事実としてではなく、会社の言明として記した。会社の頁による創業年や型の来歴はおおむね信頼できるが、シェアや最上級の表現は、第二の資料がない限り確かめていない。",
              zh:"<strong>公司的說法就是公司的說法。</strong>製造商所說的「首創」、「最大」或「全球唯一」——業界首創的模組化前級、日本第一把電吉他、日本第一把民謠吉他——皆以公司聲明的形式記述，而非既定事實。公司頁面上的創立年份與型號沿革大致可靠；市占率與最高級的說法，除非有第二份資料，否則未經查證。" },
            {
              en:"<strong>Some sources disagree, and the pages say so.</strong> Kiso Suzuki collapsed in 1985 by one account and stopped trading in 1987 by another, so the book says “the mid-1980s”. Kitani's own page presents its licensed production of Finn Juhl's No. 53 chair as current, while a 2024 visitor's report says the licence ended after the death of Juhl's widow. Suzuki Violin dates its first violin to 1887, Japanese Wikipedia to 1888. Hida Shunkei is traditionally dated to 1606, one Takayama workshop to 1607. Hida Sangyō's sugi research cooperative dates from 2003 in a magazine report and 2004 in the company history. Fujigen's peak output is about 14,000 guitars a month in a prefectural interview and 500 a day elsewhere. The peak number of papermaking households around Mino is about 3,700 in one account and about 5,000 in Mino city's. Motosu city describes itself as certified as a forest-therapy base in 2015, but the certifying society's current list shows no site in Gifu.",
              ja:"<strong>資料が食い違うことがあり、各頁はそれを記した。</strong>木曽鈴木は、ある記述では一九八五年に倒産し、別の記述では一九八七年に営業を止めたので、本書は「一九八〇年代半ば」とした。キタニ自身の頁はフィン・ユールのNo.53の椅子のライセンス生産を現在のこととして示すが、二〇二四年の訪問記は、ユールの未亡人の死後にライセンスは終わったと記す。鈴木バイオリン製造は最初のヴァイオリンを一八八七年とし、日本語版ウィキペディアは一八八八年とする。飛騨春慶は伝承では一六〇六年、高山のある店では一六〇七年である。飛騨産業のスギの研究組合は、雑誌の記事では二〇〇三年、社史では二〇〇四年である。フジゲンの最盛期の生産は、県のインタビューでは月に約一万四千本、別の資料では一日五百本である。美濃の紙漉きの戸数の最盛期は、ある記述では約三千七百戸、美濃市の記述では約五千戸である。本巣市は二〇一五年に森林セラピー基地に認定されたとするが、認定する団体の現在の一覧には岐阜の地点がない。",
              zh:"<strong>有些資料彼此矛盾，各頁皆已註明。</strong>木曾鈴木依一種說法於 1985 年倒閉，依另一種說法於 1987 年停業，因此本書寫作「1980 年代中期」。Kitani 自己的頁面把芬尤爾 No.53 椅的授權生產呈現為現行之事，而一篇 2024 年的參訪記則說，在芬尤爾遺孀過世後授權已經結束。鈴木小提琴製造把第一把小提琴定在 1887 年，日文維基百科則為 1888 年。飛驒春慶依傳統說法始於 1606 年，高山一家店舖則說 1607 年。飛驒產業的柳杉研究合作社，雜誌報導為 2003 年，公司沿革為 2004 年。Fujigen 的生產高峰，在縣府訪談中約為每月一萬四千把，在別處則為每天五百把。美濃造紙戶數的高峰，一說約三千七百戶，美濃市的說法約五千戶。本巢市自稱於 2015 年獲認定為森林療法基地，但認證團體目前的名單上並無岐阜的地點。" },
            {
              en:"<strong>Some figures are rounded or approximate in the source.</strong> The forestry new-entrant numbers before and after the Green Employment programme are about 2,000 and 3,200 a year in the Forestry Agency's account and about 2,200 and 3,300 on the programme's own site; the peak output of Gifu umbrellas around 1950 is given as anywhere from 12 to 16 million a year. The pages give the range rather than pick one.",
              ja:"<strong>出所の段階で丸められた、あるいは概数の数字がある。</strong>緑の雇用の前と後の林業の新規就業者数は、林野庁の説明では年に約二千人と約三千二百人、事業自身のサイトでは約二千二百人と約三千三百人である。一九五〇年ごろの岐阜和傘の生産の最盛期は、年に千二百万本から千六百万本までの幅で語られる。各頁はどれかを選ばず、幅を示した。",
              zh:"<strong>有些數字在出處即已四捨五入或為概數。</strong>「綠色僱用」計畫前後的林業新進人員，林野廳的說法約為每年二千人與三千二百人，計畫本身的網站則約為二千二百人與三千三百人；1950 年前後岐阜和傘的生產高峰，說法從每年一千二百萬支到一千六百萬支不等。各頁不擇一，而是給出範圍。" },
            {
              en:"<strong>Some sources are known only at second hand.</strong> The Kyoto humidity experiment of 1977, the floor-temperature study of 1967, Kohara Jirō's studies of old hinoki, Okazaki and Ōkuma's house carbon accounts and the earlier national surveys of pollen allergy (1998 and 2008) are cited as summarised by others. A few web pages could be identified by title but not read — Kashiwa's repair pages, a prefectural award page, a newspaper article, bus timetables — and the pages hedge accordingly.",
              ja:"<strong>二次的にしか知らない資料がある。</strong>一九七七年の京都の調湿の実験、一九六七年の床の温度の研究、小原二郎による古いヒノキの研究、岡崎・大熊による住宅の炭素の収支、花粉症についての以前の全国調査（一九九八年と二〇〇八年）は、ほかの人の要約として引いた。題名はわかっても読めなかったウェブの頁もいくつかある——柏木工の修理の頁、県の表彰の頁、新聞記事、バスの時刻表——。各頁はそれに応じて断定を避けた。",
              zh:"<strong>有些資料僅屬間接得知。</strong>1977 年京都的調濕實驗、1967 年的地板溫度研究、小原二郎對老扁柏的研究、岡崎與大熊的住宅碳收支，以及較早的花粉症全國調查（1998 年與 2008 年），皆依他人的摘要引用。另有幾個網頁只能確認標題而無法閱讀——柏木工的修理頁面、一個縣府表揚頁面、一篇報紙報導、公車時刻表——各頁據此採取保留的說法。" },
            {
              en:"<strong>Wikipedia and blogs were used only where marked.</strong> They supply dates and descriptions, the Taipei climate tables and a few company histories; they are named in the Sources line wherever they were used, and no statistic rests on them when an official figure was available.",
              ja:"<strong>ウィキペディアとブログは、明記したところでのみ使った。</strong>それらは年代と記述、台北の気候の表、いくつかの会社の沿革を与える。使ったところでは必ず「出典」の行に名を挙げ、公的な数字があるところで統計をそれらに拠らせることはしなかった。",
              zh:"<strong>維基百科與部落格僅在註明之處使用。</strong>它們提供年代與描述、台北的氣候表，以及少數公司的沿革；凡使用之處，皆在「資料來源」行中註明；凡有官方數字之處，統計皆不以其為依據。" },
            {
              en:"<strong>Things change.</strong> Opening hours, fees, flight schedules, festival dates, prices and the CITES Appendices are given as published in 2026 and will move. Calculations by the editors — indoor humidity from outdoor normals, shrinkage of a guitar top, values per guitar, shares — are marked as ours on the pages where they appear.",
              ja:"<strong>物事は変わる。</strong>開館時間、料金、航空便の時刻、祭りの日、価格、ワシントン条約の附属書は、二〇二六年に公開された形で記しており、いずれ動く。編者による計算——屋外の平年値から求めた室内の湿度、ギターの表板の収縮、ギター一本あたりの金額、割合——は、それが現れる頁で本書の計算と断ってある。",
              zh:"<strong>事物會改變。</strong>開放時間、票價、航班時刻、祭典日期、價格與華盛頓公約附錄，皆依 2026 年公布的內容記載，日後必有變動。編者自行計算之處——由戶外平年值推算的室內濕度、吉他面板的收縮、每把吉他的金額、比例——在各頁出現之處皆註明為本書的計算。" }
          ] }
      ] },
    { t:"section",
      id:"reading",
      title:{ en:"Further reading", ja:"さらに読むために", zh:"延伸閱讀" },
      jp:"読書案内",
      body:[
        { t:"p",
          text:{
            en:"Only works that appear in the book or in its research logs are listed. Most of the Japanese books are in print or easy to find second-hand; most of the official documents are free online.",
            ja:"本書または調査記録に現れる著作だけを挙げる。日本語の本の多くは刊行中か、古書で容易に見つかる。公的な文書の多くはオンラインで無料で読める。",
            zh:"僅列出本書或研究紀錄中出現過的著作。日文書籍多數仍在發行或容易在二手市場找到；官方文件多數可在網路上免費閱讀。" } },
        { t:"defs",
          items:[
            { term:{ en:"In English", ja:"英語で", zh:"英文" },
              jp:"English",
              def:{
                en:"Seike Kiyosi, <em>The Art of Japanese Joinery</em> (1977), and Odate Toshio, <em>Japanese Woodworking Tools</em> (1984) — the two books that introduced Japanese joinery and tools to Western woodworkers. The US Forest Products Laboratory's <em>Wood Handbook</em> (1999), free and still the standard reference on moisture and strength. Shimazaki Tōson's <em>Before the Dawn</em>, which has been translated into English. For the science: Park et al. (2010) on forest bathing, Carcagno et al. (2018) and Fritz et al. (2012) on what listeners hear, and, behind the acoustic formulas on <a href=\"sound.html\">Wood &amp; Sound</a>, Wegst's “Wood for sound” (<em>American Journal of Botany</em>, 2006) and Bucur's <em>Acoustics of Wood</em>. For the law, the text of CITES and its current Appendices.",
                ja:"清家清『The Art of Japanese Joinery』（一九七七年）とOdate Toshio『Japanese Woodworking Tools』（一九八四年）——日本の継手と道具を西洋の木工家に紹介した二冊。米国林産物研究所の『Wood Handbook』（一九九九年）——無料で、いまも含水率と強度の標準的な参考書である。島崎藤村『夜明け前』——英訳がある。科学については、森林浴についてのParkら（二〇一〇年）、聴き手に何が聞こえるかについてのCarcagnoら（二〇一八年）とFritzら（二〇一二年）。<a href=\"sound.html\">木と音</a>の音響の式の背景として、Wegstの「Wood for sound」（『American Journal of Botany』二〇〇六年）とBucurの『Acoustics of Wood』。法については、ワシントン条約の本文と現行の附属書。",
                zh:"清家清《The Art of Japanese Joinery》（1977）與 Odate Toshio《Japanese Woodworking Tools》（1984）——把日本榫接與工具介紹給西方木工的兩本書。美國林產品研究所的《Wood Handbook》（1999）——免費，至今仍是含水率與強度的標準參考。島崎藤村《黎明之前》——已有英譯本。科學方面：Park 等人（2010）關於森林浴，Carcagno 等人（2018）與 Fritz 等人（2012）關於聽者聽到了什麼；以及作為<a href=\"sound.html\">木與聲音</a>中聲學公式背景的 Wegst〈Wood for sound〉（《American Journal of Botany》，2006）與 Bucur《Acoustics of Wood》。法規方面：華盛頓公約本文及現行附錄。" } },
            { term:{ en:"In Japanese", ja:"日本語で", zh:"日文" },
              jp:"日本語",
              def:{
                en:"Nishioka Tsunekazu, <em>Ki ni manabe</em> (1988), and Nishioka with Kohara Jirō, <em>Hōryūji o sasaeta ki</em> (NHK Books, 1978) — the temple carpenter and the wood scientist on hinoki. Kōda Aya, <em>Ki</em> (1992). Hayakawa Kennosuke's four books from Shinchōsha (1993–2005), on a woodworker's life in Tsukechi. The illustrated <em>Hida no takumi monogatari</em> (1808) and Tōson's <em>Yoake mae</em> (1929–1935). <em>Kashimo Mokushōjuku</em> (Kenchiku Shiryō Kenkyūsha, 2026), on thirty years of the summer building school. For data, the Forestry Agency's annual report, published online chapter by chapter, and the <em>Wood Industry Handbook</em>.",
                ja:"西岡常一『木に学べ』（一九八八年）と、西岡常一・小原二郎『法隆寺を支えた木』（NHKブックス、一九七八年）——宮大工と木材学者がヒノキを語る。幸田文『木』（一九九二年）。付知での木工の暮らしを描いた早川謙之輔の新潮社の四冊（一九九三〜二〇〇五年）。挿絵入りの『飛騨匠物語』（一八〇八年）と藤村『夜明け前』（一九二九〜一九三五年）。夏の建築の学び場の三十年をまとめた『加子母木匠塾——30年続く木と建築の学び場』（建築資料研究社、二〇二六年）。数字については、章ごとにオンラインで公開される『森林・林業白書』と『木材工業ハンドブック』。",
                zh:"西岡常一《木に学べ》（1988）以及西岡常一與小原二郎合著的《法隆寺を支えた木》（NHK Books，1978）——宮大工與木材學者談扁柏。幸田文《木》（1992）。早川謙之輔由新潮社出版、描寫付知木工生活的四本書（1993～2005）。附插畫的《飛驒匠物語》（1808）與藤村的《夜明け前》（1929～1935）。整理夏季建築學堂三十年的《加子母木匠塾——30年続く木と建築の学び場》（建築資料研究社，2026）。數據方面：逐章在網路上公開的《森林・林業白書》，以及《木材工業手冊》。" } },
            { term:{ en:"In Chinese", ja:"中国語で", zh:"中文" },
              jp:"中文",
              def:{
                en:"Story Studio's article on whether Alishan timber really went to build shrines in Japan, the best short account of how much of it did. The Legislative Yuan Budget Center's evaluations of the Ministry of Agriculture budget, for Taiwan's timber statistics. The histories published by the Forestry and Nature Conservation Agency's Alishan Forest Railway and Cultural Heritage Office. Central News Agency's reporting on domestic timber (December 2025). The agency's forest-recreation site, for wood-education courses in Taiwan.",
                ja:"阿里山の木材は本当にみな日本の神社を建てに行ったのかを問う故事 StoryStudioの記事——実際にどれほど行ったのかを知る最良の短い説明である。台湾の木材の統計については、農業部の予算についての立法院予算中心の評価報告。林業及自然保育署の阿里山林業鉄路及文化資産管理処が公開する歴史。国産材についての中央通信社の報道（二〇二五年十二月）。台湾の木育の講座については、同署の森林レクリエーションのサイト。",
                zh:"故事 StoryStudio〈阿里山木材真的都運去日本建神社了嗎？〉——關於究竟有多少運去日本，最好的短篇說明。立法院預算中心對農業部預算的評估報告——台灣木材統計的來源。林業及自然保育署阿里山林業鐵路及文化資產管理處公開的歷史。中央社關於國產材的報導（2025 年 12 月）。該署的台灣山林悠遊網——台灣的木育課程。" } }
          ] }
      ] },
    { t:"section", id:"method",
      title:{ en:"How this edition was researched", ja:"この版の調べ方", zh:"本版的研究方法" }, jp:"留保",
      body:[
        { t:"ul", items:[
          { en:"<strong>From public sources, in September 2026.</strong> The research was done by searching and reading the public web pages and documents of the bodies listed above. About two hundred searches were made; the sources listed are those relied on.",
            ja:"<strong>公開資料から、2026年9月に。</strong>調査は上に挙げた機関の公開のウェブページと文書を検索し読むことで行った。検索はおよそ二百回に及び、ここに挙げたのは依拠した資料である。",
            zh:"<strong>依據公開資料，於 2026 年 9 月進行。</strong>研究方式是搜尋並閱讀上列各機構公開的網頁與文件。共進行約兩百次搜尋；此處列出的是實際採用的資料。" },
          { en:"<strong>Unevenly.</strong> The land, history, culture and wood chapters rest most directly on the primary sources above. For parts of the metal, craft, sake and reference chapters fewer primary documents could be consulted in this edition, and the text relies more on established reference knowledge; there it is written cautiously, and its founding years and figures should be checked against the makers' and institutions' own publications before being quoted.",
            ja:"<strong>濃淡がある。</strong>風土、歴史、文化、木の章は、上の一次資料に最も直接に拠っている。金属、工芸、酒、資料の章の一部では、この版で参照できた一次文書が少なく、定まった参考知識に頼るところが多い。そこでは控えめに書いており、創業年や数字を引くときは、作り手や機関自身の刊行物で確かめてほしい。",
            zh:"<strong>程度不一。</strong>風土、歷史、文化與木的篇章，最直接地依據上列一手資料。金屬、工藝、酒與資料各篇的部分內容，本版可查閱的一手文件較少，較多仰賴既有的參考知識；那些地方寫得較為審慎，引用其中的創業年份與數字前，請先以製作者與機構自身的出版品查證。" },
          { en:"<strong>Figures are as at the latest published data.</strong> Population and industry figures are for 2020–2025 as stated; forest figures for 2019–2022. All of them move.",
            ja:"<strong>数字はそれぞれ、公表時点で最も新しいものである。</strong>人口と産業の数字は記した2020〜2025年のもの、森林の数字は2019〜2022年のもの。いずれも動く。",
            zh:"<strong>數字依最新公布資料。</strong>人口與產業數字為所註明的 2020–2025 年，森林數字為 2019–2022 年。這些都會變動。" },
          { en:"<strong>The lists are selections.</strong> The breweries, makers and museums in the directories were chosen to show how varied they are; leaving a name out says nothing about it.",
            ja:"<strong>一覧は抜き出したものである。</strong>名鑑の蔵、作り手、博物館は、その多様さを示すために選んだ。名を載せていないことは、何も意味しない。",
            zh:"<strong>清單是選錄。</strong>名鑑中的酒藏、製作者與博物館，是為了呈現其多樣而挑選；沒有列入，並不表示任何評價。" },
          { en:"<strong>Japanese is written in Hepburn romanisation</strong>, with macrons on long vowels — Ōgaki, Tōnō — unless a company or brand spells its name its own way.",
            ja:"<strong>日本語のローマ字表記はヘボン式</strong>とし、長音には長音記号を付けた（Ōgaki、Tōnō）。会社や銘柄が独自の綴りを用いる場合はそれに従う。",
            zh:"<strong>日文以黑本式羅馬字書寫</strong>，長音加上長音符號（如 Ōgaki、Tōnō）；公司或品牌若有自己的拼法則從之。" }
        ] }
      ]
    },
    { t:"section",
      id:"wood-method",
      title:{ en:"How the wood chapters were made", ja:"木の部はどう作られたか", zh:"木之部分是如何編成的" },
      jp:"方法",
      body:[
        { t:"p",
          text:{
            en:"The book was researched and written in the autumn of 2026 by several writers working in parallel from a shared file of notes. Each writer kept a research log: every fact used, with the title and web address of its source, its year and unit, and a mark where it was hedged or calculated. This page is compiled from those logs — the shared notes and twelve research logs — and from the “Sources” lines printed under the data on each page. No new research was done for it.",
            ja:"本書は、二〇二六年の秋に、共有の覚え書きをもとに並行して作業する複数の書き手によって調べられ、書かれた。書き手はそれぞれ調査記録をつけた。用いた事実ごとに、出所の題名とウェブアドレス、年と単位を記し、断定を避けたところや計算したところには印をつけた。この頁は、それらの記録——共有の覚え書きと十二の調査記録——と、各頁のデータの下に印刷された「出典」の行から編んだ。この頁のために新たな調査はしていない。",
            zh:"本書於 2026 年秋天，由數位依據共同筆記並行工作的作者研究與撰寫。每位作者都保留一份研究紀錄：所用的每項事實，連同出處的標題與網址、年份與單位，並在採保留說法或自行計算之處加註。本頁即依據這些紀錄——共同筆記與十二份研究紀錄——以及各頁數據下方印出的「資料來源」行編成，並未為本頁另作新的研究。" } },
        { t:"defs",
          items:[
            { term:{ en:"Three languages written together", ja:"三つの言語を同時に書く", zh:"三種語言同時寫成" },
              def:{
                en:"English, Japanese and Chinese were written side by side, not translated one from another, from the same facts. A figure that is wrong here is therefore wrong in the same way in all three, and a correction made once is made everywhere.",
                ja:"英語、日本語、中国語は、一方から他方へ訳したのではなく、同じ事実から並べて書いた。だからここで誤っている数字は、三つの言語すべてで同じように誤っており、一度の訂正がすべてに及ぶ。",
                zh:"英文、日文與中文並非彼此翻譯，而是依據同樣的事實並排寫成。因此本書若有數字錯誤，在三種語言中會以相同的方式錯誤；一次更正，處處更正。" } },
            { term:{ en:"Checked by machine", ja:"機械による点検", zh:"以程式檢查" },
              def:{
                en:"Every page was run through a checker before it was accepted. It confirms that every year mentioned in two languages also appears in the third; that the Japanese uses Japanese character forms and the Chinese Traditional characters and Taiwan usage, with British spelling in the English; that no language is much shorter than the others; and that every figure renders in all three languages without overlapping or clipped labels.",
                ja:"どの頁も、採用の前に点検の仕組みに通した。二つの言語に出てくる年がすべて三つめにもあること。日本語は日本の字体、中国語は繁体字と台湾の用法、英語は英国式の綴りであること。どの言語もほかより大きく短くないこと。どの図も三つの言語で、文字が重なったり切れたりせずに描かれること。これらを確かめる。",
                zh:"每一頁在採用前都經過檢查程式。它確認：在兩種語言中出現的年份，也都出現在第三種語言；日文使用日本字形，中文使用正體字與台灣用法，英文採英式拼寫；沒有任何一種語言明顯短於其他；每張圖在三種語言中都能繪出，標籤不重疊、不被截斷。" } },
            { term:{ en:"Figures from the same numbers", ja:"図は本文と同じ数字から", zh:"圖表與內文同一組數字" },
              def:{
                en:"Every data figure is drawn from the numbers in the text beside it and names its source and year in the caption; schematic and qualitative figures say that they are. <a href=\"figures.html\">Every Diagram</a> lists them all.",
                ja:"データの図はすべて、傍らの本文と同じ数字から描き、説明文に出典と年を記した。模式的・定性的な図はそう断ってある。すべての図は<a href=\"figures.html\">図版一覧</a>にある。",
                zh:"每張數據圖都取自旁邊內文的數字，並在圖說中註明出處與年份；示意圖與定性圖則會說明其性質。所有圖表列於<a href=\"figures.html\">圖表總覽</a>。" } },
            { term:{ en:"Hedges and our own sums", ja:"留保と本書の計算", zh:"保留說法與本書的計算" },
              def:{
                en:"Where a fact could not be confirmed from a good source it was hedged — “reportedly”, “about”, “by one account” — or left out; the logs record several things deliberately omitted, such as the number of Ittōbori carvers working today, for which no reliable count was found. Where the editors calculated something, the page says so.",
                ja:"よい資料で確かめられなかった事実は、「とされる」「約」「ある記述では」と留保をつけるか、省いた。記録には、意図して省いたものもいくつか残っている。たとえば現在の一位一刀彫の彫師の数は、信頼できる数が見つからなかった。編者が計算したところは、頁にそう記した。",
                zh:"凡無法從可靠資料確認的事實，皆加上保留說法——「據稱」、「約」、「依一種說法」——或乾脆省略；紀錄中也留下數項刻意省略的內容，例如目前一位一刀雕的雕刻師人數，因找不到可靠的統計。凡編者自行計算之處，頁面皆已註明。" } }
          ] }
      ] },
    { t:"section",
      id:"verify",
      title:{ en:"How to check anything yourself", ja:"自分で確かめるには", zh:"如何自行查證" },
      jp:"検証の手引き",
      body:[
        { t:"figure",
          caption:{
            en:"The 446 distinct sources recorded in the research logs, by type. Counted by the editors for this page from the shared notes and the twelve research logs: a source is one web page, document or encyclopaedia article, so a ministry cited for twenty documents counts twenty times, and sources named only in the pages' “Sources” lines are not counted. The classification is ours, and a few could go either way. Companies lead because each maker's history, products and care pages count separately; the Forestry Agency alone accounts for about 26 of the 61 national-government documents, Gifu Prefecture for about 21 of the 42 local ones.",
            ja:"調査記録に挙がる446の出典の種類別の数。この頁のために、編者が共有の覚え書きと十二の調査記録から数えた。一つのウェブの頁、文書、百科事典の項目を一つと数えたので、二十の文書を引いた省庁は二十と数え、各頁の「出典」の行にのみ名の出る資料は数えていない。分類は本書によるもので、どちらとも言えるものがいくつかある。企業が最も多いのは、作り手ごとの沿革、製品、手入れの頁を別々に数えたからである。国の官公庁の61点のうち約26点が林野庁、地方自治体の42点のうち約21点が岐阜県である。",
            zh:"研究紀錄中 446 個不同出處的類別分布。由編者為本頁從共同筆記與十二份研究紀錄清點而得：一個網頁、一份文件或一個百科條目算作一個出處，因此被引用二十份文件的部會算作二十個；僅在各頁「資料來源」行中出現的資料不計。分類由本書所定，少數幾項可歸入兩類。企業居首，是因為每家製造商的沿革、產品與保養頁面分別計算；中央政府的 61 份中約 26 份出自林野廳，地方政府的 42 份中約 21 份出自岐阜縣。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Sources in the research logs, by type", ja:"調査記録の出典の種類", zh:"研究紀錄中的出處類別" },
            labelW:330, rowH:30, unit:{ en:"sources", ja:"点", zh:"個" },
            items:[
              { n:{ en:"Companies, shops and transport operators", ja:"企業・商店・交通事業者", zh:"企業、商店與交通業者" }, v:100, f:"#EADCC1" },
              { n:{ en:"Associations, cooperatives, tourism bodies", ja:"団体・組合・観光協会", zh:"團體、合作社與觀光協會" }, v:62, f:"#E7DFD2" },
              { n:{ en:"Japanese national government", ja:"国の官公庁", zh:"日本中央政府" }, v:61, f:"#E0E6DB" },
              { n:{ en:"Encyclopaedias and reference databases", ja:"百科事典とレファレンス", zh:"百科全書與參考資料庫" }, v:50, f:"#E6E4E0" },
              { n:{ en:"Universities, schools, research institutes", ja:"大学・学校・研究機関", zh:"大學、學校與研究機構" }, v:44, f:"#E0E7E9" },
              { n:{ en:"Prefectures and municipalities", ja:"都道府県と市町村", zh:"都道府縣與市町村" }, v:42, f:"#E0E6DB" },
              { n:{ en:"Statistics compilations, blogs, other sites", ja:"統計の集計サイト・ブログ・その他", zh:"統計彙整網站、部落格與其他" }, v:39, f:"#EEE1DF" },
              { n:{ en:"News media and press releases", ja:"報道とプレスリリース", zh:"新聞媒體與新聞稿" }, v:34, f:"#E6E2EC" },
              { n:{ en:"Taiwan, foreign and international bodies", ja:"台湾・外国・国際機関", zh:"台灣、外國與國際機構" }, v:14, f:"#E9ECEE" }
            ],
            note:{ en:"Counted by the editors from the research logs, October 2026. Total 446.", ja:"編者が調査記録から数えた（二〇二六年十月）。合計446。", zh:"編者依研究紀錄清點（2026 年 10 月）。合計 446。" }
          }); } },
        { t:"p",
          text:{
            en:"This book has no institutional standing and should be treated like any secondary source: useful for finding your way, not an authority for a decision. Every figure in it can be traced. These steps, in this order, will take you from a number on a page to the document behind it.",
            ja:"本書はいかなる機関の後ろ盾も持たず、ほかの二次資料と同じように扱われるべきである。道を探すには役に立つが、判断の典拠にはならない。本書のどの数字もたどることができる。以下の手順を順に踏めば、頁の上の数字から、その背後の文書にたどり着ける。",
            zh:"本書沒有任何機構背書，應以對待任何二手資料的方式看待：用來找路很有用，但不足以作為決策的權威依據。書中每個數字都可以追溯。依序按照以下步驟，就能從頁面上的一個數字，找到它背後的文件。" } },
        { t:"ol",
          items:[
            {
              en:"<strong>Note the year, the unit and the publisher.</strong> Every figure carries a year and a unit, and the “Sources” line under it names the body that published it. Without the year a number cannot be checked; fiscal years (April to March) and calendar years differ.",
              ja:"<strong>年、単位、発行者を書きとめる。</strong>どの数字にも年と単位がつき、その下の「出典」の行が発行した機関を示す。年がなければ数字は確かめようがない。四月から三月までの年度と暦年は異なる。",
              zh:"<strong>記下年份、單位與發行者。</strong>每個數字都附有年份與單位，其下的「資料來源」行註明了發行機構。沒有年份的數字無從查證；年度（4 月至翌年 3 月）與曆年並不相同。" },
            {
              en:"<strong>For national statistics, start at e-Stat</strong> (e-stat.go.jp), the government's statistics portal, and search by the Japanese name of the survey — 経済構造実態調査, 住宅着工統計, 国勢調査, 特用林産物生産統計調査. The Forestry Agency publishes its supply-and-demand table, prices and export figures on its own statistics pages at rinya.maff.go.jp.",
              ja:"<strong>国の統計は、政府統計の総合窓口e-Stat（e-stat.go.jp）から始める。</strong>調査の日本語の名称——経済構造実態調査、住宅着工統計、国勢調査、特用林産物生産統計調査——で探す。林野庁は木材需給表、価格、輸出の数字を、rinya.maff.go.jpの統計の頁で公開している。",
              zh:"<strong>國家統計，從政府統計入口網站 e-Stat（e-stat.go.jp）著手</strong>，以調查的日文名稱搜尋——経済構造実態調査、住宅着工統計、特用林産物生産統計調査，以及國勢調查（人口普查）。林野廳則在其網站 rinya.maff.go.jp 的統計頁面公布木材供需表、價格與出口數字。" },
            {
              en:"<strong>For the forestry annual report, go to the edition by year.</strong> Each edition of the Forestry Agency's white paper is online chapter by chapter. The pages name the edition used; because each edition reports the latest year available when it was written, the same quantity changes from one edition to the next.",
              ja:"<strong>森林・林業白書は、年度の版から探す。</strong>林野庁の白書は版ごとに章単位でオンラインにある。各頁は使った版を記している。どの版もその時点で得られる最新の年を報じるので、同じ量でも版ごとに値が変わる。",
              zh:"<strong>林業白皮書，依年度版本查找。</strong>林野廳白皮書的每一版都逐章公開於網路。各頁註明了所用的版本；由於每一版都報導撰寫當時可得的最新年份，同一個量在不同版本中會有不同數值。" },
            {
              en:"<strong>For Gifu, search the prefecture's site by the Japanese title</strong> given on this page — 「岐阜県の林業・木材産業の現状」, the forest plan, the certified-timber scheme. Many prefectural figures sit in PDF attachments to council and committee pages, and the latest edition replaces the old one.",
              ja:"<strong>岐阜県については、この頁に挙げた日本語の題名で県のサイト（pref.gifu.lg.jp）を探す。</strong>「岐阜県の林業・木材産業の現状」、森林づくりの基本計画、ぎふ証明材の制度などである。県の数字の多くは会議や委員会の頁に添付されたPDFにあり、新しい版が古い版に置き換わる。",
              zh:"<strong>岐阜縣的資料，以本頁所列的日文標題在縣府網站（pref.gifu.lg.jp）搜尋</strong>——〈岐阜県の林業・木材産業の現状〉、森林計畫、岐阜證明材制度。縣的許多數字放在會議與委員會頁面所附的 PDF 中，新版會取代舊版。" },
            {
              en:"<strong>For research, use J-STAGE and CiNii.</strong> J-STAGE (jstage.jst.go.jp) holds most Japanese journals cited here, among them <em>Mokuzai Gakkaishi</em>, <em>Zairyō</em> and <em>Acoustical Science and Technology</em>; CiNii Research (cinii.ac.jp) finds Japanese books and papers in university libraries. International papers can be found by their journal, volume and page, as given in the research section above.",
              ja:"<strong>研究はJ-STAGEとCiNiiで探す。</strong>J-STAGE（jstage.jst.go.jp）には、本書が引く日本の学術誌の多く——『木材学会誌』『材料』『Acoustical Science and Technology』など——がある。CiNii Research（cinii.ac.jp）では、大学図書館にある日本の本と論文が見つかる。海外の論文は、上の研究の節に記した誌名、巻、頁で探せる。",
              zh:"<strong>研究文獻，請用 J-STAGE 與 CiNii。</strong>J-STAGE（jstage.jst.go.jp）收錄本書所引的多數日本期刊，包括《木材學會誌》、《材料》與《Acoustical Science and Technology》；CiNii Research（cinii.ac.jp）可查到日本大學圖書館所藏的書籍與論文。國外論文可依上文研究一節所列的期刊、卷與頁碼查找。" },
            {
              en:"<strong>For a company, read its own history and then look for a second source</strong> — a trademark register, a prefectural list, a JETRO profile, an industry history. Dates of founding are usually safe; “firsts” and market shares need the second source.",
              ja:"<strong>会社については、自社の沿革を読み、それから第二の資料を探す。</strong>商標の登録、県の一覧、JETROの紹介、業界の歴史などである。創業の年はたいてい確かだが、「初」やシェアには第二の資料が要る。",
              zh:"<strong>關於公司，先讀其自身的沿革，再找第二份資料</strong>——商標登錄、縣府名單、JETRO 介紹、產業史。創立年份通常可靠；「首創」與市占率則需要第二份資料。" },
            {
              en:"<strong>For Taiwan and for CITES, check the current text.</strong> Taiwan's timber figures are in the Legislative Yuan Budget Center's reports and on the Forestry and Nature Conservation Agency's site; quarantine rules are on the Ministry of Agriculture's pages. The CITES Appendices change after every Conference of the Parties: check the current Appendices on cites.org, or the Species+ database, before travelling with an instrument made of rosewood.",
              ja:"<strong>台湾とワシントン条約については、現行の文書を確かめる。</strong>台湾の木材の数字は立法院予算中心の報告と林業及自然保育署のサイトにあり、検疫の規則は農業部の頁にある。ワシントン条約の附属書は締約国会議のたびに変わる。ローズウッドの楽器を携えて旅する前に、cites.orgの現行の附属書か、Species+のデータベースを確かめること。",
              zh:"<strong>台灣與華盛頓公約，請查現行文本。</strong>台灣的木材數字見於立法院預算中心的報告與林業及自然保育署網站；檢疫規定見於農業部頁面。華盛頓公約附錄在每次締約方大會後都會變動：攜帶玫瑰木樂器旅行前，請查 cites.org 上的現行附錄或 Species+ 資料庫。" }
          ] },
        { t:"note",
          label:{ en:"Corrections", ja:"訂正", zh:"勘誤" },
          text:{
            en:"Corrections are the most useful thing a reader can offer. If a figure here does not match its source, the source is right; the year, the unit and the publisher named on the page should be enough to show where the error lies.",
            ja:"読者が寄せうる最も有用なものは訂正である。ここの数字が出所と合わなければ、正しいのは出所である。頁に記した年、単位、発行者があれば、どこに誤りがあるかを示すには足りるはずである。",
            zh:"讀者能提供的最有用的東西是勘誤。若本書的數字與其出處不符，正確的是出處；頁面上註明的年份、單位與發行者，應足以指出錯誤在哪裡。" } }
      ] },
    { t:"related", items:[
      { href:"figures.html", why:{ en:"The diagrams built from these sources.", ja:"これらの資料から描いた図版。", zh:"根據這些資料繪製的圖表。" } },
      { href:"tables.html", why:{ en:"The numbers in one place.", ja:"数字を一か所に。", zh:"集中一處的數字。" } },
      { href:"chronology.html", why:{ en:"The dates in order.", ja:"年を順に。", zh:"依序排列的年代。" } },
      { href:"index.html", why:{ en:"Back to the beginning.", ja:"はじめに戻る。", zh:"回到開頭。" } }
    ] }
  ]
};
})();
