'use strict'

module.exports = {
	extends: ['standard', 'standard-react'],
	plugins: ['react', 'promise'],
	rules: {
		indent: ['error', 'tab'],
		'max-len': ['error', { code: 120, tabWidth: 2 }],
		quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
		semi: 'off',
		'object-curly-spacing': ['error', 'always'],
		'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': 'error',
		'object-property-newline': 0,
		'babel/semi': ['error', 'never'],
		'no-extra-semi': 0,
		'no-mixed-operators': 'off',
		'no-useless-return': 'off',
		'prefer-promise-reject-errors': 'warn',
		'react/prop-types': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/no-unused-prop-types': 1,
		'standard/no-callback-literal': 'off',
		'generator-star-spacing': 1,
		'jsx-quotes': [2, 'prefer-single'],
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-unused-vars': [
			1,
			{
				args: 'none',
				vars: 'local',
				varsIgnorePattern: '^debug'
			}
		]
	}
}
