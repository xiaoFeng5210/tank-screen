import {useX6} from "./x6.tsx";

const Section2 = () => {
  const { containerRef } = useX6()
  return (
    <div className="w-full h-full" ref={containerRef}>
    </div>
  )
}
export default Section2
