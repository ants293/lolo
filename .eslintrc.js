module.exports = {
  env: {
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single'],
    'no-trailing-spaces': 'error'
  }
}
