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

    calculateABV(og, fg) {
        return(og - fg) * 131.25;
    }

    calculateAtt(og, fg) {
        return(100*(og-fg)/(og-1.0));
    }

    calculateCalAlcohol(og, fg) {
        return(1881.22 * fg * (og-fg) / (1.775-og));
    }

    calculateCalResSug(og, fg) {
        return(3550 * fg * ((0.1808 * og) + (0.8192 * fg) - 1.0004));
    }

    calculateCalTot(og, fg) {
        return(
        this.calculateCalAlcohol(og, fg) + this.calculateCalResSug(og, fg)
        );
    }

    onChangeHandler() {
        this.refs.outputIDABV.value = `ABV is: ${this.calculateABV(this.refs.OGinput.value, this.refs.FGinput.value).toFixed(2)} %`;

        this.refs.outputIDAtten.value = `Apparent Attenuation is: ${this.calculateAtt(this.refs.OGinput.value,this.refs.FGinput.value).toFixed(2)} %`;

        this.refs.outputIDTot.value = `Calories: ${this.calculateCalTot(this.refs.OGinput.value,this.refs.FGinput.value).toFixed(1)} per 12oz serving`;

        this.refs.outputIDResSug.value = `Calories from sugar: ${this.calculateCalResSug(this.refs.OGinput.value,this.refs.FGinput.value).toFixed(1)} per 12oz serving`;

        this.refs.outputIDCalAlc.value = `Calories from alcohol: ${this.calculateCalAlcohol(this.refs.OGinput.value,this.refs.FGinput.value).toFixed(1)} per 12oz serving`;

    }

    render() {
        return (
        <form className="calculators">
        <h2 className="calc-header calc">Calculator</h2>
        <p className="description calc">Enter Original Gravity and Final Gravity measurements to calculate Alcohol by Volume and Calories</p>
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
        <output id="outputIDABV" ref="outputIDABV" defaultValue="5.25">ABV is: 5.25%</output>
        <br/>
        <br/>
        <output id="outputIDAtten" ref="outputIDAtten" defaultValue="79%">Apparent Attenuation is: 79%</output>
        <br/>
        <br/>
        <output id="outputIDTot" ref="outputIDTot" defaultValue="165.2"> Calories: 165.2 per 12oz serving</output>
        <br/>
        <br/>
        <output id="outputIDResSug" ref="outputIDResSug" defaultValue="60.4">Calories from sugar: 60.4 per 12oz serving</output>
        <br/>
        <br/>
        <output id="outputIDCalAlc" ref="outputIDCalAlc" defaultValue="104.8">Calories from alcohol: 104.8 per 12oz serving</output>
      </form>
        );
    }
}
