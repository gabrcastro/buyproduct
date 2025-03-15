"use client";

import { CookieIcon } from "lucide-react";

export default function ProvadentPage() {
  const links = {
    hoplink:
      "https://5f8067ncxqkc5w6n0e80g3vgbn.hop.clickbank.net/?&traffic_source=google",
  };

  function goTo(url: string) {
    window.location.assign(url);
  }

  return (
    <div
      onClick={() => goTo(links.hoplink)}
      className="flex justify-center items-start min-h-screen w-full pb-20 bg-[url(/provadent/bg.png)] bg-no-repeat bg-cover bg-center lg:bg-center"
    >
      <div className="mt-10 flex flex-col gap-5 w-[95%] lg:w-[50%] p-5 rounded-sm bg-neutral-50 shadow-2xl shadow-neutral-900">
        <span className="flex gap-4 text-2xl text-neutral-950 font-bold items-center">
          <CookieIcon size={30} />
          This site uses cookies
        </span>

        <p className="text-base">
          We store data temporarily to improve your browsing experience and
          experience and recommend content that interests you. By using our
          services, you agree to such monitoring.
        </p>

        <div className="flex gap-4 items-center w-full justify-end mt-5">
          <button
            onClick={() => goTo(links.hoplink)}
            className="border-2 border-blue-800 text-xl text-blue-900 font-bold p-2 px-10 hover:opacity-90 hover:cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => goTo(links.hoplink)}
            className="bg-blue-800 border-2 border-blue-800 text-xl text-neutral-50 font-bold p-2 px-10 hover:opacity-90 hover:cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
