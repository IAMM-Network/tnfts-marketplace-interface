import styled from 'styled-components'

interface TextProps {
  color?: string
  size?: number | string
  weight?: number
  margin?: string
}

export const Text = styled.h3<TextProps>`
  color: ${({ color }) => (color ? color : 'white')};
  font-size: ${({ size }) => (size ? size : '12px')};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  margin: ${({ margin }) => (margin ? margin : '0.5rem 0')};
`
export const Hr = styled.hr`
  border: 0.5px solid #8b40f4;
  margin: 1rem 0;
  width: 100%;
`
