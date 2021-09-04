import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Ensure, equals, property } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, Log } from '@serenity-js/core';
import { CallAnApi, LastResponse, PostRequest, Send } from '@serenity-js/rest';

Given('{actor} is at the base url', (actor: Actor) =>
//actor.whoCan(
  //  CallAnApi.at('http://localhost:8080/webapp'),
    actor.attemptsTo(
        Log.the('base url'),
     ));


When('{pronoun} wants to create a new message with author {string} and message {string}', (actor: Actor, author: string, message: string) =>
    actor.attemptsTo(
        Send.a(PostRequest.to('/taqelah/messages/').with({ author: author, message: message })),
        Log.the(LastResponse.body()),
       // Ensure.that(LastResponse.status(), equals(201)),
    ));

Then('{pronoun} is able to create the new message', (actor: Actor) =>
actor.attemptsTo(
    Ensure.that(LastResponse.status(), equals(201)),
));

