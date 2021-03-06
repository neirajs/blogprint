module.exports = {
    root: true,
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    env: {
      browser: true,
      node: true,
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'no-useless-escape': 'off',
      'no-undef': 'off',
      'react/display-name': 'off'
    }
  };
  