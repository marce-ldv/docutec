import React, {FunctionComponent} from 'react';
import Navbar                     from '@components/Navbar';
import Footer                     from '@components/Footer/footer';
import {Container}          from '@material-ui/core';


interface OwnProps {
}

type Props = OwnProps;

const Layout: FunctionComponent<Props> = ({children}) => {

	return (
		<>
			<Navbar/>
			<Container style={{ marginTop: '64px' }}>
				<div>
					{children}
				</div>
			</Container>
			<Footer/>
		</>
	);
};

export default Layout;