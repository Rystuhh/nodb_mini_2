import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

class App extends Component {
  constructor () {
    super()
    this.state = {
      animals: []
    }
  }

  componentDidMount() {

  }

  fetchData = () => {
    axios({
      method: 'GET', 
      url: BASE_URL + '/api/animals'
    }).then(response => {
      this.setState({ animals: response.data})
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.fetchData}>Click Me </button>
        {this.state.animals.map(animal => (
          <div>
            <div>{animal.name}</div>
            <div>Is it furry: {animal.furry.toString()}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
