import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Alexander González</title>
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center"></main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
