import {Graph} from '@antv/x6'
import {useRef, useEffect} from "react";
import {Node} from "@antv/x6/src/model";
import Theme from "~/assets/theme.ts";
import {OrderProcess, OrderProcessText} from "~/types/enum.ts";
import {useTranslation} from "react-i18next";
import useOrderStore from "~/store/order.ts";
import {register} from '@antv/x6-react-shape'
import NodeComponent from "~/components/react-node";
import {generatorNode} from "~/components/section2/section2Help.tsx";
import {OrderItem} from "~/api";
import useLangStore from "~/store/lang.ts";

let graph: Graph;

register({
  shape: 'custom-update-react-node',
  width: 100,
  height: 100,
  effect: ['data'],
  component: NodeComponent,
})

let nodes: Node<Node.Properties>[] = []


export const useX6 = () => {
  const lang = useLangStore(state => state.lang)

  useEffect(() => {
    init()
  }, [lang]);

  const orderList = useOrderStore(state => state.orderList)
  const {t, i18n} = useTranslation('orderStatus')
  const render = OrderProcessText(t)
  const containerRef = useRef<HTMLDivElement>(null)
  const initialSteps = [
    {id: 'step1', label: render[OrderProcess.put_bowl]},
    {id: 'step2', label: render[OrderProcess.add_soup]},
    {id: 'step3', label: render[OrderProcess.feeding]},
    {id: 'step4', label: render[OrderProcess.heating]},
    {id: 'step5', label: render[OrderProcess.waiting_served]},
    {id: 'step6', label: render[OrderProcess.eating_out]},
    {id: 'step7', label: render[OrderProcess.done]},
  ]

  function addNodes() {
    initialSteps.forEach((step, index) => {
      const node = graph.addNode({
        ...generatorNode(step, index),
      })
      nodes.push(node as unknown as Node<Node.Properties>)
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

  function setNodeData(list: OrderItem[]) {
    if (nodes.length === 0) return
    nodeSetData(list)
  }

  function nodeSetData(list: OrderItem[]) {
    nodes.forEach((node, index) => {
      // 没个流程都到订单列表里去找，如果有就更新，没有就清除
      const ids = list.filter(item => (!isNaN(item?.status) && item?.status === index)).map(item => item && item.order_id)
      if (ids.length > 0) {
        node.setData({ids})
      } else {
        node.setData({ids: [-1]})
      }
    })
  }

  function init() {
    nodes = []
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
  }, []);

  return {
    containerRef,
    setNodeData
  }
}
