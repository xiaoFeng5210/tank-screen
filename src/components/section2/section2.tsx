import {useX6} from "./x6.tsx";
import useOrders from "~/composables/useOrders.tsx";
import {useEffect} from "react";
import useOrderStore from "~/store/order.ts";


const Section2 = () => {
  const {containerRef, setNodeData} = useX6()
  const {pollOrderList} = useOrders()

  useEffect(() => {
    pollOrderList(setNodeData)
  }, []);

  return (
    <div className="w-full h-full" ref={containerRef}>

    </div>
  )
}
export default Section2
