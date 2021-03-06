import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 10 12' {...props} fill='none'>
    <path
      d='M4.998 11.995c-.84 0-1.682.004-2.523-.001C.92 11.986.005 11.18.001 9.817 0 8.633.001 7.45 0 6.265c0-.826.383-1.451 1.204-1.876a.62.62 0 0 0 .284-.426c.064-.531.004-1.08.129-1.597C1.969.898 3.64-.15 5.268.018 7.136.21 8.47 1.45 8.497 3.02c.002.142.02.287-.002.426-.08.52.057.882.642 1.18.637.324.86.942.86 1.594.002 1.232.006 2.463 0 3.695-.007 1.22-.922 2.048-2.314 2.076-.895.018-1.79.004-2.685.004Zm1.569-7.861c0-.46.048-.889-.011-1.304-.095-.66-.778-1.14-1.538-1.145-.787-.007-1.484.477-1.578 1.159-.058.414-.011.84-.011 1.29h3.138Z'
      fill={props.fill}
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
