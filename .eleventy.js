module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("page", function(slug, name) {
    var slugOrName = name || slug;
    return `<a href="/pages/${slug}">${slugOrName}</a>`;
  });
  eleventyConfig.addShortcode("home", function(name) {
    return `<a href="/">${name}</a>`;
  });
  eleventyConfig.addPairedShortcode("original", function(content, slug, name) {
    return `
      <div class="alert alert-success" role="alert">
        This article is an improved version of the original article titled
        <a href="/pages/original/${slug}">${name}</a>.
        <a href="#changes" class="link-secondary" data-bs-toggle="collapse" data-bs-target="#changes" aria-expanded="false" aria-controls="changes">
          <small>See changes</small>
        </a>
      </div>
      <div class="collapse" id="changes">
        <div class="card card-body">
          <h4>Changes</h4>
          <p>${content}</p>
        </div>
      </div>
    `
  });
  eleventyConfig.addShortcode("improved", function(slug, name) {
    return `
      <div class="alert alert-warning" role="alert">
        This article has an improved version titled <a href="/pages/${slug}">${name}</a>.
      </div>`
  });
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('CNAME');
  eleventyConfig.addPassthroughCopy('favicon.ico');
  return {
    dir: {
      input: "views",
      output: "dist",
      layouts: "layouts"
    },
    passthroughFileCopy: true
  }
}
