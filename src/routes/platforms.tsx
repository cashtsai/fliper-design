import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Rule, Section } from "@/components/ds/doc";
import { SpecTable } from "@/components/ds/atlas";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/platforms")({
  head: () => seo("Platforms iOS / Web", "FLiPER 設計規範如何對應 iOS FLiPERDesign Swift 套件與 flipermag.com 網站主題。"),
  component: () => (
    <DocPage kicker="PLATFORMS" title="一份規範，連結兩個平台" intro={<p>iOS 的 <code className="font-mono text-sm">FLiPERDesign</code> Swift 套件與 flipermag.com 主題,<strong className="text-ink">以這份規範為共同參考</strong>。改版時先改這裡,再同步兩端。</p>}>
      <div className="grid gap-8 lg:grid-cols-2">
        <Section label="iOS" title="FLiPERDesign (Swift Package)">
          <ul className="divide-y border-y text-sm">
            {[["FLiPERColor", "ink · inkSoft · paper · paperDeep · card · muted · faint · border · accent · tan · success"], ["FLiPERFont", "display · title · heading · body · caption · label"], ["FLiPERSpace", "xxs 4 → xxl 32"], ["FLiPERRadius", "sm 4 · md 6 · lg 8 · xl 12"], ["FLiPEREditorial", "Byline · EditorNote · CodeMark · CoverCard · Kicker · Masthead"]].map(([a, b]) => (
              <li key={a} className="py-3"><p className="font-mono font-semibold text-ink">{a}</p><p className="text-muted-foreground">{b}</p></li>
            ))}
          </ul>
          <Code lang="SWIFT">{`Text(post.title)
  .font(FLiPERFont.title)
  .foregroundStyle(FLiPERColor.ink)
  .padding(FLiPERSpace.md)`}</Code>
        </Section>
        <Section label="WEB" title="flipermag.com Theme">
          <ul className="divide-y border-y text-sm">
            {[["Headings", "Roboto Slab 系列標題"], ["Links", "dawn orange #A94700 / #E59B5B"], ["Rules", "1px hairline + ◆ ornament"], ["Surfaces", "paper / card,prefers-color-scheme 切換"], ["Editorial", ".byline · .editors-note · .code-mark · .kicker"]].map(([a, b]) => (
              <li key={a} className="py-3"><p className="font-mono font-semibold text-ink">{a}</p><p className="text-muted-foreground">{b}</p></li>
            ))}
          </ul>
          <Code>{`h1, h2, h3 { font-family: var(--font-display); color: var(--ink); }
a { color: var(--accent); }
hr { border: 0; border-top: 1px solid var(--border); }`}</Code>
        </Section>
      </div>
      <Section label="PARITY" title="一致的是語意，不是像素複製">
        <SpecTable headers={["關切", "iOS", "Web"]} rows={[
          ["閱讀放大", "Dynamic Type；避免固定文字容器高度", "文字放大 200%；內容自然換行"],
          ["操作區域", "44 × 44pt", "主要操作 44 × 44 CSS px"],
          ["輔助科技", "VoiceOver label / hint", "語意 HTML、alt、aria-label"],
          ["外觀", "系統 appearance + 使用者選擇", "prefers-color-scheme + 手動切換"],
          ["減少動態", "Reduce Motion", "prefers-reduced-motion"],
          ["焦點", "平台原生導航行為", "focus-visible 與純鍵盤順序"],
        ]} />
        <Rule do="共用 token 名稱、內容順序與角色；保留平台熟悉的互動。" dont="將 iOS 手勢原封不動搬到 Web，或用固定 px 阻止文字放大。" />
      </Section>
      <Section label="HANDOFF" title="交付與版本檢查">
        <p className="leading-[1.9]">先確認此站規範，再對映到平台實作。交付包含代幣變更、元件狀態、字體載入、深淺模式與無障礙檢查；任何新畫面都應能指出使用了哪些既有語意。</p>
        <p className="text-sm leading-relaxed text-muted-foreground">本頁 Swift API 名稱是設計對映示例，尚未對實際套件驗證；此站不會自動產生或同步 iOS 套件與既有網站。正式套件名稱與方法簽章仍需平台維護者核對。</p>
      </Section>
    </DocPage>
  ),
});
