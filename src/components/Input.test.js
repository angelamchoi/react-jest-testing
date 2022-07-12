import {render,  fireEvent} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Input from "./Input"; //importing the component we want to test

describe("Input Component", () => {

  it("rendered input", () => {
    const { getByTestId } = render(<Input showDiv={false}/>);
    const input = getByTestId("searchBar"); //grab the input
    expect(input).toBeTruthy(); //check if the input exists
  }) 

  it("render div", () => {
    const {getByTestId} = render(<Input showDiv={true}/>);
    const div= getByTestId("divWeWantToShow");
    expect(div).toBeTruthy();
  });

  it("didn't render div", () => {
    const {queryByTestId} = render(<Input showDiv={false}/>);
    const div = queryByTestId("divWeWantToShow");
    expect(div).toBeFalsy();
  })
  
  //changing state in the component so we need to use act
  it("change on input causes change on header", () => {
   act(async() => {
      const {getByTestId} = render(<Input showDiv={true}/>);
      const input = getByTestId("searchBar");
      const header = getByTestId("displaySearch");
      const inputWord = "pizza"
      await fireEvent.change(input, {target: {value: inputWord}});
      expect(header.innerHTML).toBe(inputWord);
   });
  });

});

// queryByTestId: we are using this one because showDiv is gated by state