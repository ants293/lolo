module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:react/recommended',
        "plugin:react-hooks/recommended",
    ],
    plugins: [
        'react',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
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
    },
}
