/* =============================================================
   THE SPIRIT OF GIFU — Sound
   13 pages. Each page is one GIFU.pages["key"] = {…}
   module; the order here is the order of the navigation
   (GIFU.NAV in assets/js/core.js).
   ============================================================= */

/* ---- --------------------------------------------- sound */
GIFU.pages["sound"] = { kicker:{ en:"Sound · 01", ja:"音 · 01", zh:"聲音 · 01" },
  title:{ en:"Wood and Sound", ja:"木と音", zh:"木與聲音" },
  jp:"音速・放射・減衰",
  lede:{
    en:"Tap a board of hinoki and a board of keyaki of the same size and they ring differently: one bright and lingering, the other dull and short. Instrument makers have chosen woods by that sound for thousands of years — kiri for the koto, keyaki for the great drums, spruce for the violin and guitar top, rosewood for the guitar's back. Physics can now explain much of what their ears knew. This page introduces the few properties that decide how wood sounds, compares Gifu's timbers with the classic tonewoods, and surveys the woods of Japan's traditional instruments.",
    ja:"同じ大きさのヒノキの板とケヤキの板を叩くと、響きが違う。一方は明るく尾を引き、もう一方はにぶく短い。楽器のつくり手は何千年もその音で木を選んできた——琴にはキリ、大太鼓にはケヤキ、バイオリンやギターの表板にはスプルース、ギターの裏板にはローズウッド。物理学はいま、彼らの耳が知っていたことの多くを説明できる。この頁は、木の響きを決めるわずかな性質を紹介し、岐阜の木を定番のトーンウッドとくらべ、日本の伝統の楽器の木を見わたす。",
    zh:"敲一敲同樣大小的扁柏板與櫸木板，聲音截然不同：一個明亮而餘音繚繞，另一個沉悶而短促。數千年來，樂器工匠一直依聲音挑選木材——古箏用桐木、大太鼓用櫸木、小提琴與吉他面板用雲杉、吉他背板用玫瑰木。如今物理學已能解釋他們耳朵所知的大部分道理。本頁介紹決定木材聲音的幾項性質，將岐阜木材與經典音木比較，並概覽日本傳統樂器所用的木材。" },
  body:[
    { t:"section",
      id:"physics",
      title:{ en:"Three numbers", ja:"三つの数", zh:"三個數字" },
      jp:"音響特性",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Speed of sound", ja:"音速", zh:"聲速" },
              jp:"c = √(E/ρ)",
              def:{
                en:"Sound travels along the grain of wood at a speed that depends on its stiffness E and density ρ: c = √(E/ρ). In good spruce it is some 5,000–5,800 metres a second, about fifteen times faster than in air; across the grain it is several times slower. Higher speed means the plate's natural frequencies are higher for a given size and thickness.",
                ja:"木の繊維方向を音が伝わる速さは、剛さEと密度ρで決まる。c＝√(E/ρ)。良いスプルースでは毎秒およそ五千〜五千八百メートルで、空気中のおよそ十五倍である。繊維と直角の方向では何分の一にも遅い。音速が高いほど、同じ大きさと厚さの板の固有振動数は高くなる。",
                zh:"聲音沿木材纖維方向傳播的速度取決於剛性 E 與密度 ρ：c＝√(E/ρ)。優質雲杉中約每秒 5,000–5,800 公尺，約為空氣中的十五倍；橫紋方向則慢好幾倍。聲速越高，相同尺寸與厚度之板的固有頻率越高。" } },
            { term:{ en:"Radiation ratio", ja:"放射比", zh:"聲輻射比" },
              jp:"R = c/ρ",
              def:{
                en:"How efficiently a vibrating plate turns its motion into sound in the air is roughly proportional to c/ρ, the speed of sound divided by density. Light, stiff woods — spruce, cedar, kiri, sugi — have high radiation ratios and make loud, responsive soundboards; heavy woods have low ratios and are better at reflecting and sustaining vibration than radiating it.",
                ja:"振動する板がその動きを空気中の音にどれだけ効率よく変えるかは、おおよそc/ρ、音速を密度で割ったものに比例する。軽く剛い木——スプルース、シダー、キリ、スギ——は放射比が高く、よく鳴り反応の良い響板になる。重い木は放射比が低く、振動を放つより反射し保つのに向く。",
                zh:"振動板把運動轉為空氣中聲音的效率，大致與 c/ρ——聲速除以密度——成正比。輕而剛的木材——雲杉、雪松、桐木、柳杉——聲輻射比高，能做成響亮、反應靈敏的響板；重的木材聲輻射比低，較擅長反射並延續振動，而非向外輻射。" } },
            { term:{ en:"Damping", ja:"減衰", zh:"阻尼" },
              jp:"tan δ",
              def:{
                en:"Every material loses a little energy each cycle of vibration as heat. Wood's internal damping (the loss factor, tan δ) is low along the grain in good tonewoods — around 0.006–0.01 — which lets a plate ring on. Damping rises with moisture, which is one reason instruments sound duller in humid weather.",
                ja:"どの材料も振動の一回ごとに少しのエネルギーを熱として失う。良いトーンウッドでは、木の内部の減衰（損失係数tan δ）は繊維方向で低く——およそ〇・〇〇六〜〇・〇一——、板は長く鳴りつづける。減衰は水分とともに大きくなり、湿った天気で楽器がにぶく鳴る理由の一つである。",
                zh:"所有材料在每個振動週期都會以熱的形式損失少許能量。優質音木順紋方向的內部阻尼（損耗因子 tan δ）很低——約 0.006–0.01——讓板材得以持續共鳴。阻尼隨含水率上升而增加，這是樂器在潮濕天氣聲音較悶的原因之一。" } }
          ] },
        { t:"figure",
          caption:{
            en:"Density against radiation ratio (c/ρ) for tonewoods and Gifu timbers, calculated from typical handbook stiffness and density values along the grain. Soundboard woods cluster at upper left; back, side and fingerboard woods at lower right. Approximate: individual boards vary widely.",
            ja:"トーンウッドと岐阜の木の密度と放射比（c/ρ）。繊維方向の剛さと密度のハンドブックの典型値から計算した。響板の木は左上に、裏板・側板・指板の木は右下に集まる。おおよその値で、一枚ごとの差は大きい。",
            zh:"音木與岐阜木材的密度對聲輻射比（c/ρ），依手冊典型順紋剛性與密度計算。響板用材集中在左上，背側板與指板用材在右下。僅為概值：個別板材差異很大。" },
          svg:function(lang, L){ return GIFU.fig.scatter(lang, L, {
            title:{ en:"Which woods radiate sound", ja:"どの木が音を放つか", zh:"哪些木材善於輻射聲音" },
            x0:0.2, x1:1.2, y0:2, y1:16, xs:0.2, ys:2,
            xl:{ en:"Density (g/cm³)", ja:"密度（g/cm³）", zh:"密度（g/cm³）" },
            yl:{ en:"Radiation ratio c/ρ (m⁴ kg⁻¹ s⁻¹)", ja:"放射比 c/ρ（m⁴ kg⁻¹ s⁻¹）", zh:"聲輻射比 c/ρ（m⁴ kg⁻¹ s⁻¹）" },
            pts:[
              { n:{ en:"kiri", ja:"キリ", zh:"桐木" }, x:0.30, y:13.5, f:"#E0E6DB" },
              { n:{ en:"W. red cedar", ja:"シダー", zh:"紅雪松" }, x:0.37, y:12.3, ly:-8, f:"#E0E6DB" },
              { n:{ en:"sugi", ja:"スギ", zh:"柳杉" }, x:0.38, y:11.6, ly:14, f:"#E0E6DB" },
              { n:{ en:"spruce", ja:"スプルース", zh:"雲杉" }, x:0.43, y:11.8, lx:8, ly:-6, f:"#E0E6DB" },
              { n:{ en:"hinoki", ja:"ヒノキ", zh:"扁柏" }, x:0.44, y:10.2, f:"#E0E6DB" },
              { n:{ en:"mahogany", ja:"マホガニー", zh:"桃花心木" }, x:0.55, y:7.8, f:"#EDE5D2" },
              { n:{ en:"maple", ja:"メイプル", zh:"楓木" }, x:0.65, y:6.8, ly:-8, f:"#EDE5D2" },
              { n:{ en:"buna", ja:"ブナ", zh:"山毛櫸" }, x:0.65, y:6.2, lx:-8, ly:8, anchor:"end", f:"#EDE5D2" },
              { n:{ en:"keyaki", ja:"ケヤキ", zh:"櫸木" }, x:0.69, y:5.6, lx:8, ly:8, f:"#EDE5D2" },
              { n:{ en:"rosewood", ja:"ローズウッド", zh:"玫瑰木" }, x:0.85, y:4.4, f:"#EEE1DF" },
              { n:{ en:"ebony", ja:"エボニー", zh:"黑檀" }, x:1.10, y:3.6, lx:-8, anchor:"end", f:"#EEE1DF" }
            ] }); } }
      ] },
    { t:"section",
      id:"traditional",
      title:{ en:"Woods of Japanese instruments", ja:"日本の楽器の木", zh:"日本樂器的木材" },
      jp:"邦楽器",
      body:[
        { t:"table",
          caption:{ en:"Traditional Japanese instruments and their woods", ja:"日本の伝統の楽器とその木", zh:"日本傳統樂器及其木材" },
          cols:[
            { en:"Instrument", ja:"楽器", zh:"樂器" },
            { en:"Main wood", ja:"主な木", zh:"主要木材" },
            { en:"Why", ja:"理由", zh:"原因" }
          ],
          rows:[
            [
              { en:"Koto (13-string zither)", ja:"箏", zh:"箏" },
              { en:"Kiri (paulownia), hollowed from a single log", ja:"キリ。一本の丸太をくりぬく", zh:"桐木，以整根原木挖空" },
              {
                en:"Very light with a high radiation ratio; a loud, warm body",
                ja:"とても軽く放射比が高い。よく鳴る温かな胴",
                zh:"極輕、聲輻射比高；響亮溫暖的琴身" }
            ],
            [
              { en:"Taiko (barrel drum)", ja:"長胴太鼓", zh:"長胴太鼓" },
              { en:"Keyaki, hollowed from a single log", ja:"ケヤキ。一本の丸太をくりぬく", zh:"櫸木，以整根原木挖空" },
              {
                en:"Dense and stiff; reflects the head's energy for a deep, long note",
                ja:"重く剛い。皮のエネルギーを反射し、深く長い音に",
                zh:"密實剛硬；反射鼓皮能量，產生深沉悠長的聲音" }
            ],
            [
              { en:"Shamisen", ja:"三味線", zh:"三味線" },
              {
                en:"Red sandalwood (kōki), shitan or karin (Pterocarpus) for the neck; karin for the body",
                ja:"棹は紅木・紫檀・花梨、胴は花梨など",
                zh:"琴桿用紅木、紫檀或花梨（紫檀屬），琴身用花梨等" },
              { en:"Dense, stable woods that hold tension", ja:"張力に耐える重く安定した木", zh:"能承受張力的緻密穩定木材" }
            ],
            [
              { en:"Biwa (lute)", ja:"琵琶", zh:"琵琶" },
              { en:"Mulberry body, paulownia soundboard", ja:"胴は桑、腹板は桐", zh:"琴身用桑木，面板用桐木" },
              {
                en:"A dense back with a light radiating top — the same principle as the guitar",
                ja:"重い背と軽く鳴る表——ギターと同じ原理",
                zh:"厚重的背板配輕盈的面板——與吉他同理" }
            ],
            [
              { en:"Mokugyo (wooden fish)", ja:"木魚", zh:"木魚" },
              { en:"Camphor, mulberry", ja:"クス、クワ", zh:"樟木、桑木" },
              { en:"A resonant hollow block for chanting", ja:"読経のための響く中空の塊", zh:"誦經用的共鳴中空木塊" }
            ],
            [
              { en:"Hyōshigi (clappers)", ja:"拍子木", zh:"拍子木" },
              { en:"Kashi (evergreen oak), cherry", ja:"カシ、サクラ", zh:"橿木、櫻木" },
              { en:"Very hard wood gives a sharp, carrying crack", ja:"非常に硬い木が鋭く遠くまで届く音を出す", zh:"極硬木材發出清脆而傳得遠的聲響" }
            ]
          ] },
        { t:"p",
          text:{
            en:"The koto and the taiko sit at opposite ends of the chart above. The koto maker wants the lightest possible wood that is still strong enough to carry the strings, and kiri, at about 0.30, is ideal. The taiko maker wants a heavy, rigid shell that stores and reflects the energy of the drum heads, and keyaki — dense, stiff and beautiful — has been the classic choice for the great drums of temples and festivals, including those beaten in Gifu's own festival processions.",
            ja:"箏と太鼓は、上の図の両端にある。箏のつくり手は、弦を支えるだけの強さをもつなかで最も軽い木を求め、およそ〇・三〇のキリが理想である。太鼓のつくり手は、皮のエネルギーをたくわえて反射する重く剛い胴を求め、重く剛く美しいケヤキが、寺や祭りの大太鼓——岐阜の祭りの行列で打たれるものも含め——の定番の選択だった。",
            zh:"箏與太鼓位於上圖兩端。箏師要的是足以承受琴弦、卻盡可能輕的木材，密度約 0.30 的桐木正是理想。太鼓師要的是能儲存並反射鼓皮能量的厚重剛硬鼓身，而緻密、剛硬又美麗的櫸木，一直是寺院與祭典大太鼓——包括岐阜祭典遊行中擊打的大鼓——的經典之選。" } }
      ] },
    { t:"section",
      id:"plates",
      title:{ en:"How a plate rings", ja:"板はどう鳴るか", zh:"板如何共鳴" },
      jp:"固有振動・クラドニ図形",
      body:[
        { t:"p",
          text:{
            en:"A thin wooden plate does not vibrate as a single piece. It has a series of natural modes, each with its own frequency and pattern of lines that stay still (nodes) and areas that move. Sprinkle fine sand or tea leaves on a plate and excite it at one of these frequencies and the sand gathers along the nodal lines — the Chladni patterns that violin and guitar makers use to check the stiffness of a top before it is glued into the instrument. Because wood is some ten to fifteen times stiffer along the grain than across it, the patterns of a spruce top are stretched along its length; the maker's braces and thickness adjustments are ways of reshaping them.",
            ja:"薄い木の板は一つのかたまりとして振動するのではない。一連の固有の振動のかたちがあり、それぞれが自分の振動数と、動かない線（節）と動く部分の模様をもつ。板に細かい砂や茶葉をまき、その振動数の一つで揺すると、砂は節の線に集まる——クラドニ図形であり、バイオリンやギターのつくり手は、表板を楽器に貼る前にその剛さを確かめるのに使う。木は繊維方向に直角方向のおよそ十倍から十五倍剛いので、スプルースの表板の模様は長さの方向に引き伸ばされる。つくり手の力木や厚みの調整は、その模様をつくり直すための手段である。",
            zh:"薄木板並非整片一起振動。它有一系列固有振動模態，各有自己的頻率，以及靜止不動的線（節線）與振動區域所構成的圖樣。在板上撒細沙或茶葉，以其中一個頻率激振，沙粒便會聚集在節線上——這就是克拉德尼圖形，小提琴與吉他工匠在把面板黏進琴身前，用它檢查面板的剛性。由於木材順紋方向比橫紋方向剛約十到十五倍，雲杉面板的圖形會沿長度方向拉長；工匠的音梁與厚度調整，就是重新塑造這些圖形的手段。" } },
        { t:"defs",
          items:[
            { term:{ en:"Tap tuning", ja:"タップトーン", zh:"敲擊調音" },
              jp:"叩いて聴く",
              def:{
                en:"The traditional alternative to measurement: the maker holds a top at a node, taps it with a knuckle, listens to its ring, and thins or re-braces it until it sounds right. Experienced makers can hear differences of stiffness that correspond to fractions of a millimetre of thickness.",
                ja:"測定に代わる伝統の方法。つくり手は表板を節のところでもち、指の関節で叩いて響きを聴き、ちょうどよく鳴るまで薄くしたり力木を直したりする。経験を積んだつくり手は、厚さにして一ミリに満たない差にあたる剛さの違いを聞き分けられる。",
                zh:"傳統上替代量測的方法：工匠在節線處拿著面板，以指節敲擊並聆聽其聲響，再削薄或調整音梁，直到聲音恰到好處。經驗豐富的工匠能聽出相當於零點幾公釐厚度差異的剛性變化。" } },
            { term:{ en:"Ageing and playing in", ja:"経年と弾きこみ", zh:"老化與彈奏養琴" },
              jp:"熱処理",
              def:{
                en:"Many players believe that instruments improve with age and with being played. Laboratory studies have found that the hemicelluloses of old wood slowly change, reducing moisture uptake and damping, but the size of the effect on sound is debated. Some makers now heat-treat (“torrefy”) tops to reproduce the effect of decades of ageing, and a few play music to their finished instruments before they leave the workshop.",
                ja:"多くの弾き手は、楽器は年を経て、弾きこまれてよくなると信じている。実験室の研究は、古い木のヘミセルロースがゆっくり変わり、吸湿と減衰を減らすことを見いだしたが、音への効果の大きさは議論が分かれる。何十年もの経年の効果を再現するため表板に熱処理を施すつくり手もおり、仕上がった楽器に工房を出る前に音楽を聴かせるところもある。",
                zh:"許多演奏者相信樂器會隨年歲與彈奏而變好。實驗研究發現，老木材中的半纖維素會緩慢變化，降低吸濕性與阻尼，但其對聲音影響的程度仍有爭議。有些工匠如今以熱處理（烘焙）面板來重現數十年老化的效果，少數工坊則在成品出廠前讓樂器「聽」音樂。" } },
            { term:{ en:"Humidity", ja:"湿度", zh:"濕度" },
              jp:"含水率と音",
              def:{
                en:"As a top absorbs moisture it becomes heavier, less stiff and more damped, so its response dulls. The effect is noticeable to players across the swing between a Gifu summer and a heated winter. See <a href=\"guitarcare.html\">Caring for a Guitar</a>.",
                ja:"表板が水分を吸うと、重く、剛さが落ち、減衰が大きくなり、反応がにぶる。岐阜の夏と暖房の冬のあいだの振れで、弾き手にもそれがわかる。<a href=\"guitarcare.html\">ギターの手入れ</a>を参照。",
                zh:"面板吸濕後變重、剛性下降、阻尼增大，反應因而變鈍。在岐阜夏季與暖氣冬季之間的濕度擺盪中，演奏者能明顯感覺到。見<a href=\"guitarcare.html\">吉他保養</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"body",
      title:{ en:"An instrument is a system", ja:"楽器は一つの系", zh:"樂器是一個系統" },
      jp:"表板・裏板・空気",
      body:[
        { t:"p",
          text:{
            en:"The wood of a soundboard is only part of the story. In an acoustic guitar the strings drive the bridge; the bridge drives the top; the top drives the air inside the body, which breathes in and out of the soundhole at a low resonance (typically around 100 Hz in a large guitar); and the back, sides and neck vibrate in turn, adding and absorbing energy at their own frequencies. Changing any part changes the whole. This is why a maker's choices — the species of top and back, their thickness, the bracing, the size and shape of the body — must be made together, and why two guitars from the same wood can sound unlike each other.",
            ja:"響板の木は物語の一部にすぎない。アコースティックギターでは、弦が駒を、駒が表板を、表板が胴のなかの空気を動かし、空気は低い共鳴（大きなギターではふつう百ヘルツほど）でサウンドホールから出入りする。裏板、側板、ネックも順に振動し、それぞれの振動数でエネルギーを加えたり吸ったりする。一つを変えれば全体が変わる。だからつくり手の選択——表板と裏板の樹種、その厚さ、力木、胴の大きさと形——はまとめて行わねばならず、同じ木でつくった二本のギターが似ても似つかない音になりうる。",
            zh:"響板木材只是故事的一部分。在木吉他中，琴弦驅動琴橋，琴橋驅動面板，面板驅動琴身內的空氣，空氣以低頻共振（大型吉他通常約 100 Hz）經音孔吞吐；背板、側板與琴頸也依序振動，在各自頻率上增減能量。改變任何一部分，整體都會改變。因此工匠的選擇——面板與背板的樹種、厚度、音梁、琴身大小與形狀——必須一起決定，這也是為何同一批木材做出的兩把吉他聲音可能判若兩者。" } }
      ] },
    { t:"section",
      id:"radiation",
      title:{ en:"How a plate pushes the air", ja:"板はどう空気を押すか", zh:"板如何推動空氣" },
      jp:"放射効率・臨界周波数",
      body:[
        { t:"p",
          text:{
            en:"A string on its own is almost silent. It is so thin that, as it swings, the air simply flows round it from front to back instead of being compressed, and a guitar string held in a rigid frame produces hardly any sound at all. Its energy must be handed to something broad enough to push on the air, and that is the whole purpose of a soundboard. But a plate has the same problem on a larger scale. Where one part of it moves outwards while a neighbouring part moves inwards, air slips sideways from the high-pressure region into the low one and the two cancel — what acousticians call an acoustic short circuit. At low frequencies, therefore, the useful output of a guitar top comes mainly from its net change of volume: the motion in which the whole lower bout breathes in and out together, as a monopole, rather than the modes in which halves or quarters of the top move against one another.",
            ja:"弦だけではほとんど鳴らない。あまりに細いので、揺れても空気は圧縮されずに前から後ろへ回りこむだけで、剛い枠に張ったギターの弦はほとんど音を出さない。そのエネルギーは、空気を押せるほど広いものに渡さねばならず、それこそが響板の役目である。ところが板も、大きな規模で同じ問題を抱える。ある部分が外へ動くとき隣の部分が内へ動くと、空気は圧力の高いところから低いところへ横にすべり、両者は打ち消しあう。音響学者が音響的短絡と呼ぶものである。だから低い周波数では、ギターの表板が役に立つ音を出すのは、おもに体積の正味の変化からである。表板の半分や四分の一どうしが逆に動くモードではなく、胴の下部全体がいっしょに出入りして呼吸する、モノポールの動きである。",
            zh:"琴弦本身幾乎無聲。它細到擺動時空氣只是從前面繞到後面，而不會被壓縮；張在剛性框架上的吉他弦幾乎發不出聲音。它的能量必須交給足以推動空氣的寬大物體，這正是響板存在的全部意義。但板材在更大尺度上也有同樣的問題：某部分向外動、相鄰部分向內動時，空氣會從高壓區橫向滑入低壓區，兩者相互抵消——聲學家稱之為「聲學短路」。因此在低頻時，吉他面板的有效輸出主要來自其體積的淨變化：整個下部琴身一起向外、向內「呼吸」的單極（monopole）運動，而不是面板各半或各四分之一彼此反向運動的模態。" } },
        { t:"p",
          text:{
            en:"The deeper reason lies in how waves travel in a plate. Sound in air moves at about 343 metres a second at 20 °C whatever its pitch, but bending waves in a plate travel faster the higher the frequency. Below the frequency at which the two speeds match — the critical or coincidence frequency — a plate radiates poorly except through its net volume change and its edges; above it, it radiates efficiently. For a 2.5 mm top of Sitka spruce, that crossing lies at roughly 5 kHz along the grain and nearly 19 kHz across it (our calculation from handbook values, shown below). Almost every fundamental a guitar can play, from 82 Hz on the open low E to around 1 kHz high on the fingerboard, therefore lies well below coincidence. In that regime what matters is how much air a top can displace for a given push from the bridge, and that depends on how light it is for its stiffness. This is the origin of the radiation ratio c/ρ introduced in 1963 by the American acoustician John Schelleng, who showed that for plates thinned to the same natural frequencies, the sound radiated rises with the speed of sound divided by density.",
            ja:"より深い理由は、板のなかを波がどう伝わるかにある。空気中の音は高さにかかわらず二十℃で毎秒およそ三百四十三メートルで進むが、板の曲げ波は周波数が高いほど速く進む。二つの速さが一致する周波数——臨界周波数、またはコインシデンス周波数——より下では、板は体積の正味の変化と縁からしかうまく音を放たず、それより上では効率よく放つ。厚さ二・五ミリのシトカスプルースの表板では、その交点は繊維方向でおよそ五キロヘルツ、繊維と直角の方向では十九キロヘルツ近くにある（ハンドブックの値からの本書の計算。下図）。だからギターが弾ける基音のほとんど——開放の低いEの八十二ヘルツから、指板の高いところのおよそ一キロヘルツまで——は、コインシデンスよりずっと下にある。その領域で大事なのは、ブリッジからの一押しで表板がどれだけの空気を押しのけられるかであり、それは剛さのわりにどれだけ軽いかで決まる。これが、一九六三年にアメリカの音響学者ジョン・シェレングが導いた放射比c/ρの由来である。彼は、同じ固有振動数になるよう薄くした板どうしでは、放たれる音は音速を密度で割った値とともに大きくなることを示した。",
            zh:"更深層的原因在於波在板中如何傳播。空氣中的聲音在 20 °C 時無論音高都以每秒約 343 公尺前進，板中的彎曲波則頻率越高跑得越快。在兩種速度相等的頻率——臨界頻率或吻合頻率——以下，板除了靠體積淨變化與邊緣之外，輻射效率很差；在其之上，則能有效輻射。對 2.5 公釐厚的西加雲杉面板而言，這個交點順紋方向約在 5 kHz，橫紋方向則接近 19 kHz（依手冊數值由本書計算，見下圖）。因此吉他所能彈出的幾乎所有基音——從空弦低音 E 的 82 Hz，到指板高把位約 1 kHz——都遠低於吻合頻率。在此範圍內，關鍵在於琴橋每推一下，面板能推開多少空氣，而這取決於它相對剛性有多輕。這正是美國聲學家約翰・謝倫（John Schelleng）於 1963 年提出之聲輻射比 c/ρ 的由來：他證明，對於削薄至相同固有頻率的板，輻射出的聲音隨聲速除以密度之值而增加。" } },
        { t:"figure",
          caption:{
            en:"Speed of bending waves in a 2.5 mm plate of Sitka spruce, along and across the grain, against the speed of sound in air. Where a curve crosses the air line is the plate's critical frequency. Calculated from USDA Wood Handbook values (stiffness along the grain 10.8 GPa, across it 7.8 per cent of that; specific gravity 0.40 at 12 per cent moisture).",
            ja:"厚さ二・五ミリのシトカスプルースの板の、繊維方向と直角方向の曲げ波の速さと、空気中の音速。曲線が空気の線と交わるところが板の臨界周波数である。米国農務省『ウッドハンドブック』の値（繊維方向の剛さ10.8GPa、直角方向はその7.8パーセント、含水率12パーセントで比重0.40）から計算した。",
            zh:"2.5 公釐厚西加雲杉板順紋與橫紋方向的彎曲波速度，對照空氣中的聲速。曲線與空氣線相交處即板的臨界頻率。依美國農業部《木材手冊》數值計算（順紋剛性 10.8 GPa，橫紋為其 7.8%；含水率 12% 時比重 0.40）。" },
          svg:function(lang, L){ return GIFU.fig.lines(lang, L, {
            title:{ en:"When a plate starts to radiate well", ja:"板がよく鳴りはじめるところ", zh:"板開始有效輻射之處" },
            unit:{ en:"Wave speed (m/s); frequency in kHz", ja:"波の速さ（m/s）。周波数はkHz", zh:"波速（m/s）；頻率單位 kHz" },
            x0:0, x1:20, y0:0, y1:700, tick:100, xt:[0,2,4,6,8,10,12,14,16,18,20],
            series:[
              { n:{ en:"Along the grain", ja:"繊維方向", zh:"順紋方向" }, dots:false, pts:[[0,0],[0.1,47],[0.5,106],[1,149],[2,211],[3,258],[4,298],[5,334],[6,365],[8,422],[10,472],[12,517],[14,558],[16,597],[18,633],[20,667]] },
              { n:{ en:"Across the grain", ja:"繊維と直角", zh:"橫紋方向" }, dots:false, dash:"5 4", pts:[[0,0],[0.1,25],[0.5,56],[1,79],[2,112],[3,137],[4,158],[5,176],[6,193],[8,223],[10,249],[12,273],[14,295],[16,315],[18,335],[20,353]] },
              { n:{ en:"Sound in air", ja:"空気中の音", zh:"空氣中的聲音" }, dots:false, dash:"2 3", pts:[[0,343],[20,343]] }
            ],
            marks:[ { x:5.3, t:{ en:"≈ 5.3 kHz", ja:"約5.3kHz", zh:"約 5.3 kHz" } }, { x:18.9, t:{ en:"≈ 18.9 kHz", ja:"約18.9kHz", zh:"約 18.9 kHz" } } ]
          }); } },
        { t:"p",
          text:{
            en:"Direction matters too. At 100 Hz a sound wave in air is about 3.4 metres long, many times larger than a guitar, and the instrument radiates almost equally in every direction. At 1 kHz the wavelength, about 34 cm, is close to the size of the body, and at 3 kHz it is only some 11 cm, so the upper partials leave the top in beams and lobes that change from one position to another. That is why a microphone moved a few centimetres changes the recorded tone, and why players, who sit behind and above the top, hear a noticeably different instrument from the listener in front.",
            ja:"方向も大事である。百ヘルツでは空気中の音波の長さはおよそ三・四メートルで、ギターの何倍も大きく、楽器はほとんどどの方向にも同じように音を放つ。一キロヘルツでは波長はおよそ三十四センチで胴の大きさに近く、三キロヘルツではわずか十一センチほどなので、高い倍音は表板から束や房のかたちで出ていき、場所によって変わる。マイクを数センチ動かすと録れる音色が変わり、表板の後ろ上方に座る弾き手が、前にいる聴き手とははっきり違う楽器を聴いているのはこのためである。",
            zh:"方向也很重要。在 100 Hz 時，空氣中聲波長約 3.4 公尺，比吉他大好幾倍，樂器幾乎向各方向均勻輻射。到 1 kHz，波長約 34 公分，接近琴身尺寸；到 3 kHz 只剩約 11 公分，於是高次泛音以束狀與瓣狀離開面板，隨位置而變。因此麥克風移動幾公分，錄到的音色就會改變；坐在面板後上方的演奏者，聽到的也與前方聽眾明顯不同。" } },
        { t:"defs",
          items:[
            { term:{ en:"Monopole and dipole", ja:"モノポールとダイポール", zh:"單極與偶極" },
              jp:"呼吸と揺れ",
              def:{
                en:"A monopole changes volume, like a breathing sphere, and radiates strongly even at low frequencies. A dipole moves one way on one side and the other way on the other, like a top rocking from side to side, and at low frequencies largely cancels itself. Makers who stiffen a top across its width are in effect choosing which modes will breathe and which will rock.",
                ja:"モノポールは呼吸する球のように体積を変え、低い周波数でも強く音を放つ。ダイポールは、表板が左右に揺れるように、片側が一方へ、反対側が逆へ動き、低い周波数ではおおむね自分で打ち消しあう。表板を幅の方向に剛くするつくり手は、事実上、どのモードを呼吸させ、どれを揺らすかを選んでいるのである。",
                zh:"單極像呼吸的球體一樣改變體積，即使在低頻也能強力輻射。偶極則一側往一方動、另一側往反方向動，像面板左右搖擺，低頻時大多自我抵消。工匠在寬度方向加強面板剛性，實際上就是在選擇哪些模態要「呼吸」、哪些要「搖擺」。" } },
            { term:{ en:"Coupled air and top", ja:"空気と表板の結合", zh:"空氣與面板的耦合" },
              jp:"二つの山",
              def:{
                en:"The air resonance of the body (around 100 Hz in a large guitar) and the lowest breathing mode of the top do not act separately. Coupled through the soundhole, they push each other apart in frequency, so a guitar has a pair of strong low resonances rather than one; the size of the soundhole, the volume of the box and the stiffness of the top all move them.",
                ja:"胴の空気の共鳴（大きなギターではおよそ百ヘルツ）と、表板の最も低い呼吸のモードは別々に働くのではない。サウンドホールを通じて結びつき、たがいに周波数を押し離すので、ギターには強い低い共鳴が一つではなく二つある。サウンドホールの大きさ、箱の容積、表板の剛さが、いずれもそれを動かす。",
                zh:"琴身的空氣共振（大型吉他約 100 Hz）與面板最低的呼吸模態並非各自運作。兩者經由音孔耦合，在頻率上相互推開，因此吉他有一對而非單一的強低頻共振；音孔大小、琴箱容積與面板剛性都會讓它們移動。" } },
            { term:{ en:"Efficiency", ja:"効率", zh:"效率" },
              jp:"減衰との競争",
              def:{
                en:"Every cycle, the energy in the top is either radiated as sound or lost as heat in the wood, the glue and the finish. A light, stiff, low-damping top tips that balance towards sound, which is why the three numbers at the top of this page — speed of sound, radiation ratio and damping — belong together.",
                ja:"振動の一回ごとに、表板のエネルギーは音として放たれるか、木と接着剤と塗膜のなかで熱として失われる。軽く剛く減衰の小さい表板はその釣り合いを音の側に傾ける。この頁の冒頭の三つの数——音速、放射比、減衰——がひと組なのはそのためである。",
                zh:"每個振動週期，面板的能量不是化為聲音輻射出去，就是在木材、膠與漆膜中以熱的形式損失。輕、剛、低阻尼的面板讓天平傾向聲音一側——這就是本頁開頭三個數字：聲速、聲輻射比與阻尼，必須一併考量的原因。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: USDA Forest Products Laboratory, Wood Handbook (FPL-GTR-282), chapter 5 (Sitka spruce stiffness, elastic ratios, specific gravity); Schelleng (1963), Journal of the Acoustical Society of America, on the radiation ratio; Wegst (2006), American Journal of Botany, “Wood for sound”. Critical frequencies and wavelengths calculated.",
            ja:"出典：米国農務省林産物研究所『ウッドハンドブック』（FPL-GTR-282）第五章（シトカスプルースの剛さ、弾性比、比重）、シェレング（一九六三年）Journal of the Acoustical Society of America（放射比）、ウェグスト（二〇〇六年）American Journal of Botany「Wood for sound」。臨界周波数と波長は計算値。",
            zh:"資料來源：美國農業部林產品實驗室《木材手冊》（FPL-GTR-282）第 5 章（西加雲杉剛性、彈性比、比重）；Schelleng（1963 年），Journal of the Acoustical Society of America（聲輻射比）；Wegst（2006 年），American Journal of Botany〈Wood for sound〉。臨界頻率與波長為計算值。" } }
      ] },
    { t:"section",
      id:"halls",
      title:{ en:"Wood in the concert hall", ja:"コンサートホールの木", zh:"音樂廳中的木材" },
      jp:"サントリーホール・サラマンカホール",
      body:[
        { t:"p",
          text:{
            en:"A concert hall is not a guitar, and wood plays a different part in it. In an instrument the wood is meant to vibrate; in a hall the walls are mostly meant not to. Their job is to reflect sound back to the audience, and to scatter it so that it arrives from many directions, and for that a surface must be heavy and rigid enough to stay still. Thick wood fixed solidly to masonry reflects almost as well as plaster. Thin boards fixed over an air gap behave differently: they act as membranes that are set in motion by low notes and soak up their energy, so a hall lined with thin panelling can lose exactly the bass that gives an orchestra its weight. When acousticians specify wood, then, they usually specify it thick, glued or fixed to a dense backing, and shaped to diffuse; the appeal of the material to eye and hand is one reason it is chosen, and its acoustic behaviour is controlled by how it is built in.",
            ja:"コンサートホールはギターではなく、木はそこで違う役を演じる。楽器では木は振動するためにあるが、ホールでは壁はたいてい振動しないためにある。その仕事は音を聴衆に返して反射し、いろいろな方向から届くよう散らすことで、そのために面は動かずにいられるほど重く剛くなければならない。石やコンクリートにしっかり固定した厚い木は、しっくいとほとんど同じほどよく反射する。空気層の上に張った薄い板はふるまいが違う。低い音で揺すられる膜として働き、そのエネルギーを吸いとるので、薄い板張りのホールは、オーケストラに重みを与えるまさにその低音を失いかねない。だから音響設計者が木を指定するときは、ふつう厚く、重い下地に接着または固定し、音を拡散する形にする。目と手に訴える材料であることが選ばれる理由の一つであり、音響上のふるまいは、それをどう納めるかで制御される。",
            zh:"音樂廳不是吉他，木材在其中扮演不同角色。在樂器中，木材是為了振動；在音樂廳中，牆面大多是為了不振動。它們的任務是把聲音反射回聽眾，並加以擴散，讓聲音從許多方向抵達；為此，表面必須夠重、夠剛，才能保持不動。牢固釘在磚石上的厚木板，反射效果幾乎與灰泥一樣好。架在空氣層上的薄板則不同：它們像薄膜般被低音帶動而吸走其能量，因此以薄板裝修的音樂廳，可能恰恰失去賦予管弦樂團厚重感的低音。所以聲學設計師指定木材時，通常要求厚實、黏合或固定在密實的底材上，並做成擴散造型；材料對視覺與觸覺的吸引力是被選用的理由之一，其聲學表現則取決於施作方式。" } },
        { t:"table",
          caption:{
            en:"Wood and other surfaces in halls designed with Japanese acousticians",
            ja:"日本の音響設計者がかかわったホールの木とそのほかの面",
            zh:"日本聲學設計師參與之音樂廳的木材與其他表面" },
          cols:[
            { en:"Hall", ja:"ホール", zh:"音樂廳" },
            { en:"Opened", ja:"開館", zh:"啟用" },
            { en:"Seats", ja:"席数", zh:"座位" },
            { en:"Reverberation", ja:"残響", zh:"殘響" },
            { en:"Surfaces", ja:"内装", zh:"內裝" }
          ],
          numCols:[2],
          rows:[
            [
              { en:"Suntory Hall, Tokyo", ja:"サントリーホール（東京）", zh:"三得利音樂廳（東京）" },
              "1986",
              "2,006",
              { en:"2.1 s, full", ja:"二・一秒（満席）", zh:"2.1 秒（滿座）" },
              {
                en:"Walls of the white oak used for whisky casks; oak floor and seat backs; Japan's first vineyard-style hall",
                ja:"壁はウイスキーの貯蔵樽に使うホワイトオーク、床と椅子の背板はオーク（楢）。日本初のヴィンヤード形式",
                zh:"牆面用威士忌儲酒桶所用的白橡木，地板與椅背用橡木；日本首座葡萄園式音樂廳" }
            ],
            [
              { en:"Salamanca Hall, Gifu", ja:"サラマンカホール（岐阜）", zh:"薩拉曼卡音樂廳（岐阜）" },
              "1994",
              "708",
              { en:"1.8 s full; 2.1 s empty", ja:"一・八秒（満席）、二・一秒（空席）", zh:"1.8 秒（滿座）；2.1 秒（空場）" },
              {
                en:"Oak used generously on stage and in the auditorium",
                ja:"舞台と客席にオーク（楢）をふんだんに使う",
                zh:"舞台與觀眾席大量使用橡木" }
            ],
            [
              { en:"Elbphilharmonie, Hamburg", ja:"エルプフィルハーモニー（ハンブルク）", zh:"易北愛樂廳（漢堡）" },
              "2017",
              "2,100",
              "—",
              {
                en:"Grand Hall walls and ceiling of 10,000 gypsum-fibre panels; Recital Hall panelled in French oak",
                ja:"大ホールの壁と天井は一万枚の石膏繊維のパネル。リサイタルホールはフレンチオークの板張り",
                zh:"大廳牆面與天花板由 1 萬片石膏纖維板構成；獨奏廳以法國橡木鑲板" }
            ]
          ] },
        { t:"p",
          text:{
            en:"Gifu's own concert hall makes the point locally. Salamanca Hall opened in 1994 inside the prefecture's Fureai Kaikan in Gifu city, and is named after Salamanca in Spain's Castilla y León region, with which the prefecture has exchanges. Its 708 seats sit in a room of 10,400 cubic metres finished in oak, and its organ, completed in April 1995 by the organ builder Tsuji Hiroshi, has 46 stops and about 3,000 pipes, including a copy of the restored Renaissance organ of Salamanca Cathedral. The hall's own description dwells on what the wood is there to serve: pianissimos that keep their strength to the corners of the room, and fortissimos that keep their softness.",
            ja:"岐阜のホールが、そのことを身近に示す。サラマンカホールは一九九四年、岐阜市の岐阜県県民ふれあい会館のなかに開館し、岐阜県と交流のあるスペイン・カスティーリャ・イ・レオン州のサラマンカ市にちなんで名づけられた。七百八席は、オーク（楢）で仕上げた容積一万四百立方メートルの室にあり、オルガンビルダー辻宏が一九九五年四月に完成させたパイプオルガンは四十六ストップ、パイプはおよそ三千本で、修復されたサラマンカ大聖堂のルネサンス・オルガンの複製を含む。ホール自身の紹介は、木が何に仕えるためにあるかを語っている。ピアニッシモが力を失わず客席の隅々まで届き、オーケストラのフォルティッシモも柔らかさを失わないことである。",
            zh:"岐阜自己的音樂廳就在地印證了這一點。薩拉曼卡音樂廳於 1994 年在岐阜市的岐阜縣縣民交流會館內啟用，以與岐阜縣有交流的西班牙卡斯提亞－雷昂自治區薩拉曼卡市命名。708 個座位位於以橡木裝修、容積 10,400 立方公尺的廳內；管風琴由管風琴師辻宏於 1995 年 4 月完成，有 46 個音栓、約 3,000 根音管，其中包含修復後的薩拉曼卡大教堂文藝復興管風琴之複製。音樂廳自己的介紹，說明了木材為何而在：極弱音不失力度地傳到觀眾席每個角落，管弦樂團的極強音也不失柔和。" } },
        { t:"h3", text:{ en:"The stage floor", ja:"舞台の床", zh:"舞台地板" }, jp:"束立て床" },
        { t:"p",
          text:{
            en:"One part of a hall is meant to vibrate: the stage. A cello or double bass stands on its endpin and a piano on its three legs, and both pass vibration into the floor beneath them. A wooden floor on joists responds and adds to their sound; a floor laid directly on concrete does not. Nagata Acoustics, the Tokyo firm behind Suntory Hall, described the choice in 2021 for a small music salon, Marie Concerto, completed that April: wooden posts stood on the concrete slab, with bearers and joists on top and the floorboards over them, a construction chosen, in the firm's words, to improve the “ring” of instruments such as cello, double bass and piano that transmit vibration to the floor. The Noh stage, a hinoki floor over a hollow space, is the older Japanese version of the same idea; see <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>.",
            ja:"ホールのなかで振動するためにある部分が一つある。舞台である。チェロやコントラバスはエンドピンで、ピアノは三本の脚で立ち、どちらも振動を下の床に伝える。根太の上の木の床はそれに応えて音に加わるが、コンクリートにじかに張った床はそうならない。サントリーホールを手がけた東京の永田音響設計は、二〇二一年、その四月に完成した小さな音楽サロン「マリーコンチェルト」でこの選択を説明した。コンクリートスラブの上に木の束を立て、その上に大引きと根太を組み、床材を張る。チェロやコントラバス、ピアノのように床に振動が伝わる楽器の「鳴り」をよくするための仕様だという。空洞の上に張ったヒノキの床である能舞台は、同じ考えの、より古い日本の形である。<a href=\"japanesewoods.html\">和の木と和の楽器</a>を参照。",
            zh:"音樂廳中有一個部分是為了振動而存在：舞台。大提琴或低音提琴以尾柱立地，鋼琴以三支腳立地，都會把振動傳入下方地板。擱柵上的木地板會回應並增添其聲音；直接鋪在混凝土上的地板則不會。設計三得利音樂廳聲學的東京永田音響設計，2021 年曾就當年 4 月完工的小型音樂沙龍 Marie Concerto 說明這項選擇：在混凝土樓板上立木束，其上架大引與擱柵，再鋪地板——用該公司的話說，是為了讓大提琴、低音提琴與鋼琴這類會把振動傳到地板的樂器「鳴響」更好。架在中空空間上的扁柏地板——能舞台——則是同一想法更古老的日本版本；見<a href=\"japanesewoods.html\">日本之木與日本樂器</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Suntory Hall, “Guide to the halls and facilities” (materials, seats) and “Outline of the facility” (opening, acoustic design); Nagata Acoustics, project page for Suntory Hall (volume, reverberation) and its newsletter News 21-08 (2021) on the Marie Concerto stage floor; Salamanca Hall, “Outline of Salamanca Hall” (seats, oak, organ); Japanese Wikipedia, “Salamanca Hall” (volume, reverberation, organ builder); Elbphilharmonie Hamburg, “The halls”.",
            ja:"出典：サントリーホール「ホール・施設のご案内」「施設概要」、永田音響設計のプロジェクト頁（サントリーホール）とNews 21-08（二〇二一年）、サラマンカホール「サラマンカホール概要」、日本語版ウィキペディア「サラマンカホール」、エルプフィルハーモニー「The halls」。",
            zh:"資料來源：三得利音樂廳〈ホール・施設のご案内〉〈施設概要〉；永田音響設計專案頁（三得利音樂廳）與 News 21-08（2021 年）；薩拉曼卡音樂廳〈サラマンカホール概要〉；日文維基百科〈サラマンカホール〉；Elbphilharmonie〈The halls〉。" } }
      ] },
    { t:"section",
      id:"warmth",
      title:{ en:"Why wooden rooms sound warm", ja:"木の部屋はなぜ温かく響くのか", zh:"木造房間為何聽來溫暖" },
      jp:"吸音と拡散",
      body:[
        { t:"p",
          text:{
            en:"“Warm” is a word acousticians use with some precision. The American acoustician Leo Beranek, whose surveys of the world's concert halls shaped the field, tied warmth to the strength of the bass relative to the middle range — in practice, to how long low notes reverberate compared with middle ones. By that measure thin wooden panelling makes a large hall less warm, not more, because it absorbs bass. The chart shows why: a 9 mm plywood panel over a 90 mm air space absorbs about a quarter of the sound energy that strikes it at 125 Hz, against about one per cent for painted concrete, while carpet does almost the reverse, absorbing little bass and nearly half the energy at 4 kHz.",
            ja:"「温かい」は、音響学者がある程度厳密に使うことばである。世界のコンサートホールの調査でこの分野を形づくったアメリカの音響学者レオ・ベラネクは、温かさを中音域にくらべた低音の強さ——実際には、低い音が中ほどの音にくらべてどれだけ長く残響するか——に結びつけた。その尺度でいえば、薄い木の板張りは大きなホールを温かくするのではなく、低音を吸うのでむしろ冷たくする。図がその理由を示す。空気層九十ミリの上に張った厚さ九ミリの合板は、百二十五ヘルツで当たった音のエネルギーのおよそ四分の一を吸うが、塗装したコンクリートはおよそ百分の一である。カーペットはほぼ逆で、低音はあまり吸わず、四キロヘルツではエネルギーの半分近くを吸う。",
            zh:"「溫暖」是聲學家用得相當精確的詞。以調查世界各地音樂廳而奠定此領域的美國聲學家李奧・白瑞納克（Leo Beranek），把溫暖感與低音相對於中音域的強度連結——實際上就是低音相較中音的殘響時間長短。依此標準，薄木鑲板反而會讓大型音樂廳變得不那麼溫暖，因為它吸收低音。圖表說明了原因：架在 90 公釐空氣層上的 9 公釐合板，在 125 Hz 約吸收四分之一的入射聲能，塗裝混凝土約僅百分之一；地毯則幾乎相反，低音吸收很少，在 4 kHz 卻吸收近一半能量。" } },
        { t:"figure",
          caption:{
            en:"Sound absorption coefficients of some common surfaces by frequency band (0 = reflects everything, 1 = absorbs everything). Typical published values: plywood and painted concrete as tabulated from Japanese architectural data; wood floor on joists and carpet from a commercial acoustics chart. Real values depend on mounting.",
            ja:"いくつかのふつうの面の、周波数帯ごとの吸音率（0はすべて反射、1はすべて吸収）。公表された典型値で、合板と塗装したコンクリートは日本の建築資料からまとめられた表、根太の上の木の床とカーペットは音響会社の表による。実際の値は施工で変わる。",
            zh:"幾種常見表面依頻帶的吸音率（0＝全部反射，1＝全部吸收）。為已公開之典型值：合板與塗裝混凝土取自日本建築資料整理的表格，擱柵上的木地板與地毯取自聲學公司的圖表。實際數值依施工方式而異。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 310" role="img">';
            s += F.text(20, 28, lang==="en"?"WHAT SURFACES ABSORB":(lang==="ja"?"面は何を吸うか":"表面吸收了什麼"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            var left=64, top=60, pw=440, ch=190, base=top+ch, y1=0.5, i, j;
            function X(k){ return left+20+k*(pw-40)/5; }
            function Y(v){ return base - v/y1*ch; }
            s += F.text(left, top-14, lang==="en"?"Absorption coefficient":(lang==="ja"?"吸音率":"吸音率"), { size:10, fill:"#55504A" });
            for (var g=0; g<=0.5001; g+=0.1){ s += '<line x1="'+left+'" y1="'+Y(g).toFixed(1)+'" x2="'+(left+pw)+'" y2="'+Y(g).toFixed(1)+'" stroke="#E1DCD2"/>' + F.text(left-8, Y(g)+4, g.toFixed(1), { size:10, fill:"#55504A", anchor:"end" }); }
            s += '<line x1="'+left+'" y1="'+base+'" x2="'+(left+pw)+'" y2="'+base+'" stroke="#B4AC9C"/>';
            var bands = ["125","250","500","1k","2k","4k"];
            for (i=0;i<6;i++) s += F.text(X(i), base+16, bands[i], { size:10, fill:"#55504A", anchor:"middle" });
            s += F.text(left+pw, base+32, "Hz", { size:10, fill:"#55504A", anchor:"end" });
            var S = [
              { n:{ en:"Plywood 9 mm, 90 mm air space", ja:"合板9mm・空気層90mm", zh:"合板 9 mm＋空氣層 90 mm" }, v:[0.24,0.15,0.08,0.07,0.07,0.08], c:"#7C6B52" },
              { n:{ en:"Plywood 9 mm, 45 mm air space", ja:"合板9mm・空気層45mm", zh:"合板 9 mm＋空氣層 45 mm" }, v:[0.11,0.23,0.09,0.07,0.07,0.06], c:"#A08F73", d:"5 4" },
              { n:{ en:"Wood floor on joists", ja:"根太の上の木の床", zh:"擱柵上的木地板" }, v:[0.15,0.11,0.10,0.07,0.06,0.07], c:"#55504A", d:"2 3" },
              { n:{ en:"Carpet", ja:"カーペット", zh:"地毯" }, v:[0.01,0.02,0.06,0.15,0.25,0.45], c:"#8B857C" },
              { n:{ en:"Painted concrete", ja:"塗装したコンクリート", zh:"塗裝混凝土" }, v:[0.01,0.01,0.02,0.02,0.03,0.03], c:"#B4AC9C", d:"7 3 2 3" }
            ];
            for (i=0;i<S.length;i++){
              var d='', se=S[i];
              for (j=0;j<6;j++) d += (j?'L':'M')+X(j).toFixed(1)+' '+Y(se.v[j]).toFixed(1);
              s += '<path d="'+d+'" fill="none" stroke="'+se.c+'" stroke-width="1.8"'+(se.d?' stroke-dasharray="'+se.d+'"':'')+'/>';
              for (j=0;j<6;j++) s += '<circle cx="'+X(j).toFixed(1)+'" cy="'+Y(se.v[j]).toFixed(1)+'" r="2.6" fill="#FBFAF7" stroke="'+se.c+'"/>';
              var ly = top+6+i*38;
              s += '<line x1="'+(left+pw+24)+'" y1="'+ly+'" x2="'+(left+pw+48)+'" y2="'+ly+'" stroke="'+se.c+'" stroke-width="1.8"'+(se.d?' stroke-dasharray="'+se.d+'"':'')+'/>';
              s += F.text(left+pw+56, ly+4, L(se.n), { size:10.5, fill:"#201E1B", max:30, lh:13 });
            }
            return s + '</svg>';
          } },
        { t:"p",
          text:{
            en:"Why, then, do people so often describe wooden rooms as warm? In the small rooms of a house the problem is usually the opposite of a hall's. A small room built of hard, flat, parallel surfaces — concrete, plaster, glass — has strong low-frequency resonances that make some bass notes boom, and lets higher sounds bounce back and forth as flutter echoes. Wooden floors on joists and boarded walls take a little of the excess bass out of such a room, and the joints, grain and irregularities of wooden surfaces break up reflections instead of returning them intact. The result is a sound that is lively but not harsh. Add tatami, fusuma and shōji, whose soft and permeable surfaces are described on <a href=\"home.html\">Wood in the Home</a>, and the traditional Japanese room becomes one of the gentlest acoustic spaces there is. Some of the warmth people hear is probably also seen and felt: sight and touch colour the judgement of the ear, which is why the listening tests described on <a href=\"listening.html\">Can You Hear the Wood?</a> go to such lengths to blindfold their subjects.",
            ja:"では、人はなぜ木の部屋をしばしば温かいと言うのか。家の小さな部屋では、問題はたいていホールの逆である。コンクリート、しっくい、ガラスのような硬く平らで平行な面でできた小さな部屋は、低い周波数の強い共鳴をもち、ある低音を響かせすぎ、高い音を鳴き竜のように行き来させる。根太の上の木の床や板張りの壁は、そうした部屋から余分な低音を少しとり、木の面の目地や木目や凹凸は反射をそのまま返さずに崩す。その結果、生き生きとしていながら耳ざわりでない音になる。柔らかく音を通す畳、襖、障子を加えれば——その働きは<a href=\"home.html\">住まいと木</a>に述べた——伝統の日本の部屋は、最もおだやかな音の空間の一つとなる。人の聴く温かさの一部は、おそらく目と手でも感じとられている。視覚と触覚は耳の判断を色づける。<a href=\"listening.html\">木は聴こえるか</a>で紹介した聴きくらべの実験が、被験者にあれほど念入りに目隠しをするのはそのためである。",
            zh:"那麼，人們為何常說木造房間聽來溫暖？在住宅的小房間裡，問題通常與音樂廳相反。以混凝土、灰泥、玻璃等堅硬、平坦、平行的表面圍成的小房間，有強烈的低頻共振，使某些低音轟鳴，高音則來回彈跳形成顫動回聲。擱柵上的木地板與木板牆，能從這類房間中吸走一些多餘的低音，而木質表面的接縫、紋理與凹凸會把反射打散，而非原封不動地送回。結果是一種活潑卻不刺耳的聲音。再加上柔軟而透音的榻榻米、襖與障子——其作用見<a href=\"home.html\">居家與木</a>——傳統日式房間便成為最溫和的聲學空間之一。人們聽到的溫暖，或許也有一部分是看見與觸摸到的：視覺與觸覺會影響耳朵的判斷，這也是<a href=\"listening.html\">聽得見木頭嗎</a>所介紹的聆聽實驗，要如此費心蒙住受試者眼睛的原因。" } },
        { t:"tiny",
          text:{
            en:"Sources: environmental-engineering.work, “Sound absorption coefficients of building materials” (plywood, painted concrete; Japanese architectural data); Commercial Acoustics, “Sound absorption coefficient chart” (wood floor on joists, carpet).",
            ja:"出典：environmental-engineering.work「建築材料の吸音率・吸音力まとめ」（合板、塗装したコンクリート。日本の建築資料による）、Commercial Acoustics「Sound absorption coefficient chart」（根太の上の木の床、カーペット）。",
            zh:"資料來源：environmental-engineering.work〈建築材料の吸音率・吸音力まとめ〉（合板、塗裝混凝土；依日本建築資料）；Commercial Acoustics〈Sound absorption coefficient chart〉（擱柵上的木地板、地毯）。" } }
      ] },
    { t:"section",
      id:"japanresearch",
      title:{ en:"Wood acoustics in Japan", ja:"日本の木の音響研究", zh:"日本的木材聲學研究" },
      jp:"研究の系譜",
      body:[
        { t:"p",
          text:{
            en:"Japanese scientists have been among the most systematic students of wood as an acoustic material. In 1983 Ono Teruaki and Norimoto Misato published a study of the Young's modulus and internal friction of wood in relation to the evaluation of woods for musical instruments, which became one of the standard references for the observation that, across many species, the woods that are stiffest for their weight also tend to lose least energy to internal friction — and that soundboard spruces stand at the favourable end of that trend. Ten years later Yano Hiroyuki and Minato Kazuya showed that the trend could be engineered. Impregnating Sitka spruce with saligenin and reacting it with formaldehyde gas raised its specific stiffness across the grain by up to 27 per cent and cut its loss tangent by about 40 per cent along the grain and 50 per cent across it; the sound radiated by an instrument made of such wood, they concluded, would change in its upper frequencies according to the treatment. Ono's group at Gifu University later made synthetic substitutes for spruce; that work, the Tsukuba laboratory of Obataya Eiichi, and Yamaha's heat-and-humidity ageing process are described on <a href=\"listening.html\">Can You Hear the Wood?</a> and <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>.",
            ja:"日本の科学者は、音響材料としての木を最も体系的に調べてきた人々に数えられる。一九八三年、小野晃明と則元京は、楽器用材の評価に関連して木材のヤング率と内部摩擦を調べた研究を発表した。それは、多くの樹種にわたって、重さのわりに最も剛い木は内部摩擦で失うエネルギーも最も小さい傾向にあり、響板のスプルースはその傾向の有利な端にある、という観察の定番の参照文献の一つとなった。十年後、矢野浩之と湊和也は、その傾向を人の手で動かせることを示した。シトカスプルースにサリゲニンをしみこませ、ホルムアルデヒドのガスと反応させると、繊維と直角の方向の比ヤング率は最大で二十七パーセント上がり、損失正接は繊維方向でおよそ四十パーセント、直角方向でおよそ五十パーセント下がった。そうした木でつくった楽器の放つ音は、処理に応じて高い周波数で変わるだろう、と彼らは結論した。岐阜大学の小野のグループは、のちにスプルースの合成の代替材をつくった。その研究と、筑波大学の小幡谷英一の研究室、ヤマハの熱と湿度による熟成処理については、<a href=\"listening.html\">木は聴こえるか</a>と<a href=\"japanesewoods.html\">和の木と和の楽器</a>に述べた。",
            zh:"日本科學家是把木材當作聲學材料研究得最有系統的群體之一。1983 年，小野晃明與則元京發表了一項就樂器用材評估探討木材楊氏模數與內摩擦的研究，成為下述觀察的經典參考文獻之一：在眾多樹種中，相對重量最剛的木材，因內摩擦損失的能量也往往最少，而響板用雲杉正位於這一趨勢的有利端。十年後，矢野浩之與湊和也證明這個趨勢可以人為改變：以水楊醇（saligenin）浸漬西加雲杉，再使之與甲醛氣體反應，橫紋方向的比楊氏模數最多提高 27%，損耗正切則在順紋方向降低約 40%、橫紋方向降低約 50%；他們的結論是，以這種木材製作之樂器所輻射的聲音，其高頻會隨處理程度而改變。岐阜大學的小野團隊後來製作了雲杉的合成替代材料；這項研究、筑波大學小幡谷英一的研究室，以及 Yamaha 以熱與濕度熟成木材的處理，見<a href=\"listening.html\">聽得見木頭嗎</a>與<a href=\"japanesewoods.html\">日本之木與日本樂器</a>。" } },
        { t:"p",
          text:{
            en:"Japan has also exported a school of room acoustics. Suntory Hall's acoustics were designed by Nagata Minoru of Nagata Acoustics, and one of the firm's engineers, Toyota Yasuhisa — born in Fukuyama in 1952, a student of the acoustic design department of the Kyushu Institute of Design from 1972 and a member of the firm from 1977 — went on to design the acoustics of the Walt Disney Concert Hall in Los Angeles (2003), Muza Kawasaki Symphony Hall (2004), the Philharmonie de Paris (2015) and the Elbphilharmonie in Hamburg (2017). The last makes an instructive coda to the story of wood and sound. Its Grand Hall, one of the most celebrated rooms of the century, is lined not with timber but with some 10,000 gypsum-fibre panels, each shaped to scatter sound, while its smaller Recital Hall is panelled in French oak. In a hall, as in a guitar, what decides the sound is less the name of the material than its mass, stiffness, shape and the way it is fixed — the same few numbers with which this page began.",
            ja:"日本は室内音響の一つの流れも世界に送り出してきた。サントリーホールの音響は永田音響設計の永田穂が設計し、同社の技術者の一人、豊田泰久——一九五二年福山生まれ、一九七二年に九州芸術工科大学の音響設計学科に入り、一九七七年に同社に入った——は、のちにロサンゼルスのウォルト・ディズニー・コンサートホール（二〇〇三年）、ミューザ川崎シンフォニーホール（二〇〇四年）、フィルハーモニー・ド・パリ（二〇一五年）、ハンブルクのエルプフィルハーモニー（二〇一七年）の音響を設計した。最後のものは、木と音の物語にとって示唆に富む結びとなる。今世紀で最も名高い部屋の一つであるその大ホールは、木ではなく、音を散らすようそれぞれ形づくられたおよそ一万枚の石膏繊維のパネルで覆われ、一方、小さなリサイタルホールはフレンチオークで板張りされている。ホールでもギターでも、音を決めるのは材料の名前よりも、その質量、剛さ、形、そして固定のしかたである。この頁のはじめの、わずかないくつかの数である。",
            zh:"日本也向世界輸出了一個室內聲學流派。三得利音樂廳的聲學由永田音響設計的永田穗設計；該公司工程師之一豐田泰久——1952 年生於福山，1972 年進入九州藝術工科大學音響設計學系，1977 年加入該公司——後來設計了洛杉磯華特迪士尼音樂廳（2003 年）、MUZA 川崎交響音樂廳（2004 年）、巴黎愛樂廳（2015 年）與漢堡易北愛樂廳（2017 年）的聲學。最後一座為木與聲音的故事提供了發人深省的結語：其大廳是本世紀最負盛名的空間之一，覆蓋的不是木材，而是約 1 萬片各自塑形以擴散聲音的石膏纖維板；較小的獨奏廳則以法國橡木鑲板。音樂廳與吉他一樣，決定聲音的與其說是材料的名稱，不如說是其質量、剛性、形狀與固定方式——也就是本頁開頭那幾個數字。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ono & Norimoto (1983), Japanese Journal of Applied Physics; Yano & Minato (1993), Wood Science and Technology 27(4); Suntory Hall, outline (acoustic design); Japanese Wikipedia, “Toyota Yasuhisa”; Nagata Acoustics, project pages; Elbphilharmonie, “The halls”.",
            ja:"出典：小野・則元（一九八三年）Japanese Journal of Applied Physics、矢野・湊（一九九三年）Wood Science and Technology 二十七巻四号、サントリーホール「施設概要」（音響設計）、日本語版ウィキペディア「豊田泰久」、永田音響設計のプロジェクト頁、エルプフィルハーモニー「The halls」。",
            zh:"資料來源：小野與則元（1983 年），Japanese Journal of Applied Physics；矢野與湊（1993 年），Wood Science and Technology 第 27 卷第 4 期；三得利音樂廳〈施設概要〉（聲學設計）；日文維基百科〈豊田泰久〉；永田音響設計專案頁；Elbphilharmonie〈The halls〉。" } }
      ] },
    { t:"related",
      items:[
        { href:"tonewoods.html", why:{ en:"Guitar woods in detail.", ja:"ギターの木を詳しく。", zh:"吉他木材詳述。" } },
        { href:"properties.html", why:{ en:"Stiffness and density explained.", ja:"剛さと密度の説明。", zh:"剛性與密度說明。" } },
        { href:"grading.html",
          why:{ en:"The same tap tone used to grade timber.", ja:"材の格付けに使う同じ打音。", zh:"木材分級也用同樣的敲擊聲。" } },
        { href:"listening.html", why:{ en:"How to listen to a guitar.", ja:"ギターの聴き方。", zh:"如何聆聽吉他。" } }
      ] }
  ] };

/* ---- ----------------------------------------- tonewoods */
GIFU.pages["tonewoods"] = { kicker:{ en:"Sound · 02", ja:"音 · 02", zh:"聲音 · 02" },
  title:{ en:"Tonewoods", ja:"トーンウッド", zh:"音木" },
  jp:"表板・裏板・ネック・指板",
  lede:{
    en:"A steel-string acoustic guitar is built from four or five different woods, each chosen for a different job: a light, stiff softwood for the top that makes the sound; denser hardwoods for the back and sides that shape it; a stable, strong wood for the neck; and a very hard, dense wood for the fingerboard and bridge. Most of the classic tonewoods come from far away — spruce from Alaska and the Alps, rosewood from India, mahogany from Central America and Africa, ebony from Africa and Asia. This page explains what each part asks of its wood, how the classic choices compare, and how tonewood is selected and graded.",
    ja:"スチール弦のアコースティックギターは四つか五つの違う木でつくられ、それぞれ違う役目のために選ばれる。音を生む表板には軽く剛い針葉樹、それを形づくる裏板と側板には重めの広葉樹、ネックには安定して強い木、指板と駒にはとても硬く重い木。定番のトーンウッドの多くは遠くから来る——アラスカやアルプスのスプルース、インドのローズウッド、中米やアフリカのマホガニー、アフリカやアジアのエボニー。この頁は、それぞれの部分が木に何を求めるか、定番の選択がどう比べられるか、そしてトーンウッドがどう選ばれ格付けされるかを説明する。",
    zh:"一把鋼弦木吉他由四、五種不同木材構成，各司其職：發聲的面板用輕而剛的針葉材；塑造聲音的背側板用較密的闊葉材；琴頸用穩定而強韌的木材；指板與琴橋用極硬極密的木材。經典音木大多來自遠方——阿拉斯加與阿爾卑斯的雲杉、印度的玫瑰木、中美洲與非洲的桃花心木、非洲與亞洲的黑檀。本頁說明各部位對木材的要求、經典選擇如何比較，以及音木如何挑選與分級。" },
  body:[
    { t:"section",
      id:"parts",
      title:{ en:"What each part needs", ja:"各部が求めるもの", zh:"各部位的需求" },
      jp:"部位と木",
      body:[
        { t:"table",
          caption:{ en:"Parts of an acoustic guitar and their woods", ja:"アコースティックギターの部分とその木", zh:"木吉他各部位及其木材" },
          cols:[
            { en:"Part", ja:"部分", zh:"部位" },
            { en:"Needs", ja:"求められる性質", zh:"需求" },
            { en:"Classic woods", ja:"定番の木", zh:"經典木材" },
            { en:"Japanese alternatives tried", ja:"試みられてきた日本の木", zh:"曾嘗試的日本木材" }
          ],
          rows:[
            [
              { en:"Top (soundboard)", ja:"表板", zh:"面板" },
              {
                en:"Light, stiff along and across the grain, low damping",
                ja:"軽く、縦にも横にも剛く、減衰が小さい",
                zh:"輕、順紋與橫紋皆剛、阻尼低" },
              {
                en:"Sitka, Engelmann, European and Adirondack spruce; western red cedar",
                ja:"シトカ・エンゲルマン・ジャーマン・アディロンダックのスプルース、シダー",
                zh:"西加雲杉、恩氏雲杉、歐洲雲杉、紅雲杉；紅雪松" },
              { en:"Ezo spruce (Hokkaidō), sugi, hinoki", ja:"エゾマツ（北海道）、スギ、ヒノキ", zh:"蝦夷雲杉（北海道）、柳杉、扁柏" }
            ],
            [
              { en:"Back and sides", ja:"裏板・側板", zh:"背板與側板" },
              {
                en:"Stiff, dense enough to reflect; bends well for the sides",
                ja:"剛く、反射するだけの重さ。側板のため曲げやすい",
                zh:"剛、密度足以反射；側板需易彎曲" },
              {
                en:"Indian rosewood, mahogany, maple, koa, walnut",
                ja:"インドローズウッド、マホガニー、メイプル、コア、ウォールナット",
                zh:"印度玫瑰木、桃花心木、楓木、相思木、胡桃木" },
              {
                en:"Yamazakura cherry, onigurumi walnut, itaya maple, mizume birch",
                ja:"ヤマザクラ、オニグルミ、イタヤカエデ、ミズメ",
                zh:"山櫻、鬼胡桃、色木槭、水目櫻" }
            ],
            [
              { en:"Neck", ja:"ネック", zh:"琴頸" },
              {
                en:"Stable, strong, light; resists bending under string tension",
                ja:"安定し、強く、軽い。弦の張力で曲がらない",
                zh:"穩定、強韌、輕；抗弦張力彎曲" },
              { en:"Mahogany, maple", ja:"マホガニー、メイプル", zh:"桃花心木、楓木" },
              { en:"Katsura, hōnoki magnolia, sen", ja:"カツラ、ホオノキ、セン", zh:"連香樹、厚朴、刺楸" }
            ],
            [
              { en:"Fingerboard and bridge", ja:"指板・ブリッジ", zh:"指板與琴橋" },
              {
                en:"Very hard and dense; wear-resistant; holds frets",
                ja:"非常に硬く重い。減りにくく、フレットを保つ",
                zh:"極硬極密；耐磨；能固定琴格" },
              { en:"Ebony, rosewood", ja:"エボニー、ローズウッド", zh:"黑檀、玫瑰木" },
              { en:"Evergreen oak, persimmon, heat-treated maple", ja:"カシ、柿、熱処理したメイプル", zh:"橿木、柿木、熱處理楓木" }
            ],
            [
              { en:"Bracing", ja:"力木", zh:"音梁" },
              { en:"Very stiff for its weight; quartersawn", ja:"重さのわりにとても剛い。柾目", zh:"重量比剛性極高；徑切" },
              { en:"Spruce (usually Sitka or Adirondack)", ja:"スプルース（ふつうシトカかアディロンダック）", zh:"雲杉（通常為西加或紅雲杉）" },
              { en:"Ezo spruce", ja:"エゾマツ", zh:"蝦夷雲杉" }
            ]
          ] },
        { t:"figure",
          caption:{
            en:"Typical air-dry densities of guitar woods, g/cm³, from standard handbooks. Tops are the lightest; fingerboard woods the heaviest. Individual boards vary by ten per cent or more.",
            ja:"ギターの木の典型的な気乾比重（g/cm³、標準的なハンドブックによる）。表板が最も軽く、指板の木が最も重い。一枚ごとに一割以上違う。",
            zh:"吉他木材典型氣乾密度（g/cm³，依標準手冊）。面板最輕，指板木材最重。個別板材差異可達一成以上。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Density of guitar woods", ja:"ギターの木の比重", zh:"吉他木材密度" }, labelW:230, dec:2, rowH:26, max:1.25,
            items:[
              { n:{ en:"Western red cedar", ja:"シダー", zh:"紅雪松" }, v:0.37, f:"#E0E6DB" },
              { n:{ en:"Sugi", ja:"スギ", zh:"柳杉" }, v:0.38, f:"#E0E6DB" },
              { n:{ en:"Sitka spruce", ja:"シトカスプルース", zh:"西加雲杉" }, v:0.43, f:"#E0E6DB" },
              { n:{ en:"Hinoki", ja:"ヒノキ", zh:"扁柏" }, v:0.44, f:"#E0E6DB" },
              { n:{ en:"African mahogany", ja:"アフリカンマホガニー", zh:"非洲桃花心木" }, v:0.53, f:"#EDE5D2" },
              { n:{ en:"Yamazakura", ja:"ヤマザクラ", zh:"山櫻" }, v:0.62, f:"#EDE5D2" },
              { n:{ en:"Black walnut", ja:"ウォールナット", zh:"黑胡桃" }, v:0.63, f:"#EDE5D2" },
              { n:{ en:"Sugar maple", ja:"メイプル", zh:"楓木" }, v:0.71, f:"#EDE5D2" },
              { n:{ en:"East Indian rosewood", ja:"インドローズウッド", zh:"印度玫瑰木" }, v:0.85, f:"#EEE1DF" },
              { n:{ en:"Brazilian rosewood", ja:"ハカランダ", zh:"巴西玫瑰木" }, v:0.98, f:"#EEE1DF" },
              { n:{ en:"African blackwood", ja:"アフリカンブラックウッド", zh:"非洲黑木" }, v:1.21, f:"#EEE1DF" }
            ] }); } }
      ] },
    { t:"section",
      id:"spruce",
      title:{ en:"Spruce and cedar", ja:"スプルースとシダー", zh:"雲杉與雪松" },
      jp:"表板",
      body:[
        { t:"p",
          text:{
            en:"Spruce dominates guitar tops for the same reasons it dominated violin bellies in Cremona: it combines low density with high stiffness along the grain and good stiffness across it, and it is straight-grained, stable and available in large, clear, quartersawn pieces. Sitka spruce from the coasts of Alaska and British Columbia is the standard for steel-string guitars; European spruce from the Alps and Engelmann spruce from the Rocky Mountains are lighter and valued for responsiveness; Adirondack (red) spruce, stiffer still, is prized for powerful bracing and tops. Western red cedar, lighter and softer, gives a warm, quick response and is a favourite for classical guitars.",
            ja:"スプルースがギターの表板を支配するのは、クレモナでバイオリンの表板を支配したのと同じ理由である。低い密度に、繊維方向の高い剛さと、繊維と直角の方向の良い剛さをあわせもち、通直で安定し、大きく節のない柾目の材が得られる。アラスカとブリティッシュコロンビアの沿岸のシトカスプルースはスチール弦ギターの標準で、アルプスのジャーマンスプルースとロッキー山脈のエンゲルマンスプルースはより軽く反応の良さで好まれ、さらに剛いアディロンダック（レッド）スプルースは力強い力木と表板のために珍重される。より軽くやわらかいシダーは温かく速い反応をもち、クラシックギターで好まれる。",
            zh:"雲杉主宰吉他面板，原因與它在克雷莫納主宰小提琴面板相同：密度低，順紋剛性高、橫紋剛性也佳，而且紋理通直、穩定，能取得大片無節的徑切材。產自阿拉斯加與卑詩省沿海的西加雲杉是鋼弦吉他的標準；阿爾卑斯的歐洲雲杉與洛磯山脈的恩氏雲杉較輕，以反應靈敏見長；剛性更高的紅雲杉（阿第倫達克雲杉）因可做出有力的音梁與面板而備受珍視。紅雪松較輕較軟，反應溫暖而迅速，是古典吉他的寵兒。" } }
      ] },
    { t:"section",
      id:"grading",
      title:{ en:"Choosing a top", ja:"表板を選ぶ", zh:"挑選面板" },
      jp:"グレード",
      body:[
        { t:"p",
          text:{
            en:"Tonewood suppliers sell tops in book-matched pairs — two thin boards resawn from one wedge and opened like a book, so that the grain mirrors across the centre seam — and grade them by appearance and structure. The grades (often written as A, AA, AAA and above) are not standardised between suppliers, but the criteria are the same everywhere, and most of them concern the anatomy described in <a href=\"anatomy.html\">Inside the Wood</a>.",
            ja:"トーンウッドの業者は、表板をブックマッチの対——一つのくさびから挽き割った二枚の薄い板を本のように開き、中央の継ぎ目をはさんで木目が鏡に映るようにしたもの——で売り、見た目と構造で格付けする。等級（しばしばA、AA、AAAとそれ以上）は業者ごとに統一されていないが、基準はどこでも同じで、その多くは<a href=\"anatomy.html\">木材の組織</a>で述べた構造にかかわる。",
            zh:"音木供應商以對開拼板（book-matched）成對出售面板——從同一塊楔形木料剖出兩片薄板，像翻書般攤開，使紋理沿中線鏡像對稱——並依外觀與結構分級。各供應商的等級（常寫作 A、AA、AAA 以上）並不統一，但標準大同小異，而且多與<a href=\"anatomy.html\">木材的組織</a>一頁所述的構造有關。" } },
        { t:"table",
          caption:{ en:"What graders look for in a spruce top", ja:"スプルースの表板で格付けの人が見るもの", zh:"雲杉面板分級時的觀察重點" },
          cols:[
            { en:"Criterion", ja:"基準", zh:"標準" },
            { en:"Best", ja:"最良", zh:"最佳" },
            { en:"Why it matters", ja:"なぜ大事か", zh:"為何重要" }
          ],
          rows:[
            [
              { en:"Cut", ja:"木取り", zh:"鋸切方向" },
              { en:"Truly quartersawn (rings near 90° to the face)", ja:"正確な柾目（年輪が面にほぼ直角）", zh:"真正徑切（年輪與板面近 90°）" },
              { en:"Maximum stiffness across the grain; stable", ja:"繊維直角方向の剛さが最大、安定", zh:"橫紋剛性最高；穩定" }
            ],
            [
              { en:"Runout", ja:"目切れ", zh:"纖維走向偏斜" },
              { en:"Grain parallel to the surface along the length", ja:"長さ方向に木目が面と平行", zh:"沿長度方向紋理與板面平行" },
              {
                en:"Fibres that run out of the surface weaken the top and make it hard to finish",
                ja:"面から抜ける繊維は板を弱くし、仕上げにくくする",
                zh:"從表面穿出的纖維會削弱面板且難以塗裝" }
            ],
            [
              { en:"Ring spacing", ja:"年輪の間隔", zh:"年輪間距" },
              { en:"Even; often fine (but not necessarily)", ja:"均一。しばしば細かい（必ずしもではない）", zh:"均勻；通常細密（但非絕對）" },
              {
                en:"Even growth means even stiffness; fine rings are prized for looks",
                ja:"そろった成長はそろった剛さ。細かい年輪は見た目で好まれる",
                zh:"生長均勻即剛性均勻；細密年輪因美觀而受青睞" }
            ],
            [
              { en:"Silking", ja:"シルク（放射組織の斑）", zh:"絲光紋（射線斑）" },
              { en:"Visible cross-grain ray flecks", ja:"見える放射組織の斑", zh:"可見的橫向射線斑紋" },
              {
                en:"A sign of accurate quartersawing; valued for looks",
                ja:"正確な柾目挽きのしるし。見た目で好まれる",
                zh:"徑切精準的象徵；因美觀受重視" }
            ],
            [
              { en:"Colour and defects", ja:"色と欠点", zh:"顏色與缺陷" },
              { en:"Uniform; no knots, pitch pockets or compression wood", ja:"一様。節、やに壺、あてがない", zh:"一致；無節疤、樹脂囊或壓縮材" },
              { en:"Defects create weak or dead spots", ja:"欠点は弱いところや鳴らないところをつくる", zh:"缺陷會造成弱點或死點" }
            ],
            [
              { en:"Stiffness and weight", ja:"剛さと重さ", zh:"剛性與重量" },
              {
                en:"High stiffness for low weight, measured or tapped",
                ja:"軽さのわりに高い剛さ。測るか叩いて",
                zh:"重量輕而剛性高，以量測或敲擊判斷" },
              { en:"The property that actually decides the sound", ja:"実際に音を決める性質", zh:"真正決定聲音的性質" }
            ]
          ] }
      ] },
    { t:"section",
      id:"seasoning",
      title:{ en:"Seasoning and solid wood", ja:"枯らしと単板", zh:"陳放與單板" },
      jp:"自然乾燥",
      body:[
        { t:"p",
          text:{
            en:"Tonewood is dried slowly and stored for years before use. Makers believe — and some research supports — that long air-seasoning relieves internal stresses and stabilises the wood, so that a guitar built from it moves less and cracks less. Gifu's guitar makers are no exception: K. Yairi in Kani is known for seasoning its wood naturally for years in its own stores before building. The guitars are then assembled in rooms held at controlled humidity, so that the wood is at its driest when glued up and will not shrink afterwards.",
            ja:"トーンウッドはゆっくり乾かされ、使う前に何年も寝かされる。つくり手は——いくつかの研究もそれを支持している——長い天然の枯らしが内部の応力をやわらげ木を安定させ、それでつくったギターは動きが少なく割れにくいと信じている。岐阜のギターのつくり手も例外ではなく、可児のヤイリギターは、製作の前に自社の倉で何年も材を自然に枯らすことで知られる。ギターはそのうえで湿度を管理した部屋で組まれ、接着するとき木が最も乾いた状態にあり、あとで縮まないようにする。",
            zh:"音木要緩慢乾燥並陳放多年才使用。工匠們相信——部分研究也支持——長時間自然陳放能釋放內部應力、使木材穩定，以此製作的吉他較少變形與開裂。岐阜的吉他工匠也不例外：可兒市的 K.Yairi 以在自家倉庫自然陳放木材多年後才製琴而聞名。吉他隨後在控濕房間中組裝，使木材在膠合時處於最乾燥狀態，日後不致收縮。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Solid wood", ja:"単板", zh:"單板" },
              text:{
                en:"Each plate is a single layer of wood, usually book-matched. Responds and changes with age and playing; more sensitive to humidity; the choice for better instruments. “All solid” means top, back and sides are all solid.",
                ja:"それぞれの板が一層の木で、ふつうブックマッチ。年と弾きこみで反応が変わり、湿度に敏感。上位の楽器の選択。「オール単板」は表・裏・側がすべて単板であることを意味する。",
                zh:"每片板都是單層木材，通常為對開拼板。會隨年歲與彈奏而改變；對濕度較敏感；是較高階樂器的選擇。「全單板」指面板、背板與側板皆為單板。" } },
            { title:{ en:"Laminate", ja:"合板", zh:"合板" },
              text:{
                en:"Plates made of thin veneers glued in layers, like plywood. Stronger, cheaper, far more stable in dry or humid climates, and less resonant; common for backs and sides of affordable guitars, often combined with a solid top.",
                ja:"合板のように薄い単板を層に貼った板。強く安く、乾燥や多湿の気候ではるかに安定し、響きは少ない。手ごろなギターの裏板・側板に多く、しばしば単板の表板と組み合わされる。",
                zh:"以薄單板分層膠合而成，類似合板。更強、更便宜，在乾燥或潮濕氣候中穩定得多，但共鳴較少；常見於平價吉他的背側板，常與單板面板搭配。" } }
          ] }
      ] },
    { t:"section",
      id:"shell",
      title:{ en:"Backs and sides: the shell", ja:"裏板と側板：殻をつくる木", zh:"背板與側板：琴身的殼" },
      jp:"裏板・側板",
      body:[
        { t:"p",
          text:{
            en:"If the top is the loudspeaker of a guitar, the back and sides are its cabinet — but a cabinet that also vibrates, reflects and colours the sound (the physics is on <a href=\"sound.html\">Wood &amp; Sound</a>). The woods chosen for it need different qualities from a top: enough density and stiffness to reflect energy rather than soak it up, the ability to bend into the waist of the body without cracking, stability in changing humidity, and, because they are what the buyer sees, figure and colour. The descriptions of tone below are those makers commonly give; blind tests suggest that differences between back woods are smaller than the catalogue language implies (see <a href=\"listening.html\">Can You Hear the Wood?</a>).",
            ja:"表板がギターのスピーカーなら、裏板と側板はその箱である。ただし自分も振動し、音を反射し、色づける箱である（物理は<a href=\"sound.html\">木と音</a>の頁にある）。そこに選ぶ木には表板とは違う性質がいる。エネルギーを吸いこまず反射するだけの密度と剛さ、胴のくびれに割れずに曲げられること、湿度の変化に対する安定、そして買い手の目にふれる部分なので木目と色である。以下の音色の説明は、つくり手がふつう語るものである。目隠しの試験では、裏板の木の違いはカタログの言葉が思わせるほど大きくないとされる（<a href=\"listening.html\">木は聴こえるか</a>を参照）。",
            zh:"如果面板是吉他的揚聲器，背板與側板就是它的箱體——但這個箱體本身也會振動、反射並為聲音上色（物理原理見<a href=\"sound.html\">木與聲音</a>）。用於此處的木材需要與面板不同的特性：足夠的密度與剛性，能反射而非吸收能量；能彎成琴身腰線而不開裂；在濕度變化中保持穩定；而且因為這是買家看得見的部分，還要有紋理與色澤。以下對音色的描述是製琴師常用的說法；盲測顯示，背板木材之間的差異比型錄用語所暗示的要小（見<a href=\"listening.html\">聽得見木頭嗎</a>）。" } },
        { t:"defs",
          items:[
            { term:{ en:"Indian rosewood", ja:"インドローズウッド", zh:"印度玫瑰木" },
              jp:"Dalbergia latifolia",
              def:{
                en:"The standard back-and-side wood of steel-string guitars since makers moved away from Brazilian rosewood around 1969–1970. Dense, oily and dark brown to purple, it is usually described as giving strong bass and rich overtones. Since 2017 all rosewoods have been regulated in trade, with an exemption for finished instruments added in 2019 (see <a href=\"cites.html\">Rosewood &amp; the Law</a>).",
                ja:"一九六九〜一九七〇年ごろ、つくり手がブラジリアンローズウッドから離れて以来、スチール弦ギターの裏板・側板の標準である。重く油分が多く、濃い茶から紫色で、低音が豊かで倍音に富むとよく言われる。二〇一七年からすべてのローズウッドの取引が規制され、二〇一九年に完成した楽器の適用除外が加わった（<a href=\"cites.html\">ローズウッドと条約</a>を参照）。",
                zh:"自約 1969–1970 年製琴業者逐漸不用巴西玫瑰木以來，它就是鋼弦吉他背側板的標準用材。質重、多油，色澤深褐至紫，常被形容為低音飽滿、泛音豐富。自 2017 年起所有玫瑰木的貿易都受管制，2019 年再增訂成品樂器的豁免（見<a href=\"cites.html\">玫瑰木與公約</a>）。" } },
            { term:{ en:"Brazilian rosewood", ja:"ブラジリアンローズウッド", zh:"巴西玫瑰木" },
              jp:"Dalbergia nigra",
              def:{
                en:"The legendary wood of pre-war and 1960s guitars, listed on CITES Appendix I in 1992; today it is used only from old, documented stock, at very high prices.",
                ja:"戦前と一九六〇年代のギターの伝説の木で、一九九二年にワシントン条約の附属書Iに載った。いまは書類のそろった古い在庫からのみ使われ、値段はきわめて高い。",
                zh:"戰前與 1960 年代吉他的傳奇木材，1992 年列入 CITES 附錄一；如今只能使用有文件證明的舊庫存，價格極高。" } },
            { term:{ en:"Mahogany", ja:"マホガニー", zh:"桃花心木" },
              jp:"Swietenia / Khaya",
              def:{
                en:"True (American) mahogany and the African <em>Khaya</em> sold under the same name are lighter than rosewood and usually described as warm, dry and focused on the fundamental. Mahogany is among the most stable of all guitar woods — true mahogany has the lowest tangential shrinkage of any wood in the figure below — which is also why it is the classic neck wood.",
                ja:"本来の（アメリカの）マホガニーと、同じ名で売られるアフリカのカヤは、ローズウッドより軽く、温かく乾いて、基音にまとまった音とよく言われる。マホガニーはギターの木のなかでも最も安定したものの一つで、本来種のマホガニーは下の図の木のなかで接線方向の収縮が最も小さい。それが定番のネック材である理由でもある。",
                zh:"真正的（美洲）桃花心木，以及以同名販售的非洲卡雅木（Khaya），都比玫瑰木輕，常被形容為溫暖、乾爽、集中於基音。桃花心木是最穩定的吉他木材之一——真桃花心木在下圖所有木材中弦向收縮最小——這也是它成為經典琴頸用材的原因。" } },
            { term:{ en:"Maple", ja:"メイプル", zh:"楓木" },
              jp:"Acer",
              def:{
                en:"Hard, pale and often flamed, maple is the back wood of the violin family and of many jazz and large-bodied guitars, usually described as bright and clear. It moves more with humidity than the others here, so it must be well seasoned and carefully quartered.",
                ja:"硬く白っぽく、しばしば杢の出るメイプルは、ヴァイオリン属の裏板であり、多くのジャズギターや大型のギターの裏板である。明るく澄んだ音とよく言われる。ここに挙げたほかの木より湿度で動くので、よく枯らし、慎重に柾目に取らねばならない。",
                zh:"楓木堅硬、色淺，常帶虎紋，是提琴家族以及許多爵士吉他與大型吉他的背板用材，常被形容為明亮清晰。它隨濕度伸縮的幅度比此處其他木材大，因此必須充分乾燥並謹慎取徑切。" } },
            { term:{ en:"Walnut and koa", ja:"ウォールナットとコア", zh:"胡桃木與相思木" },
              jp:"Juglans / Acacia koa",
              def:{
                en:"Black walnut from North America and koa, an acacia from Hawai'i, sit between mahogany and rosewood in weight and are chosen as much for their figure as their sound. Japanese makers also use native walnut, cherry and maple (see <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>).",
                ja:"北米のブラックウォールナットと、ハワイのアカシアであるコアは、重さでマホガニーとローズウッドのあいだにあり、音と同じほど木目で選ばれる。日本のつくり手は国産のクルミ、サクラ、カエデも使う（<a href=\"japanesewoods.html\">和の木と和の楽器</a>を参照）。",
                zh:"北美黑胡桃木與夏威夷的相思樹「koa」在重量上介於桃花心木與玫瑰木之間，選用時看重紋理不亞於音色。日本製琴者也使用本土的胡桃、櫻木與楓木（見<a href=\"japanesewoods.html\">日本之木與日本樂器</a>）。" } }
          ] }
      ] },
    { t:"section",
      id:"neckwood",
      title:{ en:"Necks, fingerboards and bridges", ja:"ネック・指板・ブリッジ", zh:"琴頸、指板與琴橋" },
      jp:"硬く、動かない木",
      body:[
        { t:"p",
          text:{
            en:"The neck has a structural job: to stay straight for decades under the pull of the strings while the humidity around it rises and falls. The traditional woods are mahogany for steel-string guitars and Spanish cedar (<em>Cedrela odorata</em>) for classical guitars — light, stable and easy to carve; Spanish cedar was itself added to CITES Appendix II in 2019. Maple, harder and heavier, is standard on electric guitars. Necks are cut so that the growth rings stand roughly upright in the neck's cross-section, and are often glued up from two, three or five pieces, so that the tendencies of individual boards to bow or twist cancel out; steel-string necks also carry an adjustable steel truss rod.",
            ja:"ネックには構造の役目がある。まわりの湿度が上がり下がりするなか、弦の張力に引かれても何十年もまっすぐでいることである。伝統の木は、スチール弦ギターではマホガニー、クラシックギターではスパニッシュシダー（セドロ）で、軽く安定し、削りやすい。スパニッシュシダーは二〇一九年にそれ自体がワシントン条約の附属書IIに加えられた。より硬く重いメイプルはエレキギターの標準である。ネックは年輪がその断面でほぼ立つように木取りし、しばしば二枚、三枚、五枚を矧ぎあわせて、一枚ずつの板の反りやねじれの癖を打ち消しあうようにする。スチール弦のネックには調整できる鋼のトラスロッドも入る。",
            zh:"琴頸負有結構任務：在周遭濕度起伏之中，承受琴弦拉力數十年仍保持筆直。傳統用材是鋼弦吉他用桃花心木，古典吉他用西班牙雪松（Cedrela odorata）——輕、穩定、易於雕削；西班牙雪松本身也在 2019 年被列入 CITES 附錄二。更硬更重的楓木則是電吉他的標準。琴頸取材時讓年輪在斷面上大致直立，並常以兩片、三片或五片拼合，使各片木板彎曲或扭轉的傾向相互抵消；鋼弦吉他的琴頸內還裝有可調整的鋼製調整桿。" } },
        { t:"p",
          text:{
            en:"Fingerboards and bridges need the opposite of a top: the hardest, densest woods available, to hold frets, resist the wear of fingers and strings and transmit the strings' energy into the top without absorbing it. Ebony, black and close-grained, and rosewood are the classic choices. Since rosewood trade was restricted, makers have tried heat-treated (roasted) maple, other dense tropical species and composite boards; in Japan, evergreen oak and persimmon have been used. The inner bridge plate under the top, which takes the ball ends of steel strings, is usually maple.",
            ja:"指板とブリッジには表板と正反対のものがいる。手に入るなかで最も硬く重い木で、フレットを保持し、指と弦のすり減りに耐え、弦のエネルギーを吸わずに表板へ伝えるためである。黒く目のつんだエボニーとローズウッドが定番である。ローズウッドの取引が制限されてからは、熱処理（ロースト）したメイプル、ほかの重い熱帯材、複合材の板が試され、日本ではカシやカキも使われてきた。表板の裏でスチール弦のボールエンドを受けるブリッジプレートは、ふつうメイプルである。",
            zh:"指板與琴橋需要的恰恰與面板相反：能取得的最硬、最重的木材，才能固定琴格、抵抗手指與琴弦的磨損，並把琴弦的能量傳入面板而不加以吸收。黑色、紋理緻密的烏木與玫瑰木是經典選擇。玫瑰木貿易受限後，製琴業者嘗試了熱處理（烘烤）楓木、其他高密度熱帶木材與複合材料板；在日本也曾使用橿木與柿木。面板內側承接鋼弦球端的琴橋墊板，通常是楓木。" } }
      ] },
    { t:"section",
      id:"quartering",
      title:{ en:"Why tonewood is quartered", ja:"なぜ柾目に取るのか", zh:"為何音木要取徑切" },
      jp:"柾目と目切れ",
      body:[
        { t:"p",
          text:{
            en:"Wood behaves differently in its three directions: along the grain (longitudinal), along a radius from the pith (radial) and along the growth rings (tangential). Across the grain it is far weaker and moves far more, and the two cross directions are not equal. The US Forest Products Laboratory's <em>Wood Handbook</em> gives Sitka spruce a radial stiffness of about 7.8 per cent of its stiffness along the grain, but a tangential stiffness of only about 4.3 per cent. A quartersawn top, with the rings standing perpendicular to its face, has the radial direction running across its width; a flatsawn top would have the tangential. The same plate is therefore nearly twice as stiff across the grain when quartered — which is why every good top, and most backs, are cut that way.",
            ja:"木は三つの方向で違うふるまいをする。木目に沿った方向（繊維方向）、髄から放射状の方向（半径方向）、年輪に沿った方向（接線方向）である。木目と直角の方向では、はるかに弱く、はるかに動く。しかもその二つの方向は同じではない。米国林産物研究所の『ウッド・ハンドブック』によれば、シトカスプルースの半径方向の剛さは繊維方向の約7.8％、接線方向はわずか約4.3％である。年輪が面に直角に立つ柾目の表板では、幅の方向が半径方向になり、板目の表板では接線方向になる。同じ板でも柾目に取れば木目と直角の剛さがほぼ二倍になる。よい表板がすべて、そして裏板の多くが柾目に取られるのはそのためである。",
            zh:"木材在三個方向上的表現各不相同：順紋方向（縱向）、從髓心向外的半徑方向（徑向），以及沿著年輪的方向（弦向）。橫紋方向的強度遠低於順紋，伸縮也大得多，而且兩個橫紋方向並不相等。美國林產品研究所的《木材手冊》指出，西加雲杉的徑向剛性約為順紋剛性的 7.8%，弦向則只有約 4.3%。年輪垂直於板面的徑切面板，其寬度方向即為徑向；弦切面板則為弦向。因此同一塊板若取徑切，橫紋剛性幾乎高出一倍——這就是為何所有好的面板以及多數背板都這樣取材。" } },
        { t:"p",
          text:{
            en:"Movement follows the same pattern. Wood shrinks more along the rings than across them — between about 1.4 and 2.1 times as much for the guitar woods in the figure — so a flatsawn board changes width more and cups as it dries, while a quartersawn one stays flatter and moves less. The third enemy is runout: fibres that do not run parallel to the face but dive out of it, because the tree grew with a spiral or the board was sawn at an angle to the grain. Runout weakens a top and makes it tear when planed. The old remedy was to split rather than saw: a billet riven along the grain with a froe follows the fibres exactly, and some European suppliers still split spruce before resawing the halves into book-matched tops.",
            ja:"動きも同じ型にしたがう。木は年輪に直角の方向より年輪に沿った方向で大きく縮む——図のギター材では約1.4倍から2.1倍である——。だから板目の板は乾くにつれて幅が大きく変わり、反る（カップする）が、柾目の板は平らを保ち、動きが小さい。第三の敵は目切れ（ランアウト）である。木がねじれて育ったり、木目に斜めに挽かれたりして、繊維が面と平行に走らず、面から潜り出る状態をいう。目切れは表板を弱くし、鉋をかけると逆目で裂ける。昔からの対策は、挽かずに割ることだった。木目に沿って割った材は繊維にぴたりとしたがう。ヨーロッパの業者のなかには、いまもスプルースを割ってから、その半分を挽き割ってブックマッチの表板にするところがある。",
            zh:"伸縮也遵循同樣的規律。木材沿年輪方向的收縮大於垂直年輪方向——圖中的吉他木材約為 1.4 到 2.1 倍——所以弦切板乾燥時寬度變化較大、會翹曲成瓦狀，而徑切板則較平、伸縮較小。第三個敵人是「斜紋走出」（runout）：由於樹木呈螺旋狀生長，或板材鋸切時與紋理成斜角，纖維並不平行於板面，而是潛出板面。斜紋走出會削弱面板，刨削時也容易逆紋撕裂。傳統的對策是劈而不鋸：沿紋理劈開的料完全順著纖維走，部分歐洲供應商至今仍先劈開雲杉，再把兩半剖成對開的面板。" } },
        { t:"figure",
          caption:{
            en:"Shrinkage from green to oven-dry, radial and tangential, per cent, for common guitar woods. Source: US Forest Products Laboratory (Wood Handbook data), as tabulated by woodbin.com.",
            ja:"よく使われるギター材の生材から全乾までの収縮率（半径方向・接線方向、％）。出典：米国林産物研究所（ウッド・ハンドブックのデータ、woodbin.comの表による）。",
            zh:"常見吉他木材從生材到全乾的收縮率（徑向與弦向，%）。資料來源：美國林產品研究所（木材手冊數據，據 woodbin.com 整理）。" },
          svg:function(lang, L){
            var F = GIFU.fig, rows = [
              { n:{ en:"Sitka spruce", ja:"シトカスプルース", zh:"西加雲杉" }, r:4.3, t:7.5 },
              { n:{ en:"Engelmann spruce", ja:"エンゲルマンスプルース", zh:"恩氏雲杉" }, r:3.8, t:7.1 },
              { n:{ en:"Red (Adirondack) spruce", ja:"レッドスプルース", zh:"紅雲杉（阿第倫達克）" }, r:3.8, t:7.8 },
              { n:{ en:"Western red cedar", ja:"ウエスタンレッドシダー", zh:"西部紅雪松" }, r:2.4, t:5.0 },
              { n:{ en:"Spanish cedar", ja:"スパニッシュシダー", zh:"西班牙雪松" }, r:4.2, t:6.3 },
              { n:{ en:"Mahogany (true)", ja:"マホガニー（本来種）", zh:"桃花心木（真）" }, r:3.0, t:4.1 },
              { n:{ en:"African mahogany", ja:"アフリカンマホガニー", zh:"非洲桃花心木" }, r:2.5, t:4.5 },
              { n:{ en:"Indian rosewood", ja:"インドローズウッド", zh:"印度玫瑰木" }, r:2.7, t:5.8 },
              { n:{ en:"Brazilian rosewood", ja:"ブラジリアンローズウッド", zh:"巴西玫瑰木" }, r:2.9, t:4.6 },
              { n:{ en:"Black walnut", ja:"ブラックウォールナット", zh:"黑胡桃木" }, r:5.5, t:7.8 },
              { n:{ en:"Sugar maple", ja:"シュガーメイプル", zh:"糖楓" }, r:4.8, t:9.9 }
            ];
            var top = 74, rh = 24, x0 = 230, w = 440, max = 10, H = top + rows.length*rh + 40;
            var s = '<svg viewBox="0 0 760 '+H+'" role="img">';
            s += F.text(20, 28, lang==="en"?"HOW MUCH GUITAR WOODS SHRINK":(lang==="ja"?"ギター材の収縮":"吉他木材的收縮"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            s += '<rect x="'+x0+'" y="44" width="12" height="9" fill="#A08F73"/>' + F.text(x0+18, 52, L({ en:"Radial", ja:"半径方向", zh:"徑向" }), { size:10.5, fill:"#55504A" });
            s += '<rect x="'+(x0+110)+'" y="44" width="12" height="9" fill="#E9E2D2" stroke="#B4AC9C"/>' + F.text(x0+128, 52, L({ en:"Tangential", ja:"接線方向", zh:"弦向" }), { size:10.5, fill:"#55504A" });
            for (var g = 0; g <= max; g += 2) {
              var gx = x0 + g/max*w;
              s += '<line x1="'+gx+'" y1="'+(top-6)+'" x2="'+gx+'" y2="'+(top + rows.length*rh)+'" stroke="#E1DCD2"/>';
              s += F.text(gx, top + rows.length*rh + 16, g + "%", { size:9.5, fill:"#8B857C", anchor:"middle" });
            }
            for (var i = 0; i < rows.length; i++) {
              var y = top + i*rh, R = rows[i];
              s += F.text(x0 - 10, y + 13, L(R.n), { size:10.5, fill:"#201E1B", anchor:"end" });
              s += '<rect x="'+x0+'" y="'+(y+2)+'" width="'+(R.t/max*w)+'" height="9" fill="#E9E2D2" stroke="#B4AC9C"/>';
              s += '<rect x="'+x0+'" y="'+(y+11)+'" width="'+(R.r/max*w)+'" height="9" fill="#A08F73"/>';
              s += F.text(x0 + R.t/max*w + 6, y + 10, R.t.toFixed(1), { size:9.5, fill:"#55504A" });
              s += F.text(x0 + R.r/max*w + 6, y + 20, R.r.toFixed(1), { size:9.5, fill:"#55504A" });
            }
            return s + '</svg>';
          } },
        { t:"tiny",
          text:{
            en:"Sources: US Forest Products Laboratory, Wood Handbook, Table 5–1 (elastic ratios at about 12% moisture content) and shrinkage data; CITES Conferences of the Parties (1992, 2016, 2019).",
            ja:"出典：米国林産物研究所『ウッド・ハンドブック』表5–1（含水率約12％での弾性比）と収縮率のデータ、ワシントン条約締約国会議（一九九二年、二〇一六年、二〇一九年）。",
            zh:"資料來源：美國林產品研究所《木材手冊》表 5–1（含水率約 12% 的彈性比）與收縮率數據；CITES 締約方大會（1992、2016、2019 年）。" } }
      ] },
    { t:"related",
      items:[
        { href:"sound.html", why:{ en:"The physics behind the choices.", ja:"選択の背後の物理。", zh:"選材背後的物理。" } },
        { href:"japanesewoods.html", why:{ en:"Japanese woods in guitars.", ja:"ギターの日本の木。", zh:"吉他中的日本木材。" } },
        { href:"cites.html", why:{ en:"Rosewood and the trade rules.", ja:"ローズウッドと取引の規則。", zh:"玫瑰木與貿易規範。" } },
        { href:"making.html", why:{ en:"How the woods become a guitar.", ja:"木がどうギターになるか。", zh:"木材如何成為吉他。" } }
      ] }
  ] };

/* ---- -------------------------------------------- guitar */
GIFU.pages["guitar"] = { kicker:{ en:"Sound · 03", ja:"音 · 03", zh:"聲音 · 03" },
  title:{ en:"The Guitar", ja:"ギター", zh:"吉他" },
  jp:"かたち・種類・日本への道",
  lede:{
    en:"The acoustic guitar is a box of thin wooden plates, braced inside, with a neck carrying six strings under a combined tension of seventy kilograms or more. It came to Japan in the Meiji period, spread in the 1930s with popular songs and the first visit of Andrés Segovia, exploded with the electric-guitar boom of the mid-1960s and the folk boom that followed, and became, in two small Gifu towns, an industry that ships instruments around the world. This page describes the parts and types of the guitar and how it became a Japanese — and a Gifu — product.",
    ja:"アコースティックギターは、なかに力木を貼った薄い木の板の箱で、ネックが合わせて七十キロ以上の張力の六本の弦を支える。明治に日本に来て、一九三〇年代に流行歌とアンドレス・セゴビアの初来日で広まり、一九六〇年代半ばのエレキブームとそれに続くフォークブームで爆発し、岐阜の二つの小さな町で、世界に楽器を送る産業となった。この頁は、ギターの部分と種類、そしてそれがいかに日本の——そして岐阜の——品となったかを述べる。",
    zh:"木吉他是一個由薄木板構成、內部貼有音梁的箱體，琴頸承載六根弦，總張力達七十公斤以上。它在明治時代傳入日本，1930 年代隨流行歌曲與塞哥維亞首度訪日而普及，1960 年代中期的電吉他熱潮與隨後的民謠熱潮使其爆發性成長，並在岐阜兩座小鎮成為一門把樂器銷往世界各地的產業。本頁介紹吉他的構造與種類，以及它如何成為日本——也是岐阜——的產品。" },
  body:[
    { t:"section",
      id:"parts",
      title:{ en:"Anatomy of an acoustic guitar", ja:"アコースティックギターの構造", zh:"木吉他的構造" },
      jp:"各部の名称",
      body:[
        { t:"figure",
          caption:{
            en:"The main parts of a steel-string acoustic guitar. The top, back and sides form a resonating box; the neck, glued or bolted to the body, carries the fingerboard and the tension of the strings.",
            ja:"スチール弦のアコースティックギターの主な部分。表板・裏板・側板が共鳴する箱をつくり、胴に接着かボルトで留めたネックが指板と弦の張力を担う。",
            zh:"鋼弦木吉他的主要部位。面板、背板與側板構成共鳴箱；以膠合或螺栓接在琴身上的琴頸，承載指板與琴弦張力。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 300" role="img">';
            s += F.text(20, 28, lang==="en"?"PARTS OF THE GUITAR":(lang==="ja"?"ギターの各部":"吉他各部位"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            // body (horizontal guitar): lower bout at left
            s += '<path d="M60 150 C60 70 150 60 205 88 C230 100 250 104 270 96 C300 72 380 78 392 150 C380 222 300 228 270 204 C250 196 230 200 205 212 C150 240 60 230 60 150 Z" fill="#EDE5D2" stroke="#7C6B52" stroke-width="1.5"/>';
            s += '<circle cx="300" cy="150" r="26" fill="#FBFAF7" stroke="#7C6B52"/><circle cx="300" cy="150" r="31" fill="none" stroke="#A08F73" stroke-dasharray="2 2"/>';
            s += '<rect x="140" y="128" width="40" height="44" rx="2" fill="#B4AC9C" stroke="#7C6B52"/><line x1="160" y1="132" x2="160" y2="168" stroke="#FBFAF7" stroke-width="2"/>';
            // neck & fingerboard
            s += '<rect x="392" y="137" width="250" height="26" fill="#E7DFD2" stroke="#7C6B52"/>';
            s += '<rect x="392" y="139" width="250" height="22" fill="#8B857C" fill-opacity="0.35" stroke="none"/>';
            for (var f=0; f<14; f++){ var fx = 640 - 250*(1-Math.pow(2,-(f+1)/12)); if (fx>395) s += '<line x1="'+fx.toFixed(1)+'" y1="139" x2="'+fx.toFixed(1)+'" y2="161" stroke="#FBFAF7" stroke-width="1.2"/>'; }
            // headstock
            s += '<path d="M642 136 L720 128 L722 172 L642 164 Z" fill="#E7DFD2" stroke="#7C6B52"/>';
            for (var k=0;k<3;k++){ s += '<circle cx="'+(662+k*20)+'" cy="132" r="4" fill="#CDC6B9" stroke="#7C6B52"/><circle cx="'+(662+k*20)+'" cy="168" r="4" fill="#CDC6B9" stroke="#7C6B52"/>'; }
            // strings
            for (var st=0; st<6; st++){ var y = 142 + st*3.2; s += '<line x1="160" y1="'+y.toFixed(1)+'" x2="700" y2="'+(146+st*1.6).toFixed(1)+'" stroke="#55504A" stroke-width="0.6"/>'; }
            function lab(x1,y1,x2,y2,t){ return '<path d="M'+x1+' '+y1+' L'+x2+' '+y2+'" stroke="#8B857C" fill="none"/>' + F.text(x2, y2+(y2<150?-4:14), L(t), { size:10.5, fill:"#201E1B", anchor:"middle" }); }
            s += lab(110, 100, 110, 58, { en:"Top (soundboard)", ja:"表板", zh:"面板" });
            s += lab(160, 172, 100, 262, { en:"Bridge & saddle", ja:"ブリッジとサドル", zh:"琴橋與弦枕" });
            s += lab(300, 124, 300, 58, { en:"Soundhole & rosette", ja:"サウンドホールとロゼッタ", zh:"音孔與音孔花" });
            s += lab(392, 190, 392, 262, { en:"Neck heel & joint", ja:"ヒールとネックの接合", zh:"琴跟與琴頸接合" });
            s += lab(520, 137, 520, 58, { en:"Fingerboard & frets", ja:"指板とフレット", zh:"指板與琴格" });
            s += lab(700, 172, 700, 262, { en:"Headstock & tuners", ja:"ヘッドとペグ", zh:"琴頭與弦鈕" });
            s += lab(240, 205, 258, 262, { en:"Sides (back beneath)", ja:"側板（裏板は下）", zh:"側板（背板在下）" });
            return s + '</svg>';
          } },
        { t:"table",
          caption:{ en:"Main kinds of guitar", ja:"ギターの主な種類", zh:"吉他主要類型" },
          cols:[
            { en:"Kind", ja:"種類", zh:"類型" },
            { en:"Strings", ja:"弦", zh:"琴弦" },
            { en:"Construction", ja:"つくり", zh:"構造" },
            { en:"Made in Gifu by", ja:"岐阜のつくり手", zh:"岐阜製造者" }
          ],
          rows:[
            [
              { en:"Steel-string flat-top", ja:"フラットトップ（スチール弦）", zh:"平面鋼弦吉他" },
              { en:"Steel", ja:"スチール", zh:"鋼弦" },
              {
                en:"X-braced spruce top; body sizes from parlour to dreadnought and jumbo",
                ja:"X力木のスプルースの表板。胴はパーラーからドレッドノート、ジャンボまで",
                zh:"X 型音梁雲杉面板；琴身從客廳型到 D 桶與 Jumbo" },
              { en:"K. Yairi, Takamine, independent luthiers", ja:"ヤイリギター、タカミネ、個人の製作家", zh:"K.Yairi、Takamine、獨立製琴師" }
            ],
            [
              { en:"Classical and flamenco", ja:"クラシック・フラメンコ", zh:"古典與佛朗明哥吉他" },
              { en:"Nylon", ja:"ナイロン", zh:"尼龍弦" },
              { en:"Light fan-braced top; lower tension", ja:"扇状の力木の軽い表板。張力が低い", zh:"扇形音梁輕面板；張力較低" },
              {
                en:"Both makers; Takamine began with classical guitars",
                ja:"両社とも。タカミネはクラシックから始めた",
                zh:"兩家皆有；Takamine 以古典吉他起家" }
            ],
            [
              { en:"Electro-acoustic", ja:"エレクトリック・アコースティック", zh:"電木吉他" },
              { en:"Steel or nylon", ja:"スチールかナイロン", zh:"鋼弦或尼龍弦" },
              {
                en:"Acoustic guitar with a pickup under the saddle and a built-in preamp",
                ja:"サドルの下のピックアップと内蔵のプリアンプをもつアコースティックギター",
                zh:"弦枕下裝拾音器並內建前級的木吉他" },
              {
                en:"Takamine's Palathetic under-saddle pickup (1978) was an early and influential design",
                ja:"タカミネのパラセティック・アンダーサドル・ピックアップ（一九七八年）は初期の影響力ある設計",
                zh:"Takamine 的 Palathetic 弦枕下拾音器（1978）是早期且具影響力的設計" }
            ],
            [
              { en:"Archtop", ja:"アーチトップ", zh:"拱面吉他" },
              { en:"Steel", ja:"スチール", zh:"鋼弦" },
              { en:"Carved, arched top and back, like a violin", ja:"バイオリンのように彫ってふくらませた表板と裏板", zh:"如小提琴般雕刻拱起的面板與背板" },
              { en:"A few independent luthiers (e.g. in Gujō)", ja:"少数の個人の製作家（たとえば郡上）", zh:"少數獨立製琴師（如郡上）" }
            ],
            [
              { en:"Electric", ja:"エレキギター", zh:"電吉他" },
              { en:"Steel", ja:"スチール", zh:"鋼弦" },
              {
                en:"Solid or semi-hollow body; sound produced electrically",
                ja:"ソリッドやセミホロウの胴。音は電気でつくる",
                zh:"實心或半空心琴身；以電子方式發聲" },
              { en:"Custom workshops in Gifu city, Yamagata, Ōgaki", ja:"岐阜市、山県、大垣の工房", zh:"岐阜市、山縣、大垣的訂製工坊" }
            ]
          ] }
      ] },
    { t:"section",
      id:"japan",
      title:{ en:"How the guitar became Japanese", ja:"ギターが日本のものになるまで", zh:"吉他如何成為日本之物" },
      jp:"歩み",
      body:[
        { t:"timeline",
          items:[
            { year:{ en:"Meiji era", ja:"明治", zh:"明治" },
              title:{ en:"Arrival", ja:"伝来", zh:"傳入" },
              text:{
                en:"The Western guitar arrives with other European instruments; it remains a curiosity for decades.",
                ja:"西洋のギターがほかのヨーロッパの楽器とともに入る。何十年も珍しいもののままである。",
                zh:"西洋吉他隨其他歐洲樂器傳入；數十年間仍屬珍奇之物。" } },
            { year:"1929",
              title:{ en:"Segovia", ja:"セゴビア", zh:"塞哥維亞" },
              text:{
                en:"The Spanish guitarist Andrés Segovia makes his first tour of Japan, inspiring a generation of classical players.",
                ja:"スペインのギタリスト、アンドレス・セゴビアが初めて日本を演奏旅行し、一世代のクラシックの弾き手を鼓舞する。",
                zh:"西班牙吉他家安德烈斯・塞哥維亞首度巡演日本，啟發了一整代古典吉他演奏者。" } },
            { year:"1930s",
              title:{ en:"Popular song", ja:"流行歌", zh:"流行歌曲" },
              text:{
                en:"Songs written on and for the guitar become national hits; the instrument enters ordinary homes.",
                ja:"ギターで、ギターのために書かれた歌が全国で流行り、楽器がふつうの家に入る。",
                zh:"以吉他創作、為吉他而寫的歌曲成為全國熱門曲，吉他走入尋常人家。" } },
            { year:"1945",
              title:{ en:"Yairi moves to Kani", ja:"ヤイリ、可児へ", zh:"矢入遷往可兒" },
              text:{
                en:"Fleeing air raids on Nagoya, the Yairi workshop relocates to Kani in Gifu.",
                ja:"名古屋の空襲を逃れ、矢入の工房が岐阜の可児に移る。",
                zh:"為躲避名古屋空襲，矢入工坊遷至岐阜可兒。" } },
            { year:"1959–62",
              title:{ en:"Takamine at Sakashita", ja:"坂下のタカミネ", zh:"坂下的 Takamine" },
              text:{
                en:"A guitar workshop founded at Sakashita, now part of Nakatsugawa, takes the name of the local mountain, Takamine, in 1962.",
                ja:"いまは中津川市の一部である坂下で創業した工房が、一九六二年に地元の山の名、高峰を名乗る。",
                zh:"在今屬中津川市的坂下創立的吉他工坊，於 1962 年以當地山名「高峰」為名。" } },
            { year:"1965",
              title:{ en:"The electric boom", ja:"エレキブーム", zh:"電吉他熱潮" },
              text:{
                en:"Tours by American instrumental bands set off a craze for electric guitars; dozens of Japanese factories spring up to meet it.",
                ja:"アメリカのインストゥルメンタルのバンドの来日がエレキギターの熱狂を起こし、それに応えて何十もの日本の工場が生まれる。",
                zh:"美國器樂樂團來日巡演，掀起電吉他狂熱；數十家日本工廠應運而生。" } },
            { year:{ en:"Late 1960s–70s", ja:"一九六〇年代末〜七〇年代", zh:"1960 年代末至 70 年代" },
              title:{ en:"The folk boom", ja:"フォークブーム", zh:"民謠熱潮" },
              text:{
                en:"Japanese folk and singer-songwriter music makes the steel-string acoustic the instrument of a generation; Yairi and Takamine grow rapidly and begin exporting.",
                ja:"日本のフォークとシンガーソングライターの音楽が、スチール弦のアコースティックを一世代の楽器にする。ヤイリとタカミネは急成長し、輸出を始める。",
                zh:"日本民謠與創作歌手音樂讓鋼弦木吉他成為一整代人的樂器；Yairi 與 Takamine 迅速成長並開始外銷。" } },
            { year:"1980s",
              title:{ en:"The strong yen", ja:"円高", zh:"日圓升值" },
              text:{
                en:"Exports become expensive; mass production moves to Korea, Taiwan and later China, while Japanese makers move up-market.",
                ja:"輸出は高くつくようになり、大量生産は韓国、台湾、のちに中国へ移り、日本のメーカーは高級へと向かう。",
                zh:"外銷變得昂貴；量產轉移至韓國、台灣，後來是中國，日本廠商則轉向高階市場。" } },
            { year:"2020s",
              title:{ en:"A smaller, higher-end industry", ja:"小さく、上質な産業", zh:"更小而更高階的產業" },
              text:{
                en:"Japan produces around 90,000 guitars a year (2023), about two-fifths of the 2007 level; the prefecture of Nagano accounts for about half of shipment value (53.7% in 2024), and Gifu's two makers and many small luthiers serve a premium market at home and abroad.",
                ja:"日本のギターの生産は年およそ九万本（二〇二三年）で、二〇〇七年の五分の二ほど。出荷額のおよそ半分は長野県が占め（二〇二四年は53.7%）、岐阜の二つのメーカーと多くの小さな製作家は、国内外の上質な市場に向けてつくる。",
                zh:"日本年產約 9 萬把吉他（2023），約為 2007 年水準的五分之二；長野縣約占出貨額一半（2024 年為 53.7%），岐阜兩大廠與眾多小型製琴師則服務國內外的高階市場。" } }
          ] },
        { t:"note",
          label:{ en:"Why central Japan?", ja:"なぜ中部日本か", zh:"為何是日本中部？" },
          text:{
            en:"The guitar industry grew up in a band of central Japan — Nagoya and its hinterland, Gifu, and the Matsumoto and Kiso areas of Nagano — that combined woodworking towns full of skilled carpenters and joiners, a tradition of violin and instrument making begun by Suzuki Violin in Nagoya, and good transport to markets and ports. Takamine's founder chose Sakashita in 1959 partly because, as a woodworking village, it had many craftsmen to hire.",
            ja:"ギター産業は中部日本の帯——名古屋とその後背地、岐阜、長野の松本と木曽——で育った。腕の良い大工や建具師にあふれた木工の町々、名古屋の鈴木バイオリンが始めたバイオリンと楽器づくりの伝統、そして市場や港への良い交通がそろっていた。タカミネの創業者が一九五九年に坂下を選んだのは、木工の村で雇える職人が多かったからでもあった。",
            zh:"吉他產業成長於日本中部的一條帶狀地區——名古屋及其腹地、岐阜，以及長野的松本與木曾一帶——這裡結合了充滿熟練木匠與建具師的木工城鎮、由名古屋鈴木小提琴開創的提琴與樂器製作傳統，以及通往市場與港口的便利交通。Takamine 創辦人 1959 年選擇坂下，部分原因就是這個木工村落有許多工匠可聘用。" } }
      ] },
    { t:"section",
      id:"box",
      title:{ en:"The box: plates, linings and blocks", ja:"胴：板・ライニング・ブロック", zh:"琴箱：板材、內襯條與木塊" },
      jp:"胴の構造",
      body:[
        { t:"p",
          text:{
            en:"The body of an acoustic guitar is a closed box of wooden plates only two or three millimetres thick, held in shape by a light internal frame. It has two jobs that pull against each other. It must be free enough to vibrate — the top above all, but also the back and the air inside — and rigid enough to carry the pull of the strings, day and night, for decades. Every part of the box is a small compromise between those two demands, and most of the parts are invisible from outside.",
            ja:"アコースティックギターの胴は、厚さわずか二〜三ミリの木の板を軽い内部の骨組みで形に保った、閉じた箱である。この箱には引き合う二つの務めがある。振動できるほど自由であること——とくに表板、そして裏板と内部の空気も——と、弦の引く力を昼も夜も何十年も支えられるほど剛いことである。箱のどの部分も、この二つの要求のあいだの小さな妥協であり、その多くは外からは見えない。",
            zh:"木吉他的琴身是一個以僅 2–3 公釐厚的木板構成、由輕巧內部骨架維持形狀的封閉箱體。它肩負兩項相互拉扯的任務：必須自由到足以振動——尤其是面板，也包括背板與內部空氣——又必須剛硬到能日夜承受琴弦拉力達數十年。琴箱的每個部位，都是這兩種要求之間的小小折衷，而且大多從外面看不見。" } },
        { t:"defs",
          items:[
            { term:{ en:"Top (soundboard)", ja:"表板（響板）", zh:"面板（響板）" },
              jp:"トップ",
              def:{
                en:"The main radiator of sound: two bookmatched halves of quartersawn spruce or cedar, typically about 2.5–3 mm thick on a steel-string guitar and somewhat thinner on a classical. Many steel-string tops are given a slight dome when the braces are glued, which adds stiffness and resists the sinking in front of the bridge. Its bracing is the subject of <a href=\"bracing.html\">Tops &amp; Bracing</a>.",
                ja:"音を放つ主役。柾目のスプルースかシダーをブックマッチにした二枚からなり、厚さはスチール弦ギターでふつう二・五〜三ミリほど、クラシックではいくらか薄い。スチール弦の表板の多くは、力木を貼るときにわずかなふくらみをつけ、剛さを増してブリッジの前の沈みに抗う。力木については<a href=\"bracing.html\">表板と力木</a>の頁で述べる。",
                zh:"聲音的主要輻射體：由兩片對開的徑切雲杉或雪松組成，鋼弦吉他通常約 2.5–3 公釐厚，古典吉他略薄。許多鋼弦面板在黏貼音梁時會做出些微拱度，以增加剛性並抵抗琴橋前方的下陷。其音梁見<a href=\"bracing.html\">面板與音梁</a>一頁。" } },
            { term:{ en:"Back", ja:"裏板", zh:"背板" },
              jp:"バック",
              def:{
                en:"Usually two bookmatched pieces of a denser hardwood, joined down the middle and covered on the inside by a thin cross-grain strip that reinforces the seam. On a steel-string guitar the back is stiffened by a few straight braces running across it and is often arched slightly. It reflects some of the top's energy, but it also vibrates and radiates in its own right, especially in the low range.",
                ja:"ふつうは重めの広葉樹をブックマッチにした二枚で、中央で接ぎ、内側を繊維と直角の細い帯で覆って継ぎ目を補強する。スチール弦ギターの裏板は、横に渡した数本のまっすぐな力木で剛くし、しばしばわずかにふくらませる。表板のエネルギーの一部を反射するが、それ自体も振動し、とくに低音域で音を放つ。",
                zh:"通常由兩片對開、較緻密的硬木組成，在中線拼接，內側以一條橫紋薄木條覆蓋接縫加以補強。鋼弦吉他的背板以數根橫向直音梁加固，且常略呈拱形。它會反射部分面板能量，但本身也會振動並輻射聲音，在低音域尤其明顯。" } },
            { term:{ en:"Sides (ribs)", ja:"側板", zh:"側板" },
              jp:"サイド",
              def:{
                en:"Two long strips, thinned to around 2 mm and bent with heat to the outline of the body. Together they form a stiff hoop that fixes the edges of the top and back. Some modern makers laminate or double the sides so that they move less, leaving the vibration to the plates — and less of it is soaked up by the player's body.",
                ja:"二枚の細長い板で、二ミリ前後に薄くし、熱で胴の輪郭に曲げる。合わせて剛い輪となり、表板と裏板の縁を固定する。現代のつくり手には、側板を貼り合わせたり二重にしたりして動きにくくし、振動を板にまかせる者もいる。弾き手の体に吸われる振動も減る。",
                zh:"兩條長木片，削薄至約 2 公釐，再以加熱彎成琴身輪廓。兩者合成一個剛硬的環，固定面板與背板的邊緣。部分現代工匠會把側板做成層壓或雙層，讓它少動一些，把振動留給上下板——被演奏者身體吸收的振動也較少。" } },
            { term:{ en:"Linings (kerfing)", ja:"ライニング", zh:"內襯條" },
              jp:"カーフィング",
              def:{
                en:"A side is too thin to glue a plate to its edge alone, so a narrow strip is glued all round the inside of each edge to widen the joint. Most steel-string linings are “kerfed” — sawn almost through at close intervals so that they bend easily to the curve. The Spanish tradition instead glues the top to the sides with dozens of small individual blocks, the <em>peones</em>.",
                ja:"側板は薄すぎて、その縁だけで板を接着することはできないので、それぞれの縁の内側に細い帯をぐるりと貼り、接着面を広げる。スチール弦ギターのライニングの多くは「カーフ」入り、つまり細かい間隔でほとんど切り離すまで鋸目を入れ、曲線に楽に沿うようにしてある。スペインの伝統では、代わりに<em>ペオネス</em>と呼ぶ何十もの小さな木片を一つずつ貼って表板と側板を接ぐ。",
                zh:"側板太薄，單靠其邊緣無法黏住面板或背板，因此要在每道邊緣內側黏一圈細木條以加寬接合面。鋼弦吉他的內襯條大多為「鋸口式」——以密集間距鋸到幾乎斷開，便能輕易順著曲線彎曲。西班牙傳統則改以數十塊稱為 <em>peones</em> 的小木塊逐一黏合面板與側板。" } },
            { term:{ en:"Neck block and end block", ja:"ネックブロックとエンドブロック", zh:"頸塊與尾塊" },
              jp:"ブロック",
              def:{
                en:"Solid blocks, usually of mahogany, where the two sides meet at each end of the body. The neck block receives the neck joint and takes the whole pull of the strings; the end block holds the end pin for the strap and, on an electro-acoustic, the output jack.",
                ja:"胴の両端で二枚の側板が出会うところに入れる、ふつうマホガニーの無垢のブロック。ネックブロックはネックの接合を受け、弦の引く力のすべてを担う。エンドブロックはストラップのためのエンドピンを、エレアコでは出力ジャックを支える。",
                zh:"位於琴身兩端、兩片側板相接處的實木塊，通常為桃花心木。頸塊承接琴頸接合並承受琴弦的全部拉力；尾塊固定掛背帶的尾釘，在電木吉他上則固定輸出插孔。" } },
            { term:{ en:"Bridge plate", ja:"ブリッジプレート", zh:"橋板" },
              jp:"駒の下",
              def:{
                en:"A thin hardwood plate, often maple or rosewood, glued under the top beneath the bridge. It spreads the bridge's load and stops the ball ends of steel strings from wearing through the soft spruce. A heavier plate adds mass and damping exactly where the top is driven, so its size is one more trade-off.",
                ja:"ブリッジの真下で表板の裏に貼る、薄い硬木の板で、しばしばメイプルかローズウッド。ブリッジの荷重を広げ、スチール弦のボールエンドがやわらかいスプルースをすり減らすのを防ぐ。重い板は、表板が駆動されるまさにその場所に質量と減衰を加えるので、その大きさもまた一つの引き換えである。",
                zh:"黏在面板內側、琴橋正下方的薄硬木板，常用楓木或玫瑰木。它分散琴橋的負荷，並防止鋼弦的球端磨穿柔軟的雲杉。較重的橋板會在面板受驅動之處增加質量與阻尼，因此其大小又是一項取捨。" } },
            { term:{ en:"Binding and purfling", ja:"バインディングとパーフリング", zh:"包邊與飾線" },
              jp:"縁巻き",
              def:{
                en:"Strips of plastic or wood set into a rebate around the edges where the plates meet the sides. Binding protects the most vulnerable part of the box — the exposed end grain at its edges — from knocks, and seals it against moisture; K. Yairi applies it by hand for exactly those reasons. Purfling is the thinner decorative line inlaid beside it.",
                ja:"板と側板が出会う縁の段に入れる、プラスチックや木の帯。バインディングは箱で最も傷みやすいところ——縁に出ている木口——を打撃から守り、湿気を封じる。ヤイリギターはまさにその理由から手で巻く。パーフリングはその脇に象嵌する、より細い飾りの線である。",
                zh:"嵌入上下板與側板交接處邊緣凹槽的塑膠或木條。包邊保護琴箱最脆弱的部分——邊緣外露的端面木紋——免受碰撞，並阻隔濕氣；K.Yairi 正是基於這些理由以手工包邊。飾線則是嵌在包邊旁、更細的裝飾線條。" } },
            { term:{ en:"Soundhole and rosette", ja:"サウンドホールとロゼッタ", zh:"音孔與音孔花" },
              jp:"響孔",
              def:{
                en:"The soundhole is the port through which the air inside the body resonates (see <a href=\"sound.html\">Wood &amp; Sound</a>); its diameter helps set the pitch of that low air resonance. The rosette, an inlaid ring of wood, shell or plastic, is decorative but also stiffens the cross-grain edge of the hole against cracks. Classical rosettes are mosaics, assembled from tiny tiles sliced off bundles of coloured wood strips.",
                ja:"サウンドホールは、胴のなかの空気が共鳴するための口である（<a href=\"sound.html\">木と音</a>を参照）。その直径は、低い空気の共鳴の高さを決める一因となる。ロゼッタは木や貝、プラスチックを象嵌した輪で、飾りであると同時に、穴の縁の繊維と直角の部分を剛くして割れを防ぐ。クラシックのロゼッタはモザイクで、色のついた木の細棒を束ねて薄く切った小さな片を組み上げる。",
                zh:"音孔是琴身內空氣共振的出入口（見<a href=\"sound.html\">木與聲音</a>）；其直徑是決定此低頻空氣共振音高的因素之一。音孔花是以木材、貝殼或塑膠鑲成的環，既是裝飾，也能加強孔緣橫紋部分以防開裂。古典吉他的音孔花是馬賽克，由彩色木條束切下的細小方塊拼成。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: K. Yairi, “How a Yairi guitar is made” (binding); general construction practice.",
            ja:"出典：ヤイリギター「ヤイリギターができるまで」（バインディング）、一般的な製作法。",
            zh:"資料來源：K.Yairi〈Yairi 吉他的誕生〉（包邊）；一般製作做法。" } }
      ] },
    { t:"section",
      id:"neck",
      title:{ en:"Neck, fingerboard and frets", ja:"ネック・指板・フレット", zh:"琴頸、指板與琴格" },
      jp:"ネックまわり",
      body:[
        { t:"p",
          text:{
            en:"The neck is a wooden beam held at one end and loaded at the other with a pull of roughly seventy kilograms, yet it must stay straight to within a fraction of a millimetre and feel good in the hand. It is traditionally of mahogany or maple — the woods and their Japanese alternatives are compared in <a href=\"tonewoods.html\">Tonewoods</a> — and it carries three things that decide how a guitar plays: the reinforcement inside it, the fingerboard on top and the frets set into that.",
            ja:"ネックは、一方の端を固定され、もう一方におよそ七十キロの引く力を受ける木の梁だが、一ミリに満たない精度でまっすぐを保ち、手に心地よくなければならない。伝統的にはマホガニーかメイプルで——木と日本の代替材は<a href=\"tonewoods.html\">音響材</a>でくらべる——、ギターの弾き心地を決める三つのものを担う。なかの補強、上の指板、そこに打ちこむフレットである。",
            zh:"琴頸是一根一端固定、另一端承受約七十公斤拉力的木樑，卻必須保持筆直到零點幾公釐，握起來還要順手。它傳統上以桃花心木或楓木製作——各種木材與日本替代材的比較見<a href=\"tonewoods.html\">音木</a>——並承載三樣決定吉他手感的東西：內部的補強、上方的指板，以及嵌入指板的琴格。" } },
        { t:"defs",
          items:[
            { term:{ en:"One-piece neck or scarf joint", ja:"一本ネックとスカーフジョイント", zh:"一體成形琴頸與斜接" },
              jp:"ヘッドの角度",
              def:{
                en:"The headstock is angled back from the neck to press the strings onto the nut. Carved from a single piece, the angled headstock needs a thick blank and leaves short grain across the bend — the place where a dropped guitar most often breaks. A scarf joint glues the headstock on along a long diagonal instead, saving wood and running the grain along the headstock; the heel is likewise often built up from stacked blocks. Some makers add a carved ridge, the volute, behind the nut to strengthen the transition.",
                ja:"ヘッドはネックから後ろに傾け、弦をナットに押しつける。一本の材から削り出すと、傾いたヘッドには厚い材が要り、曲がり目に繊維の短いところが残る——落としたギターが最も折れやすい場所である。スカーフジョイントは代わりに長い斜めの面でヘッドを接ぎ、材を節約し、繊維をヘッドに沿わせる。ヒールも同じく、ブロックを積み重ねてつくることが多い。ナットの裏に、ボリュートと呼ぶ削り出しの盛り上がりを残して移り目を補強するつくり手もいる。",
                zh:"琴頭從琴頸向後傾斜，讓琴弦壓在上弦枕上。若以整塊木料雕出，傾斜的琴頭需要很厚的胚料，而且轉折處會留下短紋——正是吉他摔落時最常斷裂的地方。斜接則改以一道長斜面把琴頭膠合上去，既省料又讓木紋順著琴頭延伸；琴跟也常以木塊疊合而成。有些工匠會在上弦枕背後留一道雕出的隆起（稱 volute），加強這段過渡。" } },
            { term:{ en:"Truss rod", ja:"トラスロッド", zh:"琴頸調整桿" },
              jp:"補強",
              def:{
                en:"The first patent for an adjustable rod was applied for in 1921 by Thaddeus McHugh, a Gibson employee. Martin, by contrast, reinforced its necks with an ebony bar from 1922, a steel T-bar from 1934 and a square steel tube from 1967, and adopted an adjustable rod only in 1985. Modern “dual-action” rods can bend the neck either way. Many classical guitars, with their lower string tension, still have no adjustable rod at all. How owners and repairers adjust the rod is covered in <a href=\"guitarcare.html\">Caring for a Guitar</a>.",
                ja:"調整できるロッドの最初の特許は、一九二一年、ギブソンの社員サディアス・マクヒューが出願した。対してマーティンは、一九二二年からエボニーの棒で、一九三四年から鋼のTバーで、一九六七年から角形の鋼管でネックを補強し、調整式のロッドを採り入れたのは一九八五年になってからである。現代の「デュアルアクション」のロッドは、ネックをどちらの向きにも曲げられる。弦の張力の低いクラシックギターには、いまも調整式のロッドをもたないものが多い。持ち主や修理人がどう調整するかは<a href=\"guitarcare.html\">ギターの手入れ</a>で述べる。",
                zh:"第一項可調式調整桿專利，是 Gibson 員工 Thaddeus McHugh 於 1921 年提出申請的。相對地，Martin 自 1922 年起以黑檀木條補強琴頸，1934 年起改用鋼製 T 型條，1967 年起改用方形鋼管，直到 1985 年才採用可調式調整桿。現代的「雙向」調整桿可讓琴頸往任一方向彎曲。弦張力較低的古典吉他，至今仍有許多完全沒有可調式調整桿。車主與維修師如何調整，見<a href=\"guitarcare.html\">吉他保養</a>。" } },
            { term:{ en:"Fingerboard", ja:"指板", zh:"指板" },
              jp:"フィンガーボード",
              def:{
                en:"A board of very hard, dense wood — traditionally ebony or rosewood — glued to the face of the neck. It is flat on a classical guitar and gently cambered across its width on most steel-string guitars, to suit a hand that frets chords with the fingers curved. Inlays of shell or plastic mark the positions; on a steel-string guitar the board continues over the top of the body, where it is glued down.",
                ja:"ネックの表に貼る、非常に硬く重い木——伝統的にはエボニーかローズウッド——の板。クラシックギターでは平らで、指を曲げて和音を押さえる手に合うよう、スチール弦ギターの多くでは幅方向にゆるやかな丸みをつける。貝やプラスチックの象嵌が位置を示す。スチール弦ギターでは指板が胴の表板の上までのび、そこで接着される。",
                zh:"黏在琴頸正面、以極硬而緻密的木材——傳統上是黑檀或玫瑰木——製成的板。古典吉他的指板是平的；大多數鋼弦吉他則在寬度方向做出緩和弧度，配合手指彎曲按和弦的手形。貝殼或塑膠鑲嵌標示把位；鋼弦吉他的指板會延伸到琴身面板上方並黏在那裡。" } },
            { term:{ en:"Frets", ja:"フレット", zh:"琴格" },
              jp:"フレット",
              def:{
                en:"Modern fret wire is T-shaped in section: a rounded crown on which the string stops, and a thin barbed tang that is pressed or hammered into a sawn slot and grips it. Martin itself changed from solid rectangular “bar frets” to T-frets in 1934. Most frets are of nickel silver, a copper–nickel–zinc alloy that contains no silver; stainless steel lasts far longer but is harder to cut, level and polish.",
                ja:"現代のフレット線は断面がT字形である。弦が止まる丸い頭と、鋸で切った溝に押しこむか打ちこんで食いつかせる、かえしのついた薄い足からなる。マーティン自身も一九三四年に、角形の無垢の「バーフレット」からTフレットに切り替えた。フレットの多くはニッケルシルバーで、銅・ニッケル・亜鉛の合金であり、銀は含まない。ステンレスははるかに長もちするが、切るのも、そろえるのも、磨くのも難しい。",
                zh:"現代琴格線的斷面呈 T 形：上方是讓弦停止的圓弧頂，下方是帶倒鉤的薄腳，以壓入或敲入的方式卡進鋸出的槽中。Martin 本身於 1934 年從實心矩形的「條狀琴格」改用 T 形琴格。琴格多為鎳銀——一種銅、鎳、鋅合金，並不含銀；不鏽鋼耐用得多，但較難裁切、整平與拋光。" } },
            { term:{ en:"The rule of 18", ja:"十八の法則", zh:"「十八法則」" },
              jp:"フレット割り",
              def:{
                en:"Fret positions follow the twelfth-root-of-two rule set out in <a href=\"making.html\">How a Guitar Is Made</a>. For centuries makers used a shortcut instead: each fret was placed one-eighteenth of the remaining string length from the one before. That puts the twelfth fret about 2.3 mm too close to the nut on a 645 mm scale, so the octave plays some 12 cents flat (our calculation) — which is why modern makers use the exact constant, 17.817.",
                ja:"フレットの位置は、<a href=\"making.html\">ギターができるまで</a>で述べた二の十二乗根の規則にしたがう。何世紀ものあいだ、つくり手は代わりに近道を使った。残りの弦長の十八分の一ずつ、前のフレットから次のフレットを置くのである。するとスケール六四五ミリでは十二フレットがナットに約二・三ミリ近すぎ、オクターブはおよそ十二セント低くなる（当方の計算）。現代のつくり手が正確な定数一七・八一七を使うのはそのためである。",
                zh:"琴格位置遵循<a href=\"making.html\">一把吉他的誕生</a>一頁所述的二的十二次方根規則。數百年來工匠卻用一條捷徑：每一格都放在距前一格「剩餘弦長的十八分之一」處。如此一來，在 645 公釐弦長上，第 12 格會比正確位置靠近上弦枕約 2.3 公釐，八度音偏低約 12 音分（本書計算）——這就是現代工匠改用精確常數 17.817 的原因。" } }
          ] },
        { t:"table",
          caption:{
            en:"Common scale lengths (the nominal vibrating string length) and where the 12th fret falls",
            ja:"よく使われるスケール長（弦の名目上の振動長）と十二フレットの位置",
            zh:"常見弦長（名義振動弦長）與第 12 格位置" },
          cols:[
            { en:"Scale", ja:"スケール", zh:"弦長" },
            { en:"Length", ja:"長さ", zh:"長度" },
            { en:"12th fret from nut", ja:"ナットから十二フレット", zh:"上弦枕至第 12 格" },
            { en:"Typical use", ja:"おもな用途", zh:"典型用途" }
          ],
          rows:[
            [
              { en:"Classical", ja:"クラシック", zh:"古典" },
              "650 mm",
              "325.0 mm",
              {
                en:"Concert classical guitars; the standard since Torres",
                ja:"コンサート用クラシックギター。トーレス以来の標準",
                zh:"演奏會古典吉他；自托雷斯以來的標準" }
            ],
            [
              { en:"Fender", ja:"フェンダー", zh:"Fender" },
              "25.5 in = 647.7 mm",
              "323.9 mm",
              { en:"Many solid-body electric guitars", ja:"多くのソリッドボディのエレキギター", zh:"許多實心電吉他" }
            ],
            [
              { en:"Martin long scale", ja:"マーティンのロングスケール", zh:"Martin 長弦長" },
              "25.4 in = 645.2 mm",
              "322.6 mm",
              { en:"Dreadnought and OM", ja:"ドレッドノートとOM", zh:"D 桶與 OM" }
            ],
            [
              { en:"Martin short scale", ja:"マーティンのショートスケール", zh:"Martin 短弦長" },
              "24.9 in = 632.5 mm",
              "316.2 mm",
              { en:"0, 00 and, from 1934, the 000", ja:"0、00、一九三四年からは000", zh:"0、00，以及自 1934 年起的 000" }
            ],
            [
              { en:"Gibson", ja:"ギブソン", zh:"Gibson" },
              "24.75 in = 628.7 mm",
              "314.3 mm",
              { en:"Many Gibson acoustics and electrics", ja:"多くのギブソンのアコースティックとエレキ", zh:"許多 Gibson 木吉他與電吉他" }
            ]
          ] },
        { t:"p",
          text:{
            en:"A difference of twenty millimetres sounds small, but at the same pitch a longer string needs more tension — tension rises with the square of the length, so 645 mm needs about 5 per cent more than 629 mm for the same string. A long-scale guitar therefore feels firmer under the fingers and is often described as having a stronger, more “open” attack, while a shorter scale feels slinkier, bends more easily and spaces the frets a little closer for small hands.",
            ja:"二十ミリの差は小さく聞こえるが、同じ音の高さでは長い弦ほど大きな張力が要る。張力は長さの二乗に比例して増すので、同じ弦なら六四五ミリは六二九ミリよりおよそ五パーセント多く要る。だからロングスケールのギターは指にしっかりとした手ごたえがあり、強く「開いた」立ち上がりをもつとよく言われる。短いスケールはやわらかく、チョーキングしやすく、フレットの間隔もいくらか詰まって小さな手に向く。",
            zh:"二十公釐的差距聽起來很小，但在相同音高下，弦越長所需張力越大——張力與長度的平方成正比，因此同一根弦在 645 公釐上約比在 629 公釐上多需 5% 的張力。所以長弦長吉他按起來較緊實，常被形容起音更強、更「開闊」；短弦長則手感較軟、較易推弦，琴格間距也略窄，適合手較小的人。" } },
        { t:"tiny",
          text:{
            en:"Sources: Wikipedia, “Truss rod”; vintagemartin.com, “Neck and neck” (Martin reinforcement and frets); Classical Guitar Magazine (Torres scale); Acoustic Guitar, guide to body shapes (Martin scales); Mottola, “Was the rule of 18 good enough?”. Fret and octave figures calculated.",
            ja:"出典：Wikipedia「Truss rod」、vintagemartin.com「Neck and neck」（マーティンの補強とフレット）、Classical Guitar Magazine（トーレスのスケール）、Acoustic Guitar誌のボディ形状ガイド（マーティンのスケール）、モットーラ「十八の法則は十分だったか」。フレット位置とオクターブの値は計算。",
            zh:"資料來源：Wikipedia〈Truss rod〉；vintagemartin.com〈Neck and neck〉（Martin 補強與琴格）；Classical Guitar Magazine（托雷斯弦長）；Acoustic Guitar 雜誌琴身形狀指南（Martin 弦長）；Mottola〈十八法則夠好嗎？〉。琴格與八度數值為計算所得。" } }
      ] },
    { t:"section",
      id:"bridge",
      title:{ en:"Nut, saddle, bridge and tuners", ja:"ナット・サドル・ブリッジ・糸巻き", zh:"上弦枕、下弦枕、琴橋與弦鈕" },
      jp:"弦の両端",
      body:[
        { t:"p",
          text:{
            en:"Each string vibrates between two hard points: the nut at the head end and the saddle on the bridge. Everything outside that speaking length — the headstock and tuners beyond the nut, the pins or knots behind the saddle — only has to hold the string still and in tune. On a steel-string guitar the bridge is a bar of ebony or rosewood glued to the top, and the strings are anchored by tapered pins pushed through bridge, top and bridge plate, so that the ball ends lodge against the plate inside. A classical bridge has no pins: each nylon string is looped round and tied off on a tie-block at the back. In both, the string should cross the saddle at a good angle; if the break angle is too shallow the string presses lightly, drives the top weakly and may buzz.",
            ja:"どの弦も二つの硬い点のあいだで振動する。ヘッド側のナットと、ブリッジの上のサドルである。この振動する長さの外側——ナットの先のヘッドと糸巻き、サドルの後ろのピンや結び目——は、弦を動かさず、音程を保てばよい。スチール弦ギターのブリッジは表板に接着したエボニーかローズウッドの棒で、弦はブリッジ、表板、ブリッジプレートを貫くテーパーのついたピンで留め、ボールエンドが内側のプレートに引っかかる。クラシックのブリッジにはピンがない。ナイロン弦はそれぞれ後ろのタイブロックに回して結ぶ。どちらでも、弦はサドルをほどよい角度で越えねばならない。折れ角が浅すぎると弦の押す力が弱く、表板を弱く駆動し、びりつくこともある。",
            zh:"每根弦都在兩個硬點之間振動：琴頭端的上弦枕，以及琴橋上的下弦枕。振動長度以外的一切——上弦枕外的琴頭與弦鈕、下弦枕後的弦釘或繩結——只需把弦固定住並保持音準。鋼弦吉他的琴橋是一條黏在面板上的黑檀或玫瑰木，琴弦以錐形弦釘穿過琴橋、面板與橋板固定，讓球端卡在內側的橋板上。古典吉他的琴橋沒有弦釘：每根尼龍弦都繞過後方的綁弦座打結固定。兩者的琴弦都須以適當角度越過下弦枕；若折角太淺，弦的下壓力弱，驅動面板無力，還可能產生雜音。" } },
        { t:"defs",
          items:[
            { term:{ en:"Compensation", ja:"補正", zh:"補償" },
              jp:"オクターブ調整",
              def:{
                en:"If the saddle sat exactly at the theoretical scale length, fretted notes would play sharp. Pressing a string down to a fret stretches it slightly, raising its pitch, and a real string is stiff, which makes it behave as if it were a little shorter than it is; both effects grow with string thickness and with the height of the action. The saddle is therefore set a little behind the theoretical point and slanted so that the bass strings are longer than the trebles. A compensated saddle goes further, shaping a separate contact point for each string — on a steel-string set with a plain G, the B string's point steps back. The maker checks the result by comparing the harmonic at the twelfth fret with the fretted note.",
                ja:"サドルが理論上のスケール長ちょうどにあると、フレットを押さえた音は高くなる。弦をフレットまで押し下げるとわずかに伸びて音が上がり、また実際の弦には剛さがあって、実際より少し短いかのようにふるまう。どちらの効果も弦が太いほど、弦高が高いほど大きい。だからサドルは理論上の点より少し後ろに据え、低音弦が高音弦より長くなるよう斜めにする。補正サドルはさらに進んで、弦ごとに別々の接点を削り出す。三弦がプレーン弦のスチール弦セットでは、二弦の接点が一段後ろに下がる。つくり手は、十二フレットのハーモニクスと押さえた音をくらべて結果を確かめる。",
                zh:"如果下弦枕恰好位於理論弦長處，按弦的音就會偏高。把弦按到琴格上會讓弦略微拉長而使音高上升；而真實的弦具有剛性，表現得彷彿比實際略短。這兩種效應都隨弦的粗細與弦高增加而變大。因此下弦枕要設在理論點稍後方並斜置，讓低音弦比高音弦長。補償式下弦枕更進一步，為每根弦各自修出接觸點——在第三弦為素弦的鋼弦組上，第二弦的接觸點要往後退一階。工匠以比較第 12 格泛音與按弦音來檢查結果。" } },
            { term:{ en:"Nut", ja:"ナット", zh:"上弦枕" },
              jp:"上駒",
              def:{
                en:"A small block of bone or a synthetic substitute, slotted to space the strings and set their height over the first fret. Slots cut too deep make open strings buzz; too shallow and the first frets are hard to press and play sharp. The nut also fixes the width of the neck: about 52 mm on a classical guitar, typically around 43–45 mm on a steel-string.",
                ja:"骨か合成の代替材の小さなブロックで、溝を切って弦の間隔を決め、一フレット上の弦の高さを決める。溝が深すぎると開放弦がびりつき、浅すぎると最初のフレットが押さえにくく、音が高くなる。ナットはネックの幅も決める。クラシックギターでおよそ五十二ミリ、スチール弦ギターでふつう四十三〜四十五ミリほどである。",
                zh:"一小塊骨質或合成替代材，開有溝槽以決定弦距與第一格上方的弦高。溝槽切得太深，空弦會打弦；太淺，則前幾格難按且音偏高。上弦枕也決定琴頸寬度：古典吉他約 52 公釐，鋼弦吉他通常約 43–45 公釐。" } },
            { term:{ en:"Headstock and tuners", ja:"ヘッドと糸巻き", zh:"琴頭與弦鈕" },
              jp:"ペグ",
              def:{
                en:"Classical guitars keep the old slotted headstock, with the strings wound on rollers set across two open slots. Steel-string guitars use a solid headstock with individual geared machine heads: a worm on the button shaft turns a gear on the string post, so that a full turn of the button moves the post only a fraction of a turn and the string's pull cannot turn it back. Early guitars, like violins, had plain friction pegs.",
                ja:"クラシックギターは昔ながらのスロットヘッドを保ち、二つの開いた溝に渡したローラーに弦を巻く。スチール弦ギターは穴のない板のヘッドに一つずつの歯車式の糸巻きをつける。つまみの軸のウォームが弦を巻く軸の歯車を回すので、つまみを一回転させても軸はわずかしか回らず、弦の引く力で逆に回されることもない。初期のギターはバイオリンと同じく、ただの摩擦のペグだった。",
                zh:"古典吉他保留傳統的開槽式琴頭，琴弦纏繞在橫跨兩道開口槽的滾軸上。鋼弦吉他則用實心琴頭配上個別的齒輪式弦鈕：旋鈕軸上的蝸桿帶動弦柱上的齒輪，旋鈕轉一整圈，弦柱只轉一小部分，琴弦的拉力也無法讓它倒轉。早期吉他與小提琴一樣，用的是單純靠摩擦固定的弦軸。" } }
          ] }
      ] },
    { t:"section",
      id:"shapes",
      title:{ en:"Body shapes", ja:"胴のかたち", zh:"琴身形狀" },
      jp:"ボディシェイプ",
      body:[
        { t:"p",
          text:{
            en:"Most steel-string body shapes are still named after models that one American company, C. F. Martin of Nazareth, Pennsylvania, introduced between the nineteenth century and the 1930s, and after the larger guitars that Gibson built in answer. The size of the box sets the pitch of its main resonances and how much air it can move, so the shapes are also a rough guide to sound: small bodies are focused and quick, large ones louder and deeper in the bass. Japanese makers, including those in Gifu, build in all of these shapes, often under their own model names.",
            ja:"スチール弦ギターの胴のかたちの多くは、いまも、ペンシルベニア州ナザレスのアメリカの一社、C・F・マーティンが十九世紀から一九三〇年代にかけて出したモデルと、それに応えてギブソンがつくった大きなギターにちなんで呼ばれる。箱の大きさは主な共鳴の高さと動かせる空気の量を決めるので、かたちは音のおおまかな目安にもなる。小さな胴は焦点が定まって反応が速く、大きな胴は音量が大きく低音が深い。岐阜のつくり手を含む日本のメーカーは、これらすべてのかたちを、しばしば自社のモデル名でつくっている。",
            zh:"大多數鋼弦吉他的琴身形狀，至今仍以一家美國公司——賓州拿撒勒的 C. F. Martin——在十九世紀至 1930 年代推出的型號，以及 Gibson 為回應而打造的大型吉他命名。琴箱大小決定其主要共振的音高與能推動的空氣量，因此形狀也是聲音的粗略指標：小琴身集中而反應快，大琴身音量大、低音深。包括岐阜工匠在內的日本廠商，各種形狀都有生產，且常以自家型號命名。" } },
        { t:"figure",
          caption:{
            en:"Five body shapes drawn to one scale (schematic). Lower-bout widths of the Martin and Gibson shapes are from published specifications; the classical width varies by maker, and all other proportions are approximate.",
            ja:"同じ縮尺で描いた五つの胴のかたち（模式図）。マーティンとギブソンのかたちの下部の幅は公表された仕様による。クラシックの幅はつくり手で異なり、そのほかの比率はおおよそである。",
            zh:"以相同比例繪製的五種琴身形狀（示意圖）。Martin 與 Gibson 形狀的下部寬度取自公開規格；古典吉他的寬度依工匠而異，其餘比例皆為概略。" },
          svg:function(lang, L){
            var F = GIFU.fig, k = 0.30, s = '<svg viewBox="0 0 760 330" role="img">';
            s += F.text(20, 28, lang==="en"?"BODY SHAPES TO SCALE":(lang==="ja"?"胴のかたちを同じ縮尺で":"同比例琴身形狀"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            function P(x,y){ return x.toFixed(1)+' '+y.toFixed(1); }
            function body(cx, yb, Lw, U, W, H, wp, sq){
              Lw*=k; U*=k; W*=k; H*=k;
              var y0 = yb-H, ub = y0+0.22*H, wy = y0+wp*H, lb = y0+0.70*H, a = sq?0.97:0.62, c = sq?0.03:0.09;
              var d = 'M'+P(cx,y0);
              d += ' C'+P(cx+U/2*a,y0)+' '+P(cx+U/2,y0+c*H)+' '+P(cx+U/2,ub);
              d += ' C'+P(cx+U/2,ub+0.10*H)+' '+P(cx+W/2,wy-0.08*H)+' '+P(cx+W/2,wy);
              d += ' C'+P(cx+W/2,wy+0.08*H)+' '+P(cx+Lw/2,lb-0.16*H)+' '+P(cx+Lw/2,lb);
              d += ' C'+P(cx+Lw/2,lb+0.18*H)+' '+P(cx+Lw/2*0.55,yb)+' '+P(cx,yb);
              d += ' C'+P(cx-Lw/2*0.55,yb)+' '+P(cx-Lw/2,lb+0.18*H)+' '+P(cx-Lw/2,lb);
              d += ' C'+P(cx-Lw/2,lb-0.16*H)+' '+P(cx-W/2,wy+0.08*H)+' '+P(cx-W/2,wy);
              d += ' C'+P(cx-W/2,wy-0.08*H)+' '+P(cx-U/2,ub+0.10*H)+' '+P(cx-U/2,ub);
              d += ' C'+P(cx-U/2,y0+c*H)+' '+P(cx-U/2*a,y0)+' '+P(cx,y0)+' Z';
              var o = '<rect x="'+(cx-8)+'" y="'+(y0-26).toFixed(1)+'" width="16" height="27" fill="#E7DFD2" stroke="#7C6B52"/>';
              o += '<path d="'+d+'" fill="#EDE5D2" stroke="#7C6B52" stroke-width="1.3"/>';
              o += '<circle cx="'+cx+'" cy="'+(y0+0.31*H).toFixed(1)+'" r="'+(0.085*H).toFixed(1)+'" fill="#FBFAF7" stroke="#7C6B52"/>';
              o += '<line x1="'+(cx-Lw/2).toFixed(1)+'" y1="'+(lb).toFixed(1)+'" x2="'+(cx+Lw/2).toFixed(1)+'" y2="'+(lb).toFixed(1)+'" stroke="#8B857C" stroke-dasharray="3 3"/>';
              return o;
            }
            var yb = 232, rows = [
              { cx:82,  d:[343,262,215,465,0.42,false], n:{ en:"Parlour / size 0", ja:"パーラー／0", zh:"客廳型／0" }, w:"343 mm", y:{ en:"19th century", ja:"十九世紀", zh:"19 世紀" } },
              { cx:226, d:[360,280,235,485,0.42,false], n:{ en:"Classical", ja:"クラシック", zh:"古典" }, w:"≈ 350–370 mm", y:{ en:"Torres, 1850s–", ja:"トーレス、1850年代〜", zh:"托雷斯，1850 年代起" } },
              { cx:374, d:[381,286,235,492,0.42,false], n:{ en:"OM / 000", ja:"OM／000", zh:"OM／000" }, w:"381 mm", y:{ en:"OM 1929", ja:"OM 1929年", zh:"OM 1929 年" } },
              { cx:526, d:[397,292,270,508,0.40,true],  n:{ en:"Dreadnought", ja:"ドレッドノート", zh:"D 桶（Dreadnought）" }, w:"397 mm", y:{ en:"1916; Martin name 1931", ja:"1916年、マーティン名義1931年", zh:"1916 年；1931 年以 Martin 名義" } },
              { cx:680, d:[432,305,245,533,0.40,false], n:{ en:"Super jumbo", ja:"スーパージャンボ", zh:"超大型 Jumbo" }, w:"432 mm", y:{ en:"Gibson, 1938", ja:"ギブソン、1938年", zh:"Gibson，1938 年" } }
            ];
            for (var i=0;i<rows.length;i++){
              var r = rows[i], d = r.d;
              s += body(r.cx, yb, d[0], d[1], d[2], d[3], d[4], d[5]);
              s += F.text(r.cx, yb+22, L(r.n), { size:11.5, fill:"#201E1B", anchor:"middle", max:20, lh:13 });
              s += F.text(r.cx, yb+52, r.w, { size:10.5, fill:"#55504A", anchor:"middle" });
              s += F.text(r.cx, yb+68, L(r.y), { size:10, fill:"#8B857C", anchor:"middle", max:24, lh:12 });
            }
            s += F.text(740, 316, lang==="en"?"Dashed line: lower-bout width":(lang==="ja"?"破線：胴の下部の幅":"虛線：琴身下部寬度"), { size:10, fill:"#8B857C", anchor:"end" });
            return s + '</svg>';
          } },
        { t:"table",
          caption:{ en:"Common steel-string and classical body shapes", ja:"スチール弦とクラシックの主な胴のかたち", zh:"常見鋼弦與古典吉他琴身形狀" },
          cols:[
            { en:"Shape", ja:"かたち", zh:"形狀" },
            { en:"Origin", ja:"起こり", zh:"起源" },
            { en:"Lower bout", ja:"胴の下部の幅", zh:"下部寬度" },
            { en:"Character", ja:"性格", zh:"特色" }
          ],
          rows:[
            [
              { en:"Parlour; Martin sizes 0 and 00", ja:"パーラー、マーティンの0と00", zh:"客廳型；Martin 0 與 00" },
              {
                en:"Nineteenth-century parlour guitars; size 0 in Martin's line almost continuously since then",
                ja:"十九世紀のパーラーギター。0はそれ以来ほぼ途切れずにマーティンの品ぞろえにある",
                zh:"十九世紀的客廳吉他；0 號此後幾乎從未離開 Martin 產品線" },
              "13½ in (343 mm); 00 14⅛ in (359 mm)",
              {
                en:"Small, narrow-waisted, short scale; intimate and focused",
                ja:"小さく腰がくびれ、スケールが短い。親密で焦点が定まる",
                zh:"小巧、腰窄、弦長短；親密而集中" }
            ],
            [
              { en:"Orchestra Model (OM) and 000", ja:"オーケストラモデル（OM）と000", zh:"Orchestra Model（OM）與 000" },
              {
                en:"OM of 1929–1930: a 000 body with a 14-fret neck, requested by the banjoist Perry Bechtel",
                ja:"一九二九〜一九三〇年のOM。000の胴に十四フレット接合のネックで、バンジョー奏者ペリー・ベクテルの求めによる",
                zh:"1929–1930 年的 OM：000 琴身配 14 格接合琴頸，應班卓琴手 Perry Bechtel 要求而生" },
              "15 in (381 mm)",
              { en:"Balanced; favoured for fingerstyle", ja:"均整がとれ、指弾きに好まれる", zh:"均衡；指彈者所愛" }
            ],
            [
              { en:"Dreadnought", ja:"ドレッドノート", zh:"D 桶（Dreadnought）" },
              {
                en:"Built by Martin for the Oliver Ditson Company from 1916, named after the battleship type pioneered by HMS Dreadnought (1906); under Martin's own name from 1931; 14-fret neck from 1934",
                ja:"一九一六年からマーティンがオリバー・ディットソン社のためにつくり、HMSドレッドノート（一九〇六年）が切り開いた戦艦の型にちなんで名づけた。一九三一年からマーティン自身の名で、一九三四年から十四フレット接合のネック",
                zh:"自 1916 年起由 Martin 為 Oliver Ditson 公司製作，以 HMS 無畏號（1906 年）開創的戰艦類型命名；1931 年起以 Martin 自有名義推出；1934 年起改為 14 格接合琴頸" },
              "15⅝ in (397 mm)",
              {
                en:"Square shoulders, wide waist; loud, strong bass; the standard for strummed accompaniment",
                ja:"角ばった肩と広い腰。音量が大きく低音が強い。かき鳴らす伴奏の標準",
                zh:"方肩、寬腰；音量大、低音強；刷奏伴奏的標準" }
            ],
            [
              { en:"Jumbo", ja:"ジャンボ", zh:"Jumbo" },
              {
                en:"Gibson's round-shouldered Jumbo of 1934; the 17-inch Super Jumbo (SJ-200) of 1938",
                ja:"ギブソンの丸い肩のジャンボ（一九三四年）、十七インチのスーパージャンボ（SJ-200、一九三八年）",
                zh:"Gibson 1934 年的圓肩 Jumbo；1938 年的 17 吋超大 Jumbo（SJ-200）" },
              "17 in (432 mm)",
              { en:"Large lower bout, narrow waist; big, rich sound", ja:"大きな胴の下部と細い腰。大きく豊かな音", zh:"下部寬大、腰窄；聲音宏大飽滿" }
            ],
            [
              { en:"Classical", ja:"クラシック", zh:"古典" },
              {
                en:"Enlarged and standardised by Antonio de Torres in Spain from the 1850s",
                ja:"一八五〇年代からスペインのアントニオ・デ・トーレスが大きくし、定めた",
                zh:"1850 年代起由西班牙的安東尼奧・德・托雷斯加大並定型" },
              { en:"About 35–37 cm, varying by maker", ja:"およそ三五〜三七センチ。つくり手で異なる", zh:"約 35–37 公分，依工匠而異" },
              {
                en:"Light, fan-braced, 12-fret neck joint; warm and sweet",
                ja:"軽く、扇状力木、十二フレット接合。温かく甘い",
                zh:"輕盈、扇形音梁、12 格接合；溫暖甜美" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Acoustic Guitar, “A guide to identifying common acoustic guitar shapes and sizes”; Wikipedia, “Dreadnought (guitar type)”; vintagemartin.com, “The Martin Orchestra Model”; Wikipedia, “Antonio de Torres Jurado”.",
            ja:"出典：Acoustic Guitar誌「アコースティックギターのかたちと大きさの見分け方」、Wikipedia「Dreadnought (guitar type)」、vintagemartin.com「The Martin Orchestra Model」、Wikipedia「Antonio de Torres Jurado」。",
            zh:"資料來源：Acoustic Guitar 雜誌〈常見木吉他形狀與尺寸辨識指南〉；Wikipedia〈Dreadnought (guitar type)〉；vintagemartin.com〈The Martin Orchestra Model〉；Wikipedia〈Antonio de Torres Jurado〉。" } }
      ] },
    { t:"section",
      id:"electronics",
      title:{ en:"Pickups and preamps", ja:"ピックアップとプリアンプ", zh:"拾音器與前級" },
      jp:"エレアコの電気",
      body:[
        { t:"p",
          text:{
            en:"An electro-acoustic guitar is an ordinary acoustic guitar with a transducer that turns vibration into an electrical signal and a small preamplifier that makes the signal strong enough to send down a cable. The difficulty is that an acoustic guitar's sound is made by the whole box and the air around it, and no single sensor hears all of that. Each type of pickup listens to a different part of the instrument, which is why they sound different and why many systems combine two. The history of the under-saddle design that made the electro-acoustic a stage instrument, developed at Takamine in Nakatsugawa, is told on the <a href=\"takamine.html\">Takamine</a> page.",
            ja:"エレクトリック・アコースティックギターは、振動を電気の信号に変える変換器と、その信号をケーブルで送れるほど強くする小さなプリアンプをもつ、ふつうのアコースティックギターである。難しいのは、アコースティックギターの音が箱全体とそのまわりの空気でつくられ、一つのセンサーではそのすべてを聞けないことである。ピックアップの種類ごとに楽器の別の部分を聞くので、音が違い、二つを組み合わせる方式も多い。エレアコを舞台の楽器にしたアンダーサドル方式が中津川のタカミネで生まれた歴史は、<a href=\"takamine.html\">タカミネ</a>の頁で述べる。",
            zh:"電木吉他就是一把普通木吉他，加上一個把振動轉為電訊號的換能器，以及一個把訊號放大到足以經導線傳送的小型前級。困難在於，木吉他的聲音由整個琴箱及其周圍空氣共同產生，沒有任何單一感測器能聽到全部。每種拾音器各自聆聽樂器的不同部分，所以聲音各異，許多系統也因此結合兩種。讓電木吉他成為舞台樂器、在中津川 Takamine 誕生的弦枕下拾音設計，其歷史見 <a href=\"takamine.html\">Takamine</a> 一頁。" } },
        { t:"defs",
          items:[
            { term:{ en:"Under-saddle piezo", ja:"アンダーサドル・ピエゾ", zh:"弦枕下壓電拾音器" },
              jp:"圧電",
              def:{
                en:"A thin strip of piezoelectric material in the bottom of the saddle slot, which generates a voltage as the strings press and release the saddle. It hears the strings very directly, resists feedback well and is the commonest system; poorly fitted, it can sound brittle or uneven from string to string, because the saddle must bear evenly along the whole strip.",
                ja:"サドルの溝の底に入れる圧電材料の細い帯で、弦がサドルを押したりゆるめたりするにつれて電圧を生む。弦をとても直接に聞き、ハウリングに強く、最も一般的な方式である。取り付けが悪いと、硬い音になったり弦ごとに音量がばらついたりする。サドルが帯の全長に均等に当たっていなければならないからである。",
                zh:"置於下弦枕槽底的一條薄壓電材料，琴弦壓放下弦枕時便產生電壓。它非常直接地拾取琴弦，抗回授能力佳，是最常見的系統；若安裝不良，聲音可能生硬或各弦音量不均，因為下弦枕必須均勻壓在整條感測片上。" } },
            { term:{ en:"Soundboard transducer", ja:"表板のトランスデューサー", zh:"面板換能器" },
              jp:"コンタクト",
              def:{
                en:"A contact sensor fixed to the underside of the top or the bridge plate, picking up the motion of the wood itself. It conveys more of the body's character than a piezo under the saddle, but because it hears the top it is also more prone to feedback at high volume.",
                ja:"表板やブリッジプレートの裏に固定する接触型のセンサーで、木そのものの動きを拾う。サドルの下のピエゾより胴の個性を多く伝えるが、表板を聞くので、大音量ではハウリングを起こしやすい。",
                zh:"固定在面板或橋板下方的接觸式感測器，拾取木材本身的運動。它比弦枕下壓電更能傳達琴身的個性，但因為聽的是面板，高音量時也較容易回授。" } },
            { term:{ en:"Magnetic soundhole pickup", ja:"マグネティック・サウンドホール・ピックアップ", zh:"音孔磁性拾音器" },
              jp:"磁気",
              def:{
                en:"A coil and magnet slung across the soundhole, working like an electric guitar's pickup. It senses only the steel strings, not the wood, so it suits loud stages and can be fitted without drilling — but it cannot work with nylon strings.",
                ja:"サウンドホールに渡して取りつけるコイルと磁石で、エレキギターのピックアップと同じように働く。木ではなくスチール弦だけを感知するので大音量の舞台に向き、穴をあけずに取りつけられる。ただしナイロン弦には使えない。",
                zh:"橫跨音孔安裝的線圈與磁鐵，原理與電吉他拾音器相同。它只感應鋼弦而非木材，適合大音量舞台，安裝時也無須鑽孔——但無法用於尼龍弦。" } },
            { term:{ en:"Internal microphone", ja:"内蔵マイク", zh:"內建麥克風" },
              jp:"マイク",
              def:{
                en:"A small microphone inside the body hears the air, as a listener does, and gives the most natural sound of all — and the most feedback. It is usually blended with a piezo, the microphone adding air and body, the piezo the attack.",
                ja:"胴のなかの小さなマイクは、聴き手と同じく空気を聞き、最も自然な音を与える——そして最もハウリングしやすい。ふつうはピエゾと混ぜ、マイクが空気と胴を、ピエゾが立ち上がりを受けもつ。",
                zh:"琴身內的小麥克風像聽眾一樣聆聽空氣，聲音最自然——也最容易回授。通常與壓電混合使用，由麥克風提供空氣感與琴身聲響，壓電負責起音。" } },
            { term:{ en:"Preamp", ja:"プリアンプ", zh:"前級" },
              jp:"前置増幅",
              def:{
                en:"A piezo's signal is weak and of very high impedance, so it must be buffered and boosted before it meets a cable. Onboard preamps, usually set into the upper side of the body and run from a battery, add tone controls, a phase switch or notch filter to tame feedback, and often a tuner. At K. Yairi, checking the balance of the pickup between strings is part of each guitar's final sound check.",
                ja:"ピエゾの信号は弱く、インピーダンスが非常に高いので、ケーブルにつなぐ前にバッファーして増幅しなければならない。内蔵のプリアンプは、ふつう胴の上側の側板に埋めこんで電池で動かし、音質の調整、ハウリングを抑える位相の切り替えやノッチフィルター、しばしばチューナーを備える。ヤイリギターでは、弦ごとのピックアップのバランスの確認が、一本ずつの最終の音の検査に含まれている。",
                zh:"壓電訊號微弱且阻抗極高，接上導線前必須先緩衝並放大。內建前級通常嵌在琴身上側的側板中，以電池供電，附有音色控制、用來抑制回授的相位切換或陷波濾波器，常常還有調音器。在 K.Yairi，檢查各弦拾音平衡是每把吉他最終音質檢查的一部分。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Takamine Gakki, company history; K. Yairi, “How a Yairi guitar is made” (sound check); general practice.",
            ja:"出典：高峰楽器製作所「タカミネの歩み」、ヤイリギター「ヤイリギターができるまで」（音の検査）、一般的な実務。",
            zh:"資料來源：高峰樂器製作所〈Takamine 的歷程〉；K.Yairi〈Yairi 吉他的誕生〉（音質檢查）；一般做法。" } }
      ] },
    { t:"related",
      items:[
        { href:"tonewoods.html", why:{ en:"The woods of each part.", ja:"各部の木。", zh:"各部位的木材。" } },
        { href:"making.html", why:{ en:"How a guitar is built.", ja:"ギターのつくり方。", zh:"吉他如何製作。" } },
        { href:"takamine.html", why:{ en:"The Nakatsugawa maker.", ja:"中津川のメーカー。", zh:"中津川的製造商。" } },
        { href:"yairi.html", why:{ en:"The Kani maker.", ja:"可児のメーカー。", zh:"可兒的製造商。" } }
      ] }
  ] };

/* ---- -------------------------------------------- making */
GIFU.pages["making"] = { kicker:{ en:"Sound · 04", ja:"音 · 04", zh:"聲音 · 04" },
  title:{ en:"Making a Guitar", ja:"ギターをつくる", zh:"製作吉他" },
  jp:"板から楽器へ",
  lede:{
    en:"A handmade acoustic guitar takes a single luthier somewhere between one and two hundred hours of work, spread over weeks so that glue and finish can cure; in a factory such as those in Kani and Nakatsugawa, dozens of specialists divide the same steps between them and many guitars move through the workshop at once. The sequence is much the same in both. This page follows a steel-string guitar from rough boards to a playable instrument, and explains a few of the precise measurements on which it depends.",
    ja:"手づくりのアコースティックギターは、一人の製作家にとって百から二百時間ほどの仕事で、接着剤や塗装が固まるよう何週間にもわたる。可児や中津川のような工場では、何十人もの専門の職人が同じ工程を分けもち、多くのギターが同時に工房を流れていく。順序はどちらでもほぼ同じである。この頁は、スチール弦のギターを荒い板から弾ける楽器になるまでたどり、それが頼るいくつかの精密な寸法を説明する。",
    zh:"一把手工木吉他需要一位製琴師約一百到兩百小時的工作，並分散在數週內進行，好讓膠與塗裝固化；在可兒與中津川這樣的工廠裡，數十位專業工匠分工完成同樣的步驟，許多吉他同時在工坊中流轉。兩者的流程大致相同。本頁追蹤一把鋼弦吉他從粗胚木板到可彈奏樂器的過程，並說明它所仰賴的幾項精密尺寸。" },
  body:[
    { t:"section",
      id:"steps",
      title:{ en:"From boards to guitar", ja:"板からギターへ", zh:"從木板到吉他" },
      jp:"工程",
      body:[
        { t:"figure",
          caption:{
            en:"The main stages of building a steel-string acoustic guitar. In a factory, stages run in parallel across many instruments; in a one-person workshop, drying and curing times set the pace.",
            ja:"スチール弦のアコースティックギターをつくる主な段階。工場では多くの楽器にまたがって段階が並行して進み、一人の工房では乾燥と硬化の時間が歩みを決める。",
            zh:"製作鋼弦木吉他的主要階段。在工廠中，各階段在許多把樂器間並行；在單人工坊中，乾燥與固化時間決定進度。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Building a guitar", ja:"ギターを組む", zh:"組裝吉他" }, per:4, bh:118,
            steps:[
              { t:{ en:"Select and season", ja:"選材と枯らし", zh:"選材與陳放" }, d:{ en:"Boards chosen and stored for years; acclimatised to the workshop.", ja:"板を選び何年も寝かせ、工房の空気になじませる。", zh:"挑選板材並陳放多年；適應工坊環境。" } },
              { t:{ en:"Join and thickness", ja:"接ぎと厚み出し", zh:"拼板與定厚" }, d:{ en:"Book-matched halves glued; top taken to about 2.5–3 mm.", ja:"ブックマッチの二枚を接ぎ、表板をおよそ二・五〜三ミリに。", zh:"對開拼板膠合；面板削至約 2.5–3 公釐。" } },
              { t:{ en:"Rosette and bracing", ja:"ロゼッタと力木", zh:"音孔花與音梁" }, d:{ en:"Soundhole inlay cut; spruce braces glued and carved.", ja:"サウンドホールの象嵌を入れ、スプルースの力木を貼って削る。", zh:"鑲嵌音孔花；黏貼並雕削雲杉音梁。" } },
              { t:{ en:"Bend the sides", ja:"側板を曲げる", zh:"彎曲側板" }, d:{ en:"Heated and bent to the body shape in a mould.", ja:"熱して型のなかで胴の形に曲げる。", zh:"加熱後在模具中彎成琴身輪廓。" } },
              { t:{ en:"Close the box", ja:"箱を閉じる", zh:"合箱" }, d:{ en:"Linings, top and back glued to the sides.", ja:"ライニングを入れ、表板と裏板を側板に接着。", zh:"裝上內襯條，將面板與背板黏上側板。" } },
              { t:{ en:"Bind and fit the neck", ja:"バインディングとネック", zh:"包邊與裝頸" }, d:{ en:"Edges bound; neck carved, joined and set at the right angle.", ja:"縁を巻き、ネックを削り、接いで正しい角度に据える。", zh:"琴邊包邊；雕削琴頸、接合並調整至正確角度。" } },
              { t:{ en:"Finish", ja:"塗装", zh:"塗裝" }, d:{ en:"Thin coats of lacquer, sanded and polished; weeks of curing.", ja:"薄いラッカーを重ね、研いで磨く。何週間も乾かす。", zh:"薄塗數層漆，研磨拋光；需固化數週。" } },
              { t:{ en:"Set up", ja:"調整", zh:"調校" }, d:{ en:"Frets levelled; bridge, nut and saddle fitted; action and intonation set.", ja:"フレットをそろえ、ブリッジ・ナット・サドルを合わせ、弦高とオクターブを調える。", zh:"整平琴格；裝配琴橋、上弦枕與下弦枕；調整弦高與音準。" } }
            ] }); } },
        { t:"p",
          text:{
            en:"Among these steps, the carving of the braces is where makers differ most. The braces stiffen the thin top against the pull of the strings — about seventy kilograms on a steel-string guitar — while leaving it free to vibrate. Shaving a brace by a fraction of a millimetre changes the stiffness of the top and so its tone; many makers tap the top again and again as they carve, listening for a change in its ring. See <a href=\"bracing.html\">Tops &amp; Bracing</a>.",
            ja:"これらの工程のうち、つくり手によって最も違うのは力木の削りである。力木は薄い表板を弦の引く力——スチール弦ギターでおよそ七十キロ——に対して剛くしながら、振動は自由に残す。力木を一ミリに満たないほど削っても表板の剛さが変わり、したがって音が変わる。多くのつくり手は、削りながら何度も表板を叩き、響きの変化に耳をすます。<a href=\"bracing.html\">表板と力木</a>を参照。",
            zh:"在這些步驟中，雕削音梁是各家差異最大之處。音梁讓薄面板能抵抗琴弦的拉力——鋼弦吉他約七十公斤——同時保留振動的自由。把音梁削去零點幾公釐，就會改變面板剛性，進而改變音色；許多工匠在雕削時一再敲擊面板，聆聽其聲響的變化。見<a href=\"bracing.html\">面板與音梁</a>。" } }
      ] },
    { t:"section",
      id:"frets",
      title:{ en:"The mathematics of the fingerboard", ja:"指板の数学", zh:"指板的數學" },
      jp:"平均律",
      body:[
        { t:"p",
          text:{
            en:"The positions of the frets follow from equal temperament: each fret shortens the vibrating length of the string by a factor of the twelfth root of two, so that twelve frets halve it and raise the pitch by an octave. The distance from the nut to fret n is therefore L × (1 − 2^(−n/12)), where L is the scale length. Fret slots are cut to within a few hundredths of a millimetre; the saddle is then set slightly further back than the theoretical length, and angled, to compensate for the extra tension a string gains when it is pressed down.",
            ja:"フレットの位置は平均律から決まる。フレットを一つ進むごとに弦の振動する長さは二の十二乗根分の一になり、十二のフレットで半分になって音は一オクターブ上がる。だからナットからn番目のフレットまでの距離はL×(1−2^(−n/12))で、Lはスケール長である。フレットの溝は百分の数ミリの精度で切られ、サドルは、押さえたときに弦が増す張力を補うため、理論の長さよりわずかに後ろに、斜めに据えられる。",
            zh:"琴格位置由十二平均律決定：每往上一格，弦的振動長度就縮短為原來的二的十二次方根分之一，十二格後長度減半、音高升高一個八度。因此從上弦枕到第 n 格的距離為 L × (1 − 2^(−n/12))，L 為弦長。琴格槽的精度達百分之幾公釐；下弦枕則設在比理論長度略後處並呈斜角，以補償弦被按下時增加的張力。" } },
        { t:"table",
          caption:{
            en:"Fret positions for a 645 mm scale, measured from the nut (calculated)",
            ja:"スケール六四五ミリのフレット位置、ナットから（計算値）",
            zh:"645 公釐弦長的琴格位置，自上弦枕起算（計算值）" },
          cols:[
            { en:"Fret", ja:"フレット", zh:"琴格" },
            { en:"Distance (mm)", ja:"距離（mm）", zh:"距離（mm）" },
            { en:"Fret", ja:"フレット", zh:"琴格" },
            { en:"Distance (mm)", ja:"距離（mm）", zh:"距離（mm）" }
          ],
          numCols:[0, 1, 2, 3],
          keyCol:false,
          rows:[
            ["1", "36.20", "7", "214.51"],
            ["2", "70.37", "8", "238.68"],
            ["3", "102.62", "9", "261.48"],
            ["4", "133.06", "10", "283.01"],
            ["5", "161.80", "11", "303.33"],
            ["6", "188.92", "12", "322.50"]
          ] }
      ] },
    { t:"section",
      id:"choices",
      title:{ en:"Makers' choices", ja:"つくり手の選択", zh:"工匠的抉擇" },
      jp:"接着剤・ネック・塗装",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Glue", ja:"接着剤", zh:"膠合劑" },
              jp:"膠・木工用",
              def:{
                en:"Traditional hide glue sets hard and glassy, transmits vibration well and can be released with heat and moisture for repair; modern aliphatic-resin glues are easier to use and more tolerant. Many makers use hide glue for the bracing and bridge and resin glues elsewhere.",
                ja:"伝統の膠は硬くガラスのように固まり、振動をよく伝え、修理のときには熱と湿気で外せる。現代の木工用の樹脂接着剤は扱いやすく融通がきく。多くのつくり手は、力木とブリッジに膠を、ほかに樹脂の接着剤を使う。",
                zh:"傳統動物膠硬化後堅硬如玻璃，傳振效果佳，修理時可用熱與濕氣拆開；現代脂肪族樹脂膠較易使用、容錯性高。許多工匠在音梁與琴橋用動物膠，其他部位用樹脂膠。" } },
            { term:{ en:"Neck joint", ja:"ネックの接合", zh:"琴頸接合" },
              jp:"ダブテイル・ボルトオン",
              def:{
                en:"The classic joint is a glued dovetail, cut into the heel of the neck and the neck block of the body; many modern guitars use a mortise-and-tenon joint held by bolts, which makes the essential periodic neck reset — adjusting the angle as the top slowly bulges under string tension — much easier.",
                ja:"定番の接合は、ネックのヒールと胴のネックブロックに刻んだ接着のダブテイルである。現代のギターの多くはボルトで留めるほぞ継ぎを使い、弦の張力で表板がゆっくりふくらむにつれて角度を直す、欠かせない周期的なネックリセットをずっと楽にする。",
                zh:"經典接合是在琴頸根部與琴身頸塊上切出燕尾榫並膠合；許多現代吉他改用螺栓固定的榫卯接合，使不可或缺的定期「琴頸重置」——隨面板在弦張力下緩慢隆起而調整角度——容易得多。" } },
            { term:{ en:"Truss rod", ja:"トラスロッド", zh:"琴頸調整桿" },
              jp:"反り調整",
              def:{
                en:"An adjustable steel rod inside the neck counters the pull of the strings and lets the relief of the neck be adjusted with the seasons — a small correction for a wooden structure that changes with humidity.",
                ja:"ネックのなかの調整できる鋼の棒が弦の引く力に抗い、季節に応じてネックの反りを直せるようにする。湿度で変わる木の構造のための、小さな補正である。",
                zh:"琴頸內可調整的鋼桿抵抗琴弦拉力，並能隨季節調整琴頸弧度——這是針對會隨濕度變化之木構造的小小修正。" } },
            { term:{ en:"Finish", ja:"塗装", zh:"塗裝" },
              jp:"ラッカー・ポリウレタン",
              def:{
                en:"Nitrocellulose lacquer, sprayed thin, is the traditional finish for fine steel-string guitars; polyurethane and polyester are tougher and cheaper to apply in thick, glossy coats, at some cost to resonance. Classical makers often use French polish — shellac rubbed on by hand. Urushi has been tried by a few Japanese makers. Whatever the material, thinner is generally better for the sound.",
                ja:"薄く吹いたニトロセルロースのラッカーは、上等なスチール弦ギターの伝統の仕上げである。ポリウレタンやポリエステルは丈夫で、厚く艶のある塗膜を安くかけられるが、響きをいくらか犠牲にする。クラシックのつくり手はしばしばセラックを手で擦りこむフレンチポリッシュを使う。漆を試みた日本のつくり手も少しいる。材料が何であれ、音にはふつう薄いほうがよい。",
                zh:"薄噴的硝基漆是高級鋼弦吉他的傳統塗裝；聚氨酯與聚酯漆較耐用，能以較低成本塗成厚而亮的漆膜，但會犧牲部分共鳴。古典吉他工匠常用法式刷漆——以手工擦塗蟲膠。少數日本工匠曾嘗試使用漆。無論何種材料，一般而言越薄對聲音越好。" } }
          ] }
      ] },
    { t:"section",
      id:"factory",
      title:{ en:"Factory and workshop", ja:"工場と工房", zh:"工廠與工坊" },
      jp:"量産と手工",
      body:[
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Factory (Kani, Nakatsugawa)", ja:"工場（可児・中津川）", zh:"工廠（可兒、中津川）" },
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"Dozens of specialists, each responsible for a few stages",
                      ja:"何十人もの専門の職人が、それぞれいくつかの工程を受けもつ",
                      zh:"數十位專業工匠，各負責幾個工序" },
                    {
                      en:"Jigs, moulds and CNC machines for accuracy and consistency",
                      ja:"正確さとそろいのための治具、型、NC機械",
                      zh:"以治具、模具與 CNC 機械確保精度與一致性" },
                    {
                      en:"Hand work where it matters: bracing, fitting, finishing, setup",
                      ja:"大事なところは手で。力木、合わせ、仕上げ、調整",
                      zh:"關鍵處仍靠手工：音梁、配合、塗裝、調校" },
                    {
                      en:"Many guitars a day; consistent models; lifetime service",
                      ja:"一日に多くのギター。そろったモデル。生涯の修理",
                      zh:"日產多把；型號一致；終身維修服務" }
                  ] }
              ] },
            { title:{ en:"Luthier's workshop", ja:"製作家の工房", zh:"製琴師工坊" },
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"One maker, or a small team, doing every stage",
                      ja:"一人か小さな組が、すべての工程をする",
                      zh:"一位工匠或小團隊包辦所有工序" },
                    { en:"Each top tapped and braced individually", ja:"表板を一枚ずつ叩いて力木を決める", zh:"每片面板都個別敲擊並調整音梁" },
                    {
                      en:"Custom woods, sizes and details for each client",
                      ja:"客ごとに木、大きさ、細部を選ぶ",
                      zh:"依客戶需求選擇木材、尺寸與細節" },
                    { en:"A few to a few dozen instruments a year", ja:"年に数本から数十本", zh:"每年數把至數十把" }
                  ] }
              ] }
          ] },
        { t:"note",
          label:{ en:"The workshop climate", ja:"工房の気候", zh:"工坊的氣候" },
          text:{
            en:"Guitar workshops are kept at controlled humidity — typically in the range of forty to fifty per cent — throughout the year. In Gifu's humid summers that means dehumidifiers running day and night. A guitar built in damp conditions will shrink and crack when it meets a heated room; one built dry will simply swell a little in summer.",
            ja:"ギターの工房は一年を通じて湿度を管理する——ふつう四十〜五十パーセントの範囲に。岐阜の湿った夏には、除湿機を昼も夜も動かすことを意味する。湿った条件でつくったギターは暖房の部屋に出会うと縮んで割れ、乾いた条件でつくったギターは夏に少しふくらむだけですむ。",
            zh:"吉他工坊全年維持受控濕度——通常在 40–50% 之間。在岐阜潮濕的夏季，這意味著除濕機日夜運轉。在潮濕環境中製作的吉他，遇到暖氣房間就會收縮開裂；在乾燥環境中製作的吉他，夏天只會稍微膨脹。" } }
      ] },
    { t:"section",
      id:"plates",
      title:{ en:"From seasoned wood to finished plates", ja:"枯らした木から板へ", zh:"從陳放木材到成形板材" },
      jp:"枯らし・接ぎ・厚み出し",
      body:[
        { t:"p",
          text:{
            en:"The longest stage of a guitar's making happens before anyone picks up a tool. Wood arrives far wetter than an instrument can tolerate and must be brought down slowly, so that it shrinks, cracks and warps in the store rather than in the finished guitar. K. Yairi in Kani is unusually open about its timetable. Visitors from the Shimamura music-shop chain in 2024 were told that fingerboard wood is air-dried for about ten years, top wood for three to five years and neck wood for one to one and a half; air-drying takes the wood to a moisture content of about 18 per cent, and a kiln then takes it below 8 per cent. The company's own description of its process speaks of three to ten years of natural drying outdoors, and an earlier visit, in 2013, heard of at least ten years, followed by a week to ten days at 50–60 °C. The figures differ with the species and the part, but the principle is constant: years in the open air, then a short, gentle finish in heat, then weeks in the controlled air of the workshop before the first cut. Why seasoning matters is explained on <a href=\"tonewoods.html\">Tonewoods</a>.",
            ja:"ギターづくりで最も長い段階は、だれかが道具を手にとる前にある。届いた木は楽器が耐えられるよりはるかに湿っており、ゆっくり水分を抜かねばならない。縮み、割れ、反りが、仕上がったギターではなく材木置き場で起きるようにするためである。可児のK.ヤイリは、その段取りを珍しく明かしている。二〇二四年に島村楽器の店から訪れた人々は、指板材はおよそ十年、表板材は三〜五年、ネック材は一年から一年半、自然乾燥させると聞いた。自然乾燥で含水率はおよそ十八パーセントになり、そのあと乾燥機で八パーセント以下にする。同社自身の工程の説明は屋外での三〜十年の自然乾燥を語り、二〇一三年の訪問では、少なくとも十年、そのあと五十〜六十度で一週間から十日ほど、と聞いている。数字は樹種と部位で違うが、原理は変わらない。外気のなかで何年も、それから熱で短くおだやかに仕上げ、さらに管理された工房の空気のなかで何週間かおいてから最初の刃を入れる。枯らしがなぜ大事かは<a href=\"tonewoods.html\">音響材</a>で説明した。",
            zh:"製作吉他最漫長的階段，發生在任何人拿起工具之前。木材運到時遠比樂器所能承受的潮濕，必須緩慢降低含水率，讓收縮、開裂與翹曲發生在木料倉庫，而不是在完成的吉他上。可兒的 K. Yairi 對其時程罕見地公開。2024 年島村樂器門市人員參訪時得知：指板材自然乾燥約十年，面板材三到五年，琴頸材一年到一年半；自然乾燥使含水率降到約 18%，再以乾燥窯降到 8% 以下。公司自己的製程說明則提到戶外自然乾燥三到十年；2013 年的一次參訪聽到的是至少十年，之後再以 50–60 °C 烘一週到十天左右。數字因樹種與部位而異，原則卻不變：先在戶外放置多年，再以溫和的熱短暫收尾，接著在受控的工坊空氣中靜置數週，才下第一刀。陳放為何重要，見<a href=\"tonewoods.html\">音木</a>。" } },
        { t:"steps",
          items:[
            { title:{ en:"Join the halves", ja:"二枚を接ぐ", zh:"拼接兩半" },
              jp:"ブックマッチ",
              meta:{ en:"plane, shooting board, glue", ja:"鉋、削り台、接着剤", zh:"刨、刨削導板、膠" },
              text:{
                en:"The two bookmatched leaves of a top or back are laid side by side and their inner edges planed together until they meet along their whole length with no light showing between them. They are then glued edge to edge, held flat in a simple jig while the glue sets. K. Yairi uses hide glue for joining its tops.",
                ja:"表板や裏板のブックマッチの二枚を並べ、内側の縁を合わせて削り、全長にわたって光が漏れずに合うまで仕上げる。それから縁と縁を接着し、接着剤が固まるあいだ簡単な治具で平らに押さえる。K.ヤイリは表板の接ぎに膠を使う。",
                zh:"把面板或背板對開的兩片並排，刨削內側邊緣直到全長密合、不透一絲光線，再將兩邊緣膠合，以簡單治具壓平待膠固化。K. Yairi 拼接面板時使用動物膠。" } },
            { title:{ en:"Thickness the plates", ja:"厚みを出す", zh:"板材定厚" },
              jp:"厚み出し",
              meta:{ en:"drum sander or plane", ja:"ドラムサンダーか鉋", zh:"滾筒砂光機或刨" },
              text:{
                en:"Top, back and sides are brought to thickness: a few millimetres for the plates, and around 2.4 mm for steel-string sides before bending. Factories use wide drum sanders; a luthier may finish by hand, measuring constantly. How thin a top should be is discussed on <a href=\"bracing.html\">Tops &amp; Bracing</a>.",
                ja:"表板、裏板、側板を所定の厚さにする。板は数ミリ、スチール弦の側板は曲げる前でおよそ二・四ミリ。工場は幅の広いドラムサンダーを使い、製作家は測りながら手で仕上げることもある。表板をどれほど薄くするかは<a href=\"bracing.html\">表板と力木</a>で論じた。",
                zh:"把面板、背板與側板削至規定厚度：板材為數公釐，鋼弦吉他側板彎曲前約 2.4 公釐。工廠使用寬幅滾筒砂光機；製琴師則可能邊量邊以手工完成。面板該削多薄，見<a href=\"bracing.html\">面板與音梁</a>。" } },
            { title:{ en:"Inlay the rosette", ja:"ロゼッタを入れる", zh:"鑲嵌音孔花" },
              jp:"象嵌",
              meta:{ en:"circle cutter or router", ja:"円切りカッターかルーター", zh:"圓規刀或修邊機" },
              text:{
                en:"Before the soundhole exists, shallow circular channels are cut into the top around its future centre, the rings of wood, shell or plastic are glued in and levelled flush, and only then is the hole itself cut out — so that the rosette's inner edge is perfectly concentric with it.",
                ja:"サウンドホールを開ける前に、その中心のまわりの表板に浅い円形の溝を切り、木や貝やプラスチックの輪を接着して面一に削り、それからはじめて穴そのものを切り抜く。ロゼッタの内側の縁が穴とぴったり同心になるようにするためである。",
                zh:"在開音孔之前，先在面板上圍繞未來圓心切出淺圓槽，把木、貝殼或塑膠的環片黏入並削平，最後才切出音孔本身——讓音孔花的內緣與孔完全同心。" } },
            { title:{ en:"Brace the plates", ja:"力木を貼る", zh:"黏貼音梁" },
              jp:"角材のまま接着",
              meta:{ en:"hide glue, go-bars", ja:"膠、ゴーバー", zh:"動物膠、壓桿" },
              text:{
                en:"Braces are glued to top and back and then carved. Yairi glues its braces as plain square-section blanks and shapes them only afterwards, a practice the company says keeps them from lifting; the carving and voicing of the top are described on <a href=\"bracing.html\">Tops &amp; Bracing</a>.",
                ja:"力木を表板と裏板に貼り、それから削る。ヤイリは力木を四角い断面の角材のまま貼り、あとから形を削る。はがれを防ぐためだと同社は言う。表板の力木の削りと音づくりは<a href=\"bracing.html\">表板と力木</a>に述べた。",
                zh:"音梁先黏到面板與背板上，再行雕削。Yairi 把音梁以方形斷面的素材直接黏上，之後才削出形狀，公司表示這樣可防止音梁剝離；面板音梁的雕削與調音，見<a href=\"bracing.html\">面板與音梁</a>。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Shimamura Music Sendai Loft, K. Yairi factory tour report (2024); Shimamura, “Visiting makers: Yairi Guitar” (2013); K. Yairi, “How a Yairi guitar is made”; StewMac, “Bending sides with a bending iron” (side thickness).",
            ja:"出典：島村楽器仙台ロフト店「K.Yairi（ヤイリギター）工場見学レポート」（二〇二四年）、島村楽器「メーカー探訪 ヤイリギター」（二〇一三年）、ヤイリギター「ヤイリギターができるまで」、StewMac「Bending sides with a bending iron」（側板の厚さ）。",
            zh:"資料來源：島村樂器仙台 Loft 店〈K.Yairi 工廠參觀報告〉（2024 年）；島村樂器〈廠商探訪：Yairi Guitar〉（2013 年）；Yairi〈ヤイリギターができるまで〉；StewMac〈Bending sides with a bending iron〉（側板厚度）。" } }
      ] },
    { t:"section",
      id:"sides",
      title:{ en:"Bending the sides", ja:"側板を曲げる", zh:"彎曲側板" },
      jp:"ベンディングアイロン・ベンダー",
      body:[
        { t:"p",
          text:{
            en:"A strip of rosewood or maple two and a half millimetres thick will snap if it is bent cold to the tight curve of a guitar's waist. Heated and wet, it bends like leather. Heat and moisture together soften lignin, the natural polymer that binds the wood's cellulose fibres, so that the fibres on the outside of the curve can stretch and those on the inside compress without breaking; as the wood cools and dries in its new shape, the lignin stiffens again and the bend is set. Too little heat and the side cracks; too much and it scorches or, in figured woods, the grain separates.",
            ja:"厚さ二・五ミリのローズウッドやメイプルの帯は、冷たいままギターのくびれのきつい曲線に曲げると折れる。熱して湿らせれば、革のように曲がる。熱と湿気がいっしょになって、木のセルロースの繊維を結びつける天然の高分子リグニンを柔らかくし、曲線の外側の繊維は伸び、内側の繊維は縮んで、折れずにすむ。木が新しい形のまま冷えて乾くと、リグニンはふたたび硬くなり、曲げが固定される。熱が足りなければ側板は割れ、多すぎれば焦げ、杢のある木では木目がはがれる。",
            zh:"一條 2.5 公釐厚的玫瑰木或楓木，若在冷的狀態下彎成吉他腰身的急彎就會折斷；加熱並濕潤後，卻能像皮革一樣彎曲。熱與水分共同軟化木質素——把木材纖維素纖維黏結在一起的天然高分子——使彎曲外側的纖維得以伸長、內側得以壓縮而不斷裂；木材以新形狀冷卻乾燥後，木質素重新變硬，彎度便固定下來。熱度不足，側板會裂；過熱則會焦黑，有花紋的木材還會紋理分離。" } },
        { t:"defs",
          items:[
            { term:{ en:"Bending iron (hot pipe)", ja:"ベンディングアイロン（熱した管）", zh:"彎板熱管" },
              jp:"手曲げ",
              def:{
                en:"The traditional tool: a heated metal form over which the maker presses the dampened side by hand, a little at a time, watching and feeling it give. StewMac's guidance is an iron at 350–400 °F (about 175–205 °C), sides around 0.095 inch (2.4 mm) thick, plain rosewood or maple soaked for 30–45 minutes and mahogany or walnut for 12–20, figured woods only sprayed; a straight-grained side takes three or four minutes to reach its curve.",
                ja:"伝統の道具で、熱した金属の型に、湿らせた側板をつくり手が手で少しずつ押しあて、たわむのを目と手で確かめながら曲げる。StewMacの手引きでは、アイロンは華氏三五〇〜四〇〇度（およそ一七五〜二〇五℃）、側板の厚さは約〇・〇九五インチ（二・四ミリ）、杢のないローズウッドやメイプルは三十〜四十五分、マホガニーやウォルナットは十二〜二十分水に浸け、杢のある木は霧吹きだけにする。木目のまっすぐな側板は三、四分で曲線に達する。",
                zh:"傳統工具：一個加熱的金屬模，工匠以手把潤濕的側板一點一點壓上去，邊看邊感覺它的彎曲。依 StewMac 的指引，熱管溫度為華氏 350–400 度（約 175–205 °C），側板厚約 0.095 英寸（2.4 公釐）；無紋的玫瑰木或楓木浸水 30–45 分鐘，桃花心木或胡桃木 12–20 分鐘，有花紋的木材只噴水；紋理順直的側板約三、四分鐘即可彎到位。" } },
            { term:{ en:"Bending machine (blanket bender)", ja:"ベンディングマシン", zh:"彎板機" },
              jp:"機械曲げ",
              def:{
                en:"The side is sandwiched between thin steel slats and an electric heating blanket and pressed down over a form of the body's outline, bending both bouts and the waist in one operation. It is faster and more repeatable than an iron, and the usual choice of factories. K. Yairi uses a bending machine of its own design, combined with hand bending, and earlier described moistening the sides with hot water and pressing them while heated; at Takamine, bending the sides is still done by hand (see <a href=\"takamine.html\">Takamine</a>).",
                ja:"側板を薄い鋼の帯と電気の加熱ブランケットではさみ、胴の輪郭の型に押しつけて、上下のふくらみとくびれを一度に曲げる。アイロンより速く、くり返しても同じにでき、工場のふつうの選択である。K.ヤイリは自社製のベンディングマシンを手曲げと組み合わせて使い、以前には、側板をお湯で湿らせ、熱を加えながらプレスして曲げると説明していた。タカミネでは側板の曲げはいまも手で行う（<a href=\"takamine.html\">タカミネ</a>を参照）。",
                zh:"把側板夾在薄鋼片與電熱毯之間，壓向琴身輪廓的模具，一次彎出上下琴身與腰身。比熱管更快、重複性更高，是工廠的一般選擇。K. Yairi 使用自行設計的彎板機並搭配手工彎板，先前也曾說明以熱水潤濕側板、邊加熱邊壓彎；Takamine 則仍以手工彎曲側板（見 <a href=\"takamine.html\">Takamine</a>）。" } },
            { term:{ en:"Setting the shape", ja:"形を落ち着かせる", zh:"定形" },
              jp:"型に入れる",
              def:{
                en:"A freshly bent side springs back a little as it dries, so it is left clamped in a mould or on its form until it has cooled and dried completely. Only then are the neck and end blocks and the linings glued in, turning two loose strips into the rigid rim on which the box is built.",
                ja:"曲げたばかりの側板は乾くにつれて少し戻るので、すっかり冷えて乾くまで、型や曲げ型に締めつけたままおく。そのあとはじめてネックブロック、エンドブロック、ライニングを接着し、二本のばらばらの帯を、胴を組む土台となる剛い枠に変える。",
                zh:"剛彎好的側板乾燥時會稍微回彈，因此要夾在模具或彎板模上，直到完全冷卻乾燥。之後才黏上頸塊、尾塊與內襯條，把兩條鬆散的木帶變成組裝琴箱所依賴的剛性框圈。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: StewMac, “Bending sides with a bending iron”; K. Yairi, “How a Yairi guitar is made”; Shimamura factory reports (2013, 2024); Takamine page of this book.",
            ja:"出典：StewMac「Bending sides with a bending iron」、ヤイリギター「ヤイリギターができるまで」、島村楽器の工場見学記（二〇一三年、二〇二四年）、本書のタカミネの頁。",
            zh:"資料來源：StewMac〈Bending sides with a bending iron〉；Yairi〈ヤイリギターができるまで〉；島村樂器工廠參觀報告（2013 年、2024 年）；本書 Takamine 頁。" } }
      ] },
    { t:"section",
      id:"box",
      title:{ en:"Two ways to close a box", ja:"胴を組む二つの方法", zh:"組裝琴箱的兩種方式" },
      jp:"型とソレラ",
      body:[
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"In a mould", ja:"型のなかで", zh:"在模具中" },
              jp:"スチール弦・工場",
              text:{
                en:"The usual method for steel-string guitars, and in every factory.",
                ja:"スチール弦ギターのふつうの方法で、どの工場でもこれである。",
                zh:"鋼弦吉他的常規作法，所有工廠皆採用。" },
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"The bent sides are clamped in a rigid mould — an outside frame or an inside form — that holds the outline exactly",
                      ja:"曲げた側板を剛い型——外枠か内型——に締めつけ、輪郭を正確に保つ",
                      zh:"把彎好的側板夾進剛性模具——外框或內模——精確保持輪廓" },
                    {
                      en:"Neck and end blocks and kerfed linings are glued in to make a rim",
                      ja:"ネックブロック、エンドブロック、切れ目を入れたライニングを接着して枠をつくる",
                      zh:"黏上頸塊、尾塊與鋸口內襯條，形成框圈" },
                    {
                      en:"The braced top and back, domed in a concave dish, are glued on one after the other",
                      ja:"凹んだ皿型の台でふくらみをつけて力木を貼った表板と裏板を、順に接着する",
                      zh:"在凹弧底盤中貼好音梁、帶拱度的面板與背板，依序黏上" },
                    {
                      en:"The neck is made separately and fitted to the finished body later",
                      ja:"ネックは別につくり、仕上がった胴にあとから合わせる",
                      zh:"琴頸另行製作，之後再裝配到完成的琴身上" }
                  ] }
              ] },
            { title:{ en:"On a solera", ja:"ソレラの上で", zh:"在 solera 上" },
              jp:"スペイン式",
              text:{
                en:"The traditional Spanish method for classical guitars, built without a mould.",
                ja:"クラシックギターの伝統のスペイン式で、型を使わない。",
                zh:"古典吉他的傳統西班牙作法，不使用模具。" },
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"The braced top is laid face down on the <em>solera</em>, a workboard scooped to about 3 mm deep under the lower bout, which gives the top its dome",
                      ja:"力木を貼った表板を、胴の下部の下を約三ミリの深さまでえぐった作業台<em>ソレラ</em>に表を下にして置く。これが表板にふくらみを与える",
                      zh:"把已貼音梁的面板正面朝下放在 <em>solera</em> 上——一塊在下部琴身處挖凹至約 3 公釐深的工作板——藉此賦予面板拱度" },
                    {
                      en:"The neck, with its heel and foot in one piece, is glued to the top first",
                      ja:"ヒールと足が一体のネックを、まず表板に接着する",
                      zh:"琴頸連同其一體的琴跟與腳部，先黏到面板上" },
                    {
                      en:"The sides slot into the heel and are fixed to the top with dozens of small blocks",
                      ja:"側板をヒールの溝に差しこみ、何十もの小さなブロックで表板に留める",
                      zh:"側板插入琴跟的槽中，再以數十個小木塊固定在面板上" },
                    {
                      en:"The back goes on last; there is no separate neck joint to reset",
                      ja:"裏板を最後に貼る。リセットすべき別のネックの接合はない",
                      zh:"背板最後黏上；沒有需要重置的獨立琴頸接合" }
                  ] }
              ] }
          ] },
        { t:"p",
          text:{
            en:"Once the back is on, the box is closed and the edges are cleaned up: the overhang of top and back is trimmed flush with the sides, and a router running on a guide bearing cuts a stepped rebate all round the edges for the binding and purfling. The strips — plastic, or wood bent like the sides — are glued in and held with tape while the glue cures, then scraped flush. On a Spanish guitar the neck is already part of the body; on a moulded guitar it has still to be fitted, and that joint is one of the most consequential in the instrument. What binding and linings do is explained on <a href=\"guitar.html\">Anatomy of a Guitar</a>.",
            ja:"裏板を貼れば箱は閉じ、縁を整える。表板と裏板のはみ出しを側板と面一に削り、ガイドのベアリングで走るルーターで、縁のまわりにバインディングとパーフリングのための段のついた溝を切る。プラスチック、あるいは側板のように曲げた木の帯を接着し、固まるあいだテープで押さえ、それから削って面一にする。スペイン式のギターではネックはすでに胴の一部だが、型でつくるギターではまだネックを合わせねばならず、その接合は楽器のなかで最も影響の大きいものの一つである。バインディングとライニングの働きは<a href=\"guitar.html\">ギターの構造</a>で説明した。",
            zh:"背板黏上後，琴箱即告封閉，接著修整邊緣：把面板與背板的突出部分修到與側板齊平，再以附導引軸承的修邊機沿琴邊切出階梯狀槽口，供包邊與飾線嵌入。塑膠條或像側板一樣彎好的木條黏入後，以膠帶固定待膠固化，再刮平。西班牙式吉他的琴頸已是琴身的一部分；以模具製作的吉他則仍須裝配琴頸，而這個接合是整把樂器中影響最深遠的之一。包邊與內襯條的作用，見<a href=\"guitar.html\">吉他的構造</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Fernandez Music, “Traditional Spanish method” (solera depth); general construction practice.",
            ja:"出典：Fernandez Music「Traditional Spanish method」（ソレラの深さ）、一般的な製作の実際。",
            zh:"資料來源：Fernandez Music〈Traditional Spanish method〉（solera 深度）；一般製作實務。" } }
      ] },
    { t:"section",
      id:"neckjoint",
      title:{ en:"Joining the neck", ja:"ネックを接ぐ", zh:"接合琴頸" },
      jp:"ダブテイル・ボルト・スパニッシュヒール",
      body:[
        { t:"figure",
          caption:{
            en:"Three ways of joining neck and body, in section along the centre line (schematic, not to scale). The dovetail and the bolted tenon join a separate neck to a neck block inside the body; the Spanish heel makes neck and block one piece.",
            ja:"ネックと胴の三つの接ぎ方。中心線にそった断面（模式図。縮尺は正しくない）。ダブテイルとボルト留めのほぞは、別につくったネックを胴のなかのネックブロックに接ぐ。スパニッシュヒールはネックとブロックを一つの部材にする。",
            zh:"琴頸與琴身的三種接合方式，沿中線的剖面（示意圖，未按比例）。燕尾榫與螺栓固定的榫頭，把獨立製作的琴頸接到琴身內的頸塊上；西班牙式琴跟則讓琴頸與頸塊合為一體。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 290" role="img">';
            s += F.text(20, 28, lang==="en"?"NECK JOINTS":(lang==="ja"?"ネックの接合":"琴頸接合方式"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            function base(ox, dy, spanish){
              var r = '';
              r += '<rect x="'+(ox+110)+'" y="'+(dy+72)+'" width="110" height="4" fill="#EADCC1" stroke="#A08F73"/>';
              r += '<rect x="'+(ox+110)+'" y="'+(dy+166)+'" width="110" height="4" fill="#EADCC1" stroke="#A08F73"/>';
              r += '<path d="M'+(ox+10)+' '+(dy+72)+' L'+(ox+108)+' '+(dy+72)+' L'+(ox+108)+' '+(dy+170)+' L'+(ox+92)+' '+(dy+170)+' L'+(ox+62)+' '+(dy+100)+' L'+(ox+10)+' '+(dy+100)+' Z" fill="#EDE5D2" stroke="#7C6B52"/>';
              r += '<rect x="'+(ox+10)+'" y="'+(dy+64)+'" width="150" height="8" fill="#ADA79E" stroke="#8B857C"/>';
              if (!spanish) r += '<rect x="'+(ox+106)+'" y="'+(dy+72)+'" width="4" height="98" fill="#E7DFD2" stroke="#A08F73"/>';
              r += F.text(ox+30, dy+90, lang==="en"?"neck":(lang==="ja"?"ネック":"琴頸"), { size:10, fill:"#8B857C" });
              r += F.text(ox+200, dy+125, lang==="en"?"body":(lang==="ja"?"胴":"琴身"), { size:10, fill:"#8B857C", anchor:"middle" });
              return r;
            }
            var dy = 0, P = [
              { ox:20, n:{ en:"Glued dovetail", ja:"接着のダブテイル", zh:"膠合燕尾榫" },
                d:{ en:"A tapered tenon on the heel wedges into a matching socket in the neck block and is glued. Strong and traditional; a reset means steaming it apart.", ja:"ヒールのテーパーのついたほぞを、ネックブロックの同じ形の穴にくさびのようにはめて接着する。強く伝統的。リセットには蒸気で外す。", zh:"琴跟上漸縮的榫頭楔入頸塊中相符的榫眼並膠合。堅固而傳統；重置時須以蒸氣拆開。" } },
              { ox:270, n:{ en:"Bolted tenon", ja:"ボルト留めのほぞ", zh:"螺栓固定榫頭" },
                d:{ en:"A straight tenon held by bolts through the neck block. Easy to machine accurately and to reset; Martin introduced one in 1993.", ja:"まっすぐなほぞを、ネックブロックを通したボルトで留める。機械で正確に加工しやすく、リセットも容易。マーティンは一九九三年に導入した。", zh:"直榫以穿過頸塊的螺栓固定。易於以機械精確加工，也易於重置；馬丁於 1993 年引進。" } },
              { ox:520, n:{ en:"Spanish heel", ja:"スパニッシュヒール", zh:"西班牙式琴跟" },
                d:{ en:"Neck, heel and foot are one piece; the foot is glued under the top and the sides slot into the heel. The body is built around the neck.", ja:"ネック、ヒール、足が一体。足を表板の下に接着し、側板はヒールの溝に差しこむ。胴はネックを中心に組まれる。", zh:"琴頸、琴跟與腳部為一體；腳部黏在面板下方，側板插入琴跟的槽中。琴身圍繞琴頸組成。" } }
            ];
            // dovetail
            var o = P[0].ox; s += base(o, dy, false);
            s += '<rect x="'+(o+110)+'" y="'+(dy+76)+'" width="34" height="90" fill="#F0EDE4" stroke="#A08F73"/>';
            s += '<path d="M'+(o+108)+' '+(dy+78)+' L'+(o+138)+' '+(dy+78)+' L'+(o+132)+' '+(dy+150)+' L'+(o+108)+' '+(dy+150)+' Z" fill="#EDE5D2" stroke="#7C6B52"/>';
            // bolt-on
            o = P[1].ox; s += base(o, dy, false);
            s += '<rect x="'+(o+110)+'" y="'+(dy+76)+'" width="34" height="90" fill="#F0EDE4" stroke="#A08F73"/>';
            s += '<rect x="'+(o+108)+'" y="'+(dy+96)+'" width="22" height="46" fill="#EDE5D2" stroke="#7C6B52"/>';
            s += '<line x1="'+(o+152)+'" y1="'+(dy+108)+'" x2="'+(o+116)+'" y2="'+(dy+108)+'" stroke="#55504A" stroke-width="3"/><rect x="'+(o+148)+'" y="'+(dy+103)+'" width="6" height="10" fill="#8B857C"/>';
            s += '<line x1="'+(o+152)+'" y1="'+(dy+132)+'" x2="'+(o+116)+'" y2="'+(dy+132)+'" stroke="#55504A" stroke-width="3"/><rect x="'+(o+148)+'" y="'+(dy+127)+'" width="6" height="10" fill="#8B857C"/>';
            // spanish heel
            o = P[2].ox; s += base(o, dy, true);
            s += '<rect x="'+(o+108)+'" y="'+(dy+76)+'" width="28" height="90" fill="#EDE5D2" stroke="#7C6B52"/>';
            s += '<path d="M'+(o+136)+' '+(dy+76)+' L'+(o+190)+' '+(dy+76)+' L'+(o+190)+' '+(dy+79)+' L'+(o+136)+' '+(dy+88)+' Z" fill="#EDE5D2" stroke="#7C6B52"/>';
            s += '<rect x="'+(o+106)+'" y="'+(dy+76)+'" width="4" height="94" fill="none" stroke="#55504A" stroke-dasharray="3 2"/>';
            for (var i=0;i<3;i++){
              s += F.text(P[i].ox, dy+200, L(P[i].n), { serif:true, size:12.5, fill:"#201E1B" });
              s += F.text(P[i].ox, dy+216, L(P[i].d), { size:10.5, fill:"#55504A", max:40, lh:13 });
            }
            return s + '</svg>';
          } },
        { t:"p",
          text:{
            en:"The neck itself begins as a sawn blank. A channel is routed for the truss rod, the headstock is shaped and the fingerboard glued on, and the long curve of the back of the neck is carved — today often first by a numerically controlled machine, but finished by hand, because the shape is felt as much as measured; Takamine set up a neck line running round the clock in 1999, while K. Yairi says its necks are always finished by craftspeople's hands. The joint is then fitted. The angle at which the neck meets the body decides whether the strings will pass at the right height over the bridge, so it is offered up, checked against a straightedge and the heel shaved, over and over: visitors to Yairi in 2013 watched exactly this cycle of measuring the angle with a rule and shaving. Yairi uses an extended dovetail, glued with an aliphatic-resin glue rather than the hide glue it uses for the body. Martin, for its part, introduced a bolted mortise-and-tenon joint in 1993, when it adopted machine-cut necks, and in 2012 replaced it on its 15, 16 and 17 Series with a simplified dovetail — while keeping the traditional compound dovetail on its other American-made models. Why the angle must sometimes be corrected years later is explained on <a href=\"luthiers.html\">The Luthiers</a>.",
            ja:"ネックそのものは挽いた材から始まる。トラスロッドの溝を彫り、ヘッドを形づくって指板を貼り、ネックの裏の長い曲面を削る。いまでは最初はNC機械で削ることが多いが、仕上げは手である。形は測るのと同じほど手で感じるものだからだ。タカミネは一九九九年に二十四時間動くネックのラインを設けたが、K.ヤイリはネックを必ず職人の手で仕上げるという。それから接合を合わせる。ネックが胴と出会う角度が、弦がブリッジの上を正しい高さで通るかどうかを決めるので、当てがってはストレートエッジで確かめ、ヒールを削ることを何度もくり返す。二〇一三年にヤイリを訪れた人々は、ものさしで角度を見ては削るまさにその繰り返しを見た。ヤイリはエクステンドのダブテイルを使い、胴に使う膠ではなく樹脂系の接着剤で接ぐ。一方マーティンは、機械加工のネックを採用した一九九三年にボルト留めのほぞ継ぎを導入し、二〇一二年には15・16・17シリーズでそれを簡略化したダブテイルに置き換えた。そのほかのアメリカ製モデルには伝統の複合ダブテイルを残している。何年もあとに角度を直さねばならないことがある理由は、<a href=\"luthiers.html\">個人製作家</a>で説明した。",
            zh:"琴頸本身始於一塊鋸好的胚料。先銑出琴頸調整桿的溝槽，塑出琴頭並黏上指板，再雕出琴頸背面的長弧——如今常先以數控機械粗切，但以手工收尾，因為形狀既要量測，更要手感；Takamine 於 1999 年設置了全天候運轉的琴頸產線，K. Yairi 則表示其琴頸一定由工匠親手完成。接著裝配接合處。琴頸與琴身相交的角度，決定琴弦能否以正確高度越過琴橋，因此要反覆試裝、以直尺檢查、削修琴跟：2013 年參訪 Yairi 的人正好目睹了以尺量角度、再削修的反覆循環。Yairi 採用延伸式燕尾榫，並以脂肪族樹脂膠而非琴身所用的動物膠接合。馬丁則在 1993 年採用機械加工琴頸時引進螺栓固定的榫卯接合，並於 2012 年在 15、16、17 系列改用簡化燕尾榫——其他美國製型號仍保留傳統的複合燕尾榫。為何多年後有時必須修正角度，見<a href=\"luthiers.html\">獨立製琴師</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Premier Guitar, “The evolution of neck joints” (Martin 1993, 2012); Shimamura factory reports on K. Yairi (2013, 2024); K. Yairi, “How a Yairi guitar is made”; Takamine Gakki, company history (1999 neck line).",
            ja:"出典：Premier Guitar「The evolution of neck joints」（マーティン、一九九三年、二〇一二年）、島村楽器のK.ヤイリ工場見学記（二〇一三年、二〇二四年）、ヤイリギター「ヤイリギターができるまで」、高峰楽器製作所の沿革（一九九九年のネックライン）。",
            zh:"資料來源：Premier Guitar〈The evolution of neck joints〉（馬丁 1993 年、2012 年）；島村樂器 K. Yairi 工廠參觀報告（2013 年、2024 年）；Yairi〈ヤイリギターができるまで〉；高峰樂器製作所沿革（1999 年琴頸產線）。" } }
      ] },
    { t:"section",
      id:"finishing",
      title:{ en:"Frets, finish and setup", ja:"フレット、塗装、調整", zh:"琴格、塗裝與調校" },
      jp:"仕上げの工程",
      body:[
        { t:"p",
          text:{
            en:"Finishing a guitar is mostly waiting. The traditional finish of American guitars before the 1920s was shellac, French-polished by hand; Martin finished nearly all its guitars that way until about 1917, and by 1926 every Martin instrument was lacquered, with the new nitrocellulose lacquers sold under names such as Duco. Polyester and polyurethane finishes appeared on Asian-made guitars in the 1960s and 1970s, and in the early 1990s Taylor in California began curing its finishes with ultraviolet light, which hardens them in minutes instead of weeks. Whatever the material, the aim on a top is a thin film: the guitar maker and finishing specialist Jeff Jewitt notes that makers large and small aim for less than 5 thousandths of an inch — about 0.13 mm — on the soundboard after buffing. A typical nitrocellulose schedule is set out below.",
            ja:"ギターの塗装は、ほとんどが待つことである。一九二〇年代より前のアメリカのギターの伝統の仕上げは、手で擦りこむフレンチポリッシュのセラックだった。マーティンは一九一七年頃までほぼすべてのギターをそう仕上げ、一九二六年までにはすべての楽器が、デュコなどの名で売られた新しいニトロセルロースのラッカーで塗られるようになった。ポリエステルやポリウレタンの塗装は一九六〇〜一九七〇年代にアジア製のギターに現れ、一九九〇年代のはじめにはカリフォルニアのテイラーが紫外線で塗膜を硬化させはじめた。何週間ではなく何分かで固まる。材料が何であれ、表板でめざすのは薄い膜である。ギター製作家で塗装の専門家のジェフ・ジューイットは、大小を問わずつくり手は、磨いたあとの響板で千分の五インチ——約〇・一三ミリ——未満をめざすと記している。典型的なニトロセルロースの工程を下に示す。",
            zh:"吉他塗裝大半是在等待。1920 年代以前美國吉他的傳統塗裝是以手工法式刷漆擦塗的蟲膠；馬丁直到約 1917 年幾乎所有吉他都如此處理，到 1926 年則全部樂器改用以 Duco 等名稱販售的新型硝基漆。聚酯與聚氨酯塗裝在 1960–1970 年代出現在亞洲製吉他上；1990 年代初，加州的 Taylor 開始以紫外線固化塗裝，幾分鐘而非幾週就能硬化。無論何種材料，面板的目標都是薄膜：吉他製作者兼塗裝專家傑夫・朱維特（Jeff Jewitt）指出，大小廠家都力求響板拋光後的漆膜低於千分之五英寸——約 0.13 公釐。下表列出典型的硝基漆塗裝流程。" } },
        { t:"table",
          caption:{
            en:"A nitrocellulose lacquer schedule for guitars, as recommended by the luthiers' supplier StewMac",
            ja:"ギターのニトロセルロースラッカーの塗装工程（製作材料商StewMacの推奨）",
            zh:"吉他硝基漆塗裝流程（依製琴材料商 StewMac 建議）" },
          cols:[{ en:"Stage", ja:"段階", zh:"階段" }, { en:"Coats", ja:"回数", zh:"道數" }, { en:"Notes", ja:"注", zh:"說明" }],
          rows:[
            [
              { en:"Pore filler", ja:"目止め", zh:"填孔劑" },
              "1",
              {
                en:"Open-pored woods only (rosewood, mahogany, koa, walnut); sanded with 320 grit",
                ja:"導管の開いた木だけ（ローズウッド、マホガニー、コア、ウォルナット）。三二〇番で研ぐ",
                zh:"僅用於導管粗大的木材（玫瑰木、桃花心木、相思木、胡桃木）；以 320 號砂紙研磨" }
            ],
            [
              { en:"Sealer", ja:"シーラー", zh:"封閉底漆" },
              "3–4",
              { en:"2–3 coats a day, 1–2 hours apart", ja:"一日二〜三回、一〜二時間おき", zh:"每天 2–3 道，間隔 1–2 小時" }
            ],
            [
              { en:"Colour (optional)", ja:"着色（任意）", zh:"色漆（選用）" },
              "1–3",
              { en:"Sunbursts and tints", ja:"サンバーストや色づけ", zh:"漸層與著色" }
            ],
            [
              { en:"Clear", ja:"クリア", zh:"透明面漆" },
              "4–10",
              { en:"4–8 for a thin “vintage” finish", ja:"薄い「ヴィンテージ」仕上げなら四〜八回", zh:"薄「復古」塗裝則 4–8 道" }
            ],
            [
              { en:"Cure", ja:"乾燥", zh:"固化" },
              "—",
              { en:"10–14 days before levelling", ja:"研ぐ前に十〜十四日", zh:"研磨整平前 10–14 天" }
            ],
            [
              { en:"Level and buff", ja:"水研ぎと磨き", zh:"水磨與拋光" },
              "—",
              { en:"Wet-sanded flat, then buffed to a gloss", ja:"水研ぎで平らにし、磨いて艶を出す", zh:"濕磨至平整，再拋光出亮" }
            ]
          ] },
        { t:"defs",
          items:[
            { term:{ en:"Frets", ja:"フレット", zh:"琴格" },
              jp:"打ちこみと擦り合わせ",
              def:{
                en:"Slots are sawn at the calculated positions, and the T-section wire is pressed or tapped in, its ends bevelled and the whole set levelled, re-crowned and polished so that every fret top lies on one smooth line. Both Gifu factories fret late: K. Yairi fits its frets after the finish is on, and Takamine does its fretting in the final stage, with a laser-guided system that levels and crowns each fret to within a ten-thousandth of an inch.",
                ja:"計算した位置に溝を挽き、T字断面の線材を押しこむか打ちこみ、端を斜めに落とし、全体を擦り合わせて頂部を丸め直し、磨いて、すべてのフレットの頂が一本のなめらかな線にそろうようにする。岐阜の二つの工場はどちらもフレットを遅く入れる。K.ヤイリは塗装のあとにフレットを打ち（後打ち）、タカミネは最終の工程でフレットを入れ、レーザーで導く装置で一本ずつ一万分の一インチ以内に擦り合わせて丸める。",
                zh:"在計算好的位置鋸出琴格槽，把 T 形斷面的琴格線壓入或敲入，兩端倒角，再整體整平、重新修圓並拋光，讓每根琴格頂端連成一條平順的線。岐阜兩家工廠都較晚裝琴格：K. Yairi 在塗裝完成後才打入琴格（後打），Takamine 則在最後階段裝琴格，並以雷射導引系統把每根琴格整平修圓至萬分之一英寸以內。" } },
            { term:{ en:"Thin and hard", ja:"薄く硬く", zh:"薄而硬" },
              jp:"塗膜と響き",
              def:{
                en:"A finish has far higher internal friction than the spruce beneath it (see <a href=\"listening.html\">Can You Hear the Wood?</a>), so the less of it the better for the sound, but too little leaves the wood unprotected. K. Yairi uses a urethane finish and keeps it thin by polishing it back between coats, and describes its finishing as repeated coating and sanding.",
                ja:"塗膜は下のスプルースよりずっと内部摩擦が大きい（<a href=\"listening.html\">木は聴こえるか</a>を参照）ので、音には少ないほどよいが、少なすぎれば木を守れない。K.ヤイリはウレタン塗装を使い、途中で磨きをかけて塗膜を薄くしており、塗っては研磨する作業のくり返しと説明している。",
                zh:"漆膜的內摩擦遠高於其下的雲杉（見<a href=\"listening.html\">聽得見木頭嗎</a>），因此對聲音而言越少越好，但太少又無法保護木材。K. Yairi 使用聚氨酯塗裝，並在塗層之間研磨，使漆膜保持輕薄，其製程說明也形容為塗了又磨的反覆作業。" } },
            { term:{ en:"Setup", ja:"調整", zh:"調校" },
              jp:"最終調整",
              def:{
                en:"The bridge is glued on through a window left bare in the finish, the nut and saddle are shaped, the truss rod is set for a slight relief, and the action and intonation are adjusted; the details are on <a href=\"guitar.html\">Anatomy of a Guitar</a>. At Yairi a final sound check follows, and guitars rest in a seasoning room where classical music plays.",
                ja:"塗装を残さず木地を出した部分にブリッジを接着し、ナットとサドルを形づくり、トラスロッドでわずかな反りに合わせ、弦高とオクターブを調える。詳しくは<a href=\"guitar.html\">ギターの構造</a>に述べた。ヤイリではそのあと最終の音のチェックがあり、ギターはクラシック音楽が流れるシーズニングルームで休む。",
                zh:"琴橋黏在塗裝時預留的裸木區上，修整上弦枕與下弦枕，以琴頸調整桿設定微小的弧度，再調整弦高與音準；細節見<a href=\"guitar.html\">吉他的構造</a>。在 Yairi，接著還有最後的音色檢查，吉他會在播放古典音樂的陳放室中靜置。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: StewMac, “Nitrocellulose finishing schedule”; Jeff Jewitt, “A brief history of finishes on American guitars” (2023); Nihon Meisho, K. Yairi interview; K. Yairi, “How a Yairi guitar is made”; Takamine, “Craftsmanship”; Shimamura factory report (2024).",
            ja:"出典：StewMac「Nitrocellulose finishing schedule」、ジェフ・ジューイット「A brief history of finishes on American guitars」（二〇二三年）、日本名所のヤイリギター取材、ヤイリギター「ヤイリギターができるまで」、タカミネ「Craftsmanship」、島村楽器の工場見学記（二〇二四年）。",
            zh:"資料來源：StewMac〈Nitrocellulose finishing schedule〉；Jeff Jewitt〈A brief history of finishes on American guitars〉（2023 年）；日本名所 Yairi 採訪；Yairi〈ヤイリギターができるまで〉；Takamine〈Craftsmanship〉；島村樂器工廠參觀報告（2024 年）。" } }
      ] },
    { t:"section",
      id:"time",
      title:{ en:"How long it takes", ja:"どれほど時間がかかるか", zh:"需要多少時間" },
      jp:"工場と工房の時間",
      body:[
        { t:"grid",
          cols:3,
          cells:[
            { k:{ en:"Top wood seasoning at K. Yairi", ja:"K.ヤイリの表板材の枯らし", zh:"K. Yairi 面板材陳放" },
              v:{ en:"3–5 years", ja:"三〜五年", zh:"3–5 年" },
              d:{
                en:"Air-dried before kiln and workshop (2024 report)",
                ja:"乾燥機と工房の前に自然乾燥（二〇二四年の報告）",
                zh:"進乾燥窯與工坊前的自然乾燥（2024 年報告）" } },
            { k:{ en:"Raw wood to shipment at K. Yairi", ja:"K.ヤイリの材料から出荷まで", zh:"K. Yairi 從原料到出貨" },
              v:{ en:"3–4 months", ja:"三〜四か月", zh:"3–4 個月" },
              d:{ en:"After seasoning; about 20 guitars a day", ja:"枯らしのあと。一日およそ二十本", zh:"陳放之後；每天約 20 把" } },
            { k:{ en:"Lacquer cure before buffing", ja:"磨く前のラッカーの乾燥", zh:"拋光前的硝基漆固化" },
              v:{ en:"10–14 days", ja:"十〜十四日", zh:"10–14 天" },
              d:{ en:"StewMac's nitrocellulose schedule", ja:"StewMacのニトロセルロースの工程", zh:"StewMac 硝基漆流程" } },
            { k:{ en:"Ervin Somogyi, Oakland", ja:"アーヴィン・ソモギ（オークランド）", zh:"厄文・索莫吉（奧克蘭）" },
              v:{ en:"≈ 1 a month", ja:"月に約一本", zh:"每月約 1 把" },
              d:{ en:"Over 450 guitars since the early 1970s", ja:"一九七〇年代はじめから四百五十本以上", zh:"自 1970 年代初以來逾 450 把" } },
            { k:{ en:"Antonio de Torres, Almería", ja:"アントニオ・デ・トーレス（アルメリア）", zh:"安東尼奧・德・托雷斯（阿爾梅里亞）" },
              v:{ en:"≈ 12 a year", ja:"年に約十二本", zh:"每年約 12 把" },
              d:{ en:"In his second period, late in life", ja:"晩年の第二期", zh:"晚年的第二時期" } },
            { k:{ en:"UV-cured finish", ja:"紫外線硬化の塗装", zh:"紫外線固化塗裝" },
              v:{ en:"Minutes", ja:"数分", zh:"數分鐘" },
              d:{ en:"Used by Taylor since the early 1990s", ja:"テイラーが一九九〇年代はじめから使用", zh:"Taylor 自 1990 年代初起採用" } }
          ] },
        { t:"p",
          text:{
            en:"The figures show where the time goes. A factory does not make any single guitar much faster than a careful individual; what it does is keep dozens moving at once, so that while one batch of tops sits under clamps, another is being bound and a third is curing in the spray room. K. Yairi's three to four months from raw material to shipment, after years of seasoning, and its output of about twenty guitars a day are two faces of the same schedule. A one-person workshop cannot overlap so many stages, and its pace is set less by hours at the bench — the hundred to two hundred hours mentioned above — than by glue, lacquer and the weather. The same waiting reappears whenever a guitar returns for repair, as <a href=\"luthiers.html\">The Luthiers</a> explains.",
            ja:"これらの数字は、時間がどこへ行くかを示している。工場は、一本一本のギターを丁寧な個人よりずっと速くつくるわけではない。何十本もを同時に動かしつづけるのであり、ある組の表板が締め具の下で待つあいだに、別の組はバインディングを巻かれ、三つめは塗装室で乾いている。枯らしの何年かのあとの、K.ヤイリの材料から出荷までの三〜四か月と、一日およそ二十本という生産は、同じ段取りの二つの顔である。一人の工房はそれほど多くの工程を重ねられず、その歩みを決めるのは、作業台での時間——上で述べた百〜二百時間——よりも、接着剤とラッカーと天気である。同じ待ち時間は、ギターが修理に戻るたびにまた現れる。<a href=\"luthiers.html\">個人製作家</a>を参照。",
            zh:"這些數字顯示時間花在哪裡。工廠製作單把吉他的速度，並不比細心的個人快多少；它的做法是讓數十把同時流動：一批面板在夾具下等待時，另一批正在包邊，第三批則在噴漆室裡固化。K. Yairi 在多年陳放之後、從原料到出貨的 3–4 個月，以及每天約 20 把的產量，是同一套排程的兩面。單人工坊無法讓那麼多工序重疊，其步調與其說取決於工作台上的時數——前述的一百到兩百小時——不如說取決於膠、漆與天氣。每當吉他送修，同樣的等待又會再現，見<a href=\"luthiers.html\">獨立製琴師</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Shimamura factory report on K. Yairi (2024); Nihon Meisho, K. Yairi interview (output, months); StewMac, nitrocellulose schedule; Wikipedia, “Ervin Somogyi”, “Antonio de Torres Jurado”; Jewitt (2023) on UV-cured finishes.",
            ja:"出典：島村楽器のK.ヤイリ工場見学記（二〇二四年）、日本名所のヤイリギター取材（生産数、月数）、StewMacのニトロセルロースの工程、英語版ウィキペディア「Ervin Somogyi」「Antonio de Torres Jurado」、ジューイット（二〇二三年）の紫外線硬化塗装。",
            zh:"資料來源：島村樂器 K. Yairi 工廠參觀報告（2024 年）；日本名所 Yairi 採訪（產量、月數）；StewMac 硝基漆流程；英文維基百科〈Ervin Somogyi〉〈Antonio de Torres Jurado〉；Jewitt（2023 年）論紫外線固化塗裝。" } }
      ] },
    { t:"related",
      items:[
        { href:"bracing.html", why:{ en:"The structure inside the top.", ja:"表板のなかの構造。", zh:"面板內的結構。" } },
        { href:"tonewoods.html", why:{ en:"The woods that go in.", ja:"使われる木。", zh:"所用的木材。" } },
        { href:"yairi.html", why:{ en:"Visiting a guitar factory in Kani.", ja:"可児のギター工場を訪ねる。", zh:"參觀可兒的吉他工廠。" } },
        { href:"luthiers.html", why:{ en:"Independent makers in Gifu.", ja:"岐阜の個人の製作家。", zh:"岐阜的獨立製琴師。" } }
      ] }
  ] };

/* ---- ------------------------------------------- bracing */
GIFU.pages["bracing"] = { kicker:{ en:"Sound · 05", ja:"音 · 05", zh:"聲音 · 05" },
  title:{ en:"Bracing", ja:"力木", zh:"音梁" },
  jp:"Xブレーシング・扇状力木",
  lede:{
    en:"Inside every acoustic guitar top is a pattern of thin wooden struts, glued to the underside and carved by hand. They are called braces, and they solve a problem that no single board could: the top must be thin and light enough to vibrate freely, yet stiff and strong enough to resist the constant pull of the strings on the bridge for decades. The pattern of the braces, their size and the way they are carved are the most personal decisions a guitar maker takes. This page describes the main bracing systems and what they do.",
    ja:"どのアコースティックギターの表板の内側にも、裏に貼って手で削った細い木の支柱の模様がある。力木と呼ばれ、一枚の板では解けない問題を解く。表板は自由に振動できるほど薄く軽くなければならないが、駒にかかる弦の絶え間ない引く力に何十年も耐えるほど剛く強くなければならない。力木の模様、その大きさ、その削り方は、ギターのつくり手がくだす最も個人的な決断である。この頁は、主な力木の方式とその働きを述べる。",
    zh:"每把木吉他的面板內側，都有一組黏在底面、以手工雕削的細木支條，稱為音梁。它們解決了單一木板無法解決的問題：面板必須薄而輕，才能自由振動；又必須剛而強，才能數十年承受琴弦對琴橋持續不斷的拉力。音梁的排列、尺寸與雕削方式，是吉他工匠最具個人色彩的決定。本頁介紹主要的音梁系統及其作用。" },
  body:[
    { t:"section",
      id:"patterns",
      title:{ en:"Three families", ja:"三つの系統", zh:"三大系統" },
      jp:"ブレーシングの型",
      body:[
        { t:"figure",
          caption:{
            en:"Three classic bracing patterns seen from inside the top, simplified: ladder bracing of early parlour guitars, the X-bracing that became standard on steel-string guitars, and the fan bracing of the classical guitar.",
            ja:"表板の内側から見た三つの定番の力木の模様（簡略）。初期のパーラーギターのラダー、スチール弦ギターの標準となったX、クラシックギターの扇状。",
            zh:"從面板內側看的三種經典音梁排列（簡化）：早期客廳吉他的梯形音梁、成為鋼弦吉他標準的 X 型音梁，以及古典吉他的扇形音梁。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 290" role="img">';
            s += F.text(20, 28, lang==="en"?"BRACING PATTERNS":(lang==="ja"?"力木の型":"音梁排列"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            function top(cx){ return '<path d="M'+cx+' 50 C'+(cx+50)+' 50 '+(cx+70)+' 70 '+(cx+62)+' 100 C'+(cx+55)+' 118 '+(cx+58)+' 130 '+(cx+76)+' 160 C'+(cx+98)+' 205 '+(cx+70)+' 250 '+cx+' 250 C'+(cx-70)+' 250 '+(cx-98)+' 205 '+(cx-76)+' 160 C'+(cx-58)+' 130 '+(cx-55)+' 118 '+(cx-62)+' 100 C'+(cx-70)+' 70 '+(cx-50)+' 50 '+cx+' 50 Z" fill="#F0EDE4" stroke="#7C6B52"/><circle cx="'+cx+'" cy="112" r="20" fill="#FBFAF7" stroke="#7C6B52"/>'; }
            function br(x1,y1,x2,y2,w){ return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="#A08F73" stroke-width="'+(w||4)+'" stroke-linecap="round"/>'; }
            // ladder
            var a = 140; s += top(a);
            s += br(a-58,82,a+58,82) + br(a-66,142,a+66,142) + br(a-78,188,a+78,188) + br(a-70,222,a+70,222);
            s += '<rect x="'+(a-18)+'" y="198" width="36" height="10" fill="#B4AC9C" stroke="#7C6B52"/>';
            s += F.text(a, 276, lang==="en"?"Ladder":(lang==="ja"?"ラダー":"梯形"), { size:12, fill:"#201E1B", anchor:"middle" });
            // X
            var b2 = 380; s += top(b2);
            s += br(b2-60,90,b2+64,238) + br(b2+60,90,b2-64,238) + br(b2-58,82,b2+58,82);
            s += br(b2+14,190,b2+60,212,3) + br(b2+10,206,b2+48,236,3) + br(b2-30,150,b2-72,168,3) + br(b2+30,150,b2+72,168,3);
            s += '<rect x="'+(b2-18)+'" y="198" width="36" height="10" fill="#B4AC9C" stroke="#7C6B52"/>';
            s += F.text(b2, 276, lang==="en"?"X-bracing (steel string)":(lang==="ja"?"Xブレーシング（スチール弦）":"X 型（鋼弦）"), { size:12, fill:"#201E1B", anchor:"middle" });
            // fan
            var c = 620; s += top(c);
            s += br(c-58,82,c+58,82) + br(c-66,142,c+66,142);
            for (var i=-3;i<=3;i++) s += br(c+i*6, 150, c+i*20, 240, 3);
            s += br(c-60,236,c-30,244,3) + br(c+60,236,c+30,244,3);
            s += '<rect x="'+(c-18)+'" y="198" width="36" height="10" fill="#B4AC9C" stroke="#7C6B52" fill-opacity="0.8"/>';
            s += F.text(c, 276, lang==="en"?"Fan (classical)":(lang==="ja"?"扇状（クラシック）":"扇形（古典）"), { size:12, fill:"#201E1B", anchor:"middle" });
            return s + '</svg>';
          } },
        { t:"defs",
          items:[
            { term:{ en:"Ladder bracing", ja:"ラダーブレーシング", zh:"梯形音梁" },
              jp:"はしご",
              def:{
                en:"Straight braces across the top, like the rungs of a ladder. Simple and strong, with a bright, dry, focused sound; used on early and inexpensive guitars and revived by some makers for blues and old-time styles.",
                ja:"表板を横切るまっすぐな力木で、はしごの段のようである。簡単で強く、明るく乾いた焦点の定まった音。初期の安価なギターに使われ、ブルースやオールドタイムのために復活させるつくり手もいる。",
                zh:"橫跨面板的直條音梁，如梯子的橫檔。簡單而堅固，音色明亮、乾脆、集中；用於早期與平價吉他，也有工匠為藍調與老式音樂風格而復興它。" } },
            { term:{ en:"X-bracing", ja:"Xブレーシング", zh:"X 型音梁" },
              jp:"エックス",
              def:{
                en:"Two long braces crossing just below the soundhole, with smaller tone bars below; associated with the Martin company in the nineteenth century, it became the standard for steel-string guitars because it resists the higher tension of steel strings while letting the lower bout move. Braces are often “scalloped” — carved thinner between their ends — to free the top further.",
                ja:"サウンドホールのすぐ下で交わる二本の長い力木に、その下の小さなトーンバーを加えたもの。十九世紀のマーティン社と結びつけられ、スチール弦の高い張力に耐えながら胴の下の部分を動かせるので、スチール弦ギターの標準となった。力木はしばしば「スキャロップ」——両端のあいだを薄く削る——され、表板をさらに自由にする。",
                zh:"兩根長音梁在音孔下方交叉，下方再加數根較小的調音條；與十九世紀的 Martin 公司密切相關，因能承受鋼弦較高的張力、同時讓下部琴身振動，而成為鋼弦吉他的標準。音梁常被「扇貝削」——在兩端之間削薄——以進一步釋放面板。" } },
            { term:{ en:"Fan bracing", ja:"扇状力木", zh:"扇形音梁" },
              jp:"ファン",
              def:{
                en:"Several thin braces radiating below the soundhole, first tried in Spain in the eighteenth century, developed there in the mid-nineteenth and associated above all with Antonio de Torres, whose designs defined the modern classical guitar. Suited to the low tension of gut and nylon strings.",
                ja:"サウンドホールの下に放射状に広がる何本もの細い力木で、十八世紀のスペインで試みられ、十九世紀半ばに育ち、なにより現代のクラシックギターを定めたアントニオ・デ・トーレスと結びつけられる。ガットやナイロンの弦の低い張力に向く。",
                zh:"數根細音梁從音孔下方呈放射狀展開，十八世紀已在西班牙出現雛形，十九世紀中葉發展成熟，尤其與奠定現代古典吉他形制的安東尼奧・德・托雷斯密切相關。適合羊腸弦與尼龍弦的低張力。" } },
            { term:{ en:"Modern variants", ja:"現代の変形", zh:"現代變體" },
              jp:"ラティス・ダブルトップ",
              def:{
                en:"Since the 1980s makers have experimented with lattice bracing (a grid of thin braces, often reinforced with carbon fibre), double tops (two thin wood skins around a honeycomb core) and asymmetric patterns, all aiming to make the top lighter for its stiffness.",
                ja:"一九八〇年代から、つくり手はラティス（しばしば炭素繊維で補強した細い力木の格子）、ダブルトップ（ハニカムの芯をはさむ二枚の薄い木の皮）、非対称の模様を試してきた。いずれも剛さのわりに表板を軽くすることをめざす。",
                zh:"自 1980 年代起，工匠嘗試格子音梁（細音梁組成網格，常以碳纖維補強）、雙層面板（兩片薄木皮包夾蜂巢芯）及不對稱排列，目標都是讓面板在相同剛性下更輕。" } }
          ] }
      ] },
    { t:"section",
      id:"forces",
      title:{ en:"The forces on a top", ja:"表板にかかる力", zh:"面板承受的力" },
      jp:"弦の張力",
      body:[
        { t:"p",
          text:{
            en:"A set of light-gauge steel strings tuned to pitch pulls on a guitar with a combined tension of roughly seventy kilograms; nylon strings on a classical guitar pull with about half that. The bridge, glued to the top, converts part of that pull into a twisting force that tries to rotate the bridge forward, lifting the top behind it and sinking it in front. Over years every guitar top develops a slight belly behind the bridge. The bracing, together with a hardwood bridge plate under the bridge, must hold that deformation within limits — while giving the top as much freedom to move as possible.",
            ja:"調弦したライトゲージのスチール弦の一組は、合わせておよそ七十キロの張力でギターを引く。クラシックギターのナイロン弦はその半分ほどである。表板に接着したブリッジは、その引く力の一部を、ブリッジを前へ回そうとするねじりの力に変え、その後ろの表板を持ち上げ、前を沈める。年とともに、どのギターの表板もブリッジの後ろにわずかなふくらみをもつようになる。力木は、ブリッジの下の硬い木のブリッジプレートとともに、その変形を限度内に抑えねばならない——表板にできるかぎり多くの動く自由を与えながら。",
            zh:"一組調到標準音高的輕弦規鋼弦，對吉他施加約七十公斤的總張力；古典吉他的尼龍弦約為其一半。黏在面板上的琴橋，會把部分拉力轉為使琴橋向前轉動的扭力，讓琴橋後方的面板隆起、前方下陷。多年下來，每把吉他的面板都會在琴橋後方出現輕微隆起。音梁與琴橋下方的硬木橋板必須把這種變形控制在限度內——同時盡可能給予面板振動的自由。" } },
        { t:"figure",
          caption:{
            en:"How bracing systems are generally described as trading off qualities of sound and strength (three dots = strongest). A qualitative summary of makers' descriptions; real instruments vary with wood, size and carving.",
            ja:"力木の方式が、音と強さの性質をどう引き換えにすると一般に言われるか（点三つが最も強い）。つくり手の説明の定性的なまとめで、実際の楽器は木、大きさ、削りで変わる。",
            zh:"各種音梁系統一般被描述為如何在音色與強度之間取捨（三點為最強）。依工匠描述所做的定性彙整；實際樂器依木材、尺寸與雕削而異。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"What each pattern favours", ja:"それぞれの型が得意とするもの", zh:"各種排列的偏重" }, labelW:190,
            cols:[ { en:"Volume", ja:"音量", zh:"音量" }, { en:"Bass", ja:"低音", zh:"低音" }, { en:"Clarity", ja:"明瞭さ", zh:"清晰度" }, { en:"Sustain", ja:"サステイン", zh:"延音" }, { en:"Strength", ja:"強さ", zh:"強度" } ],
            rows:[
              { n:{ en:"Ladder", ja:"ラダー", zh:"梯形" }, v:[1,1,3,1,3] },
              { n:{ en:"X (standard)", ja:"X（標準）", zh:"X（標準）" }, v:[2,2,2,2,2] },
              { n:{ en:"X (scalloped)", ja:"X（スキャロップ）", zh:"X（扇貝削）" }, v:[3,3,2,2,1] },
              { n:{ en:"Fan", ja:"扇状", zh:"扇形" }, v:[2,2,2,2,1] },
              { n:{ en:"Lattice", ja:"ラティス", zh:"格子" }, v:[3,2,2,3,2] }
            ] }); } }
      ] },
    { t:"section",
      id:"stiffness",
      title:{ en:"Stiffness, thickness and the cube rule", ja:"剛さ、厚さ、三乗の法則", zh:"剛性、厚度與三次方法則" },
      jp:"曲げ剛性",
      body:[
        { t:"p",
          text:{
            en:"A guitar top resists bending in two ways: through its own thickness, and through the braces glued beneath it. Both obey the same rule of engineering. The bending stiffness of a plate or a beam rises with the cube of its depth, while its weight rises only in proportion. A top planed 10 per cent thinner is therefore about 27 per cent less stiff, but only 10 per cent lighter; a brace made 20 per cent taller becomes some 73 per cent stiffer for 20 per cent more wood (our calculation). This is why braces are tall and narrow rather than broad and flat, and why a few tenths of a millimetre taken from a top or a brace matter so much. It is also the maker's dilemma in a sentence: every shaving makes the top lighter and livelier, and every shaving brings it closer to the point at which the pull of the strings will distort it.",
            ja:"ギターの表板は二つのしかたで曲がりに抗う。それ自身の厚さと、裏に貼った力木とである。どちらも工学の同じ法則にしたがう。板や梁の曲げ剛さは厚さ（高さ）の三乗で増えるが、重さは比例してしか増えない。だから表板を一割薄く削ると、剛さはおよそ二十七パーセント落ちるのに、重さは一割しか減らない。力木を二割高くすれば、木は二割増えるだけで、剛さはおよそ七十三パーセント増す（本書の計算）。力木が幅広く平たいのではなく高く細いのはこのためであり、表板や力木から削る十分の数ミリがこれほど効くのもこのためである。つくり手のジレンマも一言でいえばここにある。ひと削りごとに表板は軽く生き生きとなり、ひと削りごとに弦の引く力で変形する境目に近づく。",
            zh:"吉他面板以兩種方式抵抗彎曲：靠本身的厚度，以及黏在底面的音梁。兩者遵循同一條工程法則：板或梁的彎曲剛性與其厚度（高度）的三次方成正比，重量卻只按比例增加。因此面板削薄 10%，剛性約降低 27%，重量卻只減少 10%；音梁加高 20%，只多用 20% 的木料，剛性卻增加約 73%（本書計算）。這就是音梁做得高而窄、而非寬而扁的原因，也是從面板或音梁削去零點幾公釐之所以影響如此之大的原因。工匠的兩難一言以蔽之：每削一刀，面板就更輕盈靈動；每削一刀，也更接近被琴弦拉力扭曲變形的臨界點。" } },
        { t:"p",
          text:{
            en:"How thick, then? Published guidance varies more than one might expect. Ervin Somogyi, the Hungarian-born luthier and teacher who has worked in Oakland, California, since the early 1970s, once set side by side the figures given in the standard manuals, and they differ by more than a millimetre. The Spanish Tatay family of makers went thinnest of all, taking classical tops to about the thickness of a coin in the middle and thinner still at the edges. Somogyi's own conclusion was that no single number is right, because spruce varies so much from board to board: he takes each top to a target deflection under a standard weight rather than to a fixed thickness — an approach described further below.",
            ja:"では、どれほどの厚さか。公にされた手引きは、思うよりばらつく。ハンガリー生まれで、一九七〇年代のはじめからカリフォルニア州オークランドで仕事をつづける製作家・教師のアーヴィン・ソモギは、定番の教本にある数字を並べてみせたことがあり、その差は一ミリを超える。スペインのタタイ一族の製作家はいちばん薄く、クラシックの表板を中央で硬貨ほどの厚さに、縁ではさらに薄く仕上げた。ソモギ自身の結論は、正しい数字は一つではないというものである。スプルースは一枚ごとにあまりに違うからだ。彼は表板を決まった厚さではなく、決まった重りをのせたときの目標のたわみまで削る。この方法は後で述べる。",
            zh:"那麼，該多厚？已出版的指引差異之大超乎想像。生於匈牙利、自 1970 年代初起在美國加州奧克蘭工作的製琴師兼教師厄文・索莫吉（Ervin Somogyi），曾把標準教科書中的數字並列比較，差距超過 1 公釐。西班牙的 Tatay 製琴家族做得最薄，把古典吉他面板中央削到約一枚硬幣的厚度，邊緣更薄。索莫吉自己的結論是：沒有單一的正確數字，因為雲杉每一片都差異很大；他不把面板削到固定厚度，而是削到在標準重量下達到目標撓度——這種方法將在後文說明。" } },
        { t:"table",
          caption:{
            en:"Top thicknesses recommended in guitar-making literature, as compiled by Ervin Somogyi",
            ja:"ギター製作の文献が勧める表板の厚さ（アーヴィン・ソモギのまとめによる）",
            zh:"吉他製作文獻建議的面板厚度（依厄文・索莫吉整理）" },
          cols:[
            { en:"Source", ja:"出典", zh:"出處" },
            { en:"Classical top", ja:"クラシックの表板", zh:"古典吉他面板" },
            { en:"Steel-string top", ja:"スチール弦の表板", zh:"鋼弦吉他面板" }
          ],
          rows:[
            ["Irving Sloane", "≈ 2.4 mm", "—"],
            ["Cumpiano & Natelson", "2.5–2.8 mm", "3.2–3.3 mm"],
            [{ en:"Earlier manuals", ja:"それ以前の教本", zh:"更早的教科書" }, "—", "2.4–2.8 mm"],
            [
              { en:"Tatay family, Spain", ja:"タタイ家（スペイン）", zh:"Tatay 家族（西班牙）" },
              { en:"≈ 1.9 mm centre, ≈ 1.3 mm edges", ja:"中央約1.9mm、縁約1.3mm", zh:"中央約 1.9 mm，邊緣約 1.3 mm" },
              "—"
            ]
          ] },
        { t:"p",
          text:{
            en:"Braces are almost always cut from the same light, stiff spruce as tops — or from cedar on some classical guitars — and the way the wood is oriented matters as much as the species. Brace stock is quartersawn and ideally split rather than sawn, so that the fibres run unbroken from end to end, and it is glued with the growth rings standing upright, at right angles to the top: the orientation in which a strip of wood is stiffest in bending. Runout, fibres that leave the surface along the length, weakens a brace exactly as it weakens a top. A few contemporary designs laminate a strip of carbon fibre into a wooden brace, or replace the wood altogether, to gain stiffness without adding mass.",
            ja:"力木はほとんどいつも、表板と同じ軽く剛いスプルースから——クラシックではシダーのこともある——とられ、木の向きは樹種と同じほど大事である。力木の材は柾目にとり、できれば鋸で挽かずに割って、繊維が端から端まで途切れないようにする。そして年輪を立てて、表板に直角になるように貼る。木の細い棒が曲げに対して最も剛くなる向きである。長さ方向に繊維が表面から抜けていく目切れは、表板と同じく力木も弱くする。現代の設計のなかには、質量を増やさずに剛さを得るため、木の力木に炭素繊維の帯を貼り合わせたり、木をそっくり置き換えたりするものもある。",
            zh:"音梁幾乎都取自與面板相同的輕而剛的雲杉——部分古典吉他用雪松——而木材的方向與樹種同樣重要。音梁材取徑切，最好以劈裂而非鋸切取得，讓纖維從頭到尾不中斷；黏貼時年輪直立、與面板垂直，這是木條抗彎最剛的方向。順長度方向纖維從表面跑出的「斜紋」（runout），會像削弱面板一樣削弱音梁。少數當代設計在木音梁中夾入一條碳纖維，或乾脆以碳纖維取代木材，以在不增加質量的前提下提高剛性。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ervin Somogyi, “Specific top thickness in the guitar” (esomogyi.com); Wikipedia, “Ervin Somogyi”; Portland Guitar, “Acoustic guitar bracing science” (carbon-fibre braces). Stiffness ratios calculated.",
            ja:"出典：アーヴィン・ソモギ「Specific top thickness in the guitar」（esomogyi.com）、英語版ウィキペディア「Ervin Somogyi」、Portland Guitar「Acoustic guitar bracing science」（炭素繊維の力木）。剛さの比は計算値。",
            zh:"資料來源：Ervin Somogyi〈Specific top thickness in the guitar〉（esomogyi.com）；英文維基百科〈Ervin Somogyi〉；Portland Guitar〈Acoustic guitar bracing science〉（碳纖維音梁）。剛性比例為計算值。" } }
      ] },
    { t:"section",
      id:"history",
      title:{ en:"A short history of the struts", ja:"力木の小史", zh:"音梁簡史" },
      jp:"マーティンとトーレス",
      body:[
        { t:"p",
          text:{
            en:"Wooden struts under a top are as old as the guitar's thin soundboard, but the two patterns that define today's instruments took shape in the middle of the nineteenth century in two very different places: in Seville and Almería, in the hands of Antonio de Torres, and in New York and Pennsylvania, in the workshop of a Saxon immigrant, Christian Frederick Martin. Neither man invented his system from nothing, and neither system has stood still since.",
            ja:"表板の下の木の支柱は、ギターの薄い響板と同じほど古い。しかし今日の楽器を定める二つの模様が形をとったのは十九世紀の半ば、まったく違う二つの場所においてである。セビーリャとアルメリアのアントニオ・デ・トーレスの手のなかと、ニューヨークとペンシルベニアの、ザクセンから来た移民クリスティアン・フレデリック・マーティンの工房とである。どちらも自分の方式を無からつくったのではなく、どちらの方式もその後とどまってはいない。",
            zh:"面板下的木支條與吉他的薄響板一樣古老，但定義今日樂器的兩種排列，成形於十九世紀中葉兩個截然不同的地方：塞維亞與阿爾梅里亞的安東尼奧・德・托雷斯手中，以及紐約與賓州一位薩克森移民——克里斯蒂安・弗雷德里克・馬丁——的工坊裡。兩人都不是憑空發明自己的系統，兩種系統此後也從未停止演變。" } },
        { t:"timeline",
          items:[
            { year:{ en:"18th century", ja:"十八世紀", zh:"18 世紀" },
              title:{ en:"Fan struts in Seville", ja:"セビーリャの扇状力木", zh:"塞維亞的扇形音梁" },
              jp:"サンギーノ",
              text:{
                en:"The earliest known fan-like struts under a guitar top are attributed to the Seville maker Francisco Sanguino, in the middle to later part of the century. Most European guitars of the period, and of the early nineteenth century, were braced instead with two to four bars running across the top.",
                ja:"ギターの表板の下に扇のような支柱を貼った最も古い例は、この世紀の半ばから後半のセビーリャの製作家フランシスコ・サンギーノのものとされる。この時代と十九世紀はじめのヨーロッパのギターの多くは、そのかわりに表板を横切る二〜四本の棒で補強されていた。",
                zh:"已知最早在吉他面板下使用扇形支條的，是十八世紀中後期塞維亞的製琴師法蘭西斯科・桑吉諾（Francisco Sanguino）。當時與十九世紀初的歐洲吉他，多半改以二到四根橫跨面板的橫條補強。" } },
            { year:"1833",
              title:{ en:"Martin in New York", ja:"マーティン、ニューヨークへ", zh:"馬丁抵達紐約" },
              jp:"ザクセンから",
              text:{
                en:"Christian Frederick Martin, born in 1796 in Markneukirchen in Saxony, a centre of instrument making, leaves a guild system he finds too restrictive and opens a business in New York. In 1839 he moves to Nazareth, Pennsylvania, where C. F. Martin & Co. has remained ever since.",
                ja:"一七九六年に楽器づくりの中心地ザクセンのマルクノイキルヒェンに生まれたクリスティアン・フレデリック・マーティンは、窮屈に感じたギルドの仕組みを離れ、ニューヨークに店を開く。一八三九年にペンシルベニア州ナザレスへ移り、C・F・マーティン社はそれ以来そこにある。",
                zh:"1796 年生於薩克森樂器製作重鎮馬克諾伊基興的克里斯蒂安・弗雷德里克・馬丁，離開他認為過於拘束的行會體制，在紐約開業。1839 年遷往賓州拿撒勒，C. F. Martin 公司自此一直留在當地。" } },
            { year:{ en:"c. 1847", ja:"一八四七年頃", zh:"約 1847 年" },
              title:{ en:"The mature X", ja:"完成したX", zh:"成熟的 X 型" },
              jp:"ガット弦のために",
              text:{
                en:"A Martin guitar of about this date is regarded by some specialists as the earliest known to show the fully developed X. Former Martin employees, the partners Schmidt & Maul, were experimenting with similar bracing in the same years. There is no evidence that Martin invented the X, but his firm was the first to use it on a large scale — on guitars strung with gut.",
                ja:"この頃のマーティンのギターが、完成したXを示す最も古い例だと考える専門家もいる。マーティンの元従業員シュミットとモールの二人も、同じ頃に似た力木を試していた。マーティンがXを発明した証拠はないが、それを大規模に使ったのは同社が最初である——ガット弦を張ったギターに。",
                zh:"有專家認為，約此時的一把馬丁吉他，是已知最早呈現完整 X 型的例子。曾任職馬丁的 Schmidt 與 Maul 二人，同一時期也在試驗類似的音梁。沒有證據顯示 X 型是馬丁發明的，但他的公司是第一個大規模採用者——用在羊腸弦吉他上。" } },
            { year:"1862",
              title:{ en:"Torres's paper guitar", ja:"トーレスの紙のギター", zh:"托雷斯的紙吉他" },
              jp:"表板が鳴る",
              text:{
                en:"Working in Seville from 1852, Antonio de Torres (1817–1892) enlarges the body, thins the top and lays out its fan of struts geometrically. In 1862 he builds a guitar with back and sides of papier-mâché to show that it is the top, not the body, that sings. It survives in the Museu de la Música in Barcelona, restored to playing condition.",
                ja:"一八五二年からセビーリャで仕事をしたアントニオ・デ・トーレス（一八一七〜一八九二年）は、胴を大きくし、表板を薄くし、扇状の力木を幾何学的に配した。一八六二年には、鳴るのは胴ではなく表板であることを示すため、裏板と側板を張り子でつくったギターを製作した。それはバルセロナの音楽博物館に残り、弾ける状態に修復されている。",
                zh:"自 1852 年起在塞維亞工作的安東尼奧・德・托雷斯（1817–1892）加大琴身、削薄面板，並以幾何方式排列扇形音梁。1862 年他製作了一把背板與側板以紙漿製成的吉他，證明發聲的是面板而非琴身。這把琴現存巴塞隆納音樂博物館，已修復至可彈奏狀態。" } },
            { year:"1916",
              title:{ en:"Steel strings, fan braces", ja:"スチール弦に扇状力木", zh:"鋼弦配扇形音梁" },
              jp:"ハワイアン",
              text:{
                en:"Martin's first catalogued steel-string guitars are Hawaiian models, played flat on the lap with a steel bar. For them the company reverts to fan bracing.",
                ja:"マーティンが初めてカタログに載せたスチール弦のギターは、膝に寝かせてスチールバーで弾くハワイアンのモデルだった。同社はそれに扇状の力木を使った。",
                zh:"馬丁首批列入型錄的鋼弦吉他，是平放膝上以滑棒彈奏的夏威夷吉他。公司為此改回扇形音梁。" } },
            { year:"1921",
              title:{ en:"The X carries steel", ja:"Xがスチール弦を支える", zh:"X 型承載鋼弦" },
              jp:"アメリカのフラットトップ",
              text:{
                en:"By this year Martin has turned its production towards steel-string guitars in response to demand. The X, conceived for gut, proves able to carry the far higher tension, and it becomes the standard pattern of the American flat-top guitar.",
                ja:"この年までに、マーティンは需要に応えて生産をスチール弦のギターに切り替えていた。ガット弦のために考えられたXは、はるかに高い張力を支えられることがわかり、アメリカのフラットトップギターの標準の模様となる。",
                zh:"到這一年，馬丁已因應市場需求把生產重心轉向鋼弦吉他。原為羊腸弦設計的 X 型證明能承受高得多的張力，成為美國平面吉他的標準排列。" } },
            { year:{ en:"1935–1938", ja:"一九三五〜一九三八年", zh:"1935–1938 年" },
              title:{ en:"The X moves back", ja:"Xが後ろへ", zh:"X 型後移" },
              jp:"フォワードシフト",
              text:{
                en:"Martin moves the crossing of the X further from the soundhole — on 12-fret 00 models from the middle of 1935, on the 000 and the Dreadnought from the middle of 1938. Guitars built before the change are now described as “forward-shifted”.",
                ja:"マーティンはXの交点をサウンドホールから遠ざける。十二フレット接合の00は一九三五年半ばから、000とドレッドノートは一九三八年半ばからである。変更前につくられたギターは、いま「フォワードシフト」と呼ばれる。",
                zh:"馬丁把 X 型的交點移離音孔——12 格接琴身的 00 型自 1935 年中起，000 型與 Dreadnought 自 1938 年中起。變更前製作的吉他，如今稱為「前移式」（forward-shifted）。" } },
            { year:"1944–45",
              title:{ en:"Scallops give way to tapers", ja:"スキャロップからテーパーへ", zh:"扇貝削改為漸縮" },
              jp:"戦前と戦後",
              text:{
                en:"At the end of 1944 Martin stops scalloping its braces and, from 1945, tapers them instead. Pre-war guitars with scalloped, forward-shifted bracing later become among the most sought-after American guitars of all, and their bracing the most imitated.",
                ja:"マーティンは一九四四年末に力木のスキャロップをやめ、一九四五年からはかわりにテーパーをつける。スキャロップしたフォワードシフトの力木をもつ戦前のギターは、のちにアメリカのギターのなかで最も求められるものの一つとなり、その力木は最もまねされるものとなる。",
                zh:"馬丁於 1944 年底停止扇貝削音梁，自 1945 年起改為漸縮式。具扇貝削、前移式音梁的戰前吉他，後來成為最受追捧的美國吉他之一，其音梁也成為最常被仿效的設計。" } },
            { year:{ en:"1970s", ja:"一九七〇年代", zh:"1970 年代" },
              title:{ en:"Kasha's asymmetry", ja:"カシャの非対称", zh:"卡沙的不對稱設計" },
              jp:"インピーダンス整合",
              text:{
                en:"The American chemist Michael Kasha re-thinks the whole guitar on the principle of mechanical impedance matching, with an asymmetric pattern of braces — one of the first attempts to design bracing from physics rather than from tradition.",
                ja:"アメリカの化学者マイケル・カシャは、機械インピーダンス整合の原理からギター全体を考え直し、非対称の力木の模様を提案する。伝統からではなく物理学から力木を設計しようとした初期の試みの一つである。",
                zh:"美國化學家麥可・卡沙（Michael Kasha）以機械阻抗匹配原理重新思考整把吉他，提出不對稱的音梁排列——這是最早嘗試以物理學而非傳統來設計音梁的作法之一。" } },
            { year:{ en:"Late 20th century", ja:"二十世紀後半", zh:"20 世紀後半" },
              title:{ en:"The lattice", ja:"ラティス", zh:"格子音梁" },
              jp:"スモールマン",
              text:{
                en:"In Australia, Greg Smallman (born 1947) builds classical guitars with very thin cedar tops held by a lattice of balsa and carbon fibre, set in thick, heavy, arched backs and sides. John Williams, who praised them publicly in 1993, becomes their best-known player.",
                ja:"オーストラリアのグレッグ・スモールマン（一九四七年生まれ）は、バルサと炭素繊維の格子で支えたとても薄いシダーの表板を、厚く重くふくらませた裏板と側板に組み合わせたクラシックギターをつくる。一九九三年に公にそれをたたえたジョン・ウィリアムスが、最もよく知られた弾き手となる。",
                zh:"澳洲的葛瑞格・史莫曼（Greg Smallman，1947 年生）製作的古典吉他，以輕木與碳纖維組成的格子支撐極薄的雪松面板，搭配厚重而拱起的背板與側板。1993 年公開讚揚這些吉他的約翰・威廉斯，成為其最知名的演奏者。" } },
            { year:"1989",
              title:{ en:"The double top", ja:"ダブルトップ", zh:"雙層面板" },
              jp:"ノーメックス",
              text:{
                en:"In Germany, Matthias Dammann builds the first double-top guitar: two very thin skins of wood bonded to a light core. From 1995 the core is a Nomex honeycomb. Gernot Wagner, who worked with him in the late 1980s, builds his own a few years later.",
                ja:"ドイツのマティアス・ダマンが最初のダブルトップのギターをつくる。とても薄い二枚の木の皮を軽い芯に接着したものである。一九九五年からは芯にノーメックスのハニカムを使う。一九八〇年代後半にともに仕事をしたゲルノット・ワーグナーも、数年後に自分のものをつくる。",
                zh:"德國的馬蒂亞斯・達曼（Matthias Dammann）製作出第一把雙層面板吉他：兩片極薄木皮黏合在輕質芯材上。自 1995 年起，芯材改用 Nomex 蜂巢材。1980 年代後期與他共事的格諾特・華格納（Gernot Wagner），數年後也做出自己的雙層面板。" } },
            { year:"2011",
              title:{ en:"Bracing by numbers", ja:"数字で決める力木", zh:"以數字設計音梁" },
              jp:"ゴアとジレ",
              text:{
                en:"The Australian luthiers Trevor Gore and Gerard Gilet publish a two-volume treatise of some 800 pages on designing tops and bracing from measured stiffness and resonances — tap-tuning restated in the language of engineering. A second edition follows in 2016.",
                ja:"オーストラリアの製作家トレヴァー・ゴアとジェラール・ジレが、測った剛さと共鳴から表板と力木を設計する、二巻でおよそ八百頁の論考を出す。タップトーンを工学のことばで言い直したものである。第二版は二〇一六年に出る。",
                zh:"澳洲製琴師崔佛・高爾（Trevor Gore）與傑哈・吉列（Gerard Gilet）出版兩卷、約 800 頁的專著，依實測剛性與共振來設計面板與音梁——等於以工程語言重述敲擊調音。第二版於 2016 年問世。" } },
            { year:"2017",
              title:{ en:"Forward again", ja:"ふたたび前へ", zh:"再度前移" },
              jp:"D-28",
              text:{
                en:"Martin's redesigned D-28 returns to a forward-shifted X, some eight decades after the company moved it back.",
                ja:"作り直されたマーティンのD-28が、フォワードシフトのXに戻る。同社がそれを後ろへ移しておよそ八十年後のことである。",
                zh:"馬丁重新設計的 D-28 回歸前移式 X 型音梁，距公司當年把它後移約八十年。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Wikipedia, “Guitar bracing”, “C. F. Martin & Company”, “Martin D-28”, “Antonio de Torres Jurado”, “Greg Smallman”; vintagemartin.com, “X marks the spot”; Siccas Guitars, “The pioneers of the double-top guitar”; Gore Guitars, “The book”.",
            ja:"出典：英語版ウィキペディア「Guitar bracing」「C. F. Martin & Company」「Martin D-28」「Antonio de Torres Jurado」「Greg Smallman」、vintagemartin.com「X marks the spot」、Siccas Guitars「The pioneers of the double-top guitar」、Gore Guitars「The book」。",
            zh:"資料來源：英文維基百科〈Guitar bracing〉〈C. F. Martin & Company〉〈Martin D-28〉〈Antonio de Torres Jurado〉〈Greg Smallman〉；vintagemartin.com〈X marks the spot〉；Siccas Guitars〈The pioneers of the double-top guitar〉；Gore Guitars〈The book〉。" } }
      ] },
    { t:"section",
      id:"xtop",
      title:{ en:"Inside an X-braced top", ja:"Xブレーシングの表板の内側", zh:"X 型音梁面板的內部" },
      jp:"トーンバー・スキャロップ",
      body:[
        { t:"p",
          text:{
            en:"Seen from inside, a steel-string top carries more than its X. Above the soundhole a stout brace runs across the upper bout, taking the compression where the neck block and the fingerboard extension push against the top; small patches or rings reinforce the edge of the soundhole itself. The two arms of the X cross just below the soundhole and run down past the bridge into the lower bout, and in the angle below the crossing they enclose the hardwood bridge plate. On the treble side below the X, two or more angled tone bars stiffen the area behind the bridge, and short finger braces run from the arms of the X towards the edges. Each part has a job; the maker's skill lies in deciding how much of each the top needs, and where.",
            ja:"内側から見ると、スチール弦の表板にはXのほかにもいろいろなものがある。サウンドホールの上には太い力木が胴の上部を横切り、ネックブロックと指板の延長が表板を押すところで圧縮を受けとめる。小さな当て板や輪がサウンドホールの縁そのものを補強する。Xの二本の腕はサウンドホールのすぐ下で交わり、ブリッジのわきを通って胴の下部へ伸び、交点の下の角に硬い木のブリッジプレートを抱える。Xの下の高音側では、二本以上の斜めのトーンバーがブリッジの後ろを剛くし、短いフィンガーブレースがXの腕から縁へ向かう。どれにも役目がある。つくり手の腕は、表板がどれをどれだけ、どこに必要とするかを決めるところにある。",
            zh:"從內部看，鋼弦吉他面板上不只有 X。音孔上方有一根粗壯的橫梁橫跨上部琴身，承受頸塊與指板延伸段壓向面板的壓力；小補片或補強環則加固音孔邊緣。X 的兩臂在音孔正下方交叉，經過琴橋兩側延伸至下部琴身，並在交點下方的夾角內包住硬木橋板。X 下方的高音側，有兩根以上斜置的調音條強化琴橋後方區域，短小的指狀音梁則從 X 臂伸向琴邊。每個部分各有職責；工匠的功力在於判斷面板在何處、需要多少支撐。" } },
        { t:"figure",
          caption:{
            en:"Four ways of shaping a brace, seen from the side with the top below (schematic; heights exaggerated). Tall where strength is needed, low where the top should move.",
            ja:"力木の削り方の四つの型。表板を下にして横から見たもの（模式図。高さは誇張）。強さが要るところは高く、表板を動かしたいところは低く。",
            zh:"音梁的四種削形，從側面看、面板在下方（示意圖；高度已誇大）。需要強度處高，希望面板振動處低。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 330" role="img">';
            s += F.text(20, 28, lang==="en"?"BRACE PROFILES":(lang==="ja"?"力木の側面の形":"音梁側面輪廓"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            var P = [
              { n:{ en:"Straight", ja:"ストレート", zh:"直條" }, d:{ en:"Full height end to end: strong and stiff; early and inexpensive guitars.", ja:"端から端まで同じ高さ。強く剛い。初期や安価なギター。", zh:"全長等高：堅固剛硬；早期與平價吉他。" },
                path:function(x,y){ return 'M'+x+' '+y+' L'+x+' '+(y-34)+' L'+(x+300)+' '+(y-34)+' L'+(x+300)+' '+y+' Z'; } },
              { n:{ en:"Tapered", ja:"テーパー", zh:"漸縮" }, d:{ en:"Full height in the middle, sloping to low ends; Martin's choice from 1945.", ja:"中央は高く端へ低く傾斜。一九四五年からのマーティン。", zh:"中段等高，向兩端斜降；馬丁自 1945 年起的作法。" },
                path:function(x,y){ return 'M'+x+' '+y+' L'+x+' '+(y-6)+' L'+(x+90)+' '+(y-34)+' L'+(x+210)+' '+(y-34)+' L'+(x+300)+' '+(y-6)+' L'+(x+300)+' '+y+' Z'; } },
              { n:{ en:"Scalloped", ja:"スキャロップ", zh:"扇貝削" }, d:{ en:"Scooped between high points: tall at the X crossing and near the ends, low between.", ja:"高いところのあいだをえぐる。Xの交点と端近くは高く、そのあいだは低い。", zh:"在高點之間挖凹：X 交點與近端處高，其間低。" },
                path:function(x,y){ return 'M'+x+' '+y+' L'+x+' '+(y-5)+' Q'+(x+22)+' '+(y-34)+' '+(x+45)+' '+(y-30)+' Q'+(x+95)+' '+(y-6)+' '+(x+150)+' '+(y-34)+' Q'+(x+205)+' '+(y-6)+' '+(x+255)+' '+(y-30)+' Q'+(x+278)+' '+(y-34)+' '+(x+300)+' '+(y-5)+' L'+(x+300)+' '+y+' Z'; },
                mark:true },
              { n:{ en:"Parabolic", ja:"パラボリック", zh:"拋物線形" }, d:{ en:"A smooth arch, highest in the middle; common on fan struts and tone bars.", ja:"中央が最も高いなめらかな弧。扇状力木やトーンバーに多い。", zh:"平滑拱形，中央最高；常見於扇形音梁與調音條。" },
                path:function(x,y){ return 'M'+x+' '+y+' L'+x+' '+(y-3)+' Q'+(x+150)+' '+(y-66)+' '+(x+300)+' '+(y-3)+' L'+(x+300)+' '+y+' Z'; } }
            ];
            for (var i=0;i<4;i++){
              var col=i%2, row=Math.floor(i/2), x=40+col*370, y=118+row*140;
              s += '<rect x="'+(x-14)+'" y="'+y+'" width="328" height="7" fill="#EADCC1" stroke="#A08F73"/>';
              s += '<path d="'+P[i].path(x,y)+'" fill="#E7DFD2" stroke="#7C6B52"/>';
              if (P[i].mark){ s += '<line x1="'+(x+150)+'" y1="'+(y-40)+'" x2="'+(x+150)+'" y2="'+(y-52)+'" stroke="#8B857C"/>' + F.text(x+150, y-56, lang==="en"?"X crossing":(lang==="ja"?"Xの交点":"X 交點"), { size:10, fill:"#8B857C", anchor:"middle" }); }
              s += F.text(x-14, y+24, L(P[i].n), { serif:true, size:12.5, fill:"#201E1B" });
              s += F.text(x-14, y+40, L(P[i].d), { size:10.5, fill:"#55504A", max:56, lh:13 });
            }
            return s + '</svg>';
          } },
        { t:"defs",
          items:[
            { term:{ en:"Forward-shifted X", ja:"フォワードシフトのX", zh:"前移式 X 型" },
              jp:"交点の位置",
              def:{
                en:"The crossing set closer to the soundhole, which leaves a larger area of top free to move between the X and the bridge. It is generally credited with more bass and volume, at some cost in strength — the reason commonly given for Martin's move back in the late 1930s, as steel strings grew heavier.",
                ja:"交点をサウンドホールに近づけたもの。Xとブリッジのあいだに動ける表板が広く残る。一般に低音と音量が増すとされ、そのかわり強さがいくらか落ちる。スチール弦が太くなるにつれ、一九三〇年代後半にマーティンが交点を後ろへ戻した理由として、よくそう説明される。",
                zh:"交點設得更靠近音孔，使 X 與琴橋之間留下更大的可振動面積。一般認為能增加低音與音量，但強度略有犧牲——這也是常被用來解釋馬丁在 1930 年代後期、隨鋼弦變粗而把交點後移的理由。" } },
            { term:{ en:"Scalloping", ja:"スキャロップ", zh:"扇貝削" },
              jp:"えぐり",
              def:{
                en:"Carving a brace down in shallow curves between its high points, so that it keeps its height where strength is needed — at the crossing, over the bridge plate — and loses it where the top should flex. Scalloping lightens the top and is said to free the bass; done too boldly, it invites a sinking top.",
                ja:"力木を高いところのあいだで浅い曲線に削り下げ、強さが要るところ——交点、ブリッジプレートの上——では高さを保ち、表板をしならせたいところでは低くする。表板を軽くし、低音を解き放つと言われるが、やりすぎると表板の沈みを招く。",
                zh:"在音梁的高點之間削出淺弧，使需要強度處——交點、橋板上方——保持高度，希望面板彎曲處則降低。扇貝削能減輕面板重量，據說能釋放低音；削得太大膽則易導致面板下陷。" } },
            { term:{ en:"Tone bars and finger braces", ja:"トーンバーとフィンガーブレース", zh:"調音條與指狀音梁" },
              jp:"補助の力木",
              def:{
                en:"The smaller braces of the lower bout. Their number and angle tune the stiffness of the area behind the bridge, which carries the forward roll of the bridge; makers alter them to shift the balance between bass and treble.",
                ja:"胴の下部の小さな力木。その本数と角度が、ブリッジの前への回転を受けとめるブリッジ後方の剛さを決める。つくり手はこれを変えて低音と高音の釣り合いを動かす。",
                zh:"下部琴身的較小音梁。其數量與角度調整琴橋後方的剛性——該區域承受琴橋向前翻轉的力；工匠藉改變它們來調整低音與高音的平衡。" } }
          ] }
      ] },
    { t:"section",
      id:"voicing",
      title:{ en:"Voicing a top", ja:"表板の音づくり", zh:"面板的調音" },
      jp:"ボイシング",
      body:[
        { t:"p",
          text:{
            en:"Makers call the final shaping of a top and its braces <em>voicing</em>, and the word is apt. Two tops cut from one tree and braced to one drawing can sound noticeably different, and voicing is the attempt to bring each one to its best. The methods range from the purely aural to the fully instrumented, and most makers now combine the two: ears and fingers to judge, gauges and microphones to check and to record what worked.",
            ja:"つくり手は、表板と力木の最後の削りを<em>ボイシング</em>（音づくり）と呼ぶ。言い得ている。同じ木からとり、同じ図面で力木を貼った二枚の表板でも、はっきり違って鳴ることがあり、ボイシングはそれぞれを最もよい状態にもっていこうとする試みである。方法は耳だけに頼るものから計測器をそろえたものまでさまざまで、いまでは多くのつくり手が両方を組み合わせる。判断には耳と指を、確かめてうまくいったことを記録するにはゲージとマイクを使う。",
            zh:"工匠把面板與音梁的最後修整稱為「<em>調音</em>」（voicing），這個詞十分貼切。取自同一棵樹、依同一張圖貼上音梁的兩片面板，聲音可能明顯不同；調音就是設法讓每一片都發揮到最好。方法從純憑耳朵到全套儀器量測都有，如今多數工匠兩者並用：以耳朵與手指判斷，以量具與麥克風驗證並記錄有效的作法。" } },
        { t:"steps",
          items:[
            { title:{ en:"Sort the wood", ja:"木を選り分ける", zh:"挑選木材" },
              jp:"剛さと重さ",
              meta:{ en:"flex, tap or measure", ja:"しならせ、叩き、測る", zh:"彎折、敲擊或量測" },
              text:{
                en:"Tops are judged by their stiffness for their weight, by flexing and tapping them or by measuring. A stiff, light top can be taken thinner than a soft, heavy one and still carry the strings. See <a href=\"tonewoods.html\">Tonewoods</a>.",
                ja:"表板は重さのわりの剛さで判断する。しならせて叩くか、測るかである。剛く軽い表板は、柔らかく重いものより薄くしても弦を支えられる。<a href=\"tonewoods.html\">音響材</a>を参照。",
                zh:"面板以「相對於重量的剛性」來判斷，方法是彎折敲擊或量測。剛而輕的面板，可以比軟而重的削得更薄，仍足以承受琴弦。見<a href=\"tonewoods.html\">音木</a>。" } },
            { title:{ en:"Thin to a target", ja:"目標まで薄くする", zh:"削至目標值" },
              jp:"たわみ",
              meta:{ en:"deflection gauge", ja:"たわみゲージ", zh:"撓度量規" },
              text:{
                en:"Instead of a fixed figure, many makers thin each top until it reaches a target stiffness. Ervin Somogyi's method is to load the plate with a standard weight and thin it until it deflects by a chosen amount.",
                ja:"決まった数字のかわりに、多くのつくり手は表板ごとに目標の剛さに届くまで薄くする。アーヴィン・ソモギの方法は、板に決まった重りをのせ、決めた量だけたわむまで薄くするものである。",
                zh:"許多工匠不採用固定數字，而是把每片面板削到目標剛性。厄文・索莫吉的方法是在板上放標準重量，削薄直到撓度達到預定值。" } },
            { title:{ en:"Glue the braces", ja:"力木を貼る", zh:"黏貼音梁" },
              jp:"ゴーバー",
              meta:{ en:"dish and go-bars", ja:"皿型の台とゴーバー", zh:"弧形底盤與壓桿" },
              text:{
                en:"Braces with gently curved gluing faces are pressed onto the top as it lies in a shallow concave dish, usually by flexible rods sprung down from a frame above, so that the finished top keeps a slight dome.",
                ja:"接着面をわずかに曲げた力木を、浅い凹みの皿型の台にのせた表板に押しつける。ふつうは上の枠からしならせた弾力のある棒で押さえ、仕上がった表板がわずかなふくらみを保つようにする。",
                zh:"把黏合面略帶弧度的音梁，壓在平放於淺凹弧形底盤上的面板上，通常以從上方框架彎壓下來的彈性壓桿施壓，使完成的面板保持輕微拱度。" } },
            { title:{ en:"Carve while tapping", ja:"叩きながら削る", zh:"邊敲邊削" },
              jp:"タップトーン",
              meta:{ en:"chisel, plane, knuckle", ja:"鑿、鉋、指の関節", zh:"鑿、刨、指節" },
              text:{
                en:"With the braces in place, the maker shaves, tapers and scallops them, tapping the top again and again and listening for its ring to drop in pitch and lengthen. Too far, and the ring turns flabby; the top is now too weak.",
                ja:"力木を貼ったら、つくり手はそれを削り、テーパーをつけ、スキャロップし、何度も表板を叩いて、響きの高さが下がり尾が長くなるのを聴く。削りすぎると響きはしまりを失う。表板が弱くなりすぎたのである。",
                zh:"音梁就位後，工匠將其削薄、做漸縮與扇貝削，一再敲擊面板，聆聽聲響音高下降、餘韻延長。削過頭，聲音便鬆垮無力——面板已經太弱了。" } },
            { title:{ en:"Measure", ja:"測る", zh:"量測" },
              jp:"クラドニ図形・周波数",
              meta:{ en:"tea leaves, microphone, weights", ja:"茶葉、マイク、重り", zh:"茶葉、麥克風、砝碼" },
              text:{
                en:"Some makers watch Chladni patterns form in tea leaves or glitter; others record the tap and read its resonant frequencies on a computer. Gore and Gilet calculate an equivalent stiffness for the whole braced top from its deflection under load, using the parallel-axis theorem of beam theory.",
                ja:"茶葉や細かい粉にクラドニ図形が現れるのを見るつくり手もいれば、叩いた音を録ってコンピューターで共鳴の振動数を読むつくり手もいる。ゴアとジレは、荷重をかけたときのたわみから、梁の理論の平行軸の定理を使って、力木を貼った表板全体の等価な剛さを計算する。",
                zh:"有些工匠觀察茶葉或亮粉形成的克拉德尼圖形；有些則錄下敲擊聲，以電腦讀出共振頻率。高爾與吉列則根據加載時的撓度，運用梁理論的平行軸定理，計算整片已貼音梁之面板的等效剛性。" } },
            { title:{ en:"Check the box", ja:"箱を確かめる", zh:"檢查琴箱" },
              jp:"共鳴の位置",
              meta:{ en:"after closing", ja:"閉じたあと", zh:"合箱之後" },
              text:{
                en:"Once the body is closed, the main resonances of the top and the air inside are measured again. Gore and Gilet aim to keep them from falling directly on notes of the scale, where they would make single notes boom or choke.",
                ja:"胴を閉じたら、表板と内部の空気の主な共鳴をもう一度測る。ゴアとジレは、それが音階の音にちょうど重ならないようにする。重なると、特定の音だけが鳴りすぎたり詰まったりするからである。",
                zh:"琴身合箱後，再次量測面板與內部空氣的主要共振。高爾與吉列力求避免這些共振正好落在音階的音上，否則個別音會過度轟鳴或發悶。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Ervin Somogyi, “Specific top thickness in the guitar”; Gore Guitars, “The book” (Contemporary Acoustic Guitar Design and Build); Takamine, “Craftsmanship”.",
            ja:"出典：アーヴィン・ソモギ「Specific top thickness in the guitar」、Gore Guitars「The book」（Contemporary Acoustic Guitar Design and Build）、タカミネ「Craftsmanship」。",
            zh:"資料來源：Ervin Somogyi〈Specific top thickness in the guitar〉；Gore Guitars〈The book〉（Contemporary Acoustic Guitar Design and Build）；Takamine〈Craftsmanship〉。" } }
      ] },
    { t:"section",
      id:"classical",
      title:{ en:"Fans, lattices and double tops", ja:"扇、格子、ダブルトップ", zh:"扇形、格子與雙層面板" },
      jp:"クラシックギターの表板",
      body:[
        { t:"p",
          text:{
            en:"Nylon strings pull with roughly half the force of steel, so a classical top can be thinner and more lightly braced, and the classical tradition has always put its faith in the top itself. Torres laid out his struts geometrically, along the lines of two isosceles triangles joined at their bases into a kite; makers since have used anything from five struts, the usual number in the 1850s, to six, seven, eight or nine. Before Torres a top often had two, three or even four transverse bars; after him two became the norm, one above the soundhole and one below it, with the fan beneath and, often, two short closing struts that meet in a V near the bottom edge.",
            ja:"ナイロン弦の引く力はスチール弦のおよそ半分なので、クラシックの表板は薄く、力木も軽くでき、クラシックの伝統はつねに表板そのものに信頼を置いてきた。トーレスは、二つの二等辺三角形を底辺で合わせた凧のかたちの線にそって、力木を幾何学的に配した。その後のつくり手は、一八五〇年代にふつうだった五本から、六本、七本、八本、九本まで、さまざまに使ってきた。トーレス以前の表板には横の棒が二本、三本、ときに四本もあったが、彼以後はサウンドホールの上と下に一本ずつの二本がふつうとなり、その下に扇が広がり、しばしば下の縁近くでV字に合わさる二本の短い閉じの力木が添えられる。",
            zh:"尼龍弦的拉力約為鋼弦的一半，因此古典吉他面板可以更薄、音梁更輕，古典吉他的傳統也始終把信心放在面板本身。托雷斯依兩個等腰三角形底邊相接所成的風箏形線條，以幾何方式排列音梁；後來的工匠所用的支條數，從 1850 年代常見的五根，到六、七、八、九根都有。托雷斯之前，面板常有兩根、三根甚至四根橫條；在他之後，以兩根為常規——音孔上下各一——其下展開扇形，並常在接近下緣處加上兩根交成 V 字的短封閉條。" } },
        { t:"p",
          text:{
            en:"Lattice and double-top guitars pursue the same goal by other means: a top that is stiffer for its weight than any plain board of spruce or cedar. Smallman's lattice lets the top itself be extremely thin, and he pairs it with a deliberately heavy, rigid body, so that as much energy as possible stays in the top instead of being soaked up by the back and sides. He has shared his ideas openly rather than patenting them, and makers around the world have adopted them. A double top works like an aircraft panel: two skins far apart are much stiffer than the same wood in one layer, and the honeycomb between them adds almost no weight. Soloists such as Manuel Barrueco and David Russell have played Dammann's guitars. Supporters point to the power and projection such guitars bring to a large hall; some players and makers find them less rich in contrast and colour than a traditional fan-braced instrument — a debate that blind listening, rather than catalogue descriptions, is best placed to settle (see <a href=\"listening.html\">Can You Hear the Wood?</a>).",
            ja:"ラティスとダブルトップのギターは、同じ目標を別の手段で追う。スプルースやシダーのただの板よりも、重さのわりに剛い表板である。スモールマンのラティスは表板そのものをごく薄くでき、彼はそれをわざと重く剛い胴と組み合わせて、エネルギーが裏板や側板に吸われずにできるだけ表板にとどまるようにする。彼は自分の考えを特許にせず公にしてきたので、世界中のつくり手がそれを取り入れた。ダブルトップは航空機のパネルのように働く。離れた二枚の皮は、同じ木を一層にしたものよりずっと剛く、あいだのハニカムは重さをほとんど増やさない。マヌエル・バルエコやデイヴィッド・ラッセルのような独奏家がダマンのギターを弾いてきた。支持者は大きなホールでの力と遠達性を挙げ、一部の弾き手やつくり手は、伝統の扇状力木の楽器より対比と音色の豊かさに欠けると感じる。この議論を決めるのにふさわしいのは、カタログの説明よりも目隠しで聴くことである（<a href=\"listening.html\">木は聴こえるか</a>を参照）。",
            zh:"格子音梁與雙層面板吉他以不同手段追求同一目標：比任何單層雲杉或雪松板都更「剛而輕」的面板。史莫曼的格子讓面板本身能做得極薄，他並刻意搭配厚重剛硬的琴身，讓能量盡可能留在面板，而非被背板與側板吸收。他公開分享自己的構想而不申請專利，世界各地的工匠因而紛紛採用。雙層面板的原理如同飛機面板：兩片相隔的薄皮，比同量木材做成單層剛得多，中間的蜂巢芯幾乎不增加重量。曼努埃爾・巴魯埃科、大衛・羅素等獨奏家都曾演奏達曼的吉他。支持者強調這類吉他在大型音樂廳的力度與穿透力；部分演奏者與工匠則認為，與傳統扇形音梁樂器相比，其對比與音色層次較少——要解決這個爭論，盲聽比型錄描述更可靠（見<a href=\"listening.html\">聽得見木頭嗎</a>）。" } },
        { t:"table",
          caption:{ en:"Three ways to build a classical top", ja:"クラシックの表板の三つのつくり方", zh:"古典吉他面板的三種構造" },
          cols:[
            { en:"Design", ja:"方式", zh:"方式" },
            { en:"Top", ja:"表板", zh:"面板" },
            { en:"Support", ja:"支え", zh:"支撐" },
            { en:"Body", ja:"胴", zh:"琴身" }
          ],
          rows:[
            [
              { en:"Fan (Torres tradition)", ja:"扇状（トーレスの伝統）", zh:"扇形（托雷斯傳統）" },
              { en:"Solid spruce or cedar, about 2–2.8 mm", ja:"スプルースかシダーの単板、約2〜2.8mm", zh:"雲杉或雪松單板，約 2–2.8 mm" },
              { en:"5–9 thin struts and two harmonic bars", ja:"細い力木五〜九本と横の力木二本", zh:"5–9 根細支條與兩根橫向音梁" },
              { en:"Light; the back also vibrates", ja:"軽い。裏板も振動する", zh:"輕盈；背板也參與振動" }
            ],
            [
              { en:"Lattice (Smallman)", ja:"ラティス（スモールマン）", zh:"格子（史莫曼）" },
              { en:"Very thin cedar", ja:"とても薄いシダー", zh:"極薄雪松" },
              { en:"Grid of balsa and carbon fibre", ja:"バルサと炭素繊維の格子", zh:"輕木與碳纖維格子" },
              { en:"Heavy, thick, arched", ja:"重く厚く、ふくらませる", zh:"厚重且拱起" }
            ],
            [
              { en:"Double top (Dammann)", ja:"ダブルトップ（ダマン）", zh:"雙層面板（達曼）" },
              { en:"Two thin skins of spruce or cedar", ja:"スプルースかシダーの薄い皮二枚", zh:"兩片雲杉或雪松薄皮" },
              { en:"Nomex honeycomb core, plus light bracing", ja:"ノーメックスのハニカムの芯と軽い力木", zh:"Nomex 蜂巢芯加輕量音梁" },
              { en:"Varies; often reinforced", ja:"さまざま。補強することが多い", zh:"不一；常加以補強" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Wikipedia, “Antonio de Torres Jurado”, “Greg Smallman”; Madera Guitarras, “Guitar fan bracing explained”; Siccas Guitars, “The pioneers of the double-top guitar”; Somogyi (thickness range).",
            ja:"出典：英語版ウィキペディア「Antonio de Torres Jurado」「Greg Smallman」、Madera Guitarras「Guitar fan bracing explained」、Siccas Guitars「The pioneers of the double-top guitar」、ソモギ（厚さの範囲）。",
            zh:"資料來源：英文維基百科〈Antonio de Torres Jurado〉〈Greg Smallman〉；Madera Guitarras〈Guitar fan bracing explained〉；Siccas Guitars〈The pioneers of the double-top guitar〉；Somogyi（厚度範圍）。" } }
      ] },
    { t:"section",
      id:"gifu",
      title:{ en:"How Gifu's factories brace", ja:"岐阜の工場の力木", zh:"岐阜工廠的音梁作法" },
      jp:"ヤイリとタカミネ",
      body:[
        { t:"p",
          text:{
            en:"At K. Yairi in Kani the X is traditional and the scalloping deliberately restrained. In an interview with the Japanese site Nihon Meisho the company explained the logic in the profile of the braces: where they are carved away are the parts of the top meant to vibrate, and where they are left standing are the points that must hold firm. Yairi braces more strongly than some makers, the company said, because it builds for the long term: a Yairi guitar is expected to come into its own five to ten years after it leaves the factory, not on the day it is sold. The braces are glued with hide glue, prized not least because a joint can later be released for repair, and Yairi's own account of its process names the scalloping of the braces as the step at which the sound is adjusted. The company's history and methods are described on <a href=\"yairi.html\">Yairi</a>.",
            ja:"可児のK.ヤイリでは、Xは伝統どおりで、スキャロップはわざと控えめである。日本の「日本名所」というサイトの取材に、同社は力木の断面形にこめた考えを説明した。削られたところは表板の振動しやすい部分であり、削らずに盛り上がったまま残したところは踏ん張るポイントである。ヤイリは一部のつくり手より力木を強めにする、と同社は言う。長い目でつくるからである。ヤイリのギターは、売られた日ではなく、工場を出て五〜十年後に本領を発揮すると考えられている。力木は膠で貼る。とりわけ、のちに修理のため接着を外せることが重んじられる。ヤイリ自身の製作工程の説明は、力木のスキャロップを音を調える工程として挙げている。同社の歴史と方法は<a href=\"yairi.html\">ヤイリ</a>に述べた。",
            zh:"在可兒的 K. Yairi，X 型屬傳統作法，扇貝削則刻意保守。該公司在接受日本網站「日本名所」採訪時，以音梁的輪廓說明其中道理：削去之處是面板應該振動的部分，保留隆起之處則是必須撐住的支點。公司表示，Yairi 的音梁比部分廠牌更強，因為它著眼長遠：一把 Yairi 吉他被預期在出廠五到十年後才真正發揮實力，而非在售出當天。音梁以動物膠黏貼，尤其看重日後能為修理而拆開接合處；Yairi 自己的製程說明，也把音梁的扇貝削列為調整音色的步驟。公司的歷史與作法見 <a href=\"yairi.html\">Yairi</a>。" } },
        { t:"p",
          text:{
            en:"Takamine in Nakatsugawa, best known for electro-acoustic guitars built for the stage, likewise uses a traditional X on its steel-string models, “differently voiced for each application” in the company's words, and says that its tops are braced and voiced by hand, a luthier tapping each one to judge how far to shape the braces. Its Japanese-made Pro Series includes models specified with hand-scalloped X-bracing under cedar tops. In both factories, then, the carving of braces remains one of the stages that machines have not taken over, even where numerically controlled machines cut necks and parts to fractions of a millimetre (see <a href=\"takamine.html\">Takamine</a>). The more radical designs — lattices, double tops, asymmetric patterns — belong largely to independent workshops, including some of the makers described on <a href=\"luthiers.html\">The Luthiers</a>.",
            ja:"中津川のタカミネは、舞台のためのエレクトリック・アコースティックギターで最もよく知られるが、スチール弦のモデルにはやはり伝統のXを使い、同社のことばでは「用途ごとに違ったボイシングをする」。表板は手で力木を貼って音をつくり、職人が一枚ずつ叩いて、力木をどこまで削るかを判断するという。日本製のプロシリーズには、シダーの表板に手でスキャロップしたXブレーシングを仕様とするモデルもある。つまりどちらの工場でも、ネックや部品はNC機械が百分の数ミリで削るとしても、力木の削りはいまだ機械に渡していない工程の一つなのである（<a href=\"takamine.html\">タカミネ</a>を参照）。ラティス、ダブルトップ、非対称の模様といった大胆な設計は、おもに個人の工房のものであり、<a href=\"luthiers.html\">個人製作家</a>で紹介するつくり手のなかにもそれがある。",
            zh:"中津川的 Takamine 以舞台用電木吉他最為知名，其鋼弦型號同樣採用傳統 X 型音梁，用公司的話說是「依用途分別調音」；並表示其面板以手工黏貼音梁、手工調音，由工匠逐片敲擊，判斷音梁該削到什麼程度。其日本製 Pro 系列中，也有規格為雪松面板配手工扇貝削 X 型音梁的型號。可見在這兩家工廠，即使琴頸與零件已由數控機械以百分之幾公釐的精度切削，音梁雕削仍是機器尚未取代的工序之一（見 <a href=\"takamine.html\">Takamine</a>）。格子、雙層面板、不對稱排列等較激進的設計，主要屬於獨立工坊，<a href=\"luthiers.html\">獨立製琴師</a>中介紹的工匠亦有採用者。" } },
        { t:"tiny",
          text:{
            en:"Sources: Nihon Meisho, interview at K. Yairi (regular line); K. Yairi, “How a Yairi guitar is made”; Takamine, “Craftsmanship”; ESP Takamine, “Which Takamine Pro Series guitar is perfect for you?”.",
            ja:"出典：日本名所「ヤイリギター訪問取材～レギュラーライン編～」、ヤイリギター「ヤイリギターができるまで」、タカミネ「Craftsmanship」、ESP Takamine「Which Takamine Pro Series guitar is perfect for you?」。",
            zh:"資料來源：日本名所〈ヤイリギター訪問取材～レギュラーライン編～〉；Yairi〈ヤイリギターができるまで〉；Takamine〈Craftsmanship〉；ESP Takamine〈Which Takamine Pro Series guitar is perfect for you?〉。" } }
      ] },
    { t:"related",
      items:[
        { href:"making.html", why:{ en:"Where bracing fits in the build.", ja:"製作のなかの力木。", zh:"音梁在製作流程中的位置。" } },
        { href:"sound.html", why:{ en:"Plates, modes and stiffness.", ja:"板、振動モード、剛さ。", zh:"板、模態與剛性。" } },
        { href:"tonewoods.html", why:{ en:"The spruce that braces are made from.", ja:"力木になるスプルース。", zh:"製作音梁的雲杉。" } },
        { href:"listening.html", why:{ en:"Hearing the differences.", ja:"違いを聴く。", zh:"聽出差異。" } }
      ] }
  ] };

/* ---- ------------------------------------------ takamine */
GIFU.pages["takamine"] = { kicker:{ en:"Sound · 06", ja:"音 · 06", zh:"聲音 · 06" },
  title:{ en:"Takamine", ja:"タカミネ", zh:"Takamine" },
  jp:"中津川・坂下の高峰楽器製作所",
  lede:{
    en:"In the hinoki country of eastern Gifu, in the former town of Sakashita beside the Kiso River, stands the factory of one of the world's best-known acoustic-guitar makers. Takamine began in 1959 as a small workshop founded by a man whose home had been destroyed by a typhoon, took its name from the mountain above the town, and became famous in the 1970s and 1980s for guitars that could be plugged into a stage amplifier without losing their acoustic voice. This page tells its story.",
    ja:"岐阜の東、ヒノキの里、木曽川のほとりの旧坂下町に、世界で最もよく知られたアコースティックギターのメーカーの一つの工場が立つ。タカミネは一九五九年、台風で家を失った一人の男が開いた小さな工房として始まり、町の上にそびえる山から名をとり、一九七〇年代と八〇年代に、アコースティックの声を失わずにステージのアンプにつなげるギターで名をあげた。この頁はその物語を語る。",
    zh:"在岐阜東部的扁柏之鄉、木曾川畔的舊坂下町，矗立著世界最知名木吉他製造商之一的工廠。Takamine 於 1959 年由一位家園毀於颱風的男子創立的小工坊起步，以鎮上方的山為名，並在 1970、80 年代以能接上舞台音箱、又不失原聲本色的吉他聞名於世。本頁講述它的故事。" },
  body:[
    { t:"section",
      id:"origins",
      title:{ en:"A workshop after a typhoon", ja:"台風のあとの工房", zh:"颱風後的工坊" },
      jp:"創業",
      body:[
        { t:"p",
          text:{
            en:"In September 1959 the Ise Bay Typhoon, the deadliest to strike Japan since the war, devastated the coast around Nagoya. Among those who lost their homes was an instrument maker, who moved with his family to his wife's home town of Sakashita, in the upper Kiso valley. Sakashita was a woodworking town, full of craftsmen trained in the timber trade, and in December 1959 he founded a small company there to make instruments. In 1962 it took the name Takamine Gakki Seisakusho, after Mount Takamine above the town. By 1968 it employed about sixty people making classical guitars and mandolins.",
            ja:"一九五九年九月、戦後に日本を襲った台風で最も多くの命を奪った伊勢湾台風が、名古屋まわりの沿岸を壊滅させた。家を失った人のなかに一人の楽器職人がおり、家族とともに妻の故郷、木曽谷の上流の坂下へ移った。坂下は木工の町で、木材の仕事で修業した職人にあふれていた。一九五九年十二月、彼はそこで楽器をつくる小さな会社を起こした。一九六二年、町の上の高峰山にちなんで高峰楽器製作所と名を改めた。一九六八年には、およそ六十人がクラシックギターとマンドリンをつくっていた。",
            zh:"1959 年 9 月，戰後襲擊日本死傷最慘重的伊勢灣颱風重創名古屋一帶沿海。失去家園者之中，有一位樂器匠人，他帶著家人遷往妻子的故鄉——木曾谷上游的坂下。坂下是個木工之鎮，到處是在木材業受過訓練的工匠。1959 年 12 月，他在那裡創立了一家製作樂器的小公司，1962 年以鎮上方的高峰山為名，改稱高峰樂器製作所。到 1968 年，公司已有約六十名員工，製作古典吉他與曼陀林。" } },
        { t:"timeline",
          items:[
            { year:"1959",
              title:{ en:"Founded at Sakashita", ja:"坂下で創業", zh:"於坂下創立" },
              text:{
                en:"December: a small instrument company is founded after the Ise Bay Typhoon.",
                ja:"十二月、伊勢湾台風のあとに小さな楽器の会社が生まれる。",
                zh:"12 月：伊勢灣颱風後創立小型樂器公司。" } },
            { year:"1962",
              title:{ en:"Takamine", ja:"高峰楽器製作所", zh:"定名 Takamine" },
              text:{ en:"May: renamed after Mount Takamine.", ja:"五月、高峰山にちなんで改称。", zh:"5 月：以高峰山之名更名。" } },
            { year:"1965",
              title:{ en:"Incorporated", ja:"株式会社に", zh:"改組股份公司" },
              text:{ en:"September: reorganised as a joint-stock company.", ja:"九月、株式会社に改組。", zh:"9 月：改組為股份有限公司。" } },
            { year:"1968",
              title:{ en:"America", ja:"アメリカへ", zh:"進軍美國" },
              text:{
                en:"About sixty employees; Mass Hirade joins and later leads the company. In these years — sources range from 1968 to the early 1970s — a long partnership with an American distributor begins.",
                ja:"従業員およそ六十人。マス・ヒラデが入社し、のちに会社を率いる。このころ、アメリカの販売会社との長い協力が始まる（資料によって一九六八年とも一九七〇年代初めともされる）。",
                zh:"員工約六十人；Mass Hirade 加入，日後領導公司。這段期間開始與美國經銷商長期合作（各資料記載從 1968 年到 1970 年代初不等）。" } },
            { year:"1978",
              title:{ en:"Palathetic pickup", ja:"パラセティック", zh:"Palathetic 拾音器" },
              text:{
                en:"April: an under-saddle pickup with six individual piezo elements, one per string.",
                ja:"四月、弦ごとに一つ、六つの独立したピエゾ素子をもつアンダーサドルのピックアップ。",
                zh:"4 月：推出弦枕下拾音器，每弦一個、共六個獨立壓電元件。" } },
            { year:"1979",
              title:{ en:"The first acoustic-electric", ja:"最初のエレアコ", zh:"首款電木吉他" },
              text:{
                en:"The company's first acoustic-electric model goes on sale.",
                ja:"会社の最初のエレクトリック・アコースティックのモデルが発売される。",
                zh:"公司第一款電木吉他上市。" } },
            { year:"1987–88",
              title:{ en:"Limited editions and modular preamps", ja:"限定モデルとモジュラー・プリアンプ", zh:"限量版與模組化前級" },
              text:{
                en:"An annual limited-edition series begins; a modular, replaceable preamp system follows.",
                ja:"毎年の限定のシリーズが始まり、交換できるモジュラー式のプリアンプの仕組みが続く。",
                zh:"年度限量系列推出；隨後推出可更換的模組化前級系統。" } },
            { year:"1993–99",
              title:{ en:"Automation", ja:"自動化", zh:"自動化" },
              text:{
                en:"Laser processing and NC robots (1993) and a round-the-clock automated neck line (1999).",
                ja:"レーザー加工とNCロボット（一九九三年）、二十四時間の自動のネックのライン（一九九九年）。",
                zh:"雷射加工與 NC 機器人（1993）；24 小時自動化琴頸產線（1999）。" } },
            { year:"2005",
              title:{ en:"New factory", ja:"新工場", zh:"新工廠" },
              text:{
                en:"September: new headquarters and factory at Sakashita.",
                ja:"九月、坂下に新しい本社と工場。",
                zh:"9 月：於坂下啟用新總部與工廠。" } },
            { year:"2012",
              title:{ en:"Fifty years", ja:"五十年", zh:"五十週年" },
              text:{ en:"Fiftieth anniversary of the Takamine name.", ja:"タカミネの名の五十周年。", zh:"Takamine 之名五十週年。" } }
          ] }
      ] },
    { t:"section",
      id:"stage",
      title:{ en:"An acoustic guitar for the stage", ja:"ステージのためのアコースティック", zh:"為舞台而生的木吉他" },
      jp:"エレアコ",
      body:[
        { t:"p",
          text:{
            en:"In the 1970s acoustic guitars were amplified on stage with microphones, which picked up the sound of the room and fed back at high volume, or with magnetic pickups in the soundhole, which made the guitar sound like an electric. Takamine's answer was a thin strip of piezoelectric material under the saddle, where the strings press down on the bridge, split into six elements so that each string was sensed separately, and paired with a preamplifier built into the side of the guitar. The system captured the vibration of the saddle directly, resisted feedback, and let players move freely. It helped make the electro-acoustic guitar a standard instrument of popular music, and made Takamine a familiar name on concert stages in the United States.",
            ja:"一九七〇年代、アコースティックギターはステージでマイクで拡声されていた。マイクは部屋の音も拾い、大きな音量ではハウリングを起こした。あるいはサウンドホールの磁気のピックアップで、ギターはエレキのような音になった。タカミネの答えは、弦がブリッジを押さえるサドルの下の、薄いピエゾの帯だった。弦ごとに感じとれるよう六つの素子に分け、ギターの側面に組みこんだプリアンプと組み合わせた。この仕組みはサドルの振動をじかにとらえ、ハウリングに強く、弾き手が自由に動けるようにした。それはエレクトリック・アコースティックギターを大衆音楽の標準の楽器にすることを助け、タカミネの名をアメリカのコンサートの舞台でなじみのものにした。",
            zh:"1970 年代，木吉他在舞台上以麥克風擴音，會收進整個空間的聲音並在高音量時產生回授；或在音孔裝電磁拾音器，讓吉他聽起來像電吉他。Takamine 的答案是在弦枕下方——琴弦壓在琴橋之處——放置一條薄壓電材料，分成六個元件以個別感應每根弦，並搭配內建於琴身側板的前級放大器。這套系統直接擷取弦枕的振動、抗回授，也讓演奏者能自由移動。它協助電木吉他成為流行音樂的標準樂器，也讓 Takamine 成為美國演唱會舞台上耳熟能詳的名字。" } },
        { t:"defs",
          items:[
            { term:{ en:"Players", ja:"弾き手", zh:"演奏者" },
              jp:"アーティスト",
              def:{
                en:"Takamine guitars have been played on stage by many rock and country musicians, among them Glenn Frey of the Eagles and Bruce Springsteen; the company produced signature models for country artists including Steve Wariner (1990), Garth Brooks (1995) and Toby Keith (2012).",
                ja:"タカミネのギターは、イーグルスのグレン・フライやブルース・スプリングスティーンをはじめ、多くのロックとカントリーの音楽家にステージで弾かれてきた。会社はスティーヴ・ワリナー（一九九〇年）、ガース・ブルックス（一九九五年）、トビー・キース（二〇一二年）らカントリーのアーティストのシグネチャーモデルをつくった。",
                zh:"許多搖滾與鄉村音樂人都曾在舞台上使用 Takamine 吉他，包括老鷹合唱團的 Glenn Frey 與 Bruce Springsteen；公司也為鄉村歌手推出簽名款，如 Steve Wariner（1990）、Garth Brooks（1995）與 Toby Keith（2012）。" } },
            { term:{ en:"From copy to identity", ja:"写しから個性へ", zh:"從仿製到自成一格" },
              jp:"ヘッドの形",
              def:{
                en:"Like several Japanese makers in the early 1970s, Takamine's first steel-string guitars closely followed the shapes of American models, including the headstock. The company soon adopted its own distinctive headstock and design language, and the electro-acoustic system became its signature.",
                ja:"一九七〇年代初めの日本のいくつかのメーカーと同じく、タカミネの最初のスチール弦ギターは、ヘッドを含めアメリカのモデルの形に近かった。会社はまもなく独自のヘッドの形とデザインの言葉を採り、エレアコの仕組みがその代名詞となった。",
                zh:"如同 1970 年代初期幾家日本廠商，Takamine 最早的鋼弦吉他（包括琴頭）都緊隨美國型號的造型。公司很快便採用自己獨特的琴頭與設計語彙，而電木吉他系統成為其招牌。" } },
            { term:{ en:"Distribution", ja:"販売", zh:"經銷" },
              jp:"海外",
              def:{
                en:"For more than forty years — from 1968 by some accounts, from the early 1970s by others — until 2015, Takamine's guitars were distributed in the United States by an American music company; since 2015 distribution has been handled by another Japanese guitar firm.",
                ja:"一九六八年（資料によっては一九七〇年代初め）から二〇一五年まで四十年以上、タカミネのギターはアメリカの楽器会社がアメリカで販売した。二〇一五年からは、別の日本のギター会社が販売を担っている。",
                zh:"從 1968 年（部分資料則稱 1970 年代初）到 2015 年的四十多年間，Takamine 吉他在美國由一家美國樂器公司經銷；2015 年起改由另一家日本吉他公司負責。" } }
          ] }
      ] },
    { t:"section",
      id:"place",
      title:{ en:"A guitar maker in a timber town", ja:"材木の町のギターメーカー", zh:"木材之鎮的吉他廠" },
      jp:"坂下",
      body:[
        { t:"p",
          text:{
            en:"Sakashita lies in the heart of the Tōnō hinoki country, within sight of the forests that have supplied the Ise Shrine. Its choice as the site of a guitar factory was not accidental: the town had sawmills, joiners and woodworkers whose skills transferred easily to instrument making, and it still does. With around ninety employees, Takamine combines automated machining of necks and bodies with hand work in bracing, assembly and finishing.",
            ja:"坂下は東濃ひのきの里の中心にあり、伊勢神宮に材を出してきた森を望む。ギター工場の地に選ばれたのは偶然ではなかった。町には製材所、建具師、木工の職人がいて、その技は楽器づくりにたやすく移せたし、いまもそうである。およそ九十人の従業員をもつタカミネは、ネックと胴の自動化された加工と、力木・組立・仕上げの手仕事を組み合わせている。",
            zh:"坂下位於東濃扁柏之鄉的中心，遠眺那些一直為伊勢神宮供材的森林。在此設立吉他工廠並非偶然：鎮上有製材所、建具師與木工匠，其技藝很容易轉移到樂器製作，至今依然。擁有約九十名員工的 Takamine，結合琴頸與琴身的自動化加工，以及音梁、組裝與塗裝的手工作業。" } }
      ] },
    { t:"section",
      id:"electronics",
      title:{ en:"From Palathetic to valves", ja:"パラセティックから真空管へ", zh:"從 Palathetic 到真空管" },
      jp:"電装の系譜",
      body:[
        { t:"p",
          text:{
            en:"The pickup that made Takamine's name has changed remarkably little. According to the company, the Palathetic system still uses six individually shielded piezo elements, one per string, with more than ten times the element mass of an ordinary under-saddle strip. Instead of lying loose in the saddle slot, the elements pass through the bridge plate, the top and the bridge to touch the saddle directly, so that each string drives its own sensor and the whole assembly is grounded against electrical hum. Takamine describes the design as virtually unchanged since 1978. What has changed, decade by decade, is the preamplifier behind it — the small circuit in the side of the guitar that shapes the signal and drives the cable to the amplifier.",
            ja:"タカミネの名を高めたピックアップは、驚くほど変わっていない。会社によれば、パラセティックの仕組みはいまも弦ごとに一つ、個別にシールドした六つのピエゾ素子を使い、素子の質量は普通のアンダーサドルの帯の十倍を超える。素子はサドルの溝にただ置かれるのでなく、ブリッジプレート、表板、ブリッジを貫いてサドルにじかに触れる。だから弦の一本一本が自分の素子を動かし、全体は電気のハムに対して接地されている。タカミネはこの設計が一九七八年以来ほとんど変わっていないと説明する。十年ごとに変わってきたのは、その後ろのプリアンプ、つまりギターの側面にあって信号を整え、アンプへのケーブルを駆動する小さな回路のほうである。",
            zh:"讓 Takamine 成名的拾音器，變化少得驚人。據公司說明，Palathetic 系統至今仍採用每弦一個、各自屏蔽的六個壓電元件，元件質量是一般弦枕下拾音條的十倍以上。這些元件並非只是放在弦枕槽裡，而是穿過琴橋墊板、面板與琴橋，直接接觸弦枕；因此每根弦各自驅動一個感應元件，整組並接地以抑制電源噪聲。Takamine 表示此設計自 1978 年以來幾乎未變。數十年間不斷改變的，是其後的前級放大器——位於琴身側板、負責修飾訊號並推動導線送往音箱的小型電路。" } },
        { t:"timeline",
          items:[
            { year:"1978",
              title:{ en:"Palathetic", ja:"パラセティック", zh:"Palathetic" },
              text:{
                en:"Six shielded piezo elements under the saddle; full development of the acoustic-electric begins.",
                ja:"サドルの下にシールドした六つのピエゾ素子。エレアコの本格的な開発が始まる。",
                zh:"弦枕下六個屏蔽壓電元件；電木吉他正式展開研發。" } },
            { year:"1979",
              title:{ en:"PT-007S", ja:"PT-007S", zh:"PT-007S" },
              text:{
                en:"The first production model with the pickup goes on sale abroad in April.",
                ja:"このピックアップを積んだ最初の量産モデルが、四月に海外で発売される。",
                zh:"首款搭載此拾音器的量產型號於 4 月在海外上市。" } },
            { year:"1988",
              title:{ en:"Equalisers and effects", ja:"イコライザーと効果", zh:"等化器與效果" },
              text:{
                en:"A one-unit, replaceable preamp; company histories also describe an AAP preamp with parametric equalisation and a DSP model designed with Korg that added onboard reverb.",
                ja:"交換できる一体型のプリアンプ。会社の沿革は、パラメトリック・イコライザーをもつAAPプリアンプと、コルグと設計しリバーブを内蔵したDSPのモデルにもふれる。",
                zh:"可整組更換的一體式前級；公司沿革另提到具參數等化的 AAP 前級，以及與 Korg 共同設計、內建殘響的 DSP 型號。" } },
            { year:"1998",
              title:{ en:"Digital, and a two-way rod", ja:"デジタルと二方向のロッド", zh:"數位化與雙向琴頸鐵" },
              text:{
                en:"The AD-1, which the company calls the world's first onboard digital preamp, and a two-way truss rod developed with the hardware maker Gotoh Gut.",
                ja:"会社が世界初のオンボード・デジタル・プリアンプとするAD-1と、金具メーカーのゴトー・ガットと共同開発した二方向のトラスロッド。",
                zh:"公司稱為全球首款內建數位前級的 AD-1，以及與五金廠 Gotoh Gut 共同開發的雙向琴頸鐵。" } },
            { year:{ en:"2000s", ja:"二〇〇〇年代", zh:"2000 年代" },
              title:{ en:"Cool Tube", ja:"クール・チューブ", zh:"Cool Tube" },
              text:{
                en:"Preamps with a small vacuum tube. The British distributor dates the CT range to 2004; the Japanese company places its tube preamp (TDP, CTP-1) in the later 2000s.",
                ja:"小さな真空管を積んだプリアンプ。イギリスの代理店はCTの系列を二〇〇四年とし、日本の会社は真空管のプリアンプ（TDP、CTP-1）を二〇〇〇年代後半に置く。",
                zh:"搭載小型真空管的前級。英國代理商將 CT 系列定於 2004 年；日本總公司則把真空管前級（TDP、CTP-1）列於 2000 年代後半。" } }
          ] },
        { t:"defs",
          items:[
            { term:{ en:"CT4B II", ja:"CT4B II", zh:"CT4B II" },
              jp:"三バンド",
              def:{
                en:"The simplest current preamp: three-band equaliser and a built-in tuner.",
                ja:"現行でもっとも簡素なプリアンプ。三バンドのイコライザーとチューナーを内蔵する。",
                zh:"現行最簡單的前級：三段等化器與內建調音器。" } },
            { term:{ en:"CTP-3 Cool Tube", ja:"CTP-3 クール・チューブ", zh:"CTP-3 Cool Tube" },
              jp:"真空管",
              def:{
                en:"Three-band equaliser with a selectable middle frequency, a vacuum tube in the signal path, separate volume controls for two pickups, and a tuner.",
                ja:"中域の周波数を選べる三バンドのイコライザー、信号経路の真空管、二つのピックアップの個別の音量、チューナー。",
                zh:"三段等化器（中頻可選）、訊號路徑上的真空管、兩組拾音器各自的音量控制，以及調音器。" } },
            { term:{ en:"CT4-DX", ja:"CT4-DX", zh:"CT4-DX" },
              jp:"二系統",
              def:{
                en:"Blends the under-saddle pickup with a second source; two-band equaliser (four-band with one pickup) and tuner.",
                ja:"アンダーサドルと第二の音源を混ぜる。二バンドのイコライザー（ピックアップ一つなら四バンド）とチューナー。",
                zh:"混合弦枕下拾音器與第二訊號源；兩段等化（僅用一組拾音器時為四段）並附調音器。" } },
            { term:{ en:"TLD-2", ja:"TLD-2", zh:"TLD-2" },
              jp:"ラインドライバー",
              def:{
                en:"A line driver with minimal controls, for players who shape the sound on a mixing desk.",
                ja:"操作を最小限にしたラインドライバー。音づくりをミキサーで行う弾き手のためのもの。",
                zh:"控制極簡的線路驅動器，適合在混音台上調整音色的演奏者。" } }
          ] },
        { t:"p",
          text:{
            en:"According to the US distributor, the Cool Tube and CT4B II preamps are designed only for the Pro Series guitars made in Japan, not for the cheaper G Series. In Japan the domestic model names follow the electronics: a guitar coded PTU carries the CT4B II, DMP the dual-source CT4-DX, and TDP the tube preamp. A Japanese buyer's guide explains that in the model number the first digit indicates the preamp, the second and third the body size and the last the woods — but adds that the rule is not applied consistently.",
            ja:"アメリカの代理店によれば、クール・チューブとCT4B IIは日本製のプロ・シリーズのためだけのもので、廉価なGシリーズには使えない。日本の国内モデルの名は電装に従う。PTUと名づけられたギターはCT4B IIを、DMPは二系統のCT4-DXを、TDPは真空管のプリアンプを積む。日本の購入ガイドは、型番の最初の数字がプリアンプ、二番目と三番目が胴の大きさ、最後が材を表すと説明するが、この決まりは一貫していないとも書き添える。",
            zh:"據美國經銷商說明，Cool Tube 與 CT4B II 前級只供日本製的 Pro 系列使用，不適用於較平價的 G 系列。在日本，國內型號名稱依電子系統而定：代號 PTU 的吉他搭載 CT4B II，DMP 搭載雙訊號源的 CT4-DX，TDP 則是真空管前級。一份日本的選購指南說明，型號中第一位數字代表前級，第二、三位代表琴身尺寸，最後一位代表木材——但也補充這規則並未一貫遵守。" } },
        { t:"tiny",
          text:{
            en:"Sources: ESP Takamine, “Inside the Takamine Palathetic Pickup” and FAQ; Takamine Gakki, company history (Japanese); Takamine UK, “The Takamine Story”; Hikigatari-suto Labo, guide to Takamine models.",
            ja:"出典：ESP Takamine「Inside the Takamine Palathetic Pickup」とFAQ、高峰楽器製作所「タカミネの歩み」、Takamine UK「The Takamine Story」、弾き語リスト・ラボ「タカミネのエレアコの種類」。",
            zh:"資料來源：ESP Takamine〈Inside the Takamine Palathetic Pickup〉與 FAQ；高峰樂器製作所〈タカミネの歩み〉；Takamine UK〈The Takamine Story〉；弾き語リスト・ラボ Takamine 型號介紹。" } }
      ] },
    { t:"section",
      id:"lines",
      title:{ en:"Two ranges and a limited edition", ja:"二つの系列と限定モデル", zh:"兩大系列與限量版" },
      jp:"製品の系列",
      body:[
        { t:"p",
          text:{
            en:"Since the 1990s Takamine has sold two kinds of guitar under one name. The Pro Series and the other Japanese ranges are built at Sakashita; the G Series, launched in that decade as an affordable line, is made outside Japan to the company's specifications. The arrangement mirrors the wider Japanese industry, which moved volume production to Korea and China and kept its higher-priced work at home (see <a href=\"guitarindustry.html\">the guitar industry</a>). JETRO's company profile records that Takamine made a direct investment in China in 2022, and that it imports wood and electronic parts from China, South Korea, India, the United States, Canada, Spain and Germany — a list that maps the supply of guitar woods: spruce from North America and Europe, rosewood from India, and tonewood dealers in Spain and Germany.",
            ja:"一九九〇年代から、タカミネは一つの名のもとに二種類のギターを売ってきた。プロ・シリーズをはじめとする日本の系列は坂下でつくられ、その十年に廉価な系列として始まったGシリーズは、会社の仕様に従って日本の外でつくられる。この形は日本のギター産業全体の動きを映している。量産を韓国と中国へ移し、高価格帯の仕事を国内に残したのである（<a href=\"guitarindustry.html\">ギター産業</a>を参照）。ジェトロの企業紹介によれば、タカミネは二〇二二年に中国へ直接投資を行い、木材と電子部品を中国、韓国、インド、アメリカ、カナダ、スペイン、ドイツから輸入している。この国の並びは、ギターの材の流れの地図でもある。北アメリカとヨーロッパのスプルース、インドのローズウッド、スペインとドイツのトーンウッドの商社である。",
            zh:"自 1990 年代起，Takamine 以同一品牌銷售兩類吉他。Pro 系列等日本產品線在坂下製作；同一時期推出的平價 G 系列，則依公司規格在日本以外生產。這種安排反映了整個日本吉他產業的走向：量產移往韓國與中國，高價位產品留在國內（見<a href=\"guitarindustry.html\">吉他產業</a>）。據日本貿易振興機構（JETRO）的企業介紹，Takamine 於 2022 年在中國進行直接投資，並自中國、韓國、印度、美國、加拿大、西班牙與德國進口木材與電子零件——這份國家名單正好畫出吉他用材的供應地圖：北美與歐洲的雲杉、印度的玫瑰木，以及西班牙與德國的音木商。" } },
        { t:"p",
          text:{
            en:"The clearest record of the Japanese factory's output is the Limited Edition series, a new model each year since 1987, made in a fixed number and then discontinued. The quantities, published by the US distributor, rose from 400 in the first year to 2,000 in 1998, at the height of the acoustic boom of the 1990s, and then fell steadily to a few hundred — and to just 50 in 2012, the fiftieth year of the Takamine name. The curve is not a measure of the company's total production, but it shows the shift that runs through the Japanese guitar trade: from volume to rarity, and from catalogue instruments to collectors' pieces.",
            ja:"日本の工場の生産をもっともはっきり示す記録は、限定モデルの系列である。一九八七年から毎年一つの新しいモデルを決まった数だけつくり、それで打ち切る。アメリカの代理店が公表した数は、初年の四百本から、一九九〇年代のアコースティックの好況の頂点である一九九八年の二千本へ増え、その後は数百本へと着実に減った。タカミネの名の五十年目にあたる二〇一二年には、わずか五十本だった。この曲線は会社の総生産量ではないが、日本のギター業界を貫く変化を示している。量から希少さへ、カタログの楽器から収集家の一本へという変化である。",
            zh:"日本工廠產量最清楚的紀錄，是限量版系列：自 1987 年起每年推出一款新型號，固定數量生產後即停產。美國經銷商公布的數量，從首年的 400 把，增至 1990 年代木吉他熱潮頂峰的 1998 年的 2,000 把，之後穩定下滑至數百把——2012 年，即 Takamine 之名的第五十年，僅 50 把。這條曲線並非公司的總產量，卻顯示了貫穿日本吉他業的轉變：從量到稀有，從型錄樂器到收藏品。" } },
        { t:"figure",
          caption:{
            en:"Takamine Limited Edition guitars: number made each year, 1987–2017, as published by ESP Takamine (FAQ). One model per year; in 2013 a further 51 of a special edition (LTD2013 SE) are not included.",
            ja:"タカミネの限定モデル：各年の製作数（一九八七〜二〇一七年）。ESP Takamine（FAQ）の公表による。毎年一モデル。二〇一三年の特別版（LTD2013 SE）五十一本は含まない。",
            zh:"Takamine 限量版吉他：1987–2017 年每年製作數量，依 ESP Takamine（FAQ）公布資料。每年一款；2013 年另有特別版（LTD2013 SE）51 把未計入。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Limited editions made per year", ja:"限定モデルの年ごとの製作数", zh:"限量版每年製作數量" },
            unit:{ en:"guitars", ja:"本", zh:"把" }, every:5, h:200, tick:500,
            hl:["1987","1998","2012","2017"],
            items:[
              { x:"1987", v:400 }, { x:"1988", v:400 }, { x:"1989", v:800 }, { x:"1990", v:1000 }, { x:"1991", v:1000 },
              { x:"1992", v:1200 }, { x:"1993", v:1200 }, { x:"1994", v:1200 }, { x:"1995", v:1200 }, { x:"1996", v:1200 },
              { x:"1997", v:1500 }, { x:"1998", v:2000 }, { x:"1999", v:1750 }, { x:"2000", v:1700 }, { x:"2001", v:1400 },
              { x:"2002", v:1100 }, { x:"2003", v:900 }, { x:"2004", v:530 }, { x:"2005", v:620 }, { x:"2006", v:600 },
              { x:"2007", v:500 }, { x:"2008", v:685 }, { x:"2009", v:580 }, { x:"2010", v:280 }, { x:"2011", v:271 },
              { x:"2012", v:50 }, { x:"2013", v:300 }, { x:"2014", v:55 }, { x:"2015", v:214 }, { x:"2016", v:210 },
              { x:"2017", v:239 }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: ESP Takamine, FAQ (Limited Edition production, preamp compatibility); JETRO, company profile of Takamine Gakki (trade and investment); Wikipedia, “Takamine (guitar manufacturer)” (G Series).",
            ja:"出典：ESP Takamine FAQ（限定モデルの生産数、プリアンプの適合）、ジェトロ「株式会社高峰楽器製作所」企業紹介（貿易と投資）、Wikipedia英語版「Takamine (guitar manufacturer)」（Gシリーズ）。",
            zh:"資料來源：ESP Takamine FAQ（限量版產量、前級相容性）；JETRO〈高峰樂器製作所〉企業介紹（貿易與投資）；英文維基百科〈Takamine (guitar manufacturer)〉（G 系列）。" } }
      ] },
    { t:"section",
      id:"factory",
      title:{ en:"Inside the Sakashita factory", ja:"坂下の工場のなか", zh:"坂下工廠內部" },
      jp:"ものづくり",
      body:[
        { t:"p",
          text:{
            en:"Takamine describes the making of a guitar in four stages, and its own outline is a useful corrective to the image of a fully automated plant. Machines entered early — laser processing and numerically controlled robots in 1993, a neck line running round the clock from 1999 — and they do what machines do best: cutting identical neck profiles, body parts and slots to fractions of a millimetre, every time. But a visit by the Gifu Academy of Forest Science and Culture in the summer of 2025 noted that bending the sides, spraying and polishing the finish are still done by craftspeople's hands. The woods the factory works are the international standard set: spruce for tops — imported, because straight-grained tops must be cut from logs of relatively large diameter — and mahogany, sapele, maple and rosewood for necks, backs and sides.",
            ja:"タカミネはギターづくりを四つの段階で説明しており、会社自身によるこの概略は、すべて自動化された工場という印象を正すのに役立つ。機械は早くから入った。一九九三年のレーザー加工とNCロボット、一九九九年からの二十四時間稼働のネックのラインである。機械は機械がもっとも得意なことをする。同じネックの形、胴の部品、溝を、毎回一ミリの何分の一の精度で切り出すことである。しかし岐阜県立森林文化アカデミーが二〇二五年夏に訪れたときの記録は、側板の曲げ、塗装と研磨はいまも職人の手で行われていると記している。工場が扱う木は国際的な定番の組み合わせである。表板にはスプルース。まっすぐな木目の表板は比較的大径の丸太から挽く必要があるため、輸入材である。そしてネック、裏板、側板にはマホガニー、サペリ、メイプル、ローズウッドを使う。",
            zh:"Takamine 把吉他製作分為四個階段說明，公司自己的這份概述，正好修正「全自動化工廠」的印象。機器很早就進場——1993 年的雷射加工與 NC 機器人，1999 年起 24 小時運轉的琴頸產線——它們做機器最擅長的事：每一次都以零點幾公釐的精度切出相同的琴頸外形、琴身零件與槽口。但岐阜縣立森林文化學院於 2025 年夏季參訪時的紀錄指出，側板彎曲、塗裝噴塗與研磨，至今仍由工匠親手完成。工廠使用的木材是國際標準組合：面板用雲杉——因為直紋面板必須取自相當大徑的原木，所以使用進口材——琴頸、背板與側板則用桃花心木、沙比利、楓木與玫瑰木。" } },
        { t:"steps",
          items:[
            { title:{ en:"Material management", ja:"材料管理", zh:"材料管理" },
              jp:"シーズニング・板厚調整・ハギ",
              meta:{ en:"Wood store", ja:"材料庫", zh:"木料庫" },
              text:{
                en:"Seasoning the stock, thicknessing the plates, and joining the two halves of each top and back along the centre seam.",
                ja:"材のシーズニング、板厚の調整、そして表板と裏板の二枚を中心線で接ぐ「ハギ」。",
                zh:"木料陳放乾燥、調整板材厚度，並將面板與背板的兩半沿中線拼接。" } },
            { title:{ en:"Woodwork and assembly", ja:"木工組み立て", zh:"木工組裝" },
              jp:"力木ハツリ・胴作り・甲づけ",
              meta:{ en:"Body and neck", ja:"胴とネック", zh:"琴身與琴頸" },
              text:{
                en:"Shaving the braces, building the body, gluing on the top, binding the edges, inlay work, setting the neck and gluing the fingerboard.",
                ja:"力木を削る「ハツリ」、胴づくり、表板を貼る「甲づけ」、バインディング巻き、インレイ、ネック仕込み、指板の接着。",
                zh:"削修音梁、組成琴身、黏合面板、包邊、鑲嵌、裝接琴頸與黏合指板。" } },
            { title:{ en:"Finishing coats", ja:"塗装", zh:"塗裝" },
              jp:"目止め着色・スプレー",
              meta:{ en:"Spray room", ja:"塗装室", zh:"噴塗室" },
              text:{
                en:"Filling the pores and staining, then spraying the finish coats.",
                ja:"目止めと着色、そしてスプレーによる塗装。",
                zh:"填孔與著色，然後噴塗面漆。" } },
            { title:{ en:"Final work", ja:"仕上げ", zh:"完工" },
              jp:"バフ・フレット・電装",
              meta:{ en:"Set-up", ja:"調整", zh:"調整" },
              text:{
                en:"Buffing, sanding the fingerboard, fretting, gluing the bridge, fitting the nut, installing pickup and preamp, then tuners, strings and final set-up.",
                ja:"バフがけ、指板のサンディング、フレット打ち、ブリッジ接着、ナット仕込み、ピックアップとプリアンプの取り付け、ペグと弦、最終調整。",
                zh:"拋光、指板打磨、打琴格、黏合琴橋、裝上弦枕、安裝拾音器與前級，最後裝弦鈕、上弦並完成調整。" } }
          ] },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Employees", ja:"従業員", zh:"員工" },
              v:"≈ 90",
              d:{ en:"Company profile; JETRO lists 71", ja:"会社概要による。ジェトロは七十一人とする", zh:"依公司概要；JETRO 記為 71 人" } },
            { k:{ en:"Markets", ja:"取引国", zh:"市場" },
              v:"64",
              d:{ en:"Countries, through 61 agents", ja:"か国、代理店六十一社", zh:"個國家，透過 61 家代理商" } },
            { k:{ en:"Capital", ja:"資本金", zh:"資本額" },
              v:"¥30M",
              d:{ en:"Takamine Gakki Co., Ltd.", ja:"株式会社高峰楽器製作所", zh:"高峰樂器製作所" } },
            { k:{ en:"Motto", ja:"基本理念", zh:"理念" },
              v:{ en:"Make · sound · people", ja:"ものづくり・音づくり・人づくり", zh:"造物・造音・育人" },
              d:{ en:"The company's three principles", ja:"会社の三つの理念", zh:"公司三大理念" } }
          ] },
        { t:"p",
          text:{
            en:"The company today is led by Tate Hayami as representative director, and in its own words it makes electric-acoustic and acoustic guitars, basses, preamps and pickups, and takes custom orders. Its motto is a play on one Japanese word repeated three times: <em>monozukuri, otozukuri, hitozukuri</em> — making things, making sound and making people. The last of these is not decoration. A factory of about ninety people in a town of a few thousand depends on training its own hands, and the woodworkers of the upper Kiso valley have supplied them for more than sixty years.",
            ja:"現在の会社は代表取締役の楯勇己が率い、自らの言葉によれば、エレアコとアコースティックギター、ベース、プリアンプとピックアップをつくり、オーダーメイドも受ける。基本理念は一つの言葉を三度くり返した言葉遊びである。「ものづくり・音づくり・人づくり」。最後の一つは飾りではない。数千人の町にある約九十人の工場は、自前で手を育てることに支えられており、木曽谷の上流の木工職人たちは六十年以上にわたってその手を送り出してきた。",
            zh:"公司現由代表董事楯勇己領導，依其自述，製造電木吉他與木吉他、貝斯、前級與拾音器，並承接訂製。其理念是把一個日文詞重複三次的文字遊戲：「ものづくり・音づくり・人づくり」——造物、造音、育人。最後一項並非裝飾：一座位於數千人小鎮、約九十人的工廠，仰賴自行培養人手，而木曾谷上游的木工匠六十多年來一直供應這些人手。" } },
        { t:"tiny",
          text:{
            en:"Sources: Takamine Gakki, “How a Takamine guitar is made” and company profile; Gifu Academy of Forest Science and Culture, woodwork case study (2025); JETRO, company profile of Takamine Gakki.",
            ja:"出典：高峰楽器製作所「タカミネギターが出来るまで」と会社概要、岐阜県立森林文化アカデミー「木工事例調査」（二〇二五年）、ジェトロ企業紹介。",
            zh:"資料來源：高峰樂器製作所〈Takamine 吉他如何誕生〉與公司概要；岐阜縣立森林文化學院木工案例調查（2025 年）；JETRO 企業介紹。" } }
      ] },
    { t:"section",
      id:"sakashita",
      title:{ en:"Sakashita and the Tōnō wood economy", ja:"坂下と東濃の木の経済", zh:"坂下與東濃木材經濟" },
      jp:"坂下町",
      body:[
        { t:"p",
          text:{
            en:"Sakashita is a valley basin at the eastern edge of Gifu Prefecture, enclosed by Mount Takamine and Mount Ushiroyama, with the Kiso River running through it from north to south. Its 29.77 square kilometres are three-quarters forest, and in April 2020 it had 4,399 inhabitants in 1,719 households. Nakatsugawa City describes its main industry as sawmilling, wood processing and the making of wooden products — the trades of the Tōnō hinoki for which the district is known. Three villages were combined as Sakashita village in 1889, which became a town in 1911; around 1897 it also had some 250 papermaking households, and sericulture was important. In February 2005 the town merged into Nakatsugawa, and in September the same year Takamine opened its new headquarters and factory there.",
            ja:"坂下は岐阜県の東の端にある渓谷の盆地で、高峰山や後山に囲まれ、木曽川が北から南へ流れる。二九・七七平方キロメートルの四分の三が森林で、二〇二〇年四月の人口は四千三百九十九人、千七百十九世帯であった。中津川市は、地区の主な産業を製材、木材加工、木製品の製造、つまりこの地区で知られる東濃桧の仕事として説明している。三つの村が一八八九年に合わさって坂下村となり、一九一一年に町となった。一八九七年ごろには紙すきの家が約二百五十あり、養蚕も盛んだった。二〇〇五年二月に町は中津川市に合併し、同じ年の九月にタカミネはここに新しい本社と工場を開いた。",
            zh:"坂下是岐阜縣東端的溪谷盆地，四周有高峰山、後山環繞，木曾川由北向南流過。29.77 平方公里的土地有四分之三是森林；2020 年 4 月人口為 4,399 人、1,719 戶。中津川市將當地主要產業描述為製材、木材加工與木製品製造——即本地區聞名的東濃扁柏相關行業。1889 年三個村合併為坂下村，1911 年升格為町；1897 年前後另有約 250 戶從事造紙，養蠶業也很興盛。2005 年 2 月坂下町併入中津川市，同年 9 月 Takamine 在此啟用新總部與工廠。" } },
        { t:"p",
          text:{
            en:"The paradox of a guitar maker in hinoki country is that its instruments contain almost no hinoki. Takamine's tops are North American and European spruce and its backs come from India, Africa and the Americas; the local forest supplied not the wood but the people — sawyers, joiners and cabinetmakers who already knew how to dry timber, cut it accurately and glue it well. The same pattern runs up the valley: the Kiso and Ura-Kiso forests feed Nakatsugawa's sawmills and the house builders of Kashimo and Tsukechi (see <a href=\"provinces.html\">the land</a> and <a href=\"hinoki.html\">hinoki</a>), while the guitar factory turns imported tonewood into an export. Both depend on the same skills and the same respect for well-seasoned wood. For Taiwanese visitors there is a familiar echo: Taiwan's own guitar factories, too, grew in a country with famous cypress forests while building their instruments mostly from imported spruce and rosewood (see <a href=\"taiwan.html\">Taiwan</a>).",
            ja:"ヒノキの里のギターメーカーの逆説は、その楽器にヒノキがほとんど入っていないことである。タカミネの表板は北アメリカとヨーロッパのスプルースで、裏板はインド、アフリカ、南北アメリカから来る。地元の森が送ったのは木ではなく人であった。材を乾かし、正確に挽き、よく接着することをすでに知っていた木挽き、建具師、指物師である。同じ形は谷の上流にも続く。木曽と裏木曽の森は中津川の製材所や加子母・付知の家づくりを支え（<a href=\"provinces.html\">土地</a>と<a href=\"hinoki.html\">ヒノキ</a>を参照）、ギター工場は輸入のトーンウッドを輸出品に変える。どちらも同じ技と、よく乾いた木への同じ敬意に支えられている。台湾の読者には聞きおぼえのある話だろう。台湾のギター工場もまた、名高い檜の森をもつ国で育ちながら、楽器の多くを輸入のスプルースとローズウッドでつくってきた（<a href=\"taiwan.html\">台湾</a>を参照）。",
            zh:"在扁柏之鄉製作吉他的矛盾在於：這些樂器幾乎不含扁柏。Takamine 的面板是北美與歐洲雲杉，背板則來自印度、非洲與美洲；在地森林提供的不是木材，而是人——早已懂得乾燥木料、精準鋸切、牢固膠合的鋸木工、建具師與細木工。同樣的模式延伸到河谷上游：木曾與裏木曾的森林供應中津川的製材所以及加子母、付知的建屋業（見<a href=\"provinces.html\">土地</a>與<a href=\"hinoki.html\">扁柏</a>），而吉他工廠則把進口音木變成外銷產品。兩者仰賴相同的技藝，以及對充分乾燥木材的同樣尊重。對台灣讀者而言，這個故事並不陌生：台灣的吉他工廠同樣在擁有著名檜木林的土地上成長，樂器卻多以進口雲杉與玫瑰木製成（見<a href=\"taiwan.html\">台灣</a>）。" } },
        { t:"tiny",
          text:{
            en:"Sources: Nakatsugawa City, “Sakashita district” and “History of Sakashita”; Takamine Gakki, company history; JETRO, company profile.",
            ja:"出典：中津川市「坂下地区はこんなところ」「坂下地域の由来・歴史」、高峰楽器製作所 会社沿革、ジェトロ企業紹介。",
            zh:"資料來源：中津川市〈坂下地區介紹〉、〈坂下地域的由來與歷史〉；高峰樂器製作所公司沿革；JETRO 企業介紹。" } }
      ] },
    { t:"related",
      items:[
        { href:"yairi.html", why:{ en:"The other Gifu guitar maker.", ja:"岐阜のもう一つのギターメーカー。", zh:"岐阜另一家吉他製造商。" } },
        { href:"guitarindustry.html",
          why:{ en:"The wider Japanese guitar industry.", ja:"より広い日本のギター産業。", zh:"更廣的日本吉他產業。" } },
        { href:"provinces.html", why:{ en:"The Kiso valley and the Tōnō region.", ja:"木曽谷と東濃。", zh:"木曾谷與東濃地區。" } },
        { href:"guitar.html", why:{ en:"Electro-acoustic guitars explained.", ja:"エレアコの説明。", zh:"電木吉他說明。" } }
      ] }
  ] };

/* ---- --------------------------------------------- yairi */
GIFU.pages["yairi"] = { kicker:{ en:"Sound · 07", ja:"音 · 07", zh:"聲音 · 07" },
  title:{ en:"K. Yairi", ja:"ヤイリギター", zh:"K.Yairi 吉他" },
  jp:"可児の手工ギター",
  lede:{
    en:"In Kani, a quiet town on the Kiso River north of Nagoya, a workshop of some thirty craftspeople makes acoustic guitars largely by hand, from wood it has seasoned for years in its own stores, and guarantees each one for as long as it exists. K. Yairi traces its origins to a Nagoya instrument workshop founded in 1935; it moved to Kani to escape the air raids of 1945 and has been there ever since. This page tells the story of the Yairi family's company and the way it makes guitars.",
    ja:"名古屋の北、木曽川沿いの静かな町、可児で、三十人ほどの職人の工房が、自社の倉で何年も枯らした木から、アコースティックギターの多くを手でつくり、一本ごとにそれが存在するかぎりの保証をつけている。ヤイリギターは一九三五年に名古屋で開かれた楽器の工房に源をもち、一九四五年の空襲を逃れて可児に移り、以来ずっとそこにある。この頁は矢入家の会社の物語と、そのギターのつくり方を語る。",
    zh:"在名古屋北方、木曾川畔的寧靜小鎮可兒，一家約有三十名工匠的工坊，以在自家倉庫陳放多年的木材，大量以手工製作木吉他，並為每一把提供「只要吉他存在」的保固。K.Yairi 的源頭可追溯到 1935 年在名古屋創立的樂器工坊；1945 年為躲避空襲遷至可兒，此後一直在此。本頁講述矢入家族企業的故事，以及其製琴方式。" },
  body:[
    { t:"section",
      id:"history",
      title:{ en:"From Nagoya to Kani", ja:"名古屋から可児へ", zh:"從名古屋到可兒" },
      jp:"矢入儀市・矢入一男",
      body:[
        { t:"timeline",
          items:[
            { year:"1935",
              title:{ en:"Yairi Gakki Seisakusho", ja:"矢入楽器製作所", zh:"矢入樂器製作所" },
              text:{
                en:"Yairi Giichi, who had worked at the Suzuki Violin company in Nagoya, founds his own instrument workshop.",
                ja:"名古屋の鈴木バイオリンで働いていた矢入儀市が、自分の楽器の工房を開く。",
                zh:"曾任職於名古屋鈴木小提琴的矢入儀市，創立自己的樂器工坊。" } },
            { year:"1945",
              title:{ en:"To Kani", ja:"可児へ", zh:"遷往可兒" },
              text:{
                en:"The workshop moves to Imawatari, now part of Kani, to escape the bombing of Nagoya. In the war and post-war years it survives by making other wooden goods.",
                ja:"名古屋の空襲を逃れ、工房はいまの可児市の今渡に移る。戦中戦後はほかの木の品をつくって生き延びる。",
                zh:"為躲避名古屋空襲，工坊遷至今渡（今屬可兒市）。戰時與戰後以製作其他木製品維生。" } },
            { year:"1955",
              title:{ en:"School instruments", ja:"学校の楽器", zh:"學校樂器" },
              text:{ en:"The company makes xylophones for schools.", ja:"学校向けの木琴をつくる。", zh:"為學校製作木琴。" } },
            { year:"1962",
              title:{ en:"Learning in America", ja:"アメリカで学ぶ", zh:"赴美學藝" },
              text:{
                en:"Yairi Kazuo, the founder's son, who had joined in 1951, travels to the United States to study guitar making.",
                ja:"一九五一年に入った創業者の子、矢入一男が、ギターづくりを学びにアメリカへ渡る。",
                zh:"1951 年入社的創辦人之子矢入一男赴美學習吉他製作。" } },
            { year:"1965",
              title:{ en:"Yairi Guitar", ja:"ヤイリギター", zh:"Yairi Guitar" },
              text:{
                en:"The company is reorganised as Yairi Guitar Co.",
                ja:"株式会社ヤイリギターに改組。",
                zh:"改組為 Yairi Guitar 股份公司。" } },
            { year:"1970",
              title:{ en:"Alvarez Yairi", ja:"アルヴァレス・ヤイリ", zh:"Alvarez Yairi" },
              text:{
                en:"Kazuo becomes president; an agreement with an American distributor sells Yairi guitars in the US under the name Alvarez Yairi. The company moves to its present site.",
                ja:"一男が社長になる。アメリカの販売会社との契約で、ヤイリのギターはアルヴァレス・ヤイリの名でアメリカで売られる。会社はいまの地に移る。",
                zh:"一男出任社長；與美國經銷商簽約，Yairi 吉他以「Alvarez Yairi」之名在美國銷售。公司遷至現址。" } },
            { year:"1972",
              title:{ en:"Lifetime guarantee", ja:"生涯保証", zh:"終身保固" },
              text:{
                en:"Yairi begins guaranteeing its guitars for as long as the instrument exists, for the original owner.",
                ja:"ヤイリは、最初の持ち主に対し、楽器が存在するかぎりの保証を始める。",
                zh:"Yairi 開始為原始購買者提供「樂器存在多久、保固就多久」的保證。" } },
            { year:"2005–06",
              title:{ en:"Honours", ja:"栄誉", zh:"榮譽" },
              text:{
                en:"Yairi Kazuo is named one of Japan's Contemporary Master Craftsmen (2005) and receives the Medal with Yellow Ribbon (2006). He died in 2014.",
                ja:"矢入一男が現代の名工に選ばれ（二〇〇五年）、黄綬褒章を受ける（二〇〇六年）。二〇一四年に没した。",
                zh:"矢入一男獲選為「現代名工」（2005），並獲頒黃綬褒章（2006）。他於 2014 年辭世。" } }
          ] }
      ] },
    { t:"section",
      id:"method",
      title:{ en:"How Yairi makes guitars", ja:"ヤイリのつくり方", zh:"Yairi 如何製琴" },
      jp:"手工と枯らし",
      body:[
        { t:"p",
          text:{
            en:"Yairi's reputation rests on a workshop approach unusual for a company of its size. Tonewood is bought in advance and air-seasoned for years in the company's own stores before it is used. Guitars are built largely by hand by a staff of about thirty, at a rate reported as twenty to twenty-five instruments a day; necks are fitted and set up individually, and custom orders have been accepted since 1979. Finished guitars are reportedly “played in” by being exposed to music before they leave the factory. The company's willingness to repair any guitar it has made, for its whole life, is both a service and a statement about how long a good guitar should last.",
            ja:"ヤイリの評判は、その規模の会社としては珍しい工房のやり方に支えられている。トーンウッドは前もって買われ、使う前に自社の倉で何年も天然で枯らされる。ギターはおよそ三十人の職人が一日に二十本から二十五本ほどと伝えられる割合で、その多くを手でつくる。ネックは一本ずつ合わせて調整し、一九七九年からは注文製作も受けてきた。仕上がったギターは、工場を出る前に音楽を聴かせて「弾きこむ」と伝えられる。自社がつくったギターをその一生のあいだ修理しようという姿勢は、サービスであると同時に、良いギターはどれほど長もちすべきかについての宣言でもある。",
            zh:"Yairi 的聲譽建立在一種以其規模而言相當少見的工坊式做法上。音木提前購入，在自家倉庫自然陳放多年後才使用。約三十名工匠以據報每天約二十到二十五把的速度，大量以手工製作吉他；琴頸逐一裝配與調校，自 1979 年起也接受訂製。據說成品在出廠前會讓它們「聽」音樂來「養琴」。公司願意在吉他整個生命期間為其修理，既是一項服務，也是一種宣言：一把好吉他應該能用多久。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Founded", ja:"創業", zh:"創立" },
              v:"1935",
              d:{ en:"Nagoya; in Kani since 1945", ja:"名古屋。一九四五年から可児", zh:"名古屋；1945 年起在可兒" } },
            { k:{ en:"Craftspeople", ja:"職人", zh:"工匠" },
              v:{ en:"≈ 30", ja:"約三十人", zh:"約 30 人" },
              d:{ en:"Largely hand-built guitars", ja:"多くを手でつくる", zh:"主要以手工製作" } },
            { k:{ en:"Output", ja:"生産", zh:"產量" },
              v:{ en:"≈ 20–25 / day", ja:"一日約二十〜二十五本", zh:"每天約 20–25 把" },
              d:{ en:"As reported", ja:"伝えられるところで", zh:"據報導" } },
            { k:{ en:"Guarantee", ja:"保証", zh:"保固" },
              v:{ en:"Lifetime", ja:"生涯", zh:"終身" },
              d:{ en:"Since 1972, original owner", ja:"一九七二年から、最初の持ち主に", zh:"自 1972 年起，限原始購買者" } }
          ] }
      ] },
    { t:"section",
      id:"visit",
      title:{ en:"Visiting the factory", ja:"工場を訪ねる", zh:"參觀工廠" },
      jp:"工場見学",
      body:[
        { t:"p",
          text:{
            en:"K. Yairi is one of the few Japanese guitar makers that opens its workshop to the public. Free guided tours are held on Saturdays, usually at 10:00 and 13:30, lasting about an hour, for groups of up to ten people; reservations are required and can be made up to two months ahead. Specialist staff explain each stage of the handwork, and in the showroom visitors can play guitars from the catalogue range as well as show and prototype models. Check the company's current arrangements before travelling.",
            ja:"ヤイリギターは、工房を一般に開く数少ない日本のギターメーカーの一つである。無料の案内つきの見学は土曜日に、ふつう十時と十三時半に行われ、およそ一時間、一組十人までである。予約が必要で、二か月前から受けつける。専門の係が手仕事の一つひとつの工程を説明し、展示室では、カタログのモデルから展示用や試作のモデルまで、訪れた人がギターを弾いてみられる。出かける前に会社のいまの案内を確かめること。",
            zh:"K.Yairi 是少數對大眾開放工坊的日本吉他廠之一。免費導覽於週六舉行，通常在 10:00 與 13:30，約一小時，每團最多十人；須預約，最早可於兩個月前預約。專業人員會解說手工製作的各個階段，參觀者還能在展示室試彈從型錄款到展示款與試作款的吉他。出發前請先確認公司最新安排。" } },
        { t:"steps",
          items:[
            { title:{ en:"Wood store", ja:"木の倉", zh:"木料倉庫" },
              text:{
                en:"Stacks of tops, backs and neck blanks seasoning for years.",
                ja:"何年も枯らしている表板、裏板、ネックの材の山。",
                zh:"陳放多年的面板、背板與琴頸坯料堆。" } },
            { title:{ en:"Plates and bracing", ja:"板と力木", zh:"面板與音梁" },
              text:{
                en:"Tops thicknessed, braced and tapped by hand.",
                ja:"表板を厚み出しし、力木を貼り、手で叩いて確かめる。",
                zh:"面板定厚、貼音梁並以手敲擊確認。" } },
            { title:{ en:"Body and neck", ja:"胴とネック", zh:"琴身與琴頸" },
              text:{
                en:"Sides bent, boxes closed, necks carved and fitted.",
                ja:"側板を曲げ、箱を閉じ、ネックを削って合わせる。",
                zh:"彎曲側板、合箱、雕削並裝配琴頸。" } },
            { title:{ en:"Finish and setup", ja:"塗装と調整", zh:"塗裝與調校" },
              text:{ en:"Lacquering, polishing, final adjustment and playing.", ja:"塗り、磨き、最後の調整と試奏。", zh:"上漆、拋光、最終調整與試奏。" } }
          ] }
      ] },
    { t:"section",
      id:"more",
      title:{ en:"Instruments, names and a flood", ja:"楽器と名と洪水", zh:"樂器、名號與一場洪水" },
      jp:"余話",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"A new four-string instrument", ja:"四弦の新しい楽器", zh:"新的四弦樂器" },
              jp:"一五一会",
              def:{
                en:"In 2002 Yairi developed, with the Okinawan band BEGIN, a small four-string instrument called <em>ichigo ichie</em> (“one meeting, one chance”), designed so that anyone could play chords with a single finger — an example of the company's interest in making music accessible.",
                ja:"二〇〇二年、ヤイリは沖縄のバンドBEGINとともに、「一五一会」という小さな四弦の楽器を開発した。指一本で誰でも和音を弾けるよう設計され、音楽を身近にしようという会社の関心の一例である。",
                zh:"2002 年，Yairi 與沖繩樂團 BEGIN 合作開發名為「一五一會」的小型四弦樂器，設計成任何人只用一根手指就能彈出和弦——體現公司讓音樂更平易近人的用心。" } },
            { term:{ en:"K. Yairi and S. Yairi", ja:"K.ヤイリとS.ヤイリ", zh:"K.Yairi 與 S.Yairi" },
              jp:"二つのヤイリ",
              def:{
                en:"The name S. Yairi, found on many Japanese guitars of the 1960s–80s, belonged to a separate business run by another member of the family in Nagoya. The Kani company's instruments carry the K. Yairi name (for Kazuo) or were sold abroad as Alvarez Yairi.",
                ja:"一九六〇〜八〇年代の多くの日本のギターに見られるS.ヤイリの名は、名古屋で一族の別の人が営んだ別の事業のものである。可児の会社の楽器はK.ヤイリ（一男の頭文字）の名をもつか、海外でアルヴァレス・ヤイリとして売られた。",
                zh:"許多 1960–80 年代日本吉他上的「S.Yairi」之名，屬於家族另一成員在名古屋經營的另一家企業。可兒公司的樂器則冠以「K.Yairi」（取自一男的名字）之名，或在海外以「Alvarez Yairi」銷售。" } },
            { term:{ en:"The music garden", ja:"ミュージックガーデン", zh:"音樂花園" },
              jp:"K21",
              def:{
                en:"In 1980 the company opened a music facility beside its factory; it was lost in the great flood of the Kiso River in 1983, which inundated parts of Kani and Minokamo — a reminder that the river which once carried Gifu's timber can also destroy.",
                ja:"一九八〇年、会社は工場のそばに音楽の施設を開いたが、一九八三年、可児や美濃加茂の一部を浸した木曽川の大洪水で失われた。かつて岐阜の材木を運んだ川が、壊しもすることを思い出させる。",
                zh:"1980 年，公司在工廠旁開設一處音樂設施；1983 年木曾川大洪水淹沒可兒與美濃加茂部分地區，該設施毀於水患——提醒人們，昔日運送岐阜木材的河流也能帶來毀滅。" } },
            { term:{ en:"Players", ja:"弾き手", zh:"演奏者" },
              jp:"ユーザー",
              def:{
                en:"According to published accounts, Yairi guitars have been used by international musicians including Paul McCartney and Carlos Santana, and by many Japanese artists, among them Kuwata Keisuke, Nagabuchi Tsuyoshi and the band GLAY.",
                ja:"公表された記録によれば、ヤイリのギターはポール・マッカートニーやカルロス・サンタナら海外の音楽家、そして桑田佳祐、長渕剛、GLAYをはじめ多くの日本のアーティストに使われてきた。",
                zh:"據公開資料，Yairi 吉他的使用者包括 Paul McCartney、Carlos Santana 等國際音樂人，以及桑田佳祐、長渕剛、GLAY 等許多日本藝人。" } }
          ] }
      ] },
    { t:"section",
      id:"range",
      title:{ en:"The catalogue and its woods", ja:"カタログと木", zh:"型錄與木材" },
      jp:"シリーズと材",
      body:[
        { t:"p",
          text:{
            en:"K. Yairi's catalogue (the edition dated March 2020) is arranged by series rather than by body size, and reading it is a lesson in how wood sets the price of a guitar. At the top, the Highend series pairs tops of solid German, Adirondack or Sitka spruce with solid Honduras mahogany or Indian rosewood. The Angel series, the core of the range, offers four bodies — the small, rounded RF, the medium BM, the dreadnought-type LO and the larger BL — each on the same ladder of woods: a solid spruce top over laminated mahogany or rosewood, then solid mahogany, solid Indian rosewood and, at the top, solid Honduras rosewood or flamed koa. The Old Style series revives classic American patterns in its DY dreadnoughts and YF 000-size guitars; nylon-string, electro-acoustic, bass, ukulele and small travel instruments complete the list, together with <em>ichigo ichie</em>. Nearly every model, even the cheapest, has a solid top; necks are mahogany and fingerboards almost always ebony.",
            ja:"ヤイリギターのカタログ（二〇二〇年三月作成の版）は胴の大きさではなくシリーズで組まれており、読めば木がギターの値段をどう決めるかがわかる。最上位のハイエンド・シリーズは、ジャーマン、アディロンダック、シトカのいずれかのスプルース単板の表板に、ホンジュラスマホガニーかインドローズウッドの単板を組み合わせる。中心となるエンジェル・シリーズは四つの胴——小さく丸いRF、中型のBM、ドレッドノート型のLO、大きめのBL——をそろえ、どれも同じ木の階段を上る。スプルース単板の表板に合板のマホガニーかローズウッド、次にマホガニー単板、インドローズウッド単板、そして最上段にホンジュラスローズウッドか杢のあるコアの単板。オールドスタイル・シリーズはDYのドレッドノートとYFの000サイズでアメリカの古典的な型をよみがえらせ、ナイロン弦、エレクトリック・アコースティック、ベース、ウクレレ、小さな旅行用の楽器、そして一五一会が並ぶ。最も安いものも含め、ほぼすべてのモデルが単板の表板をもつ。ネックはマホガニーで、指板はほとんどがエボニーである。",
            zh:"K.Yairi 的型錄（2020 年 3 月版）不是依琴身大小，而是依系列編排；讀它就能明白木材如何決定一把吉他的價格。最高階的 Highend 系列以德國、阿第倫達克或西加雲杉單板面板，搭配宏都拉斯桃花心木或印度玫瑰木單板。核心的 Angel 系列有四種琴身——小而圓的 RF、中型的 BM、D 桶型的 LO 與較大的 BL——每一種都沿著同一道木材階梯：雲杉單板面板配合板桃花心木或玫瑰木，接著是桃花心木單板、印度玫瑰木單板，最上層則是宏都拉斯玫瑰木或虎紋相思木（koa）單板。Old Style 系列以 DY 系列 D 桶與 YF 系列 000 尺寸重現美國經典樣式；另有尼龍弦、電木吉他、貝斯、烏克麗麗、小型旅行琴，以及「一五一會」。幾乎每個型號，連最便宜的在內，都採用單板面板；琴頸為桃花心木，指板幾乎都是黑檀。" } },
        { t:"table",
          caption:{
            en:"K. Yairi series and their woods (catalogue of March 2020; list prices include consumption tax and may have changed since)",
            ja:"ヤイリギターのシリーズとその木（二〇二〇年三月のカタログ。希望小売価格は消費税込みで、その後変わっている場合がある）",
            zh:"K.Yairi 各系列及其木材（2020 年 3 月型錄；建議售價含消費稅，其後可能已調整）" },
          cols:[
            { en:"Series", ja:"シリーズ", zh:"系列" },
            { en:"Instruments", ja:"楽器", zh:"樂器" },
            { en:"Top / back and sides", ja:"表板／裏板・側板", zh:"面板／背側板" },
            { en:"List price, ¥", ja:"価格（円）", zh:"售價（日圓）" }
          ],
          rows:[
            [
              "Highend",
              { en:"Dreadnoughts", ja:"ドレッドノート", zh:"D 桶" },
              {
                en:"German, Adirondack or Sitka spruce / Honduras mahogany or Indian rosewood, all solid",
                ja:"ジャーマン・アディロンダック・シトカのスプルース／ホンジュラスマホガニーかインドローズウッド、すべて単板",
                zh:"德國、阿第倫達克或西加雲杉／宏都拉斯桃花心木或印度玫瑰木，全單板" },
              "396,000–550,000"
            ],
            [
              "Angel",
              { en:"RF, BM, LO and BL bodies", ja:"RF・BM・LO・BLの胴", zh:"RF、BM、LO、BL 琴身" },
              {
                en:"Solid spruce / laminate, then solid mahogany, Indian rosewood, Honduras rosewood or flamed koa",
                ja:"スプルース単板／合板、さらにマホガニー、インドローズウッド、ホンジュラスローズウッド、杢のあるコアの単板",
                zh:"雲杉單板／合板，往上為桃花心木、印度玫瑰木、宏都拉斯玫瑰木或虎紋相思木單板" },
              {
                en:"115,500–253,000 (top models open price)",
                ja:"115,500〜253,000（上位はオープン価格）",
                zh:"115,500–253,000（頂級型號為開放價格）" }
            ],
            [
              "Old Style",
              { en:"DY dreadnoughts, YF 000s, YW", ja:"DY・YF（000）・YW", zh:"DY、YF（000）、YW" },
              {
                en:"Solid spruce / solid mahogany or Indian rosewood; laminated jacaranda",
                ja:"スプルース単板／マホガニーかインドローズウッドの単板、ハカランダの合板",
                zh:"雲杉單板／桃花心木或印度玫瑰木單板；巴西玫瑰木合板" },
              "209,000–308,000"
            ],
            [
              "ISM, Smart",
              { en:"Small steel- and nylon-string guitars", ja:"小ぶりのスチール弦・ナイロン弦", zh:"小型鋼弦與尼龍弦吉他" },
              {
                en:"Solid spruce or cedar / ovangkol laminate up to solid mahogany, maple or kihada",
                ja:"スプルースかシダーの単板／オバンコールの合板から、マホガニー・メイプル・キハダの単板まで",
                zh:"雲杉或雪松單板／從奧萬科爾合板到桃花心木、楓木或黃檗單板" },
              "93,500–275,000"
            ],
            [
              "Nylon",
              { en:"Classical guitars", ja:"クラシックギター", zh:"古典吉他" },
              {
                en:"Solid cedar or spruce / Indian rosewood, maple, and Japanese kaya and hiba",
                ja:"シダーかスプルースの単板／インドローズウッド、メイプル、そして日本のカヤとヒバ",
                zh:"雪松或雲杉單板／印度玫瑰木、楓木，以及日本榧木與 hiba（翌檜）" },
              "137,500–462,000"
            ],
            [
              { en:"Electric acoustic, bass", ja:"エレアコ・ベース", zh:"電木吉他、貝斯" },
              { en:"Cutaway bodies with pickups", ja:"カッタウェイとピックアップ", zh:"缺角琴身附拾音器" },
              {
                en:"Solid spruce or cedar / mostly laminated maple, sapele, rosewood or ovangkol",
                ja:"スプルースかシダーの単板／主に合板のメイプル、サペリ、ローズウッド、オバンコール",
                zh:"雲杉或雪松單板／多為楓木、沙比利、玫瑰木或奧萬科爾合板" },
              "126,500–440,000"
            ],
            [
              { en:"Compact, ukulele, ichigo ichie", ja:"コンパクト・ウクレレ・一五一会", zh:"迷你琴、烏克麗麗、一五一會" },
              { en:"Travel guitars and small instruments", ja:"旅行用と小さな楽器", zh:"旅行吉他與小型樂器" },
              {
                en:"Solid spruce, cedar or mahogany / linden, ovangkol or mahogany",
                ja:"スプルース・シダー・マホガニーの単板／シナ、オバンコール、マホガニー",
                zh:"雲杉、雪松或桃花心木單板／椴木、奧萬科爾或桃花心木" },
              "38,500–132,000"
            ]
          ] },
        { t:"figure",
          caption:{
            en:"List prices of dreadnought-type K. Yairi steel-string guitars in the March 2020 catalogue, in thousands of yen including tax. Within one body the price climbs with the back and sides (laminate, then solid mahogany, then solid rosewood); in the Highend series it climbs again with the species of spruce on top.",
            ja:"二〇二〇年三月のカタログにあるヤイリのドレッドノート型スチール弦ギターの希望小売価格（千円、税込み）。同じ胴なら、値段は裏板・側板で上がり（合板、マホガニー単板、ローズウッド単板）、ハイエンド・シリーズでは表板のスプルースの種類でさらに上がる。",
            zh:"2020 年 3 月型錄中 K.Yairi D 桶型鋼弦吉他的建議售價（千日圓，含稅）。同一琴身中，價格隨背側板升高（合板、桃花心木單板、玫瑰木單板）；在 Highend 系列中，又隨面板雲杉的種類再升高。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"How wood sets the price", ja:"木が値段を決める", zh:"木材如何決定價格" }, labelW:300, rowH:28,
            items:[
              { n:{ en:"LO-65RB · mahogany laminate", ja:"LO-65RB・マホガニー合板", zh:"LO-65RB・桃花心木合板" }, v:115.5, lab:"¥115,500", f:"#E6E4E0" },
              { n:{ en:"LO-95 · rosewood laminate", ja:"LO-95・ローズウッド合板", zh:"LO-95・玫瑰木合板" }, v:148.5, lab:"¥148,500", f:"#E6E4E0" },
              { n:{ en:"LO-90 · solid mahogany", ja:"LO-90・マホガニー単板", zh:"LO-90・桃花心木單板" }, v:198, lab:"¥198,000", f:"#EDE5D2" },
              { n:{ en:"LO-120 · solid Indian rosewood", ja:"LO-120・インドローズ単板", zh:"LO-120・印度玫瑰木單板" }, v:231, lab:"¥231,000", f:"#EDE5D2" },
              { n:{ en:"YS-120KM · Sitka / Indian rosewood", ja:"YS-120KM・シトカ／インドローズ", zh:"YS-120KM・西加／印度玫瑰木" }, v:396, lab:"¥396,000", f:"#EEE1DF" },
              { n:{ en:"YS-110LS · Adirondack / mahogany", ja:"YS-110LS・アディロンダック／マホガニー", zh:"YS-110LS・紅雲杉／桃花心木" }, v:440, lab:"¥440,000", f:"#EEE1DF" },
              { n:{ en:"YS-120LS · Adirondack / Indian rosewood", ja:"YS-120LS・アディロンダック／インドローズ", zh:"YS-120LS・紅雲杉／印度玫瑰木" }, v:495, lab:"¥495,000", f:"#EEE1DF" },
              { n:{ en:"YS-120LF · German spruce / Indian rosewood", ja:"YS-120LF・ジャーマン／インドローズ", zh:"YS-120LF・德國雲杉／印度玫瑰木" }, v:550, lab:"¥550,000", f:"#EEE1DF" }
            ] }); } },
        { t:"p",
          text:{
            en:"The nylon-string list is where Japanese woods appear. Beside cedar-and-rosewood classical guitars, the catalogue offers a model with back and sides of solid kaya (Japanese torreya), a wood better known for go boards, and another of solid hiba, the northern form of asunaro, one of the <a href=\"fivetrees.html\">five protected trees of Kiso</a>; a small steel-string model has a three-piece back of kihada, the Amur cork tree. How such woods behave in instruments is discussed on <a href=\"japanesewoods.html\">Japanese Woods, Japanese Instruments</a>.",
            ja:"日本の木が現れるのはナイロン弦の欄である。シダーとローズウッドのクラシックギターと並んで、カタログには、碁盤でよく知られるカヤの単板を裏板・側板に使ったモデルと、<a href=\"fivetrees.html\">木曽五木</a>の一つアスナロの北の変種、ヒバの単板のモデルがある。小さなスチール弦のモデルには、キハダの三枚はぎの裏板をもつものもある。こうした木が楽器のなかでどうふるまうかは<a href=\"japanesewoods.html\">和の木と和の楽器</a>で述べる。",
            zh:"日本木材出現在尼龍弦的欄位。除了雪松配玫瑰木的古典吉他，型錄中還有以榧木單板（以棋盤聞名的木材）為背側板的型號，以及以 hiba 單板（翌檜的北方變種；翌檜為<a href=\"fivetrees.html\">木曾五木</a>之一）製作的型號；一款小型鋼弦琴則採用三拼黃檗背板。這些木材在樂器中的表現，見<a href=\"japanesewoods.html\">日本之木與日本樂器</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: K. Yairi, product catalogue (March 2020). Prices are manufacturer's list prices including 10% consumption tax.",
            ja:"出典：ヤイリギター、製品カタログ（二〇二〇年三月）。価格は消費税一〇％込みのメーカー希望小売価格。",
            zh:"資料來源：K.Yairi 產品型錄（2020 年 3 月）。價格為含 10% 消費稅之製造商建議售價。" } }
      ] },
    { t:"section",
      id:"alvarez",
      title:{ en:"Alvarez Yairi: a Kani guitar in America", ja:"アルヴァレス・ヤイリ——アメリカの可児のギター", zh:"Alvarez Yairi：可兒吉他在美國" },
      jp:"輸出ブランド",
      body:[
        { t:"p",
          text:{
            en:"The American story began with a distributor. St. Louis Music, a wholesaler in Missouri, created the Alvarez brand in 1965 for guitars it imported. In the late 1960s Gene Kornblum, son of the company's founder and by then its driving force, began working with Yairi Kazuo, who had studied guitar making in the United States in 1962, to design steel-string acoustics for the American market. Yairi dates the contract to 1970, when the export brand Alvarez Yairi was launched; the same instruments were sold in Europe and elsewhere under the K. Yairi name. In 1971 the company introduced the YW-250, which it describes as Japan's first steel-string acoustic with a solid top, and in 1972 the YW series and the lifetime guarantee followed.",
            ja:"アメリカでの物語は一つの販売会社から始まった。ミズーリ州の卸売業者セントルイス・ミュージックは、一九六五年、輸入するギターのためにアルヴァレスのブランドをつくった。一九六〇年代の終わり、創業者の息子で当時すでに会社を率いていたジーン・コーンブラムは、一九六二年にアメリカでギターづくりを学んでいた矢入一男と組み、アメリカ市場向けのスチール弦ギターの設計を始めた。ヤイリはその契約を一九七〇年とし、この年に輸出ブランドのアルヴァレス・ヤイリが始まった。同じ楽器はヨーロッパなどではK.ヤイリの名で売られた。一九七一年、会社はYW-250を出し、これを日本初の単板トップのスチール弦アコースティックギターとしている。一九七二年にはYWシリーズと生涯保証が続いた。",
            zh:"美國的故事始於一家經銷商。密蘇里州的批發商 St. Louis Music 於 1965 年為其進口吉他創立了 Alvarez 品牌。1960 年代末，創辦人之子、當時已主導公司的 Gene Kornblum 開始與 1962 年曾赴美學習製琴的矢入一男合作，為美國市場設計鋼弦木吉他。Yairi 將這份合約定在 1970 年，出口品牌 Alvarez Yairi 於該年推出；同樣的樂器在歐洲等地則以 K.Yairi 之名銷售。1971 年公司推出 YW-250，並稱其為日本第一把單板面板的鋼弦木吉他；1972 年又推出 YW 系列並開始終身保固。" } },
        { t:"p",
          text:{
            en:"The Alvarez name later spread far beyond Kani: today it also covers lower-priced guitars made in China, while the Alvarez Yairi models are still made by hand in the Yairi workshop, with features such as the company's “direct coupled” bridge. Alvarez lists Jerry Garcia, Bob Weir, Ani DiFranco and Joe Bonamassa among the touring musicians who have played them. Ownership on the American side changed in 2005, when the brand passed to LOUD Technologies, and changed back in 2009, when St. Louis Music took over management and distribution again. In 2018 Alvarez announced a limited Yairi line built from naturally seasoned Honduran mahogany found in the stock Yairi Kazuo had laid in during the 1970s — wood that had waited some forty years for its turn.",
            ja:"アルヴァレスの名はその後、可児をはるかに越えて広がった。いまでは中国でつくられる手ごろな価格のギターも含むが、アルヴァレス・ヤイリのモデルはいまもヤイリの工房で手でつくられ、会社独自の「ダイレクト・カップルド」ブリッジなどを備える。アルヴァレスは、それを弾いたツアー・ミュージシャンとしてジェリー・ガルシア、ボブ・ウェア、アーニー・ディフランコ、ジョー・ボナマッサらを挙げる。アメリカ側の持ち主は二〇〇五年にラウド・テクノロジーズに移り、二〇〇九年にセントルイス・ミュージックが経営と販売を取り戻した。二〇一八年、アルヴァレスは、矢入一男が一九七〇年代に買い置いたなかから見つかった、自然に枯らしたホンジュラスマホガニーでつくる限定のヤイリのラインを発表した。四十年ほど出番を待った木である。",
            zh:"Alvarez 之名後來遠遠超出可兒：如今它也涵蓋在中國製造的平價吉他，而 Alvarez Yairi 型號仍在 Yairi 工坊以手工製作，具備公司獨有的「直接耦合」（direct coupled）琴橋等特色。Alvarez 列出 Jerry Garcia、Bob Weir、Ani DiFranco、Joe Bonamassa 等曾使用其吉他的巡演樂手。美國方面的所有權於 2005 年轉至 LOUD Technologies，2009 年 St. Louis Music 重新接手經營與經銷。2018 年，Alvarez 推出限量的 Yairi 系列，所用的自然陳放宏都拉斯桃花心木，是從矢入一男於 1970 年代購置的庫存中發現的——這些木材等了約四十年才輪到上場。" } },
        { t:"timeline",
          items:[
            { year:"1965",
              title:{ en:"Alvarez brand", ja:"アルヴァレスのブランド", zh:"Alvarez 品牌" },
              text:{
                en:"Created by St. Louis Music for imported guitars.",
                ja:"セントルイス・ミュージックが輸入ギターのためにつくる。",
                zh:"St. Louis Music 為進口吉他創立。" } },
            { year:"1970",
              title:{ en:"Alvarez Yairi", ja:"アルヴァレス・ヤイリ", zh:"Alvarez Yairi" },
              text:{
                en:"Contract with the American distributor; export brand launched.",
                ja:"アメリカの販売会社と契約し、輸出ブランドが始まる。",
                zh:"與美國經銷商簽約，推出出口品牌。" } },
            { year:"1971",
              title:{ en:"YW-250", ja:"YW-250", zh:"YW-250" },
              text:{
                en:"A steel-string guitar with a solid top, the first in Japan by the company's account.",
                ja:"単板トップのスチール弦ギター。会社によれば日本初。",
                zh:"單板面板鋼弦吉他，據公司所述為日本首創。" } },
            { year:"2005–09",
              title:{ en:"Changes of owner", ja:"持ち主の交代", zh:"所有權更迭" },
              text:{
                en:"The Alvarez brand is owned by LOUD Technologies, then returns to St. Louis Music.",
                ja:"アルヴァレスのブランドはラウド・テクノロジーズのものとなり、のちにセントルイス・ミュージックに戻る。",
                zh:"Alvarez 品牌歸 LOUD Technologies 所有，其後回到 St. Louis Music。" } },
            { year:"2018",
              title:{ en:"Honduran mahogany", ja:"ホンジュラスマホガニー", zh:"宏都拉斯桃花心木" },
              text:{
                en:"A limited line from Yairi Kazuo's 1970s wood stock.",
                ja:"矢入一男の一九七〇年代の材のたくわえから、限定のライン。",
                zh:"以矢入一男 1970 年代庫存木材製作的限量系列。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: K. Yairi, company outline and history; Wikipedia, “Alvarez Guitars” (St. Louis Music, Kornblum, LOUD Technologies, 2018 line, players).",
            ja:"出典：ヤイリギター、会社概要と沿革。Wikipedia「Alvarez Guitars」（セントルイス・ミュージック、コーンブラム、ラウド・テクノロジーズ、二〇一八年のライン、弾き手）。",
            zh:"資料來源：K.Yairi 公司概要與沿革；Wikipedia「Alvarez Guitars」（St. Louis Music、Kornblum、LOUD Technologies、2018 年系列、使用者）。" } }
      ] },
    { t:"section",
      id:"succession",
      title:{ en:"After Yairi Kazuo", ja:"矢入一男のあと", zh:"矢入一男之後" },
      jp:"二代から三代へ",
      body:[
        { t:"p",
          text:{
            en:"Yairi Kazuo died in 2014, and in the same year the leadership of the company passed to Yairi Yoshimitsu, who heads it today. The new generation has chosen continuity over growth. Interviewed by the Japanese site Nihon Meisho, the president described his aim as keeping the company as it is rather than expanding it, so that the people who make the guitars stay close both to the instruments and to the players who buy them; skills are passed on by working beside experienced craftspeople rather than through a formal training scheme. The company also explained that a custom order costs nothing extra unless the specification itself changes, and that its standard string height has come down from about 3.5 mm in the 1980s to about 2.5 mm, as players' tastes changed. Yairi still builds its guitars sturdily, expecting them to open up over years of playing (see <a href=\"bracing.html\">Tops &amp; Bracing</a>).",
            ja:"矢入一男は二〇一四年に没し、同じ年、会社の舵取りは矢入賀光に移った。いまの代表である。新しい代は成長より継続を選んだ。日本の名所を紹介するサイトの取材に、社長は、会社を広げるより今のまま保つことを目指すと語った。ギターをつくる人が、楽器にも、それを買う弾き手にも近くいられるようにするためである。技は決まった研修ではなく、経験のある職人の隣で働くことで受け継がれる。会社はまた、注文製作は仕様そのものが変わらないかぎり追加の費用がかからないこと、標準の弦高が、弾き手の好みの変化につれて、一九八〇年代のおよそ3.5mmから約2.5mmに下がったことを説明した。ヤイリはいまも、何年も弾かれるうちに鳴りが開くことを見込んで、ギターを頑丈につくる（<a href=\"bracing.html\">表板と力木</a>を参照）。",
            zh:"矢入一男於 2014 年辭世，同年公司經營交棒給現任代表矢入賀光。新一代選擇延續而非擴張。在接受日本網站 Nihon Meisho 訪問時，社長表示目標是維持現狀而非擴大規模，讓製琴的人能貼近樂器，也貼近購買吉他的演奏者；技藝透過在資深工匠身旁工作來傳承，而非正式的培訓制度。公司也說明，訂製琴除非規格本身改變，否則不另加價；標準弦高則隨演奏者喜好改變，從 1980 年代的約 3.5 公釐降到約 2.5 公釐。Yairi 至今仍把吉他造得堅固，預期它們在多年彈奏中逐漸「打開」（見<a href=\"bracing.html\">面板與音梁</a>）。" } },
        { t:"quote",
          text:{ en:"There is no road for us but high quality.", ja:"高品質より我ら生きる道なし", zh:"除了高品質，我們別無生路。" },
          cite:{ en:"K. Yairi company motto", ja:"ヤイリギターの社是", zh:"K.Yairi 公司社訓" } },
        { t:"p",
          text:{
            en:"The pressures on a small maker are mostly about materials. In the same interview the company named the growing scarcity of good tonewood and the rosewood trade rules that took effect in January 2017 (see <a href=\"cites.html\">Rosewood &amp; the Law</a>) as its main constraints. A store of wood bought and seasoned years ago is, in that light, not only a matter of quality but a reserve against an uncertain supply. Even the company's own records do not always agree in detail: its catalogue dates Yairi Kazuo's honours to 2005 and 2006, as on this page, while the history on its website gives 2006 and 2007.",
            ja:"小さなつくり手にかかる圧力の多くは材料にかかわる。同じ取材で会社は、良いトーンウッドがますます得にくくなっていることと、二〇一七年一月に効力をもったローズウッドの取引の規則（<a href=\"cites.html\">ローズウッドと条約</a>を参照）を、主な制約として挙げた。その目で見れば、何年も前に買って枯らした材のたくわえは、品質の問題であるだけでなく、不確かな供給への備えでもある。会社自身の記録さえ細部では一致しない。カタログは矢入一男の栄誉を、この頁と同じく二〇〇五年と二〇〇六年とするが、ウェブサイトの沿革は二〇〇六年と二〇〇七年とする。",
            zh:"小型製琴廠承受的壓力多半與材料有關。在同一次訪問中，公司指出優質音木日益難得，以及 2017 年 1 月生效的玫瑰木貿易規範（見<a href=\"cites.html\">玫瑰木與公約</a>），是主要的限制。由此看來，多年前購入並陳放的木材庫存不只關乎品質，也是對不確定供應的儲備。甚至公司自己的紀錄在細節上也不盡一致：型錄將矢入一男的榮譽定在 2005 年與 2006 年（與本頁相同），網站的沿革則寫作 2006 年與 2007 年。" } }
      ] },
    { t:"section",
      id:"stock",
      title:{ en:"How long the wood waits", ja:"木はどれほど待つか", zh:"木材要等多久" },
      jp:"材のたくわえ",
      body:[
        { t:"p",
          text:{
            en:"Every account of K. Yairi mentions its seasoned wood, but the numbers vary with the source. The differences are less contradictions than different questions: some figures describe the whole store, others a particular part of the guitar, and a store of wood is a rolling stock, with new boards arriving as old ones are used. The way the wood is then brought to its final moisture content is described on <a href=\"making.html\">How a Guitar Is Made</a>.",
            ja:"ヤイリについてのどの記事も枯らした木に触れるが、数字は出どころによって違う。その違いは矛盾というより、問いの違いである。ある数字は倉全体を、別の数字はギターの特定の部分を語る。そして木のたくわえは、古い板が使われるそばから新しい板が入ってくる、回りつづける在庫である。木がそのあと最終の含水率にどう仕上げられるかは<a href=\"making.html\">ギターができるまで</a>で述べる。",
            zh:"每篇介紹 K.Yairi 的文章都提到其陳放木材，但數字因來源而異。這些差異與其說是矛盾，不如說是在回答不同的問題：有些數字指整座倉庫，有些指吉他的某個部位；而木材庫存是流動的，舊板用掉，新板隨之進來。木材其後如何調整到最終含水率，見<a href=\"making.html\">一把吉他的誕生</a>。" } },
        { t:"table",
          caption:{
            en:"What different sources say about seasoning at K. Yairi",
            ja:"ヤイリの枯らしについて出どころごとに言われること",
            zh:"不同來源對 K.Yairi 木材陳放的說法" },
          cols:[
            { en:"Source", ja:"出どころ", zh:"來源" },
            { en:"Year", ja:"年", zh:"年份" },
            { en:"What it says", ja:"内容", zh:"說法" }
          ],
          rows:[
            [
              { en:"Company, “How a Yairi guitar is made”", ja:"会社「ギターができるまで」", zh:"公司〈吉他製作過程〉" },
              { en:"current", ja:"現行", zh:"現行" },
              { en:"Three to ten years of drying outdoors before use", ja:"使う前に屋外で三〜十年乾かす", zh:"使用前於室外乾燥三至十年" }
            ],
            [
              { en:"Shimamura Music, factory visit", ja:"島村楽器、メーカー探訪", zh:"島村樂器，工廠探訪" },
              "2013",
              {
                en:"Ten years or more of natural drying, then a short spell in a drying kiln",
                ja:"十年以上の天然乾燥のあと、乾燥室で短く乾かす",
                zh:"自然乾燥十年以上，再短暫進入乾燥室" }
            ],
            [
              { en:"Shimamura Music, Sendai factory-tour report", ja:"島村楽器仙台店、工場見学レポート", zh:"島村樂器仙台店，工廠參觀報告" },
              "2024",
              {
                en:"About ten years for fingerboards, three to five for tops, one to one and a half for necks",
                ja:"指板は約十年、表板は三〜五年、ネックは一年〜一年半",
                zh:"指板約十年，面板三至五年，琴頸一年至一年半" }
            ],
            [
              { en:"Alvarez, Yairi Honduran line", ja:"アルヴァレス、ヤイリのホンジュラスのライン", zh:"Alvarez，Yairi 宏都拉斯系列" },
              "2018",
              {
                en:"Mahogany bought in the 1970s, some forty years earlier",
                ja:"一九七〇年代、約四十年前に買われたマホガニー",
                zh:"1970 年代、約四十年前購入的桃花心木" }
            ]
          ] },
        { t:"h3", text:{ en:"The guarantee in practice", ja:"保証の実際", zh:"保固的實際運作" }, jp:"永久品質保証" },
        { t:"p",
          text:{
            en:"Yairi's lifetime guarantee covers the original owner and draws a line between the maker's fault and the owner's: defects in materials or workmanship that impair the instrument's basic function are repaired free, while wear, ageing and accidents are repaired for a charge (the terms are set out on <a href=\"guitarcare.html\">Caring for a Guitar</a>). Its real value lies in the fact that the people who built the guitar, and the wood stock it came from, are still in the same place. A crack or a lifting bridge on a forty-year-old Yairi can go back to the workshop that made it.",
            ja:"ヤイリの生涯保証は最初の持ち主を対象とし、つくり手の責任と持ち主の責任のあいだに線を引く。楽器の基本の働きを損なう材料や製作の欠陥は無料で直し、すり減り、経年、事故は有料で直す（条件は<a href=\"guitarcare.html\">ギターの手入れ</a>に記す）。その本当の価値は、ギターをつくった人々と、それが生まれた材のたくわえが、いまも同じ場所にあることにある。四十年前のヤイリの割れや浮いたブリッジも、それをつくった工房に戻ることができる。",
            zh:"Yairi 的終身保固以原始購買者為對象，並在製造者與持有者的責任之間劃線：損及樂器基本功能的材料或工藝缺陷免費修理，而磨耗、老化與意外則付費修理（條款見<a href=\"guitarcare.html\">吉他的保養</a>）。它真正的價值在於：製作這把吉他的人，以及它所出自的木材庫存，至今仍在同一個地方。一把四十年前的 Yairi 若出現裂縫或琴橋翹起，仍能回到製作它的工坊。" } },
        { t:"h3", text:{ en:"Kani and the factory today", ja:"いまの可児と工場", zh:"今日的可兒與工廠" }, jp:"下恵土" },
        { t:"p",
          text:{
            en:"The workshop stands in Shimo-Edo, on the southern side of the Kiso River in Kani, about ten minutes on foot from Nihon Line Imawatari Station on the Meitetsu line, roughly an hour from Nagoya; by car it is about fifteen minutes from the Kani-Mitake interchange. The river here is the “Nihon Line”, the gorge named after the Rhine by the geographer Shiga Shigetaka in 1913, and Imawatari was long a ferry crossing of the Nakasendō highway. During the war the workshop kept going by making wooden boxes, including ammunition boxes and boxes for ceramics from the nearby Mino pottery towns, before xylophones and then guitars took over.",
            ja:"工房は可児市の下恵土、木曽川の南側にあり、名鉄の日本ライン今渡駅から歩いて十分ほど、名古屋からおよそ一時間である。車なら可児御嵩インターから約十五分。このあたりの川は、一九一三年に地理学者の志賀重昂がライン川になぞらえて名づけた「日本ライン」で、今渡は長く中山道の渡し場だった。戦時中、工房は弾薬箱や、近くの美濃焼の町のための陶器の箱などの木箱をつくって続き、そのあと木琴、そしてギターに移った。",
            zh:"工坊位於可兒市下惠土、木曾川南岸，距名鐵日本 Line 今渡站步行約十分鐘，從名古屋約一小時；開車則距可兒御嵩交流道約十五分鐘。這一段河流就是「日本 Line」——地理學家志賀重昂於 1913 年以萊茵河為之命名的峽谷，而今渡長久以來是中山道的渡口。戰時工坊靠製作木箱維持，包括彈藥箱，以及供鄰近美濃燒陶瓷產地使用的陶器箱，其後才轉向木琴，再轉向吉他。" } },
        { t:"tiny",
          text:{
            en:"Sources: Nihon Meisho, interview at K. Yairi; K. Yairi, company outline and catalogue (2020); K. Yairi, “How a Yairi guitar is made”; Shimamura Music factory reports (2013, 2024); Factoris, K. Yairi factory-tour page (access, wartime products).",
            ja:"出典：日本名所、ヤイリギター訪問取材。ヤイリギター、会社概要とカタログ（二〇二〇年）。ヤイリギター「ギターができるまで」。島村楽器の工場の記事（二〇一三年、二〇二四年）。ファクトリス、ヤイリギター工場見学の頁（交通、戦時の製品）。",
            zh:"資料來源：Nihon Meisho，K.Yairi 訪問；K.Yairi 公司概要與型錄（2020）；K.Yairi〈吉他製作過程〉；島村樂器工廠報導（2013、2024）；Factoris，K.Yairi 工廠參觀頁面（交通、戰時產品）。" } }
      ] },
    { t:"related",
      items:[
        { href:"takamine.html", why:{ en:"The other Gifu guitar maker.", ja:"岐阜のもう一つのギターメーカー。", zh:"岐阜另一家吉他製造商。" } },
        { href:"tonewoods.html", why:{ en:"Seasoning and choosing tonewood.", ja:"トーンウッドの枯らしと選び方。", zh:"音木的陳放與挑選。" } },
        { href:"visiting.html", why:{ en:"Factory tours and other visits.", ja:"工場見学とほかの訪問。", zh:"工廠參觀與其他行程。" } },
        { href:"luthiers.html", why:{ en:"Other makers in Gifu.", ja:"岐阜のほかのつくり手。", zh:"岐阜的其他製琴師。" } }
      ] }
  ] };

/* ---- ------------------------------------------ luthiers */
GIFU.pages["luthiers"] = { kicker:{ en:"Sound · 08", ja:"音 · 08", zh:"聲音 · 08" },
  title:{ en:"Luthiers and Repairers", ja:"製作家と修理工房", zh:"製琴師與修理工坊" },
  jp:"岐阜の小さなギター工房",
  lede:{
    en:"Beyond its two famous factories, Gifu has a scattered community of individual guitar makers and repairers: a builder of carved archtop guitars in a riverside town in Gujō, custom electric-guitar workshops in Gifu city and Ōgaki, a guitar village in Yamagata where customers design their own instrument, and repair shops that keep old guitars playing across the prefecture. This page introduces the kinds of work they do, lists a sample of workshops, and explains what a good repairer can do for an instrument.",
    ja:"二つの名高い工場のほかに、岐阜には個人のギターの製作家と修理職人の散らばった共同体がある。郡上の川沿いの町で彫りのアーチトップギターをつくる人、岐阜市や大垣のエレキギターの注文の工房、客が自分の楽器を設計できる山県のギターの村、そして県じゅうで古いギターを弾けるように保つ修理の工房。この頁は、彼らの仕事の種類を紹介し、工房の一例を挙げ、良い修理職人が楽器に何をしてやれるかを説明する。",
    zh:"在兩家知名工廠之外，岐阜還有一群分散各地的個人吉他製作師與修理師：在郡上河畔小鎮製作雕刻拱面吉他的工匠、岐阜市與大垣的電吉他訂製工坊、讓顧客自己設計樂器的山縣「吉他村」，以及遍布全縣、讓老吉他繼續發聲的修理工坊。本頁介紹他們的工作類型，列出部分工坊，並說明好的修理師能為樂器做些什麼。" },
  body:[
    { t:"section",
      id:"sample",
      title:{ en:"A sample of workshops", ja:"工房の一例", zh:"工坊舉例" },
      jp:"県内の工房",
      body:[
        { t:"p",
          text:{
            en:"The table lists guitar workshops in Gifu that appear in a national directory of repair and building shops, together with a few others documented by their own websites. It shows the range of the trade; it is not an endorsement, and details change — contact workshops before visiting.",
            ja:"表は、全国の修理・製作の工房の案内に載る岐阜のギター工房と、自らのウェブサイトで確かめられるいくつかを挙げる。職の幅を示すもので、推薦ではなく、情報は変わる。訪ねる前に工房に連絡すること。",
            zh:"下表列出登錄於全國吉他修理與製作工坊名錄中的岐阜工坊，以及少數可由其官網確認者。用以呈現此行業的範圍；並非推薦，資訊亦可能變動——造訪前請先聯絡工坊。" } },
        { t:"table",
          caption:{ en:"Guitar makers and repairers in Gifu (sample)", ja:"岐阜のギターの製作・修理工房（一例）", zh:"岐阜吉他製作與修理工坊（舉例）" },
          cols:[{ en:"Workshop", ja:"工房", zh:"工坊" }, { en:"Town", ja:"市町", zh:"市町" }, { en:"Work", ja:"仕事", zh:"業務" }],
          rows:[
            [
              "K. Yairi (ヤイリギター)",
              { en:"Kani", ja:"可児市", zh:"可兒市" },
              { en:"Acoustic guitar manufacture; factory tours", ja:"アコースティックギター製造。工場見学", zh:"木吉他製造；工廠參觀" }
            ],
            [
              "Takamine (高峰楽器製作所)",
              { en:"Nakatsugawa", ja:"中津川市", zh:"中津川市" },
              { en:"Acoustic and electro-acoustic guitars", ja:"アコースティック、エレアコ", zh:"木吉他與電木吉他" }
            ],
            [
              "左波工房 / ROZEO Guitars",
              { en:"Gujō (Hachiman)", ja:"郡上市八幡町", zh:"郡上市八幡町" },
              {
                en:"Hand-carved archtop guitars by a single maker; also wooden fishing nets and handles",
                ja:"一人のつくり手による手彫りのアーチトップ。渓流の玉網や木の柄も",
                zh:"單人手工雕刻拱面吉他；亦製作溪釣抄網與木柄" }
            ],
            [
              "Kazu Guitar Village",
              { en:"Yamagata", ja:"山県市", zh:"山縣市" },
              { en:"Custom and semi-order guitars; classes; repair", ja:"注文とセミオーダーのギター、教室、修理", zh:"訂製與半訂製吉他；課程；修理" }
            ],
            [
              "Guitar & Bass Workshop Loveless",
              { en:"Gifu city", ja:"岐阜市", zh:"岐阜市" },
              { en:"Electric guitar and bass building", ja:"エレキギター・ベースの製作", zh:"電吉他與貝斯製作" }
            ],
            [
              "Rossi Guitars",
              { en:"Gifu city", ja:"岐阜市", zh:"岐阜市" },
              { en:"Acoustic and electric guitars; pickups", ja:"アコースティック、エレキ、ピックアップ", zh:"木吉他、電吉他；拾音器" }
            ],
            [
              "Mary Guitars",
              { en:"Ōgaki", ja:"大垣市", zh:"大垣市" },
              { en:"Electric guitar and bass; repair", ja:"エレキギター・ベース、修理", zh:"電吉他與貝斯；修理" }
            ],
            [
              "Leaf Instruments",
              { en:"Minokamo", ja:"美濃加茂市", zh:"美濃加茂市" },
              { en:"Instrument workshop", ja:"楽器の工房", zh:"樂器工坊" }
            ],
            [
              "WoodyBlues",
              { en:"Mino", ja:"美濃市", zh:"美濃市" },
              { en:"Acoustic guitar repair", ja:"アコースティックギターの修理", zh:"木吉他修理" }
            ],
            [
              "9notes",
              { en:"Ena", ja:"恵那市", zh:"惠那市" },
              {
                en:"Acoustic, electric, classical and ukulele repair",
                ja:"アコースティック、エレキ、クラシック、ウクレレの修理",
                zh:"木吉他、電吉他、古典吉他與烏克麗麗修理" }
            ],
            [
              "Resonance Guitars",
              { en:"Anpachi", ja:"安八町", zh:"安八町" },
              { en:"Acoustic and electric repair", ja:"アコースティック・エレキの修理", zh:"木吉他與電吉他修理" }
            ],
            [
              "Good Strings",
              { en:"Gifu city", ja:"岐阜市", zh:"岐阜市" },
              { en:"Acoustic and electric repair", ja:"アコースティック・エレキの修理", zh:"木吉他與電吉他修理" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: a national directory of guitar repair and building workshops (Gifu listings); workshops' own websites.",
            ja:"出典：全国のギターの修理・製作工房の案内（岐阜の項）、各工房のウェブサイト。",
            zh:"資料來源：全國吉他修理與製作工坊名錄（岐阜頁面）；各工坊官網。" } }
      ] },
    { t:"section",
      id:"archtop",
      title:{ en:"An archtop maker by a clear river", ja:"清流のアーチトップ", zh:"清流畔的拱面吉他" },
      jp:"郡上八幡",
      body:[
        { t:"p",
          text:{
            en:"Archtop guitars — the carved, arched-top instruments of jazz — are among the most demanding to build, because the top and back are carved from thick wedges like a violin's rather than bent or braced flat. In Gujō Hachiman, a town known for its clear rivers and water channels, a single maker designs, cuts, carves, assembles and finishes archtops entirely by hand, alongside the wooden landing nets used by stream anglers fishing for ayu and amago — two crafts that share a feel for light, strong, beautifully grained wood.",
            ja:"アーチトップギター——ジャズの、彫ってふくらませた表板の楽器——は、つくるのが最も難しいものの一つである。表板と裏板を曲げたり平らに力木を貼ったりするのではなく、バイオリンのように厚いくさびから彫り出すからである。清らかな川と水路で知られる郡上八幡で、一人のつくり手がアーチトップを設計し、木取りし、彫り、組み、仕上げるまですべて手で行い、そのかたわらでアユやアマゴを釣る渓流の釣り人が使う木の玉網もつくる。軽く、強く、木目の美しい木への感覚を分けあう二つの技である。",
            zh:"拱面吉他——爵士樂中面板雕刻拱起的樂器——是製作難度最高的吉他之一，因為面板與背板像小提琴一樣從厚楔形木料雕出，而非彎曲或平貼音梁。在以清澈河川與水道聞名的郡上八幡，一位工匠全手工包辦拱面吉他的設計、裁切、雕刻、組裝與塗裝，同時也製作溪釣香魚與甘子的釣客所用的木製抄網——兩門工藝同樣講究輕、強與紋理之美。" } }
      ] },
    { t:"section",
      id:"repairs",
      title:{ en:"What a repairer does", ja:"修理職人の仕事", zh:"修理師的工作" },
      jp:"リペア",
      body:[
        { t:"p",
          text:{
            en:"A guitar is a light wooden box holding back a heavy load. The six strings of a steel-string acoustic in light gauge pull with a combined force of roughly 70–80 kg, day and night, on a top only 2.5–3 mm thick, and the wood swells and shrinks with every change in humidity. Almost everything a repairer does follows from those two facts. Most instruments arrive not after an accident but because they have become hard to play, buzz, or no longer play in tune higher up the neck. A smaller share need structural work — cracks, loose braces, a lifting bridge, a neck that has rolled forward — and it is this work that separates an experienced repairer from a shop technician with a set of screwdrivers.",
            ja:"ギターは、重い荷を支える軽い木の箱である。ライトゲージのスチール弦のアコースティックでは、六本の弦があわせて約70〜80kgの力で、昼も夜も、厚さわずか2.5〜3mmの表板を引く。しかも木は湿度が変わるたびにふくらみ、縮む。修理職人の仕事のほとんどは、この二つの事実から生まれる。持ちこまれる楽器の多くは事故のあとではなく、弾きにくくなった、音がびびる、ハイポジションで音程が合わない、といった理由で来る。構造の修理——割れ、力木のはがれ、浮いてきたブリッジ、前に倒れてきたネック——を要するものは少ないが、経験のある修理職人と、ドライバーを数本もつだけの店の係とを分けるのは、まさにこの仕事である。",
            zh:"吉他是一個撐住沉重負荷的輕巧木箱。一把使用輕規格鋼弦的木吉他，六條弦合計以約 70～80 公斤的拉力，日夜拉扯著厚度僅 2.5～3 公釐的面板；木材又會隨濕度每一次變化而膨脹、收縮。修理師所做的幾乎一切，都源自這兩個事實。送修的樂器大多不是出了意外，而是變得難彈、發出雜音，或在高把位音準不準。需要結構性修理的——開裂、音梁脫膠、琴橋翹起、琴頸前傾——比例較小，但正是這類工作，區分了經驗豐富的修理師與只拿幾支螺絲起子的店員。" } },
        { t:"defs",
          items:[
            { term:{ en:"Setup", ja:"調整（セットアップ）", zh:"調校" },
              jp:"弦高・オクターブ",
              def:{
                en:"The basic service: adjusting the truss rod, lowering or raising the saddle to set the action (string height), cutting the nut slots to the right depth, and checking intonation. Commonly quoted starting points for a steel-string acoustic are about 2.0–2.5 mm at the 12th fret on the bass side and 1.5–2.0 mm on the treble side, but players and makers differ. A setup usually takes an hour or two at the bench and is the job most often done.",
                ja:"基本の手入れ。トラスロッドを調整し、サドルを削るか上げて弦高を決め、ナットの溝を適切な深さに切り、オクターブ（音程）を確かめる。スチール弦のアコースティックでよく挙げられる目安は、12フレットで低音側約2.0〜2.5mm、高音側約1.5〜2.0mmだが、弾き手とつくり手によって好みは違う。作業台の上ではふつう一、二時間で、最も多い仕事である。",
                zh:"最基本的保養：調整琴頸調整桿、磨低或墊高下弦枕以設定弦高、將上弦枕的弦槽切到適當深度，並檢查音準。鋼弦木吉他常被引用的起點，是第 12 格低音側約 2.0～2.5 公釐、高音側約 1.5～2.0 公釐，但演奏者與製琴師各有偏好。一次調校通常在工作台上花一、兩小時，是最常見的工作。" } },
            { term:{ en:"Truss rod and relief", ja:"トラスロッドと反り", zh:"調整桿與琴頸弧度" },
              jp:"順反り",
              def:{
                en:"A slight forward bow in the neck — the relief, typically a few tenths of a millimetre at mid-neck — lets the strings vibrate without buzzing. Turning the truss-rod nut adjusts it, and in a climate of humid summers and dry winters many guitars want a small turn each season. A rod that has run out of travel, a stripped nut, or a neck that has twisted is a much bigger job.",
                ja:"ネックのわずかな前への反り——順反りと呼び、ふつうネックの中ほどで十分の数ミリ——があると、弦がびびらずに振れる。トラスロッドのナットを回して調整し、湿った夏と乾いた冬のある気候では、多くのギターが季節ごとに少し回すことを求める。ロッドが締めきり、ナットがなめ、あるいはネックがねじれた場合は、はるかに大きな仕事になる。",
                zh:"琴頸稍微向前彎——稱為弧度（前弓），通常在琴頸中段約零點幾公釐——能讓琴弦振動而不打弦。轉動調整桿螺帽即可調整；在夏季潮濕、冬季乾燥的氣候中，許多吉他每一季都需要轉一點。若調整桿已轉到底、螺帽滑牙，或琴頸扭曲，就成了大得多的工程。" } },
            { term:{ en:"Frets", ja:"フレット", zh:"琴格" },
              jp:"すり合わせ・リフレット",
              def:{
                en:"Steel strings wear grooves into the frets under the most-played chords. Levelling (filing all the frets to one plane), recrowning and polishing restores clean notes; when the frets are too low to level again they are pulled and replaced. A refret on a bound or lacquered fingerboard is slow work, because the edges and finish must be protected and every new fret seated tight.",
                ja:"スチール弦は、よく弾くコードの下のフレットに溝を刻む。すり合わせ（全フレットを一つの面にやすりで揃える）、頂を丸め直し、磨くことで、澄んだ音が戻る。もう削れないほどフレットが低くなれば、抜いて打ち替える。バインディングのある、あるいは塗装された指板のリフレットは、縁と塗膜を守り、新しいフレットの一本一本をしっかり座らせねばならないため、時間のかかる仕事である。",
                zh:"鋼弦會在最常彈奏的和弦下方把琴格磨出凹痕。整平（把所有琴格銼到同一平面）、重新修圓並拋光，就能恢復乾淨的音色；若琴格已低到無法再整平，就要拔除更換。在有包邊或上過漆的指板上重換琴格是慢工，因為得保護邊緣與漆面，並讓每一根新琴格都緊密就位。" } },
            { term:{ en:"Nut and saddle", ja:"ナットとサドル", zh:"上弦枕與下弦枕" },
              jp:"骨・調整",
              def:{
                en:"The small white pieces at each end of the strings' speaking length — traditionally bone, now also plastics and synthetic materials — are replaced to correct string spacing, height or intonation, or in the hope of better tone and sustain. A compensated saddle, shaped so that each string's length differs slightly, improves tuning higher up the neck.",
                ja:"弦の鳴る長さの両端にある小さな白い部品——伝統的には牛骨、いまは樹脂や合成の材料も——は、弦の間隔や高さ、オクターブを直すため、あるいは音色と伸びをよくしようとして替えられる。弦ごとに長さを少しずつ変えるよう削った補正サドルは、ハイポジションの音程を改善する。",
                zh:"位於琴弦有效振動長度兩端的白色小零件——傳統上用牛骨，現今也有塑膠與合成材料——更換它們是為了修正弦距、弦高或音準，或希望改善音色與延音。經補償設計、讓每條弦長度略有不同的下弦枕，能改善高把位的音準。" } },
            { term:{ en:"Bridge re-gluing", ja:"ブリッジの再接着", zh:"琴橋重新膠合" },
              jp:"ブリッジ浮き",
              def:{
                en:"The strings try to rotate the bridge forward, and with heat, dryness or ageing glue it can begin to lift at its back edge. The repairer removes it with heat and a thin palette knife, cleans both surfaces back to bare wood, re-glues it under clamps — often with hot hide glue — and leaves it to cure for at least a day before restringing.",
                ja:"弦はブリッジを前へ回そうとし、熱や乾燥、古くなった接着剤によって、後ろの縁から浮きはじめることがある。修理職人は熱と薄いへらでブリッジを外し、両方の面を素地まで清め、多くは温めた膠でクランプをかけて貼り直し、弦を張る前に少なくとも一日は固まるのを待つ。",
                zh:"琴弦會把琴橋往前扳，遇到高溫、乾燥或老化的膠，琴橋可能從後緣開始翹起。修理師以加熱與薄刮刀將它取下，把兩個接觸面清理到露出木材，再用夾具重新膠合——常用熱動物膠——並在重新上弦前至少靜置一天讓膠固化。" } },
            { term:{ en:"Cracks and braces", ja:"割れと力木", zh:"開裂與音梁" },
              jp:"乾燥割れ",
              def:{
                en:"Most cracks in tops and backs are caused by dryness: the wood shrinks across the grain and has nowhere to go. The guitar is first rehydrated so the crack can close; it is then glued, often with small diamond-shaped cleats of spruce glued across it inside the body. A loose brace is re-glued through the soundhole with long-reach clamps, working by mirror and lamp.",
                ja:"表板や裏板の割れの多くは乾燥による。木は繊維と直角の方向に縮み、逃げ場がない。まずギターに湿りを戻して割れが閉じるようにし、それから接着する。胴の内側で割れをまたぐように、小さな菱形のスプルースの当て木（クリート）を貼ることが多い。はがれた力木は、鏡と明かりを頼りに、サウンドホールから長いクランプを入れて貼り直す。",
                zh:"面板與背板的裂縫多半因乾燥而起：木材沿橫紋方向收縮卻無處可退。修理時先讓吉他回濕、使裂縫閉合，再加以膠合，常在琴身內側橫跨裂縫貼上菱形的小雲杉補強片。脫膠的音梁則靠鏡子與燈光，從音孔伸入長柄夾具重新膠合。" } },
            { term:{ en:"Neck reset", ja:"ネックリセット", zh:"琴頸重置" },
              jp:"仕込み角",
              def:{
                en:"Over decades the top bulges behind the bridge and the neck angle closes, so the action rises until even a lowered saddle cannot bring it down. The cure is to remove the neck, re-cut the joint to a new angle and re-glue or re-bolt it — the largest routine repair on a steel-string guitar, described step by step below.",
                ja:"数十年のうちに、ブリッジの後ろで表板がふくらみ、ネックの角度が閉じていき、サドルを下げても追いつかないほど弦高が上がる。治すには、ネックを外し、接合部を新しい角度に削り直して、接着またはボルトで付け直す。スチール弦ギターで日常的に行われる修理のうち最も大きなもので、手順は下で述べる。",
                zh:"數十年下來，面板會在琴橋後方隆起、琴頸角度逐漸閉合，弦高升高到連磨低下弦枕都壓不下來。解方是拆下琴頸、把接合處重新切出新角度，再膠合或以螺栓裝回——這是鋼弦吉他例行修理中規模最大的一項，步驟詳見下文。" } },
            { term:{ en:"Finish touch-up", ja:"塗装の補修", zh:"塗裝補修" },
              jp:"タッチアップ",
              def:{
                en:"Chips and scratches can be filled with drops of lacquer and levelled so that they almost disappear. Complete refinishing is seldom advised on a valuable instrument: it changes the look, can alter the sound if the new coat is thicker, and reduces value in the eyes of collectors.",
                ja:"欠けや傷は、ラッカーを一滴ずつ落として埋め、平らに均せば、ほとんど見えなくなる。価値のある楽器を全面的に塗り直すことは、あまり勧められない。見た目が変わり、新しい塗膜が厚ければ音も変わりうるうえ、収集家の目には値打ちが下がるからである。",
                zh:"碰傷與刮痕可以一滴滴點上漆填補、再磨平，幾乎看不出痕跡。對有價值的樂器，通常不建議整體重新塗裝：外觀會改變，新漆層若較厚也可能影響聲音，而且在收藏家眼中會降低價值。" } },
            { term:{ en:"Pickup installation", ja:"ピックアップの取り付け", zh:"安裝拾音器" },
              jp:"エレアコ化",
              def:{
                en:"Fitting an under-saddle piezo pickup means drilling through the saddle slot and the end block, installing an output jack and often a preamp, and re-cutting the saddle to allow for the pickup's thickness. The electro-acoustic designs developed at <a href=\"takamine.html\">Takamine</a> in Nakatsugawa helped make this one of the commonest requests.",
                ja:"アンダーサドルのピエゾ・ピックアップを付けるには、サドル溝とエンドブロックに穴をあけ、出力ジャックと多くはプリアンプを取り付け、ピックアップの厚みの分だけサドルを削り直す。中津川の<a href=\"takamine.html\">タカミネ</a>が育てたエレアコの設計が、これを最もよくある依頼の一つにした。",
                zh:"安裝下弦枕壓電拾音器，需要在弦枕槽與尾塊鑽孔、裝上輸出插孔（常還有前級），並依拾音器厚度把下弦枕重新磨低。中津川 <a href=\"takamine.html\">Takamine</a> 發展出的電木吉他設計，讓這成為最常見的委託之一。" } }
          ] },
        { t:"figure",
          caption:{
            en:"Common guitar repairs compared — a qualitative, schematic summary of typical workshop practice, not measured data. More dots mean more often, more skill, more risk or more time.",
            ja:"よくあるギター修理の比較。工房の一般的なやり方を質的・模式的にまとめたもので、計測データではない。点が多いほど、頻度・技量・危険・時間が大きい。",
            zh:"常見吉他修理比較——依工坊一般做法所作的質性、示意性整理，並非實測數據。點愈多，代表頻率、所需技術、風險或時間愈高。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"Guitar repairs at a glance", ja:"ギター修理の見取り図", zh:"吉他修理一覽" }, labelW:250,
            cols:[ { en:"How often", ja:"頻度", zh:"頻率" }, { en:"Skill", ja:"技量", zh:"技術" }, { en:"Risk", ja:"危険", zh:"風險" }, { en:"Time in shop", ja:"預かり期間", zh:"留店時間" } ],
            rows:[
              { n:{ en:"Setup", ja:"調整", zh:"調校" }, v:[3,1,0,1] },
              { n:{ en:"Truss-rod adjustment", ja:"トラスロッド調整", zh:"調整桿調整" }, v:[3,1,1,1] },
              { n:{ en:"Nut or saddle", ja:"ナット・サドル", zh:"上／下弦枕" }, v:[2,2,0,1] },
              { n:{ en:"Fret levelling", ja:"フレットすり合わせ", zh:"琴格整平" }, v:[2,2,1,2] },
              { n:{ en:"Pickup installation", ja:"ピックアップ取り付け", zh:"安裝拾音器" }, v:[1,2,1,1] },
              { n:{ en:"Crack or brace repair", ja:"割れ・力木の修理", zh:"開裂、音梁修理" }, v:[2,2,1,2] },
              { n:{ en:"Bridge re-gluing", ja:"ブリッジ再接着", zh:"琴橋重新膠合" }, v:[1,2,2,2] },
              { n:{ en:"Finish touch-up", ja:"塗装補修", zh:"塗裝補修" }, v:[1,2,1,2] },
              { n:{ en:"Refret", ja:"リフレット", zh:"重換琴格" }, v:[1,3,2,2] },
              { n:{ en:"Neck reset", ja:"ネックリセット", zh:"琴頸重置" }, v:[1,3,3,3] }
            ],
            note:{ en:"Schematic. Based on general repair practice; individual guitars and workshops vary widely.", ja:"模式図。一般的な修理の実際にもとづく。ギターと工房によって大きく異なる。", zh:"示意圖。依一般修理實務整理；個別吉他與工坊差異甚大。" } }); } }
      ] },
    { t:"section",
      id:"neckreset",
      title:{ en:"A neck reset, step by step", ja:"ネックリセットの手順", zh:"琴頸重置的步驟" },
      jp:"仕込み角を戻す",
      body:[
        { t:"p",
          text:{
            en:"The simplest test needs only a straightedge. Laid on the frets and extended over the body, it should just touch the top of the bridge on a healthy steel-string guitar; if it passes well below, the neck angle has closed and no amount of saddle-shaving will give comfortable action without leaving the saddle too low to drive the top. On guitars with a glued dovetail — still the traditional joint on many fine acoustics — the reset is one of the most delicate operations in the trade, because the joint must be released without cracking the finish, the heel or the top.",
            ja:"いちばん簡単な確かめ方には定規一本あればよい。フレットの上に置いて胴の上まで伸ばすと、健全なスチール弦ギターでは、ちょうどブリッジの上面に触れるはずである。はるか下を通るなら、ネックの角度が閉じており、サドルをいくら削っても、表板を十分に鳴らせないほどサドルを低くしないかぎり、弾きやすい弦高は得られない。多くの上等なアコースティックでいまも伝統の接合である接着のダブテイルでは、塗膜もヒールも表板も割らずに接合を外さねばならないため、リセットはこの職で最も繊細な作業の一つになる。",
            zh:"最簡單的檢查只需要一把直尺。把直尺放在琴格上並延伸到琴身上方，健康的鋼弦吉他應該剛好碰到琴橋頂面；若直尺明顯從下方通過，表示琴頸角度已經閉合，無論怎麼磨下弦枕，都只能在弦枕低到無法有效推動面板的情況下才換得舒適的弦高。對仍採用傳統膠合燕尾榫的許多高級木吉他而言，重置是這一行最精細的作業之一，因為必須在不弄裂漆面、琴跟與面板的前提下拆開接頭。" } },
        { t:"steps",
          items:[
            { title:{ en:"Measure", ja:"測る", zh:"測量" },
              jp:"診断",
              meta:{ en:"straightedge, gauges", ja:"定規・ゲージ", zh:"直尺、量規" },
              text:{
                en:"Record the action, relief, saddle height and the straightedge's height at the bridge to calculate how much the angle must change.",
                ja:"弦高、反り、サドルの高さ、ブリッジの位置での定規の高さを記録し、角度をどれだけ変えるべきかを算出する。",
                zh:"記錄弦高、琴頸弧度、下弦枕高度，以及直尺在琴橋處的高度，據以計算角度需改變多少。" } },
            { title:{ en:"Release the fingerboard", ja:"指板を外す", zh:"分離指板" },
              jp:"加熱",
              meta:{ en:"heat, thin knives", ja:"熱・薄刃", zh:"加熱、薄刀" },
              text:{
                en:"The part of the fingerboard glued to the top is warmed and eased free with thin blades so it will lift with the neck.",
                ja:"表板に接着された指板の部分を温め、薄い刃でそっとはがして、ネックと一緒に持ち上がるようにする。",
                zh:"將黏在面板上的那段指板加熱，以薄刃慢慢分離，讓它能隨琴頸一同抬起。" } },
            { title:{ en:"Remove the neck", ja:"ネックを抜く", zh:"卸下琴頸" },
              jp:"蒸気",
              meta:{ en:"steam or bolts", ja:"蒸気かボルト", zh:"蒸氣或螺栓" },
              text:{
                en:"A dovetail is loosened by steam injected through a small hole under a fret; a bolt-on neck simply comes off when its bolts are removed.",
                ja:"ダブテイルは、フレットの下にあけた小さな穴から蒸気を送りこんでゆるめる。ボルトオンのネックはボルトを抜けばそのまま外れる。",
                zh:"燕尾榫接頭是從某根琴格下方鑽小孔、注入蒸氣使其鬆脫；螺栓式琴頸只要卸下螺栓即可取下。" } },
            { title:{ en:"Re-cut the heel", ja:"ヒールを削り直す", zh:"修整琴跟" },
              jp:"角度",
              meta:{ en:"chisel, sanding", ja:"のみ・研磨", zh:"鑿子、砂磨" },
              text:{
                en:"A thin wedge of wood is taken from the heel's contact faces — often well under a millimetre at one edge — so that the neck tilts back to the new angle.",
                ja:"ヒールの接触面から薄いくさび形に木を取る。片側でしばしば一ミリにも満たない量で、ネックは新しい角度へと後ろに傾く。",
                zh:"從琴跟的接觸面削去一片薄楔形木料——一側往往遠不到一公釐——讓琴頸向後傾到新的角度。" } },
            { title:{ en:"Refit and align", ja:"合わせと芯出し", zh:"試裝與對中" },
              jp:"シム",
              meta:{ en:"shims, centre line", ja:"シム・中心線", zh:"墊片、中心線" },
              text:{
                en:"The dovetail is shimmed for a tight fit and the neck checked against the body's centre line, so the strings run true over the bridge.",
                ja:"ダブテイルに薄板（シム）を貼ってきつく合わせ、胴の中心線に対してネックを確かめ、弦がブリッジの上をまっすぐ通るようにする。",
                zh:"在燕尾榫處加墊片使其緊密，並對照琴身中心線檢查琴頸，讓琴弦筆直地通過琴橋。" } },
            { title:{ en:"Glue, set up, touch up", ja:"接着・調整・補修", zh:"膠合、調校、補漆" },
              jp:"仕上げ",
              meta:{ en:"clamps, lacquer", ja:"クランプ・ラッカー", zh:"夾具、漆" },
              text:{
                en:"The neck is glued or bolted home, the finish around the heel repaired, and the guitar given a full setup once the glue has cured.",
                ja:"ネックを接着かボルトで元の位置に納め、ヒールまわりの塗装を補修し、接着剤が固まったらギター全体を調整する。",
                zh:"將琴頸膠合或以螺栓裝回定位，修補琴跟周圍的漆面，待膠固化後再進行完整調校。" } }
          ] }
      ] },
    { t:"section",
      id:"time",
      title:{ en:"How long, and why", ja:"時間がかかるわけ", zh:"為何需要時間" },
      jp:"預かり期間",
      body:[
        { t:"p",
          text:{
            en:"Owners are often surprised that a repair which takes a few hours of work keeps the guitar away for a week or more. The reasons are mostly in the materials. Glue needs time to cure under clamps, and hide glue in particular is left overnight at least. A cracked guitar that arrives from a heated room may have to sit in a humidified space for days before the crack closes enough to glue. Lacquer applied in a touch-up must harden before it can be levelled and polished, which with nitrocellulose can take weeks. After any structural work the instrument is left strung up to settle before the final adjustment. Add a queue of other instruments and the occasional wait for parts, and it becomes clear why a good repairer rarely promises same-day work beyond a setup.",
            ja:"数時間の作業で済む修理なのに、ギターが一週間以上も戻らないことに、持ち主はよく驚く。理由の多くは材料にある。接着剤はクランプをかけたまま固まる時間を要し、とりわけ膠は少なくとも一晩置く。暖房の効いた部屋から来た割れのギターは、割れが接着できるほど閉じるまで、加湿した場所で何日も置かねばならないことがある。補修で吹いたラッカーは、均して磨く前に硬くならねばならず、ニトロセルロースでは数週間かかることもある。構造の修理のあとは、弦を張ったまま落ち着かせてから最後の調整をする。そこにほかの楽器の順番待ちと、ときおりの部品待ちが加わる。良い修理職人が、調整以外の仕事を即日で請け合うことがめったにないのはそのためである。",
            zh:"一項只需幾小時工時的修理，吉他卻要離開主人一週以上，常讓人意外。原因多半出在材料。膠需要在夾具下固化，尤其是動物膠，至少得放一夜。從暖氣房送來的開裂吉他，可能得先在加濕空間裡放上好幾天，讓裂縫閉合到可以膠合的程度。補漆時噴上的漆必須硬化後才能磨平拋光，硝基漆可能要花上數週。任何結構性修理之後，還要上弦靜置、讓樂器穩定，再做最後調整。再加上其他樂器的排隊與偶爾的等零件，就不難理解為何好的修理師除了調校之外，很少答應當天完成。" } },
        { t:"table",
          caption:{
            en:"Indicative time for common repairs (schematic; every workshop differs)",
            ja:"よくある修理にかかる時間の目安（模式的。工房ごとに異なる）",
            zh:"常見修理所需時間參考（示意；各工坊不同）" },
          cols:[
            { en:"Job", ja:"作業", zh:"項目" },
            { en:"Bench work", ja:"作業時間", zh:"實際工時" },
            { en:"Guitar away", ja:"預かり", zh:"留店期間" },
            { en:"What sets the pace", ja:"時間を決めるもの", zh:"決定速度的因素" }
          ],
          rows:[
            [
              { en:"Setup", ja:"調整", zh:"調校" },
              { en:"An hour or two", ja:"一、二時間", zh:"一、兩小時" },
              { en:"Same day to a few days", ja:"即日〜数日", zh:"當天至數天" },
              { en:"The queue", ja:"順番待ち", zh:"排隊" }
            ],
            [
              { en:"Fret levelling", ja:"フレットすり合わせ", zh:"琴格整平" },
              { en:"Several hours", ja:"数時間", zh:"數小時" },
              { en:"A few days", ja:"数日", zh:"數天" },
              { en:"Careful filing and polishing", ja:"丁寧なやすりがけと研磨", zh:"細心銼磨與拋光" }
            ],
            [
              { en:"Refret", ja:"リフレット", zh:"重換琴格" },
              { en:"One to two days", ja:"一〜二日", zh:"一至兩天" },
              { en:"One to two weeks", ja:"一〜二週間", zh:"一至兩週" },
              { en:"Fingerboard repair, seating, re-levelling", ja:"指板の補修、打ちこみ、再すり合わせ", zh:"指板修補、琴格就位、再整平" }
            ],
            [
              { en:"Bridge re-gluing", ja:"ブリッジ再接着", zh:"琴橋重新膠合" },
              { en:"A few hours", ja:"数時間", zh:"數小時" },
              { en:"Several days", ja:"数日", zh:"數天" },
              { en:"Glue cure under clamps", ja:"クランプ下での接着剤の硬化", zh:"膠在夾具下固化" }
            ],
            [
              { en:"Crack or brace repair", ja:"割れ・力木", zh:"開裂、音梁" },
              { en:"A few hours", ja:"数時間", zh:"數小時" },
              { en:"One to three weeks", ja:"一〜三週間", zh:"一至三週" },
              { en:"Rehydration first; cleats; touch-up", ja:"まず加湿、当て木、補修塗装", zh:"先回濕；補強片；補漆" }
            ],
            [
              { en:"Neck reset", ja:"ネックリセット", zh:"琴頸重置" },
              { en:"One to three days", ja:"一〜三日", zh:"一至三天" },
              { en:"Two weeks or more", ja:"二週間以上", zh:"兩週以上" },
              { en:"Glue cure, heel finish, settling", ja:"接着の硬化、ヒールの塗装、落ち着かせ", zh:"膠固化、琴跟補漆、靜置穩定" }
            ],
            [
              { en:"Finish touch-up", ja:"塗装補修", zh:"塗裝補修" },
              { en:"Hours, in stages", ja:"段階を分けて数時間", zh:"分階段數小時" },
              { en:"One to several weeks", ja:"一〜数週間", zh:"一至數週" },
              { en:"Lacquer hardening", ja:"ラッカーの硬化", zh:"漆的硬化" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: general repair practice as described in luthiers' manuals and workshop guides; times are indicative only.",
            ja:"出典：製作・修理の手引書と工房の案内に述べられる一般的な修理の実際。時間は目安にすぎない。",
            zh:"資料來源：製琴與修理手冊及工坊說明中所述的一般修理實務；時間僅供參考。" } }
      ] },
    { t:"section",
      id:"learning",
      title:{ en:"How makers learn", ja:"つくり手はどう学ぶか", zh:"製琴師如何養成" },
      jp:"修業と学校",
      body:[
        { t:"p",
          text:{
            en:"There is no licence or examination for guitar makers or repairers in Japan, and people come into the trade by several routes. The most common is the factory. The large makers of Nagano, Aichi, Shizuoka and Gifu have trained generations of workers in the separate stages of production — wood preparation, bodies, necks, finishing, final adjustment — and many independent builders and repairers spent years on a production line before setting up on their own, bringing with them a feel for tolerances and a network of suppliers. A second route is a specialist school. The ESP Guitar Craft Academy, founded in 1983 with schools in Tokyo and Osaka, runs a two-year course in design, woodworking, finishing, assembly and adjustment, with repair taught from the first year; students complete ten or more electric guitars, up to fourteen, before they graduate. Several music colleges in Tokyo and Osaka offer similar guitar-craft and repair courses, and their graduates staff shops, factories and touring crews as well as their own workshops.",
            ja:"日本には、ギターの製作家や修理職人のための免許も試験もなく、人はいくつもの道からこの仕事に入る。最も多いのは工場である。長野、愛知、静岡、岐阜の大きなメーカーは、生産の工程ごと——木取り、胴、ネック、塗装、最終調整——に何世代もの働き手を育ててきた。独立した製作家や修理職人の多くは、何年も生産の現場にいてから自分の工房を開き、寸法の精度の感覚と、材料や部品の仕入れ先のつながりを持ちだす。第二の道は専門の学校である。一九八三年に創立し、東京と大阪に校舎をもつESPギタークラフト・アカデミーは、設計、木工、塗装、組み立て、調整を学ぶ二年の課程を設け、一年目から修理も教える。生徒は卒業までに十本以上、多ければ十四本のエレキギターを仕上げる。東京と大阪のいくつかの音楽専門学校も同様のギタークラフトとリペアの課程をもち、卒業生は自分の工房だけでなく、楽器店、工場、ツアーの技術スタッフとしても働く。",
            zh:"日本並沒有吉他製作師或修理師的執照或考試，人們經由多種途徑入行。最常見的是工廠。長野、愛知、靜岡與岐阜的大型製造商，依生產的各個階段——備料、琴身、琴頸、塗裝、最終調整——培養了一代又一代的工人；許多獨立製琴師與修理師都在產線上待了多年才自立門戶，帶走對公差的手感與一張進貨網絡。第二條路是專門學校。1983 年創立、在東京與大阪設校的 ESP 吉他工藝學院，開設兩年制課程，教授設計、木工、塗裝、組裝與調整，第一年起就教修理；學生畢業前要完成十把以上、最多十四把電吉他。東京與大阪另有幾所音樂專門學校開設類似的吉他工藝與維修課程，畢業生除了開自己的工坊，也任職於樂器行、工廠與巡演技術團隊。" } },
        { t:"p",
          text:{
            en:"A third route is apprenticeship to an individual master, which remains the usual way into classical-guitar making, where a workshop's style of bracing, varnish and sound is handed down by working side by side for years. Some makers have also trained abroad: the Kani maker Yairi Kazuo went to the United States in 1962 to study guitar making, and the Tokyo classical maker Kohno Masaru spent six months in Spain in 1960 (see below). For general woodworking — tools, joinery, finishing, running a small business — Gifu has two public schools, in Takayama and Mino, described on the <a href=\"houses.html\">makers</a> page; several of their graduates work with musical instruments.",
            ja:"第三の道は一人の親方への弟子入りで、クラシックギターの製作ではいまもこれがふつうの入り口である。工房ごとの力木の配置、塗り、音の流儀は、何年も並んで働くことで受け継がれる。海外で学んだつくり手もいる。可児の矢入一男は一九六二年にギターづくりを学ぶためアメリカへ渡り、東京のクラシックギター製作家、河野賢は一九六〇年にスペインで半年を過ごした（下記）。道具、仕口、塗装、小さな事業の営みといった木工一般は、岐阜では高山と美濃の二つの公立の学校で学べる。<a href=\"houses.html\">つくり手</a>の頁に述べたとおりで、その卒業生のなかには楽器にかかわる人もいる。",
            zh:"第三條路是拜單一師傅為師，這至今仍是進入古典吉他製作的常見方式：一間工坊的音梁配置、塗裝與音色風格，靠著多年並肩工作傳承下去。也有製琴師赴海外學藝：可兒的矢入一男於 1962 年赴美學習吉他製作，東京的古典吉他製作家河野賢則於 1960 年在西班牙待了半年（見下文）。至於一般木工——工具、榫接、塗裝、經營小事業——岐阜在高山與美濃設有兩所公立學校，詳見<a href=\"houses.html\">工匠</a>頁；其畢業生中也有人投身樂器。" } },
        { t:"steps",
          items:[
            { title:{ en:"Player and tinkerer", ja:"弾き手、いじり手", zh:"演奏者與玩家" },
              jp:"入口",
              meta:{ en:"teens", ja:"十代", zh:"青少年" },
              text:{
                en:"Most makers start by playing and by adjusting, modifying or rebuilding their own guitars.",
                ja:"多くのつくり手は、弾くこと、そして自分のギターを調整し、改造し、組み直すことから始める。",
                zh:"多數製琴師從彈琴，以及調整、改裝、重組自己的吉他開始。" } },
            { title:{ en:"School or factory", ja:"学校か工場", zh:"學校或工廠" },
              jp:"基礎",
              meta:{ en:"two years or more", ja:"二年以上", zh:"兩年以上" },
              text:{
                en:"A specialist course, a production line, or both, teaches accuracy, speed and the sequence of work.",
                ja:"専門の課程か生産の現場、あるいはその両方が、正確さと速さと仕事の順序を教える。",
                zh:"專門課程、產線，或兩者兼具，教會精確、速度與工作順序。" } },
            { title:{ en:"The repair bench", ja:"修理の台", zh:"修理台" },
              jp:"経験",
              meta:{ en:"years", ja:"数年", zh:"數年" },
              text:{
                en:"Repairs show how guitars age and fail — the best education in how to build one that lasts.",
                ja:"修理は、ギターがどう年をとり、どう壊れるかを見せる。長もちする一本をつくるための最良の教育である。",
                zh:"修理讓人看見吉他如何老化、如何損壞——這是學習打造耐用吉他的最佳教材。" } },
            { title:{ en:"Own workshop", ja:"独立", zh:"自立門戶" },
              jp:"工房",
              meta:{ en:"often one person", ja:"しばしば一人", zh:"常為一人" },
              text:{
                en:"Repairs, custom builds and teaching are combined to make a living.",
                ja:"修理、注文製作、教えることを組みあわせて暮らしを立てる。",
                zh:"結合修理、訂製與教學來維持生計。" } }
          ] }
      ] },
    { t:"section",
      id:"traditions",
      title:{ en:"Japan's independent makers", ja:"日本の手工ギターの系譜", zh:"日本的手工製琴傳統" },
      jp:"系譜",
      body:[
        { t:"p",
          text:{
            en:"Japan's tradition of individual guitar making is older than its guitar industry, and it began, like the industry, with violins. The best-documented lineage is that of the classical guitar in Tokyo, where a handful of workshops trained most of the makers active after the war. Nagoya — and through it Gifu — has its own line through the Suzuki violin factory, where both Kanō Minoru and Yairi Giichi, founder of the workshop that became <a href=\"yairi.html\">Yairi</a>, learned the trade. The names below are drawn from published histories of early Japanese guitar makers.",
            ja:"日本の個人によるギター製作の伝統は、ギター産業より古く、産業と同じくバイオリンから始まった。最もよく記録された系譜は東京のクラシックギターのもので、戦後に活躍した製作家の多くを、ひと握りの工房が育てた。名古屋——そしてそれを通じて岐阜——には、鈴木バイオリンの工場を通じた独自の系譜があり、加納実も、のちに<a href=\"yairi.html\">ヤイリ</a>となる工房を開いた矢入儀市も、そこで仕事を覚えた。以下の名は、初期の日本のギター製作家について公表された歴史から取った。",
            zh:"日本個人製琴的傳統比吉他產業更早，而且和產業一樣，始於小提琴。記錄最完整的譜系是東京的古典吉他，戰後活躍的製琴師多半出自少數幾間工坊。名古屋——並經由它延伸到岐阜——則有一條源自鈴木小提琴工廠的獨立脈絡：加納實，以及日後成為 <a href=\"yairi.html\">K.Yairi</a> 的工坊創辦人矢入儀市，都在那裡學藝。以下人名取自已出版的日本早期吉他製作家史料。" } },
        { t:"timeline",
          items:[
            { year:"1914",
              title:{ en:"Suzuki Masakichi", ja:"鈴木政吉", zh:"鈴木政吉" },
              jp:"名古屋",
              text:{
                en:"The Nagoya violin maker adds guitars to his factory's production, following mandolins in 1906.",
                ja:"名古屋のバイオリン製作者が、一九〇六年のマンドリンに続き、工場の製品にギターを加える。",
                zh:"名古屋的小提琴製作者繼 1906 年的曼陀林之後，將吉他納入工廠產品。" } },
            { year:"1915–19",
              title:{ en:"Miyamoto Kinpachi", ja:"宮本金八", zh:"宮本金八" },
              jp:"東京",
              text:{
                en:"A craftsman said to have worked for Nippon Gakki (Yamaha) since boyhood makes his first guitar in 1915 and opens his own Tokyo workshop in 1919.",
                ja:"少年のころから日本楽器（ヤマハ）で働いたとされる職人が、一九一五年に最初のギターをつくり、一九一九年に東京で自分の工房を開く。",
                zh:"據說自少年時代起任職於日本樂器（Yamaha）的工匠，1915 年做出第一把吉他，1919 年在東京開設自己的工坊。" } },
            { year:"1929",
              title:{ en:"Segovia's visit", ja:"セゴビア来日", zh:"塞哥維亞訪日" },
              jp:"手本",
              text:{
                en:"Andrés Segovia's first tour of Japan gives makers a Spanish concert guitar to study and copy.",
                ja:"アンドレス・セゴビアの最初の来日が、研究し写すべきスペインのコンサートギターをつくり手に示す。",
                zh:"安德烈斯・塞哥維亞首次訪日巡演，讓製琴師得以研究、仿製一把西班牙演奏級吉他。" } },
            { year:"1933",
              title:{ en:"Nakade Sakazō", ja:"中出阪蔵", zh:"中出阪藏" },
              jp:"新宿",
              text:{
                en:"Apprenticed to Miyamoto from 1919, he opens his own workshop in Shinjuku; at its peak in the 1950s–60s it reportedly made 3,000–4,000 guitars and trained more than thirty pupils.",
                ja:"一九一九年から宮本に弟子入りした彼が新宿に工房を開く。一九五〇〜六〇年代の最盛期には三千〜四千本のギターをつくり、三十人を超える弟子を育てたという。",
                zh:"自 1919 年起師事宮本的他，在新宿開設自己的工坊；據稱在 1950–60 年代全盛期製作了 3,000～4,000 把吉他，並培養三十多名弟子。" } },
            { year:"1949–67",
              title:{ en:"Kohno Masaru", ja:"河野賢", zh:"河野賢" },
              jp:"世界へ",
              text:{
                en:"Begins making guitars in 1949, studies for six months with Arcángel Fernández in Spain in 1960, and in 1967 wins a gold medal at an international guitar-making competition in Liège, Belgium — often described as the first great international recognition for a Japanese classical guitar.",
                ja:"一九四九年にギターづくりを始め、一九六〇年にスペインでアルカンヘル・フェルナンデスのもとで半年学び、一九六七年、ベルギーのリエージュの国際ギター製作コンクールで金賞を得る。日本のクラシックギターが初めて国際的に大きく認められた出来事とよくいわれる。",
                zh:"1949 年開始製作吉他，1960 年赴西班牙師從 Arcángel Fernández 學習半年，1967 年在比利時列日的國際吉他製作比賽中獲得金牌——常被視為日本古典吉他首次獲得重大國際肯定。" } }
          ] },
        { t:"p",
          text:{
            en:"Steel-string making followed a different path. It grew up mainly inside companies during the folk boom of the late 1960s and 1970s, and many of today's independent steel-string builders trained in those factories or in the specialist schools rather than under a single master. The individual workshops listed on this page — archtop, electric, custom and repair — belong to that newer, more varied tradition.",
            ja:"スチール弦のギターづくりは別の道をたどった。一九六〇年代末から一九七〇年代のフォークブームのさなか、主に会社のなかで育ち、いまの独立したスチール弦の製作家の多くは、一人の親方のもとではなく、そうした工場や専門学校で修業した。この頁に挙げた個人の工房——アーチトップ、エレキ、注文製作、修理——は、その新しく多様な伝統に属する。",
            zh:"鋼弦吉他的製作走的是另一條路。它主要在 1960 年代末至 1970 年代的民謠熱潮中於企業內部成長，今日許多獨立鋼弦製琴師是在那些工廠或專門學校受訓，而非師從單一師傅。本頁所列的個人工坊——拱面、電吉他、訂製與修理——屬於這個較新、也更多元的傳統。" } },
        { t:"tiny",
          text:{
            en:"Sources: published histories of early Japanese guitar makers; ESP Guitar Craft Academy (course outline); K. Yairi company history.",
            ja:"出典：初期の日本のギター製作家に関する公表の歴史、ESPギタークラフト・アカデミー（課程の概要）、ヤイリギターの社史。",
            zh:"資料來源：日本早期吉他製作家相關史料；ESP 吉他工藝學院（課程簡介）；K.Yairi 公司沿革。" } }
      ] },
    { t:"section",
      id:"viable",
      title:{ en:"What keeps a small workshop going", ja:"小さな工房を支えるもの", zh:"小工坊如何維持" },
      jp:"工房の経済",
      body:[
        { t:"p",
          text:{
            en:"A one-person guitar workshop lives on a balance between two kinds of work. New instruments build a reputation and command the highest prices, but each takes weeks of work spread over months while glue cures and finishes harden, and income from them arrives in lumps. Repairs are the opposite: small, frequent jobs that bring steady cash and a stream of customers who may one day order a guitar. Most independent makers in Gifu combine the two, and many add teaching or subcontract work. Kazu Guitar Village in Yamagata is a clear example. It was founded in September 2012 by Nagaya Kazushige after years at guitar manufacturers, where he learned production and later assembly and repair; it is registered as a one-person company with capital of ¥3 million, and offers made-to-order and semi-order guitars and basses, repairs and customisation, and a craft class with a free timetable in which students learn maintenance, repair and building.",
            ja:"一人のギター工房は、二種類の仕事の釣りあいの上に成り立つ。新しい楽器は名を上げ、最も高い値がつくが、接着剤が固まり塗装が硬くなるのを待つあいだ、一本に何か月にもわたって何週間分もの手間がかかり、その収入はまとまってときどき入る。修理はその逆で、小さく頻繁な仕事が安定した現金と、いつかギターを注文するかもしれない客の流れをもたらす。岐阜の独立した製作家の多くはこの二つを組みあわせ、教えることや下請けの仕事を加える人も多い。山県市のKazu Guitar Villageはその好例である。ギターメーカーで何年も働き、製造を、のちに組み立てと修理を覚えた長屋一成が二〇一二年九月に開いた。資本金三百万円、従業員一人の会社として登記され、注文製作とセミオーダーのギターとベース、修理と改造、そして生徒が手入れ・修理・製作を学ぶ、時間割の自由なクラフト教室を営む。",
            zh:"一人吉他工坊的生存，仰賴兩類工作之間的平衡。新琴能建立名聲、售價最高，但每把都要花上數週工時，而且因為要等膠固化、漆硬化而拖上數個月，收入是一筆一筆地進來。修理則相反：小而頻繁的工作帶來穩定現金，以及一批日後可能訂琴的客人。岐阜多數獨立製琴師兼做兩者，許多人還加上教學或代工。山縣市的 Kazu Guitar Village 就是明顯的例子。它由長屋一成於 2012 年 9 月創立；他曾在吉他製造商工作多年，先學製造，後學組裝與修理。公司登記資本額 300 萬日圓、員工一人，提供訂製與半訂製的吉他與貝斯、修理與改裝，以及時間自由安排、學習保養、修理與製作的工藝課。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Repairs", ja:"修理", zh:"修理" },
              jp:"日々の糧",
              text:{
                en:"Steady, local and seasonal — the dry winter brings cracks, the humid rainy season brings high action and swollen necks. Low risk of unsold stock; builds trust with players and shops.",
                ja:"安定し、地元に根ざし、季節がある。乾いた冬は割れを、湿った梅雨は高い弦高とふくらんだネックを運んでくる。売れ残りの心配が少なく、弾き手や店との信頼を築く。",
                zh:"穩定、在地且有季節性——乾燥的冬季帶來開裂，潮濕的梅雨季帶來弦高升高與琴頸膨脹。沒有滯銷庫存的風險；能與演奏者和樂器行建立信任。" } },
            { title:{ en:"New builds", ja:"新作", zh:"新琴製作" },
              jp:"名声",
              text:{
                en:"High value per piece and the maker's real calling card, but slow, capital-hungry and exposed to fashion. Wood must be bought years ahead and seasoned, and rosewood now comes with paperwork.",
                ja:"一本あたりの価値が高く、つくり手の本当の名刺となるが、時間がかかり、資金を食い、流行にさらされる。木は何年も前に買って枯らさねばならず、ローズウッドにはいまや書類がつきまとう。",
                zh:"單件價值高，是製琴師真正的名片，但耗時、吃資金，又受潮流左右。木料得提前多年購入、陳放，玫瑰木如今還附帶一堆文件手續。" } }
          ] },
        { t:"p",
          text:{
            en:"Three things work in Gifu's favour. The first is a market: greater Nagoya, one of Japan's three great metropolitan areas, is within an hour or so of most of the prefecture's workshops. The second is people: the Yairi and Takamine factories, with their long memories of hand work, have produced skilled craftspeople for decades, and the prefecture's woodworking schools add more. The third is a wood culture — sawmills, joiners, tool shops and a public that values fine timber. What Gifu does not have is tonewood: spruce tops, rosewood and ebony come through specialist importers, and makers must track their legal origin (see <a href=\"cites.html\">Rosewood &amp; the Law</a>). That is one reason some Japanese builders have turned to domestic species such as cherry, walnut and maple, discussed on the <a href=\"japanesewoods.html\">Japanese woods</a> page.",
            ja:"岐阜に有利な点が三つある。第一は市場である。日本三大都市圏の一つ、名古屋圏が、県内の多くの工房からおおむね一時間ほどのところにある。第二は人である。手仕事の長い記憶をもつヤイリとタカミネの工場は何十年も腕の良い職人を生み、県の木工の学校がさらに加える。第三は木の文化——製材所、建具屋、道具屋、そして良い木を尊ぶ人々——である。岐阜にないのはトーンウッドである。スプルースの表板、ローズウッド、エボニーは専門の輸入業者を通じて入り、つくり手はその合法な出どころを確かめねばならない（<a href=\"cites.html\">ローズウッドと条約</a>を参照）。日本のつくり手の一部が、サクラ、クルミ、カエデといった国産の樹種に目を向けてきた理由の一つはそこにあり、<a href=\"japanesewoods.html\">日本の木</a>の頁で述べる。",
            zh:"岐阜有三項優勢。第一是市場：日本三大都市圈之一的名古屋圈，距縣內多數工坊約一小時左右車程。第二是人：保有長久手工記憶的 Yairi 與 Takamine 工廠，數十年來培養出技術純熟的工匠，縣立木工學校又再添生力軍。第三是木的文化——製材廠、建具師、工具行，以及珍視好木料的民眾。岐阜所缺的是音木：雲杉面板、玫瑰木與黑檀都經由專業進口商輸入，製琴師必須追查其合法來源（見<a href=\"cites.html\">玫瑰木與公約</a>）。這正是部分日本製琴師轉向櫻木、胡桃木、楓木等本土樹種的原因之一，詳見<a href=\"japanesewoods.html\">日本木材</a>頁。" } },
        { t:"grid",
          cols:3,
          cells:[
            { k:{ en:"Gifu's guitar shipments, 2019", ja:"岐阜のギター出荷額（二〇一九年）", zh:"岐阜吉他出貨額（2019 年）" },
              v:{ en:"¥1.24 bn", ja:"12.4億円", zh:"12.4 億日圓" },
              d:{
                en:"17.1% of Japan, second after Nagano (establishments with four or more employees).",
                ja:"全国の17.1%、長野に次ぐ第二位（従業者四人以上の事業所）。",
                zh:"占全日本 17.1%，僅次於長野居第二（員工四人以上事業所）。" } },
            { k:{ en:"Value per guitar, Gifu, 2021", ja:"一本あたり出荷額（岐阜、二〇二一年）", zh:"每把出貨額（岐阜，2021 年）" },
              v:{ en:"≈ ¥74,000", ja:"約7.4万円", zh:"約 7.4 萬日圓" },
              d:{
                en:"Against about ¥41,000 in Nagano — Gifu's output is mostly higher-priced acoustic guitars.",
                ja:"長野の約4.1万円に対し、岐阜の生産は主に高価格帯のアコースティックギターである。",
                zh:"長野約 4.1 萬日圓——岐阜產品多為較高價位的木吉他。" } },
            { k:{ en:"Kazu Guitar Village", ja:"Kazu Guitar Village", zh:"Kazu Guitar Village" },
              v:"2012",
              d:{
                en:"Founded in Yamagata: one maker, builds, repairs and classes.",
                ja:"山県市で創業。つくり手一人で製作、修理、教室。",
                zh:"於山縣市創立：一位製琴師，兼做製作、修理與課程。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: METI Census of Manufactures (2019) and Economic Census for Business Activity (2021), guitars including electric guitars, by prefecture; Kazu Guitar Village company profile. Values per guitar calculated from shipment value and units.",
            ja:"出典：経済産業省「工業統計」（二〇一九年）・「経済センサス－活動調査」（二〇二一年）のギター（電気ギターを含む）都道府県別、Kazu Guitar Villageの会社概要。一本あたりの額は出荷額と数量から算出。",
            zh:"資料來源：日本經濟產業省《工業統計》（2019 年）與《經濟普查－活動調查》（2021 年）之吉他（含電吉他）分縣資料；Kazu Guitar Village 公司簡介。每把金額由出貨額與數量推算。" } }
      ] },
    { t:"related",
      items:[
        { href:"yairi.html", why:{ en:"The Kani factory.", ja:"可児の工場。", zh:"可兒工廠。" } },
        { href:"guitarcare.html", why:{ en:"When a guitar needs a repairer.", ja:"ギターが修理を要するとき。", zh:"吉他何時需要修理。" } },
        { href:"making.html", why:{ en:"How guitars are built.", ja:"ギターのつくり方。", zh:"吉他如何製作。" } },
        { href:"makers.html", why:{ en:"The full directory.", ja:"名鑑の全体。", zh:"完整名錄。" } }
      ] }
  ] };

/* ---- ------------------------------------ guitarindustry */
GIFU.pages["guitarindustry"] = { kicker:{ en:"Sound · 09", ja:"音 · 09", zh:"聲音 · 09" },
  title:{ en:"Japan's Guitar Industry", ja:"日本のギター産業", zh:"日本的吉他產業" },
  jp:"名古屋・松本・岐阜",
  lede:{
    en:"In the half-century after the war Japan became one of the world's great guitar-making nations, and it did so mostly in a belt of central Japan that runs from Nagoya through Gifu to the Matsumoto basin in Nagano. This page follows the industry from the violin workshops of Nagoya through the electric and folk booms, the copy era and the flight of mass production overseas, to today's smaller, premium industry — with the official statistics that measure it, and the place of Gifu's two makers within it.",
    ja:"戦後の半世紀のうちに、日本は世界有数のギター生産国となった。その舞台の多くは、名古屋から岐阜をへて長野の松本盆地へと続く中部日本の帯である。この頁は、名古屋のバイオリン工房から、エレキとフォークのブーム、コピーの時代、大量生産の海外流出をへて、いまの小さく高級な産業までをたどり、それを測る公的な統計と、そのなかでの岐阜の二つのメーカーの位置を示す。",
    zh:"戰後半個世紀裡，日本成為世界主要的吉他生產國之一，而舞台多半位於日本中部——從名古屋經岐阜，延伸到長野松本盆地的一條帶狀地區。本頁追溯這個產業：從名古屋的小提琴工坊，歷經電吉他與民謠熱潮、仿製時代與量產外移，直到今日規模較小、走向高階的產業——並附上衡量它的官方統計，以及岐阜兩家製造商在其中的位置。" },
  body:[
    { t:"section",
      id:"violins",
      title:{ en:"Violins first", ja:"はじめにバイオリンありき", zh:"先有小提琴" },
      jp:"鈴木政吉と名古屋",
      body:[
        { t:"p",
          text:{
            en:"Japanese guitar making grew out of violin making, and violin making in Japan began with one man in Nagoya. Suzuki Masakichi was a maker of shamisen when he first saw a violin in the 1880s; he completed his own in 1887 according to the company he founded (1888 in other accounts) and began production in earnest in 1890. By 1900 he had invented machines to carve scrolls and arched plates, won a bronze medal at the Paris Exposition and moved into factory production. Mandolins followed in 1906 and guitars in 1914. The factory became a school for a whole region: its workers learned to select and season wood, bend sides, fit necks and finish instruments, and many of them — or their pupils — went on to found workshops of their own.",
            ja:"日本のギターづくりはバイオリンづくりから育ち、日本のバイオリンづくりは名古屋の一人の男から始まった。鈴木政吉は三味線の職人だったが、一八八〇年代に初めてバイオリンを目にし、自ら創った会社によれば一八八七年（別の記録では一八八八年）に最初の一挺を完成させ、一八九〇年に本格的な製造を始めた。一九〇〇年までに渦巻きと甲板を削る機械を考案し、パリ万国博覧会で銅賞を得て、工場での生産に移った。一九〇六年にマンドリンが、一九一四年にギターが続いた。工場は一つの地域全体の学校となった。働き手は木を選んで枯らし、側板を曲げ、ネックを合わせ、楽器を仕上げることを覚え、その多く——あるいはその弟子——がのちに自分の工房を開いた。",
            zh:"日本的吉他製作源自小提琴製作，而日本的小提琴製作始於名古屋的一個人。鈴木政吉原是三味線匠人，1880 年代第一次見到小提琴；據他創立的公司所述，他在 1887 年（另一說為 1888 年）完成第一把琴，1890 年開始正式生產。到 1900 年，他已發明雕刻琴頭渦卷與拱形面板的機器，在巴黎萬國博覽會獲得銅牌，並轉入工廠化生產。1906 年增加曼陀林，1914 年增加吉他。這座工廠成了整個地區的學校：工人在此學會選材與陳放木料、彎曲側板、裝配琴頸與塗裝樂器，其中許多人——或他們的徒弟——日後都自立工坊。" } },
        { t:"p",
          text:{
            en:"Nagoya gathered other pioneers. Hoshino Gakki, founded in 1908 as the musical-instrument arm of a Nagoya bookshop, began making Spanish-style guitars in 1935 under a name borrowed from the Spanish maker Salvador Ibáñez — the origin of the Ibanez brand. In the same year Yairi Giichi, who had worked at Suzuki, set up his own workshop in the city. War then scattered the trade into the mountains. Suzuki moved its head office to Ena in eastern Gifu in 1936; instrument making dwindled in the war years, the founder died in 1944, and production resumed after the war, when the head office returned to Nagoya and the Ena works became a separate company, Ena Gakki, in 1954. Another branch, evacuated to the Kiso valley just across the Nagano border, became Kiso Suzuki, which later made guitars as well as violins. In 1945 the Yairi workshop fled the air raids on Nagoya for Kani in Gifu, where <a href=\"yairi.html\">Yairi</a> still works.",
            ja:"名古屋にはほかの先駆者も集まった。一九〇八年に名古屋の書店の楽器部門として生まれた星野楽器は、一九三五年、スペインの製作家サルバドール・イバニェスから借りた名でスペイン式のギターをつくりはじめた。これがアイバニーズの名の起こりである。同じ年、鈴木で働いた矢入儀市が市内に自分の工房を開いた。やがて戦争がこの職を山あいへ散らした。鈴木は一九三六年に本社を岐阜県東部の恵那へ移した。戦時下で楽器づくりは細り、創業者は一九四四年に没した。戦後に生産を再開して本社は名古屋へ戻り、恵那の工場は一九五四年に恵那楽器という別会社となった。長野県境を越えてすぐの木曽谷に疎開したもう一つの流れは木曽鈴木となり、のちにバイオリンのほかギターもつくった。一九四五年、矢入の工房は名古屋の空襲を逃れて岐阜の可児へ移り、<a href=\"yairi.html\">ヤイリ</a>はいまもそこにある。",
            zh:"名古屋還聚集了其他先驅。1908 年作為名古屋一家書店樂器部門而成立的星野樂器，於 1935 年開始以借自西班牙製琴師 Salvador Ibáñez 的名字製作西班牙式吉他——這正是 Ibanez 品牌的由來。同年，曾在鈴木任職的矢入儀市也在市內開設自己的工坊。其後戰爭把這一行分散到山區。鈴木於 1936 年將總公司遷至岐阜縣東部的惠那；戰時樂器製作日漸萎縮，創辦人於 1944 年過世，戰後恢復生產，總公司遷回名古屋，惠那工廠則於 1954 年獨立為惠那樂器公司。另一支疏散到長野縣界另一側木曾谷的團隊，成為木曾鈴木，後來除小提琴外也製作吉他。1945 年，矢入工坊為躲避名古屋空襲遷往岐阜可兒，<a href=\"yairi.html\">K.Yairi</a> 至今仍在那裡。" } },
        { t:"timeline",
          items:[
            { year:"1887",
              title:{ en:"A first violin", ja:"最初のバイオリン", zh:"第一把小提琴" },
              jp:"名古屋",
              text:{
                en:"Suzuki Masakichi completes his first violin (the company's date); production begins in 1890.",
                ja:"鈴木政吉が最初のバイオリンを完成（会社による年）。一八九〇年に製造を始める。",
                zh:"鈴木政吉完成第一把小提琴（公司所載年份）；1890 年開始生產。" } },
            { year:"1900",
              title:{ en:"Machines and a medal", ja:"機械と賞", zh:"機械與獎牌" },
              jp:"量産",
              text:{
                en:"Carving machines for scrolls and plates; a bronze medal at the Paris Exposition.",
                ja:"渦巻きと甲板を削る機械。パリ万国博覧会で銅賞。",
                zh:"發明琴頭渦卷與面板雕刻機；獲巴黎萬國博覽會銅牌。" } },
            { year:"1908",
              title:{ en:"Hoshino Gakki", ja:"星野楽器", zh:"星野樂器" },
              jp:"名古屋",
              text:{
                en:"A Nagoya bookshop opens a musical-instrument business, later the home of Ibanez.",
                ja:"名古屋の書店が楽器の商いを始める。のちのアイバニーズの母体。",
                zh:"名古屋一家書店開始經營樂器，日後成為 Ibanez 的母公司。" } },
            { year:"1914",
              title:{ en:"Guitars at Suzuki", ja:"鈴木のギター", zh:"鈴木開始做吉他" },
              jp:"量産の始まり",
              text:{
                en:"Guitars join violins and mandolins in Suzuki's catalogue.",
                ja:"鈴木の品目に、バイオリン、マンドリンと並んでギターが加わる。",
                zh:"吉他與小提琴、曼陀林並列於鈴木的產品目錄。" } },
            { year:"1935",
              title:{ en:"Two new workshops", ja:"二つの新しい工房", zh:"兩間新工坊" },
              jp:"イバニーズ・矢入",
              text:{
                en:"Hoshino begins making Spanish-style guitars; Yairi Giichi founds his workshop in Nagoya.",
                ja:"星野がスペイン式ギターの製造を始め、矢入儀市が名古屋に工房を開く。",
                zh:"星野開始製作西班牙式吉他；矢入儀市在名古屋創立工坊。" } },
            { year:"1936",
              title:{ en:"Suzuki to Ena", ja:"鈴木、恵那へ", zh:"鈴木遷往惠那" },
              jp:"岐阜",
              text:{
                en:"Suzuki Violin moves its head office to Ena in Gifu; it returns to Nagoya after the war.",
                ja:"鈴木バイオリンが本社を岐阜の恵那へ移す。戦後に名古屋へ戻る。",
                zh:"鈴木小提琴將總公司遷至岐阜惠那；戰後遷回名古屋。" } },
            { year:"1945",
              title:{ en:"Yairi to Kani", ja:"矢入、可児へ", zh:"矢入遷往可兒" },
              jp:"疎開",
              text:{
                en:"The Yairi workshop leaves bombed Nagoya for Kani, Gifu.",
                ja:"矢入の工房が空襲の名古屋を離れ、岐阜の可児へ。",
                zh:"矢入工坊離開遭空襲的名古屋，遷往岐阜可兒。" } },
            { year:"1951",
              title:{ en:"Kiso Suzuki", ja:"木曽鈴木", zh:"木曾鈴木" },
              jp:"木曽福島",
              text:{
                en:"The Kiso branch is reorganised as a company; it becomes a major violin producer and a guitar maker.",
                ja:"木曽の流れが会社として再編され、大きなバイオリンの生産者、そしてギターのメーカーとなる。",
                zh:"木曾一支改組為公司，成為主要的小提琴生產者，也製作吉他。" } }
          ] }
      ] },
    { t:"section",
      id:"booms",
      title:{ en:"Two booms", ja:"二つのブーム", zh:"兩波熱潮" },
      jp:"エレキとフォーク",
      body:[
        { t:"p",
          text:{
            en:"The electric guitar reached Japan by way of Hawaiian music, whose steel guitars were among the first amplified instruments sold there. Two Tokyo firms led the way. Guyatone, founded in 1933, claims to have developed Japan's first electric guitars in the 1950s. Teisco began in 1946 as a small electronics workshop, launched its brand in 1948 with Hawaiian guitars and amplifiers, made its first electric guitars in 1952 and was selling them in the United States from about 1959 — often under American store brands, as many Japanese factories would do for decades. Then, in the mid-1960s, Japanese teenagers discovered the electric guitar. Tours by The Ventures, whose instrumental records were enormously popular in Japan, set off what became known as the <em>ereki</em> boom, and the Beatles' visit in 1966 added to it. Dozens of small workshops sprang up to meet it, and the orders kept them busy for a few years, until the craze subsided and many of them closed; Teisco itself was taken over by the piano maker Kawai in 1967.",
            ja:"エレキギターは、ハワイアン音楽を通じて日本に入ってきた。そのスチールギターは、日本で売られた最初の電気で増幅する楽器の一つだった。先頭に立ったのは東京の二社である。一九三三年創業のグヤトーンは、一九五〇年代に日本で初めてエレキギターを開発したとしている。テスコは一九四六年に小さな電気の工房として始まり、一九四八年にハワイアンギターとアンプでブランドを立ち上げ、一九五二年に最初のエレキギターをつくり、一九五九年ごろにはアメリカで売っていた。多くはアメリカの小売店の名で、これは多くの日本の工場が何十年も続けるやり方となった。そして一九六〇年代半ば、日本の十代がエレキギターを見つけた。日本で絶大な人気を得たインストゥルメンタルのレコードのベンチャーズの来日公演が、のちに「エレキブーム」と呼ばれるものを起こし、一九六六年のビートルズの来日がそれに拍車をかけた。これに応えて何十もの小さな工房が生まれ、注文は数年のあいだそれらを忙しくさせたが、熱が冷めると多くが消えた。テスコ自身も一九六七年にピアノのメーカー、河合楽器の傘下に入った。",
            zh:"電吉他是經由夏威夷音樂傳入日本的——夏威夷滑音吉他是日本最早販售的電聲樂器之一。領頭的是東京的兩家公司。1933 年創立的 Guyatone 自稱在 1950 年代開發出日本第一批電吉他。Teisco 於 1946 年以小型電子工坊起家，1948 年以夏威夷吉他與音箱推出品牌，1952 年做出第一把電吉他，約從 1959 年起已在美國銷售——多半掛著美國零售商的品牌，這也是許多日本工廠此後數十年的做法。接著在 1960 年代中期，日本青少年發現了電吉他。器樂唱片在日本極為暢銷的 The Ventures 來日巡演，掀起了後來所稱的「エレキ（電吉他）熱潮」，1966 年 The Beatles 訪日更推波助瀾。數十家小工坊應運而生，訂單讓它們忙了幾年，直到熱潮退去，許多便關門；Teisco 本身也在 1967 年被鋼琴製造商河合樂器收購。" } },
        { t:"p",
          text:{
            en:"The folk boom that followed was, for Gifu, the more important one. From the late 1960s Japanese folk and singer-songwriter music made the steel-string acoustic the instrument of a generation, and demand ran far ahead of supply. Yamaha — then Nippon Gakki — launched the FG180 in 1966, which the company describes as its first folk guitar and the first made in Japan; early examples with red labels are now collectors' items. In Matsumoto, Morris Gakki Seizō was founded in 1967 to build Morris guitars for the Tokyo distributor Moridaira, and at the height of the boom it was making, according to published accounts, around 300,000 guitars a year. In Gifu, the Yairi workshop took the name Yairi Guitar in 1965, and <a href=\"takamine.html\">Takamine</a>, founded at Sakashita in 1959, grew to about sixty employees by 1968. Kiso Suzuki and the separate S. Yairi business in Nagoya supplied guitars under their own names and for other brands.",
            ja:"続くフォークブームは、岐阜にとってより大切なものだった。一九六〇年代末から、日本のフォークとシンガーソングライターの音楽がスチール弦のアコースティックを一世代の楽器にし、需要は供給をはるかに上回った。ヤマハ——当時の日本楽器製造——は一九六六年にFG180を発売した。会社はこれを自社初、そして日本初のフォークギターとしており、赤いラベルの初期のものはいまや収集家の品である。松本では一九六七年、東京の問屋モリダイラ楽器のモーリスギターをつくるモーリス楽器製造が生まれ、ブームの頂には、公表された記録によれば年に約三十万本をつくった。岐阜では、矢入の工房が一九六五年にヤイリギターと名乗り、一九五九年に坂下で創業した<a href=\"takamine.html\">タカミネ</a>は一九六八年までに従業員約六十人に育った。木曽鈴木や名古屋の別会社S.ヤイリも、自らの名とほかのブランドの名でギターを送りだした。",
            zh:"隨後的民謠熱潮，對岐阜而言更為重要。從 1960 年代末開始，日本的民謠與創作歌手音樂讓鋼弦木吉他成為一整個世代的樂器，需求遠遠超過供給。Yamaha——當時的日本樂器製造——於 1966 年推出 FG180，公司稱之為自家第一把、也是日本第一把民謠吉他；貼紅標的早期琴如今已是收藏品。在松本，Morris 樂器製造於 1967 年成立，為東京的經銷商 Moridaira 製作 Morris 吉他；據公開資料，熱潮高峰時年產約 30 萬把。在岐阜，矢入工坊於 1965 年改名 Yairi Guitar，1959 年創立於坂下的 <a href=\"takamine.html\">Takamine</a> 到 1968 年已成長為約六十名員工。木曾鈴木與名古屋另立門戶的 S.Yairi，也以自有品牌及為其他品牌供應吉他。" } },
        { t:"defs",
          items:[
            { term:{ en:"OEM", ja:"OEM（相手先ブランド製造）", zh:"OEM（代工）" },
              jp:"相手先ブランド",
              def:{
                en:"Much of Japan's output has always been made for other people's brands — American department stores in the 1960s, Japanese distributors in the 1970s, and famous American names from the 1980s. Many players own a Japanese-made guitar without knowing it.",
                ja:"日本の生産の多くは、昔からほかの会社のブランドのためのものだった。一九六〇年代にはアメリカの百貨店、一九七〇年代には日本の問屋、一九八〇年代からは名高いアメリカのブランドである。多くの弾き手が、知らずに日本製のギターをもっている。",
                zh:"日本產量有很大一部分一向是為他人品牌生產——1960 年代為美國百貨公司，1970 年代為日本經銷商，1980 年代起則為知名的美國品牌。許多演奏者手上的日本製吉他，自己並不知情。" } },
            { term:{ en:"The distributor-brand system", ja:"問屋ブランド", zh:"經銷商品牌體制" },
              jp:"企画と製造",
              def:{
                en:"In Japan, many famous brands — Ibanez, Greco, Morris, Aria — belonged to distributors or trading companies that designed and sold guitars, while separate factories, often in Nagano or Aichi, built them. The split between planning and making is one reason the industry could shift production so easily later.",
                ja:"日本では、アイバニーズ、グレコ、モーリス、アリアといった名高いブランドの多くが、ギターを企画して売る問屋や商社のもので、それをつくるのは別の工場、しばしば長野や愛知の工場だった。企画と製造が分かれていたことが、のちに産業が生産をたやすく移せた理由の一つである。",
                zh:"在日本，Ibanez、Greco、Morris、Aria 等許多知名品牌屬於負責企劃與銷售的經銷商或貿易公司，實際製造則交給另外的工廠，常位於長野或愛知。企劃與製造分離，是這個產業日後能輕易轉移生產的原因之一。" } }
          ] }
      ] },
    { t:"section",
      id:"matsumoto",
      title:{ en:"The Matsumoto cluster", ja:"松本の集積", zh:"松本產業聚落" },
      jp:"信州のギター",
      body:[
        { t:"p",
          text:{
            en:"Why did Nagano, rather than Nagoya or Hamamatsu, become the centre of Japanese guitar making? The prefecture's own account names three reasons: an established woodworking trade — Matsumoto is known for its furniture — a dry basin climate with wide swings of temperature that suits the seasoning of wood, and machine and metalworking industries that allowed every stage, from hardware to paint, to be done locally. The story began, again, with violins. In 1960 a Matsumoto violin maker switched to classical guitars, and from 1962 local makers began building guitars for the American market. Within twenty years the basin had become one of the largest concentrations of guitar factories in the world.",
            ja:"なぜ名古屋や浜松ではなく長野が日本のギターづくりの中心になったのか。県自身の説明は三つの理由を挙げる。家具で知られる松本の根づいた木工の仕事、木を枯らすのに向いた、寒暖の差の大きい乾いた盆地の気候、そして金具から塗装まで、あらゆる工程を地元でこなせる機械・金属の工業である。物語はここでもバイオリンから始まった。一九六〇年、松本のバイオリンのメーカーがクラシックギターに転じ、一九六二年からは地元のメーカーがアメリカ市場向けのギターをつくりはじめた。二十年のうちに、この盆地は世界有数のギター工場の集積地となった。",
            zh:"為什麼成為日本吉他製造中心的是長野，而不是名古屋或濱松？長野縣自己的說明舉出三個理由：根深柢固的木工業——松本以家具聞名；盆地乾燥、溫差大的氣候，適合陳放木料；以及機械與金屬工業，讓從五金到塗裝的每道工序都能在地完成。故事同樣始於小提琴。1960 年，松本一家小提琴製造商轉做古典吉他；1962 年起，當地製造商開始為美國市場生產吉他。不到二十年，這個盆地已成為世界上吉他工廠最密集的地區之一。" } },
        { t:"p",
          text:{
            en:"The largest of them was Fujigen, founded in Matsumoto in May 1960 as Fuji Gen Gakki by Yokouchi Yūichirō and Mimura Yutaka. It made violins and classical guitars first and electric guitars from about 1962; from 1970 it was the main supplier of Ibanez guitars to Hoshino Gakki, and it also built the Greco brand for the Tokyo distributor Kanda Shokai. In 1982 it became the principal factory for the newly founded Fender Japan, a joint venture of Fender with Fujigen and the Japanese distributors Yamano Gakki and Kanda Shokai, and in 1983 it claimed the largest guitar shipments in the world — about 14,000 instruments a month, according to a prefectural interview with its founder. Fujigen helped set up Fender's Mexican factory in 1987 and withdrew from Fender Japan in 1997. Today it still makes a few thousand electric guitars a month, mostly for other brands, but more than half its revenue comes from wooden interior panels for cars, finished with techniques learned on guitar bodies.",
            ja:"そのなかで最大のものがフジゲンで、一九六〇年五月、横内祐一郎と三村豊によって富士弦楽器製造として松本に生まれた。はじめはバイオリンとクラシックギターを、一九六二年ごろからエレキギターをつくり、一九七〇年からは星野楽器のアイバニーズのギターの主な供給元となり、東京の問屋、神田商会のグレコも製造した。一九八二年には、フェンダーとフジゲン、日本の問屋の山野楽器と神田商会による合弁として新たに生まれたフェンダー・ジャパンの主力工場となり、一九八三年には世界一のギター出荷を称した。県による創業者へのインタビューによれば、月に約一万四千本である。フジゲンは一九八七年にフェンダーのメキシコ工場の設立に加わり、一九九七年にフェンダー・ジャパンから手を引いた。いまも月に数千本のエレキギターを、その多くをほかのブランドのためにつくるが、売上の半分以上は、ギターの胴で身につけた塗装の技を生かした自動車の木製内装パネルによる。",
            zh:"其中規模最大的是 Fujigen，1960 年 5 月由橫內祐一郎與三村豐以「富士弦樂器製造」之名在松本創立。它先做小提琴與古典吉他，約 1962 年起製作電吉他；1970 年起成為星野樂器 Ibanez 吉他的主要供應商，也為東京經銷商神田商會生產 Greco 品牌。1982 年，它成為新成立的 Fender Japan——由 Fender、Fujigen 與日本經銷商山野樂器、神田商會合資——的主力工廠；1983 年更自稱吉他出貨量世界第一，據長野縣對其創辦人的訪談，約為每月 14,000 把。Fujigen 於 1987 年參與設立 Fender 的墨西哥工廠，1997 年退出 Fender Japan。如今它每月仍生產數千把電吉他，多半為其他品牌代工，但一半以上營收來自汽車木質內裝飾板——運用的正是在吉他琴身上練就的塗裝技術。" } },
        { t:"defs",
          items:[
            { term:{ en:"Matsumoku", ja:"マツモク工業", zh:"Matsumoku（松本木工）" },
              jp:"ミシンからギターへ",
              def:{
                en:"A Matsumoto woodworking company that began by making cabinets for sewing machines. When sewing machines changed and needed less wood, it turned to guitars, building Aria Pro II instruments for the Nagoya trading company Arai & Co. and guitars for many other brands. It closed its factory in February 1987; the site is now reportedly a park with a guitar-shaped monument.",
                ja:"ミシンのキャビネットをつくることから始まった松本の木工の会社。ミシンのつくりが変わって木を使わなくなると、ギターに転じ、名古屋の商社、荒井貿易のアリアプロIIや、ほかの多くのブランドのギターをつくった。一九八七年二月に工場を閉じ、跡地はいま、ギターの形の記念碑のある公園になっているという。",
                zh:"以製作縫紉機木櫃起家的松本木工公司。當縫紉機結構改變、用木量減少後，它轉做吉他，為名古屋貿易公司荒井貿易生產 Aria Pro II，也為許多其他品牌代工。1987 年 2 月關廠；據說舊址如今是一座設有吉他造型紀念碑的公園。" } },
            { term:{ en:"Morris", ja:"モーリス", zh:"Morris" },
              jp:"フォークの時代",
              def:{
                en:"Morris Gakki Seizō, founded in Matsumoto in 1967, made the Morris acoustic guitars that defined the folk boom for many Japanese players. It later moved much of its production abroad and, from the late 1990s, repositioned its Matsumoto workshop toward semi-handmade instruments.",
                ja:"一九六七年に松本で生まれたモーリス楽器製造は、多くの日本の弾き手にとってフォークブームを象徴するモーリスのアコースティックギターをつくった。のちに生産の多くを海外へ移し、一九九〇年代末からは松本の工房を半手工の楽器へと位置づけ直した。",
                zh:"1967 年創立於松本的 Morris 樂器製造，生產了許多日本玩家心目中代表民謠熱潮的 Morris 木吉他。後來它將大部分生產移往海外，並自 1990 年代末起，把松本工坊重新定位為半手工樂器。" } },
            { term:{ en:"Kiso Suzuki", ja:"木曽鈴木", zh:"木曾鈴木" },
              jp:"木曽福島",
              def:{
                en:"In Kiso-Fukushima, in the valley that leads down to Gifu, the Kiso branch of the Suzuki family produced violins — at one time, by one account, around 40% of Japan's output — together with guitars, mandolins and banjos under its own name and for other brands. It ceased trading in the mid-1980s.",
                ja:"岐阜へと下る谷の木曽福島で、鈴木家の木曽の流れはバイオリン——ある記録によれば一時は国内生産の約四割——を、ギター、マンドリン、バンジョーとともに、自らの名とほかのブランドの名でつくった。一九八〇年代半ばに営業をやめた。",
                zh:"在通往岐阜的木曾谷中的木曾福島，鈴木家族的木曾一支生產小提琴——據一說一度占全日本產量約四成——也以自有品牌及為其他品牌製作吉他、曼陀林與斑鳩琴。1980 年代中期結束營業。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Nagano Prefecture (“Nagano is number one in Japan” series; interview with Fujigen's founder); company histories of Fujigen and Morris; Japanese encyclopaedia entries on Matsumoku, Kiso Suzuki and Fender Japan.",
            ja:"出典：長野県（「長野県は日本一」、フジゲン創業者へのインタビュー）、フジゲンとモーリスの社史、マツモク工業・木曽鈴木・フェンダー・ジャパンに関する事典の項目。",
            zh:"資料來源：長野縣（「長野縣日本第一」系列；Fujigen 創辦人訪談）；Fujigen 與 Morris 公司沿革；Matsumoku、木曾鈴木與 Fender Japan 的日文百科條目。" } }
      ] },
    { t:"section",
      id:"copies",
      title:{ en:"Copies, a lawsuit and original designs", ja:"コピー、訴訟、そして独自の設計", zh:"仿製、訴訟與原創設計" },
      jp:"コピーモデルの時代",
      body:[
        { t:"p",
          text:{
            en:"In the late 1960s the big American makers changed their classic models, and many players preferred the older versions. Japanese factories saw the opening: through the 1970s they built careful copies of vintage Gibson, Fender and Martin designs, sold them at a fraction of the American price, and used the profits to invest in numerically controlled routers and better finishing. By the mid-1970s Ibanez alone offered many variations of a Les Paul-style guitar — the Les Paul Custom design by itself appeared under at least seven model numbers — and a collectors' guide estimates that one such model retailed for about US$300–400, at a time when a Gibson Les Paul cost US$850–950 (1978). On 28 June 1977 Gibson's parent company, Norlin, sued Ibanez's American distributor over the copying of its headstock design; the case was settled out of court on 2 February 1978. The instruments of those years are still called “lawsuit” guitars by collectors, and Japanese guitars of the 1970s and 1980s — now known in Japan as <em>Japan vintage</em> — sell abroad as collectors' items.",
            ja:"一九六〇年代末、アメリカの大手メーカーは定番のモデルに手を入れ、多くの弾き手は古い仕様を好んだ。日本の工場はそこに機会を見た。一九七〇年代を通じて、ギブソン、フェンダー、マーティンの古い設計を丁寧に写したギターをつくり、アメリカ製の何分の一かの値で売り、その利益で数値制御のルーターや良い塗装の設備に投資した。一九七〇年代半ばには、アイバニーズだけでレスポール型のギターを数多くそろえていた。レスポール・カスタム型だけでも少なくとも七つの型番がある。収集家向けの解説によれば、そのうちの一本は300〜400ドルほどで売られ、そのころ（一九七八年）ギブソンのレスポールは850〜950ドルだったという。一九七七年六月二十八日、ギブソンの親会社ノーリンは、ヘッドの形を写したとしてアイバニーズのアメリカの販売元を訴え、一九七八年二月二日に和解した。この時期の楽器は、いまも収集家に「ロースーツ（訴訟）モデル」と呼ばれ、一九七〇〜一九八〇年代の日本のギター——日本では「ジャパン・ヴィンテージ」と呼ばれる——は海外で収集家の品として売られている。",
            zh:"1960 年代末，美國大廠修改了經典型號，許多演奏者卻偏好舊款。日本工廠看準了這個空檔：整個 1970 年代，它們精心仿製老式 Gibson、Fender 與 Martin 設計，以美國貨幾分之一的價格出售，再把利潤投入數值控制雕刻機與更好的塗裝設備。到 1970 年代中期，光是 Ibanez 就提供許多款 Les Paul 式吉他，僅 Les Paul Custom 式就至少有七個型號；據一份收藏家指南估計，其中一款當年售價約 300～400 美元，而同時期（1978 年）Gibson Les Paul 要價 850～950 美元。1977 年 6 月 28 日，Gibson 的母公司 Norlin 以琴頭造型遭仿製為由，控告 Ibanez 的美國經銷商；此案於 1978 年 2 月 2 日庭外和解。那個時期的樂器至今仍被收藏家稱為「訴訟時期（lawsuit）」吉他，而 1970 至 1980 年代的日本吉他——在日本稱為「Japan Vintage」——在海外已成為收藏品。" } },
        { t:"p",
          text:{
            en:"The lawsuit hurried a change that was already under way. Japanese firms moved to their own designs — Ibanez's own electric models, Aria Pro II, Yamaha's SG series, and in acoustic guitars the distinctive headstocks that replaced the early copies at <a href=\"takamine.html\">Takamine</a> and elsewhere — and the American makers themselves began to license Japanese production. Fender Japan, founded in 1982, is the clearest case: an American brand making officially sanctioned versions of its own vintage models in Matsumoto, first with serial numbers beginning “JV” for Japanese Vintage. Many players and dealers regard the late 1970s and early 1980s as the high point of Japanese guitar quality, when factory workers trained in the copy years could match the originals.",
            ja:"訴訟は、すでに進んでいた変化を早めた。日本の会社は独自の設計へ移った。アイバニーズの独自のエレキ、アリアプロII、ヤマハのSGシリーズ、そしてアコースティックでは、<a href=\"takamine.html\">タカミネ</a>などで初期のコピーに代わった独特のヘッドの形である。そしてアメリカのメーカー自身が、日本での生産を認めるようになった。一九八二年創立のフェンダー・ジャパンが最も明らかな例で、アメリカのブランドが自社の古いモデルの公認版を松本でつくり、はじめはJapanese Vintageを表す「JV」で始まる製造番号をつけた。多くの弾き手や楽器商は、コピーの時代に鍛えられた工場の職人が本家に並ぶことのできた一九七〇年代末から一九八〇年代初めを、日本のギターの品質の頂点とみなしている。",
            zh:"這場訴訟加速了一個早已開始的轉變。日本公司轉向自有設計——Ibanez 的原創電吉他、Aria Pro II、Yamaha 的 SG 系列，以及木吉他方面在 <a href=\"takamine.html\">Takamine</a> 等廠取代早期仿製款的獨特琴頭——美國廠商本身也開始授權日本生產。1982 年成立的 Fender Japan 是最明顯的例子：一個美國品牌在松本生產自家老款的官方授權版，最初的序號以代表 Japanese Vintage 的「JV」開頭。許多演奏者與樂器商認為，1970 年代末至 1980 年代初是日本吉他品質的巔峰——在仿製年代練就功夫的工廠師傅，已足以與原廠並駕齊驅。" } }
      ] },
    { t:"section",
      id:"offshore",
      title:{ en:"Production moves abroad", ja:"生産は海外へ", zh:"生產移往海外" },
      jp:"韓国・中国・インドネシア",
      body:[
        { t:"p",
          text:{
            en:"From the mid-1980s the strong yen made Japanese guitars expensive abroad, while the folk boom at home had long faded. Mass production moved out in waves: to Korea from the 1990s, to China from the 2000s and to Indonesia from the 2010s. Morris opened production in Korea in 1995, China in 1999 and Indonesia in 2016; Ibanez's cheaper lines are made in China and Indonesia, with only its top Prestige range still made in Japan. Factories that could not adapt closed — Matsumoku in 1987, Kiso Suzuki in the mid-1980s — and those that survived shrank and specialised: Fujigen, which made some 14,000 guitars a month in 1983, now makes a few thousand. What remained in Japan was the higher-priced end of the market, the custom shops and the repairers.",
            ja:"一九八〇年代半ばから、円高が日本のギターを海外で高いものにし、国内ではフォークブームがとうに去っていた。大量生産は波のように外へ出た。一九九〇年代から韓国へ、二〇〇〇年代から中国へ、二〇一〇年代からインドネシアへ。モーリスは一九九五年に韓国、一九九九年に中国、二〇一六年にインドネシアで生産を始めた。アイバニーズの廉価な系列は中国とインドネシアでつくられ、日本でつくるのは最上位のプレステージだけである。変われなかった工場は閉じた——一九八七年のマツモク、一九八〇年代半ばの木曽鈴木——。生き残ったところは小さくなり、専門化した。一九八三年に月に約一万四千本をつくったフジゲンは、いまは数千本である。日本に残ったのは、市場の高価格帯、カスタムショップ、そして修理職人だった。",
            zh:"自 1980 年代中期起，日圓升值讓日本吉他在海外變得昂貴，而國內的民謠熱潮也早已退燒。量產分幾波外移：1990 年代起移往韓國，2000 年代起移往中國，2010 年代起移往印尼。Morris 於 1995 年在韓國、1999 年在中國、2016 年在印尼開始生產；Ibanez 的平價系列在中國與印尼製造，只有頂級的 Prestige 系列仍在日本生產。無法轉型的工廠紛紛關閉——1987 年的 Matsumoku、1980 年代中期的木曾鈴木——存活者則縮小規模、走向專業化：1983 年每月生產約 14,000 把的 Fujigen，如今每月數千把。留在日本的，是市場的高價位區段、客製工坊與修理師。" } },
        { t:"panel",
          title:{ en:"A Taiwan chapter", ja:"台湾の一章", zh:"台灣篇章" },
          tint:"water",
          body:[
            { t:"p",
              text:{
                en:"Before China and Indonesia, part of the story ran through Taiwan. Yamaha opened a guitar factory in the Nanzih Export Processing Zone in Kaohsiung in 1971. Over some thirty-five years it employed more than 1,200 people and, according to a Taiwanese newspaper, made more than four million affordable guitars, which Yamaha says were exported to over seventy countries. The plant closed in January 2007, when production moved to China and Indonesia. In 2011 the Kaohsiung Workers' Museum marked the city's guitar industry with an exhibition, and some former employees went on to build guitars by hand. Taiwan's own guitar makers are described on the <a href=\"taiwan.html\">Taiwan</a> page.",
                ja:"中国とインドネシアの前に、物語の一部は台湾を通った。ヤマハは一九七一年、高雄の楠梓輸出加工区にギター工場を開いた。約三十五年のあいだに千二百人を超える人が働き、台湾の新聞によれば四百万本を超える手ごろなギターをつくり、ヤマハによれば七十か国以上へ輸出された。工場は二〇〇七年一月、生産が中国とインドネシアへ移るとともに閉じた。二〇一一年、高雄市の労工博物館は展覧会で市のギター産業を記録し、元従業員のなかには手づくりのギターに進んだ人もいる。台湾自身のギターメーカーについては<a href=\"taiwan.html\">台湾</a>の頁で述べる。",
                zh:"在中國與印尼之前，這段故事有一部分經過台灣。Yamaha 於 1971 年在高雄楠梓加工出口區設立吉他工廠。約三十五年間，工廠僱用逾 1,200 人，據台灣報紙報導，生產了超過四百萬把平價吉他；依 Yamaha 所述，外銷七十多個國家。2007 年 1 月，生產移往中國與印尼，工廠隨之關閉。2011 年，高雄市勞工博物館以特展記錄這座城市的吉他產業，部分前員工則轉而投入手工製琴。台灣本身的吉他製造商，詳見<a href=\"taiwan.html\">台灣</a>頁。" } }
          ] },
        { t:"p",
          text:{
            en:"The result is visible in the trade figures. Japan now imports far more guitars than it exports. In 2025, according to UN Comtrade data compiled by a trade-analysis service, Japan imported about US$108 million worth of electric guitars and similar amplified instruments (HS 9207.90) — the fifth-largest import market in the world — mainly from the United States, China and Indonesia, and exported about US$53 million. For acoustic guitars and other plucked string instruments (HS 9202.90), imports were worth US$38.6 million in 2024; by weight 70% came from China, but by value the largest supplier was the United States, whose guitars are much more expensive.",
            ja:"その結果は貿易の数字に表れている。いまの日本は、輸出よりはるかに多くのギターを輸入している。国連の貿易統計（UN Comtrade）をまとめた貿易分析サービスによれば、二〇二五年、日本はエレキギターなど電気で増幅する楽器（HS 9207.90）を約1億800万ドル分輸入し——世界で五番目に大きな輸入市場である——主にアメリカ、中国、インドネシアから入れ、約5,300万ドル分を輸出した。アコースティックギターなどの撥弦楽器（HS 9202.90）の輸入は、二〇二四年に3,860万ドルだった。重さでは七割が中国からだが、金額では最大の供給国は、ギターがずっと高価なアメリカである。",
            zh:"結果反映在貿易數字上。日本如今進口的吉他遠多於出口。根據一家貿易分析服務彙整的聯合國貿易統計（UN Comtrade）資料，2025 年日本進口電吉他等電聲放大樂器（HS 9207.90）約 1.08 億美元——為全球第五大進口市場——主要來自美國、中國與印尼；出口約 5,300 萬美元。木吉他等撥弦樂器（HS 9202.90）的進口額在 2024 年為 3,860 萬美元；按重量有七成來自中國，但按金額，最大供應國是吉他單價高得多的美國。" } },
        { t:"table",
          caption:{
            en:"Japan's trade in guitars (US$ million, UN Comtrade)",
            ja:"日本のギターの貿易（百万ドル、UN Comtrade）",
            zh:"日本吉他貿易（百萬美元，UN Comtrade）" },
          cols:[
            { en:"Item", ja:"品目", zh:"品項" },
            { en:"Year", ja:"年", zh:"年" },
            { en:"Imports", ja:"輸入", zh:"進口" },
            { en:"Exports", ja:"輸出", zh:"出口" },
            { en:"Main suppliers", ja:"主な輸入元", zh:"主要來源" }
          ],
          numCols:[2, 3],
          rows:[
            [
              { en:"Electric guitars etc. (HS 9207.90)", ja:"エレキギター等（HS 9207.90）", zh:"電吉他等（HS 9207.90）" },
              "2025",
              "108",
              "53",
              { en:"USA 38%, China 32%, Indonesia 18%", ja:"アメリカ38%、中国32%、インドネシア18%", zh:"美國 38%、中國 32%、印尼 18%" }
            ],
            [
              {
                en:"Acoustic and other plucked (HS 9202.90)",
                ja:"アコースティック等の撥弦楽器（HS 9202.90）",
                zh:"木吉他等撥弦樂器（HS 9202.90）" },
              "2024",
              "38.6",
              "—",
              {
                en:"By value: USA 38%, China 36%, Mexico 7.5%",
                ja:"金額で：アメリカ38%、中国36%、メキシコ7.5%",
                zh:"按金額：美國 38%、中國 36%、墨西哥 7.5%" }
            ],
            [
              {
                en:"Acoustic and other plucked (HS 9202.90)",
                ja:"アコースティック等の撥弦楽器（HS 9202.90）",
                zh:"木吉他等撥弦樂器（HS 9202.90）" },
              "2021",
              "57.5",
              "—",
              { en:"—", ja:"—", zh:"—" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: UN Comtrade data as compiled by GTAIC market reports (HS 920790, 920290); Yamaha Taiwan and China Times (Kaohsiung factory); Morris and Ibanez company histories. HS 9202.90 also includes some non-guitar instruments.",
            ja:"出典：GTAICの市場報告がまとめたUN Comtradeのデータ（HS 920790、920290）、台湾ヤマハと中国時報（高雄工場）、モーリスとアイバニーズの社史。HS 9202.90にはギター以外の楽器も一部含まれる。",
            zh:"資料來源：GTAIC 市場報告彙整之 UN Comtrade 資料（HS 920790、920290）；台灣山葉與《中國時報》（高雄工廠）；Morris 與 Ibanez 公司沿革。HS 9202.90 亦含部分非吉他樂器。" } }
      ] },
    { t:"section",
      id:"numbers",
      title:{ en:"The industry in numbers", ja:"数字で見る産業", zh:"數字中的產業" },
      jp:"統計",
      body:[
        { t:"p",
          text:{
            en:"Two official statistics measure the Japanese guitar industry, and they count different things. The first is METI's monthly Current Production Survey, which covers the larger manufacturers. For guitars including electric guitars it recorded production of 90,000 instruments in 2023 — up 7.4% on the year and the third year of growth, but only 41.6% of the 2007 level. Shipments in the same survey were larger, 191,000 instruments worth ¥8,705 million, because they also include instruments the reporting firms obtain from other producers and sell on; that value was the highest since 2007 and the sixth rise in a row, and the average price per instrument, about ¥46,000, was up 5.2%. Monthly figures show the growth continuing: in October 2025 shipments were worth ¥930 million, 16.4% more than a year earlier.",
            ja:"日本のギター産業を測る公的な統計は二つあり、数えるものが違う。第一は経済産業省の月々の生産動態統計で、規模の大きいメーカーを対象とする。ギター（電気ギターを含む）について、二〇二三年の生産は九万本で、前年より7.4%増え、三年続けての増加だったが、二〇〇七年の水準の41.6%にすぎない。同じ統計の出荷はそれより多く、十九万一千本、87億500万円だった。報告する会社がほかの生産者から受け入れて売る楽器も含むからである。この金額は二〇〇七年以降で最も高く、六年続けての増加で、一本あたりの平均は約4万6千円と5.2%上がった。月々の数字は伸びが続いていることを示し、二〇二五年十月の出荷額は9億3千万円で、前の年の同じ月より16.4%多かった。",
            zh:"衡量日本吉他產業的官方統計有兩種，計算的對象不同。第一種是經濟產業省每月的《生產動態統計》，涵蓋較大的製造商。以吉他（含電吉他）而言，2023 年產量為 9 萬把，比前一年增加 7.4%，連續第三年成長，但僅為 2007 年水準的 41.6%。同一統計的出貨量較多，為 19.1 萬把、金額 87 億 500 萬日圓，因為其中也包含申報企業向其他生產者取得後轉售的樂器；此金額為 2007 年以來最高，且連續六年增加，每把平均約 4.6 萬日圓，上升 5.2%。月度數字顯示成長仍在持續：2025 年 10 月出貨額為 9.3 億日圓，比前一年同月多 16.4%。" } },
        { t:"p",
          text:{
            en:"The second source is the establishment survey of manufacturing — the Census of Manufactures until 2020, the Economic Census for Business Activity for 2021 and the Economic Structure Survey since then — which reports the value of guitars shipped from factories in each prefecture. On this measure the national total rose from about ¥4.7 billion in 2014 to ¥9.7 billion in 2021 and roughly ¥10.7 billion in 2024: fewer guitars than in the boom years, but more expensive ones. Nagano accounted for roughly 45% to 54% of the value throughout. The industry body's own survey for 2022 credited a popular television anime about a teenage band with lifting demand for entry-level guitars.",
            ja:"第二の出どころは製造業の事業所の調査——二〇二〇年までの工業統計、二〇二一年の経済センサス－活動調査、それ以降の経済構造実態調査——で、都道府県ごとの工場から出荷されたギターの金額を示す。この尺度では、全国の合計は二〇一四年の約47億円から、二〇二一年の97億円、二〇二四年の約107億円へと増えた。ブームの時代より本数は少ないが、一本一本は高くなった。長野はこの間ずっと金額のおよそ45〜54%を占めた。業界団体自身の二〇二二年の調査は、十代のバンドを描いた人気のテレビアニメが入門用ギターの需要を押し上げたとした。",
            zh:"第二種來源是製造業事業所調查——2020 年以前的《工業統計》、2021 年的《經濟普查－活動調查》，以及其後的《經濟構造實態調查》——列出各都道府縣工廠出貨的吉他金額。依此口徑，全國總額從 2014 年約 47 億日圓，增加到 2021 年的 97 億日圓，2024 年約 107 億日圓：把數比熱潮年代少，但每把都更貴。長野在這段期間始終占金額的約 45%～54%。業界團體自己的 2022 年調查則認為，一部描寫青少年樂團的熱門電視動畫帶動了入門吉他的需求。" } },
        { t:"figure",
          caption:{
            en:"Value of guitars (including electric guitars) shipped from factories in Japan, ¥ billion. 2014–2019: Census of Manufactures (establishments with four or more employees); 2021: Economic Census for Business Activity; 2024: derived from Nagano's reported value (¥5,755 million) and share (53.7%) in the Economic Structure Survey. Surveys differ in coverage, so the series is indicative.",
            ja:"日本の工場から出荷されたギター（電気ギターを含む）の金額、十億円。二〇一四〜二〇一九年は工業統計（従業者四人以上の事業所）、二〇二一年は経済センサス－活動調査、二〇二四年は経済構造実態調査の長野の金額（57億5,500万円）と割合（53.7%）から算出。調査ごとに対象が異なるため、系列は目安である。",
            zh:"日本工廠出貨之吉他（含電吉他）金額，單位十億日圓。2014～2019 年為《工業統計》（員工四人以上事業所）；2021 年為《經濟普查－活動調查》；2024 年由《經濟構造實態調查》中長野的金額（57.55 億日圓）與占比（53.7%）推算。各調查涵蓋範圍不同，序列僅供參考。" },
          svg:function(lang, L){ return GIFU.fig.cols(lang, L, {
            title:{ en:"Guitar shipments from Japanese factories", ja:"日本の工場のギター出荷額", zh:"日本工廠吉他出貨額" },
            unit:{ en:"¥ billion", ja:"十億円", zh:"十億日圓" }, dec:1, h:180, hl:["2024"],
            items:[ { x:"2014", v:4.7 }, { x:"2016", v:6.32 }, { x:"2019", v:7.24 }, { x:"2021", v:9.74 }, { x:"2024", v:10.72 } ] }); } },
        { t:"table",
          caption:{
            en:"Guitar shipments by prefecture — the five leading prefectures",
            ja:"都道府県別のギター出荷——上位五県",
            zh:"各縣吉他出貨——前五名" },
          cols:[
            { en:"Prefecture", ja:"県", zh:"縣" },
            { en:"2016 value (¥ bn)", ja:"2016年 金額（十億円）", zh:"2016 年金額（十億日圓）" },
            { en:"2019 value (¥ bn)", ja:"2019年 金額（十億円）", zh:"2019 年金額（十億日圓）" },
            { en:"2021 value (¥ bn)", ja:"2021年 金額（十億円）", zh:"2021 年金額（十億日圓）" },
            { en:"2021 units", ja:"2021年 本数", zh:"2021 年把數" },
            { en:"2021 value per guitar (¥)", ja:"2021年 一本あたり（円）", zh:"2021 年每把金額（日圓）" }
          ],
          numCols:[1, 2, 3, 4, 5],
          keyCol:true,
          rows:[
            [{ en:"Nagano", ja:"長野", zh:"長野" }, "2.98", "3.45", "4.34", "106,042", "40,900"],
            [{ en:"Saitama", ja:"埼玉", zh:"埼玉" }, "0.89", "0.98", "1.89", "44,270", "42,700"],
            [{ en:"Aichi", ja:"愛知", zh:"愛知" }, "—", "—", "1.30", "21,440", "60,600"],
            [{ en:"Gifu", ja:"岐阜", zh:"岐阜" }, "1.19", "1.24", "1.23", "16,552", "74,300"],
            [{ en:"Shizuoka", ja:"静岡", zh:"靜岡" }, "0.44", "0.77", "0.86", "17,626", "48,800"],
            [{ en:"Japan total", ja:"全国", zh:"全國" }, "6.32", "7.24", "9.74", "—", "—"]
          ] },
        { t:"figure",
          caption:{
            en:"Share of the value of guitar shipments by prefecture, 2021 (national total ¥9.74 billion). Source: METI, Economic Census for Business Activity 2021, as tabulated by prefecture.",
            ja:"都道府県別のギター出荷額の割合、二〇二一年（全国計97億4千万円）。出典：経済産業省「経済センサス－活動調査」二〇二一年の都道府県別集計。",
            zh:"2021 年各縣吉他出貨金額占比（全國合計 97.4 億日圓）。資料來源：日本經濟產業省《經濟普查－活動調查》2021 年分縣統計。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Where Japan's guitars are made (2021)", ja:"ギターはどこでつくられるか（二〇二一年）", zh:"日本吉他產自何處（2021 年）" },
            labelW:170, unit:"%", dec:1, max:50,
            items:[
              { n:{ en:"Nagano", ja:"長野", zh:"長野" }, v:44.6, lab:{ en:"44.6% · ¥4.34 bn", ja:"44.6%・43.4億円", zh:"44.6%・43.4 億日圓" } },
              { n:{ en:"Saitama", ja:"埼玉", zh:"埼玉" }, v:19.4, lab:{ en:"19.4% · ¥1.89 bn", ja:"19.4%・18.9億円", zh:"19.4%・18.9 億日圓" } },
              { n:{ en:"Aichi", ja:"愛知", zh:"愛知" }, v:13.3, lab:{ en:"13.3% · ¥1.30 bn", ja:"13.3%・13.0億円", zh:"13.3%・13.0 億日圓" } },
              { n:{ en:"Gifu", ja:"岐阜", zh:"岐阜" }, v:12.6, f:"#EADCC1", lab:{ en:"12.6% · ¥1.23 bn", ja:"12.6%・12.3億円", zh:"12.6%・12.3 億日圓" } },
              { n:{ en:"Shizuoka", ja:"静岡", zh:"靜岡" }, v:8.8, lab:{ en:"8.8% · ¥0.86 bn", ja:"8.8%・8.6億円", zh:"8.8%・8.6 億日圓" } },
              { n:{ en:"Others", ja:"その他", zh:"其他" }, v:1.3, f:"#E6E4E0", lab:{ en:"1.3%", ja:"1.3%", zh:"1.3%" } }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: METI Current Production Survey (textiles and daily goods), guitars including electric guitars, 2023 annual and October 2025 monthly figures; METI Census of Manufactures (2014, 2016, 2019), Economic Census for Business Activity (2021) and Economic Structure Survey (2024), shipments by prefecture; Japan Musical Instruments Association survey for 2022. Values per guitar calculated.",
            ja:"出典：経済産業省「生産動態統計」（繊維・生活用品）ギター・電気ギター、二〇二三年の年計と二〇二五年十月の月次、経済産業省「工業統計」（二〇一四・二〇一六・二〇一九年）、「経済センサス－活動調査」（二〇二一年）、「経済構造実態調査」（二〇二四年）の都道府県別出荷、全国楽器協会の二〇二二年の調査。一本あたりの額は算出。",
            zh:"資料來源：日本經濟產業省《生產動態統計》（纖維、生活用品）吉他與電吉他 2023 年年計與 2025 年 10 月月計；《工業統計》（2014、2016、2019 年）、《經濟普查－活動調查》（2021 年）與《經濟構造實態調查》（2024 年）分縣出貨；日本全國樂器協會 2022 年調查。每把金額為推算。" } }
      ] },
    { t:"section",
      id:"gifu",
      title:{ en:"Gifu's place", ja:"岐阜の位置", zh:"岐阜的位置" },
      jp:"可児と中津川",
      body:[
        { t:"p",
          text:{
            en:"Gifu is a small producer by number but a significant one by value. In the Census of Manufactures it ranked second in Japan in both 2016 (¥1.19 billion, 18.8% of the national value, 17,962 guitars) and 2019 (¥1.24 billion, 17.1%, 16,744 guitars); in 2021 it slipped to fourth as Saitama and Aichi grew, although its own output hardly changed (¥1.23 billion, 16,552 guitars). The striking figure is the value per instrument: about ¥74,000 for a guitar shipped from Gifu in 2021, against about ¥41,000 from Nagano — the difference between a prefecture of electric-guitar factories and one of acoustic guitars made largely by hand. Almost all of Gifu's output comes from two companies with their own pages in this book: <a href=\"yairi.html\">Yairi</a> in Kani, whose roots go back to the Suzuki violin factory in Nagoya, and <a href=\"takamine.html\">Takamine</a> in Nakatsugawa, founded in the woodworking town of Sakashita in 1959. Around them are the small workshops and repairers described on the <a href=\"luthiers.html\">luthiers</a> page.",
            ja:"岐阜は本数では小さいが、金額では重要な産地である。工業統計では二〇一六年（11億9千万円、全国の18.8%、一万七千九百六十二本）と二〇一九年（12億4千万円、17.1%、一万六千七百四十四本）のどちらも全国第二位で、二〇二一年には埼玉と愛知が伸びて第四位に下がったが、自らの生産はほとんど変わらなかった（12億3千万円、一万六千五百五十二本）。目を引くのは一本あたりの金額で、二〇二一年に岐阜から出荷されたギターは約7万4千円、長野は約4万1千円である。エレキギターの工場の県と、主に手でつくるアコースティックギターの県との違いである。岐阜の生産のほとんどは、この本に頁をもつ二社による。名古屋の鈴木バイオリンの工場に根をもつ可児の<a href=\"yairi.html\">ヤイリ</a>と、一九五九年に木工の町、坂下で創業した中津川の<a href=\"takamine.html\">タカミネ</a>である。そのまわりに、<a href=\"luthiers.html\">製作家</a>の頁で述べる小さな工房や修理職人がいる。",
            zh:"以數量而言岐阜是小產地，以金額而言卻舉足輕重。在《工業統計》中，岐阜在 2016 年（11.9 億日圓，占全國 18.8%，17,962 把）與 2019 年（12.4 億日圓，17.1%，16,744 把）都名列全國第二；2021 年因埼玉與愛知成長而退居第四，但自身產量幾乎不變（12.3 億日圓，16,552 把）。最引人注目的是每把金額：2021 年岐阜出貨的吉他約 7.4 萬日圓，長野約 4.1 萬日圓——這正是電吉他工廠之縣與主要以手工製作木吉他之縣的差別。岐阜的產量幾乎全出自本書各有專頁的兩家公司：根源可追溯至名古屋鈴木小提琴工廠的可兒 <a href=\"yairi.html\">K.Yairi</a>，以及 1959 年創立於木工小鎮坂下的中津川 <a href=\"takamine.html\">Takamine</a>。在它們周圍，還有<a href=\"luthiers.html\">製琴師</a>頁所介紹的小工坊與修理師。" } },
        { t:"p",
          text:{
            en:"The geography explains much. The Kiso River links the old violin valley of Kiso-Fukushima, the timber towns of Sakashita and Nakatsugawa, and Kani with the Nagoya plain, and the same corridor that once carried Kiso's hinoki down to Nagoya carried craftsmen, machines and orders. Suzuki's wartime move to Ena, the Yairi family's flight to Kani and the founding of Takamine in a village full of woodworkers are all chapters of one regional story, in which instrument making followed the wood and the woodworkers upstream.",
            ja:"地理が多くを説明する。木曽川は、かつてのバイオリンの谷である木曽福島、材木の町である坂下や中津川、そして可児を名古屋の平野と結び、かつて木曽のヒノキを名古屋へ運んだ同じ回廊が、職人と機械と注文を運んだ。戦時の鈴木の恵那への移転、矢入家の可児への疎開、木工職人にあふれた村でのタカミネの創業は、すべて一つの地域の物語の章であり、楽器づくりは木と木工の職人を追って川をさかのぼった。",
            zh:"地理說明了許多事。木曾川把昔日的小提琴之谷木曾福島、木材小鎮坂下與中津川，以及可兒，與名古屋平原連在一起；過去把木曾扁柏運往名古屋的同一條走廊，也運送了工匠、機器與訂單。鈴木在戰時遷往惠那、矢入家族疏散到可兒、Takamine 在滿是木工匠人的村落創業，都是同一個地區故事的篇章：樂器製作追隨著木材與木工匠人，沿河溯流而上。" } }
      ] },
    { t:"section",
      id:"today",
      title:{ en:"Made in Japan today", ja:"いまのメイド・イン・ジャパン", zh:"今日的日本製造" },
      jp:"高級化と輸出",
      body:[
        { t:"p",
          text:{
            en:"Japan's guitar industry is now far smaller in volume than at its peak, but it has found a stable place at the upper end of the market. Japanese-made instruments are sold as premium lines by global brands — Ibanez's Prestige, Yamaha's top acoustics, Fender's own Made in Japan range, which continued after Fender took over Japanese distribution from its licensee in 2015 — and by specialist domestic firms and custom shops. The old factories also sell know-how: finishing, precision woodworking and quality control learned on guitars now serve furniture, car interiors and other industries. The risks are familiar ones: an ageing workforce, dependence on imported tonewoods whose trade is increasingly regulated (see <a href=\"cites.html\">Rosewood &amp; the Law</a>), and a yen whose swings can make exports suddenly cheap or suddenly dear.",
            ja:"日本のギター産業は、いまや量では最盛期よりはるかに小さいが、市場の上の端に安定した居場所を見つけた。日本製の楽器は、世界のブランドの高級な系列——アイバニーズのプレステージ、ヤマハの上位のアコースティック、二〇一五年にフェンダーがライセンス先から日本での販売を引き継いだあとも続く、フェンダー自身のメイド・イン・ジャパンの系列——として、また国内の専門の会社やカスタムショップによって売られている。古い工場はノウハウも売る。ギターで身につけた塗装、精密な木工、品質管理は、いまや家具や自動車の内装やほかの産業に役立っている。危うさはおなじみのものである。働き手の高齢化、取引がますます規制される輸入トーンウッドへの依存（<a href=\"cites.html\">ローズウッドと条約</a>を参照）、そして振れるたびに輸出を急に安くも高くもする円である。",
            zh:"日本吉他產業如今的產量遠低於全盛期，卻在市場高端找到了穩定的位置。日本製樂器以國際品牌的高階系列販售——Ibanez 的 Prestige、Yamaha 的高階木吉他，以及 2015 年 Fender 從授權商手中收回日本銷售後仍持續的 Fender 自家 Made in Japan 系列——也由國內專業公司與客製工坊推出。老工廠也在販賣技術：在吉他上練就的塗裝、精密木工與品質管理，如今服務於家具、汽車內裝與其他產業。風險則是老問題：勞動力高齡化、依賴貿易管制日益嚴格的進口音木（見<a href=\"cites.html\">玫瑰木與公約</a>），以及一有波動就讓出口忽然變便宜或變昂貴的日圓。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Production, 2023", ja:"生産（二〇二三年）", zh:"產量（2023 年）" },
              v:{ en:"90,000", ja:"9万本", zh:"9 萬把" },
              d:{ en:"Guitars incl. electric; 41.6% of 2007.", ja:"電気ギターを含む。二〇〇七年の41.6%。", zh:"含電吉他；為 2007 年的 41.6%。" } },
            { k:{ en:"Shipment value, 2023", ja:"出荷額（二〇二三年）", zh:"出貨額（2023 年）" },
              v:{ en:"¥8.7 bn", ja:"87億円", zh:"87 億日圓" },
              d:{
                en:"Highest since 2007 (Current Production Survey).",
                ja:"二〇〇七年以降で最高（生産動態統計）。",
                zh:"2007 年以來最高（生產動態統計）。" } },
            { k:{ en:"Nagano's share, 2024", ja:"長野の割合（二〇二四年）", zh:"長野占比（2024 年）" },
              v:"53.7%",
              d:{ en:"¥5,755 million of guitar shipments.", ja:"ギター出荷額57億5,500万円。", zh:"吉他出貨額 57.55 億日圓。" } },
            { k:{ en:"Gifu, 2021", ja:"岐阜（二〇二一年）", zh:"岐阜（2021 年）" },
              v:{ en:"¥1.23 bn", ja:"12.3億円", zh:"12.3 億日圓" },
              d:{ en:"16,552 guitars; fourth in Japan.", ja:"一万六千五百五十二本、全国第四位。", zh:"16,552 把；全國第四。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: METI Current Production Survey; Nagano Prefecture (Economic Structure Survey 2024); Economic Census for Business Activity 2021; company information from Fujigen, Ibanez and Fender Japan histories.",
            ja:"出典：経済産業省「生産動態統計」、長野県（二〇二四年経済構造実態調査）、「経済センサス－活動調査」二〇二一年、フジゲン・アイバニーズ・フェンダー・ジャパンの沿革。",
            zh:"資料來源：日本經濟產業省《生產動態統計》；長野縣（2024 年經濟構造實態調查）；《經濟普查－活動調查》2021 年；Fujigen、Ibanez 與 Fender Japan 沿革。" } }
      ] },
    { t:"related",
      items:[
        { href:"yairi.html",
          why:{
            en:"The Kani maker, born in Nagoya's violin trade.",
            ja:"名古屋のバイオリンの職から生まれた可児のメーカー。",
            zh:"源自名古屋小提琴業的可兒製造商。" } },
        { href:"takamine.html",
          why:{ en:"The Nakatsugawa maker and the electro-acoustic guitar.", ja:"中津川のメーカーとエレアコ。", zh:"中津川的製造商與電木吉他。" } },
        { href:"luthiers.html",
          why:{ en:"Small workshops and repairers in Gifu.", ja:"岐阜の小さな工房と修理職人。", zh:"岐阜的小工坊與修理師。" } },
        { href:"cites.html",
          why:{ en:"The rules that now govern guitar woods.", ja:"いまギターの木を縛る規則。", zh:"如今規範吉他木材的法規。" } },
        { href:"taiwan.html", why:{ en:"Taiwan's own guitar-making story.", ja:"台湾のギターづくりの物語。", zh:"台灣自己的吉他製造故事。" } }
      ] }
  ] };

/* ---- --------------------------------------------- cites */
GIFU.pages["cites"] = { kicker:{ en:"Sound · 10", ja:"音 · 10", zh:"聲音 · 10" },
  title:{ en:"Rosewood & the Law", ja:"ローズウッドと条約", zh:"玫瑰木與公約" },
  jp:"ワシントン条約",
  lede:{
    en:"Rosewood, mahogany and ebony have been the classic woods of the guitar for more than a century, and all of them now come with rules. This page explains the Convention on International Trade in Endangered Species — CITES, known in Japan as the Washington Convention — and how its listings, from Brazilian rosewood in 1992 to the whole rosewood genus in 2017, have shaped what guitars are made of; how an exemption for musical instruments was won in 2019; and how laws against illegal logging in the United States, the European Union and Japan add a second layer of paperwork.",
    ja:"ローズウッド、マホガニー、エボニーは、一世紀以上にわたりギターの定番の木であり、いまやそのすべてに規則がついてまわる。この頁は、絶滅のおそれのある野生動植物の種の国際取引に関する条約——CITES、日本ではワシントン条約と呼ばれる——を説明し、一九九二年のブラジリアン・ローズウッドから二〇一七年のローズウッドの属全体まで、その掲載がギターの材料をどう変えてきたか、二〇一九年に楽器の除外がどう勝ち取られたか、そしてアメリカ、欧州連合、日本の違法伐採対策の法律が、どのように二つめの書類の層を加えるかを述べる。",
    zh:"玫瑰木、桃花心木與黑檀，一百多年來一直是吉他的經典木材，如今全都附帶了法規。本頁說明《瀕臨絕種野生動植物國際貿易公約》——CITES，日本稱為「華盛頓公約」——以及它的附錄列名，從 1992 年的巴西玫瑰木到 2017 年整個玫瑰木屬，如何改變了吉他的用材；2019 年樂器豁免如何爭取而來；以及美國、歐盟與日本打擊非法伐木的法律，如何再加上一層文件手續。" },
  body:[
    { t:"section",
      id:"basics",
      title:{ en:"What CITES is", ja:"ワシントン条約とは", zh:"什麼是 CITES" },
      jp:"条約の仕組み",
      body:[
        { t:"p",
          text:{
            en:"CITES was signed in Washington on 3 March 1973 and came into force on 1 July 1975. It does not ban the use of any species; it controls international trade in them, through a system of permits and certificates issued by each country's management authority on the advice of a scientific authority. By June 2025 it had 185 Parties — 184 states and the European Union — and it covered some 40,900 species, subspecies and populations of animals and plants. Every two or three years the Parties meet at a Conference of the Parties (CoP) to vote on proposals to add species, move them between appendices or change the rules attached to them. Timber came late to the convention, but since the 1990s trees have become one of its largest and most contested subjects, and a handful of those trees happen to be the ones guitar makers care about most.",
            ja:"ワシントン条約は一九七三年三月三日にワシントンで署名され、一九七五年七月一日に発効した。どの種の利用も禁じるものではなく、国際取引を管理するもので、各国の管理当局が科学当局の助言にもとづいて発給する許可書と証明書の仕組みによる。二〇二五年六月の時点で締約国は百八十五——百八十四の国と欧州連合——で、動物と植物の約四万九百の種・亜種・個体群を対象とする。締約国は二、三年ごとに締約国会議（CoP）に集まり、種を加え、附属書のあいだで移し、それに付く規則を変える提案を投票で決める。木材が条約の対象となったのは遅かったが、一九九〇年代から樹木は最も大きく、最も争われる主題の一つとなった。そしてそのうちのひと握りが、たまたまギターのつくり手が最も大切にする木なのである。",
            zh:"CITES 於 1973 年 3 月 3 日在華盛頓簽署，1975 年 7 月 1 日生效。它並不禁止利用任何物種，而是管制其國際貿易：由各國的管理機關依科學機關的建議，核發許可證與證明書。截至 2025 年 6 月，締約方共 185 個——184 個國家加上歐盟——涵蓋約 40,900 個動植物物種、亞種與族群。締約方每兩、三年召開一次締約方大會（CoP），表決新增物種、在附錄之間調整物種，或修改其附帶規定的提案。木材進入公約的時間較晚，但自 1990 年代起，樹木已成為公約中規模最大、爭議最多的議題之一——而其中少數幾種，恰好正是吉他製作者最在意的木材。" } },
        { t:"defs",
          items:[
            { term:{ en:"Appendix I", ja:"附属書I", zh:"附錄一" },
              jp:"商業取引の原則禁止",
              def:{
                en:"Species threatened with extinction. Commercial international trade in wild specimens is not permitted; non-commercial movements need both an export and an import permit. Brazilian rosewood is the only guitar wood in this appendix.",
                ja:"絶滅のおそれのある種。野生由来の標本の国際的な商業取引は認められず、商業目的でない移動にも輸出と輸入の両方の許可書が要る。ギターの木でここに入っているのはブラジリアン・ローズウッドだけである。",
                zh:"瀕臨絕種的物種。野生來源標本的國際商業貿易不被允許；非商業移動也需同時取得出口與進口許可。吉他木材中只有巴西玫瑰木列在此附錄。" } },
            { term:{ en:"Appendix II", ja:"附属書II", zh:"附錄二" },
              jp:"許可制の取引",
              def:{
                en:"Species not necessarily threatened now but which could become so unless trade is controlled, together with look-alike species that are hard to tell apart from them. Trade is allowed with an export permit, issued only if it will not harm the species' survival and the specimen was legally obtained. Most listed tonewoods are here.",
                ja:"いま絶滅のおそれがあるとはかぎらないが、取引を管理しなければそうなりうる種と、それと見分けにくい類似種。輸出許可書があれば取引でき、許可書は種の存続を損なわず、合法に得られたものにかぎり発給される。掲載されたトーンウッドの多くはここにある。",
                zh:"目前未必瀕危、但若不管制貿易便可能陷入危機的物種，以及難以區分的相似物種。憑出口許可即可貿易，而許可僅在不危及物種存續、且標本為合法取得時核發。多數列名的音木屬於此附錄。" } },
            { term:{ en:"Appendix III", ja:"附属書III", zh:"附錄三" },
              jp:"一国の要請",
              def:{
                en:"Species protected in at least one country that has asked other Parties to help monitor its exports. Big-leaf mahogany passed through this appendix in the 1990s before moving to Appendix II.",
                ja:"少なくとも一つの国が保護し、その輸出の監視をほかの締約国に求めた種。オオバマホガニーは一九九〇年代にこの附属書をへて附属書IIへ移った。",
                zh:"至少有一國予以保護、並請求其他締約方協助監督其出口的物種。大葉桃花心木在 1990 年代曾列於此附錄，後來才移入附錄二。" } },
            { term:{ en:"Annotation", ja:"注釈", zh:"註解" },
              jp:"対象となる部分",
              def:{
                en:"A note attached to a listing that says which parts and products are covered. For guitar makers this is often the most important detail: an annotation that covers only “logs, sawn wood, veneer sheets and plywood” leaves finished guitars free, while one that covers “all parts and derivatives” catches every rosewood fingerboard.",
                ja:"掲載に付けられ、どの部分と製品が対象かを示す注記。ギターのつくり手にとって、これはしばしば最も大切な細部である。「丸太、製材、単板、合板」だけを対象とする注釈なら完成品のギターは自由だが、「すべての部分と派生物」を対象とする注釈は、ローズウッドの指板の一枚一枚までとらえる。",
                zh:"附在列名上、說明哪些部位與製品受管制的註記。對吉他製作者而言，這往往是最關鍵的細節：若註解只涵蓋「原木、鋸材、單板與合板」，成品吉他便不受限；若涵蓋「所有部分與衍生物」，每一片玫瑰木指板都逃不過。" } },
            { term:{ en:"Pre-Convention", ja:"条約適用前", zh:"公約適用前" },
              jp:"プレ・コンベンション",
              def:{
                en:"A specimen acquired before its species was listed. It can be traded with a pre-Convention certificate, which is why the date a guitar or a stock of wood was acquired matters so much for Brazilian rosewood.",
                ja:"その種が掲載される前に取得された標本。条約適用前証明書があれば取引できる。ブラジリアン・ローズウッドで、ギターや材の在庫を取得した日付がこれほど重要なのはそのためである。",
                zh:"在該物種列名之前即已取得的標本，可憑「公約適用前證明書」進行貿易。這正是為何對巴西玫瑰木而言，吉他或木料庫存的取得日期如此重要。" } }
          ] },
        { t:"p",
          text:{
            en:"Japan signed the convention in 1973 and became a Party on 4 November 1980. At the border it is implemented through the Foreign Exchange and Foreign Trade Act and the export and import trade control orders made under it: the Ministry of Economy, Trade and Industry (METI) issues export permits and import approvals, and customs checks shipments. Trade inside Japan in the most endangered species is regulated separately, by the Act on Conservation of Endangered Species of Wild Fauna and Flora of 1992, administered by the Ministry of the Environment. Japan also has a direct link with the story of guitar woods: the eighth Conference of the Parties, at which Brazilian rosewood was listed in Appendix I, met in Kyoto in 1992.",
            ja:"日本は一九七三年に条約に署名し、一九八〇年十一月四日に締約国となった。国境では、外国為替及び外国貿易法（外為法）と、それにもとづく輸出貿易管理令・輸入貿易管理令を通じて実施され、経済産業省が輸出の許可と輸入の承認を出し、税関が貨物を確かめる。国内での最も絶滅のおそれの高い種の取引は、別に、環境省が所管する一九九二年の「絶滅のおそれのある野生動植物の種の保存に関する法律」（種の保存法）で規制される。日本はギターの木の物語とも直接につながっている。ブラジリアン・ローズウッドを附属書Iに掲載した第八回締約国会議は、一九九二年に京都で開かれたのである。",
            zh:"日本於 1973 年簽署公約，1980 年 11 月 4 日成為締約方。在邊境上，公約透過《外匯及對外貿易法》及其下的出口、進口貿易管理令實施：經濟產業省核發出口許可與進口承認，海關則負責查驗貨物。至於日本國內最瀕危物種的交易，另由環境省主管、1992 年制定的《瀕臨絕種野生動植物種保存法》（種之保存法）規範。日本與吉他木材的故事也有直接淵源：將巴西玫瑰木列入附錄一的第八屆締約方大會，正是 1992 年在京都召開的。" } },
        { t:"tiny",
          text:{
            en:"Sources: CITES Secretariat (text of the convention, list of Parties); METI (CITES import and export procedures); Ministry of the Environment (Species Conservation Act).",
            ja:"出典：ワシントン条約事務局（条約の本文、締約国一覧）、経済産業省（ワシントン条約の輸出入手続き）、環境省（種の保存法）。",
            zh:"資料來源：CITES 秘書處（公約條文、締約方名單）；日本經濟產業省（CITES 進出口程序）；日本環境省（種之保存法）。" } }
      ] },
    { t:"section",
      id:"nigra",
      title:{ en:"Brazilian rosewood", ja:"ブラジリアン・ローズウッド", zh:"巴西玫瑰木" },
      jp:"ハカランダ",
      body:[
        { t:"p",
          text:{
            en:"<em>Dalbergia nigra</em>, from the Atlantic Forest of eastern Brazil, is dense — close to 1.0 g/cm³ — dark, oily and often dramatically figured, and it rings like a bell when tapped. For much of the twentieth century it was the wood of choice for the backs and sides of the finest steel-string and classical guitars, and for fingerboards and bridges. In Japan it is known by its Portuguese name, <em>hakaranda</em> (jacarandá), and the word alone still signals a top-of-the-range instrument. The Atlantic Forest, however, was cleared on a vast scale for farms, plantations and cities, and the big old trees that yielded quartersawn guitar sets became rare. At the Kyoto conference in 1992 the species was listed in Appendix I, with effect from 11 June 1992.",
            ja:"ブラジル東部の大西洋岸森林に育つ<em>ダルベルギア・ニグラ</em>は、重く——比重は1.0近い——、暗い色で油分が多く、しばしば目を見張る杢をもち、叩けば鐘のように響く。二十世紀の大半、上等なスチール弦やクラシックのギターの裏板と側板、そして指板やブリッジに選ばれる木であった。日本ではポルトガル語の名で「ハカランダ」（ジャカランダ）と呼ばれ、その一語だけでいまも最上級の楽器を意味する。しかし大西洋岸森林は、農地、植林地、都市のために大規模に切り開かれ、柾目のギター材が取れる大きな古木は少なくなった。一九九二年の京都の会議で、この種は附属書Iに掲載され、一九九二年六月十一日から効力をもった。",
            zh:"產自巴西東部大西洋沿岸森林的 <em>Dalbergia nigra</em> 密度高——接近每立方公分 1.0 公克——色深、富含油脂，常有驚人的花紋，敲擊時聲如鐘鳴。二十世紀大部分時間裡，它是頂級鋼弦吉他與古典吉他背側板的首選，也用於指板與琴橋。在日本，它以葡萄牙語名「ハカランダ」（jacarandá）為人所知，光是這個詞就代表最高等級的樂器。然而大西洋沿岸森林因農地、人工林與城市而遭大規模砍伐，能取出徑切吉他料的大老樹變得稀少。在 1992 年的京都大會上，此物種被列入附錄一，自 1992 年 6 月 11 日起生效。" } },
        { t:"p",
          text:{
            en:"The listing did not make old Brazilian rosewood illegal to own, play or sell within a country; it made it very difficult to move across borders. Wood and instruments acquired before the listing can travel with pre-Convention certificates, and makers still build high-end guitars from stocks cut decades ago, but every such guitar needs documents to be exported or imported — even if the rosewood is only a bridge or a fingerboard, and even after the 2019 exemption for other rosewoods, which specifically excludes <em>D. nigra</em>. For a Japanese owner this means that a vintage hakaranda guitar can generally be sold at home without CITES paperwork, but not shipped to a buyer abroad without an export permit obtained through METI and an import permit from the destination country.",
            ja:"この掲載によって、古いブラジリアン・ローズウッドを国内でもつこと、弾くこと、売ることが違法になったわけではない。国境を越えて動かすことがとても難しくなったのである。掲載の前に取得された材や楽器は条約適用前証明書をつけて移動でき、つくり手はいまも何十年も前に挽いた在庫から高級なギターをつくるが、そうしたギターはどれも輸出入に書類を要する。ローズウッドがブリッジや指板だけであっても同じで、ニグラをはっきり除いている、ほかのローズウッドについての二〇一九年の除外のあとも変わらない。日本の持ち主にとっては、古いハカランダのギターは国内なら一般にワシントン条約の書類なしに売れるが、経済産業省を通じた輸出の許可と、相手国の輸入の許可なしには、海外の買い手へ送れないということである。",
            zh:"列名並未使擁有、演奏或在國內買賣老巴西玫瑰木變成違法；它讓跨越國界變得非常困難。列名前取得的木料與樂器，可憑公約適用前證明書移動；製琴師至今仍用數十年前鋸下的庫存製作高階吉他，但每一把這樣的吉他進出口都需要文件——即使玫瑰木只用在琴橋或指板上；即使在 2019 年針對其他玫瑰木的豁免之後也一樣，因為該豁免明文排除 <em>D. nigra</em>。對日本的琴主而言，這表示一把老巴西玫瑰木吉他在國內出售一般不需 CITES 文件，但若要寄給海外買家，就必須經由經濟產業省取得出口許可，並取得目的國的進口許可。" } },
        { t:"h3", text:{ en:"A timeline of rules for guitar woods", ja:"ギターの木をめぐる規則の年表", zh:"吉他木材法規年表" }, jp:"年表" },
        { t:"timeline",
          items:[
            { year:"1973–75",
              title:{ en:"CITES", ja:"ワシントン条約", zh:"CITES" },
              text:{
                en:"Signed in Washington in 1973; in force from 1975.",
                ja:"一九七三年にワシントンで署名、一九七五年に発効。",
                zh:"1973 年於華盛頓簽署；1975 年生效。" } },
            { year:"1980",
              title:{ en:"Japan joins", ja:"日本の加盟", zh:"日本加入" },
              text:{
                en:"The convention enters into force for Japan on 4 November.",
                ja:"十一月四日、日本について条約が発効。",
                zh:"11 月 4 日公約對日本生效。" } },
            { year:"1992",
              title:{ en:"Brazilian rosewood", ja:"ブラジリアン・ローズウッド", zh:"巴西玫瑰木" },
              text:{
                en:"Listed in Appendix I at the Kyoto conference; effective 11 June.",
                ja:"京都の会議で附属書Iに掲載。六月十一日発効。",
                zh:"於京都大會列入附錄一；6 月 11 日生效。" } },
            { year:"2003",
              title:{ en:"Big-leaf mahogany", ja:"オオバマホガニー", zh:"大葉桃花心木" },
              text:{
                en:"Neotropical populations in Appendix II (logs, sawn wood, veneer, plywood) from 15 November.",
                ja:"中南米の個体群が十一月十五日から附属書IIに（丸太、製材、単板、合板）。",
                zh:"中南美洲族群自 11 月 15 日列入附錄二（原木、鋸材、單板、合板）。" } },
            { year:"2008",
              title:{ en:"US Lacey Act", ja:"米レイシー法", zh:"美國雷斯法" },
              text:{
                en:"Amended on 22 May to cover plants and wood taken in breach of foreign laws.",
                ja:"五月二十二日の改正で、外国の法に反して得た植物と木材が対象に。",
                zh:"5 月 22 日修正，納入違反外國法律取得的植物與木材。" } },
            { year:"2013",
              title:{ en:"Madagascar and Central America", ja:"マダガスカルと中米", zh:"馬達加斯加與中美洲" },
              text:{
                en:"Madagascar rosewoods and ebonies, cocobolo and Honduras rosewood to Appendix II; the EU Timber Regulation applies from March.",
                ja:"マダガスカルのローズウッドとエボニー、ココボロ、ホンジュラス・ローズウッドが附属書IIへ。三月から欧州連合の木材規則が適用。",
                zh:"馬達加斯加玫瑰木與黑檀、可可波羅、宏都拉斯玫瑰木列入附錄二；歐盟木材法規自 3 月起適用。" } },
            { year:"2017",
              title:{ en:"All rosewoods", ja:"すべてのローズウッド", zh:"所有玫瑰木" },
              text:{
                en:"From 2 January every <em>Dalbergia</em> species, three bubinga species and kosso are in Appendix II, including finished instruments. Japan's Clean Wood Act takes effect in May.",
                ja:"一月二日から、すべての<em>ダルベルギア</em>、三種のブビンガ、コッソが、完成品の楽器を含めて附属書IIに。五月、日本のクリーンウッド法が施行。",
                zh:"自 1 月 2 日起，所有 <em>Dalbergia</em> 物種、三種巴花木與非洲紫檀（kosso）列入附錄二，連成品樂器也包括在內。日本《潔淨木材法》於 5 月施行。" } },
            { year:"2019",
              title:{ en:"Instruments exempted", ja:"楽器の除外", zh:"樂器豁免" },
              text:{
                en:"From 26 November finished musical instruments, parts and accessories are exempt, except those containing Brazilian rosewood.",
                ja:"十一月二十六日から、ブラジリアン・ローズウッドを含むものを除き、完成品の楽器、部品、付属品が除外される。",
                zh:"自 11 月 26 日起，除含巴西玫瑰木者外，成品樂器、零件與配件均獲豁免。" } },
            { year:"2020",
              title:{ en:"Spanish cedar", ja:"スパニッシュシダー", zh:"西班牙柏木" },
              text:{
                en:"<em>Cedrela</em>, used for classical-guitar necks, joins Appendix II on 28 August.",
                ja:"クラシックギターのネックに使う<em>セドレラ</em>が八月二十八日に附属書IIへ。",
                zh:"用於古典吉他琴頸的 <em>Cedrela</em> 於 8 月 28 日列入附錄二。" } },
            { year:"2023–24",
              title:{ en:"African timbers", ja:"アフリカの木材", zh:"非洲木材" },
              text:{
                en:"African mahogany (<em>Khaya</em>), African padauk and <em>Afzelia</em> from 23 February 2023; ipê and cumaru from 25 November 2024 — logs and sawn timber, not finished goods.",
                ja:"二〇二三年二月二十三日からアフリカンマホガニー（<em>カヤ</em>）、アフリカのパドウク、<em>アフゼリア</em>が、二〇二四年十一月二十五日からイペとクマルが。対象は丸太や製材で、完成品ではない。",
                zh:"非洲桃花心木（<em>Khaya</em>）、非洲紫檀木（padauk）與 <em>Afzelia</em> 自 2023 年 2 月 23 日起，伊貝與龍鳳檀（cumaru）自 2024 年 11 月 25 日起列入——管制原木與鋸材，而非成品。" } },
            { year:"2025–26",
              title:{ en:"New rules at home and abroad", ja:"内外の新しい規則", zh:"國內外新規" },
              text:{
                en:"Japan's amended Clean Wood Act applies from 1 April 2025; CoP20 in Samarkand (late 2025) revises the rules for pernambuco bows from March 2026; the EU Deforestation Regulation is due to apply from 30 December 2026.",
                ja:"二〇二五年四月一日から日本の改正クリーンウッド法が適用。二〇二五年末のサマルカンドの第二十回締約国会議が、二〇二六年三月からペルナンブコの弓の規則を改める。欧州連合の森林破壊防止規則は二〇二六年十二月三十日から適用の予定。",
                zh:"日本修正後的《潔淨木材法》自 2025 年 4 月 1 日起適用；2025 年底在撒馬爾罕召開的第 20 屆締約方大會，修訂巴西蘇木（pernambuco）琴弓規定，自 2026 年 3 月起生效；歐盟《零毀林法規》預定自 2026 年 12 月 30 日起適用。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: CITES Secretariat notifications and CoP decisions (CoP8, CoP12, CoP16–CoP20); US Department of Justice; European Commission; Forestry Agency of Japan (Clean Wood Act).",
            ja:"出典：ワシントン条約事務局の通告と締約国会議の決定（第八回、第十二回、第十六〜二十回）、米司法省、欧州委員会、林野庁（クリーンウッド法）。",
            zh:"資料來源：CITES 秘書處通知與締約方大會決議（CoP8、CoP12、CoP16–CoP20）；美國司法部；歐盟執委會；日本林野廳（潔淨木材法）。" } }
      ] },
    { t:"section",
      id:"cop17",
      title:{ en:"2017: every rosewood", ja:"二〇一七年、すべてのローズウッド", zh:"2017 年：所有玫瑰木" },
      jp:"第十七回締約国会議",
      body:[
        { t:"p",
          text:{
            en:"At the seventeenth Conference of the Parties, held in Johannesburg in September and October 2016, the Parties took the most sweeping timber decision in the convention's history. Every species of the genus <em>Dalbergia</em> — the true rosewoods and palisanders — was placed in Appendix II, apart from Brazilian rosewood, which stayed in Appendix I; so were three African species of <em>Guibourtia</em> sold as bubinga, and the West African kosso, <em>Pterocarpus erinaceus</em>. The listings took effect on 2 January 2017, and with them more than 300 timber species were under CITES control. Guitars were not the target. Demand in China for <em>hongmu</em>, classical furniture made of dense red woods, had driven a wave of rosewood logging and smuggling from West Africa to the Mekong and Madagascar. Rosewood species are hard to tell apart even for experts, so traders could declare a protected species as an unprotected look-alike; listing the whole genus closed that gap.",
            ja:"二〇一六年九月から十月にヨハネスブルグで開かれた第十七回締約国会議で、締約国は条約の歴史で最も広い木材の決定を下した。<em>ダルベルギア</em>属——本来のローズウッドとパリサンダー——のすべての種が、附属書Iにとどまるブラジリアン・ローズウッドを除いて附属書IIに掲載された。ブビンガとして売られるアフリカの<em>ギブールティア</em>属の三種と、西アフリカのコッソ（<em>プテロカルプス・エリナケウス</em>）も同じである。掲載は二〇一七年一月二日に発効し、これで三百を超える木材の種がワシントン条約の管理下に入った。標的はギターではなかった。重く赤い木でつくる中国の伝統家具「紅木」の需要が、西アフリカからメコン、マダガスカルにまでおよぶローズウッドの伐採と密輸の波を起こしていた。ローズウッドの種は専門家でも見分けにくく、業者は保護された種を保護されていない類似の種と偽って申告できた。属全体の掲載はその抜け穴をふさいだのである。",
            zh:"2016 年 9 月至 10 月在約翰尼斯堡召開的第 17 屆締約方大會，做出了公約史上範圍最廣的木材決議。<em>Dalbergia</em> 屬——真正的玫瑰木與黃檀——所有物種都列入附錄二，唯巴西玫瑰木仍留在附錄一；以巴花木（bubinga）之名販售的三種非洲 <em>Guibourtia</em>，以及西非的 kosso（<em>Pterocarpus erinaceus</em>）也一併列入。列名於 2017 年 1 月 2 日生效，受 CITES 管制的木材物種自此超過 300 種。目標並不是吉他。中國對「紅木」——以緻密紅色木材製成的傳統家具——的需求，掀起了從西非到湄公河流域、再到馬達加斯加的玫瑰木砍伐與走私潮。玫瑰木各物種連專家都難以分辨，業者便能把受保護物種謊報為未受保護的相似種；將整個屬列名，堵住了這個漏洞。" } },
        { t:"p",
          text:{
            en:"The trouble lay in the annotation. Annotation #15 covered almost everything made from the wood — logs and lumber, but also finished products, including musical instruments — with only narrow exemptions for leaves, flowers, pollen, fruit and seeds, and for non-commercial shipments weighing up to 10 kg in total. Overnight, every guitar with an Indian-rosewood fingerboard or bridge became a CITES specimen when it crossed a border for sale. Manufacturers needed an export permit for every shipment of finished guitars, distributors and shops needed matching import paperwork, and a player selling a used guitar to a buyer abroad needed a permit that could take weeks to obtain. In the United States, applications to the Fish and Wildlife Service rose from about 20,000 a year to more than 60,000, while by the estimate of one large guitar maker the instrument trade used less than a tenth of one per cent of the world's rosewood.",
            ja:"問題は注釈にあった。注釈#15は、その木からつくられるほとんどすべてのもの——丸太や製材だけでなく、楽器を含む完成品——を対象とし、除外は、葉、花、花粉、果実、種子と、合計10kgまでの商業目的でない貨物という狭いものだけだった。インドローズウッドの指板やブリッジをもつすべてのギターが、売るために国境を越えるとき、一夜にしてワシントン条約の対象の標本になった。メーカーは完成品のギターの出荷ごとに輸出許可書を要し、輸入元や販売店はそれに見合う輸入の書類を要し、中古のギターを海外の買い手に売る弾き手は、取るのに何週間もかかりうる許可書を要した。アメリカでは魚類野生生物局への申請が年に約二万件から六万件を超えるまでに増えたが、ある大手ギターメーカーの見積もりでは、楽器の取引が使うのは世界のローズウッドの千分の一にも満たなかった。",
            zh:"問題出在註解。第 15 號註解幾乎涵蓋以該木材製成的一切——不只原木與板材，還包括樂器在內的成品——豁免範圍僅限葉、花、花粉、果實與種子，以及總重不超過 10 公斤的非商業貨件。一夕之間，每一把配有印度玫瑰木指板或琴橋的吉他，只要為銷售而跨越國界，就成了 CITES 管制標本。製造商每批成品吉他出貨都需要出口許可，經銷商與樂器行需要相應的進口文件，而把二手吉他賣給海外買家的玩家，也得申請一張可能要等上數週的許可。在美國，向魚類及野生動物管理局提出的申請從每年約 2 萬件暴增到 6 萬件以上；然而根據一家大型吉他廠的估計，樂器業所用的玫瑰木還不到全球的千分之一。" } },
        { t:"p",
          text:{
            en:"Makers reacted quickly. In May 2017 Fender announced that its Mexican-made guitars would move from rosewood to pau ferro fingerboards, a South American wood not listed by CITES, and its American Elite series to ebony. Others turned to roasted maple, ebony, richlite and other composites, or simply absorbed the cost of permits. For Japanese makers, whose acoustic guitars commonly use rosewood for fingerboards and bridges even when the body is mahogany or maple, every export of finished guitars now needed a METI export permit, and every import of rosewood boards a permit from the exporting country.",
            ja:"つくり手の反応は速かった。二〇一七年五月、フェンダーはメキシコ製のギターの指板を、ワシントン条約に掲載されていない南米の木パーフェローに、アメリカン・エリートの系列をエボニーに替えると発表した。ほかのメーカーは、ローステッドメイプル、エボニー、リッチライトなどの複合材に移るか、許可書の費用をただ引き受けた。胴がマホガニーやメイプルでも指板とブリッジにふつうローズウッドを使う日本のアコースティックギターのメーカーにとっては、完成品のギターの輸出のたびに経済産業省の輸出許可書が、ローズウッドの板の輸入のたびに輸出国の許可書が要るようになった。",
            zh:"製造商迅速應變。2017 年 5 月，Fender 宣布旗下墨西哥製吉他的指板將由玫瑰木改為未列入 CITES 的南美木材 pau ferro（鐵木），American Elite 系列則改用黑檀。其他廠商轉向烘烤楓木、黑檀、Richlite 等複合材料，或乾脆自行吸收許可成本。對日本製造商而言，其木吉他即使琴身是桃花心木或楓木，指板與琴橋也常用玫瑰木，因此每一批成品吉他出口都需要經濟產業省的出口許可，每一批玫瑰木板材進口也都需要出口國的許可。" } }
      ] },
    { t:"section",
      id:"since2019",
      title:{ en:"2019 and after: the instrument exemption", ja:"二〇一九年以後、楽器の除外", zh:"2019 年以後：樂器豁免" },
      jp:"第十八〜二十回締約国会議",
      body:[
        { t:"p",
          text:{
            en:"Instrument makers, musicians' unions, orchestras and retailers spent the next two years making their case, and at the eighteenth conference, in Geneva, the Parties voted on 28 August 2019 to change annotation #15 so that finished musical instruments, finished parts and finished accessories were exempt. The change took effect on 26 November 2019. Rosewood logs, lumber and blanks still need permits, so the paperwork moved back to the start of the supply chain, where it belongs: the maker who imports fingerboard blanks from India must still document them, but the guitar that leaves the factory — or a player's house — does not. Brazilian rosewood was excluded from the exemption. The same conference added the New World cedars, <em>Cedrela</em>, to Appendix II with effect from 28 August 2020; Spanish cedar is the classic wood for classical-guitar necks, but the listing covers only logs, sawn wood, veneer and plywood.",
            ja:"楽器のつくり手、音楽家の組合、オーケストラ、販売店は、それから二年をかけて訴えを重ね、ジュネーブでの第十八回会議で、締約国は二〇一九年八月二十八日、完成品の楽器、完成した部品、完成した付属品を除外するよう注釈#15を改めることを可決した。改正は二〇一九年十一月二十六日に効力をもった。ローズウッドの丸太、製材、ブランク材にはなお許可書が要り、書類は本来あるべきサプライチェーンの始まりへと戻った。インドから指板のブランク材を輸入するつくり手はなおそれを証明せねばならないが、工場——あるいは弾き手の家——から出ていくギターには要らない。ブラジリアン・ローズウッドは除外から外された。同じ会議は、アメリカ大陸の<em>セドレラ</em>属を附属書IIに加え、二〇二〇年八月二十八日から効力をもたせた。スパニッシュシダーはクラシックギターのネックの定番の木だが、この掲載の対象は丸太、製材、単板、合板だけである。",
            zh:"樂器製造商、音樂家工會、管弦樂團與零售商花了兩年時間陳情；在日內瓦召開的第 18 屆大會上，締約方於 2019 年 8 月 28 日表決修改第 15 號註解，豁免成品樂器、成品零件與成品配件。修正於 2019 年 11 月 26 日生效。玫瑰木原木、板材與胚料仍需許可，文件手續因此回到供應鏈的起點——那才是它該在的地方：從印度進口指板胚料的製琴師仍須提出證明，但離開工廠——或玩家家中——的吉他則不需要。巴西玫瑰木不在豁免之列。同一屆大會也將美洲的 <em>Cedrela</em> 屬列入附錄二，自 2020 年 8 月 28 日起生效；西班牙柏木（Spanish cedar）是古典吉他琴頸的經典木材，但此列名只涵蓋原木、鋸材、單板與合板。" } },
        { t:"p",
          text:{
            en:"Later conferences have kept to that principle. At CoP19 in Panama in November 2022 the Parties listed a series of tropical timbers in Appendix II with annotation #17, which covers logs, sawn wood, veneer sheets, plywood and “transformed wood” but not finished products: African mahogany (<em>Khaya</em>), which some makers use for necks, backs and sides, the African padauks and <em>Afzelia</em> from 23 February 2023, and ipê and cumaru, used mainly for decking, from 25 November 2024. A finished guitar with an African-mahogany neck needs no CITES document; the boards it was cut from did. The most contested musical wood is now pernambuco, <em>Paubrasilia echinata</em>, from which the finest violin bows are made. At CoP20 in Samarkand, which ran from 24 November to 5 December 2025, Brazil proposed moving it to Appendix I; the Parties instead kept it in Appendix II with a revised annotation that exempts finished instruments and bows moving for non-commercial purposes such as performance, in force from March 2026.",
            ja:"その後の会議もこの原則を守ってきた。二〇二二年十一月のパナマでの第十九回会議で、締約国は一連の熱帯の木材を、丸太、製材、単板、合板、「加工木材」を対象とし完成品を含まない注釈#17をつけて附属書IIに掲載した。一部のつくり手がネックや裏板・側板に使うアフリカンマホガニー（<em>カヤ</em>）、アフリカのパドウク類、<em>アフゼリア</em>は二〇二三年二月二十三日から、主にデッキ材に使われるイペとクマルは二〇二四年十一月二十五日からである。アフリカンマホガニーのネックをもつ完成品のギターにワシントン条約の書類は要らないが、それを挽いた板には要った。いま最も争われる楽器の木はペルナンブコ（<em>パウブラジリア・エキナタ</em>）で、最上のバイオリンの弓がこれでつくられる。二〇二五年十一月二十四日から十二月五日までサマルカンドで開かれた第二十回会議で、ブラジルはこれを附属書Iへ移すことを提案したが、締約国は附属書IIにとどめ、演奏など商業目的でない移動の完成品の楽器と弓を除外する改めた注釈をつけ、二〇二六年三月から効力をもたせた。",
            zh:"其後的大會都延續這個原則。2022 年 11 月在巴拿馬舉行的第 19 屆大會，以第 17 號註解將一系列熱帶木材列入附錄二；該註解涵蓋原木、鋸材、單板、合板與「加工木材」，但不含成品：部分製琴師用於琴頸與背側板的非洲桃花心木（<em>Khaya</em>）、非洲紫檀木類與 <em>Afzelia</em> 自 2023 年 2 月 23 日起，主要用於戶外地板的伊貝與龍鳳檀則自 2024 年 11 月 25 日起。一把非洲桃花心木琴頸的成品吉他不需 CITES 文件，但鋸出它的板材需要。如今爭議最大的樂器木材是巴西蘇木（pernambuco，<em>Paubrasilia echinata</em>），頂級小提琴弓即以此製成。在 2025 年 11 月 24 日至 12 月 5 日於撒馬爾罕召開的第 20 屆大會上，巴西提議將其移入附錄一；締約方則決定維持附錄二，並修訂註解，豁免因演出等非商業目的移動的成品樂器與琴弓，自 2026 年 3 月起生效。" } },
        { t:"figure",
          caption:{
            en:"CITES status of the main guitar woods, 1990–2026, by listing date and annotation. Compiled from CITES CoP decisions and notifications; simplified — some species-level details and national stricter measures are omitted.",
            ja:"主なギターの木のワシントン条約での扱い（一九九〇〜二〇二六年）、掲載の日付と注釈による。締約国会議の決定と通告から作成。簡略化しており、種ごとの細部や各国のより厳しい措置は省いた。",
            zh:"主要吉他木材在 CITES 中的地位（1990–2026 年），依列名日期與註解整理。資料彙整自 CITES 締約方大會決議與通知；已簡化，部分物種層級細節與各國較嚴格措施未列入。" },
          svg:function(lang, L){
            var F = GIFU.fig, lw = 236, R = 740, y0 = 1990, y1 = 2026, top = 64, rh = 30, s = "", i, j;
            function X(y){ return lw + (y - y0) / (y1 - y0) * (R - lw); }
            var FILL = { 3:"#A08F73", 2:"#EADCC1", 1:"#E0E7E9" };
            var rows = [
              { n:{ en:"Brazilian rosewood", ja:"ブラジリアン・ローズウッド", zh:"巴西玫瑰木" }, seg:[[1992.45, 2026, 3]] },
              { n:{ en:"Big-leaf mahogany", ja:"オオバマホガニー", zh:"大葉桃花心木" }, seg:[[2003.87, 2026, 1]] },
              { n:{ en:"Madagascar ebony", ja:"マダガスカル・エボニー", zh:"馬達加斯加黑檀" }, seg:[[2013.45, 2026, 1]] },
              { n:{ en:"Cocobolo, Honduras rosewood", ja:"ココボロ、ホンジュラス・ローズウッド", zh:"可可波羅、宏都拉斯玫瑰木" }, seg:[[2013.45, 2017, 1], [2017, 2019.9, 2], [2019.9, 2026, 1]] },
              { n:{ en:"Indian and other rosewoods", ja:"インドローズウッドなど", zh:"印度玫瑰木等" }, seg:[[2017, 2019.9, 2], [2019.9, 2026, 1]] },
              { n:{ en:"Bubinga", ja:"ブビンガ", zh:"巴花木（bubinga）" }, seg:[[2017, 2019.9, 2], [2019.9, 2026, 1]] },
              { n:{ en:"Spanish cedar", ja:"スパニッシュシダー", zh:"西班牙柏木" }, seg:[[2020.66, 2026, 1]] },
              { n:{ en:"African mahogany, padauk", ja:"アフリカンマホガニー、パドウク", zh:"非洲桃花心木、紫檀木" }, seg:[[2023.15, 2026, 1]] }
            ];
            s += F.text(20, 30, lang==="en" ? "CITES STATUS OF GUITAR WOODS" : (lang==="ja" ? "ギターの木とワシントン条約" : "吉他木材的 CITES 地位"), { serif:true, size:13, fill:"#55504A", ls: lang==="en" ? 2 : 1 });
            var base = top + rows.length * rh;
            for (i = 0; i < rows.length; i += 2) s += '<rect x="20" y="' + (top + i * rh) + '" width="' + (R - 20) + '" height="' + rh + '" fill="#F5F3ED"/>';
            for (var g = 1990; g <= 2025; g += 5) {
              s += '<line x1="' + X(g).toFixed(1) + '" y1="' + (top - 6) + '" x2="' + X(g).toFixed(1) + '" y2="' + (base + 4) + '" stroke="#E1DCD2"/>';
              s += F.text(X(g), base + 18, String(g), { size:10, fill:"#55504A", anchor:"middle" });
            }
            s += '<line x1="' + X(2019.9).toFixed(1) + '" y1="' + (top - 14) + '" x2="' + X(2019.9).toFixed(1) + '" y2="' + (base + 4) + '" stroke="#7C6B52" stroke-dasharray="3 3"/>';
            s += F.text(X(2019.9) - 4, top - 18, L({ en:"Instrument exemption, 2019", ja:"楽器の除外（二〇一九年）", zh:"樂器豁免（2019 年）" }), { size:9.5, fill:"#55504A", anchor:"end" });
            for (i = 0; i < rows.length; i++) {
              var r = rows[i], y = top + i * rh;
              s += F.text(26, y + 19, L(r.n), { size:11 });
              for (j = 0; j < r.seg.length; j++) {
                var sg = r.seg[j], xa = X(sg[0]), xb = X(sg[1]);
                s += '<rect x="' + xa.toFixed(1) + '" y="' + (y + 7) + '" width="' + (xb - xa).toFixed(1) + '" height="' + (rh - 14) + '" fill="' + FILL[sg[2]] + '" stroke="#8B857C"/>';
              }
            }
            var leg = [
              { f:FILL[3], t:{ en:"Appendix I — permits for any cross-border movement, finished guitars included", ja:"附属書I：完成品のギターも含め、国境を越える移動にはすべて許可書が要る", zh:"附錄一：任何跨境移動都需許可，成品吉他亦然" } },
              { f:FILL[2], t:{ en:"Appendix II — finished guitars also need permits when traded", ja:"附属書II：取引される完成品のギターにも許可書が要る", zh:"附錄二：成品吉他交易時也需許可" } },
              { f:FILL[1], t:{ en:"Appendix II — timber only (logs, sawn wood, veneer), or finished instruments exempt", ja:"附属書II：木材のみ（丸太、製材、単板など）、または完成品の楽器は除外", zh:"附錄二：僅管制木材（原木、鋸材、單板等），或成品樂器豁免" } }
            ];
            var ly = base + 42;
            for (i = 0; i < leg.length; i++) {
              s += '<rect x="26" y="' + (ly - 10) + '" width="22" height="12" fill="' + leg[i].f + '" stroke="#8B857C"/>';
              s += F.text(58, ly, L(leg[i].t), { size:10.5, fill:"#201E1B", max:110, lh:13 });
              ly += 20;
            }
            return '<svg viewBox="0 0 760 ' + (ly + 4) + '" role="img">' + s + '</svg>';
          } },
        { t:"tiny",
          text:{
            en:"Sources: CITES CoP17–CoP20 decisions and Secretariat notifications; US Fish and Wildlife Service notices to importers (CoP19 timber); NAMM and Taylor Guitars on the 2019 exemption; Fender announcement of May 2017.",
            ja:"出典：ワシントン条約第十七〜二十回締約国会議の決定と事務局の通告、米魚類野生生物局の輸入者への通知（第十九回の木材）、NAMMとテイラー・ギターズ（二〇一九年の除外について）、フェンダーの二〇一七年五月の発表。",
            zh:"資料來源：CITES 第 17～20 屆締約方大會決議與秘書處通知；美國魚類及野生動物管理局致進口商通知（CoP19 木材）；NAMM 與 Taylor Guitars 對 2019 年豁免的說明；Fender 2017 年 5 月公告。" } }
      ] },
    { t:"section",
      id:"status",
      title:{ en:"Where things stand", ja:"いまの扱い", zh:"現況一覽" },
      jp:"樹種ごとの扱い",
      body:[
        { t:"p",
          text:{
            en:"The table sums up the position in 2026 for the woods most often found in guitars. It is a guide, not legal advice: listings change at every conference, some countries apply stricter national rules, and the official checklist kept by the CITES Secretariat and the UN Environment Programme is the place to confirm a species. Note how much depends on the annotation. The same Appendix II can mean a permit for every guitar, as rosewood did in 2017–2019, or no permit for any finished instrument, as with mahogany since 2003.",
            ja:"表は、ギターに最もよく使われる木について、二〇二六年の時点の扱いをまとめたものである。法律上の助言ではなく目安である。掲載は会議のたびに変わり、国によってはより厳しい国内の規則を当て、種を確かめるには、ワシントン条約事務局と国連環境計画が管理する公式のチェックリストを見るべきである。どれほど多くが注釈にかかっているかに注意したい。同じ附属書IIでも、二〇一七〜二〇一九年のローズウッドのようにギター一本ごとに許可書を意味することもあれば、二〇〇三年以来のマホガニーのように完成品の楽器にはまったく要らないこともある。",
            zh:"下表整理吉他最常用木材在 2026 年的狀況。這只是參考，並非法律意見：列名在每屆大會都可能改變，部分國家另有更嚴格的國內法規，要確認物種應查閱 CITES 秘書處與聯合國環境規劃署維護的官方名錄。請注意註解的影響有多大：同樣是附錄二，可以像 2017～2019 年的玫瑰木那樣每把吉他都要許可，也可以像 2003 年以來的桃花心木那樣，成品樂器完全不需要。" } },
        { t:"table",
          caption:{
            en:"Common guitar woods and CITES (position in 2026)",
            ja:"よく使われるギターの木とワシントン条約（二〇二六年の扱い）",
            zh:"常見吉他木材與 CITES（2026 年狀況）" },
          cols:[
            { en:"Wood", ja:"木", zh:"木材" },
            { en:"Botanical name", ja:"学名", zh:"學名" },
            { en:"CITES listing", ja:"掲載", zh:"列名" },
            { en:"Finished guitar crossing a border", ja:"完成品のギターが国境を越えるとき", zh:"成品吉他跨境時" }
          ],
          rows:[
            [
              { en:"Brazilian rosewood", ja:"ブラジリアン・ローズウッド（ハカランダ）", zh:"巴西玫瑰木" },
              "Dalbergia nigra",
              { en:"Appendix I (1992)", ja:"附属書I（1992年）", zh:"附錄一（1992 年）" },
              { en:"Permits or certificates always needed", ja:"常に許可書か証明書が要る", zh:"一律需要許可或證明" }
            ],
            [
              { en:"Indian rosewood", ja:"インドローズウッド", zh:"印度玫瑰木" },
              "Dalbergia latifolia",
              { en:"Appendix II (2017)", ja:"附属書II（2017年）", zh:"附錄二（2017 年）" },
              { en:"Exempt since November 2019", ja:"2019年11月から除外", zh:"2019 年 11 月起豁免" }
            ],
            [
              { en:"Cocobolo; Honduras rosewood", ja:"ココボロ、ホンジュラス・ローズウッド", zh:"可可波羅；宏都拉斯玫瑰木" },
              "D. retusa; D. stevensonii",
              {
                en:"Appendix II (2013; all products 2017)",
                ja:"附属書II（2013年。2017年から全製品）",
                zh:"附錄二（2013 年；2017 年起涵蓋所有製品）" },
              { en:"Exempt since November 2019", ja:"2019年11月から除外", zh:"2019 年 11 月起豁免" }
            ],
            [
              { en:"Madagascar rosewood", ja:"マダガスカル・ローズウッド", zh:"馬達加斯加玫瑰木" },
              "Dalbergia spp.",
              { en:"Appendix II (2013); trade suspended", ja:"附属書II（2013年）、取引停止", zh:"附錄二（2013 年）；貿易暫停" },
              {
                en:"Exempt as an instrument, but new wood is not legally available",
                ja:"楽器としては除外。ただし新しい材は合法に手に入らない",
                zh:"成品樂器豁免，但新木料無法合法取得" }
            ],
            [
              { en:"Bubinga", ja:"ブビンガ", zh:"巴花木" },
              "Guibourtia (3 spp.)",
              { en:"Appendix II (2017)", ja:"附属書II（2017年）", zh:"附錄二（2017 年）" },
              { en:"Exempt since November 2019", ja:"2019年11月から除外", zh:"2019 年 11 月起豁免" }
            ],
            [
              { en:"Big-leaf mahogany", ja:"オオバマホガニー", zh:"大葉桃花心木" },
              "Swietenia macrophylla",
              { en:"Appendix II (2003), timber only", ja:"附属書II（2003年）、木材のみ", zh:"附錄二（2003 年），僅木材" },
              { en:"No permit", ja:"許可書は不要", zh:"不需許可" }
            ],
            [
              { en:"African mahogany", ja:"アフリカンマホガニー", zh:"非洲桃花心木" },
              "Khaya spp.",
              { en:"Appendix II (2023), timber only", ja:"附属書II（2023年）、木材のみ", zh:"附錄二（2023 年），僅木材" },
              { en:"No permit", ja:"許可書は不要", zh:"不需許可" }
            ],
            [
              { en:"Spanish cedar", ja:"スパニッシュシダー", zh:"西班牙柏木" },
              "Cedrela spp.",
              { en:"Appendix II (2020), timber only", ja:"附属書II（2020年）、木材のみ", zh:"附錄二（2020 年），僅木材" },
              { en:"No permit", ja:"許可書は不要", zh:"不需許可" }
            ],
            [
              { en:"Madagascar ebony", ja:"マダガスカル・エボニー", zh:"馬達加斯加黑檀" },
              "Diospyros spp.",
              { en:"Appendix II (2013), timber only", ja:"附属書II（2013年）、木材のみ", zh:"附錄二（2013 年），僅木材" },
              { en:"No permit", ja:"許可書は不要", zh:"不需許可" }
            ],
            [
              { en:"West African ebony", ja:"西アフリカのエボニー", zh:"西非黑檀" },
              "Diospyros crassiflora",
              { en:"Not listed", ja:"掲載なし", zh:"未列名" },
              {
                en:"No CITES permit (legality laws still apply)",
                ja:"条約の許可書は不要（合法性の法律は適用）",
                zh:"不需 CITES 許可（仍適用合法性法規）" }
            ],
            [
              { en:"Spruce, maple, walnut, koa, sapele", ja:"スプルース、メイプル、ウォールナット、コア、サペリ", zh:"雲杉、楓木、胡桃木、相思木、沙比利" },
              "—",
              { en:"Not listed", ja:"掲載なし", zh:"未列名" },
              { en:"No CITES permit", ja:"条約の許可書は不要", zh:"不需 CITES 許可" }
            ]
          ] },
        { t:"figure",
          caption:{
            en:"Where the main rules bite along a guitar's life — a qualitative, simplified comparison compiled from the texts of the rules; not legal advice. More dots mean more paperwork or control at that stage.",
            ja:"ギターの一生のどこで主な規則がかかるか。規則の本文から作った質的・簡略な比較で、法律上の助言ではない。点が多いほど、その段階での書類や管理が多い。",
            zh:"主要法規在吉他生命週期中的作用點——依法規條文整理的質性、簡化比較，並非法律意見。點愈多，表示該階段的文件或管制愈多。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"Where the rules bite", ja:"規則がかかるところ", zh:"法規管到哪裡" }, labelW:270,
            cols:[ { en:"Logs, lumber", ja:"丸太・製材", zh:"原木、板材" }, { en:"Blanks, parts", ja:"ブランク・部品", zh:"胚料、零件" }, { en:"Guitar sold abroad", ja:"ギターの輸出入", zh:"吉他跨國銷售" }, { en:"Musician on tour", ja:"演奏旅行", zh:"巡演攜帶" } ],
            rows:[
              { n:{ en:"CITES App. I (Brazilian rosewood)", ja:"附属書I（ハカランダ）", zh:"附錄一（巴西玫瑰木）" }, v:[3,3,3,2] },
              { n:{ en:"CITES App. II, rosewoods, bubinga", ja:"附属書II（ローズウッド、ブビンガ）", zh:"附錄二（玫瑰木、巴花木）" }, v:[3,2,0,0] },
              { n:{ en:"CITES App. II, timber only", ja:"附属書II（木材のみの注釈）", zh:"附錄二（僅木材註解）" }, v:[3,1,0,0] },
              { n:{ en:"US Lacey Act", ja:"米レイシー法", zh:"美國雷斯法" }, v:[3,2,2,1] },
              { n:{ en:"EU timber and deforestation rules", ja:"欧州連合の木材・森林破壊規則", zh:"歐盟木材與零毀林法規" }, v:[3,2,0,0] },
              { n:{ en:"Japan Clean Wood Act", ja:"日本のクリーンウッド法", zh:"日本潔淨木材法" }, v:[3,1,0,0] }
            ],
            note:{ en:"Schematic. Lacey Act import declarations cover many plant products, including instruments; EU and Japanese rules list wood, furniture and paper but not musical instruments.", ja:"模式図。レイシー法の輸入申告は楽器を含む多くの植物製品におよぶ。欧州連合と日本の規則は木材・家具・紙を挙げるが、楽器は挙げていない。", zh:"示意圖。雷斯法的進口申報涵蓋包括樂器在內的許多植物製品；歐盟與日本法規列出木材、家具與紙類，但未列樂器。" } }); } }
      ] },
    { t:"section",
      id:"beyond",
      title:{ en:"Beyond CITES: legality laws", ja:"条約の外で——合法性の法律", zh:"公約之外：合法性法規" },
      jp:"違法伐採対策",
      body:[
        { t:"h3",
          text:{ en:"The Lacey Act and the Gibson raids", ja:"レイシー法とギブソンの捜索", zh:"雷斯法與 Gibson 搜索案" },
          jp:"アメリカ" },
        { t:"p",
          text:{
            en:"CITES asks whether trade in a species is sustainable. A second family of laws asks a simpler question: was this wood cut and exported legally in the first place? The oldest is the United States' Lacey Act of 1900, a law against wildlife trafficking which was amended on 22 May 2008 to cover plants and plant products. Since then it has been illegal to import, sell or possess in the United States wood taken or exported in breach of the laws of its country of origin, and importers must declare the species and country of harvest of many wood products — musical instruments included. The amendment's first famous target was a guitar maker. Federal agents searched Gibson's premises in Nashville in 2009 and again in 2011, seizing ebony and rosewood. On 6 August 2012 Gibson entered a criminal enforcement agreement with the Department of Justice: it acknowledged that it had continued to order Madagascar ebony fingerboard blanks — four shipments between October 2008 and September 2009 — after learning that Madagascar had banned exports of unfinished ebony in 2006, and it paid a US$300,000 penalty and a US$50,000 community-service payment and forfeited the seized Madagascar ebony, invoiced at US$261,844. The raids became a political controversy in the United States; for the guitar trade their lesson was that knowing a wood's legal origin had become the buyer's responsibility.",
            ja:"ワシントン条約は、ある種の取引が持続できるかを問う。もう一つの法律の系統は、もっと単純な問いを立てる。この木はそもそも合法に伐られ、輸出されたのか。最も古いのは、一九〇〇年のアメリカのレイシー法で、野生生物の密売を禁じるこの法律は二〇〇八年五月二十二日に改正され、植物と植物製品が対象に加わった。それ以来アメリカでは、原産国の法に反して得られた、あるいは輸出された木を輸入し、売り、もつことが違法となり、輸入者は多くの木製品——楽器を含む——について、樹種と伐採国を申告せねばならない。改正後の最初の名高い標的はギターメーカーだった。連邦の捜査官は二〇〇九年と二〇一一年にナッシュビルのギブソンの施設を捜索し、エボニーとローズウッドを押収した。二〇一二年八月六日、ギブソンは司法省と刑事の執行合意を結んだ。マダガスカルが二〇〇六年に未加工のエボニーの輸出を禁じたと知ったあとも、マダガスカル産エボニーの指板のブランク材を注文しつづけた——二〇〇八年十月から二〇〇九年九月に四回の出荷——ことを認め、三十万ドルの制裁金と五万ドルの地域奉仕の支払いを行い、請求額二十六万千八百四十四ドルの押収されたマダガスカル・エボニーを没収された。この捜索はアメリカで政治的な論争となったが、ギター業界にとっての教訓は、木の合法な出どころを知ることが買い手の責任になったということだった。",
            zh:"CITES 關心的是某物種的貿易是否可持續。另一類法律則問一個更簡單的問題：這塊木頭當初是否合法砍伐、合法出口？最早的是美國 1900 年的《雷斯法》（Lacey Act），這部打擊野生動物走私的法律於 2008 年 5 月 22 日修正，納入植物與植物製品。自此，在美國進口、販售或持有違反原產國法律取得或出口的木材即屬違法，進口商並須就許多木製品——包括樂器——申報樹種與採伐國。修法後第一個著名目標，就是一家吉他廠。聯邦探員於 2009 年與 2011 年兩度搜索 Gibson 位於納許維爾的廠房，扣押黑檀與玫瑰木。2012 年 8 月 6 日，Gibson 與美國司法部簽訂刑事執法協議：它承認在得知馬達加斯加已於 2006 年禁止出口未加工黑檀後，仍持續訂購馬達加斯加黑檀指板胚料——2008 年 10 月至 2009 年 9 月間共四批——並支付 30 萬美元罰金與 5 萬美元社區服務款，沒收發票價值 261,844 美元的被扣馬達加斯加黑檀。搜索案在美國引發政治爭議；對吉他業而言，教訓是：掌握木材的合法來源，已成為買方的責任。" } },
        { t:"h3", text:{ en:"The European Union", ja:"欧州連合", zh:"歐盟" }, jp:"EUTRとEUDR" },
        { t:"p",
          text:{
            en:"The EU Timber Regulation, applied from 3 March 2013, banned placing illegally harvested timber on the EU market and required the first company to do so to carry out due diligence on its source. It is being replaced by the EU Deforestation Regulation of 2023, which also requires that wood — and cattle, cocoa, coffee, palm oil, rubber and soy — come from land not deforested after 2020, with the geographic coordinates of the plot of harvest. After two postponements, the second in December 2025, it is due to apply from 30 December 2026. Both regulations list wood, furniture, paper and similar products by customs code; musical instruments are not among them, but the tonewood boards that European makers import are.",
            ja:"二〇一三年三月三日から適用された欧州連合の木材規則は、違法に伐採された木材を欧州連合の市場に出すことを禁じ、最初にそれを行う会社に出どころについてのデューディリジェンスを求めた。それを継ぐのが二〇二三年の欧州連合森林破壊防止規則で、木材——と牛、カカオ、コーヒー、パーム油、ゴム、大豆——が二〇二〇年より後に森林破壊されていない土地に由来することを、伐採した区画の地理座標とともに求める。二度の延期（二度目は二〇二五年十二月）をへて、二〇二六年十二月三十日から適用される予定である。どちらの規則も、木材、家具、紙などを関税の品目番号で挙げており、楽器はそこに含まれないが、ヨーロッパのつくり手が輸入するトーンウッドの板は含まれる。",
            zh:"歐盟《木材法規》自 2013 年 3 月 3 日起適用，禁止將非法採伐的木材投放歐盟市場，並要求首先投放的企業對來源進行盡職調查。取而代之的是 2023 年的歐盟《零毀林法規》，要求木材——以及牛隻、可可、咖啡、棕櫚油、橡膠與黃豆——來自 2020 年後未遭毀林的土地，並附上採伐地塊的地理座標。經兩度延後（第二次在 2025 年 12 月），預定自 2026 年 12 月 30 日起適用。兩部法規都以海關稅則號列列出木材、家具、紙類等產品；樂器不在其中，但歐洲製琴師進口的音木板材則包括在內。" } },
        { t:"h3",
          text:{ en:"Japan's Clean Wood Act", ja:"日本のクリーンウッド法", zh:"日本《潔淨木材法》" },
          jp:"合法伐採木材等の流通及び利用の促進に関する法律" },
        { t:"p",
          text:{
            en:"Japan's own law, the Act on Promotion of Distribution and Use of Legally Harvested Wood and Wood Products — the Clean Wood Act — was passed in May 2016 and took effect in May 2017. At first it relied on voluntary registration: businesses that dealt in wood could register and commit to checking the legality of what they bought. An amendment passed in May 2023, in force from 1 April 2025, made checking compulsory for the “first-category” businesses at the top of the chain — those that buy logs from forest owners or import wood. They must collect information on the origin of the wood, confirm its legality, keep records and pass the result on to the businesses they supply; larger ones must report every year, and failures can lead, after guidance, recommendations, publication and orders, to fines of up to ¥1 million. The law covers logs, lumber, plywood and pellets, and designated products such as chairs, desks and shelves, pulp and paper, flooring and siding. Guitars are not on the list, but a workshop that imports sawn tonewood itself is, in principle, one of the importers the law addresses. For the forests of Gifu the law matters in the other direction too: domestic timber of documented legal origin is exactly what it is designed to favour (see <a href=\"policy.html\">forest policy</a> and <a href=\"trade.html\">the timber trade</a>).",
            ja:"日本自身の法律、合法伐採木材等の流通及び利用の促進に関する法律——クリーンウッド法——は二〇一六年五月に成立し、二〇一七年五月に施行された。はじめは任意の登録に頼っていた。木材を扱う事業者が登録し、買うものの合法性を確かめると約束できる仕組みである。二〇二三年五月に成立し、二〇二五年四月一日に施行された改正で、流れの最上流にいる「第一種」の事業者——森林の所有者から丸太を買う者や木材を輸入する者——に確認が義務づけられた。木材の出どころの情報を集め、合法性を確かめ、記録を残し、その結果を供給先の事業者に伝えねばならない。一定規模以上の者は毎年報告し、怠れば、指導・助言、勧告、公表、命令をへて百万円以下の罰金に至りうる。対象は丸太、製材、合板、ペレットと、椅子・机・棚、パルプと紙、フローリング、サイディングといった指定の製品である。ギターは入っていないが、自ら製材されたトーンウッドを輸入する工房は、原則として、この法律が相手にする輸入者の一人である。岐阜の森にとって、この法律は逆の向きにも意味をもつ。合法な出どころが記録された国産材こそ、この法律が後押ししようとするものだからである（<a href=\"policy.html\">森林の法と政策</a>と<a href=\"trade.html\">木材の貿易</a>を参照）。",
            zh:"日本自己的法律《促進合法採伐木材等流通及利用法》——即《潔淨木材法》——於 2016 年 5 月通過，2017 年 5 月施行。起初它仰賴自願登錄：經營木材的業者可以登錄，承諾查核所購木材的合法性。2023 年 5 月通過、2025 年 4 月 1 日施行的修正案，則對供應鏈最上游的「第一類」業者——向林主購買原木或進口木材者——課以查核義務。他們必須蒐集木材來源資訊、確認其合法性、保存紀錄，並將結果傳達給下游業者；一定規模以上者須每年申報，違反者在經過指導、勸告、公布與命令後，最高可處 100 萬日圓罰金。適用範圍包括原木、板材、合板與木質顆粒，以及椅子、桌子、櫃架、紙漿與紙、地板、外牆板等指定製品。吉他不在清單上，但自行進口音木板材的工坊，原則上正是這部法律所針對的進口業者之一。對岐阜的森林而言，這部法律還有反方向的意義：有合法來源紀錄的國產材，正是它想要扶持的對象（見<a href=\"policy.html\">森林法規與政策</a>與<a href=\"trade.html\">木材貿易</a>）。" } },
        { t:"tiny",
          text:{
            en:"Sources: US Department of Justice (Gibson agreement, 6 August 2012); Lacey Act amendments of 2008; European Commission and Council (EUTR, EUDR and its 2025 amendment); Forestry Agency of Japan (Clean Wood Act and its 2023 amendment).",
            ja:"出典：米司法省（ギブソンの合意、二〇一二年八月六日）、二〇〇八年のレイシー法改正、欧州委員会・理事会（欧州連合木材規則、森林破壊防止規則とその二〇二五年の改正）、林野庁（クリーンウッド法と二〇二三年の改正）。",
            zh:"資料來源：美國司法部（Gibson 協議，2012 年 8 月 6 日）；2008 年雷斯法修正；歐盟執委會與理事會（木材法規、零毀林法規及其 2025 年修正）；日本林野廳（潔淨木材法及其 2023 年修正）。" } }
      ] },
    { t:"section",
      id:"travel",
      title:{ en:"Travelling with a guitar", ja:"ギターと旅する", zh:"帶吉他出國" },
      jp:"楽器証明書",
      body:[
        { t:"p",
          text:{
            en:"Since November 2019 a player crossing a border with a guitar made of Indian rosewood, bubinga, mahogany or ebony needs no CITES document. The exceptions are guitars containing Brazilian rosewood and older instruments with other listed materials — elephant-ivory nuts and saddles or tortoiseshell binding and pickguards, both from Appendix I species. For these, the Parties created a Musical Instrument Certificate in 2013 (Resolution Conf. 16.8): a kind of passport, valid for three years, that lets the owner take the instrument in and out of countries for performances, paid or unpaid, as long as it is not sold and returns home with the same owner. In Japan, METI publishes guidance for performers and individuals who carry instruments abroad for concerts. Recognition of certificates still varies from country to country, and some countries — the United States for ivory, for example — apply stricter domestic rules.",
            ja:"二〇一九年十一月からは、インドローズウッド、ブビンガ、マホガニー、エボニーのギターをもって国境を越える弾き手に、ワシントン条約の書類は要らない。例外は、ブラジリアン・ローズウッドを含むギターと、ほかの掲載種の材料をもつ古い楽器——象牙のナットとサドル、べっこうのバインディングやピックガード。いずれも附属書Iの種に由来する——である。これらのために、締約国は二〇一三年に楽器証明書をつくった（決議16.8）。三年間有効な一種のパスポートで、売らず、同じ持ち主とともに帰国するかぎり、有償・無償を問わず演奏のために楽器を国々に出し入れできる。日本では、経済産業省が、演奏会などのために楽器を携えて海外へ行く演奏家や個人に向けた案内を出している。証明書の受け入れはなお国によって違い、国によっては——たとえば象牙についてのアメリカのように——より厳しい国内の規則を当てる。",
            zh:"自 2019 年 11 月起，攜帶印度玫瑰木、巴花木、桃花心木或黑檀吉他跨越國界的演奏者，不需任何 CITES 文件。例外是含巴西玫瑰木的吉他，以及含其他列名材料的老樂器——象牙上下弦枕、玳瑁包邊與護板，皆取自附錄一物種。為此，締約方於 2013 年設立「樂器證明書」（第 16.8 號決議）：一種效期三年的護照，只要樂器不出售、並由同一主人帶回國，便可為有償或無償演出攜帶樂器進出各國。在日本，經濟產業省為攜帶樂器出國演出的演奏家與個人提供說明。各國對證明書的承認程度仍不一，部分國家——例如美國對象牙——另有更嚴格的國內法規。" } },
        { t:"ul",
          items:[
            {
              en:"Know what your guitar is made of: keep the maker's specification sheet or a letter naming the species of every wood.",
              ja:"ギターが何でできているかを知ること。メーカーの仕様書や、すべての木の樹種を記した書面をとっておく。",
              zh:"了解你的吉他用了什麼材料：保留製造商的規格表，或載明每種木材樹種的文件。" },
            {
              en:"For Brazilian rosewood, ivory or tortoiseshell, apply for a certificate well before travel and carry the original.",
              ja:"ブラジリアン・ローズウッド、象牙、べっこうなら、旅のずっと前に証明書を申請し、原本を携える。",
              zh:"若含巴西玫瑰木、象牙或玳瑁，應在出行前及早申請證明書，並隨身攜帶正本。" },
            {
              en:"Check the destination's own rules and, where required, use ports designated for CITES inspection.",
              ja:"行き先の国の規則を確かめ、必要ならワシントン条約の検査が指定された港や空港を使う。",
              zh:"確認目的國的法規，必要時使用指定可辦理 CITES 查驗的口岸。" },
            {
              en:"Selling or shipping a guitar abroad is trade, not travel: the rules for commercial movements apply.",
              ja:"ギターを海外に売ったり送ったりするのは旅ではなく取引である。商業目的の移動の規則が適用される。",
              zh:"將吉他賣到或寄往海外屬於貿易，而非旅行：適用商業移動的規定。" }
          ] }
      ] },
    { t:"section",
      id:"response",
      title:{ en:"How the industry has responded", ja:"業界はどう応えたか", zh:"產業如何回應" },
      jp:"代替材と供給網",
      body:[
        { t:"p",
          text:{
            en:"The listings have changed guitar making in three ways. The first is ownership of the supply chain. In 2011 the American maker Taylor Guitars and its Spanish tonewood partner Madinter bought the Crelicam ebony mill in Yaoundé, Cameroon. They found that many ebony trees have streaked or variegated heartwood, which cutters had traditionally left in the forest because the market wanted pure black; Taylor began using it, so that each tree felled yields more usable wood. In 2016 it launched the Ebony Project with the Congo Basin Institute of the University of California, Los Angeles, to study and replant ebony, with an initial target of 15,000 trees. The second is substitution: pau ferro and other unlisted tropical woods; maple roasted in low-oxygen kilns, which darkens it and makes it more stable for fingerboards and necks; and composites such as richlite, made from paper and resin. The third is treatment. Yamaha's A.R.E. (Acoustic Resonance Enhancement), researched since the late 1990s and first used on its acoustic guitars in 2008, controls temperature, humidity and pressure, without chemicals, to give new wood some of the qualities of long-aged wood — which, the company notes, allows younger, more readily available timber to be used.",
            ja:"掲載はギターづくりを三つの点で変えた。第一はサプライチェーンを自らもつことである。二〇一一年、アメリカのテイラー・ギターズとスペインのトーンウッドの取引先マディンテルは、カメルーンのヤウンデにあるエボニーの製材所クレリカムを買い取った。彼らは、多くのエボニーの木の心材に縞や斑があり、市場が真っ黒を求めたため伐り手が昔から森に捨ててきたことを知った。テイラーはそれを使いはじめ、伐った一本からより多くの使える材が取れるようにした。二〇一六年には、カリフォルニア大学ロサンゼルス校のコンゴ盆地研究所とともにエボニー・プロジェクトを始め、エボニーを研究し植え直すことにし、はじめの目標を一万五千本とした。第二は代替である。パーフェローなど掲載されていない熱帯の木、酸素の少ない窯で焼いて色を濃くし、指板やネックのために安定させたローステッドメイプル、紙と樹脂でつくるリッチライトのような複合材である。第三は処理である。一九九〇年代末から研究され、二〇〇八年にアコースティックギターに初めて使われたヤマハのA.R.E.（Acoustic Resonance Enhancement）は、薬品を使わず温度・湿度・圧力を制御して、新しい木に長く枯らした木の性質の一部を与える。会社は、これによってより若く、手に入りやすい木を使えると述べている。",
            zh:"列名從三方面改變了吉他製作。第一是掌握供應鏈。2011 年，美國的 Taylor Guitars 與其西班牙音木夥伴 Madinter 收購了喀麥隆雅溫得的 Crelicam 黑檀製材廠。他們發現許多黑檀樹的心材帶有條紋或斑駁，因市場只要純黑，伐木工向來把它們丟在林中；Taylor 開始採用這些木料，讓每棵伐下的樹產出更多可用材。2016 年，Taylor 與加州大學洛杉磯分校剛果盆地研究所合作推動「黑檀計畫」，研究並重新種植黑檀，初期目標為 15,000 棵。第二是替代：pau ferro 等未列名的熱帶木材；在低氧窯中烘烤、顏色變深且更穩定、適合做指板與琴頸的烘烤楓木；以及由紙與樹脂製成的 Richlite 等複合材料。第三是處理技術。Yamaha 自 1990 年代末開始研究、2008 年首度用於木吉他的 A.R.E.（Acoustic Resonance Enhancement），不用化學藥劑，而是控制溫度、濕度與壓力，讓新木材具備部分久經陳放木材的特性——公司指出，這使得較年輕、較易取得的木材也能派上用場。" } },
        { t:"p",
          text:{
            en:"In Japan the listings have renewed interest in domestic hardwoods — mountain cherry, walnut, maple, birch and others that grow in the broadleaf forests of Gifu and the rest of the country — for backs, sides, necks and fingerboards. Their properties and the makers who use them are described on the <a href=\"japanesewoods.html\">Japanese woods</a> and <a href=\"tonewoods.html\">tonewoods</a> pages. None of them yet replaces spruce for tops or ebony for the hardest-working parts, but they carry something that imported rosewood no longer can: a short, documented journey from forest to workshop.",
            ja:"日本では、掲載によって国産の広葉樹——岐阜をはじめ国じゅうの広葉樹林に育つヤマザクラ、クルミ、カエデ、カバなど——を裏板、側板、ネック、指板に使うことへの関心が新たに高まった。その性質と、それを使うつくり手については、<a href=\"japanesewoods.html\">日本の木</a>と<a href=\"tonewoods.html\">音響材</a>の頁で述べる。どれもまだ表板のスプルースや、最も酷使される部分のエボニーに代わるものではないが、輸入のローズウッドがもはやもてないものを備えている。森から工房までの、短く、記録された旅である。",
            zh:"在日本，列名重新喚起了人們對本土闊葉木的興趣——生長於岐阜乃至全國闊葉林中的山櫻、胡桃、楓、樺木等——用於背側板、琴頸與指板。它們的特性與使用它們的製琴師，詳見<a href=\"japanesewoods.html\">日本木材</a>與<a href=\"tonewoods.html\">音木</a>頁。它們目前都還無法取代面板用的雲杉，或最吃力部位所用的黑檀，但擁有進口玫瑰木再也無法提供的東西：一段從森林到工坊、短而有紀錄可查的旅程。" } },
        { t:"tiny",
          text:{
            en:"Sources: CITES Resolution Conf. 16.8 and League of American Orchestras briefing on Musical Instrument Certificates; METI guidance for performers travelling with instruments; Taylor Guitars (Crelicam, Ebony Project); Yamaha Corporation (A.R.E.).",
            ja:"出典：ワシントン条約決議16.8、アメリカ・オーケストラ連盟の楽器証明書についての資料、経済産業省の楽器を携帯する演奏家向けの案内、テイラー・ギターズ（クレリカム、エボニー・プロジェクト）、ヤマハ（A.R.E.）。",
            zh:"資料來源：CITES 第 16.8 號決議與美國管弦樂團聯盟之樂器證明書說明；日本經濟產業省攜帶樂器出國演出說明；Taylor Guitars（Crelicam、黑檀計畫）；Yamaha（A.R.E.）。" } }
      ] },
    { t:"related",
      items:[
        { href:"tonewoods.html", why:{ en:"What each guitar wood does.", ja:"ギターの木それぞれの役目。", zh:"各種吉他木材的作用。" } },
        { href:"japanesewoods.html",
          why:{ en:"Domestic alternatives to imported tonewoods.", ja:"輸入トーンウッドに代わる国産の木。", zh:"取代進口音木的日本本土木材。" } },
        { href:"guitarindustry.html",
          why:{ en:"The industry that uses these woods.", ja:"これらの木を使う産業。", zh:"使用這些木材的產業。" } },
        { href:"trade.html",
          why:{ en:"Japan's timber imports and the legality of wood.", ja:"日本の木材輸入と木の合法性。", zh:"日本的木材進口與木材合法性。" } },
        { href:"policy.html", why:{ en:"Forest policy in Japan.", ja:"日本の森林政策。", zh:"日本的森林政策。" } }
      ] }
  ] };

/* ---- ------------------------------------- japanesewoods */
GIFU.pages["japanesewoods"] = { kicker:{ en:"Sound · 11", ja:"音 · 11", zh:"聲音 · 11" },
  title:{ en:"Japanese Woods, Japanese Instruments", ja:"和の木と和の楽器", zh:"日本之木與日本樂器" },
  jp:"和楽器",
  lede:{
    en:"Long before spruce and rosewood reached Japan, Japanese instrument makers had worked out which of their own trees would sing. Kiri, the lightest native timber, became the body of the koto; mulberry the shell of the biwa; keyaki the great drums of shrines and festivals; evergreen oak the clappers of the night watch and the kabuki stage; camphor the temple's wooden fish; hinoki the floor of the Noh stage. This page follows those choices instrument by instrument, explains them with the physics set out in <a href=\"sound.html\">Wood &amp; Sound</a>, and then turns to a newer question: what Japanese woods — Hokkaidō spruce, cherry, horse chestnut, Yakushima cedar, Gifu's hinoki and broadleaves — can do in Western instruments.",
    ja:"スプルースやローズウッドが日本に来るずっと前から、日本の楽器のつくり手は、身近な木のどれが歌うかを知っていた。国産で最も軽いキリは箏の胴に、クワは琵琶の胴に、ケヤキは社寺や祭りの大太鼓に、カシは夜回りと歌舞伎の拍子木に、クスは寺の木魚に、ヒノキは能舞台の床になった。この頁は、その選択を楽器ごとにたどり、<a href=\"sound.html\">木と音</a>で述べた物理で説明する。そのうえで新しい問いに移る。北海道のエゾマツやアカエゾマツ、サクラ、トチ、屋久杉、岐阜のヒノキと広葉樹——日本の木は西洋の楽器で何ができるのか。",
    zh:"早在雲杉與玫瑰木傳入日本之前，日本的樂器工匠就已摸清哪些本地樹木會「唱歌」。日本最輕的本土木材桐木，成了箏的琴身；桑木成了琵琶的琴身；櫸木成了神社、寺院與祭典的大太鼓；橿木（常綠櫟類）成了巡夜與歌舞伎的拍子木；樟木成了寺院的木魚；扁柏成了能舞台的地板。本頁逐一追溯這些樂器的選材，以<a href=\"sound.html\">木與聲音</a>一頁所述的物理加以說明，再轉向一個較新的問題：北海道的雲杉、櫻木、七葉樹、屋久杉，以及岐阜的扁柏與闊葉樹——日本木材在西洋樂器中能有什麼作為？" },
  body:[
    { t:"section",
      id:"principle",
      title:{ en:"Light shells and heavy shells", ja:"軽い胴と重い胴", zh:"輕的琴身與重的鼓身" },
      jp:"放つ木と返す木",
      body:[
        { t:"p",
          text:{
            en:"Japanese instruments use wood in two opposite ways. In a string instrument such as the <em>koto</em>, the wood must radiate: a string on its own moves almost no air, and the body's job is to turn the string's small, concentrated vibration into the motion of a broad, light surface. That calls for a timber that is as light as possible for its stiffness, with little internal damping — the high radiation ratio described on the <a href=\"sound.html\">Wood &amp; Sound</a> page. In a drum, a clapper or a temple block, the job is reversed. The energy arrives from a stick or a skin, and the wood must reflect it and hold it, not soak it up; there the maker wants weight, hardness and a shell that barely yields. Between the two extremes sit the necks and bodies of plucked lutes, which must resist string tension and carry vibration from one part of the instrument to another.",
            ja:"日本の楽器は、木を正反対の二つのやり方で使う。<em>箏</em>のような弦楽器では、木は音を放たねばならない。弦だけではほとんど空気を動かせないので、胴の役目は、弦の小さく集中した振動を、広く軽い面の動きに変えることである。そのためには、剛さのわりにできるだけ軽く、内部の減衰の小さい木——<a href=\"sound.html\">木と音</a>の頁で述べた放射比の高い木——が要る。太鼓や拍子木や木魚では役目が逆になる。エネルギーは撥や皮から入り、木はそれを吸い込まずに反射し、保たねばならない。そこでつくり手が求めるのは、重さと硬さ、そしてほとんどたわまない胴である。その両極のあいだに、弦の張力に耐え、振動を楽器の一部から別の部分へ運ぶ、撥弦楽器の棹と胴がある。",
            zh:"日本樂器以兩種截然相反的方式使用木材。在<em>箏</em>這類弦樂器中，木材必須輻射聲音：單靠一根弦幾乎推不動空氣，琴身的任務是把琴弦細小而集中的振動，轉化為寬大輕盈表面的運動。這需要相對於剛性盡可能輕、內部阻尼又小的木材——也就是<a href=\"sound.html\">木與聲音</a>一頁所說聲輻射比高的木材。到了太鼓、拍子木或木魚，任務正好相反。能量從鼓棒或鼓皮傳入，木材必須反射並保存它，而不是把它吸掉；此時工匠要的是重量、硬度，以及幾乎不會變形的胴體。介於兩極之間的，是撥弦樂器的琴桿與琴身，它們必須承受琴弦張力，並把振動從樂器的一處傳到另一處。" } },
        { t:"figure",
          caption:{
            en:"Which woods go into which traditional instruments. Three dots mark the main or classic wood, two a usual alternative or secondary part, one an occasional use. A qualitative summary of the makers' and reference sources cited on this page, not a survey of production.",
            ja:"どの木がどの伝統楽器に使われるか。点三つは主な、あるいは定番の木、二つはふつうの代わりの木か副次的な部分、一つはときおりの使用を示す。この頁で引いた製作者や資料の記述を定性的にまとめたもので、生産量の調査ではない。",
            zh:"哪些木材用於哪些傳統樂器。三點表示主要或經典用材，兩點表示常見替代材或次要部位，一點表示偶爾使用。此為本頁所引工匠與文獻資料的定性整理，並非產量調查。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"Instruments and their woods", ja:"楽器と木", zh:"樂器與木材" }, labelW:210,
            cols:[
              { en:"Kiri", ja:"キリ", zh:"桐木" },
              { en:"Mulberry", ja:"クワ", zh:"桑木" },
              { en:"Keyaki", ja:"ケヤキ", zh:"櫸木" },
              { en:"Oak (kashi)", ja:"カシ", zh:"橿木" },
              { en:"Camphor", ja:"クス", zh:"樟木" },
              { en:"Hinoki, sugi", ja:"ヒノキ・スギ", zh:"扁柏・柳杉" },
              { en:"Karin, kōki", ja:"花梨・紅木", zh:"花梨・紅木" },
              { en:"Bamboo", ja:"竹", zh:"竹" }
            ],
            rows:[
              { n:{ en:"Koto (zither)", ja:"箏", zh:"箏" }, v:[3,0,0,0,0,0,0,0] },
              { n:{ en:"Shamisen", ja:"三味線", zh:"三味線" }, v:[0,1,0,1,0,0,3,0] },
              { n:{ en:"Biwa (lute)", ja:"琵琶", zh:"琵琶" }, v:[2,3,1,0,0,0,0,0] },
              { n:{ en:"Taiko, carved body", ja:"長胴太鼓（くり抜き）", zh:"長胴太鼓（整木挖空）" }, v:[0,0,3,0,0,0,0,0] },
              { n:{ en:"Taiko, stave body", ja:"桶胴太鼓", zh:"桶胴太鼓（拼板）" }, v:[0,0,0,0,0,3,0,0] },
              { n:{ en:"Drumsticks (bachi)", ja:"太鼓の撥", zh:"太鼓鼓棒" }, v:[0,0,0,2,0,1,0,0] },
              { n:{ en:"Hyōshigi (clappers)", ja:"拍子木", zh:"拍子木" }, v:[0,0,0,3,0,0,1,0] },
              { n:{ en:"Mokugyo (temple block)", ja:"木魚", zh:"木魚" }, v:[0,1,0,0,3,0,0,0] },
              { n:{ en:"Shakuhachi, shō", ja:"尺八・笙", zh:"尺八・笙" }, v:[0,0,0,0,0,0,0,3] },
              { n:{ en:"Noh stage floor", ja:"能舞台の床", zh:"能舞台地板" }, v:[0,0,0,0,0,3,0,0] }
            ] }); } },
        { t:"p",
          text:{
            en:"Most of these woods grow in Japan, and several grow in Gifu: keyaki and kashi in the lowland shrine groves of Mino, kiri in farm plots and field margins, hinoki in the plantations and old forests of Tōnō and Ura-Kiso, mulberry wherever silk was once raised. The exceptions are revealing. The best shamisen necks are made of dense tropical hardwoods that have been imported since the Edo period, because no native tree matches them for weight and stability under tension; and bamboo, strictly a grass, supplies the flutes and mouth organs that wood cannot.",
            ja:"これらの木の多くは日本に育ち、いくつかは岐阜にもある。ケヤキとカシは美濃の平地の鎮守の森に、キリは畑や田のあぜに、ヒノキは東濃や裏木曽の人工林と古い森に、クワはかつて養蚕が行われたところならどこにでもある。例外は示唆に富む。最上の三味線の棹は、江戸時代から輸入されてきた熱帯の重い広葉樹でつくられる。張力のもとでの重さと安定で、それに並ぶ国産の木がないからである。そして、厳密には草である竹が、木では果たせない笛や笙を受けもつ。",
            zh:"這些木材大多生長於日本，其中數種也見於岐阜：櫸木與橿木長在美濃平原的鎮守林中，桐木長在農地與田埂邊，扁柏長在東濃與裏木曾的人工林與老林中，桑木則遍布昔日養蠶之地。例外之處更耐人尋味。最好的三味線琴桿，用的是自江戶時代起進口的熱帶重質闊葉材，因為沒有一種本土樹木在張力下的重量與穩定性能與之匹敵；而嚴格說來屬於禾草的竹子，則承擔了木頭做不到的笛與笙。" } }
      ] },
    { t:"section",
      id:"koto",
      title:{ en:"The koto and kiri", ja:"箏とキリ", zh:"箏與桐木" },
      jp:"箏と桐",
      body:[
        { t:"p",
          text:{
            en:"The thirteen-string koto is about 1.8 metres long, and its body is essentially one piece of <em>kiri</em> (paulownia). The maker hollows the curved upper shell from a half-log, closes it underneath with a separate board of kiri pierced by sound holes, and strings it over movable bridges. Kiri is the lightest timber that grows in Japan, at an air-dry density of about 0.30 g/cm³, and it combines that lightness with reasonable stiffness along the grain, low shrinkage and slow response to changes in humidity — the same qualities that made it the wood of the traditional clothes chest. For a soundboard those properties mean a high radiation ratio and a body that stays stable through the Japanese year. The Chinese zither, the <em>guzheng</em>, widely played in Taiwan, uses paulownia for its soundboard for the same reasons.",
            ja:"十三絃の箏は長さおよそ一・八メートルで、胴は基本的に一つの<em>キリ</em>の塊である。つくり手は半割りの丸太から丸みのある甲をくり抜き、下を響き穴をあけた別のキリの裏板でふさぎ、動く柱の上に弦を張る。キリは日本に育つ木のなかで最も軽く、気乾密度はおよそ〇・三〇g/cm³である。その軽さに、繊維方向のほどよい剛さ、小さな収縮、湿度の変化へのゆっくりした応答をあわせもつ——伝統の箪笥の木にした性質と同じである。響板にとっては、それが高い放射比と、日本の一年を通じて安定した胴を意味する。台湾でも広く弾かれる中国の箏、古箏も、同じ理由で面板に桐を使う。",
            zh:"十三弦的箏長約 1.8 公尺，琴身基本上是一整塊<em>桐木</em>。工匠從半剖的原木挖出弧形的面（甲），底部以另一塊開有音孔的桐木背板封住，再把弦架在可移動的琴柱上。桐木是日本所產最輕的木材，氣乾密度約 0.30 g/cm³；它兼具這份輕盈、順紋方向適度的剛性、小收縮率，以及對濕度變化反應緩慢的特性——正是讓它成為傳統衣櫃用材的同一組性質。對響板而言，這意味著高聲輻射比，以及在日本一年四季中都能保持穩定的琴身。在台灣廣受歡迎的中國古箏，也基於同樣理由以桐木作面板。" } },
        { t:"p",
          text:{
            en:"Most koto made in Japan today come from one city, Fukuyama in Hiroshima prefecture, whose instruments were designated a national traditional craft on 22 May 1985 and registered as a regional collective trademark in 2006. The trade there traces its origins to the building of Fukuyama Castle in the early Edo period. Its scale has shrunk with the number of players: according to the national crafts association, Fukuyama made about 30,000 koto a year around 1970 and makes about 3,000 now. The kiri comes from Japan and North America; one Fukuyama maker interviewed about his craft prefers wood from the Aizu region of Fukushima, where trees grow slowly under the weight of snow and stay sound at the core even when large.",
            ja:"いま日本でつくられる箏の大半は、広島県の福山という一つの市から来る。福山琴は一九八五年五月二十二日に国の伝統的工芸品に指定され、二〇〇六年には地域団体商標に登録された。その地の箏づくりは、江戸時代初めの福山城の築城のころにさかのぼるとされる。規模は弾き手の数とともに縮んだ。伝統工芸品の業界団体によれば、福山は一九七〇年ごろ年に約三万面の箏をつくっていたが、いまは約三千面である。キリは日本と北米から来る。取材に応じた福山のあるつくり手は、福島県会津地方の桐を好む。雪に締めつけられてゆっくり育ち、大きくなっても芯に空洞ができないからだという。",
            zh:"今天日本製造的箏，大多出自同一座城市——廣島縣福山市。福山琴於 1985 年 5 月 22 日獲指定為國家傳統工藝品，2006 年註冊為地域團體商標。當地的製箏業據說可追溯到江戶時代初期興建福山城之時。其規模隨演奏人口一同萎縮：據傳統工藝品產業團體的資料，福山在 1970 年前後每年約產 30,000 面箏，如今約 3,000 面。桐木來自日本與北美；一位接受採訪的福山工匠偏愛福島縣會津地方的桐木，因為那裡的樹在積雪壓迫下緩慢生長，即使長得很大，芯部也不會中空。" } },
        { t:"steps",
          items:[
            { title:{ en:"Season outdoors", ja:"屋外で枯らす", zh:"戶外陳放" },
              jp:"天日乾燥",
              meta:{ en:"1–3 years", ja:"一〜三年", zh:"1–3 年" },
              text:{
                en:"Sawn kiri is stacked in the open for one to three years, through the rainy seasons, before artificial drying finishes the job.",
                ja:"挽いたキリを、梅雨もふくめて一〜三年屋外に積み、そのあと人工乾燥で仕上げる。",
                zh:"鋸好的桐木在戶外堆放 1 至 3 年，歷經梅雨季，再以人工乾燥收尾。" } },
            { title:{ en:"Hollow the shell", ja:"甲をくり抜く", zh:"挖出琴身" },
              jp:"甲づくり",
              meta:{ en:"by hand and chisel", ja:"手と鑿で", zh:"手工與鑿刀" },
              text:{
                en:"The curved top is carved and hollowed; on better grades the inside is cut with patterns such as a zigzag or reed-screen texture.",
                ja:"丸い甲を削ってくり抜く。上等なものは内側に綾杉や簾目などの模様を彫る。",
                zh:"削出並挖空弧形的琴面；較高等級者會在內側雕出鋸齒紋或簾紋等紋樣。" } },
            { title:{ en:"Close and scorch", ja:"裏板を付け、焼く", zh:"封底與燒烙" },
              jp:"甲焼き",
              meta:{ en:"hot irons", ja:"焼きごて", zh:"烙鐵" },
              text:{
                en:"The back board is fitted, then the surface is scorched with red-hot irons and polished, which darkens the soft earlywood and makes the grain stand out.",
                ja:"裏板を付けたのち、表面を焼きごてで焼いて磨く。やわらかい早材が黒ずみ、木目が浮き出る。",
                zh:"裝上背板後，以燒紅的烙鐵燒烙表面再打磨，較軟的早材因而變深，木紋隨之浮現。" } },
            { title:{ en:"Decorate and tune", ja:"装飾と調整", zh:"裝飾與調音" },
              jp:"仕上げ",
              meta:{ en:"inlay, maki-e, fittings", ja:"象嵌・蒔絵・金具", zh:"鑲嵌、蒔繪、金屬配件" },
              text:{
                en:"Ends are decorated with inlay, lacquer or marquetry; fittings are added and the instrument is strung and checked for tone.",
                ja:"両端を象嵌、蒔絵、寄木で飾り、金具を付け、弦を張って音を確かめる。",
                zh:"兩端以鑲嵌、漆藝蒔繪或拼木裝飾，裝上配件，上弦並檢查音色。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Hiroshima Prefecture and Fukuyama City pages on Fukuyama koto; Association for the Promotion of Traditional Craft Industries (Kōgei Japan); interview with a Fukuyama maker (Hitokoto Monokoto).",
            ja:"出典：広島県・福山市「福山琴」、伝統的工芸品産業振興協会（KOGEI JAPAN）、福山の製作者への取材記事（ヒトコト・モノコト）。",
            zh:"資料來源：廣島縣與福山市「福山琴」介紹、傳統的工藝品產業振興協會（KOGEI JAPAN）、福山工匠訪談（ヒトコト・モノコト）。" } }
      ] },
    { t:"section",
      id:"shamisen",
      title:{ en:"Shamisen and biwa: hard necks, hollow bodies", ja:"三味線と琵琶——硬い棹、中空の胴", zh:"三味線與琵琶：堅硬的琴桿，中空的琴身" },
      jp:"棹と胴",
      body:[
        { t:"p",
          text:{
            en:"The three-string <em>shamisen</em> reached Japan from the Ryūkyū islands in the sixteenth century and became the voice of kabuki, puppet theatre and popular song. Its long, thin neck carries the strings over a small square body covered with skin, and it is the neck that decides the price. Tokyo's traditional shamisen makers list their neck woods as kōki, shitan, kashi, karin and mulberry. <em>Kōki</em> is red sanders (<em>Pterocarpus santalinus</em>), a heavy, dark red wood endemic to the southern Eastern Ghats of India and now listed in Appendix II of <a href=\"cites.html\">CITES</a>; it is the classic top grade. Shitan and karin are related tropical hardwoods; the native kashi and mulberry are the traditional economies.",
            ja:"三本の弦の<em>三味線</em>は、十六世紀に琉球から日本に入り、歌舞伎、人形浄瑠璃、はやり唄の声となった。長く細い棹が、皮を張った小さな四角い胴の上に弦を渡す。値段を決めるのは棹である。東京の三味線の職人は、棹の材として紅木、紫檀、樫、花梨、桑を挙げる。<em>紅木</em>はレッドサンダース（<em>Pterocarpus santalinus</em>）で、インド南部の東ガーツ山脈にのみ育つ重く暗い赤の木であり、いまは<a href=\"cites.html\">ワシントン条約</a>の附属書IIに載る。昔からの最上級である。紫檀と花梨は近縁の熱帯の広葉樹で、国産の樫と桑は昔からの手ごろな材である。",
            zh:"三弦的<em>三味線</em>於十六世紀從琉球傳入日本，成為歌舞伎、人形淨琉璃與流行小調的聲音。細長的琴桿把琴弦架在蒙皮的小方形琴身上，而決定價格的正是琴桿。東京的三味線工匠列出的琴桿用材有紅木、紫檀、橿木、花梨與桑木。<em>紅木</em>即紅檀（<em>Pterocarpus santalinus</em>），一種沉重、暗紅色的木材，僅產於印度南部東高止山脈，現已列入<a href=\"cites.html\">華盛頓公約</a>附錄二；它是傳統上的最高等級。紫檀與花梨是近緣的熱帶闊葉材；本土的橿木與桑木則是傳統的平價選擇。" } },
        { t:"p",
          text:{
            en:"The body, or <em>dō</em>, is a square frame of karin or a cheaper substitute. On better instruments the inside walls are carved with a herringbone pattern called <em>ayasugi</em>, said to imitate the interior of a drum. Makers are not unanimous about what it does: one long-established Tokyo shop argues that the ridges scatter sound and shorten the body's resonance rather than enrich it, and warns buyers not to assume that an ayasugi body is the reason a shamisen costs more. It is a good example of a craft detail whose acoustic value is asserted more often than it is measured.",
            ja:"胴は、花梨かその代わりの安い材で四角い枠に組む。上等な三味線では、胴の内側に<em>綾杉</em>と呼ぶ杉綾の模様を彫る。太鼓の内側をまねたものといわれる。その働きについて、つくり手の意見は一致しない。東京の老舗の三味線店の一つは、ギザギザが音を乱反射させ、胴の共鳴を豊かにするよりむしろ短くすると論じ、綾杉胴だから高い三味線だと安易に思わないよう買い手に注意している。音響上の価値が、測られるよりも語られることの多い工芸の細部の、よい例である。",
            zh:"琴身（<em>胴</em>）是以花梨或較便宜的替代材組成的方框。較好的琴會在琴身內壁雕出人字形的<em>綾杉</em>紋，據說是模仿太鼓的內部。工匠對其作用看法不一：東京一家老字號三味線店認為，這些鋸齒會讓聲音亂反射，縮短而非豐富琴身的共鳴，並提醒買家不要以為綾杉胴就是三味線較貴的理由。這是一個典型例子：工藝細節的聲學價值，被說得多，量得少。" } },
        { t:"p",
          text:{
            en:"The <em>biwa</em>, the pear-shaped lute of blind reciters and samurai ballads, shows the radiator principle more clearly. In the Chikuzen biwa the body is hollowed from mulberry and closed with a belly of kiri: a dense, hard back and a light, resonant front, the same division of labour as a guitar's rosewood back and spruce top. The Satsuma biwa of southern Kyūshū is louder and harder, and there the preference is for mulberry throughout. Players and makers of the Satsuma school regard an all-mulberry instrument (<em>sōkuwa</em>) as the best, while a <em>katakuwa</em> instrument has a mulberry front with a back of keyaki or similar. The large plectrum is ideally of <em>tsuge</em>, Japanese boxwood, one of the densest native woods at about 0.90 g/cm³ and the traditional material of combs.",
            ja:"盲僧の語りや武士の歌の、洋梨形の撥弦楽器である<em>琵琶</em>は、放つ木の原理をもっとはっきり見せる。筑前琵琶では、胴を桑からくり抜き、桐の腹板でふさぐ。重く硬い背と、軽くよく鳴る表——ギターのローズウッドの裏板とスプルースの表板と同じ分業である。九州南部の薩摩琵琶は音が大きく硬く、全体に桑が好まれる。薩摩琵琶の奏者やつくり手は、すべて桑でつくる「総桑」を最上とし、「片桑」は腹板だけ桑で、裏板にケヤキなどを使う。大きな撥は<em>つげ</em>が最良とされる。気乾密度およそ〇・九〇g/cm³と国産で最も重い木の一つで、昔から櫛の材である。",
            zh:"盲僧說唱與武士歌謠所用的梨形撥弦樂器<em>琵琶</em>，把「輻射材」的原理展現得更清楚。筑前琵琶以桑木挖空成琴身，再以桐木面板封住：厚重堅硬的背、輕盈善鳴的面——與吉他玫瑰木背板配雲杉面板是同一種分工。九州南部的薩摩琵琶音量較大、音色較硬，偏好通體用桑木。薩摩琵琶的演奏者與工匠以全桑木製作的「總桑」為上品；「片桑」則只有面板用桑木，背板用櫸木等。大撥子以<em>黃楊木</em>（日本黃楊）為最佳，它是密度最高的本土木材之一，氣乾密度約 0.90 g/cm³，自古也是梳子的材料。" } },
        { t:"tiny",
          text:{
            en:"Sources: Tokyo Metropolitan Government, Tokyo traditional crafts — Tokyo shamisen; a Tokyo shamisen shop's notes on ayasugi bodies; Satsuma biwa society; Japanese Wikipedia, Chikuzen biwa; Forestry and Forest Products Research Institute, Wood Industry Handbook (4th ed.), densities.",
            ja:"出典：東京都産業労働局「東京三味線」、東京の三味線店による綾杉胴の解説、薩摩琵琶の会の解説、ウィキペディア「筑前琵琶」、森林総合研究所監修『木材工業ハンドブック』改訂四版（密度）。",
            zh:"資料來源：東京都產業勞動局「東京三味線」、東京三味線店關於綾杉胴的說明、薩摩琵琶團體的介紹、日文維基百科「筑前琵琶」、森林綜合研究所監修《木材工業手冊》第四版（密度）。" } }
      ] },
    { t:"section",
      id:"taiko",
      title:{ en:"Drums: carved keyaki and stave-built tubs", ja:"太鼓——くり抜きのケヤキと桶の胴", zh:"太鼓：整木櫸木與拼板桶胴" },
      jp:"太鼓の胴",
      body:[
        { t:"p",
          text:{
            en:"The classic Japanese drum, the long-bodied <em>nagadō-daiko</em>, has a shell hollowed from a single section of log and heads of cowhide stretched and tacked over each end. The prized wood is keyaki (zelkova): one Japanese drum supplier describes the carved keyaki body as the top-grade product, valued for its tone and its handsome grain. At about 0.69 g/cm³ keyaki is heavy, hard and stiff, and a thick, rigid shell reflects the energy of the heads back into them instead of absorbing it, which is what gives a large keyaki drum its long, deep note. Carved bodies in other broadleaves — sen (harigiri, about 0.52 g/cm³), tamo ash and similar — are sold as a cheaper grade, and schools often buy bodies laminated from staves of one species or moulded in synthetic resin.",
            ja:"日本の太鼓の典型である<em>長胴太鼓</em>は、丸太の一区切りをくり抜いた胴の両端に、牛皮を張って鋲で留める。珍重される木はケヤキである。ある楽器会社は、玉切りした原木からくり抜くケヤキの胴を、音色と美しい木目で評価される高級品と説明する。気乾密度およそ〇・六九g/cm³のケヤキは重く硬く剛い。厚く剛い胴は、皮のエネルギーを吸わずに皮へ返し、それが大きなケヤキの太鼓の長く深い音を生む。セン（ハリギリ、およそ〇・五二g/cm³）やタモなど、ほかの広葉樹をくり抜いた胴は「目有材」と呼ばれる手ごろな等級で売られ、学校はしばしば同じ樹種の板を筒状に張り合わせた集成胴や、合成樹脂の胴を買う。",
            zh:"日本太鼓的典型——長胴的<em>長胴太鼓</em>——鼓身由一段原木整塊挖空而成，兩端蒙上牛皮並以鉚釘固定。最受珍視的木材是櫸木：一家日本樂器公司形容，從截段原木挖空而成的櫸木鼓身是高級品，以音色與美麗木紋著稱。櫸木氣乾密度約 0.69 g/cm³，沉重、堅硬而剛挺；厚實剛硬的鼓身會把鼓皮的能量反射回鼓皮，而不是吸收掉，這正是大型櫸木太鼓低沉悠長之聲的由來。以其他闊葉材——刺楸（約 0.52 g/cm³）、白蠟木等——挖成的鼓身，則以較平價的等級出售；學校常購買以同種木材拼成筒狀的集成鼓身，或合成樹脂鼓身。" } },
        { t:"p",
          text:{
            en:"The second family of drums is built like a bucket. The <em>okedō-daiko</em> has a body of quartersawn staves of sugi, hinoki or sawara, glued edge to edge, with the heads either laced directly to each other or stretched on iron hoops and tensioned with rope. It is lighter and cheaper than a carved drum and can be made in almost any size, and the smaller ones are slung from the shoulder and played on the move. Drumsticks (<em>bachi</em>) complete the set: one supplier offers them in kashi, which is very hard, in hō (magnolia), which is soft, and in beech, which sits between the two. Among the old drum makers still working, Asano Taiko in Ishikawa prefecture dates its founding to 1609.",
            ja:"太鼓のもう一つの系統は、桶のようにつくる。<em>桶胴太鼓</em>の胴は、スギ、ヒノキ、サワラの柾目の板を桶のように張り合わせたもので、皮を紐で直接締めるものと、鉄の輪に張った皮を紐で締めるものがある。くり抜きの太鼓より軽く安く、ほとんどどんな大きさにもでき、小さなものは肩にかけて動きながら打つ。撥もそろってはじめて一式になる。ある会社は撥を、非常に硬いカシ、やわらかいホオ、その中間のブナの三種で扱う。いまも続く古い太鼓店のなかで、石川県の浅野太鼓は一六〇九年の創業を掲げる。",
            zh:"太鼓的第二個家族，做法如同木桶。<em>桶胴太鼓</em>的鼓身以柳杉、扁柏或花柏的徑切板條拼合而成，鼓皮或以繩索直接互相拉緊，或繃在鐵圈上再以繩索張緊。它比整木挖空的鼓更輕、更便宜，幾乎可做成任何尺寸，小型者可掛在肩上邊走邊打。鼓棒（<em>撥</em>）使整套齊備：一家公司提供三種材質——極硬的橿木、柔軟的厚朴，以及介於兩者之間的山毛櫸。在仍營業的老字號太鼓店中，石川縣的淺野太鼓以 1609 年為創業之年。" } },
        { t:"panel",
          title:{ en:"Drums in Hida", ja:"飛騨の太鼓", zh:"飛驒的太鼓" },
          tint:"wood",
          body:[
            { t:"p",
              text:{
                en:"Gifu's most famous drum is carried, not placed. On the night of 19 April each year, at the Furukawa Festival in Hida city, a great drum is borne through the streets on a wooden frame by hundreds of men in white loincloths, while two men sit astride it and strike it in turn; groups carrying twelve smaller <em>tsuke-daiko</em> on poles try to push in behind it until after midnight. The <em>okoshi-daiko</em> and the festival's float processions were designated an Important Intangible Folk Cultural Property on 28 January 1980 and inscribed on UNESCO's list with Japan's other float festivals on 1 December 2016. In Takayama, the carved floats of the spring and autumn festivals are built largely of keyaki and mizume, and the town's instrument shops still sell and repair taiko, shamisen and the flutes played on the floats.",
                ja:"岐阜で最も名高い太鼓は、据えられるのでなく担がれる。毎年四月十九日の夜、飛騨市の古川祭では、数百人のさらし姿の男たちが大太鼓を櫓に載せて町を担ぎ回り、太鼓の上にまたがった二人の男が交互に打つ。十二本の小さな<em>付け太鼓</em>を担ぐ組は、その後ろにつこうと夜半過ぎまでせめぎ合う。「古川祭の起し太鼓・屋台行事」は一九八〇年一月二十八日に重要無形民俗文化財に指定され、二〇一六年十二月一日には日本各地の山・鉾・屋台行事とともにユネスコの無形文化遺産に登録された。高山では、春と秋の祭りの彫刻屋台が主にケヤキとミズメでつくられ、町の楽器店はいまも太鼓や三味線、屋台で吹かれる笛を売り、直している。",
                zh:"岐阜最有名的太鼓是被扛著走的，而不是擺著的。每年 4 月 19 日夜裡，飛驒市古川祭中，數百名身著白色兜襠布的男子把大太鼓架在木製的櫓上扛著穿街而行，兩名男子跨坐鼓上輪流擊打；扛著十二面小型<em>付太鼓</em>的隊伍則爭相擠到大鼓後方，一直持續到午夜之後。「古川祭的起太鼓・屋台行事」於 1980 年 1 月 28 日獲指定為重要無形民俗文化財，並於 2016 年 12 月 1 日與日本各地的山、鉾、屋台行事一同列入聯合國教科文組織無形文化遺產。在高山，春秋兩季祭典的雕刻屋台主要以櫸木與水目櫻打造，鎮上的樂器行至今仍販售並修理太鼓、三味線以及屋台上吹奏的笛子。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Suzuki Gakki Seisakusho, notes on taiko and bachi; a taiko reference site on stave-built drums; Asano Taiko; Japanese Wikipedia, Furukawa Festival; Hida City; Takayama instrument shop Fukuei Gakki.",
            ja:"出典：鈴木楽器製作所「和太鼓・バチについて」、和太鼓の解説サイト（桶胴太鼓）、浅野太鼓、ウィキペディア「古川祭」、飛騨市、高山の福栄楽器。",
            zh:"資料來源：鈴木樂器製作所〈關於和太鼓與鼓棒〉、和太鼓解說網站（桶胴太鼓）、淺野太鼓、日文維基百科「古川祭」、飛驒市、高山福榮樂器。" } }
      ] },
    { t:"section",
      id:"percussion",
      title:{ en:"Clappers and wooden fish", ja:"拍子木と木魚", zh:"拍子木與木魚" },
      jp:"打つ木",
      body:[
        { t:"p",
          text:{
            en:"The simplest wooden instrument in Japan is a pair of square sticks tied together with a cord. <em>Hyōshigi</em> are cut from hard, dense woods — shitan, ebony, karin and kashi among them — so that when struck together they give a short, sharp crack that carries down a street. The neighbourhood fire watch once walked the lanes at night striking them and calling “hi no yōjin”, beware of fire; the sumo caller strikes a pair of cherry wood before announcing the wrestlers; and in kabuki the stage clappers, called <em>ki</em>, are of white oak (shirakashi). The physics is that of the taiko shell taken to its limit: very little of the energy is absorbed, so almost all of it leaves as a single hard transient.",
            ja:"日本で最も簡単な木の楽器は、紐でつないだ二本の角棒である。<em>拍子木</em>は紫檀、黒檀、花梨、樫など硬く重い木から切り出され、打ち合わせると短く鋭い、通りの先まで届く音を出す。かつては町内の夜回りが「火の用心」と唱えながらそれを打って路地を歩いた。相撲の呼出しは力士の名を呼ぶ前に桜の拍子木を打ち、歌舞伎で幕の開け閉めに打つ柝はシラカシである。物理でいえば太鼓の胴を極限まで進めたもので、エネルギーはほとんど吸われず、ほぼすべてが一つの硬い立ち上がりの音として出ていく。",
            zh:"日本最簡單的木製樂器，是一對以繩相連的方木棒。<em>拍子木</em>取材自紫檀、黑檀、花梨、橿木等堅硬緻密的木材，互擊時發出短促清脆、能傳遍整條街的聲響。從前町內的巡夜人夜裡邊走巷弄邊擊打，口喊「小心火燭」；相撲的呼出在唱名力士之前敲擊一對櫻木拍子木；歌舞伎舞台上的拍子木稱為「柝」，用的是白橿。就物理而言，它是太鼓鼓身推到極致的版本：能量幾乎不被吸收，幾乎全部化作一聲堅硬的瞬態聲響離去。" } },
        { t:"p",
          text:{
            en:"The <em>mokugyo</em>, the round, slit wooden drum carved with a fish or dragon and beaten during sutra chanting, takes the opposite approach to the clapper. It is a hollow resonator, and its wood is camphor (kusunoki), which at about 0.52 g/cm³ is only moderately dense. One maker explains the choice simply: camphor grows very large and resists cracking, and a large temple mokugyo needs a log at least 90 centimetres across. The logs rest for two to three years after felling; the block is roughed out and hollowed, then left to dry for another seven to ten years, clamped at the mouth, before final carving and tuning. The thickness and height of a plate of wood left inside the hollow, the <em>itaura</em>, decide the voice. In all, one instrument takes twelve to fifteen years. Imports have cut deep into the trade: a Nagoya television report found only five mokugyo makers left in Japan, all in Aichi prefecture, where they belong to the Owari tradition of Buddhist altar goods.",
            ja:"丸く、口の切れ目があり、魚や龍を彫り、読経のあいだ打たれる<em>木魚</em>は、拍子木とは反対の道をとる。木魚は中空の共鳴体であり、その木はクスノキである。気乾密度およそ〇・五二g/cm³と、重さは中ほどにすぎない。あるつくり手はその理由を簡単に説明する。クスノキは大きく育ち、割れにくい。寺の大きな木魚には、少なくとも直径九十センチの丸太が要る。丸太は伐採後二〜三年寝かせ、荒どりしてくり抜いたのち、口に鎹を打って、さらに七〜十年乾かしてから、仕上げの彫りと音の調整に入る。中に残す<em>板裏</em>という部分の厚さと高さが音を決める。一つの木魚に、あわせて十二〜十五年かかる。輸入品は仕事に深く食い込んだ。名古屋のテレビ局の報道によれば、国内に残る木魚のつくり手は五軒のみで、すべて愛知県にあり、尾張仏具の伝統に属する。",
            zh:"圓形、開有口縫、雕成魚或龍的形狀、誦經時敲擊的<em>木魚</em>，走的是與拍子木相反的路。它是中空的共鳴體，用材是樟木，氣乾密度約 0.52 g/cm³，只算中等緻密。一位工匠對這個選擇的解釋很簡單：樟樹能長得很大，又不易開裂；寺院用的大木魚需要直徑至少 90 公分的原木。原木伐下後先靜置 2 至 3 年；粗胚挖空後，在口部釘上鋦釘，再乾燥 7 至 10 年，才進行最後的雕刻與調音。留在空腔內部一塊稱為<em>板裏</em>的木板，其厚度與高度決定了聲音。一只木魚前後共需 12 至 15 年。進口品大幅侵蝕了這一行：據名古屋一家電視台報導，日本國內僅剩五家木魚製造者，全在愛知縣，屬於尾張佛具的傳統。" } },
        { t:"figure",
          caption:{
            en:"Air-dry densities of the Japanese woods on this page, g/cm³. Kiri, the soundboard of the koto, is the lightest; boxwood, used for biwa plectrums, and the evergreen oaks of the clappers are the heaviest. Values from the Wood Industry Handbook (4th ed.) as tabulated by Hokkaidō Prefecture; mizume from the Japan Wood Information Center. Individual pieces vary by ten per cent or more.",
            ja:"この頁の日本の木の気乾密度（g/cm³）。箏の響板のキリが最も軽く、琵琶の撥のツゲと拍子木のカシ類が最も重い。値は『木材工業ハンドブック』改訂四版（北海道の整理表による）、ミズメは日本木材総合情報センターによる。一つずつの材で一割以上違う。",
            zh:"本頁所列日本木材的氣乾密度（g/cm³）。箏面板所用的桐木最輕；琵琶撥子所用的黃楊與拍子木所用的常綠橿類最重。數值取自《木材工業手冊》第四版（據北海道整理之表）；水目櫻取自日本木材總合情報中心。個別木料差異可達一成以上。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"How heavy are the instrument woods?", ja:"楽器の木の重さ", zh:"樂器木材有多重？" }, labelW:260, dec:2, rowH:25, max:1.0,
            items:[
              { n:{ en:"Kiri — koto", ja:"キリ——箏", zh:"桐木——箏" }, v:0.30, f:"#E0E6DB" },
              { n:{ en:"Sugi — stave drums", ja:"スギ——桶胴", zh:"柳杉——桶胴" }, v:0.38, f:"#E0E6DB" },
              { n:{ en:"Ezomatsu — soundboards", ja:"エゾマツ——響板", zh:"蝦夷雲杉——響板" }, v:0.43, f:"#E0E6DB" },
              { n:{ en:"Hinoki — Noh stage", ja:"ヒノキ——能舞台", zh:"扁柏——能舞台" }, v:0.44, f:"#E0E6DB" },
              { n:{ en:"Hōnoki — soft bachi", ja:"ホオノキ——撥", zh:"厚朴——鼓棒" }, v:0.49, f:"#EDE5D2" },
              { n:{ en:"Katsura", ja:"カツラ", zh:"連香樹" }, v:0.50, f:"#EDE5D2" },
              { n:{ en:"Kusunoki — mokugyo", ja:"クスノキ——木魚", zh:"樟木——木魚" }, v:0.52, f:"#EDE5D2" },
              { n:{ en:"Sen — cheaper taiko", ja:"セン——太鼓", zh:"刺楸——太鼓" }, v:0.52, f:"#EDE5D2" },
              { n:{ en:"Tochi", ja:"トチノキ", zh:"七葉樹" }, v:0.52, f:"#EDE5D2" },
              { n:{ en:"Yamazakura", ja:"ヤマザクラ", zh:"山櫻" }, v:0.62, f:"#EDE5D2" },
              { n:{ en:"Kuwa — biwa", ja:"クワ——琵琶", zh:"桑木——琵琶" }, v:0.62, f:"#EDE5D2" },
              { n:{ en:"Keyaki — taiko", ja:"ケヤキ——太鼓", zh:"櫸木——太鼓" }, v:0.69, f:"#EEE1DF" },
              { n:{ en:"Mizume", ja:"ミズメ", zh:"水目櫻" }, v:0.72, f:"#EEE1DF" },
              { n:{ en:"Shirakashi — kabuki ki", ja:"シラカシ——柝", zh:"白橿——柝" }, v:0.83, f:"#EEE1DF" },
              { n:{ en:"Akagashi", ja:"アカガシ", zh:"赤橿" }, v:0.87, f:"#EEE1DF" },
              { n:{ en:"Tsuge — biwa plectrum", ja:"ツゲ——琵琶の撥", zh:"黃楊——琵琶撥子" }, v:0.90, f:"#EEE1DF" }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: Japanese Wikipedia, hyōshigi; Ichikawa Mokugyo Seizōsho (production process); Nagoya TV report on Japan's last mokugyo makers; Wood Industry Handbook (4th ed.) via Hokkaidō Prefecture; Japan Wood Information Center.",
            ja:"出典：ウィキペディア「拍子木」、市川木魚製造所「製作過程」、名古屋テレビの国産木魚の報道、『木材工業ハンドブック』改訂四版（北海道の整理表）、日本木材総合情報センター。",
            zh:"資料來源：日文維基百科「拍子木」、市川木魚製造所〈製作過程〉、名古屋電視台關於國產木魚的報導、《木材工業手冊》第四版（北海道整理表）、日本木材總合情報中心。" } }
      ] },
    { t:"section",
      id:"bamboo-noh",
      title:{ en:"Bamboo, and a floor that sings", ja:"竹と、鳴る床", zh:"竹，以及會唱歌的地板" },
      jp:"尺八・笙・能舞台",
      body:[
        { t:"p",
          text:{
            en:"Two of Japan's great wind instruments are not wood at all. The <em>shakuhachi</em>, the end-blown flute of Zen mendicants, is cut from the thick root end of madake bamboo. The <em>shō</em>, the mouth organ of court music, gathers seventeen slender bamboo pipes into a cup-shaped wind chest; its traditional material is <em>susudake</em>, bamboo that has been blackened by decades of hearth smoke in the roof space of a thatched farmhouse — the kind of house still standing at Shirakawa-gō. Such bamboo is now so scarce that many new instruments use plain bamboo instead. Because the player's breath condenses on the reeds, the shō is warmed over a small brazier before and between pieces, an unusual case of an instrument whose climate the player manages minute by minute.",
            ja:"日本の大きな管楽器のうち二つは、木ではない。虚無僧の縦笛である<em>尺八</em>は、マダケの太い根元から切り出す。雅楽の<em>笙</em>は、十七本の細い竹管を椀形の匏に立てる。昔からの材は<em>煤竹</em>で、茅葺きの民家の屋根裏で、囲炉裏の煙に何十年もいぶされて黒ずんだ竹である——白川郷にいまも立つような家である。そうした竹はいまでは非常に少なく、新しい楽器の多くは白い竹を使う。息がリードに結露するので、笙は曲の前とあいまに小さな火鉢や電熱器であたためる。奏者が楽器の気候を一分ごとに管理する、珍しい例である。",
            zh:"日本兩件重要的管樂器根本不是木頭。虛無僧所吹的直笛<em>尺八</em>，取自苦竹（真竹）粗大的根部。雅樂的<em>笙</em>把十七根細竹管插在碗形的氣斗上；傳統材料是<em>煤竹</em>——在茅草屋頂農家的閣樓裡，被地爐煙燻了數十年而變黑的竹子，正是白川鄉至今仍保存的那種房屋。這種竹子如今極為稀少，許多新笙改用未燻的白竹。由於吹奏者的氣息會在簧片上凝結，笙在演奏前與曲間要放在小火盆上烘暖——這是演奏者分分秒秒管理樂器小氣候的罕見例子。" } },
        { t:"p",
          text:{
            en:"The largest wooden instrument in Japan may be the Noh stage. Its main platform is a square of three <em>ken</em>, about 5.4 metres a side, built entirely of hinoki, with a painted pine on the back wall (<em>kagami-ita</em>) as the play's permanent scenery. When an actor stamps — the <em>ashi-byōshi</em> that punctuates the dances — the floor is meant to answer. Since at least the Azuchi-Momoyama period, when jars were set beneath the national-treasure stage at Nishi Hongan-ji in Kyoto, builders have placed large earthenware jars under the floor of the stage and the bridgeway, mouths tilted upward, to resonate with the stamping; later builders hung them in pits to refine the effect, and many modern Noh theatres still install them. How much the jars actually add is less well documented than the tradition itself, but the hinoki boards, laid on sleepers over a hollow space, form a large, light, resonant plate — a soundboard one walks on. See <a href=\"architecture.html\">Temples, Townhouses & Gasshō</a> for Gifu's other hinoki buildings.",
            ja:"日本で最も大きな木の楽器は、能舞台かもしれない。本舞台は三間、およそ五・四メートル四方の正方形で、すべてヒノキでつくられ、奥の鏡板に描かれた松が能の永遠の背景となる。演者が舞のなかで足拍子を踏むと、床はそれに応えるようにできている。少なくとも安土桃山時代、京都の西本願寺の国宝の能舞台の床下に甕が置かれてから、大工は舞台と橋掛りの床下に大きな甕を、口を斜め上に向けて据え、足拍子に共鳴させてきた。のちには甕を穴に吊るして効果を高める工夫もされ、いまも多くの能楽堂が甕を据える。甕が実際にどれだけ効くかは、言い伝えほどには記録されていない。だが、中空の上に根太で支えたヒノキの床板は、大きく軽くよく鳴る板——人が歩く響板——になっている。岐阜のほかのヒノキの建物は<a href=\"architecture.html\">社寺・町家・合掌</a>を参照。",
            zh:"日本最大的木製樂器，或許是能舞台。主舞台為三間見方、邊長約 5.4 公尺的正方形，全以扁柏建造，後牆鏡板上所繪的松樹是能劇永恆的布景。演員在舞中踏出「足拍子」時，地板就該有所回應。至遲自安土桃山時代京都西本願寺國寶能舞台的地板下放置陶甕起，匠師便在舞台與橋掛的地板下擺放大陶甕，甕口朝斜上方，以與踏步聲共鳴；後來更有人把甕懸吊在坑中以加強效果，許多現代能樂堂至今仍如此設置。陶甕究竟增添了多少聲響，文獻記載遠不如傳說本身詳盡；但以格柵架在中空空間上的扁柏地板，本身就是一塊大而輕、善於共鳴的板——一塊人可以在上面行走的響板。岐阜其他的扁柏建築見<a href=\"architecture.html\">寺社、町家與合掌</a>。" } },
        { t:"note",
          label:{ en:"Noh in the mountains of Gifu", ja:"岐阜の山の能", zh:"岐阜山中的能" },
          text:{
            en:"Every 13 April at Nōgō Hakusan Shrine, deep in the Neo valley of Motosu city, villagers perform <em>Nōgō no nō-kyōgen</em>, a form of Noh and comic kyōgen older than the codified schools of the capital. The roles have been handed down orally within sixteen hereditary households of village <em>sarugaku</em> players, and the performance was among the first to be designated an Important Intangible Folk Cultural Property.",
            ja:"毎年四月十三日、本巣市根尾の谷の奥の能郷白山神社で、村人が「能郷の能・狂言」を演じる。都で体系化された流派より古い姿を残す能と狂言である。役は村の猿楽衆十六戸のなかで口伝えに受け継がれ、最初に重要無形民俗文化財に指定されたものの一つである。",
            zh:"每年 4 月 13 日，在本巢市根尾山谷深處的能鄉白山神社，村民演出「能鄉之能・狂言」——一種比京城中定型的流派更古老的能與狂言。角色在村中十六戶世襲的猿樂眾家族中口耳相傳，並是最早獲指定為重要無形民俗文化財的項目之一。" } },
        { t:"tiny",
          text:{
            en:"Sources: Japanese Wikipedia, shō; the-noh.com (Noh stage; jars under the stage); Japanese Wikipedia, Nōgō no nō-kyōgen; Motosu City.",
            ja:"出典：ウィキペディア「笙」、the能ドットコム（能舞台、床下の甕）、ウィキペディア「能郷の能・狂言」、本巣市。",
            zh:"資料來源：日文維基百科「笙」、the能.com（能舞台、舞台下的陶甕）、日文維基百科「能鄉之能・狂言」、本巢市。" } }
      ] },
    { t:"section",
      id:"western",
      title:{ en:"Japanese woods in Western instruments", ja:"洋楽器のなかの日本の木", zh:"西洋樂器中的日本木材" },
      jp:"洋楽器と国産材",
      body:[
        { t:"p",
          text:{
            en:"The clearest success of a Japanese wood in a Western instrument so far has been a spruce. Hokkaidō has two native species, <em>ezomatsu</em> (Picea jezoensis, about 0.43 g/cm³) and <em>akaezomatsu</em> (Picea glehnii), close relatives of the Sitka and European spruces of guitars and violins. Yamaha states that the soundboards of pianos made in Japan were once of akaezomatsu. A timber company in Kitami, founded in 1950 expressly to supply akaezomatsu logs to Nippon Gakki (today's Yamaha) for piano soundboards, was making around 70 per cent of the soundboards in Japanese-built pianos in 2006, according to a Hokkaidō newsletter of that year. From the 1990s, however, large natural akaezomatsu ran out and European and Sitka spruce took its place. Hokkaidō now holds about 31 million cubic metres of planted akaezomatsu, but most of it is 40–55 years old and about 25 centimetres across — too small and knotty for soundboards. In 2016 Yamaha's Hokkaidō subsidiary, the town of Engaru and the Okhotsk regional office began the <em>Oto no Mori</em> (“forest of sound”) project to grow akaezomatsu to instrument quality, which Yamaha estimates could take 50 to 100 years.",
            ja:"西洋の楽器でこれまで最もはっきり成功した日本の木は、トウヒの仲間である。北海道には、ギターやバイオリンのシトカスプルースやジャーマンスプルースの近縁である<em>エゾマツ</em>（Picea jezoensis、およそ〇・四三g/cm³）と<em>アカエゾマツ</em>（Picea glehnii）が自生する。ヤマハは、かつて日本でつくられるピアノの響板にはアカエゾマツが使われていたと述べる。日本楽器（いまのヤマハ）にピアノ響板用のアカエゾマツの原木を納めるために一九五〇年に北見で設立された木材会社は、二〇〇六年の北海道の広報誌によれば、国産ピアノの響板のおよそ七割をつくっていた。だが一九九〇年代から、大径の天然のアカエゾマツが尽き、ジャーマンスプルースとシトカスプルースに置き換わった。北海道にはいまおよそ三千百万立方メートルのアカエゾマツの人工林があるが、その多くは四十〜五十五年生、直径およそ二十五センチで、響板には小さく節も多い。二〇一六年、ヤマハの北海道の子会社、遠軽町、オホーツク総合振興局は、アカエゾマツを楽器に使える質まで育てる「おとの森」の活動を始めた。ヤマハは、それに五十年から百年かかりうると見る。",
            zh:"迄今在西洋樂器中最明確成功的日本木材，是一種雲杉。北海道有兩種原生雲杉：<em>蝦夷雲杉</em>（Picea jezoensis，約 0.43 g/cm³）與<em>赤蝦夷雲杉</em>（Picea glehnii），都是吉他與小提琴所用西加雲杉、歐洲雲杉的近親。Yamaha 表示，日本製鋼琴的響板過去用的是赤蝦夷雲杉。北見一家木材公司於 1950 年為了向日本樂器（今日的 Yamaha）供應鋼琴響板用的赤蝦夷雲杉原木而成立；據北海道 2006 年的一份會刊，當時它生產了日本國產鋼琴約七成的響板。然而自 1990 年代起，大徑天然赤蝦夷雲杉告罄，歐洲雲杉與西加雲杉取而代之。北海道如今約有 3,100 萬立方公尺的赤蝦夷雲杉人工林，但大多為 40 至 55 年生、直徑約 25 公分，對響板而言太小、節也太多。2016 年，Yamaha 在北海道的子公司、遠輕町與鄂霍次克綜合振興局展開「音之森」計畫，要把赤蝦夷雲杉培育到可製作樂器的品質；Yamaha 估計這可能需要 50 至 100 年。" } },
        { t:"p",
          text:{
            en:"In guitars, Japanese woods have so far appeared mainly in limited editions and in the work of individual makers rather than in catalogue models. Gifu's own K. Yairi marked its 85th anniversary with a limited model named <em>Kodama</em>, “tree spirit”, with a top of Yakushima cedar, on sale in 2021; <em>Yakusugi</em> is the name for the ancient sugi of Yakushima, which can no longer be felled, so the wood reaching the market comes from old logs and stumps left from Edo-period logging, sold at occasional auctions. In Matsumoto, in neighbouring Nagano prefecture, the guitar company Deviser builds acoustic and electric instruments under its Momose brand with tops, backs and bodies of Japanese cherry (<em>sakura</em>) and horse chestnut (<em>tochi</em>), and showed more than a hundred limited models in these woods at its 2022 trade show. The maker describes cherry as moderately hard, bringing out the upper mids and highs, and tochi as giving a bright, fairly solid midrange — descriptions worth reading alongside the listening evidence on <a href=\"listening.html\">Can You Hear the Wood?</a>.",
            ja:"ギターでは、日本の木はこれまで、定番のカタログの機種よりも、主に限定モデルや個人のつくり手の仕事に現れてきた。岐阜のヤイリギターは創業八十五周年を記念して、屋久杉の表板をもつ限定モデル「木霊-KODAMA-」をつくり、二〇二一年に店頭に並んだ。<em>屋久杉</em>は屋久島の古いスギの呼び名で、もはや伐ることはできず、市場に出る材は江戸時代の伐採で残された土埋木や切り株から来て、ときおりの入札で売られる。隣の長野県の松本では、ギター会社ディバイザーが「Momose」の名で、表板や裏板、ボディに日本の<em>サクラ</em>と<em>トチ</em>を使ったアコースティックとエレクトリックの楽器をつくり、二〇二二年の展示会ではこれらの木の限定モデルを百本以上並べた。メーカーは、サクラはほどよく硬くハイミッドから高音域に特徴が出る、トチはローミッドからミッドが明るく抜ける程よくソリッドな音と説明する。<a href=\"listening.html\">木は聴こえるか</a>の聴取の証拠とあわせて読みたい説明である。",
            zh:"在吉他上，日本木材至今主要出現在限量款與個人製琴師的作品中，而非常規型錄機種。岐阜本地的 K.Yairi 為紀念創業 85 週年，推出以屋久杉為面板的限量款「木靈-KODAMA-」，於 2021 年上市。<em>屋久杉</em>是屋久島古老柳杉的名稱，如今已不得砍伐，流入市場的木料來自江戶時代伐木留下的埋土舊木與樹樁，透過偶爾舉行的標售出售。在鄰近的長野縣松本市，吉他公司 Deviser 以「Momose」品牌製作木吉他與電吉他，面板、背板與琴身採用日本<em>櫻木</em>與<em>七葉樹</em>，並在 2022 年的展示會上展出一百多把以這些木材製作的限量款。廠商形容櫻木硬度適中，能凸顯中高頻到高頻；七葉樹則帶來明亮而相當紮實的中頻——這些描述值得與<a href=\"listening.html\">聽得見木頭嗎</a>一頁的聆聽證據對照閱讀。" } },
        { t:"p",
          text:{
            en:"Researchers, meanwhile, have tried to make native woods do what imported ones do. At Gifu University's Faculty of Engineering, Ono Teruaki compared the frequency response of Sitka spruce and maple with acrylic and aluminium in 1996 and concluded that a top wood needs strong properties along the grain together with marked anisotropy, and a back wood the reverse; his group later made fibre-reinforced foam composites that, with 5–6 per cent carbon fibre by volume, behaved almost exactly like Sitka spruce. At the University of Tsukuba, Obataya Eiichi's laboratory has bonded resin-impregnated hinoki veneers to glass-fibre composite to match the very low damping of Honduras rosewood, the CITES-listed wood of marimba bars, using domestic timber. And Yamaha's A.R.E. process, which ages wood with controlled heat, humidity and pressure, is applied to the spruce tops of several of its guitar series.",
            ja:"一方、研究者は国産の木に輸入材の役目を果たさせようと試みてきた。岐阜大学工学部の小野晃明は一九九六年、シトカスプルースとメイプルの周波数応答をアクリルやアルミニウムとくらべ、表板の木には繊維方向の強い振動特性と顕著な異方性が、裏板の木にはその逆が要ると結論した。その研究室はのちに、繊維で補強した発泡体の複合材をつくり、炭素繊維を体積で五〜六パーセント入れたものがシトカスプルースとほとんど同じ音響特性を示すことを示した。筑波大学の小幡谷英一の研究室は、樹脂を含浸させたヒノキの単板をガラス繊維の複合材と貼り合わせ、ワシントン条約で規制されるマリンバの音板材ホンジュラスローズウッドの非常に小さな減衰に、国産材で並ぼうとしている。そしてヤマハのA.R.E.——熱、湿度、圧力を制御して木を熟成させる処理——は、同社のいくつかのギターシリーズのスプルースの表板に使われている。",
            zh:"與此同時，研究者嘗試讓本土木材擔起進口木材的角色。岐阜大學工學部的小野晃明於 1996 年比較西加雲杉、楓木與壓克力、鋁的頻率響應，結論是：面板木材需要順紋方向強的振動特性與顯著的異向性，背板木材則相反；他的團隊後來製作纖維強化發泡複合材，當碳纖維體積含量為 5 至 6% 時，其聲學特性幾乎與西加雲杉相同。筑波大學小幡谷英一的研究室，則把浸漬樹脂的扁柏單板與玻璃纖維複合材黏合，試圖以國產材追上馬林巴琴音板所用、受華盛頓公約管制的宏都拉斯玫瑰木那極低的阻尼。Yamaha 的 A.R.E. 處理——以受控的熱、濕度與壓力熟成木材——則用於其多個吉他系列的雲杉面板。" } },
        { t:"tiny",
          text:{
            en:"Sources: Yamaha, “Oto no Mori — akaezomatsu”; Hokkaidō newsletter profile of Kitami Mokuzai (2006); Shimamura Gakki, K. Yairi Kodama (2021); Deviser, Momose sakura and tochi (2022); Ono (1996) J. Acoust. Soc. Jpn (E) 17(4); Ono, Miyakoshi & Watanabe (2002) Acoust. Sci. Tech. 23(3); Obataya laboratory, University of Tsukuba; Yamaha, A.R.E.",
            ja:"出典：ヤマハ「おとの森——アカエゾマツ」、北海道の広報誌の北見木材紹介（二〇〇六年）、島村楽器「K.Yairi 木霊」（二〇二一年）、ディバイザー「Momose 桜と栃」（二〇二二年）、小野（一九九六年）日本音響学会誌英文誌十七巻四号、小野・宮越・渡辺（二〇〇二年）Acoust. Sci. Tech. 二十三巻三号、筑波大学小幡谷研究室、ヤマハ「A.R.E.」。",
            zh:"資料來源：Yamaha〈音之森——赤蝦夷雲杉〉；北海道會刊之北見木材介紹（2006 年）；島村樂器〈K.Yairi 木靈〉（2021 年）；Deviser〈Momose 櫻與七葉樹〉（2022 年）；小野（1996 年）《日本音響學會誌》英文版 17 卷 4 期；小野、宮越、渡邊（2002 年）Acoust. Sci. Tech. 23 卷 3 期；筑波大學小幡谷研究室；Yamaha〈A.R.E.〉。" } }
      ] },
    { t:"section",
      id:"gifu",
      title:{ en:"What Gifu's forests could offer", ja:"岐阜の森が差し出せるもの", zh:"岐阜森林能提供什麼" },
      jp:"岐阜の木の可能性",
      body:[
        { t:"p",
          text:{
            en:"Gifu is short of the one thing the classic guitar recipe needs most — large, slow-grown, knot-free spruce — but rich in almost everything else. Its hinoki and sugi are Japan's two principal plantation softwoods; its broadleaf forests, which make up about two-thirds of the forest of Hida city, hold keyaki, tochi, mizume, katsura, hōnoki, cherry and chestnut. The table matches these woods with their traditional instrument roles and with the guitar parts for which similar woods have been tried. The obstacle is less the species than the log. Soundboards and bracing need wide, clear, truly quartersawn pieces from large, evenly grown trees; broadleaf stands in Hida are dominated by small stems, and only about a tenth of a small-diameter broadleaf log typically ends up as usable sawn timber. Backs, sides, necks and fingerboards are more forgiving: a guitar back is made of two book-matched halves only about 20 centimetres wide each, well within the reach of the region's mizume, cherry and walnut.",
            ja:"岐阜は、定番のギターのつくり方が最も必要とするもの——大きく、ゆっくり育ち、節のないスプルース——を欠いているが、それ以外のほとんどすべてに恵まれている。ヒノキとスギは日本の人工林の二大針葉樹であり、飛騨市の森林のおよそ三分の二を占める広葉樹林には、ケヤキ、トチ、ミズメ、カツラ、ホオノキ、サクラ、クリがある。下の表は、これらの木を伝統の楽器での役割と、似た木が試されてきたギターの部分とに対応させたものである。障害は樹種よりも丸太にある。響板と力木には、大きく均一に育った木からとる、幅広で節のない正確な柾目の材が要る。飛騨の広葉樹林は細い木が多く、小径の広葉樹の丸太から使える製材になるのはふつう一割ほどにすぎない。裏板、側板、ネック、指板はもっと寛容である。ギターの裏板は、それぞれ幅およそ二十センチのブックマッチの二枚でできており、この地方のミズメ、サクラ、クルミで十分にまかなえる。",
            zh:"岐阜缺少經典吉他配方最需要的東西——大徑、緩慢生長、無節的雲杉——但其他幾乎樣樣不缺。這裡的扁柏與柳杉是日本人工林的兩大主要針葉樹；覆蓋飛驒市約三分之二森林的闊葉林中，有櫸木、七葉樹、水目櫻、連香樹、厚朴、櫻木與栗木。下表把這些木材與其在傳統樂器中的角色，以及類似木材曾被嘗試的吉他部位對照。障礙不在樹種，而在原木。響板與音梁需要取自大徑、生長均勻之樹木的寬幅、無節、真正徑切的木料；飛驒的闊葉林以細小樹幹為主，小徑闊葉原木通常只有約一成能成為可用的製材。背板、側板、琴頸與指板則較寬容：吉他背板由兩片對開拼板組成，每片寬僅約 20 公分，本地的水目櫻、櫻木與胡桃木綽綽有餘。" } },
        { t:"table",
          caption:{
            en:"Gifu woods, their traditional instrument uses, and the guitar parts where they or similar Japanese woods have been tried (— = none documented here)",
            ja:"岐阜の木と伝統の楽器での用途、それや似た日本の木が試されてきたギターの部分（—は本書で記録なし）",
            zh:"岐阜木材、其傳統樂器用途，以及它們或類似日本木材曾被嘗試的吉他部位（—表示本書未見紀錄）" },
          cols:[
            { en:"Wood", ja:"木", zh:"木材" },
            { en:"Density g/cm³", ja:"密度 g/cm³", zh:"密度 g/cm³" },
            { en:"Traditional use", ja:"伝統の用途", zh:"傳統用途" },
            { en:"Guitar parts tried", ja:"試されてきたギターの部分", zh:"曾嘗試的吉他部位" }
          ],
          numCols:[1],
          keyCol:true,
          rows:[
            [
              { en:"Hinoki", ja:"ヒノキ", zh:"扁柏" },
              "0.44",
              { en:"Noh stage floors; stave drums", ja:"能舞台の床、桶胴太鼓", zh:"能舞台地板、桶胴太鼓" },
              { en:"Tops (experimental); composites for tone bars", ja:"表板（試作）、音板の複合材", zh:"面板（試作）、音板複合材" }
            ],
            [
              { en:"Sugi", ja:"スギ", zh:"柳杉" },
              "0.38",
              { en:"Stave drums", ja:"桶胴太鼓", zh:"桶胴太鼓" },
              { en:"Tops; electric guitar bodies", ja:"表板、エレキギターのボディ", zh:"面板、電吉他琴身" }
            ],
            [
              { en:"Keyaki", ja:"ケヤキ", zh:"櫸木" },
              "0.69",
              { en:"Carved taiko shells; biwa backs", ja:"くり抜きの太鼓の胴、琵琶の裏板", zh:"整木太鼓鼓身、琵琶背板" },
              "—"
            ],
            [
              { en:"Tochi", ja:"トチノキ", zh:"七葉樹" },
              "0.52",
              { en:"Turned and lacquered ware", ja:"挽物・漆器", zh:"車旋與漆器" },
              { en:"Tops and bodies (Momose)", ja:"表板・ボディ（Momose）", zh:"面板與琴身（Momose）" }
            ],
            [
              { en:"Yamazakura", ja:"ヤマザクラ", zh:"山櫻" },
              "0.62",
              { en:"Sumo clappers", ja:"相撲の拍子木", zh:"相撲拍子木" },
              { en:"Backs, sides, tops (Momose)", ja:"裏板・側板・表板（Momose）", zh:"背板、側板、面板（Momose）" }
            ],
            [
              { en:"Mizume", ja:"ミズメ", zh:"水目櫻" },
              "0.72",
              { en:"Takayama festival floats", ja:"高山祭の屋台", zh:"高山祭屋台" },
              { en:"Backs and sides", ja:"裏板・側板", zh:"背板與側板" }
            ],
            [
              { en:"Katsura", ja:"カツラ", zh:"連香樹" },
              "0.50",
              { en:"Carving and joinery", ja:"彫刻・指物", zh:"雕刻與細木工" },
              { en:"Necks", ja:"ネック", zh:"琴頸" }
            ],
            [
              { en:"Hōnoki", ja:"ホオノキ", zh:"厚朴" },
              "0.49",
              { en:"Soft drumsticks", ja:"やわらかい撥", zh:"軟鼓棒" },
              { en:"Necks", ja:"ネック", zh:"琴頸" }
            ],
            [
              { en:"Kuwa (mulberry)", ja:"クワ", zh:"桑木" },
              "0.62",
              { en:"Biwa bodies; shamisen necks", ja:"琵琶の胴、三味線の棹", zh:"琵琶琴身、三味線琴桿" },
              "—"
            ]
          ] },
        { t:"p",
          text:{
            en:"There is also a quieter argument for domestic tonewood. Most of the woods on which the guitar was built — Brazilian and Indian rosewood, ebony, mahogany, the red sanders of the shamisen — come from tropical forests under pressure, and several are now regulated in international trade. A back of Hida mizume or a neck of Gifu katsura travels a few dozen kilometres to a workshop in Kani or Nakatsugawa instead of halfway round the world. Whether listeners can hear the difference is a separate question, and the evidence on that is weighed on the next pages; for the backs and sides of a guitar, at least one careful study suggests the answer is: not much.",
            ja:"国産のトーンウッドには、もう一つ静かな論拠もある。ギターを築いた木の多く——ブラジルとインドのローズウッド、エボニー、マホガニー、三味線の紅木——は圧力にさらされた熱帯の森から来て、いくつかはいま国際取引が規制されている。飛騨のミズメの裏板や岐阜のカツラのネックは、地球を半周するかわりに、可児や中津川の工房まで数十キロ運ばれるだけである。聴き手がその違いを聞き分けられるかは別の問いで、その証拠は次の頁で吟味する。ギターの裏板と側板については、少なくとも一つの丁寧な研究が、答えは「たいして変わらない」だと示している。",
            zh:"國產音木還有一個較低調的理由。撐起吉他的木材大多——巴西與印度玫瑰木、黑檀、桃花心木，還有三味線的紅木——來自承受壓力的熱帶森林，其中數種如今在國際貿易中受到管制。一片飛驒水目櫻背板或一支岐阜連香樹琴頸，只需運送數十公里到可兒或中津川的工坊，而不必繞行半個地球。聽者能否聽出差別是另一個問題，相關證據將在後面的頁面中衡量；至少就吉他的背板與側板而言，一項嚴謹的研究顯示答案是：差不了多少。" } },
        { t:"tiny",
          text:{
            en:"Sources: densities from the Wood Industry Handbook (4th ed.) and the Japan Wood Information Center; Hida City broadleaf data (Forestry Agency Kinki-Chūgoku office report); Carcagno et al. (2018), J. Acoust. Soc. Am. 144(6).",
            ja:"出典：密度は『木材工業ハンドブック』改訂四版と日本木材総合情報センター、飛騨市の広葉樹の数値は林野庁近畿中国森林管理局の報告、カルカーニョほか（二〇一八年）米国音響学会誌百四十四巻六号。",
            zh:"資料來源：密度取自《木材工業手冊》第四版與日本木材總合情報中心；飛驒市闊葉林數據取自林野廳近畿中國森林管理局報告；Carcagno 等（2018 年），《美國聲學學會期刊》144 卷 6 期。" } }
      ] },
    { t:"related",
      items:[
        { href:"sound.html",
          why:{ en:"The physics of radiating and reflecting woods.", ja:"放つ木と返す木の物理。", zh:"輻射材與反射材的物理。" } },
        { href:"tonewoods.html", why:{ en:"The imported woods of the guitar.", ja:"ギターの輸入材。", zh:"吉他的進口木材。" } },
        { href:"cites.html",
          why:{ en:"Why kōki and rosewood are regulated.", ja:"紅木とローズウッドが規制される理由。", zh:"紅木與玫瑰木為何受管制。" } },
        { href:"architecture.html",
          why:{ en:"Hinoki buildings, including stages.", ja:"舞台をふくむヒノキの建築。", zh:"包括舞台在內的扁柏建築。" } },
        { href:"broadleaf.html",
          why:{ en:"Where keyaki, tochi and mizume grow in Gifu.", ja:"岐阜のケヤキ、トチ、ミズメが育つところ。", zh:"岐阜的櫸木、七葉樹與水目櫻生長之處。" } }
      ] }
  ] };

/* ---- ---------------------------------------- guitarcare */
GIFU.pages["guitarcare"] = { kicker:{ en:"Sound · 12", ja:"音 · 12", zh:"聲音 · 12" },
  title:{ en:"Caring for a Guitar", ja:"ギターの手入れ", zh:"吉他的保養" },
  jp:"湿度と弦",
  lede:{
    en:"An acoustic guitar is a box of thin wood glued under tension, and wood never stops exchanging moisture with the air. Most of what goes wrong with guitars — cracked tops, sharp fret ends, rising or falling strings, lifting bridges — comes from humidity, and most of it can be prevented with a hygrometer, a case and a little attention to the seasons. This page explains what the makers recommend and why, sets Gifu's climate beside Taipei's using official climate normals, and covers strings, cleaning, finishes, the neck, travel, and when to hand the instrument to a repairer.",
    ja:"アコースティックギターは、張力のもとで接着された薄い木の箱であり、木は空気と水分をやりとりすることをやめない。ギターに起こる不具合の大半——表板の割れ、飛び出すフレットの端、上がったり下がったりする弦高、浮くブリッジ——は湿度から来て、その多くは湿度計とケースと季節へのわずかな気配りで防げる。この頁は、メーカーが何を勧め、それはなぜかを説明し、公式の平年値で岐阜の気候を台北とくらべ、弦、掃除、塗装、ネック、移動、そしていつ修理の人に楽器を預けるかを扱う。",
    zh:"木吉他是一個在張力下黏合而成的薄木箱，而木材從不停止與空氣交換水分。吉他出的毛病大多——面板開裂、琴格兩端刺手、弦距忽高忽低、琴橋翹起——都源於濕度，而其中多數只要一支濕度計、一個琴盒，再對季節稍加留意就能避免。本頁說明廠商的建議及其理由，以官方氣候平年值比較岐阜與臺北的氣候，並談到琴弦、清潔、塗裝、琴頸、旅行，以及何時該把樂器交給維修師。" },
  body:[
    { t:"section",
      id:"why",
      title:{ en:"Why humidity matters", ja:"なぜ湿度なのか", zh:"為何濕度如此重要" },
      jp:"含水率と伸縮",
      body:[
        { t:"p",
          text:{
            en:"A steel-string guitar top is a quartersawn spruce or cedar plate about 2.5–3 millimetres thick, glued all round its edge to the sides and underneath to a lattice of braces, with the bridge pulling on it with a force of some seventy kilograms. Like any wood below its fibre saturation point, it takes up water from humid air and gives it back to dry air until it reaches equilibrium. At room temperature, wood in air at 50 per cent relative humidity settles at roughly 9 per cent moisture content; at 20 per cent humidity, nearer 4–5 per cent (see <a href=\"moisture.html\">Wood & Water</a>). Across the grain, spruce shrinks about 4.6 per cent in the radial direction between green and oven-dry, which works out at roughly 0.16 per cent for each point of moisture content. A top 40 centimetres wide that dries from 9 to 5 per cent therefore tries to become about 2.5 millimetres narrower. Because its edges are glued to sides that barely change size along their length, it cannot; if the strain exceeds what the wood can take across the grain, it splits.",
            ja:"スチール弦ギターの表板は、厚さおよそ二・五〜三ミリの柾目のスプルースかシダーの板で、周囲を側板に、裏を力木の格子に接着され、駒がおよそ七十キロの力で引いている。繊維飽和点より下のどの木とも同じく、湿った空気からは水を吸い、乾いた空気には水を返して、つりあうまで動く。室温では、相対湿度五十パーセントの空気のなかの木は含水率およそ九パーセントに落ち着き、湿度二十パーセントではおよそ四〜五パーセントに近づく（<a href=\"moisture.html\">木と水分</a>を参照）。繊維と直角の方向では、スプルースは生材から全乾まで放射方向におよそ四・六パーセント縮む。含水率一ポイントあたりおよそ〇・一六パーセントである。したがって幅四十センチの表板が九パーセントから五パーセントに乾くと、およそ二・五ミリ狭くなろうとする。だが縁は、長さ方向にはほとんど寸法の変わらない側板に接着されているので、縮めない。そのひずみが木の繊維直角方向の耐えられる限度をこえると、割れる。",
            zh:"鋼弦吉他的面板是一片厚約 2.5–3 公釐的徑切雲杉或雪松板，四周黏在側板上，底面黏著格狀的音梁，而琴橋以約 70 公斤的力拉著它。就像所有低於纖維飽和點的木材一樣，它會從潮濕空氣中吸水、向乾燥空氣釋水，直到達成平衡。在室溫下，處於相對濕度 50% 空氣中的木材，含水率約穩定在 9%；在濕度 20% 時則接近 4–5%（見<a href=\"moisture.html\">木與水分</a>）。橫紋方向上，雲杉從生材到全乾的徑向收縮約 4.6%，換算下來含水率每變化一個百分點約收縮 0.16%。因此，一片寬 40 公分的面板若從 9% 乾到 5%，就會試圖縮窄約 2.5 公釐。但它的邊緣黏在長度方向幾乎不變的側板上，縮不了；一旦應變超過木材橫紋所能承受的限度，就會裂開。" } },
        { t:"p",
          text:{
            en:"Too much moisture does the opposite. The top and back swell and bulge, the bridge rises, the strings stand higher off the fingerboard, glue joints are stressed and the sound goes dull, because damp wood is heavier, less stiff and more strongly damped (see <a href=\"sound.html\">Wood &amp; Sound</a>). Taylor Guitars notes that a guitar becomes over-humidified after several weeks in air of 80–90 per cent humidity, or several months at 60–70 per cent — conditions that describe much of Japan's summer and most of Taiwan's year. The damage from damp is usually slower and more reversible than the damage from drought; a crack, once made, stays.",
            ja:"水分が多すぎると逆のことが起こる。表板と裏板がふくらんで膨れ、駒が上がり、弦高が高くなり、接着部に負担がかかり、音がにぶる。湿った木は重く、剛さが落ち、減衰が大きいからである（<a href=\"sound.html\">木と音</a>を参照）。テイラー社は、湿度八十〜九十パーセントの空気に数週間、あるいは六十〜七十パーセントに数か月置かれたギターは水分を吸いすぎた状態になると述べる。日本の夏の大半、台湾の一年の大半にあてはまる条件である。湿気による傷みはふつう乾燥による傷みより遅く、元に戻りやすい。割れは、一度入れば残る。",
            zh:"水分太多則相反。面板與背板膨脹鼓起，琴橋升高，弦距變高，膠合處承受應力，聲音變悶——因為潮濕的木材更重、剛性更低、阻尼更大（見<a href=\"sound.html\">木與聲音</a>）。Taylor 吉他指出，吉他在濕度 80–90% 的空氣中放置數週，或在 60–70% 中放置數月，就會吸濕過度——這正是日本大半個夏季與台灣一年中大部分時間的寫照。受潮造成的損傷通常比乾燥來得慢，也較能恢復；裂縫一旦產生，就不會消失。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Taylor", ja:"テイラー", zh:"Taylor" },
              v:"45–55%",
              d:{
                en:"Relative humidity; about 23 °C (74 °F).",
                ja:"相対湿度。温度はおよそ二十三度（華氏七十四度）。",
                zh:"相對濕度；溫度約 23 °C（華氏 74 度）。" } },
            { k:{ en:"Yamaha", ja:"ヤマハ", zh:"Yamaha" },
              v:"45–55%",
              d:{ en:"“The best humidity for storage.”", ja:"「保管する場所の湿度は四十五〜五十五パーセントがベスト」", zh:"「保管場所濕度以 45–55% 為最佳。」" } },
            { k:{ en:"Takamine", ja:"タカミネ", zh:"Takamine" },
              v:"45–55%",
              d:{
                en:"At 20–24 °C; monitor with a thermometer and hygrometer.",
                ja:"温度二十〜二十四度。温湿度計で見守る。",
                zh:"溫度 20–24 °C；以溫濕度計監看。" } },
            { k:{ en:"Gibson", ja:"ギブソン", zh:"Gibson" },
              v:"40–50%",
              d:{
                en:"Factory conditions at 22 °C; avoid swings beyond about 20% either side.",
                ja:"工場の条件は二十二度。前後二十パーセント以上の変化は避ける。",
                zh:"工廠條件為 22 °C；避免超過前後約 20% 的變化。" } }
          ] },
        { t:"p",
          text:{
            en:"The makers agree to within a few points: keep the guitar at about 45–55 per cent relative humidity and ordinary room temperature, and avoid rapid swings. Wood scientists put the safe zone for wooden instruments more broadly — the University of Tsukuba laboratory that studies instrument woods suggests moderate humidity of 30–70 per cent — but a finished guitar, with its glued and braced plates under string tension, is less tolerant than a loose board. A practical rule for Gifu and Taipei alike is to aim for 45–55 per cent and to worry when the reading stays below 40 or above 60 for more than a few days.",
            ja:"メーカーの推奨は数ポイントの差でそろう。相対湿度およそ四十五〜五十五パーセント、ふつうの室温に保ち、急な変化を避けること。木材の研究者は、木の楽器の安全な範囲をもっと広くとる——楽器の木を研究する筑波大学の研究室は、三十〜七十パーセントの中程度の湿度を勧める——が、接着し力木を貼った板が弦の張力を受けている完成したギターは、ばらの板より許容の幅が狭い。岐阜でも台北でも実際的な目安は、四十五〜五十五パーセントをめざし、四十を下回るか六十を上回る値が数日以上続いたら気にかけることである。",
            zh:"各廠商的建議相差不過幾個百分點：讓吉他保持在相對濕度約 45–55%、一般室溫，並避免急劇變化。木材科學家對木製樂器安全範圍的界定更寬——研究樂器木材的筑波大學研究室建議 30–70% 的中等濕度——但成品吉他的板材經過黏合、裝有音梁，又承受琴弦張力，容忍度不如一片散板。無論在岐阜或臺北，實用的原則都是：以 45–55% 為目標，讀數若低於 40% 或高於 60% 持續數日以上，就該留意。" } },
        { t:"tiny",
          text:{
            en:"Sources: Taylor Guitars, “Symptoms of a Dry Guitar” and “Symptoms of a Wet Guitar”; Yamaha, Musical Instrument Guide, acoustic guitar care; Takamine, maintenance guide; Gibson Japan, handling precautions; Obataya laboratory, University of Tsukuba; Naturally:wood, Sitka spruce (shrinkage). Shrinkage per point and the 2.5 mm example are our own calculation.",
            ja:"出典：テイラー「Symptoms of a Dry Guitar」「Symptoms of a Wet Guitar」、ヤマハ「楽器解体全書」アコースティックギターのお手入れ、高峰楽器製作所「メンテナンスの仕方」、ギブソン・ジャパン「ギターの保管と運搬・お取り扱いのご注意」、筑波大学小幡谷研究室、Naturally:wood「Sitka spruce」（収縮率）。一ポイントあたりの収縮と二・五ミリの例は本書の計算。",
            zh:"資料來源：Taylor〈Symptoms of a Dry Guitar〉〈Symptoms of a Wet Guitar〉；Yamaha〈樂器解體全書〉木吉他保養；高峰樂器製作所〈保養方法〉；Gibson Japan〈吉他保管、搬運與使用注意事項〉；筑波大學小幡谷研究室；Naturally:wood〈Sitka spruce〉（收縮率）。每百分點收縮量與 2.5 公釐之例為本書計算。" } }
      ] },
    { t:"section",
      id:"climate",
      title:{ en:"Gifu, Takayama and Taipei", ja:"岐阜・高山・台北", zh:"岐阜、高山與臺北" },
      jp:"気候と湿度",
      body:[
        { t:"figure",
          caption:{
            en:"Monthly mean relative humidity outdoors, climate normals 1991–2020: Gifu and Takayama from the Japan Meteorological Agency; Taipei from Taiwan's Central Weather Bureau (now Central Weather Administration). The shaded band marks the 45–55 per cent that guitar makers recommend indoors. Outdoor figures are not indoor ones: heating a Japanese winter's air to room temperature drives its humidity far below the band.",
            ja:"屋外の月平均相対湿度の平年値（一九九一〜二〇二〇年）。岐阜と高山は気象庁、台北は台湾の中央気象局（現・中央気象署）による。網かけの帯は、ギターのメーカーが室内に勧める四十五〜五十五パーセントを示す。屋外の値は室内の値ではない。日本の冬の空気を室温まで暖めると、湿度は帯よりはるか下まで下がる。",
            zh:"戶外月平均相對濕度的氣候平年值（1991–2020 年）：岐阜與高山取自日本氣象廳，臺北取自臺灣中央氣象局（今中央氣象署）。陰影帶標示吉他廠商建議的室內 45–55%。戶外數字並非室內數字：把日本冬季的空氣加熱到室溫，濕度會遠低於此帶。" },
          svg:function(lang, L){
            var o = {
              title:{ en:"Relative humidity by month", ja:"月別の相対湿度", zh:"各月相對濕度" },
              unit:{ en:"% relative humidity (1 = January)", ja:"相対湿度 %（1＝一月）", zh:"相對濕度 %（1＝一月）" },
              x0:1, x1:12, y0:40, y1:90, tick:10, xt:[1,2,3,4,5,6,7,8,9,10,11,12], h:210, legendW:160,
              series:[
                { n:{ en:"Takayama", ja:"高山", zh:"高山" }, pts:[[1,82],[2,78],[3,73],[4,68],[5,68],[6,74],[7,78],[8,77],[9,79],[10,81],[11,82],[12,84]] },
                { n:{ en:"Taipei", ja:"台北", zh:"臺北" }, dash:"5 4", pts:[[1,77.2],[2,77.8],[3,76.1],[4,74.9],[5,74.7],[6,75.3],[7,70.2],[8,72.1],[9,73.9],[10,74.4],[11,75.0],[12,75.9]] },
                { n:{ en:"Gifu", ja:"岐阜", zh:"岐阜" }, pts:[[1,66],[2,62],[3,58],[4,59],[5,63],[6,70],[7,73],[8,69],[9,70],[10,67],[11,67],[12,68]] }
              ]
            };
            var s = GIFU.fig.lines(lang, L, o);
            var top = 56, ch = 210, base = top + ch, left = 64, pw = 760 - 64 - 160;
            function Y(y){ return base - (y - 40) / 50 * ch; }
            var band = '<rect x="' + left + '" y="' + Y(55).toFixed(1) + '" width="' + pw + '" height="' + (Y(45) - Y(55)).toFixed(1) + '" fill="#E0E6DB" fill-opacity="0.7"/>' +
              GIFU.fig.text(left + 8, Y(45) - 6, lang==="en" ? "recommended indoors 45–55%" : (lang==="ja" ? "室内の推奨 45〜55％" : "室內建議 45–55%"), { size:10, fill:"#55504A" });
            return s.replace('role="img">', 'role="img">' + band);
          } },
        { t:"p",
          text:{
            en:"The outdoor figures look harmless. Gifu city averages 66 per cent over the year, from 58 per cent in March to 73 per cent in July; Takayama, in its high basin, averages 77 per cent and reaches 84 per cent in December. The trouble is temperature. Takayama's mean January temperature is −1.2 °C, and air that cold holds very little water even when it is nearly saturated. Warm it to 20 °C in a heated room and its relative humidity falls to about 20 per cent; the same calculation for Gifu's January air gives about 24 per cent. That is why Japanese winters, which feel damp and snowy outside, are the season of cracked tops and sharp fret ends indoors, especially near fan heaters and air-conditioners on heating mode. Summer brings the opposite. The rainy season, <em>tsuyu</em>, begins in the Tōkai region around 6 June and ends around 19 July on average, and Gifu's August is hot as well as humid, with a mean temperature of 28.3 °C.",
            ja:"屋外の値だけを見ると、害はなさそうに見える。岐阜市の年平均は六十六パーセントで、三月の五十八パーセントから七月の七十三パーセントまでの幅である。高い盆地の高山は年平均七十七パーセントで、十二月には八十四パーセントに達する。問題は温度である。高山の一月の平均気温は零下一・二度で、そこまで冷たい空気は、ほぼ飽和していても水をわずかしか含まない。暖房した部屋で二十度まで暖めると、相対湿度はおよそ二十パーセントに下がる。岐阜の一月の空気で同じ計算をすると、およそ二十四パーセントになる。屋外は湿って雪深く感じる日本の冬が、室内では表板の割れとフレットの端の季節になるのはそのためで、とくにファンヒーターや暖房運転のエアコンの近くが危ない。夏は逆をもたらす。梅雨は東海地方で平年六月六日ごろに始まり七月十九日ごろに明け、岐阜の八月は平均気温二十八・三度で、湿っているうえに暑い。",
            zh:"單看戶外數字似乎無害。岐阜市全年平均 66%，從 3 月的 58% 到 7 月的 73%；位於高海拔盆地的高山，全年平均 77%，12 月達 84%。問題出在溫度。高山 1 月均溫為 −1.2 °C，這麼冷的空氣即使接近飽和，所含水分也極少。在有暖氣的房間裡把它加熱到 20 °C，相對濕度便降到約 20%；以岐阜 1 月的空氣做同樣計算，約為 24%。這就是為何戶外感覺潮濕多雪的日本冬季，在室內卻是面板開裂、琴格刺手的季節，尤其在煤油暖風機與開暖氣的冷氣機附近。夏季則恰好相反。東海地方的梅雨平年約在 6 月 6 日開始、7 月 19 日前後結束，而岐阜 8 月均溫達 28.3 °C，既潮濕又炎熱。" } },
        { t:"p",
          text:{
            en:"Taipei's problem runs in one direction. Its monthly mean humidity never falls below 70 per cent, and the year averages 74.8 per cent; January, at 16.4 °C and 77 per cent, heated to 20 °C would still be around 60 per cent. A Taiwanese maker of electronic dry cabinets notes that humidity approaches 90 per cent during the spring rains and the plum-rain season of May and June, and typhoons bring days of saturated air in summer and early autumn. For a guitar in Taiwan the risks are swelling, high action, a dull sound and, over years, mould and loose joints — and, less obviously, over-drying, when an instrument lives in a strongly air-conditioned room or a dry cabinet set too low. A guitar that crosses between the two climates, bought in Japan and carried to Taipei or the other way round, should be given days, not hours, to settle before it is adjusted.",
            ja:"台北の問題は一方向である。月平均湿度が七十パーセントを下回る月はなく、年平均は七十四・八パーセントである。一月は気温十六・四度、湿度七十七パーセントで、二十度に暖めても六十パーセント前後にとどまる。台湾の電子防湿庫のメーカーは、春雨と五〜六月の梅雨のあいだ湿度が九十パーセント近くに達すると記し、夏から初秋には台風が飽和した空気の日々をもたらす。台湾のギターにとっての危険は、膨張、高い弦高、にぶい音、何年もたてばカビとゆるんだ接着部である。そして見落とされがちだが、冷房の強い部屋や、低すぎる設定の防湿庫で暮らす楽器の乾燥しすぎである。日本で買って台北へ、あるいはその逆へと二つの気候のあいだを渡るギターは、調整の前に、何時間でなく何日も落ち着かせたい。",
            zh:"臺北的問題只有一個方向。月平均濕度從未低於 70%，全年平均 74.8%；1 月氣溫 16.4 °C、濕度 77%，即使加熱到 20 °C，仍約有 60%。一家台灣電子防潮箱廠商指出，春雨與 5、6 月梅雨季期間濕度可接近 90%，而夏季到初秋的颱風更會帶來連日飽和的空氣。吉他在台灣面臨的風險是膨脹、弦距升高、聲音發悶，以及長年下來的發霉與膠合鬆脫——還有較不易察覺的過度乾燥：樂器長時間待在冷氣很強的房間，或設定過低的防潮箱中。在兩種氣候之間移動的吉他——在日本購入帶回臺北，或反之——調整之前應給它幾天而非幾小時的時間適應。" } },
        { t:"tiny",
          text:{
            en:"Sources: Japan Meteorological Agency, climate normals 1991–2020 for Gifu and Takayama, and rainy-season normals for Tōkai; Central Weather Bureau normals 1991–2020 for Taipei; SATV (Taiwan), guidance on instrument storage. Indoor humidity after heating is our own calculation from the normals (Magnus formula).",
            ja:"出典：気象庁「平年値（一九九一〜二〇二〇年）」岐阜・高山、東海地方の梅雨入り・梅雨明けの平年値、台湾中央気象局の台北の平年値（一九九一〜二〇二〇年）、防潮家（台湾）の楽器保管の解説。暖房後の室内湿度は平年値からの本書の計算（マグヌスの式）。",
            zh:"資料來源：日本氣象廳 1991–2020 年岐阜、高山氣候平年值與東海地方梅雨平年日期；中央氣象局臺北 1991–2020 年平年值；防潮家（台灣）樂器保存說明。加熱後的室內濕度為本書依平年值計算（Magnus 公式）。" } }
      ] },
    { t:"section",
      id:"symptoms",
      title:{ en:"Reading the signs", ja:"兆しを読む", zh:"判讀徵兆" },
      jp:"乾燥と多湿のしるし",
      body:[
        { t:"p",
          text:{
            en:"A guitar usually warns before it cracks. The first signs of drying are felt rather than seen: the ends of the frets start to catch the hand as the ebony or rosewood fingerboard shrinks across its width while the metal frets do not, and the strings sit lower and begin to buzz. The signs of damp are the reverse, and just as easy to feel. Both lists below follow the checklists published by Taylor Guitars, which broadly agree with the Japanese makers' advice; most of the early symptoms disappear once the instrument is returned to about 45–55 per cent humidity for a week or two.",
            ja:"ギターはふつう割れる前に警告を出す。乾燥の最初の兆しは、目でなく手で感じる。エボニーやローズウッドの指板は幅の方向に縮むが、金属のフレットは縮まないので、フレットの端が手に引っかかりはじめ、弦高が下がってビビりが出る。湿気の兆しはその逆で、同じくらい手でわかる。下の二つの一覧は、テイラー社が公開するチェックリストに沿ったもので、日本のメーカーの助言ともおおむね一致する。初期の症状の多くは、湿度およそ四十五〜五十五パーセントに一〜二週間戻せば消える。",
            zh:"吉他通常在開裂之前會先發出警訊。乾燥的最初徵兆靠手而非靠眼察覺：黑檀或玫瑰木指板沿寬度方向收縮，金屬琴格卻不縮，於是琴格兩端開始刮手，弦距降低並出現打弦雜音。受潮的徵兆則相反，同樣容易摸出來。以下兩份清單依據 Taylor 吉他公布的檢查表整理，也與日本廠商的建議大致相符；只要讓樂器回到約 45–55% 的濕度一兩週，多數初期症狀都會消失。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Too dry", ja:"乾燥しすぎ", zh:"過於乾燥" },
              jp:"冬・暖房",
              text:{
                en:"Most common in heated rooms in a Japanese winter, and in rooms with strong air-conditioning anywhere.",
                ja:"日本の冬の暖房した部屋と、どこであれ冷房の強い部屋でよく起こる。",
                zh:"最常見於日本冬季開暖氣的房間，以及任何冷氣很強的房間。" },
              body:[
                { t:"ul",
                  items:[
                    {
                      en:"Sharp fret ends sticking out from the edges of the fingerboard.",
                      ja:"フレットの端が指板の縁から飛び出してとがる。",
                      zh:"琴格兩端從指板邊緣突出、刮手。" },
                    {
                      en:"Low action and new buzzing; the top sinks between the bridge and the soundhole.",
                      ja:"弦高が下がり、ビビりが出る。駒とサウンドホールのあいだで表板が沈む。",
                      zh:"弦距變低並出現打弦；面板在琴橋與音孔之間下陷。" },
                    {
                      en:"A hump where the neck meets the body; a small gap around the fingerboard extension.",
                      ja:"ネックと胴の接合部に盛り上がり。指板の延長部のまわりにすき間。",
                      zh:"琴頸與琴身接合處隆起；指板延伸段周圍出現細縫。" },
                    { en:"A back that looks unusually flat.", ja:"裏板が妙に平らに見える。", zh:"背板看起來異常平坦。" },
                    {
                      en:"Finally, cracks along the grain of the top or back, often starting at the edge or beside the fingerboard.",
                      ja:"最後に、表板や裏板の木目に沿った割れ。縁や指板の横から始まることが多い。",
                      zh:"最終，面板或背板沿木紋開裂，常從邊緣或指板旁開始。" }
                  ] }
              ] },
            { title:{ en:"Too damp", ja:"湿りすぎ", zh:"過於潮濕" },
              jp:"梅雨・夏",
              text:{
                en:"Most common in the rainy season and summer in Japan, and for much of the year in Taiwan.",
                ja:"日本の梅雨と夏、そして台湾では一年の多くの期間に起こりやすい。",
                zh:"最常見於日本的梅雨季與夏季，以及台灣一年中的大部分時間。" },
              body:[
                { t:"ul",
                  items:[
                    { en:"High action that makes the guitar hard to play.", ja:"弦高が上がり、弾きにくい。", zh:"弦距升高，彈奏吃力。" },
                    { en:"A dull, lifeless sound.", ja:"にぶく生気のない音。", zh:"聲音沉悶、缺乏生氣。" },
                    {
                      en:"A top bulging behind the bridge, and a back that swells and dips where it meets the tail block.",
                      ja:"駒のうしろで表板が膨れ、裏板がふくらんでエンドブロックとの境でくぼむ。",
                      zh:"琴橋後方面板鼓起，背板膨脹並在與尾塊交接處凹陷。" },
                    {
                      en:"Sighting down the neck, the frets appear to point below the bridge.",
                      ja:"ネックの先から見通すと、フレットの面が駒より下を向いて見える。",
                      zh:"沿琴頸望去，琴格平面看似指向琴橋下方。" },
                    {
                      en:"In the long run, weakened glue joints, lifting finish and, in warm damp storage, mould.",
                      ja:"長い目で見ると、接着部の弱り、塗装の浮き、暖かく湿った保管ではカビ。",
                      zh:"長期下來，膠合處變弱、塗裝翹起；在溫暖潮濕的環境中存放還會發霉。" }
                  ] }
              ] }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Taylor Guitars, “Symptoms of a Dry Guitar” and “Symptoms of a Wet Guitar”.",
            ja:"出典：テイラー「Symptoms of a Dry Guitar」「Symptoms of a Wet Guitar」。",
            zh:"資料來源：Taylor〈Symptoms of a Dry Guitar〉〈Symptoms of a Wet Guitar〉。" } }
      ] },
    { t:"section",
      id:"storage",
      title:{ en:"Where and how to keep it", ja:"どこに、どう置くか", zh:"放在哪裡、如何存放" },
      jp:"保管",
      body:[
        { t:"p",
          text:{
            en:"The cheapest piece of guitar equipment is a digital hygrometer, and the second is the case. A guitar on a stand looks good and gets played more, but it lives in whatever air the room provides. Yamaha recommends keeping acoustic guitars in their cases rather than on stands, partly because a solid top cracks easily if something as ordinary as a vacuum cleaner knocks it. K. Yairi adds that during the rainy season, when days above 70 per cent humidity follow one another, and in winter when the room is heated by an air-conditioner, the instrument is often under less strain inside its case than out of it. A good hard case slows the exchange of moisture; it does not stop it, so the humidity inside needs managing too.",
            ja:"最も安いギターの道具はデジタルの湿度計で、二番目はケースである。スタンドに立てたギターは見た目もよく、よく弾かれるが、部屋の空気がどうであれそのなかで暮らす。ヤマハは、アコースティックギターはスタンドでなくケースに入れて保管するよう勧める。単板の表板は、掃除機のようなありふれたものが当たっただけでも割れやすいからでもある。ヤイリギターは、梅雨どきで湿度七十パーセント以上の日が続くときや、冬にエアコンで部屋を暖めるときは、ケースのなかのほうがギターへの負担が少ない場合があると付け加える。よいハードケースは水分のやりとりを遅くするが、止めはしない。だからケースのなかの湿度も管理が要る。",
            zh:"最便宜的吉他配備是一支數位濕度計，其次是琴盒。放在琴架上的吉他好看，也更常被拿起來彈，但它得承受房間裡任何狀態的空氣。Yamaha 建議把木吉他收在琴盒裡而不是放在琴架上，原因之一是單板面板很容易裂，連吸塵器這種日常物品碰到都可能出事。K.Yairi 補充說，在梅雨季濕度 70% 以上的日子接連不斷時，以及冬天用冷氣機開暖氣時，放在琴盒裡對吉他的負擔往往比放在外面小。好的硬盒能減緩水分交換，卻無法阻止，因此盒內濕度同樣需要管理。" } },
        { t:"defs",
          items:[
            { term:{ en:"Case humidifiers", ja:"ケース用の加湿器", zh:"琴盒加濕器" },
              jp:"冬に",
              def:{
                en:"Sponges or gel packs placed in the soundhole or the headstock compartment release water into the case. Two-way packs both give and take moisture; D'Addario's Humidipak, for example, is designed to hold a closed case at 45–50 per cent and lasts two to six months. In a Japanese winter this is the single most useful accessory.",
                ja:"サウンドホールやヘッド側の小物入れに入れるスポンジやジェルのパックが、ケースのなかに水を出す。双方向のパックは、水分を出しも吸いもする。たとえばダダリオのヒューミディパックは、閉じたケースを四十五〜五十パーセントに保つよう設計され、二〜六か月もつ。日本の冬には、これが最も役に立つ小物である。",
                zh:"放在音孔或琴盒琴頭置物格中的海綿或凝膠包，會向盒內釋放水分。雙向調濕包既能放濕也能吸濕；例如 D'Addario 的 Humidipak，設計目標是讓關閉的琴盒維持在 45–50%，可用 2 至 6 個月。在日本的冬天，這是最有用的單一配件。" } },
            { term:{ en:"Room humidifiers and dehumidifiers", ja:"部屋の加湿器と除湿機", zh:"室內加濕機與除濕機" },
              jp:"部屋ごと",
              def:{
                en:"Treating the whole room is kinder than treating the case, because the guitar can then live out of it. In Gifu that usually means a humidifier from December to March and a dehumidifier from June to September; air-conditioners also dry the air in summer, sometimes more than intended.",
                ja:"部屋ごと整えるほうがケースだけ整えるより楽器にやさしい。ギターをケースの外に置けるからである。岐阜ではふつう、十二月から三月は加湿器、六月から九月は除湿機になる。夏のエアコンも空気を乾かし、ときに思った以上に乾かす。",
                zh:"調整整個房間比只調整琴盒更友善，因為吉他就能放在盒外。在岐阜，這通常意味著 12 月至 3 月用加濕機、6 月至 9 月用除濕機；夏季的冷氣也會讓空氣變乾，有時超出預期。" } },
            { term:{ en:"Dry cabinets", ja:"防湿庫", zh:"防潮箱" },
              jp:"台湾で",
              def:{
                en:"In Taiwan, electronic dry cabinets sold for cameras are also made in guitar sizes. One Taiwanese maker recommends setting them to 50–55 per cent for guitars and violins, and warns that over-drying causes shrinkage, cracks, warping and poor tuning stability. Set too low, a dry cabinet does in Taipei what a fan heater does in Takayama.",
                ja:"台湾では、カメラ用に売られる電子防湿庫が、ギターの大きさでもつくられている。台湾のあるメーカーは、ギターとバイオリンには五十〜五十五パーセントに設定するよう勧め、乾かしすぎると収縮、割れ、反り、音程の不安定を招くと警告する。設定が低すぎると、防湿庫は台北で、ファンヒーターが高山でするのと同じことをする。",
                zh:"在台灣，原本為相機販售的電子防潮箱也有吉他尺寸。一家台灣廠商建議吉他與小提琴設定在 50–55%，並警告過度乾燥會導致收縮、開裂、變形與音準不穩。設定太低的防潮箱，在臺北做的事，就跟煤油暖風機在高山做的一樣。" } },
            { term:{ en:"Places to avoid", ja:"避ける場所", zh:"應避免的地方" },
              jp:"置き場所",
              def:{
                en:"Car interiors and boots, window sills in sun, the space beside a heater or under an air-conditioner outlet, outside walls in winter, and the floor of a damp room. Takamine singles out cars, which in summer become both hot and humid, and notes that modern heating is comfortable for people and often far too dry for guitars.",
                ja:"車内とトランク、日の当たる窓辺、暖房機の横やエアコンの吹出口の下、冬の外壁ぎわ、湿った部屋の床。タカミネはとくに、夏には高温多湿になる車内を挙げ、現代の暖房は人には快適でも、ギターにはしばしば乾きすぎると述べる。",
                zh:"車內與後車廂、有日曬的窗台、暖氣機旁或冷氣出風口下方、冬季的外牆邊，以及潮濕房間的地板。Takamine 特別點名車內——夏季既高溫又潮濕——並指出現代暖氣讓人舒適，對吉他卻往往太乾。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Yamaha, Musical Instrument Guide; K. Yairi, FAQ; D'Addario, Humidipak Maintain; SATV (Taiwan), instrument storage; Takamine, maintenance guide.",
            ja:"出典：ヤマハ「楽器解体全書」、ヤイリギター「よくあるご質問」、ダダリオ「Humidipak Maintain」、防潮家（台湾）、高峰楽器製作所「メンテナンスの仕方」。",
            zh:"資料來源：Yamaha〈樂器解體全書〉；K.Yairi〈常見問題〉；D'Addario〈Humidipak Maintain〉；防潮家（台灣）；高峰樂器製作所〈保養方法〉。" } }
      ] },
    { t:"section",
      id:"seasons",
      title:{ en:"A year of guitar care", ja:"ギターの手入れの一年", zh:"吉他保養的一年" },
      jp:"季節ごとに",
      body:[
        { t:"p",
          text:{
            en:"Because the problems follow the seasons, so can the care. The calendar below summarises a routine for a guitar kept in central Japan and one kept in northern Taiwan. The Japanese pattern has two danger periods pulling in opposite directions — dry, heated rooms from late autumn to early spring, and the long damp of the rainy season and summer — with two mild seasons in between that are the best time for a check-up, because the wood is then close to the moisture content at which it was built. Taiwan's pattern is simpler and wetter: guard against damp all year, and above all during the plum rains and the typhoon months.",
            ja:"問題が季節に従うのだから、手入れも季節に従える。下の暦は、日本の中部で保管するギターと、台湾北部で保管するギターの手入れの流れをまとめたものである。日本には正反対に引く二つの危険な時期がある。晩秋から早春の乾いた暖房の部屋と、梅雨と夏の長い湿気である。そのあいだの穏やかな二つの季節が点検に最もよい。木が、つくられたときの含水率に近いからである。台湾の型はもっと単純で湿っている。一年中湿気に備え、とりわけ梅雨と台風の月に気をつける。",
            zh:"既然問題隨季節而來，保養也可以順著季節走。下方的年曆整理出放在日本中部與台灣北部的吉他各自的保養節奏。日本有兩段方向相反的危險期——晚秋到早春乾燥的暖氣房，以及梅雨與夏季的漫長潮濕——中間夾著兩個溫和的季節，是檢查的最佳時機，因為此時木材接近製作時的含水率。台灣的模式較單純也較潮濕：全年防潮，尤其在梅雨季與颱風月份。" } },
        { t:"figure",
          caption:{
            en:"A seasonal routine for acoustic guitars in central Japan and northern Taiwan. Schematic: based on the climate normals above, the Tōkai rainy-season dates and the makers' guidance on this page; local weather varies from year to year.",
            ja:"日本中部と台湾北部のアコースティックギターの季節ごとの手入れ。模式図であり、上の平年値、東海地方の梅雨の時期、この頁のメーカーの指針にもとづく。実際の天候は年ごとに変わる。",
            zh:"日本中部與台灣北部木吉他的季節保養節奏。此為示意圖，依據上方的氣候平年值、東海地方梅雨日期與本頁各廠商的建議；實際天氣逐年不同。" },
          svg:function(lang, L){ return GIFU.fig.year(lang, L, {
            title:{ en:"The guitar-care calendar", ja:"ギターの手入れ暦", zh:"吉他保養年曆" }, labelW:200,
            rows:[
              { en:"Japan: heated rooms", ja:"日本：暖房の部屋", zh:"日本：暖氣房" },
              { en:"Japan: rainy season, summer", ja:"日本：梅雨と夏", zh:"日本：梅雨與夏季" },
              { en:"Japan: check-ups", ja:"日本：点検", zh:"日本：檢查" },
              { en:"Taiwan: all year", ja:"台湾：通年", zh:"台灣：全年" },
              { en:"Taiwan: wettest spells", ja:"台湾：最も湿る時期", zh:"台灣：最潮濕時期" }
            ],
            items:[
              { row:0, m0:1, m1:3, n:{ en:"Humidify to 45–55%", ja:"加湿して45〜55％", zh:"加濕至 45–55%" }, f:"#E9ECEE" },
              { row:0, m0:11, m1:12, n:{ en:"Humidify", ja:"加湿", zh:"加濕" }, f:"#E9ECEE" },
              { row:1, m0:6, m1:9, n:{ en:"Dehumidify; keep cased", ja:"除湿し、ケースに", zh:"除濕；收入琴盒" }, f:"#E0E7E9" },
              { row:2, m0:4, m1:5, n:{ en:"Set-up check", ja:"調整の点検", zh:"檢查調整" }, f:"#FBFAF7" },
              { row:2, m0:10, m1:10, n:{ en:"Check", ja:"点検", zh:"檢查" }, f:"#FBFAF7" },
              { row:3, m0:1, m1:12, n:{ en:"Keep at 45–55%: dehumidifier or dry cabinet; do not over-dry", ja:"45〜55％に保つ：除湿機か防湿庫。乾かしすぎない", zh:"維持 45–55%：除濕機或防潮箱；勿過度乾燥" }, f:"#E0E7E9" },
              { row:4, m0:5, m1:6, n:{ en:"Plum rains", ja:"梅雨", zh:"梅雨季" }, f:"#E0E7E9" },
              { row:4, m0:7, m1:9, n:{ en:"Typhoon season", ja:"台風の季節", zh:"颱風季" }, f:"#E0E7E9" }
            ] }); } }
      ] },
    { t:"section",
      id:"strings",
      title:{ en:"Strings, cleaning and finishes", ja:"弦、掃除、塗装", zh:"琴弦、清潔與塗裝" },
      jp:"日々の手入れ",
      body:[
        { t:"p",
          text:{
            en:"Strings are consumables. Sweat and skin oils corrode them from the moment they are played, and Yamaha's advice is to wipe them after every session with a dry cloth or a string cleaner; a common rule of thumb for regular players, which Yamaha repeats, is a new set about once a month. Yamaha's own guide removes all the strings at once, which gives a chance to clean the fingerboard and treat it with a little lemon oil or a fingerboard conditioner and to wipe the headstock and top. Gauge matters as well as freshness. K. Yairi points out that extra-light, light and medium sets differ by roughly ten kilograms of total tension from one to the next, so changing gauge changes the load on the neck and top and may call for a new set-up. The nut, where the strings leave the headstock, wears too; a string that pings as it is tuned is a sign that its slot needs recutting.",
            ja:"弦は消耗品である。汗と皮脂は、弾いたその瞬間から弦を錆びさせる。ヤマハは、弾いたあとは毎回、乾いた布か弦のクリーナーで拭くよう勧め、よく弾く人の目安としてよく言われる「月に一回ほど」の交換をくり返す。ヤマハの手引きは弦を一度にすべて外すやり方で、そのとき指板を掃除してレモンオイルや指板用のオイルを少し塗り、ヘッドと表板を拭く機会になる。新しさだけでなく太さも大事である。ヤイリギターは、エクストラ・ライト、ライト、ミディアムのセットでは、それぞれ張力の合計がおよそ十キロずつ違うと指摘する。太さを変えればネックと表板への負荷が変わり、調整し直しが要ることもある。弦がヘッドへ抜けるナットも減る。チューニングのとき「ピチッ」と鳴るのは、溝の切り直しが要るしるしである。",
            zh:"琴弦是消耗品。汗水與皮脂從彈奏的那一刻起就在腐蝕琴弦；Yamaha 建議每次彈完都以乾布或琴弦清潔劑擦拭，並重申常被引用的經驗法則：經常彈奏的人約每月換一次弦。Yamaha 自己的教學是一次拆下所有琴弦，這正好是清潔指板、塗上少許檸檬油或指板保養油，並擦拭琴頭與面板的機會。除了新舊，粗細也有關係。K.Yairi 指出，特細、細、中三種弦組之間，總張力大約各差 10 公斤，因此更換粗細會改變琴頸與面板承受的負荷，可能需要重新調整。琴弦離開琴頭處的上弦枕也會磨損；調音時發出「啪」的聲響，表示弦槽需要重新修整。" } },
        { t:"p",
          text:{
            en:"Finishes differ in how they age and what harms them. Nitrocellulose lacquer, the traditional finish of fine steel-string guitars, is applied in thin coats and stays slightly soft and chemically sensitive; polyurethane and polyester finishes are thicker, harder and more resistant (see <a href=\"making.html\">How a Guitar Is Made</a> and <a href=\"finishes.html\">Finishes</a>). Gibson's Japanese distributor lists the hazards for lacquered instruments: the rubber and vinyl of some guitar stands, hangers and clip-on tuners can discolour the finish on contact, so they should be covered; synthetic polishing cloths and the sweat left by the player harm finish and hardware; leather straps are best removed after playing. A sudden change of temperature — a cold case opened at once in a warm room — can craze a lacquer finish with fine cracks called checking, so the advice is to let the case warm up and open it a little at a time. For routine cleaning Takamine recommends a soft instrument cloth used lightly, and for stubborn dirt a well-wrung damp cloth followed by a dry one; household polishes and solvents are best left alone.",
            ja:"塗装は、年のとり方も、傷めるものも違う。上等なスチール弦ギターの伝統の塗装であるラッカー（ニトロセルロース）は、薄く重ねて塗られ、わずかにやわらかく、化学的に敏感なままである。ポリウレタンやポリエステルの塗装は厚く、硬く、強い（<a href=\"making.html\">ギターができるまで</a>と<a href=\"finishes.html\">塗装と仕上げ</a>を参照）。ギブソンの日本の代理店は、ラッカー塗装の楽器への危険を挙げる。ギタースタンドやハンガー、クリップ式チューナーのゴムやビニールは、触れていると塗装を変色させうるので覆う。化学繊維の布で磨くことと、弾き手の汗は、塗装と金属部品を傷める。革のストラップは弾いたあとに外すのがよい。急な温度の変化——冷えたケースを暖かい部屋ですぐに開けること——は、ラッカーの塗膜に細かなひび（チェッキング）を入れうる。だからケースを暖まるまで待ち、少しずつ開けるよう勧める。ふだんの掃除には、タカミネは楽器用のやわらかい布を軽く使い、落ちにくい汚れには固く絞った濡れ布、そのあと乾いた布を使うよう勧める。家庭用のつや出しや溶剤は使わないほうがよい。",
            zh:"塗裝的老化方式與怕的東西各不相同。硝化纖維漆（拉卡）是高級鋼弦吉他的傳統塗裝，以薄層堆疊，始終略軟且對化學品敏感；聚氨酯與聚酯塗裝則較厚、較硬、較耐用（見<a href=\"making.html\">一把吉他的誕生</a>與<a href=\"finishes.html\">塗裝與收尾</a>）。Gibson 的日本代理商列出拉卡漆樂器的危險：部分吉他架、掛架與夾式調音器的橡膠與塑膠接觸塗面會使其變色，應加以包覆；以化纖布擦拭，以及彈奏者留下的汗水，都會傷害塗裝與金屬零件；皮革背帶最好在彈奏後取下。溫度驟變——把冰冷的琴盒在溫暖房間裡立刻打開——可能使拉卡塗膜出現細密裂紋，稱為「龜裂」（checking），因此建議等琴盒回溫，再一點一點打開。日常清潔方面，Takamine 建議以樂器專用軟布輕拭，頑垢則用擰乾的濕布擦過後再以乾布擦乾；家用亮光劑與溶劑最好別用。" } },
        { t:"tiny",
          text:{
            en:"Sources: Yamaha, Musical Instrument Guide and Yamaha Music Connect (string changing); K. Yairi, FAQ; Gibson Japan, handling precautions; Takamine, maintenance guide.",
            ja:"出典：ヤマハ「楽器解体全書」、ヤマハミュージックコネクト（弦の交換）、ヤイリギター「よくあるご質問」、ギブソン・ジャパン「お取り扱いのご注意」、高峰楽器製作所「メンテナンスの仕方」。",
            zh:"資料來源：Yamaha〈樂器解體全書〉與 Yamaha Music Connect（換弦）；K.Yairi〈常見問題〉；Gibson Japan〈使用注意事項〉；高峰樂器製作所〈保養方法〉。" } }
      ] },
    { t:"section",
      id:"neck",
      title:{ en:"The neck, the strings' pull and the truss rod", ja:"ネック、弦の張力、トラスロッド", zh:"琴頸、弦的拉力與琴頸調整桿" },
      jp:"反りと弦高",
      body:[
        { t:"p",
          text:{
            en:"The strings of a steel-string guitar pull the neck forward with a combined force of the order of seventy kilograms, and a steel truss rod inside the neck pulls back. A well-set neck is not dead straight: it has a slight forward bow, called relief, which gives the strings room to vibrate without buzzing, and the rod is adjusted to keep that relief as the wood moves with the seasons. Small adjustments are routine for a technician and easy to overdo for an owner, which is why Takamine deliberately does not ship a truss-rod wrench with its guitars and suggests leaving adjustment to experienced players, dealers or the company's own service. The action — the height of the strings above the frets — also depends on the saddle and on the angle between neck and body, which slowly changes over decades as the top rises behind the bridge under constant tension; restoring it, the neck reset, is a job for a repairer.",
            ja:"スチール弦ギターの弦は、あわせておよそ七十キロの力でネックを前へ引き、ネックのなかの鋼のトラスロッドが引き戻す。よく調整されたネックはまっすぐではない。わずかに前に反った「順反り」があり、弦がビビらずに振動する余地をつくる。ロッドは、季節とともに木が動いてもその反りを保つように調整する。小さな調整は技術者には日常の作業だが、持ち主はやりすぎやすい。タカミネがわざとトラスロッドのレンチをギターに付けずに出荷し、経験のある弾き手か販売店か同社のサポートに任せるよう勧めるのはそのためである。弦高——フレットの上の弦の高さ——は、サドルと、ネックと胴の角度にもよる。その角度は、絶えない張力のもとで駒のうしろの表板が盛り上がるにつれ、何十年もかけてゆっくり変わる。それを戻すネックリセットは修理の人の仕事である。",
            zh:"鋼弦吉他的琴弦以合計約 70 公斤的力把琴頸往前拉，琴頸內的鋼製調整桿則往回拉。調整良好的琴頸並非完全筆直，而是略向前彎，稱為「琴頸弧度」（relief），讓琴弦有空間振動而不打弦；調整桿的作用，就是在木材隨季節變化時維持這個弧度。小幅調整對技師而言是例行工作，對琴主而言卻容易過頭，所以 Takamine 刻意不隨琴附上調整桿扳手，建議交給有經驗的演奏者、經銷商或公司的服務部門處理。弦距——琴弦離琴格的高度——也取決於下弦枕，以及琴頸與琴身之間的角度；在持續張力下，琴橋後方的面板會逐漸隆起，這個角度便在數十年間慢慢改變。把它修正回來的「琴頸重置」，是維修師的工作。" } },
        { t:"p",
          text:{
            en:"Whether to slacken the strings is a question on which makers differ. Yamaha suggests that anyone who plays only occasionally should loosen the strings slightly — even one turn of each tuning peg helps — to reduce the pull on the bridge, and Takamine recommends lowering them by a half-step to a whole step for long storage, after first trying two weeks at pitch to see whether the action rises. Gibson's Japanese guidance likewise advises minimising string tension for long-term storage. For guitars in regular use, keeping them at pitch is normal; what matters more is that the humidity around them is stable.",
            ja:"弦をゆるめるかどうかは、メーカーによって意見が分かれる。ヤマハは、たまにしか弾かない人は弦を少しゆるめる——ペグを一回転させるだけでもよい——ことで駒への引く力を減らすよう勧める。タカミネは、まず二週間ふつうの音程で様子を見て弦高が上がるか確かめたうえで、長く保管するときは半音から一音下げるよう勧める。ギブソンの日本の案内も、長期の保管では弦の張力を最小にするよう勧める。ふだん弾いているギターなら、音程に合わせたままがふつうである。それより大事なのは、まわりの湿度が安定していることである。",
            zh:"要不要放鬆琴弦，各廠商看法不一。Yamaha 建議不常彈的人把弦稍微放鬆——每個弦鈕轉一圈就有幫助——以減少對琴橋的拉力；Takamine 則建議先在標準音高下觀察兩週、看弦距是否升高，長期存放時再調低半音到全音。Gibson 日本的說明同樣建議長期存放時盡量降低琴弦張力。經常彈奏的吉他維持標準音高是常態；更重要的是周遭濕度保持穩定。" } },
        { t:"tiny",
          text:{
            en:"Sources: Takamine, maintenance guide; Yamaha, Musical Instrument Guide; Gibson Japan, handling precautions. The string-tension figure follows <a href=\"making.html\">How a Guitar Is Made</a>.",
            ja:"出典：高峰楽器製作所「メンテナンスの仕方」、ヤマハ「楽器解体全書」、ギブソン・ジャパン「お取り扱いのご注意」。弦の張力の値は<a href=\"making.html\">ギターができるまで</a>による。",
            zh:"資料來源：高峰樂器製作所〈保養方法〉；Yamaha〈樂器解體全書〉；Gibson Japan〈使用注意事項〉。弦張力數值依<a href=\"making.html\">一把吉他的誕生</a>一頁。" } }
      ] },
    { t:"section",
      id:"travel",
      title:{ en:"Travelling and flying", ja:"持ち運びと飛行機", zh:"攜帶與搭機" },
      jp:"移動",
      body:[
        { t:"p",
          text:{
            en:"The journey itself is rarely what harms a guitar; the waiting is. A case left in a parked car in a Gifu August, or in a luggage hold on a winter runway, goes through temperatures far outside anything a room provides. On flights, Taylor Guitars' advice is that there is no need to detune, because both the cabin and the hold are pressurised and the change adds no stress to the instrument; detuning, the company notes, will not protect a guitar from rough handling either. Tools such as a truss-rod wrench or string cutter in the case pocket are likely to be stopped at security and belong in checked baggage. Airline rules on instruments in the cabin vary by company and aircraft, so they are worth checking before booking — especially on routes between Japan and Taiwan, where a hard case may not fit an overhead bin. On arrival, let the closed case reach room temperature before opening it, as Gibson recommends, and give the guitar a day or two to settle into the new humidity before judging its set-up.",
            ja:"ギターを傷めるのは、移動そのものより待ち時間であることが多い。岐阜の八月に駐車した車に置いたケースや、冬の滑走路の貨物室のケースは、部屋ではありえない温度をくぐる。飛行機について、テイラー社は、客室も貨物室も与圧されていて、その変化は楽器に余分な負担をかけないので、弦をゆるめる必要はないと助言する。弦をゆるめても手荒な扱いからは守れない、とも同社は記す。ケースのポケットのトラスロッドのレンチや弦のカッターは保安検査で止められやすく、預け入れ荷物に入れるべきである。楽器の機内持ち込みの規則は航空会社や機材によって違うので、予約の前に確かめたい。とくに日本と台湾のあいだの路線では、ハードケースが頭上の棚に入らないこともある。着いたら、ギブソンが勧めるように、閉じたケースが室温になってから開け、弦高などの調整を判断する前に、一〜二日かけて新しい湿度になじませる。",
            zh:"傷害吉他的往往不是旅途本身，而是等待。岐阜 8 月停在車裡的琴盒，或冬季跑道上貨艙裡的琴盒，都會經歷室內不可能出現的溫度。關於搭機，Taylor 吉他的建議是不必降調，因為客艙與貨艙都有加壓，氣壓變化不會對樂器造成額外負擔；該公司也指出，降調並不能讓吉他免於粗暴搬運。放在琴盒口袋裡的調整桿扳手或剪弦鉗很可能在安檢時被攔下，應放進託運行李。各航空公司與機型對樂器帶上客艙的規定不同，訂位前值得確認——尤其是日本與台灣之間的航線，硬盒可能放不進頭頂行李櫃。抵達後，依 Gibson 的建議，等關著的琴盒回到室溫再打開，並在評斷弦距等調整之前，給吉他一兩天適應新的濕度。" } },
        { t:"tiny",
          text:{
            en:"Sources: Taylor Guitars blog, “5 Tips for Traveling with Your Taylor”; Gibson Japan, handling precautions.",
            ja:"出典：テイラーのブログ「5 Tips for Traveling with Your Taylor」、ギブソン・ジャパン「お取り扱いのご注意」。",
            zh:"資料來源：Taylor 部落格〈5 Tips for Traveling with Your Taylor〉；Gibson Japan〈使用注意事項〉。" } }
      ] },
    { t:"section",
      id:"repair",
      title:{ en:"When to see a repairer", ja:"修理に出すとき", zh:"何時該送修" },
      jp:"修理と保証",
      body:[
        { t:"steps",
          items:[
            { title:{ en:"A crack", ja:"割れ", zh:"裂縫" },
              jp:"すぐに",
              meta:{ en:"soon", ja:"早めに", zh:"盡早" },
              text:{
                en:"Keep the guitar at moderate humidity, do not glue it yourself, and take it in while the edges are clean; a fresh crack closes and glues far better than an old, dirty one.",
                ja:"中程度の湿度に保ち、自分で接着せず、縁がきれいなうちに持ち込む。新しい割れは、古く汚れた割れよりはるかによく閉じ、よく付く。",
                zh:"讓吉他維持中等濕度，不要自行黏合，趁裂口邊緣還乾淨時送修；新裂縫比沾了污垢的舊裂縫更容易合攏、黏得更牢。" } },
            { title:{ en:"A lifting bridge", ja:"ブリッジの浮き", zh:"琴橋翹起" },
              jp:"弦をゆるめて",
              meta:{ en:"slacken, then go", ja:"弦をゆるめてから", zh:"先鬆弦再送修" },
              text:{
                en:"If a gap opens under the back edge of the bridge, Yamaha warns against restringing to pitch, which can tear the bridge off; slacken the strings and have it reglued.",
                ja:"駒のうしろの縁の下にすき間ができたら、ヤマハは弦を張り直さないよう警告する。駒がはがれることがあるからである。弦をゆるめて接着し直してもらう。",
                zh:"若琴橋後緣下方出現縫隙，Yamaha 警告不要再把弦調回標準音高，否則可能把琴橋整個扯下；請放鬆琴弦，送修重新黏合。" } },
            { title:{ en:"Action that will not settle", ja:"落ち着かない弦高", zh:"弦距無法穩定" },
              jp:"調整",
              meta:{ en:"after two weeks", ja:"二週間様子を見て", zh:"觀察兩週後" },
              text:{
                en:"If string height stays wrong after the humidity has been corrected, the saddle, truss rod or neck angle needs attention.",
                ja:"湿度を直しても弦高がおかしいままなら、サドル、トラスロッド、ネックの角度に手を入れる必要がある。",
                zh:"濕度已恢復，弦距仍不對，就需要處理下弦枕、調整桿或琴頸角度。" } },
            { title:{ en:"Worn frets and nut", ja:"フレットとナットの減り", zh:"琴格與上弦枕磨損" },
              jp:"消耗",
              meta:{ en:"every few years", ja:"数年ごと", zh:"每隔數年" },
              text:{
                en:"Grooved frets, buzzing in one area and strings that stick in the nut are normal wear; frets can be levelled or replaced and a nut recut.",
                ja:"溝のできたフレット、一か所のビビり、ナットで引っかかる弦はふつうの消耗である。フレットはすり合わせや交換ができ、ナットは溝を切り直せる。",
                zh:"琴格出現凹槽、某一區域打弦、琴弦卡在上弦枕，都是正常磨耗；琴格可以整平或更換，上弦枕也可重新開槽。" } }
          ] },
        { t:"p",
          text:{
            en:"Guarantees differ as much as advice. K. Yairi, the maker in Kani, has offered what it calls a lifetime quality guarantee since the 1970s, on the principle that a real instrument should last a lifetime. Under the terms on its website, faults caused by defects in materials or manufacture that impair the basic function of the instrument are repaired free; changes from use, ageing of the materials, ordinary wear and damage from careless handling are repaired for a charge, which the company says it keeps as low as it can. Strings, nut, saddle, frets, pickups and batteries count as consumables. See <a href=\"yairi.html\">Yairi</a> for the company, and <a href=\"luthiers.html\">The Luthiers</a> for independent repairers in Gifu, several of whom work on instruments of any make.",
            ja:"保証も助言と同じくらい違う。可児のヤイリギターは、本物の楽器は本来末永く使えるものだという考えのもと、一九七〇年代から「永久品質保証」と呼ぶものを掲げてきた。同社のサイトの規定では、素材の不良や製作上の問題によって楽器の基本機能を損なう不具合は無料で直す。使用による変化や劣化、素材の経年変化、ふつうの摩耗、取り扱いの不注意による不具合は有償で、同社はできるだけ安くしていると述べる。弦、ナット、サドル、フレット、ピックアップ、電池は消耗品とされる。同社については<a href=\"yairi.html\">ヤイリ</a>を、どのメーカーの楽器も扱う工房をふくむ岐阜の個人の修理の人については<a href=\"luthiers.html\">個人製作家</a>を参照。",
            zh:"保固方式和建議一樣各不相同。可兒市的 K.Yairi 自 1970 年代起提供它所稱的「永久品質保證」，理念是真正的樂器本就應該用上一輩子。依其網站上的條款，因材料或製作瑕疵而損及樂器基本功能的故障免費修理；使用造成的變化與劣化、材料的經年變化、一般磨耗以及使用不慎造成的損壞則需付費，該公司表示會盡量壓低費用。琴弦、上弦枕、下弦枕、琴格、拾音器與電池屬消耗品。該公司的介紹見 <a href=\"yairi.html\">Yairi</a>；岐阜的獨立維修師——其中數位接修任何品牌的樂器——見<a href=\"luthiers.html\">獨立製琴師</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Yamaha, Musical Instrument Guide (bridge lifting); K. Yairi, FAQ and repair information; Japanese Wikipedia, Yairi Guitar (guarantee date).",
            ja:"出典：ヤマハ「楽器解体全書」（ブリッジの浮き）、ヤイリギター「よくあるご質問」「修理のご案内」、ウィキペディア「ヤイリギター」（保証の年）。",
            zh:"資料來源：Yamaha〈樂器解體全書〉（琴橋翹起）；K.Yairi〈常見問題〉〈維修說明〉；日文維基百科「ヤイリギター」（保固年份）。" } }
      ] },
    { t:"related",
      items:[
        { href:"moisture.html", why:{ en:"How wood takes up and loses water.", ja:"木が水を吸い、失うしくみ。", zh:"木材如何吸水與失水。" } },
        { href:"luthiers.html", why:{ en:"Repairers and builders in Gifu.", ja:"岐阜の修理と製作の工房。", zh:"岐阜的維修與製琴工坊。" } },
        { href:"yairi.html",
          why:{ en:"The Kani maker and its lifetime guarantee.", ja:"可児のメーカーと永久保証。", zh:"可兒的吉他廠與其終身保固。" } },
        { href:"making.html", why:{ en:"How the glued box is built.", ja:"接着された箱のつくり方。", zh:"這個黏合木箱如何製成。" } },
        { href:"finishes.html", why:{ en:"Lacquers and oils on wood.", ja:"木の塗装と油。", zh:"木材上的漆與油。" } }
      ] }
  ] };

/* ---- ----------------------------------------- listening */
GIFU.pages["listening"] = { kicker:{ en:"Sound · 13", ja:"音 · 13", zh:"聲音 · 13" },
  title:{ en:"Can You Hear the Wood?", ja:"木は聴こえるか", zh:"聽得見木頭嗎" },
  jp:"聴く",
  lede:{
    en:"Guitar catalogues describe rosewood as warm, mahogany as woody, maple as bright, cedar as quick and old wood as sweet, and prices follow the descriptions. Physics agrees that woods differ, sometimes a great deal. Whether those differences survive the building of a whole instrument, and whether a listener or player can hear them when they do not know what they are listening to, is a separate question — one that researchers in Japan, Europe and North America have tested with measurements and with blindfolds. This page sets out what they found, where the wood clearly matters, where it matters less than people think, and how to compare instruments fairly yourself.",
    ja:"ギターのカタログは、ローズウッドを温かい、マホガニーを木の香りがする、メイプルを明るい、シダーを反応が速い、古い木を甘いと描き、値段はその描写についていく。木が違うこと、ときには大きく違うことは、物理も認める。だが、その違いが楽器全体をつくったあとまで残るか、何を聴いているか知らない聴き手や弾き手にそれが聞こえるかは、別の問いである。日本、ヨーロッパ、北米の研究者は、それを測定と目隠しで確かめてきた。この頁は、彼らが見いだしたこと、木がはっきり効くところ、思われているほど効かないところ、そして自分で楽器を公平にくらべる方法を示す。",
    zh:"吉他型錄形容玫瑰木溫暖、桃花心木有木頭味、楓木明亮、雪松反應快、老木頭甜美，價格也隨這些描述起伏。物理學同意木材之間有差異，有時差異還很大。但這些差異在整把樂器做成之後是否仍然存在，而聽者或演奏者在不知道自己聽的是什麼時能否聽出來，則是另一個問題——日本、歐洲與北美的研究者已用儀器量測和蒙眼測試加以檢驗。本頁整理他們的發現：木材在哪些地方明顯重要、在哪些地方沒有人們想的那麼重要，以及你自己如何公平地比較樂器。" },
  body:[
    { t:"section",
      id:"physics",
      title:{ en:"What physics says", ja:"物理が言うこと", zh:"物理學怎麼說" },
      jp:"比ヤング率と損失正接",
      body:[
        { t:"p",
          text:{
            en:"Three properties of a piece of wood matter most to how it vibrates, and all three can be measured on a strip a few centimetres long. The first is the speed of sound along the grain, the square root of stiffness divided by density; the second is internal damping, the loss tangent tan δ, which says how much of each vibration is turned into heat; the third, derived from the first, is the radiation ratio, speed of sound divided by density, which indicates how efficiently a vibrating plate drives the air (see <a href=\"sound.html\">Wood &amp; Sound</a>). Obataya Eiichi's laboratory at the University of Tsukuba, which studies instrument woods, summarises what a soundboard needs in two numbers: sound should travel faster than about 5 kilometres a second along the grain, and internal friction should be no more than about 0.006. Spruce, at a density of 0.4–0.5, meets both; so, notably, does kiri, the wood of the Japanese koto — two unrelated instrument traditions converged on the same physics.",
            ja:"一片の木がどう振動するかにとって最も大事な性質は三つあり、三つとも数センチの細長い試験片で測れる。第一は繊維方向の音速で、剛さを密度で割った値の平方根である。第二は内部の減衰、損失正接tan δで、一回の振動のうちどれだけが熱に変わるかを示す。第三は第一から導かれる放射比で、音速を密度で割ったものであり、振動する板がどれだけ効率よく空気を動かすかを示す（<a href=\"sound.html\">木と音</a>を参照）。楽器の木を研究する筑波大学の小幡谷英一の研究室は、響板に要るものを二つの数でまとめる。繊維方向の音速が毎秒およそ五キロより速く、内部摩擦がおよそ〇・〇〇六以下であること。密度〇・四〜〇・五のスプルースは両方を満たし、目を引くことに、日本の箏の木であるキリも満たす。無関係な二つの楽器の伝統が、同じ物理にたどり着いたのである。",
            zh:"決定一塊木材如何振動的性質主要有三項，而且都能在幾公分長的細條試片上量得。第一是順紋方向的聲速，即剛性除以密度的平方根；第二是內部阻尼，也就是損耗角正切 tan δ，表示每次振動有多少轉為熱；第三由第一項推得，是聲輻射比，即聲速除以密度，表示振動板推動空氣的效率（見<a href=\"sound.html\">木與聲音</a>）。研究樂器木材的筑波大學小幡谷英一研究室，把響板的需求歸納為兩個數字：順紋聲速應快於每秒約 5 公里，內部摩擦應不大於約 0.006。密度 0.4–0.5 的雲杉兩項都符合；值得注意的是，日本箏所用的桐木也符合——兩個毫不相干的樂器傳統，殊途同歸地找到了同樣的物理。" } },
        { t:"p",
          text:{
            en:"Japanese wood scientists have done much of the careful measurement. In 1990 Yano Hiroyuki and colleagues compared German spruce and western red cedar cut from next to actual guitar tops, measuring the specific dynamic modulus and tan δ of each by free–free flexural vibration and setting the results beside a professional maker's grading of the same wood; both species stood out among woods generally for high specific modulus and low damping along the grain, with the spruce stiffer for its weight than the cedar. In 1996 Ono Teruaki of Gifu University's Faculty of Engineering measured the frequency responses of Sitka spruce and maple against acrylic and aluminium plates and concluded that a good top wood combines strong properties along the grain with pronounced anisotropy, while a good back wood is closer to the opposite. The physics, in short, is not in doubt: tops need light, stiff, lively wood, and spruce and cedar are among the best. What the physics cannot say on its own is how large a share of an instrument's sound those numbers control once the wood has been thinned, braced, glued, varnished and strung — and a finish alone, the Tsukuba laboratory notes, typically has an internal friction above 0.05, some ten times that of the spruce beneath it.",
            ja:"丁寧な測定の多くは日本の木材の研究者が担ってきた。一九九〇年、矢野浩之らは実際のギターの表板の隣から切り出したジャーマンスプルースとシダーをくらべ、両端自由のたわみ振動でそれぞれの比動的ヤング率とtan δを測り、同じ材への熟練のつくり手の評価と並べた。二つの樹種は木材全般のなかで、繊維方向の比ヤング率の高さと減衰の小ささで際立ち、スプルースは重さのわりにシダーより剛かった。一九九六年には岐阜大学工学部の小野晃明が、シトカスプルースとメイプルの周波数応答をアクリルやアルミニウムの板とくらべて測り、良い表板の木は繊維方向の強い振動特性と顕著な異方性をあわせもち、良い裏板の木はその逆に近いと結論した。要するに物理に疑いはない。表板には軽く剛く生き生きした木が要り、スプルースとシダーは最良のものに数えられる。物理だけで言えないのは、木が薄く削られ、力木を貼られ、接着され、塗装され、弦を張られたあと、その数字が楽器の音のどれだけを支配するかである。筑波大学の研究室が記すように、塗膜だけでもふつう内部摩擦が〇・〇五をこえ、下のスプルースのおよそ十倍になる。",
            zh:"許多細緻的量測是由日本木材科學家完成的。1990 年，矢野浩之等人比較了從實際吉他面板旁切下的德國雲杉與紅雪松，以兩端自由的彎曲振動量測各自的比動態楊氏模數與 tan δ，並與一位專業製琴師對同一批木材的評等並列；兩個樹種在一般木材中都以順紋比模數高、阻尼低而突出，雲杉的重量比剛性又高於雪松。1996 年，岐阜大學工學部的小野晃明把西加雲杉與楓木的頻率響應與壓克力、鋁板相比，結論是：好的面板木材兼具順紋方向強的振動特性與顯著的異向性，好的背板木材則接近相反。簡言之，物理學沒有疑問：面板需要輕、剛、富有活力的木材，而雲杉與雪松屬於最佳之列。物理學單獨說不出的，是木材經過削薄、貼音梁、黏合、上漆、上弦之後，這些數字究竟主宰了樂器聲音的多大比例——筑波大學研究室指出，光是塗膜的內部摩擦通常就超過 0.05，約為底下雲杉的十倍。" } },
        { t:"tiny",
          text:{
            en:"Sources: Obataya laboratory, University of Tsukuba, “Soundboard woods”; Yano, Mukunashiro & Onishi (1990), Journal of the Society of Materials Science, Japan 39(444); Ono (1996), Journal of the Acoustical Society of Japan (E) 17(4).",
            ja:"出典：筑波大学小幡谷研究室「響板材」、矢野・椋代・大西（一九九〇年）「ギター響板用材の音響的性質」『材料』三十九巻四四四号、小野（一九九六年）日本音響学会誌英文誌十七巻四号。",
            zh:"資料來源：筑波大學小幡谷研究室〈響板材〉；矢野、椋代、大西（1990 年）〈吉他響板用材的聲學性質〉，《材料》39 卷 444 期；小野（1996 年），《日本音響學會誌》英文版 17 卷 4 期。" } }
      ] },
    { t:"section",
      id:"violins",
      title:{ en:"The Stradivari tests", ja:"ストラディヴァリの試験", zh:"史特拉第瓦里測試" },
      jp:"新旧のバイオリン",
      body:[
        { t:"p",
          text:{
            en:"The most famous blind tests concern not guitars but violins, and the belief they examined is the strongest in all of instrument lore: that the violins of Stradivari and Guarneri “del Gesù”, made in Cremona around three centuries ago, sound better than anything made since. In 2010, at the International Violin Competition of Indianapolis, Claudia Fritz, Joseph Curtin and colleagues asked 21 experienced violinists to play six instruments in a dimly lit hotel room while wearing welders' goggles, with a dab of perfume on each chin rest to mask the smell of old varnish. Three of the violins were old — two by Stradivari and one by Guarneri, worth together some ten million dollars — and three were new. Asked which one they would take home, 13 of the 21 chose a new violin. The most-preferred instrument was new, the least-preferred was a Stradivari, and the players could not reliably tell old from new. The study was published in 2012.",
            ja:"最も名高い目隠しの試験はギターでなくバイオリンのもので、それが確かめた信念は、楽器にまつわる言い伝えのなかで最も強いものである。およそ三百年前にクレモナでつくられたストラディヴァリとグァルネリ・デル・ジェズのバイオリンは、以後つくられたどれよりも良く鳴る、という信念だ。二〇一〇年、インディアナポリス国際バイオリン・コンクールの会場で、クラウディア・フリッツ、ジョセフ・カーティンらは、経験豊かな二十一人のバイオリン奏者に、薄暗いホテルの一室で、溶接用ゴーグルをかけて六本の楽器を弾いてもらった。古いニスの匂いを消すため、あご当てには香水を少しつけた。三本は古い楽器——ストラディヴァリ二本とグァルネリ一本で、あわせておよそ一千万ドル——、三本は新作であった。どれを持ち帰りたいかと問われ、二十一人のうち十三人が新作を選んだ。最も好まれたのは新作で、最も好まれなかったのはストラディヴァリであり、奏者は新旧を確かに聞き分けられなかった。研究は二〇一二年に発表された。",
            zh:"最著名的盲測對象不是吉他而是小提琴，而它所檢驗的信念，是所有樂器傳說中最根深柢固的一個：大約三百年前在克雷莫納製作的史特拉第瓦里與瓜奈里「耶穌」小提琴，比其後任何琴都好聽。2010 年，在印第安納波利斯國際小提琴大賽期間，Claudia Fritz、Joseph Curtin 等人請 21 位資深小提琴家在昏暗的旅館房間裡，戴著焊接護目鏡試奏六把琴，並在每個腮托上抹一點香水以掩蓋老漆的氣味。其中三把是老琴——兩把史特拉第瓦里、一把瓜奈里，合計價值約一千萬美元——三把是新琴。被問到想帶哪一把回家時，21 人中有 13 人選了新琴。最受喜愛的是一把新琴，最不受喜愛的是一把史特拉第瓦里，而演奏者無法可靠地分辨新舊。這項研究於 2012 年發表。" } },
        { t:"p",
          text:{
            en:"The first study was small — six violins, about an hour per player, a hotel room — so the team repeated the test on a larger scale. Ten internationally known soloists each spent two sessions of 75 minutes, one in a rehearsal room and one in a 300-seat concert hall near Paris, with six Old Italian violins, five of them by Stradivari, and six new ones. Asked to choose an instrument to replace their own on a hypothetical concert tour, six of the ten chose a new violin, and one new violin was easily the favourite of all twelve. When the soloists guessed whether an instrument was old or new, they were right 33 times, wrong 31 times and undecided 5 times — no better than chance. The results were published in 2014. A third study, published in 2017, turned to audiences: 137 listeners in a Paris auditorium and a New York concert hall heard three Stradivari violins and three new ones, with the identities hidden from both players and audience, preferred the new ones, judged them to project better, and could not reliably tell which were which.",
            ja:"最初の研究は小さかった——バイオリン六本、一人およそ一時間、ホテルの一室——ので、チームは規模を広げて試験をくり返した。国際的に知られた十人のソリストが、パリ近郊のリハーサル室と三百席の演奏会場で七十五分ずつ二回、オールド・イタリアンのバイオリン六本——うち五本がストラディヴァリ——と新作六本を弾いた。仮の演奏旅行で自分の楽器に代えるならどれを選ぶかと問われると、十人のうち六人が新作を選び、一本の新作が十二本のなかで群を抜いて好まれた。楽器が古いか新しいかを当てると、正解三十三回、不正解三十一回、判断保留五回で、偶然と変わらなかった。結果は二〇一四年に発表された。二〇一七年に発表された三つめの研究は聴衆に目を向けた。パリのホールとニューヨークの演奏会場の百三十七人の聴き手が、奏者にも聴衆にもどれがどれか伏せたまま、ストラディヴァリ三本と新作三本を聴き、新作を好み、新作のほうが遠くまで届くと判断し、どれがどれかを確かに聞き分けることはできなかった。",
            zh:"第一項研究規模不大——六把琴、每人約一小時、一間旅館房間——研究團隊於是擴大規模重做測試。十位國際知名的獨奏家，在巴黎近郊的一間排練室與一座 300 席的音樂廳各進行一次 75 分鐘的測試，試奏六把義大利古琴（其中五把為史特拉第瓦里）與六把新琴。被問到若要在假想的巡迴演出中替換自己的琴會選哪一把時，十人中有六人選了新琴，而且其中一把新琴在全部十二把中明顯最受青睞。獨奏家猜測樂器新舊時，猜對 33 次、猜錯 31 次、無法判斷 5 次——與隨機無異。結果於 2014 年發表。2017 年發表的第三項研究轉向聽眾：巴黎一座演奏廳與紐約一座音樂廳共 137 位聽眾，在演奏者與聽眾都不知道琴的身分之下，聆聽三把史特拉第瓦里與三把新琴，結果偏好新琴，認為新琴的聲音傳得更遠，也無法可靠地分辨哪把是哪把。" } },
        { t:"figure",
          caption:{
            en:"Three results from the blind violin studies of Fritz, Curtin and colleagues: the share of players in 2010 (published 2012) and of soloists in the 2014 study who chose a new violin, and the soloists' success at guessing old or new, against the 50 per cent expected from pure guessing.",
            ja:"フリッツ、カーティンらのバイオリンの目隠し研究からの三つの結果。二〇一〇年の奏者（二〇一二年発表）と二〇一四年の研究のソリストのうち新作を選んだ割合、そしてソリストが新旧を当てた割合を、まったくの当て推量で期待される五十パーセントと並べた。",
            zh:"Fritz、Curtin 等人小提琴盲測研究的三項結果：2010 年的演奏者（2012 年發表）與 2014 年研究中的獨奏家選擇新琴的比例，以及獨奏家猜中新舊的比例，並與純粹亂猜時預期的 50% 並列。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"New violins, old violins, blind", ja:"新しいバイオリン、古いバイオリン、目隠しで", zh:"新琴與老琴的盲測" }, labelW:330, rowH:32, max:100, dec:0,
            items:[
              { n:{ en:"Players choosing a new violin (2010)", ja:"新作を選んだ奏者（2010年）", zh:"選擇新琴的演奏者（2010 年）" }, v:61.9, lab:{ en:"62% — 13 of 21", ja:"62％——21人中13人", zh:"62%——21 人中 13 人" }, f:"#E0E6DB" },
              { n:{ en:"Soloists choosing a new violin (2014)", ja:"新作を選んだソリスト（2014年）", zh:"選擇新琴的獨奏家（2014 年）" }, v:60, lab:{ en:"60% — 6 of 10", ja:"60％——10人中6人", zh:"60%——10 人中 6 人" }, f:"#E0E6DB" },
              { n:{ en:"Soloists' correct old/new guesses (2014)", ja:"ソリストが新旧を当てた割合（2014年）", zh:"獨奏家猜中新舊的比例（2014 年）" }, v:47.8, lab:{ en:"48% — 33 of 69", ja:"48％——69回中33回", zh:"48%——69 次中 33 次" }, f:"#EDE5D2" },
              { n:{ en:"Pure guessing", ja:"まったくの当て推量", zh:"純粹亂猜" }, v:50, lab:{ en:"50%", ja:"50％", zh:"50%" }, f:"#F0EDE4" }
            ] }); } },
        { t:"tiny",
          text:{
            en:"Sources: Fritz, Curtin, Poitevineau, Morrel-Samuels & Tao (2012), Proceedings of the National Academy of Sciences 109; Fritz et al. (2014), PNAS, “Soloist evaluations of six Old Italian and six new violins”; Fritz et al. (2017), PNAS, “Listener evaluations of new and Old Italian violins”.",
            ja:"出典：フリッツ、カーティン、ポワトヴィノー、モレル＝サミュエルズ、タオ（二〇一二年）『米国科学アカデミー紀要』百九巻、フリッツほか（二〇一四年）同誌「Soloist evaluations of six Old Italian and six new violins」、フリッツほか（二〇一七年）同誌「Listener evaluations of new and Old Italian violins」。",
            zh:"資料來源：Fritz、Curtin、Poitevineau、Morrel-Samuels、Tao（2012 年），《美國國家科學院院刊》109 卷；Fritz 等（2014 年），同刊〈Soloist evaluations of six Old Italian and six new violins〉；Fritz 等（2017 年），同刊〈Listener evaluations of new and Old Italian violins〉。" } }
      ] },
    { t:"section",
      id:"guitars",
      title:{ en:"Blind tests with guitars", ja:"ギターの目隠し試験", zh:"吉他的盲測" },
      jp:"裏板と表板",
      body:[
        { t:"p",
          text:{
            en:"For the steel-string guitar the most thorough test of the “tonewood” question was published in the Journal of the Acoustical Society of America in December 2018 by Samuele Carcagno, Roger Bucknall, Jim Woodhouse, Claudia Fritz and Christopher Plack. Bucknall, founder of Fylde Guitars in Penrith, England, built six guitars to the same design and specification except for the back and sides, which were made of six woods spanning a wide range of price and availability: Brazilian rosewood, Indian rosewood, mahogany, maple, sapele and walnut. Measurements of the vibration at the bridge showed only small differences between the six, and the authors could attribute them largely to the residual variability of hand building rather than to the back wood. Fifty-two guitarists then rated the overall sound quality of each instrument in a dimly lit room while wearing welders' goggles, so that they could not identify the wood by sight; their ratings were very similar for all six. In a blinded discrimination test, 31 guitarists tried to tell pairs of the guitars apart by sound or feel and could not easily do so. The authors' conclusion is measured but clear: the species of the back and sides has only a marginal effect on the guitar's body resonances and on its perceived sound.",
            ja:"スチール弦ギターでは、「トーンウッド」の問いの最も徹底した試験が、二〇一八年十二月に米国音響学会誌に発表された。著者はサムエレ・カルカーニョ、ロジャー・バックナル、ジム・ウッドハウス、クラウディア・フリッツ、クリストファー・プラックである。イングランドのペンリスのフィルド・ギターズの創業者バックナルは、裏板と側板を除いて同じ設計と仕様で六本のギターをつくった。裏板と側板は、値段も入手しやすさも大きく違う六つの木——ブラジリアン・ローズウッド、インディアン・ローズウッド、マホガニー、メイプル、サペリ、ウォールナット——である。駒の振動の測定では六本のあいだの差は小さく、著者はそれを裏板の木より、手づくりに残るばらつきに主に帰すことができた。そのうえで五十二人のギタリストが、見た目で木がわからないよう溶接用ゴーグルをかけ、薄暗い部屋でそれぞれの楽器の音の総合的な質を評価した。評価は六本ともよく似ていた。目隠しの弁別試験では、三十一人のギタリストが音や弾き心地で二本ずつを聞き分けようとしたが、容易にはできなかった。著者の結論は控えめだが明快である。裏板と側板の樹種は、ギターの胴の共鳴にも、知覚される音にも、わずかな影響しか与えない。",
            zh:"就鋼弦吉他而言，對「音木」問題最徹底的測試，是 Samuele Carcagno、Roger Bucknall、Jim Woodhouse、Claudia Fritz 與 Christopher Plack 於 2018 年 12 月發表在《美國聲學學會期刊》的研究。英格蘭彭里斯 Fylde 吉他的創辦人 Bucknall 以相同的設計與規格製作了六把吉他，唯一不同的是背板與側板，用了價格與取得難易度差異極大的六種木材：巴西玫瑰木、印度玫瑰木、桃花心木、楓木、沙比利與胡桃木。琴橋振動的量測顯示六把之間差異很小，作者認為這些差異主要來自手工製作殘留的個體差異，而非背板木材。接著，52 位吉他手戴上焊接護目鏡、在昏暗的房間裡為每把琴的整體音質評分，使他們無法憑外觀辨認木材；六把的評分非常接近。在盲測辨別試驗中，31 位吉他手試著以聲音或手感分辨兩兩一組的吉他，卻難以做到。作者的結論措辭謹慎而明確：背板與側板的樹種對吉他琴身共振與可感知的聲音，只有邊際影響。" } },
        { t:"p",
          text:{
            en:"The top tells a different story. In 2019 Sebastian Merchel, Ercan Altinsoy and David Olson reported a study built with Taylor Guitars in California. From stocks of nearly 500 Sitka spruce soundboard billets and about 800 bracing billets, pieces were chosen by their measured density and stiffness along the grain, and the same team of luthiers built a series of otherwise identical guitars of one model, set up by the factory's lead technician. A professional guitarist from the music academy in Dresden recorded each guitar in an anechoic chamber, and 23 listeners — 13 professional and 10 amateur guitarists — compared the recordings. They could tell the guitars apart, and they significantly preferred guitars whose tops and braces were less stiff along the grain and of low or medium density. The contrast with the back-wood study is instructive. Within a single species, differences in the properties of the wood that radiates the sound were audible; across six species of the wood that mostly reflects it, differences were hard to hear.",
            ja:"表板は別の物語を語る。二〇一九年、セバスティアン・メルヒェル、エルジャン・アルティンソイ、デヴィッド・オルソンは、カリフォルニアのテイラー社と組んだ研究を報告した。シトカスプルースの表板材およそ五百枚と力木材およそ八百本の在庫から、測った密度と繊維方向の剛さで材を選び、同じ職人のチームが、それ以外は同じ一つの機種のギターを順につくり、工場の主任技術者が調整した。ドレスデンの音楽大学のプロのギタリストが無響室でそれぞれを録音し、二十三人の聴き手——プロのギタリスト十三人とアマチュア十人——が録音をくらべた。聴き手はギターを聞き分けられ、表板と力木の繊維方向の剛さが低く、密度が低いか中ほどのギターを有意に好んだ。裏板の研究との対比は示唆に富む。同じ樹種のなかでも、音を放つ木の性質の違いは聞こえた。主に音を返す木では、六つの樹種にわたる違いが聞きとりにくかった。",
            zh:"面板則是另一回事。2019 年，Sebastian Merchel、Ercan Altinsoy 與 David Olson 發表了一項與加州 Taylor 吉他合作的研究。他們從近 500 塊西加雲杉面板毛料與約 800 根音梁毛料的庫存中，依量測到的密度與順紋剛性挑選木料，由同一組製琴師依序製作同一型號、其餘條件完全相同的一系列吉他，並由工廠首席技師調整。一位來自德勒斯登音樂學院的職業吉他手在無響室中錄下每把吉他，23 位聽者——13 位職業與 10 位業餘吉他手——比較這些錄音。他們能分辨出不同的吉他，並顯著偏好面板與音梁順紋剛性較低、密度低或中等的吉他。與背板研究的對照很有啟發性：在同一樹種之內，負責輻射聲音的木材其性質差異聽得出來；而主要負責反射聲音的木材，即使橫跨六個樹種，差異也難以聽出。" } },
        { t:"note",
          label:{ en:"Solid or laminated?", ja:"単板か合板か", zh:"單板還是合板？" },
          text:{
            en:"One question buyers ask most often has, as far as this book could find, no published blind test comparing otherwise identical guitars: whether a solid top sounds better than a laminated one. Physics suggests it should differ — glue lines add stiffness across the grain and extra damping, and a laminated top cannot be thinned and braced in the same way — and makers overwhelmingly use solid tops on better instruments. Laminates, on the other hand, are far more stable in dry or humid climates (see <a href=\"tonewoods.html\">Tonewoods</a>), which matters in both Takayama winters and Taipei summers.",
            ja:"買い手が最もよく尋ねる問いの一つ——単板の表板は合板の表板より良く鳴るか——には、本書が探したかぎり、ほかは同じギターをくらべた目隠しの試験が発表されていない。物理は違いがあるはずだと示す。接着層は繊維直角方向の剛さと余分な減衰を加え、合板の表板は同じように薄く削って力木を貼ることができない。そしてつくり手は上位の楽器にほとんど必ず単板の表板を使う。一方で合板は、乾いた気候でも湿った気候でもはるかに安定しており（<a href=\"tonewoods.html\">音響材</a>を参照）、それは高山の冬にも台北の夏にも効く。",
            zh:"買家最常問的問題之一——單板面板是否比合板面板好聽——據本書所能找到的資料，並沒有比較其餘條件相同之吉他的已發表盲測。物理學認為兩者應有差異：膠層會增加橫紋剛性與額外阻尼，合板面板也無法以同樣方式削薄並貼上音梁；而工匠在較高階的樂器上幾乎一律使用單板面板。另一方面，合板在乾燥或潮濕的氣候中都穩定得多（見<a href=\"tonewoods.html\">音木</a>），這一點在高山的冬天與臺北的夏天都很重要。" } },
        { t:"tiny",
          text:{
            en:"Sources: Carcagno, Bucknall, Woodhouse, Fritz & Plack (2018), J. Acoust. Soc. Am. 144(6): 3533; Merchel, Altinsoy & Olson (2019), J. Acoust. Soc. Am. 146(4): 2608–2618.",
            ja:"出典：カルカーニョ、バックナル、ウッドハウス、フリッツ、プラック（二〇一八年）米国音響学会誌百四十四巻六号三五三三頁、メルヒェル、アルティンソイ、オルソン（二〇一九年）同誌百四十六巻四号。",
            zh:"資料來源：Carcagno、Bucknall、Woodhouse、Fritz、Plack（2018 年），《美國聲學學會期刊》144 卷 6 期 3533 頁；Merchel、Altinsoy、Olson（2019 年），同刊 146 卷 4 期。" } }
      ] },
    { t:"section",
      id:"system",
      title:{ en:"What matters more than the species", ja:"樹種より効くもの", zh:"比樹種更重要的事" },
      jp:"つくり手・弦・弾き手",
      body:[
        { t:"p",
          text:{
            en:"If the back wood matters little and the top a good deal, what matters most? The studies point to the whole chain between the player's fingers and the listener's ear. The first link is the maker. In the back-wood study, the small measured differences between the six guitars came mostly from the ordinary variation of hand building — a brace carved a little differently, a top a fraction thinner — which means that two nominally identical guitars from one bench can differ as much as two guitars of different woods. The pattern and carving of the braces (see <a href=\"bracing.html\">Tops & Bracing</a>), the thickness of the top and the size and shape of the body are all decisions that change the sound more directly than the name of the species. The second link is the set-up: strings, their gauge and age, the saddle and nut, the action and the neck angle. K. Yairi points out that moving between extra-light, light and medium strings changes the total tension by about ten kilograms at each step, and new strings sound brighter than month-old ones on any guitar.",
            ja:"裏板の木がほとんど効かず、表板がかなり効くのなら、最も効くのは何か。研究が指すのは、弾き手の指から聴き手の耳までの鎖全体である。最初の輪はつくり手である。裏板の研究では、六本のあいだの小さな測定上の差は、主に手づくりのふつうのばらつき——少し違う削りの力木、わずかに薄い表板——から来ていた。つまり、同じ作業台から出た名目上同じ二本のギターが、違う木の二本と同じくらい違いうるということである。力木の模様と削り方（<a href=\"bracing.html\">表板と力木</a>を参照）、表板の厚さ、胴の大きさと形は、どれも樹種の名前より直接に音を変える決断である。二つめの輪は調整である。弦とその太さと古さ、サドルとナット、弦高、ネックの角度。ヤイリギターは、エクストラ・ライト、ライト、ミディアムと弦を替えるごとに張力の合計がおよそ十キロずつ変わると指摘する。そして、どのギターでも新しい弦はひと月たった弦より明るく鳴る。",
            zh:"如果背板木材影響甚微、面板影響頗大，那麼最重要的是什麼？研究指向從演奏者手指到聽者耳朵之間的整條鏈。第一環是製琴師。在背板研究中，六把吉他之間細微的量測差異主要來自手工製作的一般差異——某根音梁削得稍有不同、某片面板薄了一點——這意味著同一張工作台上做出、名義上相同的兩把吉他，差異可能不亞於兩把不同木材的吉他。音梁的排列與削法（見<a href=\"bracing.html\">面板與音梁</a>）、面板厚度、琴身大小與形狀，都是比樹種名稱更直接改變聲音的決定。第二環是調整：琴弦及其粗細與新舊、下弦枕與上弦枕、弦距、琴頸角度。K.Yairi 指出，從特細換到細、再換到中等弦，總張力每一級約變化 10 公斤；而在任何吉他上，新弦都比用了一個月的弦明亮。" } },
        { t:"p",
          text:{
            en:"The last links are the room, the player and the listener's mind. The same guitar sounds different in a small tatami room and a concrete hall, in the humid air of tsuyu and the dry air of a heated winter, when damp wood becomes heavier and more strongly damped (see <a href=\"guitarcare.html\">Caring for a Guitar</a>). A good player draws more tone from any instrument than a beginner does from the best. And knowledge shapes perception: every one of the studies on this page went to the trouble of goggles, darkened rooms or perfume precisely because a player who can see a label, a price or a famous maker's name hears the instrument differently. The authors of a 2026 study that followed a violin through six months of daily playing, and found no acoustic change beyond the drift of two unplayed control instruments, suggested that the familiar feeling of an instrument “opening up” may owe something to the mere-exposure effect — the tendency to like what has become familiar.",
            ja:"最後の輪は、部屋と、弾き手と、聴き手の心である。同じギターでも、小さな畳の部屋とコンクリートのホールで、梅雨の湿った空気と暖房の冬の乾いた空気のなかで、違って鳴る。湿った木は重くなり、減衰が大きくなるからである（<a href=\"guitarcare.html\">ギターの手入れ</a>を参照）。上手な弾き手は、初心者が最良の楽器から引き出すより多くの音を、どの楽器からも引き出す。そして知識は知覚を形づくる。この頁の研究はどれも、ゴーグルや暗い部屋や香水の手間をかけた。ラベルや値段や名高いつくり手の名が見える弾き手には、楽器が違って聞こえるからにほかならない。一本のバイオリンを六か月の毎日の演奏のあいだ追い、弾かれなかった二本の対照の楽器のゆらぎをこえる音響の変化を見いださなかった二〇二六年の研究の著者は、楽器が「鳴るようになる」というなじみの感覚は、なじんだものを好む傾向、単純接触効果によるところがあるのかもしれないと述べた。",
            zh:"最後幾環是房間、演奏者與聽者的心。同一把吉他，在小小的榻榻米房間與混凝土音樂廳裡、在梅雨季的潮濕空氣與暖氣房冬季的乾燥空氣中，聲音都不一樣——潮濕的木材更重、阻尼更大（見<a href=\"guitarcare.html\">吉他的保養</a>）。好的演奏者從任何樂器中引出的音色，都比初學者從最好的樂器中引出的更多。而認知會塑造感知：本頁的每一項研究都不嫌麻煩地使用護目鏡、昏暗房間或香水，正因為看得到標籤、價格或名家名字的演奏者，會把樂器聽成不同的樣子。一項 2026 年的研究追蹤一把小提琴六個月的每日演奏，發現其聲學變化並未超出兩把未被演奏的對照琴的自然漂移；作者認為，樂器「被彈開了」這種熟悉的感覺，或許部分源於單純曝光效應——人們傾向於喜歡已經熟悉的事物。" } },
        { t:"tiny",
          text:{
            en:"Sources: Carcagno et al. (2018); K. Yairi, FAQ (string tension); Pauget Ballesteros, Lalitte, Lostanlen & Fritz (2026), Acta Acustica, on violin “playing-in”.",
            ja:"出典：カルカーニョほか（二〇一八年）、ヤイリギター「よくあるご質問」（弦の張力）、ポジェ・バレステロス、ラリット、ロスタンラン、フリッツ（二〇二六年）『アクタ・アクスティカ』のバイオリンの「弾きこみ」研究。",
            zh:"資料來源：Carcagno 等（2018 年）；K.Yairi〈常見問題〉（弦張力）；Pauget Ballesteros、Lalitte、Lostanlen、Fritz（2026 年），《Acta Acustica》關於小提琴「養琴」的研究。" } }
      ] },
    { t:"section",
      id:"ageing",
      title:{ en:"Playing in, old wood and roasted tops", ja:"弾きこみ、古材、熱処理した表板", zh:"彈奏磨合、老木與烘烤面板" },
      jp:"経年変化",
      body:[
        { t:"p",
          text:{
            en:"Two beliefs sit alongside the tonewood catalogue: that a new instrument “opens up” as it is played, and that old wood sounds sweeter than new. Makers have built businesses on both — some play music to finished guitars before they leave the workshop (see <a href=\"yairi.html\">Yairi</a>), and others sell tops heat-treated to imitate age. Japanese wood scientists, who have been measuring the vibration of wood for decades, have helped to separate three different things that the beliefs run together: the effect of vibration itself, the slow chemical ageing of wood over decades and centuries, and the shorter-lived changes that follow drying and depend on the humidity the wood has lived through.",
            ja:"音響材のカタログと並んで、二つの信念がある。新しい楽器は弾くほどに「鳴るようになる」ということ、そして古い木は新しい木より甘く響くということである。つくり手はどちらにも商売を築いてきた。完成したギターに出荷前に音楽を聴かせるところもあれば（<a href=\"yairi.html\">ヤイリ</a>を参照）、年を経た木をまねて熱処理した表板を売るところもある。何十年も木の振動を測ってきた日本の木材学者は、この信念がひとまとめにしている三つの別のことを切り分けるのに力を貸してきた。振動そのものの影響、何十年、何百年にわたる木のゆっくりした化学的な経年変化、そして乾燥のあとに起こり、木が経てきた湿度に左右される、より短命な変化である。",
            zh:"音木型錄之外，還有兩種信念：新樂器會越彈越「開聲」，以及老木頭比新木頭聲音更甜美。製琴業者在這兩種信念上都建立了生意——有的在吉他出廠前為它們播放音樂（見<a href=\"yairi.html\">K. Yairi</a>），有的則販售經熱處理、模仿老化的面板。數十年來持續量測木材振動的日本木材學者，協助拆解了這些信念混為一談的三件事：振動本身的效應、木材在數十年乃至數百年間緩慢的化學老化，以及乾燥之後發生、取決於木材所經歷濕度的較短暫變化。" } },
        { t:"p",
          text:{
            en:"Vibration first. In 1992 Sobue Nobuo and Okayasu S. vibrated strips of seven species continuously at small amplitude and followed their properties: stiffness did not change, while damping fell over the first one or two hours and then levelled off, ending some 5–15 per cent lower after five hours. Effects of this kind are small and appear to be short-lived, and larger tests on whole instruments have not found lasting change. Andrew Piacsek and S. Lowery, reporting to the Acoustical Society of America in 2023, subjected three violins to more than 1,600 hours of mechanical vibration — the equivalent of about ten months at six hours a day, using a commercial vibrating device and a shaker driven by recordings of Vivaldi — and found no changes in frequency response that followed the vibration. The six-month study of a violin played daily by a soloist, described above, came to the same conclusion. The Obataya laboratory at the University of Tsukuba summarises the position plainly: there is no objective evidence that playing changes the wood, and what players perceive is better explained by their own adaptation to the instrument, by changes of humidity, by the slow creep of the top under string tension and by the settling of the bridge.",
            ja:"まず振動である。一九九二年、祖父江信夫と岡安は七樹種の小片を小さな振幅で連続して振動させ、その性質を追った。剛性は変わらず、損失は最初の一、二時間で下がってから横ばいになり、五時間後には五〜十五パーセントほど低かった。この種の効果は小さく、長続きしないように見え、楽器全体を使ったより大きな試験は持続する変化を見いだしていない。二〇二三年にアメリカ音響学会で報告したピアセクとローリーは、三挺のバイオリンに千六百時間を超える機械的な振動——一日六時間で約十か月分にあたり、市販の加振器と、ヴィヴァルディの録音で駆動する加振機を使った——を与えたが、振動にともなう周波数応答の変化は見つからなかった。前述の、独奏者が毎日弾いたバイオリンを六か月追った研究も、同じ結論に達している。筑波大学の小幡谷研究室は立場をはっきりまとめている。弾くことが木を変えるという客観的な証拠はなく、弾き手が感じる変化は、弾き手自身の楽器への慣れ、湿度の変化、弦の張力による表板のゆっくりしたクリープ、駒のなじみでよりよく説明できる、と。",
            zh:"先談振動。1992 年，祖父江信夫與岡安以小振幅連續振動七個樹種的木條，追蹤其性質：剛性沒有改變，阻尼則在最初一兩個小時下降後趨於平穩，五小時後約降低 5–15%。這類效應很小，而且似乎不持久；以整把樂器進行的較大規模測試，也沒有發現持續的變化。2023 年，皮亞塞克與洛厄里向美國聲學學會報告：他們讓三把小提琴接受超過 1,600 小時的機械振動——相當於每天六小時、約十個月，使用市售振動裝置與以韋瓦第錄音驅動的激振器——結果沒有發現隨振動而來的頻率響應變化。前文提到、追蹤一把由獨奏家每日演奏的小提琴長達六個月的研究，也得出相同結論。筑波大學小幡谷研究室把立場說得很清楚：沒有客觀證據顯示演奏會改變木材；演奏者感受到的變化，更適合用演奏者本身對樂器的適應、濕度變化、面板在弦張力下緩慢的潛變，以及琴橋的磨合來解釋。" } },
        { t:"p",
          text:{
            en:"Age is different, because wood really does change chemically over long periods. The Tsukuba laboratory reports that over centuries at ordinary humidities of 30–70 per cent, chemical ageing raises the specific modulus and lowers damping — but only by a few per cent. A larger but less durable change follows drying: in the first years after a board is seasoned its internal friction can drop by about 20 per cent, yet long exposure to very high humidity erases the gain. A review published in 2016 in the journal of the Japan Wood Research Society by Obataya and colleagues reached a similar conclusion for both aged and heat-treated wood: part of the celebrated improvement in stability and vibration is temporary, and a history of high humidity can reverse it. The most direct evidence on very old wood comes from Japanese temples. In 2009 Yokoyama Misao, Joseph Gril and colleagues tested hinoki from historic buildings aged from about 200 to about 1,500 years, including Hōryū-ji, against modern hinoki. Once differences of density and moisture were allowed for, stiffness along and across the grain and strength along the grain had not changed significantly; strength across the grain and the energy needed to break the wood had fallen markedly, and old hinoki had become brittle. The well-known claim that hinoki grows stronger for two centuries after felling (see <a href=\"hinoki.html\">Hinoki</a>) is therefore at best a matter of small differences.",
            ja:"年月は話が違う。木は長い時間のうちに、じっさいに化学的に変わるからである。筑波大学の研究室によれば、ふつうの湿度三十〜七十パーセントで何百年も経るうちに、化学的な経年変化は比ヤング率を上げ損失を下げる——ただし数パーセントにすぎない。もっと大きいが長続きしない変化は乾燥のあとに来る。板を枯らしてからの最初の数年で内部摩擦は約二十パーセント下がりうるが、非常に高い湿度に長くさらせばその得は消える。小幡谷らが二〇一六年に木材学会誌に発表した総説も、古材と熱処理材の両方について似た結論に達した。安定性と振動特性のよく言われる改善の一部は一時的であり、高湿度の履歴で元に戻りうる。ごく古い木についての最も直接の証拠は、日本の寺から来る。二〇〇九年、横山操、ジョセフ・グリルらは、法隆寺を含む約二百年から約千五百年を経た歴史的建造物のヒノキを、現代のヒノキとくらべた。密度と含水率の違いを補正すると、繊維方向と半径方向の剛性、繊維方向の強さに有意な変化はなかった。一方、繊維に直角な方向の強さと破壊に要するエネルギーは大きく下がり、古いヒノキはもろくなっていた。ヒノキは伐られてから二百年は強くなりつづけるというよく知られた説（<a href=\"hinoki.html\">ヒノキ</a>を参照）は、せいぜい小さな差の話である。",
            zh:"年歲則不同，因為木材在長時間中確實會發生化學變化。筑波大學研究室指出，在 30–70% 的一般濕度下歷經數百年，化學老化會提高比彈性模數、降低阻尼——但只有幾個百分點。乾燥之後則會出現較大、卻較不持久的變化：板材自然乾燥後的最初幾年，內部摩擦可能下降約 20%，但長期暴露在極高濕度下，這份收穫就會消失。小幡谷等人 2016 年在日本木材學會期刊發表的綜述，對老木與熱處理木材得出相似的結論：人們津津樂道的穩定性與振動特性改善，有一部分是暫時的，高濕度的經歷可以使其逆轉。關於極老木材最直接的證據來自日本的寺院。2009 年，橫山操、約瑟夫・格里爾等人把取自法隆寺等歷史建築、年代約 200 年至約 1,500 年的扁柏，與現代扁柏比較。校正密度與含水率的差異後，順紋與徑向的剛性以及順紋強度都沒有顯著改變；橫紋強度與破壞所需的能量則大幅下降，老扁柏變得脆了。那句廣為人知的說法——扁柏伐倒後兩百年間會越來越強（見<a href=\"hinoki.html\">日本扁柏</a>）——因此頂多只是小差異的問題。" } },
        { t:"p",
          text:{
            en:"Heat treatment tries to buy the benefits of age in a day. Wood is heated, usually to between about 150 and 200 °C in low oxygen or steam, which breaks down part of the hemicellulose, darkens the wood and reduces the water it takes up. Obataya's laboratory has shown that heating under controlled temperature and humidity can reproduce the colour and the acoustic properties of aged wood, and Yamaha, whose research began in the late 1990s during violin development, has used its own process, A.R.E., on acoustic guitars since 2008; tonewood suppliers now sell “torrefied” spruce tops as a matter of course. The results depend on the piece. When Mania and Skrodzka in Poland treated resonance spruce at 160 °C for eight hours in steam in 2020, density fell by 3.3 per cent on average and damping fell by 12–13 per cent in the lightest, best-quality samples — but rose by about 8 per cent in the denser ones, and the frequencies of different vibration modes moved in different directions. A 2018 German study of fruitwoods for guitar backs found that the same treatment made them much less prone to swelling, while their damping rose slightly. The clearest gain is stability, which matters in the humid Japanese and Taiwanese summer; a change of tone that listeners can pick out blind has not, as far as this book could find, been shown in a published test with otherwise identical guitars.",
            ja:"熱処理は、年月の利点を一日で買おうとする。木を、ふつう約百五十〜二百度で、酸素の少ない状態か水蒸気のなかで加熱すると、ヘミセルロースの一部が分解し、木は色が濃くなり、吸う水が減る。小幡谷研究室は、温度と湿度を制御した加熱で古材の色と音響的性質を再現できることを示した。ヤマハは一九九〇年代後半、バイオリンの開発のなかで研究をはじめ、独自の処理A.R.E.を二〇〇八年からアコースティックギターに用いている。いまでは音響材の業者が「トレファイド」したスプルースの表板をあたりまえに売っている。結果は材によって違う。二〇二〇年、ポーランドのマニアとスクロツカが共鳴用のスプルースを水蒸気中で百六十度、八時間処理すると、密度は平均で3.3パーセント下がり、損失は最も軽く品質のよい試料で十二〜十三パーセント下がった——だが密度の高い試料では約八パーセント上がり、振動のモードごとに固有振動数は違う向きに動いた。ギターの裏板用の果樹材を調べた二〇一八年のドイツの研究では、同じ処理で膨潤はずっと起こりにくくなったが、損失はわずかに上がった。いちばんはっきりした得は安定性であり、これは湿った日本や台湾の夏には意味がある。一方、聴き手が目隠しで聞きわけられる音の変化は、この本が調べたかぎり、ほかの条件をそろえたギターによる公表された試験では示されていない。",
            zh:"熱處理試圖在一天之內買到歲月的好處。木材通常在約 150–200°C、低氧或蒸汽環境中加熱，使部分半纖維素分解，木色變深，吸水量減少。小幡谷研究室已證明，在控制溫度與濕度下加熱，可以重現老木的顏色與聲學性質；Yamaha 在 1990 年代後期開發小提琴時開始相關研究，自 2008 年起在木吉他上使用自家的 A.R.E. 處理；如今音木供應商也理所當然地販售「烘烤」過的雲杉面板。結果因材而異。2020 年，波蘭的馬尼亞與斯克羅茨卡以 160°C 蒸汽處理共鳴用雲杉八小時，密度平均下降 3.3%，阻尼在最輕、品質最好的樣本中下降 12–13%——但在密度較高的樣本中反而上升約 8%，而且不同振動模態的頻率朝不同方向移動。2018 年一項針對吉他背板用果樹木材的德國研究發現，同樣的處理讓木材更不易膨脹，阻尼卻略為上升。最明確的好處是穩定性，這在潮濕的日本與台灣夏天很重要；至於聽者能在盲測中分辨的音色變化，就本書所能找到的資料而言，尚未在以其他條件相同的吉他進行的公開測試中得到證明。" } },
        { t:"table",
          caption:{ en:"Four beliefs and what the measurements say", ja:"四つの信念と測定が語ること", zh:"四種信念與量測結果" },
          cols:[
            { en:"Belief", ja:"信念", zh:"信念" },
            { en:"What was tested", ja:"確かめられたこと", zh:"檢驗內容" },
            { en:"What was found", ja:"わかったこと", zh:"發現" }
          ],
          rows:[
            [
              { en:"Playing opens up an instrument", ja:"弾きこむと鳴るようになる", zh:"越彈越開聲" },
              {
                en:"Hours of vibration of wood strips (1992) and of violins (2023); six months of playing (2026)",
                ja:"木の小片（一九九二年）とバイオリン（二〇二三年）の長時間振動、六か月の演奏（二〇二六年）",
                zh:"木條（1992 年）與小提琴（2023 年）長時間振動；六個月的演奏（2026 年）" },
              {
                en:"Small, short-lived drop in damping in strips; no lasting change in instruments",
                ja:"小片で損失が小さく一時的に下がるのみ。楽器に持続する変化はない",
                zh:"木條阻尼小幅且短暫下降；樂器無持續變化" }
            ],
            [
              { en:"Old wood sounds better", ja:"古い木はよく響く", zh:"老木聲音較好" },
              {
                en:"Hinoki up to about 1,500 years old from historic buildings (2009); reviews of aged wood",
                ja:"歴史的建造物の約千五百年までのヒノキ（二〇〇九年）、古材の総説",
                zh:"歷史建築中至約 1,500 年的扁柏（2009 年）；老木綜述" },
              {
                en:"Stiffness and damping change by a few per cent; old wood becomes brittle",
                ja:"剛性と損失の変化は数パーセント。古材はもろくなる",
                zh:"剛性與阻尼僅變化數個百分點；老木變脆" }
            ],
            [
              { en:"Roasted tops sound aged", ja:"熱処理した表板は古びた音がする", zh:"烘烤面板有老琴的聲音" },
              {
                en:"Spruce and fruitwoods heated at 160 °C (2018, 2020)",
                ja:"百六十度で処理したスプルースと果樹材（二〇一八年、二〇二〇年）",
                zh:"以 160°C 處理的雲杉與果樹木材（2018、2020 年）" },
              {
                en:"Better stability; damping down in some pieces, up in others",
                ja:"安定性は向上。損失は下がる材も上がる材もある",
                zh:"穩定性提升；阻尼有的下降、有的上升" }
            ],
            [
              { en:"Seasoning improves wood", ja:"枯らすと木がよくなる", zh:"自然乾燥使木材變好" },
              {
                en:"Internal friction in the years after drying (Tsukuba laboratory)",
                ja:"乾燥後の数年の内部摩擦（筑波大学の研究室）",
                zh:"乾燥後數年間的內部摩擦（筑波大學研究室）" },
              {
                en:"Drops by about 20%, but very high humidity can undo it",
                ja:"約二十パーセント下がるが、非常に高い湿度で元に戻りうる",
                zh:"下降約 20%，但極高濕度可使其復原" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Sobue & Okayasu (1992), Journal of the Society of Materials Science, Japan 41(461); Piacsek & Lowery (2023), Acoustical Society of America, acoustics.org; Obataya laboratory, University of Tsukuba, “Soundboard woods”, and University of Tsukuba Journal feature (2019); Zenigaya, Obataya & Matsuo (2016), Mokuzai Gakkaishi 62(6); Yokoyama et al. (2009), Comptes Rendus Physique 10(7); Yamaha, A.R.E. technology; Mania & Skrodzka (2020), Journal of King Saud University – Science 32(1); Krüger, Zauer & Wagenführ (2018), European Journal of Wood and Wood Products 76(6).",
            ja:"出典：祖父江・岡安（一九九二年）『材料』四十一巻四六一号、ピアセク・ローリー（二〇二三年）アメリカ音響学会 acoustics.org、筑波大学 小幡谷研究室「響板材」・筑波大学ジャーナルの記事（二〇一九年）、銭谷・小幡谷・松尾（二〇一六年）『木材学会誌』六十二巻六号、横山ほか（二〇〇九年）Comptes Rendus Physique 十巻七号、ヤマハ A.R.E.技術、マニア・スクロツカ（二〇二〇年）Journal of King Saud University – Science 三十二巻一号、クリューガーほか（二〇一八年）European Journal of Wood and Wood Products 七十六巻六号。",
            zh:"資料來源：祖父江與岡安（1992 年），《材料》第 41 卷第 461 號；皮亞塞克與洛厄里（2023 年），美國聲學學會 acoustics.org；筑波大學小幡谷研究室〈響板材〉及筑波大學 Journal 專題（2019 年）；Zenigaya、小幡谷與松尾（2016 年），《木材學會誌》第 62 卷第 6 號；橫山等（2009 年），Comptes Rendus Physique 第 10 卷第 7 號；Yamaha A.R.E. 技術；馬尼亞與斯克羅茨卡（2020 年），Journal of King Saud University – Science 第 32 卷第 1 號；克呂格等（2018 年），European Journal of Wood and Wood Products 第 76 卷第 6 號。" } }
      ] },
    { t:"section",
      id:"fair",
      title:{ en:"How to listen fairly", ja:"公平に聴きくらべるには", zh:"如何公平地聆聽比較" },
      jp:"聴きくらべ",
      body:[
        { t:"p",
          text:{
            en:"The studies on this page share a method that anyone choosing a guitar can borrow. None of it needs a laboratory: two friends, a few instruments, fresh strings, a quiet room and an hour are enough. Its purpose is not to prove that differences do not exist — they often do — but to find out how much of a preference comes from the sound, and how much from the name on the headstock, the price tag and the story.",
            ja:"この頁の研究には、ギターを選ぶ人ならだれでも借りられる共通の方法がある。研究室はいらない。友人二人、数本の楽器、新しい弦、静かな部屋、そして一時間あれば足りる。目的は差がないことを証明することではない——差はしばしばある——。好みのどれほどが音から来て、どれほどがヘッドの名前、値札、物語から来るのかを知ることである。",
            zh:"本頁的研究有一套共通的方法，任何挑選吉他的人都能借用。完全不需要實驗室：兩個朋友、幾把樂器、新弦、一間安靜的房間和一個小時就夠了。目的不是證明差異不存在——差異往往存在——而是弄清楚一個人的偏好有多少來自聲音，又有多少來自琴頭上的品牌、標價與故事。" } },
        { t:"steps",
          items:[
            { title:{ en:"Same strings, same set-up", ja:"同じ弦、同じ調整", zh:"相同的弦、相同的調整" },
              jp:"弦",
              text:{
                en:"Fit new strings of the same brand and gauge to every guitar a day or two beforehand, so that they have settled but none is fresher than another; check that the action is similar. A change of gauge alters the total string tension by about ten kilograms, and new strings are brighter than old ones on any guitar.",
                ja:"一、二日前に、すべてのギターに同じ銘柄・同じゲージの新しい弦を張る。弦がなじみ、しかもどれかだけ新しいということがないようにするためである。弦高が同じくらいかも確かめる。ゲージを変えると弦の張力の合計はおよそ十キロ変わり、どのギターでも新しい弦は古い弦より明るく鳴る。",
                zh:"提前一兩天為每把吉他換上相同品牌、相同規格的新弦，讓弦穩定下來，又不會有哪一把特別新；也確認弦距大致相同。換一個弦規格，總張力就會改變約 10 公斤，而且任何吉他換上新弦都比舊弦明亮。" } },
            { title:{ en:"Same room, same air", ja:"同じ部屋、同じ空気", zh:"相同的房間、相同的空氣" },
              jp:"湿度",
              text:{
                en:"Let the instruments sit in the room for some hours before playing, so that they share its temperature and humidity; a guitar brought in from a humid car or a dry, heated shop will not sound as it will an hour later.",
                ja:"弾く前に楽器を数時間その部屋に置き、温度と湿度をそろえる。湿った車内や、暖房で乾いた店から持ちこんだばかりのギターは、一時間後と同じ音はしない。",
                zh:"演奏前讓樂器在房間裡放置數小時，使其溫度與濕度一致；剛從潮濕車內或開暖氣的乾燥店裡拿進來的吉他，聲音不會與一小時後相同。" } },
            { title:{ en:"Hide the instruments", ja:"楽器を隠す", zh:"把樂器藏起來" },
              jp:"目隠し",
              text:{
                en:"The listener sits behind a screen or with eyes closed; an assistant hands the player the guitars in a random order, labelled only A, B, C. Players judge by feel as well as sound, so for a player test cover the headstock and dim the room, as the violin researchers did with welders' goggles.",
                ja:"聴き手はついたての後ろに座るか目を閉じる。助手が弾き手にギターを無作為の順で渡し、ラベルはA、B、Cだけにする。弾き手は音だけでなく手ざわりでも判断するので、弾き手の試験ではヘッドを覆い、部屋を暗くする。バイオリンの研究者が溶接用ゴーグルでしたようにである。",
                zh:"聆聽者坐在屏風後或閉上眼睛；由助手以隨機順序把吉他遞給演奏者，只標示 A、B、C。演奏者不只憑聲音、也憑手感判斷，所以測試演奏者時要遮住琴頭、調暗房間，就像小提琴研究者用焊接護目鏡那樣。" } },
            { title:{ en:"One player, several passages", ja:"一人の弾き手、いくつもの曲", zh:"同一位演奏者、多段樂句" },
              jp:"演奏",
              text:{
                en:"Use one player and the same short passages on every instrument — strummed chords, a single-note melody high and low, fingerpicking — at the same strength. Keep each excerpt short, since memory for timbre fades within seconds.",
                ja:"弾き手は一人とし、どの楽器でも同じ短い曲——ストローク、高音と低音の単音の旋律、指弾き——を同じ強さで弾く。音色の記憶は数秒で薄れるので、一つひとつは短くする。",
                zh:"由同一位演奏者在每把樂器上以相同力度彈奏相同的短樂句——刷和弦、高低音區的單音旋律、指彈。每段都要簡短，因為對音色的記憶幾秒內就會淡去。" } },
            { title:{ en:"Match the loudness", ja:"音量をそろえる", zh:"讓音量一致" },
              jp:"音量",
              text:{
                en:"Listeners tend to prefer the louder of two otherwise similar sounds. If you record, use one microphone at a fixed distance and adjust playback to equal loudness before comparing; if you listen live, ask the player to hold the dynamics steady.",
                ja:"聴き手は、ほかが似ている二つの音のうち大きいほうを好みがちである。録音するなら一本のマイクを決まった距離に置き、くらべる前に再生の音量をそろえる。生で聴くなら、弾き手に強さを一定に保ってもらう。",
                zh:"兩個其他條件相近的聲音，聽者往往偏好較大聲的那個。若要錄音，請用同一支麥克風、固定距離，比較前把播放音量調成一致；若是現場聆聽，則請演奏者保持力度穩定。" } },
            { title:{ en:"Repeat, then look", ja:"くりかえし、それから見る", zh:"重複，然後再看" },
              jp:"確認",
              text:{
                en:"Present each guitar more than once, and slip in the same one twice to see whether it is recognised. In the 2014 study of soloists, guesses of old versus new were no better than chance: 33 right and 31 wrong. Only after the blind round look at the instruments, and weigh neck, comfort, weight, looks and price as the separate matters they are.",
                ja:"どのギターも一度より多く聴かせ、同じものを二度まぜて、それとわかるか確かめる。二〇一四年の独奏者の研究では、古いか新しいかの当て推量は偶然と変わらず、正解三十三、不正解三十一だった。目隠しの回が終わってから楽器を見て、ネック、弾きやすさ、重さ、見た目、値段を、それぞれ別の問題として考える。",
                zh:"每把吉他都要呈現不只一次，並混入同一把兩次，看看是否認得出來。在 2014 年的獨奏家研究中，猜新舊的結果與隨機無異：猜對 33 次、猜錯 31 次。等盲測結束後再看樂器，把琴頸、舒適度、重量、外觀與價格當作各自獨立的問題來衡量。" } }
          ] },
        { t:"p",
          text:{
            en:"Done this way, a comparison usually teaches three things. Individual instruments differ, sometimes clearly, and the differences between tops and between makers' hands are easier to hear than the differences between back woods. A good part of any preference turns out to depend on what one can see. And the guitar that sounds best to you blind, in your room and under your hands, is the one worth buying — whatever wood the catalogue says it is made of. For the physics of tops and braces behind those differences, see <a href=\"bracing.html\">Tops &amp; Bracing</a>; for keeping an instrument sounding as it did on the day it was chosen, see <a href=\"guitarcare.html\">Caring for a Guitar</a>.",
            ja:"こうしてくらべると、ふつう三つのことがわかる。楽器は一本ごとに、ときにははっきり違い、表板やつくり手の手の違いは、裏板の樹種の違いより聞きとりやすい。どんな好みも、かなりの部分が目に見えるものに左右されている。そして目隠しで、自分の部屋で、自分の手で弾いていちばんよく聞こえるギターこそ、買う値打ちがある——カタログがどんな木でできていると言おうとも。その違いの背後にある表板と力木の物理は<a href=\"bracing.html\">表板と力木</a>で、選んだ日の音を保つ方法は<a href=\"guitarcare.html\">ギターの手入れ</a>で扱う。",
            zh:"這樣比較下來，通常會學到三件事。每把樂器各不相同，有時差異明顯，而面板之間、製琴師手藝之間的差異，比背板樹種之間的差異更容易聽出來。任何偏好都有相當一部分取決於看得見的東西。而在盲測中、在你的房間裡、在你手下聽起來最好的那把吉他，才值得買——不論型錄說它是什麼木頭做的。這些差異背後的面板與音梁物理，見<a href=\"bracing.html\">面板與音梁</a>；如何讓樂器保持選中那天的聲音，見<a href=\"guitarcare.html\">吉他的保養</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Fritz et al. (2014), Proceedings of the National Academy of Sciences, “Soloist evaluations of six Old Italian and six new violins”; Carcagno et al. (2018), J. Acoust. Soc. Am. 144(6); K. Yairi, FAQ (string tension).",
            ja:"出典：フリッツほか（二〇一四年）『米国科学アカデミー紀要』「六挺のオールド・イタリアンと六挺の新作バイオリンの独奏者による評価」、カルカーニョほか（二〇一八年）J. Acoust. Soc. Am. 百四十四巻六号、ヤイリギター よくある質問（弦の張力）。",
            zh:"資料來源：弗里茨等（2014 年），《美國國家科學院院刊》〈獨奏家對六把老義大利與六把新小提琴的評價〉；卡爾卡尼奧等（2018 年），J. Acoust. Soc. Am. 第 144 卷第 6 號；K. Yairi 常見問題（弦張力）。" } }
      ] },
    { t:"related",
      items:[
        { href:"sound.html", why:{ en:"The physics of wood and sound.", ja:"木と音の物理。", zh:"木與聲音的物理。" } },
        { href:"tonewoods.html", why:{ en:"The woods in question.", ja:"問われている木。", zh:"所討論的木材。" } },
        { href:"bracing.html", why:{ en:"Where makers shape the sound.", ja:"つくり手が音を形づくるところ。", zh:"工匠塑造聲音之處。" } },
        { href:"guitarcare.html", why:{ en:"Humidity changes the sound too.", ja:"湿度も音を変える。", zh:"濕度也會改變聲音。" } },
        { href:"japanesewoods.html",
          why:{ en:"Japanese woods as tonewoods.", ja:"トーンウッドとしての日本の木。", zh:"作為音木的日本木材。" } }
      ] }
  ] };
