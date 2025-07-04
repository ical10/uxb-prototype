import { DedotClient, WsProvider } from 'dedot';
import type { PolkadotApi } from '@dedot/chaintypes';

// Initialize providers & clients
const provider = new WsProvider('wss://rpc.polkadot.io');
const client = await DedotClient.new<PolkadotApi>(provider);

type BlockNumberProps = {
    unsub: () => void;
    blockNumber: number;
}

export async function getBlockNumber(onBlockNumberUpdate?: (blockNumber: number) => void): Promise<BlockNumberProps | null> {
    try {
        const currentBlockNumber = await client.query.system.number();
        
        const unsub = await client.query.system.number((blockNumber) => {
            if (onBlockNumberUpdate) {
                onBlockNumberUpdate(blockNumber);
            }
        });
        
        return {
            unsub,
            blockNumber: currentBlockNumber
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}