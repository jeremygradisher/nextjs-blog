import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <Layout home>
      <Head>
        <title>First Post, We Are Ready to Build!</title>
      </Head>
      <main>
      <section className={utilStyles.headingMd}>
      <h1>First Post, We Are Ready to Build!</h1>
      <p>
      This is just an example to show how all of this works.
      This site is built with <b>Next.js</b> and <b>React</b>.<br /><br />

      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />

      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      </section>
      </main>
    </Layout>
  );
}