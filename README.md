# Frontend-Testseiten

Eine stetig wachsende Sammlung kleiner Testseiten für HTML, CSS und JavaScript.
Die Beispiele untersuchen einzelne Browserfunktionen, Layouttechniken,
Selektoren, Komponenten und Fragen der Barrierefreiheit. Erklärungen stehen
meist direkt in den Kommentaren der jeweiligen CSS- oder HTML-Datei.

![WTFPL-Logo](wtfpl-badge-1.png)

## Inhalt

Die Startseite bündelt die erzeugten Testseiten nach Themen:

- [Accessibility](./_site/accessible-name.html) für zugängliche Namen, ARIA und Navigation
- Layouts mit Flexbox, Grid, Container Queries und responsiven Mustern
- CSS-Selektoren wie `:has()`, `:is()`, `:where()` und `@supports`
- wiederverwendbare Komponenten wie Akkordeons, Buttons, Dialoge, Formulare und Tabellen
- Module für Browser- und Betriebssystemerkennung, View Transitions und mehr
- allgemeine Testseiten und historische Beispiele

Einzelne Beispiele können direkt aus dem erzeugten Verzeichnis geöffnet werden,
zum Beispiel [View Transitions](./_site/vt-1.html), [Container Queries](./_site/teaser-container.html),
[Accessibility](./_site/accessible-name.html) oder die [Komponentenübersicht](./_site/components-komponentenuebersicht.html).

> [!NOTE]
> Die Sammlung ist ein Experimentier- und Nachschlageprojekt, keine fertige
> UI-Bibliothek. Viele Seiten demonstrieren bewusst nur einen kleinen
> technischen Aspekt.

## Voraussetzungen

- [Node.js](https://nodejs.org/) mit npm
- ein aktueller Browser zum Ausprobieren der Testseiten

## Schnellstart

Abhängigkeiten installieren und den Entwicklungsserver starten:

```bash
npm install
npm start
```

Danach ist die Website üblicherweise unter `http://localhost:8080` erreichbar.
Eleventy aktualisiert die Ausgabe während der Entwicklung automatisch.

## Befehle

| Befehl | Zweck |
| --- | --- |
| `npm start` | Entwicklungsserver mit Live-Reload starten |
| `npm run build` | Website nach `_site/` bauen |
| `npm run clean` | Generierte Ausgabe entfernen |
| `npm run debug` | Eleventy mit ausführlichem Debug-Logging ausführen |

## Shortcodes

Die Nunjucks-Shortcodes werden in `.eleventy.js` registriert und stehen in
allen Dateien unter `src/content/` zur Verfügung. Sie erzeugen wiederkehrende
HTML-Strukturen oder Testdaten direkt beim Build.

### Komponenten und Layout

| Shortcode | Argumente | Zweck |
| --- | --- | --- |
| `card` | `headline`, `modificator` (optional) | Erzeugt eine Card mit Überschrift und Platzhalterfläche. |
| `teaser` | `headline`, `para`, `className` (optional) | Erzeugt einen Teaser mit Platzhalterbild, Überschrift und Text. |
| `simpleteaser` | `title`, `text`, `imgSrc`, `imgWidth`, `imgHeight` | Erzeugt einen verlinkten Teaser mit Bild aus `assets/img/`. |
| `quoteTeaser` | `quote`, `author` | Erzeugt ein Zitat mit Autor. |
| `blockquote` | `quote`, `author` | Erzeugt ein Zitat als `figure` mit `figcaption`. |
| `blockquoteSimple` | `quote` | Erzeugt ein Zitat ohne Autorzeile. |
| `nav` | keine | Fügt eine feste Beispiel-Kopfzeile mit Navigation ein. |
| `horizontalnav` | `className`, `items` | Erzeugt eine horizontale Navigation aus einem Array von Linktexten. |

```njk
{% card "Card Headline", "secondary" %}
{% teaser "Teaser Headline", "Kurzer Beschreibungstext.", "teaser--compact" %}
{% simpleteaser "Artikel", "Eine kurze Zusammenfassung.", "example.jpg", 640, 360 %}
{% quoteTeaser "This is a quote.", "Author Name" %}
{% blockquote "Ein Zitat mit Quellenangabe.", "Name der Person" %}
{% blockquoteSimple "Ein Zitat ohne Quellenangabe." %}
{% nav %}
{% horizontalnav "footer-nav", ["Startseite", "Kontakt", "Impressum"] %}
```

### Bilder, Icons und Code

| Shortcode | Argumente | Zweck |
| --- | --- | --- |
| `thumbnail` | keine | Erzeugt ein leeres `div.thumbnail` als Thumbnail-Platzhalter. |
| `imageSimple` | `src`, `width`, `height` | Erzeugt ein Bild mit Platzhalter-Alttext und festen Abmessungen. |
| `testicon` | `iconname` | Bindet ein Icon aus `assets/svg/test-icons.svg` ein. |
| `svg` | `icon`, `modificator` (optional) | Erzeugt ein SVG-Symbol; der optionale Modifikator wird als CSS-Klasse gesetzt. |
| `codeCss` | `code` | Gibt CSS-Code als hervorgehobenen `pre`-/`code`-Block aus. |

```njk
{% thumbnail %}
{% imageSimple "foto.jpg", 800, 450 %}
{% testicon "arrow-right" %}
{% svg "check" %}
{% svg "close", "icon--small" %}
{% codeCss ".card { display: grid; }" %}
```

`imageSimple` erwartet den Bildpfad relativ zu `assets/img/`; bei
`simpleteaser` wird dieser Pfad automatisch mit `/assets/img/` ergänzt. Die
verwendeten Bilddateien müssen daher unter `src/assets/img/` liegen.

### Testdaten und Formulare

| Shortcode | Argumente | Zweck |
| --- | --- | --- |
| `dummyArticle` | `count`, `image` (optional), `className` (optional) | Erzeugt `count` horizontale Linien als Artikel-Platzhalter; `image` fügt der ersten Linie die Klasse `image` hinzu. |
| `liste8` | `className` (optional) | Erzeugt eine nummerierte Liste mit den Werten 1 bis 8. |
| `selectBundeslaender` | keine | Erzeugt ein Select mit den deutschen Bundesländern. |
| `selectCountries` | keine | Erzeugt ein Select mit einer Länderliste. |
| `selectTitel` | keine | Erzeugt ein Select mit Anrede- und Berufstiteln. |

```njk
{% dummyArticle 4, true, "article-example" %}
{% liste8 "demolist--wide" %}
{% selectBundeslaender %}
{% selectCountries %}
{% selectTitel %}
```

## Neue Testseite anlegen

Der kleine Generator erstellt eine neue Nunjucks-Datei mit Frontmatter und
passendem Titel:

```bash
node create.js mein-test
```

Die Datei wird unter `src/content/mein-test.njk` angelegt. Anschließend können
Inhalt, CSS und gegebenenfalls JavaScript ergänzt werden. Vorhandene Beispiele
und Layouts in `src/content/` dienen als Vorlage.

## Projektstruktur

```text
src/
├── _data/       Daten und Beispielinhalte
├── _includes/   Layouts, Partials, Module und Shortcodes
├── assets/      CSS, Bilder, JavaScript und SVGs
└── content/     Testseiten und ihre Frontmatter-Dateien
_site/           Von Eleventy erzeugte Website
create.js        Generator für neue Testseiten
```

Die zentrale Übersicht liegt in `src/content/index.njk`. Änderungen an den
Quellen gehören nach `src/`; `_site/` wird beim Build erzeugt.

## Daten in `_data`

Eleventy lädt die Dateien aus `src/_data/` automatisch als globale Daten. Der
Dateiname wird dabei zum Variablennamen: `lorem.json` ist beispielsweise über
`lorem` verfügbar. Die Daten eignen sich vor allem für wiederverwendete
Beispielinhalte in Nunjucks-Templates.

| Datei | Inhalt und Verwendung |
| --- | --- |
| `images.js` | Array mit Bild-URLs, Dateinamen und Überschriften für Bild- und Card-Beispiele. |
| `list.js` | Array mit Blindtexten als `item`-Eigenschaften für Listen. |
| `lorem.json` | Absätze, Überschriften und einzelne Zitate für Layout- und Komponentenbeispiele. |
| `metadata.json` | Globale Metadaten wie Seitentitel, Beschreibung und Sprache. |
| `navigations.json` | Navigationsgruppen als Arrays von Objekten mit einer `name`-Eigenschaft. |
| `navigations2.json` | Navigationsgruppen als Arrays einfacher Strings, zum Beispiel für `horizontalnav`. |
| `navigationTest.json` | Navigationseinträge mit `name` und `url` für Accessibility- und Screenreader-Tests. |
| `para.js` | Array längerer Blindtext-Absätze für typografische und Layouttests. |
| `stateselection.json` | Zustände für Infoboxen, inklusive `name` und optional `checked`. |
| `swapstyles.json` | JSON mit einigen Basis-Stylesheets für den Vergleich unterschiedlicher Normalisierungen. |
| `websites.js` | Liste externer Websites mit `url`, `title` und Beschreibung für Listenlayouts. |
| `zitate.js` | Array von Zitaten mit `quote` und `author`. |

Beispiele für den Zugriff auf einzelne Werte und Arrays:

```njk
<h1>{{ lorem.headline1 }}</h1>
<p>{{ lorem.para1 }}</p>

{% for item in websites %}
	<a href="{{ item.url }}">{{ item.title }}</a>
	<p>{{ item.desc }}</p>
{% endfor %}

{% for item in navigations2.deutsch1 %}
	<span>{{ item }}</span>
{% endfor %}

{% for quote in zitate %}
	<blockquote>{{ quote.quote }}</blockquote>
	<cite>{{ quote.author }}</cite>
{% endfor %}
```

Beim Ergänzen einer Datendatei sollte die exportierte Struktur zu ihrer
Verwendung im Template passen: Arrays werden typischerweise mit `for`
durchlaufen, Objekte über ihre Eigenschaften angesprochen.

Die Nutzung ist unter den Bedingungen der [WTFPL](./WTFPL-licence.md) erlaubt.
