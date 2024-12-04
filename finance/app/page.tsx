import { Register } from "@/components/register";

export default function Main() {
  return (
    <main className="flex h-screen">
      <div className="flex-1 bg-background">
      </div>

      <div className="w-1/3 bg-foreground p-8">
        <Register />
      </div>
    </main>
  )
}