import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 13 13' {...props} fill='none'>
    <path fill={props.fill} d='M0 0h13v13H0z' />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
