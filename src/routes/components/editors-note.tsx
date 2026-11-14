import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Rule, Section } from "@/components/ds/doc";
import { EditorsNote } from "@/components/ds/editorial";
import { ComponentGuide } from "@/components/ds/atlas";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/components/editors-note")({
  head: () => seo("Editor's Note 編者按", "FLiPER 編者按:4px 黎明橘直線、宋體內文與等寬署名——品牌對讀者說話的唯一位置。"),
  component: () => (
    <DocPage kicker="COMPONENTS · EDITOR'S NOTE" title="編者按 Editor's Note" intro={<p>這是「FLiPER 對讀者說話」的地方,也是黎明橘作為聲音出現的<strong className="text-ink">唯一</strong>位置。</p>}>
      <Section title="範例" why="整個系統都是黑白,只有編輯的聲音帶色——讀者一眼就知道:這是我們想對你說的話。">
        <Example><EditorsNote>她說,設計不是讓東西變美,而是讓人重新看見。我們選這篇,因為它提醒了每個在清晨出發的人:渺小,也是起點。</EditorsNote></Example>
        <Rule do="每篇內容最多一則編者按;署名格式固定。" dont="把橘色直線用於一般引言或提示框。" />
      </Section>
      <Section title="程式碼">
        <Code lang="SWIFT">{`FLiPEREditorNote(text: note, attribution: "WHY WE PICKED IT ── FLiPER 編輯室")`}</Code>
        <Code>{`.editors-note { border-left: 4px solid var(--accent); padding-left: 20px; }
.editors-note p { font-family: var(--font-serif); line-height: 1.9; }
.editors-note .attr { font: 11px ui-monospace; letter-spacing: .18em; color: var(--accent); }`}</Code>
      </Section>
      <ComponentGuide usage="用於選文理由或編輯室對讀者說的一段話；接在內容之後或靠近閱讀入口。每篇最多一則，不作系統提示或一般引言。" states={["4px 曙光橘直線、宋體內文、固定編輯室署名；文字不需額外底色。", "靜態編者按無 hover；段內真實連結保留底線。", "編者按本身不進入 Tab；段內連結顯示外框，不能被容器裁掉。", "無 disabled；缺少編輯文案時整則不呈現，不顯示空框。"]} good="保留編輯室口吻與固定署名，把橘色留給真正的編輯聲音。" bad="將橘色直線當錯誤、提醒、廣告或受訪者的一般引言。" token="FLiPEREditorNote(text:attribution:)" />
    </DocPage>
  ),
});
