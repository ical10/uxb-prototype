export type KeypairType = 'ed25519' | 'sr25519' | 'ecdsa' | 'ethereum';

export interface InjectedAccount {
    address: string;
    genesisHash?: string | null;
    name?: string;
    type?: KeypairType;
}

export enum JsonRpcApi {
    LEGACY = 'legacy',
    NEW = 'new'
}
  