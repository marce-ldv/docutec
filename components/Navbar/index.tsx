import React, { FunctionComponent } from 'react';
import Link from 'next/link'

interface OwnProps {}

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = (props) => {

  return (
		<nav>
			<menu>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
			</menu>
		</nav>
	);
};

export default Navbar;