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
            <CarouselContent>
                <CarouselItem><img src="https://picsum.photos/400/300" alt="imagem do carrossel" /></CarouselItem>
                <CarouselItem><img src="https://picsum.photos/400/300" alt="imagem do carrossel" /></CarouselItem>
                <CarouselItem><img src="https://picsum.photos/400/300" alt="imagem do carrossel" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className=""/>
            <CarouselNext />
            </Carousel>
          
        </div>
    )
}