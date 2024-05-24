import './index.css'
import Panel from "~/components/panel";
import {RobotStatusContent} from "~/types/enum.ts";
import {useTranslation} from "react-i18next";
import useSystemStore from "~/store/systemStatus.ts";
import {SystemStatus} from "~/types/common.ts";
import {useEffect, useMemo} from "react";

const Section3 = () => {
  const status = useSystemStore(state => state.status) as SystemStatus
  const robot_status = useMemo<number>(() => {
    return "robot_status" in status ? Number(status.robot_status) : 0
  }, [status])

  const cabinents = useMemo(() => {
    return "cabinet" in status ? status.cabinet : []
  }, [status])

  const t = useTranslation("robotStatus").t
  return (
    <div className="section3 h-[300px]">
      <Panel>
        <h1 className="text-xl">{t("robot_status")}：{RobotStatusContent(t)[robot_status]} </h1>
        {
          cabinents.map((cabinet, index) => (
            <h1 key={index} className="text-xl">{t("cabinet") + (index + 1)}：{cabinet === 1 ? t("has") : t("none")}</h1>
          ))
        }
        {/*<h1 className="text-xl">{t("cabinet")}：{status.cabinet[0]} </h1>*/}
        {/*<h1 className="text-xl">取碗位：有</h1>*/}
        {/*<h1 className="text-xl">出餐位：有</h1>*/}
      </Panel>
    </div>
  )
}

export default Section3
