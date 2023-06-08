import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
      job: 'Lucas Davila'
    };

  handlePClick = () => {
    this.setState({ name: 'Lucas Júnior' })
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { job } = this.state;
    if (job === 'Desenvolvedor Junior Java + React') {
      this.setState({ job: 'Lucas Davila' })
    } else {
      this.setState({ job: 'Desenvolvedor Junior Java + React' })
    }
  }

  render () {
    const { job }  = this.state;
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                {job}
              </p>
              <a
                onClick={this.handleAClick}
                className="App-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title='Alterar nome'
              >
                Clique e descubra
              </a>
            </header>
          </div>
        );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
