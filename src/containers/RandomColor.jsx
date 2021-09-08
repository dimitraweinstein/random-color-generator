import React, { Component } from 'react';
import setBgColor from '../components/color-generator/SetColor';
import Display from '../components/color-generator/Display';

class RandomColor extends Component {
  state = {
    bgColor: '#FF8800'
  };

  render() {
    return (
      <>
        <setBgColor
          bgColor={this.state.bgColor}
        />
        <Display
          bgColor={this.state.bgColor}
        />
      </>
    );
  }
}

export default RandomColor;

