import React from "react"
import styled from "styled-components"

const StyledLabel = styled.label`
  text-transform: capitalize;
  ${({ theme }) => theme.textStyles.text}
  margin-bottom : 9px;
  display: inline-block;
`

const Label = (props) => <StyledLabel {...props}>{props.children}</StyledLabel>

export default Label
