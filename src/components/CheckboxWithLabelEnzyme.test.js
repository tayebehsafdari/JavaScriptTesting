import React from "react";
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CheckboxWithLabelRTL from "./CheckboxWithLabelRTL";

Enzyme.configure({adapter: new Adapter()});

test('CheckboxWithLabel changes the text after click', () => {
    const checkbox = shallow(<CheckboxWithLabelRTL labelOn="On" labelOff="Off"/>);
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');
});