import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Ensure, equals, property } from '@serenity-js/assertions';
import { Actor, Log, Property } from '@serenity-js/core';
import { GetRequest, LastResponse, PostRequest, Send } from '@serenity-js/rest';
import MessageDto from '../dto/messageDto';


Given('{actor} is at the base url', (actor: Actor) =>
//actor.whoCan(
  //  CallAnApi.at('http://localhost:8080/webapp'),
    actor.attemptsTo(
        Log.the('base url'),
     ));


When('{pronoun} wants to create a new message with author {string} and message {string}', (actor: Actor, author: string, message: string) =>
    actor.attemptsTo(
        Send.a(PostRequest.to('/taqelah/messages/').with({ author: author, message: message })),
       // Log.the(LastResponse.body()),
    ));

Then('{pronoun} is able to create the new message author {string} and message {string}', (actor: Actor, author: string, message: string) =>
actor.attemptsTo(
    Ensure.that(LastResponse.status(), equals(201)),
    Ensure.that(
        Property.of(LastResponse.body<MessageDto>()).author,
        equals(author),
    ),
    Ensure.that(
        Property.of(LastResponse.body<MessageDto>()).message,
        equals(message),
    )
));


// When('{actor} want to get a single message', (actor: Actor) => 
// actor.attemptsTo(
//     Send.a(GetRequest.to('/taqelah/messages/2')),
//     Log.the(LastResponse.body()),
// ));


// Then('{pronoun} is able to get a single message', (actor: Actor) =>
// actor.attemptsTo(
//     Ensure.that(LastResponse.status(), equals(200)),
// ));