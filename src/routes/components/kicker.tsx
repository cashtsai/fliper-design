import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Section } from "@/components/ds/doc";
import { Kicker, categories } from "@/components/ds/editorial";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/components/kicker")({
  head: () => seo("Kicker 分類標", "FLiPER 分類 kicker:藝術、設計、品牌、城市、觀點,字距拉開的大寫小標。"),
  component: () => (
    <DocPage kicker="COMPONENTS · CATEGORY KICKER" title="分類標 Kicker" intro={<p>五個分類,中文在前、英文在後,等寬大寫並拉開字距。</p>}>
      <Section title="範例" why="Kicker 是標題前的一聲輕咳——告訴讀者接下來要讀的是哪一種故事。">
        <Example className="flex flex-wrap gap-x-8 gap-y-4">{categories.map((c) => <Kicker key={c}>{c}</Kicker>)}</Example>
      </Section>
      <Section title="程式碼">
        <Code lang="SWIFT">{`FLiPERKicker(.design) // 藝術 Creator · 設計 Idea · 品牌 Brand · 城市 City · 觀點 Opinion`}</Code>
        <Code>{`.kicker { font: 500 11px ui-monospace, monospace; letter-spacing: .18em; text-transform: uppercase; }`}</Code>
      </Section>
    </DocPage>
  ),
});
