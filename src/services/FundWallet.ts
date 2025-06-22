export async function fundWallet(publicKey: string) {
  const friendbotUrl = `https://friendbot.stellar.org/?addr=${publicKey}`;

  try {
    const response = await fetch(friendbotUrl);
    const data = await response.json();
    console.log("Testnet XLM gönderildi:", data);
    return data;
  } catch (error) {
    console.error("Friendbot hatası:", error);
    throw error;
  }
}
