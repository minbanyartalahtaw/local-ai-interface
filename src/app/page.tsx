import Link from "next/link";

export default function Home() {


  return (
    <div className="">
      <Link href="/chat/new" className="underline text-blue-800">Chat</Link>
      <br />
      <Link href="/chat/" className="underline text-red-800">Chat Home</Link>
      <br />
    </div>
  );
}
