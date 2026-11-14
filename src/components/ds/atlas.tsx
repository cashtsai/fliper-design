import type { ReactNode } from 'react';
import { Copyable, Section, Rule } from './doc';

export function SpecTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="overflow-x-auto border-y"><table className="w-full text-left text-sm">
    <thead><tr>{headers.map(h => <th key={h} className="kicker px-3 py-3 text-muted-foreground">{h}</th>)}</tr></thead>
    <tbody>{rows.map((row, i) => <tr key={i} className="border-t">{row.map((cell, j) => <td key={j} className="px-3 py-4 align-top leading-relaxed">{cell}</td>)}</tr>)}</tbody>
  </table></div>;
}
export function ComponentGuide({ usage, states, good, bad, token }: {
  usage: string; states: [string, string, string, string]; good: string; bad: string; token: string;
}) {
  return <>
    <Section label="WHEN TO USE" title="何時使用"><p className="leading-[1.9]">{usage}</p><Copyable value={token} /></Section>
    <Section label="BEHAVIOR" title="狀態與互動">
      <SpecTable headers={['狀態', '行為 / 呈現']} rows={['預設 Default', '滑過 Hover', '焦點 Focus', '停用 Disabled'].map((s, i) => [s, states[i]])} />
    </Section>
    <Section label="GUARDRAILS" title="使用邊界"><Rule do={good} dont={bad} /></Section>
  </>;
}
