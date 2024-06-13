import {create} from 'zustand'
import {fetchGetOrderList, OrderItem} from "~/api";

interface State {
  orderList: OrderItem[]
}

interface Action {
  getOrderList: () => Promise<OrderItem[] | undefined>
}

const useOrderStore = create<State & Action>((set, get) => ({
  orderList: [
    // {
    //   time_expected: 1000,
    //   time_left: 1000,
    //   total_time: 1000,
    //   order_id: 1,
    //   status: 6
    // },
    // {
    //   time_expected: 1000,
    //   time_left: 1000,
    //   total_time: 1000,
    //   order_id: 99,
    //   status: 5
    // },
    // {
    //   time_expected: 1000,
    //   time_left: 1000,
    //   total_time: 1000,
    //   order_id: 100,
    //   status: 0
    // },
    // {
    //   time_expected: 1000,
    //   time_left: 1000,
    //   total_time: 1000,
    //   order_id: 102,
    //   status: 3
    // },
  ],

  async getOrderList() {
    const res = await fetchGetOrderList(10).catch(() => {
      return
    });
    if (res) {
      set({orderList: res || []})
      return get().orderList
    }
    return
  },
}))

export default useOrderStore
