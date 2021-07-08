import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

// const useStyles = makeStyles<CustomTheme>((theme) =>
// 	({
// 		root: {
// 			display: 'flex',
// 			flexDirection: 'column',
// 			minHeight: '100vh',
// 		},
// 		main: {
// 			marginTop: theme.spacing(8),
// 			marginBottom: theme.spacing(2),
// 		},
// 		footer: {
// 			padding: theme.spacing(3, 2),
// 			marginTop: 'auto',
// 			backgroundColor:
// 				theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
// 		},
// 	})
// );

function Copyright() {
	return (
		<div>
      <div>Footer</div>
		</div>
	);
}

const Footer: FunctionComponent<Props> = (props) => {
	return (
		<div>
			<footer>
				<div>
					<p>Mas informacion acerca de Docutec mdp.</p>
					<Copyright/>
				</div>
			</footer>
		</div>
	);
};

export default Footer;