import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="px-3 pt-12 lg:px-9 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900">
        <div class="container grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="sm:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src="/logo/sel-logo-blue-notext.png"
                width={30}
                alt="Light Mode Logo"
              />
              <p className="font-space text-xl font-semibold">Selendra</p>
            </div>
            <div class="mt-6 lg:max-w-xl">
              <p class="text-md text-gray-800 w-80 dark:text-gray-200">
                Selendra Network is developed by{" "}
                <strong>SELENDRA PTE. LTD.</strong> <br />
                531 UPPER CROSS STEET, #04-95, HONG LIM COMPLEX, SINGAPORE
                051531
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
              GET BITRIEL WALLET ON
            </p>
            <div class="grid grid-cols-2 items-center">
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
              Connect
            </p>
            <div class="flex items-center gap-4 mt-3">
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/selendra", "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </div>
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://t.me/selendranetwork", "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
              </div>

              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://twitter.com/selendranetwork", "_blank")
                }
              >
                <svg width="24" height="24" viewBox="0 0 248 204">
                  <path
                    fill="currentColor"
                    d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class=" container flex flex-col-reverse justify-start pb-10 lg:flex-row">
          <p class="text-sm">© Copyright 2020-present. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
