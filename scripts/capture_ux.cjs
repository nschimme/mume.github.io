const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

async function main() {
  const server = spawn('npx', ['vitepress', 'preview', 'docs', '--port', '4174'], {
    stdio: 'inherit',
    detached: false
  });

  await new Promise(resolve => setTimeout(resolve, 3000));

  const browser = await chromium.launch({ headless: true });

  const routes = [
    { path: '', name: 'home' },
    { path: 'play/', name: 'play' },
    { path: 'resources/newcomers', name: 'newcomers' }
  ];

  const viewports = [
    { name: 'desktop', width: 1280, height: 960 },
    { name: 'mobile', width: 375, height: 812, isMobile: true }
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile || false
    });
    const page = await context.newPage();

    for (const r of routes) {
      const url = `http://localhost:4174/${r.path}`;
      console.log(`Navigating to ${url} (${vp.name})`);
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `${r.name}_${vp.name}.png`, fullPage: true });
    }
    await context.close();
  }

  await browser.close();
  server.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
