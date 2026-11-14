import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Section } from "@/components/ds/doc";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/platforms")({
  head: () => seo("Platforms iOS / Web", "FLiPER 設計規範如何對應 iOS FLiPERDesign Swift 套件與 flipermag.com 網站主題。"),
  component: () => (
    <DocPage kicker="PLATFORMS" title="一份規範,生成兩個平台" intro={<p>iOS 的 <code className="font-mono text-sm">FLiPERDesign</code> Swift 套件與 flipermag.com 主題,<strong className="text-ink">都由這份規範生成</strong>。改版時先改這裡,再同步兩端。</p>}>
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
    </DocPage>
  ),
});
