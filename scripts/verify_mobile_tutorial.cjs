const { chromium } = require('playwright');
const path = require('path');
const { spawn, execSync } = require('child_process');

async function main() {
  try {
    execSync('fuser -k 4180/tcp || true');
  } catch (e) {}

  console.log('Starting VitePress preview server on port 4180...');
  const preview = spawn('npx', ['vitepress', 'preview', 'docs', '--port', '4180'], { stdio: 'inherit' });

  // Wait 3s for server startup
  await new Promise((r) => setTimeout(r, 3000));

  const browser = await chromium.launch();

  // 1. Mobile Viewport (iPhone SE: 375x667)
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 667 },
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:4180/play/tutorial/1');
  await mobilePage.waitForSelector('.tut-frame');

  const mobileScreenshotPath = path.join(__dirname, '../tutorial_mobile_375.png');
  await mobilePage.screenshot({ path: mobileScreenshotPath });
  console.log('Mobile screenshot saved to', mobileScreenshotPath);

  // 2. Desktop Viewport (1280x800)
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('http://localhost:4180/play/tutorial/1');
  await desktopPage.waitForSelector('.tut-frame');

  const desktopScreenshotPath = path.join(__dirname, '../tutorial_desktop_1280.png');
  await desktopPage.screenshot({ path: desktopScreenshotPath });
  console.log('Desktop screenshot saved to', desktopScreenshotPath);

  await browser.close();
  preview.kill();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
