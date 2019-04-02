import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const ValidationMsg = ({ val }) => {
    if (val > 10) {
        return <h1>Grate than 10</h1>
    } else {
        return <h1>Less than <em>10</em></h1>
    }
}

ValidationMsg.propTypes = {
    val: PropTypes.number,
}

ValidationMsg.defaultProps = {
    val: 5,
}

const Tab1 = () => (
    <h1>Text og tab1</h1>
)

const Tab2 = () => (
    <h1>Text og tab2</h1>
)

const Tab3 = () => (
    <h1>Text og tab3</h1>
)

const people = ['Jack', 'Max', 'Leo', 'Sarah'];

const TABS_BTN = [
    {
        dataName: 1,
        title: 'Tab1',
    },
    {
        dataName: 2,
        title: 'Tab2',
    },
    {
        dataName: 3,
        title: 'Tab3',
    },
];

class App extends Component {

    state = {
        activeTab: 1,
    };

    handleTab = (e) => {
        this.setState({
            // activeTab: +e.target.getAttribute('data-name')
            activeTab: +e.target.dataset.name
        })
    };

    render() {
        const { activeTab } = this.state
        return (
            <Fragment>
                {TABS_BTN.map(({ dataName, title }) => (
                    <button 
                    key={`${dataName}-${title}`} 
                    onClick={this.handleTab}
                    data-name = {dataName}
                    >{title}</button>
                ))}
                {activeTab === 1 && <Tab1 />}
                {activeTab === 2 && <Tab2 />}
                {activeTab === 3 && <Tab3 />}
                <div>
                    {activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}
                </div>
                <ul>
                    {people.map((person, index) => (
                        <li key={index}>{person}</li>
                    ))}
                </ul>
            </Fragment>
        )
    }
}

export default App