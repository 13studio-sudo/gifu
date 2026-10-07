# The Spirit of Gifu — 岐阜の魂 · 岐阜之魂

A trilingual (English / 日本語 / 繁體中文) book on Gifu Prefecture, Japan:
its mountains, rivers and history, its festivals and old towns; the wood
that four-fifths forest has given it — the forests, the timber trade, Hida
furniture, lacquer and carving, festival floats and the guitars of Kani and
Sakashita; and its blades, paper, clay and sake. A hundred and thirty-seven
pages, two hundred drawn figures, one directory of makers, one chronology, a
glossary of more than five hundred terms, no image files, and no build step
required to read it.

Open `index.html` in a browser, or `bundle.html` for the whole book in one
file. Both work straight from `file://` — no server, no install.

**Edition v0.0.0.3** · built 2026-10-07

This edition merges two 13STUDIO books into one: *The Spirit of Gifu*
v0.0.0.1 and its wood volume, *Land of Wood* v0.0.0.1. Where the two told
the same thing, the fuller telling stays and the other page keeps a short
bridge to it, so nothing is read twice.

v0.0.0.3 fixes the drawn scrollbar: dragging it now moves the page with the
pointer, instead of trailing behind it under the page's smooth scrolling.

---

## The files

    index.html               the only page — hash routing (#sword, #hinoki/wood)
    bundle.html              the whole book in one self-contained file — generated

    assets/css/base.css      the design system
    assets/js/core.js        i18n, block renderer, figure helpers, navigation, search, theme, GIFU.NAV

    data/01-foundations.js    5 pages
    data/02-land.js           6 pages
    data/03-history.js        9 pages
    data/04-culture.js        8 pages
    data/05-wood.js          11 pages
    data/06-forest.js        15 pages
    data/07-timber.js        15 pages
    data/08-craft.js         11 pages
    data/09-sound.js         13 pages
    data/10-living.js         9 pages
    data/11-metal.js          7 pages
    data/12-crafts.js         4 pages
    data/13-sake.js           6 pages
    data/14-journeys.js       6 pages
    data/15-reference.js     12 pages
    data/16-index.js         search, figure and directory indexes — generated

    tools/build.js           regenerates data/16-index.js and bundle.html
    tools/check.js           render, link, language and parity checks
    tools/layoutcheck.js     Playwright overflow check, every page × 3 languages × 2 widths

    README.md  VERSION  LICENSE  package.json  package-lock.json  .gitignore  .nojekyll

`GIFU.NAV` in `assets/js/core.js` is the single source of truth for which
pages exist and in what order.

## How the book runs

The book moves from the place to the people to what they made, and ends on
the road and at the reference shelf.

| Part | Pages |
| --- | --- |
| Foundations | overview, where to start, the spirit in six words, the name “Gifu”, Mino and Hida |
| Land & Water | mountains, plains and rock; rivers and water; sacred peaks; hot springs; living things; heat and snow |
| History | history at a glance; ancient Mino and Hida; the Toki and the Saitō; Nobunaga's Gifu; Sekigahara; the Edo patchwork; taming the three rivers; Meiji to now; people |
| Culture | festivals and floats; cormorant fishing; shrines and temples; Shirakawa-gō; old towns; the Nakasendō and old roads; food; village kabuki |
| The Land of Wood | the land of wood; what people get wrong; a history of wood; the Hida takumi; people of wood; trees and the gods; wood in ritual and daily life; wood in letters; the words of wood; words that do not translate; wood and other materials |
| The Forest | Gifu's forests; the trees; hinoki; sugi; the five trees of Kiso; the broadleaf forests; planting and tending; ecology; satoyama and water; inside the wood; physical properties; chemistry and scent; wood and water; forests and carbon; the forest year |
| Timber | the logging business; felling and extraction; the timber rivers; log markets; sawmilling; drying; grades; engineered wood; building in wood; joinery; the carpenter's tools; the people of the forest; law and policy; putting wood to use; trade and self-sufficiency |
| Wood Craft | Hida furniture; bentwood; the furniture houses; the chair; Hida Shunkei; Ichii ittōbori; Enkū's Buddhas; the masu of Ōgaki; buckets, barrels and boxes; festival floats; temples, townhouses and gasshō |
| Sound | wood and sound; tonewoods; anatomy of a guitar; how a guitar is made; tops and bracing; Takamine; Yairi; the luthiers; Japan's guitar industry; rosewood and the law; Japanese woods and instruments; caring for a guitar; can you hear the wood? |
| Living with Wood | caring for wood; finishes; buying wooden things; wood in the home; forests and the body; learning through wood; wood in Taiwan; beyond Japan; wood as fire |
| Metal & Blades | metal in Gifu; Seki, town of blades; the Mino sword; making a sword; polish, mounts and fittings; the cutlery industry; the kitchen knife |
| Paper, Clay & Cloth | paper, lanterns and umbrellas; Mino ware; dye and cloth; crafts at a glance |
| Sake | the sake of Gifu; rice, water and yeast; brewing in Hida; breweries by region; a directory of Gifu sake; doburoku, masu and cups |
| Journeys | five regions; visiting Gifu; five journeys; five wood journeys; museums and workshops; a directory of makers |
| Reference | industry and economy; wood in numbers; the next twenty years; the next twenty years for wood; where people disagree; how people learn it; the whole chronology; reference tables; questions and answers; glossary; every diagram; sources |

## What the merge did

- One runtime. The design system and renderer are the shared ones of both
  books; from *Land of Wood* come the wood vocabulary (`GIFU.CRAFT`,
  `GIFU.TECH`, `GIFU.SPECIES`), the maker directory blocks, the species and
  technique cross-indexes, and the `GIFU.fig` chart helpers. The
  municipalities carry both books' keys, plus Kiso and Nagoya across the line.
- The twelve-page wood part of *The Spirit of Gifu* and its Forests page gave
  way to the fuller *Land of Wood* chapters; its figure of which wood is used
  for what moved to the opening page of the wood chapters. Mino Washi and
  Lanterns, Umbrellas & Fans became one page, Paper, Lanterns and Umbrellas,
  with the fans, the papermaking figure and the notes carried over.
- *Land of Wood*'s own overview, Where to Start and The Land of Gifu were
  folded in: the overview opens the wood chapters, its five woods, five things
  to hold and ten words moved there, and the land is told once, in Land & Water.
- Things told twice are now told once, with a bridge from the other place:
  the float festivals (Festivals & Floats → Festival Floats), the gasshō house
  (Shirakawa-gō), the playhouses and the cormorant boats (Village Kabuki,
  Cormorant Fishing), Enkū (Enkū's Buddhas), the great trees (Trees and the
  Gods), Seki (Seki, Town of Blades), the Hida carpenters (The Hida Takumi),
  the food of the journeys (Food of Mino & Hida), the people who appear in both
  people pages, and the Ise-felling, forest-tax and other entries that both
  chronologies carried.
- One directory of makers (105 wood makers, cooperatives, mills and builders,
  plus the cutlers, papermakers and potters), one list of museums (the wood
  schools, buildings and playhouses added, the ones already listed left
  out), one chronology, one set of tables, one questions page, one glossary
  (duplicate terms dropped), one sources page.
- Every link that pointed at a page or anchor that moved was re-aimed, and a
  link whose words were the old page title now carries the new one.

## Build and check

    npm install                 # jsdom and playwright, for the checkers only

    node tools/build.js         # regenerate data/16-index.js and bundle.html
    node tools/check.js         # render + links + language + parity
    node tools/layoutcheck.js   # every page × 3 languages × desktop and mobile

All three are clean for this edition: 137 pages, no render or link errors,
no language or parity findings, and 822 page renders with no layout problems.

## Design

The visual design, the page structure and the runtime are those of
[The Book of Sake](https://github.com/13studio-sudo/sake), the sister volume
from 13STUDIO: square corners everywhere, a pale, warm, low-chroma
palette in both themes, hairline rules, no shadows or gradients, a drawn 3px
scrollbar, and figures legible in monochrome.

## Editorial rules

- The three languages are written together. Traditional Chinese uses the
  traditional forms of place names (飛驒, 關, 惠那).
- Numbers carry their year and unit, and the source is named on the page or on
  the Sources page.
- Where sources disagree the disagreement is stated; schematic diagrams say so
  on their face.
- The directories are selections, not rankings. A founding year is the maker's
  own; a dash means none is given.

## Sources

Compiled from public sources — Gifu Prefecture and its municipalities, the
national ministries and agencies, universities, museums and the makers
themselves — consulted in September and October 2026. The Sources page in the
book lists them with links.

## Credits

Written, drawn and built by **13STUDIO** with **Claude**.

© 2026 13STUDIO. All rights reserved.
The text and the figures are the work of 13STUDIO; please ask before reusing
them. Compiled from public sources — see the Sources page in the book itself.
