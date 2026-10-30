var e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" font-family="inherit">
  <defs>
    <marker id="mmb-arrow-ok" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-friendly, #2563eb)"/>
    </marker>
    <marker id="mmb-arrow-bad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="var(--dg-enemy, #dc2626)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="600" height="250" rx="12" fill="var(--dg-bg, #f8fafc)"/>
  <line x1="300" y1="16" x2="300" y2="234" stroke="var(--dg-muted, #64748b)" stroke-width="1" stroke-dasharray="4 4"/>

  <!-- Масштаб: 30px = 1", база 32 мм ≈ 1,26" ≈ 38px. Движение 6". -->

  <!-- Правильно: передний край → передний край -->
  <text x="150" y="32" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-friendly, #2563eb)">Правильно</text>
  <circle cx="50" cy="105" r="19" fill="none" stroke="var(--dg-muted, #64748b)" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="230" cy="105" r="19" fill="var(--dg-friendly, #2563eb)" fill-opacity="0.85"/>
  <line x1="69" y1="105" x2="69" y2="160" stroke="var(--dg-friendly, #2563eb)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="249" y1="105" x2="249" y2="160" stroke="var(--dg-friendly, #2563eb)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="70" y1="152" x2="248" y2="152" stroke="var(--dg-friendly, #2563eb)" stroke-width="2" marker-start="url(#mmb-arrow-ok)" marker-end="url(#mmb-arrow-ok)"/>
  <text x="159" y="146" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-friendly, #2563eb)">6"</text>
  <text x="150" y="190" text-anchor="middle" font-size="12" fill="var(--dg-text, #0f172a)">передний край → передний край:</text>
  <text x="150" y="207" text-anchor="middle" font-size="12" fill="var(--dg-text, #0f172a)">база прошла ровно 6"</text>
  <text x="50" y="78" text-anchor="middle" font-size="11" fill="var(--dg-muted, #64748b)">было</text>
  <text x="230" y="78" text-anchor="middle" font-size="11" fill="var(--dg-muted, #64748b)">стало</text>

  <!-- Неправильно: начали от переднего края, закончили задним -->
  <text x="450" y="32" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-enemy, #dc2626)">Неправильно</text>
  <circle cx="335" cy="105" r="19" fill="none" stroke="var(--dg-muted, #64748b)" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="553" cy="105" r="19" fill="var(--dg-enemy, #dc2626)" fill-opacity="0.85"/>
  <line x1="354" y1="105" x2="354" y2="160" stroke="var(--dg-enemy, #dc2626)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="534" y1="105" x2="534" y2="160" stroke="var(--dg-enemy, #dc2626)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="572" y1="105" x2="572" y2="160" stroke="var(--dg-enemy, #dc2626)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="355" y1="152" x2="533" y2="152" stroke="var(--dg-enemy, #dc2626)" stroke-width="2" marker-start="url(#mmb-arrow-bad)" marker-end="url(#mmb-arrow-bad)"/>
  <text x="444" y="146" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--dg-enemy, #dc2626)">6"</text>
  <line x1="535" y1="168" x2="571" y2="168" stroke="var(--dg-enemy, #dc2626)" stroke-width="2"/>
  <text x="553" y="184" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--dg-enemy, #dc2626)">+база</text>
  <text x="450" y="207" text-anchor="middle" font-size="12" fill="var(--dg-text, #0f172a)">передний край → задний край:</text>
  <text x="450" y="224" text-anchor="middle" font-size="12" fill="var(--dg-text, #0f172a)">прошла 6" + ширина базы (≈ 7,3")</text>
  <text x="335" y="78" text-anchor="middle" font-size="11" fill="var(--dg-muted, #64748b)">было</text>
  <text x="553" y="78" text-anchor="middle" font-size="11" fill="var(--dg-muted, #64748b)">стало</text>
</svg>
`;export{e as default};