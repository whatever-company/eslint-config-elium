'use strict'

module.exports = {
	extends: [
		'standard',
		'standard-react',
		'plugin:react/recommended',
		'prettier',
	],
	plugins: ['graphql', 'react', 'prettier', 'standard', 'react-hooks'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	// "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
	rules: {
		// Don't use import/no-duplicates as it's quite slow and we don't use Flow
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md#when-not-to-use-it
		'import/no-duplicates': 0,
		'no-duplicate-imports': 2,
		'prettier/prettier': 2,
		'react/no-danger': 2,
		'react/prop-types': 0,
		'react/display-name': 0,
		'react/no-find-dom-node': 0,
		'react/jsx-boolean-value': 2,
		'no-useless-return': 0,
		'no-console': [2, { allow: ['warn', 'error'] }],
		'no-unused-vars': [
			2,
			{
				args: 'none',
				vars: 'local',
				varsIgnorePattern: '^h|debug|^_+$',
			},
		],
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1,
		'react/jsx-fragments': [2, 'element'], // elium-i18n doesn't handle fragment syntax
		'react/jsx-handler-names': 0,
		'react/jsx-pascal-case': 0,
		'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
	},
}
