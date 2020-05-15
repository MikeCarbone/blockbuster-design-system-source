import React from 'react';

import Box from './box';
import Copy from './copy';
import Figure from './figure';
import Heading from './heading';
import Section from './section';

const RowPicText = props => {
    let flipAdjustedContent = props.flip
        ? (
            <>
                <div>
                    <Heading size="3">{props.heading}</Heading>
                    <Copy>{props.copy}</Copy>
                </div>
                <Figure maxWidth="400px" maxHeight="300px" src={props.imgSrc} caption={props.imgCaption}></Figure>
            </>
          )
        : (
            <>
                <Figure maxWidth="400px" maxHeight="300px" src={props.imgSrc} caption={props.imgCaption}></Figure>
                <div>
                    <Heading size="3">{props.heading}</Heading>
                    <Copy>{props.copy}</Copy>
                </div>
            </>
          );
    
    return (
        <Section>
            <Box betweenFlex>
                {flipAdjustedContent}
            </Box>
        </Section>
    );
}

export default RowPicText;
