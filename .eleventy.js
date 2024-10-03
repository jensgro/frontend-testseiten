module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    'src/assets/css/': '/assets/css/',
    'src/assets/img/': '/assets/img/',
    'src/assets/js/': '/assets/js/'
  });
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
        includes: '_includes'
    },
  };
};
