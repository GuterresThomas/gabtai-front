import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

export default function OpcoesDeCursosComponent() {
    return (
        <div className="bg-zinc-900">
            <Card className=" bg-zinc-100 shadow-zinc-400 shadow-sm rounded-xl">
                <CardHeader className=" bg-amarelinho-100">
                    <span className="text-2xl text-amarelinho-200 font-bold"><span className="text-5xl">OPÇÕES</span><br/> DE CURSO PRA VOCÊ</span>
                </CardHeader>
                <CardContent className="md:flex gap-2">
                   <div className="mt-2 text-start p-2">
                        <Image className=" hover:scale-110" alt="imagem" src="/imagem-card-cabelos.jpg" width={300} height={300}/>
                        <span className="text-2xl text-amarelinho-200 font-extrabold">
                            MENTORIA E
                            <Separator/>
                            CONSULTORIA
                        </span>
                   </div>
                   <div className="mt-2 text-start p-2">
                        <Image className=" hover:scale-110" alt="imagem" src="/masterblondes.jpg" width={300} height={300}/>
                        <span className="text-2xl text-amarelinho-200 font-extrabold">
                            ESPECIALIZAÇÃO EM MECHAS
                            <Separator/>
                            ON-LINE
                        </span>
                   </div>
                   <div className="mt-2 text-start p-2">
                        <Image className=" hover:scale-110" alt="imagem" src="/corte-cabelo.jpg" width={300} height={300}/>
                        <span className="text-2xl text-amarelinho-200 font-extrabold">
                            3 TÉCNICAS DE CORTE
                            <Separator/>
                            ESPECIALIZADOS
                        </span>
                   </div>
                </CardContent>
            </Card>
        </div>
    )
}