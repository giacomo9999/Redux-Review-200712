import React from "react";
import { shallow, mount } from "enzyme";
import { findByAttr } from "../../test/testUtils";

import Counter from "./Counter";
import CounterButton from "../components/CounterButton";

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
  const wrapper = mount(<Counter />);
  const incButton = wrapper
    .find(CounterButton)
    .find({ buttonName: "Increment" });
  // const incButton = counterButtons.find({ buttonName: "Increment" });
  console.log("Inc button:", incButton.debug());
});
