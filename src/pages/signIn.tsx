import Head from "next/head";
import { FormLogin } from "../components/FormLogin";

export default function signIn() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="theme-color" content="#4c00fd" />
                <meta name="description" content="Login de usuário" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <FormLogin/>
        </>
    );
}
