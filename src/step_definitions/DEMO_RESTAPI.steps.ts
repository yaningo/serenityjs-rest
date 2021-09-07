import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { and, Ensure, equals } from '@serenity-js/assertions';
import { Actor, List, Log, Property } from '@serenity-js/core';
import { CallAnApi, DeleteRequest, GetRequest, LastResponse, PostRequest, PutRequest, Send } from '@serenity-js/rest';
import MessageDto from '../dto/messageDto';


Given('{actor} is at the base url', (actor: Actor) =>
actor.whoCan(
    CallAnApi.at('http://localhost:8080/webapp'),
    // actor.attemptsTo(
    //     Log.the('base url'),
      ));


When('{pronoun} wants to create a new message with author {string} and message {string}', (actor: Actor, author: string, message: string) =>
    actor.attemptsTo(
        Send.a(PostRequest.to('/taqelah/messages/').with({ author: author, message: message })),
        Log.the(LastResponse.body()),
    ));

Then('{pronoun} is able to create the new message author {string} and message {string}', (actor: Actor, author: string, message: string) =>
actor.attemptsTo(
    Ensure.that(LastResponse.status(), equals(201)),
    Log.the(author),
    Ensure.that(
        Property.of(LastResponse.body<MessageDto>()).author, equals(author)
    )
));


When('{pronoun} want to get a single message', (actor: Actor) => 
actor.attemptsTo(
    Send.a(GetRequest.to('/taqelah/messages/2')),
    Log.the(LastResponse.body()),
));


Then('{pronoun} is able to get a single message', (actor: Actor) =>
actor.attemptsTo(
    Ensure.that(LastResponse.status(), equals(200)),
));

When('{pronoun} view all messages', (actor: Actor) => 
actor.attemptsTo(
    Send.a(GetRequest.to('/taqelah/messages')),
    Log.the(LastResponse.body()),
));

Then('{pronoun} is able to view all the messages', (actor: Actor) =>
actor.attemptsTo(
    Ensure.that(LastResponse.status(), equals(200)),
));


When('{pronoun} update a message with author {string} and {string}', (actor: Actor, author: string, message: string) =>
    actor.attemptsTo(
        Send.a(PutRequest.to('/taqelah/messages/2').with({ author: author, message: message })),
        Log.the(LastResponse.body()),
    ));


Then('{pronoun} see the message get updated', (actor: Actor) =>
actor.attemptsTo(
    Ensure.that(LastResponse.status(), equals(200)),
));

   
When('{pronoun} delete a message {string}', (actor: Actor, message: string) =>
    actor.attemptsTo(
        Send.a(DeleteRequest.to('/taqelah/messages/' + message)),
        Log.the(LastResponse.body()),
    ));

Then('{pronoun} is able to delete the message', (actor: Actor) =>
    actor.attemptsTo(
        Ensure.that(LastResponse.status(), equals(200)),
    ));
    