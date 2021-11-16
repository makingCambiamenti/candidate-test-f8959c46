import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { render, fireEvent } from "@testing-library/react";

describe("Component should mount", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Options behaviour", () => {
  test("selecting the category", () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    fireEvent.change(getByTestId("category"), { target: { value: "hobbit" } });
    const options = getAllByTestId("category_select-option");
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });

  test("selecting the ordering", () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    fireEvent.change(getByTestId("orderby"), {
      target: { value: "significanceIndex" },
    });
    const options = getAllByTestId("orderby_select-option");
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
  });

  test("list of characters should filter based on the category", () => {
    const { getByTestId } = render(<App />);
    expect(document.querySelectorAll(".card--wrapper").length).toEqual(27);
    fireEvent.change(getByTestId("category"), { target: { value: "human" } });
    expect(document.querySelectorAll(".card--wrapper").length).toEqual(9);
  });

  test("list of characters should order alphabetically", () => {
    const { getByTestId } = render(<App />);
    fireEvent.change(getByTestId("orderby"), {
      target: { value: "alphabetical" },
    });
    expect(
      document.querySelectorAll(".card--wrapper")[0].querySelector("h3")
        .textContent
    ).toEqual("Aragorn");
    expect(
      document.querySelectorAll(".card--wrapper")[1].querySelector("h3")
        .textContent
    ).toEqual("Arwen Evenstar");
  });

  test("list of characters should order by significanceIndex", () => {
    const { getByTestId } = render(<App />);
    fireEvent.change(getByTestId("orderby"), {
      target: { value: "significanceIndex" },
    });
    expect(
      document.querySelectorAll(".card--wrapper")[0].querySelector("h3")
        .textContent
    ).toEqual("Frodo Baggins");
    expect(
      document.querySelectorAll(".card--wrapper")[1].querySelector("h3")
        .textContent
    ).toEqual("Gandalf the Grey");
  });

  test("list of characters should order alphabetically and selecting by category", () => {
    const { getByTestId } = render(<App />);
    fireEvent.change(getByTestId("orderby"), {
      target: { value: "alphabetical" },
    });
    fireEvent.change(getByTestId("category"), { target: { value: "human" } });
    expect(
      document.querySelectorAll(".card--wrapper")[0].querySelector("h3")
        .textContent
    ).toEqual("Aragorn");
    expect(
      document.querySelectorAll(".card--wrapper")[1].querySelector("h3")
        .textContent
    ).toEqual("Barliman Butterbur");
    expect(document.querySelectorAll(".card--wrapper").length).toEqual(9);
  });
});
