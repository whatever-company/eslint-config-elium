'use strict'

module.exports = {
	extends: ['standard', 'standard-react'],
	plugins: ['react', 'promise'],
	rules: {
		'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': 'error',
		'object-property-newline': 0,
		'object-curly-spacing': ['error', 'always'],
		'max-len': ['warn', 120],
		semi: 'off',
		'babel/semi': ['error', 'never'],
		indent: [2, 'tab'],
		'max-len': [2, 120, 2],
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
