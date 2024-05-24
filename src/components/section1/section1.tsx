import InductionCooker from "~/components/induction-cooker";
import {InductionCookerStatus} from "~/types/induction-cooker.ts";
import useSystemStore from "~/store/systemStatus.ts";
import {useEffect} from "react";

const Section1 = () => {
  const getSystemStatus = useSystemStore(state => state.getSystemStatus);
  const status = useSystemStore(state => state.status);

  useEffect(() => {
    getSystemStatus()
    setInterval(() => {
      getSystemStatus()
    }, 1000)
  }, [])

  return (
    <div className="section1">
      {
        "induction_cooker_status" in status ? status.induction_cooker_status?.map((item, index) => {
          return <InductionCooker key={index} inductionCooker={item}
                                  status={item.heat_status === "open" ? InductionCookerStatus.HEATING : InductionCookerStatus.IDLE}/>
        }) : null
      }
    </div>
  )
}

export default Section1
