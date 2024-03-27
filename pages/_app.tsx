import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {ReduxProvider} from "@/src/redux";
import {redux} from "@/src/reducers";
import {Header} from "@/src/components/header";

export default function App({ Component, pageProps }: AppProps) {
  return <ReduxProvider store={redux}>
    <Header />
    <Component {...pageProps} />
  </ReduxProvider>;
}
