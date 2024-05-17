import {TFunction} from "i18next";

export enum OrderProcess {
  put_bowl = 0,
  add_soup,
  feeding,
  heating ,
  waiting_served,
  eating_out,
  done,
}

export const OrderProcessText = (t: TFunction ) => {
  return {
    [OrderProcess.put_bowl]: t('put_bowl'),
    [OrderProcess.add_soup]: t('add_soup'),
    [OrderProcess.feeding]: t('feeding'),
    [OrderProcess.heating]: t('heating'),
    [OrderProcess.waiting_served]: t('waiting_served'),
    [OrderProcess.eating_out]: t('eating_out'),
    [OrderProcess.done]: t('done'),
  }
}

/**
 * 电磁炉状态
 */
export enum InductionCookerStatus {
}
