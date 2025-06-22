import Server, { Keypair, Networks, TransactionBuilder, Operation } from 'stellar-sdk';

const HORIZON_URL = 'https://horizon-testnet.stellar.org';

const server = new Server(HORIZON_URL);

export async function createWallet() {
  const pair = Keypair.random();
  const publicKey = pair.publicKey();
  const secretKey = pair.secret();

  // Testnet için publicKey fonlama URL’si
  const friendbotUrl = `https://friendbot.stellar.org/?addr=${publicKey}`;

  // Testnet’ten fon al (ilk bakiye yollanır)
  try {
    await fetch(friendbotUrl);
    console.log('Cüzdan başarıyla fonlandı!');
  } catch (err) {
    console.error('Fonlama hatası:', err);
  }

  return {
    publicKey,
    secretKey,
  };
}
