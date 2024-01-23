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
  
  


export default function HomePageComponent() {
    return (
        <div className="w-screen">
            <div className="w-screen bg-black h-20 shadow-md flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar>
                        <AvatarImage src="" />
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
            <div className="m-2">
                <CarrosselComponent/>
            </div>
        </div>
    )

}