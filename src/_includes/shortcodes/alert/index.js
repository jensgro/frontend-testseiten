const alert = (content, myclass = '') => {
    const theclass = myclass ? `alert alert--${myclass}` : 'alert';
    return `<div class="${theclass}">
      <p>${content}</p>
    </div>`
}

module.exports = alert;
