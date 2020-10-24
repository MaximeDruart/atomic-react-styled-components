import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.foreground}6b;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  border-radius: 6px;
  height: 44px;
  padding-left: 15px;
  ${({ theme }) => theme.textStyles.smallText};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.foreground};
  }
`

const Input = (props) => <StyledInput {...props} />

export default Input
