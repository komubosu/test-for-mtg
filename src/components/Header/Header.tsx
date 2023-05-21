import { Component } from 'react';

import ReactLogo from '../../assets/images/react-logo.svg';

import { LangPicker, Watch } from '..';

import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <ReactLogo className={styles.logo} />
        <Watch />
        <LangPicker />
      </header>
    );
  }
}

export default Header;
