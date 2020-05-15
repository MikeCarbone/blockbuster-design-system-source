import React from 'react';
import styled from 'styled-components';
import { inheritTrailingComments } from '@babel/types';


const Box = props => {
    const maxHeight = props.maxHeight ? props.maxHeight : 'initial';
    const minHeight = props.minHeight ? props.minHeight : 'initial';

    let Div = styled.div`
        max-height: ${maxHeight};
        min-height: ${minHeight};
        width: 100%;
        `;;

if (props.flex) {
    Div = styled.div`
            align-items: center;
            display: flex;
            max-height: ${maxHeight};
            min-height: ${minHeight};
            position: relative;
            width: 100%;
            `;
    }
    
    if (props.betweenFlex) {
        Div = styled.div`
            align-items: center;
            display: flex;
            justify-content: space-between;
            max-height: ${maxHeight};
            min-height: ${minHeight};
            position: relative;
            width: 100%;
            `;
    }
    
    if (props.centerFlex) {
        Div = styled.div`
            align-items: center;
            display: flex;
            justify-content: center;
            max-height: ${maxHeight};
            min-height: ${minHeight};
            position: relative;
            width: 100%;
        `;
    }

    return (
        <Div>
            {props.children}
        </Div>
    );
}

export default Box;
