const formComplex = (myclass = '') => {
    let theclass = myclass ? myclass : '';
  return `<form class="${theclass}" action="#" method="post">
      <fieldset>
        <legend>Persönliche Daten</legend>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Max Mustermann">
        </div>
        <div>
          <label for="email">E-Mail:</label>
          <input type="email" id="email" name="email" placeholder="max@example.com" required autocomplete="email">
        </div>
        <div>
          <label for="pass">Passwort:</label>
          <input type="password" id="pass" name="pass" minlength="6">
        </div>
        <div>
          <label for="age">Alter:</label>
          <input type="number" id="age" name="age" min="0" max="120">
        </div>
        <div>
          <label for="date">Datum:</label>
          <input type="date" id="date" name="date">
        </div>
        <div>
          <label for="color">Lieblingsfarbe:</label>
          <input type="color" id="color" name="color">
        </div>
      </fieldset>
      <fieldset>
        <legend>Präferenzen</legend>
        <div>
          <input type="checkbox" id="newsletter" name="newsletter">
          <label for="newsletter">Newsletter abonnieren</label>
        </div>
        <div>
          <input type="radio" id="option1" name="choice" value="1">
          <label for="option1">Option 1</label>
          <input type="radio" id="option2" name="choice" value="2">
          <label for="option2">Option 2</label>
        </div>
        <div>
          <label for="experience">Erfahrung:</label>
          <input type="range" id="experience" name="experience" min="0" max="10">
        </div>
        <div>
          <label for="browser">Browser wählen:</label>
          <input list="browsers" id="browser" name="browser">
          <datalist id="browsers">
            <option value="Chrome"></option>
            <option value="Firefox"></option>
            <option value="Safari"></option>
            <option value="Edge"></option>
          </datalist>
        </div>
        <div>
          <label for="message">Nachricht:</label><br>
          <textarea id="message" name="message" rows="4" cols="50">Hier Text eingeben...</textarea>
        </div>
        <div>
          <label for="category">Kategorie:</label>
          <select id="category" name="category">
            <optgroup label="Technik">
              <option value="software">Software</option>
              <option value="hardware">Hardware</option>
            </optgroup>
            <optgroup label="Andere">
              <option value="divers">Diverses</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label for="readonly">Readonly</label>
          <input id="readonly" name="readonly" type="text" value="Nur lesen" readonly/>
        </div>
        <div>
          <label for="disabled">Disabled</label>
          <input id="disabled" name="disabled" type="text" value="Deaktiviert" disabled/>
        </div>
      </fieldset>
      <div>
        <button type="submit">Absenden</button>
        <button type="reset">Zurücksetzen</button>
      </div>
    </form>`;
};

module.exports = formComplex;
