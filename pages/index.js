import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
      <section className={utilStyles.headingMd}>
        <p>Senior Software Developer - Muskegon, Michigan</p>
        <p>
          Qualifications:<br />
          • 7+ years of working experience with Ruby on Rails.<br />
          • 20+ years of working exp with HTML5, PHP, JavaScript and CSS.<br />
          • 15+ years of working exp with WordPress, custom themes and plugins, multi-site networks, ACF Advanced Custom Fields.<br />
          • 15+ years of working exp with both PostgreSQL and MySQL.<br />
          • Comprehensive knowledge of modern web design patterns and front end technologies like HTML5, JQuery, Bootstrap, React, Node.js and TypeScript.<br />
          • Extensive experience implementing, maintaining, and using HTTP REST/JSON.<br />
          • Firm understanding of version control tools (Git specifically), and managing
          branches with a team of developers.
        </p>
      </section>
      </main>
      <footer>
        <a
          href="https://231webdev.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by React/Next.js and Jeremy Gradisher
        </a> - <Link href="/posts/first-post/">About</Link>
      </footer>
    </Layout>
  );
}
