"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export async function createCitationAction(citation: {
    citation: String,
    author: String
}) {
    const newCitation = await prisma.citation.create({
        data: {
            citation: String(citation.citation),
            author: String(citation.author)
        }
    })
    if (newCitation) {
        redirect("/")
    }
    return {
        error: "True"
    }
}

export async function updateCitationAction(id: number | undefined, citation: {
    citation: string,
    author: string
}) {
    const newCitation = await prisma.citation.update({
        where: { id, },
        data: {
            citation: citation.citation,
            author: citation.author
        }
    })
    if (newCitation) {
        redirect("/")
    }
    return {
        error: "True"
    }
}

export async function deleteCitationAction(id: number | undefined) {
    await prisma.citation.delete({
        where: {
            id,
        }
    })

    return {
        message: true
    }
} 