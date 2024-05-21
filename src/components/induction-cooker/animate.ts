const heatingAnimate={
  scale: [1, 0.9, 0.9, 1, 1],
  rotate: [0, 0, 270, 270, 0],
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
}
const heatingTransition={
  repeat: Infinity, // 无限循环
  duration: 2, // 动画时长
}

const completedAnimate = {
  scale: [1,1.1, 1, 0.9],
  opacity: [1, 0.5, 0.2, 0.5],
}

const completedTransition = {
  repeat: Infinity,
  duration: 1,
}

const haspotAnimate = {
  opacity: [1, 0, 1],
}

const haspotTransition = {
  repeat: Infinity,
  duration: 2.5,
}

export { heatingAnimate, heatingTransition, completedAnimate, completedTransition, haspotAnimate, haspotTransition}
