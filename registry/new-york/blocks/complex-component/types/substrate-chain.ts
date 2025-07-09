export interface SubstrateChain {
    readonly network: string
    readonly displayName: string
    readonly rpcUrls: string[]
    readonly isTestnet: boolean
    readonly icon?: string
    readonly explorerUrls?: Partial<Record<SubstrateExplorer, string>>
    readonly faucetUrls?: string[]
}

export enum SubstrateExplorer {
    Subscan = 'subscan',
    PolkadotJs = 'polkadot-js',
    PapiExplorer = 'papi-explorer',
}

export interface SubstrateChainConfig<
    TChains extends Readonly<Record<string, SubstrateChain>> = Readonly<Record<string, SubstrateChain>>,
> {
    readonly chains: TChains
    readonly defaultChain: keyof TChains
}

export function defineSubstrateChainConfig<const TChains extends Readonly<Record<string, SubstrateChain>>>(config: SubstrateChainConfig<TChains>) {
    return config;
}