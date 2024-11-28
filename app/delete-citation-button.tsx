"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { deleteCitationAction } from "./citations.action";
import { useRouter } from "next/navigation";

export function DeleteCitationButton(props: { id: number | undefined }) {
    const route = useRouter()

    const onDelete = async () => {
        const result = await deleteCitationAction(props.id)
        if (result.message) {
            route.refresh()
        }
    }

    return (
        <Button size={"sm"} variant={"outline"} onClick={onDelete}>
            X
        </Button >
    )
}