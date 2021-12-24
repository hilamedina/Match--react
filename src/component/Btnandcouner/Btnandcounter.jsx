import React, { Component } from 'react';

export default class Btnandcounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>
          {this.props.nameOfButton}
        </button>
        <div>{this.props.counterLabel}</div>
      </div>
    );
  }
}
