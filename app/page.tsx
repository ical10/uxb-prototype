import * as React from "react"
import BlockNumberPage from "@/registry/new-york/blocks/complex-component/page"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import ApiProvider from "@/registry/new-york/blocks/complex-component/providers/api-provider"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Polkadot UI Components Registry</h1>
        <p className="text-muted-foreground">
        React components with type safety and hooks for the Polkadot ecosystem.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Live Demo</h2>
            <OpenInV0Button name="complex-component"/>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
              <ApiProvider>
                <BlockNumberPage />
              </ApiProvider>
          </div>
        </div>
      </main>
    </div>
  )
}
