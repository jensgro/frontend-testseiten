const card = (headline, content, img = false, myclass = '') => {
    let theclass = 'card' + (myclass ? ' ' + myclass : '');
    return `<div class="${theclass}">
    <header class="card__head">
        <h3>${headline}</h3>
    </header>
    
    ${img ? `<div class="card__img"><img src="assets/img/${img}" alt=""></div>` : ''}

    <div class="card__content">
        <p>${content}</p>
    </div>
</div>`;
}

module.exports = card
