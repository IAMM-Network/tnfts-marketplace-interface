import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 13 13' {...props} fill='none'>
    <circle cx={6.5} cy={6.5} r={6.5} fill={props.fill} />
    <path
      d='M5.03 6.144c.297.293.576.602.91.953l1.27-1.8c.322-.452.642-.904.971-1.351.237-.322.39-.345.73-.136.81.498.822.523.297 1.276a432.87 432.87 0 0 1-2.498 3.55c-.379.533-.653.559-1.142.103-.66-.615-1.31-1.242-1.957-1.87-.264-.254-.258-.428-.006-.696.66-.703.737-.707 1.425-.029Z'
      fill='none'
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
