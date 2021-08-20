import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: false}

  changeMode = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  nameChange = () => {
    const {mode} = this.state
    return mode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const {mode} = this.state
    const modeChange = mode ? 'light-mode' : 'dark-mode'
    const buttonName = this.nameChange()

    return (
      <div className="bg-container">
        <div className={`inner-container ${modeChange}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick={this.changeMode} type="button">
            {buttonName}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
