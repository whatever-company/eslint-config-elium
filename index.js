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
	plugins: ['graphql', 'react', 'prettier', 'standard'],
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
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
				varsIgnorePattern: '^debug'
			}
		]
	}
}
