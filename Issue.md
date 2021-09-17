# Serenity/JS Cucumber API Testing

Issue:
```
When he wants to create a new message with author J.R.R. Tolkien and message The Lord of the Rings
[test:execute]     ☕ImplementationPendingError: Step implementation missing:
[test:execute] 
[test:execute]     When('{pronoun} wants to create a new message with author J.R.R. {actor} and message {actor} {actor} of the {actor}', function (pronoun, actor, actor2, actor3, actor4) {
[test:execute]       // Write code here that turns the phrase above into concrete actions
[test:execute]       return 'pending';
[test:execute]     });
[test:execute]   ⇢ Then he is able to create the new message
[test:execute] 
[test:execute] ☕Implementation pending (56ms)
[test:execute] 
[test:execute]   ImplementationPendingError: Step implementation missing:
[test:execute] 
[test:execute]   When('{pronoun} wants to create a new message with author J.R.R. {actor} and message {actor} {actor} of the {actor}', function (pronoun, actor, actor2, actor3, actor4) {
[test:execute]     // Write code here that turns the phrase above into concrete actions
[test:execute]     return 'pending';
[test:execute]   });
[test:execute] ================================================================================
[test:execute] Execution Summary
[test:execute] 
[test:execute] DEMO_RESTAPI: 1 pending, 1 total (56ms)
[test:execute] 
[test:execute] Total time: 56ms
[test:execute] Scenarios:  1
[test:execute] ===========================================================================
```

Fix:
```
  Examples:
      | author | message | 
      | "J.R.R. Tolkien" | "The Lord of the Rings" | 

```

Note
```
https://cucumber.io/docs/cucumber/cucumber-expressions/#parameter-types
```

Issue #2
```
test:execute]     ✗ James ensures that a Promise does equal 'Curry Blake' (1ms)
[test:execute] 
[test:execute]       Difference (+ expected, - actual):
[test:execute] 
[test:execute]       - a Promise
[test:execute]       + 'Curry Blake'
[test:execute] 
```

try with 
 Log.the(Property.of(LastResponse.body<MessageDto>()).author.answeredBy(actor)),
 get back:
 ```
 ✓ James logs: a Promise (0ms)
[test:execute]       a Promise:
[test:execute]       'Curry Blake'
```

How to share state between steps?
Using TakeNotes

 ConfigurationError: James can't TakeNotes yet. Did you give them the ability to do so?

  
  Fix: 
  TakeNotes.usingAnEmptyNotepad()

The usingAnEmptyNotepad is a function!

Note.of to retrieve the data "author" does not work
```
Log.the(Note.of('author')),
Log.the(Note.of(q`$(author)`)), 
```  
both does not work

