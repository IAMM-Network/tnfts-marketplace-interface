import { Box, BoxProps } from "../Box";

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box className="container" mx="auto" maxWidth="540px" {...props}>
    {children}
  </Box>
);

export default Container;
