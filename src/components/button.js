import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
    background-color: var(--blue);
    color: white;
    display: inline-block;
    font-family: var(--fontDecorative);
    padding: 15px;
    cursor: pointer;
`;

const _Button = props => (
    <Button>{props.text}</Button>
);

export default _Button;
