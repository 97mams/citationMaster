import { Card, CardHeader, CardTitle, CardContent } from "@/card";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { DeleteCitationButton } from "@/app/delete-citation-button";
import Link from "next/link";
import CitationForm from "@/app/citation-form";

export default async function Page(props: {
    params: Promise<{
        citationId: number
    }>
}) {

    const params = await props.params
    const id = Number(params.citationId)

    const citationOne = await prisma.citation.findUnique({
        where: {
            id,
        }
    })
    console.log(citationOne);


    return (
        <CitationForm citation={citationOne} />
    )
} 