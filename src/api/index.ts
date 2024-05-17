import axiosInstance from '../utils/axios-config';

const url = new URL(window.location.href);
// @ts-ignore http://192.168.4.43:8092/action http://192.168.4.56:8092/action
export const prepositionUrl = import.meta.env.DEV ? "api/action" : "/action";


/**
 * 控制操作
 * @param cmd
 * start_robot-启动机器人
 * stop_robot-停止机器人
 * start_scheduler-启动调度系统
 * stop_scheduler-停止调度系统
 * back_home：机器人回起始位
 * @param params
 */
export function fetchControlRobot(cmd: string, params?: number[]) {
  const data = params ? { cmd, params } : { cmd };
  return axiosInstance.post(prepositionUrl + "/control", data);
}

/**
 * 获取煮面系统状态
 *
 * @response
 * robot_status：机器人状态，5为空闲
 * scheduler_status：煮面调度系统状态，0-空闲；1-工作中；3-停止 2-启动中
 * order_count：本次启动后的总订单数量
 * pot：煮洞状态，0-空闲、1-正在煮、2-异常
 *  cabinet：面柜，0-无、1-有
 *  bowl：碗，0-无、1-有
 *  bowl_out：出餐位，0-无、1-有
 */
export function fetchCookNoodlesStatus() {
  return axiosInstance.get(prepositionUrl + `/system_status`);
}

export function fetchOrderList() {

}
