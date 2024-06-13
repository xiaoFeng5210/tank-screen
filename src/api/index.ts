import {OrderProcess} from '~/types/enum';
import axiosInstance from '../utils/axios-config';
import {SystemStatus} from '~/types/common';

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
  const data = params ? {cmd, params} : {cmd};
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
export function fetchCookNoodlesStatus(): Promise<SystemStatus> {
  return axiosInstance.get(prepositionUrl + `/system_status`);
}

export interface OrderItem {
  time_expected: number;
  time_left: number;
  total_time: number;
  order_id: number;
  status: OrderProcess
}

type OrderList = OrderItem[];

/**
 * 列表请求
 * @param count 数量
 * @param date 日期 0为当天 30 为 30天
 */
export const fetchGetOrderList = (count: number, date = 0): Promise<OrderList> => {
  return axiosInstance.get(prepositionUrl + `/order_list?count=${count}&date=${date}`);
}


/**
 * 获取菜品配置
 */
export function fetchGetFoodSetting() {
  return axiosInstance.get(prepositionUrl + `/dish_config`);
}


/**
 * 菜品配置
 * {cabinet:{0:0, 1:0, 2:1}, food:{0:{name:'面条', cook_time:120, soft_time:5},
 * cabinet：第0层菜品为0号菜，第1层为0号菜，第2层为1号菜
 *  food：菜品配置，name-名称、cook_time-煮时长、soft_time：软口感增加时长
 * cook_time 烹煮时长
 * soft_time 较软口感需要增加的时长
 * soup_time 加汤时长
 */
export function fetchSaveDishConfig(data: any) {
  return axiosInstance.post(prepositionUrl + '/dish_config', data);
}


/**
 * 信息国际化配置
 */
export function fetchGetMessages() {
  return axiosInstance.get(prepositionUrl + `/translation_config`);
}



















