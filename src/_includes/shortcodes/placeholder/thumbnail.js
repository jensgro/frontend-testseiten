const thumbnail = (className = '') => {
    const classes = ['thumbnail', className].filter(Boolean).join(' ');

    return `
    <div class="${classes}"></div>
  `;
};

module.exports = thumbnail;
