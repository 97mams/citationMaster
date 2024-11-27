import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Page() {
    return (
        <Card className="bg-white">
            <Link
                className={buttonVariants({ size: "lg", variant: "outline" })}
                href="/admin/citation/new"
            ></Link>
        </Card>
    )
}