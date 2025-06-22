export async function getBalance(publicKey: string): Promise<string> {
  try {
    const response = await fetch(`https://horizon-testnet.stellar.org/accounts/${publicKey}`);
    const data = await response.json();

    const balanceObj = data.balances.find((bal: any) => bal.asset_type === "native");
    return balanceObj ? balanceObj.balance : "0";
  } catch (error) {
    console.error("Balance çekme hatası:", error);
    return "0";
  }
}
