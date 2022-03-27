import React, { FunctionComponent, useState } from 'react';
import { schema } from '@utils/validations/contactForm';
interface Props {
}

const Contact: FunctionComponent<Props> = (props) => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = async (e: Event) => {
		e.preventDefault()
		const mailTo = 'docutecmdp@yahoo.com';

		try {
			await schema.validate({ name, email });
			window.open(`mailto:${mailTo}?subject=${subject}&body=${message}`);
		} catch (e) {
			// set error message
			console.log('err validations', e);
		}

	}

	return (
		<div>
			{/* <Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<ContactMailIcon />
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
							onChange={({ target }) => setName(target.value)}
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
							onChange={({ target }) => setEmail(target.value)}
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
							onChange={({ target }) => setSubject(target.value)}
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
							onChange={({ target }) => setMessage(target.value)}
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
					<Copyright />
				</Box>
			</Container> */}
		</div>
	);
};

export default Contact;