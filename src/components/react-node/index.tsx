import { Node } from '@antv/x6'

const NodeComponent = ({ node }: { node: Node }) => {
  const { label, ids } = node.getData()
  return (
    <div className="react-node">
      {label}
    </div>
  )
}

export default NodeComponent
