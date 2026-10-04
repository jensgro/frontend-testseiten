# Erläuterung zu `thumbnail.js`
Die Funktion in `thumbnail.js` erzeugt ein `<div>` mit der Klasse `thumbnail`. Sie kann jetzt optional eine zusätzliche Klasse entgegennehmen:

```js
thumbnail()        // <div class="thumbnail"></div>
thumbnail('wide')  // <div class="thumbnail wide"></div>
```

Der Parameter `className = ''` sorgt dafür, dass der Klassenname leer bleibt, wenn keiner übergeben wird. Das Array enthält immer `thumbnail` und zusätzlich den übergebenen Namen. `filter(Boolean)` entfernt den leeren Namen, und `join(' ')` verbindet die verbleibenden Klassen mit einem Leerzeichen.

`filter(Boolean)` entfernt aus einem Array alle Werte, die in JavaScript als „falsy“ gelten – etwa `''`, `false`, `0`, `null`, `undefined` oder `NaN`.

In der Funktion wird dadurch der optionale Klassenname weggelassen, wenn er leer ist:

```js
['thumbnail', ''].filter(Boolean) // ['thumbnail']
['thumbnail', 'wide'].filter(Boolean) // ['thumbnail', 'wide']
```

`Boolean` wird dabei für jeden Array-Eintrag aufgerufen. Das Ergebnis entscheidet, ob der Eintrag erhalten bleibt. Anschließend verbindet `join(' ')` die verbliebenen Klassen mit Leerzeichen. So funktioniert es in `thumbnail.js`.