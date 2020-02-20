import React, { useState } from 'react'
import ReAnimateTypo from 'react-moving-text'
import styled from 'styled-components'

const TextArray = ["sushi", "pizza", "steak", "ice"]
const TextArray2 = [
  ["s", "u", "s", "h", "i"],
  ["p", "i", "z", "z", "a"],
  ["s", "t", "e", "a", "k"],
  ["i", "c", "e"]
]

const Animations = ["slideInVertical", "fadeOut", "fadeIn", "flash", "jelly"]

const Combination = () => {

  const [ animationType, setAnimationType ] = useState(Animations[0])
  const [ counter, setCounter ] = useState(0)
  const [showNext, setShowNext] = useState(false)

  // const handleChangeAnimationType = () => {
  //   setTimeout(handleCount, 1950)
  // }

  const handleCount = () => {
    if (counter === TextArray2.length -1) {
      setCounter(0)
    } else  {
      setCounter(counter + 1)
    }
  }

  const handleChainAnimation = () => {
    console.log(counter, animationType)
    setCounter(counter + 1)
    setAnimationType(Animations[counter+1])

    console.log('test')
  }

  const handleChangeAnimationType = () => {
    setShowNext(true)
  }

  const handleChangeAnimationType2 = () => {}



  return (
    <div>

      {/* {
        TextArray2.map((item, index) =>
          <div key={index} style={{ position:"absolute", display: counter === index ? "inline" : "none" }}>
            <LettersContainer>
              {
                item.map((letter, letterIndex) =>
                  <ReAnimateTypo
                    onAnimationEnd={handleChangeAnimationType}
                    key={letterIndex}
                    type="fadeIn"
                    duration="800ms"
                    delay={`${letterIndex * 100}ms`}
                    timing="linear"
                    iteration={1}
                  >{letter}
                  </ReAnimateTypo>
                )
              }
            </LettersContainer>
          </div>
        )
      } */}
      {/* {
        TextArray.map((item, index) =>
          <ReAnimateTypo
            style={{ position:"absolute", display: counter === index ? "inline" : "none" }}
            onAnimationStart={handleChangeAnimationType}
            key={index}
            type="fadeIn"
            duration="2000ms"
            timing="linear"
            iteration={1}
          >{item}
          </ReAnimateTypo>
        )
      } */}
      {/* <ReAnimateTypo
        onAnimationEnd={handleChainAnimation}
        key={counter}
        type={animationType}
        duration="1000ms"
        timing="linear"
        iteration={1}
      >{"text"}
      </ReAnimateTypo> */}
      <ReAnimateTypo
        style={{ position:"absolute" }}
        // key={counter}
        onAnimationEnd={handleChangeAnimationType}
        type={"flipFromLeftToCenter"}
        duration="800ms"
        timing="ease"
        iteration={1}
      >Text1
      </ReAnimateTypo>
      {
        showNext &&
        <ReAnimateTypo
        style={{ position:"absolute" }}
          // key={counter}
          onAnimationEnd={handleChangeAnimationType2}
          type={"flipCenterToRight"}
          duration="1600ms"
          timing="ease"
          iteration={1}
        >Text1
        </ReAnimateTypo>
      }
    </div>
  )
}

export default Combination

      {/* <ReAnimateTypo
        style={{ position:"absolute" }}
        // key={counter}
        onAnimationEnd={handleChangeAnimationType}
        type={animationType}
        duration="800ms"
        timing="ease"
        iteration={1}
      >Text1
      </ReAnimateTypo>
      {
        showNext &&
        <ReAnimateTypo
        style={{ position:"absolute" }}
          // key={counter}
          // onAnimationEnd={handleChangeAnimationType2}
          type={"slideInAndOutVertical"}
          duration="1600ms"
          timing="ease"
          iteration={1}
        >Text2
        </ReAnimateTypo>
      } */}

      // {
      //   TextArray2.map((item, index) =>
      //     <div key={index} style={{ position:"absolute", display: counter === index ? "inline" : "none" }}>
      //       {
      //         item.map((letter, letterIndex) =>
      //         <ReAnimateTypo
      //           onAnimationEnd={handleChangeAnimationType}
      //           key={letterIndex}
      //           type="flipVerical"
      //           duration="800ms"
      //           timing="ease"
      //           iteration={1}
      //         >{letter}
      //         </ReAnimateTypo>
      //       )
      //       }
      //     </div>
      //   )

      // }

const LettersContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`