"use client";

import clsx from "clsx";

type CookiesProps = {
  url: string;
  color: string;
};
export default function CookiesComponent(props: CookiesProps) {
  const { url } = props;
  function goTo(url: string) {
    window.location.assign(url);
  }

  return (
    <>
      <div
        onClick={() => goTo(url)}
        className="w-screen h-screen bg-neutral-950 opacity-60"
      ></div>

      <div className="absolute w-[95%] md:w-[65%] flex flex-col justify-center items-center bottom-0 m-auto p-5 md:p-10 rounded-tr-2xl rounded-tl-2xl bg-white">
        <h3 className="text-neutral-950 font-bold text-3xl items-center mb-5">
          Cookie Policy
        </h3>
        <p className="text-neutral-950 font-normal text-base text-center">
          This website uses cookies to personalize content and ads, provide
          social media features, and analyze our traffic. By clicking 'Allow,'
          you agree to our use of cookies. For more info, visit our Cookie
          Policy.
        </p>

        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <button
            onClick={() => goTo(url)}
            className={clsx(
              "border-none  min-w-52 rounded-lg text-white font-medium text-2xl hover:cursor-pointer hover:brightness-150 py-2 px-10",
              !props.color && "bg-blue-800"
            )}
            type="button"
            style={{
              backgroundColor: props.color,
              border: `2px solid ${props.color}`,
            }}
          >
            Accept
          </button>
          <button
            onClick={() => goTo(url)}
            className={clsx(
              "border-2 min-w-52 rounded-lg bg-transparent font-medium text-2xl hover:cursor-pointer hover:brightness-150 py-2 px-10",
              !props.color && "border-blue-800 text-blue-800"
            )}
            type="button"
            style={{ border: `2px solid ${props.color}` }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
