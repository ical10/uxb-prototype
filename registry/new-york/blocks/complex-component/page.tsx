import { BlockNumberDisplay } from "@/registry/new-york/blocks/complex-component/components/block-number-display";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4">
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <BlockNumberDisplay />
      </div>
    </div>
  )
}
