import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:4173/community/links');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'links_page_fixed.png', fullPage: true });
  console.log('Saved links_page_fixed.png');

  await page.goto('http://localhost:4173/interviews/');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'interviews_page.png', fullPage: true });
  console.log('Saved interviews_page.png');

  await page.goto('http://localhost:4173/non-existent-page');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '404_page.png', fullPage: true });
  console.log('Saved 404_page.png');

  await browser.close();
})();
