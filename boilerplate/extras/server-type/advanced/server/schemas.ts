import { z } from "zod";
import { ToolSchema } from "@modelcontextprotocol/sdk/types.js";

export const ToolInputSchema = ToolSchema.shape.inputSchema;

export const AddSchema = z.object({
  a: z.number().describe("First number"),
  b: z.number().describe("Second number"),
});