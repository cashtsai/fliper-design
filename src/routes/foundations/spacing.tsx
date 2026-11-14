import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Section } from "@/components/ds/doc";
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
            <div key={n} className="grid grid-cols-[60px_60px_minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
              <span className="font-mono text-sm font-semibold text-ink">{n}</span>
              <span className="font-mono text-xs text-muted-foreground">{v}px</span>
              <span className="h-4 bg-ink" style={{ width: v * 4 }} />
              <span className="font-mono text-[11px] text-faint">FLiPERSpace.{n}</span>
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
              <p className="font-mono text-[11px] text-faint">FLiPERRadius.{n}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section label="CSS" title="複製">
        <Code>{`--space-xxs: 4px; --space-xs: 8px; --space-sm: 12px; --space-md: 16px;
--space-lg: 20px; --space-xl: 24px; --space-xxl: 32px;
--radius-sm: 4px; --radius-md: 6px; --radius-lg: 8px; --radius-xl: 12px;`}</Code>
      </Section>
    </DocPage>
  );
}
