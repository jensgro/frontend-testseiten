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

Die Nutzung ist unter den Bedingungen der [WTFPL](./WTFPL-licence.md) erlaubt.
