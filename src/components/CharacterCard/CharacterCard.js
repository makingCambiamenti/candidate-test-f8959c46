import React, { Component } from "react";
import "./CharacterCard.css";
import "../../styles/App.scss";
import { capitalizeFirstLetter } from "../../utils/utils";

class CharacterCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card--wrapper flex-center card-basic">
        <div className="card--wrapper-img-container flex-center">
          <img
            src={`characters/${this.props.character.avatar}`}
            alt={this.props.character.name + "avatar"}
          />
        </div>
        <div className="card--wrapper-text-container">
          <h3>{this.props.character.name}</h3>
          <p>{capitalizeFirstLetter(this.props.character.category)}</p>
          <p>{this.props.character.description}</p>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
