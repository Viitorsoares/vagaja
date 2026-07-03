import { MapPinIcon, Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
    return (
        <header className="w-full px-6 pt-3 flex justify-between bg-fundo">
          <div className="flex gap-1.5">
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-azul">
                <MapPinIcon className="w-4 text-branco"></MapPinIcon>
            </div>
            <p className="text-branco text-xl font-extrabold">vagajá</p>
          </div>

          <div>
          <Bars3Icon className="w-8 text-branco"></Bars3Icon>
          </div>
        </header>
    )
}