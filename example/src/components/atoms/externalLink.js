import React from 'react'
import styled from 'styled-components'

const ExternalLink = ({ children, href, target, margin, color }) => {
  return (
    <StyledRegularLink
      href={href}
      target={target}
      margin={margin}
      color={color}>
      {children}
    </StyledRegularLink>
  )
}

const StyledRegularLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin: ${props => props.margin};
  color: ${props=> props.color ? props.color : props.theme.colors.middle};
  transition: all .6s ease;
  :hover {
    color: ${props=> props.theme.colors.white};
  }
  :active {
    color: ${props=> props.theme.colors.middle};
  }
`
export default ExternalLink