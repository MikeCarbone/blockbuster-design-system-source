import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    color: var(--white);
    font-family: var(fontMain);
    font-size: var(fontCopy);
    font-weight: 300;
    line-height: 1.7;
    margin: 35px 0;
    max-width: 750px;
`;

const Copy = props => (
    <P>{props.children}</P>
);

export default Copy;
