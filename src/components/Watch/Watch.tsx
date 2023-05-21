import { Component } from 'react';
import { connect } from 'react-redux';

import { UpdateTime, updateTime } from '../../store/actions/headerActions';
import { HeaderState } from '../../store/reducers/headerReducer';

import styles from './Watch.module.scss';

type WatchProps = {
  header: HeaderState;
  updateTime: UpdateTime;
};

type WatchState = {
  timerId: number;
};

class Watch extends Component<WatchProps, WatchState> {
  state = { timerId: 0 };

  componentDidMount = (): void => {
    this.setState({
      timerId: setInterval(this.updateTimer, 500),
    });
  };

  componentWillUnmount = (): void => {
    clearInterval(this.state.timerId);
  };

  updateTimer = (): void => {
    this.props.updateTime(
      new Date().toLocaleTimeString(this.props.header.lang)
    );
  };

  render() {
    const { time } = this.props.header;

    return <p className={styles.watch}>{time}</p>;
  }
}

const mapStateToProps = (state: { header: HeaderState }) => ({
  header: state.header,
});

export default connect(mapStateToProps, { updateTime })(Watch);
