const blockquoteSimple = (quote) => {
  return `<figure class="blockquote">
      <blockquote>
        <p>${quote}</p>
      </blockquote>
    </figure>`
}

module.exports = blockquoteSimple;
