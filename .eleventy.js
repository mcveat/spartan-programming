module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("page", function(slug, name) {
    var slugOrName = name || slug;
    return `<a href="pages/${slug}">${slugOrName}</a>`;
  });
  eleventyConfig.addPassthroughCopy('css');
  return {
    dir: {
      input: "views",
      output: "dist",
      layouts: "layouts"
    },
    passthroughFileCopy: true
  }
}
