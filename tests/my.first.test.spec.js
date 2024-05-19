const{test,expect} = require('@playwright/test')

test('My First test',async({page})=>{

    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('google')
})