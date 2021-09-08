import React, { Component } from 'react';
import setColor from '../components/color-generator/SetColor';
import Display from '../components/color-generator/Display';

class RandomColor extends Component {
  state = {
    bgColor: '#FF8800'
  };

  render() {
    return (
      <>
        <setColor />
        <Display />
      </>
    );
  }
}


export default RandomColor;

