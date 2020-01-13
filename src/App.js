import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  subtract = () => {
    this.setState(current => ({ count: this.state.count - 1 }));
  };
  componentDidMount() {
    console.log("rendered");
  }
  componentDidUpdate() {
    console.log("i just updated");
  }
  render() {
    console.log("i am rendering");
    return (
      <div>
        <h1>The Number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}

export default App;
