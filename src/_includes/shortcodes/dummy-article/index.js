const dummyArticle = (count, image = false, myclass = '') => {
    const n = count;
    let hrs = '';
    for (let i = 0; i < n; i++) {
        hrs += (i === 0 && image) ? '<hr class="image">' : '<hr>';
    }

    let theclass = 'dummy-article' + (myclass ? ' ' + myclass : '');

    return `<div class="${theclass}">
      ${hrs}
    </div>
    `;
}

module.exports = dummyArticle;