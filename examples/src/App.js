import React, { Component } from 'react';
import './App.css';
import Basic from './Basic';
import Advanced from './Advanced';

const ExamplesMap = {
  Basic,
  Advanced,
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeExample: 'Basic',
    };
  }

  
  render() {
    const { activeExample } = this.state;

    const ActiveComponent = ExamplesMap[activeExample]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Custom Select React</h1>
          <ul className="App-nav">
            { Object.keys(ExamplesMap).map(example => (
              <li key={`AppNavItem-${example}`} className="App-nav-item"><button type="button" className={`App-nav-button ${activeExample === example ? 'is-active': ''}`} onClick={() => this._loadExample(example)}>{example}</button></li>
            ))}
          </ul>
        </header>
        <main className="App-main">
          <ActiveComponent />
        </main>
      </div>
    );
  }

  _loadExample = (activeExample) => {
    this.setState({ activeExample })
  }
}

export default App;
