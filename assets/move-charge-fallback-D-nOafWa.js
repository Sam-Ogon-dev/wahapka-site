var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 310" font-family="inherit">
  <defs>
    <marker id="mcf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-accent, #f97316)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="600" height="310" rx="12" fill="var(--dg-bg, #f8fafc)"/>
  <line x1="200" y1="16" x2="200" y2="294" stroke="var(--dg-muted, #64748b)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="400" y1="16" x2="400" y2="294" stroke="var(--dg-muted, #64748b)" stroke-width="1" stroke-dasharray="4 4"/>

  <!-- 1. Перемещение -->
  <text x="100" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">Перемещение</text>
  <circle cx="120" cy="100" r="37" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.08" stroke="var(--dg-enemy, #dc2626)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="120" cy="100" r="12" fill="var(--dg-enemy, #dc2626)"/>
  <!-- запрещено -->
  <line x1="40" y1="230" x2="100" y2="148" stroke="var(--dg-muted, #64748b)" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="104" cy="142" r="12" fill="none" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <g stroke="var(--dg-enemy, #dc2626)" stroke-width="3.5" stroke-linecap="round">
    <line x1="60" y1="176" x2="76" y2="192"/>
    <line x1="76" y1="176" x2="60" y2="192"/>
  </g>
  <!-- разрешено -->
  <line x1="40" y1="230" x2="152" y2="196" stroke="var(--dg-accent, #f97316)" stroke-width="3" marker-end="url(#mcf-arrow)"/>
  <circle cx="40" cy="230" r="12" fill="var(--dg-friendly, #2563eb)"/>
  <circle cx="164" cy="192" r="12" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.6"/>
  <text x="100" y="264" text-anchor="middle" font-size="12" fill="var(--dg-text, #0f172a)">до Движения, не входя</text>
  <text x="100" y="280" text-anchor="middle" font-size="12" fill="var(--dg-text, #0f172a)">в зону контроля врага</text>

  <!-- 2. Натиск -->
  <text x="300" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">Натиск</text>
  <circle cx="320" cy="100" r="37" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.08" stroke="var(--dg-enemy, #dc2626)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="320" cy="100" r="12" fill="var(--dg-enemy, #dc2626)"/>
  <line x1="240" y1="240" x2="298" y2="152" stroke="var(--dg-accent, #f97316)" stroke-width="3" marker-end="url(#mcf-arrow)"/>
  <circle cx="240" cy="240" r="12" fill="var(--dg-friendly, #2563eb)"/>
  <circle cx="305" cy="141" r="12" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.6"/>
  <text x="286" y="206" font-size="13" font-weight="bold" fill="var(--dg-accent, #f97316)">Движение + 2"</text>
  <text x="300" y="264" text-anchor="middle" font-size="12" fill="var(--dg-text, #0f172a)">обязан закончить в зоне</text>
  <text x="300" y="280" text-anchor="middle" font-size="12" fill="var(--dg-text, #0f172a)">контроля врага</text>

  <!-- 3. Отступление -->
  <text x="500" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">Отступление (2 ОД)</text>
  <circle cx="500" cy="96" r="37" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.08" stroke="var(--dg-enemy, #dc2626)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="500" cy="96" r="12" fill="var(--dg-enemy, #dc2626)"/>
  <circle cx="560" cy="200" r="37" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.08" stroke="var(--dg-enemy, #dc2626)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="560" cy="200" r="12" fill="var(--dg-enemy, #dc2626)"/>
  <polyline points="500,142 540,176 452,226" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="3" marker-end="url(#mcf-arrow)"/>
  <circle cx="500" cy="142" r="12" fill="var(--dg-friendly, #2563eb)"/>
  <circle cx="442" cy="232" r="12" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.6"/>
  <text x="500" y="264" text-anchor="middle" font-size="12" fill="var(--dg-text, #0f172a)">сквозь зоны контроля можно,</text>
  <text x="500" y="280" text-anchor="middle" font-size="12" fill="var(--dg-text, #0f172a)">закончить в них — нельзя</text>
</svg>
`;export{e as default};