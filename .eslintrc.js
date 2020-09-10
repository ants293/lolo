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
    "space-before-function-paren": "off",
    quotes: ['error', 'single'],
    'no-trailing-spaces': 'error'
  }
}
