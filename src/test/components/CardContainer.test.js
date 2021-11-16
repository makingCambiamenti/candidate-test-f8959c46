import React from "react";
import ReactDOM from "react-dom";
import CardContainer from "../../components/CardContainer/CardContainer";
import { render } from "@testing-library/react";

describe("Component should mount", () => {
  const characters = [
    {
      name: "Frodo Baggins",
      category: "hobbit",
      description:
        "A young well-to-do hobbit. When he discovers that the magic ring left to him by his eccentric Uncle Bilbo is the One Ring, he reluctantly takes on the quest to destroy it. Often referred to as the Ringbearer.",
      significanceIndex: 0,
      avatar: "frodo_baggins.jpg",
    },
    {
      name: "Gandalf the Grey",
      category: "wizard",
      description:
        "A wizard best known among hobbits for his fireworks and mischievous sense of humor, but actually one of the greatest powers of Middle-earth. He reveals the truth about the Ring to Frodo and acts as a guide and counselor.",
      significanceIndex: 1,
      avatar: "gandalf_the_grey.jpg",
    },
    {
      name: "Samwise Gamgee",
      category: "hobbit",
      description:
        "Frodo's gardener at home, and his servant and friend on the quest. Sam is very fond of stories about dragons and elves. A member of the Fellowship, he stays with Frodo after it is broken.",
      significanceIndex: 2,
      avatar: "samwise_gamgee.jpg",
    },
  ];

  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <CardContainer
        characters={characters}
        category={"All"}
        orderby={"significanceIndex"}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  test("Should show character 3 cards", () => {
    render(
      <CardContainer
        characters={characters}
        category={"All"}
        orderby={"significanceIndex"}
      />
    );
    expect(document.querySelectorAll(".card--wrapper").length).toEqual(3);
  });

  test("Should not show any character card", () => {
    render(
      <CardContainer
        characters={[]}
        category={"All"}
        orderby={"significanceIndex"}
      />
    );
    expect(document.querySelectorAll(".card--wrapper").length).toEqual(0);
  });
});
