import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Rule, Section } from "@/components/ds/doc";
import { AppStoreBadge, PrimaryButton, SecondaryButton, TextLink } from "@/components/ds/editorial";
import { ComponentGuide } from "@/components/ds/atlas";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/components/buttons")({
  head: () => seo("Buttons & Badge 按鈕與下載徽章", "FLiPER 按鈕:主要按鈕為墨色,黎明橘僅用於連結;以及 App Store 下載徽章。"),
  component: () => (
    <DocPage kicker="COMPONENTS · BUTTONS & BADGE" title="按鈕與徽章" intro={<p>主要按鈕是墨色,次要按鈕是粗線外框。黎明橘只留給文字連結。</p>}>
      <Section title="按鈕" why="按鈕是工具,不是聲音;讓重點色留給編輯室。">
        <Example className="flex flex-wrap items-center gap-4"><PrimaryButton>開始閱讀</PrimaryButton><SecondaryButton>訂閱電子報</SecondaryButton><TextLink>看更多故事 →</TextLink></Example>
        <Rule do="Primary = ink 底 + paper 字。" dont="做黎明橘填色按鈕。" />
      </Section>
      <Section title="可操作的狀態範例"><Example className="flex flex-wrap items-center gap-4"><PrimaryButton>預設</PrimaryButton><PrimaryButton className="opacity-85">Hover 示意</PrimaryButton><SecondaryButton className="outline-2 outline-offset-4 outline-dawn">Focus 示意</SecondaryButton><PrimaryButton disabled>Disabled</PrimaryButton></Example><p className="text-sm text-muted-foreground">此頁按鈕展示外觀，未連接訂閱或閱讀服務；停用範例不可點擊。</p></Section>
      <Section title="App Store 徽章">
        <Example><AppStoreBadge /></Example><p className="text-sm leading-relaxed text-muted-foreground">此為示意重繪，未連接下載地址。正式上線需換成 Apple 官方徽章素材，遵循官方留白與最小尺寸，不修改圖形、字體或比例。</p>
        <Code>{`.btn-primary { background: var(--ink); color: var(--paper); border-radius: 6px; padding: 10px 20px; }
.btn-secondary { border: 1px solid var(--ink); color: var(--ink); }
a { color: var(--accent); text-underline-offset: 3px; }`}</Code>
      </Section>
      <ComponentGuide usage="Primary 表示當前唯一主要動作；Secondary 是次要操作；TextLink 是閱讀導覽。App Store 徽章只用於真實下載入口。" states={["墨底紙字 / 粗線外框 / 橘色底線連結；主要命中區至少 44 × 44px。", "主要按鈕墨底略淡、次要按鈕 paperDeep；連結保留底線，尺寸不跳動。", "2px 曙光橘外框，4px offset；圖示按鈕提供可讀名稱與提示。", "使用原生 disabled 與降低透明度；載入時避免重複提交並保留動作名稱。"]} good="一個情境只有一個主要動作；送出中、完成與失敗有清楚回饋。" bad="用橘色填滿按鈕，僅用顏色表示停用，或把非官方重繪徽章作正式商店素材。" token="PrimaryButton / SecondaryButton / TextLink" />
    </DocPage>
  ),
});
