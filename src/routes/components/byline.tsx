import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Rule, Section } from "@/components/ds/doc";
import { Byline } from "@/components/ds/editorial";
import { ComponentGuide } from "@/components/ds/atlas";
import { seo } from "@/lib/seo";
import { sampleArticles } from "@/lib/sample-articles";

export const Route = createFileRoute("/components/byline")({
  head: () => seo("Byline 署名", "FLiPER 署名元件:姓名(宋體)+ 全形「｜」+ 專欄名(灰色黑體)。"),
  component: () => (
    <DocPage kicker="COMPONENTS · BYLINE" title="署名 Byline" intro={<p>有專欄時格式為 <code className="font-mono text-sm">name ｜ column</code>。姓名用宋體,專欄用 muted 黑體,中間是全形直線「｜」；只有署名時不添加分隔或虛構專欄。</p>}>
      <Section title="範例" why="作者是故事的主角之一;宋體給名字份量,灰色的專欄名退居背景。">
        <Example className="space-y-3"><Byline name={sampleArticles[0].name} column={sampleArticles[0].column} /><Byline name={sampleArticles[1].name} /><Byline name={sampleArticles[2].name} /></Example>
        <Rule do="使用全形「｜」(U+FF5C)作為分隔。" dont="使用半形 | 、斜線或「by」。" />
      </Section>
      <Section title="程式碼">
        <Code lang="SWIFT">{`FLiPERByline(name: "FLiPER 觀點", column: "人物")`}</Code>
        <Code lang="HTML">{`<p class="byline"><span class="name">FLiPER 觀點</span>｜<span class="column">人物</span></p>`}</Code>
      </Section>
      <ComponentGuide usage="用在文章標題之下、封面卡末尾與專欄列表；把作者與專欄視為不同層級，不拿它代替出版日期。" states={["姓名宋體、專欄 muted 黑體，全形 ｜ 分隔；長名允許自然換行。", "靜態署名無 hover；若姓名連到作者頁，僅連結文字有底線回饋。", "只有真實作者連結進入 Tab 順序，保留 focus-visible 外框。", "靜態資訊沒有 disabled；作者未知時寫「FLiPER 編輯室」，不降低整列透明度。"]} good="保持 name ｜ column 與可讀對比；長名字完整顯示。" bad="加入 by、半形 |、斜線，或把作者名字截成無法辨認的縮寫。" token="FLiPERByline(name:column:)" />
    </DocPage>
  ),
});
