/* =============================================================
   THE SPIRIT OF GIFU — Journeys
   6 pages. Each page is one GIFU.pages["key"] = {…}
   module; the order here is the order of the navigation
   (GIFU.NAV in assets/js/core.js).
   ============================================================= */

/* ---- ------------------------------------------- regions */
GIFU.pages["regions"] = {
  kicker: { en:"Journeys · 01", ja:"旅 · 01", zh:"旅程 · 01" },
  title:  { en: "Five Regions", ja: "五つの圏域", zh: "五大圈域" },
  jp: "岐阜 · 西濃 · 中濃 · 東濃 · 飛騨",
  lede: {
    en: "For planning, the prefecture divides its forty-two municipalities into five regions: four in the old province of Mino — the Gifu area, Seinō in the west, Chūnō in the middle and Tōnō in the east — and Hida in the north. The regions are a practical way to hold the prefecture in the mind, and this page describes each in turn, lists its towns, and ends with an index of everything in this book's directories — breweries, makers and museums — by municipality.",
    ja: "県は計画のために四十二の市町村を五つの圏域に分けている。旧美濃国の四つ——岐阜圏域、西の西濃、中ほどの中濃、東の東濃——と、北の飛騨である。圏域は県を頭に収めるための実際的な枠であり、この頁では各圏域を順に述べ、市町村を挙げ、最後に本書の名鑑——蔵、作り手、博物館——のすべてを市町村別に並べた索引を置く。",
    zh: "為了規劃，縣把四十二個市町村分為五大圈域：舊美濃國的四個——岐阜圈域、西部的西濃、中部的中濃、東部的東濃——以及北部的飛驒。圈域是把全縣裝進腦中的實用框架；本頁依序介紹各圈域、列出其市町村，最後附上本書各名鑑——酒藏、製作者、博物館——依市町村排列的總索引。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The forty-two municipalities in their five regions, schematic: twenty-one cities, nineteen towns and two villages. Positions within each block follow the prefecture's own order, not the map. Hida covers about two-fifths of the land and holds about 7 per cent of the people.",
        ja:"五つの圏域とその四十二市町村（模式図）。市二十一、町十九、村二。各枠のなかの並びは地図ではなく県の定める順による。飛騨は県土の約五分の二を占め、人口の約7%を抱える。",
        zh:"五大圈域及其四十二個市町村（示意圖）：二十一市、十九町、二村。各框內的排列依縣的官方順序，而非地理位置。飛驒佔全縣土地約五分之二，人口約 7%。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var M = GIFU.MUNI, R = GIFU.REGION;
        var s = '<svg viewBox="0 0 760 452" role="img" aria-label="The five regions of Gifu and their municipalities">' +
          '<rect x="0.5" y="0.5" width="759" height="451" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FORTY-TWO MUNICIPALITIES", ja:"四十二の市町村", zh:"四十二個市町村" }) + '</text>';
        var boxes = {
          hida:  [40, 48, 680, 84, "#E0E6DB"],
          seino: [40, 144, 160, 258, "#F0EDE4"],
          gifu:  [206, 144, 150, 258, "#EDE5D2"],
          chuno: [362, 144, 176, 258, "#E7DFD2"],
          tono:  [544, 144, 176, 258, "#EEE1DF"]
        };
        function mark(x, y, kind) {
          if (kind === "c") return '<rect x="' + (x - 3) + '" y="' + (y - 7) + '" width="6" height="6" fill="#201E1B"/>';
          if (kind === "t") return '<circle cx="' + x + '" cy="' + (y - 4) + '" r="3" fill="#55504A"/>';
          return '<path d="M' + x + ',' + (y - 8) + ' L' + (x + 3.5) + ',' + (y - 1) + ' L' + (x - 3.5) + ',' + (y - 1) + ' Z" fill="#7C6B52"/>';
        }
        Object.keys(boxes).forEach(function (g) {
          var b = boxes[g];
          var list = Object.keys(M).filter(function (k) { return M[k].g === g; });
          var lab = L(R[g]);
          if (lang === "en") lab = lab.toUpperCase();
          s += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '" fill="' + b[4] + '" stroke="#CDC6B9"/>' +
               '<text x="' + (b[0] + 10) + '" y="' + (b[1] + 18) + '" ' + F + ' font-size="10.5" fill="#55504A" letter-spacing="1.4" font-weight="600">' +
               lab + ' · ' + list.length + '</text>';
          list.forEach(function (k, i) {
            var m = M[k], kind = /市$/.test(m.ja) ? "c" : (/村$/.test(m.ja) ? "v" : "t");
            var x, y;
            if (g === "hida") { x = b[0] + 20 + i * 165; y = b[1] + 52; }
            else { x = b[0] + 16; y = b[1] + 44 + i * 16.5; }
            s += mark(x, y, kind) + '<text x="' + (x + 9) + '" y="' + y + '" ' + F + ' font-size="10" fill="#201E1B">' + L(m) + '</text>';
          });
        });
        /* legend */
        var lx = 40, ly = 426;
        s += mark(lx + 4, ly, "c") + '<text x="' + (lx + 13) + '" y="' + ly + '" ' + F + ' font-size="10" fill="#55504A">' + L({ en:"city (21)", ja:"市（21）", zh:"市（21）" }) + '</text>' +
             mark(lx + 104, ly, "t") + '<text x="' + (lx + 113) + '" y="' + ly + '" ' + F + ' font-size="10" fill="#55504A">' + L({ en:"town (19)", ja:"町（19）", zh:"町（19）" }) + '</text>' +
             mark(lx + 204, ly, "v") + '<text x="' + (lx + 213) + '" y="' + ly + '" ' + F + ' font-size="10" fill="#55504A">' + L({ en:"village (2)", ja:"村（2）", zh:"村（2）" }) + '</text>' +
             '<text x="720" y="' + ly + '" text-anchor="end" ' + F + ' font-size="9.5" fill="#8B857C">' + L({ en:"SCHEMATIC — not a map.", ja:"模式図——地図ではない。", zh:"示意圖——非地圖。" }) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"gifu",
      title:{ en:"The Gifu area", ja:"岐阜圏域", zh:"岐阜圈域" }, jp:"岐阜 · 各務原 · 羽島 · 本巣",
      body:[
        { t:"p", text:{
          en:"The prefectural capital and its neighbours on the lower Nagara and the Kiso. <strong>Gifu</strong> city lies under Kinkazan, with the castle on its summit, the excavated site of Nobunaga's palace at its foot, the cormorant fishing on the Nagara and the lacquered Great Buddha of Shōhō-ji. <strong>Kakamigahara</strong> has its airfield and aircraft works, the Murakuni-za playhouse and the Hyakujūrō cherries; <strong>Hashima</strong> weaves wool and claims to be Enkū's birthplace; <strong>Motosu</strong> has the Usuzumi cherry and the fault scarp of the 1891 earthquake at Neo; <strong>Mizuho</strong> is the home of the Fuyū persimmon. See <a href=\"nobunaga.html\">Nobunaga's Gifu</a> and <a href=\"ukai.html\">Cormorant Fishing</a>.",
          ja:"県都と、長良川下流・木曽川沿いの近隣。<strong>岐阜市</strong>は金華山のふもとにあり、山頂に城、ふもとに信長の居館跡の発掘地、長良川に鵜飼、そして正法寺の乾漆の大仏がある。<strong>各務原</strong>には飛行場と航空機の工場、芝居小屋の村国座、百十郎桜がある。<strong>羽島</strong>は毛織物を織り、円空の生地を名のる。<strong>本巣</strong>には淡墨桜と、根尾の1891年の地震の断層崖がある。<strong>瑞穂</strong>は富有柿のふるさとである。<a href=\"nobunaga.html\">信長の岐阜</a>と<a href=\"ukai.html\">鵜飼</a>を参照。",
          zh:"縣府所在地及其位於長良川下游與木曾川沿岸的鄰近市町。<strong>岐阜市</strong>位於金華山下：山頂有城，山麓有信長居館的發掘遺址，長良川上有鵜飼，還有正法寺的乾漆大佛。<strong>各務原</strong>有機場與飛機工廠、戲棚村國座，以及百十郎櫻；<strong>羽島</strong>織造毛料，並自稱圓空出生地；<strong>本巢</strong>有淡墨櫻與根尾 1891 年地震的斷層崖；<strong>瑞穗</strong>是富有柿的故鄉。見<a href=\"nobunaga.html\">信長的岐阜</a>與<a href=\"ukai.html\">鵜飼</a>。" } }
      ]
    },

    { t:"section", id:"seino",
      title:{ en:"Seinō", ja:"西濃圏域", zh:"西濃圈域" }, jp:"大垣 · 関ケ原 · 養老 · 揖斐",
      body:[
        { t:"p", text:{
          en:"The western plain and the Ibi valley. <strong>Ōgaki</strong> is the water city of springs and the masu town, where Bashō ended the journey of <em>Oku no Hosomichi</em> in 1689; <strong>Tarui</strong> was the capital of Mino province and keeps the Nangū Taisha shrine of the metalworkers; <strong>Sekigahara</strong> is the gap where the battles of 672 and 1600 were fought; <strong>Yōrō</strong> has the waterfall of the sake legend; <strong>Kaizu</strong> lies among the ring levees at the bottom of the plain, where the Satsuma men of the Hōreki works are remembered. Up the Ibi are the pilgrims' temple of Tanigumi-san, the breweries of Ōno and Ikeda and the Tokuyama Dam. See <a href=\"sekigahara.html\">Sekigahara</a> and <a href=\"chisui.html\">Taming the Three Rivers</a>.",
          ja:"西の平野と揖斐の谷。<strong>大垣</strong>は湧き水の水都にして枡の町であり、芭蕉が1689年に『おくのほそ道』の旅を終えた地である。<strong>垂井</strong>は美濃国の国府が置かれた地で、金属の業の神をまつる南宮大社がある。<strong>関ケ原</strong>は672年と1600年の戦いが行われた狭間である。<strong>養老</strong>には酒の伝説の滝がある。<strong>海津</strong>は平野の底の輪中のなかにあり、宝暦治水の薩摩の人々がしのばれる。揖斐川をさかのぼれば、巡礼の寺・谷汲山、大野と池田の酒蔵、そして徳山ダムがある。<a href=\"sekigahara.html\">関ヶ原</a>と<a href=\"chisui.html\">木曽三川の治水</a>を参照。",
          zh:"西部平原與揖斐河谷。<strong>大垣</strong>是湧泉之城與枡之鄉，芭蕉於 1689 年在此結束《奧之細道》之旅；<strong>垂井</strong>曾是美濃國的國府所在，有祭祀金屬業之神的南宮大社；<strong>關原</strong>是 672 年與 1600 年兩場戰役的戰場隘口；<strong>養老</strong>有酒之傳說的瀑布；<strong>海津</strong>位於平原最低處的輪中之間，當地紀念寶曆治水的薩摩人。沿揖斐川上溯，有朝聖古寺谷汲山、大野與池田的酒藏，以及德山水壩。見<a href=\"sekigahara.html\">關原</a>與<a href=\"chisui.html\">木曾三川的治水</a>。" } }
      ]
    },

    { t:"section", id:"chuno",
      title:{ en:"Chūnō", ja:"中濃圏域", zh:"中濃圈域" }, jp:"関 · 美濃 · 郡上 · 可児",
      body:[
        { t:"p", text:{
          en:"The middle of the prefecture: the middle Nagara and its valleys, the lower Hida river and the Kiso. <strong>Seki</strong> is the town of blades, and the population centre of Japan lies in its hills; <strong>Mino</strong> is the town of paper and udatsu; <strong>Gujō</strong> has the summer dances of Gujō Hachiman and the springs and channels of its streets; <strong>Minokamo</strong> is where the Hida river joins the Kiso; <strong>Kani</strong> has a guitar workshop and the kiln site where Shino was shown to be Mino ware; <strong>Yaotsu</strong> made up the timber rafts of the Kiso and remembers Sugihara Chiune; <strong>Hichisō</strong> has the oldest stone. See <a href=\"seki.html\">Seki, Town of Blades</a> and <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>.",
          ja:"県の中央部——長良川中流とその谷、飛騨川下流と木曽川。<strong>関</strong>は刃物の町で、その丘に日本の人口重心がある。<strong>美濃</strong>は紙とうだつの町。<strong>郡上</strong>には郡上八幡の夏の踊りと、町なかの湧き水と水路がある。<strong>美濃加茂</strong>は飛騨川が木曽川に合う地。<strong>可児</strong>にはギター工房と、志野が美濃の焼き物だと明かされた窯跡がある。<strong>八百津</strong>は木曽川の筏を組んだ地で、杉原千畝をしのぶ。<strong>七宗</strong>には最古の石がある。<a href=\"seki.html\">刃物のまち・関</a>と<a href=\"paper.html\">和紙・提灯・和傘</a>を参照。",
          zh:"全縣的中部：長良川中游及其河谷、飛驒川下游與木曾川。<strong>關</strong>是刀刃之城，日本的人口重心就在其山丘間；<strong>美濃</strong>是紙與卯建之鎮；<strong>郡上</strong>有郡上八幡的夏日舞蹈，以及街道間的湧泉與水道；<strong>美濃加茂</strong>是飛驒川匯入木曾川之處；<strong>可兒</strong>有吉他工坊，以及證明志野屬美濃燒的窯址；<strong>八百津</strong>是木曾川木筏的編組地，並紀念杉原千畝；<strong>七宗</strong>有最古老的石頭。見<a href=\"seki.html\">刀刃之城・關</a>與<a href=\"paper.html\">和紙、燈籠與和傘</a>。" } }
      ]
    },

    { t:"section", id:"tono",
      title:{ en:"Tōnō", ja:"東濃圏域", zh:"東濃圈域" }, jp:"多治見 · 土岐 · 瑞浪 · 恵那 · 中津川",
      body:[
        { t:"p", text:{
          en:"The pottery hills and the Nakasendō. <strong>Tajimi</strong>, <strong>Toki</strong> and <strong>Mizunami</strong> make most of Japan's everyday tableware, and Tajimi holds a national heat record; <strong>Ena</strong> has the castle town of Iwamura, the Ōi Dam on the Kiso and the agar fields of Yamaoka; <strong>Nakatsugawa</strong> has, since 2005, included Magome on the Nakasendō, and it holds the forest villages of Ura-Kiso — Kashimo, Tsukechi and Kawaue — whose hinoki goes to the shrines of Ise, and Sakashita, where Takamine guitars are made. See <a href=\"minoyaki.html\">Mino Ware</a> and <a href=\"hinoki.html\">Hinoki</a>.",
          ja:"焼き物の丘と中山道。<strong>多治見</strong>、<strong>土岐</strong>、<strong>瑞浪</strong>は日本の日常の器の大半をつくり、多治見は国内の最高気温の記録を持つ。<strong>恵那</strong>には城下町の岩村、木曽川の大井ダム、山岡の寒天の干し場がある。<strong>中津川</strong>は2005年から中山道の馬籠を含み、伊勢の神宮へ檜を送る裏木曽の山の村——加子母、付知、川上——と、タカミネのギターがつくられる坂下を抱える。<a href=\"minoyaki.html\">美濃焼</a>と<a href=\"hinoki.html\">ヒノキ</a>を参照。",
          zh:"陶瓷丘陵與中山道。<strong>多治見</strong>、<strong>土岐</strong>與<strong>瑞浪</strong>生產日本大部分的日常餐具，多治見並保有日本的高溫紀錄；<strong>惠那</strong>有城下町岩村、木曾川上的大井水壩，以及山岡的寒天曬場；<strong>中津川</strong>自 2005 年起納入中山道的馬籠，並擁有把檜木送往伊勢神宮的裏木曾山村——加子母、付知與川上——以及製作 Takamine 吉他的坂下。見<a href=\"minoyaki.html\">美濃燒</a>與<a href=\"hinoki.html\">日本扁柏</a>。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Hida", ja:"飛騨圏域", zh:"飛驒圈域" }, jp:"高山 · 飛騨 · 下呂 · 白川",
      body:[
        { t:"p", text:{
          en:"The mountains of the north, the old province of Hida in four municipalities. <strong>Takayama</strong>, the largest municipality in Japan by area, has its old merchant town, its spring and autumn festivals, its furniture makers and Oku-Hida's hot springs under the Northern Alps; <strong>Hida</strong> city has the canal town of Furukawa and, in the old Kamioka mine, the underground detectors of neutrino physics; <strong>Gero</strong> is the hot spring on the Hida river; <strong>Shirakawa</strong> village is Shirakawa-gō. Hida covers about two-fifths of the prefecture and holds about 7 per cent of its people. See <a href=\"provinces.html\">Mino and Hida</a> and <a href=\"journeys.html\">Five Journeys</a>.",
          ja:"北の山地、旧飛騨国の四市村。<strong>高山</strong>は面積で日本最大の市町村で、古い商人の町、春と秋の祭り、家具メーカー、そして北アルプスの下の奥飛騨温泉郷を抱える。<strong>飛騨市</strong>には水路の町・古川と、旧神岡鉱山のニュートリノ物理の地下検出器がある。<strong>下呂</strong>は飛騨川の温泉。<strong>白川村</strong>は白川郷である。飛騨は県土の約五分の二を占め、人口の約7%を抱える。<a href=\"provinces.html\">美濃と飛騨</a>と<a href=\"journeys.html\">五つの旅</a>を参照。",
          zh:"北部山地，舊飛驒國，由四個市村組成。<strong>高山</strong>是日本面積最大的市町村，擁有老商人町、春秋兩季祭典、家具製造商，以及北阿爾卑斯山下的奧飛驒溫泉鄉；<strong>飛驒市</strong>有水道之鎮古川，以及舊神岡礦山中微中子物理的地下偵測器；<strong>下呂</strong>是飛驒川畔的溫泉；<strong>白川村</strong>就是白川鄉。飛驒佔全縣約五分之二的土地，人口約 7%。見<a href=\"provinces.html\">美濃與飛驒</a>與<a href=\"journeys.html\">五段旅程</a>。" } }
      ]
    },

    { t:"section", id:"counts",
      title:{ en:"Cities, towns and villages", ja:"市・町・村の数", zh:"市、町、村的數目" }, jp:"市町村数",
      body:[
        { t:"table",
          caption:{en:"The forty-two municipalities by region, after the mergers of 2003–2006, which reduced the prefecture's ninety-nine municipalities to forty-two.",ja:"圏域別の四十二市町村。2003年から2006年の合併により、県の市町村は九十九から四十二に減った。",zh:"各圈域的四十二個市町村。2003 至 2006 年的合併，使全縣市町村由九十九個減為四十二個。"},
          cols:[{en:"Region",ja:"圏域",zh:"圈域"},{en:"Cities",ja:"市",zh:"市"},{en:"Towns",ja:"町",zh:"町"},{en:"Villages",ja:"村",zh:"村"},{en:"Total",ja:"計",zh:"合計"}],
          numCols:[1,2,3,4],
          rows:[
            [{en:"Gifu area",ja:"岐阜圏域",zh:"岐阜圈域"},"6","3","0","9"],
            [{en:"Seinō",ja:"西濃圏域",zh:"西濃圈域"},"2","9","0","11"],
            [{en:"Chūnō",ja:"中濃圏域",zh:"中濃圈域"},"5","7","1","13"],
            [{en:"Tōnō",ja:"東濃圏域",zh:"東濃圈域"},"5","0","0","5"],
            [{en:"Hida",ja:"飛騨圏域",zh:"飛驒圈域"},"3","0","1","4"],
            [{en:"Prefecture",ja:"県計",zh:"全縣"},"21","19","2","42"]
          ] }
      ]
    },

    { t:"section", id:"index",
      title:{ en:"Everything in the directories, by town", ja:"名鑑のすべてを市町村から", zh:"依市町村索引所有名鑑" }, jp:"総索引",
      body:[
        { t:"p", text:{
          en:"Every entry in the three directories of this book — <a href=\"directory.html\">sake</a>, <a href=\"makers.html\">makers</a> and <a href=\"museums.html\">museums and workshops</a> — arranged by municipality in the prefecture's own order. The count beside each town is the number of entries; each name links to its entry.",
          ja:"本書の三つの名鑑——<a href=\"directory.html\">酒</a>、<a href=\"makers.html\">作り手</a>、<a href=\"museums.html\">博物館と工房</a>——のすべての項目を、県の定める順に市町村ごとに並べた。町の横の数は項目数であり、名から各項目へ移動できる。",
          zh:"本書三份名鑑——<a href=\"directory.html\">酒</a>、<a href=\"makers.html\">製作者</a>、<a href=\"museums.html\">博物館與工坊</a>——的所有條目，依縣的官方順序按市町村排列。城鎮旁的數字是條目數；點選名稱可前往各條目。" } },
        { t:"muniindex" }
      ]
    },

    { t:"related", items:[
      { href:"provinces.html", why:{ en:"The two old provinces behind the five regions.", ja:"五つの圏域の背後にある二つの旧国。", zh:"五大圈域背後的兩個舊國。" } },
      { href:"journeys.html", why:{ en:"Routes through the regions.", ja:"圏域をめぐる道筋。", zh:"穿越各圈域的路線。" } },
      { href:"museums.html", why:{ en:"Where to see things, region by region.", ja:"圏域ごとの見どころ。", zh:"各圈域可參觀之處。" } },
      { href:"tables.html", why:{ en:"The numbers of the prefecture.", ja:"県の数字。", zh:"全縣的數字。" } }
    ] }
  ]
};

/* ---- ------------------------------------------ visiting */
GIFU.pages["visiting"] = { kicker:{ en:"Journeys · 02", ja:"旅 · 02", zh:"旅程 · 02" },
  title:{ en:"Visiting Gifu", ja:"岐阜を訪ねる", zh:"造訪岐阜" },
  jp:"訪ねる",
  lede:{
    en:"Most of what this book describes can be seen, touched and smelled on a journey: festival floats in their storehouses, merchant houses held up by a lattice of beams, a hinoki forest where the trees for Ise are cut, a guitar workshop, a paper village, a wooden castle. This is a practical guide for the wood-minded traveller — how to reach Gifu from Taipei and from the rest of Japan, how to move around a prefecture that is mostly mountain, where to go region by region and what to look for when you get there, and when to go. Opening hours, fees and timetables change; treat the details here as a starting point and check before you set out.",
    ja:"この本が描くものの多くは、旅に出れば見て、触れて、嗅ぐことができる。蔵に収まった祭屋台、梁の格子に支えられた商家、伊勢の御用材が伐られるヒノキの森、ギターの工房、紙の里、木造の城。この頁は木に心を寄せる旅人のための実用的な手引きである。台北から、また日本各地から岐阜へどう行くか、大半が山である県の中をどう動くか、地域ごとにどこへ行き、着いたら何を見るか、そしていつ行くか。開館時間、料金、時刻表は変わる。ここに記す細部は出発点と考え、出かける前に確かめてほしい。",
    zh:"本書描述的許多事物，只要出門旅行就能親眼看見、親手觸摸、親鼻聞到：收在倉庫裡的祭典屋台、由梁木格構撐起的商家、為伊勢神宮伐取御用材的檜木林、吉他工坊、和紙之鄉、木造城堡。本頁是寫給愛木旅人的實用指南——如何從台北及日本各地前往岐阜、如何在大半是山地的縣內移動、各地區該去哪裡、到了之後看什麼，以及何時前往。開放時間、票價與時刻表都會變動；請把這裡的細節當作起點，出發前務必再確認。" },
  body:[
    { t:"section",
      id:"arrive",
      title:{ en:"Getting there", ja:"岐阜への道", zh:"如何抵達" },
      jp:"空路と鉄路",
      body:[
        { t:"p",
          text:{
            en:"Gifu has no airport of its own. For travellers from Taiwan the usual gateway is <strong>Chūbu Centrair International Airport</strong> on an artificial island off Tokoname, south of Nagoya, which has direct flights from Taoyuan by several airlines; an industry report on the Nagoya–Taipei route counted seven carriers in January 2026, among them China Airlines, Starlux, Tigerair Taiwan, JAL and Peach, flying 441 flights in the month at an average load factor of 88.8 per cent. From the airport the Meitetsu line reaches Nagoya station in about half an hour, and from Nagoya the JR Tōkaidō line reaches Gifu station in about twenty minutes. Two smaller airports on the Sea of Japan side are useful for the north of the prefecture: <strong>Komatsu</strong> in Ishikawa, served from Taoyuan by EVA Air, and <strong>Toyama</strong>, where China Airlines resumed its Taoyuan flights on 20 August 2026 with two flights a week on an Airbus A321neo. From Toyama the limited express runs south up the Jinzū gorge to Hida-Furukawa and Takayama, so a traveller can fly into Toyama and out of Nagoya, crossing the prefecture from north to south.",
            ja:"岐阜県には空港がない。台湾からの旅人のふつうの玄関は、名古屋の南、常滑沖の人工島にある<strong>中部国際空港（セントレア）</strong>で、桃園から複数の航空会社の直行便がある。名古屋—台北線についての業界の報告は、二〇二六年一月に七社がこの路線を飛び、月に四百四十一便、平均搭乗率八八・八％だったと数えている。中華航空、スターラックス、タイガーエア台湾、日本航空、ピーチなどである。空港から名鉄で名古屋駅まで約三十分、名古屋からJR東海道線で岐阜駅まで約二十分。日本海側の二つの小さな空港は県の北部に便利である。石川県の<strong>小松</strong>には桃園からエバー航空が飛び、<strong>富山</strong>では中華航空が二〇二六年八月二十日に桃園線を再開した（週二便、エアバスA321neo）。富山からは特急が神通川の峡谷を南へさかのぼって飛騨古川と高山に至るから、富山に降りて名古屋から帰る、つまり県を北から南へ縦断する旅も組める。",
            zh:"岐阜縣沒有自己的機場。從台灣出發，最常用的門戶是位於名古屋南方、常滑外海人工島上的<strong>中部國際機場（Centrair）</strong>，有多家航空公司從桃園直飛。一份關於名古屋—台北航線的業界報告統計，2026 年 1 月共有七家航空公司經營此線，包括中華航空、星宇航空、台灣虎航、日本航空與樂桃航空，當月合計 441 個航班，平均載客率 88.8%。從機場搭名鐵約半小時到名古屋站，再從名古屋搭 JR 東海道線約二十分鐘到岐阜站。日本海一側的兩座小機場則方便前往縣北：石川縣的<strong>小松機場</strong>有長榮航空飛桃園；<strong>富山機場</strong>方面，中華航空於 2026 年 8 月 20 日恢復桃園航線，每週兩班，機型為空中巴士 A321neo。從富山可搭特急列車沿神通川峽谷南上，抵達飛驒古川與高山，因此可以規劃從富山入境、由名古屋出境，由北而南縱貫全縣。" } },
        { t:"table",
          caption:{ en:"Gateways for a visit from Taiwan (2026)", ja:"台湾から訪ねる場合の玄関口（二〇二六年）", zh:"從台灣出發的門戶（2026 年）" },
          cols:[
            { en:"Airport", ja:"空港", zh:"機場" },
            { en:"Direct from Taoyuan", ja:"桃園からの直行便", zh:"桃園直飛" },
            { en:"Onward into Gifu", ja:"岐阜への乗り継ぎ", zh:"轉往岐阜" }
          ],
          rows:[
            [
              { en:"Chūbu Centrair (Aichi)", ja:"中部国際空港（愛知）", zh:"中部國際機場（愛知）" },
              { en:"Several airlines, many flights a day", ja:"複数社、一日に多数便", zh:"多家航空，每日多班" },
              {
                en:"Meitetsu to Nagoya (~30 min); JR to Gifu, Takayama, Nakatsugawa",
                ja:"名鉄で名古屋（約三十分）、JRで岐阜・高山・中津川へ",
                zh:"名鐵至名古屋（約 30 分）；JR 往岐阜、高山、中津川" }
            ],
            [
              { en:"Komatsu (Ishikawa)", ja:"小松（石川）", zh:"小松（石川）" },
              { en:"EVA Air", ja:"エバー航空", zh:"長榮航空" },
              { en:"By bus or car to Shirakawa-gō and Takayama", ja:"バスか車で白川郷・高山へ", zh:"搭巴士或開車往白川鄉、高山" }
            ],
            [
              { en:"Toyama", ja:"富山", zh:"富山" },
              {
                en:"China Airlines, twice weekly from August 2026",
                ja:"中華航空、二〇二六年八月から週二便",
                zh:"中華航空，2026 年 8 月起每週兩班" },
              { en:"Limited express Hida to Hida-Furukawa and Takayama", ja:"特急ひだで飛騨古川・高山へ", zh:"特急「飛驒號」往飛驒古川、高山" }
            ]
          ] },
        { t:"p",
          text:{
            en:"From Tokyo the quickest route to most of Gifu is the Tōkaidō Shinkansen to Nagoya (about an hour and forty minutes by the fastest trains), then a local connection; the Shinkansen also stops at Gifu-Hashima, a few kilometres south of Gifu city. For Hida the key train is the JR limited express <em>Hida</em>, which runs from Nagoya up the Kiso and Hida river valleys to Gero and Takayama in about two and a half hours, with some trains continuing to Hida-Furukawa and Toyama; about eleven trains a day run in each direction, one of them from Osaka. Since July 2022 the service has used the HC85, a hybrid diesel train, which replaced the older KiHa 85 stock entirely in March 2023. Highway buses are cheaper and often as quick: Nōhi Bus and partner companies run coaches to Takayama from Nagoya and from Shinjuku in Tokyo, and from Takayama to Shirakawa-gō and Kanazawa.",
            ja:"東京からなら、岐阜の多くの場所へは東海道新幹線で名古屋まで行き（最速の列車で約一時間四十分）、在来線に乗り継ぐのがいちばん早い。新幹線は岐阜市の数キロ南の岐阜羽島にも停まる。飛騨への要の列車はJRの特急<em>ひだ</em>で、名古屋から木曽川と飛騨川の谷をさかのぼり、下呂を経て約二時間半で高山に着く。一部は飛騨古川や富山まで行く。一日におよそ十一本が上り下りそれぞれ走り、うち一本は大阪発である。二〇二二年七月からはハイブリッド式の気動車HC85が使われ、二〇二三年三月には旧型のキハ85をすべて置き換えた。高速バスは安く、しばしば同じくらい早い。濃飛バスと提携各社が名古屋と東京の新宿から高山へ、また高山から白川郷や金沢へ走らせている。",
            zh:"從東京出發，前往岐阜多數地點最快的方式是搭東海道新幹線到名古屋（最快車次約一小時四十分），再轉搭在來線；新幹線也停靠岐阜市南方數公里的岐阜羽島站。前往飛驒的關鍵列車是 JR 特急<em>「飛驒號」</em>（ひだ），從名古屋沿木曾川與飛驒川河谷北上，經下呂約兩個半小時抵達高山，部分班次續行至飛驒古川與富山；每日上下行各約十一班，其中一班從大阪出發。自 2022 年 7 月起改用油電混合動力的 HC85 型列車，並於 2023 年 3 月完全取代舊型 KiHa 85。高速巴士較便宜，速度往往也不相上下：濃飛巴士與合作業者經營從名古屋及東京新宿往高山的路線，以及從高山往白川鄉、金澤的班次。" } },
        { t:"tiny",
          text:{
            en:"Sources: Toyama Airport (Taipei route page, 2026); sky-budget (Nagoya–Taipei load factors, January 2026); JR Central train guides (limited express Hida, HC85). Airline schedules change seasonally.",
            ja:"出典：富山空港（台北便の頁、二〇二六年）、sky-budget（名古屋—台北線の搭乗率、二〇二六年一月）、JR東海の列車案内（特急ひだ、HC85）。航空便の時刻は季節ごとに変わる。",
            zh:"資料來源：富山機場（台北航線頁面，2026 年）；sky-budget（名古屋—台北航線載客率，2026 年 1 月）；JR 東海列車介紹（特急飛驒號、HC85）。航班時刻依季節調整。" } }
      ] },
    { t:"section",
      id:"around",
      title:{ en:"Getting around", ja:"県内を動く", zh:"在縣內移動" },
      jp:"鉄道・バス・車",
      body:[
        { t:"p",
          text:{
            en:"Gifu is large — about 10,600 square kilometres, more than a quarter of the size of Taiwan — and four-fifths of it is forest, so distances on the map are longer on the ground. Three railway lines do most of the work for a visitor. The JR Takayama line follows the rivers north from Gifu through Mino-Ōta, Gero, Takayama and Hida-Furukawa. The JR Chūō line runs east from Nagoya through Tajimi, Ena and Nakatsugawa towards the Kiso valley. The small Nagaragawa Railway climbs the Nagara valley from Mino-Ōta through Mino and Gujō Hachiman to Hokunō. Beyond the rails, buses fill the gaps: Nōhi Bus in Hida, Gifu Bus in the south and centre, and local community buses in the villages, some of which run only a few times a day.",
            ja:"岐阜県は広い——約一万六百平方キロ、台湾の四分の一を超える——うえに、その八割が森なので、地図の上の距離は実際にはもっと長い。旅人の足の大半は三つの鉄道がになう。JR高山本線は岐阜から川沿いに北上し、美濃太田、下呂、高山、飛騨古川を通る。JR中央本線は名古屋から東へ、多治見、恵那、中津川を経て木曽谷へ向かう。小さな長良川鉄道は美濃太田から長良川の谷をのぼり、美濃市、郡上八幡を経て北濃に至る。線路の届かないところはバスが埋める。飛騨の濃飛バス、南部と中部の岐阜バス、そして村々のコミュニティバスで、なかには一日数本しか走らないものもある。",
            zh:"岐阜縣面積廣大——約 10,600 平方公里，超過台灣的四分之一——而且八成是森林，所以地圖上的距離到了實地總是更遠。旅人的交通大多靠三條鐵路：JR 高山本線從岐阜沿河北上，經美濃太田、下呂、高山、飛驒古川；JR 中央本線從名古屋向東，經多治見、惠那、中津川通往木曾谷；小小的長良川鐵道則從美濃太田沿長良川河谷上行，經美濃市、郡上八幡到北濃。鐵路到不了的地方由巴士補足：飛驒的濃飛巴士、南部與中部的岐阜巴士，以及各村的社區巴士，其中有些一天只有寥寥數班。" } },
        { t:"ul",
          items:[
            {
              en:"<strong>Base yourself in two places, not six.</strong> Takayama covers Hida (Furukawa, Shirakawa-gō and Gero are day trips); Gifu or Nagoya covers Mino, Gujō, Seki, Ōgaki and Kani; Nakatsugawa covers the hinoki villages.",
              ja:"<strong>拠点は六つでなく二つに。</strong>高山からは飛騨一円（古川、白川郷、下呂は日帰り）、岐阜か名古屋からは美濃、郡上、関、大垣、可児、中津川からはヒノキの里々を回れる。",
              zh:"<strong>住宿據點選兩處，而不是六處。</strong>以高山為據點可遊飛驒一帶（古川、白川鄉、下呂皆可當日往返）；以岐阜或名古屋為據點可遊美濃、郡上、關、大垣、可兒；以中津川為據點可遊檜木之鄉。" },
            {
              en:"<strong>Check the last bus first.</strong> In the mountains the last connection may leave in the late afternoon; plan the return before the outward journey.",
              ja:"<strong>まず最終バスを確かめる。</strong>山間部では最後の便が夕方早くに出てしまうことがある。行きより先に帰りを決めておく。",
              zh:"<strong>先查末班車。</strong>山區的最後一班車可能傍晚就開走；先規劃回程，再安排去程。" },
            {
              en:"<strong>A car opens the forests.</strong> Tsukechi, Kashimo and the upper Nagara are far easier by car; from December to March Hida roads need winter tyres or chains, and some mountain roads close.",
              ja:"<strong>車は森を開く。</strong>付知、加子母、長良川上流は車のほうがはるかに楽である。十二月から三月の飛騨の道には冬用タイヤかチェーンが要り、閉鎖される山道もある。",
              zh:"<strong>開車才能深入森林。</strong>付知、加子母與長良川上游開車前往方便得多；12 月至 3 月飛驒道路須用雪胎或雪鏈，部分山路會封閉。" },
            {
              en:"<strong>Taiwanese driving licences</strong> are accepted in Japan with an official Japanese translation, not an international permit; car-hire firms explain the procedure.",
              ja:"<strong>台湾の運転免許</strong>は、国際免許ではなく日本語の公式翻訳文を添えて日本で使う。レンタカー会社が手続きを案内している。",
              zh:"<strong>台灣駕照</strong>在日本使用時須附正式日文譯本，而非國際駕照；租車公司會說明手續。" },
            {
              en:"<strong>Luggage forwarding</strong> (<em>takkyūbin</em>) between hotels frees you to travel by local train and bus with a day bag.",
              ja:"<strong>宅急便</strong>で荷物を宿から宿へ送れば、日帰りの鞄一つで普通列車やバスに乗れる。",
              zh:"<strong>行李宅配</strong>（宅急便）在旅館間運送行李，讓你只帶隨身包就能搭普通列車與巴士。" }
          ] }
      ] },
    { t:"section",
      id:"eye",
      title:{ en:"What to look for", ja:"何を見るか", zh:"看些什麼" },
      jp:"木を見る目",
      body:[
        { t:"p",
          text:{
            en:"A traveller who has read about wood sees a town differently. The details below recur all over Gifu, from Hida's merchant streets to Mino's paper town, and each is explained elsewhere in this book. None needs special access; most are visible from the street or in any open building.",
            ja:"木について読んだ旅人には、町が違って見える。以下の細部は、飛騨の商家の通りから美濃の紙の町まで、岐阜のいたるところに繰り返し現れ、どれもこの本のどこかで説明している。特別な許しは要らない。ほとんどは通りから、あるいは公開されている建物の中で見られる。",
            zh:"讀過木材知識的旅人，看城鎮的眼光會不同。以下細節在岐阜處處可見，從飛驒的商家街道到美濃的和紙小鎮，本書各處都有說明。不需要特別許可，大多從街上或任何開放參觀的建築裡就看得到。" } },
        { t:"defs",
          items:[
            { term:{ en:"Lattice and beams", ja:"格子と梁", zh:"格柵與梁" },
              jp:"格子・梁組",
              def:{
                en:"Fine vertical lattices (<em>kōshi</em>) on street fronts; inside, a grid of great beams under a smoke-darkened ceiling. See <a href=\"architecture.html\">architecture</a>.",
                ja:"通りに面した細かい縦の格子。内側には、煤で黒ずんだ天井の下に大きな梁の格子。<a href=\"architecture.html\">建築</a>を参照。",
                zh:"臨街立面上細密的直向格柵（格子）；屋內則是被煙燻黑的天花板下，大梁縱橫交錯。見<a href=\"architecture.html\">建築</a>。" } },
            { term:{ en:"Eave-bracket clouds", ja:"雲", zh:"雲紋" },
              jp:"雲",
              def:{
                en:"In Hida-Furukawa the ends of the eave brackets are carved with cloud shapes, each carpenter's signature. See <a href=\"takumi.html\">takumi</a>.",
                ja:"飛騨古川では、軒の腕木の木口に雲の形が刻まれている。大工それぞれの署名である。<a href=\"takumi.html\">匠</a>を参照。",
                zh:"飛驒古川的出簷托木端部刻有雲形，是每位木匠的簽名。見<a href=\"takumi.html\">匠</a>。" } },
            { term:{ en:"Joints", ja:"継手・仕口", zh:"榫接" },
              jp:"継手・仕口",
              def:{
                en:"Where two timbers meet without nails: look at the corners of storehouses and temple gates. See <a href=\"joinery.html\">joinery</a>.",
                ja:"二本の材が釘なしで出会うところ。蔵や寺の門の角を見る。<a href=\"joinery.html\">継手と仕口</a>を参照。",
                zh:"兩根木料不用釘子相接之處：看倉庫與寺門的轉角。見<a href=\"joinery.html\">榫接</a>。" } },
            { term:{ en:"Grain and colour", ja:"木目と色", zh:"紋理與顏色" },
              jp:"木目",
              def:{
                en:"Pinkish, fine-ringed hinoki; red-and-white sugi; the deep figure of keyaki on floats; the red heart of yew in carvings. See <a href=\"trees.html\">trees</a>.",
                ja:"桃色で年輪の細かいヒノキ、赤と白のスギ、屋台のケヤキの深い杢、彫刻のイチイの赤い芯。<a href=\"trees.html\">樹木</a>を参照。",
                zh:"帶粉紅、年輪細密的檜木；紅白相間的柳杉；屋台上櫸木深邃的木紋；雕刻中紫杉的紅色心材。見<a href=\"trees.html\">樹木</a>。" } },
            { term:{ en:"Roofs", ja:"屋根", zh:"屋頂" },
              jp:"茅・柿・檜皮",
              def:{
                en:"Thatch on gasshō houses, thin wooden shingles (<em>kokera</em>) and cypress bark (<em>hiwada</em>) on temples and theatres.",
                ja:"合掌造りの茅、寺や芝居小屋の柿葺と檜皮葺。",
                zh:"合掌造的茅草屋頂；寺院與戲棚上的薄木片瓦（柿葺）與檜皮葺。" } },
            { term:{ en:"Wear", ja:"使い込み", zh:"使用痕跡" },
              jp:"手擦れ",
              def:{
                en:"Thresholds hollowed by feet, handrails polished by hands, lacquer gone transparent with age: the best evidence that a piece has been used for generations.",
                ja:"足でくぼんだ敷居、手で磨かれた手すり、年を経て透けた漆。何世代も使われてきたことのいちばんの証拠である。",
                zh:"被腳步磨凹的門檻、被手掌磨亮的扶手、隨歲月變得透明的漆面：最能證明一件器物歷經數代使用的痕跡。" } }
          ] },
        { t:"note",
          label:{ en:"Etiquette", ja:"心得", zh:"禮節" },
          text:{
            en:"Many of the finest buildings are private homes, working shrines or workshops. Take shoes off where asked, do not touch carvings or lacquer unless invited, keep drones and tripods away from festivals and villages, and ask before photographing craftspeople at work.",
            ja:"すぐれた建物の多くは、人の住む家、祭祀の続く社、仕事中の工房である。求められたら靴を脱ぎ、勧められない限り彫刻や漆に触れず、祭りや集落にドローンや三脚を持ち込まず、仕事中の職人を撮るときは先に声をかける。",
            zh:"許多最精采的建築是私人住宅、仍在祭祀的神社或運作中的工坊。依指示脫鞋；除非受邀，不要觸摸雕刻與漆器；祭典與聚落中勿使用空拍機與腳架；拍攝工作中的職人前先徵得同意。" } }
      ] },
    { t:"section",
      id:"takayama",
      title:{ en:"Takayama: the carpenters' town", ja:"高山——匠の町", zh:"高山：木匠之城" },
      jp:"飛騨高山",
      body:[
        { t:"p",
          text:{
            en:"Takayama is the one place in Gifu where a visitor can spend three days looking at nothing but wood. The old merchant quarter east of the Miyagawa river — the streets of Sanmachi — was selected as an Important Preservation District for Groups of Traditional Buildings in 1979, and the Shimo-Ninomachi and Ōshinmachi streets to the north followed in 2004. The houses are low, two-storeyed, dark-stained and latticed, with deep eaves and gutters of running water; many hold sake breweries, lacquer and carving shops, and small museums. Walk them early, before the tour groups, when the lattice throws long shadows and the morning markets by the river and in front of the Jinya are setting up.",
            ja:"高山は、岐阜で木だけを見て三日を過ごせるただ一つの町である。宮川の東の古い商家の町並み——三町——は一九七九年に重要伝統的建造物群保存地区に選定され、北の下二之町・大新町が二〇〇四年に続いた。家々は低い二階建てで、濃く色づき、格子をはめ、深い軒と水の流れる側溝をもつ。多くは造り酒屋、漆器や彫刻の店、小さな博物館である。団体客の来る前の朝早く歩くとよい。格子が長い影を落とし、川べりと陣屋前の朝市が店を広げはじめるころである。",
            zh:"高山是岐阜唯一能讓旅人整整三天只看木頭的地方。宮川東岸的舊商家區——三町——於 1979 年被選定為「重要傳統建造物群保存地區」，北側的下二之町、大新町也在 2004 年獲選。街屋低矮，兩層樓，外觀深色，裝有格柵，出簷深遠，屋前有流水溝渠；許多是釀酒廠、漆器與雕刻店以及小型博物館。建議趁團體客到來前的清晨去走走：格柵投下長長的影子，河畔與陣屋前的早市正陸續擺攤。" } },
        { t:"defs",
          items:[
            { term:{ en:"Takayama Jinya", ja:"高山陣屋", zh:"高山陣屋" },
              jp:"高山陣屋",
              def:{
                en:"The shogunate's office for Hida after the province was taken under direct rule in 1692 — a rule usually explained by the value of its forests — and raised to the rank of <em>gundai</em> office in 1777. It is the only one of the more than sixty such offices of the Edo period whose buildings survive: halls, residence, rice storehouses and garden. Open 8:45–17:00 from April to October and to 16:30 from November to March (2026); ¥500 for adults.",
                ja:"一六九二年に飛騨が幕府の直轄となったのち——その理由はふつう森林資源の価値で説明される——置かれた役所で、一七七七年に郡代役所に格上げされた。江戸時代に六十を超えた郡代・代官所のうち、建物が残る唯一のものである。役所、役宅、御蔵、庭。開館は四月〜十月が八時四十五分〜十七時、十一月〜三月が十六時半まで（二〇二六年）、大人五百円。",
                zh:"1692 年飛驒收歸幕府直轄後設置的官署——一般認為原因在於當地森林資源的價值——1777 年升格為「郡代」役所。江戶時代全國六十多處郡代、代官役所中，這是唯一建築物留存至今的一處：辦公廳舍、官邸、米倉與庭園。開放時間 4 月至 10 月為 8:45–17:00，11 月至 3 月至 16:30（2026 年）；成人 500 日圓。" } },
            { term:{ en:"Festival Float Exhibition Hall", ja:"高山祭屋台会館", zh:"高山祭屋台會館" },
              jp:"屋台会館",
              def:{
                en:"Run by Sakurayama Hachimangū, the shrine of the autumn festival, since 1968. Four of the eleven autumn floats stand in a tall glass hall at any time, changed three times a year, with the shrine's great portable shrine. Walking through town, look also for the float storehouses (<em>yatai-gura</em>): narrow, very tall white buildings with doors the height of a house. See <a href=\"floats.html\">floats</a>.",
                ja:"秋の祭りの社である桜山八幡宮が一九六八年から運営する。秋の屋台十一台のうち四台がいつも背の高いガラス張りの館に並び、年に三回入れ替わる。大神輿もある。町を歩くときは屋台蔵も探したい。家一軒ぶんの高さの扉をもつ、細く、ひどく背の高い白い蔵である。<a href=\"floats.html\">祭屋台</a>を参照。",
                zh:"由秋祭所屬的櫻山八幡宮自 1968 年起經營。秋祭十一座屋台中隨時有四座陳列於高挑的玻璃展廳，每年輪換三次，另展出神社的大神轎。在城裡散步時，也留意屋台倉（屋台藏）：窄而極高的白色倉庫，門高相當於一棟房子。見<a href=\"floats.html\">祭典屋台</a>。" } },
            { term:{ en:"Kusakabe and Yoshijima houses", ja:"日下部家・吉島家住宅", zh:"日下部家與吉島家住宅" },
              jp:"町家",
              def:{
                en:"Two merchant houses side by side in Ōshinmachi, both Important Cultural Properties. Kusakabe was raised in 1879 by the master carpenter Kawajiri Jisuke after the fire of 1875; Yoshijima, a sake brewer's house, was rebuilt in 1907–1908 by Nishida Isaburō. Stand in the earth-floored hall and look up at the stacked beams and posts lit from high windows — the most photographed interiors in Hida.",
                ja:"大新町に並んで建つ二軒の商家で、ともに重要文化財である。日下部家は一八七五年の大火ののち、一八七九年に棟梁川尻治助が建てた。造り酒屋の吉島家は一九〇七〜一九〇八年に西田伊三郎が建て直した。土間に立って、高窓の光に照らされた梁と柱の組み上げを見上げてほしい。飛騨でいちばん写真に撮られる室内である。",
                zh:"大新町上比鄰而立的兩棟商家，皆為「重要文化財」。日下部家於 1875 年大火後，由棟樑川尻治助在 1879 年建成；吉島家是釀酒商宅邸，1907–1908 年由西田伊三郎重建。站在土間仰望高窗光線下層層疊架的梁柱——這是飛驒被拍攝最多的室內空間。" } },
            { term:{ en:"Hida Folk Village", ja:"飛騨の里", zh:"飛驒之里" },
              jp:"飛騨民俗村",
              def:{
                en:"An open-air museum on the hill west of the station, opened in 1971, with about thirty farmhouses, storehouses and workshops moved from around Hida, among them the four-storey gasshō house of the Wakayama family (1797). Craftspeople demonstrate carving, Shunkei lacquer and weaving on many days.",
                ja:"駅の西の丘にある野外博物館で、一九七一年に開いた。飛騨各地から移した約三十棟の民家、蔵、作業小屋があり、四層の合掌造りである旧若山家（一七九七年）もその一つである。多くの日に、彫刻、春慶塗、機織りの実演が行われる。",
                zh:"位於車站西側山丘上的戶外博物館，1971 年開館，約有三十棟從飛驒各地遷建而來的民家、倉庫與作坊，包括四層合掌造的舊若山家（1797 年）。許多日子裡有職人示範雕刻、春慶塗與織布。" } },
            { term:{ en:"Furniture showrooms", ja:"家具のショールーム", zh:"家具展示館" },
              jp:"飛騨の家具",
              def:{
                en:"Hida Sangyō's large showroom is about fifteen minutes' walk from the station; Kashiwa, Nissin Mokkō and Shirakawa have galleries or cafés in town, and some offer factory tours or workshops by reservation. The Hida furniture festival, when the makers show new work across the city, was held on 17–21 June in 2026. See <a href=\"furniture.html\">furniture</a> and <a href=\"buying.html\">buying</a>.",
                ja:"飛騨産業の大きなショールームは駅から歩いて十五分ほど。柏木工、日進木工、シラカワも町なかにギャラリーやカフェをもち、予約で工場見学やワークショップを受けるところもある。つくり手たちが市内各所で新作を見せる飛騨の家具フェスティバルは、二〇二六年には六月十七〜二十一日に開かれた。<a href=\"furniture.html\">家具</a>と<a href=\"buying.html\">買う</a>を参照。",
                zh:"飛驒產業的大型展示館距車站步行約十五分鐘；柏木工、日進木工與 Shirakawa 在市區設有藝廊或咖啡館，部分提供預約制的工廠參觀或體驗課程。各家廠商在市內各處展示新作的「飛驒家具節」，2026 年於 6 月 17–21 日舉行。見<a href=\"furniture.html\">家具</a>與<a href=\"buying.html\">選購</a>。" } }
          ] },
        { t:"p",
          text:{
            en:"Carving and lacquer are best seen in the shops of the old town, where Ichii Ittōbori carvers often work at a bench in the window, and at the Shunkei lacquer workshops a short walk away. The temple of Senkō-ji, in the hills north-east of the city, keeps a large group of sculptures by the wandering monk Enkū, cut with a hatchet from single blocks in the late seventeenth century. West of Takayama, in the former village of Kiyomi, the workshop Oak Village — founded in 1974 by a group of young people from Tokyo — has a showroom among the trees. See <a href=\"ittobori.html\">Ittōbori</a>, <a href=\"shunkei.html\">Shunkei</a> and <a href=\"houses.html\">makers</a>.",
            ja:"彫刻と漆は、古い町並みの店で見るのがよい。一位一刀彫の彫師が店先の台で仕事をしていることが多く、春慶塗の工房も歩いてすぐである。市の北東の山にある千光寺には、遊行僧円空の像がまとまって残る。十七世紀後半に一本の材から鉈で彫り出されたものである。高山の西、旧清見村では、一九七四年に東京から来た若者たちが興した工房オークヴィレッジが、木立の中にショールームをもっている。<a href=\"ittobori.html\">一刀彫</a>、<a href=\"shunkei.html\">春慶</a>、<a href=\"houses.html\">つくり手</a>を参照。",
            zh:"雕刻與漆器最好在老街的店裡看：一位一刀雕的雕師常在櫥窗邊的工作檯上工作，春慶塗的工坊也在步行可達之處。市區東北山中的千光寺，保存了一大批遊方僧圓空的造像，都是十七世紀後期以柴刀從整塊木料鑿出。高山以西的舊清見村，有 1974 年由一群來自東京的年輕人創立的工坊 Oak Village，其展示館就在林間。見<a href=\"ittobori.html\">一刀雕</a>、<a href=\"shunkei.html\">春慶塗</a>與<a href=\"houses.html\">製作者</a>。" } }
      ] },
    { t:"section",
      id:"hida",
      title:{ en:"Furukawa, Shirakawa-gō and Gero", ja:"古川・白川郷・下呂", zh:"古川、白川鄉與下呂" },
      jp:"飛騨一円",
      body:[
        { t:"p",
          text:{
            en:"<strong>Hida-Furukawa</strong>, fifteen minutes north of Takayama by train, is smaller and quieter, with white-walled storehouses along a canal full of carp. The <strong>Hida Takumi Bunkakan</strong> (Hida Carpenters' Culture Hall), five minutes' walk from the station, was built by local carpenters of Hida timber without a single nail; inside are samples of joints, carpenters' tools and a table where visitors assemble interlocking pieces like a puzzle. Around the courtyard, and on houses all over town, look for the <em>kumo</em> — the cloud shapes carved on the ends of eave brackets, which carpenters used as a signature. The hall opens 9:00–17:00 (to 16:30 from December to March) and closes on Thursdays; admission was ¥300 in 2026. Nearby, the Hidakuma company runs a café and workshop that works with the city's broadleaf trees.",
            ja:"<strong>飛騨古川</strong>は高山から列車で北へ十五分、町は小さく静かで、鯉の泳ぐ水路に白壁の土蔵が並ぶ。駅から歩いて五分の<strong>飛騨の匠文化館</strong>は、地元の大工が飛騨の木で、釘を一本も使わずに建てた。中には継手の見本や大工道具、組木をパズルのように組み立てる台がある。中庭のまわりと町じゅうの家で<em>雲</em>を探してほしい。軒の腕木の木口に刻まれた雲の形で、大工が署名として使ったものである。開館は九時〜十七時（十二月〜三月は十六時半まで）、木曜休館、入館料は二〇二六年に三百円だった。近くでは、株式会社飛騨の森でクマは踊る（ヒダクマ）が、市の広葉樹を使うカフェと工房を営んでいる。",
            zh:"<strong>飛驒古川</strong>在高山北方，搭火車十五分鐘，規模更小也更安靜，白牆土藏沿著滿是鯉魚的水渠排列。距車站步行五分鐘的<strong>飛驒之匠文化館</strong>，由當地木匠以飛驒木材建造，沒有用一根釘子；館內展示榫接樣本、木匠工具，還有一張可讓遊客像拼圖般組裝榫接木塊的桌子。在中庭周圍與鎮上家家戶戶的屋簷下，找找<em>「雲」</em>——刻在出簷托木端部的雲形，是木匠的簽名。開館時間 9:00–17:00（12 月至 3 月至 16:30），週四休館；2026 年門票 300 日圓。附近的 Hidakuma 公司經營一家咖啡館與工坊，運用市內的闊葉樹。" } },
        { t:"p",
          text:{
            en:"<strong>Shirakawa-gō</strong>, about fifty minutes from Takayama by highway bus, is the village of steep thatched <em>gasshō</em> houses inscribed as a World Heritage Site with Gokayama in 1995. The roofs are re-thatched roughly every thirty years by the whole community working together, and the frames are lashed with rope and witch-hazel withies rather than nailed; the Wada house, the largest, is open to visitors and shows the silkworm floors under the roof. The village is crowded by day all year. The winter light-up has become so popular that it is now entirely by advance reservation: in 2026 it was held on only four evenings — 12, 18 and 25 January and 1 February, 17:30–19:30 — reduced, the organisers said, because warmer winters bring less snow. See <a href=\"architecture.html\">architecture</a>.",
            ja:"高山から高速バスで約五十分の<strong>白川郷</strong>は、急勾配の茅葺きの<em>合掌造り</em>の集落で、一九九五年に五箇山とともに世界遺産に登録された。屋根はおよそ三十年ごとに集落の総出で葺き替えられ、骨組みは釘でなく縄とマンサクのネソで結ばれる。最大の和田家は公開されていて、屋根裏の養蚕の床を見せてくれる。村は一年中、昼間は混み合う。冬のライトアップは人気が高まりすぎて、いまは完全な事前予約制である。二〇二六年はわずか四夜——一月十二日、十八日、二十五日、二月一日の十七時半〜十九時半——で、主催者によれば、暖冬で雪が少なくなったために回数を減らしたという。<a href=\"architecture.html\">建築</a>を参照。",
            zh:"從高山搭高速巴士約五十分鐘可達<strong>白川鄉</strong>，這是陡峭茅草屋頂<em>「合掌造」</em>民家的聚落，1995 年與五箇山一同列入世界遺產。屋頂約每三十年由全村合力重新鋪葺，骨架以繩索與金縷梅枝條綁紮，而非釘合；最大的和田家對外開放，可看到屋頂下養蠶的樓層。村子一年四季白天都很擁擠。冬季點燈活動人氣過高，如今已完全採事先預約制：2026 年只舉辦四晚——1 月 12、18、25 日與 2 月 1 日，17:30–19:30——主辦單位表示，由於暖冬降雪減少而縮減場次。見<a href=\"architecture.html\">建築</a>。" } },
        { t:"p",
          text:{
            en:"<strong>Gero</strong>, the hot-spring town on the Hida river an hour south of Takayama, has the <strong>Gero Onsen Gasshō-mura</strong>, a hillside village of ten gasshō houses moved from Shirakawa-gō and from Gokayama in Toyama. Its core, the Ōdo family house, an Important Cultural Property, was moved in 1963; the site opened in April 1964 as a folk museum and took its present name in May 1969. It is a good place to see gasshō framing without the crowds of Shirakawa-gō, open 8:30–17:00, ¥800 for adults (2026). Gero also has two surviving village kabuki theatres, Hōō-za and Hakuun-za.",
            ja:"高山の南一時間、飛騨川沿いの温泉町<strong>下呂</strong>には<strong>下呂温泉合掌村</strong>がある。白川郷と富山県の五箇山から移した十棟の合掌造りが山腹に並ぶ村で、中心となる重要文化財の旧大戸家住宅は一九六三年に移築された。一九六四年四月に民俗館として開き、一九六九年五月にいまの名となった。白川郷の混雑なしに合掌の骨組みを見るのによい場所で、開村は八時半〜十七時、大人八百円（二〇二六年）。下呂には地歌舞伎の芝居小屋、鳳凰座と白雲座も残る。",
            zh:"高山以南一小時、飛驒川畔的溫泉鄉<strong>下呂</strong>，有<strong>下呂溫泉合掌村</strong>：山坡上排列著從白川鄉與富山縣五箇山遷來的十棟合掌造民家。核心建築是列為「重要文化財」的舊大戶家住宅，1963 年遷建；園區於 1964 年 4 月以民俗館之名開放，1969 年 5 月改為現名。這裡能避開白川鄉的人潮，仔細看合掌造的骨架；開放時間 8:30–17:00，成人 800 日圓（2026 年）。下呂還保留兩座地歌舞伎戲棚：鳳凰座與白雲座。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture tourism site (Takayama Jinya); Sakurayama Hachimangū / Wikipedia (Float Exhibition Hall); Hida city tourism (Hida Takumi Bunkakan); Shirakawa village (light-up 2026); Gero Onsen Gasshō-mura. Hours and fees as published in 2026.",
            ja:"出典：岐阜県観光公式サイト（高山陣屋）、桜山八幡宮・Wikipedia（屋台会館）、飛騨市観光（飛騨の匠文化館）、白川村（二〇二六年ライトアップ）、下呂温泉合掌村。時間と料金は二〇二六年の公表による。",
            zh:"資料來源：岐阜縣觀光官網（高山陣屋）；櫻山八幡宮／維基百科（屋台會館）；飛驒市觀光（飛驒之匠文化館）；白川村（2026 年點燈）；下呂溫泉合掌村。時間與票價依 2026 年公告。" } }
      ] },
    { t:"section",
      id:"mino",
      title:{ en:"Mino: paper, lanterns, boats and a castle", ja:"美濃——紙、提灯、舟、城", zh:"美濃：紙、燈籠、船與城" },
      jp:"美濃一円",
      body:[
        { t:"p",
          text:{
            en:"<strong>Gifu city</strong> is the easiest place to start. Its library and civic centre, <strong>Minna no Mori Gifu Media Cosmos</strong> by Toyo Ito, opened on 18 July 2015 under a rolling roof woven from thin laths of Tōnō hinoki, each about 12 centimetres wide and 2 centimetres thick; it is free to enter and the reading room is the best place to see the lattice from below (see <a href=\"building.html\">building</a>). Gifu is also the home of paper lanterns and oiled-paper umbrellas, both national traditional crafts, and of the lantern maker Ozeki, founded in 1891, which has made Isamu Noguchi's AKARI lights since the 1950s. On summer nights from 11 May to 15 October, cormorant fishing on the Nagara is watched from long, flat wooden sightseeing boats moored below Mount Kinka. See <a href=\"paper.html\">paper</a>.",
            ja:"まず<strong>岐阜市</strong>から始めるのがやさしい。伊東豊雄の設計した図書館と市民の施設<strong>みんなの森 ぎふメディアコスモス</strong>は、二〇一五年七月十八日に開いた。うねる屋根は、幅約12センチ、厚さ2センチほどの東濃ヒノキの薄板で編まれている。入館は無料で、格子を下から見るには閲覧室がいちばんよい（<a href=\"building.html\">建てる</a>を参照）。岐阜は、ともに国の伝統的工芸品である提灯と和傘の町でもあり、一八九一年創業の提灯メーカー、オゼキは一九五〇年代からイサム・ノグチのAKARIをつくってきた。五月十一日から十月十五日までの夏の夜、長良川の鵜飼は、金華山の下にもやう細長く平らな木の観覧船から見る。<a href=\"paper.html\">紙</a>を参照。",
            zh:"從<strong>岐阜市</strong>開始最容易。伊東豊雄設計的圖書館兼市民中心<strong>「大家的森林」岐阜媒體中心</strong>（みんなの森 ぎふメディアコスモス）於 2015 年 7 月 18 日開館，起伏的屋頂由寬約 12 公分、厚約 2 公分的東濃檜木薄板編成；免費入館，閱覽室是從下方觀賞木格構的最佳位置（見<a href=\"building.html\">以木建造</a>）。岐阜也是燈籠與和傘之鄉，兩者皆為國家指定傳統工藝品；創立於 1891 年的燈籠廠 Ozeki，自 1950 年代起製作野口勇的 AKARI 燈具。每年 5 月 11 日至 10 月 15 日的夏夜，可在金華山下停泊的細長平底木造觀覽船上觀賞長良川鵜飼（鸕鶿捕魚）。見<a href=\"paper.html\">和紙</a>。" } },
        { t:"p",
          text:{
            en:"<strong>Mino</strong>, an hour or so north by bus or by the Nagaragawa Railway, grew rich on paper. Its merchant street of raised firewalls (<em>udatsu</em>) — a show of wealth as much as a barrier against fire — was selected as an Important Preservation District in 1999, and every October it hosts the Mino Washi Akari Art Exhibition of paper lights. The Mino Washi no Sato Kaikan, in the papermaking hamlet up the Itadori river, has a museum and a papermaking workshop for visitors (9:00–17:00, closed Tuesdays, ¥500 for adults in 2026). <strong>Gujō Hachiman</strong>, further up the Nagara, is a town of clear water channels whose castle keep, rebuilt in wood in 1933, is described as the oldest wooden reconstructed castle in Japan; in the dance season the whole town dances on the streets in wooden <em>geta</em>. <strong>Seki</strong>, the blade town between them, opens its sword-forging demonstrations at the Seki Kaji Denshōkan on the first Sunday of most months and at the Blade Festival in October; the monk Enkū, whose hatchet-cut statues fill temples across Gifu, died near Seki in 1695.",
            ja:"バスか長良川鉄道で北へ一時間ほどの<strong>美濃市</strong>は、紙で富を築いた町である。<em>うだつ</em>——防火壁であると同時に富を示すもの——の上がる商家の通りは一九九九年に重要伝統的建造物群保存地区に選ばれ、毎年十月には紙のあかりの展覧会、美濃和紙あかりアート展が開かれる。板取川をさかのぼった紙漉きの集落にある美濃和紙の里会館には、展示と、旅人が紙を漉ける工房がある（九時〜十七時、火曜休館、二〇二六年に大人五百円）。さらに長良川をさかのぼった<strong>郡上八幡</strong>は澄んだ水路の町で、一九三三年に木造で再建された天守は、日本最古の木造再建城とされる。踊りの季節には、町じゅうが木の<em>下駄</em>で通りを踊る。その間にある刃物の町<strong>関</strong>では、関鍛冶伝承館が多くの月の第一日曜と十月の刃物まつりに日本刀鍛錬を公開する。岐阜じゅうの寺を鉈彫りの像で満たした円空は、一六九五年に関の近くで没した。",
            zh:"搭巴士或長良川鐵道往北約一小時可達<strong>美濃市</strong>，這座小鎮靠和紙致富。立有高聳防火牆「<em>卯建</em>」（うだつ）的商家街道——既是防火屏障，也是財富的展示——於 1999 年被選為重要傳統建造物群保存地區，每年 10 月舉辦紙燈作品展「美濃和紙燈光藝術展」。沿板取川上溯的抄紙聚落裡，「美濃和紙之里會館」設有展示與供遊客體驗抄紙的工房（9:00–17:00，週二休館，2026 年成人 500 日圓）。再沿長良川往上游是<strong>郡上八幡</strong>，一座清澈水道縱橫的小鎮；城堡天守於 1933 年以木造重建，據稱是日本最古老的木造重建城堡；舞蹈季節裡，全鎮居民穿著木屐在街上起舞。兩地之間的刀具之城<strong>關市</strong>，關鍛冶傳承館在多數月份的第一個週日及 10 月的刀具節公開日本刀鍛造示範；以柴刀雕像遍布岐阜各寺的僧人圓空，於 1695 年圓寂於關市附近。" } },
        { t:"p",
          text:{
            en:"<strong>Ōgaki</strong>, on the western plain, makes most of Japan's wooden <em>masu</em> measures from Tōnō and Kiso hinoki; the Masu Kōbō Masuya shop, about fifteen minutes' walk from the station, runs a 45-minute assembly workshop for two or more people, bookable at least a week ahead and not offered from November to January (see <a href=\"masu.html\">masu</a>). <strong>Kani</strong>, east of Gifu on the Kiso, is the home of K. Yairi, whose guitar workshop gives free guided tours on Saturdays by reservation (see <a href=\"yairi.html\">Yairi</a>).",
            ja:"西の平野の<strong>大垣</strong>は、東濃と木曽のヒノキで日本の木の<em>枡</em>の大半をつくる。駅から歩いて十五分ほどの枡工房ますやでは、二人以上で四十五分の枡の組み立て体験ができる。一週間前までに予約が要り、十一月から一月は行わない（<a href=\"masu.html\">枡</a>を参照）。岐阜の東、木曽川沿いの<strong>可児</strong>にはヤイリギターがあり、工房は土曜日に予約制の無料案内つき見学を行っている（<a href=\"yairi.html\">ヤイリ</a>を参照）。",
            zh:"西部平原上的<strong>大垣</strong>以東濃與木曾檜木製作日本大部分的木<em>枡</em>（量酒木盒）；距車站步行約十五分鐘的「枡工房 Masuya」提供兩人以上、45 分鐘的枡組裝體驗，須至少一週前預約，11 月至 1 月不開放（見<a href=\"masu.html\">枡</a>）。岐阜以東、木曾川畔的<strong>可兒</strong>是 K.Yairi 的所在地，吉他工坊每週六提供預約制免費導覽（見<a href=\"yairi.html\">矢入</a>）。" } }
      ] },
    { t:"section",
      id:"tono",
      title:{ en:"Nakatsugawa and the hinoki villages", ja:"中津川とヒノキの里", zh:"中津川與檜木之鄉" },
      jp:"東濃・裏木曽",
      body:[
        { t:"p",
          text:{
            en:"The forests that supply Ise lie north of <strong>Nakatsugawa</strong>, an hour and a quarter from Nagoya on the Chūō line, in the valleys of <strong>Tsukechi</strong> and <strong>Kashimo</strong>. In Kashimo the forest cooperative's Mokumoku Centre sells hinoki furniture, bentwood boxes, kitchenware and essential oil and runs chopstick-making sessions, and the village theatre, Kashimo Meiji-za of 1894, still stages farmers' kabuki each September. The <strong>Kiso Hinoki Reserve Forest</strong> above the village — about 730 hectares of natural hinoki and sawara 300 to 400 years old, with a hinoki of about 1,000 years — is national forest; the practical way in is a guided walking tour of the Ura-Kiso forest organised locally, which also shows the traditional three-cut felling used for Ise timber. The <strong>Tsukechi gorge</strong>, with its waterfalls and pools, is at its best in the autumn colours. See <a href=\"hinoki.html\">hinoki</a> and <a href=\"fivetrees.html\">the five trees</a>.",
            ja:"伊勢の御用材を出す森は、名古屋から中央本線で一時間十五分ほどの<strong>中津川</strong>の北、<strong>付知</strong>と<strong>加子母</strong>の谷にある。加子母では、森林組合のモクモクセンターがヒノキの家具、曲物、台所道具、精油を売り、箸づくりの体験を行っている。一八九四年の村の芝居小屋かしも明治座では、いまも毎年九月に地歌舞伎が演じられる。村の上の<strong>木曽ヒノキ備林</strong>——樹齢三百〜四百年の天然のヒノキとサワラが約730ヘクタール、樹齢約千年のヒノキもある——は国有林で、実際に入るには地元が催す裏木曽の森のガイドつきウォーキングツアーに加わるのがよい。伊勢の御用材に使われる伝統の三ツ緒伐りも見せてくれる。滝と淵のつづく<strong>付知峡</strong>は紅葉の季節がいちばん美しい。<a href=\"hinoki.html\">ヒノキ</a>と<a href=\"fivetrees.html\">木曽五木</a>を参照。",
            zh:"供應伊勢神宮的森林，位於從名古屋搭中央本線約一小時十五分的<strong>中津川</strong>以北、<strong>付知</strong>與<strong>加子母</strong>的河谷中。在加子母，森林組合的「Mokumoku 中心」販售檜木家具、曲物便當盒、廚具與精油，並舉辦筷子製作體驗；1894 年的村落戲棚「加子母明治座」至今每年 9 月仍上演地歌舞伎（農村歌舞伎）。村子上方的<strong>木曾檜木備林</strong>——約 730 公頃、樹齡 300 至 400 年的天然檜木與花柏，還有一株約千年的檜木——屬國有林；實際入林的方式是參加當地舉辦的裏木曾森林導覽健行，行程中也會介紹為伊勢御用材採用的傳統「三緒伐」伐木法。瀑布與深潭相連的<strong>付知峽</strong>，以紅葉季最美。見<a href=\"hinoki.html\">檜木</a>與<a href=\"fivetrees.html\">木曾五木</a>。" } },
        { t:"p",
          text:{
            en:"Nakatsugawa is also a guitar town. Takamine, founded in 1959 in Sakashita, now part of the city, had opened a showroom in Nakatsugawa by 2025; its website describes a factory tour, but the conditions are not published in detail, so ask the company well in advance rather than arriving unannounced (see <a href=\"takamine.html\">Takamine</a>). The next great moment for the hinoki villages is the Ise shrine rebuilding: the ceremonial hauling of timber (<em>okihiki</em>) takes place at Ise in 2026 and 2027, before the transfer of the deity in 2033.",
            ja:"中津川はギターの町でもある。一九五九年に、いまは市の一部である坂下で創業したタカミネは、二〇二五年までに中津川にショールームを開いた。ウェブサイトには工場見学の案内があるが、条件は詳しく公表されていないので、いきなり訪ねるのでなく、早めに会社に問い合わせたい（<a href=\"takamine.html\">タカミネ</a>を参照）。ヒノキの里にとって次の大きな節目は伊勢神宮の式年遷宮である。御用材を曳くお木曳は二〇二六年と二〇二七年に伊勢で行われ、遷御は二〇三三年である。",
            zh:"中津川也是吉他之城。1959 年創立於坂下（今屬中津川市）的 Takamine，至 2025 年已在中津川開設展示間；官網雖有工廠參觀的說明，但條件並未詳細公布，請務必提早向公司洽詢，不要臨時登門（見<a href=\"takamine.html\">Takamine</a>）。檜木之鄉的下一個重大時刻是伊勢神宮的式年遷宮：運送御用材的「御木曳」於 2026 年與 2027 年在伊勢舉行，遷御則在 2033 年。" } }
      ] },
    { t:"section",
      id:"glance",
      title:{ en:"Places at a glance", ja:"一覧", zh:"地點一覽" },
      jp:"訪ね先",
      body:[
        { t:"table",
          keyCol:true,
          caption:{
            en:"Wood-related places to visit in Gifu (check hours before going)",
            ja:"岐阜の木にまつわる訪ね先（出かける前に時間を確かめること）",
            zh:"岐阜與木相關的參訪地點（出發前請確認開放時間）" },
          cols:[{ en:"Town", ja:"町", zh:"城鎮" }, { en:"What", ja:"何を", zh:"看什麼" }, { en:"Notes", ja:"覚え書き", zh:"備註" }],
          rows:[
            [
              { en:"Takayama", ja:"高山", zh:"高山" },
              { en:"Old town, Jinya, Kusakabe & Yoshijima houses", ja:"古い町並み、陣屋、日下部家・吉島家", zh:"老街、陣屋、日下部家與吉島家" },
              { en:"Go early; morning markets", ja:"朝早く。朝市", zh:"清晨前往；早市" }
            ],
            [
              { en:"Takayama", ja:"高山", zh:"高山" },
              { en:"Float Exhibition Hall; float storehouses", ja:"屋台会館、屋台蔵", zh:"屋台會館、屋台倉" },
              { en:"Four floats on show, rotated", ja:"四台を展示、入れ替えあり", zh:"展出四座，定期輪換" }
            ],
            [
              { en:"Takayama", ja:"高山", zh:"高山" },
              { en:"Hida Folk Village; furniture showrooms", ja:"飛騨の里、家具ショールーム", zh:"飛驒之里、家具展示館" },
              { en:"Factory tours by reservation", ja:"工場見学は予約制", zh:"工廠參觀須預約" }
            ],
            [
              { en:"Hida-Furukawa", ja:"飛騨古川", zh:"飛驒古川" },
              { en:"Hida Takumi Bunkakan; kumo on eaves", ja:"飛騨の匠文化館、軒の雲", zh:"飛驒之匠文化館、簷下雲紋" },
              { en:"Closed Thursdays", ja:"木曜休館", zh:"週四休館" }
            ],
            [
              { en:"Shirakawa-gō", ja:"白川郷", zh:"白川鄉" },
              { en:"Gasshō houses; Wada house", ja:"合掌造り、和田家", zh:"合掌造、和田家" },
              { en:"Winter light-up by reservation only", ja:"冬のライトアップは完全予約制", zh:"冬季點燈完全預約制" }
            ],
            [
              { en:"Gero", ja:"下呂", zh:"下呂" },
              { en:"Gasshō-mura; kabuki theatres", ja:"合掌村、芝居小屋", zh:"合掌村、歌舞伎戲棚" },
              { en:"Ten relocated gasshō houses", ja:"移築した合掌造り十棟", zh:"遷建合掌造十棟" }
            ],
            [
              { en:"Gifu", ja:"岐阜", zh:"岐阜" },
              {
                en:"Media Cosmos; lanterns, umbrellas; cormorant boats",
                ja:"メディアコスモス、提灯・和傘、鵜飼の観覧船",
                zh:"媒體中心；燈籠、和傘；鵜飼觀覽船" },
              { en:"Cormorant fishing 11 May–15 Oct", ja:"鵜飼は五月十一日〜十月十五日", zh:"鵜飼 5 月 11 日至 10 月 15 日" }
            ],
            [
              { en:"Mino", ja:"美濃", zh:"美濃" },
              { en:"Udatsu street; Washi no Sato Kaikan", ja:"うだつの町並み、美濃和紙の里会館", zh:"卯建街道；美濃和紙之里會館" },
              { en:"Papermaking by visitors", ja:"紙漉き体験", zh:"可體驗抄紙" }
            ],
            [
              { en:"Gujō Hachiman", ja:"郡上八幡", zh:"郡上八幡" },
              { en:"Wooden castle keep; dance streets", ja:"木造の天守、踊りの町", zh:"木造天守、舞蹈街道" },
              { en:"Nagara sugi country", ja:"長良杉の産地", zh:"長良杉產地" }
            ],
            [
              { en:"Seki", ja:"関", zh:"關" },
              { en:"Sword forging; Enkū", ja:"日本刀鍛錬、円空", zh:"日本刀鍛造、圓空" },
              { en:"Demonstrations on set days", ja:"公開は決まった日", zh:"示範於固定日期" }
            ],
            [
              { en:"Ōgaki", ja:"大垣", zh:"大垣" },
              { en:"Masu workshop", ja:"枡の工房", zh:"枡工坊" },
              { en:"Book a week ahead", ja:"一週間前までに予約", zh:"須一週前預約" }
            ],
            [
              { en:"Kani", ja:"可児", zh:"可兒" },
              { en:"K. Yairi guitar workshop", ja:"ヤイリギターの工房", zh:"K.Yairi 吉他工坊" },
              { en:"Saturday tours, reservation", ja:"土曜見学、予約制", zh:"週六導覽，須預約" }
            ],
            [
              { en:"Nakatsugawa", ja:"中津川", zh:"中津川" },
              { en:"Takamine showroom; Kashimo, Tsukechi", ja:"タカミネのショールーム、加子母・付知", zh:"Takamine 展示間；加子母、付知" },
              { en:"Reserve forest by guided tour", ja:"備林はガイドツアーで", zh:"備林須隨導覽進入" }
            ]
          ] }
      ] },
    { t:"section",
      id:"seasons",
      title:{ en:"When to go", ja:"いつ行くか", zh:"何時前往" },
      jp:"季節と祭り",
      body:[
        { t:"p",
          text:{
            en:"Every season has something for a wood-minded traveller, but the calendar is shaped by festivals and snow. The two Takayama festivals, on 14–15 April and 9–10 October, bring the carved floats into the streets; the Furukawa festival follows on 19–20 April with its night-time drum procession, <em>okoshi-daiko</em>. Both are part of the UNESCO listing of Japan's float festivals made in 2016. Hotels in Takayama fill months in advance for festival days. In 2026 Gujō Odori ran for thirty nights, from 11 July to 5 September, with all-night dancing from 13 to 16 August. Summer is also the season of the cormorant boats in Gifu; October brings the paper lights to Mino and the Blade Festival to Seki; autumn colours move down from the Hida mountains in October to the Mino hills in November. Winter is quiet, cold and beautiful, with snow on the gasshō roofs and the Shirakawa-gō light-up — but mountain roads close and buses thin out.",
            ja:"木に心を寄せる旅人にはどの季節にも見るものがあるが、暦を形づくるのは祭りと雪である。四月十四〜十五日と十月九〜十日の二つの高山祭では、彫刻を施した屋台が通りに出る。四月十九〜二十日には古川祭が続き、夜の太鼓行列、<em>起し太鼓</em>がある。いずれも二〇一六年のユネスコの山・鉾・屋台行事の登録に含まれる。祭りの日の高山の宿は何か月も前に埋まる。二〇二六年の郡上おどりは七月十一日から九月五日までの三十夜で、八月十三日から十六日は徹夜おどりだった。夏は岐阜の鵜飼の季節でもある。十月には美濃に紙のあかりがともり、関では刃物まつりがある。紅葉は十月に飛騨の山から、十一月に美濃の丘へと下りてくる。冬は静かで寒く、美しい。合掌の屋根に雪が積もり、白川郷のライトアップがある——ただし山の道は閉ざされ、バスは減る。",
            zh:"對愛木的旅人來說，每個季節都有可看之處，但行事曆是由祭典與雪決定的。4 月 14–15 日與 10 月 9–10 日的兩場高山祭，雕飾華麗的屋台會開上街頭；4 月 19–20 日接著是古川祭，有夜間的太鼓遊行「<em>起太鼓</em>」。兩者都包含在 2016 年聯合國教科文組織登錄的日本「山・鉾・屋台行事」之中。高山在祭典期間的住宿往往數月前就客滿。2026 年的郡上舞從 7 月 11 日跳到 9 月 5 日，共三十夜，8 月 13 日至 16 日為通宵舞。夏天也是岐阜鵜飼的季節；10 月美濃點亮紙燈，關市舉辦刀具節；紅葉則在 10 月從飛驒山區、11 月到美濃丘陵一路南下。冬天安靜、寒冷而美麗，合掌屋頂覆雪，還有白川鄉點燈——但山路封閉，巴士班次減少。" } },
        { t:"figure",
          caption:{
            en:"A wood-lover's year in Gifu: main festivals, events and seasons. Schematic; fixed-date festivals from the organisers, 2026 dates for Gujō Odori and the Shirakawa-gō light-up (four evenings in January–February), seasons typical and variable by altitude and year.",
            ja:"木を好む旅人のための岐阜の一年——おもな祭り、催し、季節（模式図）。日の決まった祭りは主催者による。郡上おどりと白川郷ライトアップ（一月〜二月の四夜）は二〇二六年の日程。季節は典型的なもので、標高と年によって変わる。",
            zh:"愛木旅人的岐阜一年：主要祭典、活動與季節（示意圖）。固定日期的祭典依主辦單位資料；郡上舞與白川鄉點燈（1 月至 2 月共四晚）為 2026 年日程；季節為典型情況，隨海拔與年份而異。" },
          svg:function(lang, L){ return GIFU.fig.year(lang, L, {
            title:{ en:"A year of visits", ja:"訪ねる一年", zh:"造訪的一年" }, labelW:150,
            rows:[
              { en:"Hida festivals", ja:"飛騨の祭り", zh:"飛驒祭典" },
              { en:"Mino, Gujō, Seki", ja:"美濃・郡上・関", zh:"美濃、郡上、關" },
              { en:"Gifu city", ja:"岐阜市", zh:"岐阜市" },
              { en:"Snow country", ja:"雪国", zh:"雪國" },
              { en:"Forest seasons", ja:"森の季節", zh:"森林季節" },
              { en:"Makers & stages", ja:"つくり手と舞台", zh:"製作者與舞台" }
            ],
            items:[
              { row:0, m0:4, m1:4, n:{ en:"Takayama, Furukawa", ja:"高山・古川", zh:"高山、古川" }, f:"#E6E2EC" },
              { row:0, m0:10, m1:10, n:{ en:"Takayama", ja:"高山", zh:"高山" }, f:"#E6E2EC" },
              { row:1, m0:7, m1:9, n:{ en:"Gujō Odori", ja:"郡上おどり", zh:"郡上舞" }, f:"#EADCC1" },
              { row:1, m0:10, m1:10, n:{ en:"paper lights, blades", ja:"あかり・刃物", zh:"紙燈、刀具" }, f:"#EDE5D2" },
              { row:2, m0:5, m1:10, n:{ en:"cormorant fishing on the Nagara", ja:"長良川の鵜飼", zh:"長良川鵜飼" }, f:"#E0E7E9" },
              { row:3, m0:12, m1:12, n:"", f:"#E9ECEE" },
              { row:3, m0:1, m1:3, n:{ en:"snow, light-up; roads close", ja:"雪、ライトアップ、道路閉鎖", zh:"降雪、點燈；封路" }, f:"#E9ECEE" },
              { row:4, m0:5, m1:6, n:{ en:"fresh green", ja:"新緑", zh:"新綠" }, f:"#E0E6DB" },
              { row:4, m0:10, m1:11, n:{ en:"autumn colour", ja:"紅葉", zh:"紅葉" }, f:"#EEE1DF" },
              { row:5, m0:6, m1:6, n:{ en:"furniture", ja:"家具", zh:"家具" }, f:"#E7DFD2" },
              { row:5, m0:9, m1:9, n:{ en:"Kashimo kabuki", ja:"加子母歌舞伎", zh:"加子母歌舞伎" }, f:"#F0EDE4" }
            ] }); } },
        { t:"table",
          caption:{
            en:"Festivals and events for the wood-minded (dates as published for 2026 or fixed by tradition)",
            ja:"木に心を寄せる旅人のための祭りと催し（二〇二六年の公表日程、または慣例の固定日）",
            zh:"給愛木旅人的祭典與活動（2026 年公告日程或傳統固定日期）" },
          cols:[
            { en:"When", ja:"時期", zh:"時間" },
            { en:"Event", ja:"催し", zh:"活動" },
            { en:"What to see", ja:"見どころ", zh:"看點" }
          ],
          rows:[
            [
              { en:"Jan–Feb (4 evenings)", ja:"一〜二月（四夜）", zh:"1–2 月（四晚）" },
              { en:"Shirakawa-gō light-up", ja:"白川郷ライトアップ", zh:"白川鄉點燈" },
              { en:"Lit gasshō roofs in snow; reservation only", ja:"雪の合掌屋根の灯り。予約制", zh:"雪中點亮的合掌屋頂；限預約" }
            ],
            [
              { en:"14–15 Apr", ja:"四月十四〜十五日", zh:"4 月 14–15 日" },
              { en:"Takayama spring festival", ja:"春の高山祭（山王祭）", zh:"春季高山祭（山王祭）" },
              { en:"Twelve floats, karakuri puppets", ja:"屋台十二台、からくり", zh:"十二座屋台、機關人偶" }
            ],
            [
              { en:"19–20 Apr", ja:"四月十九〜二十日", zh:"4 月 19–20 日" },
              { en:"Furukawa festival", ja:"古川祭", zh:"古川祭" },
              { en:"Floats; night drum procession", ja:"屋台、起し太鼓", zh:"屋台；夜間起太鼓" }
            ],
            [
              { en:"11 May–15 Oct", ja:"五月十一日〜十月十五日", zh:"5 月 11 日至 10 月 15 日" },
              { en:"Nagara cormorant fishing", ja:"長良川鵜飼", zh:"長良川鵜飼" },
              { en:"Wooden boats by firelight", ja:"篝火と木の舟", zh:"篝火與木船" }
            ],
            [
              { en:"June (17–21 in 2026)", ja:"六月（二〇二六年は十七〜二十一日）", zh:"6 月（2026 年為 17–21 日）" },
              { en:"Hida furniture festival", ja:"飛騨の家具フェスティバル", zh:"飛驒家具節" },
              { en:"New work across Takayama", ja:"高山各所で新作", zh:"高山各處展出新作" }
            ],
            [
              { en:"11 Jul–5 Sep (2026)", ja:"七月十一日〜九月五日（二〇二六年）", zh:"7 月 11 日至 9 月 5 日（2026 年）" },
              { en:"Gujō Odori", ja:"郡上おどり", zh:"郡上舞" },
              { en:"Dancing in geta; all night 13–16 Aug", ja:"下駄の踊り、八月十三〜十六日は徹夜", zh:"穿木屐跳舞；8 月 13–16 日通宵" }
            ],
            [
              { en:"September", ja:"九月", zh:"9 月" },
              { en:"Kashimo kabuki", ja:"加子母歌舞伎", zh:"加子母歌舞伎" },
              { en:"Village theatre of 1894", ja:"一八九四年の芝居小屋", zh:"1894 年的村落戲棚" }
            ],
            [
              { en:"9–10 Oct", ja:"十月九〜十日", zh:"10 月 9–10 日" },
              { en:"Takayama autumn festival", ja:"秋の高山祭（八幡祭）", zh:"秋季高山祭（八幡祭）" },
              { en:"Eleven floats", ja:"屋台十一台", zh:"十一座屋台" }
            ],
            [
              { en:"October", ja:"十月", zh:"10 月" },
              { en:"Mino Washi Akari Art; Seki Blade Festival", ja:"美濃和紙あかりアート展、関刃物まつり", zh:"美濃和紙燈光藝術展；關刀具節" },
              { en:"Paper lights; sword forging", ja:"紙のあかり、鍛錬", zh:"紙燈；刀劍鍛造" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Takayama and Hida city tourism (festivals); Gujō Hachiman Tourism Association (2026 schedule); Shirakawa village; Seki city (forging demonstrations); Hida furniture festival (2026). Dates move with weekends and weather.",
            ja:"出典：高山市・飛騨市観光（祭り）、郡上八幡観光協会（二〇二六年日程）、白川村、関市（鍛錬公開）、飛騨の家具フェスティバル（二〇二六年）。日程は曜日や天候によって動く。",
            zh:"資料來源：高山市、飛驒市觀光（祭典）；郡上八幡觀光協會（2026 年日程）；白川村；關市（鍛造示範）；飛驒家具節（2026 年）。日期會隨週末與天候調整。" } }
      ] },
    { t:"section",
      id:"practical",
      title:{ en:"Practical notes", ja:"実用の覚え書き", zh:"實用提醒" },
      jp:"心得",
      body:[
        { t:"ul",
          items:[
            {
              en:"<strong>Hours change.</strong> Many museums close one weekday (often Tuesday or Thursday) and over the New Year; winter hours are shorter; workshops close for holidays and deliveries. Check the day before.",
              ja:"<strong>時間は変わる。</strong>多くの博物館は平日に一日（火曜か木曜が多い）と年末年始に休む。冬は時間が短く、工房は休日や納品で閉まる。前の日に確かめる。",
              zh:"<strong>開放時間會變。</strong>許多博物館每週有一個平日公休（多為週二或週四），年末年始也休館；冬季時間較短；工坊會因假日或交貨而關閉。前一天務必確認。" },
            {
              en:"<strong>Reserve factory tours.</strong> Guitar and furniture workshops are working factories; tours are small, scheduled and usually in Japanese.",
              ja:"<strong>工場見学は予約する。</strong>ギターや家具の工房は稼働中の工場であり、見学は少人数、日時が決まっていて、ふつう日本語で行われる。",
              zh:"<strong>工廠參觀要預約。</strong>吉他與家具工坊是運作中的工廠；導覽人數少、時段固定，通常以日語進行。" },
            {
              en:"<strong>Carry cash.</strong> Small craft shops, temple halls and rural buses may not take cards.",
              ja:"<strong>現金を持つ。</strong>小さな工芸の店、寺のお堂、山間のバスではカードが使えないことがある。",
              zh:"<strong>攜帶現金。</strong>小型工藝店、寺院殿堂與山區巴士可能不收信用卡。" },
            {
              en:"<strong>Taking wood home.</strong> Lacquered and finished pieces travel easily; unfinished raw-wood items may need a plant-quarantine certificate for Taiwan, and bark or branches are not allowed. See <a href=\"buying.html\">buying</a>.",
              ja:"<strong>木を持ち帰る。</strong>漆塗りや塗装した品は問題なく持ち帰れるが、塗装していない白木の品は台湾へ入れるのに植物検疫証明書が要ることがあり、樹皮や枝は持ち込めない。<a href=\"buying.html\">買う</a>を参照。",
              zh:"<strong>把木器帶回家。</strong>上漆或已塗裝的器物攜帶方便；未塗裝的原木製品入境台灣可能須附植物檢疫證明書，樹皮與枝條則禁止攜入。見<a href=\"buying.html\">選購</a>。" },
            {
              en:"<strong>Festival seasons.</strong> Book Takayama in April and October, and Gujō in mid-August, as early as you can; consider staying in Gifu, Gero or Toyama and travelling in.",
              ja:"<strong>祭りの季節。</strong>四月と十月の高山、八月中旬の郡上は、できるだけ早く宿をとる。岐阜、下呂、富山に泊まって通うのも手である。",
              zh:"<strong>祭典期間。</strong>4 月與 10 月的高山、8 月中旬的郡上，請儘早訂房；也可考慮住在岐阜、下呂或富山再前往。" }
          ] }
      ] },
    { t:"related",
      items:[
        { href:"woodjourneys.html",
          why:{ en:"Five itineraries built on these places.", ja:"これらの場所をつなぐ五つの旅程。", zh:"串起這些地點的五條行程。" } },
        { href:"provinces.html", why:{ en:"The shape of the land you will cross.", ja:"通り抜ける土地のかたち。", zh:"你將穿越的土地樣貌。" } },
        { href:"floats.html",
          why:{ en:"The festival floats of Takayama and Furukawa.", ja:"高山と古川の祭屋台。", zh:"高山與古川的祭典屋台。" } },
        { href:"buying.html",
          why:{ en:"Buying wooden things and taking them home.", ja:"木のものを買い、持ち帰る。", zh:"購買木器並帶回家。" } },
        { href:"taiwan.html",
          why:{ en:"Gifu and Taiwan: timber, trees and travellers.", ja:"岐阜と台湾——材木、樹木、旅人。", zh:"岐阜與台灣：木材、樹木與旅人。" } }
      ] }
  ] };

/* ---- ------------------------------------------ journeys */
GIFU.pages["journeys"] = {
  kicker: { en:"Journeys · 03", ja:"旅 · 03", zh:"旅程 · 03" },
  title:  { en: "Five Journeys", ja: "五つの旅", zh: "五段旅程" },
  jp: "長良川 · 飛騨 · 中山道 · 檜の道 · 西の平野",
  lede: {
    en: "Five routes that string the places of this book together, each following something the prefecture is made of: a river, a mountain province, an old road, the path of the timber and the edge of the plain. Each can be done by train and bus in two to four days, and each is written as a sequence of stops with the pages that explain them. Timetables, opening days and festival dates change; check them before you travel.",
    ja: "本書の土地を、県をかたちづくるもの——一本の川、山の国、古い街道、木の運ばれた道、平野のへり——に沿ってつなぐ五つの道筋。いずれも鉄道とバスで二日から四日で回れ、立ち寄る場所と、それを説く頁とを順に記した。時刻表、開館日、祭りの日取りは変わるので、出かける前に確かめてほしい。",
    zh: "五條把本書各地串連起來的路線，各自沿著構成這個縣的某樣東西前進：一條河、一個山國、一條古道、木材走過的路，以及平原的邊緣。每條都可以搭火車與巴士在兩到四天內走完，並依序列出停留地點與說明它們的頁面。時刻表、開館日與祭典日期都會變動，出發前請先確認。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The five journeys on a schematic map of the prefecture. Positions are approximate and distances are not to scale; the routes follow the railways and roads described below.",
        ja:"県の模式図の上の五つの旅。位置はおおよそで、距離は縮尺どおりではない。道筋は下に記した鉄道と道路に沿う。",
        zh:"標示在全縣示意圖上的五段旅程。位置為概略，距離未按比例；路線依下文所述的鐵路與道路而行。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var P = {
          shirakawa:[372,70,{en:"Shirakawa-gō",ja:"白川郷",zh:"白川鄉"}],
          furukawa:[470,96,{en:"Furukawa",ja:"古川",zh:"古川"}],
          takayama:[500,138,{en:"Takayama",ja:"高山",zh:"高山"}],
          okuhida:[626,120,{en:"Oku-Hida",ja:"奥飛騨",zh:"奧飛驒"}],
          gero:[486,222,{en:"Gero",ja:"下呂",zh:"下呂"}],
          gujo:[332,238,{en:"Gujō Hachiman",ja:"郡上八幡",zh:"郡上八幡"}],
          mino:[318,292,{en:"Mino",ja:"美濃",zh:"美濃"}],
          seki:[302,322,{en:"Seki",ja:"関",zh:"關"}],
          gifu:[246,346,{en:"Gifu",ja:"岐阜",zh:"岐阜"}],
          ogaki:[176,356,{en:"Ōgaki",ja:"大垣",zh:"大垣"}],
          tarui:[136,346,{en:"Tarui",ja:"垂井",zh:"垂井"}],
          sekigahara:[98,352,{en:"Sekigahara",ja:"関ケ原",zh:"關原"}],
          yoro:[146,400,{en:"Yōrō",ja:"養老",zh:"養老"}],
          kaizu:[188,428,{en:"Kaizu",ja:"海津",zh:"海津"}],
          ibi:[146,286,{en:"Tanigumi",ja:"谷汲",zh:"谷汲"}],
          ota:[372,344,{en:"Minokamo",ja:"美濃加茂",zh:"美濃加茂"}],
          kani:[404,370,{en:"Kani",ja:"可児",zh:"可兒"}],
          yaotsu:[440,336,{en:"Yaotsu",ja:"八百津",zh:"八百津"}],
          mitake:[440,384,{en:"Mitake",ja:"御嵩",zh:"御嵩"}],
          hosokute:[498,392,{en:"Hosokute",ja:"細久手",zh:"細久手"}],
          tajimi:[446,420,{en:"Tajimi",ja:"多治見",zh:"多治見"}],
          ena:[560,376,{en:"Ena",ja:"恵那",zh:"惠那"}],
          iwamura:[574,414,{en:"Iwamura",ja:"岩村",zh:"岩村"}],
          nakatsugawa:[622,358,{en:"Nakatsugawa",ja:"中津川",zh:"中津川"}],
          magome:[668,336,{en:"Magome",ja:"馬籠",zh:"馬籠"}],
          kashimo:[618,280,{en:"Kashimo",ja:"加子母",zh:"加子母"}],
          sakashita:[660,306,{en:"Sakashita",ja:"坂下",zh:"坂下"}]
        };
        var routes = [
          { n:1, c:"#5E7780", dash:"",    pts:["gujo","mino","seki","gifu"] },
          { n:2, c:"#6F8A5E", dash:"",    pts:["gero","takayama","furukawa","shirakawa"] },
          { n:2, c:"#6F8A5E", dash:"4 3", pts:["takayama","okuhida"] },
          { n:3, c:"#7C6B52", dash:"",    pts:["magome","nakatsugawa","ena","hosokute","mitake","ota","gifu","ogaki","tarui","sekigahara"] },
          { n:3, c:"#7C6B52", dash:"4 3", pts:["ena","iwamura"] },
          { n:4, c:"#A0766A", dash:"", pts:["kashimo","sakashita","nakatsugawa","yaotsu","kani","tajimi"] },
          { n:5, c:"#8B857C", dash:"", pts:["ibi","ogaki","yoro","kaizu"] }
        ];
        var s = '<svg viewBox="0 0 760 470" role="img" aria-label="Schematic map of five journeys through Gifu">' +
          '<rect x="0.5" y="0.5" width="759" height="469" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FIVE JOURNEYS", ja:"五つの旅", zh:"五段旅程" }) + '</text>';
        /* the two provinces, very roughly */
        s += '<path d="M300,48 L700,48 L712,190 L640,250 L420,262 L300,212 Z" fill="#E0E6DB" stroke="#CDC6B9"/>' +
             '<path d="M300,212 L420,262 L640,250 L712,190 L720,440 L240,450 L150,450 L70,380 L80,300 L200,230 Z" fill="#F0EDE4" stroke="#CDC6B9"/>' +
             '<text x="690" y="70" text-anchor="end" ' + F + ' font-size="10.5" fill="#55504A" letter-spacing="1.6" font-weight="600">' + L({ en:"HIDA", ja:"飛騨", zh:"飛驒" }) + '</text>' +
             '<text x="90" y="438" ' + F + ' font-size="10.5" fill="#55504A" letter-spacing="1.6" font-weight="600">' + L({ en:"MINO", ja:"美濃", zh:"美濃" }) + '</text>';
        routes.forEach(function (r) {
          var d = r.pts.map(function (k, i) { return (i ? "L" : "M") + P[k][0] + "," + P[k][1]; }).join(" ");
          s += '<path d="' + d + '" fill="none" stroke="' + r.c + '" stroke-width="2.6"' + (r.dash ? ' stroke-dasharray="' + r.dash + '"' : '') + ' stroke-linejoin="round"/>';
        });
        var off = { furukawa:[8,-6], shirakawa:[-8,-8,"end"], gero:[8,4], gujo:[-8,-6,"end"], mino:[-8,2,"end"], seki:[-8,10,"end"],
                    gifu:[-4,16,"end"], ogaki:[6,-8], tarui:[0,-9,"middle"], sekigahara:[-6,14,"middle"], yoro:[-8,4,"end"], kaizu:[8,4],
                    ibi:[-8,-6,"end"], ota:[0,-9,"middle"], kani:[-6,14,"end"], yaotsu:[8,-4], mitake:[4,14,"middle"], hosokute:[6,14,"middle"],
                    tajimi:[8,6], ena:[0,-9,"middle"], iwamura:[8,6], nakatsugawa:[8,14], magome:[8,4], kashimo:[8,-4], sakashita:[8,4],
                    takayama:[-8,4,"end"], okuhida:[8,4] };
        Object.keys(P).forEach(function (k) {
          var p = P[k], o = off[k] || [8,4];
          s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3.4" fill="#FBFAF7" stroke="#201E1B" stroke-width="1.3"/>' +
               '<text x="' + (p[0] + o[0]) + '" y="' + (p[1] + o[1]) + '"' + (o[2] ? ' text-anchor="' + o[2] + '"' : '') + ' ' + F + ' font-size="9.5" fill="#201E1B">' + L(p[2]) + '</text>';
        });
        /* legend */
        var names = [
          [1,"#5E7780","",{en:"Down the Nagara",ja:"長良川をくだる",zh:"順長良川而下"}],
          [2,"#6F8A5E","",{en:"The Hida circle",ja:"飛騨をめぐる",zh:"飛驒環遊"}],
          [3,"#7C6B52","",{en:"The Nakasendō",ja:"中山道をゆく",zh:"走中山道"}],
          [4,"#A0766A","",{en:"The road of hinoki",ja:"檜の道",zh:"檜木之路"}],
          [5,"#8B857C","",{en:"The western plain",ja:"西の平野",zh:"西部平原"}]
        ];
        names.forEach(function (n, i) {
          var y = 60 + i * 17;
          s += '<line x1="30" y1="' + (y - 4) + '" x2="56" y2="' + (y - 4) + '" stroke="' + n[1] + '" stroke-width="2.6"' + (n[2] ? ' stroke-dasharray="' + n[2] + '"' : '') + '/>' +
               '<text x="62" y="' + y + '" ' + F + ' font-size="10" fill="#201E1B">' + n[0] + '. ' + L(n[3]) + '</text>';
        });
        s += '<text x="30" y="160" ' + F + ' font-size="9.5" fill="#8B857C">' + L({ en:"Dashed: side trips.", ja:"破線：寄り道。", zh:"虛線：支線。" }) + '</text>' +
             '<text x="740" y="460" text-anchor="end" ' + F + ' font-size="9.5" fill="#8B857C">' + L({ en:"SCHEMATIC — positions approximate.", ja:"模式図——位置はおおよそ。", zh:"示意圖——位置為概略。" }) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"nagara",
      title:{ en:"1. Down the Nagara", ja:"一　長良川をくだる", zh:"一、順長良川而下" }, jp:"郡上八幡 · 美濃 · 関 · 岐阜",
      body:[
        { t:"p", text:{
          en:"Two or three days following the clearest of the three great rivers from the mountains to the plain, by the Nagaragawa Railway, which runs up the valley from Minokamo through Seki and Mino to Gujō Hachiman, and then by train or bus to Gifu. Best from late spring to early autumn, when the dances, the fishing and the river are all at their height.",
          ja:"三大河川のうち最も清らかな川を、山から平野へたどる二、三日の旅。美濃加茂から関、美濃を経て郡上八幡へ谷をさかのぼる長良川鉄道を使い、そこから鉄道かバスで岐阜へ出る。踊りも鵜飼も川も盛りとなる晩春から初秋がよい。",
          zh:"兩三天的旅程，沿著三大河中最清澈的一條，從山區一路走到平原：搭乘長良川鐵道——它從美濃加茂出發，經關與美濃，溯谷而上到郡上八幡——再轉火車或巴士到岐阜。晚春到初秋最佳，那時舞蹈、鵜飼與河川都在最盛之時。" } },
        { t:"steps", items:[
          { title:{en:"Gujō Hachiman",ja:"郡上八幡",zh:"郡上八幡"}, jp:"郡上市",
            text:{en:"A castle town of springs, washing places and channels, whose Gujō Odori is danced on some thirty nights from mid-July to early September, all night long from 13 to 16 August. See <a href=\"towns.html#gujo\">Old Towns</a> and <a href=\"festivals.html\">Festivals &amp; Floats</a>.",ja:"湧き水と洗い場と水路の城下町。郡上おどりは七月中旬から九月上旬までの三十夜あまり踊られ、八月十三日から十六日は夜通し踊る。<a href=\"towns.html#gujo\">町並み</a>と<a href=\"festivals.html\">祭りと屋台</a>を参照。",zh:"湧泉、洗滌處與水道交織的城下町；郡上舞自七月中旬至九月上旬跳上三十多個夜晚，八月十三日至十六日更徹夜起舞。見<a href=\"towns.html#gujo\">老街町並</a>與<a href=\"festivals.html\">祭典與屋台</a>。"} },
          { title:{en:"Mino",ja:"美濃",zh:"美濃"}, jp:"美濃市",
            text:{en:"The paper merchants' town of udatsu firewalls, and upstream along the Itadori river the papermaking hamlets and the Mino Washi Museum. See <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>.",ja:"うだつの上がる紙問屋の町。板取川をさかのぼれば紙漉きの集落と美濃和紙の里会館がある。<a href=\"paper.html\">和紙・提灯・和傘</a>を参照。",zh:"高築卯建的紙商之鎮；沿板取川上溯，有造紙聚落與美濃和紙之里會館。見<a href=\"paper.html\">和紙、燈籠與和傘</a>。"} },
          { title:{en:"Seki",ja:"関",zh:"關"}, jp:"関市",
            text:{en:"The swordsmiths' museum and its forging demonstrations, the cutlery outlets, and the Enkū museum by the river. See <a href=\"seki.html\">Seki, Town of Blades</a>.",ja:"鍛冶伝承館とその鍛錬の公開、刃物の直売所、川のほとりの円空館。<a href=\"seki.html\">刃物のまち・関</a>を参照。",zh:"刀匠博物館與其公開鍛刀、刀具直營店，以及河畔的圓空館。見<a href=\"seki.html\">刀刃之城・關</a>。"} },
          { title:{en:"Gifu",ja:"岐阜",zh:"岐阜"}, jp:"岐阜市",
            text:{en:"Kinkazan and its castle, Nobunaga's palace site, the Great Buddha of Shōhō-ji and, on summer evenings from 11 May to 15 October, the cormorant fishing on the Nagara. See <a href=\"ukai.html\">Cormorant Fishing</a>.",ja:"金華山とその城、信長の居館跡、正法寺の大仏、そして五月十一日から十月十五日までの夏の宵の長良川の鵜飼。<a href=\"ukai.html\">鵜飼</a>を参照。",zh:"金華山與其城、信長居館遺址、正法寺大佛，以及五月十一日至十月十五日夏夜長良川上的鵜飼。見<a href=\"ukai.html\">鵜飼</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"2. The Hida circle", ja:"二　飛騨をめぐる", zh:"二、飛驒環遊" }, jp:"下呂 · 高山 · 古川 · 白川郷",
      body:[
        { t:"p", text:{
          en:"Three or four days in the mountains, by the JR Takayama Line from Gifu or Nagoya up the Hida river gorge, and by bus from Takayama to Shirakawa-gō and to the hot springs of Oku-Hida. Each season has its reason to go: the spring festivals of Takayama and Furukawa in April, the autumn festival and the doburoku festivals in October, and snow on the gasshō roofs in winter.",
          ja:"山のなかの三、四日。岐阜や名古屋から飛騨川の峡谷をさかのぼるJR高山本線に乗り、高山からはバスで白川郷や奥飛騨の温泉へ向かう。季節ごとに訪ねる理由がある——四月の高山と古川の春祭り、十月の秋祭りとどぶろく祭、冬の合掌の屋根の雪。",
          zh:"在山中的三、四天：從岐阜或名古屋搭 JR 高山本線溯飛驒川峽谷而上，再由高山轉巴士前往白川鄉與奧飛驒溫泉。每個季節都有前往的理由：四月高山與古川的春季祭典、十月的秋季祭典與濁酒祭，以及冬天合掌屋頂上的雪。" } },
        { t:"steps", items:[
          { title:{en:"Gero",ja:"下呂",zh:"下呂"}, jp:"下呂市",
            text:{en:"The hot spring on the Hida river, counted since the seventeenth century among the three famous springs of Japan. See <a href=\"onsen.html\">Hot Springs</a>.",ja:"飛騨川の温泉で、十七世紀から日本三名泉の一つに数えられる。<a href=\"onsen.html\">温泉</a>を参照。",zh:"飛驒川畔的溫泉，自十七世紀起便名列日本三大名泉之一。見<a href=\"onsen.html\">溫泉</a>。"} },
          { title:{en:"Takayama",ja:"高山",zh:"高山"}, jp:"高山市",
            text:{en:"The merchant town, the Jin'ya, the breweries and the morning markets; the Kusakabe and Yoshijima houses; the festival floats; the Hida Folk Village; and the furniture showrooms. See <a href=\"towns.html#takayama\">Old Towns</a> and <a href=\"hidasake.html\">Brewing in Hida</a>.",ja:"商人の町、陣屋、酒蔵、朝市。日下部家と吉島家。祭りの屋台。飛騨の里。家具のショールーム。<a href=\"towns.html#takayama\">町並み</a>と<a href=\"hidasake.html\">飛騨の酒造り</a>を参照。",zh:"商人町、陣屋、酒藏與朝市；日下部家與吉島家；祭典屋台；飛驒之里；以及家具展示間。見<a href=\"towns.html#takayama\">老街町並</a>與<a href=\"hidasake.html\">飛驒的釀酒</a>。"} },
          { title:{en:"Hida-Furukawa",ja:"飛騨古川",zh:"飛驒古川"}, jp:"飛騨市",
            text:{en:"A quieter town of white-walled storehouses and carp-filled channels, two breweries a few doors apart, and the carpenters' museum. See <a href=\"joinery.html\">Joinery</a>.",ja:"白壁の土蔵と鯉の泳ぐ水路の静かな町。数軒を隔てて並ぶ二つの酒蔵と、匠の文化館がある。<a href=\"joinery.html\">継手と仕口</a>を参照。",zh:"一座較寧靜的小鎮：白牆倉庫、錦鯉悠游的水道、相隔數戶的兩家酒藏，以及木匠博物館。見<a href=\"joinery.html\">榫接</a>。"} },
          { title:{en:"Shirakawa-gō",ja:"白川郷",zh:"白川鄉"}, jp:"白川村",
            text:{en:"The gasshō houses of Ogimachi, a World Heritage Site since 1995. Stay a night in a farmhouse inn to see the village after the day visitors leave. See <a href=\"shirakawago.html\">Shirakawa-gō</a>.",ja:"1995年から世界遺産の荻町の合掌造り。日帰りの人が去ったあとの村を見るには、合掌の民宿に一泊するとよい。<a href=\"shirakawago.html\">白川郷</a>を参照。",zh:"荻町的合掌造，1995 年起列為世界遺產。不妨在農家民宿住一晚，看看當日遊客離去後的村莊。見<a href=\"shirakawago.html\">白川鄉</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"nakasendo",
      title:{ en:"3. The Nakasendō", ja:"三　中山道をゆく", zh:"三、走中山道" }, jp:"馬籠 · 中津川 · 大井 · 細久手 · 御嵩 · 関ケ原",
      body:[
        { t:"p", text:{
          en:"The old inland highway crossed Mino through sixteen post towns. Walkers usually take the stretch from Magome over the pass to Tsumago in Nagano, or the hill road of the “thirteen passes” from Ōi to Ōkute and on to Hosokute; the JR Chūō Line links the towns of the eastern half and the Tōkaidō Line the western. A side trip by the Akechi Railway from Ena reaches the castle town of Iwamura.",
          ja:"内陸の古い街道は、十六の宿場で美濃を横切った。歩く人はたいてい、馬籠から峠を越えて長野県の妻籠へ出る区間か、大井から大湫へ「十三峠」を越え、さらに細久手へ至る山道を選ぶ。東半分の町はJR中央本線が、西半分は東海道本線が結ぶ。恵那から明知鉄道に乗れば、城下町の岩村へ寄り道できる。",
          zh:"這條古老的內陸大道以十六個宿場穿越美濃。步行者通常選擇從馬籠翻越山口到長野縣妻籠的路段，或從大井翻越「十三峠」到大湫、再到細久手的山路；東半段各鎮以 JR 中央本線相連，西半段則以東海道本線相連。從惠那搭明知鐵道，可順道前往城下町岩村。" } },
        { t:"steps", items:[
          { title:{en:"Magome and Nakatsugawa",ja:"馬籠と中津川",zh:"馬籠與中津川"}, jp:"中津川市",
            text:{en:"The stone-paved hill station of Magome, in Gifu since 2005, and Nakatsugawa below it, a post town and the home of kuri-kinton, the chestnut sweet of autumn. See <a href=\"roads.html\">The Nakasendō &amp; Old Roads</a>.",ja:"石畳の坂の宿場・馬籠（2005年から岐阜県）と、その下の宿場で、秋の栗菓子・栗きんとんのふるさとである中津川。<a href=\"roads.html\">中山道と街道</a>を参照。",zh:"石板坡道的宿場馬籠（2005 年起屬岐阜縣），以及其下方的宿場中津川——秋季栗子點心栗金團的故鄉。見<a href=\"roads.html\">中山道與古道</a>。"} },
          { title:{en:"Ōi and Iwamura",ja:"大井と岩村",zh:"大井與岩村"}, jp:"恵那市",
            text:{en:"Ōi, one of the largest post towns in Mino and now the centre of Ena, with the right-angled turns that slowed an attacker; and by the side trip, the merchant street of Iwamura below its mountain castle. See <a href=\"towns.html\">Old Towns</a>.",ja:"美濃有数の大きな宿場で、攻め手の足を止める枡形の曲がり角を残す大井（いまの恵那の中心）。寄り道すれば、山城の下の岩村の商家の通り。<a href=\"towns.html\">町並み</a>を参照。",zh:"大井是美濃數一數二的大宿場，今為惠那市中心，保留著用來阻滯敵軍的直角轉彎「枡形」；若順道前往，還有山城下岩村的商家街。見<a href=\"towns.html\">老街町並</a>。"} },
          { title:{en:"The thirteen passes",ja:"十三峠",zh:"十三峠"}, jp:"大湫 · 細久手",
            text:{en:"The hill road through Ōkute to Hosokute, where an inn of the Edo period still takes guests.",ja:"大湫を経て細久手へ至る山道。細久手には江戸時代の旅籠がいまも客を泊める。",zh:"經大湫通往細久手的山路；細久手有一間江戶時代的旅籠至今仍接待住客。"} },
          { title:{en:"Mitake and Ōta",ja:"御嵩と太田",zh:"御嵩與太田"}, jp:"御嵩町 · 美濃加茂市",
            text:{en:"The temple town of Mitake and the river station of Ōta, where travellers crossed the Kiso by ferry at one of the road's hardest places.",ja:"寺の町・御嵩と、木曽川を渡し舟で越えた、街道屈指の難所の川の宿・太田。",zh:"寺院之鎮御嵩，以及河畔宿場太田——旅人在此乘渡船橫越木曾川，是這條路最艱難的地點之一。"} },
          { title:{en:"Akasaka, Tarui and Sekigahara",ja:"赤坂・垂井・関ケ原",zh:"赤坂、垂井、關原"}, jp:"大垣市 · 垂井町 · 関ケ原町",
            text:{en:"West of Gifu the road runs past the limestone of Kinshōzan to Tarui and the battlefield, and on to the border with Ōmi at Imasu. See <a href=\"sekigahara.html\">Sekigahara</a>.",ja:"岐阜の西では、道は金生山の石灰岩のかたわらを過ぎて垂井と古戦場へ、さらに今須で近江との国境へ至る。<a href=\"sekigahara.html\">関ヶ原</a>を参照。",zh:"岐阜以西，道路經過金生山的石灰岩，通往垂井與古戰場，再到今須與近江的國界。見<a href=\"sekigahara.html\">關原</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"hinoki",
      title:{ en:"4. The road of hinoki", ja:"四　檜の道", zh:"四、檜木之路" }, jp:"加子母 · 坂下 · 八百津 · 可児 · 多治見",
      body:[
        { t:"p", text:{
          en:"A route for readers of the wood chapters, following the timber of Ura-Kiso down the Kiso river, and ending among the kilns that the same forests once fired. It needs a car or careful use of buses in the forest villages; the rest is on the Chūō Line and local lines.",
          ja:"木の章を読んだ人のための道筋。裏木曽の木材を追って木曽川をくだり、かつて同じ森が火を焚いた窯場で終わる。森の村では車か、バスを念入りに使う必要がある。ほかは中央本線と地方の鉄道で回れる。",
          zh:"為讀過木之篇章的讀者所設的路線：追隨裏木曾的木材順木曾川而下，最後抵達昔日由同一片森林供應燃料的窯場。山林村落需要開車或仔細安排巴士；其餘路段可搭中央本線與地方鐵路。" } },
        { t:"steps", items:[
          { title:{en:"Kashimo and Tsukechi",ja:"加子母と付知",zh:"加子母與付知"}, jp:"中津川市",
            text:{en:"The forest villages of Ura-Kiso, whose national forest supplies hinoki for the rebuilding of the Ise shrines, and the Kashimo Meiji-za, a playhouse the villagers built of their own timber in 1894. See <a href=\"hinoki.html\">Hinoki</a> and <a href=\"kabuki.html\">Village Kabuki</a>.",ja:"裏木曽の森の村。その国有林は伊勢の神宮の建て替えに檜を送る。村人が1894年に自分たちの木で建てた芝居小屋、かしも明治座もある。<a href=\"hinoki.html\">ヒノキ</a>と<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>を参照。",zh:"裏木曾的山林村落，其國有林為伊勢神宮的重建供應檜木；還有村民於 1894 年以自家木材建造的戲棚加子母明治座。見<a href=\"hinoki.html\">日本扁柏</a>與<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>。"} },
          { title:{en:"Sakashita",ja:"坂下",zh:"坂下"}, jp:"中津川市",
            text:{en:"A Kiso valley town where Takamine guitars have been made since 1959. See <a href=\"sound.html\">Wood &amp; Sound</a>.",ja:"1959年からタカミネのギターがつくられている木曽谷の町。<a href=\"sound.html\">木と音</a>を参照。",zh:"木曾谷的小鎮，自 1959 年起在此製作 Takamine 吉他。見<a href=\"sound.html\">木與聲音</a>。"} },
          { title:{en:"Yaotsu",ja:"八百津",zh:"八百津"}, jp:"八百津町",
            text:{en:"Where the logs floated singly down the Kiso were caught and made up into rafts, and where the Sugihara Chiune Memorial Hall stands on a hill. See <a href=\"timberrivers.html\">The Timber Rivers</a>.",ja:"木曽川を一本ずつ流された木を受け止め、筏に組んだ地。丘の上に杉原千畝記念館が建つ。<a href=\"timberrivers.html\">木を運んだ川</a>を参照。",zh:"順木曾川單根漂流而下的原木在此被攔下、編成木筏；山丘上有杉原千畝紀念館。見<a href=\"timberrivers.html\">運木之河</a>。"} },
          { title:{en:"Kani",ja:"可児",zh:"可兒"}, jp:"可児市",
            text:{en:"The K.Yairi guitar workshop, and in the hills the old kiln sites where Arakawa Toyozō found the Shino shard in 1930. See <a href=\"minoyaki.html\">Mino Ware</a>.",ja:"K.ヤイリのギター工房と、1930年に荒川豊蔵が志野の陶片を見つけた丘の古窯跡。<a href=\"minoyaki.html\">美濃焼</a>を参照。",zh:"K.Yairi 吉他工坊，以及 1930 年荒川豐藏發現志野陶片的山丘古窯址。見<a href=\"minoyaki.html\">美濃燒</a>。"} },
          { title:{en:"Tajimi",ja:"多治見",zh:"多治見"}, jp:"多治見市",
            text:{en:"The ceramics museums, the mosaic tile museum at Kasahara and Eihō-ji, whose Kannon hall of 1314 is one of the oldest timber buildings in the prefecture. See <a href=\"architecture.html\">Building in Wood</a>.",ja:"陶磁の美術館、笠原のモザイクタイルミュージアム、そして1314年の観音堂が県内最古級の木造建築である永保寺。<a href=\"architecture.html\">社寺・町家・合掌</a>を参照。",zh:"陶瓷美術館、笠原的馬賽克磁磚博物館，以及永保寺——其 1314 年的觀音堂是縣內最古老的木造建築之一。見<a href=\"architecture.html\">寺社、町家與合掌</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"west",
      title:{ en:"5. The western plain", ja:"五　西の平野", zh:"五、西部平原" }, jp:"谷汲 · 大垣 · 養老 · 海津",
      body:[
        { t:"p", text:{
          en:"Two days on the edge of the plain, where Mino meets Ōmi and Ise, by the Yōrō Railway and the Tarumi Railway from Ōgaki. It takes in water and wells, the three rivers and their levees, and the sake of the Ibi valley.",
          ja:"美濃が近江や伊勢と接する平野のへりの二日。大垣から養老鉄道と樽見鉄道を使う。湧き水と井戸、三つの川とその堤、そして揖斐の谷の酒をめぐる。",
          zh:"在美濃與近江、伊勢交界的平原邊緣走兩天，從大垣搭乘養老鐵道與樽見鐵道。行程涵蓋湧泉與水井、三條河川及其堤防，以及揖斐河谷的酒。" } },
        { t:"steps", items:[
          { title:{en:"Tanigumi-san and the Ibi valley",ja:"谷汲山と揖斐の谷",zh:"谷汲山與揖斐河谷"}, jp:"揖斐川町 · 大野町 · 池田町",
            text:{en:"The temple at the end of the Saigoku pilgrimage of thirty-three places, and the small breweries of Ōno and Ikeda. See <a href=\"faith.html\">Shrines &amp; Temples</a> and <a href=\"directory.html\">A Directory of Gifu Sake</a>.",ja:"西国三十三所の巡礼を結ぶ寺と、大野と池田の小さな酒蔵。<a href=\"faith.html\">社寺と信仰</a>と<a href=\"directory.html\">岐阜酒名鑑</a>を参照。",zh:"西國三十三所朝聖的終點寺院，以及大野與池田的小酒藏。見<a href=\"faith.html\">神社、寺院與信仰</a>與<a href=\"directory.html\">岐阜酒名鑑</a>。"} },
          { title:{en:"Ōgaki",ja:"大垣",zh:"大垣"}, jp:"大垣市",
            text:{en:"The water city of springs and canals, where Bashō's journey ended in 1689; masu workshops; cold <em>mizu-manjū</em> in summer. See <a href=\"masu.html\">The Masu of Ōgaki</a> and <a href=\"food.html\">Food of Mino &amp; Hida</a>.",ja:"湧き水と運河の水都で、1689年に芭蕉の旅が終わった地。枡の工房。夏には冷たい水まんじゅう。<a href=\"masu.html\">大垣の枡</a>と<a href=\"food.html\">美濃と飛騨の食</a>を参照。",zh:"湧泉與運河之城，芭蕉之旅於 1689 年在此結束；有枡的工坊；夏天吃冰涼的水饅頭。見<a href=\"masu.html\">大垣的枡</a>與<a href=\"food.html\">美濃與飛驒的飲食</a>。"} },
          { title:{en:"Yōrō",ja:"養老",zh:"養老"}, jp:"養老町",
            text:{en:"The waterfall of the sake legend, which gave an era its name in 717. See <a href=\"sake.html\">The Sake of Gifu</a>.",ja:"717年に年号の名となった、酒の伝説の滝。<a href=\"sake.html\">岐阜の酒</a>を参照。",zh:"酒之傳說中的瀑布，717 年成為年號之名。見<a href=\"sake.html\">岐阜的酒</a>。"} },
          { title:{en:"Kaizu",ja:"海津",zh:"海津"}, jp:"海津市",
            text:{en:"The ring-levee country at the bottom of the plain, a museum of the ring-levee villages and the shrine to the Satsuma men of the Hōreki works. See <a href=\"chisui.html\">Taming the Three Rivers</a>.",ja:"平野の底の輪中地帯。輪中の暮らしを伝える資料館と、宝暦治水の薩摩の人々をまつる社。<a href=\"chisui.html\">木曽三川の治水</a>を参照。",zh:"平原最低處的輪中地帶，介紹輪中村落生活的資料館，以及祭祀寶曆治水薩摩人的神社。見<a href=\"chisui.html\">木曾三川的治水</a>。"} }
        ] }
      ]
    },

    { t:"note", label:{ en:"Getting around", ja:"移動について", zh:"交通" }, text:{
      en:"Gifu is an hour or less from Nagoya by JR or Meitetsu, and Nagoya is the nearest airport and Shinkansen hub; Takayama is about two and a half hours from Nagoya by limited express, and Shirakawa-gō about an hour by bus from Takayama, a little more from Kanazawa. The mountain lines run less often than city trains, and buses in the forest villages may run only a few times a day.",
      ja:"岐阜は名古屋からJRか名鉄で一時間足らず。最寄りの空港と新幹線の拠点は名古屋である。高山は名古屋から特急でおよそ二時間半、白川郷は高山からバスでおよそ一時間、金沢からはそれより少しかかる。山の路線は都市の電車より本数が少なく、森の村のバスは一日に数本ということもある。",
      zh:"從名古屋搭 JR 或名鐵到岐阜不到一小時，名古屋也是最近的機場與新幹線樞紐；高山距名古屋搭特急約兩個半小時，白川鄉則從高山搭巴士約一小時，從金澤稍久一些。山區路線的班次少於都市電車，山林村落的巴士一天可能只有幾班。" } },

    { t:"related", items:[
      { href:"museums.html", why:{ en:"What to see at each stop.", ja:"各地の見どころ。", zh:"各站可參觀之處。" } },
      { href:"regions.html", why:{ en:"The regions the journeys cross.", ja:"旅が横切る圏域。", zh:"旅程穿越的圈域。" } },
      { href:"festivals.html", why:{ en:"When to time a journey.", ja:"旅の時期を選ぶ。", zh:"安排旅程的時機。" } },
      { href:"food.html", why:{ en:"What to eat on the way.", ja:"道中で食べるもの。", zh:"沿途吃什麼。" } }
    ] }
  ]
};

/* ---- -------------------------------------- woodjourneys */
GIFU.pages["woodjourneys"] = { kicker:{ en:"Journeys · 04", ja:"旅 · 04", zh:"旅程 · 04" },
  title:{ en:"Five Wood Journeys", ja:"木をめぐる五つの旅", zh:"五段木之旅" },
  jp:"木の旅",
  lede:{
    en:"Five short journeys through Gifu, each built around one thread of this book: the carpenters and furniture makers of Hida; the hinoki forests that supply Ise; the guitar workshops of the Kiso valley; paper, water and blades in the Nagara valley; and the rivers that once carried the timber down to the plain. Each takes one to three days, can be done by train and bus with a little help from taxis, and can be joined to the others. Travel times are approximate and timetables change — check before you go, and see <a href=\"visiting.html\">Visiting Gifu</a> for opening hours, seasons and practical notes.",
    ja:"岐阜をめぐる五つの短い旅。それぞれがこの本の一本の糸を軸にしている。飛騨の大工と家具職人、伊勢に御用材を出すヒノキの森、木曽川沿いのギター工房、長良川の谷の紙と水と刃物、そして材木を平野へ運んだ川。どれも一日から三日で、列車とバスに少しタクシーを足せばたどれ、互いにつなぐこともできる。所要時間はおよそのもので、時刻表は変わる。出かける前に確かめ、開館時間、季節、実用の覚え書きは<a href=\"visiting.html\">岐阜を訪ねる</a>を見てほしい。",
    zh:"五段穿越岐阜的短程旅行，各自圍繞本書的一條主線：飛驒的木匠與家具職人；供應伊勢神宮的檜木林；木曾川流域的吉他工坊；長良川河谷的和紙、清水與刀具；以及昔日把木材運往平原的河流。每段一到三天，搭火車與巴士、偶爾輔以計程車即可完成，也能彼此串連。交通時間為概略值，時刻表會變動——出發前請確認；開放時間、季節與實用提醒見<a href=\"visiting.html\">造訪岐阜</a>。" },
  body:[
    { t:"section",
      id:"plan",
      title:{ en:"How to use these journeys", ja:"旅の組み立て方", zh:"如何運用這些行程" },
      jp:"旅の組み立て",
      body:[
        { t:"p",
          text:{
            en:"The five routes are drawn as simple lines between towns, not as fixed timetables. Journey A stays in Hida and needs no car. Journeys B and C live on the JR Chūō line east of Nagoya and are easier with a car for the forest villages. Journey D follows the little Nagaragawa Railway up the Nagara valley. Journey E is the longest: it follows the old timber route from the Hida mountains down the Hida and Kiso rivers to the plain and ends among the canals of Ōgaki, and it can be done in a day by train or slowly over three. A traveller from Taiwan landing at Centrair can begin B, C, D or E from Nagoya the same afternoon; one landing at Toyama can begin A.",
            ja:"五つの道筋は、決まった時刻表ではなく、町と町を結ぶ簡単な線として描いてある。Aは飛騨の中で完結し、車は要らない。BとCは名古屋の東の中央本線沿いにあり、森の村へは車があると楽である。Dは小さな長良川鉄道で長良川の谷をさかのぼる。Eがいちばん長い。飛騨の山から飛騨川と木曽川を下って平野に出る昔の材木の道をたどり、大垣の水路のあいだで終わる。列車なら一日で、ゆっくりなら三日かけて回れる。セントレアに降りた台湾からの旅人は、その日の午後に名古屋からB、C、D、Eを始められ、富山に降りればAから始められる。",
            zh:"這五條路線是以城鎮之間的簡單連線來描繪，而非固定的時刻表。行程 A 留在飛驒境內，不需開車。行程 B 與 C 位於名古屋以東的 JR 中央本線沿線，前往森林村落開車較方便。行程 D 搭小小的長良川鐵道溯長良川河谷而上。行程 E 最長：沿著昔日的木材之路，從飛驒山區順飛驒川與木曾川而下抵達平原，終點在大垣的水道之間；搭火車一天可走完，也可以慢慢花三天。從台灣抵達中部國際機場的旅人，當天下午就能從名古屋展開 B、C、D 或 E；若在富山降落，則可從 A 開始。" } },
        { t:"table",
          caption:{ en:"The five journeys at a glance", ja:"五つの旅の一覧", zh:"五段旅程一覽" },
          cols:[
            { en:"Journey", ja:"旅", zh:"行程" },
            { en:"Route", ja:"道筋", zh:"路線" },
            { en:"Days", ja:"日数", zh:"天數" },
            { en:"Best for", ja:"向く人", zh:"適合" }
          ],
          rows:[
            [
              { en:"A · Carpenters and furniture", ja:"A · 匠と家具", zh:"A · 木匠與家具" },
              { en:"Takayama – Furukawa", ja:"高山—古川", zh:"高山—古川" },
              "2–3",
              { en:"Architecture, furniture, carving", ja:"建築、家具、彫刻", zh:"建築、家具、雕刻" }
            ],
            [
              { en:"B · The hinoki road", ja:"B · ヒノキの道", zh:"B · 檜木之路" },
              { en:"Nakatsugawa – Tsukechi – Kashimo", ja:"中津川—付知—加子母", zh:"中津川—付知—加子母" },
              "2",
              { en:"Forests, Ise timber, village theatre", ja:"森、伊勢の御用材、村の芝居小屋", zh:"森林、伊勢御用材、村落戲棚" }
            ],
            [
              { en:"C · The guitar road", ja:"C · ギターの道", zh:"C · 吉他之路" },
              { en:"Nakatsugawa – Kani – Gujō", ja:"中津川—可児—郡上", zh:"中津川—可兒—郡上" },
              "2–3",
              { en:"Musicians, instrument lovers", ja:"音楽家、楽器好き", zh:"音樂人、樂器愛好者" }
            ],
            [
              { en:"D · Paper, water and blades", ja:"D · 紙と水と刃物", zh:"D · 紙、水與刀" },
              { en:"Seki – Mino – Gujō Hachiman", ja:"関—美濃—郡上八幡", zh:"關—美濃—郡上八幡" },
              "2",
              { en:"Crafts, townscapes, summer dancing", ja:"工芸、町並み、夏の踊り", zh:"工藝、街景、夏日舞蹈" }
            ],
            [
              { en:"E · The timber rivers", ja:"E · 材木の川", zh:"E · 木材之河" },
              { en:"Takayama – Gero – Yaotsu – Gifu – Ōgaki", ja:"高山—下呂—八百津—岐阜—大垣", zh:"高山—下呂—八百津—岐阜—大垣" },
              "1–3",
              { en:"History, rivers, masu", ja:"歴史、川、枡", zh:"歷史、河川、枡" }
            ]
          ] }
      ] },
    { t:"section",
      id:"route-a",
      title:{ en:"A · Hida's carpenters and furniture", ja:"A · 飛騨の匠と家具", zh:"A · 飛驒的木匠與家具" },
      jp:"高山—古川",
      body:[
        { t:"p",
          text:{
            en:"The oldest story in this book is that of the Hida carpenters who were sent to build the capital's temples and palaces in place of taxes, and the youngest is that of the furniture factories that began bending beech in Takayama in 1920. Both can be followed in a compact triangle: the old town of Takayama, the furniture district and folk village on its western edge, and the canal town of Hida-Furukawa fifteen kilometres to the north. Two nights in Takayama are enough; three allow a slower day in Furukawa and a detour into the forest. See <a href=\"takumi.html\">takumi</a> and <a href=\"furniture.html\">furniture</a>.",
            ja:"この本でいちばん古い物語は、税の代わりに都の寺や宮を建てに送られた飛騨の匠の物語であり、いちばん新しいのは、一九二〇年に高山でブナを曲げはじめた家具工場の物語である。どちらも小さな三角形の中でたどれる。高山の古い町並み、その西の端の家具の工場地帯と民俗村、そして北へ十五キロの水路の町飛騨古川である。高山に二泊すれば足り、三泊あれば古川でゆっくり一日を過ごし、森へ寄り道もできる。<a href=\"takumi.html\">飛騨の匠</a>と<a href=\"furniture.html\">家具</a>を参照。",
            zh:"本書最古老的故事，是飛驒木匠被派往京城建造寺院與宮殿以代替繳稅；最年輕的故事，則是 1920 年在高山開始彎曲山毛櫸的家具工廠。兩者都能在一個緊湊的三角形裡追尋：高山老街、城西緣的家具工廠區與民俗村，以及北方十五公里外的水渠小鎮飛驒古川。在高山住兩晚就足夠；住三晚則能在古川悠閒一天，再繞進森林。見<a href=\"takumi.html\">飛驒的匠人</a>與<a href=\"furniture.html\">家具</a>。" } },
        { t:"steps",
          items:[
            { title:{ en:"Day 1 · Into Takayama", ja:"一日目 · 高山へ", zh:"第一天 · 前往高山" },
              jp:"高山",
              meta:{
                en:"Nagoya → Takayama · about 2 h 30 min by limited express Hida (from Toyama about 1 h 30 min)",
                ja:"名古屋→高山 · 特急ひだで約二時間半（富山からは約一時間半）",
                zh:"名古屋→高山 · 特急飛驒號約 2 小時 30 分（從富山約 1 小時 30 分）" },
              text:{
                en:"Arrive by midday. Walk east across the Miyagawa to the Takayama Jinya, the shogunate's office for a province it took over for its forests; then the Sanmachi streets and, in the late afternoon, the Kusakabe and Yoshijima houses, when the light through the high windows falls on the beams.",
                ja:"昼までに着く。宮川を東へ渡って、森のために幕府が直轄とした国の役所、高山陣屋へ。つづいて三町の通りを歩き、夕方に日下部家と吉島家へ。高窓からの光が梁に落ちる時刻である。",
                zh:"中午前抵達。向東過宮川到高山陣屋——幕府為了森林而直轄的飛驒國的官署；接著逛三町街道，傍晚再去日下部家與吉島家，那時高窗射入的光正好落在梁上。" } },
            { title:{ en:"Day 2 · Floats, carvers and chairs", ja:"二日目 · 屋台、彫師、椅子", zh:"第二天 · 屋台、雕師與椅子" },
              jp:"屋台会館・飛騨の里",
              meta:{
                en:"On foot and by local bus within Takayama · the folk village is a short bus ride west of the station",
                ja:"高山市内を徒歩と路線バスで · 飛騨の里は駅の西へバスですぐ",
                zh:"高山市內步行與搭路線巴士 · 飛驒之里在車站西側，搭巴士很快就到" },
              text:{
                en:"Morning at the Festival Float Exhibition Hall and the shrine of Sakurayama Hachimangū, then the carving and Shunkei lacquer shops of the old town. After lunch take the bus to Hida Folk Village to see gasshō framing and farmhouse joinery, and end at the furniture showrooms — Hida Sangyō's is about fifteen minutes' walk from the station. Book any factory tour in advance.",
                ja:"午前は屋台会館と桜山八幡宮、つづいて古い町並みの彫刻と春慶塗の店。昼食のあとバスで飛騨の里へ行き、合掌の骨組みと民家の仕口を見て、最後に家具のショールームへ。飛騨産業のものは駅から歩いて十五分ほどである。工場見学はあらかじめ予約する。",
                zh:"上午參觀屋台會館與櫻山八幡宮，再逛老街的雕刻店與春慶塗店。午餐後搭巴士到飛驒之里看合掌造骨架與民家榫接，最後到家具展示館——飛驒產業的展示館距車站步行約十五分鐘。工廠參觀請事先預約。" } },
            { title:{ en:"Day 3 · The carpenters' clouds", ja:"三日目 · 匠の雲", zh:"第三天 · 木匠的雲" },
              jp:"飛騨古川",
              meta:{
                en:"Takayama → Hida-Furukawa · about 15 km, 15–25 min by JR Takayama line",
                ja:"高山→飛騨古川 · 約十五キロ、JR高山本線で十五〜二十五分",
                zh:"高山→飛驒古川 · 約 15 公里，搭 JR 高山本線 15–25 分鐘" },
              text:{
                en:"At the Hida Takumi Bunkakan, built without nails, try the joinery puzzles; then walk the canal and white storehouses looking up at the <em>kumo</em> on the eave brackets. A café and workshop in town makes furniture from the city's small broadleaf trees. Return to Takayama or continue north to Toyama.",
                ja:"釘を使わずに建てた飛騨の匠文化館で組木を試し、水路と白壁の土蔵に沿って歩きながら、軒の腕木の<em>雲</em>を見上げる。町には市の小径の広葉樹から家具をつくるカフェと工房もある。高山に戻るか、北の富山へ抜ける。",
                zh:"在不用一根釘子建成的飛驒之匠文化館試玩榫接拼圖；接著沿水渠與白牆土藏散步，抬頭看出簷托木上的<em>「雲」</em>。鎮上也有一家用市內小徑闊葉樹製作家具的咖啡館兼工坊。之後返回高山，或北上富山。" } },
            { title:{ en:"Option · Into the forest", ja:"寄り道 · 森へ", zh:"延伸 · 走進森林" },
              jp:"清見",
              meta:{ en:"Takayama → Kiyomi · about half an hour by car", ja:"高山→清見 · 車で約三十分", zh:"高山→清見 · 開車約半小時" },
              text:{
                en:"West of Takayama, Oak Village's workshop and showroom stand among planted trees; the drive shows the mixed broadleaf forest that Hida's furniture makers now try to use.",
                ja:"高山の西、オークヴィレッジの工房とショールームは植えた木々の中にある。道中では、飛騨の家具職人がいま使おうとしている広葉樹の混じる森が見える。",
                zh:"高山以西，Oak Village 的工坊與展示館坐落在植栽林中；沿途可看到飛驒家具職人如今努力利用的闊葉混交林。" } }
          ] },
        { t:"note",
          label:{ en:"Festival days", ja:"祭りの日", zh:"祭典日" },
          text:{
            en:"On 14–15 April and 9–10 October the floats come out in Takayama, and on 19–20 April in Furukawa. The route works on those days, but book rooms months ahead and expect crowds.",
            ja:"四月十四〜十五日と十月九〜十日には高山で、四月十九〜二十日には古川で屋台が出る。その日もこの旅は成り立つが、宿は何か月も前に押さえ、人出を覚悟すること。",
            zh:"4 月 14–15 日與 10 月 9–10 日，高山的屋台會上街；4 月 19–20 日則在古川。這些日子也能走這條路線，但須提前數月訂房，並有人潮擁擠的心理準備。" } }
      ] },
    { t:"section",
      id:"route-b",
      title:{ en:"B · The hinoki road", ja:"B · ヒノキの道", zh:"B · 檜木之路" },
      jp:"中津川—付知—加子母",
      body:[
        { t:"p",
          text:{
            en:"North of Nakatsugawa, the valleys of Tsukechi and Kashimo belong to the Ura-Kiso — the back of the Kiso forests, which the Owari domain closed to felling and which have supplied timber for the Ise shrine rebuilding since 1709. The road climbs from the Chūō line through rice terraces and hinoki plantations to a village where timber, carpentry and farm kabuki still hold the community together. Go in May for fresh green or October for the Tsukechi gorge in autumn colour. See <a href=\"hinoki.html\">hinoki</a> and <a href=\"fivetrees.html\">the five trees</a>.",
            ja:"中津川の北、付知と加子母の谷は裏木曽に属する。尾張藩が伐採を禁じた木曽の森の裏側で、一七〇九年から伊勢の式年遷宮に御用材を出してきた。道は中央本線から棚田とヒノキの人工林を抜けてのぼり、材木と大工仕事と地歌舞伎がいまも共同体を結ぶ村に至る。新緑なら五月、付知峡の紅葉なら十月がよい。<a href=\"hinoki.html\">ヒノキ</a>と<a href=\"fivetrees.html\">木曽五木</a>を参照。",
            zh:"中津川以北的付知與加子母河谷，屬於「裏木曾」——木曾森林的背面，尾張藩曾禁止在此伐木，自 1709 年起為伊勢神宮式年遷宮供應御用材。道路從中央本線出發，穿過梯田與檜木人工林一路上行，抵達一座至今仍以木材、木工與農村歌舞伎凝聚社群的村落。想看新綠請在 5 月前往，想看付知峽紅葉則選 10 月。見<a href=\"hinoki.html\">檜木</a>與<a href=\"fivetrees.html\">木曾五木</a>。" } },
        { t:"steps",
          items:[
            { title:{ en:"Day 1 · Nakatsugawa and the Nakasendō", ja:"一日目 · 中津川と中山道", zh:"第一天 · 中津川與中山道" },
              jp:"中津川・馬籠",
              meta:{
                en:"Nagoya → Nakatsugawa · about 50 min by limited express Shinano, about 1 h 20 min by rapid train",
                ja:"名古屋→中津川 · 特急しなので約五十分、快速で約一時間二十分",
                zh:"名古屋→中津川 · 特急信濃號約 50 分鐘，快速列車約 1 小時 20 分" },
              text:{
                en:"The old post road runs through Nakatsugawa. Take the bus up to Magome, a post town on the ridge, and walk the stone-paved Nakasendō — about eight kilometres and two and a half to three hours — over the pass to Tsumago in Nagano, through forest that was once Owari's closely guarded timber land. Return by bus and stay in Nakatsugawa.",
                ja:"中津川の町を旧街道が通る。バスで尾根の宿場馬籠へのぼり、石畳の中山道を峠越しに長野県の妻籠まで歩く。約八キロ、二時間半から三時間で、かつて尾張藩が厳しく守った材木の森の中を行く。バスで戻り、中津川に泊まる。",
                zh:"舊驛道穿過中津川市區。搭巴士上到山脊上的宿場町馬籠，沿石板鋪成的中山道越過山口走到長野縣的妻籠——約八公里、兩個半到三小時，沿途森林昔日是尾張藩嚴加守護的木材之地。搭巴士回程，住中津川。" } },
            { title:{ en:"Day 2 · Tsukechi", ja:"二日目 · 付知", zh:"第二天 · 付知" },
              jp:"付知・付知峡",
              meta:{
                en:"Nakatsugawa → Tsukechi · roughly 30 km, about 40 min by car or about an hour by Kita-Ena bus (few buses a day)",
                ja:"中津川→付知 · 約三十キロ、車で約四十分、北恵那交通のバスで一時間ほど（便は少ない）",
                zh:"中津川→付知 · 約 30 公里，開車約 40 分鐘，搭北惠那交通巴士約一小時（班次少）" },
              text:{
                en:"Tsukechi is a town of sawmills and woodworkers — the furniture maker Hayakawa Kennosuke set up his workshop here in 1969. Walk up the Tsukechi gorge to its waterfalls and pools, and visit the shrine of Moriyama, where the Ise timber felled in the valley in 2025 rested on its way down.",
                ja:"付知は製材所と木工の町である。木工家早川謙之輔は一九六九年にここに工房を開いた。付知峡をのぼって滝と淵を見、二〇二五年に谷で伐られた伊勢の御用材が下る途中に休んだ護山神社を訪ねる。",
                zh:"付知是製材廠與木工匠人聚集的小鎮——木工家早川謙之輔於 1969 年在此設立工坊。沿付知峽而上觀賞瀑布與深潭，再參拜護山神社——2025 年在此河谷伐下的伊勢御用材，運下山途中曾在這裡停駐。" } },
            { title:{ en:"Day 2 (cont.) · Kashimo", ja:"二日目（続き） · 加子母", zh:"第二天（續） · 加子母" },
              jp:"加子母",
              meta:{
                en:"Tsukechi → Kashimo · about 15 km, 20 min by car",
                ja:"付知→加子母 · 約十五キロ、車で二十分",
                zh:"付知→加子母 · 約 15 公里，開車 20 分鐘" },
              text:{
                en:"At the forest cooperative's Mokumoku Centre, make a pair of hinoki chopsticks and see school desks and furniture from local timber; stand in the Meiji-za theatre of 1894; and, if you have booked a guided walk, enter the Kiso Hinoki Reserve Forest, where trees of three and four centuries stand beside a hinoki of about a thousand years.",
                ja:"森林組合のモクモクセンターでヒノキの箸をつくり、地元の材でつくった学校机や家具を見る。一八九四年の明治座の舞台に立ち、ガイドつきの散策を予約してあれば木曽ヒノキ備林に入る。樹齢三百年、四百年の木々のかたわらに、樹齢約千年のヒノキが立つ。",
                zh:"在森林組合的 Mokumoku 中心親手做一雙檜木筷，看看用在地木材製作的學校課桌與家具；站上 1894 年的明治座舞台；若已預約導覽健行，便可進入木曾檜木備林——樹齡三、四百年的林木旁，立著一株約千歲的檜木。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Nakatsugawa city and Gifu Prefecture tourism (Kashimo, Tsukechi, reserve-forest tours); Forestry Agency Chūbu (reserve forest); Ise Jingū (Sengū schedule). Walking time Magome–Tsumago as commonly given by local tourism offices.",
            ja:"出典：中津川市・岐阜県観光（加子母、付知、備林ツアー）、林野庁中部森林管理局（備林）、神宮司庁（遷宮の日程）。馬籠—妻籠の歩行時間は地元観光案内の一般的な目安。",
            zh:"資料來源：中津川市與岐阜縣觀光（加子母、付知、備林導覽）；林野廳中部森林管理局（備林）；神宮司廳（遷宮日程）。馬籠—妻籠步行時間為當地觀光單位常見的參考值。" } }
      ] },
    { t:"section",
      id:"map",
      title:{ en:"The five routes on one map", ja:"五つの道筋を一枚の地図に", zh:"一張圖看五條路線" },
      jp:"略図",
      body:[
        { t:"figure",
          caption:{
            en:"Schematic map of Gifu prefecture with the five journeys drawn as simple lines between towns. Not to scale: positions are approximate and the outline is simplified; the pale lines are the main rivers. Nagoya and Inuyama lie just outside the prefecture in Aichi.",
            ja:"岐阜県の略図に、五つの旅を町と町を結ぶ簡単な線で描いた。縮尺は正確でなく、位置はおよそのもので、県の輪郭も単純化してある。淡い線はおもな川。名古屋と犬山は県境のすぐ外、愛知県にある。",
            zh:"岐阜縣示意圖，以城鎮間的簡單連線標出五段旅程。未依比例繪製：位置為概略，縣界輪廓亦經簡化；淺色線條為主要河川。名古屋與犬山位於縣界外的愛知縣。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 580" role="img">';
            function T(o){ return L(o); }
            s += F.text(20, 28, lang==="en"?"FIVE JOURNEYS":(lang==="ja"?"五つの旅":"五段旅程"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            s += F.text(740, 28, T({ en:"Schematic — not to scale", ja:"略図・縮尺不正確", zh:"示意圖・未依比例" }), { size:10.5, fill:"#8B857C", anchor:"end" });
            // north arrow
            s += '<path d="M722 44 L730 66 L722 60 L714 66 Z" fill="#8B857C"/>';
            s += F.text(722, 80, "N", { size:10, fill:"#8B857C", anchor:"middle" });
            // prefecture outline (schematic)
            s += '<path d="M175 78 L330 58 L470 64 L560 92 L605 160 L596 232 L646 300 L660 380 L612 440 L500 452 L390 448 L300 468 L196 462 L140 404 L156 322 L126 250 L156 162 Z" fill="#F5F3ED" stroke="#B4AC9C" stroke-width="1.2"/>';
            s += F.text(200, 150, T({ en:"HIDA", ja:"飛騨", zh:"飛驒" }), { size:11, fill:"#ADA79E", serif:true });
            s += F.text(170, 300, T({ en:"MINO", ja:"美濃", zh:"美濃" }), { size:11, fill:"#ADA79E", serif:true });
            // rivers (pale)
            var RV = [
              ["M412 44 L398 96 L410 150", { en:"Miyagawa", ja:"宮川", zh:"宮川" }, 420, 58, "start"],
              ["M432 176 L438 250 L420 312 L402 360", { en:"Hida R.", ja:"飛騨川", zh:"飛驒川" }, 446, 290, "start"],
              ["M640 330 L588 372 L520 368 L462 374 L402 368 L372 386 L346 426 L300 452 L262 500", { en:"Kiso R.", ja:"木曽川", zh:"木曾川" }, 560, 358, "middle"],
              ["M296 200 L290 262 L322 322 L302 364 L246 392 L232 470", { en:"Nagara R.", ja:"長良川", zh:"長良川" }, 250, 214, "end"],
              ["M150 300 L178 360 L196 404 L214 470", { en:"Ibi R.", ja:"揖斐川", zh:"揖斐川" }, 146, 352, "end"]
            ];
            for (var i=0;i<RV.length;i++){ s += '<path d="'+RV[i][0]+'" fill="none" stroke="#E0E7E9" stroke-width="6" stroke-linejoin="round"/>'; s += F.text(RV[i][2], RV[i][3], T(RV[i][1]), { size:9.5, fill:"#8B857C", anchor:RV[i][4] }); }
            // routes
            var R = [
              { k:"A", d:"M410 150 L398 96", st:'stroke="#55504A" stroke-width="3.2"', lx:376, ly:124 },
              { k:"B", d:"M586 376 L586 302 L572 242", st:'stroke="#7C6B52" stroke-width="3" stroke-dasharray="9 5"', lx:606, ly:272 },
              { k:"C", d:"M586 376 L520 392 L382 402 L352 356 L340 318 L298 262", st:'stroke="#55504A" stroke-width="3" stroke-dasharray="2 5" stroke-linecap="round"', lx:470, ly:410 },
              { k:"D", d:"M246 392 L302 364 L322 322 L290 262", st:'stroke="#A08F73" stroke-width="3.2"', lx:268, ly:338 },
              { k:"E", d:"M410 150 L430 250 L402 362 L346 426 L246 392 L186 404", st:'stroke="#8B857C" stroke-width="3" stroke-dasharray="12 4 3 4"', lx:432, ly:318 }
            ];
            for (i=0;i<R.length;i++){ s += '<path d="'+R[i].d+'" fill="none" '+R[i].st+' stroke-linejoin="round"/>'; }
            s += '<path d="M402 362 L462 374" fill="none" stroke="#8B857C" stroke-width="2" stroke-dasharray="3 3"/>';
            for (i=0;i<R.length;i++){ s += '<circle cx="'+R[i].lx+'" cy="'+R[i].ly+'" r="9" fill="#FBFAF7" stroke="#55504A"/>' + F.text(R[i].lx, R[i].ly+4, R[i].k, { size:10.5, fill:"#201E1B", anchor:"middle", serif:true }); }
            // towns
            function pt(x,y,t,dx,dy,anc,big){ return '<circle cx="'+x+'" cy="'+y+'" r="'+(big?5:4)+'" fill="'+(big?"#7C6B52":"#EADCC1")+'" stroke="#7C6B52"/>' + F.text(x+dx, y+dy, T(t), { size:big?11.5:10.5, fill:"#201E1B", anchor:anc }); }
            s += pt(222, 112, { en:"Shirakawa-gō", ja:"白川郷", zh:"白川鄉" }, 0, 20, "middle");
            s += pt(398, 96, { en:"Hida-Furukawa", ja:"飛騨古川", zh:"飛驒古川" }, -10, 4, "end");
            s += pt(410, 150, { en:"Takayama", ja:"高山", zh:"高山" }, 12, 4, "start", true);
            s += pt(430, 250, { en:"Gero", ja:"下呂", zh:"下呂" }, 10, 4, "start");
            s += pt(290, 262, { en:"Gujō Hachiman", ja:"郡上八幡", zh:"郡上八幡" }, -10, -6, "end");
            s += pt(322, 322, { en:"Mino", ja:"美濃", zh:"美濃" }, -10, 4, "end");
            s += pt(302, 364, { en:"Seki", ja:"関", zh:"關" }, -10, -4, "end");
            s += pt(246, 392, { en:"Gifu", ja:"岐阜", zh:"岐阜" }, -10, -6, "end", true);
            s += pt(186, 404, { en:"Ōgaki", ja:"大垣", zh:"大垣" }, -4, 20, "middle");
            s += pt(402, 362, { en:"Mino-Ōta", ja:"美濃太田", zh:"美濃太田" }, 10, 26, "start");
            s += pt(462, 374, { en:"Yaotsu", ja:"八百津", zh:"八百津" }, 4, -10, "middle");
            s += pt(382, 402, { en:"Kani", ja:"可児", zh:"可兒" }, 0, 20, "middle");
            s += pt(586, 376, { en:"Nakatsugawa", ja:"中津川", zh:"中津川" }, 10, 18, "start", true);
            s += pt(586, 302, { en:"Tsukechi", ja:"付知", zh:"付知" }, 10, 4, "start");
            s += pt(572, 242, { en:"Kashimo", ja:"加子母", zh:"加子母" }, 10, -4, "start");
            // outside the prefecture
            s += '<circle cx="346" cy="426" r="4" fill="#FBFAF7" stroke="#8B857C"/>' + F.text(356, 440, T({ en:"Inuyama (Aichi)", ja:"犬山（愛知）", zh:"犬山（愛知）" }), { size:10, fill:"#55504A" });
            s += '<circle cx="300" cy="500" r="5" fill="#FBFAF7" stroke="#8B857C"/>' + F.text(312, 504, T({ en:"Nagoya · Centrair (Aichi)", ja:"名古屋・セントレア（愛知）", zh:"名古屋・中部機場（愛知）" }), { size:10.5, fill:"#55504A" });
            s += '<path d="M246 400 L294 494" fill="none" stroke="#CDC6B9" stroke-dasharray="3 3"/>';
            s += '<path d="M412 44 L412 30" fill="none" stroke="#CDC6B9"/>' + F.text(424, 40, T({ en:"to Toyama", ja:"富山へ", zh:"往富山" }), { size:10, fill:"#55504A" });
            // legend
            var LG = [
              { k:"A", st:'stroke="#55504A" stroke-width="3.2"', t:{ en:"Carpenters and furniture", ja:"匠と家具", zh:"木匠與家具" } },
              { k:"B", st:'stroke="#7C6B52" stroke-width="3" stroke-dasharray="9 5"', t:{ en:"The hinoki road", ja:"ヒノキの道", zh:"檜木之路" } },
              { k:"C", st:'stroke="#55504A" stroke-width="3" stroke-dasharray="2 5" stroke-linecap="round"', t:{ en:"The guitar road", ja:"ギターの道", zh:"吉他之路" } },
              { k:"D", st:'stroke="#A08F73" stroke-width="3.2"', t:{ en:"Paper, water and blades", ja:"紙と水と刃物", zh:"紙、水與刀" } },
              { k:"E", st:'stroke="#8B857C" stroke-width="3" stroke-dasharray="12 4 3 4"', t:{ en:"The timber rivers", ja:"材木の川", zh:"木材之河" } }
            ];
            s += '<path d="M20 522 L740 522" stroke="#E1DCD2"/>';
            for (i=0;i<LG.length;i++){
              var lx = 20 + (i%3)*245, ly = 542 + Math.floor(i/3)*24;
              s += '<path d="M'+lx+' '+ly+' L'+(lx+34)+' '+ly+'" fill="none" '+LG[i].st+'/>';
              s += F.text(lx+42, ly+4, LG[i].k+" · "+T(LG[i].t), { size:10.5, fill:"#201E1B" });
            }
            return s + '</svg>';
          } },
        { t:"p",
          text:{
            en:"The map is a diagram, not a road map: it shows which towns each journey links and how the routes relate to the rivers, which is also how the old timber moved. Journeys C, D and E cross in the middle of the prefecture, around Mino-Ōta, Seki and Gifu, so they can be run into one another — a week in Gifu might be A, then the train south along E, then D and C from a base in Gifu or Nagoya, ending with B on the way to the Kiso valley.",
            ja:"この地図は道路地図ではなく図解である。それぞれの旅がどの町を結ぶか、道筋が川とどう関わるかを示す。川はまた、昔の材木が動いた道でもあった。C、D、Eは県の中ほど、美濃太田、関、岐阜のあたりで交わるから、続けて回ることもできる。岐阜での一週間なら、まずA、次にEに沿って列車で南へ下り、岐阜か名古屋を拠点にDとCを回り、最後に木曽谷へ向かう途中でBをたどる、という組み方がある。",
            zh:"這張圖是示意圖而非道路地圖：它標示每段行程串連哪些城鎮，以及路線與河川的關係——而河川也正是昔日木材移動的路徑。行程 C、D、E 在縣中央的美濃太田、關市與岐阜一帶交會，可以接續進行：若在岐阜待一週，可先走 A，再沿 E 搭火車南下，以岐阜或名古屋為據點走 D 與 C，最後在前往木曾谷途中走 B。" } }
      ] },
    { t:"section",
      id:"route-c",
      title:{ en:"C · The guitar road", ja:"C · ギターの道", zh:"C · 吉他之路" },
      jp:"中津川—可児—郡上",
      body:[
        { t:"p",
          text:{
            en:"Two of Japan's best-known acoustic guitar makers work a short train ride apart in southern Gifu: Takamine, founded in 1959 in Sakashita, now part of Nakatsugawa, and K. Yairi, which moved from Nagoya to Kani in 1945 to escape the air raids. Only Yairi runs regular public tours, so the journey is built around its Saturday. It ends in Gujō, where the town's summer music is played on shamisen, flutes and drums and danced in wooden geta. See <a href=\"guitarindustry.html\">the guitar industry</a> and <a href=\"luthiers.html\">luthiers</a>.",
            ja:"日本でよく知られたアコースティックギターのメーカーのうち二社が、岐阜県南部で列車でわずかの距離をおいて仕事をしている。一九五九年に坂下（いまの中津川市）で創業したタカミネと、一九四五年に空襲を逃れて名古屋から可児に移ったヤイリギターである。定期的に一般の見学を受けているのはヤイリだけなので、旅はその土曜日を軸に組む。終わりは郡上で、町の夏の音楽は三味線と笛と太鼓で奏でられ、木の下駄で踊られる。<a href=\"guitarindustry.html\">ギター産業</a>と<a href=\"luthiers.html\">製作家</a>を参照。",
            zh:"日本兩家知名的木吉他製造商，在岐阜縣南部相距只有一小段火車車程：1959 年創立於坂下（今中津川市）的 Takamine，以及 1945 年為躲避空襲從名古屋遷至可兒的 K.Yairi。只有 Yairi 定期開放一般參觀，所以行程以它的週六為軸心。終點是郡上，當地夏日的音樂以三味線、笛與太鼓演奏，人們穿著木屐起舞。見<a href=\"guitarindustry.html\">吉他產業</a>與<a href=\"luthiers.html\">製琴師</a>。" } },
        { t:"steps",
          items:[
            { title:{ en:"Day 1 (Friday) · Nakatsugawa", ja:"一日目（金曜） · 中津川", zh:"第一天（週五） · 中津川" },
              jp:"タカミネ",
              meta:{
                en:"Nagoya → Nakatsugawa · about 50 min by limited express Shinano",
                ja:"名古屋→中津川 · 特急しなので約五十分",
                zh:"名古屋→中津川 · 特急信濃號約 50 分鐘" },
              text:{
                en:"Visit Takamine's showroom in Nakatsugawa; if you hope to see the factory at Sakashita, write to the company well ahead — its site mentions a factory tour but gives no public schedule. In autumn, try the city's chestnut sweet, <em>kuri-kinton</em>.",
                ja:"中津川のタカミネのショールームを訪ねる。坂下の工場を見たいなら、ずっと前に会社に問い合わせること。サイトは工場見学に触れているが、一般向けの日程は示していない。秋なら町の栗菓子<em>栗きんとん</em>を。",
                zh:"參觀 Takamine 在中津川的展示間；若想看坂下的工廠，務必提早去信洽詢——官網雖提到工廠參觀，但未公布一般日程。秋天可以品嚐當地的栗子甜點<em>「栗金飩」</em>。" } },
            { title:{ en:"Day 2 (Saturday) · Kani", ja:"二日目（土曜） · 可児", zh:"第二天（週六） · 可兒" },
              jp:"ヤイリギター",
              meta:{
                en:"Nakatsugawa → Tajimi (Chūō line, about 40 min) → Kani (Taita line, about 30 min); taxi to the workshop",
                ja:"中津川→多治見（中央本線、約四十分）→可児（太多線、約三十分）、工房へはタクシー",
                zh:"中津川→多治見（中央本線約 40 分）→可兒（太多線約 30 分）；再搭計程車到工坊" },
              text:{
                en:"K. Yairi's free guided tours run on Saturdays, usually at 10:00 and 13:30, for up to ten people, by reservation up to two months ahead. You will see stacks of seasoning wood, tops braced and tapped by hand, and a showroom where visitors may play the guitars. From Nagoya, Kani is also about an hour by Meitetsu train.",
                ja:"ヤイリギターの無料の見学は土曜日、ふつう十時と十三時半に、十人までで、二か月前から予約を受ける。枯らしている材の山、手で力木を貼り叩いて確かめる表板、そして訪れた人がギターを弾ける展示室が見られる。名古屋からなら、可児へは名鉄でも一時間ほどである。",
                zh:"K.Yairi 的免費導覽於週六舉行，通常在 10:00 與 13:30，每團最多十人，最早可於兩個月前預約。可以看到陳放中的木料堆、以手工貼音梁並敲擊確認的面板，以及能讓訪客試彈吉他的展示室。從名古屋搭名鐵到可兒也約一小時。" } },
            { title:{ en:"Day 3 · Gujō", ja:"三日目 · 郡上", zh:"第三天 · 郡上" },
              jp:"郡上八幡",
              meta:{
                en:"Kani → Gujō Hachiman · about an hour by car by expressway; by train via Mino-Ōta and the Nagaragawa Railway, allow two hours or more",
                ja:"可児→郡上八幡 · 高速道路で車約一時間。列車なら美濃太田と長良川鉄道経由で二時間以上をみる",
                zh:"可兒→郡上八幡 · 走高速公路開車約一小時；搭火車經美濃太田轉長良川鐵道，需預留兩小時以上" },
              text:{
                en:"Walk the water channels and climb to the wooden castle keep of 1933. In the dance season, join the circle in the evening; the rest of the year, listen for the dance songs in the town's shops. Those who want to build rather than watch can look for guitar-making classes: a small custom workshop in Yamagata city, north of Gifu, offers them — contact it in advance.",
                ja:"水路を歩き、一九三三年の木造の天守へのぼる。踊りの季節なら、夕方から輪に加わる。それ以外の季節も、町の店先で踊りの唄が聞こえてくる。見るより自分でつくりたい人は、ギター製作の教室を探すとよい。岐阜の北の山県市にある小さな注文製作の工房が教室を開いている。前もって連絡すること。",
                zh:"沿水道漫步，登上 1933 年的木造天守。在舞蹈季節，傍晚可以加入舞圈；其他季節也能在鎮上店家聽到舞曲。想親手做琴而非只是參觀的人，可以找找製琴課程：岐阜北方山縣市的一家小型訂製工坊有開課——請事先聯絡。" } }
          ] }
      ] },
    { t:"section",
      id:"route-d",
      title:{ en:"D · Paper, water and blades", ja:"D · 紙と水と刃物", zh:"D · 紙、水與刀" },
      jp:"関—美濃—郡上八幡",
      body:[
        { t:"p",
          text:{
            en:"The Nagara valley north of Gifu joins three crafts that depend on wood and water: the swordsmiths of Seki, who needed charcoal from the hills; the papermakers of Mino, who needed clean cold water and the inner bark of the paper mulberry; and the dancers and river people of Gujō Hachiman. The Nagaragawa Railway links all three, and the line itself is a pleasure — a single track along the river through sugi and hinoki. See <a href=\"paper.html\">paper</a> and <a href=\"tools.html\">tools</a>.",
            ja:"岐阜の北の長良川の谷は、木と水にたよる三つの手仕事を結ぶ。山の炭を要した関の刀鍛冶、清く冷たい水と楮の内皮を要した美濃の紙漉き、そして郡上八幡の踊り手と川の人々である。長良川鉄道が三つをつなぎ、その線路そのものが楽しい。スギとヒノキの間を川に沿って走る単線である。<a href=\"paper.html\">紙</a>と<a href=\"tools.html\">大工道具</a>を参照。",
            zh:"岐阜北方的長良川河谷，串起三種仰賴木與水的手藝：需要山中木炭的關市刀匠；需要潔淨冰冷的水與楮樹內皮的美濃抄紙人；以及郡上八幡的舞者與河川人家。長良川鐵道連結三地，這條鐵路本身就是享受——一條沿著河流、穿行於柳杉與檜木之間的單線鐵道。見<a href=\"paper.html\">和紙</a>與<a href=\"tools.html\">木匠的工具</a>。" } },
        { t:"steps",
          items:[
            { title:{ en:"Day 1 · Seki", ja:"一日目 · 関", zh:"第一天 · 關" },
              jp:"刃物と円空",
              meta:{
                en:"Gifu → Seki · about 40 min by bus; plan for the first Sunday of the month to see forging",
                ja:"岐阜→関 · バスで約四十分。鍛錬を見るなら月の第一日曜に合わせる",
                zh:"岐阜→關 · 搭巴士約 40 分鐘；想看鍛造請安排在每月第一個週日" },
              text:{
                en:"At the Seki Kaji Denshōkan swordsmiths demonstrate traditional forging on set days, and on some of them craftsmen also show polishing and the making of mounts — the scabbard of a Japanese blade is traditionally carved from soft, even-grained <em>hōnoki</em> (magnolia). Then look for Enkū, the carver-monk who died near Seki in 1695: his hatchet-cut figures are kept at the temple of Miroku-ji and in the city's Enkū museum.",
                ja:"関鍛冶伝承館では決まった日に刀匠が古式の鍛錬を見せ、日によっては研ぎと外装の技も公開される。日本刀の鞘は、柔らかく木目の揃ったホオノキから削り出すのが伝統である。つづいて、一六九五年に関の近くで没した彫刻僧円空を訪ねる。鉈で彫った像は弥勒寺と市の円空館に守られている。",
                zh:"在關鍛冶傳承館，刀匠於固定日期示範傳統鍛造，部分日子也公開研磨與刀裝技藝——日本刀的刀鞘傳統上以質軟、紋理均勻的<em>厚朴木</em>削製而成。接著尋訪 1695 年圓寂於關市附近的雕刻僧圓空：他以柴刀鑿成的造像保存在彌勒寺與市立圓空館。" } },
            { title:{ en:"Day 1 (cont.) · Mino", ja:"一日目（続き） · 美濃", zh:"第一天（續） · 美濃" },
              jp:"うだつと和紙",
              meta:{
                en:"Seki → Mino · about 20 min by Nagaragawa Railway or car",
                ja:"関→美濃 · 長良川鉄道か車で約二十分",
                zh:"關→美濃 · 搭長良川鐵道或開車約 20 分鐘" },
              text:{
                en:"Walk the udatsu street in the late afternoon and stay the night. Next morning go up the Itadori river to the Mino Washi no Sato Kaikan to make a sheet of paper; its bamboo screens and wooden vats are the papermaker's tools. The prefecture's forest academy is also in Mino; its morinos centre runs forest programmes for the public.",
                ja:"夕方にうだつの通りを歩いて一泊する。翌朝、板取川をさかのぼって美濃和紙の里会館で紙を一枚漉く。竹の簀と木の漉き舟が紙漉きの道具である。県の森林文化アカデミーも美濃にあり、その森林総合教育センター、モリノスは一般向けの森のプログラムを開いている。",
                zh:"傍晚走訪卯建街道並在此住一晚。隔天早上沿板取川上溯到美濃和紙之里會館，親手抄一張紙；竹簾與木製紙槽正是抄紙人的工具。岐阜縣立森林文化學院也設在美濃，其森林綜合教育中心 morinos 為一般民眾舉辦森林活動。" } },
            { title:{ en:"Day 2 · Gujō Hachiman", ja:"二日目 · 郡上八幡", zh:"第二天 · 郡上八幡" },
              jp:"水の町",
              meta:{
                en:"Mino → Gujō Hachiman · about an hour by Nagaragawa Railway; back to Gifu or Nagoya by highway bus in about 1–1.5 h",
                ja:"美濃→郡上八幡 · 長良川鉄道で約一時間。岐阜か名古屋へは高速バスで一時間から一時間半",
                zh:"美濃→郡上八幡 · 搭長良川鐵道約一小時；回岐阜或名古屋搭高速巴士約 1–1.5 小時" },
              text:{
                en:"Gujō is a town of springs and channels where households once washed food in stepped water basins. The hills around are the home of Nagara sugi, prized for its even grain and red-and-white heartwood. Eat grilled <em>ayu</em> from the river, then take the bus home.",
                ja:"郡上は湧き水と水路の町で、かつて家々は段になった水舟で食べ物を洗った。まわりの山は、目の揃った木目と赤白の混じる心材で好まれる長良杉のふるさとである。川の<em>鮎</em>の塩焼きを食べてバスで帰る。",
                zh:"郡上是湧泉與水道之城，從前家家戶戶在階梯狀的水槽「水舟」裡清洗食材。周圍山林是長良杉的故鄉，以紋理均勻、心材紅白相間而受重視。品嚐河裡的烤<em>香魚</em>，再搭巴士回程。" } }
          ] }
      ] },
    { t:"section",
      id:"route-e",
      title:{ en:"E · The timber rivers", ja:"E · 材木の川", zh:"E · 木材之河" },
      jp:"高山—下呂—八百津—岐阜—大垣",
      body:[
        { t:"p",
          text:{
            en:"For most of history, timber left the mountains by water. After the shogunate took Hida under direct rule in 1692, villagers of the upper Hida valley were employed to cut hundreds of thousands of split shingle-blanks and logs, which were floated down the Hida river to the Kiso and on to the timber yards of Nagoya and Kuwana; from the Kiso forests, logs came down to the Owari domain's catching station at Nishikori and were bound there into rafts. Journey E follows that water road from Takayama to the plain, then crosses west to the Nagara and the Ibi, and ends in Ōgaki, a town of springs and canals that still makes most of Japan's wooden masu from the same hinoki. See <a href=\"timberrivers.html\">rivers</a>, <a href=\"logging.html\">logging</a> and <a href=\"masu.html\">masu</a>.",
            ja:"歴史の大半を通じて、材木は水に乗って山を出た。一六九二年に幕府が飛騨を直轄にしたのち、飛騨川上流の村人は何十万という榑木と丸太を伐る仕事に雇われ、それらは飛騨川を木曽川へ、さらに名古屋と桑名の材木置場へと流された。木曽の森からは丸太が尾張藩の錦織綱場まで流れ下り、そこで筏に組まれた。Eの旅はこの水の道を高山から平野までたどり、それから西へ長良川と揖斐川を越えて、大垣で終わる。湧き水と水路の町で、いまも同じヒノキで日本の木の枡の大半をつくっている。<a href=\"timberrivers.html\">川</a>、<a href=\"logging.html\">伐り出し</a>、<a href=\"masu.html\">枡</a>を参照。",
            zh:"歷史上大部分時間，木材都是順水出山。1692 年幕府將飛驒收歸直轄後，雇用飛驒川上游村民砍伐數十萬片榑木（劈製的木瓦坯料）與原木，順飛驒川漂流入木曾川，再送往名古屋與桑名的木材場；木曾森林的原木則漂流到尾張藩的錦織綱場，在那裡紮成木筏。行程 E 沿著這條水路從高山走到平原，再向西跨過長良川與揖斐川，終點是大垣——一座湧泉與水道之城，至今仍以同樣的檜木製作日本大部分的木枡。見<a href=\"timberrivers.html\">河川</a>、<a href=\"logging.html\">伐運</a>與<a href=\"masu.html\">枡</a>。" } },
        { t:"steps",
          items:[
            { title:{ en:"Day 1 · Down the Hida river", ja:"一日目 · 飛騨川を下る", zh:"第一天 · 順飛驒川而下" },
              jp:"高山—下呂",
              meta:{
                en:"Takayama → Gero · about 45 min by limited express Hida",
                ja:"高山→下呂 · 特急ひだで約四十五分",
                zh:"高山→下呂 · 特急飛驒號約 45 分鐘" },
              text:{
                en:"Begin at the Takayama Jinya, the office that ran Hida's forests for the shogunate, then take the train south. Beyond the watershed the line follows the Hida river through narrow gorges where logs were once driven loose on the spring water. Stop at Gero for the hot springs and the gasshō houses of Gasshō-mura.",
                ja:"幕府のために飛騨の森を治めた役所、高山陣屋から始め、列車で南へ向かう。分水嶺を越えると線路は飛騨川に沿い、かつて春の水に丸太をばらで流した狭い峡谷を抜ける。下呂で降りて温泉と合掌村の合掌造りを見る。",
                zh:"從為幕府管理飛驒森林的高山陣屋出發，再搭火車南下。越過分水嶺後，鐵路沿著飛驒川穿越狹窄峽谷——昔日原木就是趁春水在這裡散流而下。在下呂下車，泡溫泉，參觀合掌村的合掌造民家。" } },
            { title:{ en:"Day 2 · Where the rivers meet", ja:"二日目 · 川の出会うところ", zh:"第二天 · 河流交會之處" },
              jp:"美濃太田・八百津",
              meta:{
                en:"Gero → Mino-Ōta · about 1 h 10 min by limited express; Mino-Ōta → Yaotsu · about half an hour by bus or taxi",
                ja:"下呂→美濃太田 · 特急で約一時間十分。美濃太田→八百津 · バスかタクシーで約三十分",
                zh:"下呂→美濃太田 · 特急約 1 小時 10 分；美濃太田→八百津 · 搭巴士或計程車約半小時" },
              text:{
                en:"At Mino-Ōta the Hida river joins the Kiso. A short way upstream, in Yaotsu, the Owari domain opened its Nishikori office in 1665 with 138 officials; some 300,000 logs a year were caught there on rope booms, counted and roped into rafts for Inuyama and Nagoya. A holly tree marks the site today. Nearby stands the brick Old Yaotsu Power Station of 1911, an Important Cultural Property since 1998, now closed to visitors because of its condition. Spend the night in Mino-Ōta or cross to Inuyama, where the rafts once passed below the castle.",
                ja:"美濃太田で飛騨川は木曽川に合わさる。少しさかのぼった八百津に、尾張藩は一六六五年、百三十八人の役人を置く錦織の役所を開いた。年に約三十万本の丸太がここで綱に留められ、数えられ、筏に組まれて犬山と名古屋へ送られた。いまはクロガネモチの木が跡を示す。近くには一九一一年の煉瓦造りの旧八百津発電所が建ち、一九九八年に重要文化財となったが、傷みのため現在は公開されていない。美濃太田に泊まるか、かつて筏が城の下を過ぎた犬山へ渡る。",
                zh:"飛驒川在美濃太田匯入木曾川。稍往上游的八百津，尾張藩於 1665 年設立錦織役所，常駐官吏 138 人；每年約 30 萬根原木在此被繩索攔住、清點，並紮成木筏送往犬山與名古屋。如今一株鐵冬青標示著舊址。附近有 1911 年建成的磚造舊八百津發電所，1998 年列為重要文化財，目前因建物老朽不對外開放。可住在美濃太田，或渡河到犬山——昔日木筏就從城下經過。" } },
            { title:{ en:"Day 3 · Gifu and Ōgaki", ja:"三日目 · 岐阜と大垣", zh:"第三天 · 岐阜與大垣" },
              jp:"川原町・水の都",
              meta:{
                en:"Mino-Ōta → Gifu · about 30 min by JR; Gifu → Ōgaki · about 10 min by JR",
                ja:"美濃太田→岐阜 · JRで約三十分。岐阜→大垣 · JRで約十分",
                zh:"美濃太田→岐阜 · 搭 JR 約 30 分鐘；岐阜→大垣 · 搭 JR 約 10 分鐘" },
              text:{
                en:"In Gifu, walk Kawaramachi on the Nagara, an Edo-period river port where wholesalers received timber from the mountains of Oku-Mino and Mino paper for lanterns, umbrellas and fans; its latticed houses, narrow at the front and deep behind, survived the wartime bombing. In the afternoon take the train to Ōgaki, where the poet Bashō ended his Narrow Road journey in 1689, and assemble a hinoki masu at a workshop booked a week ahead.",
                ja:"岐阜では長良川べりの川原町を歩く。江戸時代の川湊で、問屋が奥美濃の山の材木と、提灯や傘や扇のための美濃紙を受けた。間口が狭く奥行きの深い格子の家並みは戦災を免れた。午後は列車で大垣へ。一六八九年に芭蕉が「おくのほそ道」の旅を終えた町で、一週間前に予約しておいた工房でヒノキの枡を組み立てる。",
                zh:"在岐阜，漫步長良川畔的川原町——江戶時代的河港，批發商在此接收奧美濃山區的木材，以及製作燈籠、傘與扇子用的美濃紙；門面窄、進深長的格柵町屋躲過了戰時空襲。下午搭火車到大垣——詩人松尾芭蕉在 1689 年結束「奧之細道」之旅的地方——並在一週前預約好的工坊親手組裝一只檜木枡。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Takayama city history (Hida under direct rule, timber cutting); Yaotsu town (Nishikori tsunaba); Gifu Prefecture tourism (Old Yaotsu Power Station); Wikipedia, Kawaramachi (Gifu). Travel times approximate, from operators' timetables.",
            ja:"出典：高山市史（飛騨の天領化と元伐）、八百津町（錦織綱場）、岐阜県観光（旧八百津発電所）、Wikipedia「川原町（岐阜市）」。所要時間は運行会社の時刻表からのおよその値。",
            zh:"資料來源：高山市史（飛驒天領化與伐木）；八百津町（錦織綱場）；岐阜縣觀光（舊八百津發電所）；維基百科「川原町（岐阜市）」。交通時間為依業者時刻表估算的概略值。" } }
      ] },
    { t:"section",
      id:"stay",
      title:{ en:"Where to stay", ja:"どこに泊まるか", zh:"住在哪裡" },
      jp:"宿",
      body:[
        { t:"p",
          text:{
            en:"Gifu offers every kind of lodging, and the choice is part of the journey. Staying in a wooden house is the simplest way to understand how Japanese timber buildings breathe, creak and smell. Book early for festival dates, and remember that in small villages the inn may be the only place to eat in the evening.",
            ja:"岐阜にはあらゆる種類の宿があり、その選び方も旅の一部である。木の家に泊まるのは、日本の木造建築がどう息をし、きしみ、匂うかを知るいちばん簡単な方法である。祭りの日は早めに予約し、小さな村では夕食をとれる場所が宿しかないこともあると心得ておく。",
            zh:"岐阜有各式各樣的住宿，選擇住處本身就是旅程的一部分。住進木造房屋，是體會日本木構建築如何呼吸、嘎吱作響、散發氣味最簡單的方法。祭典期間請及早預訂；也要記得在小村落裡，旅館可能是晚上唯一能用餐的地方。" } },
        { t:"defs",
          items:[
            { term:{ en:"Ryokan", ja:"旅館", zh:"日式旅館" },
              jp:"旅館",
              def:{
                en:"Traditional inns with tatami rooms, baths and set dinners; the older ones in Takayama and Gero are themselves fine wooden buildings, with hinoki baths in many.",
                ja:"畳の部屋、風呂、決まった夕食のある伝統的な宿。高山や下呂の古い宿はそれ自体がすぐれた木造建築で、ヒノキの風呂をもつところも多い。",
                zh:"有榻榻米客房、浴池與定食晚餐的傳統旅館；高山與下呂的老旅館本身就是精緻的木造建築，許多設有檜木浴池。" } },
            { term:{ en:"Minshuku", ja:"民宿", zh:"民宿" },
              jp:"民宿",
              def:{
                en:"Family-run guesthouses, simpler and cheaper; in Shirakawa-gō some are working gasshō farmhouses, where guests sleep under the thatch.",
                ja:"家族で営む簡素で安い宿。白川郷には、客が茅葺きの下で眠る、住まいとして使われている合掌造りの民宿もある。",
                zh:"家庭經營、較簡樸也較便宜的住宿；白川鄉有些民宿就是仍在使用的合掌造農家，旅客睡在茅草屋頂之下。" } },
            { term:{ en:"Station hotels", ja:"駅前のホテル", zh:"車站旁飯店" },
              jp:"ホテル",
              def:{
                en:"Business hotels by the stations of Gifu, Takayama, Nakatsugawa and Ōgaki are the practical base for day trips by train and bus.",
                ja:"岐阜、高山、中津川、大垣の駅前のビジネスホテルは、列車とバスの日帰りの旅の実際的な拠点になる。",
                zh:"岐阜、高山、中津川、大垣車站旁的商務飯店，是搭火車與巴士當日往返的實用據點。" } },
            { term:{ en:"Onsen towns", ja:"温泉町", zh:"溫泉鄉" },
              jp:"温泉",
              def:{
                en:"Gero on Journey E, the Nagaragawa Onsen inns beside the cormorant boats in Gifu, and the Okuhida hot springs east of Takayama.",
                ja:"Eの旅の下呂、岐阜の鵜飼の舟のそばの長良川温泉の宿、高山の東の奥飛騨温泉郷。",
                zh:"行程 E 途經的下呂、岐阜鵜飼船旁的長良川溫泉旅館，以及高山以東的奧飛驒溫泉鄉。" } },
            { term:{ en:"Machiya and farm stays", ja:"町家と農家の宿", zh:"町家與農家住宿" },
              jp:"一棟貸し",
              def:{
                en:"Restored townhouses let whole in Takayama, Mino and Gujō, and farm stays in the mountain villages, give a family or group a house of their own.",
                ja:"高山、美濃、郡上で一棟ごとに貸す修復した町家や、山村の農家民泊は、家族や仲間で一軒の家を使える。",
                zh:"高山、美濃與郡上整棟出租的修復町家，以及山村的農家民宿，能讓一家人或一群朋友獨享一整棟房子。" } }
          ] }
      ] },
    { t:"section",
      id:"food",
      title:{ en:"What to eat on the way", ja:"道中で食べるもの", zh:"沿途吃什麼" },
      jp:"郷土の味",
      body:[
        { t:"p", text:{ en:"Gifu's food is mountain and river food, and some of it is cooked on or with wood: hōba miso grilled on a dried magnolia leaf, goheimochi on a flat wooden skewer, ayu grilled beside the river. The dishes to look for on each journey are described on <a href=\"food.html\">Food of Mino &amp; Hida</a>.", ja:"岐阜の食は山と川の食であり、そのいくつかは木の上で、あるいは木とともに焼かれる。乾いた朴の葉で焼く朴葉味噌、平たい木の串の五平餅、川辺で焼く鮎。それぞれの旅で探したい料理は<a href=\"food.html\">美濃と飛騨の食</a>で紹介する。", zh:"岐阜的飲食是山與河的飲食，其中有些是放在木頭上、或借助木頭烹調的：以乾朴葉烤的朴葉味噌、插在扁平木籤上的五平餅、在河邊烤的香魚。每段旅程值得尋找的料理，見<a href=\"food.html\">美濃與飛驒的飲食</a>。" } },
        { t:"note",
          label:{ en:"From Taiwan", ja:"台湾から", zh:"從台灣出發" },
          text:{
            en:"Taiwanese travellers who know Alishan and Taipingshan will recognise the smell of hinoki, the sawmill towns and the reverence for great old trees; the story of how those two forest regions are linked is told in <a href=\"taiwan.html\">Wood in Taiwan</a>.",
            ja:"阿里山や太平山を知る台湾の旅人は、ヒノキの香り、製材の町、大きな古木への敬意に見覚えがあるだろう。二つの森の地がどう結ばれているかは<a href=\"taiwan.html\">台湾と木</a>で語る。",
            zh:"熟悉阿里山與太平山的台灣旅人，會在這裡認出檜木的香氣、製材小鎮，以及對巨大古木的敬意；兩地森林之間的淵源，請見<a href=\"taiwan.html\">台灣與木</a>。" } }
      ] },
    { t:"related",
      items:[
        { href:"visiting.html",
          why:{ en:"Opening hours, seasons and practical notes.", ja:"開館時間、季節、実用の覚え書き。", zh:"開放時間、季節與實用提醒。" } },
        { href:"timberrivers.html",
          why:{ en:"How timber travelled down the rivers.", ja:"材木はどのように川を下ったか。", zh:"木材如何順河而下。" } },
        { href:"hinoki.html", why:{ en:"The tree at the heart of Journey B.", ja:"Bの旅の中心にある木。", zh:"行程 B 的核心樹種。" } },
        { href:"yairi.html", why:{ en:"The guitar workshop on Journey C.", ja:"Cの旅のギター工房。", zh:"行程 C 的吉他工坊。" } },
        { href:"taiwan.html", why:{ en:"Gifu seen from Taiwan.", ja:"台湾から見た岐阜。", zh:"從台灣看岐阜。" } }
      ] }
  ] };

/* ---- ------------------------------------------- museums */
GIFU.pages["museums"] = {
  kicker: { en:"Journeys · 05", ja:"旅 · 05", zh:"旅程 · 05" },
  title:  { en: "Museums & Workshops", ja: "博物館と工房", zh: "博物館與工坊" },
  jp: "見る · 触れる · 体験する",
  lede: {
    en: "Where to see what this book describes: castles and battlefields, the halls of swordsmiths and papermakers, ceramics museums, playhouses, open-air villages, and museums of insects, fossils and the oldest stone in Japan. The entries are grouped by theme and can be filtered; each says what the place shows and links to the page that tells its story. Opening days and hours change, and several places close in winter or on set weekdays, so check with the place itself before going.",
    ja: "本書が語るものを見られる場所——城と古戦場、刀匠や紙漉きの館、陶磁の美術館、芝居小屋、野外の村、そして昆虫や化石や日本最古の石の博物館。主題ごとにまとめ、絞り込めるようにした。各項目には何が見られるかを記し、その物語を語る頁へつないだ。開館日や時間は変わり、冬季や特定の曜日に閉まるところも少なくないので、出かける前に各施設に確かめてほしい。",
    zh: "本書所描述之物的觀賞之處：城堡與古戰場、刀匠與造紙者的館舍、陶瓷美術館、戲棚、露天村落，以及昆蟲、化石與日本最古老之石的博物館。條目依主題分組並可篩選；每一條說明該處可看什麼，並連到講述其故事的頁面。開館日與時間會變動，不少地方冬季或固定週間休館，出發前請先向各設施確認。"
  },
  body: [
    { t:"section", id:"list",
      title:{ en:"The places", ja:"施設", zh:"設施" }, jp:"一覧",
      body:[
      { t:"brands", placeholder:{ en:"Filter — try “castle”, “Takayama”, “paper”…", ja:"絞り込み——「城」「高山」「紙」など", zh:"篩選——試試「城」、「高山」、「紙」…" }, items:[

        { group:{ en:"History and castles", ja:"歴史と城", zh:"歷史與城堡" }, jp:"歴史", id:"g-history" },

        { jp:"岐阜城", r:"Gifu Castle", h:"岐阜市", hr:"Gifu City", muni:"gifu", kind:"museum", est:"",
          note:{ en:"A 1956 reconstruction of the keep on the summit of Kinkazan, reached by ropeway, with a small museum inside and a view across the Nōbi Plain. The excavated site of Nobunaga's palace is at the western foot of the mountain in Gifu Park. See <a href=\"nobunaga.html\">Nobunaga's Gifu</a>.",
            ja:"金華山の山頂に1956年に再建された天守で、ロープウェーで上る。内部は小さな資料館になっており、濃尾平野を一望できる。信長の居館跡の発掘地は、山の西麓の岐阜公園にある。<a href=\"nobunaga.html\">信長の岐阜</a>を参照。",
            zh:"金華山山頂 1956 年重建的天守，可搭纜車上山，內部設有小型展示館，可遠眺濃尾平原。信長居館的發掘遺址位於山西麓的岐阜公園。見<a href=\"nobunaga.html\">信長的岐阜</a>。" } },

        { jp:"岐阜市歴史博物館", r:"Gifu City Museum of History", h:"岐阜市", hr:"Gifu City", muni:"gifu", kind:"museum", est:"",
          note:{ en:"In Gifu Park at the foot of Kinkazan: the history of the city from ancient times, with the closest attention to the Saitō, to Nobunaga and to the castle town and its market.",
            ja:"金華山のふもとの岐阜公園にあり、古代からの岐阜の歴史を扱う。とりわけ斎藤氏、信長、そして城下町とその市に詳しい。",
            zh:"位於金華山麓的岐阜公園，介紹岐阜自古以來的歷史，對齋藤氏、信長以及城下町與其市集著墨最多。" } },

        { jp:"岐阜関ケ原古戦場記念館", r:"Gifu Sekigahara Battlefield Memorial Museum", h:"岐阜県", hr:"Gifu Prefecture", muni:"sekigahara", kind:"museum", est:"2020",
          note:{ en:"Opened in 2020 in the middle of the battlefield, with a theatre that puts the visitor inside the battle and a roof terrace from which the commanders' positions can be picked out. See <a href=\"sekigahara.html\">Sekigahara</a>.",
            ja:"2020年に古戦場のただなかに開館した。合戦のなかに身を置くような映像の部屋と、各武将の陣跡を見わたせる屋上の展望テラスがある。<a href=\"sekigahara.html\">関ヶ原</a>を参照。",
            zh:"2020 年開館，位於古戰場正中央，設有讓觀眾彷彿置身戰役之中的影像劇場，以及可辨認各武將陣地的屋頂展望台。見<a href=\"sekigahara.html\">關原</a>。" } },

        { jp:"高山陣屋", r:"Takayama Jin'ya", h:"岐阜県", hr:"Gifu Prefecture", muni:"takayama", kind:"museum", est:"",
          note:{ en:"The office from which the shogunate governed Hida for 176 years after 1692, and the only such intendant's office to survive in Japan: halls, offices, rice storehouses and an interrogation room. A morning market is held in front of it. See <a href=\"edo.html\">The Edo Patchwork</a>.",
            ja:"1692年から176年にわたり幕府が飛騨を治めた役所で、全国で唯一現存する郡代・代官の役所。広間、役所、御蔵、吟味所が残る。前では朝市が開かれる。<a href=\"edo.html\">江戸時代の美濃・飛騨</a>を参照。",
            zh:"1692 年起幕府統治飛驒 176 年的官署，也是全日本唯一現存的代官（郡代）官署：保留大廳、辦公處、米倉與審訊室。門前有朝市。見<a href=\"edo.html\">江戶時代的美濃與飛驒</a>。" } },

        { jp:"杉原千畝記念館", r:"Chiune Sugihara Memorial Hall", h:"八百津町", hr:"Yaotsu Town", muni:"yaotsu", kind:"museum", est:"",
          note:{ en:"On a hill above Yaotsu, the hall remembers the diplomat who in 1940 in Kaunas wrote transit visas that saved thousands of Jewish refugees. See <a href=\"people.html\">People</a>.",
            ja:"八百津の丘の上にあり、1940年にカウナスで通過査証を書いて数千人のユダヤ人難民を救った外交官を記念する。<a href=\"people.html\">人物</a>を参照。",
            zh:"位於八百津的山丘上，紀念 1940 年在考那斯簽發過境簽證、拯救了數千名猶太難民的外交官。見<a href=\"people.html\">人物</a>。" } },

        { jp:"岐阜かかみがはら航空宇宙博物館", r:"Gifu-Kakamigahara Air and Space Museum", h:"岐阜県・各務原市", hr:"Gifu Prefecture and Kakamigahara City", muni:"kakamigahara", kind:"museum", est:"",
          note:{ en:"Aircraft and spacecraft in a town where an army airfield opened in 1917 and aircraft have been built ever since, beside the airfield where they are tested.",
            ja:"1917年に陸軍の飛行場が開かれ、以来航空機をつくりつづけてきた町の、試験飛行の飛行場のかたわらにある、航空機と宇宙機の博物館。",
            zh:"航空器與太空器的博物館，位於一座自 1917 年開設陸軍機場以來便持續製造飛機的城鎮，就在試飛用的機場旁。" } },

        { group:{ en:"Blades, paper and clay", ja:"刃物・紙・土", zh:"刀具、紙與土" }, jp:"工芸", id:"g-crafts" },

        { jp:"関鍛冶伝承館", r:"Seki Traditional Swordsmith Museum", h:"関市", hr:"Seki City", muni:"seki", kind:"museum", est:"",
          note:{ en:"Swords and fittings by the Seki smiths, and on set days — the first forging of the year in January and the October cutlery festival among them — a licensed smith forging a blade in the old way. See <a href=\"forging.html\">Making a Sword</a>.",
            ja:"関の刀匠の刀と刀装具を展示し、正月の打ち初めや十月の刃物まつりなど定められた日には、刀匠が古式にのっとって鍛錬を公開する。<a href=\"forging.html\">作刀</a>を参照。",
            zh:"展示關的刀匠所鍛之刀與刀裝具；在固定的日子——包括一月的開年鍛刀與十月的刀具祭——有持證刀匠以古法公開鍛刀。見<a href=\"forging.html\">鍛刀</a>。" } },

        { jp:"美濃和紙の里会館", r:"Mino Washi Museum", h:"美濃市", hr:"Mino City", muni:"mino", kind:"museum", est:"",
          note:{ en:"By the Itadori river among the papermaking hamlets: the history and making of Mino paper, and a workshop where visitors form a sheet of their own. See <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>.",
            ja:"紙漉きの集落が並ぶ板取川のほとりにあり、美濃和紙の歴史と製法を伝え、訪れた人が自分で紙を漉ける工房を備える。<a href=\"paper.html\">和紙・提灯・和傘</a>を参照。",
            zh:"位於造紙聚落沿岸的板取川畔，介紹美濃和紙的歷史與製法，並設有讓訪客親手抄紙的工坊。見<a href=\"paper.html\">和紙、燈籠與和傘</a>。" } },

        { jp:"美濃和紙あかりアート館", r:"Mino Washi Akari Art Gallery", h:"美濃市", hr:"Mino City", muni:"mino", kind:"museum", est:"",
          note:{ en:"In the udatsu district: prize-winning lamps from the town's October Akari Art Exhibition, shown in the dark all year.",
            ja:"うだつの町並みにあり、十月の「美濃和紙あかりアート展」の入賞作を、一年を通じて暗がりのなかに展示する。",
            zh:"位於卯建街區，全年在暗室中展出十月「美濃和紙燈光藝術展」的得獎燈具。" } },

        { jp:"岐阜県現代陶芸美術館", r:"Museum of Modern Ceramic Art, Gifu", h:"岐阜県", hr:"Gifu Prefecture", muni:"tajimi", kind:"museum", est:"2002",
          note:{ en:"Modern and contemporary ceramics from Japan and abroad, in the hills of Tajimi; part of a park devoted to ceramics. See <a href=\"minoyaki.html\">Mino Ware</a>.",
            ja:"多治見の丘陵にあり、国内外の近現代の陶芸を扱う。陶磁器をテーマとする公園の一角をなす。<a href=\"minoyaki.html\">美濃焼</a>を参照。",
            zh:"位於多治見的丘陵，收藏國內外近現代陶藝，是一座陶瓷主題公園的一部分。見<a href=\"minoyaki.html\">美濃燒</a>。" } },

        { jp:"多治見市モザイクタイルミュージアム", r:"Mosaic Tile Museum, Tajimi", h:"多治見市", hr:"Tajimi City", muni:"tajimi", kind:"museum", est:"2016",
          note:{ en:"At Kasahara, which makes most of Japan's mosaic tiles, in a building by the architect Fujimori Terunobu shaped like a hill of clay.",
            ja:"日本のモザイクタイルの大半をつくる笠原にあり、建築家・藤森照信による、粘土の山のような形の建物に収まる。",
            zh:"位於生產日本大部分馬賽克磁磚的笠原，建築由建築師藤森照信設計，外形宛如一座黏土山丘。" } },

        { jp:"多治見市美濃焼ミュージアム", r:"Mino Ceramic Art Museum, Tajimi", h:"多治見市", hr:"Tajimi City", muni:"tajimi", kind:"museum", est:"",
          note:{ en:"The history of Mino ware from the early kilns through the Momoyama tea wares to the modern potters.",
            ja:"初期の窯から桃山の茶陶、近代の陶芸家まで、美濃焼の歴史をたどる。",
            zh:"介紹美濃燒從早期窯場、桃山茶陶到近代陶藝家的歷史。" } },

        { jp:"土岐市美濃陶磁歴史館", r:"Toki City Mino Ceramic History Museum", h:"土岐市", hr:"Toki City", muni:"toki", kind:"museum", est:"",
          note:{ en:"Momoyama-period Mino ware from the kiln sites around Toki, near the Motoyashiki kiln site, one of the earliest climbing kilns in Mino.",
            ja:"土岐周辺の窯跡から出た桃山時代の美濃焼を収め、美濃で最も早い連房式登窯の一つ、元屋敷窯跡の近くにある。",
            zh:"收藏土岐周邊窯址出土的桃山時代美濃燒，鄰近美濃最早的連房式登窯之一——元屋敷窯址。" } },

        { group:{ en:"Wood, carving and the takumi", ja:"木と彫りと匠", zh:"木、雕刻與工匠" }, jp:"木", id:"g-wood" },

        { jp:"飛騨の里", r:"Hida Folk Village", h:"高山市", hr:"Takayama City", muni:"takayama", kind:"museum", est:"",
          note:{ en:"An open-air museum of farmhouses moved from across Hida, gasshō houses among them, set around a pond on the hills west of Takayama, with demonstrations of local crafts. See <a href=\"architecture.html\">Building in Wood</a>.",
            ja:"高山の西の丘に、飛騨各地から移築した農家——合掌造りを含む——を池のまわりに集めた野外博物館で、地元の手仕事の実演も見られる。<a href=\"architecture.html\">社寺・町家・合掌</a>を参照。",
            zh:"露天博物館，將飛驒各地遷建的農家——包括合掌造——圍繞池塘置於高山西側山丘，也有地方工藝示範。見<a href=\"architecture.html\">寺社、町家與合掌</a>。" } },

        { jp:"日下部民藝館", r:"Kusakabe Folk Museum", h:"日下部家", hr:"the Kusakabe family", muni:"takayama", kind:"museum", est:"",
          note:{ en:"The house of a Takayama merchant family, rebuilt in 1879 after a fire by the master carpenter Kawajiri Jisuke and now an Important Cultural Property: the great open hall with its exposed beams is the essential sight of Hida carpentry. See <a href=\"takumi.html\">The Hida Takumi</a>.",
            ja:"高山の商家の住まいで、大火のあと1879年に棟梁・川尻治助が建て直し、いまは重要文化財。梁をあらわにした吹き抜けの大空間は、飛騨の大工仕事の必見である。<a href=\"takumi.html\">飛騨の匠</a>を参照。",
            zh:"高山商家的宅邸，火災後於 1879 年由棟樑川尻治助重建，現為重要文化財：梁木外露的挑高大廳，是飛驒木工必看之處。見<a href=\"takumi.html\">飛驒的匠人</a>。" } },

        { jp:"高山祭屋台会館", r:"Takayama Festival Floats Exhibition Hall", h:"櫻山八幡宮", hr:"Sakurayama Hachiman Shrine", muni:"takayama", kind:"museum", est:"",
          note:{ en:"In the precinct of the shrine of the autumn festival, several of its floats are shown in rotation through the year. See <a href=\"festivals.html\">Festivals &amp; Floats</a>.",
            ja:"秋の祭りの社である櫻山八幡宮の境内にあり、祭りの屋台のいくつかを入れ替えながら一年じゅう展示する。<a href=\"festivals.html\">祭りと屋台</a>を参照。",
            zh:"位於秋季祭典所屬的櫻山八幡宮境內，全年輪流展出數座祭典屋台。見<a href=\"festivals.html\">祭典與屋台</a>。" } },

        { jp:"飛騨の匠文化館", r:"Hida Takumi Culture Museum", h:"飛騨市", hr:"Hida City", muni:"hida", kind:"museum", est:"",
          note:{ en:"In Hida-Furukawa, a building made without nails that shows the carpenters' joints and lets visitors take a few of them apart. See <a href=\"joinery.html\">Joinery</a>.",
            ja:"飛騨古川にあり、釘を使わずに建てた館で大工の継手・仕口を見せ、いくつかは手にとって外してみられる。<a href=\"joinery.html\">継手と仕口</a>を参照。",
            zh:"位於飛驒古川，是一座不用釘子建成的館舍，展示木匠的榫接，部分可以讓訪客動手拆解。見<a href=\"joinery.html\">榫接</a>。" } },

        { jp:"関市円空館", r:"Seki City Enkū Museum", h:"関市", hr:"Seki City", muni:"seki", kind:"museum", est:"",
          note:{ en:"Near the site of Miroku-ji by the Nagara, where Enkū spent his last years and died. See <a href=\"enku.html\">Enkū's Buddhas</a>.",
            ja:"円空が晩年を過ごし没した長良川のほとりの弥勒寺跡の近くにある。<a href=\"enku.html\">円空仏</a>を参照。",
            zh:"位於長良川畔彌勒寺遺址附近——圓空在此度過晚年並辭世。見<a href=\"enku.html\">圓空佛</a>。" } },

        { jp:"羽島市歴史民俗資料館・円空資料館", r:"Hashima City History Museum and Enkū Museum", h:"羽島市", hr:"Hashima City", muni:"hashima", kind:"museum", est:"",
          note:{ en:"In one of the two places that claim to be Enkū's birthplace, with figures from the temples of the town.",
            ja:"円空の生地を名のる二つの土地の一つにあり、町の寺々の像を収める。",
            zh:"位於自稱圓空出生地的兩處之一，收藏當地各寺的造像。" } },

        { jp:"千光寺", r:"Senkō-ji", h:"千光寺", hr:"Senkō-ji temple", muni:"takayama", kind:"museum", est:"",
          note:{ en:"A mountain temple at Nyūkawa east of Takayama whose treasure hall keeps some sixty of Enkū's figures, among them his Ryōmen Sukuna.",
            ja:"高山の東、丹生川の山寺で、宝物館に円空仏六十体あまりを収め、そのなかに両面宿儺像がある。",
            zh:"高山以東丹生川的山寺，寶物館收藏約六十尊圓空佛，其中包括他的兩面宿儺像。" } },

        { group:{ en:"Stage, festival and village", ja:"舞台・祭り・村", zh:"舞台、祭典與村落" }, jp:"文化", id:"g-culture" },

        { jp:"かしも明治座", r:"Kashimo Meiji-za", h:"中津川市", hr:"Nakatsugawa City", muni:"nakatsugawa", kind:"museum", est:"1894",
          note:{ en:"A village playhouse of 1894 built of local hinoki by the villagers themselves, with a revolving stage; village kabuki is still performed there. See <a href=\"kabuki.html\">Village Kabuki</a>.",
            ja:"1894年に村人みずから地元の檜で建てた芝居小屋で、回り舞台を備え、いまも地歌舞伎が演じられる。<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>を参照。",
            zh:"1894 年由村民親手以當地檜木建造的戲棚，設有旋轉舞台，至今仍上演地歌舞伎。見<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>。" } },

        { jp:"村国座", r:"Murakuni-za", h:"各務原市", hr:"Kakamigahara City", muni:"kakamigahara", kind:"museum", est:"",
          note:{ en:"A playhouse of about 1877 in the precinct of Murakuni shrine, an Important Tangible Folk Cultural Property, still used for village kabuki in autumn. See <a href=\"kabuki.html\">Village Kabuki</a>.",
            ja:"村国神社の境内に1877年ごろ建てられた芝居小屋で、国の重要有形民俗文化財。いまも秋に地歌舞伎が上演される。<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>を参照。",
            zh:"約 1877 年建於村國神社境內的戲棚，為國家重要有形民俗文化財，至今秋天仍上演地歌舞伎。見<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>。" } },

        { jp:"長良川うかいミュージアム", r:"Nagara River Ukai Museum", h:"岐阜市", hr:"Gifu City", muni:"gifu", kind:"museum", est:"",
          note:{ en:"On the bank of the Nagara by the boat landing: the cormorants, the fishing and its history, for the months when the boats are not out. See <a href=\"ukai.html\">Cormorant Fishing</a>.",
            ja:"鵜飼の乗船場に近い長良川の岸にあり、鵜と漁とその歴史を伝える。舟の出ない季節にも鵜飼を知ることができる。<a href=\"ukai.html\">鵜飼</a>を参照。",
            zh:"位於長良川岸、鵜飼乘船處附近，介紹鸕鶿、捕魚方式及其歷史，讓人在不出船的月份也能認識鵜飼。見<a href=\"ukai.html\">鵜飼</a>。" } },

        { jp:"どぶろく祭の館", r:"Doburoku Festival Hall", h:"白川村", hr:"Shirakawa Village", muni:"shirakawamura", kind:"museum", est:"",
          note:{ en:"Beside Shirakawa Hachiman Shrine in Ogimachi: the doburoku festival, its lion dances and its songs, for the rest of the year. See <a href=\"doburoku.html\">Doburoku, Masu &amp; Cups</a>.",
            ja:"荻町の白川八幡神社のかたわらにあり、どぶろく祭とその獅子舞や唄を、祭りのない季節にも伝える。<a href=\"doburoku.html\">どぶろく・枡・酒器</a>を参照。",
            zh:"位於荻町白川八幡神社旁，在祭典以外的季節介紹濁酒祭及其獅子舞與歌謠。見<a href=\"doburoku.html\">濁酒、枡與酒器</a>。" } },

        { jp:"合掌造り民家園", r:"Gasshō-zukuri Minka-en", h:"白川村", hr:"Shirakawa Village", muni:"shirakawamura", kind:"museum", est:"",
          note:{ en:"Across the river from Ogimachi, an open-air museum of gasshō houses moved from villages of the district, several of them designated cultural properties. See <a href=\"shirakawago.html\">Shirakawa-gō</a>.",
            ja:"荻町の対岸にあり、郷内の集落から移築した合掌造りの家々を集めた野外博物館。いくつかは文化財に指定されている。<a href=\"shirakawago.html\">白川郷</a>を参照。",
            zh:"位於荻町對岸，是聚集從當地各聚落遷建而來之合掌造民家的露天博物館，其中數棟為指定文化財。見<a href=\"shirakawago.html\">白川鄉</a>。" } },

        { group:{ en:"Nature and science", ja:"自然と科学", zh:"自然與科學" }, jp:"自然", id:"g-nature" },

        { jp:"名和昆虫博物館", r:"Nawa Insect Museum", h:"名和昆虫研究所", hr:"Nawa Entomological Institute", muni:"gifu", kind:"museum", est:"1919",
          note:{ en:"Opened in 1919 in Gifu Park, the oldest insect museum in Japan, by the naturalist Nawa Yasushi, who in 1883 collected the Gifu butterfly and gave it its name; it is still run by his family. See <a href=\"wildlife.html\">Living Things</a>.",
            ja:"1919年に岐阜公園に開館した日本最古の昆虫博物館。1883年にギフチョウを採集してその名をつけた博物学者・名和靖が開き、いまも一族が営む。<a href=\"wildlife.html\">生きもの</a>を参照。",
            zh:"1919 年開設於岐阜公園，是日本最古老的昆蟲博物館，由 1883 年採集岐阜蝶並為其命名的博物學者名和靖創立，至今仍由其家族經營。見<a href=\"wildlife.html\">生物</a>。" } },

        { jp:"金生山化石館", r:"Kinshōzan Fossil Museum", h:"大垣市", hr:"Ōgaki City", muni:"ogaki", kind:"museum", est:"",
          note:{ en:"At the foot of the limestone mountain called the birthplace of Japanese palaeontology: fusulinids, giant bivalves and sea lilies from a Permian reef. See <a href=\"landform.html\">Mountains, Plains &amp; Rock</a>.",
            ja:"日本の古生物学発祥の地とされる石灰岩の山のふもとにあり、ペルム紀の礁から出たフズリナ、巨大な二枚貝、ウミユリを展示する。<a href=\"landform.html\">山と平野と岩</a>を参照。",
            zh:"位於被譽為日本古生物學發祥地的石灰岩山麓，展示二疊紀礁體中的紡錘蟲、巨型雙殼貝與海百合。見<a href=\"landform.html\">山、平原與岩石</a>。" } },

        { jp:"日本最古の石博物館", r:"Museum of Japan's Oldest Stone", h:"七宗町", hr:"Hichisō Town", muni:"hichiso", kind:"museum", est:"",
          note:{ en:"By the Hida river at Hichisō, where in 1970 pebbles in a conglomerate were found to be about two billion years old, the oldest rock then known in Japan.",
            ja:"七宗の飛騨川のほとりにある。1970年、この地の礫岩に含まれる礫が約二十億年前のものとわかり、当時知られていた日本最古の岩石となった。",
            zh:"位於七宗的飛驒川畔。1970 年，此地礫岩中的礫石被測定約有二十億年歷史，成為當時已知日本最古老的岩石。" } },

        { jp:"岐阜県博物館", r:"Gifu Prefectural Museum", h:"岐阜県", hr:"Gifu Prefecture", muni:"seki", kind:"museum", est:"",
          note:{ en:"In a hillside park in Seki: the natural history and human history of the prefecture under one roof, from rocks and fossils to folk life.",
            ja:"関の丘の公園にあり、県の自然史と人の歴史を、岩石や化石から民俗まで一つ屋根の下に扱う。",
            zh:"位於關市山丘上的公園，在同一屋簷下介紹全縣的自然史與人類史，從岩石、化石到民俗生活。" } },

        { jp:"アクア・トト ぎふ", r:"Aqua Totto Gifu", h:"世界淡水魚園水族館", hr:"World Freshwater Aquarium", muni:"kakamigahara", kind:"museum", est:"2004",
          note:{ en:"A freshwater aquarium on the Kiso that follows the Nagara from its source to the sea, with the giant salamander and the ayu, and then the great rivers of the world. See <a href=\"rivers.html\">Rivers &amp; Water</a>.",
            ja:"木曽川のほとりの淡水魚の水族館。長良川を源流から河口までたどり、オオサンショウウオや鮎を見せ、さらに世界の大河へと続く。<a href=\"rivers.html\">川と水</a>を参照。",
            zh:"位於木曾川畔的淡水水族館，從源頭到出海口追溯長良川，展示大鯢與香魚，再延伸到世界各大河。見<a href=\"rivers.html\">河川與水</a>。" } }

      ] }
    ] },
    { t:"section",
      id:"wood-places",
      title:{ en:"More places of wood", ja:"木の場所をさらに", zh:"更多木的場所" },
      jp:"学ぶ・見る",
      body:[
        { t:"p", text:{ en:"The places above are the main museums of the book. Those below complete them for the wood chapters: the schools and research institutes that train and support the trade, more of the buildings in which the work of earlier carpenters can still be seen and entered, and the rest of Gifu's village playhouses. Two entries lie across the prefectural line, because the story of Gifu's timber cannot be told without them.", ja:"上の各所が本書の主な博物館である。下に挙げるのは木の諸部のための補いで、木の仕事を育て支える学校と研究機関、かつての大工の仕事をいまも見て中に入れる建物、そして岐阜の村の芝居小屋の残りである。二つの項目は県境の外にあるが、岐阜の木の話はそれを抜きには語れない。", zh:"以上是本書主要的博物館。以下則為木的各章補充：培育並支持這門行業的學校與研究機構、仍可參觀並進入、展現昔日木匠手藝的建築，以及岐阜其餘的村落戲棚。有兩筆位於縣境之外，因為少了它們，岐阜木材的故事就說不完整。" } },
        { t:"makers",
          items:[
            { group:{ en:"Schools and research", ja:"学校と研究", zh:"學校與研究" }, jp:"学ぶ", id:"g-schools" },
            { jp:"岐阜県立森林文化アカデミー",
              r:"Gifu Academy of Forest Science and Culture",
              muni:"mino",
              est:"2001",
              note:{
                en:"Opened in Mino in 2001, reorganised from the prefectural forestry college. It runs two two-year programmes — forest and wood engineers for school-leavers, and forest and wood creators for adults — with a teaching forest of about 33 hectares, and has a partnership with Rottenburg University of Applied Forest Sciences in Germany.",
                ja:"二〇〇一年、県立林業短期大学校を改組して美濃市に開校した。高校卒業者向けの森と木のエンジニア科と、社会人向けの森と木のクリエーター科の二つの二年課程をもち、約三十三ヘクタールの演習林がある。ドイツのロッテンブルク林業大学と提携する。",
                zh:"2001 年由縣立林業短期大學改制，於美濃市開校。設有兩個兩年制課程——面向高中畢業生的「森林與木材工程師科」與面向社會人士的「森林與木材創作者科」，擁有約 33 公頃的實習林，並與德國羅騰堡林業應用科學大學合作。" },
              p:[
                { jp:"森と木のエンジニア科",
                  r:"Forest and wood engineers",
                  c:"course",
                  sp:["local"],
                  d:{ en:"Forestry, timber and wooden building.", ja:"林業、木材、木造建築。", zh:"林業、木材與木造建築。" } },
                { jp:"森と木のクリエーター科",
                  r:"Forest and wood creators",
                  c:"course",
                  m:["handmade"],
                  d:{
                    en:"Woodworking, wooden architecture, forest education and small wood businesses.",
                    ja:"木工、木造建築、森林環境教育、小さな木の事業。",
                    zh:"木工、木造建築、森林教育與小型木材事業。" } }
              ] },
            { jp:"morinos",
              r:"Morinos",
              h:"岐阜県森林総合教育センター",
              hr:"Gifu Forest Education Centre",
              muni:"mino",
              est:"2020",
              note:{
                en:"The prefecture's forest education centre, opened on the Forest Academy's campus in fiscal 2020 as a base for teaching children and adults about forests and wood through hands-on programmes.",
                ja:"県の森林総合教育センターで、二〇二〇年度に森林文化アカデミーの構内に開いた。体験の催しを通じて子どもと大人に森と木を伝える拠点である。",
                zh:"縣立森林綜合教育中心，2020 年度在森林文化學院校區內開設，是透過體驗活動向兒童與成人傳授森林與木材知識的據點。" },
              p:[{ jp:"森林体験・木育", r:"Forest and wood education", c:"workshop" }] },
            { jp:"岐阜県立木工芸術スクール",
              r:"Gifu Wood Craft Art School",
              muni:"takayama",
              est:"1946",
              note:{
                en:"Traces its roots to a Takayama joinery training centre of 1946; it became a branch of the prefecture's International Takumi Academy in 2003 and took its own name in 2018. From its campus at Takumigaoka it runs a one-year woodworking course, including steam-bending, that feeds Hida's factories and workshops.",
                ja:"一九四六年の高山建具補導所に源をもつ。二〇〇三年に県の国際たくみアカデミーの分校となり、二〇一八年に今の名となった。匠ヶ丘町の校舎で、曲木を含む一年の木工の課程を営み、飛騨の工場と工房に人を送る。",
                zh:"源自 1946 年的高山建具訓練所；2003 年成為縣立國際匠學院分校，2018 年改用現名。在匠丘町的校區開設包括蒸汽彎木在內的一年制木工課程，為飛驒的工廠與工坊輸送人才。" },
              p:[{ jp:"木工科", r:"Woodworking course", c:"course", m:["bentwood", "handmade"], sp:["broadleaf"] }] },
            { jp:"岐阜県森林研究所",
              r:"Gifu Prefectural Research Institute for Forests",
              muni:"mino",
              note:{
                en:"The prefecture's forestry research institute in Mino, whose work ranges from forest management and pests to seedlings — it has worked out how to raise hinoki in containers, stressing a well-formed root plug over size, and has trialled planting through the year.",
                ja:"美濃市にある県の森林の研究所で、仕事は森林の管理や病虫害から苗木まで及ぶ。ヒノキのコンテナ苗の育て方を、大きさより根鉢の形を重んじてまとめ、一年を通じた植え付けも試した。",
                zh:"位於美濃市的縣立森林研究機構，研究範圍從森林經營、病蟲害到苗木——它整理出扁柏容器苗的育苗方法，強調根團成形重於苗木大小，並試驗全年造林。" },
              p:[{ jp:"ヒノキのコンテナ苗", r:"Hinoki container seedlings", c:"research", sp:["hinoki"] }] },
            { jp:"岐阜県生活技術研究所",
              r:"Gifu Research Institute for Human Life Technology",
              muni:"takayama",
              note:{
                en:"A prefectural research institute in Takayama that works with the furniture and wood industries on design, product testing and processing — the kind of testing a Hida-trademark maker needs to show its furniture meets the standards.",
                ja:"高山市にある県の研究所で、家具と木材の産業とともにデザイン、製品の試験、加工に取り組む。「飛騨の家具」の商標をもつメーカーが基準を満たすことを示すのに要する種類の試験である。",
                zh:"位於高山市的縣立研究機構，與家具及木材產業合作進行設計、產品測試與加工研究——正是持有「飛驒家具」商標的廠商證明產品符合標準所需的那類測試。" },
              p:[{ jp:"家具の試験・研究", r:"Furniture testing and research", c:"research" }] },
            { jp:"ぎふ木遊館",
              r:"Gifu Mokuyūkan",
              muni:"gifu",
              note:{
                en:"A wood-education centre in Gifu city, built of Gifu timber and filled with wooden play spaces and toys, set up under the prefecture's thirty-year vision for <em>mokuiku</em> — growing up with wood.",
                ja:"岐阜市の木育の施設で、県産材で建てられ、木の遊び場とおもちゃに満ちる。県の「ぎふ木育三十年ビジョン」のもとにつくられた。",
                zh:"岐阜市的木育設施，以岐阜縣產木材建造，充滿木製遊戲空間與玩具，依據縣的「岐阜木育三十年願景」設立。" },
              p:[{ jp:"木育", r:"Wood education and play", c:"workshop", sp:["local"] }] },
            { jp:"みんなの森 ぎふメディアコスモス",
              r:"Gifu Media Cosmos",
              muni:"gifu",
              est:"2015",
              note:{
                en:"A library and civic centre opened in July 2015, designed by Toyo Ito. Its roof is an 80-by-90-metre undulating lattice of Tōnō hinoki, built on site by crossing thin, narrow boards in layers rather than bending large laminated members in a factory.",
                ja:"二〇一五年七月に開いた図書館と市民の施設で、伊東豊雄の設計。屋根は八十メートル×九十メートルのうねる東濃ひのきの格子で、工場で大きな集成材を曲げるのではなく、薄く細い板を現場で幾層にも交差させてつくった。",
                zh:"2015 年 7 月開幕的圖書館與市民中心，由伊東豐雄設計。其屋頂是 80×90 公尺、起伏的東濃扁柏格柵，不是在工廠彎曲大型集成材，而是在現場把薄而窄的板材層層交疊而成。" },
              p:[{ jp:"ヒノキ格子の屋根", r:"Hinoki lattice roof", c:"public", m:["laminated"], sp:["tonohinoki"], yr:"2015" }] },
            { group:{ en:"Museums and historic buildings", ja:"博物館と歴史的建造物", zh:"博物館與歷史建築" }, jp:"見る", id:"g-museums" },
            { jp:"吉島家住宅",
              r:"Yoshijima House",
              muni:"takayama",
              note:{
                en:"The house of a sake-brewing family next door to the Kusakabe house, rebuilt in 1907–1908 by Nishida Isaburō, a carpenter of the Mizuma school; its lattice of beams in the open, light-filled well above the earth-floored hall is a set piece of Takayama carpentry.",
                ja:"日下部家の隣の酒造の家で、一九〇七〜一九〇八年に水間の流れをくむ大工、西田伊三郎が建て直した。土間の上の吹き抜けに光を受けて組まれた梁の格子は、高山の大工仕事の見せ場である。",
                zh:"與日下部家相鄰的釀酒世家住宅，1907–1908 年由水間派木匠西田伊三郎重建；土間上方挑高、採光充足的樑架格構，是高山木匠工藝的代表作。" },
              p:[{ jp:"町家", r:"Merchant townhouse", c:"building", m:["heritage", "handcut"] }] },
            { jp:"飛騨高山まちの博物館",
              r:"Hida Takayama Museum of History and Art",
              muni:"takayama",
              note:{
                en:"The city's museum of local history, housed in the old storehouses of merchant families in the historic town; its rooms cover the Hida carpenters, the festival floats and the crafts of the town.",
                ja:"古い町並みの商家の土蔵を使った市の郷土の博物館で、飛騨の匠、祭屋台、町の工芸を扱う部屋がある。",
                zh:"市立鄉土博物館，利用老街商家的土藏改建而成，展室涵蓋飛驒匠人、祭典屋台與城鎮工藝。" },
              p:[{ jp:"郷土の展示", r:"Local history", c:"exhibit" }] },
            { jp:"安国寺 経蔵",
              r:"Ankokuji Sutra Repository",
              muni:"takayama",
              est:"1408",
              note:{
                en:"A sutra hall of 1408, by the temple's tradition, with a shingled roof and a skirt roof that makes one storey look like two; inside is Japan's oldest octagonal revolving sutra case. It was designated a National Treasure in 1958.",
                ja:"寺の伝えでは一四〇八年の経蔵で、柿葺の屋根と裳階をもち、一層が二層に見える。なかに日本最古の八角の輪蔵がある。一九五八年に国宝となった。",
                zh:"依寺方傳承建於 1408 年的經藏，木片葺（杮葺）屋頂加上裳階，使單層看似兩層；內有日本最古老的八角形旋轉經櫃。1958 年列為國寶。" },
              p:[{ jp:"輪蔵", r:"Revolving sutra case", c:"building", m:["heritage"] }] },
            { jp:"飛騨国分寺",
              r:"Hida Kokubunji",
              muni:"takayama",
              note:{
                en:"The provincial temple of Hida, in the centre of Takayama, founded under the eighth-century imperial scheme of provincial temples; its three-storey pagoda is a landmark of the town, and the temple is one of the components of Takayama's Japan Heritage story of the Hida carpenters.",
                ja:"高山の中心にある飛騨の国分寺で、八世紀の国分寺の制度のもとに開かれた。三重塔は町の目じるしで、寺は飛騨の匠を語る高山の日本遺産の構成文化財の一つである。",
                zh:"位於高山市中心的飛驒國分寺，依八世紀天皇下令各國建寺的制度創立；其三重塔是城中地標，寺院亦為高山「飛驒之匠」日本遺產故事的構成文化財之一。" },
              p:[{ jp:"三重塔", r:"Three-storey pagoda", c:"temple", m:["heritage"] }] },
            { jp:"白川郷 荻町合掌集落",
              r:"Ogimachi, Shirakawa-gō",
              muni:"shirakawamura",
              note:{
                en:"The largest of the gasshō villages, part of the World Heritage site inscribed in December 1995 and an Important Preservation District since 1976. Its more than a hundred steep thatched houses are framed without nails, lashed with rope and witch-hazel withies, and re-thatched about every thirty years by communal labour (<em>yui</em>).",
                ja:"合掌造りの集落で最も大きく、一九九五年十二月に記載された世界遺産の一部で、一九七六年から重要伝統的建造物群保存地区である。百を超える急な茅葺きの家は釘を使わず、縄とマンサクのネソで結んで組まれ、およそ三十年ごとに結の共同作業で葺き替えられる。",
                zh:"規模最大的合掌造聚落，屬於 1995 年 12 月列入的世界遺產，並自 1976 年起為重要傳統建造物群保存地區。百餘棟陡峭的茅草屋不用釘子，以繩索與金縷梅枝條綁紮組架，約每三十年以「結」的共同勞動重新葺頂。" },
              p:[
                { jp:"合掌造り",
                  r:"Gasshō houses",
                  c:"building",
                  m:["heritage"],
                  sp:["mansaku", "buna"],
                  d:{
                    en:"700–1,000 witch-hazel withies (<em>neso</em>) per house; beech poles hold the thatch.",
                    ja:"一軒にマンサクのネソ七百〜千本。ブナの押さえ木が茅を押さえる。",
                    zh:"每棟屋需金縷梅枝條 700–1,000 根；以山毛櫸長竿壓住茅草。" } }
              ] },
            { jp:"和田家住宅",
              r:"Wada House",
              muni:"shirakawamura",
              note:{
                en:"One of the largest gasshō houses in Ogimachi, built in the late Edo period for a family of village headmen whose wealth came partly from saltpetre made in the soil under the floors; 22.3 by 12.8 metres, with silkworms raised in the attics. Designated an Important Cultural Property on 26 December 1995.",
                ja:"荻町で最大級の合掌造りの家で、江戸時代後期、床下の土でつくる焔硝で富を得た名主の家のために建てられた。二十二・三メートル×十二・八メートルで、屋根裏で蚕を飼った。一九九五年十二月二十六日に重要文化財となった。",
                zh:"荻町規模最大的合掌造住宅之一，建於江戶後期，屋主是世代擔任名主的家族，其財富部分來自以地板下土壤製造的硝石；面寬 22.3 公尺、進深 12.8 公尺，閣樓用來養蠶。1995 年 12 月 26 日列為重要文化財。" },
              p:[{ jp:"合掌造りの家", r:"Gasshō farmhouse", c:"building", m:["heritage"] }] },
            { jp:"下呂温泉合掌村",
              r:"Gero Onsen Gasshō Village",
              muni:"gero",
              note:{
                en:"An open-air museum in the spa town of Gero with gasshō-style farmhouses moved from the Shirakawa area, giving a view of the steep thatched frame without the journey north.",
                ja:"湯の町下呂の野外博物館で、白川の地域から移した合掌造りの民家が並ぶ。北へ旅せずとも急な茅葺きの骨組を見られる。",
                zh:"溫泉鄉下呂的戶外博物館，展示從白川一帶遷來的合掌造民家，不必北上也能看到陡峭茅草屋的骨架。" },
              p:[{ jp:"移築合掌造り", r:"Relocated gasshō houses", c:"building", m:["heritage"] }] },
            { jp:"郡上八幡城",
              r:"Gujō Hachiman Castle",
              muni:"gujo",
              est:"1933",
              note:{
                en:"A castle keep rebuilt in wood in 1933 on the old stone walls above Gujō Hachiman, usually cited as the oldest wooden reconstruction of a castle keep in Japan.",
                ja:"郡上八幡を見下ろす古い石垣の上に一九三三年に木造で再建された天守で、日本で最も古い木造の再建天守としてよく挙げられる。",
                zh:"1933 年在俯瞰郡上八幡的舊石垣上以木造重建的天守，常被稱為日本最古老的木造復建天守。" },
              p:[{ jp:"木造再建天守", r:"Wooden keep", c:"building" }] },
            { jp:"美濃町 うだつの上がる町並み",
              r:"Mino Udatsu Townscape",
              muni:"mino",
              note:{
                en:"The merchant quarter of Mino, built on the paper trade, where timber townhouses carry <em>udatsu</em> — raised, roofed firewalls at the ends of the roof that became a display of wealth.",
                ja:"紙の商いで栄えた美濃の商人町で、木造の町家が屋根の端に「うだつ」——屋根をかけて高く立てた防火壁で、やがて富の誇示となった——を上げる。",
                zh:"靠紙業繁榮起來的美濃商人街區，木造町家在屋頂兩端豎起「卯建」——加蓋小屋頂、高聳的防火牆，後來成為財富的象徵。" },
              p:[{ jp:"町家", r:"Merchant townhouses", c:"building", m:["heritage"] }] },
            { jp:"永保寺",
              r:"Eihōji",
              muni:"tajimi",
              note:{
                en:"A Zen temple on the Toki River in Tajimi whose Kannon hall and founder's hall, both of the fourteenth century, are National Treasures — rare survivors of early Zen timber architecture.",
                ja:"多治見の土岐川沿いの禅寺で、十四世紀の観音堂と開山堂はともに国宝である。初期の禅宗の木造建築のまれな遺構である。",
                zh:"多治見土岐川畔的禪寺，其十四世紀的觀音堂與開山堂皆為國寶——是早期禪宗木造建築中罕見的遺存。" },
              p:[{ jp:"観音堂・開山堂", r:"Kannon hall and founder's hall", c:"temple", m:["heritage"] }] },
            { jp:"木曽ヒノキ備林",
              r:"Kiso Hinoki Reserve Forest",
              muni:"nakatsugawa",
              est:"1977",
              note:{
                en:"About 730 hectares of old hinoki and sawara at Kashimo, between 820 and 1,820 metres, protected by the Owari domain from 1729 and set aside as a reserve for the Ise Shrine before it took its present name in 1977. The hinoki are 300 to 400 years old, averaging 25 metres tall.",
                ja:"加子母の標高八百二十〜千八百二十メートルに広がる約七百三十ヘクタールの古いヒノキとサワラの森で、一七二九年から尾張藩に守られ、伊勢神宮の備林とされたのち、一九七七年に今の名となった。ヒノキは樹齢三百〜四百年、平均の高さ二十五メートル。",
                zh:"位於加子母海拔 820 至 1,820 公尺、約 730 公頃的老扁柏與花柏林，自 1729 年起受尾張藩保護，曾劃為伊勢神宮備林，1977 年改用現名。扁柏樹齡 300 至 400 年，平均高 25 公尺。" },
              p:[
                { jp:"天然ヒノキ林",
                  r:"Old-growth hinoki",
                  c:"forestry",
                  m:["ise"],
                  sp:["hinoki", "sawara"],
                  d:{
                    en:"Hinoki 76%, sawara 23%; about 800 visitors a year.",
                    ja:"ヒノキ七十六パーセント、サワラ二十三パーセント。年に約八百人が訪れる。",
                    zh:"扁柏占 76%，花柏占 23%；每年約 800 人造訪。" } }
              ] },
            { jp:"錦織綱場跡",
              r:"Nishikori Log Station",
              muni:"yaotsu",
              note:{
                en:"The site in Yaotsu where the Owari domain's timber magistrate caught the logs driven loose down the Kiso River and bound them into rafts, each worked by three men, for Nagoya's Shirotori timber yard.",
                ja:"尾張藩の材木奉行が、木曽川をばらで流れ下った丸太を受けとめ、一枚に三人が乗る筏に組んで名古屋の白鳥の貯木場へ送った八百津町の跡。",
                zh:"八百津町的遺址——尾張藩木材奉行在此攔下沿木曾川散放漂下的原木，編成每筏三人操作的木筏，送往名古屋的白鳥貯木場。" },
              p:[{ jp:"綱場", r:"Log-catching station", c:"building", m:["heritage"], sp:["hinoki"] }] },
            { jp:"馬籠宿",
              r:"Magome",
              muni:"nakatsugawa",
              note:{
                en:"A post town of the Nakasendō, lined with timber inns and houses on a steep stone-paved slope, which moved from Nagano to Gifu when its village merged into Nakatsugawa in 2005.",
                ja:"中山道の宿場で、急な石畳の坂に木造の宿と家が並ぶ。二〇〇五年に村が中津川市と合併して、長野県から岐阜県に移った。",
                zh:"中山道的宿場町，陡峭石板坡道兩旁林立木造旅籠與民宅；2005 年所屬村落併入中津川市，從長野縣移入岐阜縣。" },
              p:[{ jp:"宿場町", r:"Post town", c:"building", m:["heritage"] }] },
            { jp:"赤沢自然休養林",
              r:"Akasawa Recreation Forest",
              muni:"kiso",
              est:"1969",
              note:{
                en:"A natural hinoki forest in the Kiso valley that in 1969 became Japan's first designated natural recreation forest; in 1982 it hosted the first national gathering for forest bathing. The Kiso forests were Owari's, and their timber reached Gifu by river.",
                ja:"木曽谷の天然ヒノキの森で、一九六九年に日本初の自然休養林となり、一九八二年には全国初の森林浴の集いが開かれた。木曽の森は尾張藩のもので、その木は川で岐阜へ下った。",
                zh:"木曾谷的天然扁柏林，1969 年成為日本第一座自然休養林，1982 年舉辦了全國首次森林浴聚會。木曾森林曾屬尾張藩，其木材經由河流運抵岐阜。" },
              p:[{ jp:"天然ヒノキ林", r:"Natural hinoki forest", c:"forestry", sp:["hinoki"] }] },
            { jp:"名古屋城本丸御殿",
              r:"Nagoya Castle Honmaru Palace",
              muni:"nagoya",
              est:"2018",
              note:{
                en:"The castle palace of the Owari lords, burned in 1945 and rebuilt in hinoki between 2009 and 2018 from the surviving drawings and photographs; the reconstruction used Kiso hinoki, and by local accounts timber from Kashimo among it.",
                ja:"尾張藩主の城の御殿で、一九四五年に焼け、残された図面と写真をもとに二〇〇九〜二〇一八年にヒノキで再建された。再建には木曽ヒノキが使われ、地元の説明では加子母の木もその中に含まれる。",
                zh:"尾張藩主的城中御殿，1945 年焚毀，依留存的圖面與照片於 2009 至 2018 年間以扁柏重建；重建使用木曾扁柏，據地方說法其中也包括加子母的木材。" },
              p:[{ jp:"復元御殿", r:"Reconstructed palace", c:"building", m:["handcut"], sp:["hinoki"] }] },
            { group:{ en:"Village playhouses", ja:"芝居小屋", zh:"鄉村戲棚" }, jp:"地歌舞伎", id:"g-stage" },
            { jp:"常盤座",
              r:"Tokiwa-za",
              muni:"nakatsugawa",
              est:"1891",
              note:{
                en:"A village playhouse of 1891 in Nakatsugawa, one of the city's surviving farmers'-kabuki theatres.",
                ja:"中津川市の一八九一年の村の芝居小屋で、市に残る地歌舞伎の劇場の一つ。",
                zh:"中津川市一座 1891 年的鄉村戲棚，是市內現存的地歌舞伎劇場之一。" },
              p:[{ jp:"芝居小屋", r:"Playhouse", c:"stage", m:["heritage"] }] },
            { jp:"蛭子座",
              r:"Ebisu-za",
              muni:"nakatsugawa",
              est:"1901",
              note:{
                en:"A playhouse of 1901 in Hirukawa, now part of Nakatsugawa.",
                ja:"いまは中津川市に属する蛭川の、一九〇一年の芝居小屋。",
                zh:"位於今屬中津川市的蛭川、建於 1901 年的戲棚。" },
              p:[{ jp:"芝居小屋", r:"Playhouse", c:"stage", m:["heritage"] }] },
            { jp:"鳳凰座",
              r:"Hōō-za",
              muni:"gero",
              est:"1827",
              note:{
                en:"A playhouse in Gero, moved to its present site in 1827 according to the prefecture's tourism listing — the earliest date given there for any of the prefecture's surviving village theatres.",
                ja:"下呂市の芝居小屋で、県の観光案内によれば一八二七年に現在地へ移築された。そこに記された県内に残る村の劇場の年のうち、最も古い。",
                zh:"下呂市的戲棚，依縣觀光資訊所載，於 1827 年遷建至現址；在該資訊所列縣內現存鄉村劇場的年份中最早。" },
              p:[{ jp:"芝居小屋", r:"Playhouse", c:"stage", m:["heritage"] }] },
            { jp:"白雲座",
              r:"Hakuun-za",
              muni:"gero",
              est:"1890",
              note:{
                en:"A second Gero playhouse, dated 1890.",
                ja:"下呂市のもう一つの芝居小屋で、一八九〇年とされる。",
                zh:"下呂市的另一座戲棚，年代記為 1890 年。" },
              p:[{ jp:"芝居小屋", r:"Playhouse", c:"stage", m:["heritage"] }] },
            { jp:"相生座",
              r:"Aioi-za",
              muni:"mizuho",
              note:{
                en:"A Meiji-era playhouse in Mizuho, on the Gifu plain, that was moved from its original site and rebuilt — a reminder that these timber halls were designed to be taken apart.",
                ja:"岐阜の平野にある瑞穂市の明治の芝居小屋で、もとの場所から移されて建て直された。こうした木の建物が解いて組み直せるようにつくられていたことを思い出させる。",
                zh:"位於岐阜平原瑞穗市的一座明治時期戲棚，從原址遷移後重建——提醒我們這些木造建築本來就是可以拆解重組的。" },
              p:[{ jp:"芝居小屋", r:"Playhouse", c:"stage", m:["heritage"] }] },
            { jp:"五毛座",
              r:"Gomō-za",
              muni:"ena",
              est:"1951",
              note:{
                en:"The youngest of the surviving playhouses, built in 1951 in Ena and registered as a tangible cultural property.",
                ja:"残る芝居小屋で最も新しく、一九五一年に恵那市に建てられ、登録有形文化財となった。",
                zh:"現存戲棚中最年輕的一座，1951 年建於惠那市，登錄為有形文化財。" },
              p:[{ jp:"芝居小屋", r:"Playhouse", c:"stage", m:["heritage"] }] }
          ] }
      ] },
    { t:"section", id:"bytown",
      title:{ en:"The same list, read by town", ja:"町から引く", zh:"依城鎮索引" }, jp:"市町村別",
      body:[
        { t:"muniindex", page:"museums" },
        { t:"tiny", text:{
          en:"Generated from the entries above; each name links to its entry.",
          ja:"上の項目から生成。名前から各項目へ移動できる。",
          zh:"由上方條目生成；點選名稱可前往各條目。" } }
      ] },
    { t:"note", label:{ en:"Workshops you can visit", ja:"訪ねられる工房", zh:"可參觀的工坊" }, text:{
      en:"Many working places take visitors too: breweries in the brewing season, masu makers in Ōgaki, papermakers along the Itadori river, knife makers' outlets and the swordsmiths' demonstrations in Seki, potters in the kiln villages of Tajimi and Toki, and several furniture showrooms in Takayama. Most ask for a booking; the directories — <a href=\"makers.html\">A Directory of Makers</a> and <a href=\"directory.html\">A Directory of Gifu Sake</a> — name some of them.",
      ja:"仕事場の多くも訪問者を受け入れている。仕込みの季節の酒蔵、大垣の枡屋、板取川沿いの紙漉き、関の刃物の直売所と刀匠の鍛錬公開、多治見や土岐の窯元の集落、高山のいくつかの家具のショールーム。たいていは予約が要る。<a href=\"makers.html\">作り手名鑑</a>と<a href=\"directory.html\">岐阜酒名鑑</a>にその一部を挙げた。",
      zh:"許多工作場所也接待訪客：釀造季節的酒藏、大垣的枡工坊、板取川沿岸的造紙者、關的刀具直營店與刀匠公開鍛刀、多治見與土岐窯元聚落的陶工，以及高山的幾家家具展示間。多數需要預約；<a href=\"makers.html\">製作者名鑑</a>與<a href=\"directory.html\">岐阜酒名鑑</a>列出了其中一部分。" } },
    { t:"related", items:[
      { href:"journeys.html", why:{ en:"The places strung into routes.", ja:"これらを道筋につなぐ。", zh:"把這些地方串成路線。" } },
      { href:"regions.html", why:{ en:"Everything in the book, town by town.", ja:"本書のすべてを町ごとに。", zh:"本書所有內容，依城鎮排列。" } },
      { href:"makers.html", why:{ en:"The workshops behind the crafts.", ja:"工芸の背後の工房。", zh:"工藝背後的工坊。" } },
      { href:"festivals.html", why:{ en:"When to go.", ja:"いつ行くか。", zh:"何時前往。" } }
    ] }
  ]
};

/* ---- -------------------------------------------- makers */
GIFU.pages["makers"] = { kicker:{ en:"Journeys · 06", ja:"旅 · 06", zh:"旅程 · 06" },
  title:{ en:"A Directory of Makers", ja:"木の仕事名鑑", zh:"木作名鑑" },
  jp:"名鑑",
  lede:{
    en:"The wood chapters of this book explain how Gifu's wood is grown, cut, sold, sawn and made into things. This page is the list of who does it, with the makers of blades, paper and clay beside them. It runs from the chair factories of Takayama to the paper-makers of Mino, from the forest owners' cooperatives of the hinoki villages to the log markets, sawmills and plywood mill that buy their trees, and on to the guitar workshops; the schools, museums and wooden playhouses are on Museums &amp; Workshops. Each entry gives the name, the town, the year the organisation dates itself from, a sentence on what it actually does, and — where the maker publishes it — the kind of work, the technique, the wood and the year a product was introduced. It is not a ranking and not a recommendation; it is the reference to keep open when a label, a signboard or a delivery slip carries a name you do not know.",
    ja:"本書の木の諸部は、岐阜の木がどう育てられ、伐られ、売られ、挽かれ、ものになるかを説いた。この頁は、それを担う者の一覧であり、刃物・紙・土の作り手もあわせて収める。高山の椅子の工場から美濃の紙漉きまで、ヒノキの村の森林組合から、その木を買う原木市場、製材所、合板工場まで、さらにギターの工房までを収める。学校、博物館、木造の芝居小屋は「博物館と工房」に挙げた。記載ごとに名、所在の市町村、その組織が創業・設立と称する年、実際に何をしているかの一文を挙げ、つくり手が公表している場合には、仕事の種類、技法、樹種、製品の発売年を添えた。順位ではなく推薦でもない。見知らぬ名が札や看板や納品書に書かれているとき、開いておきたい参照表である。",
    zh:"本書關於木的各章說明岐阜的木材如何被培育、砍伐、販售、製材並做成器物。本頁則是做這些事的人的名單，並一併收錄刀刃、紙與陶的製作者。它從高山的椅子工廠排到美濃的紙匠，從扁柏山村的森林組合，到收購其木材的原木市場、製材廠與合板廠，再到吉他工坊；學校、博物館與木造戲棚則列於「博物館與工坊」。每一筆條目列出名稱、所在市町村、該組織自稱的創業或設立年份，以一句話說明它實際在做什麼；若製作者有公開，再附上工作類型、技法、樹種與產品推出年份。這不是排名，也不是推薦；當標籤、招牌或送貨單上出現一個你不認識的名字時，這就是你會想翻開的參照表。" },
  body:[
    { t:"section",
      id:"howtoread",
      title:{ en:"How to read an entry", ja:"記載の読み方", zh:"條目的讀法" },
      jp:"凡例",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"The left column", ja:"左の欄", zh:"左欄" },
              jp:"名称・法人名",
              def:{
                en:"The name by which the maker is known, in Japanese, then its reading. Below it, where different, the registered name of the company, cooperative or public body — often the name printed on an invoice or a label rather than on the workshop sign. Below that the municipality and the year the organisation dates itself from. For a building the year is the one it was built; for a cooperative, the year it was formed. A founding year is what the organisation itself states; where it could not be found, the column shows a dash.",
                ja:"上に、つくり手が通称として知られる名とその読み。その下に、異なる場合は会社・組合・公的機関の正式な名称——工房の看板よりも、請求書や札に刷られる名であることが多い。さらにその下に所在の市町村と、その組織が創業・設立と称する年。建物では建てられた年、組合では設立の年を示す。創業年は組織自身が述べる年であり、見つからなかったものはダッシュとした。",
                zh:"上方是製作者為人所知的名稱（日文）及其讀音。其下若有不同，列出公司、組合或公家機關的正式名稱——那往往是印在發票或標籤上、而非工坊招牌上的名字。再下方是所在市町村，以及該組織自稱的創業或設立年份。建築物標示其建造年份，組合標示其設立年份。創業年以組織自身的說法為準；查不到的，該欄以破折號表示。" } },
            { term:{ en:"The product line", ja:"製品の行", zh:"產品那一行" },
              jp:"種類・技法・樹種・年",
              def:{
                en:"For each product or service: the kind of work in bold, the technique beside it in a lighter hand, then the wood or woods, then the year the product was introduced — in that order and separated by a dot. For cooperatives, markets, schools and museums the “product” is what they do: a log auction, a drying kiln, a course, a collection. The woods are named once, in a fixed vocabulary, so that the indexes at the foot of the page can gather every maker who works a given timber.",
                ja:"製品や業務ごとに、仕事の種類を太字で、その横に技法を細い字で、続けて樹種、最後に発売の年を、この順に中黒で区切って並べる。組合、市場、学校、博物館では、「製品」はその営み——丸太の競り、乾燥機、課程、収蔵——である。樹種は決まった語彙で一度だけ名づけてあるので、頁の末尾の索引は、ある材を扱うつくり手をすべて集めることができる。",
                zh:"每項產品或服務依序列出：粗體的工作類型、其旁以較淡字體標示的技法、接著是樹種，最後是產品推出年份，以中點分隔。對組合、市場、學校與博物館而言，「產品」就是它們所做的事：原木拍賣、乾燥窯、課程、館藏。樹種以固定詞彙統一命名，因此頁尾的索引能把使用某種木材的製作者全部集中起來。" } },
            { term:{ en:"An em dash", ja:"ダッシュ", zh:"破折號" },
              jp:"—",
              def:{
                en:"Means that no published figure was found — not that the detail does not exist. Small workshops rarely print a founding year; a maker who chooses timber board by board for each commission will not name one wood for a chair that may be made in five; and a cooperative does not introduce products in the way a factory does. Nothing has been filled in by guesswork.",
                ja:"公表された値が見当たらなかったことを意味し、その事柄が存在しないという意味ではない。小さな工房は創業年をめったに記さない。注文ごとに板を一枚ずつ選ぶつくり手は、五つの材でつくりうる椅子に一つの樹種を名のらない。組合は工場のように製品を発売するわけでもない。推測で埋めたものは一つもない。",
                zh:"表示查不到公開的數值——並不表示那項資訊不存在。小工坊很少標出創業年；每接一件訂單就逐片挑選板材的製作者，不會為一張可用五種木材製作的椅子指定單一樹種；而組合也不像工廠那樣推出產品。沒有任何一欄是靠猜測填上的。" } },
            { term:{ en:"The filter", ja:"絞り込み", zh:"篩選" },
              jp:"検索",
              def:{
                en:"Each list has a box above it. Type a name, a town, a wood or a kind of work, in English or Japanese — “Takayama”, “hinoki”, “ヒノキ”, “chair”, “和紙” — and the list narrows as you type, the group headings disappearing when nothing under them matches. The count beside the box shows how many entries remain.",
                ja:"各一覧の上に入力欄がある。名、町、樹種、仕事の種類を英語でも日本語でも——「Takayama」「hinoki」「ヒノキ」「chair」「和紙」——打てば、打つそばから一覧が絞られ、該当のない群の見出しは消える。欄の横の数は、残った記載の数を示す。",
                zh:"每份名單上方都有一個輸入框。以英文或日文輸入名稱、城鎮、樹種或工作類型——「Takayama」、「hinoki」、「ヒノキ」、「chair」、「和紙」——名單會隨輸入即時縮小，底下沒有符合項目的分組標題也會隱藏。輸入框旁的數字顯示剩下的條目數。" } },
            { term:{ en:"What is not here", ja:"載せていないもの", zh:"未列入的東西" },
              jp:"価格・営業時間",
              def:{
                en:"No prices, opening hours, telephone numbers or ratings. All of these change faster than a book, and a workshop that takes visitors on Saturdays this year may not next year. Businesses known to have closed are left out. Before travelling, check with the maker; see <a href=\"visiting.html\">Visiting</a> for how.",
                ja:"価格、営業時間、電話番号、評価は載せていない。どれも本より速く変わり、今年は土曜に客を迎える工房が来年もそうとは限らない。閉じたことが分かっている事業者は外した。出かける前につくり手に確かめること。その方法は<a href=\"visiting.html\">訪ねる</a>に記した。",
                zh:"不列價格、營業時間、電話或評分。這些都比書變得更快，今年週六接待訪客的工坊，明年未必如此。已知歇業的業者一律未收。出發前請先向製作者確認；做法見<a href=\"visiting.html\">造訪</a>。" } }
          ] },
        { t:"note",
          label:{ en:"On completeness", ja:"網羅について", zh:"關於完整性" },
          text:{
            en:"Gifu had 169 sawmills in fiscal 2021 — more than any other prefecture — nineteen forest owners' cooperatives, twenty-four member firms in the Hida furniture federation alone, and several hundred independent woodworkers, carpenters and builders. No list is complete, and this one does not pretend to be. It is built from authoritative lists rather than from impressions: the member rolls of the Hida furniture federation, the Mino hand-made washi cooperative and the Gifu lantern cooperative; the prefecture's register of forest cooperatives and its guide to timber suppliers; the prefectural timber federation; and national directories of furniture and guitar workshops. Where a list gave only a name, the entry says only what could be confirmed.",
            ja:"岐阜には二〇二一年度に製材工場が百六十九——全国の県で最多——、森林組合が十九、飛騨木工連合会だけで組合員が二十四社あり、独立した木工家、大工、工務店は数百を数える。網羅した一覧などというものはなく、この頁もそれを装わない。この名鑑は印象ではなく、権威ある一覧から組み立てた。飛騨木工連合会、美濃手すき和紙協同組合、岐阜提灯協同組合の組合員名簿、県の森林組合一覧と木材調達の手引き、県の木材協同組合連合会、そして全国の家具工房とギター工房の案内である。一覧に名しかなかったものについては、確かめられたことだけを記した。",
            zh:"岐阜在 2021 年度有 169 家製材廠——全國各縣之冠——、19 個森林組合，光是飛驒木工聯合會就有 24 家會員企業，獨立木工家、木匠與營造商更以數百計。沒有一份名單是完整的，本頁也不假裝如此。這份名鑑依據的是權威名單而非印象：飛驒木工聯合會、美濃手漉和紙協同組合與岐阜提燈協同組合的會員名冊；縣的森林組合一覽與木材調度指南；縣木材協同組合聯合會；以及全國家具工坊與吉他工坊名錄。若名單上只有名稱，條目也只寫能確認的部分。" } }
      ] },
    { t:"section",
      id:"furniture",
      title:{ en:"Furniture and studio woodwork", ja:"家具と工房の木工", zh:"家具與工作室木作" },
      jp:"家具",
      body:[
        { t:"p",
          text:{
            en:"The first group is the Hida furniture industry: the factories of Takayama that grew out of a bentwood-chair venture of 1920, the cooperative federation that binds them, and the newer firms that joined it. The second is the independent studios scattered across the prefecture, most of them one to three people making chairs, tables and cabinets to order. The history of the factories is on <a href=\"furniture.html\">Hida Furniture</a> and <a href=\"chairs.html\">The Chair</a>; the lineage of the studios on <a href=\"houses.html\">Makers and Studios</a>.",
            ja:"最初の群は飛騨の家具産業である。一九二〇年の曲木椅子の事業から育った高山の工場、それらを束ねる協同組合、そしてあとから加わった新しい会社。二つ目は県じゅうに散らばる独立した工房で、多くは一人から三人で椅子、机、箱物を注文でつくる。工場の歴史は<a href=\"furniture.html\">飛騨の家具</a>と<a href=\"chairs.html\">椅子</a>に、工房の系譜は<a href=\"houses.html\">つくり手と工房</a>に記した。",
            zh:"第一組是飛驒家具產業：由 1920 年一項曲木椅事業發展而來的高山工廠、串連它們的協同組合，以及後來加入的新公司。第二組是散布全縣的獨立工作室，多數由一到三人依訂單製作椅子、桌子與櫃子。工廠的歷史見<a href=\"furniture.html\">飛驒家具</a>與<a href=\"chairs.html\">椅子</a>；工作室的傳承見<a href=\"houses.html\">工匠與工坊</a>。" } },
        { t:"makers",
          items:[
            { group:{ en:"Hida furniture makers", ja:"飛騨の家具メーカー", zh:"飛驒家具製造商" }, jp:"飛騨の家具", id:"g-furniture" },
            { jp:"飛騨産業",
              r:"Hida Sangyō",
              h:"飛騨産業株式会社",
              hr:"Hida Sangyō Co.",
              muni:"takayama",
              est:"1920",
              note:{
                en:"Founded in Takayama in 1920 as Chūō Mokkō with six employees to make bentwood beech chairs, renamed Hida Mokkō in 1923 and Hida Sangyō in 1945. It is the oldest and largest of the Hida furniture makers; it worked with the Italian designer Enzo Mari from 2003, and in 2023 opened a factory at Okuhida Tochio that dries timber with geothermal heat.",
                ja:"一九二〇年、曲木のブナの椅子をつくるため、従業員六人の中央木工として高山に創立され、一九二三年に飛騨木工、一九四五年に飛騨産業と改称した。飛騨の家具メーカーで最も古く最も大きい。二〇〇三年からイタリアのデザイナー、エンツォ・マーリと組み、二〇二三年には地熱で木材を乾かす工場を奥飛騨の栃尾に開いた。",
                zh:"1920 年以「中央木工」之名在高山創立，僅六名員工，製作曲木山毛櫸椅；1923 年改名飛驒木工，1945 年改稱飛驒產業。它是飛驒家具業中歷史最久、規模最大的一家；自 2003 年起與義大利設計師 Enzo Mari 合作，2023 年在奧飛驒栃尾開設以地熱乾燥木材的工廠。" },
              p:[
                { jp:"曲木椅子",
                  r:"Bentwood chairs",
                  c:"chair",
                  m:["bentwood"],
                  sp:["buna"],
                  yr:"1920",
                  d:{
                    en:"The founding product: 2,636 pieces, mostly chairs, in 1921–1922, from beech that had been used only for charcoal and clogs.",
                    ja:"創業の製品。一九二一〜一九二二年に二千六百三十六点、多くは椅子。それまで炭と下駄にしか使われなかったブナで。",
                    zh:"創業產品：1921–1922 年共 2,636 件，多為椅子，用的是過去只拿來燒炭與做木屐的山毛櫸。" } },
                { jp:"No.725 モンブラン",
                  r:"No. 725 “Montblanc”",
                  c:"chair",
                  m:["bentwood"],
                  yr:"1966",
                  d:{
                    en:"Won a design award in its first year and a Good Design Long Life award in 1984.",
                    ja:"発売の年に賞を受け、一九八四年にグッドデザイン・ロングライフ賞。",
                    zh:"推出當年即獲設計獎，1984 年獲優良設計長銷獎。" } },
                { jp:"フロンティア",
                  r:"“Frontier” series",
                  c:"furniture",
                  m:["solid"],
                  sp:["karamatsu"],
                  yr:"1979",
                  d:{
                    en:"An early attempt to make furniture from plantation larch rather than imported hardwood.",
                    ja:"輸入の広葉樹ではなく、植林のカラマツで家具をつくる早い試み。",
                    zh:"早期嘗試以人工林落葉松而非進口闊葉材製作家具。" } },
                { jp:"圧縮スギの家具「森のことば」",
                  r:"Compressed-sugi furniture",
                  c:"furniture",
                  m:["compressed"],
                  sp:["sugi"],
                  d:{
                    en:"Soft plantation sugi pressed hard enough for chairs; the series uses the knots as part of the design.",
                    ja:"やわらかな植林のスギを椅子に耐えるまで圧縮する。節を意匠の一部として生かす。",
                    zh:"把柔軟的人工林柳杉壓縮到足以做椅子；此系列把木節當成設計的一部分。" } }
              ] },
            { jp:"柏木工",
              r:"Kashiwa Mokkō",
              h:"柏木工株式会社",
              hr:"Kashiwa Mokkō Co.",
              muni:"takayama",
              est:"1943",
              note:{
                en:"Founded in 1943 and trading as Kashiwa from 1948. It began exporting to the United States in 1958, reportedly selling more than 200,000 of one model in its peak years, stopped exporting in 1986 and turned to the home market, where it began working with outside designers in 1984. The company marked its eightieth year in 2023.",
                ja:"一九四三年に創業し、一九四八年から柏木工を名のる。一九五八年にアメリカへの輸出を始め、最盛期には一つの型を二十万脚以上売ったとされるが、一九八六年に輸出をやめて国内に転じた。外部のデザイナーとの協働は一九八四年に始まる。二〇二三年に八十年を迎えた。",
                zh:"創立於 1943 年，1948 年起以「柏木工」為名。1958 年開始外銷美國，據稱全盛期單一型號售出逾 20 萬張；1986 年停止外銷，轉向國內市場，並自 1984 年起與外部設計師合作。2023 年迎來創業第 80 年。" },
              p:[
                { jp:"ウィンザーチェア",
                  r:"Windsor chair",
                  c:"chair",
                  m:["solid"],
                  yr:"1952",
                  d:{
                    en:"The English country chair with legs and spindles socketed into a solid seat, adapted to Japanese proportions; a Hida staple since.",
                    ja:"無垢の座面に脚と背棒を差し込むイギリスの田舎の椅子を、日本の寸法に合わせたもの。以来、飛騨の定番。",
                    zh:"把椅腳與背桿插入實木座面的英國鄉村椅，依日本人體格調整比例；此後成為飛驒的經典。" } },
                { jp:"メイツチェア",
                  r:"“Mates” chair",
                  c:"chair",
                  d:{
                    en:"The export model of which more than 200,000 are said to have been sold.",
                    ja:"二十万脚以上売れたとされる輸出向けの型。",
                    zh:"外銷款，據稱售出逾 20 萬張。" } },
                { jp:"ウィルダネス",
                  r:"“Wilderness” series",
                  c:"cabinet",
                  d:{
                    en:"A long-selling range of case and living furniture.",
                    ja:"箱物と居間の家具のロングセラー。",
                    zh:"長銷的箱型與客廳家具系列。" } },
                { jp:"CHICチェア",
                  r:"CHIC chair",
                  c:"chair",
                  m:["solid"],
                  yr:"2015",
                  d:{
                    en:"A back curved in three dimensions, machined from solid timber to follow the spine.",
                    ja:"背骨に沿うよう、無垢材から三次元に削り出した背。",
                    zh:"椅背以實木切削成三維曲面，貼合脊椎。" } }
              ] },
            { jp:"日進木工",
              r:"Nissin Mokkō",
              h:"日進木工株式会社",
              hr:"Nissin Mokkō Co.",
              muni:"takayama",
              est:"1946",
              note:{
                en:"Began production in Takayama in 1946, one of the post-war firms that turned a single company into a cluster. Known for light, elegant chairs of Nordic character, it received certificate No. 0002 under the Hida furniture trademark in December 2009.",
                ja:"一九四六年に高山で操業を始めた。一社を産地へと変えた戦後の会社の一つである。北欧の趣の軽く端正な椅子で知られ、二〇〇九年十二月に「飛騨の家具」商標の認定第〇〇〇二号を受けた。",
                zh:"1946 年在高山開業，是把單一公司變成產業聚落的戰後企業之一。以輕巧優雅、具北歐風格的椅子聞名，2009 年 12 月取得「飛驒家具」商標認證第 0002 號。" },
              p:[
                { jp:"軽量の椅子",
                  r:"Lightweight chair",
                  c:"chair",
                  m:["solid"],
                  d:{
                    en:"About 3.8 kilograms; reportedly three years to develop, the difficulty being to remove wood without losing strength.",
                    ja:"約三・八キロ。開発に三年かかったという。強さを失わずに木を削ぎ落とすのが難しい。",
                    zh:"約 3.8 公斤；據說開發耗時三年，難處在於減料卻不失強度。" } },
                { jp:"ダイニング・リビング家具",
                  r:"Dining and living furniture",
                  c:"furniture",
                  d:{
                    en:"Tables, sofas and cabinets built to the six standards of the Hida design charter.",
                    ja:"飛騨デザイン憲章の六つの基準に沿ってつくる机、ソファ、箱物。",
                    zh:"依飛驒設計憲章六項標準製作的桌子、沙發與櫃子。" } }
              ] },
            { jp:"シラカワ",
              r:"Shirakawa",
              h:"株式会社シラカワ",
              hr:"Shirakawa Co.",
              muni:"takayama",
              est:"1960",
              note:{
                en:"Founded in 1960, during the second wave of Takayama furniture firms. It is known above all for case furniture — chests, sideboards and storage — including made-to-order pieces.",
                ja:"一九六〇年、高山の家具会社の第二の波のなかで創業した。とりわけ箱物——箪笥、サイドボード、収納——で知られ、受注の品も手がける。",
                zh:"創立於 1960 年，屬於高山家具公司的第二波。尤以箱型家具——衣櫃、餐具櫃與收納——聞名，也承接訂製品。" },
              p:[
                { jp:"箱物家具",
                  r:"Case furniture",
                  c:"cabinet",
                  m:["custom"],
                  d:{
                    en:"Chests, sideboards and storage, standard and made to order.",
                    ja:"箪笥、サイドボード、収納。既製と受注。",
                    zh:"衣櫃、餐具櫃與收納；有現成品也有訂製。" } }
              ] },
            { jp:"キタニ",
              r:"Kitani",
              h:"株式会社キタニ",
              hr:"Kitani Co.",
              muni:"takayama",
              note:{
                en:"A Takayama maker that spent years repairing and studying Danish chairs, Finn Juhl's among them, before the holder of the designer's rights licensed it in 1996 to make his designs, including the No. 53 chair; it is described as the only Finn Juhl licensee in Japan. It also makes other licensed Danish designs; a related company, Kitani Japan, is also a member of the Hida federation.",
                ja:"フィン・ユールのものを含むデンマークの椅子を何年も修理し研究したのち、一九九六年にこのデザイナーの権利の継承者からNo.53チェアなどの製造のライセンスを得た高山の会社。日本で唯一のフィン・ユールのライセンス生産者と紹介される。ほかのデンマークの名作もライセンスでつくる。関連会社キタニジャパンも飛騨木工連合会の組合員である。",
                zh:"這家高山公司多年修理並研究包括 Finn Juhl 作品在內的丹麥椅子，於 1996 年獲這位設計師作品權利的繼承人授權生產其設計，包括 No.53 椅；它被介紹為日本唯一的 Finn Juhl 授權製造商。它也生產其他授權的丹麥設計；關係企業 Kitani Japan 同為飛驒木工聯合會會員。" },
              p:[
                { jp:"フィン・ユール No.53チェア",
                  r:"Finn Juhl No. 53 chair",
                  c:"chair",
                  m:["solid", "handmade"],
                  d:{
                    en:"Licensed production; described as the only Finn Juhl licensee in Japan.",
                    ja:"ライセンス生産。日本で唯一のフィン・ユールのライセンス生産者とされる。",
                    zh:"授權生產；被介紹為日本唯一的 Finn Juhl 授權製造商。" } },
                { jp:"デンマーク家具の復刻",
                  r:"Licensed Danish classics",
                  c:"furniture",
                  d:{ en:"Mid-century designs made under licence.", ja:"ライセンスによるミッドセンチュリーの家具。", zh:"授權生產的中世紀設計。" } },
                { jp:"家具の修理",
                  r:"Furniture restoration",
                  c:"repair",
                  d:{ en:"The repair work from which the licence grew.", ja:"ライセンスの源となった修理の仕事。", zh:"授權的起點——修理工作。" } }
              ] },
            { jp:"イバタインテリア",
              r:"Ibata Interior",
              h:"株式会社イバタインテリア",
              hr:"Ibata Interior Co.",
              muni:"hida",
              est:"1943",
              note:{
                en:"Established in 1943, the same year as Kashiwa's predecessor, according to the Hida furniture federation's history. Based in Furukawa, Hida city, it makes wooden furniture and takes on interior work, and is one of the firms certified to use the Hida furniture mark.",
                ja:"飛騨木工連合会の沿革によれば、柏木工の前身と同じ一九四三年の設立。飛騨市古川町にあり、木の家具をつくり、内装の仕事も手がける。「飛騨の家具」の認定企業の一つである。",
                zh:"據飛驒木工聯合會的沿革，與柏木工的前身同在 1943 年設立。位於飛驒市古川町，製作木製家具，也承接室內裝修，是獲准使用「飛驒家具」標章的認定企業之一。" },
              p:[{ jp:"家具", r:"Furniture", c:"furniture" }, { jp:"インテリア", r:"Interiors", c:"interior" }] },
            { jp:"オークヴィレッジ",
              r:"Oak Village",
              h:"オークヴィレッジ株式会社",
              hr:"Oak Village Co.",
              muni:"takayama",
              est:"1974",
              note:{
                en:"Founded in 1974 by five young people from a Rikkyō University circle, led by Inamoto Tadashi, who trained at the Hida Takayama technical school and settled in Kiyomi. Its motto runs “from bowls to furniture to buildings”, its principle that a tree grown for a hundred years should become something used for a hundred years; it has planted trees from the start.",
                ja:"一九七四年、稲本正を中心とする立教大学のサークル出身の五人が創立した。飛騨高山の技術専門校で学び、清見に根をおろした。「お椀から家具、建物まで」を掲げ、「百年かかって育った木は百年使えるものに」を旨とし、はじめから木を植えてきた。",
                zh:"1974 年由以稻本正為首、出身立教大學社團的五名年輕人創立；他們在飛驒高山技術專門學校受訓，定居清見。口號是「從碗到家具到建築」，信條是「長了一百年的樹，要做成能用一百年的東西」；從一開始就持續植樹。" },
              p:[
                { jp:"木の器",
                  r:"Bowls and tableware",
                  c:"tableware",
                  sp:["broadleaf", "domestic"],
                  d:{
                    en:"The “bowls” of the motto: everyday wares from Japanese hardwoods.",
                    ja:"標語の「お椀」。国産広葉樹の日用の器。",
                    zh:"口號中的「碗」：以日本闊葉材做的日常器皿。" } },
                { jp:"無垢の家具",
                  r:"Solid-wood furniture",
                  c:"furniture",
                  m:["solid", "custom"],
                  sp:["broadleaf", "domestic"],
                  d:{ en:"Standard and commissioned furniture.", ja:"定番と注文の家具。", zh:"常規品與訂製家具。" } },
                { jp:"木のおもちゃ",
                  r:"Wooden toys",
                  c:"toy",
                  sp:["domestic"],
                  d:{
                    en:"Toys for young children, part of its wood-education work.",
                    ja:"幼い子のためのおもちゃ。木育の仕事の一部。",
                    zh:"幼兒玩具，屬於其木育工作的一環。" } },
                { jp:"木造建築",
                  r:"Timber buildings",
                  c:"house",
                  m:["handcut"],
                  d:{
                    en:"The “buildings” of the motto: houses and halls in traditional framing.",
                    ja:"標語の「建物」。伝統の軸組による住宅と建物。",
                    zh:"口號中的「建築」：以傳統軸組工法建造的住宅與建物。" } }
              ] },
            { jp:"木と暮らしの制作所",
              r:"Ki to Kurashi no Seisakusho",
              h:"株式会社木と暮らしの制作所",
              hr:"Ki to Kurashi no Seisakusho Co.",
              muni:"takayama",
              note:{
                en:"A member of the Hida furniture federation, listed on a national workshop directory under its “Hida Collection” line at Kami-Okamoto in Takayama, the district where several of the older factories stand.",
                ja:"飛騨木工連合会の組合員。全国の工房の案内には、古い工場がいくつも立つ高山市上岡本町の「飛騨コレクション くらしの制作所」として載る。",
                zh:"飛驒木工聯合會會員；在全國工坊名錄中，以「飛驒 Collection」系列登錄於高山市上岡本町——幾家老工廠所在的地區。" },
              p:[
                { jp:"暮らしの家具",
                  r:"Household furniture",
                  c:"furniture",
                  d:{ en:"Furniture for everyday living.", ja:"日々の暮らしの家具。", zh:"日常生活家具。" } }
              ] },
            { jp:"HLF HIDA Leather Furniture",
              r:"HLF Hida Leather Furniture",
              muni:"takayama",
              note:{
                en:"A workshop in Ichinomiya, south of central Takayama, that specialises in leather-upholstered furniture on wooden frames — the one part of Hida furniture where the wood is mostly hidden.",
                ja:"高山の中心の南、一之宮町の工房で、木の骨組に革を張った家具を専らとする。飛騨の家具のなかで、木がほとんど隠れる唯一の分野である。",
                zh:"位於高山市中心以南一之宮町的工坊，專做以木骨架包覆皮革的家具——這是飛驒家具中木頭幾乎被藏起來的唯一領域。" },
              p:[
                { jp:"革張りの家具",
                  r:"Leather-upholstered seating",
                  c:"sofa",
                  d:{
                    en:"Sofas and chairs with leather over a timber frame.",
                    ja:"木の骨組に革を張ったソファと椅子。",
                    zh:"木骨架包覆皮革的沙發與椅子。" } }
              ] },
            { jp:"飛騨の森でクマは踊る",
              r:"Hidakuma",
              h:"株式会社飛騨の森でクマは踊る",
              hr:"Hida no Mori de Kuma wa Odoru Co.",
              muni:"hida",
              est:"2015",
              note:{
                en:"Set up in 2015 by Hida city, the design firm Loftwork and the forestry company Tobimushi, to find uses for the small-diameter broadleaves that make up most of Hida city's forests. It runs FabCafe Hida in Furukawa and has worked on a machine-learning kiln to cut a twelve-month drying cycle to about three.",
                ja:"二〇一五年、飛騨市、デザイン会社ロフトワーク、林業の会社トビムシが、飛騨市の森の大半を占める小径の広葉樹の使い道を探るために設立した。古川でFabCafe Hidaを営み、十二か月の乾燥を三か月ほどに縮める機械学習の乾燥機にも取り組んだ。",
                zh:"2015 年由飛驒市、設計公司 Loftwork 與林業公司 Tobimushi 共同設立，為構成飛驒市大半森林的小徑闊葉樹尋找用途。在古川經營 FabCafe Hida，並研發以機器學習控制的乾燥窯，希望把十二個月的乾燥週期縮短到約三個月。" },
              p:[
                { jp:"SLANT STOOL",
                  r:"Slant stool",
                  c:"chair",
                  m:["smalldia"],
                  sp:["broadleaf"],
                  d:{ en:"Seat and legs from offcut-sized parts.", ja:"端材ほどの部材で座と脚をつくる。", zh:"座面與椅腳都取自邊料大小的零件。" } },
                { jp:"NEKO",
                  r:"Cat tree",
                  c:"furniture",
                  m:["smalldia"],
                  sp:["broadleaf"],
                  d:{ en:"Made from branches and thin trunks.", ja:"枝と細い幹でつくる。", zh:"以樹枝與細幹製成。" } },
                { jp:"FabCafe Hida",
                  r:"FabCafe Hida",
                  c:"workshop",
                  d:{
                    en:"A café, guest house and digital workshop in a Furukawa townhouse.",
                    ja:"古川の町家のカフェ、宿、デジタル工房。",
                    zh:"位於古川町家的咖啡館、民宿與數位工坊。" } }
              ] },
            { jp:"飛騨木工連合会",
              r:"Hida Furniture Federation",
              h:"協同組合飛騨木工連合会",
              hr:"Hida Woodworking Cooperative Federation",
              muni:"takayama",
              est:"1950",
              note:{
                en:"Formed in 1950 as the Takayama woodworking association, reorganised as a federation in 1974 and chartered as a cooperative in 1982; it has twenty-four member businesses in Takayama and Hida. In January 2008 it registered “Hida no kagu” as a regional collective trademark, which member firms may use only after certification against six standards.",
                ja:"一九五〇年に高山木工会として結成され、一九七四年に連合会へ改組、一九八二年に協同組合の認可を得た。高山市と飛騨市の二十四の事業者が加わる。二〇〇八年一月に「飛騨の家具」を地域団体商標として登録し、組合員は六つの基準で認定を受けてはじめてこれを使える。",
                zh:"1950 年以「高山木工會」成立，1974 年改組為聯合會，1982 年取得協同組合認可；會員為高山市與飛驒市的 24 家業者。2008 年 1 月將「飛驒家具」註冊為地域團體商標，會員企業須通過六項標準認證方可使用。" },
              p:[
                { jp:"飛騨の家具（地域団体商標）",
                  r:"“Hida furniture” trademark",
                  c:"furniture",
                  yr:"2008",
                  d:{
                    en:"Standards cover low emissions, all processing after the first sawing done in Hida, a ten-year warranty on wooden parts, tested quality, legal timber and design; registered in Taiwan in 2009.",
                    ja:"基準は低ホルムアルデヒド、一次製材のあとの加工をすべて飛騨で行うこと、木部の十年保証、試験による品質、合法な木材、デザイン。二〇〇九年に台湾でも登録。",
                    zh:"標準涵蓋低甲醛、初次製材後所有加工皆在飛驒完成、木製部分十年保固、經測試的品質、合法木材與設計；2009 年亦在台灣註冊。" } },
                { jp:"組合員",
                  r:"Other members",
                  c:"nd",
                  d:{
                    en:"Besides the firms entered here: Arts Craft Japan, Arakawa sawmill-machinery works, Kakishita timber works, Kijisha, Kyōei Seisakusho, Mokubasha, Daiichi Bussan, Chūō Sangyō, Nakahata tool shop, FUSHI, Butsudan Kōgei Horio, Plus One, Hōkoku Mokkō and Yamaguchi Mokkōsho.",
                    ja:"ここに挙げた会社のほか、ARTS CRAFT JAPAN、荒川製材機製作所、柿下木材工業所、雉子舎、共栄製作所、木馬舎、第一物産、中央産業、中畑機材工具店、FUSHI、仏壇工芸ほりお、プラス・ワン、ホウコク木工、山口木工所。",
                    zh:"除本頁所列公司外，尚有 Arts Craft Japan、荒川製材機製作所、柿下木材工業所、雉子舍、共榮製作所、木馬舍、第一物產、中央產業、中畑機材工具店、FUSHI、佛壇工藝 Horio、Plus One、Hōkoku 木工與山口木工所。" } }
              ] },
            { group:{ en:"Independent furniture studios", ja:"独立した家具工房", zh:"獨立家具工作室" }, jp:"家具工房", id:"g-studios" },
            { jp:"家具工房雉子屋",
              r:"Kijiya",
              muni:"takayama",
              note:{
                en:"A furniture workshop in Niukawa, in the hills east of central Takayama, making chairs, benches, tables and storage.",
                ja:"高山の中心の東、丹生川町の山あいにある家具工房。椅子、ベンチ、机、収納をつくる。",
                zh:"位於高山市中心以東丹生川町山間的家具工坊，製作椅子、長凳、桌子與收納家具。" },
              p:[{ jp:"椅子・テーブル・収納", r:"Chairs, tables, storage", c:"furniture", m:["handmade", "custom"] }] },
            { jp:"walnut-factory",
              r:"Walnut Factory",
              muni:"takayama",
              note:{
                en:"A workshop in Ichinomiya, Takayama, that builds its furniture around walnut, including the native Japanese walnut that grows along Hida's valley streams.",
                ja:"高山市一之宮町の工房で、クルミを軸に家具をつくる。飛騨の谷川沿いに育つ国産のクルミも用いる。",
                zh:"高山市一之宮町的工坊，以胡桃木為核心製作家具，也使用生長在飛驒溪谷邊的日本本土胡桃。" },
              p:[{ jp:"クルミの家具", r:"Walnut furniture", c:"furniture", m:["solid", "handmade"], sp:["kurumi", "walnut"] }] },
            { jp:"tokotowa",
              r:"Tokotowa",
              muni:"kakamigahara",
              note:{
                en:"A studio in Sohara, Kakamigahara, on the edge of the Gifu plain, making chairs, benches, tables and storage furniture.",
                ja:"岐阜の平野の縁、各務原市蘇原の工房。椅子、ベンチ、机、収納家具をつくる。",
                zh:"位於岐阜平原邊緣、各務原市蘇原的工作室，製作椅子、長凳、桌子與收納家具。" },
              p:[{ jp:"チェア・ベンチ・テーブル", r:"Chairs, benches, tables", c:"chair", m:["handmade"] }] },
            { jp:"MONDO",
              r:"Mondo",
              muni:"gifu",
              note:{
                en:"A Gifu city workshop making original and made-to-order furniture and fitted kitchens — the kind of maker that works as much with architects and householders as with shops.",
                ja:"岐阜市の工房で、創作家具、注文家具、造り付けのキッチンをつくる。店だけでなく建築家や住まい手とも仕事をする種類のつくり手である。",
                zh:"岐阜市的工坊，製作原創家具、訂製家具與系統廚具——這類製作者與建築師和屋主合作的機會，不亞於與店家合作。" },
              p:[
                { jp:"オーダー家具", r:"Made-to-order furniture", c:"furniture", m:["custom"] },
                { jp:"オーダーキッチン", r:"Fitted kitchens", c:"interior", m:["custom"] }
              ] },
            { jp:"福庭家具工房",
              r:"Fukuniwa Kagu Kōbō",
              muni:"minokamo",
              note:{
                en:"A furniture workshop in Minokamo, where the Hida and Kiso rivers meet, making chairs, benches, tables and storage.",
                ja:"飛騨川と木曽川が出合う美濃加茂市の家具工房。椅子、ベンチ、机、収納をつくる。",
                zh:"位於飛驒川與木曾川交會處美濃加茂市的家具工坊，製作椅子、長凳、桌子與收納家具。" },
              p:[{ jp:"椅子・テーブル・収納", r:"Chairs, tables, storage", c:"furniture", m:["handmade"] }] },
            { jp:"家具工房ウッドスケッチ",
              r:"Wood Sketch",
              muni:"kawabe",
              note:{
                en:"A workshop in Kawabe, a small town on the Hida River in Kamo district, making chairs, tables and storage furniture.",
                ja:"加茂郡の飛騨川沿いの小さな町、川辺町の工房。椅子、机、収納家具をつくる。",
                zh:"位於加茂郡飛驒川畔小鎮川邊町的工坊，製作椅子、桌子與收納家具。" },
              p:[{ jp:"椅子・テーブル・収納", r:"Chairs, tables, storage", c:"furniture", m:["handmade"] }] },
            { jp:"家具工房 AC CRAFT",
              r:"AC Craft",
              muni:"mino",
              note:{
                en:"A furniture workshop in Mino linked to WOOD AC, a non-profit network of architecture graduates of the prefectural Forest Academy, which keeps its own workshop to make furniture from local timber.",
                ja:"美濃市の家具工房で、県立森林文化アカデミーの建築の卒業生によるNPO、WOOD ACとつながる。WOOD ACは地元の材で家具をつくる自前の工房をもつ。",
                zh:"美濃市的家具工坊，與縣立森林文化學院建築科畢業生組成的非營利網絡 WOOD AC 相連；WOOD AC 設有自己的工坊，以在地木材製作家具。" },
              p:[{ jp:"家具", r:"Furniture", c:"furniture", m:["handmade"], sp:["local"] }] },
            { jp:"loftywood",
              r:"Loftywood",
              muni:"kani",
              note:{
                en:"A furniture workshop in Kani, the city better known for its guitar factory, making chairs, tables and storage.",
                ja:"ギターの工場でよく知られる可児市の家具工房。椅子、机、収納をつくる。",
                zh:"位於以吉他工廠聞名的可兒市的家具工坊，製作椅子、桌子與收納家具。" },
              p:[{ jp:"椅子・テーブル・収納", r:"Chairs, tables, storage", c:"furniture", m:["handmade"] }] },
            { jp:"F-FURNITURE 藤岡木工所",
              r:"Fujioka Mokkōsho",
              muni:"yamagata",
              note:{
                en:"A woodworking shop in Yamagata, north of Gifu city, making furniture for homes and commercial interiors under the F-Furniture name.",
                ja:"岐阜市の北、山県市の木工所。F-FURNITUREの名で住まいと店舗の家具をつくる。",
                zh:"位於岐阜市以北山縣市的木工所，以 F-Furniture 之名製作住宅與商業空間的家具。" },
              p:[{ jp:"家具・店舗家具", r:"Home and shop furniture", c:"furniture", m:["custom"] }] },
            { jp:"はせ工房",
              r:"Hase Kōbō",
              muni:"ena",
              note:{
                en:"A workshop in Kasagi, Ena, known for its small children's chairs (<em>mame-isu</em>) as well as handmade furniture.",
                ja:"恵那市笠置町の工房。手づくりの家具とともに、小さな子どもの椅子「豆いす」で知られる。",
                zh:"位於惠那市笠置町的工坊，除手工家具外，以兒童小椅（「豆椅」）聞名。" },
              p:[
                { jp:"豆いす", r:"Small chairs", c:"chair", m:["handmade"] },
                { jp:"手作り家具", r:"Handmade furniture", c:"furniture", m:["handmade"] }
              ] },
            { jp:"家具工房N",
              r:"Kagu Kōbō N",
              muni:"mizunami",
              note:{
                en:"A furniture workshop in Toki-chō, Mizunami, in the pottery country of eastern Mino.",
                ja:"東美濃の焼き物の里、瑞浪市土岐町の家具工房。",
                zh:"位於東美濃陶瓷之鄉、瑞浪市土岐町的家具工坊。" },
              p:[{ jp:"家具", r:"Furniture", c:"furniture", m:["handmade"] }] },
            { jp:"創作家具＆木製品 大鹿野工房",
              r:"Ōjikano Kōbō",
              muni:"gero",
              note:{
                en:"A workshop in Gero making original furniture and small wooden goods.",
                ja:"下呂市の工房。創作家具と木製品をつくる。",
                zh:"下呂市的工坊，製作原創家具與小型木製品。" },
              p:[
                { jp:"創作家具", r:"Original furniture", c:"furniture", m:["handmade"] },
                { jp:"木製品", r:"Wooden goods", c:"nd" }
              ] },
            { jp:"久保田家具工房",
              r:"Kubota Kagu Kōbō",
              muni:"yoro",
              note:{
                en:"A furniture workshop in Yōrō, below the Yōrō hills at the western edge of the Nōbi plain, making custom woodwork.",
                ja:"濃尾平野の西の縁、養老山地のふもとの養老町の家具工房。注文の木工をつくる。",
                zh:"位於濃尾平原西緣、養老山地山腳養老町的家具工坊，承作訂製木工。" },
              p:[{ jp:"注文家具", r:"Custom furniture", c:"furniture", m:["custom", "handmade"] }] }
          ] }
      ] },
    { t:"section",
      id:"crafts",
      title:{ en:"Traditional crafts", ja:"伝統の工芸", zh:"傳統工藝" },
      jp:"工芸",
      body:[
        { t:"p",
          text:{
            en:"Gifu holds six of Japan's nationally designated traditional crafts, and five of them are made wholly or partly of wood, bamboo or bark fibre: Hida Shunkei lacquer (1975), Ichii Ittōbori carving (1975), Mino washi (1985), Gifu lanterns (1995) and Gifu umbrellas (2022). Most are organised through a cooperative that holds the name, runs the training and speaks for the trade, while the work itself is done in small family workshops. The entries below list the cooperatives first and then the workshops that could be confirmed from member lists and the makers' own pages; the crafts are explained on <a href=\"shunkei.html\">Hida Shunkei</a>, <a href=\"ittobori.html\">Ittōbori</a>, <a href=\"masu.html\">Masu</a> and <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>.",
            ja:"岐阜には国の伝統的工芸品が六つあり、そのうち五つは全部または一部が木、竹、樹皮の繊維でできている。飛騨春慶（一九七五年）、一位一刀彫（一九七五年）、美濃和紙（一九八五年）、岐阜提灯（一九九五年）、岐阜和傘（二〇二二年）である。多くは協同組合を通じて組織され、組合が名を守り、後継者を育て、産地を代表する一方、仕事そのものは家族の小さな工房で行われる。以下はまず組合を、次に組合員名簿とつくり手自身の頁で確かめられた工房を挙げる。工芸そのものは<a href=\"shunkei.html\">飛騨春慶</a>、<a href=\"ittobori.html\">一刀彫</a>、<a href=\"masu.html\">枡</a>、<a href=\"paper.html\">紙・提灯・傘</a>に記した。",
            zh:"岐阜擁有六項國家指定傳統工藝品，其中五項全部或部分以木、竹或樹皮纖維製成：飛驒春慶（1975）、一位一刀雕（1975）、美濃和紙（1985）、岐阜提燈（1995）與岐阜和傘（2022）。多數透過協同組合組織起來——組合守護名號、培育傳人並代表產地發聲，實際工作則在家族經營的小工坊裡完成。以下先列組合，再列能從會員名冊與製作者官網確認的工坊；工藝本身的說明見<a href=\"shunkei.html\">飛驒春慶</a>、<a href=\"ittobori.html\">一刀雕</a>、<a href=\"masu.html\">枡</a>與<a href=\"paper.html\">紙、燈籠與傘</a>。" } },
        { t:"makers",
          items:[
            { group:{ en:"Lacquer and carving", ja:"春慶と一刀彫", zh:"春慶與一刀雕" }, jp:"漆・彫刻", id:"g-lacquer" },
            { jp:"飛騨春慶連合協同組合",
              r:"Hida Shunkei Cooperative",
              h:"飛騨春慶連合協同組合",
              hr:"Hida Shunkei Federated Cooperative",
              muni:"takayama",
              note:{
                en:"The cooperative of the wood-base makers (<em>kijishi</em>) and lacquerers (<em>nushi</em>) of Hida Shunkei, based in Kami-Okamoto, Takayama. The ware — transparent lacquer over dyed wood so that the grain shows through — traces itself to a tray presented to the Takayama lord's son in the Keichō era, traditionally 1606, and was designated a national traditional craft in February 1975.",
                ja:"飛騨春慶の木地師と塗師の協同組合で、高山市上岡本町に置かれる。着色した木地に透明の漆を塗り、木目を透かして見せるこの器は、慶長年間（伝承では一六〇六年）に高山の領主の子に献じられた盆に始まるとされ、一九七五年二月に国の伝統的工芸品に指定された。",
                zh:"飛驒春慶木地師與漆師的協同組合，設於高山市上岡本町。這種器物在染色木胎上塗透明漆，讓木紋透出；相傳源於慶長年間（傳統說法為 1606 年）獻給高山領主之子的一只托盤，1975 年 2 月獲指定為國家傳統工藝品。" },
              p:[
                { jp:"板物・曲物",
                  r:"Joined and bent ware",
                  c:"lacquer",
                  m:["shunkei", "urushi"],
                  sp:["hinoki", "sawara"],
                  d:{
                    en:"Trays, boxes and tiered boxes from split or sawn boards.",
                    ja:"割った板や挽いた板でつくる盆、箱、重箱。",
                    zh:"以劈開或鋸開的板材製作的托盤、盒與多層餐盒。" } },
                { jp:"挽物",
                  r:"Turned ware",
                  c:"lacquer",
                  m:["shunkei", "urushi", "lathe"],
                  sp:["tochi"],
                  d:{
                    en:"Bowls and trays turned on the lathe from horse chestnut.",
                    ja:"トチを轆轤で挽いた椀と盆。",
                    zh:"以七葉樹車旋的碗與盤。" } }
              ] },
            { jp:"川原春慶工房",
              r:"Kawahara Shunkei Kōbō",
              muni:"takayama",
              note:{
                en:"A Hida Shunkei lacquer workshop, whose <em>nushi</em> Kawahara Toshihiko is one of the two craftsmen presented by the ware's own promotional site — the other being a <em>kijishi</em>, since every Shunkei piece passes through both a woodworker's and a lacquerer's hands.",
                ja:"飛騨春慶の塗りの工房で、塗師の川原俊彦は、春慶塗の紹介の頁に登場する二人の職人の一人である。もう一人は木地師で、春慶の品はどれも木地師と塗師の二つの手を経る。",
                zh:"飛驒春慶的漆工坊，漆師川原俊彥是春慶塗推廣網站介紹的兩位工匠之一——另一位是木地師，因為每件春慶器都要經過木工與漆工兩雙手。" },
              p:[
                { jp:"春慶塗",
                  r:"Shunkei lacquering",
                  c:"lacquer",
                  m:["shunkei", "urushi"],
                  d:{
                    en:"Colouring, rubbed lacquer, polishing and the transparent top coat.",
                    ja:"着色、摺漆、研ぎ、透明の上塗。",
                    zh:"染色、擦漆、研磨與透明面漆。" } }
              ] },
            { jp:"飛騨一位一刀彫協同組合",
              r:"Hida Ichii Ittōbori Cooperative",
              h:"飛騨一位一刀彫協同組合",
              hr:"Hida Ichii Ittōbori Cooperative",
              muni:"takayama",
              note:{
                en:"The carvers' cooperative of Takayama, holder of the regional collective trademark “Hida Ichii Ittōbori” registered in 2006. The craft — unpainted carving in Japanese yew that uses the contrast of red heartwood and white sapwood — began with the netsuke carver Matsuda Sukenaga (1800–1871) and was designated a national traditional craft in 1975.",
                ja:"高山の彫師の協同組合で、二〇〇六年に登録された地域団体商標「飛騨一位一刀彫」をもつ。赤い心材と白い辺材の対比を生かし、色を塗らずにイチイを彫るこの技は、根付師松田亮長（一八〇〇〜一八七一）に始まり、一九七五年に国の伝統的工芸品となった。",
                zh:"高山雕師的協同組合，擁有 2006 年註冊的地域團體商標「飛驒一位一刀雕」。這項工藝以紅色心材與白色邊材的對比、不上色地雕刻日本紫杉，始於根付雕師松田亮長（1800–1871），1975 年獲指定為國家傳統工藝品。" },
              p:[
                { jp:"一位一刀彫",
                  r:"Ittōbori carving",
                  c:"carving",
                  m:["ittobori", "carved"],
                  sp:["ichii"],
                  d:{
                    en:"Zodiac animals, festival figures, netsuke and ornaments; the wood darkens to amber with age.",
                    ja:"干支、祭の人形、根付、置物。木は年とともに飴色に深まる。",
                    zh:"生肖、祭典人偶、根付與擺飾；木色隨歲月轉為琥珀色。" } }
              ] },
            { jp:"鷲塚彫刻",
              r:"Washizuka Chōkoku",
              muni:"takayama",
              est:"1996",
              note:{
                en:"The workshop of the ittōbori carver Washizuka Hiroshi (carving name Mokuji), born in Gifu in 1971, who trained under the certified craftsman Wani Hisayuki, set up on his own in 1996 and was certified as a traditional craftsman in 2010; he serves as a director of the carvers' cooperative.",
                ja:"一刀彫の彫師鷲塚浩（彫号・沐仁）の工房。鷲塚は一九七一年に岐阜で生まれ、伝統工芸士和仁久幸に弟子入りして修業したのち一九九六年に独立し、二〇一〇年に伝統工芸士の認定を受けた。一刀彫の組合の理事を務める。",
                zh:"一刀雕雕師鷲塚浩（雕號沐仁）的工坊。他 1971 年生於岐阜，拜傳統工藝士和仁久幸為師學藝，1996 年自立門戶，2010 年獲認定為傳統工藝士，並擔任雕師組合理事。" },
              p:[{ jp:"一位一刀彫", r:"Ittōbori figures", c:"carving", m:["ittobori", "carved", "handmade"], sp:["ichii"] }] },
            { jp:"山城工芸",
              r:"Yamashiro Kōgei",
              muni:"takayama",
              note:{
                en:"An ittōbori workshop that sells its carvings at a stall in the Miyagawa morning market, held every day along the river in the old town of Takayama.",
                ja:"高山の古い町並みの川沿いで毎朝開かれる宮川朝市の店で、自らの彫り物を売る一刀彫の工房。",
                zh:"在高山老街沿河每天舉行的宮川早市擺攤、販售自家雕刻的一刀雕工坊。" },
              p:[{ jp:"一位一刀彫", r:"Ittōbori carvings", c:"carving", m:["ittobori", "carved"], sp:["ichii"] }] },
            { jp:"川上彫刻",
              r:"Kawakami Chōkoku",
              muni:"takayama",
              note:{
                en:"A family carving workshop in Takayama working in the Ichii Ittōbori tradition.",
                ja:"一位一刀彫の伝統に立つ、高山の家族の彫刻工房。",
                zh:"承襲一位一刀雕傳統的高山家族雕刻工坊。" },
              p:[{ jp:"一位一刀彫", r:"Ittōbori carvings", c:"carving", m:["ittobori", "carved"], sp:["ichii"] }] },
            { group:{ en:"Masu, lanterns and umbrellas", ja:"枡・提灯・和傘", zh:"枡、提燈與和傘" }, jp:"枡・提灯・傘", id:"g-masu" },
            { jp:"大橋量器",
              r:"Ōhashi Ryōki",
              h:"有限会社大橋量器",
              hr:"Ōhashi Ryōki Ltd.",
              muni:"ogaki",
              est:"1950",
              note:{
                en:"A masu maker founded in 1950 by Ōhashi Mune, a rare woman founder in the trade. Ōgaki has made masu since 1890 and, by the company's account, now produces about 80% of Japan's; of the nine makers the city once had, only a handful remain. The firm revived its fortunes with coloured and novelty masu and runs the Masu-kōbō Masuya shop.",
                ja:"一九五〇年、この職ではめずらしい女性の創業者、大橋ムネが興した枡の製造元。大垣では一八九〇年から枡がつくられ、同社によれば、いまは全国の約八割を産する。かつて九軒あった製造元は、わずかしか残っていない。色枡や新しい意匠の枡で盛り返し、「枡工房枡屋」を営む。",
                zh:"1950 年由大橋ムネ創立的枡製造商——她是這一行少見的女性創辦人。大垣自 1890 年起製枡，據該公司說法，現今產量約占全日本八成；市內曾有九家製造商，如今僅存少數。它以彩色枡與新奇造型重振事業，並經營「枡工房枡屋」門市。" },
              p:[
                { jp:"木枡",
                  r:"Hinoki masu",
                  c:"masu",
                  m:["sashimono"],
                  sp:["hinoki"],
                  d:{
                    en:"Joined boxes of hinoki from Kiso and Tōnō; the standard sizes are 1 gō and 1 shō.",
                    ja:"木曽と東濃のヒノキを組んだ箱。標準は一合枡と一升枡。",
                    zh:"以木曾與東濃扁柏接合而成的方盒；標準尺寸為一合與一升。" } },
                { jp:"色枡・新しい枡",
                  r:"Coloured and novelty masu",
                  c:"masu",
                  sp:["hinoki"],
                  d:{
                    en:"Coloured, engraved and oddly shaped masu for gifts and events.",
                    ja:"贈り物や催しのための色つき、彫り入り、変わり形の枡。",
                    zh:"作為禮品與活動用的彩色、刻字與異形枡。" } }
              ] },
            { jp:"岐阜提灯協同組合",
              r:"Gifu Chōchin Cooperative",
              h:"岐阜提灯協同組合",
              hr:"Gifu Lantern Cooperative",
              muni:"gifu",
              note:{
                en:"The cooperative of the Gifu lantern makers, whose paper-and-bamboo lanterns took their present form by the mid-eighteenth century and were designated a national traditional craft on 5 April 1995. Its nine members are Ozeki, Asano Shōten, Hirade Shōten, Hayashi Isaburō Shōten, Matsui Hachigorō Shōten, Gifu-ken Kōsai, Kawasaki Shōten, Asami Shōten and Ieda Shikō.",
                ja:"岐阜提灯の製造元の協同組合。紙と竹の提灯は十八世紀なかばまでに今の姿となり、一九九五年四月五日に国の伝統的工芸品に指定された。組合員はオゼキ、浅野商店、平出商店、林伊三郎商店、松井八五郎商店、岐阜県光彩、川崎商店、浅見商店、家田紙工の九社である。",
                zh:"岐阜提燈製造商的協同組合。這種以紙與竹製成的燈籠在十八世紀中葉已成今日形制，1995 年 4 月 5 日獲指定為國家傳統工藝品。九家會員為 Ozeki、淺野商店、平出商店、林伊三郎商店、松井八五郎商店、岐阜縣光彩、川崎商店、淺見商店與家田紙工。" },
              p:[
                { jp:"岐阜提灯",
                  r:"Gifu lanterns",
                  c:"lantern",
                  m:["handmade"],
                  d:{
                    en:"Thin Mino paper over a spiral of fine bamboo strips, often painted with autumn grasses; the main use is the Bon lantern for the summer festival of the dead.",
                    ja:"細い竹ひごの螺旋に薄い美濃紙を張り、秋草などを描くことが多い。主な用途はお盆の盆提灯である。",
                    zh:"在細竹篾螺旋骨架上糊薄美濃紙，常繪秋草；主要用途是盂蘭盆節的盆燈籠。" } }
              ] },
            { jp:"オゼキ",
              r:"Ozeki",
              h:"株式会社オゼキ",
              hr:"Ozeki Co.",
              muni:"gifu",
              est:"1891",
              note:{
                en:"A Gifu lantern house founded in 1891. When the sculptor Isamu Noguchi visited Gifu in 1951 during the cormorant-fishing season, he began designing the paper lamps he called AKARI with the company, which has made them ever since — more than a hundred designs.",
                ja:"一八九一年創業の岐阜提灯の老舗。一九五一年、鵜飼の季節に岐阜を訪れた彫刻家イサム・ノグチは、この会社とともに「AKARI」と名づけた紙の灯りのデザインを始め、以来同社がつくり続けている。デザインは百を超える。",
                zh:"創立於 1891 年的岐阜提燈老店。1951 年雕塑家野口勇在鸕鶿捕魚季節造訪岐阜，開始與該公司合作設計他命名為「AKARI」的紙燈，此後一直由該公司製作，設計逾百款。" },
              p:[
                { jp:"盆提灯", r:"Bon lanterns", c:"lantern", m:["handmade"] },
                { jp:"AKARI",
                  r:"AKARI light sculptures",
                  c:"lantern",
                  yr:"1951",
                  d:{
                    en:"Noguchi's lamps of washi on bamboo ribs; the name means light, written with the characters for sun and moon.",
                    ja:"竹ひごに和紙を張ったノグチの灯り。名は「明かり」で、日と月の字を合わせる。",
                    zh:"野口勇以竹骨糊和紙的燈；名為「明」，由日與月兩字組成。" } }
              ] },
            { jp:"浅野商店",
              r:"Asano Shōten",
              h:"株式会社浅野商店",
              hr:"Asano Shōten Co.",
              muni:"gifu",
              note:{
                en:"A Gifu lantern maker and member of the lantern cooperative, making Bon and festival lanterns.",
                ja:"岐阜提灯の製造元で、提灯の組合の組合員。盆提灯や祭の提灯をつくる。",
                zh:"岐阜提燈製造商，提燈組合會員，製作盆燈籠與祭典燈籠。" },
              p:[{ jp:"岐阜提灯", r:"Gifu lanterns", c:"lantern", m:["handmade"] }] },
            { jp:"岐阜和傘協会",
              r:"Gifu Wagasa Association",
              muni:"gifu",
              note:{
                en:"The association of Gifu's umbrella makers. Umbrella making came to the Kanō district with a lord transferred from Akashi in 1639; at the peak around 1950 Gifu turned out well over ten million umbrellas a year, and the craft became a national traditional craft on 18 March 2022.",
                ja:"岐阜の和傘のつくり手の協会。傘づくりは一六三九年、明石から移った藩主とともに加納に来た。一九五〇年ごろの最盛期には年に一千万本をはるかに超える傘がつくられ、二〇二二年三月十八日に国の伝統的工芸品となった。",
                zh:"岐阜和傘製作者的協會。製傘業於 1639 年隨一位自明石轉封的藩主傳入加納；在 1950 年前後的全盛期，岐阜每年產傘遠超過一千萬把，2022 年 3 月 18 日獲指定為國家傳統工藝品。" },
              p:[
                { jp:"岐阜和傘",
                  r:"Gifu umbrellas",
                  c:"umbrella",
                  m:["handmade"],
                  sp:["madake", "egonoki"],
                  d:{
                    en:"Bamboo ribs, a hub (<em>rokuro</em>) of snowbell wood and oiled washi; up to a hundred sub-processes, divided among specialists.",
                    ja:"竹の骨、エゴノキの轆轤、油をひいた和紙。最大で百にのぼる工程を専門の職人が分けもつ。",
                    zh:"竹骨、野茉莉木製的傘轆轤與上油和紙；多達上百道工序，由專門工匠分工完成。" } }
              ] },
            { jp:"坂井田永吉本店",
              r:"Sakaida Eikichi Honten",
              h:"株式会社坂井田永吉本店",
              hr:"Sakaida Eikichi Honten Co.",
              muni:"gifu",
              note:{
                en:"A wagasa house of the Kanō district of Gifu city, the old castle town where the prefecture's umbrella trade grew up.",
                ja:"岐阜市加納の和傘の店。加納は県の傘づくりが育った城下町である。",
                zh:"岐阜市加納的和傘老店；加納是縣內製傘業發展起來的舊城下町。" },
              p:[{ jp:"加納の和傘", r:"Kanō umbrellas", c:"umbrella", m:["handmade"], sp:["madake"] }] },
            { jp:"マルト藤沢商店",
              r:"Maruto Fujisawa Shōten",
              muni:"gifu",
              note:{
                en:"A Gifu umbrella maker and dealer offering both oiled paper umbrellas for rain and parasols for sun, dance and display.",
                ja:"岐阜の和傘の製造・卸。雨のための番傘・蛇の目と、日傘、踊りの傘、飾りの傘をあつかう。",
                zh:"岐阜的和傘製造與批發商，兼營雨用油紙傘，以及遮陽、舞蹈與陳設用的傘。" },
              p:[{ jp:"和傘", r:"Umbrellas and parasols", c:"umbrella", m:["handmade"] }] },
            { jp:"岐阜市和傘振興会",
              r:"Gifu City Wagasa Promotion Society",
              muni:"gifu",
              note:{
                en:"A society of makers and supporters that reportedly launched a public fund-raising campaign in November 2019 to train successors, arguing that Japan's largest umbrella-producing area had a duty to keep the craft alive.",
                ja:"つくり手と支援者の会で、二〇一九年十一月、後継者を育てるために公募の資金集めを始めたとされる。日本一の産地には技を絶やさない務めがある、という訴えである。",
                zh:"由製作者與支持者組成的團體，據報導於 2019 年 11 月發起公開募資以培育傳人，理由是作為日本最大的和傘產地，有責任讓這門手藝延續下去。" },
              p:[{ jp:"後継者育成", r:"Training successors", c:"course" }] },
            { group:{ en:"Mino washi", ja:"美濃和紙", zh:"美濃和紙" }, jp:"紙漉き", id:"g-washi" },
            { jp:"美濃手すき和紙協同組合",
              r:"Mino Tesuki Washi Cooperative",
              h:"美濃手すき和紙協同組合",
              hr:"Mino Hand-made Washi Cooperative",
              muni:"mino",
              note:{
                en:"The cooperative of Mino's hand papermakers, based in Warabi on the Itadori River. Mino washi was designated a national traditional craft in May 1985; its purest form, Hon-Minoshi, was made an Important Intangible Cultural Property in 1969 and inscribed by UNESCO with two other papers in 2014. The members listed below are those whose workshop names could be confirmed; several others work under their own names.",
                ja:"美濃の手漉きの紙漉きの協同組合で、板取川沿いの蕨生に置かれる。美濃和紙は一九八五年五月に国の伝統的工芸品に指定され、その最も純粋な形である本美濃紙は一九六九年に重要無形文化財となり、二〇一四年にほかの二つの紙とともにユネスコの無形文化遺産に記載された。以下は工房の名が確かめられた組合員で、ほかにも個人の名で漉く人がいる。",
                zh:"美濃手漉紙匠的協同組合，設於板取川畔的蕨生。美濃和紙 1985 年 5 月獲指定為國家傳統工藝品；其最純粹的形式「本美濃紙」於 1969 年列為重要無形文化財，2014 年與另兩種紙一同列入聯合國教科文組織名錄。以下所列為能確認工坊名稱的會員；另有數人以個人名義漉紙。" },
              p:[
                { jp:"美濃和紙",
                  r:"Mino washi",
                  c:"washi",
                  m:["nagashi", "handmade"],
                  sp:["kozo"],
                  d:{
                    en:"Thin, even and strong; the best-known use is shōji paper.",
                    ja:"薄く、むらがなく、強い。最もよく知られた用途は障子紙。",
                    zh:"薄、勻、韌；最為人知的用途是障子紙。" } },
                { jp:"本美濃紙",
                  r:"Hon-Minoshi",
                  c:"washi",
                  m:["nagashi", "handmade"],
                  sp:["kozo"],
                  yr:"1969",
                  d:{
                    en:"Nasu kōzo only, white-bark process, natural bleaching and hand beating — the year is its designation.",
                    ja:"那須楮のみ、白皮、天日の漂白、手打ち。年は指定の年。",
                    zh:"僅用那須楮、白皮處理、天然漂白與手工打漿；年份為指定之年。" } }
              ] },
            { jp:"美濃手すき和紙 さらさ",
              r:"Sarasa",
              muni:"mino",
              note:{
                en:"A member workshop of the cooperative. Every Mino sheet begins with kōzo bark steamed off the branch, soaked and scraped until only the white inner bark remains.",
                ja:"組合の工房の一つ。美濃の紙はどれも、枝から蒸して剥いだ楮の皮を水にひたし、白い内皮だけになるまで削ることから始まる。",
                zh:"組合會員工坊之一。每張美濃紙都始於從枝條蒸剝下來的楮樹皮，經浸泡刮削，直到只剩白色內皮。" },
              p:[{ jp:"手すき和紙", r:"Hand-made washi", c:"washi", m:["nagashi", "handmade"], sp:["kozo"] }] },
            { jp:"石原英和工房",
              r:"Ishihara Hidekazu Kōbō",
              muni:"mino",
              note:{
                en:"A member workshop of the cooperative. The cleaned fibre is cooked in an alkaline bath, rinsed and picked over by hand for specks and knots — the slowest part of the work.",
                ja:"組合の工房の一つ。きれいにした繊維をアルカリの湯で煮、すすぎ、ちりや節を手で一つずつ取り除く——仕事のなかで最も手間のかかるところである。",
                zh:"組合會員工坊之一。清理後的纖維以鹼液煮過、沖洗，再以手工逐一挑除雜質與結節——這是整個工序中最費時的部分。" },
              p:[{ jp:"手すき和紙", r:"Hand-made washi", c:"washi", m:["nagashi", "handmade"], sp:["kozo"] }] },
            { jp:"市原智子工房",
              r:"Ichihara Tomoko Kōbō",
              muni:"mino",
              note:{
                en:"A member workshop of the cooperative. In Hon-Minoshi the fibre is bleached only by water and sunlight, and beaten by hand with wooden mallets rather than by machine.",
                ja:"組合の工房の一つ。本美濃紙では、繊維は水と日の光だけで白くし、機械ではなく木の槌で手で叩く。",
                zh:"組合會員工坊之一。本美濃紙的纖維只靠水與日光漂白，並以木槌手工捶打，而非機器。" },
              p:[{ jp:"手すき和紙", r:"Hand-made washi", c:"washi", m:["nagashi", "handmade"], sp:["kozo"] }] },
            { jp:"紙漉髙橋",
              r:"Kamisuki Takahashi",
              muni:"mino",
              note:{
                en:"A member workshop of the cooperative. Sheets are formed by <em>nagashi-zuki</em>: the maker rocks the screen so that the fibre-laden liquid flows back and forth and the fibres lock together in thin layers.",
                ja:"組合の工房の一つ。紙は流し漉きでつくる。簀桁をゆすって紙料液を前後に流し、繊維を薄い層に絡みあわせる。",
                zh:"組合會員工坊之一。紙以「流漉」成形：紙匠搖動紙簾，讓含纖維的紙漿液前後流動，使纖維以薄層交織。" },
              p:[{ jp:"手すき和紙", r:"Hand-made washi", c:"washi", m:["nagashi", "handmade"], sp:["kozo"] }] },
            { jp:"倉田和紙工房",
              r:"Kurata Washi Kōbō",
              muni:"mino",
              note:{
                en:"A member workshop of the cooperative. What lets the pulp flow slowly enough for nagashi-zuki is <em>neri</em>, a mucilage from the root of tororo-aoi, a kind of hibiscus.",
                ja:"組合の工房の一つ。流し漉きができるほど紙料をゆっくり流すのは、トロロアオイの根からとる粘液「ねり」である。",
                zh:"組合會員工坊之一。讓紙漿流得夠慢、能以流漉成形的，是取自黃蜀葵根部的黏液「ねり」。" },
              p:[{ jp:"手すき和紙", r:"Hand-made washi", c:"washi", m:["nagashi", "handmade"], sp:["kozo"] }] },
            { jp:"保木工房",
              r:"Hoki Kōbō",
              muni:"mino",
              note:{
                en:"A member workshop of the cooperative. The screen (<em>su</em>) is of split bamboo strips laced with silk, and its fineness is part of what gives Mino paper its famously even texture.",
                ja:"組合の工房の一つ。簀は割った竹ひごを絹糸で編んだもので、その細かさが、よく知られた美濃紙のむらのない地合いを生む一因である。",
                zh:"組合會員工坊之一。紙簾以劈細的竹篾用絲線編成，其細密正是美濃紙質地均勻著稱的原因之一。" },
              p:[{ jp:"手すき和紙", r:"Hand-made washi", c:"washi", m:["nagashi", "handmade"], sp:["kozo"] }] },
            { jp:"みの紙工房F",
              r:"Mino Kami Kōbō F",
              muni:"mino",
              note:{
                en:"A member workshop of the cooperative. Mino's claim to antiquity is documentary: among the oldest papers in the Shōsōin repository in Nara is a set of household registers from Mino province dated 702.",
                ja:"組合の工房の一つ。美濃の古さは文書に裏づけられている。奈良の正倉院に残る最古の紙の一つが、七〇二年の美濃国の戸籍である。",
                zh:"組合會員工坊之一。美濃紙的古老有文書為證：奈良正倉院所藏最古老的紙之一，是 702 年美濃國的戶籍。" },
              p:[{ jp:"手すき和紙", r:"Hand-made washi", c:"washi", m:["nagashi", "handmade"], sp:["kozo"] }] },
            { jp:"美濃創芸",
              r:"Mino Sōgei",
              h:"美濃創芸有限会社",
              hr:"Mino Sōgei Ltd.",
              muni:"mino",
              note:{
                en:"A member of the cooperative organised as a small company. Hand-made Mino paper went into the shōji and screens of the Kyoto State Guest House, completed in 2005.",
                ja:"小さな会社として営む組合員。手漉きの美濃紙は、二〇〇五年に完成した京都迎賓館の障子や襖にも使われた。",
                zh:"以小公司形式經營的組合會員。手漉美濃紙亦用於 2005 年落成的京都迎賓館的障子與隔扇。" },
              p:[{ jp:"手すき和紙・和紙製品", r:"Washi and paper goods", c:"washi", m:["nagashi", "handmade"], sp:["kozo"] }] },
            { jp:"Warabi Paper Company",
              r:"Warabi Paper Company",
              muni:"mino",
              note:{
                en:"A member workshop named after Warabi, the papermaking village on the Itadori River where the cooperative itself is based.",
                ja:"組合がある板取川沿いの紙の里、蕨生の名をとった組合員の工房。",
                zh:"以蕨生命名的會員工坊——蕨生是板取川畔的造紙村落，也是組合所在地。" },
              p:[{ jp:"手すき和紙", r:"Hand-made washi", c:"washi", m:["nagashi", "handmade"], sp:["kozo"] }] },
            { group:{ en:"Guitars and other instruments", ja:"ギターとほかの楽器", zh:"吉他與其他樂器" }, jp:"楽器", id:"g-sound" },
            { jp:"ヤイリギター",
              r:"K. Yairi",
              h:"株式会社ヤイリギター",
              hr:"Yairi Guitar Co.",
              muni:"kani",
              est:"1935",
              note:{
                en:"Founded in Nagoya in 1935 by Yairi Giichi, who had worked at Suzuki Violin; the workshop fled the air raids to Kani in 1945 and took its present name in 1965. Under Yairi Kazuo, who studied guitar making in the United States from 1962, it became known for seasoning its wood naturally for years and, from 1972, for a lifetime warranty to the original owner.",
                ja:"鈴木バイオリンで働いた矢入儀市が一九三五年に名古屋で創業した。工房は一九四五年に空襲を逃れて可児に移り、一九六五年に今の社名となった。一九六二年からアメリカでギターづくりを学んだ矢入一男のもとで、何年も材を天然乾燥させること、そして一九七二年からは最初の持ち主への生涯保証で知られるようになった。",
                zh:"1935 年由曾任職鈴木小提琴的矢入儀市在名古屋創立；1945 年為躲避空襲遷往可兒，1965 年改用現名。在 1962 年起赴美學習吉他製作的矢入一男主持下，以木料長年自然乾燥聞名，並自 1972 年起提供原購買者終身保固。" },
              p:[
                { jp:"アコースティックギター",
                  r:"Acoustic guitars",
                  c:"acoustic",
                  m:["natural", "handmade", "solidtop"],
                  sp:["spruce", "rosewood", "mahogany"],
                  d:{
                    en:"About thirty craftspeople; the finished guitars are played music before they leave.",
                    ja:"職人はおよそ三十人。仕上がったギターには出荷の前に音楽を聴かせる。",
                    zh:"約 30 名工匠；完成的吉他出廠前會先「聽」音樂。" } },
                { jp:"一五一会",
                  r:"Ichigoichie",
                  c:"instrument",
                  yr:"2002",
                  d:{
                    en:"A four-string instrument developed with the Okinawan band BEGIN.",
                    ja:"沖縄のバンドBEGINとともに開発した四弦の楽器。",
                    zh:"與沖繩樂團 BEGIN 共同開發的四弦樂器。" } },
                { jp:"学校用木琴",
                  r:"School xylophones",
                  c:"instrument",
                  yr:"1955",
                  d:{
                    en:"Made in the lean post-war decade before guitars took over.",
                    ja:"ギターが主役になる前、戦後の乏しい十年につくった。",
                    zh:"在吉他成為主力之前、戰後物資匱乏的十年間製作。" } }
              ] },
            { jp:"高峰楽器製作所",
              r:"Takamine",
              h:"株式会社高峰楽器製作所",
              hr:"Takamine Gakki Seisakusho Co.",
              muni:"nakatsugawa",
              est:"1959",
              note:{
                en:"Founded in December 1959 in Sakashita, now part of Nakatsugawa, by a maker displaced by the Ise Bay Typhoon, in a village already full of woodworkers; renamed in 1962 after nearby Mount Takamine. It is best known for acoustic-electric guitars, having developed its own under-saddle pickup.",
                ja:"伊勢湾台風で家を失ったつくり手が、一九五九年十二月、木工職人の多い坂下（いまは中津川市）で創業し、一九六二年に近くの高峰山にちなんで改称した。独自のサドル下ピックアップを開発し、エレクトリック・アコースティックギターで最もよく知られる。",
                zh:"1959 年 12 月，一位因伊勢灣颱風失去家園的製作者，在木工匠雲集的坂下（今屬中津川市）創立；1962 年以附近的高峰山改名。它自行開發琴橋下拾音器，以電木吉他最為人所知。" },
              p:[
                { jp:"パラセティック・ピックアップ",
                  r:"Palathetic pickup",
                  c:"pickup",
                  yr:"1978",
                  d:{
                    en:"Six individual piezo elements under the saddle.",
                    ja:"サドルの下に六つの独立したピエゾ素子。",
                    zh:"琴橋下六個獨立的壓電元件。" } },
                { jp:"PT-007S",
                  r:"PT-007S",
                  c:"acoustic",
                  m:["electro"],
                  yr:"1979",
                  d:{ en:"The company's first acoustic-electric model.", ja:"同社初のエレアコ。", zh:"該公司第一款電木吉他。" } },
                { jp:"LTDシリーズ",
                  r:"Limited series",
                  c:"acoustic",
                  m:["electro"],
                  yr:"1987",
                  d:{ en:"A new limited edition every year since.", ja:"以来毎年、新しい限定品。", zh:"此後每年推出新的限量款。" } }
              ] },
            { jp:"恵那楽器",
              r:"Ena Gakki",
              h:"恵那楽器株式会社",
              hr:"Ena Gakki Co.",
              muni:"ena",
              est:"1954",
              note:{
                en:"Grew out of the works that Suzuki Violin moved to Ena in 1936; when the head office returned to Nagoya after the war, the Ena works became a separate company in 1954. It makes violins, cellos, double basses and mandolins; in 2018 about twenty-five people worked there in a division of labour.",
                ja:"鈴木バイオリンが一九三六年に恵那に移した工場から生まれた。戦後に本社が名古屋に戻ると、恵那の工場は一九五四年に別会社となった。バイオリン、チェロ、コントラバス、マンドリンをつくる。二〇一八年には約二十五人が分業で働いていた。",
                zh:"源自鈴木小提琴於 1936 年遷至惠那的工廠；戰後總公司遷回名古屋，惠那工廠於 1954 年獨立為另一家公司。製作小提琴、大提琴、低音提琴與曼陀林；2018 年約有 25 人以分工方式在此工作。" },
              p:[
                { jp:"バイオリン", r:"Violins", c:"instrument", sp:["spruce", "maple"] },
                { jp:"チェロ・コントラバス", r:"Cellos and double basses", c:"instrument", sp:["spruce", "maple"] },
                { jp:"マンドリン", r:"Mandolins", c:"instrument" }
              ] },
            { jp:"鈴木バイオリン製造",
              r:"Suzuki Violin",
              h:"鈴木バイオリン製造株式会社",
              hr:"Suzuki Violin Co.",
              muni:"nagoya",
              est:"1887",
              note:{
                en:"Japan's pioneer violin maker, which dates itself from Suzuki Masakichi's first violin of 1887. Yairi Giichi worked here before founding his own workshop, and its wartime move to Ena planted instrument making in eastern Gifu.",
                ja:"日本の草分けのバイオリンの製造元で、鈴木政吉の最初のバイオリン（一八八七年）を起点とする。矢入儀市は独立する前にここで働き、戦時の恵那への移転は、東濃に楽器づくりを根づかせた。",
                zh:"日本小提琴製造的先驅，以鈴木政吉 1887 年完成的第一把小提琴為起點。矢入儀市自立門戶前曾在此工作，而它戰時遷往惠那，也把樂器製作帶進了東濃。" },
              p:[{ jp:"バイオリン", r:"Violins", c:"instrument", sp:["spruce", "maple"] }] },
            { jp:"左波工房",
              r:"ROZEO Guitars",
              muni:"gujo",
              note:{
                en:"A one-person workshop in Gujō Hachiman that designs, carves, assembles and finishes archtop guitars entirely by hand, and also makes wooden landing nets for the town's ayu and amago anglers.",
                ja:"郡上八幡の一人の工房で、アーチトップギターの設計、彫り、組み立て、仕上げまですべてを手で行い、町のアユやアマゴの釣り人のための木の玉網もつくる。",
                zh:"郡上八幡的單人工坊，全手工完成拱面吉他的設計、雕刻、組裝與塗裝，也為鎮上釣香魚與甘子的釣客製作木製抄網。" },
              p:[
                { jp:"アーチトップギター", r:"Archtop guitars", c:"acoustic", m:["carved", "handmade"] },
                { jp:"玉網", r:"Landing nets", c:"nd", m:["handmade"] }
              ] },
            { jp:"Kazu Guitar Village",
              r:"Kazu Guitar Village",
              muni:"yamagata",
              note:{
                en:"A guitar workshop in Aido, Yamagata, where customers can design their own instrument; it builds custom and semi-order guitars, runs classes and repairs.",
                ja:"山県市相戸のギター工房で、客が自分の楽器を設計できる。注文とセミオーダーのギターをつくり、教室を開き、修理もする。",
                zh:"位於山縣市相戶的吉他工坊，顧客可自行設計樂器；製作訂製與半訂製吉他，並開設課程、承接修理。" },
              p:[
                { jp:"オーダーギター", r:"Custom guitars", c:"acoustic", m:["custom", "handmade"] },
                { jp:"製作教室", r:"Building classes", c:"course" },
                { jp:"修理", r:"Repair", c:"repair" }
              ] },
            { jp:"Guitar & Bass Workshop Loveless",
              r:"Loveless",
              muni:"gifu",
              note:{
                en:"A Gifu city workshop building electric guitars and basses.",
                ja:"岐阜市の工房で、エレキギターとベースをつくる。",
                zh:"岐阜市的工坊，製作電吉他與電貝斯。" },
              p:[{ jp:"エレキギター・ベース", r:"Electric guitars and basses", c:"electric", m:["handmade"] }] },
            { jp:"Rossi Guitars",
              r:"Rossi Guitars",
              muni:"gifu",
              note:{
                en:"A Gifu city maker of acoustic and electric guitars that also winds its own pickups.",
                ja:"岐阜市のアコースティックとエレキのギターのつくり手で、ピックアップも自ら巻く。",
                zh:"岐阜市的木吉他與電吉他製作者，也自行繞製拾音器。" },
              p:[
                { jp:"アコースティックギター", r:"Acoustic guitars", c:"acoustic", m:["handmade"] },
                { jp:"エレキギター", r:"Electric guitars", c:"electric", m:["handmade"] },
                { jp:"ピックアップ", r:"Pickups", c:"pickup" }
              ] },
            { jp:"Mary Guitars",
              r:"Mary Guitars",
              muni:"ogaki",
              note:{
                en:"An Ōgaki workshop building and repairing electric guitars and basses.",
                ja:"大垣市の工房で、エレキギターとベースをつくり、直す。",
                zh:"大垣市的工坊，製作並修理電吉他與電貝斯。" },
              p:[
                { jp:"エレキギター・ベース", r:"Electric guitars and basses", c:"electric", m:["handmade"] },
                { jp:"修理", r:"Repair", c:"repair" }
              ] },
            { jp:"Leaf Instruments",
              r:"Leaf Instruments",
              muni:"minokamo",
              note:{
                en:"An instrument workshop in Minokamo listed in a national directory of guitar building and repair shops.",
                ja:"全国のギター製作・修理の工房の案内に載る、美濃加茂市の楽器工房。",
                zh:"登錄於全國吉他製作與修理工坊名錄的美濃加茂市樂器工坊。" },
              p:[{ jp:"楽器製作", r:"Instrument making", c:"instrument", m:["handmade"] }] },
            { jp:"WoodyBlues",
              r:"WoodyBlues",
              muni:"mino",
              note:{
                en:"A Mino workshop that specialises in repairing acoustic guitars — neck resets, bridges, cracks and set-ups.",
                ja:"美濃市の工房で、アコースティックギターの修理——ネックの仕込み直し、ブリッジ、割れ、調整——を専らとする。",
                zh:"美濃市的工坊，專修木吉他——琴頸重置、琴橋、裂縫與調整。" },
              p:[{ jp:"アコースティックギター修理", r:"Acoustic guitar repair", c:"repair" }] },
            { jp:"9notes",
              r:"9notes",
              muni:"ena",
              note:{
                en:"A repair workshop in Ena for acoustic, electric and classical guitars and ukuleles.",
                ja:"恵那市の修理の工房で、アコースティック、エレキ、クラシックのギターとウクレレを直す。",
                zh:"惠那市的修理工坊，承修木吉他、電吉他、古典吉他與烏克麗麗。" },
              p:[{ jp:"ギター修理", r:"Guitar repair", c:"repair" }, { jp:"ウクレレ修理", r:"Ukulele repair", c:"ukulele" }] },
            { jp:"Resonance Guitars",
              r:"Resonance Guitars",
              muni:"anpachi",
              note:{
                en:"A repair workshop in Anpachi, on the Nōbi plain south of Ōgaki, working on acoustic and electric guitars.",
                ja:"大垣の南、濃尾平野の安八町の修理の工房で、アコースティックとエレキのギターを直す。",
                zh:"位於大垣以南濃尾平原上安八町的修理工坊，承修木吉他與電吉他。" },
              p:[{ jp:"ギター修理", r:"Guitar repair", c:"repair" }] },
            { jp:"Good Strings",
              r:"Good Strings",
              muni:"gifu",
              note:{
                en:"A Gifu city repair shop for acoustic and electric guitars.",
                ja:"岐阜市の、アコースティックとエレキのギターの修理の店。",
                zh:"岐阜市的木吉他與電吉他修理店。" },
              p:[{ jp:"ギター修理", r:"Guitar repair", c:"repair" }] }
          ] }
      ] },
    { t:"section",
      id:"forest",
      title:{ en:"Forest, timber and building", ja:"森・木材・建築", zh:"森林、木材與營造" },
      jp:"川上から川下へ",
      body:[
        { t:"p",
          text:{
            en:"The second half of the directory follows the wood from the stump. Forest owners' cooperatives plan and carry out the work in private forests on behalf of their members — planting, weeding, thinning, road building — and send the logs to market. The prefectural federation runs three log markets; other cooperatives and companies run their own, and the largest mills now buy directly. Sawmills, drying plants, a glulam cooperative and a plywood mill turn logs into building material, and builders turn that into houses, halls and shrines. What will not sell as timber goes, increasingly, to be burned for power. In November 2007 eleven of the cooperatives in the east formed a council to promote their hinoki under the single name of Tōnō hinoki; that name recurs below.",
            ja:"名鑑の後半は、切り株から木を追う。森林組合は組合員に代わって私有林の仕事——植え付け、下刈り、間伐、道づくり——を計画して行い、丸太を市場に送る。県の連合会は三つの原木市場を営み、ほかの組合や会社も自前の市場をもち、最も大きな工場はいまや直接に買う。製材所、乾燥施設、集成材の組合、合板の工場が丸太を建築の材料に変え、工務店がそれを家や建物や社寺に変える。材として売れないものは、ますます発電のために燃やされる。二〇〇七年十一月、東部の十一の組合が、ヒノキを東濃ひのきという一つの名で売るための協議会をつくった。その名は以下にくり返し現れる。",
            zh:"名鑑的後半，從樹樁開始追蹤木材。森林組合代替會員規劃並執行私有林的作業——植栽、除草、疏伐、開設林道——再把原木送往市場。縣聯合會經營三座原木市場；其他組合與公司也有自己的市場，而最大的工廠如今直接採購。製材廠、乾燥設施、一個集成材組合與一座合板廠，把原木變成建材；營造商再把建材變成住宅、廳堂與寺社。無法作為木材出售的部分，則愈來愈多被燒來發電。2007 年 11 月，東部的十一個組合成立協議會，以「東濃扁柏」這個統一名稱推廣其扁柏；這個名稱在下文一再出現。" } },
        { t:"makers",
          items:[
            { group:{ en:"Forest owners' cooperatives", ja:"森林組合", zh:"森林組合" }, jp:"森林組合", id:"g-coops" },
            { jp:"岐阜県森林組合連合会",
              r:"Gifu Forest Cooperatives Federation",
              hr:"Gifu Prefectural Federation of Forest Owners' Cooperatives",
              h:"岐阜県森林組合連合会",
              muni:"gifu",
              note:{
                en:"The federation of the prefecture's nineteen forest cooperatives, based in Rokujō-Kōtō, Gifu city. It runs the three regional log markets, each auctioning monthly — the Gifu market's 1,907th sale was set for 13 October 2026, the Tōnō market's 1,847th for 8 October and the Hida market's 1,513th for 7 October — and a chip centre supplying paper mills and biomass power stations.",
                ja:"県内十九の森林組合の連合会で、岐阜市六条江東に置かれる。三つの地域の原木市場を営み、どれも月ごとに競りを開く。岐阜の市場の第千九百七回は二〇二六年十月十三日、東濃の第千八百四十七回は十月八日、飛騨の第千五百十三回は十月七日に予定された。製紙とバイオマス発電のためのチップセンターももつ。",
                zh:"縣內十九個森林組合的聯合會，設於岐阜市六條江東。它經營三座地區原木市場，每月各舉行拍賣——岐阜市場第 1,907 次拍賣排定於 2026 年 10 月 13 日，東濃市場第 1,847 次於 10 月 8 日，飛驒市場第 1,513 次於 10 月 7 日——另有一座供應造紙廠與生質能發電廠的木片中心。" },
              p:[
                { jp:"岐阜林産物共販所",
                  r:"Gifu market",
                  c:"market",
                  sp:["sugi", "hinoki"],
                  d:{
                    en:"Sugi and hinoki from the cooperatives of the Gifu and Chūnō areas.",
                    ja:"岐阜・中濃の組合のスギとヒノキ。",
                    zh:"岐阜與中濃地區各組合的柳杉與扁柏。" } },
                { jp:"東濃林産物共販所",
                  r:"Tōnō market",
                  c:"market",
                  sp:["tonohinoki"],
                  d:{
                    en:"Large-diameter and pruned hinoki; hosts the annual Gifu quality-timber show.",
                    ja:"大径材と枝打ち材のヒノキ。毎年のぎふ優良材展の会場。",
                    zh:"大徑木與修枝扁柏；每年舉辦岐阜優良材展。" } },
                { jp:"飛騨林産物共販所",
                  r:"Hida market",
                  c:"market",
                  sp:["broadleaf", "kuri", "nara", "sakura"],
                  d:{
                    en:"Conifers, and a broadleaf festival sale of chestnut, oak, cherry and other hardwoods.",
                    ja:"針葉樹と、クリ、ナラ、サクラなどを集めた広葉樹祭。",
                    zh:"針葉樹，以及集合栗、橡、櫻等闊葉材的闊葉樹祭。" } },
                { jp:"チップセンター",
                  r:"Chip centre",
                  c:"fuel",
                  d:{ en:"Chips for paper and for wood-fired power.", ja:"製紙用と木質バイオマス発電用のチップ。", zh:"造紙與木質生質能發電用的木片。" } }
              ] },
            { jp:"岐阜中央森林組合",
              r:"Gifu Chūō Forest Cooperative",
              muni:"yamagata",
              note:{
                en:"The cooperative for the central Gifu area, based in Yamagata, where the Mino hills rise north of the Gifu plain. Like every cooperative below, it plans thinning, planting and forest roads for owners too small or too distant to manage their land themselves, and sells the logs.",
                ja:"岐阜の中央部の組合で、岐阜の平野の北に美濃の山々が立ちあがる山県市に置かれる。以下のどの組合とも同じく、自分で山を管理するには小さすぎる、あるいは遠すぎる所有者のために、間伐、植林、作業道を計画し、丸太を売る。",
                zh:"岐阜中部的組合，設於美濃群山自岐阜平原北側隆起處的山縣市。與下列各組合一樣，它為規模太小或住得太遠、無法自行管理山林的所有者規劃疏伐、造林與作業道，並出售原木。" },
              p:[
                { jp:"森林整備", r:"Forest management", c:"forestry", sp:["sugi", "hinoki"] },
                { jp:"丸太", r:"Logs", c:"logs" }
              ] },
            { jp:"本巣市森林組合",
              r:"Motosu Forest Cooperative",
              muni:"motosu",
              note:{
                en:"Based in Neo, the long valley of the upper Neo River in Motosu, whose forests the city describes as certified in 2015 as a forest-therapy base and whose valley holds the Usuzumi cherry, a natural monument of about 1,500 years.",
                ja:"本巣市の根尾川上流の長い谷、根尾に置かれる。市の説明ではその森は二〇一五年に森林セラピー基地に認定され、谷には樹齢約千五百年の天然記念物、淡墨桜がある。",
                zh:"設於本巢市根尾川上游的狹長谷地根尾；據市府說明，當地森林於 2015 年獲認證為森林療癒基地，谷中還有樹齡約 1,500 年的天然紀念物「淡墨櫻」。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["sugi", "hinoki"] }] },
            { jp:"西南濃森林組合",
              r:"Seinannō Forest Cooperative",
              muni:"ogaki",
              note:{
                en:"The cooperative for the south-western Mino hills, based in Kamiishizu, the mountain district of Ōgaki on the borders of Mie and Shiga.",
                ja:"美濃の南西の山々の組合で、三重・滋賀の県境に接する大垣市の山間部、上石津に置かれる。",
                zh:"美濃西南群山的組合，設於大垣市與三重、滋賀兩縣交界的山區上石津。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["sugi", "hinoki"] }] },
            { jp:"揖斐郡森林組合",
              r:"Ibi District Forest Cooperative",
              muni:"ibigawa",
              note:{
                en:"Based in Ibigawa, the vast mountain town at the head of the Ibi River. Oak wilt, the beetle-borne disease that has since killed oaks across the prefecture, was first recorded in Gifu here, in the former village of Sakauchi, in 1996.",
                ja:"揖斐川の源の広大な山の町、揖斐川町に置かれる。その後県じゅうのナラを枯らした、甲虫が運ぶナラ枯れは、一九九六年に県内で初めてここ、旧坂内村で記録された。",
                zh:"設於揖斐川源頭廣闊的山鎮揖斐川町。由甲蟲傳播、其後在全縣造成橡樹枯死的「楢枯病」，1996 年在縣內首度記錄於此地的舊坂內村。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["sugi", "hinoki", "broadleaf"] }] },
            { jp:"可茂森林組合",
              r:"Kamo Forest Cooperative",
              muni:"hichiso",
              note:{
                en:"The cooperative for the Kani and Kamo districts, based in Hichisō on the Hida River — the corridor down which, in the days of log driving, timber from the upper valleys floated towards the Nōbi plain.",
                ja:"可児と加茂の地域の組合で、飛騨川沿いの七宗町に置かれる。川狩りの時代、上流の谷の木が濃尾平野へ流れ下った道筋である。",
                zh:"可兒與加茂地區的組合，設於飛驒川畔的七宗町——在放流運材的年代，上游山谷的木材就沿這條走廊漂向濃尾平原。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["hinoki", "sugi"] }] },
            { jp:"八百津町森林組合",
              r:"Yaotsu Forest Cooperative",
              muni:"yaotsu",
              note:{
                en:"The cooperative of Yaotsu, the town where, at the Nishikori log station, the Owari domain's timber from the Kiso valley was caught and bound into rafts for the last stretch to Nagoya.",
                ja:"八百津町の組合。八百津の錦織の綱場では、尾張藩が木曽谷から流した木を受けとめ、名古屋までの最後の区間のために筏に組んだ。",
                zh:"八百津町的組合。在八百津的錦織綱場，尾張藩從木曾谷放流而下的木材被攔下，編成木筏，走完通往名古屋的最後一段。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["hinoki", "sugi"] }] },
            { jp:"白川町森林組合",
              r:"Shirakawa Town Forest Cooperative",
              muni:"shirakawacho",
              note:{
                en:"The cooperative of Shirakawa town in Kamo district, one of the hinoki districts that now sell under the Tōnō hinoki name; the town also holds a cooperative hinoki log market.",
                ja:"加茂郡白川町の組合。いまは東濃ひのきの名で売るヒノキの産地の一つで、町にはヒノキの協同組合の原木市場もある。",
                zh:"加茂郡白川町的組合；白川町是如今以「東濃扁柏」之名販售的扁柏產地之一，鎮上還有一座扁柏協同組合原木市場。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["tonohinoki", "hinoki"] }] },
            { jp:"東白川村森林組合",
              r:"Higashi-Shirakawa Forest Cooperative",
              muni:"higashishirakawa",
              note:{
                en:"The cooperative of Higashi-Shirakawa, a mountain village of hinoki forests that is also home to two of the prefecture's long-length sawmills.",
                ja:"ヒノキの森の山村、東白川村の組合。村には県内の長尺材を挽ける製材所が二つある。",
                zh:"扁柏森林山村東白川村的組合；村內還有兩家可鋸製長尺材的製材廠。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["tonohinoki", "hinoki"] }] },
            { jp:"中濃森林組合",
              r:"Chūnō Forest Cooperative",
              muni:"mino",
              note:{
                en:"The cooperative for central Mino, based in Mino city on the Nagara River; the sugi of the Nagara basin, even-grained with thick latewood, is sold as Nagara sugi.",
                ja:"中濃の組合で、長良川沿いの美濃市に置かれる。長良川流域のスギは、木目がそろい晩材が厚く、長良杉として売られる。",
                zh:"中濃地區的組合，設於長良川畔的美濃市；長良川流域的柳杉紋理均勻、晚材厚實，以「長良杉」之名銷售。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["nagarasugi", "hinoki"] }] },
            { jp:"郡上森林組合",
              r:"Gujō Forest Cooperative",
              muni:"gujo",
              note:{
                en:"Based in Hachiman, the cooperative for Gujō, the upper Nagara basin and the heart of Nagara sugi, a sugi whose mix of red and pale heartwood is called <em>genpei</em>, after the red and white banners of two medieval clans.",
                ja:"八幡に置かれる郡上の組合。長良川上流は長良杉の中心で、赤と白の心材が混じるさまは、中世の二つの氏族の紅白の旗にちなんで「源平」と呼ばれる。",
                zh:"設於八幡的郡上組合。長良川上游是長良杉的核心產地；這種柳杉心材紅白相間，被稱為「源平」，典出中世兩大氏族的紅白旗幟。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["nagarasugi", "hinoki"] }] },
            { jp:"陶都森林組合",
              r:"Tōto Forest Cooperative",
              muni:"mizunami",
              note:{
                en:"Based in Mizunami. Its name means “pottery capital”, a reference to the Mino-ware country in which it lies, where the hill forests once supplied the kilns with fuel.",
                ja:"瑞浪市に置かれる。名の「陶都」は、この組合が位置する美濃焼の産地を指す。そこでは山の森がかつて窯に燃料を送った。",
                zh:"設於瑞浪市。其名「陶都」意為陶瓷之都，指的是它所在的美濃燒產地——那裡的山林過去為窯爐提供燃料。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["hinoki", "sugi"] }] },
            { jp:"中津川市森林組合",
              r:"Nakatsugawa Forest Cooperative",
              muni:"nakatsugawa",
              note:{
                en:"The cooperative for the central part of Nakatsugawa, the city that since the mergers of 2005 has stretched from the Nakasendō post towns up into the Ura-Kiso hinoki forests.",
                ja:"中津川市の中心部の組合。中津川市は二〇〇五年の合併以来、中山道の宿場から裏木曽のヒノキの森まで広がる。",
                zh:"中津川市中部地區的組合；自 2005 年合併以來，中津川市從中山道的宿場一路延伸到裏木曾的扁柏森林。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["tonohinoki", "hinoki"] }] },
            { jp:"加子母森林組合",
              r:"Kashimo Forest Cooperative",
              muni:"nakatsugawa",
              note:{
                en:"The cooperative of Kashimo, the Ura-Kiso village at the heart of the Tōnō hinoki country, whose timber went into the Shōwa restoration of Himeji Castle — a great hinoki felled here in 1959 for its central pillar — and, by local accounts, into the rebuilt Honmaru Palace of Nagoya Castle. By local accounts it also holds its own log sales, and it runs a woodworking centre that turns hinoki into furniture, toys, school desks and distilled oil.",
                ja:"東濃ひのきの里の中心、裏木曽の加子母の組合。その木は姫路城の昭和の大修理に使われ（一九五九年にここで伐られた檜の巨木が心柱となった）、地元の説明では再建された名古屋城本丸御殿にも使われた。地元の説明では自前の原木の市も開き、ヒノキから家具、おもちゃ、学校の机、蒸留した精油をつくる木工の施設も営む。",
                zh:"東濃扁柏之鄉核心、裏木曾加子母的組合；當地木材曾用於姬路城昭和大修（1959 年在此伐下的扁柏巨木成為其心柱），據地方說法也用於重建的名古屋城本丸御殿。據地方說法它也自辦原木拍賣，並經營把扁柏做成家具、玩具、學校課桌與蒸餾精油的木工中心。" },
              p:[
                { jp:"木材市場", r:"Log market", c:"market", sp:["tonohinoki"] },
                { jp:"モクモクセンター",
                  r:"Woodworking centre",
                  c:"furniture",
                  sp:["hinoki"],
                  d:{
                    en:"Furniture, toys, kitchen and bath goods, school desks.",
                    ja:"家具、おもちゃ、台所と風呂の道具、学校の机。",
                    zh:"家具、玩具、廚房與浴室用品、學校課桌。" } },
                { jp:"ヒノキ精油",
                  r:"Hinoki oil",
                  c:"oil",
                  sp:["hinoki"],
                  d:{ en:"Steam-distilled from offcuts.", ja:"端材から水蒸気蒸留でとる。", zh:"以邊料水蒸氣蒸餾而得。" } }
              ] },
            { jp:"付知町森林組合",
              r:"Tsukechi Forest Cooperative",
              muni:"nakatsugawa",
              note:{
                en:"The cooperative of Tsukechi, one of the three Ura-Kiso villages — with Kashimo and Kawaue — where the Owari domain forbade cutting to protect its hinoki. It was also the home village of the woodworker Hayakawa Kennosuke.",
                ja:"付知の組合。付知は、加子母、川上とともに、尾張藩がヒノキを守るため伐採を禁じた裏木曽の三つの村の一つである。木工家早川謙之輔の故郷でもある。",
                zh:"付知的組合。付知與加子母、川上同為尾張藩為保護扁柏而禁伐的三個裏木曾村落之一，也是木工家早川謙之輔的故鄉。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["tonohinoki", "hinoki"] }] },
            { jp:"恵那市森林組合",
              r:"Ena Forest Cooperative",
              muni:"ena",
              note:{
                en:"The forest owners' cooperative of Ena city, based in the Tōnō hinoki country on the middle reaches of the Kiso River.",
                ja:"恵那市の森林組合で、木曽川中流の東濃ひのきの産地に置かれる。",
                zh:"惠那市的森林組合，設於木曾川中游的東濃扁柏產地。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["tonohinoki", "hinoki"] }] },
            { jp:"恵南森林組合",
              r:"Enan Forest Cooperative",
              muni:"ena",
              note:{
                en:"Based in Kamiyahagi, the cooperative of southern Ena (the old Ena-gun south, hence “Enan”) along the upper Yahagi River on the Aichi border.",
                ja:"上矢作町に置かれる、恵那の南部（旧恵那郡南部、ゆえに「恵南」）の組合。愛知県境の矢作川上流に沿う。",
                zh:"設於上矢作町，是惠那南部（舊惠那郡南部，故稱「惠南」）的組合，沿愛知縣界的矢作川上游分布。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["hinoki", "sugi"] }] },
            { jp:"飛騨高山森林組合",
              r:"Hida-Takayama Forest Cooperative",
              muni:"takayama",
              note:{
                en:"The cooperative of Takayama, Japan's largest municipality by area, more than nine-tenths forest. It runs a high-temperature steam kiln for timber up to 9.5 metres at its Shinmiya works, and in 2012 sold its Kamitakara sawmill to the furniture maker Hida Sangyō.",
                ja:"面積で日本最大の市、高山市の組合で、市の九割以上が森である。新宮工場で長さ九・五メートルまでの材を扱う高温蒸気の乾燥機を運転し、二〇一二年に上宝の製材所を家具の飛騨産業に譲った。",
                zh:"高山市的組合；高山是日本面積最大的市，九成以上為森林。它在新宮工廠運轉可處理長達 9.5 公尺木材的高溫蒸氣乾燥窯，並於 2012 年將上寶的製材廠讓予家具廠飛驒產業。" },
              p:[
                { jp:"森林整備", r:"Forest management", c:"forestry", sp:["sugi", "hinoki", "karamatsu", "broadleaf"] },
                { jp:"新宮工場",
                  r:"Shinmiya drying works",
                  c:"lumber",
                  m:["kiln"],
                  d:{
                    en:"High-temperature steam drying, lengths to 9.5 m.",
                    ja:"高温蒸気乾燥、長さ九・五メートルまで。",
                    zh:"高溫蒸氣乾燥，長度可達 9.5 公尺。" } }
              ] },
            { jp:"飛騨市森林組合",
              r:"Hida City Forest Cooperative",
              muni:"hida",
              note:{
                en:"Based in Furukawa. Hida city is 93.5% forest, and 68% of that is natural broadleaf woodland — which is why the city made broadleaf use a policy from fiscal 2015.",
                ja:"古川に置かれる。飛騨市は九十三・五パーセントが森で、その六十八パーセントが天然の広葉樹林である。市が二〇一五年度から広葉樹の活用を施策としたのはそのためである。",
                zh:"設於古川。飛驒市 93.5% 為森林，其中 68% 是天然闊葉林——這正是該市自 2015 年度起將闊葉材利用列為政策的原因。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["broadleaf", "sugi"] }] },
            { jp:"南ひだ森林組合",
              r:"Minami-Hida Forest Cooperative",
              muni:"gero",
              note:{
                en:"The cooperative of Gero, in southern Hida, whose hinoki is also now marketed as Tōnō hinoki.",
                ja:"南飛騨の下呂市の組合。そのヒノキもいまは東濃ひのきとして売られる。",
                zh:"南飛驒下呂市的組合；其扁柏如今也以「東濃扁柏」之名銷售。" },
              p:[{ jp:"森林整備", r:"Forest management", c:"forestry", sp:["tonohinoki", "hinoki"] }] },
            { group:{ en:"Log markets, sawmills and engineered wood", ja:"原木市場・製材・木質材料", zh:"原木市場、製材與工程木材" },
              jp:"木材産業",
              id:"g-timber" },
            { jp:"岐阜県銘木協同組合",
              r:"Gifu Meiboku Cooperative",
              muni:"gifu",
              note:{
                en:"A cooperative market in Gifu city for fine and figured timber, domestic and imported, regarded as the largest broadleaf and <em>meiboku</em> market in Japan. It sells on alternate days: one for sawn boards, one for logs. Imported walnut and maple pass through the same auction as Hida horse chestnut and Mino keyaki.",
                ja:"国産・輸入の良材と銘木を扱う岐阜市の協同組合の市場で、日本最大の広葉樹・銘木市場とされる。日を分けて、一日は製品、一日は原木を売る。輸入のウォルナットやメープルが、飛騨のトチや美濃のケヤキと同じ競りを通る。",
                zh:"岐阜市的協同組合市場，買賣國產與進口的高級木材與銘木，被視為日本最大的闊葉材與銘木市場。它分日拍賣：一天是板材，一天是原木。進口胡桃與楓木，和飛驒七葉樹、美濃櫸木走同一場拍賣。" },
              p:[
                { jp:"銘木市",
                  r:"Figured-wood auctions",
                  c:"market",
                  sp:["broadleaf", "tochi", "keyaki", "walnut", "maple"],
                  d:{
                    en:"Logs and boards for furniture makers and craftspeople across Japan.",
                    ja:"全国の家具のつくり手と職人のための丸太と板。",
                    zh:"供應全國家具製作者與工匠的原木與板材。" } }
              ] },
            { jp:"東濃ヒノキ白川市場",
              r:"Tōnō Hinoki Shirakawa Market",
              h:"東濃ヒノキ白川市場協同組合",
              hr:"Tōnō Hinoki Shirakawa Market Cooperative",
              muni:"shirakawacho",
              note:{
                en:"A cooperative hinoki log market in Shirakawa town, in the hinoki-growing hills where the Shirakawa river joins the Hida River.",
                ja:"白川町のヒノキの協同組合の原木市場。白川が飛騨川に合わさる、ヒノキを育てる山あいにある。",
                zh:"白川町的扁柏協同組合原木市場，位於白川匯入飛驒川的扁柏產區山間。" },
              p:[{ jp:"ヒノキ原木市", r:"Hinoki log auctions", c:"market", sp:["tonohinoki", "hinoki"] }] },
            { jp:"森の合板協同組合",
              r:"Mori no Gōhan Cooperative",
              muni:"nakatsugawa",
              note:{
                en:"Formed in the mid-2010s by a group of companies including the plywood maker Seihoku, which built a mill in Kashimo — by the cooperative's account the first plywood mill in Japan built in a mountain district rather than a port. It takes the bent and knotty logs that sawmills cannot use.",
                ja:"二〇一〇年代半ば、合板メーカーのセイホクなどの会社がつくった協同組合で、加子母に工場を建てた。組合によれば、港ではなく山間に建てられた日本初の合板工場である。製材所が使えない曲がりや節の多い丸太を引き受ける。",
                zh:"2010 年代中期由合板廠 Seihoku 等公司組成，在加子母設廠——據該組合表示，這是日本第一座建在山區而非港口的合板廠。它收購製材廠無法使用的彎曲、多節原木。" },
              p:[
                { jp:"構造用合板",
                  r:"Structural plywood",
                  c:"nd",
                  m:["laminated"],
                  sp:["sugi", "hinoki"],
                  d:{ en:"Softwood plywood for walls, floors and roofs.", ja:"壁、床、屋根のための針葉樹合板。", zh:"用於牆、樓板與屋頂的針葉樹合板。" } },
                { jp:"ヒノキ合板",
                  r:"Hinoki plywood",
                  c:"flooring",
                  m:["laminated"],
                  sp:["hinoki"],
                  d:{ en:"For interiors, furniture and floors.", ja:"内装、家具、床のために。", zh:"用於室內裝修、家具與地板。" } }
              ] },
            { jp:"山共",
              r:"Yamakyō",
              h:"株式会社山共",
              hr:"Yamakyō Co.",
              muni:"higashishirakawa",
              note:{
                en:"A hinoki sawmill in Koshihara, Higashi-Shirakawa, listed by the prefecture among the mills able to supply long timber for large wooden buildings: it saws lengths up to 8 metres and dries them in a high-temperature steam kiln.",
                ja:"東白川村越原のヒノキの製材所。県が大きな木造建築に長尺材を供給できる工場として挙げる一つで、八メートルまでを挽き、高温蒸気の乾燥機で乾かす。",
                zh:"東白川村越原的扁柏製材廠，名列縣府所列能為大型木造建築供應長尺材的工廠之一：可鋸製長達 8 公尺的材料，並以高溫蒸氣乾燥窯乾燥。" },
              p:[
                { jp:"製材品",
                  r:"Sawn timber",
                  c:"lumber",
                  m:["kiln"],
                  sp:["hinoki", "tonohinoki"],
                  d:{ en:"Lengths to 8 m.", ja:"八メートルまで。", zh:"長度可達 8 公尺。" } }
              ] },
            { jp:"東白川製材協同組合",
              r:"Higashi-Shirakawa Seizai Cooperative",
              muni:"higashishirakawa",
              note:{
                en:"A JAS-certified sawmilling cooperative in Kando, Higashi-Shirakawa, sawing lengths up to 10 metres and drying in both high- and medium-temperature steam kilns.",
                ja:"東白川村神土のJAS認証の製材の協同組合。十メートルまでを挽き、高温と中温の蒸気の乾燥機で乾かす。",
                zh:"東白川村神土取得 JAS 認證的製材協同組合，可鋸製長達 10 公尺的材料，並以高溫與中溫蒸氣乾燥窯乾燥。" },
              p:[
                { jp:"製材品",
                  r:"Graded sawn timber",
                  c:"lumber",
                  m:["kiln", "jas"],
                  sp:["hinoki", "tonohinoki"],
                  d:{ en:"Lengths to 10 m.", ja:"十メートルまで。", zh:"長度可達 10 公尺。" } }
              ] },
            { jp:"長良川木材事業協同組合",
              r:"Nagaragawa Mokuzai Cooperative",
              muni:"gujo",
              note:{
                en:"A sawmilling and drying cooperative in Nakatsuya, Shirotori, in upper Gujō, working the local Nagara sugi; natural drying is used to keep the wood's colour.",
                ja:"郡上の奥、白鳥町中津屋の製材と乾燥の協同組合で、地元の長良杉を扱う。色を保つため天然乾燥を用いる。",
                zh:"位於郡上上游白鳥町中津屋的製材與乾燥協同組合，處理當地的長良杉；為保留木材色澤而採自然乾燥。" },
              p:[{ jp:"長良杉の製材品", r:"Nagara sugi timber", c:"lumber", m:["natural"], sp:["nagarasugi"] }] },
            { jp:"恵那小径木加工協同組合",
              r:"Ena Shōkeiboku Kakō Cooperative",
              muni:"ena",
              note:{
                en:"A cooperative in Takenami, Ena, set up to process small-diameter logs — the thinnings that make up much of today's harvest — with high- and medium-temperature steam kilns taking lengths up to 12.5 metres.",
                ja:"恵那市武並町の協同組合で、いまの伐採の多くを占める間伐の小径木を加工するためにつくられた。長さ十二・五メートルまでを入れられる高温と中温の蒸気の乾燥機をもつ。",
                zh:"惠那市武並町的協同組合，專為加工小徑原木而設——疏伐材占了今日採伐量的一大部分；擁有可容納長達 12.5 公尺材料的高溫與中溫蒸氣乾燥窯。" },
              p:[{ jp:"小径木加工", r:"Small-log processing", c:"lumber", m:["smalldia", "kiln"], sp:["hinoki", "sugi"] }] },
            { jp:"桑原木材 金山工場",
              r:"Kuwahara Mokuzai Kanayama",
              h:"桑原木材株式会社",
              hr:"Kuwahara Mokuzai Co.",
              muni:"gero",
              note:{
                en:"The Kanayama works of a timber company, in Higashikutsube, Gero: a JAS-certified mill sawing lengths up to 11 metres, with medium-temperature steam and high-frequency kilns for lengths up to 12 metres.",
                ja:"下呂市金山町東沓部にある木材会社の金山工場。JAS認証の工場で十一メートルまでを挽き、十二メートルまでを扱う中温蒸気と高周波の乾燥機をもつ。",
                zh:"木材公司位於下呂市金山町東沓部的金山工廠：取得 JAS 認證，可鋸製長達 11 公尺的材料，並有可處理 12 公尺材料的中溫蒸氣與高頻乾燥窯。" },
              p:[{ jp:"製材品", r:"Graded sawn timber", c:"lumber", m:["kiln", "jas"], sp:["hinoki", "sugi"] }] },
            { jp:"早川木材",
              r:"Hayakawa Mokuzai",
              h:"早川木材株式会社",
              hr:"Hayakawa Mokuzai Co.",
              muni:"nakatsugawa",
              note:{
                en:"A sawmill in Tsukechi, Nakatsugawa, listed by the prefecture among the mills able to saw hinoki up to 11 metres long for large timber buildings.",
                ja:"中津川市付知の製材所で、県が大きな木造建築のためにヒノキを十一メートルまで挽ける工場として挙げる。",
                zh:"中津川市付知的製材廠，名列縣府所列能為大型木造建築鋸製長達 11 公尺扁柏的工廠。" },
              p:[{ jp:"長尺材", r:"Long timber", c:"lumber", sp:["tonohinoki", "hinoki"] }] },
            { jp:"共和木材工業",
              r:"Kyōwa Mokuzai Kōgyō",
              h:"共和木材工業株式会社",
              hr:"Kyōwa Mokuzai Kōgyō Co.",
              muni:"nakatsugawa",
              note:{
                en:"A Nakatsugawa company that both saws timber — lengths to 7 metres, with dehumidifying kilns for 10 metres — and builds custom houses of solid wood for clients in Nagoya and Gifu: a mill that follows its own hinoki into the finished home.",
                ja:"中津川市の会社で、材を挽き——七メートルまで、十メートルまでの除湿乾燥機をもつ——、名古屋と岐阜の施主のために無垢材の注文住宅も建てる。自らのヒノキを家の完成まで追う製材所である。",
                zh:"中津川市的公司，既鋸製木材——長度可達 7 公尺，並有可處理 10 公尺的除濕乾燥窯——也為名古屋與岐阜的屋主興建實木訂製住宅：一家把自家扁柏一路帶進完工住宅的製材廠。" },
              p:[
                { jp:"製材品", r:"Sawn timber", c:"lumber", m:["kiln"], sp:["hinoki"] },
                { jp:"注文住宅", r:"Custom houses", c:"house", m:["solid", "custom"], sp:["hinoki"] }
              ] },
            { jp:"協同組合東濃ひのきの家",
              r:"Tōnō Hinoki no Ie Cooperative",
              muni:"nakatsugawa",
              note:{
                en:"A cooperative in Kashimo that processes structural timber and makes glued-laminated beams of small, medium and large section from Tōnō hinoki, with a high-temperature steam kiln for 12-metre lengths.",
                ja:"加子母の協同組合で、構造材を加工し、東濃ひのきで小・中・大断面の集成材の梁をつくる。十二メートルの材を入れられる高温蒸気の乾燥機をもつ。",
                zh:"加子母的協同組合，加工結構材，並以東濃扁柏製作小、中、大斷面的集成材樑；擁有可容納 12 公尺材料的高溫蒸氣乾燥窯。" },
              p:[
                { jp:"ヒノキ集成材",
                  r:"Hinoki glulam",
                  c:"glulam",
                  m:["laminated", "kiln"],
                  sp:["tonohinoki"],
                  d:{ en:"Small, medium and large beams.", ja:"小断面・中断面・大断面の梁。", zh:"小、中、大斷面樑。" } },
                { jp:"構造材加工", r:"Structural timber", c:"precut", sp:["tonohinoki"] }
              ] },
            { jp:"ぎふの木ネット協議会",
              r:"Gifu no Ki Net Council",
              muni:"ginan",
              note:{
                en:"A council of forest, timber and building businesses that promotes houses built of Gifu-grown wood and runs the prefecture's timber portal; its office is at the Ginan timber company Yamagataya Sangyō.",
                ja:"森林、木材、建築の事業者の協議会で、県産材の家づくりを広め、県の木材の情報サイトを運営する。事務局は岐南町の木材会社ヤマガタヤ産業に置かれる。",
                zh:"由森林、木材與營造業者組成的協議會，推廣以岐阜縣產木材建造住宅，並經營縣內木材資訊網站；事務局設在岐南町的木材公司 Yamagataya 產業。" },
              p:[{ jp:"県産材の家づくり", r:"Houses of Gifu timber", c:"house", sp:["local"] }] },
            { group:{ en:"Builders and carpenters", ja:"工務店と大工", zh:"營造商與木匠" }, jp:"建てる", id:"g-builders" },
            { jp:"中島工務店",
              r:"Nakashima Kōmuten",
              h:"株式会社中島工務店",
              hr:"Nakashima Kōmuten Co.",
              muni:"nakatsugawa",
              est:"1956",
              note:{
                en:"A builder founded in Kashimo in 1956 that works in Tōnō hinoki on public buildings, houses, shrines and temples as well as civil works. To keep jobs in a shrinking village it has spread into precutting and even farming.",
                ja:"一九五六年に加子母で創業した工務店で、東濃ひのきで公共建築、住宅、社寺を建て、土木も手がける。人の減る村に仕事を残すため、プレカットや農業にまで事業を広げた。",
                zh:"1956 年創立於加子母的營造商，以東濃扁柏興建公共建築、住宅與寺社，也承包土木工程。為了在人口減少的村落留住工作機會，業務甚至擴及預切加工與農業。" },
              p:[
                { jp:"社寺建築", r:"Shrines and temples", c:"temple", m:["handcut"], sp:["tonohinoki"] },
                { jp:"木造の公共建築", r:"Public buildings", c:"public", sp:["tonohinoki"] },
                { jp:"木造住宅", r:"Houses", c:"house", sp:["tonohinoki"] }
              ] },
            { jp:"岡山工務店",
              r:"Okayama Kōmuten",
              h:"株式会社岡山工務店",
              hr:"Okayama Kōmuten Co.",
              muni:"nakatsugawa",
              note:{
                en:"A house builder in Fukuoka, Nakatsugawa, one of the firms listed on the prefectural timber federation's page on building with Gifu wood.",
                ja:"中津川市福岡の住宅の工務店で、県の木材協同組合連合会の木づかいの頁に載る会社の一つである。",
                zh:"中津川市福岡的住宅營造商，名列縣木材協同組合聯合會「用木資訊」頁面上的公司之一。" },
              p:[{ jp:"木造住宅", r:"Timber houses", c:"house", sp:["local"] }] },
            { jp:"飛騨の匠 久々野建築組合",
              r:"Kuguno Kenchiku Kumiai",
              muni:"takayama",
              note:{
                en:"A builders' association of carpenters in Kuguno, Takayama, that takes the old name of the Hida no takumi — the carpenters sent from Hida to build the capital for some five centuries under the ancient codes.",
                ja:"高山市久々野町の大工の建築組合で、古代の律令のもと数百年にわたって都づくりに送られた飛騨の大工、「飛騨の匠」の名を冠する。",
                zh:"高山市久久野町的木匠營造組合，冠以「飛驒之匠」的古名——在古代律令制度下，飛驒木匠被派往京城營建長達數百年。" },
              p:[{ jp:"木造住宅", r:"Timber houses", c:"house", m:["handcut"], sp:["local"] }] },
            { jp:"裏木曽古事三ツ緒伐り保存会",
              r:"Ura-Kiso Mitsuogiri Society",
              muni:"nakatsugawa",
              note:{
                en:"Keeps alive the three-point felling (<em>mitsuo-giri</em>) used for timber destined for the Ise Shrine. On 5 June 2025 its fellers brought down two hinoki in the Ura-Kiso national forest at Kashimo for the 63rd rebuilding, about an hour per tree, cutting from three sides so the trunk could be laid down gently. Ura-Kiso has supplied Ise since 1709.",
                ja:"伊勢神宮の御用材のための三ツ緒伐りを伝える会。二〇二五年六月五日、加子母の裏木曽国有林で第六十三回式年遷宮のためのヒノキ二本を、一本に約一時間をかけ、三方から伐って幹を静かに寝かせた。裏木曽は一七〇九年から伊勢に木を送ってきた。",
                zh:"傳承伊勢神宮御用材「三緒伐」的保存會。2025 年 6 月 5 日，會員在加子母的裏木曾國有林，為第 63 次式年遷宮伐倒兩株扁柏，每株約一小時，從三面下斧，讓樹幹緩緩放倒。裏木曾自 1709 年起即供應伊勢木材。" },
              p:[
                { jp:"三ツ緒伐り",
                  r:"Three-point felling",
                  c:"forestry",
                  m:["ise", "handmade"],
                  sp:["tonohinoki"],
                  yr:"2025",
                  d:{
                    en:"Demonstrated for the Ise timber felling ceremony.",
                    ja:"伊勢の御用材伐採式で行われた。",
                    zh:"於伊勢御用材伐採儀式中施行。" } }
              ] },
            { group:{ en:"Wood energy", ja:"木質エネルギー", zh:"木質能源" }, jp:"燃やす", id:"g-energy" },
            { jp:"岐阜バイオマスパワー",
              r:"Gifu Biomass Power",
              h:"株式会社岐阜バイオマスパワー",
              hr:"Gifu Biomass Power Co.",
              muni:"mizuho",
              est:"2014",
              note:{
                en:"A 6,250-kilowatt wood-fired power station in Mizuho that began operating in 2014, burning about 90,000 cubic metres of wood a year — some 60,000 of it unused thinnings and forest residue and 30,000 ordinary timber.",
                ja:"瑞穂市の出力六千二百五十キロワットの木質発電所で、二〇一四年に運転を始めた。年に約九万立方メートルの木を燃やし、うち約六万は未利用の間伐材や林地残材、三万は一般の木材である。",
                zh:"瑞穗市的 6,250 千瓦木質發電廠，2014 年開始運轉，每年燃燒約 9 萬立方公尺木材——其中約 6 萬為未利用的疏伐材與林地殘材，3 萬為一般木材。" },
              p:[
                { jp:"木質バイオマス発電",
                  r:"Wood-fired power",
                  c:"fuel",
                  sp:["local"],
                  d:{
                    en:"6,250 kW; about 90,000 m³ of wood a year.",
                    ja:"六千二百五十キロワット。年に約九万立方メートル。",
                    zh:"6,250 千瓦；每年約 9 萬立方公尺木材。" } }
              ] },
            { jp:"川辺バイオマス発電",
              r:"Kawabe Biomass Power",
              h:"川辺バイオマス発電株式会社",
              hr:"Kawabe Biomass Power Co.",
              muni:"kawabe",
              est:"2007",
              note:{
                en:"A 4,300-kilowatt power station in Kawabe that began in 2007 and burns about 70,000 tonnes a year of demolition and construction wood — the last use of timber that has already served in a building.",
                ja:"川辺町の出力四千三百キロワットの発電所で、二〇〇七年に始まり、年に約七万トンの解体・建築の廃材を燃やす。一度建物で役目を終えた木の、最後の使い道である。",
                zh:"川邊町的 4,300 千瓦發電廠，2007 年啟用，每年燃燒約 7 萬公噸拆除與營建廢木材——已在建築中服役過的木材，最後的用途。" },
              p:[
                { jp:"廃材発電",
                  r:"Power from waste wood",
                  c:"fuel",
                  d:{ en:"4,300 kW; about 70,000 t a year.", ja:"四千三百キロワット。年に約七万トン。", zh:"4,300 千瓦；每年約 7 萬公噸。" } }
              ] },
            { jp:"飛騨高山グリーンヒート",
              r:"Hida-Takayama Green Heat",
              h:"飛騨高山グリーンヒート合同会社",
              hr:"Hida-Takayama Green Heat LLC",
              muni:"takayama",
              est:"2017",
              note:{
                en:"A small wood-pellet power plant of 180 kilowatts in Takayama that started in 2017 — the scale at which a mountain town can burn its own wood close to where it grows.",
                ja:"高山市の出力百八十キロワットの小さな木質ペレットの発電設備で、二〇一七年に始まった。山の町が自らの木を育ったそばで燃やせる規模である。",
                zh:"高山市一座 180 千瓦的小型木質顆粒發電設備，2017 年啟用——這正是山城能就近燃燒自家木材的規模。" },
              p:[{ jp:"ペレット発電", r:"Pellet power", c:"fuel", sp:["local"] }] }
          ] }
      ] },
    { t:"section",
      id:"other",
      title:{ en:"Blades, paper and clay", ja:"刃物・紙・土", zh:"刀刃、紙與土" },
      jp:"刃物・紙・土",
      body:[
        { t:"p", text:{ en:"A handful of the makers behind the book's other crafts, in the same form as the wood makers above: the cutlers of Seki, the keepers of Honminoshi, and a kiln of Mino ware. The breweries have a directory of their own, A Directory of Gifu Sake.", ja:"本書のほかの工芸を担う作り手のうち、いくつかを上の木の作り手と同じ形で挙げる。関の刃物メーカー、本美濃紙を守る人々、そして美濃焼の窯元である。酒蔵には別に「岐阜酒名鑑」がある。", zh:"本書其他工藝背後的幾家製作者，以與上方木作製作者相同的格式列出：關市的刀具廠、守護本美濃紙的人，以及一座美濃燒窯元。酒藏另有專屬的「岐阜酒名鑑」。" } },
        { t:"brands", items:[
          { group:{ en:"Blades", ja:"刃物", zh:"刀具" }, jp:"刃物", id:"g-blades" },
          { jp:"貝印", r:"Kai", h:"貝印", hr:"Kai Corporation", muni:"seki", kind:"blade", est:"1908",
          note:{ en:"Began in 1908 as a pocket-knife maker in Seki and grew into one of Japan's largest makers of kitchen knives, razors and beauty tools. Its Seki Magoroku range carries the name of the sixteenth-century swordsmith, and its Shun knives are sold around the world. See <a href=\"cutlery.html\">The Cutlery Industry</a>.",
            ja:"1908年に関でポケットナイフの製造から始まり、包丁・剃刀・美容用品の日本最大級のメーカーとなった。「関孫六」の銘は十六世紀の刀匠の名を負い、「旬」の包丁は世界で売られている。<a href=\"cutlery.html\">刃物産業</a>を参照。",
            zh:"1908 年在關以製造摺疊小刀起家，發展成日本最大的菜刀、剃刀與美容工具製造商之一。其「關孫六」系列承襲十六世紀刀匠之名，「旬」系列菜刀行銷全球。見<a href=\"cutlery.html\">刀具產業</a>。" } },
          { jp:"ミソノ刃物", r:"Misono", h:"ミソノ刃物", hr:"Misono Hamono", muni:"seki", kind:"blade", est:"",
          note:{ en:"A Seki maker known among professional cooks for Western-style kitchen knives. Like many firms in the town it combines machine work with hand grinding and edging, where the quality of a knife is decided. See <a href=\"knives.html\">The Kitchen Knife</a>.",
            ja:"洋包丁で料理人のあいだに知られる関の刃物メーカー。町の多くの会社と同じく、機械による工程と、刃物の良し悪しが決まる手での研ぎ・刃付けを組み合わせる。<a href=\"knives.html\">包丁</a>を参照。",
            zh:"關的刀具製造商，以西式菜刀在專業廚師之間享有名聲。與鎮上許多公司一樣，它把機械工序與決定刀具品質的手工研磨、開刃結合在一起。見<a href=\"knives.html\">廚刀</a>。" } },
          { group:{ en:"Paper", ja:"紙", zh:"紙" }, jp:"紙", id:"g-paper" },
          { jp:"本美濃紙保存会", r:"Honminoshi Preservation Society", h:"本美濃紙保存会", hr:"Honminoshi Hozonkai", muni:"mino", kind:"paper", est:"",
          note:{ en:"The papermakers whose technique was designated an Important Intangible Cultural Property in 1969. Their paper, made only from Japanese kōzo, formed by swaying the mould both ways and dried on boards in the sun, was inscribed by UNESCO in 2014 with two other washi. See <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>.",
            ja:"1969年にその技術が重要無形文化財に指定された紙漉きたち。国産の楮だけを用い、簀桁を縦横に揺すって漉き、板に貼って天日で干すその紙は、2014年にほかの二つの和紙とともにユネスコの無形文化遺産に記載された。<a href=\"paper.html\">和紙・提灯・和傘</a>を参照。",
            zh:"其技術於 1969 年獲指定為重要無形文化財的造紙者。他們的紙只用日本產的楮，抄紙時前後左右搖動抄紙框，貼在木板上以日光曬乾；2014 年與另兩種和紙一同列入聯合國教科文組織非物質文化遺產。見<a href=\"paper.html\">和紙、燈籠與和傘</a>。" } },
          { group:{ en:"Clay", ja:"土", zh:"土" }, jp:"土", id:"g-clay" },
          { jp:"幸兵衛窯", r:"Kōbei Kiln", h:"幸兵衛窯", hr:"Kōbei-gama", muni:"tajimi", kind:"clay", est:"",
          note:{ en:"A family kiln at Ichinokura in Tajimi, the workshop of Katō Takuo (1917–2005), who was named a Living National Treasure in 1995 for lustre and three-colour wares revived from Persian models. See <a href=\"minoyaki.html\">Mino Ware</a>.",
            ja:"多治見・市之倉の家族の窯で、ペルシアの陶器にならって甦らせたラスター彩と三彩により1995年に人間国宝となった加藤卓男（1917–2005）の工房。<a href=\"minoyaki.html\">美濃焼</a>を参照。",
            zh:"多治見市之倉的家族窯，是加藤卓男（1917–2005）的工坊；他以仿波斯陶器復興的虹彩與三彩，於 1995 年獲認定為人間國寶。見<a href=\"minoyaki.html\">美濃燒</a>。" } }
        ] }
      ] },
    { t:"section",
      id:"bymuni",
      title:{ en:"The same list, read by town", ja:"市町村から引く", zh:"由市町村索引" },
      jp:"市町村別索引",
      body:[
        { t:"p",
          text:{
            en:"Every entry above sits in one municipality, and here they are gathered town by town, in the order of the prefecture's five regions — Hida, Chūnō, Tōnō, the Gifu area and Seinō — with the neighbours across the prefectural line at the end. The count beside each name is the number of entries, and every name links back to its entry. Takayama heads the list by a wide margin because it is at once the furniture capital, the carving and lacquer town and the museum town of the prefecture; Mino owes its count to its papermakers, and Nakatsugawa to the hinoki villages of Ura-Kiso that joined it in 2005.",
            ja:"上のどの記載も一つの市町村にあり、ここでは県の五つの地域——飛騨、中濃、東濃、岐阜、西濃——の順に町ごとに集め、県境の向こうの隣接地域を最後に置いた。名のかたわらの数は記載の数で、名はどれも記載へ戻る手がかりになっている。高山が大きく抜きんでるのは、家具の都であり、彫りと漆の町であり、県の博物館の町でもあるからである。美濃市の数は紙漉きのおかげであり、中津川市の数は二〇〇五年に加わった裏木曽のヒノキの村々のおかげである。",
            zh:"上方每一筆條目都位於某個市町村，這裡依縣內五大地域——飛驒、中濃、東濃、岐阜與西濃——的順序逐一歸納，縣界外的鄰近地區列在最後。名稱旁的數字是條目數，每個名稱都能連回原條目。高山遙遙領先，因為它同時是縣內的家具之都、雕刻與漆藝之城，也是博物館之城；美濃市的數量來自紙匠，中津川市則來自 2005 年併入的裏木曾扁柏山村。" } },
        { t:"figure",
          caption:{
            en:"Entries in this directory by region, counted from the entries on this page (September 2026). The count reflects what the directory could confirm, not the size of each region's industry.",
            ja:"この名鑑の記載の地域別の数。この頁の記載から数えた（二〇二六年九月）。数は名鑑が確かめられたものを映し、各地域の産業の大きさを示すものではない。",
            zh:"本名鑑條目的地域分布，依本頁條目計算（2026 年 9 月）。數字反映名鑑能確認的範圍，並不代表各地域產業的規模。" },
          svg:function(lang, L){
            var cnt = {}, order = ["hida","chuno","tono","gifu","seino","near"], M = GIFU.MUNI || {}, R = GIFU.REGION || {};
            (function walk(bl){
              for (var i = 0; i < bl.length; i++) {
                var x = bl[i];
                if (!x) continue;
                if (x.t === "makers") {
                  for (var j = 0; j < x.items.length; j++) {
                    var e = x.items[j];
                    if (e && !e.group && e.muni && M[e.muni]) cnt[M[e.muni].reg] = (cnt[M[e.muni].reg] || 0) + 1;
                  }
                } else if (x.t === "section" && x.body) walk(x.body);
              }
            })(GIFU.pages["makers"].body);
            var items = [];
            for (var k = 0; k < order.length; k++) {
              items.push({ n: R[order[k]] || { en: order[k], ja: order[k], zh: order[k] }, v: cnt[order[k]] || 0 });
            }
            return GIFU.fig.hbar(lang, L, {
              title:{ en:"Directory entries by region", ja:"地域別の記載数", zh:"各地域條目數" },
              items: items, unit:{ en:"entries", ja:"件", zh:"筆" }, labelW:180, rowH:32 });
          } },
        { t:"muniindex", page:"makers" }
      ] },
    { t:"section",
      id:"byspecies",
      title:{ en:"The same list, read by wood", ja:"樹種から引く", zh:"由樹種索引" },
      jp:"樹種別索引",
      body:[
        { t:"p",
          text:{
            en:"Turn the directory round and it answers a different question: not what does this maker do, but who works this wood. The count beside each species is the number of entries that name it in at least one product line. Only woods the makers themselves name are counted, so a workshop that chooses its boards afresh for every commission appears under none.",
            ja:"名鑑を裏返せば、別の問いに答えることになる。このつくり手は何をするか、ではなく、この木を扱うのは誰か、である。樹種のかたわらの数は、少なくとも一つの製品の行でその木を挙げる記載の数である。数えたのはつくり手自身が名のる木だけであり、注文ごとに板を選び直す工房はどこにも現れない。",
            zh:"把名鑑翻轉過來，它回答的就是另一個問題：不是「這位製作者做什麼」，而是「誰在用這種木材」。樹種旁的數字，是至少在一項產品中提到該樹種的條目數。只計入製作者自己標明的木材，因此每接一件訂單就重新選板的工坊，不會出現在任何樹種之下。" } },
        { t:"speciesindex" },
        { t:"note",
          label:{ en:"What the counts show", ja:"数が示すもの", zh:"數字顯示了什麼" },
          text:{
            en:"Hinoki, in its plain and its Tōnō form, runs through the forest, timber and building entries almost without a break; sugi follows. The broadleaves appear mostly in Hida, where the furniture industry was built on beech and the forests are still mainly natural hardwood. The imported woods — spruce, rosewood, maple, walnut — belong to the instrument makers and the figured-wood market, a reminder that Gifu's two most famous exports, guitars and chairs, have never relied on local timber alone. Kōzo is here because paper is: the bark of a shrub, but farmed and cut like any crop of the hills.",
            ja:"ヒノキは、そのままの名でも東濃ひのきとしても、森林・木材・建築の記載をほとんど途切れずに貫き、スギがそれに続く。広葉樹はおもに飛騨に現れる。飛騨の家具産業はブナの上に築かれ、森はいまも大半が天然の広葉樹だからである。輸入の木——スプルース、ローズウッド、メイプル、ウォールナット——は楽器のつくり手と銘木の市場のものであり、岐阜の最も名高い二つの産品、ギターと椅子が、地元の木だけに頼ったことは一度もないことを思い出させる。コウゾがここにあるのは紙があるからである。低木の皮ではあるが、山のほかの作物と同じく育てられ、刈られる。",
            zh:"扁柏——無論是一般名稱還是「東濃扁柏」——幾乎貫穿了森林、木材與營造的所有條目，柳杉緊隨其後。闊葉樹主要出現在飛驒，因為當地家具業奠基於山毛櫸，森林至今仍以天然闊葉林為主。進口木材——雲杉、玫瑰木、楓木、胡桃木——屬於樂器製作者與銘木市場，提醒我們岐阜最著名的兩項產品——吉他與椅子——從來不曾只靠本地木材。楮之所以在此，是因為紙：它雖是灌木的樹皮，卻和山區其他作物一樣被栽種、收割。" } }
      ] },
    { t:"section",
      id:"bytech",
      title:{ en:"The same list, read by technique", ja:"技法から引く", zh:"由技法索引" },
      jp:"技法別索引",
      body:[
        { t:"p",
          text:{
            en:"Ten techniques are indexed, chosen because each marks a real difference in how a thing is made: steam-bent wood, urushi lacquer and its transparent Shunkei form, lathe-turning, carving, handwork, air-drying, compressed wood, hand-cut joinery and the nagashi-zuki method of forming paper. Kiln-drying, JAS grading and made-to-order work are common enough across the timber trade that listing them would tell the reader little.",
            ja:"索引に挙げる技法は十で、どれもものづくりの実際の違いを示すものを選んだ。蒸して曲げる曲木、漆とその透明な春慶塗、轆轤の挽物、彫り、手仕事、天然乾燥、圧縮加工、手刻み、そして紙を漉く流し漉きである。人工乾燥、JAS、受注製作は木材の業界にありふれているので、挙げても読者に伝わるものは少ない。",
            zh:"索引收錄十種技法，選擇的標準是每一種都代表製作方式上的實際差異：蒸汽彎曲的曲木、漆及其透明的春慶塗、轆轤車旋、雕刻、手工、自然乾燥、壓縮木材、手工榫接，以及抄紙的流漉法。人工乾燥、JAS 分級與訂製在木材業界太過普遍，列出來對讀者幫助不大。" } },
        { t:"techindex" },
        { t:"note",
          text:{
            en:"“Handmade” is the maker's own claim, and every workshop in this directory uses machines somewhere; read the list as those who say so, not as a certificate. The Shunkei and urushi lists overlap by design — Shunkei is urushi, applied so that the grain shows — and the carving list joins the ittōbori carvers of Takayama to a jazz-guitar maker in Gujō and a seventeenth-century monk whose statues fill two museums.",
            ja:"「手工」はつくり手自身の言い分であり、この名鑑のどの工房もどこかで機械を使う。これは証明書ではなく、そう述べる者の一覧として読んでほしい。春慶と漆の一覧が重なるのは意図してのことである——春慶は、木目が透けるように塗った漆だからである。彫りの一覧は、高山の一刀彫の彫師を、郡上のジャズギターのつくり手や、二つの博物館を像で満たす十七世紀の僧と結びつける。",
            zh:"「手工」是製作者自己的說法，本名鑑中的每個工坊都會在某處用到機器；請把這份清單讀作「這麼說的人」，而非一張證書。春慶與漆的清單刻意重疊——春慶本來就是漆，只是塗法讓木紋透出。而雕刻清單則把高山的一刀雕雕師，與郡上的一位爵士吉他製作者、以及一位佛像填滿兩座博物館的十七世紀僧人連在一起。" } }
      ] },
    { t:"note",
      label:{ en:"Corrections", ja:"訂正について", zh:"關於更正" },
      text:{
        en:"The lists behind this directory were checked in September 2026. Workshops open, move and close; cooperatives merge; a sawmill that could saw twelve metres last year may have sold its long carriage. Where an entry and a maker's own website disagree, the website is more likely to be right. The places in the last group change more slowly, but even they close for repair, and a playhouse opens its doors only on the days of its performance.",
        ja:"この名鑑のもとになった一覧は、二〇二六年九月に確かめた。工房は開き、移り、閉じる。組合は合併する。昨年十二メートルを挽けた製材所が、長い送材車を手放しているかもしれない。記載とつくり手自身のウェブサイトが食い違うときは、ウェブサイトのほうが正しい見込みが高い。最後の群の場所はもっとゆっくり変わるが、それでも修理のために閉じることがあり、芝居小屋が扉を開けるのは上演の日だけである。",
        zh:"本名鑑所依據的名單查核於 2026 年 9 月。工坊會開張、搬遷、歇業；組合會合併；去年還能鋸 12 公尺材料的製材廠，今年可能已賣掉了長台車。若條目與製作者官網有出入，官網較可能是對的。最後一組的場所變化較慢，但也會因修繕而閉館，而戲棚只在演出的日子才開門。" } },
    { t:"related",
      items:[
        { href:"houses.html",
          why:{ en:"The lineage of studio woodworking in Gifu.", ja:"岐阜の工房の木工の系譜。", zh:"岐阜工作室木作的傳承。" } },
        { href:"furniture.html", why:{ en:"The history of the Hida factories.", ja:"飛騨の工場の歴史。", zh:"飛驒工廠的歷史。" } },
        { href:"markets.html",
          why:{ en:"How the log markets in this list work.", ja:"この名鑑の原木市場の仕組み。", zh:"名鑑中原木市場的運作方式。" } },
        { href:"luthiers.html",
          why:{ en:"The guitar workshops in more detail.", ja:"ギターの工房をくわしく。", zh:"吉他工坊的詳細介紹。" } },
        { href:"visiting.html", why:{ en:"Planning a visit to a workshop.", ja:"工房を訪ねる計画。", zh:"規劃工坊參訪。" } }
      ] }
  ] };
