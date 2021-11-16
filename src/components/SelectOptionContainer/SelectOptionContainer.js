import React, { Component } from "react";
import SelectOption from "../SelectOption/SelectOption";
import "../../styles/App.css";

class SelectOptionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="controller-wrapper card-basic ">
        {this.props.optionsList.map((select, index) => (
          <SelectOption
            key={index}
            {...select}
            handleChange={this.props.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default SelectOptionContainer;
