import React from 'react'
import ReAnimateTypo from 'react-moving-text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faCode } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import PlaygroundForm from './playgroundForm'
import Select from '../atoms/select'
import RoundButton from '../atoms/roundButton'
import Modal from '../atoms/modal'

const AnimationTypes = ["fading", "blur", "glowing", "bounce", "shaking", "spin"]
const AnimationOptions = {
  duration: "",
  delay: "",
  iteration: "",
  timingFunction: "ease",
  direction: "normal",
  fillMode: "none"
}


const Playground = () => {

  const [ isModalOpen, setIsModalOpen ] = React.useState(false)
  const [ animationType, setAnimationType ] = React.useState('fading')
  const [ option, setOption ] = React.useState(AnimationOptions)
  const [ redo, setRedo ] = React.useState(false)

  const handleModalOpen = () => {
    console.log('open modal')
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleSelectType = (event) => {
    setAnimationType(event.target.value)
  }

  const handleChangeOption = (option) => {
    setAnimationType(animationType)
    setOption(option)
    console.log('playground:', option, animationType)
  }

  const reRenderAnimation = (animationType, option) => {
    return <ReAnimateTypo type={animationType} duration={option.duration} delay={option.delay} timing={option.timingFunction} style={{animation: animationType}}>Hello</ReAnimateTypo>
  }

  const handleRedoAnimation = () => {
    setAnimationType(animationType)
    setOption(option)
    setRedo(true)
  }

  return (
    <PlaygroundContainer className="playground">
      <PlaygroundForm onChangeOption={handleChangeOption} animationOption={option}  />

      <ResultContainer>
        <ResultField>
          <ReAnimateTypo
            type={animationType}
            duration={option.duration}
            delay={option.delay}
            timing={option.timingFunction}
          >Redo
          </ReAnimateTypo>
        </ResultField>


        <EffectController>
          <Select items={AnimationTypes} width="400px" handleSelect={handleSelectType} />
          <ButtonGroupContainer>
            <RoundButton title={"replay animation"} onClick={() => handleRedoAnimation()}>
              <FontAwesomeIcon icon={faRedo} />
            </RoundButton>
            <RoundButton title={"show code"} onClick={handleModalOpen}>
              <FontAwesomeIcon icon={faCode} />
            </RoundButton>
          </ButtonGroupContainer>
        </EffectController>
      </ResultContainer>

      <Modal isOpen={isModalOpen} onCloseModal={handleModalClose}/>
    </PlaygroundContainer>
  )
}


const PlaygroundContainer = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 250px);
`
const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 250px);
  width: calc(100vw - 300px);
`
const ResultField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 500px;
  background-color: initial;
  font-size: 5rem;
  font-weight: bold;
  color: orange;
`

const EffectController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ButtonGroupContainer = styled.div`
  margin: 0 30px;
`


export default Playground