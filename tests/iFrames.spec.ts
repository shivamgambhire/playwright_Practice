import {test, expect} from "@playwright/test"

test("iFrames", async({page}) => {

    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html")

    const framelocator = page.frameLocator("#frm2")

    await console.log(await framelocator.locator("#Header1_headerimg").textContent())

    await console.log(await framelocator.locator(".post-title.entry-title").textContent())

    await framelocator.locator("#selectnav1").selectOption("-- TestNG") 

    await expect(framelocator.locator(".post-title.entry-title")).toContainText("TestNG - English")

})