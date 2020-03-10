# react-moving-text

React Component to show animated text and objects, built with [styled-components](https://www.styled-components.com/).

The Component provides regular animation for common object and some animation effects especially for typography like letters and multi-line text.

**View [Demo and Playground](https://yidaoj.github.io/react-moving-text/)**

## Installation

Install via npm:

```
npm i react-moving-text
```

 ## Usage

To use react-moving-text in your react project, wrap the content with a `MovingText` component and customize the animation with relevant properties.

```jsx
import React from 'react'
import MovingText from 'react-moving-text'

const MyAnimatedTypo = () => {
  return (
    <MovingText
      type="animation_type"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none">
      Content...
    </MovingText>
  )
}
```

### Available properties

|  Property   | Corresponding Animation Property |     Data Type     | Default  Value | Property Unit |
| :---------: | :------------------------------: | :---------------: | :------------: | :-----------: |
|   `type`    |         `animation-name`         |     `String`      |     "blur"     |       -       |
| `duration`  |       `animation-duration`       |     `String`      |      "1s"      |  `s` or `ms`  |
|   `delay`   |        `animation-delay`         |     `String`      |      "0s"      |  `s` or `ms`  |
| `direction` |      `animation-direction`       |     `String`      |  "alternate"   |       -       |
|  `timing`   |   `animation-timing-function`    |     `String`      |     "ease"     |       -       |
| `iteration` |   `animation-iteration-count`    | `Number` `String` |   "infinite"   |       -       |
| `fillMode`  |      `animation-fill-mode`       |     `String`      |     "none"     |       -       |

### Available animations

- For entity object and letters

  | Common effects | Fade             | Flip                 | Slide             |
  | :------------- | :--------------- | :------------------- | :---------------- |
  | blur           | fadeIn           | flip                 | slideInFromLeft   |
  | bounce         | fadeInFromLeft   | flipIn               | slideInFromRight  |
  | effect3D       | fadeInFromRight  | flipOut              | slideOutToLeft    |
  | flash          | fadeInFromTop    | flipSlowDown         | slideOutToRight   |
  | float          | fadeInFromBottom | flipFromTop          | slideInFromTop    |
  | glowing        | fadeOut          | flipToTop            | slideInFromBottom |
  | jelly          | fadeOutToLeft    | flipFromBottom       | slideOutToTop     |
  | pulse          | fadeOutToRight   | flipToBottom         | slideOutToBottom  |
  | shadow         | fadeOutToTop     | flipFromLeftToCenter |                   |
  | spin           | fadeOutToBottom  |                      |                   |
  | swing          |                  |                      |                   |

  | Fold   | Hang        | Zoom    | Pop    |
  | :----- | :---------- | :------ | :----- |
  | fold   | hangOnLeft  | zoomIn  | popIn  |
  | unfold | hangOnRight | zoomOut | popOut |

  | Rotate         | Shake           | Squeeze           |
  | -------------- | --------------- | ----------------- |
  | rotateSlowDown | shakeMix        | squeezeMix        |
  | rotateCW       | shakeHorizontal | squeezeHorizontal |
  | rotateACW      | shakeVertical   | squeezeVertical   |


- For multiline texts

  - `typewriter`


## Chain Animation

An string-arry of animation names is used to wrap the animations you want to chain.

```jsx
import React, { useState } from 'react'
import MovingText from 'react-moving-text'

const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly"]

const AnimationChain = () => {

  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setCounter(animationIndex+1)
    setAnimationType(selectedItems[animationIndex+1])
  }

  return (
    <MovingText
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="1000ms"
      timing="linear"
      iteration={1}>
      MovingText
    </MovingText>
  )
}
```

