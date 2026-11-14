import { createFileRoute } from '@tanstack/react-router';
import { Code, DocPage, Example, Rule, Section } from '@/components/ds/doc';
import { PrimaryButton, SecondaryButton } from '@/components/ds/editorial';
import { SpecTable } from '@/components/ds/atlas';
import { contrast, palette } from '@/lib/atlas';
import { seo } from '@/lib/seo';

export const Route = createFileRoute('/foundations/accessibility')({
  head: () => seo('Accessibility 無障礙', 'FLiPER WCAG AA 對比表、鍵盤焦點、點擊區域、減少動態、非色彩資訊與輔助科技規範。'),
  component: Accessibility,
});
function Accessibility() {
  const text = palette.filter(p=>['ink','inkSoft','muted','faint','accent','success'].includes(p.name));
  return <DocPage kicker="FOUNDATIONS · ACCESSIBILITY" title="讓每個人，都讀得見" intro={<p>安靜不等於模糊。無障礙是閱讀品質的一部分：可讀的文字、可辨認的焦點，以及不用猜測的行為。</p>}>
    <Section label="CONTRAST · WCAG 2.2" title="文字對比度">
      <p className="leading-[1.9]">一般文字至少 4.5:1；大字（24px，或粗體 18.67px 以上）至少 3:1。焦點與必要控制輪廓至少 3:1。以下採 sRGB 相對亮度公式，對比背景為 paper。</p>
      <SpecTable headers={['Token','淺色 / paper','深色 / paper','一般文字 AA']} rows={text.map(p=>[p.name,`${contrast(p.light,'#FAF8F3').toFixed(2)}:1`,`${contrast(p.dark,'#161513').toFixed(2)}:1`,contrast(p.light,'#FAF8F3') >= 4.5 && contrast(p.dark,'#161513') >= 4.5 ? '兩模式通過' : '不作一般文字色'])}/>
      <p className="text-sm leading-relaxed text-muted-foreground">原始說明列曙光橘 #A94700 對 paper 為 5.85:1；依指定紙白 #FAF8F3 實算為 5.51:1，仍達 AA。本表保留實際計算值。faint 不用於圖說、placeholder 或必讀標籤；success 只作輔助圖形，狀態文字用 ink。</p>
      <Rule do="正文用 inkSoft，圖說與 placeholder 用 muted；連結保留底線。" dont="用 faint 寫必要資訊，或只憑『看起來夠深』判斷 AA。"/>
    </Section>
    <Section label="KEYBOARD" title="焦點，是另一種閱讀路徑">
      <Example className="flex flex-wrap gap-4"><PrimaryButton>預設按鈕</PrimaryButton><SecondaryButton className="outline-2 outline-offset-4 outline-dawn">焦點示意</SecondaryButton><PrimaryButton disabled>停用</PrimaryButton></Example>
      <p className="leading-[1.9]">所有連結、按鈕與輸入控制都可用鍵盤到達，focus-visible 顯示 2px 曙光橘外框、4px 間距。停用控制不進入操作流程；靜態署名、分類與期號不加入 Tab 順序。頁首提供跳至主要內容，導覽標註目前頁面。</p>
      <Code>{`:where(a, button, input, select, textarea, [tabindex]):focus-visible {\n  outline: 2px solid var(--accent);\n  outline-offset: 4px;\n}\n/* 不以 outline:none 隱藏焦點；不以正數 tabindex 改排序 */`}</Code>
    </Section>
    <Section label="TARGET SIZE" title="小圖示，大點擊區">
      <SpecTable headers={['平台','設計基準','例外']} rows={[[ 'Web','主要操作至少 44 × 44 CSS px','WCAG 2.2 AA 最低 24 × 24px（或符合間距例外）；本系統採更大的操作基準'],['iOS','至少 44 × 44pt','圖示可較小，命中區不縮小'],['內文連結','自然行高 + 清楚底線','保留句子排版，不強迫每個字占一個方塊']]} />
      <Code>{`.icon-control { min-width: 44px; min-height: 44px; }\ninput::placeholder { color: var(--text-meta); }`}</Code>
    </Section>
    <Section label="REDUCED MOTION" title="減少動態，不減少資訊">
      <p className="leading-[1.9]">尊重 prefers-reduced-motion。取消裝飾性移動、平滑捲動與長時間轉場，保留立即的狀態切換。iOS 對應 Reduce Motion；載入、成功與錯誤仍以文字可被辨認。</p>
      <Code>{`@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: .01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: .01ms !important;\n    scroll-behavior: auto !important;\n  }\n}`}</Code>
    </Section>
    <Section label="MEANING & SEMANTICS" title="顏色之外，還有語意">
      <Rule do="用『已完成』文字搭配狀態圖示；錯誤指出欄位與修正方式。" dont="只顯示綠點或橘線，讓讀者自行猜測成功、選取或錯誤。"/>
      <p className="leading-[1.9]">每頁一個 main，標題依序 h1 → h2 → h3。圖示按鈕有可讀名稱，重要圖片有描述性 alt，純裝飾 ◆ 不朗讀。複製失敗必須提供文字回饋，不假裝成功。彈出式控制需保留焦點與返回路徑。</p>
      <p className="text-sm leading-relaxed text-muted-foreground">交付前檢查：200% 文字放大、窄螢幕、純鍵盤、VoiceOver / 螢幕閱讀器與深淺模式。對比通過不等同整站已取得無障礙認證。</p>
    </Section>
  </DocPage>;
}
