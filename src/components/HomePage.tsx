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
        <div>
            <div className="w-screen bg-zinc-100 h-20 shadow-md flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>Logo</AvatarFallback>
                    </Avatar>
                </div>
                <NavigationMenu className="bg-zinc-100">
                    <NavigationMenuList className="">
                        <NavigationMenuItem className="">
                            <NavigationMenuLink className="m-1 md:m-2 sm:text-xs md:text-xl cursor-pointer hover:font-bold font-medium text-zinc-800">Cursos</NavigationMenuLink>
                            <NavigationMenuLink className="m-1 md:m-2 sm:text-xs md:text-xl cursor-pointer hover:font-bold font-medium text-zinc-800">Módulos</NavigationMenuLink>
                            <NavigationMenuLink className="m-1 md:m-2 sm:text-xs md:text-xl cursor-pointer hover:font-bold font-medium text-zinc-800">Professores</NavigationMenuLink>
                            <NavigationMenuLink className="m-1 md:m-2 sm:text-xs md:text-xl cursor-pointer hover:font-bold font-medium text-zinc-800">Detalhes</NavigationMenuLink>
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