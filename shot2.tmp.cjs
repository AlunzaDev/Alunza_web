const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const outDir = process.argv[2];
  const url = 'http://localhost:5183';

  const views = [
    { name: 'big-1920', width: 1920, height: 1080, scroll: 0.92 },
    { name: 'big-2560', width: 2560, height: 1440, scroll: 0.92 },
    { name: 'laptop-1440', width: 1440, height: 900, scroll: 0.92 },
  ];

  for (const v of views) {
    const page = await browser.newPage({ viewport: { width: v.width, height: v.height } });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate((frac) => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo(0, max * frac);
    }, v.scroll);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${outDir}/${v.name}.png` });
    await page.close();
  }

  await browser.close();
  console.log('done');
})();
