import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Scroll = (props) => {
    console.log(props.children);
    
    return (
        <div style={{overflow: 'scroll', border: '1px solid black', height: '800px'}} >
            {props.children}
        </div>
    );
}

export default Scroll;
