import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Desenvolvimento de Aplicações Mobile" overTitle="Mobile">
            <p style={{ textAlign: 'justify', zIndex: 1 }}>
              Transformamos conceitos em experiências digitais. Criamos aplicativos e sites sob medida, garantindo usabilidade intuitiva e
              desempenho excepcional. <Link href="/help-center">Veja nosso portfolio.</Link>
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Conecte-se com IAs" overTitle="Inteligência Artificial" reversed>
            <p style={{ textAlign: 'justify' }}>
              Conectamos inteligência artificial ao seu ecossistema tecnológico. Nossa expertise em integração permite que seus sistemas e
              bancos de dados colaborem perfeitamente com modelos de AI, <strong>impulsionando insights e eficiência.</strong>
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Features />
          <Cta />
          {/*<FeaturesGallery />*/}

          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

// const Hero = styled.div`
//   & > *:not(:first-child) {
//     margin-top: 15rem;
//   }
// `;

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
    overflow: visible;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));
  overflow: visible;

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
