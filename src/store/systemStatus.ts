import {create} from 'zustand'
import {fetchCookNoodlesStatus, OrderItem} from "~/api";
import {SystemStatus} from "~/types/common.ts";

interface State {
  status: SystemStatus | {}
}

interface Action {
  getSystemStatus: () => void
}

const useSystemStore = create<State & Action>((set) => ({
  status: {
    induction_cooker_status: [],

  },

  async getSystemStatus() {
    const res = await fetchCookNoodlesStatus().catch(() => {
      return
    });
    if (res) {
      set({status: res})
    }
  }
}))

export default useSystemStore

