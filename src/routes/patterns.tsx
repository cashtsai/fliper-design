import { createFileRoute } from "@tanstack/react-router";
import { Code, DocPage, Example, Rule, Section } from "@/components/ds/doc";
import { AppStoreBadge, CoverCard, Diamond, EditorsNote, Masthead, PrimaryButton } from "@/components/ds/editorial";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/patterns")({
  head: () => seo("Patterns 模式", "FLiPER 版面模式:每日精選、編者的聲音、成為明日說故事的人 CTA。"),
  component: () => (
    <DocPage kicker="PATTERNS" title="把元件組成一期刊物">
      <Section label="01" title="Daily Pick 每日精選" why="刊頭 + 一張封面卡 + 編者按:一天只推一篇,讓選擇本身成為內容。">
        <Example className="mx-auto max-w-sm space-y-6"><Masthead kicker="DAILY PICK · 2026.11.14" /><CoverCard /><EditorsNote>渺小,也是起點。</EditorsNote></Example>
      </Section>
      <Section label="02" title="Editor's Voice 編者的聲音" why="橘色直線只在這裡出現,讀者學會辨認:這是 FLiPER 本人。">
        <Example><p className="mb-6 leading-[1.9]">……內文以黑體排版,安靜地陳述受訪者的故事。</p><EditorsNote attribution="EDITOR'S VOICE ── FLiPER 編輯室">我們相信每個人都有一個值得被說出來的故事。</EditorsNote></Example>
      </Section>
      <Section label="03" title="Become Tomorrow's Storyteller" why="CTA 也用封面的語法:粗字、菱形、墨色按鈕——不喊叫,而是邀請。">
        <Example className="bg-paper-deep text-center">
          <p className="kicker text-muted-foreground">BECOME TOMORROW'S STORYTELLER</p>
          <h3 className="mt-3 font-serif text-3xl font-bold text-ink">成為明日的說故事的人</h3>
          <Diamond className="mx-auto my-5 max-w-[180px]" />
          <p className="mx-auto max-w-md text-sm leading-relaxed">下載 FLiPER App,每天一篇,從渺小的自己出發。</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4"><AppStoreBadge /><PrimaryButton>投稿你的故事</PrimaryButton></div>
        </Example>
      </Section>
      <Section label="CONTENT CONTRACT" title="模式背後的內容順序">
        <p className="leading-[1.9]">Daily Pick 是一次明確的編輯選擇，不是無限捲動的資訊流。載入時保留封面比例；圖片缺失仍顯示文字標題與署名。無內容時寫明當日尚未出刊，讀取失敗提供重試，不用空白封面假裝完成。</p>
        <Rule do="先作品，再作者與脈絡，最後是編輯聲音或下一步邀請。" dont="以多個 CTA 打斷閱讀，或用編者按替代廣告與錯誤訊息。" />
        <Code lang="CONTENT">{`Daily Pick: masthead → cover card → editor's note
Editor's Voice: story → one editorial note → related reading
Storyteller CTA: invitation → supporting line → one primary action
States: loading / content / empty / error; preserve reading order`}</Code>
      </Section>
      <Section label="ADAPTATION" title="同一個節奏，不同的螢幕">
        <p className="leading-[1.9]">手機依閱讀順序單欄呈現；桌面可將註解放在側欄，但不改變主內容順序。CTA 放在段落或文章結尾，文字可換行，按鈕不遮住正文；動態內容更新需保留焦點位置。</p>
      </Section>
    </DocPage>
  ),
});
