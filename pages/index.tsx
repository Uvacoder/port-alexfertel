import Head from "next/head";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Alexander González</title>
      </Head>

      <main className="flex items-center justify-between flex-1 px-20">
        <section className="flex flex-col justify-center">
          <h1 className="text-9xl text-gray-800 dark:text-gray-100">
            <span>Hello!</span>
            <br />
            <span>I'm Alex.</span>
          </h1>
        </section>
        <section></section>
      </main>
    </div>
  );
}
