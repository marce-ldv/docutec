import React, { FunctionComponent } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer/footer';

interface Props {
}

const Layout: FunctionComponent<Props> = ({ children }) => {

	return (
		<>
			<Navbar />
				<div className="layout-container">
					{children}
				</div>
			<Footer />
		</>
	);
};

export default Layout;