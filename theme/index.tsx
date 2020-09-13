import {createMuiTheme, Theme} from '@material-ui/core/styles';

const materialtheme = createMuiTheme({
	palette: {},
});

const customTheme = {
	colors: {
		main: '#3f51b5',
	},
	font: {},
	customSpacing: {},
} as const

function createCustomTheme() {
	return {...materialtheme, ...customTheme}
}

export type CustomTheme = Theme & ReturnType<typeof createCustomTheme>;

const theme = createCustomTheme()

export default theme