import { getCookie } from "cookies-next";
import type { AppProps } from "next/app";
import { useEffect, useState,createContext } from "react";
import { useSession } from "react-use-session";
import { Menu } from "../components/Menu";
import "../styles/globals.scss";
import { Auth } from "../types/Auth";
import { ISession } from "../types/Session";

export const AuthContext = createContext<Auth | null>(null);

export default function App({ Component, pageProps }: AppProps) {
    const { session } = useSession("jwt", false);
    const [token, setToken] = useState<any | ISession>(null);

    useEffect(() => {
        if (getCookie("jwt") != undefined) {
            setToken(getCookie("jwt"));
        } else {
            const sessionToken = session as ISession
            if (sessionToken != null) {
                setToken(sessionToken.token);
            } 
        }
    }, []);


    return (
        <>
        <AuthContext.Provider value={{setToken,token}}>
        <Menu />
            <Component {...pageProps} />
        </AuthContext.Provider>
        </>
    );
}
