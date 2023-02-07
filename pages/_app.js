import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../public/global.css";

import Head from "next/head";
import Script from "next/script";

import { motion } from "framer-motion";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // pull in bootstrap js
    if (typeof document !== undefined) import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
          integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
          crossorigin="anonymous"
          async
        />
      </Head>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Component {...pageProps} />
      </motion.div>

      <link rel="stylesheet" href="/global.css" />
    </>
  );
}
