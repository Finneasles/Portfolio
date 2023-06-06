import { LangSwitchComponent, LogoComponent, ThemeSwitch } from "@/components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ImNpm } from "react-icons/im";
import { Button } from "@/components";
import React from "react";

export const Footer = ({ transparentNav }) => {
  const socials = [
    { id: "linkedin", href: process.env.NEXT_PUBLIC_LINKEDIN_URL },
    { id: "github", href: process.env.NEXT_PUBLIC_GITHUB_URL },
    { id: "npmjs", href: process.env.NEXT_PUBLIC_NPMJS_URL },
  ];

  return (
    <footer aria-label="Site Footer" className="footer-section">
      <div className="top-foot">
        <div className="lg:flex lg:gap-8">
          <div>
            <LogoComponent transparentNav={transparentNav} />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="font-Poppins text-2xl font-bold uppercase">
                  Get the latest news!
                </h2>

                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  non cupiditate quae nam molestias.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-start">
              <form className="w-full">
                <label
                  htmlFor="email"
                  className="sr-only"
                  aria-label="Email Input Label"
                >
                  {" "}
                  Email{" "}
                </label>

                <div className="rounded-sm border border-gray-200 px-2 py-2 dark:border-white/10 sm:flex sm:items-center">
                  <input
                    className="h-12 w-full border-none bg-transparent p-2 text-sm font-medium uppercase tracking-widest placeholder-gray-400"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <Button
                    href="#"
                    className="h-12 w-full px-4 tracking-wide sm:ml-4 sm:mt-0 sm:w-auto sm:flex-shrink-0"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>

            <div className="col-span-2 flex gap-4 lg:col-span-5">
              {socials.map((link) => {
                return (
                  <a
                    className="hover:opacity-75"
                    href={link.href}
                    key={link.id}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.id === "linkedin" ? (
                      <FaLinkedin />
                    ) : link.id === "github" ? (
                      <FaGithub />
                    ) : link.id === "npmjs" ? (
                      <ImNpm />
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bot-foot">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <p className="flex-grow text-left text-xs">
            Copyright &copy; {new Date().getFullYear()}.{" "}
            {process.env.NEXT_PUBLIC_STATIC_TITLE
              ? process.env.NEXT_PUBLIC_STATIC_TITLE + "."
              : ""}{" "}
            All rights reserved.
          </p>

          <nav className="flex justify-end text-xs">
            <ThemeSwitch />
          </nav>
          {/* <LangSwitchComponent supportedLanguages={["en", "epo"]} /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
