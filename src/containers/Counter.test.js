import React from "react";
import { shallow } from "enzyme";
import { findByAttr } from "../../test/testUtils";

import Counter from "./Counter";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test("Renders Counter component correctly", () => {
  const counter = findByAttr(setup(), "component-counter");
  expect(counter.length).toBe(1);
});

test("Initial counter value is set at 0", () => {
  const initialCounterValue = setup().state("counterValue");
  expect(initialCounterValue).toBe(0);
});

test("Clicking 'increment' button increments counter by 1", () => {
  const counterTestNum = 7;
  const wrapper = setup(null, { counterValue: counterTestNum });
  wrapper.find({ buttonName: "Increment" }).simulate("click");
//   const counterDisplayNum = wrapper.find();
});
