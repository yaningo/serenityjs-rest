import { Task } from "@serenity-js/core";
import { DeleteRequest, GetRequest, PostRequest, PutRequest, Send } from "@serenity-js/rest";

export const ToPerform = {

    createMessage: (author: string, message: string) => 
    //const firstName = author.split(" ")
        Task.where(`#actor create author ${author} message ${ message }`,
        Send.a(PostRequest.to('/taqelah/messages/').with({ author: author, message: message })),
    
    
    ),
    
    
    

    deleteMessage: (message: string) =>
    Task.where(`#actor delete message ${ message }`,
        Send.a(DeleteRequest.to('/taqelah/messages/' + message)),
    ),


    updateMessage: (author: string, message: string) =>
    Task.where(`#actor update message ${ author} ${message}`,
        Send.a(PutRequest.to('/taqelah/messages/2').with({ author: author, message: message })),
    ),

    getSingleMessage: () =>
    Task.where(`#actor get a single message`,
        Send.a(GetRequest.to('/taqelah/messages/2')),
    ),

    viewAllMessage: () =>
    Task.where(`#actor view all messages`,
    Send.a(GetRequest.to('/taqelah/messages')),
    ),
}