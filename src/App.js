
import React from "react";
import { render } from "react-dom"
import  Pet  from "./Pet";


class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement("H1", { onClick: this.handleTitleClick }, "Adopt Me"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
