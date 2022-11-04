import React, { ErrorInfo } from 'react';
import { Props, State } from './types';

export class ErrorBoundary extends React.Component<Props, State> {
    message = 'Sorry, there was an error';

    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>{this.message}</div>;
        }

        return this.props.children;
    }
};
