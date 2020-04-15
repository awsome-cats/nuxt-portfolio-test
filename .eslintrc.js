module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // ↓末尾のセミコロンを許容する。
    'comma-dangle': ['error', 'only-multiline'],
    // ↓空白行に対してwarnのみ出るようにする。
    'no-multiple-empty-lines': ['warn', {max: 1}]
  }
}
