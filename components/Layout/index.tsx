import React, {FunctionComponent} from 'react';
import Navbar                     from '@components/Navbar';


interface OwnProps {
}

type Props = OwnProps;

const Layout: FunctionComponent<Props> = ({children}) => {

	return (
		<div>
			<Navbar/>
			{children}
		</div>
	);
};

export default Layout;