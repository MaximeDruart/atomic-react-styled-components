import React, { useState } from "react"
import { Link } from "react-router-dom"
import RegisterBackground from "../../../assets/images/registerBackground.jpg"
import FormLink from "../../01-atoms/formLink"
import Headline from "../../01-atoms/headline"
import Form from "../../03-organisms/form"
import SideImageAndContainer from "../../04-templates/sideImageAndContainer"

const Register = () => {
  let [fields, setFields] = useState([
    {
      name: "name",
      label: "Nom complet",
      value: "",
      placeholder: "Alphonse De La Marinière",
      type: "text",
    },
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
    <SideImageAndContainer img={RegisterBackground}>
      <Headline size='h2'>Créez un compte</Headline>
      <Form
        key='hello'
        submitText='CREEZ UN COMPTE'
        fields={fields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      >
        <FormLink>
          <span>vous avez déja un compte ?</span>
          <Link to='/login'>connectez vous.</Link>
        </FormLink>
      </Form>
    </SideImageAndContainer>
  )
}

export default Register
