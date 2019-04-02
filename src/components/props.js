import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Counter = ({counter, func, string,number}) => {
    console.log(counter, func, string, number)
    return <h1>{`Counter Component. Counter value is: ${counter}`}</h1>
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    func: PropTypes.func,
    string: PropTypes.string,
    number: PropTypes.number,
}

Counter.defaultProps = {
    func: null,
    number: null,
    string: null,
}

class CounterButton extends Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
                <div>{counter}</div>
                <Counter
                    counter={counter}
                    number = {500}
                     />
                <button onClick={this.handleClick}>Push:{counter}</button>
            </div>
        )
    }
}



export default CounterButton;