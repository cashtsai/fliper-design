import { describe, expect, it } from 'vitest';
import { palette, contrast, heritage, typeScale } from '@/lib/atlas';

describe('FLiPER atlas numeric rules', () => {
  it('uses the requested light and dark dawn colors only for the current accent', () => {
    const accent = palette.find(p => p.name === 'accent');
    expect(accent?.light).toBe('#A94700'); expect(accent?.dark).toBe('#E59B5B');
  });
  it('meets AA for dawn orange against the specified paper', () => {
    expect(contrast('#A94700', '#FAF8F3')).toBeGreaterThanOrEqual(4.5);
    expect(contrast('#A94700', '#FAF8F3')).toBeCloseTo(5.51, 2);
  });
  it('keeps historical purple values exact', () => {
    expect([heritage.primary, heritage.active, heritage.hover]).toEqual(['#39308E', '#463FBB', '#27206B']);
  });
  it('retires yellow without introducing it into the current palette', () => {
    expect(heritage.yellow).toBe('#FFC612'); expect(heritage.status).toBe('retired');
    expect(palette.some(p => (p.light as string) === '#FFC612' || (p.dark as string) === '#FFC612')).toBe(false);
  });
  it('keeps historical purple outside the current palette', () => {
    expect(palette.some(p => (p.light as string) === '#39308E' || (p.dark as string) === '#39308E')).toBe(false);
  });
  it('defines every requested type scale role', () => {
    expect(typeScale.map(t => t[0])).toEqual(['display','title','heading','body','caption','label']);
  });
});
