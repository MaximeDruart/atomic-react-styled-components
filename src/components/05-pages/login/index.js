import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import loginBackground from "../../../assets/images/loginBackground.jpg"
import SideImage from "../../02-molecules/sideImage"
import FormLink from "../../01-atoms/formLink"
import Container from "../../01-atoms/container"
import Headline from "../../01-atoms/headline"
import Form from "../../03-organisms/form"
import SideImageAndContainer from "../../04-templates/sideImageAndContainer"

const Login = () => {
  let [fields, setFields] = useState([
    {
      name: "email",
      label: "E-mail",
      value: "",
      placeholder: "alphonse.delamariniere@gmail.com",
      type: "email",
    },
    {
      name: "password",
      label: "Mot de passe",
      value: "",
      placeholder: "v0treM0TdEP4SSE",
      type: "password",
    },
  ])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = ({ target }) => {
    let { name, value } = target
    const fieldToUpdate = fields.find((field) => field.name === name)
    const indexToUpdate = fields.findIndex((field) => field.name === name)
    fieldToUpdate.value = value
    const newFields = fields
    newFields[indexToUpdate] = fieldToUpdate
    setFields([...newFields])
  }

  return (
    <SideImageAndContainer img={loginBackground}>
      <Headline size='h2'>Connectez vous</Headline>
      <Form
        key='hello'
        submitText='SE CONNECTER'
        fields={fields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        forgotPasswordLink={true}
      >
        <FormLink>
          <span>vous n'avez pas de compte ?</span>
          <Link to='/register'>créez un compte.</Link>
        </FormLink>
      </Form>
    </SideImageAndContainer>
  )
}

export default Login
