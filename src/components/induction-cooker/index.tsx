import './index.scss'
import {InductionCookerStatus} from "~/types/induction-cooker.ts";
import {FC, useMemo} from "react";
import { motion } from "framer-motion"

interface InductionCookerProps {
  status: InductionCookerStatus
}

const heatingAnimate={
  scale: [1, 0.9, 0.9, 1, 1],
  rotate: [0, 0, 270, 270, 0],
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
}
const heatingTransition={
  repeat: Infinity, // 无限循环
  duration: 2, // 动画时长
}

const completedAnimate = {
  scale: [1,1.1, 1, 0.9],
  opacity: [1, 0.5, 0.2, 0.5],
}

const completedTransition = {
  repeat: Infinity,
  duration: 1,
}

const haspotAnimate = {
  opacity: [1, 0, 1],
}

const haspotTransition = {
  repeat: Infinity,
  duration: 2.5,
}

const InductionCooker: FC<InductionCookerProps> = ({status = InductionCookerStatus.IDLE}) => {
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
      <div className="w-[150px] h-[150px] bg-[#252222] rounded-full flex justify-center items-center">
        {statusMatch}
      </div>
    </div>
  );
}
export default InductionCooker
