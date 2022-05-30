import { useState, useEffect, createElement } from "react";
import { Flex, Grid } from "../../components/Box";
import { Container } from "../../components/Layout";
import {
  TitleSection,
  Text,
  Section,
  Input,
  MediaWrapper,
  Preview,
  TextArea,
} from "./styles";
import HeadPurple from "../../assets/images/head-purple.png";
import { Button } from "../../components/Button";
import {
  AudioFileIcon,
  ImageFileIcon,
  VideFileIcon,
  StarIcon,
  CKBCircleIcon,
} from "../../components/Svg";

const CreateSingleNFT = () => {
  const [name, setName] = useState("");
  const [externalLink, setExternalLink] = useState(
    "https://yoursite.io/item/123"
  );

  const [selectedFile, setSelectedFile] = useState(undefined);
  const [preview, setPreview] = useState<string | undefined>(undefined);

  const [description, setDescription] = useState(
    "We suggest a nice and detailed description for your item, but 120 character only."
  );
  const [supply, setSupply] = useState(0);
  const [mintingStatus, setMintingStatus] = useState(0);
  const [mediaSelected, setMediaSelected] = useState(0);

  const onSelectedImage = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const createNFT = () => {
    return setMintingStatus(1);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const mediaOptions = [
    {
      icon: ImageFileIcon,
      text: "Image",
    },
    {
      icon: VideFileIcon,
      text: "Video",
    },
    {
      icon: AudioFileIcon,
      text: "Audio",
    },
    {
      icon: StarIcon,
      text: "Custom",
    },
  ];

  return (
    <Container maxWidth="90%">
      <Flex flexDirection="column">
        <TitleSection>
          <Text weight={600} size="21px">
            Create smartNFT
          </Text>
          <Text>*Required fields</Text>
        </TitleSection>

        <Section justifyContent="left">
          <Text weight={600} size="14px">
            Display name*
          </Text>
          <Input
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Section>

        <Section>
          <Text weight={600} size="14px">
            File type*
          </Text>

          <Grid
            gridTemplateColumns="1fr 1fr"
            gridTemplateRows="auto"
            gridGap="1rem"
            width="100%"
          >
            {mediaOptions.map((e, index) => (
              <MediaWrapper
                active={index === mediaSelected}
                onClick={() => setMediaSelected(index)}
              >
                <Grid>
                  {createElement(e.icon, {
                    fill: index === mediaSelected ? "white" : "#696969",
                    width: 70
                  })}
                  <Text
                    size="14px"
                    weight={600}
                    margin="0.5rem 0 0 0"
                    color={index === mediaSelected ? "white" : "#696969"}
                  >
                    {e.text}
                  </Text>
                </Grid>
              </MediaWrapper>
            ))}
          </Grid>
        </Section>

        <Section>
          <Text weight={600} size="14px">
            Upload file
          </Text>
          <Text margin="0.5rem 0 0 0">
            File types supported: JPG, PNG, GIF, SVG.
          </Text>
          <Text margin="0px">Max Size: 100MB</Text>
          <Input
            type="file"
            placeholder="Upload file..."
            onChange={onSelectedImage}
          />
        </Section>

        <Section>
          <Text weight={600} size="14px">
            Preview
          </Text>
          <Preview>
            <img
              alt="head-purple"
              src={selectedFile ? preview : HeadPurple}
              width={251}
              height={186}
            />
          </Preview>
        </Section>

        <Section>
          <Text weight={600} size="14px">
            External link
          </Text>
          <Text margin="0.5rem 0 0 0">
            IAMM will add a link to this URL on this item's detail page, so that
            others can click to learn more about it. You are welcome to link to
            your own site with more details.
          </Text>
          <Input
            type="text"
            placeholder="External link"
            value={externalLink}
            onChange={(e) => setExternalLink(e.target.value)}
          />
        </Section>

        <Section>
          <Text weight={600} size="14px">
            Description
          </Text>
          <Text margin="0.5rem 0 0 0">
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </Text>
          <TextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Section>

        <Section>
          <Text weight={600} size="14px">
            How smart
          </Text>
          <Text margin="0.5rem 0 0 0">Select the predefined smartPlugins</Text>

          {[1, 2, 3].map((e) => (
            <Grid
              margin="0.5rem 0"
              width="100%"
              gridTemplateColumns="1fr 2fr 1fr"
              alignItems="center"
            >
              <Grid alignSelf="center">
                <CKBCircleIcon width={40} />
              </Grid>
              <Grid flexDirection="column" width="100%">
                <Text weight={600}>Ownership Lock</Text>
                <Text margin="0">Lorem ipsum dolor sit amet</Text>
              </Grid>
              <Grid width="100%" alignItems="center" justifyContent="right">
                <Button
                  style={{ justifyContent: "center" }}
                  variant="secondary"
                  width={44}
                  height={44}
                >
                  <Text weight={200} size="2rem">
                    +
                  </Text>
                </Button>
              </Grid>
            </Grid>
          ))}
        </Section>

        <Section>
          <Text weight={600} size="14px">
            Impact
          </Text>
          <Text margin="0.5rem 0 0 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Section>

        <Section>
          <Text weight={600} size="14px">
            Supply
          </Text>
          <Text margin="0.5rem 0 0 0">
            The number of items that can be minted.
          </Text>
          <Input
            type="number"
            placeholder="#"
            value={supply}
            onChange={(e) => setSupply(parseInt(e.target.value, 10))}
          />
        </Section>

        <Flex justifyContent="center">
          <Button onClick={createNFT} variant="cta">
            {mintingStatus == 0 ? "Create" : "Minting..."}
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default CreateSingleNFT;
