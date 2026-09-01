
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const pages = [
    { url: 'http://localhost:3000/', name: 'home' },
    { url: 'http://localhost:3000/produto/vestido-midi-aurora', name: 'produto' },
    { url: 'http://localhost:3000/catalogo', name: 'catalogo' },
    { url: 'http://localhost:3000/carrinho', name: 'carrinho' },
  ];
  for (const vp of [{w:390,h:844,tag:'mobile'}, {w:1440,h:900,tag:'desktop'}]) {
    const context = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
    const page = await context.newPage();
    for (const p of pages) {
      await page.goto(p.url, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `qa-${p.name}-${vp.tag}.png`, fullPage: true });
    }
    await context.close();
  }
  await browser.close();
})();
