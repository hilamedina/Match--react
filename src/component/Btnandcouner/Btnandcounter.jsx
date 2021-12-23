import React, { Component } from 'react';

export default class Btnandcounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>Like</button>
        <div>{this.props.counterLabel}</div>
      </div>
    );
  }
}
