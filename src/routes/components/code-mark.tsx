import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Section } from "@/components/ds/doc";
import { CodeMark } from "@/components/ds/editorial";
import { ComponentGuide } from "@/components/ds/atlas";
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
      <ComponentGuide usage="用於封面、文章索引與收藏列表，將文章 ID 轉成可辨認的期號；它不是日期，也不是隨機裝飾。" states={["文章 ID 左側補 0 成六位數；等寬字、tabular-nums、muted 色。", "靜態期號無 hover；若提供複製操作，另加有名稱的複製按鈕。", "數字本身不進入 Tab；複製按鈕顯示焦點與複製結果。", "無 disabled；缺少 ID 時不顯示假的 000000，等待真實資料。"]} good="保留六位文章索引，複製時返回同樣的六位字串。" bad="用裝飾性的隨機號碼冒充文章 ID，或讓期號搶過標題。" token="FLiPERCodeMark(postID:)" />
    </DocPage>
  ),
});
