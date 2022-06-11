import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 31 24' {...props} fill='none'>
    <path
      d='M28.836 6.686C30.574 4.5 29.216 1 26.629 1H4.602C2.015 1 .656 4.5 2.395 6.686'
      stroke={props.fill}
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d='m29.36 6.04-9.37 8.588c-2.561 2.348-6.188 2.348-8.749 0L1.871 6.04c-.103-.095-.256-.01-.256.142v14.021C1.615 21.748 2.701 23 4.041 23H27.19c1.34 0 2.425-1.253 2.425-2.797V6.183c0-.153-.152-.237-.255-.143Z'
      stroke={props.fill}
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
