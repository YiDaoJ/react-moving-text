import React, { useState } from 'react'
import ReAnimateTypo from 'react-moving-text'
import styled from 'styled-components'

const TextArray = ["sushi", "pizza"]
const TextArray2 = [
  ["s", "u", "s", "h", "i"],
  ["p", "i", "z", "z", "a"],
  ["s", "t", "e", "a", "k"],
  ["i", "c", "e"]
]

const Combination = () => {


  const [animationTypeForCurrent, setAnimationTypeForCurrent] = useState("flipFromLeftToCenter")
  const [animationTypeForNext, setAnimationTypeForNext] = useState("flipFromLeftToCenter")
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [currentVisible, setCurrentVisible] = useState(true)

  const handleChangeAnimationType = (index) => {
    if (index === current) {
      setAnimationTypeForCurrent("flipCenterToRight")
      setAnimationTypeForNext("flipFromLeftToCenter")
    }

    // setCurrent(current+1)

    // if(index === current + 1)

  }

  const handleAnimationStart = () => {
    // setVisible(true)
  }

  // const handleChangeAnimationType = () => {
  //   setShowNext(true)
  // }

  const handleChangeAnimationType2 = () => {}



  return (

    TextArray.map((elem, index) =>
      // <span >
      <ReAnimateTypo
          key={index}
          style={{ position:"absolute"}}
          onAnimationEnd={() => handleChangeAnimationType(index)}
          type={index === current ? animationTypeForCurrent : index === current + 1 ? animationTypeForNext : undefined }
          duration="800ms"
          timing="linear"
          iteration={1}
          delay={`${index * 400}ms`}
        >{elem}
        </ReAnimateTypo>
      // </span>
    )

    // <div>
    //   <ReAnimateTypo
    //     style={{ position:"absolute" }}
    //     // key={counter}
    //     onAnimationEnd={handleChangeAnimationType}
    //     type={"flipFromLeftToCenter"}
    //     duration="800ms"
    //     timing="ease"
    //     iteration={1}
    //   >Text1
    //   </ReAnimateTypo>
    //   {
    //     showNext &&
    //     <ReAnimateTypo
    //     style={{ position:"absolute" }}
    //       // key={counter}
    //       onAnimationEnd={handleChangeAnimationType2}
    //       type={"flipCenterToRight"}
    //       duration="1600ms"
    //       timing="ease"
    //       iteration={1}
    //     >Text1
    //     </ReAnimateTypo>
    //   }
    // </div>
  )
}

export default Combination


  // const [ counter, setCounter ] = useState(0)
  // const [showNext, setShowNext] = useState(false)


  // const handleCount = () => {
  //   if (counter === TextArray2.length -1) {
  //     setCounter(0)
  //   } else  {
  //     setCounter(counter + 1)
  //   }
  // }

  // const handleChainAnimation = () => {
  //   console.log(counter, animationType)
  //   setCounter(counter + 1)
  //   setAnimationType(Animations[counter+1])

  //   console.log('test')
  // }