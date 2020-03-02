import React from "react"
import styled, { keyframes } from "styled-components"
import Typer from "./typer"

const MovingComponent = ({children, type = null, ...props}) => {
  return (
    type === "typewriter"
    ? <Typer heading={props.heading} dataText={props.dataText} cursorColor={props.cursorColor} />
    : <StlyedElement type={type} {...props}>{children}</StlyedElement>
  )
}


/* ========== basic animations ========== */

const blur = keyframes`
  from { filter: blur(0px); }
  to { filter: blur(6px); }
`
const bounce = keyframes`
  10% { transform: scaleY(0.9) translateY(5%); }
  45% { transform: scaleY(1.2) translateY(-100%); }
  65% { transform: scaleY(0.95) translateY(0); }
  75% { transform: scaleY(1.05) translateY(-25%); }
  85% { transform: scaleY(1) translateY(0); }
  100% { transform: scaleY(1) translateY(0%); }
`
const effect3D = keyframes`
  to {
    text-shadow:
    0 1px 0 #ccc,
    0 2px 0 #c9c9c9,
    0 3px 0 #bbb,
    0 4px 0 #b9b9b9,
    0 5px 0 #aaa,
    0 6px 1px rgba(0, 0, 0, .1),
    0 0 5px rgba(0, 0, 0, .1),
    0 1px 3px rgba(0, 0, 0, .3),
    0 3px 5px rgba(0, 0, 0, .2),
    0 5px 10px rgba(0, 0, 0, .25)
  }
`
const flash = keyframes`
  0%, 40%, 80% { opacity: 1; }
  20%, 60%, 100% { opacity: 0; }
`
const float = keyframes`
  0% { transform: translate(2%, -10%) rotate(-1deg); }
  100% { transform: translate(-2%, 5%) rotate(3deg); }
`
const glowing = keyframes`
  0% { color: inherit; text-shadow: none; }
  2%, 59%, 64%, 79% { color: #fff; }
  3%, 59%, 63%, 78% { text-shadow: 0px 0px 60px, 0 0 22px, 0 0 1em inherit, 0 0 0.5em inherit, 0 0 .1em inherit, 0 10px 3px #000; }
  60% { color: inherit; text-shadow: none; }
  75% { color: inherit; text-shadow: none; }
`
const jelly = keyframes`
  0% { transform: scaleX(1); }
  20% { transform: scaleX(0.9); }
  50% { transform: scaleX(1.25); }
  85% { transform: scaleX(0.8); }
  100% { transform: scaleX(1); }
`
const pulse = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.1); }
`
const shadow = keyframes`
  0%   { text-shadow: 1px 1px 0px #333; }
	50%   { text-shadow: 3px 3px 2px #333; }
	100%  { text-shadow: 9px 10px 6px #999; }
`
const spin = keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(-360deg); }
`
const swing = keyframes`
  0% {
    transform: rotateZ(0deg);
    transform-origin: center top;
  }
  20% {
    transform: rotateZ(15deg);
    transform-origin: center top;
  }
  40% {
    transform: rotateZ(-15deg);
    transform-origin: center top;
  }
  60% {
    transform: rotateZ(7deg);
    transform-origin: center top;
  }
  80% {
    transform: rotateZ(-7deg);
    transform-origin: center top;
  }
  100% {
    transform: rotateZ(0deg);
    transform-origin: center top;
  }
`



const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`
const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to { opacity: 1 }
`
const fadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to { opacity: 1 }
`
const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to { opacity: 1 }
`
const fadeInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to { opacity: 1 }
`


const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`
const fadeOutToLeft = keyframes`
  from { opacity: 1; }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`
const fadeOutToRight = keyframes`
  from { opacity: 1; }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`
const fadeOutToTop = keyframes`
  from { opacity: 1; }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`
const fadeOutToBottom = keyframes`
  from { opacity: 1; }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`

const hangOnLeft = keyframes`
  0% { transform-origin: left; }
  30% {
    transform: rotate(110deg);
    transform-origin: left;
  }
  50% {
    transform: rotate(75deg);
    transform-origin: left;
  }
  65% {
    transform: rotate(100deg);
    transform-origin: left;
  }
  78% {
    transform: rotate(80deg);
    transform-origin: left;
  }
  88% {
    transform: rotate(95deg);
    transform-origin: left;
  }
  95% {
    transform: rotate(86deg);
    transform-origin: left;
  }
  100% {
    transform: rotate(90deg);
    transform-origin: left;
  }
`
const hangOnRight = keyframes`
  0% { transform-origin: right; }
  30% {
    transform: rotate(-110deg);
    transform-origin: right;
  }
  50% {
    transform: rotate(-75deg);
    transform-origin: right;
  }
  65% {
    transform: rotate(-100deg);
    transform-origin: right;
  }
  78% {
    transform: rotate(-80deg);
    transform-origin: right;
  }
  88% {
    transform: rotate(-95deg);
    transform-origin: right;
  }
  95% {
    transform: rotate(-86deg);
    transform-origin: right;
  }
  100% {
    transform: rotate(-90deg);
    transform-origin: right;
  }
`


const squeezeMix = keyframes`
  0% { transform: scale(1, 1); }
  15% { transform: scale(0.95, 0.95); }
  30% { transform: scale(0.9, 0.9); }
  55% { transform: scale(0.75, 0.75); }
  70% { transform: scale(1.3, 1.3); }
  85% { transform: scale(0.95, 0.95); }
  100% { transform: scale(1, 1); }
`
const squeezeHorizontal = keyframes`
  0% { transform: scaleX(1); }
  15% { transform: scaleX(0.95); }
  30% { transform: scaleX(0.9); }
  55% { transform: scaleX(0.75); }
  70% { transform: scaleX(1.3); }
  85% { transform: scaleX(0.95); }
  100% { transform: scaleX(1); }
`
const squeezeVertical = keyframes`
  0% { transform: scaleY(1); }
  15% { transform: scaleY(0.95); }
  30% { transform: scaleY(0.9); }
  55% { transform: scaleY(0.75); }
  70% { transform: scaleY(1.3); }
  85% { transform: scaleY(0.95); }
  100% { transform: scaleY(1); }
`


const shakeMix = keyframes`
  0% { transform: translate(2px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(0px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(2px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(2px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`
const shakeHorizontal = keyframes`
  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateX(6px) }
  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateX(2px) }
  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateX(-4px) }
`
const shakeVertical = keyframes`
  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateY(6px) }
  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateY(2px) }
  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateY(-4px) }
`


const flip = keyframes`
  0% {
    transform: perspective(1000px) rotateX(360deg);
    transform-origin: center;
  }
  100% {
    transform: perspective(1000px) rotateX(0deg);
    transform-origin: center;
  }
`
const flipIn = keyframes`
  0% {
    transform: rotateX(180deg);
    opacity: 0;
  }
  35% {
    transform: rotateX(120deg);
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  100% {
    transform: rotateX(360deg);
    opacity: 1;
  }
`
const flipOut = keyframes`
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  35% {
    transform: rotateX(-40deg);
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
  100% {
    transform: rotateX(180deg);
    opacity: 0;
  }
`
const flipSlowDown = keyframes` // tbm
  0% {
    transform:rotateX(0deg);
  }
  5% {
    transform: rotateX(1turn);
  }
  10% {
    transform: rotateX(2turn);
  }
  20% {
    transform: rotateX(3turn);
  }
  40% {
    transform: rotateX(4turn);
  }
  70%, 100% {
    transform: rotateX(5turn);
  }
`
const flipToTop = keyframes`
  from {
    transform: rotateX(-90deg);
    transform-origin: center top;
    opacity: 1;
  }
  to {
    transform: rotateX(90deg);
    transform-origin: center top;
    opacity: 0;
  }
`
const flipToBottom = keyframes`
  from {
    opacity: 1;
    transform-origin: 0%, 0%;
    transform: rotateX(0deg) translateY(0px);
  }
  to {
    opacity: 0;
    transform-origin: 0%, 0%;
    transform: rotateX(-90deg) translateY(50px);
  }
`
const flipFromTop = keyframes`
  from {
    opacity: 0;
    transform-origin: 0%, 0%;
    transform: rotateX(90deg);
  }
  to {
    opacity: 1;
    transform-origin: 0%, 0%;
    transform: rotateX(0deg) ;
  }
`
const flipFromBottom = keyframes`
  from {
    transform: rotateX(-90deg);
    transform-origin: 50% 0;
    opacity: 0;
  }
  to {
    transform: rotateX(0deg);
    transform-origin: 50% 0;
    opacity: 1;
  }
`
const flipFromLeftToCenter = keyframes`
  0% {
    transform: rotateY(-95deg)  translateX(-200px) ;
    transform-origin: left;
  }
  100% {
    transform: rotateY(0deg);
    transform-origin: left;
  }
`

const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  60% {
    opacity: 1;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`
const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  60% {
    opacity: 1;
    transform: translateX(-20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`
const slideOutToLeft = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  60% {
    opacity: 0;
    transform: translateX(-120%);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`
const slideOutToRight = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  60% {
    opacity: 0;
    transform: translateX(120%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`
const slideInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  60% {
    opacity: 1;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  60% {
    opacity: 1;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
const slideOutToTop = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  60% {
    opacity: 0;
    transform: translateY(-120%);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`
const slideOutToBottom = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  60% {
    opacity: 0;
    transform: translateY(120%);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`

const fold = keyframes`
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1, 0.4, 1); }
  60% { transform: scale3d(0.4, 0.4, 1); }
  100% {
    opacity: 0;
    transform: scale3d(0.2, 0.2, 0.2);
  }
`
const unfold = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(0, 0, 0); }
  30% {
    opacity: 1;
    transform: scale3d(0.4, 0.4, 1);
  }
  60% { transform: scale3d(0.4, 1, 1); }
  100% { transform: scale3d(1, 1, 1); }
`


const zoomIn = keyframes`
  from { transform: scale(2); }
  to { transform: scale(1); }
`
const zoomOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(2); }
`

const rotateCW = keyframes`
  from {
    transform: rotate(0deg);
    transform-origin: center center;
  }
  to {
    transform: rotate(360deg);
    transform-origin: center center;
  }
`
const rotateACW = keyframes`
  from {
    transform: rotate(0deg);
    transform-origin: center center;
  }
  to {
    transform: rotate(-360deg);
    transform-origin: center center;
  }
`
const rotateSlowDown = keyframes`
  0% { transform:rotateZ(0deg);  }
  5% { transform: rotateZ(1turn); }
  10% { transform: rotateZ(2turn); }
  20% { transform: rotateZ(3turn); }
  40% { transform: rotateZ(4turn); }
  65%, 100% { transform: rotateZ(5turn); }
`


const popIn = keyframes`
  0% {
    transform: scale3d(0, 0, 0);
    opacity: 0;
  }
  30% {
    transform: scale3d(1.1, 1.1, 1.1);
    opacity: 1;
  }
  60% { transform: scale3d(1, 1, 1); }
  80% { transform: scale3d(1.03, 1.03, 1.03); }
  100% { transform: scale3d(1, 1, 1); }
`
const popOut = keyframes`
  0% { transform: scale3d(1, 1, 1); }
  60% {
    transform: scale3d(1.1, 1.1, 1.1);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`

const typewriter = keyframes``

const types = {

  blur: blur,
  bounce: bounce,
  effect3D: effect3D,
  flash: flash,
  float: float,
  glowing: glowing,
  jelly: jelly,
  pulse: pulse,
  shadow: shadow,
  spin: spin,
  swing: swing,

  fadeIn: fadeIn,
  fadeInFromLeft: fadeInFromLeft,
  fadeInFromRight: fadeInFromRight,
  fadeInFromTop: fadeInFromTop,
  fadeInFromBottom: fadeInFromBottom,

  fadeOut: fadeOut,
  fadeOutToLeft: fadeOutToLeft,
  fadeOutToRight: fadeOutToRight,
  fadeOutToTop: fadeOutToTop,
  fadeOutToBottom: fadeOutToBottom,

  flip: flip,
  flipIn: flipIn,
  flipOut: flipOut,
  flipSlowDown: flipSlowDown,
  flipFromTop: flipFromTop,
  flipToTop: flipToTop,
  flipFromBottom: flipFromBottom,
  flipToBottom: flipToBottom,
  flipFromLeftToCenter: flipFromLeftToCenter,

  fold: fold,
  unfold: unfold,

  hangOnLeft: hangOnLeft,
  hangOnRight: hangOnRight,

  rotateSlowDown: rotateSlowDown,
  rotateCW: rotateCW,
  rotateACW: rotateACW,


  shakeMix: shakeMix,
  shakeHorizontal: shakeHorizontal,
  shakeVertical: shakeVertical,

  squeezeMix: squeezeMix,
  squeezeHorizontal: squeezeHorizontal,
  squeezeVertical: squeezeVertical,

  slideInFromLeft: slideInFromLeft,
  slideInFromRight: slideInFromRight,
  slideOutToLeft: slideOutToLeft,
  slideOutToRight: slideOutToRight,
  slideInFromTop: slideInFromTop,
  slideInFromBottom: slideInFromBottom,
  slideOutToTop: slideOutToTop,
  slideOutToBottom: slideOutToBottom,

  zoomIn: zoomIn,
  zoomOut: zoomOut,

  popIn: popIn,
  popOut: popOut,

  typewriter: typewriter
}

const StlyedElement = styled.div`
  margin: 0;
  padding: 0;
  animation-name: ${props => types[props.type] || null};
  animation-duration: ${props => props.duration || '1s'};
  animation-timing-function: ${props => props.timing || 'ease'};
  animation-delay: ${props => props.delay || '0s'};
  animation-iteration-count: ${props => props.iteration || 'infinite'};
  animation-direction: ${props => props.direction || 'alternate'};
  animation-fill-mode: ${props => props.fillMode || 'forwards'};
`

export default MovingComponent


