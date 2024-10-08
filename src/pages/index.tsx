import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { C } from "@/content-manager";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const title = `Next Override Content - Brand: ${process.env.NEXT_PUBLIC_BRAND}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1><C tag="home:welcome">Welcome</C></h1>
        <p><C tag="home:question">Do you want to buy car insurance?</C></p>
        <button><C tag="home:button">I sure do</C></button>
        <p><C tag="home:tAndC">Read our <a href="/generic/t&c">T&C</a></C></p>
      </main>
    </>
  );
}
