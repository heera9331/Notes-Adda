"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const path = usePathname();

  return (
    <div className="">
      <h2>Todos</h2>
    </div>
  );
}
