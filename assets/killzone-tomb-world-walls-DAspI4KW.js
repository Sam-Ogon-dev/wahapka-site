var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" font-family="inherit">
  <rect x="0" y="0" width="600" height="300" fill="var(--dg-bg, #f8fafc)"/>
  <line x1="300" y1="15" x2="300" y2="285" stroke="var(--dg-muted, #64748b)" stroke-width="1" stroke-dasharray="4 4"/>

  <!-- Левая панель: угол стены даёт укрытие -->
  <text x="150" y="30" text-anchor="middle" font-size="15" fill="var(--dg-text, #0f172a)">Угол стены между A и B</text>
  <path d="M160 45 L160 150 L55 150" fill="none" stroke="var(--dg-heavy, #475569)" stroke-width="12" stroke-linejoin="miter"/>
  <line x1="80" y1="250" x2="215" y2="105" stroke="var(--dg-line, #0f172a)" stroke-width="1.5"/>
  <circle cx="160" cy="150" r="9" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="3"/>
  <circle cx="80" cy="250" r="14" fill="var(--dg-friendly, #2563eb)"/>
  <text x="80" y="255" text-anchor="middle" font-size="14" fill="#ffffff">A</text>
  <circle cx="215" cy="105" r="14" fill="var(--dg-enemy, #dc2626)"/>
  <text x="215" y="110" text-anchor="middle" font-size="14" fill="#ffffff">B</text>
  <text x="176" y="168" font-size="13" fill="var(--dg-accent, #f97316)">угол</text>
  <text x="150" y="280" text-anchor="middle" font-size="14" fill="var(--dg-text, #0f172a)">B в укрытии</text>

  <!-- Правая панель: дистанция в обход стены -->
  <text x="450" y="30" text-anchor="middle" font-size="15" fill="var(--dg-text, #0f172a)">Дистанция — в обход стены</text>
  <line x1="450" y1="85" x2="450" y2="210" stroke="var(--dg-heavy, #475569)" stroke-width="12"/>
  <line x1="398" y1="110" x2="502" y2="110" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="450" y="70" text-anchor="middle" font-size="13" fill="var(--dg-muted, #64748b)">не через стену</text>
  <path d="M390 124 L440 228 L460 228 L510 124" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2.5"/>
  <circle cx="385" cy="110" r="14" fill="var(--dg-friendly, #2563eb)"/>
  <text x="385" y="115" text-anchor="middle" font-size="14" fill="#ffffff">A</text>
  <circle cx="515" cy="110" r="14" fill="var(--dg-enemy, #dc2626)"/>
  <text x="515" y="115" text-anchor="middle" font-size="14" fill="#ffffff">B</text>
  <text x="450" y="252" text-anchor="middle" font-size="13" fill="var(--dg-accent, #f97316)">кратчайший путь вокруг</text>
  <text x="450" y="280" text-anchor="middle" font-size="14" fill="var(--dg-text, #0f172a)">A дальше 3" от B</text>
</svg>
`;export{e as default};