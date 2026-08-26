---
title: Formular
css:
- components/components-base
- components/form
- components/button
---
<section class="panel">
  <h1>Formular</h1>
  <form class="form">
    <div class="form-cnt">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Max Muster" />
    </div>
    <div class="form-cnt">
      <label for="email">E-Mail</label>
      <input type="email" id="email" placeholder="name@example.com" />
    </div>
    <div class="form-cnt">
      <label for="telefon">Telefon</label>
      <input type="tel" id="telefon" placeholder="0123 456789" />
    </div>
    <div class="form-cnt">
      <label for="nachricht">Nachricht</label>
      <textarea id="nachricht" placeholder="Ihre Nachricht"></textarea>
    </div>
    <div class="form-cnt">
      <label for="geburtsdatum">Geburtsdatum</label>
      <input type="date" id="geburtsdatum" />
    </div>
    <div class="form-cnt">
      <label for="rolle">Rolle</label>
      <select id="rolle">
        <option>Designer</option>
        <option>Entwickler</option>
        <option>Produkt</option>
      </select>
    </div>
    <div class="form-cnt checkbox-row">
      <input type="checkbox" id="bedingungen" />
      <label class="checkbox-row" for="bedingungen">Ich akzeptiere die Bedingungen</label>

    </div>
    <div class="form-cnt">
      <button class="btn" type="submit">Absenden</button>
    </div>
    
  </form>
</section>