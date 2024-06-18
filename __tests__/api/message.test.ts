import {
  CodyClient,
  SendMessageCommand,
  SendMessageCommandInput, SendMessageCommandOutput
} from "@renfraser/cody-client";
import {codyConfig} from "../../config";

describe('Endpoint 1 Tests', () => {
  it('should return valid response', async () => {


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
      expect(data.messages[0].text).toBe(messageText);
  });
});
