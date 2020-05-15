import React from 'react';
import styled from 'styled-components';

const VertSpace = props => {
    let Div = styled.div`
        height: 35px;
        width: 100%;
    `;

    if (props.med) {
        Div = styled.div`
            height: 50px;
            width: 100%;
        `;
    }

    if (props.med) {
        Div = styled.div`
            height: 100px;
            width: 100%;
        `;
    }

    return (
        <Div />
    );
}

export default VertSpace;
