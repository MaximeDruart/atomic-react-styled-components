import React from "react"
import styled from "styled-components"
import Label from "../../01-atoms/label"
import Input from "../../01-atoms/input"
import FormLink from "../../01-atoms/formLink"
import { Link } from "react-router-dom"

const StyledFieldset = styled.fieldset`
  width: 545px;
  height: 100%;

  padding: 14px 0;
`

const Fieldset = (props) => (
  <StyledFieldset {...props}>
    {console.log(props)}
    <Label htmlFor={props.name}>{props.label}</Label>
    <Input
      id={props.name}
      name={props.name}
      placeholder={props.placeholder || "placeholder"}
      type={props.type || "text"}
      value={props.value}
      onChange={props.handleChange}
    />
    {props.forgotPasswordLink && props.type === "password" && (
      <FormLink>
        <Link to='/forgot-password'>vous avez oublié votre mot de passe ?</Link>
      </FormLink>
    )}
  </StyledFieldset>
)

export default Fieldset
