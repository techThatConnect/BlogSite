const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src')
  eleventyConfig.addPlugin(pluginRss);
    return {
        dir: {
          input: "src",
          output: "public"
        }
      }
} 