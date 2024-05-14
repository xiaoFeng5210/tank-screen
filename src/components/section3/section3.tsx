import './index.css'
import Panel from "~/components/panel";

const Section3 = () => {
  return (
    <div className="section3 h-full">
      <Panel>
        <h1 className="text-xl">机器人状态：</h1>
        <h1 className="text-xl">取碗位：有</h1>
        <h1 className="text-xl">出餐位：有</h1>
      </Panel>
    </div>
  )
}

export default Section3
