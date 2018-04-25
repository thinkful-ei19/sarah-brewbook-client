import React from 'react';

//not in use may incorporate with multiple calcs

export default function GravityInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" id={props.id} min={props.min} max={props.max}
                onChange={e => props.onChange(e.target.value)} value={props.value} />
        </div>
    );
}
