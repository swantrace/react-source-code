import React from "./react";
import ReactDOM from "./react-dom";

const header = (
  <h1
    style={{ color: "red" }}
    className="test-class-1 test-class-2"
    onClick={() => {
      console.log("Hello World");
    }}
    data-test="test"
  >
    Hello Simple React
  </h1>
);
const paragraph = <p>This is a simple React app with a single component.</p>;
const element = (
  <div>
    {header}
    {paragraph}
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
