import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//with shallow
import { shallow } from "enzyme";

it("shallow renders without crashing", () => {
  shallow(<App />);
});

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
