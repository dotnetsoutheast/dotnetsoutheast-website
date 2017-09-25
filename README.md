# dotnetsoutheast website

This folder contains the source code for the website.

## Installation

If you are working on the site, you will want to install and run a local copy of it.

We use [Jekyll](http://jekyllrb.com/) to build the site using, and we host it by pushing HTML to [GitHub Pages](http://pages.github.com/).

### Dependencies

In order to use Jekyll, you will need to have Ruby installed. macOS comes pre-installed with Ruby, but you may need to update RubyGems (via `gem update --system`).
Otherwise, [RVM](https://rvm.io/) and [rbenv](https://github.com/sstephenson/rbenv) are popular ways to install Ruby.

 - [Ruby](http://www.ruby-lang.org/) (version >= 1.8.7)
 - [RubyGems](http://rubygems.org/) (version >= 1.3.7)
 - [Bundler](http://gembundler.com/)


Once you have RubyGems and installed Bundler (via `gem install bundler`), use it to install the dependencies:

```sh
$ bundle install # Might need sudo.
$ npm install
```

### Instructions

Use Jekyll to serve the website locally (by default, at `http://localhost:4000`):

```sh
$ npm run dev
$ open http://localhost:4000/
```

### Updating

There is an npm script to deploy the site:

```sh
$ npm run deploy
```

This will run the `npm run build` task then uses [gh-pages](https://github.com/tschaub/gh-pages) to deploy to live.

