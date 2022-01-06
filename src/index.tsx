import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <h4>{this.state.counter}</h4>
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.getElementById('root'));
