import React, { FunctionComponent } from 'react';
import Navbar from '@components/organisms/Navbar';
import Footer from '@components/molecules/Footer/footer';
import { container } from '@templates/container.module.scss';

interface Props {
}

const Layout: FunctionComponent<Props> = ({ children }) => {

	return (
		<>
			<Navbar />
				<div className={container}>
					{children}
				</div>
			<Footer />
		</>
	);
};

export default Layout;