import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents >
        <CustomOverTitle>Impulsione seu negocio para o sucesso digital</CustomOverTitle>
        <Heading>Delineando o futuro com tecnologia</Heading>
        <Description>
        Bem-vindo à Kiwi Tech, onde transformamos ideias em realidade digital. Somos uma agência de tecnologia apaixonada por inovação, design elegante e soluções tecnológicas de alto desempenho, da concepção à implementação.</Description>
        <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            Solicitar Orçamento <span>&rarr;</span>
          </Button>
          <NextLink href="#whitepaper" passHref>
            <Button transparent>
              PRODUTOS <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer style={{ overflow: 'visible', height: '60rem', width: '100%'}}>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  
  display: flex;
  padding-top: 5rem;
  overflow: visible;


  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  position: absolute;
  //display: flex;
  flex: 1;
  z-index: 1;
  justify-content: right
  //align-items: flex-start;
  overflow: visible
  opacity: .8; 

  svg {
    position: absolute;
    max-width: 80rem;
    opacity: 0.6;
    right: 0; 
    z-index: 1;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
      height: 120rem;
      z-index: 1;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  //opacity: 0.8;
  line-height: 1.6;
  text-align: justify;
  z-index: 999;

  ${media('<=desktop')} {
    font-size: 1.5rem;
    z-index: 100;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  z-index: 9999;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
