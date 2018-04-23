import React from 'react';

import NumberInput from './number-input';
import Output from './output';


export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            og: 1.050,
            fg: 1.010
        };
    }

    // setDayRate(dayRate) {
    //     this.setState({
    //         dayRate
    //     });
    // }

    // setHours(hours) {
    //     this.setState({
    //         hours
    //     });
    // }

    render() {
        const rate = this.state.dayRate / this.state.hours;
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000}
                    value={this.state.dayRate}
                    onChange={value => this.setDayRate(value)} />
                <NumberInput id="hours" label="Hours" min={1} max={12}
                    value={this.state.hours}
                    onChange={value => this.setHours(value)}/>
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)} />
            </form>
        );
    }
}
