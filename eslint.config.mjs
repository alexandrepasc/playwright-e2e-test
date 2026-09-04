import eslint from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import tsDoc from 'eslint-plugin-tsdoc';
import tsEslint from 'typescript-eslint';
import tsStyle from '@stylistic/eslint-plugin';

export default [
	{
		ignores: [
			'**/node_modules',
			'**/.vscode',
			'**/scripts',
			'**/test-results',
			'**/playwright-report',
			'.commitlintrc.ts'
		],
	},
	eslint.configs.recommended,
	...tsEslint.configs.recommended,
	{
		files: ['tests/**'],
		...playwright.configs['flat/recommended'],
		rules: {
			'playwright/expect-expect': [
				'error'
			]
		}
	},
	{
		files: [
			'**/*.ts',
			'**/*tsx',
			'**/*.js',
			'**/*.mjs'
		],
		plugins: {
			'@typescript-eslint': tsEslint.plugin,
			tsDoc,
			'@stylistic/ts':      tsStyle,
		},
		languageOptions: {
			parser:        tsEslint.parser,
			parserOptions: {project: true,},
		},
		rules: {
			indent: [
				'error',
				'tab'
			],
			'linebreak-style': [
				'error',
				'unix'
			],
			quotes: [
				'error',
				'single'
			],
			semi: [
				'error',
				'always'
			],
			camelcase: [
				'error'
			],
			curly: [
				'error',
				'all'
			],
			'max-len': [
				'error',
				{'code': 150}
			],
			'no-mixed-spaces-and-tabs': [
				'error'
			],
			'no-trailing-spaces': [
				'error'
			],
			'no-multiple-empty-lines': [
				'error',
				{
					'max':    1,
					'maxBOF': 0,
					'maxEOF': 1
				}
			],
			'object-curly-newline': [
				'error',
				{'multiline': true}
			],
			'@typescript-eslint/typedef': [
				'error',
				{
					'variableDeclaration':               true,
					'variableDeclarationIgnoreFunction': false,
					'arrowParameter':                    true,
					'parameter':                         true,
					'propertyDeclaration':               true
				}
			],
			'operator-linebreak': [
				'error',
				'after'
			],
			'dot-location': [
				'error',
				'property'
			],
			'comma-spacing': [
				'error',
				{
					'before': false,
					'after':  true
				}
			],
			'func-call-spacing': [
				'error',
				'never'
			],
			'key-spacing': [
				'error',
				{
					'align':      'value',
					'afterColon': true
				}
			],
			'newline-per-chained-call': [
				'error',
				{'ignoreChainWithDepth': 1}
			],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					'selector': [
						'variable',
						'function'
					],
					'format': [
						'camelCase'
					],
					'leadingUnderscore':  'forbid',
					'trailingUnderscore': 'forbid'
				}
			],
			'sort-imports': [
				'error',
				{
					'ignoreCase':            true,
					'ignoreDeclarationSort': false,
					'ignoreMemberSort':      false,
					'memberSyntaxSortOrder': [
						'none',
						'all',
						'single',
						'multiple'
					],
					'allowSeparatedGroups': true
				}
			],
			'@stylistic/ts/padding-line-between-statements': [
				'error',
				{
					'blankLine': 'always',
					'prev':      'expression',
					'next':      'expression'
				},
				{
					'blankLine': 'always',
					'prev':      'if',
					'next':      'if'
				},
				{
					'blankLine': 'always',
					'prev':      'expression',
					'next':      'if'
				},
				{
					'blankLine': 'always',
					'prev':      'if',
					'next':      'expression'
				},
				{
					'blankLine': 'always',
					'prev':      'var',
					'next':      'if'
				},
				{
					'blankLine': 'always',
					'prev':      'if',
					'next':      'var'
				},
				{
					'blankLine': 'always',
					'prev':      'const',
					'next':      'if'
				},
				{
					'blankLine': 'always',
					'prev':      'if',
					'next':      'const'
				},
				{
					'blankLine': 'always',
					'prev':      'let',
					'next':      'if'
				},
				{
					'blankLine': 'always',
					'prev':      'if',
					'next':      'let'
				},
				{
					'blankLine': 'always',
					'prev':      'var',
					'next':      'expression'
				},
				{
					'blankLine': 'always',
					'prev':      'let',
					'next':      'expression'
				},
				{
					'blankLine': 'always',
					'prev':      'const',
					'next':      'expression'
				},
				{
					'blankLine': 'always',
					'prev':      'expression',
					'next':      'var'
				},
				{
					'blankLine': 'always',
					'prev':      'expression',
					'next':      'let'
				},
				{
					'blankLine': 'always',
					'prev':      'expression',
					'next':      'const'
				}
			],
		},
	},
];
