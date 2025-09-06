const card = (headline, modificator) => {
    return `<div class="card">
    <header class="card__head">
        <h3>${headline}</h3>
    </header>
    <div class="card__content">
        <svg class="placeholder placeholder--${modificator}" xmlns="http://www.w3.org/2000/svg">
            <rect />
        </svg>
    </div>
</div>`;
}

module.exports = card
