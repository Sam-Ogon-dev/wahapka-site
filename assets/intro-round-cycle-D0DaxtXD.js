var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 330" font-family="inherit">
  <defs>
    <marker id="irc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line, #0f172a)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="600" height="330" rx="12" fill="var(--dg-bg, #f8fafc)"/>

  <!-- Начало раунда -->
  <rect x="20" y="60" width="110" height="54" rx="8" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
  <text x="75" y="84" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">Начало</text>
  <text x="75" y="102" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">раунда</text>

  <!-- Фаза стратегии -->
  <rect x="160" y="26" width="190" height="122" rx="8" fill="none" stroke="var(--dg-friendly, #2563eb)" stroke-width="2.5"/>
  <text x="255" y="50" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-friendly, #2563eb)">Фаза стратегии</text>
  <text x="176" y="78" font-size="13" fill="var(--dg-text, #0f172a)">1. Инициатива</text>
  <text x="176" y="100" font-size="13" fill="var(--dg-text, #0f172a)">2. Готовность: +ОК,</text>
  <text x="192" y="117" font-size="13" fill="var(--dg-text, #0f172a)">оперативники готовы</text>
  <text x="176" y="138" font-size="13" fill="var(--dg-text, #0f172a)">3. Гамбиты</text>

  <!-- Фаза перестрелки -->
  <rect x="380" y="26" width="200" height="122" rx="8" fill="none" stroke="var(--dg-enemy, #dc2626)" stroke-width="2.5"/>
  <text x="480" y="50" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-enemy, #dc2626)">Фаза перестрелки</text>
  <text x="396" y="78" font-size="13" fill="var(--dg-text, #0f172a)">Активации по очереди,</text>
  <text x="396" y="95" font-size="13" fill="var(--dg-text, #0f172a)">начиная с инициативы</text>
  <text x="396" y="117" font-size="13" fill="var(--dg-text, #0f172a)">Контрдействия</text>
  <text x="396" y="138" font-size="13" fill="var(--dg-muted, #64748b)">…пока все не истрачены</text>

  <!-- Конец раунда -->
  <rect x="380" y="190" width="200" height="50" rx="8" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
  <text x="480" y="220" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">Конец раунда</text>

  <!-- Решение -->
  <polygon points="250,183 330,215 250,247 170,215" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2.5"/>
  <text x="250" y="211" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-text, #0f172a)">Битва</text>
  <text x="250" y="227" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-text, #0f172a)">окончена?</text>

  <!-- Итог -->
  <rect x="165" y="276" width="170" height="40" rx="8" fill="var(--dg-accent, #f97316)" fill-opacity="0.15" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
  <text x="250" y="301" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">Подсчёт ПО</text>

  <!-- Стрелки -->
  <line x1="130" y1="87" x2="158" y2="87" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#irc-arrow)"/>
  <line x1="350" y1="87" x2="378" y2="87" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#irc-arrow)"/>
  <line x1="480" y1="148" x2="480" y2="188" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#irc-arrow)"/>
  <line x1="380" y1="215" x2="332" y2="215" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#irc-arrow)"/>
  <polyline points="170,215 75,215 75,116" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#irc-arrow)"/>
  <text x="84" y="170" font-size="13" fill="var(--dg-muted, #64748b)">нет —</text>
  <text x="84" y="186" font-size="13" fill="var(--dg-muted, #64748b)">новый раунд</text>
  <line x1="250" y1="247" x2="250" y2="274" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#irc-arrow)"/>
  <text x="258" y="266" font-size="13" fill="var(--dg-muted, #64748b)">да</text>
  <text x="350" y="300" font-size="13" fill="var(--dg-muted, #64748b)">обычно после 4-го раунда</text>
</svg>
`;export{e as default};