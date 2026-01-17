import {test, expect} from "@playwright/test"

test("basic test", async ({page})=> {

    await page.goto("https://playwright.dev/")
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
})

test("check heading text", async ({ page }) => {

    //3A principles of testing: Arrange, Act, Assert

    //arrange
    await page.goto('https://playwright.dev/');
   
    //act
    await page.getByRole('link', { name: 'Docs' }).click();

    //assert
    const heading = await page.getByRole('heading', { name: 'Installation' })
    await expect(heading).toHaveText("Installation")

})