import {render,  fireEvent} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Button from "./Button"; //importing the component we want to test

describe("Button Component", () => {

  // test to see if the button rendered 
  it("rendered button", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button"); //grab the button
    expect(button).toBeTruthy(); //check if the button exists
  }) ;

// check to see the length of the buttons
// gets all the elements => returns an array
  it("render 1 button before button click", () => {
    const {getAllByTestId} = render(<Button />);
    const buttonList = getAllByTestId("button");
    expect(buttonList).toHaveLength(1); // right now it's 1 button when you render
  })

  it("render 2 button before button click", () => {
    // trigger a state change
    act(async () => {
      const {getAllByTestId} = render(<Button />);
      const buttonList = getAllByTestId("button");
      await fireEvent.click(buttonList[0]); // grab the first button
      expect(getAllByTestId("button")).toHaveLength(2); // right now it's 1 button when you render
    })
  })
});

