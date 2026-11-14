import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Logo } from "./editorial";

const nav: { group: string; items: { to: string; label: string }[] }[] = [
  { group: "Overview", items: [{ to: "/", label: "品牌主張 Overview" }] },
  { group: "Foundations", items: [
    { to: "/foundations/color", label: "Color 色彩" },
    { to: "/foundations/typography", label: "Typography 字體" },
    { to: "/foundations/spacing", label: "Spacing & Radius" },
    { to: "/foundations/motifs", label: "Motifs 標誌元素" },
  ]},
  { group: "Components", items: [
    { to: "/components/byline", label: "Byline 署名" },
    { to: "/components/editors-note", label: "Editor's Note 編者按" },
    { to: "/components/code-mark", label: "Code Mark 期號" },
    { to: "/components/cover-card", label: "Cover Card 封面卡" },
    { to: "/components/kicker", label: "Kicker 分類標" },
    { to: "/components/buttons", label: "Buttons & Badge" },
  ]},
  { group: "The Cover System", items: [{ to: "/cover-system", label: "封面即設計系統" }] },
  { group: "Patterns", items: [{ to: "/patterns", label: "Daily Pick · Voice · CTA" }] },
  { group: "Platforms", items: [{ to: "/platforms", label: "iOS / Web" }] },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  return (
    <button
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("fliper-theme", next ? "dark" : "light");
      }}
      className="kicker rounded-md border px-3 py-1.5 text-muted-foreground hover:text-ink"
      aria-label="Toggle theme"
    >{dark ? "☀ LIGHT" : "☾ DARK"}</button>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  const navList = (
    <nav className="space-y-7">
      {nav.map((g) => (
        <div key={g.group}>
          <p className="kicker mb-2 text-faint">{g.group}</p>
          <ul className="space-y-0.5">
            {g.items.map((i) => {
              const active = path === i.to;
              return (
                <li key={i.to}>
                  <Link to={i.to} className={`block border-l-2 py-1 pl-3 text-sm transition-colors ${active ? "border-dawn font-medium text-ink" : "border-transparent text-muted-foreground hover:text-ink"}`}>{i.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[270px_minmax(0,1fr)]">
      <aside className="sticky top-0 hidden h-screen overflow-y-auto border-r bg-paper px-6 py-8 lg:block">
        <Link to="/" className="block"><Logo className="h-7" /></Link>
        <p className="kicker mt-2 text-muted-foreground">DESIGN SYSTEM</p>
        <div className="my-6 border-t" />
        {navList}
        <div className="mt-10"><ThemeToggle /></div>
      </aside>
      <header className="sticky top-0 z-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b bg-paper/95 px-5 py-3 backdrop-blur lg:hidden">
        <Link to="/" className="flex min-w-0 items-center gap-2"><Logo className="h-6 shrink-0" /><span className="kicker truncate text-muted-foreground">DESIGN SYSTEM</span></Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="kicker rounded-md border px-3 py-1.5 text-ink">{open ? "CLOSE" : "MENU"}</button>
        </div>
      </header>
      {open && <div className="border-b bg-paper px-5 py-6 lg:hidden">{navList}</div>}
      <main className="min-w-0">
        {children}
        <footer className="mx-auto max-w-4xl px-5 pb-12 sm:px-10">
          <div className="flex items-center gap-3"><span className="h-px flex-1 bg-border" /><span className="text-[9px] text-ink">◆</span><span className="h-px flex-1 bg-border" /></div>
          <p className="mt-4 text-center font-serif text-sm text-muted-foreground">從渺小的自己出發,成為翻轉世界的人</p>
          <p className="kicker mt-2 text-center text-faint">KEEP EXPLORING · DESIGN.FLIPERMAG.COM</p>
        </footer>
      </main>
    </div>
  );
}
