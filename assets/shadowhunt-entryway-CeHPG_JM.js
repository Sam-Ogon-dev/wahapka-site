var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 320" font-family="inherit">
  <defs>
    <marker id="sh-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-accent, #f97316)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="640" height="320" fill="var(--dg-bg, #f8fafc)"/>
  <rect x="20" y="44" width="270" height="236" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="1.5"/>
  <rect x="350" y="44" width="270" height="236" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="1.5"/>
  <text x="155" y="32" text-anchor="middle" font-size="15" font-weight="600" fill="var(--dg-text, #0f172a)">Верхняя киллзона</text>
  <text x="485" y="32" text-anchor="middle" font-size="15" font-weight="600" fill="var(--dg-text, #0f172a)">Нижняя киллзона</text>

  <!-- Подъём/спуск по маркеру 1 -->
  <circle cx="90" cy="110" r="13" fill="var(--dg-accent, #f97316)"/>
  <text x="90" y="115" text-anchor="middle" font-size="14" font-weight="700" fill="var(--dg-bg, #f8fafc)">1</text>
  <circle cx="126" cy="110" r="36" fill="none" stroke="var(--dg-friendly, #2563eb)" stroke-dasharray="4 3"/>
  <circle cx="126" cy="110" r="14" fill="var(--dg-friendly, #2563eb)"/>
  <text x="126" y="115" text-anchor="middle" font-size="13" font-weight="700" fill="var(--dg-bg, #f8fafc)">A</text>

  <circle cx="420" cy="110" r="13" fill="var(--dg-accent, #f97316)"/>
  <text x="420" y="115" text-anchor="middle" font-size="14" font-weight="700" fill="var(--dg-bg, #f8fafc)">1</text>
  <circle cx="456" cy="110" r="36" fill="none" stroke="var(--dg-friendly, #2563eb)" stroke-dasharray="4 3"/>
  <circle cx="456" cy="110" r="14" fill="var(--dg-friendly, #2563eb)"/>
  <text x="456" y="115" text-anchor="middle" font-size="13" font-weight="700" fill="var(--dg-bg, #f8fafc)">A</text>

  <path d="M150,92 C230,60 330,60 432,92" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2" marker-end="url(#sh-arrow)"/>
  <text x="290" y="66" text-anchor="middle" font-size="13" fill="var(--dg-text, #0f172a)">перелезть = 3" движения</text>

  <!-- Стрельба через маркер 2 -->
  <circle cx="90" cy="210" r="13" fill="var(--dg-accent, #f97316)"/>
  <text x="90" y="215" text-anchor="middle" font-size="14" font-weight="700" fill="var(--dg-bg, #f8fafc)">2</text>
  <circle cx="126" cy="210" r="36" fill="none" stroke="var(--dg-friendly, #2563eb)" stroke-dasharray="4 3"/>
  <circle cx="126" cy="210" r="14" fill="var(--dg-friendly, #2563eb)"/>
  <text x="126" y="215" text-anchor="middle" font-size="13" font-weight="700" fill="var(--dg-bg, #f8fafc)">B</text>

  <circle cx="420" cy="210" r="13" fill="var(--dg-accent, #f97316)"/>
  <text x="420" y="215" text-anchor="middle" font-size="14" font-weight="700" fill="var(--dg-bg, #f8fafc)">2</text>
  <circle cx="456" cy="226" r="36" fill="none" stroke="var(--dg-enemy, #dc2626)" stroke-dasharray="4 3"/>
  <circle cx="456" cy="226" r="14" fill="var(--dg-enemy, #dc2626)"/>

  <line x1="140" y1="212" x2="442" y2="224" stroke="var(--dg-line, #0f172a)" stroke-width="1.2" stroke-dasharray="6 4"/>
  <text x="290" y="196" text-anchor="middle" font-size="13" fill="var(--dg-text, #0f172a)">Стрельба через маркер 2</text>
  <text x="290" y="252" text-anchor="middle" font-size="13" fill="var(--dg-muted, #64748b)">дальность не важна;</text>
  <text x="290" y="268" text-anchor="middle" font-size="13" fill="var(--dg-muted, #64748b)">цель без укрытия и не заслонена</text>
  <text x="320" y="306" text-anchor="middle" font-size="13" fill="var(--dg-muted, #64748b)">Пунктир вокруг базы — зона контроля 1"</text>
</svg>
`;export{e as default};