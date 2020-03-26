import React from 'react';
import { CSSTransition } from 'react-transition-group';

const CustomizedTransition = (props) => {
    const { children, timeout, classNames } = props;
    return (  
        <CSSTransition
            in={true}
            appear={true}
            timeout={timeout}
            classNames={classNames}
        >
            {children}
        </CSSTransition>
    );
}
 
export default CustomizedTransition;