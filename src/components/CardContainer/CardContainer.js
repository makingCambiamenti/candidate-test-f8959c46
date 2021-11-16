import React, { Component } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.characters
          .filter((character) =>
            this.props.category === "All"
              ? true
              : this.props.category === character.category
          )
          .sort((current, previous) => {
            if (this.props.orderby === "alphabetical") {
              return current.name.localeCompare(previous.name);
            } else if (this.props.orderby === "significanceIndex") {
              return current.significanceIndex - previous.significanceIndex;
            }
          })
          .map((character) => (
            <CharacterCard
              key={character.significanceIndex}
              character={character}
            />
          ))}
      </div>
    );
  }
}

export default CardContainer;
