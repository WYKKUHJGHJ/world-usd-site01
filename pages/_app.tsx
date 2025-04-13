import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      {/* 页面切换动画包装 */}
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Layout>
  );
}
