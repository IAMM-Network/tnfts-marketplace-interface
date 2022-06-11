import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 26 26' {...props} fill='none'>
    <circle cx={10.706} cy={10} r={9} stroke={props.fill} strokeWidth={2} strokeLinecap='round' />
    <path d='m16.706 17 8 8' stroke={props.fill} strokeWidth={2} strokeLinecap='round' />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
