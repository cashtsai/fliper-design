import { createFileRoute } from "@tanstack/react-router";
import { Code, Copyable, DocPage, Rule, Section } from "@/components/ds/doc";
import { SpecTable } from "@/components/ds/atlas";
import { palette } from "@/lib/atlas";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/foundations/color")({
  head: () => seo("Color 色彩", "FLiPER 色彩代幣:ink、paper、muted 與唯一的 dawn orange 重點色,含亮暗色值與用途。"),
  component: ColorPage,
});

const tokens = palette.map(p => [p.name, p.light, p.dark, p.role] as const);

function Swatch({ c, bg }: { c: string; bg: string }) {
  return <div className="h-16 rounded-md border" style={{ background: c, borderColor: bg === "dark" ? "rgba(255,255,255,.14)" : "rgba(0,0,0,.1)" }} />;
}

function ColorPage() {
  return (
    <DocPage kicker="FOUNDATIONS · COLOR" title="墨、紙,與一抹黎明" intro={<p>單色基底承載一切內容;<span className="doc-link no-underline">dawn orange</span> 是唯一的重點色。亮色模式的 #A94700 在 paper 上對比 5.51:1,可作為可操作的連結;暗色模式的 #E59B5B 同時用於連結與編者口吻。</p>}>
      <Section label="TOKENS" title="色彩代幣">
        <div className="divide-y overflow-hidden rounded-xl border bg-card">
          <div className="hidden grid-cols-[1.2fr_1fr_1fr_1.6fr] gap-4 px-5 py-2 sm:grid">
            {["TOKEN", "LIGHT", "DARK", "USAGE"].map((h) => <span key={h} className="kicker text-muted-foreground">{h}</span>)}
          </div>
          {tokens.map(([n, l, d, u]) => (
            <div key={n} className="grid grid-cols-2 gap-4 px-5 py-4 sm:grid-cols-[1.2fr_1fr_1fr_1.6fr] sm:items-center">
              <div className="col-span-2 sm:col-span-1">
                <p className={`font-mono text-sm font-semibold ${n === "accent" ? "text-dawn" : "text-ink"}`}>{n}</p>
                <Copyable value={`FLiPERColor.${n}`} />
              </div>
              <div className="space-y-1"><div className="rounded-md p-1.5" style={{ background: "#FAF8F3" }}><Swatch c={l} bg="light" /></div><Copyable value={l} /></div>
              <div className="space-y-1"><div className="rounded-md p-1.5" style={{ background: "#161513" }}><Swatch c={d} bg="dark" /></div><Copyable value={d} /></div>
              <p className="col-span-2 text-sm sm:col-span-1">{u}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section label="RULE" title="使用原則" why="封面是黑白的,只有編輯的聲音帶有溫度。重點色越少,它說話時越有力量。">
        <Rule do="以單色建立層次;黎明橘只用於連結、編者按的直線、小型標記。" dont="用黎明橘填滿大面積背景、按鈕或插圖;把 success 當作第二重點色。" />
      </Section>
      <Section label="SEMANTIC ALIASES" title="值不變，語意更清楚">
        <p className="leading-[1.9]">基礎代幣描述材料，語意別名描述任務。元件優先用角色；切換模式時，只換基礎值，不在每個元件重寫顏色。</p>
        <SpecTable headers={["角色", "CSS 別名", "對映"]} rows={[
          ["Text", "--text-primary / --text-secondary / --text-meta", "ink / inkSoft / muted"],
          ["Surface", "--surface-page / --surface-inset / --surface-raised", "paper / paperDeep / card"],
          ["Line", "--line-subtle / --line-strong", "border / strong"],
          ["Accent", "--accent", "dawn → 連結、編者聲音、小標記"],
          ["Status", "--status-success", "success → 狀態圖形，文字仍用 ink"],
        ]} />
        <Code>{`:root {
  --text-primary: var(--ink); --text-secondary: var(--ink-soft);
  --text-meta: var(--muted); --surface-page: var(--paper);
  --surface-inset: var(--paper-deep); --surface-raised: var(--card);
  --line-subtle: var(--border); --line-strong: var(--strong);
  --accent: var(--dawn); --status-success: var(--success);
}`}</Code>
      </Section>
      <Section label="PAIRING" title="配對與面積">
        <SpecTable headers={["用途", "前景 / 背景", "限制"]} rows={[
          ["閱讀", "inkSoft / paper", "長文不降低透明度"], ["圖說", "muted / paper", "faint 不作必要文字"],
          ["主要按鈕", "paper / ink", "不改成橘色填底"], ["狀態", "ink 文字 + success 圖形", "不以顏色單獨傳遞資訊"],
        ]} />
        <Rule do="讓墨紙占據版面；曙光橘只作節制的語意訊號。" dont="用橘色鋪滿背景、卡片或插圖；將歷史配色帶回主題。" />
      </Section>
      <Section label="CSS" title="複製代幣">
        <Code>{`:root {
  --ink: #1A1A1A;  --ink-soft: #333333;
  --paper: #FAF8F3; --paper-deep: #EFEBE2;
  --card: #FFFFFF;  --muted: #6E6A62; --faint: #B3AEA4;
  --border: rgba(0,0,0,.10);
  --accent: #A94700; --tan: #B49A7C; --success: #2BAB9F;
}
@media (prefers-color-scheme: dark) {
  :root {
    --ink: #F2F0EB;  --ink-soft: #D4D1CC;
    --paper: #161513; --paper-deep: #26261F;
    --card: #282826;  --muted: #A39E96; --faint: #676460;
    --border: rgba(255,255,255,.14);
    --accent: #E59B5B;
  }
}`}</Code>
      </Section>
    </DocPage>
  );
}
