import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>COUNTER</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
      </div>
    );
  }

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  sub = () => {
    this.setState(current => ({count: current.count - 1}));  
  };
}

export default App;
