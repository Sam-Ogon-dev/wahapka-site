var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 310" font-family="inherit">
  <defs>
    <marker id="mcj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-accent, #f97316)"/>
    </marker>
    <marker id="mcj-dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-muted, #64748b)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="600" height="310" rx="12" fill="var(--dg-bg, #f8fafc)"/>
  <text x="20" y="28" font-size="14" font-weight="bold" fill="var(--dg-text, #0f172a)">Вид сбоку: возвышенности высотой 3"</text>

  <!-- пол -->
  <line x1="20" y1="270" x2="580" y2="270" stroke="var(--dg-line, #0f172a)" stroke-width="2"/>
  <text x="24" y="290" font-size="12" fill="var(--dg-muted, #64748b)">пол киллзоны</text>

  <!-- Возвышенность A: 3" -->
  <rect x="130" y="180" width="120" height="90" fill="var(--dg-heavy, #475569)"/>
  <!-- Возвышенность B: 3" -->
  <rect x="360" y="180" width="110" height="90" fill="var(--dg-heavy, #475569)"/>

  <!-- размер высоты A -->
  <line x1="116" y1="182" x2="116" y2="268" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" marker-start="url(#mcj-dim)" marker-end="url(#mcj-dim)"/>
  <text x="110" y="230" text-anchor="end" font-size="13" fill="var(--dg-muted, #64748b)">3"</text>

  <!-- оперативник на полу -->
  <circle cx="80" cy="258" r="12" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.45"/>
  <!-- лазанье -->
  <polyline points="96,258 124,258 124,166 150,166" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="3" marker-end="url(#mcj-arrow)"/>
  <text x="30" y="150" font-size="13" font-weight="bold" fill="var(--dg-accent, #f97316)">лазанье 3"</text>
  <text x="30" y="166" font-size="12" fill="var(--dg-muted, #64748b)">(минимум 2")</text>

  <!-- на вершине A -->
  <circle cx="215" cy="168" r="12" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.45"/>

  <!-- прыжок через разрыв 3,7" -->
  <line x1="240" y1="160" x2="372" y2="160" stroke="var(--dg-accent, #f97316)" stroke-width="3" marker-end="url(#mcj-arrow)"/>
  <text x="305" y="122" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--dg-accent, #f97316)">прыжок</text>
  <text x="305" y="140" text-anchor="middle" font-size="12" fill="var(--dg-muted, #64748b)">≤ 4" одним отрезком</text>
  <line x1="250" y1="196" x2="360" y2="196" stroke="var(--dg-muted, #64748b)" stroke-width="1.5" marker-start="url(#mcj-dim)" marker-end="url(#mcj-dim)"/>
  <text x="305" y="214" text-anchor="middle" font-size="12" fill="var(--dg-muted, #64748b)">разрыв 3,7"</text>

  <!-- на вершине B -->
  <circle cx="420" cy="168" r="12" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.45"/>

  <!-- спуск -->
  <polyline points="436,166 490,166 490,256" fill="none" stroke="var(--dg-accent, #f97316)" stroke-width="3" marker-end="url(#mcj-arrow)"/>
  <circle cx="506" cy="258" r="12" fill="var(--dg-friendly, #2563eb)"/>
  <text x="498" y="120" font-size="13" font-weight="bold" fill="var(--dg-accent, #f97316)">спуск 3"</text>
  <text x="498" y="138" font-size="12" fill="var(--dg-muted, #64748b)">2" не считаются</text>
  <text x="498" y="154" font-size="12" fill="var(--dg-muted, #64748b)">→ засчитан 1"</text>

</svg>
`;export{e as default};