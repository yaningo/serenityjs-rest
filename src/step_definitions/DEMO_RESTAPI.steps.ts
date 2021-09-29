import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { and, Ensure, equals, matches } from '@serenity-js/assertions';
import { Actor, Log, Property, Question, TakeNote}  from '@serenity-js/core';
import { LastResponse, PostRequest, PutRequest, Send } from '@serenity-js/rest';

import { ToPerform } from '../task/ToPerform';
import { Note, q } from '@serenity-js/core/lib/screenplay/questions'
import MessageDto from '../dto/MessageDto';
const uuid = require("uuid")


Given('{actor} is at the base url', (actor: Actor) =>
actor.attemptsTo(
    Log.the("base url"),
))

When('{pronoun} wants to create a new message with author {string} and message {string}', (actor: Actor, author: string, message: string) =>
    actor.attemptsTo(
        
        TakeNote.of(
            Question.about<string>(`Author`, actor => {
              return author; // Actual value
            })
          ).as('Author'),
        Send.a(PostRequest.to('/taqelah/messages/').with({ author: author, message: message })),
    ));

Then('{pronoun} is able to create the new message author {string} and message {string}', 
    async (actor: Actor, author: string, message: string) => {
    const iAuthor = await Note.of('Author').answeredBy(actor);
    await actor.attemptsTo(
    Log.the('AUTHOR: ' + iAuthor),
  
    Ensure.that(LastResponse.status(), equals(201)),
    
    Ensure.that(
        Property.of(LastResponse.body<MessageDto>()).author.answeredBy(actor), equals(author)
    ),

    Ensure.that(
        Property.of(LastResponse.body<MessageDto>()).author.answeredBy(actor), matches(/[a-z]*/)
    ),

    Ensure.that(
         Property.of(LastResponse.body<MessageDto>()).message.answeredBy(actor), equals(message)
    )
        
)});


When('{pronoun} want to get a single message', (actor: Actor) => 
actor.attemptsTo(
    ToPerform.getSingleMessage(),
    Log.the(LastResponse.body()),
));


Then('{pronoun} is able to get a single message', (actor: Actor) =>
actor.attemptsTo(
    Ensure.that(LastResponse.status(), equals(200)),
));

When('{pronoun} view all messages', (actor: Actor) => 
actor.attemptsTo(
   ToPerform.viewAllMessage(),
    Log.the(LastResponse.body()),
));

Then('{pronoun} is able to view all the messages', (actor: Actor) =>
actor.attemptsTo(
    Ensure.that(LastResponse.status(), equals(200)),
));


When('{pronoun} update a message with author {string} and {string}', (actor: Actor, author: string, message: string) =>
    actor.attemptsTo(
        ToPerform.updateMessage(author, message),
    ));


Then('{pronoun} see the message get updated', (actor: Actor) =>
actor.attemptsTo(
    Ensure.that(LastResponse.status(), equals(200)),
));

   
When('{pronoun} delete a message {string}', (actor: Actor, message: string) =>
    actor.attemptsTo(
        ToPerform.deleteMessage(message),
       // Send.a(DeleteRequest.to('/taqelah/messages/' + message)),
    ));

Then('{pronoun} is able to delete the message', (actor: Actor) =>
    actor.attemptsTo(
        Ensure.that(LastResponse.status(), equals(200)),
    ));
  