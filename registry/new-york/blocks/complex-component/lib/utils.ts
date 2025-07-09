import { ChainId, ChainNetwork, substrateConfig } from "../config"
import { SubstrateChain } from "../types/substrate-chain"

export function getChainConfig<T extends Record<string, SubstrateChain>, K extends keyof T>(chains: T, chainId: K): T[K] {
  return chains[chainId]
}

export function getChainIds<T extends Record<string, SubstrateChain>>(chains: T): (keyof T)[] {
  return Object.keys(chains) as (keyof T)[];
}