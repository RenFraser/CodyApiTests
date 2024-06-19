import {
    CodyClient,
    SendMessageCommand,
    SendMessageCommandInput,
    SendMessageCommandOutput
} from "@renfraser/cody-client";
import {codyConfig} from "../../config";

describe('SendMessage', () => {
    it('should return the expected status code response', async () => {

        const client = new CodyClient(codyConfig);

        const messageText = "Hi!"

        const params: SendMessageCommandInput = {
            model: "HAIKU",
            messages: [{
                text: messageText
            }]
        }
        const command = new SendMessageCommand(params);

        const data: SendMessageCommandOutput = await client.send(command);

        expect(data.$metadata.httpStatusCode).toBe(200);
    });

    it('should return the message history', async () => {

        const client = new CodyClient(codyConfig);

        const messageText = "Hi!"

        const params: SendMessageCommandInput = {
            model: "HAIKU",
            messages: [{
                text: messageText
            }]
        }
        const command = new SendMessageCommand(params);

        const data: SendMessageCommandOutput = await client.send(command);

        expect(data.messages[0].text).toBe(messageText);
    });
});
