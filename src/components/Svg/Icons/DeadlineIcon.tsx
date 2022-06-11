import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => (
  <Svg viewBox='0 0 7 13' {...props} fill='none'>
    <path
      d='m2.422 6.003-.928-.662c-.191-.136-.385-.267-.573-.407C.315 4.48.004 3.844 0 3.024c-.003-.274 0-1.548 0-2.821V0h6.998v.189c0 1.28.003 2.559 0 2.838-.003.828-.321 1.47-.936 1.918-.44.321-.888.632-1.332.947-.043.031-.084.065-.144.112.15.108.283.208.42.304.341.243.685.483 1.026.728.64.458.966 1.113.966 1.97V13H.001v-.228c0-1.262-.002-2.523 0-3.785.003-.843.326-1.49.955-1.942.477-.344.958-.682 1.466-1.042ZM.675 8.416h5.638c-.014-.05-.021-.09-.035-.126a1.5 1.5 0 0 0-.536-.679c-.493-.35-.987-.697-1.48-1.049-.416-.297-.415-.823 0-1.12.489-.347.978-.693 1.465-1.04.453-.324.685-.785.684-1.392V.83c0-.057-.007-.113-.01-.173-.035-.005-.055-.012-.075-.012-1.869 0-3.738 0-5.607-.003C.609.642.587.69.587.8.59 1.89.585 2.98.591 3.068c.004.577.24 1.018.671 1.326.488.348.978.692 1.466 1.04.429.308.432.824.005 1.13-.5.36-1.003.713-1.504 1.071-.255.182-.436.435-.554.781Z'
      fill={props.fill}
    />
  </Svg>
)

Icon.defaultProps = {
  fill: 'white',
}

export default Icon
