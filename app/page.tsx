import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="mb-5">Otosum</h1>
      <Link href="/auth/sign-in">
        <button className="btn rounded-xl text-xl font-bold m-2">
          Sign In
        </button>
      </Link>
      <Link href="/auth/sign-up">
        <button className="btn rounded-xl text-xl font-bold m-2">
          Sign up
        </button>
      </Link>
    </main>
  );
}
