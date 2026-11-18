var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" font-family="inherit">
  <rect x="0" y="0" width="600" height="360" fill="var(--dg-bg, #f8fafc)"/>
  <!-- killzone -->
  <rect x="60" y="40" width="480" height="280" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
  <!-- territories -->
  <rect x="60" y="40" width="480" height="140" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.07"/>
  <rect x="60" y="180" width="480" height="140" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.07"/>
  <!-- centreline -->
  <line x1="60" y1="180" x2="540" y2="180" stroke="var(--dg-muted, #64748b)" stroke-width="1.5"/>
  <text x="535" y="174" font-size="13" text-anchor="end" fill="var(--dg-muted, #64748b)">центральная линия</text>
  <!-- flank divider -->
  <line x1="300" y1="40" x2="300" y2="320" stroke="var(--dg-accent, #f97316)" stroke-width="2.5" stroke-dasharray="8 6"/>
  <text x="180" y="30" font-size="15" text-anchor="middle" fill="var(--dg-text, #0f172a)">левый фланг</text>
  <text x="420" y="30" font-size="15" text-anchor="middle" fill="var(--dg-text, #0f172a)">правый фланг</text>
  <!-- edges -->
  <text x="300" y="340" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">край киллзоны игрока A (середина — начало линии флангов)</text>
  <text x="66" y="58" font-size="13" fill="var(--dg-muted, #64748b)">территория игрока B</text>
  <text x="66" y="312" font-size="13" fill="var(--dg-muted, #64748b)">территория игрока A</text>
  <!-- A operatives in B territory, left flank -->
  <circle cx="130" cy="100" r="13" fill="var(--dg-friendly, #2563eb)"/>
  <text x="130" y="105" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)">2</text>
  <circle cx="220" cy="130" r="13" fill="var(--dg-friendly, #2563eb)"/>
  <text x="220" y="135" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)">2</text>
  <!-- B operatives in A territory, left flank -->
  <circle cx="170" cy="250" r="13" fill="var(--dg-enemy, #dc2626)"/>
  <text x="170" y="255" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)">3</text>
  <!-- A operative straddling flank line: not wholly within -->
  <circle cx="300" cy="110" r="13" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.45"/>
  <text x="300" y="115" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)">2</text>
  <!-- A operative on centreline: not wholly within B territory -->
  <circle cx="400" cy="180" r="13" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.45"/>
  <text x="400" y="185" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)">3</text>
  <!-- B operative right flank in A territory -->
  <circle cx="470" cy="260" r="13" fill="var(--dg-enemy, #dc2626)"/>
  <text x="470" y="265" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)">2</text>
  <!-- annotations -->
  <text x="100" y="205" font-size="13" fill="var(--dg-text, #0f172a)">левый: A 2+2=4 &gt; B 3 → A</text>
  <text x="330" y="230" font-size="13" fill="var(--dg-text, #0f172a)">правый: A 0 &lt; B 2 → B</text>
  <text x="318" y="96" font-size="13" fill="var(--dg-muted, #64748b)">не целиком во фланге</text>
  <text x="535" y="205" font-size="13" text-anchor="end" fill="var(--dg-muted, #64748b)">на центральной линии — не в счёт</text>
</svg>
`;export{e as default};