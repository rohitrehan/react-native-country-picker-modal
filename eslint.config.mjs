import _import from 'eslint-plugin-import'
import jsdoc from 'eslint-plugin-jsdoc'
import preferArrow from 'eslint-plugin-prefer-arrow'
import react from 'eslint-plugin-react'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import { fixupPluginRules } from '@eslint/compat'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const compat = new FlatCompat({
  baseDirectory: __dirname,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  recommendedConfig: js.configs.recommended,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      '**/.eslintrc.js',
      '**/*.test.tsx',
      '**/*.config.js',
      '**/App.tsx',
      '**/.DS_Store',
      '**/logs',
      '**/*.log',
      '**/pids',
      '**/*.pid',
      '**/*.seed',
      '**/lib-cov',
      '**/coverage',
      '**/.grunt',
      '**/.lock-wscript',
      'build/Release',
      'node_modules',
      '**/*.xcuserstate',
      'examples/ios/swiper.xcodeproj/project.xcworkspace/',
      'examples/ios/swiper.xcodeproj/xcuserdata',
      '**/.idea/',
      '**/.vscode',
      '**/jsconfig.json',
      '**/.expo/',
      '**/lib/',
      '**/web-build/',
      './eslintrc.js',
      'scripts/',
    ],
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      jsdoc,
      'prefer-arrow': preferArrow,
      react,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },

    rules: {
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/adjacent-overload-signatures': 'error',

      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],

      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',

      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
          accessibility: 'explicit',
        },
      ],

      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/indent': 'off',

      '@typescript-eslint/member-delimiter-style': [
        'off',
        {
          multiline: {
            delimiter: 'none',
            requireLast: true,
          },

          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],

      '@typescript-eslint/naming-convention': [
        'off',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
      ],

      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-parameter-properties': 'off',

      '@typescript-eslint/no-shadow': [
        'off',
        {
          hoist: 'all',
        },
      ],

      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/quotes': 'off',
      '@typescript-eslint/semi': ['off', null],

      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          path: 'always',
          types: 'prefer-import',
          lib: 'always',
        },
      ],

      '@typescript-eslint/type-annotation-spacing': 'off',
      '@typescript-eslint/typedef': 'off',
      '@typescript-eslint/unified-signatures': 'error',
      'arrow-parens': ['off', 'always'],
      'brace-style': ['off', 'off'],
      'comma-dangle': 'off',
      complexity: 'off',
      'constructor-super': 'error',
      'dot-notation': 'off',
      'eol-last': 'off',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'id-denylist': 'off',
      'id-match': 'off',

      'import/order': [
        'off',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },

          'newlines-between': 'ignore',

          groups: [
            ['builtin', 'external', 'internal', 'unknown', 'object', 'type'],
            'parent',
            ['sibling', 'index'],
          ],

          distinctGroup: false,
          pathGroupsExcludedImportTypes: [],

          pathGroups: [
            {
              pattern: './',

              patternOptions: {
                nocomment: true,
                dot: true,
              },

              group: 'sibling',
              position: 'before',
            },
            {
              pattern: '.',

              patternOptions: {
                nocomment: true,
                dot: true,
              },

              group: 'sibling',
              position: 'before',
            },
            {
              pattern: '..',

              patternOptions: {
                nocomment: true,
                dot: true,
              },

              group: 'parent',
              position: 'before',
            },
            {
              pattern: '../',

              patternOptions: {
                nocomment: true,
                dot: true,
              },

              group: 'parent',
              position: 'before',
            },
          ],
        },
      ],

      indent: 'off',
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      'linebreak-style': 'off',
      'max-classes-per-file': ['error', 1],
      'max-len': 'off',
      'new-parens': 'off',
      'newline-per-chained-call': 'off',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-console': 'off',
      'no-debugger': 'error',
      'no-empty': 'off',
      'no-empty-function': 'off',
      'no-eval': 'error',
      'no-extra-semi': 'off',
      'no-fallthrough': 'off',
      'no-invalid-this': 'off',
      'no-irregular-whitespace': 'off',
      'no-multiple-empty-lines': 'off',
      'no-new-wrappers': 'error',
      'no-shadow': 'off',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'off',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'off',
      'no-unsafe-finally': 'error',
      'no-unused-expressions': 'off',
      'no-unused-labels': 'error',
      'no-use-before-define': 'off',
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': ['off', 'never'],

      'padded-blocks': [
        'off',
        {
          blocks: 'never',
        },
        {
          allowSingleLineBlocks: true,
        },
      ],

      'prefer-arrow/prefer-arrow-functions': 'error',
      'prefer-const': 'error',
      'quote-props': 'off',
      quotes: 'off',
      radix: 'error',
      'react/jsx-curly-spacing': 'off',
      'react/jsx-equals-spacing': 'off',

      'react/jsx-tag-spacing': [
        'off',
        {
          afterOpening: 'allow',
          closingSlash: 'allow',
        },
      ],

      'react/jsx-wrap-multilines': 'off',
      semi: 'off',
      'space-before-function-paren': 'off',
      'space-in-parens': ['off', 'never'],

      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],

      'use-isnan': 'error',
      'valid-typeof': 'off',
    },
  },
]
