import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-800 to-gray-900 text-white gap-8 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          👋 Hi, I'm <span className="text-blue-400">Shobhit</span>
        </h1>
        <p className="text-lg mt-2 text-gray-300">
          Passionate about coding, problem-solving & building amazing projects.
        </p>
      </div>

      <Card className="p-8 bg-gray-800 rounded-xl shadow-lg text-center max-w-md">
        <p className="text-lg">Check out my latest projects, achievements & more!</p>
        <Button className="mt-4 w-full">Explore Portfolio</Button>
      </Card>
    </main>
  );
}

