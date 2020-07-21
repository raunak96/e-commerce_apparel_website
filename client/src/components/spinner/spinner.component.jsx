import React from 'react';
import { SpinnerOverlay, SpinnerContainer,MessageContainer } from './spinner.styles';

const Spinner = () => (
    <SpinnerOverlay>
        <MessageContainer>Loading...Please Wait</MessageContainer>
        <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
);

export default Spinner;