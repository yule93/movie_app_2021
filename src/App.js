import React from 'react';
import PropTypes from "prop-types";

class App extends React.Componet {    // class component
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };

  render() {    // automatically compile
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={ this.add }>Add</button>
      <button onClick={ this.minus }>Minus</button>
    </div>
    );
  }
}

export default App;
