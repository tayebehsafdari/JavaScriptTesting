// react-testing-library

import React, {useState} from "react";

const CheckboxWithLabel = ({labelOn, labelOff}) => {
    const [isChecked, setIsChecked] = useState(false);
    const onChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={isChecked} id="isChecked" onChange={onChange}/>
            <label className="form-check-label" htmlFor="isChecked">
                {isChecked ? labelOn : labelOff}
            </label>
        </div>
    );
};

export default CheckboxWithLabel;