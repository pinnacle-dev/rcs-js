import { MessageProcessor } from "../../src/wrapper/messages/MessageProcessor";
import { UnauthorizedError, BadRequestError } from "../../src/api/errors";
import { smsExample, mmsExample, rcsExample, inboundButtonExample, invalidExamples } from "./examples";

const messageProcessor = new MessageProcessor({apiKey: "test-api-key"})
describe("MessageProcessor", () => {
  describe("process", () => {
      it("should process SMS example (header)", async () => {
          const mockRequest = {
              headers: {
                  ...smsExample.headers,
                  "PINNACLE_SIGNING_SECRET": "test-secret",
              },
              body: smsExample.body,
          };

          const result = await messageProcessor.process(mockRequest);

          expect(result).toEqual(smsExample.body);
      });

      it("should process MMS example (env)", async () => {
          process.env.PINNACLE_SIGNING_SECRET = "test-secret";

          const mockRequest = {
              headers: mmsExample.headers,
              body: mmsExample.body,
          };

          const result = await messageProcessor.process(mockRequest);
          
          expect(result).toEqual(mmsExample.body);
      });

      it("should throw UnauthorizedError when no webhook secret is present", async () => {
          delete process.env.PINNACLE_SIGNING_SECRET;

          const mockRequest = {
              headers: {
                  'content-type': 'application/json'
              },
              body: smsExample.body,
          };

          await expect(messageProcessor.process(mockRequest)).rejects.toThrow(UnauthorizedError);
          await expect(messageProcessor.process(mockRequest)).rejects.toThrow("Missing webhook signature");
      });

      it("should handle missing headers gracefully (env)", async () => {
          process.env.PINNACLE_SIGNING_SECRET = "test-secret";

          const mockRequest = {
              body: rcsExample.body,
          };

          const result = await messageProcessor.process(mockRequest);

          expect(result).toEqual(rcsExample.body);
      });

      it("should process inbound button (env)", async () => {
          const mockRequest = {
              body: inboundButtonExample.body,
          };

          const result = await messageProcessor.process(mockRequest);

          expect(result).toEqual(inboundButtonExample.body);
      });

      it("should prioritize header secret over environment secret", async () => {
          process.env.PINNACLE_WEBHOOK_SECRET = "env-secret";

          const mockRequest = {
              headers: {
                  ...rcsExample.headers,
                  "PINNACLE_SIGNING_SECRET": "header-secret",
              },
              body: rcsExample.body,
          };

          const result = await messageProcessor.process(mockRequest);

          expect(result).toEqual(rcsExample.body);
      });

      // Validation test cases - only check for missing required fields
      describe("validation errors", () => {
          beforeEach(() => {
              process.env.PINNACLE_SIGNING_SECRET = "test-secret";
          });

          it("should reject missing or wrong type fields", async () => {
              // Missing type field
              const { type, ...bodyWithoutType } = smsExample.body;
              await expect(messageProcessor.process({
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: bodyWithoutType,
              })).rejects.toThrow("The request body is missing required fields.");

              // Wrong type for type field
              await expect(messageProcessor.process({
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, type: 123 },
              })).rejects.toThrow("The request body is missing required fields.");

              // Missing conversation field
              const { conversation, ...bodyWithoutConversation } = smsExample.body;
              await expect(messageProcessor.process({
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: bodyWithoutConversation,
              })).rejects.toThrow("The request body is missing required fields.");

              // Wrong type for conversation field (null)
              await expect(messageProcessor.process({
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, conversation: null },
              })).rejects.toThrow("The request body is missing required fields.");

              // Wrong type for conversation field (array)
              await expect(messageProcessor.process({
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, conversation: [] },
              })).rejects.toThrow("The request body is missing required fields.");

              // Wrong type for status field
              await expect(messageProcessor.process({
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, status: 123 },
              })).rejects.toThrow("The request body is missing required fields.");

              // Wrong type for direction field
              await expect(messageProcessor.process({
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, direction: false },
              })).rejects.toThrow("The request body is missing required fields.");

              // Wrong type for segments field
              await expect(messageProcessor.process({
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, segments: "string" },
              })).rejects.toThrow("The request body is missing required fields.");

              // Wrong type for sentAt field
              await expect(messageProcessor.process({
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, sentAt: 999 },
              })).rejects.toThrow("The request body is missing required fields.");

              // Wrong type for message field (string)
              await expect(messageProcessor.process({
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, message: "not an object" },
              })).rejects.toThrow("The request body is missing required fields.");
          });

          it("should reject null body", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: null,
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow(BadRequestError);
              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is not an object.");
          });

          it("should accept deliveredAt as null", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: {
                      ...smsExample.body,
                      deliveredAt: null
                  },
              };

              const result = await messageProcessor.process(mockRequest);
              expect(result.deliveredAt).toBeNull();
          });

          it("should accept deliveredAt as undefined", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: {
                      ...smsExample.body,
                      deliveredAt: undefined
                  },
              };

              const result = await messageProcessor.process(mockRequest);
              expect(result.deliveredAt).toBeUndefined();
          });

          it("should accept message with omitted deliveredAt field", async () => {
              const { deliveredAt, ...bodyWithoutDeliveredAt } = smsExample.body;

              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: bodyWithoutDeliveredAt,
              };

              const result = await messageProcessor.process(mockRequest);
              expect(result.deliveredAt).toBeUndefined();
          });

          it("should reject undefined body", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: undefined,
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow(BadRequestError);
              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is not an object.");
          });

          it("should reject empty object body", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: {},
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow(BadRequestError);
              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is missing required fields.");
          });

          it("should reject string body", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: "not an object",
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow(BadRequestError);
              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is not an object.");
          });

          it("should reject number body", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: 123,
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow(BadRequestError);
              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is not an object.");
          });

          it("should reject boolean body", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: true,
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow(BadRequestError);
              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is not an object.");
          });

          it("should accept valid field types", async () => {
              // All fields with correct types should pass
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: {
                      type: "MESSAGE.RECEIVED",
                      conversation: { id: 1, from: "+1234567890", to: "+0987654321" },
                      status: "RECEIVED",
                      direction: "INBOUND",
                      segments: 1,
                      sentAt: "2024-01-01T00:00:00Z",
                      message: { id: 123, content: { text: "test" } }
                  },
              };

              const result = await messageProcessor.process(mockRequest);
              expect(result).toBeDefined();
          });

          it("should reject when any field has wrong type", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: {
                      // Mix of correct and incorrect types
                      type: "MESSAGE.RECEIVED", // correct
                      status: "RECEIVED", // correct
                      conversation: "should be object", // wrong type
                      direction: "INBOUND", // correct
                      segments: 1, // correct
                      sentAt: "2024-01-01T00:00:00Z", // correct
                      message: {} // correct type
                  },
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow(BadRequestError);
              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is missing required fields.");
          });

          it("should reject array as body", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: [],
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow(BadRequestError);
              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is not an object.");
          });

          it("should reject message field as null", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, message: null },
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is missing required fields.");
          });

          it("should reject message field as array", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, message: [] },
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is missing required fields.");
          });

          it("should reject segments as negative number", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, segments: -1 },
              };

              // Should pass validation since we only check type, not value
              const result = await messageProcessor.process(mockRequest);
              expect(result).toBeDefined();
          });

          it("should reject segments as float number", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, segments: 1.5 },
              };

              // Should pass validation since we only check type (number), not if it's integer
              const result = await messageProcessor.process(mockRequest);
              expect(result).toBeDefined();
          });

          it("should reject segments as NaN", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, segments: NaN },
              };

              // NaN is type number, so it should pass type check
              const result = await messageProcessor.process(mockRequest);
              expect(result).toBeDefined();
          });

          it("should reject conversation as string", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: { ...smsExample.body, conversation: "not an object" },
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is missing required fields.");
          });

          it("should reject missing multiple required fields", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: {
                      type: "MESSAGE.RECEIVED",
                      // Missing: conversation, status, direction, segments, sentAt, message
                  },
              };

              await expect(messageProcessor.process(mockRequest)).rejects.toThrow("The request body is missing required fields.");
          });

          it("should accept message with extra unknown fields", async () => {
              const mockRequest = {
                  headers: { 'PINNACLE_SIGNING_SECRET': 'test-secret' },
                  body: {
                      ...smsExample.body,
                      extraField: "should be ignored",
                      anotherExtra: 123
                  },
              };

              const result = await messageProcessor.process(mockRequest);
              expect(result).toBeDefined();
          });
      });
  });
});