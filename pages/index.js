import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/layout';
import Head from 'next/head';
import { Article, ArticleTitle } from '../components/commons/Article';
import { Flexbox } from '../components/commons/Flexbox';

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
