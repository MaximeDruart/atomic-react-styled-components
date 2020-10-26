import React from "react"
import styled from "styled-components"
import SideImage from "../../02-molecules/sideImage"
import Container from "../../01-atoms/container"

const StyledSideAndContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 100%;
`

const SideAndContainer = (props) => {
  return (
    <StyledSideAndContainer>
      <SideImage img={props.img} isFiltered={true} />
      <Container
        width='450px'
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.2 } }}
      >
        {props.children}
      </Container>
    </StyledSideAndContainer>
  )
}

export default SideAndContainer
