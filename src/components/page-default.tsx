"use client";

import CookiesComponent from "./cookies";

interface IPageDefaultProps {
  hopLink: string;
  backgroundImage: string;
  color: string;
}
export default function PageDefault(props: IPageDefaultProps) {
  return (
    <div
      className={`relative h-screen flex justify-center items-start min-h-screen w-full pb-20 bg-no-repeat bg-cover bg-center lg:bg-center`}
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <CookiesComponent url={props.hopLink} color={props.color} />
    </div>
  );
}
