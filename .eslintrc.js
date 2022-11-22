module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'import'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-unused-vars': 2,
    'eol-last': ["error", "always"],
    'semi': ["error", "always"],
    'react-hooks/rules-of-hooks': "error",
    'react-hooks/exhaustive-deps': "error",
    'import/no-default-export': 2
  },
  "ignorePatterns": ["**/*.test.*", "**/*.config.*", "**/dist"]
};
