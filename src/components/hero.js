import React from 'react';

import Box from './box';
import Button from './button';
import Heading from './heading';
import Figure from './figure';
import VertSpace from './vertSpace';
import Wrapper from './wrapper';

const Hero = props => {

    return (
        <Box minHeight="600px" betweenFlex>
            <Figure shade full src={props.imgSrc} caption="A random unsplash picture." />
            <Wrapper>
                <Box>
                    <Heading>{props.title}</Heading>
                    <VertSpace small />
                    <Heading size="3">{props.subtitle}</Heading>
                    <VertSpace small />
                    <Button text={props.buttonText}/>
                </Box>
            </Wrapper>
        </Box>
    );
}

export default Hero;