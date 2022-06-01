import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../Layout';
import { HeaderWrapper } from './styles';
import { DiscordMediaIcon, IAMMTextIcon, TwitterMediaIcon } from '../Svg';
import { Box, Flex } from '../Box';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <HeaderWrapper main={pathname !== '/'}>
      <Container maxWidth='90%'>
        <Flex alignItems='center' justifyContent='space-between' width='100%'>
          <IAMMTextIcon width='100px' fill='white' />
          <Flex>
            <Box marginRight={24}>
              <a href='https://twitter.com/IAMM_Network' target='_blank' rel='noreferrer'>
                <TwitterMediaIcon />
              </a>
            </Box>
            <Box>
              <a href='https://discord.com/invite/jQ4rGjj7fZ' target='_blank' rel='noreferrer'>
                <DiscordMediaIcon />
              </a>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
