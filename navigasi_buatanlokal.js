// Proyek sederhana Selenium WebDriver: mengakses dan menavigasi halaman utama buatanlokal.id
const { Builder, By, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const fs = require('fs');

(async function main() {
  const options = new edge.Options();
  options.addArguments('--window-size=1366,900');

  const driver = await new Builder()
    .forBrowser('MicrosoftEdge')
    .setEdgeOptions(options)
    .build();

  try {
    // 1. Mengakses halaman utama
    await driver.get('https://buatanlokal.id/');
    await driver.wait(until.elementLocated(By.linkText('Etalase')), 15000);
    console.log('[1] URL   :', await driver.getCurrentUrl());
    console.log('[1] Judul :', await driver.getTitle());
    fs.writeFileSync('ss_01_beranda.png', await driver.takeScreenshot(), 'base64');

    // 2. Membaca menu navigasi utama
    const menu = await driver.findElements(By.css('nav a[href]'));
    console.log('[2] Menu navigasi:');
    for (const a of menu.slice(0, 11)) {
      const teks = (await a.getText()).trim();
      if (teks) console.log('    -', teks.padEnd(14), await a.getAttribute('href'));
    }

    // 3. Menavigasi: klik menu Etalase, mundur, maju, muat ulang
    await driver.findElement(By.linkText('Etalase')).click();
    await driver.wait(until.urlContains('/products'), 15000);
    await driver.sleep(3000);
    console.log('[3] Setelah klik Etalase :', await driver.getCurrentUrl());
    fs.writeFileSync('ss_02_etalase.png', await driver.takeScreenshot(), 'base64');

    await driver.navigate().back();
    console.log('[3] Setelah back         :', await driver.getCurrentUrl());
    await driver.navigate().forward();
    console.log('[3] Setelah forward      :', await driver.getCurrentUrl());
    await driver.navigate().refresh();
    console.log('[3] Judul setelah refresh:', await driver.getTitle());
  } finally {
    await driver.quit();
  }
})();
