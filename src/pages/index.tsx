import Head from "next/head";
import { Hero } from "../components/Hero";
import { Highlights } from "../components/Highlights";


export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="theme-color" content="#4c00fd" />
                <meta
                    name="description"
                    content="Home da pagina"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />
            <Highlights />
        </>
    );
}
