import { createFileRoute } from "@tanstack/react-router";
import { DocPage, Section } from "@/components/ds/doc";
import { FullCover } from "@/components/ds/editorial";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cover-system")({
  head: () => seo("The Cover System 封面即設計系統", "FED 每日封面拆解:宋體標題、細線、菱形、署名、分類標與六位數期號——App 與網站的源頭。"),
  component: CoverPage,
});

const parts = [
  ["01", "Masthead", "置中字標 + 細線 + kicker"],
  ["02", "Cover Image", "全幅照片,不加濾鏡或文字疊圖"],
  ["03", "Category Kicker", "等寬大寫分類標"],
  ["04", "Serif Title", "Noto Serif TC 粗體,置中"],
  ["05", "Diamond ◆", "細線夾菱形,標題與署名之間"],
  ["06", "Byline", "name ｜ column"],
  ["07", "Edition Mark", "六位數期號,收尾"],
];

function CoverPage() {
  return (
    <DocPage kicker="THE COVER SYSTEM" title="封面,就是設計系統" intro={<p>FLiPER Editorial Daily(FED)的每日封面,是 App 與網站一切畫面的源頭。理解封面,就理解了整個系統。</p>}>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <FullCover />
        <ol className="divide-y border-y">
          {parts.map(([n, t, d]) => (
            <li key={n} className="py-3"><span className="kicker text-dawn">{n}</span><p className="font-display font-semibold text-ink">{t}</p><p className="text-sm text-muted-foreground">{d}</p></li>
          ))}
        </ol>
      </div>
      <Section label="DERIVATION" title="如何從封面推導" why="一致性不是規則堆出來的,是從同一個原型長出來的。">
        <p className="leading-[1.9]">列表中的 Cover Card 是縮小的封面;文章頁頂部是展開的封面;編者按是封面背面的那句話。任何新畫面,先問:「如果這是一張封面,它會長什麼樣子?」</p>
      </Section>
    </DocPage>
  );
}
