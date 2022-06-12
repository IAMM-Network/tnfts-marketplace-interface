import BasePopup from '../BasePopup'

interface PopupProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Popup: React.FC<PopupProps> = props => {
  const { onClick } = props
  return (
    <BasePopup title='Add Ownership Lock' onSave={onClick}>
      Hola
    </BasePopup>
  )
}

export default Popup
