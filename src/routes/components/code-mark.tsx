import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Section } from "@/components/ds/doc";
import { CodeMark } from "@/components/ds/editorial";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/components/code-mark")({
  head: () => seo("Code Mark 期號", "FLiPER 六位數期號:文章 ID,等寬字、字距 4、muted 色。"),
  component: () => (
    <DocPage kicker="COMPONENTS · EDITION CODE MARK" title="期號 Code Mark" intro={<p>六位數的文章 ID,像雜誌的期數一樣標記每一篇。不足六位以 0 補齊。</p>}>
      <Section title="範例" why="編號讓每篇內容都像可收藏的一期,也是 App 與網站之間的共同索引。">
        <Example className="flex flex-wrap gap-8"><CodeMark code="128406" /><CodeMark code="004271" /><CodeMark code="099999" /></Example>
      </Section>
      <Section title="程式碼">
        <Code lang="SWIFT">{`FLiPERCodeMark(postID: 128406)`}</Code>
        <Code>{`.code-mark { font-family: ui-monospace, monospace; letter-spacing: 4px;
  font-variant-numeric: tabular-nums; font-size: 12px; color: var(--muted); }`}</Code>
      </Section>
    </DocPage>
  ),
});
