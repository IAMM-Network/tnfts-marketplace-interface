import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 80 76' {...props} fill='none'>
    <path
      d='m43.516 2.894 6.43 19.649a4.22 4.22 0 0 0 4.017 2.895h20.811c4.09 0 5.79 5.193 2.481 7.58L60.42 45.162a4.176 4.176 0 0 0-1.534 4.686l6.43 19.649c1.263 3.861-3.188 7.07-6.497 4.685L41.984 62.04a4.246 4.246 0 0 0-4.963 0L20.186 74.182c-3.309 2.388-7.76-.824-6.497-4.685l6.43-19.649a4.172 4.172 0 0 0-1.534-4.686L1.75 33.018c-3.31-2.387-1.609-7.58 2.481-7.58h20.812a4.22 4.22 0 0 0 4.016-2.895l6.43-19.649c1.26-3.859 6.762-3.859 8.027 0Z'
      fill={props.fill}
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
