import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import SearchButton from "../components/Home/SearchButton";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router"

const Home: NextPage = () => {
  const router = useRouter()
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (searchInputRef.current != null) {
      const term = searchInputRef.current.value;
      router.push(`/search?term=${term}`)
    } else {
      return
    }

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://s3.amazonaws.com/freebiesupply/large/2x/google-logo-transparent.png"
          height={100}
          width={300}
          alt=""
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md sm:max-w-xl lg:max-w-2xl rounded-full border border-gray-200 px-5 py-3 items-center">
          <SearchIcon className="h-5 mr-3 text-gray-400" />
          <input
            className="focus:outline-none flex-grow"
            type="text"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5 ml-3 text-gray-400" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <SearchButton
            onClick={search}
            name="Google Search"
          />
          <SearchButton
            onClick={search}
            name="I'm Feeling Lucky"
          />
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
