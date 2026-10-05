const collectionDetails = (items, summary) => {
    return `<details name="index">
  <summary><h2>${summary}</h2></summary>
  <div class="details-content">
    <ol class="indexlist">
      ${items.map(item => `
        <li><a href="${item.url}" target="_blank">${item.data.title}</a></li>
      `).join("")}
    </ol>
  </div>
</details>`;
};

module.exports = collectionDetails;