'use client'

import CarrosselCabelosComponent from "./CarrosselCabelos"
import MidSessionComponent from "./MidSession"
import { Card, CardContent, CardTitle } from "./ui/card"


export default function UnderMidSessionComponent() {
    return (
        <div className="md:flex md:mt-0 md:mb-0 bg-zinc-900">
            <div className="md:w-full md:m-2 md:flex md:gap-2 bg-zinc-900">
                <Card className="p-4 md:w-2/4 bg-zinc-100 shadow-zinc-400 shadow-sm rounded-xl">
                    <CardContent className="">
                    <CardTitle>
                        <span className="text-2xl text-amarelinho-200">Seu futuro em suas mãos</span>
                    </CardTitle>
                            <span className="text-xl font-semibold text-amarelinho-200">
                            SE VOCÊ BUSCA ESCREVER <br/> UMA NOVA HISTÓRIA DE <br/>
                            UMA NOVA CARREIRA <br/> VAMOS ADORAR FAZER PARTE DESTE MOMENTO
                            </span>
                    </CardContent>
                </Card>
                <Card className="p-4 mt-2 md:w-2/4 bg-zinc-100 shadow-zinc-400 shadow-sm rounded-xl">
                    <CardContent>
                        <CardTitle>
                            <span className=" text-3xl font-bold text-amarelinho-200">
                            VOCÊ PODE TER
                            BENEFÍCIOS EM
                            DOBRO
                            </span>
                        </CardTitle>
                        <span className="text-2xl font-semibold">
                        Nosso compromisso é contribuir ao
                        máximo para seu desenvolvimento em
                        relação a especializações que sempre
                        trazem um grande diferencial para todo
                        profissional que inicia na área
                        Quando você conclui o curso em 2024
                        você ganham uma especialização extra
                        sem pagar nada!
                        </span>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}