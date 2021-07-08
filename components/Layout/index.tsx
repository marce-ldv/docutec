import React, {FunctionComponent} from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer/footer';


interface OwnProps {
}

type Props = OwnProps;

const Layout: FunctionComponent<Props> = ({children}) => {

	return (
		<>
			<Navbar/>
			<div style={{ marginTop: '64px' }}>
					{children}
			</div>
			<Footer/>
		</>
	);
};

export default Layout;