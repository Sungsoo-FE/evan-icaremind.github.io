import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

interface HomePageProps {
  imageUrl: string | undefined;
}

const HomePage: NextPage<HomePageProps> = ({ imageUrl }) => {
  return (
    <>
      <Head>
        {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      </Head>
      home page
      {imageUrl && (
        <Image src={imageUrl} width={100} height={100} alt={"next-test"} />
      )}
    </>
  );
};

export const getStaticeProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  try {
    const { params } = context;
    const query = params || {};

    let imageUrl = "/next.svg";

    return {
      props: {
        imageUrl,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        imageUrl: undefined,
      },
    };
  }
};

export default HomePage;
