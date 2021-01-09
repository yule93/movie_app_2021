import React from 'react';
import PropTypes from "prop-types";

class App extends React.Componet {    // class component

  state = {
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});    // done fatching data
    }, 5000);
  }

  render() {    // automatically compile
    const { isLoading } = this.state;
    return (
    <div>
      {this.state.isLoading ? "Loading..." : "We are ready"}
    </div>
    );
  }
}

export default App;
