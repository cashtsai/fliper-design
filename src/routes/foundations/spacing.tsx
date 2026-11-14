import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Section } from "@/components/ds/doc";
import { SpecTable } from "@/components/ds/atlas";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/foundations/spacing")({
  head: () => seo("Spacing & Radius 間距與圓角", "FLiPER 間距尺度 4–32px 與圓角 4–12px,與 iOS FLiPERSpace / FLiPERRadius 一致。"),
  component: SpacingPage,
});

const space = [["xxs", 4], ["xs", 8], ["sm", 12], ["md", 16], ["lg", 20], ["xl", 24], ["xxl", 32]] as const;
const radius = [["sm", 4], ["md", 6], ["lg", 8], ["xl", 12]] as const;

function SpacingPage() {
  return (
    <DocPage kicker="FOUNDATIONS · SPACING & RADIUS" title="留白是版面的呼吸" intro={<p>以 4 為基礎的間距尺度,圓角克制——紙張不會太圓。</p>}>
      <Section label="SPACE" title="間距尺度" why="雜誌版面靠一致的節奏建立秩序;七個刻度就足以應付所有情境。">
        <div className="divide-y rounded-xl border bg-card">
          {space.map(([n, v]) => (
            <div key={n} className="grid grid-cols-[40px_40px_minmax(0,1fr)] sm:grid-cols-[60px_60px_minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
              <span className="font-mono text-sm font-semibold text-ink">{n}</span>
              <span className="font-mono text-xs text-muted-foreground">{v}px</span>
              <span className="h-4 bg-ink" style={{ width: v * 3 }} />
              <span className="col-span-3 font-mono text-[11px] text-muted-foreground sm:col-span-1">FLiPERSpace.{n}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section label="RADIUS" title="圓角">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {radius.map(([n, v]) => (
            <div key={n} className="text-center">
              <div className="mx-auto h-24 w-full border-2 border-strong bg-paper-deep" style={{ borderRadius: v }} />
              <p className="mt-2 font-mono text-sm text-ink">{n} · {v}px</p>
              <p className="font-mono text-[11px] text-muted-foreground">FLiPERRadius.{n}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section label="LAYOUT GRID" title="版面網格與閱讀寬度">
        <SpecTable headers={["範圍", "欄位 / 寬度", "間距"]} rows={[["文件版面","max-width 896px；側欄 270px","桌面內距 40px；手機 20px"],["長文","約 672px；單欄閱讀","段落行高 1.9；段間 24–32px"],["範例與比較","窄螢幕 1 欄；640px 起 2 欄","欄距 24px"],["封面拆解","1024px 起主欄 + 260px 註解","欄距 40px"],["章節節奏","章節之間 64px","標題與內容 20px"]]} />
        <p className="leading-[1.9]">網格服從內容。窄螢幕先改成單欄，再讓代幣名稱換行；表格與程式碼允許局部橫向捲動，不讓整頁超出視窗。</p>
        <Code>{`.doc { max-width: 896px; margin-inline: auto; padding-inline: 20px; }
.reading { max-width: 672px; }
.comparison { display: grid; gap: 24px; }
@media (min-width: 640px) {
  .doc { padding-inline: 40px; }
  .comparison { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}`}</Code>
      </Section>
      <Section label="ELEVATION" title="柔和陰影，只為承托紙張">
        <div className="grid gap-6 sm:grid-cols-3">{[["Level 0","border bg-paper","結構與一般區塊"],["Level 1","border bg-card shadow-editorial","封面卡與重複項目"],["Level 2","border bg-card shadow-cover","完整封面，少量使用"]].map(([n,c,d])=><div key={n}><div className={`${c} flex h-28 items-center justify-center rounded-lg font-serif text-ink`}>{n}</div><p className="mt-4 text-sm text-muted-foreground">{d}</p></div>)}</div>
        <p className="leading-[1.9]">陰影是深度，不是裝飾。一般章節維持平面；封面卡使用低對比柔影，完整封面才使用較大的承托陰影。暗色模式以細線建立輪廓，不加橘色光暈；互動焦點與 elevation 是兩回事。</p>
        <Code>{`--elevation-card: 0 8px 24px -12px color-mix(in srgb, var(--ink) 16%, transparent);
--elevation-cover: 0 30px 60px -30px color-mix(in srgb, var(--ink) 35%, transparent);
/* dark: card 以 border 維持辨識；不可使用彩色 glow */`}</Code>
      </Section>
      <Section label="CSS" title="複製">
        <Code>{`--space-xxs: 4px; --space-xs: 8px; --space-sm: 12px; --space-md: 16px;
--space-lg: 20px; --space-xl: 24px; --space-xxl: 32px;
--radius-sm: 4px; --radius-md: 6px; --radius-lg: 8px; --radius-xl: 12px;`}</Code>
      </Section>
    </DocPage>
  );
}
