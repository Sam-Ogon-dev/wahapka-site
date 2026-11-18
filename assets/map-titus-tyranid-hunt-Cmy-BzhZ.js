var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 500" font-family="inherit">
<rect x="0" y="0" width="640" height="500" fill="var(--dg-bg, #f8fafc)"/>
<!-- территории -->
<rect x="20" y="30" width="600" height="220" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.07"/>
<rect x="20" y="250" width="600" height="220" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.08"/>
<rect x="20" y="350" width="220" height="120" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.25"/>
<text x="130.0" y="416.0" font-size="13" text-anchor="middle" fill="var(--dg-friendly, #2563eb)" >зона высадки</text>
<text x="130.0" y="434.0" font-size="13" text-anchor="middle" fill="var(--dg-friendly, #2563eb)" dy="6">игроков</text>
<!-- центральная линия и центр -->
<line x1="20" y1="250" x2="620" y2="250" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="6 4"/>
<circle cx="320" cy="250" r="3" fill="var(--dg-line, #0f172a)"/>
<text x="614.0" y="242.0" font-size="12" text-anchor="end" fill="var(--dg-muted, #64748b)" >центральная линия</text>
<!-- опорный пункт B (сверху слева) -->
<polygon points="184.0,70 260,70 260,230 184.0,230 184.0,166.0 204.0,144.0 204.0,130.0 184.0,110.0" fill="var(--dg-terrain, #94a3b8)" />
<rect x="213.0" y="70" width="47.0" height="45.0" fill="var(--dg-heavy, #475569)" />
<rect x="106.0" y="76.0" width="48.0" height="24.0" fill="var(--dg-terrain, #94a3b8)" />
<rect x="114.0" y="130.0" width="70.0" height="39.0" fill="var(--dg-terrain, #94a3b8)" />
<rect x="106.0" y="186.0" width="70.0" height="38.0" fill="var(--dg-terrain, #94a3b8)" />
<rect x="100" y="70" width="160" height="160" fill="none" stroke="var(--dg-heavy, #475569)" stroke-width="4"/>
<line x1="260" y1="118.0" x2="260" y2="154.0" stroke="var(--dg-bg, #f8fafc)" stroke-width="5" stroke-dasharray="6 4"/>
<text x="222.0" y="196.0" font-size="15" text-anchor="middle" fill="var(--dg-text, #0f172a)" font-weight="bold">B</text>
<text x="130.0" y="94.0" font-size="12" text-anchor="middle" fill="var(--dg-text, #0f172a)" >N</text>
<text x="140.0" y="212.0" font-size="12" text-anchor="middle" fill="var(--dg-text, #0f172a)" >L</text>
<text x="128.0" y="158.0" font-size="12" text-anchor="middle" fill="var(--dg-text, #0f172a)" >I</text>
<!-- большие руины D -->
<polygon points="402.0,94.0 460.0,94.0 480.0,116.0 476.0,130.0 516.0,162.0 402.0,162.0" fill="var(--dg-terrain, #94a3b8)" />
<line x1="402.0" y1="88.0" x2="402.0" y2="162.0" stroke="var(--dg-heavy, #475569)" stroke-width="4" />
<line x1="402.0" y1="162.0" x2="516.0" y2="162.0" stroke="var(--dg-heavy, #475569)" stroke-width="4" />
<line x1="416.0" y1="162.0" x2="458.0" y2="162.0" stroke="var(--dg-bg, #f8fafc)" stroke-width="3" stroke-dasharray="6 4"/>
<text x="420.0" y="142.0" font-size="13" text-anchor="middle" fill="var(--dg-text, #0f172a)" font-weight="bold">D</text>
<!-- тяжёлые обломки G, H; лёгкие J, K -->
<rect x="318.0" y="190.0" width="22.0" height="58.0" fill="var(--dg-heavy, #475569)" />
<text x="329.0" y="224.0" font-size="12" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" >G</text>
<rect x="60.0" y="350.0" width="56.0" height="20.0" fill="var(--dg-heavy, #475569)" />
<text x="88.0" y="365.0" font-size="12" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" >H</text>
<rect x="160.0" y="394.0" width="50.0" height="16.0" fill="var(--dg-terrain, #94a3b8)" />
<text x="185.0" y="407.0" font-size="12" text-anchor="middle" fill="var(--dg-text, #0f172a)" >J</text>
<rect x="540.0" y="290.0" width="16.0" height="42.0" fill="var(--dg-terrain, #94a3b8)" />
<text x="548.0" y="316.0" font-size="12" text-anchor="middle" fill="var(--dg-text, #0f172a)" >K</text>
<!-- опорный пункт A (снизу по центру) -->
<polygon points="240,310 360,310 360,422.0 350.0,422.0 344.0,402.0 328.0,388.0 324.0,370.0 290.0,370.0 274.0,358.0 240,358.0" fill="var(--dg-terrain, #94a3b8)" />
<rect x="308.0" y="434.0" width="48.0" height="32.0" fill="var(--dg-terrain, #94a3b8)" />
<text x="332.0" y="456.0" font-size="12" text-anchor="middle" fill="var(--dg-text, #0f172a)" >M</text>
<rect x="240" y="310" width="120" height="160" fill="none" stroke="var(--dg-heavy, #475569)" stroke-width="4"/>
<line x1="312.0" y1="310" x2="350.0" y2="310" stroke="var(--dg-bg, #f8fafc)" stroke-width="3" stroke-dasharray="6 4"/>
<text x="300.0" y="344.0" font-size="15" text-anchor="middle" fill="var(--dg-text, #0f172a)" font-weight="bold">A</text>
<!-- малые руины E, F -->
<line x1="450.0" y1="272.0" x2="558.0" y2="272.0" stroke="var(--dg-heavy, #475569)" stroke-width="4" />
<line x1="450.0" y1="272.0" x2="450.0" y2="328.0" stroke="var(--dg-heavy, #475569)" stroke-width="4" />
<text x="464.0" y="290.0" font-size="12" text-anchor="middle" fill="var(--dg-text, #0f172a)" >E</text>
<line x1="481.0" y1="358.0" x2="481.0" y2="388.0" stroke="var(--dg-heavy, #475569)" stroke-width="4" />
<line x1="481.0" y1="388.0" x2="574.0" y2="388.0" stroke="var(--dg-heavy, #475569)" stroke-width="4" />
<text x="494.0" y="378.0" font-size="12" text-anchor="middle" fill="var(--dg-text, #0f172a)" >F</text>
<circle cx="170.6" cy="155.0" r="11" fill="var(--dg-accent, #f97316)" stroke="var(--dg-line, #0f172a)" stroke-width="1.5"/>
<text x="170.6" y="160.0" font-size="14" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">1</text>
<circle cx="456.0" cy="126.6" r="11" fill="var(--dg-accent, #f97316)" stroke="var(--dg-line, #0f172a)" stroke-width="1.5"/>
<text x="456.0" y="131.6" font-size="14" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">2</text>
<circle cx="500.0" cy="345.0" r="11" fill="var(--dg-accent, #f97316)" stroke="var(--dg-line, #0f172a)" stroke-width="1.5"/>
<text x="500.0" y="350.0" font-size="14" text-anchor="middle" fill="var(--dg-bg, #f8fafc)" font-weight="bold">3</text>
<!-- контур и края -->
<rect x="20" y="30" width="600" height="440" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="20" y1="30" x2="620" y2="30" stroke="var(--dg-muted, #64748b)" stroke-width="3" />
<line x1="20" y1="470" x2="620" y2="470" stroke="var(--dg-friendly, #2563eb)" stroke-width="3" />
<text x="320" y="20.0" font-size="13" text-anchor="middle" fill="var(--dg-muted, #64748b)" >край киллзоны NPO (30")</text>
<text x="320" y="494.0" font-size="13" text-anchor="middle" fill="var(--dg-friendly, #2563eb)" >край киллзоны игроков · боковые края нейтральные · поле 30" × 22"</text>
</svg>
`;export{e as default};