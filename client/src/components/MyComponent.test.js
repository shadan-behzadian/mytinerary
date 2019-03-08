import React from "react";

import MyComponent from "./MyComponent";
import renderer from "react-test-renderer";

//with shallow
import { shallow } from "enzyme";

it("shallow renders without crashing", () => {
  shallow(<MyComponent />);
});

// it("renders correctly", () => {
//   const tree = renderer.create(<MyComponent />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
