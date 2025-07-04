"use client"

import { useEffect } from "react";
import { useBlockNumber } from "../hooks/use-block-number"


export function BlockNumberDisplay() {
  const { blockNumber, fetchBlockNumber, unsub } = useBlockNumber();

  useEffect(() => {
    fetchBlockNumber();

    return () => {
      unsub?.();
    };
  }, []);

  return (
    <p>Block number: {!!blockNumber ? blockNumber : "Loading..."}</p>
  )
}
