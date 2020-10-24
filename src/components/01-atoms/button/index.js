import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.foreground};
  border-radius: 6px;
  text-transform: uppercase;
  width: ${(p) => (p.large ? "100%" : "auto")};
  text-align: center;
  padding: 15px 0;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
  ${({ theme }) => theme.textStyles.button};
`

const Button = (props) => <StyledButton {...props}>{props.children}</StyledButton>

export default Button
