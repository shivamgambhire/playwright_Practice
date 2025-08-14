import {test, expect} from "@playwright/test"

test.describe("online Shopping", () => {

    test("login to portal", async({page}) => {

        await page.goto("https://www.saucedemo.com/")
        await page.fill("#user-name", "standard_user")
        await page.fill("#password", "secret_sauce")

        await page.click("#login-button")
  
        await expect(page.locator(".app_logo")).toContainText("Swag Labs")

        await page.click("#add-to-cart-sauce-labs-backpack")                               //click on Add to Cart button

        await expect(page.locator(".shopping_cart_badge")).toContainText("1")               // verify item added to cart

        await page.click(".shopping_cart_link")                                             //click on Cart button

        await console.log(await page.locator(".inventory_item_price").textContent())        // print price of product

        await page.click("#checkout")                                                        //click on Checkout button

        await console.log(await page.locator(".title").textContent())                             // print Checkout: Your Information text

        await page.fill("#first-name", "John")                                               //fill First Name
        await page.fill("#last-name", "Doe")                                                //fill Last Name
        await page.fill("#postal-code", "12345")                                          //fill Zip/Postal Code

        await page.click("#continue")                                                      //click on Continue button

        await console.log(await page.locator(".summary_subtotal_label").textContent()) // get subtotal label text
        await console.log(await page.locator(".summary_tax_label").textContent()) // get Tax label text
        await console.log(await page.locator(".summary_total_label").textContent()) // get Total label text

        await page.click("#finish")                                                        //click on Finish button

        await expect(await page.locator("h2")).toHaveText("Thank you for your order!")
        await console.log(await page.locator(".complete-text").textContent())

        await page.click("#back-to-products")

    })
})