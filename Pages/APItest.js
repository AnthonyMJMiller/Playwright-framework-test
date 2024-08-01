const { request, expect, APIRequest, APIResponse } = require('@playwright/test');
require('dotenv').config()

var BASE_URI = process.env.NEW_USER_SOURCE

module.exports.APItest = class APItest {
    async executeTestApi() {
        this.response = await (await request.newContext({ baseURL: process.env.REST_API_BASE_URL })).post(BASE_URI, {
            headers: {'Accept': '*/*', 'Authorization': 'Bearer '+ process.env.USER_TOKEN }, data: {
                name: 'REPO',
                email: 'zK35IL@edge.net',
                gender: 'male',
                status: 'active'

            }
        })
    }

    async verifyResponse() {
        const jsonResponse = JSON.parse(await this.response.text())
        console.log(jsonResponse)
        expect(this.response.ok()).toBeTruthy()
        
    
    }

}
