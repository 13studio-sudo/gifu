/* =============================================================
   THE SPIRIT OF GIFU — Wood Craft
   11 pages. Each page is one GIFU.pages["key"] = {…}
   module; the order here is the order of the navigation
   (GIFU.NAV in assets/js/core.js).
   ============================================================= */

/* ---- ----------------------------------------- furniture */
GIFU.pages["furniture"] = { kicker:{ en:"Wood Craft · 01", ja:"木の工芸 · 01", zh:"木作工藝 · 01" },
  title:{ en:"Hida Furniture", ja:"飛騨の家具", zh:"飛驒家具" },
  jp:"曲木から始まった百年",
  lede:{
    en:"Takayama is one of Japan's best-known furniture towns, and its industry began with a single material and a single technique: beech, bent with steam. In 1920, when beech in Hida was still thought fit only for charcoal and clogs, a small company set out to make bentwood chairs in the manner of the Viennese Thonet factory. Within fifteen years Hida chairs were being sold in the United States; a century later, some two dozen firms in Takayama and Hida city make furniture under a shared regional trademark and an explicit design charter. This page tells the story of the industry and describes the companies that make it up.",
    ja:"高山は日本で最もよく知られた家具の町の一つであり、その産業はただ一つの材料とただ一つの技から始まった。蒸気で曲げたブナである。一九二〇年、飛騨のブナがまだ炭や下駄にしか向かないと思われていたころ、ひとつの小さな会社が、ウィーンのトーネットの工場にならって曲木の椅子をつくりはじめた。十五年のうちに飛騨の椅子はアメリカで売られるようになり、百年後のいま、高山と飛騨市の二十数社が、共通の地域団体商標と明文化されたデザインの憲章のもとで家具をつくっている。この頁は、この産業の物語と、それをかたちづくる会社を紹介する。",
    zh:"高山是日本最知名的家具之城之一，其產業始於單一材料與單一技術：以蒸汽彎曲的山毛櫸。1920 年，飛驒的山毛櫸還被認為只適合做木炭與木屐時，一家小公司開始仿效維也納托奈特（Thonet）工廠製作曲木椅。不到十五年，飛驒椅子便在美國銷售；一百年後，高山與飛驒市約有二十多家企業，在共同的地域團體商標與明文化的設計憲章下製作家具。本頁講述這個產業的故事，並介紹構成它的公司。" },
  body:[
    { t:"section",
      id:"origins",
      title:{ en:"A chair from firewood", ja:"薪から椅子を", zh:"從柴薪到椅子" },
      jp:"一九二〇年",
      body:[
        { t:"p",
          text:{
            en:"Hida had carpenters, carvers and lacquerers in abundance, but no furniture industry in the Western sense: Japanese houses had little furniture. What prompted one was the arrival in Takayama of two craftsmen who knew how to steam-bend wood, and a group of local investors who saw that the vast beech forests of the region, then cut mainly for charcoal, could supply a new product. In 1920 they founded Chūō Mokkō with twenty-four shareholders and six employees. The first two years were full of failure — the bent parts wrinkled and split, the lacquer peeled — but in 1921–22 the company made 2,636 pieces, mostly chairs, and in 1923 it reorganised as Hida Mokkō. By 1925 its chairs were winning medals at national exhibitions.",
            ja:"飛騨には大工、彫師、塗師がたくさんいたが、西洋の意味での家具の産業はなかった。日本の家には家具がほとんどなかったからである。それを生んだのは、木を蒸して曲げる術を知る二人の職人が高山に来たことと、当時おもに炭のために伐られていたこの地方の広大なブナの森が新しい製品を支えうると見た、地元の出資者たちだった。一九二〇年、二十四人の株主と六人の従業員で中央木工が創業した。はじめの二年は失敗の連続だった——曲げた部材はしわが寄って割れ、塗りははがれた——が、一九二一〜二二年には二千六百三十六点、多くは椅子をつくり、一九二三年に飛騨木工株式会社に改組した。一九二五年には、その椅子は全国の博覧会で賞を得ていた。",
            zh:"飛驒有大量木匠、雕刻師與漆師，卻沒有西方意義上的家具產業：日本住宅幾乎不用家具。促成這個產業的，是兩位懂得蒸汽彎木的工匠來到高山，以及一群在地投資者看出：當時主要伐作木炭的廣大山毛櫸林，可以供應一種新產品。1920 年，他們以二十四名股東、六名員工創立中央木工。頭兩年失敗連連——彎曲構件起皺開裂、漆面剝落——但在 1921–22 年間，公司做出了 2,636 件產品，多為椅子，並於 1923 年改組為飛驒木工株式會社。到了 1925 年，其椅子已在全國博覽會上獲獎。" } },
        { t:"timeline",
          items:[
            { year:"1920",
              title:{ en:"Chūō Mokkō founded", ja:"中央木工の創業", zh:"中央木工創立" },
              text:{
                en:"Capital ¥30,000; bentwood chairs of Hida beech.",
                ja:"資本金三万円。飛騨のブナの曲木の椅子。",
                zh:"資本額三萬日圓；以飛驒山毛櫸製作曲木椅。" } },
            { year:"1931",
              title:{ en:"The triangle chair", ja:"三角椅子", zh:"三角椅" },
              text:{
                en:"A bentwood design registered by the company, one of its early successes.",
                ja:"会社が意匠登録した曲木の意匠で、初期の成功作の一つ。",
                zh:"公司登錄的曲木設計，為早期成功作品之一。" } },
            { year:"1935",
              title:{ en:"America", ja:"アメリカへ", zh:"銷往美國" },
              text:{
                en:"The American buyer Stanley Slotkin visits Takayama; exports to the United States begin.",
                ja:"アメリカのバイヤー、スタンレー・スロトキンが高山を訪れ、アメリカへの輸出が始まる。",
                zh:"美國採購商 Stanley Slotkin 造訪高山，開始外銷美國。" } },
            { year:"1943–45",
              title:{ en:"War", ja:"戦争", zh:"戰爭" },
              text:{
                en:"Furniture gives way to wooden aircraft parts; the company is merged into an aircraft firm and re-emerges in 1945 as Hida Sangyō.",
                ja:"家具は木製の飛行機部品に取って代わられ、会社は航空機の会社に統合され、一九四五年に飛騨産業として再出発する。",
                zh:"家具讓位給木製飛機零件；公司併入航空機公司，1945 年以飛驒產業之名重新出發。" } },
            { year:"1943–46",
              title:{ en:"New firms", ja:"新しい会社", zh:"新公司" },
              text:{
                en:"Kashiwa Mokkō's predecessor (1943) and Nissin Mokkō (1946) are founded in Takayama — the beginnings of a cluster.",
                ja:"柏木工の前身（一九四三年）と日進木工（一九四六年）が高山に生まれる——集積の始まりである。",
                zh:"柏木工前身（1943）與日進木工（1946）在高山創立——產業聚落由此萌芽。" } },
            { year:"1946–49",
              title:{ en:"For the Occupation, then abroad", ja:"進駐軍、そして海外へ", zh:"供應駐軍，再度外銷" },
              text:{
                en:"Furniture for the Occupation forces, then exports to the US resume in 1949.",
                ja:"進駐軍の家具をつくり、一九四九年にアメリカへの輸出が再開する。",
                zh:"為佔領軍製作家具，1949 年恢復外銷美國。" } }
          ] }
      ] },
    { t:"section",
      id:"cluster",
      title:{ en:"The makers", ja:"つくり手たち", zh:"製造商群像" },
      jp:"飛騨木工連合会",
      body:[
        { t:"p",
          text:{
            en:"The furniture makers of Hida are organised in the Hida Mokkō Rengōkai, a cooperative federation of about two dozen companies. Most are in Takayama; a few are in Hida city. They range from large factories making hundreds of chairs a day to small workshops, and include makers of chairs (<em>ashimono</em>, “leg things”) and of cabinets and storage furniture (<em>hakomono</em>, “box things”), as well as specialist firms such as a maker of woodworking machinery. The federation runs an annual joint exhibition in Takayama, the Hida Furniture Festival — held in autumn until 2024 and in early summer since 2025.",
            ja:"飛騨の家具メーカーは、二十数社からなる協同組合、飛騨木工連合会にまとまっている。多くは高山に、いくつかは飛騨市にある。一日に何百脚もの椅子をつくる大きな工場から小さな工房まで幅があり、椅子などの脚物をつくる会社と、棚や収納の箱物をつくる会社、そして木工機械のメーカーのような専門の会社も含まれる。連合会は毎年、高山で合同の展示会、飛騨の家具フェスティバルを開く。二〇二四年までは秋に、二〇二五年からは初夏に開かれている。",
            zh:"飛驒家具廠商組成「飛驒木工聯合會」，這是一個約有二十多家企業的協同組合聯合會。多數位於高山，少數在飛驒市。規模從日產數百張椅子的大工廠到小工坊不等，包括製作椅子等「腳物」的公司、製作櫥櫃與收納家具等「箱物」的公司，以及木工機械製造商之類的專業企業。聯合會每年在高山舉辦聯合展覽「飛驒家具節」，2024 年以前於秋季舉行，2025 年起改在初夏。" } },
        { t:"table",
          caption:{ en:"Some of Hida's furniture makers", ja:"飛騨の家具メーカー（抜粋）", zh:"飛驒家具廠商（節選）" },
          cols:[
            { en:"Company", ja:"会社", zh:"公司" },
            { en:"Founded", ja:"創業", zh:"創立" },
            { en:"Known for", ja:"得意とするもの", zh:"特色" }
          ],
          numCols:[1],
          rows:[
            [
              { en:"Hida Sangyō", ja:"飛騨産業", zh:"飛驒產業" },
              "1920",
              {
                en:"Chairs and bentwood; compressed-sugi furniture; the “Mori no Kotoba” series that uses knots as design",
                ja:"椅子と曲木。圧縮スギの家具。節を意匠に生かした「森のことば」",
                zh:"椅子與曲木；壓縮柳杉家具；以節疤為設計元素的「森之語」系列" }
            ],
            [
              { en:"Kashiwa Mokkō", ja:"柏木工", zh:"柏木工" },
              { en:"1943 (as Kashiwa from 1948)", ja:"一九四三年（一九四八年から柏木工）", zh:"1943（1948 年起稱柏木工）" },
              {
                en:"Windsor chairs from 1952, later box furniture; the long-selling “Wilderness” series",
                ja:"一九五二年からウィンザーチェア、のちに箱物。ロングセラーの「ウィルダネス」",
                zh:"1952 年起製作溫莎椅，後以箱物見長；長銷的「Wilderness」系列" }
            ],
            [
              { en:"Nissin Mokkō", ja:"日進木工", zh:"日進木工" },
              "1946",
              {
                en:"Light, modern chairs of Nordic character; certificate No. 2 of the Hida furniture trademark",
                ja:"北欧の趣の軽くモダンな椅子。飛騨の家具の商標認定第二号",
                zh:"具北歐風格的輕巧現代椅；飛驒家具商標認證第二號" }
            ],
            [
              { en:"Shirakawa", ja:"シラカワ", zh:"Shirakawa" },
              "—",
              { en:"Box furniture and made-to-order storage", ja:"箱物と受注の収納家具", zh:"箱物與訂製收納家具" }
            ],
            [
              { en:"Kitani", ja:"キタニ", zh:"Kitani" },
              "—",
              {
                en:"Licensed production of Danish mid-century classics, including Finn Juhl's No. 53 chair; described as Japan's only Finn Juhl licensee",
                ja:"デンマークの名作家具のライセンス生産。フィン・ユールのNo.53チェアもつくり、日本で唯一のフィン・ユールのライセンス生産者とされる",
                zh:"丹麥中世紀經典家具的授權生產，包括 Finn Juhl No.53 椅；被介紹為日本唯一的 Finn Juhl 授權製造商" }
            ],
            [
              { en:"Oak Village", ja:"オークヴィレッジ", zh:"Oak Village" },
              "1974",
              {
                en:"Solid-wood furniture, toys and houses from Japanese broadleaves; tree planting",
                ja:"国産広葉樹の無垢の家具、玩具、住宅。植樹",
                zh:"以日本闊葉材製作實木家具、玩具與住宅；植樹" }
            ],
            [
              { en:"Ibata Interior", ja:"イバタインテリア", zh:"Ibata Interior" },
              "—",
              { en:"Furniture and interiors", ja:"家具とインテリア", zh:"家具與室內" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"“—” = founding year not confirmed from company sources consulted. Membership of the federation is about 24 companies.",
            ja:"「—」は参照した会社の資料で創業年を確かめられなかったもの。連合会の加盟はおよそ二十四社。",
            zh:"「—」表示未能從所參考的公司資料確認創立年份。聯合會會員約 24 家。" } }
      ] },
    { t:"section",
      id:"exports",
      title:{ en:"Made in Hida for America", ja:"アメリカのための飛騨の家具", zh:"為美國製造的飛驒家具" },
      jp:"輸出の時代",
      body:[
        { t:"p",
          text:{
            en:"For half a century Hida's furniture industry depended heavily on exports. The American buyer Stanley Slotkin, who first came to Takayama in 1935, became so closely involved that in 1950 he took a majority stake in Hida Sangyō through a trading company. In the 1950s and 1960s the Takayama firms shipped chairs to the United States by the tens of thousands; Kashiwa Mokkō, which began exporting in 1958, reportedly sold more than 200,000 of a single model, the Mates chair, in its peak years. The end came with the currency changes of the 1970s and 1980s: Hida Sangyō's American exports ended in 1973, and Kashiwa stopped exporting altogether in 1986. The industry turned to the Japanese home market — which by then, with Western-style dining tables and sofas in every house, had become large.",
            ja:"半世紀のあいだ、飛騨の家具産業は輸出に大きく頼っていた。一九三五年に初めて高山に来たアメリカのバイヤー、スタンレー・スロトキンは深く関わるようになり、一九五〇年には商社を通じて飛騨産業の株の過半を握った。一九五〇年代と六〇年代、高山の会社は何万もの椅子をアメリカに送った。一九五八年に輸出を始めた柏木工は、最盛期に一つのモデル、メイツチェアを二十万脚以上売ったとされる。終わりは一九七〇年代と八〇年代の為替の変化とともに来た。飛騨産業のアメリカへの輸出は一九七三年に終わり、柏木工は一九八六年に輸出を完全にやめた。業界は日本の国内市場に向かった。そのころには、どの家にも洋風の食卓とソファがあり、国内の市場は大きくなっていた。",
            zh:"半個世紀以來，飛驒家具產業高度仰賴外銷。1935 年首度造訪高山的美國採購商 Stanley Slotkin 參與日深，1950 年更透過貿易公司取得飛驒產業過半股權。1950、60 年代，高山各廠以數萬張計的規模把椅子運往美國；1958 年開始外銷的柏木工，據稱在巔峰時期單一款式「Mates chair」就賣出二十萬張以上。終結隨著 1970、80 年代的匯率變化而來：飛驒產業對美外銷於 1973 年結束，柏木工則在 1986 年完全停止外銷。產業轉向日本國內市場——當時每個家庭都已擺上西式餐桌與沙發，國內市場早已壯大。" } }
      ] },
    { t:"section",
      id:"charter",
      title:{ en:"The Hida design charter", ja:"飛騨デザイン憲章", zh:"飛驒設計憲章" },
      jp:"地域団体商標",
      body:[
        { t:"p",
          text:{
            en:"In January 2008 the federation registered “Hida no kagu” (Hida furniture) and “Hida-Takayama no kagu” as regional collective trademarks, followed by a logo in 2009 and registrations in Taiwan (2009) and China (2010) to protect the name abroad. To use the mark, a company must be certified against six standards set out in the Hida design charter. Nissin Mokkō received certificate No. 0002 in December 2009.",
            ja:"二〇〇八年一月、連合会は「飛騨の家具」と「飛騨・高山の家具」を地域団体商標として登録し、二〇〇九年にロゴを定め、海外で名を守るため台湾（二〇〇九年）と中国（二〇一〇年）でも登録した。しるしを使うには、会社は飛騨デザイン憲章に定めた六つの基準で認定を受けねばならない。日進木工は二〇〇九年十二月に認定第〇〇〇二号を受けた。",
            zh:"2008 年 1 月，聯合會將「飛驒家具」與「飛驒・高山家具」註冊為地域團體商標，2009 年制定標誌，並為在海外保護名號，於台灣（2009）與中國（2010）註冊。企業要使用此標章，必須依《飛驒設計憲章》所訂六項標準取得認證。日進木工於 2009 年 12 月取得第 0002 號認證。" } },
        { t:"figure",
          caption:{
            en:"The six standards a company must meet to use the Hida furniture trademark. Source: Takayama city and member companies' published descriptions of the charter.",
            ja:"飛騨の家具の商標を使うために会社が満たすべき六つの基準。出典：高山市と加盟企業が公表した憲章の説明。",
            zh:"企業使用飛驒家具商標所須符合的六項標準。資料來源：高山市及會員企業公開的憲章說明。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Six standards", ja:"六つの基準", zh:"六項標準" }, per:3, bh:108,
            steps:[
              { t:{ en:"Ecology", ja:"エコロジー", zh:"生態" }, d:{ en:"Lowest formaldehyde class (F☆☆☆☆) for boards and glues.", ja:"ボードと接着剤はホルムアルデヒドの最も少ない区分（F☆☆☆☆）。", zh:"板材與膠合劑須為最低甲醛等級（F☆☆☆☆）。" } },
              { t:{ en:"Origin", ja:"産地", zh:"產地" }, d:{ en:"All processing after primary sawing done in Hida.", ja:"一次製材のあとの加工はすべて飛騨で。", zh:"初次製材之後的所有加工皆在飛驒完成。" } },
              { t:{ en:"Warranty", ja:"保証", zh:"保固" }, d:{ en:"Ten years on wooden parts.", ja:"木の部分に十年の保証。", zh:"木質部分保固十年。" } },
              { t:{ en:"Quality", ja:"品質", zh:"品質" }, d:{ en:"Tested to JIS or ISO standards; proper labelling.", ja:"JISやISOの基準で試験し、適切に表示する。", zh:"依 JIS 或 ISO 標準測試；確實標示。" } },
              { t:{ en:"Wood", ja:"木材", zh:"木材" }, d:{ en:"Legal and sustainable timber, chosen with skill.", ja:"合法で持続可能な材を、目利きして選ぶ。", zh:"合法且永續的木材，並經專業挑選。" } },
              { t:{ en:"Design", ja:"デザイン", zh:"設計" }, d:{ en:"Commitment to the principles of the charter.", ja:"憲章の理念を守る。", zh:"恪守憲章理念。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"design",
      title:{ en:"Designers and materials", ja:"デザイナーと材料", zh:"設計師與材料" },
      jp:"協働と国産材",
      body:[
        { t:"p",
          text:{
            en:"Since the 1980s Hida's makers have worked increasingly with outside designers. Kashiwa Mokkō began designer collaborations in 1984; in 2003 Hida Sangyō signed a contract with the Italian designer Enzo Mari, whose “HIDA” series was shown at the Milan Triennale in 2005; Kitani reached a licensing agreement with the holder of the rights to the work of the Danish designer Finn Juhl, after years of repairing and studying his chairs, and, by its own account, makes his No. 53 chair; it is described as the only company in Japan licensed to make his furniture. At the same time the makers have tried to reduce their dependence on imported hardwoods. Hida Sangyō's compressed-sugi furniture uses the plantation conifer that is most abundant in Japan; its “Mori no Kotoba” series deliberately shows the knots that factories once cut out; and small broadleaf lots from Hida city's forests are finding their way into limited editions.",
            ja:"一九八〇年代から、飛騨のメーカーはますます外のデザイナーと仕事をするようになった。柏木工は一九八四年にデザイナーとの協働を始め、二〇〇三年に飛騨産業はイタリアのデザイナー、エンツォ・マーリと契約を結び、その「HIDA」シリーズは二〇〇五年のミラノ・トリエンナーレで展示された。キタニは、デンマークのデザイナー、フィン・ユールの椅子を何年も修理し研究したのち、その権利の継承者とライセンスの契約を結び、同社によれば彼のNo.53チェアをつくっている。日本で唯一、彼の家具のライセンス生産を許された会社と紹介される。同時に、メーカーは輸入広葉樹への依存を減らそうとしてきた。飛騨産業の圧縮スギの家具は、日本で最も豊かな人工林の針葉樹を使う。その「森のことば」シリーズは、工場がかつて切り捨てた節をあえて見せる。そして飛騨市の森の小ロットの広葉樹は、限定の製品に使われはじめている。",
            zh:"自 1980 年代起，飛驒廠商愈來愈常與外部設計師合作。柏木工於 1984 年展開設計師合作；2003 年，飛驒產業與義大利設計師 Enzo Mari 簽約，其「HIDA」系列於 2005 年米蘭三年展展出；Kitani 在多年修復與研究丹麥設計師 Finn Juhl 的椅子之後，與其作品權利的繼承人簽訂授權合約，據該公司表示生產其 No.53 椅，並被介紹為日本唯一獲准授權生產其家具的公司。與此同時，廠商也努力降低對進口闊葉材的依賴。飛驒產業的壓縮柳杉家具，使用日本最豐富的人工林針葉樹；其「森之語」系列刻意展現工廠過去會切除的節疤；飛驒市森林的小批量闊葉材，也開始用於限量產品。" } },
        { t:"chips",
          items:[
            { text:{ en:"1966 — “Montblanc” chair No. 725", ja:"一九六六年——「モンブラン」No.725", zh:"1966——「Montblanc」No.725 椅" } },
            { text:{
                en:"1984 — No. 725: Good Design Long Life award",
                ja:"一九八四年——No.725にロングライフデザイン賞",
                zh:"1984——No.725 獲長銷設計獎" } },
            { text:{ en:"2005 — Enzo Mari's HIDA series, Milan", ja:"二〇〇五年——マーリのHIDA、ミラノ", zh:"2005——Mari 的 HIDA 系列，米蘭" } },
            { text:{
                en:"2015 — Kashiwa CHIC chair with 3D-curved back",
                ja:"二〇一五年——柏木工のCHICチェア（三次元曲面の背）",
                zh:"2015——柏木工 CHIC 椅（三維曲面椅背）" } },
            { text:{ en:"2020 — Hida Sangyō's centenary", ja:"二〇二〇年——飛騨産業の創業百年", zh:"2020——飛驒產業創業百年" } },
            { text:{
                en:"2023 — Kashiwa's 80th year; Hida Sangyō's geothermal-drying factory",
                ja:"二〇二三年——柏木工八十年、飛騨産業の地熱乾燥の工場",
                zh:"2023——柏木工八十週年；飛驒產業地熱乾燥工廠" } }
          ] }
      ] },
    { t:"section",
      id:"numbers",
      title:{ en:"The industry in numbers", ja:"数字で見る産地", zh:"數字中的產地" },
      jp:"生産額と従業員",
      body:[
        { t:"p",
          text:{
            en:"The federation's own figures give the outline of the industry's rise and contraction. In 1950, when the makers first formed a Takayama woodworking association, the region's furniture production was worth about ¥200 million a year. By 1979 shipments from Takayama alone were estimated at more than ¥20 billion. The peak came in 1991, the last year of the bubble economy, when the federation's members produced ¥38.45 billion of furniture and employed 2,812 people. In 2018 the federation had 22 member companies, producing ¥12.64 billion with 1,318 employees — about a third of the peak value and less than half of the peak workforce. Hida has shared the fate of Japan's other furniture regions, which have all lost output since the early 1990s as the home market stopped growing and imports rose.",
            ja:"連合会自身の数字が、この産業の伸びと縮みの輪郭を示している。一九五〇年、つくり手たちがはじめて高山の木工の協会をつくったとき、この地方の家具の生産額は年に約二億円だった。一九七九年には、高山の出荷額だけで二百億円を超えると推定された。頂点はバブル経済の最後の年、一九九一年に来た。この年、連合会の会員は三百八十四億五千万円の家具をつくり、二千八百十二人を雇っていた。二〇一八年には会員二十二社、生産額百二十六億四千四百万円、従業員千三百十八人となった。金額で頂点の約三分の一、人数で半分に満たない。飛騨は日本のほかの家具産地と同じ道をたどったのであり、どの産地も一九九〇年代の初めから、国内市場の伸びが止まり輸入が増えるなかで生産を減らしてきた。",
            zh:"聯合會自身的數字，勾勒出這個產業的興衰輪廓。1950 年，廠商首度組成高山木工協會時，當地家具年產值約 2 億日圓。到了 1979 年，光是高山的出貨額就估計超過 200 億日圓。高峰出現在泡沫經濟的最後一年 1991 年：聯合會會員生產了 384.5 億日圓的家具，雇用 2,812 人。2018 年，聯合會有 22 家會員企業，產值 126.44 億日圓、員工 1,318 人——金額約為高峰的三分之一，人數不到一半。飛驒與日本其他家具產地命運相同：自 1990 年代初起，國內市場停止成長、進口增加，各產地的產量都在下滑。" } },
        { t:"figure",
          caption:{
            en:"Furniture production of the Hida makers, selected years. The bases differ: 1950 is the region's annual production, 1979 an estimate of Takayama's shipments (“more than”), 1991 and 2018 the total production of the federation's members. Source: Hida Woodworking Cooperative Federation, history of Hida furniture (Hida no Takumi Gakkai archive).",
            ja:"飛騨の家具メーカーの生産額（抜粋した年）。基準は同じではない。一九五〇年は地域の年間生産額、一九七九年は高山の出荷額の推定（「を超える」）、一九九一年と二〇一八年は連合会の会員の総生産額である。出典：協同組合飛騨木工連合会「飛騨の家具の歴史」（飛騨の匠学会アーカイブ）。",
            zh:"飛驒家具廠商產值（擇年）。各年統計基準不同：1950 年為地區年產值，1979 年為高山出貨額估計值（「超過」），1991 年與 2018 年為聯合會會員總產值。資料來源：協同組合飛驒木工聯合會〈飛驒家具的歷史〉（飛驒之匠學會資料庫）。" },
          svg:function(lang, L){
            var en = lang==="en";
            return GIFU.fig.cols(lang, L, {
              title:{ en:"Hida furniture production", ja:"飛騨の家具の生産額", zh:"飛驒家具產值" },
              unit:{ en:"¥ billion", ja:"億円", zh:"億日圓" },
              dec: en ? 1 : 0, h:180,
              items:[
                { x:"1950", v: en ? 0.2 : 2 },
                { x:"1979", v: en ? 20 : 200, lab:{ en:"> 20", ja:"200超", zh:"> 200" } },
                { x:"1991", v: en ? 38.45 : 384.5, lab:{ en:"38.5", ja:"384.5", zh:"384.5" } },
                { x:"2018", v: en ? 12.64 : 126.4, lab:{ en:"12.6", ja:"126.4", zh:"126.4" } }
              ], hl:["1991"],
              note:{ en:"Employees: 2,812 in 1991; 1,318 in 2018.", ja:"従業員：一九九一年 2,812人、二〇一八年 1,318人。", zh:"員工：1991 年 2,812 人；2018 年 1,318 人。" } }); } },
        { t:"p",
          text:{
            en:"The industry is a handful of medium-sized companies surrounded by small ones. Hida Sangyō, the largest, had 439 employees in January 2026 — a figure that includes its forestry, sawmilling and power-generation businesses — and runs four factories in Takayama and one in Mikasa, Hokkaido. Kashiwa Mokkō had 284 in January 2024, of whom 180 worked on furniture and 104 on building materials such as interior doors and storage units. Shirakawa reports about 120 staff, and Nissin Mokkō 100 including part-timers (April 2026). Most other members employ a few dozen people or fewer, and several are suppliers rather than furniture makers: a builder of sawmill machinery, a tool shop, a maker of bent plywood. Within Gifu's wider furniture industry, Hida's strength is <em>ashimono</em> — chairs and tables — the category in which the prefecture ranks second in Japan (see <a href=\"industry.html\">Wood in Numbers</a>).",
            ja:"この産業は、ひと握りの中規模の会社とそれを囲む小さな会社からなる。最大の飛騨産業は二〇二六年一月に従業員四百三十九人——林業、製材、発電の事業を含む数字である——で、高山に四つ、北海道三笠市に一つの工場をもつ。柏木工は二〇二四年一月に二百八十四人で、うち百八十人が家具、百四人が室内ドアや収納などの建材に携わっていた。シラカワは約百二十人、日進木工はパートを含めて百人（二〇二六年四月）である。ほかの会員の多くは数十人以下で、いくつかは家具メーカーではなく、製材機械の製作所、刃物の店、曲げ合板の会社といった供給者である。岐阜県の家具産業のなかで飛騨の強みは脚物——椅子と机——であり、県はこの品目で全国二位にある（<a href=\"industry.html\">木の数字</a>を参照）。",
            zh:"這個產業由少數幾家中型企業，以及環繞其周的小公司構成。最大的飛驒產業在 2026 年 1 月有員工 439 人——此數字包含其林業、製材與發電事業——在高山有四座工廠、北海道三笠市一座。柏木工在 2024 年 1 月有 284 人，其中 180 人從事家具、104 人從事室內門與收納等建材。Shirakawa 約有 120 名員工，日進木工含兼職人員為 100 人（2026 年 4 月）。其他會員多為數十人以下，且有幾家並非家具廠，而是供應商：製材機械製造廠、刀具店、彎曲合板公司等。在岐阜縣整體家具產業中，飛驒的強項是「腳物」——椅子與桌子——岐阜縣在此品項全國排名第二（見<a href=\"industry.html\">木材的數字</a>）。" } },
        { t:"tiny",
          text:{
            en:"Sources: Hida Woodworking Cooperative Federation, history of Hida furniture; company profiles of Hida Sangyō (January 2026), Kashiwa Mokkō (January 2024) and Nissin Mokkō (April 2026); JETRO Gifu, company profile of Shirakawa.",
            ja:"出典：協同組合飛騨木工連合会「飛騨の家具の歴史」、飛騨産業（二〇二六年一月）、柏木工（二〇二四年一月）、日進木工（二〇二六年四月）の会社概要、ジェトロ岐阜のシラカワの企業紹介。",
            zh:"資料來源：協同組合飛驒木工聯合會〈飛驒家具的歷史〉；飛驒產業（2026 年 1 月）、柏木工（2024 年 1 月）、日進木工（2026 年 4 月）公司概要；JETRO 岐阜 Shirakawa 企業介紹。" } }
      ] },
    { t:"section",
      id:"timber",
      title:{ en:"Whose trees?", ja:"誰の木でつくるか", zh:"用誰的樹" },
      jp:"輸入材と国産広葉樹",
      body:[
        { t:"p",
          text:{
            en:"Hida's furniture industry was founded on a local resource, the beech of the surrounding mountains, but within a few decades it had outgrown it. As the accessible beech and oak of Hida were cut, the makers bought further afield: Kashiwa Mokkō opened an office in north-eastern Japan in 1967 to buy timber, and in 1985 began importing wood from America. Today the typical Hida chair is made in Hida from trees that grew somewhere else. Hida Sangyō describes its white oak as mainly North American, from trees about a hundred years old; its red oak and walnut are North American too, and its beech is mainly European. Kashiwa's oak and walnut are North American. A FY2022 survey by the prefecture's industrial promotion centre put Japan's self-sufficiency in broadleaf timber at only about 15 per cent, and found that more than 80 per cent of the processed broadleaf boards in use were imported.",
            ja:"飛騨の家具産業は地元の資源、まわりの山のブナの上に築かれたが、数十年のうちにそれを使いきるほどに育った。手の届く飛騨のブナやナラが伐られるにつれ、つくり手はもっと遠くから材を買うようになった。柏木工は一九六七年に木材を買うための東北の拠点を開き、一九八五年にはアメリカから木材を輸入しはじめた。いまの典型的な飛騨の椅子は、よそで育った木で飛騨でつくられている。飛騨産業によれば、そのホワイトオークは主に北米産で、樹齢百年前後の木である。レッドオークとウォルナットも北米産、ブナ（ビーチ）は主に欧州産である。柏木工のオークとウォルナットも北米産である。県の産業経済振興センターの二〇二二年度の調査は、日本の広葉樹材の自給率をわずか約十五パーセントとし、使われる広葉樹の加工板の八割以上が輸入であるとした。",
            zh:"飛驒家具產業建立在在地資源——周圍山區的山毛櫸——之上，但數十年間便超出了這份資源所能供應的規模。隨著飛驒容易取得的山毛櫸與水楢被伐盡，廠商開始到更遠處買材：柏木工於 1967 年在日本東北設立採購木材的據點，1985 年起從美國進口木材。如今典型的飛驒椅，是在飛驒用別處長成的樹做成的。據飛驒產業說明，其白橡木主要產自北美、樹齡約百年；紅橡木與胡桃木也來自北美，山毛櫸則主要產自歐洲。柏木工的橡木與胡桃木同樣來自北美。岐阜縣產業經濟振興中心 2022 年度的調查指出，日本闊葉材自給率僅約 15%，所用闊葉材加工板八成以上依賴進口。" } },
        { t:"p",
          text:{
            en:"The reason is not a shortage of trees. Gifu has more natural broadleaf woodland than plantation, and in Hida city it covers about two-thirds of the forest. But these are mixed stands of many species and small diameters, costly to harvest, sort and dry, and most of Japan's broadleaf logs end up as chips. The turn back to Japanese wood has therefore come in steps. Hida Sangyō tried plantation larch in its Frontier series of 1979 and, from 2001, sugi hardened by compression (see <a href=\"bentwood.html\">Bentwood</a>); in 2007 it received a letter of thanks from the Minister of Agriculture, Forestry and Fisheries for its use of domestic timber, and in 2012 it bought the Kamitakara sawmill of the Hida Takayama forest cooperative so as to process local logs itself. Its domestic oak range uses mizunara and konara. Nissin Mokkō set up a barrel division in 2022 and in 2023 launched HIDA BARREL, casks for whisky made of Japanese oak. Hida city has pursued a “broadleaf town” policy since FY2015, and Hidakuma, the company it co-founded, supplies small-diameter local hardwood to designers and makers (see <a href=\"broadleaf.html\">The Broadleaf Forests</a>). None of this has displaced imported oak and walnut from the mainstream of production, but it has given each maker ranges that can be traced to Japanese — and sometimes Hida — forests.",
            ja:"理由は木が足りないことではない。岐阜県には人工林より多くの天然の広葉樹林があり、飛騨市では森の約三分の二を占める。だがそれは多くの樹種がまじり径の小さな林で、伐り出し、仕分け、乾かすのに費用がかかり、日本の広葉樹の丸太の多くはチップになる。だから国産材への回帰は一歩ずつ進んできた。飛騨産業は一九七九年の「フロンティア」シリーズで人工林のカラマツを試み、二〇〇一年からは圧縮で硬くしたスギを使っている（<a href=\"bentwood.html\">曲木</a>を参照）。二〇〇七年には国産材の活用について農林水産大臣から感謝状を受け、二〇一二年には地元の丸太を自ら挽くため、飛騨高山森林組合の上宝の製材所を譲り受けた。国産のナラのシリーズにはミズナラとコナラを使う。日進木工は二〇二二年にバレル事業部をつくり、二〇二三年に国産のオークによるウイスキーの樽「HIDA BARREL」を製品にした。飛騨市は二〇一五年度から「広葉樹のまちづくり」を進め、市が共同で設立した飛騨の森でクマは踊る（ヒダクマ）は、小径の地元の広葉樹をデザイナーやつくり手に届けている（<a href=\"broadleaf.html\">広葉樹の森</a>を参照）。どれもまだ、生産の主流から輸入のオークやウォルナットを追い出してはいない。だがそれぞれのメーカーに、日本の——ときには飛騨の——森までたどれる製品の系列をもたらした。",
            zh:"原因並非缺樹。岐阜縣的天然闊葉林面積多於人工林，在飛驒市更約占森林的三分之二。但這些是多樹種混生、徑級小的林分，伐採、分選與乾燥成本都高，日本的闊葉樹原木多半被打成木片。因此回歸國產材的步伐是一步一步來的。飛驒產業在 1979 年的「Frontier」系列試用人工林落葉松，2001 年起使用以壓縮硬化的柳杉（見<a href=\"bentwood.html\">曲木</a>）；2007 年因使用國產材獲農林水產大臣頒發感謝狀，2012 年承接飛驒高山森林組合的上寶製材廠，以便自行加工在地原木。其國產橡木系列使用水楢與枹櫟。日進木工於 2022 年成立酒桶事業部，2023 年推出以日本橡木製作的威士忌酒桶「HIDA BARREL」。飛驒市自 2015 年度起推動「闊葉樹城鎮」政策，市府共同出資成立的 Hidakuma（飛驒之森熊在跳舞）則把小徑在地闊葉材供應給設計師與工匠（見<a href=\"broadleaf.html\">闊葉樹之森</a>）。這些努力都還沒有把進口橡木與胡桃木擠出生產主流，卻讓各廠商擁有可追溯到日本——有時是飛驒——森林的產品系列。" } },
        { t:"tiny",
          text:{
            en:"Sources: Kashiwa Mokkō, company history; Hida Sangyō, wood species pages and company history; Nissin Mokkō, company history; Gifu Industrial Economy Promotion Center, local industry survey “Woodworking” (FY2022); Forestry Agency Kinki-Chūgoku office, report on Hida city's broadleaf policy.",
            ja:"出典：柏木工「沿革」、飛騨産業「材種について」と「沿革」、日進木工「沿革」、岐阜県産業経済振興センター 地場産業調査「木工」（令和4年度＝二〇二二年度）、林野庁近畿中国森林管理局 飛騨市の広葉樹の取り組みの報告。",
            zh:"資料來源：柏木工〈沿革〉；飛驒產業〈材種說明〉與〈沿革〉；日進木工〈沿革〉；岐阜縣產業經濟振興中心地場產業調查〈木工〉（2022 年度）；林野廳近畿中國森林管理局關於飛驒市闊葉樹政策的報告。" } }
      ] },
    { t:"section",
      id:"factory",
      title:{ en:"Machine and hand", ja:"機械と手", zh:"機械與手工" },
      jp:"工場の仕事",
      body:[
        { t:"p",
          text:{
            en:"A Hida factory today is a mix of computer-controlled machining and handwork. Rough cutting, shaping and the cutting of joints are done on machines — NC routers, copying lathes, tenoners — that repeat a part to a fraction of a millimetre; choosing boards, matching grain and colour across a set of chairs, sanding, assembly, finishing and inspection remain largely in human hands. Shirakawa, for example, describes eight stages, from drying and grading the timber through bending, the making of jigs, assembly, finishing, cutting and upholstery to final inspection and packing, and holds ISO 9001 certification for its quality management. The makers have also reorganised how they produce. Kashiwa Mokkō developed what it called an “Easy Order System” in 1982, and in 1987, the year after it gave up exporting, began introducing the Toyota Production System with the consultant Yamada Hitoshi — a method designed to make in small lots to order rather than in long runs to stock. In 2024 the company received a product-safety award from the Ministry of Economy, Trade and Industry for its in-house quality standards and its own joinery methods.",
            ja:"いまの飛騨の工場は、コンピュータ制御の加工と手仕事の組み合わせである。荒木取り、成形、仕口の加工は機械——NCルーター、倣い旋盤、ほぞ取り盤——が受けもち、部材をミリ以下の精度でくりかえしつくる。板を選び、一揃いの椅子の木目と色を合わせ、研磨し、組み立て、塗装し、検品するのは、いまも大部分が人の手である。たとえばシラカワは、材の乾燥と選別から、曲げ、治具づくり、組立、塗装、裁断と張り、最後の検品と梱包までの八つの工程をあげ、品質管理でISO 9001の認証を得ている。つくり手は生産の組み立て方も変えてきた。柏木工は一九八二年に「イージーオーダーシステム」と名づけた仕組みを開発し、輸出をやめた翌年の一九八七年には、コンサルタントの山田日登志とともにトヨタ生産方式の導入を始めた。長い流れで在庫のためにつくるのではなく、注文に応じて小さなロットでつくるための方法である。二〇二四年、同社は社内の品質基準と独自の接合の方法によって、経済産業省の製品安全の表彰を受けた。",
            zh:"今天的飛驒工廠，是電腦數控加工與手工的結合。粗裁、成形與榫接加工由機器——NC 銑床、仿形車床、開榫機——負責，以零點幾公釐的精度重複製作構件；挑選板材、為一整組椅子配對紋理與色澤、研磨、組裝、塗裝與檢驗，至今大多仍靠人手。例如 Shirakawa 列出八道工序：從木材乾燥與分級，經彎曲、治具製作、組裝、塗裝、裁布與包覆，到最後檢驗與包裝，並取得 ISO 9001 品質管理認證。廠商也改變了生產的組織方式。柏木工於 1982 年開發所謂的「簡易訂製系統」（Easy Order System），並在停止外銷的翌年 1987 年，與顧問山田日登志一起導入豐田生產方式——一種不以長時間連續生產備庫存、而是依訂單小批量生產的方法。2024 年，該公司以其內部品質標準與獨自的接合工法，獲經濟產業省頒發產品安全表揚。" } },
        { t:"p",
          text:{
            en:"Beyond the catalogue, much of the region's work is commissioned. Nissin Mokkō lists contract furniture for buildings, made-to-order pieces, joinery and the restoration of cultural properties among its businesses, and two of its craftsmen have been named Contemporary Master Craftsmen (<em>gendai no meikō</em>) by the Minister of Health, Labour and Welfare, in 2015 and 2024. Kitani made furniture for hotels, restaurants and care homes before it turned to Danish licences. Hida Sangyō made the round table at which the leaders of the G7 met at the Ise-Shima summit in 2016. Contract work keeps factories busy between seasons and gives craftsmen pieces that no catalogue could justify.",
            ja:"カタログの外でも、この地方の仕事の多くは注文によるものである。日進木工は、建物のためのコントラクト家具、特注家具、建具、文化財の修復を事業にあげ、二人の職人が二〇一五年と二〇二四年に厚生労働大臣から「現代の名工」に選ばれた。キタニはホテル、飲食店、福祉施設の家具をつくってから、デンマークのライセンスに向かった。飛騨産業は、二〇一六年の伊勢志摩サミットでG7の首脳が囲んだ円卓をつくった。物件の仕事は季節のあいだも工場を動かし、職人に、どんなカタログでも見合わないような一品を与える。",
            zh:"在型錄之外，這個地區的工作有不少是委託訂製。日進木工把建築案場的商業家具、訂製家具、建具（門窗隔扇）與文化財修復列為業務，旗下兩位工匠分別於 2015 年與 2024 年獲厚生勞動大臣選為「現代名工」。Kitani 先是製作飯店、餐廳與照護機構家具，後來才轉向丹麥授權。飛驒產業則製作了 2016 年伊勢志摩高峰會上 G7 領袖圍坐的圓桌。案場工作讓工廠在淡季也能運轉，也讓工匠有機會製作任何型錄都無法支撐的單件作品。" } }
      ] },
    { t:"section",
      id:"market",
      title:{ en:"Competing with the world's factories", ja:"世界の工場と競う", zh:"與世界工廠競爭" },
      jp:"輸入家具と国内市場",
      body:[
        { t:"p",
          text:{
            en:"Hida's makers sell almost entirely at home: the prefectural survey of FY2022 found that about 90 per cent of Hida furniture is sold within Japan. That home market is now shared with factories all over Asia. Japan imported ¥428.7 billion of furniture and furniture parts in 2012 and ¥605.2 billion in 2019. More than half — 53.5 per cent in 2019 — came from China, followed by Vietnam (14.0 per cent), Taiwan (4.6 per cent) and Malaysia (3.9 per cent). For comparison, Japan's entire furniture and fixtures industry, of every material and including shop and kitchen fittings, shipped about ¥1.94 trillion in 2018. Taiwan's place on the list is a reminder that it, too, has a substantial furniture industry, and that the Hida makers registered their regional trademark there in 2009 to keep the name from being used on other people's goods.",
            ja:"飛騨のつくり手は、ほぼすべてを国内で売っている。県の二〇二二年度の調査によれば、飛騨の家具の約九割は国内向けである。その国内市場は、いまアジアじゅうの工場と分けあうものになった。日本は二〇一二年に四千二百八十七億円、二〇一九年に六千五十二億円の家具と家具部品を輸入した。二〇一九年には半分以上——五十三・五パーセント——が中国からで、ベトナム（十四・〇パーセント）、台湾（四・六パーセント）、マレーシア（三・九パーセント）が続く。くらべると、あらゆる材料の家具に店舗や台所の造作も含めた日本の家具・装備品製造業全体の出荷額は、二〇一八年に約一兆九千四百億円だった。台湾がこの一覧に入っていることは、台湾にもかなりの家具産業があること、そして飛騨のつくり手が二〇〇九年にそこで地域団体商標を登録し、名が他人の品に使われないようにしたことを思い出させる。",
            zh:"飛驒廠商的產品幾乎全在國內銷售：岐阜縣 2022 年度的調查指出，約九成的飛驒家具銷往日本國內。如今這個國內市場要與亞洲各地的工廠分享。日本在 2012 年進口了 4,287 億日圓的家具與家具零件，2019 年達 6,052 億日圓。2019 年有過半——53.5%——來自中國，其次是越南（14.0%）、台灣（4.6%）與馬來西亞（3.9%）。作為比較，日本整個家具及裝備品製造業——涵蓋各種材料，並包括店鋪與廚房裝修——2018 年出貨額約 1 兆 9,430 億日圓。台灣名列其中，提醒我們台灣也擁有可觀的家具產業，也說明了為何飛驒廠商在 2009 年於台灣註冊地域團體商標，以免名號被用在別人的商品上。" } },
        { t:"table",
          caption:{
            en:"Japan's furniture imports, 2012–2019 (furniture and parts, all materials)",
            ja:"日本の家具輸入額（二〇一二〜二〇一九年、家具と部品、全材料）",
            zh:"日本家具進口額（2012–2019 年，家具及零件，各類材料）" },
          cols:[{ en:"Year", ja:"年", zh:"年" }, { en:"Imports (¥100 million)", ja:"輸入額（億円）", zh:"進口額（億日圓）" }],
          numCols:[1],
          rows:[
            ["2012", "4,287"],
            ["2013", "5,189"],
            ["2014", "5,773"],
            ["2015", "6,129"],
            ["2016", "5,611"],
            ["2017", "5,904"],
            ["2018", "6,079"],
            ["2019", "6,052"]
          ] },
        { t:"p",
          text:{
            en:"The Hida makers cannot compete on price with factories in China or Vietnam, and do not try. Their answer has been to offer what imports find hard to match: a regional name protected by trademark; solid wood and joints designed to be repaired rather than replaced; a ten-year warranty on wooden parts; and showrooms in Japan's cities — Hida Sangyō lists nine, Kashiwa six — where a customer can sit on a chair before ordering it in a chosen wood, finish and fabric. Design matters as much: the long-selling classics and the collaborations described above give the region an identity that a price list cannot. The annual Hida Furniture Festival and the factory tours offered by several makers bring buyers to the source; practical advice is on <a href=\"buying.html\">Buying Wooden Things</a> and <a href=\"visiting.html\">Visiting Gifu</a>.",
            ja:"飛騨のつくり手は、価格では中国やベトナムの工場と競えないし、競おうともしていない。その答えは、輸入品がたやすく真似できないものを差し出すことだった。商標で守られた産地の名。取り替えるのではなく直すために考えられた無垢の木と仕口。木部の十年保証。そして日本の都市のショールーム——飛騨産業は九か所、柏木工は六か所をあげる——で、客は椅子に座ってみてから、樹種、塗装、張り地を選んで注文できる。デザインも同じくらい大事である。先に述べたロングセラーの名作と協働は、値札ではつくれない産地の個性を与えている。毎年の飛騨の家具フェスティバルと、いくつかのメーカーの工場見学は、買い手を産地へ連れてくる。実際の手引きは<a href=\"buying.html\">木の物を選ぶ</a>と<a href=\"visiting.html\">岐阜を訪ねる</a>にある。",
            zh:"飛驒廠商無法在價格上與中國或越南的工廠競爭，也不打算這麼做。他們的回應，是提供進口品難以比擬的東西：受商標保護的產地名號；為了修理而非汰換而設計的實木與榫接；木質部分十年保固；以及設在日本各大城市的展示間——飛驒產業有九處、柏木工有六處——顧客可以先坐坐看，再指定樹種、塗裝與布料下訂。設計同樣重要：前述的長銷經典與各項合作，賦予產地一種價目表無法造就的個性。每年的飛驒家具節與幾家廠商提供的工廠參觀，把買家帶到產地；實用指南見<a href=\"buying.html\">挑選木製品</a>與<a href=\"visiting.html\">造訪岐阜</a>。" } },
        { t:"tiny",
          text:{
            en:"Sources: Ōkawa Interior Promotion Centre, interior industry statistics (FY2019 edition), citing the Japan Furniture Industry Promotion Association and trade statistics; Gifu Industrial Economy Promotion Center, “Woodworking” (FY2022); Kashiwa Mokkō and Hida Sangyō company pages; Nissin Mokkō and Kitani company histories.",
            ja:"出典：大川インテリア振興センター「インテリア産業関係統計資料」（令和元年版）、日本家具産業振興会と貿易統計による。岐阜県産業経済振興センター「木工」（令和4年度＝二〇二二年度）、柏木工と飛騨産業の会社の頁、日進木工とキタニの沿革。",
            zh:"資料來源：大川室內裝潢振興中心《室內產業相關統計資料》（2019 年版），引用日本家具產業振興會及貿易統計；岐阜縣產業經濟振興中心〈木工〉（2022 年度）；柏木工與飛驒產業公司網頁；日進木工與 Kitani 沿革。" } }
      ] },
    { t:"related",
      items:[
        { href:"bentwood.html", why:{ en:"How beech is bent.", ja:"ブナはどう曲げられるか。", zh:"山毛櫸如何彎曲。" } },
        { href:"chairs.html", why:{ en:"The chairs that made Hida's name.", ja:"飛騨の名を高めた椅子。", zh:"讓飛驒成名的椅子。" } },
        { href:"houses.html", why:{ en:"Independent makers and studios.", ja:"独立したつくり手と工房。", zh:"獨立工匠與工作室。" } },
        { href:"makers.html", why:{ en:"Where to find them.", ja:"どこで出会えるか。", zh:"在哪裡找到他們。" } }
      ] }
  ] };

/* ---- ------------------------------------------ bentwood */
GIFU.pages["bentwood"] = { kicker:{ en:"Wood Craft · 02", ja:"木の工芸 · 02", zh:"木作工藝 · 02" },
  title:{ en:"Bentwood", ja:"曲木", zh:"曲木" },
  jp:"蒸して曲げる · トーネットから飛騨へ",
  lede:{
    en:"A beech chair leg that sweeps into a seat rail in a single unbroken curve is one of the small miracles of woodworking. Solid wood, which snaps if bent cold, can be steamed until it softens and then forced around a form into shapes that no amount of sawing could produce, keeping its strength because the grain follows the curve. The method was industrialised in nineteenth-century Vienna by Michael Thonet and brought to Takayama in 1920, where it founded the Hida furniture industry. This page explains why wood bends, how it is done, and how bentwood shaped Hida.",
    ja:"ブナの椅子の脚が一本の途切れない曲線で座枠へと流れこむのは、木工の小さな奇跡の一つである。冷たいまま曲げれば折れる無垢の木も、やわらかくなるまで蒸して型のまわりに曲げれば、どれほど鋸で挽いてもつくれない形になり、木目が曲線に沿うので強さを保つ。この方法は十九世紀のウィーンでミヒャエル・トーネットが工業にし、一九二〇年に高山に伝わって、飛騨の家具産業の礎となった。この頁は、木がなぜ曲がるのか、どう曲げるのか、そして曲木がいかに飛騨を形づくったかを説明する。",
    zh:"一根山毛櫸椅腳以一道不間斷的曲線順勢延伸成座框，是木工中的小奇蹟之一。實木冷彎即斷，但經蒸煮軟化後，便能強行繞著模具彎成任何鋸切都做不出的形狀，而且因紋理順著曲線走，依然保有強度。這種方法在十九世紀的維也納由 Michael Thonet 工業化，1920 年傳入高山，奠定了飛驒家具產業的基礎。本頁說明木材為何能彎、如何彎曲，以及曲木如何塑造了飛驒。" },
  body:[
    { t:"section",
      id:"physics",
      title:{ en:"Why wood bends", ja:"木はなぜ曲がるか", zh:"木材為何能彎" },
      jp:"圧縮と引張",
      body:[
        { t:"p",
          text:{
            en:"When a board is bent, its outer face is stretched and its inner face compressed. Wood can hardly stretch — about one per cent along the grain before it breaks — but hot, wet wood can be compressed along the grain by twenty per cent or more, because heat and moisture soften the lignin that binds the cell walls, allowing them to fold like a concertina. The breakthrough of industrial bentwood was the steel strap: a thin band clamped along the outer face with end-stops, so that the outer fibres cannot stretch at all. The neutral axis moves to the outside of the bend, and the whole thickness of the piece is compressed. With a strap, beech can be bent to a radius only a few times its thickness; without one, it breaks at radii many times larger.",
            ja:"板を曲げると、外側の面は引き伸ばされ、内側の面は押し縮められる。木はほとんど伸びない——繊維方向に一パーセントほどで折れる——が、熱く湿った木は繊維方向に二十パーセント以上も縮められる。熱と水分が細胞壁をつなぐリグニンをやわらかくし、壁が蛇腹のように折りたためるようになるからである。工業の曲木の突破口は鋼の帯金だった。端に止めをつけた薄い帯を外側の面に沿って締め、外側の繊維がまったく伸びないようにする。中立軸は曲げの外側へ移り、材の厚み全体が圧縮される。帯金があれば、ブナは厚さのわずか数倍の半径まで曲げられる。なければ、その何倍も大きな半径で折れる。",
            zh:"木板彎曲時，外側面受拉伸，內側面受壓縮。木材幾乎無法拉伸——順紋方向約伸長百分之一就會斷裂——但高溫潮濕的木材順紋方向可被壓縮兩成以上，因為熱與水分會軟化黏結細胞壁的木質素，讓細胞壁能像手風琴般折疊。工業化曲木的突破在於鋼帶：把一條兩端有擋塊的薄鋼帶夾緊在外側面，使外側纖維完全無法伸長。中性軸因而移到彎曲的外側，整個斷面都處於受壓狀態。有了鋼帶，山毛櫸可彎到半徑僅為厚度數倍的程度；沒有鋼帶，則在大上許多倍的半徑時就會斷裂。" } },
        { t:"figure",
          caption:{
            en:"Bending with and without a strap, schematic. Unsupported, the outer fibres stretch and fail in tension. With a steel strap anchored at both ends, the outer face cannot lengthen, so the entire section compresses — the principle of Thonet's method.",
            ja:"帯金があるときとないときの曲げ（模式図）。支えがなければ外側の繊維は伸びて引張で壊れる。両端を留めた鋼の帯金があれば外側の面は伸びられず、断面全体が圧縮される——トーネットの方法の原理である。",
            zh:"有無鋼帶的彎曲比較（示意）。無支撐時，外側纖維受拉而斷裂。以兩端固定的鋼帶支撐時，外側面無法伸長，整個斷面因而受壓——這正是 Thonet 方法的原理。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 270" role="img">';
            s += F.text(20, 28, lang==="en"?"WHERE THE NEUTRAL AXIS GOES":(lang==="ja"?"中立軸はどこへ行くか":"中性軸的位置"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            function arc(cx, cy, r){ return 'M'+(cx-r)+' '+cy+' A'+r+' '+r+' 0 0 1 '+(cx+r)+' '+cy; }
            // left: unsupported
            s += '<path d="'+arc(190,220,130)+'" fill="none" stroke="#7C6B52" stroke-width="1.5"/>';
            s += '<path d="'+arc(190,220,100)+'" fill="none" stroke="#7C6B52" stroke-width="1.5"/>';
            s += '<path d="'+arc(190,220,115)+'" fill="none" stroke="#8B857C" stroke-dasharray="5 4"/>';
            s += '<path d="M104 124 l6 -8 l4 9 l5 -9" fill="none" stroke="#55504A" stroke-width="1.4"/>';
            s += F.text(190, 250, lang==="en"?"Unsupported: outside stretches and cracks":(lang==="ja"?"支えなし：外側が伸びて割れる":"無支撐：外側拉伸而開裂"), { size:10.5, fill:"#201E1B", anchor:"middle" });
            s += F.text(260, 90, lang==="en"?"neutral axis (middle)":(lang==="ja"?"中立軸（中央）":"中性軸（中央）"), { size:9.5, fill:"#55504A" });
            // right: strapped
            s += '<path d="'+arc(560,220,132)+'" fill="none" stroke="#55504A" stroke-width="3.5"/>';
            s += '<path d="'+arc(560,220,128)+'" fill="none" stroke="#7C6B52" stroke-width="1.5"/>';
            s += '<path d="'+arc(560,220,98)+'" fill="none" stroke="#7C6B52" stroke-width="1.5"/>';
            s += '<path d="'+arc(560,220,126)+'" fill="none" stroke="#8B857C" stroke-dasharray="5 4"/>';
            s += '<rect x="420" y="214" width="14" height="14" fill="#E6E4E0" stroke="#55504A"/><rect x="686" y="214" width="14" height="14" fill="#E6E4E0" stroke="#55504A"/>';
            s += F.text(560, 250, lang==="en"?"With strap: whole section compresses":(lang==="ja"?"帯金あり：断面全体が縮む":"有鋼帶：整個斷面受壓"), { size:10.5, fill:"#201E1B", anchor:"middle" });
            s += F.text(612, 72, lang==="en"?"steel strap":(lang==="ja"?"鋼の帯金":"鋼帶"), { size:9.5, fill:"#55504A" });
            s += F.text(612, 86, lang==="en"?"neutral axis moves outward":(lang==="ja"?"中立軸は外側へ":"中性軸外移"), { size:9.5, fill:"#55504A" });
            return s + '</svg>';
          } },
        { t:"p",
          text:{
            en:"Beech is the classic bending wood because it combines a fine, even, diffuse-porous structure with straight grain and exceptional compressibility when hot. Ash, elm, oak and mizunara also bend well; most conifers, with their contrast between soft earlywood and hard latewood, bend poorly. Moisture content matters: wood that is too dry is brittle even when steamed, and wood that is too wet can be crushed by the water trapped in its cells, so bending stock is usually air-dried to a moderate moisture content first.",
            ja:"ブナが曲木の定番の木であるのは、細かく均質な散孔材の構造に、通直な木目と、熱いときの並外れた縮みやすさをあわせもつからである。タモ、ニレ、ナラ、ミズナラもよく曲がる。やわらかな早材と硬い晩材の対比をもつ針葉樹の多くは、うまく曲がらない。含水率も大事である。乾きすぎた木は蒸しても脆く、湿りすぎた木は細胞に閉じこめられた水でつぶれうる。だから曲木の材は、ふつう先にほどよい含水率まで天然で乾かす。",
            zh:"山毛櫸是經典的曲木用材，因為它兼具細緻均勻的散孔材構造、通直紋理，以及受熱時非凡的可壓縮性。梣木、榆木、橡木與水楢也很好彎；多數針葉樹早材軟、晚材硬，反差大，很難彎曲。含水率也很重要：太乾的木材即使蒸煮也很脆，太濕的木材則可能被困在細胞中的水壓潰，因此曲木用材通常先自然乾燥到適中的含水率。" } }
      ] },
    { t:"section",
      id:"process",
      title:{ en:"The process", ja:"工程", zh:"工序" },
      jp:"蒸煮・曲げ・固定",
      body:[
        { t:"figure",
          caption:{
            en:"The steps of solid-wood bending as practised in Hida's factories, simplified. Times vary with thickness: a common rule of thumb is about an hour of steaming per inch of thickness.",
            ja:"飛騨の工場で行われる無垢材の曲げの工程（簡略）。時間は厚さで変わる。よく言われる目安は、厚さ一インチにつき一時間ほどの蒸煮である。",
            zh:"飛驒工廠實木彎曲工序（簡化）。時間隨厚度而異：常見經驗法則是每一英寸厚度蒸煮約一小時。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Steam, bend, set", ja:"蒸す・曲げる・固める", zh:"蒸、彎、定型" }, per:3, bh:100,
            steps:[
              { t:{ en:"Select", ja:"選材", zh:"選材" }, d:{ en:"Straight-grained, knot-free beech, air-dried to moderate moisture.", ja:"通直で節のないブナを、ほどよい含水率まで天然乾燥。", zh:"紋理通直、無節的山毛櫸，自然乾燥至適中含水率。" } },
              { t:{ en:"Shape the blank", ja:"荒木取り", zh:"粗坯成形" }, d:{ en:"Sawn or turned to near-final section before bending.", ja:"曲げる前に仕上がりに近い断面に挽くか旋削する。", zh:"彎曲前先鋸切或車削至接近成品的斷面。" } },
              { t:{ en:"Steam", ja:"蒸煮", zh:"蒸煮" }, d:{ en:"In a steam chamber near 100 °C until softened through.", ja:"百度近い蒸し箱で芯までやわらかくなるまで。", zh:"在接近 100°C 的蒸箱中蒸至完全軟化。" } },
              { t:{ en:"Bend", ja:"曲げ", zh:"彎曲" }, d:{ en:"Quickly, with a steel strap, around a form, before it cools.", ja:"冷める前に、鋼の帯金をあてて型のまわりに素早く。", zh:"趁未冷卻前，以鋼帶襯著繞模具快速彎曲。" } },
              { t:{ en:"Set and dry", ja:"固定・乾燥", zh:"定型乾燥" }, d:{ en:"Clamped on the form in a drying room for hours to days.", ja:"型に留めたまま乾燥室で数時間から数日。", zh:"固定在模具上，於乾燥室放置數小時至數天。" } },
              { t:{ en:"Finish", ja:"仕上げ", zh:"修整" }, d:{ en:"Released, trimmed, sanded and assembled.", ja:"外して、整え、研磨し、組み立てる。", zh:"脫模、修邊、研磨並組裝。" } }
            ] }); } },
        { t:"note",
          label:{ en:"The first failures", ja:"最初の失敗", zh:"最初的失敗" },
          text:{
            en:"The wrinkling and splitting that plagued the first bentwood chairs made in Takayama in 1920–21 are the classic bending defects: wrinkles on the inside of a bend come from compression failure when the wood is too dry or insufficiently steamed; splits on the outside from a loose or badly anchored strap. The Hida makers solved them by trial and error over two years.",
            ja:"一九二〇〜二一年に高山で最初につくられた曲木の椅子を悩ませたしわと割れは、曲げの典型的な欠点である。曲げの内側のしわは、材が乾きすぎていたり蒸しが足りなかったりしたときの圧縮の破壊から、外側の割れは、ゆるいか留めの悪い帯金から来る。飛騨のつくり手は二年のあいだ、試行錯誤でそれを解いた。",
            zh:"困擾 1920–21 年高山首批曲木椅的起皺與開裂，正是典型的彎曲缺陷：彎曲內側起皺，是木材太乾或蒸煮不足時的壓縮破壞；外側開裂，則源於鋼帶鬆動或固定不良。飛驒工匠花了兩年時間反覆試驗才解決。" } }
      ] },
    { t:"section",
      id:"history",
      title:{ en:"From Vienna to Takayama", ja:"ウィーンから高山へ", zh:"從維也納到高山" },
      jp:"トーネット",
      body:[
        { t:"p",
          text:{
            en:"Michael Thonet, a cabinetmaker from Boppard on the Rhine, experimented in the 1830s with bending bundles of thin glued veneers, then moved to Vienna in 1842 and developed the method of bending solid beech with steam and a steel strap. His firm's chair No. 14 of 1859 — six pieces of bent beech, ten screws and two nuts, shipped flat — became one of the best-selling pieces of furniture ever made, produced in the tens of millions. Bentwood reached Japan in the early twentieth century; one of the first Japanese bentwood factories opened in Akita in 1910, and in 1920 the method arrived in Takayama, where the region's beech forests made it a natural fit.",
            ja:"ライン河畔ボッパルトの家具職人ミヒャエル・トーネットは、一八三〇年代に薄い単板を接着した束を曲げる試みをし、一八四二年にウィーンに移って、蒸気と鋼の帯金で無垢のブナを曲げる方法を育てた。その会社の一八五九年の椅子No.14——曲げたブナ六本、ねじ十本、ナット二つ、平たく荷づくりして出荷——は、史上最も売れた家具の一つとなり、何千万脚もつくられた。曲木は二十世紀の初めに日本に届いた。日本で最初期の曲木の工場の一つは一九一〇年に秋田にでき、一九二〇年にこの方法は高山に来た。この地方のブナの森が、それを自然なものにした。",
            zh:"來自萊茵河畔博帕德的家具匠 Michael Thonet，在 1830 年代試驗彎曲膠合的薄單板束，1842 年移居維也納，發展出以蒸汽與鋼帶彎曲實木山毛櫸的方法。其公司 1859 年的 No.14 椅——六根彎曲山毛櫸、十顆螺絲、兩個螺帽，拆平裝運——成為史上最暢銷的家具之一，生產量達數千萬張。曲木在二十世紀初傳入日本；日本最早的曲木工廠之一於 1910 年在秋田開設，1920 年此法傳到高山，當地的山毛櫸林使它在此落地生根。" } },
        { t:"table",
          caption:{ en:"Ways of bending wood in Japanese craft", ja:"日本の工芸の木の曲げ方", zh:"日本工藝中的彎木方式" },
          cols:[{ en:"Method", ja:"方法", zh:"方法" }, { en:"How", ja:"やり方", zh:"做法" }, { en:"Examples", ja:"例", zh:"例子" }],
          rows:[
            [
              { en:"Magemono — bent thin boards", ja:"曲物", zh:"曲物——彎薄板" },
              {
                en:"Thin hinoki or sugi boards soaked in hot water, wrapped round a form and stitched with cherry bark",
                ja:"薄いヒノキやスギの板を湯に浸し、型に巻いて桜の皮で綴じる",
                zh:"將扁柏或柳杉薄板浸熱水，繞模成形後以櫻樹皮縫合" },
              { en:"Round boxes, sieves, lunch boxes; Shunkei bent ware", ja:"丸い箱、篩、弁当箱。春慶の曲物", zh:"圓盒、篩、便當盒；春慶曲物" }
            ],
            [
              { en:"Steam-bent solid wood", ja:"無垢の曲木", zh:"實木蒸彎" },
              {
                en:"Steamed beech or oak bent on forms with a steel strap",
                ja:"蒸したブナやナラを帯金で型に曲げる",
                zh:"蒸煮的山毛櫸或橡木以鋼帶繞模彎曲" },
              { en:"Hida chairs", ja:"飛騨の椅子", zh:"飛驒椅子" }
            ],
            [
              { en:"Laminated bending", ja:"積層曲げ", zh:"層積彎曲" },
              { en:"Thin strips glued and clamped to a curve", ja:"細い板を接着して曲面に締める", zh:"將薄條膠合後夾緊成曲線" },
              { en:"Chair backs, arms, rocking-chair runners", ja:"椅子の背や肘、ロッキングチェアの脚", zh:"椅背、扶手、搖椅底弧" }
            ],
            [
              { en:"Moulded plywood", ja:"成形合板", zh:"成形合板" },
              { en:"Veneers pressed between heated moulds", ja:"単板を熱した型のあいだで圧す", zh:"單板在加熱模具間壓製" },
              {
                en:"Shells, stools; famous Japanese designs of the 1950s",
                ja:"シェル、スツール。一九五〇年代の名高い日本のデザイン",
                zh:"椅殼、凳子；1950 年代著名日本設計" }
            ],
            [
              { en:"Compressed wood", ja:"圧密・圧縮木材", zh:"壓密木材" },
              {
                en:"Softened sugi compressed and shaped in one press",
                ja:"やわらかくしたスギを一つのプレスで圧縮し成形",
                zh:"軟化柳杉在同一壓機中壓縮成形" },
              { en:"Hida Sangyō's sugi chairs", ja:"飛騨産業のスギの椅子", zh:"飛驒產業柳杉椅" }
            ]
          ] }
      ] },
    { t:"section",
      id:"today",
      title:{ en:"Bentwood in Hida today", ja:"いまの飛騨の曲木", zh:"今日飛驒的曲木" },
      jp:"技の継承",
      body:[
        { t:"p",
          text:{
            en:"Steam-bending remains a skilled, partly manual operation even in Hida's larger factories: the steamed blank must be taken from the chamber and bent around the form within seconds, by a team who can feel whether it is yielding or about to fail. The Gifu Wood Craft Art School in Takayama teaches bending in its one-year course, and many small makers in the region use it for chair backs, arms and hoops. The compressed-sugi process developed by Hida Sangyō extends the old bentwood knowledge — the softening of lignin by heat and moisture — to a new material, pressing and bending plantation sugi in a single operation.",
            ja:"蒸し曲げは、飛騨の大きな工場でもなお熟練のいる、一部は手の仕事である。蒸した材は数秒のうちに蒸し箱から取り出して型に曲げねばならず、それが従うのか折れかけているのかを感じとれる組が行う。高山の岐阜県立木工芸術スクールは一年の課程で曲げを教え、この地方の多くの小さなつくり手は、椅子の背、肘、輪にそれを使う。飛騨産業が育てた圧縮スギの方法は、古い曲木の知恵——熱と水分によるリグニンの軟化——を新しい材料に広げ、人工林のスギを一度の工程で圧し、曲げる。",
            zh:"即使在飛驒較大的工廠，蒸彎仍是需要熟練技術、部分仰賴手工的作業：蒸好的坯料必須在數秒內從蒸箱取出、繞模彎曲，由能感覺到木材是在順從還是即將斷裂的團隊執行。高山的岐阜縣立木工藝術學校在一年制課程中教授彎曲技術，區內許多小工匠用它製作椅背、扶手與圓環。飛驒產業開發的壓縮柳杉工法，把古老曲木知識——以熱與水分軟化木質素——延伸到新材料上，一道工序就完成人工林柳杉的壓縮與彎曲。" } },
        { t:"quote",
          text:{
            en:"Beech that was burned for charcoal became chairs that crossed the Pacific.",
            ja:"炭に焼かれていたブナが、太平洋を渡る椅子になった。",
            zh:"曾被燒成木炭的山毛櫸，變成了橫渡太平洋的椅子。" },
          cite:{
            en:"The Hida furniture story in one line (editor's summary)",
            ja:"飛騨の家具の物語をひとことで（編者のまとめ）",
            zh:"一句話說飛驒家具（編者概括）" } }
      ] },
    { t:"section",
      id:"privilege",
      title:{ en:"Thonet's system", ja:"トーネットの仕組み", zh:"Thonet 的體系" },
      jp:"特許と森の工場",
      body:[
        { t:"p",
          text:{
            en:"Thonet's achievement was not just a technique but an industrial system, and it was protected by law. His first Austrian privilege, granted in 1842, covered bending bundles of glued veneers; it lapsed in 1847, and a second privilege of 1852 covered bending wood by cutting it and gluing it together again. In 1853 he signed the business over to his sons as Gebrüder Thonet, and on 10 July 1856 the firm obtained the privilege that mattered: the sole right to make chairs and table legs from bent solid wood. In the same year it acquired land at Koryčany (Koritschan) in Moravia, in the middle of beech forests, and the factory there began work in 1857; the Vienna workshop at that time employed about seventy people.",
            ja:"トーネットがなしとげたのは技だけではなく、工業の仕組みであり、それは法で守られていた。一八四二年に与えられたオーストリアでの最初の特権は、接着した単板の束を曲げることにかかわるもので、一八四七年に切れた。一八五二年の二つ目の特権は、木を切って接着しなおして曲げる方法を対象とした。一八五三年、彼は事業を息子たちに譲り「トーネット兄弟社」とし、一八五六年七月十日、会社は決定的な特権を得た。無垢の木を曲げて椅子と机の脚をつくる独占の権利である。同じ年、会社はブナの森のただなかにあるモラヴィアのコリチャニ（コリチャン）に土地を手に入れ、そこの工場は一八五七年に動きはじめた。そのころウィーンの工房は約七十人を雇っていた。",
            zh:"Thonet 的成就不只是一項技術，而是一套受法律保護的工業體系。他在奧地利取得的第一項特許權授予於 1842 年，涵蓋彎曲膠合單板束的方法，1847 年失效；1852 年的第二項特許權，涵蓋把木材切開再膠合以彎曲的方法。1853 年，他把事業轉給兒子們，成立「Gebrüder Thonet」（Thonet 兄弟公司）；1856 年 7 月 10 日，公司取得真正關鍵的特許權：以彎曲實木製作椅子與桌腳的獨占權利。同年，公司在摩拉維亞山毛櫸林中心的科日恰尼（Koryčany，德語 Koritschan）購地，當地工廠於 1857 年開工；當時維也納工坊約有七十名員工。" } },
        { t:"p",
          text:{
            en:"The forest factory became the model for the whole industry. Logs came in at one end and flat-packed chairs left at the other; much of the work was broken into simple operations that newly trained workers could learn, and the standard parts could be combined into many models. In 1869 the rival firm Jacob &amp; Josef Kohn challenged the 1856 privilege as lacking novelty, and on 10 December that year Thonet gave it up. Dozens of bentwood firms followed, but none seriously threatened Thonet's lead before the First World War; by the firm's own estimate some fifty million chairs of the No. 14 type were sold between 1860 and the war. Takayama's first bentwood company followed the same logic sixty years later: put the factory where the beech grows.",
            ja:"森の工場は産業全体の手本になった。丸太が一方から入り、平たく荷づくりされた椅子が他方から出ていく。仕事の多くは、新しく仕込まれた働き手でも覚えられる単純な工程に分けられ、規格化した部材を組み合わせて多くのモデルをつくれた。一八六九年、競争相手のヤーコプ・ウント・ヨーゼフ・コーン社が、一八五六年の特権には新しさがないと異議を申し立て、その年の十二月十日、トーネットは特権を放棄した。何十もの曲木の会社が続いたが、第一次世界大戦の前にトーネットの優位を本気で脅かしたものはなかった。会社自身の見積もりでは、一八六〇年から大戦までにNo.14型の椅子は約五千万脚売れた。六十年後、高山の最初の曲木の会社も同じ理屈にしたがった。ブナの育つところに工場を置くのである。",
            zh:"這種森林中的工廠，成了整個產業的範本。原木從一端進來，拆平包裝的椅子從另一端出去；許多工作被拆解成新進工人也能學會的簡單工序，標準化的零件可組合成多種款式。1869 年，競爭對手 Jacob &amp; Josef Kohn 公司以缺乏新穎性為由，對 1856 年的特許權提出異議；同年 12 月 10 日，Thonet 放棄了這項特許權。數十家曲木公司隨之而起，但在第一次世界大戰前，沒有一家真正威脅到 Thonet 的領先地位；據公司自己的估計，從 1860 年到大戰期間，No.14 型椅子約賣出五千萬張。六十年後，高山第一家曲木公司也依循同樣的道理：把工廠設在山毛櫸生長的地方。" } },
        { t:"timeline",
          items:[
            { year:"1842",
              title:{ en:"First privilege", ja:"最初の特権", zh:"第一項特許權" },
              text:{
                en:"Bent bundles of glued veneer; Thonet moves to Vienna.",
                ja:"接着した単板の束を曲げる。トーネットはウィーンへ移る。",
                zh:"彎曲膠合單板束；Thonet 移居維也納。" } },
            { year:"1853",
              title:{ en:"Gebrüder Thonet", ja:"トーネット兄弟社", zh:"Thonet 兄弟公司" },
              text:{ en:"The business passes to Thonet's sons.", ja:"事業はトーネットの息子たちに渡る。", zh:"事業交給 Thonet 的兒子們。" } },
            { year:"1856",
              title:{ en:"Solid-wood privilege", ja:"無垢材の特権", zh:"實木特許權" },
              text:{
                en:"Sole right to bent solid-wood chairs and table legs; land bought at Koryčany.",
                ja:"無垢材を曲げた椅子と机の脚の独占権。コリチャニに土地を得る。",
                zh:"彎曲實木椅與桌腳的獨占權；在科日恰尼購地。" } },
            { year:"1859",
              title:{ en:"Chair No. 14", ja:"椅子No.14", zh:"No.14 椅" },
              text:{ en:"The chair that becomes the industry's standard.", ja:"業界の標準となる椅子。", zh:"成為業界標準的椅子。" } },
            { year:"1869",
              title:{ en:"Privilege given up", ja:"特権の放棄", zh:"放棄特許權" },
              text:{
                en:"After a challenge by Jacob &amp; Josef Kohn; competitors multiply.",
                ja:"ヤーコプ・ウント・ヨーゼフ・コーン社の異議のあと。競争相手が増える。",
                zh:"在 Jacob &amp; Josef Kohn 提出異議後；競爭者大增。" } }
          ] }
      ] },
    { t:"section",
      id:"japan",
      title:{ en:"How bentwood came to Japan", ja:"曲木の伝来", zh:"曲木如何傳入日本" },
      jp:"秋田から飛騨へ",
      body:[
        { t:"p",
          text:{
            en:"Bentwood chairs reached Japan as imports in the late Meiji period, and the machinery to make them soon followed. Satō Gorō, a forestry engineer of the Ministry of Agriculture and Commerce who studied in Germany and Austria from 1906 to 1909, brought back more than ten bending machines made by the German firm Kirchner, together with other woodworking machinery. By 1911 the method was in use at Akita Mokkō in Yuzawa, Akita prefecture, and nine years later it reached Hida. There it was put on a scientific footing by Kojima Hanji, who joined Hida Mokkō on 30 May 1936 at the age of twenty-two and introduced systematic methods, beginning with the measurement of moisture content. Production in 1936 reached 10,230 dozen chairs — 122,760 — about 40 per cent more than the year before.",
            ja:"曲木の椅子は明治の終わりに輸入品として日本に入り、それをつくる機械もほどなく続いた。一九〇六年から一九〇九年にかけてドイツとオーストリアに留学した農商務省の営林技師、佐藤五郎は、ドイツのキルヒナー社の曲木機械を十数台、ほかの木工機械とともに持ち帰った。一九一一年には秋田県湯沢町の秋田木工でこの方法が使われ、九年後に飛騨に届いた。飛騨でそれを科学の土台にのせたのが小島班司である。彼は一九三六年五月三十日、二十二歳で飛騨木工に入社し、含水率の測定をはじめとする系統だった方法を持ちこんだ。一九三六年の生産は一万二百三十打——十二万二千七百六十脚——で、前年より約四割多かった。",
            zh:"曲木椅在明治末年以進口品形式進入日本，製造它的機器也隨即跟進。1906 至 1909 年間留學德國與奧地利的農商務省營林技師佐藤五郎，帶回了十多台德國 Kirchner 公司的曲木機，以及其他木工機械。到了 1911 年，秋田縣湯澤町的秋田木工已採用此法，九年後傳到飛驒。在飛驒，把它奠定於科學基礎上的是小島班司：他在 1936 年 5 月 30 日以二十二歲之齡進入飛驒木工，引進以含水率測定為首的系統化方法。1936 年的產量達 10,230 打——122,760 張——比前一年增加約四成。" } },
        { t:"p",
          text:{
            en:"In 1947 the company worked out ways of drying and gluing bent parts with a high-frequency (radio-frequency) heater, which warms wood through its whole thickness at once instead of from the surface inwards; a forced-circulation timber kiln followed in 1950. Heat that reaches the core quickly matters for bentwood, because a bent part must be dried while it is still clamped to its form if it is to keep its shape. Two years after the first experiments with high frequency, in 1949, the first post-war export left Takayama: a wooden folding chair, No. 1001, in a first shipment of 360. The interest in drying has never left the company. Its newest factory, opened in 2023 at Okuhida Tochio, dries timber with geothermal heat.",
            ja:"一九四七年、会社は高周波（ラジオ周波数）の加熱装置で曲木の部材を乾かし接着する方法を考案した。高周波は木を表面から内へではなく、厚み全体を一度に温める。一九五〇年には強制循環式の木材乾燥装置が続いた。芯まで早く熱が届くことは曲木にとって大事である。曲げた部材は、形を保つために型に締めたまま乾かさねばならないからである。高周波の最初の試みから二年後の一九四九年、戦後最初の輸出品が高山を出た。木製の折りたたみ椅子No.1001で、最初の出荷は三百六十脚だった。乾燥への関心は、その後も会社を離れなかった。二〇二三年に奥飛騨栃尾に開いた最も新しい工場は、地熱で木材を乾かす。",
            zh:"1947 年，公司研發出以高週波（射頻）加熱裝置乾燥與膠合彎曲構件的方法：高週波不是從表面向內加熱，而是一次加熱木材的整個厚度；1950 年又導入強制循環式木材乾燥設備。熱能快速抵達木芯對曲木至關重要，因為彎好的構件必須仍夾在模具上時乾燥，才能保持形狀。在高週波初次試驗兩年後的 1949 年，戰後第一批外銷品離開高山：木製折疊椅 No.1001，首批出貨 360 張。公司對乾燥技術的關注從未消失：其最新的工廠於 2023 年在奧飛驒栃尾啟用，以地熱乾燥木材。" } },
        { t:"tiny",
          text:{
            en:"Sources: smow design calendar, “10 December 1869 — Thonet relinquish solid wood bending privilege”; Hida Woodworking Cooperative Federation, history of Hida furniture (Hida no Takumi Gakkai archive); Hida Sangyō, company history.",
            ja:"出典：smow「デザインカレンダー 一八六九年十二月十日 トーネットが無垢材の曲げの特権を放棄」、協同組合飛騨木工連合会「飛騨の家具の歴史」（飛騨の匠学会アーカイブ）、飛騨産業「沿革」。",
            zh:"資料來源：smow 設計日曆〈1869 年 12 月 10 日 Thonet 放棄實木彎曲特許權〉；協同組合飛驒木工聯合會〈飛驒家具的歷史〉（飛驒之匠學會資料庫）；飛驒產業〈沿革〉。" } }
      ] },
    { t:"section",
      id:"compressed",
      title:{ en:"Pressing sugi", ja:"スギを圧す", zh:"壓縮柳杉" },
      jp:"圧縮木材",
      body:[
        { t:"p",
          text:{
            en:"Sugi, the most plentiful tree in Japan's plantations, was long thought unsuitable for furniture. Its air-dry density is about 0.38 g/cm³, little more than half that of beech (about 0.65), and its surface dents under a fingernail. Bending does not come easily to it either. In trials at Ōita prefecture's industrial research institute, conifer strips were steamed for two hours at 70–80 °C and bent over forms with a strap: hinoki could be bent reliably at radii of fifteen to twenty-five times its thickness; sugi, fast-grown and thin-walled, more often failed in compression; pine cracked on the tension side; and at a radius of seven times the thickness none of the conifers could be bent at all. The contrast between soft earlywood and hard latewood, which makes conifers easy to split and plane, works against them here.",
            ja:"日本の人工林で最も多い木、スギは、長いあいだ家具に向かないと思われてきた。気乾密度は約〇・三八g/cm³で、ブナ（約〇・六五）の半分をわずかに超えるにすぎず、表面は爪で押しただけでへこむ。曲げも得意ではない。大分県の産業科学技術センターの試験では、針葉樹の材を七十〜八十度で二時間蒸し、帯金をあてて型に曲げた。ヒノキは厚さの十五〜二十五倍の半径なら確実に曲がったが、成長が早く細胞壁の薄いスギは圧縮で壊れることが多く、マツは引張側で割れ、厚さの七倍の半径ではどの針葉樹も曲げられなかった。針葉樹を割りやすく削りやすくしている、やわらかな早材と硬い晩材の対比が、ここでは不利にはたらく。",
            zh:"柳杉是日本人工林中數量最多的樹種，長期被認為不適合做家具。其氣乾密度約 0.38 g/cm³，僅略高於山毛櫸（約 0.65）的一半，表面用指甲一壓就凹陷。它也不容易彎。大分縣產業科學技術中心的試驗中，把針葉樹材以 70–80°C 蒸煮兩小時，再襯鋼帶繞模彎曲：扁柏在半徑為厚度 15 至 25 倍時能穩定彎成；生長快、細胞壁薄的柳杉則常發生壓縮破壞；松木在受拉側開裂；而在半徑僅為厚度 7 倍時，所有針葉樹都無法彎曲。早材軟、晚材硬的反差，讓針葉樹易劈易刨，在這裡卻成了缺點。" } },
        { t:"p",
          text:{
            en:"Hida Sangyō's answer was to change the wood itself. It took the principle of bentwood — that heat and moisture soften the lignin of the cell walls — into a press: sugi is softened at high moisture content and high temperature and squeezed until its cells fold flat, and the denser, harder material is shaped in the same operation. The difficulty was to compress evenly through the whole thickness rather than merely harden the surface, and to make the compression permanent, since compressed wood tends to swell back towards its original thickness when it is wetted or steamed again unless it is fixed by further heat treatment. The company can compress sugi by 30, 50 or as much as 70 per cent; at the highest rate the wood turns dark, becomes dense enough to sink in water and is used for small things such as chopsticks. Furniture uses a middle setting: the KISARAGI armchair of 2015, of straight-grained sugi, is compressed at 55 per cent, chosen as the best balance of hardness and workability.",
            ja:"飛騨産業の答えは、木そのものを変えることだった。曲木の原理——熱と水分が細胞壁のリグニンをやわらかくする——をプレスに持ちこんだのである。スギを高い含水率と高温でやわらかくし、細胞が平たく折りたたまれるまで圧し、密で硬くなった材を同じ工程で成形する。難しかったのは、表面だけを硬くするのでなく厚み全体を均一に圧縮すること、そして圧縮を元に戻らないものにすることだった。圧縮した木は、固定のための熱処理を加えなければ、濡れたり蒸されたりするともとの厚さに向かってふくらみ戻ろうとする。会社はスギを三十、五十、最大七十パーセントの圧縮率で圧縮できる。最も高い率では木は黒っぽくなり、水に沈むほど密になって、箸のような小物に使われる。家具には中ほどの設定を使う。柾目のスギによる二〇一五年の「KISARAGI」アームチェアは、硬さと加工のしやすさの釣り合いが最もよいとして、圧縮率五十五パーセントでつくられる。",
            zh:"飛驒產業的對策，是改變木材本身。它把曲木的原理——熱與水分軟化細胞壁中的木質素——帶進壓機：在高含水率與高溫下軟化柳杉，壓到細胞扁平折疊，並在同一道工序中將變得更緻密、更硬的材料成形。難處在於要讓整個厚度均勻受壓，而不只是硬化表面；還要讓壓縮成為永久性的，因為壓縮木材若未經進一步熱處理固定，一旦再次受潮或蒸煮，就會朝原來的厚度回脹。公司能以 30%、50% 乃至最高 70% 的壓縮率壓縮柳杉；在最高壓縮率下，木材顏色轉深，緻密到會沉入水中，用來製作筷子等小物。家具則採用中間設定：2015 年以柳杉直紋材製作的「KISARAGI」扶手椅，壓縮率為 55%，被認為在硬度與加工性之間取得最佳平衡。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Steam-bending", ja:"蒸し曲げ", zh:"蒸汽彎曲" },
              jp:"曲木",
              text:{
                en:"Beech, oak, ash and other diffuse- or ring-porous hardwoods. The strap forces the whole section into compression on one curve; density changes little, and the part keeps the strength of continuous grain.",
                ja:"ブナ、ナラ、タモなど散孔材・環孔材の広葉樹。帯金によって断面全体を一つの曲線上で圧縮する。密度はあまり変わらず、部材は途切れない木目の強さを保つ。",
                zh:"山毛櫸、橡木、梣木等散孔或環孔闊葉材。鋼帶迫使整個斷面沿一道曲線受壓；密度變化不大，構件保有連續紋理的強度。" } },
            { title:{ en:"Compression", ja:"圧縮", zh:"壓縮" },
              jp:"圧縮スギ",
              text:{
                en:"Sugi and hinoki from plantations. The whole board is pressed thinner, so density and hardness rise; the same press can shape the part. The compression has to be fixed, or moisture will make it spring back.",
                ja:"人工林のスギとヒノキ。板全体を圧して薄くするので、密度と硬さが上がる。同じプレスで部材を成形できる。圧縮は固定せねばならず、さもなければ湿気で戻る。",
                zh:"人工林的柳杉與扁柏。整片板材被壓薄，密度與硬度隨之上升；同一台壓機即可成形。壓縮必須加以固定，否則受潮就會回彈。" } }
          ] },
        { t:"p",
          text:{
            en:"Research began in 2001. The company formed a sugi research-and-development cooperative with other firms — in 2004 according to its own history, in 2003 according to a 2015 magazine report — and completed a compression plant in 2005, launching its first compressed-sugi range, Enzo Mari's HIDA series, at Milan the same year. Compressed sugi has since gone into flooring as well: in 2010 the company supplied compressed-sugi floors for a school in Mie prefecture. For the forests of Gifu, where sugi and hinoki plantations planted after the war are now mature, a way of turning a soft construction timber into a hardwood substitute is more than a curiosity.",
            ja:"研究は二〇〇一年に始まった。会社はほかの会社とともにスギの研究開発の協同組合をつくり——自社の沿革では二〇〇四年、二〇一五年の雑誌の記事では二〇〇三年とされる——、二〇〇五年に圧縮工場を完成させ、同じ年にミラノで最初の圧縮スギのシリーズ、エンツォ・マーリの「HIDA」を発表した。圧縮スギはその後、床材にも使われている。二〇一〇年、会社は三重県の学校に圧縮スギの床を納めた。戦後に植えたスギとヒノキの人工林がいま伐りどきを迎えている岐阜の森にとって、やわらかな建築用材を広葉樹の代わりになる材に変える方法は、珍しい技術という以上の意味をもつ。",
            zh:"相關研究始於 2001 年。公司與其他企業共同成立柳杉研究開發協同組合——依其自家沿革為 2004 年，依 2015 年一篇雜誌報導則為 2003 年——並於 2005 年完成壓縮工廠，同年在米蘭推出首個壓縮柳杉系列：Enzo Mari 設計的「HIDA」。此後壓縮柳杉也用於地板：2010 年，公司為三重縣一所學校提供壓縮柳杉地板。對岐阜的森林而言——戰後種植的柳杉與扁柏人工林如今已屆伐期——能把柔軟的建築用材變成闊葉材替代品的方法，意義遠不只是新奇技術。" } },
        { t:"tiny",
          text:{
            en:"Sources: Hida Sangyō, company history and wood-species pages; colocal, report on Hida Sangyō's compression technology (January 2015); Ōita Industrial Research Institute, study of bending prefectural conifers; air-dry densities from the Wood Industry Handbook.",
            ja:"出典：飛騨産業「沿革」「材種について」、コロカル「飛騨産業 伝統の曲げ木が生かされた圧縮技術」（二〇一五年一月）、大分県産業科学技術センター「県産針葉樹材の曲げ木加工技術の開発研究」、気乾密度は『木材工業ハンドブック』による。",
            zh:"資料來源：飛驒產業〈沿革〉與材種頁；colocal〈飛驒產業：傳統曲木技術延伸出的壓縮技術〉（2015 年 1 月）；大分縣產業科學技術中心〈縣產針葉樹材曲木加工技術開發研究〉；氣乾密度引自《木材工業手冊》。" } }
      ] },
    { t:"section",
      id:"laminated",
      title:{ en:"Thin layers and fast heat", ja:"薄板と速い熱", zh:"薄板與快速加熱" },
      jp:"積層曲げ・成形合板",
      body:[
        { t:"p",
          text:{
            en:"Not every curve made in Hida is steamed. Thin boards glued in layers over a form — laminated bending — and veneers pressed into shells between heated moulds give curves that are more stable and repeatable than solid bending, at the cost of glue lines and more processing. A recent project shows how the methods combine. Between September 2020 and January 2021 Hidakuma, working with the events company Hakuten, made undulating display fixtures from Hida-grown oak (<em>nara</em>), horse chestnut (<em>tochi</em>), cherry and walnut for The North Face's Mountain store in Harajuku, Tokyo: strips about six metres long and only 6 millimetres thick. Steaming 6 mm solid boards scorched them unevenly, so the team switched to laminating two 3 mm boards and curing them on the form with high-frequency heating, which dries the wood and sets the glue at the same time, rather like a microwave oven. All four species bent successfully. The bent plywood was made by Chūō Sangyō, a member of the Hida furniture federation, the thin boards by Hida Mukuya, and the joinery and assembly by a local craftsman.",
            ja:"飛騨でつくられる曲線のすべてが蒸して曲げられるわけではない。薄い板を型の上で層に接着する積層曲げや、熱した型のあいだで単板をシェルに圧す成形合板は、無垢の曲げよりも安定し再現しやすい曲線を与えるが、接着の層が見え、手間も増える。最近のある仕事が、これらの方法の組み合わせ方を示している。二〇二〇年九月から二〇二一年一月にかけて、ヒダクマは体験型マーケティングの会社、博展とともに、東京・原宿のザ・ノース・フェイスの「マウンテン」店のために、飛騨産のナラ、トチ、サクラ、クルミで波打つ什器をつくった。長さ約六メートル、厚さわずか六ミリの帯である。六ミリの無垢板を蒸すとむらに焦げたため、三ミリの板を二枚積層し、型の上で高周波加熱によって固める方法に切りかえた。高周波は電子レンジのように、木を乾かすと同時に接着剤を固める。四つの樹種はすべてうまく曲がった。曲げ合板は飛騨木工連合会の会員である中央産業が、薄板は飛騨無垢屋が、仕口と組立は地元の職人がになった。",
            zh:"在飛驒做出的曲線，並非全靠蒸煮彎曲。把薄板在模具上逐層膠合的層積彎曲，以及在加熱模具間把單板壓成殼形的成形合板，能得到比實木彎曲更穩定、更易重現的曲線，代價是看得見的膠層與更多工序。最近一項工作說明了這些方法如何搭配。2020 年 9 月至 2021 年 1 月，Hidakuma 與體驗行銷公司博展合作，用飛驒產的水楢、七葉樹、櫻木與胡桃木，為東京原宿 The North Face「Mountain」店製作波浪起伏的展示架：長約 6 公尺、厚僅 6 公釐的木條。蒸煮 6 公釐實木板時出現不均勻的焦痕，團隊於是改為把兩片 3 公釐薄板層積，並在模具上以高週波加熱固化——高週波像微波爐一樣，同時乾燥木材並使膠合劑硬化。四種樹種都成功彎曲。彎曲合板由飛驒木工聯合會會員中央產業製作，薄板由飛驒無垢屋供應，接合與組裝則由在地工匠負責。" } },
        { t:"p",
          text:{
            en:"Whatever the method, wood remembers. A bent part released from its form opens slightly — spring-back — so forms are made to a tighter curve than the finished piece, and the part stays clamped until it has dried and cooled enough to hold its shape. Later changes in humidity can open or close a bend a little, which is one reason Hida's makers dry bending stock and finished parts with care, and why a bentwood chair is happier away from a heater (see <a href=\"moisture.html\">Wood &amp; Water</a>). Strength standards apply to bent chairs as to any other: see <a href=\"chairs.html\">The Chair</a> for how they are tested.",
            ja:"どの方法でも、木は覚えている。型から外した曲げ部材はわずかに開く——スプリングバック——ので、型は仕上がりより少しきつい曲線につくり、部材は形を保てるほど乾いて冷めるまで締めたままにしておく。のちの湿度の変化で曲げがわずかに開いたり閉じたりすることもある。飛騨のつくり手が曲木の材と仕上がった部材を念入りに乾かすのも、曲木の椅子を暖房のそばに置かないほうがよいのも、それが理由の一つである（<a href=\"moisture.html\">木と水分</a>を参照）。曲げた椅子にも、ほかの椅子と同じ強度の基準があてはまる。その試験の方法は<a href=\"chairs.html\">椅子</a>を参照。",
            zh:"無論哪種方法，木材都有記憶。從模具上取下的彎曲構件會稍微張開——即「回彈」——因此模具的曲線要做得比成品略緊，構件也要一直夾著，直到乾燥、冷卻到足以保持形狀為止。日後的濕度變化也可能讓彎曲處略為張開或收合；這是飛驒工匠細心乾燥曲木用材與成品構件的原因之一，也是曲木椅最好遠離暖氣的原因（見<a href=\"moisture.html\">木與水分</a>）。彎曲的椅子與其他椅子一樣適用強度標準：測試方式見<a href=\"chairs.html\">椅子</a>。" } },
        { t:"table",
          caption:{ en:"Early products of Hida Mokkō", ja:"飛騨木工の初期の製品", zh:"飛驒木工的早期產品" },
          cols:[{ en:"Year", ja:"年", zh:"年" }, { en:"Product", ja:"製品", zh:"產品" }, { en:"Note", ja:"備考", zh:"說明" }],
          rows:[
            [
              "1925",
              { en:"Bentwood chair", ja:"曲木椅子", zh:"曲木椅" },
              { en:"First-class gold medal at a national exhibition", ja:"全国の博覧会で一等金牌", zh:"獲全國博覽會一等金牌" }
            ],
            [
              "1931",
              { en:"Triangle chair", ja:"三角椅子", zh:"三角椅" },
              { en:"Gold medal; design registered", ja:"金賞牌。意匠登録", zh:"獲金賞牌；設計登錄" }
            ],
            [
              "1932",
              { en:"Folding armchair", ja:"折畳肘掛椅子", zh:"折疊扶手椅" },
              { en:"Registered as a utility model", ja:"実用新案の登録", zh:"取得新型專利登錄" }
            ],
            [
              "1937",
              { en:"Reception set No. 90", ja:"応接セットNo.90", zh:"No.90 接待組椅" },
              { en:"Finished in Hida Shunkei lacquer", ja:"飛騨春慶塗の仕上げ", zh:"以飛驒春慶塗裝飾面" }
            ],
            [
              "1949",
              { en:"Folding chair No. 1001", ja:"折りたたみ椅子No.1001", zh:"No.1001 折疊椅" },
              {
                en:"First post-war export; 360 in the first shipment",
                ja:"戦後最初の輸出。最初の出荷は三百六十脚",
                zh:"戰後首批外銷；首批 360 張" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Hidakuma, column on the bentwood fixtures (May 2021); Hida Sangyō, company history; Hida Woodworking Cooperative Federation, history of Hida furniture.",
            ja:"出典：ヒダクマ「ダイナミックに跳躍する曲げ木什器、その製作と実験の軌跡」（二〇二一年五月）、飛騨産業「沿革」、協同組合飛騨木工連合会「飛騨の家具の歴史」。",
            zh:"資料來源：Hidakuma〈動態躍動的曲木展示架：製作與實驗紀錄〉（2021 年 5 月）；飛驒產業〈沿革〉；協同組合飛驒木工聯合會〈飛驒家具的歷史〉。" } }
      ] },
    { t:"related",
      items:[
        { href:"furniture.html", why:{ en:"The industry bentwood founded.", ja:"曲木が築いた産業。", zh:"曲木所奠基的產業。" } },
        { href:"chairs.html", why:{ en:"The chairs themselves.", ja:"椅子そのもの。", zh:"椅子本身。" } },
        { href:"broadleaf.html", why:{ en:"Beech and its forests.", ja:"ブナとその森。", zh:"山毛櫸及其森林。" } },
        { href:"moisture.html", why:{ en:"Moisture and the behaviour of wood.", ja:"水分と木のふるまい。", zh:"水分與木材行為。" } }
      ] }
  ] };

/* ---- -------------------------------------------- houses */
GIFU.pages["houses"] = { kicker:{ en:"Wood Craft · 03", ja:"木の工芸 · 03", zh:"木作工藝 · 03" },
  title:{ en:"The Furniture Houses", ja:"家具の作り手", zh:"家具的製作者" },
  jp:"木工家 · 工房 · 学びの場",
  lede:{
    en:"Alongside Hida's furniture factories, Gifu is home to a large community of independent woodworkers: furniture makers working alone or in small studios, turners, carvers, lacquerers, joiners, box makers and toy makers. Some trained in the factories of Takayama, some at the prefecture's forest academy or woodcraft school, many came from cities to live near the forests. This page introduces the lineage of studio woodworking in Gifu, the schools and networks that sustain it, and how to find and commission a maker; its second half profiles the large furniture houses of Takayama, from Hida Sangyō to Kitani.",
    ja:"飛騨の家具工場とならんで、岐阜には独立した木工家の大きな共同体がある。一人や小さな工房で働く家具のつくり手、挽物師、彫師、塗師、建具師、指物師、玩具のつくり手。高山の工場で修業した人もいれば、県の森林アカデミーや木工のスクールで学んだ人もおり、多くは都市から森の近くに暮らすために来た。この頁は、岐阜の工房の木工の系譜、それを支える学校と網の目、そしてつくり手を見つけ仕事を頼む方法を紹介し、後半では飛騨産業からキタニまで、高山の大きな家具の作り手を一社ずつ紹介する。",
    zh:"在飛驒的家具工廠之外，岐阜還有一個龐大的獨立木工社群：獨自或在小工作室工作的家具工匠、車旋師、雕刻師、漆師、建具師、指物師與玩具師。有些人在高山的工廠學藝，有些在縣立森林學院或木工學校受訓，許多人則是從都市搬來，為了住在森林附近。本頁介紹岐阜工作室木工的傳承、支撐它的學校與網絡，以及如何尋找並委託工匠；後半則逐一介紹從飛驒產業到 Kitani 的高山大型家具廠。" },
  body:[
    { t:"section",
      id:"lineage",
      title:{ en:"Two founding figures", ja:"二つの源流", zh:"兩位奠基者" },
      jp:"早川謙之輔・オークヴィレッジ",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Hayakawa Kennosuke (1938–2005)", ja:"早川謙之輔（一九三八〜二〇〇五）", zh:"早川謙之輔（1938–2005）" },
              jp:"杣工房",
              def:{
                en:"A woodworker from the hinoki country of Tsukechi, now part of Nakatsugawa, who founded his workshop, Sōma Kōbō, in 1969. His work ranged from furniture and boxes to architectural woodwork, including the ceiling of the Serizawa Keisuke Art Museum in Shizuoka (1981) for the architect Shirai Seiichi. He wrote a series of books on woodworking and on the lacquer and wood master Kuroda Tatsuaki between 1993 and 2005, the later ones published by Shinchōsha, which shaped a generation's understanding of the craft as a relationship with the tree.",
                ja:"いまは中津川市の一部である付知のヒノキの里の木工家で、一九六九年に工房「杣工房」を開いた。仕事は家具や箱から建築の木工まで及び、建築家白井晟一のための静岡市立芹沢銈介美術館の天井（一九八一年）もその一つである。一九九三年から二〇〇五年にかけて、木工と、木工と漆の名匠黒田辰秋についての一連の本を出し（後の数冊は新潮社刊）、木工を木との関係としてとらえる一世代の理解を形づくった。",
                zh:"出身付知（今屬中津川市）扁柏之鄉的木工家，1969 年創立工房「杣工房」。作品從家具、盒子到建築木作，包括為建築師白井晟一製作的靜岡市立芹澤銈介美術館天花板（1981）。1993 至 2005 年間，他出版一系列關於木工以及木工與漆藝大師黑田辰秋的著作（後期幾本由新潮社出版），塑造了一整代人把木工視為人與樹之關係的理解。" } },
            { term:{ en:"Oak Village (1974)", ja:"オークヴィレッジ（一九七四年）", zh:"Oak Village（1974）" },
              jp:"清見",
              def:{
                en:"Founded by a group of young people from a Rikkyō University circle, led by Inamoto Tadashi, who trained at the Hida Takayama technical school and settled in Kiyomi, now part of Takayama. Their aim — “from bowls to furniture to buildings” — was to make things from Japanese broadleaves that would last as long as the trees had taken to grow, and they have planted trees since the beginning. Oak Village became one of the models for the back-to-the-forest woodworking movement in Japan.",
                ja:"立教大学のサークル出身の若者たちが稲本正を中心に創立した。飛騨高山の技術専門校で学び、いまは高山市の一部である清見に根をおろした。「お椀から家具、建物まで」を掲げ、木が育つのにかかった年月だけもつものを国産の広葉樹でつくることをめざし、はじめから木を植えてきた。オークヴィレッジは、日本の森へ帰る木工の動きの手本の一つとなった。",
                zh:"由立教大學社團出身、以稻本正為首的一群年輕人創立；他們在飛驒高山技術專門學校受訓，定居於今屬高山市的清見。他們以「從碗到家具到建築」為目標，用日本闊葉材製作能與樹木生長歲月同樣長久的物品，並從一開始就持續植樹。Oak Village 成為日本「回歸森林」木工運動的典範之一。" } }
          ] }
      ] },
    { t:"section",
      id:"schools",
      title:{ en:"Where makers learn", ja:"つくり手の学ぶところ", zh:"工匠在哪裡學習" },
      jp:"学校と網の目",
      body:[
        { t:"p",
          text:{
            en:"Gifu is unusual in having two public schools devoted to woodworking. The woodcraft art school in Takayama, with roots in a joinery training centre of 1946, runs a one-year course that feeds Hida's factories and workshops. The Forest Academy in Mino trains woodworkers within its “forest and wood creators” programme, teaching hand tools and machines, furniture design with local timber, digital fabrication, traditional crafts such as lacquer and bamboo, wood-education workshops and the management of small wood businesses. Its graduates have founded independent workshops, craft businesses making baskets, bentwood boxes and geta, and professional networks such as WOOD AC, an NPO of architecture graduates in Mino with its own furniture workshop.",
            ja:"岐阜には、木工のための公立の学校が二つあるという珍しさがある。一九四六年の建具の補導所に源をもつ高山の木工芸術スクールは一年の課程を営み、飛騨の工場と工房に人を送る。美濃の森林文化アカデミーは「森と木のクリエーター科」のなかで木工家を育て、手道具と機械、地元の材による家具のデザイン、デジタルファブリケーション、漆や竹などの伝統の工芸、木育のワークショップ、小さな木の事業の経営を教える。卒業生は独立した工房を開き、籠や曲物や下駄をつくる工芸の事業を起こし、美濃の建築の卒業生によるNPO、WOOD ACのような専門の網をつくった。WOOD ACは自前の家具工房ももつ。",
            zh:"岐阜少見地擁有兩所專門培養木工的公立學校。源自 1946 年建具訓練所的高山木工藝術學校，開設一年制課程，為飛驒工廠與工坊輸送人才。美濃的森林文化學院在「森林與木材創作者科」中培養木工，教授手工具與機械、以在地木材進行家具設計、數位製造、漆與竹等傳統工藝、木育工作坊，以及小型木材事業經營。畢業生創立了獨立工坊、製作籃子、曲物與木屐的工藝事業，以及如 WOOD AC 這樣的專業網絡——由美濃建築科畢業生組成的非營利組織，並設有自己的家具工坊。" } },
        { t:"figure",
          caption:{
            en:"Pathways into woodworking in Gifu, simplified: most independent makers combine formal training with years in an existing workshop before opening their own.",
            ja:"岐阜で木工の道に入る道筋（簡略）。独立したつくり手の多くは、学校での学びと既存の工房での何年かを重ねてから自分の工房を開く。",
            zh:"進入岐阜木工之路（簡化）：多數獨立工匠在正式訓練之後，先在既有工坊工作數年，才開設自己的工坊。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Becoming a maker", ja:"つくり手になる", zh:"成為工匠" }, per:4, bh:112,
            steps:[
              { t:{ en:"School", ja:"学校", zh:"學校" }, d:{ en:"Woodcraft school (Takayama) or Forest Academy (Mino).", ja:"木工芸術スクール（高山）か森林文化アカデミー（美濃）。", zh:"木工藝術學校（高山）或森林文化學院（美濃）。" } },
              { t:{ en:"Apprenticeship", ja:"修業", zh:"學徒期" }, d:{ en:"Years in a factory or master's workshop.", ja:"工場や親方の工房で何年か。", zh:"在工廠或師傅工坊待上數年。" } },
              { t:{ en:"Own workshop", ja:"独立", zh:"自立門戶" }, d:{ en:"Often in a village house near the forest.", ja:"しばしば森に近い村の家で。", zh:"常設於森林附近的村屋。" } },
              { t:{ en:"Network", ja:"網の目", zh:"網絡" }, d:{ en:"Shared machines, exhibitions, local timber, commissions.", ja:"共用の機械、展示会、地元の材、注文。", zh:"共用機具、展覽、在地木材、委託訂製。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"trades",
      title:{ en:"The woodworking trades", ja:"木の職種", zh:"木作行業" },
      jp:"職人の名",
      body:[
        { t:"p",
          text:{
            en:"Japanese woodworking was traditionally divided into many separate trades, each with its own tools, apprenticeship and guild. The divisions still matter in Gifu: a joiner who makes shoji does not make chests, and a turner who makes bowls does not lacquer them. The names below are the ones a visitor will meet in workshop signs and exhibition labels.",
            ja:"日本の木工は昔から多くの職に分かれ、それぞれが独自の道具、修業、組合をもっていた。その区分は岐阜でもなお意味をもつ。障子をつくる建具師は箪笥をつくらず、椀を挽く挽物師はそれに漆を塗らない。以下は、訪れる人が工房の看板や展示の札で出会う名である。",
            zh:"日本木工傳統上分為許多獨立行業，各有其工具、學徒制度與行會。這種劃分在岐阜至今仍有意義：做障子的建具師不做衣櫃，車碗的車旋師不上漆。以下是訪客在工坊招牌與展覽標示上會遇到的名稱。" } },
        { t:"table",
          caption:{ en:"Traditional woodworking trades", ja:"伝統的な木の職種", zh:"傳統木作行業" },
          cols:[
            { en:"Trade", ja:"職種", zh:"行業" },
            { en:"Reading", ja:"読み", zh:"讀音" },
            { en:"Makes", ja:"つくるもの", zh:"製作" },
            { en:"In Gifu", ja:"岐阜では", zh:"在岐阜" }
          ],
          rows:[
            [
              { en:"Temple carpenter", ja:"宮大工", zh:"宮大工" },
              "みやだいく",
              { en:"Shrines and temples", ja:"社寺", zh:"寺社" },
              {
                en:"Hida and Tōnō carpenters; Ise timber from Kashimo",
                ja:"飛騨と東濃の大工。加子母からの伊勢の用材",
                zh:"飛驒與東濃木匠；加子母供應伊勢用材" }
            ],
            [
              { en:"House carpenter", ja:"大工", zh:"木匠" },
              "だいく",
              { en:"Houses and their frames", ja:"住宅とその軸組", zh:"住宅及其骨架" },
              { en:"Village builders across the prefecture", ja:"県じゅうの村の工務店", zh:"全縣各地村落營造商" }
            ],
            [
              { en:"Joiner", ja:"建具師", zh:"建具師" },
              "たてぐし",
              { en:"Doors, shoji, screens, kumiko lattice", ja:"戸、障子、衝立、組子", zh:"門、障子、屏風、組子格柵" },
              {
                en:"Takayama's joinery tradition (the woodcraft school began as a joinery centre)",
                ja:"高山の建具の伝統（木工のスクールは建具の補導所から始まった）",
                zh:"高山建具傳統（木工學校前身即建具訓練所）" }
            ],
            [
              { en:"Cabinetmaker", ja:"指物師", zh:"指物師" },
              "さしものし",
              { en:"Chests, boxes, small furniture", ja:"箪笥、箱、小さな家具", zh:"衣櫃、盒子、小型家具" },
              { en:"Kiri chests; hinoki boxes", ja:"桐箪笥、ヒノキの箱", zh:"桐木衣櫃；扁柏盒" }
            ],
            [
              { en:"Turner", ja:"挽物師（木地師）", zh:"車旋師（木地師）" },
              "ひきものし",
              { en:"Bowls, trays, spindles on the lathe", ja:"轆轤で椀、盆、軸", zh:"以轆轤車製碗、盤與軸" },
              { en:"Tochi bowls for Shunkei ware", ja:"春慶のトチの椀", zh:"春慶用的七葉樹碗" }
            ],
            [
              { en:"Bentwood-box maker", ja:"曲物師", zh:"曲物師" },
              "まげものし",
              { en:"Round boxes from thin bent boards", ja:"薄い板を曲げた丸い箱", zh:"以彎曲薄板製成的圓盒" },
              { en:"Shunkei bent ware in Takayama", ja:"高山の春慶の曲物", zh:"高山春慶曲物" }
            ],
            [
              { en:"Lacquerer", ja:"塗師", zh:"漆師" },
              "ぬし",
              { en:"Lacquer finishes", ja:"漆の仕上げ", zh:"漆面塗裝" },
              { en:"Hida Shunkei", ja:"飛騨春慶", zh:"飛驒春慶" }
            ],
            [
              { en:"Carver", ja:"彫師", zh:"雕師" },
              "ほりし",
              { en:"Sculpture, architectural carving, festival floats", ja:"彫刻、建築の彫り物、祭屋台", zh:"雕刻、建築雕飾、祭典屋台" },
              { en:"Ichii Ittōbori; the float carvers of Takayama", ja:"一位一刀彫、高山の屋台の彫師", zh:"一位一刀彫；高山屋台雕師" }
            ],
            [
              { en:"Cooper", ja:"桶屋・樽屋", zh:"桶匠" },
              "おけや",
              { en:"Buckets, tubs, barrels", ja:"桶、盥、樽", zh:"桶、盆、酒樽" },
              { en:"Hinoki tubs; sugi barrels for sake", ja:"ヒノキの桶、酒のスギ樽", zh:"扁柏桶；日本酒柳杉樽" }
            ]
          ] }
      ] },
    { t:"section",
      id:"workshops",
      title:{ en:"A sample of studio workshops", ja:"工房の一例", zh:"工作室舉例" },
      jp:"県内の家具工房",
      body:[
        { t:"p",
          text:{
            en:"Independent furniture workshops are spread across the prefecture, not only in Takayama. The list below is a sample of those registered on a national directory of furniture workshops, to show their range and distribution; it is not a recommendation or a complete list. See <a href=\"makers.html\">Directory</a> for more.",
            ja:"独立した家具工房は、高山だけでなく県じゅうに散らばっている。以下は、全国の家具工房の案内に登録されているものの一例で、その幅と分布を示すためのものである。推薦でも網羅的な一覧でもない。さらに多くは<a href=\"makers.html\">名鑑</a>を参照。",
            zh:"獨立家具工坊遍布全縣，不只在高山。以下是登錄於全國家具工坊名錄中的部分工坊，用以呈現其類型與分布；並非推薦，也不是完整名單。更多請見<a href=\"makers.html\">名錄</a>。" } },
        { t:"table",
          caption:{ en:"Furniture workshops in Gifu (sample)", ja:"岐阜の家具工房（一例）", zh:"岐阜家具工坊（舉例）" },
          cols:[
            { en:"Workshop", ja:"工房", zh:"工坊" },
            { en:"Municipality", ja:"市町村", zh:"市町村" },
            { en:"Work", ja:"仕事", zh:"作品" }
          ],
          rows:[
            [
              "家具工房雉子屋 (Kijiya)",
              { en:"Takayama", ja:"高山市", zh:"高山市" },
              { en:"Chairs, tables, storage", ja:"椅子、机、収納", zh:"椅子、桌子、收納" }
            ],
            [
              "walnut-factory",
              { en:"Takayama", ja:"高山市", zh:"高山市" },
              { en:"Walnut furniture", ja:"ウォールナットの家具", zh:"胡桃木家具" }
            ],
            [
              "AC CRAFT",
              { en:"Mino", ja:"美濃市", zh:"美濃市" },
              {
                en:"Furniture; linked to the WOOD AC architects' network",
                ja:"家具。WOOD ACの建築の網とつながる",
                zh:"家具；與 WOOD AC 建築網絡相連" }
            ],
            [
              "tokotowa",
              { en:"Kakamigahara", ja:"各務原市", zh:"各務原市" },
              { en:"Chairs, benches, tables", ja:"椅子、ベンチ、机", zh:"椅子、長凳、桌子" }
            ],
            [
              "福庭家具工房 (Fukuniwa)",
              { en:"Minokamo", ja:"美濃加茂市", zh:"美濃加茂市" },
              { en:"Chairs, tables, storage", ja:"椅子、机、収納", zh:"椅子、桌子、收納" }
            ],
            [
              "家具工房ウッドスケッチ (Wood Sketch)",
              { en:"Kawabe", ja:"川辺町", zh:"川邊町" },
              { en:"Chairs, tables, storage", ja:"椅子、机、収納", zh:"椅子、桌子、收納" }
            ],
            [
              "loftywood",
              { en:"Kani", ja:"可児市", zh:"可兒市" },
              { en:"Chairs, tables, storage", ja:"椅子、机、収納", zh:"椅子、桌子、收納" }
            ],
            [
              "はせ工房 (Hase)",
              { en:"Ena", ja:"恵那市", zh:"惠那市" },
              { en:"Small chairs and handmade furniture", ja:"豆椅子と手づくりの家具", zh:"小椅子與手工家具" }
            ],
            [
              "大鹿野工房 (Ōjikano)",
              { en:"Gero", ja:"下呂市", zh:"下呂市" },
              { en:"Original furniture and wood products", ja:"創作家具と木製品", zh:"創作家具與木製品" }
            ],
            [
              "久保田家具工房 (Kubota)",
              { en:"Yōrō", ja:"養老町", zh:"養老町" },
              { en:"Chairs, tables, storage", ja:"椅子、机、収納", zh:"椅子、桌子、收納" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Source: a national online directory of furniture workshops, Gifu listing (2026). Details change; contact workshops before visiting.",
            ja:"出典：全国の家具工房のオンライン案内、岐阜の項（二〇二六年）。情報は変わるので、訪れる前に工房に連絡を。",
            zh:"資料來源：全國家具工坊線上名錄岐阜頁面（2026）。資訊可能變動，造訪前請先聯絡工坊。" } }
      ] },
    { t:"section",
      id:"commission",
      title:{ en:"Commissioning a piece", ja:"一点を頼む", zh:"委託訂製" },
      jp:"注文家具",
      body:[
        { t:"steps",
          items:[
            { title:{ en:"Visit", ja:"訪ねる", zh:"拜訪" },
              text:{
                en:"Most makers have a small showroom or can show past work; appointments are usual.",
                ja:"多くのつくり手は小さな展示場をもつか、過去の仕事を見せられる。予約がふつう。",
                zh:"多數工匠設有小展示室或可展示過往作品；通常需預約。" } },
            { title:{ en:"Choose the wood", ja:"木を選ぶ", zh:"選木" },
              text:{
                en:"Many keep stocks of air-dried local boards; some will take you to the timber market or the forest.",
                ja:"多くは天然乾燥した地元の板をたくわえている。材木市場や森へ案内してくれる人もいる。",
                zh:"許多工匠備有自然乾燥的在地板材；有些還會帶你去木材市場或森林。" } },
            { title:{ en:"Design together", ja:"ともに設計する", zh:"共同設計" },
              text:{
                en:"Size, height, use and the room it will live in; drawings or a mock-up follow.",
                ja:"大きさ、高さ、使い方、置く部屋。そのあと図面や試作。",
                zh:"尺寸、高度、用途與擺放空間；之後提供圖面或模型。" } },
            { title:{ en:"Wait", ja:"待つ", zh:"等待" },
              text:{
                en:"Months rather than weeks — part of the value of the thing.",
                ja:"週ではなく月の単位で。それもものの値打ちのうちである。",
                zh:"以月而非週計——這也是其價值的一部分。" } },
            { title:{ en:"Look after it", ja:"手入れする", zh:"保養" },
              text:{
                en:"Makers will usually repair and refinish their own work for decades. See <a href=\"care.html\">Caring for Wood</a>.",
                ja:"つくり手はふつう、自分の仕事を何十年も直し、塗り直してくれる。<a href=\"care.html\">木の手入れ</a>を参照。",
                zh:"工匠通常數十年都會為自己的作品修理與重新塗裝。見<a href=\"care.html\">木材保養</a>。" } }
          ] }
      ] },
    { t:"section",
      id:"houses",
      title:{ en:"The Takayama houses side by side", ja:"高山の家具メーカーを並べる", zh:"高山家具廠並列比較" },
      jp:"飛騨木工連合会",
      body:[
        { t:"p",
          text:{
            en:"Between the independent workshops described above and the national furniture market stand the companies of the Hida Woodworking Cooperative Federation — the “houses” whose names are branded under the seat of most Hida chairs. Their histories as an industry are told on <a href=\"furniture.html\">Hida Furniture</a> and their addresses are in the <a href=\"makers.html\">Directory</a>. This section looks at them as individual firms: where each began, what it is known for now, and who has led it. They did not all start as chair makers. One began with bentwood, one with sawn timber, one with school desks, one with urethane foam, and one as a group of young people who wanted to live from the forest.",
            ja:"上に述べた独立の工房と全国の家具市場とのあいだに、協同組合飛騨木工連合会の会社がある。たいていの飛騨の椅子の座の裏に焼印される名の「家」である。産業としての歴史は<a href=\"furniture.html\">飛騨の家具</a>に、所在は<a href=\"makers.html\">作り手名鑑</a>にある。ここでは一社ずつの会社として見る。どこから始まり、いま何で知られ、誰が率いてきたか。すべてが椅子づくりから始まったわけではない。曲木から始めた会社があり、製材から、学校の机から、ウレタンフォームから始めた会社があり、森で暮らしを立てたいと願った若者の集まりから始まった会社もある。",
            zh:"在上文介紹的獨立工房與全國家具市場之間，是協同組合飛驒木工連合會的成員公司——大多數飛驒椅子座面底下烙印的那些「家號」。它們作為一個產業的歷史見<a href=\"furniture.html\">飛驒家具</a>，地址見<a href=\"makers.html\">製作者名鑑</a>。本節把它們當作一家家個別企業來看：各自從何起步、如今以什麼聞名、由誰領導。它們並非全都從做椅子起家：有的從曲木開始，有的從製材，有的從學校課桌，有的從聚氨酯泡棉，還有一家起於一群想靠森林過活的年輕人。" } },
        { t:"table",
          caption:{ en:"Six Hida furniture houses compared", ja:"飛騨の家具メーカー六社の比較", zh:"六家飛驒家具廠比較" },
          cols:[
            { en:"House", ja:"会社", zh:"公司" },
            { en:"Founded", ja:"創業", zh:"創立" },
            { en:"Began with", ja:"出発点", zh:"起家" },
            { en:"Known for today", ja:"いまの得意", zh:"今日專長" },
            { en:"Main woods", ja:"主な材", zh:"主要木材" }
          ],
          numCols:[1],
          rows:[
            [
              { en:"Hida Sangyō", ja:"飛騨産業", zh:"飛驒產業" },
              "1920",
              { en:"Bentwood beech chairs", ja:"ブナの曲木椅子", zh:"山毛櫸曲木椅" },
              {
                en:"Chairs and bentwood; compressed sugi; also forestry, sawmilling and power generation",
                ja:"椅子と曲木、圧縮スギ。林業、製材、発電も",
                zh:"椅子與曲木；壓縮杉木；兼營林業、製材與發電" },
              {
                en:"North American white oak, European beech, Japanese sugi, hinoki and oak",
                ja:"北米のホワイトオーク、欧州のブナ、国産のスギ・ヒノキ・ナラ",
                zh:"北美白橡、歐洲山毛櫸、日本杉木、扁柏與橡木" }
            ],
            [
              { en:"Kashiwa Mokkō", ja:"柏木工", zh:"柏木工" },
              "1943",
              { en:"Wood processing (as Hida Mokuzai Kakō)", ja:"木材加工（飛騨木材加工として）", zh:"木材加工（以飛驒木材加工之名）" },
              {
                en:"Windsor chairs, cabinets; interior doors and storage as building materials",
                ja:"ウィンザーチェア、箱物。建材として室内ドアや収納",
                zh:"溫莎椅、箱類家具；室內門與收納建材" },
              { en:"North American oak and walnut, beech, tamo", ja:"北米のオークとウォールナット、ブナ、タモ", zh:"北美橡木與胡桃木、山毛櫸、水曲柳" }
            ],
            [
              { en:"Nissin Mokkō", ja:"日進木工", zh:"日進木工" },
              "1946",
              { en:"School desks and chairs", ja:"学校の机と椅子", zh:"學校課桌椅" },
              {
                en:"Light dining chairs; contract and custom work; restoration; oak casks",
                ja:"軽やかな食卓椅子、特注と納入家具、修復、オークの樽",
                zh:"輕巧的餐椅；工程與訂製家具；修復；橡木桶" },
              { en:"Hardwoods incl. Japanese oak for casks", ja:"広葉樹。樽には国産ナラ", zh:"闊葉材；酒桶用日本橡木" }
            ],
            [
              { en:"Shirakawa", ja:"シラカワ", zh:"Shirakawa" },
              "1960",
              { en:"Furniture making", ja:"家具製造", zh:"家具製造" },
              {
                en:"“Hundred-year modern” furniture; ISO 9001 quality system",
                ja:"「百年モダン」の家具。ISO 9001の品質管理",
                zh:"「百年現代」家具；ISO 9001 品質管理" },
              { en:"Hardwoods imported from the United States", ja:"米国からの輸入広葉樹", zh:"自美國進口的闊葉材" }
            ],
            [
              { en:"Kitani", ja:"キタニ", zh:"Kitani" },
              "1967",
              { en:"Urethane foam and upholstery", ja:"ウレタンフォームと椅子張り", zh:"聚氨酯泡棉與軟包" },
              {
                en:"Danish designs under licence (Finn Juhl and others); repair",
                ja:"デンマークの名作のライセンス生産（フィン・ユールほか）、修理",
                zh:"丹麥設計授權生產（芬恩・尤爾等）；修復" },
              "—"
            ],
            [
              { en:"Oak Village", ja:"オークヴィレッジ", zh:"Oak Village" },
              "1974",
              { en:"A craft community of five founders", ja:"五人の創業者による工房の共同体", zh:"五位創辦人組成的工藝社群" },
              {
                en:"“From bowls to buildings”: furniture, toys, lacquerware, houses",
                ja:"「お椀から建物まで」。家具、玩具、漆器、建物",
                zh:"「從木碗到建築」：家具、玩具、漆器、房屋" },
              { en:"Japanese broadleaves", ja:"国産の広葉樹", zh:"日本產闊葉樹" }
            ]
          ] },
        { t:"figure",
          caption:{
            en:"Founding years of the six houses (above) and milestones of their federation (below). Data from company histories and the Hida Woodworking Cooperative Federation.",
            ja:"六社の創業年（上）と連合会のあゆみ（下）。各社の社史と協同組合飛騨木工連合会による。",
            zh:"六家公司的創立年份（上）與聯合會的里程碑（下）。資料來自各公司沿革與協同組合飛驒木工連合會。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 330" role="img">', ax = 196;
            s += F.text(20, 28, lang==="en"?"A CLUSTER IN FIVE DECADES":(lang==="ja"?"五十年でできた産地":"五十年間形成的產地"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            function X(y){ return 50 + (y - 1915) * 5.6; }
            s += '<line x1="40" y1="'+ax+'" x2="720" y2="'+ax+'" stroke="#8B857C"/>';
            for (var y = 1920; y <= 2020; y += 10) {
              s += '<line x1="'+X(y)+'" y1="'+(ax-4)+'" x2="'+X(y)+'" y2="'+(ax+4)+'" stroke="#8B857C"/>';
              s += F.text(X(y), ax + 29, String(y), { size:9.5, fill:"#8B857C", anchor:"middle" });
            }
            var top = [
              { y:1920, h:150, n:{ en:"Hida Sangyō 1920", ja:"飛騨産業 一九二〇年", zh:"飛驒產業 1920 年" } },
              { y:1943, h:66,  n:{ en:"Kashiwa Mokkō 1943", ja:"柏木工 一九四三年", zh:"柏木工 1943 年" } },
              { y:1946, h:96,  n:{ en:"Nissin Mokkō 1946", ja:"日進木工 一九四六年", zh:"日進木工 1946 年" } },
              { y:1960, h:126, n:{ en:"Shirakawa 1960", ja:"シラカワ 一九六〇年", zh:"Shirakawa 1960 年" } },
              { y:1967, h:156, n:{ en:"Kitani 1967", ja:"キタニ 一九六七年", zh:"Kitani 1967 年" } },
              { y:1974, h:66,  n:{ en:"Oak Village 1974", ja:"オークヴィレッジ 一九七四年", zh:"Oak Village 1974 年" } }
            ];
            for (var i = 0; i < top.length; i++) {
              var t = top[i], x = X(t.y);
              s += '<line x1="'+x+'" y1="'+(ax-2)+'" x2="'+x+'" y2="'+(t.h+4)+'" stroke="#B4AC9C"/>';
              s += '<rect x="'+(x-4)+'" y="'+(ax-4)+'" width="8" height="8" fill="#7C6B52"/>';
              s += F.text(x + 5, t.h, L(t.n), { size:10.5, fill:"#201E1B" });
            }
            var bot = [
              { y:1950, h:312, n:{ en:"1950 Takayama woodworking association", ja:"一九五〇年 高山木工協会", zh:"1950 年 高山木工協會" } },
              { y:1974, h:280, n:{ en:"1974 federation", ja:"一九七四年 連合会", zh:"1974 年 聯合會" } },
              { y:1982, h:254, n:{ en:"1982 cooperative", ja:"一九八二年 協同組合", zh:"1982 年 協同組合" } },
              { y:2008, h:280, n:{ en:"2008 trademark", ja:"二〇〇八年 商標登録", zh:"2008 年 商標註冊" } },
              { y:2017, h:254, n:{ en:"2017 design award", ja:"二〇一七年 デザイン賞", zh:"2017 年 設計獎" } }
            ];
            for (var j = 0; j < bot.length; j++) {
              var u = bot[j], xb = X(u.y);
              s += '<line x1="'+xb+'" y1="'+(ax+36)+'" x2="'+xb+'" y2="'+(u.h-10)+'" stroke="#CDC6B9" stroke-dasharray="3 3"/>';
              s += '<circle cx="'+xb+'" cy="'+(ax+10)+'" r="4" fill="#FBFAF7" stroke="#7C6B52"/>';
              s += F.text(xb + 5, u.h, L(u.n), { size:10.5, fill:"#55504A" });
            }
            return s + '</svg>';
          } }
      ] },
    { t:"section",
      id:"profiles",
      title:{ en:"Six profiles", ja:"六社の横顔", zh:"六家公司側寫" },
      jp:"人と転機",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Hida Sangyō", ja:"飛騨産業", zh:"飛驒產業" },
              jp:"高山市",
              def:{
                en:"The oldest and largest house owes its present shape to Okada Sanzō, who became president in 2000 when the company was in need of thorough restructuring. Under him it launched the Mori no Kotoba series in 2001, which turned knots from defects into ornament, showed Enzo Mari's compressed-sugi HIDA series at the Milan Triennale in 2005, and in 2014 set up the Hida Shokunin Gakusha, a residential school for craftsmen that had trained 34 furniture makers by 2026 (see <a href=\"learning.html\">How People Learn It</a>). Okada became chairman in 2021, handing the presidency to Okada Akiko; he chaired the Japan Furniture Industry Promotion Association from 2020, and in spring 2026 received the Order of the Rising Sun, Gold Rays with Neck Ribbon, for services to industry.",
                ja:"最古で最大の会社のいまの姿は、岡田贊三に負う。二〇〇〇年、会社が抜本的な立て直しを必要としていたときに社長となった。そのもとで二〇〇一年、節を欠点から飾りに変えた「森のことば」を出し、二〇〇五年にはエンツォ・マーリの圧縮スギによるHIDAシリーズをミラノ・トリエンナーレで発表し、二〇一四年には全寮制の職人の学校「飛騨職人学舎」を設け、二〇二六年までに三十四人の家具職人を育てた（<a href=\"learning.html\">人はいかに学ぶか</a>を参照）。岡田は二〇二一年に会長となって社長を岡田明子に譲り、二〇二〇年から日本家具産業振興会の会長を務め、二〇二六年春に産業振興の功労で旭日中綬章を受けた。",
                zh:"這家最古老、規模最大的公司，今日的面貌歸功於岡田贊三。他於 2000 年公司亟需徹底重整時出任社長。在他領導下，公司於 2001 年推出把木節從缺陷變成裝飾的「森之語」系列，2005 年在米蘭三年展發表恩佐・馬利（Enzo Mari）以壓縮杉木製作的 HIDA 系列，並於 2014 年設立全住宿制的工匠學校「飛驒職人學舍」，至 2026 年已培育 34 名家具職人（見<a href=\"learning.html\">人們如何學會它</a>）。岡田於 2021 年改任會長，將社長職交給岡田明子；他自 2020 年起擔任日本家具產業振興會會長，並於 2026 年春因振興產業之功獲頒旭日中綬章。" } },
            { term:{ en:"Kashiwa Mokkō", ja:"柏木工", zh:"柏木工" },
              jp:"高山市",
              def:{
                en:"Founded on 27 March 1943 as Hida Mokuzai Kakō, a timber-processing firm, it took the name Kashiwa in 1948 and made its first Windsor chairs in 1952. Its first work with outside designers, in 1984, produced chairs by Suzuki Shōgo and Barry Lazare. In 2019 it took over another local maker, Takayama Woodworks.",
                ja:"一九四三年三月二十七日、製材と木材加工の会社「飛騨木材加工」として創業し、一九四八年に柏木工の名となり、一九五二年に最初のウィンザーチェアをつくった。一九八四年、初めて社外のデザイナーと組み、鈴木正吾とバリー・ラザールの椅子が生まれた。二〇一九年には地元の高山ウッドワークスを傘下に収めた。",
                zh:"1943 年 3 月 27 日以木材加工公司「飛驒木材加工」創立，1948 年改名柏木工，1952 年做出第一批溫莎椅。1984 年首度與外部設計師合作，推出鈴木正吾與 Barry Lazare 設計的椅子。2019 年收購當地另一家廠商高山 Woodworks。" } },
            { term:{ en:"Nissin Mokkō", ja:"日進木工", zh:"日進木工" },
              jp:"高山市",
              def:{
                en:"Founded on 22 October 1946 in Nada-machi, Takayama, by Kitamura Kihei and Kitamura Shigeru, it made school desks and chairs from 1947. Export folding chairs followed in 1958, when it moved to Kiryū-chō; dining chairs came in 1964, and its own-brand chairs and serving wagons in 1967. Its later designs have won a string of Good Design awards, from the SOLA and NAMI chairs in 2006 to STEP STEP, a stool for putting on shoes, in 2009.",
                ja:"一九四六年十月二十二日、北村喜兵衛と北村繁が高山の名田町で創業し、一九四七年から学校の机と椅子をつくった。一九五八年、桐生町に移って輸出用の折りたたみ椅子を手がけ、一九六四年に食卓椅子、一九六七年に自社ブランドの椅子とワゴンを出した。のちの意匠は、二〇〇六年のSOLAとNAMIの椅子から、二〇〇九年の靴をはくためのスツール「STEP STEP」まで、グッドデザイン賞を重ねている。",
                zh:"1946 年 10 月 22 日由北村喜兵衛與北村繁在高山名田町創立，1947 年起製作學校課桌椅。1958 年遷至桐生町並生產外銷折疊椅；1964 年推出餐椅，1967 年推出自有品牌椅子與餐車。後來的設計屢獲優良設計獎，從 2006 年的 SOLA 與 NAMI 椅，到 2009 年穿鞋用的凳子「STEP STEP」。" } },
            { term:{ en:"Kitani", ja:"キタニ", zh:"Kitani" },
              jp:"高山市",
              def:{
                en:"Founded in November 1967 to make urethane foam and upholstery, Kitani made furniture for hotels, restaurants and care facilities from about 1990. A study trip to Denmark in 1994 and years of repairing Danish chairs led to a licence for Finn Juhl's designs in June 1996 and production from that August. By 2015 it made 33 licensed pieces by six Danish designers, and it has shown at the Stockholm furniture fair; a sister company, Kitani Japan, dates from 1991.",
                ja:"一九六七年十一月、ウレタンフォームと椅子張りの会社として創業し、一九九〇年ごろからホテル、飲食店、福祉施設の家具を手がけた。一九九四年のデンマーク視察と長年のデンマークの椅子の修理が、一九九六年六月のフィン・ユールの意匠のライセンス契約と、同年八月からの生産につながった。二〇一五年には六人のデンマークのデザイナーによる三十三点をライセンス生産し、ストックホルムの家具見本市にも出品した。姉妹会社キタニジャパンは一九九一年にさかのぼる。",
                zh:"1967 年 11 月創立，原本生產聚氨酯泡棉與軟包，約 1990 年起承製飯店、餐廳與照護機構的家具。1994 年的丹麥考察之旅與多年修復丹麥椅子的經驗，促成 1996 年 6 月取得芬恩・尤爾設計的授權，並於同年 8 月投產。至 2015 年已授權生產六位丹麥設計師的 33 件作品，也曾參加斯德哥爾摩家具展；姊妹公司 Kitani Japan 成立於 1991 年。" } },
            { term:{ en:"Oak Village", ja:"オークヴィレッジ", zh:"Oak Village" },
              jp:"清見町",
              def:{
                en:"Set up in 1974 by five founders at Makigahora in Kiyomi, about 10 km from Takayama station, it held its first major exhibition at the Kinokuniya bookshop in Tokyo in 1978. Its three mottoes — a hundred-year thing from a hundred-year tree; from bowls to buildings; an acorn for every child — still define it, and its members' club plants and tends trees. In 2016 its wooden horse and a series of infant toys made from little-used broadleaves such as beech and mizume (a birch) won Good Design awards, and it began touring a wood-education caravan of toys and play equipment.",
                ja:"一九七四年、五人の創業者が高山駅から約10kmの清見町牧ヶ洞に設け、一九七八年に東京の紀伊国屋書店で初めての大きな展示を開いた。三つの言葉——百年かかって育った木は百年使えるものに、お椀から建物まで、子ども一人にどんぐり一粒——はいまもこの会社を形づくり、会員の集まりは木を植え、育てている。二〇一六年、ブナやミズメなど使われにくかった広葉樹による木馬と乳児の玩具のシリーズがグッドデザイン賞を受け、玩具と遊具をのせて各地をめぐる木育キャラバンも始めた。",
                zh:"1974 年由五位創辦人在距高山站約 10 公里的清見町牧之洞設立，1978 年在東京紀伊國屋書店舉辦首次大型展覽。三句信條——百年長成的樹，就做成能用百年的東西；從木碗到建築；每個孩子一顆橡實——至今仍定義著這家公司，其會員組織持續植樹育林。2016 年，以山毛櫸、水目（一種樺木）等少被利用的闊葉樹製作的木馬與嬰幼兒玩具系列獲得優良設計獎，並開始巡迴載著玩具與遊具的木育車隊。" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: PR Times release by Hida Sangyō on Okada Sanzō's decoration (2026); company histories of Kashiwa Mokkō, Nissin Mokkō and Kitani; Oak Village, “About” page; Gifu Prefecture product catalogue (Oak Village); Kyodo News PR Wire, Oak Village release (August 2016).",
            ja:"出典：飛騨産業による岡田贊三の叙勲に関するPR TIMESの発表（二〇二六年）、柏木工・日進木工・キタニの沿革、オークヴィレッジの会社紹介、岐阜県の製品紹介サイト（オークヴィレッジ）、共同通信PRワイヤーのオークヴィレッジの発表（二〇一六年八月）。",
            zh:"資料來源：飛驒產業就岡田贊三受勳發布的 PR TIMES 新聞稿（2026 年）；柏木工、日進木工與 Kitani 的公司沿革；Oak Village 公司介紹頁；岐阜縣產品介紹網站（Oak Village）；共同通信 PR Wire 的 Oak Village 新聞稿（2016 年 8 月）。" } }
      ] },
    { t:"section",
      id:"award",
      title:{ en:"The federation's design award", ja:"連合会のデザイン賞", zh:"聯合會的設計獎" },
      jp:"飛騨の家具アワード",
      body:[
        { t:"p",
          text:{
            en:"The federation also acts as a single client for new ideas. Its Hida no Kagu Award, a furniture design competition run on the Japan Design Net platform, asks for wooden furniture, lighting, building materials and accessories that use Japanese timber and can be made with Hida's techniques. The 2017 edition drew 576 entries, 352 from Japan and 224 from abroad; the jury awarded no grand prize that year, only an excellence prize for a leaf-shaped chair and two encouragement prizes for students. In 2019 sixteen member firms, among them Hida Sangyō, Kashiwa Mokkō, Nissin Mokkō, Oak Village and Ibata Interior, took part as the companies that would build prototypes; the grand prize was ¥300,000 with an assessment of the design for production, and the judges included the designer Kawakami Motomi alongside representatives of the firms.",
            ja:"連合会は新しい考えを求める一つの依頼主としても動く。ジャパンデザインネットの公募の場で開かれる家具デザインコンテスト「飛騨の家具アワード」は、国産材を使い飛騨の技でつくれる木の家具、照明、建材、小物を募る。二〇一七年の回には五百七十六点（国内三百五十二点、海外二百二十四点）が寄せられ、審査員はその年の最優秀賞を出さず、葉の形の椅子に優秀賞を、学生の二点に奨励賞を与えた。二〇一九年には、飛騨産業、柏木工、日進木工、オークヴィレッジ、イバタインテリアなど十六の組合員の会社が試作をつくる会社として加わった。最優秀賞は賞金三十万円と製品化の検討で、審査員にはデザイナーの川上元美と各社の代表が名を連ねた。",
            zh:"聯合會也扮演徵求新點子的共同委託者。它透過 Japan Design Net 平台舉辦的家具設計競賽「飛驒家具獎」，徵求使用日本國產材、能以飛驒技術製作的木製家具、燈具、建材與小物。2017 年那屆共收到 576 件作品（日本國內 352 件、海外 224 件）；評審當年未頒最優秀獎，只頒出一件葉形椅子的優秀獎與兩件學生作品的獎勵獎。2019 年，飛驒產業、柏木工、日進木工、Oak Village、Ibata Interior 等 16 家會員公司參與，擔任製作樣品的廠商；最優秀獎為獎金 30 萬日圓並評估商品化，評審包括設計師川上元美與各公司代表。" } },
        { t:"tiny",
          text:{
            en:"Sources: Japan Design Net competition pages, Hida no Kagu Award 2017 results and 2019 call for entries.",
            ja:"出典：ジャパンデザインネット公募ページ（飛騨の家具アワード二〇一七年の結果、二〇一九年の募集）。",
            zh:"資料來源：Japan Design Net 競賽頁面（飛驒家具獎 2017 年結果與 2019 年徵件）。" } }
      ] },
    { t:"related",
      items:[
        { href:"furniture.html", why:{ en:"The factories of Hida.", ja:"飛騨の工場。", zh:"飛驒的工廠。" } },
        { href:"makers.html", why:{ en:"A directory of makers and places.", ja:"つくり手と場所の一覧。", zh:"工匠與地點名錄。" } },
        { href:"learning.html",
          why:{ en:"Courses and workshops open to visitors.", ja:"訪れる人に開かれた講座とワークショップ。", zh:"對訪客開放的課程與工作坊。" } },
        { href:"buying.html", why:{ en:"Buying and commissioning wooden things.", ja:"木のものを買い、頼む。", zh:"購買與委託木製品。" } }
      ] }
  ] };

/* ---- -------------------------------------------- chairs */
GIFU.pages["chairs"] = { kicker:{ en:"Wood Craft · 04", ja:"木の工芸 · 04", zh:"木作工藝 · 04" },
  title:{ en:"Chairs", ja:"椅子", zh:"椅子" },
  jp:"腰掛けの文化と飛騨の名作",
  lede:{
    en:"Until the twentieth century most Japanese sat on the floor. Chairs came with Western dress, offices, schools and, after the war, with the dining-kitchen of the new public housing estates, where families began to eat at tables. Hida's furniture industry grew up with that change and made the chair its speciality. This page looks at the chair as an object of engineering and of the body — how it is dimensioned, joined, tested — and at the Hida chairs and designers that have become classics.",
    ja:"二十世紀まで、日本人の多くは床に座っていた。椅子は、洋服、事務所、学校とともに、そして戦後は新しい公営住宅のダイニングキッチン——家族が食卓で食べはじめた場所——とともにやって来た。飛騨の家具産業はその変化とともに育ち、椅子を得意とした。この頁は、椅子を工学と身体の対象として——どう寸法を決め、組み、試験するか——見たうえで、名作となった飛騨の椅子とデザイナーを紹介する。",
    zh:"直到二十世紀，大多數日本人都坐在地板上。椅子隨著西式服裝、辦公室、學校而來，戰後更隨著新公營住宅的「餐廚合一」空間普及，家庭開始圍桌用餐。飛驒家具產業伴隨這項變化成長，並以椅子為專長。本頁把椅子當作工程與身體的對象——如何決定尺寸、如何接合、如何測試——並介紹成為經典的飛驒椅子與設計師。" },
  body:[
    { t:"section",
      id:"body",
      title:{ en:"A chair fits a body", ja:"椅子は体に合わせる", zh:"椅子配合身體" },
      jp:"座面高・差尺",
      body:[
        { t:"p",
          text:{
            en:"The most important dimension of a dining chair is the height of the seat, which should allow the feet to rest flat on the floor with the thighs level: for most Japanese adults about 40–43 centimetres, a little lower than in Europe. The second is the relationship between chair and table. Japanese furniture makers use the term <em>sashaku</em> for the difference between the height of the table top and the height of the seat; a comfortable difference is about a third of the sitter's seated height — roughly 27–30 centimetres. A table 70 centimetres high thus needs a seat of about 40–43. Seat depth, the angle between seat and back, and the curve of the back that supports the lower spine complete the picture.",
            ja:"食卓の椅子で最も大事な寸法は座面の高さで、足の裏が床にぴたりとつき、腿が水平になるのがよい。日本の大人の多くではおよそ四十〜四十三センチで、ヨーロッパより少し低い。二つ目は椅子と机の関係である。日本の家具職人は、天板の高さと座面の高さの差を「差尺」と呼ぶ。心地よい差は座る人の座高のおよそ三分の一——ほぼ二十七〜三十センチ——である。だから高さ七十センチの机には、四十〜四十三センチほどの座面が要る。座の奥行き、座と背のあいだの角度、腰を支える背の曲線が、全体を仕上げる。",
            zh:"餐椅最重要的尺寸是座高：應讓雙腳平放地面、大腿保持水平；對多數日本成人而言約 40–43 公分，略低於歐洲。第二個是椅子與桌子的關係。日本家具師傅把桌面高度與座面高度之差稱為「差尺」；舒適的差值約為坐者坐高的三分之一——大約 27–30 公分。因此一張高 70 公分的桌子，需要約 40–43 公分的座高。座深、座面與椅背的夾角，以及支撐下背部的椅背曲線，構成完整的圖像。" } },
        { t:"figure",
          caption:{
            en:"Key dimensions of a dining chair and table as used by Japanese makers. Sashaku — the table-to-seat difference — is roughly one third of seated height.",
            ja:"日本のつくり手が使う食卓の椅子と机の主な寸法。差尺——机と座の高さの差——は座高のおよそ三分の一。",
            zh:"日本工匠使用的餐椅與餐桌主要尺寸。差尺——桌面與座面的高度差——約為坐高的三分之一。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 300" role="img">', g = 270, k = 2.6;
            s += F.text(20, 28, lang==="en"?"CHAIR AND TABLE":(lang==="ja"?"椅子と机":"椅子與桌子"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            s += '<line x1="40" y1="'+g+'" x2="720" y2="'+g+'" stroke="#8B857C"/>';
            // table height 70cm
            var th = 70*k, sh = 42*k;
            s += '<rect x="380" y="'+(g-th)+'" width="240" height="10" fill="#EDE5D2" stroke="#7C6B52"/>';
            s += '<rect x="400" y="'+(g-th+10)+'" width="10" height="'+(th-10)+'" fill="#EDE5D2" stroke="#7C6B52"/><rect x="590" y="'+(g-th+10)+'" width="10" height="'+(th-10)+'" fill="#EDE5D2" stroke="#7C6B52"/>';
            // chair
            s += '<rect x="230" y="'+(g-sh)+'" width="110" height="8" fill="#E0E6DB" stroke="#7C6B52"/>';
            s += '<rect x="236" y="'+(g-sh+8)+'" width="8" height="'+(sh-8)+'" fill="#E0E6DB" stroke="#7C6B52"/><rect x="326" y="'+(g-sh+8)+'" width="8" height="'+(sh-8)+'" fill="#E0E6DB" stroke="#7C6B52"/>';
            s += '<path d="M236 '+(g-sh)+' L220 '+(g-sh-110)+' L230 '+(g-sh-112)+' L246 '+(g-sh)+' Z" fill="#E0E6DB" stroke="#7C6B52"/>';
            // dimension lines
            function dim(x, y1, y2, t){ return '<line x1="'+x+'" y1="'+y1+'" x2="'+x+'" y2="'+y2+'" stroke="#55504A"/><line x1="'+(x-5)+'" y1="'+y1+'" x2="'+(x+5)+'" y2="'+y1+'" stroke="#55504A"/><line x1="'+(x-5)+'" y1="'+y2+'" x2="'+(x+5)+'" y2="'+y2+'" stroke="#55504A"/>' + F.text(x+8, (y1+y2)/2+4, t, { size:10.5, fill:"#201E1B" }); }
            s += '<line x1="112" y1="'+(g-sh)+'" x2="230" y2="'+(g-sh)+'" stroke="#CDC6B9" stroke-dasharray="4 3"/>';
            s += dim(112, g, g-sh, lang==="en"?"seat 40–43 cm":(lang==="ja"?"座面 40〜43cm":"座高 40–43cm"));
            s += dim(640, g, g-th, lang==="en"?"table ≈ 70 cm":(lang==="ja"?"天板 約70cm":"桌高約 70cm"));
            s += dim(500, g-sh, g-th, lang==="en"?"sashaku 27–30 cm":(lang==="ja"?"差尺 27〜30cm":"差尺 27–30cm"));
            s += '<line x1="340" y1="'+(g-sh)+'" x2="510" y2="'+(g-sh)+'" stroke="#CDC6B9" stroke-dasharray="4 3"/>';
            s += F.text(40, 60, lang==="en"?"Seat height ≈ lower-leg length":(lang==="ja"?"座面の高さ ≈ 下腿の長さ":"座高 ≈ 小腿長"), { size:10.5, fill:"#55504A" });
            s += F.text(40, 76, lang==="en"?"Sashaku ≈ seated height ÷ 3":(lang==="ja"?"差尺 ≈ 座高 ÷ 3":"差尺 ≈ 坐高 ÷ 3"), { size:10.5, fill:"#55504A" });
            return s + '</svg>';
          } }
      ] },
    { t:"section",
      id:"engineering",
      title:{ en:"The hardest piece of furniture", ja:"いちばん難しい家具", zh:"最難做的家具" },
      jp:"強度と接合",
      body:[
        { t:"p",
          text:{
            en:"Furniture makers often say the chair is the most difficult thing they make. It is small and light, yet it must carry a person who leans back on two legs, drags it across the floor and sits on it suddenly, thousands of times a day for decades. The critical points are the joints between legs, seat rails and back, which are levered apart by every movement. Hida's makers join them with mortise and tenon or with dowels, glued and often reinforced with corner blocks; bentwood chairs rely on the continuity of the bent grain to avoid joints altogether at the most stressed points. Chairs sold under the Hida furniture trademark must pass strength and durability tests based on Japanese Industrial Standards or ISO, in which machines load the seat, push the back and rock the legs tens of thousands of times.",
            ja:"家具職人は、椅子こそいちばん難しいものだとよく言う。小さく軽いのに、後ろの二本の脚で反りかえり、床の上を引きずり、急に腰をおろす人を、一日に何千回、何十年も支えねばならない。要となるのは脚、座枠、背のあいだの仕口で、あらゆる動きがそれをてこの力で引き離そうとする。飛騨のつくり手はそれをほぞやダボで組み、接着し、しばしば隅木で補う。曲木の椅子は、最も力のかかる箇所で曲げた木目のつながりに頼り、仕口そのものを避ける。飛騨の家具の商標で売られる椅子は、JISやISOにもとづく強度と耐久性の試験——機械が座に荷をかけ、背を押し、脚を何万回もゆする——に合格せねばならない。",
            zh:"家具師傅常說椅子是他們做過最難的東西。它小而輕，卻必須承受一個人向後仰靠在兩隻椅腳上、在地板上拖行、突然坐下——每天數千次、持續數十年。關鍵在於椅腳、座框與椅背之間的接合，每個動作都會以槓桿之力把它們撬開。飛驒工匠以榫卯或木釘接合、上膠，並常以角木補強；曲木椅則在受力最大處依靠彎曲紋理的連續性，完全避開接合。以飛驒家具商標販售的椅子，必須通過依 JIS 或 ISO 的強度與耐久測試：機器對座面施壓、推椅背、搖晃椅腳數萬次。" } }
      ] },
    { t:"section",
      id:"classics",
      title:{ en:"Hida classics", ja:"飛騨の名作", zh:"飛驒經典" },
      jp:"ロングセラー",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"The bentwood chairs of the 1920s–30s", ja:"一九二〇〜三〇年代の曲木の椅子", zh:"1920–30 年代的曲木椅" },
              jp:"中央木工・飛騨木工",
              def:{
                en:"The first Hida chairs followed Viennese models: bent beech back hoops and legs, a round seat, assembled with screws. The triangle chair registered in 1931 was one of the company's own designs. These were the chairs exported to the United States from 1935.",
                ja:"最初の飛騨の椅子はウィーンの手本にならった。曲げたブナの背の輪と脚、丸い座、ねじで組む。一九三一年に登録された三角椅子は会社自身の意匠の一つだった。一九三五年からアメリカに輸出されたのは、こうした椅子である。",
                zh:"最早的飛驒椅仿效維也納樣式：彎曲的山毛櫸椅背環與椅腳、圓形座面，以螺絲組裝。1931 年登錄的三角椅是公司自行設計的作品之一。自 1935 年起外銷美國的，就是這類椅子。" } },
            { term:{ en:"Windsor chairs", ja:"ウィンザーチェア", zh:"溫莎椅" },
              jp:"柏木工",
              def:{
                en:"Kashiwa Mokkō began making Windsor chairs — English country chairs with a solid seat into which legs and spindles are socketed — in 1952, and the type became a staple of Hida production, adapted to Japanese proportions.",
                ja:"柏木工は一九五二年にウィンザーチェア——脚と背の棒を厚い座に差しこむイギリスの田舎の椅子——をつくりはじめ、この型は日本人の体に合わせて改められ、飛騨の生産の柱の一つとなった。",
                zh:"柏木工於 1952 年開始製作溫莎椅——椅腳與椅背細桿插入厚實座板的英國鄉村椅——此類型後來依日本人體型調整比例，成為飛驒生產的主力之一。" } },
            { term:{ en:"Mountain names", ja:"山の名", zh:"以山為名" },
              jp:"モンブラン・アイガー",
              def:{
                en:"Hida Sangyō named several ranges after mountains: chair No. 725 “Montblanc” (1966) received a Good Design Long Life award in 1984, recognition for a design sold continuously for decades; No. 713 “Eiger” won a Good Design award.",
                ja:"飛騨産業はいくつかのシリーズに山の名をつけた。椅子No.725「モンブラン」（一九六六年）は一九八四年にロングライフデザイン賞を受けた。何十年も売られつづけた意匠への表彰である。No.713「アイガー」はグッドデザイン賞を得た。",
                zh:"飛驒產業以山名為數個系列命名：No.725「Montblanc」椅（1966）於 1984 年獲長銷設計獎，表彰其數十年持續銷售；No.713「Eiger」則獲優良設計獎。" } },
            { term:{ en:"Light chairs", ja:"軽い椅子", zh:"輕量椅" },
              jp:"日進木工",
              def:{
                en:"Nissin Mokkō is known for light, elegant chairs; one of its models weighs only about 3.8 kilograms and reportedly took three years to develop, the difficulty being to remove material without losing strength.",
                ja:"日進木工は軽く優美な椅子で知られる。あるモデルはわずか三・八キロほどで、開発に三年かかったという。強さを失わずに材を削ることが難しさだった。",
                zh:"日進木工以輕巧優雅的椅子聞名；其中一款僅約 3.8 公斤，據說花了三年開發，難處在於減料的同時不犧牲強度。" } },
            { term:{ en:"A Danish chair made in Takayama", ja:"高山でつくるデンマークの椅子", zh:"在高山製作的丹麥椅" },
              jp:"No.53",
              def:{
                en:"Kitani, described in the Japanese press as the only company in Japan licensed to make Finn Juhl's furniture, makes his No. 53 chair by its own account; years of repairing and studying Danish chairs led to a licence from the holder of the designer's rights in 1996. The company also makes licensed designs by other Danish designers.",
                ja:"キタニは、国内の報道でフィン・ユールの家具のライセンス生産を許された日本で唯一の会社と紹介され、同社によれば彼のNo.53チェアをつくっている。デンマークの椅子を何年も修理し研究したことが、一九九六年、デザイナーの権利の継承者からのライセンスにつながった。ほかのデンマークのデザイナーの意匠もライセンスでつくる。",
                zh:"日本媒體介紹 Kitani 為日本唯一獲准授權生產 Finn Juhl 家具的公司，據該公司表示，其產品包括 No.53 椅；多年修復與研究丹麥椅子的經驗，使它在 1996 年獲得設計師作品權利繼承人的授權。公司也授權生產其他丹麥設計師的作品。" } },
            { term:{ en:"Ergonomic curves", ja:"人間工学の曲面", zh:"人體工學曲面" },
              jp:"CHICチェア",
              def:{
                en:"Computer-controlled machining lets makers carve complex three-dimensional backs from solid wood. Kashiwa Mokkō's CHIC chair of 2015 is an example: a back curved in three dimensions to support the spine, cut from solid timber.",
                ja:"コンピュータ制御の加工で、無垢材から複雑な三次元の背を削り出せるようになった。柏木工の二〇一五年のCHICチェアはその例で、背骨を支えるよう三次元に曲げた背を無垢材から削り出す。",
                zh:"電腦數控加工讓工匠能從實木中雕出複雜的三維椅背。柏木工 2015 年的 CHIC 椅即為一例：以實木切削出三維曲面椅背以支撐脊椎。" } }
          ] }
      ] },
    { t:"section",
      id:"making",
      title:{ en:"How a Hida chair is made", ja:"飛騨の椅子のつくり方", zh:"飛驒椅如何製作" },
      jp:"工程",
      body:[
        { t:"steps",
          items:[
            { title:{ en:"Timber", ja:"材", zh:"木料" },
              text:{
                en:"Oak, beech, ash, walnut or cherry — increasingly Japanese sugi or local broadleaves — dried to about 8–10 per cent.",
                ja:"ナラ、ブナ、タモ、ウォルナット、チェリー——しだいに日本のスギや地元の広葉樹も——を八〜十パーセントほどまで乾かす。",
                zh:"橡木、山毛櫸、梣木、胡桃木或櫻桃木——愈來愈多使用日本柳杉或在地闊葉材——乾燥至約 8–10%。" } },
            { title:{ en:"Rough cutting", ja:"木取り", zh:"粗裁" },
              text:{
                en:"Parts are laid out on the boards to avoid knots and follow the grain, and cut oversize.",
                ja:"節を避け木目に沿うよう板に部材を割りつけ、大きめに切る。",
                zh:"在板材上配置構件，避開節疤並順著紋理，裁切時預留餘量。" } },
            { title:{ en:"Bending or shaping", ja:"曲げ・成形", zh:"彎曲或成形" },
              text:{
                en:"Bent parts are steamed and bent; shaped parts are cut on CNC routers or copying lathes.",
                ja:"曲げる部材は蒸して曲げ、成形する部材はNCルーターや倣い旋盤で削る。",
                zh:"彎曲件蒸煮後彎曲；成形件以 CNC 銑床或仿形車床加工。" } },
            { title:{ en:"Joinery", ja:"仕口加工", zh:"接合加工" },
              text:{
                en:"Mortises, tenons and dowel holes machined to fractions of a millimetre.",
                ja:"ほぞ穴、ほぞ、ダボ穴を、ミリ以下の精度で加工する。",
                zh:"卯眼、榫頭與木釘孔的加工精度達零點幾公釐。" } },
            { title:{ en:"Sanding and assembly", ja:"研磨と組立", zh:"研磨與組裝" },
              text:{
                en:"Much of this is still done by hand; the frame is glued and clamped in jigs.",
                ja:"その多くはいまも手で。枠は治具のなかで接着し締める。",
                zh:"多數仍以手工進行；框架在治具中上膠夾緊。" } },
            { title:{ en:"Finishing and upholstery", ja:"塗装と張り", zh:"塗裝與包覆" },
              text:{
                en:"Oil, urethane or lacquer finishes; seats upholstered in fabric or leather, or left in wood.",
                ja:"オイル、ウレタン、ラッカーの塗装。座は布や革で張るか、木のまま。",
                zh:"塗上油、聚氨酯或清漆；座面以布料或皮革包覆，或保留木面。" } }
          ] },
        { t:"note",
          label:{ en:"The woodpecker", ja:"キツツキ", zh:"啄木鳥" },
          text:{
            en:"For decades Hida Sangyō's chairs carried a woodpecker (<em>kitsutsuki</em>) as their mark — a bird that lives by working wood. In 2021, after its centenary, the company replaced it with a new logo reading simply “HIDA”.",
            ja:"何十年ものあいだ、飛騨産業の椅子は、木に働きかけて生きる鳥、キツツキをしるしとしていた。創業百年のあとの二〇二一年、会社はそれを「HIDA」とだけ記した新しいロゴに替えた。",
            zh:"數十年來，飛驒產業的椅子以啄木鳥作為標誌——一種靠「加工」木頭維生的鳥。創業百年後的 2021 年，公司改用只寫著「HIDA」的新標誌。" } }
      ] },
    { t:"section",
      id:"windsor",
      title:{ en:"How the Windsor came to Japan", ja:"ウィンザーチェアが日本に来るまで", zh:"溫莎椅如何來到日本" },
      jp:"ウィンザーチェア",
      body:[
        { t:"p",
          text:{
            en:"The Windsor chair appeared in England early in the eighteenth century: a chair made entirely of wood, with legs and back spindles fitted directly into a thick solid seat rather than into a frame. It reached Japan through the folk-craft (<em>mingei</em>) movement. In 1929 its founder Yanagi Sōetsu and the potter Hamada Shōji travelled in England and bought about three hundred chairs, which were exhibited and sold in Tokyo and did much to make the type known. Bernard Leach, the dyer Serizawa Keisuke and Ikeda Sanshirō, who led the Matsumoto folk-furniture makers in neighbouring Nagano, all prized them, and craftsmen across the country began to collect and copy them. A 2017 exhibition at the Japan Folk Crafts Museum in Tokyo compared the Japanese regard for the Windsor to the reverence once given to Korean tea bowls: a foreign everyday object adopted as a model of plain beauty.",
            ja:"ウィンザーチェアは十八世紀の初めにイギリスで生まれた。すべて木でつくられ、脚と背の棒を枠ではなく厚い一枚の座板にじかに差しこむ椅子である。日本へは民芸運動を通じて入った。一九二九年、運動を興した柳宗悦と陶芸家の濱田庄司はイギリスを旅して約三百脚の椅子を買い、それらは東京で展示され頒布されて、この形を広めるのに大きな役割を果たした。バーナード・リーチ、染色家の芹沢銈介、隣の長野で松本の民芸家具づくりを率いた池田三四郎らがこれを高く評価し、各地の職人が集め、写した。二〇一七年に東京の日本民芸館で開かれた展覧会は、日本人のウィンザーへの思い入れを、かつての朝鮮の茶碗への敬意になぞらえた。異国の日用品が、飾らない美の手本として迎えられたのである。",
            zh:"溫莎椅於十八世紀初誕生於英國：一種全木製的椅子，椅腳與椅背直條不是裝在框架上，而是直接插入一塊厚實的實木座板。它經由民藝運動傳入日本。1929 年，民藝運動創始人柳宗悅與陶藝家濱田庄司在英國旅行，買下約 300 張椅子，在東京展示並分售，大大推廣了這種椅型。伯納德・李奇、染色家芹澤銈介，以及在鄰縣長野帶領松本民藝家具製作的池田三四郎都十分推崇，各地工匠也紛紛收藏與仿製。2017 年東京日本民藝館的展覽，把日本人對溫莎椅的推崇比作昔日對朝鮮茶碗的敬重：一件異國日用品，被奉為樸素之美的典範。" } },
        { t:"p",
          text:{
            en:"Hida took the Windsor into industry. Kashiwa Mokkō made its first Windsor chairs in 1952, and Hida Sangyō's Hotaka series of 1969, with lathe-turned legs and spindles, is still in production more than half a century later; the company presents it as furniture that is passed through two and three generations, and in 1995 the Hotaka chairs were sold through the household magazine <em>Kurashi no Techō</em>. The type suits Hida well: it needs the turning and steam-bending skills that the town's bentwood factories have practised since 1920.",
            ja:"飛騨はウィンザーを工業にとりこんだ。柏木工は一九五二年に最初のウィンザーチェアをつくり、飛騨産業が一九六九年に出した、轆轤で挽いた脚と背棒をもつ「穂高」シリーズは、半世紀以上たったいまもつくられている。会社はこれを二代、三代と受け継がれる家具と紹介し、一九九五年には穂高の椅子が生活雑誌『暮しの手帖』を通じて売られた。この形は飛騨によく合う。町の曲木工場が一九二〇年から磨いてきた挽きものと蒸し曲げの技を必要とするからである。",
            zh:"飛驒把溫莎椅帶進了工業生產。柏木工於 1952 年做出第一批溫莎椅；飛驒產業 1969 年推出、以車床旋製椅腳與直條的「穗高」系列，半個多世紀後仍在生產，公司稱之為可傳承兩代、三代的家具；1995 年，穗高椅還透過生活雜誌《生活手帖》（暮しの手帖）販售。這種椅型很適合飛驒：它需要車旋與蒸汽彎曲的技術，而這正是當地曲木工廠自 1920 年以來磨練的本事。" } },
        { t:"h3", text:{ en:"Building a Windsor, step by step", ja:"ウィンザーを組む手順", zh:"溫莎椅的製作步驟" }, jp:"座繰りと差し込み" },
        { t:"steps",
          items:[
            { title:{ en:"Shape the seat", ja:"座を彫る", zh:"雕出座板" },
              jp:"座繰り",
              meta:{ en:"The structural hub", ja:"構造の要", zh:"結構核心" },
              text:{
                en:"A thick plank, often glued up from two or three boards, is hollowed into a saddle shape that fits the body. With no seat rails, the seat itself must hold every leg and spindle, so it is the thickest part of the chair.",
                ja:"二、三枚を矧いだ厚い板を、体に沿う鞍の形に彫りくぼめる（座繰り）。座枠がないので、座そのものがすべての脚と背棒を受けとめる。椅子でいちばん厚い部材である。",
                zh:"一塊厚板（常由兩三塊板拼成）被挖成貼合身體的馬鞍形。由於沒有座框，座板本身必須承接所有椅腳與直條，因此是整張椅子最厚的部件。" } },
            { title:{ en:"Turn legs and spindles", ja:"脚と背棒を挽く", zh:"車旋椅腳與直條" },
              jp:"挽きもの",
              meta:{ en:"Lathe", ja:"轆轤", zh:"車床" },
              text:{
                en:"Legs, stretchers and spindles are turned; traditionally their ends are made slightly drier than the seat so that, as they take up moisture, they swell tight in their holes.",
                ja:"脚、貫、背棒を挽く。昔ながらのやり方では、端を座より少し乾かしておき、湿気を吸ってふくらみ、穴のなかで締まるようにする。",
                zh:"椅腳、橫撐與直條以車床旋製；傳統做法是讓端頭刻意比座板更乾一些，使其日後吸濕膨脹，在孔中咬得更緊。" } },
            { title:{ en:"Bore at angles", ja:"角度をつけて穴をあける", zh:"斜角鑽孔" },
              jp:"穴あけ",
              meta:{ en:"Jigs or by eye", ja:"治具または目で", zh:"治具或目測" },
              text:{
                en:"Holes for the legs are bored up into the seat at a splay and rake, and holes for the spindles down into it; the angles decide both the stance and the comfort of the chair.",
                ja:"脚の穴は座の下から開きと傾きをつけて、背棒の穴は上からあける。その角度が椅子の構えと座り心地を決める。",
                zh:"椅腳孔從座板下方以外撇與前後傾角鑽入，直條孔則從上方鑽入；這些角度同時決定椅子的姿態與舒適度。" } },
            { title:{ en:"Bend the bow", ja:"笠木を曲げる", zh:"彎曲椅背弓" },
              jp:"曲木",
              meta:{ en:"Steam", ja:"蒸し曲げ", zh:"蒸汽彎曲" },
              text:{
                en:"The back bow or arm is steamed and bent on a form, then left to set and dry before it is fitted over the spindles.",
                ja:"背の弓や肘木を蒸して型に沿って曲げ、形が定まり乾くまで置いてから背棒の上に納める。",
                zh:"椅背的弓形或扶手經蒸汽軟化後沿模具彎曲，待其定形乾燥後再套到直條上。" } },
            { title:{ en:"Glue and wedge", ja:"接着と楔", zh:"上膠與打楔" },
              jp:"楔締め",
              meta:{ en:"Assembly", ja:"組立", zh:"組裝" },
              text:{
                en:"Legs and spindles are glued in, and where they pass through the seat or bow a thin wedge is driven into a saw cut in the end, spreading it so that it cannot pull out.",
                ja:"脚と背棒を接着して差しこみ、座や笠木を貫くところでは、端の挽き割りに薄い楔を打ちこんで広げ、抜けないようにする。",
                zh:"椅腳與直條上膠插入；凡貫穿座板或椅背弓之處，便在端頭鋸縫中打入薄楔使其撐開，再也拔不出來。" } }
          ] }
      ] },
    { t:"section",
      id:"testing",
      title:{ en:"Measured and tested", ja:"はかり、試す", zh:"量測與檢驗" },
      jp:"JISの椅子試験",
      body:[
        { t:"p",
          text:{
            en:"In Japan the tests a chair must survive are set out in Japanese Industrial Standards. JIS S 1203 (1998 edition), whose title — furniture, chairs and stools, determination of strength and durability — matches the international standard ISO 7173, covers static and repeated loads on the seat, the back and the legs. A separate standard, JIS S 1204, deals with stability. In its forward-stability test a vertical force of 600 N, about 61 kgf, is applied 50 mm from the front edge of the seat, the way a person perches on the edge to stand up; the chair must not tip. In 2019 the National Consumer Affairs Center reported a chair that began to lift its back legs at only 310 N, about half the required force, after a user fell.",
            ja:"日本では、椅子が耐えるべき試験は日本産業規格（JIS）に定められている。JIS S 1203（一九九八年版）は、表題「家具—いす及びスツール—強度と耐久性の試験方法」が国際規格ISO 7173と対応し、座、背、脚にかける静的な荷重と繰り返し荷重を扱う。安定性は別の規格JIS S 1204が扱う。その前方安定性の試験では、立ちあがろうとして座の縁に浅く腰かけたときのように、座の前縁から50mmの位置に600N（約61kgf）の垂直の力をかけ、椅子が倒れてはならない。二〇一九年、国民生活センターは、利用者が転倒した椅子が、求められる力の半分ほどの310Nで後脚を浮かせはじめたと報告している。",
            zh:"在日本，椅子必須通過的試驗由日本工業規格（JIS）規定。JIS S 1203（1998 年版）的標題「家具－椅子與凳子－強度與耐久性測定」與國際標準 ISO 7173 相對應，涵蓋施加於座面、椅背與椅腳的靜態與反覆荷重。穩定性則由另一項標準 JIS S 1204 規範：其前傾穩定性試驗在距座面前緣 50 公釐處施加 600 牛頓（約 61 公斤力）的垂直力，模擬人要起身時淺坐在座緣的情形，椅子不得翻倒。2019 年日本國民生活中心報告，一張曾使使用者跌倒的椅子，只受 310 牛頓——約規定值的一半——後腳便開始離地。" } },
        { t:"p",
          text:{
            en:"Standards are a floor, not a guarantee. Researchers at the Shizuoka Prefectural Industrial Research Institute noted in FY2020 that chairs passing JIS S 1203 sometimes broke in use, and measured what happens when a person drops onto a seat: a peak force of roughly 600 N reached within about 50 milliseconds, which they reproduced with a hammer falling 45 mm. In Hida, the Gifu Prefectural Research Institute for Human Life Technology in Takayama carries out commissioned testing of wood and furniture for local makers, and chairs sold under the Hida furniture trademark must be tested to JIS or ISO.",
            ja:"規格は下限であって保証ではない。静岡県工業技術研究所の研究者は二〇二〇年度、JIS S 1203に合格した椅子が使用中に壊れることがあると指摘し、人が座にどすんと腰をおろすときの力を測った。約50ミリ秒のうちに約600Nの山に達し、彼らはそれを45mmの高さから落とすハンマーで再現した。飛騨では、高山にある岐阜県生活技術研究所が地元のつくり手のために木材と家具の依頼試験を行い、飛騨の家具の商標で売られる椅子はJISかISOの試験を受けねばならない。",
            zh:"標準是底線，而非保證。靜岡縣工業技術研究所的研究人員於 2020 年度指出，通過 JIS S 1203 的椅子有時仍會在使用中損壞，並量測了人重重坐下時的力：約 50 毫秒內達到約 600 牛頓的峰值，他們以從 45 公釐高處落下的鎚子重現了這一衝擊。在飛驒，位於高山的岐阜縣生活技術研究所為當地廠商承接木材與家具的委託試驗；以飛驒家具商標販售的椅子必須依 JIS 或 ISO 接受測試。" } },
        { t:"figure",
          caption:{
            en:"Schematic of the main loads in Japanese chair tests (not to scale). Forward-stability figures from JIS S 1204 as cited by the National Consumer Affairs Center (2019); impact figure from the Shizuoka Prefectural Industrial Research Institute (FY2020).",
            ja:"日本の椅子試験でかける主な荷重の模式図（縮尺不同）。前方安定性の数値は国民生活センター（二〇一九年）が引くJIS S 1204による。衝撃の数値は静岡県工業技術研究所（二〇二〇年度）による。",
            zh:"日本椅子試驗主要荷重示意圖（未依比例）。前傾穩定性數值引自日本國民生活中心（2019 年）所述 JIS S 1204；衝擊數值來自靜岡縣工業技術研究所（2020 年度）。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 320" role="img">', g = 280;
            s += F.text(20, 28, lang==="en"?"HOW A CHAIR IS TESTED":(lang==="ja"?"椅子の試し方":"椅子如何受測"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            s += '<line x1="40" y1="'+g+'" x2="340" y2="'+g+'" stroke="#8B857C"/>';
            // chair (side view)
            s += '<rect x="110" y="180" width="160" height="10" fill="#EDE5D2" stroke="#7C6B52"/>';
            s += '<rect x="118" y="190" width="9" height="'+(g-190)+'" fill="#EDE5D2" stroke="#7C6B52"/><rect x="254" y="190" width="9" height="'+(g-190)+'" fill="#EDE5D2" stroke="#7C6B52"/>';
            s += '<path d="M110 180 L90 66 L100 64 L120 180 Z" fill="#EDE5D2" stroke="#7C6B52"/>';
            function arr(x1,y1,x2,y2){ var a=Math.atan2(y2-y1,x2-x1), h=8; return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="#55504A" stroke-width="1.5"/><path d="M'+x2+' '+y2+' L'+(x2-h*Math.cos(a-0.4))+' '+(y2-h*Math.sin(a-0.4))+' L'+(x2-h*Math.cos(a+0.4))+' '+(y2-h*Math.sin(a+0.4))+' Z" fill="#55504A"/>'; }
            function num(x,y,n){ return '<circle cx="'+x+'" cy="'+y+'" r="9" fill="#F5F3ED" stroke="#7C6B52"/>' + F.text(x, y+4, String(n), { size:10.5, fill:"#201E1B", anchor:"middle" }); }
            s += arr(205, 130, 205, 176) + num(205, 118, 1);
            s += arr(168, 100, 108, 100) + num(180, 100, 2);
            s += arr(250, 120, 250, 176) + num(250, 108, 3);
            s += '<line x1="250" y1="165" x2="270" y2="165" stroke="#ADA79E"/>' + F.text(282, 158, "50 mm", { size:9.5, fill:"#55504A" });
            s += arr(330, 185, 276, 185) + num(318, 205, 4);
            // legend on right
            var lx = 372, items = [
              { en:"Seat: static and repeated vertical loads (JIS S 1203)", ja:"座：静的な荷重と繰り返しの垂直荷重（JIS S 1203）", zh:"座面：靜態與反覆垂直荷重（JIS S 1203）" },
              { en:"Back: pushed backwards, statically and repeatedly (JIS S 1203)", ja:"背：うしろへ押す。静的と繰り返し（JIS S 1203）", zh:"椅背：向後推，靜態與反覆（JIS S 1203）" },
              { en:"Forward stability: 600 N (≈ 61 kgf) applied 50 mm from the front edge must not tip the chair (JIS S 1204)", ja:"前方安定性：前縁から50mmに600N（約61kgf）をかけても倒れないこと（JIS S 1204）", zh:"前傾穩定性：距前緣 50 公釐處施加 600 牛頓（約 61 公斤力），椅子不得翻倒（JIS S 1204）" },
              { en:"Legs: pushed forwards and sideways at seat level (JIS S 1203)", ja:"脚：座の高さで前と横へ押す（JIS S 1203）", zh:"椅腳：在座面高度向前與向側推（JIS S 1203）" }
            ];
            var yy = 70;
            for (var i = 0; i < items.length; i++) {
              s += num(lx, yy - 4, i+1);
              var t = L(items[i]);
              s += F.text(lx + 18, yy, t, { size:10.5, fill:"#201E1B", max:(lang==="en"?64:58), lh:13 });
              yy += (t.length > (lang==="en"?64:29) ? 44 : 30);
            }
            s += '<line x1="'+lx+'" y1="'+(yy+2)+'" x2="740" y2="'+(yy+2)+'" stroke="#E1DCD2"/>';
            s += F.text(lx, yy + 22, L({ en:"Sitting down hard: peak ≈ 600 N within ≈ 50 ms — why chairs that pass the static tests can still fail in use.", ja:"どすんと座る：約50ミリ秒で約600Nの山。静的な試験に通った椅子が使用中に壊れうる理由。", zh:"重重坐下：約 50 毫秒內達到約 600 牛頓峰值——這說明了通過靜態試驗的椅子為何仍可能在使用中損壞。" }), { size:10.5, fill:"#55504A", max:62, lh:13 });
            return s + '</svg>';
          } },
        { t:"tiny",
          text:{
            en:"Sources: National Consumer Affairs Center of Japan (case report, 12 December 2019); Shizuoka Prefectural Industrial Research Institute (technical case report, FY2020); Japanese Standards Association catalogue (JIS S 1203); Gifu Prefectural Research Institute for Human Life Technology.",
            ja:"出典：国民生活センター（事故情報、二〇一九年十二月十二日）、静岡県工業技術研究所（技術事例、二〇二〇年度）、日本規格協会（JIS S 1203）、岐阜県生活技術研究所。",
            zh:"資料來源：日本國民生活中心（事故報告，2019 年 12 月 12 日）；靜岡縣工業技術研究所（技術案例，2020 年度）；日本規格協會（JIS S 1203）；岐阜縣生活技術研究所。" } }
      ] },
    { t:"section",
      id:"hida-chairs",
      title:{ en:"A shelf of Hida chairs", ja:"飛騨の椅子の棚", zh:"飛驒椅子一覽" },
      jp:"名作と定番",
      body:[
        { t:"p",
          text:{
            en:"Beyond the classics described above, each of the large Takayama makers has a line of chairs that defines it. The table below gathers some of them, with the year each appeared or was recognised. Company profiles are on <a href=\"houses.html\">The Furniture Houses</a>.",
            ja:"上に述べた名作のほかにも、高山の大きなつくり手はそれぞれ、自らを形づくる椅子の系譜をもつ。次の表はその一部を、登場した年や評価を受けた年とともにまとめたものである。各社の紹介は<a href=\"houses.html\">家具の作り手</a>の頁にある。",
            zh:"除了上文介紹的經典之外，高山各大廠都有代表自身的椅子系列。下表整理其中一部分，並列出問世或獲獎的年份。各公司簡介見<a href=\"houses.html\">家具的製作者</a>一頁。" } },
        { t:"table",
          caption:{ en:"Some chairs made in Hida", ja:"飛騨でつくられる椅子の例", zh:"飛驒製椅子舉例" },
          cols:[
            { en:"Maker", ja:"つくり手", zh:"製造商" },
            { en:"Chair or series", ja:"椅子・シリーズ", zh:"椅款或系列" },
            { en:"Year", ja:"年", zh:"年份" },
            { en:"What it shows", ja:"特徴", zh:"特色" }
          ],
          numCols:[2],
          rows:[
            [
              { en:"Kashiwa Mokkō", ja:"柏木工", zh:"柏木工" },
              { en:"First Windsor chairs", ja:"最初のウィンザーチェア", zh:"第一批溫莎椅" },
              "1952",
              {
                en:"The English country chair adapted to Japanese proportions",
                ja:"イギリスの田舎椅子を日本人の体格に合わせた",
                zh:"將英國鄉村椅調整為日本人的身形比例" }
            ],
            [
              { en:"Hida Sangyō", ja:"飛騨産業", zh:"飛驒產業" },
              { en:"Hotaka series", ja:"穂高", zh:"穗高系列" },
              "1969",
              {
                en:"Turned legs and spindles; still made after more than fifty years",
                ja:"挽きものの脚と背棒。五十年を超えていまもつくられる",
                zh:"車旋椅腳與直條；問世逾五十年仍在生產" }
            ],
            [
              { en:"Kashiwa Mokkō", ja:"柏木工", zh:"柏木工" },
              { en:"EOS (Easy Order System)", ja:"EOS（イージーオーダーシステム）", zh:"EOS（簡易訂製系統）" },
              "1982",
              {
                en:"A made-to-order system rather than a single chair, launched the year the company showed at the Cologne furniture fair",
                ja:"一脚の椅子ではなく受注生産の仕組み。同じ年に会社はケルンの家具見本市に出品した",
                zh:"並非單一椅款，而是接單生產的系統；同年公司參加科隆家具展" }
            ],
            [
              { en:"Kitani", ja:"キタニ", zh:"Kitani" },
              { en:"Finn Juhl designs under licence", ja:"フィン・ユールの正規ライセンス品", zh:"芬恩・尤爾授權作品" },
              "1996",
              { en:"Licence agreed in June, production from August", ja:"六月に契約、八月に生産開始", zh:"6 月簽約，8 月投產" }
            ],
            [
              { en:"Hida Sangyō", ja:"飛騨産業", zh:"飛驒產業" },
              { en:"Mori no Kotoba", ja:"森のことば", zh:"森之語" },
              "2001",
              { en:"Knots left visible as part of the design", ja:"節を意匠として見せる", zh:"刻意保留木節作為設計" }
            ],
            [
              { en:"Nissin Mokkō", ja:"日進木工", zh:"日進木工" },
              { en:"SOLA and NAMI chairs", ja:"SOLA、NAMI", zh:"SOLA 與 NAMI 椅" },
              "2006",
              { en:"Good Design awards", ja:"グッドデザイン賞", zh:"優良設計獎" }
            ],
            [
              { en:"Nissin Mokkō", ja:"日進木工", zh:"日進木工" },
              { en:"KUKKA", ja:"KUKKA", zh:"KUKKA" },
              "2015",
              { en:"Good Design award", ja:"グッドデザイン賞", zh:"優良設計獎" }
            ],
            [
              { en:"Nissin Mokkō", ja:"日進木工", zh:"日進木工" },
              { en:"CHORUS", ja:"CHORUS", zh:"CHORUS" },
              "2020",
              { en:"Good Design award", ja:"グッドデザイン賞", zh:"優良設計獎" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Japan Folk Crafts Museum, Windsor chair exhibition (2017), via National Art Center Tokyo Art Commons; company histories of Kashiwa Mokkō, Hida Sangyō, Nissin Mokkō and Kitani.",
            ja:"出典：日本民芸館ウィンザーチェア展（二〇一七年、国立新美術館アートコモンズ）、柏木工・飛騨産業・日進木工・キタニの社史。",
            zh:"資料來源：日本民藝館溫莎椅展（2017 年，國立新美術館 Art Commons）；柏木工、飛驒產業、日進木工與 Kitani 的公司沿革。" } }
      ] },
    { t:"related",
      items:[
        { href:"furniture.html", why:{ en:"The companies that make them.", ja:"それをつくる会社。", zh:"製造它們的公司。" } },
        { href:"bentwood.html",
          why:{ en:"The technique behind the classic Hida chair.", ja:"飛騨の名作椅子の背後の技。", zh:"經典飛驒椅背後的技術。" } },
        { href:"joinery.html", why:{ en:"The joints that hold them together.", ja:"それをつなぐ仕口。", zh:"讓它們結合在一起的接合。" } },
        { href:"buying.html", why:{ en:"How to choose a chair.", ja:"椅子の選び方。", zh:"如何挑選椅子。" } }
      ] }
  ] };

/* ---- ------------------------------------------- shunkei */
GIFU.pages["shunkei"] = { kicker:{ en:"Wood Craft · 05", ja:"木の工芸 · 05", zh:"木作工藝 · 05" },
  title:{ en:"Hida Shunkei", ja:"飛騨春慶", zh:"飛驒春慶" },
  jp:"木目を見せる透き漆",
  lede:{
    en:"Most Japanese lacquerware hides the wood beneath layers of black or red. Hida Shunkei does the opposite: a transparent amber lacquer is laid over wood stained yellow or red, so that the grain of the hinoki, sawara or horse chestnut glows through like wood seen under clear water. The craft began in Takayama in the early seventeenth century with a carpenter who split a beautiful board and a lacquerer who chose not to cover it. It was designated a national traditional craft in 1975, and it remains one of the most distinctive things made in Hida.",
    ja:"日本の漆器の多くは、黒や朱の層の下に木を隠す。飛騨春慶はその逆である。黄や紅に色づけした木の上に透明な琥珀色の漆をかけ、ヒノキ、サワラ、トチの木目が、澄んだ水の底に見える木のように透けて輝く。この技は十七世紀の初めの高山で、美しい板を割った一人の大工と、それを覆わないことを選んだ一人の塗師から始まった。一九七五年に国の伝統的工芸品に指定され、いまも飛騨でつくられる最も個性的なものの一つである。",
    zh:"大多數日本漆器都把木材藏在黑色或朱紅的漆層之下。飛驒春慶恰恰相反：在染成黃色或紅色的木材上，塗上透明的琥珀色漆，讓扁柏、花柏或七葉樹的紋理透出光芒，彷彿清水底下的木頭。這項工藝始於十七世紀初的高山：一位木匠劈開一塊美麗的木板，一位漆師選擇不把它遮住。1975 年被指定為國家傳統工藝品，至今仍是飛驒最具特色的產物之一。" },
  body:[
    { t:"section",
      id:"origin",
      title:{ en:"A tray for a young lord", ja:"若殿のための盆", zh:"獻給少主的托盤" },
      jp:"起源",
      body:[
        { t:"p",
          text:{
            en:"According to tradition, in about 1606 a carpenter named Takahashi Kizaemon, working on a temple in Takayama, split a log of sawara and was struck by the beauty of the grain it revealed. He made a round tray from it and gave it to Kanamori Shigechika, son of the lord of Takayama — later famous as the tea master Kanamori Sōwa. Shigechika had the tray finished by the lacquerer Narita San'emon, who coated it with transparent lacquer so that the grain would show. The name is said to come from the colour's resemblance to a celebrated tea caddy called Hishunkei, attributed to the potter Katō Kagemasa; the finish became a favourite of the tea world and a speciality of the Takayama castle town.",
            ja:"伝えによれば、一六〇六年ごろ、高山の寺の普請をしていた大工高橋喜左衛門が、サワラの丸太を割り、あらわれた木目の美しさに打たれた。彼はそれで丸い盆をつくり、高山の城主の子、金森重近——のちに茶人金森宗和として名高い——に献じた。重近はその盆を塗師成田三右衛門に仕上げさせ、成田は木目が見えるよう透明な漆をかけた。名は、陶工加藤景正の作と伝わる名高い茶入「飛春慶」に色が似ていたことから来たという。この塗りは茶の湯の世界に好まれ、高山の城下町の名産となった。",
            zh:"相傳約在 1606 年，木匠高橋喜左衛門在高山修建寺院時，劈開一根花柏原木，被其顯露的紋理之美所震撼。他以此做了一個圓托盤，獻給高山城主之子金森重近——即後來著名的茶人金森宗和。重近命漆師成田三右衛門為托盤上漆，成田塗上透明漆，讓紋理得以顯現。其名據說源自漆色與一件傳為陶工加藤景正所作、名為「飛春慶」的著名茶入相似；這種塗法深受茶道界喜愛，成為高山城下町的名產。" } },
        { t:"grid",
          cols:3,
          cells:[
            { k:{ en:"Origin", ja:"起こり", zh:"起源" },
              v:{ en:"c. 1606", ja:"一六〇六年ごろ", zh:"約 1606 年" },
              d:{ en:"Keichō era, Takayama castle town", ja:"慶長年間、高山の城下", zh:"慶長年間，高山城下町" } },
            { k:{ en:"National traditional craft", ja:"伝統的工芸品", zh:"傳統工藝品" },
              v:"1975",
              d:{ en:"Designated 17 February 1975", ja:"一九七五年二月十七日指定", zh:"1975 年 2 月 17 日指定" } },
            { k:{ en:"Japan Heritage", ja:"日本遺産", zh:"日本遺產" },
              v:"2016",
              d:{ en:"Part of the Hida carpenters' heritage story", ja:"飛騨匠の日本遺産のストーリーの構成要素", zh:"屬於飛驒匠人日本遺產故事的構成要素" } }
          ] }
      ] },
    { t:"section",
      id:"process",
      title:{ en:"Wood, colour, lacquer", ja:"木地・色・漆", zh:"木胎、色彩、漆" },
      jp:"工程",
      body:[
        { t:"p",
          text:{
            en:"Shunkei is made by two separate trades. The <em>kijishi</em>, the woodworker, makes the base: boxes and trays joined from thin boards of hinoki or sawara (<em>itamono</em>), round containers of bent boards (<em>magemono</em>), and bowls and dishes turned from horse chestnut (<em>hikimono</em>). Splitting rather than sawing the boards exposes the grain along its natural lines. The <em>nushi</em>, the lacquerer, then prepares the surface, colours it, and builds up the lacquer in stages.",
            ja:"春慶は二つの別々の職がつくる。木地師が素地をつくる。ヒノキやサワラの薄い板を組んだ箱や盆（板物）、板を曲げた丸い器（曲物）、トチを挽いた椀や皿（挽物）。板を鋸で挽くのではなく割ることで、木目は自然の線にそってあらわれる。ついで塗師が面を整え、色をつけ、漆を何段階にも重ねる。",
            zh:"春慶由兩個獨立行業分工完成。木地師製作胎體：以扁柏或花柏薄板拼接的盒子與托盤（板物）、以彎曲薄板製成的圓形容器（曲物），以及以七葉樹車製的碗與盤（挽物）。木板以劈裂而非鋸切取得，讓紋理沿著天然線條顯露。接著由塗師處理表面、上色，並分階段層層上漆。" } },
        { t:"figure",
          caption:{
            en:"The stages of Hida Shunkei lacquering, after the account of the craft's producers. The final coat, Shunkei lacquer, is a refined, transparent lacquer blended with drying oil; it cures slowly in a humid room.",
            ja:"つくり手の説明にもとづく飛騨春慶の塗りの段階。最後の春慶漆は、精製した透明な漆に乾性油をまぜたもので、湿った部屋でゆっくり固まる。",
            zh:"依工藝生產者說明整理的飛驒春慶上漆階段。最後一道「春慶漆」是精製透明漆調入乾性油，在潮濕的漆室中緩慢硬化。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"From board to Shunkei", ja:"板から春慶へ", zh:"從木板到春慶" }, per:3, bh:104,
            steps:[
              { t:{ en:"Kiji — the base", ja:"木地", zh:"木胎" }, d:{ en:"Split hinoki or sawara boards; turned tochi.", ja:"割ったヒノキやサワラの板、挽いたトチ。", zh:"劈製的扁柏或花柏板；車製七葉樹。" } },
              { t:{ en:"Sealing", ja:"木地固め", zh:"封底" }, d:{ en:"Pores and surface sealed so the colour takes evenly.", ja:"色がむらなくのるよう、導管と面を固める。", zh:"封住導管與表面，使著色均勻。" } },
              { t:{ en:"Colouring", ja:"着色", zh:"著色" }, d:{ en:"Stained yellow (ki-shunkei) or red (beni-shunkei).", ja:"黄（黄春慶）か紅（紅春慶）に色づける。", zh:"染成黃色（黃春慶）或紅色（紅春慶）。" } },
              { t:{ en:"Rubbed lacquer", ja:"摺り漆", zh:"擦漆" }, d:{ en:"Raw lacquer rubbed in and wiped off, several times.", ja:"生漆を摺りこんで拭きとり、何度か重ねる。", zh:"生漆擦入後拭去，反覆數次。" } },
              { t:{ en:"Polishing", ja:"研ぎ", zh:"研磨" }, d:{ en:"Smoothed between coats, traditionally with scouring rush.", ja:"塗りのあいだに、昔はトクサで研ぐ。", zh:"各道之間研磨，傳統上用木賊。" } },
              { t:{ en:"Top coat", ja:"上塗", zh:"面漆" }, d:{ en:"Transparent Shunkei lacquer, cured slowly in a humid chamber.", ja:"透明な春慶漆をかけ、湿った室でゆっくり固める。", zh:"塗上透明春慶漆，在潮濕漆室中緩慢硬化。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"urushi",
      title:{ en:"What urushi is", ja:"漆とは何か", zh:"何謂漆" },
      jp:"ウルシオール",
      body:[
        { t:"p",
          text:{
            en:"Urushi is the sap of the lacquer tree, <em>Toxicodendron vernicifluum</em>, tapped from shallow cuts in the bark in summer. Its main component, urushiol, is the same compound that makes poison ivy irritating, and uncured lacquer causes rashes in most people. Unlike paint, it does not dry by evaporation: an enzyme in the sap, laccase, uses oxygen and moisture from the air to link the urushiol molecules into a hard polymer. Lacquer therefore cures best in warm, humid conditions — around 20–30 °C and 70–85 per cent humidity — and lacquerers cure their work in a damp cupboard or room called a <em>muro</em>. Once cured, urushi is extremely resistant to water, acids, alkalis and alcohol, and it continues to harden for years.",
            ja:"漆は漆の木の樹液で、夏に樹皮に浅い傷をつけてかき取る。主な成分ウルシオールは、ツタウルシをかぶれさせるのと同じ化合物で、固まる前の漆はたいていの人をかぶれさせる。塗料と違い、蒸発で乾くのではない。樹液のなかの酵素ラッカーゼが空気中の酸素と水分を使って、ウルシオールの分子を硬い高分子につなぐ。だから漆は暖かく湿った条件——およそ二十〜三十度、湿度七十〜八十五パーセント——で最もよく固まり、塗師は「室」と呼ぶ湿った棚や部屋で仕事を固める。いったん固まった漆は、水、酸、アルカリ、アルコールにきわめて強く、何年も硬くなりつづける。",
            zh:"漆是漆樹（Toxicodendron vernicifluum）的樹液，夏季在樹皮上割出淺口採集。其主成分漆酚，與讓毒葛致癢的是同一種化合物，未硬化的漆會讓大多數人起疹。漆不同於油漆，不是靠蒸發乾燥：樹液中的漆酶利用空氣中的氧與水分，把漆酚分子連結成堅硬的高分子。因此漆在溫暖潮濕的條件下——約 20–30°C、濕度 70–85%——硬化得最好，漆師會把作品放進稱為「室」的潮濕櫃或房間中硬化。一旦硬化，漆對水、酸、鹼與酒精都極具抵抗力，而且會持續變硬多年。" } },
        { t:"note",
          label:{ en:"Japanese urushi", ja:"国産の漆", zh:"日本國產漆" },
          text:{
            en:"Only a small percentage of the urushi used in Japan today is produced in Japan, most of it in Jōbōji in Iwate; the rest is imported, mainly from China. Since 2015 the Agency for Cultural Affairs has in principle required domestic urushi for the restoration of National Treasures and Important Cultural Properties, which has encouraged the planting of lacquer trees in several regions.",
            ja:"いま日本で使われる漆のうち、国産はわずか数パーセントで、その多くは岩手の浄法寺でとれる。残りは輸入で、おもに中国からである。二〇一五年から文化庁は、国宝や重要文化財の修理に原則として国産の漆を使うよう求め、それがいくつかの地域での漆の木の植栽を後押ししている。",
            zh:"如今日本所用的漆，國產僅占個位數百分比，多產自岩手縣淨法寺；其餘仰賴進口，主要來自中國。自 2015 年起，文化廳原則上要求國寶與重要文化財的修復使用國產漆，促使數個地區開始種植漆樹。" } }
      ] },
    { t:"section",
      id:"character",
      title:{ en:"A lacquer that grows clearer", ja:"年とともに澄む漆", zh:"越用越透的漆" },
      jp:"春慶の味わい",
      body:[
        { t:"p",
          text:{
            en:"Fresh urushi is dark, and a new piece of Shunkei has a deep, slightly cloudy amber tone. With years of use and exposure to light, the lacquer becomes more transparent and the grain beneath it more vivid — the opposite of most finishes, which yellow and dull. Owners of old Shunkei trays and boxes prize this change, and makers advise using the pieces every day rather than keeping them in storage. The lacquer tolerates water and ordinary washing, but not dishwashers, prolonged soaking or strong direct sunlight on a new piece.",
            ja:"新しい漆は色が濃く、できたばかりの春慶は深く、少し曇った琥珀色をしている。何年も使い光にあたるうちに、漆はより透きとおり、その下の木目はより鮮やかになる——黄ばみくすむ多くの仕上げとは逆である。古い春慶の盆や箱の持ち主はこの変化を珍重し、つくり手は、しまいこむより毎日使うよう勧める。漆は水やふつうの洗いには耐えるが、食洗機、長い浸けおき、新しいものへの強い直射日光には向かない。",
            zh:"新漆顏色深，新製春慶呈現深沉、略帶混濁的琥珀色。經年使用並受光照後，漆會愈來愈透明，底下的紋理也愈加鮮明——與多數會泛黃變暗的塗裝恰好相反。老春慶托盤與盒子的主人珍視這種變化，工匠也建議每天使用，而非收藏起來。漆耐得住水與一般清洗，但不適合洗碗機、長時間浸泡，新品也不宜受強烈陽光直射。" } },
        { t:"table",
          caption:{ en:"What Hida Shunkei is made into", ja:"飛騨春慶の品々", zh:"飛驒春慶製品" },
          cols:[
            { en:"Form", ja:"形", zh:"形制" },
            { en:"Base technique", ja:"木地の技", zh:"胎體技法" },
            { en:"Typical wood", ja:"主な木", zh:"常用木材" }
          ],
          rows:[
            [
              { en:"Trays, square and round", ja:"盆（角・丸）", zh:"托盤（方、圓）" },
              { en:"Joined boards; bent boards", ja:"板物・曲物", zh:"板物；曲物" },
              { en:"Sawara, hinoki", ja:"サワラ、ヒノキ", zh:"花柏、扁柏" }
            ],
            [
              { en:"Tiered food boxes (jūbako)", ja:"重箱", zh:"多層食盒（重箱）" },
              { en:"Joined boards", ja:"板物", zh:"板物" },
              { en:"Hinoki", ja:"ヒノキ", zh:"扁柏" }
            ],
            [
              { en:"Tea utensils: caddies, water jars, trays", ja:"茶道具：茶入、水指、盆", zh:"茶道具：茶入、水指、盆" },
              { en:"Bent and turned", ja:"曲物・挽物", zh:"曲物、挽物" },
              { en:"Sawara, tochi", ja:"サワラ、トチ", zh:"花柏、七葉樹" }
            ],
            [
              { en:"Bowls and dishes", ja:"椀・皿", zh:"碗、盤" },
              { en:"Turned", ja:"挽物", zh:"挽物" },
              { en:"Tochi", ja:"トチ", zh:"七葉樹" }
            ],
            [
              { en:"Lunch boxes, sake cups, vases", ja:"弁当箱、盃、花器", zh:"便當盒、酒杯、花器" },
              { en:"Bent, turned, joined", ja:"曲物・挽物・板物", zh:"曲物、挽物、板物" },
              { en:"Hinoki, sawara, tochi", ja:"ヒノキ、サワラ、トチ", zh:"扁柏、花柏、七葉樹" }
            ]
          ] },
        { t:"note",
          label:{ en:"Shunkei on a violin", ja:"バイオリンの春慶", zh:"小提琴上的春慶" },
          text:{
            en:"In 2013 an Italian luthier applied a Hida Shunkei finish to the instruments of a string quartet — a meeting of the Cremonese and Takayama traditions of showing figured wood through a clear coat. Urushi has also been tried on guitars; see <a href=\"guitar.html\">Anatomy of a Guitar</a>.",
            ja:"二〇一三年、イタリアの弦楽器職人が、弦楽四重奏の楽器に飛騨春慶の塗りを施した。杢のある木を透明な塗膜ごしに見せるという、クレモナと高山の伝統の出会いである。漆はギターにも試みられてきた。<a href=\"guitar.html\">ギターの構造</a>を参照。",
            zh:"2013 年，一位義大利提琴製作師為一組弦樂四重奏的樂器塗上飛驒春慶漆——這是克雷莫納與高山兩地「透過透明塗層展現木紋」傳統的相遇。漆也曾被嘗試用於吉他；見<a href=\"guitar.html\">吉他的構造</a>。" } }
      ] },
    { t:"section",
      id:"kiji",
      title:{ en:"The woodworker's part", ja:"木地師の仕事", zh:"木地師的工作" },
      jp:"板物・曲物・挽物",
      body:[
        { t:"p",
          text:{
            en:"Every piece of Shunkei passes through at least two workshops, and often three. The <em>kijishi</em> who makes the wooden base is not one trade but several: the <em>itamono-shi</em> joins boxes, trays and tiered boxes from boards; the <em>magemono-shi</em> bends thin boards into round and oval forms and stitches them with cherry bark; and the <em>hikimono-shi</em> turns bowls, dishes and lids on the lathe. Their timber is chosen for what the lacquer will reveal. Sawara and hinoki — straight-grained, light and easily split — serve for joined and bent work; <em>tochi</em>, the horse chestnut, harder and paler, with a lustrous and sometimes rippled figure, for turned work. Makers say the wood must be air-dried for two years or more before it is worked, and as large old trees of these species have become scarce, some workshops also use Alaska yellow cedar (sold in Japan as <em>beihiba</em>), walnut and katsura.",
            ja:"春慶の品はどれも、少なくとも二つ、しばしば三つの工房を通る。素地をつくる木地師は一つの職ではなく、いくつかに分かれる。板物師は板を組んで箱、盆、重箱をつくり、曲物師は薄い板を丸や楕円に曲げて桜の皮で綴じ、挽物師はろくろで椀、皿、蓋を挽く。材は、漆が何を見せるかで選ばれる。まっすぐな木目をもち、軽く、割りやすいサワラとヒノキは板物と曲物に、より硬く白っぽく、艶があってときに縮み杢のあらわれるトチは挽物に使う。つくり手は、材は二年以上天然乾燥させてから加工すべきだという。これらの木の大きな古木が少なくなったいま、米ヒバ、クルミ、カツラを使う工房もある。",
            zh:"每件春慶至少經過兩間、往往三間工坊之手。製作胎體的木地師並非單一行業，而是分為數種：板物師以木板拼接盒子、托盤與重箱；曲物師把薄板彎成圓形或橢圓形，再以櫻樹皮縫合；挽物師則在車床上車製碗、盤與蓋子。木材依漆將顯露出什麼而挑選。紋理通直、質輕易劈的花柏與扁柏用於板物與曲物；較硬、色淡、富光澤且有時帶波狀紋的七葉樹（tochi）用於挽物。工匠表示，木材須自然乾燥兩年以上才能加工；由於這些樹種的大徑老樹日漸稀少，部分工坊也改用阿拉斯加黃扁柏（日本稱「米ヒバ」）、胡桃木與連香樹。" } },
        { t:"p",
          text:{
            en:"Because Shunkei hides nothing, the kijishi decorates the wood itself. Where other lacquerware is ornamented by the lacquerer with sprinkled gold (<em>maki-e</em>) or gold laid into incised lines (<em>chinkin</em>), Shunkei relies on the surface of the board, prepared in one of several ways before it ever reaches the lacquer workshop.",
            ja:"春慶は何も隠さないので、木地師が木そのものを飾る。ほかの漆器が塗師の手で蒔絵や沈金に飾られるのに対し、春慶は板の面に頼り、その面は塗師の工房に届く前に、いくつかの方法のどれかで整えられる。",
            zh:"由於春慶什麼都不遮掩，裝飾便由木地師在木材本身上完成。其他漆器由漆師以蒔繪（撒金）或沈金（在刻線中嵌金）裝飾，春慶則仰賴木板的表面——在送進漆工坊之前，就已用以下幾種方法之一處理好。" } },
        { t:"defs",
          items:[
            { term:{ en:"Hegime — the split face", ja:"へぎ目", zh:"へぎ目（劈面）" },
              jp:"へぎめ",
              def:{
                en:"The board is split with a blade along the grain instead of being sawn, so that its face follows the natural rise and fall of the fibres; under clear lacquer the surface seems to ripple. Sawara, which splits cleanly, is the preferred wood — the same discovery that, by tradition, began the craft.",
                ja:"板を鋸で挽かず、刃物で木目にそって剥ぐので、面は繊維の自然な起伏をなぞる。透明な漆の下で、面は波立つように見える。きれいに割れるサワラが好まれる。伝えによれば、この技を始めたのと同じ発見である。",
                zh:"不以鋸切，而以刃具順著紋理剝劈木板，使板面依循纖維自然的起伏；在透明漆下，表面彷彿泛起漣漪。以劈裂乾淨的花柏為首選——相傳這正是開啟此工藝的那個發現。" } },
            { term:{ en:"Warime — split lines", ja:"割目", zh:"割目（裂紋）" },
              jp:"わりめ",
              def:{
                en:"Lines of natural splitting opened with a hatchet (<em>nata</em>) and kept as a pattern on the surface.",
                ja:"鉈で入れた自然な割れの線を、そのまま面の模様として残す。",
                zh:"以柴刀（nata）劈出的天然裂線，保留為表面的紋樣。" } },
            { term:{ en:"Kanname — plane marks", ja:"鉋目", zh:"鉋目（刨痕）" },
              jp:"かんなめ",
              def:{
                en:"Regular patterns of plane or gouge marks cut across the surface, which catch the light under the transparent lacquer.",
                ja:"鉋や丸鑿の跡を規則正しく面に刻んだ模様で、透明な漆の下で光をとらえる。",
                zh:"以鉋刀或圓鑿在表面刻出規則的刀痕紋樣，在透明漆下映出光影。" } },
            { term:{ en:"Kanba-zashi — bark inlay", ja:"カンバ差し", zh:"樺皮鑲嵌" },
              jp:"かんばさし",
              def:{
                en:"Strips of cherry bark set into the wood as an inlay — the same bark that stitches the seams of bent boxes.",
                ja:"桜の皮を細く切って木に象嵌する。曲物の綴じ目を縫うのと同じ皮である。",
                zh:"將櫻樹皮切成細條嵌入木材——與縫合曲物接縫的是同一種樹皮。" } }
          ] }
      ] },
    { t:"section",
      id:"layers",
      title:{ en:"Lacquer you can see through", ja:"透ける漆", zh:"透明的漆" },
      jp:"透漆と春慶漆",
      body:[
        { t:"p",
          text:{
            en:"The lacquerer's raw material is <em>ki-urushi</em>, raw sap filtered of bark and debris. To make it transparent it is refined in two operations: <em>nayashi</em>, slow stirring to make the sap uniform, and <em>kurome</em>, gentle warming while stirring to drive off water, until the milky brown liquid turns a clear, deep amber. The result, <em>suki-urushi</em> or transparent lacquer, is the basis of all Shunkei. Mixed with a drying oil — perilla oil is the traditional choice — it becomes Shunkei lacquer: more fluid, glossier and slower to cure, blended by each workshop to its own recipe.",
            ja:"塗師の原料は、皮やごみを漉した樹液、生漆である。これを透明にするには二つの作業で精製する。ゆっくりかき混ぜて樹液を均一にする「なやし」と、かき混ぜながらおだやかに温めて水分を飛ばす「くろめ」である。乳白がかった茶色の液は、澄んだ深い琥珀色に変わる。こうしてできる透漆が、すべての春慶のもとになる。これに乾性油——伝統的には荏油——をまぜると春慶漆になる。よりのびがよく、艶が強く、固まるのが遅い漆で、工房ごとに独自の配合をもつ。",
            zh:"漆師的原料是濾除樹皮與雜質的生漆（ki-urushi）。要讓它變透明，需經兩道精製：一是緩慢攪拌使漆液均勻的「なやし」（nayashi），二是邊攪拌邊溫和加熱、蒸散水分的「くろめ」（kurome），直到乳褐色的漆液轉為清澈深沉的琥珀色。所得的「透漆」是一切春慶的基礎。再調入乾性油——傳統上用荏油（紫蘇籽油）——便成為春慶漆：流動性更好、光澤更強、硬化更慢，各工坊各有獨門配方。" } },
        { t:"p",
          text:{
            en:"Unlike most lacquerware, Shunkei has no ground. Opaque wares such as Wajima lacquer are built up over cloth glued across weak points and many layers of lacquer mixed with fired, powdered earth; these make the object stronger and perfectly smooth, but hide the wood entirely. Shunkei omits all of this so that the grain stays visible. The wood is sealed with a size — soybean juice or casein, sometimes with tannin — and stained yellow or red, today usually with synthetic dyes; it is then rubbed with raw lacquer several times and polished between coats, before the top coat is brushed on in thin applications. A Hida lacquerer describes curing his work in a <em>muro</em> kept at about 15–25 °C and 65–75 per cent humidity. The thinness of the film is the source of both the ware's beauty and its vulnerability: Shunkei is lighter and more transparent than other lacquer, but a deep knock reaches the wood more easily.",
            ja:"たいていの漆器と違い、春慶には下地がない。輪島塗のような不透明の漆器は、弱いところに布を着せ、焼いた土の粉をまぜた漆を何層も重ねた上に塗り上げる。それが器を強く、完全に平滑にするが、木はまったく見えなくなる。春慶は、木目を見せるためにそれをすべて省く。木地は呉汁やカゼイン、ときにタンニンをまぜたもので固め、黄か紅に色づける。いまはたいてい合成染料である。ついで生漆を何度も摺りこみ、そのあいだに研ぎ、最後に上塗を薄く刷毛で塗る。飛騨のある塗師は、室をおよそ十五〜二十五度、湿度六十五〜七十五パーセントに保って乾かすという。塗膜の薄さは、この器の美しさの源であり、弱さの源でもある。春慶はほかの漆器より軽く透明だが、強くぶつければ傷は木まで届きやすい。",
            zh:"與大多數漆器不同，春慶沒有底灰。輪島塗這類不透明漆器，是在脆弱處糊上麻布，再疊上多層調入燒製土粉的漆，最後才上漆；這讓器物更堅固、表面完全平滑，卻也把木頭徹底遮住。春慶省去這一切，好讓紋理保持可見。木胎先以豆汁（呉汁）或酪蛋白、有時加入單寧封底，再染成黃色或紅色——如今多用合成染料；接著反覆擦入生漆數次，各道之間研磨，最後以刷子薄薄塗上面漆。一位飛驒漆師表示，他的漆室保持在約 15–25°C、濕度 65–75%。塗膜之薄，既是這種器物之美的來源，也是其弱點所在：春慶比其他漆器更輕、更透明，但重重一撞，傷痕更容易直達木胎。" } },
        { t:"figure",
          caption:{
            en:"Schematic cross-sections, not to scale: Hida Shunkei compared with an opaque lacquerware built on a ground (as in Wajima lacquer). Layer names after makers' descriptions; the number of coats varies by workshop and piece.",
            ja:"模式的な断面（縮尺は正確でない）。飛騨春慶と、下地の上に塗る不透明な漆器（輪島塗など）の比較。層の名はつくり手の説明による。塗りの回数は工房と品によって異なる。",
            zh:"示意剖面（非按比例）：飛驒春慶與以底灰為基礎的不透明漆器（如輪島塗）之比較。各層名稱依工匠說明；塗層數因工坊與器物而異。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 330" role="img">';
            s += F.text(20, 28, lang==="en"?"TWO WAYS TO LACQUER WOOD":(lang==="ja"?"木に漆を塗る二つの方法":"為木材上漆的兩種方式"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            function col(x, head, layers){
              var r = F.text(x, 66, L(head), { serif:true, size:12, fill:"#201E1B" }), y = 290, i, n = layers.length;
              for (i = 0; i < n; i++) {
                var h = layers[i].h; y -= h;
                var ly = 104 + (n - 1 - i) * 38, my = y + h/2;
                r += '<rect x="'+x+'" y="'+y+'" width="130" height="'+h+'" fill="'+layers[i].f+'" stroke="#7C6B52" stroke-width="0.8"/>';
                if (layers[i].grain) { for (var g = 0; g < 4; g++) r += '<path d="M'+x+' '+(y+14+g*17)+' q32 -6 65 0 t65 0" fill="none" stroke="#A08F73" stroke-width="0.8"/>'; }
                r += '<path d="M'+(x+132)+' '+my+' L'+(x+140)+' '+my+' L'+(x+150)+' '+(ly-4)+' L'+(x+156)+' '+(ly-4)+'" fill="none" stroke="#8B857C"/>';
                r += F.text(x+160, ly, L(layers[i].n), { size:10.5, fill:"#201E1B", max:32, lh:12 });
              }
              return r;
            }
            s += col(40, { en:"Hida Shunkei", ja:"飛騨春慶", zh:"飛驒春慶" }, [
              { h:80, f:"#EADCC1", grain:true, n:{ en:"Wood: sawara, hinoki or tochi", ja:"木地：サワラ、ヒノキ、トチ", zh:"木胎：花柏、扁柏或七葉樹" } },
              { h:16, f:"#F0EDE4", n:{ en:"Sealing size (soybean juice, casein)", ja:"木地固め（呉汁、カゼイン）", zh:"封底（豆汁、酪蛋白）" } },
              { h:16, f:"#EDE5D2", n:{ en:"Yellow or red stain", ja:"黄または紅の着色", zh:"黃色或紅色染色" } },
              { h:30, f:"#E7DFD2", n:{ en:"Raw lacquer rubbed in, several times", ja:"生漆の摺りこみ（数回）", zh:"擦入生漆（數次）" } },
              { h:22, f:"#E9E2D2", n:{ en:"Top coat: transparent Shunkei lacquer", ja:"上塗：透明な春慶漆", zh:"面漆：透明春慶漆" } }
            ]);
            s += col(400, { en:"Opaque lacquer on a ground", ja:"下地の上の不透明な漆", zh:"底灰上的不透明漆" }, [
              { h:80, f:"#EADCC1", grain:true, n:{ en:"Wood (hidden in the end)", ja:"木地（最後には見えない）", zh:"木胎（最終不可見）" } },
              { h:16, f:"#E6E4E0", n:{ en:"Cloth glued over weak points", ja:"布着せ（弱いところに布）", zh:"糊布（補強脆弱處）" } },
              { h:46, f:"#E4E0D6", n:{ en:"Ground: lacquer with powdered fired earth, many layers", ja:"下地：土の粉をまぜた漆を重ねる", zh:"底灰：調入燒製土粉的漆，多層" } },
              { h:26, f:"#ADA79E", n:{ en:"Middle coats, polished", ja:"中塗（研ぐ）", zh:"中塗（研磨）" } },
              { h:18, f:"#55504A", n:{ en:"Top coat: black or red", ja:"上塗：黒または朱", zh:"面漆：黑色或朱紅" } }
            ]);
            s += '<line x1="20" y1="300" x2="740" y2="300" stroke="#CDC6B9"/>';
            s += F.text(20, 318, lang==="en"?"Shunkei omits cloth and ground so that the grain shows through the film.":(lang==="ja"?"春慶は布着せと下地を省き、塗膜ごしに木目を見せる。":"春慶省去糊布與底灰，讓紋理透過塗膜顯現。"), { size:10.5, fill:"#55504A" });
            return s + '</svg>';
          } }
      ] },
    { t:"section",
      id:"other-shunkei",
      title:{ en:"Shunkei beyond Hida", ja:"飛騨のほかの春慶", zh:"飛驒以外的春慶" },
      jp:"日本三大春慶",
      body:[
        { t:"p",
          text:{
            en:"Shunkei is not only a Hida word. Several regions developed the same idea of clear lacquer over coloured wood, and the origin of the name is disputed. The theory most often given in dictionaries traces it to a lacquerer called Shunkei who worked in Sakai, near Osaka, in the Ōan era (1368–1375), though this cannot be proven; Takayama prefers its own story of the tea caddy. Hida, Noshiro in Akita and Awano in Ibaraki are usually named as the three great shunkei of Japan. Shunkei has also been made in Ise and in Kiso, while the shunkei of Sakai, Yoshino, Nikkō and Shōnai have died out.",
            ja:"春慶は飛騨だけの言葉ではない。いくつもの地域が、色づけした木に透明な漆をかけるという同じ考えを育て、名の由来にも諸説がある。辞書に最もよく見える説は、応安年間（一三六八〜一三七五年）に堺にいた春慶という塗師にさかのぼるとするが、確かめることはできない。高山は茶入の話という独自の由来を好む。飛騨、秋田の能代、茨城の粟野が、ふつう日本三大春慶と呼ばれる。伊勢や木曽でも春慶がつくられてきたが、堺、吉野、日光、庄内の春慶は絶えた。",
            zh:"「春慶」並非飛驒專屬的詞。好幾個地區都發展出在著色木材上塗透明漆的同一構想，名稱由來也眾說紛紜。辭典中最常見的說法，追溯到應安年間（1368–1375 年）在堺（大阪附近）活動、名叫春慶的漆工，但無法證實；高山則偏好自己那則茶入的故事。飛驒、秋田的能代與茨城的粟野，通常並稱「日本三大春慶」。伊勢與木曾也曾製作春慶，而堺、吉野、日光與庄內的春慶已經失傳。" } },
        { t:"compare",
          cols:3,
          items:[
            { title:{ en:"Hida", ja:"飛騨春慶", zh:"飛驒春慶" },
              jp:"岐阜県高山市・飛騨市",
              text:{
                en:"Begun c. 1606 in the Takayama castle town; sawara and hinoki for boards and bent work, tochi for turned work. The only shunkei designated a national traditional craft (1975), and the one still made in quantity by a cooperative of woodworkers and lacquerers.",
                ja:"一六〇六年ごろ、高山の城下で始まる。板物と曲物にサワラとヒノキ、挽物にトチ。国の伝統的工芸品（一九七五年）に指定された唯一の春慶で、いまも木地師と塗師の組合がまとまった量をつくる。",
                zh:"約 1606 年始於高山城下町；板物與曲物用花柏與扁柏，挽物用七葉樹。唯一獲指定為國家傳統工藝品（1975 年）的春慶，至今仍由木地師與漆師的合作社成規模生產。" } },
            { title:{ en:"Noshiro", ja:"能代春慶", zh:"能代春慶" },
              jp:"秋田県能代市",
              text:{
                en:"Said to have been started in the Enpō era (1673–1681) by a lacquerer who moved there from Takayama. Made on hiba wood seasoned for years, with lacquer recipes kept secret in one family and passed to a single heir. Production ended in 2010 with the death of its last master; attempts to reconstruct it have been made since 2012.",
                ja:"延宝年間（一六七三〜一六八一年）に、高山から移った塗師が始めたといわれる。何年も乾かしたヒバの木地に塗り、漆の配合は一つの家に秘されて一人の跡継ぎにだけ伝えられた。最後の職人が没した二〇一〇年に生産が途絶え、二〇一二年から復元の試みが続く。",
                zh:"相傳於延寶年間（1673–1681 年）由一位自高山遷來的漆工所創。以經多年乾燥的羅漢柏（hiba）為胎，漆的配方為一家秘傳、只傳一名繼承人。2010 年最後一位匠師辭世後即告斷絕；自 2012 年起有人嘗試復原。" } },
            { title:{ en:"Awano", ja:"粟野春慶", zh:"粟野春慶" },
              jp:"茨城県城里町",
              text:{
                en:"Claims to be the oldest, founded in 1489 by Inagawa Yoshiaki from local lacquer and hinoki; it later supplied the Mito domain. Still made by the Inagawa family, it was designated an intangible cultural property of Ibaraki prefecture on 25 January 1989.",
                ja:"最も古いとされ、一四八九年に稲川義明が地元の漆とヒノキで始めた。のちに水戸藩の御用を務めた。いまも稲川家が受け継ぎ、一九八九年一月二十五日に茨城県の無形文化財に指定された。",
                zh:"自稱歷史最悠久，1489 年由稻川義明以當地的漆與扁柏所創，後來成為水戶藩的御用漆器。至今仍由稻川家傳承，1989 年 1 月 25 日被指定為茨城縣無形文化財。" } }
          ] },
        { t:"note",
          label:{ en:"A shunkei of one", ja:"一人の春慶", zh:"只剩一人的春慶" },
          text:{
            en:"Hida itself has had more than one tradition. In Kamioka, in the mining valley of northern Hida city, a local Kamioka Shunkei was kept alive in 2020 by a single lacquerer, a former precision-machinery engineer who returned home to take it over.",
            ja:"飛騨のなかにも一つ以上の伝統があった。飛騨市北部の鉱山の谷、神岡では、二〇二〇年の時点で、精密機械の技術者から故郷に戻って跡を継いだ一人の塗師が、地元の神岡春慶塗を守っていた。",
            zh:"飛驒本身也不只一種傳統。在飛驒市北部的礦山河谷神岡，2020 年時，地方的「神岡春慶塗」僅由一位漆師維繫——他原是精密機械工程師，返鄉承接了這門手藝。" } }
      ] },
    { t:"section",
      id:"trade",
      title:{ en:"A trade of few hands", ja:"少ない手の職", zh:"人手稀少的行業" },
      jp:"産地の今",
      body:[
        { t:"timeline",
          items:[
            { year:"1692",
              title:{ en:"Direct shogunal rule", ja:"幕府の直轄", zh:"幕府直轄" },
              jp:"天領",
              text:{
                en:"The Kanamori lords leave Hida; Shunkei passes from the lord's household to merchants and townspeople.",
                ja:"金森氏が飛騨を去る。春慶は領主の家から商人や町人の手に移る。",
                zh:"金森氏離開飛驒；春慶從領主家中流向商人與町人。" } },
            { year:{ en:"Late Edo–Meiji", ja:"江戸後期〜明治", zh:"江戶後期至明治" },
              title:{ en:"Boxes and more makers", ja:"箱物と職人の増加", zh:"箱物與工匠增加" },
              jp:"重箱",
              text:{
                en:"Angular pieces such as tiered boxes join the repertoire; in the Meiji period the number of craftsmen rises quickly.",
                ja:"重箱のような角物が加わり、明治には職人の数が急にふえる。",
                zh:"重箱等方形器物加入品項；明治時期工匠人數迅速增加。" } },
            { year:"1934",
              title:{ en:"The railway", ja:"鉄道", zh:"鐵路" },
              jp:"高山本線",
              text:{
                en:"The Takayama Main Line is completed; with Taishō and early Shōwa forms of lines and circles, Shunkei becomes Takayama's signature souvenir.",
                ja:"高山本線が全通する。大正から昭和初めの線と円の新しい形とともに、春慶は高山を代表する土産物になる。",
                zh:"高山本線全線通車；加上大正至昭和初期以線條與圓形構成的新造形，春慶成為高山的代表性伴手禮。" } },
            { year:"1975",
              title:{ en:"National designation", ja:"国の指定", zh:"國家指定" },
              jp:"伝統的工芸品",
              text:{
                en:"Among the first group of traditional crafts designated under the 1974 law, on 17 February.",
                ja:"一九七四年の法律による伝統的工芸品の第一次指定の一つとなる（二月十七日）。",
                zh:"2 月 17 日，成為依 1974 年法律首批指定的傳統工藝品之一。" } },
            { year:"2007",
              title:{ en:"Regional trademark", ja:"地域団体商標", zh:"地域團體商標" },
              jp:"飛騨春慶",
              text:{
                en:"“Hida Shunkei” registered as a regional collective trademark on 9 March by the Hida Shunkei Federated Cooperative.",
                ja:"三月九日、飛騨春慶連合協同組合が「飛騨春慶」を地域団体商標として登録する。",
                zh:"3 月 9 日，飛驒春慶聯合協同組合將「飛驒春慶」註冊為地域團體商標。" } },
            { year:"2014",
              title:{ en:"A museum closes", ja:"資料館の閉館", zh:"博物館關閉" },
              jp:"春慶の館",
              text:{
                en:"A Shunkei museum opened in Takayama in 1973 closes in July after forty-one years.",
                ja:"一九七三年に高山で開いた春慶の館が、四十一年を経て七月に閉じる。",
                zh:"1973 年在高山開館的春慶博物館，經營 41 年後於 7 月閉館。" } }
          ] },
        { t:"p",
          text:{
            en:"Since the late twentieth century the trade has shrunk with the rest of Japan's traditional crafts. Nationally, the output of designated traditional crafts fell from about ¥540 billion in 1983 to an estimated ¥105 billion in fiscal 2022, and the number of people working in them from about 288,000 in 1979 to 48,334. Lacquerware has been among the hardest hit, as households moved to ceramics, plastics and the dishwasher. In Hida, successors have been few — one account records gaps of more than twenty years between new apprentices — and the kijishi and nushi now work in small family workshops, several of which sell directly to visitors in the old town. Makers have answered with simpler forms for modern tables, small pieces such as sake cups and chopsticks, and collaborations outside the craft, of which the lacquered string quartet is the best known.",
            ja:"二十世紀の終わりから、この職は日本のほかの伝統工芸とともに縮んできた。全国では、伝統的工芸品の生産額は一九八三年の約五千四百億円から二〇二二年度の推計約千五十億円に、従事者は一九七九年の約二十八万八千人から四万八千三百三十四人に減った。漆器は、家庭が陶磁器やプラスチックや食洗機に移るなかで、最も打撃を受けたものの一つである。飛騨でも跡継ぎは少なく——新しい弟子のあいだが二十年以上あいたという記録もある——木地師も塗師もいまは家族の小さな工房で働き、古い町並みで訪れる人にじかに売る店もいくつかある。つくり手は、今の食卓に合う簡素な形、盃や箸のような小さな品、そして弦楽四重奏の漆塗りに代表される工芸の外との協働で応えてきた。",
            zh:"二十世紀末以來，這一行與日本其他傳統工藝一同萎縮。全國傳統工藝品的產值，從 1983 年約 5,400 億日圓，降至 2022 年度推估約 1,050 億日圓；從業人數從 1979 年約 28 萬 8 千人，減至 48,334 人。隨著家庭轉向陶瓷、塑膠與洗碗機，漆器是受衝擊最重的品類之一。在飛驒，接班人稀少——有記載指出新學徒之間曾相隔二十多年——木地師與漆師如今都在家族小工坊中工作，其中數家在老街直接向遊客販售。工匠們以適合現代餐桌的簡潔造形、酒杯與筷子等小件，以及工藝圈外的合作來回應；為弦樂四重奏上漆便是最著名的一例。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Designated crafts", ja:"伝統的工芸品", zh:"指定傳統工藝品" },
              v:"244",
              d:{ en:"Nationally, October 2025", ja:"全国、二〇二五年十月", zh:"全國，2025 年 10 月" } },
            { k:{ en:"Lacquerware", ja:"漆器", zh:"漆器" },
              v:"23",
              d:{ en:"Designated lacquer crafts", ja:"指定された漆器", zh:"獲指定的漆器" } },
            { k:{ en:"Wood and bamboo", ja:"木工品・竹工品", zh:"木工品與竹工品" },
              v:"33",
              d:{ en:"Designated wood and bamboo crafts", ja:"指定された木工品・竹工品", zh:"獲指定的木竹工藝品" } },
            { k:{ en:"Craft workers", ja:"従事者", zh:"從業人數" },
              v:"48,334",
              d:{
                en:"FY2022, against about 288,000 in 1979",
                ja:"二〇二二年度。一九七九年は約二十八万八千人",
                zh:"2022 年度；1979 年約 28 萬 8 千人" } }
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Takayama city, Hida Shunkei; Hida Furniture Federation, Hida no Takumi Gakkai notes on Shunkei and Ittōbori; Nakayama Shikki and Fukuju Shikkiten, process descriptions; FabCafe Hida interview with a Kamioka lacquerer (2020); Japan Patent Office and regional brand register, trademark of 2007; Japanese Wikipedia, “Shunkei-nuri”, “Hida Shunkei”, “Noshiro Shunkei”; Ibaraki prefectural board of education, Awano Shunkei; Akita furusato kentei; Association for the Promotion of Traditional Craft Industries, current situation; METI, traditional crafts briefing (March 2026).",
            ja:"出典：高山市「飛騨春慶」、飛騨木工連合会 飛騨の匠学会（春慶・一刀彫）、中山漆器・福壽漆器店の工程解説、FabCafe Hida 神岡の塗師インタビュー（二〇二〇年）、特許庁・地域団体商標（二〇〇七年）、ウィキペディア日本語版「春慶塗」「飛騨春慶」「能代春慶」、茨城県教育委員会「粟野春慶塗」、秋田ふるさと検定、伝統的工芸品産業振興協会「現状」、経済産業省 伝統的工芸品に関する資料（二〇二六年三月）。",
            zh:"資料來源：高山市〈飛驒春慶〉；飛驒木工聯合會 飛驒之匠學會（春慶、一刀彫）；中山漆器、福壽漆器店工序說明；FabCafe Hida 神岡漆師訪談（2020 年）；日本特許廳與地域團體商標登錄（2007 年）；日文維基百科〈春慶塗〉〈飛驒春慶〉〈能代春慶〉；茨城縣教育委員會〈粟野春慶塗〉；秋田故鄉檢定；傳統的工藝品產業振興協會〈現狀〉；經濟產業省傳統工藝品資料（2026 年 3 月）。" } }
      ] },
    { t:"related",
      items:[
        { href:"finishes.html", why:{ en:"Urushi and other finishes.", ja:"漆とほかの仕上げ。", zh:"漆與其他塗裝。" } },
        { href:"ittobori.html", why:{ en:"Hida's other great wood craft.", ja:"飛騨のもう一つの大きな木の工芸。", zh:"飛驒另一項重要木工藝。" } },
        { href:"takumi.html", why:{ en:"The carpenters' heritage behind it.", ja:"その背後の匠の遺産。", zh:"其背後的匠人遺產。" } },
        { href:"vessels.html", why:{ en:"Bent boxes and turned bowls.", ja:"曲物と挽物。", zh:"曲物與挽物。" } }
      ] }
  ] };

/* ---- ------------------------------------------ ittobori */
GIFU.pages["ittobori"] = { kicker:{ en:"Wood Craft · 06", ja:"木の工芸 · 06", zh:"木作工藝 · 06" },
  title:{ en:"Ichii Ittōbori", ja:"一位一刀彫", zh:"一位一刀彫" },
  jp:"イチイを刃物だけで彫る",
  lede:{
    en:"In the shops of Takayama's old streets stand small carved owls, dolls, zodiac animals and netsuke in a wood that is half deep red and half creamy white. They are carved from <em>ichii</em>, the Japanese yew, with knives and chisels alone, and left without paint or lacquer, every facet of the blade visible. The craft, Ichii Ittōbori, was founded in Takayama in the early nineteenth century by a netsuke carver and designated a national traditional craft in 1975. Its material has a story older still: the name ichii, “first rank”, is said to have been given to the yew of Mount Kurai, from which the ritual batons of the imperial court were made.",
    ja:"高山の古い町並みの店には、半分が深い赤、半分がクリーム色の白の木で彫った、小さなフクロウ、人形、干支、根付が並ぶ。イチイ——日本のイチイ——を刃物と鑿だけで彫り、塗料も漆も施さず、刃の一つひとつの面をそのまま見せる。この技、一位一刀彫は、十九世紀の初めに高山の根付彫師がはじめ、一九七五年に国の伝統的工芸品に指定された。その材の物語はさらに古い。「一位」という名は、朝廷の笏をつくった位山のイチイに与えられたといわれる。",
    zh:"高山老街的店舖裡，陳列著以一半深紅、一半乳白的木材雕成的小貓頭鷹、人偶、生肖與根付。它們以「一位」——日本紅豆杉——為材，只用刀與鑿雕刻，不上任何顏料或漆，每一道刀痕都清晰可見。這項工藝「一位一刀彫」於十九世紀初由高山一位根付雕刻師所創，1975 年被指定為國家傳統工藝品。其材料的故事更為古老：「一位」（第一位階）之名，據說是授予位山的紅豆杉——朝廷的笏正是以它製成。" },
  body:[
    { t:"section",
      id:"wood",
      title:{ en:"The yew", ja:"イチイ", zh:"紅豆杉" },
      jp:"一位・アララギ",
      body:[
        { t:"p",
          text:{
            en:"The Japanese yew, <em>Taxus cuspidata</em>, grows slowly in the cold mountains of central and northern Japan, and in Hida it is also a common hedge and garden tree, known locally as <em>araragi</em>. Its wood is dense (about 0.51 air-dry), extremely fine and even-grained, with almost no difference between earlywood and latewood; it cuts cleanly in any direction and takes crisp edges. The heartwood (<em>akata</em>) is a deep orange-red that darkens to rich brown-red with age; the sapwood (<em>shirata</em>) is pale cream. Ichii is Gifu's prefectural tree.",
            ja:"日本のイチイは本州中部と北部の寒い山でゆっくり育ち、飛騨では生垣や庭木としてもおなじみで、土地ではアララギと呼ばれる。材は密で（気乾比重およそ〇・五一）、とてもきめ細かく均質で、早材と晩材の差がほとんどない。どの向きにもきれいに切れ、角がくっきり立つ。心材（赤太）は深い橙赤色で年とともに濃い赤褐色に深まり、辺材（白太）は淡いクリーム色である。イチイは岐阜県の県木である。",
            zh:"日本紅豆杉（Taxus cuspidata）生長於日本中部與北部的寒冷山區，生長緩慢；在飛驒也常作為綠籬與庭園樹，當地稱為「araragi」。其木材緻密（氣乾密度約 0.51），極為細緻均勻，早材與晚材幾乎沒有差別；從任何方向下刀都能切得乾淨，稜角俐落。心材（赤太）呈深橙紅色，隨年歲轉為濃郁的紅褐色；邊材（白太）為淡乳白色。紅豆杉是岐阜縣的縣樹。" } },
        { t:"defs",
          items:[
            { term:{ en:"The rank of the tree", ja:"木の位", zh:"樹的位階" },
              jp:"位山と笏",
              def:{
                en:"Tradition holds that from 1159 yew from Kuraiyama, the “mountain of rank” in Hida, was presented to the court to make <em>shaku</em>, the flat batons held by nobles and the emperor in ceremonies, and that the tree was granted the first court rank — ichii — hence its name. Shaku of Kuraiyama yew have been presented for recent imperial enthronements and for the Ise rebuilding.",
                ja:"伝えによれば、一一五九年から飛騨の位山のイチイが朝廷に献上され、貴族や天皇が儀式で手にもつ平たい笏がつくられ、その木に正一位が授けられて「一位」の名がついたという。位山のイチイの笏は、近年の即位の礼や伊勢の遷宮にも献上されている。",
                zh:"相傳自 1159 年起，飛驒「位山」的紅豆杉被獻給朝廷，製作貴族與天皇在儀式中手持的扁平「笏」，此樹並因而獲授正一位，故名「一位」。位山紅豆杉所製的笏，近年仍獻於天皇即位大典與伊勢遷宮。" } },
            { term:{ en:"Red and white", ja:"赤太と白太", zh:"赤太與白太" },
              jp:"あかた・しらた",
              def:{
                en:"The carver plans each piece so that the boundary between heartwood and sapwood falls where it serves the design — the white of an owl's face against a red body, the white collar of a doll's robe. No two pieces are the same, because no two logs are.",
                ja:"彫り手は、心材と辺材の境が意匠に役立つところにくるよう、一つひとつを計画する——赤い体に白いフクロウの顔、人形の衣の白い襟。丸太が二つとないように、作品も二つとない。",
                zh:"雕刻師會規劃每件作品，讓心材與邊材的交界落在有利設計之處——紅色身軀配上白色貓頭鷹臉、人偶衣袍的白色衣領。沒有兩根原木相同，因此也沒有兩件作品相同。" } }
          ] }
      ] },
    { t:"section",
      id:"history",
      title:{ en:"From netsuke to souvenirs", ja:"根付から土産物へ", zh:"從根付到紀念品" },
      jp:"松田亮長",
      body:[
        { t:"p",
          text:{
            en:"The founder of the craft is held to be Matsuda Sukenaga (1800–1871), a Takayama carver of netsuke — the small toggles used to secure pouches to the sash of a kimono. Sukenaga developed a style in which the forms were defined by clean, bold knife cuts rather than fine surface detail or colour, and chose yew for its fine grain and natural two-tone colour. Netsuke became obsolete when Western clothes replaced the kimono, but the style transferred to small sculptures, tea utensils and ornaments, and in the twentieth century to souvenirs for the growing number of visitors to Takayama. The craft was designated a national traditional craft on 10 May 1975, and in 2006 the name Hida Ichii Ittōbori was registered as a regional collective trademark.",
            ja:"この技の祖とされるのは、高山の根付彫師、松田亮長（一八〇〇〜一八七一）である。根付は、巾着などを着物の帯に留める小さな留め具である。亮長は、細かな表面の彫りや彩色ではなく、きっぱりとした刃の切り口で形を決める作風を育て、きめの細かさと天然の二色のためにイチイを選んだ。着物が洋服に替わると根付はすたれたが、その作風は小さな彫刻、茶道具、置物に移り、二十世紀には高山にふえる旅行者のための土産物に移った。一九七五年五月十日に国の伝統的工芸品に指定され、二〇〇六年には「飛騨一位一刀彫」の名が地域団体商標に登録された。",
            zh:"此工藝的創始者公認為高山的根付雕刻師松田亮長（1800–1871）。根付是把小袋繫在和服腰帶上的小型繫扣。亮長發展出一種風格：以乾淨俐落的大刀面來界定造形，而非細密的表面雕飾或彩繪，並因紅豆杉紋理細緻、天然雙色而選用它。當西服取代和服，根付隨之沒落，但這種風格轉移到小雕刻、茶道具與擺飾上，二十世紀更成為造訪高山日增之旅客的紀念品。此工藝於 1975 年 5 月 10 日被指定為國家傳統工藝品；2006 年「飛驒一位一刀彫」之名註冊為地域團體商標。" } },
        { t:"figure",
          caption:{
            en:"How an Ittōbori piece is carved, simplified. The name “one-knife carving” describes the style — each surface left as the blade made it — not a single tool: carvers use dozens of chisels and knives.",
            ja:"一刀彫の彫り方（簡略）。「一刀彫」という名は作風——刃がつくった面をそのまま残す——を言うもので、道具が一本という意味ではない。彫り手は何十本もの鑿や小刀を使う。",
            zh:"一刀彫的雕刻步驟（簡化）。「一刀彫」之名指的是風格——每個面都保留刀刃留下的樣子——而非只用一把工具：雕刻師會使用數十把鑿與刀。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Carving in yew", ja:"イチイを彫る", zh:"雕刻紅豆杉" }, per:4, bh:112,
            steps:[
              { t:{ en:"Season the wood", ja:"材を枯らす", zh:"乾燥木材" }, d:{ en:"Yew blocks are dried slowly for years to avoid cracking.", ja:"イチイの材を割れないよう何年もゆっくり乾かす。", zh:"紅豆杉木塊要緩慢乾燥多年以免開裂。" } },
              { t:{ en:"Read the colours", ja:"色を読む", zh:"判讀顏色" }, d:{ en:"Place the red–white boundary where the design needs it.", ja:"赤と白の境を意匠の要るところに置く。", zh:"把紅白交界放在設計需要之處。" } },
              { t:{ en:"Rough out", ja:"荒彫り", zh:"粗雕" }, d:{ en:"Mallet and broad chisels block in the form.", ja:"槌と幅広の鑿で形をとる。", zh:"以木槌與寬鑿打出大形。" } },
              { t:{ en:"Finish with the blade", ja:"刃で仕上げる", zh:"以刀收尾" }, d:{ en:"Clean facets; no sanding, paint or lacquer.", ja:"くっきりした面。研磨も塗りもしない。", zh:"刀面乾淨俐落；不砂磨、不上色、不上漆。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"subjects",
      title:{ en:"What the carvers make", ja:"彫られるもの", zh:"雕刻題材" },
      jp:"題材と意味",
      body:[
        { t:"table",
          caption:{ en:"Classic subjects of Ichii Ittōbori and their meanings", ja:"一位一刀彫の代表的な題材と意味", zh:"一位一刀彫經典題材及其寓意" },
          cols:[
            { en:"Subject", ja:"題材", zh:"題材" },
            { en:"Japanese", ja:"和名", zh:"日文" },
            { en:"Meaning or use", ja:"意味・用途", zh:"寓意或用途" }
          ],
          jpCols:[1],
          rows:[
            [
              { en:"Owl", ja:"フクロウ", zh:"貓頭鷹" },
              "梟",
              {
                en:"A pun: fukurō also reads as “no hardship” (不苦労); the most popular charm",
                ja:"語呂合わせ：ふくろう＝不苦労。最も好まれる縁起物",
                zh:"諧音：fukurō 也可讀作「不苦勞」；最受歡迎的吉祥物" }
            ],
            [
              { en:"Zodiac animals", ja:"干支", zh:"生肖" },
              "干支",
              {
                en:"Made for the coming year and given as New Year gifts",
                ja:"来る年のためにつくられ、正月の贈り物に",
                zh:"為來年製作，作為新年禮物" }
            ],
            [
              { en:"Hina dolls", ja:"雛人形", zh:"女兒節人偶" },
              "雛",
              {
                en:"For the girls' festival in March; the colour contrast suits court robes",
                ja:"三月の雛祭りに。色の対比が宮廷の衣に合う",
                zh:"用於三月女兒節；紅白對比適合宮廷服飾" }
            ],
            [
              { en:"Daruma", ja:"だるま", zh:"達摩" },
              "達磨",
              { en:"Perseverance; the red heartwood suits the red robe", ja:"忍耐。赤い心材が赤い衣に合う", zh:"堅忍不拔；紅色心材正配紅袍" }
            ],
            [
              { en:"Netsuke", ja:"根付", zh:"根付" },
              "根付",
              {
                en:"The original form; now collected rather than worn",
                ja:"もとの形。いまは身につけるより集められる",
                zh:"最初的形式；如今多為收藏而非佩戴" }
            ],
            [
              { en:"Tea utensils", ja:"茶道具", zh:"茶道具" },
              "茶杓・香合",
              { en:"Tea scoops, incense boxes, lids", ja:"茶杓、香合、蓋", zh:"茶杓、香盒、蓋子" }
            ],
            [
              { en:"Shaku", ja:"笏", zh:"笏" },
              "笏",
              {
                en:"Ritual batons of yew for Shinto priests — and, from Kuraiyama, for the court",
                ja:"神職のためのイチイの笏——位山からは朝廷のために",
                zh:"神職用紅豆杉笏——產自位山者獻給朝廷" }
            ]
          ] },
        { t:"p",
          text:{
            en:"A good piece is recognised by the clarity of its cuts: surfaces that are flat and crisp, edges that meet cleanly, no fuzz or sanding marks, and a composition that uses the red and white of the wood rather than fighting it. Pieces sold under the regional trademark carry a label identifying them as genuine Hida Ichii Ittōbori.",
            ja:"良い作品は切り口の明快さでわかる。平らでくっきりした面、きれいに出会う稜線、けばや研磨のあとがないこと、そして木の赤と白に逆らわずそれを生かした構成。地域団体商標のもとで売られる品には、本物の飛騨一位一刀彫であることを示す札がつく。",
            zh:"好作品可從刀面的清晰度辨識：表面平整俐落、稜線乾淨交會、沒有毛刺或砂磨痕跡，並且構圖善用而非對抗木材的紅與白。以地域團體商標販售的作品，附有證明其為正宗飛驒一位一刀彫的標籤。" } }
      ] },
    { t:"section",
      id:"carvers",
      title:{ en:"A carving tradition", ja:"彫りの伝統", zh:"雕刻傳統" },
      jp:"飛騨の彫師",
      body:[
        { t:"p",
          text:{
            en:"Ittōbori belongs to a long line of carving in Hida and Mino. The itinerant monk Enkū (1632–1695), born in Mino, carved thousands of Buddhist images with a hatchet and chisel in a rough, faceted style — some from scraps of wood left over from other work — and some of his most powerful late works are in Hida. In the eighteenth and nineteenth centuries, the Mizuma family of carvers and Taniguchi Yoroku (1822–1864) decorated temples and the festival floats of Takayama with carving of astonishing intricacy. Ittōbori sits between the two: bold like Enkū, precise like the float carvers.",
            ja:"一刀彫は、飛騨と美濃の長い彫りの系譜に連なる。美濃に生まれた遊行僧円空（一六三二〜一六九五）は、斧と鑿で何千もの仏像を荒々しく面の立った作風で彫った——ほかの仕事の端材から彫ったものもある——そして、その最も力強い晩年の作のいくつかは飛騨にある。十八、十九世紀には、水間の一族の彫師や谷口与鹿（一八二二〜一八六四）が、驚くほど精緻な彫りで寺や高山の祭屋台を飾った。一刀彫はその二つのあいだにある。円空のように大胆で、屋台の彫師のように正確である。",
            zh:"一刀彫屬於飛驒與美濃悠久的雕刻傳承。出生於美濃的雲遊僧圓空（1632–1695）以斧與鑿雕出數千尊粗獷、刀面分明的佛像——有些以其他工作剩下的木屑雕成——其晚年最有力量的幾件作品就在飛驒。十八、十九世紀，水間家族的雕師與谷口與鹿（1822–1864），以令人驚嘆的精細雕刻裝飾寺院與高山祭典屋台。一刀彫介於兩者之間：像圓空一樣大膽，又像屋台雕師一樣精準。" } },
        { t:"note",
          label:{ en:"Handling yew", ja:"イチイを扱う", zh:"處理紅豆杉" },
          text:{
            en:"The leaves, bark and seeds of yew contain toxic alkaloids, and its fine dust can irritate the skin and lungs, so carvers work with care and ventilation. The finished, dry carvings are safe to handle; the sweet red flesh around the seed, eaten by children in Hida in the past, is the only part that is not poisonous — the seed inside it is.",
            ja:"イチイの葉、樹皮、種子には毒のあるアルカロイドが含まれ、細かい粉は皮膚や肺を刺激しうるので、彫り手は注意し換気して働く。仕上がって乾いた彫り物は手にとっても安全である。かつて飛騨の子どもが食べた種のまわりの甘い赤い果肉だけは毒がない——なかの種には毒がある。",
            zh:"紅豆杉的葉、樹皮與種子含有毒生物鹼，其細粉可能刺激皮膚與肺部，因此雕刻師會小心並保持通風。完成且乾燥的雕刻品可安心把玩；過去飛驒孩童會吃的種子周圍甜美紅色假種皮，是唯一無毒的部分——但包在裡面的種子有毒。" } }
      ] },
    { t:"section",
      id:"founders",
      title:{ en:"How the style was made", ja:"作風の成り立ち", zh:"風格的形成" },
      jp:"平田亮朝と松田亮長",
      body:[
        { t:"p",
          text:{
            en:"Matsuda Sukenaga was not born in the castle town. According to the Hida local-products association, he was born in 1800 in Shirakawa village and brought up in Takayama by the Matsuda, a family of metal-casters, whose name he took. Drawn to sculpture from boyhood, he travelled widely, visiting the workshops of known carvers and studying the old images kept in temples and shrines. Takayama city names him together with an older master, Hirata Suketomo, as the two carvers through whom the craft flourished in the late Edo period. Hirata, born in Takayama, worked in Edo as the house netsuke carver of a pouch merchant in Nihonbashi and died there in 1847; several accounts describe Sukenaga as his pupil.",
            ja:"松田亮長は城下の生まれではない。飛騨地場産業振興センターによれば、一八〇〇年に白川村で生まれ、高山の鋳物師の松田家に育てられ、その姓を継いだ。幼いころから彫刻にひかれ、各地を旅して名のある彫師の仕事場を訪ね、寺社に伝わる古い像を学んだ。高山市は、江戸時代後期にこの技を栄えさせた彫師として、亮長とともに年長の名工、平田亮朝の名をあげる。高山に生まれた平田は、江戸で日本橋の袋物商のお抱え根付師として働き、一八四七年にその地で没した。亮長をその弟子とする記述もいくつかある。",
            zh:"松田亮長並非出生於城下町。據飛驒地場產業振興中心所述，他於 1800 年生於白川村，由高山的鑄物師松田家撫養長大，並承其姓氏。他自幼醉心雕刻，遊歷各地，造訪知名雕師的工坊，研究寺社所藏的古像。高山市把他與一位年長的名匠平田亮朝並列，稱兩人是讓此技藝在江戶後期興盛的雕師。平田生於高山，在江戶擔任日本橋一家袋物商的專屬根付師，1847 年卒於當地；也有數種記載稱亮長是他的弟子。" } },
        { t:"p",
          text:{
            en:"The decisive moment, in the craft's own telling, came in Nara. There Sukenaga saw the Nara dolls — figures carved in broad, faceted cuts and then brightly painted — and regretted that the colour hid the character of the wood. He resolved to carve in Hida's yew instead, letting its grain and its red and white do the work of paint. His netsuke of snakes, frogs and tortoises were admired for their precision, and he was ranked with the great netsuke makers of his day: Tanaka Minkō of Ise, Ogasawara Issai of Kishū and Takeda Yūgetsu of Kaga. He finished his pieces by polishing them with scouring rush and the rough leaves of the <em>muku</em> tree and rubbing in wax — a gentler surface than the crisp, unpolished facets most Ittōbori carvers leave today.",
            ja:"この技の語り伝えでは、決定的な出来事は奈良で起きた。亮長はそこで、大きく面を立てて彫り、あざやかに彩色した奈良人形を見て、色が木の味わいを隠していることを惜しんだ。そして飛騨のイチイで彫ることを決め、絵の具の役目を木目と赤白の色にまかせた。蛇、蛙、亀の根付はその精確さで称えられ、伊勢の田中岷江、紀州の小笠原一斎、加賀の武田友月という同時代の名だたる根付師と並べられた。仕上げにはトクサとムクの葉で磨き、蝋を摺りこんだ。いまの一刀彫の多くの彫り手が残す、磨かないくっきりした刃の面より、やわらかな肌である。",
            zh:"依照這門工藝自身的說法，關鍵時刻發生在奈良。亮長在那裡看到奈良人形——以寬大刀面雕成、再塗上鮮豔色彩的人偶——惋惜色彩掩蓋了木材的韻味。他決心改用飛驒的紅豆杉雕刻，讓紋理與紅白二色擔起顏料的角色。他雕的蛇、青蛙與烏龜根付以精準見稱，與同時代的根付名家並列：伊勢的田中岷江、紀州的小笠原一齋與加賀的武田友月。他以木賊與糙葉樹（muku）粗糙的葉片打磨作品，再擦入蠟——比起今日多數一刀彫雕師保留的、未經打磨的俐落刀面，質感更為柔和。" } },
        { t:"note",
          label:{ en:"Ittōbori in Nara", ja:"奈良の一刀彫", zh:"奈良的一刀彫" },
          text:{
            en:"The word <em>ittōbori</em> is not Hida's alone. Nara has its own tradition of the same name, whose dolls are carved with bold facets and painted in bright colours and gold — the style that, by tradition, provoked Sukenaga's rejection of colour. The two crafts share a way of cutting and differ in their answer to paint.",
            ja:"「一刀彫」という言葉は飛騨だけのものではない。奈良にも同じ名の伝統があり、その人形は大胆な面で彫られ、あざやかな色と金で彩られる。伝えによれば、亮長が色を退けるきっかけになった作風である。二つの工芸は彫り方を共有し、彩色への答えで分かれる。",
            zh:"「一刀彫」一詞並非飛驒專有。奈良也有同名的傳統，其人偶以大膽刀面雕成，再施以鮮豔色彩與金箔——相傳正是這種風格促使亮長摒棄上色。兩種工藝共享同一種刀法，卻對彩繪給出不同的答案。" } }
      ] },
    { t:"section",
      id:"reading-yew",
      title:{ en:"Reading the log", ja:"丸太を読む", zh:"判讀原木" },
      jp:"赤太と白太",
      body:[
        { t:"p",
          text:{
            en:"Yew grows extremely slowly — a trunk 30 cm across takes more than a century — and the wood used for Ittōbori comes from trees said to be three to five hundred years old. Large yew is scarce: it grows mainly in Hokkaido, Hida and the north-east of Honshū, and every block is precious. Before carving begins, the carver studies the end grain and the sides of the block to see where the boundary between the red heartwood and the narrow white sapwood runs, and how the growth rings curve, because the design must be fitted to the wood rather than the other way round. An owl is typically placed so that the white falls across its face and breast; a Daruma or a priest is cut wholly from the heart; a Hina empress may wear a white collar where the sapwood meets the red.",
            ja:"イチイはきわめてゆっくり育ち、直径三十センチの幹になるには百年以上かかる。一刀彫に使う材は、樹齢三百年から五百年といわれる木からとる。大きなイチイは乏しく、おもに北海道、飛騨、本州の東北に育つので、材の一つひとつが貴重である。彫りはじめる前に、彫り手は木口と側面を見て、赤い心材と細い白い辺材の境がどこを走り、年輪がどう曲がっているかを確かめる。意匠を木に合わせるのであって、その逆ではないからである。フクロウなら、ふつう白が顔と胸にかかるように置く。だるまや僧はすべて心材から彫る。雛人形の后には、辺材が赤に出会うところで白い襟がつくこともある。",
            zh:"紅豆杉生長極為緩慢——樹幹長到直徑 30 公分需要一百多年——一刀彫所用木材，據說取自樹齡三百至五百年的樹。大徑紅豆杉十分稀少，主要生長在北海道、飛驒與本州東北，每一塊木料都很珍貴。開雕之前，雕刻師會仔細觀察木口與側面，確認紅色心材與窄窄的白色邊材交界走向、年輪如何彎曲，因為設計必須配合木材，而非反過來。貓頭鷹通常這樣安排：讓白色落在臉部與胸前；達摩或僧人則完全由心材雕出；女兒節人偶的皇后，可能在邊材與紅色交會處多了一道白色衣領。" } },
        { t:"figure",
          caption:{
            en:"Schematic, not to scale: how a carving blank is taken from a yew log so that the white sapwood falls on the face of an owl and the red heartwood forms its body. After carvers' descriptions of the craft.",
            ja:"模式図（縮尺は正確でない）。白い辺材がフクロウの顔に、赤い心材が胴になるよう、イチイの丸太から彫りの材をとる。彫り手の説明にもとづく。",
            zh:"示意圖（非按比例）：從紅豆杉原木取出雕刻用材，讓白色邊材落在貓頭鷹臉上、紅色心材構成身體。依雕刻師對此工藝的說明繪製。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 310" role="img">';
            s += F.text(20, 28, lang==="en"?"FITTING THE OWL TO THE YEW":(lang==="ja"?"イチイにフクロウを合わせる":"讓貓頭鷹配合紅豆杉"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            var cx = 150, cy = 175;
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="108" fill="#FBFAF7" stroke="#7C6B52"/>';
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="74" fill="#EEE1DF" stroke="#A08F73"/>';
            for (var r = 14; r < 108; r += 13) s += '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="#CDC6B9" stroke-width="0.6"/>';
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="2" fill="#7C6B52"/>';
            s += '<rect x="168" y="78" width="46" height="74" fill="none" stroke="#201E1B" stroke-dasharray="4 3" stroke-width="1.2"/>';
            function lab(x1, y1, x2, y2, t){ return '<path d="M'+x1+' '+y1+' L'+x2+' '+y2+'" stroke="#8B857C" fill="none"/>' + F.text(x2+5, y2+4, L(t), { size:10.5, fill:"#201E1B", max:26, lh:12 }); }
            s += lab(240, 110, 278, 72, { en:"Sapwood (shirata): pale cream", ja:"辺材（白太）：淡いクリーム色", zh:"邊材（白太）：淡乳白色" });
            s += lab(214, 130, 278, 132, { en:"Blank cut across the boundary", ja:"境をまたいで材をとる", zh:"跨越交界取材" });
            s += lab(190, 205, 278, 205, { en:"Heartwood (akata): orange-red, darkening with age", ja:"心材（赤太）：橙赤色、年とともに深まる", zh:"心材（赤太）：橙紅色，隨年歲加深" });
            s += F.text(150, 300, lang==="en"?"End grain of the log":(lang==="ja"?"丸太の木口":"原木木口"), { size:10.5, fill:"#55504A", anchor:"middle" });
            // the carving
            var x0 = 470, w = 100;
            s += '<rect x="'+x0+'" y="60" width="'+w+'" height="214" fill="#FBFAF7" stroke="#7C6B52"/>';
            s += '<path d="M'+x0+' 142 Q'+(x0+25)+' 132 '+(x0+50)+' 140 T'+(x0+w)+' 136 L'+(x0+w)+' 274 L'+x0+' 274 Z" fill="#EEE1DF" stroke="none"/>';
            s += '<rect x="'+x0+'" y="60" width="'+w+'" height="214" fill="none" stroke="#7C6B52"/>';
            s += '<ellipse cx="520" cy="178" rx="40" ry="84" fill="none" stroke="#201E1B" stroke-width="1.2"/>';
            s += '<path d="M488 104 L494 86 L504 100 M552 104 L546 86 L536 100" fill="none" stroke="#201E1B" stroke-width="1.2"/>';
            s += '<circle cx="505" cy="122" r="11" fill="none" stroke="#201E1B"/><circle cx="535" cy="122" r="11" fill="none" stroke="#201E1B"/>';
            s += '<circle cx="505" cy="122" r="3" fill="#201E1B"/><circle cx="535" cy="122" r="3" fill="#201E1B"/>';
            s += '<path d="M516 134 L520 146 L524 134 Z" fill="#8B857C"/>';
            s += '<path d="M496 180 q24 14 48 0 M498 204 q22 12 44 0 M502 228 q18 10 36 0" fill="none" stroke="#A08F73"/>';
            s += lab(560, 118, 598, 96, { en:"Face and eyes in the white", ja:"顔と目は白のなかに", zh:"臉與眼睛落在白色中" });
            s += lab(570, 139, 598, 150, { en:"The colour line, placed by eye", ja:"色の境は目で決める", zh:"色線以目測安排" });
            s += lab(556, 210, 598, 214, { en:"Body in the red; facets left as cut", ja:"胴は赤のなかに。刃の面を残す", zh:"身體落在紅色中；保留刀面" });
            s += F.text(520, 300, lang==="en"?"The finished blank, front view":(lang==="ja"?"彫り上がり（正面）":"完成的雕件（正面）"), { size:10.5, fill:"#55504A", anchor:"middle" });
            return s + '</svg>';
          } },
        { t:"p",
          text:{
            en:"Colour is the other reason yew suits the craft. Fresh heartwood is a clear orange-red; exposed to light and handled for years, it deepens to a lustrous brown-red, and the sapwood turns from white to a warm ivory, so that an old carving looks quite unlike a new one. Because the colours belong to the wood, nothing can chip or wear away, and carvers regard this slow change as part of the work rather than damage to it.",
            ja:"色も、イチイがこの工芸に合う理由である。新しい心材は澄んだ橙赤色だが、光にあたり何年も手にふれるうちに、艶のある赤褐色に深まり、辺材は白から温かい象牙色に変わる。だから古い彫り物は新しいものとまるで違って見える。色は木そのもののものなので、欠けたり擦りへったりするものは何もない。彫り手はこのゆっくりした変化を、傷みではなく作品の一部とみなす。",
            zh:"色彩是紅豆杉適合此工藝的另一個原因。新鮮心材呈清澈的橙紅色；經多年光照與把玩，會加深為富光澤的紅褐色，邊材則從白色轉為溫暖的象牙色，因此老雕件看來與新作截然不同。由於顏色屬於木材本身，沒有任何東西會剝落或磨損；雕刻師把這種緩慢變化視為作品的一部分，而非損傷。" } }
      ] },
    { t:"section",
      id:"knives",
      title:{ en:"Forty chisels and no paint", ja:"四十本の鑿と無彩色", zh:"四十把鑿刀，不施色彩" },
      jp:"道具と仕上げ",
      body:[
        { t:"p",
          text:{
            en:"The name “one-knife carving” misleads. According to the national federation of timber cooperatives, an Ittōbori carver uses more than forty kinds of chisel on a single piece, and carvers themselves explain the name as “one cut at a time, each with full attention” rather than one tool. The work moves from saw to mallet and chisel, then to hand-held tools, and the surfaces are finished directly from the blade. What distinguishes the style is restraint: the carver leaves each plane as the edge made it, so that the light breaks across the facets, and does not sand, paint, stain or lacquer the wood.",
            ja:"「一刀彫」という名は誤解をまねく。全国木材組合連合会によれば、一刀彫の彫り手は一つの作品に四十種類を超える鑿を使い、彫り手自身はこの名を、道具が一本という意味ではなく「一刀一刀に心をこめる」ことだと説明する。仕事は鋸から槌と鑿へ、さらに手でもつ道具へと進み、面は刃から直接仕上げられる。この作風をきわだたせるのは抑制である。彫り手は面を刃がつくったままに残し、光がその面に砕けるようにして、木を研磨せず、彩色も染めも塗りもしない。",
            zh:"「一刀彫」這個名稱容易讓人誤會。據全國木材組合聯合會所述，一刀彫雕刻師雕一件作品要用超過 40 種鑿刀；雕刻師本身也解釋，這個名稱指的是「每一刀都全神貫注」，而非只用一把工具。工作從鋸開始，接著是木槌與鑿，再到手持刀具，表面直接以刀刃收尾。這種風格的特點在於克制：雕刻師讓每個面維持刀刃造成的樣子，使光線在刀面上碎裂折射，並且不砂磨、不彩繪、不染色、也不上漆。" } },
        { t:"defs",
          items:[
            { term:{ en:"Flat chisels", ja:"平鑿・平刀", zh:"平鑿" },
              jp:"ひらのみ",
              def:{
                en:"For the broad planes that give an Ittōbori figure its faceted, almost architectural look.",
                ja:"一刀彫の像に面の立った、建築のような姿を与える広い平面のために。",
                zh:"用於削出大平面，賦予一刀彫作品稜面分明、近乎建築般的外觀。" } },
            { term:{ en:"Gouges", ja:"丸鑿・丸刀", zh:"圓鑿" },
              jp:"まるのみ",
              def:{
                en:"Curved blades of many sweeps for hollows, the folds of a robe, the round eyes of an owl.",
                ja:"さまざまな丸みの刃で、くぼみ、衣のひだ、フクロウの丸い目を彫る。",
                zh:"各種弧度的彎刃，用於凹處、衣袍褶紋與貓頭鷹圓圓的眼睛。" } },
            { term:{ en:"V-tools and knives", ja:"三角刀・切出し", zh:"三角刀與切出刀" },
              jp:"さんかくとう・きりだし",
              def:{
                en:"For feathers, hair and the fine lines of a face — the last cuts, which decide the expression.",
                ja:"羽、髪、顔の細い線のために。表情を決める最後の刃である。",
                zh:"用於羽毛、毛髮與臉部細線——最後幾刀，決定了表情。" } },
            { term:{ en:"No finish", ja:"仕上げをしない", zh:"不加塗裝" },
              jp:"白木",
              def:{
                en:"The cut surface of dense yew is already smooth and lustrous; handling, not polish, gives it its sheen over time.",
                ja:"密なイチイの切り口は、それだけでなめらかで艶がある。年月のつやを与えるのは磨きではなく、手にふれることである。",
                zh:"緻密紅豆杉的切面本身就平滑而有光澤；隨時間增添光澤的是把玩，而非打磨。" } }
          ] }
      ] },
    { t:"section",
      id:"netsuke",
      title:{ en:"The discipline of the netsuke", ja:"根付という制約", zh:"根付的約束" },
      jp:"紐通し",
      body:[
        { t:"p",
          text:{
            en:"The style was formed by the netsuke, and its limits still show. A netsuke hung on a silk cord from the sash, anchoring a tobacco pouch or a tiered medicine case (<em>inrō</em>), and it was handled, knocked and rubbed against cloth all day. It therefore had to be compact, with no thin projecting parts to snap off or catch on the kimono, and it needed two channels drilled through the back for the cord (<em>himotōshi</em>). A frog, a tortoise or a coiled snake that fits the palm of the hand is a natural subject; a crane with outstretched wings is not. Ittōbori kept this habit of closed, rounded compositions even when its carvings grew larger and moved from the sash to the shelf, and much of its character — figures that seem to have been pressed into a block rather than built outwards from it — comes from it. When Western dress replaced the kimono in the Meiji era, great numbers of Edo-period netsuke were sold to foreign collectors, and today they are valued chiefly as sculpture in miniature.",
            ja:"この作風は根付によってつくられ、その制約はいまも見てとれる。根付は帯から絹の紐で下がり、煙草入れや印籠をとめるもので、一日じゅう手にふれ、ぶつかり、布にこすれた。だから小さくまとまり、折れたり着物にひっかかったりする細い出っぱりがなく、背には紐を通す二つの穴、紐通しをあけねばならなかった。手のひらにおさまる蛙や亀やとぐろを巻いた蛇は自然な題材だが、翼を広げた鶴はそうではない。一刀彫は、作品が大きくなり帯から棚へ移ってからも、この閉じた丸い構成の習いを守った。塊から外へ組み上げたのではなく、塊のなかに押しこめたような像という性格の多くは、そこから来ている。明治に洋服が着物に取って代わると、江戸時代の根付は大量に外国の収集家の手に渡り、いまはおもに小さな彫刻として珍重されている。",
            zh:"這種風格由根付塑造，其限制至今仍清晰可見。根付以絲繩從腰帶垂下，用來固定菸草袋或多層藥盒（印籠），整天被握在手中、碰撞、與布料摩擦。因此它必須小巧緊湊，沒有會折斷或勾住和服的細長突出部，背面還得鑽出兩道穿繩的孔（紐通し）。能握在掌心的青蛙、烏龜或盤蛇是自然的題材，展翅的鶴則不是。即使作品變大、從腰帶移到架上，一刀彫仍保留這種封閉、圓融構圖的習慣；其造形宛如被壓進木塊之中、而非從木塊向外建構，這份性格大多源於此。明治時代西服取代和服後，大量江戶時代根付流入外國收藏家手中，如今主要被視為微型雕塑而受珍藏。" } }
      ] },
    { t:"section",
      id:"today",
      title:{ en:"The carvers today", ja:"いまの彫り手", zh:"今日的雕刻師" },
      jp:"飛騨一位一刀彫協同組合",
      body:[
        { t:"p",
          text:{
            en:"The craft is organised through the Hida Ichii Ittōbori cooperative, based in Katano-machi, Takayama, which holds the regional trademark of 2006. Its members are small workshops, several of them run by families, and the way into the trade is still apprenticeship begun young: the carver Higashi Katsuhiro started at fifteen, and the certified traditional craftsman Wani Hisayuki at sixteen. Higashi has received the Minister of Health, Labour and Welfare's award for outstanding skilled workers. The best place to see the work is in the old town, where several carvers keep a bench in the shop window, and one workshop sells at a stall in the morning market along the Miyagawa river; makers and workshops are listed in the <a href=\"makers.html\">directory</a>.",
            ja:"この工芸は、高山市片野町に本拠を置き、二〇〇六年の地域団体商標をもつ飛騨一位一刀彫協同組合を通じてまとまっている。組合員は小さな工房で、家族で営むところもいくつかある。この職に入る道は、いまも若いうちに始める弟子入りである。高山のある彫り手は十五歳で、伝統工芸士の和仁久幸は十六歳で入門した。前者は厚生労働大臣の卓越した技能者の表彰を受けている。仕事を見るなら古い町並みがよい。何人かの彫り手は店の窓辺に仕事台を置き、宮川沿いの朝市に店を出す工房もある。つくり手と工房は<a href=\"makers.html\">名簿</a>に載せている。",
            zh:"這項工藝以總部設在高山市片野町、持有 2006 年地域團體商標的「飛驒一位一刀彫協同組合」為組織核心。組合成員都是小工坊，其中數家由家族經營；入行之路至今仍是年少拜師：雕刻師東勝廣 15 歲入門，傳統工藝士和仁久幸則是 16 歲。東勝廣曾獲厚生勞動大臣頒發的卓越技能者表揚。最適合觀賞作品的地方是老街：好幾位雕刻師把工作台擺在店舖櫥窗邊，也有一家工坊在宮川沿岸的朝市擺攤；工匠與工坊列於<a href=\"makers.html\">名錄</a>。" } },
        { t:"p",
          text:{
            en:"Demand has changed with the Japanese house. The traditional subjects — Takasago dolls of the old couple who stand for long marriage, the Seven Gods of Fortune, Hannya and other masks, alcove ornaments — were made for the <em>tokonoma</em> and the formal room, and as families moved into Western-style homes without them, sales of these large pieces declined. Carvers have responded with smaller and newer work: zodiac figures for the coming year, owls and frogs as charms, Hina dolls in yew for the girls' festival on 3 March, netsuke for collectors at home and abroad, and contemporary animals and designs alongside the classic repertoire. The yew darkens on the shelf as it always has, and an owl bought today will look different in thirty years.",
            ja:"需要は日本の家とともに変わった。伝統的な題材——夫婦の長寿をあらわす高砂人形、七福神、般若などの面、床の間の置物——は床の間や座敷のためにつくられたもので、家族が床の間のない洋風の家に移るにつれ、こうした大きな作品の売れ行きは落ちた。彫り手は、より小さく新しい仕事で応えてきた。来る年の干支、縁起物のフクロウやカエル、三月三日の雛祭りのためのイチイの雛人形、国の内外の収集家のための根付、そして古典の題材とならぶ現代の動物や意匠である。イチイは昔と変わらず棚の上で色を深め、いま買ったフクロウは三十年後には違って見えるだろう。",
            zh:"需求隨著日本住宅而改變。傳統題材——象徵白頭偕老的高砂人偶、七福神、般若等面具、壁龕擺飾——原是為床之間與正式客廳而作；當家庭搬進沒有床之間的西式住宅，這類大件作品的銷路隨之下滑。雕刻師以更小、更新的作品回應：迎接來年的生肖、作為吉祥物的貓頭鷹與青蛙、3 月 3 日女兒節用的紅豆杉雛人偶、供國內外收藏家收藏的根付，以及與經典題材並陳的當代動物與設計。紅豆杉一如既往在架上慢慢變深，今天買下的貓頭鷹，三十年後看起來將會不同。" } },
        { t:"tiny",
          text:{
            en:"Sources: Hida Regional Industry Promotion Centre, history of Ichii Ittōbori and Matsuda Sukenaga; Takayama city, Ichii Ittōbori; UAG art research, Hida carvers; NIHONMONO interview with Wani Hisayuki; Takayama Green Hotel, Higashi Katsuhiro; Discover Japan on Hida Ichii Ittōbori; Japan Federation of Timber Cooperatives (kikorin), Ichii Ittōbori; Taniguchi Chōkoku, about Ichii Ittōbori.",
            ja:"出典：飛騨地場産業振興センター「一位一刀彫の歴史 創始者 松田亮長」、高山市「一位一刀彫」、UAG美術家研究所（飛騨の彫刻家）、NIHONMONO（和仁久幸）、高山グリーンホテル（一刀彫作家紹介）、Discover Japan（飛騨一位一刀彫）、全国木材組合連合会「きこりんの森」、谷口彫刻「一位一刀彫とは」。",
            zh:"資料來源：飛驒地場產業振興中心〈一位一刀彫的歷史：創始者松田亮長〉；高山市〈一位一刀彫〉；UAG 美術家研究所（飛驒雕刻家）；NIHONMONO 和仁久幸訪談；高山綠色飯店（東勝廣）；Discover Japan（飛驒一位一刀彫）；全國木材組合聯合會「きこりんの森」；谷口彫刻〈何謂一位一刀彫〉。" } }
      ] },
    { t:"related",
      items:[
        { href:"shunkei.html", why:{ en:"Hida's lacquer craft.", ja:"飛騨の漆の工芸。", zh:"飛驒的漆藝。" } },
        { href:"trees.html", why:{ en:"Ichii among Gifu's trees.", ja:"岐阜の木のなかのイチイ。", zh:"岐阜樹木中的紅豆杉。" } },
        { href:"woodpeople.html", why:{ en:"Enkū and other carvers.", ja:"円空とほかの彫り手。", zh:"圓空與其他雕刻家。" } },
        { href:"tools.html", why:{ en:"The carvers' knives.", ja:"彫り手の小刀。", zh:"雕刻師的刀具。" } }
      ] }
  ] };

/* ---- ---------------------------------------------- enku */
GIFU.pages["enku"] = {
  kicker: { en:"Wood Craft · 07", ja:"木の工芸 · 07", zh:"木作工藝 · 07" },
  title:  { en: "Enkū's Buddhas", ja: "円空仏", zh: "圓空佛" },
  jp: "円空 · 鉈彫り · 木っ端仏 · 千光寺 · 弥勒寺",
  lede: {
    en: "Enkū was a wandering monk from Mino who, in the second half of the seventeenth century, walked from Hokkaidō to the Kinki region carving Buddhas from whatever wood he found — with a hatchet, fast, and without polish. He is said to have vowed to make 120,000. About 5,400 have been found, more than 1,600 of them in Gifu, many still kept by the villages and small temples he gave them to. Their split faces and slight smiles have made him one of the most loved sculptors in Japan.",
    ja: "円空は美濃出身の遊行僧で、十七世紀後半、北海道から近畿まで歩きながら、見つけた木で仏を彫った。鉈で、速く、磨くことなく。十二万体を彫ると誓ったと伝えられる。これまでに約五千四百体が見つかり、うち千六百体以上が岐阜県にあり、多くはいまも彼が贈った村や小さな寺に守られている。割れ目の残る顔とかすかな微笑みによって、円空は日本で最も愛される彫刻家の一人となった。",
    zh: "圓空是出身美濃的雲遊僧人，十七世紀後半，他從北海道一路走到近畿，用隨處找到的木頭雕刻佛像——用柴刀，快速，不加打磨。據說他曾發願雕刻十二萬尊。迄今已發現約五千四百尊，其中一千六百尊以上在岐阜縣，許多至今仍由當年受贈的村落與小寺守護著。那些留有劈裂痕的臉與淡淡的微笑，使他成為日本最受喜愛的雕刻家之一。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Where Enkū's figures are, and when he made them. About 5,400 have been identified; more than 3,000 are in Aichi — over a thousand at a single Nagoya temple — and more than 1,600 in Gifu; the rest are scattered from Hokkaidō and Aomori to Mie and Nara. Counts rise as new figures are found. Dates on the timeline are those given in the usual accounts of his life.",
        ja:"円空仏はどこにあり、いつ彫られたか。確認されているのは約五千四百体。愛知県に三千体以上——名古屋の一つの寺だけで千体を超える——、岐阜県に千六百体以上があり、残りは北海道・青森から三重・奈良まで散らばる。新たな発見につれて数は増えていく。年表の年は、生涯についての通常の記述による。",
        zh:"圓空佛像的分布，以及製作年代。已確認的約有五千四百尊；愛知縣超過三千尊——名古屋一座寺院就有一千尊以上——岐阜縣超過一千六百尊；其餘散布在北海道、青森直到三重、奈良。隨著新發現，數字仍在增加。年表上的年份依一般的生平記述。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 340" role="img" aria-label="Distribution of Enku statues and his life">' +
          '<rect x="0.5" y="0.5" width="759" height="339" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"ABOUT 5,400 FIGURES", ja:"約五千四百体", zh:"約五千四百尊" }) + '</text>';
        var bars = [
          [{en:"Aichi",ja:"愛知県",zh:"愛知縣"}, 3000, "3,000+", "#EDE5D2"],
          [{en:"Gifu",ja:"岐阜県",zh:"岐阜縣"}, 1600, "1,600+", "#EADCC1"],
          [{en:"elsewhere",ja:"その他",zh:"其他地區"}, 800, "~800", "#E6E4E0"]
        ];
        var X0 = 150, SC = 0.17;
        bars.forEach(function (b, i) {
          var y = 60 + i * 38;
          s += '<text x="' + (X0 - 10) + '" y="' + (y + 16) + '" text-anchor="end" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(b[0]) + '</text>' +
               '<rect x="' + X0 + '" y="' + y + '" width="' + (b[1] * SC) + '" height="22" fill="' + b[3] + '" stroke="#7C6B52"/>' +
               '<text x="' + (X0 + b[1] * SC + 8) + '" y="' + (y + 16) + '" ' + F + ' font-size="10.5" fill="#201E1B">' + b[2] + '</text>';
        });
        /* timeline */
        var T0 = 60, T1 = 700, Y = 250;
        function tx(yr) { return T0 + (yr - 1630) / (1700 - 1630) * (T1 - T0); }
        s += '<line x1="' + T0 + '" y1="' + Y + '" x2="' + T1 + '" y2="' + Y + '" stroke="#55504A" stroke-width="1.4"/>';
        [1630, 1640, 1650, 1660, 1670, 1680, 1690, 1700].forEach(function (yr) {
          s += '<line x1="' + tx(yr) + '" y1="' + (Y - 3) + '" x2="' + tx(yr) + '" y2="' + (Y + 3) + '" stroke="#55504A"/>' +
               '<text x="' + tx(yr) + '" y="' + (Y + 16) + '" text-anchor="middle" ' + F + ' font-size="9" fill="#8B857C">' + yr + '</text>';
        });
        s += '<rect x="' + tx(1663) + '" y="' + (Y - 12) + '" width="' + (tx(1695) - tx(1663)) + '" height="8" fill="#EADCC1" stroke="#7C6B52" stroke-width="0.8"/>' +
             '<text x="' + ((tx(1663) + tx(1695)) / 2) + '" y="' + (Y - 18) + '" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"carving years, about age 32 to 64",ja:"造像の時期（約32〜64歳）",zh:"造像時期（約 32 至 64 歲）"}) + '</text>';
        var ev = [
          [1632, {en:"born in Mino",ja:"美濃に生まれる",zh:"生於美濃"}, 1],
          [1666, {en:"Aomori, then Hokkaidō",ja:"青森から北海道へ",zh:"青森，再至北海道"}, 2],
          [1680, {en:"1680s: Hida, Mino",ja:"1680年代：飛騨・美濃",zh:"1680 年代：飛驒、美濃"}, 1],
          [1695, {en:"dies at Seki",ja:"関で没す",zh:"卒於關"}, 2]
        ];
        ev.forEach(function (e) {
          var x = tx(e[0]), yy = e[2] === 1 ? Y + 40 : Y + 62;
          s += '<circle cx="' + x + '" cy="' + Y + '" r="4" fill="#201E1B"/>' +
               '<line x1="' + x + '" y1="' + (Y + 20) + '" x2="' + x + '" y2="' + (yy - 11) + '" stroke="#B4AC9C"/>' +
               '<text x="' + x + '" y="' + yy + '" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L(e[1]) + '</text>';
        });
        s += '<text x="30" y="330" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Counts approximate and rising; “elsewhere” is the remainder of the total.",ja:"数は概数で、増えつつある。「その他」は総数からの残り。",zh:"數字為約數且持續增加；「其他地區」為總數扣除後的餘數。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"life",
      title:{ en:"A wandering monk", ja:"遊行の僧", zh:"雲遊之僧" }, jp:"修験 · 伊吹山 · 蝦夷地",
      body:[
        { t:"p", text:{
          en:"Enkū was born in Mino in 1632. Two places claim him — Hashima on the Nōbi plain and Minami in the upper Nagara valley of Gujō — and the question is still argued. He became a <em>shugen</em> ascetic, one of the mountain monks who trained on sacred peaks, and is associated especially with Mount Ibuki on the border of Ōmi. From his early thirties he travelled almost constantly and carved as he went. In 1666 he crossed from Aomori to the Matsumae domain in the south of Hokkaidō, where more than forty of his figures survive; in the following decades he worked through the mountains of Hida and Mino, and in villages from the Kantō to the Kinki.",
          ja:"円空は1632年、美濃に生まれた。生地を名乗る地は二つある——濃尾平野の羽島と、郡上の長良川上流の美並——で、いまも議論が続いている。彼は修験者、すなわち霊峰で修行する山の僧となり、とりわけ近江との境の伊吹山と結びつけて語られる。三十代の初めから彼はほとんど絶えず旅をし、行く先々で彫った。1666年には青森から北海道南部の松前藩へ渡り、そこには四十体を超える像が残っている。その後の数十年、彼は飛騨と美濃の山々を、そして関東から近畿までの村々を巡って彫りつづけた。",
          zh:"圓空於 1632 年生於美濃。有兩個地方自稱是他的出生地——濃尾平原上的羽島，以及郡上長良川上游的美並——至今仍有爭論。他成為修驗者，即在靈峰修行的山岳僧侶，尤其與近江交界的伊吹山有關。從三十出頭起，他幾乎不停地旅行，走到哪裡便雕到哪裡。1666 年，他從青森渡海到北海道南部的松前藩，那裡至今留有四十多尊他的作品；之後數十年，他走遍飛驒與美濃的山地，以及從關東到近畿的村落。" } },
        { t:"p", text:{
          en:"He is said to have vowed to carve 120,000 Buddhas. In his last years he restored the temple of Miroku-ji on the Nagara at Seki, and he died there in 1695. Tradition says that, knowing his end was near, he had himself buried alive by the river in meditation — the practice called <em>nyūjō</em>; whether or not it happened, the story is part of how he is remembered.",
          ja:"彼は十二万体の仏を彫ると誓ったと伝えられる。晩年には関の長良川のほとりの弥勒寺を再興し、1695年にそこで没した。伝承では、死期を悟った円空は川辺で瞑想のまま自らを土に埋めさせた——入定——という。それが実際にあったかどうかは別として、その物語は彼がどう記憶されているかの一部である。",
          zh:"據說他曾發願雕刻十二萬尊佛像。晚年他重興了關市長良川畔的彌勒寺，1695 年在那裡圓寂。傳說他自知大限將至，便在河邊於禪定中讓人將自己活埋——即所謂「入定」；無論此事是否屬實，這個故事都已成為人們記憶他的方式之一。" } }
      ]
    },

    { t:"section", id:"hatchet",
      title:{ en:"The hatchet and the smile", ja:"鉈と微笑み", zh:"柴刀與微笑" }, jp:"鉈彫り · 木っ端仏",
      body:[
        { t:"p", text:{
          en:"Enkū worked mostly with a hatchet and a few chisels, in the manner called <em>natabori</em>, “hatchet carving”. He often split a log with wedges and carved a figure into each piece, leaving the flat split faces as the backs and sides, and many figures keep the grain, the knots and the cracks of the wood. The faces are cut in a few strokes and often smile. Alongside large figures of Kannon, Fudō and the gods of the mountains he made thousands of <em>koppa-butsu</em>, “splinter Buddhas” a few centimetres tall carved from offcuts, which he is said to have given to villagers to place beside the sick or carry as charms. The style was so far from the polished Buddhist sculpture of the workshops that for two centuries his figures were little regarded outside the villages that kept them; in the twentieth century they were rediscovered and admired as among the most original sculpture of the Edo period.",
          ja:"円空はおもに鉈と数本の鑿で彫った。鉈彫りである。丸太を楔で割り、その一片ずつに像を彫って、割った平らな面を背や側面に残すことが多く、多くの像には木目や節や割れがそのまま残っている。顔は数回の刃で刻まれ、しばしば微笑んでいる。観音や不動、山の神々の大きな像とならんで、彼は端材から高さ数センチの「木っ端仏」を何千も彫った。村人に与え、病人のそばに置かせたり、お守りとして持たせたりしたと伝えられる。その作風は工房の磨き上げられた仏像からあまりに遠かったため、二百年のあいだ、それを守る村の外ではほとんど顧みられなかった。二十世紀になって再発見され、江戸時代で最も独創的な彫刻の一つとして称賛されるようになった。",
          zh:"圓空主要使用一把柴刀與幾支鑿子，這種手法稱為「鉈雕」（柴刀雕）。他常用楔子把原木劈開，在每一塊上各雕一尊像，保留劈開的平面作為背面與側面，許多作品都留著木紋、木節與裂痕。臉只用幾刀刻成，往往帶著微笑。除了觀音、不動明王與山神等大型佛像外，他還用邊角料雕了數以千計、高僅數公分的「木端佛」；據說他把它們送給村民，放在病人身旁，或當作護身符隨身攜帶。這種風格與工坊中精雕細磨的佛像相去甚遠，因此兩百年間，除了守護它們的村子之外，幾乎無人重視；到了二十世紀才被重新發現，並被譽為江戶時代最具原創性的雕刻之一。" } }
      ]
    },

    { t:"section", id:"see",
      title:{ en:"Where to see them", ja:"どこで見られるか", zh:"何處可見" }, jp:"千光寺 · 関市円空館 · 羽島",
      body:[
        { t:"grid", cols:2, cells:[
          { k:{en:"Senkō-ji, Takayama",ja:"千光寺（高山市丹生川町）",zh:"千光寺（高山市丹生川町）"}, jp:"円空仏寺宝館",
            body:{en:"A mountain temple of the Shingon school in Nyūkawa, east of Takayama, whose treasure hall shows 64 of Enkū's figures — among them a two-faced <em>Ryōmen Sukuna</em>, the local hero-demon of Hida legend who is said to have founded the temple.",ja:"高山の東、丹生川町の真言宗の山寺。寺宝館に円空仏六十四体を展示し、そのなかには、寺を開いたと伝わる飛騨の伝説の英雄・鬼神、二つの顔を持つ両面宿儺の像もある。",zh:"位於高山東邊丹生川町的真言宗山寺，其寺寶館展示六十四尊圓空佛——其中有一尊雙面的「兩面宿儺」，他是飛驒傳說中亦英雄亦鬼神的人物，據說開創了這座寺院。"} },
          { k:{en:"Seki",ja:"関市",zh:"關市"}, jp:"円空館 · 弥勒寺跡",
            body:{en:"The Enkū museum stands near the site of Miroku-ji by the Nagara, where he spent his last years and died.",ja:"晩年を過ごし没した長良川のほとりの弥勒寺跡の近くに、円空館がある。",zh:"圓空館位於長良川畔彌勒寺遺址附近，那是他度過晚年並圓寂之處。"} },
          { k:{en:"Hashima and Gujō",ja:"羽島市と郡上市",zh:"羽島市與郡上市"}, jp:"生誕地",
            body:{en:"Both places that claim his birth keep collections of his figures and museums devoted to him.",ja:"生地を名乗る二つの地は、いずれも円空仏を守り、円空を記念する資料館を持つ。",zh:"兩個自稱為其出生地的地方，都收藏其作品並設有紀念館。"} },
          { k:{en:"Across the border",ja:"県境を越えて",zh:"越過縣界"}, jp:"荒子観音",
            body:{en:"The largest single collection is outside Gifu, at Arako Kannon in Nagoya, which keeps more than a thousand figures, most of them tiny.",ja:"最大のまとまりは岐阜の外、名古屋の荒子観音にあり、千体を超える像——その多くはごく小さい——を守っている。",zh:"數量最多的單一收藏在岐阜之外——名古屋的荒子觀音保存了一千多尊，大多非常小。"} }
        ] }
      ]
    },

    { t:"section", id:"recognise",
      title:{ en:"How to recognise an Enkū", ja:"円空仏の見分け方", zh:"如何辨認圓空佛" }, jp:"特徴",
      body:[
        { t:"ul", items:[
          { en:"<strong>The wood shows.</strong> Split faces, the pith of the log, knots and cracks are left in; many backs are the flat face of a split.", ja:"<strong>木がそのまま見える。</strong>割れた面、丸太の芯、節や割れが残され、背の多くは割った平らな面である。", zh:"<strong>木頭的本色清晰可見。</strong>劈開面、原木的髓心、木節與裂痕都被保留；許多背面就是劈開的平面。" },
          { en:"<strong>Few, bold cuts.</strong> Hatchet and chisel marks are not smoothed away; drapery is a handful of parallel strokes.", ja:"<strong>少なく、大胆な刃。</strong>鉈や鑿の跡をならさず、衣文は数本の平行な刻みで表す。", zh:"<strong>刀數少而大膽。</strong>柴刀與鑿子的痕跡不加修平；衣褶只是幾道平行的刻痕。" },
          { en:"<strong>The smile.</strong> Eyes are often narrow crescents and the mouth turns up at the corners, even on fierce deities.", ja:"<strong>微笑み。</strong>目はしばしば細い三日月形で、口角は上がる。恐ろしい姿の神仏でさえそうである。", zh:"<strong>微笑。</strong>眼睛常是細長的新月形，嘴角上揚——即使是面貌兇猛的神佛也不例外。" },
          { en:"<strong>Writing on the back.</strong> Many figures carry ink inscriptions — a Sanskrit seed syllable for the deity, sometimes a date, a place or a verse.", ja:"<strong>背の墨書。</strong>多くの像には、尊格を表す梵字、ときには年紀や地名や歌が墨で書かれている。", zh:"<strong>背面的墨書。</strong>許多佛像背面有墨書——代表該尊的梵文種子字，有時還有年份、地名或詩句。" }
        ] },
        { t:"note", label:{en:"Visiting",ja:"訪ねるとき",zh:"參訪須知"}, text:{
          en:"Many figures are in small village temples and halls that open only by arrangement or on festival days; the museums at Seki and Hashima and the treasure hall of Senkō-ji are the easiest places to see a good number together.",
          ja:"多くの像は、予約や祭りの日にしか開かない村の小さな寺や堂にある。まとまった数を見やすいのは、関市と羽島市の資料館と、千光寺の寺宝館である。",
          zh:"許多佛像收藏在村中的小寺與小堂，只在預約或節慶日開放；要一次看到較多作品，最方便的是關市與羽島市的紀念館，以及千光寺的寺寶館。" } }
      ]
    },

    { t:"related", items:[
      { href:"shunkei.html", why:{ en:"Hida's other carvers.", ja:"飛騨のほかの彫師。", zh:"飛驒的其他雕刻家。" } },
      { href:"faith.html", why:{ en:"The mountain faiths Enkū belonged to.", ja:"円空が属した山の信仰。", zh:"圓空所屬的山岳信仰。" } },
      { href:"seki.html", why:{ en:"The town where he died.", ja:"彼が没した町。", zh:"他圓寂的城鎮。" } },
      { href:"mountains.html", why:{ en:"The sacred peaks of Gifu.", ja:"岐阜の霊峰。", zh:"岐阜的靈峰。" } }
    ] }
  ]
};

/* ---- ---------------------------------------------- masu */
GIFU.pages["masu"] = { kicker:{ en:"Wood Craft · 08", ja:"木の工芸 · 08", zh:"木作工藝 · 08" },
  title:{ en:"Masu of Ōgaki", ja:"大垣の枡", zh:"大垣木枡" },
  jp:"ヒノキの四角い器 · 全国の八割",
  lede:{
    en:"A masu is a small square box of hinoki, once the standard measure for rice and sake, now the cup from which sake overflows at celebrations, the box of beans thrown at the spring festival, and a gift printed with a company's name. About eighty per cent of Japan's masu are made in one city: Ōgaki, in the flat, water-rich west of Gifu. This page tells how a measuring cup became a symbol of prosperity, why Ōgaki came to make them, and how a small industry that had shrunk to a handful of workshops reinvented itself.",
    ja:"枡はヒノキの小さな四角い箱で、かつては米や酒をはかる標準の器だった。いまは祝いの席で酒があふれる盃であり、節分にまく豆の箱であり、会社の名を刷った贈り物である。日本の枡のおよそ八割は一つの町でつくられる。岐阜の西の平らで水の豊かな大垣である。この頁は、はかる器がいかに繁盛のしるしとなったか、なぜ大垣がそれをつくるようになったか、そしてわずかな工房に縮んだ小さな産業がいかにみずからをつくり直したかを語る。",
    zh:"木枡是扁柏製的小方盒，過去是量米與量酒的標準量器，如今則是慶典中讓酒滿溢而出的酒器、春天節分撒豆用的容器，以及印上公司名稱的贈禮。日本約八成的木枡產自同一座城市：位於岐阜西部、地勢平坦、水源豐沛的大垣。本頁講述量器如何成為繁榮的象徵、大垣為何開始製作木枡，以及一個萎縮到只剩寥寥幾家工坊的小產業如何重新塑造自己。" },
  body:[
    { t:"section",
      id:"measure",
      title:{ en:"From measure to symbol", ja:"はかる器からしるしへ", zh:"從量器到象徵" },
      jp:"升と枡",
      body:[
        { t:"p",
          text:{
            en:"Masu have been used in Japan for about thirteen hundred years, since the Nara period, when the state needed standard measures to collect taxes in rice. Their sizes varied from region to region until the Tokugawa shogunate standardised the Kyō-masu, the Kyoto measure, in the seventeenth century. For three centuries the masu was an instrument of government and commerce: rice stipends, taxes and sales were all counted in it. With the adoption of the metric system for trade in the twentieth century the masu lost its official role, but it survived as a vessel for sake and as a symbol. The pun helped: <em>masu</em> sounds like the word for “increase”, and <em>masu-masu hanjō</em> means “ever-increasing prosperity”.",
            ja:"枡は奈良時代から、およそ千三百年にわたって日本で使われてきた。国が米で税を集めるために標準のはかりを必要としたころからである。その大きさは地域ごとに違っていたが、十七世紀に徳川幕府が京枡を標準に定めた。三世紀のあいだ、枡は政治と商いの道具だった。扶持米も年貢も売り買いも、すべて枡で数えられた。二十世紀に取引でメートル法が採られると、枡は公の役目を失ったが、酒の器として、そしてしるしとして生き残った。語呂も助けた。「ます」は「増す」に通じ、「ますます繁盛」は絶えず増す繁栄を意味する。",
            zh:"木枡在日本已使用約一千三百年，始於奈良時代，當時國家需要標準量器以米徵稅。各地尺寸不一，直到十七世紀德川幕府將「京枡」定為標準。三個世紀間，木枡是政府與商業的工具：俸米、年貢與買賣皆以它計量。二十世紀交易改採公制後，木枡失去官方角色，卻以酒器與象徵的身分存續下來。諧音也幫了忙：「masu」與「增加」同音，「masu-masu hanjō」意為「生意越來越興隆」。" } },
        { t:"table",
          caption:{ en:"Traditional volume units", ja:"伝統の体積の単位", zh:"傳統容量單位" },
          cols:[
            { en:"Unit", ja:"単位", zh:"單位" },
            { en:"Relation", ja:"関係", zh:"換算" },
            { en:"Metric", ja:"メートル法", zh:"公制" },
            { en:"Masu today", ja:"いまの枡", zh:"今日木枡" }
          ],
          numCols:[2],
          rows:[
            [
              { en:"Shaku", ja:"勺", zh:"勺" },
              { en:"1/10 gō", ja:"一合の十分の一", zh:"1/10 合" },
              "≈ 18 mL",
              { en:"Tiny tasting masu", ja:"小さなきき枡", zh:"品酒小枡" }
            ],
            [
              { en:"Gō", ja:"合", zh:"合" },
              { en:"basic unit", ja:"基本の単位", zh:"基本單位" },
              "≈ 180 mL",
              { en:"The sake masu (one-gō masu)", ja:"酒の一合枡", zh:"一合酒枡" }
            ],
            [
              { en:"Shō", ja:"升", zh:"升" },
              { en:"10 gō", ja:"十合", zh:"10 合" },
              "≈ 1.8 L",
              { en:"Standard large masu; the 1.8 L sake bottle (isshōbin)", ja:"大きな一升枡。一升瓶", zh:"大枡；1.8 公升酒瓶（一升瓶）" }
            ],
            [
              { en:"To", ja:"斗", zh:"斗" },
              { en:"10 shō", ja:"十升", zh:"10 升" },
              "≈ 18 L",
              { en:"Sake casks and rice measures", ja:"酒樽や米のはかり", zh:"酒桶與量米" }
            ]
          ] }
      ] },
    { t:"section",
      id:"ogaki",
      title:{ en:"Why Ōgaki", ja:"なぜ大垣か", zh:"為何是大垣" },
      jp:"水の都",
      body:[
        { t:"p",
          text:{
            en:"Masu making took root in Ōgaki in the Meiji period; the usual account credits a carpenter who returned from Nagoya around 1890 with the skill. Ōgaki had three advantages. It was close to Nagoya, the great distribution centre for Kiso hinoki, so good timber was easy to obtain. It had abundant, high-quality groundwater — Ōgaki is known as the “water capital” for its springs — useful in woodworking and in the sake and food trades that bought masu. And it sat on canals and roads leading to the markets of central Japan. At its peak about ten specialist makers worked in the city; today only a few remain — three to five, depending on the account — but they still produce about four-fifths of Japan's masu.",
            ja:"枡づくりは明治に大垣に根づいた。ふつうの説明では、一八九〇年ごろ名古屋からその技をもち帰った大工に始まるとされる。大垣には三つの利点があった。木曽ヒノキの大きな集散地、名古屋に近く、良い材が手に入りやすかった。豊かで質の良い地下水があった——大垣は湧き水から「水の都」と呼ばれる——それは木工にも、枡を買う酒や食の商いにも役立った。そして中部日本の市場へ通じる運河と街道のうえにあった。最盛期には十ほどの専門のつくり手が町で働いた。いまは資料によって三社から五社とわずかだが、なお日本の枡のおよそ五分の四をつくっている。",
            zh:"木枡製作在明治時代於大垣扎根；一般說法是約 1890 年一位從名古屋學藝歸來的木匠開始的。大垣有三項優勢：鄰近木曾扁柏的集散重鎮名古屋，易於取得好木材；擁有豐沛優質的地下水——大垣因湧泉而被稱為「水都」——有利於木工，也有利於購買木枡的酒業與食品業；並且位於通往日本中部各市場的運河與道路上。鼎盛時期城內約有十家專業製造商；如今僅剩寥寥數家——依資料不同為三到五家——卻仍生產日本約五分之四的木枡。" } },
        { t:"figure",
          caption:{
            en:"How a hinoki masu is made, simplified. The corners are joined with interlocking finger-like joints and glued, so that the box is watertight without nails.",
            ja:"ヒノキの枡のつくり方（簡略）。角は噛みあう指のような組み手で接ぎ、接着するので、釘なしで水が漏れない箱になる。",
            zh:"扁柏木枡的製作流程（簡化）。四角以互相咬合的指狀接合並上膠，因此不用釘子也能滴水不漏。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"Making a masu", ja:"枡をつくる", zh:"製作木枡" }, per:3, bh:100,
            steps:[
              { t:{ en:"Hinoki boards", ja:"ヒノキの板", zh:"扁柏板材" }, d:{ en:"Straight-grained hinoki from Kiso and Tōnō, dried and planed.", ja:"木曽や東濃の通直なヒノキを乾かし鉋をかける。", zh:"取自木曾與東濃、紋理通直的扁柏，乾燥並刨平。" } },
              { t:{ en:"Cut the sides", ja:"側板を切る", zh:"裁切側板" }, d:{ en:"Four side boards and a bottom, cut precisely to size.", ja:"四枚の側板と底板を正確な寸法に。", zh:"四片側板與一片底板，精確裁切。" } },
              { t:{ en:"Cut the joints", ja:"組み手を刻む", zh:"加工接合" }, d:{ en:"Interlocking fingers at each corner.", ja:"角ごとに噛みあう組み手。", zh:"每個角做出互鎖的指狀接合。" } },
              { t:{ en:"Glue and assemble", ja:"接着と組立", zh:"上膠組裝" }, d:{ en:"Sides glued and clamped; the bottom fitted.", ja:"側板を接着して締め、底を納める。", zh:"側板上膠夾緊；裝入底板。" } },
              { t:{ en:"Plane and sand", ja:"削り", zh:"刨光" }, d:{ en:"Faces and rim planed smooth; edges eased.", ja:"面と縁を滑らかに削り、角をとる。", zh:"把各面與口緣刨順，修圓稜角。" } },
              { t:{ en:"Mark", ja:"刻印・印刷", zh:"烙印或印刷" }, d:{ en:"Branded, printed or engraved; left unfinished.", ja:"焼印、印刷、彫り。塗らずに仕上げる。", zh:"烙印、印刷或雕刻；不加塗裝。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"revival",
      title:{ en:"Reinventing a traditional product", ja:"伝統の品をつくり直す", zh:"重新塑造傳統產品" },
      jp:"大橋量器",
      body:[
        { t:"p",
          text:{
            en:"The largest of Ōgaki's masu makers, Ōhashi Ryōki, was founded in 1950 by Ōhashi Mune, a woman who built the business in the post-war years. By the time Ōhashi Hiroyuki, who later became the third-generation head, joined in 1993, demand was falling: ceremonial sake drinking was declining, and the company's real sales were about half what the previous generation had believed. Rather than compete on price with a shrinking market, the company set out to find new uses for the masu. It made coloured masu, printed and laser-engraved masu for companies and events, a triangular masu that, by the company's account, won a Good Design award in 2011, a hinoki rice box funded by crowdfunding, planters, humidifiers and interior wall systems built from masu. By its own account it now makes about 1.2 million masu a year, which would make it Japan's largest producer, and the name “Ōgaki no masu” has been registered as a regional collective trademark.",
            ja:"大垣の枡のつくり手で最大の大橋量器は、一九五〇年、戦後の年月に商いを築いた女性、大橋ムネが創業した。のちに三代目となる大橋博行が一九九三年に入ったころ、需要は落ちていた。儀礼の酒の飲み方がすたれつつあり、会社の実際の売上は前の代が思っていたのの半分ほどだった。縮む市場で値段を競うかわりに、会社は枡の新しい使い道を探しはじめた。色のついた枡、会社や催しのための印刷やレーザー彫刻の枡、会社によれば二〇一一年にグッドデザイン賞を受けた三角の枡、クラウドファンディングでつくったヒノキの米びつ、プランター、加湿器、枡で組む内装の壁の仕組み。会社の説明では、いまは年におよそ百二十万個の枡をつくり、それが事実なら日本最大の生産者である。「大垣の枡」の名は地域団体商標に登録されている。",
            zh:"大垣最大的木枡製造商「大橋量器」，由戰後打拚事業的女性大橋ムネ於 1950 年創立。1993 年後來成為第三代掌門人的大橋博行加入時，需求正在下滑：儀式性的飲酒習慣日漸式微，公司實際營收只有上一代所以為的一半左右。公司不在萎縮的市場上削價競爭，而是著手為木枡尋找新用途：彩色木枡、為企業與活動印刷或雷射雕刻的木枡、據公司說法於 2011 年獲優良設計獎的三角木枡、以群眾募資打造的扁柏米櫃、花器、加濕器，以及用木枡組成的室內牆面系統。據公司自述，如今每年生產約 120 萬個木枡，若屬實即為日本最大的生產者；「大垣之枡」之名也已註冊為地域團體商標。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"National share", ja:"全国シェア", zh:"全國占比" },
              v:"≈ 80%",
              d:{ en:"Of Japan's masu, made in Ōgaki", ja:"日本の枡のうち大垣産", zh:"日本木枡產自大垣的比例" } },
            { k:{ en:"Makers", ja:"つくり手", zh:"製造商" },
              v:{ en:"3–5", ja:"三〜五社", zh:"3–5 家" },
              d:{ en:"From about ten at the peak", ja:"最盛期の十ほどから", zh:"鼎盛時期約十家" } },
            { k:{ en:"Largest maker", ja:"最大のつくり手", zh:"最大製造商" },
              v:{ en:"1.2 million / yr", ja:"年百二十万個", zh:"每年 120 萬個" },
              d:{ en:"Ōhashi Ryōki's annual output, by its own account", ja:"大橋量器の年産（同社による）", zh:"大橋量器年產量（據該公司）" } },
            { k:{ en:"History", ja:"歴史", zh:"歷史" },
              v:{ en:"≈ 1,300 yrs", ja:"約千三百年", zh:"約 1,300 年" },
              d:{ en:"Of the masu in Japan; in Ōgaki since Meiji", ja:"日本の枡の。大垣では明治から", zh:"日本木枡的歷史；大垣自明治起" } }
          ] }
      ] },
    { t:"section",
      id:"using",
      title:{ en:"Using and caring for a masu", ja:"枡の使い方と手入れ", zh:"木枡的使用與保養" },
      jp:"酒と豆",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Sake in a masu", ja:"枡酒", zh:"枡酒" },
              jp:"ますざけ",
              def:{
                en:"At celebrations sake is often served in a masu, sometimes with a glass standing inside it and filled until it overflows into the box — a gesture of generosity. The hinoki adds its own aroma. Some drinkers sip from a corner; a pinch of salt on the rim is a traditional accompaniment.",
                ja:"祝いの席では、酒はしばしば枡で出され、ときにはなかにグラスを立て、枡にあふれるまで注ぐ——気前の良さのしぐさである。ヒノキはそれ自身の香りを加える。角から飲む人もおり、縁に少し塩をのせるのは伝統の添え物である。",
                zh:"喜慶場合常以木枡盛酒，有時在枡中放一只玻璃杯，斟到溢入枡內——象徵慷慨。扁柏會增添自身的香氣。有人從枡角啜飲；在枡緣放一撮鹽是傳統的佐酒方式。" } },
            { term:{ en:"Setsubun beans", ja:"節分の豆", zh:"節分撒豆" },
              jp:"福豆",
              def:{
                en:"On the eve of the start of spring in early February, roasted soybeans are thrown from a masu to drive out demons and invite good fortune — one of the masu's most familiar uses in homes and temples.",
                ja:"二月初めの立春の前夜、炒った大豆を枡からまいて鬼を払い福を招く——家や寺での枡の最もなじみのある使い方の一つである。",
                zh:"二月初立春前夕，從木枡中撒出炒黃豆以驅鬼招福——這是木枡在家庭與寺院中最常見的用途之一。" } },
            { term:{ en:"Care", ja:"手入れ", zh:"保養" },
              jp:"洗い方",
              def:{
                en:"Unfinished hinoki absorbs liquids and stains. Rinse soon after use with water, wipe dry and let it air-dry away from direct heat; avoid soaking, detergent and dishwashers. A masu used regularly darkens and takes on a patina like any hinoki surface.",
                ja:"塗っていないヒノキは液を吸い、しみができる。使ったらすぐ水ですすぎ、拭いて、直接の熱を避けて陰干しする。浸けおき、洗剤、食洗機は避ける。いつも使う枡は、どのヒノキの面とも同じように色が深まり、味わいを帯びる。",
                zh:"未塗裝的扁柏會吸收液體並留下汙漬。用後盡快以清水沖洗、擦乾，避開直接熱源陰乾；避免浸泡、清潔劑與洗碗機。經常使用的木枡會像所有扁柏表面一樣逐漸變深，生出歲月的光澤。" } }
          ] }
      ] },
    { t:"section",
      id:"making-today",
      title:{ en:"How a masu is made today", ja:"いまの枡のつくり方", zh:"今日木枡的製作方式" },
      jp:"霰組と円盤鉋",
      body:[
        { t:"p",
          text:{
            en:"Ōgaki's makers use only Japanese hinoki, and much of it is not felled for the purpose at all: the boards come from off-cuts left over when sawmills cut building timber, pieces too short for a post but long enough for the side of a box. The first step is drying, to drive out moisture and part of the aromatic oil. This matters more for a masu than for most wooden things, because for most of its history a masu was an instrument whose value lay in holding exactly the same volume year after year; a box that shrank or swelled was a false measure. Fresh hinoki is pale, close to cream, and every board differs slightly in tone and grain.",
            ja:"大垣のつくり手が使うのは国産のヒノキだけで、その多くはそもそも枡のために伐られたものではない。板は、製材所が建築材を挽いたあとに残る端材から取る。柱には短すぎるが、箱の側には十分な長さの木片である。最初の工程は乾燥で、水分と香りの油分の一部を飛ばす。これはたいていの木の品より枡にとって大切である。枡は歴史の大半を通じて、毎年まったく同じ量を入れることにこそ価値のある道具だったからだ。縮んだりふくらんだりする箱は、偽りのはかりである。切りたてのヒノキは淡く、クリーム色に近く、板ごとに色合いと木目が少しずつ違う。",
            zh:"大垣的工匠只用日本國產扁柏，而且其中許多根本不是為了做枡而砍伐的：板材來自製材廠鋸切建築用材後剩下的邊角料——太短做不了柱子，卻足夠做箱子的側板。第一道工序是乾燥，讓水分與部分芳香油分散去。這對木枡比對大多數木器更重要，因為在歷史的大部分時間裡，木枡是一件量具，價值就在於年復一年容量分毫不差；會收縮或膨脹的箱子就是不準的量器。剛切開的扁柏顏色淡，近乎奶油色，每塊板的色調與紋理都略有不同。" } },
        { t:"steps",
          items:[
            { title:{ en:"Plane and cut", ja:"鉋がけと駒切り", zh:"刨平與截料" },
              jp:"四面鉋・駒切り",
              meta:{ en:"Machine", ja:"機械", zh:"機械" },
              text:{
                en:"The dried blanks are planed on all four faces in one pass, then cut into side pieces of the exact size for the masu being made.",
                ja:"乾かした材を四面同時に鉋がけし、つくる枡に合わせた正確な寸法の側板に切る（駒切り）。",
                zh:"乾燥後的毛料一次刨平四面，再依所做木枡的尺寸精確截成側板。" } },
            { title:{ en:"Cut the joint", ja:"ほぞを刻む", zh:"加工榫頭" },
              jp:"ほぞ",
              meta:{ en:"Machine", ja:"機械", zh:"機械" },
              text:{
                en:"The ends of each side are cut into a row of square fingers that will interlock with the next side.",
                ja:"側板の両端に、隣の側板と噛みあう四角い指状のほぞを並べて刻む。",
                zh:"在每片側板兩端切出一排方形指狀榫，與相鄰側板互相咬合。" } },
            { title:{ en:"Glue and assemble", ja:"糊付けと組立", zh:"上膠與組裝" },
              jp:"仮組み・本組み",
              meta:{ en:"Hand, then air press", ja:"手作業、のちエアプレス", zh:"手工，再以氣壓機" },
              text:{
                en:"Glue is brushed into the joints; the four sides are first fitted together lightly by hand, then pressed home with air pressure and checked by eye.",
                ja:"刷毛でほぞに糊を入れ、四枚の側板をまず手で軽く仮組みし、空気圧で締めて本組みとし、目で検める。",
                zh:"以刷子在榫頭塗膠；四片側板先以手輕輕假組，再用氣壓壓緊成為正式組裝，並以目視檢查。" } },
            { title:{ en:"Fit the bottom", ja:"底を付ける", zh:"裝上底板" },
              jp:"底付け",
              meta:{ en:"Glue, machine drying", ja:"接着、機械乾燥", zh:"上膠、機器烘乾" },
              text:{
                en:"The bottom board is glued on and the box goes through a drier so that the glue sets before finishing.",
                ja:"底板を接着し、仕上げの前に糊が固まるよう乾燥機に通す。",
                zh:"黏上底板，送入烘乾機，讓膠在修飾前固化。" } },
            { title:{ en:"Finish", ja:"仕上げ", zh:"修飾" },
              jp:"円盤鉋・面取り",
              meta:{ en:"Disc plane, hand", ja:"円盤鉋、手作業", zh:"圓盤刨、手工" },
              text:{
                en:"Every face is smoothed with a disc plane — a judgement made by the hands as much as the eye — and all twelve edges of the box are chamfered. Printing, branding or engraving follows.",
                ja:"すべての面を円盤鉋で仕上げ——目と同じほど手の感覚で見きわめる——箱の十二の辺すべての角を落とす。そのあとに印刷、焼印、彫りを施す。",
                zh:"每一面都以圓盤刨修光——這要靠手感與眼力一同判斷——並將箱子全部十二條稜邊倒角。之後再印刷、烙印或雕刻。" } }
          ] },
        { t:"p",
          text:{
            en:"The corner joint is called <em>arare-gumi</em>, the “hail joint”. Its fingers multiply the glued area many times over a plain butt joint, and they lock the sides against each other in two directions, so the finished box holds liquid without a single nail. The joint is also the mark of authenticity. The name “Ōgaki no masu” is a regional collective trademark (registration no. 6269162), held jointly by the Ōgaki Chamber of Commerce and Industry and the city's tourism association, and a box may carry it only if it is built with arare-gumi corners and its surface is finished with a disc plane. Before the collapse of the bubble economy in about 1991 there were eleven specialist makers in the city; demand fell steeply after that, and by one recent account three remain.",
            ja:"角の接ぎは「霰組（あられぐみ）」と呼ばれる。指状のほぞは、ただ突きつけた接ぎにくらべて糊の面を何倍にも増やし、側板どうしを二つの方向に固定するので、できあがった箱は釘一本なしに液体を入れられる。この組み手は本物のしるしでもある。「大垣の枡」の名は地域団体商標（登録第六二六九一六二号）で、大垣商工会議所と市の観光協会が共同でもつ。霰組の角で組まれ、表面を円盤鉋で仕上げた箱だけがその名を名乗れる。一九九一年ごろバブル経済がはじけるまで、市内には十一の専業のつくり手がいた。その後需要は大きく落ち、最近のある記事によれば、いまは三社が残る。",
            zh:"四角的接合稱為「霰組」（arare-gumi）。指狀榫使膠合面積比單純的對接增加好幾倍，並在兩個方向上把側板互相鎖住，因此成品不用一根釘子也能盛裝液體。這種接合也是正宗的標誌。「大垣之枡」是地域團體商標（註冊第 6269162 號），由大垣商工會議所與市觀光協會共同持有；只有以霰組接角、表面以圓盤刨修飾的木枡才能使用此名。約 1991 年泡沫經濟破滅之前，市內有 11 家專業製造商；之後需求急遽下滑，據近年一篇報導，如今僅存 3 家。" } },
        { t:"figure",
          caption:{
            en:"Schematic, not to scale. Left: the arare-gumi corner, drawn opened out; the fingers of one side fill the gaps of the other. Right: the inside dimensions of the new Kyō-masu fixed by the shogunate in 1669 (1 sun ≈ 3.03 cm), the ancestor of today's 1.8-litre shō.",
            ja:"模式図（縮尺不同）。左：霰組の角を開いて描いたもの。一方の側板のほぞが、もう一方のすき間を埋める。右：一六六九年に幕府が定めた新京枡の内のり（一寸は約3.03cm）。いまの一升1.8Lのもとである。",
            zh:"示意圖，未依比例。左：霰組接角的展開圖，一側的指狀榫填入另一側的空隙。右：幕府於 1669 年制定的新京枡內尺寸（1 寸約 3.03 公分），即今日 1.8 公升一升的前身。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 320" role="img">';
            s += F.text(20, 28, lang==="en"?"THE JOINT AND THE MEASURE":(lang==="ja"?"組み手とはかり":"接合與量度"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            // left: two boards with complementary fingers
            var x0 = 40, y0 = 70, h = 180, n = 7, fh = h/n, fw = 22, wA = 130, gap = 46;
            s += '<rect x="'+x0+'" y="'+y0+'" width="'+wA+'" height="'+h+'" fill="#EDE5D2" stroke="#7C6B52"/>';
            var xB = x0 + wA + fw + gap;
            s += '<rect x="'+(xB+fw)+'" y="'+y0+'" width="'+wA+'" height="'+h+'" fill="#E7DFD2" stroke="#7C6B52"/>';
            for (var i = 0; i < n; i++) {
              var yy = y0 + i*fh;
              if (i % 2 === 0) s += '<rect x="'+(x0+wA)+'" y="'+yy+'" width="'+fw+'" height="'+fh+'" fill="#EDE5D2" stroke="#7C6B52"/>';
              else s += '<rect x="'+xB+'" y="'+yy+'" width="'+fw+'" height="'+fh+'" fill="#E7DFD2" stroke="#7C6B52"/>';
            }
            for (var j = 0; j < 4; j++) { var gy = y0 + 20 + j*42; s += '<line x1="'+(x0+12)+'" y1="'+gy+'" x2="'+(x0+wA-12)+'" y2="'+gy+'" stroke="#CDC6B9"/><line x1="'+(xB+fw+12)+'" y1="'+gy+'" x2="'+(xB+fw+wA-12)+'" y2="'+gy+'" stroke="#CDC6B9"/>'; }
            var ax = x0 + wA + fw + 6, ay = y0 + h/2;
            s += '<line x1="'+ax+'" y1="'+ay+'" x2="'+(ax+gap-12)+'" y2="'+ay+'" stroke="#55504A"/><path d="M'+(ax+gap-12)+' '+(ay-4)+' L'+(ax+gap-4)+' '+ay+' L'+(ax+gap-12)+' '+(ay+4)+' Z" fill="#55504A"/>';
            s += F.text(x0 + wA/2, y0 + h + 22, L({ en:"Side A", ja:"側板A", zh:"側板 A" }), { size:11, fill:"#201E1B", anchor:"middle" });
            s += F.text(xB + fw + wA/2, y0 + h + 22, L({ en:"Side B", ja:"側板B", zh:"側板 B" }), { size:11, fill:"#201E1B", anchor:"middle" });
            s += F.text(x0, y0 + h + 44, L({ en:"Fingers interlock, glued and pressed; no nails.", ja:"ほぞが噛みあい、糊付けして締める。釘は使わない。", zh:"指狀榫互相咬合，上膠壓緊；不用釘子。" }), { size:10.5, fill:"#55504A", max:52, lh:13 });
            s += F.text(x0, y0 - 14, L({ en:"Arare-gumi corner (opened out)", ja:"霰組の角（開いた図）", zh:"霰組接角（展開圖）" }), { size:11, fill:"#201E1B" });
            // right: box in oblique projection
            var bx = 500, by = 120, sw = 150, sd = 84, ox = 52, oy = -34;
            s += '<path d="M'+bx+' '+by+' L'+(bx+ox)+' '+(by+oy)+' L'+(bx+sw+ox)+' '+(by+oy)+' L'+(bx+sw)+' '+by+' Z" fill="#F0EDE4" stroke="#7C6B52"/>';
            s += '<path d="M'+(bx+sw)+' '+by+' L'+(bx+sw+ox)+' '+(by+oy)+' L'+(bx+sw+ox)+' '+(by+oy+sd)+' L'+(bx+sw)+' '+(by+sd)+' Z" fill="#E7DFD2" stroke="#7C6B52"/>';
            s += '<rect x="'+bx+'" y="'+by+'" width="'+sw+'" height="'+sd+'" fill="#EDE5D2" stroke="#7C6B52"/>';
            s += F.text(bx - 8, y0 - 14, L({ en:"New Kyō-masu, 1669 (inside)", ja:"新京枡　一六六九年（内のり）", zh:"新京枡，1669 年（內尺寸）" }), { size:11, fill:"#201E1B" });
            // width dimension
            var dy = by + sd + 18;
            s += '<line x1="'+bx+'" y1="'+dy+'" x2="'+(bx+sw)+'" y2="'+dy+'" stroke="#55504A"/><line x1="'+bx+'" y1="'+(dy-5)+'" x2="'+bx+'" y2="'+(dy+5)+'" stroke="#55504A"/><line x1="'+(bx+sw)+'" y1="'+(dy-5)+'" x2="'+(bx+sw)+'" y2="'+(dy+5)+'" stroke="#55504A"/>';
            s += F.text(bx + sw/2, dy + 18, L({ en:"4 sun 9 bu ≈ 14.8 cm square", ja:"四寸九分 ≈ 14.8cm 角", zh:"4 寸 9 分 ≈ 14.8 公分見方" }), { size:10.5, fill:"#201E1B", anchor:"middle" });
            // depth dimension
            var dx = bx - 16;
            s += '<line x1="'+dx+'" y1="'+by+'" x2="'+dx+'" y2="'+(by+sd)+'" stroke="#55504A"/><line x1="'+(dx-5)+'" y1="'+by+'" x2="'+(dx+5)+'" y2="'+by+'" stroke="#55504A"/><line x1="'+(dx-5)+'" y1="'+(by+sd)+'" x2="'+(dx+5)+'" y2="'+(by+sd)+'" stroke="#55504A"/>';
            s += F.text(dx - 8, by + sd/2 - 2, L({ en:"2 sun 7 bu", ja:"二寸七分", zh:"2 寸 7 分" }), { size:10.5, fill:"#201E1B", anchor:"end" });
            s += F.text(dx - 8, by + sd/2 + 12, "≈ 8.2 cm", { size:10.5, fill:"#201E1B", anchor:"end" });
            s += F.text(bx - 30, dy + 46, L({ en:"Volume 64,827 cubic bu = 1 shō ≈ 1.804 L", ja:"容積 六万四八二七立方分 ＝ 一升 ≈ 1.804L", zh:"容積 64,827 立方分 ＝ 1 升 ≈ 1.804 公升" }), { size:10.5, fill:"#55504A" });
            s += F.text(bx - 30, dy + 60, L({ en:"(defined in litres in 1891)", ja:"（一八九一年にリットルで定義）", zh:"（1891 年以公升定義）" }), { size:10.5, fill:"#55504A" });
            return s + '</svg>';
          } }
      ] },
    { t:"section",
      id:"standard",
      title:{ en:"Fixing the measure", ja:"はかりを定める", zh:"確立量度" },
      jp:"京枡と枡座",
      body:[
        { t:"p",
          text:{
            en:"Before a masu could be a symbol it had to be trusted. Toyotomi Hideyoshi's land surveys at the end of the sixteenth century, which assessed every field by its rice yield, made the Kyoto masu the standard of measurement. A masu excavated at the site of Osaka Castle, dated Tenshō 13 (1585), shows what such an instrument looked like: wooden, with a metal rim, about 15.3 by 15.4 cm and 7.3 cm deep, holding about 1,708 cm³, and stamped with seals bearing the character 豊 of the Toyotomi house as proof that it had been checked.",
            ja:"枡がしるしとなる前に、それは信頼されねばならなかった。十六世紀末、豊臣秀吉の検地はあらゆる田を米の収量で見積もり、京枡をはかりの基準とした。大坂城跡から出た天正十三年（一五八五年）銘の枡は、そのような道具の姿を伝える。木製で口金をもち、縦約15.3cm、横約15.4cm、深さ約7.3cm、容積は約1,708cm³で、検められた証しとして豊臣家の「豊」の字の印が押されている。",
            zh:"木枡要成為象徵之前，必須先贏得信任。十六世紀末豐臣秀吉的「太閤檢地」以稻米產量評定每一塊田，並以京枡為量度標準。大坂城遺址出土、刻有天正 13 年（1585 年）銘的木枡，呈現了這類量具的樣貌：木製，有金屬口緣，約 15.3 × 15.4 公分、深約 7.3 公分，容積約 1,708 立方公分，並蓋有豐臣家「豊」字印記，證明已經檢定。" } },
        { t:"p",
          text:{
            en:"Under the Tokugawa the Kyoto masu and the slightly different Edo masu used in the east still coexisted. In 1669 (Kanbun 9) the shogunate unified them on a “new Kyō-masu”: 4 sun 9 bu square and 2 sun 7 bu deep by the carpenter's square, a volume of 64,827 cubic bu. Making and certifying masu became licensed monopolies, the <em>masuza</em> or masu guilds, held by Taruya Tōzaemon in Edo and Fukui Sakuzaemon in Kyoto. The new Kyō-masu survived the end of the shogunate and became the basis of the modern unit: the Weights and Measures Act of 1891 defined one shō as 2,401/1,331 litres, about 1.804 litres. That is why a large sake bottle holds 1.8 litres and a gō is about 180 mL.",
            ja:"徳川の世になっても、京枡と、東国で使われた少し違う江戸枡が並んで使われていた。一六六九年（寛文九年）、幕府はこれを「新京枡」に統一した。曲尺で縦横四寸九分、深さ二寸七分、容積六万四八二七立方分である。枡をつくり検める仕事は特権をもつ「枡座」に独占させ、江戸では樽屋藤左衛門、京都では福井作左衛門がこれを担った。新京枡は幕府の終わりを越えて生き残り、近代の単位のもととなった。一八九一年の度量衡法は一升を二四〇一／一三三一リットル、約1.804Lと定めた。一升瓶が1.8Lで、一合が約180mLなのはそのためである。",
            zh:"到了德川時代，京枡與東國使用、略有差異的江戶枡仍並存。1669 年（寬文 9 年）幕府將兩者統一為「新京枡」：以曲尺計，長寬各 4 寸 9 分、深 2 寸 7 分，容積 64,827 立方分。木枡的製作與檢定成為特許專營的「枡座」，江戶由樽屋藤左衛門、京都由福井作左衛門掌理。新京枡在幕府終結後依然沿用，成為近代單位的基礎：1891 年的《度量衡法》將 1 升定為 2,401/1,331 公升，約 1.804 公升。這就是為何一升瓶容量是 1.8 公升，而 1 合約為 180 毫升。" } },
        { t:"table",
          caption:{ en:"Three standards behind today's masu", ja:"いまの枡の背後にある三つの基準", zh:"今日木枡背後的三個標準" },
          cols:[
            { en:"Standard", ja:"基準", zh:"標準" },
            { en:"Year", ja:"年", zh:"年份" },
            { en:"Size", ja:"寸法", zh:"尺寸" },
            { en:"Volume", ja:"容積", zh:"容積" },
            { en:"Who guaranteed it", ja:"保証した者", zh:"保證者" }
          ],
          numCols:[1],
          rows:[
            [
              {
                en:"Kyō-masu of the Toyotomi surveys (Osaka Castle find)",
                ja:"太閤検地の京枡（大坂城跡出土）",
                zh:"太閤檢地的京枡（大坂城遺址出土）" },
              "1585",
              "15.3 × 15.4 × 7.3 cm",
              "≈ 1,708 cm³",
              { en:"Toyotomi house seals", ja:"豊臣家の印", zh:"豐臣家印記" }
            ],
            [
              { en:"New Kyō-masu", ja:"新京枡", zh:"新京枡" },
              "1669",
              {
                en:"4.9 × 4.9 × 2.7 sun (≈ 14.8 × 14.8 × 8.2 cm)",
                ja:"四寸九分角、深さ二寸七分（約14.8×14.8×8.2cm）",
                zh:"4.9 × 4.9 × 2.7 寸（約 14.8 × 14.8 × 8.2 公分）" },
              { en:"64,827 cubic bu", ja:"六万四八二七立方分", zh:"64,827 立方分" },
              { en:"Masuza of Edo and Kyoto", ja:"江戸と京都の枡座", zh:"江戶與京都的枡座" }
            ],
            [
              { en:"Shō under the Weights and Measures Act", ja:"度量衡法の升", zh:"《度量衡法》的升" },
              "1891",
              { en:"Defined in litres", ja:"リットルで定義", zh:"以公升定義" },
              "2,401/1,331 L ≈ 1.804 L",
              { en:"The state", ja:"国", zh:"國家" }
            ]
          ] },
        { t:"p",
          text:{
            en:"The everyday sizes still sold follow these units: the five-shaku masu (about 90 mL) for tasting, the one-gō masu (about 180 mL) for sake, two-gō and larger boxes, and the one-shō masu (about 1.8 litres) that once measured rice. Since the metric system replaced the old units in trade, most of these are used as cups, containers and gifts rather than as instruments of measurement.",
            ja:"いま売られる普段の大きさも、これらの単位にしたがう。きき酒の五勺枡（約90mL）、酒の一合枡（約180mL）、二合やそれ以上の枡、そしてかつて米をはかった一升枡（約1.8L）である。取引でメートル法が古い単位に代わってからは、その多くははかりの道具ではなく、盃や入れもの、贈り物として使われている。",
            zh:"今日販售的常見尺寸仍沿用這些單位：品酒用的五勺枡（約 90 毫升）、盛酒的一合枡（約 180 毫升）、二合及更大的枡，以及過去量米的一升枡（約 1.8 公升）。自從交易改用公制取代舊單位，這些木枡多半作為酒器、容器與禮品，而非量具。" } },
        { t:"tiny",
          text:{
            en:"Sources: Osaka Prefecture Board of Education (Osaka Castle excavated finds); Heibonsha encyclopaedia via Kotobank (“shō”); Chūbu Bureau of Economy, Trade and Industry (regional collective trademark “Ōgaki no masu”); Ōhashi Ryōki via MUJI and Wa-raku (making process).",
            ja:"出典：大阪府教育庁（大坂城跡出土資料）、コトバンク「升」（平凡社）、中部経済産業局（地域団体商標「大垣の枡」）、大橋量器（無印良品・和楽の取材記事、製造工程）。",
            zh:"資料來源：大阪府教育廳（大坂城遺址出土資料）；Kotobank「升」（平凡社）；中部經濟產業局（地域團體商標「大垣之枡」）；大橋量器（無印良品與和樂的採訪報導，製作工序）。" } }
      ] },
    { t:"section",
      id:"ritual",
      title:{ en:"Masu in ritual, theatre and the language", ja:"儀礼・芝居・ことばのなかの枡", zh:"儀式、戲劇與語言中的木枡" },
      jp:"一升餅と枡席",
      body:[
        { t:"p",
          text:{
            en:"Because the masu measured wealth, its shape and its units spread far beyond the rice store. Several of these uses are still part of everyday Japanese life, and they explain why a box that no longer measures anything still sells by the million.",
            ja:"枡は富をはかったから、その形と単位は米蔵をはるかに越えて広がった。そのいくつかはいまも日本の暮らしの一部であり、もう何もはからない箱が今なお百万個単位で売れる理由を語っている。",
            zh:"由於木枡衡量的是財富，它的形狀與單位遠遠超出了米倉。其中許多用法至今仍是日本日常生活的一部分，也說明了為何一個不再用來量任何東西的盒子，至今仍能以百萬計售出。" } },
        { t:"defs",
          items:[
            { term:{ en:"Kagami-biraki", ja:"鏡開き", zh:"鏡開" },
              jp:"かがみびらき",
              def:{
                en:"At openings, weddings and New Year ceremonies the lid of a sake cask is broken open with wooden mallets, and the sake is ladled into masu for a shared toast. With a company or event name printed on the side, the box becomes a keepsake to take home.",
                ja:"開業や婚礼、新年の行事で、木槌で酒樽の蓋を割り、酒を枡に汲んで皆で乾杯する。側面に会社名や催しの名を刷れば、箱は持ち帰る記念の品になる。",
                zh:"在開幕、婚禮與新年儀式上，以木槌敲開酒樽蓋，把酒舀入木枡共同乾杯。木枡側面印上公司或活動名稱，便成了可帶回家的紀念品。" } },
            { term:{ en:"Isshō-mochi", ja:"一升餅", zh:"一升餅" },
              jp:"いっしょうもち",
              def:{
                en:"At a child's first birthday, a round rice cake made from one shō of rice is carried on the child's back. The pun is on <em>isshō</em>, which also means “a whole lifetime”: the child should never lack food.",
                ja:"子どもの一歳の誕生日に、一升の米でついた丸い餅を背負わせる。「一升」は「一生」に通じ、一生食べものに困らないようにとの願いがこもる。",
                zh:"孩子滿週歲時，讓他背上用一升米做成的圓年糕。「一升」與「一生」同音，寓意一輩子不愁吃。" } },
            { term:{ en:"Masu-seki", ja:"枡席", zh:"枡席" },
              jp:"ますせき",
              def:{
                en:"The box seats of a sumo arena, square floor enclosures in a grid that looks like rows of masu from above; spectators sit on cushions, usually four to a box. Kabuki theatres once had the same arrangement.",
                ja:"相撲の会場の枡席は、上から見ると枡を並べたような格子の、床の四角い仕切りである。客は座布団に座り、ふつう一枡に四人が入る。かつては歌舞伎の芝居小屋にも同じ席があった。",
                zh:"相撲場館的枡席，是地板上呈格狀排列的方形隔間，從上方看去就像一排排木枡；觀眾坐在坐墊上，通常一格四人。歌舞伎劇場過去也有同樣的座位。" } },
            { term:{ en:"Masugata", ja:"枡形", zh:"枡形" },
              jp:"ますがた",
              def:{
                en:"The square courtyard inside a castle gate, enclosed by two gates set at right angles, takes its name from the masu. Attackers who broke through the first gate had to turn in a confined box under fire from the walls.",
                ja:"城門の内側の四角い広場は、直角に置かれた二つの門に囲まれ、枡にちなんで枡形と呼ばれる。一の門を破った敵は、城壁からの攻撃を受けながら狭い囲いのなかで向きを変えねばならなかった。",
                zh:"城門內側的方形廣場由兩道互成直角的城門圍成，因形似木枡而稱「枡形」。攻破第一道門的敵軍，必須在城牆火力下於狹窄的方框中轉向。" } },
            { term:{ en:"Mimasu", ja:"三升", zh:"三升紋" },
              jp:"みます",
              def:{
                en:"Three nested masu seen from above form the crest of the Ichikawa Danjūrō line of kabuki actors, one of the best-known family crests in Japanese theatre.",
                ja:"上から見た三つの入れ子の枡は、歌舞伎の市川団十郎家の紋「三升」で、日本の芝居で最もよく知られた家紋の一つである。",
                zh:"從上方看去層層相套的三個木枡，是歌舞伎市川團十郎家族的家紋「三升」，也是日本戲劇中最著名的家紋之一。" } }
          ] },
        { t:"p",
          text:{
            en:"The modern trade builds on this. Ōhashi Ryōki opened a factory shop, Masu Kōbō Masuya, on its works site in 2005, and in 2021 it was among the Gifu craft firms selected by JETRO, Japan's trade promotion agency, for its programme helping small artisan companies sell abroad. The description filed for the “Ōgaki no masu” trademark notes that abroad the masu has come to be seen less as a measure than as an unusual, novel Japanese container — a reading helped by the worldwide popularity of Japanese food.",
            ja:"いまの商いはこの上に立っている。大橋量器は二〇〇五年に工場の敷地に直売店「枡工房ますや」を開き、二〇二一年には、小さな工芸の会社の海外販売を助けるジェトロ（日本貿易振興機構）の事業に選ばれた岐阜の工芸の会社の一つとなった。「大垣の枡」の商標の説明は、海外では枡がはかりというより、珍しく新しい日本の器として受けとられるようになったと記す。和食の世界的な人気がその見方を後押ししている。",
            zh:"今日的生意正是建立在這些傳統之上。大橋量器於 2005 年在工廠內開設直營店「枡工房ますや」；2021 年獲日本貿易振興機構（JETRO）選入協助小型工藝企業拓展海外的計畫，是入選的岐阜工藝企業之一。「大垣之枡」商標的說明指出，在海外，木枡與其說是量器，不如說被視為新奇而具異國風情的日本容器——日本料理風行全球更強化了這種印象。" } }
      ] },
    { t:"related",
      items:[
        { href:"vessels.html", why:{ en:"Buckets, barrels and boxes.", ja:"桶・樽・曲物。", zh:"桶、樽與曲物。" } },
        { href:"hinoki.html", why:{ en:"The wood of the masu.", ja:"枡の木。", zh:"木枡的用材。" } },
        { href:"joinery.html", why:{ en:"Joints without nails.", ja:"釘のない接ぎ。", zh:"無釘接合。" } },
        { href:"culture.html", why:{ en:"Festivals and rituals of Gifu.", ja:"岐阜の祭りと儀礼。", zh:"岐阜的祭典與儀式。" } }
      ] }
  ] };

/* ---- ------------------------------------------- vessels */
GIFU.pages["vessels"] = { kicker:{ en:"Wood Craft · 09", ja:"木の工芸 · 09", zh:"木作工藝 · 09" },
  title:{ en:"Buckets, Barrels and Boxes", ja:"桶・樽・曲物", zh:"桶、樽與曲物" },
  jp:"水と食べ物のための木",
  lede:{
    en:"Before plastic and stainless steel, almost every container in a Japanese kitchen, bath and brewery was made of wood: tubs for washing rice, barrels for sake and soy sauce, steamers for rice cakes, bentwood boxes for lunches, cutting boards, rice tubs, bath tubs. The woods were chosen with precision — sawara for its neutral smell, sugi for its aroma and lightness, hinoki for its resistance to water and rot. This page describes the main types of wooden vessel, how they are made and where they survive in and around Gifu.",
    ja:"プラスチックとステンレスの前、日本の台所、風呂、酒蔵のほとんどすべての容れ物は木でできていた。米をとぐ桶、酒や醤油の樽、餅を蒸す蒸籠、弁当の曲物、まな板、おひつ、風呂桶。木は精密に選ばれた。匂いのないサワラ、香りと軽さのスギ、水と腐りに強いヒノキ。この頁は、木の容れ物の主な種類、そのつくり方、そして岐阜とそのまわりでそれがどこに生き残っているかを述べる。",
    zh:"在塑膠與不鏽鋼之前，日本廚房、浴室與釀酒廠裡幾乎每一種容器都是木製的：洗米桶、裝日本酒與醬油的酒樽、蒸年糕的蒸籠、便當用的曲物盒、砧板、飯桶、浴桶。木材的選擇極為精準——氣味中性的花柏、芳香輕盈的柳杉、耐水抗腐的扁柏。本頁介紹木製容器的主要類型、製作方式，以及它們在岐阜及周邊何處延續。" },
  body:[
    { t:"section",
      id:"types",
      title:{ en:"Oke, taru and magemono", ja:"桶・樽・曲物", zh:"桶、樽、曲物" },
      jp:"三つの系統",
      body:[
        { t:"p",
          text:{
            en:"Japanese wooden vessels fall into three families. <em>Oke</em> are open tubs and buckets made of staves held by hoops, with a fixed bottom; they are built to last for decades and are used in the kitchen, bath and brewery. <em>Taru</em> are closed barrels made the same way but with a lid, originally for transporting and storing liquids — sake, soy sauce, vinegar, pickles. <em>Magemono</em> are round or oval boxes made from a single thin board bent into a ring and stitched with cherry bark, with a bottom fitted in; they are light and were used for lunch boxes, sieves, measures and ritual vessels.",
            ja:"日本の木の容れ物は三つの系統に分かれる。桶は、箍で締めた側板と固定した底からなる開いた容れ物で、何十年ももつようにつくられ、台所、風呂、酒蔵で使われる。樽は同じようにつくるがふたをもつ閉じた容れ物で、もとは酒、醤油、酢、漬物などの液体を運び、たくわえるためのものだった。曲物は、一枚の薄い板を輪に曲げて桜の皮で綴じ、底をはめた丸や楕円の箱で、軽く、弁当箱、篩、枡、神具に使われた。",
            zh:"日本木製容器分為三大類。「桶」是以箍束緊側板、底部固定的開口容器，做工以耐用數十年為目標，用於廚房、浴室與酒藏。「樽」以同樣方式製作但附有蓋子，原本用來運送與貯存液體——日本酒、醬油、醋、醃菜。「曲物」是以一片薄板彎成環形、以櫻樹皮縫合並嵌入底板的圓形或橢圓形盒子，質輕，用作便當盒、篩子、量器與祭器。" } },
        { t:"table",
          caption:{ en:"Wooden vessels and their woods", ja:"木の容れ物とその木", zh:"木製容器及其用材" },
          cols:[
            { en:"Vessel", ja:"容れ物", zh:"容器" },
            { en:"Family", ja:"系統", zh:"類別" },
            { en:"Wood", ja:"木", zh:"木材" },
            { en:"Why that wood", ja:"その木の理由", zh:"選用理由" }
          ],
          rows:[
            [
              { en:"Rice tub (ohitsu)", ja:"おひつ", zh:"飯桶" },
              { en:"Oke", ja:"桶", zh:"桶" },
              { en:"Sawara", ja:"サワラ", zh:"花柏" },
              {
                en:"Almost no smell; absorbs excess moisture from rice",
                ja:"匂いがほとんどない。米の余分な水気を吸う",
                zh:"幾乎無氣味；能吸收米飯多餘水氣" }
            ],
            [
              { en:"Sushi tub (hangiri)", ja:"飯台（半切）", zh:"壽司桶" },
              { en:"Oke", ja:"桶", zh:"桶" },
              { en:"Sawara, hinoki", ja:"サワラ、ヒノキ", zh:"花柏、扁柏" },
              { en:"Wide and shallow for cooling vinegared rice", ja:"酢飯を冷ますため広く浅い", zh:"寬而淺，便於涼拌醋飯" }
            ],
            [
              { en:"Bath tub", ja:"風呂桶", zh:"浴桶" },
              { en:"Oke", ja:"桶", zh:"桶" },
              { en:"Hinoki, kōyamaki", ja:"ヒノキ、コウヤマキ", zh:"扁柏、日本金松" },
              { en:"Water- and rot-resistant; fragrant", ja:"水と腐りに強く、香りがよい", zh:"耐水抗腐；芳香" }
            ],
            [
              { en:"Sake barrel", ja:"酒樽", zh:"酒樽" },
              { en:"Taru", ja:"樽", zh:"樽" },
              { en:"Sugi (red and white)", ja:"スギ（赤身と白太）", zh:"柳杉（紅白材）" },
              { en:"Aroma; red heart for tightness, white for balance", ja:"香り。赤身で締め、白太で釣りあう", zh:"香氣；紅心材防漏，白邊材平衡香氣" }
            ],
            [
              { en:"Brewing vat (kioke)", ja:"木桶（仕込み桶）", zh:"釀造木桶" },
              { en:"Oke", ja:"桶", zh:"桶" },
              { en:"Sugi", ja:"スギ", zh:"柳杉" },
              { en:"Large volume, light, lives with microbes", ja:"大容量で軽く、微生物とともに生きる", zh:"容量大、輕，並與微生物共存" }
            ],
            [
              { en:"Lunch box (mentsū)", ja:"曲げわっぱ・面桶", zh:"便當盒" },
              { en:"Magemono", ja:"曲物", zh:"曲物" },
              { en:"Sugi, hinoki", ja:"スギ、ヒノキ", zh:"柳杉、扁柏" },
              { en:"Light; wicks moisture so rice stays good", ja:"軽く、湿気を吸ってご飯を保つ", zh:"輕；吸濕使米飯保持美味" }
            ],
            [
              { en:"Steamer (seiro)", ja:"蒸籠", zh:"蒸籠" },
              { en:"Magemono", ja:"曲物", zh:"曲物" },
              { en:"Hinoki, sugi", ja:"ヒノキ、スギ", zh:"扁柏、柳杉" },
              { en:"Absorbs condensation so food is not soggy", ja:"結露を吸い、食べ物が水っぽくならない", zh:"吸收凝結水，食物不會濕軟" }
            ],
            [
              { en:"Cutting board", ja:"まな板", zh:"砧板" },
              { en:"—", ja:"—", zh:"—" },
              { en:"Ginkgo, hinoki, hō", ja:"イチョウ、ヒノキ、ホオ", zh:"銀杏、扁柏、厚朴" },
              {
                en:"Soft enough to spare knife edges; self-healing surface",
                ja:"刃を傷めないやわらかさ。傷が戻る面",
                zh:"軟硬適中不傷刀；表面刀痕可回復" }
            ]
          ] }
      ] },
    { t:"section",
      id:"cooper",
      title:{ en:"How a tub is made", ja:"桶のつくり方", zh:"木桶如何製作" },
      jp:"桶屋",
      body:[
        { t:"figure",
          caption:{
            en:"The main steps in making an oke. Staves are tapered and their edges bevelled so that they form a cone; bamboo or copper hoops driven down the taper pull them tight. Wetted in use, the wood swells and seals.",
            ja:"桶づくりの主な工程。側板は先細りにし縁を斜めに削って円錐をなすようにする。竹や銅の箍を先細りにそって打ち下ろすと締まる。使うときに濡れると木がふくらんで漏れを止める。",
            zh:"製作木桶的主要步驟。側板削成上寬下窄、邊緣倒斜角，組成圓錐；沿錐度打下竹箍或銅箍即可束緊。使用時受潮，木材膨脹而密封。" },
          svg:function(lang, L){ return GIFU.fig.flow(lang, L, {
            title:{ en:"From log to oke", ja:"丸太から桶へ", zh:"從原木到木桶" }, per:3, bh:100,
            steps:[
              { t:{ en:"Split the staves", ja:"側板を割る", zh:"劈製側板" }, d:{ en:"Quartersawn or split so the grain runs straight and the vessel does not leak.", ja:"木目がまっすぐ通り漏れないよう、柾目に挽くか割る。", zh:"以徑切或劈製，使紋理通直、容器不漏。" } },
              { t:{ en:"Season", ja:"乾かす", zh:"乾燥" }, d:{ en:"Air-dried for months or longer.", ja:"何か月かそれ以上、天然乾燥。", zh:"自然乾燥數月以上。" } },
              { t:{ en:"Shape the staves", ja:"側板を削る", zh:"刨削側板" }, d:{ en:"Curved inside and out with special planes; edges bevelled.", ja:"特別な鉋で内外を曲面に削り、縁を斜めに。", zh:"以專用刨內外刨出弧面；邊緣倒角。" } },
              { t:{ en:"Raise the tub", ja:"組む", zh:"組立" }, d:{ en:"Staves stood in a ring and dowelled edge to edge with bamboo pins.", ja:"側板を輪に立て、竹釘で端と端を留める。", zh:"側板立成一圈，以竹釘逐片相接。" } },
              { t:{ en:"Hoop", ja:"箍をかける", zh:"上箍" }, d:{ en:"Braided bamboo or copper hoops driven down to tighten.", ja:"編んだ竹や銅の箍を打ち下ろして締める。", zh:"打下編竹箍或銅箍束緊。" } },
              { t:{ en:"Fit the bottom", ja:"底を入れる", zh:"裝底" }, d:{ en:"A board set into a groove near the base.", ja:"底近くの溝に板をはめる。", zh:"將底板嵌入靠近底部的溝槽。" } }
            ] }); } }
      ] },
    { t:"section",
      id:"kioke",
      title:{ en:"The great vats", ja:"大きな木桶", zh:"巨大的木桶" },
      jp:"仕込み桶",
      body:[
        { t:"p",
          text:{
            en:"Until the mid-twentieth century every sake brewery, soy-sauce works and miso maker in Japan fermented its products in huge wooden vats of sugi, some more than two metres tall, holding several thousand litres. The wood was not inert: its surface harboured the yeasts and bacteria of each house, contributing to its character. From the 1960s enamelled and stainless-steel tanks, easier to clean and control, replaced them almost everywhere, and the coopers who made the great vats nearly disappeared. Since the 2010s a small revival led by soy-sauce makers and some sake brewers has trained new coopers and built new vats, and wooden vessels are again appearing in breweries and food workshops across Japan.",
            ja:"二十世紀の半ばまで、日本のどの酒蔵も醤油蔵も味噌屋も、スギの巨大な木桶——高さ二メートルを超え、数千リットルを入れるものもある——で仕込んでいた。木は無機質ではなかった。その面にはそれぞれの蔵の酵母や菌がすみつき、その個性に加わった。一九六〇年代から、洗いやすく管理しやすいホーローやステンレスのタンクがほとんどどこでもそれに取って代わり、大桶をつくる桶屋はほとんど消えかけた。二〇一〇年代から、醤油の蔵元と一部の酒蔵が率いる小さなよみがえりが新しい桶職人を育て新しい桶をつくり、木の容れ物は日本各地の蔵や食の工房にふたたび姿を見せている。",
            zh:"直到二十世紀中葉，日本每家酒藏、醬油廠與味噌屋，都在巨大的柳杉木桶中釀造，有些高逾兩公尺、容量達數千公升。木材並非惰性材料：其表面棲息著各家特有的酵母與細菌，形塑了產品的個性。自 1960 年代起，易於清洗與控制的琺瑯與不鏽鋼槽幾乎全面取代木桶，製作大木桶的桶匠也幾近消失。2010 年代以來，由醬油業者與部分酒藏帶動的小規模復興，培訓新桶匠、打造新木桶；木製容器也再度出現在日本各地的釀造所與食品工坊中。" } }
      ] },
    { t:"section",
      id:"hygiene",
      title:{ en:"Wood and food", ja:"木と食べ物", zh:"木與食物" },
      jp:"衛生",
      body:[
        { t:"p",
          text:{
            en:"Wood in contact with food raises the question of hygiene. Laboratory studies since the 1990s have found that bacteria applied to clean, dry wooden cutting boards decline quickly, as the wood draws moisture — and microbes — below the surface where they cannot multiply; hinoki and some other Japanese woods also contain antimicrobial extractives. The practical rules are simple: wash with water and a brush soon after use, avoid soaking, dry the wood thoroughly in air, and occasionally scrub with salt or scald with hot water. Wooden vessels last longest when used every day.",
            ja:"食べ物にふれる木は衛生の問いを生む。一九九〇年代からの実験室の研究は、清潔で乾いた木のまな板につけた細菌が速く減ることを見いだしてきた。木が水分——と微生物——を表面の下へ吸いこみ、そこでは殖えられないからである。ヒノキなど日本のいくつかの木は、菌を抑える抽出成分も含む。実際の決まりは簡単である。使ったらすぐ水とたわしで洗い、浸けおきを避け、風でよく乾かし、ときどき塩でこするか熱湯をかける。木の容れ物は毎日使うときに最も長もちする。",
            zh:"與食物接觸的木材會引發衛生疑慮。自 1990 年代以來的實驗研究發現，塗在乾淨乾燥木砧板上的細菌會迅速減少，因為木材會把水分——連同微生物——吸入表面以下，使其無法繁殖；扁柏等部分日本木材還含有抗菌抽出成分。實用原則很簡單：用後盡快以清水和刷子清洗、避免浸泡、充分風乾，偶爾用鹽刷洗或以熱水燙過。木製容器天天使用時最長壽。" } },
        { t:"defs",
          items:[
            { term:{ en:"Sawara for rice", ja:"米にはサワラ", zh:"盛飯用花柏" },
              jp:"おひつ",
              def:{
                en:"Cooked rice kept in a sawara tub absorbs less of the wood's smell than it would from hinoki, while the wood draws off excess steam when the rice is hot and gives a little back as it cools, keeping the texture.",
                ja:"サワラのおひつに入れたご飯は、ヒノキより木の匂いを吸わない。木は熱いご飯の余分な湯気を吸い、冷めるにつれて少し返して、食感を保つ。",
                zh:"盛在花柏飯桶中的米飯吸收的木味比扁柏少；米飯熱時木材吸走多餘蒸氣，冷卻時又釋回少許，保持口感。" } },
            { term:{ en:"Ginkgo for boards", ja:"まな板にはイチョウ", zh:"砧板用銀杏" },
              jp:"まな板",
              def:{
                en:"Professional cooks prize cutting boards of ginkgo: soft enough to preserve knife edges, resilient enough that shallow cuts close up, and with an oily texture that resists water. Hinoki and hō (magnolia) are also used.",
                ja:"料理人はイチョウのまな板を珍重する。刃を傷めないやわらかさ、浅い傷が閉じる弾力、水をはじく油っぽいきめをもつ。ヒノキやホオも使われる。",
                zh:"專業廚師珍視銀杏砧板：柔軟到能保護刀刃，彈性足以讓淺刀痕自行閉合，質地油潤而防水。扁柏與厚朴也常被使用。" } },
            { term:{ en:"Hinoki from Kashimo", ja:"加子母のヒノキ", zh:"加子母扁柏" },
              jp:"モクモクセンター",
              def:{
                en:"The Kashimo forest cooperative's woodworking centre turns offcuts of Ura-Kiso hinoki into kitchen and bath goods, toys and furniture, and distils hinoki oil — one of several local businesses making vessels and household goods from Tōnō hinoki.",
                ja:"加子母森林組合の木工センターは、裏木曽のヒノキの端材から台所や風呂の道具、玩具、家具をつくり、ヒノキ油を蒸留する。東濃ひのきで容れ物や日用品をつくる地元のいくつかの事業の一つである。",
                zh:"加子母森林組合的木工中心，把裏木曾扁柏的邊角料製成廚房與浴室用品、玩具與家具，並蒸餾扁柏精油——是以東濃扁柏製作容器與日用品的數個在地事業之一。" } }
          ] }
      ] },
    { t:"section",
      id:"cooper-bench",
      title:{ en:"At the cooper's bench", ja:"桶屋の仕事場", zh:"桶匠的工作台" },
      jp:"桶づくりの工程",
      body:[
        { t:"p",
          text:{
            en:"A cooper's work is geometry carried out with hand tools. Fifteen or twenty separate boards have to close into a ring that holds water without glue, and every edge must point exactly at the centre of the vessel. The sequence below is the one used for <em>oke</em> in the kitchen and bath; the great brewing vats follow the same logic at many times the size.",
            ja:"桶屋の仕事は、手道具で行う幾何学である。十五枚、二十枚の別々の板が、接着剤なしで水を漏らさない輪に閉じなければならず、そのすべての縁は容れ物の中心をまっすぐに指していなければならない。以下は台所や風呂の桶の工程であり、醸造の大桶も何倍もの大きさで同じ理屈に従う。",
            zh:"桶匠的工作，是以手工具完成的幾何學。十五或二十片各自獨立的木板，必須不靠膠合就圍成滴水不漏的圓環，而每一道邊緣都要精準指向容器的中心。以下是廚房與浴室用木桶的製作順序；釀造用的大木桶依循同樣的道理，只是尺寸大上許多倍。" } },
        { t:"steps",
          items:[
            { title:{ en:"Choose and split the wood", ja:"木を選び、割る", zh:"選材與劈材" },
              jp:"木取り",
              meta:{ en:"Sawara, hinoki, sugi", ja:"サワラ・ヒノキ・スギ", zh:"花柏、扁柏、柳杉" },
              text:{
                en:"The cooper wants slow-grown, straight-grained wood with few knots. Logs are cut to stave length and split or sawn radially into quartersawn billets (<em>masame</em>). In a quartersawn stave the rays lie parallel to the faces, so liquid has no path through the wall; a flatsawn stave would also cup as it dried.",
                ja:"桶屋が求めるのは、ゆっくり育ち、木目がまっすぐで節の少ない木である。丸太を側板の長さに切り、放射方向に割るか挽いて柾目の材にする。柾目の側板では放射組織が板面と平行に並ぶので、液体が壁を抜ける道がない。板目の側板では、乾くにつれて反りも出る。",
                zh:"桶匠要的是生長緩慢、紋理通直、少節的木材。原木先截成側板長度，再沿徑向劈開或鋸成柾目（徑切）料。柾目側板的木射線與板面平行，液體沒有穿透桶壁的通道；若用板目（弦切）側板，乾燥時還會翹曲。" } },
            { title:{ en:"Season", ja:"乾かす", zh:"乾燥" },
              jp:"乾燥",
              meta:{ en:"Months or longer", ja:"数か月以上", zh:"數月以上" },
              text:{
                en:"The billets are stacked to air-dry. A stave that goes into a tub while still wet shrinks afterwards, and the joints open.",
                ja:"割った材は積んで天然乾燥させる。湿ったまま桶に組んだ側板はあとで縮み、継ぎ目が開いてしまう。",
                zh:"劈好的料堆疊起來自然乾燥。若側板在未乾時就組進桶身，之後會收縮，接縫便會裂開。" } },
            { title:{ en:"Round the faces", ja:"面を削る", zh:"刨削內外面" },
              jp:"銑・内丸鉋",
              meta:{ en:"Drawknife and curved plane", ja:"銑と内丸鉋", zh:"刮刀與內圓刨" },
              text:{
                en:"The outer face is rounded with a two-handled drawknife (<em>sen</em>) and the inner face hollowed with a curved plane, so that each stave becomes a slice of a cylinder or cone.",
                ja:"外側の面は両手で引く銑で丸め、内側の面は内丸鉋でえぐる。こうして側板の一枚一枚が円筒か円錐の一切れになる。",
                zh:"外側以雙柄刮刀（銑）刨圓，內側以內圓刨挖出弧面，使每片側板都成為圓筒或圓錐的一個切片。" } },
            { title:{ en:"Joint the edges on the shōjiki", ja:"正直で縁を削る", zh:"在「正直」上刨邊" },
              jp:"正直",
              meta:{ en:"The critical step", ja:"最も大事な工程", zh:"最關鍵的步驟" },
              text:{
                en:"The edges are bevelled on the <em>shōjiki</em>, a long plane fixed upside down on a stand: the cooper pushes the stave over the blade rather than moving the plane. With sixteen staves each joint closes an angle of 22.5° (360 ÷ 16); an error of a fraction of a degree, repeated sixteen times, opens a gap.",
                ja:"縁は正直で斜めに削る。正直は台の上に刃を上にして据えた長い鉋で、桶屋は鉋を動かすのではなく、側板のほうを刃の上に押して滑らせる。側板が十六枚なら、一つの継ぎ目が受けもつ角度は22.5度（360÷16）である。一度に満たない狂いも十六回重なれば隙間になる。",
                zh:"側板邊緣在「正直」上刨出斜面。正直是一把刃口朝上、固定在台座上的長刨，桶匠不是推動刨子，而是把側板推過刨刃。若有 16 片側板，每道接縫要閉合 22.5°（360 ÷ 16）的角度；不到 1° 的誤差重複 16 次，就會形成縫隙。" } },
            { title:{ en:"Dowel the staves", ja:"竹釘で接ぐ", zh:"以竹釘接合" },
              jp:"竹釘",
              meta:{ en:"No glue", ja:"接着剤なし", zh:"不用膠" },
              text:{
                en:"Holes are bored into the edges and short bamboo pins (<em>takekugi</em>) set in them, joining stave to stave so that the ring keeps its shape while it is hooped.",
                ja:"縁に穴をあけて短い竹釘を差し、側板どうしをつなぐ。こうして箍をかけるあいだも輪の形が保たれる。",
                zh:"在側板邊緣鑽孔、插入短竹釘，把側板逐片相連，讓圓環在上箍時保持形狀。" } },
            { title:{ en:"Raise and hoop", ja:"組んで箍をかける", zh:"組立與上箍" },
              jp:"箍締め",
              meta:{ en:"Mallet and driver", ja:"木槌と箍締め", zh:"木槌與打箍器" },
              text:{
                en:"The staves are stood in a ring inside a temporary hoop. The permanent hoops are then driven with a mallet and a hardwood driver towards the wider end of the cone, where their grip tightens.",
                ja:"側板を仮の箍の中に輪に立てる。そのうえで本箍を木槌と堅木の当て木で、円錐の広いほうへ打ち込む。広いほうへ進むほど箍は締まる。",
                zh:"側板先在臨時箍圈內立成一圈，再以木槌和硬木打箍器把正式的箍朝圓錐較寬的一端打下去；箍越往寬處移動就束得越緊。" } },
            { title:{ en:"Fit the bottom and test", ja:"底を入れ、水を張る", zh:"裝底與試水" },
              jp:"底入れ",
              meta:{ en:"Groove, board, water", ja:"溝・底板・水", zh:"溝槽、底板、注水" },
              text:{
                en:"A groove is cut round the inside near the base. The bottom, itself several boards dowelled edge to edge, is made a shade oversize and pressed into the groove, and the hoops are driven again to close on it. Finally the tub is planed inside, the rim trimmed, and the vessel filled with water: small weeps close as the wood swells.",
                ja:"底近くの内側にぐるりと溝を彫る。底板そのものも数枚の板を竹釘で接いだもので、ごくわずかに大きくつくって溝に押しこみ、もう一度箍を打ちこんで締める。最後に内側を削り、口縁を整え、水を張る。小さなにじみは木がふくらむにつれて止まる。",
                zh:"在靠近底部的內側刻出一圈溝槽。底板本身也是數片以竹釘拼接的木板，做得略大一點後壓入溝中，再把箍打緊收住。最後刨平內面、修整桶口，然後注水：細小的滲漏會隨木材吸水膨脹而止住。" } }
          ] },
        { t:"figure",
          caption:{
            en:"Schematic of an oke (not to scale): side view with two hoops and the bottom board in its groove, and a plan section through the staves. Each bevelled joint points at the centre; bamboo pins hold neighbouring staves together.",
            ja:"桶の模式図（縮尺は正確でない）。左は二本の箍と溝にはまった底板を示す側面、右は側板を通る平面の断面。斜めに削った継ぎ目はどれも中心を向き、竹釘が隣りあう側板をつなぐ。",
            zh:"木桶示意圖（非按比例）：左為側視圖，可見兩道箍與嵌入溝槽的底板；右為通過側板的平面剖面。每道斜切接縫都指向中心，竹釘把相鄰的側板連在一起。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 340" role="img">', i;
            function T(en, ja, zh){ return lang==="en" ? en : (lang==="ja" ? ja : zh); }
            s += F.text(20, 28, T("ANATOMY OF AN OKE","桶のしくみ","木桶的構造"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            // side elevation: top 70..270 at y=70, bottom 90..250 at y=260
            var yT=70, yB=260, xTL=70, xTR=270, xBL=90, xBR=250;
            function xl(y){ return xTL + (xBL-xTL)*(y-yT)/(yB-yT); }
            function xr(y){ return xTR + (xBR-xTR)*(y-yT)/(yB-yT); }
            s += '<polygon points="'+xTL+','+yT+' '+xTR+','+yT+' '+xBR+','+yB+' '+xBL+','+yB+'" fill="#EADCC1" stroke="#7C6B52"/>';
            for (i=1;i<8;i++){ var ft=i/8; s += '<line x1="'+(xTL+(xTR-xTL)*ft)+'" y1="'+yT+'" x2="'+(xBL+(xBR-xBL)*ft)+'" y2="'+yB+'" stroke="#B4AC9C" stroke-width="0.9"/>'; }
            function hoop(y0,y1){ return '<polygon points="'+(xl(y0)-3)+','+y0+' '+(xr(y0)+3)+','+y0+' '+(xr(y1)+3)+','+y1+' '+(xl(y1)-3)+','+y1+'" fill="#E0E6DB" stroke="#55504A"/>'; }
            s += hoop(96,108) + hoop(220,232);
            s += '<line x1="'+(xl(248)+6)+'" y1="248" x2="'+(xr(248)-6)+'" y2="248" stroke="#55504A" stroke-width="1.2" stroke-dasharray="5 3"/>';
            // leaders
            s += '<line x1="'+(xr(102)+3)+'" y1="102" x2="300" y2="102" stroke="#8B857C"/>';
            s += F.text(304, 98, T("Hoop (taga): bamboo or copper","箍（竹または銅）","箍（竹或銅）"), { size:11, max:lang==="en"?20:18, lh:13 });
            s += '<line x1="'+(xr(160)-30)+'" y1="160" x2="300" y2="160" stroke="#8B857C"/>';
            s += F.text(304, 156, T("Stave, quartersawn","側板（柾目）","側板（柾目）"), { size:11, max:20, lh:13 });
            s += '<line x1="'+(xr(248)-8)+'" y1="248" x2="300" y2="256" stroke="#8B857C"/>';
            s += F.text(304, 252, T("Bottom board set in a groove","溝にはめた底板","嵌入溝槽的底板"), { size:11, max:lang==="en"?18:14, lh:13 });
            s += F.text(170, 290, T("Side view","側面","側視圖"), { size:10.5, fill:"#55504A", anchor:"middle" });
            s += '<line x1="'+(xTL-14)+'" y1="'+(yT+10)+'" x2="'+(xBL-14)+'" y2="'+(yB-10)+'" stroke="#8B857C" marker-end="none"/>';
            s += '<polygon points="'+(xBL-14)+','+(yB-6)+' '+(xBL-18.5)+','+(yB-16)+' '+(xBL-10)+','+(yB-17)+'" fill="#8B857C"/>';
            s += F.text(xTL-6, yT-10, T("driven this way","この向きに打つ","朝此方向打"), { size:9.5, fill:"#55504A" });
            // plan section
            var cx=595, cy=165, ro=104, ri=86, n=16;
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="'+ro+'" fill="#EADCC1" stroke="#7C6B52"/>';
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="'+ri+'" fill="#FBFAF7" stroke="#7C6B52"/>';
            for (i=0;i<n;i++){ var a=2*Math.PI*i/n, c=Math.cos(a), d=Math.sin(a);
              s += '<line x1="'+(cx+ri*c).toFixed(1)+'" y1="'+(cy+ri*d).toFixed(1)+'" x2="'+(cx+ro*c).toFixed(1)+'" y2="'+(cy+ro*d).toFixed(1)+'" stroke="#7C6B52"/>'; }
            // dashed rays to centre for two joints
            [0,1].forEach(function(k){ var a=2*Math.PI*(k+5)/n; s += '<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+ri*Math.cos(a)).toFixed(1)+'" y2="'+(cy+ri*Math.sin(a)).toFixed(1)+'" stroke="#ADA79E" stroke-dasharray="4 3"/>'; });
            s += '<circle cx="'+cx+'" cy="'+cy+'" r="2.5" fill="#55504A"/>';
            // dowels across joints 12..15 (upper part)
            [11,12,13,14].forEach(function(k){ var a=2*Math.PI*k/n, rm=(ro+ri)/2, px=cx+rm*Math.cos(a), py=cy+rm*Math.sin(a), tx=-Math.sin(a)*7, ty=Math.cos(a)*7;
              s += '<line x1="'+(px-tx).toFixed(1)+'" y1="'+(py-ty).toFixed(1)+'" x2="'+(px+tx).toFixed(1)+'" y2="'+(py+ty).toFixed(1)+'" stroke="#201E1B" stroke-width="2.4"/>'; });
            var ak=2*Math.PI*13/n, dx=cx+95*Math.cos(ak), dy=cy+95*Math.sin(ak);
            s += '<line x1="'+dx.toFixed(1)+'" y1="'+dy.toFixed(1)+'" x2="'+(dx+40).toFixed(1)+'" y2="'+(dy-14).toFixed(1)+'" stroke="#8B857C"/>';
            s += F.text(dx+44, dy-24, T("Bamboo pins","竹釘","竹釘"), { size:11 });
            s += F.text(cx-10, cy+30, T("Joints aim at the centre","継ぎ目は中心を向く","接縫指向中心"), { size:10.5, fill:"#55504A", anchor:"middle", max:lang==="en"?14:12, lh:13 });
            s += F.text(cx, 290, T("Plan section","平面断面","平面剖面"), { size:10.5, fill:"#55504A", anchor:"middle" });
            s += F.text(20, 322, T("Schematic. A hoop grips harder the further it is driven towards the wide end.","模式図。箍は広い端へ打ちこむほど強く締まる。","示意圖。箍越往寬端打，束得越緊。"), { size:10, fill:"#8B857C" });
            return s + '</svg>';
          } }
      ] },
    { t:"section",
      id:"taga",
      title:{ en:"Hoops", ja:"箍", zh:"箍" },
      jp:"たが",
      body:[
        { t:"p",
          text:{
            en:"Everything in an oke depends on the hoop, or <em>taga</em>. Japanese has kept the dependence in its idioms: when hoops come off (<em>taga ga hazureru</em>) a person has lost all restraint, and when they loosen (<em>taga ga yurumu</em>) an organisation has grown slack. In practice a hoop works only while the wood is moist and swollen; a tub left to dry out in a heated room shrinks, its hoops slide down, and it leaks until it has been soaked and the hoops tapped back.",
            ja:"桶のすべては箍にかかっている。日本語はその依存を慣用句に残している。「箍が外れる」は人が抑えを失うこと、「箍が緩む」は組織の規律がゆるむことを言う。実際には、箍は木が湿ってふくらんでいるあいだしか効かない。暖房の効いた部屋で乾ききった桶は縮み、箍がずり落ち、水に浸けて箍を打ち直すまで漏れる。",
            zh:"木桶的一切都繫於「箍」。日語在慣用語中保留了這種依賴：「箍が外れる」（箍脫落）指人失去節制，「箍が緩む」（箍鬆了）指組織紀律鬆弛。實際上，箍只有在木材濕潤膨脹時才有效；放在暖氣房裡乾透的木桶會收縮、箍會下滑，直到泡水並把箍重新打緊之前都會漏水。" } },
        { t:"defs",
          items:[
            { term:{ en:"Bamboo hoops", ja:"竹の箍", zh:"竹箍" },
              jp:"竹箍",
              def:{
                en:"Split madake bamboo, braided or twisted into a ring. Light, cheap, springy and renewable, it is the hoop of sake barrels and of the great soy-sauce vats, where braided bands several centimetres thick hold thousands of litres. The bamboo is cut in winter, when its starch content is lowest and insects leave it alone.",
                ja:"割ったマダケを編むかよって輪にしたもの。軽く安く、弾力があり、再生できる。酒樽や醤油の大桶の箍で、数センチの太さに編んだ帯が数千リットルを締める。竹はデンプンが最も少なく虫がつきにくい冬に伐る。",
                zh:"把劈開的桂竹（真竹）編織或絞成環。輕、便宜、有彈性又可再生，是酒樽與大型醬油桶所用的箍；編成數公分粗的竹帶足以束住數千公升。竹子在冬季砍伐，此時澱粉含量最低、不易遭蟲蛀。" } },
            { term:{ en:"Copper and brass hoops", ja:"銅・真鍮の箍", zh:"銅箍與黃銅箍" },
              jp:"銅箍",
              def:{
                en:"Flat strips riveted into rings, used on rice tubs, sushi tubs and bath pails. They do not rot, look clean against pale wood and can be re-tightened, which is why the best kitchen oke are sold with copper hoops.",
                ja:"平たい帯を鋲で輪にしたもので、おひつ、飯台、湯桶に使う。腐らず、白い木に映えてすっきり見え、締め直しもできる。上等な台所の桶が銅の箍で売られるのはそのためである。",
                zh:"把扁平金屬條鉚成環，用於飯桶、壽司桶與浴室水桶。不會腐朽，襯著淺色木材顯得潔淨，也能重新收緊，因此上等的廚房木桶多配銅箍。" } },
            { term:{ en:"Iron hoops", ja:"鉄の箍", zh:"鐵箍" },
              jp:"鉄箍",
              def:{
                en:"Strong and cheap, iron appears on some large tubs and on stave-built drums, but it rusts and the rust stains wood with tannins black, so stainless steel now often takes its place.",
                ja:"強く安い鉄は、一部の大きな桶や桶胴の太鼓に使われる。だが錆び、その錆はタンニンを含む木を黒く染めるので、いまはステンレスに替えることも多い。",
                zh:"鐵既強又便宜，見於部分大型木桶與桶胴太鼓，但會生鏽，鏽跡會把含單寧的木材染黑，因此現在常改用不鏽鋼。" } }
          ] }
      ] },
    { t:"section",
      id:"taru-today",
      title:{ en:"Sake and soy-sauce barrels today", ja:"いまの酒樽と醤油の木桶", zh:"今日的酒樽與醬油木桶" },
      jp:"樽と木桶",
      body:[
        { t:"p",
          text:{
            en:"The standard sake barrel is the <em>yonto-daru</em>, the four-<em>to</em> barrel of 72 litres. Kiku-Masamune, one of the Nada brewers that still fill barrels, uses hand-made barrels of Yoshino sugi and explains the choice by the Kii Peninsula's warm, rainy climate, which gives sugi a good aroma and even grain. Sake rests in the barrel only long enough to take on the wood's scent — the brewers bottle it at the point where the aroma is best — and the straw-wrapped <em>komodaru</em> broken open at weddings and openings (<em>kagami-biraki</em>) is the ceremonial form of the same object. Why staves are cut to include red heart and white sapwood is told on <a href=\"sugi.html\">Sugi</a>.",
            ja:"酒樽の基本は四斗樽、つまり七十二リットルの樽である。いまも樽詰めを行う灘の蔵元の一つ菊正宗は、職人が手づくりした吉野杉の樽を使い、その理由を、紀伊半島の温暖で雨の多い気候がスギに良い香りとそろった木目を与えるからだと説明している。酒が樽にとどまるのは木の香りを移すあいだだけで、蔵は香りが最もよい頃合いに瓶に詰める。婚礼や開店の鏡開きで割られる菰樽は、同じものの儀礼の姿である。側板を赤身と白太の両方を含むように取る理由は<a href=\"sugi.html\">スギ</a>の頁にある。",
            zh:"酒樽的標準規格是「四斗樽」，容量 72 公升。至今仍做樽裝酒的灘地酒廠之一菊正宗，使用匠人手工製作的吉野杉酒樽，並說明理由：紀伊半島溫暖多雨的氣候，讓柳杉香氣好、紋理均勻。日本酒在樽中停留的時間只為吸取木香——酒廠在香氣最佳時裝瓶出貨；婚禮或開幕時以「鏡開」敲開的草蓆包裹酒樽「菰樽」，則是同一器物的儀式形態。側板為何要同時取紅心材與白邊材，見<a href=\"sugi.html\">柳杉</a>頁。" } },
        { t:"p",
          text:{
            en:"Soy sauce shows how close a craft came to vanishing. In 2010 the Shōdoshima brewer Yamaroku estimated that about 3,000 large wooden vats were still in use in Japan; at an average of 4,000 litres, an 80% yield and a cycle of a year and a half, that came to less than 1% of the 848,926 kL of soy sauce shipped that year. Only one firm, Fujii Seitōsho in Sakai, was still building vats of that size. Yamaroku had ordered nine new vats from it in 2009 — reportedly the first post-war order of its kind from a soy-sauce maker — and from 2012 its staff trained with the Sakai coopers, building their first vat themselves in 2013. Their open workshop, the Kioke Craftsman Revival Project, now draws hundreds of participants each year and more than sixty soy-sauce makers. A 2021 university survey counted about 4,750 vats, which the project puts at roughly 1.5% of soy sauce by 2023.",
            ja:"醤油は、一つの技がどこまで消えかけたかを示す。二〇一〇年、小豆島のヤマロク醤油は、国内でまだ使われている大桶をおよそ三千本と見積もった。平均四千リットル、搾りの歩留まり八割、一仕込み一年半として計算すると、その年の醤油出荷量八十四万八千九百二十六キロリットルの一％に満たない。その大きさの桶をつくっていたのは堺の藤井製桶所一社だけだった。ヤマロクは二〇〇九年にそこへ新桶九本を注文しており——醤油屋からの新桶の注文は戦後初めてだったという——二〇一二年から社員が堺の桶屋で学び、二〇一三年には自分たちで最初の桶を組んだ。この「木桶職人復活プロジェクト」の公開の桶づくりには、いまでは毎年数百人と六十を超える醤油蔵が加わる。二〇二一年の大学の調査では木桶は約四千七百五十本と数えられ、プロジェクトは二〇二三年時点で醤油の約一・五％が木桶仕込みと見ている。",
            zh:"醬油的例子顯示一門技藝曾多麼接近消失。2010 年，小豆島的 Yamaroku 醬油（ヤマロク醤油）估計全日本仍在使用的大型木桶約 3,000 個；以平均 4,000 公升、壓榨得率 80%、一個釀造週期 1.5 年計算，產量不到當年醬油出貨量 848,926 公秉的 1%。當時仍能製作如此大型木桶的，只剩堺市的藤井製桶所一家。Yamaroku 在 2009 年向其訂製了 9 個新桶——據說是戰後第一張來自醬油業者的這類訂單——並從 2012 年起派員工到堺市的桶匠處學藝，2013 年自行組成第一個木桶。這項「木桶職人復活計畫」的公開製桶活動，如今每年吸引數百人參與，加入的醬油廠超過 60 家。2021 年一項大學調查統計約有 4,750 個木桶，計畫方估計到 2023 年木桶釀造醬油約占 1.5%。" } },
        { t:"grid",
          cols:4,
          cells:[
            { k:{ en:"Sake barrel", ja:"酒樽", zh:"酒樽" },
              v:"72 L",
              d:{ en:"Four-to barrel (yonto-daru)", ja:"四斗樽", zh:"四斗樽" } },
            { k:{ en:"Soy-sauce vat", ja:"醤油の大桶", zh:"醬油大桶" },
              v:"3,600–5,400 L",
              d:{ en:"20–30 koku capacity", ja:"二十〜三十石", zh:"20–30 石容量" } },
            { k:{ en:"Vats in use", ja:"使用中の大桶", zh:"使用中的大桶" },
              v:"≈4,750",
              d:{
                en:"2021 survey (≈3,000 estimated in 2010)",
                ja:"二〇二一年の調査（二〇一〇年の推計は約三千本）",
                zh:"2021 年調查（2010 年推估約 3,000 個）" } },
            { k:{ en:"Working life", ja:"寿命", zh:"使用年限" },
              v:{ en:"100–150 yrs", ja:"100〜150年", zh:"100–150 年" },
              d:{ en:"Sugi staves, bamboo hoops", ja:"スギの側板、竹の箍", zh:"柳杉側板、竹箍" } }
          ] },
        { t:"p",
          text:{
            en:"In Gifu the newest barrels are not for sake or soy sauce but for whisky: Nissin Mokkō in Takayama opened a barrel division in 2022 and makes casks of Japanese oak, described on <a href=\"furniture.html\">Hida Furniture</a>. Oak casks belong to the European tradition of bent, fire-heated staves; Japanese oke and taru are straight-staved cones, which is why a Japanese cooper needs no fire to shape them.",
            ja:"岐阜でいちばん新しい樽は、酒や醤油ではなくウイスキーのためのものである。高山の日進木工は二〇二二年に樽の事業部をつくり、国産のナラで樽をつくっている。そのことは<a href=\"furniture.html\">飛騨の家具</a>の頁にある。ナラの樽は、火であぶって曲げた側板によるヨーロッパの系譜に属する。日本の桶や樽はまっすぐな側板による円錐なので、日本の桶屋は形づくりに火を必要としない。",
            zh:"在岐阜，最新的木桶不是為日本酒或醬油，而是為威士忌：高山的日進木工於 2022 年成立酒桶事業部，以日本橡木製作威士忌桶，詳見<a href=\"furniture.html\">飛驒家具</a>頁。橡木桶屬於歐洲以火烘烤彎曲側板的傳統；日本的桶與樽則是直側板構成的圓錐，因此日本桶匠塑形時不需用火。" } },
        { t:"tiny",
          text:{
            en:"Sources: Kiku-Masamune, taruzake brand page; Shōyu-tsūshin / Yamaroku Shōyu, basis of the 1% figure and the Kioke Craftsman Revival Project; Nissin Mokkō, company history.",
            ja:"出典：菊正宗「樽酒」ブランドサイト、しょうゆ通信（ヤマロク醤油）「木桶醤油の生産量1％の根拠」「木桶職人復活プロジェクト」、日進木工 沿革。",
            zh:"資料來源：菊正宗「樽酒」品牌網站；醬油通信／Yamaroku 醬油〈木桶醬油產量 1% 的依據〉、「木桶職人復活計畫」；日進木工沿革。" } }
      ] },
    { t:"section",
      id:"magemono-bending",
      title:{ en:"Bending a box", ja:"曲物を曲げる", zh:"曲物的彎製" },
      jp:"曲物と弁当",
      body:[
        { t:"p",
          text:{
            en:"A <em>magemono</em> is made from a single board, not a ring of staves. The board — quartersawn sugi or hinoki, planed to a few millimetres — is boiled or soaked in hot water until it is pliable, then wrapped by hand round a cylindrical or oval former and held with wooden clips while it dries. The overlapping ends are shaved thin so that the joint is no thicker than the wall, glued, and stitched through awl holes with strips of mountain-cherry bark (<em>kaba</em>). A bottom board is fitted inside, and the lid is made the same way, a fraction larger. When Japan designated Ōdate <em>magewappa</em> a traditional craft on 16 October 1980, the specification set down exactly these steps: quartersawn sugi, boiling, bending by hand, cherry-bark stitching, a flat, raised or rebated bottom, and hand polishing.",
            ja:"曲物は側板を並べた輪ではなく、一枚の板からつくる。柾目のスギかヒノキを数ミリに削った板を、しなやかになるまで煮るか湯に浸け、円筒や楕円の型に手で巻きつけ、乾くまで木の挟みで留める。重なる両端は継ぎ目が壁より厚くならないよう薄く削り、接着し、目打ちであけた穴に山桜の皮（樺）を通して綴じる。内側に底板をはめ、ふたは同じつくりでわずかに大きくする。一九八〇年十月十六日に大館曲げわっぱが伝統的工芸品に指定されたとき、その要件にはまさにこの工程が書かれた。スギの柾目板、煮沸、手作業による曲げ、樺縫い、平底・上げ底またはしゃくり底、手作業による仕上げ磨きである。",
            zh:"曲物不是由一圈側板組成，而是用一片木板做成。把柾目柳杉或扁柏刨成數公釐厚的薄板，煮過或浸泡熱水直到柔軟，再以手工繞在圓筒或橢圓模具上，用木夾固定直到乾燥。兩端重疊處削薄，使接縫不比桶壁厚，上膠後用錐子打孔，穿入山櫻樹皮（樺）縫合。內側嵌入底板，蓋子以同樣做法製作、略大一點。日本於 1980 年 10 月 16 日把大館曲げわっぱ指定為傳統工藝品時，其規範寫的正是這些步驟：柳杉柾目板、煮沸、手工彎曲、樺皮縫合、平底／上底或嵌槽底，以及手工研磨收尾。" } },
        { t:"compare",
          cols:2,
          items:[
            { title:{ en:"Oke and taru", ja:"桶・樽", zh:"桶與樽" },
              jp:"結物",
              text:{
                en:"Many staves, joined edge to edge and held by hoops. Suited to large volumes and liquids; heavy; repairable stave by stave.",
                ja:"多くの側板を縁で接ぎ、箍で締める。大容量と液体に向く。重い。側板一枚ずつ直せる。",
                zh:"多片側板逐邊相接、以箍束緊。適合大容量與液體；較重；可逐片更換修理。" } },
            { title:{ en:"Magemono", ja:"曲物", zh:"曲物" },
              jp:"曲物",
              text:{
                en:"One thin board bent into a ring, stitched with bark. Very light; ideal for food that must breathe — rice, steamed dishes, sweets; not watertight for long.",
                ja:"一枚の薄板を輪に曲げ、樹皮で綴じる。とても軽い。呼吸が必要な食べ物——ご飯、蒸し物、菓子——に向く。長く水を張るのには向かない。",
                zh:"一片薄板彎成環，以樹皮縫合。非常輕；最適合需要透氣的食物——米飯、蒸食、點心；不宜長時間盛水。" } }
          ] },
        { t:"p",
          text:{
            en:"The same property makes the wooden lunch box and the rice tub. A <em>mentsū</em>, a single portion of rice in a bentwood box, was the meal of workers, travellers and monks; packed hot, the rice gives up steam to the unfinished wood and then draws a little back as it cools, so that at noon it is neither soggy nor hard. Lacquered or urethane-coated boxes are easier to clean but lose part of this effect, which is why makers still sell both. In Hida, bent boxes are a branch of <a href=\"shunkei.html\">Hida Shunkei</a>, and the sawara that the best of them use comes from the same mountains as Ura-Kiso hinoki: in the Kiso hinoki reserve at Kashimo, sawara makes up about a quarter of the old trees.",
            ja:"同じ性質が、木の弁当箱とおひつをつくる。面桶は曲物に一人前の飯を盛る器で、職人、旅人、僧の食事であった。熱いうちに詰めた飯は湯気を白木に渡し、冷めるにつれて少し取り戻すので、昼には水っぽくも固くもない。漆やウレタンで塗った箱は洗いやすいがこの効果の一部を失う。つくり手がいまも両方を売るのはそのためである。飛騨では曲物は<a href=\"shunkei.html\">飛騨春慶</a>の一部門であり、その上物に使われるサワラは裏木曽のヒノキと同じ山から来る。加子母の木曽ヒノキ備林では、老木のおよそ四分の一がサワラである。",
            zh:"同樣的特性造就了木便當盒與飯桶。「面桶」是盛一人份米飯的曲物，曾是工人、旅人與僧侶的餐具；熱飯裝入後把蒸氣交給未塗裝的木材，冷卻時又吸回少許，到中午時既不濕軟也不乾硬。上漆或塗胺甲酸乙酯（PU）的盒子較好清洗，卻失去部分這種效果，所以製作者至今兩種都賣。在飛驒，曲物是<a href=\"shunkei.html\">飛驒春慶</a>的一個分支，上等品所用的花柏與裏木曾扁柏來自同一片山：加子母的木曾扁柏備林中，老樹約有四分之一是花柏。" } },
        { t:"table",
          caption:{ en:"Air-dry density of the vessel woods", ja:"容れ物の木の気乾密度", zh:"容器用材的氣乾密度" },
          cols:[
            { en:"Wood", ja:"木", zh:"木材" },
            { en:"g/cm³", ja:"g/cm³", zh:"g/cm³" },
            { en:"Typical vessel", ja:"代表的な容れ物", zh:"代表器物" }
          ],
          numCols:[1],
          keyCol:true,
          rows:[
            [
              { en:"Sawara", ja:"サワラ", zh:"花柏" },
              "0.34",
              { en:"Rice tubs, sushi tubs, Shunkei boxes", ja:"おひつ、飯台、春慶の箱", zh:"飯桶、壽司桶、春慶盒" }
            ],
            [
              { en:"Sugi", ja:"スギ", zh:"柳杉" },
              "0.38",
              { en:"Sake barrels, brewing vats, bentwood lunch boxes", ja:"酒樽、仕込み桶、曲げわっぱ", zh:"酒樽、釀造桶、曲物便當盒" }
            ],
            [{ en:"Kōyamaki", ja:"コウヤマキ", zh:"日本金松" }, "0.42", { en:"Bath tubs and pails", ja:"風呂桶、手桶", zh:"浴桶、提桶" }],
            [
              { en:"Hinoki", ja:"ヒノキ", zh:"扁柏" },
              "0.44",
              { en:"Bath tubs, steamers, masu", ja:"風呂桶、蒸籠、枡", zh:"浴桶、蒸籠、木枡" }
            ],
            [{ en:"Ginkgo", ja:"イチョウ", zh:"銀杏" }, "0.47", { en:"Cutting boards", ja:"まな板", zh:"砧板" }],
            [
              { en:"Hō (magnolia)", ja:"ホオノキ", zh:"厚朴" },
              "0.49",
              { en:"Cutting boards, knife sheaths", ja:"まな板、刃物の鞘", zh:"砧板、刀鞘" }
            ]
          ] },
        { t:"tiny",
          text:{
            en:"Sources: Tōhoku Bureau of Economy, Trade and Industry, Ōdate magewappa (designation and specification); Wood Industry Handbook, 4th edition (densities); Forestry Agency Chūbu Regional Forest Office (Kiso hinoki reserve).",
            ja:"出典：東北経済産業局「大館曲げわっぱ」（指定と要件）、『木材工業ハンドブック』改訂四版（密度）、林野庁中部森林管理局（木曽ヒノキ備林）。",
            zh:"資料來源：東北經濟產業局〈大館曲げわっぱ〉（指定與規範）；《木材工業手冊》改訂第 4 版（密度）；林野廳中部森林管理局（木曾扁柏備林）。" } }
      ] },
    { t:"related",
      items:[
        { href:"masu.html", why:{ en:"Ōgaki's square hinoki boxes.", ja:"大垣の四角いヒノキの箱。", zh:"大垣的方形扁柏盒。" } },
        { href:"shunkei.html", why:{ en:"Bent boxes in lacquer.", ja:"漆の曲物。", zh:"漆藝曲物。" } },
        { href:"sugi.html", why:{ en:"Sugi and the sake barrel.", ja:"スギと酒樽。", zh:"柳杉與酒樽。" } },
        { href:"care.html", why:{ en:"Looking after wooden kitchenware.", ja:"木の台所道具の手入れ。", zh:"木製廚具的保養。" } }
      ] }
  ] };

/* ---- -------------------------------------------- floats */
GIFU.pages["floats"] = { kicker:{ en:"Wood Craft · 10", ja:"木の工芸 · 10", zh:"木作工藝 · 10" },
  title:{ en:"Festival Floats", ja:"祭屋台", zh:"祭典屋台" },
  jp:"高山・古川・大垣 · 動く木の工芸",
  lede:{
    en:"Three times a year, towering wooden carts, carved, lacquered, gilded and hung with brocade, are drawn through the streets of three Gifu towns. The festival floats of Takayama, Furukawa and Ōgaki are among the most elaborate objects ever made of wood in Japan — mobile buildings that combine the skills of carpenters, carvers, lacquerers, metalworkers, textile makers and puppeteers. In 2016 all three were inscribed by UNESCO as part of Japan's “Yama, Hoko, Yatai” float festivals. This page describes the festivals and how their floats are built, kept and restored.",
    ja:"年に三度、彫刻され、漆を塗られ、金箔を押され、錦を垂らした、そびえる木の車が、岐阜の三つの町の通りを曳かれる。高山、古川、大垣の祭屋台は、日本で木からつくられたもののなかで最も手のこんだものの一つであり、大工、彫師、塗師、金工、染織の職人、からくり師の技をあわせた、動く建物である。二〇一六年、三つはいずれも日本の「山・鉾・屋台行事」の一部としてユネスコに登録された。この頁は祭りと、その屋台がどうつくられ、守られ、修理されるかを紹介する。",
    zh:"每年三度，雕刻精美、上漆貼金、垂掛錦緞的高聳木車，在岐阜三座城鎮的街道上被拖行而過。高山、古川與大垣的祭典屋台，是日本以木材製成最繁複的物件之一——結合木匠、雕刻師、漆師、金工、染織工匠與機關人偶師技藝的移動建築。2016 年，三者皆以日本「山・鉾・屋台行事」之一部分列入聯合國教科文組織名錄。本頁介紹這些祭典，以及屋台如何建造、保存與修復。" },
  body:[
    { t:"section",
      id:"festivals",
      title:{ en:"Three festivals", ja:"三つの祭り", zh:"三個祭典" },
      jp:"山・鉾・屋台行事",
      body:[
        { t:"p",
          text:{
            en:"On 1 December 2016 UNESCO added “Yama, Hoko, Yatai, float festivals in Japan” to its list of the Intangible Cultural Heritage of Humanity: thirty-three festivals in eighteen prefectures, united by the tradition of townspeople building and drawing elaborate floats in honour of their shrine's deity. Gifu contributed three, and they differ in character. Takayama's floats are the most famous for their carving and lacquer; Furukawa's festival is known for its wild night-time drum procession; Ōgaki's for the mechanical puppet plays performed on its floats.",
            ja:"二〇一六年十二月一日、ユネスコは「山・鉾・屋台行事」を人類の無形文化遺産の一覧に加えた。十八府県の三十三の祭りで、町の人々が氏神をたたえて手のこんだ屋台をつくり曳く伝統で結ばれている。岐阜はそのうち三つを出し、それぞれ性格が違う。高山の屋台は彫刻と漆で最も名高く、古川の祭りは夜の荒々しい太鼓の行列で、大垣の祭りは軕の上で演じるからくりで知られる。",
            zh:"2016 年 12 月 1 日，聯合國教科文組織將「日本山・鉾・屋台祭典」列入人類非物質文化遺產名錄：共十八個府縣的三十三項祭典，其共通點是市民為了敬奉氏神，建造並拖行精美的祭車。岐阜貢獻了其中三項，而且性格各異：高山的屋台以雕刻與漆藝最負盛名；古川祭以狂野的夜間太鼓遊行著稱；大垣祭則以在祭車上演出的機關人偶戲聞名。" } },
        { t:"table",
          caption:{ en:"Gifu's float festivals", ja:"岐阜の屋台行事", zh:"岐阜的屋台祭典" },
          cols:[
            { en:"Festival", ja:"祭り", zh:"祭典" },
            { en:"When", ja:"時期", zh:"日期" },
            { en:"Floats", ja:"屋台", zh:"祭車" },
            { en:"Designations", ja:"指定", zh:"指定" }
          ],
          rows:[
            [
              { en:"Takayama — spring (Sannō festival)", ja:"春の高山祭（山王祭）", zh:"春季高山祭（山王祭）" },
              { en:"14–15 April", ja:"四月十四〜十五日", zh:"4 月 14–15 日" },
              { en:"12 yatai", ja:"屋台十二台", zh:"屋台 12 座" },
              {
                en:"Floats: Important Tangible Folk Cultural Property (1960); festival: Important Intangible Folk Cultural Property (1979); UNESCO (2016)",
                ja:"屋台：重要有形民俗文化財（一九六〇年）、屋台行事：重要無形民俗文化財（一九七九年）、ユネスコ（二〇一六年）",
                zh:"屋台：重要有形民俗文化財（1960）；祭典：重要無形民俗文化財（1979）；UNESCO（2016）" }
            ],
            [
              { en:"Takayama — autumn (Hachiman festival)", ja:"秋の高山祭（八幡祭）", zh:"秋季高山祭（八幡祭）" },
              { en:"9–10 October", ja:"十月九〜十日", zh:"10 月 9–10 日" },
              { en:"11 yatai", ja:"屋台十一台", zh:"屋台 11 座" },
              { en:"As above", ja:"同上", zh:"同上" }
            ],
            [
              { en:"Furukawa festival", ja:"古川祭", zh:"古川祭" },
              { en:"19–20 April", ja:"四月十九〜二十日", zh:"4 月 19–20 日" },
              { en:"9 yatai and the okoshi-daiko drum", ja:"屋台九台と起し太鼓", zh:"屋台 9 座與起太鼓" },
              {
                en:"Important Intangible Folk Cultural Property (1980); UNESCO (2016)",
                ja:"重要無形民俗文化財（一九八〇年）、ユネスコ（二〇一六年）",
                zh:"重要無形民俗文化財（1980）；UNESCO（2016）" }
            ],
            [
              { en:"Ōgaki festival", ja:"大垣祭", zh:"大垣祭" },
              { en:"Second weekend of May", ja:"五月の第二土・日曜日", zh:"5 月第二個週末" },
              { en:"13 yama, many with mechanical puppets", ja:"軕十三両（多くがからくりをもつ）", zh:"祭車 13 座（多數附機關人偶）" },
              {
                en:"Important Intangible Folk Cultural Property (2015); UNESCO (2016)",
                ja:"重要無形民俗文化財（二〇一五年）、ユネスコ（二〇一六年）",
                zh:"重要無形民俗文化財（2015）；UNESCO（2016）" }
            ]
          ] }
      ] },
    { t:"section",
      id:"anatomy",
      title:{ en:"What a float is made of", ja:"屋台は何でできているか", zh:"屋台由什麼構成" },
      jp:"木・漆・金具・錦",
      body:[
        { t:"p",
          text:{
            en:"A Takayama yatai is a two- or three-tiered structure on four large wheels, framed in keyaki and other hardwoods chosen for strength and figure, and rising in some cases to around eight metres. Its surfaces are covered with carved panels — dragons, lions, phoenixes, Chinese children at play — in keyaki and other woods; its frame and panels are lacquered black and red; its fittings are of chased and gilded metal; and it is hung with brocades and embroideries, some imported from China and Europe centuries ago. Several floats carry <em>karakuri</em> puppets worked by strings from inside the float, which perform on a projecting platform. Some have roofs that can be lowered so that the float can pass under gates and into its storehouse.",
            ja:"高山の屋台は、四つの大きな車輪の上の二層か三層の構えで、強さと杢で選んだケヤキなどの広葉樹で組まれ、高いものではおよそ八メートルに達する。その面は、ケヤキなどの木に彫った龍、獅子、鳳凰、遊ぶ唐子の彫刻の板で覆われ、骨組みと板は黒と朱の漆で塗られ、金具は彫って鍍金した金属で、錦や刺繍——何世紀も前に中国やヨーロッパから来たものもある——が垂らされる。いくつかの屋台は、屋台のなかから糸で操り、張り出した舞台で演じるからくり人形をのせる。屋根を下げられるものもあり、門をくぐって屋台蔵に入れるようにしてある。",
            zh:"高山屋台是架在四個大車輪上的兩層或三層結構，以櫸木等兼具強度與紋理的闊葉材構成骨架，有些高達約八公尺。其表面覆滿雕刻板——龍、獅、鳳凰、嬉戲的唐子——以櫸木等木材雕成；骨架與板面塗黑漆與朱漆；五金配件為鏨刻鍍金的金屬；並懸掛錦緞與刺繡，其中有些是數百年前自中國與歐洲輸入。數座屋台載有機關人偶（karakuri），由藏身車內的操作者以絲線操縱，在伸出的平台上表演。有些屋頂可降下，讓屋台能穿過門框進入屋台藏。" } },
        { t:"figure",
          caption:{
            en:"The crafts that go into a festival float, and the rough share of attention each receives when a float is restored. Qualitative, after descriptions of Takayama float restoration.",
            ja:"屋台にかかわる職と、修理のときにそれぞれに向けられるおよその手間。高山の屋台の修理の説明にもとづく定性的なもの。",
            zh:"祭典屋台所涉及的工藝，以及修復時各自所需投入的大致比重。依高山屋台修復說明整理之定性資料。" },
          svg:function(lang, L){ return GIFU.fig.matrix(lang, L, {
            title:{ en:"Crafts in a float", ja:"屋台の職", zh:"屋台中的工藝" }, labelW:200,
            cols:[ { en:"Structure", ja:"構造", zh:"結構" }, { en:"Surface", ja:"表面", zh:"表面" }, { en:"Ornament", ja:"装飾", zh:"裝飾" }, { en:"Movement", ja:"動き", zh:"動作" } ],
            rows:[
              { n:{ en:"Carpenter", ja:"大工", zh:"木匠" }, v:[3,0,0,1] },
              { n:{ en:"Carver", ja:"彫師", zh:"雕師" }, v:[0,1,3,0] },
              { n:{ en:"Lacquerer", ja:"塗師", zh:"漆師" }, v:[0,3,2,0] },
              { n:{ en:"Metalworker, gilder", ja:"金工・箔押し", zh:"金工、貼金" }, v:[1,1,3,0] },
              { n:{ en:"Textile maker", ja:"染織", zh:"染織" }, v:[0,1,3,0] },
              { n:{ en:"Wheelwright", ja:"車大工", zh:"車輪匠" }, v:[2,0,0,3] },
              { n:{ en:"Karakuri master", ja:"からくり師", zh:"機關人偶師" }, v:[0,0,1,3] }
            ] }); } }
      ] },
    { t:"section",
      id:"makers",
      title:{ en:"Carvers and neighbourhoods", ja:"彫師と屋台組", zh:"雕師與屋台組" },
      jp:"谷口与鹿",
      body:[
        { t:"p",
          text:{
            en:"The oldest of Takayama's floats date from the mid-eighteenth century, and most were built or rebuilt in the late eighteenth and nineteenth centuries, when the town's merchants were rich and competed to outdo one another. Each float belongs to a <em>yatai-gumi</em>, a neighbourhood association that owns it, keeps it in a tall, white-walled storehouse, the <em>yatai-gura</em>, and pays for its upkeep. The most celebrated carver was Taniguchi Yoroku (1822–1864), the second son of a Takayama family of master carpenters, who carved for several floats — most famously the Kirin-tai, whose panel of Chinese children at play was carved from a single block of wood and includes chains of freely moving links. He later worked in Kyoto and Itami, where he died.",
            ja:"高山の屋台で最も古いものは十八世紀半ばにさかのぼり、多くは十八世紀後半から十九世紀、町の商人が富み、互いに競いあったころに建てられるか建て直された。屋台はそれぞれ屋台組——それを所有し、白壁の高い屋台蔵に納め、維持の費用を払う町内の組——に属する。最も名高い彫師は谷口与鹿（一八二二〜一八六四）で、高山の大工の棟梁の家の次男であり、いくつもの屋台を彫った。最も名高いのは麒麟台で、その唐子群遊の彫刻は一つの木の塊から彫られ、自由に動く鎖の輪を含む。彼はのちに京都や伊丹で仕事をし、その地で没した。",
            zh:"高山最古老的屋台可追溯至十八世紀中葉，大多數在十八世紀後期與十九世紀——城中商人富裕並相互競較之時——建造或重建。每座屋台屬於一個「屋台組」，即擁有它、把它收藏在高聳白牆的「屋台藏」中並負擔維護費用的街坊組織。最著名的雕師是谷口與鹿（1822–1864），他是高山木匠棟樑世家的次子，為數座屋台雕刻——最有名的是「麒麟台」，其唐子群遊雕板以單一木塊雕成，還包括可自由活動的鎖鏈環。他後來在京都與伊丹工作，並卒於當地。" } },
        { t:"defs",
          items:[
            { term:{ en:"Karakuri", ja:"からくり", zh:"機關人偶" },
              jp:"糸からくり",
              def:{
                en:"Mechanical puppets operated by teams hidden in the float, pulling a large number of strings to make the figures walk, somersault, swing from bars or transform — a Shinto priest into a lion, a child into a dancer. Takayama's Hotei-tai and Sanbasō, two of Furukawa's floats and many of Ōgaki's thirteen yama carry karakuri; the mechanisms are of wood, whalebone and cord.",
                ja:"屋台のなかに隠れた組が多くの糸を引いて操る機械仕掛けの人形で、人形を歩かせ、とんぼを切らせ、棒にぶらさがらせ、変身させる——神職が獅子に、童が舞い手に。高山の布袋台や三番叟、古川の屋台のうち二台、大垣の十三両の軕の多くがからくりをもつ。仕掛けは木、鯨のひげ、紐でできている。",
                zh:"由藏身車內的團隊拉動眾多絲線操控的機械人偶，能讓人偶行走、翻筋斗、在橫桿上擺盪或變身——神職化為獅子、孩童變成舞者。高山的布袋台與三番叟、古川的兩座屋台，以及大垣十三座祭車中的多數都載有機關人偶；機關由木頭、鯨鬚與繩索構成。" } },
            { term:{ en:"Okoshi-daiko", ja:"起し太鼓", zh:"起太鼓" },
              jp:"古川",
              def:{
                en:"Furukawa's festival opens at night with a great drum carried on a wooden tower by hundreds of men, while smaller drums on poles are thrust against it by rival groups — a tradition said to be documented since 1831 and famous for its roughness.",
                ja:"古川の祭りは夜、何百人もの男が担ぐ木の櫓にのせた大太鼓で始まり、競う組が竿の先の小さな太鼓をそれにぶつける。一八三一年から記録があるといわれる伝統で、その荒々しさで名高い。",
                zh:"古川祭在夜間揭幕：數百名男子扛著載有大鼓的木製櫓台前進，各競爭團體把竿上小鼓撞向大鼓——這項據說自 1831 年即有記載的傳統，以粗獷激烈聞名。" } },
            { term:{ en:"The festival halls", ja:"屋台会館", zh:"屋台會館" },
              jp:"展示",
              def:{
                en:"Because the festivals last only a few days, Takayama displays some of its floats year-round in a festival float exhibition hall beside the Sakurayama Hachiman shrine, rotating them through the seasons.",
                ja:"祭りは数日しかないので、高山は櫻山八幡宮のそばの屋台会館で、季節ごとに入れ替えながら、屋台のいくつかを一年じゅう見せている。",
                zh:"由於祭典只持續幾天，高山在櫻山八幡宮旁的屋台會館全年展示部分屋台，並隨季節輪換。" } }
          ] }
      ] },
    { t:"section",
      id:"restoration",
      title:{ en:"Keeping the floats alive", ja:"屋台を生かしつづける", zh:"讓屋台延續生命" },
      jp:"修理と技",
      body:[
        { t:"p",
          text:{
            en:"A float that is drawn through the streets every year suffers wear: wheels crack, lacquer chips, gilding rubs, textiles fade and joints loosen. Takayama's floats are therefore restored in cycles, with major work every few decades on each float, supported by national and municipal funds as designated cultural property. Each restoration needs carpenters able to dismantle and reassemble a structure without damaging centuries-old joints, lacquerers who can match historic finishes, carvers to repair and replace broken details, metalworkers, gilders and textile conservators. The festivals thus keep alive a whole ecology of crafts — and the demand for large, fine keyaki and other hardwoods, which are ever harder to find.",
            ja:"毎年通りを曳かれる屋台は傷む。車輪は割れ、漆は欠け、金箔はこすれ、布は褪せ、仕口はゆるむ。だから高山の屋台は周期を決めて修理され、それぞれの屋台に数十年ごとに大きな手が入り、指定文化財として国と市の資金がそれを支える。修理ごとに、何世紀も前の仕口を傷めずに構えを解体し組み直せる大工、昔の塗りに合わせられる塗師、壊れた細部を直し替える彫師、金工、箔押し、染織の修復家が要る。祭りはこうして職の生態系をまるごと生かしつづけ——そして、ますます見つけにくくなった大きく良質のケヤキなど広葉樹への需要をも生かしつづける。",
            zh:"每年在街上拖行的屋台必然耗損：車輪開裂、漆面剝落、金箔磨損、織品褪色、接合鬆動。因此高山屋台採循環修復，每座屋台每隔數十年進行一次大修，並以指定文化財身分獲得國家與市府經費支持。每次修復都需要能拆解重組結構而不損及數百年接合的木匠、能匹配歷史塗裝的漆師、修補替換破損細部的雕師，以及金工、貼金師與織品修復師。祭典因此讓一整個工藝生態系得以延續——也延續了對大徑優質櫸木等闊葉材的需求，而這些木材已愈來愈難尋。" } }
      ] },
    { t:"section",
      id:"carpentry",
      title:{ en:"How a yatai is put together", ja:"屋台の組み立て", zh:"屋台如何組成" },
      jp:"台輪と通し柱",
      body:[
        { t:"p",
          text:{
            en:"A Takayama float is a piece of building carpentry on wheels, and like a temple it is designed to come apart. The clearest published description is of a float that left Takayama: the Hatomine-guruma, which belonged to a neighbourhood of Shimo-Ninomachi and is now kept by the Shimohara Hachiman shrine in Kanayama, Gero. It is built in three tiers on a base. The base is a great frame, the <em>ō-dairin</em>, with an inner frame that holds the wheels. Six continuous posts run through the middle and upper tiers and tie them together; the lower tier is enclosed by a grid of lattice screens and bamboo blinds; the upper tier has its own square posts, tie-beams and a red-lacquered railing. The cusped Chinese-style roof (<em>karahafu</em>) is made in six sections that separate, each with its rafters attached, so that the whole roof can be lifted off in pieces. Iron rings at front and back took the ropes by which it was hauled.",
            ja:"高山の屋台は車にのった建築の大工仕事であり、寺と同じく、ばらせるようにつくられている。公にされた最もくわしい記述は、高山を出た一台の屋台についてのものである。下二之町の組がもっていた鳩峯車で、いまは下呂市金山町の下原八幡神社が保管している。それは台の上に三段で組まれる。台は大台輪という大きな枠で、内側の枠が車を抱える。六本の通し柱が中段と上段を貫いて両者を結び、下段は格子と竹の簾で囲われる。上段は角柱、頭貫、朱漆の高欄をもつ。唐破風の屋根は六つに分かれ、それぞれに垂木がついたまま外れるので、屋根全体を分けて持ちあげられる。前後の鉄の環に綱を通して曳いた。",
            zh:"高山的屋台是一件裝在車輪上的建築木作，而且和寺廟一樣，被設計成可以拆解。已公開的最詳細記述，來自一座離開高山的屋台：鳩峯車，原屬下二之町的一個組，如今由下呂市金山町的下原八幡神社保管。它在底座上分三層構成。底座是稱為「大台輪」的大框架，內框承住車輪。六根通柱貫穿中層與上層，把兩層連成一體；下層以格子與竹簾圍起；上層有方柱、頭貫與朱漆欄杆。唐破風屋頂分成六塊，每塊連同椽子一起拆下，整個屋頂便可分件吊起。前後的鐵環用來穿繩牽引。" } },
        { t:"p",
          text:{
            en:"The float's papers show how such structures were looked after. A box inscription of 1747 is the earliest proof that it was in use; a record of 1799 lists sixty-four kinds of parts, each entrusted to a named household of the neighbourhood, which kept the dismantled float between festivals. When the neighbourhood built a new float in 1835–1836, the old one was acquired by Shimohara village, whose shrine still keeps it; it was repaired by the carpenter Kataoka Yoshiji in 1994. Takayama's survey of its floats dates the main transformation of their form to the years from about 1804 to 1843, when roofs, bracket sets and platforms were remodelled as the merchants competed. The festivals once had more floats than now: sixteen in spring and fifteen in autumn, against twelve and eleven today.",
            ja:"この屋台の文書は、こうした構造物がどう守られてきたかを示す。一七四七年の箱書が、使われていたことを示す最も古い証しである。一七九九年の記録は六十四種類の部材を挙げ、それぞれを組の名のある家に預けて、祭りと祭りのあいだ、ばらした屋台を保管していた。組が一八三五〜一八三六年に新しい屋台をつくると、古い屋台は下原村が手に入れ、いまもその神社が保管している。一九九四年には大工の片岡善次が修理した。高山市の屋台の調査は、屋台の形が大きく変わった時期を、町人が競いあった一八〇四年ごろから一八四三年ごろとし、屋根、斗組、台が改められたとする。祭りの屋台はかつていまより多く、春は十六台、秋は十五台あった。いまは十二台と十一台である。",
            zh:"這座屋台的文書顯示了這類構造物如何被維護。1747 年的箱書是它已在使用的最早證據；1799 年的紀錄列出 64 類部件，各自託付給組內具名的人家，在兩次祭典之間保管拆散的屋台。1835–1836 年該組新造屋台後，舊屋台由下原村購得，至今仍由當地神社保管；1994 年由木匠片岡善次修繕。高山市的屋台調查認為，屋台形制的主要變化發生在約 1804 年至 1843 年間，町人相互較勁，屋頂、斗栱與台座都經改造。祭典的屋台過去比現在多：春季 16 座、秋季 15 座，如今為 12 座與 11 座。" } },
        { t:"figure",
          caption:{
            en:"Schematic elevation of a Takayama-type yatai, after the published description of the Hatomine-guruma (Takayama City). Not to scale; heights of real floats vary.",
            ja:"高山型の屋台の模式立面図。高山市が公表した鳩峯車の記述による。縮尺不同。実際の屋台の高さはまちまちである。",
            zh:"高山型屋台示意立面圖，依高山市公開的鳩峯車記述繪製。未依比例；實際屋台高度各不相同。" },
          svg:function(lang, L){
            var F = GIFU.fig, s = '<svg viewBox="0 0 760 390" role="img">';
            s += F.text(20, 28, lang==="en"?"ANATOMY OF A YATAI":(lang==="ja"?"屋台のしくみ":"屋台的構造"), { serif:true, size:13, fill:"#55504A", ls:lang==="en"?2:1 });
            var cx = 200, g = 366;
            // wheels
            s += '<circle cx="'+(cx-70)+'" cy="'+(g-26)+'" r="26" fill="#EDEAE2" stroke="#7C6B52"/><circle cx="'+(cx+70)+'" cy="'+(g-26)+'" r="26" fill="#EDEAE2" stroke="#7C6B52"/>';
            s += '<line x1="40" y1="'+g+'" x2="360" y2="'+g+'" stroke="#8B857C"/>';
            // base (dairin)
            s += '<rect x="'+(cx-110)+'" y="'+(g-70)+'" width="220" height="22" fill="#E7DFD2" stroke="#7C6B52"/>';
            // lower tier lattice
            s += '<rect x="'+(cx-95)+'" y="'+(g-150)+'" width="190" height="80" fill="#F0EDE4" stroke="#7C6B52"/>';
            for (var i = 1; i < 8; i++) s += '<line x1="'+(cx-95+i*190/8)+'" y1="'+(g-150)+'" x2="'+(cx-95+i*190/8)+'" y2="'+(g-70)+'" stroke="#CDC6B9"/>';
            for (var j = 1; j < 4; j++) s += '<line x1="'+(cx-95)+'" y1="'+(g-150+j*20)+'" x2="'+(cx+95)+'" y2="'+(g-150+j*20)+'" stroke="#CDC6B9"/>';
            // middle tier
            s += '<rect x="'+(cx-80)+'" y="'+(g-200)+'" width="160" height="50" fill="#EADCC1" stroke="#7C6B52"/>';
            // upper tier with railing
            s += '<rect x="'+(cx-100)+'" y="'+(g-208)+'" width="200" height="8" fill="#EEE1DF" stroke="#7C6B52"/>';
            s += '<rect x="'+(cx-70)+'" y="'+(g-262)+'" width="140" height="54" fill="#F5F3ED" stroke="#7C6B52"/>';
            // through posts (dashed, spanning middle+upper)
            [-60, 0, 60].forEach(function(dx){ s += '<line x1="'+(cx+dx)+'" y1="'+(g-262)+'" x2="'+(cx+dx)+'" y2="'+(g-150)+'" stroke="#7C6B52" stroke-width="2.5"/>'; });
            // roof karahafu (six sections)
            s += '<path d="M'+(cx-100)+' '+(g-262)+' Q'+(cx-60)+' '+(g-270)+' '+(cx-30)+' '+(g-292)+' Q'+cx+' '+(g-312)+' '+(cx+30)+' '+(g-292)+' Q'+(cx+60)+' '+(g-270)+' '+(cx+100)+' '+(g-262)+' Z" fill="#E4E0D6" stroke="#7C6B52"/>';
            [-66, -33, 0, 33, 66].forEach(function(dx){ s += '<line x1="'+(cx+dx)+'" y1="'+(g-264)+'" x2="'+(cx+dx)+'" y2="'+(g-268-(66-Math.abs(dx))*0.5)+'" stroke="#ADA79E" stroke-dasharray="2 2"/>'; });
            // labels
            var lx = 400, items = [
              { y:g-288, n:{ en:"Karahafu roof in six sections, lifted off in pieces", ja:"唐破風の屋根。六つに分かれ、分けて外せる", zh:"唐破風屋頂分為六塊，可分件拆下" } },
              { y:g-236, n:{ en:"Upper tier: square posts, tie-beams, lacquered railing", ja:"上段：角柱、頭貫、漆塗りの高欄", zh:"上層：方柱、頭貫、漆欄杆" } },
              { y:g-178, n:{ en:"Six through-posts tie the middle and upper tiers", ja:"六本の通し柱が中段と上段を結ぶ", zh:"六根通柱連結中層與上層" } },
              { y:g-112, n:{ en:"Lower tier: lattice screens and bamboo blinds", ja:"下段：格子と竹の簾", zh:"下層：格子與竹簾" } },
              { y:g-58,  n:{ en:"Ō-dairin base frame; inner frame carries the wheels", ja:"大台輪。内側の枠が車を抱える", zh:"大台輪底框；內框承住車輪" } }
            ];
            var tx = [cx+100, cx+70, cx+60, cx+95, cx+110];
            for (var k = 0; k < items.length; k++) {
              s += '<line x1="'+(tx[k]+4)+'" y1="'+(items[k].y-4)+'" x2="'+(lx-6)+'" y2="'+(items[k].y-4)+'" stroke="#CDC6B9"/>';
              s += F.text(lx, items[k].y, L(items[k].n), { size:10.5, fill:"#201E1B", max:56, lh:13 });
            }
            return s + '</svg>';
          } }
      ] },
    { t:"section",
      id:"on-show",
      title:{ en:"Floats between festivals", ja:"祭りのあいだの屋台", zh:"祭典之間的屋台" },
      jp:"屋台会館",
      body:[
        { t:"p",
          text:{
            en:"For most of the year Takayama's floats stand in their storehouses, and until recently only residents of each owning district were allowed close to them. The Takayama Matsuri Yatai Kaikan, opened by the Sakurayama Hachiman shrine in 1968, was built to let visitors see them at any season: four of the eleven autumn-festival floats are on show at a time, changed three times a year, together with the festival's great portable shrine. A companion hall opened in 1995, the Sakurayama Nikkō-kan, shows another kind of Takayama woodwork — a one-tenth scale model of the Tōshōgū shrine at Nikkō, made by thirty-three craftsmen over fifteen years in the Taishō era (1912–1926).",
            ja:"一年の大半、高山の屋台は屋台蔵にあり、近ごろまでは、それぞれの屋台をもつ地区の住民しか近づけなかった。一九六八年に桜山八幡宮が開いた高山祭屋台会館は、季節を問わず訪れる人に屋台を見せるためにつくられた。秋の祭りの十一台のうち四台をいちどに展示し、年に三回入れ替え、祭りの大神輿もあわせて見せる。一九九五年に開いた併設の桜山日光館は、もう一つの高山の木の仕事を見せる。日光東照宮の十分の一の模型で、大正時代（一九一二〜一九二六年）に三十三人の職人が十五年をかけてつくったものである。",
            zh:"一年中大部分時間，高山的屋台都停放在屋台藏裡；直到不久前，也只有擁有該屋台的地區居民才能靠近。櫻山八幡宮於 1968 年開設的高山祭屋台會館，就是為了讓遊客在任何季節都能看到屋台：秋祭 11 座屋台中每次展出 4 座，每年輪換 3 次，並展示祭典的大神轎。1995 年開設的附屬館「櫻山日光館」展示另一種高山木作——日光東照宮的十分之一模型，由 33 位工匠在大正時代（1912–1926 年）耗時 15 年製成。" } },
        { t:"tiny",
          text:{
            en:"Sources: Takayama City, survey reports on the festival floats (Hatomine-guruma; float construction histories); Japan Tourism Agency multilingual commentary database (Takayama festival); Takayama Matsuri Yatai Kaikan, facility information.",
            ja:"出典：高山市「祭屋台」調査資料（鳩峯車、各屋台の沿革）、観光庁 多言語解説文データベース（高山祭）、高山祭屋台会館の施設案内。",
            zh:"資料來源：高山市祭屋台調查資料（鳩峯車、各屋台沿革）；日本觀光廳多語解說資料庫（高山祭）；高山祭屋台會館設施介紹。" } }
      ] },
    { t:"section",
      id:"furukawa",
      title:{ en:"Furukawa's nine floats", ja:"古川の九台の屋台", zh:"古川的九座屋台" },
      jp:"古川祭",
      body:[
        { t:"p",
          text:{
            en:"Furukawa's festival, held on 19 and 20 April, is two festivals in one. The night of the 19th, the eve, belongs to the <em>okoshi-daiko</em>: a great drum on its tower, carried by the year's lead group, the <em>shuji-gumi</em>, while dozens of smaller drums on poles from the town's neighbourhoods jostle to get close to it. The 20th belongs to the nine yatai — Kagura-tai, Seiryū-tai, Byakko-tai, Seiyō-tai, Kirin-tai, Ryūteki-tai, Sankō-tai, Hōō-tai and Kinki-tai, the last reputedly built about 250 years ago and the oldest. Seiryū-tai and Kirin-tai perform karakuri; on Byakko-tai children dance the kabuki piece <em>Hashi Benkei</em>. The organisers describe the festival as a tradition of some four hundred years; it fills the streets of the old town centre of Furukawa, now part of Hida city, a short train ride north of Takayama.",
            ja:"四月十九日と二十日の古川祭は、二つの祭りを一つにしたものである。十九日の試楽祭の夜は起し太鼓のものだ。その年の主事組が櫓にのせた大太鼓を担ぎ、町の各組の何十もの付け太鼓がそれに近づこうと競りあう。二十日の本楽祭は九台の屋台のものである。神楽台、青龍台、白虎台、清曜台、麒麟台、龍笛台、三光台、鳳凰台、そして約二百五十年前の創建と伝えられる最古の金亀台。青龍台と麒麟台はからくりを演じ、白虎台では子どもが歌舞伎の「橋弁慶」を舞う。主催者はこの祭りを四百年の伝統と記す。舞台は、高山から列車で北へ少しの、いまは飛騨市となった古川の旧市街である。",
            zh:"4 月 19 日與 20 日舉行的古川祭，其實是兩個祭典合而為一。19 日試樂祭之夜屬於「起太鼓」：當年的主事組扛著架在木櫓上的大鼓，町內各組數十面綁在長竿上的「付太鼓」爭相擠近。20 日本樂祭則屬於九座屋台——神樂台、青龍台、白虎台、清曜台、麒麟台、龍笛台、三光台、鳳凰台，以及相傳約 250 年前創建、最古老的金龜台。青龍台與麒麟台表演機關人偶；白虎台上則由孩童演出歌舞伎舞碼《橋弁慶》。主辦單位稱這個祭典已有約 400 年傳統；舞台是如今屬於飛驒市的古川舊市街，從高山搭火車往北不遠即到。" } },
        { t:"tiny",
          text:{
            en:"Source: Hida city festival publicity release (2018), via value-press.",
            ja:"出典：飛騨市の古川祭の広報発表（二〇一八年、value-press）。",
            zh:"資料來源：飛驒市古川祭宣傳新聞稿（2018 年，value-press）。" } }
      ] },
    { t:"section",
      id:"other-gifu",
      title:{ en:"Floats beyond the three", ja:"三つの祭りのほかの屋台", zh:"三大祭之外的花車" },
      jp:"垂井・揖斐",
      body:[
        { t:"p",
          text:{
            en:"UNESCO's list includes only three Gifu festivals, but floats are drawn in many more towns, including several in the Seinō plain around Ōgaki. At Tarui, on the old Nakasendō west of Ōgaki, the Hikiyama festival of 2–4 May draws three floats — Hanrinkaku of the west district, Hōōzan of the east and Shiunkaku of the centre — on which primary-school children perform kabuki, after about two weeks of rehearsals away from school. Local tradition traces the festival to 1353, when villagers are said to have built three flower carts to entertain Emperor Go-Kōgon of the Northern Court, who had taken refuge in Tarui. The floats, lacquered, gilded and carved by master craftsmen and crowned with emblems of the three imperial regalia, are known locally as “moving Yōmeimon”, after the gate at Nikkō, and are a prefectural Important Tangible Folk Cultural Property. Ibi, in the valley to the north-west, also keeps a festival of floats with children's kabuki.",
            ja:"ユネスコの一覧に入った岐阜の祭りは三つだけだが、屋台や山車はもっと多くの町で曳かれ、大垣のまわりの西濃の平野にもいくつかある。大垣の西、旧中山道の垂井では、五月二日から四日の曳やままつりで三台の曳山——西町の攀鱗閣、東町の鳳凰山、中町の紫雲閣——が曳かれ、その上で小学生が歌舞伎を演じる。子どもたちは二週間ほど学校を休んで稽古する。地元の伝えでは、祭りは一三五三年、垂井に難を避けた北朝の後光厳天皇を慰めるため、村人が花車三両をつくって曳いたのに始まるという。漆と金具、名工の彫刻で飾られ、屋根に三種の神器をかたどったしるしをいただく曳山は、日光の門にちなんで「動く陽明門」と呼ばれ、県の重要有形民俗文化財である。北西の谷の揖斐にも、子ども歌舞伎をのせた山車の祭りが伝わる。",
            zh:"聯合國教科文組織名錄只收入岐阜的三個祭典，但花車在更多城鎮巡行，大垣周邊的西濃平原也有好幾處。在大垣以西、舊中山道上的垂井，5 月 2 日至 4 日的曳山祭會拉出三座曳山——西町的攀鱗閣、東町的鳳凰山與中町的紫雲閣——由小學生在上面演出歌舞伎，孩子們要請假約兩週排練。地方傳說此祭始於 1353 年，村民為撫慰避難至垂井的北朝後光嚴天皇，造了三輛花車曳行。這些曳山飾以漆、金具與名匠雕刻，屋頂立有象徵三種神器的飾物，因而被當地人稱為「會動的陽明門」（取自日光的門），並列為岐阜縣重要有形民俗文化財。西北山谷中的揖斐，也保有載著兒童歌舞伎的花車祭典。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture tourism guide (Tarui Hikiyama festival); Gifu Prefectural Library, reading list on Gifu festivals (2023).",
            ja:"出典：岐阜県観光ガイド（垂井曳やままつり）、岐阜県図書館「岐阜の祭り」資料案内（二〇二三年）。",
            zh:"資料來源：岐阜縣觀光指南（垂井曳山祭）；岐阜縣圖書館「岐阜的祭典」資料介紹（2023 年）。" } }
      ] },
    { t:"related",
      items:[
        { href:"culture.html", why:{ en:"Gifu's festivals and folk culture.", ja:"岐阜の祭りと民俗。", zh:"岐阜的祭典與民俗。" } },
        { href:"architecture.html", why:{ en:"Carpenters and carvers of Hida.", ja:"飛騨の大工と彫師。", zh:"飛驒的木匠與雕師。" } },
        { href:"ittobori.html",
          why:{ en:"Another Takayama carving tradition.", ja:"高山のもう一つの彫りの伝統。", zh:"高山另一項雕刻傳統。" } },
        { href:"visiting.html", why:{ en:"When and where to see the floats.", ja:"屋台をいつどこで見るか。", zh:"何時何地看屋台。" } }
      ] }
  ] };

/* ---- -------------------------------------- architecture */
GIFU.pages["architecture"] = { kicker:{ en:"Wood Craft · 11", ja:"木の工芸 · 11", zh:"木作工藝 · 11" },
  title:{ en:"Timber Architecture", ja:"木の建築", zh:"木構建築" },
  jp:"社寺・合掌造り・陣屋",
  lede:{
    en:"Gifu's historic architecture is a catalogue of what Japanese carpenters could do with wood. There are medieval Zen halls and a revolving sutra library designated as National Treasures; a Hida temple that has stood on its site since the eighth century; the steep-roofed farmhouses of Shirakawa-gō, framed in timber and lashed with rope; the only surviving office of a shogunal intendant in Japan; and, running through all of them, the reputation of the Hida carpenters. This page looks at these buildings as works of carpentry — how they were framed, roofed and kept standing.",
    ja:"岐阜の歴史的な建築は、日本の大工が木で何をなしえたかの目録である。国宝に指定された中世の禅宗の堂と回転する経蔵、八世紀からその地に立つ飛騨の寺、木で組み縄で結んだ白川郷の急な屋根の農家、日本にただ一つ残る幕府の代官・郡代の役所、そしてそのすべてを貫く飛騨の匠の評判。この頁は、それらの建物を大工仕事として——どう組まれ、葺かれ、立ちつづけてきたか——見る。",
    zh:"岐阜的歷史建築，是日本木匠以木材所能成就之事的目錄：被指定為國寶的中世禪宗殿堂與旋轉經藏；自八世紀起便立於原址的飛驒寺院；以木構架、繩索綁紮的白川鄉陡頂農舍；日本唯一現存的幕府代官（郡代）役所；以及貫穿這一切的飛驒匠人聲譽。本頁把這些建築當作木作成就來觀看——它們如何架構、如何覆頂、如何屹立至今。" },
  body:[
    { t:"section",
      id:"sacred",
      title:{ en:"Temples and halls", ja:"寺と堂", zh:"寺院與殿堂" },
      jp:"国宝と重要文化財",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Ankokuji sutra hall, Takayama", ja:"安国寺経蔵（高山）", zh:"安國寺經藏（高山）" },
              jp:"国宝",
              def:{
                en:"A small hall of 1408, one bay square but with a pent roof (<em>mokoshi</em>) that makes it look like a two-storey building three bays wide, roofed in bark shingles. Inside stands Japan's oldest surviving octagonal revolving sutra case, a wooden bookcase on a pivot that the faithful turn to gain the merit of reading the whole canon. A National Treasure since 1958.",
                ja:"一四〇八年の小さな堂で、一間四方だが裳階がつくので三間二階建てに見え、屋根は杮葺きである。なかには日本に現存する最古の八角の輪蔵——信者が回すと経典をすべて読んだ功徳が得られる、軸の上の木の書架——が立つ。一九五八年から国宝。",
                zh:"建於 1408 年的小殿，方一間，但因加了裳階（mokoshi）而看似三間兩層，屋頂為木瓦。殿內立著日本現存最古老的八角旋轉經架——一座架在軸上的木製書架，信徒轉動它便可得到讀誦全部經典的功德。1958 年起為國寶。" } },
            { term:{ en:"Eihōji, Tajimi", ja:"永保寺（多治見）", zh:"永保寺（多治見）" },
              jp:"国宝",
              def:{
                en:"A Zen temple founded in the early fourteenth century beside the Toki River, whose Kannon hall and founder's hall are National Treasures — refined examples of the Zen style, with steeply curved roofs and slender members, set in a celebrated garden.",
                ja:"十四世紀の初めに土岐川のほとりに開かれた禅寺で、観音堂と開山堂は国宝である。急に反った屋根と細い部材をもつ禅宗様の洗練された例で、名高い庭のなかに立つ。",
                zh:"十四世紀初創建於土岐川畔的禪寺，其觀音堂與開山堂皆為國寶——屋頂反曲陡峭、構件纖細，是禪宗樣式的精緻範例，坐落在一座著名庭園中。" } },
            { term:{ en:"Hida Kokubunji, Takayama", ja:"飛騨国分寺（高山）", zh:"飛驒國分寺（高山）" },
              jp:"国分寺",
              def:{
                en:"One of the provincial temples founded by imperial order in the eighth century. Its present main hall dates from the Muromachi period and is an Important Cultural Property; a three-storey pagoda rebuilt in the early nineteenth century rises beside a huge old ginkgo. The temple is one of the components of the Hida carpenters' Japan Heritage story.",
                ja:"八世紀に勅命でつくられた国分寺の一つ。いまの本堂は室町時代のもので重要文化財である。十九世紀の初めに再建された三重塔が、大きな古いイチョウのそばにそびえる。飛騨匠の日本遺産のストーリーの構成要素の一つでもある。",
                zh:"八世紀奉敕令創建的國分寺之一。現存本堂建於室町時代，為重要文化財；一座十九世紀初重建的三重塔，聳立在一株巨大古銀杏旁。此寺也是飛驒匠人日本遺產故事的構成要素之一。" } }
          ] },
        { t:"p",
          text:{
            en:"What distinguishes these buildings is not size — none is large — but the precision of their carpentry and the care with which they have been maintained. Bark-shingle roofs must be renewed every few decades; timbers damaged by weather are replaced piece by piece with matching joints; and at intervals whole buildings are dismantled, repaired and reassembled, a practice that has allowed wooden buildings in Japan to survive for many centuries. Each such repair needs carpenters trained in historic methods and timber of a size and quality that is increasingly rare — one reason Gifu's forests of old hinoki matter beyond the timber market.",
            ja:"これらの建物をきわだたせるのは大きさ——大きいものはない——ではなく、その大工仕事の正確さと、維持されてきた手のかけ方である。杮葺きの屋根は数十年ごとに葺き替えねばならず、風雨で傷んだ材は合わせた仕口で一本ずつ取り替えられ、ときおり建物がまるごと解体され、直され、組み直される。その習わしが、日本の木の建物を何世紀も生き延びさせてきた。そうした修理のたびに、昔の方法を身につけた大工と、ますます稀になった大きさと質の材が要る——岐阜の古いヒノキの森が木材の市場を超えて大事である理由の一つである。",
            zh:"這些建築的出眾之處不在規模——沒有一座是大的——而在於木作的精準，以及長久以來維護的用心。木瓦屋頂每隔數十年必須更新；受風雨損壞的木料以相符的接合逐件替換；每隔一段時間，整座建築還會拆解、修復再重組——正是這種做法讓日本木造建築得以存續數百年。每一次這樣的修復，都需要受過傳統工法訓練的木匠，以及尺寸與品質愈來愈稀有的木材——這是岐阜老扁柏林的價值超越木材市場的原因之一。" } }
      ] },
    { t:"section",
      id:"gassho",
      title:{ en:"Gasshō-zukuri", ja:"合掌造り", zh:"合掌造" },
      jp:"白川郷",
      body:[
        { t:"p", text:{ en:"The farmhouses of Shirakawa-gō are the one kind of building on this page that was not wholly the work of professional carpenters: hired carpenters framed the house, and the villagers raised the roof. The roof is a free-standing frame of great rafters, sasu, whose sharpened feet sit in sockets on the beams below, so that it can shift under snow and wind without breaking the house; rafters and purlins are tied with straw rope and seven hundred to a thousand withies of witch hazel, and held down with poles of beech. How the houses were lived in, roofed and kept from fire is told on <a href=\"shirakawago.html\">Shirakawa-gō</a>.", ja:"白川郷の合掌造りは、この頁の建物のなかで唯一、すべてを本職の大工が手がけたのではない建物である。家の軸組は雇われた大工が組み、屋根は村人が上げた。屋根は太い叉首（さす）からなる独立した骨組みで、尖らせた脚元を下の梁の受けに差し込むだけなので、雪や風を受けても家を壊さずにわずかに動ける。叉首と母屋は藁縄と七百から千本のマンサクのネソで結ばれ、ブナの竿で押さえられる。家がどう住まわれ、葺かれ、火から守られてきたかは<a href=\"shirakawago.html\">白川郷</a>で述べる。", zh:"白川鄉的合掌造是本頁所列建築中，唯一並非全由專業木匠完成的：房屋的軸組由受雇的木匠搭建，屋頂則由村民架起。屋頂是由粗大的叉首（sasu）構成的獨立骨架，削尖的腳端只插在下方樑上的承口裡，因此在積雪與風中能微微移動而不致拉壞房屋；叉首與桁以稻草繩及七百到一千根金縷梅枝條綁紮，再以山毛櫸桿壓住。這種房屋如何居住、如何葺頂、如何防火，見<a href=\"shirakawago.html\">白川鄉</a>。" } }
      ] },
    { t:"section",
      id:"townhouses",
      title:{ en:"Townhouses and the intendant's office", ja:"町家と陣屋", zh:"町家與陣屋" },
      jp:"高山",
      body:[
        { t:"defs",
          items:[
            { term:{ en:"Kusakabe house", ja:"日下部家住宅", zh:"日下部家住宅" },
              jp:"一八七九年",
              def:{
                en:"Rebuilt in 1879 after the great Takayama fire of 1875 by the master carpenter Kawajiri Jisuke for a wealthy merchant family. Its interior is famous for the massive, dark-lacquered posts and beams of the double-height earthen-floored hall. An Important Cultural Property since 1966, it now houses a folk-craft museum.",
                ja:"一八七五年の高山の大火のあと、一八七九年に棟梁川尻治助が富裕な商家のために建て直した。なかは、吹き抜けの土間の、黒く塗った太い柱と梁で名高い。一九六六年から重要文化財で、いまは民芸の館（日下部民芸館）となっている。",
                zh:"1875 年高山大火後，棟樑川尻治助於 1879 年為一戶富商重建。其內部以挑高土間中巨大、塗深色漆的柱樑聞名。1966 年起為重要文化財，現為民藝館。" } },
            { term:{ en:"Yoshijima house", ja:"吉島家住宅", zh:"吉島家住宅" },
              jp:"一九〇七〜〇八年",
              def:{
                en:"Next door, the house of a sake-brewing family, rebuilt in 1907–08 by the carpenter Nishida Isaburō, heir to a line of Hida carvers and carpenters. Where Kusakabe is massive, Yoshijima is refined: a lattice of slender beams and posts rises into a light-filled atrium, and the timber surfaces glow with a hand-rubbed finish.",
                ja:"その隣にある酒造家の家で、一九〇七〜〇八年、飛騨の彫師と大工の系譜を継ぐ西田伊三郎が建て直した。日下部が重厚なら、吉島は洗練されている。細い梁と柱の格子が光に満ちた吹き抜けへと昇り、木の面は手で摺りこんだ仕上げで艶を帯びる。",
                zh:"隔壁是一戶釀酒世家的住宅，1907–08 年由繼承飛驒雕師與木匠系譜的西田伊三郎重建。若說日下部厚重，吉島則精緻：細長樑柱交織成格子，升入充滿光線的挑高空間，木材表面經手工擦拭塗裝而散發光澤。" } },
            { term:{ en:"Takayama Jinya", ja:"高山陣屋", zh:"高山陣屋" },
              jp:"郡代役所",
              def:{
                en:"When the shogunate took Hida under direct rule in 1692, it governed the province — and its forests — from an office in Takayama. The Takayama Jinya is described as the only surviving government office of a shogunal intendant in Japan; its buildings, including a large rice storehouse, are a national historic site and show the timber architecture of Edo-period administration.",
                ja:"一六九二年に幕府が飛騨を直轄にすると、高山の役所から国——そしてその森——を治めた。高山陣屋は、日本にただ一つ現存する幕府の郡代役所の建物とされる。大きな御蔵を含む建物は国の史跡で、江戸時代の役所の木の建築を見せる。",
                zh:"1692 年幕府將飛驒收為直轄領後，便從高山的役所治理該國——及其森林。高山陣屋被形容為日本唯一現存的幕府郡代役所建築；其建築群包括一座大型米倉，為國家史跡，展現江戶時代官署的木構建築。" } }
          ] },
        { t:"note",
          label:{ en:"Carpenters who signed their work", ja:"仕事に名を残した大工", zh:"在作品上留名的木匠" },
          text:{
            en:"The Mizuma family of carvers, active over four generations in the Edo period, and the carpenters who trained in their tradition — including Nishida Isaburō — built and decorated much of historic Takayama. Their skill was a local continuation of the ancient reputation of the Hida no takumi, the Hida carpenters sent to the capital for thirteen centuries' worth of legend. See <a href=\"takumi.html\">The Hida Carpenters</a>.",
            ja:"江戸時代に四代にわたって活躍した彫師の水間の一族と、その伝統のなかで修業した大工——西田伊三郎もその一人——が、歴史的な高山の多くを建て、飾った。その技は、千三百年の伝説のもととなった、都に送られた飛騨の匠の古い評判を、地元で受け継いだものだった。<a href=\"takumi.html\">飛騨の匠</a>を参照。",
            zh:"江戶時代歷經四代的雕師水間家族，以及在其傳統中受訓的木匠——包括西田伊三郎——建造並裝飾了高山大部分的歷史建築。他們的技藝，是古代被派往京城、成就一千三百年傳說的「飛驒之匠」聲譽在地方上的延續。見<a href=\"takumi.html\">飛驒之匠</a>。" } }
      ] },
    { t:"section",
      id:"kokubunji",
      title:{ en:"Hida Kokubun-ji: thirteen centuries on one site", ja:"飛騨国分寺：一つの地に千三百年", zh:"飛驒國分寺：同一地點的一千三百年" },
      jp:"本堂と三重塔",
      body:[
        { t:"p",
          text:{
            en:"Hida Kokubun-ji stands a few minutes' walk from Takayama station, on the site of the provincial temple that the state ordered for every province in the eighth century. Temple tradition dates its founding to 746 and credits the monk Gyōki; the first precinct was large and dominated by a seven-storey pagoda. Nothing of that survives above ground. The present main hall was built in the middle of the Muromachi period and is the oldest temple building in Hida, a nationally designated Important Cultural Property that houses a seated image of Yakushi, the healing Buddha. Beside it the three-storey pagoda, rebuilt in 1821, is the only pagoda anywhere in the Hida region, and a ginkgo said to be more than 1,200 years old, a national natural monument, shades the courtyard.",
            ja:"飛騨国分寺は高山駅から歩いて数分、八世紀に国が国ごとに建てさせた国分寺の跡に立つ。寺の伝えでは創建は七四六年、行基によるとされ、はじめの伽藍は広く、七重塔がそびえていた。その姿は地上に何も残っていない。いまの本堂は室町時代の中ごろに建てられた飛騨で最も古い寺院建築で、国の重要文化財であり、薬師如来坐像をまつる。その脇の三重塔は一八二一年の再建で、飛騨地方でただ一つの塔である。樹齢千二百年を超えるといわれる国の天然記念物の大イチョウが、境内に影を落とす。",
            zh:"飛驒國分寺距高山站步行數分鐘，坐落在八世紀國家下令各國興建的國分寺舊址上。據寺方傳說，此寺創建於 746 年，由行基開山；最初的伽藍廣闊，以一座七重塔為中心。那些建築在地面上已蕩然無存。現存本堂建於室町時代中期，是飛驒最古老的寺院建築，為國家指定重要文化財，供奉藥師如來坐像。旁邊的三重塔於 1821 年重建，是整個飛驒地區唯一的塔；一株據說樹齡逾 1,200 年、列為國家天然紀念物的大銀杏為境內遮蔭。" } },
        { t:"p",
          text:{
            en:"The pagoda, a prefectural Important Cultural Property, belongs to the later tradition of Takayama carpentry: the city associates it with the Mizuma family, carvers who for four generations from the mid-Edo period bore the title Mizuma Sagami-no-kami and whose bracket sets and carved details also decorate the festival floats (see <a href=\"floats.html\">Festival Floats</a>). The temple keeps its own carpenters' lore. The main hall enshrines Mokkaku Daimyōjin, the deified form of Kan Shiwa, a legendary craftsman of Hida said to have made a wooden crane that flew; and the ginkgo is said to mark the grave of a master carpenter's daughter who gave her father the idea of setting bracket blocks on top of the pillars. Seen together, the Muromachi hall and the late-Edo pagoda show how Hida's carpenters moved from the austere proportions of medieval temple building to the dense, carved ornament of the merchant age.",
            ja:"県の重要文化財であるこの塔は、高山の大工仕事ののちの流れに属する。市はこれを、江戸時代中期から四代にわたって「水間相模守」を名乗った彫物師の水間家と結びつけている。水間の斗組や彫物は祭屋台も飾っている（<a href=\"floats.html\">祭屋台</a>を参照）。寺には大工の言い伝えも残る。本堂は、空を飛ぶ木の鶴をつくったと伝えられる飛騨の伝説の工人、韓志和を神格化した木鶴大明神をまつる。大イチョウは、柱の上に枡組をのせる工夫を父に教えた棟梁の娘の墓じるしと伝えられる。室町の本堂と江戸後期の塔を並べて見ると、飛騨の大工が中世の寺院建築の簡素な比例から、町人の時代の密な彫物の装飾へと移っていったさまがわかる。",
            zh:"這座塔是岐阜縣重要文化財，屬於高山木作較晚的傳統：高山市將它與雕刻世家水間家相連，該家族自江戶中期起四代承襲「水間相模守」之名，其斗栱與雕飾也裝點著祭典屋台（見<a href=\"floats.html\">祭典屋台</a>）。寺中也流傳著木匠的傳說：本堂供奉木鶴大明神，即傳說中曾造出會飛的木鶴的飛驒工匠韓志和之神格；而那株大銀杏，相傳是一位棟樑之女的墓標——她曾教父親在柱頭上安置斗栱。把室町時代的本堂與江戶後期的塔放在一起看，便能看出飛驒木匠如何從中世寺院建築的簡樸比例，走向町人時代繁密的雕刻裝飾。" } }
      ] },
    { t:"section",
      id:"jinya-wood",
      title:{ en:"The Jinya: a government office roofed in wood", ja:"陣屋：木で葺いた役所", zh:"陣屋：以木葺頂的官署" },
      jp:"高山陣屋",
      body:[
        { t:"p",
          text:{
            en:"The Takayama Jinya was not built as a government office. When the shogunate took Hida under direct rule in 1692 it converted a villa of the departing Kanamori lords; in 1695 storehouses that had been built at Takayama Castle around 1600 were moved here, and in 1777 the office was raised to the rank of a <em>gundai</em>, a senior intendancy. It remained in use as an office long after the shogunate: only in 1969, when the prefecture's local offices moved out, was it decided to preserve it as the only surviving <em>jinya</em> in Japan. It had been a national historic site since 1929, and a restoration completed in 1996 returned it close to its Edo-period appearance. The complex includes the front gate, the gatekeeper's lodge, eight numbered storehouses and a document store.",
            ja:"高山陣屋は役所として建てられたのではない。一六九二年に幕府が飛騨を直轄にしたとき、去りゆく金森家の下屋敷を役所に改めた。一六九五年には、一六〇〇年ごろ高山城に建てられた蔵がここに移され、一七七七年には役所が郡代役所に格上げされた。幕府が終わってからも長く役所として使われ、一九六九年に県の出先機関が移転したのを機に、現存する唯一の陣屋として保存されることになった。一九二九年から国の史跡で、一九九六年に終わった修復で江戸時代の姿に近く戻された。表門、門番所、番号のついた八棟の蔵、書物蔵などからなる。",
            zh:"高山陣屋原本並非為官署而建。1692 年幕府將飛驒收為直轄領時，把即將離去的金森家別邸改作官署；1695 年，約 1600 年建於高山城的倉庫被遷移至此；1777 年官署升格為「郡代役所」。幕府結束後它仍長期作為辦公處所，直到 1969 年縣的派出機關遷出，才決定以日本唯一現存的陣屋之姿保存下來。它自 1929 年起即為國家史跡，1996 年完成的修復使其恢復接近江戶時代的樣貌。建築群包括表門、門番所、編號的八棟倉庫與書物藏。" } },
        { t:"p",
          text:{
            en:"What makes the Jinya a wood building in the fullest sense is its roofs. All of them are of wood, in three techniques suited to Hida's heavy snow: <em>noshi-buki</em>, <em>kokera-buki</em> — thin shingles nailed in many overlapping courses, as on the sutra repository of Ankoku-ji — and <em>ishioki naga-kure-buki</em>, long split boards laid in courses and held down not by nails but by poles and stones. The boards are of the same kind as the split blanks, <em>kureki</em>, that the shogunate had Hida's mountain villages cut by the hundred thousand in the decade after 1697 (see <a href=\"woodhistory.html\">A History of Wood</a>). Stone-weighted board roofs were once common on the houses of Hida; in the Jinya it survives as an official building's roof.",
            ja:"陣屋を十全な意味で木の建物にしているのは屋根である。屋根はすべて木で、飛騨の深い雪に合った三つの葺き方による。熨斗葺、柿葺——安国寺の経蔵のように、薄い板を何層にも重ねて打ちつける——、そして石置長榑葺である。最後のものは、長い割り板を段に並べ、釘ではなく押さえの木と石で押さえる。この板は、幕府が一六九七年からの十年に飛騨の山村に何十万枚も割らせた榑木と同じ類のものである（<a href=\"woodhistory.html\">木の歴史</a>を参照）。石を置いた板葺きの屋根は、かつて飛騨の家々でよく見られた。陣屋では、それが役所の屋根として残っている。",
            zh:"真正讓陣屋成為一座「木的建築」的，是它的屋頂。所有屋頂都是木製，採用三種適合飛驒大雪的工法：熨斗葺；杮葺——像安國寺經藏那樣，以薄木片多層疊釘；以及石置長榑葺——把長條劈板一層層鋪設，不用釘子，而以壓木與石頭壓住。這些木板與幕府在 1697 年後的十年間，令飛驒山村劈製數十萬片的「榑木」屬於同類（見<a href=\"woodhistory.html\">木的歷史</a>）。壓石板葺屋頂曾在飛驒的民家中十分常見；在陣屋，它以官署屋頂的身分留存下來。" } }
      ] },
    { t:"section",
      id:"inventory",
      title:{ en:"Gifu's built heritage in numbers", ja:"数で見る岐阜の建築遺産", zh:"以數字看岐阜的建築遺產" },
      jp:"指定と登録",
      body:[
        { t:"p",
          text:{
            en:"Almost all of Gifu's historic architecture is timber. As of 28 March 2025 the prefecture counted 52 buildings or groups designated nationally as Important Cultural Properties, three of them National Treasures — the sutra repository of Ankoku-ji and the Kannon hall and founder's hall of Eihō-ji in Tajimi — together with 58 buildings designated by the prefecture and 288 registered tangible cultural properties, a lighter category that protects mainly the exterior and allows modern use. Six towns or villages are national Important Preservation Districts for Groups of Traditional Buildings: two districts of Takayama, Ogimachi in Shirakawa, the merchant town of Mino with its firewall gables, the castle town of Iwamura in Ena, and Kitamachi in Gujō Hachiman.",
            ja:"岐阜の歴史的な建築はほとんどが木造である。二〇二五年三月二十八日現在、県内で国の重要文化財に指定された建造物は五十二件で、そのうち三件が国宝——安国寺経蔵と、多治見の永保寺の観音堂と開山堂——である。さらに県指定の建造物が五十八件、登録有形文化財が二百八十八件ある。登録はより緩やかな制度で、主に外観を守り、いまの暮らしでの活用を認める。国の重要伝統的建造物群保存地区は六つ。高山の二地区、白川村荻町、うだつの上がる美濃市美濃町、恵那市の城下町岩村、郡上八幡北町である。",
            zh:"岐阜的歷史建築幾乎全是木造。截至 2025 年 3 月 28 日，縣內被國家指定為重要文化財的建造物共 52 件，其中 3 件為國寶——安國寺經藏，以及多治見永保寺的觀音堂與開山堂；另有縣指定建造物 58 件、登錄有形文化財 288 件。登錄是一種較寬鬆的制度，主要保護外觀，並允許現代使用。國家「重要傳統建造物群保存地區」共有六處：高山的兩個地區、白川村荻町、以「卯建」防火山牆聞名的美濃市美濃町、惠那市的城下町岩村，以及郡上八幡北町。" } },
        { t:"figure",
          caption:{
            en:"Designated and registered cultural-property buildings in Gifu Prefecture, as of 28 March 2025. Source: Gifu Prefecture, list of designated cultural properties.",
            ja:"岐阜県の指定・登録文化財（建造物）。二〇二五年三月二十八日現在。出典：岐阜県「指定文化財一覧」。",
            zh:"岐阜縣指定與登錄之文化財建造物，截至 2025 年 3 月 28 日。資料來源：岐阜縣指定文化財一覽。" },
          svg:function(lang, L){ return GIFU.fig.hbar(lang, L, {
            title:{ en:"Protected buildings in Gifu", ja:"岐阜の保護された建造物", zh:"岐阜受保護的建造物" },
            unit:{ en:"items", ja:"件", zh:"件" }, labelW:260,
            items:[
              { n:{ en:"National Treasures", ja:"国宝", zh:"國寶" }, v:3, f:"#7C6B52" },
              { n:{ en:"Other Important Cultural Properties", ja:"国宝以外の国の重要文化財", zh:"國寶以外的國家重要文化財" }, v:49, f:"#A08F73" },
              { n:{ en:"Prefecturally designated", ja:"県指定", zh:"縣指定" }, v:58, f:"#A08F73" },
              { n:{ en:"Nationally registered tangible", ja:"国の登録有形文化財", zh:"國家登錄有形文化財" }, v:288, f:"#E9E2D2" }
            ] }); } },
        { t:"p",
          text:{
            en:"The numbers explain why repair is a permanent trade in the prefecture rather than an occasional event. Each designated building needs periodic re-roofing, timber replacement and, at long intervals, dismantling and reassembly; the skills involved, from carpentry to bark and shingle roofing, were inscribed by UNESCO in 2020 (see <a href=\"learning.html\">How People Learn It</a>). They also explain the value of the prefecture's large old hinoki, sawara and keyaki, which repair work needs in sizes no plantation thinning can supply.",
            ja:"この数は、県内で修理が時おりの出来事ではなく常の仕事である理由を語る。指定された建物はどれも、定期的な屋根の葺き替え、部材の取り替え、そして長い間隔をおいての解体修理を要する。大工から檜皮葺や杮葺までのその技は、二〇二〇年にユネスコに登録された（<a href=\"learning.html\">人はいかに学ぶか</a>を参照）。この数はまた、県内に残るヒノキ、サワラ、ケヤキの大径木の価値も語る。修理には、人工林の間伐材では得られない寸法の材がいるからである。",
            zh:"這些數字說明了，為何在岐阜縣修繕是一門常設的行業，而非偶發事件。每一座指定建築都需要定期更換屋頂、替換構材，並在相隔很長的年月後解體重組；從木作到檜皮葺、杮葺等相關技藝，已於 2020 年列入聯合國教科文組織名錄（見<a href=\"learning.html\">人們如何學會它</a>）。這些數字也說明了縣內老扁柏、花柏與櫸木大徑材的價值：修繕所需的尺寸，是人工林間伐材無法提供的。" } },
        { t:"tiny",
          text:{
            en:"Sources: Gifu Prefecture tourism guide (Hida Kokubun-ji); Takayama City, list of cultural properties; Takayama Jinya entry (Japanese encyclopaedic summary of the Jinya's history and buildings); Gifu Prefecture Board of Education, counts of designated cultural properties (28 March 2025).",
            ja:"出典：岐阜県観光ガイド（飛騨国分寺）、高山市文化財一覧、高山陣屋の沿革と建物の解説、岐阜県教育委員会「指定文化財件数」（二〇二五年三月二十八日現在）。",
            zh:"資料來源：岐阜縣觀光指南（飛驒國分寺）；高山市文化財一覽；高山陣屋沿革與建築解說；岐阜縣教育委員會指定文化財件數（2025 年 3 月 28 日）。" } }
      ] },
    { t:"related",
      items:[
        { href:"takumi.html", why:{ en:"The Hida carpenters' history.", ja:"飛騨の匠の歴史。", zh:"飛驒匠人的歷史。" } },
        { href:"building.html",
          why:{ en:"Historic and modern buildings in wood.", ja:"木の歴史的な建物と現代の建物。", zh:"木造的歷史與現代建築。" } },
        { href:"joinery.html", why:{ en:"How the frames are joined.", ja:"軸組はどう組まれるか。", zh:"骨架如何接合。" } },
        { href:"satoyama.html",
          why:{ en:"The grass and woods that supplied the roofs.", ja:"屋根を支えた草と林。", zh:"供應屋頂的草地與林地。" } }
      ] }
  ] };
