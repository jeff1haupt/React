import React from 'react';

export default class StateExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState( () => {
            return {counter: this.state.counter + 1}
        }) 
    }

    render() {
        const { counter } = this.state;

        return (
            <div>
                <p>The current counter value is: {counter} </p>
                <button onClick={this.handleClick}>Add 1</button>
            </div>
        )
    }
}