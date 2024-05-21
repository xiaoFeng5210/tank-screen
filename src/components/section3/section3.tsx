import './index.css'
import Panel from "~/components/panel";
import {RobotStatusContent} from "~/types/enum.ts";
import {useTranslation} from "react-i18next";

const Section3 = () => {
  const t = useTranslation("robotStatus").t
  return (
    <div className="section3 h-full">
      <Panel>
        <h1 className="text-xl">机器人状态：{RobotStatusContent(t)[4]} </h1>
        <h1 className="text-xl">取碗位：有</h1>
        <h1 className="text-xl">出餐位：有</h1>
      </Panel>
    </div>
  )
}

export default Section3
