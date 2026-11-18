var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 478" font-family="inherit">
  <defs>
    <marker id="ka-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-muted, #64748b)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="640" height="478" rx="12" fill="var(--dg-bg, #f8fafc)"/>

  <!-- Киллзона 30"×22" в масштабе 16px = 1": x 80–560, y 50–402. -->

  <!-- Территории: половины поля до центральной линии -->
  <rect x="80" y="50" width="240" height="352" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.1"/>
  <rect x="320" y="50" width="240" height="352" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.1"/>

  <!-- Зоны высадки: полосы 4" у краёв игроков, внутри своих территорий -->
  <rect x="80" y="50" width="64" height="352" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.3"/>
  <rect x="496" y="50" width="64" height="352" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.3"/>

  <rect x="80" y="50" width="480" height="352" fill="none" stroke="var(--dg-muted, #64748b)" stroke-width="1.5"/>

  <!-- Края игроков: двойная линия цвета игрока -->
  <line x1="70" y1="50" x2="70" y2="402" stroke="var(--dg-friendly, #2563eb)" stroke-width="2.5"/>
  <line x1="75" y1="50" x2="75" y2="402" stroke="var(--dg-friendly, #2563eb)" stroke-width="2.5"/>
  <line x1="565" y1="50" x2="565" y2="402" stroke="var(--dg-enemy, #dc2626)" stroke-width="2.5"/>
  <line x1="570" y1="50" x2="570" y2="402" stroke="var(--dg-enemy, #dc2626)" stroke-width="2.5"/>

  <!-- Нейтральные края: точечная линия -->
  <line x1="80" y1="42" x2="560" y2="42" stroke="var(--dg-muted, #64748b)" stroke-width="3" stroke-linecap="round" stroke-dasharray="0.1 9"/>
  <line x1="80" y1="410" x2="560" y2="410" stroke="var(--dg-muted, #64748b)" stroke-width="3" stroke-linecap="round" stroke-dasharray="0.1 9"/>

  <!-- Центральная линия и центр киллзоны -->
  <line x1="320" y1="50" x2="320" y2="402" stroke="var(--dg-line, #0f172a)" stroke-width="1.5" stroke-dasharray="7 5"/>
  <circle cx="320" cy="226" r="10" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
  <circle cx="320" cy="226" r="3.5" fill="var(--dg-accent, #f97316)"/>

  <!-- Подписи областей -->
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <text transform="translate(116 226) rotate(-90)" fill="var(--dg-friendly, #2563eb)">зона высадки A</text>
    <text transform="translate(524 226) rotate(90)" fill="var(--dg-enemy, #dc2626)">зона высадки B</text>
  </g>
  <g font-size="15" text-anchor="middle" fill="var(--dg-text, #0f172a)">
    <text x="232" y="140">территория A</text>
    <text x="408" y="140">территория B</text>
  </g>
  <g font-size="12" fill="var(--dg-text, #0f172a)">
    <text x="328" y="72">центральная линия</text>
    <text x="336" y="250">центр киллзоны</text>
  </g>
  <g font-size="12" text-anchor="middle">
    <text transform="translate(58 226) rotate(-90)" fill="var(--dg-friendly, #2563eb)">край киллзоны игрока A</text>
    <text transform="translate(586 226) rotate(90)" fill="var(--dg-enemy, #dc2626)">край киллзоны игрока B</text>
    <text x="320" y="30" fill="var(--dg-muted, #64748b)">нейтральный край киллзоны</text>
  </g>

  <!-- Размеры -->
  <g stroke="var(--dg-muted, #64748b)" stroke-width="1.5">
    <line x1="80" y1="430" x2="144" y2="430" marker-start="url(#ka-arrow)" marker-end="url(#ka-arrow)"/>
    <line x1="144" y1="430" x2="320" y2="430" marker-start="url(#ka-arrow)" marker-end="url(#ka-arrow)"/>
    <line x1="496" y1="430" x2="560" y2="430" marker-start="url(#ka-arrow)" marker-end="url(#ka-arrow)"/>
    <line x1="80" y1="458" x2="560" y2="458" marker-start="url(#ka-arrow)" marker-end="url(#ka-arrow)"/>
    <line x1="26" y1="50" x2="26" y2="402" marker-start="url(#ka-arrow)" marker-end="url(#ka-arrow)"/>
  </g>
  <g font-size="13" font-weight="bold" text-anchor="middle" fill="var(--dg-text, #0f172a)">
    <text x="112" y="425">4"</text>
    <text x="232" y="425">11"</text>
    <text x="528" y="425">4"</text>
    <text x="320" y="453">30"</text>
    <text transform="translate(20 226) rotate(-90)">22"</text>
  </g>
</svg>
`;export{e as default};