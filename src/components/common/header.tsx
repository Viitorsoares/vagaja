"use client"

import { MapPinIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronRight, X } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", title: "Início" },
  { href: "/driver", title: "Motorista" },
  { href: "/form/loginForm", title: "Agentes" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  function onToggleMenu() {
    setOpen(!open)
  }

  return (
    <header className="w-full bg-fundo sticky top-0 z-50 shadow-md">
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-6 py-6 md:px-8 md:py-5">
        <div className="flex gap-1.5 items-center cursor-pointer">
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-azul md:w-10 md:h-10">
            <MapPinIcon className="w-7 text-text-branco md:w-8"></MapPinIcon>
          </div>
          <p className="text-text-branco text-2xl font-bold xs:text-3xl">vagajá</p>
        </div>

        <nav className="hidden md:block">
          <ul className="flex flex-row items-center gap-1 font-medium text-text-branco lg:gap-2">
            {navLinks.map(link => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 rounded-4xl text-paragraph transition-colors hover:bg-azul lg:px-5"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          {open && (
            <nav className="absolute bg-fundo px-6 pb-8 left-0 top-0 w-full shadow-2xl">
              <div className="w-full flex justify-end mb-10 mt-6">
                <X onClick={onToggleMenu} className="w-9 h-9 text-text-branco cursor-pointer " />
              </div>

              <ul className="flex flex-col gap-4 mt-6 rounded-3xl font-medium text-text-branco">
                {navLinks.map(link => (
                  <li key={link.title}>
                    <Link href={link.href} className="btn-menu">
                      {link.title}
                      <ChevronRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <Bars3Icon onClick={onToggleMenu} className="w-9 text-text-branco cursor-pointer"></Bars3Icon>
        </div>
      </div>
    </header>
  )
}
