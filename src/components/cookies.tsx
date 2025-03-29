type CookiesProps = {
  url: string;
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

      <div className="absolute w-8/12 flex flex-col justify-center items-center bottom-0 m-auto p-10 rounded-tr-2xl rounded-tl-2xl bg-white">
        <h3 className="text-neutral-950 font-bold text-3xl items-center mb-5">
          Cookie Policy
        </h3>
        <p className="text-neutral-950 font-normal text-base text-center">
          This website uses cookies to personalize content and ads, provide
          social media features, and analyze our traffic. By clicking 'Allow,'
          you agree to our use of cookies. For more info, visit our Cookie
          Policy.
        </p>

        <div className="flex gap-5 mt-10">
          <button
            onClick={() => goTo(url)}
            className="border-none  min-w-52 rounded-lg bg-blue-800 text-white font-medium text-2xl hover:cursor-pointer hover:brightness-150 py-2 px-10"
            type="button"
          >
            Accept
          </button>
          <button
            onClick={() => goTo(url)}
            className="border-2 min-w-52 border-blue-800 rounded-lg bg-transparent text-blue-800 font-medium text-2xl hover:cursor-pointer hover:brightness-150 py-2 px-10"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
