var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" font-family="inherit">
  <rect x="0" y="0" width="600" height="300" rx="12" fill="var(--dg-bg, #f8fafc)"/>
  <line x1="300" y1="16" x2="300" y2="284" stroke="var(--dg-muted, #64748b)" stroke-width="1" stroke-dasharray="4 4"/>

  <!-- Левая панель: Скрытность -->
  <text x="150" y="32" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-text, #0f172a)">Приказ «Скрытность»</text>
  <!-- стрелок -->
  <circle cx="60" cy="210" r="16" fill="var(--dg-enemy, #dc2626)"/>
  <text x="60" y="215" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-bg, #f8fafc)">A</text>
  <!-- лёгкий террейн -->
  <rect x="190" y="70" width="14" height="90" rx="3" fill="var(--dg-terrain, #94a3b8)"/>
  <!-- цель -->
  <circle cx="232" cy="115" r="16" fill="var(--dg-friendly, #2563eb)"/>
  <text x="232" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-bg, #f8fafc)">B</text>
  <circle cx="232" cy="115" r="42" fill="none" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <!-- жетон приказа -->
  <rect x="252" y="138" width="22" height="22" rx="4" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-friendly, #2563eb)" stroke-width="2"/>
  <text x="263" y="154" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-friendly, #2563eb)">С</text>
  <!-- линия прицеливания перечёркнута -->
  <line x1="74" y1="202" x2="216" y2="122" stroke="var(--dg-line, #0f172a)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <g stroke="var(--dg-enemy, #dc2626)" stroke-width="4" stroke-linecap="round">
    <line x1="130" y1="155" x2="152" y2="177"/>
    <line x1="152" y1="155" x2="130" y2="177"/>
  </g>
  <text x="150" y="252" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-enemy, #dc2626)">B — недопустимая цель</text>
  <text x="150" y="272" text-anchor="middle" font-size="13" fill="var(--dg-muted, #64748b)">в укрытии, даже если виден</text>

  <!-- Правая панель: Бой -->
  <text x="450" y="32" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-text, #0f172a)">Приказ «Бой»</text>
  <circle cx="360" cy="210" r="16" fill="var(--dg-enemy, #dc2626)"/>
  <text x="360" y="215" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-bg, #f8fafc)">A</text>
  <rect x="490" y="70" width="14" height="90" rx="3" fill="var(--dg-terrain, #94a3b8)"/>
  <circle cx="532" cy="115" r="16" fill="var(--dg-friendly, #2563eb)"/>
  <text x="532" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-bg, #f8fafc)">B</text>
  <circle cx="532" cy="115" r="42" fill="none" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="552" y="138" width="22" height="22" rx="4" fill="var(--dg-friendly, #2563eb)"/>
  <text x="563" y="154" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-bg, #f8fafc)">Б</text>
  <line x1="374" y1="202" x2="516" y2="122" stroke="var(--dg-line, #0f172a)" stroke-width="1.5"/>
  <text x="450" y="252" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-friendly, #2563eb)">B — допустимая цель</text>
  <text x="450" y="272" text-anchor="middle" font-size="13" fill="var(--dg-muted, #64748b)">но получает спасбросок укрытия</text>

  <text x="232" y="56" text-anchor="middle" font-size="12" fill="var(--dg-muted, #64748b)">зона контроля 1"</text>
  <text x="532" y="56" text-anchor="middle" font-size="12" fill="var(--dg-muted, #64748b)">зона контроля 1"</text>
</svg>
`;export{e as default};