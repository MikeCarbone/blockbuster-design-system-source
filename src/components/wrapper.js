import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
`;

const Wrapper = props => (
    <Wrap>
        {props.children}
    </Wrap>
);

export default Wrapper;
