import {test, expect} from "@playwright/test"

test.only('demo site test', async ({ page }) => {
  await page.goto('/');

await page.fill('#username', 'Shivam');
await page.check('#terms');


await page.locator('input[type="radio"][value="male"]').check();

await page.selectOption('#country', 'india');

await page.click('#submitBtn');

await page.click('#loadBtn');
await expect(page.locator('#dynamicText')).toBeVisible();

await page.click('#showHiddenBtn');
await expect(page.locator('#hiddenText')).toBeVisible();

await page.click('#openModal');
await expect(page.locator('.modal')).toBeVisible();

//await page.pause();

const shadow = page.locator('shadow-box').locator('button');
await shadow.click();




});
