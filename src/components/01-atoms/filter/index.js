import React from "react"
import styled from "styled-components"

const backgroundString = (props) => (props.color ? props.color : `${props.theme.colors.foreground}6b`)

const StyledFilter = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: ${backgroundString};
`

const Filter = (props) => <StyledFilter {...props} />

export default Filter
