const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({executablePath: './chromium/chrome.exe'});
  const page = await browser.newPage()
/*   await page.setViewport({
    width: 1440,
    height: 900
  }) */
  await page.goto("http://localhost:8000/", {waitUntil: 'networkidle2'})
  await page.pdf({
    path: './static/yim.pdf',
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    margin: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  })
  console.log('PDF生成在 ./src/pdf 中了')
  browser.close()
})();
