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
                <CarouselItem className="w-full md:h-[400px] m-0 flex justify-center"><img src="/imagem-slider.png" className="w-full object-cover md:-mr-40" alt="imagem do carrossel" /></CarouselItem>
                <CarouselItem className="w-full md:h-[400px] m-0 flex justify-center"><img src="/imagem-slider.png" className="w-full object-cover md:-mr-40" alt="imagem do carrossel" /></CarouselItem>
                <CarouselItem className="w-full md:h-[400px] m-0 flex justify-center"><img src="/imagem-slider.png" className="w-full object-cover md:-mr-40" alt="imagem do carrossel" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious/> 
            <CarouselNext className="hidden"/>
            </Carousel>
          
        </div>
    )
}