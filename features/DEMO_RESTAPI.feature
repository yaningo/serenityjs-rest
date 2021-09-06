Feature: DEMO_RESTAPI


  Background:
    Given James is at the base url

  Rule: create new message
    @test
  Scenario Outline: create a new message 
    In order to create a new message using POST
    As a API developer James
    James wants to create a new message
    When he wants to create a new message with author <author> and message <message>
    Then he is able to create the new message author <author> and message <message>
    Examples:
      | author | message | 
      | "Curry Blake" | "Speaking in tongue" | 
     
  
  @test1
  Scenario: get a single message (uid 4a386f39-a333-4b30-81da-ae1be974db69)
    In order to get a single message
    As a API developer James
    James wants to get a single message
    When James want to get a single message
    Then he is able to get a single message