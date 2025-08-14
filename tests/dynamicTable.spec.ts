import {test , expect} from "@playwright/test"

test.describe.only('Dyanic Tables', () => {

        // test.beforeAll(async () => {
        //     await page.goto('https://practice.expandtesting.com/')
        //     await page.click('text=Dynamic Table')
        // })

        test('check heading of the table is correct', async({page}) => {

            await page.goto('https://practice.expandtesting.com/dynamic-table')
            //await page.click('text=Dynamic Table')
            
            const heading = await page.locator('h1').textContent()
            expect(heading).toBe('Dynamic Table page for Automation Testing Practice')
             
            //find actual table heading and verify it with Array of expected headings   //thead/tr/th
            const expectedHeading = ["Name","CPU","Network","Memory","Disk"]

            const tableHeading = await page.locator('//thead/tr/th').allTextContents()      //returns an array of text contents
            //await expect(tableHeading).toContain(expectedHeading)                         //this will not work bcz table is dynamic and heading is changing everytime

            for(const heading of expectedHeading) {
                await expect(tableHeading).toContain(heading)
            }
           
            //await console.log(tableHeading)
        })

        test.only('get Chrome Browser details from dyanamic table', async({page}) => {

            await page.goto('https://practice.expandtesting.com/dynamic-table')

            const tableHeading = await page.locator('//tbody/tr/td[1]').allTextContents()
            for(const heading of tableHeading) {

                if(heading === 'Chrome'){
                
                    const row = await page.locator(`tbody tr:nth-child(${tableHeading.indexOf(heading) +1 }) td:nth-child(1)`)
                    await console.log(`Chrome Browser details: ${await row.textContent()} index: ${tableHeading.indexOf(heading) + 1}`) ////tbody/tr[3]/td
                
                    const rowDetails = await page.locator(`//tbody/tr[${tableHeading.indexOf(heading) + 1}]/td`).allTextContents()
                    console.log(`Row Details: ${rowDetails}`) // This will log all details of the Chrome row
                
                }
               // await console.log(`Heading: ${heading}`)
            }

        })


})