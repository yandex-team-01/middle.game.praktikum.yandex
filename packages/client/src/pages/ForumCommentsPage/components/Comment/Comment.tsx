import React from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import styles from './Comment.module.scss';
import { Props } from './types';
import avatar from 'src/assets/images/avatar/variant3.png';
import { AiFillStar } from 'react-icons/ai';
import { Column } from 'src/pages/Forum/components/Column/Column';

export const Comment = (props: Props) => {
  const { comment } = props;

  return (
    <BlankWindow className={styles.card}>
      <div className={styles.block_author}>
        <img src={avatar} className={styles.avatar} />
        <div className={styles.author}>{comment.author}</div>
      </div>
      <div className={styles.comments}>
        <div>{comment.date}</div>
        <div className={styles.count}>{comment.text}</div>
      </div>
      <Column title={comment.likes}>
        <AiFillStar />
      </Column>
    </BlankWindow>
  );
};
