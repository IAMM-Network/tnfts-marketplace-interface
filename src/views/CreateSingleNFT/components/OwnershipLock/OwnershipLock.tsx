import { Grid } from '../../../../components/Box'
import { Button } from '../../../../components/Button'
import { KeyIcon } from '../../../../components/Svg'
import useModal from '../../../../contexts/usePopup'
import { Text } from '../styles'
import Popup from './popup'

const OwnerShipLock: React.FC = props => {
  const [onPresentCallback] = useModal(<Popup onClick={() => alert('saved!')} />)
  return (
    <Grid margin='0.5rem 0' width='100%' gridTemplateColumns='1fr 2fr 1fr' alignItems='center'>
      <Grid alignSelf='center'>
        <KeyIcon fill='#8B40F4' />
      </Grid>
      <Grid flexDirection='column' width='100%'>
        <Text weight={600}>Ownership Lock</Text>
        <Text margin='0'>Lorem ipsum dolor sit amet</Text>
      </Grid>
      <Grid width='100%' alignItems='center' justifyContent='right'>
        <Button style={{ justifyContent: 'center' }} variant='secondary' width={44} height={44}>
          <Button onClick={onPresentCallback}>+</Button>
        </Button>
      </Grid>
    </Grid>
  )
}

export default OwnerShipLock
