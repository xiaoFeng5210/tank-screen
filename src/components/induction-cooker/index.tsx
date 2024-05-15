import './index.scss'
import {InductionCookerStatus} from "~/types/induction-cooker.ts";
import {FC, useMemo} from "react";

interface InductionCookerProps {
  status: InductionCookerStatus
}

const InductionCooker: FC<InductionCookerProps> = ({status = InductionCookerStatus.IDLE}) => {

  const statusMatch = useMemo(() => {
    console.log(status)
    if (status === InductionCookerStatus.IDLE) return <div className="w-[100px] h-[100px] bg-white rounded-full"></div>
    if (status === InductionCookerStatus.HEATING) return <div className="w-[100px] h-[100px] bg-[#FF0212] rounded-full"></div>
    if (status === InductionCookerStatus.HAS_POT) return <div className="w-[100px] h-[100px] bg-[#4F81BD] rounded-full"></div>
    if (status === InductionCookerStatus.ERROR) return <div className="w-[100px] h-[100px] rounded-full"></div>
    if (status === InductionCookerStatus.Completed) return <div className="w-[100px] h-[100px] bg-[#9BBB59] rounded-full"></div>
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
