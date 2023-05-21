import { Component } from 'react';
import { connect } from 'react-redux';

import reviews from '../../assets/constants/data.json';
import { HeaderState } from '../../store/reducers/headerReducer';

import { Review } from '..';

import styles from './Main.module.scss';

type MainProps = {
  lang: 'ru' | 'en';
};

type MainState = {
  reviewsKeys: ReviewKey[];
  reviewsCount: number;
};

type ReviewKey = keyof typeof reviews.ru;

class Main extends Component<MainProps, MainState> {
  state = {
    reviewsKeys: Object.keys(reviews.ru) as ReviewKey[],
    reviewsCount: 10,
  };

  render() {
    const { reviewsKeys, reviewsCount } = this.state;
    const { lang } = this.props;

    return (
      <main className={styles.main}>
        <div className={styles['button-wrapper']}>
          <button
            className={
              reviewsCount === 10 ? styles.button_type_active : styles.button
            }
            onClick={() => this.setState({ reviewsCount: 10 })}
          >
            {lang === 'ru' ? 'Показать 10 отзывов' : 'Show 10 reviews'}
          </button>
          <button
            className={
              reviewsCount === Math.ceil(reviewsKeys.length / 2)
                ? styles.button_type_active
                : styles.button
            }
            onClick={() =>
              this.setState({
                reviewsCount: Math.ceil(reviewsKeys.length / 2),
              })
            }
          >
            {lang === 'ru'
              ? 'Показать половину отзывов'
              : 'Show half of\u00A0the\u00A0reviews'}
          </button>
          <button
            className={
              reviewsCount === reviewsKeys.length
                ? styles.button_type_active
                : styles.button
            }
            onClick={() => this.setState({ reviewsCount: reviewsKeys.length })}
          >
            {lang === 'ru' ? 'Показать все отзывы' : 'Show all reviews'}
          </button>
        </div>
        <ul className={styles.reviews}>
          {reviewsKeys.slice(0, reviewsCount).map(key => {
            const { name, review, date } = reviews[lang][key];

            return <Review key={key} review={{ name, review, date }} />;
          })}
        </ul>
        <p className={styles['reviews-count']}>
          {reviewsCount}/{reviewsKeys.length}
        </p>
      </main>
    );
  }
}

const mapStateToProps = (state: { header: HeaderState }) => ({
  lang: state.header.lang,
});

export default connect(mapStateToProps)(Main);
