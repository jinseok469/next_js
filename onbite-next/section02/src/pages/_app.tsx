import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton =  () =>{
    router.push("/test");
  }
  return <div>
    <header>
      <Link href={"/"}>index</Link>
      <br></br>
      <Link href={"/search"}>search</Link>
      <br></br>
      <Link href={"/book"}>book</Link>
      <div>
        <button onClick={()=>onClickButton()}>/test 페이지로 이동</button>
      </div>
    </header>
    
    <Component {...pageProps} /></div>;
}
