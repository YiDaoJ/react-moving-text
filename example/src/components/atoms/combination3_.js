import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const Typer = ({ heading = '', dataText }) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const timer = setTimeout(() => {
      handleType()
    }, typingSpeed)
    return () => clearTimeout(timer)
  })

  const handleType = () => {

    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))
    setTypingSpeed(isDeleting ? 30 : 150)

    if (!isDeleting && text === fullText) {

      setTimeout(() => setIsDeleting(true), 500);

    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setLoopNum(loopNum+1)
    }
  }



  return (
    <h1>{heading}&nbsp;
      <span>{text}</span>
      <Cursor></Cursor>
    </h1>
  );
}


export default Typer

const Cursor = styled.span`
  margin-left: 3px;
  border-left: .1em solid black;
  animation: ${blink} .7s steps(1) infinite;
`

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`