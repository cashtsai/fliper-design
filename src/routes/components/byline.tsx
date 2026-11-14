import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Rule, Section } from "@/components/ds/doc";
import { Byline } from "@/components/ds/editorial";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/components/byline")({
  head: () => seo("Byline 署名", "FLiPER 署名元件:姓名(宋體)+ 全形「｜」+ 專欄名(灰色黑體)。"),
  component: () => (
    <DocPage kicker="COMPONENTS · BYLINE" title="署名 Byline" intro={<p>格式固定為 <code className="font-mono text-sm">name ｜ column</code>。姓名用宋體,專欄用 muted 黑體,中間是全形直線「｜」。</p>}>
      <Section title="範例" why="作者是故事的主角之一;宋體給名字份量,灰色的專欄名退居背景。">
        <Example className="space-y-3"><Byline name="林以晴" column="設計師的日常" /><Byline name="陳柏宇" column="城市漫遊" /></Example>
        <Rule do="使用全形「｜」(U+FF5C)作為分隔。" dont="使用半形 | 、斜線或「by」。" />
      </Section>
      <Section title="程式碼">
        <Code lang="SWIFT">{`FLiPERByline(name: "林以晴", column: "設計師的日常")`}</Code>
        <Code lang="HTML">{`<p class="byline"><span class="name">林以晴</span>｜<span class="column">設計師的日常</span></p>`}</Code>
      </Section>
    </DocPage>
  ),
});
