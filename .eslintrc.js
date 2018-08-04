module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0],
    'react/destructuring-assignment': [0],
    'no-underscore-dangle': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/jsx-wrap-multilines': [
      'error',
      'parens-new-line',
      {
        arrow: 'parens',
      },
    ],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
