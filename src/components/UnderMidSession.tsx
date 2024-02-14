'use client'

import MidSessionComponent from "./MidSession"
import { Card, CardContent, CardTitle } from "./ui/card"


export default function UnderMidSessionComponent() {
    return (
        <div className="md:flex md:mt-0 md:mb-0 mt-2 bg-zinc-900">
            <div className="md:w-full md:m-2">
                <Card className="p-4 bg-zinc-100 shadow-zinc-400 shadow-sm rounded-xl">
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
            </div>
        </div>
    )
}