const testicon = (iconname) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svg/test-icons.svg#svgicon-${iconname}"></use>
    </svg>`
}

module.exports = testicon;