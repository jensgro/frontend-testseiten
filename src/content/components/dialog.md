---
title: Dialog-Komponente
permalink: components/dialog.html
css:
  - components/components
---
  <button class="btn" onclick="document.getElementById('demo-dialog').showModal()">Dialog öffnen</button>

  <dialog id="demo-dialog">
    <h2>Bestätigung</h2>
    <p>Möchtest du die Auswahl wirklich übernehmen?</p>
    <div class="dialog-actions">
      <button value="cancel" formmethod="dialog">Abbrechen</button>
      <button value="default" class="btn primary">Bestätigen</button>
    </div>
  </dialog>
