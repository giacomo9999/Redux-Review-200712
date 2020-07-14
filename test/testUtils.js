// import checkPropTypes from "check-prop-types";

export const findByAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
};
