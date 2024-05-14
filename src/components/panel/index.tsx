import './index.css'
import React, {FC} from "react";

interface PanelProps {
  children?: React.ReactNode
}

const Panel: FC<PanelProps> = ({children}) => {
  return (
    <div className="container">
      <div className="frosted-glass-panel">
        {children}
      </div>
    </div>
  )
}

export default Panel
