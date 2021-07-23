import React, { FunctionComponent } from 'react';
import Link from 'next/link';

interface Props {
}

const Navbar: FunctionComponent<Props> = (props) => {

	return (
		<header className="header-container">
			<div className="navbar-section">
				<div className="navbar-container">
					<nav className="navbar">
						<Link href="/">
							<a className="site-logo"><img src="/assets/docutec2.webp" alt="docutec-logo" /></a>
						</Link>
						<ul>
							<li>
								<Link href="/">
									<a>Inicio</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>Productos</a>
								</Link>
							</li>
							<li>
								<Link href="/contact">
									<a>Contacto</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
};

export default Navbar;
