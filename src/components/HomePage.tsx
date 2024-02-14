'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import CarrosselComponent from "./Carrossel"
import MidSessionComponent from "./MidSession"
import UnderMidSessionComponent from "./UnderMidSession"
import OpcoesDeCursosComponent from "./OpcoesDeCursos"

  


export default function HomePageComponent() {
    return (
        <div className="w-screen h-screen bg-zinc-900">
            <div className="w-screen bg-black h-20 shadow-md flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar className="m-4">
                        <AvatarImage src="/logo-site-gabtai-2.png" className=""  />
                        <AvatarFallback>Logo</AvatarFallback>
                    </Avatar>
                </div>
                <NavigationMenu>
                    <NavigationMenuList className="">
                        <NavigationMenuItem className="">
                            <NavigationMenuLink className="m-1 md:m-2 sm:text-xs md:text-xl cursor-pointer hover:font-bold font-medium text-zinc-100">Cursos</NavigationMenuLink>
                            <NavigationMenuLink className="m-1 md:m-2 sm:text-xs md:text-xl cursor-pointer hover:font-bold font-medium text-zinc-100">Módulos</NavigationMenuLink>
                            <NavigationMenuLink className="m-1 md:m-2 sm:text-xs md:text-xl cursor-pointer hover:font-bold font-medium text-zinc-100">Professores</NavigationMenuLink>
                            <NavigationMenuLink className="m-1 md:m-2 sm:text-xs md:text-xl cursor-pointer hover:font-bold font-medium text-zinc-100">Detalhes</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="md:mt-2 bg-zinc-900">
                <CarrosselComponent/>
            </div>
            <div className="md:mt-2 bg-zinc-900">
                <MidSessionComponent/>
            </div>
            <div className=" bg-zinc-900">
                <UnderMidSessionComponent/>
            </div>
            <div>
                <OpcoesDeCursosComponent/>
            </div>
        </div>
    )

}