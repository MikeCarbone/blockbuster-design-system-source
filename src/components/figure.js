import React from 'react';
import styled from 'styled-components';

const Fig = props => {
    const maxHeight = props.maxHeight ? props.maxHeight : 'initial';
    const maxWidth = props.maxWidth ? props.maxWidth : 'initial';

    const Fig = styled.figure`
        display: block;
        height: 100%;
    `;
    
    let Img = styled.img`
        border-radius: var(--borderRadius);
        display: block;
        height: 500px;
        max-height: ${maxHeight};
        max-width: ${maxWidth};
        object-fit: cover;
        width: 100%;
        `;

if (props.full) {
    Img = styled.img`
            height: 100%;
            left: 0;
            position: absolute;
            object-fit: cover;
            object-position: center;
            top: 0;
            width: 100%;
            z-index: -1000;
            `;
    }
    
    
    const FigCaption = styled.figcaption``;
    
    const cap = props.withCaption ? <FigCaption>{props.caption}</FigCaption> : null;
    
    const ShadeEl = styled.div`
        background-color: black;
        height: 100%;
        left: 0;
        position: absolute;
        object-fit: cover;
        object-position: center;
        opacity: .35;
        top: 0;
        width: 100%;
        z-index: -999;
        `;

const Shade = props.shade
? <ShadeEl></ShadeEl>
: <div></div>;

return (
    <Fig>
            {Shade}
            <Img src={props.src} alt={props.caption} />
            {cap}
        </Fig>
    )
}

export default Fig;
