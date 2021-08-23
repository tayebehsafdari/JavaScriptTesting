// react-testing-library

import React, {useState} from "react";

const CheckboxWithLabelRTL = ({labelOn, labelOff}) => {
    const [isChecked, setIsChecked] = useState(false);
    const onChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={isChecked} id="react-testing-library"
                   onChange={onChange}/>
            <label className="form-check-label" htmlFor="react-testing-library">
                {isChecked ? labelOn : labelOff}
            </label>
        </div>
    );
};

export default CheckboxWithLabelRTL;