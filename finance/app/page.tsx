import { Register } from "@/components/register";

export default function Main() {
  return (
    <main className="flex h-screen">
      <div className="flex-1 bg-gray-50 border-yellow-300">
      </div>

      <div className="w-1/3 bg-gray-100 p-8 border-yellow-300">
        <Register />
      </div>
    </main>
  )
}