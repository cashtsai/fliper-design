import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Rule, Section } from "@/components/ds/doc";
import { EditorsNote } from "@/components/ds/editorial";
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
    </DocPage>
  ),
});
