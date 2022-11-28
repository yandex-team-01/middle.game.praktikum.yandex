import React, { ErrorInfo, Component } from 'react';
import { Props, State } from './types';
import styles from './ErrorBoundary.module.scss';

export class ErrorBoundary extends Component<Props, State> {
  message = 'Sorry, there was an error';

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className={styles.error}>{this.message}</div>;
    }

    return this.props.children;
  }
}
