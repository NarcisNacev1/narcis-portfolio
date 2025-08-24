import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist', 'node_modules'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            'semi': ['error', 'always'],
            'indent': ['error', 4],
            'quotes': ['error', 'single', { avoidEscape: true }],
            'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: false }],
            'no-multi-spaces': 'error',
            'no-redeclare': 'error',
            'no-unused-expressions': 'error',
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
            'keyword-spacing': ['error', { before: true, after: true }],
            'space-before-blocks': 'error',
            'space-before-function-paren': ['error', 'always'],
            'block-spacing': ['error', 'always'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
            'comma-dangle': ['error', 'always-multiline'],
        },
    },
);
