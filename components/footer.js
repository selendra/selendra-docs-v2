import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="px-3 pt-12 lg:px-9 border-t-2 bg-gray-50 dark:bg-zinc-900">
        <div class="container grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="sm:col-span-2">
            <a href="#" class="inline-flex items-center">
              <img src="/images/logo.png" alt="logo" class="w-36" />
            </a>
            <div class="mt-6 lg:max-w-xl">
              <p class="text-sm text-gray-800 dark:text-gray-200">
                A Substrate-based smart contract network supporting Wasm and
                EVM, designed for tokenization and incentivizing loyalty
                programs.
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900 dark:text-sky-500">
              Selendra Network
            </p>
            <a href="https://portal.selendra.org/#/explorer" target="_blank">
              Mainnet
            </a>
            <a
              href="https://portal.selendra.org/?rpc=wss%3A%2F%2Frpc0-testnet.selendra.org#/explorer"
              target="_blank"
            >
              Testnet
            </a>
            <p class="text-base font-bold tracking-wide text-gray-900 dark:text-sky-500">
              Legals
            </p>
            <a href="#">Term</a>
            <a href="#">Privacy Policies</a>

            {/* <p class="text-base font-bold tracking-wide text-gray-900 dark:text-sky-500">
              Term
            </p>
            <a href="#">Selendra Network</a>
            <a href="#">Wallet</a> */}
          </div>

          <div>
            <p class="text-base font-bold tracking-wide text-gray-900 dark:text-sky-500">
              WALLET IS ALSO AVAILABLE ON
            </p>
            <div class="grid grid-cols-2 items-center px-2">
              <a href="#" class="w-full min-w-xl">
                <img
                  src="/images/play-store.webp"
                  alt="Playstore Button"
                  class="w-full"
                />
              </a>
              <a class="w-full min-w-xl" href="#">
                <img
                  src="/images/app-store.webp"
                  alt="Youtube Button"
                  class="w-4/5"
                />
              </a>
            </div>
            <p class="text-base font-bold tracking-wide text-gray-900 dark:text-sky-500 mt-10">
              Contacts
            </p>
            <div class="flex items-center gap-4 mt-3">
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/selendra", "_blank")
                }
              >
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.442 0C6.079 0 .108 5.949.108 13.287c0 5.87 3.821 10.85 9.119 12.608.666.123.91-.288.91-.639 0-.317-.012-1.363-.018-2.474-3.709.804-4.491-1.568-4.491-1.568-.607-1.535-1.48-1.944-1.48-1.944-1.21-.825.09-.808.09-.808 1.34.094 2.044 1.37 2.044 1.37 1.19 2.031 3.119 1.444 3.88 1.104.12-.858.465-1.445.847-1.776-2.962-.336-6.075-1.476-6.075-6.567 0-1.45.521-2.636 1.374-3.567-.138-.334-.595-1.685.13-3.516 0 0 1.118-.357 3.667 1.363a12.804 12.804 0 0 1 3.337-.448c1.133.005 2.274.153 3.34.448 2.545-1.72 3.663-1.363 3.663-1.363.725 1.83.269 3.182.13 3.516.855.931 1.373 2.116 1.373 3.567 0 5.104-3.12 6.227-6.088 6.556.478.412.904 1.22.904 2.46 0 1.778-.015 3.21-.015 3.647 0 .354.24.767.916.637 5.294-1.758 9.11-6.737 9.11-12.606C26.775 5.95 20.805 0 13.442 0Z"
                    fill="#000"
                  ></path>
                </svg>
              </div>
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://t.me/selendranetwork", "_blank")
                }
              >
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m8.468 18.267.343-5.287 9.405-8.65c.416-.387-.086-.574-.637-.237L5.969 11.58.95 9.955C-.13 9.643-.141 8.88 1.194 8.33L20.75.631c.894-.412 1.75.225 1.408 1.625l-3.33 16.01c-.234 1.138-.907 1.413-1.838.888l-5.07-3.825-2.437 2.413c-.281.287-.514.525-1.016.525Z"
                    fill="#000"
                  ></path>
                </svg>
              </div>

              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://twitter.com/selendranetwork", "_blank")
                }
              >
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.886 5.988c0-.2-.004-.397-.013-.594a9.327 9.327 0 0 0 2.291-2.378 9.169 9.169 0 0 1-2.637.723 4.612 4.612 0 0 0 2.02-2.54 9.238 9.238 0 0 1-2.917 1.114 4.594 4.594 0 0 0-7.828 4.189 13.041 13.041 0 0 1-9.468-4.799 4.59 4.59 0 0 0 1.422 6.131 4.58 4.58 0 0 1-2.08-.573c-.002.018-.002.037-.002.058A4.595 4.595 0 0 0 5.36 11.82a4.61 4.61 0 0 1-2.075.08 4.6 4.6 0 0 0 4.291 3.19 9.219 9.219 0 0 1-5.705 1.965c-.37 0-.736-.02-1.096-.064a13.007 13.007 0 0 0 7.042 2.063c8.448 0 13.07-6.998 13.07-13.067Z"
                    fill="#000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class=" container flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p class="text-sm text-gray-600">
            © Copyright 2023 Company. All rights reserved.
          </p>
          <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="#"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy &amp; Cookies Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
