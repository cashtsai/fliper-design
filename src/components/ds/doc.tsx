import { useState, type ReactNode } from "react";
import { Diamond, Hairline } from "./editorial";

export function DocPage({ kicker, title, intro, children }: { kicker: string; title: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-4xl px-5 py-12 sm:px-10 lg:py-16">
      <p className="kicker text-muted-foreground">{kicker}</p>
      <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">{title}</h1>
      {intro && <div className="mt-5 max-w-2xl text-[17px] leading-[1.9]">{intro}</div>}
      <Diamond className="my-10" />
      <div className="space-y-16">{children}</div>
    </article>
  );
}

export function Section({ label, title, children, why }: { label?: string; title: string; children: ReactNode; why?: ReactNode }) {
  return (
    <section className="space-y-5">
      <div>
        {label && <p className="kicker text-muted-foreground">{label}</p>}
        <h2 className="mt-1 font-display text-2xl font-bold text-ink">{title}</h2>
      </div>
      {children}
      {why && (
        <p className="text-sm leading-relaxed text-muted-foreground"><span className="kicker mr-2 text-ink">WHY</span>{why}</p>
      )}
    </section>
  );
}

export function Example({ children, className = "", label = "LIVE EXAMPLE" }: { children: ReactNode; className?: string; label?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="border-b px-4 py-2"><span className="kicker text-faint">{label}</span></div>
      <div className={`p-6 sm:p-8 ${className}`}>{children}</div>
    </div>
  );
}

export function Code({ children, lang = "CSS" }: { children: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="overflow-hidden rounded-lg border bg-paper-deep">
      <div className="flex items-center justify-between border-b px-4 py-1.5">
        <span className="kicker text-faint">{lang}</span>
        <button
          onClick={() => { navigator.clipboard?.writeText(children); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
          className="kicker text-muted-foreground hover:text-ink"
        >{copied ? "COPIED" : "COPY"}</button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-ink"><code>{children}</code></pre>
    </div>
  );
}

export function Copyable({ value, className = "" }: { value: string; className?: string }) {
  const [c, setC] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard?.writeText(value); setC(true); setTimeout(() => setC(false), 1000); }}
      className={`font-mono text-xs text-muted-foreground hover:text-ink ${className}`}
      title="Copy"
    >{c ? "copied" : value}</button>
  );
}

export function Rule({ do: d, dont }: { do: string; dont: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="border-t-2 border-success pt-3 text-sm"><span className="kicker text-success">DO</span><p className="mt-1">{d}</p></div>
      <div className="border-t-2 border-strong pt-3 text-sm"><span className="kicker text-ink">DON'T</span><p className="mt-1">{dont}</p></div>
    </div>
  );
}

export { Hairline };
