import React from "react"
import styled, { css } from "styled-components"

const buttonVariants = {
  initial: css`
    border: 1px solid ${({ theme }) => theme.colors.primary1}6b;
    background-color: ${({ theme }) => theme.colors.background};
  `,
  active: css`
    border: 3px solid ${({ theme }) => theme.colors.primary1};
    background-color: ${({ theme }) => theme.colors.background};
  `,
  success: css`
    border: 3px solid ${({ theme }) => theme.colors.success1};
    background-color: ${({ theme }) => theme.colors.background};
  `,
  error: css`
    border: 3px solid ${({ theme }) => theme.colors.warning1};
    background-color: ${({ theme }) => theme.colors.background};
  `,
  disabled: css`
    background: ${({ theme }) => theme.colors.secondary3};
    border: 1px solid ${({ theme }) => theme.colors.neutral3};
    color: ${({ theme }) => theme.colors.neutral1};
  `,
}

const StyledInput = styled.input`
  outline: none;
  width: 100%;
  border-radius: 6px;
  height: 44px;
  padding-left: 15px;
  ${({ theme }) => theme.textStyles.smallText};
  border: 1px solid ${({ theme }) => theme.colors.primary1}6b;
  background-color: ${({ theme }) => theme.colors.background};
  ${(props) => buttonVariants[props.variant || "initial"]}

  &:focus {
    ${(props) => buttonVariants.active}
  }
`

const Input = (props) => <StyledInput {...props} />

export default Input
