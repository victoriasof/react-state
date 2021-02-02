import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      counter: 0
    };
  }

  // Executes when user writes something on the input
  handleChange = (e) => {
    // setState simplified just gets an objet as a parameter
    // that object contains the updated key value pairs
    this.setState({
      inputValue: e.target.value
    });
  }

  handleAdd = () => {
    // prevState gets the current state with the updated values
    this.setState(prevState => {
      // what key to update inside our state? -> counter key
      // what value to insert inside the key mentioned above? (counter) -> prevState.counter + 1
      return {
        counter: prevState.counter + 1
      }
    });
  } 

  handleRemove = () => {
    // prevState gets the current state with the updated values
    this.setState(prevState => {
      // what key to update inside our state? -> counter key
      // what value to insert inside the key mentioned above? (counter) -> prevState.counter + 1
      return {
        counter: prevState.counter - 1
      }
    });
  } 
  
  render() {
    return (
      <div className="App">
        <p id="inputvalue">You wrote: {this.state.inputValue}</p>
        <input type="text" onChange={this.handleChange} />
        <hr />
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleAdd}>Add 1</button>
        <button onClick={this.handleRemove}>Remove 1</button>
      </div>
    );
  }
}

export default App;
