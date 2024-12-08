import { Register } from "@/components/register";

export default function Main() {
  return (
    <main className="flex h-screen">
      <div className="flex-1 bg-zinc-700 border-yellow-300">
      </div>

      <div className="w-1/3 bg-zinc-900 p-8 border-yellow-300">
        <Register />
      </div>
    </main>
  )
}