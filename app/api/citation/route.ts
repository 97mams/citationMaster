import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    return NextResponse.json({
        statu: "ok"
    })
}

export async function POST(Request: NextRequest) {
    const formData = await Request.formData()

    const data = {
        json: {
            citation: formData.get('citation'),
            author: formData.get('author')
        }
    }

    const newCitation = await prisma.citation.create(
        {
            data: {
                citation: String(formData.get('citation')),
                author: String(formData.get('author'))
            }
        }
    )

    return NextResponse.json({
        citation: newCitation,
    })
}