import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);

    this.handlePClick = this.handlePClick.bind(this); //fazendo o bind do this, o mesmo método tendo o this dentro dele

    this.state = { //Objeto que contém os dados desse componente
      name: 'Cristopher Martarello',
      counter: 0
    };
  }

  handlePClick() {
    this.setState({ name: 'Mudança de estado!' });
  }

  //ou posso usar arrow function para setar o bind do this automatico
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1});
  }

  render() {

    const { name, counter } = this.state; //destructuring

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}.
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
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
