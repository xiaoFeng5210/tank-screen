import { create } from 'zustand'
import {OrderItem} from "~/api";

interface State {
  orderList: OrderItem[]
}

const useOrderStore = create<State>(() => ({
  orderList: [
    {
      time_expected: 1000,
      time_left: 1000,
      total_time: 1000,
      order_id: 1,
      status: 0
    },
    {
      time_expected: 1000,
      time_left: 1000,
      total_time: 1000,
      order_id: 99,
      status: 0
    },
    {
      time_expected: 1000,
      time_left: 1000,
      total_time: 1000,
      order_id: 100,
      status: 0
    },
    {
      time_expected: 1000,
      time_left: 1000,
      total_time: 1000,
      order_id: 102,
      status: 0
    },
  ],
}))

export default useOrderStore
