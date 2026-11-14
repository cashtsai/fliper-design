import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Section } from "@/components/ds/doc";
import { SpecTable } from "@/components/ds/atlas";
import { typeScale } from "@/lib/atlas";
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
  ["caption", "font-sans text-[13px] text-muted-foreground leading-[1.6]", "13 / 400 / 1.6", "FLiPER 觀點｜人物", "FLiPERFont.caption"],
  ["label", "kicker text-ink", "11 / 500 / mono · tracking .18em", "KEEP EXPLORING 393858", "FLiPERFont.label"],
] as const;

function TypePage() {
  return (
    <DocPage kicker="FOUNDATIONS · TYPOGRAPHY" title="字,是封面的骨架" intro={<p>Slab 襯線給標題自信;宋體給封面文學感;黑體讓內文安靜好讀;等寬字負責標籤與期號。</p>}>
      <Section label="WORDMARK" title="FLiPER — 永遠是小寫 i" why="小寫的 i 是翻轉的支點,也是品牌唯一不可更動的拼寫。">
        <Example className="text-center">
          <p className="font-display text-7xl font-extrabold  text-ink sm:text-8xl">FLi<span>P</span>ER</p>
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
              <div><p className="font-mono text-sm font-semibold text-ink">{n}</p><p className="font-mono text-[11px] text-muted-foreground">{m}</p><p className="font-mono text-[11px] text-muted-foreground">{sw}</p></div>
              <p className={`${c} ${n === "body" || n === "caption" ? "" : "text-ink"} min-w-0 break-words`}>{s}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section label="TYPE SPECIFICATION" title="完整字級規格">
        <SpecTable headers={["Token", "px / weight", "Line-height", "字族 / 用途"]} rows={typeScale.map(([n,px,w,lh,f,u]) => [n, `${px} / ${w}`, `${lh} · ${(px * lh).toFixed(1)}px`, `${f} · ${u}`])} />
        <Code>{`.display { font: 800 48px/1.1 var(--font-display); }
.title { font: 700 30px/1.3 var(--font-serif); }
.heading { font: 700 24px/1.35 var(--font-display); }
.body { font: 400 17px/1.9 var(--font-sans); }
.caption { font: 400 13px/1.6 var(--font-sans); }
.label { font: 500 11px/1.6 var(--font-mono); }`}</Code>
      </Section>
      <Section label="CJK & LATIN" title="中英混排，是同一句話">
        <p className="leading-[1.9]">中文使用繁體字形；英文標題由 Roboto Slab 承接，中文落入 Noto Serif TC，不以英文字型硬套漢字。內文 Noto Sans TC 搭配自然的 Latin 字形；代幣名與數字才切換等寬。中文標點使用全形，英文句內標點使用半形；品牌始終拼作 FLiPER。</p>
        <Example><p className="font-serif text-xl leading-[1.9]">在 FLiPER，我們以 Design 看見生活。<br/>從一件作品，到作品背後的人。</p><p className="mt-4 font-sans text-[17px] leading-[1.9]">文章 393858 · Creator · FLiPER 觀點｜人物</p></Example>
        <p className="text-sm leading-relaxed text-muted-foreground">中英文之間保留一致的自然空隙，不靠連續空白對齊。標題不拆開 FLiPER 或 token 名；中文可自然換行，避免行首句末標點。窄螢幕優先換行與調整欄位，不把全文縮小。</p>
      </Section>
      <Section label="HAN WEIGHTS" title="漢字字重對映">
        <SpecTable headers={["任務", "Latin weight", "Han weight / 字族"]} rows={[["Display","800","900 / Noto Serif TC（避免缺字重時合成）"],["Title / Heading","700","700 / Noto Serif TC"],["正文","400","400 / Noto Sans TC"],["Label","500 / mono","500 / Noto Sans TC"],["圖說","400","400 / Noto Sans TC"]]} />
        <p className="leading-[1.9]">中文大標使用實際載入的 900 字重，避免瀏覽器替 800 合成粗體；正文不靠加粗整段製造層次。強調用短語、段落與章節結構，讓長文維持穩定灰度。</p>
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
