import React from 'react'
import styled from 'styled-components'

const RoundButton = ({ children, title, onClick, margin, disabled }) => {
  return (
    <ButtonContainer
      className="round_button"
      title={title}
      margin={margin}
      onClick={onClick}
      disabled={disabled} >
      {children}
    </ButtonContainer>
  )
}


const ButtonContainer = styled.button`
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  margin: ${props => props.margin ? props.margin : "0px 25px"};
  color: ${props => props.theme.colors.lightgray};
  background-color: ${props => props.disabled ? props.theme.colors.gray : props.theme.colors.middle};
  border-radius: 100%;
  box-shadow: ${props => props.disabled ? "none" : "1px 1px 2px 0 rgba(0, 0, 0, .1)"};
  cursor: ${props => props.disabled ? "normal" : "pointer"};
  border: none;
  font-size: 1.2rem;
  transition: all .8s ease;
  outline: none;

  :hover {
    outline: none;
    background-color: ${props => props.disabled ? props.theme.colors.gray : props.theme.colors.primary};
  }

  :focus {
    outline: none;
  }
`

export default RoundButton