import InductionCooker from "~/components/induction-cooker";
import {InductionCookerStatus} from "~/types/induction-cooker.ts";

const Section1 = () => {
  return (
    <div className="section1">
      <InductionCooker status={InductionCookerStatus.IDLE} />
      <InductionCooker status={InductionCookerStatus.HAS_POT} />
      <InductionCooker status={InductionCookerStatus.HEATING} />
      <InductionCooker status={InductionCookerStatus.Completed} />
    </div>
  )
}

export default Section1
