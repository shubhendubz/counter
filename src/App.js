import React, { Component } from 'react';
import './App.css';
import Parent from './components/parent';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ],
    deleteCount:0
  }

  handleIncrement = (counter) => {
    console.log("Increment Called");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({
      counters
    })
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      this.state.deleteCount=0;
      return c;
    })
    this.setState({
      counters
    })
  }

  handleDelete = (counterId) => {
    console.log("Delete Called");
    // console.log(counterId);
    this.state.deleteCount++;
    const counters = this.state.counters.filter((c) => c.id !== counterId)
    this.setState({ counters })
  }


  render() {
    return (
      <div className="App">
        <Parent
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          deleteCount={this.state.deleteCount}
        />
      </div>);
  }
}

export default App;
