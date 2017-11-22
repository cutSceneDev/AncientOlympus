import React, { Component } from 'react'
import axios from 'axios'

import NoRootElement from '../../../../hoc/NoRootElement'
import Input from '../../../../components/UI/Input/Input'

class Login extends Component {
  state = {
    form: {
      login: {
        tagType: 'input',
        placeholder: 'type your login...',
        value: ''
      },
      password: {
        tagType: 'input',
        placeholder: 'type your password...',
        value: '',
        type: 'password'
      }
    }
  }

  inputChangeHandler = (inputKey, event) => {
    const newForm = {...this.state.form}
    const newInput = {...newForm[inputKey]}

    newInput.value = event.target.value
    newForm[inputKey] = newInput

    this.setState({form: newForm})
  }

  activateLoginWarning = (input, warning) => {
    console.info(input, warning)
  }

  invalidInputs = () => {
    let invalid = false;

    Object.keys(this.state.form).forEach((input) => {
      if (this.state.form[input].value.length < 1) {
        invalid = true;
        this.activateLoginWarning(input, 'incorrect length of input')
      }
    })

    return invalid;
  }

  compareLogin = (data) => {
    const login = this.state.form.login.value
    const password = this.state.form.password.value
    const access = {status: false, name: ''}
    const warning = {input: '', text: ''}
     
    Object.keys(data).forEach((user) => {
      if (access.status || warning.input === 'password') return;

      if (data[user].login === login) {
        if (data[user].password === password) {
          access.status = true
          access.name = login
        } else {
          warning.input = 'password'
          warning.text = 'password incorect'
        }
      } else {
        warning.input = 'login'
        warning.text = 'such user doesn\'t exist'
      }
    })

    if (!access.status) {
      this.activateLoginWarning(warning.input, warning.text)
    }
    return access;
  }

  loginHandler = () => {
    if ( this.invalidInputs() ) return;

    axios.get('/login.json')
      .then((response) => {
        if (response.status !== 200) {
          console.error(response.statusText)
          return;
        }

        if (Object.keys(response.data).length < 1) {
          console.error('Server Data is empty')
          return;
        }

        const access = this.compareLogin(response.data)

        if (access.status && access.name) {
          this.props.userLoged(access.name)
        }
      })
  }

  render() {
    const inputsArray = []

    Object.keys(this.state.form).forEach((input, index) => {
      inputsArray.push({
        id: input,
        inputConfig: this.state.form[input]
      })
    })

    const inputs = inputsArray.map((input) => {
      return (
        <Input
          tagType={input.inputConfig.tagType}
          placeholder={input.inputConfig.placeholder}
          value={input.inputConfig.value}
          change={(event) => this.inputChangeHandler(input.id, event)}
          key={input.id}
        />
      )     
    })

    return (
      <NoRootElement>
        {inputs}
        <button onClick={this.loginHandler}>Login</button>
      </NoRootElement>
    )
  }

}

export default Login