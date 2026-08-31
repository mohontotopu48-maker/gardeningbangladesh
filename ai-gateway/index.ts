/**
 * AI Gateway - Text Generation with Streaming
 *
 * Uses the Vercel AI SDK to stream text responses from the
 * 'openai/gpt-5.6-sol' model via the AI Gateway.
 *
 * Usage:
 *   1. Set AI_GATEWAY_API_KEY in .env.local
 *   2. Run: npx tsx ai-gateway/index.ts
 */

import "dotenv/config";
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

// --- Validate environment ---
const apiKey = process.env.AI_GATEWAY_API_KEY;
if (!apiKey || apiKey === "your_api_key_here") {
  console.error(
    "❌ AI_GATEWAY_API_KEY not set.\n" +
      "   Add it to .env.local:\n" +
      '   AI_GATEWAY_API_KEY=your_key_here\n' +
      "   Get your key from: https://vercel.com/dashboard/ai-gateway",
  );
  process.exit(1);
}

// --- Create AI Gateway provider ---
// The AI Gateway acts as a proxy — you point the OpenAI-compatible
// client at the gateway URL and it routes to the correct provider.
const gateway = createOpenAI({
  apiKey,
  baseURL: "https://ai-gateway.vercel.sh/v1",
});

// --- Model ---
const MODEL = "openai/gpt-5.6-sol";

// --- Prompt ---
const SYSTEM_PROMPT = `You are an expert gardening assistant for "Gardening Bangladesh",
Bangladesh's #1 online gardening shop. You help customers with:
- Plant care tips (indoor & outdoor plants)
- Fertilizer usage (organic & chemical)
- Pest control advice
- Rooftop gardening guidance
- Fruit tree cultivation
Answer in Bengali (Bangla) when the question is in Bengali.
Be concise, practical, and friendly.`;

const USER_PROMPT =
  "ছাদের বাগানে টমেটো চাষ করতে চাই। কীভাবে শুরু করব এবং কী কী সার লাগবে?";

// --- Stream text ---
async function main() {
  console.log("🚀 Starting AI Gateway text generation...\n");
  console.log(`   Model: ${MODEL}`);
  console.log(`   Prompt: ${USER_PROMPT}\n`);
  console.log("--- Response ---\n");

  const result = streamText({
    model: gateway(MODEL),
    system: SYSTEM_PROMPT,
    prompt: USER_PROMPT,
  });

  // Stream tokens to console
  for await (const delta of result.textStream) {
    process.stdout.write(delta);
  }

  // Log usage
  const usage = await result.usage;
  console.log("\n\n--- Token Usage ---");
  console.log(`   Prompt tokens:     ${usage.promptTokens}`);
  console.log(`   Completion tokens: ${usage.completionTokens}`);
  console.log(`   Total tokens:      ${usage.totalTokens}`);
  console.log("\n✅ Done!");
}

main().catch((err) => {
  console.error("\n❌ Error:", err.message);
  if (err.cause) {
    console.error("   Cause:", err.cause);
  }
  process.exit(1);
});
