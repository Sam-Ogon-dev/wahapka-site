var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" font-family="inherit">
  <defs>
    <marker id="faf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line, #0f172a)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="600" height="340" rx="12" fill="var(--dg-bg, #f8fafc)"/>

  <text x="20" y="24" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">Активация готового оперативника</text>
  <text x="270" y="24" font-size="13" fill="var(--dg-muted, #64748b)">(первым — игрок с инициативой)</text>

  <!-- 1 -->
  <rect x="20" y="38" width="170" height="84" rx="8" fill="none" stroke="var(--dg-friendly, #2563eb)" stroke-width="2.5"/>
  <text x="34" y="62" font-size="14" font-weight="bold" fill="var(--dg-friendly, #2563eb)">1. Приказ</text>
  <text x="34" y="84" font-size="13" fill="var(--dg-text, #0f172a)">«Бой» или</text>
  <text x="34" y="101" font-size="13" fill="var(--dg-text, #0f172a)">«Скрытность» —</text>
  <text x="34" y="117" font-size="13" fill="var(--dg-muted, #64748b)">до след. активации</text>

  <!-- 2 -->
  <rect x="214" y="38" width="180" height="84" rx="8" fill="none" stroke="var(--dg-friendly, #2563eb)" stroke-width="2.5"/>
  <text x="228" y="62" font-size="14" font-weight="bold" fill="var(--dg-friendly, #2563eb)">2. Действия</text>
  <text x="228" y="84" font-size="13" fill="var(--dg-text, #0f172a)">сумма ОД ≤ ЛОД,</text>
  <text x="228" y="101" font-size="13" fill="var(--dg-text, #0f172a)">каждое — не больше</text>
  <text x="228" y="117" font-size="13" fill="var(--dg-text, #0f172a)">одного раза</text>

  <!-- 3 -->
  <rect x="418" y="38" width="162" height="84" rx="8" fill="none" stroke="var(--dg-friendly, #2563eb)" stroke-width="2.5"/>
  <text x="432" y="62" font-size="14" font-weight="bold" fill="var(--dg-friendly, #2563eb)">3. Истрачен</text>
  <text x="432" y="84" font-size="13" fill="var(--dg-text, #0f172a)">жетон приказа —</text>
  <text x="432" y="101" font-size="13" fill="var(--dg-text, #0f172a)">тёмной стороной</text>
  <text x="432" y="117" font-size="13" fill="var(--dg-text, #0f172a)">вверх</text>

  <line x1="190" y1="80" x2="212" y2="80" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#faf-arrow)"/>
  <line x1="394" y1="80" x2="416" y2="80" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#faf-arrow)"/>

  <!-- Решение -->
  <polygon points="499,158 579,190 499,222 419,190" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2.5"/>
  <text x="499" y="186" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-text, #0f172a)">Все</text>
  <text x="499" y="202" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-text, #0f172a)">истрачены?</text>
  <line x1="499" y1="122" x2="499" y2="156" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#faf-arrow)"/>

  <!-- Нет → ход соперника -->
  <rect x="214" y="164" width="180" height="52" rx="8" fill="none" stroke="var(--dg-enemy, #dc2626)" stroke-width="2.5"/>
  <text x="304" y="186" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-enemy, #dc2626)">Активирует</text>
  <text x="304" y="204" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-enemy, #dc2626)">соперник</text>
  <line x1="419" y1="190" x2="396" y2="190" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#faf-arrow)"/>
  <text x="400" y="180" font-size="12" fill="var(--dg-muted, #64748b)">нет</text>
  <polyline points="214,190 105,190 105,124" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#faf-arrow)"/>
  <text x="114" y="160" font-size="12" fill="var(--dg-muted, #64748b)">и снова вы</text>

  <!-- Да → конец -->
  <rect x="424" y="262" width="150" height="44" rx="8" fill="var(--dg-accent, #f97316)" fill-opacity="0.15" stroke="var(--dg-accent, #f97316)" stroke-width="2"/>
  <text x="499" y="282" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-text, #0f172a)">Конец фазы</text>
  <text x="499" y="298" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-text, #0f172a)">и раунда</text>
  <line x1="499" y1="222" x2="499" y2="260" stroke="var(--dg-line, #0f172a)" stroke-width="2" marker-end="url(#faf-arrow)"/>
  <text x="507" y="246" font-size="12" fill="var(--dg-muted, #64748b)">да</text>

  <!-- Контрдействие -->
  <rect x="20" y="238" width="380" height="84" rx="8" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="34" y="260" font-size="13" font-weight="bold" fill="var(--dg-accent, #f97316)">Все ваши истрачены, а у соперника есть готовые?</text>
  <text x="34" y="280" font-size="13" fill="var(--dg-text, #0f172a)">Вместо активации — контрдействие: истраченный</text>
  <text x="34" y="297" font-size="13" fill="var(--dg-text, #0f172a)">оперативник с приказом «Бой» бесплатно делает</text>
  <text x="34" y="314" font-size="13" fill="var(--dg-text, #0f172a)">действие за 1 ОД (раз за раунд, не дальше 2").</text>
</svg>
`;export{e as default};