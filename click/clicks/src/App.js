import React from 'react';
import Header from './components/header';
import Clock from './components/clock';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      sayi: 0
    };
  }

  arttir = () => {
    this.setState({
      sayi: this.state.sayi + 1
    });
  }

  sifirla = () => {
    this.setState({
      sayi: 0
    });
  }

  azalt = () => {
    this.setState({
      sayi: this.state.sayi - 1
    });
  }

  render() {
    return (
      <div >
        <Header />
        <Clock
          arttir={this.arttir}
          sifirla={this.sifirla}
          azalt={this.azalt}
          sayi={this.state.sayi}
        />
      </div>
    );
  }
}

export default App;
