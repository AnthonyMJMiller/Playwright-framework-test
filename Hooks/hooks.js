const {Before, After, AfterStep, AfterAll, BeforeAll} = require('@cucumber/cucumber')
const playwright = require('playwright')
const { chromium } = playwright
let browser
let context

Before(async function(){
    browser = await chromium.launch({headless:false})
    context = await browser.newContext()
    const page = await context.newPage()
    this.page = page
})

After(async function(){
    this.page.close()
    context.close()
    browser.close()
})