const { request, expect, APIRequest, APIResponse } = require('@playwright/test');
const { apiTestData } = require('../constants/Constants.json')
require('dotenv').config()

var BASE_URI = process.env.NEW_USER_SOURCE


module.exports.NewUserAPItest = class NewUserAPItest {
    async executeUserSearchTestApi() {
        console.log(apiTestData.UserID)
        this.response = await (await request.newContext({ baseURL: process.env.REST_API_BASE_URL })).get(BASE_URI+'/'+apiTestData.UserID, {
            headers: {'Accept': '*/*', 'Authorization': 'Bearer '+ process.env.USER_TOKEN }
        })
    }

    async verifyOkStatus(){
        const jsonResponse = JSON.parse(await this.response.text())
        console.log(jsonResponse)
        expect(this.response.ok()).toBeTruthy()

    }

    async verifyUserInfo() {
        const jsonResponse = JSON.parse(await this.response.text())
        console.log(jsonResponse)
        expect(jsonResponse.id).toEqual(apiTestData.UserID)
        expect(jsonResponse.name).toEqual(apiTestData.name)
        expect(jsonResponse.email).toEqual(apiTestData.email)
        expect(jsonResponse.gender).toEqual(apiTestData.gender)
        expect(jsonResponse.status).toEqual(apiTestData.status)
    
    }

}
