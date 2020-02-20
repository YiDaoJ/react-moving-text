import React from 'react'
import styled from 'styled-components'

const IconButton = ({children, float, onClick}) => {
  return (
    <ButtonContainer float={float} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: lighter;
  background-color: initial;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: all .8s ease;
  float: ${props=> props.float};

  :hover {
    outline: none;
    color: ${props => props.theme.colors.secondary};
  }

  :focus {
    outline: none;
  }
`

export default IconButton