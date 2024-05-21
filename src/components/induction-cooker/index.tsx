import './index.scss'
import {InductionCookerStatus} from "~/types/induction-cooker.ts";
import React, {FC, useMemo} from "react";
import {motion} from "framer-motion"
import {useTranslation} from "react-i18next";
import {
  completedAnimate,
  completedTransition,
  haspotAnimate,
  haspotTransition,
  heatingAnimate,
  heatingTransition
} from "./animate";
import {StovenContent} from "~/types/common.ts";
import {TFunction} from "i18next";
import {InductionCookerStatusText} from "~/types/enum.ts";

interface InductionCookerProps {
  status: InductionCookerStatus,
}

type CardProps = {
  stove: StovenContent
  t: TFunction
}

const mockStove = {
  status: InductionCookerStatus.IDLE,
  temperature: 0,
  error: "错误信息"
}

const Card: React.FC<CardProps> = ({ stove, t }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <h4 className="font-bold text-xl mb-2">{t("status")}: {InductionCookerStatusText(t)[stove?.status] ?? ""}</h4>
      <h4 className="text-gray-700 text-base mb-4">{t("temperature")}: {stove?.temperature}</h4>
      <h4 className="text-gray-700 text-base">{t("err")}: {stove?.error}</h4>
    </div>
  );
};

const InductionCooker: FC<InductionCookerProps> = ({status = InductionCookerStatus.IDLE}) => {
  const {t} = useTranslation("stove");
  const statusMatch = useMemo(() => {
    if (status === InductionCookerStatus.IDLE) return <div className="w-[100px] h-[100px] bg-white rounded-full"></div>
    if (status === InductionCookerStatus.HEATING) return <motion.div animate={heatingAnimate} transition={heatingTransition} className="w-[100px] h-[100px] bg-[#FF0212] rounded-full"></motion.div>
    if (status === InductionCookerStatus.HAS_POT) return <motion.div animate={haspotAnimate} transition={haspotTransition} className="w-[100px] h-[100px] bg-[#4F81BD] rounded-full"></motion.div>
    if (status === InductionCookerStatus.ERROR) return <div className="w-[100px] h-[100px] rounded-full"></div>
    if (status === InductionCookerStatus.Completed) return <motion.div animate={completedAnimate} transition={completedTransition} className="w-[100px] h-[100px] bg-[#9BBB59] rounded-full"></motion.div>
    return <div className="w-[100px] h-[100px] bg-white rounded-full"></div>
  }, [status])

  return (
    <div className="induction_cooker flex justify-center items-center">
      <Card stove={mockStove} t={t} />
      <div className="w-[150px] h-[150px] bg-[#252222] rounded-full flex justify-center items-center">
        {statusMatch}
      </div>
    </div>
  );
}

export default InductionCooker
