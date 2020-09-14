import React, {FunctionComponent} from 'react';
import Navbar                     from '@components/Navbar';
import Footer                     from '@components/Footer/footer';
import {Grid}                     from '@material-ui/core';


interface OwnProps {
}

type Props = OwnProps;

const Layout: FunctionComponent<Props> = ({children}) => {

	return (
		<>
			<Grid container justify={'center'} style={{marginTop: '64px'}}>
				<Grid item xs={12} md={10} lg={10}>
					<Navbar/>
					{children}
				</Grid>
			</Grid>
			<Footer/>
		</>
	);
};

export default Layout;