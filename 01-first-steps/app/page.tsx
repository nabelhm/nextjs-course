import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <main className="text-5xl">
        <span>Hello World</span>

        <Link className="ml-2" href={'/about'}>About </Link>
      </main>
    </div>
  );
}
