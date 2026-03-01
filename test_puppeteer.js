const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:58106/about.html', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: 'local_about_page.png', fullPage: true });
        console.log('Screenshot saved as local_about_page.png');
        await browser.close();
    } catch (e) {
        console.error(e);
    }
})();
