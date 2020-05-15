import React from 'react';
import GlobalStyle from './components/_global';

import Footer from './components/footer';
import Hero from './components/hero';
import Wrapper from './components/wrapper';
import RowPicText from './components/row-pic-text';

const App = () => (
    <>
      <GlobalStyle />
      
      <Hero
        title="The New Blockbuster"
        subtitle="Bigger, badder, newer"
        imgSrc="https://source.unsplash.com/1600x900/?mountains"
        caption="A random unsplash picture."
        buttonText="Hero button"
      />
      <Wrapper>
        <RowPicText
          heading="Lorem ipsum"
          copy="This is copy text hmmm"
          imgSrc="https://source.unsplash.com/1600x900/?outside"
          imgCaption="Unsplash pic"
        />
        <RowPicText
          flip
          heading="Lorem ipsum"
          copy="This is copy text hmmm"
          imgSrc="https://source.unsplash.com/1600x900/?outside"
          imgCaption="Unsplash pic"
        />
        <RowPicText
          heading="Lorem ipsum"
          copy="This is copy text hmmm"
          imgSrc="https://source.unsplash.com/1600x900/?outside"
          imgCaption="Unsplash pic"
        />
      </Wrapper>
      <Footer />
    </>
);

export default App;
