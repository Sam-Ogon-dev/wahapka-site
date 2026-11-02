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
<g opacity="0.45"><circle cx="200" cy="180" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="200" cy="180" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="200" y="154" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">центр (пусто — подобран)</text>
<g><circle cx="290" cy="265" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="290" cy="265" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="290" y="299" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">ваш маркер</text>
<circle cx="236" cy="244" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="236" y="249" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<circle cx="250" cy="232" r="9" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="250" cy="232" r="3" fill="var(--dg-line, #0f172a)"/>
<line x1="207" y1="196" x2="230" y2="228" stroke="var(--dg-line, #0f172a)" stroke-width="2" stroke-dasharray="6 4"/>
<path d="M230.0,228.0 L227.6,216.1 L219.5,222.0 z" fill="var(--dg-line, #0f172a)"/>
<text x="74" y="280" font-size="13" text-anchor="start" fill="var(--dg-friendly, #2563eb)">несёт ячейку и уходит</text>
<text x="74" y="296" font-size="13" text-anchor="start" fill="var(--dg-friendly, #2563eb)">в укрытие</text>
<circle cx="135" cy="100" r="11" fill="var(--dg-enemy, #dc2626)"/>
<text x="135" y="105" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">B</text>
<text x="400" y="44" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">«Подобрать маркер»</text>
<text x="400" y="63" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">с маркером цели стоит:</text>
<text x="400" y="82" font-size="14" text-anchor="start" fill="var(--dg-muted, #64748b)">  раунд 1 — нельзя</text>
<text x="400" y="101" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  раунд 2 — 1 + 2 = 3 ОД</text>
<text x="400" y="120" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  раунд 3 — 1 + 1 = 2 ОД</text>
<text x="400" y="139" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  раунд 4 — 1 ОД</text>
<text x="400" y="158" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">(раунды 2–3: без скидок</text>
<text x="400" y="177" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">и не бесплатно)</text>
<text x="400" y="205" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Конец раунда (со 2-го):</text>
<text x="400" y="224" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  больше маркеров → 1 ПО</text>
<text x="400" y="243" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Конец битвы:</text>
<text x="400" y="262" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  +1 ПО за каждую ячейку,</text>
<text x="400" y="281" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  которую несут ваши</text>
</svg>
`;export{e as default};