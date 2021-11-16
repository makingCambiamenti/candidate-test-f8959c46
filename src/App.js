import React, { Component } from "react";
import logo from "./assets/logo.svg";
import SelectOption from "./components/SelectOption/SelectOption";
import CardContainer from "./components/CardContainer/CardContainer";
import "./styles/App.css";

import characters from "./fixtures/characters.json";

const categoryList = Array.from(
  new Set(characters.map((character) => character.category))
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "All",
      orderby: "alphabetical",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, state) {
    this.setState({ [state]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lord of the Rings Character Index</h1>
        </header>
        <section className="App-content">
          <div className="controller-wrapper card-basic ">
            <SelectOption
              categoryList={["All", ...categoryList]}
              category={this.state.category}
              selectionType={"category"}
              selectionTitle={"Category"}
              handleChange={this.handleChange}
            />
            <SelectOption
              categoryList={["alphabetical", "significanceIndex"]}
              category={this.state.orderby}
              selectionType={"orderby"}
              selectionTitle={"Order by"}
              handleChange={this.handleChange}
            />
          </div>
          <CardContainer
            characters={characters}
            category={this.state.category}
            orderby={this.state.orderby}
          />
        </section>
      </div>
    );
  }
}

export default App;
