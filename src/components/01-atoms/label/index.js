import React from "react"
import styled from "styled-components"

const StyledLabel = styled.label`
  text-transform: capitalize;
  ${({ theme }) => theme.textStyles.text}
`

const Label = (props) => <StyledLabel {...props}>{props.children}</StyledLabel>

export default Label
