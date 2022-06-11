import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 25 25' {...props} fill='none'>
    <circle cx='12.5' cy='12.5' r='12' stroke={props.fill} />
    <path
      d='M18.75 18.6234C16.883 16.7564 15.0115 14.885 13.1405 13.0139C13.9229 13.0139 14.7202 13.0139 15.5368 13.0139C15.5368 10.7536 15.5368 8.50756 15.5368 6.25C16.6177 6.25 17.6793 6.25 18.75 6.25C18.75 10.3858 18.75 14.5154 18.75 18.6234Z'
      fill={props.fill}
    />
    <path
      d='M9.45444 18.6719C8.37761 18.6719 7.32006 18.6719 6.25 18.6719C6.25 14.5368 6.25 10.4045 6.25 6.29004C8.11568 8.15571 9.9871 10.0271 11.8639 11.9043C11.0744 11.9043 10.2741 11.9043 9.4541 11.9043C9.45444 14.171 9.45444 16.4171 9.45444 18.6719Z'
      fill={props.fill}
    />
  </Svg>
)

export default Icon

Icon.defaultProps = {
  fill: 'white',
}
