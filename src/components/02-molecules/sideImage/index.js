import React, { useState } from "react"
import styled from "styled-components"
import Image from "../../01-atoms/image"
import Filter from "../../01-atoms/filter"
import { motion } from "framer-motion"

const StyledSideImage = styled(motion.div)`
  width: 42.5vw;
  height: 100%;

  position: relative;
  * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const SideImage = (props) => {
  let [hasLoaded, setHasLoaded] = useState(false)
  return (
    <StyledSideImage initial={{ opacity: 0 }} animate={hasLoaded && { opacity: 1 }} {...props}>
      {props.isFiltered && <Filter />}
      <Image onLoad={() => setHasLoaded(true)} src={props.img} />
    </StyledSideImage>
  )
}

export default SideImage
