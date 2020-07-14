import React from "react";
import { shallow } from "enzyme";
import { findByAttr } from "../../test/testUtils";

import Counter from "./Counter";

const setup = () => shallow(<Counter />);

test("Renders Coounter component correctly", () => {
  const counter = findByAttr(setup(), "component-counter");
  expect(counter.length).toBe(1);
});

test("Initial counter value is set at 0", () => {
  const initialCounterValue = setup().state("counterValue");
  expect(initialCounterValue).toBe(0);
});
