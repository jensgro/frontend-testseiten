---
title: Formular
css:
  - components/components-base
  - components/form
---
<section class="panel">
  <h1>Formular</h1>
  <form class="form">
    <label>
      Name
      <input type="text" placeholder="Max Muster" />
    </label>
    <label>
      E-Mail
      <input type="email" placeholder="name@example.com" />
    </label>
    <label>
      Rolle
      <select>
        <option>Designer</option>
        <option>Entwickler</option>
        <option>Produkt</option>
      </select>
    </label>
    <label class="checkbox-row">
      <input type="checkbox" />
      <span>Ich akzeptiere die Bedingungen</span>
    </label>
    <button class="btn" type="submit">Absenden</button>
  </form>
</section>
