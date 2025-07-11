interface GeminiContentResponse {
  candidates: { content: { parts: { text: string }[] } }[];
}

export async function generateContent(prompt: string): Promise<string> {
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Missing Gemini API key');
  }

  const body = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ]
  };

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
  );

  if (!res.ok) {
    throw new Error(`Gemini API request failed: ${res.status} ${res.statusText}`);
  }

  const data: GeminiContentResponse = await res.json();
  return data.candidates?.[0]?.content.parts?.[0]?.text || '';
}
