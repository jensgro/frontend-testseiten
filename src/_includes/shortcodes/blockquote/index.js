const blockquote = (quote, author) => {
  return `<figure class="blockquote">
      <blockquote>
        <p>${quote}</p>
      </blockquote>
      <figcaption>
        <p>${author}</p>
      </figcaption>
    </figure>`
}

module.exports = blockquote;

