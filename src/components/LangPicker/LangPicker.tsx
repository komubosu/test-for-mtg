import { ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';

import { UpdateLang, updateLang } from '../../store/actions/headerActions';
import { HeaderState } from '../../store/reducers/headerReducer';

import styles from './LangPicker.module.scss';

type LangPickerProps = {
  updateLang: UpdateLang;
};

class LangPicker extends Component<LangPickerProps> {
  handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.props.updateLang(e.target.value);
  };

  render() {
    return (
      <select onChange={this.handleChange} className={styles.select}>
        <option value='ru'>RU</option>
        <option value='en'>EN</option>
      </select>
    );
  }
}

const mapStateToProps = (state: { header: HeaderState }) => ({
  header: state.header,
});

export default connect(mapStateToProps, { updateLang })(LangPicker);
