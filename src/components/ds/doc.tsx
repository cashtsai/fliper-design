import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
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
    <section className="min-w-0 space-y-5">
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
    <div className="overflow-hidden rounded-lg border bg-card">
      <div className="border-b px-4 py-2"><span className="kicker text-muted-foreground">{label}</span></div>
      <div className={`p-6 sm:p-8 ${className}`}>{children}</div>
    </div>
  );
}

export function Code({ children, lang = "CSS" }: { children: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className="overflow-hidden rounded-lg border bg-paper-deep">
      <div className="flex items-center justify-between border-b px-4 py-1.5">
        <span className="kicker text-muted-foreground">{lang}</span>
        <Button variant="ghost" size="icon" className="min-h-11 min-w-11" aria-label={copied ? "已複製程式碼" : "複製程式碼"} title="複製程式碼"
          onClick={async () => { try { await navigator.clipboard.writeText(children); setCopied(true); setFailed(false); setTimeout(() => setCopied(false), 1500); } catch { setFailed(true); } }}>
          {copied ? <Check /> : <Copy />}
        </Button>
      </div>
      {failed && <p role="status" className="px-4 text-sm text-ink">無法複製，請選取下方文字。</p>}
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-ink"><code>{children}</code></pre>
    </div>
  );
}

export function Copyable({ value, className = "" }: { value: string; className?: string }) {
  const [c, setC] = useState(false);
  const [failed, setFailed] = useState(false);
  return <Button variant="ghost" className={`h-auto min-h-11 max-w-full justify-start whitespace-normal px-0 font-mono text-xs text-muted-foreground ${className}`}
    onClick={async () => { try { await navigator.clipboard.writeText(value); setC(true); setFailed(false); setTimeout(() => setC(false), 1500); } catch { setFailed(true); } }}
    title="複製" aria-label={`複製 ${value}`}>{c ? "已複製" : failed ? "無法複製；請選取文字" : value}</Button>;
}

export function Rule({ do: d, dont }: { do: string; dont: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="border-t-2 border-strong pt-3 text-sm"><span className="kicker text-ink">DO</span><p className="mt-1">{d}</p></div>
      <div className="border-t-2 border-strong pt-3 text-sm"><span className="kicker text-ink">DON'T</span><p className="mt-1">{dont}</p></div>
    </div>
  );
}

export { Hairline };
