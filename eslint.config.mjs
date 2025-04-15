import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import jest from 'eslint-plugin-jest';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginPromise from 'eslint-plugin-promise';
import nodePlugin from 'eslint-plugin-n';
import importPlugin from 'eslint-plugin-import';
import standardConfig from './eslint.standard.config.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['{src,test}/**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: {
        ...globals.es2023,
        ...globals.node,
      },
      sourceType: 'module',
      ecmaVersion: 2023,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPromise.configs['flat/recommended'],
  nodePlugin.configs['flat/recommended-module'],
  {
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
  },
  {
    rules: {
      ...standardConfig.rules,
      semi: ['error', 'always'],
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
      'promise/always-return': 'off',
      'promise/no-callback-in-promise': 'off',
    },
  },
  {
    files: ['test/**'],
    ...jest.configs['flat/recommended'],
    rules: {
      'jest/no-conditional-expect': 'off',
    },
  },
  eslintConfigPrettier,
];
