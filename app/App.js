import { observable } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-flex-router'

let timerData = observable({
  secondsPassed: 0
})

setInterval(() => {
  timerData.secondsPassed++
}, 1000)

@observer
export class Timer extends React.Component {
  render() {
    return (<span>5-Seconds passed: { this.props.timerData.secondsPassed } </span> )
  }
}

ReactDOM.render(<Timer timerData={timerData} />,
	document.getElementById('root'))
