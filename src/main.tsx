import React from "./react";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const header = <h1>Hello Simple React</h1>;
const paragraph = <p>This is a simple React app with a single component.</p>;
const element = (
  <div>
    {header}
    {paragraph}
  </div>
);

const testElement = React.createElement("div", null, header, paragraph);
console.log(header);
console.log(paragraph);
console.log(element);
console.log(testElement);
// root.render(element);
