module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("page", function(name) {
    return `<a href="pages/${name}">${name}</a>`;
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
