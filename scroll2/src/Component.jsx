import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const MultipleControllersStyled = styled.div`
  .section {
    height: 100vh;
  }
  #container1 {
    width: 100%;
    height: 400px;
    overflow: auto;
  }
  
  .sticky {
    background-color: red;
    width: 100%;
    & div {
      padding: 100%;
    }
  }
  
  .blue {
    background-color: blue;
  }
`;

const MultipleControllers = () => (
  <MultipleControllersStyled>
    <div id="container1">
      <Controller container="#container1">
        <div className="section" />
        <Scene duration={600} pin={true}>
          <div className="sticky"><div>Pin Test</div></div>
        </Scene>
        <div className="section" />
      </Controller>
      <Controller container="#container1">
        <div className="section" />
        <Scene duration={600} pin={true}>
          <div className="sticky"><div>Pin Test</div></div>
        </Scene>
        <div className="section" />
      </Controller>
      <Controller container="#container1">
        <div className="section" />
        <Scene duration={600} pin={true}>
          <div className="sticky"><div>Pin Test</div></div>
        </Scene>
        <div className="section" />
      </Controller>
    </div>
  </MultipleControllersStyled>
);

export default MultipleControllers;