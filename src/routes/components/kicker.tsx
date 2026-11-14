import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Section } from "@/components/ds/doc";
import { Kicker, categories } from "@/components/ds/editorial";
import { ComponentGuide } from "@/components/ds/atlas";
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
      <ComponentGuide usage="放在標題之前，提示藝術、設計、品牌、城市或觀點；分類標是內容資訊，不等於篩選器。" states={["中文在前、英文在後；同一分類沿用同一對映，等寬小標。", "靜態分類無 hover；真的可篩選時使用獨立控制，不假裝標籤可點。", "靜態標籤不進入 Tab；分類篩選需可讀名稱、焦點與選取狀態。", "分類缺漏時省略，不加「其他」冒充已知分類；篩選停用需說明理由。"]} good="維持固定中英對映，用文字而非不同顏色辨認分類。" bad="每個分類換一個重點色，或把分類標做成無功能的按鈕。" token="FLiPERKicker(category)" />
    </DocPage>
  ),
});
