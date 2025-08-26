import React, { useState } from 'react';
import { processText, StepResult } from '../util/scrub';

const ScrubberPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<StepResult[]>([]);
  const [finalOutput, setFinalOutput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleScrub = () => {
    const stepResults = processText(input);
    setResults(stepResults);
    setFinalOutput(stepResults.length > 0 ? stepResults[stepResults.length - 1].output : '');
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <h2>AI Text Scrubber</h2>
      <label htmlFor="ai-text-input">AI Generated Text:</label>
      <textarea
        id="ai-text-input"
        value={input}
        onChange={handleInputChange}
        rows={6}
        style={{ width: '100%', marginBottom: 16 }}
        placeholder="Paste AI generated text here..."
      />
      <button onClick={handleScrub} style={{ marginBottom: 24 }}>Scrub Text</button>
      {results.length > 0 && (
        <div>
          <h3>Scrubbing Steps</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
                  {results.map((step, idx) => (
                    <li key={idx} style={{ marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                      <strong>{step.label}</strong>
                      <div style={{ fontSize: '0.95em', color: '#555' }}>{step.message}</div>
                    </li>
                  ))}
          </ul>
          <div style={{ marginTop: 24 }}>
            <label htmlFor="final-output"><strong>Final Output:</strong></label>
            <textarea
              id="final-output"
              value={finalOutput}
              readOnly
              rows={4}
              style={{ width: '100%', background: '#e8f5e9', color: '#222', marginTop: 8 }}
              onFocus={e => e.target.select()}
            />
            <button
              style={{ marginTop: 8 }}
              onClick={() => {
                navigator.clipboard.writeText(finalOutput);
              }}
            >Copy to Clipboard</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrubberPage;
