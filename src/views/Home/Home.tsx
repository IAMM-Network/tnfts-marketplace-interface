import { FC } from 'react';
import { Grid } from '../../components/Box';
import { HomeWrapper, Title, HeadText, HeadImage } from './styles';
import { Container } from '../../components/Layout';

import IAMMGradientIcon from '../../assets/images/iamm-home.png';

const Home: FC = () => {
  return (
    <HomeWrapper>
      <Container>
        <Grid alignItems='center' justifyContent='center'>
          <Title>Create, collect, mix & pimp – libreNFT</Title>
          <HeadText>Building libre and creative economies through impact meta-markets</HeadText>
        </Grid>
        <Grid justifyContent='center' alignItems='center'>
          <HeadImage width={330} src={IAMMGradientIcon} alt='IAMM-3d-gradient-icon' />
        </Grid>
        <Grid justifyContent='center' alignItems='center'>
          <HeadText>Building libre and creative economies through impact meta-markets</HeadText>
        </Grid>
      </Container>
    </HomeWrapper>
  );
};

export default Home;
