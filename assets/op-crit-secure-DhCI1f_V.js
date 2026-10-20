var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" font-family="inherit">
<rect x="0" y="0" width="640" height="360" rx="12" fill="var(--dg-bg, #f8fafc)"/>
<rect x="20" y="20" width="360" height="160" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.07"/>
<rect x="20" y="180" width="360" height="160" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.07"/>
<rect x="20" y="20" width="360" height="320" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
<line x1="20" y1="180" x2="380" y2="180" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="26" y="38" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">территория противника (B)</text>
<text x="26" y="332" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">ваша территория (A)</text>
<g><circle cx="110" cy="95" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-enemy, #dc2626)" stroke-width="4"/><circle cx="110" cy="95" r="5" fill="var(--dg-enemy, #dc2626)"/></g>
<text x="110" y="129" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">маркер B: закреплён за B</text>
<g><circle cx="200" cy="180" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-friendly, #2563eb)" stroke-width="4"/><circle cx="200" cy="180" r="5" fill="var(--dg-friendly, #2563eb)"/></g>
<text x="200" y="220" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">центр: закреплён за A</text>
<g><circle cx="290" cy="265" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-friendly, #2563eb)" stroke-width="4"/><circle cx="290" cy="265" r="5" fill="var(--dg-friendly, #2563eb)"/></g>
<text x="290" y="299" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">маркер A: закреплён за A</text>
<circle cx="222" cy="170" r="11" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.45"/>
<text x="222" y="175" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<circle cx="275" cy="138" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="275" y="143" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<line x1="232" y1="164" x2="262" y2="145" stroke="var(--dg-line, #0f172a)" stroke-width="2" stroke-dasharray="6 4"/>
<path d="M262.0,145.0 L250.0,146.7 L255.4,155.1 z" fill="var(--dg-line, #0f172a)"/>
<text x="225" y="106" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">ушёл, но центр</text>
<text x="225" y="122" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">всё равно за A</text>
<circle cx="330" cy="250" r="11" fill="var(--dg-enemy, #dc2626)"/>
<text x="330" y="255" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">B</text>
<text x="150" y="244" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">враг рядом, но не закрепил</text>
<text x="400" y="50" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Конец раунда (со 2-го)</text>
<text x="400" y="78" font-size="13" text-anchor="start" fill="var(--dg-friendly, #2563eb)">Синий контур — закреплён за A</text>
<text x="400" y="97" font-size="13" text-anchor="start" fill="var(--dg-enemy, #dc2626)">Красный контур — закреплён за B</text>
<text x="400" y="125" font-size="14" text-anchor="start" fill="var(--dg-friendly, #2563eb)" font-weight="bold">A: закреплено 2 маркера</text>
<text x="400" y="144" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  хотя бы один → 1 ПО</text>
<text x="400" y="163" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  больше, чем у B → +1 ПО</text>
<text x="400" y="182" font-size="14" text-anchor="start" fill="var(--dg-enemy, #dc2626)" font-weight="bold">B: закреплён 1 маркер</text>
<text x="400" y="201" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  хотя бы один → 1 ПО</text>
<text x="400" y="229" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">Статус меняет только действие</text>
<text x="400" y="248" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">«Закрепить» другой стороны,</text>
<text x="400" y="267" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">а не присутствие у маркера.</text>
</svg>
`;export{e as default};