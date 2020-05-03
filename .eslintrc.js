module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		strict: process.env.NODE_ENV === 'production' ? 'off' : 'error', // com strict mode
		quotes: process.env.NODE_ENV === 'production' ? 'off' : ['error', 'single', { avoidEscape: true }], // com aspas simples
		'spaced-comment': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'always'], // espaço depois de comentário
		'space-before-blocks': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'always'], // espaço antes de bloco de código
		indent: process.env.NODE_ENV === 'production' ? 'off' : ['error', 'tab'], // identação por tabulação
		semi: 'error', // sem ponto e vírgula
		'no-tabs': 0, // com tabulação
		curly: 'off', // if de somente 1 (um) comando pode não ter chaves
		'no-mixed-operators': 'off', // permite que os operadores '&&' e '||' possam ser usados misturados sem parênteses
		'no-unused-vars': 'off', // variáveis declaradas não precisam necessariamente ser usadas
		'require-atomic-updates': 'off', // permite ações sincronas independentes serem realizadas depois de await
		'no-mixed-spaces-and-tabs': 'off', // permite que espaços e tabulações sejam misturados
		'no-irregular-whitespace': 'off', // permite que qualquer tipo de espaço em branco ocorra em conjunto com outros
		'no-useless-escape': 'off', // não sei, mas se não estiver "off", pode dar problema em alguma coisa que não me importo
		'linebreak-style': 'off', // não se importar com LF ou CRLF
		'no-new': 'off', // Permite o uso do new sem atribuição
		eqeqeq: 'off' // Permite o uso do ==
		// 'no-eval': 'off', // permite a utilização do eval
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
