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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div css={tw`text-blue-500 mx-auto w-full text-center`}>cveed</div>
    </div>
  );
}
