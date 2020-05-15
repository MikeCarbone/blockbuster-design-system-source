import React from 'react';
import styled from 'styled-components';

import Box from './box';
import Wrapper from './wrapper';
import Section from './section';

const Foot = styled.footer`
    background-color: #000;
`;

const FooterLink = styled.a`
    color: gray;
    font-weight: 200;
    text-decoration: none;
    transition: var(--transition);

    &:hover{
        color: #FFF;
        transition: var(--transition);
    }
`;

const Footer = props => (
    <Foot>
        <Wrapper>
            <Section>
                <Box betweenFlex>
                    <FooterLink href="#">Home</FooterLink>
                    <FooterLink href="#">About</FooterLink>
                    <FooterLink href="#">Story</FooterLink>
                    <FooterLink href="#">Read</FooterLink>
                </Box>
            </Section>
        </Wrapper>
    </Foot>
);

export default Footer;