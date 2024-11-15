import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  banner: {
    key: "2.0-release",
    text: (
      // <a href="https://chainlist.org/chain/1961" target="_blank">
      //   🎉 Selendra on Chainlist. Read more →
      // </a>
      <p>🌱 This is a live document. Continuous updates are forthcoming!</p>
    ),
  },
  logo: (
    <div className="flex items-center gap-2">
      <img
        src="/logo/sel-logo-blue-notext.png"
        width={30}
        alt="Light Mode Logo"
      />
      <p className="font-space text-xl font-semibold">Selendra</p>
    </div>
  ),
  project: {
    link: "https://github.com/selendra",
  },
  chat: {
    link: "https://twitter.com/selendranetwork",
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    ),
  },
  docsRepositoryBase: "https://github.com/selendra",
  footer: {
    component: null,
  },
  primaryHue: 200,
  primarySaturation: 100,
  nextThemes: {
    defaultTheme: "light",
  },
  darkMode: true,
  gitTimestamp: null,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Selendra" />
      <meta property="og:description" content="The next site builder" />
      {/* <meta name="theme-color" content="#f5f5f5" /> */}
    </>
  ),
  useNextSeoProps: () => {
    return {
      titleTemplate: "Selendra Network is an EVM-compatible blockchain platform built with Substrate, focusing on making blockchain accessible and practical for everyday use in Cambodia's emerging digital economy",
    };
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
};

export default config;
