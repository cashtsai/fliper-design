/** Canonical values used by documentation and contrast checks. */
export const palette = [
  { name: 'ink', light: '#1A1A1A', dark: '#F2F0EB', role: '主要文字、標題' },
  { name: 'inkSoft', light: '#333333', dark: '#D4D1CC', role: '次要文字、內文' },
  { name: 'paper', light: '#FAF8F3', dark: '#161513', role: '頁面背景' },
  { name: 'paperDeep', light: '#EFEBE2', dark: '#26261F', role: '凹陷背景、區塊底' },
  { name: 'card', light: '#FFFFFF', dark: '#282826', role: '卡片與表面' },
  { name: 'muted', light: '#6E6A62', dark: '#A39E96', role: '說明、後設資訊' },
  { name: 'faint', light: '#B3AEA4', dark: '#676460', role: '裝飾與非必要記號，不用於可讀文字' },
  { name: 'border', light: 'rgba(0,0,0,.10)', dark: 'rgba(255,255,255,.14)', role: '細線、分隔' },
  { name: 'accent', light: '#A94700', dark: '#E59B5B', role: '連結、編者聲音、小標記' },
  { name: 'tan', light: '#B49A7C', dark: '#B49A7C', role: '既有中性細節，不作第二重點色' },
  { name: 'success', light: '#2BAB9F', dark: '#2BAB9F', role: '狀態圖形；搭配文字，不作文字色' },
] as const;
export const typeScale = [
  ['display', 48, 800, 1.1, 'Roboto Slab / Noto Serif TC', '品牌級大標'],
  ['title', 30, 700, 1.3, 'Noto Serif TC', '封面、文章標題'],
  ['heading', 24, 700, 1.35, 'Roboto Slab / Noto Serif TC', '章節標題'],
  ['body', 17, 400, 1.9, 'Noto Sans TC', '閱讀內文'],
  ['caption', 13, 400, 1.6, 'Noto Sans TC', '圖說、後設資訊'],
  ['label', 11, 500, 1.6, 'ui-monospace / Noto Sans TC', '分類、代幣標籤'],
] as const;
export const heritage = {
  primary: '#39308E', active: '#463FBB', hover: '#27206B',
  grays: ['#111111', '#444444', '#999999', '#DDDDDD', '#EEEEEE'],
  yellow: '#FFC612', status: 'retired',
} as const;
export const logoGuidance = { clearSpaceHeightRatio: .5, minWidthWeb: 80, minWidthPrint: 20 };
export function contrast(foreground: string, background: string) {
  const luminance = (hex: string) => {
    const channels = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map(c => c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4);
    return (channels[0] ?? 0) * .2126 + (channels[1] ?? 0) * .7152 + (channels[2] ?? 0) * .0722;
  };
  const a = luminance(foreground), b = luminance(background);
  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
}
