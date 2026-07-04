"use client"

import { MapPinIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false)

  function onToggleMenu() {
    setOpen(!open)
  }

  return (
    <header className="w-full px-6 pt-3 flex justify-between bg-fundo">
      <div className="flex gap-1.5 cursor-pointer">
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-azul">
          <MapPinIcon className="w-4 text-text-branco"></MapPinIcon>
        </div>
        <p className="text-text-branco text-xl font-extrabold">vagajá</p>
      </div>

      <div>
        {open && (
          <nav className="absolute bg-fundo px-6 min-h-[24vh] left-0 top-[5%] w-full">
            <ul className="flex flex-col gap-4 mt-6  rounded-3xlfont-medium text-text-branco md:flex-row">
              <span className="w-full h-15 px-4 items-center flex justify-between rounded-3xl bg-azul">
                <li>
                  <Link href={"/"}>Início</Link>
                </li>
                <ChevronRight />
              </span>
              <span className="w-full h-15 px-4 items-center flex justify-between rounded-3xl bg-azul">
                <li>
                  <Link href={""}>Motorista</Link>
                </li>
                <ChevronRight />
              </span>
              <span className="w-full h-15 px-4 items-center flex justify-between rounded-3xl bg-azul">
                <li>
                  <Link href={""}>Agentes</Link>
                </li>
                <ChevronRight />
              </span>
            </ul>
          </nav>
        )}
      </div>

      <div>
        <Bars3Icon onClick={onToggleMenu} className="w-8 text-text-branco cursor-pointer md:hidden"></Bars3Icon>
      </div>
    </header>
  )
}