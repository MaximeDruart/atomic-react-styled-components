import React from "react"
import styled, { css } from "styled-components"

// button variants
const buttonVariants = {
  initial: css`
    background: ${({ theme }) => theme.colors.primary1};
    border: none;
  `,
  hover: css`
    background: ${({ theme }) => theme.colors.primary2};
    border: none;
  `,
  focus: css`
    background: ${({ theme }) => theme.colors.primary3};
    border: 5px solid ${({ theme }) => theme.colors.primary6};
  `,
  active: css`
    background: ${({ theme }) => theme.colors.primary4};
    border: none;
  `,
  disabled: css`
    background: ${({ theme }) => theme.colors.primary6};
    border: none;
  `,
}

const StyledButton = styled.button`
  border-radius: 6px;
  text-transform: uppercase;
  width: ${(p) => (p.large ? "100%" : "auto")};
  text-align: center;
  padding: 15px 0;
  cursor: pointer;
  ${(props) => buttonVariants[props.variant || "initial"]}
  &:focus {
    outline: none;
  }
  ${({ theme }) => theme.textStyles.button};
`

const Button = (props) => <StyledButton {...props}>{props.children}</StyledButton>

export default Button
