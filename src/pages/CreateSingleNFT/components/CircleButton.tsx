import styled from 'styled-components'

interface CircleButtonProps {
  active: boolean
  onClick?: () => any
}

interface TextProps {
  color?: string
}

const StyledCircleButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#8B40F4' : '#696969')};
  border: none;
  border-radius: 8px;
  display: grid;
  height: 44px;
  padding: 0.3rem;
  place-items: center;
  width: 44px;
`

const Text = styled.h6<TextProps>`
  color: ${({ color }) => (color ? color : 'white')};
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
`

const CircleButton: React.FC<CircleButtonProps> = ({ active, ...props }) => (
  <StyledCircleButton active={active} {...props}>
    <Text>+</Text>
  </StyledCircleButton>
)

export default CircleButton
