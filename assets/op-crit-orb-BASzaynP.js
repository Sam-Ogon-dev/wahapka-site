var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" font-family="inherit">
<rect x="0" y="0" width="640" height="360" rx="12" fill="var(--dg-bg, #f8fafc)"/>
<rect x="20" y="20" width="360" height="160" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.07"/>
<rect x="20" y="180" width="360" height="160" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.07"/>
<rect x="20" y="20" width="360" height="320" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
<line x1="20" y1="180" x2="380" y2="180" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="26" y="38" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">территория противника (B)</text>
<text x="26" y="332" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">ваша территория (A)</text>
<g><circle cx="110" cy="95" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="110" cy="95" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="110" y="67" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">маркер B — со сферой</text>
<g><circle cx="200" cy="180" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="200" cy="180" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="200" y="214" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">центр</text>
<g><circle cx="290" cy="265" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="290" cy="265" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="290" y="303" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">ваш маркер</text>
<circle cx="122" cy="83" r="9" fill="var(--dg-accent, #f97316)" stroke="var(--dg-line, #0f172a)" stroke-width="1.5"/>
<line x1="186" y1="166" x2="126" y2="110" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<path d="M126.0,110.0 L130.6,121.2 L137.5,113.9 z" fill="var(--dg-accent, #f97316)"/>
<path d="M186.0,166.0 L181.4,154.8 L174.5,162.1 z" fill="var(--dg-accent, #f97316)"/>
<line x1="214" y1="194" x2="274" y2="250" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<path d="M274.0,250.0 L269.4,238.8 L262.5,246.1 z" fill="var(--dg-accent, #f97316)"/>
<path d="M214.0,194.0 L218.6,205.2 L225.5,197.9 z" fill="var(--dg-accent, #f97316)"/>
<text x="40" y="175" font-size="13" text-anchor="start" fill="var(--dg-accent, #f97316)">центр ⇄ маркер игрока</text>
<circle cx="78" cy="110" r="11" fill="var(--dg-enemy, #dc2626)"/>
<text x="78" y="115" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">B</text>
<circle cx="165" cy="190" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="165" y="195" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<circle cx="318" cy="262" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="318" y="267" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<text x="400" y="50" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">«Переместить сферу»</text>
<text x="400" y="69" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">с центра — на маркер</text>
<text x="400" y="88" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">любого игрока (на выбор);</text>
<text x="400" y="107" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">с маркера игрока — только</text>
<text x="400" y="126" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">обратно на центр.</text>
<text x="400" y="154" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Конец раунда (со 2-го)</text>
<text x="400" y="173" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">1 ПО за каждый маркер</text>
<text x="400" y="192" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">без сферы под вашим контролем</text>
<text x="400" y="220" font-size="14" text-anchor="start" fill="var(--dg-friendly, #2563eb)" font-weight="bold">A: центр + свой → 2 ПО</text>
<text x="400" y="239" font-size="14" text-anchor="start" fill="var(--dg-enemy, #dc2626)" font-weight="bold">B: маркер B со сферой → 0 ПО</text>
<text x="400" y="267" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">Старт: сфера на центре.</text>
</svg>
`;export{e as default};