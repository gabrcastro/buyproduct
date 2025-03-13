"use client";

import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCardContent } from "@radix-ui/react-hover-card";
import Image from "next/image";
import React from "react";
export default function SecandoEmCasaPage() {
  const links = {
    simples: "https://pay.kiwify.com.br/umvXfs8?afid=yeiA381W",
    depoimento: "https://pay.kiwify.com.br/GFeetjM?afid=yeiA381W",
  };

  function goTo(url: string) {
    window.location.assign(url);
  }

  return (
    <div className="bg-white flex flex-col p-0 m-0 w-full h-full font-[family-name:var(--font-geist-sans)]">
      <div className="w-full h-14 bg-red-500 text-white text-xl lg:text-2xl font-bold p-10 lg:p-2 text-center flex items-center justify-center">
        BEWARE! YOUR TEETH MAY BE IN DANGER WITHOUT YOU REALIZING IT!
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <h2 className="mx-5 font-bold text-xl lg:text-3xl text-neutral-950 text-center mt-10">
          🔥 Dentists Are Amazed by This{" "}
          <span className="text-blue-900">New Method</span> for{" "}
          <span className="text-blue-900">Healthy Gums</span>!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start gap-5 w-[95%] lg:w-[80%]">
          <HoverCard>
            <HoverCardTrigger className="flex flex-col items-center justify-center">
              <Image
                src={"/dentalcare/mouth.jpg"}
                alt=""
                width={440}
                height={440}
                className="rounded-2xl mx-auto"
                priority
              />
            </HoverCardTrigger>
            <HoverCardContent className="-mt-30 bg-white p-2 border-[.5px] border-neutral-700 rounded-lg">
              Photo by{" "}
              <a href="https://unsplash.com/@carocaro1987?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Caroline LM
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/woman-with-silver-and-yellow-hoop-earrings-8BkF0sTC6Uo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </HoverCardContent>
          </HoverCard>

          <div className="flex flex-col items-center justify-center w-full">
            <p className="font-semibold text-neutral-950 text-base lg:text-lg">
              <span className="text-blue-900">
                👉 I’ve always struggled with my oral health. Bleeding gums, bad
                breath, and sensitivity to cold were part of my daily life.
              </span>
              <br />
              <br />I visited several dentists, tried expensive toothpaste, but
              nothing seemed to truly fix the problem. Then, I discovered a
              natural method that transformed my oral health in just a few
              weeks! <br />
              <br />
              Now, my teeth are stronger, my gums are healthier, and my bad
              breath is gone. Want to know how I did it? <br />
              <br />
            </p>
            <button
              className="w-full mt-10 rounded-xl px-5 bg-blue-800 text-white text-xl lg:text-2xl font-bold py-4 hover:cursor-pointer hover:opacity-80 uppercase"
              type="button"
              onClick={() => goTo(links.simples)}
            >
              Find out here!
            </button>
          </div>
        </div>

        <div className="bg-blue-950 p-0 py-10 lg:p-10 flex flex-col gap-8 row-start-2 items-center w-full">
          <div className="flex flex-col w-[95%] lg:w-[70%] text-center">
            <div className="flex flex-col items-center justify-center w-full">
              <h3 className="font-bold text-neutral-50 text-xl lg:text-3xl">
                Discover the Secret to a Healthier, Problem-Free Smile!
              </h3>
              <p className="font-normal text-neutral-50 text-base lg:text-lg text-center my-10">
                Did you know that issues like bleeding gums, bad breath, and
                tooth sensitivity could be warning signs of something more
                serious? The good news is, there's a simple and natural way to
                strengthen your oral
              </p>
              <p className="font-normal text-neutral-50 text-base lg:text-lg text-center">
                🔹 Stronger, more resilient teeth
                <br />
                <br />
                🔹 Healthy gums—no more bleeding! <br />
                <br />
                🔹 Say goodbye to bad breath and discomfort <br />
                <br />
                🔹 Protection against cavities and future dental problems <br />
                <br />
                🔹 A naturally whiter, healthier smile
              </p>
              <button
                className="w-full mt-10 rounded-xl px-5 bg-red-600 text-white text-xl lg:text-2xl font-bold py-4 hover:cursor-pointer hover:opacity-80 uppercase"
                type="button"
                onClick={() => goTo(links.depoimento)}
              >
                Click here to learn more!
              </button>
            </div>
          </div>
        </div>

        <div className="p-0 lg:p-10 flex flex-col gap-8 row-start-2 items-center ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-[95%] lg:w-[80%]">
            <div className="flex flex-col items-center justify-center w-full text-center lg:text-start">
              <h3 className="font-bold text-neutral-950 text-xl lg:text-3xl">
                Dentists Are Amazed by This New Method for Healthy Gums!
              </h3>
              <p className="font-normal text-neutral-950 text-base lg:text-lg mt-5">
                Have you ever felt pain or discomfort while brushing your teeth?
                Or noticed that your gums are more sensitive than before?
                <br />
                <br />
                Recently, a group of specialists discovered an innovative method
                that can help strengthen oral health and prevent future
                problems.
                <br />
                This secret was hidden in nature and is now available to anyone
                who wants a healthier mouth and a brighter smile. <br />
                <br />
              </p>
              <button
                className="w-full mt-10 rounded-xl px-5 bg-blue-800 text-white text-xl lg:text-2xl font-bold py-4 hover:cursor-pointer hover:opacity-80 uppercase"
                type="button"
                onClick={() => goTo(links.simples)}
              >
                See how it works here
              </button>
            </div>
            <HoverCard>
              <HoverCardTrigger className="flex flex-col items-center justify-center">
                <Image
                  src={"/dentalcare/dentist.jpg"}
                  alt=""
                  width={440}
                  height={440}
                  className="rounded-2xl mx-auto"
                  loading="lazy"
                />
              </HoverCardTrigger>
              <HoverCardContent className="-mt-30 bg-white p-2 border-[.5px] border-neutral-700 rounded-lg">
                Photo by{" "}
                <a href="https://unsplash.com/@anikolleshi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                  Ani Kolleshi
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/photos/woman-inside-laboratory-7jjnJ-QA9fY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                  Unsplash
                </a>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </main>

      <footer className="w-full text-xs text-neutral-700 text-center my-10"></footer>
    </div>
  );
}
