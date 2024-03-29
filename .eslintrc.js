module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'import/extensions': ['off'],
    'no-underscore-dangle': ['off'],
    'no-tabs': ['error', { allowIndentationTabs: true }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
