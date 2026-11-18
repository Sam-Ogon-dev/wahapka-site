var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" font-family="inherit">
  <defs>
    <marker id="mi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-accent, #f97316)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="600" height="300" rx="12" fill="var(--dg-bg, #f8fafc)"/>
  <line x1="300" y1="16" x2="300" y2="284" stroke="var(--dg-muted, #64748b)" stroke-width="1" stroke-dasharray="4 4"/>

  <!-- Левая панель: Движение 6" = 2" + 4" (масштаб 30px = 1") -->
  <text x="150" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">Движение 6": 2" + 4"</text>
  <rect x="120" y="40" width="22" height="110" rx="2" fill="var(--dg-heavy, #475569)"/>
  <!-- запрещённая дуга -->
  <path d="M 85 118 Q 105 240 218 150" fill="none" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" stroke-dasharray="3 4"/>
  <text x="150" y="226" text-anchor="middle" font-size="12" fill="var(--dg-muted, #64748b)">по дуге — нельзя</text>
  <!-- отрезки -->
  <line x1="85" y1="118" x2="100" y2="176" stroke="var(--dg-accent, #f97316)" stroke-width="3" marker-end="url(#mi-arrow)"/>
  <line x1="100" y1="176" x2="206" y2="153" stroke="var(--dg-accent, #f97316)" stroke-width="3" marker-end="url(#mi-arrow)"/>
  <circle cx="85" cy="118" r="12" fill="none" stroke="var(--dg-friendly, #2563eb)" stroke-width="2" stroke-dasharray="3 3"/>
  <circle cx="218" cy="150" r="12" fill="var(--dg-friendly, #2563eb)"/>
  <text x="80" y="160" text-anchor="end" font-size="14" font-weight="bold" fill="var(--dg-accent, #f97316)">2"</text>
  <text x="170" y="154" font-size="14" font-weight="bold" fill="var(--dg-accent, #f97316)">4"</text>
  <text x="150" y="262" text-anchor="middle" font-size="13" fill="var(--dg-text, #0f172a)">Итого 6" — всё Движение</text>

  <!-- Правая панель: округление отрезков -->
  <text x="450" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">Округление вверх</text>
  <rect x="420" y="40" width="22" height="110" rx="2" fill="var(--dg-heavy, #475569)"/>
  <line x1="400" y1="160" x2="400" y2="175" stroke="var(--dg-accent, #f97316)" stroke-width="3" marker-end="url(#mi-arrow)"/>
  <line x1="400" y1="175" x2="468" y2="160.5" stroke="var(--dg-accent, #f97316)" stroke-width="3" marker-end="url(#mi-arrow)"/>
  <circle cx="400" cy="160" r="12" fill="none" stroke="var(--dg-friendly, #2563eb)" stroke-width="2" stroke-dasharray="3 3"/>
  <circle cx="480" cy="158" r="12" fill="var(--dg-friendly, #2563eb)"/>
  <text x="384" y="196" text-anchor="end" font-size="13" font-weight="bold" fill="var(--dg-accent, #f97316)">0,5" → 1"</text>
  <text x="446" y="196" font-size="13" font-weight="bold" fill="var(--dg-accent, #f97316)">2,75" → 3"</text>
  <text x="450" y="238" text-anchor="middle" font-size="13" fill="var(--dg-text, #0f172a)">Пройдено 3,25", засчитано 4"</text>
  <text x="450" y="262" text-anchor="middle" font-size="13" fill="var(--dg-muted, #64748b)">каждый отрезок округляется отдельно</text>
</svg>
`;export{e as default};