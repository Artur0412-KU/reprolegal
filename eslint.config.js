import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { ESLint } from 'eslint';

export default {
    ignores: ['dist'],
    extends: [
        js.configs.recommended,
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parser: '@typescript-eslint/parser',  // TypeScript парсер
        parserOptions: {
            project: './tsconfig.json',  // шляхи до вашого tsconfig.json, якщо потрібно
        },
    },
    plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@typescript-eslint/no-explicit-any': 'warn', // приклад додаткових правил для TypeScript
    },
};

