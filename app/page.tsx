import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="mb-5">Otosum</h1>
      <Link href="/dashboard">
        <button className="btn rounded-xl text-xl font-bold m-2">
          Go client Dashboard
        </button>
      </Link>
      <Link href="/shop/pos">
        <button className="btn rounded-xl text-xl font-bold m-2">
          Go shop Dashboard
        </button>
      </Link>
    </main>
  );
}
