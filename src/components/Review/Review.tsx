import { Component } from 'react';

import styles from './Review.module.scss';

type ReviewProps = {
  review: {
    name: string;
    review: string;
    date: string;
  };
};

class Review extends Component<ReviewProps> {
  render() {
    const { name, review, date } = this.props.review;

    return (
      <li className={styles.review}>
        <p>{name}</p>
        <p>{review}</p>
        <p>{date}</p>
      </li>
    );
  }
}

export default Review;
