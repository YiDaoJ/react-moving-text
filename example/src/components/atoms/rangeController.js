import React from 'react'
import styled from 'styled-components'

const RangeController = ({ label, disabled, min, max, step, initialValue, optionalValue, unit, onChange }) => {

  const [value, setValue] = React.useState(initialValue)

  const handleChange = (event) => {
    setValue(event.target.value)
    if ( onChange ) {
      onChange(event)
    }
  }

  return (
    <ControllerContainer>
      <SelectLabel>{`${label} : ${!!optionalValue ? optionalValue : value } ${unit}`}</SelectLabel>
      <StyledInput
        disabled={disabled}
         min={min}
         max={max}
         step={step}
         onChange={handleChange}
         value={value}  />
    </ControllerContainer>
  )
}

const ControllerContainer = styled.div`
  display: block;
  width: 100%;
  margin: 10px 0px;
`
const SelectLabel = styled.label`
  display: block;
  padding-bottom: 5px;
  width: 100%;
  font-size: .8rem;
  color: ${props => props.theme.colors.darkgray};
`
const StyledInput = styled.input.attrs({type: "range"})`
  height: 6px;
  width: 100%;
  cursor: pointer;
  border-radius: 20px;
  -webkit-appearance: none;
  opacity: ${props => props.disabled ? '0.4' : '1'};
  transition: all .8s ease;

  ::-webkit-slider-runnable-track {
    width: 300px;
    height: 4px;
    background-color: ${props => props.theme.colors.gray};
    border: none;
    border-radius: 3px;
  }

  ::-webkit-slider-thumb {
    border: 1px solid ${props => props.disabled ? props.theme.colors.darkgray : props.theme.colors.primary};
    height: 13px;
    width: 13px;
    border-radius: 20px;
    background: ${props => props.disabled ? props.theme.colors.gray : props.theme.colors.middle};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4.5px;
  }

  :focus {
    outline: none;
  }
`

export default RangeController