import {useX6} from "./x6.tsx";
import useOrderStore from "~/store/order.ts";
import useOrders from "~/composables/useOrders.tsx";
import {useEffect} from "react";


const Section2 = () => {
  const {pollOrderList} = useOrders()
  const { containerRef, setNodeData } = useX6()

  useEffect(() => {
    pollOrderList(setNodeData)
  }, []);

  return (
    <div className="w-full h-full" ref={containerRef}>

    </div>
  )
}
export default Section2
