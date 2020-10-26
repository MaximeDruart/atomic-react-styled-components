import React from "react"
import styled from "styled-components"

const StyledHeadline = styled.h1`
  ${({ theme, size }) => theme.textStyles[size || "h1"]};
  padding-bottom: 25px;
  overflow-wrap: anywhere;
`

const Headline = (props) => <StyledHeadline {...props}></StyledHeadline>

export default Headline
