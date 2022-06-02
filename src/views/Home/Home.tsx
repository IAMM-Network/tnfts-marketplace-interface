import { FC } from 'react';
import { Grid } from '../../components/Box';
import { HomeWrapper, Title, HeadText, HeadImage } from './styles';
import { Container } from '../../components/Layout';

import IAMMGradientIcon from '../../assets/images/iamm-home.png';

const Home: FC = () => {
  return (
    <HomeWrapper>
      <Container>
        <Grid alignItems='end' justifyContent='center' marginBottom="-24px">
          <Title>Create, collect, mix & pimp – libreNFT</Title>
        </Grid>
        <Grid alignItems='center' justifyContent='center'>
          <HeadImage width={280} src={IAMMGradientIcon} alt='IAMM-3d-gradient-icon' />
        </Grid>
        <Grid alignItems='start' justifyContent='center' marginTop="-32px">
          <HeadText>Building libre and creative economies through impact meta-markets</HeadText>
        </Grid>
      </Container>
    </HomeWrapper>
  );
};

export default Home;
