---
title: Tabellen-Komponente
permalink: components/tables.html
css:
  - components/components
---
<section class="panel">
  <h1>Tabellen-Beispiele</h1>
  <table>
    <thead>
      <tr><th>Projekt</th><th>Status</th><th>Owner</th></tr>
    </thead>
    <tbody>
      <tr><td>Design-System</td><td>Aktiv</td><td>Anna</td></tr>
      <tr><td>Docs</td><td>In Review</td><td>Leo</td></tr>
      <tr><td>Landing Page</td><td>Geplant</td><td>Mina</td></tr>
    </tbody>
  </table>

  <table class="complex-table">
    <caption>Komplexe Tabelle mit Gruppen</caption>
    <thead>
      <tr>
        <th rowspan="2">Team</th>
        <th colspan="2">KPI</th>
        <th rowspan="2">Stand</th>
      </tr>
      <tr>
        <th>Fokus</th>
        <th>Wert</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>UX</td><td>Konversion</td><td>+12%</td><td>Gut</td></tr>
      <tr><td>Dev</td><td>Performance</td><td>+8%</td><td>Sehr gut</td></tr>
      <tr><td>Content</td><td>Abdeckung</td><td>+5%</td><td>Gut</td></tr>
    </tbody>
  </table>
</section>
