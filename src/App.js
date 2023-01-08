import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerCount: 0,
      isCounting: false
    }
  }

  timerStart = () => {
    this.setState({isCounting: true});

    this.counterId = setInterval(() => {
      this.setState({timerCount: this.state.timerCount + 1})
    }, 1000)
  }

  timerStop = () => {
    this.setState({isCounting: false});

    clearInterval(this.counterId);
  }


  render() {
    return (
      <div className='App'>
        <div className='timer'>
          <div className='time'>{this.state.timerCount}</div>
          <div className='btns'>
            {!this.state.isCounting ? (
              <button 
              className='startBtn btn'
              onClick={this.timerStart}>
                Start
              </button>
            ) : (
              <button 
              className='startBtn btn'
              onClick={this.timerStop}>
                Stop
              </button>
            )}
            <button className='resetBtn btn'>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
