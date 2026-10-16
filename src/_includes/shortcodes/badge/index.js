const badge = (content, myclass = '') => {
  const theclass = myclass ? `badge badge--${myclass}` : 'badge';
  return `<div class="${theclass}"><span class="status-dot"></span>${content}</div>`
}

module.exports = badge;
