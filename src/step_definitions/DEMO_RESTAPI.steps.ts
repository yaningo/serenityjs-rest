import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Ensure, equals, property } from '@serenity-js/assertions';
import { Actor, Log } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

Given('{actor} is at the base url', (actor: Actor) =>
    actor.attemptsTo(
        Log.the('base url'),
    ));
    
When('{pronoun} wants to create a new message with author {string} and message {string}', (actor: Actor, author: string, message: string) =>
    actor.attemptsTo(
        Log.the('when steps'),
    ));

Then('{pronoun} is able to create the new message', (actor: Actor) =>
actor.attemptsTo(
    Log.the('then steps'),
));

