"use client"

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Page() {
    return (
        <Card className="p-4">
            <Link
                className={buttonVariants({ size: "lg", variant: "outline" })}
                href="/admin/citation/new"
            >Create a citation</Link>
        </Card>
    )
}