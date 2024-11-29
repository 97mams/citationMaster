"use client";

import { Button } from "@/components/ui/button";
import { deleteCitationAction } from "./citations.action";
import { useRouter } from "next/navigation";
import { TrashIcon } from "lucide-react";

export function DeleteCitationButton(props: { id: number | undefined }) {
  const route = useRouter()

  const onDelete = async () => {
    const result = await deleteCitationAction(props.id)
    if (result.message) {
      route.refresh()
    }
  }

  return (
    <Button onClick={onDelete} variant={"outline"}>
      <TrashIcon />
    </Button >
  )
}