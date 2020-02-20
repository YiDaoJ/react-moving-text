import React, { useEffect } from 'react'
import styled from 'styled-components'
import Prism from "prismjs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import IconButton from './iconButton'


const Modal = ({isOpen, onCloseModal, content}) => {

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  })

  return (
    !!isOpen && (
      <ModalContainer className="modal">
        <ContentContainer>
          <div style={{ position: "absolute", right: "0", top: "0", zIndex: "1000" }}>
            <IconButton float="right" onClick={onCloseModal}>
              <FontAwesomeIcon icon={faTimes} />
            </IconButton>
          </div>
          <CodeContainer className="line-numbers">
            <code className="language-js" style={{ fontSize: "15px" }}>
              {content}
            </code>
          </CodeContainer>

        </ContentContainer>
      </ModalContainer>
    )
  )
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 100;
`

const ContentContainer = styled.div`
  display: block;
  position: relative;
  padding: 10px;
  width: 70vw;
  min-width: 800px;
  height: 650px;
  min-height: 600px;
  border-radius: 10px;
  background-color: #f5f2f0;
`

const CodeContainer = styled.pre`
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  height: 100%;
  width: 100%;
  margin: 0;
  color: ${props => props.theme.colors.black};
  word-break: break-all;
  overflow-wrap: break-word;
  border: none;
  overflow: scroll;
`

export default Modal