const details = (content, summary,  open = false) => {
    return `<details${open ? " open" : ""}>
  <summary>${summary}</summary>
  ${content}
</details>`;
}

module.exports = details;