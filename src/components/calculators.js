import React from 'react';
import './calculators.css';


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

    calculateAtt(og, fg) {
        return(100*(og-fg)/(og-1.0));
    }

    onChangeHandler() {
        this.refs.outputID.value = `ABV is: ${this.calculate(this.refs.OGinput.value, this.refs.FGinput.value).toFixed(2)} %`;

        this.refs.outputIDAtten.value = `Apparent Attenuation is: ${this.calculateAtt(this.refs.OGinput.value,this.refs.FGinput.value).toFixed(2)} %`
    }

    render() {
        return (
        <form className="calculators">
        <h2 className="calc-header calc">Calculator</h2>
        <p className="description calc">Enter measurements for Original Gravity and Final Gravity to calculate Alcohol by Volume </p>
        <label htmlFor="OGinput">Original Gravity (OG): </label>
        <br/>
        <input id="OGinput" name="OGinput" type="number" step="0.001" ref="OGinput" defaultValue="1.050" onChange={()=>this.onChangeHandler()}/>
        <br/>
        <br/>
        <label htmlFor="FGinput">Final Gravity (FG): </label>
        <br/>
        <input id="FGinput" name="FGinput" type="number" step="0.001" ref="FGinput" defaultValue="1.010" onChange={() => this.onChangeHandler()}/>
        <br/>
        <br/>
        <output id="outputID" ref="outputID" defaultValue="5.25">ABV is: 5.25%</output>
        <br/>
        <br/>
        <output id="outputIDAtten" ref="outputIDAtten" defaultValue="79%">Apparent Attenuation is: 79%</output>
      </form>
        );
    }
}
