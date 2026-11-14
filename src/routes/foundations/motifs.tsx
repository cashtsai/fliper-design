import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Section } from "@/components/ds/doc";
import { Diamond, Hairline, Masthead, StrongRule } from "@/components/ds/editorial";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/foundations/motifs")({
  head: () => seo("Motifs 標誌元素", "FLiPER 的四個標誌元素:細線、菱形裝飾 ◆、粗線與刊頭。"),
  component: MotifsPage,
});

function MotifsPage() {
  return (
    <DocPage kicker="FOUNDATIONS · MOTIFS" title="四個讓畫面成為一期刊物的記號">
      <Section label="01 · HAIRLINE" title="細線 Hairline Rule" why="1px 的 border 色細線是結構的分隔,不搶戲,只劃界。">
        <Example><p className="text-sm">段落一</p><Hairline className="my-4" /><p className="text-sm">段落二</p></Example>
        <Code>{`border-top: 1px solid var(--border);`}</Code>
      </Section>
      <Section label="02 · DIAMOND" title="菱形裝飾 ◆" why="來自雜誌封面:兩條細線夾住一顆小菱形,用來收尾或分節。">
        <Example><Diamond className="mx-auto max-w-sm" /></Example>
        <Code lang="HTML">{`<div class="ornament"><span></span>◆<span></span></div>`}</Code>
      </Section>
      <Section label="03 · STRONG RULE" title="粗線 Strong Rule" why="黑 .85 / 白 .80 的 2px 粗線,是重大的章節斷點。一頁最多一兩條。">
        <Example><p className="kicker text-ink">SECTION</p><StrongRule className="mt-2" /></Example>
        <Code>{`border-top: 2px solid rgba(0,0,0,.85); /* dark: rgba(255,255,255,.80) */`}</Code>
      </Section>
      <Section label="04 · MASTHEAD" title="刊頭 Masthead" why="置中的 FLiPER 字標 + 細線 + 字距拉開的 kicker,讓任何畫面都像一期刊物。">
        <Example><Masthead /></Example>
      </Section>
    </DocPage>
  );
}
