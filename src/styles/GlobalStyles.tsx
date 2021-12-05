import { Global, css } from '@emotion/react';

const styles = css({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	},
	html: {
		'&::-webkit-scrollbar': {
			width: '0.5rem',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'darkgrey',
		},
		'&::-webkit-scrollbar-track': {
			background: 'white',
		},
	},
	body: {
		fontFamily: `'Montserrat', sans-serif`,
		width: '100%',
		height: '100vh',
		color: '#5a5d60',
	},
});

export const GlobalStyles = () => <Global styles={styles} />;
