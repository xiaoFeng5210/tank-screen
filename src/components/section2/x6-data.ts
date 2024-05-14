import Theme from "~/assets/theme.ts";

export const generateAttr = () => {
  return {
    attrs: {
      body: {
        stroke: '#2A2225',
        fill: '#ffffff',
        rx: 10,
        ry: 10,
      },
      text: {
        fontsize: 14,
        fill: '#333',
      }
    },
  }
}

/**
 * x6高亮
 */
export const highlight =  {
  highlighting: {
    // 连接桩可以被连接时在连接桩外围围渲染一个包围框
    magnetAvailable: {
      name: 'stroke',
      args: {
        attrs: {
          fill: '#fff',
          stroke: '#A4DEB1',
          strokeWidth: 4,
        },
      },
    },
    // 连接桩吸附连线时在连接桩外围围渲染一个包围框
    magnetAdsorbed: {
      name: 'stroke',
      args: {
        attrs: {
          fill: '#fff',
          stroke: '#31d0c6',
          strokeWidth: 4,
        },
      },
    },
  },
}

export const generateNodeProps = () => {
  return {
    width: 140,
    height: 80,
  }
}

export const currentFlowStyle = {
  body: {
    fill: Theme.dipoRed
  },
  text: {
    fill: '#ffffff'
  }

}
