import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/layout';
import Head from 'next/head';
import { Article, ArticleTitle } from '../components/commons/Article';
import { Flexbox } from '../components/commons/Flexbox';
import Graph from '../components/Graph/Graph';

export default function Home() {
  return (
    <>
      <Head>
        <title>AVID</title>
        <meta name="description" content="Our home page" />
      </Head>
      <Layout>
        <div style={{ margin: '90px' }}></div>
        <ArticleTitle margin="20px">This is a test</ArticleTitle>
        <Article>
          <ArticleTitle fontSize="22px">This is a test</ArticleTitle>Test
        </Article>
        <Flexbox>
          <Article width="100%">
            <ArticleTitle fontSize="22px">This is a test</ArticleTitle>Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Enim lobortis
            scelerisque fermentum dui faucibus in. Sit amet nisl purus in mollis
            nunc sed. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus
            mattis. Venenatis cras sed felis eget velit.
          </Article>
          <Article width="100%">
            <ArticleTitle fontSize="22px">This is a test</ArticleTitle>Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Enim lobortis
            scelerisque fermentum dui faucibus in. Sit amet nisl purus in mollis
            nunc sed. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus
            mattis. Venenatis cras sed felis eget velit.
          </Article>
        </Flexbox>
        <Article>
        <Graph
            width="100%"
            nodes={[
              {
                id: 1,
                name: 'Flamme',
                dependsOn: [7, 2],
              },
              { id: 2, name: 'Ombre', dependsOn: [7] },
              { id: 3, name: 'Lame', dependsOn: [7, 2] },
              { id: 4, name: 'Rivière', dependsOn: [7] },
              { id: 5, name: 'Ombre I', dependsOn: [7, 2] },
              { id: 6, name: 'Eisan', dependsOn: [7] },
              { id: 7, name: "Then'ia", dependsOn: [] },
            ]}
          />
        </Article>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home',
        'navigation',
        'footer',
        'contactFooter',
      ])),
    },
  };
}
