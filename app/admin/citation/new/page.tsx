"use client";

import CitationForm from "@/app/citation-form";

export default async function Page() {

    await new Promise(r => setTimeout(r, 1000))

    return (
        <CitationForm />
    )
}