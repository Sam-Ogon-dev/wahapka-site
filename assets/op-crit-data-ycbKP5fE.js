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
<rect x="132" y="60" width="22" height="22" rx="4" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<text x="143" y="76" font-size="14" text-anchor="middle" fill="var(--dg-accent, #f97316)" font-weight="bold">1</text>
<rect x="222" y="150" width="22" height="22" rx="4" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<text x="233" y="166" font-size="14" text-anchor="middle" fill="var(--dg-accent, #f97316)" font-weight="bold">2</text>
<rect x="312" y="232" width="22" height="22" rx="4" fill="var(--dg-bg, #f8fafc)" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
<text x="323" y="248" font-size="14" text-anchor="middle" fill="var(--dg-accent, #f97316)" font-weight="bold">1</text>
<circle cx="178" cy="200" r="11" fill="var(--dg-friendly, #2563eb)"/>
<text x="178" y="205" font-size="13" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">A</text>
<text x="40" y="236" font-size="13" text-anchor="start" fill="var(--dg-friendly, #2563eb)">раунд 4: «Собрать» (2 → 3),</text>
<text x="40" y="252" font-size="13" text-anchor="start" fill="var(--dg-friendly, #2563eb)">затем «Отправить» → 3 ПО</text>
<text x="400" y="44" font-size="14" text-anchor="start" fill="var(--dg-accent, #f97316)" font-weight="bold">Куб — очки данных маркера</text>
<text x="400" y="63" font-size="13" text-anchor="start" fill="var(--dg-muted, #64748b)">(общие, не «ваши»)</text>
<text x="400" y="91" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">«Собрать данные» (раунды 2–4)</text>
<text x="400" y="110" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  маркеру +1 очко данных,</text>
<text x="400" y="129" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  не больше 1 за раунд</text>
<text x="400" y="148" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">«Отправить данные» (раунд 4)</text>
<text x="400" y="167" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  снять все очки → столько ПО</text>
<text x="400" y="195" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)" font-weight="bold">Конец 2-го и 3-го раундов:</text>
<text x="400" y="214" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  больше «Собрать», чем</text>
<text x="400" y="233" font-size="14" text-anchor="start" fill="var(--dg-text, #0f172a)">  у противника → 1 ПО</text>
</svg>
`;export{e as default};