import { Card } from "@/card";
import { prisma } from "@/lib/prisma";

export default async function Page(props: {
    params: Promise<{
        citationId: number
    }>
}) {
    const param = await props.params
    const id = Number(param.citationId)

    const result = await prisma.citation.findUnique({
        where: {
            id
        }
    })

    return (
        <Card className="flex flex-col items-start gap-2 p-4">
            <p className="text-gray-600 italic">
                {result?.citation}
            </p>
            <p className="font-bold">--{result?.author}</p>
        </Card>
    )
}
