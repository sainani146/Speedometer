// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          className="meter"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h4>Speed is {speed}mph</h4>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons">
          <button className="accelerate" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="brake" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
