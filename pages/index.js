import Head from 'next/head';
import tw, { css } from 'twin.macro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CVEED</title>
        <meta
          name="description"
          content="CVEED - Open source CV/Resume builder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={tw`text-blue-500 mx-auto w-full text-center`}>cveed</div>
    </div>
  );
}
