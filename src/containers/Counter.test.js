import React from "react";
import { shallow, mount } from "enzyme";
import { findByAttr } from "../../test/testUtils";

import Counter from "./Counter";
import CounterButton from "../components/CounterButton";
import CounterDisplay from "../components/CounterDisplay";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const setupMount = (props = {}, state = null) => {
  const wrapper = mount(<Counter {...props} />);
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
  const mountWrapper = setupMount(null, { counterValue: counterTestNum });

  const incButton = mountWrapper
    .find(CounterButton)
    .find({ buttonName: "Increment" })
    .find("button");
  incButton.simulate("click");

  const counterDisplay = mountWrapper.find(CounterDisplay).find("h1");
  expect(counterDisplay.text()).toContain(counterTestNum + 1);
  
});
