import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import babelParser from '@babel/eslint-parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        console: 'readonly',
      },
    },

    plugins: {
      react,
      'react-native': reactNative,
    },

    settings: {
      react: { version: 'detect' },
    },

    rules: {
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jest/recommended',
    ],
  },
];
