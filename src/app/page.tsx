import Link from "next/link";

export default function Home() {


  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen">
      <Link
        href="/chat/new"
        className="px-3 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-500 transition-colors"
      >
        Chat
      </Link>
      <div className=" text-sm text-gray-500 mt-6">
        Press <kbd className="px-1 py-0.5 rounded">⌘</kbd> + <kbd className="px-1 py-0.5  rounded">B</kbd> to open sidebar
      </div>
    </div>
  );
}
