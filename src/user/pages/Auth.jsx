import React, { useState, useContext } from "react"

import Card from "../../shared/components/UIElements/Card"
import Input from "../../shared/components/FormElements/Input"
import "./Auth.css"

import { useForm } from "../../shared/hooks/form-hook"
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators"
import Button from "../../shared/components/FormElements/Button"
import { AuthContext } from "../../shared/context/auth-context"

const Auth = (props) => {
  const auth = useContext(AuthContext)
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [formState, inputHandler, setFormData] = useForm({
    username: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  })

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      )
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      )
    }
    setIsLoginMode((prev) => !prev)
  }

  const loginSubmitHandler = (event) => {
    event.preventDefault()
    console.log("Logging in...")
    auth.login()
  }
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={loginSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            element="input"
            type="text"
            placeholder="Enter name here..."
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name."
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="text"
          placeholder="Enter email here..."
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          placeholder="Enter password here..."
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid password."
          onInput={inputHandler}
        />
        <Button type="submit">LOGIN</Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH MODE
      </Button>
    </Card>
  )
}

export default Auth
