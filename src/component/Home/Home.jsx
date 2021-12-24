import React, { Component } from 'react';
import Data from '../Data/Data';
import Btnandcounter from '../Btnandcouner/Btnandcounter';

export class Home extends Component {
  state = {
    counter1: 0,
    counter2: 0,
    index: 0,
  };
  addToCounter = (counter) => {
    if (Data[this.state.index + 1]) {
      this.setState({ [counter]: this.state[counter] + 1 });
      this.setState({ index: this.state.index + 1 });
    } else {
      return;
    }
  };

  nameMap = () => {
    // const DataName = Data.map((imageElement) => {
    //   return imageElement;
    // });
    //nameelement.url = data.url == > data.url[0] => first photo
    // alt={'Girl in a jacket'}
    return (
      <div>
        <img src={`${Data[this.state.index].url}`} alt={'Girl'}></img>
        <div>{Data[this.state.index].name}</div>
        {/* <img src={`${DataName[this.state.index].url}`}></img>
        <div>{DataName[this.state.index].name}</div> */}
      </div>
    );
  };

  render() {
    return (
      <div>
        <Btnandcounter
          nameOfButton="Like"
          counterLabel={this.state.counter1}
          handleClick={() => {
            this.addToCounter('counter1');
          }}
        />
        <div className="show-name">{this.nameMap()}</div>
        <Btnandcounter
          nameOfButton="UnLike"
          counterLabel={this.state.counter2}
          handleClick={() => {
            this.addToCounter('counter2');
          }}
        />
        {/* <div>{this.printData()}</div> */}
      </div>
    );
  }
}

export default Home;
