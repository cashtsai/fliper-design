import { createFileRoute, Link } from '@tanstack/react-router';
import { DocPage, Code, Copyable } from '@/components/ds/doc';
import { Logo } from '@/components/ds/editorial';
import { SpecTable } from '@/components/ds/atlas';
import logo from '@/assets/fliper-logo.png.asset.json';
import { heritage } from '@/lib/atlas';
import { seo } from '@/lib/seo';

export const Route = createFileRoute('/design-heritage')({
  head: () => seo('設計沿革 Design Heritage', 'FLiPER 三代視覺識別：紫色企業識別、已退役的黃色過渡，以及現行唯一正式的墨紙與黎明橘規範。'),
  component: Heritage,
});
function Heritage() {
  return <div className="heritage-page"><DocPage kicker="BRAND ATLAS · 02 / DESIGN HERITAGE" title="從識別，到一本誌" intro={<p>三個世代，一條由外向內的路。顏色不只是喜好，更記錄了 FLiPER 如何理解自己。</p>}>
    <ol className="ml-2 border-l pl-7 sm:pl-10 space-y-16">
      <li className="relative"><span aria-hidden className="absolute -left-[35px] top-1 text-ink sm:-left-[47px]">◆</span>
        <p className="kicker text-muted-foreground">01 · ARCHIVE ONLY / 歷史存查</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink">初代 CIS · 紫色時代</h2>
        <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">FLiPER Creative Inc. Design Guidelines V1.1</p>
        <p className="my-6 font-serif text-lg leading-[1.9]">最初的紫，建立的是企業識別的辨認度。按鈕、圖示、連結與互動狀態共享一組清楚的紫色階，灰階則讓內容維持秩序。這一代回答的是：「如何在各種接觸點，一眼認出 FLiPER？」</p>
        <div className="grid gap-4 sm:grid-cols-3">{[
          ['Purple',heritage.primary,'bg-history-purple','Button / Icon'], ['Link & Active',heritage.active,'bg-history-active','連結 / 選取'], ['Hover',heritage.hover,'bg-history-hover','滑過狀態'],
        ].map(([n,v,c,u]) => <div key={n}><div className={`h-20 rounded-md ${c}`} /><p className="mt-3 font-mono text-sm text-ink">{n}</p><Copyable value={v ?? ''} /><p className="text-xs text-muted-foreground">{u}</p></div>)}</div>
        <div className="mt-6"><SpecTable headers={['灰階角色','色值']} rows={['Title','Content','Description','Border','Background'].map((n,i)=>[n,<Copyable key={n} value={heritage.grays[i] ?? ''}/>])} /></div>
        <div className="mt-6"><SpecTable headers={['字級','尺寸','用途']} rows={[[ 'H1','24px','標題'],['H2','20px','次標題'],['H3','18px','Headline'],['p','16px','Body']]} /></div>
        <h3 className="mt-8 font-display text-xl font-bold text-ink">四個官方變體 · 歷史對照</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">使用同一份官方幾何字標呈現四種歷史配色；此為歷史視覺重建，不是四份原始 CIS 檔案。</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Lockup label="Black" mode="black"/><Lockup label="Purple · #39308E" mode="purple"/><Lockup label="Purple&White" mode="purple-white"/><Lockup label="Black&White" mode="black-white"/>
        </div>
        <div className="mt-6"><Code>{`/* ARCHIVE ONLY — 不可移入現行主題 */\nPurple: #39308E; Link & Active: #463FBB; Hover: #27206B;\nTitle: #111111; Content: #444444; Description: #999999;\nBorder: #DDDDDD; Background: #EEEEEE;`}</Code></div>
      </li>
      <li className="relative"><span aria-hidden className="absolute -left-[35px] top-1 text-ink sm:-left-[47px]">◆</span>
        <p className="kicker text-muted-foreground">02 · RETIRED / 零留存使用</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink">4.0 過渡 · 黃色時代</h2>
        <div className="mt-6 h-20 rounded-md bg-history-yellow"/><Copyable value={heritage.yellow}/>
        <p className="font-serif text-lg leading-[1.9]">4.0 曾短暫以亮黃作為強調色。它有清楚的能量，卻也有過於外放的音量；當品牌走向一本安靜、細膩、有編輯靈魂的誌，這個顏色不再適合新的閱讀節奏。因此它已退役，零留存使用，只在這條時間軸裡保留記憶。</p>
      </li>
      <li className="relative"><span aria-hidden className="absolute -left-[35px] top-1 text-dawn sm:-left-[47px]">◆</span>
        <p className="kicker text-dawn">03 · CURRENT / 現行唯一正式規範</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink">墨與紙，加上一抹黎明</h2>
        <div className="mt-6 grid grid-cols-4 gap-3"><div className="h-20 rounded-md bg-ink"/><div className="h-20 rounded-md border bg-paper"/><div className="h-20 rounded-md bg-dawn"/><div className="dark h-20 rounded-md bg-dawn"/></div>
        <div className="flex flex-wrap gap-5"><Copyable value="#A94700"/><Copyable value="#E59B5B"/></div>
        <p className="font-serif text-lg leading-[1.9]">從企業識別的紫，走向有編輯靈魂的墨與紙，FLiPER 把視覺的主角交還給作品與人。單色基底承載內容，細線與留白建立層次；曙光橘不再替每個按鈕發聲，只保留給連結、編輯口吻與小型標記。當顏色退後，故事才能走到前面。</p>
        <p className="mt-5 text-sm leading-relaxed">紫與黃皆已退役。任何新的 App、Web 或品牌接觸點，只採用本代規範；前兩代不得成為現行按鈕、圖示或標誌的配色來源。</p>
        <Logo className="mt-8 h-10"/>
        <div className="mt-6 flex flex-wrap gap-6"><Link to="/foundations/color" className="doc-link">現行色彩規範 →</Link><Link to="/foundations/logo" className="doc-link">現行標誌規範 →</Link></div>
      </li>
    </ol>
  </DocPage></div>;
}
function Lockup({ label, mode }: { label: string; mode: 'black'|'purple'|'purple-white'|'black-white' }) {
  const reverse = mode === 'purple-white' || mode === 'black-white';
  const bg = mode === 'purple-white' ? 'bg-history-purple' : mode === 'black-white' ? 'bg-history-ink' : 'bg-history-white';
  return <figure><div className={`flex h-28 items-center justify-center rounded-md ${bg}`}>
    {mode === 'purple' ? <span role="img" aria-label="FLiPER 紫色歷史字標" className="h-10 w-28 bg-history-purple" style={{maskImage:`url(${logo.url})`,maskSize:'contain',maskRepeat:'no-repeat',maskPosition:'center'}}/> : <img src={logo.url} alt="FLiPER" className={`h-10 w-auto ${reverse ? 'invert' : ''}`} />}
  </div><figcaption className="mt-3 font-mono text-xs text-muted-foreground">{label}</figcaption></figure>;
}
