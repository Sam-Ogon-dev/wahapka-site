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
<text x="200" y="154" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">центр</text>
<g><circle cx="290" cy="265" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="290" cy="265" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="290" y="299" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">ваш маркер</text>
<circle cx="140" cy="110" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="140" y="115" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<text x="156" y="104" font-size="13" text-anchor="start" fill="var(--dg-friendly, #2563eb)">«Разграбить» +1 ПО</text>
<circle cx="222" cy="196" r="11" fill="var(--dg-enemy, #dc2626)"/>
<text x="222" y="201" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">B</text>
<text x="236" y="205" font-size="13" text-anchor="start" fill="var(--dg-enemy, #dc2626)">1-й: +1 ПО</text>
<circle cx="176" cy="200" r="11" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.45"/>
<text x="176" y="205" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<path d="M167,191 L185,209 M167,209 L185,191" stroke="var(--dg-enemy, #dc2626)" stroke-width="3"/>
<text x="30" y="232" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">опоздал: центр уже</text>
<text x="30" y="248" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">разграблен в этом раунде</text>
<circle cx="320" cy="280" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="320" y="285" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<text x="134" y="270" font-size="13" text-anchor="start" fill="var(--dg-friendly, #2563eb)">«Разграбить» +1 ПО</text>
<text x="400" y="50" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Раунд 2 (пример)</text>
<text x="400" y="78" font-size="14" text-anchor="start" fill="var(--dg-friendly, #2563eb)" font-weight="bold">A: ваш маркер + маркер B</text>
<text x="400" y="97" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  2 действия → 2 ПО (лимит)</text>
<text x="400" y="116" font-size="14" text-anchor="start" fill="var(--dg-enemy, #dc2626)" font-weight="bold">B: центр первым</text>
<text x="400" y="135" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  1 действие → 1 ПО</text>
<text x="400" y="163" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">Каждый маркер — не больше</text>
<text x="400" y="182" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">1 раза за раунд на обоих</text>
<text x="400" y="201" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">игроков. В новом раунде</text>
<text x="400" y="220" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">все маркеры снова доступны.</text>
<text x="400" y="248" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">Максимум 2 ПО за раунд.</text>
</svg>
`;export{e as default};