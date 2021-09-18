import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

// import Navb from 'react-bootstrap/Navbar'
import styles from './styles.module.scss';

interface Props {
}

const Navbar: FunctionComponent<Props> = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand"><img src="/assets/docutec2.webp" alt="docutec-logo" width={150}/></a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="home">Inicio</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/products">
                <a className="nav-link active" aria-current="products">Productos</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link active" aria-current="products">Contacto</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
