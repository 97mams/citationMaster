import { Card } from "../card";
import Link from "next/link";
export function Header() {
    return (<Card className="p-4">
        <Link
            href={"/"}>
            CitationMaster
        </Link>
    </Card>)
}