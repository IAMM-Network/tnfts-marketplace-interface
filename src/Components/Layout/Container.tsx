import { Box, BoxProps } from "../Box";

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box mx="auto" maxWidth="540px" {...props}>
    {children}
  </Box>
);

export default Container;
