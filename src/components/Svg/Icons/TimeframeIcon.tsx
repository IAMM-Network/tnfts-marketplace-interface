import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 13 13' {...props} fill='none'>
    <path
      d='M0 12.635h13V6.818H0v5.817Zm12.494-.445h-6.39c1.08-.414 1.834-1.36 1.834-2.463s-.755-2.05-1.834-2.463h6.39v4.926ZM0 0v5.818h13V0H0Zm.506.446h6.225c-1.08.413-1.834 1.36-1.834 2.463 0 1.102.754 2.049 1.834 2.462H.506V.446Z'
      fill={props.fill}
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
