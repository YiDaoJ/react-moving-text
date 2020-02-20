import React from 'react'
import styled from 'styled-components'

const Select = ({ items, label, width, disable, handleSelect, height, fontSize, hasOptGroup }) => {

  const handleSelectChange = (event) => {
    handleSelect(event)
  }

  return (
    hasOptGroup ?
      <SelectContainer  width={width}>
        <StyledSelect onChange={handleSelectChange} height={height} fontSize={fontSize}>
          {
            items.map((group, index) =>
              <OptionGroup label={group.label} key={index}>
                {
                  group.options.map((option, opt_index) =>
                    <StyledOption value={option} key={opt_index}>{option}</StyledOption>
                  )
                }
              </OptionGroup>
            )
          }
        </StyledSelect>
      </SelectContainer>
    :
    <SelectContainer width={width} >
      {
        !!label && <SelectLabel>{label}</SelectLabel>
      }
      <StyledSelect onChange={handleSelectChange} height={height} fontSize={fontSize}>
        {
          items.map((item, index) => <StyledOption value={item} key={index}>{item}</StyledOption> )
        }
      </StyledSelect>
    </SelectContainer>
  )
}

const SelectContainer = styled.div`
  display: block;
  width: ${props => props.width ? props.width : '100%'};
  margin: 12px 0px;
`

const SelectLabel = styled.label`
  display: block;
  padding-bottom: 5px;
  width: 100%;
  font-size: .8rem;
  color: ${props => props.theme.colors.darkgray};
`

const StyledSelect = styled.select`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 100%;
  height: ${props => props.height ? props.height : '35px'};
  background-color: ${props => props.theme.colors.middle};
  color: ${props => props.theme.colors.lightgray};
  outline: none;
  border: none;
  border-radius: 0;
  font-size: ${props => props.fontSize ? props.fontSize : "1rem"};
  box-shadow: 1px 1px 2px 0 rgba(0,0,0,.1);
`

const OptionGroup = styled.optgroup``

const StyledOption = styled.option`
  display: bloack;
  color: ${props => props.theme.colors.black};
`

export default Select