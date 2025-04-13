import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* 导航栏（固定顶部，毛玻璃背景） */}
      <Navbar />
      {/* 页面主要内容容器，添加上边距避免被固定导航遮挡 */}
      <main className="pt-16 max-w-5xl mx-auto px-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
