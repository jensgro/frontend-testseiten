const selectBundeslaender = () => {
    return `
    <select name="bundeslaender" id="bundeslaender">
      <option value="baden-wuerttemberg">Baden-Württemberg</option>
      <option value="bayern">Bayern</option>
      <option value="berlin">Berlin</option>
      <option value="brandenburg">Brandenburg</option>
      <option value="bremen">Bremen</option>
      <option value="hamburg">Hamburg</option>
      <option value="hessen">Hessen</option>
      <option value="mecklenburg-vorpommern">Mecklenburg-Vorpommern</option>
      <option value="niedersachsen">Niedersachsen</option>
      <option value="nordrhein-westfalen">Nordrhein-Westfalen</option>
      <option value="rheinland-pfalz">Rheinland-Pfalz</option>
      <option value="saarland">Saarland</option>
      <option value="sachsen">Sachsen</option>
      <option value="sachsen-anhalt">Sachsen-Anhalt</option>
      <option value="schleswig-holstein">Schleswig-Holstein</option>
      <option value="thueringen">Thüringen</option>
    </select>
  `;
};

module.exports = selectBundeslaender;
