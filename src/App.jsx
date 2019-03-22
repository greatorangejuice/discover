import React, { Component } from 'react';


class CounterButton extends Component {

  state = {
    counter: 0,
  }

  handleClick = () => {
    this.state(({counter}) => ({
      counter: ++counter,
    }))
  }

    render () {
      const { counter } = this.state;

        return (
        <div>
          <div>
            {counter}
          </div>
          <div>
            <button onClick={this.handleClick}>+1</button>
          </div>
        </div>
        );
  }
} 


export default CounterButton;
