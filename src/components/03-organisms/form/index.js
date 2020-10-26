import React, { useMemo } from "react"
import styled from "styled-components"
import Fieldset from "../../02-molecules/fieldset"
import Button from "../../01-atoms/button"

const StyledForm = styled.form`
  * {
    /* padding: 20px 0px; */
  }
`

const Form = (props) => {
  const mappedFieldsets = useMemo(
    () =>
      props.fields.map((field) => (
        <Fieldset
          {...props}
          key={field.name}
          handleChange={props.handleChange}
          label={field.label}
          value={field.value}
          placeholder={field.placeholder}
          name={field.name}
          type={field.type}
        />
      )),
    [props]
  )

  return (
    <StyledForm {...props}>
      {mappedFieldsets}
      <Button onClick={props.handleSubmit} large>
        {props.submitText}
      </Button>
      {props.children}
    </StyledForm>
  )
}

export default Form
