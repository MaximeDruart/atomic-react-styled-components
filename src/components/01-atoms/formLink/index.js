import React from "react"
import styled from "styled-components"

const StyledFormLink = styled.div`
  ${({ theme }) => theme.textStyles.text};
  margin-top: 8px;
  a {
    margin-left: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.foreground};
  }
`

const FormLink = (props) => <StyledFormLink {...props}>{props.children}</StyledFormLink>

export default FormLink
