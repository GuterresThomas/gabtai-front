/* eslint-disable @next/next/no-img-element */
'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { AiFillCheckCircle } from "react-icons/ai";
  import { IconContext } from "react-icons";


  
export default function MidSessionComponent() {
    return (
        <div className="md:flex bg-zinc-900">
            <div className="md:w-3/4 mt-2 md:m-2">
                <Card className="p-2 bg-amarelinho-100 shadow-zinc-400 shadow-sm rounded-xl">
                    <CardContent className="md:justify-center  text-justify md:flex-col md:w-4/4 f">
                            <div className="m-2">
                                <img className="" src="/imagem-card.jpg" alt="modelo"/>
                            </div>
                            <span className="text-xl m-2 bg-amarelinho-200 md:w-2/4 text-white font-light ">
                            <span className="font-bold">Mude agora sua história! </span> Conheça a melhor escola de beleza EAD do país, com centenas de alunos formados em todo o país. Oferecemos cursos inovadores e uma plataforma de aprendizado online de alta qualidade para transformar sua paixão em uma carreira de sucesso. <span className="font-bold">Junte-se a nós e inicie sua jornada para um futuro brilhante!</span>
                            </span>
                    </CardContent>
                </Card>
            </div>
            <div className="md:w-2/4 mt-2 md:m-2 bg-zinc-900">
                <Card className="p-4 bg-zinc-100 shadow-zinc-400 shadow-sm rounded-xl">
                    <CardHeader>
                        <span className="text-2xl text-amarelinho-200 font-bold">Venha estudar com a gente!</span>
                    </CardHeader>
                    <CardContent>

                                <div className="flex flex-col items-center">
                                    <span className="text-xl font-semibold text-amarelinho-200">
                                        Acreditamos que você merece uma
                                        qualidade superior em educação e
                                        por isto criamos um método
                                        inovador para cursos de formação
                                        e especialização de cabeleireiros
                                        na área da beleza.
                                    </span>
                                </div>
                    </CardContent> 
                </Card>
                
                <Card className="p-4 mt-4 bg-zinc-100 shadow-zinc-400 shadow-sm rounded-xl">
                    <CardHeader>
                        <span className="text-2xl text-amarelinho-200 font-bold">NOSSA ESTRATÉGIA PARA VOCÊ CRESCER!</span>
                    </CardHeader>
                    <CardContent>

                                <div className="flex flex-col items-center">
                                    <span className="text-xl font-semibold text-amarelinho-200">
                                       <li>
                                            Criar uma experiência de
                                            imersão inicial para você evoluir
                                            Aulas presenciais e ao vivo com
                                            avaliação semanal. 
                                       </li>
                                        <li>
                                            Acompanhamos seus resultados
                                        e suas dificuldades
                                        </li>
                                        <li>
                                            Aulas de reforço com especialista.
                                        </li>
                                        <li>
                                            Suporte direto 5 dias por semana
                                            durante todo período do curso
                                        </li>
                                    </span>
                                </div>
                    </CardContent> 
                </Card>
                
            </div>
            <div></div>
        </div>
    )
}