const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 960 }, deviceScaleFactor: 2 });

  const routes = [
    '/',
    '/about/',
    '/about/m7/',
    '/about/m8/',
    '/about/m9/',
    '/about/building/',
    '/news/',
    '/play/',
    '/resources/',
    '/community/',
    '/community/interviews/'
  ];

  const dir = path.join(__dirname, 'test-results', 'audit');
  fs.mkdirSync(dir, { recursive: true });

  for (const route of routes) {
    const slug = route === '/' ? 'home' : route.replace(/^\/|\/$/g, '').replace(/\//g, '_');
    await page.goto('http://localhost:5173' + route, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    const outPath = path.join(dir, `${slug}.png`);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Saved screenshot for ${route} -> ${outPath}`);
  }

  await browser.close();
})();
