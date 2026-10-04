const cardSimple = (headline, content, img=false) => {
    return `<div class="card-simple">
        <h3>${headline}</h3>
        {% if img %}
        <img src="assets/img/${img}" alt=""> 
        {% endif %}
        <p>${content}
    </div>
</div>`;
}

module.exports = cardSimple
