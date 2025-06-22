import React, { useState } from 'react';
import { Keypair } from 'stellar-sdk';

const EmployerPage = () => {
  const [wallet, setWallet] = useState<{ publicKey: string; secretKey: string } | null>(null);

  const handleCreateWallet = () => {
    const pair = Keypair.random();
    setWallet({
      publicKey: pair.publicKey(),
      secretKey: pair.secret(),
    });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Employer Sayfası</h1>
      <button onClick={handleCreateWallet}>Yeni Cüzdan Oluştur</button>

      {wallet && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Public Key:</strong> {wallet.publicKey}</p>
          <p><strong>Secret Key:</strong> {wallet.secretKey}</p>
        </div>
      )}
    </div>
  );
};

export default EmployerPage;
