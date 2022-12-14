import styles from './Form.module.scss';

import { ErrorBoundary } from '../ErrorBoundary';

import { Props } from './types';

export const Form = ({ children, buttonsBlock, onSubmit }: Props) => (
  <ErrorBoundary>
    <form onSubmit={onSubmit}>
      <div>
        <div className={styles.form_group}>
          <div className={styles.form_inputs_buttons}>
            <div className={styles.form_inputs}>{children}</div>
            <div className={styles.form_buttons}>{buttonsBlock}</div>
          </div>
        </div>
      </div>
    </form>
  </ErrorBoundary>
);
