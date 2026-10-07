/* =============================================================
   THE SPIRIT OF GIFU — Paper, Clay & Cloth
   4 pages. Each page is one GIFU.pages["key"] = {…}
   module; the order here is the order of the navigation
   (GIFU.NAV in assets/js/core.js).
   ============================================================= */

/* ---- --------------------------------------------- paper */
GIFU.pages["paper"] = { kicker:{ en:"Paper, Clay & Cloth · 01", ja:"紙・土・布 · 01", zh:"紙・土・布 · 01" },
  title:{ en:"Paper, Lanterns and Umbrellas", ja:"紙・提灯・和傘", zh:"和紙、燈籠與和傘" },
  jp:"美濃和紙 · 岐阜提灯 · 岐阜和傘",
  lede:{
    en:"Paper is a forest craft that uses no timber at all. Along the Nagara River, the inner bark of the paper-mulberry shrub has been made into paper for thirteen centuries; the paper, stretched over frames of bamboo and turned wood, became the lanterns and oiled umbrellas for which Gifu city is famous. Mino washi, Gifu lanterns and Gifu umbrellas are all designated national traditional crafts, and the finest Mino paper is inscribed with UNESCO. This page describes the three crafts and the plants, woods and waters on which they depend.",
    ja:"紙は、材木をまったく使わない森の工芸である。長良川沿いでは、楮という低木の内皮が千三百年にわたって紙に漉かれてきた。その紙は竹と挽いた木の骨に張られ、岐阜市が名高い提灯や番傘になった。美濃和紙、岐阜提灯、岐阜和傘はいずれも国の伝統的工芸品で、最上の美濃紙はユネスコに登録されている。この頁は、三つの工芸と、それが頼る植物、木、水を紹介する。",
    zh:"紙是完全不使用木料的森林工藝。在長良川沿岸，構樹這種灌木的內皮被抄製成紙已有一千三百年；紙張繃在竹子與車製木件構成的骨架上，成為岐阜市聞名的燈籠與油紙傘。美濃和紙、岐阜燈籠與岐阜和傘皆為國家傳統工藝品，而最上等的美濃紙更列入聯合國教科文組織名錄。本頁介紹這三項工藝，以及它們所仰賴的植物、木材與水。" },
  body:[
    { t:"section",
      id:"washi",
      title:{ en:"Mino washi", ja:"美濃和紙", zh:"美濃和紙" },
      jp:"本美濃紙",
      body:[
        { t:"p",
          text:{
            en:"Mino paper is among the oldest surviving paper in Japan: household registers of Mino province dated 702, preserved in the Shōsōin treasure house in Nara alongside registers of the same year from Chikuzen and Buzen in Kyushu, and often cited as the oldest of all. Papermaking flourished in the valleys around Mino city because of the clean, cold water of the Nagara and its tributary the Itadori, and because the paper-mulberry (<em>kōzo</em>) grew well on the surrounding hills. The paper merchants of Mino grew rich enough to build the fire-walled townhouses whose raised gable walls, <em>udatsu</em>, still line the streets of the old town.",
            ja:"美濃の紙は日本に残る最も古い紙の一つである。奈良の正倉院に、同じ年の筑前国・豊前国の戸籍とともに納められた七〇二年の美濃国の戸籍がそれで、しばしば最古の紙として挙げられる。美濃市のまわりの谷で紙漉きが栄えたのは、長良川とその支流の板取川の清く冷たい水があり、まわりの丘で楮がよく育ったからである。美濃の紙問屋は、防火の壁をもつ町家を建てるほど富んだ。その持ち上がった袖壁、うだつが、いまも古い町の通りに並ぶ。",
            zh:"美濃紙是日本現存最古老的紙之一：收藏於奈良正倉院、年代為 702 年的美濃國戶籍，與同年的九州筑前國、豐前國戶籍並存，常被舉為最古老的紙。造紙之所以在美濃市周圍的山谷興盛，是因為長良川及其支流板取川清澈冰冷的水，以及構樹在周邊丘陵生長良好。美濃的紙商富裕到足以興建具防火牆的町家，其高起的山牆「卯建」至今仍排列在老城區的街道上。" } },
        { t:"defs",
          items:[
            { term:{ en:"Hon-Minoshi", ja:"本美濃紙", zh:"本美濃紙" },
              jp:"重要無形文化財",
              def:{
                en:"The most exacting form of Mino paper, made only from kōzo of the Nasu variety, bleached naturally in water and sun, beaten by hand and formed on a bamboo screen by the <em>nagashizuki</em> method, with mucilage from the root of <em>tororo-aoi</em> to slow the drainage. It was designated an Important Intangible Cultural Property in 1969, and in 2014 it was inscribed by UNESCO, with Sekishū-banshi and Hosokawa-shi, as “Washi, craftsmanship of traditional Japanese hand-made paper”. A handful of certified makers belong to its preservation society.",
                ja:"美濃紙のなかで最も厳しいもので、那須楮だけを使い、水と日で自然に晒し、手で打ち、竹の簀で流し漉きをし、トロロアオイの根のネリで水の抜けをゆるめる。一九六九年に重要無形文化財に指定され、二〇一四年には石州半紙、細川紙とともに「和紙：日本の手漉和紙技術」としてユネスコに登録された。数人の認定された漉き手が保存会に属する。",
                zh:"美濃紙中要求最嚴格者，只用那須品種的構樹，以水與日光自然漂白，手工捶打，並以竹簾「流漉」法抄紙，加入黃蜀葵根的黏液減緩濾水。1969 年被指定為重要無形文化財，2014 年與石州半紙、細川紙一同以「和紙：日本手漉和紙技術」列入聯合國教科文組織名錄。少數經認定的抄紙師隸屬其保存會。" } },
            { term:{ en:"Nagashizuki", ja:"流し漉き", zh:"流漉" },
              jp:"ながしずき",
              def:{
                en:"The papermaker scoops the fibre suspension onto a flexible bamboo screen held in a frame and rocks it back and forth, repeatedly, so that the long fibres interlock in many directions before the excess is thrown off. The result is thin, strong and even paper. Mino papermakers are known for rocking in both directions, giving a particularly uniform sheet.",
                ja:"漉き手は繊維の液を枠にはめたしなやかな竹の簀に汲み、何度も前後に揺すって、余分を捨てる前に長い繊維を多くの方向に絡ませる。できる紙は薄く、強く、むらがない。美濃の漉き手は縦にも横にも揺することで知られ、とりわけ均質な紙になる。",
                zh:"抄紙師把纖維漿舀到框架中柔韌的竹簾上，反覆前後搖動，讓長纖維在甩掉多餘漿液前往多個方向交織。成品薄、韌且均勻。美濃抄紙師以縱橫雙向搖動聞名，紙張特別均勻。" } }
          ] },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Oldest paper", ja:"最古の紙", zh:"最古老的紙" },
              v:"702",
              d:{ en:"Mino household registers in the Shōsōin", ja:"正倉院の美濃国戸籍", zh:"正倉院藏美濃國戶籍" } },
            { k:{ en:"Traditional craft", ja:"伝統的工芸品", zh:"傳統工藝品" },
              v:"1985",
              d:{ en:"Mino washi designated 22 May 1985", ja:"美濃和紙、一九八五年五月二十二日指定", zh:"美濃和紙，1985 年 5 月 22 日指定" } },
            { k:{ en:"Intangible property", ja:"重要無形文化財", zh:"重要無形文化財" },
              v:"1969",
              d:{ en:"Hon-Minoshi", ja:"本美濃紙", zh:"本美濃紙" } },
            { k:{ en:"UNESCO", ja:"ユネスコ", zh:"聯合國教科文組織" },
              v:"2014",
              d:{ en:"With Sekishū-banshi and Hosokawa-shi", ja:"石州半紙・細川紙とともに", zh:"與石州半紙、細川紙一同" } }
          ] }
      ] },
    { t:"section",
      id:"lanterns",
      title:{ en:"Gifu lanterns", ja:"岐阜提灯", zh:"岐阜燈籠" },
      jp:"ぎふちょうちん",
      body:[
        { t:"p",
          text:{
            en:"Gifu city has long been Japan's leading producer of paper lanterns. The craft's origins are placed in the early Edo period, and by the mid-eighteenth century the characteristic Gifu lantern had taken shape: a light, egg-shaped or cylindrical body of very thin Mino paper stretched over a single spiral of fine bamboo, with turned and lacquered wooden rings at top and bottom, painted with flowers, grasses and landscapes. A tour of the region by the Meiji emperor in 1878 made them famous nationally. They are hung above family altars during Obon to welcome the spirits of the dead. Gifu lanterns were designated a national traditional craft in 1995.",
            ja:"岐阜市は長く日本一の提灯の産地である。その起こりは江戸の初めに置かれ、十八世紀半ばには岐阜提灯らしい姿が整っていた。ごく細い竹を一本の螺旋に巻いた骨にとても薄い美濃紙を張った、軽い卵形や円筒形の火袋に、挽いて漆を塗った木の口輪を上下につけ、花や草や風景を描く。一八七八年の明治天皇の巡幸が、全国に名を広めた。盆には祖先の霊を迎えるため、仏壇の上に吊るされる。岐阜提灯は一九九五年に国の伝統的工芸品に指定された。",
            zh:"岐阜市長期以來是日本首屈一指的紙燈籠產地。這項工藝的起源可溯至江戶初期，到十八世紀中葉，典型的岐阜燈籠已經成形：以極細竹篾盤成單一螺旋骨架，繃上極薄的美濃紙，形成輕盈的蛋形或圓筒形燈身，上下裝有車製並上漆的木環，繪上花草與山水。1878 年明治天皇巡幸此地，使其名揚全國。盂蘭盆節時，人們把它懸掛在佛壇上方迎接祖靈。岐阜燈籠於 1995 年被指定為國家傳統工藝品。" } },
        { t:"figure",
          caption:{
            en:"How a Gifu lantern is made, simplified. The wooden mould, made of a set of shaped boards, is taken apart and withdrawn through the opening once the paper has dried.",
            ja:"岐阜提灯のつくり方（簡略）。形を削った何枚もの板からなる木の型は、紙が乾いたらばらして口から抜き取る。",
            zh:"岐阜燈籠製作流程（簡化）。由多片成形木板組成的木模，在紙乾後拆開，從開口抽出。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Making a lantern", ja:"提灯をつくる", zh:"製作燈籠" }, per:3, bh:100,
            steps:[
              { t:{ en:"Assemble the mould", ja:"型を組む", zh:"組裝木模" }, d:{ en:"Shaped wooden boards set radially between two discs.", ja:"削った木の板を二枚の円板のあいだに放射状に立てる。", zh:"將成形木板以放射狀立於兩片圓盤之間。" } },
              { t:{ en:"Wind the bamboo", ja:"竹ひごを巻く", zh:"纏繞竹篾" }, d:{ en:"A single fine bamboo strip wound in a spiral around the mould.", ja:"細い竹ひご一本を型に螺旋に巻く。", zh:"以一根細竹篾沿木模螺旋纏繞。" } },
              { t:{ en:"Paste the paper", ja:"紙を張る", zh:"糊紙" }, d:{ en:"Thin Mino paper pasted on in panels.", ja:"薄い美濃紙を一こまずつ張る。", zh:"逐片糊上薄美濃紙。" } },
              { t:{ en:"Paint", ja:"絵付け", zh:"彩繪" }, d:{ en:"Flowers, grasses, landscapes painted by hand.", ja:"花、草、風景を手で描く。", zh:"手繪花草與山水。" } },
              { t:{ en:"Remove the mould", ja:"型を抜く", zh:"脫模" }, d:{ en:"Boards taken apart and withdrawn.", ja:"板をばらして抜き取る。", zh:"拆開木板並抽出。" } },
              { t:{ en:"Fit the rings", ja:"口輪をつける", zh:"裝上木環" }, d:{ en:"Turned, lacquered wooden rings and a stand.", ja:"挽いて塗った木の口輪と台。", zh:"裝上車製上漆的木環與底座。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"umbrellas",
      title:{ en:"Gifu umbrellas", ja:"岐阜和傘", zh:"岐阜和傘" },
      jp:"番傘・蛇の目傘",
      body:[
        { t:"p",
          text:{
            en:"Umbrella making came to Gifu in 1639, when the lord Matsudaira Mitsushige moved to the Kanō domain from Akashi and brought umbrella craftsmen with him; it grew into a side business for lower-ranking samurai and then a major industry. Since the Meiji period Gifu has made a large share of Japan's oiled-paper umbrellas, and at the peak around 1950 the city produced well over ten million a year. Western umbrellas of steel and cloth then took the market almost entirely, and today only a few workshops remain. Gifu umbrellas were designated a prefectural craft in 1992 and a national traditional craft in March 2022.",
            ja:"傘づくりは一六三九年、藩主松平光重が明石から加納藩に移ったとき、傘の職人を連れてきたことで岐阜に来た。下級武士の内職となり、やがて大きな産業に育った。明治から岐阜は日本の和傘の大きな割合をつくり、一九五〇年ごろの最盛期には年に一千万本をゆうに超えた。そののち鉄と布の洋傘が市場をほとんど奪い、いまは数軒の工房が残るのみである。岐阜和傘は一九九二年に県の郷土工芸品に、二〇二二年三月に国の伝統的工芸品に指定された。",
            zh:"製傘業於 1639 年傳入岐阜：藩主松平光重從明石移封加納藩時，帶來了製傘工匠；這項工藝先成為下級武士的副業，後發展為重要產業。自明治時代起，岐阜生產日本油紙傘的很大比例，約 1950 年的鼎盛期，年產量遠超過一千萬把。此後鋼骨布面的洋傘幾乎奪走整個市場，如今只剩少數工坊。岐阜和傘於 1992 年被指定為縣鄉土工藝品，2022 年 3 月獲指定為國家傳統工藝品。" } },
        { t:"defs",
          items:[
            { term:{ en:"The hub — rokuro", ja:"轆轤", zh:"傘轆轤" },
              jp:"エゴノキ",
              def:{
                en:"The heart of a Japanese umbrella is a pair of small turned wooden hubs, the <em>rokuro</em>, into which the ribs are hinged — one fixed at the top of the shaft, one sliding. They are traditionally turned from <em>egonoki</em>, Japanese snowbell, a hard, fine, even wood that holds dozens of slots cut into it without splitting. Hub making is one of the specialist trades on which the whole industry depends.",
                ja:"和傘の心臓は、骨を蝶番のように差しこむ一対の小さな挽いた木の軸受け、轆轤である。一つは柄の頂に固定され、一つは滑る。伝統的にエゴノキから挽かれる。硬く、きめ細かく均質で、何十もの溝を刻んでも割れない木である。轆轤づくりは、産業全体が頼る専門の職の一つである。",
                zh:"和傘的核心是一對小型車製木軸承「轆轤」，傘骨以鉸接方式插入其中——一個固定在傘柄頂端，一個可滑動。傳統上以野茉莉（egonoki）車製，這種木材堅硬、細緻均勻，刻出數十道溝槽也不會裂開。轆轤製作是整個產業賴以存續的專業工種之一。" } },
            { term:{ en:"Ribs of bamboo", ja:"竹の骨", zh:"竹骨" },
              jp:"真竹",
              def:{
                en:"Ribs are split from <em>madake</em> bamboo, one culm for each umbrella so that the ribs match and close neatly; the paper is Mino washi, oiled for rain and lacquered at the edges.",
                ja:"骨は真竹から割り出す。一本の傘に一本の竹を使い、骨がそろってきれいに閉じるようにする。紙は美濃和紙で、雨のために油を引き、縁に漆を塗る。",
                zh:"傘骨以真竹劈製，每把傘用同一根竹稈，使傘骨一致、收合整齊；傘面用美濃和紙，塗油防雨，邊緣上漆。" } },
            { term:{ en:"A hundred processes", ja:"百の工程", zh:"百道工序" },
              jp:"分業",
              def:{
                en:"Umbrella making was divided among about ten main trades and up to a hundred separate operations — splitting ribs, turning hubs, making shafts, pasting, oiling, lacquering, decorating — each done in a different house. The loss of any one trade threatens all the others.",
                ja:"傘づくりはおよそ十の主な職と百に及ぶ別々の工程——骨を割る、轆轤を挽く、柄をつくる、張る、油を引く、漆を塗る、飾る——に分かれ、それぞれ別の家で行われた。一つの職が失われれば、ほかのすべてが脅かされる。",
                zh:"製傘分為約十個主要行業、多達百道獨立工序——劈骨、車轆轤、做傘柄、糊紙、上油、上漆、裝飾——各由不同人家完成。任何一個行業消失，都會威脅其他所有行業。" } }
          ] }
      ] },
    { t:"section",
      id:"akari",
      title:{ en:"Akari: a lantern for the world", ja:"AKARI：世界の提灯", zh:"Akari：走向世界的燈" },
      jp:"イサム・ノグチ",
      body:[
        { t:"p",
          text:{
            en:"In 1951 the sculptor Isamu Noguchi visited Gifu during the cormorant-fishing season, saw the city's lanterns, and began designing lamps of Mino paper and bamboo with the lantern maker Ozeki, founded in Gifu in 1891. He called them Akari — “light” — and liked to note that the character 明 combines the sun and the moon. Over more than three decades he designed well over a hundred Akari, from small table lamps to great hanging forms, and they became some of the most widely copied lighting designs of the twentieth century. They are still made by hand in Gifu.",
            ja:"一九五一年、彫刻家イサム・ノグチは鵜飼の季節に岐阜を訪れて町の提灯を見、一八九一年に岐阜で創業した提灯屋オゼキとともに、美濃紙と竹のあかりをデザインしはじめた。彼はそれを「AKARI」——光——と名づけ、「明」の字が日と月を合わせたものであることを好んで語った。三十年以上にわたって、小さな卓上の灯りから大きな吊りの形まで百をゆうに超えるAKARIをデザインし、それは二十世紀で最も広くまねられた照明の意匠の一つとなった。いまも岐阜で手でつくられている。",
            zh:"1951 年，雕塑家野口勇在鸕鶿捕魚季造訪岐阜，看見當地的燈籠，便與 1891 年創立於岐阜的燈籠商 Ozeki 合作，開始設計以美濃紙與竹子製成的燈具。他將之命名為「Akari」——光——並喜歡指出「明」字由日與月組成。三十多年間，他設計了遠超過一百款 Akari，從小檯燈到大型吊燈，成為二十世紀最常被模仿的照明設計之一。至今仍在岐阜以手工製作。" } },
        { t:"note",
          label:{ en:"The paper town", ja:"紙の町", zh:"紙之町" },
          text:{
            en:"The old merchant quarter of Mino, with its raised <em>udatsu</em> firewalls, is a nationally designated preservation district for traditional buildings, and each autumn its streets are filled with lights made of Mino paper by artists and residents. Mino city's paper museum nearby, the Mino Washi no Sato Kaikan, offers papermaking by hand to visitors. See <a href=\"visiting.html\">Visiting</a>.",
            ja:"うだつの上がる美濃の古い商家の町並みは、国の重要伝統的建造物群保存地区で、毎年秋には、作家や住民が美濃紙でつくった灯りが通りを満たす。近くの美濃和紙の里会館では、訪れる人が手漉きを体験できる。<a href=\"visiting.html\">訪ねる</a>を参照。",
            zh:"美濃的老商家町保留著高起的防火山牆「卯建」，是國家指定的重要傳統建造物群保存地區；每年秋天，藝術家與居民以美濃紙製作的燈飾布滿街道。附近的美濃和紙之里會館提供訪客體驗手工抄紙。見<a href=\"visiting.html\">參訪</a>。" } }
      ] },
    { t:"section", id:"uchiwa",
      title:{ en:"Fans", ja:"団扇", zh:"團扇" }, jp:"岐阜うちわ · 水うちわ",
      body:[
        { t:"p", text:{
          en:"Gifu's flat fans, <em>uchiwa</em>, are made like the lanterns from local bamboo and Mino paper. The most delicate are the <strong>mizu-uchiwa</strong>, “water fans”: faced with a very thin paper and varnished so that it becomes translucent, they look cool and glassy in the light of a summer evening, and are said once to have been dipped in water to cool the air they moved. Only a few makers in Gifu city still produce them.",
          ja:"岐阜の団扇は、提灯と同じく地元の竹と美濃紙で作られる。最も繊細なのが<strong>水うちわ</strong>である。ごく薄い紙を貼ってニスを引き、透きとおらせたもので、夏の夕べの光のなかでガラスのように涼しげに見え、かつては水にくぐらせて風を冷たくしたともいわれる。いまも作るのは、岐阜市のわずかな作り手だけである。",
          zh:"岐阜的團扇與燈籠一樣，以當地竹子與美濃紙製作。其中最纖細的是<strong>水團扇</strong>（水うちわ）：貼上極薄的紙並塗上清漆，使其變得半透明，在夏日黃昏的光線中宛如玻璃般清涼；據說從前還會把它浸入水中，讓搧出的風更涼。如今仍在製作的，只有岐阜市的少數幾家。" } }
      ]
    },
    { t:"section",
      id:"suketa",
      title:{ en:"Wood and bamboo in the papermaker's hands", ja:"紙漉きの手のなかの木と竹", zh:"抄紙師手中的木與竹" },
      jp:"簀桁・板干し",
      body:[
        { t:"figure",
      caption:{
        en:"How Mino paper is made by hand, schematic. The inner bark of the paper mulberry, <em>kōzo</em>, is soaked, bleached in running water, cooked, picked clean of specks by hand and beaten into fibre. In the vat the fibre is mixed with water and <em>neri</em>, a slippery extract of the root of <em>tororo-aoi</em> that keeps the fibres suspended. The papermaker scoops and sways the mould back and forth and side to side — the Mino method — so that thin layers of fibre cross and lock, then the sheets are pressed and dried on boards.",
        ja:"美濃紙の手漉き（模式図）。楮の内皮（白皮）を水に浸し、流水にさらし、煮て、ちりを手で一つずつ取り除き、叩いて繊維にする。漉き舟では繊維を水とネリ——トロロアオイの根からとる粘液で、繊維を水中に散らばらせておく——に混ぜる。漉き手は簀桁で汲み、縦にも横にも揺する——美濃の漉き方——ので、薄い繊維の層が交差して絡み合う。漉いた紙は圧して水を切り、板に張って乾かす。",
        zh:"美濃紙的手工抄造（示意圖）。構樹的內皮（楮）經浸泡、在流水中漂白、蒸煮、以手逐一挑除雜質，再搥打成纖維。在紙槽中，纖維與水以及「黏液」（ネリ）——取自黃蜀葵根部、能使纖維懸浮的滑稠汁液——混合。抄紙師以簾框撈起紙漿，前後左右搖動——即美濃的抄法——讓一層層薄纖維交錯纏結，之後壓去水分，貼在木板上乾燥。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Steps of hand papermaking in Mino">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FROM BARK TO SHEET", ja:"皮から紙へ", zh:"從樹皮到紙張" }) + '</text>';
        var steps = [
          [{en:"Bark",ja:"楮の皮",zh:"楮皮"}, {en:"inner bark of kōzo",ja:"楮の白皮",zh:"構樹內皮"}],
          [{en:"Soak & bleach",ja:"さらす",zh:"浸泡漂白"}, {en:"in running water",ja:"流水で",zh:"在流水中"}],
          [{en:"Cook",ja:"煮る",zh:"蒸煮"}, {en:"with alkali",ja:"アルカリで",zh:"加鹼"}],
          [{en:"Pick clean",ja:"ちり取り",zh:"挑除雜質"}, {en:"by hand",ja:"冷水のなか手で",zh:"於冷水中手工"}],
          [{en:"Beat",ja:"叩解",zh:"搥打"}, {en:"into loose fibre",ja:"繊維をほぐす",zh:"打散成纖維"}],
          [{en:"Form",ja:"漉く",zh:"抄造"}, {en:"sway both ways",ja:"縦横に揺する",zh:"前後左右搖動"}],
          [{en:"Press & dry",ja:"圧す・干す",zh:"壓水與乾燥"}, {en:"on boards",ja:"板干し",zh:"貼板晾乾"}]
        ];
        steps.forEach(function (st, i) {
          var x = 40 + i * 100, y = 70;
          s += '<rect x="' + x + '" y="' + y + '" width="86" height="46" fill="' + (i === 5 ? "#E9ECEE" : "#F0EDE4") + '" stroke="#7C6B52"/>' +
               '<text x="' + (x + 43) + '" y="' + (y + 20) + '" text-anchor="middle" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L(st[0]) + '</text>' +
               '<text x="' + (x + 43) + '" y="' + (y + 36) + '" text-anchor="middle" ' + F + ' font-size="8.5" fill="#55504A">' + L(st[1]) + '</text>';
          if (i < 6) s += '<path d="M' + (x + 86) + ' ' + (y + 23) + ' L' + (x + 100) + ' ' + (y + 23) + '" stroke="#55504A"/>';
        });
        /* vat and mould detail */
        s += '<rect x="80" y="170" width="300" height="80" fill="#E0E7E9" stroke="#8FA6AE"/>' +
             '<text x="92" y="190" ' + F + ' font-size="10" fill="#5E7780">' + L({en:"vat: water + fibre + neri (tororo-aoi)",ja:"漉き舟：水＋繊維＋ネリ（トロロアオイ）",zh:"紙槽：水＋纖維＋黏液（黃蜀葵）"}) + '</text>' +
             '<rect x="150" y="200" width="160" height="10" fill="#EADCC1" stroke="#201E1B"/>' +
             '<text x="230" y="230" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"the mould (sugeta): a bamboo screen in a frame",ja:"簀桁：竹の簀を桁に挟んだもの",zh:"簾框：夾在框中的竹簾"}) + '</text>';
        /* arrows sway */
        s += '<path d="M470 200 L620 200" stroke="#201E1B" stroke-width="1.4"/><path d="M470 200 l8 -4 l0 8 z M620 200 l-8 -4 l0 8 z" fill="#201E1B"/>' +
             '<path d="M545 160 L545 240" stroke="#201E1B" stroke-width="1.4"/><path d="M545 160 l-4 8 l8 0 z M545 240 l-4 -8 l8 0 z" fill="#201E1B"/>' +
             '<text x="545" y="260" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"Mino sways the mould both ways",ja:"美濃は縦にも横にも揺する",zh:"美濃抄法：前後左右都搖動"}) + '</text>' +
             '<text x="545" y="274" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"fibres cross: thin, even, strong",ja:"繊維が交わり、薄く均一で強い",zh:"纖維交錯：薄、均勻而強韌"}) + '</text>' +
             '<text x="30" y="318" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — each workshop has its own practice; Honminoshi prescribes materials and methods strictly.",ja:"模式図——工房ごとにやり方がある。本美濃紙は原料と工程を厳しく定めている。",zh:"示意圖——各工坊做法不同；本美濃紙對原料與工序有嚴格規定。"}) + '</text></svg>';
        return s;
      }
    },
        { t:"p",
          text:{
            en:"Washi is a forest product twice over: its fibre comes from a shrub, and the tools that form and dry it come from trees and bamboo. The papermaker's mould, the <em>suketa</em>, has two parts. The <em>su</em> is a flexible screen of very fine bamboo strips woven together with silk thread, on which the fibres settle while the water drains through. The <em>keta</em> is the hinged wooden frame that clamps the screen and is rocked through the vat; it is made of straight-grained hinoki, ideally from old trees of nearly three hundred years, which stays true and light when wet for hours a day. A papermaker trained in Mino reports that a mould of the Mino size costs about ¥200,000, and that only about five makers of screens and a single full-time maker of frames remained in Japan — a fragility shared by many crafts that depend on the tools of other crafts.",
            ja:"和紙は二重に森の産物である。繊維は低木から、紙を形づくり乾かす道具は木と竹からくる。漉き手の道具、簀桁は二つの部分からなる。簀は、ごく細い竹ひごを絹糸で編んだしなやかな簾で、水が抜けるあいだに繊維がその上にたまる。桁は簀をはさむ蝶番つきの木の枠で、これを漉き舟のなかで揺する。まっすぐな木目のヒノキでつくり、理想は樹齢三百年近い古木で、一日に何時間も濡れても狂わず軽い。美濃で修業した漉き手によれば、美濃判ほどの簀桁はおよそ二十万円し、日本に残る簀の作り手は五人ほど、専業の桁の作り手はただ一人だという。ほかの職の道具に頼る多くの工芸に共通するもろさである。",
            zh:"和紙是雙重意義上的森林產物：纖維來自灌木，而成形與乾燥紙張的工具來自樹木與竹子。抄紙師的抄紙器「簀桁」（suketa）由兩部分組成。「簀」是以絹線把極細竹篾編成的柔韌竹簾，水濾下時纖維沉積其上；「桁」是夾住竹簾、附鉸鍊的木框，在紙槽中前後搖動。它以紋理通直的扁柏製成，最好取自樹齡近三百年的老樹，每天浸水數小時仍不變形、保持輕巧。一位在美濃受訓的抄紙師指出，一副美濃尺寸的簀桁約需 20 萬日圓，而日本僅存約五位竹簾製作者、一位專職木框製作者——許多仰賴其他行業工具的工藝都有這樣的脆弱。" } },
        { t:"p",
          text:{
            en:"Wood returns at the end of the process. Freshly formed sheets are pressed, then brushed one by one onto wooden boards and dried in the sun, a method called <em>ita-boshi</em>; the sheet takes a little of the board's texture on one side, and the side that faced the wood is the smoother. Most paper today is dried on heated steel plates, which is faster, but board drying is one of the conditions that define Hon-Minoshi.",
            ja:"工程の終わりにも木はもどってくる。漉いたばかりの紙は圧搾され、一枚ずつ刷毛で木の板に貼られて日に干される。板干しと呼ぶ方法で、紙は片面に板の肌を少し写し、板に接した面のほうがなめらかになる。いまの紙の多くは熱した鉄板で速く乾かすが、板干しは本美濃紙を定める条件の一つである。",
            zh:"在工序末端，木材再度登場。剛抄好的紙經過壓榨，再逐張以刷子貼到木板上曬乾，稱為「板干し」（ita-boshi）；紙張一面會帶上些許木板的肌理，貼著木板的那一面較為平滑。如今多數紙張以加熱鋼板乾燥，速度較快，但板干是界定本美濃紙的條件之一。" } },
        { t:"steps",
          items:[
            { title:{ en:"Kōzo only", ja:"原料は楮のみ", zh:"原料僅限構樹" },
              jp:"那須楮",
              meta:{ en:"Raw material", ja:"原料", zh:"原料" },
              text:{
                en:"The fibre must be paper mulberry alone; for Hon-Minoshi, Nasu kōzo grown in Ibaraki and Tochigi.",
                ja:"繊維は楮だけ。本美濃紙では茨城・栃木の那須楮。",
                zh:"纖維必須只用構樹；本美濃紙使用茨城與栃木產的那須楮。" } },
            { title:{ en:"White bark, plant ash", ja:"白皮と草木灰", zh:"白皮與草木灰" },
              jp:"煮熟",
              meta:{ en:"Cooking", ja:"煮る", zh:"蒸煮" },
              text:{
                en:"The scraped inner bark is cooked with plant ash or soda ash, never with stronger chemicals.",
                ja:"表皮を削った白皮を草木灰かソーダ灰で煮る。より強い薬品は使わない。",
                zh:"刮去外皮的白皮以草木灰或蘇打灰蒸煮，不用更強的化學藥劑。" } },
            { title:{ en:"No chemical bleach", ja:"薬品漂白をしない", zh:"不用化學漂白" },
              jp:"川晒し",
              meta:{ en:"Cleaning", ja:"晒し", zh:"漂洗" },
              text:{
                en:"Whiteness comes from water and sun, and specks are picked out by hand.",
                ja:"白さは水と日によるもので、ちりは手で取り除く。",
                zh:"白度來自清水與日光，雜質以手工挑除。" } },
            { title:{ en:"Beaten by hand", ja:"手打ち", zh:"手工捶打" },
              jp:"叩解",
              meta:{ en:"Beating", ja:"叩解", zh:"打漿" },
              text:{
                en:"The fibres are beaten by hand or an equivalent method, keeping them long.",
                ja:"繊維は手打ちかそれに準じる方法で叩き、長さを保つ。",
                zh:"纖維以手工或同等方法捶打，保持纖維長度。" } },
            { title:{ en:"Tororo-aoi and bamboo screen", ja:"トロロアオイと竹簀", zh:"黃蜀葵與竹簾" },
              jp:"流し漉き",
              meta:{ en:"Forming", ja:"漉く", zh:"抄造" },
              text:{
                en:"Formed by nagashizuki on a bamboo screen, with mucilage from tororo-aoi root.",
                ja:"トロロアオイのネリを使い、竹簀で流し漉きをする。",
                zh:"加入黃蜀葵根的黏液，以竹簾流漉成紙。" } },
            { title:{ en:"Board drying", ja:"板干し", zh:"板干" },
              jp:"天日",
              meta:{ en:"Drying", ja:"乾燥", zh:"乾燥" },
              text:{ en:"Each sheet is dried on a wooden board.", ja:"一枚ずつ木の板で乾かす。", zh:"每張紙都在木板上乾燥。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Mino city, “What is Hon-Minoshi” (designation requirements); a Mino-trained papermaker's notes on the suketa.",
            ja:"出典：美濃市「本美濃紙とは」（指定要件）、美濃で修業した漉き手による簀桁の記録。",
            zh:"資料來源：美濃市〈何謂本美濃紙〉（指定要件）；一位在美濃受訓之抄紙師關於簀桁的紀錄。" } },
        { t:"note", label:{ en:"Telling hand-made paper", ja:"手漉きを見分ける", zh:"辨識手漉紙" }, text:{
      en:"Hold a sheet to the light. In hand-made washi the long kōzo fibres show as a fine web running every way, because the mould is rocked both back and forth and from side to side as the sheet forms; the edges are soft and uneven where it left the mould; and it tears with difficulty in any direction. Machine-made paper sold as “washi” is more uniform, its fibres lie mostly one way, and it tears much more easily along that line.",
      ja:"紙を光にかざしてみるとよい。手漉きの和紙では、楮の長い繊維があらゆる方向に走る細かな網目となって見える。漉くときに簀桁を前後にも左右にも揺するからである。縁は簀桁を離れたところで柔らかく不揃いになり、どの方向にも裂けにくい。「和紙」として売られる機械漉きの紙はより均一で、繊維がおおむね一方向にそろい、その向きにはずっと裂けやすい。",
      zh:"把紙舉向光源看看。手漉和紙中，楮樹的長纖維呈現為朝各個方向延伸的細密網紋，因為抄紙時抄紙框既前後搖動、也左右搖動；紙緣在離開抄紙框之處柔軟而參差；無論朝哪個方向都不易撕開。以「和紙」之名販售的機器紙則較為均勻，纖維大多朝同一方向排列，沿著那個方向撕就容易得多。" } }
      ] },
    { t:"section",
      id:"kozo",
      title:{ en:"The fibre: kōzo", ja:"繊維：楮", zh:"纖維：構樹" },
      jp:"那須楮・トロロアオイ",
      body:[
        { t:"p",
          text:{
            en:"Kōzo, the paper mulberry (<em>Broussonetia</em>), is a shrub of the mulberry family that is cut to the stool each winter and grows back with long, straight shoots. The shoots are steamed, the bark stripped off as “black bark”, and the dark outer skin scraped away to leave the “white bark” whose long, tough fibres give washi its strength. The work is cold, manual and seasonal, and domestic growing has collapsed. According to the Japan Special Forest Products Promotion Association, Japan's kōzo harvest in fiscal 2004 was about 70 tonnes of black bark, and between 1975 and 2004 the harvest fell to 8 per cent and the area planted to 11 per cent of their former levels. By then about half the kōzo used in Japan was imported. Thai kōzo, introduced in the 1970s, sold for ¥200–300 a kilogram against about ¥2,000 for domestic bark.",
            ja:"楮（コウゾ）はクワ科の低木で、毎冬株もとから刈られ、長くまっすぐな枝を伸ばしなおす。枝を蒸して皮を剥ぎ（黒皮）、黒い表皮を削って白皮にする。その長く強い繊維が和紙の強さを生む。仕事は寒く、手で行い、季節に縛られ、国内の栽培はくずれた。日本特用林産振興会によれば、二〇〇四年度の国産楮の生産は黒皮で約七十トンで、一九七五年から二〇〇四年のあいだに生産量は八パーセントに、栽培面積は十一パーセントに減った。そのころには、日本で使う楮のおよそ半分が外国産になっていた。一九七〇年代に入ってきたタイ産の楮は一キロ二百〜三百円で、国産の約二千円と比べものにならなかった。",
            zh:"構樹（kōzo，學名 Broussonetia）是桑科灌木，每年冬天從基部割除，隔年又長出又長又直的枝條。枝條經蒸煮後剝下樹皮（黑皮），再刮去深色外皮，留下「白皮」——其細長強韌的纖維賦予和紙強度。這份工作寒冷、靠手工且受季節限制，日本國內的栽種已然崩解。據日本特用林產振興會，2004 年度日本構樹產量約為 70 公噸（黑皮計），且在 1975 至 2004 年間，產量降至原本的 8%，栽種面積降至 11%。到那時，日本使用的構樹約有一半來自國外。1970 年代引進的泰國構樹，每公斤售價 200–300 日圓，國產樹皮則約 2,000 日圓。" } },
        { t:"defs",
          items:[
            { term:{ en:"Nasu kōzo", ja:"那須楮", zh:"那須楮" },
              jp:"茨城県大子町",
              def:{
                en:"Grown mainly around Daigo in northern Ibaraki, Nasu kōzo has fine, lustrous, closely packed fibres and is the only kōzo allowed for Hon-Minoshi. In the 2000s its growers were mostly in their seventies, and farms were giving up at a rate of one or two a year.",
                ja:"おもに茨城県北部の大子周辺で育つ那須楮は、繊維が細く艶があり緻密で、本美濃紙に許される唯一の楮である。二〇〇〇年代には生産者の多くが七十代で、一年に一、二軒のペースで減っていた。",
                zh:"那須楮主要產於茨城縣北部的大子一帶，纖維細緻、富光澤且緊密，是本美濃紙唯一允許使用的構樹。2000 年代時，其種植者多已七十多歲，每年以一、兩戶的速度減少。" } },
            { term:{ en:"Tororo-aoi", ja:"トロロアオイ", zh:"黃蜀葵" },
              jp:"ネリ",
              def:{
                en:"The mucilage that slows drainage in the vat comes from the crushed root of <em>Abelmoschus manihot</em>. In fiscal 2004 Japan grew about 45 tonnes on 4 hectares, more than 90 per cent of it in Ibaraki; in a survey of hand papermakers about 59 per cent used it, the rest synthetic or other plant mucilages.",
                ja:"漉き舟で水の抜けをゆるめるネリは、トロロアオイの根をつぶしたものからとる。二〇〇四年度の国内生産は四ヘクタールで約四十五トン、九割以上が茨城県である。手漉きの漉き手への調査では約五十九パーセントがこれを使い、ほかは合成や別の植物のネリだった。",
                zh:"在紙槽中減緩濾水的黏液，取自黃蜀葵（Abelmoschus manihot）搗碎的根。2004 年度日本以 4 公頃種植約 45 公噸，其中九成以上在茨城縣；一項針對手工抄紙師的調查中，約 59% 使用黃蜀葵，其餘用合成或其他植物黏液。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Japan Special Forest Products Promotion Association, “Washi — a special forest product that sustains cultural properties” (figures for fiscal 2004); Mino city, Hon-Minoshi.",
            ja:"出典：日本特用林産振興会「和紙―文化財を維持する特用林産物」（二〇〇四年度の数値）、美濃市「本美濃紙」。",
            zh:"資料來源：日本特用林產振興會〈和紙——維繫文化財的特用林產物〉（2004 年度數據）；美濃市〈本美濃紙〉。" } }
      ] },
    { t:"section",
      id:"decline",
      title:{ en:"From thousands of vats to a few dozen", ja:"数千の漉き舟から数十へ", zh:"從數千紙槽到數十" },
      jp:"手漉き戸数",
      body:[
        { t:"p",
          text:{
            en:"Mino paper's reputation was made under the Tokugawa: from about 1600, after the battle of Sekigahara, it was supplied to the shogunate for shōji, and “Minogami” became a byword for good paper. In the Meiji era the government sent it to the world's fairs at Vienna in 1873 and Philadelphia in 1876, and exports followed. At its height, the villages around Mino held thousands of papermaking households — about 3,700 in the Meiji and Taishō eras by one count, about 5,000 by the city's — and the dried sheets were carried down the Nagara to Gifu's river port. Machine papermaking reached Mino in the Taishō era; after the Second World War glass and curtains replaced paper in shōji, nylon replaced paper umbrellas, and copiers demanded Western paper. The fall was steep, as the figure shows. The Mino hand-made washi cooperative was formed in 1983, two years before the designation as a national traditional craft.",
            ja:"美濃紙の名声は徳川のもとでつくられた。関ヶ原の戦いののち、一六〇〇年ごろから幕府の障子紙として納められ、「美濃紙」は良い紙の代名詞になった。明治には政府が一八七三年のウィーン、一八七六年のフィラデルフィアの万国博覧会に出品し、輸出が続いた。最盛期には美濃のまわりの村々に何千もの紙漉きの家があった——ある数え方では明治・大正に約三千七百戸、市の数え方では約五千戸——そして乾いた紙は長良川を下って岐阜の川湊へ運ばれた。大正には機械漉きが美濃に入り、第二次世界大戦後は、障子の紙はガラスやカーテンに、紙の傘はナイロンに替わり、複写機は洋紙を求めた。図が示すように、落ちこみは急だった。美濃手すき和紙協同組合は一九八三年に結成され、その二年後に国の伝統的工芸品に指定された。",
            zh:"美濃紙的名聲建立於德川時代：約自 1600 年關原之戰後，它成為幕府的障子用紙，「美濃紙」從此成為好紙的代名詞。明治時代，政府把它送往 1873 年維也納與 1876 年費城的萬國博覽會，隨後開始外銷。鼎盛時期，美濃周邊村落有數千戶抄紙人家——依一種統計，明治至大正年間約 3,700 戶；依美濃市的說法約 5,000 戶——乾燥的紙張沿長良川順流運往岐阜的河港。大正年間機械抄紙傳入美濃；二次大戰後，障子的紙被玻璃與窗簾取代，紙傘被尼龍傘取代，影印機則需要洋紙。如圖所示，衰退十分陡峭。美濃手抄和紙協同組合成立於 1983 年，兩年後獲指定為國家傳統工藝品。" } },
        { t:"figure",
          caption:{
            en:"Hand-papermaking households in and around Mino. The peak is undated in the sources and estimates differ (about 3,700 by one account, about 5,000 by Mino city); later figures from the Mino washi brand cooperative and, for 2008, Mino city (“fewer than 30”).",
            ja:"美濃とその周辺の手漉きの家の数。最盛期の年は出典に明記されず、推計も異なる（ある記述では約三千七百戸、美濃市では約五千戸）。のちの数は美濃和紙ブランド協同組合、二〇〇八年は美濃市による（「三十戸弱」）。",
            zh:"美濃及周邊手工抄紙戶數。鼎盛期年份來源未載明，各方估計不一（一說約 3,700 戶，美濃市稱約 5,000 戶）；其後數字取自美濃和紙品牌協同組合，2008 年取自美濃市（「不到 30 戶」）。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Papermaking households, Mino", ja:"美濃の紙漉きの家", zh:"美濃抄紙戶數" }, labelW:200, max:5000,
            items:[
              { n:{ en:"Peak (Meiji–Taishō)", ja:"最盛期（明治〜大正）", zh:"鼎盛期（明治至大正）" }, v:3700, lab:{ en:"3,700–5,000", ja:"3,700〜5,000戸", zh:"3,700–5,000 戶" }, f:"#EADCC1" },
              { n:"1955", v:1200, lab:{ en:"1,200", ja:"1,200戸", zh:"1,200 戶" } },
              { n:"1965", v:500, lab:{ en:"500", ja:"500戸", zh:"500 戶" } },
              { n:"1975", v:100, lab:{ en:"100", ja:"100戸", zh:"100 戶" } },
              { n:"1985", v:40, lab:{ en:"40", ja:"40戸", zh:"40 戶" } },
              { n:"2008", v:29, lab:{ en:"fewer than 30", ja:"30戸弱", zh:"不到 30 戶" } }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: Mino washi brand cooperative, history (1955–1985); Mino city, Mino Washi no Sato Kaikan, history (peak and 2008; shogunate shōji paper; Vienna and Philadelphia); Japanese Wikipedia, “Mino washi” (Meiji–Taishō peak).",
            ja:"出典：美濃和紙ブランド協同組合「美濃和紙の歴史」（一九五五〜一九八五年）、美濃市 美濃和紙の里会館「歴史」（最盛期と二〇〇八年、幕府の障子紙、ウィーンとフィラデルフィア）、ウィキペディア日本語版「美濃和紙」（明治・大正の最盛期）。",
            zh:"資料來源：美濃和紙品牌協同組合〈美濃和紙的歷史〉（1955–1985 年）；美濃市美濃和紙之里會館〈歷史〉（鼎盛期與 2008 年、幕府障子紙、維也納與費城）；日文維基百科〈美濃和紙〉（明治至大正鼎盛期）。" } }
      ] },
    { t:"section",
      id:"trades-today",
      title:{ en:"Lantern and umbrella makers today", ja:"いまの提灯と傘のつくり手", zh:"今日的燈籠與傘匠" },
      jp:"分業と後継者",
      body:[
        { t:"p",
          text:{
            en:"Gifu lanterns are still made by a chain of specialists. The lantern cooperative names three: the <em>hari-shi</em>, who winds the bamboo and pastes the paper on the mould; the <em>surikomi-shi</em>, who prints outlines and backgrounds through stencils; and the <em>e-shi</em>, who paints the flowers and grasses by hand. Behind them stand the turners and lacquerers who make the wooden rings and stands, and the makers of the moulds themselves. Gifu remains the largest lantern-producing prefecture: in the industrial statistics for 2017 it shipped lanterns worth about ¥3.5 billion, 43 per cent of the national total, just ahead of Fukuoka, home of the Yame lantern.",
            ja:"岐阜提灯はいまも専門の職人の連なりでつくられる。岐阜提灯協同組合は三つをあげる。型に竹ひごを巻き紙を張る張師、型紙で輪郭や地を摺りこむ摺込師、花や草を手で描く絵師である。その背後には、木の口輪や台をつくる木地師や塗師、そして型そのものの作り手がいる。岐阜はいまも日本一の提灯の産地で、二〇一七年の工業統計では約三十五億円の提灯を出荷し、全国の四十三パーセントを占めて、八女提灯の福岡をわずかに上回った。",
            zh:"岐阜燈籠至今仍由一連串專業工匠完成。岐阜燈籠協同組合列出三種：在木模上纏繞竹篾、糊上紙張的「張師」；以型紙印上輪廓與底色的「摺込師」；以及手繪花草的「繪師」。他們背後還有製作木環與底座的車木師與漆師，以及木模本身的製作者。岐阜仍是全國最大的燈籠產地：在 2017 年的工業統計中，其燈籠出貨額約 35 億日圓，占全國 43%，略高於八女燈籠的故鄉福岡。" } },
        { t:"figure",
          caption:{
            en:"Shipments of paper lanterns by prefecture, 2017, in ¥ million. Census of Manufactures (establishments with four or more employees), as tabulated by a statistics service. National total about ¥8.2 billion.",
            ja:"都道府県別の提灯出荷額（二〇一七年、百万円）。工業統計（従業者四人以上の事業所）を統計サイトが集計したもの。全国計は約八十二億円。",
            zh:"2017 年各都道府縣燈籠出貨額（百萬日圓）。依工業統計（員工 4 人以上事業所），由統計網站整理。全國合計約 82 億日圓。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Lantern shipments by prefecture, 2017", ja:"提灯の出荷額（二〇一七年）", zh:"燈籠出貨額（2017 年）" }, labelW:170,
            unit:{ en:"¥ million", ja:"百万円", zh:"百萬日圓" },
            items:[
              { n:{ en:"Gifu", ja:"岐阜県", zh:"岐阜縣" }, v:3510, f:"#EADCC1" },
              { n:{ en:"Fukuoka", ja:"福岡県", zh:"福岡縣" }, v:3030 },
              { n:{ en:"Aichi", ja:"愛知県", zh:"愛知縣" }, v:320 },
              { n:{ en:"Ibaraki", ja:"茨城県", zh:"茨城縣" }, v:240 },
              { n:{ en:"Tokyo", ja:"東京都", zh:"東京都" }, v:120 },
              { n:{ en:"Kyoto", ja:"京都府", zh:"京都府" }, v:100 },
              { n:{ en:"Kagawa", ja:"香川県", zh:"香川縣" }, v:60 }
            ] }); } },
        { t:"p",
          text:{
            en:"The umbrella trade is far smaller and more fragile. When Gifu umbrellas were designated a national traditional craft, the Gifu Shimbun reported 37 craftspeople in ten businesses, and Gifu accounts for more than half of Japan's production of wagasa. The weakest links are the parts: Gifu is the only place where umbrella ribs and the turned <em>rokuro</em> hubs are still made in quantity, and in 2020 there were only two full-time rib makers and a single hub maker, with an average age above seventy-five. A crowdfunding appeal run through Gifu city's hometown-tax scheme from October 2020 to January 2021 raised ¥6.3 million from 212 supporters — 84 per cent of its target — to train two apprentices for three years in ribs and hubs. In February 2024 a support organisation for successors, Waza no Wa, was set up in Gifu, with the umbrella makers among its first partners.",
            ja:"傘の職ははるかに小さく、もろい。岐阜和傘が国の伝統的工芸品に指定されたとき、岐阜新聞は十事業者に三十七人の職人がいると報じ、岐阜は日本の和傘生産の半分以上を占める。いちばん弱いのは部品である。傘の骨と、挽いた轆轤をまとまった量つくっているのは岐阜だけで、二〇二〇年には専業の骨屋が二人、轆轤屋が一人しかおらず、平均年齢は七十五歳を超えていた。二〇二〇年十月から二〇二一年一月まで、ふるさと納税を使ったクラウドファンディングが二百十二人から六百三十万円——目標の八十四パーセント——を集め、二人の見習いに三年間、骨と轆轤の技を学ばせることになった。二〇二四年二月には、後継者を支える組織「技の環」が岐阜で設立され、和傘のつくり手がその最初の協力先の一つとなった。",
            zh:"製傘業規模遠小於此，也更脆弱。岐阜和傘獲指定為國家傳統工藝品時，《岐阜新聞》報導共有 10 家業者、37 名工匠，而岐阜占日本和傘產量的一半以上。最薄弱的環節在零件：岐阜是唯一仍成量生產傘骨與車製「轆轤」的地方；2020 年時，專職傘骨師傅只有兩人、轆轤師傅僅一人，平均年齡超過 75 歲。2020 年 10 月至 2021 年 1 月，透過岐阜市故鄉納稅機制發起的群眾募資，向 212 位支持者募得 630 萬日圓——達目標的 84%——用以讓兩名學徒用三年時間學習傘骨與轆轤製作。2024 年 2 月，支援傳承人的組織「技の環」在岐阜成立，和傘工匠是其首批合作對象之一。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu lantern cooperative, “What is a Gifu lantern”; Census of Manufactures 2017, lanterns by prefecture, via region-case; Gifu Shimbun on the designation of Gifu umbrellas; Furusato Choice government crowdfunding, “Protect the wagasa” (2020–2021); METI, traditional crafts briefing (March 2026), on Waza no Wa.",
            ja:"出典：岐阜提灯協同組合「岐阜提灯とは」、工業統計（二〇一七年）提灯の都道府県別出荷額（region-case）、岐阜新聞（岐阜和傘の指定）、ふるさとチョイス ガバメントクラウドファンディング「和傘を守る！」（二〇二〇〜二〇二一年）、経済産業省 伝統的工芸品に関する資料（二〇二六年三月、技の環）。",
            zh:"資料來源：岐阜燈籠協同組合〈何謂岐阜燈籠〉；2017 年工業統計各都道府縣燈籠出貨額（region-case 整理）；《岐阜新聞》岐阜和傘指定報導；故鄉選擇政府群眾募資「守護和傘！」（2020–2021 年）；經濟產業省傳統工藝品資料（2026 年 3 月，技の環）。" } },
        { t:"note", label:{en:"Keeping paper things",ja:"紙の品を保つ",zh:"紙製品的保存"}, text:{
      en:"Paper lanterns and umbrellas last for many years if they are kept dry and out of strong sun. Fold a lantern flat into its box after the Bon season. After rain, open an umbrella halfway and dry it in the shade before closing it, and store it closed rather than hanging open.",
      ja:"紙の提灯や傘は、湿気と強い日差しを避ければ何年ももつ。提灯は盆が過ぎたらたたんで箱に納める。雨のあとの傘は半開きにして日陰で乾かしてから閉じ、開いたまま吊るさずに閉じてしまっておく。",
      zh:"紙燈籠與紙傘只要保持乾燥、避開強烈日照，就能使用很多年。盂蘭盆節過後，把燈籠折平收進盒中。雨後的紙傘要半開放在陰涼處晾乾再收起，收納時要合起來，不要張開懸掛。" } }
      ] },
    { t:"related",
      items:[
        { href:"satoyama.html",
          why:{ en:"The village landscape that grew kōzo and bamboo.", ja:"楮と竹を育てた村の景観。", zh:"種植構樹與竹子的村落地景。" } },
        { href:"culture.html", why:{ en:"Obon, festivals and the Nagara River.", ja:"盆、祭り、長良川。", zh:"盂蘭盆、祭典與長良川。" } },
        { href:"visiting.html", why:{ en:"Where to see papermaking.", ja:"紙漉きを見られるところ。", zh:"哪裡可以參觀抄紙。" } },
        { href:"world.html",
          why:{ en:"Noguchi's Akari and Gifu's crafts abroad.", ja:"ノグチのAKARIと海外の岐阜の工芸。", zh:"野口勇的 Akari 與海外的岐阜工藝。" } }
      ] }
  ] };

/* ---- ------------------------------------------ minoyaki */
GIFU.pages["minoyaki"] = {
  kicker: { en:"Paper, Clay & Cloth · 02", ja:"紙・土・布 · 02", zh:"紙・土・布 · 02" },
  title:  { en: "Mino Ware", ja: "美濃焼", zh: "美濃燒" },
  jp: "志野 · 織部 · 黄瀬戸 · 瀬戸黒 · 多治見 · 土岐 · 瑞浪 · 可児",
  lede: {
    en: "The low hills of Tōnō — Tajimi, Toki, Mizunami and Kani — hold the clays that made Gifu the largest producer of tableware in Japan. Their kilns created, in the late sixteenth century, the tea ceramics that define the Momoyama taste: the thick white of Shino, the copper green and wilful shapes of Oribe, the yellow of Ki-Seto and the black of Seto-guro. Today the same valleys make about seven in ten of the Western-style plates and cups made in Japan.",
    ja: "東濃の低い丘陵——多治見・土岐・瑞浪・可児——には、岐阜を日本最大の食器の産地にした粘土が眠っている。その窯は十六世紀後半、桃山の美意識を決定づける茶陶を生んだ。志野の厚い白、織部の銅の緑と奔放な形、黄瀬戸の黄、瀬戸黒の黒である。いま同じ谷は、日本で作られる洋食器のおよそ七割を作っている。",
    zh: "東濃的低矮丘陵——多治見、土岐、瑞浪與可兒——蘊藏著使岐阜成為日本最大餐具產地的黏土。十六世紀後期，這裡的窯場創造出定義桃山審美的茶陶：志野厚重的白、織部的銅綠與奔放造形、黃瀨戶的黃，以及瀨戶黑的黑。如今，同樣的河谷生產日本約七成的西式杯盤。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Left: the four great glazes of Momoyama Mino, schematic swatches. Right: Gifu's share of Japan's shipments of ceramic tableware, the largest of any prefecture in both categories (Gifu Prefecture statistics, 2025).",
        ja:"左：桃山の美濃の四つの代表的な釉（模式的な色見本）。右：日本の陶磁器食器の出荷に占める岐阜県の割合。いずれの分類でも都道府県で最大（岐阜県統計、2025年）。",
        zh:"左：桃山時代美濃四大代表釉色（示意色樣）。右：岐阜縣在日本陶瓷餐具出貨中所占比例，兩個類別皆為全國都道府縣之冠（岐阜縣統計，2025 年）。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Mino glazes and Gifu share of tableware shipments">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"GLAZES AND NUMBERS", ja:"釉と数字", zh:"釉色與數字" }) + '</text>';
        var cups = [
          [{en:"Shino",ja:"志野",zh:"志野"}, "#F6F2EA", "#EEE1DF", {en:"thick white feldspar glaze",ja:"厚い長石釉の白",zh:"厚長石釉之白"}],
          [{en:"Oribe",ja:"織部",zh:"織部"}, "#E0E6DB", "#FBFAF7", {en:"copper green, bold shapes",ja:"銅の緑と奔放な形",zh:"銅綠與奔放造形"}],
          [{en:"Ki-Seto",ja:"黄瀬戸",zh:"黃瀨戶"}, "#EADCC1", "#E0E6DB", {en:"soft yellow ash glaze",ja:"やわらかな黄の灰釉",zh:"柔和的黃色灰釉"}],
          [{en:"Seto-guro",ja:"瀬戸黒",zh:"瀨戶黑"}, "#55504A", "#55504A", {en:"black, pulled hot from the kiln",ja:"焼成中に引き出した黒",zh:"燒成中自窯取出的黑"}]
        ];
        cups.forEach(function (c, i) {
          var x = 40 + (i % 2) * 175, y = 60 + Math.floor(i / 2) * 130;
          s += '<path d="M' + (x + 20) + ' ' + (y + 20) + ' L' + (x + 110) + ' ' + (y + 20) + ' L' + (x + 102) + ' ' + (y + 80) + ' C' + (x + 90) + ' ' + (y + 90) + ' ' + (x + 40) + ' ' + (y + 90) + ' ' + (x + 28) + ' ' + (y + 80) + ' Z" fill="' + c[1] + '" stroke="#201E1B" stroke-width="1.2"/>';
          if (i === 0) s += '<path d="M' + (x + 44) + ' ' + (y + 44) + ' q8 -8 16 0 q8 8 16 0" fill="none" stroke="#7C6B52" stroke-width="1.2"/>';
          if (i === 1) s += '<path d="M' + (x + 20) + ' ' + (y + 20) + ' L' + (x + 70) + ' ' + (y + 20) + ' L' + (x + 60) + ' ' + (y + 88) + ' C' + (x + 44) + ' ' + (y + 90) + ' ' + (x + 34) + ' ' + (y + 86) + ' ' + (x + 28) + ' ' + (y + 80) + ' Z" fill="#7C9A7E" fill-opacity="0.55"/>' +
                           '<path d="M' + (x + 78) + ' ' + (y + 40) + ' l8 12 l8 -12 M' + (x + 80) + ' ' + (y + 60) + ' l12 0" stroke="#55504A" fill="none"/>';
          s += '<text x="' + (x + 128) + '" y="' + (y + 44) + '" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(c[0]) + '</text>';
          s += '<text x="' + (x + 20) + '" y="' + (y + 108) + '" ' + F + ' font-size="9.5" fill="#55504A">' + L(c[3]) + '</text>';
        });
        /* share bars */
        var X0 = 440, W = 280;
        s += '<text x="' + X0 + '" y="70" ' + F + ' font-size="10" fill="#8B857C" letter-spacing="1.4">' + L({en:"GIFU'S SHARE OF JAPAN'S SHIPMENTS",ja:"全国出荷に占める岐阜県の割合",zh:"岐阜占全國出貨比例"}) + '</text>';
        var bars = [[{en:"Western-style tableware",ja:"洋飲食器",zh:"西式餐具"}, 71.1], [{en:"Japanese-style tableware",ja:"和飲食器",zh:"日式餐具"}, 44.8]];
        bars.forEach(function (b, i) {
          var y = 100 + i * 80;
          s += '<text x="' + X0 + '" y="' + y + '" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(b[0]) + '</text>' +
               '<rect x="' + X0 + '" y="' + (y + 10) + '" width="' + W + '" height="24" fill="#F0EDE4" stroke="#CDC6B9"/>' +
               '<rect x="' + X0 + '" y="' + (y + 10) + '" width="' + (W * b[1] / 100).toFixed(1) + '" height="24" fill="#EADCC1" stroke="#7C6B52"/>' +
               '<text x="' + (X0 + W * b[1] / 100 + 8).toFixed(1) + '" y="' + (y + 27) + '" ' + F + ' font-size="11" fill="#201E1B">' + b[1] + '%</text>';
        });
        s += '<text x="' + X0 + '" y="276" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"First among the prefectures in both",ja:"いずれも全国一位",zh:"兩項皆居全國第一"}) + '</text>' +
             '<text x="30" y="318" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Swatches schematic; share figures from Gifu Prefecture, 2025.",ja:"色見本は模式。割合は岐阜県（2025年）による。",zh:"色樣為示意；比例數據出自岐阜縣（2025 年）。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"history",
      title:{ en:"A valley of kilns", ja:"窯の谷", zh:"窯之谷" }, jp:"須恵器 · 灰釉 · 山茶碗 · 大窯 · 登窯",
      body:[
        { t:"p", text:{
          en:"The clays of Tōnō were laid down in ancient lakes, and potters have used them for about thirteen centuries: first for Sue stoneware, then for ash-glazed wares, then for the plain “mountain bowls” of the Middle Ages. From the late fifteenth century larger single-chamber kilns, <em>ōgama</em>, were built on the hillsides, and in them the Mino potters made the tea ceramics of the Momoyama period. Around 1600 the multi-chamber climbing kiln, <em>noborigama</em>, arrived from Karatsu in Kyushu; the earliest in Mino, at Motoyashiki in Toki, is a national historic site. Through the Edo period the valleys made everyday ware for much of eastern Japan, from the nineteenth century porcelain as well, and after 1868 they became an industrial region making tableware for export and for the whole country.",
          ja:"東濃の粘土は太古の湖に積もったもので、陶工はそれを千三百年ほど使ってきた。はじめは須恵器、ついで灰釉陶器、そして中世の素朴な山茶碗である。十五世紀後半からは山腹に大きな単室の大窯が築かれ、そこで美濃の陶工は桃山時代の茶陶を焼いた。1600年ごろには九州の唐津から連房式の登窯が伝わった。美濃で最初のものである土岐の元屋敷の窯は国の史跡である。江戸時代を通じてこの谷は東日本の広い範囲に日用の器を送り、十九世紀からは磁器も作り、1868年以後は輸出と全国に向けて食器を作る工業地帯となった。",
          zh:"東濃的黏土沉積於遠古的湖泊中，陶工使用它們已約一千三百年：先是須惠器，再是灰釉陶，然後是中世素樸的「山茶碗」。十五世紀後期起，山坡上築起大型單室窯「大窯」，美濃陶工在其中燒出桃山時代的茶陶。約 1600 年，多室的登窯從九州唐津傳入；美濃最早的一座——土岐的元屋敷窯——是國家史跡。整個江戶時代，這些河谷為東日本廣大地區供應日常器皿，十九世紀起也燒製瓷器；1868 年以後，則成為為出口與全國市場生產餐具的工業地區。" } }
      ]
    },

    { t:"section", id:"styles",
      title:{ en:"The Momoyama styles", ja:"桃山の様式", zh:"桃山諸樣式" }, jp:"志野 · 織部 · 黄瀬戸 · 瀬戸黒",
      body:[
        { t:"defs", items:[
          { term:{en:"Shino",ja:"志野",zh:"志野"}, jp:"しの", def:{en:"The first white-glazed ware made in Japan: a thick, milky glaze of feldspar, often crawled and pitted, over simple iron-oxide drawings — grasses, a bridge, a crane — that show through as soft red or grey.",ja:"日本で初めて作られた白い釉の焼き物。長石の厚く乳白の釉がしばしば縮れ、ピンホールを見せ、その下の鉄絵——草、橋、鶴——がやわらかな赤や鼠色に透ける。",zh:"日本第一種白釉陶器：厚而乳白的長石釉常有縮釉與針孔，底下以鐵料畫出的簡單圖樣——草、橋、鶴——透出柔和的紅或灰色。"} },
          { term:{en:"Oribe",ja:"織部",zh:"織部"}, jp:"おりべ", def:{en:"Named after the warrior tea master Furuta Oribe (1543/44–1615), who was born in Mino: splashes of copper-green glaze beside painted geometric and textile patterns, on vessels deliberately distorted — squared, lobed, fan-shaped, asymmetric.",ja:"美濃出身の武将茶人・古田織部（1543/44〜1615年）にちなむ。銅緑の釉を掛け分け、その脇に幾何学や染織の文様を描き、器はわざと歪める——角、輪花、扇形、非対称。",zh:"得名於出身美濃的武將茶人古田織部（1543/44–1615）：在刻意變形——方形、瓣形、扇形、不對稱——的器物上，一側潑灑銅綠釉，一側繪上幾何與織物紋樣。"} },
          { term:{en:"Ki-Seto",ja:"黄瀬戸",zh:"黃瀨戶"}, jp:"きぜと", def:{en:"“Yellow Seto”: a soft, matt yellow ash glaze, often with incised plants touched with green copper and brown iron.",ja:"やわらかくつやの少ない黄色の灰釉。しばしば線彫りの草花に銅の緑や鉄の茶を点じる。",zh:"「黃瀨戶」：柔和、光澤低的黃色灰釉，常在刻劃的草花上點染銅綠與鐵褐。"} },
          { term:{en:"Seto-guro",ja:"瀬戸黒",zh:"瀨戶黑"}, jp:"せとぐろ", def:{en:"Tea bowls pulled from the kiln with tongs at full heat and cooled at once, which turns the iron glaze a deep black.",ja:"焼成の最中に窯から鉄鋏で引き出して急に冷まし、鉄釉を深い黒にした茶碗。",zh:"在高溫燒成中以鐵鉗從窯內取出、立即冷卻，使鐵釉轉為深黑的茶碗。"} }
        ] },
        { t:"p", text:{
          en:"For three centuries these wares were thought to come from Seto in Owari. In 1930 the potter Arakawa Toyozō found a shard of Shino with a bamboo-shoot design at an old kiln site at Mutabora in Kani, proving that Shino had been made in Mino; he rebuilt a kiln there and in 1955 became one of the first Living National Treasures, for Shino and Seto-guro. Later holders of the title from Tōnō include Suzuki Osamu for Shino (1994), Katō Takuo for Persian-inspired lustre and three-colour wares (1995) and Katō Kōzō for Seto-guro (2010).",
          ja:"三世紀のあいだ、これらの焼き物は尾張の瀬戸で作られたと考えられていた。1930年、陶芸家の荒川豊蔵は可児の牟田洞の古窯跡で筍の絵のある志野の陶片を見つけ、志野が美濃で焼かれたことを証した。彼はそこに窯を築き直し、1955年、志野と瀬戸黒で最初の人間国宝の一人となった。のちに東濃からは、志野の鈴木藏（1994年）、ペルシアに学んだラスター彩や三彩の加藤卓男（1995年）、瀬戸黒の加藤孝造（2010年）が同じ称号を受けている。",
          zh:"三百年來，人們一直以為這些陶器產自尾張的瀨戶。1930 年，陶藝家荒川豐藏在可兒牟田洞的古窯址發現一片繪有竹筍紋的志野陶片，證明志野是在美濃燒成的；他在當地重築窯場，並於 1955 年以志野與瀨戶黑成為首批人間國寶之一。之後，東濃又有以志野獲認定的鈴木藏（1994 年）、以受波斯啟發的虹彩與三彩陶獲認定的加藤卓男（1995 年），以及以瀨戶黑獲認定的加藤孝造（2010 年）。" } }
      ]
    },

    { t:"section", id:"now",
      title:{ en:"Japan's tableware maker", ja:"日本の食器の産地", zh:"日本的餐具產地" }, jp:"洋飲食器 · タイル · 陶器まつり",
      body:[
        { t:"p", text:{
          en:"Mino ware was designated a national traditional craft in 1978, but most of what the region makes is not traditional at all: it is the plain white plates, bowls and mugs of Japanese homes, restaurants and hotels, and Gifu's share of Japan's shipments — 71.1 per cent for Western-style tableware and 44.8 per cent for Japanese-style — is the largest of any prefecture. Kasahara in Tajimi makes most of Japan's mosaic tiles, celebrated since 2016 in a museum designed by the architect Fujimori Terunobu as a hill of earth. Pottery fairs in the spring draw crowds to Tajimi and Toki, and the International Ceramics Festival Mino, held every few years since 1986, brings ceramic artists from around the world.",
          ja:"美濃焼は1978年に国の伝統的工芸品に指定されたが、地域が作るものの大半はまったく伝統的ではない。日本の家庭や飲食店やホテルの白無地の皿や鉢やマグカップであり、全国の出荷に占める岐阜県の割合——洋飲食器71.1パーセント、和飲食器44.8パーセント——は都道府県で最大である。多治見の笠原は日本のモザイクタイルの大半を作り、2016年からは建築家・藤森照信が土の丘のように設計した博物館がそれを伝えている。春の陶器まつりは多治見や土岐に人を集め、1986年から数年ごとに開かれる国際陶磁器フェスティバル美濃は世界の陶芸家を呼び寄せる。",
          zh:"美濃燒於 1978 年獲指定為國家傳統工藝品，但這個地區生產的大多一點也不傳統：它們是日本家庭、餐廳與飯店裡素白的盤、碗與馬克杯；岐阜在全國出貨中的占比——西式餐具 71.1%、日式餐具 44.8%——是全國都道府縣之冠。多治見的笠原生產日本大部分的馬賽克磁磚，2016 年起由建築師藤森照信設計、宛如一座土丘的博物館展示其歷史。春季的陶器市集吸引人潮湧向多治見與土岐；自 1986 年起每隔數年舉辦的國際陶瓷節美濃，則匯聚世界各地的陶藝家。" } }
      ]
    },

    { t:"related", items:[
      { href:"doburoku.html", why:{ en:"Mino cups for sake.", ja:"酒のための美濃の器。", zh:"盛酒的美濃杯。" } },
      { href:"landform.html", why:{ en:"The ancient lakes that left the clay.", ja:"粘土を残した太古の湖。", zh:"留下黏土的遠古湖泊。" } },
      { href:"people.html", why:{ en:"Furuta Oribe and other Mino figures.", ja:"古田織部と美濃の人々。", zh:"古田織部與其他美濃人物。" } },
      { href:"register.html", why:{ en:"All of Gifu's designated crafts.", ja:"岐阜の指定工芸品のすべて。", zh:"岐阜所有指定工藝品。" } }
    ] }
  ]
};

/* ---- ------------------------------------------ textiles */
GIFU.pages["textiles"] = {
  kicker: { en:"Paper, Clay & Cloth · 03", ja:"紙・土・布 · 03", zh:"紙・土・布 · 03" },
  title:  { en: "Dye & Cloth", ja: "染めと織り", zh: "染與織" },
  jp: "郡上本染 · 藍 · 鯉のぼり · 飛騨さしこ · さるぼぼ · 尾州 · 岐阜アパレル",
  lede: {
    en: "Gifu's cloth runs from the handmade to the industrial. In Gujō-Hachiman a dyehouse still colours carp streamers with indigo and rinses them in the snow-fed river in midwinter; in Hida, women stitched layered cotton for warmth and sewed faceless red dolls as charms; and on the plain, wool mills at Hashima and a post-war garment market beside Gifu station made the prefecture one of the great clothing centres of Japan.",
    ja: "岐阜の布は、手仕事から工業までにわたる。郡上八幡では染物屋がいまも鯉のぼりを藍で染め、真冬の雪解けの川でそれをさらす。飛騨では女たちが暖かさのために木綿を重ねて刺し、顔のない赤い人形をお守りとして縫った。そして平野では、羽島の毛織物工場と、戦後の岐阜駅前の衣料の市が、県を日本有数の衣服の産地にした。",
    zh: "岐阜的布料，從手工一路延伸到工業。在郡上八幡，一家染坊至今仍以藍染染製鯉魚旗，並在隆冬時節於雪水匯成的河中漂洗；在飛驒，婦女們為了保暖把層層棉布縫刺在一起，並縫製沒有臉的紅色娃娃當作護身符；而在平原上，羽島的毛織工廠與戰後岐阜站前的成衣市集，使這個縣成為日本重要的服裝產地之一。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Two Gifu textiles, schematic. Left: a <em>sarubobo</em>, the faceless cloth doll of Hida — red body, black hood and apron, arms and legs spread. Right: a carp streamer of the kind dyed by hand at Gujō-Hachiman, with indigo scales and a black outline; the finished streamers are rinsed in the cold water of the Yoshida river in the coldest weeks of winter.",
        ja:"岐阜の二つの布（模式図）。左：飛騨の顔のない布人形さるぼぼ——赤い体、黒い頭巾と腹掛け、広げた手足。右：郡上八幡で手染めされるような鯉のぼり。藍の鱗と黒い輪郭をもち、染め上がった鯉のぼりは冬の最も寒い時期に吉田川の冷たい水でさらされる。",
        zh:"岐阜的兩種布藝（示意圖）。左：飛驒沒有臉的布娃娃「猴寶寶」（さるぼぼ）——紅色身體、黑色頭巾與肚兜、張開的手腳。右：郡上八幡手工染製的那種鯉魚旗，有藍色魚鱗與黑色輪廓；染好的鯉魚旗會在冬季最寒冷的幾週，於吉田川冰冷的河水中漂洗。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="A sarubobo doll and a carp streamer">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"TWO CLOTHS", ja:"二つの布", zh:"兩種布藝" }) + '</text>';
        /* sarubobo */
        var cx = 170;
        s += '<ellipse cx="' + cx + '" cy="110" rx="34" ry="32" fill="#C9605A" stroke="#201E1B"/>' +
             '<path d="M' + (cx - 38) + ' 104 C' + (cx - 36) + ' 70 ' + (cx + 36) + ' 70 ' + (cx + 38) + ' 104 L' + (cx + 30) + ' 96 C' + (cx + 20) + ' 82 ' + (cx - 20) + ' 82 ' + (cx - 30) + ' 96 Z" fill="#201E1B"/>' +
             '<path d="M' + (cx - 26) + ' 146 L' + (cx - 86) + ' 150 L' + (cx - 84) + ' 166 L' + (cx - 24) + ' 170 Z" fill="#C9605A" stroke="#201E1B"/>' +
             '<path d="M' + (cx + 26) + ' 146 L' + (cx + 86) + ' 150 L' + (cx + 84) + ' 166 L' + (cx + 24) + ' 170 Z" fill="#C9605A" stroke="#201E1B"/>' +
             '<path d="M' + (cx - 30) + ' 142 L' + (cx + 30) + ' 142 L' + (cx + 34) + ' 206 L' + (cx - 34) + ' 206 Z" fill="#C9605A" stroke="#201E1B"/>' +
             '<path d="M' + (cx - 20) + ' 146 L' + (cx + 20) + ' 146 L' + (cx + 16) + ' 196 L' + (cx - 16) + ' 196 Z" fill="#201E1B"/>' +
             '<path d="M' + (cx - 30) + ' 204 L' + (cx - 58) + ' 262 L' + (cx - 38) + ' 266 L' + (cx - 8) + ' 206 Z" fill="#C9605A" stroke="#201E1B"/>' +
             '<path d="M' + (cx + 30) + ' 204 L' + (cx + 58) + ' 262 L' + (cx + 38) + ' 266 L' + (cx + 8) + ' 206 Z" fill="#C9605A" stroke="#201E1B"/>';
        s += '<text x="' + (cx + 70) + '" y="104" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"no face",ja:"顔がない",zh:"沒有臉"}) + '</text><path d="M' + (cx + 66) + ' 100 L' + (cx + 34) + ' 110" stroke="#B4AC9C"/>' +
             '<text x="' + (cx + 70) + '" y="186" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"black apron and hood",ja:"黒い腹掛けと頭巾",zh:"黑色肚兜與頭巾"}) + '</text><path d="M' + (cx + 66) + ' 182 L' + (cx + 18) + ' 176" stroke="#B4AC9C"/>' +
             '<text x="' + cx + '" y="292" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Sarubobo (Hida)",ja:"さるぼぼ（飛騨）",zh:"猴寶寶（飛驒）"}) + '</text>';
        /* koinobori */
        var x0 = 430, y0 = 120;
        s += '<line x1="' + (x0 - 20) + '" y1="60" x2="' + (x0 - 20) + '" y2="270" stroke="#55504A" stroke-width="3"/>' +
             '<path d="M' + x0 + ' ' + (y0 - 30) + ' C' + (x0 + 120) + ' ' + (y0 - 44) + ' ' + (x0 + 220) + ' ' + (y0 - 30) + ' ' + (x0 + 280) + ' ' + (y0 - 10) + ' L' + (x0 + 250) + ' ' + y0 + ' L' + (x0 + 290) + ' ' + (y0 + 20) + ' C' + (x0 + 220) + ' ' + (y0 + 40) + ' ' + (x0 + 120) + ' ' + (y0 + 44) + ' ' + x0 + ' ' + (y0 + 30) + ' Z" fill="#E0E7E9" stroke="#201E1B" stroke-width="1.4"/>';
        for (var r = 0; r < 4; r++) {
          for (var c = 0; c < 7; c++) {
            var sx = x0 + 70 + c * 24, sy = y0 - 22 + r * 14 + (c % 2) * 7;
            s += '<path d="M' + sx + ' ' + sy + ' q10 7 0 14" fill="none" stroke="#3C5A78" stroke-width="1.6"/>';
          }
        }
        s += '<circle cx="' + (x0 + 30) + '" cy="' + y0 + '" r="14" fill="#FBFAF7" stroke="#201E1B" stroke-width="1.4"/><circle cx="' + (x0 + 30) + '" cy="' + y0 + '" r="6" fill="#201E1B"/>' +
             '<path d="M' + x0 + ' ' + (y0 - 30) + ' L' + x0 + ' ' + (y0 + 30) + '" stroke="#201E1B" stroke-width="3"/>' +
             '<text x="' + (x0 + 150) + '" y="' + (y0 + 70) + '" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"indigo scales, black outline",ja:"藍の鱗と黒い輪郭",zh:"藍色魚鱗、黑色輪廓"}) + '</text>';
        /* river */
        s += '<path d="M' + (x0 - 10) + ' 240 C' + (x0 + 80) + ' 230 ' + (x0 + 200) + ' 250 ' + (x0 + 300) + ' 238" fill="none" stroke="#8FA6AE" stroke-width="10" stroke-opacity="0.6"/>' +
             '<text x="' + (x0 + 150) + '" y="272" text-anchor="middle" ' + F + ' font-size="10" font-style="italic" fill="#5E7780">' + L({en:"rinsed in the Yoshida river in midwinter",ja:"真冬の吉田川でさらす",zh:"隆冬於吉田川漂洗"}) + '</text>' +
             '<text x="' + (x0 + 150) + '" y="292" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Carp streamer (Gujō honzome)",ja:"鯉のぼり（郡上本染）",zh:"鯉魚旗（郡上本染）"}) + '</text>' +
             '<text x="30" y="320" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — designs vary; colours indicative.",ja:"模式図——意匠はさまざま。色は目安。",zh:"示意圖——圖案各異；顏色僅供參考。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"gujo",
      title:{ en:"Gujō honzome", ja:"郡上本染", zh:"郡上本染" }, jp:"藍染 · かちん染 · 寒ざらし",
      body:[
        { t:"p", text:{
          en:"In Gujō-Hachiman a family dyehouse has worked for centuries in two old techniques together known as <strong>Gujō honzome</strong>, “true dyeing of Gujō”. One is indigo, fermented in vats and built up in repeated dips from pale blue to near black. The other is <em>kachin-zome</em>, a resist technique in which soybean milk and soot are brushed onto the cloth to give a deep, fast black. The dyehouse is best known for its carp streamers, hung for Children's Day in May, and for <em>noren</em> curtains and banners. In the coldest weeks of January the finished streamers are rinsed in the Yoshida river, a scene that draws photographers every winter. The technique is protected by the prefecture as an intangible cultural property.",
          ja:"郡上八幡では、一軒の染物屋が何世紀にもわたって、あわせて<strong>郡上本染</strong>と呼ばれる二つの古い技を続けてきた。一つは藍染で、甕で発酵させた藍に何度も浸して、淡い水色から黒に近い紺まで重ねていく。もう一つはかちん染で、大豆の汁と墨を布に刷毛で引いて、深く色落ちしない黒を得る防染の技である。この染物屋は、五月の子どもの日に掲げる鯉のぼりと、のれんや幟でよく知られる。一月の最も寒い時期には、染め上がった鯉のぼりを吉田川でさらし、その光景は毎冬写真家を集める。技は県の無形文化財として守られている。",
          zh:"在郡上八幡，一家家族染坊數百年來一直從事兩種合稱<strong>郡上本染</strong>的古老技法。其一是藍染：在甕中發酵的藍液裡反覆浸染，從淺藍一路疊加到近乎黑色的深藍。其二是「褐染」（かちん染）：一種以刷子把豆漿與墨塗在布上、得到深沉而不褪色之黑的防染技法。這家染坊最出名的是五月兒童節懸掛的鯉魚旗，以及門簾（暖簾）與旗幟。一月最寒冷的時節，染好的鯉魚旗會在吉田川中漂洗，這幅景象每年冬天都吸引攝影師前來。這項技法已列為縣的無形文化財加以保護。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Stitching and charms in Hida", ja:"飛騨の刺し子とお守り", zh:"飛驒的刺子繡與護身符" }, jp:"飛騨さしこ · さるぼぼ",
      body:[
        { t:"p", text:{
          en:"In the long Hida winters cotton was precious, and women layered and stitched it with running stitches in white thread on indigo — <strong>sashiko</strong> — to make work clothes warmer and stronger and to make old cloth last. The geometric patterns of Hida sashiko, once practical, are now sewn on bags, cushions and table linen. The best-known Hida textile is a charm: the <strong>sarubobo</strong>, “baby monkey” in the Hida dialect, a small red doll without a face, its arms and legs spread. Grandmothers made them for their granddaughters as charms for a good marriage and an easy birth, and the word <em>saru</em> is also heard as “to go away”, so a sarubobo sends misfortune away. They are now sold in every colour in Takayama, but the red one is the original.",
          ja:"飛騨の長い冬、木綿は貴重であった。女たちは藍の布を重ね、白い糸で運針して刺した——<strong>刺し子</strong>である。仕事着を暖かく丈夫にし、古い布を長持ちさせるためであった。かつて実用であった飛騨さしこの幾何学模様は、いまは袋や座布団やテーブルクロスに刺されている。最もよく知られた飛騨の布ものはお守りである。<strong>さるぼぼ</strong>——飛騨の言葉で「猿の赤ん坊」——は、顔のない小さな赤い人形で、手足を広げている。祖母が孫娘のために、良縁と安産のお守りとして作った。「さる」は「去る」にも通じ、さるぼぼは災いを去らせる。いまは高山であらゆる色のものが売られているが、元は赤である。",
          zh:"在飛驒漫長的冬天，棉布十分珍貴，婦女們把藍布層層疊起，用白線以平針縫刺——即<strong>刺子繡</strong>——讓工作服更保暖、更耐用，也讓舊布用得更久。飛驒刺子繡的幾何圖樣原本是實用的，如今則繡在包袋、坐墊與桌布上。飛驒最知名的布藝卻是一種護身符：<strong>猴寶寶</strong>（さるぼぼ），在飛驒方言中意為「猴子的嬰兒」，是一個沒有臉、張開手腳的紅色小娃娃。祖母們為孫女縫製它，作為良緣與順產的護身符；「猴」（さる）的發音又與「離去」（去る）相同，因此猴寶寶能讓災厄離去。如今高山販售各種顏色的猴寶寶，但最初的是紅色。" } }
      ]
    },

    { t:"note", label:{ en:"Sarubobo today", ja:"いまのさるぼぼ", zh:"今日的猴寶寶" }, text:{
      en:"The traditional sarubobo is red, a colour once believed to keep illness away, and it was made at home for children and for daughters about to marry. Today it comes in many colours, each sold for a different wish, and hangs in every souvenir shop in Takayama — but the faceless red doll is still the one people mean.",
      ja:"昔ながらのさるぼぼは赤い。赤は病を遠ざける色と信じられ、子どもや嫁ぐ娘のために家でつくられた。いまはさまざまな色があり、色ごとに違う願いを託して売られ、高山のどの土産物屋にも吊るされている。それでも人がさるぼぼと言えば、やはり顔のない赤い人形のことである。",
      zh:"傳統的猴寶寶是紅色的——紅色曾被認為能驅離疾病——在家中為孩子與即將出嫁的女兒縫製。如今它有各種顏色，每種顏色寄託不同的心願，掛滿高山每一家紀念品店；但人們說起猴寶寶，指的仍是那個沒有五官的紅娃娃。" } },

    { t:"section", id:"plain",
      title:{ en:"Wool and clothing on the plain", ja:"平野の毛織物と衣料", zh:"平原上的毛織與成衣" }, jp:"尾州 · 羽島 · 岐阜駅前問屋町",
      body:[
        { t:"p", text:{
          en:"The Nōbi plain has woven cloth for centuries. In the twentieth century the area around Ichinomiya in Aichi and Hashima in Gifu, known together as <strong>Bishū</strong>, became Japan's largest centre of wool weaving, and it still supplies fine worsted and woollen cloth to fashion houses in Japan and abroad. In Gifu city another trade grew from nothing after the Second World War: people returning from Manchuria and the cities began selling second-hand and then new clothing from stalls in front of Gifu station. The market became a wholesale district of hundreds of firms, and for several decades Gifu was one of Japan's great ready-to-wear centres, with sewing workshops spread across the prefecture. Much of the sewing has since moved abroad, but the wholesale streets by the station remain.",
          ja:"濃尾平野は何世紀にもわたって布を織ってきた。二十世紀には、愛知県一宮と岐阜県羽島のあたり——あわせて<strong>尾州</strong>と呼ばれる——が日本最大の毛織物の産地となり、いまも国内外のファッションブランドに上質の梳毛・紡毛の生地を供している。岐阜市では第二次世界大戦後、もう一つの商いが無から育った。満州や都市から引き揚げてきた人々が、岐阜駅前の露店で古着を、やがて新しい衣服を売り始めたのである。その市は数百の会社が並ぶ問屋街となり、何十年ものあいだ岐阜は日本有数の既製服の産地であった。縫製の工房は県じゅうに広がっていた。縫製の多くはその後海外へ移ったが、駅前の問屋街はいまも残っている。",
          zh:"濃尾平原織布已有數百年歷史。二十世紀時，愛知縣一宮與岐阜縣羽島一帶——合稱<strong>尾州</strong>——成為日本最大的毛織產地，至今仍為國內外的時裝品牌供應精紡與粗紡的高級毛料。在岐阜市，戰後又有另一門生意從無到有地發展起來：從滿洲與各大城市歸來的人們，開始在岐阜站前的攤位販售舊衣，後來改賣新衣。這個市集發展成擁有數百家公司的批發街區，數十年間，岐阜是日本主要的成衣產地之一，縫製工坊遍布全縣。其後大部分縫製工作移往海外，但站前的批發街至今仍在。" } }
      ]
    },

    { t:"related", items:[
      { href:"towns.html", why:{ en:"Gujō-Hachiman, town of water.", ja:"水の町・郡上八幡。", zh:"水之町郡上八幡。" } },
      { href:"roads.html", why:{ en:"The Hida girls who went to the silk mills.", ja:"製糸工場へ向かった飛騨の娘たち。", zh:"前往製絲工廠的飛驒少女。" } },
      { href:"economy.html", why:{ en:"Gifu's industries in figures.", ja:"数字で見る岐阜の産業。", zh:"數字中的岐阜產業。" } },
      { href:"register.html", why:{ en:"All of Gifu's designated crafts.", ja:"岐阜の指定工芸品のすべて。", zh:"岐阜所有指定工藝品。" } }
    ] }
  ]
};

/* ---- ------------------------------------------ register */
GIFU.pages["register"] = {
  kicker: { en:"Paper, Clay & Cloth · 04", ja:"紙・土・布 · 04", zh:"紙・土・布 · 04" },
  title:  { en: "Crafts at a Glance", ja: "工芸一覧", zh: "工藝一覽" },
  jp: "伝統的工芸品 · 重要無形文化財 · ユネスコ · 地域団体商標 · 日本遺産",
  lede: {
    en: "This page gathers the crafts of this book in one place: where each is made, what official recognition it has, and where to read about it. Six of Gifu's crafts are designated national traditional crafts; others are protected as intangible cultural properties, inscribed by UNESCO, registered as regional brands or recognised in the Japan Heritage stories. Many of the most important — Seki's cutlery, Ōgaki's masu, the guitars of Kani and Sakashita — have no designation at all.",
    ja: "この頁は、本書に出てくる工芸を一か所に集める。それぞれがどこで作られ、どのような公の認定を受け、どこで詳しく読めるか。岐阜の工芸のうち六つは国の伝統的工芸品に指定されている。ほかに、無形文化財として守られるもの、ユネスコに記載されたもの、地域団体商標に登録されたもの、日本遺産の物語に認められたものがある。そして最も重要なもののいくつか——関の刃物、大垣の枡、可児と坂下のギター——には、何の指定もない。",
    zh: "本頁把書中出現的工藝彙整在一起：各自在哪裡製作、獲得了哪些官方認定，以及可在何處詳讀。岐阜有六項工藝獲指定為國家傳統工藝品；其他則有列為無形文化財加以保護的、列入聯合國教科文組織名錄的、登錄為地區團體商標的，以及獲認定為日本遺產故事的。而其中一些最重要的——關的刀具、大垣的枡、可兒與坂下的吉他——卻沒有任何指定。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Where the crafts of Gifu are made, schematic, by the prefecture's five regions. Bold: designated national traditional crafts.",
        ja:"岐阜の工芸はどこで作られているか（模式図）。県の五つの圏域ごとに示す。太字は国の伝統的工芸品。",
        zh:"岐阜工藝的產地（示意圖），依縣內五大圈域劃分。粗體為國家指定傳統工藝品。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 440" role="img" aria-label="Schematic map of where Gifu crafts are made">' +
          '<rect x="0.5" y="0.5" width="759" height="439" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"WHERE THE CRAFTS ARE", ja:"工芸の地図", zh:"工藝地圖" }) + '</text>';
        var regions = [
          [40, 50, 680, 150, "#E0E6DB", {en:"HIDA",ja:"飛騨",zh:"飛驒"}],
          [40, 212, 160, 200, "#F0EDE4", {en:"SEINŌ",ja:"西濃",zh:"西濃"}],
          [206, 212, 150, 200, "#EDE5D2", {en:"GIFU",ja:"岐阜",zh:"岐阜"}],
          [362, 212, 176, 200, "#E7DFD2", {en:"CHŪNŌ",ja:"中濃",zh:"中濃"}],
          [544, 212, 176, 200, "#EEE1DF", {en:"TŌNŌ",ja:"東濃",zh:"東濃"}]
        ];
        regions.forEach(function (r) {
          s += '<rect x="' + r[0] + '" y="' + r[1] + '" width="' + r[2] + '" height="' + r[3] + '" fill="' + r[4] + '" stroke="#CDC6B9"/>' +
               '<text x="' + (r[0] + 10) + '" y="' + (r[1] + 18) + '" ' + F + ' font-size="10.5" fill="#55504A" letter-spacing="1.6" font-weight="600">' + L(r[5]) + '</text>';
        });
        function item(x, y, place, crafts) {
          var out = '<text x="' + x + '" y="' + y + '" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L(place) + '</text>';
          crafts.forEach(function (c, i) {
            out += '<text x="' + x + '" y="' + (y + 15 + i * 14) + '" ' + F + ' font-size="9.5" fill="' + (c[1] ? "#201E1B" : "#55504A") + '"' + (c[1] ? ' font-weight="700"' : '') + '>' + L(c[0]) + '</text>';
          });
          return out;
        }
        s += item(60, 96, {en:"Takayama",ja:"高山",zh:"高山"}, [[{en:"Ichii ittōbori",ja:"一位一刀彫",zh:"一位一刀雕"},1],[{en:"Hida Shunkei",ja:"飛騨春慶",zh:"飛驒春慶"},1],[{en:"Hida furniture",ja:"飛騨の家具",zh:"飛驒家具"},0],[{en:"sarubobo, sashiko",ja:"さるぼぼ・さしこ",zh:"猴寶寶、刺子繡"},0]]);
        s += item(330, 96, {en:"Kashimo & Ura-Kiso",ja:"加子母・裏木曽",zh:"加子母、裏木曾"}, [[{en:"Tōnō hinoki",ja:"東濃ひのき",zh:"東濃檜"},0],[{en:"timber for Ise",ja:"伊勢の御用材",zh:"伊勢御用材"},0]]);
        s += item(540, 96, {en:"Shirakawa-gō",ja:"白川郷",zh:"白川鄉"}, [[{en:"gasshō thatching",ja:"合掌の茅葺き",zh:"合掌茅葺"},0],[{en:"doburoku",ja:"どぶろく",zh:"濁酒"},0]]);
        s += item(56, 258, {en:"Ōgaki",ja:"大垣",zh:"大垣"}, [[{en:"masu",ja:"枡",zh:"枡"},0],[{en:"mizu-manjū",ja:"水まんじゅう",zh:"水饅頭"},0]]);
        s += item(56, 318, {en:"Tarui",ja:"垂井",zh:"垂井"}, [[{en:"Nangū, god of metals",ja:"南宮大社（金属の神）",zh:"南宮大社（金屬之神）"},0]]);
        s += item(220, 258, {en:"Gifu city",ja:"岐阜市",zh:"岐阜市"}, [[{en:"Gifu lanterns",ja:"岐阜提灯",zh:"岐阜燈籠"},1],[{en:"Gifu wagasa",ja:"岐阜和傘",zh:"岐阜和傘"},1],[{en:"uchiwa, apparel",ja:"団扇・アパレル",zh:"團扇、成衣"},0]]);
        s += item(220, 340, {en:"Hashima",ja:"羽島",zh:"羽島"}, [[{en:"Bishū wool",ja:"尾州の毛織物",zh:"尾州毛織"},0]]);
        s += item(376, 258, {en:"Mino",ja:"美濃",zh:"美濃"}, [[{en:"Mino washi",ja:"美濃和紙",zh:"美濃和紙"},1]]);
        s += item(376, 306, {en:"Seki",ja:"関",zh:"關"}, [[{en:"cutlery, swords",ja:"刃物・日本刀",zh:"刀具、日本刀"},0]]);
        s += item(460, 258, {en:"Gujō",ja:"郡上",zh:"郡上"}, [[{en:"honzome",ja:"郡上本染",zh:"郡上本染"},0],[{en:"food replicas",ja:"食品サンプル",zh:"食物模型"},0]]);
        s += item(558, 258, {en:"Tajimi, Toki, Mizunami",ja:"多治見・土岐・瑞浪",zh:"多治見、土岐、瑞浪"}, [[{en:"Mino ware",ja:"美濃焼",zh:"美濃燒"},1],[{en:"mosaic tiles",ja:"モザイクタイル",zh:"馬賽克磁磚"},0]]);
        s += item(558, 330, {en:"Kani, Nakatsugawa",ja:"可児・中津川",zh:"可兒、中津川"}, [[{en:"guitars",ja:"ギター",zh:"吉他"},0],[{en:"kuri-kinton",ja:"栗きんとん",zh:"栗金團"},0]]);
        s += '<text x="30" y="430" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — regions shown as blocks; places approximate.",ja:"模式図——圏域は区画で示し、位置はおおよそ。",zh:"示意圖——圈域以區塊表示，位置為概略。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"national",
      title:{ en:"National traditional crafts", ja:"国の伝統的工芸品", zh:"國家傳統工藝品" }, jp:"経済産業大臣指定",
      body:[
        { t:"p", text:{
          en:"Under a law of 1974, the Minister of Economy, Trade and Industry designates as <em>traditional crafts</em> products made mainly by hand, by techniques and from materials used for at least a century, in a place where a community of makers still works. Gifu has six.",
          ja:"1974年の法律にもとづき、経済産業大臣は、主として手で、百年以上続く技術と原材料によって、作り手の集団がいまも働く土地で作られる品を<em>伝統的工芸品</em>に指定する。岐阜には六つある。",
          zh:"依據 1974 年的一項法律，經濟產業大臣把主要以手工、以沿用至少一百年的技術與材料、在仍有製作者群體持續工作的地方製作的產品，指定為<em>傳統工藝品</em>。岐阜有六項。" } },
        { t:"table",
          cols:[{en:"Craft",ja:"工芸品",zh:"工藝品"},{en:"Where",ja:"産地",zh:"產地"},{en:"Designated",ja:"指定",zh:"指定"},{en:"Page",ja:"頁",zh:"頁面"}],
          rows:[
            [{en:"Hida Shunkei lacquerware",ja:"飛騨春慶",zh:"飛驒春慶"},{en:"Takayama, Hida",ja:"高山市・飛騨市",zh:"高山市、飛驒市"},"1975",{en:"<a href=\"shunkei.html\">Hida Shunkei</a>",ja:"<a href=\"shunkei.html\">飛騨春慶</a>",zh:"<a href=\"shunkei.html\">飛驒春慶</a>"}],
            [{en:"Ichii ittōbori carving",ja:"一位一刀彫",zh:"一位一刀雕"},{en:"Takayama, Hida, Gero",ja:"高山市・飛騨市・下呂市",zh:"高山市、飛驒市、下呂市"},"1975",{en:"<a href=\"shunkei.html\">Hida Shunkei</a>",ja:"<a href=\"shunkei.html\">飛騨春慶</a>",zh:"<a href=\"shunkei.html\">飛驒春慶</a>"}],
            [{en:"Mino ware",ja:"美濃焼",zh:"美濃燒"},{en:"Tajimi, Toki, Mizunami, Kani",ja:"多治見市・土岐市・瑞浪市・可児市",zh:"多治見市、土岐市、瑞浪市、可兒市"},"1978",{en:"<a href=\"minoyaki.html\">Mino Ware</a>",ja:"<a href=\"minoyaki.html\">美濃焼</a>",zh:"<a href=\"minoyaki.html\">美濃燒</a>"}],
            [{en:"Mino washi",ja:"美濃和紙",zh:"美濃和紙"},{en:"Mino",ja:"美濃市",zh:"美濃市"},"1985",{en:"<a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>",ja:"<a href=\"paper.html\">和紙・提灯・和傘</a>",zh:"<a href=\"paper.html\">和紙、燈籠與和傘</a>"}],
            [{en:"Gifu lanterns",ja:"岐阜提灯",zh:"岐阜燈籠"},{en:"Gifu city and around",ja:"岐阜市ほか",zh:"岐阜市等"},"1995",{en:"<a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>",ja:"<a href=\"paper.html\">和紙・提灯・和傘</a>",zh:"<a href=\"paper.html\">和紙、燈籠與和傘</a>"}],
            [{en:"Gifu wagasa umbrellas",ja:"岐阜和傘",zh:"岐阜和傘"},{en:"Gifu city (Kanō)",ja:"岐阜市（加納）",zh:"岐阜市（加納）"},{en:"most recent",ja:"最新",zh:"最新"},{en:"<a href=\"paper.html\">Paper, Lanterns &amp; Umbrellas</a>",ja:"<a href=\"paper.html\">和紙・提灯・和傘</a>",zh:"<a href=\"paper.html\">和紙、燈籠與和傘</a>"}]
          ] }
      ]
    },

    { t:"section", id:"other",
      title:{ en:"Other recognitions", ja:"そのほかの認定", zh:"其他認定" }, jp:"無形文化財 · ユネスコ · 商標 · 日本遺産 · 世界農業遺産",
      body:[
        { t:"table",
          cols:[{en:"What",ja:"対象",zh:"對象"},{en:"Recognition",ja:"認定",zh:"認定"},{en:"Year",ja:"年",zh:"年"}],
          rows:[
            [{en:"Honminoshi paper",ja:"本美濃紙",zh:"本美濃紙"},{en:"Important Intangible Cultural Property; UNESCO (Washi)",ja:"重要無形文化財／ユネスコ無形文化遺産（和紙）",zh:"重要無形文化財／聯合國教科文組織（和紙）"},"1969 · 2014"],
            [{en:"Takayama, Furukawa and Ōgaki float festivals",ja:"高山・古川・大垣の祭り",zh:"高山、古川、大垣祭典"},{en:"UNESCO (Yama, Hoko, Yatai)",ja:"ユネスコ（山・鉾・屋台行事）",zh:"聯合國教科文組織（山、鉾、屋台行事）"},"2016"],
            [{en:"Gujō Odori; Kanzu no Kake-odori",ja:"郡上踊・寒水の掛踊",zh:"郡上舞、寒水掛踊"},{en:"UNESCO (Furyū-odori)",ja:"ユネスコ（風流踊）",zh:"聯合國教科文組織（風流踊）"},"2022"],
            [{en:"Ayu of the Nagara",ja:"清流長良川の鮎",zh:"清流長良川的香魚"},{en:"Globally Important Agricultural Heritage System",ja:"世界農業遺産",zh:"世界農業遺產"},"2015"],
            [{en:"Hida furniture",ja:"飛騨の家具",zh:"飛驒家具"},{en:"Regional collective trademarks",ja:"地域団体商標",zh:"地區團體商標"},"2008"],
            [{en:"The Hida takumi",ja:"飛騨の匠",zh:"飛驒工匠"},{en:"Japan Heritage story",ja:"日本遺産",zh:"日本遺產"},"2016"],
            [{en:"Dōjō Hachiya-gaki",ja:"堂上蜂屋柿",zh:"堂上蜂屋柿"},{en:"Geographical indication (GI)",ja:"地理的表示（GI）",zh:"地理標示（GI）"},{en:"registered",ja:"登録",zh:"已登錄"}]
          ] },
        { t:"note", label:{en:"Without a designation",ja:"指定のないもの",zh:"沒有指定的"}, text:{
          en:"Designations follow history and paperwork, not importance. Seki's cutlery is the largest craft industry in the prefecture, Ōgaki makes most of Japan's masu, and the guitars of Kani and Sakashita are played on stages around the world; none is a designated traditional craft. See <a href=\"makers.html\">A Directory of Makers</a>.",
          ja:"指定は歴史と書類にしたがうもので、重要さにしたがうものではない。関の刃物は県で最大の工芸産業であり、大垣は日本の枡の大半を作り、可児と坂下のギターは世界の舞台で弾かれている。そのどれも伝統的工芸品の指定は受けていない。<a href=\"makers.html\">作り手名鑑</a>を参照。",
          zh:"指定依循的是歷史與文件，而不是重要性。關的刀具是縣內最大的工藝產業，大垣生產日本大部分的枡，可兒與坂下的吉他在世界各地的舞台上演奏；但它們都不是指定傳統工藝品。見<a href=\"makers.html\">製作者名鑑</a>。" } }
      ]
    },

    { t:"section", id:"book",
      title:{ en:"Every craft in this book", ja:"本書の工芸すべて", zh:"書中所有工藝" }, jp:"索引",
      body:[
        { t:"table",
          cols:[{en:"Craft",ja:"工芸",zh:"工藝"},{en:"Where",ja:"産地",zh:"產地"},{en:"Page",ja:"頁",zh:"頁面"}],
          rows:[
            [{en:"Cutlery and kitchen knives",ja:"刃物・包丁",zh:"刀具與菜刀"},{en:"Seki",ja:"関市",zh:"關市"},{en:"<a href=\"cutlery.html\">The Cutlery Industry</a>",ja:"<a href=\"cutlery.html\">刃物産業</a>",zh:"<a href=\"cutlery.html\">刀具產業</a>"}],
            [{en:"Japanese swords and fittings",ja:"日本刀と刀装具",zh:"日本刀與刀裝具"},{en:"Seki",ja:"関市",zh:"關市"},{en:"<a href=\"sword.html\">The Mino Sword</a>",ja:"<a href=\"sword.html\">美濃伝の刀</a>",zh:"<a href=\"sword.html\">美濃傳之刀</a>"}],
            [{en:"Furniture",ja:"家具",zh:"家具"},{en:"Takayama, Hida",ja:"高山市・飛騨市",zh:"高山市、飛驒市"},{en:"<a href=\"furniture.html\">Hida Furniture</a>",ja:"<a href=\"furniture.html\">飛騨の家具</a>",zh:"<a href=\"furniture.html\">飛驒家具</a>"}],
            [{en:"Masu",ja:"枡",zh:"枡"},{en:"Ōgaki",ja:"大垣市",zh:"大垣市"},{en:"<a href=\"masu.html\">The Masu of Ōgaki</a>",ja:"<a href=\"masu.html\">大垣の枡</a>",zh:"<a href=\"masu.html\">大垣的枡</a>"}],
            [{en:"Acoustic guitars",ja:"アコースティックギター",zh:"木吉他"},{en:"Kani; Sakashita, Nakatsugawa",ja:"可児市・中津川市坂下",zh:"可兒市；中津川市坂下"},{en:"<a href=\"sound.html\">Wood &amp; Sound</a>",ja:"<a href=\"sound.html\">木と音</a>",zh:"<a href=\"sound.html\">木與聲音</a>"}],
            [{en:"Gasshō thatching",ja:"合掌造りの茅葺き",zh:"合掌造茅葺"},{en:"Shirakawa village",ja:"白川村",zh:"白川村"},{en:"<a href=\"shirakawago.html\">Shirakawa-gō</a>",ja:"<a href=\"shirakawago.html\">白川郷</a>",zh:"<a href=\"shirakawago.html\">白川鄉</a>"}],
            [{en:"Festival floats and karakuri",ja:"祭り屋台とからくり",zh:"祭典屋台與機關人偶"},{en:"Takayama, Furukawa, Ōgaki",ja:"高山・古川・大垣",zh:"高山、古川、大垣"},{en:"<a href=\"festivals.html\">Festivals & Floats</a>",ja:"<a href=\"festivals.html\">祭りと屋台</a>",zh:"<a href=\"festivals.html\">祭典與屋台</a>"}],
            [{en:"Kabuki costumes and playhouses",ja:"地歌舞伎の衣裳と芝居小屋",zh:"地歌舞伎戲服與戲棚"},{en:"Tōnō, Gero, Kakamigahara",ja:"東濃・下呂・各務原",zh:"東濃、下呂、各務原"},{en:"<a href=\"kabuki.html\">Village Kabuki</a>",ja:"<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>",zh:"<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>"}],
            [{en:"Indigo dyeing; sarubobo",ja:"藍染・さるぼぼ",zh:"藍染；猴寶寶"},{en:"Gujō-Hachiman; Hida",ja:"郡上八幡・飛騨",zh:"郡上八幡；飛驒"},{en:"<a href=\"textiles.html\">Dye & Cloth</a>",ja:"<a href=\"textiles.html\">染めと織り</a>",zh:"<a href=\"textiles.html\">染與織</a>"}],
            [{en:"Food replicas; kanten",ja:"食品サンプル・寒天",zh:"食物模型；寒天"},{en:"Gujō; Yamaoka, Ena",ja:"郡上・恵那市山岡",zh:"郡上；惠那市山岡"},{en:"<a href=\"towns.html\">Old Towns</a> · <a href=\"food.html\">Food</a>",ja:"<a href=\"towns.html\">町並み</a>・<a href=\"food.html\">食</a>",zh:"<a href=\"towns.html\">老街</a>・<a href=\"food.html\">飲食</a>"}],
            [{en:"Sake and doburoku",ja:"酒・どぶろく",zh:"清酒與濁酒"},{en:"Across the prefecture",ja:"県内各地",zh:"全縣各地"},{en:"<a href=\"sake.html\">The Sake of Gifu</a>",ja:"<a href=\"sake.html\">岐阜の酒</a>",zh:"<a href=\"sake.html\">岐阜的酒</a>"}]
          ] }
      ]
    },

    { t:"related", items:[
      { href:"makers.html", why:{ en:"The makers themselves.", ja:"作り手そのもの。", zh:"製作者本身。" } },
      { href:"museums.html", why:{ en:"Where to see the crafts made.", ja:"作るところを見られる場所。", zh:"可觀看製作過程之處。" } },
      { href:"spirit.html", why:{ en:"The crafts as six verbs.", ja:"六つの動詞で読む工芸。", zh:"以六個動詞讀工藝。" } },
      { href:"economy.html", why:{ en:"The crafts as industries.", ja:"産業としての工芸。", zh:"作為產業的工藝。" } }
    ] }
  ]
};
