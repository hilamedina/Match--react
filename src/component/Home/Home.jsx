import React, { Component } from 'react';
import Data from '../Data/Data';
import Btnandcounter from '../Btnandcouner/Btnandcounter';

export class Home extends Component {
  state = {
    // ArrOfData: Data;
    counter1: 0,
    counter2: 0,
  };
  addToCounter = (counter) => {
    this.setState({ [counter]: this.state[counter] + 1 });
    const DataName = Data.map((nameElement) => {
      console.log(nameElement);
      return <div> {nameElement.name}</div>;
    });
    return DataName;
  };

  // printData = () => {
  //   console.log(Data);
  // };
  render() {
    return (
      <div>
        {/* {this.printData()} */}
        <Btnandcounter
          counterLabel={this.state.counter1}
          handleClick={() => {
            this.addToCounter('counter1');
          }}
        />
        <Btnandcounter
          counterLabel={this.state.counter2}
          handleClick={() => {
            this.addToCounter('counter2');
          }}
        />
        <div> </div>
        {/* <div> {this.state.counter1}</div> */}
      </div>
    );
  }
}

export default Home;
