import React from 'react'
import styled from 'styled-components'

const Checkbox = ({label, onClick}) => {

  const [isChecked, setIsChecked] = React.useState(false)

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <CheckboxContainer onClick={onClick}>
      <StyledLabel>
        <StyledInput checked={isChecked} onChange={handleCheck} />
        {label}
      </StyledLabel>
    </CheckboxContainer>
  )
}

const CheckboxContainer = styled.div`
  display: inline-block;
  font-size: 1rem;
  width: 150px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.darkgray};
  cursor: pointer;
`

const StyledInput = styled.input.attrs({type: 'checkbox'})`
  appearance: none;
  outline: none;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  margin-bottom: 0;
  background-color: ${props => props.theme.colors.middle};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  :after {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: ${props => props.theme.colors.primary};
    opacity: ${props => props.checked ? '1': '0'};
    transition: all .8s ease;
  }
`

const StyledLabel = styled.label`
  float: right;
  cursor: pointer;
`

export default Checkbox