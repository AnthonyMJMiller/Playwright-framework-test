Feature: Automate API test

@demo
Scenario: Running POST call/Creating User
        Given I have access to endpoint
        When I execute endpoint api post call
        Then I should see a 200 response

@demo
Scenario: Searching Created User's Info
        Given I have access to endpoint
        When I execute search user api call
        Then I should see a ok response
        Then I verify the data in response body matches with expected results