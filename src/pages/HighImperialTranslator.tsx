import React, { useState } from 'react';
import { useAppConfig } from '../hooks/useAppConfig';
import { translateToHighImperial } from '../api/openai';

const HighImperialTranslator: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const { config } = useAppConfig();

  const handleTranslate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOutput('');
    try {
  const result = await translateToHighImperial(input, config.apiKey || '');
      setOutput(result);
    } catch (err) {
      setOutput('Translation failed.');
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '2rem', background: '#f9f9f9', borderRadius: 8 }}>
      <h2>High Imperial Translator</h2>
      <form onSubmit={handleTranslate}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={4}
          style={{ width: '100%', marginBottom: 16 }}
          placeholder="Enter English text..."
          required
        />
        <button type="submit" disabled={loading} style={{ marginBottom: 16 }}>
          {loading ? 'Translating...' : 'Translate'}
        </button>
      </form>
      <div>
        <label htmlFor="output" style={{ display: 'block', marginBottom: 8 }}>High Imperial Output:</label>
        <textarea
          id="output"
          value={output}
          readOnly
          rows={4}
          style={{ width: '100%', marginBottom: 8, background: '#eaeaea' }}
        />
        <button onClick={handleCopy} disabled={!output}>Copy to Clipboard</button>
      </div>
    </div>
  );
};

export default HighImperialTranslator;
