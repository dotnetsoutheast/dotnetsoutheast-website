module.exports = ctx => ({
  plugins: {
    autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] },
    cssnano: {
      preset: 'default'
    }
  }
});
