import { Node } from '@antv/x6'
import { Badge } from "~/components/ui/badge"


const NodeComponent = ({ node }: { node: Node }) => {
  const { label, ids } = node.getData()
  return (
    <div className="react-node w-full h-full bg-white rounded-xl">
      <h4 className="text-[#252222]">{label}</h4>
      {
        ids.map((id: string) => (
          <Badge key={id} id={id} />
        ))
      }
    </div>
  )
}

export default NodeComponent
