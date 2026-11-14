import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Section } from "@/components/ds/doc";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/foundations/typography")({
  head: () => seo("Typography 字體", "FLiPER 字體系統:Roboto Slab 標題、Noto Serif TC 封面標題、Noto Sans TC 內文與等寬標籤。"),
  component: TypePage,
});

const scale = [
  ["display", "font-display text-5xl font-extrabold leading-[1.1]", "48 / 800 / 1.1", "Display Slab", "FLiPERFont.display"],
  ["title", "font-serif text-3xl font-bold leading-[1.3]", "30 / 700 / 1.3", "封面標題 Serif Title", "FLiPERFont.title"],
  ["heading", "font-display text-2xl font-bold leading-[1.35]", "24 / 700 / 1.35", "章節標題 Heading", "FLiPERFont.heading"],
  ["body", "font-sans text-[17px] leading-[1.9]", "17 / 400 / 1.9", "從渺小的自己出發,成為翻轉世界的人。", "FLiPERFont.body"],
  ["caption", "font-sans text-[13px] text-muted-foreground leading-[1.6]", "13 / 400 / 1.6", "攝影 / 林以晴 · 2026.11.14", "FLiPERFont.caption"],
  ["label", "kicker text-ink", "11 / 500 / mono · tracking .18em", "KEEP EXPLORING 128406", "FLiPERFont.label"],
] as const;

function TypePage() {
  return (
    <DocPage kicker="FOUNDATIONS · TYPOGRAPHY" title="字,是封面的骨架" intro={<p>Slab 襯線給標題自信;宋體給封面文學感;黑體讓內文安靜好讀;等寬字負責標籤與期號。</p>}>
      <Section label="WORDMARK" title="FLiPER — 永遠是小寫 i" why="小寫的 i 是翻轉的支點,也是品牌唯一不可更動的拼寫。">
        <Example className="text-center">
          <p className="font-display text-7xl font-extrabold tracking-tight text-ink sm:text-8xl">FLi<span>P</span>ER</p>
          <p className="kicker mt-4 text-muted-foreground">✓ FLiPER &nbsp;·&nbsp; ✕ FLIPER &nbsp;·&nbsp; ✕ Fliper</p>
        </Example>
      </Section>
      <Section label="FAMILIES" title="字體家族">
        <div className="grid gap-4 sm:grid-cols-2">
          {([["Display / Heading", "font-display", `"Roboto Slab", "Noto Serif TC", Georgia, serif`], ["Serif Title", "font-serif", `"Noto Serif TC", "Songti TC", serif`], ["Body", "font-sans", `"Noto Sans TC", system-ui, sans-serif`], ["Label / Code", "font-mono", "ui-monospace, monospace"]] as const).map(([n, c, s]) => (
            <div key={n} className="rounded-xl border bg-card p-5">
              <p className="kicker text-muted-foreground">{n}</p>
              <p className={`${c} mt-3 text-3xl text-ink`}>Aa 翻轉 128</p>
              <p className="mt-3 font-mono text-xs text-muted-foreground">{s}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section label="SCALE" title="字級">
        <div className="divide-y rounded-xl border bg-card">
          {scale.map(([n, c, m, s, sw]) => (
            <div key={n} className="grid gap-2 p-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:items-baseline">
              <div><p className="font-mono text-sm font-semibold text-ink">{n}</p><p className="font-mono text-[11px] text-faint">{m}</p><p className="font-mono text-[11px] text-faint">{sw}</p></div>
              <p className={`${c} ${n === "body" || n === "caption" ? "" : "text-ink"} min-w-0 break-words`}>{s}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section label="CSS" title="複製">
        <Code>{`--font-display: "Roboto Slab", "Noto Serif TC", Georgia, serif;
--font-serif: "Noto Serif TC", "Songti TC", serif;
--font-sans: "Noto Sans TC", system-ui, sans-serif;
.label { font-family: ui-monospace, monospace; text-transform: uppercase;
  letter-spacing: .18em; font-size: 11px; font-variant-numeric: tabular-nums; }`}</Code>
      </Section>
    </DocPage>
  );
}
