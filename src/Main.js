import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import './Main.css'
class Main extends React.Component {
  render() {
    let beasts = [];
    data.forEach((animal, index) => {
      beasts.push(
        <HornedBeast
          title={animal.title}
          image_url={animal.image_url}
          key={index}
        />
      )
    });
    return (
      <main>
        {beasts}
      </main>
    )
  }
}
export default Main;