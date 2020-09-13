import React, {FunctionComponent} from 'react';
import Navbar                     from '@components/Navbar';
import Footer                     from '@components/Footer/footer';


interface OwnProps {
}

type Props = OwnProps;

const Layout: FunctionComponent<Props> = ({children}) => {

	return (
		<div>
			<Navbar/>
			{children}
			<Footer />
		</div>
	);
};

export default Layout;