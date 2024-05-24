import { Node } from '@antv/x6'
import { Badge } from "~/components/ui/badge"
import {useMemo} from "react";
import {useTranslation} from "react-i18next";


const NodeComponent = ({ node }: { node: Node }) => {
  const {t} = useTranslation("orderItem")
  const { label, ids } = node.getData()
  const highlight = useMemo(() => `border-2 border-${ids.length > 0 ? 'green' : 'black'}-500`, [ids])
  const renderStyle = useMemo(() => `w-full h-full bg-white rounded-xl shadow-xl p-2 ${highlight}`, [highlight])
  return (
    <div className={renderStyle}>
      <h4 className="text-[#252222] text-center text-2xl">{label}</h4>
      <div className="grid grid-rows-2 grid-cols-2 gap-2">
        {
          ids.map((id: string) => (
            <Badge key={id} id={id}>{id}</Badge>
          ))
        }
      </div>
    </div>
  )
}

export default NodeComponent
