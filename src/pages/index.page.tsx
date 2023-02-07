import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import variants from "./index.motion";

// Components
import WebGL from "@components/atoms/Experience/Experience";

interface Properties {
  // [key: string]: any;
  // id?: number;
  // title?: string;
  // body?: string;
  // userId?: number;
  // tags?: number;
  // reactions?: number;
}

const HomePage: NextPage<Properties> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>KM | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <WebGL />
        <div className={styles.test}></div>
      </main>
    </div>
  );
};

export default HomePage;
