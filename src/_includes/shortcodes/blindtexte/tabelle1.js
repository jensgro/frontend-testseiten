const tabelle1 = (myclass = '') => {
    let theclass = myclass ? myclass : '';
    return `<table class="${theclass}">
      <caption>Beispielhafte Datentabelle</caption>
      <thead>
        <tr>
          <th>Produkt</th>
          <th>Menge</th>
          <th>Preis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Apfel</td>
          <td>5</td>
          <td>2,00 €</td>
        </tr>
        <tr>
          <td>Birne</td>
          <td>3</td>
          <td>3,50 €</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Gesamt</td>
          <td>8</td>
          <td>5,50 €</td>
        </tr>
      </tfoot>
    </table>`;
};

module.exports = tabelle1;
