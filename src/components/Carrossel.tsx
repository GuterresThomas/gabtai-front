/* eslint-disable @next/next/no-img-element */
'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
export default function CarrosselComponent() {
    return (
        <div className="flex justify-center">
            <Carousel>
            <CarouselContent className="">
                <CarouselItem className="w-full m-0 flex justify-center"><img src="https://random.imagecdn.app/500/150" className="w-full object-cover" alt="imagem do carrossel" /></CarouselItem>
                <CarouselItem className="w-full m-0 flex justify-center"><img src="https://random.imagecdn.app/500/150" className="w-full object-cover" alt="imagem do carrossel" /></CarouselItem>
                <CarouselItem className="w-full m-0 flex justify-center"><img src="https://random.imagecdn.app/500/150" className="w-full object-cover" alt="imagem do carrossel" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className=""/>
            <CarouselNext />
            </Carousel>
          
        </div>
    )
}