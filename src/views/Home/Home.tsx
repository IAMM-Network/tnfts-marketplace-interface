import { FC } from "react";
import { Box, Grid } from "../../components/Box";
import { HomeWrapper, Title, HeadText, HeadImage } from "./styles";
import { Button } from "../../components/Button";
import { Container } from "../../components/Layout";

import IAMMGradientIcon from "../../assets/images/iamm-3d-gradient.png";

const Home: FC = () => {
  return (
    <HomeWrapper>
      <Container>
        <Grid alignItems="center" justifyContent="center">
          <Title>Create, collect, mix & pimp smartNFTs</Title>
          <HeadText>
            Building libre and creative economies through impact meta-markets
          </HeadText>
        </Grid>
        <Grid justifyContent="center" alignItems="center">
          <HeadImage
            width={330}
            src={IAMMGradientIcon}
            alt="IAMM-3d-gradient-icon"
          />
        </Grid>
        <Grid justifyContent="center" alignItems="center">
          <Button variant="cta">JOIN OUR DISCORD</Button>
        </Grid>
      </Container>
    </HomeWrapper>
  );
};

export default Home;
