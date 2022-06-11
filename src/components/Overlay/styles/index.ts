import styled from 'styled-components'
import { Box } from '../../Box'

export const StyledOverlay = styled(Box)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.8);
  z-index: 10000;
`
