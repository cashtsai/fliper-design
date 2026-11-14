import { createFileRoute, Link } from '@tanstack/react-router';
import { Code, DocPage, Example, Rule, Section, Copyable } from '@/components/ds/doc';
import { Logo } from '@/components/ds/editorial';
import { SpecTable } from '@/components/ds/atlas';
import { logoGuidance } from '@/lib/atlas';
import { seo } from '@/lib/seo';

export const Route = createFileRoute('/foundations/logo')({
  head: () => seo('Logo 標誌', 'FLiPER 官方幾何字標：黑白版本、留白、最小尺寸、小寫 i 與禁止變形規範。'),
  component: LogoPage,
});
function LogoPage() {
  return <DocPage kicker="FOUNDATIONS · LOGO" title="一個小寫 i，一份相信" intro={<p>現行標誌使用提供的官方幾何字標，不以字體重新打字代替。黑色用於亮底，反白用於暗底；小寫 i 永遠不變。</p>}>
    <Section label="MASTER MARK" title="現行官方字標"><Example className="flex min-h-44 items-center justify-center"><Logo className="h-16 sm:h-20"/></Example><p className="text-sm text-muted-foreground">本例隨站內深淺模式切換反白。所有應用保持原始長寬比。</p></Section>
    <Section label="MINIMUM SIZE & CLEAR SPACE" title="最小尺寸與留白">
      <SpecTable headers={['項目','正式規格','檢查方式']} rows={[
        ['數位最小寬度',`${logoGuidance.minWidthWeb}px（約高 38px）`,'絕對下限 80px；再小，小寫 i 的缺口與字腔會糊'],
        ['印刷最小寬度',`${logoGuidance.minWidthPrint}mm`,'以實際紙材打樣，避免墨暈'],
        ['留白 Clear space','四周至少 1 × F 字高（cap-height）','淨空不得被其他元素或邊界擠壓'],
        ['極小情境例外','favicon / app icon：單獨 F 標記','不使用完整 wordmark'],
      ]} />
      <Example className="flex flex-col items-center gap-8" label="CLEAR SPACE · H_F = F CAP-HEIGHT">
        <figure className="relative border border-dashed border-strong p-12" aria-label="字標四周保留等距淨空，各為一個 F 字高">
          <span className="absolute inset-x-0 top-4 text-center font-mono text-xs text-muted-foreground">1 H_F</span>
          <span className="absolute inset-x-0 bottom-4 text-center font-mono text-xs text-muted-foreground">1 H_F</span>
          <span className="absolute inset-y-0 left-1 flex items-center font-mono text-[10px] text-muted-foreground">1 H_F</span>
          <span className="absolute inset-y-0 right-1 flex items-center font-mono text-[10px] text-muted-foreground">1 H_F</span>
          <div className="border border-strong"><Logo className="h-12" /></div>
        </figure>
        <div className="flex flex-wrap items-end justify-center gap-8">
          <figure className="space-y-3 text-center"><div className="mx-auto w-[96px]"><Logo className="h-auto max-w-full" /></div><figcaption className="border-x border-t border-strong pt-2 font-mono text-xs">96px · 約高 38px</figcaption></figure>
          <figure className="space-y-3 text-center"><div className="mx-auto w-[80px]"><Logo className="h-auto max-w-full" /></div><figcaption className="border-x border-t border-strong pt-2 font-mono text-xs">80px · 絕對下限</figcaption></figure>
        </div>
      </Example>
      <p className="leading-[1.9]">以字標中 F 的字高（cap-height）為淨空基準，四周至少各留一個 F 字高，不放文字、圖像、邊線或其他標誌。空間不足時縮小整個標誌，不壓縮留白；若低於 80px，改用單獨的 F 標記，不再縮小完整字標。</p>
      <Copyable value={`clear-space: ${logoGuidance.clearSpaceCapHeightRatio} × F cap-height; min-width: ${logoGuidance.minWidthWeb}px; absolute-min-width: ${logoGuidance.absoluteMinWidthWeb}px; print-min-width: ${logoGuidance.minWidthPrint}mm`}/>
      <p className="text-sm leading-relaxed text-muted-foreground">以上為現行正式規格。印刷需原始向量檔，PNG 不應直接放大作大型輸出。</p>
      <Code lang="HTML">{`<img src="fliper-logo.png" alt="FLiPER" width="96" height="38" />\n/* height:auto; 黑 / 白單色；四周 ≥ 1 × F cap-height\n   數位最小寬度 96px，絕對下限 80px；印刷最小寬度 24mm\n   favicon / app icon：使用單獨 F 標記 */`}</Code>
    </Section>
    <Section label="GUARDRAILS" title="可以與不可以">
      <Rule do="使用官方字標、原始比例與黑 / 白單色；i 一律小寫。" dont="拉伸、旋轉、描邊、加陰影、改用橘色或其他品牌色；將 i 改成 I。"/>
      <div className="grid gap-5 sm:grid-cols-3">{[['FLIPER','不可大寫 I'],['Fliper','不可任意大小寫'],['FLiPER','不可以一般字型取代幾何字標']].map(([s,t])=><div key={t} className="border-t pt-4"><p className="font-display text-3xl text-ink line-through">{s}</p><p className="mt-3 text-sm">{t}</p></div>)}</div>
    </Section>
    <Section label="HISTORICAL REFERENCE" title="初代四變體，不是現行選項">
      <SpecTable headers={['歷史變體','狀態']} rows={['Black','Purple','Purple&White','Black&White'].map(n=>[n,'歷史存查；不作現行交付選項'])}/>
      <p className="leading-relaxed">為避免歷史色彩混入現行系統，四款配色實圖集中展示於沿革頁。現行標誌僅採黑與反白，不恢復紫色或黃色版本。</p>
      <Link to="/design-heritage" className="doc-link inline-flex min-h-11 items-center">查看初代四款字標 →</Link>
    </Section>
  </DocPage>;
}
