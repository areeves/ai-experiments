import React, { useState } from 'react';
import { useAppConfig } from '../hooks/useAppConfig';

const CONFIG_OPTIONS = [
  { key: 'apiKey', label: 'OpenAI API Key', type: 'password' },
];

export default function ConfigPage() {
  const { config, setConfigValue } = useAppConfig();
  const [localConfig, setLocalConfig] = useState(() => {
    const initial: Record<string, any> = {};
    CONFIG_OPTIONS.forEach(opt => {
      initial[opt.key] = config[opt.key as keyof typeof config] || '';
    });
    return initial;
  });

  const handleChange = (key: string, value: string) => {
    setLocalConfig(prev => ({ ...prev, [key]: value }));
    setConfigValue(key, value);
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Configuration</h2>
      <form>
        {CONFIG_OPTIONS.map(opt => (
          <div key={opt.key} style={{ marginBottom: '1rem' }}>
            <label htmlFor={opt.key} style={{ display: 'block', marginBottom: 4 }}>
              {opt.label}
            </label>
            <input
              id={opt.key}
              type={opt.type}
              value={localConfig[opt.key]}
              onChange={e => handleChange(opt.key, e.target.value)}
              style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #aaa' }}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
