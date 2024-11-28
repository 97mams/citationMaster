"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createCitationAction, updateCitationAction } from "./citations.action";
import { Citation } from "@prisma/client";

export default async function CitationForm(props: { citation?: Citation }) {

    const onSubmit = async (formaData: FormData) => {
        if (props.citation) {
            await updateCitationAction(props.citation.id, {
                citation: String(formaData.get('citation')),
                author: String(formaData.get('author'))
            })
        } else {
            await createCitationAction({
                citation: String(formaData.get('citation')),
                author: String(formaData.get('author'))
            })
        }
    }

    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle>
                    {props.citation ? "Update" : "Create"} citation
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form action={async (formData) => {
                    await onSubmit(formData)
                }}>
                    <div className="flex flex-col gap-2">
                        <Input placeholder="citatoin" name="citation" defaultValue={props.citation?.citation} />
                        <Input placeholder="author" name="author" defaultValue={props.citation?.author} />
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}