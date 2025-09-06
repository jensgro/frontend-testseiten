const quoteTeaser = (quote, author) => {
    return `<div class="quote-teaser">
        <blockquote><p>${quote}</p></blockquote>
        <p><cite>${author}</cite></p>
    </div>`;
}

module.exports = quoteTeaser;
