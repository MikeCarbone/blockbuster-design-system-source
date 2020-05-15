import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    padding: 50px 0;
`;

const Section = props => (
    <Div>
        {props.children}
    </Div>
);

export default Section;
