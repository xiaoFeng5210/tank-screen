import {InductionCookerStove} from "~/types/enum.ts";

export interface StovenContent {
  status: InductionCookerStove.HEATING | InductionCookerStove.IDLE,
  temperature: number,
  error: string,
}
