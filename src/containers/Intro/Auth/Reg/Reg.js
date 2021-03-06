import React, { Component } from 'react'
import styles from './Reg.css'

import { connect } from 'react-redux'
import { regUserAsync } from '../../../../store/actions/index'

import validationMethods from '../../../../hoc/validationMethods'
import NoRootElement from '../../../../hoc/NoRootElement'
import Input from '../../../../components/UI/Input/Input'
import Button from '../../../../components/UI/Button/Button'

class Reg extends Component {
  state = {
    formIsValid: false,
    formErrorMessage: '',
    form: {
      email: {
        tagType: 'input',
        placeholder: '',
        value: '',
        label: 'Email:',
        validation: {
          state: {
            isValid: false,
            isTouched: false,
            errorMessage: ''  
          },
          rules: {
            required: true,
            type: 'email'
          }
        }
      },
      password: {
        tagType: 'input',
        placeholder: '',
        value: '',
        label: 'Password:',
        type: 'password',
        validation: {
          state: {
            isValid: false,
            isTouched: false,            
            errorMessage: ''
          },
          rules: {
            required: true,
            minLength: 6
          }
        }
      },
      passwordRepeat: {
        tagType: 'input',
        placeholder: '',
        value: '',
        label: 'Password confirmation:',
        type: 'password',
        validation: {
          state: {
            isValid: false,
            isTouched: false,
          },
          rules: {
            errorMessage: '',
            required: true,
            sameAs: 'password'
          }
        }
      }
    }
  }

  handleInputChange = (inputKey, e) => {
    const form = {...this.state.form}
    const input = {...form[inputKey]}
    const validation = {...input.validation}
    const validationState = {...validation.state}

    input.value = e.target.value.trim().toLowerCase()
    validationState.isTouched = true

    const validationResult = this.props.checkValidity(input.value, validation.rules, this.state.form.password.value)
    validationState.isValid = validationResult.isValid
    validationState.errorMessage = validationResult.errorMessage

    validation.state = validationState
    input.validation = validation
    form[inputKey] = input

    const formIsValid = this.props.formIsValidCheck(form)

    this.setState({
      form, 
      formIsValid, 
      formErrorMessage: ''
    })
  }

  handleRegClick = (e) => {
    if (e.key && e.key !== 'Enter') return;
    this.props.onLoginUserAsync(this.state.form.email.value, this.state.form.password.value)
  }

  render() {
    const { regErrorMessage, onToggleAuth } = this.props
    const inputsArray = [];

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
          notValid={!input.inputConfig.validation.state.isValid && input.inputConfig.validation.state.isTouched}
          errorMessage={input.inputConfig.validation.state.errorMessage}
        />
      )
    })

    return (
      <NoRootElement>
        {inputs}
        <span className={styles.RegError}>{regErrorMessage}</span>
        <Button onClick={this.handleRegClick} disabled={!this.state.formIsValid} style={{marginTop: '5px'}}>Create account</Button>
        <Button onClick={onToggleAuth} style={{marginTop: '15px'}}>Back</Button>
      </NoRootElement>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    regErrorMessage: state.login.regErrorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserAsync: (email, password) => dispatch( regUserAsync(email, password) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( validationMethods(Reg) )