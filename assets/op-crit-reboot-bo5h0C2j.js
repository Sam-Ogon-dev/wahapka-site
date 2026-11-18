var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" font-family="inherit">
<rect x="0" y="0" width="640" height="360" rx="12" fill="var(--dg-bg, #f8fafc)"/>
<rect x="20" y="20" width="360" height="160" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.07"/>
<rect x="20" y="180" width="360" height="160" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.07"/>
<rect x="20" y="20" width="360" height="320" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
<line x1="20" y1="180" x2="380" y2="180" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="26" y="38" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">территория противника (B)</text>
<text x="26" y="332" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">ваша территория (A)</text>
<g><circle cx="110" cy="95" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="110" cy="95" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="110" y="129" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">3 — маркер B</text>
<g opacity="0.45"><circle cx="200" cy="180" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="200" cy="180" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="200" y="154" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">2 — центр: отключён</text>
<g><circle cx="290" cy="265" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="290" cy="265" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="290" y="299" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">1 — ваш маркер</text>
<circle cx="172" cy="196" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="172" y="201" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<text x="40" y="236" font-size="13" text-anchor="start" fill="var(--dg-friendly, #2563eb)">«Перезагрузить» (2 ОД) —</text>
<text x="40" y="252" font-size="13" text-anchor="start" fill="var(--dg-friendly, #2563eb)">центр снова работает</text>
<circle cx="318" cy="262" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="318" y="267" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<circle cx="80" cy="75" r="11" fill="var(--dg-enemy, #dc2626)"/>
<text x="80" y="80" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">B</text>
<text x="400" y="44" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Начало шага гамбитов:</text>
<text x="400" y="63" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">оба тайно зажимают в руке</text>
<text x="400" y="82" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">1, 2 или 3 куба</text>
<text x="400" y="110" font-size="14" text-anchor="start" fill="var(--dg-friendly, #2563eb)" font-weight="bold">A → 1, B → 3</text>
<text x="400" y="129" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  разные: отключён тот, что</text>
<text x="400" y="148" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  никто не выбрал — 2 (центр)</text>
<text x="400" y="167" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">A → 2, B → 2</text>
<text x="400" y="186" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  совпали: отключён 2</text>
<text x="400" y="214" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Конец раунда (со 2-го):</text>
<text x="400" y="233" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  1 ПО за каждый маркер</text>
<text x="400" y="252" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  под контролем, кроме</text>
<text x="400" y="271" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  отключённых</text>
</svg>
`;export{e as default};