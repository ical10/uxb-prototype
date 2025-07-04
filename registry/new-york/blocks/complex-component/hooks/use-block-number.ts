"use client"

import { useCallback, useState } from "react";
import { getBlockNumber } from "../lib/block-number";

export function useBlockNumber() {
    const [blockNumber, setBlockNumber] = useState(0);
    const [unsub, setUnsub] = useState<(() => void) | null>(null);

    const fetchBlockNumber = useCallback(async () => {
        try {
            const resp = await getBlockNumber((newBlockNumber) => {
                setBlockNumber(newBlockNumber);
            });

            if (!resp) {
                return;
            }
            setBlockNumber(resp.blockNumber);
            setUnsub(() => resp.unsub);
        } catch {
            setBlockNumber(0);
        }
    }, [])

    return {
        blockNumber,
        fetchBlockNumber,
        unsub
    };
}