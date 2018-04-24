import React from 'react';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            og: 1.050,
            fg: 1.010
        };
    }

    calculate(og, fg) {
        return(og - fg) * 131.25;
    }

    onChangeHandler() {
        this.refs.outputID.value = `ABV is: ${this.calculate(this.refs.OGinput.value, this.refs.FGinput.value).toFixed(2)} %`;
    }

    render() {
        return (
            <form>
        <label htmlFor="OGinput">OG </label>
        <input id="OGinput" name="OGinput" type="number" step="0.001" ref="OGinput" defaultValue="1.050" onChange={()=>this.onChangeHandler()}/>
        <br/>
        <br/>
        <label htmlFor="FGinput">FG </label>
        <input id="FGinput" name="FGinput" type="number" step="0.001" ref="FGinput" defaultValue="1.010" onChange={() => this.onChangeHandler()}/>
        <br/>
        <br/>
        <output id="outputID" ref="outputID"></output>
      </form>
        );
    }
}
