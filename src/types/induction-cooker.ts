export enum InductionCookerStatus {
  // 空闲
  IDLE = 'IDLE',
  // 加热
  HEATING = 'HEATING',
  // 有锅
  HAS_POT = 'HAS_POT',
  // 异常
  ERROR = 'ERROR',
  // 已完成，未取走
  Completed = 'Completed',
}
