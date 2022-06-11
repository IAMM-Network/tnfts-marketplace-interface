import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 14 12' {...props} fill='none'>
    <rect x={9.6} y={7.2} width={3.6} height={4.8} rx={1} fill={props.fill} />
    <rect x={4.8} width={3.6} height={12} rx={1} fill={props.fill} />
    <rect y={2.4} width={3.6} height={9.6} rx={1} fill={props.fill} />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
