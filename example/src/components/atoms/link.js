import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = ({children, to, target, margin, color, noTransition}) => {

  return (
    <>
      {
        noTransition ?
        (<StyledLinkWithouTransition
          to={to}
          target={target}
          margin={margin}
          color={color}>
          {children}
        </StyledLinkWithouTransition>)
        :
        (<StyledRegularLink
          to={to}
          target={target}
          margin={margin}
          color={color}>
          {children}
        </StyledRegularLink>)
      }
    </>
  )
}

const StyledLinkWithouTransition = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  margin: ${props => props.margin};
  color: ${props=> props.color ? props.color : props.theme.colors.secondary};
  :active {
    color: ${props=> props.color ? props.color : props.theme.colors.secondary};
  }
`

const StyledRegularLink = styled(Link)`
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

export default StyledLink