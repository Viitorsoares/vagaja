"use client"

import { MapPinIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronRight, X } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false)

  function onToggleMenu() {
    setOpen(!open)
  }

  return (
    <header className="w-full px-6 py-6 flex justify-between bg-fundo sticky top-0 z-50 shadow-md ">
      <div className="flex gap-1.5 cursor-pointer">
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-azul">
          <MapPinIcon className="w-7 text-text-branco"></MapPinIcon>
        </div>
        <p className="text-text-branco text-3xl font-bold">vagajá</p>
      </div>

      <div>
        {open && (
          <nav className="absolute bg-fundo px-6 min-h-[36vh] left-0 top-[0%] w-full shadow-2xl">
            <div className="w-full flex justify-end mb-10 mt-6">
              <X onClick={onToggleMenu} className="w-9 h-9 text-text-branco cursor-pointer "/>
            </div>

            <ul className="flex flex-col gap-4 mt-6 rounded-3xl font-medium text-text-branco md:flex-row">
              <Link href={"/"}>
                <span className="btn-menu">
                  <li>
                    Início
                  </li>
                  <ChevronRight />
                </span>
              </Link>

              <Link href={"/driver"}>
                <span className="btn-menu">
                  <li>
                    Motorista
                  </li>
                  <ChevronRight />
                </span>
              </Link>

              <Link href={"/form/loginForm"}>
                <span className="btn-menu">
                  <li>
                    Agentes
                  </li>
                  <ChevronRight />
                </span>
              </Link>
            </ul>
          </nav>
        )}
      </div>

      <div>
        <Bars3Icon onClick={onToggleMenu} className="w-9 text-text-branco cursor-pointer md:hidden"></Bars3Icon>
      </div>
    </header>
  )
}