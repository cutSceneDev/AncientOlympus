import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions'

import NoRootElement from '../../../../hoc/NoRootElement'
import Input from '../../../../components/UI/Input/Input'
import Button from '../../../../components/UI/Button/Button'

class Register extends Component {
  state = {
    form: {
      loginName: {
        tagType: 'input',
        placeholder: '',
        value: '',
        label: 'Login Name:',
        warning: ''
      },
      password: {
        tagType: 'input',
        placeholder: '',
        value: '',
        label: 'Password:',
        type: 'password',
        warning: ''
      },
      passwordRepeat: {
        tagType: 'input',
        placeholder: '',
        value: '',
        label: 'Repeat your password:',
        type: 'password',
        warning: ''
      }
    }
  }

  changeInputsWarning = (inputKey, warning) => {
    const newForm = {...this.state.form}
    const newInput = {...newForm[inputKey]}

    newInput.warning = warning
    newForm[inputKey] = newInput

    this.setState({form: newForm})
  }

  handleInputChange = (inputKey, event) => {
    const newForm = {...this.state.form}
    const newInput = {...newForm[inputKey]}

    newInput.value = event.target.value
    newForm[inputKey] = newInput

    this.setState({form: newForm}, () => this.changeInputsWarning(inputKey, ''))
  }

  inputsPreValidation = () => {
    let invalid = false;

    Object.keys(this.state.form).forEach((input) => {
      if (this.state.form[input].value.length < 1) {
        invalid = true
        this.changeInputsWarning(input, 'incorrect length of input')
      }
    })
    if (this.state.form.password.value !== this.state.form.passwordRepeat.value) {
      invalid = true
      this.changeInputsWarning('passwordRepeat', 'passwordRepeat doesn\'t match')
    }

    return invalid
  }

  handleRegisterClick = e => {
    if (e.key && e.key !== 'Enter') return;
    if ( this.inputsPreValidation() ) return;

    this.props.onSpinnerStart()
    const date = new Date();
    axios.post('/login.json', {
      login: this.state.form.loginName.value,
      password: this.state.form.password.value,
      date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    })
      .then(response => {
        this.props.onSpinnerStop()
        if (response.status !== 200) {
          console.error(response.statusText)
          return;
        }
        this.props.handleRegCloseClick()
      })
      .catch(error => {
        console.error(error)
        this.props.onSpinnerStop()
      })
  }

  render() {
    const inputsArray = [];

    Object.keys(this.state.form).forEach((input, index) => {
      inputsArray.push({
        key: input,
        inputConfig: this.state.form[input]
      })
    })

    const inputs = inputsArray.map(input => {
      return (
        <Input
          tagType={input.inputConfig.tagType}
          placeholder={input.inputConfig.placeholder}
          value={input.inputConfig.value}
          change={(event) => this.handleInputChange(input.key, event)}
          keyPress={this.handleRegisterClick}
          type={input.inputConfig.type}
          key={input.key}
          warning={input.inputConfig.warning}
          label={input.inputConfig.label}
        />
      )
    })

    return (
      <NoRootElement>
        {inputs}
        <Button onClick={this.handleRegisterClick} style={{marginTop: '5px'}}>Create account</Button>
        <Button onClick={this.props.onRegCloseClick} style={{marginTop: '15px'}}>Back</Button>
      </NoRootElement>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSpinnerStart: () => dispatch({type: actionTypes.SPINNER_START}),
    onSpinnerStop: () => dispatch({type: actionTypes.SPINNER_STOP})
  }
}

export default connect(null, mapDispatchToProps)(Register)