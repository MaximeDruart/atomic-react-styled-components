import React from "react"
import styled from "styled-components"

const StyledFormLink = styled.div`
  ${({ theme }) => theme.textStyles.text};
  a {
    margin-left: 12px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.foreground};
  }
`

const FormLink = (props) => <StyledFormLink {...props}>{props.children}</StyledFormLink>

export default FormLink
