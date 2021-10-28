/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React from "react";
import ReactDOM from "react-dom";

import Menu from "./components/menu";
import Home from "./components/home";

/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  //callback function to use data from child and pass it to another component
  callbackFunction = (childData) => {
    this.setState({ cards: childData });
  };

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    return (
      <div className="App">
        <Menu parentCallback={this.callbackFunction} />
        <Home cards={this.state.cards} />
      </div>
    );
  }
}

// Render this out
ReactDOM.render(<App />, document.getElementById("root"));
