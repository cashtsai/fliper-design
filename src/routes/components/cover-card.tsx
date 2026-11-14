import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Section } from "@/components/ds/doc";
import { CoverCard } from "@/components/ds/editorial";
import { ComponentGuide } from "@/components/ds/atlas";
import { seo } from "@/lib/seo";
import { sampleArticles } from "@/lib/sample-articles";

export const Route = createFileRoute("/components/cover-card")({
  head: () => seo("Cover Card 封面卡", "FLiPER 每日精選封面卡:封面圖、宋體標題、署名、分類標與六位數期號。"),
  component: () => (
    <DocPage kicker="COMPONENTS · COVER CARD" title="封面卡 Cover Card" intro={<p>每日精選的基本單位:封面圖、分類 kicker、期號、宋體標題、細線、署名。</p>}>
      <Section title="範例" why="它是整本封面的縮影——在列表裡,每張卡都是一張小封面。">
        <Example className="grid gap-6 sm:grid-cols-2">
          {sampleArticles.map(article => <CoverCard key={article.title} {...article} />)}
        </Example>
      </Section>
      <Section title="結構">
        <Code lang="SWIFT">{`FLiPERCoverCard(post: post)
// image → kicker + codeMark → serif title → hairline → byline`}</Code>
      </Section>
      <ComponentGuide usage="用於每日精選、文章列表與收藏；每張卡只表達一篇文章，不在卡內嵌另一張卡或多組主要操作。" states={["圖片 → kicker + 期號 → 宋體標題 → 細線 → 署名；圖片固定 4:3。", "靜態範例無 hover；接上文章連結後以標題底線或邊線回饋，不改圖片色調。", "若整張卡可開啟文章，只建立一個主連結焦點；不要重複可點巢狀連結。", "文章不可讀時保留標題與明確狀態文字，取消連結；不只把卡片變灰。"]} good="長標題自然換行；保留相同比例圖片與同一套編輯層級。" bad="文字覆蓋照片、橘色鋪底、卡片套卡片，或只用照片傳達文章標題。" token="FLiPERCoverCard(post:)" />
    </DocPage>
  ),
});
