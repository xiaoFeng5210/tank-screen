import {InductionCookerStove} from "~/types/enum.ts";

export interface StovenContent {
  status: InductionCookerStove.HEATING | InductionCookerStove.IDLE,
  temperature: number,
  error: string,
}

export interface InductionCookerStatusResItem {
  heat_status: "open" | "close"
  bowl_exit: number
  temperature1: number
  temperature2: number
  error: string[]
}

export interface SystemStatus {
  bowl: number[]
  cabinet: number[]  // 面柜 料柜
  robot_status: number
  scheduler_status: number

  // 电磁炉
  induction_cooker_status: InductionCookerStatusResItem[],

  // 出餐位
  bowl_out: number[]

  messages: {
    error: string[]
    warning: string[]
  }
}
