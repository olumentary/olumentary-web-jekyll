<html>
  <h1 align="center">
      olumentary
  </h1>
</html>

olumentary.com is built using [Jekyll](https://jekyllrb.com/) and [Tailwind](https://tailwindcss.com). You can refer to the [Getting started](#getting-started) section to get a local testing environment up and running.

| **📝 Note** |
|:---------|
| `gh-pages` is the primary branch to host the site. |

## ⚙️ Requirements

This site uses the following packages.

- [Bundler](http://bundler.io/)
- [Jekyll](https://jekyllrb.com/)
- [Ruby](https://www.ruby-lang.org/en/) - 3.1.3
- NodeJS - 16.18.1
- Yarn - 1.22.19
- [Tailwind](https://tailwindcss.com)
- 

## 🚀 Getting Started

- Install the [prerequisites](https://jekyllrb.com/docs/installation/)
- Run `bundle install` to install the Ruby gems specified in Gemfile
- Run `yarn install` to install the Node packages specified in package.json
- Run the command `bundle exec jekyll serve --livereload` to test the site locally
- Open a new tab and run `npx tailwindcss -i ./assets/css/style.css -o ./assets/css/output.css --watch` in the root of the repo to build CSS
- Visit `http://127.0.0.1:4000/` to view the site

| **📝 Note** |
|:---------|
| The site is automatically built on pushing the changes to the repository. |