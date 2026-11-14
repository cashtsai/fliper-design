import type { ReactNode } from "react";
import logo from "@/assets/fliper-logo.png.asset.json";
import cover from "@/assets/cover-dawn-studio.jpg";

export const coverImage = cover;

export function Logo({ className = "h-8" }: { className?: string }) {
  return <img src={logo.url} alt="FLiPER" className={`logo-ink w-auto ${className}`} width={500} height={200} />;
}

export function Hairline({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-border ${className}`} />;
}

export function StrongRule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t-2 border-strong ${className}`} />;
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-border" />
      <span className="text-[9px] leading-none text-ink">◆</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function Masthead({ kicker = "KEEP EXPLORING · ISSUE 2026" }: { kicker?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Logo className="h-10" />
      <Hairline className="w-full" />
      <span className="kicker text-muted-foreground">{kicker}</span>
    </div>
  );
}

export function Byline({ name, column }: { name: string; column: string }) {
  return (
    <p className="text-sm">
      <span className="font-serif text-ink">{name}</span>
      <span className="text-faint">｜</span>
      <span className="text-muted-foreground">{column}</span>
    </p>
  );
}

export function EditorsNote({ children, attribution = "WHY WE PICKED IT ── FLiPER 編輯室" }: { children: ReactNode; attribution?: string }) {
  return (
    <aside className="border-l-4 border-dawn py-1 pl-5">
      <p className="font-serif text-[17px] leading-[1.9] text-ink">{children}</p>
      <p className="kicker mt-3 text-dawn">{attribution}</p>
    </aside>
  );
}

export function CodeMark({ code }: { code: string }) {
  return <span className="font-mono text-xs tracking-[4px] text-muted-foreground tabular-nums">{code}</span>;
}

export function Kicker({ children }: { children: ReactNode }) {
  return <span className="kicker text-ink">{children}</span>;
}

export const categories = ["藝術 Creator", "設計 Idea", "品牌 Brand", "城市 City", "觀點 Opinion"];

export function CoverCard({
  title = "在清晨的工作室裡,重新學會觀看",
  name = "林以晴",
  column = "設計師的日常",
  kicker = "設計 Idea",
  code = "128406",
}: { title?: string; name?: string; column?: string; kicker?: string; code?: string }) {
  return (
    <article className="overflow-hidden rounded-xl border bg-card">
      <img src={cover} alt="" loading="lazy" width={896} height={1152} className="aspect-[4/3] w-full object-cover" />
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <Kicker>{kicker}</Kicker>
          <CodeMark code={code} />
        </div>
        <h3 className="font-serif text-xl font-semibold leading-snug text-ink">{title}</h3>
        <Hairline />
        <Byline name={name} column={column} />
      </div>
    </article>
  );
}

export function FullCover() {
  return (
    <div className="mx-auto w-full max-w-md rounded-sm border bg-card p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
      <Masthead kicker="FLiPER EDITORIAL DAILY · FED" />
      <img src={cover} alt="封面示意:清晨工作室中的設計師" width={896} height={1152} className="mt-5 aspect-[4/5] w-full object-cover" />
      <div className="mt-5 text-center">
        <Kicker>設計 Idea</Kicker>
        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-ink">在清晨的工作室裡,<br />重新學會觀看</h2>
        <Diamond className="mx-auto my-4 w-40" />
        <Byline name="林以晴" column="設計師的日常" />
        <div className="mt-4"><CodeMark code="128406" /></div>
      </div>
    </div>
  );
}

export function AppStoreBadge() {
  return (
    <a href="#" className="inline-flex items-center gap-3 rounded-lg bg-ink px-4 py-2 text-paper">
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.2 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.5-1-2.5-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z"/></svg>
      <span className="flex flex-col leading-none">
        <span className="text-[10px]">Download on the</span>
        <span className="text-lg font-semibold">App Store</span>
      </span>
    </a>
  );
}

export function PrimaryButton({ children }: { children: ReactNode }) {
  return <button className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85">{children}</button>;
}
export function SecondaryButton({ children }: { children: ReactNode }) {
  return <button className="rounded-md border border-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-deep">{children}</button>;
}
export function TextLink({ children }: { children: ReactNode }) {
  return <a href="#" className="doc-link text-sm">{children}</a>;
}
