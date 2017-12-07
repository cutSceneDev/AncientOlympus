import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loginUser, spinnerStart, spinnerStop } from '../../../../store/actions/index'

import { auth } from '../../../../firebase/firebase'
import NoRootElement from '../../../../hoc/NoRootElement'
import Input from '../../../../components/UI/Input/Input'
import Button from '../../../../components/UI/Button/Button'

class Login extends Component {
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
      }
    }
  }

  handleInputChange = (inputKey, e) => {
    const newForm = {...this.state.form}
    const newInput = {...newForm[inputKey]}

    newInput.value = e.target.value
    newForm[inputKey] = newInput

    this.setState({form: newForm}, () => this.changeInputsWarning(inputKey, ''))
  }

  handleLoginClick = (e) => {
    if (e.key && e.key !== 'Enter') return;

    this.props.onSpinnerStart()
    auth.signInWithEmailAndPassword(this.state.form.email.value, this.state.form.password.value)
      .then( () => this.props.onSpinnerStop() )
      .catch(error => {
        console.info(error.code, error.message)
        this.props.onSpinnerStop()
    });
  }

  render() {
    const inputsArray = []

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
          change={e => this.handleInputChange(input.key, e)}
          keyPress={this.handleLoginClick}
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
        <Button onClick={this.handleLoginClick} style={{marginTop: '5px'}}>Login</Button>
        <Button onClick={this.props.onToggleAuth} style={{marginTop: '15px'}}>I haven't account</Button>
      </NoRootElement>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onloginUser: email => dispatch( loginUser(email) ),
    onSpinnerStart: () => dispatch( spinnerStart() ),
    onSpinnerStop: () => dispatch( spinnerStop() )
  }
}
 
export default connect(null, mapDispatchToProps)(Login)