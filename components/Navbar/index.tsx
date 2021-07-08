import React, { useState, FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface OwnProps {
}

type Props = OwnProps;

const NavbarC: FunctionComponent<Props> = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavbarContainer>
			<Link href="/">
				<NavItem>Inicio</NavItem>
			</Link>
			<Link href="/products">
				<NavItem>Productos</NavItem>
			</Link>
			<Link href="/contact">
				<NavItem>Contact</NavItem>
			</Link>
			<Link href="/about">
				<NavItem>Acerca de</NavItem>
			</Link>
		</NavbarContainer>
	);
}

export default NavbarC;

export const NavbarContainer = styled.nav`
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 1;
	height: 3.5rem;
	background-color: ${({ theme }) => theme.primary};
	/* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavItem = styled.nav`
	font-size: 18px;
	color: ${({ theme }) => theme.text}
`;
