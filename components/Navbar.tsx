import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface NavItem {
  href: string;
  labelEn: string;
  labelZh: string;
}

const navItems: NavItem[] = [
  { href: "/", labelEn: "Home", labelZh: "首页" },
  { href: "/tokenomics", labelEn: "Tokenomics", labelZh: "代币经济" },
  { href: "/technology", labelEn: "Technology", labelZh: "技术架构" },
  { href: "/roadmap", labelEn: "Roadmap", labelZh: "路线图" },
  { href: "/contract", labelEn: "Contract", labelZh: "合约数据" }
];

export default function Navbar() {
  const router = useRouter();
  const { locale, pathname, asPath } = router;
  const isZh = locale === "zh";
  const [menuOpen, setMenuOpen] = useState(false);

  // 路由变化时关闭移动端菜单
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // 切换语言（点按后使用 Next.js 切换 locale）
  const toggleLocale = () => {
    const newLocale = isZh ? "en" : "zh";
    router.push(asPath, asPath, { locale: newLocale });
  };

  const menuLabel = isZh ? "English" : "中文"; // 切换语言按钮标签

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/10 border-b border-gray-200/10 text-gray-100 z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo/站点名，可以替换为图片或更复杂的元素 */}
        <div className="text-xl font-semibold">WUSD</div>

        {/* 桌面导航链接 */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(item => {
            const label = isZh ? item.labelZh : item.labelEn;
            const active = item.href === pathname;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={
                    "hover:text-neonPurple transition-colors" +
                    (active ? " text-neonPurple font-medium" : "")
                  }
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* 右侧功能按钮：语言切换 和 连接钱包 */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLocale}
            className="px-2 py-1 border border-gray-500 rounded text-sm hover:bg-gray-700"
          >
            {menuLabel}
          </button>
          <button
            className="px-3 py-1 bg-gray-500/50 rounded cursor-not-allowed"
            disabled
          >
            {isZh ? "连接钱包" : "Connect Wallet"}
          </button>
          {/* 移动端菜单折叠按钮 */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none text-2xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* 移动端下拉菜单 */}
      {menuOpen && (
        <ul className="md:hidden bg-black/80 text-center pb-4">
          {navItems.map(item => {
            const label = isZh ? item.labelZh : item.labelEn;
            return (
              <li key={item.href} className="py-2 border-b border-gray-700">
                <a href={item.href} className="text-lg">
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
