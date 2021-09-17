import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { and, Ensure, equals, matches } from '@serenity-js/assertions';
import { Actor, Log, Property, TakeNote}  from '@serenity-js/core';
import { LastResponse, PostRequest, PutRequest, Send } from '@serenity-js/rest';
import MessageDto from '../dto/messageDto';
import { ToPerform } from '../task/ToPerform';
import { Note, q } from '@serenity-js/core/lib/screenplay/questions'


Given('{actor} is at the base url', (actor: Actor) =>
actor.attemptsTo(
    Log.the("base url"),
))

When('{pronoun} wants to create a new message with author {string} and message {string}', (actor: Actor, author: string, message: string) =>
    actor.attemptsTo(
        
        TakeNote.of(q`$(author)`).as('author'),
        TakeNote.of(q`$(message)`).as('message'),
        Send.a(PostRequest.to('/taqelah/messages/').with({ author: author, message: message })),
        Log.the(LastResponse.body()),
    ));

Then('{pronoun} is able to create the new message author {string} and message {string}', 
    async (actor: Actor, author: string, message: string) =>
   
actor.attemptsTo(
    Log.the(Note.of('author')),
    Log.the(Note.of(q`$(author)`)),
    Ensure.that(LastResponse.status(), equals(201)),
    Log.the(await Property.of(LastResponse.body<MessageDto>()).author.answeredBy(actor)),
   
    Ensure.that(
        await Property.of(LastResponse.body<MessageDto>()).author.answeredBy(actor), equals(author)
    ),

    Ensure.that(
        await Property.of(LastResponse.body<MessageDto>()).author.answeredBy(actor), matches(/[a-z]*/)
    ),

    Ensure.that(
        await Property.of(LastResponse.body<MessageDto>()).message.answeredBy(actor), equals(message)
    )
        
));


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
       // Send.a(PutRequest.to('/taqelah/messages/2').with({ author: author, message: message })),
     //   Log.the(LastResponse.body()),
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
  