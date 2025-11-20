const configPath = "./src/_includes/";
// module import shortcodes
const {
  card,
  teaser,
  quoteTeaser,
  nav,
  blockquote,
  blockquoteSimple,
  thumbnail,
  imageSimple,
  simpleteaser,
  selectBundeslaender,
  selectCountries,
  selectTitel,
  liste8,
  codeCss,
  dummyArticle,
  horizontalnav
} = require(configPath + 'shortcodes/index.js');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    'src/assets/css/': '/assets/css/',
    'src/assets/img/': '/assets/img/',
    'src/assets/js/': '/assets/js/',
    'src/assets/svg/': '/assets/svg/'
  });

  eleventyConfig.addShortcode("svg", async function (icon, modificator = false) {
    if (modificator) {
      return `<svg class="svg-icon ${modificator}"><use xlink:href="#${icon}"></use></svg>`;
    } else {
      return `<svg class="svg-icon"><use xlink:href="#${icon}"></use></svg>`;
    }
  });

  eleventyConfig.addShortcode("card", card);
  eleventyConfig.addShortcode("teaser", teaser);
  eleventyConfig.addShortcode("quoteTeaser", quoteTeaser);
  eleventyConfig.addShortcode("nav", nav);
  eleventyConfig.addShortcode("blockquote", blockquote);
  eleventyConfig.addShortcode("blockquoteSimple", blockquoteSimple);
  eleventyConfig.addShortcode("thumbnail", thumbnail);
  eleventyConfig.addShortcode("imageSimple", imageSimple);
  eleventyConfig.addShortcode("simpleteaser", simpleteaser);
  eleventyConfig.addShortcode("selectBundeslaender", selectBundeslaender);
  eleventyConfig.addShortcode("selectCountries", selectCountries);
  eleventyConfig.addShortcode("selectTitel", selectTitel);
  eleventyConfig.addShortcode("liste8", liste8);
  eleventyConfig.addShortcode("codeCss", codeCss);
  eleventyConfig.addShortcode("dummyArticle", dummyArticle);
  eleventyConfig.addShortcode("horizontalnav", horizontalnav);

  eleventyConfig.addWatchTarget('src/assets/css/');
  eleventyConfig.addWatchTarget('src/assets/js/');
  eleventyConfig.addWatchTarget('src/assets/svg/');
  eleventyConfig.addWatchTarget('src/assets/img/');
  eleventyConfig.addWatchTarget('src/content/');

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: '_site',
      data: '_data',
      includes: '_includes',
      layouts: "_includes/layouts"
    },
  };
};
