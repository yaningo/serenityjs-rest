Feature: DEMO_RESTAPI


  Background:
    Given James is at the base url

    @test
  Scenario Outline: create a new message 
    In order to create a new message using POST
    As a API developer James
    James wants to create a new message
    When he wants to create a new message with author <author> and message <message>
    Then he is able to create the new message
    Examples:
      | author | message | 
      | J.R.R. Tolkien | The Lord of the Rings | 

    
  