import { Component } from 'react';

import { Header, Main } from '..';

import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Main />
      </div>
    );
  }
}
export default App;
