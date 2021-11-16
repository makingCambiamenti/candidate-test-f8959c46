import React, { Component } from "react";
import { capitalizeFirstLetter } from "../../utils/utils";

class SelectOption extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.selectionTitle}</p>
        <select
          value={this.props.category}
          data-testid={this.props.selectionType}
          onChange={(event) =>
            this.props.handleChange(event, this.props.selectionType)
          }
        >
          {this.props.categoryList.map((category, index) => (
            <option
              data-testid={this.props.selectionType + "_select-option"}
              key={index}
              value={category}
            >
              {capitalizeFirstLetter(category)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectOption;
