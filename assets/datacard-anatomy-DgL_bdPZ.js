var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" font-family="inherit">
  <rect x="0" y="0" width="600" height="360" rx="12" fill="var(--dg-bg, #f8fafc)"/>

  <!-- Карта -->
  <rect x="24" y="20" width="552" height="300" rx="8" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>

  <!-- 1. Заголовок -->
  <rect x="24" y="20" width="552" height="52" rx="8" fill="var(--dg-heavy, #475569)"/>
  <text x="40" y="52" font-size="16" font-weight="bold" fill="var(--dg-bg, #f8fafc)">СЕРЖАНТ КАСРКИНОВ</text>

  <!-- 2. Характеристики -->
  <g font-size="12" fill="var(--dg-bg, #f8fafc)" text-anchor="middle">
    <text x="330" y="38">ЛОД</text>
    <text x="390" y="38">ДВИЖ</text>
    <text x="450" y="38">СПАС</text>
    <text x="512" y="38">РАНЫ</text>
  </g>
  <g font-size="16" font-weight="bold" fill="var(--dg-bg, #f8fafc)" text-anchor="middle">
    <text x="330" y="60">3</text>
    <text x="390" y="60">6"</text>
    <text x="450" y="60">4+</text>
    <text x="512" y="60">9</text>
  </g>

  <!-- 3. Таблица оружия -->
  <g font-size="12" font-weight="bold" fill="var(--dg-muted, #64748b)">
    <text x="62" y="94">ОРУЖИЕ</text>
    <text x="282" y="94" text-anchor="middle">АТК</text>
    <text x="318" y="94" text-anchor="middle">ПОП</text>
    <text x="356" y="94" text-anchor="middle">УРН</text>
    <text x="390" y="94">ПРАВИЛА ОРУЖИЯ</text>
  </g>
  <line x1="36" y1="101" x2="564" y2="101" stroke="var(--dg-muted, #64748b)" stroke-width="1"/>

  <!-- значок дальнего боя: прицел -->
  <g stroke="var(--dg-line, #0f172a)" stroke-width="1.5" fill="none">
    <circle cx="46" cy="116" r="5"/>
    <line x1="46" y1="108" x2="46" y2="124"/>
    <line x1="38" y1="116" x2="54" y2="116"/>
    <circle cx="46" cy="140" r="5"/>
    <line x1="46" y1="132" x2="46" y2="148"/>
    <line x1="38" y1="140" x2="54" y2="140"/>
    <circle cx="46" cy="164" r="5"/>
    <line x1="46" y1="156" x2="46" y2="172"/>
    <line x1="38" y1="164" x2="54" y2="164"/>
  </g>
  <!-- значок ближнего боя: клинок -->
  <g stroke="var(--dg-line, #0f172a)" stroke-width="2" fill="none">
    <line x1="40" y1="194" x2="53" y2="181"/>
    <line x1="41" y1="184" x2="47" y2="190"/>
  </g>

  <g font-size="12" fill="var(--dg-text, #0f172a)">
    <text x="62" y="120">Болт-пистолет</text>
    <text x="62" y="144">Плазменный пистолет (стандарт)</text>
    <text x="62" y="168">Плазменный пистолет (перегрузка)</text>
    <text x="62" y="192">Силовое оружие</text>
    <g text-anchor="middle">
      <text x="282" y="120">4</text><text x="318" y="120">3+</text><text x="356" y="120">3/4</text>
      <text x="282" y="144">4</text><text x="318" y="144">3+</text><text x="356" y="144">3/5</text>
      <text x="282" y="168">4</text><text x="318" y="168">3+</text><text x="356" y="168">4/5</text>
      <text x="282" y="192">4</text><text x="318" y="192">3+</text><text x="356" y="192">4/6</text>
    </g>
    <text x="390" y="120">Дальность 8"</text>
    <text x="390" y="144">Дальность 8", Бронебойное 1</text>
    <text x="390" y="168">Дальность 8", Перегрев, …</text>
    <text x="390" y="192">Смертоносное 5+</text>
  </g>

  <!-- 5. Дополнительные правила -->
  <rect x="36" y="208" width="528" height="54" rx="6" fill="none" stroke="var(--dg-muted, #64748b)" stroke-dasharray="4 3"/>
  <text x="48" y="230" font-size="13" font-weight="bold" fill="var(--dg-text, #0f172a)">Способности и уникальные действия</text>
  <text x="48" y="250" font-size="12" fill="var(--dg-muted, #64748b)">особые правила оперативника, действия вида «НАЗВАНИЕ — 1 ОД»</text>

  <!-- 6. Ключевые слова, 7. База -->
  <rect x="24" y="276" width="552" height="44" fill="var(--dg-terrain, #94a3b8)" fill-opacity="0.35"/>
  <text x="40" y="303" font-size="13" font-weight="bold" fill="var(--dg-text, #0f172a)">KASRKIN, IMPERIUM, LEADER, SERGEANT</text>
  <circle cx="540" cy="298" r="14" fill="none" stroke="var(--dg-line, #0f172a)" stroke-width="1.5"/>
  <text x="540" y="302" font-size="10" text-anchor="middle" fill="var(--dg-text, #0f172a)">28мм</text>

  <!-- Выноски -->
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <circle cx="254" cy="46" r="11" fill="var(--dg-accent, #f97316)"/>
    <text x="254" y="51" fill="var(--dg-bg, #f8fafc)">1</text>
    <circle cx="298" cy="46" r="11" fill="var(--dg-accent, #f97316)"/>
    <text x="298" y="51" fill="var(--dg-bg, #f8fafc)">2</text>
    <circle cx="240" cy="90" r="11" fill="var(--dg-accent, #f97316)"/>
    <text x="240" y="95" fill="var(--dg-bg, #f8fafc)">3</text>
    <circle cx="540" cy="90" r="11" fill="var(--dg-accent, #f97316)"/>
    <text x="540" y="95" fill="var(--dg-bg, #f8fafc)">4</text>
    <circle cx="540" cy="235" r="11" fill="var(--dg-accent, #f97316)"/>
    <text x="540" y="240" fill="var(--dg-bg, #f8fafc)">5</text>
    <circle cx="380" cy="298" r="11" fill="var(--dg-accent, #f97316)"/>
    <text x="380" y="303" fill="var(--dg-bg, #f8fafc)">6</text>
    <circle cx="506" cy="298" r="11" fill="var(--dg-accent, #f97316)"/>
    <text x="506" y="303" fill="var(--dg-bg, #f8fafc)">7</text>
  </g>

  <!-- Легенда -->
  <g font-size="12" fill="var(--dg-muted, #64748b)">
    <text x="24" y="340">1 тип · 2 характеристики · 3 профили оружия · 4 правила оружия</text>
    <text x="24" y="355">5 доп. правила · 6 ключевые слова · 7 размер базы</text>
  </g>
</svg>
`;export{e as default};