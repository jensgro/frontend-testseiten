const details = (summary, content, open = false) => {
    return `<details${open ? " open" : ""}>
  <summary>${summary}</summary>
  ${content}
</details>`;
}

module.exports = details;