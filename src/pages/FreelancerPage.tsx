import React, { useState } from 'react';
import { getBalance } from '../services/getBalance';

const FreelancerPage = () => {
  const [publicKey, setPublicKey] = useState('');
  const [balance, setBalance] = useState<string | null>(null);

  const handleCheckBalance = async () => {
    if (!publicKey) return;
    const bal = await getBalance(publicKey);
    setBalance(bal);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Freelancer Sayfası</h1>
      <input
        type="text"
        placeholder="Cüzdan adresini gir"
        value={publicKey}
        onChange={(e) => setPublicKey(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button onClick={handleCheckBalance}>Bakiyeyi Göster</button>

      {balance !== null && (
        <p style={{ marginTop: '1rem' }}>
          💰 Bakiyen: <strong>{balance}</strong> XLM
        </p>
      )}
    </div>
  );
};

export default FreelancerPage;
