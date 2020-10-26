import React from "react"
import styled from "styled-components"

import { motion } from "framer-motion"

const StyledContainer = styled(motion.div)`
  padding: 0 120px;
  width: ${(props) => `calc(${props.width} + 240px)`};
`

const Container = (props) => <StyledContainer {...props}>{props.children}</StyledContainer>

export default Container
