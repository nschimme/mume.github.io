import { test, expect } from '@playwright/test';

const pages = [
  { name: 'home', url: '/' },
  { name: 'community', url: '/community/' },
  { name: 'play', url: '/play' },
  { name: 'resources', url: '/resources/' },
  { name: 'about', url: '/about/' },
  { name: 'news', url: '/news/' },
];

for (const pageInfo of pages) {
  test(`screenshot ${pageInfo.name}`, async ({ page }) => {
    await page.goto(`http://localhost:5173${pageInfo.url}`);
    // Wait for content to load
    await page.waitForLoadState('networkidle');
    // Take full page screenshot
    await page.screenshot({ path: `screenshots/${pageInfo.name}-full.png`, fullPage: true });
  });
}
