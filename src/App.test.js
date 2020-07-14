import React from "react";
import { shallow } from "enzyme";
import { findByAttr } from "../test/testUtils";

import App from "./App";

const setup = () => shallow(<App />);

test("renders without error", () => {
  const component = findByAttr(setup(), "component-app");
  expect(component.length).toBe(1); 
});
