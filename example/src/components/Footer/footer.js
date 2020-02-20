import React from 'react'
import styled from 'styled-components'
import MovingComponent from 'react-moving-text'
import ExternalLink from '../atoms/externalLink'

const Footer = () => {
  return (
    <FooterContainer>
      Made with
      <MovingComponent
        type="flipHorizontal"
        iteration="infinite"
        duration="2000ms"
        timing="linear"
        style={{margin: "0px 10px", color:"orange"}}>
        ❤
      </MovingComponent>
       by <ExternalLink href="https://github.com/YiDaoJ" target="_blank" margin="0px 10px" color="#2196f3" >YiDaoJ</ExternalLink> using React and styled-components
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 40px;
  font-size: .8rem;
  color: ${props => props.theme.colors.middle};
  background-color: ${props => props.theme.colors.secondary};
`

export default Footer