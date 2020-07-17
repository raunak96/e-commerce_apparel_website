import React from 'react';
import "./custom-button.styles";
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton=({children,...props})=>(
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;