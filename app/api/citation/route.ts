import { NextRequest, NextResponse } from "next/server";

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
    console.log(data);

    return NextResponse.json(data)
}