import { Task } from "@serenity-js/core";
import { DeleteRequest, Send } from "@serenity-js/rest";

export const ToPerform = {
    deleteMessage: (message: string) =>
    Task.where(`#actor delete message ${ message }`,
        Send.a(DeleteRequest.to('/taqelah/messages/' + message)),
    ),
}