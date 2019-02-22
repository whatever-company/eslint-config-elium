'use strict'

module.exports = {
	extends: [
		'standard',
		'standard-react',
		'plugin:react/recommended',
		'prettier',
		'prettier/react',
		'prettier/standard'
	],
	plugins: ['graphql', 'react', 'prettier', 'standard', 'react-hooks'],
	settings: {
		react: {
			version: '16.4'
		}
	},
	rules: {
		// Don't use import/no-duplicates as it's quite slow and we don't use Flow
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md#when-not-to-use-it
		'import/no-duplicates': false,
		'no-duplicate-imports': 'error',
		'prettier/prettier': 'error',
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'react/no-find-dom-node': 'off',
		'no-useless-return': 'off',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-unused-vars': [
			'warn',
			{
				args: 'none',
				vars: 'local',
				varsIgnorePattern: '^debug|^_+$'
			}
		],
		"react-hooks/rules-of-hooks": 'error',
		"react-hooks/exhaustive-deps": 'error'
	}
}
