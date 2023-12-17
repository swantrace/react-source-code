import { REACT_ELEMENT } from "./util";

function render(VNode, containerDOM) {
  mount(VNode, containerDOM);
}

function mount(VNode, containerDOM) {
  let newDOM = createDOM(VNode);
  newDOM && containerDOM.appendChild(newDOM);
}

function createDOM(VNode) {
  const { type, props } = VNode;

  let dom;
  if (type && VNode.$$typeof === REACT_ELEMENT) {
    dom = document.createElement(type);
  }

  const { children, ...otherProps } = props;

  children.forEach((child) => {
    if (typeof child === "string") {
      dom.appendChild(document.createTextNode(child));
    } else {
      mount(child, dom);
    }
  });

  dom && setPropsForDOM(dom, otherProps);

  return dom;
}

function setPropsForDOM(dom, props) {
  for (let key in props) {
    if (key === "className") {
      dom.setAttribute("class", props[key]);
    } else if (key === "style") {
      let style = props[key];
      for (let attr in style) {
        dom.style[attr] = style[attr];
      }
    } else if (/^on[A-Z].*/.test(key)) {
      dom[key.toLocaleLowerCase()] = props[key];
    } else {
      dom.setAttribute(key, props[key]);
    }
  }
}

const ReactDOM = {
  render,
};

export default ReactDOM;
