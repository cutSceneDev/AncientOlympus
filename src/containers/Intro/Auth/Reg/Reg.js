import React, { Component } from 'react'

import { auth } from '../../../../firebase/firebase'
import { connect } from 'react-redux'
import { spinnerStart, spinnerStop } from '../../../../store/actions/index'

import NoRootElement from '../../../../hoc/NoRootElement'
import Input from '../../../../components/UI/Input/Input'
import Button from '../../../../components/UI/Button/Button'

class Register extends Component {
  state = {
    form: {
      email: {
        tagType: 'input',
        placeholder: '',
        value: '',
        label: 'Email:',
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

  handleInputChange = (inputKey, event) => {
    const newForm = {...this.state.form}
    const newInput = {...newForm[inputKey]}

    newInput.value = event.target.value
    newForm[inputKey] = newInput

    this.setState({form: newForm})
  }

  handleRegisterClick = (e) => {
    if (e.key && e.key !== 'Enter') return;

    this.props.onSpinnerStart()
    auth.createUserWithEmailAndPassword(this.state.form.email.value, this.state.form.password.value)
      .then( () => this.props.onSpinnerStop() )
      .catch(error => {
        console.info(error.code, error.message)
        this.props.onSpinnerStop()
    });
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
        <Button onClick={this.props.onToggleAuth} style={{marginTop: '15px'}}>Back</Button>
      </NoRootElement>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSpinnerStart: () => dispatch( spinnerStart() ),
    onSpinnerStop: () => dispatch( spinnerStop() )
  }
}

export default connect(null, mapDispatchToProps)(Register)