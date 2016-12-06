import { observable, computed, autorun } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'

let timerData = observable({
  secondsPassed: 0
})

timerData.add = function() {
  timerData.secondsPassed += 200
}

setInterval(() => {
  timerData.secondsPassed++
}, 1000)

@observer
export class Timer extends React.Component {
  add() {
    timerData.secondsPassed += 100
  }
  render() {
    return (<div>
				<span>Seconds passed: { this.props.timerData.secondsPassed } </span>
				<br/><button onClick={this.add}>add 100</button>
				<br/><button onClick={timerData.add}>add 200</button>
			</div>)
  }
}

export class TimerWrapper extends React.Component {
  render() {
    return (
      <Timer timerData={timerData}/>
    )
  }
}

ReactDOM.render(<TimerWrapper />, document.getElementById('root'))
