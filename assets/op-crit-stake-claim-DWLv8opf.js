var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" font-family="inherit">
<rect x="0" y="0" width="640" height="360" rx="12" fill="var(--dg-bg, #f8fafc)"/>
<rect x="20" y="20" width="360" height="160" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.07"/>
<rect x="20" y="180" width="360" height="160" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.07"/>
<rect x="20" y="20" width="360" height="320" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
<line x1="20" y1="180" x2="380" y2="180" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="26" y="38" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">территория противника (B)</text>
<text x="26" y="332" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">ваша территория (A)</text>
<circle cx="110" cy="95" r="40" fill="var(--dg-accent, #f97316)" fill-opacity="0.06" stroke="var(--dg-accent, #f97316)" stroke-width="1.5" stroke-dasharray="5 4"/>
<g><circle cx="110" cy="95" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="110" cy="95" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="110" y="152" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">маркер противника</text>
<g><circle cx="200" cy="180" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="200" cy="180" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="200" y="218" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">центр</text>
<g><circle cx="290" cy="265" r="18" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-line, #0f172a)" stroke-width="2.5"/><circle cx="290" cy="265" r="5" fill="var(--dg-line, #0f172a)"/></g>
<text x="290" y="299" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)">ваш маркер</text>
<text x="98" y="168" font-size="13" text-anchor="middle" fill="var(--dg-accent, #f97316)">в 1" — ни одного врага</text>
<circle cx="300" cy="120" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="300" y="125" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<line x1="289" y1="116" x2="160" y2="95" stroke="var(--dg-friendly, #2563eb)" stroke-width="1.2" stroke-dasharray="3 3"/>
<text x="250" y="148" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">держит подходы</text>
<circle cx="52" cy="62" r="11" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.45"/>
<text x="52" y="67" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">B</text>
<path d="M43,53 L61,71 M43,71 L61,53" stroke="var(--dg-enemy, #dc2626)" stroke-width="3"/>
<circle cx="172" cy="190" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="172" y="195" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<circle cx="270" cy="245" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="270" y="250" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<text x="400" y="44" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Каждый маркер — 1 раз</text>
<text x="400" y="63" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">за битву. План игрока A:</text>
<text x="400" y="91" font-size="14" text-anchor="start" fill="var(--dg-friendly, #2563eb)" font-weight="bold">Раунд 2 — ваш маркер:</text>
<text x="400" y="110" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  «будем контролировать»</text>
<text x="400" y="129" font-size="14" text-anchor="start" fill="var(--dg-friendly, #2563eb)" font-weight="bold">Раунд 3 — центр:</text>
<text x="400" y="148" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  «будем контролировать»</text>
<text x="400" y="167" font-size="14" text-anchor="start" fill="var(--dg-friendly, #2563eb)" font-weight="bold">Раунд 4 — маркер противника:</text>
<text x="400" y="186" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  «враг не будет оспаривать»</text>
<text x="400" y="214" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Конец раунда (со 2-го):</text>
<text x="400" y="233" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  заявка сбылась → 1 ПО</text>
<text x="400" y="252" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  больше маркеров → 1 ПО</text>
</svg>
`;export{e as default};