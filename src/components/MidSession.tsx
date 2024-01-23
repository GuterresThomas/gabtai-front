'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  
export default function MidSessionComponent() {
    return (
        <div className="md:flex">
            <div className="md:w-3/4 md:m-2">
                <Card className="p-2 bg-zinc-100 shadow-zinc-400 shadow-md">
                    <CardContent>
                        <CardContent>
                            <span className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, a autem numquam, ut sint eius itaque ad distinctio eaque, corrupti excepturi ipsum vero rem odio nulla illo deleniti repellendus non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, delectus iste rem incidunt facilis, ea quos vitae vel aperiam consectetur assumenda corrupti repudiandae odio? Totam temporibus tempore itaque dolorem nostrum!
                            </span>
                        </CardContent>
                    </CardContent>
                </Card>
            </div>
            <div className="md:w-2/4 md:m-2">
                <Card className="p-2 bg-zinc-100 shadow-zinc-400 shadow-md">
                    <CardContent>
                        <CardContent>
                            <span className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, a autem numquam, ut sint eius itaque ad distinctio eaque, corrupti excepturi ipsum vero rem odio nulla illo deleniti repellendus non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, delectus iste rem incidunt facilis, ea quos vitae vel aperiam consectetur assumenda corrupti repudiandae odio? Totam temporibus tempore itaque dolorem nostrum!
                            </span>
                        </CardContent>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}