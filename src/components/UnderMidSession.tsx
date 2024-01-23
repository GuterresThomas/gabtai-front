'use client'

import { Card, CardContent } from "./ui/card"


export default function UnderMidSessionComponent() {
    return (
        <div className="md:flex md:mt-0 md:mb-0 mt-2 bg-zinc-900">
            <div className="md:w-full md:m-2">
                <Card className="p-2 bg-zinc-100 shadow-zinc-400 shadow-md">
                    <CardContent>
                            <span className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, a autem numquam, ut sint eius itaque ad distinctio eaque, corrupti excepturi ipsum vero rem odio nulla illo deleniti repellendus non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, delectus iste rem incidunt facilis, ea quos vitae vel aperiam consectetur assumenda corrupti repudiandae odio? Totam temporibus tempore itaque dolorem nostrum!
                            </span>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}