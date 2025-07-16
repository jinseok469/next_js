import GlobalLayout from "@/components/global-layout";
import SearchableLayout from "@/components/searchable-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <GlobalLayout>
    <SearchableLayout>
    <Component {...pageProps}></Component>
    </SearchableLayout>
  </GlobalLayout>
}
