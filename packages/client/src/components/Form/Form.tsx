import { ErrorBoundary } from '../ErrorBoundary';
import styles from './Form.module.scss';
import { Props } from './types';

export const Form = ({ children, actions, onSubmit }: Props): JSX.Element => (
  <ErrorBoundary>
    <form onSubmit={onSubmit}>
      <div>
        <div className={styles.form_group}>
          <div className={styles.form_inputs_buttons}>
            <div className={styles.form_inputs}>{children}</div>
            <div className={styles.form_buttons}>{actions}</div>
          </div>
        </div>
      </div>
    </form>
  </ErrorBoundary>
);
