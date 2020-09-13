import React, {FunctionComponent, useState} from 'react';
import Avatar          from '@material-ui/core/Avatar';
import Button          from '@material-ui/core/Button';
import CssBaseline     from '@material-ui/core/CssBaseline';
import TextField       from '@material-ui/core/TextField';
import Link            from '@material-ui/core/Link';
import Box             from '@material-ui/core/Box';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typography      from '@material-ui/core/Typography';
import {makeStyles}    from '@material-ui/core/styles';
import Container       from '@material-ui/core/Container';
import {CustomTheme}   from '@theme/index';
import {schema}        from '@pages/contact/validations';

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles<CustomTheme>((theme) =>
	({
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: theme.palette.secondary.main,
		},
		form: {
			width: '100%', // Fix IE 11 issue.
			marginTop: theme.spacing(1),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
	})
);

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://docutec.vercel.app/">
				Docutec Mdp
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const Contact: FunctionComponent<Props> = (props) => {

	const classes = useStyles()
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = async (e: any) => {
		e.preventDefault()

		try {
			await schema.validate({ name, email })
			window.open(`mailto:marcelo.docutec@gmail.com?subject=${subject}&body=${message}`)
		}catch (e) {
			console.log('err validations', e)
		}

	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline/>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<ContactMailIcon/>
				</Avatar>
				<Typography component="h1" variant="h5">
					Contactanos
				</Typography>
				<form className={classes.form} onSubmit={sendEmail} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="name"
						label="Tu nombre"
						name="name"
						value={name}
						onChange={({target}) => setName(target.value)}
						autoComplete="name"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						value={email}
						onChange={({target}) => setEmail(target.value)}
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="subject"
						label="Asunto"
						name="subject"
						value={subject}
						onChange={({target}) => setSubject(target.value)}
						autoComplete="subject"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="message"
						label="Mensaje"
						name="message"
						value={message}
						onChange={({target}) => setMessage(target.value)}
						autoComplete="message"
						autoFocus
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Enviar
					</Button>
				</form>
			</div>
			<Box mt={8}>
				<Copyright/>
			</Box>
		</Container>
	);
};

export default Contact;