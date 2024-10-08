import { SwaggerContract } from "@contracts";
import { paramsWithTaskId } from "./common.schemas";
import { AppFastifySchema, SuccessCode } from "@types";

export const deleteTaskSchema = {
  tags: [SwaggerContract.ClientTag.TASKS],
  summary: "Удалить задачу",
  params: paramsWithTaskId,
  response: {
    [SuccessCode.OK]: {
      type: "object",
      required: ["alert", "message", "taskId"],
      description: SwaggerContract.ActionResponseSchema.description,
      properties: {
        alert: SwaggerContract.ActionResponseSchema.properties.alert,
        message: {
          type: "string",
          description:
            SwaggerContract.ActionResponseSchema.properties.message.description,
          example: "Успешно удалено",
        },
        taskId: {
          type: "string",
          description: "ID удалённой задачи",
          example: SwaggerContract.MongooseIdExample,
        },
      },
    } as const satisfies SwaggerContract.ActionResponseType,
  },
} as const satisfies AppFastifySchema;

export type DeleteTaskType = typeof deleteTaskSchema;
