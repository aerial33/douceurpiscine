module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			outfit: ['Outfit', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#00040f',
				secondary: '#F36A8D',
				current: 'currentColor',
				transparent: 'transparent',
				white: '#FFFFFF',
				black: '#181C31',
				blacksection: '#1C2136',
				stroke: '#3C4556',
				strokedark: '#D8E1ED',
				body: '#79808A',
				whiter: '#F4F7FA',
				whiten: '#ECF0F5',
				'meta-green': '#20CA66',
				'meta-orange': '#FA9161',
			},
			screens: {
				xs: '480px',
				ss: '620px',
				sm: '768px',
				md: '1060px',
				lg: '1200px',
				xl: '1700px',
			},
			spacing: {
				4.5: '1.125rem',
				5.5: '1.375rem',
				6.5: '1.625rem',
				7.5: '1.875rem',
				8.5: '2.125rem',
				9.5: '2.375rem',
				10.5: '2.625rem',
				11.5: '2.875rem',
				12.5: '3.125rem',
				13: '3.25rem',
				13.5: '3.375rem',
				14.5: '3.625rem',
				15: '3.75rem',
				15.5: '3.875rem',
				16: '4rem',
				16.5: '4.125rem',
				17: '4.25rem',
				17.5: '4.375rem',
				18: '4.5rem',
				18.5: '4.625rem',
				19: '4.75rem',
				21: '5.25rem',
				21.5: '5.375rem',
				22: '5.5rem',
				22.5: '5.625rem',
				25: '6.25rem',
				26: '6.5rem',
				27: '6.75rem',
				27.5: '6.875rem',
				29: '7.25rem',
				29.5: '7.375rem',
				30: '7.5rem',
				32.5: '8.125rem',
				35: '8.75rem',
				36.5: '9.125rem',
				37.5: '9.375rem',
				40: '10rem',
				42.5: '10.625rem',
				45: '11.25rem',
				46: '11.5rem',
				47.5: '11.875rem',
				49: '12.25rem',
				50: '12.5rem',
				52: '13rem',
				55: '13.75rem',
				59: '14.75rem',
				60: '15rem',
				65: '16.25rem',
				67: '16.75rem',
				67.5: '16.875rem',
				90: '22.5rem',
				125: '31.25rem',
				171.5: '42.875rem',
				187.5: '46.875rem',
			},
			maxWidth: {
				1390: '86.875rem',
				1280: '80rem',
				550: '34.375rem',
			},
			zIndex: {
				99999: '99999',
				999: '999',
				1: '1',
			},
			opacity: {
				65: '.65',
			},
			transitionProperty: { width: 'width' },
			boxShadow: {
				1: '0px 10px 25px rgba(78, 107, 255, 0.2)',
				2: '0px 6px 90px rgba(8, 14, 40, 0.04)',
				3: '0px 8px 70px rgba(0, 0, 0, 0.05)',
				4: '0px 6px 30px rgba(0, 0, 0, 0.03)',
				5: '0px 6px 30px rgba(78, 107, 255, 0.1)',
				6: '0px 2px 10px rgba(0, 0, 0, 0.08)',
			},
			keyframes: {
				rotating: {
					'0%, 100%': { transform: 'rotate(360deg)' },
					'50%': { transform: 'rotate(0deg)' },
				},
			},
			animation: {
				rotating: 'rotating 30s linear infinite',
			},
		},
	},
	plugins: [],
}
