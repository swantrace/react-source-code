import { REACT_ELEMENT } from "./util";

function createElement(type, properties, ...children) {
  const { ref, key, __self, __source, ...rest } = properties ?? {};
  let props = Object.assign({}, rest);

  props.children = children;

  return {
    $$typeof: REACT_ELEMENT,
    type,
    props,
    ref,
    key,
  };
}

const React = {
  createElement,
};

export default React;
