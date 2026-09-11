const { chromium } = require('playwright');
const http = require('http');
const path = require('path');
const fs = require('fs');

const distDir = path.join(__dirname, '../dist');

function serveStatic(req, res) {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl.endsWith('/')) reqUrl += 'index.html';
  let filePath = path.join(distDir, reqUrl);

  if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath += '.html';
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    const contentType = ext === '.html' ? 'text/html' :
                        ext === '.js' ? 'application/javascript' :
                        ext === '.css' ? 'text/css' : 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}

async function run() {
  const server = http.createServer(serveStatic);
  await new Promise(resolve => server.listen(8085, resolve));
  console.log('Test server listening on port 8085');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  console.log('Navigating to /play/tutorial/1...');
  await page.goto('http://localhost:8085/play/tutorial/1');
  await page.waitForLoadState('networkidle');

  await page.screenshot({ path: '/home/jules/verification/tutorial_step_1.png', fullPage: true });

  console.log('Submitting enter on prompt to advance to step 2...');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);

  await page.screenshot({ path: '/home/jules/verification/tutorial_step_2.png', fullPage: true });

  console.log('Clicking on step 1 tick button...');
  const ticks = await page.$$('.tut-tick.clickable');
  if (ticks.length > 0) {
    await ticks[0].click();
    await page.waitForTimeout(500);
  }

  await page.screenshot({ path: '/home/jules/verification/tutorial_step_1_back.png', fullPage: true });

  await browser.close();
  server.close();
  console.log('Verification finished successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
