import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Rule, Section } from "@/components/ds/doc";
import { AppStoreBadge, PrimaryButton, SecondaryButton, TextLink } from "@/components/ds/editorial";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/components/buttons")({
  head: () => seo("Buttons & Badge 按鈕與下載徽章", "FLiPER 按鈕:主要按鈕為墨色,黎明橘僅用於連結;以及 App Store 下載徽章。"),
  component: () => (
    <DocPage kicker="COMPONENTS · BUTTONS & BADGE" title="按鈕與徽章" intro={<p>主要按鈕是墨色,次要按鈕是粗線外框。黎明橘只留給文字連結。</p>}>
      <Section title="按鈕" why="按鈕是工具,不是聲音;讓重點色留給編輯室。">
        <Example className="flex flex-wrap items-center gap-4"><PrimaryButton>開始閱讀</PrimaryButton><SecondaryButton>訂閱電子報</SecondaryButton><TextLink>看更多故事 →</TextLink></Example>
        <Rule do="Primary = ink 底 + paper 字。" dont="做黎明橘填色按鈕。" />
      </Section>
      <Section title="App Store 徽章">
        <Example><AppStoreBadge /></Example>
        <Code>{`.btn-primary { background: var(--ink); color: var(--paper); border-radius: 6px; padding: 10px 20px; }
.btn-secondary { border: 1px solid var(--ink); color: var(--ink); }
a { color: var(--accent); text-underline-offset: 3px; }`}</Code>
      </Section>
    </DocPage>
  ),
});
