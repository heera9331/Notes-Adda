import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-semibold">The NextJS App</h1>
      <Link href={"/todo"}>Go to todos</Link>
    </main>
  );
}
