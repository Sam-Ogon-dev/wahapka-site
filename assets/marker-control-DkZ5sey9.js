var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320" font-family="inherit">
  <rect x="0" y="0" width="600" height="320" rx="12" fill="var(--dg-bg, #f8fafc)"/>

  <!-- Маркер цели 40мм и граница 1" от него (масштаб 40px = 1") -->
  <circle cx="260" cy="160" r="71" fill="var(--dg-accent, #f97316)" fill-opacity="0.08" stroke="var(--dg-accent, #f97316)" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="260" cy="160" r="31" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/>
  <circle cx="260" cy="160" r="9" fill="var(--dg-line, #0f172a)"/>

  <!-- Стена между маркером и E2 -->
  <rect x="297" y="152" width="10" height="70" fill="var(--dg-heavy, #475569)" transform="rotate(32.7 302 187)"/>

  <!-- Дружественные -->
  <circle cx="180" cy="140" r="16" fill="var(--dg-friendly, #2563eb)"/>
  <text x="180" y="145" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-bg, #f8fafc)">2</text>
  <circle cx="270" cy="242" r="16" fill="var(--dg-friendly, #2563eb)"/>
  <text x="270" y="247" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-bg, #f8fafc)">2</text>

  <!-- Вражеские -->
  <circle cx="325" cy="112" r="16" fill="var(--dg-enemy, #dc2626)"/>
  <text x="325" y="117" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-bg, #f8fafc)">3</text>
  <circle cx="330" cy="205" r="16" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.45"/>
  <text x="330" y="210" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-bg, #f8fafc)">2</text>
  <text x="346" y="246" font-size="12" fill="var(--dg-muted, #64748b)">не видит маркер</text>

  <!-- Дальний враг -->
  <circle cx="110" cy="260" r="16" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.45"/>
  <text x="110" y="265" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-bg, #f8fafc)">2</text>
  <text x="110" y="295" text-anchor="middle" font-size="12" fill="var(--dg-muted, #64748b)">дальше 1"</text>

  <text x="260" y="40" text-anchor="middle" font-size="13" fill="var(--dg-accent, #f97316)">1" от края маркера</text>

  <!-- Итог -->
  <g font-size="14" fill="var(--dg-text, #0f172a)">
    <text x="420" y="70" font-weight="bold">Кто оспаривает?</text>
    <text x="420" y="98">Цифра — ЛОД</text>
    <text x="420" y="132" fill="var(--dg-friendly, #2563eb)" font-weight="bold">Синие: 2 + 2 = 4</text>
    <text x="420" y="158" fill="var(--dg-enemy, #dc2626)" font-weight="bold">Красные: 3</text>
    <text x="420" y="192">4 &gt; 3 — маркер</text>
    <text x="420" y="212">контролируют синие</text>
  </g>
  <g font-size="12" fill="var(--dg-muted, #64748b)">
    <text x="420" y="270">Поровну — не контролирует</text>
    <text x="420" y="286">никто.</text>
  </g>
</svg>
`;export{e as default};