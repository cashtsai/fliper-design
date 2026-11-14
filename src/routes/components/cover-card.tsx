import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Section } from "@/components/ds/doc";
import { CoverCard } from "@/components/ds/editorial";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/components/cover-card")({
  head: () => seo("Cover Card 封面卡", "FLiPER 每日精選封面卡:封面圖、宋體標題、署名、分類標與六位數期號。"),
  component: () => (
    <DocPage kicker="COMPONENTS · COVER CARD" title="封面卡 Cover Card" intro={<p>每日精選的基本單位:封面圖、分類 kicker、期號、宋體標題、細線、署名。</p>}>
      <Section title="範例" why="它是整本封面的縮影——在列表裡,每張卡都是一張小封面。">
        <Example className="grid gap-6 sm:grid-cols-2">
          <CoverCard />
          <CoverCard title="城市的縫隙裡,藏著下一個故事" name="陳柏宇" column="城市漫遊" kicker="城市 City" code="128391" />
        </Example>
      </Section>
      <Section title="結構">
        <Code lang="SWIFT">{`FLiPERCoverCard(post: post)
// image → kicker + codeMark → serif title → hairline → byline`}</Code>
      </Section>
    </DocPage>
  ),
});
