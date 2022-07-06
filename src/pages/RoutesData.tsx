import { CreateCollection } from './CreateCollection'
import { CreateSingleNFT } from './CreateSingleNFT'
import { Home } from './Home'

export const RoutesData = [
  {
    view: <Home />,
    path: '/',
  },
  {
    view: <CreateSingleNFT />,
    path: 'create-single-nft',
  },
  {
    view: <CreateCollection />,
    path: 'create-collection',
  },
]
