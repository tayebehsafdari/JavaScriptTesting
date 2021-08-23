import React from "react";
import {shallow} from 'enzyme';
import CheckboxWithLabelRTL from "./CheckboxWithLabelRTL";

test('CheckboxWithLabel changes the text after click', () => {
    const checkbox = shallow(<CheckboxWithLabelRTL labelOn="On" labelOff="Off"/>);
    console.log(checkbox);
});