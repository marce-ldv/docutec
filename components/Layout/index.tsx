import React, { FunctionComponent } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer/footer';

interface Props {}

const Layout: FunctionComponent<Props> = ({ children }) => {

	return (
		<>
			<div className="layout-container">
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;