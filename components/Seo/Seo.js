import Head from "next/head";

function Seo() {
  return (
    <Head>
      <title key="title">
        The title
      </title>
      <meta
        key="description"
        name="description"
        content="The description" />
    </Head>
  );
}

export default Seo;
