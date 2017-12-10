import React, { Component } from 'react'
import styles from './Login.css'

import { connect } from 'react-redux'
import { loginUser, spinnerStart, spinnerStop } from '../../../../store/actions/index'

import { auth } from '../../../../firebase/firebase'
import NoRootElement from '../../../../hoc/NoRootElement'
import Input from '../../../../components/UI/Input/Input'
import Button from '../../../../components/UI/Button/Button'

class Login extends Component {
  state = {
    formIsValid: false,
    formErrorMessage: '',
    form: {
      email: {
        tagType: 'input',
        value: '',
        label: 'Email:',
        validation: {
          isValid: false,
          isTouched: false,
          errorMessage: '',
          required: true,
          type: 'email',
        }
      },
      password: {
        tagType: 'input',
        value: '',
        label: 'Password:',
        type: 'password',
        validation: {
          isValid: false,
          isTouched: false,
          errorMessage: '',
          required: true,
          minLength: 6
        }
      }
    }
  }

  checkValidity = (value, rules) => {
    let validationResult = {
      isValid: true,
      errorMessage: ''
    }

    if (rules.sameAs) {
      if (value !== this.state.form[rules.sameAs].value) {
        validationResult.isValid = false
        validationResult.errorMessage = 'passwords doesn\'t match'
      }
    }

    if (rules.type) {
      if (rules.type === 'email') {
        const emailRE = /\S+@\S+\.\S+/
        if (emailRE.test(value) === false) {
          validationResult.isValid = false
          validationResult.errorMessage = 'not correct email'
        }
      }
    }
    
    if (rules.required) {
      if (value === '') {
        validationResult.isValid = false
        validationResult.errorMessage = 'required'
      }
    }

    if (rules.minLength) {
      if (rules.minLength > value.length) {
        validationResult.isValid = false
        validationResult.errorMessage = 'too short'
      }
    }

    return validationResult
  }

  formIsValidCheck = (form) => {
    let formIsValid = true

    for (let formInput in form) {
      if (!form[formInput].validation.isValid && form.hasOwnProperty(formInput)) {
        formIsValid = false
      }
    }

    return formIsValid
  }

  handleInputChange = (inputKey, e) => {
    const newForm = {...this.state.form}
    const newInput = {...newForm[inputKey]}
    const newValidation = {...newInput.validation}

    newInput.value = e.target.value.trim().toLowerCase()
    newValidation.isTouched = true

    const validationResult = this.checkValidity(newInput.value, newValidation)
    newValidation.isValid = validationResult.isValid
    newValidation.errorMessage = validationResult.errorMessage

    newInput.validation = newValidation
    newForm[inputKey] = newInput

    const newFormIsValid = this.formIsValidCheck(newForm)

    this.setState({
      form: newForm, 
      formIsValid: newFormIsValid, 
      formErrorMessage: ''
    })
  }

  handleLoginClick = (e) => {
    if (!this.state.formIsValid) return;
    if (e.key && e.key !== 'Enter') return;

    this.props.onSpinnerStart()
    auth.signInWithEmailAndPassword(this.state.form.email.value, this.state.form.password.value)
      .then( () => this.props.onSpinnerStop() )
      .catch(error => {
        this.setState({formErrorMessage: error.message})
        this.props.onSpinnerStop()
    });
  }

  render() {
    const inputsArray = []

    Object.keys(this.state.form).forEach(input => {
      inputsArray.push({
        key: input,
        inputConfig: this.state.form[input]
      })
    })

    const inputs = inputsArray.map(input => {
      return (
        <Input
          tagType={input.inputConfig.tagType}
          type={input.inputConfig.type}
          value={input.inputConfig.value}
          change={e => this.handleInputChange(input.key, e)}
          keyPress={this.handleLoginClick}
          key={input.key}
          label={input.inputConfig.label}
          notValid={!input.inputConfig.validation.isValid && input.inputConfig.validation.isTouched}
          errorMessage={input.inputConfig.validation.errorMessage}
        />
      )
    })

    return (
      <NoRootElement>
        {inputs}
        <span className={styles.LoginError}>{this.state.formErrorMessage}</span>
        <Button onClick={this.handleLoginClick} disabled={!this.state.formIsValid} style={{marginTop: '5px'}}>Login</Button>
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