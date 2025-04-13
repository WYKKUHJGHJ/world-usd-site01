import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
  { href: "/contract", labelEn: "Contract", labelZh: "合约数据" },
  { href: "/community", labelEn: "Community", labelZh: "社群链接" }
];

export default function Navbar() {
  const router = useRouter();
  const { locale, pathname, asPath } = router;
  const isZh = locale === "zh";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleLocale = () => {
    const newLocale = isZh ? "en" : "zh";
    router.push(asPath, asPath, { locale: newLocale });
  };

  const menuLabel = isZh ? "English" : "中文";

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/10 border-b border-gray-200/10 text-gray-100 z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="text-xl font-semibold">WUSD</div>

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

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLocale}
            className="px-2 py-1 border border-gray-500 rounded text-sm hover:bg-gray-700"
          >
            {menuLabel}
          </button>
          <div className="hidden md:block">
            <ConnectButton showBalance={false} accountStatus="address" />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none text-2xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

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
          <li className="py-2">
            <ConnectButton showBalance={false} accountStatus="address" />
          </li>
        </ul>
      )}
    </nav>
  );
}
