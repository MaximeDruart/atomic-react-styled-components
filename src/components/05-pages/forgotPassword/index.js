import React, { useState } from "react"
import loginBackground from "../../../assets/images/loginBackground.jpg"
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
      <Headline size='h2'>Réinitialisation du mot de passe</Headline>
      <Form
        key='hello'
        submitText='REINITIALISER VOTRE MOT DE PASSE'
        fields={fields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </SideImageAndContainer>
  )
}

export default Login
