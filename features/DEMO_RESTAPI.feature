Feature: DEMO_RESTAPI
  In order to perform CRUD on message 
    As a API developer James
    James wants to create, update, get, delete a new message

  Background:
    Given James is at the base url

  Rule: create new message
  
  @test
  Scenario Outline: create a new message 
    When he wants to create a new message with author <author> and message <message>
    Then he is able to create the new message author <author> and message <message>
    Examples:
      | author | message | 
      | "Curry Blake" | "Speaking in tongue" | 
     

  Scenario: get a single message 
    In order to get a single message
    As a API developer James
    James wants to get a single message
    When he want to get a single message
    Then he is able to get a single message



  Scenario: get all messages 
    In order to view all messages 
    As a API developer James
    James wants to get all messages to be displayed
    When he view all messages
    Then he is able to view all the messages


 Scenario Outline: update a message 
    In order to update a message
    As a API developer James
    James wants to update a message
    When he update a message with author <author> and <message>
    Then he see the message get updated

    Examples:
      | author                |    message       | 
      | "john smart ferguson" |  "BDD in Action" |  


  Scenario Outline: delete a message 
    In order to delete a message
    As a API developer James
    James wants to able to delete a message
    When he delete a message <message>
    Then he is able to delete the message

    Examples:
      | message | 
      | "1" | 

