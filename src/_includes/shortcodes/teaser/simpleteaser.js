const simpleteaser = (title, text, imgSrc, imgWidth, imgHeight) => {
    return `
        <article class="simpleteaser">
            <div class="simpleteaser__image">
            <img src="/assets/img/${imgSrc}" alt="Platzhalterbild" width="${imgWidth}" height="${imgHeight}">
            </div>
            <div class="simpleteaser__content">
                <h2><a href="#">${title}</a></h2>
                <p>${text}</p>
            </div>            
        </article>
    `;
};

module.exports = simpleteaser;