import { generateContent } from '../geminiService';

declare const global: any;

describe('generateContent', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        candidates: [
          { content: { parts: [{ text: 'hello' }] } }
        ]
      })
    });
    process.env.REACT_APP_GEMINI_API_KEY = 'test-key';
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('calls Gemini API and returns text', async () => {
    const text = await generateContent('hi');
    expect(global.fetch).toHaveBeenCalled();
    expect(text).toBe('hello');
  });
});
