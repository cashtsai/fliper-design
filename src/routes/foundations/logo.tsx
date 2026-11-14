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
    <Section label="CLEAR SPACE" title="留白，讓標誌獨立呼吸">
      <Example className="flex justify-center"><div className="relative border border-dashed border-strong p-6 sm:p-10"><Logo className="h-12 sm:h-20"/><span className="absolute left-1 top-1 font-mono text-xs text-muted-foreground">½ H</span></div></Example>
      <p className="leading-[1.9]">以字標總高度 H 為基準，四周至少留出 ½ H，不放文字、圖像、邊線或其他標誌。空間不足時縮小整個標誌，不壓縮留白。</p>
      <Copyable value={`clear-space: ${logoGuidance.clearSpaceHeightRatio} × logo height`}/>
    </Section>
    <Section label="MINIMUM SIZE" title="最小尺寸與交付">
      <SpecTable headers={['媒介','最小寬度','檢查方式']} rows={[[ 'Web / App',`${logoGuidance.minWidthWeb}px / 80pt`,'檢查小寫 i、內部空隙仍清楚'],['印刷',`${logoGuidance.minWidthPrint}mm`,'以實際紙材打樣，避免墨暈']]} />
      <p className="text-sm leading-relaxed text-muted-foreground">留白與最小尺寸是本次補訂的建議值，尚待品牌端核定；不得視為初代 CIS 的既定尺寸。印刷需原始向量檔，本次附件為 PNG，不應直接放大作大型輸出。</p>
      <Code lang="HTML">{`<img src="fliper-logo.png" alt="FLiPER" width="500" height="200" />\n/* 保持 width:auto; 黑 / 白單色；四周 ≥ 0.5H */`}</Code>
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
