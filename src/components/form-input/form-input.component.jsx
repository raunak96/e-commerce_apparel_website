import React from "react";
import "./form-input.styles.scss";

// It is being used as seperate input as it is used in multiple places so we want it to be flexible and reusable, thus a sepearte component

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {label ? (
            <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
                {label}
            </label>
        ) : null}
    </div>
);

export default FormInput;
