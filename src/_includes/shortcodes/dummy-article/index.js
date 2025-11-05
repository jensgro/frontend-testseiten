const dummyArticle = (count, image = false) => {
    // const n = Math.floor(Number(count));
    const n = count;
    let hrs = '';
    for (let i = 0; i < n; i++) {
        hrs += (i === 0 && image) ? '<hr class="image">' : '<hr>';
    }

    return `<div class="dummy-article">
      ${hrs}
    </div>
    `;
}

module.exports = dummyArticle;