import React from 'react';
import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
    };
    /* This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and 
    should return a value to update state. Called during the “render” phase, so side-effects are not permitted */

    static getDerivedStateFromError(error) {
        return { hasError: true }; //sets state to show error has occured
    }

    /* componentDidCatch() is called during the “commit” phase, so side-effects are permitted. It should be used for things like logging errors */
    componentDidCatch(error, info) {
        console.log(info);
    }

    render(){
        return this.state.hasError ? (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl="https://i.imgur.com/qIufhof.png" />
                <ErrorImageText>Sorry this page is broken</ErrorImageText>
            </ErrorImageOverlay>
        ) : (
            this.props.children
        );
    }
}

export default ErrorBoundary;