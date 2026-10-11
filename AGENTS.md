# Project Custom Instructions

## Core Rule

This is a 11ty-Project. All pages should be generated using 11ty templates and follow the rules outlined below. Nunjucks is the templating language used for generating HTML pages, sometimes Markdown is allowed, too.

Besides these techniques no frameworks are used. Stick to the core web technologies of HTML, CSS, and JavaScript.

## Allowed

- Semantic HTML5 landmarks and native elements
- CSS Grid, Flexbox, and modern native CSS
- CSS variables for tokens and theme colors
- Native form controls and browser APIs
- ES6+ JavaScript with direct DOM manipulation
- Responsive layouts and accessible interactions
- Light/dark theme support using CSS variables

## Forbidden

- No TypeScript
- No React/Vue/Svelte/Angular or similar frameworks
- No Tailwind, Bootstrap, or utility-first CSS frameworks
- No inline styles for essential styling or behavior
- No div/span-based interactive controls when a native element already works
- No framework lifecycle patterns, virtual DOM assumptions, or component abstractions
- No repeated hardcoded design values; use variables instead

## Quality Rules

- Use semantic HTML and accessible UX by default.
- Always set lang="de" on the html element.
- Prefer native HTML semantics over custom behavior.
- Keep code simple, readable, and maintainable.
- Use BEM naming for CSS classes.
- Use keyboard-friendly, focus-visible, screen-reader-safe UI patterns.
- Wrap async logic in try/catch and provide useful user feedback.
- Use CSS custom properties and consistent theme tokens.
- Use accessible color contrast and avoid conveying meaning by color alone.
- Refer to the [html-css-style-color-guide](.github/instructions/html-css-style-color-guide.instructions.md) for color decisions.

## Tools for checking quality and consistency

- Only use node-based tools for checking quality and consistency, such as ESLint for JavaScript, Stylelint for CSS, and HTMLHint for HTML.
- Don't use Python.

## Final Check

Before finishing, verify:

- Only HTML, CSS, and plain JavaScript are used
- No framework or TypeScript was introduced
- Native semantics and accessibility rules were respected
- The UI works with keyboard navigation and visible focus states
- The page remains responsive and understandable without framework tooling