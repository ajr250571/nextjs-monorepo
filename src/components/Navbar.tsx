"use client";

import { themeChange } from "theme-change";
import { useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { EnterIcon, PersonIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const { data: session, status } = useSession();

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          MonoRepo
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <select className="select bg-base-300 select-xs" data-choose-theme>
          <option value="business">Oscuro</option>
          <option value="corporate">Claro</option>
          <option value="retro">Retro</option>
        </select>
      </div>

      <div className="dropdown dropdown-end ml-2">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-sm btn-circle avatar bg-base-300"
        >
          <div className="rounded-full">
            {!session && <EnterIcon width="22" height="22" />}
            {session && <PersonIcon width="22" height="22" />}
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-xs dropdown-content z-[1] shadow bg-base-300 w-52 items-center"
        >
          {session && (
            <>
              <p className="btn btn-xs bg-secondary">{session?.user?.name}</p>
              <li>
                <a
                  onClick={() => {
                    signOut();
                  }}
                >
                  Desconectarse
                </a>
              </li>
            </>
          )}
          {!session && (
            <>
              <li>
                <Link href="/auth/login">Conectarse</Link>
              </li>
              <li>
                <Link href="/auth/register">Registrarse</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
