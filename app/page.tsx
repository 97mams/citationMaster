import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader, } from "@/card";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { DeleteCitationButton } from "./delete-citation-button";
import { Share1Icon, Pencil1Icon } from '@radix-ui/react-icons';

export default async function Page() {

    await new Promise(r => setTimeout(r, 500))

    const citations = await prisma.citation.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle>
                    Admin
                </CardTitle>

            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                {citations.length !== 0 ?
                    citations.map(citation => (
                        <Card key={citation.id} className="flex items-start p-4">
                            <div className=" flex flex-col gap-2 flex-1">
                                <p className="relative pl-8 italic before:contents-['*'] before:absolute">
                                    {citation.citation}
                                </p>
                                <p className="font-bold">
                                    --{citation.author}
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <DeleteCitationButton id={citation.id} />
                                <Link
                                    className={buttonVariants({ size: "sm", variant: "outline" })}
                                    href={`/admin/citation/${citation.id}`}
                                >
                                    <Pencil1Icon />
                                </Link>
                                <Link
                                    className={buttonVariants({ size: "sm", variant: "outline" })}
                                    href={`/admin/${citation.id}`}
                                >
                                    <Share1Icon />
                                </Link>
                            </div>
                        </Card>
                    )) : "Create yours citations"
                }
                <Link
                    className={buttonVariants({ size: "lg", variant: "outline" })}
                    href="/admin/citation/new"
                >Create</Link>
            </CardContent>
        </Card>
    )
}