var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" font-family="inherit">
<rect x="0" y="0" width="640" height="360" rx="12" fill="var(--dg-bg, #f8fafc)"/>
<rect x="20" y="20" width="360" height="160" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.07"/>
<rect x="20" y="180" width="360" height="160" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.07"/>
<rect x="20" y="20" width="360" height="320" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
<line x1="20" y1="180" x2="380" y2="180" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="26" y="38" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">территория противника (B)</text>
<text x="26" y="332" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">ваша территория (A)</text>
<g><circle cx="110" cy="95" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-accent, #f97316)" stroke-width="4"/><circle cx="110" cy="95" r="5" fill="var(--dg-accent, #f97316)"/></g>
<text x="110" y="67" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">маркер B — можно скачать</text>
<g opacity="0.45"><circle cx="200" cy="180" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="200" cy="180" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="200" y="154" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">центр — уже скачан</text>
<path d="M188,168 L212,192 M188,192 L212,168" stroke="var(--dg-enemy, #dc2626)" stroke-width="3"/>
<g><circle cx="290" cy="265" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="290" cy="265" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="290" y="303" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">ваш маркер — скачать нельзя</text>
<circle cx="138" cy="118" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="138" y="123" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<text x="152" y="124" font-size="13" text-anchor="start" fill="var(--dg-friendly, #2563eb)">«Скачать данные»</text>
<circle cx="318" cy="262" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="318" y="267" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<text x="400" y="44" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">«Скачать данные» (1 ОД)</text>
<text x="400" y="63" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">только центр или маркер</text>
<text x="400" y="82" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">противника; каждый маркер —</text>
<text x="400" y="101" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">1 раз за битву (кем угодно)</text>
<text x="400" y="129" font-size="14" text-anchor="start" fill="var(--dg-muted, #64748b)">  раунды 1–2 — нельзя</text>
<text x="400" y="148" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  раунд 3 — сразу 1 ПО</text>
<text x="400" y="167" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  раунд 4 — сразу 2 ПО</text>
<text x="400" y="195" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Конец раунда (со 2-го):</text>
<text x="400" y="214" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  больше маркеров → 1 ПО</text>
<text x="400" y="233" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">  скачанные не считаются</text>
</svg>
`;export{e as default};