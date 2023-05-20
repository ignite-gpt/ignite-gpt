import { Configuration, OpenAIApi } from 'openai'

/**
 * Example response:
 * {
 *   "id": "chatcmpl-7GNLAKcOsNsnlz7bk4wh8hSzTJJFR",
 *   "object": "chat.completion",
 *   "created": 1684137325,
 *   "model": "gpt-4-0314",
 *   "usage": { "prompt_tokens": 19, "completion_tokens": 25, "total_tokens": 44 },
 *   "choices": [
 *     {
 *       "message": {
 *         "role": "assistant",
 *         "content": "Hello! How can I assist you today? If you have any questions or need help with something, feel free to ask."
 *       },
 *       "finish_reason": "stop",
 *       "index": 0
 *     }
 *   ]
 * }
 */
export async function completion({ openAiApiKey, prompt }) {
  if (!openAiApiKey) {
    throw new Error('OpenAI API key not found')
  }
  const configuration = new Configuration({
    apiKey: openAiApiKey,
  })
  const openai = new OpenAIApi(configuration)

  const response = await openai.createChatCompletion({
    frequency_penalty: 0,
    max_tokens: 256,
    model: 'gpt-4',
    presence_penalty: 0,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    stream: false,
    temperature: 0.7,
    top_p: 1,
  })

  return response.data.choices[0].message.content
}
