// api.ts
const API_BASE_URL = 'http://localhost:5000';

export async function generatePage(prompt: string, style?: any) {
  const response = await fetch(`${API_BASE_URL}/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt, style }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.details || error.error || 'Generation failed');
  }

  return response.json();
}