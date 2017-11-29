import React from 'react'
import styles from './Test.css'
import { Transition, TransitionGroup } from 'react-transition-group'

class TodoList extends React.Component {
  state = {
    elems: [],
    text: ''
  }

  handleAddElementClick = () => {
    const elems = this.state.elems.concat({
      text: this.state.text
    })
    this.setState({
      elems,
      text: ''
    })
  }

  handleInputChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleDeleteElementClick = index => {
    const elems = [].concat(
      this.state.elems.slice(0, index), 
      this.state.elems.slice(index + 1, this.state.elems.length)
    )
    this.setState({elems})
  }

  render() {
    const list = this.state.elems.map((el, index) => {
      return (
        <Transition
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <div 
              key={index}
              onClick={() => this.handleDeleteElementClick(index)}
              style={{
                opacity: state === 'entered' ? 1 : 0,
                transition: 'opacity 300ms ease-out'
              }}
            >{el.text}</div>
          )}
        </Transition>
      )
    })

    return (
      <div>
        <p>Enter task title:</p>
        <input onChange={this.handleInputChange} value={this.state.text} />
        <button onClick={this.handleAddElementClick}>ADD</button>
        <TransitionGroup>
          {list}
        </TransitionGroup>
      </div>
    );
  }
}

export default TodoList