"use server";

import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Link className="text-2xl underline text-blue-600" href="/model/">
        Bro Code
      </Link>
    </div>
  );
}
