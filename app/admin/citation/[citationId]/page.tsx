import { Card, CardHeader, CardTitle, CardContent } from "@/card"

export default async function Page(props: {
    params: Promise<{
        citationId: number
    }>
}) {

    const params = await props.params

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Citation
                </CardTitle>
            </CardHeader>
            <CardContent>
                numero: {JSON.stringify(params.citationId)}
            </CardContent>
        </Card>
    )
}