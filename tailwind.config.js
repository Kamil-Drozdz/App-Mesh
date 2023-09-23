module.exports = {
	content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.tsx'],
	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				lightBlue: '#31375a',
				mediumBlue: '#283046',
				darkBlue: '#161d31',
				lightGray: '#babbbe',
			},
			screens: {
				'light-mode': { raw: '(prefers-color-scheme: light)' },
				'dark-mode': { raw: '(prefers-color-scheme: dark)' },
				phone: { raw: '(max-width: 768px)' },
				desktop: { raw: '(min-width: 1024px)' },
				tablet: { raw: '(max-width: 1023px)' },
			},
		},
	},

	plugins: [],
};
