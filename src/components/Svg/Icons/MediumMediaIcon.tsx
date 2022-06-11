import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 32 32' {...props} fill='none'>
    <path
      d='M30.375.375H1.625c-.691 0-1.25.559-1.25 1.25v28.75c0 .691.559 1.25 1.25 1.25h28.75c.691 0 1.25-.559 1.25-1.25V1.625c0-.691-.559-1.25-1.25-1.25ZM26 8.41l-1.594 1.527a.462.462 0 0 0-.18.446V21.62a.456.456 0 0 0 .18.445l1.563 1.528v.34h-7.844v-.325l1.613-1.566c.16-.16.16-.207.16-.445v-9.094l-4.492 11.39h-.605l-5.227-11.39v7.637c-.047.32.067.644.293.875l2.102 2.543v.34H6v-.34l2.102-2.543a1.02 1.02 0 0 0 .273-.875v-8.828a.757.757 0 0 0-.254-.653L6.254 8.41v-.34h5.8l4.477 9.825 3.942-9.817H26v.332Z'
      fill={props.fill}
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
