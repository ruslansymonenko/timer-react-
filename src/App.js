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

  componentDidMount() {
    const userCount = localStorage.getItem('timer');

    if (userCount) {
      this.setState({timerCount: parseInt(userCount)})
    }
  }

  componentDidUpdate () {
    localStorage.setItem('timer', this.state.timerCount)
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
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

  timerReset = () => {
    this.setState({isCounting: false, timerCount: 0});

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
            <button 
              className='resetBtn btn'
              onClick={this.timerReset}>
                Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
