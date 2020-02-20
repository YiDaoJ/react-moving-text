import React from 'react'
import styled from 'styled-components'

const CheckboxButton = ({ checked, value, name, onChangeCheckState }) => {

  const [isChecked, setIsChecked] = React.useState(checked)

  const handleCheckStateChange = (event) => {
    setIsChecked(event.currentTarget.checked)
    if (onChangeCheckState) {
      onChangeCheckState()
    }
  }

  return (
    <CheckboxContainer
      className="checkbox_for_select"
      checked={checked}>
      <StyledCheckBox type="checkbox" name={name} value={value} onChange={handleCheckStateChange}  />
        {value}
    </CheckboxContainer>
  )
}

const CheckboxContainer = styled.label`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0.8rem;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  color:  ${props => props => props.checked ? props.theme.colors.secondary : props.theme.colors.black};
  background-color: ${props => props.checked ? props.theme.colors.primary : props.theme.colors.secondary};
  :hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  }
`
const StyledCheckBox = styled.input`
  display: none;
  cursor: pointer;
`

export default CheckboxButton

