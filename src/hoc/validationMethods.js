import React from 'react'

const validationMethods = (WrappedComponent) => {
  return (props) => {
    const checkValidity = (value, rules, password) => {
      let validationResult = {
        isValid: true,
        errorMessage: ''
      }
  
      if (rules.sameAs) {
        if (value !== password) {
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

    const formIsValidCheck = (form) => {
      let formIsValid = true
  
      for (let formInput in form) {
        if (!form[formInput].validation.state.isValid && form.hasOwnProperty(formInput)) {
          formIsValid = false
        }
      }
  
      return formIsValid
    }

    return (
      <WrappedComponent 
        checkValidity={checkValidity} 
        formIsValidCheck={formIsValidCheck} 
        {...props} 
      />
    )
  }
}

export default validationMethods