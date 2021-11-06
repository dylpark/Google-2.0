import Head from "next/head";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Image from "next/image";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* <Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left Div */}
        <div className="flex space-x-4 items-center">
          <p className="hover:underline cursor-pointer">About</p>
          <p className="hover:underline cursor-pointer">Store</p>
        </div>
        {/* Right Div */}
        <div className="flex space-x-4 items-center">
          <p className="hover:underline cursor-pointer">Gmail</p>
          <p className="hover:underline cursor-pointer">Images</p>
          {/* Icons */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* Avatar */}
          <Avatar url="https://avatars.githubusercontent.com/u/64296934?v=4" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://s3.amazonaws.com/freebiesupply/large/2x/google-logo-transparent.png"
          height={100}
          width={300}
          alt=""
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md sm:max-w-xl lg:max-w-2xl rounded-full border border-gray-200 px-5 py-3 items-center">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5 ml-3 text-gray-500" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="google-gray p-3 rounded-md hover:ring-1 focus:outline-none active:ring-gray-300 ring-gray-200 hover:shadow-md text-sm text-gray-800">Google Search</button>
          <button className="google-gray p-3 rounded-md hover:ring-1 focus:outline-none active:ring-gray-300 ring-gray-200 hover:shadow-md text-sm text-gray-800">I'm Feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
}
