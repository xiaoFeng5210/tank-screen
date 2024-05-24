import {fetchGetMessages} from "~/api";
import {useEffect, useState} from "react";

interface MapValue {
  "zh-CN": string;
  "en": string;
  "ko-KR": string;
}

interface MessagesMap {
  [key: string]: MapValue
}

const initialWarnings: MessagesMap = {
  "401": {
    "zh-CN": "出餐位已满，如制作完成请尽快取走",
    "en": "The meal out position is full, please take it away as soon as it is made",
    "ko-KR": "출식품이 가득 찼습니다. 제작이 완료되면 빨리 가져가십시오."
  },
  "402": {
    "zh-CN": "碗已空，请尽快补足",
    "en": "The bowl is empty, please replenish it as soon as possible",
    "ko-KR": "그릇이 비어 있습니다. 빨리 보충하십시오."
  },
  "403": {
    "zh-CN": "货柜已空，请尽快补足",
    "en": "The container is empty, please replenish it as soon as possible",
    "ko-KR": "화물칸이 비어 있습니다. 빨리 보충하십시오."
  },
  "406": {
    "zh-CN": "第1层商品已空，请补充食材",
    "en": "The first layer of goods is empty, please replenish the ingredients",
    "ko-KR": "1층 상품이 비어 있습니다. 재료를 보충하십시오."
  },
  "407": {
    "zh-CN": "第2层商品已空，请补充食材",
    "en": "The second layer of goods is empty, please replenish the ingredients",
    "ko-KR": "2층 상품이 비어 있습니다. 재료를 보충하십시오."
  },
  "408": {
    "zh-CN": "第3层商品已空，请补充食材",
    "en": "The third layer of goods is empty, please replenish the ingredients",
    "ko-KR": "3층 상품이 비어 있습니다. 재료를 보충하십시오."
  },
  "409": {
    "zh-CN": "第4层商品已空，请补充食材",
    "en": "The fourth layer of goods is empty, please replenish the ingredients",
    "ko-KR": "4층 상품이 비어 있습니다. 재료를 보충하십시오."
  },
  "411": {
    "zh-CN": "煮炉加水中",
    "en": "The cooking furnace is adding water",
    "ko-KR": "끓이는 화로에 물을 추가 중입니다."
  },
  "412": {
    "zh-CN": "煮炉温度异常",
    "en": "The temperature of the cooking furnace is abnormal",
    "ko-KR": "끓이는 화로의 온도가 비정상입니다."
  },
  "413": {
    "zh-CN": "煮炉缺水",
    "en": "The cooking furnace is short of water",
    "ko-KR": "끓이는 화로에 물이 부족합니다."
  },
  "414": {
    "zh-CN": "煮炉水满",
    "en": "The cooking furnace is full of water",
    "ko-KR": "끓이는 화로에 물이 가득 찼습니다."
  },
  "415": {
    "zh-CN": "汤炉加水中",
    "en": "The soup furnace is adding water",
    "ko-KR": "스프 화로에 물을 추가 중입니다."
  },
  "416": {
    "zh-CN": "汤炉温度异常",
    "en": "The temperature of the soup furnace is abnormal",
    "ko-KR": "스프 화로의 온도가 비정상입니다."
  },
  "417": {
    "zh-CN": "汤炉缺水",
    "en": "The soup furnace is short of water",
    "ko-KR": "스프 화로에 물이 부족합니다."
  },
  "418": {
    "zh-CN": "汤炉水满",
    "en": "The soup furnace is full of water",
    "ko-KR": "스프 화로에 물이 가득 찼습니다."
  },
  "419": {
    "zh-CN": "煮炉等待煮沸中",
    "en": "The cooking furnace is waiting for boiling",
    "ko-KR": "끓이는 화로가 끓기를 기다리고 있습니다."
  }
}

const initialErrors: MessagesMap = {
  "501": {
    "zh-CN": "机器人未启动",
    "en": "The robot is not started",
    "ko-KR": "로봇이 시작되지 않았습니다."
  },
  "502": {
    "zh-CN": "调度系统异常停止，请重启",
    "en": "The scheduling system is abnormally stopped, please restart",
    "ko-KR": "스케줄링 시스템이 비정상적으로 중지되었습니다. 다시 시작하십시오."
  },
  "503": {
    "zh-CN": "制面机器通讯异常",
    "en": "The noodle machine communication is abnormal",
    "ko-KR": "면기계 통신이 비정상입니다."
  },
  "504": {
    "zh-CN": "制面机器状态异常",
    "en": "The noodle machine status is abnormal",
    "ko-KR": "면기계 상태가 비정상입니다."
  },
  "505": {
    "zh-CN": "煮炉通讯异常",
    "en": "The cooking furnace communication is abnormal",
    "ko-KR": "끓이는 화로 통신이 비정상입니다."
  },
  "506": {
    "zh-CN": "推杆通讯异常",
    "en": "The push rod communication is abnormal",
    "ko-KR": "푸시 로드 통신이 비정상입니다."
  }
}

export const useSystemMessages = () => {
  const [warnings, setWarnings] = useState<MessagesMap>();
  const [errors, setErrors] = useState<MessagesMap>();

  const getMessagesConfig = async () => {
    try {
      const data = await fetchGetMessages();
      setWarnings(data?.warning ?? initialWarnings);
      setErrors(data?.error ?? initialErrors);
    } catch (e) {
      setWarnings(initialWarnings);
      setErrors(initialErrors);
    }
  }

  const renderMessage = (type: "warning" | "error", code: string, i18n: string) => {
    const messages = type === "warning" ? warnings : errors;
    // @ts-ignore
    return messages?.[code][i18n];
  }

  return {
    renderMessage,
    getMessagesConfig
  }
}



















