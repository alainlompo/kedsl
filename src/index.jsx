import React from "react"
import { render } from "react-dom"
import { action, observable } from "mobx"
import { observer } from "mobx-react"
import { Button } from 'reactstrap'

require('./styling.scss')

class State {
  @observable counter = 0
  @observable isChecked = false;
  @action increment = (_) => { this.counter++ }
  @action decrement = (_) => { this.counter-- }
  @action reset = (_) => {this.counter = 0}
  @action toggleCheckButton = (_) => {this.isChecked = !this.isChecked}
}

const state = new State()

const CounterComponent = observer( ({state}) => <div>
    <span className={`text-primary`} onClick={state.reset}>Counter: {state.counter}</span><br/>
    <Button color="primary" onClick={state.increment}>+1</Button><br/>
    <Button color="danger" onClick={state.decrement}>-1</Button>
  </div>)

const CheckboxComponent = observer( ({state}) => <div>
  <label className={`text-primary`}>
    <input type="checkbox" id="checkBox1"
    checked={state.isChecked}
      onChange={state.toggleCheckButton}/>
      &nbsp;Dsl is made easy
  </label>
</div>)

const AppComponent = ({state}) => <div>
  <CounterComponent state={state} />
  <br/>
  <CheckboxComponent state={state} />
</div>

render(
  <AppComponent state={state} />,
  document.getElementById("root")
)
