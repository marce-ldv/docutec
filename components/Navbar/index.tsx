import React, { FunctionComponent } from 'react';
import Link from 'next/link';

interface Props {
}

const Navbar: FunctionComponent<Props> = (props) => {

	return (
		<nav className="navbar">
			<div className="container">

				<div className="navbar-header">
					<button className="navbar-toggler" data-toggle="open-navbar1">
						<span></span>
						<span></span>
						<span></span>
					</button>
					<Link href="/">
						<a className="navbar-logo"><img src="/assets/docutec2.webp" alt="docutec-logo" /></a>
					</Link>
				</div>

				<div className="navbar-menu" id="open-navbar1">
					<ul className="navbar-nav">
						<li className="active"><Link href="/">Inicio</Link></li>
						<li className="navbar-dropdown">
							<Link href="#">
								Marcas
							</Link>
						</li>
						<li className="navbar-dropdown">
							<Link href="/products">Productos</Link>
						</li>
						<li><Link href="/contact">Contacto</Link></li>
						<li><Link href="/about-us">Acerca de</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	)
};

export default Navbar;

// TODO: Refactor to use states

// let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
// let dropdownIsOpen = false

// // Handle dropdown menues
// if (dropdowns.length) {
// 	dropdowns.forEach((dropdown) => {
// 		dropdown.addEventListener('click', (event) => {
// 			let target = document.querySelector(`#${event.target.dataset.dropdown}`)

// 			if (target) {
// 				if (target.classList.contains('show')) {
// 					target.classList.remove('show')
// 					dropdownIsOpen = false
// 				} else {
// 					target.classList.add('show')
// 					dropdownIsOpen = true
// 				}
// 			}
// 		})
// 	})
// }

// // Handle closing dropdowns if a user clicked the body
// window.addEventListener('mouseup', (event) => {
// 	if (dropdownIsOpen) {
// 		dropdowns.forEach((dropdownButton) => {
// 			let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`)
// 			let targetIsDropdown = dropdown == event.target

// 			if (dropdownButton == event.target) {
// 				return
// 			}

// 			if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
// 				dropdown.classList.remove('show')
// 			}
// 		})
// 	}
// })

// // Open links in mobiles
// function handleSmallScreens() {
// 	document.querySelector('.navbar-toggler')
// 		.addEventListener('click', () => {
// 			let navbarMenu = document.querySelector('.navbar-menu')

// 			if (navbarMenu.style.display === 'flex') {
// 				navbarMenu.style.display = 'none'
// 				return
// 			}

// 			navbarMenu.style.display = 'flex'
// 		})
// }

// handleSmallScreens()