const { Given, When, Then, context } = require('@cucumber/cucumber');
const { defineConfig } = require('@playwright/test');
const { request, expect, APIRequest, APIResponse } = require('@playwright/test') ;
const { APItest } =require("../Pages/apitest.js");
const { NewUserAPItest } =require("../Pages/NewUserAPItest.js");
require('dotenv').config()


let apiTest = new APItest()
let userApiTest = new NewUserAPItest()

Given('I have access to endpoint', async function() {
  endpoint = process.env.REST_API_BASE_URL
})
When('I execute endpoint api post call', async function () {  

await apiTest.executeTestApi()

})


  Then('I should see a 200 response', async function () {   
  
    await apiTest.verifyResponse();
  })
  
  When('I execute search user api call', async function(){
    await userApiTest.executeUserSearchTestApi();
  })

  Then('I should see a ok response', async function () {   
  
    await userApiTest.verifyOkStatus()
  })

  Then('I verify the data in response body matches with expected results', async function(){
    await userApiTest.verifyUserInfo();
  })