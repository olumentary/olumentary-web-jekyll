module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/assets/images/hero.jpg')",
      }
    },
  },
  plugins: []
}
