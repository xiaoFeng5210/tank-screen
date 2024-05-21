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
export enum InductionCookerStove {
  STATUS = 'STATUS',
  // 空闲
  IDLE = 'IDLE',
  // 加热中
  HEATING = 'HEATING',
  // 异常
  ERROR = 'ERROR',
  // 温度
  TEMPERATURE = 'TEMPERATURE',
}

export const InductionCookerStatusText = (t: TFunction) => {
  return {
    [InductionCookerStove.STATUS]: t('status'),
    [InductionCookerStove.IDLE]: t('idle'),
    [InductionCookerStove.HEATING]: t('heating'),
    [InductionCookerStove.ERROR]: t('error'),
    [InductionCookerStove.TEMPERATURE]: t('temperature'),
  }
}

/**
 * 机器人状态
 */
export function RobotStatusContent(t: TFunction) {
  return {
    0: t('0'),
    1: t('1'),
    2: t('2'),
    3: t('3'),
    4: t('4'),
    5: t('5'),
    6: t('6'),
    7: t('7'),
    11: t('11'),
  }
}
