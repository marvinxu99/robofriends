import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        const { date } =  this.state;
        return (
            <div>
                <h2> It is {date.toLocaleDateString()} {date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
export default Clock;