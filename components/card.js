import React from "react";
import { useRouter } from "next/router";

export default function Card(props) {
  const { res } = props;
  const router = useRouter();

  return (
    <div
      className="rounded-xl bg-white transition-all cursor-pointer p-4 border border-gray-100 dark:border-none group hover:shadow-md dark:bg-slate-900 dark:hover:shadow-md dark:hover:shadow-gray-600"
      // onClick={() => router.push(res?.link, "_blank")}
      onClick={() => window.open(res?.link, "_blank")}
    >
      <img src={res?.thumbnail} alt={res?.title} className="w-full" />
      <div className="flex items-center gap-1">
        <h3 className="font-bold text-md md:text-md lg:text-xl  my-4">
          {res?.title}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 group-hover:translate-x-3 duration-300"
        >
          <path
            fillRule="evenodd"
            d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-sm dark:opacity-50 md:text-sm lg:text-md">
        {res?.desc}
      </p>
    </div>
  );
}
