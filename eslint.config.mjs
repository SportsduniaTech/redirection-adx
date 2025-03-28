import { FlatCompat } from '@eslint/eslintrc';

// Use import.meta.dirname if your Node.js version is >= 20.11.0
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@typescript-eslint/no-explicit-any': 'off', // Disabling this rule as per your need
    },
  }),
];

export default eslintConfig;
