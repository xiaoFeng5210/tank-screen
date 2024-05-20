import { Graph } from '@antv/x6'
import { useRef, useEffect } from "react";
import { currentFlowStyle, generateAttr, generateNodeProps } from "./x6-data";
import { Node } from "@antv/x6/src/model";
import Theme from "~/assets/theme.ts";
import {OrderProcess, OrderProcessText} from "~/types/enum.ts";
import {useTranslation} from "react-i18next";
import useOrderStore from "~/store/order.ts";
import { register } from '@antv/x6-react-shape'
import NodeComponent from "~/components/react-node";

let graph: Graph;
const x6Left = 20
const x6Top = 40
const x6TopDelta = 120

register({
  shape: 'custom-update-react-node',
  width: 100,
  height: 100,
  effect: ['data'],
  component: NodeComponent,
})

export const useX6 = () => {
  const orderList = useOrderStore(state => state.orderList)
  const {t} = useTranslation('orderStatus')
  const render = OrderProcessText(t)
  const containerRef = useRef<HTMLDivElement>(null)
  const initialSteps = [
    { id: 'step1', label: render[OrderProcess.put_bowl] },
    { id: 'step2', label: render[OrderProcess.add_soup] },
    { id: 'step3', label: render[OrderProcess.feeding] },
    { id: 'step4', label: render[OrderProcess.heating] },
    { id: 'step5', label: render[OrderProcess.waiting_served] },
    { id: 'step6', label: render[OrderProcess.eating_out] },
    { id: 'step7', label: render[OrderProcess.done]},
  ]
  let nodes: Node<Node.Properties>[] = []

  function addNodes() {
    initialSteps.forEach((step, index) => {
      if (index < 3) {
        const node = graph.addNode({
          shape: 'custom-update-react-node',
          id: step.id,
          x: x6Left + index * 220,
          y: x6Top,
          label: step.label,
          data: {
            label: step.label,
            ids: []
          },
          ...generateNodeProps(),
          ...generateAttr()
        })
        nodes.push(node as any)
      }
      if (index === 3) {
        const node = graph.addNode({
          shape: 'custom-update-react-node',
          id: step.id,
          label: step.label,
          x: x6Left + (index - 1) * 220,
          y: x6Top + x6TopDelta,
          data: {
            label: step.label,
            ids: []
          },
          ...generateNodeProps(),
          ...generateAttr()
        })
        nodes.push(node as any)
      }
      if (index === 4) {
        const node = graph.addNode({
          shape: 'custom-update-react-node',
          data: {
            label: step.label,
            ids: []
          },
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
          shape: 'custom-update-react-node',
          data: {
            label: step.label,
            ids: []
          },
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
          shape: 'custom-update-react-node',
          data: {
            label: step.label,
            ids: []
          },
          id: step.id,
          x: x6Left,
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
      background: {},
    })
    addNodes()
    addEdges()
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
