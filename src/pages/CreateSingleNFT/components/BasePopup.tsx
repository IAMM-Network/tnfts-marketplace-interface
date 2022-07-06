import { Box, Flex } from '../../../components/Box'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Layout'
import { Hr, Text } from './styles'

interface BasePopupProps {
  title: string
  children: React.ReactNode
  onSave: React.MouseEventHandler<HTMLButtonElement>
}

const BasePopup: React.FC<BasePopupProps> = props => {
  const { title, children, onSave } = props
  return (
    <Box background='#1A1A1A' minHeight='100vh' width='100%' padding='1rem 0px'>
      <Container maxWidth='90%'>
        <Flex alignItems='center' flexDirection='column'>
          <Text margin='0' size='21px' weight={600}>
            {title}
          </Text>
          <Hr />
        </Flex>
        {children}
        <Box>
          <Hr />
          <Flex justifyContent='center' mt='3rem'>
            <Button variant='cta' onClick={onSave}>
              SAVE
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default BasePopup
