import {create} from 'zustand'
import {fetchCookNoodlesStatus, fetchGetFoodSetting, fetchSaveDishConfig} from "~/api";
import {SystemStatus} from "~/types/common.ts";

interface State {
  dishConfig: any
}

interface Action {
  getDishConfig: () => Promise<void>
  saveDishConfig: () => Promise<void>
}

const useDishConfigStore = create<State & Action>((set, get) => ({
  dishConfig: {
    soup: []
  },

  async getDishConfig() {
    const res = await fetchGetFoodSetting().catch(e => Promise.reject(e));
    console.log(res)
    set({dishConfig: res || {}})
  },

  async saveDishConfig() {
    const dishConfig = get().dishConfig
    console.log(dishConfig)
    const res = await fetchSaveDishConfig(dishConfig)
  }

}))

export const setDishConfig = (dishConfig: any) => {
  dishConfig.soup.forEach(item => {
    if (typeof item.time === 'string') {
      item.time = Number(item.time)
    }
  })
  console.log(dishConfig)
  useDishConfigStore.setState({dishConfig})
}

export default useDishConfigStore

