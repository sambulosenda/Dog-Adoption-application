import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });
    promise.then(console.log, console.error);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Dog adoption application</h1>
        <Pet name="Luna" animal="dog" breed="Kara" />
        <Pet name="Opera" animal="Cat" breed="Kara" />
        <Pet name="Musical" animal="Bird" breed="Kasa" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
