import React from 'react';
import styled from 'styled-components';

const HeadingEl = props => {
    const size = props.size ? props.size : 1;
    let Heading;
    switch (size.toString()) {
      case '1':
        Heading = styled.h1`
            color: var(--white);
            font-size: var(--fontHuge);
            font-family: var(--fontDecorative);
            letter-spacing: 3px;
            line-height: 1;
        `;
        break;
        
    case '2':
        Heading = styled.h2`
            color: var(--white);
            font-size: var(--fontBig);
        `;
        break;
        
    case '3':
        Heading = styled.h3`
            color: var(--white);
            font-size: var(--fontBig);
            font-weight: 400;
        `;
        break;
        
      default:
        Heading = styled.h1`
            color: var(--white);
            font-size: var(--fontHuge);
        `;
        break;
    }
    return(
        <Heading>
            {props.children}
        </Heading>
    );
}

export default HeadingEl;
