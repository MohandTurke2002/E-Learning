/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
const Header = () => {
  const { user } = useUser();
  const { href } = window.location;
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log(href);
    setLoggedIn(
      href.toString().includes("/sign-in") ||
        href.toString().includes("/sign-up")
    );
  }, [href]);
  return (
    !loggedIn && (
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-primary" href="#">
                <span className="sr-only">Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="176"
                  height="40"
                  fill="none"
                  viewBox="0 0 176 40"
                >
                  <path
                    fill="#0d9488"
                    fillRule="evenodd"
                    d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#0d9488"
                    d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#"
                    >
                      {" "}
                      Explore{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#"
                    >
                      {" "}
                      Products{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#"
                    >
                      {" "}
                      About Us{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#"
                    >
                      {" "}
                      Contact Us{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-5">
                  <h2 className="flex items-center gap-2">
                    <ShoppingCart />
                    <span className="text-primary">0</span>
                  </h2>
                  <UserButton />
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md hover:bg-hover bg-primary transition-all px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/sign-in"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md hover:bg-hover hover:text-white transition-all bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                      href="/sign-up"
                    >
                      Register
                    </a>
                  </div>
                </div>
              )}

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
