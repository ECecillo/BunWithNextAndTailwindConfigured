import Head from "next/head";
import nextPackage from "next/package.json";
import React from "react";

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Next.js</title>
      </Head>

      <main>
        <h1 className="p-20">
          Welcome to <a href="https://nextjs.org">Next.js (with Bun 😀)!</a> v
          {nextPackage.version}
        </h1>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>
    </div>
  );
}
