import Wallet, { WalletOptions } from './wallet';

interface ExtensionWalletOptions extends WalletOptions {
  installUrl: string;
}

export default class ExtensionWallet extends Wallet<ExtensionWalletOptions> {
  get installUrl() {
    return this.options.installUrl;
  }

  get installed() {
    return this.ready;
  }
}