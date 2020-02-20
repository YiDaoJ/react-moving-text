import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import CheckboxButton from './checkboxButton'

const SelectPanel = ({ items, onSelectItem }) => {

  const convertToArrayWithChecked = (items) => {
    const newArr = []
    items.forEach(item => {
      let obj = {}
      obj.value = item
      obj.checked = false
      newArr.push(obj)
    })
    return newArr
  }

  const [allItemsWithCheckState, setAllItemsWithCheckState] = React.useState(convertToArrayWithChecked(items))
  const [selectedItems, setSelectedItems] = React.useState([])

  const handleChangeCheckState = (itemValue, allItems) => {
    const checkedItems = []
    const reorderedItems = []

    const itemCheckState = allItems.find(item => item.value === itemValue)
    if (!!itemCheckState) {
      itemCheckState.checked ? (itemCheckState.checked = false) : (itemCheckState.checked = true)
    }

    allItems.map(item =>
      item.checked ? (reorderedItems.unshift(item), checkedItems.push(item.value)) : reorderedItems.push(item)
    )

    if (onSelectItem) {
      onSelectItem(checkedItems)
    }
    setAllItemsWithCheckState(reorderedItems)
    setSelectedItems(checkedItems)

    // console.log('checked items: ', checkedItems)
  }


  return (
    <PanelContainer>
      <ItemsContainer>
        <PoseGroup>
          {!!allItemsWithCheckState &&
            allItemsWithCheckState.map((item, index) => (
              <ItemContainer key={index}>
                <CheckboxButton
                  key={index}
                  checked={item.checked}
                  name={item.value}
                  value={item.value}
                  onChangeCheckState={() => handleChangeCheckState(item.value, allItemsWithCheckState)}
                />
              </ItemContainer>
            ))}
        </PoseGroup>
      </ItemsContainer>
    </PanelContainer>
  )
}

const PanelContainer = styled.div`
  display: block;
  width: 100%;
  height: auto;
  display: inline-flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
`
const ItemsContainer = styled.div`
  width: inherit;
  height: auto;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const ItemContainer = posed.div({
  flip: {
    transition: {
      duration: 300,
      ease: 'easeInOut'
    }
  }
})

export default SelectPanel

