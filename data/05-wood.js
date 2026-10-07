/* =============================================================
   THE SPIRIT OF GIFU — The Land of Wood
   11 pages. Each page is one GIFU.pages["key"] = {…}
   module; the order here is the order of the navigation
   (GIFU.NAV in assets/js/core.js).
   ============================================================= */

/* ---- ---------------------------------------------- wood */
GIFU.pages["wood"] = { kicker:{ en:"The Land of Wood · 01", ja:"木の国 · 01", zh:"木之國 · 01" },
  title:{ en:"The Land of Wood", ja:"木の国", zh:"木之國" },
  jp:"木の国",
  lede:{
    en:"Gifu is one of the most wooded places in Japan. Four-fifths of the prefecture is forest, and for thirteen hundred years its people have been known less for what they grew than for what they could make out of trees. Carpenters from the northern province of Hida were sent to build the capitals of the eighth century in place of paying tax; the hinoki of the Ura-Kiso forests still goes, every twenty years, to rebuild the shrines at Ise; the beech of the Hida mountains became the bentwood chairs that helped post-war Japan learn to sit at a table; and two workshops in the prefecture build acoustic guitars that are played on stages around the world. This part of the book sets out how that happened, what the wood itself is, how it is grown, cut, moved, dried and sold, and what is made of it — in houses, furniture, crafts and instruments — and how to read, buy, use and care for it.",
    ja:"岐阜は日本でも指折りの森の国である。県土の五分の四が森林であり、この地の人々は千三百年のあいだ、何を育てたかよりも、木から何をつくれたかによって知られてきた。北の飛騨国の大工は、税を納める代わりに八世紀の都を建てるために送り出された。裏木曽の檜はいまも二十年ごとに伊勢の社殿を建て替えるために伐り出される。飛騨の山のブナは曲木の椅子となり、戦後の日本人が食卓に就く暮らしを広める一助となった。そして県内の二つの工房がつくるアコースティックギターは、世界の舞台で弾かれている。本書のこの部は、それがいかにして起こったのか、木とはそもそも何か、それがどう育てられ、伐られ、運ばれ、乾かされ、売られるのか、そして住宅・家具・工芸・楽器として何がつくられるのかを示し、さらにそれをどう読み、選び、使い、手入れするのかを体系的に述べる。",
    zh:"岐阜是日本森林最茂密的地方之一。全縣五分之四的土地是森林，千三百年來，這裡的人們與其說以「種出了什麼」聞名，不如說以「能用樹做出什麼」聞名。北方飛驒國的木匠，曾以勞役代替納稅，被派往八世紀的都城營造宮殿寺院；裏木曾的檜木至今仍每二十年一次被伐下，用來重建伊勢神宮的社殿；飛驒山中的山毛櫸化為曲木椅，幫助戰後的日本人習慣坐上餐桌；而縣內兩座工坊所造的木吉他，正在世界各地的舞台上被彈奏。本書的這一部分系統說明這一切如何發生、木材本身是什麼、它如何被栽種、伐採、運送、乾燥與販售，人們又以它做出了哪些住宅、家具、工藝與樂器——以及該如何判讀、挑選、使用與保養它。" },
  body:[
    { t:"figure",
      caption:{
        en:"From the mountain to the hand. A qualitative outline of the path a tree in Gifu takes: decades to centuries of growth, a few hours of felling, weeks to months of moving and selling, months to years of drying, and then a working life that — in a well-made building, a chair or a guitar — can outlast the tree's own age. The last step returns what is left to the ground or the fire.",
        ja:"山から手へ。岐阜の一本の木がたどる道のりの定性的な見取り図。数十年から数百年の生長、数時間の伐倒、数週間から数か月の搬出と取引、数か月から数年の乾燥、そして使われる時間——よく造られた建物や椅子やギターであれば、それは木そのものの樹齢を超えうる。最後の段階で、残ったものは土か火に還る。",
        zh:"從山到手。岐阜一棵樹所走路徑的定性示意：數十年乃至數百年的生長、數小時的伐倒、數週到數月的集運與交易、數月到數年的乾燥，然後是被使用的歲月——若是造得好的建築、椅子或吉他，這段歲月可以比樹本身的年齡還長。最後一步，剩下的東西回歸土壤或火焰。" },
      svg:function(lang, L){
        var W = {
          t:{en:"FROM THE MOUNTAIN TO THE HAND",ja:"山から手へ",zh:"從山到手"},
          a:{en:"Forest",ja:"森",zh:"森林"}, a2:{en:"grow · tend",ja:"育てる・手入れ",zh:"栽種・撫育"},
          b:{en:"Fell",ja:"伐る",zh:"伐倒"}, b2:{en:"chainsaw · harvester",ja:"チェーンソー・ハーベスタ",zh:"鏈鋸・伐木機"},
          c:{en:"Extract",ja:"出す",zh:"集運"}, c2:{en:"cable · road · (river)",ja:"架線・林道・（川）",zh:"架線・林道・（河）"},
          d:{en:"Market",ja:"市場",zh:"市場"}, d2:{en:"log auction",ja:"原木市",zh:"原木拍賣"},
          e:{en:"Saw · dry",ja:"挽く・乾かす",zh:"製材・乾燥"}, e2:{en:"sawmill · kiln · yard",ja:"製材所・乾燥機・桟積み",zh:"製材廠・乾燥窯・堆場"},
          f:{en:"Make",ja:"つくる",zh:"製作"}, f2:{en:"house · chair · masu · guitar",ja:"家・椅子・枡・ギター",zh:"房屋・椅子・枡・吉他"},
          g:{en:"Use",ja:"使う",zh:"使用"}, g2:{en:"repair · reuse",ja:"直す・使い継ぐ",zh:"修理・再利用"},
          h:{en:"Return",ja:"還る",zh:"回歸"}, h2:{en:"fuel · soil · carbon",ja:"燃料・土・炭素",zh:"燃料・土壤・碳"},
          tA:{en:"60–300+ years",ja:"六十〜三百年超",zh:"60–300 年以上"},
          tB:{en:"hours",ja:"数時間",zh:"數小時"},
          tC:{en:"weeks – months",ja:"数週〜数か月",zh:"數週至數月"},
          tD:{en:"months – years",ja:"数か月〜数年",zh:"數月至數年"},
          tE:{en:"decades – centuries",ja:"数十年〜数百年",zh:"數十年至數百年"},
          q:{en:"Qualitative — durations are typical ranges, not measurements",ja:"定性図——期間は典型的な幅であり実測ではない",zh:"定性圖——時間為典型範圍，非實測"}
        };
        function t(k){ return L(W[k]); }
        var keys = ["a","b","c","d","e","f","g","h"];
        var fills = ["#E0E6DB","#E7DFD2","#E0E7E9","#EDEAE2","#EADCC1","#EDE5D2","#F0EDE4","#E6E4E0"];
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="'+t("t")+'">';
        s += '<text x="20" y="28" font-family="Georgia,serif" font-size="13" letter-spacing="2" fill="#55504A">'+t("t")+'</text>';
        var x0 = 20, bw = 82, gap = 11, y = 66, h = 130;
        for (var i=0;i<keys.length;i++){
          var x = x0 + i*(bw+gap);
          s += '<rect x="'+x+'" y="'+y+'" width="'+bw+'" height="'+h+'" fill="'+fills[i]+'" stroke="#B4AC9C"/>';
          s += '<text x="'+(x+8)+'" y="'+(y+20)+'" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">0'+(i+1)+'</text>';
          /* title: one line if it fits the box, else broken at the middle dot */
          var ttl = t(keys[i]), cjk = /[\u2e80-\uffff]/.test(ttl), tsz = cjk ? 15 : 16;
          var tlines = (GIFU.fig.wrap(ttl, 99).join("").length * (cjk ? tsz : tsz * 0.55) > bw - 8 && ttl.indexOf("・") > 0)
            ? [ttl.slice(0, ttl.indexOf("・") + 1), ttl.slice(ttl.indexOf("・") + 1)]
            : (ttl.indexOf(" · ") > 0 && ttl.length * tsz * 0.55 > bw - 8 ? ttl.split(" · ") : [ttl]);
          for (var tl=0; tl<tlines.length; tl++)
            s += '<text x="'+(x+bw/2)+'" y="'+(y+(tlines.length>1?48:58)+tl*19)+'" text-anchor="middle" font-family="Georgia,serif" font-size="'+tsz+'" fill="#201E1B">'+tlines[tl]+'</text>';
          var sub = t(keys[i]+"2").split(/ · |・/);
          var sy = y + (tlines.length>1 ? 88 : 80);
          for (var j=0;j<sub.length;j++){
            s += '<text x="'+(x+bw/2)+'" y="'+(sy+j*13)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#55504A">'+sub[j]+'</text>';
          }
          if (i<keys.length-1){
            var ax = x+bw+1;
            s += '<path d="M'+ax+' '+(y+h/2)+' l'+(gap-3)+' 0" stroke="#7C6B52" stroke-width="1.2"/>';
            s += '<path d="M'+(ax+gap-5)+' '+(y+h/2-3)+' l3 3 l-3 3" fill="none" stroke="#7C6B52" stroke-width="1.2"/>';
          }
        }
        /* return loop */
        var lx = x0 + 7*(bw+gap) + bw/2, fx = x0 + bw/2;
        s += '<path d="M'+lx+' '+(y+h)+' L'+lx+' '+(y+h+22)+' L'+fx+' '+(y+h+22)+' L'+fx+' '+(y+h+4)+'" fill="none" stroke="#A08F73" stroke-width="1" stroke-dasharray="4 3"/>';
        s += '<path d="M'+(fx-3)+' '+(y+h+8)+' l3 -4 l3 4" fill="none" stroke="#A08F73" stroke-width="1"/>';
        /* time band */
        var by = 256;
        var spans = [["tA",0,1],["tB",1,1],["tC",2,2],["tD",4,1],["tE",5,2]];
        for (var k=0;k<spans.length;k++){
          var sx = x0 + spans[k][1]*(bw+gap), sw = spans[k][2]*(bw+gap)-gap;
          s += '<line x1="'+sx+'" y1="'+by+'" x2="'+(sx+sw)+'" y2="'+by+'" stroke="#8B857C" stroke-width="1"/>';
          s += '<line x1="'+sx+'" y1="'+(by-4)+'" x2="'+sx+'" y2="'+(by+4)+'" stroke="#8B857C"/>';
          s += '<line x1="'+(sx+sw)+'" y1="'+(by-4)+'" x2="'+(sx+sw)+'" y2="'+(by+4)+'" stroke="#8B857C"/>';
          s += '<text x="'+(sx+sw/2)+'" y="'+(by+18)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+t(spans[k][0])+'</text>';
        }
        s += '<text x="20" y="312" font-family="system-ui,sans-serif" font-size="10.5" fill="#8B857C">'+t("q")+'</text>';
        s += '</svg>';
        return s;
      } },
    { t:"section",
      id:"meaning",
      title:{ en:"What this book means by wood", ja:"本書のいう「木」", zh:"本書所說的「木」" },
      jp:"木・材・木材",
      body:[
        { t:"p",
          text:{
            en:"Japanese has one character, 木, for both the living tree and the material cut from it, and most of the time it does not bother to distinguish them. The trade does. A standing tree is <em>tachiki</em>; once felled and cut to length it becomes a log, <em>maruta</em>, and in the statistics <em>sozai</em> — raw material; once sawn it becomes <em>seizaihin</em>, sawn goods; and only somewhere along that path does it turn into <em>zai</em>, material, the thing a maker chooses. This book follows the whole path, and it uses the English words the way the Japanese trade uses its own: “tree” for what stands, “log” for what is felled, “timber” for what is sawn and sold, and “wood” for the substance itself.",
            ja:"日本語は、生きている樹木とそこから切り出された素材とを同じ一字「木」で表し、たいていはその区別に頓着しない。業界は区別する。立っている木は立木、伐り倒して玉切りすれば丸太となり、統計上は素材と呼ばれる。挽けば製材品となる。そしてその道のりのどこかで、それは作り手が選ぶ「材」になる。本書はその全行程をたどり、英語の語も業界の日本語と同じように使い分ける——立つものは tree、伐られたものは log、挽かれて売られるものは timber、そして物質そのものを wood と呼ぶ。",
            zh:"日文以同一個字「木」同時指稱活著的樹與從樹上切下的材料，而且多半不刻意區分。業界則會區分。站著的樹叫「立木」；伐倒並截成定長後成為「丸太」（原木），在統計上稱為「素材」；鋸解之後成為「製材品」；而在這條路上的某一處，它才成為製作者所挑選的「材」。本書追蹤整條路徑，英文用語也比照日本業界的用法：站立者為 tree，伐下者為 log，鋸製並出售者為 timber，物質本身則稱 wood。" } },
        { t:"defs",
          items:[
            { term:{ en:"Tree, log, timber, wood", ja:"立木・丸太・製材品・木材", zh:"立木、原木、製材品、木材" },
              jp:"立木・丸太・製材・木材",
              romaji:"tachiki, maruta, seizai, mokuzai",
              def:{
                en:"The four states a piece of wood passes through, and the four ways it is counted. Standing trees are measured by the forest's growing stock in cubic metres; logs by their volume under bark at the small end; sawn timber by nominal section and length; and the national wood balance sheet converts everything back into cubic metres of roundwood so that a sheet of plywood and a stick of firewood can be added together.",
                ja:"一片の木が通過する四つの状態であり、四通りの数え方である。立木は森林蓄積として立方メートルで、丸太は末口の皮なし直径から材積で、製材品は呼び寸法と長さで量られる。そして国の木材需給表は、合板一枚と薪一本を足し合わせられるよう、すべてを丸太換算の立方メートルに戻して集計する。",
                zh:"一塊木頭所經歷的四種狀態，也是四種計量方式。立木以森林蓄積量（立方公尺）計；原木以末口去皮直徑推算材積；製材品以標稱斷面與長度計；而國家的木材供需表則把一切換算回原木立方公尺，好讓一張合板與一根柴薪可以相加。" } },
            { term:{ en:"Softwood and hardwood", ja:"針葉樹材と広葉樹材", zh:"針葉樹材與闊葉樹材" },
              jp:"針葉樹・広葉樹",
              romaji:"shin'yōju, kōyōju",
              def:{
                en:"A botanical division, not a statement about hardness. Softwoods are the conifers — sugi, hinoki, larch, pine — and in Japan they are the building timbers. Hardwoods are the broadleaved trees — beech, oak, zelkova, cherry, chestnut — and they are the furniture and craft timbers. Paulownia, a hardwood, is lighter than any conifer in this book; yew, a conifer, is denser and harder than many broadleaves.",
                ja:"植物学上の区分であって、硬さの話ではない。針葉樹材はスギ・ヒノキ・カラマツ・マツなどの球果類で、日本では建築の材である。広葉樹材はブナ・ナラ・ケヤキ・サクラ・クリなどの広葉の木で、家具と工芸の材である。広葉樹のキリは本書に登場するどの針葉樹よりも軽く、針葉樹のイチイは多くの広葉樹よりも重く硬い。",
                zh:"這是植物學的分類，不是在說硬度。針葉樹材是毬果類——柳杉、扁柏、落葉松、松——在日本是建築用材。闊葉樹材是寬葉的樹——山毛櫸、橡木、櫸木、櫻木、栗木——是家具與工藝用材。闊葉樹的泡桐比本書出現的任何針葉樹都輕；針葉樹的紫杉卻比許多闊葉樹更重更硬。" } },
            { term:{ en:"Gifu, Mino and Hida", ja:"岐阜・美濃・飛騨", zh:"岐阜、美濃與飛驒" },
              jp:"飛山濃水",
              romaji:"hizan nōsui",
              def:{
                en:"Gifu Prefecture was put together in 1876 from two old provinces that have very little in common: Mino in the south, a country of river plains, castle towns and paper; and Hida in the north, a country of mountains, snow and carpenters. The prefecture describes itself with a four-character phrase, <em>hizan nōsui</em> — the mountains of Hida, the waters of Mino. Almost every story in this book belongs to one side of that line or the other.",
                ja:"岐阜県は一八七六年、共通点の少ない二つの旧国を合わせてできた。南の美濃は川の平野と城下町と紙の国、北の飛騨は山と雪と大工の国である。県は自らを四文字で言い表す——「飛山濃水」、飛騨の山と美濃の水。本書のほとんどすべての話は、この線のどちらか一方に属している。",
                zh:"岐阜縣於 1876 年由兩個幾乎毫無共通點的舊國合併而成：南邊的美濃是河川平原、城下町與紙的國度；北邊的飛驒是高山、深雪與木匠的國度。縣自稱以四字形容——「飛山濃水」，飛驒之山、美濃之水。本書幾乎每一則故事，都屬於這條界線的某一側。" } }
          ] }
      ] },
    { t:"section",
      id:"figures",
      title:{ en:"Gifu's wood in figures", ja:"数字で見る岐阜の木", zh:"數字中的岐阜之木" },
      jp:"概数",
      body:[
        { t:"grid",
          cols:3,
          cells:[
            { k:{ en:"Forest cover", ja:"森林率", zh:"森林覆蓋率" },
              v:{ en:"81%", ja:"81%", zh:"81%" },
              d:{
                en:"Share of the prefecture's land that is forest — second in Japan after Kōchi, against a national figure of about two-thirds.",
                ja:"県土に占める森林の割合。高知に次いで全国二位。全国平均はおよそ三分の二。",
                zh:"全縣土地中森林所占比例，僅次於高知，居全國第二；全國約為三分之二。" } },
            { k:{ en:"Forest area", ja:"森林面積", zh:"森林面積" },
              v:{ en:"862,000 ha", ja:"86.2万ha", zh:"86.2 萬公頃" },
              d:{
                en:"Fifth largest of the forty-seven prefectures. Of it, about 385,000 ha is planted forest — sixth nationally — and 684,000 ha is privately owned.",
                ja:"四十七都道府県中五位。うち人工林はおよそ三十八万五千ヘクタール（全国六位）、民有林は六十八万四千ヘクタール。",
                zh:"四十七都道府縣中第五大。其中人工林約 38.5 萬公頃（全國第六），私有林 68.4 萬公頃。" } },
            { k:{ en:"Hinoki over sugi", ja:"スギよりヒノキ", zh:"扁柏多於柳杉" },
              v:{ en:"26 : 16", ja:"26 : 16", zh:"26 : 16" },
              d:{
                en:"Percent of private forest area planted in hinoki and in sugi. In most of Japan sugi dominates; Gifu is one of the few prefectures where the ratio runs the other way.",
                ja:"民有林面積に占めるヒノキ人工林とスギ人工林の割合（%）。全国の多くではスギが優勢だが、岐阜はその比が逆転する数少ない県の一つである。",
                zh:"私有林面積中扁柏人工林與柳杉人工林的百分比。日本多數地方以柳杉為主，岐阜是少數比例相反的縣之一。" } },
            { k:{ en:"Logs cut", ja:"素材生産量", zh:"原木產量" },
              v:{ en:"576,000 m³", ja:"57.6万m³", zh:"57.6 萬立方公尺" },
              d:{
                en:"Annual log production, fiscal 2021 — about 1.8 times the figure of ten years earlier. Roughly three-tenths went to fuel.",
                ja:"令和三年度の年間素材生産量。十年前のおよそ一・八倍。うち約三割が燃料用。",
                zh:"2021 年度的年原木產量，約為十年前的 1.8 倍，其中約三成作為燃料。" } },
            { k:{ en:"Sawmills", ja:"製材工場", zh:"製材廠" },
              v:{ en:"169", ja:"169", zh:"169" },
              d:{
                en:"Sawmills operating in fiscal 2021 — the most of any prefecture, though most are small and fifty closed in the five years before.",
                ja:"令和三年度に稼働していた製材工場の数。都道府県で最多だが、多くは小規模で、その前の五年で五十が姿を消した。",
                zh:"2021 年度運作中的製材廠數，為全國各縣之冠；但多屬小規模，且在此前五年間關閉了五十家。" } },
            { k:{ en:"Traditional crafts", ja:"伝統的工芸品", zh:"傳統工藝品" },
              v:{ en:"6", ja:"6", zh:"6" },
              d:{
                en:"Nationally designated crafts in Gifu. Five of the six are made of wood or plant fibre: Hida Shunkei lacquer, Ichii Ittōbori carving, Mino washi, Gifu lanterns and Gifu umbrellas. The sixth is Mino ware — whose kilns were fired with pine for centuries.",
                ja:"岐阜の国指定伝統的工芸品。六つのうち五つは木か植物繊維でできている——飛騨春慶、一位一刀彫、美濃和紙、岐阜提灯、岐阜和傘。残る一つの美濃焼も、何世紀にもわたり松の薪で焼かれてきた。",
                zh:"岐阜的國家指定傳統工藝品。六項中有五項以木或植物纖維製成：飛驒春慶、一位一刀雕、美濃和紙、岐阜燈籠與岐阜和傘；第六項美濃燒，其窯也曾以松柴燒了數百年。" } }
          ] },
        { t:"note",
          label:{ en:"On the numbers", ja:"数字について", zh:"關於數字" },
          text:{
            en:"Every figure in this book carries its year and its unit, and prefectural and national statistics are quoted as the agencies publish them. Forest statistics move slowly; timber statistics move fast. Where two sources disagree — several dates in the history of the Hida carpenters do — the disagreement is stated rather than resolved.",
            ja:"本書のすべての数字には年と単位を付し、県と国の統計は各機関の公表どおりに引く。森林の統計はゆっくり動き、木材の統計は速く動く。二つの資料が食い違う場合——飛騨の匠の歴史のいくつかの年代がそうである——その食い違いを解決せず、そのまま記す。",
            zh:"本書所有數字皆附年份與單位，縣與國的統計依各機關公布者引用。森林統計變動緩慢，木材統計變動迅速。若兩份資料互相矛盾——飛驒匠人史上有好幾個年代便是如此——我們會陳述其分歧，而不強作裁定。" } },
        { t:"figure",
      caption:{
        en:"Which wood, for what: the main timbers of Gifu, where they grow and what is made from them. Guitars are the exception — their tonewoods are mostly imported, and what Gifu supplies is the skill.",
        ja:"どの木を、何に。岐阜の主な木材と、その産地、そこから作られるもの。ギターは例外で、音響材の多くは輸入材であり、岐阜が供するのは技である。",
        zh:"何種木材，做什麼用：岐阜的主要木材、產地與用途。吉他是例外——其音材大多為進口，岐阜提供的是技藝。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 400" role="img" aria-label="Main timbers of Gifu and their uses">' +
          '<rect x="0.5" y="0.5" width="759" height="399" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"WHICH WOOD, FOR WHAT", ja:"どの木を、何に", zh:"何種木材，做什麼用" }) + '</text>';
        var head = [[30,{en:"TIMBER",ja:"木",zh:"木材"}],[250,{en:"WHERE",ja:"産地",zh:"產地"}],[430,{en:"MADE INTO",ja:"用途",zh:"用途"}]];
        head.forEach(function (h) { s += '<text x="' + h[0] + '" y="58" ' + F + ' font-size="9.5" fill="#8B857C" letter-spacing="1.4">' + L(h[1]) + '</text>'; });
        s += '<line x1="30" y1="66" x2="730" y2="66" stroke="#B4AC9C"/>';
        var rows = [
          [{en:"Hinoki",ja:"檜（ひのき）",zh:"檜木"}, "#EDE5D2", {en:"Tōnō, Ura-Kiso",ja:"東濃・裏木曽",zh:"東濃、裏木曾"}, {en:"shrines and temples, houses, masu, baths, a library roof",ja:"社寺・住宅・枡・風呂・図書館の屋根",zh:"社寺、住宅、枡、浴桶、圖書館屋頂"}],
          [{en:"Sugi",ja:"杉（すぎ）",zh:"杉木"}, "#E0E6DB", {en:"Nagara valley, Gujō",ja:"長良川流域・郡上",zh:"長良川流域、郡上"}, {en:"house frames, boards, compressed-cedar chairs",ja:"住宅の軸組・板・圧縮杉の椅子",zh:"住宅骨架、板材、壓縮杉木椅"}],
          [{en:"Sawara",ja:"椹（さわら）",zh:"花柏"}, "#E9ECEE", {en:"Ura-Kiso",ja:"裏木曽",zh:"裏木曾"}, {en:"shingle roofs, tubs, Hida Shunkei lacquerware",ja:"榑葺きの屋根・桶・飛騨春慶",zh:"木片屋頂、木桶、飛驒春慶漆器"}],
          [{en:"Beech and oak",ja:"橅・楢",zh:"山毛櫸、楢木"}, "#E7DFD2", {en:"Hida",ja:"飛騨",zh:"飛驒"}, {en:"bentwood chairs, tables, cabinets",ja:"曲木の椅子・テーブル・箱物",zh:"曲木椅、桌子、櫃類"}],
          [{en:"Japanese yew (ichii)",ja:"一位（いちい）",zh:"紫杉（一位）"}, "#EEE1DF", {en:"Kuraiyama, Hida",ja:"飛騨・位山",zh:"飛驒位山"}, {en:"court sceptres, Ichii ittōbori carving",ja:"笏・一位一刀彫",zh:"笏、一位一刀雕"}],
          [{en:"Spruce, rosewood, mahogany",ja:"スプルース・ローズウッド・マホガニー",zh:"雲杉、玫瑰木、桃花心木"}, "#E6E2EC", {en:"imported",ja:"輸入材",zh:"進口"}, {en:"acoustic guitars, made in Kani and Sakashita",ja:"可児と坂下で作るアコースティックギター",zh:"在可兒與坂下製作的木吉他"}]
        ];
        rows.forEach(function (r, i) {
          var y = 76 + i * 46;
          s += '<rect x="30" y="' + y + '" width="12" height="30" fill="' + r[1] + '" stroke="#7C6B52" stroke-width="0.8"/>' +
               '<text x="52" y="' + (y + 20) + '" ' + F + ' font-size="11.5" fill="#201E1B" font-weight="600">' + L(r[0]) + '</text>' +
               '<text x="250" y="' + (y + 20) + '" ' + F + ' font-size="10.5" fill="#55504A">' + L(r[2]) + '</text>' +
               '<text x="430" y="' + (y + 20) + '" ' + F + ' font-size="10.5" fill="#201E1B">' + L(r[3]) + '</text>' +
               '<line x1="30" y1="' + (y + 40) + '" x2="730" y2="' + (y + 40) + '" stroke="#EAE6DD"/>';
        });
        s += '<text x="30" y="388" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — main uses only; every timber has many more.",ja:"模式図——主な用途のみ。どの木にもほかに多くの用途がある。",zh:"示意圖——僅列主要用途；每種木材都另有許多用途。"}) + '</text></svg>';
        return s;
      }
    }
      ] },
    { t:"section",
      id:"five",
      title:{ en:"Five things that make Gifu's wood distinct", ja:"岐阜の木を特別にしている五つのこと", zh:"讓岐阜之木與眾不同的五件事" },
      jp:"五つの特色",
      body:[
        { t:"p",
          text:{
            en:"Many prefectures in Japan are mostly forest, and several cut more timber than Gifu does. What sets Gifu apart is not quantity but continuity: a chain of skills, institutions and markets that has run, with breaks and reinventions, from the eighth century to the present.",
            ja:"日本の多くの県はその大半が森林であり、岐阜より多くの木を伐る県もいくつもある。岐阜を際立たせているのは量ではなく連続性である。技と制度と市場の連なりが、断絶と再発明を挟みながら、八世紀から現在まで続いてきた。",
            zh:"日本許多縣大半是森林，伐木量比岐阜多的縣也有好幾個。讓岐阜與眾不同的不是數量，而是延續性：一條由技藝、制度與市場構成的鏈，在斷裂與重塑之間，從八世紀一路延續至今。" } },
        { t:"grid",
          cols:2,
          cells:[
            { h:{ en:"A province of carpenters", ja:"大工の国", zh:"木匠之國" },
              jp:"飛騨の匠",
              d:{
                en:"Under the Yōrō code, Hida alone was excused the ordinary taxes in cloth and produce and instead sent ten craftsmen from every village unit to work a year in the capital. About a hundred went each year for four centuries. The name <em>Hida no takumi</em> outlived the system by a thousand years and is still a trademark of quality. See <a href=\"takumi.html\">The Hida Takumi</a>.",
                ja:"養老令のもとで、飛騨国だけが庸と調を免ぜられ、その代わりに里ごとに匠丁十人を出して都で一年働かせた。毎年およそ百人が、四百年にわたって上った。「飛騨の匠」の名は制度より千年長く生き、いまも品質の証である。<a href=\"takumi.html\">飛騨の匠</a>を参照。",
                zh:"依《養老令》，唯獨飛驒國得免一般的布帛與物產之稅，改為每「里」出十名匠丁，赴都城服役一年。四百年間每年約有百人上京。「飛驒之匠」之名比制度多活了一千年，至今仍是品質的標誌。見<a href=\"takumi.html\">飛驒的匠人</a>。" } },
            { h:{ en:"Timber for the gods", ja:"神のための木", zh:"獻給神明的木" },
              jp:"神宮御用材",
              d:{
                en:"Since the Sengū of 1709, the hinoki forests of Ura-Kiso in what is now Nakatsugawa have supplied timber for the twenty-yearly rebuilding of the Ise shrines. In June 2025 the ceremonial first felling for the 63rd rebuilding took place in the Kashimo national forest, by the three-cut method. See <a href=\"gods.html\">Trees and the Gods</a>.",
                ja:"一七〇九年の遷宮以来、いまの中津川市にあたる裏木曽の檜林は、二十年ごとの伊勢神宮の建て替えに御用材を供してきた。二〇二五年六月、第六十三回式年遷宮の御用材伐採式が加子母の国有林で三ツ緒伐りによって執り行われた。<a href=\"gods.html\">神と木</a>を参照。",
                zh:"自 1709 年的遷宮以來，位於今日中津川市的裏木曾檜木林，便為伊勢神宮每二十年一次的重建提供御用材。2025 年 6 月，第 63 回式年遷宮的御用材伐採儀式在加子母國有林以「三緒伐」舉行。見<a href=\"gods.html\">神與樹</a>。" } },
            { h:{ en:"Broadleaves made into chairs", ja:"広葉樹から椅子へ", zh:"闊葉樹化為椅子" },
              jp:"飛騨の家具",
              d:{
                en:"Until 1920 the beech of the Hida mountains was worth little more than charcoal and clogs. That year a small company in Takayama began steaming and bending it into chairs, and the town became one of the country's great furniture centres. See <a href=\"furniture.html\">Hida Furniture</a> and <a href=\"bentwood.html\">Bentwood</a>.",
                ja:"一九二〇年まで、飛騨の山のブナは炭と下駄くらいにしかならなかった。その年、高山の小さな会社がそれを蒸して曲げ、椅子にしはじめ、町は国内有数の家具産地となった。<a href=\"furniture.html\">飛騨の家具</a>と<a href=\"bentwood.html\">曲木</a>を参照。",
                zh:"直到 1920 年，飛驒山中的山毛櫸幾乎只能拿來燒炭或做木屐。那一年，高山的一家小公司開始把它蒸軟彎曲做成椅子，小鎮從此成為全國屈指可數的家具產地。見<a href=\"furniture.html\">飛驒家具</a>與<a href=\"bentwood.html\">曲木</a>。" } },
            { h:{ en:"Rivers that carried the forest", ja:"森を運んだ川", zh:"載運森林的河" },
              jp:"木曽三川",
              d:{
                en:"The Kiso, Nagara and Ibi rivers run south through Gifu to Ise Bay, and for three centuries the Kiso carried the logs of the Owari domain down to the rafting yard at Nishikori in Yaotsu and on to Nagoya. The drives ended when the Ōi dam closed the river in 1924. See <a href=\"timberrivers.html\">The Timber Rivers</a>.",
                ja:"木曽・長良・揖斐の三川は岐阜を南へ流れて伊勢湾に注ぐ。三百年にわたり、木曽川は尾張藩の木材を八百津の錦織綱場まで流し下し、そこから筏で名古屋へ運んだ。川狩りは一九二四年、大井ダムが川をせき止めて終わった。<a href=\"timberrivers.html\">木を運んだ川</a>を参照。",
                zh:"木曾、長良、揖斐三條河向南流經岐阜注入伊勢灣。三百年間，木曾川將尾張藩的木材沖放到八百津的錦織綱場，再編成木筏運往名古屋。1924 年大井壩截斷河道，流放作業隨之終結。見<a href=\"timberrivers.html\">運木之河</a>。" } },
            { h:{ en:"A dense cluster of crafts", ja:"密集する工芸", zh:"密集的工藝群" },
              jp:"工芸の集積",
              d:{
                en:"Lacquer that shows the grain, carvings left uncoloured, masu boxes that measure sake, paper from mulberry bark, lanterns of paper on bamboo, umbrellas turned on a wooden hub: few regions hold so many crafts that begin with a plant. See the <a href=\"makers.html\">Directory of Makers</a>.",
                ja:"木目を見せる漆、彩色しない彫刻、酒を量る枡、楮の皮からの紙、竹に紙を張った提灯、木の轆轤を芯に開く傘——植物から始まる工芸をこれほど多く抱える地域は少ない。<a href=\"makers.html\">作り手名鑑</a>を参照。",
                zh:"透出木紋的漆、不上色的雕刻、量酒的枡、構樹皮造的紙、竹骨糊紙的燈籠、以木製轆轤為軸撐開的傘——從植物出發的工藝能在一地如此密集，並不多見。見<a href=\"makers.html\">製作者名鑑</a>。" } },
            { h:{ en:"Wood that sings", ja:"歌う木", zh:"會歌唱的木" },
              jp:"楽器",
              d:{
                en:"Takamine, founded in Sakashita in 1959, and Yairi, which moved to Kani in 1945, build acoustic guitars that have been played by the Eagles and by Paul McCartney. Takamine chose Sakashita partly because it was full of woodworkers; Yairi came to Kani to escape the air raids on Nagoya. See <a href=\"takamine.html\">Takamine</a> and <a href=\"yairi.html\">Yairi</a>.",
                ja:"一九五九年に坂下で創業したタカミネと、一九四五年に可児へ移ったヤイリは、イーグルスやポール・マッカートニーが弾いたアコースティックギターをつくる。タカミネが坂下を選んだ理由の一つは木工職人が大勢いたことであり、ヤイリは名古屋の空襲を避けて可児に来た。<a href=\"takamine.html\">タカミネ</a>と<a href=\"yairi.html\">ヤイリ</a>を参照。",
                zh:"1959 年創立於坂下的 Takamine，與 1945 年遷至可兒的 Yairi，所造的木吉他曾由老鷹合唱團與保羅．麥卡尼彈奏。Takamine 選擇坂下，部分原因正是這裡滿是木工匠；Yairi 則是為躲避名古屋的空襲而遷到可兒。見 <a href=\"takamine.html\">Takamine</a> 與 <a href=\"yairi.html\">Yairi</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"fivewoods",
      title:{ en:"Five woods to learn first", ja:"最初に覚える五つの木", zh:"最先認識的五種木" },
      jp:"五樹",
      body:[
        { t:"p",
          text:{
            en:"If you learn only five woods from Gifu, learn these. Between them they cover the building timbers and the furniture timbers, the lightest and among the heaviest, the scented and the plain, and between them they account for most of what you will see in a Gifu house, a Takayama shop or a Hida furniture showroom.",
            ja:"岐阜の木を五つだけ覚えるなら、これを覚えるとよい。この五つで、建築の材と家具の材、最も軽いものと重いものの一つ、香るものと香らないものを押さえられ、岐阜の家、高山の店、飛騨の家具のショールームで目にするもののほとんどをまかなえる。",
            zh:"若只認識五種岐阜的木，就認識這五種。它們涵蓋了建築材與家具材、最輕的與最重的之一、有香氣的與無香氣的；你在岐阜的住宅、高山的店舖或飛驒家具展示間裡看到的東西，大多出自它們。" } },
        { t:"figure",
          caption:{
            en:"Five woods to learn first, by air-dry density. Paulownia (kiri) is the lightest timber in common Japanese use; keyaki sits at the heavy end of the everyday furniture woods. Figures are the reference values in the Wood Industry Handbook, 4th edition (Forestry and Forest Products Research Institute); a real board may vary by a fifth either way.",
            ja:"最初に覚える五つの木を気乾密度で並べたもの。キリは日本で日常的に使われる材のなかで最も軽く、ケヤキは日用の家具材のなかで重い側にある。数値は『木材工業ハンドブック 改訂4版』（森林総合研究所監修）の代表値で、実際の板はその上下二割ほどの幅で揺れる。",
            zh:"最先認識的五種木，依氣乾密度排列。泡桐是日本日常用材中最輕者；櫸木則位於日常家具用材中偏重的一端。數值取自《木材工業手冊》第 4 版（森林綜合研究所監修）的代表值；實際木板可能上下差到兩成。" },
          svg:function(lang, L){
            var rows = [
              { k:{en:"Paulownia · kiri",ja:"キリ",zh:"泡桐"}, v:0.30, f:"#F0EDE4", n:{en:"boxes, geta, koto",ja:"箪笥・下駄・箏",zh:"衣櫃・木屐・箏"} },
              { k:{en:"Sugi",ja:"スギ",zh:"柳杉"}, v:0.38, f:"#EEE1DF", n:{en:"posts, ceilings, barrels",ja:"柱・天井・樽",zh:"柱・天花板・酒樽"} },
              { k:{en:"Hinoki",ja:"ヒノキ",zh:"扁柏（檜木）"}, v:0.44, f:"#F5F3ED", n:{en:"shrines, baths, masu",ja:"社殿・風呂・枡",zh:"社殿・浴桶・枡"} },
              { k:{en:"Beech · buna",ja:"ブナ",zh:"山毛櫸"}, v:0.65, f:"#EDE5D2", n:{en:"bentwood chairs",ja:"曲木の椅子",zh:"曲木椅"} },
              { k:{en:"Keyaki",ja:"ケヤキ",zh:"櫸木"}, v:0.69, f:"#E7DFD2", n:{en:"festival floats, drums",ja:"祭屋台・太鼓",zh:"祭典屋台・太鼓"} }
            ];
            var s = '<svg viewBox="0 0 760 300" role="img" aria-label="density">';
            s += '<text x="20" y="28" font-family="Georgia,serif" font-size="13" letter-spacing="2" fill="#55504A">'+(lang==="en"?"AIR-DRY DENSITY · g/cm³":(lang==="ja"?"気乾密度　g/cm³":"氣乾密度　g/cm³"))+'</text>';
            var x0 = 190, scale = 600; /* 0..0.8 -> 0..480 */
            for (var g=0; g<=8; g++){
              var gx = x0 + g*60;
              s += '<line x1="'+gx+'" y1="48" x2="'+gx+'" y2="262" stroke="#E1DCD2" stroke-width="'+(g%2?0.5:1)+'"/>';
              if (g%2===0) s += '<text x="'+gx+'" y="280" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(g/10).toFixed(1)+'</text>';
            }
            for (var i=0;i<rows.length;i++){
              var r = rows[i], y = 58 + i*42, w = r.v/0.8*480;
              s += '<text x="20" y="'+(y+15)+'" font-family="Georgia,serif" font-size="13.5" fill="#201E1B">'+L(r.k)+'</text>';
              s += '<text x="20" y="'+(y+30)+'" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+L(r.n)+'</text>';
              s += '<rect x="'+x0+'" y="'+(y+2)+'" width="'+w+'" height="24" fill="'+r.f+'" stroke="#B4AC9C"/>';
              s += '<text x="'+(x0+w+8)+'" y="'+(y+19)+'" font-family="system-ui,sans-serif" font-size="12" fill="#201E1B">'+r.v.toFixed(2)+'</text>';
            }
            s += '<line x1="'+(x0+1.0/0.8*480)+'" y1="48" x2="'+(x0+1.0/0.8*480)+'" y2="262" stroke="#E1DCD2"/>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          caption:{ en:"The five, at a glance", ja:"五つの木の早見", zh:"五種木一覽" },
          cols:[
            { en:"Wood", ja:"木", zh:"木" },
            { en:"Kanji", ja:"漢字", zh:"漢字" },
            { en:"How to know it", ja:"見分け方", zh:"辨識方式" },
            { en:"Where you meet it in Gifu", ja:"岐阜で出会う場所", zh:"在岐阜哪裡遇見" }
          ],
          jpCols:[1],
          rows:[
            [
              { en:"Hinoki", ja:"ヒノキ", zh:"扁柏（檜木）" },
              "檜",
              {
                en:"Pale straw to faint pink, very fine even grain, a clean citrus-and-resin smell the moment it is planed.",
                ja:"淡い麦わら色から薄桃色、緻密でそろった木目、鉋をかけた瞬間に立つ柑橘と樹脂のような清らかな香り。",
                zh:"淡麥稈色至微粉色，紋理極細且均勻，一刨開就散出清新的柑橘與樹脂香。" },
              {
                en:"Shrine buildings, bathtubs, masu, the posts of good houses, the Tōnō hinoki yards around Nakatsugawa.",
                ja:"社殿、浴槽、枡、良い家の柱、中津川周辺の東濃ひのきの市場。",
                zh:"社殿、浴桶、枡、好房子的柱子、中津川周邊的東濃檜木市場。" }
            ],
            [
              { en:"Sugi", ja:"スギ", zh:"柳杉" },
              "杉",
              {
                en:"Soft, light, straight; a red-brown heart and a white rim, often both in one board; a sweeter, woodier smell than hinoki.",
                ja:"柔らかく軽く通直。赤褐色の心材と白い辺材、しばしば一枚に両方。ヒノキより甘く木質的な香り。",
                zh:"柔軟、輕、通直；紅褐色心材與白色邊材，常同在一塊板上；香氣比扁柏更甜、更木質。" },
              {
                en:"Ceilings and panelling, the Nagara-sugi mills of Gujō, sake barrels, the cedar balls hung outside Takayama breweries.",
                ja:"天井や羽目板、郡上の長良杉の製材所、酒樽、高山の酒蔵の軒先に下がる杉玉。",
                zh:"天花板與壁板、郡上長良杉的製材所、酒樽、高山酒藏簷下懸掛的杉玉。" }
            ],
            [
              { en:"Beech", ja:"ブナ", zh:"山毛櫸" },
              "橅",
              {
                en:"Even, pale pinkish-brown, with small dark flecks (the rays) on the quartered face; hard, heavy and bends beautifully when steamed.",
                ja:"均質で淡い桃褐色、柾目面に小さな濃い斑（放射組織）。硬く重く、蒸せば見事に曲がる。",
                zh:"均勻的淡粉褐色，徑切面上有細小深色斑點（木射線）；硬而重，蒸過後可漂亮地彎曲。" },
              {
                en:"Hida bentwood chairs; the beech forests high on the flanks of the Northern Alps and Hakusan.",
                ja:"飛騨の曲木椅子。北アルプスや白山の山腹高くに広がるブナ林。",
                zh:"飛驒曲木椅；北阿爾卑斯與白山山腰高處的山毛櫸林。" }
            ],
            [
              { en:"Keyaki", ja:"ケヤキ", zh:"櫸木" },
              "欅",
              {
                en:"Bold, open, golden-brown grain with flame and burl figure; heavy and tough; the grand wood of temples.",
                ja:"大胆で粗い金褐色の木目に、如鱗杢や玉杢が出る。重く粘り強い。寺社の格式の材。",
                zh:"大膽粗獷的金褐色紋理，常見火焰紋與瘤紋；沉重強韌，是寺院的氣派之材。" },
              {
                en:"The wheels and frames of the Takayama festival floats; temple pillars; taiko drum shells.",
                ja:"高山祭屋台の車輪と骨組、寺の柱、太鼓の胴。",
                zh:"高山祭屋台的車輪與骨架、寺院的柱子、太鼓的鼓身。" }
            ],
            [
              { en:"Japanese yew", ja:"イチイ", zh:"紫杉（一位）" },
              "一位",
              {
                en:"A conifer with a bright red-brown heart and a thin cream sapwood, so fine and dense it takes a knife like soap and darkens to amber over the years.",
                ja:"針葉樹だが、鮮やかな赤褐色の心材（赤太）と細い乳白色の辺材（白太）をもち、石鹸のように刃を受けるほど緻密で、年とともに飴色に深まる。",
                zh:"雖是針葉樹，卻有鮮明的紅褐色心材（赤太）與細窄的乳白色邊材（白太），質地緻密到刀入如切肥皂，歲月中會轉為琥珀色。" },
              {
                en:"Ichii Ittōbori carvings in Takayama; the prefectural tree of Gifu.",
                ja:"高山の一位一刀彫。岐阜県の木。",
                zh:"高山的一位一刀雕；岐阜縣的縣樹。" }
            ]
          ] }
      ] },
    { t:"section",
      id:"hold",
      title:{ en:"Five things to hold", ja:"手に取るべき五つのもの", zh:"該拿在手上的五樣東西" },
      jp:"触れる",
      body:[
        { t:"p",
          text:{
            en:"Wood is a material you understand by weight, temperature and smell before you understand it by name. These five objects are inexpensive or free to handle, easy to find in Gifu, and each teaches something the rest of the book will return to.",
            ja:"木は、名前で理解するより先に、重さと温度と匂いで理解される素材である。以下の五つは安価であるか手に取るのに費用がかからず、岐阜で容易に見つかり、それぞれが本書の後段で繰り返し立ち返る何かを教えてくれる。",
            zh:"木頭是一種先以重量、溫度與氣味理解，才以名字理解的材料。以下五樣東西價格不高或可免費觸摸，在岐阜很容易找到，而且每一樣都教會你本書稍後會反覆提及的某件事。" } },
        { t:"steps",
          items:[
            { title:{ en:"A new hinoki masu", ja:"新しい檜の枡", zh:"一只新的檜木枡" },
              jp:"枡",
              romaji:"masu",
              meta:{ en:"Ōgaki · a few hundred yen", ja:"大垣・数百円", zh:"大垣・數百日圓" },
              text:{
                en:"Smell it first. Then look at the corners, where the boards are locked together by interlocking fingers and glue, with no nails. Then look at the grain on each face: some faces show straight lines, others show flame shapes. That is the difference between quartersawn and flatsawn wood, which comes back on <a href=\"sawmill.html\">Sawmilling</a>.",
                ja:"まず匂いを嗅ぐ。次に四隅を見る。板は組み接ぎと接着剤で組まれ、釘は使われていない。そして各面の木目を見る。まっすぐな線の面もあれば、炎のような模様の面もある。これが柾目と板目の違いで、<a href=\"sawmill.html\">製材</a>の頁でまた出てくる。",
                zh:"先聞一聞。再看四個角：木板以指狀榫與膠相扣，沒有用釘子。然後看每一面的紋理：有的面是直線，有的面是火焰狀。這就是徑切（柾目）與弦切（板目）的差別，會在<a href=\"sawmill.html\">製材</a>一頁再出現。" } },
            { title:{ en:"A Hida bentwood chair", ja:"飛騨の曲木椅子", zh:"一張飛驒曲木椅" },
              jp:"曲木",
              romaji:"magegi",
              meta:{ en:"Any Takayama showroom · free to sit", ja:"高山のショールーム・座るのは無料", zh:"高山任一展示間・坐坐免費" },
              text:{
                en:"Run a hand along the back rail and feel that the grain follows the curve instead of being cut across it. That continuity is the whole point of bending rather than carving, and it is why a thin bentwood rail is stronger than a thick sawn one. See <a href=\"bentwood.html\">Bentwood</a>.",
                ja:"背の笠木に手を滑らせ、木目が曲線を断ち切られずに曲線に沿って流れていることを感じる。その連続こそが、削り出すのではなく曲げることの眼目であり、細い曲木の部材が太い挽き物より強い理由である。<a href=\"bentwood.html\">曲木</a>を参照。",
                zh:"用手沿著椅背橫檔滑過，感受紋理是順著曲線走，而不是被橫向切斷。這種連續性正是「彎曲」而非「雕削」的要旨，也是細細的曲木構件比粗大的鋸切構件更強的原因。見<a href=\"bentwood.html\">曲木</a>。" } },
            { title:{ en:"A piece of Hida Shunkei", ja:"飛騨春慶の器", zh:"一件飛驒春慶" },
              jp:"春慶",
              romaji:"shunkei",
              meta:{ en:"Takayama · from a small tray", ja:"高山・小さな盆から", zh:"高山・從一只小盤開始" },
              text:{
                en:"Hold it to the light. The lacquer is transparent, so the grain of the sawara or hinoki underneath shows through, gold on gold. Most lacquerware hides the wood; this was invented to show it. See <a href=\"shunkei.html\">Hida Shunkei</a>.",
                ja:"光にかざす。漆は透けていて、下のサワラやヒノキの木目が金の上に金を重ねたように透けて見える。多くの漆器は木を隠すが、これは木を見せるために生まれた。<a href=\"shunkei.html\">飛騨春慶</a>を参照。",
                zh:"對著光看。漆是透明的，底下花柏或扁柏的紋理透了出來，如金上疊金。多數漆器把木頭藏起來；這一種卻是為了展示木頭而誕生的。見<a href=\"shunkei.html\">飛驒春慶</a>。" } },
            { title:{ en:"An offcut of sugi and one of keyaki", ja:"スギとケヤキの端材", zh:"一塊柳杉與一塊櫸木的邊料" },
              jp:"端材",
              romaji:"hazai",
              meta:{ en:"Any lumber yard · often free", ja:"材木屋で・しばしば無料", zh:"任何木材行・常可免費取得" },
              text:{
                en:"Same size, one in each hand. The keyaki is almost twice as heavy. Press a thumbnail into each: the sugi dents, the keyaki does not. Weight and hardness track density closely, and density predicts most of what a wood will do. See <a href=\"properties.html\">Physical Properties</a>.",
                ja:"同じ大きさを片手ずつに持つ。ケヤキはほぼ倍重い。それぞれに爪を押し当てると、スギはへこみ、ケヤキはへこまない。重さと硬さは密度とよく連動し、密度は木の振る舞いのほとんどを予言する。<a href=\"properties.html\">物理的性質</a>を参照。",
                zh:"同樣大小，一手一塊。櫸木幾乎重一倍。用拇指甲各按一下：柳杉會凹陷，櫸木不會。重量與硬度與密度緊密相關，而密度能預測木材大部分的表現。見<a href=\"properties.html\">物理性質</a>。" } },
            { title:{ en:"An acoustic guitar in a shop", ja:"楽器店のアコースティックギター", zh:"樂器行裡的一把木吉他" },
              jp:"表板",
              romaji:"omoteita",
              meta:{ en:"Any music shop · ask first", ja:"楽器店・ひと声かけてから", zh:"任何樂器行・先徵求同意" },
              text:{
                en:"Tap the top lightly with a knuckle near the bridge and then near the edge, and listen to how different the two notes are. The top is a thin plate of spruce or cedar a little under three millimetres thick, braced underneath, and those taps are its resonances. See <a href=\"sound.html\">Wood &amp; Sound</a>.",
                ja:"ブリッジの近くと縁の近くを指の関節で軽く叩き、二つの音の違いを聴く。表板は厚さ三ミリ弱のスプルースやシダーの薄板で、裏から力木で支えられており、その叩いた音がその共鳴である。<a href=\"sound.html\">木と音</a>を参照。",
                zh:"用指關節在琴橋附近與面板邊緣各輕敲一下，聽聽兩個音有多不同。面板是一片厚度略低於三公釐的雲杉或雪松薄板，底下以音梁支撐，而那兩聲輕敲，就是它的共振。見<a href=\"sound.html\">木與聲音</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"tenwords",
      title:{ en:"Ten words to know", ja:"知っておくべき十の言葉", zh:"該知道的十個詞" },
      jp:"十語",
      body:[
        { t:"p",
          text:{
            en:"The Japanese vocabulary of wood is large and precise. These ten words come up more than any others in this book and in any conversation with someone who works with wood in Gifu. The full list is in the <a href=\"glossary.html\">Glossary</a>, and the harder cases are on <a href=\"translation.html\">Words That Do Not Translate</a>.",
            ja:"日本語の木の語彙は大きく、精密である。以下の十語は、本書でも、岐阜で木に携わる人との会話でも、他のどの語よりも頻繁に出てくる。全体は<a href=\"glossary.html\">用語集</a>に、訳しにくい語は<a href=\"translation.html\">訳せない語</a>にある。",
            zh:"日文關於木的詞彙量大而精確。以下十個詞，無論在本書中，或在與岐阜木作從業者的對話中，出現頻率都比其他詞更高。完整詞表見<a href=\"glossary.html\">詞彙表</a>，較難翻譯的詞見<a href=\"translation.html\">翻譯不過去的詞</a>。" } },
        { t:"defs",
          items:[
            { term:{ en:"Masame / itame", ja:"柾目・板目", zh:"柾目・板目" },
              jp:"柾目・板目",
              romaji:"masame, itame",
              def:{
                en:"Quartersawn and flatsawn: straight parallel grain versus flame or cathedral grain. The first is stabler and more expensive; the second is more figured.",
                ja:"柾目はまっすぐな平行の木目、板目は炎状・山形の木目。前者は狂いにくく高価、後者は模様に富む。",
                zh:"柾目（徑切）是筆直平行的紋理，板目（弦切）是火焰狀或山形紋理。前者較穩定也較昂貴，後者紋樣較豐富。" } },
            { term:{ en:"Akami / shirata", ja:"赤身・白太", zh:"赤身・白太" },
              jp:"心材・辺材",
              romaji:"akami, shirata",
              def:{
                en:"Heartwood and sapwood. The heart is darker, dead, and in most species more decay-resistant; the outer band carries sap in the living tree and rots faster.",
                ja:"心材と辺材。心材は色が濃く、生きた細胞をもたず、多くの樹種で腐りにくい。外側の帯は生きた木で樹液を通し、腐りやすい。",
                zh:"心材與邊材。心材顏色較深、已無活細胞，多數樹種較耐腐；外圍的帶狀部分在活樹中負責輸送樹液，較易腐朽。" } },
            { term:{ en:"Fushi", ja:"節", zh:"節" },
              jp:"節",
              romaji:"fushi",
              def:{
                en:"A knot — the base of a branch buried in the trunk. A knot-free face (<em>mubushi</em>) commands a large premium in Japanese building timber, which is why pruning is part of forestry.",
                ja:"節。幹に埋もれた枝の付け根。節のない面（無節）は日本の建築材で大きな値打ちをもち、それが枝打ちが林業の一部である理由である。",
                zh:"節，是埋在樹幹中的枝條基部。無節面在日本建築材中價格高出許多，這也是修枝成為林業一環的原因。" } },
            { term:{ en:"Muku", ja:"無垢", zh:"無垢" },
              jp:"無垢材",
              romaji:"muku",
              def:{
                en:"Solid wood, as opposed to veneer, plywood or laminate. Literally “without stain” — the same word used for innocence.",
                ja:"突板・合板・集成材に対する一枚の木。文字どおりには「けがれのない」の意で、純真を言うのと同じ語である。",
                zh:"實木，相對於薄片、合板或集成材而言。字面意思是「無垢」——與形容純真用的是同一個詞。" } },
            { term:{ en:"Kanso", ja:"乾燥", zh:"乾燥" },
              jp:"乾燥",
              romaji:"kansō",
              def:{
                en:"Drying. <em>Tennen kansō</em> is air-drying in a stack outdoors; <em>jinkō kansō</em> is kiln-drying. The argument between them is one of the oldest in the trade.",
                ja:"乾燥。天然乾燥は屋外で桟積みして乾かすこと、人工乾燥は乾燥機で乾かすこと。両者の論争は業界で最も古いものの一つである。",
                zh:"乾燥。天然乾燥是在戶外堆疊風乾，人工乾燥是以窯乾燥。兩者之爭是業界最古老的爭論之一。" } },
            { term:{ en:"Sozai", ja:"素材", zh:"素材" },
              jp:"素材",
              romaji:"sozai",
              def:{
                en:"In forestry statistics, logs: the raw material that leaves the forest. <em>Sozai seisanryō</em> — log production — is the headline figure for a region's forestry.",
                ja:"林業統計でいう丸太、森から出る原料。素材生産量は、地域の林業を語るときの見出しの数字である。",
                zh:"在林業統計中指原木，即離開森林的原料。「素材生產量」是描述一地林業時最常被引用的數字。" } },
            { term:{ en:"Kanbatsu", ja:"間伐", zh:"間伐" },
              jp:"間伐",
              romaji:"kanbatsu",
              def:{
                en:"Thinning — removing some trees so that the rest have room. A planted forest that is never thinned grows tall, thin and dark, and falls over in storms.",
                ja:"間伐。一部の木を伐って残りに空間を与えること。一度も間伐されない人工林は、細く高く暗く育ち、嵐で倒れる。",
                zh:"疏伐，即移除部分樹木，讓其餘的有生長空間。從未疏伐的人工林會長得又高又細又暗，遇上風暴便會倒伏。" } },
            { term:{ en:"Sashimono", ja:"指物", zh:"指物" },
              jp:"指物",
              romaji:"sashimono",
              def:{
                en:"Cabinetwork made by joining boards with cut joints rather than nails. The word also covers the craft tradition of making chests, stands and small furniture this way.",
                ja:"釘を使わず、刻んだ継手で板を組んでつくる木工。箪笥や台、小家具をそのようにつくる工芸の伝統をも指す。",
                zh:"不用釘子、以切削出的接頭組合木板而成的木作。也指以此法製作櫃子、台座與小家具的工藝傳統。" } },
            { term:{ en:"Tsugite / shiguchi", ja:"継手・仕口", zh:"繼手・仕口" },
              jp:"継手・仕口",
              romaji:"tsugite, shiguchi",
              def:{
                en:"The two families of timber joint: <em>tsugite</em> join two pieces end to end to make a longer one; <em>shiguchi</em> join pieces at an angle. See <a href=\"joinery.html\">Joinery</a>.",
                ja:"材の接合の二系統。継手は二材を端と端でつないで長くし、仕口は材を角度をもって組む。<a href=\"joinery.html\">継手と仕口</a>を参照。",
                zh:"木料接合的兩大類：繼手是將兩材端對端接長，仕口是將木材以角度相交組合。見<a href=\"joinery.html\">榫接</a>。" } },
            { term:{ en:"Takumi", ja:"匠", zh:"匠" },
              jp:"匠",
              romaji:"takumi",
              def:{
                en:"A master craftsman — and, in Gifu, specifically the carpenters of Hida. The word carries more respect than “craftsman” and less mystique than “artist”. See <a href=\"takumi.html\">The Hida Takumi</a>.",
                ja:"熟達した職人。そして岐阜では、とくに飛騨の大工を指す。「職人」より敬意がこもり、「芸術家」ほど神秘めいていない。<a href=\"takumi.html\">飛騨の匠</a>を参照。",
                zh:"技藝精湛的工匠——在岐阜則特指飛驒的木匠。這個詞比「職人」更帶敬意，又不像「藝術家」那般神秘。見<a href=\"takumi.html\">飛驒的匠人</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"howtoread",
      title:{ en:"How the wood chapters are arranged", ja:"木の部の構成", zh:"木之部分的編排" },
      jp:"六部構成",
      body:[
        { t:"p",
          text:{
            en:"These chapters follow the wood. They begin with the place and the people, goes into the forest, follows the felled tree through the timber trade, and then turns to the things made of it — furniture and crafts first, instruments second — before ending with how to live with wood. The journeys, the directory of makers and the reference pages at the end of the book serve these chapters and the rest alike.",
            ja:"木の諸部は木の後を追う。土地と人から始め、森へ入り、伐られた木を追って木材の流通を抜け、そこからつくられるもの——まず家具と工芸、次に楽器——へ向かい、最後に木とともに暮らすことで締めくくる。旅、作り手名鑑、参照用の頁は本書の巻末にまとめた。",
            zh:"木的各部分跟隨木頭前進。從土地與人開始，走進森林，追著伐下的樹穿越木材交易，然後轉向以它做成的東西——先是家具與工藝，再是樂器——最後以如何與木共處作結；旅程、製作者名鑑與參考頁則集中在全書末尾。" } },
        { t:"table",
          caption:{ en:"The six parts", ja:"六つの部", zh:"六個部分" },
          cols:[
            { en:"Part", ja:"部", zh:"部分" },
            { en:"Japanese", ja:"和名", zh:"日文" },
            { en:"What it covers", ja:"扱う内容", zh:"涵蓋內容" }
          ],
          jpCols:[1],
          rows:[
            [
              { en:"The Land of Wood", ja:"木の国", zh:"木之國" },
              "木の国",
              {
                en:"What wood means here, what is commonly got wrong, the Hida carpenters, the history and the people of wood, the sacred trees, ritual, literature, and the words for wood.",
                ja:"この地で木が意味するもの、よくある誤解、飛騨の匠、木の歴史と人物、神木、儀礼、文学、そして木をめぐる言葉。",
                zh:"木在此地的意義、常見的誤解、飛驒匠人、木的歷史與人物、神木、儀禮、文學，以及關於木的語彙。" }
            ],
            [
              { en:"The Forest", ja:"森", zh:"森林" },
              "森",
              {
                en:"What grows in Gifu and why; hinoki, sugi and the broadleaves; how forests are planted and tended; the science of wood from cell to scent.",
                ja:"岐阜に何が育ち、なぜか。ヒノキ、スギ、広葉樹。森はどう植えられ手入れされるか。細胞から香りまでの木の科学。",
                zh:"岐阜長些什麼、為什麼；扁柏、柳杉與闊葉樹；森林如何栽植與撫育；從細胞到香氣的木材科學。" }
            ],
            [
              { en:"Timber", ja:"木材", zh:"木材" },
              "木材",
              {
                en:"Felling, extraction, the old river drives, markets and prices, sawing, drying, grading, engineered wood, building, joinery, tools, the workforce, law and trade.",
                ja:"伐倒、搬出、かつての川狩り、市場と価格、製材、乾燥、規格、エンジニアードウッド、建築、継手仕口、道具、働く人、法と貿易。",
                zh:"伐倒、集運、昔日的河流放木、市場與價格、製材、乾燥、分級、工程木材、建築、榫接、工具、從業者、法規與貿易。" }
            ],
            [
              { en:"Wood Craft", ja:"木の工芸", zh:"木作工藝" },
              "工芸",
              {
                en:"Hida furniture and bentwood; the chair; lacquer and carving; Enkū's Buddhas; the masu; coopering; festival floats; and buildings.",
                ja:"飛騨の家具と曲木、椅子、漆と彫刻、円空仏、枡、桶樽、祭屋台、建築。",
                zh:"飛驒家具與曲木；椅子；漆與雕刻；圓空佛；枡；桶樽；祭典屋台；建築。" }
            ],
            [
              { en:"Sound", ja:"音", zh:"聲音" },
              "音",
              {
                en:"The physics of wood and sound, tonewoods, how a guitar is built and braced, the two great Gifu makers, the luthiers, the industry, rosewood and the law, Japanese instruments.",
                ja:"木と音の物理、音響材、ギターの組み立てと力木、岐阜の二大メーカー、個人製作家、産業、ローズウッドと条約、和楽器。",
                zh:"木與聲音的物理、音木、吉他的製作與音梁、岐阜兩大廠牌、獨立製琴師、產業、玫瑰木與公約、日本樂器。" }
            ],
            [
              { en:"Living with Wood", ja:"木と暮らす", zh:"與木共處" },
              "暮らし",
              {
                en:"Caring for wood, finishes, buying, the wooden house, forests and health, wood education, wood in Taiwan and beyond, wood as fuel.",
                ja:"木の手入れ、仕上げ、選び方、木の家、森と健康、木育、台湾と世界の木、燃料としての木。",
                zh:"木器保養、塗裝、選購、木造住宅、森林與健康、木育、台灣與世界的木、作為燃料的木。" }
            ]
          ] }
      ] },
    { t:"section",
      id:"howtouse",
      title:{ en:"Ways into the wood chapters", ja:"木の部への入り方", zh:"進入木之部分的路徑" },
      jp:"読み方",
      body:[
        { t:"p",
          text:{
            en:"It can be read from the first page to the last, but most readers arrive with one question. Five common starting points follow; each is a short path through the book. The <a href=\"start.html\">Where to Start</a> page has more.",
            ja:"最初から最後まで通して読むこともできるが、たいていの読者は一つの問いを携えてやって来る。よくある五つの入口を示す。いずれも本書を短く抜ける道筋である。詳しくは<a href=\"start.html\">始め方</a>の頁にある。",
            zh:"本書可以從頭讀到尾，但多數讀者是帶著一個問題而來。以下列出五個常見的起點，各是穿越本書的一條短路徑。更多內容見<a href=\"start.html\">從何開始</a>。" } },
        { t:"grid",
          cols:2,
          cells:[
            { h:{ en:"If you are visiting Gifu", ja:"岐阜を訪ねるなら", zh:"若你要造訪岐阜" },
              body:[
                { t:"ol",
                  items:[
                    {
                      en:"<a href=\"provinces.html\">Mino and Hida</a> — to know which side of the mountains you are on",
                      ja:"<a href=\"provinces.html\">美濃と飛騨</a>——山のどちら側にいるのかを知るために",
                      zh:"<a href=\"provinces.html\">美濃與飛驒</a>——弄清你在山的哪一側" },
                    {
                      en:"<a href=\"architecture.html\">Temples, Townhouses &amp; Gasshō</a>",
                      ja:"<a href=\"architecture.html\">社寺・町家・合掌</a>",
                      zh:"<a href=\"architecture.html\">寺社、町家與合掌</a>" },
                    {
                      en:"<a href=\"visiting.html\">Visiting Gifu</a> and <a href=\"woodjourneys.html\">Five Journeys</a>",
                      ja:"<a href=\"visiting.html\">岐阜を訪ねる</a>と<a href=\"woodjourneys.html\">五つの旅</a>",
                      zh:"<a href=\"visiting.html\">造訪岐阜</a>與<a href=\"woodjourneys.html\">五段旅程</a>" }
                  ] }
              ] },
            { h:{ en:"If you make things in wood", ja:"木でものをつくるなら", zh:"若你以木製作" },
              body:[
                { t:"ol",
                  items:[
                    {
                      en:"<a href=\"anatomy.html\">Inside the Wood</a> and <a href=\"moisture.html\">Wood &amp; Water</a>",
                      ja:"<a href=\"anatomy.html\">木材の組織</a>と<a href=\"moisture.html\">木と水分</a>",
                      zh:"<a href=\"anatomy.html\">木材的組織</a>與<a href=\"moisture.html\">木與水分</a>" },
                    {
                      en:"<a href=\"joinery.html\">Joinery</a> and <a href=\"tools.html\">The Carpenter's Tools</a>",
                      ja:"<a href=\"joinery.html\">継手と仕口</a>と<a href=\"tools.html\">大工道具</a>",
                      zh:"<a href=\"joinery.html\">榫接</a>與<a href=\"tools.html\">木匠的工具</a>" },
                    {
                      en:"<a href=\"bentwood.html\">Bentwood</a> and <a href=\"finishes.html\">Finishes</a>",
                      ja:"<a href=\"bentwood.html\">曲木</a>と<a href=\"finishes.html\">塗装と仕上げ</a>",
                      zh:"<a href=\"bentwood.html\">曲木</a>與<a href=\"finishes.html\">塗裝與收尾</a>" }
                  ] }
              ] },
            { h:{ en:"If you play the guitar", ja:"ギターを弾くなら", zh:"若你彈吉他" },
              body:[
                { t:"ol",
                  items:[
                    {
                      en:"<a href=\"sound.html\">Wood &amp; Sound</a> — the physics in plain terms",
                      ja:"<a href=\"sound.html\">木と音</a>——平易な言葉で語る物理",
                      zh:"<a href=\"sound.html\">木與聲音</a>——用平實語言說物理" },
                    {
                      en:"<a href=\"tonewoods.html\">Tonewoods</a> and <a href=\"listening.html\">Can You Hear the Wood?</a>",
                      ja:"<a href=\"tonewoods.html\">音響材</a>と<a href=\"listening.html\">木は聴こえるか</a>",
                      zh:"<a href=\"tonewoods.html\">音木</a>與<a href=\"listening.html\">聽得見木頭嗎</a>" },
                    {
                      en:"<a href=\"takamine.html\">Takamine</a>, <a href=\"yairi.html\">Yairi</a> and <a href=\"guitarcare.html\">Caring for a Guitar</a>",
                      ja:"<a href=\"takamine.html\">タカミネ</a>、<a href=\"yairi.html\">ヤイリ</a>、<a href=\"guitarcare.html\">ギターの手入れ</a>",
                      zh:"<a href=\"takamine.html\">Takamine</a>、<a href=\"yairi.html\">Yairi</a> 與<a href=\"guitarcare.html\">吉他的保養</a>" }
                  ] }
              ] },
            { h:{ en:"If you work on forest policy", ja:"森林政策に携わるなら", zh:"若你從事森林政策" },
              body:[
                { t:"ol",
                  items:[
                    {
                      en:"<a href=\"forests.html\">Gifu's Forests</a> and <a href=\"silviculture.html\">Planting &amp; Tending</a>",
                      ja:"<a href=\"forests.html\">岐阜の森林</a>と<a href=\"silviculture.html\">植えて育てる</a>",
                      zh:"<a href=\"forests.html\">岐阜的森林</a>與<a href=\"silviculture.html\">造林與撫育</a>" },
                    {
                      en:"<a href=\"policy.html\">Forest Law &amp; Policy</a> and <a href=\"workers.html\">The People of the Forest</a>",
                      ja:"<a href=\"policy.html\">森林の法と政策</a>と<a href=\"workers.html\">山で働く人々</a>",
                      zh:"<a href=\"policy.html\">森林法規與政策</a>與<a href=\"workers.html\">山林中的工作者</a>" },
                    {
                      en:"<a href=\"industry.html\">Wood in Numbers</a> and <a href=\"woodfuture.html\">The Next Twenty Years</a>",
                      ja:"<a href=\"industry.html\">木の数字</a>と<a href=\"woodfuture.html\">これからの二十年</a>",
                      zh:"<a href=\"industry.html\">木材的數字</a>與<a href=\"woodfuture.html\">未來二十年</a>" }
                  ] }
              ] }
          ] },
        { t:"note",
          label:{ en:"Three languages", ja:"三つの言語", zh:"三種語言" },
          text:{
            en:"The three versions of this book were written together, not translated one from another. Japanese terms are given in their usual script; romanisation follows modified Hepburn with long vowels marked. Chinese follows Taiwan usage — so <em>hinoki</em> is 扁柏 when the tree is meant botanically, and 檜木 when it is meant as timber, as a Taiwanese carpenter would say it.",
            ja:"本書の三つの版は同時に書かれたものであり、どれかから訳したものではない。日本語の術語は通常の表記で示し、ローマ字は長音記号付きの修正ヘボン式に従う。中国語は台湾の用法に従う——そのためヒノキは植物学的に言うときは「扁柏」、材として言うときは台湾の大工がそう呼ぶように「檜木」と書く。",
            zh:"本書三種版本是同時撰寫，而非彼此翻譯。日文術語以常用寫法呈現；羅馬拼音採加註長音的修正式平文式。中文依台灣用法——因此 hinoki 在植物學意義上寫作「扁柏」，作為木材時則如台灣木匠所說，寫作「檜木」。" } }
      ] },
    { t:"related",
      items:[
        { href:"start.html",
          why:{ en:"Short reading paths for particular interests.", ja:"関心ごとの短い読書案内。", zh:"依不同興趣安排的短閱讀路線。" } },
        { href:"provinces.html",
          why:{
            en:"Mountains, rivers and snow — why Gifu grows what it grows.",
            ja:"山と川と雪——岐阜がなぜそれを育てるのか。",
            zh:"山、河與雪——岐阜為何長出這些。" } },
        { href:"takumi.html",
          why:{ en:"The carpenters who paid their taxes in labour.", ja:"労役で税を納めた大工たち。", zh:"以勞役納稅的木匠們。" } },
        { href:"glossary.html",
          why:{ en:"Every Japanese term in the book, filterable.", ja:"本書の日本語術語すべて。絞り込み可。", zh:"書中所有日文術語，可篩選。" } }
      ] }
  ] };

/* ---- --------------------------------------------- myths */
GIFU.pages["myths"] = { kicker:{ en:"The Land of Wood · 02", ja:"木の国 · 02", zh:"木之國 · 02" },
  title:{ en:"What People Get Wrong", ja:"よく誤解されること", zh:"常見的誤解" },
  jp:"俗説と実際",
  lede:{
    en:"Wood attracts beliefs the way it attracts dust: quietly, over years, and in the corners. Some are wrong; more are half right and applied in the wrong place. This page sets out sixteen of the commonest, from the forest to the guitar shop, says what is true in each, and points to where the book deals with it properly.",
    ja:"木には、埃がたまるように信念がたまる——静かに、年月をかけて、隅のほうに。まったくの誤りもあるが、もっと多いのは半分正しく、当てはめる場所を間違えたものである。この頁では、森から楽器店までのよくある十六の俗説を取り上げ、それぞれのどこが正しいかを述べ、本書のどこで詳しく扱うかを示す。",
    zh:"木頭吸引各種說法，就像吸引灰塵一樣：悄悄地、經年累月地、堆在角落裡。有些說法是錯的；更多的是對了一半，卻被用錯了地方。本頁列出從森林到吉他行最常見的十六則說法，指出各自對在哪裡，並告訴你本書在何處詳細討論。" },
  body:[
    { t:"section",
      id:"forest",
      title:{ en:"About forests", ja:"森について", zh:"關於森林" },
      jp:"森",
      body:[
        { t:"p",
          text:{
            en:"The first set of misunderstandings comes from importing a story about tropical deforestation into a country where the situation is almost the reverse. Japan's problem since the 1980s has not been too much cutting but too little.",
            ja:"最初の一群の誤解は、熱帯林の減少の物語を、状況がほとんど逆の国にそのまま持ち込むことから生まれる。一九八〇年代以降の日本の問題は、伐りすぎではなく、伐らなさすぎであった。",
            zh:"第一類誤解，來自把熱帶森林消失的故事，原封不動搬到一個情況幾乎相反的國家。1980 年代以來，日本的問題不是砍太多，而是砍太少。" } },
        { t:"figure",
          caption:{
            en:"Japan's forest area and growing stock. The area of forest has hardly changed in sixty years — about 25 million hectares, two-thirds of the land — while the volume of wood standing in it has nearly tripled, from about 1.89 billion cubic metres in 1966 to about 5.56 billion in 2022, most of the gain in the planted forests of the post-war decades. Source: Forestry Agency, <em>State of Forest Resources</em>.",
            ja:"日本の森林面積と森林蓄積。森林の面積は六十年でほとんど変わらず、約二千五百万ヘクタール、国土の三分の二である。その一方で立っている木の体積はほぼ三倍になった。一九六六年の約十八・九億立方メートルから二〇二二年の約五十五・六億立方メートルへ。増加の大半は戦後に植えられた人工林による。出典：林野庁「森林資源の現況」。",
            zh:"日本的森林面積與森林蓄積量。六十年來森林面積幾乎沒有變化——約 2,500 萬公頃，占國土三分之二——而林中立木的材積卻增加近三倍，從 1966 年約 18.9 億立方公尺增至 2022 年約 55.6 億立方公尺，增量大多來自戰後數十年間栽植的人工林。資料來源：林野廳《森林資源現況》。" },
          svg:function(lang, L){
            var T = {
              h:{en:"GROWING STOCK · billion m³",ja:"森林蓄積　億m³",zh:"森林蓄積量　億立方公尺"},
              a:{en:"forest area stays ≈ 25 million ha",ja:"森林面積はほぼ一定（約2,500万ha）",zh:"森林面積大致持平（約 2,500 萬公頃）"},
              n:{en:"≈ ×2.9",ja:"約2.9倍",zh:"約 2.9 倍"}
            };
            var pts = [[1966,18.9],[2022,55.6]];
            var s = '<svg viewBox="0 0 760 300" role="img" aria-label="growing stock">';
            s += '<text x="20" y="28" font-family="Georgia,serif" font-size="13" letter-spacing="2" fill="#55504A">'+L(T.h)+'</text>';
            var x0=80, y0=250, xs=560/56, ys=3.4;
            for (var g=0; g<=60; g+=10){
              var gy = y0 - g*ys;
              s += '<line x1="'+x0+'" y1="'+gy+'" x2="'+(x0+600)+'" y2="'+gy+'" stroke="#E1DCD2"/>';
              s += '<text x="'+(x0-10)+'" y="'+(gy+4)+'" text-anchor="end" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?(g/10).toFixed(0)+"":g)+'</text>';
            }
            /* bars for the two anchor years */
            for (var i=0;i<pts.length;i++){
              var px = x0 + (pts[i][0]-1966)*xs + 20, ph = pts[i][1]*ys;
              s += '<rect x="'+(px-26)+'" y="'+(y0-ph)+'" width="52" height="'+ph+'" fill="'+(i?"#E0E6DB":"#F0EDE4")+'" stroke="#B4AC9C"/>';
              s += '<text x="'+px+'" y="'+(y0-ph-8)+'" text-anchor="middle" font-family="Georgia,serif" font-size="15" fill="#201E1B">'+(lang==="en"?(pts[i][1]/10).toFixed(2):pts[i][1].toFixed(1))+'</text>';
              s += '<text x="'+px+'" y="'+(y0+18)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#55504A">'+pts[i][0]+'</text>';
            }
            var ax1 = x0+20+26, ax2 = x0+(56)*xs+20-26;
            s += '<path d="M'+ax1+' '+(y0-18.9*ys-4)+' C '+(ax1+200)+' '+(y0-24*ys)+' '+(ax2-160)+' '+(y0-52*ys)+' '+(ax2-4)+' '+(y0-55*ys)+'" fill="none" stroke="#7C6B52" stroke-width="1.2" stroke-dasharray="5 4"/>';
            s += '<text x="'+((ax1+ax2)/2)+'" y="'+(y0-40*ys)+'" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#7C6B52">'+L(T.n)+'</text>';
            s += '<line x1="'+x0+'" y1="'+(y0+32)+'" x2="'+(x0+600)+'" y2="'+(y0+32)+'" stroke="#8B857C" stroke-dasharray="2 3"/>';
            s += '<text x="'+(x0+300)+'" y="'+(y0+28)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+L(T.a)+'</text>';
            s += '</svg>';
            return s;
          } },
        { t:"defs",
          items:[
            { term:{ en:"1 · “Cutting trees destroys forests.”", ja:"一　「木を伐れば森が壊れる」", zh:"一　「砍樹就會毀掉森林」" },
              jp:"伐採と森林",
              def:{
                en:"In a planted forest the opposite is closer to the truth. Sugi and hinoki were planted at around three thousand stems a hectare on the understanding that most would be removed in successive thinnings and the rest harvested. Where that did not happen, the canopy closed, the floor went dark, the understorey died, the soil began to wash away, and the thin crowded trunks became liable to snap and fall together in storms. The damage in these forests is the damage of neglect. What remains true is that clear-felling steep slopes without replanting causes landslides, and that natural forests are a different matter. See <a href=\"silviculture.html\">Planting &amp; Tending</a>.",
                ja:"人工林では、むしろ逆のほうが真実に近い。スギやヒノキは一ヘクタールあたりおよそ三千本植えられたが、それはその大半を段階的な間伐で除き、残りを収穫することが前提だった。それが行われなかったところでは、林冠が閉じ、林床は暗くなり、下層植生が枯れ、土が流れはじめ、細く混み合った幹は嵐でまとめて折れ倒れやすくなった。こうした森の傷は、放置の傷である。なお正しいのは、急斜面を皆伐して植え戻さなければ山崩れを招くこと、そして天然林は別の話だということである。<a href=\"silviculture.html\">植えて育てる</a>を参照。",
                zh:"在人工林裡，實情幾乎相反。柳杉與扁柏當年以每公頃約三千株的密度栽植，前提是其中大多數會在數次疏伐中移除，其餘則予以收穫。沒有這樣做的地方，林冠閉合、林床變暗、下層植被枯死、土壤開始流失，細瘦擁擠的樹幹在風暴中容易成片折斷倒伏。這類森林所受的傷，是放任的傷。仍然成立的是：在陡坡皆伐而不補植會引發山崩；天然林則另當別論。見<a href=\"silviculture.html\">造林與撫育</a>。" } },
            { term:{ en:"2 · “Japan's forests are shrinking.”", ja:"二　「日本の森は減っている」", zh:"二　「日本的森林正在縮小」" },
              jp:"森林面積",
              def:{
                en:"Forest area has been close to twenty-five million hectares since the 1960s, and the volume of standing timber has almost tripled. What has shrunk is the share of that forest being actively managed, and the number of people managing it. See <a href=\"forests.html\">Gifu's Forests</a>.",
                ja:"森林面積は一九六〇年代以来ほぼ二千五百万ヘクタールで推移し、立木の体積はほぼ三倍になった。減ったのは、そのうち手入れされている森の割合と、それを手入れする人の数である。<a href=\"forests.html\">岐阜の森林</a>を参照。",
                zh:"自 1960 年代以來，森林面積一直接近 2,500 萬公頃，立木材積則增加近三倍。縮小的是其中有人經營的比例，以及經營它的人數。見<a href=\"forests.html\">岐阜的森林</a>。" } },
            { term:{ en:"3 · “A planted forest is a green desert.”", ja:"三　「人工林は緑の砂漠だ」", zh:"三　「人工林是綠色沙漠」" },
              jp:"人工林と生物多様性",
              def:{
                en:"Half right. A dense, unthinned stand of one conifer species of one age supports far less life than a mixed natural forest. But a thinned plantation lets light in, grows an understorey, and becomes considerably richer; and a mosaic of stands of different ages, with broadleaved strips along the streams, can support a great deal. The phrase describes a management failure, not an inevitable property of planting. See <a href=\"ecology.html\">Forest Ecology</a>.",
                ja:"半分正しい。同じ樹齢の針葉樹一種が密に立ち、間伐されない林は、混交した天然林よりはるかに少ない生き物しか支えない。しかし間伐された人工林は光を入れ、下層植生を育て、ずっと豊かになる。樹齢の異なる林分がモザイク状に並び、渓流沿いに広葉樹の帯が残されれば、多くの生き物を支えうる。この言葉が言い表しているのは経営の失敗であって、植えることの避けがたい性質ではない。<a href=\"ecology.html\">森の生態</a>を参照。",
                zh:"對了一半。同齡、單一針葉樹種、密植而未疏伐的林分，所能支持的生物遠少於混生的天然林。但經疏伐的人工林能讓光線進入，長出下層植被，會豐富得多；不同林齡的林分交錯成馬賽克，沿溪保留闊葉樹帶，也能支持大量生物。這句話描述的是經營的失敗，而非栽植本身無可避免的性質。見<a href=\"ecology.html\">森林生態</a>。" } },
            { term:{ en:"4 · “Pollen allergy comes from the wood.”", ja:"四　「花粉症は木材のせいだ」", zh:"四　「花粉症是木材造成的」" },
              jp:"花粉",
              def:{
                en:"It comes from the male cones of mature sugi and hinoki trees. Timber, furniture and houses do not release pollen. The policy response — announced in 2023 — is to cut more of the mature pollen-producing sugi plantations, use the timber, and replant with low-pollen stock: more wood in use, not less. See <a href=\"sugi.html\">Sugi</a>.",
                ja:"花粉は成熟したスギやヒノキの雄花から出る。木材・家具・住宅から花粉は出ない。二〇二三年に示された政策は、花粉を出す成熟スギ人工林の伐採を増やし、その材を使い、花粉の少ない苗で植え替えるというもの——木をより多く使う方向である。<a href=\"sugi.html\">スギ</a>を参照。",
                zh:"花粉來自成熟柳杉與扁柏的雄毬花。木材、家具與房屋並不會釋放花粉。2023 年提出的對策，是增加採伐會產生花粉的成熟柳杉人工林、使用其木材，並改植少花粉的苗木——也就是更多地使用木材，而非更少。見<a href=\"sugi.html\">日本柳杉</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"material",
      title:{ en:"About the material", ja:"素材について", zh:"關於材料" },
      jp:"材",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"5 · “Hardwood is hard, softwood is soft.”", ja:"五　「広葉樹は硬く、針葉樹は柔らかい」", zh:"五　「闊葉樹硬、針葉樹軟」" },
              jp:"硬さ",
              def:{
                en:"The names are botanical. Paulownia, a hardwood, is lighter and softer than any common conifer; Japanese yew, a conifer, is dense enough to carve like ivory. On average hardwoods are denser, which is why the average holds up in a furniture showroom, but it is an average. See <a href=\"properties.html\">Physical Properties</a>.",
                ja:"名は植物学上のものである。広葉樹のキリは、よく使われるどの針葉樹よりも軽く柔らかい。針葉樹のイチイは象牙のように彫れるほど緻密である。平均すれば広葉樹のほうが密度が高く、家具の売り場ではその平均がおおむね通用するが、それはあくまで平均である。<a href=\"properties.html\">物理的性質</a>を参照。",
                zh:"這些名稱是植物學上的。闊葉樹的泡桐比任何常見針葉樹都輕都軟；針葉樹的紫杉則緻密到可以像象牙一樣雕刻。平均而言闊葉樹密度較高，所以在家具展示間裡這個平均大致適用，但它終究只是平均。見<a href=\"properties.html\">物理性質</a>。" } },
            { term:{ en:"6 · “Hinokitiol comes from hinoki.”", ja:"六　「ヒノキチオールはヒノキから採れる」", zh:"六　「檜木醇來自扁柏」" },
              jp:"ヒノキチオール",
              def:{
                en:"The compound was isolated in 1936 by Nozoe Tetsuo at Taihoku Imperial University — from Taiwanese hinoki, which is why it bears the name. Japanese hinoki contains only traces. Commercial hinokitiol comes mostly from hiba (asunaro) oil; the compound is also found in western red cedar. Hinoki's own scent comes from other terpenes. See <a href=\"chemistry.html\">Chemistry &amp; Scent</a>.",
                ja:"この化合物は一九三六年、台北帝国大学の野副鉄男が台湾ヒノキから単離したもので、名はそこから来ている。日本のヒノキには痕跡程度しか含まれない。市販のヒノキチオールは主にヒバ（アスナロ）の油から採られ、ベイスギにも含まれる。ヒノキ自身の香りは別のテルペン類による。<a href=\"chemistry.html\">化学と香り</a>を参照。",
                zh:"這種化合物是 1936 年台北帝國大學的野副鐵男從台灣扁柏中分離出來的，名稱由此而來。日本扁柏只含微量。市售的檜木醇主要萃取自羅漢柏（翌檜）的精油，北美紅側柏中也含有此成分。日本扁柏本身的香氣來自其他萜類。見<a href=\"chemistry.html\">化學與香氣</a>。" } },
            { term:{ en:"7 · “Old wood is dry wood.”", ja:"七　「古材は乾いている」", zh:"七　「老木料一定乾」" },
              jp:"平衡含水率",
              def:{
                en:"Wood keeps trading moisture with the air around it for as long as it exists. A three-hundred-year-old beam in an unheated Takayama farmhouse sits near 15 or 16 per cent moisture in the humid season; a board kiln-dried last month and kept in a heated flat may sit near 8. What matters is not age but equilibrium with the air the wood will live in. See <a href=\"moisture.html\">Wood &amp; Water</a>.",
                ja:"木は存在するかぎり、周囲の空気と水分をやりとりしつづける。暖房のない高山の民家の三百年ものの梁は、湿った季節には含水率十五、六パーセントほどにある。先月人工乾燥して暖房の効いた部屋に置いた板は八パーセントほどかもしれない。問題は年数ではなく、その木が暮らす空気との平衡である。<a href=\"moisture.html\">木と水分</a>を参照。",
                zh:"只要木材存在，就會持續與周圍空氣交換水分。高山無暖氣農舍裡一根三百年的樑，在潮濕季節含水率約在 15 或 16%；上個月才窯乾、放在有暖氣公寓裡的木板，可能只有 8% 左右。重要的不是年代，而是與它將要生活的空氣之間的平衡。見<a href=\"moisture.html\">木與水分</a>。" } },
            { term:{ en:"8 · “Solid wood does not move once it is dry.”", ja:"八　「乾いた無垢材は動かない」", zh:"八　「實木乾了就不會再動」" },
              jp:"狂い",
              def:{
                en:"It moves every season. Across the grain, flatsawn Japanese hardwoods can change width by around a quarter of a per cent for each one per cent change in moisture content; a 40-centimetre tabletop can move several millimetres between a dry winter and a wet summer. Furniture makers design for this — with floating panels, slotted fixings and battens — rather than trying to prevent it. See <a href=\"moisture.html\">Wood &amp; Water</a>.",
                ja:"季節ごとに動く。板目の広葉樹は、含水率が一パーセント変わるごとに幅方向でおよそ〇・二五パーセント前後伸び縮みしうる。四十センチの天板なら、乾いた冬と湿った夏のあいだで数ミリ動く。家具職人はそれを止めようとするのではなく、それを見込んで設計する——鏡板を遊ばせ、留め具に長穴をあけ、吸い付き桟を入れる。<a href=\"moisture.html\">木と水分</a>を参照。",
                zh:"它每一季都在動。弦切的日本闊葉樹，含水率每變化 1%，橫紋方向寬度約可伸縮 0.25% 上下；一張 40 公分寬的桌面，在乾燥的冬天與潮濕的夏天之間可能相差數公釐。家具師傅的做法是順應它來設計——讓鑲板浮動、固定件開長孔、加上吸附式橫檔——而不是試圖阻止它。見<a href=\"moisture.html\">木與水分</a>。" } },
            { term:{ en:"9 · “Wood buildings burn down and wood rots.”", ja:"九　「木の建物は燃えるし腐る」", zh:"九　「木造建築會燒掉、木頭會爛」" },
              jp:"耐火・耐久",
              def:{
                en:"A thin stick burns; a large beam chars on the outside at a fairly predictable rate — well under a millimetre a minute for the conifers — and the char insulates the core, which is why a heavy timber member can keep its strength longer in a fire than an unprotected steel one. As for rot: wood decays when it stays wet, not with age. The oldest wooden buildings in the world, at Hōryūji near Nara, are built of hinoki and are about thirteen centuries old. See <a href=\"building.html\">Building in Wood</a>.",
                ja:"細い棒は燃える。太い梁は外側から、かなり予測どおりの速さで炭化する——針葉樹なら毎分一ミリを十分に下回る——そして炭化層が芯を断熱する。そのため太い木の部材は、被覆のない鋼材より火災のなかで長く強さを保ちうる。腐朽について言えば、木は濡れたままでいると腐るのであって、年月で腐るのではない。世界最古の木造建築である奈良近郊の法隆寺はヒノキで建てられ、千三百年ほどを経ている。<a href=\"building.html\">木で建てる</a>を参照。",
                zh:"細木棍會燒光；粗大的樑則從外側以相當可預測的速度碳化——針葉樹遠低於每分鐘一公釐——而炭化層會隔絕核心，因此粗重的木構件在火災中維持強度的時間，可能比未加保護的鋼材更長。至於腐朽：木頭是在長期潮濕時才會腐朽，而不是因為年代久遠。世界上最古老的木造建築、奈良附近的法隆寺，以扁柏建成，已約一千三百年。見<a href=\"building.html\">以木建造</a>。" } },
            { term:{
                en:"10 · “Ise is rebuilt because the wood wears out.”",
                ja:"十　「伊勢は木が傷むから建て替える」",
                zh:"十　「伊勢神宮重建，是因為木頭壞了」" },
              jp:"式年遷宮",
              def:{
                en:"The buildings would stand far longer than twenty years. The rebuilding is a ritual of renewal — the god moved into a new, pure house — and, not incidentally, the means by which the skills of shrine carpentry, joinery and the supply of great hinoki are handed on, one generation of carpenters to the next. See <a href=\"gods.html\">Trees and the Gods</a>.",
                ja:"社殿は二十年よりはるかに長くもつ。建て替えは再生の儀礼であり——神を清浄な新しい宮へ遷す——そして付け加えれば、宮大工の技、継手仕口、そして大径の檜の供給を、大工の一世代から次の世代へ手渡していく手段でもある。<a href=\"gods.html\">神と木</a>を参照。",
                zh:"社殿能屹立的時間遠遠超過二十年。重建是一種更新的儀式——把神遷入潔淨的新殿——而且，這並非偶然，也是宮大工技藝、榫接工法與大徑檜木供應得以一代木匠傳給下一代的途徑。見<a href=\"gods.html\">神與樹</a>。" } },
            { term:{ en:"11 · “Japanese carpentry uses no nails.”", ja:"十一　「日本の大工は釘を使わない」", zh:"十一　「日本木工不用釘子」" },
              jp:"釘",
              def:{
                en:"The frames of temples, shrines and farmhouses are held together by cut joints, wedges and pegs, and that is the tradition the phrase points at. But Japanese builders have used hand-forged nails for floorboards, roof boards and trim for well over a thousand years, iron cramps (<em>kasugai</em>) for heavy work, and bamboo pegs in thatch. The truth is that the structure does not depend on metal. See <a href=\"joinery.html\">Joinery</a>.",
                ja:"社寺や民家の軸組は、刻んだ継手と楔と込栓で組まれている。この言葉が指しているのはその伝統である。しかし日本の大工は千年をゆうに超えて、床板や野地板や造作に和釘を、重い仕事に鎹を、茅葺には竹釘を使ってきた。正しくは、構造が金物に頼らない、ということである。<a href=\"joinery.html\">継手と仕口</a>を参照。",
                zh:"寺社與民家的軸組，確實以切削的榫接、楔子與木栓固定，這句話指的正是這種傳統。但日本工匠使用手打和釘來固定地板、屋面板與裝修材，已遠超過一千年；重型工程用鐵製的鎹，茅草屋頂用竹釘。正確的說法是：結構不依賴金屬。見<a href=\"joinery.html\">榫接</a>。" } },
            { term:{ en:"12 · “Bamboo is a kind of wood.”", ja:"十二　「竹は木の一種だ」", zh:"十二　「竹子是一種木頭」" },
              jp:"竹",
              def:{
                en:"Bamboo is a grass. It has no cambium and no annual rings, reaches its full height in one season and then only hardens. It appears in this book because it is inseparable from the wooden crafts of Gifu — the ribs of lanterns and umbrellas — not because it is wood. See <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>.",
                ja:"竹はイネ科の植物である。形成層も年輪もなく、一季節で丈を伸ばしきり、あとは硬くなるだけである。本書に竹が出てくるのは、それが岐阜の木の工芸——提灯や傘の骨——と切り離せないからであって、木だからではない。<a href=\"paper.html\">和紙・提灯・和傘</a>を参照。",
                zh:"竹子是禾本科植物。它沒有形成層，也沒有年輪，一季就長到全高，之後只會變硬。它出現在本書，是因為它與岐阜的木作工藝——燈籠與傘的骨架——密不可分，而不是因為它是木頭。見<a href=\"paper.html\">和紙、燈籠與和傘</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"trade",
      title:{ en:"About the trade", ja:"業界について", zh:"關於產業" },
      jp:"流通",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"13 · “Japan imports all its timber.”", ja:"十三　「日本の木はほとんど輸入だ」", zh:"十三　「日本的木材幾乎都靠進口」" },
              jp:"自給率",
              def:{
                en:"It came close. Wood self-sufficiency fell to 18.8% in 2002. It has since more than doubled, to 42.5% in 2024 — and for building timber alone that year, 52.9%. Domestic supply reached about 34.8 million cubic metres. The imported share is still the majority, but the direction of travel has been clear for twenty years. See <a href=\"trade.html\">Trade &amp; Self-Sufficiency</a>.",
                ja:"それに近い時期はあった。木材自給率は二〇〇二年に一八・八%まで下がった。以後は倍以上に戻り、二〇二四年には四二・五%、建築用材に限れば同年五二・九%である。国内供給は約三千四百八十万立方メートルに達した。輸入はなお過半だが、二十年にわたって進む方向ははっきりしている。<a href=\"trade.html\">貿易と自給</a>を参照。",
                zh:"曾經相當接近。木材自給率在 2002 年跌至 18.8%，此後回升一倍以上，2024 年為 42.5%——若只看建築用材，當年為 52.9%。國產供給量約 3,480 萬立方公尺。進口仍占多數，但二十年來的方向很清楚。見<a href=\"trade.html\">貿易與自給</a>。" } },
            { term:{
                en:"14 · “Hida furniture is made from Hida trees.”",
                ja:"十四　「飛騨の家具は飛騨の木でできている」",
                zh:"十四　「飛驒家具用的是飛驒的樹」" },
              jp:"産地と原産",
              def:{
                en:"Sometimes. The regional certification requires that every process after the first sawing takes place in the Hida region; it does not require the tree to have grown there, only that the timber be legal and well chosen. For much of the late twentieth century most Hida furniture was made from imported hardwoods. The recent turn — compressed sugi, small-diameter local broadleaves, beech again — is a deliberate change, not a return to a default. See <a href=\"furniture.html\">Hida Furniture</a>.",
                ja:"そういう場合もある。地域の認証は、最初の製材より後のすべての工程を飛騨地域で行うことを求めるが、木がそこで育ったことは求めない。求めるのは材が合法で、よく選ばれていることである。二十世紀後半の多くの期間、飛騨の家具の大半は輸入広葉樹でつくられていた。近年の転換——圧縮したスギ、地元の小径広葉樹、ふたたびのブナ——は意図された変化であって、元に戻ったのではない。<a href=\"furniture.html\">飛騨の家具</a>を参照。",
                zh:"有時是。地區認證要求第一次鋸材之後的所有工序都在飛驒地區進行；它並不要求樹木生長在那裡，只要求木材合法且經過用心挑選。二十世紀後半的大部分時間裡，飛驒家具多以進口闊葉樹製作。近年的轉向——壓縮柳杉、本地小徑闊葉樹、再度使用山毛櫸——是刻意的改變，而不是回到預設。見<a href=\"furniture.html\">飛驒家具</a>。" } },
            { term:{
                en:"15 · “Air-dried is always better than kiln-dried.”",
                ja:"十五　「天然乾燥は人工乾燥に必ず勝る」",
                zh:"十五　「天然乾燥一定勝過人工乾燥」" },
              jp:"乾燥法",
              def:{
                en:"Each has a price. Slow air-drying keeps colour, oils and scent, and relieves stress gently, but takes months to years and cannot reach the low moisture a heated interior demands. High-temperature kiln-drying is fast and predictable but can darken wood, drive off aromatic compounds and create internal checks in large sections. Most serious makers use both: air-dry first, finish in a kiln. See <a href=\"drying.html\">Drying</a>.",
                ja:"どちらにも代償がある。ゆっくりとした天然乾燥は色と油分と香りを保ち、内部応力をおだやかに抜くが、数か月から数年かかり、暖房された室内が求める低い含水率には届かない。高温の人工乾燥は速く予測可能だが、材を暗色化させ、芳香成分を飛ばし、大断面には内部割れを生じうる。本格的な作り手の多くは両方を使う——まず天然乾燥し、仕上げに乾燥機に入れる。<a href=\"drying.html\">乾燥</a>を参照。",
                zh:"兩者各有代價。緩慢的天然乾燥能保留顏色、油脂與香氣，並溫和地釋放內應力，但需數月乃至數年，而且無法達到暖氣室內所要求的低含水率。高溫人工乾燥快速且可預測，卻可能使木材變暗、逸散芳香成分，並在大斷面材內部造成開裂。多數講究的製作者兩者並用——先天然乾燥，再入窯完成。見<a href=\"drying.html\">乾燥</a>。" } },
            { term:{ en:"16 · “The wood makes the guitar.”", ja:"十六　「ギターの音は木で決まる」", zh:"十六　「吉他的聲音由木頭決定」" },
              jp:"音響材",
              def:{
                en:"The top plate matters a great deal, because it is the part that moves the air. The species of the back and sides matters much less than the price tags suggest, and in controlled blind listening tests players often cannot tell rosewood from mahogany or from laminate at better than chance. The design of the body, the bracing and the precision of the build usually matter more than the species. See <a href=\"listening.html\">Can You Hear the Wood?</a>",
                ja:"表板は大いに効く。空気を動かすのはそこだからである。側板と裏板の樹種は、値札が示すほどには効かず、統制された盲検の聴取試験では、奏者がローズウッドとマホガニー、あるいは合板を偶然以上の確率で聞き分けられないことが多い。胴の設計、力木、組みの精度のほうが、たいていは樹種より効く。<a href=\"listening.html\">木は聴こえるか</a>を参照。",
                zh:"面板影響極大，因為推動空氣的就是它。背側板的樹種，影響遠小於價格標籤所暗示的程度；在嚴格控制的盲聽測試中，演奏者往往無法以高於隨機的準確率分辨玫瑰木、桃花心木或合板。琴身設計、音梁與做工精度，通常比樹種更重要。見<a href=\"listening.html\">聽得見木頭嗎</a>。" } }
          ] },
        { t:"note",
          label:{ en:"Why the half-truths persist", ja:"半分の真実が残る理由", zh:"半真半假的說法為何流傳" },
          text:{
            en:"Most of the beliefs on this page were once good advice in a narrower setting — a village sawyer's rule, a salesman's shorthand, a campaign slogan from another continent — and they survive because they are short. Wood rewards the longer version.",
            ja:"この頁の信念の多くは、かつてはもっと狭い場面での良い助言だった——村の木挽きの心得、売り手の略語、別の大陸の運動の標語——そして短いがゆえに生き残っている。木は、長いほうの説明に報いる。",
            zh:"本頁的說法，大多曾經是某個較狹窄情境裡的好建議——鄉村鋸木匠的經驗法則、推銷員的簡便說法、來自另一個大陸的運動口號——它們之所以流傳，是因為夠短。而木頭，獎賞的是較長的那個版本。" } }
      ] },
    { t:"related",
      items:[
        { href:"silviculture.html",
          why:{ en:"Why a planted forest has to be thinned.", ja:"人工林になぜ間伐が要るのか。", zh:"人工林為何必須疏伐。" } },
        { href:"moisture.html",
          why:{ en:"The physics behind movement and drying.", ja:"狂いと乾燥の背後にある物理。", zh:"木材伸縮與乾燥背後的物理。" } },
        { href:"debates.html", why:{ en:"The arguments that are still open.", ja:"まだ決着していない論争。", zh:"仍未有定論的爭議。" } },
        { href:"listening.html",
          why:{ en:"What blind tests say about tonewood.", ja:"盲検が音響材について語ること。", zh:"盲測對音木說了什麼。" } }
      ] }
  ] };

/* ---- --------------------------------------- woodhistory */
GIFU.pages["woodhistory"] = { kicker:{ en:"The Land of Wood · 03", ja:"木の国 · 03", zh:"木之國 · 03" },
  title:{ en:"A History of Wood", ja:"木の歴史", zh:"木的歷史" },
  jp:"木と人の千三百年",
  lede:{
    en:"The history of wood in Gifu is the history of a region that was too poor in rice to be taxed like its neighbours and too rich in trees to be left alone. States and domains came to it for timber and craftsmen; the people of its mountains learned to live by the axe, the saw and the chisel; and every age — the ritsuryō state, the Owari and Tokugawa forest administrations, the Meiji imperial forests, the post-war planting drive — left a layer that can still be read in the woods and the workshops. This page tells that history in six periods and a long chronology.",
    ja:"岐阜の木の歴史は、隣国のように課税するには米が乏しすぎ、放っておくには木が豊かすぎた地域の歴史である。国家も藩も、木材と職人を求めてここへやって来た。山の人々は斧と鋸と鑿で生きるすべを身につけた。そして律令国家、尾張藩と幕府の山林支配、明治の御料林、戦後の造林——どの時代も層を残し、それはいまも森と工房のなかに読みとれる。この頁は、その歴史を六つの時代と長い年表で語る。",
    zh:"岐阜的木之歷史，是一個米少得無法像鄰國那樣課稅、樹多得又無法被放著不管的地方的歷史。國家與藩國為了木材與工匠而來；山裡的人學會以斧、鋸與鑿為生；而每個時代——律令國家、尾張藩與幕府的山林治理、明治的御料林、戰後的造林運動——都留下一層痕跡，至今仍能在森林與工坊中讀出。本頁以六個時期與一份長年表講述這段歷史。" },
  body:[
    { t:"figure",
      caption:{
        en:"Six periods in the history of wood in Gifu, drawn to scale from 700 to 2030. The early-modern period, when the Owari domain and the shogunate ran the forests as a strategic resource, lasted longer than everything that has happened since.",
        ja:"岐阜の木の歴史の六つの時代を、七〇〇年から二〇三〇年まで縮尺どおりに描いたもの。尾張藩と幕府が森を戦略資源として治めた近世は、それ以後に起きたすべてより長く続いた。",
        zh:"岐阜木之歷史的六個時期，自 700 年至 2030 年依比例繪製。尾張藩與幕府將森林視為戰略資源管理的近世，比其後發生的一切加起來還要長。" },
      svg:function(lang, L){
        var P = [
          { a:700, b:1185, n:{en:"Ancient",ja:"古代",zh:"古代"}, s:{en:"Hida carpenters",ja:"飛騨工",zh:"飛驒匠丁"}, f:"#EDE5D2" },
          { a:1185, b:1586, n:{en:"Medieval",ja:"中世",zh:"中世"}, s:{en:"temples, estates",ja:"寺社と荘園",zh:"寺社與莊園"}, f:"#F0EDE4" },
          { a:1586, b:1868, n:{en:"Early modern",ja:"近世",zh:"近世"}, s:{en:"Owari · shogunate forests",ja:"尾張藩・天領の山林",zh:"尾張藩・天領山林"}, f:"#E0E6DB" },
          { a:1868, b:1945, n:{en:"Modern",ja:"近代",zh:"近代"}, s:{en:"imperial forests",ja:"御料林",zh:"御料林"}, f:"#E0E7E9" },
          { a:1945, b:1990, n:{en:"Post-war",ja:"戦後",zh:"戰後"}, s:{en:"planting drive",ja:"拡大造林",zh:"擴大造林"}, f:"#EADCC1" },
          { a:1990, b:2030, n:{en:"Present",ja:"現代",zh:"現代"}, s:{en:"",ja:"",zh:""}, f:"#EEE1DF" }
        ];
        var M = [[718,{en:"Yōrō code",ja:"養老令",zh:"養老令"}],[1408,{en:"Ankokuji sutra hall",ja:"安国寺経蔵",zh:"安國寺經藏"}],[1708,{en:"Kiso trees barred",ja:"停止木",zh:"停止木"}],[1920,{en:"bentwood chairs",ja:"曲木椅子",zh:"曲木椅"}],[2025,{en:"Ise timber felled",ja:"御用材伐採",zh:"御用材伐採"}]];
        var x0=20, x1=740, a0=700, a1=2030, k=(x1-x0)/(a1-a0);
        function X(y){ return x0+(y-a0)*k; }
        var s = '<svg viewBox="0 0 760 250" role="img" aria-label="periods">';
        s += '<text x="20" y="28" font-family="Georgia,serif" font-size="13" letter-spacing="2" fill="#55504A">'+(lang==="en"?"700 – 2030, TO SCALE":(lang==="ja"?"七〇〇〜二〇三〇年（縮尺どおり）":"700–2030 年（依比例）"))+'</text>';
        var nn=0;
        for (var i=0;i<P.length;i++){
          var xa=X(P[i].a), xb=X(P[i].b);
          s += '<rect x="'+xa+'" y="70" width="'+(xb-xa)+'" height="70" fill="'+P[i].f+'" stroke="#B4AC9C"/>';
          var w = xb-xa;
          if (w>60){
            s += '<text x="'+(xa+8)+'" y="96" font-family="Georgia,serif" font-size="14" fill="#201E1B">'+L(P[i].n)+'</text>';
            s += '<text x="'+(xa+8)+'" y="114" font-family="system-ui,sans-serif" font-size="10" fill="#55504A">'+L(P[i].s)+'</text>';
          } else {
            nn = (nn||0) + 1;
            s += '<text x="'+(xa+w/2)+'" y="'+(nn%2 ? 62 : 48)+'" text-anchor="middle" font-family="Georgia,serif" font-size="11.5" fill="#201E1B">'+L(P[i].n)+'</text>';
          }
        }
        for (var y=800;y<=2000;y+=200){
          s += '<line x1="'+X(y)+'" y1="140" x2="'+X(y)+'" y2="148" stroke="#8B857C"/>';
          s += '<text x="'+X(y)+'" y="162" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+y+'</text>';
        }
        for (var m=0;m<M.length;m++){
          var mx = X(M[m][0]), ly = 190 + (m%2)*24;
          s += '<line x1="'+mx+'" y1="140" x2="'+mx+'" y2="'+(ly-10)+'" stroke="#7C6B52" stroke-dasharray="2 2"/>';
          s += '<circle cx="'+mx+'" cy="140" r="3" fill="#7C6B52"/>';
          var anc = mx>650?"end":(mx<80?"start":"middle");
          s += '<text x="'+mx+'" y="'+ly+'" text-anchor="'+anc+'" font-family="system-ui,sans-serif" font-size="10" fill="#201E1B">'+M[m][0]+' · '+L(M[m][1])+'</text>';
        }
        s += '</svg>';
        return s;
      } },
    { t:"section",
      id:"periods",
      title:{ en:"Six periods", ja:"六つの時代", zh:"六個時期" },
      jp:"時代区分",
      body:[
        { t:"grid",
          cols:2,
          cells:[
            { k:{ en:"c. 700 – 1185", ja:"七〇〇頃〜一一八五", zh:"約 700–1185" },
              h:{ en:"Ancient: carpenters as tax", ja:"古代——税としての大工", zh:"古代：以木匠為稅" },
              jp:"律令",
              d:{
                en:"The ritsuryō codes excuse Hida from the tax in cloth and produce and instead draft its craftsmen — about a hundred a year — to build the palaces and temples of Nara and Heian. Mino, rich and central, pays in the ordinary way and sends paper; the oldest surviving Japanese paper, household registers of 702 in the Shōsōin, was made in Mino.",
                ja:"律令は飛騨の庸と調を免じ、代わりにその工人——毎年およそ百人——を徴して、奈良と平安の宮殿や寺院を建てさせる。豊かで中央に近い美濃は通常どおり納め、紙を送る。現存最古の日本の紙である正倉院の七〇二年の戸籍は、美濃でつくられた。",
                zh:"律令免除飛驒的布帛與物產之稅，改徵其工匠——每年約百人——去營建奈良與平安的宮殿寺院。富庶而居中的美濃照常納稅，並送紙上京；現存最古老的日本紙，是正倉院所藏 702 年的戶籍，產自美濃。" } },
            { k:{ en:"1185 – 1586", ja:"一一八五〜一五八六", zh:"1185–1586" },
              h:{ en:"Medieval: temples and local lords", ja:"中世——寺社と在地の領主", zh:"中世：寺社與在地領主" },
              jp:"中世",
              d:{
                en:"The draft system fades, but the reputation of Hida carpenters does not; they appear as master builders on temple records, including the great lecture hall of Nagataki Hakusan in 1311. The revolving sutra repository of Ankokuji in Takayama — now a National Treasure — dates from this age.",
                ja:"徴発の仕組みは廃れるが、飛騨の大工の名声は廃れない。彼らは寺の記録に棟梁として現れ、一三一一年の長滝白山の大講堂もその一つである。高山の安国寺経蔵——いまは国宝——もこの時代のものである。",
                zh:"徵調制度逐漸消失，但飛驒木匠的名聲沒有；他們以棟樑（總匠）之名出現在寺院紀錄中，包括 1311 年長瀧白山的大講堂。高山安國寺的旋轉經藏——今為國寶——也出自這個時代。" } },
            { k:{ en:"1586 – 1868", ja:"一五八六〜一八六八", zh:"1586–1868" },
              h:{ en:"Early modern: forests as strategy", ja:"近世——戦略としての森", zh:"近世：作為戰略的森林" },
              jp:"尾張藩・天領",
              d:{
                en:"Castle-building on a national scale strips the accessible forests. The Owari domain, given the Kiso forests in 1615, closes them in stages from 1665 and in 1708 bans the cutting of four prized conifers on pain of death — a fifth, nezuko, is added a few years later. The shogunate takes Hida under direct rule in 1692, largely for its timber. Crafts take the forms they still have: Shunkei lacquer, float carving, umbrellas, lanterns.",
                ja:"全国規模の築城が、手の届く森を丸裸にする。一六一五年に木曽の森を与えられた尾張藩は、一六六五年から段階的にそれを閉ざし、一七〇八年には四種の針葉樹の伐採を死罪をもって禁じる（数年後にネズコが加わる）。幕府は一六九二年、主に木材のために飛騨を直轄地とする。工芸はいまに残る形をとる——春慶塗、屋台の彫刻、傘、提灯。",
                zh:"全國規模的築城把容易到達的森林砍得精光。1615 年獲封木曾森林的尾張藩，自 1665 年起分階段封山，1708 年更以死罪禁伐四種珍貴針葉樹（數年後再加入香柏）。幕府於 1692 年將飛驒收為直轄領，主要就是為了木材。各項工藝在此時定型：春慶塗、屋台雕刻、和傘、燈籠。" } },
            { k:{ en:"1868 – 1945", ja:"一八六八〜一九四五", zh:"1868–1945" },
              h:{ en:"Modern: the state takes the forests", ja:"近代——国が森を取る", zh:"近代：國家接收森林" },
              jp:"官林・御料林",
              d:{
                en:"The domains' forests become state forests in 1869 and imperial forests in 1889; villagers lose customary rights, the conflict Shimazaki Tōson would later write into <em>Before the Dawn</em>. The railway and the dam end the river drives. In 1920 a Takayama company bends beech into chairs, and the modern furniture industry of Hida begins.",
                ja:"藩の森は一八六九年に官林、一八八九年に御料林となり、村人は慣行の権利を失う。のちに島崎藤村が『夜明け前』に書き込む葛藤である。鉄道とダムが川狩りを終わらせる。一九二〇年、高山の会社がブナを曲げて椅子にし、飛騨の近代家具産業が始まる。",
                zh:"藩的森林於 1869 年成為官林，1889 年成為御料林；村民失去慣行權利——這正是島崎藤村後來寫進《黎明之前》的衝突。鐵路與水壩終結了河流放木。1920 年，高山一家公司把山毛櫸彎成椅子，飛驒的近代家具產業由此開始。" } },
            { k:{ en:"1945 – 1990", ja:"一九四五〜一九九〇", zh:"1945–1990" },
              h:{ en:"Post-war: the great planting", ja:"戦後——大造林", zh:"戰後：大造林" },
              jp:"拡大造林",
              d:{
                en:"Wartime overcutting leaves bare mountains; floods follow. From the 1950s broadleaf woods are cleared and replanted with sugi and hinoki on a vast scale. Cheap imports arrive from the 1960s and domestic timber prices collapse after 1980, leaving the new plantations unthinned. Meanwhile Hida furniture booms, and two guitar makers settle in Gifu.",
                ja:"戦時の過伐が裸の山を残し、洪水が続く。一九五〇年代から広葉樹林が伐り払われ、スギとヒノキが大規模に植えられる。一九六〇年代から安い輸入材が入り、一九八〇年以降は国産材価格が崩れ、新しい人工林は間伐されぬまま残される。そのあいだに飛騨の家具は隆盛し、二つのギターメーカーが岐阜に根を下ろす。",
                zh:"戰時的過度伐採留下光禿的山，洪水接踵而至。1950 年代起，大規模砍除闊葉林、改植柳杉與扁柏。1960 年代起廉價進口材湧入，1980 年後國產材價格崩跌，新植的人工林多未經疏伐而被棄置。與此同時，飛驒家具蓬勃發展，兩家吉他製造商在岐阜落腳。" } },
            { k:{ en:"1990 – present", ja:"一九九〇〜現在", zh:"1990–至今" },
              h:{ en:"Present: using the forest again", ja:"現在——ふたたび森を使う", zh:"現在：再次利用森林" },
              jp:"利用期",
              d:{
                en:"Self-sufficiency bottoms out in 2002 and then climbs. The planted forests reach harvestable age. Gifu founds a forest academy (2001), a forest-environment tax (2012) and a wood-education centre (2020); new companies turn small broadleaves into furniture; UNESCO lists Mino paper (2014) and the float festivals (2016); and in 2025 Ura-Kiso fells the sacred hinoki for the Ise rebuilding of 2033.",
                ja:"自給率は二〇〇二年に底を打ち、上向く。人工林は伐期に達する。岐阜は森林文化アカデミー（二〇〇一年）、森林・環境税（二〇一二年）、木育の拠点（二〇二〇年）を設け、新しい会社が小径の広葉樹を家具にする。ユネスコは美濃の紙（二〇一四年）と屋台行事（二〇一六年）を登録し、二〇二五年、裏木曽は二〇三三年の伊勢の遷宮のための御用材を伐り出す。",
                zh:"自給率在 2002 年觸底後回升，人工林進入可收穫的林齡。岐阜設立森林文化學院（2001）、森林環境稅（2012）與木育中心（2020）；新創公司把小徑闊葉樹做成家具；聯合國教科文組織登錄美濃紙（2014）與屋台行事（2016）；2025 年，裏木曾為 2033 年的伊勢遷宮伐下御用檜木。" } }
          ] }
      ] },
    { t:"section",
      id:"turns",
      title:{ en:"Three turning points", ja:"三つの転回点", zh:"三個轉捩點" },
      jp:"転換",
      body:[
        { t:"h3", text:{ en:"1692: Hida becomes a timber estate", ja:"一六九二年——飛騨、材木の直轄地となる", zh:"1692 年：飛驒成為木材直轄地" } },
        { t:"p",
          text:{
            en:"For a century after 1586 Hida was ruled by the Kanamori family, who built Takayama as a castle town and patronised the tea master Kanamori Sōwa, in whose household Shunkei lacquer is said to have been born. In 1692 the shogunate moved the family elsewhere and took the province under direct administration, governed from the Takayama Jinya — the only such government office in Japan whose main buildings still stand. The move is usually explained by Hida's timber and minerals. Under the new regime, cutting became a regulated wage economy: in the decade after 1697, forty-eight villages in the upper basins were licensed to cut six to seven hundred thousand <em>kureki</em>, split shingle blanks, for the shogunate. When cutting was cut back, villages that lived by it suffered, and the long Ōhara disturbance of 1771–1789 began partly as a protest over that loss of work.",
            ja:"一五八六年から百年あまり、飛騨は金森氏が治めた。金森氏は高山を城下町として築き、茶人金森宗和を生んだ。その家中で春慶塗が生まれたと伝えられる。一六九二年、幕府は金森氏を移し、飛騨を直轄地とした。治所は高山陣屋——主要な建物がいまも残る、日本で唯一の郡代・代官の役所である。この措置はふつう、飛騨の木材と鉱物によって説明される。新体制のもとで伐採は管理された賃稼ぎとなった。一六九七年からの十年、上流の四十八か村が幕府のために六十万から七十万挺の榑木（割った板材の素材）を伐る許しを得た。伐採が絞られると、それで暮らす村は苦しみ、一七七一年から一七八九年に及ぶ大原騒動は、一部にはその仕事の喪失への抗議として始まった。",
            zh:"1586 年後的一百年間，飛驒由金森家統治；他們將高山建為城下町，並孕育了茶人金森宗和——相傳春慶塗便誕生於其家中。1692 年，幕府將金森家移封他處，把飛驒收為直轄領，由高山陣屋治理——這是日本唯一主要建築仍留存的郡代・代官官署。此舉通常以飛驒的木材與礦產來解釋。新體制下，伐木成了受管制的工資經濟：1697 年起的十年間，上游四十八個村落獲准為幕府伐製六十萬至七十萬挺「榑木」（劈製的板材坯料）。一旦伐採縮減，靠此維生的村落便陷入困頓；1771 至 1789 年漫長的大原騷動，部分正是始於對這份生計喪失的抗議。" } },
        { t:"h3", text:{ en:"1920: beech becomes furniture", ja:"一九二〇年——ブナが家具となる", zh:"1920 年：山毛櫸成為家具" } },
        { t:"p",
          text:{
            en:"Until then, beech was the least valued of the big broadleaves in Hida — it warps, it rots quickly outdoors, and it was fit mainly for charcoal and clogs. What it does superbly is bend. A company founded in Takayama in 1920 with thirty thousand yen of capital and six employees spent two years learning to steam and bend it without wrinkling or cracking, and then began shipping chairs. Within fifteen years it was exporting to the United States. By the post-war decades, when the government's “dining-kitchen” flat plans put tables and chairs into ordinary homes, Hida was one of the places that furnished them. See <a href=\"furniture.html\">Hida Furniture</a>.",
            ja:"それまでブナは、飛騨の大きな広葉樹のなかで最も値打ちの低い木だった。狂い、屋外ではすぐ腐り、炭と下駄くらいにしか向かなかった。ブナが見事にこなすのは、曲がることである。一九二〇年に資本金三万円、従業員六人で高山に設立された会社は、しわも割れも出さずに蒸して曲げることを二年かけて学び、椅子の出荷を始めた。十五年のうちにアメリカへ輸出するようになる。政府の「ダイニングキッチン」の間取りがテーブルと椅子を普通の家に持ち込んだ戦後の数十年、それを備えた土地の一つが飛騨であった。<a href=\"furniture.html\">飛騨の家具</a>を参照。",
            zh:"在那之前，山毛櫸是飛驒大型闊葉樹中最不值錢的——它會變形，在戶外很快腐朽，大多只能燒炭或做木屐。但它有一項絕技：彎曲。1920 年在高山以三萬日圓資本、六名員工創立的一家公司，花了兩年學會把它蒸軟彎曲而不起皺、不開裂，隨後開始出貨椅子。不到十五年，它已外銷美國。戰後數十年間，政府推廣的「餐廚合一」公寓格局把餐桌椅帶進一般家庭，飛驒正是為它們提供家具的地方之一。見<a href=\"furniture.html\">飛驒家具</a>。" } },
        { t:"h3",
          text:{ en:"The 1950s: the planting that became a problem", ja:"一九五〇年代——問題となった植林", zh:"1950 年代：成了問題的造林" } },
        { t:"p",
          text:{
            en:"Post-war reconstruction needed timber faster than the forests could supply it, and the policy of <em>kakudai zōrin</em> — expansive afforestation — replaced large areas of natural and coppice broadleaf woodland with fast-growing conifers. In Gifu the bias ran to hinoki, which fetched more than sugi. The planting was a generational investment that assumed rising timber prices; instead, liberalised imports and a strong yen from the 1970s made domestic logs uncompetitive, and by the 1990s a whole forest estate planted for harvest was going unthinned and unharvested. The forest-environment taxes, the management law of 2019 and the push to use domestic wood are all responses to that inheritance. See <a href=\"silviculture.html\">Planting &amp; Tending</a>.",
            ja:"戦後の復興は森が供給できるより速く木材を必要とし、拡大造林の政策は広い面積の天然林や薪炭林の広葉樹を成長の速い針葉樹に置き換えた。岐阜ではスギより高く売れるヒノキに傾いた。植林は木材価格の上昇を前提とした世代をまたぐ投資だった。ところが一九七〇年代からの輸入自由化と円高で国産丸太は競争力を失い、一九九〇年代には収穫のために植えられた森の全体が、間伐も主伐もされないまま置かれていた。森林環境税、二〇一九年の経営管理法、国産材利用の推進は、いずれもその遺産への応答である。<a href=\"silviculture.html\">植えて育てる</a>を参照。",
            zh:"戰後重建對木材的需求比森林的供給更快，「擴大造林」政策把大片天然林與薪炭闊葉林改植為速生針葉樹。在岐阜，由於扁柏賣價高於柳杉，造林偏向扁柏。這是一項以木材價格上漲為前提、跨世代的投資；然而 1970 年代起的進口自由化與日圓升值，使國產原木失去競爭力，到了 1990 年代，一整片為收穫而種的森林資產，既未疏伐也未收穫。森林環境稅、2019 年的經營管理法與推動國產材利用，都是對這份遺產的回應。見<a href=\"silviculture.html\">造林與撫育</a>。" } }
      ] },
    { t:"related",
      items:[
        { href:"takumi.html", why:{ en:"The carpenters' story in detail.", ja:"匠の物語を詳しく。", zh:"匠人故事的詳細版本。" } },
        { href:"fivetrees.html",
          why:{ en:"How Owari protected the Kiso forests.", ja:"尾張藩はいかに木曽の森を守ったか。", zh:"尾張藩如何保護木曾森林。" } },
        { href:"timberrivers.html",
          why:{ en:"Three centuries of floating logs to Nagoya.", ja:"名古屋へ木を流した三百年。", zh:"三百年來把原木流放到名古屋。" } },
        { href:"chronology.html",
          why:{ en:"Every date in the book, in one list.", ja:"本書のすべての年代を一覧で。", zh:"全書所有年代的一覽。" } }
      ] }
  ] };

/* ---- -------------------------------------------- takumi */
GIFU.pages["takumi"] = { kicker:{ en:"The Land of Wood · 04", ja:"木の国 · 04", zh:"木之國 · 04" },
  title:{ en:"The Hida Takumi", ja:"飛騨の匠", zh:"飛驒的匠人" },
  jp:"ひだのたくみ · 飛騨工 · 匠丁",
  lede:{
    en:"In the early eighth century the Japanese state made an exception for one province. Every other province paid its taxes in rice, cloth and local produce; Hida, too mountainous to grow much of anything, was excused the ordinary levies and paid in carpenters instead. For about four hundred years, a hundred or so craftsmen a year walked from the Hida basins to the capital to raise its palaces and temples. The system ended nearly a thousand years ago; the name it created — <em>Hida no takumi</em>, the master craftsmen of Hida — has never stopped being used. This page describes what the system was, what is known and what is legend, and how the name became the backbone of Hida's woodworking identity.",
    ja:"八世紀のはじめ、日本の国家はひとつの国に例外を設けた。ほかの国はみな米と布と土地の産物で税を納めた。山がちで何を育てるのも難しい飛騨は、通常の租税を免じられ、代わりに大工で納めた。およそ四百年のあいだ、毎年百人ほどの工人が飛騨の盆地から都へ歩いて上り、宮殿や寺院を建てた。その仕組みは千年近く前に終わった。しかしそれが生んだ名——「飛騨の匠」——は、使われなくなったことが一度もない。この頁は、その仕組みが何であったか、何がわかっていて何が伝説なのか、そしてその名がいかにして飛騨の木工の背骨となったのかを述べる。",
    zh:"八世紀初，日本國家為一個國開了例外。其他各國都以稻米、布帛與土產納稅；飛驒山多、難以生產什麼，於是免除了一般的租稅，改以木匠來繳納。大約四百年間，每年約有百名工匠從飛驒的盆地步行上京，為都城營建宮殿與寺院。這套制度在近千年前就已結束；它所創造的名字——「飛驒之匠」——卻從未停止被使用。本頁說明這套制度究竟是什麼、哪些是已知史實而哪些是傳說，以及這個名字如何成為飛驒木工身分認同的脊樑。" },
  body:[
    { t:"section",
      id:"law",
      title:{ en:"The law", ja:"法", zh:"法令" },
      jp:"賦役令斐陀国条",
      body:[
        { t:"p",
          text:{
            en:"The provision survives in the Yōrō code, compiled in 718 and put into force in 757, in the section on taxes and labour service. It is one short sentence. It probably repeats a rule already in the Taihō code of 701, whose text is lost, and some historians trace the arrangement back further still, to the late seventh century.",
            ja:"その規定は、七一八年に編まれ七五七年に施行された養老令の、租税と労役を定める賦役令に残っている。短い一文である。原文の失われた七〇一年の大宝令にすでにあった規則をおそらく繰り返したもので、歴史家のなかにはこの取り決めをさらに七世紀後半にまでさかのぼらせる者もいる。",
            zh:"這項規定保存在 718 年編纂、757 年施行的《養老令》中，位於規範租稅與勞役的〈賦役令〉。只有短短一句。它很可能是重述了原文已佚的 701 年《大寶令》中既有的規則；也有史家將此安排再往前追溯到七世紀後半。" } },
        { t:"quote",
          text:{
            en:"In the province of Hida, both the <em>yō</em> and the <em>chō</em> are to be remitted. From each village unit, ten craftsmen are to be drafted.",
            ja:"凡そ斐陀国は、庸調倶に免ぜよ。里毎に匠丁十人を点ぜよ。",
            zh:"凡斐陀國，庸、調俱免。每里點匠丁十人。" },
          cite:{ en:"Yōrō code, Fuyaku-ryō (taxes and labour), the Hida article", ja:"養老令　賦役令　斐陀国条", zh:"《養老令》〈賦役令〉斐陀國條" } },
        { t:"defs",
          items:[
            { term:{ en:"Yō and chō", ja:"庸と調", zh:"庸與調" },
              jp:"庸・調",
              romaji:"yō, chō",
              def:{
                en:"Two of the three main taxes of the ritsuryō state. <em>Chō</em> was paid in local products — silk, cloth, iron, salt, seaweed; <em>yō</em> was a commutation of labour service paid in cloth or rice. The third, <em>so</em>, was a land tax in rice, and Hida still owed it; but with little paddy land, it was small.",
                ja:"律令国家の三つの主な税のうちの二つ。調は絹・布・鉄・塩・海藻など土地の産物で納め、庸は労役の代わりに布や米で納めた。三つ目の租は田にかかる米の税で、飛騨もこれは負ったが、水田が乏しいため小さかった。",
                zh:"律令國家三大稅中的兩種。「調」以地方物產繳納——絲、布、鐵、鹽、海藻；「庸」是以布或米折抵勞役。第三種「租」是按田課徵的米稅，飛驒仍須繳納，但因水田稀少，數額很小。" } },
            { term:{ en:"Village unit", ja:"里", zh:"里" },
              jp:"里",
              romaji:"ri, sato",
              def:{
                en:"An administrative unit of fifty households under the ritsuryō system, not a natural village. Hida had about ten of them, which is how the figure of roughly a hundred craftsmen a year arises. Four craftsmen were attended by one assistant, a <em>shitei</em>, who cooked and carried.",
                ja:"律令制の五十戸からなる行政単位で、自然の村ではない。飛騨にはおよそ十里あり、毎年およそ百人という数はそこから出てくる。匠丁四人に一人の廝丁がつき、炊事と運搬をした。",
                zh:"律令制下由五十戶構成的行政單位，並非自然村落。飛驒約有十個「里」，每年約百名工匠的數字即由此而來。每四名匠丁另配一名「廝丁」，負責炊煮與搬運。" } },
            { term:{ en:"Craftsman", ja:"匠丁", zh:"匠丁" },
              jp:"匠丁",
              romaji:"shōtei",
              def:{
                en:"A drafted artisan — in practice a carpenter or woodworker — serving a term of one year in the capital. The records of the early ninth century describe a working year of 330 to 350 days, reduced in 819 to 250 to 300 days because so many fell ill.",
                ja:"徴発された工人で、実際には大工や木工。都で一年の任期を務める。九世紀初めの記録は、年に三百三十日から三百五十日の労働を伝え、八一九年には病む者が多いためこれを二百五十日から三百日に減じている。",
                zh:"被徵調的工匠——實際上多為木匠或木作匠——在都城服役一年。九世紀初的紀錄記載一年工作 330 至 350 天，819 年因患病者眾多，減為 250 至 300 天。" } }
          ] }
      ] },
    { t:"section",
      id:"capital",
      title:{ en:"In the capital", ja:"都にて", zh:"在都城" },
      jp:"木工寮・修理職",
      body:[
        { t:"p",
          text:{
            en:"In Nara and then in Heian-kyō the Hida men were assigned to the government's building offices. The <em>Engishiki</em>, the great compilation of procedures completed in 927, puts thirty-seven of them in the Bureau of Carpentry (<em>Mokuryō</em>) and sixty-three in the Office of Repairs (<em>Shurishiki</em>) — one hundred in all. The records attach them to the building of the Ishiyama temple in the 760s, to the palace halls of the new capital in the 790s, and to temple works in both cities. Some, by the account of local histories, rose high: carpenters of Hida origin are said to appear in the ninth-century court annals promoted to the fifth rank, which put them among the aristocracy.",
            ja:"奈良で、ついで平安京で、飛騨の男たちは政府の造営の役所に配された。九二七年に完成した法令細則の大集成『延喜式』は、そのうち三十七人を木工寮に、六十三人を修理職に置く——あわせて百人である。記録は彼らを七六〇年代の石山寺の造営、七九〇年代の新都の殿舎、そして両京の寺院の工事に結びつける。地元の史書によれば、高く昇った者もいる。九世紀の国史には、飛騨出身の大工が五位に叙されたことが見えるとされ、それは貴族の列に入ることを意味した。",
            zh:"在奈良，後來在平安京，飛驒的男人被分派到政府的營造機構。927 年完成的施行細則大全《延喜式》記載，其中 37 人屬「木工寮」、63 人屬「修理職」——共計一百人。紀錄將他們與 760 年代石山寺的營建、790 年代新都的殿舍，以及兩京的寺院工程連結在一起。據地方史書所述，也有人位居高職：九世紀的國史中，據說可見飛驒出身的木匠被敘為五位，躋身貴族之列。" } },
        { t:"figure",
          caption:{
            en:"How the Hida levy worked, as the codes and the <em>Engishiki</em> describe it. Ten craftsmen from each of Hida's village units, with one attendant for every four, served a year in the capital's two building offices. Quotas and terms changed over the four centuries of the system; the numbers here are the ones the documents give.",
            ja:"律令と『延喜式』が記す、飛騨の匠丁制の仕組み。飛騨の各里から匠丁十人、四人ごとに廝丁一人が出て、都の二つの造営の役所で一年を務めた。定員と任期は制度の四百年のあいだに変わった。ここに示す数は文献の伝えるものである。",
            zh:"依律令與《延喜式》所述，飛驒匠丁制的運作方式。飛驒每「里」出匠丁十人，每四人配一名廝丁，赴都城兩個營造機構服役一年。定額與任期在制度存續的四百年間有所變動；此處數字為文獻所載。" },
          svg:function(lang, L){
            var T = {
              hida:{en:"HIDA PROVINCE",ja:"飛騨国",zh:"飛驒國"},
              ri:{en:"≈ 10 village units (里)",ja:"およそ十里",zh:"約十個「里」"},
              x10:{en:"× 10 craftsmen each",ja:"各里より匠丁十人",zh:"每里匠丁十人"},
              att:{en:"+ 1 attendant per 4",ja:"四人ごとに廝丁一人",zh:"每四人配廝丁一人"},
              walk:{en:"one-year term · walk to the capital",ja:"任期一年・徒歩で都へ",zh:"任期一年・步行上京"},
              cap:{en:"THE CAPITAL",ja:"都",zh:"都城"},
              mok:{en:"Bureau of Carpentry",ja:"木工寮",zh:"木工寮"}, mokn:{en:"37",ja:"37人",zh:"37 人"},
              shu:{en:"Office of Repairs",ja:"修理職",zh:"修理職"}, shun:{en:"63",ja:"63人",zh:"63 人"},
              work:{en:"palaces · temples · repairs",ja:"宮殿・寺院・修理",zh:"宮殿・寺院・修繕"},
              src:{en:"Figures: Yōrō code; Engishiki (927)",ja:"数値：養老令、『延喜式』（九二七年）",zh:"數字：養老令、《延喜式》（927 年）"}
            };
            function t(k){ return L(T[k]); }
            var s = '<svg viewBox="0 0 760 320" role="img" aria-label="Hida levy">';
            s += '<rect x="20" y="40" width="230" height="230" fill="#E0E6DB" stroke="#B4AC9C"/>';
            s += '<text x="135" y="68" text-anchor="middle" font-family="Georgia,serif" font-size="14" letter-spacing="2" fill="#201E1B">'+t("hida")+'</text>';
            for (var r=0;r<10;r++){
              var cx = 52 + (r%5)*42, cy = 104 + Math.floor(r/5)*50;
              s += '<rect x="'+(cx-16)+'" y="'+(cy-14)+'" width="32" height="28" fill="#FBFAF7" stroke="#CDC6B9"/>';
              s += '<text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="#55504A">里</text>';
            }
            s += '<text x="135" y="210" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#201E1B">'+t("ri")+'</text>';
            s += '<text x="135" y="228" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#201E1B">'+t("x10")+'</text>';
            s += '<text x="135" y="246" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+t("att")+'</text>';
            /* arrow */
            s += '<path d="M260 155 L470 155" stroke="#7C6B52" stroke-width="1.6"/><path d="M462 149 l8 6 l-8 6" fill="none" stroke="#7C6B52" stroke-width="1.6"/>';
            s += '<text x="365" y="140" text-anchor="middle" font-family="Georgia,serif" font-size="22" fill="#7C6B52">≈ 100</text>';
            s += '<text x="365" y="178" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+t("walk")+'</text>';
            /* capital */
            s += '<rect x="480" y="40" width="260" height="230" fill="#EDE5D2" stroke="#B4AC9C"/>';
            s += '<text x="610" y="68" text-anchor="middle" font-family="Georgia,serif" font-size="14" letter-spacing="2" fill="#201E1B">'+t("cap")+'</text>';
            s += '<rect x="500" y="88" width="105" height="120" fill="#FBFAF7" stroke="#CDC6B9"/>';
            s += '<rect x="615" y="88" width="105" height="120" fill="#FBFAF7" stroke="#CDC6B9"/>';
            s += '<text x="552" y="112" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+t("mok")+'</text>';
            s += '<text x="552" y="160" text-anchor="middle" font-family="Georgia,serif" font-size="28" fill="#201E1B">'+t("mokn")+'</text>';
            s += '<text x="667" y="112" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+t("shu")+'</text>';
            s += '<text x="667" y="160" text-anchor="middle" font-family="Georgia,serif" font-size="28" fill="#201E1B">'+t("shun")+'</text>';
            s += '<text x="610" y="240" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#201E1B">'+t("work")+'</text>';
            s += '<text x="20" y="300" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+t("src")+'</text>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          caption:{ en:"What the documents say, and when", ja:"文献の伝えることと、その年代", zh:"文獻記載了什麼，以及何時" },
          cols:[{ en:"Year", ja:"年", zh:"年" }, { en:"Record", ja:"記録", zh:"紀錄" }],
          numCols:[0],
          rows:[
            [
              "701 / 718",
              {
                en:"The Taihō code (701) probably, and the Yōrō code (718, in force 757) certainly, contain the Hida article.",
                ja:"大宝令（七〇一年）におそらく、養老令（七一八年編、七五七年施行）に確実に斐陀国条がある。",
                zh:"《大寶令》（701）很可能、《養老令》（718 年編，757 年施行）則確定載有斐陀國條。" }
            ],
            [
              "796",
              {
                en:"An edict orders runaway Hida craftsmen to be caught and returned — the first of several.",
                ja:"逃亡した飛騨の匠丁を捕えて戻すよう命じる詔。以後いくつも続く最初のもの。",
                zh:"詔令緝捕逃亡的飛驒匠丁並遣返——此後類似詔令屢見不鮮，這是第一道。" }
            ],
            [
              "811 · 814",
              {
                en:"Penalties for runaways are tightened, and home villages are required to send replacements.",
                ja:"逃亡者への罰が強められ、郷里の村に代わりの者を出すことが求められる。",
                zh:"加重對逃亡者的處罰，並要求其家鄉村落派人遞補。" }
            ],
            [
              "819",
              {
                en:"The working year is cut from 330–350 days to 250–300, because of sickness.",
                ja:"病のため、年間の労働日数が三百三十〜三百五十日から二百五十〜三百日に減じられる。",
                zh:"因疾病之故，每年工作日數從 330–350 天減為 250–300 天。" }
            ],
            [
              "834",
              {
                en:"A notice observes that Hida people can be recognised by their speech and appearance even when they change their names — evidence of how many had settled in the capital.",
                ja:"飛騨の人は名を変えても言葉と姿で見分けられる、と記す通達。それほど多くが都に住みついていたことを示す。",
                zh:"一份告示指出，飛驒人即使改名，也能從言語與外貌認出來——可見有多少人已在都城定居。" }
            ],
            [
              "866 · 881",
              {
                en:"The standing quota is reduced — the figures given are around sixty — as the system weakens.",
                ja:"制度が弱まるなか、常時の定員が減らされる——伝わる数はおよそ六十人。",
                zh:"隨著制度衰退，常駐定額被削減——記載的數字約為六十人。" }
            ],
            [
              "927",
              {
                en:"The <em>Engishiki</em> fixes the establishment at 37 in the Bureau of Carpentry and 63 in the Office of Repairs.",
                ja:"『延喜式』が、木工寮三十七人、修理職六十三人と定める。",
                zh:"《延喜式》定員為木工寮 37 人、修理職 63 人。" }
            ],
            [
              "c. 1100s",
              {
                en:"The draft lapses as the central state's authority fades; Hida carpenters continue as named master builders under private patrons.",
                ja:"中央の権威が衰えるとともに徴発は廃れる。飛騨の大工は、私的な施主のもとで名のある棟梁として働きつづける。",
                zh:"隨中央權威衰退，徵調制度名存實亡；飛驒木匠則以具名棟樑的身分，繼續為私人贊助者效力。" }
            ]
          ] },
        { t:"note",
          label:{ en:"How many went", ja:"何人が上ったか", zh:"一共去了多少人" },
          text:{
            en:"If about a hundred men a year went for four centuries or so, somewhere between forty and fifty thousand journeys were made — the figure Hida's own historians give. It cannot be checked exactly: the quota fell over time, some men served more than once, and many did not come back.",
            ja:"毎年およそ百人が四百年ほど上ったとすれば、上京はのべ四万から五万回になる——飛騨の郷土史家が挙げる数である。正確には確かめようがない。定員は時とともに減り、二度務めた者もおり、戻らなかった者も多い。",
            zh:"若每年約百人、持續四百年左右，上京次數累計約在四萬到五萬之間——這是飛驒本地史家所給的數字。它無法精確核實：定額隨時間減少，有人不只服役一次，也有許多人一去不返。" } }
      ] },
    { t:"section",
      id:"runaways",
      title:{ en:"The men who did not go home", ja:"帰らなかった男たち", zh:"沒有回家的人" },
      jp:"逃亡",
      body:[
        { t:"p",
          text:{
            en:"The most vivid documents about the Hida craftsmen are the ones complaining that they had disappeared. A skilled carpenter in the capital could earn far more working privately for a noble house or a temple than serving out his levy, and the court's repeated edicts — to hunt them down, to punish them, to make their villages send substitutes — tell the story of a labour market the state could not control. The notice of 834, that Hida men could be picked out by their accent and their looks whatever names they took, is an early example of a regional identity being recorded because it was useful to a police officer.",
            ja:"飛騨の匠についてもっとも生々しい文献は、彼らが姿を消したと嘆くものである。都の腕のいい大工は、課役を務めるより、貴族の家や寺のために私的に働くほうがはるかに稼げた。捕えよ、罰せよ、村に代わりを出させよ——朝廷の繰り返しの命令は、国家が統御できない労働市場の物語を語っている。どんな名を名乗っても訛りと姿で飛騨の男を見分けられるという八三四年の通達は、地域の個性が、取り締まる役人に役立つがゆえに記録された早い例である。",
            zh:"關於飛驒匠人最生動的文獻，反而是那些抱怨他們失蹤的紀錄。都城裡手藝好的木匠，私下為貴族或寺院做事所賺的，遠多於服完徭役。朝廷一再下令——追捕他們、懲罰他們、讓他們的村落派人遞補——講述的是一個國家無法掌控的勞動市場。834 年那份告示說，不論飛驒人改用什麼名字，都能從口音與長相認出來；這是地域特質因為對執法官員有用而被記錄下來的早期例子。" } }
      ] },
    { t:"section",
      id:"legend",
      title:{ en:"From record to legend", ja:"記録から伝説へ", zh:"從紀錄到傳說" },
      jp:"説話と物語",
      body:[
        { t:"p",
          text:{
            en:"By the eleventh century the Hida carpenter had become a character. The best-known story, in the <em>Konjaku monogatari</em> collection of about 1120, sets him against the court painter Kudara no Kawanari. The carpenter builds a small hall and invites the painter in; each time Kawanari approaches a door it swings shut and another opens, so he walks round and round and never gets inside. Kawanari takes his revenge by inviting the carpenter to his house, where the carpenter opens a door and recoils from a rotting corpse — painted on the wall. Each has fooled the other with his craft, and they are reconciled. The tale's point is that the Hida carpenter's skill is as uncanny as a painter's illusion.",
            ja:"十一世紀までに、飛騨の大工は物語の登場人物になっていた。もっとも知られた話は一一二〇年ごろの説話集『今昔物語集』にあり、彼を宮廷画家の百済川成と競わせる。大工は小さな堂を建てて絵師を招く。川成が扉に近づくたびにそれは閉まり、別の扉が開くので、ぐるぐる回るばかりで中に入れない。川成は仕返しに大工を自宅に招き、大工は戸を開けて腐った死骸に飛びのく——それは壁に描かれた絵だった。互いに技で相手をあざむき、二人は和解する。飛騨の大工の技は画家の幻術ほどに不思議だ、というのが話の眼目である。",
            zh:"到了十一世紀，飛驒木匠已成了故事裡的角色。最有名的一則，見於約 1120 年的說話集《今昔物語集》，讓他與宮廷畫師百濟川成一較高下。木匠蓋了一座小堂，邀畫師入內；每當川成走近一扇門，門就關上、另一扇門打開，他只能繞著堂打轉，怎麼也進不去。川成為了報復，邀木匠到家中作客，木匠一開門，嚇得往後跳——門內是一具腐爛的屍體，卻原來是畫在牆上的。兩人各以技藝捉弄了對方，最後言歸於好。故事的重點在於：飛驒木匠的技藝，神奇得有如畫師的幻術。" } },
        { t:"p",
          text:{
            en:"The legend grew. The eighth-century Man'yōshū already uses the Hida carpenter's inked line as an image of single-minded devotion (see <a href=\"poetry.html\">Wood in Letters</a>). In the Edo period, Ishikawa Masamochi's illustrated novel <em>Hida no takumi monogatari</em> (1808), with pictures by Katsushika Hokusai, turned a Hida master and his apprentice into wizards who learn their art from immortals and build flying machines. Folk tales across Japan credit “the Hida takumi” with any building too clever to explain, much as they credit the equally legendary Hidari Jingorō with carvings that come to life.",
            ja:"伝説は育った。八世紀の『万葉集』はすでに、飛騨の工の墨縄を一途な思いのたとえとして用いている（<a href=\"poetry.html\">詩歌と文学のなかの木</a>を参照）。江戸時代には、石川雅望の読本『飛騨匠物語』（一八〇八年、葛飾北斎画）が、飛騨の名工とその弟子を、仙人から術を学んで空飛ぶ乗り物をつくる奇人に仕立てた。全国の民話は、説明のつかないほど巧みな建物を何でも「飛騨の匠」の作とする。同じく伝説的な左甚五郎に、動き出す彫刻が帰されるのと同じように。",
            zh:"傳說越長越大。八世紀的《萬葉集》已經用飛驒木匠的墨線，比喻一心一意的專注（見<a href=\"poetry.html\">詩文中的木</a>）。江戶時代，石川雅望的讀本《飛驒匠物語》（1808 年，葛飾北齋繪圖）把一位飛驒名匠與他的徒弟寫成向仙人習得技藝、造出飛行器的奇人。日本各地的民間故事，把任何巧妙得無法解釋的建築都歸功於「飛驒之匠」，正如把會活起來的雕刻歸功於同樣傳奇的左甚五郎。" } },
        { t:"defs",
          items:[
            { term:{ en:"What is documented", ja:"文献で確かなこと", zh:"有文獻可證的" },
              jp:"史実",
              def:{
                en:"The legal exemption and levy; the size of the quota; service in the Bureau of Carpentry and the Office of Repairs; runaways and the edicts against them; named Hida carpenters in court records and on medieval temple inscriptions.",
                ja:"法による免除と徴発。定員の規模。木工寮と修理職での奉仕。逃亡とそれを禁ずる命令。朝廷の記録と中世の寺院の銘文に見える、名のある飛騨の大工。",
                zh:"法定的免稅與徵調；定額規模；在木工寮與修理職的服役；逃亡以及針對逃亡的詔令；宮廷紀錄與中世寺院銘文中具名的飛驒木匠。" } },
            { term:{ en:"What is attributed", ja:"伝承に帰されること", zh:"被歸功於他們的" },
              jp:"伝承",
              def:{
                en:"Specific famous buildings. It is plausible that Hida men worked on many of the great temples of Nara and Kyoto, and documented that they worked on some; claims that a particular pagoda or hall was “built by the Hida takumi” should be read as tradition unless a record is cited.",
                ja:"特定の有名な建物。飛騨の男たちが奈良や京都の大寺院の多くで働いたことはありそうで、いくつかについては働いたと記録にある。だが、ある塔や堂が「飛騨の匠が建てた」という主張は、記録が示されないかぎり伝承として読むべきである。",
                zh:"特定的著名建築。飛驒人參與奈良與京都許多大寺院的營建是合理的推測，其中一些也有紀錄可考；但若說某座塔或某座堂「是飛驒之匠所建」，除非引有紀錄，否則應當作傳說來讀。" } },
            { term:{ en:"What is legend", ja:"伝説であること", zh:"純屬傳說的" },
              jp:"説話",
              def:{
                en:"Halls whose doors open and shut by themselves, flying machines, and carpenters who learned from immortals. These belong to literature, and are no less important for that: they are why the name still sells furniture.",
                ja:"ひとりでに扉が開き閉じる堂、空飛ぶ乗り物、仙人に学んだ大工。これらは文学に属する。だからといって重要でないわけではない——この名がいまも家具を売るのは、そのおかげである。",
                zh:"門扉會自行開闔的堂、飛行器、向仙人學藝的木匠。這些屬於文學，但並不因此而不重要：正因為它們，這個名字至今仍能賣家具。" } }
          ] }
      ] },
    { t:"section",
      id:"afterlife",
      title:{ en:"The name after the system", ja:"制度のあとの名", zh:"制度之後的名字" },
      jp:"継承",
      body:[
        { t:"p",
          text:{
            en:"Hida went on producing carpenters of reputation long after the capital stopped summoning them. The builders of Takayama's merchant houses and the carvers of its festival floats — the Mizuma family, whose four generations from the mid-Edo period worked across the region; Taniguchi Yoroku, the float carver; Kawajiri Jisuke, master carpenter of the Kusakabe house; Nishida Isaburō, who rebuilt the Yoshijima house — are all counted in the tradition. In Hida Furukawa, the carpenters who build the town's houses still sign their work by painting a different white <em>kumo</em>, a cloud motif, on the ends of the eave brackets; about a hundred and seventy distinct patterns are counted in the town, and the Hida Takumi Cultural Hall there, built without nails, carries thirty of them — one for each carpenter who built it.",
            ja:"都が呼び寄せるのをやめたあとも、飛騨は名のある大工を生みつづけた。高山の商家を建てた大工と祭屋台の彫師たち——江戸中期から四代にわたって地域の各地で腕をふるった水間家、屋台の彫師谷口与鹿、日下部家の棟梁川尻治助、吉島家を建て直した西田伊三郎——はみな、この伝統に数えられる。飛騨古川では、町家を建てる大工がいまも、軒下の腕木の先に白い「雲」の模様をそれぞれ描いて、仕事に署名する。町には百七十ほどの異なる雲が数えられ、釘を使わずに建てた飛騨の匠文化館には、建てた大工一人ひとりの三十の雲がある。",
            zh:"都城不再徵召之後，飛驒仍持續孕育出有名望的木匠。建造高山商家的木匠與雕刻祭典屋台的師傅——自江戶中期起四代活躍於各地的水間家、屋台雕師谷口與鹿、日下部家的棟樑川尻治助、重建吉島家的西田伊三郎——都被視為這一傳統的一部分。在飛驒古川，蓋町屋的木匠至今仍在屋簷下支架的端頭，畫上各自不同的白色「雲」紋，作為作品的署名；鎮上約可數出一百七十種不同圖樣，而當地不用一根釘子建成的飛驒匠文化館上，有三十朵雲——代表參與建造的每一位木匠。" } },
        { t:"p",
          text:{
            en:"In the twentieth century the name passed to industry. When Takayama began making bentwood chairs in 1920, it sold them as the work of the Hida takumi; the furniture cooperative now runs a society in the takumi's name devoted to the region's history of making; and in 2016 the Agency for Cultural Affairs recognised Takayama's story — “the skill and spirit of the Hida takumi: thirteen hundred years with wood” — as Japan Heritage, bundling floats, lacquer, carving, furniture and buildings into a single inheritance. Whether a line really runs from an eighth-century draftee to a twenty-first-century chair factory is a question for historians; that the people of Hida believe it does is a fact of its own, and it shapes what they make.",
            ja:"二十世紀には、その名は産業に受け継がれた。一九二〇年に高山が曲木の椅子をつくりはじめたとき、それは飛騨の匠の仕事として売られた。家具の組合はいま、地域のものづくりの歴史を伝える匠の名を冠した学会を運営している。そして二〇一六年、文化庁は高山の物語——「飛騨匠の技・こころ——木とともに、今に引き継ぐ一三〇〇年」——を日本遺産に認定し、屋台・漆・彫刻・家具・建物を一つの遺産にまとめた。八世紀の匠丁から二十一世紀の椅子工場まで本当に一本の線が通っているかは、歴史家の問いである。飛騨の人々がそう信じていることは、それ自体が一つの事実であり、彼らのつくるものを形づくっている。",
            zh:"到了二十世紀，這個名字傳給了產業。1920 年高山開始製作曲木椅時，便以「飛驒之匠」的作品之名出售；家具合作社如今經營一個以匠人為名、致力於地方製作史的學會；2016 年，文化廳將高山的故事——「飛驒匠之技與心：與木同行、傳承至今的一千三百年」——認定為日本遺產，把屋台、漆器、雕刻、家具與建築綁成一份遺產。從八世紀的匠丁到二十一世紀的椅子工廠，是否真有一條線貫穿，是史學家的問題；而飛驒人相信如此，這本身就是一個事實，並形塑了他們所做的東西。" } },
        { t:"related",
          items:[
            { href:"woodhistory.html",
              why:{ en:"Where the takumi fit in the longer story.", ja:"匠が長い歴史のどこに位置するか。", zh:"匠人在更長的歷史中的位置。" } },
            { href:"floats.html",
              why:{ en:"The carpentry and carving of the Takayama floats.", ja:"高山の屋台の大工仕事と彫刻。", zh:"高山屋台的木作與雕刻。" } },
            { href:"architecture.html",
              why:{ en:"Buildings in Hida made in the tradition.", ja:"この伝統でつくられた飛騨の建物。", zh:"依此傳統建成的飛驒建築。" } },
            { href:"furniture.html",
              why:{ en:"How the name passed to the furniture industry.", ja:"名が家具産業に受け継がれた経緯。", zh:"這個名字如何傳給家具產業。" } }
          ] }
      ] }
  ] };

/* ---- ---------------------------------------- woodpeople */
GIFU.pages["woodpeople"] = { kicker:{ en:"The Land of Wood · 05", ja:"木の国 · 05", zh:"木之國 · 05" },
  title:{ en:"People of Wood", ja:"木の人物", zh:"木的人物" },
  jp:"木に生きた人々",
  lede:{
    en:"Most of the people who made the history of wood in Gifu are anonymous: the draftees who walked to Nara, the woodcutters of the Kiso valley, the raftsmen of Nishikori, the sawyers and the bentwood workers whose names are on no label. The people on this page are the exceptions — lords who decided how forests would be used, craftsmen and artists whose names survived, writers who put the forest into literature, and the founders of the companies that carry Gifu's wood to the world. Dates are given where they are documented; where a life is known mainly through tradition, it says so.",
    ja:"岐阜の木の歴史をつくった人々の大半は名を残していない。奈良へ歩いた匠丁、木曽谷の杣、錦織の筏師、どの札にも名の載らない木挽きや曲木の職人たち。この頁の人々はその例外である——森の使い方を決めた領主、名の残った職人と芸術家、森を文学にした書き手、そして岐阜の木を世界へ運ぶ会社の創業者。生没年は記録のあるものを記し、主に伝承によって知られる人物はその旨を記す。",
    zh:"創造岐阜木之歷史的人，大多沒有留下姓名：步行上奈良的匠丁、木曾谷的伐木人、錦織的筏夫、名字不曾出現在任何標籤上的鋸木匠與曲木工。本頁的人物是例外——決定森林如何被利用的領主、名字流傳下來的工匠與藝術家、把森林寫進文學的作家，以及將岐阜之木帶向世界的公司創辦人。有文獻可考者註明生卒年；主要憑傳說而為人所知者，則會註明。" },
  body:[
    { t:"figure",
      caption:{
        en:"Lifetimes of some of the people on this page, drawn to scale from 1500 to 2025. The gap between the carvers of the Edo period and the industrialists of the twentieth century is shorter than it looks: Taniguchi Yoroku died fifty-six years before the first bentwood chair was made in Takayama.",
        ja:"この頁の人物の何人かの生涯を、一五〇〇年から二〇二五年まで縮尺どおりに描いたもの。江戸の彫師と二十世紀の実業家のあいだの隔たりは、見た目より短い。谷口与鹿の死から、高山で最初の曲木椅子がつくられるまで五十六年しかない。",
        zh:"本頁部分人物的生卒年，依 1500 至 2025 年比例繪製。江戶時代的雕師與二十世紀的實業家之間的距離，比看起來的短：谷口與鹿去世後僅五十六年，高山就做出了第一張曲木椅。" },
      svg:function(lang, L){
        var P = [
          { n:{en:"Kanamori Nagachika",ja:"金森長近",zh:"金森長近"}, a:1524, b:1608 },
          { n:{en:"Kanamori Sōwa",ja:"金森宗和",zh:"金森宗和"}, a:1584, b:1656 },
          { n:{en:"Enkū",ja:"円空",zh:"圓空"}, a:1632, b:1695 },
          { n:{en:"Matsuda Sukenaga",ja:"松田亮長",zh:"松田亮長"}, a:1800, b:1871 },
          { n:{en:"Taniguchi Yoroku",ja:"谷口与鹿",zh:"谷口與鹿"}, a:1822, b:1864 },
          { n:{en:"Shimazaki Tōson",ja:"島崎藤村",zh:"島崎藤村"}, a:1872, b:1943 },
          { n:{en:"Nozoe Tetsuo",ja:"野副鉄男",zh:"野副鐵男"}, a:1902, b:1996 },
          { n:{en:"Isamu Noguchi",ja:"イサム・ノグチ",zh:"野口勇"}, a:1904, b:1988 },
          { n:{en:"Yairi Kazuo",ja:"矢入一男",zh:"矢入一男"}, a:1932, b:2014 },
          { n:{en:"Enzo Mari",ja:"エンツォ・マーリ",zh:"恩佐．馬利"}, a:1932, b:2020 },
          { n:{en:"Hayakawa Kennosuke",ja:"早川謙之輔",zh:"早川謙之輔"}, a:1938, b:2005 }
        ];
        var x0=170, x1=740, a0=1500, a1=2025, k=(x1-x0)/(a1-a0);
        function X(y){ return x0+(y-a0)*k; }
        var h = 30 + P.length*22 + 40;
        var s = '<svg viewBox="0 0 760 '+h+'" role="img" aria-label="lifetimes">';
        for (var y=1500;y<=2000;y+=50){
          s += '<line x1="'+X(y)+'" y1="20" x2="'+X(y)+'" y2="'+(h-30)+'" stroke="#E1DCD2" stroke-width="'+(y%100?0.5:1)+'"/>';
          if (y%100===0) s += '<text x="'+X(y)+'" y="'+(h-12)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+y+'</text>';
        }
        s += '<line x1="'+X(1920)+'" y1="20" x2="'+X(1920)+'" y2="'+(h-30)+'" stroke="#7C6B52" stroke-dasharray="3 3"/>';
        s += '<text x="'+(X(1920)-4)+'" y="16" text-anchor="end" font-family="system-ui,sans-serif" font-size="9.5" fill="#7C6B52">1920 · '+(lang==="en"?"bentwood":(lang==="ja"?"曲木":"曲木"))+'</text>';
        for (var i=0;i<P.length;i++){
          var yy = 30 + i*22;
          s += '<text x="'+(x0-8)+'" y="'+(yy+11)+'" text-anchor="end" font-family="Georgia,serif" font-size="12" fill="#201E1B">'+L(P[i].n)+'</text>';
          s += '<rect x="'+X(P[i].a)+'" y="'+(yy+2)+'" width="'+(X(P[i].b)-X(P[i].a))+'" height="12" fill="#EDE5D2" stroke="#A08F73"/>';
        }
        s += '</svg>';
        return s;
      } },
    { t:"section",
      id:"lords",
      title:{ en:"Rulers and administrators", ja:"領主と為政者", zh:"統治者與執政者" },
      jp:"山を治めた人",
      body:[
        { t:"note", label:{ en:"Also in this story", ja:"この話の登場人物", zh:"這段故事中的其他人" }, text:{ en:"Five people who belong to the history of wood are told once, on the general <a href=\"people.html\">People</a> page: Kanamori Nagachika, who took Hida and built Takayama; the wandering carver Enkū, who also has <a href=\"enku.html\">a page of his own</a>; the poets Matsuo Bashō and Shimazaki Tōson; and the monk Taichō of Hakusan. The shogun's intendants who ran Hida's forests from Takayama are on <a href=\"edo.html#hida\">The Edo Patchwork</a>.", ja:"木の歴史に属する五人は、<a href=\"people.html\">人物</a>の頁で一度だけ取り上げる。飛騨を取り高山を築いた金森長近、<a href=\"enku.html\">独立した頁</a>もある遊行の仏師円空、詩人の松尾芭蕉と島崎藤村、そして白山の僧泰澄である。高山から飛騨の山を治めた幕府の代官・郡代は<a href=\"edo.html#hida\">江戸時代の美濃・飛騨</a>で述べる。", zh:"屬於木之歷史的五個人，只在<a href=\"people.html\">人物</a>一頁中介紹一次：取下飛驒並建造高山的金森長近；另有<a href=\"enku.html\">專頁</a>的遊方雕佛僧圓空；詩人松尾芭蕉與島崎藤村；以及白山的僧人泰澄。" } },
        { t:"p",
          text:{
            en:"Forests in Japan have always been political. Whoever held the mountains held the material for castles, temples, ships and bridges, and the rules they made about who could cut what, and when, shaped the forests that exist today.",
            ja:"日本の森は常に政治的だった。山を押さえる者は、城・寺・船・橋の材を押さえた。誰が何をいつ伐ってよいかについて彼らが定めた規則が、いまある森を形づくった。",
            zh:"日本的森林向來帶有政治性。掌握山林的人，就掌握了建城、造寺、造船與架橋的材料；他們所訂下「誰可以在何時砍什麼」的規則，形塑了今日所見的森林。" } },
        { t:"defs",
          items:[
            { term:{ en:"Kanamori Sōwa", ja:"金森宗和", zh:"金森宗和" },
              jp:"かなもり そうわ · 1584–1656",
              def:{
                en:"Born Kanamori Shigechika, grandson of Nagachika, he left Takayama after a quarrel with his father and became one of the most influential tea masters of Kyoto, the founder of the refined Sōwa style. The story of Hida Shunkei lacquer begins with a tray presented to him while still in Takayama; he is also remembered as the patron of the potter Nonomura Ninsei. See <a href=\"shunkei.html\">Hida Shunkei</a>.",
                ja:"長近の孫で、名は金森重近。父との確執から高山を去り、京で最も影響力のある茶人の一人となり、優美な宗和流を開いた。飛騨春慶の物語は、まだ高山にいた彼に献じられた盆から始まる。陶工野々村仁清の後援者としても知られる。<a href=\"shunkei.html\">飛騨春慶</a>を参照。",
                zh:"本名金森重近，為長近之孫。與父親不和而離開高山，成為京都最具影響力的茶人之一，開創了優雅的宗和流。飛驒春慶的故事，始於他仍在高山時獲獻的一只托盤；他也以陶工野野村仁清的贊助者而聞名。見<a href=\"shunkei.html\">飛驒春慶</a>。" } },
            { term:{ en:"The lords of Owari", ja:"尾張徳川家", zh:"尾張德川家" },
              jp:"尾張藩主",
              def:{
                en:"The senior Tokugawa branch house at Nagoya was given the Kiso valley in 1615 and administered it, through the Yamamura family as local intendants, until the Meiji restoration. The early lords used the forests hard; from 1665 the domain began closing them, and the ban of 1708 on the most valuable conifers — enforced with the death penalty, and later extended to five species — is often cited as one of the earliest large-scale forest conservation laws anywhere. The forests of Ura-Kiso on the Gifu side were part of this system. See <a href=\"fivetrees.html\">The Five Trees of Kiso</a>.",
                ja:"名古屋の徳川御三家筆頭は一六一五年に木曽谷を与えられ、代官山村氏を通じて明治維新まで治めた。初期の藩主は森を激しく使ったが、一六六五年から藩は山を閉ざしはじめ、死罪をもって主要な針葉樹の伐採を禁じた一七〇八年の措置（のちに五種に広がる）は、世界的にも早い大規模な森林保護法の一つとしてしばしば挙げられる。岐阜側の裏木曽の森もこの仕組みの一部だった。<a href=\"fivetrees.html\">木曽五木</a>を参照。",
                zh:"名古屋的德川御三家之首於 1615 年獲封木曾谷，透過代官山村氏治理，直到明治維新。早期藩主大量利用森林；自 1665 年起藩開始封山，1708 年以死罪禁伐最珍貴的針葉樹（後來擴及五種），常被列為世界上最早的大規模森林保育法令之一。岐阜一側的裏木曾森林也屬於這套體制。見<a href=\"fivetrees.html\">木曾五木</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"craftsmen",
      title:{ en:"Carvers, carpenters and lacquerers", ja:"彫師・大工・塗師", zh:"雕師、木匠與漆匠" },
      jp:"名を残した職人",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Takahashi Kizaemon and Narita San'emon", ja:"高橋喜左衛門・成田三右衛門", zh:"高橋喜左衛門與成田三右衛門" },
              jp:"春慶の祖 · early 17th c.",
              def:{
                en:"A carpenter and a lacquerer of early seventeenth-century Takayama, remembered by tradition as the makers of the first piece of Shunkei ware. Takahashi, the story goes, split a log of sawara and was struck by the grain of the split face; he made it into a tray, and Narita finished it in a transparent lacquer so that the grain showed through. Nothing else is known of either man.",
                ja:"十七世紀初めの高山の大工と塗師で、伝えでは最初の春慶の器をつくった人。高橋はサワラを割り、その割り肌の木目に心を打たれ、それを盆にした。成田は木目が透けて見えるよう、それを透漆で仕上げた——と語られる。二人についてそれ以上のことは知られていない。",
                zh:"十七世紀初高山的一位木匠與一位漆匠，相傳是第一件春慶器的製作者。故事說高橋劈開一段花柏，為劈裂面的紋理所震撼，便把它做成托盤；成田則以透明漆完成，讓木紋透出來。關於兩人，除此之外一無所知。" } },
            { term:{ en:"The Mizuma family", ja:"水間家", zh:"水間家" },
              jp:"水間相模 · mid-Edo onward",
              def:{
                en:"A Hida family of carvers and temple carpenters who worked across the region for four generations from the middle of the Edo period; the name Mizuma Sagami was carried by successive heads. Carvings on shrines, temples and festival floats are attributed to them, and the builder of the Yoshijima house is counted in their line.",
                ja:"江戸中期から四代にわたり地域の各地で仕事をした飛騨の彫師・宮大工の家。当主は代々水間相模を名乗った。社寺や祭屋台の彫刻が彼らに帰され、吉島家を建てた大工もその系譜に数えられる。",
                zh:"江戶中期起四代活躍於飛驒各地的雕師與宮大工世家，歷代家主皆稱水間相模。許多神社、寺院與祭典屋台上的雕刻被歸於他們名下，建造吉島家的木匠也被列入其流派。" } },
            { term:{ en:"Matsuda Sukenaga", ja:"松田亮長", zh:"松田亮長" },
              jp:"まつだ すけなが · 1800–1871",
              def:{
                en:"A Takayama netsuke carver who developed the practice of carving Japanese yew with bold, faceted cuts and leaving it uncoloured, so that the contrast between red heartwood and cream sapwood did the work of paint. He is regarded as the founder of Ichii Ittōbori. See <a href=\"ittobori.html\">Ichii Ittōbori</a>.",
                ja:"高山の根付師で、イチイを大胆な面取りの刃で彫り、彩色せずに残して、赤い心材と乳白の辺材の対比を絵具の代わりに働かせる手法を育てた。一位一刀彫の祖とされる。<a href=\"ittobori.html\">一位一刀彫</a>を参照。",
                zh:"高山的根付雕師，發展出以大膽的切面刀法雕刻紫杉、不上任何顏色的做法，讓紅色心材與乳白邊材的對比取代顏料。被視為一位一刀雕的創始者。見<a href=\"ittobori.html\">一位一刀雕</a>。" } },
            { term:{ en:"Taniguchi Yoroku", ja:"谷口与鹿", zh:"谷口與鹿" },
              jp:"たにぐち よろく · 1822–1864",
              def:{
                en:"Second son of a family of master carpenters in Takayama, and the most celebrated of the float carvers. His carvings for the Kirin float — a group of Chinese children at play, cut from a single block, with loose-hanging chains carved in the round — and for the Ebisu float are among the best-known pieces of Edo-period wood sculpture outside a temple. At about twenty-nine he left for Kyoto and married into a family in Itami; he died in 1864. See <a href=\"floats.html\">Festival Floats</a>.",
                ja:"高山の大工の棟梁の家の次男で、屋台の彫師のなかで最も名高い。麒麟台の「唐子群遊」——一木から彫り出し、丸彫りの鎖が垂れる——と恵比須台の彫刻は、寺の外にある江戸の木彫のなかで最もよく知られたものに数えられる。二十九歳ごろ京へ出て伊丹の家に入り、一八六四年に没した。<a href=\"floats.html\">祭屋台</a>を参照。",
                zh:"高山木匠棟樑世家的次子，也是最負盛名的屋台雕師。他為麒麟台所作的〈唐子群遊〉——以一整塊木頭雕出、並有圓雕的鎖鏈垂掛——與為惠比須台所作的雕刻，是寺院之外最知名的江戶木雕之一。約二十九歲時前往京都，入贅伊丹的人家；1864 年去世。見<a href=\"floats.html\">祭典屋台</a>。" } },
            { term:{ en:"Kawajiri Jisuke and Nishida Isaburō", ja:"川尻治助・西田伊三郎", zh:"川尻治助與西田伊三郎" },
              jp:"町家の棟梁",
              def:{
                en:"Master carpenters of Takayama's two most admired merchant houses: Kawajiri built the Kusakabe house in 1879, after the fire of 1875; Nishida rebuilt the Yoshijima house next door in 1907. Their open roof spaces — a lattice of great beams under a smoke-darkened ceiling — are the textbook examples of Hida townhouse carpentry. See <a href=\"architecture.html\">Temples, Townhouses &amp; Gasshō</a>.",
                ja:"高山で最も称えられる二軒の商家の棟梁。川尻は一八七五年の大火ののち、一八七九年に日下部家を建て、西田は一九〇七年に隣の吉島家を建て直した。煤けた天井の下に大梁が格子を組む吹き抜けは、飛騨の町家の大工仕事の手本とされる。<a href=\"architecture.html\">社寺・町家・合掌</a>を参照。",
                zh:"高山最受推崇的兩棟商家的棟樑：川尻於 1875 年大火後的 1879 年建造日下部家；西田於 1907 年重建隔壁的吉島家。其挑空空間——被煙燻黑的天花板下，大樑交織成格網——是飛驒町家木作的教科書範例。見<a href=\"architecture.html\">寺社、町家與合掌</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"letters",
      title:{ en:"Writers and artists", ja:"書き手と芸術家", zh:"作家與藝術家" },
      jp:"文と美",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Isamu Noguchi", ja:"イサム・ノグチ", zh:"野口勇" },
              jp:"1904–1988",
              def:{
                en:"The Japanese-American sculptor visited Gifu in 1951, saw the lanterns made there from Mino paper stretched over bamboo, and designed with the lantern maker Ozeki the first of the lamps he called AKARI — a word he explained through its kanji, sun and moon together. The series grew to more than a hundred designs and is still made in Gifu. See <a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>.",
                ja:"日系アメリカ人の彫刻家。一九五一年に岐阜を訪れ、竹に美濃紙を張ったそこの提灯を見て、提灯屋のオゼキとともに、彼がAKARIと名づけた照明の最初のものを設計した。この語を彼は、日と月をあわせた漢字で説明した。シリーズは百を超えるデザインに広がり、いまも岐阜でつくられている。<a href=\"paper.html\">和紙・提灯・和傘</a>を参照。",
                zh:"日裔美籍雕塑家。1951 年造訪岐阜，看見當地以美濃紙糊在竹骨上的燈籠，便與燈籠商 Ozeki 合作設計了他稱為 AKARI 的第一批燈具——他以漢字「明」解釋這個詞：日與月並在一起。此系列後來擴充到一百多款，至今仍在岐阜製作。見<a href=\"paper.html\">和紙、燈籠與和傘</a>。" } },
            { term:{ en:"Hayakawa Kennosuke", ja:"早川謙之輔", zh:"早川謙之輔" },
              jp:"はやかわ けんのすけ · 1938–2005",
              def:{
                en:"A woodworker from Tsukechi, in the hinoki country of Ura-Kiso, who set up his own workshop, Soma Kōbō, in 1969. His ceiling for the Serizawa Keisuke Art Museum in Shizuoka (1981), made at the request of the architect Shirai Seiichi, made his name; his books — <em>Mokkō no hanashi</em> (1993), <em>Mokkō no sekai</em> (1996), a study of the lacquer and woodwork master Kuroda Tatsuaki (2000) and <em>Ki ni manabu</em> (2005) — are among the most read Japanese writing on working wood.",
                ja:"裏木曽の檜の里、付知の木工家。一九六九年に自らの工房、杣工房を開いた。建築家白井晟一の依頼による静岡市立芹沢銈介美術館の天井（一九八一年）で名を知られた。著書『木工のはなし』（一九九三年）、『木工の世界』（一九九六年）、漆と木工の名匠黒田辰秋を論じた書（二〇〇〇年）、『木に学ぶ』（二〇〇五年）は、日本語で書かれた木工の文章のなかで最もよく読まれているものに数えられる。",
                zh:"來自裏木曾檜木之鄉付知的木工家，1969 年創立自己的工坊「杣工房」。他應建築師白井晟一之邀，為靜岡市立芹澤銈介美術館製作的天花板（1981）使他成名；其著作——《木工のはなし》（1993）、《木工の世界》（1996）、論漆藝與木工大師黑田辰秋之書（2000）與《木に学ぶ》（2005）——是日文木工寫作中最廣為閱讀的作品之一。" } }
          ] }
      ] },
    { t:"section",
      id:"industry",
      title:{ en:"Founders and designers", ja:"創業者と設計者", zh:"創辦人與設計師" },
      jp:"産業の人",
      body:[
        { t:"p",
          text:{
            en:"The twentieth century moved the centre of Gifu's woodworking from the individual workshop to the company, and the people who mattered most were those who found markets: exporters, founders, and designers who could make a mass-produced chair feel made by hand.",
            ja:"二十世紀は、岐阜の木工の中心を個人の工房から会社へ移した。そこで最も重要だったのは市場を見つけた人々である——輸出する人、創業する人、量産の椅子を手仕事のように感じさせることのできる設計者。",
            zh:"二十世紀把岐阜木工的重心從個人工坊移到了公司；此時最重要的人，是那些找到市場的人：出口商、創辦人，以及能讓量產椅子摸起來像手工製作的設計師。" } },
        { t:"defs",
          items:[
            { term:{ en:"Yairi Giichi and Yairi Kazuo", ja:"矢入儀市・矢入一男", zh:"矢入儀市與矢入一男" },
              jp:"ヤイリギター · Kazuo 1932–2014",
              def:{
                en:"Giichi left the Suzuki violin works in Nagoya to found his own instrument workshop in 1935, and moved it to Kani in 1945 to escape the bombing. His son Kazuo, born in Nagoya in 1932, joined in 1951, went to the United States in 1962 to study how acoustic guitars were built there, renamed the business Yairi Guitar in 1965 and led it from 1970. He was named a Contemporary Master Craftsman in 2005 and received the Medal with Yellow Ribbon in 2006; he died in 2014. See <a href=\"yairi.html\">Yairi</a>.",
                ja:"儀市は名古屋の鈴木バイオリンを離れて一九三五年に自らの楽器工房を開き、一九四五年に空襲を避けて可児へ移した。一九三二年に名古屋で生まれた子の一男は一九五一年に入社し、一九六二年に渡米してアコースティックギターの造り方を学び、一九六五年に社名をヤイリギターと改め、一九七〇年から率いた。二〇〇五年に現代の名工、二〇〇六年に黄綬褒章。二〇一四年没。<a href=\"yairi.html\">ヤイリ</a>を参照。",
                zh:"儀市離開名古屋的鈴木小提琴廠，於 1935 年創立自己的樂器工坊，1945 年為躲避轟炸遷往可兒。其子一男 1932 年生於名古屋，1951 年入社，1962 年赴美學習當地木吉他的製法，1965 年將公司改名為 Yairi Guitar，1970 年起主持。2005 年獲選「現代名工」，2006 年獲頒黃綬褒章；2014 年辭世。見 <a href=\"yairi.html\">Yairi</a>。" } },
            { term:{ en:"Mass Hirade", ja:"平出益郎（マス・ヒラデ）", zh:"平出益郎（Mass Hirade）" },
              jp:"タカミネ",
              def:{
                en:"A luthier who joined the young Takamine company in Sakashita in 1968, introduced design and production improvements, and became its president in the 1970s. Under him the company developed its under-saddle pickup (1978) and turned from a domestic classical-guitar maker into an international acoustic-electric brand. See <a href=\"takamine.html\">Takamine</a>.",
                ja:"一九六八年に坂下の若いタカミネに入った製作家で、設計と生産に改良をもたらし、一九七〇年代に社長となった。彼のもとで同社はサドル下のピックアップ（一九七八年）を開発し、国内のクラシックギター製作所から、国際的なエレクトリック・アコースティックの銘柄へと変わった。<a href=\"takamine.html\">タカミネ</a>を参照。",
                zh:"1968 年加入坂下年輕的 Takamine 公司的製琴師，帶來設計與生產上的改良，並於 1970 年代出任社長。在他任內，公司研發出琴橋下拾音器（1978），從國內古典吉他製造商轉型為國際性的插電木吉他品牌。見 <a href=\"takamine.html\">Takamine</a>。" } },
            { term:{ en:"Inamoto Tadashi", ja:"稲本正", zh:"稻本正" },
              jp:"オークヴィレッジ",
              def:{
                en:"A physics researcher at Rikkyō University who, with four companions, moved to Kiyomi near Takayama in 1974, trained in woodworking at the local technical school, and founded Oak Village — a workshop that set out to make everything “from bowls to buildings” in domestic solid wood, and to plant trees in return, on the principle that a tree that took a hundred years to grow should make something that lasts a hundred years. He has written widely on forests and wood culture.",
                ja:"立教大学の物理の研究者で、一九七四年に四人の仲間とともに高山近郊の清見に移り、地元の技術専門校で木工を学び、オークヴィレッジを創設した。国産の無垢材で「お椀から建物まで」をつくり、見返りに木を植えるという工房で、百年かかって育った木は百年使えるものにするという考えに立つ。森と木の文化について多くを書いている。",
                zh:"立教大學的物理研究者，1974 年與四位夥伴移居高山近郊的清見，在當地技術專門學校學習木工，並創立 Oak Village——一座立志以國產實木製作「從碗到建築」一切事物、並以植樹回報的工坊，其信念是：花一百年長成的樹，應當做成能用一百年的東西。他撰寫了大量關於森林與木文化的著作。" } },
            { term:{ en:"Enzo Mari", ja:"エンツォ・マーリ", zh:"恩佐．馬利" },
              jp:"1932–2020",
              def:{
                en:"The Italian designer signed a contract with Hida Sangyō in 2003 and designed for it the HIDA series of solid-wood furniture, shown at the Milan Triennale in 2005 — a collaboration that helped reposition the company as a design house and brought Hida furniture back to European attention. Mari died in 2020, the year of Hida Sangyō's centenary.",
                ja:"イタリアの設計者。二〇〇三年に飛騨産業と契約し、無垢材の家具HIDAシリーズを手がけ、二〇〇五年のミラノ・トリエンナーレで発表した。この協働は同社をデザインの会社として位置づけ直し、飛騨の家具をふたたびヨーロッパの目に触れさせた。マーリは飛騨産業創業百年の二〇二〇年に没した。",
                zh:"義大利設計師，2003 年與飛驒產業簽約，為其設計實木家具 HIDA 系列，2005 年於米蘭三年展發表——這次合作幫助公司重新定位為設計品牌，也讓飛驒家具重新受到歐洲矚目。馬利於 2020 年辭世，正是飛驒產業創業百年之年。" } },
            { term:{ en:"Ōhashi Mune and Ōhashi Hiroyuki", ja:"大橋ムネ・大橋博行", zh:"大橋ムネ與大橋博行" },
              jp:"大橋量器",
              def:{
                en:"Mune founded the masu maker Ōhashi Ryōki in Ōgaki in 1950 — a rare woman founder in a craft industry. Hiroyuki, who joined in 1993 after working in computing, found the company last of seven in the town with sales that had halved; by accepting the odd requests others refused — coloured masu, octagonal masu, printed masu — he turned it into one of the leading makers in the town. See <a href=\"masu.html\">The Masu of Ōgaki</a>.",
                ja:"ムネは一九五〇年に大垣で枡の製造元、大橋量器を創業した。工芸の業界では稀な女性の創業者である。情報処理の仕事を経て一九九三年に入った博行は、町の七社中最下位で売上が半減していた会社を目にし、他社が断る風変わりな注文——色枡、八角の枡、名入れの枡——を引き受けることで、町を代表する枡屋の一つに育てた。<a href=\"masu.html\">大垣の枡</a>を参照。",
                zh:"大橋ムネ於 1950 年在大垣創立枡製造商大橋量器——在工藝業界是少見的女性創辦人。博行在從事資訊工作後於 1993 年入社，當時公司在鎮上七家同業中敬陪末座、營收腰斬；他接下同行拒絕的古怪訂單——彩色枡、八角枡、印字枡——把公司帶成鎮上主要的枡廠之一。見<a href=\"masu.html\">大垣的枡</a>。" } },
            { term:{ en:"Nakashima Norio", ja:"中島紀于", zh:"中島紀于" },
              jp:"中島工務店",
              def:{
                en:"Head of Nakashima Kōmuten in Kashimo, a builder founded in 1956 in the village that supplies the Ise timber. Under him the firm grew into a group that fells, saws, builds houses, public buildings and shrines from Tōnō hinoki, and runs farms and food businesses, on the argument that a depopulating mountain village has to keep every stage of the work — and every job — at home.",
                ja:"伊勢の御用材を出す村、加子母で一九五六年に創業した中島工務店の代表。彼のもとで同社は、東濃ひのきを伐り、挽き、住宅・公共建築・社寺を建て、農業や食品の事業まで営むグループになった。人の減る山村は、仕事のあらゆる段階——そしてあらゆる雇用——を地元に留めなければならない、という考えによる。",
                zh:"加子母中島工務店的負責人；該公司 1956 年創立於供應伊勢御用材的村落。在他主持下，公司發展成一個集團：伐木、製材，以東濃檜木興建住宅、公共建築與寺社，甚至經營農業與食品事業——理由是人口流失的山村，必須把工作的每一個環節、以及每一份工作，都留在本地。" } }
          ] }
      ] },
    { t:"section",
      id:"science",
      title:{ en:"Scholars and teachers", ja:"研究者と教育者", zh:"學者與教育者" },
      jp:"知の人",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Nozoe Tetsuo", ja:"野副鉄男", zh:"野副鐵男" },
              jp:"のぞえ てつお · 1902–1996",
              def:{
                en:"An organic chemist at Taihoku Imperial University in Taipei, who in 1936 isolated hinokitiol from the wood of Taiwanese hinoki and went on to show that it contained a seven-membered aromatic ring — a founding contribution to the chemistry of non-benzenoid aromatic compounds, for which he became one of Japan's most honoured scientists. The Taiwanese forests that supplied Japan's shrines supplied his samples. See <a href=\"taiwan.html\">Wood in Taiwan</a>.",
                ja:"台北の台北帝国大学の有機化学者。一九三六年に台湾ヒノキの材からヒノキチオールを単離し、それが七員環の芳香環をもつことを示した。非ベンゼン系芳香族化学の礎を築く仕事であり、彼は日本で最も顕彰された科学者の一人となった。日本の社殿に木を送った台湾の森が、彼の試料を送った。<a href=\"taiwan.html\">台湾と木</a>を参照。",
                zh:"台北帝國大學的有機化學家，1936 年自台灣扁柏的木材中分離出檜木醇，並證明其含有七員芳香環——這是非苯系芳香族化學的奠基性貢獻，他也因此成為日本最受推崇的科學家之一。為日本神社供應木材的台灣森林，也為他供應了樣本。見<a href=\"taiwan.html\">台灣與木</a>。" } },
            { term:{ en:"The teachers of the Forest Academy", ja:"森林文化アカデミーの教員たち", zh:"森林文化學院的教師們" },
              jp:"美濃市",
              def:{
                en:"Since 2001 the prefectural Forest Academy in Mino, reorganised from the old forestry college, has trained foresters, timber-frame builders, furniture makers and environmental educators side by side in two-year courses — an institutional statement that forest, material and making are one subject. Its president has been the landscape architect Wakui Shirō. See <a href=\"learning.html\">How People Learn It</a>.",
                ja:"二〇〇一年以来、旧林業短期大学校を改組した美濃市の県立森林文化アカデミーは、林業家、木造建築の大工、家具職人、環境教育者を、二年の課程で並べて育ててきた。森と材とものづくりが一つの主題であるという、制度としての宣言である。学長は造園家の涌井史郎が務めてきた。<a href=\"learning.html\">人はいかに学ぶか</a>を参照。",
                zh:"自 2001 年起，由舊林業短期大學校改組而成、位於美濃市的縣立森林文化學院，以兩年制課程同時培育林業人員、木構建築工匠、家具師傅與環境教育者——這是一項制度上的宣言：森林、材料與製作是同一門學問。學院長由景觀建築師涌井史郎擔任。見<a href=\"learning.html\">人們如何學會它</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"trades",
      title:{ en:"The trades without names", ja:"名のない職", zh:"沒有名字的行當" },
      jp:"山と木の職",
      body:[
        { t:"p",
          text:{
            en:"For every named craftsman there were thousands whose names were never written down. The words for their trades survive, and many of them are still in use.",
            ja:"名の残った職人一人に対し、名の書き留められなかった者が何千といた。その職の名は残り、多くはいまも使われている。",
            zh:"每一位留下名字的工匠背後，都有成千上萬從未被記下名字的人。他們行當的名稱流傳了下來，其中許多至今仍在使用。" } },
        { t:"table",
          caption:{ en:"Trades of the forest and the workshop", ja:"山と工房の職", zh:"山林與工坊的行當" },
          cols:[
            { en:"Trade", ja:"職", zh:"行當" },
            { en:"Japanese", ja:"和名", zh:"日文" },
            { en:"What they did", ja:"仕事", zh:"工作內容" }
          ],
          jpCols:[1],
          rows:[
            [
              { en:"Feller", ja:"杣", zh:"伐木人" },
              "杣・杣人",
              {
                en:"Felled and trimmed trees in the mountains; the Kiso fellers' three-cut method survives in the Ise ceremonies.",
                ja:"山で木を伐り、枝を払った。木曽の杣の三ツ緒伐りは伊勢の神事に残る。",
                zh:"在山中伐木、修枝；木曾伐木人的「三緒伐」至今保存在伊勢的神事中。" }
            ],
            [
              { en:"Pit sawyer", ja:"木挽", zh:"大鋸匠" },
              "木挽",
              {
                en:"Sawed logs into boards and beams by hand with the great two-handed <em>maebiki</em> saw, before sawmills; a few still work, for temple restorations.",
                ja:"製材所ができる前、大きな前挽大鋸で丸太を板や角材に挽いた。社寺の修理のためにいまも数人がいる。",
                zh:"在製材廠出現之前，以雙手握持的大型「前挽大鋸」將原木鋸成木板與方材；至今仍有少數人為寺社修復而從事此業。" }
            ],
            [
              { en:"Raftsman", ja:"筏師", zh:"筏夫" },
              "筏師・川並",
              {
                en:"Drove logs down the rivers and assembled them into rafts at yards such as Nishikori, steering them to Nagoya and Kuwana.",
                ja:"川で木を流し、錦織などの綱場で筏に組み、名古屋や桑名へ操った。",
                zh:"在河上流放原木，於錦織等綱場編成木筏，撐運至名古屋與桑名。" }
            ],
            [
              { en:"Woodturner", ja:"木地師", zh:"木地師" },
              "木地師・木地屋",
              {
                en:"Itinerant turners who moved through the mountains making bowls and trays on the lathe, claiming by tradition an ancient licence, traced to Prince Koretaka, to cut trees freely high in the mountains.",
                ja:"山から山へ移りながら轆轤で椀や盆をつくった漂泊の挽物師。伝えでは、惟喬親王に由来するという、山の上部の木を自由に伐る古い免許をもつとされた。",
                zh:"在山間遷徙、以轆轤車製碗盤的流動旋木匠；依傳說，他們持有源自惟喬親王、可在高山上部自由伐木的古老特許。" }
            ],
            [
              { en:"Shrine and temple carpenter", ja:"宮大工", zh:"宮大工" },
              "宮大工",
              {
                en:"Built and repaired religious buildings with traditional joinery; the Ise rebuilding and the Hida tradition sustain the skill.",
                ja:"伝統の継手仕口で宗教建築を建て、直した。伊勢の遷宮と飛騨の伝統がこの技を支える。",
                zh:"以傳統榫接工法建造與修繕宗教建築；伊勢遷宮與飛驒傳統延續了這門技藝。" }
            ],
            [
              { en:"Joiner", ja:"指物師・建具師", zh:"指物師與建具師" },
              "指物師・建具師",
              {
                en:"Made furniture boxes and stands (<em>sashimono</em>) and sliding doors and screens (<em>tategu</em>) with cut joints; Takayama's post-war joinery school began as a <em>tategu</em> training centre in 1946.",
                ja:"刻んだ継手で箱物や台（指物）、戸や障子（建具）をつくった。高山の戦後の木工の学校は、一九四六年に建具の補導所として始まった。",
                zh:"以切削榫接製作箱櫃台座（指物）與拉門隔扇（建具）；高山戰後的木工學校，正是 1946 年以建具訓練所起家。" }
            ],
            [
              { en:"Cooper", ja:"桶屋・樽屋", zh:"桶匠" },
              "桶屋・樽屋",
              {
                en:"Made buckets, tubs and sake barrels from staves bound with bamboo hoops.",
                ja:"竹の箍で締めた側板から、桶・盥・酒樽をつくった。",
                zh:"以竹箍束緊的桶板，製作水桶、澡盆與酒樽。" }
            ],
            [
              { en:"Lacquerer", ja:"塗師", zh:"漆匠" },
              "塗師",
              {
                en:"Prepared and applied urushi; in Takayama, the Shunkei lacquerers keep their own recipes for the transparent finish.",
                ja:"漆を調え、塗った。高山の春慶の塗師は、透けた仕上げのための独自の調合を守る。",
                zh:"調製並塗布漆料；在高山，春慶漆匠守著各自透明塗層的配方。" }
            ],
            [
              { en:"Boatwright", ja:"船大工", zh:"造船匠" },
              "船大工",
              {
                en:"Built the flat-bottomed wooden boats of the rivers, including the cormorant-fishing boats of the Nagara, still made of wood.",
                ja:"川の平底の木造船をつくった。長良川の鵜舟もその一つで、いまも木で造られる。",
                zh:"建造河川用的平底木船，包括至今仍以木打造的長良川鸕鶿舟。" }
            ]
          ] }
      ] },
    { t:"related",
      items:[
        { href:"takumi.html",
          why:{ en:"The anonymous carpenters behind the named ones.", ja:"名のある者の背後にいる無名の大工たち。", zh:"具名者背後的無名木匠。" } },
        { href:"poetry.html",
          why:{ en:"What the writers on this page actually wrote.", ja:"この頁の書き手が実際に書いたこと。", zh:"本頁作家實際寫了什麼。" } },
        { href:"furniture.html",
          why:{ en:"The founders of Hida's furniture industry.", ja:"飛騨の家具産業の創業者たち。", zh:"飛驒家具產業的創辦者們。" } },
        { href:"takamine.html",
          why:{ en:"The people behind Gifu's guitars.", ja:"岐阜のギターの背後にいる人々。", zh:"岐阜吉他背後的人們。" } }
      ] }
  ] };

/* ---- ---------------------------------------------- gods */
GIFU.pages["gods"] = { kicker:{ en:"The Land of Wood · 06", ja:"木の国 · 06", zh:"木之國 · 06" },
  title:{ en:"Trees and the Gods", ja:"神と木", zh:"神與樹" },
  jp:"神木 · 山の神 · 御用材",
  lede:{
    en:"In Japan a tree can be a place where a god comes to rest, a timber can be too sacred to be cut except by ritual, and a felled trunk can be thanked before it is carried away. None of this is a curiosity preserved for tourists: it governs how the timber for the Ise shrines is cut in the forests of Gifu to this day, how woodcutters behave on certain days of the month, and why a great cedar with half its trunk dead is still wrapped in rope. This page describes the religious life of trees in Gifu, from the mountain god to the twenty-yearly rebuilding at Ise.",
    ja:"日本では、木は神が降りて宿る場所でありうる。材は、儀礼によらなければ伐れないほど神聖でありうる。伐り倒した幹は、運び出す前に感謝されうる。これは観光客のために保存された珍しい風習ではない。いまも岐阜の森で伊勢の御用材がどう伐られるか、杣が月のある日にどう振る舞うか、幹の半分が枯れた大杉がなぜいまも注連縄で巻かれているかを決めている。この頁は、山の神から伊勢の式年遷宮まで、岐阜における木の信仰の生を描く。",
    zh:"在日本，一棵樹可以是神明降臨棲息之處；一根木材可以神聖到非經儀式不得砍伐；一截伐倒的樹幹，在被運走之前可以先受到感謝。這些並非為觀光客保存下來的奇風異俗：時至今日，它仍決定了伊勢神宮的御用材在岐阜森林中如何被伐下、伐木人在每月某些日子如何行止，以及一棵半邊樹幹已枯的大杉為何仍纏著注連繩。本頁描述岐阜樹木的信仰生活，從山神一直到伊勢每二十年一次的重建。" },
  body:[
    { t:"section",
      id:"yorishiro",
      title:{ en:"A place for a god to stand", ja:"神の依るところ", zh:"神明依附之處" },
      jp:"依代・神籬・神木",
      body:[
        { t:"p",
          text:{
            en:"In Shintō belief the gods do not live permanently in objects; they descend to them. A tall straight tree, a large rock, a mountain peak can serve as a <em>yorishiro</em> — a thing the god is drawn to and inhabits for a time. The oldest shrines had no buildings at all, only a sacred enclosure around such a tree or stone, and the ritual branches of <em>sakaki</em> that are still offered at every shrine are small portable versions of the same idea. A tree recognised as a dwelling of the divine is a <em>shinboku</em>, a sacred tree, and it is marked with a straw rope, <em>shimenawa</em>, and paper streamers. Cutting it is unthinkable; when one dies, it may be left standing for decades.",
            ja:"神道の考えでは、神は物に常住するのではなく、そこへ降りてくる。高くまっすぐな木、大きな岩、山の頂が「依代」——神が引き寄せられてしばし宿るもの——となりうる。最古の社は建物をもたず、そうした木や石を囲む神域だけがあった。いまもあらゆる社に供えられる榊の枝は、同じ考えの小さな持ち運べる形である。神の宿りと認められた木は神木であり、藁の注連縄と紙垂で示される。それを伐ることは考えられず、枯れても何十年も立たせておくことがある。",
            zh:"在神道信仰中，神明並非常住於物，而是降臨於物。一棵高大挺直的樹、一塊巨石、一座山巔，都可以成為「依代」——吸引神明、使其暫時棲居之物。最古老的神社沒有任何建築，只有環繞這樣一棵樹或一塊石的神域；至今每座神社都會供奉的楊桐（榊）枝條，就是同一觀念的小型可攜版本。被認定為神明居所的樹稱為「神木」，以稻草編成的注連繩與紙垂標示。砍伐它是不可想像的；即使枯死，也可能被留著佇立數十年。" } },
        { t:"defs",
          items:[
            { term:{ en:"Shinboku", ja:"神木", zh:"神木" },
              jp:"しんぼく · ごしんぼく",
              romaji:"shinboku",
              def:{
                en:"A sacred tree, usually within or beside a shrine, marked with <em>shimenawa</em>. Most are cedars, camphors, zelkovas or ginkgoes of great age. In Gifu the word is also used, with the honorific <em>go-</em>, for the trees selected for the Ise shrines, which become sacred from the moment the ceremony begins.",
                ja:"神木。多くは社の境内かそのかたわらにあり、注連縄が張られる。多くは古木のスギ、クスノキ、ケヤキ、イチョウである。岐阜ではこの語に「御」をつけて、伊勢のために選ばれた木をも指す。それらは儀式が始まった瞬間から神聖となる。",
                zh:"神聖的樹，通常位於神社境內或旁側，以注連繩標示。多為高齡的柳杉、樟樹、櫸木或銀杏。在岐阜，這個詞加上敬語「御」，也用來指為伊勢神宮選定的樹木——自儀式開始的那一刻起，它們便成為神聖之物。" } },
            { term:{ en:"Himorogi", ja:"神籬", zh:"神籬" },
              jp:"ひもろぎ",
              romaji:"himorogi",
              def:{
                en:"Originally an enclosure of evergreen trees marking a sacred space; today, the temporary altar of a sakaki branch set up for a ground-breaking or a felling ceremony. The Ise felling rites in the Kashimo forest begin at such an altar at the foot of the chosen trees.",
                ja:"もとは神域を示す常緑樹の囲い。いまは地鎮祭や伐採の儀式のために立てる榊の仮の祭壇を指す。加子母の森での伊勢の伐採の儀式も、選ばれた木の根元に設けたそうした祭壇から始まる。",
                zh:"原指以常綠樹圍成、標示神聖空間的圍籬；如今多指為動土或伐木儀式臨時設立、以楊桐枝構成的祭壇。加子母森林中的伊勢伐木儀式，便是從選定樹木根部的這種祭壇開始。" } },
            { term:{ en:"Kodama", ja:"木霊", zh:"木靈" },
              jp:"こだま",
              romaji:"kodama",
              def:{
                en:"The spirit of a tree — and also the ordinary word for an echo, which was once understood as the tree answering. The double meaning is a small key to the whole subject: sound returning from a forest was heard as the forest speaking. See <a href=\"translation.html\">Words That Do Not Translate</a>.",
                ja:"木に宿る霊。同時に、こだま（反響）をいうふつうの語でもある。かつては木が答えているのだと考えられた。この二重の意味は主題全体への小さな鍵である。森から返る音は、森が語る声として聞かれた。<a href=\"translation.html\">訳せない語</a>を参照。",
                zh:"寄宿於樹木的精靈——同時也是「回聲」的日常用語，古人曾以為那是樹在回答。這個雙重含義是理解整個主題的一把小鑰匙：從森林返回的聲音，被聽作森林在說話。見<a href=\"translation.html\">翻譯不過去的詞</a>。" } },
            { term:{ en:"Sōmoku jōbutsu", ja:"草木成仏", zh:"草木成佛" },
              jp:"そうもくじょうぶつ",
              romaji:"sōmoku jōbutsu",
              def:{
                en:"“Plants and trees attain Buddhahood”: a doctrine developed in Japanese Tendai Buddhism which held that even non-sentient nature participates in enlightenment. It gave Buddhist form to an older feeling that trees have something like a life to be respected, and it sits behind the memorial services still held in some woodworking and forestry communities for the trees they have used.",
                ja:"「草木も成仏する」。日本の天台で発展した教えで、心をもたない自然も悟りにあずかるとした。木には尊ぶべき命のようなものがあるという古い感覚に仏教の形を与え、いまも一部の木工や林業の人々が、使った木のために営む供養の背後にある。",
                zh:"「草木亦能成佛」：日本天台宗發展出的教義，認為即使無情的自然也參與覺悟。它為「樹木擁有某種應受尊重的生命」這一古老感受賦予了佛教形式，也是至今部分木工與林業社群為所用樹木舉行供養法會的思想背景。" } }
          ] }
      ] },
    { t:"section",
      id:"greattrees",
      title:{ en:"Great trees of Gifu", ja:"岐阜の巨樹", zh:"岐阜的巨樹" },
      jp:"天然記念物",
      body:[
        { t:"p",
          text:{
            en:"The prefecture's oldest trees are, almost without exception, trees that were never cut because someone held them sacred: they stand at shrines, at temples, or on pilgrim paths. They are also scientific monuments, protected under the Law for the Protection of Cultural Properties.",
            ja:"県内の最古の木は、ほとんど例外なく、誰かが神聖と考えたために伐られなかった木である。社に、寺に、あるいは巡礼の道に立つ。それらはまた文化財保護法のもとで守られる学術上の記念物でもある。",
            zh:"縣內最古老的樹，幾乎無一例外，都是因為有人視之為神聖而從未被砍伐的樹：它們立於神社、寺院或朝聖道旁。它們同時也是依《文化財保護法》受保護的學術紀念物。" } },
        { t:"table",
          caption:{ en:"Some celebrated trees", ja:"名高い木々", zh:"幾棵著名的樹" },
          cols:[
            { en:"Tree", ja:"名", zh:"名稱" },
            { en:"Japanese", ja:"和名", zh:"日文" },
            { en:"Where", ja:"所在", zh:"所在地" },
            { en:"What it is", ja:"内容", zh:"說明" }
          ],
          jpCols:[1],
          rows:[
            [
              { en:"The great cedar of Itoshiro", ja:"石徹白の大杉", zh:"石徹白大杉" },
              "石徹白の大杉",
              { en:"Gujō, on the old Hakusan pilgrim road", ja:"郡上市、白山の古い禅定道", zh:"郡上市，白山古朝聖道" },
              {
                en:"A sugi estimated at over 1,800 years, 24 m tall and 14 m round; natural monument 1924, Special Natural Monument 1957. Half the trunk is dead. Tradition says it grew from the staff of the monk Taichō.",
                ja:"推定樹齢千八百年超のスギ。樹高二十四メートル、幹囲十四メートル。一九二四年に天然記念物、一九五七年に特別天然記念物。幹の半ばは枯れている。泰澄の杖から育ったと伝える。",
                zh:"推估樹齡逾 1,800 年的柳杉，高 24 公尺、周長 14 公尺；1924 年列為天然紀念物，1957 年升格為特別天然紀念物。樹幹半邊已枯。相傳由泰澄的手杖長成。" }
            ],
            [
              { en:"The pale cherry of Neodani", ja:"根尾谷淡墨桜", zh:"根尾谷淡墨櫻" },
              "淡墨桜",
              { en:"Motosu", ja:"本巣市", zh:"本巢市" },
              {
                en:"An Edo higan cherry said to be about 1,500 years old, its blossom fading to a grey like thinned ink; natural monument 1922.",
                ja:"樹齢約千五百年と伝えるエドヒガン。花は散り際に薄墨のような灰色を帯びる。一九二二年天然記念物。",
                zh:"相傳樹齡約 1,500 年的江戶彼岸櫻，花將謝時褪成淡墨般的灰色；1922 年列為天然紀念物。" }
            ],
            [
              { en:"The reclining-dragon cherry", ja:"臥龍桜", zh:"臥龍櫻" },
              "臥龍桜",
              { en:"Hida Ichinomiya, Takayama", ja:"高山市一之宮町", zh:"高山市一之宮町" },
              {
                en:"An old cherry whose trunk and low branch run along the ground like a dragon; natural monument 1973.",
                ja:"幹と低い枝が龍のように地を這う老桜。一九七三年天然記念物。",
                zh:"樹幹與低枝如龍般沿地面伸展的老櫻；1973 年列為天然紀念物。" }
            ],
            [
              { en:"The yews of Kuraiyama", ja:"位山のイチイ", zh:"位山紫杉" },
              "位山のイチイ",
              { en:"Mount Kurai, Takayama", ja:"高山市、位山", zh:"高山市，位山" },
              {
                en:"The mountain behind the Minashi shrine, source by tradition of the yew for court tablets since 1159 and of the name <em>ichii</em>, “first rank”. The yew is Gifu's prefectural tree.",
                ja:"水無神社の背後の山で、伝えでは一一五九年以来、笏の材となるイチイを出し、「一位」の名の由来となった。イチイは岐阜県の木である。",
                zh:"水無神社背後的山，相傳自 1159 年起供應朝臣之笏所用的紫杉，也是「一位」之名的由來。紫杉是岐阜縣的縣樹。" }
            ],
            [
              { en:"The Shōkawa cherries", ja:"荘川桜", zh:"莊川櫻" },
              "荘川桜",
              { en:"Shōkawa, Takayama", ja:"高山市荘川町", zh:"高山市莊川町" },
              { en:"Two Edo higan cherries over 400 years old, moved above the waterline of the Miboro reservoir in 1960 when the valley was flooded; see <a href=\"rivers.html\">Rivers &amp; Water</a>.", ja:"樹齢四百年を超える二本のエドヒガン。一九六〇年、御母衣ダムで谷が沈むとき、湖面より上へ移植された。<a href=\"rivers.html\">川と水</a>を参照。", zh:"兩棵樹齡逾四百年的江戶彼岸櫻，1960 年御母衣水庫淹沒河谷時，被移植到水面之上。見<a href=\"rivers.html\">河川與水</a>。" }
            ],
            [
              { en:"The great hinoki of Kashimo", ja:"加子母の大ヒノキ", zh:"加子母大扁柏" },
              "二代目大ヒノキ",
              { en:"Ura-Kiso national forest, Nakatsugawa", ja:"中津川市、裏木曽国有林", zh:"中津川市，裏木曾國有林" },
              {
                en:"About 1,000 years old, 154 cm in diameter, found in 1955 — the successor to an even larger tree of about 950 years, 213 cm across, that fell in a typhoon in 1934.",
                ja:"樹齢約千年、直径百五十四センチ、一九五五年に見つかった。一九三四年の台風で倒れた、樹齢約九百五十年・直径二百十三センチのさらに大きな木の二代目である。",
                zh:"樹齡約千年、直徑 154 公分，1955 年發現——它是 1934 年被颱風吹倒、樹齡約 950 年、直徑 213 公分的更大巨木的「第二代」。" }
            ]
          ] },
        { t:"note",
          label:{ en:"Age claims", ja:"樹齢について", zh:"關於樹齡" },
          text:{
            en:"The ages of great trees are estimates. Hollow old trunks cannot be cored to the centre, and the figures on shrine signboards are often traditional. The ages above are those given by the responsible authorities, and should be read as “very old” rather than to the century.",
            ja:"巨樹の樹齢は推定である。空洞になった古い幹は中心まで年輪を採れず、社の看板の数字はしばしば伝承による。上の樹齢は管理者の示すものであり、世紀単位の精度ではなく「非常に古い」と読むべきである。",
            zh:"巨樹的樹齡是估計值。中空的老樹幹無法鑽取到中心的年輪樣本，神社告示牌上的數字也常出自傳說。上列樹齡為主管機關所給，應讀作「非常古老」，而非精確到世紀。" } }
      ] },
    { t:"section",
      id:"yamanokami",
      title:{ en:"The mountain god and the woodcutter", ja:"山の神と杣", zh:"山神與伐木人" },
      jp:"山の神",
      body:[
        { t:"p",
          text:{
            en:"People who work in the mountains of central Japan have long believed that the forest belongs to a mountain god, <em>yama no kami</em>, who allows trees to be taken but must be asked and thanked. The god is usually imagined as female and jealous; in many districts forestry workers still keep one day a month on which nobody enters the forest, and New Year and the start of the felling season are marked with offerings of sake, rice and salt at a small stone or wooden shrine at the edge of the working area. Before a large tree is felled, the feller may bow or clap to it; after it falls, he may perform <em>tobusa-date</em>.",
            ja:"中部日本の山で働く人々は、森は山の神のものであり、神は木を取ることを許すが、頼み、感謝しなければならないと長く信じてきた。山の神はたいてい女性で、嫉妬深いと考えられる。多くの地方で林業の人々はいまも、誰も山に入らない日を月に一日守っている。正月と伐り始めには、作業地の縁の小さな石や木の祠に酒と米と塩を供える。大きな木を伐る前には杣はそれに礼をし、あるいは柏手を打つ。倒れたあとには鳥総立てをすることがある。",
            zh:"在日本中部山區工作的人，長久以來相信森林屬於山神——「山之神」——祂允許人取走樹木，但必須先請求、後致謝。山神通常被想像為女性，而且善妒；在許多地方，林業工作者至今仍每月守一天不入山的日子；新年與伐木季開始時，會在作業區邊緣的小石祠或木祠前供上酒、米與鹽。伐倒大樹之前，伐木人可能向它鞠躬或擊掌；樹倒下之後，可能舉行「鳥總立」。" } },
        { t:"steps",
          items:[
            { title:{ en:"Asking", ja:"乞う", zh:"請求" },
              jp:"入山の祈り",
              meta:{ en:"before work", ja:"作業の前", zh:"作業前" },
              text:{
                en:"An offering at the mountain god's shrine at the start of the season, and a moment of address to the tree itself. In the Ise felling ceremonies, a Shintō priest performs this formally, with purification and prayers at a temporary altar.",
                ja:"季節の始めに山の神の祠へ供え物をし、木そのものにもひととき語りかける。伊勢の伐採の儀式では神職がこれを正式に行い、仮の祭壇で祓いと祝詞を奏する。",
                zh:"在季節開始時向山神祠獻上供品，並對樹本身片刻致意。伊勢的伐木儀式中，由神職正式執行，在臨時祭壇前行祓禊並奏上祝詞。" } },
            { title:{ en:"Felling", ja:"伐る", zh:"伐倒" },
              jp:"三ツ緒伐り",
              meta:{ en:"axe only, for sacred trees", ja:"神木は斧のみ", zh:"神木只用斧" },
              text:{
                en:"For ordinary work a chainsaw; for sacred timber, the axe and the three-cut method described below, which lays the trunk down in a chosen direction without splitting it.",
                ja:"ふだんの仕事ならチェーンソー。神聖な材には斧と、後に述べる三ツ緒伐りを用い、幹を割らずに定めた方向へ寝かせる。",
                zh:"一般作業用鏈鋸；神聖木材則用斧頭與下述的「三緒伐」，讓樹幹朝預定方向倒下而不劈裂。" } },
            { title:{ en:"Thanking", ja:"謝す", zh:"致謝" },
              jp:"鳥総立て",
              romaji:"tobusa-date",
              meta:{ en:"after the fall", ja:"倒れたのち", zh:"樹倒之後" },
              text:{
                en:"The top of the felled tree, or a leafy branch from it, is set upright in the stump — a gesture of return to the mountain god, and, some say, a way of letting the tree's life pass into a new shoot. The custom is old enough to appear in the Man'yōshū, where a poet mourns good boat-timber cut on Mount Ashigara with the line “setting up the <em>tobusa</em>”.",
                ja:"伐った木の梢か葉のついた枝を、切り株に立てる。山の神へ返すしぐさであり、木の命を新しい芽へ移すためともいう。この習いは『万葉集』に出てくるほど古く、足柄山で伐られた惜しい船材を悼む歌に「鳥総立て」の句がある。",
                zh:"將伐倒之樹的樹梢或一根帶葉枝條插立在樹樁上——這是歸還給山神的姿態，也有人說是讓樹的生命轉入新芽的方式。此俗古老到出現在《萬葉集》中，有位歌人哀悼足柄山上被伐下的上好船材，詩中便有「立鳥總」之句。" } }
          ] }
      ] },
    { t:"section",
      id:"mitsuo",
      title:{ en:"The three-cut method", ja:"三ツ緒伐り", zh:"三緒伐" },
      jp:"みつおぎり · 三ツ紐伐り",
      body:[
        { t:"p",
          text:{
            en:"The traditional felling technique of the Kiso and Ura-Kiso forests, still used — and only used — to fell the trees for Ise, is done entirely with axes. The fellers cut into the trunk from several sides, hollowing out its core, while deliberately leaving three strips of uncut wood — the <em>o</em> or <em>himo</em>, “cords” — standing like the legs of a stool: two at the sides and one at the back. The tree now stands on its three cords. When the moment comes, the side cords are cut through, and last of all the back cord, and the tree tips forward, hinged on nothing, in the direction the fellers chose. The method prevents the base of the trunk from tearing or splitting as it falls — a serious fault in a great log destined for a shrine — and keeps control of the direction without wedges or ropes. Swinging a heavy axe into hinoki for an hour is exhausting, so the fellers work in relays.",
            ja:"木曽と裏木曽の森の伝統的な伐り方で、いまは伊勢の木を伐るためにだけ用いられる。すべて斧で行う。杣は幹にいくつかの方向から斧を入れ、芯をくり抜いていくが、伐らずに残す三本の筋——「緒」あるいは「紐」——を、腰掛けの脚のように意図して残す。左右に二本、後ろに一本である。木はいまその三本の緒で立っている。時が来ると左右の緒を断ち、最後に後ろの緒を断つと、木は何にも支えられずに、杣の定めた方向へ前へ倒れる。この方法は、倒れるときに幹の元が裂けたり割れたりするのを防ぐ——社殿に用いる大材にとっては重大な欠点である——とともに、楔も綱も使わずに向きを制御する。重い斧を一時間も檜に打ち込むのは骨の折れる仕事で、杣は交代で打つ。",
            zh:"木曾與裏木曾森林的傳統伐木法，如今只用於——也僅用於——伐採伊勢神宮的木材，全程只用斧頭。伐木人從數個方向砍入樹幹，挖空其芯，同時刻意留下三條未砍斷的木筋——稱為「緒」或「紐」——像凳子的腳一樣：左右各一，後方一條。此時樹就立在這三條緒上。時候一到，先砍斷左右兩緒，最後砍斷後緒，樹便在沒有任何支撐的情況下，朝伐木人選定的方向向前倒下。此法可防止樹幹基部在倒下時撕裂或劈裂——對要用於社殿的巨材而言是嚴重缺陷——並且不需楔子或繩索就能控制方向。持沉重斧頭連續砍扁柏一小時極為累人，所以伐木人輪番上陣。" } },
        { t:"figure",
          caption:{
            en:"The three-cut method, seen from above. The core is cut away with axes from several directions, leaving two side cords and a back cord. The side cords are severed first; cutting the back cord releases the tree to fall forward. Schematic — the proportions of the cords are judged by eye and vary with the tree.",
            ja:"三ツ緒伐りを上から見た図。斧でいくつかの方向から芯を伐り取り、左右の緒と後ろの緒を残す。左右の緒を先に断ち、後ろの緒を断つと木は前へ倒れる。模式図——緒の太さは目で判断し、木によって異なる。",
            zh:"三緒伐的俯視示意。以斧從數個方向砍去樹芯，留下左右兩條緒與後緒。先斷左右兩緒；砍斷後緒後，樹便向前倒下。示意圖——緒的粗細憑目測判斷，隨樹而異。" },
          svg:function(lang, L){
            var T = {
              side:{en:"side cord",ja:"横の緒",zh:"側緒"},
              back:{en:"back cord · cut last",ja:"後ろの緒・最後に断つ",zh:"後緒・最後砍斷"},
              core:{en:"core cut away by axe",ja:"斧でくり抜いた芯",zh:"以斧挖空的樹芯"},
              fall:{en:"direction of fall",ja:"倒す方向",zh:"倒向"},
              one:{en:"① side cords severed",ja:"① 横の緒を断つ",zh:"① 砍斷側緒"},
              two:{en:"② back cord severed → tree falls",ja:"② 後ろの緒を断つ → 倒れる",zh:"② 砍斷後緒 → 樹倒"}
            };
            function t(k){ return L(T[k]); }
            var s = '<svg viewBox="0 0 760 330" role="img" aria-label="three-cut felling">';
            var cx=250, cy=170, r=120;
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#F0EDE4" stroke="#8B857C" stroke-width="1.5"/>';
            for (var k=1;k<6;k++) s += '<circle cx="'+cx+'" cy="'+cy+'" r="'+(r-k*18)+'" fill="none" stroke="#E1DCD2"/>';
            /* hollowed core: large irregular polygon */
            s += '<path d="M190 110 L310 110 L325 150 L325 200 L300 225 L200 225 L175 200 L175 150 Z" fill="#FBFAF7" stroke="#A08F73" stroke-dasharray="4 3"/>';
            s += '<text x="'+cx+'" y="172" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#8B857C">'+t("core")+'</text>';
            /* cords */
            s += '<rect x="130" y="140" width="45" height="60" fill="#EADCC1" stroke="#7C6B52"/>';
            s += '<rect x="325" y="140" width="45" height="60" fill="#EADCC1" stroke="#7C6B52"/>';
            s += '<rect x="215" y="225" width="70" height="42" fill="#E7DFD2" stroke="#7C6B52" stroke-width="1.6"/>';
            s += '<text x="152" y="132" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+t("side")+'</text>';
            s += '<text x="348" y="132" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+t("side")+'</text>';
            s += '<text x="'+cx+'" y="310" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+t("back")+'</text>';
            /* fall arrow */
            s += '<path d="M'+cx+' 40 L'+cx+' 14" stroke="#7C6B52" stroke-width="2"/><path d="M'+(cx-6)+' 22 l6 -8 l6 8" fill="none" stroke="#7C6B52" stroke-width="2"/>';
            s += '<text x="'+(cx+12)+'" y="26" font-family="system-ui,sans-serif" font-size="10.5" fill="#7C6B52">'+t("fall")+'</text>';
            /* sequence */
            s += '<text x="450" y="130" font-family="Georgia,serif" font-size="14" fill="#201E1B">'+t("one")+'</text>';
            s += '<text x="450" y="170" font-family="Georgia,serif" font-size="14" fill="#201E1B">'+t("two")+'</text>';
            s += '<line x1="450" y1="190" x2="720" y2="190" stroke="#E1DCD2"/>';
            s += '<text x="450" y="214" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+(lang==="en"?"Axes only · fellers work in relays":(lang==="ja"?"斧のみ・交代で打つ":"只用斧・輪流砍伐"))+'</text>';
            s += '<text x="450" y="232" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+(lang==="en"?"≈ 1 hour for a large hinoki":(lang==="ja"?"大きな檜で約一時間":"大扁柏約需一小時"))+'</text>';
            s += '<text x="450" y="250" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+(lang==="en"?"then: tobusa-date on the stump":(lang==="ja"?"のち：切り株に鳥総立て":"之後：在樹樁行鳥總立"))+'</text>';
            s += '</svg>';
            return s;
          } }
      ] },
    { t:"section",
      id:"ise",
      title:{ en:"Timber for Ise", ja:"伊勢への御用材", zh:"獻給伊勢的木材" },
      jp:"式年遷宮と裏木曽",
      body:[
        { t:"p",
          text:{
            en:"Every twenty years the two great shrines at Ise, and their many subsidiary shrines, are rebuilt on adjoining plots, identical in form and entirely new, and the deity is moved from the old house to the new. The practice, the <em>Shikinen Sengū</em>, is dated by the shrine to 690; the 62nd rebuilding took place in 2013 and the 63rd is due in 2033. It requires a very large quantity of hinoki, including trunks of a size and quality that almost no forest in Japan can now provide — and for three centuries a large share of that timber has come from the forests of Kiso and Ura-Kiso, the Ura-Kiso part of them in what is now Nakatsugawa, Gifu.",
            ja:"二十年ごとに、伊勢の二つの大宮とその多くの別宮・摂末社は、隣りあう敷地にまったく同じ形で、すべて新しく建て替えられ、神は古い宮から新しい宮へ遷る。この式年遷宮を神宮は六九〇年に始まるとする。第六十二回は二〇一三年に行われ、第六十三回は二〇三三年に予定されている。それには大量の檜が要り、そのなかには、いまの日本でほとんどどの森も供給できない大きさと質の幹が含まれる。そして三百年にわたり、その材の大きな部分が木曽と裏木曽の森——うち裏木曽はいまの岐阜県中津川市——から出てきた。",
            zh:"每隔二十年，伊勢的兩座正宮及其眾多別宮、攝末社，都會在相鄰的基地上以完全相同的形式全部重建，神明則從舊殿遷入新殿。這項「式年遷宮」，神宮自稱始於 690 年；第 62 回於 2013 年舉行，第 63 回預定於 2033 年。它需要大量扁柏，其中包括尺寸與品質幾乎已無日本任何森林能供應的巨幹——而三百年來，這些木材有很大一部分來自木曾與裏木曾的森林，其中裏木曾位於今日的岐阜縣中津川市。" } },
        { t:"p",
          text:{
            en:"It was not always so. For its first centuries the shrine cut its timber in its own hills behind Ise. As those were exhausted, it turned from the late Kamakura period to other forests — among them the Ōsugidani valley on the upper Miya river in Ise province and, by some accounts, forests in Mino — and from the middle of the Edo period to the Kiso forests of the Owari domain; the Ura-Kiso forests first supplied timber for the rebuilding of 1709. In the Meiji period the imperial household set aside specific stands as shrine reserve forests — in Ura-Kiso, the Denokōji reserve at Kashimo, designated in 1909 — and though the reserves were formally abolished when the forests were unified in 1947, the stands are still managed with Ise in mind. The shrine itself began a two-hundred-year planting plan on its own 5,500 hectares in 1923, and in 2013 was able to supply part of the timber from its own forest for the first time in about seven hundred years — but only thinnings. The great trunks still come from Kiso and Ura-Kiso.",
            ja:"いつもそうだったわけではない。最初の数世紀、神宮は伊勢の背後の自らの山で材を伐った。それが尽きると、鎌倉時代の終わりごろからは別の森——宮川上流の大杉谷など伊勢国内の山や、一説には美濃の森——に、江戸時代中期からは尾張藩の木曽の森に材を求めた。裏木曽の森がはじめて材を出したのは一七〇九年の遷宮である。明治に入ると皇室は特定の林分を神宮備林として定めた——裏木曽では加子母の出ノ小路の備林で、一九〇九年の指定である。一九四七年の林政統一で備林は制度上廃されたが、林分はいまも伊勢を念頭に置いて管理されている。神宮自身は一九二三年、五千五百ヘクタールの宮域林で二百年の植林計画を始め、二〇一三年には約七百年ぶりに自らの森から材の一部を供することができた——ただし間伐材である。大径の幹はいまも木曽と裏木曽から来る。",
            zh:"並非向來如此。最初幾個世紀，神宮在伊勢背後自家的山林伐木。這些山林耗盡之後，鎌倉時代末期起轉向其他森林——包括伊勢國宮川上游的大杉谷，據部分說法也包括美濃的森林——江戶時代中期起則仰賴尾張藩的木曾森林；裏木曾森林首次供材，是在 1709 年的遷宮。明治時期，皇室劃定特定林分為神宮備林——在裏木曾，即 1909 年指定的加子母出之小路備林；1947 年林政統一時備林制度被正式廢除，但這些林分至今仍以伊勢為念加以經營。神宮本身則自 1923 年起在五千五百公頃的宮域林推行兩百年造林計畫，並於 2013 年約七百年來首次以自家森林供應部分木材——但僅是疏伐材。大徑巨幹至今仍來自木曾與裏木曾。" } },
        { t:"figure",
          caption:{
            en:"The calendar of the 63rd Shikinen Sengū, as published by the shrine. The forest ceremonies of 2025 — the first felling in Agematsu (Nagano) on 3 June and the felling in the Ura-Kiso national forest (Nakatsugawa, Gifu) on 5 June — open an eight-year process that ends with the transfer of the deity in October 2033.",
            ja:"神宮の公表による第六十三回式年遷宮の日程。二〇二五年の森の祭儀——六月三日の上松（長野県）での御杣始祭と、六月五日の裏木曽国有林（岐阜県中津川市）での御用材伐採式——が、二〇三三年十月の遷御で終わる八年の歩みの幕を開ける。",
            zh:"依神宮公布的第 63 回式年遷宮日程。2025 年的森林祭儀——6 月 3 日於上松（長野縣）舉行的御杣始祭，與 6 月 5 日於裏木曾國有林（岐阜縣中津川市）舉行的御用材伐採式——揭開了長達八年、以 2033 年 10 月遷御作結的歷程。" },
          svg:function(lang, L){
            var E = [
              [2025.33,{en:"Yamaguchi-sai · 2 May",ja:"山口祭　五月二日",zh:"山口祭　5 月 2 日"},0],
              [2025.42,{en:"First felling, Agematsu · 3 Jun",ja:"御杣始祭（上松）六月三日",zh:"御杣始祭（上松）6 月 3 日"},1],
              [2025.43,{en:"Ura-Kiso felling, Nakatsugawa · 5 Jun",ja:"裏木曽御用材伐採式　六月五日",zh:"裏木曾御用材伐採式　6 月 5 日"},2],
              [2025.44,{en:"Mihishirogi carried to Ise · 9–10 Jun",ja:"御樋代木奉曳式　六月九・十日",zh:"御樋代木奉曳式　6 月 9–10 日"},3],
              [2026.45,{en:"Okihiki · May–Jul 2026",ja:"お木曳　二〇二六年五〜七月",zh:"御木曳　2026 年 5–7 月"},0],
              [2027.45,{en:"Okihiki · May–Jul 2027",ja:"お木曳　二〇二七年五〜七月",zh:"御木曳　2027 年 5–7 月"},1],
              [2033.8,{en:"Transfer of the deity · Oct 2033",ja:"遷御　二〇三三年十月",zh:"遷御　2033 年 10 月"},0]
            ];
            var x0=40, x1=720, a0=2025, a1=2034, k=(x1-x0)/(a1-a0);
            function X(y){ return x0+(y-a0)*k; }
            var s = '<svg viewBox="0 0 760 290" role="img" aria-label="Sengu calendar">';
            s += '<text x="20" y="28" font-family="Georgia,serif" font-size="13" letter-spacing="2" fill="#55504A">'+(lang==="en"?"THE 63RD SENGŪ, 2025–2033":(lang==="ja"?"第六十三回式年遷宮　二〇二五〜二〇三三":"第 63 回式年遷宮　2025–2033"))+'</text>';
            s += '<rect x="'+X(2025)+'" y="120" width="'+(X(2034)-X(2025))+'" height="10" fill="#F5F3ED" stroke="#CDC6B9"/>';
            s += '<rect x="'+X(2025.3)+'" y="120" width="'+(X(2025.5)-X(2025.3))+'" height="10" fill="#E0E6DB" stroke="#7C6B52"/>';
            for (var y=2025;y<=2034;y++){
              s += '<line x1="'+X(y)+'" y1="130" x2="'+X(y)+'" y2="140" stroke="#8B857C"/>';
              s += '<text x="'+X(y)+'" y="154" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+y+'</text>';
            }
            var left = [58,76,94,112];
            for (var i=0;i<E.length;i++){
              var ex = X(E[i][0]);
              if (i<4){
                var ly = left[E[i][2]];
                s += '<line x1="'+ex+'" y1="120" x2="'+(X(2025)+ (i*0))+'" y2="120" stroke="none"/>';
                s += '<circle cx="'+ex+'" cy="125" r="3" fill="#7C6B52"/>';
                s += '<text x="'+(X(2025.6)+10)+'" y="'+ly+'" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+L(E[i][1])+'</text>';
                s += '<path d="M'+ex+' 120 L'+(X(2025.6)+6)+' '+(ly-4)+'" fill="none" stroke="#CDC6B9"/>';
              } else {
                var ly2 = 190 + E[i][2]*22;
                s += '<circle cx="'+ex+'" cy="125" r="3.5" fill="#7C6B52"/>';
                s += '<line x1="'+ex+'" y1="130" x2="'+ex+'" y2="'+(ly2-12)+'" stroke="#CDC6B9" stroke-dasharray="2 2"/>';
                var anc = ex>640?"end":"middle";
                s += '<text x="'+ex+'" y="'+ly2+'" text-anchor="'+anc+'" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+L(E[i][1])+'</text>';
              }
            }
            s += '<text x="20" y="276" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?"Source: Jingū Shichō, schedule of the 63rd Sengū":(lang==="ja"?"出典：神宮司庁「遷宮予定年表」":"資料來源：神宮司廳〈遷宮預定年表〉"))+'</text>';
            s += '</svg>';
            return s;
          } },
        { t:"defs",
          items:[
            { term:{ en:"Misoma-hajime-sai", ja:"御杣始祭", zh:"御杣始祭" },
              jp:"みそまはじめさい",
              romaji:"misoma hajime sai",
              def:{
                en:"The ceremony of first felling for the Sengū, held in the Kiso valley at Agematsu, Nagano, on 3 June 2025. Two days later the corresponding felling of Ura-Kiso timber took place in the national forest at Kashimo, Nakatsugawa. In both, the trees are felled by axe using the three-cut method, facing the direction of Ise.",
                ja:"遷宮の用材を初めて伐る祭儀。二〇二五年六月三日、長野県上松の木曽谷で行われた。二日後、中津川市加子母の国有林で、これに対応する裏木曽の御用材伐採式が行われた。いずれも、木は伊勢の方角に向けて、斧で三ツ緒伐りに伐り倒される。",
                zh:"遷宮用材首次伐採的祭儀，2025 年 6 月 3 日於長野縣上松的木曾谷舉行。兩天後，對應的裏木曾御用材伐採式在中津川市加子母國有林舉行。兩地皆以斧施行三緒伐，使樹朝伊勢方向倒下。" } },
            { term:{ en:"Mihishirogi", ja:"御樋代木", zh:"御樋代木" },
              jp:"みひしろぎ",
              romaji:"mihishirogi",
              def:{
                en:"The finest hinoki of all, from which is made the <em>mihishiro</em> — the vessel that holds the sacred mirror, the embodiment of the deity. Once felled, the logs are carried in procession from the forest to Ise, stopping in the towns along the way; in June 2025 the Nakatsugawa procession passed through Tsukechi, Fukuoka and Naegi before the timber was received at Ise on 9 and 10 June.",
                ja:"最上の檜で、御神体である御鏡を納める器、御樋代をつくる材となる。伐られた丸太は森から伊勢まで行列をなして運ばれ、途中の町々に立ち寄る。二〇二五年六月、中津川の行列は付知・福岡・苗木を通り、材は六月九日と十日に伊勢で迎えられた。",
                zh:"最上等的扁柏，用來製作「御樋代」——收納神體御鏡的容器。伐下的原木會以隊伍從森林護送至伊勢，沿途停留於各城鎮；2025 年 6 月，中津川的隊伍經過付知、福岡與苗木，木材於 6 月 9、10 日在伊勢被迎入。" } },
            { term:{ en:"Okihiki", ja:"お木曳", zh:"御木曳" },
              jp:"おきひき",
              romaji:"okihiki",
              def:{
                en:"The pulling of the Sengū timber into the shrine precincts by the townspeople of Ise, on wagons over land and on sledges through the Isuzu river, singing <em>kiyari</em> work songs. It is scheduled for the summers of 2026 and 2027. Communities along the supply route, including Nakatsugawa, stage their own welcoming processions.",
                ja:"伊勢の町の人々が、陸では奉曳車に、五十鈴川では橇に載せて、木遣りを歌いながら遷宮の材を神域へ曳き入れる行事。二〇二六年と二〇二七年の夏に予定される。中津川を含む供給の道筋の地域も、それぞれ奉迎の行列を催す。",
                zh:"伊勢市民以陸上的奉曳車、五十鈴川中的木橇，唱著「木遣」勞動號子，將遷宮木材拖入神域的活動。預定於 2026 與 2027 年夏季舉行。沿供材路線的地方——包括中津川——也各自舉辦迎接的遊行。" } },
            { term:{ en:"The old timber's second life", ja:"古材のゆくえ", zh:"舊材的第二生命" },
              jp:"古材の再利用",
              def:{
                en:"The buildings taken down after a Sengū are not discarded. Their timbers are distributed to other shrines across Japan for rebuilding, and the great pillars of the old main halls reappear as the torii at the ends of the Uji bridge — a chain of reuse that can keep a single hinoki in sacred service for sixty years or more.",
                ja:"遷宮ののちに解かれた社殿は捨てられない。その材は全国の神社に下げ渡されて建て替えに用いられ、旧正殿の棟持柱は宇治橋の両端の鳥居となってふたたび立つ。一本の檜を六十年以上も神聖な務めにとどめる、再利用の連鎖である。",
                zh:"遷宮後拆下的建築並不丟棄。其木材分送全國各地神社用於重建，舊正殿的巨柱則化身為宇治橋兩端的鳥居再度矗立——這條再利用的鏈，能讓一株扁柏持續擔負神聖職務六十年以上。" } }
          ] }
      ] },
    { t:"section",
      id:"enku",
      title:{ en:"Buddhas from split wood", ja:"割り木の仏", zh:"劈木而成的佛" },
      jp:"円空仏",
      body:[
        { t:"p", text:{ en:"The seventeenth-century monk Enkū, born in Mino, carved images for the villages he passed through by splitting a log with wedges and carving the figure out of the split face in a few hours, leaving the hatchet cuts and letting the grain do much of the modelling. About 1,700 of the 5,300 or so that survive are in Gifu. His life and his method are told on <a href=\"enku.html\">Enkū's Buddhas</a>.", ja:"十七世紀の僧円空は美濃に生まれ、通りかかった村々のために、丸太を楔で割り、その割り肌から数時間で像を彫り出した。鉈の跡を残し、造形の多くを木目にゆだねた。現存するおよそ五千三百体のうち約千七百体が岐阜にある。その生涯と技は<a href=\"enku.html\">円空仏</a>で述べる。", zh:"十七世紀的僧人圓空生於美濃，他為途經的村落造像：以楔子劈開圓木，從劈面上幾個小時就雕出佛像，保留斧痕，讓木紋承擔大部分的造形。現存約五千三百尊中，約一千七百尊在岐阜。他的生平與技法見<a href=\"enku.html\">圓空佛</a>。" } },
        { t:"quote",
          text:{
            en:"He did not so much carve the wood as agree with it.",
            ja:"彼は木を彫ったというより、木と合意したのである。",
            zh:"與其說他雕刻了木頭，不如說他與木頭達成了共識。" },
          cite:{
            en:"This book's summary of Enkū's method — not a quotation",
            ja:"本書による円空の方法の要約——引用ではない",
            zh:"本書對圓空手法的概括——並非引文" } }
      ] },
    { t:"section",
      id:"shaku",
      title:{ en:"The yew of the first rank", ja:"一位の木", zh:"一位之木" },
      jp:"笏と位山",
      body:[
        { t:"p",
          text:{
            en:"Court officials in Japan, as in China, held a flat tablet, the <em>shaku</em>, when in attendance on the emperor. By the tradition of Hida Ichinomiya, yew from Mount Kurai — the mountain behind the Minashi shrine, first shrine of the province — was presented to the court as the material for these tablets from 1159, and the tree was honoured with the rank <em>ichii</em>, “first rank”, which became its common name, while the mountain took the name Kuraiyama, “mountain of rank”. The presentation is still made on great occasions: for the Ise rebuilding and for imperial enthronements. The shaku are cut from the heartwood, dried for about a year and finished by local carpenters to keep the grain straight. The same wood, with the same red heart and pale rim, is the material of Ichii Ittōbori carving. See <a href=\"ittobori.html\">Ichii Ittōbori</a>.",
            ja:"日本の朝廷の官人は、中国と同じく、天皇に侍るとき笏という平たい板を持った。飛騨一宮の伝えでは、国の一宮である水無神社の背後の山、位山のイチイが一一五九年から笏の材として朝廷に献じられ、木は「一位」の位を授けられて、それが通り名となり、山は「位山」と呼ばれるようになった。献上はいまも大きな折に行われる——伊勢の遷宮と、天皇の即位に。笏は心材から取り、一年ほど乾かし、木目がまっすぐ通るよう地元の大工が仕上げる。同じ赤い心と淡い縁をもつ同じ材が、一位一刀彫の材である。<a href=\"ittobori.html\">一位一刀彫</a>を参照。",
            zh:"日本朝臣與中國一樣，侍奉天皇時手持一片扁平的板，稱為「笏」。依飛驒一宮的傳說，自 1159 年起，本國一宮水無神社背後的位山所產紫杉，被獻給朝廷作為笏的材料，樹因此獲授「一位」之位，成為它的通稱，山也因此名為「位山」。這項進獻至今仍在重大場合舉行：伊勢遷宮與天皇即位。笏取自心材，乾燥約一年，再由當地木匠加工以保持紋理筆直。同樣紅心淡邊的同一種木，也是一位一刀雕的材料。見<a href=\"ittobori.html\">一位一刀雕</a>。" } }
      ] },
    { t:"related",
      items:[
        { href:"fivetrees.html",
          why:{ en:"The forest reserves that grow the Ise hinoki.", ja:"伊勢の檜を育てる備林。", zh:"培育伊勢扁柏的備林。" } },
        { href:"culture.html",
          why:{ en:"Festivals, songs and the pulling of timber.", ja:"祭、唄、そしてお木曳。", zh:"祭典、歌謠與拉運御木。" } },
        { href:"hinoki.html",
          why:{ en:"Why hinoki, of all woods, is the shrine timber.", ja:"数ある木のなかで、なぜ檜が社殿の材なのか。", zh:"在眾多木材中，為何扁柏是社殿之材。" } },
        { href:"poetry.html",
          why:{ en:"The oldest poems about felling and timber.", ja:"伐採と材をめぐる最古の歌。", zh:"關於伐木與木材最古老的詩歌。" } }
      ] }
  ] };

/* ---- ------------------------------------------- culture */
GIFU.pages["culture"] = { kicker:{ en:"The Land of Wood · 07", ja:"木の国 · 07", zh:"木之國 · 07" },
  title:{ en:"Wood in Ritual & Daily Life", ja:"儀礼と暮らしの木", zh:"儀禮與日常中的木" },
  jp:"儀礼と暮らし",
  lede:{
    en:"In Gifu wood is not only worked; it is celebrated, carried, danced on and performed in. Three of the float festivals UNESCO recognised in 2016 are in the prefecture; nine wooden village playhouses still stage kabuki; the cormorant fishermen of the Nagara still work from wooden boats by the light of burning pine; and when a house is framed, its owner still throws rice cakes from the ridge. This page gathers the rituals and customs through which wood enters the common life of the region, and gives a calendar for seeing them.",
    ja:"岐阜では、木は加工されるだけではない。祝われ、曳かれ、その上で踊られ、その中で演じられる。二〇一六年にユネスコが認めた屋台行事のうち三つがこの県にある。九棟の木造の村の芝居小屋ではいまも歌舞伎がかかる。長良川の鵜匠はいまも木の舟から、燃える松の明かりのもとで漁をする。家の骨組が立てば、施主はいまも棟から餅をまく。この頁は、木が地域の人々の暮らしに入ってくる儀礼と習俗を集め、それを見るための暦を添える。",
    zh:"在岐阜，木頭不只是被加工；它被慶祝、被拖運、被踩著跳舞，也被當作演出的舞台。2016 年聯合國教科文組織認定的屋台祭典中，有三項在本縣；九座木造的村落戲棚至今仍上演歌舞伎；長良川的鸕鶿漁師依舊在燃燒松柴的火光下，從木船上捕魚；房屋骨架立起時，屋主仍從屋脊上撒下年糕。本頁匯集木頭進入當地人日常生活的各種儀禮與習俗，並附上一份觀賞行事曆。" },
  body:[
    { t:"figure",
      caption:{
        en:"A year of wood in Gifu's festivals and customs. Dates are the fixed or usual ones; several festivals move with the weekend, and the Sengū events of 2025–2027 are one-off. Check locally before travelling.",
        ja:"岐阜の祭と習俗にみる木の一年。日付は固定のもの、または通例のもの。週末に合わせて動く祭もあり、二〇二五〜二〇二七年の遷宮の行事は一回限りである。出かける前に現地で確かめられたい。",
        zh:"岐阜祭典與習俗中木的一年。日期為固定或慣例日期；部分祭典會配合週末調整，2025–2027 年的遷宮活動則屬一次性。出發前請向當地確認。" },
      svg:function(lang, L){
        var M = lang==="en"?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
        var R = [
          { n:{en:"Takayama spring festival",ja:"高山・春の山王祭",zh:"高山春季山王祭"}, a:3.45, b:3.5, f:"#EADCC1" },
          { n:{en:"Furukawa festival · okoshi-daiko",ja:"古川祭・起し太鼓",zh:"古川祭・起太鼓"}, a:3.6, b:3.67, f:"#EADCC1" },
          { n:{en:"Ōgaki festival (yama floats)",ja:"大垣祭（軕）",zh:"大垣祭（軕）"}, a:4.35, b:4.45, f:"#EADCC1" },
          { n:{en:"Nagara cormorant fishing season",ja:"長良川鵜飼",zh:"長良川鸕鶿捕魚"}, a:4.35, b:9.5, f:"#E0E7E9" },
          { n:{en:"Gujō odori — dancing in geta",ja:"郡上おどり",zh:"郡上舞"}, a:6.4, b:8.2, f:"#E0E6DB" },
          { n:{en:"Kashimo kabuki at the Meiji-za",ja:"かしも明治座の歌舞伎",zh:"加子母明治座歌舞伎"}, a:8.0, b:8.97, f:"#EEE1DF" },
          { n:{en:"Takayama autumn festival",ja:"高山・秋の八幡祭",zh:"高山秋季八幡祭"}, a:9.27, b:9.33, f:"#EADCC1" },
          { n:{en:"Green cedar balls at breweries",ja:"青い杉玉（新酒）",zh:"酒藏的青杉玉"}, a:10.5, b:12, f:"#E0E6DB" },
          { n:{en:"",ja:"",zh:""}, a:0, b:1.6, f:"#E0E6DB" }
        ];
        var x0=230, x1=740, k=(x1-x0)/12;
        var s = '<svg viewBox="0 0 760 290" role="img" aria-label="calendar">';
        for (var m=0;m<12;m++){
          var mx = x0+m*k;
          s += '<rect x="'+mx+'" y="22" width="'+k+'" height="236" fill="'+(m%2?"#FBFAF7":"#F5F3ED")+'"/>';
          s += '<text x="'+(mx+k/2)+'" y="16" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+M[m]+'</text>';
        }
        for (var i=0;i<R.length;i++){
          var row = i<8?i:7, y = 34 + row*28;
          if (R[i].n.en) s += '<text x="'+(x0-8)+'" y="'+(y+13)+'" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" fill="#201E1B">'+L(R[i].n)+'</text>';
          var xa = x0+R[i].a*k, xb = x0+R[i].b*k;
          s += '<rect x="'+xa+'" y="'+(y+2)+'" width="'+Math.max(4,xb-xa)+'" height="14" fill="'+R[i].f+'" stroke="#7C6B52"/>';
        }
        s += '<text x="20" y="282" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?"Approximate; several dates move with the weekend":(lang==="ja"?"おおよそ。週末に合わせて動く日付もある":"約略日期；部分日期隨週末調整"))+'</text>';
        s += '</svg>';
        return s;
      } },
    { t:"section",
      id:"on-show",
      title:{ en:"Wood on show: floats, stages and boats", ja:"見せる木——屋台・舞台・舟", zh:"展示的木：屋台、舞台與船" },
      jp:"屋台・芝居小屋・鵜舟",
      body:[
        { t:"p", text:{ en:"Three of Gifu's customs put wood in front of a crowd. The floats of Takayama, Furukawa and Ōgaki — demountable timber frames on wheels of zelkova or pine, carved, lacquered and gilded — are the most elaborate; how they are built and kept is told on <a href=\"floats.html\">Festival Floats</a>, and the festivals themselves on <a href=\"festivals.html\">Festivals &amp; Floats</a>. The village playhouses of Mino and Hida, several with revolving stages turned by hand from a pit, were built by the villagers of their own timber; the Kashimo Meiji-za of 1894 is of hinoki from the forests that now supply Ise (see <a href=\"kabuki.html\">Village Kabuki</a>). And the cormorant boats of the Nagara are long wooden boats, built by the river's boatwrights and lit by fire (see <a href=\"ukai.html\">Cormorant Fishing</a>).", ja:"岐阜の習わしのうち三つは、木を人びとの前に見せる。いちばん手の込んだものは高山・古川・大垣の屋台である。欅や松の車輪に載る分解できる木の軸組に、彫刻・漆・金箔が施される。その組み立てと保存は<a href=\"floats.html\">祭屋台</a>に、祭りそのものは<a href=\"festivals.html\">祭りと屋台</a>に記した。美濃と飛騨の村の芝居小屋は、村人が自分たちの木で建てたもので、奈落から人力で回す回り舞台をもつものもある。一八九四年の加子母明治座は、いま伊勢へ材を送る森の檜でできている（<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>を参照）。そして長良川の鵜舟は、川の船大工がつくる細長い木の舟で、火に照らされて漁をする（<a href=\"ukai.html\">鵜飼</a>を参照）。", zh:"岐阜有三種習俗把木頭展示在眾人面前。最精巧的是高山、古川與大垣的屋台：架在櫸木或松木車輪上、可拆解的木構架，再加上雕刻、漆與金箔；其構造與保存見<a href=\"floats.html\">祭典屋台</a>，祭典本身見<a href=\"festivals.html\">祭典與屋台</a>。美濃與飛驒的村落戲棚由村民以自家木材建成，有些還有從台下地坑以人力轉動的旋轉舞台；1894 年的加子母明治座，用的正是如今供應伊勢的森林之檜（見<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>）。而長良川的鵜舟，是河上船匠打造、以火照明的細長木船（見<a href=\"ukai.html\">鵜飼</a>）。" } },
        { t:"note",
          label:{ en:"Fire from wood", ja:"木の火", zh:"木之火" },
          text:{
            en:"The light of the cormorant fishing is pine — <em>matsuwarigi</em>, split red pine, chosen because its resin burns bright and long. The same wood fired the climbing kilns of Mino ware for centuries. See <a href=\"fuel.html\">Wood as Fire</a>.",
            ja:"鵜飼の明かりは松——割った赤松、松割木——である。脂が明るく長く燃えるから選ばれる。同じ木が何世紀も美濃焼の登り窯を焚いた。<a href=\"fuel.html\">火としての木</a>を参照。",
            zh:"鸕鶿捕魚的光源是松木——劈開的赤松「松割木」——之所以選它，是因為松脂燃燒得明亮而持久。同一種木材也曾燒了美濃燒登窯數百年。見<a href=\"fuel.html\">作為火的木</a>。" } }
      ] },
    { t:"section",
      id:"kiyari",
      title:{ en:"Songs for hauling timber", ja:"木を曳く唄", zh:"運木之歌" },
      jp:"木遣",
      body:[
        { t:"p",
          text:{
            en:"Moving a great log by hand needs dozens of people pulling in time, and the rhythm was set by song. <em>Kiyari</em>, literally “sending the wood”, began as the work songs of timber haulers and raftsmen: a leader sings a line, the crew answers and heaves. From the mountain the songs travelled with the timber to the cities, where carpenters and firemen took them up, and they became ceremonial — sung at ridge-raisings, weddings and festivals. At Ise they are the soundtrack of the <em>okihiki</em>, when the townspeople pull the new shrine timber into the precincts; and along the route from Ura-Kiso, communities that send the timber sing it off.",
            ja:"大きな丸太を人の手で動かすには、何十人もが拍子をそろえて曳かねばならず、その拍子を唄が刻んだ。「木遣」——文字どおり「木をやる」——は、木を運ぶ人や筏師の労働歌として始まった。音頭取りが一節を歌い、衆が応えて曳く。唄は山から木とともに町へ下り、大工や火消しがそれを受け継ぎ、儀礼の唄となった——上棟式、婚礼、祭で歌われる。伊勢では、町の人々が新しい社殿の材を神域へ曳き入れるお木曳の音そのものであり、裏木曽からの道筋では、材を送り出す地域がそれで木を見送る。",
            zh:"徒手搬動巨大原木，需要數十人按節拍一齊拉，而節拍靠歌聲來定。「木遣」——字面意思是「送木」——起源於運木人與筏夫的勞動號子：領唱唱一句，眾人應和並使力。這些歌隨著木材從山裡來到城市，被木匠與消防隊傳承，逐漸成為儀式歌曲——在上樑、婚禮與祭典上吟唱。在伊勢，它是市民把新社殿木材拖入神域的「御木曳」的聲音；而在自裏木曾出發的沿途，送出木材的地方也以它為木材送行。" } },
        { t:"defs",
          items:[
            { term:{ en:"Ondo-tori", ja:"音頭取り", zh:"領唱" },
              jp:"音頭取り",
              romaji:"ondo-tori",
              def:{
                en:"The lead singer, who calls the line and times the pull. In a haul the ondo-tori's skill decides whether a log moves smoothly or jerks and stops.",
                ja:"一節を歌い、曳く間合いをはかる歌い手。曳き手のなかで音頭取りの腕が、丸太がなめらかに動くか、つかえて止まるかを決める。",
                zh:"領頭唱出歌句、掌握拉動時機的歌者。拖運時，領唱的功力決定了原木是順暢前進，還是頓挫停住。" } },
            { term:{ en:"Kiyari in the mountains", ja:"山の木遣", zh:"山中的木遣" },
              jp:"山唄",
              def:{
                en:"In the forests the songs were practical, sung while working logs down chutes and along valleys. In Kiso and Ura-Kiso some survive in the repertoire of the Sengū celebrations, where they are taught to children.",
                ja:"森では唄は実用のもので、丸太を修羅に落とし谷を下すあいだに歌われた。木曽や裏木曽では遷宮の祝いの演目にいくつかが残り、子どもたちに教えられている。",
                zh:"在森林裡，這些歌是實用的，在把原木沿滑道放下、沿谷地運送時吟唱。在木曾與裏木曾，部分曲目保留在遷宮慶典的節目中，並傳授給孩子們。" } }
          ] }
      ] },
    { t:"section",
      id:"building",
      title:{ en:"Rites of building", ja:"建てることの儀礼", zh:"建造的儀禮" },
      jp:"地鎮祭・上棟式",
      body:[
        { t:"p",
          text:{
            en:"A wooden house in Japan is traditionally raised in stages, each marked by a rite, and many are still observed, especially in the countryside of Gifu where houses are built by local carpenters.",
            ja:"日本の木の家は伝統的に段階を追って建てられ、各段階に儀礼が伴う。とりわけ地元の大工が家を建てる岐阜の田舎では、その多くがいまも守られている。",
            zh:"日本的木造房屋傳統上分階段建造，每個階段都有儀禮相伴；其中許多至今仍被遵行，尤其是在由在地木匠蓋房子的岐阜鄉間。" } },
        { t:"steps",
          items:[
            { title:{ en:"Ground purification", ja:"地鎮祭", zh:"地鎮祭" },
              romaji:"jichinsai",
              meta:{ en:"before work begins", ja:"着工の前", zh:"動工之前" },
              text:{
                en:"A priest purifies the site and asks the local deity's permission to build, at a temporary altar of sakaki and bamboo; the owner and carpenter each make the first symbolic cut into a mound of sand with a wooden spade and hoe.",
                ja:"神職が敷地を清め、榊と竹の仮の祭壇で、土地の神に建てる許しを乞う。施主と大工は、盛り砂に木の鍬と鋤でそれぞれ最初の象徴的な一打ちを入れる。",
                zh:"神職在以楊桐與竹搭成的臨時祭壇前淨化基地，向當地神祇請求建造的許可；屋主與木匠各持木鍬與木鋤，在一堆沙上象徵性地挖下第一鍬。" } },
            { title:{ en:"Raising the ridge", ja:"上棟式", zh:"上樑式" },
              romaji:"jōtōshiki, muneage",
              meta:{ en:"when the frame is up", ja:"骨組が立ったとき", zh:"骨架立起之時" },
              text:{
                en:"When the posts and beams are joined and the ridge pole set, the carpenters hold a ceremony on the frame. In many districts the owner then throws rice cakes and coins from the ridge to neighbours gathered below — <em>mochi-maki</em> — to share the good fortune and pay back the community's help.",
                ja:"柱と梁が組まれ棟木が上がると、大工は骨組の上で儀式を行う。多くの地方で、施主はそのあと棟から、下に集まった近所の人々へ餅と小銭をまく——餅まき——福を分け、地域の助けに報いるためである。",
                zh:"柱樑接合、脊檁安上後，木匠在骨架上舉行儀式。許多地方接著由屋主從屋脊向聚在下方的鄰居撒下年糕與零錢——「撒餅」——以分享福氣、回報鄉里的協助。" } },
            { title:{ en:"The ridge tablet", ja:"棟札", zh:"棟札" },
              romaji:"munafuda",
              meta:{ en:"sealed into the roof", ja:"屋根裏に納める", zh:"封存於屋頂內" },
              text:{
                en:"A plank inscribed with the date, the owner and the master carpenter is fixed high in the roof. Munafuda are one of the main sources for dating old buildings; they are how many Hida carpenters' names have come down to us.",
                ja:"年月日、施主、棟梁の名を記した板を、屋根の高いところに打ちつける。棟札は古い建物の年代を知る主な資料の一つであり、多くの飛騨の大工の名はそれによって伝わった。",
                zh:"將一塊寫有日期、屋主與棟樑姓名的木板固定在屋頂高處。棟札是判定古建築年代的主要依據之一；許多飛驒木匠的名字，正是藉此流傳下來。" } }
          ] }
      ] },
    { t:"section",
      id:"everyday",
      title:{ en:"Wood in ordinary life", ja:"暮らしのなかの木", zh:"日常生活中的木" },
      jp:"日用の木",
      body:[
        { t:"grid",
          cols:2,
          cells:[
            { h:{ en:"Cedar balls", ja:"杉玉", zh:"杉玉" },
              jp:"すぎだま",
              d:{
                en:"Takayama's sake breweries hang a ball of sugi sprigs under the eaves. It goes up green when the new season's sake is pressed, in late autumn or winter, and slowly turns brown as the sake matures — a clock made of leaves. The custom is traced to the cedar of Ōmiwa shrine in Nara, sacred to the god of brewing.",
                ja:"高山の酒蔵は軒下に杉の葉を丸めた玉を吊る。晩秋か冬、新酒が搾られると青いまま掲げられ、酒が熟すにつれてゆっくりと茶色になる——葉でつくった時計である。この習わしは、酒の神を祀る奈良の大神神社の杉にさかのぼるとされる。",
                zh:"高山的酒藏在屋簷下懸掛以柳杉枝葉紮成的球。晚秋或冬天新酒榨出時掛上，還是青綠的，隨著酒逐漸熟成而慢慢轉褐——一座以葉子做成的時鐘。此俗據說源於奈良大神神社的杉，那是祭祀酒神之處。" } },
            { h:{ en:"Geta in Gujō", ja:"郡上の下駄", zh:"郡上的木屐" },
              jp:"郡上おどり",
              d:{
                en:"From mid-July to early September the town of Gujō Hachiman dances in the streets on some thirty nights, all night long in mid-August, and the dancers wear wooden clogs whose clatter on the paving is part of the music. Local shops sell geta cut from local wood.",
                ja:"七月中旬から九月上旬にかけて、郡上八幡の町は三十夜あまり通りで踊り、八月中旬には夜通し踊る。踊り手は下駄を履き、石畳に響くその音が音楽の一部となる。町の店は地元の木から挽いた下駄を売る。",
                zh:"從七月中旬到九月上旬，郡上八幡鎮民在街頭跳舞三十餘夜，八月中旬更是通宵達旦；舞者穿著木屐，木屐在石板路上的喀噠聲本身就是音樂的一部分。當地商店販售以本地木材製成的木屐。" } },
            { h:{ en:"The bride's chest", ja:"嫁入り箪笥", zh:"嫁妝衣櫃" },
              jp:"桐箪笥",
              d:{
                en:"A chest of paulownia, light, insect-resistant and slow to let damp through, was once the centre of a bride's trousseau across central Japan. Families planted a paulownia when a daughter was born so that it would be large enough to make her chest when she married.",
                ja:"軽く、虫がつきにくく、湿気を通しにくい桐の箪笥は、かつて中部日本の花嫁道具の中心だった。娘が生まれると家は桐を植え、嫁ぐころにはその箪笥をつくれる大きさに育つようにした。",
                zh:"泡桐做的衣櫃輕巧、防蟲、不易透濕，曾是日本中部新娘嫁妝的核心。家中生了女兒便種下一棵泡桐，好讓它在女兒出嫁時長到足以做成衣櫃。" } },
            { h:{ en:"The hinoki bath", ja:"檜風呂", zh:"檜木浴桶" },
              jp:"ひのきぶろ",
              d:{
                en:"A tub of hinoki boards — scented, warm to the touch, resistant to rot when kept well — is the traditional luxury of a Japanese bath, and a common product of the Tōnō and Ura-Kiso workshops. See <a href=\"home.html\">Wood in the Home</a>.",
                ja:"香り高く、肌に温かく、手入れすれば腐りにくい檜の板の浴槽は、日本の風呂の伝統的な贅沢であり、東濃や裏木曽の工房のよくある製品である。<a href=\"home.html\">住まいと木</a>を参照。",
                zh:"以扁柏木板製成的浴桶——芳香、觸感溫暖、保養得宜便不易腐朽——是日式沐浴的傳統奢華，也是東濃與裏木曾工坊常見的產品。見<a href=\"home.html\">居家與木</a>。" } }
          ] }
      ] },
    { t:"related",
      items:[
        { href:"floats.html", why:{ en:"How the festival floats are built.", ja:"屋台はどうつくられるか。", zh:"祭典屋台如何建造。" } },
        { href:"gods.html",
          why:{ en:"The religious side of felling and building.", ja:"伐ることと建てることの信仰の側面。", zh:"伐木與建造的信仰面向。" } },
        { href:"architecture.html",
          why:{ en:"The playhouses and other buildings in their setting.", ja:"芝居小屋ほかの建物を、その場所で。", zh:"戲棚與其他建築的所在。" } },
        { href:"woodjourneys.html", why:{ en:"Routes timed to the festivals.", ja:"祭に合わせた旅程。", zh:"配合祭典的行程。" } }
      ] }
  ] };

/* ---- -------------------------------------------- poetry */
GIFU.pages["poetry"] = { kicker:{ en:"The Land of Wood · 08", ja:"木の国 · 08", zh:"木之國 · 08" },
  title:{ en:"Wood in Letters", ja:"詩歌と文学のなかの木", zh:"詩文中的木" },
  jp:"万葉 · 芭蕉 · 藤村",
  lede:{
    en:"The first poems in Japanese that mention the carpenters of Hida were written in the eighth century, and they are already using the carpenter's tool as a metaphor for love. Since then the forests and workshops of Gifu have been written about by an anonymous court poet, the greatest of haiku poets, one of the founders of the modern Japanese novel and a woodworker who wrote as well as he worked. This page reads them in order, with the texts given in the original and in plain translation.",
    ja:"飛騨の大工にふれる日本語の最初の歌は八世紀に詠まれ、すでに大工の道具を恋のたとえとして用いている。以来、岐阜の森と工房は、名もない宮廷の歌人、俳諧の最大の詩人、日本の近代小説の祖の一人、そして仕事と同じほどに書くことに長けた木工家によって書かれてきた。この頁はそれらを順に読み、原文と平易な訳を添える。",
    zh:"日文中最早提及飛驒木匠的詩歌寫於八世紀，而且已經把木匠的工具當作愛情的隱喻。此後，岐阜的森林與工坊，被一位無名的宮廷歌人、最偉大的俳句詩人、日本近代小說的奠基者之一，以及一位文章與手藝同樣出色的木工家寫進了文字。本頁依序閱讀這些作品，附上原文與平實的譯文。" },
  body:[
    { t:"section",
      id:"manyo",
      title:{ en:"The Man'yōshū: the inked line", ja:"万葉集——墨縄", zh:"萬葉集：墨線" },
      jp:"飛騨人の打つ墨縄",
      body:[
        { t:"p",
          text:{
            en:"The Man'yōshū, compiled in the second half of the eighth century, is the oldest anthology of Japanese poetry, and it contains the first literary appearance of the Hida carpenters. The poem is a love poem, anonymous, in Book XI. Its image is the carpenter's <em>sumitsubo</em>: an ink pot with a reel of cord that is drawn out, pinned at the far end of a log, lifted and snapped, leaving a perfectly straight black line to cut to. The Hida carpenter's line was evidently proverbial for straightness.",
            ja:"八世紀後半に編まれた『万葉集』は日本最古の歌集であり、飛騨の大工が文学に初めて姿を見せる場所である。その歌は巻十一の作者不詳の恋の歌である。像は大工の墨壺——糸車のついた墨の壺で、糸を引き出し、丸太の向こう端に留め、持ち上げて弾くと、それに沿って伐るべき完全にまっすぐな黒い線が残る。飛騨の工の墨縄は、まっすぐなものの代名詞だったらしい。",
            zh:"編成於八世紀後半的《萬葉集》是日本最古老的詩歌選集，飛驒木匠也在此首度登上文學舞台。那是卷十一中一首作者不詳的戀歌，意象是木匠的「墨斗」：一只附有線輪的墨壺，把線拉出、在原木另一端釘住、提起一彈，便留下一條筆直的黑線，依此下鋸。飛驒木匠的墨線，顯然是「筆直」的代名詞。" } },
        { t:"quote",
          text:{
            en:"Whatever may come, I will not waver in my thoughts: straight on, like the inked line a Hida carpenter snaps — one way only.",
            ja:"かにかくに　物は思はじ　飛騨人の　打つ墨縄の　ただ一道に",
            zh:"無論如何，我都不再多想——就像飛驒匠人彈出的墨線，只有一條直道。" },
          cite:{ en:"Man'yōshū, Book XI, poem 2648 · anonymous", ja:"『万葉集』巻十一・二六四八　作者不詳", zh:"《萬葉集》卷十一・2648　佚名" } },
        { t:"figure",
          caption:{
            en:"The carpenter's ink line. Cord is drawn from the reel through the ink-soaked pad of the <em>sumitsubo</em>, fixed at the far end with a small pin, lifted and released; it strikes the timber and leaves a straight line to saw or adze to. The tool is shown on <a href=\"tools.html\">The Carpenter's Tools</a>.",
            ja:"大工の墨打ち。墨壺の墨を含ませた綿を通して糸車から糸を引き出し、向こう端を小さな針で留め、持ち上げて放すと、糸が材を打ち、鋸や手斧をあてる直線が残る。道具は<a href=\"tools.html\">大工道具</a>に示す。",
            zh:"木匠彈墨線。從墨斗的線輪抽出墨線，穿過浸滿墨汁的棉墊，末端以小針固定，提起再放開，線便打在木料上，留下一條可供鋸切或斧削的直線。工具見<a href=\"tools.html\">木匠的工具</a>。" },
          svg:function(lang, L){
            var T = {
              pot:{en:"sumitsubo · ink pot",ja:"墨壺",zh:"墨斗"}, reel:{en:"reel",ja:"糸車",zh:"線輪"},
              pad:{en:"ink-soaked cotton",ja:"墨を含んだ綿",zh:"浸墨棉"}, pin:{en:"karuko pin",ja:"軽子（針）",zh:"定針"},
              line:{en:"snapped line",ja:"打った墨の線",zh:"彈出的墨線"}, log:{en:"timber",ja:"材",zh:"木料"}, lift:{en:"lift and release",ja:"持ち上げて放す",zh:"提起・放開"}
            };
            function t(k){ return L(T[k]); }
            var s = '<svg viewBox="0 0 760 260" role="img" aria-label="ink line">';
            /* timber */
            s += '<rect x="40" y="150" width="680" height="60" fill="#EDE5D2" stroke="#B4AC9C"/>';
            for (var g=0; g<7; g++) s += '<path d="M40 '+(158+g*8)+' C 250 '+(152+g*8)+', 480 '+(164+g*8)+', 720 '+(156+g*8)+'" fill="none" stroke="#E4E0D6"/>';
            s += '<text x="700" y="232" text-anchor="end" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+t("log")+'</text>';
            /* snapped line */
            s += '<line x1="70" y1="178" x2="690" y2="178" stroke="#201E1B" stroke-width="1.6"/>';
            s += '<text x="380" y="198" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+t("line")+'</text>';
            /* lifted cord */
            s += '<path d="M70 178 Q 380 70 690 178" fill="none" stroke="#8B857C" stroke-dasharray="4 3"/>';
            s += '<text x="380" y="112" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#8B857C">↑ '+t("lift")+'</text>';
            /* pot at left */
            s += '<path d="M20 120 L110 120 L118 150 L12 150 Z" fill="#E7DFD2" stroke="#7C6B52"/>';
            s += '<circle cx="40" cy="110" r="18" fill="#F5F3ED" stroke="#7C6B52"/><circle cx="40" cy="110" r="4" fill="#7C6B52"/>';
            s += '<ellipse cx="88" cy="126" rx="16" ry="6" fill="#55504A"/>';
            s += '<text x="20" y="60" font-family="Georgia,serif" font-size="13" fill="#201E1B">'+t("pot")+'</text>';
            s += '<text x="20" y="82" font-family="system-ui,sans-serif" font-size="10" fill="#55504A">'+t("reel")+' · '+t("pad")+'</text>';
            /* pin at right */
            s += '<line x1="690" y1="150" x2="690" y2="178" stroke="#7C6B52" stroke-width="2"/><circle cx="690" cy="146" r="4" fill="#7C6B52"/>';
            s += '<text x="700" y="140" font-family="system-ui,sans-serif" font-size="10" fill="#55504A">'+t("pin")+'</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p",
          text:{
            en:"A second poem, in Book VII, speaks of the Hida people floating timber: “the river Nyū, where they say the men of Hida float their logs — words can pass across it, but boats cannot.” It is a lover's complaint about a messenger who can come but a meeting that cannot, and it records, almost in passing, that river-driving of timber was already a Hida trade in the eighth century. A third, by the monk Mansei in Book III, laments fine boat timber felled on Mount Ashigara “with the <em>tobusa</em> set up” — the rite, still practised at the Ise fellings, of placing the tree's crown on its stump.",
            ja:"巻七の別の歌は、飛騨の人が木を流すことを詠む。「斐太人の真木流すといふ丹生の川言は通へど船そ通はぬ」。使いは来られても逢うことはかなわない、という恋のなげきであり、八世紀にすでに木の川流しが飛騨の生業だったことを、ほとんど通りすがりに記している。巻三の沙弥満誓の歌は、足柄山で「鳥総立て」て伐られた惜しい船材をなげく。伐った木の梢を切り株に立てるこの儀礼は、いまも伊勢の伐採で行われている。",
            zh:"卷七另一首詩提到飛驒人放運木材：「聽說斐太人放流真木的丹生之河——言語能渡，舟船卻不能渡。」這是一句情人的怨嘆：信使能來，相會卻不能；它也幾乎順帶地記錄下，河流放木在八世紀已是飛驒的營生。第三首出自卷三的沙彌滿誓，哀嘆足柄山上「立起鳥總」後伐下的上好船材——把樹梢插在樹樁上的這項儀式，至今仍在伊勢伐木時舉行。" } }
      ] },
    { t:"section",
      id:"basho",
      title:{ en:"Bashō: boats of fire, boats to Ise", ja:"芭蕉——火の舟、伊勢への舟", zh:"芭蕉：火之舟，往伊勢之舟" },
      jp:"鵜舟・奥の細道",
      body:[
        { t:"p",
          text:{
            en:"Matsuo Bashō passed through Mino often; he had pupils in Ōgaki and Gifu. In the summer of 1688 he watched the cormorant fishing on the Nagara from a boat, and wrote the verse that has belonged to the river ever since. Its movement — excitement turning, as the fires go out and the boats drift down, into a sadness it cannot name — is the movement of the evening itself.",
            ja:"松尾芭蕉はたびたび美濃を通った。大垣にも岐阜にも門人がいた。一六八八年の夏、長良川の鵜飼を舟から見て、以来この川のものとなった句を詠んだ。篝火が消え舟が川を下るにつれ、興が名づけようのない悲しみに変わっていく——その運びは、その夕べそのものの運びである。",
            zh:"松尾芭蕉常經過美濃，在大垣與岐阜都有門人。1688 年夏，他在船上觀看長良川的鸕鶿捕魚，寫下那句從此屬於這條河的俳句。句中的轉折——隨著篝火熄滅、船隻順流漂遠，興奮化為一種說不出名字的悲涼——正是那個夜晚本身的轉折。" } },
        { t:"quote",
          text:{
            en:"How delightful — and then, after, how sad: the cormorant boats.",
            ja:"おもしろうて　やがてかなしき　鵜舟かな",
            zh:"有趣呀，隨後卻又悲涼——鸕鶿舟。" },
          cite:{ en:"Matsuo Bashō, Gifu, 1688", ja:"松尾芭蕉　岐阜にて　一六八八年", zh:"松尾芭蕉，於岐阜，1688 年" } },
        { t:"p",
          text:{
            en:"A year later his most famous journey, the <em>Oku no hosomichi</em>, ended at Ōgaki. After resting with his pupils, he set out again by boat down the river towards Ise, “to worship at the rebuilding of the shrines” — the Sengū of 1689. The greatest travel book in Japanese thus ends with its author boarding a wooden boat in Mino to go and see the timber of the gods renewed.",
            ja:"その翌年、最もよく知られた旅『おくのほそ道』は大垣で結ばれた。門人のもとで休んだのち、芭蕉は「伊勢の遷宮をおがまん」と、ふたたび舟に乗って川を下った——一六八九年の遷宮である。日本語の最大の紀行は、こうして作者が美濃で木の舟に乗り、神の材が新たにされるのを見に行くところで終わる。",
            zh:"一年後，他最著名的旅程《奧之細道》在大垣畫下句點。在門人家中休息之後，他又「為參拜伊勢遷宮」再度乘船順流而下——那是 1689 年的遷宮。日文中最偉大的紀行文學，就這樣以作者在美濃登上一艘木船、前往觀看神明之木煥然一新作結。" } },
        { t:"quote",
          text:{
            en:"Parting like the clam from its shell, I go on to Futami — and autumn goes too.",
            ja:"蛤の　ふたみにわかれ　行秋ぞ",
            zh:"如蛤與殼分離，我往二見而去——秋也隨之而去。" },
          cite:{
            en:"Matsuo Bashō, the last verse of Oku no hosomichi, Ōgaki, 1689",
            ja:"松尾芭蕉『おくのほそ道』結びの句　大垣　一六八九年",
            zh:"松尾芭蕉，《奧之細道》結尾之句，大垣，1689 年" } }
      ] },
    { t:"section",
      id:"toson",
      title:{ en:"Tōson: the forest taken away", ja:"藤村——取り上げられた森", zh:"藤村：被奪走的森林" },
      jp:"夜明け前",
      body:[
        { t:"p",
          text:{
            en:"Shimazaki Tōson was born in 1872 in Magome, a post town on the Nakasendō at the southern end of the Kiso valley — in Nagano until 2005, when the village it belonged to merged across the prefectural line into Nakatsugawa. His novel <em>Before the Dawn</em>, serialised from 1929 to 1935, follows Aoyama Hanzō, a village headman modelled on the author's father, through the Meiji restoration. One of its central conflicts is about wood. Under Owari rule the villagers of Kiso had lived with strict limits — the five protected trees could not be cut — but also with customary rights to the rest of the forest for fuel, building timber and livelihood. When the new state took the forests as government property, it shut them out far more completely; Hanzō petitions for the old rights, fails, and loses his office. Historians have debated how closely the novel follows the documented affair, but its account of what it meant to a mountain village to lose its forest is the most widely read ever written.",
            ja:"島崎藤村は一八七二年、木曽谷の南端、中山道の宿場馬籠に生まれた。馬籠は二〇〇五年まで長野県にあったが、その村が県境を越えて中津川市と合併した。一九二九年から一九三五年にかけて連載された小説『夜明け前』は、作者の父をモデルとする庄屋、青山半蔵を明治維新のなかで追う。中心的な葛藤の一つは木をめぐるものである。尾張藩のもとで木曽の村人は、五木を伐ってはならないという厳しい制限とともに、残りの森を燃料や建築材や暮らしに使う慣行の権利とともに生きていた。新しい国家が森を官有としたとき、村人ははるかに徹底して締め出された。半蔵は旧来の権利を請願し、敗れ、役を失う。小説が記録に残る事件にどこまで忠実かは歴史家の議論の的だが、山の村にとって森を失うことが何を意味したかを描いたものとして、これほど広く読まれたものはない。",
            zh:"島崎藤村 1872 年生於木曾谷南端、中山道的宿場馬籠——該地原屬長野縣，直到 2005 年所屬村落越過縣界併入中津川市。他的小說《黎明之前》於 1929 至 1935 年連載，追隨以作者父親為原型的村長青山半藏走過明治維新。其核心衝突之一與木有關。在尾張藩統治下，木曾村民生活在嚴格的限制中——五木不得砍伐——但同時擁有對其餘森林的慣行權利，可取用燃料、建材與生計所需。新國家把森林收為官有後，村民被排除得徹底得多；半藏為舊有權利請願，失敗，並失去職位。小說與有文獻可考的事件相符到什麼程度，史家各有爭論；但就描寫一座山村失去森林意味著什麼而言，沒有哪部作品比它流傳更廣。" } },
        { t:"quote",
          text:{ en:"The Kiso road lies entirely in the mountains.", ja:"木曾路はすべて山の中である。", zh:"木曾路全在山中。" },
          cite:{
            en:"Shimazaki Tōson, the opening line of Before the Dawn, 1929",
            ja:"島崎藤村『夜明け前』冒頭　一九二九年",
            zh:"島崎藤村，《黎明之前》開篇，1929 年" } }
      ] },
    { t:"section",
      id:"modern",
      title:{ en:"Writing by those who work wood", ja:"木を扱う人の文章", zh:"木作者的文字" },
      jp:"木工家の随筆",
      body:[
        { t:"p",
          text:{
            en:"In the second half of the twentieth century a new kind of wood literature appeared in Japanese: books written not about the forest or the craftsman but by the craftsman, in plain, exact prose about the material. Two figures stand at its centre. One, Nishioka Tsunekazu, was the hereditary master carpenter of Hōryūji in Nara; the other, Hayakawa Kennosuke, was a furniture maker in the hinoki village of Tsukechi, in the Ura-Kiso forests of Gifu.",
            ja:"二十世紀の後半、日本語に新しい種類の木の文学が現れた。森や職人について書いた本ではなく、職人自身が、材について平明で正確な散文で書いた本である。その中心に二人の人物がいる。一人は奈良法隆寺の代々の宮大工の棟梁、西岡常一。もう一人は岐阜の裏木曽の森、檜の村付知の家具職人、早川謙之輔である。",
            zh:"二十世紀後半，日文中出現了一種新的木之文學：不是寫森林或工匠的書，而是工匠本人以平實精確的散文書寫材料的書。其核心有兩位人物：一位是奈良法隆寺世襲的宮大工棟樑西岡常一；另一位是岐阜裏木曾森林中扁柏之村付知的家具師傅早川謙之輔。" } },
        { t:"defs",
          items:[
            { term:{ en:"The oral maxims of the temple carpenters", ja:"宮大工の口伝", zh:"宮大工的口傳" },
              jp:"法隆寺大工の口伝",
              def:{
                en:"Nishioka's books made widely known a set of rules handed down orally among the carpenters of Hōryūji. The best known says that the joinery of a temple is the joining of the woods' temperaments, and the joining of the woods' temperaments is the joining of the carpenters' hearts — that each timber has its own twist and tendency, which must be set against the others so that they hold each other in balance. Another says: buy not the timber but the mountain — know where a tree grew and use it in the building as it stood on the slope. Both are widely quoted by Japanese carpenters, in Hida as elsewhere.",
                ja:"西岡の著作は、法隆寺の大工に口伝えで受け継がれてきた一連の心得を広く知らしめた。最もよく知られるのは「堂塔の木組みは木の癖組み、木の癖組みは工人たちの心組み」——材にはそれぞれねじれや癖があり、互いに釣り合って支え合うようそれを組み合わせねばならない、というものである。もう一つは「木を買わず山を買え」——木がどこに育ったかを知り、斜面に立っていたとおりに建物に使え、というもの。いずれも飛騨をはじめ、各地の大工のあいだで広く引かれる。",
                zh:"西岡的著作讓法隆寺木匠之間口耳相傳的一套心法廣為人知。最有名的一句說：堂塔的木構是「木之癖」的組合，而木之癖的組合是「工匠之心」的組合——每根木料都有自己的扭曲與傾向，必須彼此相抵、相互平衡地支撐。另一句說：「不買木，要買山」——要知道樹長在哪裡，並依它在山坡上站立的樣子用在建築中。兩句在日本各地的木匠之間廣為引用，飛驒也不例外。" } },
            { term:{ en:"Hayakawa's four books", ja:"早川の四冊", zh:"早川的四本書" },
              jp:"早川謙之輔の著作",
              def:{
                en:"<em>Mokkō no hanashi</em> (1993), <em>Mokkō no sekai</em> (1996), a study of the lacquer and woodwork master Kuroda Tatsuaki (2000) and <em>Ki ni manabu</em> (2005), the last two from Shinchōsha. They describe a working life in Tsukechi: buying logs at auction, air-drying boards for years, the character of hinoki, chestnut and zelkova, and the discipline of making a ceiling or a table so that it will still be right in a century. For a reader of Japanese they are among the best introductions to working wood.",
                ja:"『木工のはなし』（一九九三年）、『木工の世界』（一九九六年）、漆と木工の名匠黒田辰秋を論じた書（二〇〇〇年）、『木に学ぶ』（二〇〇五年）。後の二冊は新潮社刊。付知での仕事の暮らしを描く——市で丸太を買い、板を何年も天然乾燥させ、檜や栗や欅の性質を知り、百年後にもまだ正しくあるよう天井や机をつくる規律。日本語を読む人にとって、木を扱うことへの最良の入門の一つである。",
                zh:"《木工のはなし》（1993）、《木工の世界》（1996）、論漆藝與木工大師黑田辰秋之書（2000）與《木に学ぶ》（2005），後兩本由新潮社出版。書中描寫他在付知的工作生涯：在拍賣會上買原木、把木板天然乾燥好幾年、扁柏栗木與櫸木的性格，以及製作天花板或桌子、要讓它百年後依然妥貼的紀律。對能讀日文的人來說，這是關於木作最好的入門書之一。" } },
            { term:{ en:"Kōda Aya, Ki", ja:"幸田文『木』", zh:"幸田文《木》" },
              jp:"一九九二年",
              def:{
                en:"A collection of essays by the novelist Kōda Aya, published in 1992, two years after her death, recording her visits over many years to forests and timber yards to look at trees — among them the hinoki forests, the sawyers who cut them and the old temple timbers they became. It is the classic account in Japanese of an outsider learning to see wood.",
                ja:"小説家幸田文の随筆集で、没後二年の一九九二年に刊行された。長年にわたり木を見るために森や木場を訪ねた記録で、檜の森、それを挽く木挽き、そしてそれがなった古い寺の材などが描かれる。部外者が木を見ることを学んでいく過程を記した、日本語の古典である。",
                zh:"小說家幸田文的隨筆集，1992 年、即她辭世兩年後出版，記錄她多年來為了看樹而走訪森林與木材行的經歷——其中包括扁柏林、鋸解扁柏的大鋸匠，以及扁柏最終化成的古寺木材。這是日文中描寫局外人學會「看木」的經典。" } }
          ] }
      ] },
    { t:"section",
      id:"reading",
      title:{ en:"A reading list", ja:"読書案内", zh:"閱讀清單" },
      jp:"文献",
      body:[
        { t:"p",
          text:{
            en:"Works in which the forests, timber and woodworkers of Gifu and its neighbours appear, in order of composition. Most classical texts are available in modern Japanese editions and several in English translation.",
            ja:"岐阜とその近隣の森・材・木工が現れる作品を、成立順に並べた。古典の多くは現代語訳で読め、いくつかは英訳もある。",
            zh:"依寫作年代排列、其中出現岐阜及其鄰近地區森林、木材與木工的作品。多數古典文本有現代日語版本，部分有英譯本。" } },
        { t:"table",
          caption:{ en:"Wood in Japanese letters", ja:"日本の文学のなかの木", zh:"日本文學中的木" },
          cols:[
            { en:"Date", ja:"年代", zh:"年代" },
            { en:"Work", ja:"作品", zh:"作品" },
            { en:"Author", ja:"作者", zh:"作者" },
            { en:"What it has to do with wood", ja:"木との関わり", zh:"與木的關係" }
          ],
          numCols:[0],
          rows:[
            [
              "c. 759",
              { en:"Man'yōshū", ja:"万葉集", zh:"萬葉集" },
              { en:"various", ja:"諸家", zh:"多人" },
              {
                en:"The Hida carpenter's inked line; Hida men floating logs; the <em>tobusa</em> rite.",
                ja:"飛騨の工の墨縄、木を流す飛騨人、鳥総立て。",
                zh:"飛驒木匠的墨線、放運原木的飛驒人、鳥總立之禮。" }
            ],
            [
              "c. 1120",
              { en:"Konjaku monogatari", ja:"今昔物語集", zh:"今昔物語集" },
              { en:"anonymous", ja:"編者未詳", zh:"佚名" },
              {
                en:"The Hida carpenter's trick hall, whose doors shut as one approaches, and the painter Kawanari.",
                ja:"近づくと扉が閉じる飛騨の工の堂と、絵師川成。",
                zh:"飛驒木匠那座一走近門就關上的機關堂，與畫師川成。" }
            ],
            [
              "1688",
              { en:"“The cormorant boats”", ja:"「鵜舟」の句", zh:"〈鸕鶿舟〉之句" },
              { en:"Matsuo Bashō", ja:"松尾芭蕉", zh:"松尾芭蕉" },
              { en:"The Nagara fishing boats by firelight.", ja:"篝火の長良川の鵜舟。", zh:"篝火映照下的長良川鸕鶿舟。" }
            ],
            [
              "1702",
              { en:"Oku no hosomichi", ja:"おくのほそ道", zh:"奧之細道" },
              { en:"Matsuo Bashō", ja:"松尾芭蕉", zh:"松尾芭蕉" },
              {
                en:"Ends at Ōgaki with a boat journey towards the Ise Sengū of 1689. (Journey 1689; published 1702.)",
                ja:"大垣で結ばれ、一六八九年の伊勢遷宮へ舟で向かう。（旅は一六八九年、刊行は一七〇二年）",
                zh:"在大垣作結，乘船前往 1689 年的伊勢遷宮。（旅行於 1689 年，出版於 1702 年）" }
            ],
            [
              "1808",
              { en:"Hida no takumi monogatari", ja:"飛騨匠物語", zh:"飛驒匠物語" },
              { en:"Ishikawa Masamochi, ill. Hokusai", ja:"石川雅望・葛飾北斎画", zh:"石川雅望著、葛飾北齋繪" },
              {
                en:"A Hida master and apprentice learn carpentry from immortals.",
                ja:"飛騨の名工と弟子が仙人から工の術を学ぶ。",
                zh:"飛驒名匠與徒弟向仙人學習木工之術。" }
            ],
            [
              "1929–35",
              { en:"Yoake mae (Before the Dawn)", ja:"夜明け前", zh:"黎明之前" },
              { en:"Shimazaki Tōson", ja:"島崎藤村", zh:"島崎藤村" },
              {
                en:"A Kiso headman's struggle over forest rights in the Meiji era.",
                ja:"明治の山林の権利をめぐる木曽の庄屋の闘い。",
                zh:"木曾村長為明治時期山林權利所做的抗爭。" }
            ],
            [
              "1988",
              { en:"Ki ni manabe", ja:"木に学べ", zh:"向木學習" },
              { en:"Nishioka Tsunekazu", ja:"西岡常一", zh:"西岡常一" },
              {
                en:"A temple carpenter on hinoki, the life of timber and the oral maxims.",
                ja:"檜と材の命と口伝を語る宮大工。",
                zh:"宮大工談扁柏、木材的生命與口傳心法。" }
            ],
            [
              "1992",
              { en:"Ki", ja:"木", zh:"木" },
              { en:"Kōda Aya", ja:"幸田文", zh:"幸田文" },
              { en:"Essays from visits to forests and timber yards.", ja:"森と木場を訪ねた随筆。", zh:"走訪森林與木材行的隨筆。" }
            ],
            [
              "1993–2005",
              {
                en:"Mokkō no hanashi, Mokkō no sekai, Ki ni manabu",
                ja:"木工のはなし・木工の世界・木に学ぶ",
                zh:"《木工のはなし》《木工の世界》《木に学ぶ》" },
              { en:"Hayakawa Kennosuke", ja:"早川謙之輔", zh:"早川謙之輔" },
              { en:"A woodworker's life in Tsukechi, Ura-Kiso.", ja:"裏木曽付知の木工家の暮らし。", zh:"裏木曾付知一位木工家的生活。" }
            ]
          ] },
        { t:"note",
          label:{ en:"On the translations", ja:"訳について", zh:"關於譯文" },
          text:{
            en:"The English and Chinese renderings of the poems on this page are this book's own, made to be plain rather than poetic. Where a well-known published translation exists, readers are encouraged to compare it.",
            ja:"この頁の歌と句の英訳・中国語訳は本書によるもので、詩的であるより平明であることを旨とした。よく知られた既刊の訳がある場合は、比べてみることを勧める。",
            zh:"本頁詩句的英文與中文譯文為本書自譯，力求平實而非詩化。若有知名的已出版譯本，建議讀者對照閱讀。" } }
      ] },
    { t:"related",
      items:[
        { href:"takumi.html",
          why:{ en:"The carpenters the Man'yōshū poets knew.", ja:"万葉の歌人が知っていた大工たち。", zh:"萬葉歌人所知的木匠們。" } },
        { href:"fivetrees.html",
          why:{ en:"The forest regime behind Before the Dawn.", ja:"『夜明け前』の背後にある山の制度。", zh:"《黎明之前》背後的山林制度。" } },
        { href:"words.html", why:{ en:"The vocabulary the poems draw on.", ja:"歌が拠りどころとする語彙。", zh:"詩歌所取材的詞彙。" } },
        { href:"tools.html",
          why:{ en:"The ink pot and the other tools of the carpenter.", ja:"墨壺ほか大工の道具。", zh:"墨斗與木匠的其他工具。" } }
      ] }
  ] };

/* ---- --------------------------------------------- words */
GIFU.pages["words"] = { kicker:{ en:"The Land of Wood · 09", ja:"木の国 · 09", zh:"木之國 · 09" },
  title:{ en:"The Words of Wood", ja:"木をめぐる言葉", zh:"圍繞著木的語言" },
  jp:"木目・杢・節・石・才",
  lede:{
    en:"Every trade builds a vocabulary for what it needs to tell apart, and the Japanese timber trade has had a long time to build one. It has separate words for each end of a log, a dozen names for figured grain, a scale of knots, units of volume that pre-date the metric system and are still used at auctions, and a stock of everyday idioms that come from the carpenter's yard without most speakers realising it. This page sets them out by family. The complete list, filterable, is in the <a href=\"glossary.html\">Glossary</a>.",
    ja:"どの職も、見分けねばならぬものに言葉をつくる。日本の木材の業界には、それをつくる長い時間があった。丸太の両端それぞれを呼ぶ語、十を超える杢の名、節の尺度、メートル法より古くいまも市で使われる体積の単位、そして大工の仕事場から出たと多くの話し手が気づかぬまま使っている日常の言い回し。この頁はそれを系統ごとに並べる。絞り込める全一覧は<a href=\"glossary.html\">用語集</a>にある。",
    zh:"每個行業都會為自己需要分辨的事物建立詞彙，而日本木材業有很長的時間來建立它。它有分別稱呼原木兩端的詞、十幾種花紋的名稱、一套節疤的等級、比公制更古老且至今仍在拍賣場使用的體積單位，以及一批出自木匠作坊、多數人使用時卻渾然不覺的日常慣用語。本頁依系統分類列出。可篩選的完整詞表見<a href=\"glossary.html\">詞彙表</a>。" },
  body:[
    { t:"section",
      id:"log",
      title:{ en:"The parts of a log", ja:"丸太の部位", zh:"原木的部位" },
      jp:"元口・末口・心材・辺材",
      body:[
        { t:"figure",
          caption:{
            en:"The vocabulary of a log. A log has two named ends — the butt end (<em>motokuchi</em>), nearer the root, and the top end (<em>suekuchi</em>) — and it is measured at the top end, the smaller one, under bark. In section, the pith (<em>shin</em>) sits at the centre, heartwood (<em>akami</em>) around it, sapwood (<em>shirata</em>) outside that, and the bark outside all.",
            ja:"丸太の語彙。丸太には名のある二つの端がある——根に近い元口と、梢の側の末口——そして寸法は小さいほうの末口で、皮を除いて測る。断面では、中心に髄（心）、そのまわりに心材（赤身）、その外に辺材（白太）、いちばん外に樹皮がある。",
            zh:"原木的詞彙。原木有兩個有名稱的端頭——靠近根部的「元口」與樹梢一側的「末口」——量測時以較小的末口為準，且不含樹皮。在斷面上，髓心（心）居中，其外為心材（赤身），再外為邊材（白太），最外層是樹皮。" },
          svg:function(lang, L){
            var T = {
              moto:{en:"butt end · motokuchi",ja:"元口",zh:"元口（根端）"}, sue:{en:"top end · suekuchi",ja:"末口",zh:"末口（梢端）"},
              meas:{en:"measured here, under bark",ja:"ここで皮を除いて測る",zh:"於此處量測，不含樹皮"},
              shin:{en:"pith · shin",ja:"髄・心",zh:"髓心"}, akami:{en:"heartwood · akami",ja:"心材・赤身",zh:"心材・赤身"},
              shirata:{en:"sapwood · shirata",ja:"辺材・白太",zh:"邊材・白太"}, bark:{en:"bark",ja:"樹皮",zh:"樹皮"},
              ring:{en:"annual ring",ja:"年輪",zh:"年輪"}, len:{en:"length, typically 3 · 4 · 6 m",ja:"長さ　通常 3・4・6 m",zh:"長度　通常 3、4、6 公尺"}
            };
            function t(k){ return L(T[k]); }
            var s = '<svg viewBox="0 0 760 300" role="img" aria-label="log parts">';
            /* side view: tapered log */
            s += '<path d="M40 90 L420 105 L420 185 L40 200 Z" fill="#EDE5D2" stroke="#8B857C"/>';
            s += '<ellipse cx="40" cy="145" rx="16" ry="55" fill="#E7DFD2" stroke="#8B857C"/>';
            s += '<ellipse cx="420" cy="145" rx="13" ry="40" fill="#F0EDE4" stroke="#7C6B52" stroke-width="1.5"/>';
            s += '<text x="24" y="225" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+t("moto")+'</text>';
            s += '<text x="420" y="225" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+t("sue")+'</text>';
            s += '<text x="420" y="242" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#7C6B52">'+t("meas")+'</text>';
            s += '<line x1="40" y1="70" x2="420" y2="70" stroke="#8B857C"/><line x1="40" y1="64" x2="40" y2="76" stroke="#8B857C"/><line x1="420" y1="64" x2="420" y2="76" stroke="#8B857C"/>';
            s += '<text x="230" y="60" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+t("len")+'</text>';
            /* cross-section */
            var cx=600, cy=150;
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="104" fill="#8B857C"/>';
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="96" fill="#F0EDE4" stroke="#CDC6B9"/>';
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="70" fill="#E7C9B8" stroke="#CDC6B9"/>';
            for (var r=12; r<96; r+=10) s += '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="#B4AC9C" stroke-width="0.5"/>';
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="3" fill="#201E1B"/>';
            function lab(x,y,tx,ty,k){ s += '<line x1="'+x+'" y1="'+y+'" x2="'+tx+'" y2="'+ty+'" stroke="#55504A" stroke-width="0.75"/><text x="'+(tx+4)+'" y="'+(ty+4)+'" font-family="system-ui,sans-serif" font-size="10" fill="#201E1B">'+t(k)+'</text>'; }
            lab(cx,cy,cx+30,cy-120,"shin");
            lab(cx-40,cy+20,cx-150,cy+120,"akami");
            lab(cx+80,cy+30,cx+30,cy+130,"shirata");
            lab(cx+92,cy-48,cx+118,cy-96,"bark");
            lab(cx-55,cy-50,cx-150,cy-112,"ring");
            s += '</svg>';
            return s;
          } },
        { t:"defs",
          items:[
            { term:{ en:"Motokuchi / suekuchi", ja:"元口・末口", zh:"元口與末口" },
              jp:"もとくち・すえくち",
              romaji:"motokuchi, suekuchi",
              def:{
                en:"The butt end and the top end of a log. Logs are graded and priced by their top-end diameter, because that is the largest square or board that can be taken along the whole length. In a traditional building, a post is set with its butt end down, as the tree stood.",
                ja:"丸太の根元側の端と梢側の端。丸太は末口径で等級と値がつく。全長にわたって取れる最大の角や板は末口で決まるからである。伝統的な建物では、柱は木が立っていたとおり元口を下にして立てる。",
                zh:"原木根部一端與樹梢一端。原木依末口直徑分級定價，因為沿全長能取出的最大方材或木板由末口決定。傳統建築中，柱子要像樹原本站立那樣，元口朝下。" } },
            { term:{ en:"Akami / shirata", ja:"赤身・白太", zh:"赤身與白太" },
              jp:"心材・辺材",
              def:{
                en:"Heartwood and sapwood. In sugi the heartwood can be pink, red or nearly black, and the price of a board depends heavily on the colour; a board showing both red and white is called <em>genpei</em>, after the red and white banners of the Taira and Minamoto clans.",
                ja:"心材と辺材。スギの心材は桃色・赤・黒に近いものまであり、板の値は色に大きく左右される。赤と白の両方を見せる板は、平家と源氏の赤と白の旗にちなんで「源平」と呼ばれる。",
                zh:"心材與邊材。柳杉的心材可呈粉紅、紅色乃至近黑，木板價格很大程度取決於顏色；紅白兼具的木板稱為「源平」，典出平家與源氏的紅白軍旗。" } },
            { term:{ en:"Nenrin", ja:"年輪", zh:"年輪" },
              jp:"ねんりん",
              romaji:"nenrin",
              def:{
                en:"Annual rings. Each is a pale band of early wood grown in spring and a darker band of late wood grown in summer. Narrow, even rings — two to three millimetres in Tōnō hinoki — mean slow growth and are prized. <em>Nenrin o kasaneru</em>, “to pile up rings”, means to grow old with experience.",
                ja:"年輪。春に育つ淡い早材の帯と、夏に育つ濃い晩材の帯からなる。狭くそろった年輪——東濃ひのきで二〜三ミリ——はゆっくりした生長を意味し、尊ばれる。「年輪を重ねる」は経験とともに齢を重ねることをいう。",
                zh:"年輪。每一圈由春天長成的淺色早材帶與夏天長成的深色晚材帶組成。窄而均勻的年輪——東濃檜木為二至三公釐——意味著生長緩慢，備受珍視。「年輪を重ねる」意指隨閱歷增長而年歲漸長。" } },
            { term:{ en:"Shin-mochi / shin-sari", ja:"心持ち・心去り", zh:"帶心材與去心材" },
              jp:"しんもち・しんさり",
              def:{
                en:"A piece that contains the pith, and one cut clear of it. A post with the pith in it is strong but splits as it dries, so builders cut a relief kerf, <em>sewari</em>, down one face to control where the crack goes. Pith-free timber is stabler but needs a bigger log.",
                ja:"髄を含む材と、髄を外して取った材。心持ちの柱は強いが乾くと割れるので、大工は一面に背割りを入れて割れの出る場所を制御する。心去り材は安定しているが、太い丸太を要する。",
                zh:"含髓心的材與避開髓心取出的材。帶心柱雖強，乾燥時卻會開裂，因此木匠會在一面鋸出「背割」，控制裂縫出現的位置。去心材較穩定，但需要更粗的原木。" } }
          ] }
      ] },
    { t:"section",
      id:"grain",
      title:{ en:"Grain and figure", ja:"木目と杢", zh:"紋理與花紋" },
      jp:"柾目・板目・杢",
      body:[
        { t:"p",
          text:{
            en:"Japanese distinguishes ordinary grain, <em>mokume</em>, from figure, <em>moku</em> (杢) — the rare, patterned grain produced by burls, compression, wavy growth or cross-grain, which is valued far above plain wood. The names of the figures are a vocabulary of their own, much of it poetic.",
            ja:"日本語は、ふつうの木目と、杢——こぶ、圧縮、波打つ生長、交錯木理が生む珍しい模様の木目——を区別する。杢は並の材よりはるかに尊ばれる。その名はそれ自体が一つの語彙であり、多くは詩的である。",
            zh:"日文區分一般的紋理「木目」與「杢」——由樹瘤、受壓、波狀生長或交錯紋理所造成的罕見花紋，其價值遠高於平凡木材。花紋的名稱自成一套詞彙，許多頗富詩意。" } },
        { t:"table",
          caption:{ en:"Names of grain and figure", ja:"木目と杢の名", zh:"紋理與花紋的名稱" },
          cols:[
            { en:"Name", ja:"名", zh:"名稱" },
            { en:"Japanese", ja:"和名", zh:"日文" },
            { en:"What it looks like", ja:"見え方", zh:"外觀" },
            { en:"Where you meet it", ja:"出会う場所", zh:"常見於" }
          ],
          jpCols:[1],
          rows:[
            [
              { en:"Quartersawn", ja:"柾目", zh:"柾目（徑切紋）" },
              "柾目",
              {
                en:"Straight parallel lines; the face cut along a radius.",
                ja:"まっすぐ平行な線。半径に沿って挽いた面。",
                zh:"筆直平行的線條；沿半徑方向鋸出的面。" },
              { en:"Hinoki shrine timber, masu faces, instrument tops.", ja:"社殿の檜、枡の面、楽器の表板。", zh:"社殿扁柏、枡的側面、樂器面板。" }
            ],
            [
              { en:"Flatsawn", ja:"板目", zh:"板目（弦切紋）" },
              "板目",
              {
                en:"Nested arches or flames; the face cut along a tangent.",
                ja:"入れ子の山形や炎の形。接線に沿って挽いた面。",
                zh:"層層套疊的拱形或火焰狀；沿切線方向鋸出的面。" },
              { en:"Tabletops, sugi ceilings, panelling.", ja:"天板、スギの天井、羽目板。", zh:"桌面、柳杉天花板、壁板。" }
            ],
            [
              { en:"Scale figure", ja:"如鱗杢", zh:"如鱗杢" },
              "如鱗杢",
              { en:"Overlapping scales like a fish's side.", ja:"魚の脇のように重なる鱗。", zh:"如魚側般重疊的鱗片。" },
              { en:"Keyaki from old trees; temple doors, tray tables.", ja:"老木の欅。寺の扉、盆、座卓。", zh:"老櫸木；寺院門扇、托盤、矮桌。" }
            ],
            [
              { en:"Burl / ball figure", ja:"玉杢", zh:"玉杢（瘤紋）" },
              "玉杢",
              { en:"Small whorls and eyes in clusters.", ja:"群れた小さな渦と目。", zh:"成簇的小渦旋與眼狀紋。" },
              {
                en:"Keyaki, tochi, kusu burls; small boxes and trays.",
                ja:"欅・栃・楠のこぶ。小箱や盆。",
                zh:"櫸木、七葉樹、樟樹的瘤材；小盒與托盤。" }
            ],
            [
              { en:"Ripple figure", ja:"縮み杢", zh:"縮杢（波紋）" },
              "縮み杢",
              {
                en:"Fine bands across the grain that flash as the angle changes.",
                ja:"木目を横切る細かな帯が、角度を変えるときらめく。",
                zh:"橫越紋理的細帶，隨角度變化而閃光。" },
              {
                en:"Tochi and maple; the backs of violins and guitars.",
                ja:"栃と楓。バイオリンやギターの裏板。",
                zh:"七葉樹與楓木；小提琴與吉他的背板。" }
            ],
            [
              { en:"Bird's-eye", ja:"鳥眼杢", zh:"鳥眼杢" },
              "鳥眼杢",
              { en:"Scattered tiny rings like birds' eyes.", ja:"鳥の目のような小さな輪が散らばる。", zh:"散布的小圓圈，如鳥眼。" },
              { en:"Maple, occasionally Japanese species; very rare.", ja:"楓。まれに国産の樹種にも。ごく稀。", zh:"楓木，偶見於日本樹種；極為罕見。" }
            ],
            [
              { en:"Peony figure", ja:"牡丹杢", zh:"牡丹杢" },
              "牡丹杢",
              { en:"Large open rosettes.", ja:"大きく開いた花形。", zh:"大朵綻開的花形紋。" },
              { en:"Old keyaki and kusu; decorative panels.", ja:"欅や楠の古木。飾り板。", zh:"老櫸木與樟木；裝飾板。" }
            ],
            [
              { en:"Bamboo-leaf figure", ja:"笹杢", zh:"笹杢" },
              "笹杢",
              {
                en:"Pointed marks like bamboo leaves in quartered sugi.",
                ja:"柾目のスギに出る笹の葉のような尖った模様。",
                zh:"徑切柳杉上如竹葉般的尖形紋。" },
              { en:"Sugi and hinoki ceilings in tea rooms.", ja:"茶室のスギや檜の天井。", zh:"茶室的柳杉與扁柏天花板。" }
            ]
          ] },
        { t:"note",
          label:{ en:"Why figure is expensive", ja:"杢が高い理由", zh:"花紋為何昂貴" },
          text:{
            en:"Figure is usually the trace of stress or irregular growth — which is exactly what a structural timber should not have. The same log that is worthless as a beam can be worth a great deal as a veneer or a panel, and the timber auctions of Gifu and Nagoya still sell the best figured logs one at a time.",
            ja:"杢はたいてい応力や不規則な生長の痕跡であり、それは構造材がもってはならないものにほかならない。梁としては無価値の丸太が、突板や鏡板としては大きな値打ちをもちうる。岐阜や名古屋の市では、いまも最良の杢の丸太を一本ずつ売る。",
            zh:"花紋通常是應力或不規則生長留下的痕跡——而那恰恰是結構材不該有的。同一根原木，當作樑毫無價值，當作薄片或鑲板卻可能價值不菲；岐阜與名古屋的木材拍賣至今仍逐根拍賣最好的花紋原木。" } }
      ] },
    { t:"section",
      id:"knots",
      title:{ en:"Knots and grades", ja:"節と等級", zh:"節疤與等級" },
      jp:"無節・上小節・小節",
      body:[
        { t:"p",
          text:{
            en:"Japanese building timber is graded above all by its knots on the visible faces, a system that grew up because the inside of a traditional house shows its structure. The best posts are <em>mubushi</em>, knot-free, on four faces; a post clear on one face only, turned to the room, is cheaper. The grades below are the customary trade terms; the formal JAS visual grades use a different scheme and are explained on <a href=\"grading.html\">Grades &amp; Standards</a>.",
            ja:"日本の建築材は、なによりも見える面の節で等級がつく。伝統的な家は内側に構造を見せるので、この仕組みが育った。最良の柱は四方無節。一面だけ節のない、部屋に向けて使う柱はそれより安い。以下は慣行の商取引の語である。JASの目視等級は別の体系をとり、<a href=\"grading.html\">等級と規格</a>で説明する。",
            zh:"日本的建築用材，首先依可見面的節疤分級——這套制度之所以形成，是因為傳統住宅會把結構露在室內。最好的柱子是四面「無節」；只有一面無節、朝向室內使用的柱子則較便宜。以下為業界慣用的等級用語；正式的 JAS 目視等級採用另一套體系，說明見<a href=\"grading.html\">等級與規格</a>。" } },
        { t:"scale",
          title:{ en:"Customary knot grades, from best to ordinary", ja:"慣行の節の等級（上から並へ）", zh:"慣用節疤等級（由高至一般）" },
          segs:[
            { w:14, fill:"#FBFAF7", label:{ en:"mubushi · knot-free", ja:"無節", zh:"無節" } },
            { w:20, fill:"#F5F3ED", label:{ en:"jōkobushi · very small", ja:"上小節", zh:"上小節" } },
            { w:22, fill:"#EDEAE2", label:{ en:"kobushi · small", ja:"小節", zh:"小節" } },
            { w:44, fill:"#E4E0D6", label:{ en:"ittō · first grade (knots allowed)", ja:"一等（節あり）", zh:"一等（有節）" } }
          ],
          ticks:[{ en:"most costly", ja:"高い", zh:"最貴" }, "", "", { en:"most common", ja:"多い", zh:"最常見" }],
          note:{
            en:"Price between the extremes can differ by an order of magnitude for the same species and section. Knot size limits vary by mill and region; the terms describe the look of the face, not strength.",
            ja:"同じ樹種・同じ断面でも、両端の値は桁違いになりうる。節の大きさの基準は製材所や地域で異なる。これらの語は面の見えを言うもので、強度を言うものではない。",
            zh:"同一樹種、同一斷面，兩端價格可能相差十倍。節疤大小標準因製材所與地區而異；這些用語描述的是表面外觀，而非強度。" } },
        { t:"defs",
          items:[
            { term:{ en:"Ikibushi / shinibushi", ja:"生節・死節", zh:"活節與死節" },
              jp:"いきぶし・しにぶし",
              def:{
                en:"A live knot is the base of a living branch, grown into the surrounding wood and tight; a dead knot is the stub of a branch that died before the trunk grew round it, often loose, dark and liable to fall out. Pruning young trees is done to stop dead knots forming.",
                ja:"生節は生きた枝の付け根で、まわりの材と一体に育って締まっている。死節は幹が包み込む前に枯れた枝の残りで、しばしば緩く、黒く、抜けやすい。若い木の枝打ちは死節をつくらせないためにする。",
                zh:"活節是仍存活之枝條的基部，與周圍木材長成一體而緊密；死節則是樹幹包覆之前就已枯死的枝條殘段，常鬆動、色深、易脫落。對幼樹修枝，就是為了防止形成死節。" } },
            { term:{ en:"Ate", ja:"アテ", zh:"Ate（應力材）" },
              jp:"あて",
              def:{
                en:"Reaction wood — the dense, darker wood a conifer grows on the downhill side of a leaning trunk to push itself upright. It shrinks along the grain and warps badly, and carpenters avoid it. On the steep slopes of Hida it is common; the word is also a proper name for the hiba of the Noto peninsula.",
                ja:"あて材。傾いた幹を起こすために、針葉樹が谷側に育てる緻密で色の濃い材。繊維方向に縮み、ひどく狂うので大工は嫌う。急な飛騨の斜面では多い。能登半島のヒバの呼び名でもある。",
                zh:"應壓木——針葉樹在傾斜樹幹的下坡側長出的緻密深色木材，用來把自己推直。它會沿紋理方向收縮、嚴重翹曲，木匠避之唯恐不及。在飛驒的陡坡上很常見；這個詞也是能登半島羅漢柏的稱呼。" } }
          ] }
      ] },
    { t:"section",
      id:"units",
      title:{ en:"Units that outlived the metric system", ja:"メートル法を生き延びた単位", zh:"比公制更長命的單位" },
      jp:"尺・寸・石・才",
      body:[
        { t:"p",
          text:{
            en:"Japan phased out its old units in trade between 1959 and 1966, when the last exemptions, for land and buildings, ended. In the timber trade they never quite went away. Houses are still planned on a grid of <em>ken</em> and <em>shaku</em> because the standard sizes of tatami, sliding doors and plywood follow them; posts are still ordered as “three-sun-five” (about 10.5 cm) or “four-sun” (about 12 cm); and dealers at older markets still think in <em>koku</em> and <em>sai</em> while the invoice says cubic metres.",
            ja:"日本は一九五九年から一九六六年にかけて、取引における旧単位の使用を段階的に廃した。最後まで残った土地と建物の例外が終わったのが一九六六年である。それでも木材の業界からは消えきらなかった。畳・襖・合板の標準寸法がそれに従うため、家はいまも間と尺の格子で設計される。柱はいまも「三寸五分」（約十・五センチ）、「四寸」（約十二センチ）と注文される。古い市の業者は、請求書が立方メートルでも、頭では石や才で考える。",
            zh:"日本在 1959 至 1966 年間逐步廢除交易中的舊單位——最後保留的土地與建物例外，於 1966 年終止。但在木材業，舊單位從未真正消失。房屋至今仍以「間」與「尺」為格網設計，因為榻榻米、拉門與合板的標準尺寸都依此而定；柱子仍以「三寸五分」（約 10.5 公分）、「四寸」（約 12 公分）下單；老市場的業者即使發票寫的是立方公尺，腦中想的仍是「石」與「才」。" } },
        { t:"table",
          caption:{ en:"Traditional units in the timber trade", ja:"木材業界の伝統的な単位", zh:"木材業的傳統單位" },
          cols:[
            { en:"Unit", ja:"単位", zh:"單位" },
            { en:"Kanji", ja:"漢字", zh:"漢字" },
            { en:"Metric equivalent", ja:"メートル法換算", zh:"公制換算" },
            { en:"Use", ja:"用途", zh:"用途" }
          ],
          jpCols:[1],
          numCols:[2],
          rows:[
            [
              { en:"Shaku", ja:"尺", zh:"尺" },
              "尺",
              "30.30 cm",
              {
                en:"The basic length; log lengths (3 m ≈ 10 shaku; 4 m ≈ 13 shaku).",
                ja:"長さの基本。丸太の長さ（三メートル≒十尺、四メートル≒十三尺）。",
                zh:"長度基本單位；原木長度（3 公尺 ≈ 10 尺，4 公尺 ≈ 13 尺）。" }
            ],
            [
              { en:"Sun", ja:"寸", zh:"寸" },
              "寸",
              "3.03 cm",
              { en:"Section sizes of posts and beams.", ja:"柱や梁の断面寸法。", zh:"柱與樑的斷面尺寸。" }
            ],
            [
              { en:"Bu", ja:"分", zh:"分" },
              "分",
              "3.03 mm",
              { en:"Board thickness; joinery tolerances.", ja:"板の厚み、継手の逃げ。", zh:"板厚；榫接公差。" }
            ],
            [
              { en:"Ken", ja:"間", zh:"間" },
              "間",
              "1.82 m (6 shaku)",
              { en:"Column spacing and room modules.", ja:"柱の間隔と部屋の単位。", zh:"柱距與房間模數。" }
            ],
            [
              { en:"Koku", ja:"石", zh:"石" },
              "石",
              "≈ 0.278 m³ (10 cubic shaku)",
              { en:"Volume of logs and sawn timber in older trade.", ja:"古い取引での丸太・製材の体積。", zh:"舊式交易中原木與製材的體積。" }
            ],
            [
              { en:"Sai", ja:"才", zh:"才" },
              "才",
              "≈ 0.00334 m³ (1 sun × 1 sun × 12 shaku)",
              { en:"Sawn timber and boards; 1 koku ≈ 83.3 sai.", ja:"製材や板。一石≒八十三・三才。", zh:"製材與木板；1 石 ≈ 83.3 才。" }
            ],
            [
              { en:"Rippō / rūbe", ja:"立方・立米", zh:"立方公尺" },
              "立米",
              "1 m³",
              { en:"The unit of all modern statistics and invoices.", ja:"現代のあらゆる統計と請求の単位。", zh:"所有現代統計與發票的單位。" }
            ]
          ] },
        { t:"note",
          label:{ en:"Converting a post", ja:"柱の換算", zh:"換算一根柱子" },
          text:{
            en:"A post 4 sun square and 10 shaku long — the classic 12 cm × 12 cm × 3 m hinoki post — is 4 × 4 × 10 / 12 ≈ 13.3 sai, or about 0.044 cubic metres. About twenty-three of them make a cubic metre.",
            ja:"四寸角・長さ十尺の柱——典型的な十二センチ角・三メートルの檜の柱——は、四×四×十÷十二で約十三・三才、およそ〇・〇四四立方メートルである。二十三本ほどで一立方メートルになる。",
            zh:"一根四寸見方、長十尺的柱子——典型的 12 公分見方、3 公尺長扁柏柱——為 4 × 4 × 10 ÷ 12 ≈ 13.3 才，約 0.044 立方公尺。大約二十三根湊成一立方公尺。" } }
      ] },
    { t:"section",
      id:"idioms",
      title:{ en:"Wood in everyday speech", ja:"日常語のなかの木", zh:"日常語言中的木" },
      jp:"慣用句",
      body:[
        { t:"p",
          text:{
            en:"Many ordinary Japanese expressions come from the timber yard, the carpenter's bench or the theatre stage, and most speakers use them without a thought for where they came from.",
            ja:"日本語のふつうの言い回しの多くは、木場や大工の作業台や芝居の舞台から来ている。たいていの話し手は、その出どころを思うこともなく使っている。",
            zh:"許多日常日語用語來自木材行、木匠的工作台或戲劇舞台，大多數人使用時從未想過它們的出處。" } },
        { t:"table",
          caption:{ en:"Idioms from wood", ja:"木から生まれた慣用句", zh:"源自木的慣用語" },
          cols:[
            { en:"Expression", ja:"表現", zh:"用語" },
            { en:"Japanese", ja:"和文", zh:"日文" },
            { en:"Literally", ja:"字義", zh:"字面意思" },
            { en:"Meaning", ja:"意味", zh:"意思" }
          ],
          jpCols:[1],
          rows:[
            [
              { en:"Tekizai tekisho", ja:"適材適所", zh:"適材適所" },
              "適材適所",
              { en:"the right timber in the right place", ja:"適した材を適した場所に", zh:"合適的木材用在合適的地方" },
              {
                en:"Putting each person where they fit best. From the carpenter's practice of placing each species and each piece where its character serves.",
                ja:"それぞれの人をふさわしい場所に置くこと。樹種や一本一本の性質が生きる場所に材を置く大工の心得から。",
                zh:"讓每個人各得其所。源於木匠依每種木、每根料的性格安排其位置的做法。" }
            ],
            [
              { en:"Hinoki butai", ja:"檜舞台", zh:"檜舞台" },
              "檜舞台",
              { en:"a stage of hinoki", ja:"檜の舞台", zh:"扁柏鋪成的舞台" },
              {
                en:"The grand stage; the big time. Only the leading theatres could afford hinoki floors.",
                ja:"晴れの大舞台。檜の床を張れたのは格の高い劇場だけだった。",
                zh:"盛大的舞台、大展身手的場合。只有一流劇場才鋪得起扁柏地板。" }
            ],
            [
              { en:"Ita ni tsuku", ja:"板につく", zh:"板につく" },
              "板につく",
              { en:"to fit the boards", ja:"板に合う", zh:"與舞台木板相合" },
              {
                en:"To look natural in a role — as an actor who has become at home on the stage boards.",
                ja:"役がさまになること。舞台の板に慣れた役者のように。",
                zh:"演得像樣、駕輕就熟——如同已在舞台木板上如魚得水的演員。" }
            ],
            [
              { en:"Daikokubashira", ja:"大黒柱", zh:"大黑柱" },
              "大黒柱",
              { en:"the great central post", ja:"家の中心の太い柱", zh:"房屋中央的粗柱" },
              {
                en:"The family breadwinner; the mainstay of any group. In a Hida townhouse, it is often a single squared keyaki or hinoki trunk.",
                ja:"一家の稼ぎ手、集団の要。飛騨の町家では、しばしば一本の欅や檜の角材である。",
                zh:"一家的經濟支柱、團體的中流砥柱。在飛驒町家中，常是一根方形的櫸木或扁柏整木。" }
            ],
            [
              { en:"Sori ga awanai", ja:"反りが合わない", zh:"反りが合わない" },
              "反りが合わない",
              { en:"the curves do not match", ja:"反りが合わない", zh:"彎度對不上" },
              {
                en:"Two people who cannot get on. The image is a sword that does not fit its scabbard — but carpenters use it of warped boards that will not join.",
                ja:"二人の気が合わないこと。刀と鞘の反りが合わない像だが、大工は反って合わない板にも使う。",
                zh:"兩人合不來。意象來自刀與刀鞘的弧度不合——但木匠也用來形容翹曲而接不起來的木板。" }
            ],
            [
              { en:"Hame o hazusu", ja:"羽目を外す", zh:"羽目を外す" },
              "羽目を外す",
              { en:"to take off the panelling", ja:"羽目板を外す", zh:"拆下壁板" },
              { en:"To let loose; to go too far.", ja:"調子に乗って度を越すこと。", zh:"放縱、玩過頭。" }
            ],
            [
              { en:"Ki de hana o kukuru", ja:"木で鼻をくくる", zh:"木で鼻をくくる" },
              "木で鼻をくくる",
              { en:"to wipe one's nose with wood", ja:"木で鼻をこする", zh:"用木頭擦鼻子" },
              { en:"To answer curtly and coldly.", ja:"そっけなく冷たく応対すること。", zh:"冷淡生硬地應對。" }
            ],
            [
              { en:"Ki ni take o tsugu", ja:"木に竹を接ぐ", zh:"木に竹を接ぐ" },
              "木に竹を接ぐ",
              { en:"to graft bamboo onto a tree", ja:"木に竹を接ぐ", zh:"在樹上接竹" },
              {
                en:"To join things that do not belong together; an incoherent whole.",
                ja:"つりあわないものをつなぐこと。筋の通らない全体。",
                zh:"把不相稱的東西硬湊在一起；不協調的整體。" }
            ],
            [
              { en:"Moto no mokuami", ja:"元の木阿弥", zh:"元の木阿彌" },
              "元の木阿弥",
              { en:"back to Mokuami", ja:"もとの木阿弥", zh:"又回到木阿彌" },
              {
                en:"Back where one started, after an effort comes to nothing. The origin is disputed.",
                ja:"苦労がむだになり元に戻ること。由来には諸説ある。",
                zh:"一番努力後又回到原點。其由來眾說紛紜。" }
            ],
            [
              { en:"Tateita ni mizu", ja:"立て板に水", zh:"立て板に水" },
              "立て板に水",
              { en:"water on a standing board", ja:"立てた板に水を流す", zh:"水流過立著的木板" },
              { en:"Fluent, unbroken speech.", ja:"よどみなく話すこと。", zh:"說話流暢、滔滔不絕。" }
            ],
            [
              { en:"Ki o mite mori o mizu", ja:"木を見て森を見ず", zh:"見樹不見林" },
              "木を見て森を見ず",
              { en:"seeing the trees, not the forest", ja:"木を見て森を見ない", zh:"只看到樹，看不到森林" },
              {
                en:"Missing the whole for the parts — a translation of the European proverb.",
                ja:"部分にとらわれて全体を見失うこと。西洋のことわざの借用。",
                zh:"只顧局部而忽略整體——借自西方諺語。" }
            ]
          ] }
      ] },
    { t:"related",
      items:[
        { href:"translation.html", why:{ en:"The words that resist translation.", ja:"訳しにくい言葉。", zh:"難以翻譯的詞。" } },
        { href:"glossary.html", why:{ en:"Every term, filterable.", ja:"すべての語、絞り込み可。", zh:"所有詞彙，可篩選。" } },
        { href:"sawmill.html", why:{ en:"How the cut decides the grain.", ja:"挽き方が木目を決める。", zh:"鋸法如何決定紋理。" } },
        { href:"grading.html", why:{ en:"The formal grading system.", ja:"正式な等級の仕組み。", zh:"正式的分級制度。" } }
      ] }
  ] };

/* ---- --------------------------------------- translation */
GIFU.pages["translation"] = { kicker:{ en:"The Land of Wood · 10", ja:"木の国 · 10", zh:"木之國 · 10" },
  title:{ en:"Words That Do Not Translate", ja:"訳せない語", zh:"翻譯不過去的詞" },
  jp:"白木・木取り・木の癖・里山",
  lede:{
    en:"Some Japanese words about wood have no single English equivalent, not because the thing does not exist elsewhere but because no other language has needed to name it so precisely. A word like <em>shiraki</em> carries a whole theory of purity; <em>kidori</em> contains a craftsman's judgement in two characters; <em>satoyama</em> has been borrowed into English and Chinese because nothing native would do. This page explains two dozen such words, grouped by where they live — in the material, in the workshop, in the forest and in time.",
    ja:"木をめぐる日本語のなかには、一語の英語に置き換えられないものがある。そのものがよそに存在しないからではなく、ほかのどの言語もそれほど精密に名づける必要がなかったからである。「白木」という語は清浄の理論を丸ごと担い、「木取り」は職人の判断を二文字に収め、「里山」はふさわしい自国語がないために英語にも中国語にも借用された。この頁は、そうした二十あまりの語を、それが住む場所——素材、工房、森、そして時間——ごとに説く。",
    zh:"有些關於木的日文詞，找不到單一的英文對應詞——不是因為別處沒有那樣東西，而是沒有其他語言需要把它命名得如此精確。「白木」一詞承載著一整套潔淨觀；「木取」以兩個字收納了工匠的判斷；「里山」被借入英文與中文，因為本土詞彙都不足以取代。本頁依其所在——材料、工坊、森林與時間——分組，解說二十餘個這樣的詞。" },
  body:[
    { t:"figure",
      caption:{
        en:"Where the untranslatable words live. A qualitative map: the horizontal axis runs from the forest to the finished object, the vertical from the material itself to the person who reads it. The words cluster where Japanese craft practice made fine distinctions matter.",
        ja:"訳せない語のすみか。定性的な地図で、横軸は森から完成品へ、縦軸は素材そのものからそれを読む人へ向かう。語は、日本のものづくりが細かな区別を必要とした場所に集まっている。",
        zh:"這些譯不過去的詞住在哪裡。一張定性的地圖：橫軸從森林到成品，縱軸從材料本身到解讀它的人。這些詞聚集之處，正是日本工藝實踐讓細微區別變得重要的地方。" },
      svg:function(lang, L){
        var W = [
          ["里山","satoyama",90,210],["杣","soma",150,150],["木霊","kodama",70,95],["木洩れ日","komorebi",150,245],["森林浴","shinrin-yoku",60,280],
          ["目利き","mekiki",330,70],["木取り","kidori",370,130],["木の癖","ki no kuse",300,180],["適材適所","tekizai tekisho",420,215],
          ["白木","shiraki",560,250],["木肌","kihada",520,200],["杢","moku",600,160],["木地","kiji",640,230],
          ["木味","kiaji",620,95],["経年変化","keinen henka",540,60],["手沢","shutaku",680,130]
        ];
        var A = {
          x0:{en:"forest",ja:"森",zh:"森林"}, x1:{en:"finished object",ja:"完成品",zh:"成品"},
          y0:{en:"the material",ja:"素材そのもの",zh:"材料本身"}, y1:{en:"the person who reads it",ja:"それを読む人",zh:"解讀它的人"},
          q:{en:"Qualitative map",ja:"定性的な図",zh:"定性示意"}
        };
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="word map">';
        s += '<rect x="30" y="30" width="700" height="270" fill="#F5F3ED" stroke="#E1DCD2"/>';
        s += '<line x1="30" y1="165" x2="730" y2="165" stroke="#E1DCD2" stroke-dasharray="3 3"/><line x1="380" y1="30" x2="380" y2="300" stroke="#E1DCD2" stroke-dasharray="3 3"/>';
        s += '<text x="36" y="318" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">← '+L(A.x0)+'</text>';
        s += '<text x="724" y="318" text-anchor="end" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+L(A.x1)+' →</text>';
        s += '<text x="36" y="24" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">↑ '+L(A.y1)+'</text>';
        s += '<text x="724" y="24" text-anchor="end" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+L(A.q)+'</text>';
        s += '<text x="724" y="294" text-anchor="end" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">↓ '+L(A.y0)+'</text>';
        for (var i=0;i<W.length;i++){
          var w = W[i];
          s += '<text x="'+w[2]+'" y="'+w[3]+'" font-family="Georgia,serif" font-size="16" fill="#201E1B">'+w[0]+'</text>';
          s += '<text x="'+w[2]+'" y="'+(w[3]+14)+'" font-family="system-ui,sans-serif" font-size="9.5" font-style="italic" fill="#8B857C">'+w[1]+'</text>';
        }
        s += '</svg>';
        return s;
      } },
    { t:"section",
      id:"material",
      title:{ en:"In the material", ja:"素材のなかに", zh:"在材料之中" },
      jp:"白木・木地・木肌・杢",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Shiraki", ja:"白木", zh:"白木" },
              jp:"しらき",
              romaji:"shiraki",
              def:{
                en:"Wood left bare — unpainted, unlacquered, unoiled — and especially planed hinoki. It is the material of Shintō: the shrines at Ise are built of it, the offering stands at every shrine are made of it, and a coffin or a wedding tray in <em>shiraki</em> declares purity. English offers “natural wood” or “unfinished wood”, both of which miss that the bareness is the finish, and a deliberate one.",
                ja:"塗らず、漆をかけず、油も引かない素のままの木。とくに鉋をかけた檜をいう。神道の素材であり、伊勢の社殿はこれで建てられ、どの社の三方もこれでつくられ、白木の棺や婚礼の盆は清浄を宣する。英語の「自然の木」「未仕上げの木」はいずれも、素のままであることこそが仕上げであり、意図されたものだという点を取り逃がす。",
                zh:"保持素面的木——不上漆、不塗油、不上色——尤指刨光的扁柏。它是神道的材料：伊勢神宮以它建造，每座神社的供台以它製作，白木的棺木或婚禮托盤宣示著潔淨。英文的 natural wood 或 unfinished wood 都錯失了一點：素面本身就是完成，而且是刻意為之。" } },
            { term:{ en:"Kiji", ja:"木地", zh:"木地" },
              jp:"きじ",
              romaji:"kiji",
              def:{
                en:"The wooden body of an object before it is finished — the turned bowl before lacquer, the tray before Shunkei. By extension <em>kiji</em> is the wood's own ground showing through a finish. <em>Kijishi</em> are the turners who make it. There is no English trade word; “blank” and “substrate” are too cold.",
                ja:"仕上げる前の器物の木の本体——漆をかける前の挽いた椀、春慶を塗る前の盆。転じて、仕上げ越しに見える木そのものの地をもいう。それをつくる挽物師が木地師である。英語の職業語はなく、「ブランク」「下地」では冷たすぎる。",
                zh:"器物尚未完成前的木胎——上漆前車好的碗、塗春慶前的托盤。引申指透過塗層所見的木頭本身的底色。製作木地的旋木匠稱為「木地師」。英文沒有對應的行業用語；blank 與 substrate 都太冷冰冰。" } },
            { term:{ en:"Kihada", ja:"木肌", zh:"木肌" },
              jp:"きはだ",
              romaji:"kihada",
              def:{
                en:"“Wood-skin”: the texture and surface quality of wood to the touch and eye — how fine or coarse, how lustrous, how it takes the light. Two hinoki boards of the same grade can have different <em>kihada</em>, and a buyer will choose between them on it alone.",
                ja:"「木の肌」。手と目に触れる木の質感と表面の性質——細かいか粗いか、艶があるか、光をどう受けるか。同じ等級の檜の板二枚でも木肌が違いうり、買い手はそれだけで選び分ける。",
                zh:"「木之肌」：木材在手感與視覺上的質地與表面特質——細或粗、有無光澤、如何承接光線。兩塊同等級的扁柏木板，木肌可能不同，買家會單憑這一點做選擇。" } },
            { term:{ en:"Moku", ja:"杢", zh:"杢" },
              jp:"もく",
              romaji:"moku",
              def:{
                en:"Figure: patterned grain produced by irregular growth — burl, ripple, scale, bird's-eye. The character 杢 is a Japanese coinage, “wood” over “earth”, not found in Chinese; English has only the loan-phrase “figured wood”. See <a href=\"words.html\">The Words of Wood</a>.",
                ja:"杢。不規則な生長が生む模様の木目——玉、縮み、如鱗、鳥眼。「杢」の字は「木」の下に「土」を置いた日本の国字で、中国語にはない。英語には「フィギュアのある木」という借り言葉しかない。<a href=\"words.html\">木をめぐる言葉</a>を参照。",
                zh:"花紋：不規則生長所產生的圖樣紋理——瘤、波、鱗、鳥眼。「杢」是日本自造的國字，「木」在上、「土」在下，中文原無此字；英文也只有 figured wood 這個借用說法。見<a href=\"words.html\">圍繞著木的語言</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"workshop",
      title:{ en:"In the workshop", ja:"工房のなかに", zh:"在工坊之中" },
      jp:"木取り・木の癖・目利き",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Kidori", ja:"木取り", zh:"木取" },
              jp:"きどり",
              romaji:"kidori",
              def:{
                en:"The planning of how to cut a log or a board so that each part of the finished thing gets the right piece of wood: straight grain for the legs, figure for the top, heartwood where it will be wet, the knot hidden on the underside. It is where most of a craftsman's skill is spent and most of the value of a log is made or lost. “Cutting plan” is accurate and bloodless.",
                ja:"丸太や板をどう伐るかの段取り。完成品のそれぞれの部分に正しい材が行くように——脚には通直の目、天板には杢、濡れる場所には心材、節は裏に隠す。職人の腕の大半が費やされ、丸太の値打ちの大半が生まれるか失われるところである。「裁断計画」は正確だが血が通わない。",
                zh:"規劃如何鋸切原木或木板，讓成品每個部位都分到對的木料：腳用直紋、面板用花紋、會受潮之處用心材、節疤藏在底面。工匠大部分的功夫用在這裡，一根原木的價值大多也在此成就或斷送。cutting plan 準確，卻毫無血色。" } },
            { term:{ en:"Ki no kuse", ja:"木の癖", zh:"木之癖" },
              jp:"きのくせ",
              romaji:"ki no kuse",
              def:{
                en:"The wood's habits: its tendency to twist, bow, cup or check as it dries and ages, which depends on how and where the tree grew. A good carpenter reads it from the log and sets opposing tendencies against each other so the structure holds itself true — the principle of the Hōryūji maxim that joining timbers is joining their temperaments.",
                ja:"木の癖。乾き、年を経るにつれてねじれ、反り、狂い、割れる傾き。木がどこでどう育ったかによる。良い大工はそれを丸太から読み、逆向きの癖を突き合わせて、構造が自らまっすぐ保つようにする——木組みは癖組み、という法隆寺の口伝の原理である。",
                zh:"木的脾性：它在乾燥與老化過程中扭轉、彎曲、凹翹或開裂的傾向，取決於樹木在何處、如何生長。好木匠能從原木讀出它，並讓相反的傾向彼此抵銷，使結構自行維持端正——這正是法隆寺口傳「木組即癖組」的原理。" } },
            { term:{ en:"Mekiki", ja:"目利き", zh:"目利" },
              jp:"めきき",
              romaji:"mekiki",
              def:{
                en:"A connoisseur's eye — the ability to judge quality at a glance, and the person who has it. At a log auction the <em>mekiki</em> reads the end grain, the bark and the straightness of a log and prices what is inside it before it is sawn. The word is used for antiques and fish as well; in timber it is a profession.",
                ja:"目利き。質をひと目で見抜く力と、その力をもつ人。原木市では目利きが木口と樹皮と通直さを読み、挽く前に中身に値をつける。骨董や魚にも使う語だが、木材では職業である。",
                zh:"鑑別的眼力——一眼判斷品質的能力，以及擁有這種能力的人。在原木拍賣會上，「目利」會讀原木的斷面、樹皮與通直度，在鋸開之前就為其中的東西定價。這個詞也用於古董與漁獲；在木材業，它是一門職業。" } },
            { term:{ en:"Shutaku", ja:"手沢", zh:"手澤" },
              jp:"しゅたく",
              romaji:"shutaku",
              def:{
                en:"The sheen left on wood by years of handling — on a stair rail, a counter, a tool handle, a tea caddy. It is not dirt and not wear but a finish made by use, and in Japan it is valued. English “patina” covers it loosely but also covers verdigris.",
                ja:"長年手に触れられて木に生まれる艶——階段の手すり、帳場の台、道具の柄、茶入れ。汚れでも摩耗でもなく、使うことでできた仕上げであり、日本では尊ばれる。英語の「パティナ」はおおまかに覆うが、緑青まで含んでしまう。",
                zh:"木器經年被手觸摸所留下的光澤——樓梯扶手、櫃台、工具握柄、茶入。它不是髒污也不是磨損，而是由使用形成的塗層，在日本受到珍視。英文的 patina 大致涵蓋，卻也把銅綠算在內。" } }
          ] }
      ] },
    { t:"section",
      id:"forest",
      title:{ en:"In the forest", ja:"森のなかに", zh:"在森林之中" },
      jp:"里山・杣・入会・木洩れ日",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Satoyama", ja:"里山", zh:"里山" },
              jp:"さとやま",
              romaji:"satoyama",
              def:{
                en:"The managed woodland and grassland around a village: coppice cut for firewood and charcoal every fifteen to twenty-five years, leaf litter raked for fertiliser, grass cut for thatch, all in a mosaic with paddies, ponds and streams. It is neither wilderness nor plantation, and its biodiversity depends on the regular human disturbance that created it. The word entered English and Chinese through the environmental movement. See <a href=\"satoyama.html\">Satoyama &amp; Water</a>.",
                ja:"村をとりまく、手の入った林と草地。十五年から二十五年ごとに薪炭のために伐られる雑木林、肥料のために掻かれる落ち葉、屋根のために刈られる茅——それが田、溜池、小川とモザイクをなす。原生の自然でも人工林でもなく、その生物の豊かさは、それをつくった人の定期的なかく乱に依っている。この語は環境運動を通じて英語と中国語に入った。<a href=\"satoyama.html\">里山と水</a>を参照。",
                zh:"環繞村落、有人經營的林地與草地：每十五到二十五年伐一次作柴炭的雜木林、耙來作肥料的落葉、割來葺屋頂的茅草，與水田、池塘、溪流交織成馬賽克。它既非荒野也非人工林，其生物多樣性仰賴創造它的人類定期擾動。這個詞經由環境運動進入英文與中文。見<a href=\"satoyama.html\">里山與水</a>。" } },
            { term:{ en:"Soma", ja:"杣", zh:"杣" },
              jp:"そま",
              romaji:"soma",
              def:{
                en:"A double word: the forest from which timber is taken, and the person who takes it. The character 杣 — “tree” beside “mountain” — is another Japanese coinage. <em>Misomayama</em>, the honorific form, is the forest designated to supply the Ise shrines, and the <em>Misoma-hajime-sai</em> is the ceremony of its first felling.",
                ja:"二重の語。材を伐り出す山と、それを伐る人。「木」に「山」を並べた「杣」の字も国字である。敬称の「御杣山」は伊勢の神宮に材を出すと定められた山で、御杣始祭はその最初の伐採の祭である。",
                zh:"一個具雙重含義的詞：伐取木材的山林，以及伐木的人。「杣」字——「木」旁一個「山」——也是日本自造的國字。敬稱「御杣山」指被指定供應伊勢神宮木材的山林，「御杣始祭」即其首次伐採的祭儀。" } },
            { term:{ en:"Iriai", ja:"入会", zh:"入會" },
              jp:"いりあい",
              romaji:"iriai",
              def:{
                en:"The customary right of a village community to enter a forest or grassland held in common and take fuel, fodder, thatch and small timber from it. Iriai rights were the backbone of village life under the domains, and their loss when the Meiji state claimed the forests is the grievance at the heart of Tōson's <em>Before the Dawn</em>. “Commons” is close, but English commons are usually pasture.",
                ja:"村の共同体が、共同で保つ山林や草地に入り、燃料・飼料・茅・小径の材を取る慣行の権利。入会権は藩政時代の村の暮らしの背骨であり、明治国家が森を官有としたときのその喪失が、藤村『夜明け前』の核心にある不満である。英語の「コモンズ」は近いが、英国のコモンズはたいてい牧草地である。",
                zh:"村落共同體進入共有山林或草地、採取燃料、飼料、茅草與小材的慣行權利。入會權是藩政時代村落生活的支柱；明治國家將森林收歸官有時此權的喪失，正是藤村《黎明之前》的核心怨懟。英文的 commons 很接近，但英國的公地通常是牧草地。" } },
            { term:{ en:"Komorebi", ja:"木洩れ日", zh:"木漏日" },
              jp:"こもれび",
              romaji:"komorebi",
              def:{
                en:"Sunlight filtering through leaves. It is one of the words most often cited as untranslatable, and it is worth noticing what it implies about forestry: an unthinned plantation has none, because no light gets through. A forest with <em>komorebi</em> is a forest that is being looked after.",
                ja:"木の葉のあいだから洩れる日の光。訳せない語として最もよく挙げられる一つだが、それが林業について含意するところに気づく価値がある。間伐されない人工林には木洩れ日がない。光が通らないからである。木洩れ日のある森は、手入れされている森である。",
                zh:"從枝葉間灑落的陽光。它是最常被舉為「無法翻譯」的詞之一，而它對林業的暗示值得留意：未經疏伐的人工林沒有木漏日，因為光透不進來。有木漏日的森林，就是有人照料的森林。" } },
            { term:{ en:"Chinju no mori", ja:"鎮守の森", zh:"鎮守之森" },
              jp:"ちんじゅのもり",
              romaji:"chinju no mori",
              def:{
                en:"The grove around a village shrine, protected because it belongs to the local god. Many are the last remnants of the forest that grew there before farming, and ecologists use them to reconstruct the natural vegetation of an area.",
                ja:"村の社をとりまく森。土地の神のものであるがゆえに守られてきた。その多くは農耕以前にそこに育っていた森の最後の名残であり、生態学者はそれをもとに地域の本来の植生を復元する。",
                zh:"環繞村落神社的樹林，因屬於當地神明而受到保護。其中許多是農耕以前原生森林的最後殘存，生態學者藉此重建一地的自然植被。" } }
          ] }
      ] },
    { t:"section",
      id:"time",
      title:{ en:"In time", ja:"時間のなかに", zh:"在時間之中" },
      jp:"木味・経年変化",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Kiaji", ja:"木味", zh:"木味" },
              jp:"きあじ",
              romaji:"kiaji",
              def:{
                en:"The “flavour” of wood — its particular character, warmth and depth, especially as it matures with age and use. A piece of old keyaki with deep <em>kiaji</em> has something a new one lacks that is not simply colour. Furniture dealers use the word; so do tea masters.",
                ja:"木の「味わい」——その固有の性格、温かさ、深み。とくに年と使用とともに熟したそれをいう。木味の深い古い欅には、新しいものにない何かがあり、それは色だけではない。家具商も茶人もこの語を使う。",
                zh:"木的「韻味」——它特有的性格、溫度與深度，尤指隨歲月與使用而成熟的那種。一件木味深厚的老櫸木，有新木所沒有的某種東西，而那不只是顏色。家具商用這個詞，茶人也用。" } },
            { term:{ en:"Keinen henka", ja:"経年変化", zh:"經年變化" },
              jp:"けいねんへんか",
              romaji:"keinen henka",
              def:{
                en:"Change through the years: hinoki yellowing to honey, cherry reddening, ichii turning from red to amber, lacquer clearing and deepening. In Japanese marketing it is a selling point rather than a defect, and makers of Shunkei and Ittōbori describe their work as unfinished until it has aged.",
                ja:"年を経ての変化。檜が蜂蜜色に黄ばみ、桜が赤みを増し、一位が赤から飴色へ移り、漆が透けて深まる。日本の売り方では欠点でなく売りであり、春慶や一刀彫の作り手は、年を経るまで作品は完成していないと言う。",
                zh:"歲月帶來的變化：扁柏泛黃成蜂蜜色、櫻木轉紅、紫杉由紅轉琥珀、漆層漸透漸深。在日本的行銷中，這是賣點而非缺點；春慶與一刀雕的作者說，作品要經過歲月才算完成。" } },
            { term:{ en:"Nagamochi", ja:"長持ち", zh:"長持" },
              jp:"ながもち",
              romaji:"nagamochi",
              def:{
                en:"Everyday Japanese for “lasting a long time” — and also the name of the long wooden chest in which households kept bedding and clothes. The chest gave its name to the quality. In the Hida furniture trade, a ten-year structural guarantee on wooden parts is a condition of certification.",
                ja:"「長くもつ」ことを言う日常語であり、また寝具や衣類をしまった長い木の櫃の名でもある。櫃がその性質に名を与えた。飛騨の家具の業界では、木部の十年保証が認定の条件である。",
                zh:"日常日語中「經久耐用」之意——同時也是家中收納被褥衣物的長型木箱之名。是那只木箱把名字借給了這種特質。在飛驒家具業，木部結構十年保固是取得認證的條件。" } }
          ] }
      ] },
    { t:"section",
      id:"falsefriends",
      title:{ en:"Same character, different tree", ja:"同じ字、違う木", zh:"同一個字，不同的樹" },
      jp:"日中の木の名",
      body:[
        { t:"p",
          text:{
            en:"Japanese and Chinese share most of their tree characters but not always the trees. A Chinese reader meeting 杉, 檜, 柏 or 桂 in a Japanese text is likely to picture the wrong tree — which matters in a book about wood. The Chinese text of this book uses Taiwan's botanical names to avoid the confusion.",
            ja:"日本語と中国語は木の字の多くを共有するが、木まで共有するとはかぎらない。日本語の文章で「杉」「檜」「柏」「桂」に出会った中国語の読者は、違う木を思い浮かべがちである——木の本ではそれが問題になる。本書の中国語版は、混乱を避けるために台湾の植物名を用いる。",
            zh:"日文與中文共用大部分樹木的漢字，樹卻不一定相同。華語讀者在日文中看到「杉」「檜」「柏」「桂」，很可能想到錯誤的樹——在一本關於木的書裡，這很要緊。本書中文版採用台灣的植物名稱以避免混淆。" } },
        { t:"table",
          caption:{
            en:"Characters that name different trees in Japanese and Chinese",
            ja:"日本語と中国語で違う木を指す字",
            zh:"在日文與中文中指不同樹木的字" },
          cols:[
            { en:"Character", ja:"字", zh:"字" },
            { en:"In Japanese", ja:"日本語で", zh:"在日文中" },
            { en:"In Chinese", ja:"中国語で", zh:"在中文中" },
            { en:"In this book's Chinese", ja:"本書の中国語版では", zh:"本書中文用語" }
          ],
          rows:[
            [
              "杉",
              { en:"Cryptomeria japonica (sugi)", ja:"スギ（Cryptomeria）", zh:"柳杉（Cryptomeria）" },
              { en:"usually Cunninghamia, China fir", ja:"ふつうはコウヨウザン（Cunninghamia）", zh:"通常指杉木（Cunninghamia）" },
              { en:"柳杉", ja:"柳杉", zh:"柳杉" }
            ],
            [
              "檜",
              { en:"Chamaecyparis obtusa (hinoki)", ja:"ヒノキ（Chamaecyparis）", zh:"日本扁柏（Chamaecyparis）" },
              {
                en:"classically a juniper; in Taiwan, the Chamaecyparis of the mountains",
                ja:"古典ではビャクシンの類。台湾では山のヒノキ属",
                zh:"古典中指圓柏類；在台灣則指高山的扁柏屬" },
              { en:"扁柏 (tree) · 檜木 (timber)", ja:"扁柏（木）・檜木（材）", zh:"扁柏（樹）・檜木（材）" }
            ],
            [
              "柏",
              { en:"Quercus dentata, an oak (kashiwa)", ja:"カシワ（ナラ属）", zh:"槲樹（櫟屬）" },
              { en:"cypress or thuja", ja:"コノテガシワなどヒノキ科", zh:"側柏等柏科植物" },
              { en:"槲樹 for the oak", ja:"ナラの意では「槲樹」", zh:"指橡樹時作「槲樹」" }
            ],
            [
              "桂",
              { en:"Cercidiphyllum japonicum (katsura)", ja:"カツラ（Cercidiphyllum）", zh:"連香樹（Cercidiphyllum）" },
              { en:"osmanthus or cinnamon", ja:"キンモクセイやニッケイ", zh:"桂花或肉桂" },
              { en:"連香樹", ja:"連香樹", zh:"連香樹" }
            ],
            [
              "楓",
              { en:"often Acer, maple (kaede)", ja:"しばしばカエデ", zh:"常指槭樹（楓）" },
              { en:"Liquidambar, sweetgum", ja:"フウ（Liquidambar）", zh:"楓香（Liquidambar）" },
              { en:"槭 / 楓 as context requires", ja:"文脈に応じ「槭」「楓」", zh:"依上下文作「槭」或「楓」" }
            ],
            [
              "椿",
              { en:"Camellia japonica (tsubaki)", ja:"ツバキ", zh:"山茶" },
              { en:"Toona sinensis, Chinese mahogany", ja:"チャンチン（Toona）", zh:"香椿（Toona）" },
              { en:"山茶", ja:"山茶", zh:"山茶" }
            ],
            [
              "栃 · 杣 · 杢 · 榊 · 樫",
              { en:"Japanese-made characters (kokuji) or Japanese uses", ja:"国字、または日本での用法", zh:"日本國字或日本特有用法" },
              { en:"absent or different in Chinese", ja:"中国語にないか意味が異なる", zh:"中文無此字或意義不同" },
              { en:"glossed on first use", ja:"初出で注記", zh:"首次出現時加註" }
            ]
          ] }
      ] },
    { t:"related",
      items:[
        { href:"words.html",
          why:{ en:"The regular vocabulary around these words.", ja:"これらの語をとりまく通常の語彙。", zh:"圍繞這些詞的一般詞彙。" } },
        { href:"gods.html",
          why:{ en:"Shiraki and kodama in their religious setting.", ja:"白木と木霊を、その信仰の場で。", zh:"在信仰情境中的白木與木靈。" } },
        { href:"satoyama.html",
          why:{ en:"The landscape behind the word satoyama.", ja:"里山という語の背後の風景。", zh:"「里山」一詞背後的地景。" } },
        { href:"glossary.html",
          why:{ en:"All terms, filterable in three scripts.", ja:"すべての語。三つの文字で絞り込める。", zh:"所有詞彙，可用三種文字篩選。" } }
      ] }
  ] };

/* ---- ------------------------------------------- compare */
GIFU.pages["compare"] = { kicker:{ en:"The Land of Wood · 11", ja:"木の国 · 11", zh:"木之國 · 11" },
  title:{ en:"Wood & Other Materials", ja:"他の素材との比較", zh:"與其他材料的比較" },
  jp:"木・鉄・コンクリート・竹",
  lede:{
    en:"Wood is often described in comparison with the materials that replaced it — as weaker than steel, less durable than concrete, less predictable than plastic. Most of those comparisons are made per piece; made per kilogram, or per unit of carbon, or per degree of warmth under a bare foot, they come out very differently. This page sets wood beside steel, concrete, aluminium, bamboo and stone on the measures that actually decide what to build with, and is candid about what wood does badly.",
    ja:"木はしばしば、それに取って代わった素材と比べて語られる——鉄より弱く、コンクリートより長持ちせず、プラスチックより振る舞いが読めない、と。そうした比較の多くは一本あたりでなされる。一キロあたり、炭素一単位あたり、素足の下の温かさ一度あたりで比べれば、結果はまるで違う。この頁は、何で建て、何でつくるかを実際に決める尺度で、木を鉄・コンクリート・アルミ・竹・石と並べ、木が苦手とすることも隠さずに述べる。",
    zh:"人們常拿木頭與取代它的材料相比——說它比鋼弱、比混凝土不耐久、比塑膠難以預測。這些比較大多是「以件計」；若改以每公斤、每單位碳，或赤腳踩上去時的溫暖程度來比，結果便大不相同。本頁以真正決定「用什麼來建、用什麼來做」的指標，把木頭與鋼、混凝土、鋁、竹與石並列比較，並坦白說明木頭不擅長的地方。" },
  body:[
    { t:"section",
      id:"weight",
      title:{ en:"Strength for its weight", ja:"重さのわりの強さ", zh:"以重量而言的強度" },
      jp:"比強度・比剛性",
      body:[
        { t:"p",
          text:{
            en:"Per piece, steel is far stronger than wood. But a cubic metre of steel weighs about 7,850 kilograms and a cubic metre of sugi about 380. Divide strength by density and the picture reverses: along the grain, clear straight-grained wood is one of the strongest materials for its weight in common use, and roughly as stiff for its weight as steel or aluminium. This is why aircraft were built of wood until the 1940s — including, in the last years of the war, parts made in the furniture factories of Takayama — and why a bentwood chair can be so light.",
            ja:"一本あたりなら、鉄は木よりはるかに強い。しかし一立方メートルの鋼はおよそ七千八百五十キロ、スギは三百八十キロである。強さを密度で割れば、像は逆転する。繊維方向に通直な無欠点の木は、ふだん使われる素材のなかで重さのわりに最も強いものの一つであり、重さのわりの剛さは鋼やアルミとほぼ同じである。一九四〇年代まで航空機が木でつくられた理由はここにある——戦争末期には高山の家具工場でつくられた部品も含まれた。曲木の椅子があれほど軽くありうる理由もここにある。",
            zh:"以件計，鋼遠比木頭強。但一立方公尺的鋼約重 7,850 公斤，柳杉約 380 公斤。把強度除以密度，局面便反轉：沿紋理方向，無缺陷的直紋木材是常用材料中以重量計最強者之一，以重量計的剛性也與鋼或鋁相當。這就是飛機直到 1940 年代仍以木製造的原因——包括戰爭末期高山家具工廠所生產的零件——也是曲木椅能如此輕巧的原因。" } },
        { t:"figure",
          caption:{
            en:"Specific stiffness (stiffness ÷ density) and specific strength (strength ÷ density) of wood and four other materials. Wood values are for small clear specimens loaded along the grain; real structural timber, with knots and defects, is graded well below them, and across the grain wood is many times weaker. Values are typical order-of-magnitude figures from engineering handbooks, rounded.",
            ja:"木と他の四つの素材の比剛性（剛性÷密度）と比強度（強度÷密度）。木の値は繊維方向に荷重をかけた小さな無欠点試験体のもの。節や欠点を含む実際の構造材ははるかに低く格付けされ、繊維に直角の方向では木は何倍も弱い。値は工学便覧による典型的な桁の値を丸めたもの。",
            zh:"木材與其他四種材料的比剛度（剛度 ÷ 密度）與比強度（強度 ÷ 密度）。木材數值取自沿紋理方向加載的小型無缺陷試片；實際含節疤與缺陷的結構材分級遠低於此，而橫紋方向木材更弱上好幾倍。數值為工程手冊中典型量級的約數。" },
          svg:function(lang, L){
            var R = [
              { n:{en:"Sugi (along grain)",ja:"スギ（繊維方向）",zh:"柳杉（順紋）"}, E:20, S:170, f:"#E0E6DB" },
              { n:{en:"Hinoki (along grain)",ja:"ヒノキ（繊維方向）",zh:"扁柏（順紋）"}, E:20, S:170, f:"#E0E6DB" },
              { n:{en:"Structural steel",ja:"構造用鋼",zh:"結構鋼"}, E:26, S:40, f:"#E6E4E0" },
              { n:{en:"Aluminium alloy",ja:"アルミ合金",zh:"鋁合金"}, E:26, S:100, f:"#E9ECEE" },
              { n:{en:"Concrete (compression)",ja:"コンクリート（圧縮）",zh:"混凝土（受壓）"}, E:12, S:13, f:"#EDEAE2" },
              { n:{en:"Madake bamboo",ja:"マダケ",zh:"桂竹"}, E:25, S:200, f:"#EDE5D2" }
            ];
            var s = '<svg viewBox="0 0 760 330" role="img" aria-label="specific properties">';
            s += '<text x="260" y="24" text-anchor="middle" font-family="Georgia,serif" font-size="12.5" fill="#55504A">'+(lang==="en"?"Specific stiffness · MN·m/kg":(lang==="ja"?"比剛性　MN·m/kg":"比剛度　MN·m/kg"))+'</text>';
            s += '<text x="590" y="24" text-anchor="middle" font-family="Georgia,serif" font-size="12.5" fill="#55504A">'+(lang==="en"?"Specific strength · kN·m/kg":(lang==="ja"?"比強度　kN·m/kg":"比強度　kN·m/kg"))+'</text>';
            for (var i=0;i<R.length;i++){
              var y = 44 + i*42;
              s += '<text x="20" y="'+(y+15)+'" font-family="system-ui,sans-serif" font-size="11" fill="#201E1B">'+L(R[i].n)+'</text>';
              var we = R[i].E/30*170, ws = R[i].S/220*170;
              s += '<rect x="175" y="'+(y+3)+'" width="'+we+'" height="18" fill="'+R[i].f+'" stroke="#B4AC9C"/>';
              s += '<text x="'+(180+we)+'" y="'+(y+16)+'" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+R[i].E+'</text>';
              s += '<rect x="505" y="'+(y+3)+'" width="'+ws+'" height="18" fill="'+R[i].f+'" stroke="#B4AC9C"/>';
              s += '<text x="'+(510+ws)+'" y="'+(y+16)+'" font-family="system-ui,sans-serif" font-size="10.5" fill="#201E1B">'+R[i].S+'</text>';
            }
            s += '<line x1="175" y1="40" x2="175" y2="296" stroke="#8B857C"/><line x1="505" y1="40" x2="505" y2="296" stroke="#8B857C"/>';
            s += '<text x="20" y="318" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C">'+(lang==="en"?"Rounded handbook values; wood = small clear specimens along the grain":(lang==="ja"?"便覧値を丸めたもの。木は繊維方向の小さな無欠点試験体":"手冊數值取約數；木材為順紋小型無缺陷試片"))+'</text>';
            s += '</svg>';
            return s;
          } },
        { t:"note",
          label:{ en:"The catch", ja:"落とし穴", zh:"但書" },
          text:{
            en:"Wood's strength is directional. Across the grain it is roughly a tenth to a twentieth as strong in tension as along it, and it splits along the grain easily. Most of the history of carpentry and joinery is the history of arranging wood so that loads run along its fibres.",
            ja:"木の強さには方向がある。繊維に直角の引張では、繊維方向のおよそ十分の一から二十分の一の強さしかなく、繊維に沿って容易に割れる。大工仕事と継手仕口の歴史の大半は、荷重がその繊維に沿って流れるよう木を配する歴史である。",
            zh:"木材的強度具有方向性。橫紋方向的抗拉強度，大約只有順紋方向的十分之一到二十分之一，而且很容易順著紋理劈裂。木工與榫接的歷史，大半就是如何安排木料、讓荷載沿其纖維傳遞的歷史。" } }
      ] },
    { t:"section",
      id:"warm",
      title:{ en:"Warm to the touch", ja:"触れて温かい", zh:"觸感溫暖" },
      jp:"熱伝導率",
      body:[
        { t:"p",
          text:{
            en:"Wood feels warm because it conducts heat slowly: its cells are mostly air-filled tubes. The thermal conductivity of dry softwood across the grain is around 0.1 watts per metre-kelvin — roughly a tenth to a twentieth of concrete or stone, and several hundred times less than steel. A bare foot on a hinoki floor in winter loses heat slowly, and the surface quickly comes up to skin temperature; on stone or tile it keeps losing heat. This is not a matter of taste but of physics, and it explains why the Japanese floor, sat and slept on, was made of wood, straw and paper.",
            ja:"木が温かく感じられるのは、熱をゆっくりとしか伝えないからである。細胞の大半は空気で満たされた管である。乾いた針葉樹材の繊維に直角の熱伝導率はおよそ〇・一ワット毎メートル毎ケルビン——コンクリートや石のおよそ十分の一から二十分の一、鋼の数百分の一である。冬に檜の床を素足で踏めば熱はゆっくりとしか逃げず、表面はすぐに肌の温度に近づく。石やタイルの上では熱は逃げつづける。これは好みではなく物理の問題であり、座り、寝る場であった日本の床が木と藁と紙でできていた理由を説明する。",
            zh:"木頭摸起來溫暖，是因為它導熱很慢：它的細胞大多是充滿空氣的管子。乾燥針葉樹材橫紋方向的導熱係數約為 0.1 W/m·K——大約是混凝土或石材的十分之一到二十分之一，比鋼低數百倍。冬天赤腳踩在扁柏地板上，熱量散失緩慢，表面很快就接近皮膚溫度；踩在石材或磁磚上，熱量則持續流失。這不是品味問題，而是物理問題，也說明了為何日本人坐臥其上的地板，是由木、稻草與紙構成。" } },
        { t:"table",
          caption:{ en:"Thermal conductivity, typical values", ja:"熱伝導率の代表値", zh:"導熱係數典型值" },
          cols:[
            { en:"Material", ja:"素材", zh:"材料" },
            { en:"W/(m·K)", ja:"W/(m·K)", zh:"W/(m·K)" },
            { en:"Feel under a bare hand", ja:"素手で触れた感じ", zh:"徒手觸摸的感覺" }
          ],
          numCols:[1],
          rows:[
            [
              { en:"Sugi, dry, across grain", ja:"スギ（乾燥・繊維直角）", zh:"柳杉（乾燥・橫紋）" },
              "≈ 0.09",
              { en:"warm", ja:"温かい", zh:"溫暖" }
            ],
            [
              { en:"Hinoki, dry, across grain", ja:"ヒノキ（乾燥・繊維直角）", zh:"扁柏（乾燥・橫紋）" },
              "≈ 0.10",
              { en:"warm", ja:"温かい", zh:"溫暖" }
            ],
            [
              { en:"Oak or beech, dry", ja:"ナラ・ブナ（乾燥）", zh:"橡木或山毛櫸（乾燥）" },
              "≈ 0.15–0.17",
              { en:"neutral", ja:"ほどよい", zh:"適中" }
            ],
            [{ en:"Brick", ja:"煉瓦", zh:"磚" }, "≈ 0.6–1.0", { en:"cool", ja:"ひんやり", zh:"微涼" }],
            [{ en:"Concrete", ja:"コンクリート", zh:"混凝土" }, "≈ 1.6", { en:"cold", ja:"冷たい", zh:"冰冷" }],
            [{ en:"Granite", ja:"花崗岩", zh:"花崗岩" }, "≈ 2.5–3.5", { en:"cold", ja:"冷たい", zh:"冰冷" }],
            [{ en:"Steel", ja:"鋼", zh:"鋼" }, "≈ 50", { en:"very cold", ja:"とても冷たい", zh:"極冷" }],
            [{ en:"Aluminium", ja:"アルミ", zh:"鋁" }, "≈ 200", { en:"very cold", ja:"とても冷たい", zh:"極冷" }]
          ] }
      ] },
    { t:"section",
      id:"carbon",
      title:{ en:"Carbon", ja:"炭素", zh:"碳" },
      jp:"貯蔵と排出",
      body:[
        { t:"p",
          text:{
            en:"About half the dry weight of wood is carbon, drawn from the air by the tree as carbon dioxide. A cubic metre of dry sugi, at around 350 kilograms, therefore holds about 175 kilograms of carbon — equivalent to about 640 kilograms of CO₂ — for as long as the wood lasts. Making sawn timber also emits carbon, chiefly in transport and kiln-drying, but far less per tonne than producing steel, aluminium or cement. The comparison per functional unit — per square metre of floor, say — depends on the design, and life-cycle studies vary widely; what is not in dispute is the direction. See <a href=\"carbon.html\">Forests &amp; Carbon</a>.",
            ja:"木の乾燥重量のおよそ半分は炭素であり、それは木が空気から二酸化炭素として取り込んだものである。乾燥したスギ一立方メートルはおよそ三百五十キロで、したがって約百七十五キロの炭素——二酸化炭素にして約六百四十キロ——を、その木が存在するかぎり保持する。製材品をつくるにも炭素は出る。主に輸送と人工乾燥においてだが、トンあたりでは鋼・アルミ・セメントを製造するよりはるかに少ない。機能単位——たとえば床一平方メートル——あたりの比較は設計に左右され、ライフサイクルの研究によって大きくばらつく。争いのないのは、その向きである。<a href=\"carbon.html\">森と炭素</a>を参照。",
            zh:"木材乾重約有一半是碳，那是樹木以二氧化碳形式從空氣中吸收的。一立方公尺乾燥柳杉約 350 公斤，因此儲存約 175 公斤的碳——約相當於 640 公斤二氧化碳——只要木材存在就一直保存著。製作製材品也會排碳，主要來自運輸與人工乾燥，但每噸排放遠少於生產鋼、鋁或水泥。以功能單位——例如每平方公尺樓板——比較時，結果取決於設計，生命週期研究的數字差異很大；沒有爭議的是方向。見<a href=\"carbon.html\">森林與碳</a>。" } }
      ] },
    { t:"section",
      id:"badly",
      title:{ en:"What wood does badly", ja:"木の苦手なこと", zh:"木頭不擅長的事" },
      jp:"弱点",
      body:[
        { t:"p",
          text:{
            en:"Every virtue on this page has a matching weakness, and the traditions of Japanese carpentry are as much about managing the weaknesses as exploiting the strengths.",
            ja:"この頁のどの長所にも、対になる短所がある。日本の大工の伝統は、長所を生かすことと同じほど、短所をあやつることでできている。",
            zh:"本頁每一項優點都有相應的弱點；日本木工傳統之中，管理弱點的功夫與發揮優點的功夫同樣多。" } },
        { t:"grid",
          cols:2,
          cells:[
            { h:{ en:"Water", ja:"水", zh:"水" },
              jp:"腐朽",
              d:{
                en:"Wood decays when it stays above about 20–25% moisture for long periods and fungi can grow. Keep it dry and it lasts centuries; keep it wet and it can fail in a decade. Deep eaves, stone footings that lift posts off the ground and ventilated floors are the Japanese answers.",
                ja:"含水率がおよそ二十〜二十五パーセントを超えたまま長く置かれ、菌が育つと木は腐る。乾いていれば何世紀ももち、濡れたままなら十年でだめになりうる。深い軒、柱を地面から浮かせる礎石、風の通る床が日本の答えである。",
                zh:"木材若長期處於含水率約 20–25% 以上、真菌得以生長，便會腐朽。保持乾燥可存續數百年；持續潮濕則可能十年就毀壞。深遠的屋簷、把柱子抬離地面的礎石、通風的地板，都是日本的對策。" } },
            { h:{ en:"Insects", ja:"虫", zh:"蟲" },
              jp:"シロアリ",
              def:"",
              d:{
                en:"Two subterranean termites, <em>Coptotermes formosanus</em> and <em>Reticulitermes speratus</em>, are serious pests in much of Japan, and powder-post beetles attack the sapwood of some hardwoods. Heartwood of hinoki and kōyamaki resists them far better than sapwood or sugi.",
                ja:"イエシロアリとヤマトシロアリの二種の地下性シロアリは日本の多くの地で深刻な害をなし、ヒラタキクイムシは一部の広葉樹の辺材を襲う。檜や高野槙の心材は、辺材やスギよりはるかによくそれに耐える。",
                zh:"兩種地下白蟻——台灣家白蟻（Coptotermes formosanus）與黃胸散白蟻（Reticulitermes speratus）——在日本多數地區是嚴重害蟲，粉蠹蟲則侵害部分闊葉樹的邊材。扁柏與日本金松的心材，抗蟲性遠勝邊材或柳杉。" } },
            { h:{ en:"Movement", ja:"狂い", zh:"變形" },
              jp:"収縮・膨潤",
              d:{
                en:"Wood swells and shrinks with humidity, most across the grain and very little along it. A board that is flat in a showroom can cup in a heated apartment. See <a href=\"moisture.html\">Wood &amp; Water</a>.",
                ja:"木は湿度とともに膨らみ縮む。繊維に直角の方向で最も大きく、繊維方向ではごくわずかである。売り場で平らだった板が、暖房の効いた部屋で反ることがある。<a href=\"moisture.html\">木と水分</a>を参照。",
                zh:"木材隨濕度膨脹收縮，橫紋方向最大、順紋方向極小。在展示間裡平整的木板，到了有暖氣的公寓可能翹曲。見<a href=\"moisture.html\">木與水分</a>。" } },
            { h:{ en:"Variability", ja:"ばらつき", zh:"變異性" },
              jp:"個体差",
              d:{
                en:"Two trees of the same species can differ in strength by a factor of two. Engineers deal with this by grading — visually or by machine — and by using conservative design values; engineered wood deals with it by averaging defects out across many layers.",
                ja:"同じ樹種の二本の木で、強さが倍違うことがある。技術者は目視や機械による等級付けと、控えめな設計値でこれに対処する。エンジニアードウッドは、多くの層に欠点を分散させて平均することで対処する。",
                zh:"同一樹種的兩棵樹，強度可能相差一倍。工程師以分級（目視或機械）與保守的設計值因應；工程木材則以多層疊合、把缺陷平均分散來因應。" } },
            { h:{ en:"Creep", ja:"クリープ", zh:"潛變" },
              jp:"たわみの進行",
              d:{
                en:"Under a sustained load a timber beam keeps slowly deflecting for years, more if it is damp. Old farmhouses show it in sagging ridges; modern codes allow for it by reducing long-term design strengths.",
                ja:"持続する荷重のもとで木の梁は何年も少しずつたわみつづけ、湿っていればなおさらである。古い民家の棟の垂れにそれが見える。現代の基準は長期の設計強度を下げることでこれを見込む。",
                zh:"在持續荷載下，木樑會多年持續緩慢下垂，潮濕時更甚。老農舍下垂的屋脊便是明證；現代規範以降低長期設計強度來因應。" } },
            { h:{ en:"Fire in small sections", ja:"細い材と火", zh:"小斷面與火" },
              jp:"防火",
              d:{
                en:"Large sections char and hold; thin ones burn. The history of Japanese cities, built close in wood, is a history of great fires — Takayama's of 1875 among them — and of the plastered storehouses, firebreaks and codes that answered them.",
                ja:"太い材は炭化して持ちこたえるが、細い材は燃える。木で密に建てられた日本の町の歴史は大火の歴史であり——一八七五年の高山の大火もその一つ——それに応えた土蔵、火除地、規則の歴史である。",
                zh:"大斷面材會碳化而撐住；細材則會燒盡。以木造密集建成的日本城市，其歷史就是大火的歷史——高山 1875 年的大火也是其一——也是以塗灰泥的土藏、防火空地與法規來因應的歷史。" } }
          ] }
      ] },
    { t:"section",
      id:"bamboo",
      title:{ en:"Wood and bamboo", ja:"木と竹", zh:"木與竹" },
      jp:"竹材",
      body:[
        { t:"p",
          text:{
            en:"Bamboo is a grass, but in Gifu's crafts it is wood's partner: the ribs of lanterns and umbrellas, the hoops of barrels, the lath under a clay wall, the nails of a thatched roof. Its fibres are long, straight and strong in tension — per kilogram, a culm of madake is stronger in tension than most timber — and it splits cleanly into thin, flexible strips. What it cannot do is provide a large solid section, be planed flat or be joined like timber, and it is prone to insect attack unless cut in the right season and treated. The two materials divide the work: wood for mass and form, bamboo for springs, ribs and bindings.",
            ja:"竹はイネ科だが、岐阜の工芸では木の相棒である——提灯と傘の骨、樽の箍、土壁の下地の小舞、茅葺の竹釘。繊維は長くまっすぐで引張に強く、一キロあたりではマダケの稈は多くの木材より引張に強い。そして細くしなやかな条にきれいに割れる。できないのは、大きな無垢の断面を与えること、平らに削ること、木のように組むことで、しかるべき季節に伐って処理しなければ虫がつきやすい。二つの素材は仕事を分けあう——木は量と形を、竹はばねと骨と結束を担う。",
            zh:"竹子是禾本科植物，但在岐阜的工藝中它是木的搭檔：燈籠與傘的骨架、木桶的箍、土牆下的竹編底、茅草屋頂的竹釘。它的纖維長、直、抗拉強——以每公斤計，一根桂竹稈的抗拉強度勝過多數木材——而且能乾淨地劈成細而柔韌的竹條。它做不到的是：提供大斷面的實材、被刨平，或像木材那樣接合；若不在適當季節砍伐並加以處理，也容易遭蟲害。兩種材料分工合作：木負責量體與形態，竹負責彈性、骨架與綁束。" } }
      ] },
    { t:"section",
      id:"choose",
      title:{ en:"Choosing", ja:"選ぶ", zh:"選擇" },
      jp:"適材適所",
      body:[
        { t:"table",
          caption:{ en:"Where each material earns its place", ja:"それぞれの素材が居場所を得るところ", zh:"各種材料的用武之地" },
          cols:[
            { en:"Job", ja:"用途", zh:"用途" },
            { en:"Wood", ja:"木", zh:"木" },
            { en:"Steel", ja:"鋼", zh:"鋼" },
            { en:"Concrete", ja:"コンクリート", zh:"混凝土" }
          ],
          rows:[
            [
              { en:"House frame, 2–3 storeys", ja:"住宅の軸組（二〜三階）", zh:"住宅骨架（2–3 層）" },
              {
                en:"Natural choice; light, warm, easy to work, stores carbon",
                ja:"自然な選択。軽く、温かく、加工しやすく、炭素を蓄える",
                zh:"自然之選：輕、溫暖、易加工、儲碳" },
              { en:"Possible; thermal bridging and condensation to manage", ja:"可能。熱橋と結露の対策が要る", zh:"可行；需處理熱橋與結露" },
              { en:"Heavy; used for foundations", ja:"重い。基礎に使う", zh:"笨重；用於基礎" }
            ],
            [
              { en:"Long spans, 30 m+", ja:"長大スパン（三十メートル超）", zh:"大跨距（30 公尺以上）" },
              { en:"Possible with glulam or trusses", ja:"集成材やトラスで可能", zh:"以集成材或桁架可行" },
              { en:"Efficient", ja:"効率的", zh:"有效率" },
              { en:"Possible, prestressed", ja:"プレストレスで可能", zh:"預力可行" }
            ],
            [
              { en:"Ground contact, foundations", ja:"地面に接する部分・基礎", zh:"接地部位、基礎" },
              {
                en:"Only with naturally durable heartwood or treatment; traditionally avoided",
                ja:"耐久性の高い心材か処理材のみ。伝統的には避ける",
                zh:"僅限天然耐久心材或處理材；傳統上避免" },
              { en:"Corrodes", ja:"腐食する", zh:"會腐蝕" },
              { en:"Natural choice", ja:"自然な選択", zh:"自然之選" }
            ],
            [
              { en:"Things touched every day", ja:"毎日触れるもの", zh:"每天觸摸的東西" },
              { en:"Warm, quiet, repairable, ages well", ja:"温かく、静かで、直せ、よく年を重ねる", zh:"溫暖、安靜、可修、越用越好" },
              { en:"Cold, noisy", ja:"冷たく、音がする", zh:"冰冷、有噪音" },
              { en:"Cold, hard", ja:"冷たく、硬い", zh:"冰冷、堅硬" }
            ],
            [
              { en:"A resonating plate", ja:"響く板", zh:"共鳴板" },
              {
                en:"Unmatched: light, stiff along the grain, low damping",
                ja:"比類なし。軽く、繊維方向に剛く、減衰が小さい",
                zh:"無可取代：輕、順紋剛、阻尼低" },
              { en:"Rings; used in bells, not soundboards", ja:"鳴るが、響板ではなく鐘に", zh:"會響，但用於鐘而非音板" },
              { en:"—", ja:"—", zh:"—" }
            ]
          ] }
      ] },
    { t:"related",
      items:[
        { href:"properties.html",
          why:{ en:"The numbers behind wood's strength and weight.", ja:"木の強さと重さの背後の数字。", zh:"木材強度與重量背後的數字。" } },
        { href:"building.html",
          why:{ en:"How Japanese builders used these properties.", ja:"日本の大工がこの性質をいかに使ったか。", zh:"日本工匠如何運用這些性質。" } },
        { href:"carbon.html", why:{ en:"Forests, wood and the carbon budget.", ja:"森と木と炭素の収支。", zh:"森林、木材與碳收支。" } },
        { href:"engineered.html",
          why:{ en:"Engineered wood that closes the gap with steel.", ja:"鋼との差を縮めるエンジニアードウッド。", zh:"縮小與鋼材差距的工程木材。" } }
      ] }
  ] };
