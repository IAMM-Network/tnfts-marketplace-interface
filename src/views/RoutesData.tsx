import { CreateCollection } from "./CreateCollection";
import { CreateSingleNFT } from "./CreateSingleNFT";

export const RoutesData = [
  {
    view: <CreateSingleNFT />,
    path: "create-single-nft",
  },
  {
    view: <CreateCollection />,
    path: "create-collection",
  },
];
