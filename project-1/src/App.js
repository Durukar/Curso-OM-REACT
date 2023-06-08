import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
      job: 'Lucas Davila'
    };

  render () {
    const { job }  = this.state;
    return (
          <div className="App">
          </div>
        );
  }
}

export default App;
