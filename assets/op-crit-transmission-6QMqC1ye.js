var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" font-family="inherit">
<rect x="0" y="0" width="640" height="360" rx="12" fill="var(--dg-bg, #f8fafc)"/>
<rect x="20" y="20" width="360" height="160" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.07"/>
<rect x="20" y="180" width="360" height="160" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.07"/>
<rect x="20" y="20" width="360" height="320" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
<line x1="20" y1="180" x2="380" y2="180" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="26" y="38" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">территория противника (B)</text>
<text x="26" y="332" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">ваша территория (A)</text>
<g><circle cx="110" cy="95" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="110" cy="95" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="110" y="129" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">маркер противника</text>
<g><circle cx="200" cy="180" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="200" cy="180" r="5" fill="var(--dg-line, #0f172a)"/></g>
<g><circle cx="290" cy="265" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="290" cy="265" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="290" y="299" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">ваш маркер</text>
<path d="M215.6,159.2 A26,26 0 0 1 215.6,200.8" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<path d="M184.4,159.2 A26,26 0 0 0 184.4,200.8" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<path d="M219.8,153.6 A33,33 0 0 1 219.8,206.4" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<path d="M180.2,153.6 A33,33 0 0 0 180.2,206.4" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<path d="M305.6,244.2 A26,26 0 0 1 305.6,285.8" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<path d="M274.4,244.2 A26,26 0 0 0 274.4,285.8" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<path d="M309.8,238.6 A33,33 0 0 1 309.8,291.4" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<path d="M270.2,238.6 A33,33 0 0 0 270.2,291.4" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<circle cx="150" cy="75" r="11" fill="var(--dg-enemy, #dc2626)"/>
<text x="150" y="80" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">2</text>
<circle cx="172" cy="205" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="172" y="210" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">2</text>
<circle cx="232" cy="205" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="232" y="210" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">3</text>
<circle cx="200" cy="145" r="11" fill="var(--dg-enemy, #dc2626)"/>
<text x="200" y="150" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">2</text>
<text x="40" y="238" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">центр передаёт (включил B),</text>
<text x="40" y="254" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">контроль: A 5 &gt; B 2 → за A</text>
<circle cx="290" cy="225" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="290" y="230" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">2</text>
<text x="400" y="50" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Конец раунда (со 2-го)</text>
<text x="400" y="78" font-size="13" text-anchor="start" fill="var(--dg-accent, #f97316)">Дуги — маркер передаёт</text>
<text x="400" y="97" font-size="13" text-anchor="start" fill="var(--dg-accent, #f97316)">(до начала след. раунда)</text>
<text x="400" y="116" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">Цифра — ЛОД оперативника</text>
<text x="400" y="144" font-size="14" text-anchor="start" fill="var(--dg-friendly, #2563eb)" font-weight="bold">A контролирует 2 передающих</text>
<text x="400" y="163" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  хотя бы один → 1 ПО</text>
<text x="400" y="182" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  больше, чем у B → +1 ПО</text>
<text x="400" y="201" font-size="14" text-anchor="start" fill="var(--dg-enemy, #dc2626)" font-weight="bold">B: маркер B не передаёт</text>
<text x="400" y="220" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  → 0 ПО</text>
<text x="400" y="248" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">Очки — тому, кто контролирует</text>
<text x="400" y="267" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">маркер, а не тому, кто включил.</text>
</svg>
`;export{e as default};