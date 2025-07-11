import React, { useState } from 'react';
import { generateContent } from './services/geminiService';

export default function GeminiChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const text = await generateContent(prompt);
      setResponse(text);
    } catch (err) {
      console.error(err);
      setResponse('Error generating content');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Ask Gemini..."
        />
        <button type="submit" disabled={loading}>Ask</button>
      </form>
      {loading ? <p>Loading...</p> : <pre>{response}</pre>}
    </div>
  );
}
