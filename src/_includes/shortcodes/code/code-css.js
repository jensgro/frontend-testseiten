// create an 11ty shortcode for embedding css code snippets

const codeCss = (code) => {
    return `<pre><code class="language-css">${code}</code></pre>`;
}

module.exports = codeCss;

