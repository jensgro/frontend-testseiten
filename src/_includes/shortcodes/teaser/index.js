const teaser = (headline, para, className) => {
    return `<div class="teaser ${className}">
        <div class="teaser__image">
            <svg class="placeholder" xmlns="http://www.w3.org/2000/svg">
                <rect/>
            </svg>
        </div>
        <h2>${headline}</h2>
        <p>${para}</p>
    </div>`;
}

module.exports = teaser;
