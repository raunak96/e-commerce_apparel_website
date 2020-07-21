import React from 'react';
import Spinner from '../spinner/spinner.component';


/*  If the page is loading say shop page as it is getting data from fireStore, then isLoading prop will be true and Spinner Element will be rendered
    which just displays Loading Spinner animation other original Component intended (wrappedComponent) will be rendered..

    Hence, this Component is a HOC which transforms the wrapped Component
*/
const WithSpinner= WrappedComponent=>({isLoading,...otherProps})=>{
    return isLoading ? (
        <Spinner />
    ) : (
        <WrappedComponent {...otherProps}></WrappedComponent>
    );
};

export default WithSpinner;