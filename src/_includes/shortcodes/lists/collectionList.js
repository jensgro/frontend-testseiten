const collectionList = (items, summary) => {
    return `<div class="indexlist-container">
    <h2>${summary}</h2>
    <dl class="indexlist">
      ${items.map(item => `
        <dt><a href="${item.url}" target="_blank">${item.data.title}</a></dt>
        ${item.data.description
            ? `<dd>${item.data.description}</dd>`
            : ""}
      `).join("")}
    </dl>
  </div>`;
};
module.exports = collectionList;