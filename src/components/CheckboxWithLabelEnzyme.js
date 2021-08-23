// Enzyme

import React, {useState} from "react";

const CheckboxWithLabelEnzyme = ({labelOn, labelOff}) => {
    const [isChecked, setIsChecked] = useState(false);
    const onChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={isChecked} id="Enzyme" onChange={onChange}/>
            <label className="form-check-label" htmlFor="Enzyme">
                {isChecked ? labelOn : labelOff}
            </label>
        </div>
    );
};

export default CheckboxWithLabelEnzyme;