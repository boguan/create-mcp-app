interface ToolInputSchema {
  type: "object";
  // The 'properties' field describes the actual parameters the tool accepts.
  // Its exact structure depends on the specific tool.
  properties?: { [key: string]: any }; 
  // There might be other validation rules like 'required' properties.
}

interface Tool {
  name: string;
  description?: string;
  inputSchema: ToolInputSchema;
}

interface ListToolsResponse {
  tools: Tool[];
  nextCursor?: string;
  // _meta field omitted for simplicity
}