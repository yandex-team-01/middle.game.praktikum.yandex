import React from 'react';
import { BlankWindow } from 'src/components/BlankWindow';
import styles from './Comment.module.scss';
import { Props } from './types';
import avatar from 'src/assets/images/avatar/variant3.png';
import { AiFillStar } from 'react-icons/ai';
import { Column } from 'src/pages/Forum/part/Column/Column';
import { AuthorBlock } from '../AuthorBlock';
import { CommentAbstract } from '../CommentAbstract';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

export const Comment = (props: Props) => {
  const { comment } = props;

  return (
    <ErrorBoundary>
      <BlankWindow className={styles.card}>
        <AuthorBlock avatar={avatar} author={comment.id_author} />
        <CommentAbstract text={comment.text} date={comment.date} />
        <Column title={comment.likes}>
          <AiFillStar />
        </Column>
      </BlankWindow>
    </ErrorBoundary>
  );
};
