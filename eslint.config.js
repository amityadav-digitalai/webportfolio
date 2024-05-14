const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const markdownPlugin = require('eslint-plugin-mdx');
const ymlEslint = require('eslint-plugin-yml');
const jsEslint = require('@eslint/js');
const globalsFix = require('globals');

module.exports = [
  {
    ...jsEslint.configs.recommended,
    ignores: ['dist/**/*.js'],
    languageOptions: {
      globals: {
        ...globalsFix.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          modules: true,
          jsx: true,
        },
      },
    },
  },
  {
    ...markdownPlugin.flat,
    processor: markdownPlugin.createRemarkProcessor({
      lintCodeBlocks: false,
    }),
  },

  ...ymlEslint.configs['flat/recommended'],

  {...eslintPluginPrettierRecommended},
];
