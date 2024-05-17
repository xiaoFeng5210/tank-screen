import { Graph } from '@antv/x6'
import { useRef, useEffect } from "react";
import { currentFlowStyle, generateAttr, generateNodeProps } from "./x6-data";
import { Node } from "@antv/x6/src/model";
import Theme from "~/assets/theme.ts";

let graph: Graph;
const x6Left = 20
const x6Top = 40
const x6TopDelta = 120
export const useX6 = () => {
  const containerRef = useRef<HTMLDivElement>(null)



  const initialSteps = [
    { id: 'step1', label: '取锅' },
    { id: 'step2', label: '加汤' },
    { id: 'step3', label: '几号炉' },
    { id: 'step4', label: '加热' },
    { id: 'step5', label: '等待取餐' },
    { id: 'step6', label: '取锅' },
    { id: 'step7', label: '出餐' },
    { id: 'step8', label: '完成' }
  ]
  let nodes: Node<Node.Properties>[] = []

  function addNodes() {
    initialSteps.forEach((step, index) => {
      if (index < 3) {
        const node = graph.addNode({
          id: step.id,
          x: x6Left + index * 220,
          y: x6Top,
          label: step.label,
          ...generateNodeProps(),
          ...generateAttr()
        })
        nodes.push(node as any)
      }
      if (index === 3) {
        const node = graph.addNode({
          id: step.id,
          label: step.label,
          x: x6Left + (index - 1) * 220,
          y: x6Top + x6TopDelta,
          ...generateNodeProps(),
          ...generateAttr()
        })
        nodes.push(node as any)
      }
      if (index === 4) {
        const node = graph.addNode({
          id: step.id,
          // x取上一个节点的x坐标
          x: (x6Left + (3 - 1) * 220) - 220,
          y: x6Top + x6TopDelta,
          label: step.label,
          ...generateNodeProps(),
          ...generateAttr()
        })
        nodes.push(node as any)
      }
      if (index === 5) {
        const node = graph.addNode({
          id: step.id,
          x: x6Left,
          y: x6Top + x6TopDelta,
          label: step.label,
          ...generateNodeProps(),
          ...generateAttr()
        })
        nodes.push(node as any)
      }
      if (index === 6) {
        const node = graph.addNode({
          id: step.id,
          x: x6Left,
          y: x6Top + x6TopDelta * 2,
          label: step.label,
          ...generateNodeProps(),
          ...generateAttr()
        })
        nodes.push(node as any)
      }
      if (index === 7) {
        const node = graph.addNode({
          id: step.id,
          x: x6Left + 220,
          y: x6Top + x6TopDelta * 2,
          label: step.label,
          ...generateNodeProps(),
          ...generateAttr()
        })
        nodes.push(node as any)
      }
    })
  }

  function addEdges() {
    for (let i = 0; i < initialSteps.length - 1; i++) {
      graph.addEdge({
        source: initialSteps[i].id,
        target: initialSteps[i + 1].id,
        attrs: {
          line: {
            stroke: Theme.gray[5]
          }
        }
      })
    }
  }

  function init() {
    graph = new Graph({
      container: containerRef.current!,
      width: 620,
      height: 400,
      background: {
        // color: '#F2F7FA',
      },
    })
    addNodes()
    addEdges()
    setTimeout(() => {
      console.log(nodes)
      nodes[3].attr(currentFlowStyle)
    }, 1000)
  }
  useEffect(() => {
    init()
    return () => {
      nodes = []
    }
  }, []);

  return {
    containerRef
  }
}
