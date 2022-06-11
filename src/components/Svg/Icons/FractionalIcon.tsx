import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 13 13' {...props} fill='none'>
    <path
      d='M12.074 6.13c0 2.249-1.817 4.143-4.2 4.378V1.75c2.383.235 4.2 2.13 4.2 4.38Z'
      stroke={props.fill}
      strokeMiterlimit={10}
      strokeLinejoin='bevel'
    />
    <path d='M6.5 0C2.91 0 0 2.744 0 6.13c0 3.384 2.91 6.128 6.5 6.128V0Z' fill={props.fill} />
  </Svg>
)

export default Icon

Icon.defaultProps = {
  fill: 'white',
}
