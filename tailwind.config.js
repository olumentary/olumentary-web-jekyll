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
        'hero-background': "url('../images/hero.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
