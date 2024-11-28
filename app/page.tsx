import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from "@/card";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { DeleteCitationButton } from "./delete-citation-button";

export default async function Page() {
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
                {
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
                                    up
                                </Link>
                                <Link
                                    className={buttonVariants({ size: "sm", variant: "outline" })}
                                    href={`/admin/${citation.id}`}
                                >
                                    par
                                </Link>
                            </div>
                        </Card>
                    ))
                }
                <Link
                    className={buttonVariants({ size: "lg", variant: "outline" })}
                    href="/admin/citation/new"
                >Create</Link>
            </CardContent>
        </Card>
    )
}