import { createFileRoute } from '@tanstack/react-router';
import { DocPage, Section } from '@/components/ds/doc';
import { Diamond, Logo } from '@/components/ds/editorial';
import { seo } from '@/lib/seo';

export const Route = createFileRoute('/brand-story')({
  head: () => seo('品牌故事 Brand Story', 'FLiPER 4.0：從渺小的自己出發，透過作品、人與文化的層層探索，成為翻轉世界的人。'),
  component: BrandStory,
});
function BrandStory() {
  return <DocPage kicker="BRAND ATLAS · 01 / BRAND STORY" title="從渺小的自己出發" intro={<p className="font-serif">成為翻轉世界的人。</p>}>
    <div className="max-w-2xl space-y-7 font-serif text-lg leading-[2]">
      <Logo className="h-12" />
      <p>改變，不必以宏大的姿態開始。它可能只是清晨打開工作室的門，可能是一筆反覆修改的線條，也可能是一個人，決定把眼前的一件事認真做好。FLiPER 相信，渺小不是力量的反面；渺小，是每一份真實力量的起點。</p>
      <p>「從渺小的自己出發，成為翻轉世界的人。」這是 FLiPER 4.0 的核心主張。我們不把翻轉理解為一瞬間的轟動，而把它看成持續探索的累積：看見一個值得理解的作品，認識創作它的人，走進他的生活，才開始理解我們共享的世界。</p>
      <Diamond className="my-10" />
      <h2 className="font-display text-2xl font-bold text-ink">一本誌，也是一種觀看的方法</h2>
      <p>FLiPER 是一本藝術・設計・文化誌。透過專欄與專欄作家，我們帶讀者認識更多美好的人事物。作品不是一張漂亮的圖片，人不是一串成就的清單；在它們背後，有地方的記憶、文化的紋理，以及人與人之間細小卻深刻的關係。</p>
      <p>因此，我們的編輯方法總是由近而遠。先把一件作品看清楚，再聽見作品背後的那個人。沿著他的選擇，看見他所在的地方、文化與關係；最後，回到讀者自己的生活：這個故事，能讓我重新看待什麼？</p>
    </div>
    <Section label="THE METHOD · 由近而遠" title="探索，層層展開">
      <ol className="grid gap-0 border-y sm:grid-cols-4">{[
        ['01', '一件作品', '從具體的創作開始'], ['02', '作品背後的人', '理解選擇與生命經驗'],
        ['03', '地方 / 文化 / 關係', '走進創作所處的脈絡'], ['04', '翻轉世界', '把新的觀看帶回生活'],
      ].map(([n,t,d],i) => <li key={n} className="relative border-b px-4 py-7 sm:border-b-0 sm:border-r last:border-0"><p className="kicker text-muted-foreground">{n}</p><h3 className="mt-3 font-serif text-xl font-semibold text-ink">{t}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>{i < 3 && <span aria-hidden className="mt-5 block text-ink">→</span>}</li>)}</ol>
    </Section>
    <div className="max-w-2xl space-y-7 font-serif text-lg leading-[2]">
      <Diamond />
      <h2 className="font-display text-2xl font-bold text-ink">Keep Exploring</h2>
      <p>Keep Exploring 不是催促向前的命令，而是一個溫柔的邀請。保持好奇，不急著替陌生的事物下定義；走近一點，多問一句，再看一次。探索的目的不是抵達某個終點，而是讓每一次遇見，都成為下一次出發的理由。</p>
      <p>字標裡的小寫 <span className="font-display">i</span>，把這份相信留在最小的地方。其餘字母站得挺直，唯獨 i 保持謙遜。FLiPER 永遠如此拼寫，因為我們不想忘記：所有翻轉世界的故事，都從一個渺小的自己開始。</p>
      <p className="text-muted-foreground">於是，視覺也選擇退一步。墨色讓字被讀見，紙白讓作品呼吸，◆ 為故事留下停頓。一抹黎明，只在編輯室向讀者說話時亮起。設計不是替故事加上音量，而是替它找到合適的聲音。</p>
    </div>
  </DocPage>;
}
