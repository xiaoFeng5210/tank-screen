const x6Left = 20
const x6Top = 40
const x6TopDelta = 120


const nodeTranslateMap = new Map<number, {x: number, y: number}>()
nodeTranslateMap.set(0, {
  x: x6Left,
  y: x6Top
})

nodeTranslateMap.set(1, {
  x: x6Left + 220,
  y: x6Top
})

nodeTranslateMap.set(2, {
  x: x6Left + 440,
  y: x6Top
})

nodeTranslateMap.set(3, {
  x: x6Left + (3 - 1) * 220,
  y: x6Top + x6TopDelta
})

nodeTranslateMap.set(4, {
  x: (x6Left + (3 - 1) * 220) - 220,
  y: x6Top + x6TopDelta,
})

nodeTranslateMap.set(5, {
  x: x6Left,
  y: x6Top + x6TopDelta,
})

nodeTranslateMap.set(6, {
  x: x6Left,
  y: x6Top + x6TopDelta * 2,
})

export function generatorNode(step: {label: string, id: string}, index: number) {
  return {
    shape: 'custom-update-react-node',
    width: 150,
    height: 100,
    id: step.id,
    data: {
      label: step.label,
      ids: []
    },
    ...nodeTranslateMap.get(index),
  }
}



