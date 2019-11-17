import React from "react"
import { render } from "react-dom"
import { action, observable } from "mobx"
import { observer } from "mobx-react"
import { Button } from 'reactstrap'

require('./styling.scss')

class State {
  @observable counter = 0
  @action increment = (_) => { this.counter++ }
  @action decrement = (_) => { this.counter-- }
  @action reset = (_) => {this.counter = 0}
}

const state = new State()

const CounterComponent = observer( ({state}) => <div>
    <span className={`text-primary`} onClick={state.reset}>Counter: {state.counter}</span><br/>
    <Button color="primary" onClick={state.increment}>+1</Button><br/>
    <Button color="danger" onClick={state.decrement}>-1</Button>
  </div>)

render(
  <CounterComponent state={state} />,
  document.getElementById("root")
)
