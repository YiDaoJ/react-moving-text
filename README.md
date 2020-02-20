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

```react
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
|             |                                  |                   |                |               |

### Available animations

| `type` / Animation name |
| ----------------------- |
| `blur`                  |
| `fadeIn`                |
| `fadeOut`               |
| `hang`                  |
| `hangOnLeft`            |
| `hangOnRight`           |
| `swing`                 |
| `glowing`               |
| `shakeMix`              |
| `shakeHorizontal`       |
| `shakeVertical`         |
| `spin`                  |
| `bounce`                |
| `flipCenterToRight`     |
| `flipFromLeftToCenter`  |
| `flash`                 |
| `pulse`                 |
| `jelly`                 |
| `squeezeHorizontal`     |
| `squeezeVertical`       |
| `flipHorizontal`        |
| `flipVertical`          |
|                         |
|                         |
|                         |
|                         |
|                         |
|                         |
|                         |

## Chain Animation

An string-arry of animation names is used to wrap the animations you want to chain.

```react
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



## License
