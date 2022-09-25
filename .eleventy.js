module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("page", function(slug, name) {
    var slugOrName = name || slug;
    return `<a href="pages/${slug}">${slugOrName}</a>`;
  });
  eleventyConfig.addShortcode("home", function(name) {
    return `<a href="/">${name}</a>`;
  });
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('CNAME');
  return {
    dir: {
      input: "views",
      output: "dist",
      layouts: "layouts"
    },
    passthroughFileCopy: true
  }
}
