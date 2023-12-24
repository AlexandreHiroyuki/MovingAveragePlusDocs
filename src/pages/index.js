import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title ', styles.heroTitle)}>
          {siteConfig.title}
        </h1>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Getting Started
          </Link>
          <a
            className="button button--primary button--lg"
            href="https://alexandrehiroyuki.github.io/DataTomeDocs/"
          >
            All support is now dedicated to DataTome 📚
            <br /> Start your project with DataTome!
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Home`}
      description="Moving Average Plus documentation. Learn how to use Moving Average Plus library on Arduino and other microcontrollers."
    >
      <HomepageHeader />
    </Layout>
  );
}
