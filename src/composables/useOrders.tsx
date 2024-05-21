import useOrderStore from "~/store/order.ts";

const useOrders = () => {
  const getOrderList = useOrderStore(state => state.getOrderList)

  let timer: NodeJS.Timeout | null = null;

  async function pollOrderList(callback: Function) {
    clearTimer()
    setInterval(async () => {
      const res = await getOrderList()
      if (res) {
        callback && callback(res)
      }
    }, 1000)
  }

  function clearTimer() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  return {pollOrderList}
}

export default useOrders
