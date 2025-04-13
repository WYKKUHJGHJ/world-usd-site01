import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>首页</title>
      </Head>
      <div>首页 Coming Soon...</div>
    </>
  );
}
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
// 导入多语言内容
import contentZh from "../content/zh/home.json";
import contentEn from "../content/en/home.json";
import styles from "../styles/Home.module.css";

interface HomeProps {
  content: typeof contentZh;
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  // SSG：根据语言加载相应内容
  const content = locale === "zh" ? contentZh : contentEn;
  return { props: { content } };
};

export default function Home({ content }: HomeProps) {
  const { heroTitle, heroSubtitle, summaryHeading, summaryText, visionHeading,
    visionQuote, visionAuthor, whatIsHeading, whatIsText, whatIsList,
    finalNotesHeading, finalNotesText, contactHeading, contactList } = content;

  return (
    <>
      <Head>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Head>

      {/* 首页内容 - 带入场动画 */}
      <motion.section
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {/* 英文标题和副标题 */}
        <div className="text-center mb-12">
          <h1 className={`${styles.neonTitle} text-4xl font-bold`}>
            {heroTitle}
          </h1>
          <p className="text-xl text-gray-300 mt-2">{heroSubtitle}</p>
        </div>

        {/* 项目概述 */}
        <h2 className="text-2xl font-semibold mb-4">{summaryHeading}</h2>
        {summaryText.map((para, idx) => (
          <p key={idx} className="mb-4 leading-relaxed">{para}</p>
        ))}

        {/* 创始人愿景 - 引用块 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">{visionHeading}</h2>
        <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-300">
          <p>{visionQuote}</p>
          <p className="mt-2 text-right not-italic"> {visionAuthor}</p>
        </blockquote>

        {/* 什么是 WUSD */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">{whatIsHeading}</h2>
        <p className="mb-2">{whatIsText}</p>
        <ul className="list-disc pl-5 mb-6">
          {whatIsList.map(item => (
            <li key={item} className="mb-1">{item}</li>
          ))}
        </ul>

        {/* 结语 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">{finalNotesHeading}</h2>
        <p className="mb-6">{finalNotesText}</p>

        {/* 社区与联系方式 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">{contactHeading}</h2>
        <ul>
          {contactList.map((contact, idx) => (
            <li key={idx} className="mb-1">
              <span className="font-semibold">{contact.type}:</span>{" "}
              <a href={contact.text.startsWith("http") ? contact.text : `mailto:${contact.text}`}
                 className="hover:text-neonPurple">
                {contact.text}
              </a>
            </li>
          ))}
        </ul>

        {/* 嵌入 PDF 白皮书所有页面 */}
        <div className="mt-12">
          <EmbeddedWhitepaper />
        </div>
      </motion.section>
    </>
  );
}

// 使用 react-pdf 显示 PDF 文档各页
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function EmbeddedWhitepaper() {
  const [width, setWidth] = useState(600);
  useEffect(() => {
    if (window.innerWidth < 640) {
      setWidth(window.innerWidth * 0.9);
    }
  }, []);
  return (
    <Document file="/WUSD_whitepaper.pdf">
      {Array.from({ length: 5 }, (_, i) => i + 1).map(pageNum => (
        <Page 
          key={pageNum}
          pageNumber={pageNum}
          width={width}
          className="mx-auto mb-8 shadow-lg"
        />
      ))}
    </Document>
  );
}
