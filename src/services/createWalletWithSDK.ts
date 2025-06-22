// Belki de SDK'yı import ettiğimizde, ana obje içinde bir daha 'walletSdk' diye bir property var?
// Bu çok nadir ve garip bir paketleme olurdu ama hata mesajı bunu düşündürüyor.
import * as importedSdk from '@stellar/typescript-wallet-sdk';

// importedSdk.walletSdk'yi alıp gerçek SDK objesi gibi kullanalım
const actualWalletSdk = (importedSdk as any).walletSdk || importedSdk; // fallback olarak direkt importedSdk'yi kullanırız

export async function createWalletWithSDK() {
  try {
    // Şimdi actualWalletSdk üzerinden erişmeyi deneyelim:
    const keyManager = await actualWalletSdk.KeyManager.createEmpty();
    const newKeypair = actualWalletSdk.AccountKeypair.random();

    keyManager.addAccountKeypair(newKeypair);

    const wallet = new actualWalletSdk.Wallet(keyManager);

    const publicKey = newKeypair.publicKey;

    console.log("Cüzdan başarıyla oluşturuldu!");
    console.log("Public Key:", publicKey);

    return {
      wallet,
      publicKey,
    };
  } catch (error) {
    console.error("Cüzdan oluşturulurken bir hata oluştu:", error);
    throw error;
  }
}

