import { createFileRoute, Link } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/ds/doc";
import { Diamond, EditorsNote, Logo } from "@/components/ds/editorial";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("品牌主張 Overview", "FLiPER 設計語言的唯一來源:墨與紙的單色表面,唯一的黎明橘重點色,封面即設計系統。"),
  component: Overview,
});

const pillars = [
  ["INK & PAPER", "單色基底", "所有表面都是墨與紙。層次靠明度、細線與留白建立,而不是色彩。"],
  ["DAWN ORANGE", "唯一重點色", "山屋的黎明橘只出現在連結、編者的聲音與小標記。永遠節制。"],
  ["THE COVER", "封面即系統", "App 與網站的每個畫面,都從 FED 每日封面推導而來。"],
];

function Overview() {
  return (
    <>
      <div className="border-b bg-paper-deep px-5 py-20 text-center sm:px-10">
        <Logo className="mx-auto h-16 sm:h-24" />
        <p className="kicker mt-6 text-muted-foreground">DESIGN SYSTEM · v4.0</p>
        <Diamond className="mx-auto my-8 max-w-xs" />
        <p className="font-serif text-2xl font-semibold leading-relaxed text-ink sm:text-3xl">從渺小的自己出發,<br />成為翻轉世界的人</p>
        <p className="kicker mt-5 text-dawn">KEEP EXPLORING</p>
      </div>
      <DocPage kicker="OVERVIEW · 品牌主張" title="一份規範,兩個平台" intro={<p>FLiPER Design System 是 FLiPER 設計語言的正典。未來每一次 App 與網站改版,都從這裡出發——iOS 的 <code className="font-mono text-sm">FLiPERDesign</code> 套件與 flipermag.com 主題,皆以此規範為參考。</p>}>
        <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3">
          {pillars.map(([k, t, d]) => (
            <div key={k} className="bg-card p-6">
              <p className="kicker text-muted-foreground">{k}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-ink">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <Section label="VOICE" title="FLiPER 怎麼說話">
          <EditorsNote attribution="DESIGN PRINCIPLE ── FLiPER 編輯室">我們不是在設計介面,而是在編一本每天出刊的雜誌。安靜的紙、清楚的字、一句來自編輯室的話——這就夠了。</EditorsNote>
        </Section>
        <Section label="START HERE" title="從哪裡開始">
          <ul className="divide-y border-y">
            {([["/brand-story","Brand Story","從渺小出發的方法"],["/design-heritage","Design Heritage","三代識別的演進"],["/foundations/accessibility","Accessibility","讓每個人讀得見"],["/foundations/color","Color","墨、紙與黎明橘"],["/foundations/typography","Typography","Slab 襯線標題與宋體封面"],["/cover-system","The Cover System","一切的源頭"],["/platforms","Platforms","對應 iOS 與 Web"]] as const).map(([to,a,b])=> (
              <li key={to}><Link to={to} className="flex items-baseline justify-between py-4 hover:text-ink"><span className="font-display text-lg font-semibold text-ink">{a}</span><span className="text-sm text-muted-foreground">{b} →</span></Link></li>
            ))}
          </ul>
        </Section>
      </DocPage>
    </>
  );
}
