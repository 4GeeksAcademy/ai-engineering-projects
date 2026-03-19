# Talk to the Machine - Reference solution

This README describes what a correct reference implementation should include for the **"Talk to the Machine - Building a Chat Interface with a Real AI API"** project.

## Expected implementation scope

A valid solution should be built with plain frontend technologies (HTML, CSS, and JavaScript) and call the Groq Chat Completions API directly from the browser using `fetch`.

Core behavior expected:

- A chat interface where users can type a message and receive a model response.
- Conversation history persisted in memory during the session and sent in full on every request.
- Requests made to `https://api.groq.com/openai/v1/chat/completions` using the model `llama3-8b-8192`.
- Token usage read from the API response `usage` object and accumulated across the whole conversation.
- At least one additional metric displayed (for example: response time, tokens per second, or model name).

## API contract the solution must respect

Each request should include:

- Method: `POST`
- Headers:
  - `Authorization: Bearer <YOUR_GROQ_API_KEY>`
  - `Content-Type: application/json`
- JSON body with:
  - `model: "llama3-8b-8192"`
  - `messages: [...]` where the array contains the full conversation history

Each successful response should be parsed to extract:

- Assistant text from `choices[0].message.content`
- Usage metrics from `usage`:
  - `prompt_tokens`
  - `completion_tokens`
  - `total_tokens`

## Minimal UI expectations

The reference behavior should include:

- Input + send control for the user prompt.
- Message list rendering both user and assistant messages.
- Real-time update of a metrics panel after every response.
- Visible and understandable error handling for failed HTTP calls (4xx/5xx) or malformed responses.

## Suggested internal state shape

One straightforward approach uses:

- `messages`: array of `{ role, content }` objects for API payload and UI rendering.
- Running counters for token totals:
  - `promptTokensTotal`
  - `completionTokensTotal`
  - `tokensTotal`
- Optional metric state:
  - `lastResponseMs`
  - `tokensPerSecond`
  - `modelName`

## Validation checklist

Use this checklist to compare a student submission against the reference:

- [ ] Groq API is called with `fetch` (no SDK wrappers).
- [ ] Correct endpoint and required headers are present.
- [ ] Full conversation history is sent on every request.
- [ ] Assistant response appears in the UI without page reload.
- [ ] `usage` fields are read correctly and accumulated across multiple turns.
- [ ] Metrics panel updates after each message.
- [ ] At least one extra metric beyond token totals is displayed.
- [ ] API errors are surfaced to the user with a meaningful message.

## Notes for reviewers

- Visual design is not part of grading; functionality and data correctness are the priority.
- Storing secrets in committed client-side code is not acceptable in real production systems; this project allows simplified key handling only for learning purposes.
