'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export default function CarrosselCabelosComponent() {
    return (
        <div className="p-2">
            <Carousel>
            <CarouselContent className="">
                <CarouselItem className="w-full md:h-[400px] m-0 flex justify-center"><img src="/imagem-card-cabelos.jpg" className="" alt="imagem do carrossel" /></CarouselItem>
                <CarouselItem className="w-full md:h-[400px] m-0 flex justify-center"><img src="/imagem-card-cabelos-2.jpg" className="" alt="imagem do carrossel" /></CarouselItem>
                <CarouselItem className="w-full md:h-[400px] m-0 flex justify-center"><img src="/imagem-slider.png" className="" alt="imagem do carrossel" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden"/> 
            <CarouselNext className="hidden"/>
            </Carousel>
        </div>
    )
}