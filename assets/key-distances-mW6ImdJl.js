var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320" font-family="inherit">
  <defs>
    <marker id="kd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-accent, #f97316)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="600" height="320" rx="12" fill="var(--dg-bg, #f8fafc)"/>

  <!-- Зона 2" от края базы A (масштаб 40px = 1") -->
  <circle cx="200" cy="160" r="105" fill="var(--dg-accent, #f97316)" fill-opacity="0.08" stroke="var(--dg-accent, #f97316)" stroke-width="2" stroke-dasharray="6 4"/>

  <!-- Маркер цели (40мм) в пределах -->
  <circle cx="75" cy="150" r="31" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
  <circle cx="75" cy="150" r="10" fill="var(--dg-line, #0f172a)"/>
  <text x="75" y="108" text-anchor="middle" font-size="13" fill="var(--dg-text, #0f172a)">маркер</text>

  <!-- A -->
  <circle cx="200" cy="160" r="25" fill="var(--dg-friendly, #2563eb)"/>
  <text x="200" y="166" text-anchor="middle" font-size="16" font-weight="bold" fill="var(--dg-bg, #f8fafc)">A</text>

  <!-- размер 2" от края базы -->
  <line x1="227" y1="160" x2="303" y2="160" stroke="var(--dg-accent, #f97316)" stroke-width="2" marker-start="url(#kd-arrow)" marker-end="url(#kd-arrow)"/>
  <text x="265" y="152" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-accent, #f97316)">2"</text>

  <!-- C целиком в пределах -->
  <circle cx="240" cy="100" r="20" fill="var(--dg-friendly, #2563eb)"/>
  <text x="240" y="106" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-bg, #f8fafc)">C</text>

  <!-- B частично -->
  <circle cx="120" cy="243" r="20" fill="var(--dg-enemy, #dc2626)"/>
  <text x="120" y="249" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-bg, #f8fafc)">B</text>

  <!-- D снаружи -->
  <circle cx="330" cy="215" r="20" fill="var(--dg-enemy, #dc2626)"/>
  <text x="330" y="221" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-bg, #f8fafc)">D</text>

  <!-- Легенда -->
  <g font-size="14" fill="var(--dg-text, #0f172a)">
    <text x="372" y="60" font-weight="bold">Кто в пределах 2" от A?</text>
    <text x="372" y="92"><tspan font-weight="bold">C</tspan> — целиком в пределах</text>
    <text x="372" y="118"><tspan font-weight="bold">B</tspan> — в пределах (часть базы)</text>
    <text x="372" y="144"><tspan font-weight="bold">маркер</tspan> — в пределах</text>
    <text x="372" y="170"><tspan font-weight="bold">D</tspan> — нет</text>
  </g>
  <g font-size="13" fill="var(--dg-muted, #64748b)">
    <text x="372" y="214">Меряем от ближайших точек</text>
    <text x="372" y="232">баз, миниатюру не считаем.</text>
    <text x="372" y="256">До области киллзоны —</text>
    <text x="372" y="274">только по горизонтали.</text>
  </g>
</svg>
`;export{e as default};